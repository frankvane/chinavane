const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./HomePage-aMlv2unH.js","./catalog-DbO5_R7B.js","./ScenariosPage-BpUg0QHg.js"])))=>i.map(i=>d[i]);
var sf=Object.defineProperty;var af=(e,n,t)=>n in e?sf(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var Ha=(e,n,t)=>af(e,typeof n!="symbol"?n+"":n,t);function uf(e,n){for(var t=0;t<n.length;t++){const r=n[t];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=t(o);fetch(o.href,i)}})();function cf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var _c={exports:{}},yi={},Tc={exports:{}},Q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xr=Symbol.for("react.element"),df=Symbol.for("react.portal"),pf=Symbol.for("react.fragment"),mf=Symbol.for("react.strict_mode"),ff=Symbol.for("react.profiler"),gf=Symbol.for("react.provider"),hf=Symbol.for("react.context"),yf=Symbol.for("react.forward_ref"),vf=Symbol.for("react.suspense"),xf=Symbol.for("react.memo"),wf=Symbol.for("react.lazy"),Fa=Symbol.iterator;function Pf(e){return e===null||typeof e!="object"?null:(e=Fa&&e[Fa]||e["@@iterator"],typeof e=="function"?e:null)}var Rc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$c=Object.assign,Mc={};function er(e,n,t){this.props=e,this.context=n,this.refs=Mc,this.updater=t||Rc}er.prototype.isReactComponent={};er.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};er.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ic(){}Ic.prototype=er.prototype;function xs(e,n,t){this.props=e,this.context=n,this.refs=Mc,this.updater=t||Rc}var ws=xs.prototype=new Ic;ws.constructor=xs;$c(ws,er.prototype);ws.isPureReactComponent=!0;var Ba=Array.isArray,Nc=Object.prototype.hasOwnProperty,Ps={current:null},Ec={key:!0,ref:!0,__self:!0,__source:!0};function jc(e,n,t){var r,o={},i=null,l=null;if(n!=null)for(r in n.ref!==void 0&&(l=n.ref),n.key!==void 0&&(i=""+n.key),n)Nc.call(n,r)&&!Ec.hasOwnProperty(r)&&(o[r]=n[r]);var s=arguments.length-2;if(s===1)o.children=t;else if(1<s){for(var a=Array(s),u=0;u<s;u++)a[u]=arguments[u+2];o.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:Xr,type:e,key:i,ref:l,props:o,_owner:Ps.current}}function kf(e,n){return{$$typeof:Xr,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function ks(e){return typeof e=="object"&&e!==null&&e.$$typeof===Xr}function Sf(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var Ua=/\/+/g;function Bi(e,n){return typeof e=="object"&&e!==null&&e.key!=null?Sf(""+e.key):n.toString(36)}function Eo(e,n,t,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Xr:case df:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+Bi(l,0):r,Ba(o)?(t="",e!=null&&(t=e.replace(Ua,"$&/")+"/"),Eo(o,n,t,"",function(u){return u})):o!=null&&(ks(o)&&(o=kf(o,t+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(Ua,"$&/")+"/")+e)),n.push(o)),1;if(l=0,r=r===""?".":r+":",Ba(e))for(var s=0;s<e.length;s++){i=e[s];var a=r+Bi(i,s);l+=Eo(i,n,t,a,o)}else if(a=Pf(e),typeof a=="function")for(e=a.call(e),s=0;!(i=e.next()).done;)i=i.value,a=r+Bi(i,s++),l+=Eo(i,n,t,a,o);else if(i==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return l}function co(e,n,t){if(e==null)return e;var r=[],o=0;return Eo(e,r,"","",function(i){return n.call(t,i,o++)}),r}function bf(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var Ae={current:null},jo={transition:null},Cf={ReactCurrentDispatcher:Ae,ReactCurrentBatchConfig:jo,ReactCurrentOwner:Ps};function Lc(){throw Error("act(...) is not supported in production builds of React.")}Q.Children={map:co,forEach:function(e,n,t){co(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return co(e,function(){n++}),n},toArray:function(e){return co(e,function(n){return n})||[]},only:function(e){if(!ks(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Q.Component=er;Q.Fragment=pf;Q.Profiler=ff;Q.PureComponent=xs;Q.StrictMode=mf;Q.Suspense=vf;Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Cf;Q.act=Lc;Q.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=$c({},e.props),o=e.key,i=e.ref,l=e._owner;if(n!=null){if(n.ref!==void 0&&(i=n.ref,l=Ps.current),n.key!==void 0&&(o=""+n.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in n)Nc.call(n,a)&&!Ec.hasOwnProperty(a)&&(r[a]=n[a]===void 0&&s!==void 0?s[a]:n[a])}var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){s=Array(a);for(var u=0;u<a;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:Xr,type:e.type,key:o,ref:i,props:r,_owner:l}};Q.createContext=function(e){return e={$$typeof:hf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:gf,_context:e},e.Consumer=e};Q.createElement=jc;Q.createFactory=function(e){var n=jc.bind(null,e);return n.type=e,n};Q.createRef=function(){return{current:null}};Q.forwardRef=function(e){return{$$typeof:yf,render:e}};Q.isValidElement=ks;Q.lazy=function(e){return{$$typeof:wf,_payload:{_status:-1,_result:e},_init:bf}};Q.memo=function(e,n){return{$$typeof:xf,type:e,compare:n===void 0?null:n}};Q.startTransition=function(e){var n=jo.transition;jo.transition={};try{e()}finally{jo.transition=n}};Q.unstable_act=Lc;Q.useCallback=function(e,n){return Ae.current.useCallback(e,n)};Q.useContext=function(e){return Ae.current.useContext(e)};Q.useDebugValue=function(){};Q.useDeferredValue=function(e){return Ae.current.useDeferredValue(e)};Q.useEffect=function(e,n){return Ae.current.useEffect(e,n)};Q.useId=function(){return Ae.current.useId()};Q.useImperativeHandle=function(e,n,t){return Ae.current.useImperativeHandle(e,n,t)};Q.useInsertionEffect=function(e,n){return Ae.current.useInsertionEffect(e,n)};Q.useLayoutEffect=function(e,n){return Ae.current.useLayoutEffect(e,n)};Q.useMemo=function(e,n){return Ae.current.useMemo(e,n)};Q.useReducer=function(e,n,t){return Ae.current.useReducer(e,n,t)};Q.useRef=function(e){return Ae.current.useRef(e)};Q.useState=function(e){return Ae.current.useState(e)};Q.useSyncExternalStore=function(e,n,t){return Ae.current.useSyncExternalStore(e,n,t)};Q.useTransition=function(){return Ae.current.useTransition()};Q.version="18.3.1";Tc.exports=Q;var y=Tc.exports;const wt=cf(y),_f=uf({__proto__:null,default:wt},[y]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tf=y,Rf=Symbol.for("react.element"),$f=Symbol.for("react.fragment"),Mf=Object.prototype.hasOwnProperty,If=Tf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Nf={key:!0,ref:!0,__self:!0,__source:!0};function Oc(e,n,t){var r,o={},i=null,l=null;t!==void 0&&(i=""+t),n.key!==void 0&&(i=""+n.key),n.ref!==void 0&&(l=n.ref);for(r in n)Mf.call(n,r)&&!Nf.hasOwnProperty(r)&&(o[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)o[r]===void 0&&(o[r]=n[r]);return{$$typeof:Rf,type:e,key:i,ref:l,props:o,_owner:If.current}}yi.Fragment=$f;yi.jsx=Oc;yi.jsxs=Oc;_c.exports=yi;var d=_c.exports,Dc={exports:{}},Xe={},zc={exports:{}},Wc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n($,z){var U=$.length;$.push(z);e:for(;0<U;){var le=U-1>>>1,se=$[le];if(0<o(se,z))$[le]=z,$[U]=se,U=le;else break e}}function t($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var z=$[0],U=$.pop();if(U!==z){$[0]=U;e:for(var le=0,se=$.length,re=se>>>1;le<re;){var X=2*(le+1)-1,R=$[X],N=X+1,V=$[N];if(0>o(R,U))N<se&&0>o(V,R)?($[le]=V,$[N]=U,le=N):($[le]=R,$[X]=U,le=X);else if(N<se&&0>o(V,U))$[le]=V,$[N]=U,le=N;else break e}}return z}function o($,z){var U=$.sortIndex-z.sortIndex;return U!==0?U:$.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var a=[],u=[],p=1,c=null,m=3,g=!1,x=!1,w=!1,P=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v($){for(var z=t(u);z!==null;){if(z.callback===null)r(u);else if(z.startTime<=$)r(u),z.sortIndex=z.expirationTime,n(a,z);else break;z=t(u)}}function k($){if(w=!1,v($),!x)if(t(a)!==null)x=!0,B(C);else{var z=t(u);z!==null&&te(k,z.startTime-$)}}function C($,z){x=!1,w&&(w=!1,h(j),j=-1),g=!0;var U=m;try{for(v(z),c=t(a);c!==null&&(!(c.expirationTime>z)||$&&!L());){var le=c.callback;if(typeof le=="function"){c.callback=null,m=c.priorityLevel;var se=le(c.expirationTime<=z);z=e.unstable_now(),typeof se=="function"?c.callback=se:c===t(a)&&r(a),v(z)}else r(a);c=t(a)}if(c!==null)var re=!0;else{var X=t(u);X!==null&&te(k,X.startTime-z),re=!1}return re}finally{c=null,m=U,g=!1}}var E=!1,M=null,j=-1,S=5,b=-1;function L(){return!(e.unstable_now()-b<S)}function K(){if(M!==null){var $=e.unstable_now();b=$;var z=!0;try{z=M(!0,$)}finally{z?W():(E=!1,M=null)}}else E=!1}var W;if(typeof f=="function")W=function(){f(K)};else if(typeof MessageChannel<"u"){var A=new MessageChannel,G=A.port2;A.port1.onmessage=K,W=function(){G.postMessage(null)}}else W=function(){P(K,0)};function B($){M=$,E||(E=!0,W())}function te($,z){j=P(function(){$(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function($){$.callback=null},e.unstable_continueExecution=function(){x||g||(x=!0,B(C))},e.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<$?Math.floor(1e3/$):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return t(a)},e.unstable_next=function($){switch(m){case 1:case 2:case 3:var z=3;break;default:z=m}var U=m;m=z;try{return $()}finally{m=U}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function($,z){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var U=m;m=$;try{return z()}finally{m=U}},e.unstable_scheduleCallback=function($,z,U){var le=e.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?le+U:le):U=le,$){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=U+se,$={id:p++,callback:z,priorityLevel:$,startTime:U,expirationTime:se,sortIndex:-1},U>le?($.sortIndex=U,n(u,$),t(a)===null&&$===t(u)&&(w?(h(j),j=-1):w=!0,te(k,U-le))):($.sortIndex=se,n(a,$),x||g||(x=!0,B(C))),$},e.unstable_shouldYield=L,e.unstable_wrapCallback=function($){var z=m;return function(){var U=m;m=z;try{return $.apply(this,arguments)}finally{m=U}}}})(Wc);zc.exports=Wc;var Ef=zc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jf=y,qe=Ef;function _(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ac=new Set,Nr={};function Pt(e,n){Kt(e,n),Kt(e+"Capture",n)}function Kt(e,n){for(Nr[e]=n,e=0;e<n.length;e++)Ac.add(n[e])}var Tn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xl=Object.prototype.hasOwnProperty,Lf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ga={},Va={};function Of(e){return xl.call(Va,e)?!0:xl.call(Ga,e)?!1:Lf.test(e)?Va[e]=!0:(Ga[e]=!0,!1)}function Df(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function zf(e,n,t,r){if(n===null||typeof n>"u"||Df(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function He(e,n,t,r,o,i,l){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=i,this.removeEmptyString=l}var Ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ne[e]=new He(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];Ne[n]=new He(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ne[e]=new He(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ne[e]=new He(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ne[e]=new He(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ne[e]=new He(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ne[e]=new He(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ne[e]=new He(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ne[e]=new He(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ss=/[\-:]([a-z])/g;function bs(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Ss,bs);Ne[n]=new He(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Ss,bs);Ne[n]=new He(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Ss,bs);Ne[n]=new He(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ne[e]=new He(e,1,!1,e.toLowerCase(),null,!1,!1)});Ne.xlinkHref=new He("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ne[e]=new He(e,1,!1,e.toLowerCase(),null,!0,!0)});function Cs(e,n,t,r){var o=Ne.hasOwnProperty(n)?Ne[n]:null;(o!==null?o.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(zf(n,t,o,r)&&(t=null),r||o===null?Of(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):o.mustUseProperty?e[o.propertyName]=t===null?o.type===3?!1:"":t:(n=o.attributeName,r=o.attributeNamespace,t===null?e.removeAttribute(n):(o=o.type,t=o===3||o===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var In=jf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,po=Symbol.for("react.element"),$t=Symbol.for("react.portal"),Mt=Symbol.for("react.fragment"),_s=Symbol.for("react.strict_mode"),wl=Symbol.for("react.profiler"),Hc=Symbol.for("react.provider"),Fc=Symbol.for("react.context"),Ts=Symbol.for("react.forward_ref"),Pl=Symbol.for("react.suspense"),kl=Symbol.for("react.suspense_list"),Rs=Symbol.for("react.memo"),Dn=Symbol.for("react.lazy"),Bc=Symbol.for("react.offscreen"),Ka=Symbol.iterator;function ar(e){return e===null||typeof e!="object"?null:(e=Ka&&e[Ka]||e["@@iterator"],typeof e=="function"?e:null)}var xe=Object.assign,Ui;function yr(e){if(Ui===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Ui=n&&n[1]||""}return`
`+Ui+e}var Gi=!1;function Vi(e,n){if(!e||Gi)return"";Gi=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(u){var r=u}Reflect.construct(e,[],n)}else{try{n.call()}catch(u){r=u}e.call(n.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,s=i.length-1;1<=l&&0<=s&&o[l]!==i[s];)s--;for(;1<=l&&0<=s;l--,s--)if(o[l]!==i[s]){if(l!==1||s!==1)do if(l--,s--,0>s||o[l]!==i[s]){var a=`
`+o[l].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=l&&0<=s);break}}}finally{Gi=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?yr(e):""}function Wf(e){switch(e.tag){case 5:return yr(e.type);case 16:return yr("Lazy");case 13:return yr("Suspense");case 19:return yr("SuspenseList");case 0:case 2:case 15:return e=Vi(e.type,!1),e;case 11:return e=Vi(e.type.render,!1),e;case 1:return e=Vi(e.type,!0),e;default:return""}}function Sl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Mt:return"Fragment";case $t:return"Portal";case wl:return"Profiler";case _s:return"StrictMode";case Pl:return"Suspense";case kl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Fc:return(e.displayName||"Context")+".Consumer";case Hc:return(e._context.displayName||"Context")+".Provider";case Ts:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Rs:return n=e.displayName||null,n!==null?n:Sl(e.type)||"Memo";case Dn:n=e._payload,e=e._init;try{return Sl(e(n))}catch{}}return null}function Af(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Sl(n);case 8:return n===_s?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Zn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Uc(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Hf(e){var n=Uc(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var o=t.get,i=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function mo(e){e._valueTracker||(e._valueTracker=Hf(e))}function Gc(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=Uc(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Vo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function bl(e,n){var t=n.checked;return xe({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Qa(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=Zn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Vc(e,n){n=n.checked,n!=null&&Cs(e,"checked",n,!1)}function Cl(e,n){Vc(e,n);var t=Zn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?_l(e,n.type,t):n.hasOwnProperty("defaultValue")&&_l(e,n.type,Zn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Ya(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function _l(e,n,t){(n!=="number"||Vo(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var vr=Array.isArray;function Ht(e,n,t,r){if(e=e.options,n){n={};for(var o=0;o<t.length;o++)n["$"+t[o]]=!0;for(t=0;t<e.length;t++)o=n.hasOwnProperty("$"+e[t].value),e[t].selected!==o&&(e[t].selected=o),o&&r&&(e[t].defaultSelected=!0)}else{for(t=""+Zn(t),n=null,o=0;o<e.length;o++){if(e[o].value===t){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}n!==null||e[o].disabled||(n=e[o])}n!==null&&(n.selected=!0)}}function Tl(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(_(91));return xe({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function qa(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(_(92));if(vr(t)){if(1<t.length)throw Error(_(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:Zn(t)}}function Kc(e,n){var t=Zn(n.value),r=Zn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function Xa(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Qc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Rl(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Qc(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var fo,Yc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,o){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,o)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(fo=fo||document.createElement("div"),fo.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=fo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Er(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Sr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ff=["Webkit","ms","Moz","O"];Object.keys(Sr).forEach(function(e){Ff.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Sr[n]=Sr[e]})});function qc(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Sr.hasOwnProperty(e)&&Sr[e]?(""+n).trim():n+"px"}function Xc(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,o=qc(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,o):e[t]=o}}var Bf=xe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $l(e,n){if(n){if(Bf[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(_(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(_(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(_(61))}if(n.style!=null&&typeof n.style!="object")throw Error(_(62))}}function Ml(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Il=null;function $s(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Nl=null,Ft=null,Bt=null;function Ja(e){if(e=eo(e)){if(typeof Nl!="function")throw Error(_(280));var n=e.stateNode;n&&(n=ki(n),Nl(e.stateNode,e.type,n))}}function Jc(e){Ft?Bt?Bt.push(e):Bt=[e]:Ft=e}function Zc(){if(Ft){var e=Ft,n=Bt;if(Bt=Ft=null,Ja(e),n)for(e=0;e<n.length;e++)Ja(n[e])}}function ed(e,n){return e(n)}function nd(){}var Ki=!1;function td(e,n,t){if(Ki)return e(n,t);Ki=!0;try{return ed(e,n,t)}finally{Ki=!1,(Ft!==null||Bt!==null)&&(nd(),Zc())}}function jr(e,n){var t=e.stateNode;if(t===null)return null;var r=ki(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(_(231,n,typeof t));return t}var El=!1;if(Tn)try{var ur={};Object.defineProperty(ur,"passive",{get:function(){El=!0}}),window.addEventListener("test",ur,ur),window.removeEventListener("test",ur,ur)}catch{El=!1}function Uf(e,n,t,r,o,i,l,s,a){var u=Array.prototype.slice.call(arguments,3);try{n.apply(t,u)}catch(p){this.onError(p)}}var br=!1,Ko=null,Qo=!1,jl=null,Gf={onError:function(e){br=!0,Ko=e}};function Vf(e,n,t,r,o,i,l,s,a){br=!1,Ko=null,Uf.apply(Gf,arguments)}function Kf(e,n,t,r,o,i,l,s,a){if(Vf.apply(this,arguments),br){if(br){var u=Ko;br=!1,Ko=null}else throw Error(_(198));Qo||(Qo=!0,jl=u)}}function kt(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function rd(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Za(e){if(kt(e)!==e)throw Error(_(188))}function Qf(e){var n=e.alternate;if(!n){if(n=kt(e),n===null)throw Error(_(188));return n!==e?null:e}for(var t=e,r=n;;){var o=t.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){t=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===t)return Za(o),e;if(i===r)return Za(o),n;i=i.sibling}throw Error(_(188))}if(t.return!==r.return)t=o,r=i;else{for(var l=!1,s=o.child;s;){if(s===t){l=!0,t=o,r=i;break}if(s===r){l=!0,r=o,t=i;break}s=s.sibling}if(!l){for(s=i.child;s;){if(s===t){l=!0,t=i,r=o;break}if(s===r){l=!0,r=i,t=o;break}s=s.sibling}if(!l)throw Error(_(189))}}if(t.alternate!==r)throw Error(_(190))}if(t.tag!==3)throw Error(_(188));return t.stateNode.current===t?e:n}function od(e){return e=Qf(e),e!==null?id(e):null}function id(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=id(e);if(n!==null)return n;e=e.sibling}return null}var ld=qe.unstable_scheduleCallback,eu=qe.unstable_cancelCallback,Yf=qe.unstable_shouldYield,qf=qe.unstable_requestPaint,ke=qe.unstable_now,Xf=qe.unstable_getCurrentPriorityLevel,Ms=qe.unstable_ImmediatePriority,sd=qe.unstable_UserBlockingPriority,Yo=qe.unstable_NormalPriority,Jf=qe.unstable_LowPriority,ad=qe.unstable_IdlePriority,vi=null,vn=null;function Zf(e){if(vn&&typeof vn.onCommitFiberRoot=="function")try{vn.onCommitFiberRoot(vi,e,void 0,(e.current.flags&128)===128)}catch{}}var pn=Math.clz32?Math.clz32:tg,eg=Math.log,ng=Math.LN2;function tg(e){return e>>>=0,e===0?32:31-(eg(e)/ng|0)|0}var go=64,ho=4194304;function xr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function qo(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=t&268435455;if(l!==0){var s=l&~o;s!==0?r=xr(s):(i&=l,i!==0&&(r=xr(i)))}else l=t&~o,l!==0?r=xr(l):i!==0&&(r=xr(i));if(r===0)return 0;if(n!==0&&n!==r&&!(n&o)&&(o=r&-r,i=n&-n,o>=i||o===16&&(i&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-pn(n),o=1<<t,r|=e[t],n&=~o;return r}function rg(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function og(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-pn(i),s=1<<l,a=o[l];a===-1?(!(s&t)||s&r)&&(o[l]=rg(s,n)):a<=n&&(e.expiredLanes|=s),i&=~s}}function Ll(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ud(){var e=go;return go<<=1,!(go&4194240)&&(go=64),e}function Qi(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Jr(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-pn(n),e[n]=t}function ig(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var o=31-pn(t),i=1<<o;n[o]=0,r[o]=-1,e[o]=-1,t&=~i}}function Is(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-pn(t),o=1<<r;o&n|e[r]&n&&(e[r]|=n),t&=~o}}var ie=0;function cd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var dd,Ns,pd,md,fd,Ol=!1,yo=[],Un=null,Gn=null,Vn=null,Lr=new Map,Or=new Map,Wn=[],lg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function nu(e,n){switch(e){case"focusin":case"focusout":Un=null;break;case"dragenter":case"dragleave":Gn=null;break;case"mouseover":case"mouseout":Vn=null;break;case"pointerover":case"pointerout":Lr.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Or.delete(n.pointerId)}}function cr(e,n,t,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},n!==null&&(n=eo(n),n!==null&&Ns(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,o!==null&&n.indexOf(o)===-1&&n.push(o),e)}function sg(e,n,t,r,o){switch(n){case"focusin":return Un=cr(Un,e,n,t,r,o),!0;case"dragenter":return Gn=cr(Gn,e,n,t,r,o),!0;case"mouseover":return Vn=cr(Vn,e,n,t,r,o),!0;case"pointerover":var i=o.pointerId;return Lr.set(i,cr(Lr.get(i)||null,e,n,t,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Or.set(i,cr(Or.get(i)||null,e,n,t,r,o)),!0}return!1}function gd(e){var n=ct(e.target);if(n!==null){var t=kt(n);if(t!==null){if(n=t.tag,n===13){if(n=rd(t),n!==null){e.blockedOn=n,fd(e.priority,function(){pd(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Lo(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Dl(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);Il=r,t.target.dispatchEvent(r),Il=null}else return n=eo(t),n!==null&&Ns(n),e.blockedOn=t,!1;n.shift()}return!0}function tu(e,n,t){Lo(e)&&t.delete(n)}function ag(){Ol=!1,Un!==null&&Lo(Un)&&(Un=null),Gn!==null&&Lo(Gn)&&(Gn=null),Vn!==null&&Lo(Vn)&&(Vn=null),Lr.forEach(tu),Or.forEach(tu)}function dr(e,n){e.blockedOn===n&&(e.blockedOn=null,Ol||(Ol=!0,qe.unstable_scheduleCallback(qe.unstable_NormalPriority,ag)))}function Dr(e){function n(o){return dr(o,e)}if(0<yo.length){dr(yo[0],e);for(var t=1;t<yo.length;t++){var r=yo[t];r.blockedOn===e&&(r.blockedOn=null)}}for(Un!==null&&dr(Un,e),Gn!==null&&dr(Gn,e),Vn!==null&&dr(Vn,e),Lr.forEach(n),Or.forEach(n),t=0;t<Wn.length;t++)r=Wn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<Wn.length&&(t=Wn[0],t.blockedOn===null);)gd(t),t.blockedOn===null&&Wn.shift()}var Ut=In.ReactCurrentBatchConfig,Xo=!0;function ug(e,n,t,r){var o=ie,i=Ut.transition;Ut.transition=null;try{ie=1,Es(e,n,t,r)}finally{ie=o,Ut.transition=i}}function cg(e,n,t,r){var o=ie,i=Ut.transition;Ut.transition=null;try{ie=4,Es(e,n,t,r)}finally{ie=o,Ut.transition=i}}function Es(e,n,t,r){if(Xo){var o=Dl(e,n,t,r);if(o===null)ol(e,n,r,Jo,t),nu(e,r);else if(sg(o,e,n,t,r))r.stopPropagation();else if(nu(e,r),n&4&&-1<lg.indexOf(e)){for(;o!==null;){var i=eo(o);if(i!==null&&dd(i),i=Dl(e,n,t,r),i===null&&ol(e,n,r,Jo,t),i===o)break;o=i}o!==null&&r.stopPropagation()}else ol(e,n,r,null,t)}}var Jo=null;function Dl(e,n,t,r){if(Jo=null,e=$s(r),e=ct(e),e!==null)if(n=kt(e),n===null)e=null;else if(t=n.tag,t===13){if(e=rd(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Jo=e,null}function hd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Xf()){case Ms:return 1;case sd:return 4;case Yo:case Jf:return 16;case ad:return 536870912;default:return 16}default:return 16}}var Hn=null,js=null,Oo=null;function yd(){if(Oo)return Oo;var e,n=js,t=n.length,r,o="value"in Hn?Hn.value:Hn.textContent,i=o.length;for(e=0;e<t&&n[e]===o[e];e++);var l=t-e;for(r=1;r<=l&&n[t-r]===o[i-r];r++);return Oo=o.slice(e,1<r?1-r:void 0)}function Do(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function vo(){return!0}function ru(){return!1}function Je(e){function n(t,r,o,i,l){this._reactName=t,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(t=e[s],this[s]=t?t(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?vo:ru,this.isPropagationStopped=ru,this}return xe(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=vo)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=vo)},persist:function(){},isPersistent:vo}),n}var nr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ls=Je(nr),Zr=xe({},nr,{view:0,detail:0}),dg=Je(Zr),Yi,qi,pr,xi=xe({},Zr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Os,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==pr&&(pr&&e.type==="mousemove"?(Yi=e.screenX-pr.screenX,qi=e.screenY-pr.screenY):qi=Yi=0,pr=e),Yi)},movementY:function(e){return"movementY"in e?e.movementY:qi}}),ou=Je(xi),pg=xe({},xi,{dataTransfer:0}),mg=Je(pg),fg=xe({},Zr,{relatedTarget:0}),Xi=Je(fg),gg=xe({},nr,{animationName:0,elapsedTime:0,pseudoElement:0}),hg=Je(gg),yg=xe({},nr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),vg=Je(yg),xg=xe({},nr,{data:0}),iu=Je(xg),wg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Pg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sg(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=kg[e])?!!n[e]:!1}function Os(){return Sg}var bg=xe({},Zr,{key:function(e){if(e.key){var n=wg[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Do(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Pg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Os,charCode:function(e){return e.type==="keypress"?Do(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Do(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Cg=Je(bg),_g=xe({},xi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),lu=Je(_g),Tg=xe({},Zr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Os}),Rg=Je(Tg),$g=xe({},nr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Mg=Je($g),Ig=xe({},xi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ng=Je(Ig),Eg=[9,13,27,32],Ds=Tn&&"CompositionEvent"in window,Cr=null;Tn&&"documentMode"in document&&(Cr=document.documentMode);var jg=Tn&&"TextEvent"in window&&!Cr,vd=Tn&&(!Ds||Cr&&8<Cr&&11>=Cr),su=" ",au=!1;function xd(e,n){switch(e){case"keyup":return Eg.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var It=!1;function Lg(e,n){switch(e){case"compositionend":return wd(n);case"keypress":return n.which!==32?null:(au=!0,su);case"textInput":return e=n.data,e===su&&au?null:e;default:return null}}function Og(e,n){if(It)return e==="compositionend"||!Ds&&xd(e,n)?(e=yd(),Oo=js=Hn=null,It=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return vd&&n.locale!=="ko"?null:n.data;default:return null}}var Dg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function uu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Dg[e.type]:n==="textarea"}function Pd(e,n,t,r){Jc(r),n=Zo(n,"onChange"),0<n.length&&(t=new Ls("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var _r=null,zr=null;function zg(e){Nd(e,0)}function wi(e){var n=jt(e);if(Gc(n))return e}function Wg(e,n){if(e==="change")return n}var kd=!1;if(Tn){var Ji;if(Tn){var Zi="oninput"in document;if(!Zi){var cu=document.createElement("div");cu.setAttribute("oninput","return;"),Zi=typeof cu.oninput=="function"}Ji=Zi}else Ji=!1;kd=Ji&&(!document.documentMode||9<document.documentMode)}function du(){_r&&(_r.detachEvent("onpropertychange",Sd),zr=_r=null)}function Sd(e){if(e.propertyName==="value"&&wi(zr)){var n=[];Pd(n,zr,e,$s(e)),td(zg,n)}}function Ag(e,n,t){e==="focusin"?(du(),_r=n,zr=t,_r.attachEvent("onpropertychange",Sd)):e==="focusout"&&du()}function Hg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return wi(zr)}function Fg(e,n){if(e==="click")return wi(n)}function Bg(e,n){if(e==="input"||e==="change")return wi(n)}function Ug(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var fn=typeof Object.is=="function"?Object.is:Ug;function Wr(e,n){if(fn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var o=t[r];if(!xl.call(n,o)||!fn(e[o],n[o]))return!1}return!0}function pu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function mu(e,n){var t=pu(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=pu(t)}}function bd(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?bd(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Cd(){for(var e=window,n=Vo();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Vo(e.document)}return n}function zs(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Gg(e){var n=Cd(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&bd(t.ownerDocument.documentElement,t)){if(r!==null&&zs(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var o=t.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=mu(t,i);var l=mu(t,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(n=n.createRange(),n.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(n),e.extend(l.node,l.offset)):(n.setEnd(l.node,l.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Vg=Tn&&"documentMode"in document&&11>=document.documentMode,Nt=null,zl=null,Tr=null,Wl=!1;function fu(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Wl||Nt==null||Nt!==Vo(r)||(r=Nt,"selectionStart"in r&&zs(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Tr&&Wr(Tr,r)||(Tr=r,r=Zo(zl,"onSelect"),0<r.length&&(n=new Ls("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=Nt)))}function xo(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Et={animationend:xo("Animation","AnimationEnd"),animationiteration:xo("Animation","AnimationIteration"),animationstart:xo("Animation","AnimationStart"),transitionend:xo("Transition","TransitionEnd")},el={},_d={};Tn&&(_d=document.createElement("div").style,"AnimationEvent"in window||(delete Et.animationend.animation,delete Et.animationiteration.animation,delete Et.animationstart.animation),"TransitionEvent"in window||delete Et.transitionend.transition);function Pi(e){if(el[e])return el[e];if(!Et[e])return e;var n=Et[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in _d)return el[e]=n[t];return e}var Td=Pi("animationend"),Rd=Pi("animationiteration"),$d=Pi("animationstart"),Md=Pi("transitionend"),Id=new Map,gu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function nt(e,n){Id.set(e,n),Pt(n,[e])}for(var nl=0;nl<gu.length;nl++){var tl=gu[nl],Kg=tl.toLowerCase(),Qg=tl[0].toUpperCase()+tl.slice(1);nt(Kg,"on"+Qg)}nt(Td,"onAnimationEnd");nt(Rd,"onAnimationIteration");nt($d,"onAnimationStart");nt("dblclick","onDoubleClick");nt("focusin","onFocus");nt("focusout","onBlur");nt(Md,"onTransitionEnd");Kt("onMouseEnter",["mouseout","mouseover"]);Kt("onMouseLeave",["mouseout","mouseover"]);Kt("onPointerEnter",["pointerout","pointerover"]);Kt("onPointerLeave",["pointerout","pointerover"]);Pt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Pt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Pt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Pt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Pt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Pt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Yg=new Set("cancel close invalid load scroll toggle".split(" ").concat(wr));function hu(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,Kf(r,n,void 0,e),e.currentTarget=null}function Nd(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],o=r.event;r=r.listeners;e:{var i=void 0;if(n)for(var l=r.length-1;0<=l;l--){var s=r[l],a=s.instance,u=s.currentTarget;if(s=s.listener,a!==i&&o.isPropagationStopped())break e;hu(o,s,u),i=a}else for(l=0;l<r.length;l++){if(s=r[l],a=s.instance,u=s.currentTarget,s=s.listener,a!==i&&o.isPropagationStopped())break e;hu(o,s,u),i=a}}}if(Qo)throw e=jl,Qo=!1,jl=null,e}function ce(e,n){var t=n[Ul];t===void 0&&(t=n[Ul]=new Set);var r=e+"__bubble";t.has(r)||(Ed(n,e,2,!1),t.add(r))}function rl(e,n,t){var r=0;n&&(r|=4),Ed(t,e,r,n)}var wo="_reactListening"+Math.random().toString(36).slice(2);function Ar(e){if(!e[wo]){e[wo]=!0,Ac.forEach(function(t){t!=="selectionchange"&&(Yg.has(t)||rl(t,!1,e),rl(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[wo]||(n[wo]=!0,rl("selectionchange",!1,n))}}function Ed(e,n,t,r){switch(hd(n)){case 1:var o=ug;break;case 4:o=cg;break;default:o=Es}t=o.bind(null,n,t,e),o=void 0,!El||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(n,t,{capture:!0,passive:o}):e.addEventListener(n,t,!0):o!==void 0?e.addEventListener(n,t,{passive:o}):e.addEventListener(n,t,!1)}function ol(e,n,t,r,o){var i=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var a=l.tag;if((a===3||a===4)&&(a=l.stateNode.containerInfo,a===o||a.nodeType===8&&a.parentNode===o))return;l=l.return}for(;s!==null;){if(l=ct(s),l===null)return;if(a=l.tag,a===5||a===6){r=i=l;continue e}s=s.parentNode}}r=r.return}td(function(){var u=i,p=$s(t),c=[];e:{var m=Id.get(e);if(m!==void 0){var g=Ls,x=e;switch(e){case"keypress":if(Do(t)===0)break e;case"keydown":case"keyup":g=Cg;break;case"focusin":x="focus",g=Xi;break;case"focusout":x="blur",g=Xi;break;case"beforeblur":case"afterblur":g=Xi;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=ou;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=mg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Rg;break;case Td:case Rd:case $d:g=hg;break;case Md:g=Mg;break;case"scroll":g=dg;break;case"wheel":g=Ng;break;case"copy":case"cut":case"paste":g=vg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=lu}var w=(n&4)!==0,P=!w&&e==="scroll",h=w?m!==null?m+"Capture":null:m;w=[];for(var f=u,v;f!==null;){v=f;var k=v.stateNode;if(v.tag===5&&k!==null&&(v=k,h!==null&&(k=jr(f,h),k!=null&&w.push(Hr(f,k,v)))),P)break;f=f.return}0<w.length&&(m=new g(m,x,null,t,p),c.push({event:m,listeners:w}))}}if(!(n&7)){e:{if(m=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",m&&t!==Il&&(x=t.relatedTarget||t.fromElement)&&(ct(x)||x[Rn]))break e;if((g||m)&&(m=p.window===p?p:(m=p.ownerDocument)?m.defaultView||m.parentWindow:window,g?(x=t.relatedTarget||t.toElement,g=u,x=x?ct(x):null,x!==null&&(P=kt(x),x!==P||x.tag!==5&&x.tag!==6)&&(x=null)):(g=null,x=u),g!==x)){if(w=ou,k="onMouseLeave",h="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(w=lu,k="onPointerLeave",h="onPointerEnter",f="pointer"),P=g==null?m:jt(g),v=x==null?m:jt(x),m=new w(k,f+"leave",g,t,p),m.target=P,m.relatedTarget=v,k=null,ct(p)===u&&(w=new w(h,f+"enter",x,t,p),w.target=v,w.relatedTarget=P,k=w),P=k,g&&x)n:{for(w=g,h=x,f=0,v=w;v;v=Rt(v))f++;for(v=0,k=h;k;k=Rt(k))v++;for(;0<f-v;)w=Rt(w),f--;for(;0<v-f;)h=Rt(h),v--;for(;f--;){if(w===h||h!==null&&w===h.alternate)break n;w=Rt(w),h=Rt(h)}w=null}else w=null;g!==null&&yu(c,m,g,w,!1),x!==null&&P!==null&&yu(c,P,x,w,!0)}}e:{if(m=u?jt(u):window,g=m.nodeName&&m.nodeName.toLowerCase(),g==="select"||g==="input"&&m.type==="file")var C=Wg;else if(uu(m))if(kd)C=Bg;else{C=Hg;var E=Ag}else(g=m.nodeName)&&g.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(C=Fg);if(C&&(C=C(e,u))){Pd(c,C,t,p);break e}E&&E(e,m,u),e==="focusout"&&(E=m._wrapperState)&&E.controlled&&m.type==="number"&&_l(m,"number",m.value)}switch(E=u?jt(u):window,e){case"focusin":(uu(E)||E.contentEditable==="true")&&(Nt=E,zl=u,Tr=null);break;case"focusout":Tr=zl=Nt=null;break;case"mousedown":Wl=!0;break;case"contextmenu":case"mouseup":case"dragend":Wl=!1,fu(c,t,p);break;case"selectionchange":if(Vg)break;case"keydown":case"keyup":fu(c,t,p)}var M;if(Ds)e:{switch(e){case"compositionstart":var j="onCompositionStart";break e;case"compositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else It?xd(e,t)&&(j="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(j="onCompositionStart");j&&(vd&&t.locale!=="ko"&&(It||j!=="onCompositionStart"?j==="onCompositionEnd"&&It&&(M=yd()):(Hn=p,js="value"in Hn?Hn.value:Hn.textContent,It=!0)),E=Zo(u,j),0<E.length&&(j=new iu(j,e,null,t,p),c.push({event:j,listeners:E}),M?j.data=M:(M=wd(t),M!==null&&(j.data=M)))),(M=jg?Lg(e,t):Og(e,t))&&(u=Zo(u,"onBeforeInput"),0<u.length&&(p=new iu("onBeforeInput","beforeinput",null,t,p),c.push({event:p,listeners:u}),p.data=M))}Nd(c,n)})}function Hr(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Zo(e,n){for(var t=n+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=jr(e,t),i!=null&&r.unshift(Hr(e,i,o)),i=jr(e,n),i!=null&&r.push(Hr(e,i,o))),e=e.return}return r}function Rt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function yu(e,n,t,r,o){for(var i=n._reactName,l=[];t!==null&&t!==r;){var s=t,a=s.alternate,u=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&u!==null&&(s=u,o?(a=jr(t,i),a!=null&&l.unshift(Hr(t,a,s))):o||(a=jr(t,i),a!=null&&l.push(Hr(t,a,s)))),t=t.return}l.length!==0&&e.push({event:n,listeners:l})}var qg=/\r\n?/g,Xg=/\u0000|\uFFFD/g;function vu(e){return(typeof e=="string"?e:""+e).replace(qg,`
`).replace(Xg,"")}function Po(e,n,t){if(n=vu(n),vu(e)!==n&&t)throw Error(_(425))}function ei(){}var Al=null,Hl=null;function Fl(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Bl=typeof setTimeout=="function"?setTimeout:void 0,Jg=typeof clearTimeout=="function"?clearTimeout:void 0,xu=typeof Promise=="function"?Promise:void 0,Zg=typeof queueMicrotask=="function"?queueMicrotask:typeof xu<"u"?function(e){return xu.resolve(null).then(e).catch(eh)}:Bl;function eh(e){setTimeout(function(){throw e})}function il(e,n){var t=n,r=0;do{var o=t.nextSibling;if(e.removeChild(t),o&&o.nodeType===8)if(t=o.data,t==="/$"){if(r===0){e.removeChild(o),Dr(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=o}while(t);Dr(n)}function Kn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function wu(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var tr=Math.random().toString(36).slice(2),yn="__reactFiber$"+tr,Fr="__reactProps$"+tr,Rn="__reactContainer$"+tr,Ul="__reactEvents$"+tr,nh="__reactListeners$"+tr,th="__reactHandles$"+tr;function ct(e){var n=e[yn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Rn]||t[yn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=wu(e);e!==null;){if(t=e[yn])return t;e=wu(e)}return n}e=t,t=e.parentNode}return null}function eo(e){return e=e[yn]||e[Rn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function jt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(_(33))}function ki(e){return e[Fr]||null}var Gl=[],Lt=-1;function tt(e){return{current:e}}function de(e){0>Lt||(e.current=Gl[Lt],Gl[Lt]=null,Lt--)}function ae(e,n){Lt++,Gl[Lt]=e.current,e.current=n}var et={},De=tt(et),Ue=tt(!1),gt=et;function Qt(e,n){var t=e.type.contextTypes;if(!t)return et;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in t)o[i]=n[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ge(e){return e=e.childContextTypes,e!=null}function ni(){de(Ue),de(De)}function Pu(e,n,t){if(De.current!==et)throw Error(_(168));ae(De,n),ae(Ue,t)}function jd(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var o in r)if(!(o in n))throw Error(_(108,Af(e)||"Unknown",o));return xe({},t,r)}function ti(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||et,gt=De.current,ae(De,e),ae(Ue,Ue.current),!0}function ku(e,n,t){var r=e.stateNode;if(!r)throw Error(_(169));t?(e=jd(e,n,gt),r.__reactInternalMemoizedMergedChildContext=e,de(Ue),de(De),ae(De,e)):de(Ue),ae(Ue,t)}var Sn=null,Si=!1,ll=!1;function Ld(e){Sn===null?Sn=[e]:Sn.push(e)}function rh(e){Si=!0,Ld(e)}function rt(){if(!ll&&Sn!==null){ll=!0;var e=0,n=ie;try{var t=Sn;for(ie=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}Sn=null,Si=!1}catch(o){throw Sn!==null&&(Sn=Sn.slice(e+1)),ld(Ms,rt),o}finally{ie=n,ll=!1}}return null}var Ot=[],Dt=0,ri=null,oi=0,en=[],nn=0,ht=null,bn=1,Cn="";function at(e,n){Ot[Dt++]=oi,Ot[Dt++]=ri,ri=e,oi=n}function Od(e,n,t){en[nn++]=bn,en[nn++]=Cn,en[nn++]=ht,ht=e;var r=bn;e=Cn;var o=32-pn(r)-1;r&=~(1<<o),t+=1;var i=32-pn(n)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,bn=1<<32-pn(n)+o|t<<o|r,Cn=i+e}else bn=1<<i|t<<o|r,Cn=e}function Ws(e){e.return!==null&&(at(e,1),Od(e,1,0))}function As(e){for(;e===ri;)ri=Ot[--Dt],Ot[Dt]=null,oi=Ot[--Dt],Ot[Dt]=null;for(;e===ht;)ht=en[--nn],en[nn]=null,Cn=en[--nn],en[nn]=null,bn=en[--nn],en[nn]=null}var Ye=null,Qe=null,fe=!1,dn=null;function Dd(e,n){var t=tn(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Su(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Ye=e,Qe=Kn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Ye=e,Qe=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=ht!==null?{id:bn,overflow:Cn}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=tn(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Ye=e,Qe=null,!0):!1;default:return!1}}function Vl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Kl(e){if(fe){var n=Qe;if(n){var t=n;if(!Su(e,n)){if(Vl(e))throw Error(_(418));n=Kn(t.nextSibling);var r=Ye;n&&Su(e,n)?Dd(r,t):(e.flags=e.flags&-4097|2,fe=!1,Ye=e)}}else{if(Vl(e))throw Error(_(418));e.flags=e.flags&-4097|2,fe=!1,Ye=e}}}function bu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ye=e}function ko(e){if(e!==Ye)return!1;if(!fe)return bu(e),fe=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Fl(e.type,e.memoizedProps)),n&&(n=Qe)){if(Vl(e))throw zd(),Error(_(418));for(;n;)Dd(e,n),n=Kn(n.nextSibling)}if(bu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(_(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Qe=Kn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Qe=null}}else Qe=Ye?Kn(e.stateNode.nextSibling):null;return!0}function zd(){for(var e=Qe;e;)e=Kn(e.nextSibling)}function Yt(){Qe=Ye=null,fe=!1}function Hs(e){dn===null?dn=[e]:dn.push(e)}var oh=In.ReactCurrentBatchConfig;function mr(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(_(309));var r=t.stateNode}if(!r)throw Error(_(147,e));var o=r,i=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===i?n.ref:(n=function(l){var s=o.refs;l===null?delete s[i]:s[i]=l},n._stringRef=i,n)}if(typeof e!="string")throw Error(_(284));if(!t._owner)throw Error(_(290,e))}return e}function So(e,n){throw e=Object.prototype.toString.call(n),Error(_(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Cu(e){var n=e._init;return n(e._payload)}function Wd(e){function n(h,f){if(e){var v=h.deletions;v===null?(h.deletions=[f],h.flags|=16):v.push(f)}}function t(h,f){if(!e)return null;for(;f!==null;)n(h,f),f=f.sibling;return null}function r(h,f){for(h=new Map;f!==null;)f.key!==null?h.set(f.key,f):h.set(f.index,f),f=f.sibling;return h}function o(h,f){return h=Xn(h,f),h.index=0,h.sibling=null,h}function i(h,f,v){return h.index=v,e?(v=h.alternate,v!==null?(v=v.index,v<f?(h.flags|=2,f):v):(h.flags|=2,f)):(h.flags|=1048576,f)}function l(h){return e&&h.alternate===null&&(h.flags|=2),h}function s(h,f,v,k){return f===null||f.tag!==6?(f=ml(v,h.mode,k),f.return=h,f):(f=o(f,v),f.return=h,f)}function a(h,f,v,k){var C=v.type;return C===Mt?p(h,f,v.props.children,k,v.key):f!==null&&(f.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Dn&&Cu(C)===f.type)?(k=o(f,v.props),k.ref=mr(h,f,v),k.return=h,k):(k=Uo(v.type,v.key,v.props,null,h.mode,k),k.ref=mr(h,f,v),k.return=h,k)}function u(h,f,v,k){return f===null||f.tag!==4||f.stateNode.containerInfo!==v.containerInfo||f.stateNode.implementation!==v.implementation?(f=fl(v,h.mode,k),f.return=h,f):(f=o(f,v.children||[]),f.return=h,f)}function p(h,f,v,k,C){return f===null||f.tag!==7?(f=ft(v,h.mode,k,C),f.return=h,f):(f=o(f,v),f.return=h,f)}function c(h,f,v){if(typeof f=="string"&&f!==""||typeof f=="number")return f=ml(""+f,h.mode,v),f.return=h,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case po:return v=Uo(f.type,f.key,f.props,null,h.mode,v),v.ref=mr(h,null,f),v.return=h,v;case $t:return f=fl(f,h.mode,v),f.return=h,f;case Dn:var k=f._init;return c(h,k(f._payload),v)}if(vr(f)||ar(f))return f=ft(f,h.mode,v,null),f.return=h,f;So(h,f)}return null}function m(h,f,v,k){var C=f!==null?f.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return C!==null?null:s(h,f,""+v,k);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case po:return v.key===C?a(h,f,v,k):null;case $t:return v.key===C?u(h,f,v,k):null;case Dn:return C=v._init,m(h,f,C(v._payload),k)}if(vr(v)||ar(v))return C!==null?null:p(h,f,v,k,null);So(h,v)}return null}function g(h,f,v,k,C){if(typeof k=="string"&&k!==""||typeof k=="number")return h=h.get(v)||null,s(f,h,""+k,C);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case po:return h=h.get(k.key===null?v:k.key)||null,a(f,h,k,C);case $t:return h=h.get(k.key===null?v:k.key)||null,u(f,h,k,C);case Dn:var E=k._init;return g(h,f,v,E(k._payload),C)}if(vr(k)||ar(k))return h=h.get(v)||null,p(f,h,k,C,null);So(f,k)}return null}function x(h,f,v,k){for(var C=null,E=null,M=f,j=f=0,S=null;M!==null&&j<v.length;j++){M.index>j?(S=M,M=null):S=M.sibling;var b=m(h,M,v[j],k);if(b===null){M===null&&(M=S);break}e&&M&&b.alternate===null&&n(h,M),f=i(b,f,j),E===null?C=b:E.sibling=b,E=b,M=S}if(j===v.length)return t(h,M),fe&&at(h,j),C;if(M===null){for(;j<v.length;j++)M=c(h,v[j],k),M!==null&&(f=i(M,f,j),E===null?C=M:E.sibling=M,E=M);return fe&&at(h,j),C}for(M=r(h,M);j<v.length;j++)S=g(M,h,j,v[j],k),S!==null&&(e&&S.alternate!==null&&M.delete(S.key===null?j:S.key),f=i(S,f,j),E===null?C=S:E.sibling=S,E=S);return e&&M.forEach(function(L){return n(h,L)}),fe&&at(h,j),C}function w(h,f,v,k){var C=ar(v);if(typeof C!="function")throw Error(_(150));if(v=C.call(v),v==null)throw Error(_(151));for(var E=C=null,M=f,j=f=0,S=null,b=v.next();M!==null&&!b.done;j++,b=v.next()){M.index>j?(S=M,M=null):S=M.sibling;var L=m(h,M,b.value,k);if(L===null){M===null&&(M=S);break}e&&M&&L.alternate===null&&n(h,M),f=i(L,f,j),E===null?C=L:E.sibling=L,E=L,M=S}if(b.done)return t(h,M),fe&&at(h,j),C;if(M===null){for(;!b.done;j++,b=v.next())b=c(h,b.value,k),b!==null&&(f=i(b,f,j),E===null?C=b:E.sibling=b,E=b);return fe&&at(h,j),C}for(M=r(h,M);!b.done;j++,b=v.next())b=g(M,h,j,b.value,k),b!==null&&(e&&b.alternate!==null&&M.delete(b.key===null?j:b.key),f=i(b,f,j),E===null?C=b:E.sibling=b,E=b);return e&&M.forEach(function(K){return n(h,K)}),fe&&at(h,j),C}function P(h,f,v,k){if(typeof v=="object"&&v!==null&&v.type===Mt&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case po:e:{for(var C=v.key,E=f;E!==null;){if(E.key===C){if(C=v.type,C===Mt){if(E.tag===7){t(h,E.sibling),f=o(E,v.props.children),f.return=h,h=f;break e}}else if(E.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Dn&&Cu(C)===E.type){t(h,E.sibling),f=o(E,v.props),f.ref=mr(h,E,v),f.return=h,h=f;break e}t(h,E);break}else n(h,E);E=E.sibling}v.type===Mt?(f=ft(v.props.children,h.mode,k,v.key),f.return=h,h=f):(k=Uo(v.type,v.key,v.props,null,h.mode,k),k.ref=mr(h,f,v),k.return=h,h=k)}return l(h);case $t:e:{for(E=v.key;f!==null;){if(f.key===E)if(f.tag===4&&f.stateNode.containerInfo===v.containerInfo&&f.stateNode.implementation===v.implementation){t(h,f.sibling),f=o(f,v.children||[]),f.return=h,h=f;break e}else{t(h,f);break}else n(h,f);f=f.sibling}f=fl(v,h.mode,k),f.return=h,h=f}return l(h);case Dn:return E=v._init,P(h,f,E(v._payload),k)}if(vr(v))return x(h,f,v,k);if(ar(v))return w(h,f,v,k);So(h,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,f!==null&&f.tag===6?(t(h,f.sibling),f=o(f,v),f.return=h,h=f):(t(h,f),f=ml(v,h.mode,k),f.return=h,h=f),l(h)):t(h,f)}return P}var qt=Wd(!0),Ad=Wd(!1),ii=tt(null),li=null,zt=null,Fs=null;function Bs(){Fs=zt=li=null}function Us(e){var n=ii.current;de(ii),e._currentValue=n}function Ql(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function Gt(e,n){li=e,Fs=zt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(Be=!0),e.firstContext=null)}function on(e){var n=e._currentValue;if(Fs!==e)if(e={context:e,memoizedValue:n,next:null},zt===null){if(li===null)throw Error(_(308));zt=e,li.dependencies={lanes:0,firstContext:e}}else zt=zt.next=e;return n}var dt=null;function Gs(e){dt===null?dt=[e]:dt.push(e)}function Hd(e,n,t,r){var o=n.interleaved;return o===null?(t.next=t,Gs(n)):(t.next=o.next,o.next=t),n.interleaved=t,$n(e,r)}function $n(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var zn=!1;function Vs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Fd(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function _n(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Qn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ee&2){var o=r.pending;return o===null?n.next=n:(n.next=o.next,o.next=n),r.pending=n,$n(e,t)}return o=r.interleaved,o===null?(n.next=n,Gs(r)):(n.next=o.next,o.next=n),r.interleaved=n,$n(e,t)}function zo(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Is(e,t)}}function _u(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var o=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var l={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};i===null?o=i=l:i=i.next=l,t=t.next}while(t!==null);i===null?o=i=n:i=i.next=n}else o=i=n;t={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function si(e,n,t,r){var o=e.updateQueue;zn=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var a=s,u=a.next;a.next=null,l===null?i=u:l.next=u,l=a;var p=e.alternate;p!==null&&(p=p.updateQueue,s=p.lastBaseUpdate,s!==l&&(s===null?p.firstBaseUpdate=u:s.next=u,p.lastBaseUpdate=a))}if(i!==null){var c=o.baseState;l=0,p=u=a=null,s=i;do{var m=s.lane,g=s.eventTime;if((r&m)===m){p!==null&&(p=p.next={eventTime:g,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var x=e,w=s;switch(m=n,g=t,w.tag){case 1:if(x=w.payload,typeof x=="function"){c=x.call(g,c,m);break e}c=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=w.payload,m=typeof x=="function"?x.call(g,c,m):x,m==null)break e;c=xe({},c,m);break e;case 2:zn=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,m=o.effects,m===null?o.effects=[s]:m.push(s))}else g={eventTime:g,lane:m,tag:s.tag,payload:s.payload,callback:s.callback,next:null},p===null?(u=p=g,a=c):p=p.next=g,l|=m;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;m=s,s=m.next,m.next=null,o.lastBaseUpdate=m,o.shared.pending=null}}while(!0);if(p===null&&(a=c),o.baseState=a,o.firstBaseUpdate=u,o.lastBaseUpdate=p,n=o.shared.interleaved,n!==null){o=n;do l|=o.lane,o=o.next;while(o!==n)}else i===null&&(o.shared.lanes=0);vt|=l,e.lanes=l,e.memoizedState=c}}function Tu(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],o=r.callback;if(o!==null){if(r.callback=null,r=t,typeof o!="function")throw Error(_(191,o));o.call(r)}}}var no={},xn=tt(no),Br=tt(no),Ur=tt(no);function pt(e){if(e===no)throw Error(_(174));return e}function Ks(e,n){switch(ae(Ur,n),ae(Br,e),ae(xn,no),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Rl(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Rl(n,e)}de(xn),ae(xn,n)}function Xt(){de(xn),de(Br),de(Ur)}function Bd(e){pt(Ur.current);var n=pt(xn.current),t=Rl(n,e.type);n!==t&&(ae(Br,e),ae(xn,t))}function Qs(e){Br.current===e&&(de(xn),de(Br))}var ye=tt(0);function ai(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var sl=[];function Ys(){for(var e=0;e<sl.length;e++)sl[e]._workInProgressVersionPrimary=null;sl.length=0}var Wo=In.ReactCurrentDispatcher,al=In.ReactCurrentBatchConfig,yt=0,ve=null,Ce=null,Re=null,ui=!1,Rr=!1,Gr=0,ih=0;function je(){throw Error(_(321))}function qs(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!fn(e[t],n[t]))return!1;return!0}function Xs(e,n,t,r,o,i){if(yt=i,ve=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Wo.current=e===null||e.memoizedState===null?uh:ch,e=t(r,o),Rr){i=0;do{if(Rr=!1,Gr=0,25<=i)throw Error(_(301));i+=1,Re=Ce=null,n.updateQueue=null,Wo.current=dh,e=t(r,o)}while(Rr)}if(Wo.current=ci,n=Ce!==null&&Ce.next!==null,yt=0,Re=Ce=ve=null,ui=!1,n)throw Error(_(300));return e}function Js(){var e=Gr!==0;return Gr=0,e}function hn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Re===null?ve.memoizedState=Re=e:Re=Re.next=e,Re}function ln(){if(Ce===null){var e=ve.alternate;e=e!==null?e.memoizedState:null}else e=Ce.next;var n=Re===null?ve.memoizedState:Re.next;if(n!==null)Re=n,Ce=e;else{if(e===null)throw Error(_(310));Ce=e,e={memoizedState:Ce.memoizedState,baseState:Ce.baseState,baseQueue:Ce.baseQueue,queue:Ce.queue,next:null},Re===null?ve.memoizedState=Re=e:Re=Re.next=e}return Re}function Vr(e,n){return typeof n=="function"?n(e):n}function ul(e){var n=ln(),t=n.queue;if(t===null)throw Error(_(311));t.lastRenderedReducer=e;var r=Ce,o=r.baseQueue,i=t.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,t.pending=null}if(o!==null){i=o.next,r=r.baseState;var s=l=null,a=null,u=i;do{var p=u.lane;if((yt&p)===p)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var c={lane:p,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(s=a=c,l=r):a=a.next=c,ve.lanes|=p,vt|=p}u=u.next}while(u!==null&&u!==i);a===null?l=r:a.next=s,fn(r,n.memoizedState)||(Be=!0),n.memoizedState=r,n.baseState=l,n.baseQueue=a,t.lastRenderedState=r}if(e=t.interleaved,e!==null){o=e;do i=o.lane,ve.lanes|=i,vt|=i,o=o.next;while(o!==e)}else o===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function cl(e){var n=ln(),t=n.queue;if(t===null)throw Error(_(311));t.lastRenderedReducer=e;var r=t.dispatch,o=t.pending,i=n.memoizedState;if(o!==null){t.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);fn(i,n.memoizedState)||(Be=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),t.lastRenderedState=i}return[i,r]}function Ud(){}function Gd(e,n){var t=ve,r=ln(),o=n(),i=!fn(r.memoizedState,o);if(i&&(r.memoizedState=o,Be=!0),r=r.queue,Zs(Qd.bind(null,t,r,e),[e]),r.getSnapshot!==n||i||Re!==null&&Re.memoizedState.tag&1){if(t.flags|=2048,Kr(9,Kd.bind(null,t,r,o,n),void 0,null),$e===null)throw Error(_(349));yt&30||Vd(t,n,o)}return o}function Vd(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=ve.updateQueue,n===null?(n={lastEffect:null,stores:null},ve.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Kd(e,n,t,r){n.value=t,n.getSnapshot=r,Yd(n)&&qd(e)}function Qd(e,n,t){return t(function(){Yd(n)&&qd(e)})}function Yd(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!fn(e,t)}catch{return!0}}function qd(e){var n=$n(e,1);n!==null&&mn(n,e,1,-1)}function Ru(e){var n=hn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vr,lastRenderedState:e},n.queue=e,e=e.dispatch=ah.bind(null,ve,e),[n.memoizedState,e]}function Kr(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=ve.updateQueue,n===null?(n={lastEffect:null,stores:null},ve.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function Xd(){return ln().memoizedState}function Ao(e,n,t,r){var o=hn();ve.flags|=e,o.memoizedState=Kr(1|n,t,void 0,r===void 0?null:r)}function bi(e,n,t,r){var o=ln();r=r===void 0?null:r;var i=void 0;if(Ce!==null){var l=Ce.memoizedState;if(i=l.destroy,r!==null&&qs(r,l.deps)){o.memoizedState=Kr(n,t,i,r);return}}ve.flags|=e,o.memoizedState=Kr(1|n,t,i,r)}function $u(e,n){return Ao(8390656,8,e,n)}function Zs(e,n){return bi(2048,8,e,n)}function Jd(e,n){return bi(4,2,e,n)}function Zd(e,n){return bi(4,4,e,n)}function ep(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function np(e,n,t){return t=t!=null?t.concat([e]):null,bi(4,4,ep.bind(null,n,e),t)}function ea(){}function tp(e,n){var t=ln();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&qs(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function rp(e,n){var t=ln();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&qs(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function op(e,n,t){return yt&21?(fn(t,n)||(t=ud(),ve.lanes|=t,vt|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,Be=!0),e.memoizedState=t)}function lh(e,n){var t=ie;ie=t!==0&&4>t?t:4,e(!0);var r=al.transition;al.transition={};try{e(!1),n()}finally{ie=t,al.transition=r}}function ip(){return ln().memoizedState}function sh(e,n,t){var r=qn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},lp(e))sp(n,t);else if(t=Hd(e,n,t,r),t!==null){var o=We();mn(t,e,r,o),ap(t,n,r)}}function ah(e,n,t){var r=qn(e),o={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(lp(e))sp(n,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var l=n.lastRenderedState,s=i(l,t);if(o.hasEagerState=!0,o.eagerState=s,fn(s,l)){var a=n.interleaved;a===null?(o.next=o,Gs(n)):(o.next=a.next,a.next=o),n.interleaved=o;return}}catch{}finally{}t=Hd(e,n,o,r),t!==null&&(o=We(),mn(t,e,r,o),ap(t,n,r))}}function lp(e){var n=e.alternate;return e===ve||n!==null&&n===ve}function sp(e,n){Rr=ui=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function ap(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Is(e,t)}}var ci={readContext:on,useCallback:je,useContext:je,useEffect:je,useImperativeHandle:je,useInsertionEffect:je,useLayoutEffect:je,useMemo:je,useReducer:je,useRef:je,useState:je,useDebugValue:je,useDeferredValue:je,useTransition:je,useMutableSource:je,useSyncExternalStore:je,useId:je,unstable_isNewReconciler:!1},uh={readContext:on,useCallback:function(e,n){return hn().memoizedState=[e,n===void 0?null:n],e},useContext:on,useEffect:$u,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Ao(4194308,4,ep.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Ao(4194308,4,e,n)},useInsertionEffect:function(e,n){return Ao(4,2,e,n)},useMemo:function(e,n){var t=hn();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=hn();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=sh.bind(null,ve,e),[r.memoizedState,e]},useRef:function(e){var n=hn();return e={current:e},n.memoizedState=e},useState:Ru,useDebugValue:ea,useDeferredValue:function(e){return hn().memoizedState=e},useTransition:function(){var e=Ru(!1),n=e[0];return e=lh.bind(null,e[1]),hn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=ve,o=hn();if(fe){if(t===void 0)throw Error(_(407));t=t()}else{if(t=n(),$e===null)throw Error(_(349));yt&30||Vd(r,n,t)}o.memoizedState=t;var i={value:t,getSnapshot:n};return o.queue=i,$u(Qd.bind(null,r,i,e),[e]),r.flags|=2048,Kr(9,Kd.bind(null,r,i,t,n),void 0,null),t},useId:function(){var e=hn(),n=$e.identifierPrefix;if(fe){var t=Cn,r=bn;t=(r&~(1<<32-pn(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=Gr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=ih++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},ch={readContext:on,useCallback:tp,useContext:on,useEffect:Zs,useImperativeHandle:np,useInsertionEffect:Jd,useLayoutEffect:Zd,useMemo:rp,useReducer:ul,useRef:Xd,useState:function(){return ul(Vr)},useDebugValue:ea,useDeferredValue:function(e){var n=ln();return op(n,Ce.memoizedState,e)},useTransition:function(){var e=ul(Vr)[0],n=ln().memoizedState;return[e,n]},useMutableSource:Ud,useSyncExternalStore:Gd,useId:ip,unstable_isNewReconciler:!1},dh={readContext:on,useCallback:tp,useContext:on,useEffect:Zs,useImperativeHandle:np,useInsertionEffect:Jd,useLayoutEffect:Zd,useMemo:rp,useReducer:cl,useRef:Xd,useState:function(){return cl(Vr)},useDebugValue:ea,useDeferredValue:function(e){var n=ln();return Ce===null?n.memoizedState=e:op(n,Ce.memoizedState,e)},useTransition:function(){var e=cl(Vr)[0],n=ln().memoizedState;return[e,n]},useMutableSource:Ud,useSyncExternalStore:Gd,useId:ip,unstable_isNewReconciler:!1};function un(e,n){if(e&&e.defaultProps){n=xe({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Yl(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:xe({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Ci={isMounted:function(e){return(e=e._reactInternals)?kt(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=We(),o=qn(e),i=_n(r,o);i.payload=n,t!=null&&(i.callback=t),n=Qn(e,i,o),n!==null&&(mn(n,e,o,r),zo(n,e,o))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=We(),o=qn(e),i=_n(r,o);i.tag=1,i.payload=n,t!=null&&(i.callback=t),n=Qn(e,i,o),n!==null&&(mn(n,e,o,r),zo(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=We(),r=qn(e),o=_n(t,r);o.tag=2,n!=null&&(o.callback=n),n=Qn(e,o,r),n!==null&&(mn(n,e,r,t),zo(n,e,r))}};function Mu(e,n,t,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):n.prototype&&n.prototype.isPureReactComponent?!Wr(t,r)||!Wr(o,i):!0}function up(e,n,t){var r=!1,o=et,i=n.contextType;return typeof i=="object"&&i!==null?i=on(i):(o=Ge(n)?gt:De.current,r=n.contextTypes,i=(r=r!=null)?Qt(e,o):et),n=new n(t,i),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Ci,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),n}function Iu(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&Ci.enqueueReplaceState(n,n.state,null)}function ql(e,n,t,r){var o=e.stateNode;o.props=t,o.state=e.memoizedState,o.refs={},Vs(e);var i=n.contextType;typeof i=="object"&&i!==null?o.context=on(i):(i=Ge(n)?gt:De.current,o.context=Qt(e,i)),o.state=e.memoizedState,i=n.getDerivedStateFromProps,typeof i=="function"&&(Yl(e,n,i,t),o.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(n=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),n!==o.state&&Ci.enqueueReplaceState(o,o.state,null),si(e,t,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Jt(e,n){try{var t="",r=n;do t+=Wf(r),r=r.return;while(r);var o=t}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:n,stack:o,digest:null}}function dl(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Xl(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var ph=typeof WeakMap=="function"?WeakMap:Map;function cp(e,n,t){t=_n(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){pi||(pi=!0,ss=r),Xl(e,n)},t}function dp(e,n,t){t=_n(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=n.value;t.payload=function(){return r(o)},t.callback=function(){Xl(e,n)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){Xl(e,n),typeof r!="function"&&(Yn===null?Yn=new Set([this]):Yn.add(this));var l=n.stack;this.componentDidCatch(n.value,{componentStack:l!==null?l:""})}),t}function Nu(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new ph;var o=new Set;r.set(n,o)}else o=r.get(n),o===void 0&&(o=new Set,r.set(n,o));o.has(t)||(o.add(t),e=_h.bind(null,e,n,t),n.then(e,e))}function Eu(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function ju(e,n,t,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=_n(-1,1),n.tag=2,Qn(t,n,1))),t.lanes|=1),e)}var mh=In.ReactCurrentOwner,Be=!1;function ze(e,n,t,r){n.child=e===null?Ad(n,null,t,r):qt(n,e.child,t,r)}function Lu(e,n,t,r,o){t=t.render;var i=n.ref;return Gt(n,o),r=Xs(e,n,t,r,i,o),t=Js(),e!==null&&!Be?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~o,Mn(e,n,o)):(fe&&t&&Ws(n),n.flags|=1,ze(e,n,r,o),n.child)}function Ou(e,n,t,r,o){if(e===null){var i=t.type;return typeof i=="function"&&!aa(i)&&i.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=i,pp(e,n,i,r,o)):(e=Uo(t.type,null,r,n,n.mode,o),e.ref=n.ref,e.return=n,n.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(t=t.compare,t=t!==null?t:Wr,t(l,r)&&e.ref===n.ref)return Mn(e,n,o)}return n.flags|=1,e=Xn(i,r),e.ref=n.ref,e.return=n,n.child=e}function pp(e,n,t,r,o){if(e!==null){var i=e.memoizedProps;if(Wr(i,r)&&e.ref===n.ref)if(Be=!1,n.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Be=!0);else return n.lanes=e.lanes,Mn(e,n,o)}return Jl(e,n,t,r,o)}function mp(e,n,t){var r=n.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},ae(At,Ke),Ke|=t;else{if(!(t&1073741824))return e=i!==null?i.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,ae(At,Ke),Ke|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:t,ae(At,Ke),Ke|=r}else i!==null?(r=i.baseLanes|t,n.memoizedState=null):r=t,ae(At,Ke),Ke|=r;return ze(e,n,o,t),n.child}function fp(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Jl(e,n,t,r,o){var i=Ge(t)?gt:De.current;return i=Qt(n,i),Gt(n,o),t=Xs(e,n,t,r,i,o),r=Js(),e!==null&&!Be?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~o,Mn(e,n,o)):(fe&&r&&Ws(n),n.flags|=1,ze(e,n,t,o),n.child)}function Du(e,n,t,r,o){if(Ge(t)){var i=!0;ti(n)}else i=!1;if(Gt(n,o),n.stateNode===null)Ho(e,n),up(n,t,r),ql(n,t,r,o),r=!0;else if(e===null){var l=n.stateNode,s=n.memoizedProps;l.props=s;var a=l.context,u=t.contextType;typeof u=="object"&&u!==null?u=on(u):(u=Ge(t)?gt:De.current,u=Qt(n,u));var p=t.getDerivedStateFromProps,c=typeof p=="function"||typeof l.getSnapshotBeforeUpdate=="function";c||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||a!==u)&&Iu(n,l,r,u),zn=!1;var m=n.memoizedState;l.state=m,si(n,r,l,o),a=n.memoizedState,s!==r||m!==a||Ue.current||zn?(typeof p=="function"&&(Yl(n,t,p,r),a=n.memoizedState),(s=zn||Mu(n,t,s,r,m,a,u))?(c||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(n.flags|=4194308)):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=a),l.props=r,l.state=a,l.context=u,r=s):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{l=n.stateNode,Fd(e,n),s=n.memoizedProps,u=n.type===n.elementType?s:un(n.type,s),l.props=u,c=n.pendingProps,m=l.context,a=t.contextType,typeof a=="object"&&a!==null?a=on(a):(a=Ge(t)?gt:De.current,a=Qt(n,a));var g=t.getDerivedStateFromProps;(p=typeof g=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==c||m!==a)&&Iu(n,l,r,a),zn=!1,m=n.memoizedState,l.state=m,si(n,r,l,o);var x=n.memoizedState;s!==c||m!==x||Ue.current||zn?(typeof g=="function"&&(Yl(n,t,g,r),x=n.memoizedState),(u=zn||Mu(n,t,u,r,m,x,a)||!1)?(p||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,x,a),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,x,a)),typeof l.componentDidUpdate=="function"&&(n.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=x),l.props=r,l.state=x,l.context=a,r=u):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),r=!1)}return Zl(e,n,t,r,i,o)}function Zl(e,n,t,r,o,i){fp(e,n);var l=(n.flags&128)!==0;if(!r&&!l)return o&&ku(n,t,!1),Mn(e,n,i);r=n.stateNode,mh.current=n;var s=l&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&l?(n.child=qt(n,e.child,null,i),n.child=qt(n,null,s,i)):ze(e,n,s,i),n.memoizedState=r.state,o&&ku(n,t,!0),n.child}function gp(e){var n=e.stateNode;n.pendingContext?Pu(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Pu(e,n.context,!1),Ks(e,n.containerInfo)}function zu(e,n,t,r,o){return Yt(),Hs(o),n.flags|=256,ze(e,n,t,r),n.child}var es={dehydrated:null,treeContext:null,retryLane:0};function ns(e){return{baseLanes:e,cachePool:null,transitions:null}}function hp(e,n,t){var r=n.pendingProps,o=ye.current,i=!1,l=(n.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),ae(ye,o&1),e===null)return Kl(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(l=r.children,e=r.fallback,i?(r=n.mode,i=n.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=Ri(l,r,0,null),e=ft(e,r,t,null),i.return=n,e.return=n,i.sibling=e,n.child=i,n.child.memoizedState=ns(t),n.memoizedState=es,e):na(n,l));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return fh(e,n,l,r,s,o,t);if(i){i=r.fallback,l=n.mode,o=e.child,s=o.sibling;var a={mode:"hidden",children:r.children};return!(l&1)&&n.child!==o?(r=n.child,r.childLanes=0,r.pendingProps=a,n.deletions=null):(r=Xn(o,a),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=Xn(s,i):(i=ft(i,l,t,null),i.flags|=2),i.return=n,r.return=n,r.sibling=i,n.child=r,r=i,i=n.child,l=e.child.memoizedState,l=l===null?ns(t):{baseLanes:l.baseLanes|t,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~t,n.memoizedState=es,r}return i=e.child,e=i.sibling,r=Xn(i,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function na(e,n){return n=Ri({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function bo(e,n,t,r){return r!==null&&Hs(r),qt(n,e.child,null,t),e=na(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function fh(e,n,t,r,o,i,l){if(t)return n.flags&256?(n.flags&=-257,r=dl(Error(_(422))),bo(e,n,l,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(i=r.fallback,o=n.mode,r=Ri({mode:"visible",children:r.children},o,0,null),i=ft(i,o,l,null),i.flags|=2,r.return=n,i.return=n,r.sibling=i,n.child=r,n.mode&1&&qt(n,e.child,null,l),n.child.memoizedState=ns(l),n.memoizedState=es,i);if(!(n.mode&1))return bo(e,n,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(_(419)),r=dl(i,r,void 0),bo(e,n,l,r)}if(s=(l&e.childLanes)!==0,Be||s){if(r=$e,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,$n(e,o),mn(r,e,o,-1))}return sa(),r=dl(Error(_(421))),bo(e,n,l,r)}return o.data==="$?"?(n.flags|=128,n.child=e.child,n=Th.bind(null,e),o._reactRetry=n,null):(e=i.treeContext,Qe=Kn(o.nextSibling),Ye=n,fe=!0,dn=null,e!==null&&(en[nn++]=bn,en[nn++]=Cn,en[nn++]=ht,bn=e.id,Cn=e.overflow,ht=n),n=na(n,r.children),n.flags|=4096,n)}function Wu(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Ql(e.return,n,t)}function pl(e,n,t,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:o}:(i.isBackwards=n,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=t,i.tailMode=o)}function yp(e,n,t){var r=n.pendingProps,o=r.revealOrder,i=r.tail;if(ze(e,n,r.children,t),r=ye.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Wu(e,t,n);else if(e.tag===19)Wu(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ae(ye,r),!(n.mode&1))n.memoizedState=null;else switch(o){case"forwards":for(t=n.child,o=null;t!==null;)e=t.alternate,e!==null&&ai(e)===null&&(o=t),t=t.sibling;t=o,t===null?(o=n.child,n.child=null):(o=t.sibling,t.sibling=null),pl(n,!1,o,t,i);break;case"backwards":for(t=null,o=n.child,n.child=null;o!==null;){if(e=o.alternate,e!==null&&ai(e)===null){n.child=o;break}e=o.sibling,o.sibling=t,t=o,o=e}pl(n,!0,t,null,i);break;case"together":pl(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Ho(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Mn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),vt|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(_(153));if(n.child!==null){for(e=n.child,t=Xn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Xn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function gh(e,n,t){switch(n.tag){case 3:gp(n),Yt();break;case 5:Bd(n);break;case 1:Ge(n.type)&&ti(n);break;case 4:Ks(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,o=n.memoizedProps.value;ae(ii,r._currentValue),r._currentValue=o;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(ae(ye,ye.current&1),n.flags|=128,null):t&n.child.childLanes?hp(e,n,t):(ae(ye,ye.current&1),e=Mn(e,n,t),e!==null?e.sibling:null);ae(ye,ye.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return yp(e,n,t);n.flags|=128}if(o=n.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),ae(ye,ye.current),r)break;return null;case 22:case 23:return n.lanes=0,mp(e,n,t)}return Mn(e,n,t)}var vp,ts,xp,wp;vp=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};ts=function(){};xp=function(e,n,t,r){var o=e.memoizedProps;if(o!==r){e=n.stateNode,pt(xn.current);var i=null;switch(t){case"input":o=bl(e,o),r=bl(e,r),i=[];break;case"select":o=xe({},o,{value:void 0}),r=xe({},r,{value:void 0}),i=[];break;case"textarea":o=Tl(e,o),r=Tl(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ei)}$l(t,r);var l;t=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var s=o[u];for(l in s)s.hasOwnProperty(l)&&(t||(t={}),t[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Nr.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var a=r[u];if(s=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&a!==s&&(a!=null||s!=null))if(u==="style")if(s){for(l in s)!s.hasOwnProperty(l)||a&&a.hasOwnProperty(l)||(t||(t={}),t[l]="");for(l in a)a.hasOwnProperty(l)&&s[l]!==a[l]&&(t||(t={}),t[l]=a[l])}else t||(i||(i=[]),i.push(u,t)),t=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(i=i||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(i=i||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Nr.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&ce("scroll",e),i||s===a||(i=[])):(i=i||[]).push(u,a))}t&&(i=i||[]).push("style",t);var u=i;(n.updateQueue=u)&&(n.flags|=4)}};wp=function(e,n,t,r){t!==r&&(n.flags|=4)};function fr(e,n){if(!fe)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Le(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var o=e.child;o!==null;)t|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)t|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function hh(e,n,t){var r=n.pendingProps;switch(As(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Le(n),null;case 1:return Ge(n.type)&&ni(),Le(n),null;case 3:return r=n.stateNode,Xt(),de(Ue),de(De),Ys(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ko(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,dn!==null&&(cs(dn),dn=null))),ts(e,n),Le(n),null;case 5:Qs(n);var o=pt(Ur.current);if(t=n.type,e!==null&&n.stateNode!=null)xp(e,n,t,r,o),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(_(166));return Le(n),null}if(e=pt(xn.current),ko(n)){r=n.stateNode,t=n.type;var i=n.memoizedProps;switch(r[yn]=n,r[Fr]=i,e=(n.mode&1)!==0,t){case"dialog":ce("cancel",r),ce("close",r);break;case"iframe":case"object":case"embed":ce("load",r);break;case"video":case"audio":for(o=0;o<wr.length;o++)ce(wr[o],r);break;case"source":ce("error",r);break;case"img":case"image":case"link":ce("error",r),ce("load",r);break;case"details":ce("toggle",r);break;case"input":Qa(r,i),ce("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},ce("invalid",r);break;case"textarea":qa(r,i),ce("invalid",r)}$l(t,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var s=i[l];l==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&Po(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&Po(r.textContent,s,e),o=["children",""+s]):Nr.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&ce("scroll",r)}switch(t){case"input":mo(r),Ya(r,i,!0);break;case"textarea":mo(r),Xa(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=ei)}r=o,n.updateQueue=r,r!==null&&(n.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Qc(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(t,{is:r.is}):(e=l.createElement(t),t==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,t),e[yn]=n,e[Fr]=r,vp(e,n,!1,!1),n.stateNode=e;e:{switch(l=Ml(t,r),t){case"dialog":ce("cancel",e),ce("close",e),o=r;break;case"iframe":case"object":case"embed":ce("load",e),o=r;break;case"video":case"audio":for(o=0;o<wr.length;o++)ce(wr[o],e);o=r;break;case"source":ce("error",e),o=r;break;case"img":case"image":case"link":ce("error",e),ce("load",e),o=r;break;case"details":ce("toggle",e),o=r;break;case"input":Qa(e,r),o=bl(e,r),ce("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=xe({},r,{value:void 0}),ce("invalid",e);break;case"textarea":qa(e,r),o=Tl(e,r),ce("invalid",e);break;default:o=r}$l(t,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var a=s[i];i==="style"?Xc(e,a):i==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Yc(e,a)):i==="children"?typeof a=="string"?(t!=="textarea"||a!=="")&&Er(e,a):typeof a=="number"&&Er(e,""+a):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Nr.hasOwnProperty(i)?a!=null&&i==="onScroll"&&ce("scroll",e):a!=null&&Cs(e,i,a,l))}switch(t){case"input":mo(e),Ya(e,r,!1);break;case"textarea":mo(e),Xa(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Zn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Ht(e,!!r.multiple,i,!1):r.defaultValue!=null&&Ht(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=ei)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Le(n),null;case 6:if(e&&n.stateNode!=null)wp(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(_(166));if(t=pt(Ur.current),pt(xn.current),ko(n)){if(r=n.stateNode,t=n.memoizedProps,r[yn]=n,(i=r.nodeValue!==t)&&(e=Ye,e!==null))switch(e.tag){case 3:Po(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Po(r.nodeValue,t,(e.mode&1)!==0)}i&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[yn]=n,n.stateNode=r}return Le(n),null;case 13:if(de(ye),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(fe&&Qe!==null&&n.mode&1&&!(n.flags&128))zd(),Yt(),n.flags|=98560,i=!1;else if(i=ko(n),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(_(318));if(i=n.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(_(317));i[yn]=n}else Yt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;Le(n),i=!1}else dn!==null&&(cs(dn),dn=null),i=!0;if(!i)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||ye.current&1?_e===0&&(_e=3):sa())),n.updateQueue!==null&&(n.flags|=4),Le(n),null);case 4:return Xt(),ts(e,n),e===null&&Ar(n.stateNode.containerInfo),Le(n),null;case 10:return Us(n.type._context),Le(n),null;case 17:return Ge(n.type)&&ni(),Le(n),null;case 19:if(de(ye),i=n.memoizedState,i===null)return Le(n),null;if(r=(n.flags&128)!==0,l=i.rendering,l===null)if(r)fr(i,!1);else{if(_e!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(l=ai(e),l!==null){for(n.flags|=128,fr(i,!1),r=l.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)i=t,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return ae(ye,ye.current&1|2),n.child}e=e.sibling}i.tail!==null&&ke()>Zt&&(n.flags|=128,r=!0,fr(i,!1),n.lanes=4194304)}else{if(!r)if(e=ai(l),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),fr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!fe)return Le(n),null}else 2*ke()-i.renderingStartTime>Zt&&t!==1073741824&&(n.flags|=128,r=!0,fr(i,!1),n.lanes=4194304);i.isBackwards?(l.sibling=n.child,n.child=l):(t=i.last,t!==null?t.sibling=l:n.child=l,i.last=l)}return i.tail!==null?(n=i.tail,i.rendering=n,i.tail=n.sibling,i.renderingStartTime=ke(),n.sibling=null,t=ye.current,ae(ye,r?t&1|2:t&1),n):(Le(n),null);case 22:case 23:return la(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?Ke&1073741824&&(Le(n),n.subtreeFlags&6&&(n.flags|=8192)):Le(n),null;case 24:return null;case 25:return null}throw Error(_(156,n.tag))}function yh(e,n){switch(As(n),n.tag){case 1:return Ge(n.type)&&ni(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Xt(),de(Ue),de(De),Ys(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return Qs(n),null;case 13:if(de(ye),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(_(340));Yt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return de(ye),null;case 4:return Xt(),null;case 10:return Us(n.type._context),null;case 22:case 23:return la(),null;case 24:return null;default:return null}}var Co=!1,Oe=!1,vh=typeof WeakSet=="function"?WeakSet:Set,O=null;function Wt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){we(e,n,r)}else t.current=null}function rs(e,n,t){try{t()}catch(r){we(e,n,r)}}var Au=!1;function xh(e,n){if(Al=Xo,e=Cd(),zs(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var l=0,s=-1,a=-1,u=0,p=0,c=e,m=null;n:for(;;){for(var g;c!==t||o!==0&&c.nodeType!==3||(s=l+o),c!==i||r!==0&&c.nodeType!==3||(a=l+r),c.nodeType===3&&(l+=c.nodeValue.length),(g=c.firstChild)!==null;)m=c,c=g;for(;;){if(c===e)break n;if(m===t&&++u===o&&(s=l),m===i&&++p===r&&(a=l),(g=c.nextSibling)!==null)break;c=m,m=c.parentNode}c=g}t=s===-1||a===-1?null:{start:s,end:a}}else t=null}t=t||{start:0,end:0}}else t=null;for(Hl={focusedElem:e,selectionRange:t},Xo=!1,O=n;O!==null;)if(n=O,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,O=e;else for(;O!==null;){n=O;try{var x=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var w=x.memoizedProps,P=x.memoizedState,h=n.stateNode,f=h.getSnapshotBeforeUpdate(n.elementType===n.type?w:un(n.type,w),P);h.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var v=n.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(k){we(n,n.return,k)}if(e=n.sibling,e!==null){e.return=n.return,O=e;break}O=n.return}return x=Au,Au=!1,x}function $r(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&rs(n,t,i)}o=o.next}while(o!==r)}}function _i(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function os(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Pp(e){var n=e.alternate;n!==null&&(e.alternate=null,Pp(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[yn],delete n[Fr],delete n[Ul],delete n[nh],delete n[th])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function kp(e){return e.tag===5||e.tag===3||e.tag===4}function Hu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||kp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function is(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=ei));else if(r!==4&&(e=e.child,e!==null))for(is(e,n,t),e=e.sibling;e!==null;)is(e,n,t),e=e.sibling}function ls(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ls(e,n,t),e=e.sibling;e!==null;)ls(e,n,t),e=e.sibling}var Me=null,cn=!1;function On(e,n,t){for(t=t.child;t!==null;)Sp(e,n,t),t=t.sibling}function Sp(e,n,t){if(vn&&typeof vn.onCommitFiberUnmount=="function")try{vn.onCommitFiberUnmount(vi,t)}catch{}switch(t.tag){case 5:Oe||Wt(t,n);case 6:var r=Me,o=cn;Me=null,On(e,n,t),Me=r,cn=o,Me!==null&&(cn?(e=Me,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):Me.removeChild(t.stateNode));break;case 18:Me!==null&&(cn?(e=Me,t=t.stateNode,e.nodeType===8?il(e.parentNode,t):e.nodeType===1&&il(e,t),Dr(e)):il(Me,t.stateNode));break;case 4:r=Me,o=cn,Me=t.stateNode.containerInfo,cn=!0,On(e,n,t),Me=r,cn=o;break;case 0:case 11:case 14:case 15:if(!Oe&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&rs(t,n,l),o=o.next}while(o!==r)}On(e,n,t);break;case 1:if(!Oe&&(Wt(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(s){we(t,n,s)}On(e,n,t);break;case 21:On(e,n,t);break;case 22:t.mode&1?(Oe=(r=Oe)||t.memoizedState!==null,On(e,n,t),Oe=r):On(e,n,t);break;default:On(e,n,t)}}function Fu(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new vh),n.forEach(function(r){var o=Rh.bind(null,e,r);t.has(r)||(t.add(r),r.then(o,o))})}}function sn(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var o=t[r];try{var i=e,l=n,s=l;e:for(;s!==null;){switch(s.tag){case 5:Me=s.stateNode,cn=!1;break e;case 3:Me=s.stateNode.containerInfo,cn=!0;break e;case 4:Me=s.stateNode.containerInfo,cn=!0;break e}s=s.return}if(Me===null)throw Error(_(160));Sp(i,l,o),Me=null,cn=!1;var a=o.alternate;a!==null&&(a.return=null),o.return=null}catch(u){we(o,n,u)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)bp(n,e),n=n.sibling}function bp(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(sn(n,e),gn(e),r&4){try{$r(3,e,e.return),_i(3,e)}catch(w){we(e,e.return,w)}try{$r(5,e,e.return)}catch(w){we(e,e.return,w)}}break;case 1:sn(n,e),gn(e),r&512&&t!==null&&Wt(t,t.return);break;case 5:if(sn(n,e),gn(e),r&512&&t!==null&&Wt(t,t.return),e.flags&32){var o=e.stateNode;try{Er(o,"")}catch(w){we(e,e.return,w)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=t!==null?t.memoizedProps:i,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&Vc(o,i),Ml(s,l);var u=Ml(s,i);for(l=0;l<a.length;l+=2){var p=a[l],c=a[l+1];p==="style"?Xc(o,c):p==="dangerouslySetInnerHTML"?Yc(o,c):p==="children"?Er(o,c):Cs(o,p,c,u)}switch(s){case"input":Cl(o,i);break;case"textarea":Kc(o,i);break;case"select":var m=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var g=i.value;g!=null?Ht(o,!!i.multiple,g,!1):m!==!!i.multiple&&(i.defaultValue!=null?Ht(o,!!i.multiple,i.defaultValue,!0):Ht(o,!!i.multiple,i.multiple?[]:"",!1))}o[Fr]=i}catch(w){we(e,e.return,w)}}break;case 6:if(sn(n,e),gn(e),r&4){if(e.stateNode===null)throw Error(_(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(w){we(e,e.return,w)}}break;case 3:if(sn(n,e),gn(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Dr(n.containerInfo)}catch(w){we(e,e.return,w)}break;case 4:sn(n,e),gn(e);break;case 13:sn(n,e),gn(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(oa=ke())),r&4&&Fu(e);break;case 22:if(p=t!==null&&t.memoizedState!==null,e.mode&1?(Oe=(u=Oe)||p,sn(n,e),Oe=u):sn(n,e),gn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!p&&e.mode&1)for(O=e,p=e.child;p!==null;){for(c=O=p;O!==null;){switch(m=O,g=m.child,m.tag){case 0:case 11:case 14:case 15:$r(4,m,m.return);break;case 1:Wt(m,m.return);var x=m.stateNode;if(typeof x.componentWillUnmount=="function"){r=m,t=m.return;try{n=r,x.props=n.memoizedProps,x.state=n.memoizedState,x.componentWillUnmount()}catch(w){we(r,t,w)}}break;case 5:Wt(m,m.return);break;case 22:if(m.memoizedState!==null){Uu(c);continue}}g!==null?(g.return=m,O=g):Uu(c)}p=p.sibling}e:for(p=null,c=e;;){if(c.tag===5){if(p===null){p=c;try{o=c.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=c.stateNode,a=c.memoizedProps.style,l=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=qc("display",l))}catch(w){we(e,e.return,w)}}}else if(c.tag===6){if(p===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(w){we(e,e.return,w)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===e)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break e;for(;c.sibling===null;){if(c.return===null||c.return===e)break e;p===c&&(p=null),c=c.return}p===c&&(p=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:sn(n,e),gn(e),r&4&&Fu(e);break;case 21:break;default:sn(n,e),gn(e)}}function gn(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(kp(t)){var r=t;break e}t=t.return}throw Error(_(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Er(o,""),r.flags&=-33);var i=Hu(e);ls(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,s=Hu(e);is(e,s,l);break;default:throw Error(_(161))}}catch(a){we(e,e.return,a)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function wh(e,n,t){O=e,Cp(e)}function Cp(e,n,t){for(var r=(e.mode&1)!==0;O!==null;){var o=O,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||Co;if(!l){var s=o.alternate,a=s!==null&&s.memoizedState!==null||Oe;s=Co;var u=Oe;if(Co=l,(Oe=a)&&!u)for(O=o;O!==null;)l=O,a=l.child,l.tag===22&&l.memoizedState!==null?Gu(o):a!==null?(a.return=l,O=a):Gu(o);for(;i!==null;)O=i,Cp(i),i=i.sibling;O=o,Co=s,Oe=u}Bu(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,O=i):Bu(e)}}function Bu(e){for(;O!==null;){var n=O;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:Oe||_i(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!Oe)if(t===null)r.componentDidMount();else{var o=n.elementType===n.type?t.memoizedProps:un(n.type,t.memoizedProps);r.componentDidUpdate(o,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=n.updateQueue;i!==null&&Tu(n,i,r);break;case 3:var l=n.updateQueue;if(l!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Tu(n,l,t)}break;case 5:var s=n.stateNode;if(t===null&&n.flags&4){t=s;var a=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&t.focus();break;case"img":a.src&&(t.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var u=n.alternate;if(u!==null){var p=u.memoizedState;if(p!==null){var c=p.dehydrated;c!==null&&Dr(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_(163))}Oe||n.flags&512&&os(n)}catch(m){we(n,n.return,m)}}if(n===e){O=null;break}if(t=n.sibling,t!==null){t.return=n.return,O=t;break}O=n.return}}function Uu(e){for(;O!==null;){var n=O;if(n===e){O=null;break}var t=n.sibling;if(t!==null){t.return=n.return,O=t;break}O=n.return}}function Gu(e){for(;O!==null;){var n=O;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{_i(4,n)}catch(a){we(n,t,a)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var o=n.return;try{r.componentDidMount()}catch(a){we(n,o,a)}}var i=n.return;try{os(n)}catch(a){we(n,i,a)}break;case 5:var l=n.return;try{os(n)}catch(a){we(n,l,a)}}}catch(a){we(n,n.return,a)}if(n===e){O=null;break}var s=n.sibling;if(s!==null){s.return=n.return,O=s;break}O=n.return}}var Ph=Math.ceil,di=In.ReactCurrentDispatcher,ta=In.ReactCurrentOwner,rn=In.ReactCurrentBatchConfig,ee=0,$e=null,be=null,Ie=0,Ke=0,At=tt(0),_e=0,Qr=null,vt=0,Ti=0,ra=0,Mr=null,Fe=null,oa=0,Zt=1/0,kn=null,pi=!1,ss=null,Yn=null,_o=!1,Fn=null,mi=0,Ir=0,as=null,Fo=-1,Bo=0;function We(){return ee&6?ke():Fo!==-1?Fo:Fo=ke()}function qn(e){return e.mode&1?ee&2&&Ie!==0?Ie&-Ie:oh.transition!==null?(Bo===0&&(Bo=ud()),Bo):(e=ie,e!==0||(e=window.event,e=e===void 0?16:hd(e.type)),e):1}function mn(e,n,t,r){if(50<Ir)throw Ir=0,as=null,Error(_(185));Jr(e,t,r),(!(ee&2)||e!==$e)&&(e===$e&&(!(ee&2)&&(Ti|=t),_e===4&&An(e,Ie)),Ve(e,r),t===1&&ee===0&&!(n.mode&1)&&(Zt=ke()+500,Si&&rt()))}function Ve(e,n){var t=e.callbackNode;og(e,n);var r=qo(e,e===$e?Ie:0);if(r===0)t!==null&&eu(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&eu(t),n===1)e.tag===0?rh(Vu.bind(null,e)):Ld(Vu.bind(null,e)),Zg(function(){!(ee&6)&&rt()}),t=null;else{switch(cd(r)){case 1:t=Ms;break;case 4:t=sd;break;case 16:t=Yo;break;case 536870912:t=ad;break;default:t=Yo}t=Ep(t,_p.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function _p(e,n){if(Fo=-1,Bo=0,ee&6)throw Error(_(327));var t=e.callbackNode;if(Vt()&&e.callbackNode!==t)return null;var r=qo(e,e===$e?Ie:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=fi(e,r);else{n=r;var o=ee;ee|=2;var i=Rp();($e!==e||Ie!==n)&&(kn=null,Zt=ke()+500,mt(e,n));do try{bh();break}catch(s){Tp(e,s)}while(!0);Bs(),di.current=i,ee=o,be!==null?n=0:($e=null,Ie=0,n=_e)}if(n!==0){if(n===2&&(o=Ll(e),o!==0&&(r=o,n=us(e,o))),n===1)throw t=Qr,mt(e,0),An(e,r),Ve(e,ke()),t;if(n===6)An(e,r);else{if(o=e.current.alternate,!(r&30)&&!kh(o)&&(n=fi(e,r),n===2&&(i=Ll(e),i!==0&&(r=i,n=us(e,i))),n===1))throw t=Qr,mt(e,0),An(e,r),Ve(e,ke()),t;switch(e.finishedWork=o,e.finishedLanes=r,n){case 0:case 1:throw Error(_(345));case 2:ut(e,Fe,kn);break;case 3:if(An(e,r),(r&130023424)===r&&(n=oa+500-ke(),10<n)){if(qo(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){We(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Bl(ut.bind(null,e,Fe,kn),n);break}ut(e,Fe,kn);break;case 4:if(An(e,r),(r&4194240)===r)break;for(n=e.eventTimes,o=-1;0<r;){var l=31-pn(r);i=1<<l,l=n[l],l>o&&(o=l),r&=~i}if(r=o,r=ke()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Ph(r/1960))-r,10<r){e.timeoutHandle=Bl(ut.bind(null,e,Fe,kn),r);break}ut(e,Fe,kn);break;case 5:ut(e,Fe,kn);break;default:throw Error(_(329))}}}return Ve(e,ke()),e.callbackNode===t?_p.bind(null,e):null}function us(e,n){var t=Mr;return e.current.memoizedState.isDehydrated&&(mt(e,n).flags|=256),e=fi(e,n),e!==2&&(n=Fe,Fe=t,n!==null&&cs(n)),e}function cs(e){Fe===null?Fe=e:Fe.push.apply(Fe,e)}function kh(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var o=t[r],i=o.getSnapshot;o=o.value;try{if(!fn(i(),o))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function An(e,n){for(n&=~ra,n&=~Ti,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-pn(n),r=1<<t;e[t]=-1,n&=~r}}function Vu(e){if(ee&6)throw Error(_(327));Vt();var n=qo(e,0);if(!(n&1))return Ve(e,ke()),null;var t=fi(e,n);if(e.tag!==0&&t===2){var r=Ll(e);r!==0&&(n=r,t=us(e,r))}if(t===1)throw t=Qr,mt(e,0),An(e,n),Ve(e,ke()),t;if(t===6)throw Error(_(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,ut(e,Fe,kn),Ve(e,ke()),null}function ia(e,n){var t=ee;ee|=1;try{return e(n)}finally{ee=t,ee===0&&(Zt=ke()+500,Si&&rt())}}function xt(e){Fn!==null&&Fn.tag===0&&!(ee&6)&&Vt();var n=ee;ee|=1;var t=rn.transition,r=ie;try{if(rn.transition=null,ie=1,e)return e()}finally{ie=r,rn.transition=t,ee=n,!(ee&6)&&rt()}}function la(){Ke=At.current,de(At)}function mt(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Jg(t)),be!==null)for(t=be.return;t!==null;){var r=t;switch(As(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ni();break;case 3:Xt(),de(Ue),de(De),Ys();break;case 5:Qs(r);break;case 4:Xt();break;case 13:de(ye);break;case 19:de(ye);break;case 10:Us(r.type._context);break;case 22:case 23:la()}t=t.return}if($e=e,be=e=Xn(e.current,null),Ie=Ke=n,_e=0,Qr=null,ra=Ti=vt=0,Fe=Mr=null,dt!==null){for(n=0;n<dt.length;n++)if(t=dt[n],r=t.interleaved,r!==null){t.interleaved=null;var o=r.next,i=t.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}t.pending=r}dt=null}return e}function Tp(e,n){do{var t=be;try{if(Bs(),Wo.current=ci,ui){for(var r=ve.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}ui=!1}if(yt=0,Re=Ce=ve=null,Rr=!1,Gr=0,ta.current=null,t===null||t.return===null){_e=1,Qr=n,be=null;break}e:{var i=e,l=t.return,s=t,a=n;if(n=Ie,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,p=s,c=p.tag;if(!(p.mode&1)&&(c===0||c===11||c===15)){var m=p.alternate;m?(p.updateQueue=m.updateQueue,p.memoizedState=m.memoizedState,p.lanes=m.lanes):(p.updateQueue=null,p.memoizedState=null)}var g=Eu(l);if(g!==null){g.flags&=-257,ju(g,l,s,i,n),g.mode&1&&Nu(i,u,n),n=g,a=u;var x=n.updateQueue;if(x===null){var w=new Set;w.add(a),n.updateQueue=w}else x.add(a);break e}else{if(!(n&1)){Nu(i,u,n),sa();break e}a=Error(_(426))}}else if(fe&&s.mode&1){var P=Eu(l);if(P!==null){!(P.flags&65536)&&(P.flags|=256),ju(P,l,s,i,n),Hs(Jt(a,s));break e}}i=a=Jt(a,s),_e!==4&&(_e=2),Mr===null?Mr=[i]:Mr.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,n&=-n,i.lanes|=n;var h=cp(i,a,n);_u(i,h);break e;case 1:s=a;var f=i.type,v=i.stateNode;if(!(i.flags&128)&&(typeof f.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Yn===null||!Yn.has(v)))){i.flags|=65536,n&=-n,i.lanes|=n;var k=dp(i,s,n);_u(i,k);break e}}i=i.return}while(i!==null)}Mp(t)}catch(C){n=C,be===t&&t!==null&&(be=t=t.return);continue}break}while(!0)}function Rp(){var e=di.current;return di.current=ci,e===null?ci:e}function sa(){(_e===0||_e===3||_e===2)&&(_e=4),$e===null||!(vt&268435455)&&!(Ti&268435455)||An($e,Ie)}function fi(e,n){var t=ee;ee|=2;var r=Rp();($e!==e||Ie!==n)&&(kn=null,mt(e,n));do try{Sh();break}catch(o){Tp(e,o)}while(!0);if(Bs(),ee=t,di.current=r,be!==null)throw Error(_(261));return $e=null,Ie=0,_e}function Sh(){for(;be!==null;)$p(be)}function bh(){for(;be!==null&&!Yf();)$p(be)}function $p(e){var n=Np(e.alternate,e,Ke);e.memoizedProps=e.pendingProps,n===null?Mp(e):be=n,ta.current=null}function Mp(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=yh(t,n),t!==null){t.flags&=32767,be=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{_e=6,be=null;return}}else if(t=hh(t,n,Ke),t!==null){be=t;return}if(n=n.sibling,n!==null){be=n;return}be=n=e}while(n!==null);_e===0&&(_e=5)}function ut(e,n,t){var r=ie,o=rn.transition;try{rn.transition=null,ie=1,Ch(e,n,t,r)}finally{rn.transition=o,ie=r}return null}function Ch(e,n,t,r){do Vt();while(Fn!==null);if(ee&6)throw Error(_(327));t=e.finishedWork;var o=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(_(177));e.callbackNode=null,e.callbackPriority=0;var i=t.lanes|t.childLanes;if(ig(e,i),e===$e&&(be=$e=null,Ie=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||_o||(_o=!0,Ep(Yo,function(){return Vt(),null})),i=(t.flags&15990)!==0,t.subtreeFlags&15990||i){i=rn.transition,rn.transition=null;var l=ie;ie=1;var s=ee;ee|=4,ta.current=null,xh(e,t),bp(t,e),Gg(Hl),Xo=!!Al,Hl=Al=null,e.current=t,wh(t),qf(),ee=s,ie=l,rn.transition=i}else e.current=t;if(_o&&(_o=!1,Fn=e,mi=o),i=e.pendingLanes,i===0&&(Yn=null),Zf(t.stateNode),Ve(e,ke()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)o=n[t],r(o.value,{componentStack:o.stack,digest:o.digest});if(pi)throw pi=!1,e=ss,ss=null,e;return mi&1&&e.tag!==0&&Vt(),i=e.pendingLanes,i&1?e===as?Ir++:(Ir=0,as=e):Ir=0,rt(),null}function Vt(){if(Fn!==null){var e=cd(mi),n=rn.transition,t=ie;try{if(rn.transition=null,ie=16>e?16:e,Fn===null)var r=!1;else{if(e=Fn,Fn=null,mi=0,ee&6)throw Error(_(331));var o=ee;for(ee|=4,O=e.current;O!==null;){var i=O,l=i.child;if(O.flags&16){var s=i.deletions;if(s!==null){for(var a=0;a<s.length;a++){var u=s[a];for(O=u;O!==null;){var p=O;switch(p.tag){case 0:case 11:case 15:$r(8,p,i)}var c=p.child;if(c!==null)c.return=p,O=c;else for(;O!==null;){p=O;var m=p.sibling,g=p.return;if(Pp(p),p===u){O=null;break}if(m!==null){m.return=g,O=m;break}O=g}}}var x=i.alternate;if(x!==null){var w=x.child;if(w!==null){x.child=null;do{var P=w.sibling;w.sibling=null,w=P}while(w!==null)}}O=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,O=l;else e:for(;O!==null;){if(i=O,i.flags&2048)switch(i.tag){case 0:case 11:case 15:$r(9,i,i.return)}var h=i.sibling;if(h!==null){h.return=i.return,O=h;break e}O=i.return}}var f=e.current;for(O=f;O!==null;){l=O;var v=l.child;if(l.subtreeFlags&2064&&v!==null)v.return=l,O=v;else e:for(l=f;O!==null;){if(s=O,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:_i(9,s)}}catch(C){we(s,s.return,C)}if(s===l){O=null;break e}var k=s.sibling;if(k!==null){k.return=s.return,O=k;break e}O=s.return}}if(ee=o,rt(),vn&&typeof vn.onPostCommitFiberRoot=="function")try{vn.onPostCommitFiberRoot(vi,e)}catch{}r=!0}return r}finally{ie=t,rn.transition=n}}return!1}function Ku(e,n,t){n=Jt(t,n),n=cp(e,n,1),e=Qn(e,n,1),n=We(),e!==null&&(Jr(e,1,n),Ve(e,n))}function we(e,n,t){if(e.tag===3)Ku(e,e,t);else for(;n!==null;){if(n.tag===3){Ku(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Yn===null||!Yn.has(r))){e=Jt(t,e),e=dp(n,e,1),n=Qn(n,e,1),e=We(),n!==null&&(Jr(n,1,e),Ve(n,e));break}}n=n.return}}function _h(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=We(),e.pingedLanes|=e.suspendedLanes&t,$e===e&&(Ie&t)===t&&(_e===4||_e===3&&(Ie&130023424)===Ie&&500>ke()-oa?mt(e,0):ra|=t),Ve(e,n)}function Ip(e,n){n===0&&(e.mode&1?(n=ho,ho<<=1,!(ho&130023424)&&(ho=4194304)):n=1);var t=We();e=$n(e,n),e!==null&&(Jr(e,n,t),Ve(e,t))}function Th(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Ip(e,t)}function Rh(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(t=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(_(314))}r!==null&&r.delete(n),Ip(e,t)}var Np;Np=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Ue.current)Be=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return Be=!1,gh(e,n,t);Be=!!(e.flags&131072)}else Be=!1,fe&&n.flags&1048576&&Od(n,oi,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;Ho(e,n),e=n.pendingProps;var o=Qt(n,De.current);Gt(n,t),o=Xs(null,n,r,e,o,t);var i=Js();return n.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Ge(r)?(i=!0,ti(n)):i=!1,n.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Vs(n),o.updater=Ci,n.stateNode=o,o._reactInternals=n,ql(n,r,e,t),n=Zl(null,n,r,!0,i,t)):(n.tag=0,fe&&i&&Ws(n),ze(null,n,o,t),n=n.child),n;case 16:r=n.elementType;e:{switch(Ho(e,n),e=n.pendingProps,o=r._init,r=o(r._payload),n.type=r,o=n.tag=Mh(r),e=un(r,e),o){case 0:n=Jl(null,n,r,e,t);break e;case 1:n=Du(null,n,r,e,t);break e;case 11:n=Lu(null,n,r,e,t);break e;case 14:n=Ou(null,n,r,un(r.type,e),t);break e}throw Error(_(306,r,""))}return n;case 0:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:un(r,o),Jl(e,n,r,o,t);case 1:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:un(r,o),Du(e,n,r,o,t);case 3:e:{if(gp(n),e===null)throw Error(_(387));r=n.pendingProps,i=n.memoizedState,o=i.element,Fd(e,n),si(n,r,null,t);var l=n.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},n.updateQueue.baseState=i,n.memoizedState=i,n.flags&256){o=Jt(Error(_(423)),n),n=zu(e,n,r,t,o);break e}else if(r!==o){o=Jt(Error(_(424)),n),n=zu(e,n,r,t,o);break e}else for(Qe=Kn(n.stateNode.containerInfo.firstChild),Ye=n,fe=!0,dn=null,t=Ad(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Yt(),r===o){n=Mn(e,n,t);break e}ze(e,n,r,t)}n=n.child}return n;case 5:return Bd(n),e===null&&Kl(n),r=n.type,o=n.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,Fl(r,o)?l=null:i!==null&&Fl(r,i)&&(n.flags|=32),fp(e,n),ze(e,n,l,t),n.child;case 6:return e===null&&Kl(n),null;case 13:return hp(e,n,t);case 4:return Ks(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=qt(n,null,r,t):ze(e,n,r,t),n.child;case 11:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:un(r,o),Lu(e,n,r,o,t);case 7:return ze(e,n,n.pendingProps,t),n.child;case 8:return ze(e,n,n.pendingProps.children,t),n.child;case 12:return ze(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,o=n.pendingProps,i=n.memoizedProps,l=o.value,ae(ii,r._currentValue),r._currentValue=l,i!==null)if(fn(i.value,l)){if(i.children===o.children&&!Ue.current){n=Mn(e,n,t);break e}}else for(i=n.child,i!==null&&(i.return=n);i!==null;){var s=i.dependencies;if(s!==null){l=i.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(i.tag===1){a=_n(-1,t&-t),a.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var p=u.pending;p===null?a.next=a:(a.next=p.next,p.next=a),u.pending=a}}i.lanes|=t,a=i.alternate,a!==null&&(a.lanes|=t),Ql(i.return,t,n),s.lanes|=t;break}a=a.next}}else if(i.tag===10)l=i.type===n.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(_(341));l.lanes|=t,s=l.alternate,s!==null&&(s.lanes|=t),Ql(l,t,n),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===n){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}ze(e,n,o.children,t),n=n.child}return n;case 9:return o=n.type,r=n.pendingProps.children,Gt(n,t),o=on(o),r=r(o),n.flags|=1,ze(e,n,r,t),n.child;case 14:return r=n.type,o=un(r,n.pendingProps),o=un(r.type,o),Ou(e,n,r,o,t);case 15:return pp(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:un(r,o),Ho(e,n),n.tag=1,Ge(r)?(e=!0,ti(n)):e=!1,Gt(n,t),up(n,r,o),ql(n,r,o,t),Zl(null,n,r,!0,e,t);case 19:return yp(e,n,t);case 22:return mp(e,n,t)}throw Error(_(156,n.tag))};function Ep(e,n){return ld(e,n)}function $h(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function tn(e,n,t,r){return new $h(e,n,t,r)}function aa(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Mh(e){if(typeof e=="function")return aa(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ts)return 11;if(e===Rs)return 14}return 2}function Xn(e,n){var t=e.alternate;return t===null?(t=tn(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Uo(e,n,t,r,o,i){var l=2;if(r=e,typeof e=="function")aa(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Mt:return ft(t.children,o,i,n);case _s:l=8,o|=8;break;case wl:return e=tn(12,t,n,o|2),e.elementType=wl,e.lanes=i,e;case Pl:return e=tn(13,t,n,o),e.elementType=Pl,e.lanes=i,e;case kl:return e=tn(19,t,n,o),e.elementType=kl,e.lanes=i,e;case Bc:return Ri(t,o,i,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Hc:l=10;break e;case Fc:l=9;break e;case Ts:l=11;break e;case Rs:l=14;break e;case Dn:l=16,r=null;break e}throw Error(_(130,e==null?e:typeof e,""))}return n=tn(l,t,n,o),n.elementType=e,n.type=r,n.lanes=i,n}function ft(e,n,t,r){return e=tn(7,e,r,n),e.lanes=t,e}function Ri(e,n,t,r){return e=tn(22,e,r,n),e.elementType=Bc,e.lanes=t,e.stateNode={isHidden:!1},e}function ml(e,n,t){return e=tn(6,e,null,n),e.lanes=t,e}function fl(e,n,t){return n=tn(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Ih(e,n,t,r,o){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Qi(0),this.expirationTimes=Qi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qi(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function ua(e,n,t,r,o,i,l,s,a){return e=new Ih(e,n,t,s,a),n===1?(n=1,i===!0&&(n|=8)):n=0,i=tn(3,null,null,n),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Vs(i),e}function Nh(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:$t,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function jp(e){if(!e)return et;e=e._reactInternals;e:{if(kt(e)!==e||e.tag!==1)throw Error(_(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Ge(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(_(171))}if(e.tag===1){var t=e.type;if(Ge(t))return jd(e,t,n)}return n}function Lp(e,n,t,r,o,i,l,s,a){return e=ua(t,r,!0,e,o,i,l,s,a),e.context=jp(null),t=e.current,r=We(),o=qn(t),i=_n(r,o),i.callback=n??null,Qn(t,i,o),e.current.lanes=o,Jr(e,o,r),Ve(e,r),e}function $i(e,n,t,r){var o=n.current,i=We(),l=qn(o);return t=jp(t),n.context===null?n.context=t:n.pendingContext=t,n=_n(i,l),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=Qn(o,n,l),e!==null&&(mn(e,o,l,i),zo(e,o,l)),l}function gi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Qu(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function ca(e,n){Qu(e,n),(e=e.alternate)&&Qu(e,n)}function Eh(){return null}var Op=typeof reportError=="function"?reportError:function(e){console.error(e)};function da(e){this._internalRoot=e}Mi.prototype.render=da.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(_(409));$i(e,n,null,null)};Mi.prototype.unmount=da.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;xt(function(){$i(null,e,null,null)}),n[Rn]=null}};function Mi(e){this._internalRoot=e}Mi.prototype.unstable_scheduleHydration=function(e){if(e){var n=md();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Wn.length&&n!==0&&n<Wn[t].priority;t++);Wn.splice(t,0,e),t===0&&gd(e)}};function pa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ii(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Yu(){}function jh(e,n,t,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=gi(l);i.call(u)}}var l=Lp(n,r,e,0,null,!1,!1,"",Yu);return e._reactRootContainer=l,e[Rn]=l.current,Ar(e.nodeType===8?e.parentNode:e),xt(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var u=gi(a);s.call(u)}}var a=ua(e,0,!1,null,null,!1,!1,"",Yu);return e._reactRootContainer=a,e[Rn]=a.current,Ar(e.nodeType===8?e.parentNode:e),xt(function(){$i(n,a,t,r)}),a}function Ni(e,n,t,r,o){var i=t._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var s=o;o=function(){var a=gi(l);s.call(a)}}$i(n,l,e,o)}else l=jh(t,n,e,o,r);return gi(l)}dd=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=xr(n.pendingLanes);t!==0&&(Is(n,t|1),Ve(n,ke()),!(ee&6)&&(Zt=ke()+500,rt()))}break;case 13:xt(function(){var r=$n(e,1);if(r!==null){var o=We();mn(r,e,1,o)}}),ca(e,1)}};Ns=function(e){if(e.tag===13){var n=$n(e,134217728);if(n!==null){var t=We();mn(n,e,134217728,t)}ca(e,134217728)}};pd=function(e){if(e.tag===13){var n=qn(e),t=$n(e,n);if(t!==null){var r=We();mn(t,e,n,r)}ca(e,n)}};md=function(){return ie};fd=function(e,n){var t=ie;try{return ie=e,n()}finally{ie=t}};Nl=function(e,n,t){switch(n){case"input":if(Cl(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var o=ki(r);if(!o)throw Error(_(90));Gc(r),Cl(r,o)}}}break;case"textarea":Kc(e,t);break;case"select":n=t.value,n!=null&&Ht(e,!!t.multiple,n,!1)}};ed=ia;nd=xt;var Lh={usingClientEntryPoint:!1,Events:[eo,jt,ki,Jc,Zc,ia]},gr={findFiberByHostInstance:ct,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Oh={bundleType:gr.bundleType,version:gr.version,rendererPackageName:gr.rendererPackageName,rendererConfig:gr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:In.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=od(e),e===null?null:e.stateNode},findFiberByHostInstance:gr.findFiberByHostInstance||Eh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var To=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!To.isDisabled&&To.supportsFiber)try{vi=To.inject(Oh),vn=To}catch{}}Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Lh;Xe.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!pa(n))throw Error(_(200));return Nh(e,n,null,t)};Xe.createRoot=function(e,n){if(!pa(e))throw Error(_(299));var t=!1,r="",o=Op;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),n=ua(e,1,!1,null,null,t,!1,r,o),e[Rn]=n.current,Ar(e.nodeType===8?e.parentNode:e),new da(n)};Xe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(_(188)):(e=Object.keys(e).join(","),Error(_(268,e)));return e=od(n),e=e===null?null:e.stateNode,e};Xe.flushSync=function(e){return xt(e)};Xe.hydrate=function(e,n,t){if(!Ii(n))throw Error(_(200));return Ni(null,e,n,!0,t)};Xe.hydrateRoot=function(e,n,t){if(!pa(e))throw Error(_(405));var r=t!=null&&t.hydratedSources||null,o=!1,i="",l=Op;if(t!=null&&(t.unstable_strictMode===!0&&(o=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),n=Lp(n,null,e,1,t??null,o,!1,i,l),e[Rn]=n.current,Ar(e),r)for(e=0;e<r.length;e++)t=r[e],o=t._getVersion,o=o(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,o]:n.mutableSourceEagerHydrationData.push(t,o);return new Mi(n)};Xe.render=function(e,n,t){if(!Ii(n))throw Error(_(200));return Ni(null,e,n,!1,t)};Xe.unmountComponentAtNode=function(e){if(!Ii(e))throw Error(_(40));return e._reactRootContainer?(xt(function(){Ni(null,null,e,!1,function(){e._reactRootContainer=null,e[Rn]=null})}),!0):!1};Xe.unstable_batchedUpdates=ia;Xe.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!Ii(t))throw Error(_(200));if(e==null||e._reactInternals===void 0)throw Error(_(38));return Ni(e,n,t,!1,r)};Xe.version="18.3.1-next-f1338f8080-20240426";function Dp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Dp)}catch(e){console.error(e)}}Dp(),Dc.exports=Xe;var Dh=Dc.exports,zp,qu=Dh;zp=qu.createRoot,qu.hydrateRoot;/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Yr(){return Yr=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Yr.apply(null,arguments)}var Bn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Bn||(Bn={}));const Xu="popstate";function zh(e){e===void 0&&(e={});function n(o,i){let{pathname:l="/",search:s="",hash:a=""}=St(o.location.hash.substr(1));return!l.startsWith("/")&&!l.startsWith(".")&&(l="/"+l),ds("",{pathname:l,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function t(o,i){let l=o.document.querySelector("base"),s="";if(l&&l.getAttribute("href")){let a=o.location.href,u=a.indexOf("#");s=u===-1?a:a.slice(0,u)}return s+"#"+(typeof i=="string"?i:hi(i))}function r(o,i){ma(o.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(i)+")")}return Ah(n,t,r,e)}function Se(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function ma(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function Wh(){return Math.random().toString(36).substr(2,8)}function Ju(e,n){return{usr:e.state,key:e.key,idx:n}}function ds(e,n,t,r){return t===void 0&&(t=null),Yr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?St(n):n,{state:t,key:n&&n.key||r||Wh()})}function hi(e){let{pathname:n="/",search:t="",hash:r=""}=e;return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(n+=r.charAt(0)==="#"?r:"#"+r),n}function St(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));let r=e.indexOf("?");r>=0&&(n.search=e.substr(r),e=e.substr(0,r)),e&&(n.pathname=e)}return n}function Ah(e,n,t,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,l=o.history,s=Bn.Pop,a=null,u=p();u==null&&(u=0,l.replaceState(Yr({},l.state,{idx:u}),""));function p(){return(l.state||{idx:null}).idx}function c(){s=Bn.Pop;let P=p(),h=P==null?null:P-u;u=P,a&&a({action:s,location:w.location,delta:h})}function m(P,h){s=Bn.Push;let f=ds(w.location,P,h);t&&t(f,P),u=p()+1;let v=Ju(f,u),k=w.createHref(f);try{l.pushState(v,"",k)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;o.location.assign(k)}i&&a&&a({action:s,location:w.location,delta:1})}function g(P,h){s=Bn.Replace;let f=ds(w.location,P,h);t&&t(f,P),u=p();let v=Ju(f,u),k=w.createHref(f);l.replaceState(v,"",k),i&&a&&a({action:s,location:w.location,delta:0})}function x(P){let h=o.location.origin!=="null"?o.location.origin:o.location.href,f=typeof P=="string"?P:hi(P);return f=f.replace(/ $/,"%20"),Se(h,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,h)}let w={get action(){return s},get location(){return e(o,l)},listen(P){if(a)throw new Error("A history only accepts one active listener");return o.addEventListener(Xu,c),a=P,()=>{o.removeEventListener(Xu,c),a=null}},createHref(P){return n(o,P)},createURL:x,encodeLocation(P){let h=x(P);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:m,replace:g,go(P){return l.go(P)}};return w}var Zu;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Zu||(Zu={}));function Hh(e,n,t){return t===void 0&&(t="/"),Fh(e,n,t)}function Fh(e,n,t,r){let o=typeof n=="string"?St(n):n,i=fa(o.pathname||"/",t);if(i==null)return null;let l=Wp(e);Bh(l);let s=null,a=ny(i);for(let u=0;s==null&&u<l.length;++u)s=Jh(l[u],a);return s}function Wp(e,n,t,r){n===void 0&&(n=[]),t===void 0&&(t=[]),r===void 0&&(r="");let o=(i,l,s)=>{let a={relativePath:s===void 0?i.path||"":s,caseSensitive:i.caseSensitive===!0,childrenIndex:l,route:i};a.relativePath.startsWith("/")&&(Se(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let u=Jn([r,a.relativePath]),p=t.concat(a);i.children&&i.children.length>0&&(Se(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Wp(i.children,n,p,u)),!(i.path==null&&!i.index)&&n.push({path:u,score:qh(u,i.index),routesMeta:p})};return e.forEach((i,l)=>{var s;if(i.path===""||!((s=i.path)!=null&&s.includes("?")))o(i,l);else for(let a of Ap(i.path))o(i,l,a)}),n}function Ap(e){let n=e.split("/");if(n.length===0)return[];let[t,...r]=n,o=t.endsWith("?"),i=t.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let l=Ap(r.join("/")),s=[];return s.push(...l.map(a=>a===""?i:[i,a].join("/"))),o&&s.push(...l),s.map(a=>e.startsWith("/")&&a===""?"/":a)}function Bh(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:Xh(n.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const Uh=/^:[\w-]+$/,Gh=3,Vh=2,Kh=1,Qh=10,Yh=-2,ec=e=>e==="*";function qh(e,n){let t=e.split("/"),r=t.length;return t.some(ec)&&(r+=Yh),n&&(r+=Vh),t.filter(o=>!ec(o)).reduce((o,i)=>o+(Uh.test(i)?Gh:i===""?Kh:Qh),r)}function Xh(e,n){return e.length===n.length&&e.slice(0,-1).every((r,o)=>r===n[o])?e[e.length-1]-n[n.length-1]:0}function Jh(e,n,t){let{routesMeta:r}=e,o={},i="/",l=[];for(let s=0;s<r.length;++s){let a=r[s],u=s===r.length-1,p=i==="/"?n:n.slice(i.length)||"/",c=Zh({path:a.relativePath,caseSensitive:a.caseSensitive,end:u},p),m=a.route;if(!c)return null;Object.assign(o,c.params),l.push({params:o,pathname:Jn([i,c.pathname]),pathnameBase:oy(Jn([i,c.pathnameBase])),route:m}),c.pathnameBase!=="/"&&(i=Jn([i,c.pathnameBase]))}return l}function Zh(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,r]=ey(e.path,e.caseSensitive,e.end),o=n.match(t);if(!o)return null;let i=o[0],l=i.replace(/(.)\/+$/,"$1"),s=o.slice(1);return{params:r.reduce((u,p,c)=>{let{paramName:m,isOptional:g}=p;if(m==="*"){let w=s[c]||"";l=i.slice(0,i.length-w.length).replace(/(.)\/+$/,"$1")}const x=s[c];return g&&!x?u[m]=void 0:u[m]=(x||"").replace(/%2F/g,"/"),u},{}),pathname:i,pathnameBase:l,pattern:e}}function ey(e,n,t){n===void 0&&(n=!1),t===void 0&&(t=!0),ma(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,s,a)=>(r.push({paramName:s,isOptional:a!=null}),a?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,n?void 0:"i"),r]}function ny(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return ma(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function fa(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,r=e.charAt(t);return r&&r!=="/"?null:e.slice(t)||"/"}function ty(e,n){n===void 0&&(n="/");let{pathname:t,search:r="",hash:o=""}=typeof e=="string"?St(e):e,i;return t?(t=Hp(t),t.startsWith("/")?i=nc(t.substring(1),"/"):i=nc(t,n)):i=n,{pathname:i,search:iy(r),hash:ly(o)}}function nc(e,n){let t=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function gl(e,n,t,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function ry(e){return e.filter((n,t)=>t===0||n.route.path&&n.route.path.length>0)}function ga(e,n){let t=ry(e);return n?t.map((r,o)=>o===t.length-1?r.pathname:r.pathnameBase):t.map(r=>r.pathnameBase)}function ha(e,n,t,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=St(e):(o=Yr({},e),Se(!o.pathname||!o.pathname.includes("?"),gl("?","pathname","search",o)),Se(!o.pathname||!o.pathname.includes("#"),gl("#","pathname","hash",o)),Se(!o.search||!o.search.includes("#"),gl("#","search","hash",o)));let i=e===""||o.pathname==="",l=i?"/":o.pathname,s;if(l==null)s=t;else{let c=n.length-1;if(!r&&l.startsWith("..")){let m=l.split("/");for(;m[0]==="..";)m.shift(),c-=1;o.pathname=m.join("/")}s=c>=0?n[c]:"/"}let a=ty(o,s),u=l&&l!=="/"&&l.endsWith("/"),p=(i||l===".")&&t.endsWith("/");return!a.pathname.endsWith("/")&&(u||p)&&(a.pathname+="/"),a}const Hp=e=>e.replace(/\/\/+/g,"/"),Jn=e=>Hp(e.join("/")),oy=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),iy=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,ly=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function sy(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Fp=["post","put","patch","delete"];new Set(Fp);const ay=["get",...Fp];new Set(ay);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function qr(){return qr=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},qr.apply(null,arguments)}const ya=y.createContext(null),uy=y.createContext(null),ot=y.createContext(null),Ei=y.createContext(null),Nn=y.createContext({outlet:null,matches:[],isDataRoute:!1}),Bp=y.createContext(null);function cy(e,n){let{relative:t}=n===void 0?{}:n;rr()||Se(!1);let{basename:r,navigator:o}=y.useContext(ot),{hash:i,pathname:l,search:s}=Vp(e,{relative:t}),a=l;return r!=="/"&&(a=l==="/"?r:Jn([r,l])),o.createHref({pathname:a,search:s,hash:i})}function rr(){return y.useContext(Ei)!=null}function or(){return rr()||Se(!1),y.useContext(Ei).location}function Up(e){y.useContext(ot).static||y.useLayoutEffect(e)}function Gp(){let{isDataRoute:e}=y.useContext(Nn);return e?by():dy()}function dy(){rr()||Se(!1);let e=y.useContext(ya),{basename:n,future:t,navigator:r}=y.useContext(ot),{matches:o}=y.useContext(Nn),{pathname:i}=or(),l=JSON.stringify(ga(o,t.v7_relativeSplatPath)),s=y.useRef(!1);return Up(()=>{s.current=!0}),y.useCallback(function(u,p){if(p===void 0&&(p={}),!s.current)return;if(typeof u=="number"){r.go(u);return}let c=ha(u,JSON.parse(l),i,p.relative==="path");e==null&&n!=="/"&&(c.pathname=c.pathname==="/"?n:Jn([n,c.pathname])),(p.replace?r.replace:r.push)(c,p.state,p)},[n,r,l,i,e])}function py(){let{matches:e}=y.useContext(Nn),n=e[e.length-1];return n?n.params:{}}function Vp(e,n){let{relative:t}=n===void 0?{}:n,{future:r}=y.useContext(ot),{matches:o}=y.useContext(Nn),{pathname:i}=or(),l=JSON.stringify(ga(o,r.v7_relativeSplatPath));return y.useMemo(()=>ha(e,JSON.parse(l),i,t==="path"),[e,l,i,t])}function my(e,n){return fy(e,n)}function fy(e,n,t,r){rr()||Se(!1);let{navigator:o}=y.useContext(ot),{matches:i}=y.useContext(Nn),l=i[i.length-1],s=l?l.params:{};l&&l.pathname;let a=l?l.pathnameBase:"/";l&&l.route;let u=or(),p;if(n){var c;let P=typeof n=="string"?St(n):n;a==="/"||(c=P.pathname)!=null&&c.startsWith(a)||Se(!1),p=P}else p=u;let m=p.pathname||"/",g=m;if(a!=="/"){let P=a.replace(/^\//,"").split("/");g="/"+m.replace(/^\//,"").split("/").slice(P.length).join("/")}let x=Hh(e,{pathname:g}),w=xy(x&&x.map(P=>Object.assign({},P,{params:Object.assign({},s,P.params),pathname:Jn([a,o.encodeLocation?o.encodeLocation(P.pathname).pathname:P.pathname]),pathnameBase:P.pathnameBase==="/"?a:Jn([a,o.encodeLocation?o.encodeLocation(P.pathnameBase).pathname:P.pathnameBase])})),i,t,r);return n&&w?y.createElement(Ei.Provider,{value:{location:qr({pathname:"/",search:"",hash:"",state:null,key:"default"},p),navigationType:Bn.Pop}},w):w}function gy(){let e=Sy(),n=sy(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return y.createElement(y.Fragment,null,y.createElement("h2",null,"Unexpected Application Error!"),y.createElement("h3",{style:{fontStyle:"italic"}},n),t?y.createElement("pre",{style:o},t):null,null)}const hy=y.createElement(gy,null);class yy extends y.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){console.error("React Router caught the following error during render",n,t)}render(){return this.state.error!==void 0?y.createElement(Nn.Provider,{value:this.props.routeContext},y.createElement(Bp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function vy(e){let{routeContext:n,match:t,children:r}=e,o=y.useContext(ya);return o&&o.static&&o.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=t.route.id),y.createElement(Nn.Provider,{value:n},r)}function xy(e,n,t,r){var o;if(n===void 0&&(n=[]),t===void 0&&(t=null),r===void 0&&(r=null),e==null){var i;if(!t)return null;if(t.errors)e=t.matches;else if((i=r)!=null&&i.v7_partialHydration&&n.length===0&&!t.initialized&&t.matches.length>0)e=t.matches;else return null}let l=e,s=(o=t)==null?void 0:o.errors;if(s!=null){let p=l.findIndex(c=>c.route.id&&(s==null?void 0:s[c.route.id])!==void 0);p>=0||Se(!1),l=l.slice(0,Math.min(l.length,p+1))}let a=!1,u=-1;if(t&&r&&r.v7_partialHydration)for(let p=0;p<l.length;p++){let c=l[p];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(u=p),c.route.id){let{loaderData:m,errors:g}=t,x=c.route.loader&&m[c.route.id]===void 0&&(!g||g[c.route.id]===void 0);if(c.route.lazy||x){a=!0,u>=0?l=l.slice(0,u+1):l=[l[0]];break}}}return l.reduceRight((p,c,m)=>{let g,x=!1,w=null,P=null;t&&(g=s&&c.route.id?s[c.route.id]:void 0,w=c.route.errorElement||hy,a&&(u<0&&m===0?(Cy("route-fallback"),x=!0,P=null):u===m&&(x=!0,P=c.route.hydrateFallbackElement||null)));let h=n.concat(l.slice(0,m+1)),f=()=>{let v;return g?v=w:x?v=P:c.route.Component?v=y.createElement(c.route.Component,null):c.route.element?v=c.route.element:v=p,y.createElement(vy,{match:c,routeContext:{outlet:p,matches:h,isDataRoute:t!=null},children:v})};return t&&(c.route.ErrorBoundary||c.route.errorElement||m===0)?y.createElement(yy,{location:t.location,revalidation:t.revalidation,component:w,error:g,children:f(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):f()},null)}var Kp=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Kp||{}),Qp=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Qp||{});function wy(e){let n=y.useContext(ya);return n||Se(!1),n}function Py(e){let n=y.useContext(uy);return n||Se(!1),n}function ky(e){let n=y.useContext(Nn);return n||Se(!1),n}function Yp(e){let n=ky(),t=n.matches[n.matches.length-1];return t.route.id||Se(!1),t.route.id}function Sy(){var e;let n=y.useContext(Bp),t=Py(),r=Yp();return n!==void 0?n:(e=t.errors)==null?void 0:e[r]}function by(){let{router:e}=wy(Kp.UseNavigateStable),n=Yp(Qp.UseNavigateStable),t=y.useRef(!1);return Up(()=>{t.current=!0}),y.useCallback(function(o,i){i===void 0&&(i={}),t.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,qr({fromRouteId:n},i)))},[e,n])}const tc={};function Cy(e,n,t){tc[e]||(tc[e]=!0)}function _y(e,n){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function ps(e){let{to:n,replace:t,state:r,relative:o}=e;rr()||Se(!1);let{future:i,static:l}=y.useContext(ot),{matches:s}=y.useContext(Nn),{pathname:a}=or(),u=Gp(),p=ha(n,ga(s,i.v7_relativeSplatPath),a,o==="path"),c=JSON.stringify(p);return y.useEffect(()=>u(JSON.parse(c),{replace:t,state:r,relative:o}),[u,c,o,t,r]),null}function Pr(e){Se(!1)}function Ty(e){let{basename:n="/",children:t=null,location:r,navigationType:o=Bn.Pop,navigator:i,static:l=!1,future:s}=e;rr()&&Se(!1);let a=n.replace(/^\/*/,"/"),u=y.useMemo(()=>({basename:a,navigator:i,static:l,future:qr({v7_relativeSplatPath:!1},s)}),[a,s,i,l]);typeof r=="string"&&(r=St(r));let{pathname:p="/",search:c="",hash:m="",state:g=null,key:x="default"}=r,w=y.useMemo(()=>{let P=fa(p,a);return P==null?null:{location:{pathname:P,search:c,hash:m,state:g,key:x},navigationType:o}},[a,p,c,m,g,x,o]);return w==null?null:y.createElement(ot.Provider,{value:u},y.createElement(Ei.Provider,{children:t,value:w}))}function Ry(e){let{children:n,location:t}=e;return my(ms(n),t)}new Promise(()=>{});function ms(e,n){n===void 0&&(n=[]);let t=[];return y.Children.forEach(e,(r,o)=>{if(!y.isValidElement(r))return;let i=[...n,o];if(r.type===y.Fragment){t.push.apply(t,ms(r.props.children,i));return}r.type!==Pr&&Se(!1),!r.props.index||!r.props.children||Se(!1);let l={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=ms(r.props.children,i)),t.push(l)}),t}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fs(){return fs=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},fs.apply(null,arguments)}function $y(e,n){if(e==null)return{};var t={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(n.indexOf(r)!==-1)continue;t[r]=e[r]}return t}function My(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Iy(e,n){return e.button===0&&(!n||n==="_self")&&!My(e)}const Ny=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Ey="6";try{window.__reactRouterVersion=Ey}catch{}const jy="startTransition",rc=_f[jy];function Ly(e){let{basename:n,children:t,future:r,window:o}=e,i=y.useRef();i.current==null&&(i.current=zh({window:o,v5Compat:!0}));let l=i.current,[s,a]=y.useState({action:l.action,location:l.location}),{v7_startTransition:u}=r||{},p=y.useCallback(c=>{u&&rc?rc(()=>a(c)):a(c)},[a,u]);return y.useLayoutEffect(()=>l.listen(p),[l,p]),y.useEffect(()=>_y(r),[r]),y.createElement(Ty,{basename:n,children:t,location:s.location,navigationType:s.action,navigator:l,future:r})}const Oy=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Dy=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,gs=y.forwardRef(function(n,t){let{onClick:r,relative:o,reloadDocument:i,replace:l,state:s,target:a,to:u,preventScrollReset:p,viewTransition:c}=n,m=$y(n,Ny),{basename:g}=y.useContext(ot),x,w=!1;if(typeof u=="string"&&Dy.test(u)&&(x=u,Oy))try{let v=new URL(window.location.href),k=u.startsWith("//")?new URL(v.protocol+u):new URL(u),C=fa(k.pathname,g);k.origin===v.origin&&C!=null?u=C+k.search+k.hash:w=!0}catch{}let P=cy(u,{relative:o}),h=zy(u,{replace:l,state:s,target:a,preventScrollReset:p,relative:o,viewTransition:c});function f(v){r&&r(v),v.defaultPrevented||h(v)}return y.createElement("a",fs({},m,{href:x||P,onClick:w||i?r:f,ref:t,target:a}))});var oc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(oc||(oc={}));var ic;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(ic||(ic={}));function zy(e,n){let{target:t,replace:r,state:o,preventScrollReset:i,relative:l,viewTransition:s}=n===void 0?{}:n,a=Gp(),u=or(),p=Vp(e,{relative:l});return y.useCallback(c=>{if(Iy(c,t)){c.preventDefault();let m=r!==void 0?r:hi(u)===hi(p);a(e,{replace:m,state:o,preventScrollReset:i,relative:l,viewTransition:s})}},[u,a,p,r,o,t,e,i,l,s])}const Wy="https://github.com/frankvane/vane-components";class Ay extends wt.Component{constructor(){super(...arguments);Ha(this,"state",{error:null})}static getDerivedStateFromError(t){return{error:t}}render(){var t;return this.state.error?d.jsxs("div",{className:"crash",role:"alert",children:[d.jsx("h3",{children:"这个页面炸了"}),d.jsx("pre",{children:String(((t=this.state.error)==null?void 0:t.stack)||this.state.error)}),d.jsx("button",{type:"button",onClick:()=>this.setState({error:null}),children:"重试"})]}):this.props.children}}function qp(e,n){return String(e.entries.indexOf(n)+1).padStart(2,"0")}function Hy({demos:e,pathname:n}){var a;const{groups:t,entries:r,label:o}=e,i=(a=r.find(u=>n===`/demo/${u.meta.slug}`))==null?void 0:a.meta.group,[l,s]=y.useState(()=>{var p;const u=(p=t[0])==null?void 0:p.key;return Object.fromEntries(t.map(c=>[c.key,c.key===(i??u)]))});return y.useEffect(()=>{i&&s(u=>u[i]?u:{...u,[i]:!0})},[i]),d.jsxs("div",{className:"nav-section",children:[d.jsxs("div",{className:"nav-section-head",children:[d.jsx("span",{children:o}),d.jsxs("code",{children:[r.length," demos"]})]}),t.map(u=>{const p=r.filter(m=>m.meta.group===u.key);if(p.length===0)return null;const c=l[u.key]??!1;return d.jsxs("div",{className:"nav-group",children:[d.jsxs("button",{type:"button",className:`nav-group-head${i===u.key?" is-current":""}`,onClick:()=>s(m=>({...m,[u.key]:!c})),"aria-expanded":c,children:[d.jsx("span",{className:`nav-caret${c?" is-open":""}`,"aria-hidden":!0,children:"▸"}),u.label,d.jsx("code",{children:p.length})]}),c?d.jsx("div",{className:"nav-list",children:p.map(m=>d.jsxs(gs,{to:`/demo/${m.meta.slug}`,className:`nav-sub${n===`/demo/${m.meta.slug}`?" is-active":""}`,children:[d.jsx("em",{"aria-hidden":!0,children:qp(e,m)}),m.meta.title]},m.meta.slug))}):null]},u.key)})]})}function Fy({demos:e}){var s;const{slug:n}=py(),{entries:t,detail:r}=e,o=n?t.find(a=>a.meta.slug===n):void 0,i=(s=t[0])==null?void 0:s.meta.slug;if(!o)return d.jsx(ps,{to:i?`/demo/${i}`:"/",replace:!0});const l=t.indexOf(o)+1;return d.jsx(wt.Fragment,{children:r(o,l)},o.meta.slug)}function By({config:e}){var c,m;const{pathname:n}=or(),[t,r]=y.useState(!1),[o,i]=y.useState(!1);y.useEffect(()=>r(!1),[n]);const l=y.useCallback(()=>i(g=>!g),[]);y.useEffect(()=>{const g=x=>{const w=x.target,P=w&&(w.tagName==="INPUT"||w.tagName==="TEXTAREA"||w.isContentEditable);x.key==="Escape"&&r(!1),!P&&(x.key==="g"||x.key==="G")&&!x.metaKey&&!x.ctrlKey&&i(h=>!h)};return window.addEventListener("keydown",g),()=>window.removeEventListener("keydown",g)},[]);const s=e.demos,a=(c=s.entries[0])==null?void 0:c.meta.slug,u=y.useMemo(()=>{if(!n.startsWith("/demo"))return e.crumb(n);const g=n.replace(/^\/demo\/?/,""),x=s.entries.find(w=>w.meta.slug===g);return x?`demo ${qp(s,x)} · ${x.meta.title}`:"demo · 逐项示例"},[n,e,s]),p=y.useMemo(()=>e.nav.map((g,x)=>({...g,no:String(x+1).padStart(2,"0")})),[e.nav]);return d.jsxs("div",{className:`shell${t?" is-nav-open":""}${o?" is-guides":""}`,children:[d.jsx("a",{className:"skip-link",href:"#main",onClick:g=>{g.preventDefault();const x=document.getElementById("main");x==null||x.setAttribute("tabindex","-1"),x==null||x.focus(),x==null||x.scrollIntoView({block:"start"})},children:"跳到内容"}),d.jsxs("aside",{className:"side","aria-label":"站点导航",children:[d.jsxs(gs,{to:"/",className:"brand",children:[d.jsx("span",{className:"brand-mark","aria-hidden":!0,children:e.brand}),d.jsxs("span",{children:[d.jsx("strong",{children:e.pkg}),d.jsx("em",{children:e.subtitle})]})]}),d.jsxs("nav",{children:[p.map(g=>d.jsxs(gs,{to:g.to,className:`nav-item${n===g.to?" is-active":""}`,"aria-current":n===g.to?"page":void 0,children:[d.jsx("em",{"aria-hidden":!0,children:g.no}),d.jsx("span",{children:g.label}),g.hint?d.jsx("code",{children:g.hint}):null]},g.to)),d.jsx(Hy,{demos:e.demos,pathname:n})]}),d.jsxs("div",{className:"side-foot",children:[d.jsx("p",{children:e.footer[0]}),d.jsx("p",{className:"muted",children:e.footer[1]})]})]}),d.jsx("button",{type:"button",className:"scrim","aria-label":"关闭导航",tabIndex:t?0:-1,onClick:()=>r(!1)}),d.jsxs("div",{className:"main",id:"main",children:[d.jsxs("header",{className:"topbar",children:[d.jsx("button",{type:"button",className:"nav-toggle","aria-label":t?"关闭导航":"打开导航","aria-expanded":t,onClick:()=>r(g=>!g),children:d.jsx("span",{"aria-hidden":!0})}),d.jsx("span",{className:"crumb",children:u}),d.jsxs("div",{className:"topbar-right",children:[(m=e.stats)==null?void 0:m.map(g=>d.jsxs("span",{className:"topbar-stat",title:g.title,children:[d.jsx("b",{children:g.value})," ",g.label]},g.label)),d.jsxs("button",{type:"button",className:"topbar-btn","aria-pressed":o,onClick:l,title:"显示栏位参考线（快捷键 G）",children:[d.jsx("i",{"aria-hidden":!0}),"guides"]}),d.jsx("a",{className:"topbar-link",href:e.sourceUrl??Wy,target:"_blank",rel:"noreferrer",children:"source ↗"})]})]}),d.jsx("div",{className:"guides","aria-hidden":!0}),d.jsx(y.Suspense,{fallback:d.jsx("div",{className:"loading",children:"loading modules…"}),children:d.jsx(Ay,{children:d.jsxs(Ry,{children:[e.routes.map(g=>d.jsx(Pr,{path:g.path,element:g.element},g.path)),d.jsx(Pr,{path:"/demo",element:d.jsx(ps,{to:a?`/demo/${a}`:"/",replace:!0})}),d.jsx(Pr,{path:"/demo/:slug",element:d.jsx(Fy,{demos:e.demos})}),d.jsx(Pr,{path:"*",element:d.jsx(ps,{to:"/",replace:!0})})]})})})]})]})}function Uy({config:e}){return d.jsx(Ly,{children:d.jsx(By,{config:e})})}const Gy="modulepreload",Vy=function(e,n){return new URL(e,n).href},lc={},va=function(n,t,r){let o=Promise.resolve();if(t&&t.length>0){const l=document.getElementsByTagName("link"),s=document.querySelector("meta[property=csp-nonce]"),a=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));o=Promise.allSettled(t.map(u=>{if(u=Vy(u,r),u in lc)return;lc[u]=!0;const p=u.endsWith(".css"),c=p?'[rel="stylesheet"]':"";if(!!r)for(let x=l.length-1;x>=0;x--){const w=l[x];if(w.href===u&&(!p||w.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${c}`))return;const g=document.createElement("link");if(g.rel=p?"stylesheet":Gy,p||(g.as="script"),g.crossOrigin="",g.href=u,a&&g.setAttribute("nonce",a),document.head.appendChild(g),p)return new Promise((x,w)=>{g.addEventListener("load",x),g.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${u}`)))})}))}function i(l){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=l,window.dispatchEvent(s),!s.defaultPrevented)throw l}return o.then(l=>{for(const s of l||[])s.status==="rejected"&&i(s.reason);return n().catch(i)})};function Ky(e=0){return typeof e=="number"?{top:e,right:e,bottom:e,left:e}:{top:e.top??0,right:e.right??0,bottom:e.bottom??0,left:e.left??0}}function Qy(e,n,t){return typeof e=="number"&&Number.isFinite(e)&&e>0?e:n&&n>0?n:t&&t>0?t:0}function Yy(e){var k,C,E;const{heights:n,columnGap:t,rowGap:r,alignmentMode:o="shortest",estimateHeight:i,minItemHeight:l,hooks:s}=e,a=Ky(e.padding),u=e.containerWidth,p=(k=s==null?void 0:s.calculateColumns)==null?void 0:k.call(s,e.columns),c=Math.max(1,Math.round(typeof p=="number"&&Number.isFinite(p)?p:e.columns)),g=(u-a.left-a.right-t*(c-1))/c,x=(C=s==null?void 0:s.calculateColumnWidth)==null?void 0:C.call(s,g,c,u),w=typeof x=="number"&&Number.isFinite(x)?x:g,P=Array(c).fill(a.top),h=Array(c).fill(0),f=new Map;let v=0;if(n.length===0)return{columns:c,columnWidth:w,padding:a,columnHeights:P,totalHeight:a.top+a.bottom,positions:f,estimatedCount:0};for(let M=0;M<n.length;M++){const j=n[M],S=Qy(j,i,l);if(S===0)continue;typeof j=="number"&&j>0||(v+=1);let b=0;if(o==="sequential")b=M%c;else if(o==="balanced"){let A=h[0];for(let G=1;G<c;G++)h[G]<A&&(A=h[G],b=G)}else{let A=P[0];for(let G=1;G<P.length;G++)P[G]<A&&(A=P[G],b=G)}let L={x:a.left+b*(w+t),y:P[b],width:w,height:S,column:b,row:Math.floor(M/c)};const K=(E=s==null?void 0:s.calculateItemPosition)==null?void 0:E.call(s,M,S,L);if(K){const A={...L,...K};K.column!==void 0&&K.x===void 0&&(A.x=a.left+Math.min(Math.max(0,A.column),c-1)*(w+t)),L=A}f.set(M,L);const W=Math.min(Math.max(0,L.column),P.length-1);P[W]=L.y+L.height+r,h[W]+=1}return{columns:c,columnWidth:w,padding:a,columnHeights:P,totalHeight:Math.max(...P)+a.bottom,positions:f,estimatedCount:v}}function qy(e,n,t="start",r=0){let o=e.y+r;return t==="center"?o-=n/2-e.height/2:t==="end"&&(o-=n-e.height),Math.max(0,o)}const Xy=8;function Jy(e,n,t=.5){const r=[];for(const l of e)Number.isFinite(l)&&l>0&&r.push(l);if(r.length<Xy)return n;r.sort((l,s)=>l-s);const o=Math.min(1,Math.max(0,t)),i=Math.min(r.length-1,Math.round(o*(r.length-1)));return Math.max(1,Math.ceil(r[i]))}function Zy(e,n,t,r,o=1){if(n<=0)return{start:0,end:-1,hiddenCount:0};if(e.size===0){const c=Math.max(1,Math.ceil(r/240)+2);return{start:0,end:Math.min(n-1,c-1),hiddenCount:0}}const i=Math.max(0,r*o),l=t-i,s=t+Math.max(r,1)+i;let a=Number.POSITIVE_INFINITY,u=-1;if(e.forEach((c,m)=>{const g=c.y;c.y+c.height>l&&g<s&&(m<a&&(a=m),m>u&&(u=m))}),u<0){let c=0,m=Number.POSITIVE_INFINITY;e.forEach((x,w)=>{const P=Math.abs(x.y-t);P<m&&(m=P,c=w)});const g=Math.max(1,Math.ceil(r/240)+2);a=Math.max(0,c-g),u=Math.min(n-1,c+g)}a=Math.max(0,a),u=Math.min(n-1,u),u<a&&(u=a);const p=u-a+1;return{start:a,end:u,hiddenCount:Math.max(0,n-p)}}function ev(e){if(!e)return null;const n=e===!0?{}:e;return{overscan:n.overscan??1,estimateHeight:n.estimateHeight??240,dynamicHeights:n.dynamicHeights??!0,adaptiveEstimate:n.adaptiveEstimate??!0,estimateQuantile:n.estimateQuantile??.5}}function sc(e,n,t,r){const o=n.y,i=n.y+n.height,l=t+r,s=Math.max(0,Math.min(l,i)-Math.max(t,o));return{index:e,isVisible:s>0,visibleRatio:n.height>0?Math.min(1,s/n.height):0,isAboveViewport:i<=t,isBelowViewport:o>=l}}function nv({index:e,item:n,position:t,useTransform:r,itemStyle:o,itemClassName:i,renderItem:l,onClick:s,itemRef:a}){const u=t?r?{position:"absolute",transform:`translate(${t.x}px, ${t.y}px)`,width:t.width,boxSizing:"border-box"}:{position:"absolute",left:t.x,top:t.y,width:t.width,boxSizing:"border-box"}:{position:"absolute",opacity:0,pointerEvents:"none"};return d.jsx("div",{ref:a,style:{...u,...o},className:i,onClick:s?p=>s(e,n,p):void 0,"data-index":e,"data-column":t==null?void 0:t.column,children:l(n,e)})}const tv=wt.memo(nv),ac=y.forwardRef(function(n,t){const{items:r=[],renderItem:o,keyExtractor:i=(T,I)=>I,columns:l=3,gap:s=16,rowGap:a,columnGap:u,alignmentMode:p="shortest",padding:c=0,containerStyle:m,containerClassName:g,itemStyle:x,itemClassName:w,useTransform:P=!0,throttleDelay:h=16,debounceDelay:f=150,reachBottomOffset:v=100,minItemHeight:k=48,scrollAnchor:C=!0,virtualize:E,layoutHooks:M,onMount:j,onUnmount:S,onBeforeLayout:b,onLayout:L,onLayoutComplete:K,onItemMount:W,onItemUnmount:A,onItemEnterViewport:G,onItemLeaveViewport:B,onScroll:te,onResize:$,onReachBottom:z,onItemClick:U,children:le,containerRefExternal:se,itemRefsExternal:re,debug:X=!1}=n,R=y.useRef(null),N=se??R,V=y.useRef(new Map),J=re??V,H=y.useRef(new Map),oe=y.useRef(new Map),Pe=y.useRef(null),pe=y.useRef(),ge=y.useRef(),F=y.useRef(null),he=y.useRef(null),En=y.useRef(0),to=y.useRef(!1),ir=y.useRef(0),ji=y.useRef(!1),ka=y.useRef(""),Sa=y.useRef(void 0),ro=y.useRef(async()=>{}),lr=y.useRef(!1),sr=y.useRef(!1),oo=y.useRef(new Set),bt=y.useRef(r);bt.current=r;const wn=y.useRef(new Map),ba=y.useRef(null),Li=y.useRef(0),Ca=y.useRef(i);Ca.current=i;const _a=y.useRef(z);_a.current=z;const io=a??s,Ct=u??s,Ta=typeof c=="number"?c:(c==null?void 0:c.top)??0,Ra=typeof c=="number"?c:(c==null?void 0:c.right)??0,$a=typeof c=="number"?c:(c==null?void 0:c.bottom)??0,Ma=typeof c=="number"?c:(c==null?void 0:c.left)??0,it=y.useMemo(()=>({top:Ta,right:Ra,bottom:$a,left:Ma}),[Ta,Ra,$a,Ma]),Ze=y.useCallback(T=>{const I=bt.current[T];if(I===void 0)return`#${T}`;try{return String(Ca.current(I,T))}catch{return`#${T}`}},[]),Ia=y.useCallback(()=>{const T=bt.current;let I=String(T.length);for(let D=0;D<T.length;D++)I+=`|${Ze(D)}`;return I},[Ze]),Na=JSON.stringify(E??null),ne=y.useMemo(()=>ev(JSON.parse(Na)??void 0),[Na]),Oi=ne==null?void 0:ne.adaptiveEstimate,lo=ne==null?void 0:ne.estimateHeight,Di=ne==null?void 0:ne.estimateQuantile,Ea=ne!==null,[lt,Zm]=y.useState(()=>({columns:l,columnWidth:0,gap:Ct,columnHeights:Array(l).fill(0),totalHeight:0,containerWidth:0,containerHeight:0})),[so,ef]=y.useState(()=>new Map),[jn,ja]=y.useState({scrollTop:0,scrollLeft:0,scrollHeight:0,scrollWidth:0,clientHeight:0,clientWidth:0,isScrolling:!1,direction:null}),[,nf]=y.useState({});wn.current=so;const zi=y.useRef(lt),La=y.useCallback(T=>{const I=wn.current;if(I.size===0)return null;const D=T.scrollTop;if(D<=0)return null;let Y=-1,ue=Number.POSITIVE_INFINITY,Ee=-1,Z=Number.NEGATIVE_INFINITY;I.forEach((Te,Pn)=>{Te.y>=D&&Te.y<ue&&(ue=Te.y,Y=Pn),Te.y<=D&&Te.y+Te.height>D&&Te.y>Z&&(Z=Te.y,Ee=Pn)});const me=Y>=0?Y:Ee,Ln=I.get(me);return Ln?{index:me,offset:Ln.y-D}:null},[]),Oa=y.useRef(""),_t=y.useRef(null),ao=y.useCallback(()=>{const T=_a.current;if(!T)return;const I=N.current;if(!I)return;const{scrollTop:D,scrollHeight:Y,clientHeight:ue}=I,Ee=Y-(D+ue);if(Ee>=v)return;const Z=`${D}|${Y}|${ue}`;Z!==Oa.current&&(Oa.current=Z,T(Ee))},[N,v]),Da=y.useCallback(()=>{_t.current==null&&(_t.current=window.setTimeout(()=>{_t.current=null,ao()},0))},[ao]),Tt=y.useCallback(async()=>{const T=N.current;if(!T)return;const I=`${l}|${Ct}|${io}|${it.top},${it.right},${it.bottom},${it.left}|${p}|${lo??""}|${Oi??""}|${Di??""}`;if(to.current){(I!==ka.current||M!==Sa.current)&&(ji.current=!0);return}to.current=!0,ka.current=I,Sa.current=M,sr.current=!1;const D=La(T);try{if(await(b==null?void 0:b())===!1)return;X&&console.time("[WaterfallCore] layout"),L==null||L();const ue=T.clientWidth,Ee=bt.current.map((Te,Pn)=>{const Hi=J.current.get(Pn),Fi=(Hi==null?void 0:Hi.offsetHeight)??0;return Fi>0?(H.current.set(Ze(Pn),Fi),Fi):H.current.get(Ze(Pn))??0});let Z;if(Ea)if(Oi===!1)Z=lo;else{const Te=Jy(H.current.values(),lo??240,Di);Math.abs(Te-ir.current)>8&&(ir.current=Te),Z=ir.current||Te}const me=Yy({heights:Ee,columns:l,containerWidth:ue,columnGap:Ct,rowGap:io,padding:it,alignmentMode:p,estimateHeight:Z,minItemHeight:k,hooks:M}),Ln={columns:me.columns,columnWidth:me.columnWidth,gap:Ct,columnHeights:me.columnHeights,totalHeight:me.totalHeight,containerWidth:ue,containerHeight:T.clientHeight};if(zi.current=Ln,wn.current=me.positions,Zm(Ln),ef(me.positions),lr.current=!0,X&&(console.timeEnd("[WaterfallCore] layout"),me.estimatedCount>0&&console.debug(`[WaterfallCore] ${me.estimatedCount} 项按估值占位（estimateHeight=${Z}）`)),K==null||K(),D&&C){const Te=me.positions.get(D.index);if(Te){const Pn=Te.y-D.offset-T.scrollTop;Math.abs(Pn)>=1&&(Li.current+=Pn)}}Da()}catch(Y){console.warn("[vane-waterfall] 布局过程出错，本次布局已跳过",Y)}finally{to.current=!1,ji.current&&(ji.current=!1,ro.current())}},[l,Ct,io,it,p,Ea,Oi,lo,Di,M,b,L,K,X,k,C,N,J,Ze,La,Da]);y.useLayoutEffect(()=>{const T=Li.current;if(!T)return;Li.current=0;const I=N.current;I&&(I.scrollTop+=T)}),ro.current=Tt;const uo=y.useCallback(()=>{ge.current&&window.clearTimeout(ge.current),ge.current=window.setTimeout(()=>{ro.current()},f)},[f]),za=y.useCallback(()=>{F.current==null&&(F.current=requestAnimationFrame(()=>{F.current=null,ro.current()}))},[]),Wa=y.useCallback(T=>{he.current==null&&(he.current=requestAnimationFrame(()=>{he.current=null;const I=N.current;I&&ja(D=>{const Y=I.scrollTop,ue=I.scrollLeft,Ee=Y>D.scrollTop?"down":Y<D.scrollTop?"up":ue>D.scrollLeft?"right":ue<D.scrollLeft?"left":D.direction,Z={scrollTop:Y,scrollLeft:ue,scrollHeight:I.scrollHeight,scrollWidth:I.scrollWidth,clientHeight:I.clientHeight,clientWidth:I.clientWidth,isScrolling:T,direction:Ee};return D.scrollTop===Z.scrollTop&&D.scrollLeft===Z.scrollLeft&&D.scrollHeight===Z.scrollHeight&&D.clientHeight===Z.clientHeight&&D.isScrolling===Z.isScrolling?D:Z})}))},[N]),tf=y.useCallback(()=>{const T=N.current;if(!T)return;const I=Date.now();Wa(!0);const D=T.scrollTop,Y=T.clientHeight;if(te==null||te(D,T.scrollLeft),I-En.current>=h&&(En.current=I,ao(),G||B)){const ue=wn.current,Ee=new Set;ue.forEach((Z,me)=>{Math.max(0,Math.min(D+Y,Z.y+Z.height)-Math.max(D,Z.y))>0&&(Ee.add(me),oo.current.has(me)||G==null||G(me,sc(me,Z,D,Y)))}),oo.current.forEach(Z=>{if(Ee.has(Z))return;const me=ue.get(Z);me&&(B==null||B(Z,sc(Z,me,D,Y)))}),oo.current=Ee}pe.current&&window.clearTimeout(pe.current),pe.current=window.setTimeout(()=>{ja(ue=>({...ue,isScrolling:!1}))},f)},[Wa,te,G,B,h,f,ao,N]),rf=y.useCallback(()=>{const T=N.current;T&&($==null||$(T.clientWidth,T.clientHeight),uo())},[$,uo,N]);y.useEffect(()=>{j==null||j(),lr.current||Tt();const T=N.current;T&&typeof ResizeObserver<"u"&&(Pe.current=new ResizeObserver(rf),Pe.current.observe(T));const I=oe.current;return()=>{var D;S==null||S(),(D=Pe.current)==null||D.disconnect(),Pe.current=null,I.forEach(Y=>{try{Y.disconnect()}catch{}}),I.clear(),pe.current&&window.clearTimeout(pe.current),ge.current&&window.clearTimeout(ge.current),_t.current!=null&&(window.clearTimeout(_t.current),_t.current=null),he.current!=null&&(cancelAnimationFrame(he.current),he.current=null),F.current!=null&&(cancelAnimationFrame(F.current),F.current=null)}},[]);const Wi=y.useRef(new Map);y.useEffect(()=>{const T=Ia();if(T===ba.current)return;ba.current=T,lr.current=!1,sr.current=!1,Wi.current.clear();const I=new Set;for(let Y=0;Y<bt.current.length;Y++)I.add(Ze(Y));let D=0;H.current.forEach((Y,ue)=>{I.has(ue)?D+=1:H.current.delete(ue)}),D===0&&(ir.current=0),uo()},[r,uo,Ia,Ze]),y.useEffect(()=>{lr.current=!1,sr.current=!1,Tt()},[l,Ct,io,it,p,ne==null?void 0:ne.estimateHeight,ne==null?void 0:ne.adaptiveEstimate,ne==null?void 0:ne.estimateQuantile,M]);const Aa=y.useRef(()=>{});Aa.current=(T,I)=>{if(I){J.current.set(T,I);const D=Ze(T),Y=I.offsetHeight;if(Y>0&&H.current.set(D,Y),(ne?ne.dynamicHeights!==!1:!0)&&!oe.current.has(T)&&typeof ResizeObserver<"u"){const Ee=new ResizeObserver(()=>{const Z=I.offsetHeight;if(Z<=0)return;H.current.set(Ze(T),Z);const me=wn.current.get(T),Ln=me?Math.abs(me.height-Z)>.5:!1,Te=Wi.current.get(T)===Z;me?Ln&&!Te&&(Wi.current.set(T,Z),za()):za()});try{Ee.observe(I),oe.current.set(T,Ee)}catch{}}W==null||W(T,I),lr.current&&!wn.current.has(T)&&!to.current&&!sr.current&&(sr.current=!0,requestAnimationFrame(()=>void Tt()))}else{J.current.delete(T),Ai.current.delete(T);const D=oe.current.get(T);if(D){try{D.disconnect()}catch{}oe.current.delete(T)}A==null||A(T)}};const Ai=y.useRef(new Map),of=T=>{let I=Ai.current.get(T);return I||(I=D=>Aa.current(T,D),Ai.current.set(T,I)),I},st=y.useMemo(()=>ne?Zy(so,r.length,jn.scrollTop,jn.clientHeight||lt.containerHeight||600,ne.overscan):{start:0,end:Math.max(0,r.length-1),hiddenCount:0},[ne,so,r.length,jn.scrollTop,jn.clientHeight,lt.containerHeight]);y.useImperativeHandle(t,()=>({relayout:()=>{H.current.clear(),ir.current=0,bt.current.forEach((T,I)=>{const D=J.current.get(I);if(!D)return;const Y=D.offsetHeight;Y>0&&H.current.set(Ze(I),Y)}),Tt()},scrollToItem:(T,I={})=>{const D=N.current,Y=wn.current.get(T);!D||!Y||D.scrollTo({top:qy(Y,D.clientHeight,I.block??"start",I.offset??0),behavior:I.behavior??"auto"})},scrollToTop:(T={})=>{var I;(I=N.current)==null||I.scrollTo({top:T.offset??0,behavior:T.behavior??"auto"})},scrollToBottom:(T={})=>{const I=N.current;I&&I.scrollTo({top:I.scrollHeight-I.clientHeight+(T.offset??0),behavior:T.behavior??"auto"})},getItemPosition:T=>wn.current.get(T)??null,getAllItemPositions:()=>wn.current,getColumnHeights:()=>zi.current.columnHeights,getLayoutInfo:()=>zi.current,getViewportInfo:()=>{const T=N.current;return T?{scrollTop:T.scrollTop,scrollLeft:T.scrollLeft,scrollHeight:T.scrollHeight,scrollWidth:T.scrollWidth,clientHeight:T.clientHeight,clientWidth:T.clientWidth,isScrolling:jn.isScrolling,direction:jn.direction}:jn},getVisibleRange:()=>({start:st.start,end:st.end}),getVisibleItems:()=>new Set(oo.current),forceUpdate:()=>nf({}),getContainer:()=>N.current,getItemElement:T=>J.current.get(T)??null,measureItem:async T=>{const I=J.current.get(T),D=Ze(T);if(I){const ue={width:I.offsetWidth,height:I.offsetHeight};return ue.height>0&&H.current.set(D,ue.height),ue}const Y=H.current.get(D);return Y?{width:lt.columnWidth,height:Y}:{width:lt.columnWidth,height:(ne==null?void 0:ne.estimateHeight)??0}}}),[Tt,lt,jn,st,N,J,ne==null?void 0:ne.estimateHeight,Ze]);const lf=y.useMemo(()=>{if(!ne)return r.map((I,D)=>D);const T=[];for(let I=st.start;I<=st.end;I++)T.push(I);return T},[ne,r,st.start,st.end]);return d.jsxs("div",{ref:N,style:{position:"relative",overflowX:"hidden",overflowY:"auto",...m},className:g,onScroll:tf,"data-vane-waterfall":"",children:[le,d.jsx("div",{style:{position:"relative",width:"100%",height:lt.totalHeight,minWidth:0},children:lf.map(T=>{const I=r[T];return I===void 0?null:d.jsx(tv,{index:T,item:I,position:so.get(T),useTransform:P,itemStyle:x,itemClassName:w,renderItem:o,onClick:U,itemRef:of(T)},i(I,T))})})]})});function rv(){const e=new Map,n=new Map;let t=0;const r=(s,a)=>{const u=e.get(s);if(u){if(t>=50){console.warn(`[PluginBus] emit depth exceeded: "${s}"`);return}t+=1;for(const p of[...u])try{p(a)}catch(c){console.warn(`[PluginBus] handler error for event "${s}"`,c)}t-=1}},o=(s,a)=>{let u=e.get(s);u||(u=new Set,e.set(s,u));const p=a;return u.add(p),()=>{u==null||u.delete(p)}},i=(s,a)=>{const u=p=>{try{a(p)}finally{l(s,u)}};return o(s,u)},l=(s,a)=>{var u;if(!a){e.delete(s);return}(u=e.get(s))==null||u.delete(a)};return{emit:r,on:o,once:i,off:l,getData:s=>n.get(s),setData:(s,a)=>{const u=n.get(s);n.set(s,a),u!==a&&r(s,a)},deleteData:s=>{const a=n.has(s);n.delete(s),a&&r(s,void 0)},hasData:s=>n.has(s),getAll:()=>{const s=Object.create(null);return n.forEach((a,u)=>{s[u]=a}),s},clear:()=>{e.clear(),n.clear()}}}function ov(e){const n=new Map(e.map(s=>[s.name,s])),t=[];for(const s of e)for(const a of s.dependencies??[])n.has(a)||t.push(`${s.name} -> ${a}`);const r=[],o=new Set,i=[...e],l=s=>(s.dependencies??[]).every(a=>o.has(a)||!n.has(a));for(;i.length>0;){const s=i.filter(l);if(s.length===0)throw new Error(`[vane/plugin-core] 插件循环依赖: ${i.map(u=>u.name).join(" <-> ")}`);let a=s[0];for(const u of s)(u.priority??0)>(a.priority??0)&&(a=u);r.push(a),o.add(a.name),i.splice(i.indexOf(a),1)}return t.length>0&&console.warn(`[vane/plugin-core] 以下插件依赖未注册，将被忽略:
  ${t.join(`
  `)}`),r}function Xp(e,n){try{return ov(e)}catch(t){return n==null||n(t),e}}async function iv(e,n={}){const{timeout:t=3e3,name:r="anonymous",hook:o="unknown"}=n;if(!t||t<=0)return await e();let i;const l=new Promise((s,a)=>{i=setTimeout(()=>{a(new Error(`[vane/plugin-core] 插件 ${r} 的钩子 ${o} 超时(${t}ms)`))},t)});try{return await Promise.race([Promise.resolve().then(e),l])}finally{i&&clearTimeout(i)}}const lv=new Set(["onMount","onUnmount","onPropsChange","onError"]);function sv(e={}){const n=e.logger??console,t=e.sandbox??!0,r=e.timeout??3e3,o=[];let i=[];const l=new Map,s=new Map,a=new Set;let u=0,p=null,c=0;const m=(S,b,L)=>{o.push({plugin:S,hook:b,error:L})},g=()=>{u+=1,p=null},x=(S,b=new Set)=>S.enabled===!1?!1:b.has(S.name)?!0:(b.add(S.name),(S.dependencies??[]).every(L=>{const K=l.get(L);return!K||x(K,b)})),w=()=>{if(p)return p;const S=[...l.values()].filter(b=>x(b)?!0:(m(b.name,"dependencies",new Error("依赖已停用")),!1));return p=Xp(S,b=>m("[order]","resolveDependencyOrder",b))},P=S=>{const b=i.filter(([L])=>!S||L===S).reverse();i=S?i.filter(([L])=>L!==S):[];for(const[,L]of b)try{L()}catch(K){n.warn("[vane] cleanup failed",K)}},h=S=>{var b;return Promise.resolve((b=S.destroy)==null?void 0:b.call(S)).catch(L=>n.warn(`[vane] destroy failed: ${S.name}`,L))},f=async(S,b,L,K,W)=>{var te,$;const A=b==="onUnmount";if(b==="onMount"||A){if(a.has(S.name)!==A)return{};A?a.delete(S.name):a.add(S.name)}const G=(te=S.hooks)==null?void 0:te[b];if(typeof G!="function")return{};let B;try{const z=()=>G(L,...K);B=S.sandbox??t?await iv(z,{timeout:S.timeout??r,name:S.name,hook:b}):await z()}catch(z){return W!==u?{}:(m(S.name,b,z),n.warn(`[vane] ${b} failed: ${S.name}`,z),($=e.onError)==null||$.call(e,S.name,b,z),{stop:b==="onError"})}return W!==u?{}:lv.has(b)&&typeof B=="function"?(i.push([S.name,B]),{}):{value:B}},v=async(S,b,L)=>{const K=u;for(const W of w()){if(K!==u)return;const A=await f(W,S,b,L,K);if(A.stop)return;if(A.value===!1)return!1;if(A.value!==void 0&&A.value!==!0)return A.value}},k=(S,b,...L)=>v(S,b,L),C=S=>{l.get(S.name)&&s.get(S.name)!==S&&(n.warn(`[vane] duplicate plugin, destroy old: ${S.name}`),j(S.name)),l.set(S.name,{...S,enabled:S.enabled??!0}),s.set(S.name,S),a.delete(S.name),g(),S.init&&Promise.resolve(S.init()).catch(b=>{n.warn(`[vane] init failed: ${S.name}`,b)})},E=S=>S.forEach(C),M=S=>{l.delete(S),s.delete(S),a.delete(S),p=null},j=S=>{const b=l.get(S);b&&(g(),P(S),h(b),M(S))};return{register:C,registerAll:E,unregister:j,getPlugin:S=>l.get(S),getAllPlugins:()=>[...l.values()],getEnabledPlugins:()=>[...l.values()].filter(S=>S.enabled!==!1),getExecutionOrder:()=>[...w()],enable:S=>{const b=l.get(S);b&&(b.enabled=!0,p=null)},disable:S=>{const b=l.get(S);b&&(b.enabled=!1,p=null)},has:S=>l.has(S),executeHook:k,clear:()=>{g(),c+=1,P();const S=[...l.values()].map(h);return l.clear(),s.clear(),a.clear(),Promise.all(S).then(()=>{})},getErrors:()=>[...o],align:async(S,b)=>{const L=++c,K=new Map(S.map(W=>[W.name,W]));for(const W of[...l.keys()]){if(L!==c)return;if(s.get(W)===K.get(W))continue;const A=l.get(W);g(),await f(A,"onUnmount",b,[],u),P(W),await h(A),M(W)}for(const W of S){if(L!==c)return;s.get(W.name)!==W&&C(W)}},peekOrder:w}}var av=Object.defineProperty,uv=(e,n,t)=>n in e?av(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,cv=(e,n,t)=>uv(e,n+"",t);class Jp extends wt.Component{constructor(){super(...arguments),cv(this,"state",{error:null})}static getDerivedStateFromError(n){return{error:n}}componentDidUpdate(n){var o,i;const t=n.resetKeys??[],r=this.props.resetKeys??[];this.state.error&&(t.length!==r.length||t.some((l,s)=>!Object.is(l,r[s])))&&((i=(o=this.props).onReset)==null||i.call(o),this.setState({error:null}))}componentDidCatch(n,t){var r,o;console.warn("[vane/plugin-core] 插件渲染错误已被隔离",n,t),(o=(r=this.props).onError)==null||o.call(r,n,t)}render(){const{error:n}=this.state;return n?this.props.fallback?this.props.fallback(n):null:this.props.children}}let Ro=null;function dv(e=!1){if(Ro&&!e)return Ro;const n=typeof window<"u"?window.innerWidth:1024,t=typeof window<"u"?window.innerHeight:768,r=typeof window<"u"&&window.devicePixelRatio||1,o=typeof navigator<"u"&&navigator.userAgent||"",i=/iPad|Tablet/i.test(o),l=/Mobile|Android|iPhone/i.test(o),s=typeof window<"u"&&("ontouchstart"in window||(navigator.maxTouchPoints??0)>0);return Ro={type:i?"tablet":l?"mobile":"desktop",os:o,browser:o,devicePixelRatio:r,viewportWidth:n,viewportHeight:t,isTouchDevice:s,isRetina:r>=2},Ro}function uc(e,n){if(Object.is(e,n))return!0;if(typeof e!="object"||typeof n!="object"||e===null||n===null)return!1;const t=Object.keys(e),r=Object.keys(n);return t.length!==r.length?!1:t.every(o=>Object.is(e[o],n[o]))}function pv(e){const{plugins:n,props:t,data:r,initialState:o,containerRef:i,enableDebug:l=!1,managerOptions:s,extendContext:a}=e,u=y.useRef(null),p=i??u,c=y.useRef(null);c.current||(c.current=sv(s));const m=c.current,g=y.useRef(null);g.current||(g.current=rv());const x=g.current,w=y.useRef(new Map),[P,h]=y.useState(o??{}),[,f]=y.useState(0),v=y.useCallback(()=>f(re=>re+1),[]),k=y.useMemo(()=>dv(),[]),C=y.useRef(t);uc(C.current,t)||(C.current=t);const E=C.current,M=y.useRef(r);uc(M.current,r)||(M.current=r);const j=M.current,S=y.useRef(null),b=y.useMemo(()=>{const re={props:E,data:j,bus:x,refs:{container:p,getContainer:()=>p.current},state:P,setState:X=>h(R=>({...R,...X})),shared:w.current,deviceInfo:k,forceUpdate:v,getSize:()=>{const X=p.current;return X?{width:X.offsetWidth,height:X.offsetHeight}:{width:0,height:0}},logger:console};return a?a(re):re},[E,j,P,k,x,a]);y.useLayoutEffect(()=>{S.current=b},[b]);const L=y.useRef(n),K=L.current;K!==n&&(K.length!==n.length||n.some((re,X)=>re!==K[X]))&&(L.current=n);const W=L.current,A=y.useRef(0);y.useLayoutEffect(()=>{const re=++A.current,X=S.current;return m.align(W,X).then(()=>{A.current===re&&(l&&console.debug("[vane/plugin-core] plugins registered:",W.map(R=>R.name).join("|")),m.executeHook("onMount",X))}),()=>{A.current+=1}},[W,m,l]),y.useLayoutEffect(()=>()=>{const re=S.current;if(!m.getExecutionOrder().some(X=>{var R;return typeof((R=X.hooks)==null?void 0:R.onUnmount)=="function"})){m.clear();return}m.executeHook("onUnmount",re).finally(()=>m.clear())},[m]);const G=m.peekOrder(),B=y.useRef([]),te=y.useMemo(()=>{const re=new Map(W.map(V=>[V.name,V])),X=W.filter(V=>{var J;return V.enabled!==!1&&((J=m.getPlugin(V.name))==null?void 0:J.enabled)!==!1}),R=G.length===X.length?G.map(V=>re.get(V.name)??V):Xp(X),N=B.current;return N.length===R.length&&R.every((V,J)=>V===N[J])?N:(B.current=R,R)},[W,m,G]),$=y.useRef(b);$.current=b;const z=y.useCallback((re,X)=>{var V;const R=$.current;let N=X;for(const J of te){const H=(V=J.hooks)==null?void 0:V[re];if(typeof H=="function")try{N=re==="transformData"?H(R,N):H(N)}catch(oe){(R.logger??console).warn(`[plugin-core] ${J.name}.${re} 执行失败，已跳过`,oe)}}return N},[te]),U=y.useCallback(re=>z("transformProps",re),[z]),le=y.useCallback(re=>z("transformData",re),[z]),se=y.useCallback((re,...X)=>m.executeHook(re,S.current,...X),[m]);return{manager:m,bus:x,context:b,state:P,setState:b.setState,execute:se,transformProps:U,transformData:le,orderedPlugins:te}}y.createContext(null);function $o(e,n,t){var o,i;if(e.enabled===!1||typeof((o=e.hooks)==null?void 0:o[n])!="function")return!1;const r=(i=e.config)==null?void 0:i.slotPosition;return t==="before"?r==="before":t==="footer"?r===void 0||r==="after"||r==="footer":r===void 0||r==="after"}function mv(e,n){var t,r;return(((t=e.config)==null?void 0:t.order)??0)-(((r=n.config)==null?void 0:r.order)??0)||(n.priority??0)-(e.priority??0)}function Mo(e,n,t){const r=new Set;return e.map(o=>{var i;if(r.has(o.name))return null;r.add(o.name);try{const l=(i=o.hooks)==null?void 0:i[t],s=l==null?void 0:l(n);return s==null?null:d.jsx(Jp,{children:s},`vane-slot-${o.name}`)}catch(l){return console.warn(`[vane/plugin-core] 插件 ${o.name} 的 ${t} 渲染失败`,l),null}})}function fv(e,n,t){const r={headerBefore:[],overlay:[],headerAfter:[],footer:[]};for(const o of e)$o(o,"renderHeader","before")?r.headerBefore.push(o):$o(o,"renderHeader","after")&&r.headerAfter.push(o),$o(o,"renderOverlay","after")&&r.overlay.push(o),$o(o,"renderFooter","footer")&&r.footer.push(o);for(const o of Object.keys(r))r[o].sort(mv);return d.jsxs(d.Fragment,{children:[Mo(r.headerBefore,n,"renderHeader"),t,Mo(r.overlay,n,"renderOverlay"),Mo(r.headerAfter,n,"renderHeader"),Mo(r.footer,n,"renderFooter")]})}const gv={columns:0,columnWidth:0,gap:0,columnHeights:[],totalHeight:0,containerWidth:0,containerHeight:0},hv={scrollTop:0,scrollLeft:0,scrollHeight:0,scrollWidth:0,clientHeight:0,clientWidth:0,isScrolling:!1,direction:null};function an(e,n,...t){if(typeof n=="function")try{return n(...t)}catch(r){console.warn(`[vane-waterfall] ${e} 回调抛错，已忽略`,r);return}}async function cc(e,n,...t){if(typeof n=="function")try{return await n(...t)}catch(r){console.warn(`[vane-waterfall] ${e} 回调抛错，已忽略`,r);return}}function yv(){const e=typeof navigator<"u"?navigator:void 0,n=(e==null?void 0:e.connection)||(e==null?void 0:e.mozConnection)||(e==null?void 0:e.webkitConnection);if(n)return{effectiveType:n.effectiveType||"4g",downlink:Number(n.downlink||10),rtt:Number(n.rtt||50),saveData:!!n.saveData,online:(e==null?void 0:e.onLine)!==!1}}function dc(e,n,t){let r=Number.POSITIVE_INFINITY,o=-1;const i=new Set;return e.forEach((l,s)=>{Math.min(n+t,l.y+l.height)-Math.max(n,l.y)>0&&(i.add(s),s<r&&(r=s),s>o&&(o=s))}),{set:i,range:o<0?{start:0,end:0}:{start:r,end:o}}}function vv(e,n){const t=Array.isArray(n)?{plugins:n}:n,{plugins:r,enableDebug:o=!1}=t,i=y.forwardRef((l,s)=>{const a=y.useRef(null),u=y.useRef(new Map),p=y.useRef(null),c=y.useMemo(()=>yv(),[]),m=y.useRef(null),[g,x]=y.useState(gv),[w,P]=y.useState(()=>new Map),[h,f]=y.useState(hv),[v,k]=y.useState(!1),[C,E]=y.useState(0),M=y.useCallback(R=>{var ge;const N=()=>{var F;return((F=p.current)==null?void 0:F.getLayoutInfo())??g},V=()=>{var F;return((F=p.current)==null?void 0:F.getAllItemPositions())??w},J=()=>{var F;return((F=p.current)==null?void 0:F.getViewportInfo())??h},H=()=>{var F,he;return((F=m.current)==null?void 0:F.items)??((he=R.props)==null?void 0:he.items)??[]},oe=()=>{var F;return((F=R.props)==null?void 0:F.items)??[]},Pe=()=>{var En;const F=(En=p.current)==null?void 0:En.getVisibleItems();if(F&&F.size>0)return F;const he=J();return dc(V(),he.scrollTop,he.clientHeight).set},pe={...R,containerRef:a,itemRefs:u.current,getItemRef:F=>u.current.get(F)??null,getItemPosition:F=>V().get(F)??null,isLayouting:v,isScrolling:h.isScrolling,isDragging:!!((ge=R.state.dragInfo)!=null&&ge.isDragging),error:R.state.error??null,sharedData:R.shared,networkInfo:c,dragInfo:R.state.dragInfo,relayout:()=>{var F;return(F=p.current)==null?void 0:F.relayout()},scrollToItem:(F,he)=>{var En;return(En=p.current)==null?void 0:En.scrollToItem(F,he)},scrollToTop:F=>{var he;return(he=p.current)==null?void 0:he.scrollToTop(F)},scrollToBottom:F=>{var he;return(he=p.current)==null?void 0:he.scrollToBottom(F)},measureItem:F=>{var he;return((he=p.current)==null?void 0:he.measureItem(F))??Promise.resolve({width:0,height:0})}};return Object.defineProperties(pe,{layout:{get:N,enumerable:!0,configurable:!0},itemPositions:{get:V,enumerable:!0,configurable:!0},viewport:{get:J,enumerable:!0,configurable:!0},items:{get:H,enumerable:!0,configurable:!0},itemCount:{get:()=>H().length,enumerable:!0,configurable:!0},rawItems:{get:oe,enumerable:!0,configurable:!0},visibleItems:{get:Pe,enumerable:!0,configurable:!0},hasMore:{get:()=>{var F;return((F=m.current)==null?void 0:F.hasMore)??R.state.hasMore??!0},enumerable:!0,configurable:!0},isLoading:{get:()=>{var F;return((F=m.current)==null?void 0:F.isLoading)??R.state.isLoading??!1},enumerable:!0,configurable:!0},props:{get:()=>m.current??R.props,enumerable:!0,configurable:!0},visibleRange:{get:()=>{const F=J();return dc(V(),F.scrollTop,F.clientHeight).range},enumerable:!0,configurable:!0}}),pe},[g,w,h,v,c]),S=pv({plugins:r,props:l,enableDebug:o,containerRef:a,extendContext:M}),b=y.useRef(S.context);y.useLayoutEffect(()=>{b.current=S.context}),y.useEffect(()=>S.bus.on("props:invalidate",()=>E(R=>R+1)),[S.bus]);const L=y.useCallback((R,...N)=>S.execute(R,...N),[S.manager]),K=S.orderedPlugins,W=r.map(R=>R.name).join("|"),A=y.useMemo(()=>{const R=K.filter(H=>{var oe;return typeof((oe=H.hooks)==null?void 0:oe.calculateColumns)=="function"}),N=K.filter(H=>{var oe;return typeof((oe=H.hooks)==null?void 0:oe.calculateColumnWidth)=="function"}),V=K.filter(H=>{var oe;return typeof((oe=H.hooks)==null?void 0:oe.calculateItemPosition)=="function"});if(!R.length&&!N.length&&!V.length)return;const J=(H,oe,Pe,pe)=>{for(const ge of oe)try{const F=Pe(ge);if(pe(F))return F}catch(F){console.warn(`[vane-waterfall] ${ge.name} 的 ${H} 执行失败`,F)}};return{calculateColumns:R.length?()=>{var oe,Pe,pe;const H=((pe=(Pe=(oe=b.current)==null?void 0:oe.containerRef)==null?void 0:Pe.current)==null?void 0:pe.clientWidth)??0;return J("calculateColumns",R,ge=>ge.hooks.calculateColumns(b.current,H),ge=>typeof ge=="number"&&Number.isFinite(ge))}:void 0,calculateColumnWidth:N.length?(H,oe,Pe)=>J("calculateColumnWidth",N,pe=>pe.hooks.calculateColumnWidth(b.current,Pe,oe),pe=>typeof pe=="number"&&Number.isFinite(pe)):void 0,calculateItemPosition:V.length?(H,oe,Pe)=>J("calculateItemPosition",V,pe=>pe.hooks.calculateItemPosition(b.current,H,oe,Pe),pe=>!!pe):void 0}},[K]),G=y.useCallback(()=>{const R=p.current;if(!R)return;const N=R.getLayoutInfo(),V=R.getAllItemPositions(),J=R.getViewportInfo();x(H=>H.totalHeight===N.totalHeight&&H.columns===N.columns&&H.columnWidth===N.columnWidth&&H.containerWidth===N.containerWidth?H:N),P(H=>{if(H===V)return H;if(H.size!==V.size)return V;let oe=!0;return V.forEach((Pe,pe)=>{if(oe===!1)return;const ge=H.get(pe);(!ge||ge.x!==Pe.x||ge.y!==Pe.y||ge.width!==Pe.width||ge.height!==Pe.height||ge.column!==Pe.column)&&(oe=!1)}),oe?H:V}),f(H=>H.scrollTop===J.scrollTop&&H.clientHeight===J.clientHeight&&H.scrollHeight===J.scrollHeight&&H.isScrolling===J.isScrolling?H:J)},[]),B=y.useMemo(()=>S.transformProps(l),[S.transformProps,l,C]);y.useEffect(()=>{r.some(R=>R.name==="PaginationPlugin")&&r.some(R=>R.name==="InfiniteScrollPlugin")&&console.warn("[vane-waterfall] PaginationPlugin 与 InfiniteScrollPlugin 互斥：两者都会改写 items，请只保留一个")},[W]),y.useEffect(()=>{L("onMount")},[L]);const te=y.useRef(l);y.useEffect(()=>{const R=te.current;R!==l&&(te.current=l,L("onPropsChange",R,l))},[l,L]),m.current=B;const $=y.useCallback(async()=>(k(!0),await L("onBeforeLayout")===!1?(k(!1),!1):!0),[L]),z=y.useCallback(()=>{L("onLayout")},[L]),U=y.useCallback(()=>{k(!1),L("onLayoutComplete"),Promise.resolve().then(G)},[L,G]),le=y.useMemo(()=>K.filter(R=>{var N;return typeof((N=R.hooks)==null?void 0:N.renderItemWrapper)=="function"}),[K]),se=B.renderItem,re=y.useCallback((R,N)=>{let V=(se==null?void 0:se(R,N))??null;for(const J of le)try{const H=J.hooks.renderItemWrapper(b.current,V,N);H!=null&&(V=H)}catch(H){console.warn(`[vane-waterfall] ${J.name} 的 renderItemWrapper 失败`,H)}return V},[se,le]),X={...B,containerRefExternal:a,itemRefsExternal:u,debug:B.debug??o,layoutHooks:A??B.layoutHooks,renderItem:re,children:d.jsx(Jp,{children:fv(S.orderedPlugins,S.context,B.children)}),onMount:()=>{an("onMount",B.onMount)},onUnmount:()=>{an("onUnmount",B.onUnmount)},onBeforeLayout:async()=>await $()===!1?!1:await cc("onBeforeLayout",B.onBeforeLayout)??!0,onLayout:()=>{an("onLayout",B.onLayout),z()},onLayoutComplete:()=>{an("onLayoutComplete",B.onLayoutComplete),U()},onItemMount:(R,N)=>{an("onItemMount",B.onItemMount,R,N),L("onItemMount",R,N)},onItemUnmount:R=>{an("onItemUnmount",B.onItemUnmount,R),L("onItemUnmount",R)},onItemEnterViewport:(R,N)=>{an("onItemEnterViewport",B.onItemEnterViewport,R,N),L("onItemEnterViewport",R,N)},onItemLeaveViewport:(R,N)=>{an("onItemLeaveViewport",B.onItemLeaveViewport,R,N),L("onItemLeaveViewport",R,N)},onScroll:(R,N)=>{an("onScroll",B.onScroll,R,N),L("onScroll",R,N),G()},onResize:(R,N)=>{an("onResize",B.onResize,R,N),L("onResize",R,N)},onReachBottom:async R=>{await cc("onReachBottom",B.onReachBottom,R),await L("onReachBottom",R)},onItemClick:(R,N,V)=>{an("onItemClick",B.onItemClick,R,N,V),L("onItemClick",R,N,V)}};return d.jsx(e,{ref:R=>{p.current=R,typeof s=="function"?s(R):s&&(s.current=R)},...X})});return i.displayName="WithPlugins(WaterfallCore)",i}function xv(e){let n=e%2147483647;return n<=0&&(n+=2147483646),()=>(n=n*16807%2147483647,(n-1)/2147483646)}const hl=["林一白","苏见月","陈默","阿岚","周知夏","陆青野","许星河","沈迟","顾亦","南野","唐小满","白露"],Io=["阴天里的海边公路","手冲咖啡的第 30 天","把阳台改成了书房","城市夜行的三小时","一碗面的做法","老相机与新胶卷","周三的菜市场","窗台上的第四盆绿植","独居第五年的厨房","关于晨跑的碎念","旧书店的午后","这条街的雨"],No=["摄影","家居","美食","穿搭","旅行","手作","阅读","数码"];function Zp(e={}){const{count:n=40,seed:t=20261026,heightRange:r=[140,300],commerce:o=!1}=e,i=xv(t),[l,s]=r;return Array.from({length:n},(a,u)=>{const p=i(),c=i(),m=i(),g=`c${t}-${u}`;return{id:g,title:Io[u%Io.length]+(u>=Io.length?` · ${Math.floor(u/Io.length)+1}`:""),author:hl[Math.floor(p*hl.length)]??hl[0],height:Math.round((l+c*(s-l))/8)*8,hue:Math.floor(m*360),image:`https://picsum.photos/seed/${g}/400/500`,tag:No[Math.floor(p*No.length)%No.length]??No[0],price:o?Math.round((29+c*870)/10)*10:0,likes:Math.floor(20+m*9800),minutesAgo:Math.floor(p*60*24*14)}})}function pc(e){return e<60?`${Math.max(1,e)} 分钟前`:e<60*24?`${Math.floor(e/60)} 小时前`:`${Math.floor(e/60/24)} 天前`}function wv({height:e,hue:n,src:t,badge:r,glyph:o,radius:i=0,deep:l}){const s=(n+42)%360;return d.jsxs("div",{className:`thumb${t?" has-img":""}`,style:{height:e,borderRadius:i,backgroundImage:[`radial-gradient(132% 92% at 16% 6%, hsl(${n} 21% ${l?36:64}%) 0%, hsl(${s} 17% ${l?15:33}%) 100%)`].join(",")},children:[t?d.jsx("img",{className:"thumb-img",src:t,alt:"",loading:"lazy",decoding:"async",draggable:!1,onError:a=>{a.currentTarget.style.display="none"}}):null,o?d.jsx("span",{className:"thumb-glyph",children:o}):null,r?d.jsx("span",{className:"thumb-badge",children:r}):null]})}const Pv=d.jsx("svg",{viewBox:"0 0 24 24",width:"14",height:"14",fill:"currentColor","aria-hidden":!0,children:d.jsx("path",{d:"M8 5v14l11-7z"})});function kv({card:e,variant:n="photo",fixed:t,pinned:r,corner:o}){const i=d.jsx(wv,{height:t?"100%":e.height,hue:e.hue,src:e.image,radius:0,deep:n==="video",badge:n==="video"?d.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:4},children:[Pv,Math.floor(e.minutesAgo/60),":",String(e.minutesAgo%60).padStart(2,"0")]}):n==="product"?`¥${e.price}`:r?"置顶":void 0,glyph:n==="doc"?d.jsx("span",{style:{fontSize:11,letterSpacing:.5},children:e.tag}):void 0});return t?d.jsxs("div",{className:"wf-card is-fixed",style:{height:e.height},children:[d.jsx("div",{className:"wf-card-fill",children:i}),d.jsxs("div",{className:"wf-card-cap",children:[d.jsx("p",{className:"wf-item-title",children:e.title}),d.jsxs("p",{className:"wf-item-meta",children:[e.author," · ",pc(e.minutesAgo)]})]}),o?d.jsx("span",{className:"wf-card-corner",children:o}):null]}):d.jsxs("div",{className:`wf-card is-${n}`,children:[i,d.jsxs("div",{className:"wf-card-cap",children:[d.jsx("p",{className:"wf-item-title",children:e.title}),d.jsx("p",{className:"wf-item-meta",children:n==="product"?d.jsxs(d.Fragment,{children:[d.jsxs("b",{className:"wf-price",children:["¥",e.price]}),d.jsx("span",{className:"wf-sep","aria-hidden":!0,children:"·"}),e.likes," 人收藏"]}):d.jsxs(d.Fragment,{children:[e.author,d.jsx("span",{className:"wf-sep","aria-hidden":!0,children:"·"}),pc(e.minutesAgo)]})})]}),o?d.jsx("span",{className:"wf-card-corner",children:o}):null]})}function Sv({controls:e,cfg:n,onChange:t}){return d.jsx("div",{className:"ctl-bar",children:e.filter(r=>!r.when||r.when(n)).map(r=>{const o=n[r.key];return d.jsxs("label",{className:"ctl",title:r.hint,children:[d.jsxs("span",{className:"ctl-label",children:[r.label,d.jsx("b",{className:"ctl-val",children:r.kind==="switch"?o?"开":"关":String(o)})]}),r.kind==="switch"?d.jsx("button",{type:"button",className:`ctl-switch${o?" is-on":""}`,onClick:()=>t(r.key,!o),"aria-pressed":!!o,children:d.jsx("i",{})}):r.kind==="select"?d.jsx("select",{className:"ctl-select",value:String(o),onChange:i=>t(r.key,i.target.value),children:(r.options??[]).map(i=>d.jsx("option",{value:i.value,children:i.label},i.value))}):d.jsx("input",{className:"ctl-range",type:"range",min:r.min??0,max:r.max??100,step:r.step??1,value:Number(o),onChange:i=>t(r.key,Number(i.target.value))})]},r.key)})})}function em({lines:e,title:n="事件日志",empty:t="还没触发 —— 试着滚动、点一张卡",right:r}){return d.jsxs("div",{className:"log",children:[d.jsxs("div",{className:"log-head",children:[d.jsx("span",{children:n}),d.jsxs("span",{className:"log-right",children:[r,d.jsx("b",{children:e.length})]})]}),e.length===0?d.jsx("p",{className:"log-empty",children:t}):d.jsx("ol",{className:"log-list",children:e.map(o=>d.jsxs("li",{className:`log-line is-${o.kind}`,children:[d.jsx("time",{children:o.at}),d.jsx("span",{children:o.text})]},o.id))})]})}const bv={total:0,rendered:0,totalHeight:0,layoutMs:0,scrolls:0,columns:0};function Cv({items:e}){return d.jsx("div",{className:"keyhint",children:e.map(([n,t])=>d.jsxs("span",{children:[d.jsx("kbd",{children:n}),t]},n))})}function q(e){const{count:n=48,seed:t=9101,heightRange:r,commerce:o,variant:i="photo",fixed:l,containerStyle:s,pluginKeys:a,instrument:u}=e;return function({cfg:c,log:m,setCfg:g}){var K;const[x,w]=y.useState(()=>Zp({count:n,seed:t,heightRange:r,commerce:o})),P=y.useRef(null),[h,f]=y.useState(bv),v=y.useRef(0),k=y.useRef(0),C=y.useRef(null);C.current={cfg:c,items:x,setItems:w,setCfg:g,log:m,ref:P,meter:h};const E=y.useMemo(()=>{const W=a??Object.keys(c);return JSON.stringify(W.map(A=>[A,c[A]]))},[c]),M=y.useMemo(()=>{var A;const W=((A=e.plugins)==null?void 0:A.call(e,C.current))??[];return W.length?vv(ac,W):ac},[E]),j=y.useCallback(W=>{const A=P.current;if(!A)return;const G=A.getLayoutInfo(),B=A.getVisibleRange(),te={total:W,rendered:Math.max(0,B.end-B.start+1),totalHeight:G.totalHeight,layoutMs:performance.now()-k.current,scrolls:v.current,columns:G.columns};f($=>$.total===te.total&&$.rendered===te.rendered&&$.columns===te.columns&&Math.abs($.totalHeight-te.totalHeight)<.5&&$.scrolls===te.scrolls&&Math.abs($.layoutMs-te.layoutMs)<.05?$:te)},[]),S=y.useCallback(W=>{if(v.current+=1,u&&v.current%4===0){const A=P.current;if(A){const G=A.getVisibleRange(),B=Math.max(0,G.end-G.start+1);f(te=>te.rendered===B&&te.scrolls===v.current?te:{...te,rendered:B,scrolls:v.current})}}},[]),b=y.useMemo(()=>{var A;return{...((A=e.coreProps)==null?void 0:A.call(e,C.current))??{},...u?{onLayout:()=>{k.current=performance.now()},onLayoutComplete:()=>j(x.length),onScroll:S}:null}},[c,x,j,S]);y.useEffect(()=>{var A;const W=(A=e.effect)==null?void 0:A.call(e,C.current);return typeof W=="function"?W:void 0},[]);const L=y.useCallback((W,A)=>{var B;const G=(B=e.decorate)==null?void 0:B.call(e,C.current,W,A);return d.jsx(kv,{card:W,variant:i,fixed:l,pinned:G==null?void 0:G.pinned,corner:G==null?void 0:G.corner})},[]);return d.jsxs("div",{className:"stage",children:[(K=e.chrome)==null?void 0:K.call(e,C.current),d.jsx("div",{className:"stage-scroll",children:d.jsx(M,{ref:P,items:x,keyExtractor:W=>W.id,renderItem:L,containerStyle:{height:"var(--stage-h, 380px)",...s},...b})})]})}}const _v={slug:"basic",title:"基础示例",group:"basic",intro:"最省事的用法：一批高度不等的卡片，交给 Core 排。",why:"刚接入时先用这一页确认两件事 —— 容器给了高度、卡片真的按 item.height 渲染。这两条不对，后面装什么插件都白搭。",plugs:[],props:["columns={{{columns}}}","gap={{{gap}}}","containerStyle={{ height: 420 }}"],note:"containerStyle 必须给高度。不给高度 = 没有滚动上下文，Core 量不出视口，卡片会全部堆在顶部。",controls:[{key:"columns",label:"列数",kind:"number",init:3,min:1,max:6,hint:"props.columns"},{key:"gap",label:"间距",kind:"number",init:16,min:0,max:32,hint:"props.gap，行/列通用"}]},Tv=q({count:40,seed:1201,plugins:()=>[],instrument:!0,coreProps:e=>({columns:Number(e.cfg.columns),gap:Number(e.cfg.gap)})}),Rv=Object.freeze(Object.defineProperty({__proto__:null,default:Tv,meta:_v},Symbol.toStringTag,{value:"Module"})),$v={slug:"columns",title:"自定义列数",group:"basic",intro:"写死列数，列宽自己算 —— 拖到 6 列看列宽怎么缩。",why:"后台表格、看板、固定版式的商品墙通常就是固定列数，不需要按容器自适应。",plugs:[],props:["columns={{{columns}}}","gap={{{gap}}}","containerStyle={{ height: 420 }}"],note:"写了 columns 又被 AutoColumnPlugin / ResponsiveColumnsPlugin 覆盖是常见困惑：那两个插件在 calculateColumns 钩子里返回列数，优先级高于 props。",controls:[{key:"columns",label:"列数",kind:"number",init:4,min:1,max:6},{key:"gap",label:"间距",kind:"number",init:12,min:0,max:32}]},Mv=q({count:36,seed:1401,plugins:()=>[],instrument:!0,coreProps:e=>({columns:Number(e.cfg.columns),gap:Number(e.cfg.gap)}),chrome:e=>d.jsxs("p",{className:"stage-tip",children:["列宽 = (容器宽 − 间距×",Number(e.cfg.columns)-1,") ÷ ",Number(e.cfg.columns)," · 当前 ",d.jsx("b",{children:e.meter.columns})," 列 / 总高 ",d.jsx("b",{children:Math.round(e.meter.totalHeight)}),"px"]})}),Iv=Object.freeze(Object.defineProperty({__proto__:null,default:Mv,meta:$v},Symbol.toStringTag,{value:"Module"})),Nv={slug:"gap",title:"自定义间距",group:"basic",intro:"gap 是简写，rowGap / columnGap 分别覆盖它 —— 用开关切一次就记住了。",why:"图片流要更紧的列间距、更松的行间距，就得拆开写；只想整体松紧就用 gap。",plugs:[],props:["columns={3}",{text:"gap={{{gap}}}",when:e=>!e.split},{text:"rowGap={{{rowGap}}}",when:e=>!!e.split},{text:"columnGap={{{columnGap}}}",when:e=>!!e.split},"containerStyle={{ height: 420 }}"],note:"间距参与布局计算：改 gap 会改变列宽与每列落点，不是 CSS margin。三个同时给的时候 gap 只是「没被覆盖的那部分」的兜底。想让间距随窗口换档用 GapPlugin（下一页）。",controls:[{key:"split",label:"拆开行/列间距",kind:"switch",init:!0,hint:"关掉 → 只留 gap，它立刻生效"},{key:"gap",label:"gap（简写）",kind:"number",init:8,min:0,max:32,when:e=>!e.split},{key:"rowGap",label:"rowGap",kind:"number",init:24,min:0,max:40,when:e=>!!e.split},{key:"columnGap",label:"columnGap",kind:"number",init:8,min:0,max:40,when:e=>!!e.split}]},Ev=q({count:30,seed:1501,plugins:()=>[],coreProps:e=>({columns:3,...e.cfg.split?{rowGap:Number(e.cfg.rowGap),columnGap:Number(e.cfg.columnGap)}:{gap:Number(e.cfg.gap)}}),chrome:e=>d.jsx("p",{className:"stage-tip",children:e.cfg.split?d.jsxs(d.Fragment,{children:["rowGap ",d.jsx("b",{children:Number(e.cfg.rowGap)})," · columnGap ",d.jsx("b",{children:Number(e.cfg.columnGap)})," ——",d.jsx("b",{children:" gap 被覆盖，此刻是空转的"})]}):d.jsxs(d.Fragment,{children:["gap ",d.jsx("b",{children:Number(e.cfg.gap)})," —— 行列同值，因为没给 rowGap / columnGap"]})})}),jv=Object.freeze(Object.defineProperty({__proto__:null,default:Ev,meta:Nv},Symbol.toStringTag,{value:"Module"})),Lv={slug:"ref",title:"Ref 方法调用",group:"advanced",intro:"13 个 ref 方法逐个点一遍，返回值直接写进日志。",why:"图片加载完要重排、点导航要跳到某条、滚动位置要复位 —— 这些都不该改数据，而是调 ref。",plugs:[],props:["ref={ref}","columns={3}","containerStyle={{ height: 420 }}","onItemClick={(i) => ref.current?.scrollToItem(i)}"],note:"getAllItemPositions 返回的是实时 Map，不是渲染快照；虚拟化开启后，未挂载项仍保留测量值（getItemElement 会返回 null）。"},Ov=[{key:"relayout",label:"relayout()",run:e=>{var n;return(n=e.ref.current)==null||n.relayout(),"清空高度缓存并重排"}},{key:"top",label:"scrollToTop()",run:e=>{var n;return(n=e.ref.current)==null||n.scrollToTop({behavior:"smooth"}),"回顶"}},{key:"bottom",label:"scrollToBottom()",run:e=>{var n;return(n=e.ref.current)==null||n.scrollToBottom({behavior:"smooth"}),"到底"}},{key:"item",label:"scrollToItem(i)",needsIndex:!0,run:()=>"见下方输入框"},{key:"pos",label:"getItemPosition(i)",needsIndex:!0,run:()=>"见下方输入框"},{key:"allpos",label:"getAllItemPositions()",run:e=>{var r;const n=(r=e.ref.current)==null?void 0:r.getAllItemPositions();if(!n)return"ref 还没就绪";const t=n.get(0);return`共 ${n.size} 项；#0 = { x: ${(t==null?void 0:t.x)??"-"}, y: ${(t==null?void 0:t.y)??"-"} }`}},{key:"colh",label:"getColumnHeights()",run:e=>{var t;return`[${(((t=e.ref.current)==null?void 0:t.getColumnHeights())??[]).map(r=>Math.round(r)).join(", ")}]`}},{key:"layout",label:"getLayoutInfo()",run:e=>{var t;const n=(t=e.ref.current)==null?void 0:t.getLayoutInfo();return n?`${n.columns} 列 · 列宽 ${Math.round(n.columnWidth)} · 总高 ${Math.round(n.totalHeight)}`:"ref 还没就绪"}},{key:"viewport",label:"getViewportInfo()",run:e=>{var t;const n=(t=e.ref.current)==null?void 0:t.getViewportInfo();return n?`scrollTop ${Math.round(n.scrollTop)} · 视口 ${n.clientHeight} · 内容 ${Math.round(n.scrollHeight)}`:"ref 还没就绪"}},{key:"range",label:"getVisibleRange()",run:e=>{var t;const n=(t=e.ref.current)==null?void 0:t.getVisibleRange();return n?`渲染区间 ${n.start} … ${n.end}`:"ref 还没就绪"}},{key:"force",label:"forceUpdate()",run:e=>{var n;return(n=e.ref.current)==null||n.forceUpdate(),"强制重渲染"}},{key:"el",label:"getItemElement(0)",run:e=>{var t;const n=(t=e.ref.current)==null?void 0:t.getItemElement(0);return n?`<div data-index="0"> ${n.offsetWidth}×${n.offsetHeight}`:"取不到（可能未挂载）"}},{key:"measure",label:"measureItem(0)",run:async e=>{var t;const n=await((t=e.ref.current)==null?void 0:t.measureItem(0));return n?`{ width: ${Math.round(n.width)}, height: ${Math.round(n.height)} }`:"量不到"}},{key:"container",label:"getContainer()",run:e=>{var t;const n=(t=e.ref.current)==null?void 0:t.getContainer();return n?`容器 ${n.clientWidth}×${n.clientHeight}，scrollHeight ${n.scrollHeight}`:"ref 还没就绪"}}];function Dv({api:e}){const[n,t]=y.useState([]),[r,o]=y.useState(5),i=y.useCallback((s,a="event")=>{const u=new Date().toLocaleTimeString("zh-CN",{hour12:!1});t(p=>[{id:p.length+1,at:u,text:s,kind:a},...p].slice(0,30))},[]),l=y.useCallback(async s=>{const a=e.ref.current;if(!a){i("ref.current 为空 —— 舞台还没挂载","warn");return}if(s.needsIndex){if(s.key==="item")a.scrollToItem(r,{behavior:"smooth",block:"start"}),i(`scrollToItem(${r}, { block: "start" })`);else{const u=a.getItemPosition(r);i(u?`getItemPosition(${r}) = { x: ${Math.round(u.x)}, y: ${Math.round(u.y)}, w: ${Math.round(u.width)}, h: ${Math.round(u.height)} }`:`getItemPosition(${r}) = null`)}return}i(`${s.label} → ${await s.run(e)}`)},[e,r,i]);return d.jsxs("div",{className:"console",children:[d.jsxs("div",{className:"console-head",children:[d.jsx("span",{children:"Ref 控制台"}),d.jsxs("label",{className:"console-idx",children:["index",d.jsx("input",{type:"number",min:0,max:e.items.length-1,value:r,onChange:s=>o(Number(s.target.value))})]})]}),d.jsx("div",{className:"console-grid",children:Ov.map(s=>d.jsx("button",{type:"button",className:"console-btn",onClick:()=>void l(s),children:s.label},s.key))}),d.jsx(em,{lines:n,title:"调用记录",empty:"点上面任意一个方法"})]})}const zv=q({count:36,seed:1701,instrument:!0,plugins:()=>[],coreProps:e=>({columns:3,onItemClick:n=>e.log(`onItemClick #${n}（Core 的项点击回调）`)}),chrome:e=>d.jsx(Dv,{api:e})}),Wv=Object.freeze(Object.defineProperty({__proto__:null,default:zv,meta:Lv},Symbol.toStringTag,{value:"Module"})),Av={slug:"lifecycle",title:"生命周期和事件",group:"advanced",intro:"13 个回调接满，滚一下就能看见谁在什么时候触发。",why:"要在「布局完成」后做点什么（补曝光统计、量真实高度、写埋点），就得知道 onLayout 与 onLayoutComplete 的差别：后者里读 layout 才是新的。",plugs:[],props:["onMount={() => log('onMount')}","onLayoutComplete={() => log('布局完成')}","onScroll={(t) => log('scroll ' + t)}","onItemEnterViewport={(i) => log('enter #' + i)}","onReachBottom={() => log('到底了')}"],note:"onUnmount 只在组件卸载时触发（换页时能在浏览器控制台看到）。视口事件按「可见比例」算，部分可见也会触发一次 enter。"},Hv=q({count:40,seed:1901,instrument:!0,plugins:()=>[],coreProps:e=>{const{log:n}=e;let t=0,r=0;return{columns:3,onMount:()=>n("onMount · 容器挂载"),onBeforeLayout:()=>(n("onBeforeLayout · 返回 false 会中断本次布局","info"),!0),onLayout:()=>n("onLayout · 开始算位置","info"),onLayoutComplete:()=>n("onLayoutComplete · 位置已写入，现在读 layout 是新的"),onItemMount:o=>{o<3&&n(`onItemMount #${o}`,"info")},onItemUnmount:o=>{o<3&&n(`onItemUnmount #${o}`,"info")},onItemEnterViewport:(o,i)=>{r+=1,r<40&&n(`onItemEnterViewport #${o} 可见 ${i.visibleRatio*100|0}%`)},onItemLeaveViewport:o=>{r<40&&n(`onItemLeaveViewport #${o}`,"info")},onScroll:o=>{const i=performance.now();i-t<400||(t=i,n(`onScroll ${Math.round(o)}`,"info"))},onResize:(o,i)=>n(`onResize ${o}×${i}`),onReachBottom:o=>n(`onReachBottom 距底 ${Math.round(o)}px`),onItemClick:o=>n(`onItemClick #${o}（点卡片试试）`)}},chrome:()=>d.jsx("p",{className:"stage-tip",children:"滚动、点卡片、拖窗口宽度 —— 三种行为分别触发滚动、点击、尺寸三类事件"})}),Fv=Object.freeze(Object.defineProperty({__proto__:null,default:Hv,meta:Av},Symbol.toStringTag,{value:"Module"})),Bv={slug:"advanced",title:"高级配置",group:"advanced",intro:"padding、useTransform、alignmentMode、节流防抖、debug —— 一页调完。",why:"嵌在带内边距的容器里（padding 要参与布局，不能靠外层 margin）、要给每一项套自定义样式（itemClassName）、或怀疑布局算错要看耗时（debug）时用。",plugs:[],props:["columns={3}","padding={{{padding}}}",'alignmentMode="{{{mode}}}"',"useTransform={{{useTransform}}}","throttleDelay={{{throttle}}}","debounceDelay={{{debounce}}}","debug={{{debug}}}","containerStyle={{ height: 420 }}"],note:"padding 是参与布局计算的（可用宽度 = 容器宽 − 左右 padding），所以它不能当成外层 margin 用。useTransform=false 时项改用 top/left 定位，打印和读 offsetLeft 更直观。",controls:[{key:"padding",label:"padding",kind:"number",init:12,min:0,max:40},{key:"mode",label:"alignmentMode",kind:"select",init:"shortest",options:[{label:"shortest 最矮列",value:"shortest"},{label:"balanced 最少项",value:"balanced"},{label:"sequential 轮转",value:"sequential"}],hint:"balanced 列高会不齐，但每列张数接近"},{key:"useTransform",label:"useTransform",kind:"switch",init:!0},{key:"throttle",label:"throttleDelay",kind:"number",init:16,min:0,max:120,step:8,nonLayout:!0},{key:"debounce",label:"debounceDelay",kind:"number",init:150,min:0,max:600,step:10,nonLayout:!0},{key:"debug",label:"debug",kind:"switch",init:!1,hint:"控制台打印布局耗时"}]},Uv=q({count:34,seed:2101,plugins:()=>[],instrument:!0,coreProps:e=>({columns:3,padding:Number(e.cfg.padding),alignmentMode:String(e.cfg.mode),useTransform:!!e.cfg.useTransform,throttleDelay:Number(e.cfg.throttle),debounceDelay:Number(e.cfg.debounce),debug:!!e.cfg.debug}),chrome:e=>d.jsxs("p",{className:"stage-tip",children:["定位方式：",d.jsx("b",{children:e.cfg.useTransform?"transform":"top / left"})," · 内边距"," ",d.jsx("b",{children:Number(e.cfg.padding)})," · 列数 ",d.jsx("b",{children:e.meter.columns})," · 总高"," ",d.jsx("b",{children:Math.round(e.meter.totalHeight)}),"px"]})}),Gv=Object.freeze(Object.defineProperty({__proto__:null,default:Uv,meta:Bv},Symbol.toStringTag,{value:"Module"}));function Vv(e){return{name:"AlignmentPlugin",priority:60,enabled:!0,hooks:{transformProps:n=>({...n,alignmentMode:e.mode}),onResize:n=>{var t;(t=n.relayout)==null||t.call(n)}}}}const Kv="AlignmentPlugin",Qv="设置瀑布流的列分配策略。shortest 让每列尽量等高（视觉最自然），balanced 让每列项数接近，sequential 按 index 轮转（可预测位置，适合需要与外部索引对齐的场景）。",Yv="2.0.0",qv=["layout","布局"],Xv=[{name:"onResize",when:"容器宽度变化触发重排前",description:"按新宽度调整列数或卡片密度"},{name:"transformProps",when:"渲染前链式改写瀑布流 props",description:"补 gap / columns 默认值、按断点覆盖配置"}],Jv=[],Zv="只读取 context 字段（props / state / data），不调用上下文方法",e0=[{name:"mode",type:'"shortest" | "balanced" | "sequential"',default:"shortest",description:"列分配策略"}],n0=`// 指定列分配策略：最矮列优先（shortest）/ 项数均衡（balanced）/ 顺序轮转（sequential）。
const Waterfall = withPlugins(WaterfallCore, [
  createAlignmentPlugin({
    mode: "shortest",
  }),
]);

<Waterfall items={items} renderItem={(item) => <Card data={item} />} />;`,t0=["三种列分配策略","只改 props.alignmentMode，不影响其他配置","与 ResponsiveColumns / AutoColumn 正交"],r0=["内容流：默认 shortest","等长卡片：balanced 更整齐","需要与后端顺序对齐：sequential"],o0=["balanced 与 shortest 在列高相同时都取最左列，视觉上左偏是预期行为。"],nm={name:Kv,description:Qv,since:Yv,tags:qv,events:Xv,methods:Jv,methodsNote:Zv,config:e0,example:n0,features:t0,useCases:r0,notes:o0},tm=Object.assign(Vv,{meta:nm});function i0(e){if(!(e.minColumnWidth>0))throw new Error("[vane-waterfall] AutoColumnPlugin 需要正数的 minColumnWidth");return{name:"AutoColumnPlugin",priority:55,enabled:!0,hooks:{calculateColumns:(n,t)=>{const r=n.props,o=r.columnGap??r.gap??0,i=r.padding,l=typeof i=="number"?i*2:((i==null?void 0:i.left)??0)+((i==null?void 0:i.right)??0),s=Math.max(0,t-l);if(!s)return r.columns??1;const a=Math.max(1,Math.floor((s+o)/(e.minColumnWidth+o))),u=Math.max(1,e.minColumns??1),p=e.maxColumns??Number.POSITIVE_INFINITY;return Math.min(Math.max(a,u),p)}}}}const l0="AutoColumnPlugin",s0="按「容器可用宽度 ÷ 最小列宽」自动决定列数，取代写死 3 列。走 D1-A 布局钩子（calculateColumns），拿到的是真实容器宽度，不是 window.innerWidth。",a0="2.0.0",u0=["layout","layout-hook","响应式"],c0=[{name:"calculateColumns",when:"每次布局前，询问列数",description:"返回列数则覆盖 props.columns；返回 undefined 沿用配置"}],d0=[],p0="只读取 context 字段（props / state / data），不调用上下文方法",m0=[{name:"minColumnWidth",type:"number",default:"—",description:"每列最小宽度 px（必填）"},{name:"maxColumns",type:"number",default:"Infinity",description:"列数上限"},{name:"minColumns",type:"number",default:"1",description:"列数下限"}],f0=`// 按容器宽与最小列宽自动算列数，窄屏自动降列。
const Waterfall = withPlugins(WaterfallCore, [
  createAutoColumnPlugin({
    maxColumns: "Infinity",
    minColumns: 1,
  }),
]);

<Waterfall items={items} renderItem={(item) => <Card data={item} />} />;`,g0=["ResponsiveColumnsPlugin"],h0=["按容器宽度（不是视口宽度）算列数","列数上下限可夹","与 Gap / Padding 一起算，留白不吞列宽"],y0=["响应式信息流","侧边栏宽度可拖动的后台看板","移动端 → 桌面端同一套代码"],v0=["与 ResponsiveColumnsPlugin 同时装会互相覆盖列数，只选一个。"],rm={name:l0,description:s0,since:a0,tags:u0,events:c0,methods:d0,methodsNote:p0,config:m0,example:f0,conflicts:g0,features:h0,useCases:y0,notes:v0},om=Object.assign(i0,{meta:rm});function x0(e){const n=Object.values(e.breakpoints).sort((t,r)=>t.width-r.width);return{name:"ResponsiveColumnsPlugin",priority:55,enabled:!0,hooks:{calculateColumns:(t,r)=>{const o=e.fallbackColumns??t.props.columns??3;if(!r)return o;let i=o;for(const l of n)r>=l.width&&(i=l.columns);return i}}}}const w0="ResponsiveColumnsPlugin",P0="用一张断点表控制列数，命中哪档用哪档。走 D1-A 布局钩子（calculateColumns），按容器宽度匹配断点。",k0="2.0.0",S0=["layout","layout-hook","响应式"],b0=[{name:"calculateColumns",when:"每次布局前，询问列数",description:"返回列数则覆盖 props.columns；返回 undefined 沿用配置"}],C0=[],_0="只读取 context 字段（props / state / data），不调用上下文方法",T0=[{name:"breakpoints",type:"Record<string, { width: number; columns: number }>",default:"—",description:"断点表，按 width 升序匹配"}],R0=`// 按断点表决定列数（如 640 → 2 列、1024 → 3 列、1440 → 4 列）。
const Waterfall = withPlugins(WaterfallCore, [
  createResponsiveColumnsPlugin(),
]);

<Waterfall items={items} renderItem={(item) => <Card data={item} />} />;`,$0=["AutoColumnPlugin"],M0=["断点表驱动，设计稿几档就写几档","按容器宽度而非视口宽度匹配","未命中任何断点时回退到 props.columns"],I0=["严格对齐设计断点的站点","同一个组件嵌在不同宽度的容器里"],N0=["与 AutoColumnPlugin 互斥。"],im={name:w0,description:P0,since:k0,tags:S0,events:b0,methods:C0,methodsNote:_0,config:T0,example:R0,conflicts:$0,features:M0,useCases:I0,notes:N0},lm=Object.assign(x0,{meta:im});function mc(e,n){const t=e.responsive||{};return n>=1200&&t.xl?t.xl:n>=992&&t.lg?t.lg:n>=768&&t.md?t.md:n<768&&t.sm?t.sm:{}}function E0(e){let n=0,t="";const r=o=>{var a,u,p;const i=((u=(a=o.containerRef)==null?void 0:a.current)==null?void 0:u.clientWidth)??0;if(i<=0)return;const l=n;n=i;const s=JSON.stringify(mc(e,i));l>0&&s!==t&&((p=o.bus)==null||p.emit("props:invalidate")),t=s};return{name:"GapPlugin",priority:50,enabled:!0,hooks:{transformProps:o=>{const i=n>0?n:typeof window<"u"?window.innerWidth:1024,l={columnGap:e.columnGap,rowGap:e.rowGap},s=mc(e,i),a={columnGap:s.columnGap??l.columnGap??o.columnGap,rowGap:s.rowGap??l.rowGap??o.rowGap};return{...o,...a}},onMount:o=>{r(o)},onResize:o=>{r(o)}}}}const j0="GapPlugin",L0="把 rowGap / columnGap 收敛到一处配置，并支持按窗口宽度切换间距（窄屏 8px、宽屏 16px 这类）。",O0="2.0.0",D0=["layout","间距"],z0=[{name:"onMount",when:"瀑布流挂载完成",description:"初始化观察器与滚动监听，返回清理函数"},{name:"onResize",when:"容器宽度变化触发重排前",description:"按新宽度调整列数或卡片密度"},{name:"transformProps",when:"渲染前链式改写瀑布流 props",description:"补 gap / columns 默认值、按断点覆盖配置"},{name:"props:invalidate",when:"内部布局参数变更需要重排时",description:"通知宿主刷新 props 触发重新布局"}],W0=[],A0="只读取 context 字段（props / state / data），不调用上下文方法",H0=[{name:"columnGap",type:"number",default:"props.columnGap",description:"列间距 px"},{name:"rowGap",type:"number",default:"props.rowGap",description:"行间距 px"},{name:"responsive",type:"{ sm?, md?, lg?, xl? }",default:"—",description:"断点覆盖（按 window 宽度）"}],F0=`// 统一控制行/列间距，支持按断点给不同间距。
const Waterfall = withPlugins(WaterfallCore, [
  createGapPlugin(),
]);

<Waterfall items={items} renderItem={(item) => <Card data={item} />} />;`,B0=["行列间距一处配置","断点覆盖（sm/md/lg/xl）","不填则回退到 props"],U0=["设计规范里间距随断点变化","同一组件在不同页面用不同密度"],G0=["断点判断用的是 window.innerWidth（间距通常跟视口走，与列数按容器算不一样）。","断点是「命中即覆盖」：桌面窗口 ≥1200 又配了 responsive.lg，那就一直是 lg 的值，config.columnGap/rowGap 在这档不起作用；想让手写值生效就别给该档位配 responsive。","sm 只在小屏（<768）生效，不会被当成兜底档套到桌面端。"],sm={name:j0,description:L0,since:O0,tags:D0,events:z0,methods:W0,methodsNote:A0,config:H0,example:F0,features:B0,useCases:U0,notes:G0},am=Object.assign(E0,{meta:sm});function V0(e){return{name:"FixedHeightPlugin",priority:45,enabled:!0,hooks:{transformProps:n=>{const{itemHeight:t}=e,r=(n.items||[]).map(o=>typeof o=="object"&&o!==null&&"height"in o?{...o,height:t}:o);return{...n,items:r}},onResize:n=>{var t;(t=n.relayout)==null||t.call(n)}}}}const K0="FixedHeightPlugin",Q0="把数据里带 height 字段的项统一改写为固定高度，瀑布流变成等高网格。适合「图少字多」的卡片流——等高反而更好扫读。",Y0="2.0.0",q0=["layout","网格"],X0=[{name:"onResize",when:"容器宽度变化触发重排前",description:"按新宽度调整列数或卡片密度"},{name:"transformProps",when:"渲染前链式改写瀑布流 props",description:"补 gap / columns 默认值、按断点覆盖配置"}],J0=[],Z0="只读取 context 字段（props / state / data），不调用上下文方法",ex=[{name:"itemHeight",type:"number",default:"—",description:"统一项高 px（必填）"}],nx=`// 把项高度统一成固定值，瀑布流退化为等高网格。
const Waterfall = withPlugins(WaterfallCore, [
  createFixedHeightPlugin(),
]);

<Waterfall items={items} renderItem={(item) => <Card data={item} />} />;`,tx=["等高网格（严格对齐）","只改数据里已有的 height 字段","与 Pagination / Filter 组合仍然成立"],rx=["商品列表（图固定比例）","后台看板卡片","需要严格栅格对齐的页面"],ox=["数据里没有 height 字段时不会生效——高度由 renderItem 自己的内容决定。"],um={name:K0,description:Q0,since:Y0,tags:q0,events:X0,methods:J0,methodsNote:Z0,config:ex,example:nx,features:tx,useCases:rx,notes:ox},cm=Object.assign(V0,{meta:um});function ix(e){const n=new Set(e.pinnedIndices),t=Math.max(0,e.column??0),r=new Map;return{name:"PinItemPlugin",priority:100,enabled:!0,hooks:{onBeforeLayout:()=>(r.clear(),!0),calculateItemPosition:(o,i,l,s)=>{const a=o.props.rowGap??o.props.gap??0;if(!n.has(i)){const p=r.get(s.column);return p!==void 0&&s.y<p?{y:p}:void 0}const u=r.get(t)??0;return r.set(t,u+l+a),{column:t,y:u,width:s.width,height:l,row:0}}}}}const lx="PinItemPlugin",sx="把若干索引的项钉在顶部指定列，其余项从它们下方继续排。走 D1-A 布局钩子（calculateItemPosition），是旧版宣称但从未生效的能力。",ax="2.0.0",ux=["layout","layout-hook","置顶"],cx=[{name:"onBeforeLayout",when:"开始一次布局之前",description:"返回 false 可阻止本次布局（如数据仍在加载）"},{name:"calculateItemPosition",when:"每个卡片参与布局时（拿到 index / item / columns）",description:"返回坐标片段可覆盖列分配结果（置顶、跨列、错位）"}],dx=[],px="只读取 context 字段（props / state / data），不调用上下文方法",mx=[{name:"pinnedIndices",type:"number[]",default:"[]",description:"要钉住的项索引"},{name:"column",type:"number",default:"0",description:"钉到第几列"}],fx=`// 把指定索引的项钉在顶部同一列，不参与常规列高推进（广告位 / 公告卡）。
const Waterfall = withPlugins(WaterfallCore, [
  createPinItemPlugin({
    pinnedIndices: [],
    column: 0,
  }),
]);

<Waterfall items={items} renderItem={(item) => <Card data={item} />} />;`,gx=["置顶项不占常规列高：后续项从置顶块下方开始","支持多列分别置顶（column 可不同）","每次布局前重置偏移，items 变化后不会累加错位"],hx=["信息流首位的推广卡","公告 / 置顶帖","需要固定在左上角的活动位"],yx=["置顶项之间按 pinnedIndices 顺序纵向堆叠，同一列多条会依次往下排。","置顶会挤掉该列的正常网格位置，pinnedIndices 建议控制在 1~2 条。","换列后的 x 由布局引擎按本轮列宽补齐，插件只返回 column 即可 —— 自己用「列宽 + 间距」反推 x 会在间距由其它插件（GapPlugin）注入时算错。"],dm={name:lx,description:sx,since:ax,tags:ux,events:cx,methods:dx,methodsNote:px,config:mx,example:fx,features:gx,useCases:hx,notes:yx},pm=Object.assign(ix,{meta:dm});function vx(e){return{name:"ThrottlePlugin",priority:80,enabled:!0,hooks:{transformProps:n=>({...n,throttleDelay:e.scroll,debounceDelay:e.resize??n.debounceDelay})}}}const xx="ThrottlePlugin",wx="接管 Core 的 throttleDelay（滚动回调节流）与 debounceDelay（尺寸变化后多久重排）。默认 16ms / 150ms，长列表滚动卡顿时可以放宽到 32 / 300。",Px="2.0.0",kx=["perf","性能"],Sx=[{name:"transformProps",when:"渲染前链式改写瀑布流 props",description:"补 gap / columns 默认值、按断点覆盖配置"}],bx=[],Cx="只读取 context 字段（props / state / data），不调用上下文方法",_x=[{name:"scroll",type:"number",default:"—",description:"滚动节流 ms（必填）"},{name:"resize",type:"number",default:"props.debounceDelay",description:"布局防抖 ms"}],Tx=`// 调整滚动节流与尺寸防抖，弱网/低端机可放宽。
const Waterfall = withPlugins(WaterfallCore, [
  createThrottlePlugin(),
]);

<Waterfall items={items} renderItem={(item) => <Card data={item} />} />;`,Rx=["滚动节流与布局防抖分开调","只改 props，不改算法","与 DebounceLayoutPlugin 叠加时后者优先"],$x=["低端安卓机长列表","滚动时 CPU 占用过高","拖拽侧栏时减少重排"],Mx=["scroll 低于 16ms 没有意义（浏览器帧率上限）。"],mm={name:xx,description:wx,since:Px,tags:kx,events:Sx,methods:bx,methodsNote:Cx,config:_x,example:Tx,features:Rx,useCases:$x,notes:Mx},fm=Object.assign(vx,{meta:mm});function Ix(e){return{name:"DebounceLayoutPlugin",priority:75,enabled:!0,hooks:{transformProps:n=>({...n,debounceDelay:e.delay})}}}const Nx="DebounceLayoutPlugin",Ex="只调 debounceDelay：容器宽度连续变化（抽屉展开、分栏拖拽）时，等变化停下来再算一次布局，避免每帧重排。",jx="2.0.0",Lx=["perf","性能"],Ox=[{name:"transformProps",when:"渲染前链式改写瀑布流 props",description:"补 gap / columns 默认值、按断点覆盖配置"}],Dx=[],zx="只读取 context 字段（props / state / data），不调用上下文方法",Wx=[{name:"delay",type:"number",default:"—",description:"布局防抖 ms（必填）"}],Ax=`// 单独放大布局防抖，容器频繁变宽时（抽屉/侧栏动画）不抖。
const Waterfall = withPlugins(WaterfallCore, [
  createDebounceLayoutPlugin(),
]);

<Waterfall items={items} renderItem={(item) => <Card data={item} />} />;`,Hx=["只影响布局时机，不影响渲染","可被 ThrottlePlugin 覆盖","对移动端软键盘弹出也有效"],Fx=["可折叠侧栏","分栏宽度拖拽","横竖屏切换"],Bx=["delay 过大会让「展开后布局」明显滞后，建议 120–250ms。"],gm={name:Nx,description:Ex,since:jx,tags:Lx,events:Ox,methods:Dx,methodsNote:zx,config:Wx,example:Ax,features:Hx,useCases:Fx,notes:Bx},hm=Object.assign(Ix,{meta:gm}),Ux="(prefers-reduced-motion: reduce)";function Gx(e={}){var p;const n=typeof window<"u"&&typeof window.matchMedia=="function"?window.matchMedia(Ux):null;let t=(n==null?void 0:n.matches)??!1;const r=e.disableTransform??!0,o=e.removeTransitions??!0,i=new Map,l=new Map,s=c=>{if(!(!c||!o))if(t){const m=c.style.transitionDuration;m&&m!=="0s"?l.set(c,m):l.has(c)||l.set(c,m),c.style.setProperty("transition-duration","0s")}else{const m=l.get(c);if(m===void 0)return;m?c.style.setProperty("transition-duration",m):c.style.removeProperty("transition-duration"),l.delete(c)}},a=()=>i.forEach(c=>s(c)),u=c=>{c.matches!==t&&(t=c.matches,a())};return(p=n==null?void 0:n.addEventListener)==null||p.call(n,"change",u),{name:"ReducedMotionPlugin",priority:70,enabled:!0,hooks:{transformProps:c=>{if(!t)return c;const m={...c};return r&&(m.useTransform=!1),o&&(m.itemStyle={...c.itemStyle??{},transitionDuration:"0s"}),m},onItemMount:(c,m,g)=>{i.set(m,g),s(g)},onItemUnmount:(c,m)=>{i.delete(m)},onLayoutComplete:c=>{c.itemRefs.forEach((m,g)=>{m&&i.set(g,m),s(m)})},onUnmount:()=>{var c;(c=n==null?void 0:n.removeEventListener)==null||c.call(n,"change",u),i.clear(),l.clear()}}}}const Vx="ReducedMotionPlugin",Kx="检测 `prefers-reduced-motion: reduce`，命中后把 useTransform 关掉并清掉项上的 transition。前庭功能敏感用户不会因为滚动时的位置微动而不适。",Qx="2.0.0",Yx=["perf","a11y"],qx=[{name:"onUnmount",when:"瀑布流卸载前",description:"断开观察器、移除滚动监听"},{name:"onItemMount",when:"单个卡片挂载并拿到 DOM 元素时",description:"按卡片绑定监听、观察器、埋点"},{name:"onItemUnmount",when:"单个卡片卸载时",description:"解绑该卡片的监听与观察器"},{name:"onLayoutComplete",when:"DOM 落位完成（可安全测量）",description:"测量真实高度、懒加载判定、曝光上报"},{name:"transformProps",when:"渲染前链式改写瀑布流 props",description:"补 gap / columns 默认值、按断点覆盖配置"}],Xx=[],Jx="只读取 context 字段（props / state / data），不调用上下文方法",Zx=[{name:"disableTransform",type:"boolean",default:"true",description:"命中偏好时改用 left/top 定位"},{name:"removeTransitions",type:"boolean",default:"true",description:"命中偏好时清掉项过渡"}],ew=`// 尊重系统「减少动画」偏好：关掉 transform 定位与项过渡。
const Waterfall = withPlugins(WaterfallCore, [
  createReducedMotionPlugin({
    disableTransform: true,
    removeTransitions: true,
  }),
]);

<Waterfall items={items} renderItem={(item) => <Card data={item} />} />;`,nw=["系统偏好驱动，零配置生效","两项能力可分别关闭","与 TransitionPlugin 同装时优先生效"],tw=["政务 / 医疗类站点","无障碍合规要求","低性能设备"],rw=["偏好由 matchMedia 驱动，并监听 change：运行中改系统设置即时生效（定位方式要等下一次重渲染才切过来）。","只压 `transition-duration`，不写 `transition: none` —— 写简写会把 TransitionPlugin 的过渡整条覆盖，撤销偏好后无从还原。","与 TransitionPlugin 同装不是冲突：ReducedMotion 优先级更高，会先执行并压住过渡。"],ym={name:Vx,description:Kx,since:Qx,tags:Yx,events:qx,methods:Xx,methodsNote:Jx,config:Zx,example:ew,features:nw,useCases:tw,notes:rw},vm=Object.assign(Gx,{meta:ym});function ow(e={}){const n=e.duration??300,t=e.easing??"ease";return{name:"TransitionPlugin",priority:65,enabled:!0,hooks:{onItemMount:(r,o,i)=>{i.style.transition=`transform ${n}ms ${t}, opacity ${n}ms ${t}`},onLayout:r=>{r.itemRefs.forEach(o=>{o&&(o.style.transition=`transform ${n}ms ${t}, opacity ${n}ms ${t}`)})}}}}const iw="TransitionPlugin",lw="给每个项挂上 transform + opacity 的 CSS 过渡，布局重排、分页切换、筛选后重新排列时位置变化是滑过去的，不是瞬移。",sw="2.0.0",aw=["perf","动效"],uw=[{name:"onItemMount",when:"单个卡片挂载并拿到 DOM 元素时",description:"按卡片绑定监听、观察器、埋点"},{name:"onLayout",when:"布局计算完成、结果已确定",description:"读取每列高度、做二次修正或上报"}],cw=[],dw="只读取 context 字段（props / state / data），不调用上下文方法",pw=[{name:"duration",type:"number",default:"300",description:"过渡时长 ms"},{name:"easing",type:"string",default:"ease",description:"缓动函数"}],mw=`// 布局变化时给项加 transform/opacity 过渡，插入新数据不「闪现」。
const Waterfall = withPlugins(WaterfallCore, [
  createTransitionPlugin({
    duration: 300,
    easing: "ease",
  }),
]);

<Waterfall items={items} renderItem={(item) => <Card data={item} />} />;`,fw=["ReducedMotionPlugin"],gw=["项位置变化平滑过渡","挂载时即生效（onItemMount）","与 ReducedMotionPlugin 互斥"],hw=["筛选 / 排序后重排","分页切换","动态插入卡片"],yw=["首屏大量项同时过渡会有一次「整体滑入」，想要更克制可以把 duration 降到 150ms。"],xm={name:iw,description:lw,since:sw,tags:aw,events:uw,methods:cw,methodsNote:dw,config:pw,example:mw,conflicts:fw,features:gw,useCases:hw,notes:yw},xa=Object.assign(ow,{meta:xm});function vw(e={}){return{name:"FilterPlugin",priority:40,enabled:!0,hooks:{transformProps:n=>{const t=Array.isArray(n.items)?n.items:[],r=n.filterFn||e.predicate;if(typeof r!="function")return n;const o=t.filter((i,l)=>{try{return!!r(i,l)}catch{return!0}});return{...n,items:o}},onPropsChange:(n,t,r)=>{var a;const o=t.filterFn,i=r.filterFn;if(((typeof r.scrollToTopOnFilterChange=="boolean"?r.scrollToTopOnFilterChange:void 0)??!!e.scrollToTop)&&o!==i){const u=r.scrollToTopBehavior??e.scrollBehavior??"auto";(a=n.scrollToTop)==null||a.call(n,{behavior:u})}}}}}const xw="FilterPlugin",ww="用谓词函数过滤数据，优先读 `props.filterFn`，没有就用工厂里传入的 predicate。过滤条件变了可以自动滚回顶部（默认不开）。",Pw="2.0.0",kw=["data","数据管线"],Sw=[{name:"onPropsChange",when:"props 变化后",description:"数据或配置变化时请求重排"},{name:"transformProps",when:"渲染前链式改写瀑布流 props",description:"补 gap / columns 默认值、按断点覆盖配置"}],bw=[],Cw="只读取 context 字段（props / state / data），不调用上下文方法",_w=[{name:"predicate",type:"(item, index) => boolean",default:"—",description:"默认谓词，可被 props.filterFn 覆盖"},{name:"scrollToTop",type:"boolean",default:"false",description:"条件变化后回顶"},{name:"scrollBehavior",type:'"auto" | "smooth"',default:'"auto"',description:"回顶行为"}],Tw=`// 按谓词过滤 items，参数变化可自动回顶。
const Waterfall = withPlugins(WaterfallCore, [
  createFilterPlugin({
    scrollToTop: false,
    scrollBehavior: "auto",
  }),
]);

<Waterfall items={items} renderItem={(item) => <Card data={item} />} />;`,Rw=["谓词抛错时按「保留」处理，不会整表消失","props.filterFn 优先，便于页面动态换过滤条件","可与 Sort / Search / Pagination 串联"],$w=["分类 Tab 切换","只看有货 / 只看促销","价格区间筛选"],Mw=["数据管线的执行顺序由 priority 决定：Filter(40) → Sort(30) → Search(20) → Pagination(10)。","先过滤再分页，页码总数才是过滤后的总数——顺序反了会出现「第 2 页空」。"],wm={name:xw,description:ww,since:Pw,tags:kw,events:Sw,methods:bw,methodsNote:Cw,config:_w,example:Tw,features:Rw,useCases:$w,notes:Mw},Pm=Object.assign(vw,{meta:wm});function Iw(e={}){return{name:"SortPlugin",priority:30,enabled:!0,hooks:{transformProps:n=>{const t=Array.isArray(n.items)?n.items:[],r=n.sortComparator||e.comparator;if(typeof r!="function")return n;const o=[...t].sort((i,l)=>{try{return r(i,l)}catch{return 0}});return{...n,items:o}},onPropsChange:(n,t,r)=>{var a;const o=t.sortComparator,i=r.sortComparator;if(((typeof r.scrollToTopOnSortChange=="boolean"?r.scrollToTopOnSortChange:void 0)??!!e.scrollToTop)&&o!==i){const u=r.scrollToTopBehavior??e.scrollBehavior??"auto";(a=n.scrollToTop)==null||a.call(n,{behavior:u})}}}}}const Nw="SortPlugin",Ew="用比较函数排序，优先读 `props.sortComparator`。排序总是在过滤之后、分页之前执行，保证「第 N 页」是排序后的第 N 页。",jw="2.0.0",Lw=["data","数据管线"],Ow=[{name:"onPropsChange",when:"props 变化后",description:"数据或配置变化时请求重排"},{name:"transformProps",when:"渲染前链式改写瀑布流 props",description:"补 gap / columns 默认值、按断点覆盖配置"}],Dw=[],zw="只读取 context 字段（props / state / data），不调用上下文方法",Ww=[{name:"comparator",type:"(a, b) => number",default:"—",description:"默认比较函数，可被 props.sortComparator 覆盖"},{name:"scrollToTop",type:"boolean",default:"false",description:"排序变化后回顶"},{name:"scrollBehavior",type:'"auto" | "smooth"',default:'"auto"',description:"回顶行为"}],Aw=`// 按比较函数排序 items，比较函数变化可自动回顶。
const Waterfall = withPlugins(WaterfallCore, [
  createSortPlugin({
    scrollToTop: false,
    scrollBehavior: "auto",
  }),
]);

<Waterfall items={items} renderItem={(item) => <Card data={item} />} />;`,Hw=["稳定排序（不改原数组）","比较函数抛错按相等处理","与 Filter / Search 顺序固定"],Fw=["价格 / 时间排序","热度排序","手动置顶项优先"],Bw=["排序会复制数组（`[...items].sort`），不会改调用方传入的 items。"],km={name:Nw,description:Ew,since:jw,tags:Lw,events:Ow,methods:Dw,methodsNote:zw,config:Ww,example:Aw,features:Hw,useCases:Fw,notes:Bw},Sm=Object.assign(Iw,{meta:km});function Uw(e={}){const n=e.fields??[];return{name:"SearchPlugin",priority:20,enabled:!0,hooks:{transformProps:t=>{const r=String(t.searchQuery??"").trim(),o=Array.isArray(t.items)?t.items:[];if(!r)return t;const i=r.toLowerCase(),l=o.filter(s=>{if(typeof s!="object"||s===null)return!1;const a=n.length>0?n:Object.keys(s);for(const u of a){const p=s[u];if(p!=null&&String(p).toLowerCase().includes(i))return!0}return!1});return{...t,items:l}},onPropsChange:(t,r,o)=>{var u;const i=String(r.searchQuery??""),l=String(o.searchQuery??"");if(((typeof o.scrollToTopOnSearchChange=="boolean"?o.scrollToTopOnSearchChange:void 0)??!!e.scrollToTop)&&i!==l){const p=o.scrollToTopBehavior??e.scrollBehavior??"auto";(u=t.scrollToTop)==null||u.call(t,{behavior:p})}}}}}const Gw="SearchPlugin",Vw="读取 `props.searchQuery`，在指定字段上做大小写不敏感的 `includes` 匹配。没指定字段就对对象的全部自有字段匹配。",Kw="2.0.0",Qw=["data","数据管线","搜索"],Yw=[{name:"onPropsChange",when:"props 变化后",description:"数据或配置变化时请求重排"},{name:"transformProps",when:"渲染前链式改写瀑布流 props",description:"补 gap / columns 默认值、按断点覆盖配置"}],qw=[],Xw="只读取 context 字段（props / state / data），不调用上下文方法",Jw=[{name:"fields",type:"(keyof T)[]",default:"[]",description:"参与匹配的字段；空则匹配全部自有字段"},{name:"scrollToTop",type:"boolean",default:"false",description:"关键词变化后回顶"},{name:"scrollBehavior",type:'"auto" | "smooth"',default:'"auto"',description:"回顶行为"}],Zw=`// 按 props.searchQuery 做大小写不敏感的多字段包含匹配。
const Waterfall = withPlugins(WaterfallCore, [
  createSearchPlugin({
    fields: [],
    scrollToTop: false,
    scrollBehavior: "auto",
  }),
]);

<Waterfall items={items} renderItem={(item) => <Card data={item} />} />;`,e1=["大小写不敏感","多字段 OR 匹配","空关键词直接放行（不触发过滤）"],n1=["站内搜索结果页","后台列表即时搜索","商品名 / 店铺名联合搜索"],t1=["纯前端 `includes`，不排序也不做拼音；要相关性排序请在 Search 之后接 SortPlugin。"],bm={name:Gw,description:Vw,since:Kw,tags:Qw,events:Yw,methods:qw,methodsNote:Xw,config:Jw,example:Zw,features:e1,useCases:n1,notes:t1},wa=Object.assign(Uw,{meta:bm});function r1(e={}){return{name:"PaginationPlugin",priority:10,enabled:!0,hooks:{transformProps:n=>{const t=Number(n.pageIndex??1),r=Math.max(1,Math.floor(Number.isFinite(t)?t:1)),o=Number(n.pageSize??e.pageSize??20),i=Math.max(1,Math.floor(Number.isFinite(o)?o:20)),l=Array.isArray(n.items)?n.items:[],s=Math.max(1,Math.ceil(l.length/i)),a=Math.min(r,s);r>s&&console.warn(`[vane-waterfall] PaginationPlugin：pageIndex=${r} 超出总页数 ${s}，已钳制到第 ${a} 页`);const u=(a-1)*i,p=l.slice(u,u+i);return{...n,items:p}},onPropsChange:(n,t,r)=>{var a;const o=Math.max(1,Number(t.pageIndex??1)),i=Math.max(1,Number(r.pageIndex??1));if(((typeof r.scrollToTopOnPageChange=="boolean"?r.scrollToTopOnPageChange:void 0)??!!e.scrollToTop)&&o!==i){const u=r.scrollToTopBehavior??e.scrollBehavior??"auto";(a=n.scrollToTop)==null||a.call(n,{behavior:u})}}}}}const o1="PaginationPlugin",i1="读 `props.pageIndex`（1 基）与 `props.pageSize` 切片。放在数据管线最末端，保证切的是「过滤 + 排序 + 搜索」之后的结果。",l1="2.0.0",s1=["data","数据管线","分页"],a1=[{name:"onPropsChange",when:"props 变化后",description:"数据或配置变化时请求重排"},{name:"transformProps",when:"渲染前链式改写瀑布流 props",description:"补 gap / columns 默认值、按断点覆盖配置"}],u1=[],c1="只读取 context 字段（props / state / data），不调用上下文方法",d1=[{name:"pageSize",type:"number",default:"props.pageSize ?? 20",description:"每页条数"},{name:"scrollToTop",type:"boolean",default:"false",description:"翻页后回顶"},{name:"scrollBehavior",type:'"auto" | "smooth"',default:'"auto"',description:"回顶行为"}],p1=`// 按 props.pageIndex / pageSize 切片，页码从 1 开始。
const Waterfall = withPlugins(WaterfallCore, [
  createPaginationPlugin({
    scrollToTop: false,
    scrollBehavior: "auto",
  }),
]);

<Waterfall items={items} renderItem={(item) => <Card data={item} />} />;`,m1=["InfiniteScrollPlugin"],f1=["1 基页码（与 UI 分页器一致）","pageIndex 非法值自动夹到 1","翻页自动回顶可选"],g1=["后台列表分页","搜索结果分页","与 URLSyncPlugin 配合做可分享链接"],h1=["pageSize 优先级：props.pageSize > 工厂 config.pageSize > 20。"],Cm={name:o1,description:i1,since:l1,tags:s1,events:a1,methods:u1,methodsNote:c1,config:d1,example:p1,conflicts:m1,features:f1,useCases:g1,notes:h1},_m=Object.assign(r1,{meta:Cm});function y1(e={}){const n=Math.max(1,e.threshold??300),t=new WeakMap,r=o=>{var i;return((i=o.containerRef)==null?void 0:i.current)??o.bus};return{name:"InfiniteScrollPlugin",priority:35,enabled:!0,hooks:{transformProps:o=>({...o,reachBottomOffset:n}),onReachBottom:async(o,i)=>{const l=r(o);if(t.get(l)||o.hasMore===!1||i>n)return;const s=e.onLoadMore??o.props.onLoadMore;if(typeof s=="function"){t.set(l,!0);try{await Promise.resolve(s())}finally{t.delete(l)}}},onUnmount:o=>{t.delete(r(o))}}}}const v1="InfiniteScrollPlugin",x1="监听 Core 的 onReachBottom，在距底部 `threshold` 像素内触发 onLoadMore。自带并发锁：上一次还没结束不会重复触发。",w1="2.0.0",P1=["data","加载更多"],k1=[{name:"onUnmount",when:"瀑布流卸载前",description:"断开观察器、移除滚动监听"},{name:"onReachBottom",when:"滚动触底（distance 为距底像素）",description:"加载更多、预取下一页"},{name:"transformProps",when:"渲染前链式改写瀑布流 props",description:"补 gap / columns 默认值、按断点覆盖配置"}],S1=[],b1="只读取 context 字段（props / state / data），不调用上下文方法",C1=[{name:"threshold",type:"number",default:"300",description:"触发距离 px"},{name:"onLoadMore",type:"() => void | Promise<void>",default:"props.onLoadMore",description:"加载回调"}],_1=`// 滚动到距底部阈值内触发加载更多，带并发锁防重复请求。
const Waterfall = withPlugins(WaterfallCore, [
  createInfiniteScrollPlugin({
    threshold: 300,
  }),
]);

<Waterfall items={items} renderItem={(item) => <Card data={item} />} />;`,T1=["PaginationPlugin"],R1=["距底 300px 预加载，滚到底时数据已就位","并发锁：加载中不重复触发","context.hasMore 为 false 时自动停"],$1=["信息流无限滚动","画廊继续加载","搜索结果瀑布流"],M1=["阈值不要小于一屏（约 600px），否则用户滚到底会看到空白等待。","翻页类场景请用 PaginationPlugin，两者不要同装。"],Tm={name:v1,description:x1,since:w1,tags:P1,events:k1,methods:S1,methodsNote:b1,config:C1,example:_1,conflicts:T1,features:R1,useCases:$1,notes:M1},Rm=Object.assign(y1,{meta:Tm});function I1(e={}){const{log:n=!1,showOverlay:t=!1}=e,r=new Map,o=new Map;let i=null;const l=()=>Array.from(r.values()).reduce((u,p)=>u+p,0),s=(u,p,c)=>{var m,g;try{const x=(g=(m=u.props)==null?void 0:m.keyExtractor)==null?void 0:g.call(m,p,c);if(x!=null)return String(x)}catch{}return`#${c}`},a=u=>{var c;const p=u.items;(i===null||p!==i)&&(i=p,r.clear(),o.clear(),(c=u.sharedData)==null||c.set("click-count",0))};return{name:"ClickAnalyticsPlugin",enabled:!0,getStats:()=>({total:l(),byIndex:Array.from(r.entries()).map(([u,p])=>({index:o.get(u)??0,key:u,clicks:p})).sort((u,p)=>u.index-p.index||u.key.localeCompare(p.key))}),hooks:{onMount:u=>{var p;(p=u.sharedData)==null||p.set("click-count",l())},onLayoutComplete:u=>{a(u)},onItemClick:(u,p,c,m)=>{var P,h,f;a(u);const g=s(u,c,p);o.set(g,p);const x=(r.get(g)??0)+1;r.set(g,x);const w=l();(P=u.sharedData)==null||P.set("click-count",w),(h=u.bus)==null||h.emit("analytics:click",{index:p,key:g,item:c,event:m,total:w}),(f=u.forceUpdate)==null||f.call(u),n&&console.log(`[ClickAnalytics] item=${p} total=${w}`)},renderOverlay:u=>{var c;if(!t)return null;const p=((c=u.sharedData)==null?void 0:c.get("click-count"))||0;return d.jsxs("div",{style:{position:"absolute",top:12,right:12,padding:"10px 12px",background:"#222",color:"#fff",borderRadius:8,fontSize:14,fontWeight:600,boxShadow:"0 4px 12px rgba(0,0,0,0.25)",border:"1px solid rgba(255,255,255,0.15)",pointerEvents:"none",zIndex:99},children:["点击次数：",p,d.jsx("div",{style:{fontSize:12,fontWeight:400,opacity:.85,marginTop:4},children:"提示：点击任意卡片观察计数变化"})]})}}}}const N1="ClickAnalyticsPlugin",E1="统计每次项点击并累计总数，向 bus 发 `analytics:click`（带 index / item / total），`getStats()` 可随时取出按 index 的计数。默认只上报不显示角标，接入真实版式时不会被调试面板盖住内容。",j1="2.0.0",L1=["interaction","埋点"],O1=[{name:"onMount",when:"瀑布流挂载完成",description:"初始化观察器与滚动监听，返回清理函数"},{name:"onItemClick",when:"单个卡片被点击",description:"卡片级跳转与点击埋点"},{name:"onLayoutComplete",when:"DOM 落位完成（可安全测量）",description:"测量真实高度、懒加载判定、曝光上报"},{name:"renderOverlay",when:"每次渲染，滚动容器内的内容层之上",description:"回到顶部、加载提示、浮层工具"},{name:"analytics:click",when:"卡片点击后",description:"广播 { index, key, item, event, total } 点击埋点"}],D1=[],z1="只读取 context 字段（props / state / data），不调用上下文方法",W1=[{name:"log",type:"boolean",default:"false",description:"是否在控制台打印每次点击"},{name:"showOverlay",type:"boolean",default:"false",description:"是否显示右上角计数角标"}],A1=`// 统计项点击次数，发 \`analytics:click\` 事件，可选角标与日志。
const Waterfall = withPlugins(WaterfallCore, [
  createClickAnalyticsPlugin({
    log: false,
    showOverlay: false,
  }),
]);

<Waterfall items={items} renderItem={(item) => <Card data={item} />} />;`,H1=["点击总量 + 按 index 明细（getStats）","bus 事件可被外部订阅上报","角标默认关闭"],F1=["内容流点击率统计","AB 实验埋点","调试点击行为"],B1=["生产环境请把数据从 bus 事件或 getStats() 接到自己的埋点 SDK，不要让插件直接打日志。","计数只在内存里，刷新即清零 —— 想持久化要自己定时取 getStats() 上报。"],$m={name:N1,description:E1,since:j1,tags:L1,events:O1,methods:D1,methodsNote:z1,config:W1,example:A1,features:H1,useCases:F1,notes:B1},Mm=Object.assign(I1,{meta:$m});function U1(e={}){const n=e.showOverlay??e.showOverlaySummary??!1,t=new Map,r=new Map,o=new Map;let i=!1,l=null;const s=p=>Array.from(p.values()).reduce((c,m)=>c+m,0),a=(p,c,m)=>{var g,x;try{const w=(x=(g=p.props)==null?void 0:g.keyExtractor)==null?void 0:x.call(g,c,m);if(w!=null)return String(w)}catch{}return`#${m}`},u=p=>{const c=p.items;(l===null||c!==l)&&(l=c,t.clear(),r.clear(),o.clear(),i=!1)};return{name:"HeatmapAnalyticsPlugin",enabled:!0,getStats:()=>{const p=new Set([...t.keys(),...r.keys()]);return{totalViews:s(t),totalClicks:s(r),items:Array.from(p).map(c=>({index:o.get(c)??0,key:c,views:t.get(c)??0,clicks:r.get(c)??0})).sort((c,m)=>c.index-m.index||c.key.localeCompare(m.key))}},hooks:{onLayoutComplete:p=>{if(u(p),i)return;const{start:c,end:m}=p.visibleRange,g=p.items;for(let x=c;x<=m;x++){const w=g[x];if(w===void 0)continue;const P=a(p,w,x);o.set(P,x),t.set(P,(t.get(P)||0)+1)}i=!0},onItemEnterViewport:(p,c)=>{u(p);const m=p.items[c];if(m===void 0)return;const g=a(p,m,c);o.set(g,c),t.set(g,(t.get(g)||0)+1)},onItemClick:(p,c,m)=>{var x;u(p);const g=a(p,m,c);o.set(g,c),r.set(g,(r.get(g)||0)+1),(x=p.forceUpdate)==null||x.call(p)},renderOverlay:()=>{if(!n)return null;const p=Array.from(t.values()).reduce((m,g)=>m+g,0),c=Array.from(r.values()).reduce((m,g)=>m+g,0);return d.jsxs("div",{style:{position:"sticky",top:0,zIndex:100,display:"flex",gap:12,alignItems:"center",padding:"6px 10px",background:"rgba(0,0,0,0.6)",color:"white",borderRadius:8,fontSize:12,marginBottom:8},children:[d.jsxs("span",{children:["曝光总计: ",p]}),d.jsxs("span",{children:["点击总计: ",c]})]})}}}}const G1="HeatmapAnalyticsPlugin",V1="统计每项进入视口次数与点击次数，可选顶部汇总条，`getStats()` 取出每项明细。曝光是瀑布流里最容易统计错的东西（滚动时反复进出视口），交给插件比自己写 IntersectionObserver 少踩坑。",K1="2.0.0",Q1=["interaction","埋点","曝光"],Y1=[{name:"onItemClick",when:"单个卡片被点击",description:"卡片级跳转与点击埋点"},{name:"onItemEnterViewport",when:"单个卡片进入视口",description:"卡片级曝光、视频自动播放等"},{name:"onLayoutComplete",when:"DOM 落位完成（可安全测量）",description:"测量真实高度、懒加载判定、曝光上报"},{name:"renderOverlay",when:"每次渲染，滚动容器内的内容层之上",description:"回到顶部、加载提示、浮层工具"}],q1=[],X1="只读取 context 字段（props / state / data），不调用上下文方法",J1=[{name:"showOverlay",type:"boolean",default:"false",description:"是否显示顶部汇总条"},{name:"showOverlaySummary",type:"boolean",default:"—",description:"showOverlay 的旧别名"}],Z1=`// 统计每项曝光次数与点击次数，可显示汇总条。
const Waterfall = withPlugins(WaterfallCore, [
  createHeatmapAnalyticsPlugin({
    showOverlay: false,
  }),
]);

<Waterfall items={items} renderItem={(item) => <Card data={item} />} />;`,eP=["按项的曝光 / 点击双计数","首屏曝光在 onLayoutComplete 补一次","getStats() 输出可上报的扁平结构"],nP=["信息流曝光分析","广告位可见性验证","调试曝光策略"],tP=["首屏曝光靠 onLayoutComplete 补一次，否则第一帧显示 0。","真实上报要自己做去重与批次（插件只负责计数，不区分「同一项第几次进入」）。","计数只在内存里，刷新即清零 —— 定时取 getStats() 上报。"],Im={name:G1,description:V1,since:K1,tags:Q1,events:Y1,methods:q1,methodsNote:X1,config:J1,example:Z1,features:eP,useCases:nP,notes:tP},Nm=Object.assign(U1,{meta:Im}),hr="data-drag-over";function fc(e,n){var i;if(typeof document>"u")return null;const t=document.elementFromPoint(e,n),r=(i=t==null?void 0:t.closest)==null?void 0:i.call(t,"[data-index]");if(!r)return null;const o=Number(r.getAttribute("data-index"));return Number.isFinite(o)?o:null}function rP(e={}){const n=e.enabled??!0,t=e.showHandle??!1,r=e.touchHoldMs??180,o=(a,u,p)=>{var g;const c=Number(p);if(!Number.isFinite(c)||c===u)return;a.sharedData.set("drag-from",c),a.sharedData.set("drag-to",u),a.bus.emit("drag:reorder",{from:c,to:u});const m=a.props.items;(g=e.onReorder)==null||g.call(e,c,u,m==null?void 0:m[c])},i=()=>{document.querySelectorAll(`[${hr}]`).forEach(a=>a.removeAttribute(hr))},l=()=>{typeof document>"u"||(i(),document.body.style.userSelect="",document.body.style.cursor="")},s=(a,u,p)=>{if(a.pointerType==="mouse")return;const c=a.clientX,m=a.clientY,g=Date.now();let x=!1,w=null;const P=f=>{if(!x){const k=Date.now()-g>=r,C=Math.hypot(f.clientX-c,f.clientY-m)>=6;if(!k||!C)return;x=!0,document.body.style.userSelect="none",document.body.style.cursor="grabbing"}f.preventDefault();const v=fc(f.clientX,f.clientY);if(v!==w&&(i(),w=v,v!=null)){const k=document.querySelector(`[data-index="${v}"]`);k==null||k.setAttribute(hr,"")}},h=f=>{if(window.removeEventListener("pointermove",P),window.removeEventListener("pointerup",h),window.removeEventListener("pointercancel",h),l(),!x)return;const v=fc(f.clientX,f.clientY);v!=null&&o(p,v,String(u))};window.addEventListener("pointermove",P,{passive:!1}),window.addEventListener("pointerup",h),window.addEventListener("pointercancel",h)};return{name:"DragReorderPlugin",enabled:n,hooks:{renderItemWrapper:(a,u,p)=>n?d.jsx("div",{draggable:!0,onDragStart:c=>{var m;(m=c.dataTransfer)==null||m.setData("text/plain",String(p)),a.sharedData.set("drag-from",p)},onDragOver:c=>{c.preventDefault()},onDragEnter:()=>{const c=document.querySelector(`[data-index="${p}"]`);c==null||c.setAttribute(hr,"")},onDragLeave:()=>{const c=document.querySelector(`[data-index="${p}"]`);c==null||c.removeAttribute(hr)},onDrop:c=>{var m;c.preventDefault(),l(),o(a,p,((m=c.dataTransfer)==null?void 0:m.getData("text/plain"))??"")},onDragEnd:l,onPointerDown:c=>s(c,p,a),style:{cursor:"grab",...t?{border:"1px dashed #bdbdbd",borderRadius:6}:null},children:u}):u}}}const oP="DragReorderPlugin",iP="给每个项加拖拽能力，松手时回调 `onReorder(from, to)`，同时向 bus 发 `drag:reorder`。鼠标走原生 HTML5 拖拽，触屏走「长按 + pointer」——触摸设备上 `draggable` 根本不触发，旧版因此在手机上完全失效。",lP="2.0.0",sP=["interaction","拖拽"],aP=[{name:"renderItemWrapper",when:"渲染每个卡片时包裹其内容",description:"给单卡加包裹层（拖拽、无障碍语义、占位骨架）"},{name:"drag:reorder",when:"拖拽排序完成后",description:"广播 { from, to }，供业务层同步顺序"}],uP=[],cP="只读取 context 字段（props / state / data），不调用上下文方法",dP=[{name:"enabled",type:"boolean",default:"true",description:"是否启用拖拽"},{name:"onReorder",type:"(from, to, item) => void",default:"—",description:"重排回调"},{name:"showHandle",type:"boolean",default:"false",description:"是否显示虚线边框提示可拖"},{name:"touchHoldMs",type:"number",default:"180",description:"触屏长按多久进入拖拽（ms），0 表示不需要长按"}],pP=`// 鼠标走 HTML5 draggable，触屏走长按 + pointer，松手时回调 onReorder(from, to)。
const Waterfall = withPlugins(WaterfallCore, [
  createDragReorderPlugin({
    enabled: true,
    showHandle: false,
    touchHoldMs: 180,
  }),
]);

<Waterfall items={items} renderItem={(item) => <Card data={item} />} />;`,mP=["鼠标：原生 HTML5 拖拽，无额外依赖","触屏：长按 180ms 后 pointer 拖拽（可配 touchHoldMs）","onReorder 回调真正可用，bus 发 `drag:reorder`"],fP=["后台卡片排序","收藏夹手动排序","仪表盘组件排列"],gP=["插件只负责「拖」和「告诉你从哪到哪」，数组重排由调用方在 onReorder 里做。","触屏用长按区分「想滚」和「想拖」：不这样做，手指一滑就变成拖拽，页面滚不动。"],Em={name:oP,description:iP,since:lP,tags:sP,events:aP,methods:uP,methodsNote:cP,config:dP,example:pP,features:mP,useCases:fP,notes:gP},jm=Object.assign(rP,{meta:Em});function hP(e={}){const n=e.getAnchorId||(r=>r==null?void 0:r.id);let t;return{name:"ScrollAnchorPlugin",enabled:!0,hooks:{onMount:r=>{var o;t=(o=r.bus)==null?void 0:o.on("anchor:scrollToId",i=>{var a,u;const s=(((a=r.props)==null?void 0:a.items)||[]).findIndex((p,c)=>n(p,c)===i.id);s>=0&&((u=r.scrollToItem)==null||u.call(r,s,{behavior:"smooth",block:"start"}))})},onUnmount:()=>t==null?void 0:t()}}}const yP="ScrollAnchorPlugin",vP='不需要自己算索引：外部只管 `bus.emit("anchor:scrollToId", { id })`，插件用 getAnchorId 找到对应项并滚过去。适合「从消息跳到某条内容」。',xP="2.0.0",wP=["interaction","滚动"],PP=[{name:"onMount",when:"瀑布流挂载完成",description:"初始化观察器与滚动监听，返回清理函数"},{name:"onUnmount",when:"瀑布流卸载前",description:"断开观察器、移除滚动监听"}],kP=[],SP="只读取 context 字段（props / state / data），不调用上下文方法",bP=[{name:"getAnchorId",type:"(item, index) => string | number | undefined",default:"item.id",description:"从项里取锚点 id"}],CP=`// 监听 \`anchor:scrollToId\` 事件，按业务 id 滚动到对应项。
const Waterfall = withPlugins(WaterfallCore, [
  createScrollAnchorPlugin({
    getAnchorId: "item.id",
  }),
]);

<Waterfall items={items} renderItem={(item) => <Card data={item} />} />;`,_P=["按业务 id 定位，不用算下标","onMount 订阅 / onUnmount 退订（不泄漏）","平滑滚动"],TP=["从通知跳转到具体卡片","目录点击定位","外链深链定位"],RP=["目标项必须已在 items 里；分页场景请先切到对应页再发事件。"],Lm={name:yP,description:vP,since:xP,tags:wP,events:PP,methods:kP,methodsNote:SP,config:bP,example:CP,features:_P,useCases:TP,notes:RP},Om=Object.assign(hP,{meta:Lm});function $P(e){const n=new Set,t=r=>{if(n.size<=e.poolSize)return;const o=n.values().next().value;if(typeof o=="number"){n.delete(o);const i=r.getItemRef(o);i&&(i.style.visibility="hidden")}};return{name:"RecyclePlugin",enabled:!0,hooks:{onItemEnterViewport:(r,o)=>{const i=r.getItemRef(o);i&&(i.style.visibility="visible"),n.add(o),t(r)},onItemLeaveViewport:(r,o)=>{const i=r.getItemRef(o);i&&(i.style.visibility="hidden"),n.delete(o)},onItemUnmount:(r,o)=>{n.delete(o)},onUnmount:()=>{n.clear()}}}}const MP="RecyclePlugin",IP="纯绘制层优化：项离开视口就 `visibility: hidden`，回来再显示。DOM 节点不销毁，滚动位置与已加载的图片都保留，适合「项里有视频/Canvas，重建代价高」的场景。",NP="2.0.0",EP=["interaction","性能"],jP=[{name:"onUnmount",when:"瀑布流卸载前",description:"断开观察器、移除滚动监听"},{name:"onItemUnmount",when:"单个卡片卸载时",description:"解绑该卡片的监听与观察器"},{name:"onItemEnterViewport",when:"单个卡片进入视口",description:"卡片级曝光、视频自动播放等"},{name:"onItemLeaveViewport",when:"单个卡片离开视口",description:"暂停播放、回收资源"}],LP=[{name:"getItemRef",signature:"ctx.getItemRef(index: number): HTMLElement | null",description:"取第 index 张卡片的 DOM 引用，可能为 null（尚未挂载 / 已回收）"}],OP=[{name:"poolSize",type:"number",default:"—",description:"同时保持可见的项数上限（超出则回收最早的）"}],DP=`// 视口外的项设 \`visibility: hidden\`，降低长列表的绘制压力。
const Waterfall = withPlugins(WaterfallCore, [
  createRecyclePlugin(),
]);

<Waterfall items={items} renderItem={(item) => <Card data={item} />} />;`,zP=["不销毁 DOM，只隐藏","项内媒体不重新加载","与虚拟化正交（一个省绘制、一个省节点）"],WP=["项内含视频 / canvas","长列表滚动发虚","低端设备省电"],AP=["与 Core 的 `virtualize` 同开会让项被卸载又隐藏，收益互相抵消，建议只选一个。","只改 visibility 不改布局，所以不会引起重排。"],Dm={name:MP,description:IP,since:NP,tags:EP,events:jP,methods:LP,config:OP,example:DP,features:zP,useCases:WP,notes:AP},zm=Object.assign($P,{meta:Dm});function HP(e={}){const n=e.containerRole??"list",t=e.itemRole??"listitem",r=e.enableTabIndex??!0,o=e.containerLabel??"Waterfall list",i=new WeakMap,l=u=>{var p;return((p=u.containerRef)==null?void 0:p.current)??u.bus},s=u=>i.get(l(u))??0,a=u=>{const p=u.containerRef.current;p&&(p.setAttribute("role",n),p.setAttribute("aria-label",o),p.setAttribute("aria-busy",u.isLayouting?"true":"false"))};return{name:"A11yPlugin",enabled:!0,hooks:{onMount:u=>{a(u)},onLayoutComplete:u=>{a(u)},onItemClick:(u,p)=>{var c;s(u)!==p&&(i.set(l(u),p),(c=u.forceUpdate)==null||c.call(u))},renderItemWrapper:(u,p,c)=>d.jsx("div",{role:t,"aria-posinset":c+1,"aria-setsize":u.itemCount,tabIndex:r?c===s(u)?0:-1:void 0,children:p})}}}const FP="A11yPlugin",BP="把瀑布流补成读屏可理解的列表：容器 `role=list` + `aria-label`，每项 `role=listitem` + `aria-posinset` / `aria-setsize`，并可选加 `tabIndex` 让键盘能逐项聚焦。",UP="2.0.0",GP=["ui","a11y"],VP=[{name:"onMount",when:"瀑布流挂载完成",description:"初始化观察器与滚动监听，返回清理函数"},{name:"onItemClick",when:"单个卡片被点击",description:"卡片级跳转与点击埋点"},{name:"onLayoutComplete",when:"DOM 落位完成（可安全测量）",description:"测量真实高度、懒加载判定、曝光上报"},{name:"renderItemWrapper",when:"渲染每个卡片时包裹其内容",description:"给单卡加包裹层（拖拽、无障碍语义、占位骨架）"}],KP=[],QP="只读取 context 字段（props / state / data），不调用上下文方法",YP=[{name:"containerRole",type:"string",default:'"list"',description:"容器 role"},{name:"itemRole",type:"string",default:'"listitem"',description:"项 role"},{name:"enableTabIndex",type:"boolean",default:"true",description:"项是否可 Tab 聚焦"},{name:"containerLabel",type:"string",default:'"Waterfall list"',description:"容器 aria-label"}],qP=`// 给容器与项补 ARIA role / label / posinset，支持键盘 Tab 遍历。
const Waterfall = withPlugins(WaterfallCore, [
  createA11yPlugin({
    containerRole: "list",
    itemRole: "listitem",
    enableTabIndex: true,
  }),
]);

<Waterfall items={items} renderItem={(item) => <Card data={item} />} />;`,XP=["容器 / 项 role 成对补齐","aria-posinset + aria-setsize 正确标注序号","键盘可逐项聚焦"],JP=["政务 / 金融等合规站点","读屏用户可用的信息流","键盘操作优先的桌面端"],ZP=["项数很多时 `tabIndex=0` 会让 Tab 变长，建议配合「跳转主内容」链接使用。"],Wm={name:FP,description:BP,since:UP,tags:GP,events:VP,methods:KP,methodsNote:QP,config:YP,example:qP,features:XP,useCases:JP,notes:ZP},Am=Object.assign(HP,{meta:Wm}),gc="GROUPS",ek="GROUP_INDEX";function nk(e={}){const n=e.groupBy??(s=>(s==null?void 0:s.category)??"default"),t=e.showOverlay??!1;let r=null,o=null;const i=(s,a)=>{if(s.size!==a.size)return!1;for(const[u,p]of s){const c=a.get(u);if(!c||c.length!==p.length)return!1}return!0},l=s=>{const a=s.items??[];if(o&&r===a)return o;const u=new Map,p=new Map;a.forEach((m,g)=>{const x=n(m,g);p.set(g,x),u.has(x)||u.set(x,[]),u.get(x).push(g)});const c=o?!i(u,o):!0;return r=a,o=u,s.sharedData.set(gc,u),s.sharedData.set(ek,p),c&&u.size>0&&s.bus.emit("grouping:change",{groups:u}),u};return{name:"GroupingPlugin",enabled:!0,hooks:{onMount:s=>{l(s)},onLayoutComplete:s=>{l(s)},onPropsChange:s=>{l(s)},renderOverlay:s=>{if(!t)return null;const a=s.sharedData.get(gc)??new Map;if(a.size===0)return null;const u=Array.from(a.entries()).slice(0,3);return d.jsxs("div",{style:{position:"absolute",top:12,left:12,zIndex:99,background:"#111827",color:"#fff",padding:"10px 12px",borderRadius:8,boxShadow:"0 4px 12px rgba(0,0,0,0.25)",border:"1px solid rgba(255,255,255,0.15)",minWidth:150,fontSize:12,pointerEvents:"none"},children:[d.jsxs("div",{style:{opacity:.85,marginBottom:6},children:["分组：",a.size," 组"]}),u.map(([p,c])=>d.jsxs("div",{children:[String(p)," · ",c.length," 项"]},String(p)))]})}}}}const tk="GroupingPlugin",rk="用 groupBy 把项按业务字段分组，结果放进 sharedData 的 `GROUPS`（Map<组键, 索引数组>），供 StickyHeaderPlugin、分组统计条等消费。挂载即算一次，之后 props 变化重算。",ok="2.0.0",ik=["ui","分组"],lk=[{name:"onMount",when:"瀑布流挂载完成",description:"初始化观察器与滚动监听，返回清理函数"},{name:"onPropsChange",when:"props 变化后",description:"数据或配置变化时请求重排"},{name:"onLayoutComplete",when:"DOM 落位完成（可安全测量）",description:"测量真实高度、懒加载判定、曝光上报"},{name:"renderOverlay",when:"每次渲染，滚动容器内的内容层之上",description:"回到顶部、加载提示、浮层工具"},{name:"grouping:change",when:"分组结果变化时",description:"广播 { groups } 分组结构"}],sk=[],ak="只读取 context 字段（props / state / data），不调用上下文方法",uk=[{name:"groupBy",type:"(item, index) => string | number",default:'item.category ?? "default"',description:"分组函数"},{name:"showOverlay",type:"boolean",default:"false",description:"是否显示分组统计角标"}],ck=`// 按字段把项分组，结果写进 sharedData(GROUPS) 供吸顶条 / 统计用。
const Waterfall = withPlugins(WaterfallCore, [
  createGroupingPlugin({
    groupBy: "item.category ?? \\"default\\"",
    showOverlay: false,
  }),
]);

<Waterfall items={items} renderItem={(item) => <Card data={item} />} />;`,dk=["挂载即计算（旧版只在 props 变化时算，首屏永远拿不到分组）","结果写 sharedData，跨插件可读","统计角标默认关闭"],pk=["按分类分组的信息流","按日期分组的时间线","吸顶条显示当前分组"],mk=["分组只产出索引映射，不改变渲染顺序；要视觉分组请自己按分组建行。"],Hm={name:tk,description:rk,since:ok,tags:ik,events:lk,methods:sk,methodsNote:ak,config:uk,example:ck,features:dk,useCases:pk,notes:mk},Pa=Object.assign(nk,{meta:Hm});function fk(e={}){const n=e.title||"分组标题",t=e.showHint??!1;return{name:"StickyHeaderPlugin",enabled:!0,hooks:{renderOverlay:r=>{var u,p,c;const o=((u=r.sharedData)==null?void 0:u.get("GROUPS"))||new Map,i=(p=r.sharedData)==null?void 0:p.get("GROUP_INDEX"),l=((c=r.visibleRange)==null?void 0:c.start)??0,a=(i==null?void 0:i.get(l))??(o.size>0?Array.from(o.keys())[0]:void 0);return d.jsxs("div",{style:{position:"sticky",top:0,zIndex:20,background:"#111827",color:"#fff",borderBottom:"1px solid rgba(255,255,255,0.15)",boxShadow:"0 4px 12px rgba(0,0,0,0.15)",padding:"10px 14px",fontSize:15,fontWeight:600},children:[n," ",a!==void 0?`：${String(a)}`:"",t?d.jsx("span",{style:{marginLeft:8,fontSize:12,opacity:.8},children:"向下滚动观察吸顶"}):null]})}}}}const gk="StickyHeaderPlugin",hk="在滚动容器内渲染一条 `position: sticky` 的标题条，始终贴住容器顶部。装了 GroupingPlugin 时自动显示第一个分组名，也可用 title 写死。",yk="2.0.0",vk=["ui","吸顶"],xk=[{name:"renderOverlay",when:"每次渲染，滚动容器内的内容层之上",description:"回到顶部、加载提示、浮层工具"}],wk=[],Pk="只读取 context 字段（props / state / data），不调用上下文方法",kk=[{name:"title",type:"string",default:'"分组标题"',description:"标题文案"},{name:"showHint",type:"boolean",default:"false",description:"是否显示「向下滚动观察」提示"}],Sk=`// 滚动容器内的吸顶标题条，可与分组联动显示当前组。
const Waterfall = withPlugins(WaterfallCore, [
  createStickyHeaderPlugin({
    title: "分组标题",
    showHint: false,
  }),
]);

<Waterfall items={items} renderItem={(item) => <Card data={item} />} />;`,bk=["sticky 吸顶，不依赖额外容器","与 Grouping 联动显示当前组","提示文案默认关闭"],Ck=["分组信息流","按日期分组的时间线","长列表的上下文提示"],_k=["sticky 生效要求它作为滚动容器的直接子元素——由 composeSlots 保证，单测已锁。"],Fm={name:gk,description:hk,since:yk,tags:vk,events:xk,methods:wk,methodsNote:Pk,config:kk,example:Sk,features:bk,useCases:Ck,notes:_k},Bm=Object.assign(fk,{meta:Fm});function Tk(e={}){const n=e.storageKey||"waterfall-bookmark",t=e.scrollBehavior||"smooth",r=o=>{var a;const i=o;if(!i)return!1;const l=(a=i.tagName)==null?void 0:a.toLowerCase(),s=(i.getAttribute&&i.getAttribute("contenteditable"))==="true";return l==="input"||l==="textarea"||s};return{name:"BookmarkPlugin",enabled:!0,hooks:{onMount:o=>{const i=l=>{var u,p;if(r(l.target))return;const s=(l.key||"").toLowerCase(),a=l.code||"";if(s==="b"||a==="KeyB"){const c=((u=o.containerRef)==null?void 0:u.current)||null;let m=0;c&&c.scrollHeight>c.clientHeight?m=c.scrollTop:m=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;try{localStorage.setItem(n,String(Math.max(0,m)))}catch{}}else if(s==="r"||a==="KeyR"){let c=0;try{const g=localStorage.getItem(n)||"0";c=Math.max(0,Number(g)||0)}catch{}const m=((p=o.containerRef)==null?void 0:p.current)||null;m&&m.scrollHeight>m.clientHeight?m.scrollTo({top:c,behavior:t}):window.scrollTo({top:c,behavior:t})}};return window.addEventListener("keydown",i,{capture:!0}),()=>{window.removeEventListener("keydown",i,{capture:!0})}}}}}const Rk="BookmarkPlugin",$k="长列表读到一半要跳走时按 **B** 存位置，回来按 **R** 复原。焦点在输入框/可编辑区域时不拦截按键。",Mk="2.0.0",Ik=["ui","滚动","快捷键"],Nk=[{name:"onMount",when:"瀑布流挂载完成",description:"初始化观察器与滚动监听，返回清理函数"}],Ek=[],jk="只读取 context 字段（props / state / data），不调用上下文方法",Lk=[{name:"storageKey",type:"string",default:'"waterfall-bookmark"',description:"localStorage 键名"},{name:"scrollBehavior",type:'"auto" | "smooth"',default:'"smooth"',description:"恢复时的滚动行为"}],Ok=`// 按 B 记录滚动位置、按 R 跳回（localStorage），忽略输入框按键。
const Waterfall = withPlugins(WaterfallCore, [
  createBookmarkPlugin({
    storageKey: "waterfall-bookmark",
    scrollBehavior: "smooth",
  }),
]);

<Waterfall items={items} renderItem={(item) => <Card data={item} />} />;`,Dk=["B 存 / R 取，零 UI 侵入","自动区分容器滚动与页面滚动","输入框内不误触"],zk=["长文列表阅读","后台大表格浏览","演示时快速复位"],Wk=["键名全局共用，一个页面里多处瀑布流请各自传不同的 storageKey。"],Um={name:Rk,description:$k,since:Mk,tags:Ik,events:Nk,methods:Ek,methodsNote:jk,config:Lk,example:Ok,features:Dk,useCases:zk,notes:Wk},Gm=Object.assign(Tk,{meta:Um});function Ak(e={}){const n=e.storageKey||"waterfall-state",t=e.persistScroll??!0,r=e.persistKeys||["pageIndex","pageSize","searchQuery"];let o=!1;const i=1,l=new WeakSet,s=p=>{var c;return((c=p.containerRef)==null?void 0:c.current)??p.bus};function a(){try{const p=localStorage.getItem(n);if(!p)return null;const c=JSON.parse(p);return!c||c.version!==i||typeof c.state!="object"?null:c.state}catch{return null}}function u(p){try{localStorage.setItem(n,JSON.stringify({version:i,state:p}))}catch{}}return{name:"StatePersistencePlugin",enabled:!0,hooks:{transformProps:p=>{if(o)return p;const c=a();if(!c)return p;const m={...p};let g=!1;return r.forEach(x=>{c[x]!==void 0&&(m[x]=c[x],g=!0)}),g&&(o=!0),m},onMount:p=>{var g;const c=a();if(!c)return;const m={};if(r.forEach(x=>{c[x]!==void 0&&(m[x]=c[x])}),Object.keys(m).length>0&&((g=p.bus)==null||g.emit("state:restored",m),typeof window<"u"))try{window.dispatchEvent(new CustomEvent("waterfall:state-restored",{detail:m}))}catch{}},onLayoutComplete:p=>{if(!t)return;const c=s(p);if(l.has(c))return;const m=a(),g=Number((m==null?void 0:m.scrollTop)??0);if(!Number.isFinite(g)||g<=0){l.add(c);return}const x=p.containerRef.current;x&&(x.scrollTo({top:g,behavior:"auto"}),l.add(c))},onPropsChange:(p,c,m)=>{const x={...a()||{}},w=m??{};r.forEach(P=>{const h=w[P];h!==void 0&&(x[P]=h)}),u(x)},onUnmount:p=>{var g;const c={};t&&(c.scrollTop=((g=p.containerRef.current)==null?void 0:g.scrollTop)||0);const m=p.props??{};r.forEach(x=>{const w=m[x];w!==void 0&&(c[x]=w)}),u(c)}}}}const Hk="StatePersistencePlugin",Fk="三个时机各做一件事：首次渲染把快照里的 pageIndex / searchQuery 注入 props；挂载后恢复 scrollTop；props 变化与卸载时写回快照。刷新页面不丢进度。",Bk="2.0.0",Uk=["ui","持久化"],Gk=[{name:"onMount",when:"瀑布流挂载完成",description:"初始化观察器与滚动监听，返回清理函数"},{name:"onUnmount",when:"瀑布流卸载前",description:"断开观察器、移除滚动监听"},{name:"onPropsChange",when:"props 变化后",description:"数据或配置变化时请求重排"},{name:"onLayoutComplete",when:"DOM 落位完成（可安全测量）",description:"测量真实高度、懒加载判定、曝光上报"},{name:"transformProps",when:"渲染前链式改写瀑布流 props",description:"补 gap / columns 默认值、按断点覆盖配置"},{name:"state:restored",when:"从持久化恢复滚动位置 / 顺序后",description:"广播恢复后的状态快照"}],Vk=[],Kk="只读取 context 字段（props / state / data），不调用上下文方法",Qk=[{name:"storageKey",type:"string",default:'"waterfall-state"',description:"localStorage 键名"},{name:"persistScroll",type:"boolean",default:"true",description:"是否持久化滚动位置"},{name:"persistKeys",type:"string[]",default:'["pageIndex","pageSize","searchQuery"]',description:"要持久化的 props 键"}],Yk=`// 把滚动位置与分页/查询状态存 localStorage，回来时恢复。
const Waterfall = withPlugins(WaterfallCore, [
  createStatePersistencePlugin({
    storageKey: "waterfall-state",
    persistScroll: true,
    persistKeys: ["pageIndex","pageSize","searchQuery"],
  }),
]);

<Waterfall items={items} renderItem={(item) => <Card data={item} />} />;`,qk=["滚动位置 + 分页/查询一起存","首帧注入只做一次，不会覆盖用户操作","SSR / 隐私模式下降级为不持久化"],Xk=["后台列表刷新不丢页","搜索结果返回定位","移动端来回切换页面"],Jk=["只能恢复「值」，不能替你把它写回 React state——页面应订阅 `state:restored` 事件或读 bus。","localStorage 不可用（隐私模式/配额满）时静默跳过，不会抛错。"],Vm={name:Hk,description:Fk,since:Bk,tags:Uk,events:Gk,methods:Vk,methodsNote:Kk,config:Qk,example:Yk,features:qk,useCases:Xk,notes:Jk},Km=Object.assign(Ak,{meta:Vm});function Zk(e={}){const n=e.mode||"hash",t=e.keys||["pageIndex","pageSize","searchQuery"];let r=null,o=!1;const i=()=>(r===null&&(r=l()),r);function l(){try{if(n==="hash"){const a=window.location.hash||"",u=a.indexOf("?"),p=u>=0?a.slice(u+1):a.replace(/^#/,""),c=new URLSearchParams(p),m={};return t.forEach(g=>{const x=c.get(g);x!==null&&(m[g]=x)}),m}else{const a=new URLSearchParams(window.location.search),u={};return t.forEach(p=>{const c=a.get(p);c!==null&&(u[p]=c)}),u}}catch{return{}}}function s(a){try{const u=new URLSearchParams;t.forEach(c=>{const m=a[c];m!=null&&String(m).length>0&&u.set(c,String(m))});const p=u.toString();if(n==="hash"){const c=window.location.hash||"",x=`#${c.replace(/^#/,"").split("?")[0]||""}${p?`?${p}`:""}`;c!==x&&history.replaceState(null,"",`${window.location.pathname}${window.location.search}${x}`)}else{const m=window.location.pathname+(p?`?${p}`:"")+(window.location.hash||"");history.replaceState(null,"",m)}}catch{}}return{name:"URLSyncPlugin",enabled:!0,hooks:{transformProps:a=>{if(o)return a;const u=i(),p={...a};let c=!1;return t.forEach(m=>{u[m]!==void 0&&(p[m]=u[m],c=!0)}),c&&(o=!0),p},onMount:a=>{var u;(u=a.bus)==null||u.emit("urlsync:init",i())},onPropsChange:(a,u,p)=>{const c={},m=p??{};t.forEach(w=>{const P=m[w];P!==void 0&&(c[w]=P)});const g=i();t.some(w=>String(c[w]??"")!==String(g[w]??""))&&s(c)}}}}const eS="URLSyncPlugin",nS="props 变化时把指定键写进 URL（hash 或 search），挂载时读出来广播 `urlsync:init`。刷新与分享都能还原筛选状态。",tS="2.0.0",rS=["ui","URL","可分享"],oS=[{name:"onMount",when:"瀑布流挂载完成",description:"初始化观察器与滚动监听，返回清理函数"},{name:"onPropsChange",when:"props 变化后",description:"数据或配置变化时请求重排"},{name:"transformProps",when:"渲染前链式改写瀑布流 props",description:"补 gap / columns 默认值、按断点覆盖配置"},{name:"urlsync:init",when:"从 URL 参数初始化完成后",description:"广播初始参数快照"}],iS=[],lS="只读取 context 字段（props / state / data），不调用上下文方法",sS=[{name:"mode",type:'"hash" | "search"',default:'"hash"',description:"写 hash 还是 search"},{name:"keys",type:"string[]",default:'["pageIndex","pageSize","searchQuery"]',description:"要同步的 props 键"}],aS=`// 把分页/搜索/排序同步进 URL（hash 或 search），链接可分享。
const Waterfall = withPlugins(WaterfallCore, [
  createURLSyncPlugin({
    mode: "hash",
    keys: ["pageIndex","pageSize","searchQuery"],
  }),
]);

<Waterfall items={items} renderItem={(item) => <Card data={item} />} />;`,uS=["hash 模式会保留已有路由路径","用 replaceState，不污染后退栈","SSR 安全：无 window 时直接跳过"],cS=["搜索结果可分享","后台筛选状态可刷新","带参数的深链"],dS=["只做单向同步（props → URL）与初始读取；URL 前进后退的监听请页面自己做。"],Qm={name:eS,description:nS,since:tS,tags:rS,events:oS,methods:iS,methodsNote:lS,config:sS,example:aS,features:uS,useCases:cS,notes:dS},Ym=Object.assign(Zk,{meta:Qm}),pS={sm:{width:0,columns:2},md:{width:560,columns:3},lg:{width:800,columns:4}},mS={slug:"responsive-columns",title:"响应式列数",group:"plugin",plugin:"ResponsiveColumnsPlugin",intro:"按断点表切列数：< 560 两列，560 起三列，800 起四列。",why:"设计稿给了明确的「平板 3 列 / 桌面 4 列」规范时用断点表；只想要「每列至少多宽」就用 AutoColumn（下一页）。",plugs:[{fn:"createResponsiveColumnsPlugin",cfg:"breakpoints: { sm: { width: 0, columns: 2 }, md: { width: 560, columns: 3 }, lg: { width: 800, columns: 4 } }",why:"按容器宽度命中最近一档，读的是容器宽不是 window.innerWidth"}],props:["columns={2}","gap={12}","containerStyle={{ height: 420 }}"],note:"与 AutoColumnPlugin 互斥：两个都实现 calculateColumns，同开会交替覆盖，列数看起来会「闪」。",controls:[{key:"simWidth",label:"模拟容器宽",kind:"number",init:760,min:360,max:1100,step:20}]},fS=q({count:28,seed:2301,plugins:()=>[lm({breakpoints:pS})],instrument:!0,coreProps:e=>({gap:12,containerStyle:{height:"var(--stage-h, 380px)",width:Number(e.cfg.simWidth)}}),chrome:e=>{const n=Number(e.cfg.simWidth),t=n>=800?"lg → 4 列":n>=560?"md → 3 列":"sm → 2 列";return d.jsxs("p",{className:"stage-tip",children:["容器宽 ",d.jsx("b",{children:n})," · 命中 ",d.jsx("b",{children:t})," · 实际 ",d.jsx("b",{children:e.meter.columns})," 列"]})}}),gS=Object.freeze(Object.defineProperty({__proto__:null,default:fS,meta:mS},Symbol.toStringTag,{value:"Module"})),hS={slug:"auto-column",title:"自动列数",group:"plugin",plugin:"AutoColumnPlugin",intro:"给一个最小列宽，列数自己算：floor((可用宽 + gap) / (最小列宽 + gap))。",why:"版式没有硬性列数要求、只要求「图片别小于 200px」时用它，比写一堆断点省事。",plugs:[{fn:"createAutoColumnPlugin",cfg:"minColumnWidth: {{minColumnWidth}}, maxColumns: {{maxColumns}}",why:"按最小列宽算列数，容器变宽自动加列、变窄自动减列"}],props:["gap={12}","containerStyle={{ height: 420 }}"],note:"算的是容器宽（padding 已扣除）。列数上限用 maxColumns 卡住，否则超宽屏会排出 8 列小图。",controls:[{key:"minColumnWidth",label:"minColumnWidth",kind:"number",init:200,min:120,max:320,step:10},{key:"maxColumns",label:"maxColumns",kind:"number",init:4,min:2,max:6},{key:"simWidth",label:"模拟容器宽",kind:"number",init:900,min:360,max:1100,step:20}]},yS=q({count:30,seed:2401,instrument:!0,plugins:e=>[om({minColumnWidth:Number(e.cfg.minColumnWidth),maxColumns:Number(e.cfg.maxColumns)})],coreProps:e=>({gap:12,containerStyle:{height:"var(--stage-h, 380px)",width:Number(e.cfg.simWidth)}}),chrome:e=>d.jsxs("p",{className:"stage-tip",children:["最小列宽 ",d.jsx("b",{children:Number(e.cfg.minColumnWidth)})," · 容器宽"," ",d.jsx("b",{children:Number(e.cfg.simWidth)})," · 算出 ",d.jsx("b",{children:e.meter.columns})," 列（上限"," ",Number(e.cfg.maxColumns),"）"]})}),vS=Object.freeze(Object.defineProperty({__proto__:null,default:yS,meta:hS},Symbol.toStringTag,{value:"Module"})),xS={slug:"alignment",title:"对齐策略",group:"plugin",plugin:"AlignmentPlugin",intro:"shortest / balanced / sequential，切一下就能看出列高差在哪。",why:"卡片高差大又想让底部别太参差用 shortest（默认）；想每列张数一样用 balanced；位置可预测用 sequential。",plugs:[{fn:"createAlignmentPlugin",cfg:'mode: "{{mode}}"',why:"改写 alignmentMode，等价于 Core 的 props.alignmentMode，但可以按环境动态决定"}],props:["gap={12}","containerStyle={{ height: 420 }}"],note:"列高相同时三者都取最小索引列（左优先）—— 这是刻意保留的旧行为，别指望 balanced 会把第一张放到「看起来更空」的那列。",controls:[{key:"mode",label:"mode",kind:"select",init:"shortest",options:[{label:"shortest 最矮列（默认）",value:"shortest"},{label:"balanced 项数最少",value:"balanced"},{label:"sequential 按序轮转",value:"sequential"}]}]},wS=q({count:14,seed:2501,heightRange:[120,360],instrument:!0,plugins:e=>[tm({mode:String(e.cfg.mode)})],coreProps:()=>({columns:3,gap:12}),chrome:e=>d.jsxs("p",{className:"stage-tip",children:["当前策略 ",d.jsx("b",{children:String(e.cfg.mode)})," · ",e.items.length," 张卡 → 看三列底部是否齐"]})}),PS=Object.freeze(Object.defineProperty({__proto__:null,default:wS,meta:xS},Symbol.toStringTag,{value:"Module"})),kS={slug:"fixed-height",title:"固定高度",group:"plugin",plugin:"FixedHeightPlugin",intro:"统一每项高度，从错落流变成规整网格。",why:"视频封面墙、图库缩略网格这类要求「整行齐平」的版式，靠这个插件而不是给每张图写死 CSS。",plugs:[{fn:"createFixedHeightPlugin",cfg:"itemHeight: {{itemHeight}}",why:"改写 item.height，缩略图与文案一起放进固定高度的盒子里"}],props:["columns={3}","gap={12}","containerStyle={{ height: 420 }}"],note:"插件只改数据字段，不碰 DOM。卡片组件必须把 item.height 用上（示例里的 FeedCard 传 fixed 就是干这个），否则看起来「插件没生效」。",controls:[{key:"itemHeight",label:"itemHeight",kind:"number",init:176,min:100,max:260,step:4}]},SS=q({count:18,seed:2601,fixed:!0,variant:"video",instrument:!0,plugins:e=>[cm({itemHeight:Number(e.cfg.itemHeight)})],coreProps:()=>({columns:3,gap:12}),chrome:e=>d.jsxs("p",{className:"stage-tip",children:["统一高度 ",d.jsx("b",{children:Number(e.cfg.itemHeight)}),"px · 行高应完全一致（总高"," ",Math.round(e.meter.totalHeight),"px）"]})}),bS=Object.freeze(Object.defineProperty({__proto__:null,default:SS,meta:kS},Symbol.toStringTag,{value:"Module"})),CS={slug:"gap-plugin",title:"间距插件",group:"plugin",plugin:"GapPlugin",intro:"把行/列间距收到一处，还能按窗口宽度换档。",why:"多个页面要统一间距规范（或手机端要更紧）时，用插件的 responsive 比在每个页面写 CSS 断点稳。",plugs:[{fn:"createGapPlugin",cfg:"columnGap: {{columnGap}}, rowGap: {{rowGap}}, responsive: { sm: { columnGap: 8, rowGap: 8 } }",why:"间距集中配置，并按 sm/md/lg/xl 自动换档（阈值 768/992/1200）"}],props:["columns={3}","containerStyle={{ height: 420 }}"],note:"responsive 是「命中即覆盖」：桌面端如果也配了 lg，上面两个滑杆就会被 lg 顶掉（看着像没接上）。这页只给 sm，所以桌面端用手写值、窄于 768px 才切 8px。档位看的是 window 宽度，不是容器宽。",controls:[{key:"columnGap",label:"columnGap",kind:"number",init:16,min:0,max:40},{key:"rowGap",label:"rowGap",kind:"number",init:16,min:0,max:40}]},_S=q({count:26,seed:2701,instrument:!0,plugins:e=>[am({columnGap:Number(e.cfg.columnGap),rowGap:Number(e.cfg.rowGap),responsive:{sm:{columnGap:8,rowGap:8}}})],coreProps:()=>({columns:3}),chrome:e=>d.jsxs("p",{className:"stage-tip",children:["配置 ",d.jsx("b",{children:Number(e.cfg.columnGap)})," / ",d.jsx("b",{children:Number(e.cfg.rowGap)})," · 把窗口拉窄会切到 sm 档（8px）"]})}),TS=Object.freeze(Object.defineProperty({__proto__:null,default:_S,meta:CS},Symbol.toStringTag,{value:"Module"})),RS={slug:"virtual",title:"虚拟瀑布流",group:"plugin",capability:"virtualize",intro:"1000 项只渲染几十个 DOM —— 看「数据项 / 实际渲染」两个读数。",why:"上千项、项高可估（图片卡、商品卡）时开。几百项以内不必上虚拟化，Recycle 更省事（不卸载、图片不用重载）。",plugs:[],props:["items={thousandItems}",{text:"virtualize={{ overscan: {{overscan}}, adaptiveEstimate: true, estimateQuantile: {{estimateQuantile}} }}",when:e=>!!e.adaptive},{text:"virtualize={{ overscan: {{overscan}}, adaptiveEstimate: false, estimateHeight: {{estimateHeight}} }}",when:e=>!e.adaptive},"columns={3}","containerStyle={{ height: 420 }}"],note:"estimateHeight 只是「冷启动还没有任何实测样本」时的兜底。样本够 8 个之后，自适应改用实测高度的中位数（P50）——中位数让总高误差最小。注意重叠不靠「把估值抬高」解决：抬高只是把误差从「重叠」换成「滚动条虚长」，而后者更持久。真正压住重叠的是「量到真高就立刻重排」——误差只存在一帧，且通常落在视口外。关掉自适应则严格用 estimateHeight，可以自己体会「240 面对 190~350 的项高」会怎样。",controls:[{key:"overscan",label:"overscan（屏）",kind:"number",init:1,min:0,max:4},{key:"adaptive",label:"自适应估值",kind:"switch",init:!0,hint:"关掉后严格用 estimateHeight 排未测量项"},{key:"estimateQuantile",label:"分位",kind:"select",init:"0.5",options:[{label:"P50 中位数（默认，总高最准）",value:"0.5"},{label:"P75",value:"0.75"},{label:"P90（更保守，宁可留空）",value:"0.9"},{label:"P100（绝不重叠）",value:"1"}],when:e=>!!e.adaptive},{key:"estimateHeight",label:"estimateHeight",kind:"number",init:240,min:120,max:360,step:20,when:e=>!e.adaptive}]},$S=q({count:1e3,seed:2801,instrument:!0,plugins:()=>[],coreProps:e=>({columns:3,gap:12,virtualize:{overscan:Number(e.cfg.overscan),adaptiveEstimate:!!e.cfg.adaptive,estimateQuantile:Number(e.cfg.estimateQuantile??.5),estimateHeight:Number(e.cfg.estimateHeight)}}),chrome:e=>d.jsxs("p",{className:"stage-tip",children:[e.items.length," 项数据 → 实际渲染 ",d.jsx("b",{children:e.meter.rendered})," 个 · 总高"," ",d.jsx("b",{children:Math.round(e.meter.totalHeight)}),"px（按全量算，滚动中会随实测样本收敛）"]})}),MS=Object.freeze(Object.defineProperty({__proto__:null,default:$S,meta:RS},Symbol.toStringTag,{value:"Module"})),IS={slug:"virtual-dynamic",title:"虚拟瀑布流（动态高度）",group:"plugin",capability:"virtualize · dynamicHeights",intro:"900ms 后所有卡片高度 ×1.5 —— 看虚拟化怎么把估值换成实测值。",why:"图片类瀑布流必然「先估后测」。要保证滚动条不跳、总高最终准确，就得理解 estimateHeight 与 dynamicHeights 各自管什么。",plugs:[],props:["virtualize={{ overscan: 1, adaptiveEstimate: {{adaptive}}, dynamicHeights: {{{dynamicHeights}}} }}",{text:"  // adaptiveEstimate 关掉时才需要自己给 estimateHeight",when:e=>!e.adaptive},"columns={3}","containerStyle={{ height: 420 }}"],note:"dynamicHeights 关闭后，项高度变化不会触发重排 —— 需要自己调 ref.relayout()。虚拟化下项可能已卸载，measureItem 会返回缓存值而不是实时量。自适应估值（默认开）会跟着实测样本走，所以上面这一下 ×1.5 之后，未测量项的估值也会自动抬上去。",controls:[{key:"adaptive",label:"自适应估值",kind:"switch",init:!0,hint:"关掉后严格用 estimateHeight 排未测量项"},{key:"estimateHeight",label:"estimateHeight",kind:"number",init:240,min:120,max:360,step:20,when:e=>!e.adaptive},{key:"dynamicHeights",label:"dynamicHeights",kind:"switch",init:!0,hint:"关掉后高度变化不自动重排"}]},NS=q({count:400,seed:2901,instrument:!0,plugins:()=>[],coreProps:e=>({columns:3,gap:12,virtualize:{overscan:1,adaptiveEstimate:!!e.cfg.adaptive,estimateHeight:Number(e.cfg.estimateHeight),dynamicHeights:!!e.cfg.dynamicHeights}}),effect:e=>{const n=window.setTimeout(()=>{e.setItems(t=>t.map(r=>({...r,height:Math.round(r.height*1.5/8)*8}))),e.log("模拟图片加载完成：全部项高度 ×1.5，Core 重新测量并修正位置")},900);return()=>window.clearTimeout(n)},chrome:e=>d.jsxs("p",{className:"stage-tip",children:[e.items.length," 项 · 渲染 ",d.jsx("b",{children:e.meter.rendered})," · 总高"," ",d.jsx("b",{children:Math.round(e.meter.totalHeight)}),"px · 自适应"," ",d.jsx("b",{children:e.cfg.adaptive?"开":"关"})," · dynamicHeights"," ",d.jsx("b",{children:e.cfg.dynamicHeights?"开":"关"})]})}),ES=Object.freeze(Object.defineProperty({__proto__:null,default:NS,meta:IS},Symbol.toStringTag,{value:"Module"})),jS={slug:"throttle",title:"Throttle 插件",group:"plugin",plugin:"ThrottlePlugin",intro:"滚动回调 120ms 一次还是每帧一次，看读数差别。",why:"埋点、懒加载判断、侧边指示器这类「滚动时要做点事」的逻辑，不节流会直接把主线程拖住。",plugs:[{fn:"createThrottlePlugin",cfg:"scroll: {{scroll}}, resize: {{resize}}",why:"统一收口滚动/尺寸回调频率，比每个页面各写一个 throttle 稳"}],props:["columns={3}","containerStyle={{ height: 420 }}"],note:"节流的是回调，不是布局。想让「连续改尺寸时的重排」慢下来用 DebounceLayout（下一页）。",controls:[{key:"scroll",label:"scroll（ms）",kind:"number",init:16,min:0,max:200,step:8,nonLayout:!0},{key:"resize",label:"resize（ms）",kind:"number",init:120,min:0,max:400,step:20,nonLayout:!0}]},LS=q({count:120,seed:3001,instrument:!0,plugins:e=>[fm({scroll:Number(e.cfg.scroll),resize:Number(e.cfg.resize)})],coreProps:()=>({columns:3,gap:12}),chrome:e=>d.jsxs("p",{className:"stage-tip",children:["滚动回调 ",d.jsx("b",{children:e.meter.scrolls})," 次（阈值 ",Number(e.cfg.scroll),"ms）· 布局耗时"," ",d.jsx("b",{children:e.meter.layoutMs.toFixed(1)}),"ms —— 快速滚一遍再对比"]})}),OS=Object.freeze(Object.defineProperty({__proto__:null,default:LS,meta:jS},Symbol.toStringTag,{value:"Module"})),DS={slug:"debounce-layout",title:"DebounceLayout 插件",group:"plugin",plugin:"DebounceLayoutPlugin",intro:"连续拖宽度时只在停下后重排一次。",why:"容器尺寸会被连续改变的场景（拖拽分栏、展开收起、缩放预览）不做防抖，每帧都会全量重排。",plugs:[{fn:"createDebounceLayoutPlugin",cfg:"delay: {{delay}}",why:"把 debounceDelay 拉长到 300ms，连续 resize 只算最后一次"}],props:["columns={3}","containerStyle={{ height: 420 }}"],note:"防抖太大会有「松手后卡片才归位」的观感，200–300ms 是比较稳的区间。和 ThrottlePlugin 分工不同：那个管回调、这个管重排。",controls:[{key:"delay",label:"delay（ms）",kind:"number",init:300,min:0,max:600,step:20,nonLayout:!0},{key:"simWidth",label:"容器宽",kind:"number",init:780,min:380,max:1080,step:10}]},zS=q({count:36,seed:3101,instrument:!0,plugins:e=>[hm({delay:Number(e.cfg.delay)})],coreProps:e=>({columns:3,gap:12,containerStyle:{height:"var(--stage-h, 380px)",width:Number(e.cfg.simWidth)}}),chrome:e=>d.jsxs("p",{className:"stage-tip",children:["防抖 ",d.jsx("b",{children:Number(e.cfg.delay)}),"ms · 最近布局"," ",d.jsx("b",{children:e.meter.layoutMs.toFixed(1)}),"ms · 拖滑杆时观察它多久变一次"]})}),WS=Object.freeze(Object.defineProperty({__proto__:null,default:zS,meta:DS},Symbol.toStringTag,{value:"Module"})),AS={slug:"recycle",title:"Recycle 插件",group:"plugin",plugin:"RecyclePlugin",intro:"离屏项隐藏而不卸载 —— 图片不用重载，DOM 数量不变。打开「改用 virtualize」可以当场对照。",why:"几百项的长列表：卸载会丢图片缓存（滚回来又要下载），不处理又会一直重绘。Recycle 是中间那档。",plugs:[{fn:"createRecyclePlugin",cfg:"poolSize: {{poolSize}}",why:"视口外超出池子的项设 visibility:hidden，减少绘制但保留 DOM"}],props:["columns={3}","containerStyle={{ height: 420 }}",{text:"virtualize={{ overscan: 1 }}",when:e=>!!e.virtual}],note:"与 virtualize 互斥：一个隐藏 DOM、一个卸载 DOM，同开会互相打架（可见项被另一套逻辑当成离屏）。所以上面的开关一打开，Recycle 插件就不装了 —— 两种策略二选一。挑法：几百项、图片重、要保住图片缓存 → Recycle；上千项、要控 DOM 数 → virtualize。",controls:[{key:"poolSize",label:"poolSize",kind:"number",init:24,min:4,max:80,step:2,nonLayout:!0},{key:"virtual",label:"改用 virtualize",kind:"switch",init:!1,hint:"对照：卸载离屏 DOM（Recycle 是隐藏不卸载）"}]},HS=q({count:300,seed:3201,instrument:!0,plugins:e=>e.cfg.virtual?[]:[zm({poolSize:Number(e.cfg.poolSize)})],coreProps:e=>({columns:3,gap:12,...e.cfg.virtual?{virtualize:{overscan:1}}:null}),chrome:e=>d.jsx("div",{className:"stage-stats",children:d.jsxs("p",{className:"stage-tip",children:[e.items.length," 项 · DOM ",d.jsx("b",{children:e.meter.rendered})," 个 · 总高"," ",d.jsx("b",{children:Math.round(e.meter.totalHeight)}),"px · 布局"," ",d.jsx("b",{children:e.meter.layoutMs.toFixed(1)}),"ms ·"," ",e.cfg.virtual?"virtualize（卸载离屏，DOM 只剩几十个）":`Recycle（DOM 全留 300 个，只隐藏绘制，池子 ${Number(e.cfg.poolSize)}）`]})})}),FS=Object.freeze(Object.defineProperty({__proto__:null,default:HS,meta:AS},Symbol.toStringTag,{value:"Module"})),yl=240,BS={slug:"infinite-scroll",title:"InfiniteScroll 插件",group:"plugin",plugin:"InfiniteScrollPlugin",intro:"滚到底自动追加，加载完停在 240 项不再请求。",why:"信息流、图片流的标准做法。threshold 要在「用户快到底但还没到底」时触发，太小会看到空白等待。",plugs:[{fn:"createInfiniteScrollPlugin",cfg:"threshold: {{threshold}}",why:"把 props.reachBottomOffset 写成 threshold，并在 onReachBottom 里加并发锁与 hasMore 判断"}],props:["onLoadMore={loadMore}","columns={3}","containerStyle={{ height: 420 }}"],note:"与 PaginationPlugin 互斥：一个追加、一个切片，同开会「翻到第 2 页又看到第 1 页」。到上限时让插件 setState({ hasMore: false }) 或像这里在 onLoadMore 里短路。",controls:[{key:"threshold",label:"threshold（px）",kind:"number",init:400,min:100,max:900,step:50,nonLayout:!0}]},US=q({count:24,seed:3301,instrument:!0,plugins:e=>[Rm({threshold:Number(e.cfg.threshold)})],coreProps:e=>({columns:3,gap:12,onLoadMore:()=>{e.setItems(n=>n.length>=yl?n:[...n,...Zp({count:12,seed:3301+n.length*7})])}}),chrome:e=>{const n=e.items.length;return d.jsxs("p",{className:"stage-tip",children:["已加载 ",d.jsx("b",{children:n})," / ",yl," 项 ·"," ",n>=yl?"已到上限，不会再请求":`距底 ${Number(e.cfg.threshold)}px 时追加 12 项`]})}}),GS=Object.freeze(Object.defineProperty({__proto__:null,default:US,meta:BS},Symbol.toStringTag,{value:"Module"})),VS={slug:"pagination",title:"Pagination 插件",group:"plugin",plugin:"PaginationPlugin",intro:"pageIndex / pageSize 交给插件切片，翻页自动回顶。",why:"后台列表、搜索结果页：需要「第几页 / 共几页」这种确定性导航时用分页，不要用无限滚动。",plugs:[{fn:"createPaginationPlugin",cfg:"pageSize: {{pageSize}}, scrollToTop: true",why:"读 props.pageIndex（1 基）与 props.pageSize，对 items 切片"}],props:["pageIndex={{{pageIndex}}}","pageSize={{{pageSize}}}","scrollToTopOnPageChange","columns={4}","containerStyle={{ height: 420 }}"],note:"它排在 Filter/Sort/Search 之后（priority 10），所以页数是过滤后的总数。顺序反了会出现「第 2 页是空的」。",controls:[{key:"pageSize",label:"pageSize",kind:"number",init:12,min:4,max:36,step:2},{key:"pageIndex",label:"pageIndex",kind:"number",init:1,min:1,max:12}]},KS=q({count:48,seed:3401,instrument:!0,plugins:e=>[_m({pageSize:Number(e.cfg.pageSize),scrollToTop:!0})],coreProps:e=>{const n=Math.max(1,Math.ceil(48/Number(e.cfg.pageSize)));return{columns:4,gap:12,pageIndex:Math.min(Number(e.cfg.pageIndex),n),pageSize:Number(e.cfg.pageSize),scrollToTopOnPageChange:!0}},chrome:e=>{const n=Number(e.cfg.pageSize),t=Number(e.cfg.pageIndex),r=Math.max(1,Math.ceil(e.items.length/n)),o=Math.min(t,r);return d.jsxs("div",{className:"stage-pager",children:[d.jsx("button",{type:"button",disabled:o<=1,onClick:()=>e.setCfg("pageIndex",Math.max(1,o-1)),children:"上一页"}),d.jsxs("span",{children:["第 ",d.jsx("b",{children:o})," / ",r," 页 · 每页 ",n," · 共 ",e.items.length," 项",t>r?"（滑杆已越界，钳到最后一页）":""]}),d.jsx("button",{type:"button",disabled:o>=r,onClick:()=>e.setCfg("pageIndex",Math.min(r,o+1)),children:"下一页"})]})}}),QS=Object.freeze(Object.defineProperty({__proto__:null,default:KS,meta:VS},Symbol.toStringTag,{value:"Module"})),YS={slug:"filter",title:"Filter 插件",group:"plugin",plugin:"FilterPlugin",intro:"价格上限拖到哪，列表就剩到哪 —— 页数/总数跟着变。",why:"价格区间、库存、标签筛选：过滤必须发生在排序与分页之前，否则「第 2 页」会突然空掉。",plugs:[{fn:"createFilterPlugin",cfg:"predicate: (item) => item.price <= 500, scrollToTop: false",why:"在 transformProps 链的第一环删掉不匹配项（priority 40，排在排序/分页之前）"}],props:["filterFn={(item) => item.price <= {{maxPrice}}}","columns={4}","containerStyle={{ height: 420 }}"],note:"谓词抛错时按「保留」处理，不会让整表消失。条件变化后要不要回顶由 scrollToTop 决定。",controls:[{key:"maxPrice",label:"价格上限",kind:"number",init:500,min:50,max:900,step:50}]},qS=q({count:40,seed:3501,commerce:!0,variant:"product",instrument:!0,pluginKeys:[],plugins:()=>[Pm({predicate:e=>e.price<=500})],coreProps:e=>({columns:4,gap:12,filterFn:n=>n.price<=Number(e.cfg.maxPrice)}),chrome:e=>{const n=Number(e.cfg.maxPrice),t=e.items.filter(r=>r.price<=n).length;return d.jsxs("p",{className:"stage-tip",children:["¥ ≤ ",n," · 命中 ",d.jsx("b",{children:t})," / ",e.items.length," 项"]})}}),XS=Object.freeze(Object.defineProperty({__proto__:null,default:qS,meta:YS},Symbol.toStringTag,{value:"Module"})),vl={likes:(e,n)=>n.likes-e.likes,price:(e,n)=>e.price-n.price,fresh:(e,n)=>e.minutesAgo-n.minutesAgo,tall:(e,n)=>n.height-e.height},kr={likes:"点赞数 高→低",price:"价格 低→高",fresh:"发布时间 新→旧",tall:"高度 高→低"},JS={slug:"sort",title:"Sort 插件",group:"plugin",plugin:"SortPlugin",intro:"四种排序切换，卡片整体重排 —— 顺序变了而不是重新请求。",why:"「按热度 / 价格 / 最新」这类前端可解的排序，交给插件比让后端多个接口省事；但数据量大时还是应该由后端排。",plugs:[{fn:"createSortPlugin",cfg:"comparator: (a, b) => b.likes - a.likes",why:"在过滤之后、分页之前重排 items（priority 30）"}],props:["sortComparator={comparator}","columns={4}","containerStyle={{ height: 420 }}"],note:"优先读 props.sortComparator：所以页面切换排序方式时不用重建组件。comparator 必须是纯函数，且不能依赖 items 顺序（否则排序结果不稳定）。",controls:[{key:"sortBy",label:"排序方式",kind:"select",init:"likes",options:[{label:kr.likes,value:"likes"},{label:kr.price,value:"price"},{label:kr.fresh,value:"fresh"},{label:kr.tall,value:"tall"}]}]},ZS=q({count:32,seed:3601,commerce:!0,variant:"product",instrument:!0,pluginKeys:[],plugins:()=>[Sm({comparator:vl.likes})],coreProps:e=>({columns:4,gap:12,sortComparator:vl[String(e.cfg.sortBy)]??vl.likes,scrollToTopOnSortChange:!1}),chrome:e=>d.jsxs("p",{className:"stage-tip",children:["当前 ",d.jsx("b",{children:kr[String(e.cfg.sortBy)]})," · 首项应是「",String(e.cfg.sortBy)," 最靠前」的那张"]})}),eb=Object.freeze(Object.defineProperty({__proto__:null,default:ZS,meta:JS},Symbol.toStringTag,{value:"Module"})),nb={slug:"search",title:"Search 插件",group:"plugin",plugin:"SearchPlugin",intro:"边打字边过滤，输入框不失焦、滚动不乱跳。",why:"字段有限的本地搜索（标题、作者、标签）用插件就够；需要模糊匹配、拼音、分词时应该后端做。",plugs:[{fn:"createSearchPlugin",cfg:'fields: ["title", "author"]',why:"只扫指定字段，避免把 undefined 也扫一遍（priority 20，在排序之后、分页之前）"}],props:["searchQuery={query}","columns={3}","containerStyle={{ height: 420 }}"],note:"fields 不给会扫全部可枚举字段，容易误命中。scrollToTop 默认关，搜索后保留滚动位置反而更自然时别打开。"},tb=q({count:36,seed:3701,instrument:!0,pluginKeys:[],plugins:()=>[wa({fields:["title","author"]})],coreProps:e=>({columns:3,gap:12,searchQuery:String(e.cfg.query??""),scrollToTopOnSearchChange:!1}),chrome:e=>{const n=String(e.cfg.query??"").trim().toLowerCase(),t=n?e.items.filter(r=>r.title.toLowerCase().includes(n)||r.author.toLowerCase().includes(n)).length:e.items.length;return d.jsxs("div",{className:"stage-search",children:[d.jsx("input",{type:"search",placeholder:"搜标题或作者，如「咖啡」「林一白」",value:String(e.cfg.query??""),onChange:r=>e.setCfg("query",r.target.value)}),d.jsxs("span",{children:["命中 ",d.jsx("b",{children:t})," / ",e.items.length," 项",n?`（query="${n}"）`:""]})]})}}),rb=Object.freeze(Object.defineProperty({__proto__:null,default:tb,meta:nb},Symbol.toStringTag,{value:"Module"})),hc=Mm({showOverlay:!0}),ob={slug:"click-analytics",title:"ClickAnalytics 插件",group:"plugin",plugin:"ClickAnalyticsPlugin",intro:"点卡片，角上的计数 +1，日志同时记一条；「导出 JSON」把内存计数吐出来。",why:"「哪几张最常被点」这类轻量埋点，用插件比在 renderItem 里到处加 onClick 干净，也不会漏掉没渲染的路径。",plugs:[{fn:"createClickAnalyticsPlugin",cfg:"showOverlay: true, log: false",why:"订阅 onItemClick 累加计数并广播事件，角标只是可视化的开关"}],props:["columns={3}","containerStyle={{ height: 420 }}","onItemClick={(i, item) => track(item.id)}"],note:"showOverlay 生产环境应关掉（默认就是 false）。真实上报在 bus 上订阅 analytics:click —— 页面侧拿不到 bus 时，可以用 onItemClick 走自己的埋点函数，或者像右上角那样定时取 getStats() 批量上报（计数只在内存里，刷新即清零）。"},ib=q({count:20,seed:3801,instrument:!0,plugins:()=>[hc],coreProps:e=>({columns:3,gap:12,onItemClick:(n,t)=>e.log(`点击 #${n} · ${t.title}（bus 上同时广播 analytics:click）`)}),chrome:e=>d.jsxs("div",{className:"stage-stats",children:[d.jsx("p",{className:"stage-tip",children:"点几张卡：右上角数字是插件自己的计数"}),d.jsx("button",{type:"button",onClick:()=>{var t;const n=hc.getStats();e.log(`getStats() → ${JSON.stringify(n)}`),(t=navigator.clipboard)==null||t.writeText(JSON.stringify(n,null,2)).catch(()=>{})},children:"导出 JSON"})]})}),lb=Object.freeze(Object.defineProperty({__proto__:null,default:ib,meta:ob},Symbol.toStringTag,{value:"Module"})),sb={slug:"bookmark",title:"Bookmark 插件",group:"plugin",plugin:"BookmarkPlugin",intro:"滚到中间按 b，再滚别处按 r —— 回到刚才那一屏。",why:"长信息流里「刚才那条不错，等下回来看」，比让用户翻历史记录便宜得多。",plugs:[{fn:"createBookmarkPlugin",cfg:'storageKey: "demo-bookmark", scrollBehavior: "smooth"',why:"键盘监听 + localStorage，页面不用为「记位置」写任何逻辑"}],props:["columns={3}","containerStyle={{ height: 420 }}"],note:"记的是 scrollTop 绝对值，不是某一项：数据顺序变了书签就偏了。要「记住这条内容」请按 id 记（用 ScrollAnchor 那套）。"},ab=q({count:60,seed:3901,instrument:!0,plugins:()=>[Gm({storageKey:"demo-bookmark",scrollBehavior:"smooth"})],coreProps:()=>({columns:3,gap:12}),chrome:()=>d.jsxs(d.Fragment,{children:[d.jsx(Cv,{items:[["b","记住当前位置"],["r","跳回书签位置"]]}),d.jsx("p",{className:"stage-tip",children:"先滚到中间，按 b；再滚到别处，按 r"})]})}),ub=Object.freeze(Object.defineProperty({__proto__:null,default:ab,meta:sb},Symbol.toStringTag,{value:"Module"})),cb={slug:"url-sync",title:"URLSync 插件",group:"plugin",plugin:"URLSyncPlugin",intro:"条件写进 URL，刷新 / 分享都能复现同一屏。",why:"带筛选的后台列表、搜索结果页：一旦用户按了 F5 或把链接发给别人，条件不该丢。",plugs:[{fn:"createURLSyncPlugin",cfg:'mode: "search", keys: ["searchQuery"]',why:"把 props 上的 searchQuery 写进 URL，并在挂载时广播 URL 里的值"},{fn:"createSearchPlugin",cfg:'fields: ["title", "author"]',why:"URLSync 只负责搬运条件，真正过滤要靠搜索插件"}],props:["searchQuery={query}","columns={3}","containerStyle={{ height: 420 }}"],note:"keys 里必须是内核 props 上真实存在的键（searchQuery），写成 query 就永远写不进 URL。刷新页面后控件值会从 URL 回填，相当于「分享出去的那一屏」。"},db=q({count:24,seed:4001,instrument:!0,pluginKeys:[],plugins:()=>[Ym({mode:"search",keys:["searchQuery"]}),wa({fields:["title","author"]})],coreProps:e=>({columns:3,gap:12,searchQuery:String(e.cfg.query??""),scrollToTopOnSearchChange:!1}),effect:e=>{const n=new URLSearchParams(window.location.search).get("searchQuery");n&&(e.setCfg("query",n),e.log(`从 URL 回填 searchQuery="${n}"`))},chrome:e=>d.jsxs("div",{className:"stage-search",children:[d.jsx("input",{type:"search",placeholder:"输入关键词，地址栏会跟着变",value:String(e.cfg.query??""),onChange:n=>e.setCfg("query",n.target.value)}),d.jsx("code",{className:"stage-url",children:window.location.search||"（地址栏还没有参数）"})]})}),pb=Object.freeze(Object.defineProperty({__proto__:null,default:db,meta:cb},Symbol.toStringTag,{value:"Module"})),Go="demo-waterfall-state",mb={slug:"state-persistence",title:"StatePersistence 插件",group:"plugin",plugin:"StatePersistencePlugin",intro:"滚到哪、第几页，都记在本地；再打开接着看。",why:"详情页返回列表、刷新后回到原位置 —— 这类「像原生 App」的体验，靠它一行装配。",plugs:[{fn:"createStatePersistencePlugin",cfg:'storageKey: "demo-waterfall-state", persistScroll: true, persistKeys: ["pageIndex"]',why:"只注入一次（不是每次渲染都覆盖），避免和用户当前操作打架"}],props:["columns={3}","containerStyle={{ height: 420 }}"],note:"只在挂载时注入一次：所以它不会把用户后来的滚动「拽回去」。跨标签页同步不在它职责内（要自己听 storage 事件）。"};function fb(){const[e,n]=y.useState(()=>localStorage.getItem(Go)??""),t=y.useCallback(()=>n(localStorage.getItem(Go)??""),[]),r=y.useCallback(()=>{localStorage.removeItem(Go),n("")},[]);return d.jsxs("div",{className:"stage-storage",children:[d.jsx("code",{children:e||"（还没有存档 —— 先滚一下列表）"}),d.jsxs("span",{children:[d.jsx("button",{type:"button",onClick:t,children:"刷新读数"}),d.jsx("button",{type:"button",onClick:r,children:"清除存档"})]})]})}const gb=q({count:50,seed:4101,instrument:!0,plugins:()=>[Km({storageKey:Go,persistScroll:!0,persistKeys:["pageIndex"]})],coreProps:()=>({columns:3,gap:12}),chrome:()=>d.jsxs(d.Fragment,{children:[d.jsx("p",{className:"stage-tip",children:"滚到中间 → 切到「总览」再切回来，位置会被记住"}),d.jsx(fb,{})]})}),hb=Object.freeze(Object.defineProperty({__proto__:null,default:gb,meta:mb},Symbol.toStringTag,{value:"Module"})),yb={slug:"grouping",title:"Grouping 插件",group:"plugin",plugin:"GroupingPlugin",intro:"按标签分组，右下角浮层列出每组项数。",why:"壁纸墙、书签墙要「按分类看」，或要配合吸顶标题（下一页）—— 分组结果本身不是视觉，是给别的插件用的数据。",plugs:[{fn:"createGroupingPlugin",cfg:"groupBy: (item) => item.tag, showOverlay: true",why:"把 GROUPS（Map<组键, 索引数组>）写进 sharedData，供吸顶标题等插件消费"}],props:["columns={4}","containerStyle={{ height: 420 }}"],note:"分组只算索引，不改变排列顺序 —— 想「同组连在一起」得自己按组重排数据再传进来（或用 SortPlugin）。",controls:[{key:"overlay",label:"显示分组浮层",kind:"switch",init:!0}]},vb=q({count:32,seed:4201,instrument:!0,plugins:e=>[Pa({groupBy:n=>n.tag,showOverlay:!!e.cfg.overlay})],coreProps:()=>({columns:4,gap:10}),chrome:e=>{const n=new Map;return e.items.forEach(t=>n.set(t.tag,(n.get(t.tag)??0)+1)),d.jsxs("p",{className:"stage-tip",children:[n.size," 组：",[...n.entries()].sort((t,r)=>r[1]-t[1]).map(([t,r])=>`${t} ${r}`).join(" · ")]})}}),xb=Object.freeze(Object.defineProperty({__proto__:null,default:vb,meta:yb},Symbol.toStringTag,{value:"Module"})),wb={slug:"sticky-header",title:"StickyHeader 插件",group:"plugin",plugin:"StickyHeaderPlugin",intro:"滚动时顶部浮着当前分组标题。",why:"分类壁纸墙、按频道分的视频列表：滚着滚着忘了自己在哪个分类里。",plugs:[{fn:"createStickyHeaderPlugin",cfg:'title: "当前分组", showHint: true',why:"在滚动容器内渲染 sticky 标题条，靠 renderOverlay 而不是改版式"},{fn:"createGroupingPlugin",cfg:"groupBy: (item) => item.tag",why:"标题条要读 GROUPS 的首组名，没有分组插件它只能显示兜底文案"}],props:["columns={4}","containerStyle={{ height: 420 }}"],note:"只跟首组。真要做「跟随当前组」，插件需要订阅 grouping:change，并在 onScroll 里用 visibleRange 反查当前组 —— 这一页故意不藏这个限制。"},Pb=q({count:40,seed:4301,instrument:!0,plugins:()=>[Bm({title:"当前分组",showHint:!0}),Pa({groupBy:e=>e.tag})],coreProps:()=>({columns:4,gap:10}),chrome:()=>d.jsx("p",{className:"stage-tip",children:"向下滚：标题条会贴在瀑布流容器顶部"})}),kb=Object.freeze(Object.defineProperty({__proto__:null,default:Pb,meta:wb},Symbol.toStringTag,{value:"Module"})),Sb={slug:"scroll-anchor",title:"ScrollAnchor 插件",group:"plugin",plugin:"ScrollAnchorPlugin",intro:"点标签跳到对应那篇 —— 走 bus 事件，不是直接调 ref。",why:"目录、锚点导航、站内搜索定位：跳转逻辑应该在插件里，页面只负责「发一个 id 出去」。",plugs:[{fn:"createScrollAnchorPlugin",cfg:"getAnchorId: (item) => item.id",why:"按 id 反查索引并调 context.scrollToItem，落点由插件算"},{fn:"createAnchorBridgePlugin",why:"本页内联的自定义插件：window 上的 wf:anchor 事件 → bus.emit('anchor:scrollToId')",local:!0}],props:["columns={3}","containerStyle={{ height: 420 }}"],note:"1.x 里这类插件会「自己造一个 bus 挂在 window 上」，其实是同一个问题的不同解法。桥接插件顺带示范了 onMount 返回清理函数 —— 旧版 withPlugins 从不执行它，监听会泄漏。"};function bb(){return{name:"AnchorBridgePlugin",enabled:!0,hooks:{onMount:e=>{const n=t=>{var o;const r=(o=t.detail)==null?void 0:o.id;r&&e.bus.emit("anchor:scrollToId",{id:r})};return window.addEventListener("wf:anchor",n),()=>window.removeEventListener("wf:anchor",n)}}}}const Cb=q({count:30,seed:4401,instrument:!0,plugins:()=>[Om({getAnchorId:e=>e.id}),bb()],coreProps:()=>({columns:3,gap:12}),chrome:e=>d.jsxs("div",{className:"stage-anchors",children:[d.jsx("span",{children:"跳到第"}),[0,6,12,18,24].map(n=>d.jsxs("button",{type:"button",onClick:()=>{const t=e.items[n];t&&(window.dispatchEvent(new CustomEvent("wf:anchor",{detail:{id:t.id}})),e.log(`dispatch wf:anchor { id: "${t.id}" } → 插件转成 bus → scrollToItem(${n})`))},children:["#",n," 项"]},n)),d.jsx("span",{className:"muted",children:"（走 window 事件 → bus → 插件）"})]})}),_b=Object.freeze(Object.defineProperty({__proto__:null,default:Cb,meta:Sb},Symbol.toStringTag,{value:"Module"}));function Tb(e,n,t){const r=e.slice(),[o]=r.splice(n,1);return r.splice(t,0,o),r}const Rb={slug:"drag-reorder",title:"DragReorder 插件",group:"plugin",plugin:"DragReorderPlugin",intro:"拖一张卡到别的位置，松手后数组真的变了。",why:"书签墙、看板、排序自定义：用户直接拖比「上移/下移」按钮直观得多。",plugs:[{fn:"createDragReorderPlugin",cfg:"showHandle: true, onReorder: (from, to) => setItems((prev) => move(prev, from, to))",why:"鼠标走 HTML5 draggable、触屏走长按 + pointer，把起止索引交回来；数据变更完全由页面掌控"}],props:["columns={3}","containerStyle={{ height: 420 }}"],note:"showHandle 只是「虚线手柄」，接真实版式时关掉。插件不写 localStorage 也不调接口 —— 落库要自己在 onReorder 里做。鼠标走原生 HTML5 拖拽；触屏上 `draggable` 根本不触发，所以另有 pointer 路径（长按 180ms 进入拖拽，可用 touchHoldMs 调）。"},$b=q({count:18,seed:4501,instrument:!0,plugins:e=>[jm({showHandle:!0,onReorder:(n,t,r)=>{e.setItems(o=>Tb(o,n,t)),e.log(`拖拽 #${n} → #${t}（${(r==null?void 0:r.title)??"未知项"}），数组已重排`)}})],coreProps:()=>({columns:3,gap:12}),chrome:()=>d.jsx("p",{className:"stage-tip",children:"鼠标：拖卡片右上角手柄 · 触屏：长按卡片 180ms 后拖动 —— 松手后看位置与顺序变化"})}),Mb=Object.freeze(Object.defineProperty({__proto__:null,default:$b,meta:Rb},Symbol.toStringTag,{value:"Module"})),Ib={slug:"a11y",title:"A11y 插件",group:"plugin",plugin:"A11yPlugin",intro:"容器 role=list、项 role=listitem，一键读出来验证。",why:"瀑布流本质是列表，但 div 堆出来的结构对读屏软件等于不存在。这个插件把语义补齐，成本极低。",plugs:[{fn:"createA11yPlugin",cfg:'containerRole: "list", itemRole: "listitem", containerLabel: "示例卡片列表", enableTabIndex: false',why:"在 onMount / onLayoutComplete 里写语义属性（不是渲染期副作用），项用 renderItemWrapper 包一层"}],props:["columns={3}","containerStyle={{ height: 420 }}"],note:"enableTabIndex 打开后每张卡都能 Tab 到，键盘可达但 Tab 会很累 —— 除非卡片真的可操作，否则保持关闭，用 roving tabindex 更好。"},Nb=q({count:16,seed:4601,instrument:!0,plugins:()=>[Am({containerRole:"list",itemRole:"listitem",containerLabel:"示例卡片列表",enableTabIndex:!1})],coreProps:()=>({columns:3,gap:12}),chrome:e=>d.jsxs("div",{className:"stage-a11y",children:[d.jsx("button",{type:"button",onClick:()=>{var r;const n=(r=e.ref.current)==null?void 0:r.getContainer();if(!n){e.log("容器还没挂载","warn");return}const t=n.querySelector("[data-index]");e.log(`容器 role="${n.getAttribute("role")??"无"}" aria-label="${n.getAttribute("aria-label")??"无"}"`),e.log(`首项 role="${(t==null?void 0:t.getAttribute("role"))??"无"}" tabIndex="${(t==null?void 0:t.getAttribute("tabindex"))??"无"}"`)},children:"检查 DOM 属性"}),d.jsx("span",{className:"muted",children:"结果写到右栏日志"})]})}),Eb=Object.freeze(Object.defineProperty({__proto__:null,default:Nb,meta:Ib},Symbol.toStringTag,{value:"Module"}));function jb(){return typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Lb(){const[,e]=wt.useState(0),n=jb();return d.jsxs("div",{className:"stage-stats",children:[d.jsxs("p",{className:"stage-tip",children:["系统偏好 reduce motion：",d.jsx("b",{children:n?"是 → 过渡已清掉":"否 → 过渡生效（240ms）"})]}),d.jsx("button",{type:"button",onClick:()=>e(t=>t+1),children:"重新检测"})]})}const Ob={slug:"reduced-motion",title:"ReducedMotion 插件",group:"plugin",plugin:"ReducedMotionPlugin",intro:"系统开了「减少动态效果」，过渡与 transform 自动关掉。",why:"前庭功能障碍用户会被大幅位移的动画伤到。这不是可选项 —— 尊重系统偏好是基本无障碍要求。",plugs:[{fn:"createReducedMotionPlugin",cfg:"disableTransform: true, removeTransitions: true",why:"读 matchMedia，命中后关掉过渡与 transform 定位"},{fn:"createTransitionPlugin",cfg:"duration: 240",why:"装在这里是为了被 ReduceMotion 关掉 —— 用来验证它真的生效"}],props:["columns={3}","containerStyle={{ height: 420 }}"],note:"两个插件同开不是冲突：ReducedMotion 的 priority(65) 更高，会先执行并清掉过渡。验证方法：改系统设置，或在 DevTools 里模拟 prefers-reduced-motion；运行中切换会即时生效（插件监听 matchMedia 的 change），但定位方式要等下一次重渲染才切过来。"},Db=q({count:26,seed:4701,instrument:!0,plugins:()=>[vm({disableTransform:!0,removeTransitions:!0}),xa({duration:240})],coreProps:()=>({columns:3,gap:12}),chrome:()=>d.jsx(Lb,{})}),zb=Object.freeze(Object.defineProperty({__proto__:null,default:Db,meta:Ob},Symbol.toStringTag,{value:"Module"})),Wb={slug:"transition",title:"Transition 插件",group:"plugin",plugin:"TransitionPlugin",intro:"打乱顺序，看卡片是滑过去还是瞬移。",why:"筛选、排序、拖拽后布局会大幅变化，没有过渡会显得「闪一下」；加上 200–300ms 就顺了。",plugs:[{fn:"createTransitionPlugin",cfg:'duration: {{duration}}, easing: "cubic-bezier(.22,.61,.36,1)"',why:"只加 CSS 过渡（transform / opacity），不参与布局计算"}],props:["columns={3}","containerStyle={{ height: 420 }}"],note:"把 duration 拖到 0 就等于关掉。过渡期间 item 的 transform 是中间值，用 transform 读位置的工具会读到中间态。",controls:[{key:"duration",label:"duration（ms）",kind:"number",init:260,min:0,max:800,step:20}]},Ab=q({count:24,seed:4801,instrument:!0,plugins:e=>[xa({duration:Number(e.cfg.duration)})],coreProps:()=>({columns:3,gap:12}),chrome:e=>d.jsxs("div",{className:"stage-anchors",children:[d.jsx("button",{type:"button",onClick:()=>{e.setItems(n=>{const t=n.slice();for(let r=t.length-1;r>0;r--){const o=Math.floor(Math.random()*(r+1));[t[r],t[o]]=[t[o],t[r]]}return t}),e.log(`打乱顺序（过渡 ${Number(e.cfg.duration)}ms）`)},children:"打乱顺序"}),d.jsx("span",{className:"muted",children:"duraton 拖到 0 再点一次，就是瞬移"})]})}),Hb=Object.freeze(Object.defineProperty({__proto__:null,default:Ab,meta:Wb},Symbol.toStringTag,{value:"Module"})),Fb={slug:"pin-item",title:"PinItem 插件",group:"plugin",plugin:"PinItemPlugin",intro:"第 0、1 项钉在第 1 列顶部，普通项自动让位。",why:"「置顶公告 + 信息流」「推荐位固定在第一列」这类需求，用插件比把置顶内容塞进数据里干净。",plugs:[{fn:"createPinItemPlugin",cfg:"pinnedIndices: [0, 1], column: {{column}}",why:"在 calculateItemPosition 里把置顶项固定到指定列顶部，并下推同列普通项"}],props:["columns={3}","containerStyle={{ height: 420 }}"],note:"置顶项索引要小（0..n）：如果置顶的索引大于该列已排好的项，只会把后续项往下推、已布局的不回退，视觉上会重叠。同一列多条置顶按数组顺序纵向下堆。",controls:[{key:"column",label:"钉到第几列（0 基）",kind:"number",init:0,min:0,max:2}]},Bb=q({count:22,seed:4901,instrument:!0,plugins:e=>[pm({pinnedIndices:[0,1],column:Number(e.cfg.column)})],coreProps:()=>({columns:3,gap:12}),decorate:(e,n,t)=>({pinned:[0,1].includes(t)&&Number(e.cfg.column)>=0}),chrome:e=>d.jsxs("p",{className:"stage-tip",children:["置顶项：",d.jsx("b",{children:"#0 #1"})," · 钉在第 ",d.jsx("b",{children:Number(e.cfg.column)+1})," 列（角标写着「置顶」）"]})}),Ub=Object.freeze(Object.defineProperty({__proto__:null,default:Bb,meta:Fb},Symbol.toStringTag,{value:"Module"})),yc=Nm({showOverlay:!0}),Gb={slug:"heatmap-analytics",title:"HeatmapAnalytics 插件",group:"plugin",plugin:"HeatmapAnalyticsPlugin",intro:"滚一遍，顶部汇总条告诉你曝光了多少次、点了多少下。",why:"内容分发要看「哪些真的被看到了」，不是「哪些被加载了」。曝光埋点交给插件，业务侧只消费汇总。",plugs:[{fn:"createHeatmapAnalyticsPlugin",cfg:"showOverlay: true",why:"在项进入视口时累加曝光、点击时累加点击，并在 onLayoutComplete 补一次首屏统计"}],props:["columns={4}","containerStyle={{ height: 420 }}"],note:"首屏曝光靠 onLayoutComplete 补一次，否则第一帧显示 0。真实上报要自己做去重与批次（插件只负责计数）——「导出 JSON」拿到的就是 `getStats()` 的形状：总曝光、总点击、每项明细。"},Vb=q({count:36,seed:5001,instrument:!0,plugins:()=>[yc],coreProps:e=>{let n=0;return{columns:4,gap:10,onItemEnterViewport:t=>{n+=1,n<=8&&e.log(`曝光 #${t}（Core 的可见事件，插件也在数）`,"info")}}},chrome:e=>d.jsxs("div",{className:"stage-stats",children:[d.jsx("p",{className:"stage-tip",children:"滚一遍：顶部条是开关，卡片角上是单卡曝光/点击次数"}),d.jsx("button",{type:"button",onClick:()=>{var t;const n=yc.getStats();e.log(`getStats() → 曝光 ${n.totalViews} / 点击 ${n.totalClicks} / 有数据项 ${n.items.length}`),(t=navigator.clipboard)==null||t.writeText(JSON.stringify(n,null,2)).catch(()=>{})},children:"导出 JSON"})]})}),Kb=Object.freeze(Object.defineProperty({__proto__:null,default:Vb,meta:Gb},Symbol.toStringTag,{value:"Module"})),Qb=`/**
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
`,Yb=`/**
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
`,qb=`/**
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
`,Xb=`/**
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
`,Jb=`/**\r
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
`,Zb=`/**
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
`,eC=`/**
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
`,nC=`/**
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
`,tC=`/**
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
`,rC=`/**
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
`,oC=`/**
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
`,iC=`/**\r
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
`,lC=`/**\r
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
`,sC=`/**
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
`,aC=`/**
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
`,uC=`/**
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
`,cC=`/**
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
`,dC=`/**
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
`,pC=`/**
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
`,mC=`/**\r
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
`,fC=`/**\r
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
`,gC=`/**
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
`,hC=`/**
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
`,yC=`/**
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
`,vC=`/**
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
`,xC=`/**\r
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
`,wC=`/**\r
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
`,PC=`/**\r
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
`,kC=`/**\r
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
`,SC=`/**
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
`,bC=`/**
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
`,CC=`/**
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
`,_C=`/**
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
`,TC=`/**\r
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
`,RC=Object.assign({"./01-basic.tsx":Rv,"./02-columns.tsx":Iv,"./03-gap.tsx":jv,"./04-ref.tsx":Wv,"./05-lifecycle.tsx":Fv,"./06-advanced.tsx":Gv,"./07-responsive-columns.tsx":gS,"./08-auto-column.tsx":vS,"./09-alignment.tsx":PS,"./10-fixed-height.tsx":bS,"./11-gap-plugin.tsx":TS,"./12-virtual.tsx":MS,"./13-virtual-dynamic.tsx":ES,"./14-throttle.tsx":OS,"./15-debounce-layout.tsx":WS,"./16-recycle.tsx":FS,"./17-infinite-scroll.tsx":GS,"./18-pagination.tsx":QS,"./19-filter.tsx":XS,"./20-sort.tsx":eb,"./21-search.tsx":rb,"./22-click-analytics.tsx":lb,"./23-bookmark.tsx":ub,"./24-url-sync.tsx":pb,"./25-state-persistence.tsx":hb,"./26-grouping.tsx":xb,"./27-sticky-header.tsx":kb,"./28-scroll-anchor.tsx":_b,"./29-drag-reorder.tsx":Mb,"./30-a11y.tsx":Eb,"./31-reduced-motion.tsx":zb,"./32-transition.tsx":Hb,"./33-pin-item.tsx":Ub,"./34-heatmap-analytics.tsx":Kb}),$C=Object.assign({"./01-basic.tsx":Qb,"./02-columns.tsx":Yb,"./03-gap.tsx":qb,"./04-ref.tsx":Xb,"./05-lifecycle.tsx":Jb,"./06-advanced.tsx":Zb,"./07-responsive-columns.tsx":eC,"./08-auto-column.tsx":nC,"./09-alignment.tsx":tC,"./10-fixed-height.tsx":rC,"./11-gap-plugin.tsx":oC,"./12-virtual.tsx":iC,"./13-virtual-dynamic.tsx":lC,"./14-throttle.tsx":sC,"./15-debounce-layout.tsx":aC,"./16-recycle.tsx":uC,"./17-infinite-scroll.tsx":cC,"./18-pagination.tsx":dC,"./19-filter.tsx":pC,"./20-sort.tsx":mC,"./21-search.tsx":fC,"./22-click-analytics.tsx":gC,"./23-bookmark.tsx":hC,"./24-url-sync.tsx":yC,"./25-state-persistence.tsx":vC,"./26-grouping.tsx":xC,"./27-sticky-header.tsx":wC,"./28-scroll-anchor.tsx":PC,"./29-drag-reorder.tsx":kC,"./30-a11y.tsx":SC,"./31-reduced-motion.tsx":bC,"./32-transition.tsx":CC,"./33-pin-item.tsx":_C,"./34-heatmap-analytics.tsx":TC}),MC=e=>e.replace(/^\.\//,""),hs=Object.entries(RC).map(([e,n])=>{const t=MC(e);return{meta:n.meta,Stage:n.default,file:t,source:$C[e]??""}}).sort((e,n)=>e.file.localeCompare(n.file)),IC=["basic","advanced","plugin"],M_=Array.from(new Set(hs.map(e=>e.meta.plugin).filter(e=>!!e))).sort(),ys={basic:{label:"基础功能",hint:"Core 自身的 props"},advanced:{label:"高级功能",hint:"ref / 事件 / 杂项配置"},plugin:{label:"插件功能",hint:"一插件一页"}};function vc(e){const n={};for(const t of e.controls??[])n[t.key]=t.init;return n}const NC="import|from|export|default|function|return|const|let|var|new|if|else|for|of|in|while|switch|case|break|continue|type|interface|extends|implements|as|satisfies|await|async|throw|try|catch|finally|class|typeof|instanceof|delete|void|yield",EC="true|false|null|undefined|this|super",jC="number|string|boolean|object|any|unknown|never|React|HTMLElement|void",xc=new RegExp([String.raw`(\/\/[^\n]*|\/\*[\s\S]*?\*\/)`,String.raw`(\`(?:\\[\s\S]|[^\\\`])*\`|"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*')`,String.raw`\b(${NC})\b`,String.raw`\b(${EC})\b`,String.raw`\b(${jC})\b`,String.raw`(<\/?[A-Za-z][\w.$]*)`,String.raw`\b(\d+(?:\.\d+)?)\b`].join("|"),"g"),wc=["tok-comment","tok-string","tok-kw","tok-lit","tok-type","tok-tag","tok-num"];function LC(e){const n=[];let t=0;xc.lastIndex=0;let r;for(;r=xc.exec(e);){r.index>t&&n.push({text:e.slice(t,r.index),cls:null});const o=wc.findIndex((i,l)=>r[l+1]!==void 0);n.push({text:r[0],cls:o>=0?wc[o]:null}),t=r.index+r[0].length}return t<e.length&&n.push({text:e.slice(t),cls:null}),n}function Pc(e){try{const n=document.createElement("textarea");n.value=e,n.setAttribute("readonly",""),n.style.position="fixed",n.style.opacity="0",document.body.appendChild(n),n.select();const t=document.execCommand("copy");return document.body.removeChild(n),t}catch{return!1}}function OC({code:e,title:n="tsx",collapseAfter:t=24,maxHeight:r}){const[o,i]=y.useState("idle"),[l,s]=y.useState(!1),a=y.useMemo(()=>e.replace(/\s+$/,"").split(`
`),[e]),u=t>0&&a.length>t,p=u&&!l?a.slice(0,t).join(`
`):e,c=y.useMemo(()=>LC(p),[p]),m=y.useCallback(async()=>{var x;let g=!1;if((x=navigator.clipboard)!=null&&x.writeText)try{await navigator.clipboard.writeText(e),g=!0}catch{g=Pc(e)}else g=Pc(e);i(g?"ok":"fail"),window.setTimeout(()=>i("idle"),1600)},[e]);return d.jsxs("div",{className:"code",children:[d.jsxs("div",{className:"code-head",children:[d.jsx("span",{children:n}),d.jsxs("span",{style:{display:"flex",gap:6,alignItems:"center"},children:[d.jsxs("span",{children:[a.length," 行"]}),d.jsx("button",{type:"button",className:`code-copy${o==="ok"?" is-ok":o==="fail"?" is-fail":""}`,onClick:m,children:o==="ok"?"已复制":o==="fail"?"复制失败":"复制"})]})]}),d.jsx("pre",{style:r?{maxHeight:r}:{maxHeight:"none"},children:d.jsx("code",{children:c.map((g,x)=>g.cls?d.jsx("span",{className:g.cls,children:g.text},x):d.jsx(wt.Fragment,{children:g.text},x))})}),u?d.jsx("button",{type:"button",className:"code-more",onClick:()=>s(g=>!g),children:l?"收起":`展开余下 ${a.length-t} 行`}):null]})}function qm(e){return e.props??e.config??[]}function DC({doc:e}){var o,i,l;const n=qm(e),t=e.events??[],r=e.methods??[];return d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:"doc-sec",children:[d.jsx("h5",{children:"属性 Props"}),n.length?d.jsxs("table",{className:"doc-table",children:[d.jsx("thead",{children:d.jsxs("tr",{children:[d.jsx("th",{children:"属性"}),d.jsx("th",{children:"类型"}),d.jsx("th",{children:"默认"}),d.jsx("th",{children:"说明"})]})}),d.jsx("tbody",{children:n.map(s=>d.jsxs("tr",{children:[d.jsx("td",{children:d.jsx("code",{children:s.name})}),d.jsx("td",{children:d.jsx("code",{className:"dim",children:s.type})}),d.jsx("td",{children:d.jsx("code",{className:"dim",children:s.default??"-"})}),d.jsx("td",{children:s.description??"—"})]},s.name))})]}):d.jsx("p",{className:"doc-note",children:"无可配置属性，工厂零参调用即可。"})]}),d.jsxs("div",{className:"doc-sec",children:[d.jsx("h5",{children:"事件 Events"}),t.length?d.jsxs("table",{className:"doc-table",children:[d.jsx("thead",{children:d.jsxs("tr",{children:[d.jsx("th",{children:"事件"}),d.jsx("th",{children:"触发时机"}),d.jsx("th",{children:"说明"})]})}),d.jsx("tbody",{children:t.map(s=>d.jsxs("tr",{children:[d.jsx("td",{children:d.jsx("code",{children:s.name})}),d.jsx("td",{children:s.when}),d.jsx("td",{children:s.description})]},s.name))})]}):d.jsx("p",{className:"doc-note",children:"不参与任何事件。"})]}),d.jsxs("div",{className:"doc-sec",children:[d.jsx("h5",{children:"方法 Methods"}),r.length?d.jsxs("table",{className:"doc-table",children:[d.jsx("thead",{children:d.jsxs("tr",{children:[d.jsx("th",{children:"方法"}),d.jsx("th",{children:"签名"}),d.jsx("th",{children:"说明"})]})}),d.jsx("tbody",{children:r.map(s=>d.jsxs("tr",{children:[d.jsx("td",{children:d.jsx("code",{children:s.name})}),d.jsx("td",{children:d.jsx("code",{className:"dim",children:s.signature})}),d.jsx("td",{children:s.description})]},s.name))})]}):d.jsx("p",{className:"doc-note",children:e.methodsNote??"不调用上下文方法。"})]}),d.jsxs("div",{className:"doc-cols",children:[(o=e.features)!=null&&o.length?d.jsxs("div",{children:[d.jsx("h5",{children:"能做"}),d.jsx("ul",{children:e.features.map(s=>d.jsx("li",{children:s},s))})]}):null,(i=e.useCases)!=null&&i.length?d.jsxs("div",{children:[d.jsx("h5",{children:"适合"}),d.jsx("ul",{children:e.useCases.map(s=>d.jsx("li",{children:s},s))})]}):null,(l=e.notes)!=null&&l.length?d.jsxs("div",{children:[d.jsx("h5",{children:"注意"}),d.jsx("ul",{children:e.notes.map(s=>d.jsx("li",{children:s},s))})]}):null]})]})}function zC({factory:e,priority:n,summary:t,doc:r,defaultOpen:o=!0}){var l,s;const i={props:qm(r).length,events:((l=r.events)==null?void 0:l.length)??0,methods:((s=r.methods)==null?void 0:s.length)??0};return d.jsxs("details",{className:"api-plug",open:o,children:[d.jsxs("summary",{children:[d.jsx("code",{children:e}),d.jsxs("span",{className:"tag tag-accent",children:["priority ",n]}),d.jsx("span",{className:"api-plug-desc",children:t}),d.jsxs("span",{className:"api-plug-n",children:[i.props," 属性 · ",i.events," 事件 · ",i.methods," 方法"]})]}),d.jsx("div",{className:"api-plug-body",children:d.jsx(DC,{doc:r})})]})}const WC=/create[A-Z]\w*Plugin/g;function AC(e){return(e.match(/create[A-Z]\w*Plugin/)??[e])[0]}function Xm(e){return e.dir?`create${e.dir}`:AC(e.factory)}function HC(e){return new Set(e.match(WC)??[])}function FC(e,n){const t=HC(e);return n.filter(r=>t.has(Xm(r))).sort((r,o)=>r.priority-o.priority)}function BC({source:e,plugins:n,heading:t="本页用到的插件"}){const r=y.useMemo(()=>FC(e,n),[e,n]);return r.length===0?null:d.jsxs("section",{className:"api-sec",children:[d.jsxs("div",{className:"api-sec-head",children:[d.jsxs("h2",{className:"api-sec-title",children:[t," · ",r.length," 个"]}),d.jsxs("p",{className:"api-sec-sub",children:["就是上面代码里装配的全部成员。属性是工厂参数，事件是父组件传进来的回调， 方法是插件读取 / 调用的上下文能力 —— 表内容与 ",d.jsx("code",{children:"doc.json"})," 同源，随包发布。"]})]}),r.map(o=>d.jsx(zC,{factory:Xm(o),priority:o.priority,summary:o.summary??o.doc.description??"",doc:o.doc},o.factory))]})}const UC=`import type { WaterfallPlugin } from "../../components/WaterfallPlugin/plugins/types";

export type AlignmentMode = "shortest" | "balanced" | "sequential";

export type AlignmentConfig = {
  /** 列分配策略 */
  mode: AlignmentMode;
};

/**
 * AlignmentPlugin - 控制瀑布流列分配策略
 * 通过设置 props.alignmentMode 来影响核心布局算法的列选择逻辑
 */
// T 默认 unknown：见 components/WaterfallPlugin/plugins/types.ts 的「泛型默认值说明」
export function createAlignmentPlugin<T = unknown>(config: AlignmentConfig): WaterfallPlugin<T> {
  return {
    name: "AlignmentPlugin",
    priority: 60,
    enabled: true,
    hooks: {
      transformProps: (props) => {
        return { ...props, alignmentMode: config.mode };
      },
      onResize: (context) => {
        context.relayout?.();
      },
    },
  };
}
`,GC=`import type {
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
// T 默认 unknown：见 components/WaterfallPlugin/plugins/types.ts 的「泛型默认值说明」
export function createAutoColumnPlugin<T = unknown>(
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
`,VC=`import type { WaterfallPlugin } from "../../components/WaterfallPlugin/plugins/types";

export type DebounceConfig = {
  /** 布局防抖延迟（ms） */
  delay: number;
};

/**
 * DebounceLayoutPlugin - 调整核心布局的防抖延迟
 */
// T 默认 unknown：见 components/WaterfallPlugin/plugins/types.ts 的「泛型默认值说明」
export function createDebounceLayoutPlugin<T = unknown>(config: DebounceConfig): WaterfallPlugin<T> {
  return {
    name: "DebounceLayoutPlugin",
    priority: 75,
    enabled: true,
    hooks: {
      transformProps: (props) => {
        return { ...props, debounceDelay: config.delay };
      },
    },
  };
}
`,KC=`import type { WaterfallPlugin } from "../../components/WaterfallPlugin/plugins/types";

/** T 默认 unknown：与 plugins/types.ts 的泛型默认值说明同源（配置类型常被简写引用） */
export type FilterConfig<T = unknown> = {
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
// T 默认 unknown：见 components/WaterfallPlugin/plugins/types.ts 的「泛型默认值说明」
export function createFilterPlugin<T = unknown>(config: FilterConfig<T> = {}): WaterfallPlugin<T> {
  return {
    name: "FilterPlugin",
    priority: 40,
    enabled: true,
    hooks: {
      transformProps: (props) => {
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
        return { ...props, items: filtered };
      },
      onPropsChange: (context, prevProps, nextProps) => {
        const prevFn = prevProps.filterFn;
        const nextFn = nextProps.filterFn;
        const enabledFromProps = typeof nextProps.scrollToTopOnFilterChange === "boolean"
          ? nextProps.scrollToTopOnFilterChange
          : undefined;
        const shouldScroll = (enabledFromProps ?? Boolean(config.scrollToTop)) && prevFn !== nextFn;
        if (shouldScroll) {
          const behavior: "auto" | "smooth" = nextProps.scrollToTopBehavior ?? config.scrollBehavior ?? "auto";
          context.scrollToTop?.({ behavior });
        }
      },
    },
  };
}
`,QC=`import type { WaterfallPlugin } from "../../components/WaterfallPlugin/plugins/types";

export type FixedHeightConfig = {
  /** 固定项高度（像素） */
  itemHeight: number;
};

/**
 * FixedHeightPlugin - 将所有项的高度统一为固定值（Grid风格）
 * 通过 transformProps 生成新的 items，使得 renderItem 使用统一高度
 */
// T 默认 unknown：见 components/WaterfallPlugin/plugins/types.ts 的「泛型默认值说明」
export function createFixedHeightPlugin<T = unknown>(config: FixedHeightConfig): WaterfallPlugin<T> {
  return {
    name: "FixedHeightPlugin",
    priority: 45,
    enabled: true,
    hooks: {
      transformProps: (props) => {
        const { itemHeight } = config;
        const newItems = (props.items || []).map((item) => {
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
`,YC=`import type {
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
// T 默认 unknown：见 components/WaterfallPlugin/plugins/types.ts 的「泛型默认值说明」
export function createGapPlugin<T = unknown>(config: GapConfig): WaterfallPlugin<T> {
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
`,qC=`import type {
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
// T 默认 unknown：见 components/WaterfallPlugin/plugins/types.ts 的「泛型默认值说明」
export function createInfiniteScrollPlugin<T = unknown>(
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
`,XC=`import type { WaterfallPlugin } from "../../components/WaterfallPlugin/plugins/types";

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
// T 默认 unknown：见 components/WaterfallPlugin/plugins/types.ts 的「泛型默认值说明」
export function createPaginationPlugin<T = unknown>(config: PaginationConfig = {}): WaterfallPlugin<T> {
  return {
    name: "PaginationPlugin",
    priority: 10,
    enabled: true,
    hooks: {
      transformProps: (props) => {
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
        return { ...props, items: sliced };
      },
      onPropsChange: (context, prevProps, nextProps) => {
        // 仅在页码变化时触发“滚动到顶部”逻辑
        const prevIndex = Math.max(1, Number(prevProps.pageIndex ?? 1));
        const nextIndex = Math.max(1, Number(nextProps.pageIndex ?? 1));
        const enabledFromProps = typeof nextProps.scrollToTopOnPageChange === "boolean"
          ? nextProps.scrollToTopOnPageChange
          : undefined;
        const shouldScroll = (enabledFromProps ?? Boolean(config.scrollToTop)) && prevIndex !== nextIndex;
        if (shouldScroll) {
          const behavior: "auto" | "smooth" = nextProps.scrollToTopBehavior ?? config.scrollBehavior ?? "auto";
          context.scrollToTop?.({ behavior });
        }
      },
    },
  };
}
`,JC=`import type {
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
// T 默认 unknown：见 components/WaterfallPlugin/plugins/types.ts 的「泛型默认值说明」
export function createPinItemPlugin<T = unknown>(config: PinItemConfig): WaterfallPlugin<T> {
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
`,ZC=`import type {
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
// T 默认 unknown：见 components/WaterfallPlugin/plugins/types.ts 的「泛型默认值说明」
export function createRecyclePlugin<T = unknown>(config: RecycleConfig): WaterfallPlugin<T> {
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
`,e_=`import type { WaterfallPlugin } from "../../components/WaterfallPlugin/plugins/types";
import type { WaterfallCoreProps } from "../../components/WaterfallPlugin/WaterfallCore";\r
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
// T 默认 unknown：见 components/WaterfallPlugin/plugins/types.ts 的「泛型默认值说明」
export function createReducedMotionPlugin<T = unknown>(\r
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
        if (!prefersReduce) return props;\r
\r
        const next: WaterfallCoreProps<T> = { ...props };\r
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
`,n_=`import type {
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
// T 默认 unknown：见 components/WaterfallPlugin/plugins/types.ts 的「泛型默认值说明」
export function createResponsiveColumnsPlugin<T = unknown>(
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
`,t_=`import type { WaterfallPlugin } from "../../components/WaterfallPlugin/plugins/types";

/** T 默认 unknown：与 plugins/types.ts 的泛型默认值说明同源（配置类型常被简写引用） */
export type SearchConfig<T = unknown> = {
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
// T 默认 unknown：见 components/WaterfallPlugin/plugins/types.ts 的「泛型默认值说明」
export function createSearchPlugin<T = unknown>(config: SearchConfig<T> = {}): WaterfallPlugin<T> {
  const fields = config.fields ?? [];
  return {
    name: "SearchPlugin",
    priority: 20,
    enabled: true,
    hooks: {
      transformProps: (props) => {
        const query: string = String(props.searchQuery ?? "").trim();
        const items: T[] = Array.isArray(props.items) ? props.items : [];
        if (!query) return props;
        const q = query.toLowerCase();
        const filtered = items.filter((item) => {
          if (typeof item !== "object" || item === null) return false;
          const keys = fields.length > 0 ? fields : (Object.keys(item) as (keyof T)[]);
          for (const k of keys) {
            const v = (item as Record<string, unknown>)[k as string];
            if (v != null && String(v).toLowerCase().includes(q)) return true;
          }
          return false;
        });
        return { ...props, items: filtered };
      },
      onPropsChange: (context, prevProps, nextProps) => {
        const prevQuery = String(prevProps.searchQuery ?? "");
        const nextQuery = String(nextProps.searchQuery ?? "");
        const enabledFromProps = typeof nextProps.scrollToTopOnSearchChange === "boolean"
          ? nextProps.scrollToTopOnSearchChange
          : undefined;
        const shouldScroll = (enabledFromProps ?? Boolean(config.scrollToTop)) && prevQuery !== nextQuery;
        if (shouldScroll) {
          const behavior: "auto" | "smooth" = nextProps.scrollToTopBehavior ?? config.scrollBehavior ?? "auto";
          context.scrollToTop?.({ behavior });
        }
      },
    },
  };
}
`,r_=`import type { WaterfallPlugin } from "../../components/WaterfallPlugin/plugins/types";

/** T 默认 unknown：与 plugins/types.ts 的泛型默认值说明同源（配置类型常被简写引用） */
export type SortConfig<T = unknown> = {
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
// T 默认 unknown：见 components/WaterfallPlugin/plugins/types.ts 的「泛型默认值说明」
export function createSortPlugin<T = unknown>(config: SortConfig<T> = {}): WaterfallPlugin<T> {
  return {
    name: "SortPlugin",
    priority: 30,
    enabled: true,
    hooks: {
      transformProps: (props) => {
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
        return { ...props, items: sorted };
      },
      onPropsChange: (context, prevProps, nextProps) => {
        const prevCmp = prevProps.sortComparator;
        const nextCmp = nextProps.sortComparator;
        const enabledFromProps = typeof nextProps.scrollToTopOnSortChange === "boolean"
          ? nextProps.scrollToTopOnSortChange
          : undefined;
        const shouldScroll = (enabledFromProps ?? Boolean(config.scrollToTop)) && prevCmp !== nextCmp;
        if (shouldScroll) {
          const behavior: "auto" | "smooth" = nextProps.scrollToTopBehavior ?? config.scrollBehavior ?? "auto";
          context.scrollToTop?.({ behavior });
        }
      },
    },
  };
}
`,o_=`import type {\r
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
// T 默认 unknown：见 components/WaterfallPlugin/plugins/types.ts 的「泛型默认值说明」
export function createStatePersistencePlugin<T = unknown>(config: StatePersistenceConfig = {}): WaterfallPlugin<T> {\r
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
  function read(): Record<string, unknown> | null {\r
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
  function write(data: Record<string, unknown>) {\r
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
        const next: Record<string, unknown> = { ...props };\r
        let changed = false;\r
        persistKeys.forEach((k) => {\r
          if (snap[k] !== undefined) {\r
            next[k] = snap[k];\r
            changed = true;\r
          }\r
        });\r
        if (changed) initialInjected = true;\r
        // 值是「运行时键 + 原始 props 形状」：props 用 Record 收窄后需回到原类型
        return next as unknown as typeof props;\r
      },\r
      onMount: (context) => {\r
        const snap = read();\r
        if (!snap) return;\r
        // 滚动位置**不在这里恢复**：onMount 时内容总高还是 0，\r
        // scrollTo 会被钳到 0，看起来像「恢复没生效」。等首次布局完成再恢复（见下）\r
        // 广播持久化的键，便于页面采用\r
        const restored: Record<string, unknown> = {};\r
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
        const data: Record<string, unknown> = { ...snap };\r
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
        const data: Record<string, unknown> = {};\r
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
`,i_=`import type { WaterfallPlugin } from "../../components/WaterfallPlugin/plugins/types";

export type ThrottleConfig = {
  /** 滚动节流（ms） */
  scroll: number;
  /** 尺寸变化防抖（ms），用于容器 Resize 相关 */
  resize?: number;
};

/**
 * ThrottlePlugin - 通过 transformProps 调整核心的滚动节流与尺寸变化防抖
 */
// T 默认 unknown：见 components/WaterfallPlugin/plugins/types.ts 的「泛型默认值说明」
export function createThrottlePlugin<T = unknown>(config: ThrottleConfig): WaterfallPlugin<T> {
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
        };
      },
    },
  };
}
`,l_=`import type { WaterfallPlugin } from "../../components/WaterfallPlugin/plugins/types";

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
// T 默认 unknown：见 components/WaterfallPlugin/plugins/types.ts 的「泛型默认值说明」
export function createTransitionPlugin<T = unknown>(
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
`,s_=`import type { WaterfallPlugin } from "../../components/WaterfallPlugin/plugins/types";\r
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
// T 默认 unknown：见 components/WaterfallPlugin/plugins/types.ts 的「泛型默认值说明」
export function createURLSyncPlugin<T = unknown>(config: URLSyncConfig = {}): WaterfallPlugin<T> {\r
  const mode = config.mode || "hash";\r
  const keys = config.keys || ["pageIndex", "pageSize", "searchQuery"];\r
  /** 首次读到的 URL 快照：既用于注入 props，也用于判断「这次 props 变化要不要写 URL」 */\r
  let initialParams: Record<string, unknown> | null = null;\r
  let initialInjected = false;\r
  const getInitialParams = (): Record<string, unknown> => {\r
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
        const state: Record<string, unknown> = {};\r
        keys.forEach((k) => {\r
          const v = params.get(k);\r
          if (v !== null) state[k] = v;\r
        });\r
        return state;\r
      } else {\r
        const params = new URLSearchParams(window.location.search);\r
        const state: Record<string, unknown> = {};\r
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
  function writeToURL(next: Record<string, unknown>) {\r
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
        const next: Record<string, unknown> = { ...props };\r
        let changed = false;\r
        keys.forEach((k) => {\r
          if (initial[k] !== undefined) {\r
            next[k] = initial[k];\r
            changed = true;\r
          }\r
        });\r
        if (changed) initialInjected = true;\r
        // 值是「运行时键 + 原始 props 形状」：props 用 Record 收窄后需回到原类型
        return next as unknown as typeof props;\r
      },\r
      onMount: (context) => {\r
        context.bus?.emit("urlsync:init", getInitialParams());\r
      },\r
      onPropsChange: (context, _prev, nextProps) => {\r
        const next: Record<string, unknown> = {};\r
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
`,a_=`import type {
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
// T 默认 unknown：见 components/WaterfallPlugin/plugins/types.ts 的「泛型默认值说明」
export function createA11yPlugin<T = unknown>(config: A11yConfig = {}): WaterfallPlugin<T> {
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
`,u_=`import type { WaterfallPlugin } from "../../components/WaterfallPlugin/plugins/types";

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
// T 默认 unknown：见 components/WaterfallPlugin/plugins/types.ts 的「泛型默认值说明」
export function createBookmarkPlugin<T = unknown>(config: BookmarkConfig = {}): WaterfallPlugin<T> {
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
`,c_=`import type {
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
// T 默认 unknown：见 components/WaterfallPlugin/plugins/types.ts 的「泛型默认值说明」
export function createClickAnalyticsPlugin<T = unknown>(
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
        // value 形状由本插件的 key 约定决定（数字计数），读取处断言
        const total = (context.sharedData?.get("click-count") as number | undefined) || 0;
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
`,d_=`import type {
  WaterfallPlugin,
  WaterfallPluginContext,
} from "../../components/WaterfallPlugin/plugins/types";

export type DragReorderConfig<T = unknown> = {
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
// T 默认 unknown：见 components/WaterfallPlugin/plugins/types.ts 的「泛型默认值说明」
export function createDragReorderPlugin<T = unknown>(
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
`,p_=`import type {
  WaterfallPlugin,
  WaterfallPluginContext,
} from "../../components/WaterfallPlugin/plugins/types";

/** T 默认 unknown：与 plugins/types.ts 的泛型默认值说明同源（配置类型常被简写引用） */
export type GroupingConfig<T = unknown> = {
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
// T 默认 unknown：见 components/WaterfallPlugin/plugins/types.ts 的「泛型默认值说明」
export function createGroupingPlugin<T = unknown>(
  config: GroupingConfig<T> = {}
): WaterfallPlugin<T> {
  const groupBy: (item: T, index: number) => string | number =
    config.groupBy ??
    ((item) =>
      (item as unknown as { category?: string | number } | null | undefined)?.category ??
      "default");
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
        // value 形状由本插件的 key 约定决定（compute 写入），读取处断言
        const groups: Map<string | number, number[]> =
          (context.sharedData.get(KEY) as Map<string | number, number[]> | undefined) ??
          new Map();
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
`,m_=`import type {
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
// T 默认 unknown：见 components/WaterfallPlugin/plugins/types.ts 的「泛型默认值说明」
export function createHeatmapAnalyticsPlugin<T = unknown>(
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
`,f_=`import type { WaterfallPlugin } from "../../components/WaterfallPlugin/plugins/types";

/** T 默认 unknown：与 plugins/types.ts 的泛型默认值说明同源（配置类型常被简写引用） */
export type ScrollAnchorConfig<T = unknown> = {
  /** 通过此函数提取锚点 id（默认使用 item.id） */
  getAnchorId?: (item: T, index: number) => string | number | undefined;
};

/**
 * ScrollAnchorPlugin - 滚动锚点（实验版）
 * - 渲染一个简单的锚点跳转控件
 * - 支持通过 bus 事件 anchor:scrollToId 跳转
 */
// T 默认 unknown：见 components/WaterfallPlugin/plugins/types.ts 的「泛型默认值说明」
export function createScrollAnchorPlugin<T = unknown>(config: ScrollAnchorConfig<T> = {}): WaterfallPlugin<T> {
  const getAnchorId: (item: T, index: number) => string | number | undefined =
    config.getAnchorId ||
    ((item) => (item as unknown as { id?: string | number } | null | undefined)?.id);
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
`,g_=`import type { WaterfallPlugin } from "../../components/WaterfallPlugin/plugins/types";

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
// T 默认 unknown：见 components/WaterfallPlugin/plugins/types.ts 的「泛型默认值说明」
export function createStickyHeaderPlugin<T = unknown>(config: StickyHeaderConfig = {}): WaterfallPlugin<T> {
  const title = config.title || "分组标题";
  const showHint = config.showHint ?? false;
  return {
    name: "StickyHeaderPlugin",
    enabled: true,
    hooks: {
      renderOverlay: (context) => {
        // value 形状由 GroupingPlugin 的 key 约定决定（GROUPS / GROUP_INDEX），读取处断言
        const groups: Map<string | number, number[]> =
          (context.sharedData?.get("GROUPS") as Map<string | number, number[]> | undefined) ||
          new Map();
        const indexMap: Map<number, string | number> | undefined =
          context.sharedData?.get("GROUP_INDEX") as Map<number, string | number> | undefined;
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
`,I_={layout:"布局",perf:"性能与动效",data:"数据管线",interaction:"交互与埋点",ui:"语义与状态"},kc=["layout","perf","data","interaction","ui"],Sc=Object.assign({"/src/custom-plugins/A11yPlugin/doc.json":Wm,"/src/custom-plugins/AlignmentPlugin/doc.json":nm,"/src/custom-plugins/AutoColumnPlugin/doc.json":rm,"/src/custom-plugins/BookmarkPlugin/doc.json":Um,"/src/custom-plugins/ClickAnalyticsPlugin/doc.json":$m,"/src/custom-plugins/DebounceLayoutPlugin/doc.json":gm,"/src/custom-plugins/DragReorderPlugin/doc.json":Em,"/src/custom-plugins/FilterPlugin/doc.json":wm,"/src/custom-plugins/FixedHeightPlugin/doc.json":um,"/src/custom-plugins/GapPlugin/doc.json":sm,"/src/custom-plugins/GroupingPlugin/doc.json":Hm,"/src/custom-plugins/HeatmapAnalyticsPlugin/doc.json":Im,"/src/custom-plugins/InfiniteScrollPlugin/doc.json":Tm,"/src/custom-plugins/PaginationPlugin/doc.json":Cm,"/src/custom-plugins/PinItemPlugin/doc.json":dm,"/src/custom-plugins/RecyclePlugin/doc.json":Dm,"/src/custom-plugins/ReducedMotionPlugin/doc.json":ym,"/src/custom-plugins/ResponsiveColumnsPlugin/doc.json":im,"/src/custom-plugins/ScrollAnchorPlugin/doc.json":Lm,"/src/custom-plugins/SearchPlugin/doc.json":bm,"/src/custom-plugins/SortPlugin/doc.json":km,"/src/custom-plugins/StatePersistencePlugin/doc.json":Vm,"/src/custom-plugins/StickyHeaderPlugin/doc.json":Fm,"/src/custom-plugins/ThrottlePlugin/doc.json":mm,"/src/custom-plugins/TransitionPlugin/doc.json":xm,"/src/custom-plugins/URLSyncPlugin/doc.json":Qm}),h_=Object.assign({"/src/custom-plugins/AlignmentPlugin/create.ts":UC,"/src/custom-plugins/AutoColumnPlugin/create.ts":GC,"/src/custom-plugins/DebounceLayoutPlugin/create.ts":VC,"/src/custom-plugins/FilterPlugin/create.ts":KC,"/src/custom-plugins/FixedHeightPlugin/create.ts":QC,"/src/custom-plugins/GapPlugin/create.ts":YC,"/src/custom-plugins/InfiniteScrollPlugin/create.ts":qC,"/src/custom-plugins/PaginationPlugin/create.ts":XC,"/src/custom-plugins/PinItemPlugin/create.ts":JC,"/src/custom-plugins/RecyclePlugin/create.ts":ZC,"/src/custom-plugins/ReducedMotionPlugin/create.ts":e_,"/src/custom-plugins/ResponsiveColumnsPlugin/create.ts":n_,"/src/custom-plugins/SearchPlugin/create.ts":t_,"/src/custom-plugins/SortPlugin/create.ts":r_,"/src/custom-plugins/StatePersistencePlugin/create.ts":o_,"/src/custom-plugins/ThrottlePlugin/create.ts":i_,"/src/custom-plugins/TransitionPlugin/create.ts":l_,"/src/custom-plugins/URLSyncPlugin/create.ts":s_}),y_=Object.assign({"/src/custom-plugins/A11yPlugin/create.tsx":a_,"/src/custom-plugins/BookmarkPlugin/create.tsx":u_,"/src/custom-plugins/ClickAnalyticsPlugin/create.tsx":c_,"/src/custom-plugins/DragReorderPlugin/create.tsx":d_,"/src/custom-plugins/GroupingPlugin/create.tsx":p_,"/src/custom-plugins/HeatmapAnalyticsPlugin/create.tsx":m_,"/src/custom-plugins/ScrollAnchorPlugin/create.tsx":f_,"/src/custom-plugins/StickyHeaderPlugin/create.tsx":g_}),bc={...h_,...y_},Jm=e=>e.replace(/^.*\/custom-plugins\//,"").replace(/\/.*$/,"");function v_(e){const n=Object.keys(bc).find(o=>Jm(o)===e),t=n?bc[n]:"",r=/priority:\s*(\d+)/.exec(t);return r?Number(r[1]):0}function x_(e){const n=Object.keys(Sc).find(t=>Jm(t)===e);return n?Sc[n]:{name:e,description:"（缺少 doc.json）"}}const w_=[{dir:"AutoColumnPlugin",group:"layout",make:()=>om({minColumnWidth:200,maxColumns:4})},{dir:"ResponsiveColumnsPlugin",group:"layout",make:()=>lm({breakpoints:{sm:{width:0,columns:2},md:{width:700,columns:3},lg:{width:1020,columns:4}}})},{dir:"AlignmentPlugin",group:"layout",make:()=>tm({mode:"shortest"})},{dir:"GapPlugin",group:"layout",make:()=>am({columnGap:14,rowGap:14})},{dir:"FixedHeightPlugin",group:"layout",make:()=>cm({itemHeight:180})},{dir:"PinItemPlugin",group:"layout",make:()=>pm({pinnedIndices:[0],column:0})},{dir:"ThrottlePlugin",group:"perf",make:()=>fm({scroll:16,resize:120})},{dir:"DebounceLayoutPlugin",group:"perf",make:()=>hm({delay:160})},{dir:"TransitionPlugin",group:"perf",make:()=>xa({duration:240})},{dir:"ReducedMotionPlugin",group:"perf",make:()=>vm()},{dir:"FilterPlugin",group:"data",make:()=>Pm({predicate:e=>e.price<=500})},{dir:"SortPlugin",group:"data",make:()=>Sm({comparator:(e,n)=>n.likes-e.likes})},{dir:"SearchPlugin",group:"data",make:()=>wa({fields:["title","author"]})},{dir:"PaginationPlugin",group:"data",make:()=>_m({pageSize:18})},{dir:"InfiniteScrollPlugin",group:"data",make:()=>Rm({threshold:400})},{dir:"ClickAnalyticsPlugin",group:"interaction",make:()=>Mm({showOverlay:!0})},{dir:"HeatmapAnalyticsPlugin",group:"interaction",make:()=>Nm({showOverlay:!0})},{dir:"DragReorderPlugin",group:"interaction",make:()=>jm({showHandle:!0})},{dir:"ScrollAnchorPlugin",group:"interaction",make:()=>Om({})},{dir:"RecyclePlugin",group:"interaction",make:()=>zm({poolSize:24})},{dir:"A11yPlugin",group:"ui",make:()=>Am({enableTabIndex:!1})},{dir:"GroupingPlugin",group:"ui",make:()=>Pa({groupBy:e=>e.tag})},{dir:"StickyHeaderPlugin",group:"ui",make:()=>Bm({title:"工坊预览"})},{dir:"BookmarkPlugin",group:"ui",make:()=>Gm({storageKey:"demo-workshop-bookmark"})},{dir:"StatePersistencePlugin",group:"ui",make:()=>Km({storageKey:"demo-workshop-state",persistScroll:!0})},{dir:"URLSyncPlugin",group:"ui",make:()=>Ym({mode:"search",keys:["searchQuery"]})}],vs=w_.map(e=>{const n=x_(e.dir);return{dir:e.dir,factory:`create${e.dir}`,group:e.group,priority:v_(e.dir),summary:n.description,doc:n,make:e.make}}).sort((e,n)=>kc.indexOf(e.group)-kc.indexOf(n.group)||n.priority-e.priority),N_=[{a:"AutoColumnPlugin",b:"ResponsiveColumnsPlugin",why:"两者都改列数，AutoColumn 按最小列宽算、Responsive 按断点表算，同时开会交替覆盖"},{a:"TransitionPlugin",b:"ReducedMotionPlugin",why:"ReducedMotion 会去掉过渡，同开等于把 Transition 关掉（不是错误，但别指望有动效）"},{a:"InfiniteScrollPlugin",b:"PaginationPlugin",why:"一个追加、一个切片，叠在一起会出现「翻到第 2 页又看到第 1 页」"},{a:"RecyclePlugin",b:"virtualize",why:"Recycle 改 visibility、virtualize 直接卸载 DOM，同开互相打架"}],E_=["AutoColumnPlugin","GapPlugin","TransitionPlugin","A11yPlugin"],P_=/\{\{\s*([\w-]+)\s*\}\}/g;function Cc(e,n){return e.replace(P_,(t,r)=>r in n?String(n[r]):t)}function k_(e,n){const t=e.plugs.map(a=>a.fn).sort(),r=t.length>3,o=t.length?r?`import {
${t.map(a=>`  ${a},`).join(`
`)}
} from "vane-waterfall/custom-plugins";`:`import { ${t.join(", ")} } from "vane-waterfall/custom-plugins";`:"// 这一页只用 Core props，不需要任何插件",i=e.plugs.map(a=>`  ${a.fn}(${a.cfg?`{ ${Cc(a.cfg,n)} }`:""}),`).join(`
`),l=e.props.filter(a=>typeof a=="string"||!a.when||a.when(n)).map(a=>`      ${Cc(typeof a=="string"?a:a.text,n)}`).join(`
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
`}function S_({entry:e,order:n}){var w;const{meta:t,Stage:r,file:o,source:i}=e,[l,s]=y.useState(()=>vc(t)),[a,u]=y.useState([]),[p,c]=y.useState("minimal"),m=y.useCallback((P,h="event")=>{const f=new Date().toLocaleTimeString("zh-CN",{hour12:!1});u(v=>[{id:v.length+1,at:f,text:P,kind:h},...v].slice(0,60))},[]),g=y.useCallback((P,h)=>{s(f=>({...f,[P]:h}))},[]),x=y.useMemo(()=>k_(t,l),[t,l]);return d.jsxs("section",{className:"demo","data-demo":t.slug,children:[d.jsxs("header",{className:"demo-head",children:[d.jsxs("div",{className:"demo-folio",children:[d.jsx("span",{className:"demo-no",children:String(n).padStart(2,"0")}),d.jsx("em",{children:"plate"})]}),d.jsxs("div",{children:[d.jsxs("div",{className:"demo-title-row",children:[d.jsx("h2",{children:t.title}),d.jsx("span",{className:"demo-group",children:ys[t.group].label}),t.plugin?d.jsx("code",{className:"demo-plugin",children:t.plugin}):null]}),d.jsx("p",{className:"demo-intro",children:t.intro}),d.jsxs("p",{className:"demo-why",children:[d.jsx("b",{children:"什么时候用"}),t.why]})]}),d.jsxs("div",{className:"demo-meta",children:[d.jsxs("div",{className:"demo-meta-row",children:[d.jsx("span",{children:"file"}),d.jsx("b",{children:o})]}),d.jsxs("div",{className:"demo-meta-row",children:[d.jsx("span",{children:"group"}),d.jsx("b",{children:ys[t.group].label})]}),d.jsxs("div",{className:"demo-meta-row",children:[d.jsx("span",{children:"plugs"}),d.jsx("b",{children:t.plugs.length?`${t.plugs.length} installed`:"core only"})]})]})]}),(w=t.controls)!=null&&w.length?d.jsxs("div",{className:"demo-controls",children:[d.jsx(Sv,{controls:t.controls,cfg:l,onChange:g}),d.jsx("button",{type:"button",className:"demo-reset",onClick:()=>{s(vc(t)),u([])},children:"重置"})]}):null,d.jsxs("div",{className:"demo-body",children:[d.jsxs("figure",{className:"plate",children:[d.jsxs("figcaption",{className:"plate-cap",children:[d.jsx("b",{children:"stage"}),d.jsxs("span",{children:[t.tone==="light"?"light surface":"live render",t.stageHeight?` · ${t.stageHeight}px`:""]}),d.jsx("em",{children:"live"})]}),d.jsx("div",{className:"plate-ruler","aria-hidden":!0}),d.jsx("div",{className:`plate-body demo-stage${t.tone==="light"?" tone-light":""}`,style:{"--stage-h":`${t.stageHeight??380}px`},children:d.jsx(r,{cfg:l,log:m,setCfg:g})})]}),d.jsxs("aside",{className:"demo-side",children:[d.jsx("div",{className:"demo-plugs",children:t.plugs.length===0?d.jsx("span",{className:"demo-plug is-core",children:"仅 Core props"}):t.plugs.map(P=>d.jsx("span",{className:`demo-plug${P.local?" is-local":""}`,children:P.fn.replace(/^create|Plugin$/g,"")},P.fn))}),d.jsx("ul",{className:"demo-why-list",children:t.plugs.map(P=>d.jsxs("li",{children:[d.jsx("code",{children:P.fn}),d.jsx("span",{children:P.why})]},P.fn))}),t.note?d.jsxs("p",{className:"demo-note",children:["⚠ ",t.note]}):null,d.jsx(em,{lines:a,empty:t.plugs.length>0?"还没触发 —— 拖上面的控件，或滚动 / 点卡片":"这一页没有事件类行为，日志留白"})]})]}),d.jsxs("div",{className:"demo-code",children:[d.jsxs("div",{className:"demo-switch",role:"tablist",children:[d.jsx("button",{type:"button",role:"tab","aria-selected":p==="minimal",className:p==="minimal"?"is-active":"",onClick:()=>c("minimal"),children:"最小装配"}),d.jsx("button",{type:"button",role:"tab","aria-selected":p==="full",className:p==="full"?"is-active":"",onClick:()=>c("full"),children:"完整源码"})]}),d.jsx(OC,{code:p==="minimal"?x:i,title:p==="minimal"?`${t.slug}.minimal.tsx`:o,collapseAfter:p==="minimal"?0:26,maxHeight:420},p)]}),d.jsx(BC,{source:i,plugins:vs})]})}const b_=y.lazy(()=>va(()=>import("./HomePage-aMlv2unH.js"),__vite__mapDeps([0,1]),import.meta.url).then(e=>({default:e.HomePage}))),C_=y.lazy(()=>va(()=>import("./PluginsPage-DvbL9l8v.js"),[],import.meta.url).then(e=>({default:e.PluginsPage}))),__=y.lazy(()=>va(()=>import("./ScenariosPage-BpUg0QHg.js"),__vite__mapDeps([2,1]),import.meta.url).then(e=>({default:e.ScenariosPage}))),T_={pkg:"vane-waterfall",brand:"V",subtitle:"排版台 / plugin index",nav:[{to:"/",label:"总览",hint:"overview"},{to:"/plugins",label:"插件工坊",hint:`${vs.length} plugins`},{to:"/scenarios",label:"场景示例",hint:"13 plates"}],routes:[{path:"/",element:d.jsx(b_,{})},{path:"/plugins",element:d.jsx(C_,{})},{path:"/scenarios",element:d.jsx(__,{})}],crumb:e=>e.startsWith("/plugins")?"workshop · 插件工坊":e.startsWith("/scenarios")?"plates · 场景示例":"index · 总览",demos:{label:"逐项示例",groups:IC.map(e=>({key:e,label:ys[e].label})),entries:hs,detail:(e,n)=>d.jsx(S_,{entry:e,order:n})},footer:[`${vs.length} PLUGINS · 13 PLATES`,`${hs.length} DEMOS · D1-A / D2-A`]};function R_(){return d.jsx(Uy,{config:T_})}zp(document.getElementById("root")).render(d.jsx(R_,{}));export{Ym as A,fm as B,OC as C,hs as D,Pa as E,kv as F,kc as G,Bm as H,Om as I,pc as J,zm as K,gs as L,hm as M,Nm as N,vs as P,wv as T,ac as W,M_ as a,am as b,om as c,xa as d,E_ as e,N_ as f,I_ as g,vm as h,Rm as i,d as j,Am as k,pm as l,Zp as m,Mm as n,Pm as o,Sm as p,_m as q,y as r,lm as s,Gm as t,cm as u,tm as v,vv as w,Km as x,jm as y,wa as z};
