const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./HomePage-Bp1dyWlg.js","./catalog-YbFO9O34.js","./ScenariosPage-BAAT6kkW.js"])))=>i.map(i=>d[i]);
var Sf=Object.defineProperty;var kf=(e,t,n)=>t in e?Sf(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Ks=(e,t,n)=>kf(e,typeof t!="symbol"?t+"":t,n);function xf(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function wf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var _u={exports:{}},Vo={},Ru={exports:{}},D={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var br=Symbol.for("react.element"),Pf=Symbol.for("react.portal"),Cf=Symbol.for("react.fragment"),_f=Symbol.for("react.strict_mode"),Rf=Symbol.for("react.profiler"),Ef=Symbol.for("react.provider"),bf=Symbol.for("react.context"),jf=Symbol.for("react.forward_ref"),$f=Symbol.for("react.suspense"),Nf=Symbol.for("react.memo"),Tf=Symbol.for("react.lazy"),Ws=Symbol.iterator;function Of(e){return e===null||typeof e!="object"?null:(e=Ws&&e[Ws]||e["@@iterator"],typeof e=="function"?e:null)}var Eu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},bu=Object.assign,ju={};function Ln(e,t,n){this.props=e,this.context=t,this.refs=ju,this.updater=n||Eu}Ln.prototype.isReactComponent={};Ln.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ln.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function $u(){}$u.prototype=Ln.prototype;function Bl(e,t,n){this.props=e,this.context=t,this.refs=ju,this.updater=n||Eu}var Vl=Bl.prototype=new $u;Vl.constructor=Bl;bu(Vl,Ln.prototype);Vl.isPureReactComponent=!0;var qs=Array.isArray,Nu=Object.prototype.hasOwnProperty,Fl={current:null},Tu={key:!0,ref:!0,__self:!0,__source:!0};function Ou(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)Nu.call(t,r)&&!Tu.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var a=Array(s),u=0;u<s;u++)a[u]=arguments[u+2];o.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:br,type:e,key:i,ref:l,props:o,_owner:Fl.current}}function Lf(e,t){return{$$typeof:br,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Hl(e){return typeof e=="object"&&e!==null&&e.$$typeof===br}function Mf(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Gs=/\/+/g;function fi(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Mf(""+e.key):t.toString(36)}function no(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case br:case Pf:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+fi(l,0):r,qs(o)?(n="",e!=null&&(n=e.replace(Gs,"$&/")+"/"),no(o,t,n,"",function(u){return u})):o!=null&&(Hl(o)&&(o=Lf(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(Gs,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",qs(e))for(var s=0;s<e.length;s++){i=e[s];var a=r+fi(i,s);l+=no(i,t,n,a,o)}else if(a=Of(e),typeof a=="function")for(e=a.call(e),s=0;!(i=e.next()).done;)i=i.value,a=r+fi(i,s++),l+=no(i,t,n,a,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Ar(e,t,n){if(e==null)return e;var r=[],o=0;return no(e,r,"","",function(i){return t.call(n,i,o++)}),r}function Af(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Pe={current:null},ro={transition:null},If={ReactCurrentDispatcher:Pe,ReactCurrentBatchConfig:ro,ReactCurrentOwner:Fl};function Lu(){throw Error("act(...) is not supported in production builds of React.")}D.Children={map:Ar,forEach:function(e,t,n){Ar(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ar(e,function(){t++}),t},toArray:function(e){return Ar(e,function(t){return t})||[]},only:function(e){if(!Hl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};D.Component=Ln;D.Fragment=Cf;D.Profiler=Rf;D.PureComponent=Bl;D.StrictMode=_f;D.Suspense=$f;D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=If;D.act=Lu;D.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=bu({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=Fl.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in t)Nu.call(t,a)&&!Tu.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&s!==void 0?s[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){s=Array(a);for(var u=0;u<a;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:br,type:e.type,key:o,ref:i,props:r,_owner:l}};D.createContext=function(e){return e={$$typeof:bf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Ef,_context:e},e.Consumer=e};D.createElement=Ou;D.createFactory=function(e){var t=Ou.bind(null,e);return t.type=e,t};D.createRef=function(){return{current:null}};D.forwardRef=function(e){return{$$typeof:jf,render:e}};D.isValidElement=Hl;D.lazy=function(e){return{$$typeof:Tf,_payload:{_status:-1,_result:e},_init:Af}};D.memo=function(e,t){return{$$typeof:Nf,type:e,compare:t===void 0?null:t}};D.startTransition=function(e){var t=ro.transition;ro.transition={};try{e()}finally{ro.transition=t}};D.unstable_act=Lu;D.useCallback=function(e,t){return Pe.current.useCallback(e,t)};D.useContext=function(e){return Pe.current.useContext(e)};D.useDebugValue=function(){};D.useDeferredValue=function(e){return Pe.current.useDeferredValue(e)};D.useEffect=function(e,t){return Pe.current.useEffect(e,t)};D.useId=function(){return Pe.current.useId()};D.useImperativeHandle=function(e,t,n){return Pe.current.useImperativeHandle(e,t,n)};D.useInsertionEffect=function(e,t){return Pe.current.useInsertionEffect(e,t)};D.useLayoutEffect=function(e,t){return Pe.current.useLayoutEffect(e,t)};D.useMemo=function(e,t){return Pe.current.useMemo(e,t)};D.useReducer=function(e,t,n){return Pe.current.useReducer(e,t,n)};D.useRef=function(e){return Pe.current.useRef(e)};D.useState=function(e){return Pe.current.useState(e)};D.useSyncExternalStore=function(e,t,n){return Pe.current.useSyncExternalStore(e,t,n)};D.useTransition=function(){return Pe.current.useTransition()};D.version="18.3.1";Ru.exports=D;var S=Ru.exports;const jr=wf(S),Df=xf({__proto__:null,default:jr},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zf=S,Uf=Symbol.for("react.element"),Bf=Symbol.for("react.fragment"),Vf=Object.prototype.hasOwnProperty,Ff=zf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Hf={key:!0,ref:!0,__self:!0,__source:!0};function Mu(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Vf.call(t,r)&&!Hf.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Uf,type:e,key:i,ref:l,props:o,_owner:Ff.current}}Vo.Fragment=Bf;Vo.jsx=Mu;Vo.jsxs=Mu;_u.exports=Vo;var c=_u.exports,Bi={},Au={exports:{}},Ae={},Iu={exports:{}},Du={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t($,O){var M=$.length;$.push(O);e:for(;0<M;){var W=M-1>>>1,X=$[W];if(0<o(X,O))$[W]=O,$[M]=X,M=W;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var O=$[0],M=$.pop();if(M!==O){$[0]=M;e:for(var W=0,X=$.length,U=X>>>1;W<U;){var T=2*(W+1)-1,I=$[T],B=T+1,Q=$[B];if(0>o(I,M))B<X&&0>o(Q,I)?($[W]=Q,$[B]=M,W=B):($[W]=I,$[T]=M,W=T);else if(B<X&&0>o(Q,M))$[W]=Q,$[B]=M,W=B;else break e}}return O}function o($,O){var M=$.sortIndex-O.sortIndex;return M!==0?M:$.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var a=[],u=[],d=1,p=null,m=3,y=!1,k=!1,v=!1,x=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h($){for(var O=n(u);O!==null;){if(O.callback===null)r(u);else if(O.startTime<=$)r(u),O.sortIndex=O.expirationTime,t(a,O);else break;O=n(u)}}function P($){if(v=!1,h($),!k)if(n(a)!==null)k=!0,fe(R);else{var O=n(u);O!==null&&$e(P,O.startTime-$)}}function R($,O){k=!1,v&&(v=!1,g(_),_=-1),y=!0;var M=m;try{for(h(O),p=n(a);p!==null&&(!(p.expirationTime>O)||$&&!A());){var W=p.callback;if(typeof W=="function"){p.callback=null,m=p.priorityLevel;var X=W(p.expirationTime<=O);O=e.unstable_now(),typeof X=="function"?p.callback=X:p===n(a)&&r(a),h(O)}else r(a);p=n(a)}if(p!==null)var U=!0;else{var T=n(u);T!==null&&$e(P,T.startTime-O),U=!1}return U}finally{p=null,m=M,y=!1}}var b=!1,j=null,_=-1,w=5,C=-1;function A(){return!(e.unstable_now()-C<w)}function H(){if(j!==null){var $=e.unstable_now();C=$;var O=!0;try{O=j(!0,$)}finally{O?L():(b=!1,j=null)}}else b=!1}var L;if(typeof f=="function")L=function(){f(H)};else if(typeof MessageChannel<"u"){var F=new MessageChannel,he=F.port2;F.port1.onmessage=H,L=function(){he.postMessage(null)}}else L=function(){x(H,0)};function fe($){j=$,b||(b=!0,L())}function $e($,O){_=x(function(){$(e.unstable_now())},O)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function($){$.callback=null},e.unstable_continueExecution=function(){k||y||(k=!0,fe(R))},e.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<$?Math.floor(1e3/$):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function($){switch(m){case 1:case 2:case 3:var O=3;break;default:O=m}var M=m;m=O;try{return $()}finally{m=M}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function($,O){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var M=m;m=$;try{return O()}finally{m=M}},e.unstable_scheduleCallback=function($,O,M){var W=e.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?W+M:W):M=W,$){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=M+X,$={id:d++,callback:O,priorityLevel:$,startTime:M,expirationTime:X,sortIndex:-1},M>W?($.sortIndex=M,t(u,$),n(a)===null&&$===n(u)&&(v?(g(_),_=-1):v=!0,$e(P,M-W))):($.sortIndex=X,t(a,$),k||y||(k=!0,fe(R))),$},e.unstable_shouldYield=A,e.unstable_wrapCallback=function($){var O=m;return function(){var M=m;m=O;try{return $.apply(this,arguments)}finally{m=M}}}})(Du);Iu.exports=Du;var Qf=Iu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kf=S,Me=Qf;function E(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var zu=new Set,ar={};function Xt(e,t){En(e,t),En(e+"Capture",t)}function En(e,t){for(ar[e]=t,e=0;e<t.length;e++)zu.add(t[e])}var ut=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Vi=Object.prototype.hasOwnProperty,Wf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Js={},Ys={};function qf(e){return Vi.call(Ys,e)?!0:Vi.call(Js,e)?!1:Wf.test(e)?Ys[e]=!0:(Js[e]=!0,!1)}function Gf(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Jf(e,t,n,r){if(t===null||typeof t>"u"||Gf(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ce(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var ge={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ge[e]=new Ce(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ge[t]=new Ce(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ge[e]=new Ce(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ge[e]=new Ce(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ge[e]=new Ce(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ge[e]=new Ce(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ge[e]=new Ce(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ge[e]=new Ce(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ge[e]=new Ce(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ql=/[\-:]([a-z])/g;function Kl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ql,Kl);ge[t]=new Ce(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ql,Kl);ge[t]=new Ce(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ql,Kl);ge[t]=new Ce(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ge[e]=new Ce(e,1,!1,e.toLowerCase(),null,!1,!1)});ge.xlinkHref=new Ce("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ge[e]=new Ce(e,1,!1,e.toLowerCase(),null,!0,!0)});function Wl(e,t,n,r){var o=ge.hasOwnProperty(t)?ge[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Jf(t,n,o,r)&&(n=null),r||o===null?qf(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var pt=Kf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ir=Symbol.for("react.element"),un=Symbol.for("react.portal"),cn=Symbol.for("react.fragment"),ql=Symbol.for("react.strict_mode"),Fi=Symbol.for("react.profiler"),Uu=Symbol.for("react.provider"),Bu=Symbol.for("react.context"),Gl=Symbol.for("react.forward_ref"),Hi=Symbol.for("react.suspense"),Qi=Symbol.for("react.suspense_list"),Jl=Symbol.for("react.memo"),ht=Symbol.for("react.lazy"),Vu=Symbol.for("react.offscreen"),Xs=Symbol.iterator;function zn(e){return e===null||typeof e!="object"?null:(e=Xs&&e[Xs]||e["@@iterator"],typeof e=="function"?e:null)}var te=Object.assign,pi;function qn(e){if(pi===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);pi=t&&t[1]||""}return`
`+pi+e}var mi=!1;function gi(e,t){if(!e||mi)return"";mi=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,s=i.length-1;1<=l&&0<=s&&o[l]!==i[s];)s--;for(;1<=l&&0<=s;l--,s--)if(o[l]!==i[s]){if(l!==1||s!==1)do if(l--,s--,0>s||o[l]!==i[s]){var a=`
`+o[l].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=l&&0<=s);break}}}finally{mi=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?qn(e):""}function Yf(e){switch(e.tag){case 5:return qn(e.type);case 16:return qn("Lazy");case 13:return qn("Suspense");case 19:return qn("SuspenseList");case 0:case 2:case 15:return e=gi(e.type,!1),e;case 11:return e=gi(e.type.render,!1),e;case 1:return e=gi(e.type,!0),e;default:return""}}function Ki(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case cn:return"Fragment";case un:return"Portal";case Fi:return"Profiler";case ql:return"StrictMode";case Hi:return"Suspense";case Qi:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Bu:return(e.displayName||"Context")+".Consumer";case Uu:return(e._context.displayName||"Context")+".Provider";case Gl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Jl:return t=e.displayName||null,t!==null?t:Ki(e.type)||"Memo";case ht:t=e._payload,e=e._init;try{return Ki(e(t))}catch{}}return null}function Xf(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ki(t);case 8:return t===ql?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Tt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Fu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Zf(e){var t=Fu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Dr(e){e._valueTracker||(e._valueTracker=Zf(e))}function Hu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Fu(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function go(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Wi(e,t){var n=t.checked;return te({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Zs(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Tt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Qu(e,t){t=t.checked,t!=null&&Wl(e,"checked",t,!1)}function qi(e,t){Qu(e,t);var n=Tt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Gi(e,t.type,n):t.hasOwnProperty("defaultValue")&&Gi(e,t.type,Tt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ea(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Gi(e,t,n){(t!=="number"||go(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Gn=Array.isArray;function xn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Tt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Ji(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(E(91));return te({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ta(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(E(92));if(Gn(n)){if(1<n.length)throw Error(E(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Tt(n)}}function Ku(e,t){var n=Tt(t.value),r=Tt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function na(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Wu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Yi(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Wu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var zr,qu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(zr=zr||document.createElement("div"),zr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=zr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ur(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Zn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ep=["Webkit","ms","Moz","O"];Object.keys(Zn).forEach(function(e){ep.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Zn[t]=Zn[e]})});function Gu(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Zn.hasOwnProperty(e)&&Zn[e]?(""+t).trim():t+"px"}function Ju(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Gu(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var tp=te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Xi(e,t){if(t){if(tp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(E(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(E(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(E(61))}if(t.style!=null&&typeof t.style!="object")throw Error(E(62))}}function Zi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var el=null;function Yl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var tl=null,wn=null,Pn=null;function ra(e){if(e=Tr(e)){if(typeof tl!="function")throw Error(E(280));var t=e.stateNode;t&&(t=Wo(t),tl(e.stateNode,e.type,t))}}function Yu(e){wn?Pn?Pn.push(e):Pn=[e]:wn=e}function Xu(){if(wn){var e=wn,t=Pn;if(Pn=wn=null,ra(e),t)for(e=0;e<t.length;e++)ra(t[e])}}function Zu(e,t){return e(t)}function ec(){}var hi=!1;function tc(e,t,n){if(hi)return e(t,n);hi=!0;try{return Zu(e,t,n)}finally{hi=!1,(wn!==null||Pn!==null)&&(ec(),Xu())}}function cr(e,t){var n=e.stateNode;if(n===null)return null;var r=Wo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(E(231,t,typeof n));return n}var nl=!1;if(ut)try{var Un={};Object.defineProperty(Un,"passive",{get:function(){nl=!0}}),window.addEventListener("test",Un,Un),window.removeEventListener("test",Un,Un)}catch{nl=!1}function np(e,t,n,r,o,i,l,s,a){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var er=!1,ho=null,yo=!1,rl=null,rp={onError:function(e){er=!0,ho=e}};function op(e,t,n,r,o,i,l,s,a){er=!1,ho=null,np.apply(rp,arguments)}function ip(e,t,n,r,o,i,l,s,a){if(op.apply(this,arguments),er){if(er){var u=ho;er=!1,ho=null}else throw Error(E(198));yo||(yo=!0,rl=u)}}function Zt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function nc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function oa(e){if(Zt(e)!==e)throw Error(E(188))}function lp(e){var t=e.alternate;if(!t){if(t=Zt(e),t===null)throw Error(E(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return oa(o),e;if(i===r)return oa(o),t;i=i.sibling}throw Error(E(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,s=o.child;s;){if(s===n){l=!0,n=o,r=i;break}if(s===r){l=!0,r=o,n=i;break}s=s.sibling}if(!l){for(s=i.child;s;){if(s===n){l=!0,n=i,r=o;break}if(s===r){l=!0,r=i,n=o;break}s=s.sibling}if(!l)throw Error(E(189))}}if(n.alternate!==r)throw Error(E(190))}if(n.tag!==3)throw Error(E(188));return n.stateNode.current===n?e:t}function rc(e){return e=lp(e),e!==null?oc(e):null}function oc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=oc(e);if(t!==null)return t;e=e.sibling}return null}var ic=Me.unstable_scheduleCallback,ia=Me.unstable_cancelCallback,sp=Me.unstable_shouldYield,ap=Me.unstable_requestPaint,re=Me.unstable_now,up=Me.unstable_getCurrentPriorityLevel,Xl=Me.unstable_ImmediatePriority,lc=Me.unstable_UserBlockingPriority,vo=Me.unstable_NormalPriority,cp=Me.unstable_LowPriority,sc=Me.unstable_IdlePriority,Fo=null,et=null;function dp(e){if(et&&typeof et.onCommitFiberRoot=="function")try{et.onCommitFiberRoot(Fo,e,void 0,(e.current.flags&128)===128)}catch{}}var qe=Math.clz32?Math.clz32:mp,fp=Math.log,pp=Math.LN2;function mp(e){return e>>>=0,e===0?32:31-(fp(e)/pp|0)|0}var Ur=64,Br=4194304;function Jn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function So(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~o;s!==0?r=Jn(s):(i&=l,i!==0&&(r=Jn(i)))}else l=n&~o,l!==0?r=Jn(l):i!==0&&(r=Jn(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-qe(t),o=1<<n,r|=e[n],t&=~o;return r}function gp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function hp(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-qe(i),s=1<<l,a=o[l];a===-1?(!(s&n)||s&r)&&(o[l]=gp(s,t)):a<=t&&(e.expiredLanes|=s),i&=~s}}function ol(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ac(){var e=Ur;return Ur<<=1,!(Ur&4194240)&&(Ur=64),e}function yi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function $r(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-qe(t),e[t]=n}function yp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-qe(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Zl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-qe(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var V=0;function uc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var cc,es,dc,fc,pc,il=!1,Vr=[],Pt=null,Ct=null,_t=null,dr=new Map,fr=new Map,vt=[],vp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function la(e,t){switch(e){case"focusin":case"focusout":Pt=null;break;case"dragenter":case"dragleave":Ct=null;break;case"mouseover":case"mouseout":_t=null;break;case"pointerover":case"pointerout":dr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":fr.delete(t.pointerId)}}function Bn(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Tr(t),t!==null&&es(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Sp(e,t,n,r,o){switch(t){case"focusin":return Pt=Bn(Pt,e,t,n,r,o),!0;case"dragenter":return Ct=Bn(Ct,e,t,n,r,o),!0;case"mouseover":return _t=Bn(_t,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return dr.set(i,Bn(dr.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,fr.set(i,Bn(fr.get(i)||null,e,t,n,r,o)),!0}return!1}function mc(e){var t=Vt(e.target);if(t!==null){var n=Zt(t);if(n!==null){if(t=n.tag,t===13){if(t=nc(n),t!==null){e.blockedOn=t,pc(e.priority,function(){dc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function oo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ll(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);el=r,n.target.dispatchEvent(r),el=null}else return t=Tr(n),t!==null&&es(t),e.blockedOn=n,!1;t.shift()}return!0}function sa(e,t,n){oo(e)&&n.delete(t)}function kp(){il=!1,Pt!==null&&oo(Pt)&&(Pt=null),Ct!==null&&oo(Ct)&&(Ct=null),_t!==null&&oo(_t)&&(_t=null),dr.forEach(sa),fr.forEach(sa)}function Vn(e,t){e.blockedOn===t&&(e.blockedOn=null,il||(il=!0,Me.unstable_scheduleCallback(Me.unstable_NormalPriority,kp)))}function pr(e){function t(o){return Vn(o,e)}if(0<Vr.length){Vn(Vr[0],e);for(var n=1;n<Vr.length;n++){var r=Vr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Pt!==null&&Vn(Pt,e),Ct!==null&&Vn(Ct,e),_t!==null&&Vn(_t,e),dr.forEach(t),fr.forEach(t),n=0;n<vt.length;n++)r=vt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<vt.length&&(n=vt[0],n.blockedOn===null);)mc(n),n.blockedOn===null&&vt.shift()}var Cn=pt.ReactCurrentBatchConfig,ko=!0;function xp(e,t,n,r){var o=V,i=Cn.transition;Cn.transition=null;try{V=1,ts(e,t,n,r)}finally{V=o,Cn.transition=i}}function wp(e,t,n,r){var o=V,i=Cn.transition;Cn.transition=null;try{V=4,ts(e,t,n,r)}finally{V=o,Cn.transition=i}}function ts(e,t,n,r){if(ko){var o=ll(e,t,n,r);if(o===null)Ei(e,t,r,xo,n),la(e,r);else if(Sp(o,e,t,n,r))r.stopPropagation();else if(la(e,r),t&4&&-1<vp.indexOf(e)){for(;o!==null;){var i=Tr(o);if(i!==null&&cc(i),i=ll(e,t,n,r),i===null&&Ei(e,t,r,xo,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Ei(e,t,r,null,n)}}var xo=null;function ll(e,t,n,r){if(xo=null,e=Yl(r),e=Vt(e),e!==null)if(t=Zt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=nc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return xo=e,null}function gc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(up()){case Xl:return 1;case lc:return 4;case vo:case cp:return 16;case sc:return 536870912;default:return 16}default:return 16}}var kt=null,ns=null,io=null;function hc(){if(io)return io;var e,t=ns,n=t.length,r,o="value"in kt?kt.value:kt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return io=o.slice(e,1<r?1-r:void 0)}function lo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Fr(){return!0}function aa(){return!1}function Ie(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Fr:aa,this.isPropagationStopped=aa,this}return te(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Fr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Fr)},persist:function(){},isPersistent:Fr}),t}var Mn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rs=Ie(Mn),Nr=te({},Mn,{view:0,detail:0}),Pp=Ie(Nr),vi,Si,Fn,Ho=te({},Nr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:os,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Fn&&(Fn&&e.type==="mousemove"?(vi=e.screenX-Fn.screenX,Si=e.screenY-Fn.screenY):Si=vi=0,Fn=e),vi)},movementY:function(e){return"movementY"in e?e.movementY:Si}}),ua=Ie(Ho),Cp=te({},Ho,{dataTransfer:0}),_p=Ie(Cp),Rp=te({},Nr,{relatedTarget:0}),ki=Ie(Rp),Ep=te({},Mn,{animationName:0,elapsedTime:0,pseudoElement:0}),bp=Ie(Ep),jp=te({},Mn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),$p=Ie(jp),Np=te({},Mn,{data:0}),ca=Ie(Np),Tp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Op={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Lp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Mp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Lp[e])?!!t[e]:!1}function os(){return Mp}var Ap=te({},Nr,{key:function(e){if(e.key){var t=Tp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=lo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Op[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:os,charCode:function(e){return e.type==="keypress"?lo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?lo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ip=Ie(Ap),Dp=te({},Ho,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),da=Ie(Dp),zp=te({},Nr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:os}),Up=Ie(zp),Bp=te({},Mn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Vp=Ie(Bp),Fp=te({},Ho,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Hp=Ie(Fp),Qp=[9,13,27,32],is=ut&&"CompositionEvent"in window,tr=null;ut&&"documentMode"in document&&(tr=document.documentMode);var Kp=ut&&"TextEvent"in window&&!tr,yc=ut&&(!is||tr&&8<tr&&11>=tr),fa=" ",pa=!1;function vc(e,t){switch(e){case"keyup":return Qp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var dn=!1;function Wp(e,t){switch(e){case"compositionend":return Sc(t);case"keypress":return t.which!==32?null:(pa=!0,fa);case"textInput":return e=t.data,e===fa&&pa?null:e;default:return null}}function qp(e,t){if(dn)return e==="compositionend"||!is&&vc(e,t)?(e=hc(),io=ns=kt=null,dn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return yc&&t.locale!=="ko"?null:t.data;default:return null}}var Gp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ma(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Gp[e.type]:t==="textarea"}function kc(e,t,n,r){Yu(r),t=wo(t,"onChange"),0<t.length&&(n=new rs("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var nr=null,mr=null;function Jp(e){Nc(e,0)}function Qo(e){var t=mn(e);if(Hu(t))return e}function Yp(e,t){if(e==="change")return t}var xc=!1;if(ut){var xi;if(ut){var wi="oninput"in document;if(!wi){var ga=document.createElement("div");ga.setAttribute("oninput","return;"),wi=typeof ga.oninput=="function"}xi=wi}else xi=!1;xc=xi&&(!document.documentMode||9<document.documentMode)}function ha(){nr&&(nr.detachEvent("onpropertychange",wc),mr=nr=null)}function wc(e){if(e.propertyName==="value"&&Qo(mr)){var t=[];kc(t,mr,e,Yl(e)),tc(Jp,t)}}function Xp(e,t,n){e==="focusin"?(ha(),nr=t,mr=n,nr.attachEvent("onpropertychange",wc)):e==="focusout"&&ha()}function Zp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Qo(mr)}function em(e,t){if(e==="click")return Qo(t)}function tm(e,t){if(e==="input"||e==="change")return Qo(t)}function nm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Je=typeof Object.is=="function"?Object.is:nm;function gr(e,t){if(Je(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Vi.call(t,o)||!Je(e[o],t[o]))return!1}return!0}function ya(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function va(e,t){var n=ya(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ya(n)}}function Pc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Pc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Cc(){for(var e=window,t=go();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=go(e.document)}return t}function ls(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function rm(e){var t=Cc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Pc(n.ownerDocument.documentElement,n)){if(r!==null&&ls(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=va(n,i);var l=va(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var om=ut&&"documentMode"in document&&11>=document.documentMode,fn=null,sl=null,rr=null,al=!1;function Sa(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;al||fn==null||fn!==go(r)||(r=fn,"selectionStart"in r&&ls(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),rr&&gr(rr,r)||(rr=r,r=wo(sl,"onSelect"),0<r.length&&(t=new rs("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=fn)))}function Hr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var pn={animationend:Hr("Animation","AnimationEnd"),animationiteration:Hr("Animation","AnimationIteration"),animationstart:Hr("Animation","AnimationStart"),transitionend:Hr("Transition","TransitionEnd")},Pi={},_c={};ut&&(_c=document.createElement("div").style,"AnimationEvent"in window||(delete pn.animationend.animation,delete pn.animationiteration.animation,delete pn.animationstart.animation),"TransitionEvent"in window||delete pn.transitionend.transition);function Ko(e){if(Pi[e])return Pi[e];if(!pn[e])return e;var t=pn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in _c)return Pi[e]=t[n];return e}var Rc=Ko("animationend"),Ec=Ko("animationiteration"),bc=Ko("animationstart"),jc=Ko("transitionend"),$c=new Map,ka="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Lt(e,t){$c.set(e,t),Xt(t,[e])}for(var Ci=0;Ci<ka.length;Ci++){var _i=ka[Ci],im=_i.toLowerCase(),lm=_i[0].toUpperCase()+_i.slice(1);Lt(im,"on"+lm)}Lt(Rc,"onAnimationEnd");Lt(Ec,"onAnimationIteration");Lt(bc,"onAnimationStart");Lt("dblclick","onDoubleClick");Lt("focusin","onFocus");Lt("focusout","onBlur");Lt(jc,"onTransitionEnd");En("onMouseEnter",["mouseout","mouseover"]);En("onMouseLeave",["mouseout","mouseover"]);En("onPointerEnter",["pointerout","pointerover"]);En("onPointerLeave",["pointerout","pointerover"]);Xt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Xt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Xt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Xt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Xt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Xt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Yn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sm=new Set("cancel close invalid load scroll toggle".split(" ").concat(Yn));function xa(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,ip(r,t,void 0,e),e.currentTarget=null}function Nc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],a=s.instance,u=s.currentTarget;if(s=s.listener,a!==i&&o.isPropagationStopped())break e;xa(o,s,u),i=a}else for(l=0;l<r.length;l++){if(s=r[l],a=s.instance,u=s.currentTarget,s=s.listener,a!==i&&o.isPropagationStopped())break e;xa(o,s,u),i=a}}}if(yo)throw e=rl,yo=!1,rl=null,e}function q(e,t){var n=t[pl];n===void 0&&(n=t[pl]=new Set);var r=e+"__bubble";n.has(r)||(Tc(t,e,2,!1),n.add(r))}function Ri(e,t,n){var r=0;t&&(r|=4),Tc(n,e,r,t)}var Qr="_reactListening"+Math.random().toString(36).slice(2);function hr(e){if(!e[Qr]){e[Qr]=!0,zu.forEach(function(n){n!=="selectionchange"&&(sm.has(n)||Ri(n,!1,e),Ri(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Qr]||(t[Qr]=!0,Ri("selectionchange",!1,t))}}function Tc(e,t,n,r){switch(gc(t)){case 1:var o=xp;break;case 4:o=wp;break;default:o=ts}n=o.bind(null,t,n,e),o=void 0,!nl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Ei(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var a=l.tag;if((a===3||a===4)&&(a=l.stateNode.containerInfo,a===o||a.nodeType===8&&a.parentNode===o))return;l=l.return}for(;s!==null;){if(l=Vt(s),l===null)return;if(a=l.tag,a===5||a===6){r=i=l;continue e}s=s.parentNode}}r=r.return}tc(function(){var u=i,d=Yl(n),p=[];e:{var m=$c.get(e);if(m!==void 0){var y=rs,k=e;switch(e){case"keypress":if(lo(n)===0)break e;case"keydown":case"keyup":y=Ip;break;case"focusin":k="focus",y=ki;break;case"focusout":k="blur",y=ki;break;case"beforeblur":case"afterblur":y=ki;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=ua;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=_p;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Up;break;case Rc:case Ec:case bc:y=bp;break;case jc:y=Vp;break;case"scroll":y=Pp;break;case"wheel":y=Hp;break;case"copy":case"cut":case"paste":y=$p;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=da}var v=(t&4)!==0,x=!v&&e==="scroll",g=v?m!==null?m+"Capture":null:m;v=[];for(var f=u,h;f!==null;){h=f;var P=h.stateNode;if(h.tag===5&&P!==null&&(h=P,g!==null&&(P=cr(f,g),P!=null&&v.push(yr(f,P,h)))),x)break;f=f.return}0<v.length&&(m=new y(m,k,null,n,d),p.push({event:m,listeners:v}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",m&&n!==el&&(k=n.relatedTarget||n.fromElement)&&(Vt(k)||k[ct]))break e;if((y||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,y?(k=n.relatedTarget||n.toElement,y=u,k=k?Vt(k):null,k!==null&&(x=Zt(k),k!==x||k.tag!==5&&k.tag!==6)&&(k=null)):(y=null,k=u),y!==k)){if(v=ua,P="onMouseLeave",g="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(v=da,P="onPointerLeave",g="onPointerEnter",f="pointer"),x=y==null?m:mn(y),h=k==null?m:mn(k),m=new v(P,f+"leave",y,n,d),m.target=x,m.relatedTarget=h,P=null,Vt(d)===u&&(v=new v(g,f+"enter",k,n,d),v.target=h,v.relatedTarget=x,P=v),x=P,y&&k)t:{for(v=y,g=k,f=0,h=v;h;h=nn(h))f++;for(h=0,P=g;P;P=nn(P))h++;for(;0<f-h;)v=nn(v),f--;for(;0<h-f;)g=nn(g),h--;for(;f--;){if(v===g||g!==null&&v===g.alternate)break t;v=nn(v),g=nn(g)}v=null}else v=null;y!==null&&wa(p,m,y,v,!1),k!==null&&x!==null&&wa(p,x,k,v,!0)}}e:{if(m=u?mn(u):window,y=m.nodeName&&m.nodeName.toLowerCase(),y==="select"||y==="input"&&m.type==="file")var R=Yp;else if(ma(m))if(xc)R=tm;else{R=Zp;var b=Xp}else(y=m.nodeName)&&y.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(R=em);if(R&&(R=R(e,u))){kc(p,R,n,d);break e}b&&b(e,m,u),e==="focusout"&&(b=m._wrapperState)&&b.controlled&&m.type==="number"&&Gi(m,"number",m.value)}switch(b=u?mn(u):window,e){case"focusin":(ma(b)||b.contentEditable==="true")&&(fn=b,sl=u,rr=null);break;case"focusout":rr=sl=fn=null;break;case"mousedown":al=!0;break;case"contextmenu":case"mouseup":case"dragend":al=!1,Sa(p,n,d);break;case"selectionchange":if(om)break;case"keydown":case"keyup":Sa(p,n,d)}var j;if(is)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else dn?vc(e,n)&&(_="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(yc&&n.locale!=="ko"&&(dn||_!=="onCompositionStart"?_==="onCompositionEnd"&&dn&&(j=hc()):(kt=d,ns="value"in kt?kt.value:kt.textContent,dn=!0)),b=wo(u,_),0<b.length&&(_=new ca(_,e,null,n,d),p.push({event:_,listeners:b}),j?_.data=j:(j=Sc(n),j!==null&&(_.data=j)))),(j=Kp?Wp(e,n):qp(e,n))&&(u=wo(u,"onBeforeInput"),0<u.length&&(d=new ca("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:u}),d.data=j))}Nc(p,t)})}function yr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function wo(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=cr(e,n),i!=null&&r.unshift(yr(e,i,o)),i=cr(e,t),i!=null&&r.push(yr(e,i,o))),e=e.return}return r}function nn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function wa(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var s=n,a=s.alternate,u=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&u!==null&&(s=u,o?(a=cr(n,i),a!=null&&l.unshift(yr(n,a,s))):o||(a=cr(n,i),a!=null&&l.push(yr(n,a,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var am=/\r\n?/g,um=/\u0000|\uFFFD/g;function Pa(e){return(typeof e=="string"?e:""+e).replace(am,`
`).replace(um,"")}function Kr(e,t,n){if(t=Pa(t),Pa(e)!==t&&n)throw Error(E(425))}function Po(){}var ul=null,cl=null;function dl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var fl=typeof setTimeout=="function"?setTimeout:void 0,cm=typeof clearTimeout=="function"?clearTimeout:void 0,Ca=typeof Promise=="function"?Promise:void 0,dm=typeof queueMicrotask=="function"?queueMicrotask:typeof Ca<"u"?function(e){return Ca.resolve(null).then(e).catch(fm)}:fl;function fm(e){setTimeout(function(){throw e})}function bi(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),pr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);pr(t)}function Rt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function _a(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var An=Math.random().toString(36).slice(2),Ze="__reactFiber$"+An,vr="__reactProps$"+An,ct="__reactContainer$"+An,pl="__reactEvents$"+An,pm="__reactListeners$"+An,mm="__reactHandles$"+An;function Vt(e){var t=e[Ze];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ct]||n[Ze]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=_a(e);e!==null;){if(n=e[Ze])return n;e=_a(e)}return t}e=n,n=e.parentNode}return null}function Tr(e){return e=e[Ze]||e[ct],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function mn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(E(33))}function Wo(e){return e[vr]||null}var ml=[],gn=-1;function Mt(e){return{current:e}}function G(e){0>gn||(e.current=ml[gn],ml[gn]=null,gn--)}function K(e,t){gn++,ml[gn]=e.current,e.current=t}var Ot={},ke=Mt(Ot),Ee=Mt(!1),Wt=Ot;function bn(e,t){var n=e.type.contextTypes;if(!n)return Ot;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function be(e){return e=e.childContextTypes,e!=null}function Co(){G(Ee),G(ke)}function Ra(e,t,n){if(ke.current!==Ot)throw Error(E(168));K(ke,t),K(Ee,n)}function Oc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(E(108,Xf(e)||"Unknown",o));return te({},n,r)}function _o(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ot,Wt=ke.current,K(ke,e),K(Ee,Ee.current),!0}function Ea(e,t,n){var r=e.stateNode;if(!r)throw Error(E(169));n?(e=Oc(e,t,Wt),r.__reactInternalMemoizedMergedChildContext=e,G(Ee),G(ke),K(ke,e)):G(Ee),K(Ee,n)}var ot=null,qo=!1,ji=!1;function Lc(e){ot===null?ot=[e]:ot.push(e)}function gm(e){qo=!0,Lc(e)}function At(){if(!ji&&ot!==null){ji=!0;var e=0,t=V;try{var n=ot;for(V=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ot=null,qo=!1}catch(o){throw ot!==null&&(ot=ot.slice(e+1)),ic(Xl,At),o}finally{V=t,ji=!1}}return null}var hn=[],yn=0,Ro=null,Eo=0,De=[],ze=0,qt=null,lt=1,st="";function Ut(e,t){hn[yn++]=Eo,hn[yn++]=Ro,Ro=e,Eo=t}function Mc(e,t,n){De[ze++]=lt,De[ze++]=st,De[ze++]=qt,qt=e;var r=lt;e=st;var o=32-qe(r)-1;r&=~(1<<o),n+=1;var i=32-qe(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,lt=1<<32-qe(t)+o|n<<o|r,st=i+e}else lt=1<<i|n<<o|r,st=e}function ss(e){e.return!==null&&(Ut(e,1),Mc(e,1,0))}function as(e){for(;e===Ro;)Ro=hn[--yn],hn[yn]=null,Eo=hn[--yn],hn[yn]=null;for(;e===qt;)qt=De[--ze],De[ze]=null,st=De[--ze],De[ze]=null,lt=De[--ze],De[ze]=null}var Le=null,Oe=null,J=!1,We=null;function Ac(e,t){var n=Ue(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ba(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Le=e,Oe=Rt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Le=e,Oe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=qt!==null?{id:lt,overflow:st}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ue(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Le=e,Oe=null,!0):!1;default:return!1}}function gl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function hl(e){if(J){var t=Oe;if(t){var n=t;if(!ba(e,t)){if(gl(e))throw Error(E(418));t=Rt(n.nextSibling);var r=Le;t&&ba(e,t)?Ac(r,n):(e.flags=e.flags&-4097|2,J=!1,Le=e)}}else{if(gl(e))throw Error(E(418));e.flags=e.flags&-4097|2,J=!1,Le=e}}}function ja(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Le=e}function Wr(e){if(e!==Le)return!1;if(!J)return ja(e),J=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!dl(e.type,e.memoizedProps)),t&&(t=Oe)){if(gl(e))throw Ic(),Error(E(418));for(;t;)Ac(e,t),t=Rt(t.nextSibling)}if(ja(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(E(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Oe=Rt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Oe=null}}else Oe=Le?Rt(e.stateNode.nextSibling):null;return!0}function Ic(){for(var e=Oe;e;)e=Rt(e.nextSibling)}function jn(){Oe=Le=null,J=!1}function us(e){We===null?We=[e]:We.push(e)}var hm=pt.ReactCurrentBatchConfig;function Hn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(E(309));var r=n.stateNode}if(!r)throw Error(E(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var s=o.refs;l===null?delete s[i]:s[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(E(284));if(!n._owner)throw Error(E(290,e))}return e}function qr(e,t){throw e=Object.prototype.toString.call(t),Error(E(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function $a(e){var t=e._init;return t(e._payload)}function Dc(e){function t(g,f){if(e){var h=g.deletions;h===null?(g.deletions=[f],g.flags|=16):h.push(f)}}function n(g,f){if(!e)return null;for(;f!==null;)t(g,f),f=f.sibling;return null}function r(g,f){for(g=new Map;f!==null;)f.key!==null?g.set(f.key,f):g.set(f.index,f),f=f.sibling;return g}function o(g,f){return g=$t(g,f),g.index=0,g.sibling=null,g}function i(g,f,h){return g.index=h,e?(h=g.alternate,h!==null?(h=h.index,h<f?(g.flags|=2,f):h):(g.flags|=2,f)):(g.flags|=1048576,f)}function l(g){return e&&g.alternate===null&&(g.flags|=2),g}function s(g,f,h,P){return f===null||f.tag!==6?(f=Ai(h,g.mode,P),f.return=g,f):(f=o(f,h),f.return=g,f)}function a(g,f,h,P){var R=h.type;return R===cn?d(g,f,h.props.children,P,h.key):f!==null&&(f.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===ht&&$a(R)===f.type)?(P=o(f,h.props),P.ref=Hn(g,f,h),P.return=g,P):(P=mo(h.type,h.key,h.props,null,g.mode,P),P.ref=Hn(g,f,h),P.return=g,P)}function u(g,f,h,P){return f===null||f.tag!==4||f.stateNode.containerInfo!==h.containerInfo||f.stateNode.implementation!==h.implementation?(f=Ii(h,g.mode,P),f.return=g,f):(f=o(f,h.children||[]),f.return=g,f)}function d(g,f,h,P,R){return f===null||f.tag!==7?(f=Kt(h,g.mode,P,R),f.return=g,f):(f=o(f,h),f.return=g,f)}function p(g,f,h){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Ai(""+f,g.mode,h),f.return=g,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Ir:return h=mo(f.type,f.key,f.props,null,g.mode,h),h.ref=Hn(g,null,f),h.return=g,h;case un:return f=Ii(f,g.mode,h),f.return=g,f;case ht:var P=f._init;return p(g,P(f._payload),h)}if(Gn(f)||zn(f))return f=Kt(f,g.mode,h,null),f.return=g,f;qr(g,f)}return null}function m(g,f,h,P){var R=f!==null?f.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return R!==null?null:s(g,f,""+h,P);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Ir:return h.key===R?a(g,f,h,P):null;case un:return h.key===R?u(g,f,h,P):null;case ht:return R=h._init,m(g,f,R(h._payload),P)}if(Gn(h)||zn(h))return R!==null?null:d(g,f,h,P,null);qr(g,h)}return null}function y(g,f,h,P,R){if(typeof P=="string"&&P!==""||typeof P=="number")return g=g.get(h)||null,s(f,g,""+P,R);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case Ir:return g=g.get(P.key===null?h:P.key)||null,a(f,g,P,R);case un:return g=g.get(P.key===null?h:P.key)||null,u(f,g,P,R);case ht:var b=P._init;return y(g,f,h,b(P._payload),R)}if(Gn(P)||zn(P))return g=g.get(h)||null,d(f,g,P,R,null);qr(f,P)}return null}function k(g,f,h,P){for(var R=null,b=null,j=f,_=f=0,w=null;j!==null&&_<h.length;_++){j.index>_?(w=j,j=null):w=j.sibling;var C=m(g,j,h[_],P);if(C===null){j===null&&(j=w);break}e&&j&&C.alternate===null&&t(g,j),f=i(C,f,_),b===null?R=C:b.sibling=C,b=C,j=w}if(_===h.length)return n(g,j),J&&Ut(g,_),R;if(j===null){for(;_<h.length;_++)j=p(g,h[_],P),j!==null&&(f=i(j,f,_),b===null?R=j:b.sibling=j,b=j);return J&&Ut(g,_),R}for(j=r(g,j);_<h.length;_++)w=y(j,g,_,h[_],P),w!==null&&(e&&w.alternate!==null&&j.delete(w.key===null?_:w.key),f=i(w,f,_),b===null?R=w:b.sibling=w,b=w);return e&&j.forEach(function(A){return t(g,A)}),J&&Ut(g,_),R}function v(g,f,h,P){var R=zn(h);if(typeof R!="function")throw Error(E(150));if(h=R.call(h),h==null)throw Error(E(151));for(var b=R=null,j=f,_=f=0,w=null,C=h.next();j!==null&&!C.done;_++,C=h.next()){j.index>_?(w=j,j=null):w=j.sibling;var A=m(g,j,C.value,P);if(A===null){j===null&&(j=w);break}e&&j&&A.alternate===null&&t(g,j),f=i(A,f,_),b===null?R=A:b.sibling=A,b=A,j=w}if(C.done)return n(g,j),J&&Ut(g,_),R;if(j===null){for(;!C.done;_++,C=h.next())C=p(g,C.value,P),C!==null&&(f=i(C,f,_),b===null?R=C:b.sibling=C,b=C);return J&&Ut(g,_),R}for(j=r(g,j);!C.done;_++,C=h.next())C=y(j,g,_,C.value,P),C!==null&&(e&&C.alternate!==null&&j.delete(C.key===null?_:C.key),f=i(C,f,_),b===null?R=C:b.sibling=C,b=C);return e&&j.forEach(function(H){return t(g,H)}),J&&Ut(g,_),R}function x(g,f,h,P){if(typeof h=="object"&&h!==null&&h.type===cn&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Ir:e:{for(var R=h.key,b=f;b!==null;){if(b.key===R){if(R=h.type,R===cn){if(b.tag===7){n(g,b.sibling),f=o(b,h.props.children),f.return=g,g=f;break e}}else if(b.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===ht&&$a(R)===b.type){n(g,b.sibling),f=o(b,h.props),f.ref=Hn(g,b,h),f.return=g,g=f;break e}n(g,b);break}else t(g,b);b=b.sibling}h.type===cn?(f=Kt(h.props.children,g.mode,P,h.key),f.return=g,g=f):(P=mo(h.type,h.key,h.props,null,g.mode,P),P.ref=Hn(g,f,h),P.return=g,g=P)}return l(g);case un:e:{for(b=h.key;f!==null;){if(f.key===b)if(f.tag===4&&f.stateNode.containerInfo===h.containerInfo&&f.stateNode.implementation===h.implementation){n(g,f.sibling),f=o(f,h.children||[]),f.return=g,g=f;break e}else{n(g,f);break}else t(g,f);f=f.sibling}f=Ii(h,g.mode,P),f.return=g,g=f}return l(g);case ht:return b=h._init,x(g,f,b(h._payload),P)}if(Gn(h))return k(g,f,h,P);if(zn(h))return v(g,f,h,P);qr(g,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,f!==null&&f.tag===6?(n(g,f.sibling),f=o(f,h),f.return=g,g=f):(n(g,f),f=Ai(h,g.mode,P),f.return=g,g=f),l(g)):n(g,f)}return x}var $n=Dc(!0),zc=Dc(!1),bo=Mt(null),jo=null,vn=null,cs=null;function ds(){cs=vn=jo=null}function fs(e){var t=bo.current;G(bo),e._currentValue=t}function yl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function _n(e,t){jo=e,cs=vn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Re=!0),e.firstContext=null)}function Ve(e){var t=e._currentValue;if(cs!==e)if(e={context:e,memoizedValue:t,next:null},vn===null){if(jo===null)throw Error(E(308));vn=e,jo.dependencies={lanes:0,firstContext:e}}else vn=vn.next=e;return t}var Ft=null;function ps(e){Ft===null?Ft=[e]:Ft.push(e)}function Uc(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,ps(t)):(n.next=o.next,o.next=n),t.interleaved=n,dt(e,r)}function dt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var yt=!1;function ms(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Bc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function at(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Et(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,z&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,dt(e,n)}return o=r.interleaved,o===null?(t.next=t,ps(r)):(t.next=o.next,o.next=t),r.interleaved=t,dt(e,n)}function so(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Zl(e,n)}}function Na(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function $o(e,t,n,r){var o=e.updateQueue;yt=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var a=s,u=a.next;a.next=null,l===null?i=u:l.next=u,l=a;var d=e.alternate;d!==null&&(d=d.updateQueue,s=d.lastBaseUpdate,s!==l&&(s===null?d.firstBaseUpdate=u:s.next=u,d.lastBaseUpdate=a))}if(i!==null){var p=o.baseState;l=0,d=u=a=null,s=i;do{var m=s.lane,y=s.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:y,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var k=e,v=s;switch(m=t,y=n,v.tag){case 1:if(k=v.payload,typeof k=="function"){p=k.call(y,p,m);break e}p=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=v.payload,m=typeof k=="function"?k.call(y,p,m):k,m==null)break e;p=te({},p,m);break e;case 2:yt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,m=o.effects,m===null?o.effects=[s]:m.push(s))}else y={eventTime:y,lane:m,tag:s.tag,payload:s.payload,callback:s.callback,next:null},d===null?(u=d=y,a=p):d=d.next=y,l|=m;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;m=s,s=m.next,m.next=null,o.lastBaseUpdate=m,o.shared.pending=null}}while(!0);if(d===null&&(a=p),o.baseState=a,o.firstBaseUpdate=u,o.lastBaseUpdate=d,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Jt|=l,e.lanes=l,e.memoizedState=p}}function Ta(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(E(191,o));o.call(r)}}}var Or={},tt=Mt(Or),Sr=Mt(Or),kr=Mt(Or);function Ht(e){if(e===Or)throw Error(E(174));return e}function gs(e,t){switch(K(kr,t),K(Sr,e),K(tt,Or),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Yi(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Yi(t,e)}G(tt),K(tt,t)}function Nn(){G(tt),G(Sr),G(kr)}function Vc(e){Ht(kr.current);var t=Ht(tt.current),n=Yi(t,e.type);t!==n&&(K(Sr,e),K(tt,n))}function hs(e){Sr.current===e&&(G(tt),G(Sr))}var Z=Mt(0);function No(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var $i=[];function ys(){for(var e=0;e<$i.length;e++)$i[e]._workInProgressVersionPrimary=null;$i.length=0}var ao=pt.ReactCurrentDispatcher,Ni=pt.ReactCurrentBatchConfig,Gt=0,ee=null,le=null,ue=null,To=!1,or=!1,xr=0,ym=0;function ye(){throw Error(E(321))}function vs(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Je(e[n],t[n]))return!1;return!0}function Ss(e,t,n,r,o,i){if(Gt=i,ee=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ao.current=e===null||e.memoizedState===null?xm:wm,e=n(r,o),or){i=0;do{if(or=!1,xr=0,25<=i)throw Error(E(301));i+=1,ue=le=null,t.updateQueue=null,ao.current=Pm,e=n(r,o)}while(or)}if(ao.current=Oo,t=le!==null&&le.next!==null,Gt=0,ue=le=ee=null,To=!1,t)throw Error(E(300));return e}function ks(){var e=xr!==0;return xr=0,e}function Xe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ue===null?ee.memoizedState=ue=e:ue=ue.next=e,ue}function Fe(){if(le===null){var e=ee.alternate;e=e!==null?e.memoizedState:null}else e=le.next;var t=ue===null?ee.memoizedState:ue.next;if(t!==null)ue=t,le=e;else{if(e===null)throw Error(E(310));le=e,e={memoizedState:le.memoizedState,baseState:le.baseState,baseQueue:le.baseQueue,queue:le.queue,next:null},ue===null?ee.memoizedState=ue=e:ue=ue.next=e}return ue}function wr(e,t){return typeof t=="function"?t(e):t}function Ti(e){var t=Fe(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=le,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var s=l=null,a=null,u=i;do{var d=u.lane;if((Gt&d)===d)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(s=a=p,l=r):a=a.next=p,ee.lanes|=d,Jt|=d}u=u.next}while(u!==null&&u!==i);a===null?l=r:a.next=s,Je(r,t.memoizedState)||(Re=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,ee.lanes|=i,Jt|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Oi(e){var t=Fe(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);Je(i,t.memoizedState)||(Re=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Fc(){}function Hc(e,t){var n=ee,r=Fe(),o=t(),i=!Je(r.memoizedState,o);if(i&&(r.memoizedState=o,Re=!0),r=r.queue,xs(Wc.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||ue!==null&&ue.memoizedState.tag&1){if(n.flags|=2048,Pr(9,Kc.bind(null,n,r,o,t),void 0,null),ce===null)throw Error(E(349));Gt&30||Qc(n,t,o)}return o}function Qc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ee.updateQueue,t===null?(t={lastEffect:null,stores:null},ee.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Kc(e,t,n,r){t.value=n,t.getSnapshot=r,qc(t)&&Gc(e)}function Wc(e,t,n){return n(function(){qc(t)&&Gc(e)})}function qc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Je(e,n)}catch{return!0}}function Gc(e){var t=dt(e,1);t!==null&&Ge(t,e,1,-1)}function Oa(e){var t=Xe();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:wr,lastRenderedState:e},t.queue=e,e=e.dispatch=km.bind(null,ee,e),[t.memoizedState,e]}function Pr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ee.updateQueue,t===null?(t={lastEffect:null,stores:null},ee.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Jc(){return Fe().memoizedState}function uo(e,t,n,r){var o=Xe();ee.flags|=e,o.memoizedState=Pr(1|t,n,void 0,r===void 0?null:r)}function Go(e,t,n,r){var o=Fe();r=r===void 0?null:r;var i=void 0;if(le!==null){var l=le.memoizedState;if(i=l.destroy,r!==null&&vs(r,l.deps)){o.memoizedState=Pr(t,n,i,r);return}}ee.flags|=e,o.memoizedState=Pr(1|t,n,i,r)}function La(e,t){return uo(8390656,8,e,t)}function xs(e,t){return Go(2048,8,e,t)}function Yc(e,t){return Go(4,2,e,t)}function Xc(e,t){return Go(4,4,e,t)}function Zc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ed(e,t,n){return n=n!=null?n.concat([e]):null,Go(4,4,Zc.bind(null,t,e),n)}function ws(){}function td(e,t){var n=Fe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&vs(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function nd(e,t){var n=Fe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&vs(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function rd(e,t,n){return Gt&21?(Je(n,t)||(n=ac(),ee.lanes|=n,Jt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Re=!0),e.memoizedState=n)}function vm(e,t){var n=V;V=n!==0&&4>n?n:4,e(!0);var r=Ni.transition;Ni.transition={};try{e(!1),t()}finally{V=n,Ni.transition=r}}function od(){return Fe().memoizedState}function Sm(e,t,n){var r=jt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},id(e))ld(t,n);else if(n=Uc(e,t,n,r),n!==null){var o=we();Ge(n,e,r,o),sd(n,t,r)}}function km(e,t,n){var r=jt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(id(e))ld(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,s=i(l,n);if(o.hasEagerState=!0,o.eagerState=s,Je(s,l)){var a=t.interleaved;a===null?(o.next=o,ps(t)):(o.next=a.next,a.next=o),t.interleaved=o;return}}catch{}finally{}n=Uc(e,t,o,r),n!==null&&(o=we(),Ge(n,e,r,o),sd(n,t,r))}}function id(e){var t=e.alternate;return e===ee||t!==null&&t===ee}function ld(e,t){or=To=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function sd(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Zl(e,n)}}var Oo={readContext:Ve,useCallback:ye,useContext:ye,useEffect:ye,useImperativeHandle:ye,useInsertionEffect:ye,useLayoutEffect:ye,useMemo:ye,useReducer:ye,useRef:ye,useState:ye,useDebugValue:ye,useDeferredValue:ye,useTransition:ye,useMutableSource:ye,useSyncExternalStore:ye,useId:ye,unstable_isNewReconciler:!1},xm={readContext:Ve,useCallback:function(e,t){return Xe().memoizedState=[e,t===void 0?null:t],e},useContext:Ve,useEffect:La,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,uo(4194308,4,Zc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return uo(4194308,4,e,t)},useInsertionEffect:function(e,t){return uo(4,2,e,t)},useMemo:function(e,t){var n=Xe();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Xe();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Sm.bind(null,ee,e),[r.memoizedState,e]},useRef:function(e){var t=Xe();return e={current:e},t.memoizedState=e},useState:Oa,useDebugValue:ws,useDeferredValue:function(e){return Xe().memoizedState=e},useTransition:function(){var e=Oa(!1),t=e[0];return e=vm.bind(null,e[1]),Xe().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ee,o=Xe();if(J){if(n===void 0)throw Error(E(407));n=n()}else{if(n=t(),ce===null)throw Error(E(349));Gt&30||Qc(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,La(Wc.bind(null,r,i,e),[e]),r.flags|=2048,Pr(9,Kc.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Xe(),t=ce.identifierPrefix;if(J){var n=st,r=lt;n=(r&~(1<<32-qe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=xr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=ym++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},wm={readContext:Ve,useCallback:td,useContext:Ve,useEffect:xs,useImperativeHandle:ed,useInsertionEffect:Yc,useLayoutEffect:Xc,useMemo:nd,useReducer:Ti,useRef:Jc,useState:function(){return Ti(wr)},useDebugValue:ws,useDeferredValue:function(e){var t=Fe();return rd(t,le.memoizedState,e)},useTransition:function(){var e=Ti(wr)[0],t=Fe().memoizedState;return[e,t]},useMutableSource:Fc,useSyncExternalStore:Hc,useId:od,unstable_isNewReconciler:!1},Pm={readContext:Ve,useCallback:td,useContext:Ve,useEffect:xs,useImperativeHandle:ed,useInsertionEffect:Yc,useLayoutEffect:Xc,useMemo:nd,useReducer:Oi,useRef:Jc,useState:function(){return Oi(wr)},useDebugValue:ws,useDeferredValue:function(e){var t=Fe();return le===null?t.memoizedState=e:rd(t,le.memoizedState,e)},useTransition:function(){var e=Oi(wr)[0],t=Fe().memoizedState;return[e,t]},useMutableSource:Fc,useSyncExternalStore:Hc,useId:od,unstable_isNewReconciler:!1};function Qe(e,t){if(e&&e.defaultProps){t=te({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function vl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:te({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Jo={isMounted:function(e){return(e=e._reactInternals)?Zt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=we(),o=jt(e),i=at(r,o);i.payload=t,n!=null&&(i.callback=n),t=Et(e,i,o),t!==null&&(Ge(t,e,o,r),so(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=we(),o=jt(e),i=at(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Et(e,i,o),t!==null&&(Ge(t,e,o,r),so(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=we(),r=jt(e),o=at(n,r);o.tag=2,t!=null&&(o.callback=t),t=Et(e,o,r),t!==null&&(Ge(t,e,r,n),so(t,e,r))}};function Ma(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!gr(n,r)||!gr(o,i):!0}function ad(e,t,n){var r=!1,o=Ot,i=t.contextType;return typeof i=="object"&&i!==null?i=Ve(i):(o=be(t)?Wt:ke.current,r=t.contextTypes,i=(r=r!=null)?bn(e,o):Ot),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Jo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Aa(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Jo.enqueueReplaceState(t,t.state,null)}function Sl(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},ms(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=Ve(i):(i=be(t)?Wt:ke.current,o.context=bn(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(vl(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Jo.enqueueReplaceState(o,o.state,null),$o(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Tn(e,t){try{var n="",r=t;do n+=Yf(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Li(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function kl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Cm=typeof WeakMap=="function"?WeakMap:Map;function ud(e,t,n){n=at(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Mo||(Mo=!0,$l=r),kl(e,t)},n}function cd(e,t,n){n=at(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){kl(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){kl(e,t),typeof r!="function"&&(bt===null?bt=new Set([this]):bt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Ia(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Cm;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Dm.bind(null,e,t,n),t.then(e,e))}function Da(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function za(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=at(-1,1),t.tag=2,Et(n,t,1))),n.lanes|=1),e)}var _m=pt.ReactCurrentOwner,Re=!1;function xe(e,t,n,r){t.child=e===null?zc(t,null,n,r):$n(t,e.child,n,r)}function Ua(e,t,n,r,o){n=n.render;var i=t.ref;return _n(t,o),r=Ss(e,t,n,r,i,o),n=ks(),e!==null&&!Re?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,ft(e,t,o)):(J&&n&&ss(t),t.flags|=1,xe(e,t,r,o),t.child)}function Ba(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!$s(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,dd(e,t,i,r,o)):(e=mo(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:gr,n(l,r)&&e.ref===t.ref)return ft(e,t,o)}return t.flags|=1,e=$t(i,r),e.ref=t.ref,e.return=t,t.child=e}function dd(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(gr(i,r)&&e.ref===t.ref)if(Re=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Re=!0);else return t.lanes=e.lanes,ft(e,t,o)}return xl(e,t,n,r,o)}function fd(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},K(kn,Te),Te|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,K(kn,Te),Te|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,K(kn,Te),Te|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,K(kn,Te),Te|=r;return xe(e,t,o,n),t.child}function pd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function xl(e,t,n,r,o){var i=be(n)?Wt:ke.current;return i=bn(t,i),_n(t,o),n=Ss(e,t,n,r,i,o),r=ks(),e!==null&&!Re?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,ft(e,t,o)):(J&&r&&ss(t),t.flags|=1,xe(e,t,n,o),t.child)}function Va(e,t,n,r,o){if(be(n)){var i=!0;_o(t)}else i=!1;if(_n(t,o),t.stateNode===null)co(e,t),ad(t,n,r),Sl(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var a=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ve(u):(u=be(n)?Wt:ke.current,u=bn(t,u));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof l.getSnapshotBeforeUpdate=="function";p||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||a!==u)&&Aa(t,l,r,u),yt=!1;var m=t.memoizedState;l.state=m,$o(t,r,l,o),a=t.memoizedState,s!==r||m!==a||Ee.current||yt?(typeof d=="function"&&(vl(t,n,d,r),a=t.memoizedState),(s=yt||Ma(t,n,s,r,m,a,u))?(p||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),l.props=r,l.state=a,l.context=u,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Bc(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:Qe(t.type,s),l.props=u,p=t.pendingProps,m=l.context,a=n.contextType,typeof a=="object"&&a!==null?a=Ve(a):(a=be(n)?Wt:ke.current,a=bn(t,a));var y=n.getDerivedStateFromProps;(d=typeof y=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==p||m!==a)&&Aa(t,l,r,a),yt=!1,m=t.memoizedState,l.state=m,$o(t,r,l,o);var k=t.memoizedState;s!==p||m!==k||Ee.current||yt?(typeof y=="function"&&(vl(t,n,y,r),k=t.memoizedState),(u=yt||Ma(t,n,u,r,m,k,a)||!1)?(d||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,k,a),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,k,a)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=k),l.props=r,l.state=k,l.context=a,r=u):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return wl(e,t,n,r,i,o)}function wl(e,t,n,r,o,i){pd(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&Ea(t,n,!1),ft(e,t,i);r=t.stateNode,_m.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=$n(t,e.child,null,i),t.child=$n(t,null,s,i)):xe(e,t,s,i),t.memoizedState=r.state,o&&Ea(t,n,!0),t.child}function md(e){var t=e.stateNode;t.pendingContext?Ra(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ra(e,t.context,!1),gs(e,t.containerInfo)}function Fa(e,t,n,r,o){return jn(),us(o),t.flags|=256,xe(e,t,n,r),t.child}var Pl={dehydrated:null,treeContext:null,retryLane:0};function Cl(e){return{baseLanes:e,cachePool:null,transitions:null}}function gd(e,t,n){var r=t.pendingProps,o=Z.current,i=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),K(Z,o&1),e===null)return hl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=Zo(l,r,0,null),e=Kt(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Cl(n),t.memoizedState=Pl,e):Ps(t,l));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return Rm(e,t,l,r,s,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,s=o.sibling;var a={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=$t(o,a),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=$t(s,i):(i=Kt(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?Cl(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=Pl,r}return i=e.child,e=i.sibling,r=$t(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ps(e,t){return t=Zo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Gr(e,t,n,r){return r!==null&&us(r),$n(t,e.child,null,n),e=Ps(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Rm(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=Li(Error(E(422))),Gr(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Zo({mode:"visible",children:r.children},o,0,null),i=Kt(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&$n(t,e.child,null,l),t.child.memoizedState=Cl(l),t.memoizedState=Pl,i);if(!(t.mode&1))return Gr(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(E(419)),r=Li(i,r,void 0),Gr(e,t,l,r)}if(s=(l&e.childLanes)!==0,Re||s){if(r=ce,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,dt(e,o),Ge(r,e,o,-1))}return js(),r=Li(Error(E(421))),Gr(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=zm.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Oe=Rt(o.nextSibling),Le=t,J=!0,We=null,e!==null&&(De[ze++]=lt,De[ze++]=st,De[ze++]=qt,lt=e.id,st=e.overflow,qt=t),t=Ps(t,r.children),t.flags|=4096,t)}function Ha(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),yl(e.return,t,n)}function Mi(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function hd(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(xe(e,t,r.children,n),r=Z.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ha(e,n,t);else if(e.tag===19)Ha(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(K(Z,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&No(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Mi(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&No(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Mi(t,!0,n,null,i);break;case"together":Mi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function co(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ft(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Jt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(E(153));if(t.child!==null){for(e=t.child,n=$t(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=$t(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Em(e,t,n){switch(t.tag){case 3:md(t),jn();break;case 5:Vc(t);break;case 1:be(t.type)&&_o(t);break;case 4:gs(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;K(bo,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(K(Z,Z.current&1),t.flags|=128,null):n&t.child.childLanes?gd(e,t,n):(K(Z,Z.current&1),e=ft(e,t,n),e!==null?e.sibling:null);K(Z,Z.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return hd(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),K(Z,Z.current),r)break;return null;case 22:case 23:return t.lanes=0,fd(e,t,n)}return ft(e,t,n)}var yd,_l,vd,Sd;yd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};_l=function(){};vd=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Ht(tt.current);var i=null;switch(n){case"input":o=Wi(e,o),r=Wi(e,r),i=[];break;case"select":o=te({},o,{value:void 0}),r=te({},r,{value:void 0}),i=[];break;case"textarea":o=Ji(e,o),r=Ji(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Po)}Xi(n,r);var l;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var s=o[u];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ar.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var a=r[u];if(s=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&a!==s&&(a!=null||s!=null))if(u==="style")if(s){for(l in s)!s.hasOwnProperty(l)||a&&a.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in a)a.hasOwnProperty(l)&&s[l]!==a[l]&&(n||(n={}),n[l]=a[l])}else n||(i||(i=[]),i.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(i=i||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(i=i||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ar.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&q("scroll",e),i||s===a||(i=[])):(i=i||[]).push(u,a))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};Sd=function(e,t,n,r){n!==r&&(t.flags|=4)};function Qn(e,t){if(!J)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ve(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function bm(e,t,n){var r=t.pendingProps;switch(as(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ve(t),null;case 1:return be(t.type)&&Co(),ve(t),null;case 3:return r=t.stateNode,Nn(),G(Ee),G(ke),ys(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Wr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,We!==null&&(Ol(We),We=null))),_l(e,t),ve(t),null;case 5:hs(t);var o=Ht(kr.current);if(n=t.type,e!==null&&t.stateNode!=null)vd(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(E(166));return ve(t),null}if(e=Ht(tt.current),Wr(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Ze]=t,r[vr]=i,e=(t.mode&1)!==0,n){case"dialog":q("cancel",r),q("close",r);break;case"iframe":case"object":case"embed":q("load",r);break;case"video":case"audio":for(o=0;o<Yn.length;o++)q(Yn[o],r);break;case"source":q("error",r);break;case"img":case"image":case"link":q("error",r),q("load",r);break;case"details":q("toggle",r);break;case"input":Zs(r,i),q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},q("invalid",r);break;case"textarea":ta(r,i),q("invalid",r)}Xi(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var s=i[l];l==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&Kr(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&Kr(r.textContent,s,e),o=["children",""+s]):ar.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&q("scroll",r)}switch(n){case"input":Dr(r),ea(r,i,!0);break;case"textarea":Dr(r),na(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Po)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Wu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[Ze]=t,e[vr]=r,yd(e,t,!1,!1),t.stateNode=e;e:{switch(l=Zi(n,r),n){case"dialog":q("cancel",e),q("close",e),o=r;break;case"iframe":case"object":case"embed":q("load",e),o=r;break;case"video":case"audio":for(o=0;o<Yn.length;o++)q(Yn[o],e);o=r;break;case"source":q("error",e),o=r;break;case"img":case"image":case"link":q("error",e),q("load",e),o=r;break;case"details":q("toggle",e),o=r;break;case"input":Zs(e,r),o=Wi(e,r),q("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=te({},r,{value:void 0}),q("invalid",e);break;case"textarea":ta(e,r),o=Ji(e,r),q("invalid",e);break;default:o=r}Xi(n,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var a=s[i];i==="style"?Ju(e,a):i==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&qu(e,a)):i==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&ur(e,a):typeof a=="number"&&ur(e,""+a):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(ar.hasOwnProperty(i)?a!=null&&i==="onScroll"&&q("scroll",e):a!=null&&Wl(e,i,a,l))}switch(n){case"input":Dr(e),ea(e,r,!1);break;case"textarea":Dr(e),na(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Tt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?xn(e,!!r.multiple,i,!1):r.defaultValue!=null&&xn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Po)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ve(t),null;case 6:if(e&&t.stateNode!=null)Sd(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(E(166));if(n=Ht(kr.current),Ht(tt.current),Wr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ze]=t,(i=r.nodeValue!==n)&&(e=Le,e!==null))switch(e.tag){case 3:Kr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Kr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ze]=t,t.stateNode=r}return ve(t),null;case 13:if(G(Z),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(J&&Oe!==null&&t.mode&1&&!(t.flags&128))Ic(),jn(),t.flags|=98560,i=!1;else if(i=Wr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(E(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(E(317));i[Ze]=t}else jn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ve(t),i=!1}else We!==null&&(Ol(We),We=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Z.current&1?se===0&&(se=3):js())),t.updateQueue!==null&&(t.flags|=4),ve(t),null);case 4:return Nn(),_l(e,t),e===null&&hr(t.stateNode.containerInfo),ve(t),null;case 10:return fs(t.type._context),ve(t),null;case 17:return be(t.type)&&Co(),ve(t),null;case 19:if(G(Z),i=t.memoizedState,i===null)return ve(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)Qn(i,!1);else{if(se!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=No(e),l!==null){for(t.flags|=128,Qn(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return K(Z,Z.current&1|2),t.child}e=e.sibling}i.tail!==null&&re()>On&&(t.flags|=128,r=!0,Qn(i,!1),t.lanes=4194304)}else{if(!r)if(e=No(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Qn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!J)return ve(t),null}else 2*re()-i.renderingStartTime>On&&n!==1073741824&&(t.flags|=128,r=!0,Qn(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=re(),t.sibling=null,n=Z.current,K(Z,r?n&1|2:n&1),t):(ve(t),null);case 22:case 23:return bs(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Te&1073741824&&(ve(t),t.subtreeFlags&6&&(t.flags|=8192)):ve(t),null;case 24:return null;case 25:return null}throw Error(E(156,t.tag))}function jm(e,t){switch(as(t),t.tag){case 1:return be(t.type)&&Co(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Nn(),G(Ee),G(ke),ys(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return hs(t),null;case 13:if(G(Z),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(E(340));jn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return G(Z),null;case 4:return Nn(),null;case 10:return fs(t.type._context),null;case 22:case 23:return bs(),null;case 24:return null;default:return null}}var Jr=!1,Se=!1,$m=typeof WeakSet=="function"?WeakSet:Set,N=null;function Sn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ne(e,t,r)}else n.current=null}function Rl(e,t,n){try{n()}catch(r){ne(e,t,r)}}var Qa=!1;function Nm(e,t){if(ul=ko,e=Cc(),ls(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,s=-1,a=-1,u=0,d=0,p=e,m=null;t:for(;;){for(var y;p!==n||o!==0&&p.nodeType!==3||(s=l+o),p!==i||r!==0&&p.nodeType!==3||(a=l+r),p.nodeType===3&&(l+=p.nodeValue.length),(y=p.firstChild)!==null;)m=p,p=y;for(;;){if(p===e)break t;if(m===n&&++u===o&&(s=l),m===i&&++d===r&&(a=l),(y=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=y}n=s===-1||a===-1?null:{start:s,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(cl={focusedElem:e,selectionRange:n},ko=!1,N=t;N!==null;)if(t=N,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,N=e;else for(;N!==null;){t=N;try{var k=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var v=k.memoizedProps,x=k.memoizedState,g=t.stateNode,f=g.getSnapshotBeforeUpdate(t.elementType===t.type?v:Qe(t.type,v),x);g.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(P){ne(t,t.return,P)}if(e=t.sibling,e!==null){e.return=t.return,N=e;break}N=t.return}return k=Qa,Qa=!1,k}function ir(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Rl(t,n,i)}o=o.next}while(o!==r)}}function Yo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function El(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function kd(e){var t=e.alternate;t!==null&&(e.alternate=null,kd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ze],delete t[vr],delete t[pl],delete t[pm],delete t[mm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function xd(e){return e.tag===5||e.tag===3||e.tag===4}function Ka(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||xd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function bl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Po));else if(r!==4&&(e=e.child,e!==null))for(bl(e,t,n),e=e.sibling;e!==null;)bl(e,t,n),e=e.sibling}function jl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(jl(e,t,n),e=e.sibling;e!==null;)jl(e,t,n),e=e.sibling}var pe=null,Ke=!1;function gt(e,t,n){for(n=n.child;n!==null;)wd(e,t,n),n=n.sibling}function wd(e,t,n){if(et&&typeof et.onCommitFiberUnmount=="function")try{et.onCommitFiberUnmount(Fo,n)}catch{}switch(n.tag){case 5:Se||Sn(n,t);case 6:var r=pe,o=Ke;pe=null,gt(e,t,n),pe=r,Ke=o,pe!==null&&(Ke?(e=pe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):pe.removeChild(n.stateNode));break;case 18:pe!==null&&(Ke?(e=pe,n=n.stateNode,e.nodeType===8?bi(e.parentNode,n):e.nodeType===1&&bi(e,n),pr(e)):bi(pe,n.stateNode));break;case 4:r=pe,o=Ke,pe=n.stateNode.containerInfo,Ke=!0,gt(e,t,n),pe=r,Ke=o;break;case 0:case 11:case 14:case 15:if(!Se&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&Rl(n,t,l),o=o.next}while(o!==r)}gt(e,t,n);break;case 1:if(!Se&&(Sn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){ne(n,t,s)}gt(e,t,n);break;case 21:gt(e,t,n);break;case 22:n.mode&1?(Se=(r=Se)||n.memoizedState!==null,gt(e,t,n),Se=r):gt(e,t,n);break;default:gt(e,t,n)}}function Wa(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new $m),t.forEach(function(r){var o=Um.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function He(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:pe=s.stateNode,Ke=!1;break e;case 3:pe=s.stateNode.containerInfo,Ke=!0;break e;case 4:pe=s.stateNode.containerInfo,Ke=!0;break e}s=s.return}if(pe===null)throw Error(E(160));wd(i,l,o),pe=null,Ke=!1;var a=o.alternate;a!==null&&(a.return=null),o.return=null}catch(u){ne(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Pd(t,e),t=t.sibling}function Pd(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(He(t,e),Ye(e),r&4){try{ir(3,e,e.return),Yo(3,e)}catch(v){ne(e,e.return,v)}try{ir(5,e,e.return)}catch(v){ne(e,e.return,v)}}break;case 1:He(t,e),Ye(e),r&512&&n!==null&&Sn(n,n.return);break;case 5:if(He(t,e),Ye(e),r&512&&n!==null&&Sn(n,n.return),e.flags&32){var o=e.stateNode;try{ur(o,"")}catch(v){ne(e,e.return,v)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&Qu(o,i),Zi(s,l);var u=Zi(s,i);for(l=0;l<a.length;l+=2){var d=a[l],p=a[l+1];d==="style"?Ju(o,p):d==="dangerouslySetInnerHTML"?qu(o,p):d==="children"?ur(o,p):Wl(o,d,p,u)}switch(s){case"input":qi(o,i);break;case"textarea":Ku(o,i);break;case"select":var m=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var y=i.value;y!=null?xn(o,!!i.multiple,y,!1):m!==!!i.multiple&&(i.defaultValue!=null?xn(o,!!i.multiple,i.defaultValue,!0):xn(o,!!i.multiple,i.multiple?[]:"",!1))}o[vr]=i}catch(v){ne(e,e.return,v)}}break;case 6:if(He(t,e),Ye(e),r&4){if(e.stateNode===null)throw Error(E(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(v){ne(e,e.return,v)}}break;case 3:if(He(t,e),Ye(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{pr(t.containerInfo)}catch(v){ne(e,e.return,v)}break;case 4:He(t,e),Ye(e);break;case 13:He(t,e),Ye(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Rs=re())),r&4&&Wa(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(Se=(u=Se)||d,He(t,e),Se=u):He(t,e),Ye(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(N=e,d=e.child;d!==null;){for(p=N=d;N!==null;){switch(m=N,y=m.child,m.tag){case 0:case 11:case 14:case 15:ir(4,m,m.return);break;case 1:Sn(m,m.return);var k=m.stateNode;if(typeof k.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,k.props=t.memoizedProps,k.state=t.memoizedState,k.componentWillUnmount()}catch(v){ne(r,n,v)}}break;case 5:Sn(m,m.return);break;case 22:if(m.memoizedState!==null){Ga(p);continue}}y!==null?(y.return=m,N=y):Ga(p)}d=d.sibling}e:for(d=null,p=e;;){if(p.tag===5){if(d===null){d=p;try{o=p.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=p.stateNode,a=p.memoizedProps.style,l=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=Gu("display",l))}catch(v){ne(e,e.return,v)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(v){ne(e,e.return,v)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:He(t,e),Ye(e),r&4&&Wa(e);break;case 21:break;default:He(t,e),Ye(e)}}function Ye(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(xd(n)){var r=n;break e}n=n.return}throw Error(E(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(ur(o,""),r.flags&=-33);var i=Ka(e);jl(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,s=Ka(e);bl(e,s,l);break;default:throw Error(E(161))}}catch(a){ne(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Tm(e,t,n){N=e,Cd(e)}function Cd(e,t,n){for(var r=(e.mode&1)!==0;N!==null;){var o=N,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||Jr;if(!l){var s=o.alternate,a=s!==null&&s.memoizedState!==null||Se;s=Jr;var u=Se;if(Jr=l,(Se=a)&&!u)for(N=o;N!==null;)l=N,a=l.child,l.tag===22&&l.memoizedState!==null?Ja(o):a!==null?(a.return=l,N=a):Ja(o);for(;i!==null;)N=i,Cd(i),i=i.sibling;N=o,Jr=s,Se=u}qa(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,N=i):qa(e)}}function qa(e){for(;N!==null;){var t=N;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Se||Yo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Se)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Qe(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Ta(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ta(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&pr(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}Se||t.flags&512&&El(t)}catch(m){ne(t,t.return,m)}}if(t===e){N=null;break}if(n=t.sibling,n!==null){n.return=t.return,N=n;break}N=t.return}}function Ga(e){for(;N!==null;){var t=N;if(t===e){N=null;break}var n=t.sibling;if(n!==null){n.return=t.return,N=n;break}N=t.return}}function Ja(e){for(;N!==null;){var t=N;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Yo(4,t)}catch(a){ne(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(a){ne(t,o,a)}}var i=t.return;try{El(t)}catch(a){ne(t,i,a)}break;case 5:var l=t.return;try{El(t)}catch(a){ne(t,l,a)}}}catch(a){ne(t,t.return,a)}if(t===e){N=null;break}var s=t.sibling;if(s!==null){s.return=t.return,N=s;break}N=t.return}}var Om=Math.ceil,Lo=pt.ReactCurrentDispatcher,Cs=pt.ReactCurrentOwner,Be=pt.ReactCurrentBatchConfig,z=0,ce=null,ie=null,me=0,Te=0,kn=Mt(0),se=0,Cr=null,Jt=0,Xo=0,_s=0,lr=null,_e=null,Rs=0,On=1/0,rt=null,Mo=!1,$l=null,bt=null,Yr=!1,xt=null,Ao=0,sr=0,Nl=null,fo=-1,po=0;function we(){return z&6?re():fo!==-1?fo:fo=re()}function jt(e){return e.mode&1?z&2&&me!==0?me&-me:hm.transition!==null?(po===0&&(po=ac()),po):(e=V,e!==0||(e=window.event,e=e===void 0?16:gc(e.type)),e):1}function Ge(e,t,n,r){if(50<sr)throw sr=0,Nl=null,Error(E(185));$r(e,n,r),(!(z&2)||e!==ce)&&(e===ce&&(!(z&2)&&(Xo|=n),se===4&&St(e,me)),je(e,r),n===1&&z===0&&!(t.mode&1)&&(On=re()+500,qo&&At()))}function je(e,t){var n=e.callbackNode;hp(e,t);var r=So(e,e===ce?me:0);if(r===0)n!==null&&ia(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ia(n),t===1)e.tag===0?gm(Ya.bind(null,e)):Lc(Ya.bind(null,e)),dm(function(){!(z&6)&&At()}),n=null;else{switch(uc(r)){case 1:n=Xl;break;case 4:n=lc;break;case 16:n=vo;break;case 536870912:n=sc;break;default:n=vo}n=Td(n,_d.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function _d(e,t){if(fo=-1,po=0,z&6)throw Error(E(327));var n=e.callbackNode;if(Rn()&&e.callbackNode!==n)return null;var r=So(e,e===ce?me:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Io(e,r);else{t=r;var o=z;z|=2;var i=Ed();(ce!==e||me!==t)&&(rt=null,On=re()+500,Qt(e,t));do try{Am();break}catch(s){Rd(e,s)}while(!0);ds(),Lo.current=i,z=o,ie!==null?t=0:(ce=null,me=0,t=se)}if(t!==0){if(t===2&&(o=ol(e),o!==0&&(r=o,t=Tl(e,o))),t===1)throw n=Cr,Qt(e,0),St(e,r),je(e,re()),n;if(t===6)St(e,r);else{if(o=e.current.alternate,!(r&30)&&!Lm(o)&&(t=Io(e,r),t===2&&(i=ol(e),i!==0&&(r=i,t=Tl(e,i))),t===1))throw n=Cr,Qt(e,0),St(e,r),je(e,re()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(E(345));case 2:Bt(e,_e,rt);break;case 3:if(St(e,r),(r&130023424)===r&&(t=Rs+500-re(),10<t)){if(So(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){we(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=fl(Bt.bind(null,e,_e,rt),t);break}Bt(e,_e,rt);break;case 4:if(St(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-qe(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=re()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Om(r/1960))-r,10<r){e.timeoutHandle=fl(Bt.bind(null,e,_e,rt),r);break}Bt(e,_e,rt);break;case 5:Bt(e,_e,rt);break;default:throw Error(E(329))}}}return je(e,re()),e.callbackNode===n?_d.bind(null,e):null}function Tl(e,t){var n=lr;return e.current.memoizedState.isDehydrated&&(Qt(e,t).flags|=256),e=Io(e,t),e!==2&&(t=_e,_e=n,t!==null&&Ol(t)),e}function Ol(e){_e===null?_e=e:_e.push.apply(_e,e)}function Lm(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!Je(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function St(e,t){for(t&=~_s,t&=~Xo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-qe(t),r=1<<n;e[n]=-1,t&=~r}}function Ya(e){if(z&6)throw Error(E(327));Rn();var t=So(e,0);if(!(t&1))return je(e,re()),null;var n=Io(e,t);if(e.tag!==0&&n===2){var r=ol(e);r!==0&&(t=r,n=Tl(e,r))}if(n===1)throw n=Cr,Qt(e,0),St(e,t),je(e,re()),n;if(n===6)throw Error(E(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Bt(e,_e,rt),je(e,re()),null}function Es(e,t){var n=z;z|=1;try{return e(t)}finally{z=n,z===0&&(On=re()+500,qo&&At())}}function Yt(e){xt!==null&&xt.tag===0&&!(z&6)&&Rn();var t=z;z|=1;var n=Be.transition,r=V;try{if(Be.transition=null,V=1,e)return e()}finally{V=r,Be.transition=n,z=t,!(z&6)&&At()}}function bs(){Te=kn.current,G(kn)}function Qt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,cm(n)),ie!==null)for(n=ie.return;n!==null;){var r=n;switch(as(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Co();break;case 3:Nn(),G(Ee),G(ke),ys();break;case 5:hs(r);break;case 4:Nn();break;case 13:G(Z);break;case 19:G(Z);break;case 10:fs(r.type._context);break;case 22:case 23:bs()}n=n.return}if(ce=e,ie=e=$t(e.current,null),me=Te=t,se=0,Cr=null,_s=Xo=Jt=0,_e=lr=null,Ft!==null){for(t=0;t<Ft.length;t++)if(n=Ft[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}Ft=null}return e}function Rd(e,t){do{var n=ie;try{if(ds(),ao.current=Oo,To){for(var r=ee.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}To=!1}if(Gt=0,ue=le=ee=null,or=!1,xr=0,Cs.current=null,n===null||n.return===null){se=1,Cr=t,ie=null;break}e:{var i=e,l=n.return,s=n,a=t;if(t=me,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,d=s,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var y=Da(l);if(y!==null){y.flags&=-257,za(y,l,s,i,t),y.mode&1&&Ia(i,u,t),t=y,a=u;var k=t.updateQueue;if(k===null){var v=new Set;v.add(a),t.updateQueue=v}else k.add(a);break e}else{if(!(t&1)){Ia(i,u,t),js();break e}a=Error(E(426))}}else if(J&&s.mode&1){var x=Da(l);if(x!==null){!(x.flags&65536)&&(x.flags|=256),za(x,l,s,i,t),us(Tn(a,s));break e}}i=a=Tn(a,s),se!==4&&(se=2),lr===null?lr=[i]:lr.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var g=ud(i,a,t);Na(i,g);break e;case 1:s=a;var f=i.type,h=i.stateNode;if(!(i.flags&128)&&(typeof f.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(bt===null||!bt.has(h)))){i.flags|=65536,t&=-t,i.lanes|=t;var P=cd(i,s,t);Na(i,P);break e}}i=i.return}while(i!==null)}jd(n)}catch(R){t=R,ie===n&&n!==null&&(ie=n=n.return);continue}break}while(!0)}function Ed(){var e=Lo.current;return Lo.current=Oo,e===null?Oo:e}function js(){(se===0||se===3||se===2)&&(se=4),ce===null||!(Jt&268435455)&&!(Xo&268435455)||St(ce,me)}function Io(e,t){var n=z;z|=2;var r=Ed();(ce!==e||me!==t)&&(rt=null,Qt(e,t));do try{Mm();break}catch(o){Rd(e,o)}while(!0);if(ds(),z=n,Lo.current=r,ie!==null)throw Error(E(261));return ce=null,me=0,se}function Mm(){for(;ie!==null;)bd(ie)}function Am(){for(;ie!==null&&!sp();)bd(ie)}function bd(e){var t=Nd(e.alternate,e,Te);e.memoizedProps=e.pendingProps,t===null?jd(e):ie=t,Cs.current=null}function jd(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=jm(n,t),n!==null){n.flags&=32767,ie=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{se=6,ie=null;return}}else if(n=bm(n,t,Te),n!==null){ie=n;return}if(t=t.sibling,t!==null){ie=t;return}ie=t=e}while(t!==null);se===0&&(se=5)}function Bt(e,t,n){var r=V,o=Be.transition;try{Be.transition=null,V=1,Im(e,t,n,r)}finally{Be.transition=o,V=r}return null}function Im(e,t,n,r){do Rn();while(xt!==null);if(z&6)throw Error(E(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(E(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(yp(e,i),e===ce&&(ie=ce=null,me=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Yr||(Yr=!0,Td(vo,function(){return Rn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Be.transition,Be.transition=null;var l=V;V=1;var s=z;z|=4,Cs.current=null,Nm(e,n),Pd(n,e),rm(cl),ko=!!ul,cl=ul=null,e.current=n,Tm(n),ap(),z=s,V=l,Be.transition=i}else e.current=n;if(Yr&&(Yr=!1,xt=e,Ao=o),i=e.pendingLanes,i===0&&(bt=null),dp(n.stateNode),je(e,re()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Mo)throw Mo=!1,e=$l,$l=null,e;return Ao&1&&e.tag!==0&&Rn(),i=e.pendingLanes,i&1?e===Nl?sr++:(sr=0,Nl=e):sr=0,At(),null}function Rn(){if(xt!==null){var e=uc(Ao),t=Be.transition,n=V;try{if(Be.transition=null,V=16>e?16:e,xt===null)var r=!1;else{if(e=xt,xt=null,Ao=0,z&6)throw Error(E(331));var o=z;for(z|=4,N=e.current;N!==null;){var i=N,l=i.child;if(N.flags&16){var s=i.deletions;if(s!==null){for(var a=0;a<s.length;a++){var u=s[a];for(N=u;N!==null;){var d=N;switch(d.tag){case 0:case 11:case 15:ir(8,d,i)}var p=d.child;if(p!==null)p.return=d,N=p;else for(;N!==null;){d=N;var m=d.sibling,y=d.return;if(kd(d),d===u){N=null;break}if(m!==null){m.return=y,N=m;break}N=y}}}var k=i.alternate;if(k!==null){var v=k.child;if(v!==null){k.child=null;do{var x=v.sibling;v.sibling=null,v=x}while(v!==null)}}N=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,N=l;else e:for(;N!==null;){if(i=N,i.flags&2048)switch(i.tag){case 0:case 11:case 15:ir(9,i,i.return)}var g=i.sibling;if(g!==null){g.return=i.return,N=g;break e}N=i.return}}var f=e.current;for(N=f;N!==null;){l=N;var h=l.child;if(l.subtreeFlags&2064&&h!==null)h.return=l,N=h;else e:for(l=f;N!==null;){if(s=N,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Yo(9,s)}}catch(R){ne(s,s.return,R)}if(s===l){N=null;break e}var P=s.sibling;if(P!==null){P.return=s.return,N=P;break e}N=s.return}}if(z=o,At(),et&&typeof et.onPostCommitFiberRoot=="function")try{et.onPostCommitFiberRoot(Fo,e)}catch{}r=!0}return r}finally{V=n,Be.transition=t}}return!1}function Xa(e,t,n){t=Tn(n,t),t=ud(e,t,1),e=Et(e,t,1),t=we(),e!==null&&($r(e,1,t),je(e,t))}function ne(e,t,n){if(e.tag===3)Xa(e,e,n);else for(;t!==null;){if(t.tag===3){Xa(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(bt===null||!bt.has(r))){e=Tn(n,e),e=cd(t,e,1),t=Et(t,e,1),e=we(),t!==null&&($r(t,1,e),je(t,e));break}}t=t.return}}function Dm(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=we(),e.pingedLanes|=e.suspendedLanes&n,ce===e&&(me&n)===n&&(se===4||se===3&&(me&130023424)===me&&500>re()-Rs?Qt(e,0):_s|=n),je(e,t)}function $d(e,t){t===0&&(e.mode&1?(t=Br,Br<<=1,!(Br&130023424)&&(Br=4194304)):t=1);var n=we();e=dt(e,t),e!==null&&($r(e,t,n),je(e,n))}function zm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),$d(e,n)}function Um(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(t),$d(e,n)}var Nd;Nd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ee.current)Re=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Re=!1,Em(e,t,n);Re=!!(e.flags&131072)}else Re=!1,J&&t.flags&1048576&&Mc(t,Eo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;co(e,t),e=t.pendingProps;var o=bn(t,ke.current);_n(t,n),o=Ss(null,t,r,e,o,n);var i=ks();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,be(r)?(i=!0,_o(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,ms(t),o.updater=Jo,t.stateNode=o,o._reactInternals=t,Sl(t,r,e,n),t=wl(null,t,r,!0,i,n)):(t.tag=0,J&&i&&ss(t),xe(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(co(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Vm(r),e=Qe(r,e),o){case 0:t=xl(null,t,r,e,n);break e;case 1:t=Va(null,t,r,e,n);break e;case 11:t=Ua(null,t,r,e,n);break e;case 14:t=Ba(null,t,r,Qe(r.type,e),n);break e}throw Error(E(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Qe(r,o),xl(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Qe(r,o),Va(e,t,r,o,n);case 3:e:{if(md(t),e===null)throw Error(E(387));r=t.pendingProps,i=t.memoizedState,o=i.element,Bc(e,t),$o(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Tn(Error(E(423)),t),t=Fa(e,t,r,n,o);break e}else if(r!==o){o=Tn(Error(E(424)),t),t=Fa(e,t,r,n,o);break e}else for(Oe=Rt(t.stateNode.containerInfo.firstChild),Le=t,J=!0,We=null,n=zc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(jn(),r===o){t=ft(e,t,n);break e}xe(e,t,r,n)}t=t.child}return t;case 5:return Vc(t),e===null&&hl(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,dl(r,o)?l=null:i!==null&&dl(r,i)&&(t.flags|=32),pd(e,t),xe(e,t,l,n),t.child;case 6:return e===null&&hl(t),null;case 13:return gd(e,t,n);case 4:return gs(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=$n(t,null,r,n):xe(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Qe(r,o),Ua(e,t,r,o,n);case 7:return xe(e,t,t.pendingProps,n),t.child;case 8:return xe(e,t,t.pendingProps.children,n),t.child;case 12:return xe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,K(bo,r._currentValue),r._currentValue=l,i!==null)if(Je(i.value,l)){if(i.children===o.children&&!Ee.current){t=ft(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){l=i.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(i.tag===1){a=at(-1,n&-n),a.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?a.next=a:(a.next=d.next,d.next=a),u.pending=a}}i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),yl(i.return,n,t),s.lanes|=n;break}a=a.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(E(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),yl(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}xe(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,_n(t,n),o=Ve(o),r=r(o),t.flags|=1,xe(e,t,r,n),t.child;case 14:return r=t.type,o=Qe(r,t.pendingProps),o=Qe(r.type,o),Ba(e,t,r,o,n);case 15:return dd(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Qe(r,o),co(e,t),t.tag=1,be(r)?(e=!0,_o(t)):e=!1,_n(t,n),ad(t,r,o),Sl(t,r,o,n),wl(null,t,r,!0,e,n);case 19:return hd(e,t,n);case 22:return fd(e,t,n)}throw Error(E(156,t.tag))};function Td(e,t){return ic(e,t)}function Bm(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ue(e,t,n,r){return new Bm(e,t,n,r)}function $s(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Vm(e){if(typeof e=="function")return $s(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Gl)return 11;if(e===Jl)return 14}return 2}function $t(e,t){var n=e.alternate;return n===null?(n=Ue(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function mo(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")$s(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case cn:return Kt(n.children,o,i,t);case ql:l=8,o|=8;break;case Fi:return e=Ue(12,n,t,o|2),e.elementType=Fi,e.lanes=i,e;case Hi:return e=Ue(13,n,t,o),e.elementType=Hi,e.lanes=i,e;case Qi:return e=Ue(19,n,t,o),e.elementType=Qi,e.lanes=i,e;case Vu:return Zo(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Uu:l=10;break e;case Bu:l=9;break e;case Gl:l=11;break e;case Jl:l=14;break e;case ht:l=16,r=null;break e}throw Error(E(130,e==null?e:typeof e,""))}return t=Ue(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function Kt(e,t,n,r){return e=Ue(7,e,r,t),e.lanes=n,e}function Zo(e,t,n,r){return e=Ue(22,e,r,t),e.elementType=Vu,e.lanes=n,e.stateNode={isHidden:!1},e}function Ai(e,t,n){return e=Ue(6,e,null,t),e.lanes=n,e}function Ii(e,t,n){return t=Ue(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Fm(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=yi(0),this.expirationTimes=yi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=yi(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Ns(e,t,n,r,o,i,l,s,a){return e=new Fm(e,t,n,s,a),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ue(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ms(i),e}function Hm(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:un,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Od(e){if(!e)return Ot;e=e._reactInternals;e:{if(Zt(e)!==e||e.tag!==1)throw Error(E(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(be(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(E(171))}if(e.tag===1){var n=e.type;if(be(n))return Oc(e,n,t)}return t}function Ld(e,t,n,r,o,i,l,s,a){return e=Ns(n,r,!0,e,o,i,l,s,a),e.context=Od(null),n=e.current,r=we(),o=jt(n),i=at(r,o),i.callback=t??null,Et(n,i,o),e.current.lanes=o,$r(e,o,r),je(e,r),e}function ei(e,t,n,r){var o=t.current,i=we(),l=jt(o);return n=Od(n),t.context===null?t.context=n:t.pendingContext=n,t=at(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Et(o,t,l),e!==null&&(Ge(e,o,l,i),so(e,o,l)),l}function Do(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Za(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ts(e,t){Za(e,t),(e=e.alternate)&&Za(e,t)}function Qm(){return null}var Md=typeof reportError=="function"?reportError:function(e){console.error(e)};function Os(e){this._internalRoot=e}ti.prototype.render=Os.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(E(409));ei(e,t,null,null)};ti.prototype.unmount=Os.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Yt(function(){ei(null,e,null,null)}),t[ct]=null}};function ti(e){this._internalRoot=e}ti.prototype.unstable_scheduleHydration=function(e){if(e){var t=fc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<vt.length&&t!==0&&t<vt[n].priority;n++);vt.splice(n,0,e),n===0&&mc(e)}};function Ls(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ni(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function eu(){}function Km(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=Do(l);i.call(u)}}var l=Ld(t,r,e,0,null,!1,!1,"",eu);return e._reactRootContainer=l,e[ct]=l.current,hr(e.nodeType===8?e.parentNode:e),Yt(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var u=Do(a);s.call(u)}}var a=Ns(e,0,!1,null,null,!1,!1,"",eu);return e._reactRootContainer=a,e[ct]=a.current,hr(e.nodeType===8?e.parentNode:e),Yt(function(){ei(t,a,n,r)}),a}function ri(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var s=o;o=function(){var a=Do(l);s.call(a)}}ei(t,l,e,o)}else l=Km(n,t,e,o,r);return Do(l)}cc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Jn(t.pendingLanes);n!==0&&(Zl(t,n|1),je(t,re()),!(z&6)&&(On=re()+500,At()))}break;case 13:Yt(function(){var r=dt(e,1);if(r!==null){var o=we();Ge(r,e,1,o)}}),Ts(e,1)}};es=function(e){if(e.tag===13){var t=dt(e,134217728);if(t!==null){var n=we();Ge(t,e,134217728,n)}Ts(e,134217728)}};dc=function(e){if(e.tag===13){var t=jt(e),n=dt(e,t);if(n!==null){var r=we();Ge(n,e,t,r)}Ts(e,t)}};fc=function(){return V};pc=function(e,t){var n=V;try{return V=e,t()}finally{V=n}};tl=function(e,t,n){switch(t){case"input":if(qi(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Wo(r);if(!o)throw Error(E(90));Hu(r),qi(r,o)}}}break;case"textarea":Ku(e,n);break;case"select":t=n.value,t!=null&&xn(e,!!n.multiple,t,!1)}};Zu=Es;ec=Yt;var Wm={usingClientEntryPoint:!1,Events:[Tr,mn,Wo,Yu,Xu,Es]},Kn={findFiberByHostInstance:Vt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},qm={bundleType:Kn.bundleType,version:Kn.version,rendererPackageName:Kn.rendererPackageName,rendererConfig:Kn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:pt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=rc(e),e===null?null:e.stateNode},findFiberByHostInstance:Kn.findFiberByHostInstance||Qm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xr.isDisabled&&Xr.supportsFiber)try{Fo=Xr.inject(qm),et=Xr}catch{}}Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Wm;Ae.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ls(t))throw Error(E(200));return Hm(e,t,null,n)};Ae.createRoot=function(e,t){if(!Ls(e))throw Error(E(299));var n=!1,r="",o=Md;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Ns(e,1,!1,null,null,n,!1,r,o),e[ct]=t.current,hr(e.nodeType===8?e.parentNode:e),new Os(t)};Ae.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(E(188)):(e=Object.keys(e).join(","),Error(E(268,e)));return e=rc(t),e=e===null?null:e.stateNode,e};Ae.flushSync=function(e){return Yt(e)};Ae.hydrate=function(e,t,n){if(!ni(t))throw Error(E(200));return ri(null,e,t,!0,n)};Ae.hydrateRoot=function(e,t,n){if(!Ls(e))throw Error(E(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=Md;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Ld(t,null,e,1,n??null,o,!1,i,l),e[ct]=t.current,hr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new ti(t)};Ae.render=function(e,t,n){if(!ni(t))throw Error(E(200));return ri(null,e,t,!1,n)};Ae.unmountComponentAtNode=function(e){if(!ni(e))throw Error(E(40));return e._reactRootContainer?(Yt(function(){ri(null,null,e,!1,function(){e._reactRootContainer=null,e[ct]=null})}),!0):!1};Ae.unstable_batchedUpdates=Es;Ae.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ni(n))throw Error(E(200));if(e==null||e._reactInternals===void 0)throw Error(E(38));return ri(e,t,n,!1,r)};Ae.version="18.3.1-next-f1338f8080-20240426";function Ad(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ad)}catch(e){console.error(e)}}Ad(),Au.exports=Ae;var it=Au.exports,Id,tu=it;Id=Bi.createRoot=tu.createRoot,Bi.hydrateRoot=tu.hydrateRoot;/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _r(){return _r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_r.apply(null,arguments)}var wt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(wt||(wt={}));const nu="popstate";function Gm(e){e===void 0&&(e={});function t(o,i){let{pathname:l="/",search:s="",hash:a=""}=en(o.location.hash.substr(1));return!l.startsWith("/")&&!l.startsWith(".")&&(l="/"+l),Ll("",{pathname:l,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(o,i){let l=o.document.querySelector("base"),s="";if(l&&l.getAttribute("href")){let a=o.location.href,u=a.indexOf("#");s=u===-1?a:a.slice(0,u)}return s+"#"+(typeof i=="string"?i:zo(i))}function r(o,i){Ms(o.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(i)+")")}return Ym(t,n,r,e)}function oe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Ms(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Jm(){return Math.random().toString(36).substr(2,8)}function ru(e,t){return{usr:e.state,key:e.key,idx:t}}function Ll(e,t,n,r){return n===void 0&&(n=null),_r({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?en(t):t,{state:n,key:t&&t.key||r||Jm()})}function zo(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function en(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Ym(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,l=o.history,s=wt.Pop,a=null,u=d();u==null&&(u=0,l.replaceState(_r({},l.state,{idx:u}),""));function d(){return(l.state||{idx:null}).idx}function p(){s=wt.Pop;let x=d(),g=x==null?null:x-u;u=x,a&&a({action:s,location:v.location,delta:g})}function m(x,g){s=wt.Push;let f=Ll(v.location,x,g);n&&n(f,x),u=d()+1;let h=ru(f,u),P=v.createHref(f);try{l.pushState(h,"",P)}catch(R){if(R instanceof DOMException&&R.name==="DataCloneError")throw R;o.location.assign(P)}i&&a&&a({action:s,location:v.location,delta:1})}function y(x,g){s=wt.Replace;let f=Ll(v.location,x,g);n&&n(f,x),u=d();let h=ru(f,u),P=v.createHref(f);l.replaceState(h,"",P),i&&a&&a({action:s,location:v.location,delta:0})}function k(x){let g=o.location.origin!=="null"?o.location.origin:o.location.href,f=typeof x=="string"?x:zo(x);return f=f.replace(/ $/,"%20"),oe(g,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,g)}let v={get action(){return s},get location(){return e(o,l)},listen(x){if(a)throw new Error("A history only accepts one active listener");return o.addEventListener(nu,p),a=x,()=>{o.removeEventListener(nu,p),a=null}},createHref(x){return t(o,x)},createURL:k,encodeLocation(x){let g=k(x);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:m,replace:y,go(x){return l.go(x)}};return v}var ou;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(ou||(ou={}));function Xm(e,t,n){return n===void 0&&(n="/"),Zm(e,t,n)}function Zm(e,t,n,r){let o=typeof t=="string"?en(t):t,i=As(o.pathname||"/",n);if(i==null)return null;let l=Dd(e);eg(l);let s=null,a=fg(i);for(let u=0;s==null&&u<l.length;++u)s=ug(l[u],a);return s}function Dd(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(i,l,s)=>{let a={relativePath:s===void 0?i.path||"":s,caseSensitive:i.caseSensitive===!0,childrenIndex:l,route:i};a.relativePath.startsWith("/")&&(oe(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let u=Nt([r,a.relativePath]),d=n.concat(a);i.children&&i.children.length>0&&(oe(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Dd(i.children,t,d,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:sg(u,i.index),routesMeta:d})};return e.forEach((i,l)=>{var s;if(i.path===""||!((s=i.path)!=null&&s.includes("?")))o(i,l);else for(let a of zd(i.path))o(i,l,a)}),t}function zd(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let l=zd(r.join("/")),s=[];return s.push(...l.map(a=>a===""?i:[i,a].join("/"))),o&&s.push(...l),s.map(a=>e.startsWith("/")&&a===""?"/":a)}function eg(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:ag(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const tg=/^:[\w-]+$/,ng=3,rg=2,og=1,ig=10,lg=-2,iu=e=>e==="*";function sg(e,t){let n=e.split("/"),r=n.length;return n.some(iu)&&(r+=lg),t&&(r+=rg),n.filter(o=>!iu(o)).reduce((o,i)=>o+(tg.test(i)?ng:i===""?og:ig),r)}function ag(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function ug(e,t,n){let{routesMeta:r}=e,o={},i="/",l=[];for(let s=0;s<r.length;++s){let a=r[s],u=s===r.length-1,d=i==="/"?t:t.slice(i.length)||"/",p=cg({path:a.relativePath,caseSensitive:a.caseSensitive,end:u},d),m=a.route;if(!p)return null;Object.assign(o,p.params),l.push({params:o,pathname:Nt([i,p.pathname]),pathnameBase:gg(Nt([i,p.pathnameBase])),route:m}),p.pathnameBase!=="/"&&(i=Nt([i,p.pathnameBase]))}return l}function cg(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=dg(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],l=i.replace(/(.)\/+$/,"$1"),s=o.slice(1);return{params:r.reduce((u,d,p)=>{let{paramName:m,isOptional:y}=d;if(m==="*"){let v=s[p]||"";l=i.slice(0,i.length-v.length).replace(/(.)\/+$/,"$1")}const k=s[p];return y&&!k?u[m]=void 0:u[m]=(k||"").replace(/%2F/g,"/"),u},{}),pathname:i,pathnameBase:l,pattern:e}}function dg(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Ms(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,s,a)=>(r.push({paramName:s,isOptional:a!=null}),a?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function fg(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Ms(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function As(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function pg(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?en(e):e,i;return n?(n=Ud(n),n.startsWith("/")?i=lu(n.substring(1),"/"):i=lu(n,t)):i=t,{pathname:i,search:hg(r),hash:yg(o)}}function lu(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Di(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function mg(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Is(e,t){let n=mg(e);return t?n.map((r,o)=>o===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Ds(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=en(e):(o=_r({},e),oe(!o.pathname||!o.pathname.includes("?"),Di("?","pathname","search",o)),oe(!o.pathname||!o.pathname.includes("#"),Di("#","pathname","hash",o)),oe(!o.search||!o.search.includes("#"),Di("#","search","hash",o)));let i=e===""||o.pathname==="",l=i?"/":o.pathname,s;if(l==null)s=n;else{let p=t.length-1;if(!r&&l.startsWith("..")){let m=l.split("/");for(;m[0]==="..";)m.shift(),p-=1;o.pathname=m.join("/")}s=p>=0?t[p]:"/"}let a=pg(o,s),u=l&&l!=="/"&&l.endsWith("/"),d=(i||l===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(u||d)&&(a.pathname+="/"),a}const Ud=e=>e.replace(/\/\/+/g,"/"),Nt=e=>Ud(e.join("/")),gg=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),hg=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,yg=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function vg(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Bd=["post","put","patch","delete"];new Set(Bd);const Sg=["get",...Bd];new Set(Sg);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Rr(){return Rr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Rr.apply(null,arguments)}const zs=S.createContext(null),kg=S.createContext(null),It=S.createContext(null),oi=S.createContext(null),mt=S.createContext({outlet:null,matches:[],isDataRoute:!1}),Vd=S.createContext(null);function xg(e,t){let{relative:n}=t===void 0?{}:t;In()||oe(!1);let{basename:r,navigator:o}=S.useContext(It),{hash:i,pathname:l,search:s}=Qd(e,{relative:n}),a=l;return r!=="/"&&(a=l==="/"?r:Nt([r,l])),o.createHref({pathname:a,search:s,hash:i})}function In(){return S.useContext(oi)!=null}function Dn(){return In()||oe(!1),S.useContext(oi).location}function Fd(e){S.useContext(It).static||S.useLayoutEffect(e)}function Hd(){let{isDataRoute:e}=S.useContext(mt);return e?Mg():wg()}function wg(){In()||oe(!1);let e=S.useContext(zs),{basename:t,future:n,navigator:r}=S.useContext(It),{matches:o}=S.useContext(mt),{pathname:i}=Dn(),l=JSON.stringify(Is(o,n.v7_relativeSplatPath)),s=S.useRef(!1);return Fd(()=>{s.current=!0}),S.useCallback(function(u,d){if(d===void 0&&(d={}),!s.current)return;if(typeof u=="number"){r.go(u);return}let p=Ds(u,JSON.parse(l),i,d.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:Nt([t,p.pathname])),(d.replace?r.replace:r.push)(p,d.state,d)},[t,r,l,i,e])}function Pg(){let{matches:e}=S.useContext(mt),t=e[e.length-1];return t?t.params:{}}function Qd(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=S.useContext(It),{matches:o}=S.useContext(mt),{pathname:i}=Dn(),l=JSON.stringify(Is(o,r.v7_relativeSplatPath));return S.useMemo(()=>Ds(e,JSON.parse(l),i,n==="path"),[e,l,i,n])}function Cg(e,t){return _g(e,t)}function _g(e,t,n,r){In()||oe(!1);let{navigator:o}=S.useContext(It),{matches:i}=S.useContext(mt),l=i[i.length-1],s=l?l.params:{};l&&l.pathname;let a=l?l.pathnameBase:"/";l&&l.route;let u=Dn(),d;if(t){var p;let x=typeof t=="string"?en(t):t;a==="/"||(p=x.pathname)!=null&&p.startsWith(a)||oe(!1),d=x}else d=u;let m=d.pathname||"/",y=m;if(a!=="/"){let x=a.replace(/^\//,"").split("/");y="/"+m.replace(/^\//,"").split("/").slice(x.length).join("/")}let k=Xm(e,{pathname:y}),v=$g(k&&k.map(x=>Object.assign({},x,{params:Object.assign({},s,x.params),pathname:Nt([a,o.encodeLocation?o.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?a:Nt([a,o.encodeLocation?o.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),i,n,r);return t&&v?S.createElement(oi.Provider,{value:{location:Rr({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:wt.Pop}},v):v}function Rg(){let e=Lg(),t=vg(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},t),n?S.createElement("pre",{style:o},n):null,null)}const Eg=S.createElement(Rg,null);class bg extends S.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?S.createElement(mt.Provider,{value:this.props.routeContext},S.createElement(Vd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function jg(e){let{routeContext:t,match:n,children:r}=e,o=S.useContext(zs);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),S.createElement(mt.Provider,{value:t},r)}function $g(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let l=e,s=(o=n)==null?void 0:o.errors;if(s!=null){let d=l.findIndex(p=>p.route.id&&(s==null?void 0:s[p.route.id])!==void 0);d>=0||oe(!1),l=l.slice(0,Math.min(l.length,d+1))}let a=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<l.length;d++){let p=l[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(u=d),p.route.id){let{loaderData:m,errors:y}=n,k=p.route.loader&&m[p.route.id]===void 0&&(!y||y[p.route.id]===void 0);if(p.route.lazy||k){a=!0,u>=0?l=l.slice(0,u+1):l=[l[0]];break}}}return l.reduceRight((d,p,m)=>{let y,k=!1,v=null,x=null;n&&(y=s&&p.route.id?s[p.route.id]:void 0,v=p.route.errorElement||Eg,a&&(u<0&&m===0?(Ag("route-fallback"),k=!0,x=null):u===m&&(k=!0,x=p.route.hydrateFallbackElement||null)));let g=t.concat(l.slice(0,m+1)),f=()=>{let h;return y?h=v:k?h=x:p.route.Component?h=S.createElement(p.route.Component,null):p.route.element?h=p.route.element:h=d,S.createElement(jg,{match:p,routeContext:{outlet:d,matches:g,isDataRoute:n!=null},children:h})};return n&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?S.createElement(bg,{location:n.location,revalidation:n.revalidation,component:v,error:y,children:f(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):f()},null)}var Kd=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Kd||{}),Wd=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Wd||{});function Ng(e){let t=S.useContext(zs);return t||oe(!1),t}function Tg(e){let t=S.useContext(kg);return t||oe(!1),t}function Og(e){let t=S.useContext(mt);return t||oe(!1),t}function qd(e){let t=Og(),n=t.matches[t.matches.length-1];return n.route.id||oe(!1),n.route.id}function Lg(){var e;let t=S.useContext(Vd),n=Tg(),r=qd();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Mg(){let{router:e}=Ng(Kd.UseNavigateStable),t=qd(Wd.UseNavigateStable),n=S.useRef(!1);return Fd(()=>{n.current=!0}),S.useCallback(function(o,i){i===void 0&&(i={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,Rr({fromRouteId:t},i)))},[e,t])}const su={};function Ag(e,t,n){su[e]||(su[e]=!0)}function Ig(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Ml(e){let{to:t,replace:n,state:r,relative:o}=e;In()||oe(!1);let{future:i,static:l}=S.useContext(It),{matches:s}=S.useContext(mt),{pathname:a}=Dn(),u=Hd(),d=Ds(t,Is(s,i.v7_relativeSplatPath),a,o==="path"),p=JSON.stringify(d);return S.useEffect(()=>u(JSON.parse(p),{replace:n,state:r,relative:o}),[u,p,o,n,r]),null}function Xn(e){oe(!1)}function Dg(e){let{basename:t="/",children:n=null,location:r,navigationType:o=wt.Pop,navigator:i,static:l=!1,future:s}=e;In()&&oe(!1);let a=t.replace(/^\/*/,"/"),u=S.useMemo(()=>({basename:a,navigator:i,static:l,future:Rr({v7_relativeSplatPath:!1},s)}),[a,s,i,l]);typeof r=="string"&&(r=en(r));let{pathname:d="/",search:p="",hash:m="",state:y=null,key:k="default"}=r,v=S.useMemo(()=>{let x=As(d,a);return x==null?null:{location:{pathname:x,search:p,hash:m,state:y,key:k},navigationType:o}},[a,d,p,m,y,k,o]);return v==null?null:S.createElement(It.Provider,{value:u},S.createElement(oi.Provider,{children:n,value:v}))}function zg(e){let{children:t,location:n}=e;return Cg(Al(t),n)}new Promise(()=>{});function Al(e,t){t===void 0&&(t=[]);let n=[];return S.Children.forEach(e,(r,o)=>{if(!S.isValidElement(r))return;let i=[...t,o];if(r.type===S.Fragment){n.push.apply(n,Al(r.props.children,i));return}r.type!==Xn&&oe(!1),!r.props.index||!r.props.children||oe(!1);let l={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=Al(r.props.children,i)),n.push(l)}),n}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Il(){return Il=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Il.apply(null,arguments)}function Ug(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function Bg(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Vg(e,t){return e.button===0&&(!t||t==="_self")&&!Bg(e)}const Fg=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Hg="6";try{window.__reactRouterVersion=Hg}catch{}const Qg="startTransition",au=Df[Qg];function Kg(e){let{basename:t,children:n,future:r,window:o}=e,i=S.useRef();i.current==null&&(i.current=Gm({window:o,v5Compat:!0}));let l=i.current,[s,a]=S.useState({action:l.action,location:l.location}),{v7_startTransition:u}=r||{},d=S.useCallback(p=>{u&&au?au(()=>a(p)):a(p)},[a,u]);return S.useLayoutEffect(()=>l.listen(d),[l,d]),S.useEffect(()=>Ig(r),[r]),S.createElement(Dg,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:l,future:r})}const Wg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",qg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Dl=S.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:i,replace:l,state:s,target:a,to:u,preventScrollReset:d,viewTransition:p}=t,m=Ug(t,Fg),{basename:y}=S.useContext(It),k,v=!1;if(typeof u=="string"&&qg.test(u)&&(k=u,Wg))try{let h=new URL(window.location.href),P=u.startsWith("//")?new URL(h.protocol+u):new URL(u),R=As(P.pathname,y);P.origin===h.origin&&R!=null?u=R+P.search+P.hash:v=!0}catch{}let x=xg(u,{relative:o}),g=Gg(u,{replace:l,state:s,target:a,preventScrollReset:d,relative:o,viewTransition:p});function f(h){r&&r(h),h.defaultPrevented||g(h)}return S.createElement("a",Il({},m,{href:k||x,onClick:v||i?r:f,ref:n,target:a}))});var uu;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(uu||(uu={}));var cu;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(cu||(cu={}));function Gg(e,t){let{target:n,replace:r,state:o,preventScrollReset:i,relative:l,viewTransition:s}=t===void 0?{}:t,a=Hd(),u=Dn(),d=Qd(e,{relative:l});return S.useCallback(p=>{if(Vg(p,n)){p.preventDefault();let m=r!==void 0?r:zo(u)===zo(d);a(e,{replace:m,state:o,preventScrollReset:i,relative:l,viewTransition:s})}},[u,a,d,r,o,n,e,i,l,s])}const Jg="https://github.com/frankvane/vane-components";class Yg extends jr.Component{constructor(){super(...arguments);Ks(this,"state",{error:null})}static getDerivedStateFromError(n){return{error:n}}render(){var n;return this.state.error?c.jsxs("div",{className:"crash",role:"alert",children:[c.jsx("h3",{children:"这个页面炸了"}),c.jsx("pre",{children:String(((n=this.state.error)==null?void 0:n.stack)||this.state.error)}),c.jsx("button",{type:"button",onClick:()=>this.setState({error:null}),children:"重试"})]}):this.props.children}}function Gd(e,t){return String(e.entries.indexOf(t)+1).padStart(2,"0")}function Xg({demos:e,pathname:t}){var a;const{groups:n,entries:r,label:o}=e,i=(a=r.find(u=>t===`/demo/${u.meta.slug}`))==null?void 0:a.meta.group,[l,s]=S.useState(()=>{var d;const u=(d=n[0])==null?void 0:d.key;return Object.fromEntries(n.map(p=>[p.key,p.key===(i??u)]))});return S.useEffect(()=>{i&&s(u=>u[i]?u:{...u,[i]:!0})},[i]),c.jsxs("div",{className:"nav-section",children:[c.jsxs("div",{className:"nav-section-head",children:[c.jsx("span",{children:o}),c.jsxs("code",{children:[r.length," demos"]})]}),n.map(u=>{const d=r.filter(m=>m.meta.group===u.key);if(d.length===0)return null;const p=l[u.key]??!1;return c.jsxs("div",{className:"nav-group",children:[c.jsxs("button",{type:"button",className:`nav-group-head${i===u.key?" is-current":""}`,onClick:()=>s(m=>({...m,[u.key]:!p})),"aria-expanded":p,children:[c.jsx("span",{className:`nav-caret${p?" is-open":""}`,"aria-hidden":!0,children:"▸"}),u.label,c.jsx("code",{children:d.length})]}),p?c.jsx("div",{className:"nav-list",children:d.map(m=>c.jsxs(Dl,{to:`/demo/${m.meta.slug}`,className:`nav-sub${t===`/demo/${m.meta.slug}`?" is-active":""}`,children:[c.jsx("em",{"aria-hidden":!0,children:Gd(e,m)}),m.meta.title]},m.meta.slug))}):null]},u.key)})]})}function Zg({demos:e}){var s;const{slug:t}=Pg(),{entries:n,detail:r}=e,o=t?n.find(a=>a.meta.slug===t):void 0,i=(s=n[0])==null?void 0:s.meta.slug;if(!o)return c.jsx(Ml,{to:i?`/demo/${i}`:"/",replace:!0});const l=n.indexOf(o)+1;return c.jsx(jr.Fragment,{children:r(o,l)},o.meta.slug)}function eh({config:e}){var p,m;const{pathname:t}=Dn(),[n,r]=S.useState(!1),[o,i]=S.useState(!1);S.useEffect(()=>r(!1),[t]);const l=S.useCallback(()=>i(y=>!y),[]);S.useEffect(()=>{const y=k=>{const v=k.target,x=v&&(v.tagName==="INPUT"||v.tagName==="TEXTAREA"||v.isContentEditable);k.key==="Escape"&&r(!1),!x&&(k.key==="g"||k.key==="G")&&!k.metaKey&&!k.ctrlKey&&i(g=>!g)};return window.addEventListener("keydown",y),()=>window.removeEventListener("keydown",y)},[]);const s=e.demos,a=(p=s.entries[0])==null?void 0:p.meta.slug,u=S.useMemo(()=>{if(!t.startsWith("/demo"))return e.crumb(t);const y=t.replace(/^\/demo\/?/,""),k=s.entries.find(v=>v.meta.slug===y);return k?`demo ${Gd(s,k)} · ${k.meta.title}`:"demo · 逐项示例"},[t,e,s]),d=S.useMemo(()=>e.nav.map((y,k)=>({...y,no:String(k+1).padStart(2,"0")})),[e.nav]);return c.jsxs("div",{className:`shell${n?" is-nav-open":""}${o?" is-guides":""}`,children:[c.jsx("a",{className:"skip-link",href:"#main",onClick:y=>{y.preventDefault();const k=document.getElementById("main");k==null||k.setAttribute("tabindex","-1"),k==null||k.focus(),k==null||k.scrollIntoView({block:"start"})},children:"跳到内容"}),c.jsxs("aside",{className:"side","aria-label":"站点导航",children:[c.jsxs(Dl,{to:"/",className:"brand",children:[c.jsx("span",{className:"brand-mark","aria-hidden":!0,children:e.brand}),c.jsxs("span",{children:[c.jsx("strong",{children:e.pkg}),c.jsx("em",{children:e.subtitle})]})]}),c.jsxs("nav",{children:[d.map(y=>c.jsxs(Dl,{to:y.to,className:`nav-item${t===y.to?" is-active":""}`,"aria-current":t===y.to?"page":void 0,children:[c.jsx("em",{"aria-hidden":!0,children:y.no}),c.jsx("span",{children:y.label}),y.hint?c.jsx("code",{children:y.hint}):null]},y.to)),c.jsx(Xg,{demos:e.demos,pathname:t})]}),c.jsxs("div",{className:"side-foot",children:[c.jsx("p",{children:e.footer[0]}),c.jsx("p",{className:"muted",children:e.footer[1]})]})]}),c.jsx("button",{type:"button",className:"scrim","aria-label":"关闭导航",tabIndex:n?0:-1,onClick:()=>r(!1)}),c.jsxs("div",{className:"main",id:"main",children:[c.jsxs("header",{className:"topbar",children:[c.jsx("button",{type:"button",className:"nav-toggle","aria-label":n?"关闭导航":"打开导航","aria-expanded":n,onClick:()=>r(y=>!y),children:c.jsx("span",{"aria-hidden":!0})}),c.jsx("span",{className:"crumb",children:u}),c.jsxs("div",{className:"topbar-right",children:[(m=e.stats)==null?void 0:m.map(y=>c.jsxs("span",{className:"topbar-stat",title:y.title,children:[c.jsx("b",{children:y.value})," ",y.label]},y.label)),c.jsxs("button",{type:"button",className:"topbar-btn","aria-pressed":o,onClick:l,title:"显示栏位参考线（快捷键 G）",children:[c.jsx("i",{"aria-hidden":!0}),"guides"]}),c.jsx("a",{className:"topbar-link",href:e.sourceUrl??Jg,target:"_blank",rel:"noreferrer",children:"source ↗"})]})]}),c.jsx("div",{className:"guides","aria-hidden":!0}),c.jsx(S.Suspense,{fallback:c.jsx("div",{className:"loading",children:"loading modules…"}),children:c.jsx(Yg,{children:c.jsxs(zg,{children:[e.routes.map(y=>c.jsx(Xn,{path:y.path,element:y.element},y.path)),c.jsx(Xn,{path:"/demo",element:c.jsx(Ml,{to:a?`/demo/${a}`:"/",replace:!0})}),c.jsx(Xn,{path:"/demo/:slug",element:c.jsx(Zg,{demos:e.demos})}),c.jsx(Xn,{path:"*",element:c.jsx(Ml,{to:"/",replace:!0})})]})})})]})]})}function th({config:e}){return c.jsx(Kg,{children:c.jsx(eh,{config:e})})}const nh="modulepreload",rh=function(e,t){return new URL(e,t).href},du={},Us=function(t,n,r){let o=Promise.resolve();if(n&&n.length>0){const l=document.getElementsByTagName("link"),s=document.querySelector("meta[property=csp-nonce]"),a=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));o=Promise.allSettled(n.map(u=>{if(u=rh(u,r),u in du)return;du[u]=!0;const d=u.endsWith(".css"),p=d?'[rel="stylesheet"]':"";if(!!r)for(let k=l.length-1;k>=0;k--){const v=l[k];if(v.href===u&&(!d||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${p}`))return;const y=document.createElement("link");if(y.rel=d?"stylesheet":nh,d||(y.as="script"),y.crossOrigin="",y.href=u,a&&y.setAttribute("nonce",a),document.head.appendChild(y),d)return new Promise((k,v)=>{y.addEventListener("load",k),y.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${u}`)))})}))}function i(l){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=l,window.dispatchEvent(s),!s.defaultPrevented)throw l}return o.then(l=>{for(const s of l||[])s.status==="rejected"&&i(s.reason);return t().catch(i)})};function Jd(e,t=0){if(typeof e!="number")return 1/0;const n=Math.max(0,t);return Math.max(0,e-n)}function oh(e,t={}){if(!e)return 0;const n=typeof e.stock=="number"?e.stock:1/0,r=Jd(e.quota,t.purchasedCount??0);return Math.min(n,r,t.max??1/0)}function Er(e){return typeof e!="number"||!Number.isFinite(e)?"0.00":e.toFixed(2)}const Yd=S.forwardRef((e,t)=>{const{attributes:n,selection:r={},disabledMap:o={},variant:i=null,purchasable:l=!0,onSelectOption:s,slots:a,children:u,containerClassName:d,containerStyle:p,onMount:m,onUnmount:y,debug:k,containerRefExternal:v}=e,x=S.useRef(null),g=v??x,[,f]=S.useState(0),[h,P]=S.useState(!1);S.useImperativeHandle(t,()=>({getContainer:()=>g.current,forceUpdate:()=>f(_=>_+1),getSize:()=>{var _,w;return{width:((_=g.current)==null?void 0:_.offsetWidth)??0,height:((w=g.current)==null?void 0:w.offsetHeight)??0}},getSelection:()=>r,getVariant:()=>i}),[r,i,g]),S.useEffect(()=>(k&&console.debug("[SkuSelectorCore] mounted"),P(!0),m==null||m(),()=>y==null?void 0:y()),[]);const R=S.useMemo(()=>{const _=new Map;for(const w of n){const C=new Map;for(const A of w.options??[])C.set(A.id,A.label);_.set(w.name,C)}return _},[n]),b=S.useCallback((_,w)=>{var C;return((C=R.get(_))==null?void 0:C.get(w))??w},[R]),j=n.map(_=>({attr:_,optionId:r[_.name]})).filter(_=>!!_.optionId);return c.jsxs("div",{ref:g,className:d,style:{position:"relative",color:"#1f2328",...p},children:[a==null?void 0:a.before,c.jsx("div",{"data-testid":"sku-groups",children:n.map(_=>{var H;const w=_.options??[],C=o[_.name],A=r[_.name]??((H=w.find(L=>!(C!=null&&C.has(L.id))))==null?void 0:H.id);return c.jsxs("div",{role:"radiogroup","aria-label":_.name,"data-testid":`sku-attr-${_.name}`,style:{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap",marginBottom:8},children:[c.jsx("span",{style:{fontSize:12,color:"#4a5056",minWidth:48},children:_.name}),w.map(L=>{const F=r[_.name]===L.id,he=(C==null?void 0:C.has(L.id))??!1,fe=he&&!F;return c.jsxs("button",{type:"button",role:"radio","aria-checked":F,tabIndex:L.id===A?0:-1,"data-testid":`sku-opt-${_.name}-${L.id}`,"data-selected":F?"true":"false","data-disabled":he?"true":"false",disabled:fe,onClick:()=>s==null?void 0:s(_.name,L.id),style:{display:"inline-flex",alignItems:"center",gap:4,padding:"6px 10px",borderRadius:6,border:F?"2px solid #2b7de9":"1px solid #d0d4da",background:he?"#f2f3f5":F?"#e8f0fe":"#fff",color:he?"#6f757b":"#1f2328",cursor:fe?"not-allowed":"pointer",fontSize:12},children:[L.image?c.jsx("img",{src:L.image,alt:"",style:{width:16,height:16,objectFit:"cover",borderRadius:3}}):null,L.label]},L.id)})]},_.name)})}),c.jsx("div",{"data-testid":"sku-summary",style:{fontSize:12,color:"#3c4147",marginTop:4},children:j.length?c.jsxs("span",{children:["已选：",j.map(_=>`${_.attr.name}:${b(_.attr.name,_.optionId)}`).join(" / "),i?c.jsxs("span",{"data-testid":"sku-summary-variant",children:["（SKU：",i.sku,typeof i.price=="number"?` · ¥${Er(i.price)}`:"",typeof i.stock=="number"?` · 库存 ${i.stock}`:"",l?"":" · 缺货","）"]}):c.jsx("span",{"data-testid":"sku-summary-novariant",children:"（无可售组合）"})]}):c.jsx("span",{children:"请选择规格"})}),a==null?void 0:a.overlay,a==null?void 0:a.after,a==null?void 0:a.footer,u,h?c.jsx("span",{"data-testid":"sku-mounted",hidden:!0}):null]})});Yd.displayName="SkuSelectorCore";function ih(){const e=new Map,t=new Map;let n=0;const r=(s,a)=>{const u=e.get(s);if(u){if(n>=50){console.warn(`[PluginBus] emit depth exceeded: "${s}"`);return}n+=1;for(const d of[...u])try{d(a)}catch(p){console.warn(`[PluginBus] handler error for event "${s}"`,p)}n-=1}},o=(s,a)=>{let u=e.get(s);return u||(u=new Set,e.set(s,u)),u.add(a),()=>{u==null||u.delete(a)}},i=(s,a)=>{const u=d=>{try{a(d)}finally{l(s,u)}};return o(s,u)},l=(s,a)=>{var u;if(!a){e.delete(s);return}(u=e.get(s))==null||u.delete(a)};return{emit:r,on:o,once:i,off:l,getData:s=>t.get(s),setData:(s,a)=>{const u=t.get(s);t.set(s,a),u!==a&&r(s,a)},deleteData:s=>{const a=t.has(s);t.delete(s),a&&r(s,void 0)},hasData:s=>t.has(s),getAll:()=>{const s=Object.create(null);return t.forEach((a,u)=>{s[u]=a}),s},clear:()=>{e.clear(),t.clear()}}}function lh(e){const t=new Map(e.map(s=>[s.name,s])),n=[];for(const s of e)for(const a of s.dependencies??[])t.has(a)||n.push(`${s.name} -> ${a}`);const r=[],o=new Set,i=[...e],l=s=>(s.dependencies??[]).every(a=>o.has(a)||!t.has(a));for(;i.length>0;){const s=i.filter(l);if(s.length===0)throw new Error(`[vane/plugin-core] 插件循环依赖: ${i.map(u=>u.name).join(" <-> ")}`);let a=s[0];for(const u of s)(u.priority??0)>(a.priority??0)&&(a=u);r.push(a),o.add(a.name),i.splice(i.indexOf(a),1)}return n.length>0&&console.warn(`[vane/plugin-core] 以下插件依赖未注册，将被忽略:
  ${n.join(`
  `)}`),r}function Xd(e,t){try{return lh(e)}catch(n){return t==null||t(n),e}}async function sh(e,t={}){const{timeout:n=3e3,name:r="anonymous",hook:o="unknown"}=t;if(!n||n<=0)return await e();let i;const l=new Promise((s,a)=>{i=setTimeout(()=>{a(new Error(`[vane/plugin-core] 插件 ${r} 的钩子 ${o} 超时(${n}ms)`))},n)});try{return await Promise.race([Promise.resolve().then(e),l])}finally{i&&clearTimeout(i)}}const ah=new Set(["onMount","onUnmount","onPropsChange","onError"]);function uh(e={}){const t=e.logger??console,n=e.sandbox??!0,r=e.timeout??3e3,o=[];let i=[];const l=new Map,s=new Map,a=new Set;let u=0,d=null,p=0;const m=(w,C,A)=>{o.push({plugin:w,hook:C,error:A})},y=()=>{u+=1,d=null},k=(w,C=new Set)=>w.enabled===!1?!1:C.has(w.name)?!0:(C.add(w.name),(w.dependencies??[]).every(A=>{const H=l.get(A);return!H||k(H,C)})),v=()=>{if(d)return d;const w=[...l.values()].filter(C=>k(C)?!0:(m(C.name,"dependencies",new Error("依赖已停用")),!1));return d=Xd(w,C=>m("[order]","resolveDependencyOrder",C))},x=w=>{const C=i.filter(([A])=>!w||A===w).reverse();i=w?i.filter(([A])=>A!==w):[];for(const[,A]of C)try{A()}catch(H){t.warn("[vane] cleanup failed",H)}},g=w=>{var C;return Promise.resolve((C=w.destroy)==null?void 0:C.call(w)).catch(A=>t.warn(`[vane] destroy failed: ${w.name}`,A))},f=async(w,C,A,H,L)=>{var $e,$;const F=C==="onUnmount";if(C==="onMount"||F){if(a.has(w.name)!==F)return{};F?a.delete(w.name):a.add(w.name)}const he=($e=w.hooks)==null?void 0:$e[C];if(typeof he!="function")return{};let fe;try{const O=()=>he(A,...H);fe=w.sandbox??n?await sh(O,{timeout:w.timeout??r,name:w.name,hook:C}):await O()}catch(O){return L!==u?{}:(m(w.name,C,O),t.warn(`[vane] ${C} failed: ${w.name}`,O),($=e.onError)==null||$.call(e,w.name,C,O),{stop:C==="onError"})}return L!==u?{}:ah.has(C)&&typeof fe=="function"?(i.push([w.name,fe]),{}):{value:fe}},h=async(w,C,A)=>{const H=u;for(const L of v()){if(H!==u)return;const F=await f(L,w,C,A,H);if(F.stop)return;if(F.value===!1)return!1;if(F.value!==void 0&&F.value!==!0)return F.value}},P=(w,C,...A)=>h(w,C,A),R=w=>{l.get(w.name)&&s.get(w.name)!==w&&(t.warn(`[vane] duplicate plugin, destroy old: ${w.name}`),_(w.name)),l.set(w.name,{...w,enabled:w.enabled??!0}),s.set(w.name,w),a.delete(w.name),y(),w.init&&Promise.resolve(w.init()).catch(C=>{t.warn(`[vane] init failed: ${w.name}`,C)})},b=w=>w.forEach(R),j=w=>{l.delete(w),s.delete(w),a.delete(w),d=null},_=w=>{const C=l.get(w);C&&(y(),x(w),g(C),j(w))};return{register:R,registerAll:b,unregister:_,getPlugin:w=>l.get(w),getAllPlugins:()=>[...l.values()],getEnabledPlugins:()=>[...l.values()].filter(w=>w.enabled!==!1),getExecutionOrder:()=>[...v()],enable:w=>{const C=l.get(w);C&&(C.enabled=!0,d=null)},disable:w=>{const C=l.get(w);C&&(C.enabled=!1,d=null)},has:w=>l.has(w),executeHook:P,clear:()=>{y(),p+=1,x();const w=[...l.values()].map(g);return l.clear(),s.clear(),a.clear(),Promise.all(w).then(()=>{})},getErrors:()=>[...o],align:async(w,C)=>{const A=++p,H=new Map(w.map(L=>[L.name,L]));for(const L of[...l.keys()]){if(A!==p)return;if(s.get(L)===H.get(L))continue;const F=l.get(L);y(),await f(F,"onUnmount",C,[],u),x(L),await g(F),j(L)}for(const L of w){if(A!==p)return;s.get(L.name)!==L&&R(L)}},peekOrder:v}}var ch=Object.defineProperty,dh=(e,t,n)=>t in e?ch(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,fh=(e,t,n)=>dh(e,t+"",n);class Zd extends jr.Component{constructor(){super(...arguments),fh(this,"state",{error:null})}static getDerivedStateFromError(t){return{error:t}}componentDidUpdate(t){var o,i;const n=t.resetKeys??[],r=this.props.resetKeys??[];this.state.error&&(n.length!==r.length||n.some((l,s)=>!Object.is(l,r[s])))&&((i=(o=this.props).onReset)==null||i.call(o),this.setState({error:null}))}componentDidCatch(t,n){var r,o;console.warn("[vane/plugin-core] 插件渲染错误已被隔离",t,n),(o=(r=this.props).onError)==null||o.call(r,t,n)}render(){const{error:t}=this.state;return t?this.props.fallback?this.props.fallback(t):null:this.props.children}}let Zr=null;function ph(e=!1){if(Zr&&!e)return Zr;const t=typeof window<"u"?window.innerWidth:1024,n=typeof window<"u"?window.innerHeight:768,r=typeof window<"u"&&window.devicePixelRatio||1,o=typeof navigator<"u"&&navigator.userAgent||"",i=/iPad|Tablet/i.test(o),l=/Mobile|Android|iPhone/i.test(o),s=typeof window<"u"&&("ontouchstart"in window||(navigator.maxTouchPoints??0)>0);return Zr={type:i?"tablet":l?"mobile":"desktop",os:o,browser:o,devicePixelRatio:r,viewportWidth:t,viewportHeight:n,isTouchDevice:s,isRetina:r>=2},Zr}function fu(e,t){if(Object.is(e,t))return!0;if(typeof e!="object"||typeof t!="object"||e===null||t===null)return!1;const n=Object.keys(e),r=Object.keys(t);return n.length!==r.length?!1:n.every(o=>Object.is(e[o],t[o]))}function mh(e){const{plugins:t,props:n,data:r,initialState:o,containerRef:i,enableDebug:l=!1,managerOptions:s,extendContext:a}=e,u=S.useRef(null),d=i??u,p=S.useRef(null);p.current||(p.current=uh(s));const m=p.current,y=S.useRef(null);y.current||(y.current=ih());const k=y.current,v=S.useRef(new Map),[x,g]=S.useState(o??{}),[,f]=S.useState(0),h=S.useCallback(()=>f(U=>U+1),[]),P=S.useMemo(()=>ph(),[]),R=S.useRef(n);fu(R.current,n)||(R.current=n);const b=R.current,j=S.useRef(r);fu(j.current,r)||(j.current=r);const _=j.current,w=S.useRef(null),C=S.useMemo(()=>{const U={props:b,data:_,bus:k,refs:{container:d,getContainer:()=>d.current},state:x,setState:T=>g(I=>({...I,...T})),shared:v.current,deviceInfo:P,forceUpdate:h,getSize:()=>{const T=d.current;return T?{width:T.offsetWidth,height:T.offsetHeight}:{width:0,height:0}},logger:console};return a?a(U):U},[b,_,x,P,k,a]);S.useLayoutEffect(()=>{w.current=C},[C]);const A=S.useRef(t),H=A.current;H!==t&&(H.length!==t.length||t.some((U,T)=>U!==H[T]))&&(A.current=t);const L=A.current,F=S.useRef(0);S.useLayoutEffect(()=>{const U=++F.current,T=w.current;return m.align(L,T).then(()=>{F.current===U&&(l&&console.debug("[vane/plugin-core] plugins registered:",L.map(I=>I.name).join("|")),m.executeHook("onMount",T))}),()=>{F.current+=1}},[L,m,l]),S.useLayoutEffect(()=>()=>{const U=w.current;if(!m.getExecutionOrder().some(T=>{var I;return typeof((I=T.hooks)==null?void 0:I.onUnmount)=="function"})){m.clear();return}m.executeHook("onUnmount",U).finally(()=>m.clear())},[m]);const he=m.peekOrder(),fe=S.useRef([]),$e=S.useMemo(()=>{const U=new Map(L.map(Q=>[Q.name,Q])),T=L.filter(Q=>{var nt;return Q.enabled!==!1&&((nt=m.getPlugin(Q.name))==null?void 0:nt.enabled)!==!1}),I=he.length===T.length?he.map(Q=>U.get(Q.name)??Q):Xd(T),B=fe.current;return B.length===I.length&&I.every((Q,nt)=>Q===B[nt])?B:(fe.current=I,I)},[L,m,he]),$=S.useRef(C);$.current=C;const O=S.useCallback((U,T)=>{var Q;const I=$.current;let B=T;for(const nt of $e){const Dt=(Q=nt.hooks)==null?void 0:Q[U];if(typeof Dt=="function")try{B=U==="transformData"?Dt(I,B):Dt(B)}catch(Hs){(I.logger??console).warn(`[plugin-core] ${nt.name}.${U} 执行失败，已跳过`,Hs)}}return B},[$e]),M=S.useCallback(U=>O("transformProps",U),[O]),W=S.useCallback(U=>O("transformData",U),[O]),X=S.useCallback((U,...T)=>m.executeHook(U,w.current,...T),[m]);return{manager:m,bus:k,context:C,state:x,setState:C.setState,execute:X,transformProps:M,transformData:W,orderedPlugins:$e}}S.createContext(null);function gh(e,t,n){var o,i;if(e.enabled===!1||typeof((o=e.hooks)==null?void 0:o[t])!="function")return!1;const r=(i=e.config)==null?void 0:i.slotPosition;return n==="before"?r==="before":n==="footer"?r===void 0||r==="after"||r==="footer":r===void 0||r==="after"}function hh(e,t){var n,r;return(((n=e.config)==null?void 0:n.order)??0)-(((r=t.config)==null?void 0:r.order)??0)||(t.priority??0)-(e.priority??0)}function yh(e,t,n){const r=new Set;return e.map(o=>{var i;if(r.has(o.name))return null;r.add(o.name);try{const l=(i=o.hooks)==null?void 0:i[n],s=l==null?void 0:l(t);return s==null?null:c.jsx(Zd,{children:s},`vane-slot-${o.name}`)}catch(l){return console.warn(`[vane/plugin-core] 插件 ${o.name} 的 ${n} 渲染失败`,l),null}})}function eo(e,t,n){const{hook:r,position:o="after"}=n,i=e.filter(l=>gh(l,r,o)).sort(hh);return yh(i,t,r)}function ef(e,t){const n=e.attrValues;return n?n[t]:void 0}function tf(e,t={}){return t.ignoreOutOfStock??!0?e.filter(r=>r.stock!==0):e}function vh(e,t={}){return!(!e||(t.ignoreOutOfStock??!0)&&e.stock===0)}function Sh(e,t,n,r={}){const o=tf(t,r),i={},l={};for(const s of e){const a=new Set,u=s.options??[];for(const d of u){const p={...n,[s.name]:d.id},m=Object.keys(p);m.length>0&&o.some(k=>m.every(v=>ef(k,v)===p[v]))||a.add(d.id)}i[s.name]=a,l[s.name]=u.length-a.size}return{disabledMap:i,availableCount:l}}function pu(e,t,n){if(!t.length)return null;for(const o of t)if(!n[o.name])return null;const r=Object.keys(n);return e.find(o=>r.every(i=>ef(o,i)===n[i]))??null}function kh(e,t){return e.length?e.every(n=>!!t[n.name]):!1}function to(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)?e:null}function rn(e){return typeof e=="string"&&e.length>0}function xh(e,t){const n=[],r=[],o=new Set,i=Array.isArray(e)?e:[];for(let u=0;u<i.length;u+=1){const d=to(i[u]);if(!d||!rn(d.name)){n.push(`attributes[${u}] 缺少 name，已忽略`);continue}if(o.has(d.name)){n.push(`属性名「${d.name}」重复，已忽略重复项`);continue}o.add(d.name);const p=d.options;Array.isArray(p)||n.push(`属性「${d.name}」缺少 options，按空列表处理`);const m=[],y=new Set;for(const k of Array.isArray(p)?p:[]){const v=to(k);if(!v||!rn(v.id)){n.push(`属性「${d.name}」存在缺少 id 的选项，已忽略`);continue}if(y.has(v.id)){n.push(`属性「${d.name}」的选项 id「${v.id}」重复，已忽略重复项`);continue}y.add(v.id);const x={id:v.id,label:rn(v.label)?v.label:v.id};rn(v.image)&&(x.image=v.image),m.push(x)}r.push({name:d.name,options:m})}const l=[],s=new Set,a=Array.isArray(t)?t:[];for(let u=0;u<a.length;u+=1){const d=to(a[u]);if(!d||!rn(d.sku)){n.push(`variants[${u}] 缺少 sku，已忽略`);continue}if(s.has(d.sku)){n.push(`变体 sku「${d.sku}」重复，已忽略重复项`);continue}s.add(d.sku);const p={},m=to(d.attrValues);if(!m)n.push(`变体「${d.sku}」缺少 attrValues，按空值处理`);else for(const[y,k]of Object.entries(m))rn(k)&&(p[y]=k);l.push({...d,sku:d.sku,attrValues:p})}return{attributes:r,variants:l,issues:n}}function Wn(e,t){const n={};if(!t||typeof t!="object")return n;const r=new Map;for(const o of e)r.set(o.name,new Set((o.options??[]).map(i=>i.id)));for(const[o,i]of Object.entries(t)){if(typeof i!="string"||!i)continue;const l=r.get(o);!l||!l.has(i)||(n[o]=i)}return n}function wh(e,t){if(e===t)return!0;if(!e||!t)return!1;const n=Object.keys(e),r=Object.keys(t);return n.length!==r.length?!1:n.every(o=>e[o]===t[o])}const Ph=[],Ch=[];function _h(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);return n.length!==r.length?!1:n.every(o=>e[o]===t[o])}function Rh(e,t){const n=Array.isArray(t)?{plugins:t}:t,r=n.plugins,{enableDebug:o=!1}=n,i=S.forwardRef((l,s)=>{const a=S.useRef(null),u=S.useMemo(()=>xh(l.attributes??Ph,l.variants??Ch),[l.attributes,l.variants]),{attributes:d,variants:p,issues:m}=u;S.useEffect(()=>{m.length&&console.warn("[vane-sku] 规格数据存在异常，已按归一化结果渲染：",m.join("；"))},[m]);const y=l.selection!==void 0,k=l.ignoreOutOfStock??!0,v=l.onSelectionChange,x=l.plugins??r,g=S.useRef(null),f=S.useCallback(T=>{const I=g.current;if(I&&I.source===T&&I.attributes===d)return I.value;const B=Wn(d,T);return g.current={source:T,attributes:d,value:B},B},[d]),h=S.useRef(null),P=S.useCallback(T=>{const I=h.current;if(I&&I.attributes===d&&I.variants===p&&I.selection===T&&I.ignoreOutOfStock===k)return I.value;const B=Sh(d,p,T,{ignoreOutOfStock:k});return h.current={attributes:d,variants:p,selection:T,ignoreOutOfStock:k,value:B},B},[d,p,k]),R=S.useCallback(T=>{var Qs;const I=f((Qs=T.state)==null?void 0:Qs.selection),{disabledMap:B}=P(I),Q=pu(p,d,I),nt=vh(Q,{ignoreOutOfStock:k}),Dt=Ne=>{const tn=Wn(d,Ne);T.setState({selection:tn}),y&&(v==null||v(tn,pu(p,d,tn)))};return{...T,setState:Ne=>Ne&&"selection"in Ne?T.setState({...Ne,selection:Wn(d,Ne.selection)}):T.setState(Ne),selection:I,attributes:d,variants:p,ignoreOutOfStock:k,disabledMap:B,variant:Q,purchasable:nt,isComplete:kh(d,I),selectOption:(Ne,tn)=>{Dt(I[Ne]===tn?Object.fromEntries(Object.entries(I).filter(([vf])=>vf!==Ne)):{...I,[Ne]:tn})},clearSelection:()=>Dt({}),setSelection:Ne=>Dt(Ne)}},[d,p,k,y,v,f,P]),b=mh({plugins:x,props:l,data:l.data,initialState:{selection:Wn(d,l.selection??l.defaultSelection??{})},containerRef:a,extendContext:R,enableDebug:o}),j=b.context,{selection:_,variant:w,purchasable:C}=j,A=b.state.selection,H=b.setState;S.useEffect(()=>{if(!y)return;const T=Wn(d,l.selection);wh(A,T)||H({selection:T})},[y,l.selection,d,H,A]);const L=S.useCallback((T,...I)=>b.execute(T,...I),[b.manager]),F=S.useRef([]),he=S.useRef(!1);S.useEffect(()=>{const T=F.current;F.current=x,!(T.length===x.length&&x.every((B,Q)=>B===T[Q])&&he.current)&&(he.current=!0,L("onMount"))},[x,L]);const fe=S.useRef(l);S.useEffect(()=>{const T=fe.current;_h(T,l)||(fe.current=l,L("onPropsChange",T,l))},[l,L]);const $e=S.useRef(null),$=S.useRef(void 0);S.useEffect(()=>{var B,Q;const T=$e.current,I=$.current;$e.current=_,$.current=w,!(T===null||I===void 0)&&(T===_&&I===w||(L("onSkuChange",_,w),b.bus.emit("sku:change",{attrs:_,variant:w}),(B=l.onChange)==null||B.call(l,_,w),w&&C&&((Q=l.onValidSkuChange)==null||Q.call(l,w))))},[_,w,C,L]);const O=S.useMemo(()=>({before:eo(b.orderedPlugins,j,{hook:"renderHeader",position:"before"}),overlay:eo(b.orderedPlugins,j,{hook:"renderOverlay"}),after:eo(b.orderedPlugins,j,{hook:"renderHeader",position:"after"}),footer:eo(b.orderedPlugins,j,{hook:"renderFooter"})}),[b.orderedPlugins,j]),M=b.transformProps(l),W={...M,attributes:d,variants:p,containerRefExternal:a,debug:M.debug??o,slots:O,selection:_,disabledMap:j.disabledMap,variant:w,purchasable:C,onSelectOption:j.selectOption,onMount:()=>{var T;(T=M.onMount)==null||T.call(M)},onUnmount:()=>{var T;(T=M.onUnmount)==null||T.call(M)}},X=S.useRef(0),U=S.useRef(u);return U.current!==u&&(U.current=u,X.current+=1),c.jsx(Zd,{fallback:()=>c.jsx("div",{"data-testid":"sku-error",style:{fontSize:12,color:"#b32d08",padding:"6px 0"},children:"规格信息加载异常，请稍后重试"}),children:c.jsx(e,{ref:s,...W})},X.current)});return i.displayName="WithPlugins(SkuSelectorCore)",i}function Y(e=[]){return Rh(Yd,e)}Y([]);function Eh(e={}){return{name:"PriceRange",version:"0.1.0",description:"价格区间：未命中变体时展示可选范围的价格区间",priority:45,config:{slotPosition:"after",order:5,...e},hooks:{renderOverlay:t=>{if(t.variant&&!e.showWhenMatched)return null;const n=t.attributes??t.props.attributes??[],r=t.variants??t.props.variants??[],o=t.selection??{},l=tf(r,{ignoreOutOfStock:t.ignoreOutOfStock??!0}).filter(p=>Object.keys(o).every(m=>{var y;return((y=p.attrValues)==null?void 0:y[m])===o[m]})).map(p=>p.price).filter(p=>typeof p=="number"&&Number.isFinite(p));if(!l.length)return null;const s=Math.min(...l),a=Math.max(...l),u=e.currency??"¥",d=e.separator??"–";return c.jsxs("div",{"data-testid":"sku-price-range",style:{display:"flex",alignItems:"baseline",gap:6,marginTop:6},children:[c.jsxs("span",{style:{fontSize:16,fontWeight:700,color:"#b32d08"},children:[u,Er(s),s!==a?`${d}${u}${Er(a)}`:""]}),n.length&&!t.isComplete?c.jsx("span",{style:{fontSize:11,color:"#5b6064"},children:"（请先选择规格）"}):null]})}}}}const bh="PriceRange",jh="价格区间：未选全或组合无货时，按当前选择过滤变体后取 min/max 展示价格区间（如 ¥199–¥269）；命中变体后默认退场，把价格区让给 PriceLink。",$h="0.1.0",Nh=["sku","price","range"],Th=[{name:"renderOverlay",when:"每次渲染，覆盖在规格面板之上",description:"浮层选择器、库存提示、加载遮罩"}],Oh=[],Lh="只读取 context 字段（props / state / data），不调用上下文方法",Mh=[{name:"currency",type:"string",default:'"¥"',description:"货币符号"},{name:"separator",type:"string",default:'"–"',description:"区间连接符"},{name:"showWhenMatched",type:"boolean",default:"false",description:"命中变体时是否仍显示区间（默认让位给 PriceLink）"}],Ah="const Sku = createSkuSelector([createPriceRangePlugin(), createPriceLinkPlugin()]);",Ih=["按当前选择过滤变体，区间随选择动态收窄",'最低价=最高价时只显示一个价格，不画成 "¥199–¥199"',"与 PriceLink 互斥接力：未命中显区间、命中显单价"],Dh=["多规格商品的价格引导","未选规格时的价格预览"],zh=["与 PriceLink 同走 renderOverlay 段，靠 config.order（PriceRange=5）排在前面。","两者可同时装载而不重影：命中变体时 PriceRange 自动返回 null。"],nf={name:bh,description:jh,since:$h,tags:Nh,events:Th,methods:Oh,methodsNote:Lh,config:Mh,example:Ah,features:Ih,useCases:Dh,notes:zh},Lr=Object.assign(Eh,{meta:nf});function Uh(e={}){return{name:"PriceLink",version:"0.1.0",description:"价格联动：把命中变体的价格渲染到浮层",priority:50,config:e,hooks:{renderOverlay:t=>{const n=t.variant;if(!n||typeof n.price!="number")return null;const r=e.currency??"¥",i=(e.showOriginal??!0)&&typeof n.originalPrice=="number"&&n.originalPrice>n.price;return c.jsxs("div",{"data-testid":"sku-price",style:{display:"flex",alignItems:"baseline",gap:6,marginTop:6},children:[c.jsxs("span",{style:{fontSize:18,fontWeight:700,color:"#b32d08"},children:[r,Er(n.price)]}),i?c.jsxs("s",{"data-testid":"sku-price-original",style:{fontSize:12,color:"#6b7076"},children:[r,Er(n.originalPrice)]}):null,e.discountText?c.jsx("span",{"data-testid":"sku-price-discount",style:{fontSize:11,padding:"1px 6px",borderRadius:4,background:"#fff1f0",color:"#b32d08"},children:e.discountText}):null]})}}}}const Bh="PriceLink",Vh="价格联动：把命中变体的价格渲染到浮层（选中摘要之后），支持原价删除线与折扣文案。",Fh="0.1.0",Hh=["sku","price","overlay"],Qh=[{name:"renderOverlay",when:"每次渲染，覆盖在规格面板之上",description:"浮层选择器、库存提示、加载遮罩"}],Kh=[],Wh="只读取 context 字段（props / state / data），不调用上下文方法",qh=[{name:"currency",type:"string",default:'"¥"',description:"货币符号"},{name:"showOriginal",type:"boolean",default:"true",description:"是否展示原价（原价 > 现价时才画删除线）"},{name:"discountText",type:"string",default:"-",description:'折扣文案，如 "限时8折"'}],Gh='const Sku = createSkuSelector([createPriceLinkPlugin({ currency: "¥", discountText: "限时8折" })]);',Jh=["订阅命中变体，未命中（未选全/无货）时不渲染价格区","原价高于现价时自动画删除线","定价策略可替换：默认取 variant.price"],Yh=["多规格商品的价格联动","带折扣文案的促销价展示"],Xh=["走 renderOverlay 段，渲染位置在 core「选中摘要」之后、Quota 提示条之前。","priority 50；渲染插槽内 priority 越大越靠后。"],rf={name:Bh,description:Vh,since:Fh,tags:Hh,events:Qh,methods:Kh,methodsNote:Wh,config:qh,example:Gh,features:Jh,useCases:Yh,notes:Xh},Mr=Object.assign(Uh,{meta:rf}),de=[{name:"颜色",options:[{id:"red",label:"红",image:zi("#d4380d")},{id:"blue",label:"蓝",image:zi("#2b7de9")},{id:"green",label:"绿",image:zi("#389e0d")}]},{name:"尺码",options:[{id:"s",label:"S"},{id:"m",label:"M"},{id:"l",label:"L"}]}],ae=[{sku:"TEE-RED-S",attrValues:{颜色:"red",尺码:"s"},price:199,originalPrice:299,stock:5,quota:2,image:zt("red-s")},{sku:"TEE-RED-M",attrValues:{颜色:"red",尺码:"m"},price:219,originalPrice:299,stock:3,image:zt("red-m")},{sku:"TEE-RED-L",attrValues:{颜色:"red",尺码:"l"},price:239,stock:4,image:zt("red-l")},{sku:"TEE-BLUE-S",attrValues:{颜色:"blue",尺码:"s"},price:209,stock:8,image:zt("blue-s")},{sku:"TEE-BLUE-M",attrValues:{颜色:"blue",尺码:"m"},price:229,stock:6,image:zt("blue-m")},{sku:"TEE-GREEN-M",attrValues:{颜色:"green",尺码:"m"},price:249,stock:2,image:zt("green-m")},{sku:"TEE-GREEN-L",attrValues:{颜色:"green",尺码:"l"},price:269,stock:0,image:zt("green-l")}];function zi(e){return`data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><rect width="16" height="16" rx="3" fill="${e}"/></svg>`)}`}function zt(e){return`https://picsum.photos/seed/${e}/240/240`}const Zh=[{label:"限时8折",value:"限时8折"},{label:"满300减60",value:"满300减60"},{label:"无（不传）",value:""}],ey={background:"#fff",borderRadius:2,padding:14,color:"#1f2328",width:"100%"},ty={slug:"quickstart",title:"最小可用选择器",group:"basic",capability:"core-assembly",intro:"5 行装配出能用的选择器：Core（按钮组 + 禁用推导 + 摘要）起步，按需叠价格插件。",why:"先跑通内核，再增量叠插件——规格选择的长尾需求多，全塞进内核只会越来越难改。",plugs:[{fn:"createPriceRangePlugin",why:"未选全时兜底显示价格区间，价格区不空窗"},{fn:"createPriceLinkPlugin",cfg:"discountText: '限时8折'",why:"命中变体后显示单价与原价删除线"}],props:["attributes={attributes}","variants={variants}"],controls:[{key:"withRange",label:"加价格区间",kind:"switch",init:!1},{key:"withLink",label:"加价格联动",kind:"switch",init:!1}],stageHeight:300};function ny({cfg:e}){const t=!!e.withRange,n=!!e.withLink,r=S.useMemo(()=>Y([...t?[Lr()]:[],...n?[Mr({discountText:"限时8折"})]:[]]),[t,n]);return c.jsxs("div",{style:ey,children:[c.jsx(r,{attributes:de,variants:ae}),c.jsx("p",{style:{margin:"10px 0 0",fontSize:11,color:"#5b6064"},children:"两个开关都关就是裸 Core：选「蓝」后 L 置灰，摘要告诉你命中的变体。"})]})}const ry=Object.freeze(Object.defineProperty({__proto__:null,default:ny,meta:ty},Symbol.toStringTag,{value:"Module"})),oy={background:"#fff",borderRadius:2,padding:14,color:"#1f2328",width:"100%"},iy={slug:"disable",title:"禁用推导（内置）",group:"basic",capability:"disable-derivation",intro:"组合矩阵在内核：选「蓝」后 L 自动置灰（缺 blue-l 变体），死路提前画出来。",why:"用户不该点了才发现没货；把「选不出结果的组合」提前置灰，是规格选择器的体验底线。",plugs:[],props:["attributes={attributes}","variants={variants}",{text:"defaultSelection={{ 颜色: '{{preset}}' }}",when:e=>e.preset!=="none"},"onChange={handleChange}"],note:"推导是纯函数 buildAvailability(attributes, variants, selection)，不依赖 React，可直接单测。",controls:[{key:"preset",label:"预选颜色",kind:"select",init:"none",options:[{label:"不预选",value:"none"},{label:"红 red",value:"red"},{label:"蓝 blue",value:"blue"}]}],stageHeight:300};function ly({cfg:e,log:t}){const n=String(e.preset),r=S.useMemo(()=>Y([]),[]);return c.jsxs("div",{style:oy,children:[c.jsx(r,{attributes:de,variants:ae,defaultSelection:n==="none"?void 0:{颜色:n},onChange:(o,i)=>t(i?`命中变体 ${i.sku} · ${JSON.stringify(o)}`:`未命中可售变体 · ${JSON.stringify(o)}`,i?"event":"warn")},n),c.jsx("p",{style:{margin:"10px 0 0",fontSize:11,color:"#5b6064"},children:"点「蓝」看主角戏：L 因缺 blue-l 被置灰；defaultSelection 只在挂载时生效一次，所以预选切换靠 key 重挂载。"})]})}const sy=Object.freeze(Object.defineProperty({__proto__:null,default:ly,meta:iy},Symbol.toStringTag,{value:"Module"})),ay={background:"#fff",borderRadius:2,padding:14,color:"#1f2328",width:"100%"},Ui=de[0],uy=de[1],mu=ae.filter(e=>e.attrValues.颜色!=="green"),cy={slug:"two-attr",title:"双属性小矩阵",group:"basic",capability:"matrix",intro:"颜色 × 尺码的小矩阵：拖开关删掉「红」，attributes 数组热更新，禁用推导随之重算。",why:"后台改规格、运营下架某选项，前端改的只是数据；矩阵怎么变是内核的事。",plugs:[],props:["attributes={attributes}","variants={variants}"],note:"buildAvailability / matchVariant / isSelectionComplete 都是纯函数，服务端下发同一份结构也能直接算。",controls:[{key:"dropRed",label:"删掉红色选项",kind:"switch",init:!1}],stageHeight:300};function dy({cfg:e,log:t}){const n=!!e.dropRed,r=S.useMemo(()=>Y([]),[]),o=S.useMemo(()=>[{...Ui,options:n?Ui.options.filter(l=>l.id!=="red"):Ui.options.slice(0,2)},uy],[n]),i=S.useMemo(()=>n?mu.filter(l=>l.attrValues.颜色!=="red"):mu,[n]);return c.jsxs("div",{style:ay,children:[c.jsx(r,{attributes:o,variants:i,onChange:(l,s)=>t(s?`命中 ${s.sku}`:`未命中 · ${JSON.stringify(l)}`,s?"event":"warn")}),c.jsx("p",{style:{margin:"10px 0 0",fontSize:11,color:"#5b6064"},children:"先选「蓝」再拖开关：红消失、选择保留，L 依旧置灰 —— blue-l 本就不存在，小矩阵下它成了永久死路。"})]})}const fy=Object.freeze(Object.defineProperty({__proto__:null,default:dy,meta:cy},Symbol.toStringTag,{value:"Module"})),py={background:"#fff",borderRadius:2,padding:14,color:"#1f2328",width:"100%"},my={slug:"ignore-stock",title:"缺货是否参与推导",group:"basic",capability:"ignore-out-of-stock",intro:"green-l 库存 0：默认把它当不存在（通往它的选项置灰）；关掉开关后变为可选。",why:"「缺货直接置灰」还是「可点但不让下单」是两种运营策略；两种都常见，内核不该替你拍板。",plugs:[],props:["attributes={attributes}","variants={variants}","ignoreOutOfStock={{{ignore}}}"],note:"关掉后 green-l 可选且仍会命中变体（stock=0）——加购拦截交给 Quota 或宿主，推导不管下单。",controls:[{key:"ignore",label:"缺货视为不存在",kind:"switch",init:!0}],stageHeight:300};function gy({cfg:e,log:t}){const n=!!e.ignore,r=S.useMemo(()=>Y([]),[]);return c.jsxs("div",{style:py,children:[c.jsx(r,{attributes:de,variants:ae,ignoreOutOfStock:n,onChange:(o,i)=>i?t(`命中 ${i.sku} · 库存 ${i.stock??"—"}`,"event"):t(`未命中 · ${JSON.stringify(o)}`,"warn")}),c.jsx("p",{style:{margin:"10px 0 0",fontSize:11,color:"#5b6064"},children:"先选「绿」：L 置灰（缺货默认视为不存在）。关掉开关后 L 可选，点它会命中 stock=0 的 TEE-GREEN-L。"})]})}const hy=Object.freeze(Object.defineProperty({__proto__:null,default:gy,meta:my},Symbol.toStringTag,{value:"Module"}));function yy(e={}){const t=(n,r,o,i)=>{var s;if(e.onlyMatched&&!i)return;const l={name:r,selection:o,variant:i,at:Date.now()};n.bus.emit("sku:analytics",l),(s=e.onEvent)==null||s.call(e,l)};return{name:"Analytics",version:"0.1.0",description:"规格选择埋点：回调 + 总线双通道，不渲染 UI",priority:10,config:e,hooks:{onMount:n=>{t(n,"sku:mount",n.selection,n.variant)},onSkuChange:(n,r,o)=>{t(n,o?"sku:change":"sku:invalid",r,o)}}}}const vy="Analytics",Sy="规格选择埋点：sku:mount / sku:change / sku:invalid 三类事件，回调（onEvent）与总线（sku:analytics）双通道，自身不渲染 UI。",ky="0.1.0",xy=["sku","analytics","event"],wy=[{name:"onMount",when:"规格组件挂载完成",description:"初始化副作用（URL 同步、状态恢复）"},{name:"onSkuChange",when:"用户选择或命中变体变化后（回传 selection / variant）",description:"联动价格、库存、图片，或做埋点上报"},{name:"sku:analytics",when:"挂载 / 命中变更 / 无效组合时",description:"广播埋点事件对象，供外部 SDK 上报"}],Py=[],Cy="只读取 context 字段（props / state / data），不调用上下文方法",_y=[{name:"onEvent",type:"(event) => void",default:"-",description:"统一事件出口，推荐接自己的埋点 SDK"},{name:"onlyMatched",type:"boolean",default:"false",description:"只在命中变体时上报；关闭时未命中也上报，便于发现「选不出来」的组合"}],Ry="const Sku = createSkuSelector([createAnalyticsPlugin({ onEvent: (e) => track(e.name, e) })]);",Ey=["三类事件：挂载 / 命中变更 / 无效组合","未命中也上报（默认），能发现「用户点得到但选不出」的坏组合","回调与总线双通道，不绑定任何 SDK"],by=["转化漏斗埋点","选品与库存分析"],jy=["不占用渲染插槽，是纯事件插件。","priority 10，事件钩子按 priority 从大到小执行（会晚于 Quota 等）。"],of={name:vy,description:Sy,since:ky,tags:xy,events:wy,methods:Py,methodsNote:Cy,config:_y,example:Ry,features:Ey,useCases:by,notes:jy},Bs=Object.assign(yy,{meta:of});function $y(e={}){const t=n=>{var o,i;const r=(o=n.variant)==null?void 0:o.image;r&&((i=e.onImageChange)==null||i.call(e,r),n.bus.emit("sku:image",r))};return{name:"ImageLink",version:"0.1.0",description:"规格切主图：命中变体带图时抛事件，不渲染 UI",priority:30,config:e,hooks:{onMount:n=>{t(n)},onSkuChange:n=>{t(n)}}}}const Ny="ImageLink",Ty="规格切主图：命中变体带 image 时抛事件（回调 + 总线 sku:image），自身不渲染任何 UI。",Oy="0.1.0",Ly=["sku","image","event"],My=[{name:"onMount",when:"规格组件挂载完成",description:"初始化副作用（URL 同步、状态恢复）"},{name:"onSkuChange",when:"用户选择或命中变体变化后（回传 selection / variant）",description:"联动价格、库存、图片，或做埋点上报"},{name:"sku:image",when:"命中变体带图、需要切换主图时",description:"广播目标图片地址，由外部图区响应"}],Ay=[],Iy="只读取 context 字段（props / state / data），不调用上下文方法",Dy=[{name:"onImageChange",type:"(image: string) => void",default:"-",description:"主图切换回调（推荐用法）"}],zy="const Sku = createSkuSelector([createImageLinkPlugin({ onImageChange: setMainImage })]);",Uy=["只发事件不渲染：主图由外层 gallery / card 负责，联动与渲染解耦","同时回调与总线广播（sku:image），两种接法都支持","未命中变体或变体无图时不发事件"],By=["选颜色切主图","规格图与 vane-gallery 联动"],Vy=["不占用任何渲染插槽，纯粹是事件插件。","priority 30；事件钩子按 priority 从大到小执行。"],lf={name:Ny,description:Ty,since:Oy,tags:Ly,events:My,methods:Ay,methodsNote:Iy,config:Dy,example:zy,features:Uy,useCases:By,notes:Vy},ii=Object.assign($y,{meta:lf});function Fy(e={}){const t=e.preventDefault??!0;return{name:"KeyboardNav",version:"0.1.0",description:"键盘漫游：方向键移动焦点，Enter/Space 选择",priority:25,config:e,hooks:{onMount:n=>{var l,s;const r=((s=(l=n.refs).getContainer)==null?void 0:s.call(l))??null;if(!r)return;const o=a=>Array.from(a.querySelectorAll('[data-testid^="sku-opt-"]')),i=a=>{var h,P;const u=a.key==="ArrowLeft"||a.key==="ArrowRight",d=a.key==="ArrowUp"||a.key==="ArrowDown";if(!u&&!d)return;const p=(P=(h=a.target)==null?void 0:h.closest)==null?void 0:P.call(h,'[data-testid^="sku-opt-"]');if(!p)return;const m=Array.from(r.querySelectorAll('[data-testid^="sku-attr-"]')),y=m.findIndex(R=>R.contains(p));if(y<0)return;if(t&&a.preventDefault(),u){const R=o(m[y]),b=R.indexOf(p);if(b<0||!R.length)return;const j=a.key==="ArrowRight"?1:-1;for(let _=1;_<=R.length;_+=1){const w=((b+j*_)%R.length+R.length)%R.length,C=R[w];if(!C.disabled){C.focus();return}}return}const k=m[y+(a.key==="ArrowDown"?1:-1)];if(!k)return;const v=o(m[y]).indexOf(p),x=o(k);let g=null,f=1/0;for(let R=0;R<x.length;R+=1){const b=x[R];if(b.disabled)continue;const j=Math.abs(R-v);j<f&&(f=j,g=b)}g==null||g.focus()};return r.addEventListener("keydown",i),()=>r.removeEventListener("keydown",i)}}}}const Hy="KeyboardNav",Qy="键盘漫游：方向键在两行规格按钮间移动焦点（←→ 同属性、↑↓ 跨属性），Enter / Space 才选中，自动跳过被禁用推导置灰的选项。",Ky="0.1.0",Wy=["sku","a11y","keyboard"],qy=[{name:"onMount",when:"规格组件挂载完成",description:"初始化副作用（URL 同步、状态恢复）"}],Gy=[],Jy="只读取 context 字段（props / state / data），不调用上下文方法",Yy=[{name:"preventDefault",type:"boolean",default:"true",description:"是否阻止方向键的默认滚动行为"}],Xy="const Sku = createSkuSelector([createKeyboardNavPlugin()]);",Zy=["←→ 同属性移动焦点、↑↓ 跨属性移动焦点（按完整候选列表的列位置就近落点）","移动焦点不等于改变选择，Enter / Space 才触发选择（roving tabindex 由 core 提供）","自动跳过 disabled 选项，不会「跳到死路上」","纯 DOM 查询实现，不侵入 core 渲染"],ev=["无障碍 / 键盘用户","电视端 / 大屏选购"],tv=["不占用渲染插槽，是纯行为插件。","依赖 core 按钮的 data-testid 约定（sku-attr-* / sku-opt-*）。","onMount 返回清理函数，卸载时自动摘除监听。"],sf={name:Hy,description:Qy,since:Ky,tags:Wy,events:qy,methods:Gy,methodsNote:Jy,config:Yy,example:Xy,features:Zy,useCases:ev,notes:tv},li=Object.assign(Fy,{meta:sf});function nv(e={}){const t=e.defaultValue??1,n=e.purchasedCount??0,r=l=>oh(l.variant,{purchasedCount:n,max:e.max}),o=l=>{var u;const s=r(l),a=typeof((u=l.state)==null?void 0:u.quantity)=="number"?l.state.quantity:t;return!Number.isFinite(s)||s<=0?t:Math.max(1,Math.min(a,s))},i=(l,s)=>{var p,m;const a=o(l),u=(p=l.state)==null?void 0:p.quantity;if(typeof u=="number"&&u===a)return;const d=typeof u=="number";l.setState({quantity:a}),d&&s&&((m=e.onChange)==null||m.call(e,a))};return{name:"Quantity",version:"0.1.0",description:"数量步进器：受库存与剩余限购双重上限约束，并写回 state",priority:35,config:{slotPosition:"after",order:20,...e},hooks:{onMount:l=>{i(l,!1)},onSkuChange:l=>{i(l,!0)},renderHeader:l=>{var y;if(!l.variant)return null;const a=r(l);if(!Number.isFinite(a)||a<=0)return null;const u=typeof((y=l.state)==null?void 0:y.quantity)=="number"?l.state.quantity:t,d=Math.max(1,Math.min(u,a)),p=k=>{var x;const v=Math.max(1,Math.min(k,a));v!==u&&(l.setState({quantity:v}),(x=e.onChange)==null||x.call(e,v))},m={width:26,height:26,border:"1px solid #d0d4da",background:"#fff",color:"#1f2328",cursor:"pointer",borderRadius:4,lineHeight:1};return c.jsxs("div",{"data-testid":"sku-quantity","data-quantity":String(d),"data-max":String(a),style:{display:"flex",alignItems:"center",gap:8,marginTop:6},children:[c.jsx("span",{style:{fontSize:12,color:"#4a5056"},children:"数量"}),c.jsx("button",{type:"button","data-testid":"sku-quantity-minus",disabled:d<=1,onClick:()=>p(d-1),style:{...m,color:d<=1?"#7d838a":"#1f2328",cursor:d<=1?"not-allowed":"pointer"},children:"−"}),c.jsx("span",{style:{minWidth:28,textAlign:"center",fontSize:13},children:d}),c.jsx("button",{type:"button","data-testid":"sku-quantity-plus",disabled:d>=a,onClick:()=>p(d+1),style:{...m,color:d>=a?"#7d838a":"#1f2328",cursor:d>=a?"not-allowed":"pointer"},children:"+"}),c.jsxs("span",{style:{fontSize:11,color:"#5b6064"},children:["上限 ",a]})]})}}}}const rv="Quantity",ov="数量步进器：上限取「库存」与「限购」的较小值，数量写入内核 state（key: quantity）供宿主加购按钮读取。",iv="0.1.0",lv=["sku","quantity","stepper"],sv=[{name:"onMount",when:"规格组件挂载完成",description:"初始化副作用（URL 同步、状态恢复）"},{name:"onSkuChange",when:"用户选择或命中变体变化后（回传 selection / variant）",description:"联动价格、库存、图片，或做埋点上报"},{name:"renderHeader",when:"每次渲染，规格面板头部槽位",description:"商品图、价格、已选摘要"}],av=[],uv="只读取 context 字段（props / state / data），不调用上下文方法",cv=[{name:"defaultValue",type:"number",default:"1",description:"初始数量"},{name:"max",type:"number",default:"-",description:"硬上限（不传则取 库存/限购 的较小值）"},{name:"onChange",type:"(quantity: number) => void",default:"-",description:"数量变化回调"}],dv="const Sku = createSkuSelector([createQuantityPlugin({ defaultValue: 1 })]);",fv=["上限 = min(库存, 限购, config.max)，到边界时按钮自动禁用","切换变体后数量自动收敛到新上限内","数量写 state，宿主读 context.state.quantity 即可"],pv=["商品详情页选数量","限购商品的步进约束"],mv=["走 renderHeader 的 after 段（order 20），排在库存提示之后。","未命中变体时不渲染（数量依附于具体 SKU）。"],af={name:rv,description:ov,since:iv,tags:lv,events:sv,methods:av,methodsNote:uv,config:cv,example:dv,features:fv,useCases:pv,notes:mv},si=Object.assign(nv,{meta:af});function gv(e,t=0){const n=e==null?void 0:e.quota,r=Jd(n,t);return{quota:n,remaining:r,canPurchase:r>0}}function hv(e={}){const t=e.purchasedCount??0,n=o=>gv(o.variant,t),r=o=>{const{remaining:i,canPurchase:l}=n(o);return o.setState({canPurchase:l,remainingQuota:i}),l};return{name:"Quota",version:"0.1.0",description:"限购校验：渲染限购提示条并暴露 canPurchase / remaining",priority:40,config:e,hooks:{onMount:o=>{r(o)},onSkuChange:o=>{var i;r(o)||(i=e.onExceed)==null||i.call(e)},renderHeader:o=>{const{quota:i,remaining:l,canPurchase:s}=n(o);return typeof i!="number"?null:c.jsxs("div",{"data-testid":"sku-quota","data-can-purchase":s?"true":"false","data-remaining":String(l),style:{marginTop:6,fontSize:12,padding:"4px 8px",borderRadius:4,background:s?"#f6ffed":"#fff1f0",color:s?"#237a06":"#b32d08",border:`1px solid ${s?"#b7eb8f":"#ffa39e"}`},children:["每人限购 ",i," 件（已购 ",t,"）",s?` · 还可购 ${l} 件`:" · 已达限购上限"]})}}}}const yv="Quota",vv="限购校验：读 variant.quota 与已购数渲染限购提示条，并把 canPurchase 写入内核 state 供宿主加购按钮门控。",Sv="0.1.0",kv=["sku","quota","limit"],xv=[{name:"onMount",when:"规格组件挂载完成",description:"初始化副作用（URL 同步、状态恢复）"},{name:"onSkuChange",when:"用户选择或命中变体变化后（回传 selection / variant）",description:"联动价格、库存、图片，或做埋点上报"},{name:"renderHeader",when:"每次渲染，规格面板头部槽位",description:"商品图、价格、已选摘要"}],wv=[],Pv="只读取 context 字段（props / state / data），不调用上下文方法",Cv=[{name:"purchasedCount",type:"number",default:"0",description:"当前用户已购件数"},{name:"onExceed",type:"() => void",default:"-",description:"超出限购时回调"}],_v="const Sku = createSkuSelector([createQuotaPlugin({ purchasedCount: 1 })]);",Rv=["variant.quota 声明限购件数；未声明视为不限购","canPurchase 写入内核 state（onMount / onSkuChange），宿主加购按钮可直接读","超限变体切换时触发 onExceed 回调"],Ev=["限量/每人限购的商品","会员等级限购"],bv=["走 renderHeader 的 after 段，渲染在价格浮层之后。","canPurchase 只在事件钩子写入，不在渲染期 setState，避免渲染期改状态告警。"],uf={name:yv,description:vv,since:Sv,tags:kv,events:xv,methods:wv,methodsNote:Pv,config:Cv,example:_v,features:Rv,useCases:Ev,notes:bv},ai=Object.assign(hv,{meta:uf});function jv(e={}){return{name:"ResetBar",version:"0.1.0",description:"清空重选：一键重置全部规格选择",priority:20,config:{slotPosition:"after",order:40,...e},hooks:{renderHeader:t=>Object.keys(t.selection??{}).length>0?c.jsx("div",{style:{marginTop:8},children:c.jsx("button",{type:"button","data-testid":"sku-reset",onClick:()=>{var r;t.clearSelection(),(r=e.onReset)==null||r.call(e)},style:{padding:"4px 10px",fontSize:12,borderRadius:4,border:"1px solid #d0d4da",background:"#fff",color:"#1f2328",cursor:"pointer"},children:e.text??"清空重选"})}):null}}}const $v="ResetBar",Nv="清空重选：一键重置全部规格选择，走 context.clearSelection()。未选任何规格时不渲染。",Tv="0.1.0",Ov=["sku","reset","ux"],Lv=[{name:"renderHeader",when:"每次渲染，规格面板头部槽位",description:"商品图、价格、已选摘要"}],Mv=[{name:"clearSelection",signature:"ctx.clearSelection(): void",description:"清空全部已选规格，回到未选状态"}],Av=[{name:"text",type:"string",default:'"清空重选"',description:"按钮文案"},{name:"onReset",type:"() => void",default:"-",description:"清空后回调"}],Iv='const Sku = createSkuSelector([createResetBarPlugin({ text: "重新选择" })]);',Dv=["整段重置，不用逐个取消","无选择时自动隐藏，不占版面"],zv=["选错规格后重来","移动端小屏的快速重置"],Uv=["走 renderHeader 的 after 段（order 40），排在数量之后。","依赖核心 context.clearSelection()（vane-sku 0.1.0 起提供）。"],cf={name:$v,description:Nv,since:Tv,tags:Ov,events:Lv,methods:Mv,config:Av,example:Iv,features:Dv,useCases:zv,notes:Uv},ui=Object.assign(jv,{meta:cf});function Bv(e={}){return{name:"SkuCode",version:"0.1.0",description:"货号展示：命中变体后显示 SKU 编码",priority:15,config:{slotPosition:"after",order:50,...e},hooks:{renderHeader:t=>{const n=t.variant;return n!=null&&n.sku?c.jsxs("div",{"data-testid":"sku-code",style:{marginTop:6,fontSize:11,color:"#5b6064",fontFamily:"ui-monospace, monospace"},children:[e.label??"货号","：",n.sku]}):null}}}}const Vv="SkuCode",Fv="货号展示：命中变体后显示 SKU 编码，便于客服对单、用户报修与订单核对。",Hv="0.1.0",Qv=["sku","code","meta"],Kv=[{name:"renderHeader",when:"每次渲染，规格面板头部槽位",description:"商品图、价格、已选摘要"}],Wv=[],qv="只读取 context 字段（props / state / data），不调用上下文方法",Gv=[{name:"label",type:"string",default:'"货号"',description:"前缀文案"}],Jv='const Sku = createSkuSelector([createSkuCodePlugin({ label: "SKU" })]);',Yv=["命中变体才显示，未选全时不占位","等宽字体呈现编码，便于复制核对"],Xv=["商品详情页货号展示","客服对单 / 售后核对"],Zv=["走 renderHeader 的 after 段（order 50），排在最末尾。","core 的「选中摘要」里也含 SKU 编码；本插件用于需要单独突出编码的场景。"],df={name:Vv,description:Fv,since:Hv,tags:Qv,events:Kv,methods:Wv,methodsNote:qv,config:Gv,example:Jv,features:Yv,useCases:Xv,notes:Zv},ci=Object.assign(Bv,{meta:df});function gu(e){if(typeof window>"u")return null;try{return e==="session"?window.sessionStorage:window.localStorage}catch{return null}}function eS(e={}){const t=e.key??"vane-sku:selection",n=e.scope??"local",r=e.productKey==null||e.productKey===""?t:`${t}:${e.productKey}`;return{name:"StatePersistence",version:"0.1.0",description:"选择态持久化：记住上次选的规格（localStorage / sessionStorage）",priority:26,config:e,hooks:{onMount:o=>{const i=gu(n);if(i)try{const l=i.getItem(r);if(!l)return;const s=JSON.parse(l);s&&typeof s=="object"&&Object.keys(s).length&&o.setSelection(s)}catch{}},onSkuChange:(o,i)=>{const l=gu(n);if(l)try{Object.keys(i).length?l.setItem(r,JSON.stringify(i)):l.removeItem(r)}catch{}}}}}const tS="StatePersistence",nS="选择态持久化：把上次选的规格存进 localStorage / sessionStorage，挂载时自动还原；清空选择时删除键。",rS="0.1.0",oS=["sku","persistence","storage"],iS=[{name:"onMount",when:"规格组件挂载完成",description:"初始化副作用（URL 同步、状态恢复）"},{name:"onSkuChange",when:"用户选择或命中变体变化后（回传 selection / variant）",description:"联动价格、库存、图片，或做埋点上报"}],lS=[{name:"setSelection",signature:"ctx.setSelection(selection: SkuSelection): void",description:"写入已选规格（内核 state，触发价格 / 库存 / 图片联动）"}],sS=[{name:"key",type:"string",default:'"vane-sku:selection"',description:"存储键"},{name:"scope",type:'"local" | "session"',default:'"local"',description:"local=localStorage，session=sessionStorage"}],aS='const Sku = createSkuSelector([createStatePersistencePlugin({ scope: "session" })]);',uS=["挂载读回、变化写入，清空即删键","隐私模式 / 存储禁用 / 配额超限均静默降级，不影响主流程","脏数据（解析失败）直接忽略"],cS=["回访时保持上次规格","多步下单流程中途返回"],dS=["不占用渲染插槽，是纯行为插件。","与 UrlSync 可共存：UrlSync 负责可分享，本插件负责本机记忆。"],ff={name:tS,description:nS,since:rS,tags:oS,events:iS,methods:lS,config:sS,example:aS,features:uS,useCases:cS,notes:dS},Vs=Object.assign(eS,{meta:ff});function fS(e={}){const t=e.lowStockThreshold??5,n=e.soldOutText??"暂时缺货",r=e.showCount??!0;return{name:"StockStatus",version:"0.1.0",description:"库存状态：现货 / 仅剩 N 件 / 缺货",priority:42,config:{slotPosition:"after",order:10,...e},hooks:{renderHeader:o=>{const i=o.variant;if(!i)return null;const l=i.stock;if(typeof l!="number")return null;const s=l===0,a=!s&&l<=t,u=s?"#b32d08":a?"#a54a00":"#237a06",d=s?"#fff1f0":a?"#fff7e6":"#f6ffed",p=s?"#ffa39e":a?"#ffd591":"#b7eb8f",m=s?n:a?r?`仅剩 ${l} 件`:"库存紧张":r?`现货 · 库存 ${l}`:"现货";return c.jsx("div",{"data-testid":"sku-stock","data-stock":String(l),"data-sold-out":s?"true":"false",style:{marginTop:6,fontSize:12,padding:"4px 8px",borderRadius:4,background:d,color:u,border:`1px solid ${p}`},children:m})}}}}const pS="StockStatus",mS="库存状态：命中变体后展示「现货 / 仅剩 N 件 / 缺货」，低库存阈值可配。",gS="0.1.0",hS=["sku","stock","inventory"],yS=[{name:"renderHeader",when:"每次渲染，规格面板头部槽位",description:"商品图、价格、已选摘要"}],vS=[],SS="只读取 context 字段（props / state / data），不调用上下文方法",kS=[{name:"lowStockThreshold",type:"number",default:"5",description:"低库存预警阈值：库存 ≤ 该值时显示「仅剩 N 件」"},{name:"soldOutText",type:"string",default:'"暂时缺货"',description:"缺货文案"},{name:"showCount",type:"boolean",default:"true",description:"是否展示具体库存数字"}],xS="const Sku = createSkuSelector([createStockStatusPlugin({ lowStockThreshold: 3 })]);",wS=["三态：现货 / 低库存（仅剩 N 件）/ 缺货","阈值可配，用来制造紧迫感","带 data-stock / data-sold-out 便于测试与自动化断言"],PS=["商品详情页库存提示","低库存紧迫感营销"],CS=["走 renderHeader 的 after 段（order 10），排在价格之后。","变体未声明 stock 时不渲染（不做无依据的库存承诺）。"],pf={name:pS,description:mS,since:gS,tags:hS,events:yS,methods:vS,methodsNote:SS,config:kS,example:xS,features:wS,useCases:PS,notes:CS},di=Object.assign(fS,{meta:pf});function _S(e={}){const t=e.paramPrefix??"sku_",n=e.useReplace??!0,r=()=>{if(typeof window>"u")return{};const i=new URLSearchParams(window.location.search),l={};for(const[s,a]of i.entries())s.startsWith(t)&&a&&(l[s.slice(t.length)]=a);return l},o=i=>{if(typeof window>"u")return;const l=new URLSearchParams(window.location.search);for(const u of Array.from(l.keys()))u.startsWith(t)&&l.delete(u);for(const[u,d]of Object.entries(i))l.set(t+u,d);const s=l.toString(),a=`${window.location.pathname}${s?`?${s}`:""}${window.location.hash}`;n?window.history.replaceState(null,"",a):window.history.pushState(null,"",a)};return{name:"UrlSync",version:"0.1.0",description:"URL 同步：把规格选择写进查询串，并可从 URL 还原（含 popstate）",priority:28,config:e,hooks:{onMount:i=>{const l=r();if(Object.keys(l).length&&i.setSelection(l),typeof window>"u")return;const s=()=>{i.setSelection(r())};return window.addEventListener("popstate",s),()=>window.removeEventListener("popstate",s)},onSkuChange:(i,l)=>{o(l)}}}}const RS="UrlSync",ES="URL 同步：把规格选择写进查询串（?sku_颜色=red&sku_尺码=s），挂载时反向解析还原，刷新与分享都能保持选择。",bS="0.1.0",jS=["sku","url","share"],$S=[{name:"onMount",when:"规格组件挂载完成",description:"初始化副作用（URL 同步、状态恢复）"},{name:"onSkuChange",when:"用户选择或命中变体变化后（回传 selection / variant）",description:"联动价格、库存、图片，或做埋点上报"}],NS=[{name:"setSelection",signature:"ctx.setSelection(selection: SkuSelection): void",description:"写入已选规格（内核 state，触发价格 / 库存 / 图片联动）"}],TS=[{name:"paramPrefix",type:"string",default:'"sku_"',description:"查询参数前缀，避免与页面其它参数冲突"},{name:"useReplace",type:"boolean",default:"true",description:"true=replaceState（不污染前进后退），false=pushState"}],OS='const Sku = createSkuSelector([createUrlSyncPlugin({ paramPrefix: "sku_" })]);',LS=["选择 → URL、URL → 选择 双向同步","前缀隔离，不覆盖页面其它查询参数","默认 replaceState，不把每次点击都塞进历史栈"],MS=["客服带规格的链接","分享已选规格的商品页","刷新后保持选择"],AS=["不占用渲染插槽，是纯行为插件。","SSR 下 window 不存在时自动降级为空操作。"],mf={name:RS,description:ES,since:bS,tags:jS,events:$S,methods:NS,config:TS,example:OS,features:LS,useCases:MS,notes:AS},Fs=Object.assign(_S,{meta:mf}),IS={"sku:mount":"挂载","sku:change":"命中","sku:invalid":"未命中"},DS={slug:"full-combo",title:"全量装配：商品规格面板",group:"advanced",capability:"full-assembly",intro:"12 个官方插件全装配成商品规格面板：价格、库存、限购、数量、主图、键盘、埋点一次到位。",why:"真实商品详情页要的能力就这么多；要哪些装哪些，不要的子路径不进包——这就是按需插件的意义。",plugs:[{fn:"createPriceRangePlugin",why:"未选全时兜底显示价格区间"},{fn:"createPriceLinkPlugin",cfg:"discountText: '限时8折'",why:"命中后显示单价与原价删除线"},{fn:"createStockStatusPlugin",cfg:"lowStockThreshold: 5",why:"库存三态：现货 / 仅剩 N 件 / 缺货"},{fn:"createQuotaPlugin",cfg:"purchasedCount: 1",why:"限购提示条 + canPurchase 门控"},{fn:"createQuantityPlugin",why:"数量步进，上限取库存与限购较小值"},{fn:"createSkuCodePlugin",why:"命中后展示货号，客服对单用"},{fn:"createResetBarPlugin",why:"一键清空重选"},{fn:"createImageLinkPlugin",cfg:"onImageChange: setMainImage",why:"规格切主图（只发事件，主图在左侧）"},{fn:"createKeyboardNavPlugin",why:"方向键漫游规格，跳过置灰项"},{fn:"createUrlSyncPlugin",why:"选择写进查询串，可分享还原"},{fn:"createAnalyticsPlugin",cfg:"onEvent: (e) => track(e)",why:"挂载 / 命中 / 未命中事件接入右栏日志"},{fn:"createStatePersistencePlugin",cfg:"key: 'vane-sku:demo:selection'",why:"本机记住上次选择"}],props:["attributes={attributes}","variants={variants}","defaultSelection={{ 颜色: 'red', 尺码: 's' }}"],note:"UrlSync 默认 replaceState 不污染历史栈；它与 StatePersistence 可共存——一个负责可分享，一个负责本机记忆。",controls:[{key:"keyboard",label:"键盘漫游",kind:"switch",init:!0},{key:"analytics",label:"埋点上报",kind:"switch",init:!0,nonLayout:!0},{key:"urlSync",label:"URL 同步",kind:"switch",init:!1}],stageHeight:520};function zS({cfg:e,log:t}){const n=!!e.keyboard,r=!!e.analytics,o=!!e.urlSync,[i,l]=S.useState(ae[0].image??""),s=S.useMemo(()=>Y([Lr(),Mr({discountText:"限时8折"}),di({lowStockThreshold:5}),ai({purchasedCount:1,onExceed:()=>t("触及限购上限（red-s 每人限购 2 件）","warn")}),si({onChange:a=>t(`数量 → ${a}`)}),ci(),ui({onReset:()=>t("已清空重选","info")}),ii({onImageChange:a=>{l(a),t(`主图 → ${a}`)}}),...n?[li()]:[],...o?[Fs()]:[],...r?[Bs({onEvent:a=>t(`${IS[a.name]} · ${JSON.stringify(a.selection)}${a.variant?` → ${a.variant.sku}`:""}`,a.name==="sku:invalid"?"warn":a.name==="sku:mount"?"info":"event")})]:[],Vs({key:"vane-sku:demo:full-combo"})]),[n,o,r,t,l]);return c.jsxs("div",{style:{display:"flex",gap:12,alignItems:"flex-start",width:"100%"},children:[c.jsx("img",{src:i,alt:"主图",style:{width:92,height:92,objectFit:"cover",borderRadius:2,border:"1px solid var(--line)"}}),c.jsxs("div",{style:{background:"#fff",borderRadius:2,padding:14,color:"#1f2328",flex:1},children:[c.jsx(s,{attributes:de,variants:ae,defaultSelection:{颜色:"red",尺码:"s"}}),c.jsx("p",{style:{margin:"10px 0 0",fontSize:11,color:"#5b6064"},children:"预选了 red/s：价格删除线、库存提示、限购条、数量步进、货号一次全出；换「绿 M」看低库存态。"})]})]})}const US=Object.freeze(Object.defineProperty({__proto__:null,default:zS,meta:DS},Symbol.toStringTag,{value:"Module"})),BS={background:"#fff",borderRadius:2,padding:14,color:"#1f2328",width:"100%"},VS={slug:"price-range",title:"价格区间 PriceRange",group:"plugin",plugin:"PriceRange",intro:"未选全时按当前选择过滤变体取 min/max，显示 ¥199–¥269 这样的区间；区间随选择收窄。",why:"价格区不能空窗：PriceLink 只在命中后出单价，用户选一半时最想看的是「这东西大概多少钱」。",plugs:[{fn:"createPriceRangePlugin",cfg:"showWhenMatched: {{keep}}",why:"负责未命中时的价格区间展示"}],props:["attributes={attributes}","variants={variants}"],note:"与 PriceLink 同走 renderOverlay，靠 order（PriceRange=5）排在前；命中后自动返回 null，两者同装不重影。",controls:[{key:"keep",label:"命中后仍显区间",kind:"switch",init:!1}],stageHeight:280};function FS({cfg:e}){const t=!!e.keep,n=S.useMemo(()=>Y([Lr({showWhenMatched:t})]),[t]);return c.jsxs("div",{style:BS,children:[c.jsx(n,{attributes:de,variants:ae}),c.jsx("p",{style:{margin:"10px 0 0",fontSize:11,color:"#5b6064"},children:"先只选「颜色」：区间立刻收窄到该色的 min–max；选全后区间退场（打开开关则保留）。"})]})}const HS=Object.freeze(Object.defineProperty({__proto__:null,default:FS,meta:VS},Symbol.toStringTag,{value:"Module"})),QS={background:"#fff",borderRadius:2,padding:14,color:"#1f2328",width:"100%"},KS={slug:"price-link",title:"价格联动 PriceLink",group:"plugin",plugin:"PriceLink",intro:"命中变体后显示单价；原价更高时自动画删除线，折扣文案可选（预选了 red/s：¥199 + 删除线 ¥299）。",why:"选完规格看价是决策临门一脚；把「准确价格」的渲染抽成插件，促销文案改配置就行、不用改页面。",plugs:[{fn:"createPriceLinkPlugin",cfg:"discountText: '{{discount}}'",why:"把命中变体的价格渲染进 overlay 段"}],props:["attributes={attributes}","variants={variants}","defaultSelection={{ 颜色: 'red', 尺码: 's' }}"],note:"只有 originalPrice > price 才画删除线；变体没写 originalPrice 就只显示现价，不做假促销。",controls:[{key:"discount",label:"折扣文案",kind:"select",init:"限时8折",options:Zh,hint:"选「无（不传）」时插件不渲染角标"}],stageHeight:280};function WS({cfg:e}){const t=String(e.discount),n=S.useMemo(()=>Y([Mr({discountText:t||void 0})]),[t]);return c.jsxs("div",{style:QS,children:[c.jsx(n,{attributes:de,variants:ae,defaultSelection:{颜色:"red",尺码:"s"}}),c.jsx("p",{style:{margin:"10px 0 0",fontSize:11,color:"#5b6064"},children:"换「蓝 S」看看：blue-s 没写 originalPrice，就只有现价、没有删除线。"})]})}const qS=Object.freeze(Object.defineProperty({__proto__:null,default:WS,meta:KS},Symbol.toStringTag,{value:"Module"})),GS={background:"#fff",borderRadius:2,padding:14,color:"#1f2328",width:"100%"},JS={slug:"stock-status",title:"库存状态 StockStatus",group:"plugin",plugin:"StockStatus",intro:"命中变体后显示三态：现货 / 仅剩 N 件 / 缺货；低库存阈值拖滑条实时生效。",why:"「仅剩 3 件」是转化利器；阈值该由运营配，而不是写死在代码里等发版。",plugs:[{fn:"createStockStatusPlugin",cfg:"lowStockThreshold: {{threshold}}",why:"渲染库存三态提示条"}],props:["attributes={attributes}","variants={variants}","ignoreOutOfStock={false}","defaultSelection={{ 颜色: 'red', 尺码: 's' }}","onChange={handleChange}"],note:"变体没声明 stock 时不渲染——不做无依据的库存承诺；这页传 ignoreOutOfStock={false} 是为了能点到 stock=0 的 green-l 看「缺货」态。",controls:[{key:"threshold",label:"低库存阈值",kind:"number",init:5,min:1,max:10}],stageHeight:280};function YS({cfg:e,log:t}){const n=Number(e.threshold),r=S.useMemo(()=>Y([di({lowStockThreshold:n})]),[n]);return c.jsxs("div",{style:GS,children:[c.jsx(r,{attributes:de,variants:ae,ignoreOutOfStock:!1,defaultSelection:{颜色:"red",尺码:"s"},onChange:(o,i)=>i&&t(`命中 ${i.sku} · 库存 ${i.stock??"—"}`,"event")}),c.jsx("p",{style:{margin:"10px 0 0",fontSize:11,color:"#5b6064"},children:"red/s 库存 5：阈值 ≥5 显「仅剩 5 件」，拖到 1 变「现货」；点「绿 L」看缺货红条。"})]})}const XS=Object.freeze(Object.defineProperty({__proto__:null,default:YS,meta:JS},Symbol.toStringTag,{value:"Module"})),ZS={background:"#fff",borderRadius:2,padding:14,color:"#1f2328",width:"100%"},ek={slug:"quota",title:"限购校验 Quota",group:"plugin",plugin:"Quota",intro:"red-s 每人限购 2：拖「已购件数」到 2，提示条翻红「已达限购上限」，canPurchase 置 false。",why:"限量 / 秒杀要在点加购前就拦住；把「还能不能买」写进内核 state，加购按钮直接读、不用自己算。",plugs:[{fn:"createQuotaPlugin",cfg:"purchasedCount: {{purchased}}, onExceed: () => track('quota-exceed')",why:"渲染限购提示条并暴露 canPurchase 门控"}],props:["attributes={attributes}","variants={variants}","defaultSelection={{ 颜色: 'red', 尺码: 's' }}"],note:"canPurchase 只在 onMount / onSkuChange 事件钩子里写入，不在渲染期 setState——避免渲染期改状态的循环告警。",controls:[{key:"purchased",label:"已购件数",kind:"number",init:1,min:0,max:2}],stageHeight:280};function tk({cfg:e,log:t}){const n=Number(e.purchased),r=S.useMemo(()=>Y([ai({purchasedCount:n,onExceed:()=>t(`已购 ${n} ≥ 限购 2：canPurchase = false`,"warn")})]),[n,t]);return c.jsxs("div",{style:ZS,children:[c.jsx(r,{attributes:de,variants:ae,defaultSelection:{颜色:"red",尺码:"s"},onChange:(o,i)=>i&&t(`命中 ${i.sku} · quota ${i.quota??"（不限购）"}`,"event")}),c.jsx("p",{style:{margin:"10px 0 0",fontSize:11,color:"#5b6064"},children:"只读 red-s（唯一声明 quota 的变体）：换到其它变体时限购条消失——未声明 quota 视为不限购。"})]})}const nk=Object.freeze(Object.defineProperty({__proto__:null,default:tk,meta:ek},Symbol.toStringTag,{value:"Module"})),rk={background:"#fff",borderRadius:2,padding:14,color:"#1f2328",width:"100%"},ok={slug:"quantity",title:"数量步进 Quantity",group:"plugin",plugin:"Quantity",intro:"上限 = min(库存, 限购)：red/s 到 2 就封顶（限购 2），换 blue/s（无限购）上限变 5。",why:"别让用户选了 10 件、提交时才发现限购 2——上限在选数量那一刻就该说清楚。",plugs:[{fn:"createQuantityPlugin",cfg:"defaultValue: {{initQty}}, onChange: (q) => track(q)",why:"渲染数量步进器并把数量写进内核 state（key: quantity）"}],props:["attributes={attributes}","variants={variants}","defaultSelection={{ 颜色: 'red', 尺码: 's' }}"],note:"数量依附于具体 SKU：未命中变体时步进器不渲染；切换变体后数量自动收敛到新上限内。",controls:[{key:"initQty",label:"初始数量",kind:"number",init:1,min:1,max:3}],stageHeight:280};function ik({cfg:e,log:t}){const n=Number(e.initQty),r=S.useMemo(()=>Y([si({defaultValue:n,onChange:o=>t(`数量 → ${o}`)})]),[n,t]);return c.jsxs("div",{style:rk,children:[c.jsx(r,{attributes:de,variants:ae,defaultSelection:{颜色:"red",尺码:"s"}},n),c.jsx("p",{style:{margin:"10px 0 0",fontSize:11,color:"#5b6064"},children:"点 + 到封顶，再换「蓝 S」：上限跳到库存 5，步进器跟随新变体重算。"})]})}const lk=Object.freeze(Object.defineProperty({__proto__:null,default:ik,meta:ok},Symbol.toStringTag,{value:"Module"})),sk={background:"#fff",borderRadius:2,padding:14,color:"#1f2328",width:"100%"},ak={slug:"sku-code",title:"货号展示 SkuCode",group:"plugin",plugin:"SkuCode",intro:"命中变体后用等宽字体展示货号；前缀文案可换（货号 / SKU / 商品编码）。",why:"客服对单、用户报修、订单核对都靠这串编码；「一行字但每家都要」的需求就该是插件。",plugs:[{fn:"createSkuCodePlugin",cfg:"label: '{{label}}'",why:"命中后渲染货号行（等宽字体）"}],props:["attributes={attributes}","variants={variants}","defaultSelection={{ 颜色: 'red', 尺码: 's' }}"],note:"core 的「选中摘要」里本就含编码；本插件用于需要单独突出、便于复制核对编码的场景。",controls:[{key:"label",label:"前缀文案",kind:"select",init:"货号",options:[{label:"货号",value:"货号"},{label:"SKU",value:"SKU"},{label:"商品编码",value:"商品编码"}]}],stageHeight:260};function uk({cfg:e,log:t}){const n=String(e.label),r=S.useMemo(()=>Y([ci({label:n})]),[n]);return c.jsxs("div",{style:sk,children:[c.jsx(r,{attributes:de,variants:ae,defaultSelection:{颜色:"red",尺码:"s"},onChange:(o,i)=>i&&t(`命中 ${i.sku}`,"event")}),c.jsx("p",{style:{margin:"10px 0 0",fontSize:11,color:"#5b6064"},children:"未选全时不占位——货号只在命中后出现，别让半选状态看到错误的编码。"})]})}const ck=Object.freeze(Object.defineProperty({__proto__:null,default:uk,meta:ak},Symbol.toStringTag,{value:"Module"})),dk={background:"#fff",borderRadius:2,padding:14,color:"#1f2328",width:"100%"},fk={slug:"reset-bar",title:"清空重选 ResetBar",group:"plugin",plugin:"ResetBar",intro:"选了一半想重来，一键清空：走 context.clearSelection()，未选任何规格时按钮自动隐藏。",why:"core 支持「再点同值取消」，但逐个取消很烦；移动端小屏上整体重置是高频操作。",plugs:[{fn:"createResetBarPlugin",cfg:"text: '{{text}}', onReset: () => track('reset')",why:"渲染清空按钮并整段重置选择"}],props:["attributes={attributes}","variants={variants}","onChange={handleChange}"],note:"依赖核心 context.clearSelection()（vane-sku 0.1.0 起提供）；onReset 在清空后触发，接埋点很顺手。",controls:[{key:"text",label:"按钮文案",kind:"select",init:"清空重选",options:[{label:"清空重选",value:"清空重选"},{label:"重新选择",value:"重新选择"},{label:"重置规格",value:"重置规格"}]}],stageHeight:280};function pk({cfg:e,log:t}){const n=String(e.text),r=S.useMemo(()=>Y([ui({text:n,onReset:()=>t("onReset · 选择已整段清空（按钮随空选择隐藏）","info")})]),[n,t]);return c.jsxs("div",{style:dk,children:[c.jsx(r,{attributes:de,variants:ae,onChange:(o,i)=>t(i?`命中 ${i.sku} · ${JSON.stringify(o)}`:`未命中 · ${JSON.stringify(o)}`,i?"event":"warn")}),c.jsx("p",{style:{margin:"10px 0 0",fontSize:11,color:"#5b6064"},children:"选两个规格 → 点「清空重选」：右栏记一次 onReset，按钮自己藏起来（没有选择可清了）。"})]})}const mk=Object.freeze(Object.defineProperty({__proto__:null,default:pk,meta:fk},Symbol.toStringTag,{value:"Module"})),gk={slug:"image-link",title:"规格切主图 ImageLink",group:"plugin",plugin:"ImageLink",intro:"命中变体带 image 时把图抛给外层（回调 + sku:image 总线双通道），自己不渲染任何 UI；左侧主图由本页外层渲染。",why:"规格图联动与「谁来渲染主图」解耦：gallery、卡片、放大镜想怎么接就怎么接，core 不碰图片。",plugs:[{fn:"createImageLinkPlugin",cfg:"onImageChange: setMainImage",why:"只发事件，主图渲染留给外层"}],props:["attributes={attributes}","variants={variants}","defaultSelection={{ 颜色: 'red', 尺码: 's' }}"],note:"挂载（onMount）也会推一次当前图，页面打开主图不空窗；未命中或变体没写 image 时不发事件。",stageHeight:300};function hk({log:e}){const[t,n]=S.useState(ae[0].image??""),r=S.useMemo(()=>Y([ii({onImageChange:o=>{n(o),e(`主图 → ${o}`)}})]),[e]);return c.jsxs("div",{style:{display:"flex",gap:12,alignItems:"flex-start",width:"100%"},children:[c.jsx("img",{src:t,alt:"主图",style:{width:92,height:92,objectFit:"cover",borderRadius:2,border:"1px solid var(--line)"}}),c.jsxs("div",{style:{background:"#fff",borderRadius:2,padding:14,color:"#1f2328",flex:1},children:[c.jsx(r,{attributes:de,variants:ae,defaultSelection:{颜色:"red",尺码:"s"}}),c.jsx("p",{style:{margin:"10px 0 0",fontSize:11,color:"#5b6064"},children:"换颜色 / 尺码：左图跟着变体走；这就是「发事件的插件 + 接事件的外层」。"})]})]})}const yk=Object.freeze(Object.defineProperty({__proto__:null,default:hk,meta:gk},Symbol.toStringTag,{value:"Module"}));function vk({controls:e,cfg:t,onChange:n}){return c.jsx("div",{className:"ctl-bar",children:e.filter(r=>!r.when||r.when(t)).map(r=>{const o=t[r.key];return c.jsxs("label",{className:"ctl",title:r.hint,children:[c.jsxs("span",{className:"ctl-label",children:[r.label,c.jsx("b",{className:"ctl-val",children:r.kind==="switch"?o?"开":"关":String(o)})]}),r.kind==="switch"?c.jsx("button",{type:"button",className:`ctl-switch${o?" is-on":""}`,onClick:()=>n(r.key,!o),"aria-pressed":!!o,children:c.jsx("i",{})}):r.kind==="select"?c.jsx("select",{className:"ctl-select",value:String(o),onChange:i=>n(r.key,i.target.value),children:(r.options??[]).map(i=>c.jsx("option",{value:i.value,children:i.label},i.value))}):c.jsx("input",{className:"ctl-range",type:"range",min:r.min??0,max:r.max??100,step:r.step??1,value:Number(o),onChange:i=>n(r.key,Number(i.target.value))})]},r.key)})})}function Sk({lines:e,title:t="事件日志",empty:n="还没触发 —— 拖上面的控件，或点一下规格试试",right:r}){return c.jsxs("div",{className:"log",children:[c.jsxs("div",{className:"log-head",children:[c.jsx("span",{children:t}),c.jsxs("span",{className:"log-right",children:[r,c.jsx("b",{children:e.length})]})]}),e.length===0?c.jsx("p",{className:"log-empty",children:n}):c.jsx("ol",{className:"log-list",children:e.map(o=>c.jsxs("li",{className:`log-line is-${o.kind}`,children:[c.jsx("time",{children:o.at}),c.jsx("span",{children:o.text})]},o.id))})]})}function kk({items:e}){return c.jsx("div",{className:"keyhint",children:e.map(([t,n])=>c.jsxs("span",{children:[c.jsx("kbd",{children:t}),n]},t))})}const xk={background:"#fff",borderRadius:2,padding:14,color:"#1f2328",width:"100%"},wk={slug:"keyboard",title:"键盘漫游 KeyboardNav",group:"plugin",plugin:"KeyboardNav",intro:"点中任一规格按钮后，←→ 同行切换、↑↓ 跨行跳转，自动跳过置灰项（预选了「蓝」，方向键会绕开死路的 L）。",why:"键盘用户 / 电视端大屏选购的无障碍刚需；「跳过死路」让方向键永远落在有效选项上。",plugs:[{fn:"createKeyboardNavPlugin",cfg:"preventDefault: {{prevent}}",why:"挂 keydown 监听实现方向键漫游"}],props:["attributes={attributes}","variants={variants}","defaultSelection={{ 颜色: 'blue' }}"],note:"实现走 DOM 查询（依赖 core 按钮的 data-testid 约定），不侵入渲染；onMount 返回清理函数，卸载自动摘监听。",controls:[{key:"prevent",label:"阻止方向键滚动页面",kind:"switch",init:!0}],stageHeight:320};function Pk({cfg:e}){const t=!!e.prevent,n=S.useMemo(()=>Y([li({preventDefault:t})]),[t]);return c.jsxs("div",{style:xk,children:[c.jsx("p",{style:{margin:"0 0 8px",fontSize:12,color:"#4a5056"},children:"先点（或 Tab 聚焦）任一规格按钮，再用方向键走两圈："}),c.jsx(kk,{items:[["←→","同属性行内切换选项"],["↑↓","跨属性行跳转（保持列位）"]]}),c.jsx("div",{style:{marginTop:10},children:c.jsx(n,{attributes:de,variants:ae,defaultSelection:{颜色:"blue"}})}),c.jsx("p",{style:{margin:"10px 0 0",fontSize:11,color:"#5b6064"},children:"在尺码行按 →：S → M → 回到 S，L 因缺 blue-l 被置灰，直接被跳过。"})]})}const Ck=Object.freeze(Object.defineProperty({__proto__:null,default:Pk,meta:wk},Symbol.toStringTag,{value:"Module"})),_k={background:"#fff",borderRadius:2,padding:14,color:"#1f2328",width:"100%"},hu="vane-sku:demo:demos-persistence",Rk={slug:"persistence",title:"选择持久化 StatePersistence",group:"plugin",plugin:"StatePersistence",intro:"把上次选的规格写进 localStorage，挂载时读回；拖「重挂载」开关销毁重建，选择原样还原。",why:"用户逛一圈回来还停在上次的规格；多步下单流程中途返回，也不用从头重选。",plugs:[{fn:"createStatePersistencePlugin",cfg:"key: 'vane-sku:demo:selection'",why:"挂载读回 / 变化写入 / 清空删键"}],props:["attributes={attributes}","variants={variants}"],note:"隐私模式、存储禁用、配额超限、脏数据一律静默降级，不影响主流程；与 UrlSync 可共存。",controls:[{key:"remount",label:"重挂载（模拟刷新）",kind:"switch",init:!1,nonLayout:!0}],stageHeight:300};function Ek({cfg:e,log:t}){const n=!!e.remount,r=S.useMemo(()=>Y([Vs({key:hu})]),[]);return S.useEffect(()=>{const o=window.localStorage.getItem(hu);t(`挂载 · localStorage ${o?`读回 ${o}`:"为空（首次进入）"}`,"info")},[n,t]),c.jsxs("div",{style:_k,children:[c.jsx(r,{attributes:de,variants:ae,onChange:(o,i)=>t(i?`写入 localStorage：${JSON.stringify(o)}（命中 ${i.sku}）`:`写入 localStorage：${JSON.stringify(o)}`,i?"event":"warn")},String(n)),c.jsx("p",{style:{margin:"10px 0 0",fontSize:11,color:"#5b6064"},children:"选好规格 → 拖「重挂载」：按钮组销毁重建，选择自动还原；把选择清空（再点同值取消）会删键。"})]})}const bk=Object.freeze(Object.defineProperty({__proto__:null,default:Ek,meta:Rk},Symbol.toStringTag,{value:"Module"})),jk={background:"#fff",borderRadius:2,padding:14,color:"#1f2328",width:"100%"},$k={display:"block",padding:"6px 10px",borderRadius:2,background:"#f4f5f7",border:"1px solid #e5e7eb",color:"#b45309",fontFamily:"'JetBrains Mono', ui-monospace, monospace",fontSize:11,overflowX:"auto",whiteSpace:"nowrap"},Nk={slug:"url-sync",title:"URL 同步 UrlSync",group:"plugin",plugin:"UrlSync",intro:"选择写进查询串（?sku_颜色=red&sku_尺码=s），挂载时反向还原；刷新 / 分享都能保持选择。",why:"「把这个链接发给客服，他看到的就是我选的规格」——客服带规格链接、分享商品页的刚需。",plugs:[{fn:"createUrlSyncPlugin",cfg:"useReplace: {{replace}}",why:"选择 ↔ 查询串双向同步"}],props:["attributes={attributes}","variants={variants}","onChange={handleChange}"],note:"默认 replaceState 不把每次点击塞进历史栈；查询键带 sku_ 前缀，不覆盖页面其它参数。",controls:[{key:"replace",label:"replaceState（不进历史栈）",kind:"switch",init:!0}],stageHeight:300};function Tk({cfg:e,log:t}){const n=!!e.replace,[r,o]=S.useState(()=>window.location.search||"（空）"),i=S.useMemo(()=>Y([Fs({useReplace:n})]),[n]),l=S.useCallback(()=>{const s=window.location.search||"（已清空）";o(s),t(`查询串 → ${s}`)},[t]);return c.jsxs("div",{style:{...jk,display:"grid",gap:10},children:[c.jsx(i,{attributes:de,variants:ae,onChange:l}),c.jsx("code",{style:$k,children:r}),c.jsx("p",{style:{margin:0,fontSize:11,color:"#5b6064"},children:"上方是实时查询串（只读快照）。关掉开关改用 pushState：每次选择都进历史栈，后退键能撤销选择。"})]})}const Ok=Object.freeze(Object.defineProperty({__proto__:null,default:Tk,meta:Nk},Symbol.toStringTag,{value:"Module"})),Lk={background:"#fff",borderRadius:2,padding:14,color:"#1f2328",width:"100%"},Mk={"sku:mount":"挂载","sku:change":"命中","sku:invalid":"未命中"},Ak={slug:"analytics",title:"埋点上报 Analytics",group:"plugin",plugin:"Analytics",intro:"三类事件（挂载 / 命中 / 未命中）双通道出口：onEvent 回调 + sku:analytics 总线。右栏日志就是上报流水。",why:"规格选择是转化漏斗的关键一步；「哪些组合被点了、哪些根本选不出来」对选品和补库存都是硬数据。",plugs:[{fn:"createAnalyticsPlugin",cfg:"onlyMatched: {{onlyMatched}}, onEvent: (e) => track(e)",why:"只做事件出口，不渲染任何 UI；接哪家 SDK 由宿主决定"}],props:["attributes={attributes}","variants={variants}"],note:"默认未命中也上报——「用户点得到却选不出」的坏组合恰恰最该被发现。",controls:[{key:"onlyMatched",label:"只上报命中",kind:"switch",init:!1,nonLayout:!0}],stageHeight:280};function Ik({cfg:e,log:t}){const n=!!e.onlyMatched,r=S.useMemo(()=>Y([Bs({onlyMatched:n,onEvent:o=>t(`${Mk[o.name]} · ${JSON.stringify(o.selection)}${o.variant?` → ${o.variant.sku}`:""}`,o.name==="sku:invalid"?"warn":o.name==="sku:mount"?"info":"event")})]),[n,t]);return c.jsxs("div",{style:Lk,children:[c.jsx(r,{attributes:de,variants:ae}),c.jsx("p",{style:{margin:"10px 0 0",fontSize:11,color:"#5b6064"},children:"只选颜色（未选全）记「未命中」，选全记「命中」，进页面记「挂载」——三种事件都会进右栏。"})]})}const Dk=Object.freeze(Object.defineProperty({__proto__:null,default:Ik,meta:Ak},Symbol.toStringTag,{value:"Module"})),zk=`import React, { useMemo } from "react";
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
`,Uk=`import React, { useMemo } from "react";
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
`,Bk=`import React, { useMemo } from "react";
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
`,Vk=`import React, { useMemo } from "react";
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
`,Fk=`import React, { useMemo, useState } from "react";
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
`,Hk=`import React, { useMemo } from "react";
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
`,Qk=`import React, { useMemo } from "react";
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
`,Kk=`import React, { useMemo } from "react";
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
`,Wk=`import React, { useMemo } from "react";
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
`,qk=`import React, { useMemo } from "react";
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
`,Gk=`import React, { useMemo } from "react";
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
`,Jk=`import React, { useMemo } from "react";
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
`,Yk=`import React, { useMemo, useState } from "react";
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
`,Xk=`import React, { useMemo } from "react";
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
`,Zk=`import React, { useEffect, useMemo } from "react";
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
`,e0=`import React, { useCallback, useMemo, useState } from "react";
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
`,t0=`import React, { useMemo } from "react";
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
`,n0=Object.assign({"./00-quickstart.tsx":ry,"./01-disable.tsx":sy,"./02-two-attr.tsx":fy,"./03-ignore-stock.tsx":hy,"./04-full-combo.tsx":US,"./05-price-range.tsx":HS,"./06-price-link.tsx":qS,"./07-stock-status.tsx":XS,"./08-quota.tsx":nk,"./09-quantity.tsx":lk,"./10-sku-code.tsx":ck,"./11-reset-bar.tsx":mk,"./12-image-link.tsx":yk,"./13-keyboard.tsx":Ck,"./14-persistence.tsx":bk,"./15-url-sync.tsx":Ok,"./16-analytics.tsx":Dk}),r0=Object.assign({"./00-quickstart.tsx":zk,"./01-disable.tsx":Uk,"./02-two-attr.tsx":Bk,"./03-ignore-stock.tsx":Vk,"./04-full-combo.tsx":Fk,"./05-price-range.tsx":Hk,"./06-price-link.tsx":Qk,"./07-stock-status.tsx":Kk,"./08-quota.tsx":Wk,"./09-quantity.tsx":qk,"./10-sku-code.tsx":Gk,"./11-reset-bar.tsx":Jk,"./12-image-link.tsx":Yk,"./13-keyboard.tsx":Xk,"./14-persistence.tsx":Zk,"./15-url-sync.tsx":e0,"./16-analytics.tsx":t0}),o0=e=>e.replace(/^\.\//,""),zl=Object.entries(n0).map(([e,t])=>{const n=o0(e);return{meta:t.meta,Stage:t.default,file:n,source:r0[e]??""}}).sort((e,t)=>e.file.localeCompare(t.file)),i0=["basic","advanced","plugin"];Array.from(new Set(zl.map(e=>e.meta.plugin).filter(e=>!!e))).sort();const Ul={basic:{label:"基础功能",hint:"Core 自身的 props 与推导行为"},advanced:{label:"高级功能",hint:"全量装配 / 组合"},plugin:{label:"插件功能",hint:"一插件一页"}};function yu(e){const t={};for(const n of e.controls??[])t[n.key]=n.init;return t}const l0="import|from|export|default|function|return|const|let|var|new|if|else|for|of|in|while|switch|case|break|continue|type|interface|extends|implements|as|satisfies|await|async|throw|try|catch|finally|class|typeof|instanceof|delete|void|yield",s0="true|false|null|undefined|this|super",a0="number|string|boolean|object|any|unknown|never|React|HTMLElement|void",vu=new RegExp([String.raw`(\/\/[^\n]*|\/\*[\s\S]*?\*\/)`,String.raw`(\`(?:\\[\s\S]|[^\\\`])*\`|"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*')`,String.raw`\b(${l0})\b`,String.raw`\b(${s0})\b`,String.raw`\b(${a0})\b`,String.raw`(<\/?[A-Za-z][\w.$]*)`,String.raw`\b(\d+(?:\.\d+)?)\b`].join("|"),"g"),Su=["tok-comment","tok-string","tok-kw","tok-lit","tok-type","tok-tag","tok-num"];function u0(e){const t=[];let n=0;vu.lastIndex=0;let r;for(;r=vu.exec(e);){r.index>n&&t.push({text:e.slice(n,r.index),cls:null});const o=Su.findIndex((i,l)=>r[l+1]!==void 0);t.push({text:r[0],cls:o>=0?Su[o]:null}),n=r.index+r[0].length}return n<e.length&&t.push({text:e.slice(n),cls:null}),t}function ku(e){try{const t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="fixed",t.style.opacity="0",document.body.appendChild(t),t.select();const n=document.execCommand("copy");return document.body.removeChild(t),n}catch{return!1}}function c0({code:e,title:t="tsx",collapseAfter:n=24,maxHeight:r}){const[o,i]=S.useState("idle"),[l,s]=S.useState(!1),a=S.useMemo(()=>e.replace(/\s+$/,"").split(`
`),[e]),u=n>0&&a.length>n,d=u&&!l?a.slice(0,n).join(`
`):e,p=S.useMemo(()=>u0(d),[d]),m=S.useCallback(async()=>{var k;let y=!1;if((k=navigator.clipboard)!=null&&k.writeText)try{await navigator.clipboard.writeText(e),y=!0}catch{y=ku(e)}else y=ku(e);i(y?"ok":"fail"),window.setTimeout(()=>i("idle"),1600)},[e]);return c.jsxs("div",{className:"code",children:[c.jsxs("div",{className:"code-head",children:[c.jsx("span",{children:t}),c.jsxs("span",{style:{display:"flex",gap:6,alignItems:"center"},children:[c.jsxs("span",{children:[a.length," 行"]}),c.jsx("button",{type:"button",className:`code-copy${o==="ok"?" is-ok":o==="fail"?" is-fail":""}`,onClick:m,children:o==="ok"?"已复制":o==="fail"?"复制失败":"复制"})]})]}),c.jsx("pre",{style:r?{maxHeight:r}:{maxHeight:"none"},children:c.jsx("code",{children:p.map((y,k)=>y.cls?c.jsx("span",{className:y.cls,children:y.text},k):c.jsx(jr.Fragment,{children:y.text},k))})}),u?c.jsx("button",{type:"button",className:"code-more",onClick:()=>s(y=>!y),children:l?"收起":`展开余下 ${a.length-n} 行`}):null]})}function gf(e){return e.props??e.config??[]}function d0({doc:e}){var o,i,l;const t=gf(e),n=e.events??[],r=e.methods??[];return c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"doc-sec",children:[c.jsx("h5",{children:"属性 Props"}),t.length?c.jsxs("table",{className:"doc-table",children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{children:"属性"}),c.jsx("th",{children:"类型"}),c.jsx("th",{children:"默认"}),c.jsx("th",{children:"说明"})]})}),c.jsx("tbody",{children:t.map(s=>c.jsxs("tr",{children:[c.jsx("td",{children:c.jsx("code",{children:s.name})}),c.jsx("td",{children:c.jsx("code",{className:"dim",children:s.type})}),c.jsx("td",{children:c.jsx("code",{className:"dim",children:s.default??"-"})}),c.jsx("td",{children:s.description??"—"})]},s.name))})]}):c.jsx("p",{className:"doc-note",children:"无可配置属性，工厂零参调用即可。"})]}),c.jsxs("div",{className:"doc-sec",children:[c.jsx("h5",{children:"事件 Events"}),n.length?c.jsxs("table",{className:"doc-table",children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{children:"事件"}),c.jsx("th",{children:"触发时机"}),c.jsx("th",{children:"说明"})]})}),c.jsx("tbody",{children:n.map(s=>c.jsxs("tr",{children:[c.jsx("td",{children:c.jsx("code",{children:s.name})}),c.jsx("td",{children:s.when}),c.jsx("td",{children:s.description})]},s.name))})]}):c.jsx("p",{className:"doc-note",children:"不参与任何事件。"})]}),c.jsxs("div",{className:"doc-sec",children:[c.jsx("h5",{children:"方法 Methods"}),r.length?c.jsxs("table",{className:"doc-table",children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{children:"方法"}),c.jsx("th",{children:"签名"}),c.jsx("th",{children:"说明"})]})}),c.jsx("tbody",{children:r.map(s=>c.jsxs("tr",{children:[c.jsx("td",{children:c.jsx("code",{children:s.name})}),c.jsx("td",{children:c.jsx("code",{className:"dim",children:s.signature})}),c.jsx("td",{children:s.description})]},s.name))})]}):c.jsx("p",{className:"doc-note",children:e.methodsNote??"不调用上下文方法。"})]}),c.jsxs("div",{className:"doc-cols",children:[(o=e.features)!=null&&o.length?c.jsxs("div",{children:[c.jsx("h5",{children:"能做"}),c.jsx("ul",{children:e.features.map(s=>c.jsx("li",{children:s},s))})]}):null,(i=e.useCases)!=null&&i.length?c.jsxs("div",{children:[c.jsx("h5",{children:"适合"}),c.jsx("ul",{children:e.useCases.map(s=>c.jsx("li",{children:s},s))})]}):null,(l=e.notes)!=null&&l.length?c.jsxs("div",{children:[c.jsx("h5",{children:"注意"}),c.jsx("ul",{children:e.notes.map(s=>c.jsx("li",{children:s},s))})]}):null]})]})}function f0({factory:e,priority:t,summary:n,doc:r,defaultOpen:o=!0}){var l,s;const i={props:gf(r).length,events:((l=r.events)==null?void 0:l.length)??0,methods:((s=r.methods)==null?void 0:s.length)??0};return c.jsxs("details",{className:"api-plug",open:o,children:[c.jsxs("summary",{children:[c.jsx("code",{children:e}),c.jsxs("span",{className:"tag tag-accent",children:["priority ",t]}),c.jsx("span",{className:"api-plug-desc",children:n}),c.jsxs("span",{className:"api-plug-n",children:[i.props," 属性 · ",i.events," 事件 · ",i.methods," 方法"]})]}),c.jsx("div",{className:"api-plug-body",children:c.jsx(d0,{doc:r})})]})}const p0=/create[A-Z]\w*Plugin/g;function m0(e){return(e.match(/create[A-Z]\w*Plugin/)??[e])[0]}function hf(e){return e.dir?`create${e.dir}`:m0(e.factory)}function g0(e){return new Set(e.match(p0)??[])}function h0(e,t){const n=g0(e);return t.filter(r=>n.has(hf(r))).sort((r,o)=>r.priority-o.priority)}function y0({source:e,plugins:t,heading:n="本页用到的插件"}){const r=S.useMemo(()=>h0(e,t),[e,t]);return r.length===0?null:c.jsxs("section",{className:"api-sec",children:[c.jsxs("div",{className:"api-sec-head",children:[c.jsxs("h2",{className:"api-sec-title",children:[n," · ",r.length," 个"]}),c.jsxs("p",{className:"api-sec-sub",children:["就是上面代码里装配的全部成员。属性是工厂参数，事件是父组件传进来的回调， 方法是插件读取 / 调用的上下文能力 —— 表内容与 ",c.jsx("code",{children:"doc.json"})," 同源，随包发布。"]})]}),r.map(o=>c.jsx(f0,{factory:hf(o),priority:o.priority,summary:o.summary??o.doc.description??"",doc:o.doc},o.factory))]})}const v0=`import type {
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
`,S0=`import type {
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
`,k0=`import type { SkuPlugin, SkuPluginContext } from "../../components/SkuPlugin/plugins/types";

/**
 * KeyboardNavPlugin — 键盘漫游（无障碍）。
 *
 * 让规格按钮支持方向键：
 *   ← → 在同一属性行内移动焦点（自动跳过被禁用推导置灰的选项）
 *   ↑ ↓ 在属性行之间移动焦点（按完整候选列表的列位置就近落点）
 * Enter / Space 由按钮原生行为触发选择 —— 移动焦点不等于改变选择，
 * 键盘用户终于可以「只浏览不选择」了。
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
    description: "键盘漫游：方向键移动焦点，Enter/Space 选择",
    priority: 25,
    config,
    hooks: {
      onMount: (context: SkuPluginContext) => {
        const root = context.refs.getContainer?.() ?? null;
        if (!root) return;

        /** 行内全部候选（含禁用项：列位置要按完整列表算，否则会漂移） */
        const allOf = (row: Element) =>
          Array.from(
            row.querySelectorAll<HTMLButtonElement>('[data-testid^="sku-opt-"]')
          );

        const handler = (e: KeyboardEvent) => {
          const isHorizontal = e.key === "ArrowLeft" || e.key === "ArrowRight";
          const isVertical = e.key === "ArrowUp" || e.key === "ArrowDown";
          // Enter / Space 交给按钮原生行为（本插件不 preventDefault，不重复触发 click）
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
            const all = allOf(rows[rowIndex]);
            const cur = all.indexOf(btn);
            if (cur < 0 || !all.length) return;
            const dir = e.key === "ArrowRight" ? 1 : -1;
            // 在完整候选列表里按方向找下一个可用项（禁用项直接跳过，可跨过它继续找）
            for (let step = 1; step <= all.length; step += 1) {
              const index = ((cur + dir * step) % all.length + all.length) % all.length;
              const candidate = all[index];
              if (candidate.disabled) continue;
              // 只移动焦点，不点击（P2-7：移动 ≠ 选择）
              candidate.focus();
              return;
            }
            return;
          }

          const targetRow = rows[rowIndex + (e.key === "ArrowDown" ? 1 : -1)];
          if (!targetRow) return;
          const curCol = allOf(rows[rowIndex]).indexOf(btn);
          // 目标行按完整列表的列位置就近取「可用」项，避免过滤后下标漂移
          const target = allOf(targetRow);
          let best: HTMLButtonElement | null = null;
          let bestDistance = Infinity;
          for (let i = 0; i < target.length; i += 1) {
            const candidate = target[i];
            if (candidate.disabled) continue;
            const distance = Math.abs(i - curCol);
            if (distance < bestDistance) {
              bestDistance = distance;
              best = candidate;
            }
          }
          best?.focus();
        };

        root.addEventListener("keydown", handler);
        // 返回清理函数：内核会在 clear() 时逆序执行
        return () => root.removeEventListener("keydown", handler);
      },
    },
  };
}
`,x0=`import React from "react";
import { formatPriceValue } from "../../components/SkuPlugin/limits";
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
              {formatPriceValue(v.price)}
            </span>
            {hasOriginal ? (
              <s data-testid="sku-price-original" style={{ fontSize: 12, color: "#6b7076" }}>
                {currency}
                {formatPriceValue(v.originalPrice)}
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
`,w0=`import React from "react";
import { effectiveVariants } from "../../components/SkuPlugin/matrix";
import { formatPriceValue } from "../../components/SkuPlugin/limits";
import type { SkuPlugin, SkuPluginContext } from "../../components/SkuPlugin/plugins/types";

/**
 * PriceRangePlugin — 价格区间。
 *
 * 未选全（或组合无货）时，PriceLink 显示不出单价，页面价格区就空了。
 * 这里补上「¥199.00 – ¥269.00」这种区间展示：按当前选择过滤变体后取 min/max。
 * 一旦选全并命中变体就退场，把价格区让给 PriceLink 显示准确单价。
 *
 * 口径（P2-2）：区间只统计「可售」变体（复用 effectiveVariants，与禁用推导同一口径），
 * 否则会出现「¥199 – ¥229」但只有 199 有货的虚假区间；价格固定两位小数。
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

        const attributes = context.attributes ?? context.props.attributes ?? [];
        const variants = context.variants ?? context.props.variants ?? [];
        const selection = context.selection ?? {};
        // 只统计「可售」变体，且与已选属性一致
        const pool = effectiveVariants(variants, {
          ignoreOutOfStock: context.ignoreOutOfStock ?? true,
        }).filter((v) =>
          Object.keys(selection).every((k) => v.attrValues?.[k] === selection[k])
        );
        const prices = pool
          .map((v) => v.price)
          .filter((p): p is number => typeof p === "number" && Number.isFinite(p));
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
              {formatPriceValue(min)}
              {min !== max ? \`\${separator}\${currency}\${formatPriceValue(max)}\` : ""}
            </span>
            {attributes.length && !context.isComplete ? (
              <span style={{ fontSize: 11, color: "#5b6064" }}>（请先选择规格）</span>
            ) : null}
          </div>
        );
      },
    },
  };
}
`,P0=`import React from "react";
import { quantityUpper } from "../../components/SkuPlugin/limits";
import type { SkuPlugin, SkuPluginContext } from "../../components/SkuPlugin/plugins/types";

/**
 * QuantityPlugin — 数量步进器。
 *
 * 选完规格紧接着就是选数量，上限取「库存」「剩余可购（限购-已购）」与 config.max 的最小值，
 * 避免用户选了 10 件却在提交时才发现限购 2 件。
 * 数量写进内核 state（key: quantity），宿主加购按钮直接读。
 *
 * 关键约束（P0-2）：上限不能只作用在渲染值上 —— 变体/库存/限购变化时
 * 必须把收敛后的数量写回 state，否则宿主读到的是旧数量（超卖）。
 * 收敛在 onMount / onSkuChange 里做（事件钩子），不在渲染期 setState，
 * 且仅在「已经是数字且与目标值不同」时才写 + 回调，避免 setState 循环。
 *
 * meta 在同目录 index.ts 挂载。
 */
export interface QuantityConfig {
  /** 初始数量，默认 1 */
  defaultValue?: number;
  /** 硬上限（不传则取 库存/剩余限购 的较小值） */
  max?: number;
  /** 当前用户已购件数，用于扣减限购额度（与 QuotaPlugin 同一口径），默认 0 */
  purchasedCount?: number;
  /** 数量变化回调（用户步进 + 库存/限购变化导致的自动收敛都会触发） */
  onChange?: (quantity: number) => void;
}

export function createQuantityPlugin(config: QuantityConfig = {}): SkuPlugin {
  const defaultValue = config.defaultValue ?? 1;
  const purchasedCount = config.purchasedCount ?? 0;

  /** 当前变体下的数量上限；变体缺失/上限非有限时返回 0 */
  const upperOf = (context: SkuPluginContext) =>
    quantityUpper(context.variant, {
      purchasedCount,
      max: config.max,
    });

  /** 收敛目标：无变体 → defaultValue；有上限 → clamp 到 [1, upper] */
  const targetOf = (context: SkuPluginContext) => {
    const upper = upperOf(context);
    const base =
      typeof context.state?.quantity === "number"
        ? (context.state.quantity as number)
        : defaultValue;
    if (!Number.isFinite(upper) || upper <= 0) return defaultValue;
    return Math.max(1, Math.min(base, upper));
  };

  /**
   * 把收敛结果写回内核 state。
   * notify=false（首次初始化）只写不回调，避免把初始化当用户操作；
   * 与目标值相同则完全跳过，保证不会出现 setState 循环。
   */
  const converge = (context: SkuPluginContext, notify: boolean) => {
    const target = targetOf(context);
    const current = context.state?.quantity;
    if (typeof current === "number" && current === target) return;
    const hadNumber = typeof current === "number";
    context.setState({ quantity: target });
    if (hadNumber && notify) config.onChange?.(target);
  };

  return {
    name: "Quantity",
    version: "0.1.0",
    description: "数量步进器：受库存与剩余限购双重上限约束，并写回 state",
    priority: 35,
    config: { slotPosition: "after", order: 20, ...config },
    hooks: {
      onMount: (context: SkuPluginContext) => {
        converge(context, false);
      },
      // 变体 / 库存 / 限购变化都会触发（withPlugins 对变体变化同样派发 onSkuChange）
      onSkuChange: (context: SkuPluginContext) => {
        converge(context, true);
      },
      renderHeader: (context: SkuPluginContext) => {
        const v = context.variant;
        if (!v) return null;

        const upper = upperOf(context);
        if (!Number.isFinite(upper) || upper <= 0) return null;

        // 展示用兜底 clamp：state 的收敛由 onSkuChange 负责，这里只防一帧闪烁
        const raw =
          typeof context.state?.quantity === "number"
            ? (context.state.quantity as number)
            : defaultValue;
        const current = Math.max(1, Math.min(raw, upper));

        const commit = (next: number) => {
          const clamped = Math.max(1, Math.min(next, upper));
          if (clamped === raw) return;
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
`,C0=`import React from "react";
import { remainingQuota } from "../../components/SkuPlugin/limits";
import type {
  SkuPlugin,
  SkuPluginContext,
} from "../../components/SkuPlugin/plugins/types";

/**
 * QuotaPlugin — 限购校验（B2/B4 子路径插件）。
 *
 * vane-card 只有 stock（库存），没有「每人限购 N 件」；这里补齐：
 *  - 读 variant.quota 与已购数，在 after 段渲染限购提示条；
 *  - 把 canPurchase / remaining 写入内核 state，宿主加购按钮读它决定是否禁用。
 *
 * 「剩余可购 = max(0, 限购 - 已购)」与 QuantityPlugin 共用同一实现（limits.ts），
 * 避免出现「限购 2、已购 1，还能再加 2 件」的规则漏洞（P1-3）。
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

/** 解析限购状态（纯逻辑，便于单测与宿主复用） */
export function resolveQuota(
  variant: { quota?: number } | null | undefined,
  purchasedCount = 0
): { quota: number | undefined; remaining: number; canPurchase: boolean } {
  const quota = variant?.quota;
  const remaining = remainingQuota(quota, purchasedCount);
  return { quota, remaining, canPurchase: remaining > 0 };
}

export function createQuotaPlugin(config: QuotaConfig = {}): SkuPlugin {
  const purchased = config.purchasedCount ?? 0;

  const resolve = (context: SkuPluginContext) =>
    resolveQuota(context.variant, purchased);

  const push = (context: SkuPluginContext) => {
    const { remaining, canPurchase } = resolve(context);
    context.setState({ canPurchase, remainingQuota: remaining });
    return canPurchase;
  };

  return {
    name: "Quota",
    version: "0.1.0",
    description: "限购校验：渲染限购提示条并暴露 canPurchase / remaining",
    priority: 40,
    config,
    hooks: {
      onMount: (context: SkuPluginContext) => {
        push(context);
      },
      onSkuChange: (context: SkuPluginContext) => {
        if (!push(context)) config.onExceed?.();
      },
      renderHeader: (context: SkuPluginContext) => {
        const { quota, remaining, canPurchase } = resolve(context);
        if (typeof quota !== "number") return null;
        return (
          <div
            data-testid="sku-quota"
            data-can-purchase={canPurchase ? "true" : "false"}
            data-remaining={String(remaining)}
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
            {canPurchase ? \` · 还可购 \${remaining} 件\` : " · 已达限购上限"}
          </div>
        );
      },
    },
  };
}
`,_0=`import React from "react";
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
`,R0=`import React from "react";
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
`,E0=`import type {
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
 * 存储键必须能区分商品/场景（P2-5）：同一页有两个 SKU 面板、或换商品复用时，
 * 单 key 会把 A 商品的选择还原到 B 商品上（并进而触发全灰死锁）。
 * 用 productKey 拼出 \`key:productKey\`；解出的值仍会经内核的 normalizeSelection 校验，
 * 即使残留脏数据也不会写进选择态（P0-1）。
 *
 * meta 在同目录 index.ts 挂载。
 */
export interface StatePersistenceConfig {
  /** 存储键，默认 "vane-sku:selection" */
  key?: string;
  /** "local"（默认）或 "session" */
  scope?: "local" | "session";
  /** 商品 / 场景维度（建议必传，如 skuId）：最终键为 \`key:productKey\` */
  productKey?: string | null;
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
  const baseKey = config.key ?? "vane-sku:selection";
  const scope = config.scope ?? "local";
  const storageKey =
    config.productKey == null || config.productKey === ""
      ? baseKey
      : \`\${baseKey}:\${config.productKey}\`;

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
          const raw = store.getItem(storageKey);
          if (!raw) return;
          const parsed = JSON.parse(raw) as SkuSelection;
          if (parsed && typeof parsed === "object" && Object.keys(parsed).length) {
            // 走归一化入口：非法键值被丢弃，不给矩阵留脏值（P0-1）
            context.setSelection(parsed);
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
          if (Object.keys(selection).length) store.setItem(storageKey, JSON.stringify(selection));
          else store.removeItem(storageKey);
        } catch {
          // 配额超限时静默失败
        }
      },
    },
  };
}
`,b0=`import React from "react";
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
`,j0=`import type {
  SkuPlugin,
  SkuPluginContext,
  SkuSelection,
} from "../../components/SkuPlugin/plugins/types";

/**
 * UrlSyncPlugin — 选择同步到 URL。
 *
 * 「把这个链接发给客服，他看到的就是我选的规格」——把选择写进查询串。
 * 挂载时反向解析回选择，刷新/分享都能还原；并监听 popstate，
 * 浏览器前进/后退后 UI 与 URL 保持一致。
 *
 * 查询键用前缀（默认 sku_）避免和页面其它参数打架：
 *   ?sku_颜色=red&sku_尺码=s
 *
 * URL 是外部输入：解析结果交给内核侧的 normalizeSelection 做白名单校验
 * （属性名 / optionId 不存在时丢弃），脏链接不会把矩阵拖死（P0-1 / P2-5）。
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
      if (k.startsWith(prefix) && v) sel[k.slice(prefix.length)] = v;
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
    description: "URL 同步：把规格选择写进查询串，并可从 URL 还原（含 popstate）",
    priority: 28,
    config,
    hooks: {
      onMount: (context: SkuPluginContext) => {
        const initial = readSelection();
        if (Object.keys(initial).length) context.setSelection(initial);

        if (typeof window === "undefined") return;
        // 前进/后退后 URL 变了，组件也要跟着还原（P2-5）
        const onPopState = () => {
          context.setSelection(readSelection());
        };
        window.addEventListener("popstate", onPopState);
        return () => window.removeEventListener("popstate", onPopState);
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
`,G0={price:"价格与库存",info:"信息与联动",interaction:"选择与交互"},xu=["price","info","interaction"],wu=Object.assign({"/src/custom-plugins/AnalyticsPlugin/doc.json":of,"/src/custom-plugins/ImageLinkPlugin/doc.json":lf,"/src/custom-plugins/KeyboardNavPlugin/doc.json":sf,"/src/custom-plugins/PriceLinkPlugin/doc.json":rf,"/src/custom-plugins/PriceRangePlugin/doc.json":nf,"/src/custom-plugins/QuantityPlugin/doc.json":af,"/src/custom-plugins/QuotaPlugin/doc.json":uf,"/src/custom-plugins/ResetBarPlugin/doc.json":cf,"/src/custom-plugins/SkuCodePlugin/doc.json":df,"/src/custom-plugins/StatePersistencePlugin/doc.json":ff,"/src/custom-plugins/StockStatusPlugin/doc.json":pf,"/src/custom-plugins/UrlSyncPlugin/doc.json":mf}),Pu=Object.assign({"/src/custom-plugins/AnalyticsPlugin/create.tsx":v0,"/src/custom-plugins/ImageLinkPlugin/create.tsx":S0,"/src/custom-plugins/KeyboardNavPlugin/create.tsx":k0,"/src/custom-plugins/PriceLinkPlugin/create.tsx":x0,"/src/custom-plugins/PriceRangePlugin/create.tsx":w0,"/src/custom-plugins/QuantityPlugin/create.tsx":P0,"/src/custom-plugins/QuotaPlugin/create.tsx":C0,"/src/custom-plugins/ResetBarPlugin/create.tsx":_0,"/src/custom-plugins/SkuCodePlugin/create.tsx":R0,"/src/custom-plugins/StatePersistencePlugin/create.tsx":E0,"/src/custom-plugins/StockStatusPlugin/create.tsx":b0,"/src/custom-plugins/UrlSyncPlugin/create.tsx":j0}),yf=e=>e.replace(/^.*\/custom-plugins\//,"").replace(/\/.*$/,"");function $0(e){const t=Object.keys(Pu).find(o=>yf(o)===e),n=t?Pu[t]:"",r=/priority:\s*(\d+)/.exec(n);return r?Number(r[1]):0}function N0(e){const t=Object.keys(wu).find(n=>yf(n)===e);return t?wu[t]:{name:e,description:"（缺少 doc.json）"}}const T0=[{dir:"PriceLinkPlugin",group:"price",make:()=>Mr({discountText:"限时8折"})},{dir:"PriceRangePlugin",group:"price",make:()=>Lr()},{dir:"StockStatusPlugin",group:"price",make:()=>di({lowStockThreshold:5})},{dir:"QuotaPlugin",group:"price",make:()=>ai({purchasedCount:1})},{dir:"QuantityPlugin",group:"price",make:()=>si()},{dir:"ImageLinkPlugin",group:"info",make:()=>ii({onImageChange:e=>console.log("[sku] 主图 →",e)})},{dir:"SkuCodePlugin",group:"info",make:()=>ci()},{dir:"AnalyticsPlugin",group:"info",make:()=>Bs({onEvent:e=>console.log("[sku] 埋点",e.name)})},{dir:"ResetBarPlugin",group:"interaction",make:()=>ui()},{dir:"KeyboardNavPlugin",group:"interaction",make:()=>li()},{dir:"StatePersistencePlugin",group:"interaction",make:()=>Vs({key:"vane-sku:demo"})},{dir:"UrlSyncPlugin",group:"interaction",make:()=>Fs()}],Uo=T0.map(e=>{const t=N0(e.dir);return{dir:e.dir,factory:`create${e.dir.replace(/Plugin$/,"")}Plugin`,group:e.group,priority:$0(e.dir),summary:t.description,doc:t,make:e.make}}).sort((e,t)=>xu.indexOf(e.group)-xu.indexOf(t.group)||t.priority-e.priority),J0=Uo.map(e=>e.dir),O0=/\{\{\s*([\w-]+)\s*\}\}/g;function Cu(e,t){return e.replace(O0,(n,r)=>r in t?String(t[r]):n)}function L0(e){return e.replace(/^create/,"")}function M0(e,t){const r=['import { createSkuSelector } from "vane-sku";',...e.plugs.map(s=>s.fn).sort().map(s=>`import { ${s} } from "vane-sku/custom-plugins/${L0(s)}";`),"",'import type { SkuAttribute, SkuVariant } from "vane-sku";'].join(`
`),o=e.plugs.map(s=>`  ${s.fn}(${s.cfg?`{ ${Cu(s.cfg,t)} }`:""}),`).join(`
`),i=e.props.filter(s=>typeof s=="string"||!s.when||s.when(t)).map(s=>`      ${Cu(typeof s=="string"?s:s.text,t)}`).join(`
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
`}function A0({entry:e,order:t}){var v;const{meta:n,Stage:r,file:o,source:i}=e,[l,s]=S.useState(()=>yu(n)),[a,u]=S.useState([]),[d,p]=S.useState("minimal"),m=S.useCallback((x,g="event")=>{const f=new Date().toLocaleTimeString("zh-CN",{hour12:!1});u(h=>[{id:h.length+1,at:f,text:x,kind:g},...h].slice(0,60))},[]),y=S.useCallback((x,g)=>{s(f=>({...f,[x]:g}))},[]),k=S.useMemo(()=>M0(n,l),[n,l]);return c.jsxs("section",{className:"demo","data-demo":n.slug,children:[c.jsxs("header",{className:"demo-head",children:[c.jsxs("div",{className:"demo-folio",children:[c.jsx("span",{className:"demo-no",children:String(t).padStart(2,"0")}),c.jsx("em",{children:"plate"})]}),c.jsxs("div",{children:[c.jsxs("div",{className:"demo-title-row",children:[c.jsx("h2",{children:n.title}),c.jsx("span",{className:"demo-group",children:Ul[n.group].label}),n.plugin?c.jsx("code",{className:"demo-plugin",children:n.plugin}):null]}),c.jsx("p",{className:"demo-intro",children:n.intro}),c.jsxs("p",{className:"demo-why",children:[c.jsx("b",{children:"什么时候用"}),n.why]})]}),c.jsxs("div",{className:"demo-meta",children:[c.jsxs("div",{className:"demo-meta-row",children:[c.jsx("span",{children:"file"}),c.jsx("b",{children:o})]}),c.jsxs("div",{className:"demo-meta-row",children:[c.jsx("span",{children:"group"}),c.jsx("b",{children:Ul[n.group].label})]}),c.jsxs("div",{className:"demo-meta-row",children:[c.jsx("span",{children:"plugs"}),c.jsx("b",{children:n.plugs.length?`${n.plugs.length} installed`:"core only"})]})]})]}),(v=n.controls)!=null&&v.length?c.jsxs("div",{className:"demo-controls",children:[c.jsx(vk,{controls:n.controls,cfg:l,onChange:y}),c.jsx("button",{type:"button",className:"demo-reset",onClick:()=>{s(yu(n)),u([])},children:"重置"})]}):null,c.jsxs("div",{className:"demo-body",children:[c.jsxs("figure",{className:"plate",children:[c.jsxs("figcaption",{className:"plate-cap",children:[c.jsx("b",{children:"stage"}),c.jsxs("span",{children:[n.tone==="light"?"light surface":"live render",n.stageHeight?` · ${n.stageHeight}px`:""]}),c.jsx("em",{children:"live"})]}),c.jsx("div",{className:"plate-ruler","aria-hidden":!0}),c.jsx("div",{className:`plate-body demo-stage${n.tone==="light"?" tone-light":""}`,style:{"--stage-h":`${n.stageHeight??380}px`},children:c.jsx(r,{cfg:l,log:m,setCfg:y})})]}),c.jsxs("aside",{className:"demo-side",children:[c.jsx("div",{className:"demo-plugs",children:n.plugs.length===0?c.jsx("span",{className:"demo-plug is-core",children:"仅 Core props"}):n.plugs.map(x=>c.jsx("span",{className:`demo-plug${x.local?" is-local":""}`,children:x.fn.replace(/^create|Plugin$/g,"")},x.fn))}),c.jsx("ul",{className:"demo-why-list",children:n.plugs.map(x=>c.jsxs("li",{children:[c.jsx("code",{children:x.fn}),c.jsx("span",{children:x.why})]},x.fn))}),n.note?c.jsxs("p",{className:"demo-note",children:["⚠ ",n.note]}):null,c.jsx(Sk,{lines:a,empty:n.plugs.length>0?"还没触发 —— 拖上面的控件，或点一下规格试试":"这一页没有事件类行为，日志留白"})]})]}),c.jsxs("div",{className:"demo-code",children:[c.jsxs("div",{className:"demo-switch",role:"tablist",children:[c.jsx("button",{type:"button",role:"tab","aria-selected":d==="minimal",className:d==="minimal"?"is-active":"",onClick:()=>p("minimal"),children:"最小装配"}),c.jsx("button",{type:"button",role:"tab","aria-selected":d==="full",className:d==="full"?"is-active":"",onClick:()=>p("full"),children:"完整源码"})]}),c.jsx(c0,{code:d==="minimal"?k:i,title:d==="minimal"?`${n.slug}.minimal.tsx`:o,collapseAfter:d==="minimal"?0:26,maxHeight:420},d)]}),c.jsx(y0,{source:i,plugins:Uo})]})}const I0=S.lazy(()=>Us(()=>import("./HomePage-Bp1dyWlg.js"),__vite__mapDeps([0,1]),import.meta.url).then(e=>({default:e.HomePage}))),D0=S.lazy(()=>Us(()=>import("./PluginsPage-B9ssAkDg.js"),[],import.meta.url).then(e=>({default:e.PluginsPage}))),z0=S.lazy(()=>Us(()=>import("./ScenariosPage-BAAT6kkW.js"),__vite__mapDeps([2,1]),import.meta.url).then(e=>({default:e.ScenariosPage}))),U0={pkg:"vane-sku",brand:"S",subtitle:"规格选择 / plugin index",nav:[{to:"/",label:"总览",hint:"overview"},{to:"/plugins",label:"插件工坊",hint:`${Uo.length} plugins`},{to:"/scenarios",label:"场景示例",hint:"4 plates"}],routes:[{path:"/",element:c.jsx(I0,{})},{path:"/plugins",element:c.jsx(D0,{})},{path:"/scenarios",element:c.jsx(z0,{})}],crumb:e=>e.startsWith("/plugins")?"workshop · 插件工坊":e.startsWith("/scenarios")?"plates · 场景示例":"index · 总览",demos:{label:"逐项示例",groups:i0.map(e=>({key:e,label:Ul[e].label})),entries:zl,detail:(e,t)=>c.jsx(A0,{entry:e,order:t})},footer:[`${Uo.length} PLUGINS · 4 PLATES`,`${zl.length} DEMOS · MATRIX CORE`]};function B0(){return c.jsx(th,{config:U0})}function V0(e){const t=[];if(!e)return{problems:["体检根节点不存在"],checked:0};const n=Array.from(e.querySelectorAll('[data-testid^="sku-opt-"]'));let r=0;const o=e.getBoundingClientRect();if(!(o.width!==0||o.height!==0||n.some(s=>{const a=s.getBoundingClientRect();return a.width!==0||a.height!==0})))return{problems:[],checked:0};for(const s of n){r+=1;const a=s.getBoundingClientRect();if(a.width===0||a.height===0){t.push(`零尺寸元素：${s.dataset.testid}（${a.width}×${a.height}）`);continue}const u=a.left-o.left,d=a.top-o.top;(u<-.5||d<-.5)&&t.push(`负坐标：${s.dataset.testid}（left=${u.toFixed(1)}, top=${d.toFixed(1)}）`),(a.right-o.right>1||a.bottom-o.bottom>1)&&t.push(`越界：${s.dataset.testid}（超出宿主右/下边界 ${(a.right-o.right).toFixed(1)}/${(a.bottom-o.bottom).toFixed(1)}px）`)}for(let s=0;s<n.length;s+=1)for(let a=s+1;a<n.length;a+=1){const u=n[s].getBoundingClientRect(),d=n[a].getBoundingClientRect();u.left<d.right-1&&d.left<u.right-1&&u.top<d.bottom-1&&d.top<u.bottom-1&&t.push(`元素重叠：${n[s].dataset.testid} 与 ${n[a].dataset.testid}`)}const l=n.reduce((s,a)=>Math.max(s,a.getBoundingClientRect().bottom-o.top),0);return n.length&&e.scrollHeight+1<l&&t.push(`容器未撑开：scrollHeight=${e.scrollHeight} 小于内容底边 ${l.toFixed(1)}`),{problems:Array.from(new Set(t)),checked:r}}const on={name:"颜色",options:[{id:"red",label:"红"},{id:"blue",label:"蓝"}]},ln={name:"尺码",options:[{id:"s",label:"S"},{id:"m",label:"M"},{id:"l",label:"L"}]},sn=[{sku:"red-s",attrValues:{颜色:"red",尺码:"s"},price:199,originalPrice:299,stock:5,quota:2,image:"https://example.com/red-s.jpg"},{sku:"red-m",attrValues:{颜色:"red",尺码:"m"},price:219,stock:3},{sku:"blue-s",attrValues:{颜色:"blue",尺码:"s"},price:209,stock:8},{sku:"blue-m",attrValues:{颜色:"blue",尺码:"m"},price:229,stock:6}],F0=Y([]),H0=Y([Mr({discountText:"限时8折"})]),Q0=Y([ai({purchasedCount:2})]),Bo=()=>new Promise(e=>setTimeout(e,0));async function an(e){const t=document.createElement("div");t.style.cssText="position:fixed;left:0;top:0;width:520px;background:#fff",document.body.appendChild(t);const n=Id(t);return it.flushSync(()=>n.render(e)),await Bo(),{host:t,root:n,q:r=>t.querySelector(r),click:async r=>{const o=t.querySelector(r);if(!o)throw new Error(`找不到元素 ${r}`);it.flushSync(()=>o.click()),await Bo()}}}async function K0(){var r,o,i,l,s,a,u,d,p,m,y,k;const e=[];let t=0;const n=(v,x)=>{t+=1,document.title=`SELFTEST RUNNING ${t}`,x||e.push(v)};{const v=await an(c.jsx(F0,{attributes:[on,ln],variants:sn})),x=v.q('[data-testid="sku-opt-尺码-l"]');n("禁用推导：无变体的尺码 L 初始即置灰",!!x&&x.disabled===!0),n("禁用推导：有变体的尺码 S 可选",((r=v.q('[data-testid="sku-opt-尺码-s"]'))==null?void 0:r.disabled)===!1),await v.click('[data-testid="sku-opt-颜色-blue"]'),n("禁用推导：选蓝后 L 仍置灰（blue-l 不存在）",((o=v.q('[data-testid="sku-opt-尺码-l"]'))==null?void 0:o.disabled)===!0),await v.click('[data-testid="sku-opt-尺码-s"]'),n("选择生效：蓝+S 命中变体 blue-s",((l=(i=v.q('[data-testid="sku-summary-variant"]'))==null?void 0:i.textContent)==null?void 0:l.includes("blue-s"))===!0),n("几何体检：无越界/负坐标/零尺寸/重叠",V0(v.host).problems.length===0),it.flushSync(()=>v.root.unmount()),v.host.remove()}{const v=await an(c.jsx(H0,{attributes:[on,ln],variants:sn,defaultSelection:{颜色:"red",尺码:"s"}}));n("价格联动：渲染价格区",!!v.q('[data-testid="sku-price"]')),n("价格联动：显示变体价 199",((a=(s=v.q('[data-testid="sku-price"]'))==null?void 0:s.textContent)==null?void 0:a.includes("199"))===!0),n("价格联动：原价删除线 299",((d=(u=v.q('[data-testid="sku-price-original"]'))==null?void 0:u.textContent)==null?void 0:d.includes("299"))===!0),it.flushSync(()=>v.root.unmount()),v.host.remove()}{const v=await an(c.jsx(Q0,{attributes:[on,ln],variants:sn,defaultSelection:{颜色:"red",尺码:"s"}}));n("限购校验：渲染限购条",!!v.q('[data-testid="sku-quota"]')),n("限购校验：已购 2 / 限购 2 → canPurchase=false",((p=v.q('[data-testid="sku-quota"]'))==null?void 0:p.getAttribute("data-can-purchase"))==="false"),it.flushSync(()=>v.root.unmount()),v.host.remove()}{let v="";const x=Y([ii({onImageChange:f=>v=f})]),g=await an(c.jsx(x,{attributes:[on,ln],variants:sn,defaultSelection:{颜色:"red",尺码:"s"}}));n("切主图：命中带图变体时回调 onImageChange",v==="https://example.com/red-s.jpg"),n("切主图：自身不渲染 UI（无价格区）",g.q('[data-testid="sku-price"]')===null),it.flushSync(()=>g.root.unmount()),g.host.remove()}{const v=Y([Lr(),di({lowStockThreshold:5}),si(),ci(),ui()]),x=await an(c.jsx(v,{attributes:[on,ln],variants:sn})),g=x.q('[data-testid="sku-price-range"]');n("价格区间：未选全时展示区间",!!g),n("价格区间：含最低价 199 与最高价 229",!!g&&g.textContent.includes("199")&&g.textContent.includes("229")),await x.click('[data-testid="sku-opt-颜色-red"]'),await x.click('[data-testid="sku-opt-尺码-s"]');const f=x.q('[data-testid="sku-stock"]');n("库存状态：命中变体后渲染",!!f),n("库存状态：库存 5 命中低库存阈值",(f==null?void 0:f.getAttribute("data-stock"))==="5");const h=x.q('[data-testid="sku-quantity"]');n("数量步进：上限取 min(库存5, 限购2)=2",(h==null?void 0:h.getAttribute("data-max"))==="2"),n("货号：显示命中变体编码",((y=(m=x.q('[data-testid="sku-code"]'))==null?void 0:m.textContent)==null?void 0:y.includes("red-s"))===!0),n("清空重选：有选择时出现",!!x.q('[data-testid="sku-reset"]')),await x.click('[data-testid="sku-reset"]'),n("清空重选：点击后取消该属性选择",((k=x.q('[data-testid="sku-opt-颜色-red"]'))==null?void 0:k.dataset.selected)==="false"),it.flushSync(()=>x.root.unmount()),x.host.remove()}{const v=Y([li()]),x=await an(c.jsx(v,{attributes:[on,ln],variants:sn}));x.q('[data-testid="sku-opt-颜色-red"]').dispatchEvent(new KeyboardEvent("keydown",{key:"ArrowRight",bubbles:!0})),await Bo();const f=x.q('[data-testid="sku-opt-颜色-blue"]');n("键盘漫游：→ 键移动焦点到同属性下一个选项",document.activeElement===f),n("键盘漫游：移动焦点不等于选中",(f==null?void 0:f.dataset.selected)==="false"),f==null||f.click(),await Bo(),n("键盘漫游：点击（Enter/Space 原生行为）才选中",(f==null?void 0:f.dataset.selected)==="true"),it.flushSync(()=>x.root.unmount()),x.host.remove()}return{total:t,passed:t-e.length,failed:e}}async function W0(){document.title="SELFTEST RUNNING";try{const e=await K0();document.title=e.failed.length===0?`SELFTEST OK ${e.passed}/${e.total}`:`SELFTEST FAIL ${e.passed}/${e.total} :: ${e.failed.join(" | ")}`}catch(e){document.title=`SELFTEST ERROR :: ${e.message}`}}Bi.createRoot(document.getElementById("root")).render(c.jsx(B0,{}));typeof location<"u"&&location.search.includes("selftest=1")&&W0();export{de as A,c0 as C,zl as D,xu as G,Dl as L,Uo as P,jr as R,ae as V,Lr as a,Mr as b,Y as c,di as d,ai as e,si as f,ci as g,ui as h,li as i,c as j,ii as k,J0 as l,G0 as m,V0 as n,Fs as o,Vs as p,S as r};
