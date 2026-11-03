const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ScenariosPage-C7j8jt8g.js","./audit-candidate-d0BA5Px3.js","./selftest-CqMPC3Dp.js"])))=>i.map(i=>d[i]);
var Rf=Object.defineProperty;var Df=(e,n,t)=>n in e?Rf(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var gs=(e,n,t)=>Df(e,typeof n!="symbol"?n+"":n,t);function Lf(e,n){for(var t=0;t<n.length;t++){const r=n[t];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=t(o);fetch(o.href,i)}})();function zf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Zu={exports:{}},Io={},qu={exports:{}},D={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pr=Symbol.for("react.element"),Mf=Symbol.for("react.portal"),If=Symbol.for("react.fragment"),Af=Symbol.for("react.strict_mode"),Bf=Symbol.for("react.profiler"),Ff=Symbol.for("react.provider"),Uf=Symbol.for("react.context"),Wf=Symbol.for("react.forward_ref"),Hf=Symbol.for("react.suspense"),Vf=Symbol.for("react.memo"),Kf=Symbol.for("react.lazy"),ms=Symbol.iterator;function Gf(e){return e===null||typeof e!="object"?null:(e=ms&&e[ms]||e["@@iterator"],typeof e=="function"?e:null)}var ec={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},nc=Object.assign,tc={};function bt(e,n,t){this.props=e,this.context=n,this.refs=tc,this.updater=t||ec}bt.prototype.isReactComponent={};bt.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};bt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function rc(){}rc.prototype=bt.prototype;function Wl(e,n,t){this.props=e,this.context=n,this.refs=tc,this.updater=t||ec}var Hl=Wl.prototype=new rc;Hl.constructor=Wl;nc(Hl,bt.prototype);Hl.isPureReactComponent=!0;var hs=Array.isArray,oc=Object.prototype.hasOwnProperty,Vl={current:null},ic={key:!0,ref:!0,__self:!0,__source:!0};function lc(e,n,t){var r,o={},i=null,l=null;if(n!=null)for(r in n.ref!==void 0&&(l=n.ref),n.key!==void 0&&(i=""+n.key),n)oc.call(n,r)&&!ic.hasOwnProperty(r)&&(o[r]=n[r]);var a=arguments.length-2;if(a===1)o.children=t;else if(1<a){for(var s=Array(a),c=0;c<a;c++)s[c]=arguments[c+2];o.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:Pr,type:e,key:i,ref:l,props:o,_owner:Vl.current}}function Qf(e,n){return{$$typeof:Pr,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Kl(e){return typeof e=="object"&&e!==null&&e.$$typeof===Pr}function Yf(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var ys=/\/+/g;function pi(e,n){return typeof e=="object"&&e!==null&&e.key!=null?Yf(""+e.key):n.toString(36)}function Zr(e,n,t,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Pr:case Mf:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+pi(l,0):r,hs(o)?(t="",e!=null&&(t=e.replace(ys,"$&/")+"/"),Zr(o,n,t,"",function(c){return c})):o!=null&&(Kl(o)&&(o=Qf(o,t+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(ys,"$&/")+"/")+e)),n.push(o)),1;if(l=0,r=r===""?".":r+":",hs(e))for(var a=0;a<e.length;a++){i=e[a];var s=r+pi(i,a);l+=Zr(i,n,t,s,o)}else if(s=Gf(e),typeof s=="function")for(e=s.call(e),a=0;!(i=e.next()).done;)i=i.value,s=r+pi(i,a++),l+=Zr(i,n,t,s,o);else if(i==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return l}function Rr(e,n,t){if(e==null)return e;var r=[],o=0;return Zr(e,r,"","",function(i){return n.call(t,i,o++)}),r}function Xf(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var pe={current:null},qr={transition:null},Jf={ReactCurrentDispatcher:pe,ReactCurrentBatchConfig:qr,ReactCurrentOwner:Vl};function ac(){throw Error("act(...) is not supported in production builds of React.")}D.Children={map:Rr,forEach:function(e,n,t){Rr(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return Rr(e,function(){n++}),n},toArray:function(e){return Rr(e,function(n){return n})||[]},only:function(e){if(!Kl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};D.Component=bt;D.Fragment=If;D.Profiler=Bf;D.PureComponent=Wl;D.StrictMode=Af;D.Suspense=Hf;D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Jf;D.act=ac;D.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=nc({},e.props),o=e.key,i=e.ref,l=e._owner;if(n!=null){if(n.ref!==void 0&&(i=n.ref,l=Vl.current),n.key!==void 0&&(o=""+n.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in n)oc.call(n,s)&&!ic.hasOwnProperty(s)&&(r[s]=n[s]===void 0&&a!==void 0?a[s]:n[s])}var s=arguments.length-2;if(s===1)r.children=t;else if(1<s){a=Array(s);for(var c=0;c<s;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Pr,type:e.type,key:o,ref:i,props:r,_owner:l}};D.createContext=function(e){return e={$$typeof:Uf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Ff,_context:e},e.Consumer=e};D.createElement=lc;D.createFactory=function(e){var n=lc.bind(null,e);return n.type=e,n};D.createRef=function(){return{current:null}};D.forwardRef=function(e){return{$$typeof:Wf,render:e}};D.isValidElement=Kl;D.lazy=function(e){return{$$typeof:Kf,_payload:{_status:-1,_result:e},_init:Xf}};D.memo=function(e,n){return{$$typeof:Vf,type:e,compare:n===void 0?null:n}};D.startTransition=function(e){var n=qr.transition;qr.transition={};try{e()}finally{qr.transition=n}};D.unstable_act=ac;D.useCallback=function(e,n){return pe.current.useCallback(e,n)};D.useContext=function(e){return pe.current.useContext(e)};D.useDebugValue=function(){};D.useDeferredValue=function(e){return pe.current.useDeferredValue(e)};D.useEffect=function(e,n){return pe.current.useEffect(e,n)};D.useId=function(){return pe.current.useId()};D.useImperativeHandle=function(e,n,t){return pe.current.useImperativeHandle(e,n,t)};D.useInsertionEffect=function(e,n){return pe.current.useInsertionEffect(e,n)};D.useLayoutEffect=function(e,n){return pe.current.useLayoutEffect(e,n)};D.useMemo=function(e,n){return pe.current.useMemo(e,n)};D.useReducer=function(e,n,t){return pe.current.useReducer(e,n,t)};D.useRef=function(e){return pe.current.useRef(e)};D.useState=function(e){return pe.current.useState(e)};D.useSyncExternalStore=function(e,n,t){return pe.current.useSyncExternalStore(e,n,t)};D.useTransition=function(){return pe.current.useTransition()};D.version="18.3.1";qu.exports=D;var v=qu.exports;const jt=zf(v),Zf=Lf({__proto__:null,default:jt},[v]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qf=v,ep=Symbol.for("react.element"),np=Symbol.for("react.fragment"),tp=Object.prototype.hasOwnProperty,rp=qf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,op={key:!0,ref:!0,__self:!0,__source:!0};function sc(e,n,t){var r,o={},i=null,l=null;t!==void 0&&(i=""+t),n.key!==void 0&&(i=""+n.key),n.ref!==void 0&&(l=n.ref);for(r in n)tp.call(n,r)&&!op.hasOwnProperty(r)&&(o[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)o[r]===void 0&&(o[r]=n[r]);return{$$typeof:ep,type:e,key:i,ref:l,props:o,_owner:rp.current}}Io.Fragment=np;Io.jsx=sc;Io.jsxs=sc;Zu.exports=Io;var u=Zu.exports,Ui={},uc={exports:{}},je={},cc={exports:{}},dc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(E,N){var O=E.length;E.push(N);e:for(;0<O;){var M=O-1>>>1,U=E[M];if(0<o(U,N))E[M]=N,E[O]=U,O=M;else break e}}function t(E){return E.length===0?null:E[0]}function r(E){if(E.length===0)return null;var N=E[0],O=E.pop();if(O!==N){E[0]=O;e:for(var M=0,U=E.length,Ue=U>>>1;M<Ue;){var ke=2*(M+1)-1,zn=E[ke],Mn=ke+1,Or=E[Mn];if(0>o(zn,O))Mn<U&&0>o(Or,zn)?(E[M]=Or,E[Mn]=O,M=Mn):(E[M]=zn,E[ke]=O,M=ke);else if(Mn<U&&0>o(Or,O))E[M]=Or,E[Mn]=O,M=Mn;else break e}}return N}function o(E,N){var O=E.sortIndex-N.sortIndex;return O!==0?O:E.id-N.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var s=[],c=[],d=1,f=null,h=3,y=!1,x=!1,S=!1,P=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(E){for(var N=t(c);N!==null;){if(N.callback===null)r(c);else if(N.startTime<=E)r(c),N.sortIndex=N.expirationTime,n(s,N);else break;N=t(c)}}function w(E){if(S=!1,m(E),!x)if(t(s)!==null)x=!0,Lt(_);else{var N=t(c);N!==null&&zt(w,N.startTime-E)}}function _(E,N){x=!1,S&&(S=!1,g(T),T=-1),y=!0;var O=h;try{for(m(N),f=t(s);f!==null&&(!(f.expirationTime>N)||E&&!H());){var M=f.callback;if(typeof M=="function"){f.callback=null,h=f.priorityLevel;var U=M(f.expirationTime<=N);N=e.unstable_now(),typeof U=="function"?f.callback=U:f===t(s)&&r(s),m(N)}else r(s);f=t(s)}if(f!==null)var Ue=!0;else{var ke=t(c);ke!==null&&zt(w,ke.startTime-N),Ue=!1}return Ue}finally{f=null,h=O,y=!1}}var b=!1,j=null,T=-1,L=5,R=-1;function H(){return!(e.unstable_now()-R<L)}function Se(){if(j!==null){var E=e.unstable_now();R=E;var N=!0;try{N=j(!0,E)}finally{N?we():(b=!1,j=null)}}else b=!1}var we;if(typeof p=="function")we=function(){p(Se)};else if(typeof MessageChannel<"u"){var an=new MessageChannel,Ln=an.port2;an.port1.onmessage=Se,we=function(){Ln.postMessage(null)}}else we=function(){P(Se,0)};function Lt(E){j=E,b||(b=!0,we())}function zt(E,N){T=P(function(){E(e.unstable_now())},N)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){x||y||(x=!0,Lt(_))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return t(s)},e.unstable_next=function(E){switch(h){case 1:case 2:case 3:var N=3;break;default:N=h}var O=h;h=N;try{return E()}finally{h=O}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,N){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var O=h;h=E;try{return N()}finally{h=O}},e.unstable_scheduleCallback=function(E,N,O){var M=e.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?M+O:M):O=M,E){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=O+U,E={id:d++,callback:N,priorityLevel:E,startTime:O,expirationTime:U,sortIndex:-1},O>M?(E.sortIndex=O,n(c,E),t(s)===null&&E===t(c)&&(S?(g(T),T=-1):S=!0,zt(w,O-M))):(E.sortIndex=U,n(s,E),x||y||(x=!0,Lt(_))),E},e.unstable_shouldYield=H,e.unstable_wrapCallback=function(E){var N=h;return function(){var O=h;h=N;try{return E.apply(this,arguments)}finally{h=O}}}})(dc);cc.exports=dc;var ip=cc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lp=v,be=ip;function C(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var fc=new Set,ir={};function Xn(e,n){xt(e,n),xt(e+"Capture",n)}function xt(e,n){for(ir[e]=n,e=0;e<n.length;e++)fc.add(n[e])}var en=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Wi=Object.prototype.hasOwnProperty,ap=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,vs={},xs={};function sp(e){return Wi.call(xs,e)?!0:Wi.call(vs,e)?!1:ap.test(e)?xs[e]=!0:(vs[e]=!0,!1)}function up(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function cp(e,n,t,r){if(n===null||typeof n>"u"||up(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function ge(e,n,t,r,o,i,l){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=i,this.removeEmptyString=l}var ie={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ie[e]=new ge(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];ie[n]=new ge(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ie[e]=new ge(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ie[e]=new ge(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ie[e]=new ge(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ie[e]=new ge(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ie[e]=new ge(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ie[e]=new ge(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ie[e]=new ge(e,5,!1,e.toLowerCase(),null,!1,!1)});var Gl=/[\-:]([a-z])/g;function Ql(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Gl,Ql);ie[n]=new ge(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Gl,Ql);ie[n]=new ge(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Gl,Ql);ie[n]=new ge(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ie[e]=new ge(e,1,!1,e.toLowerCase(),null,!1,!1)});ie.xlinkHref=new ge("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ie[e]=new ge(e,1,!1,e.toLowerCase(),null,!0,!0)});function Yl(e,n,t,r){var o=ie.hasOwnProperty(n)?ie[n]:null;(o!==null?o.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(cp(n,t,o,r)&&(t=null),r||o===null?sp(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):o.mustUseProperty?e[o.propertyName]=t===null?o.type===3?!1:"":t:(n=o.attributeName,r=o.attributeNamespace,t===null?e.removeAttribute(n):(o=o.type,t=o===3||o===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var on=lp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Dr=Symbol.for("react.element"),nt=Symbol.for("react.portal"),tt=Symbol.for("react.fragment"),Xl=Symbol.for("react.strict_mode"),Hi=Symbol.for("react.profiler"),pc=Symbol.for("react.provider"),gc=Symbol.for("react.context"),Jl=Symbol.for("react.forward_ref"),Vi=Symbol.for("react.suspense"),Ki=Symbol.for("react.suspense_list"),Zl=Symbol.for("react.memo"),un=Symbol.for("react.lazy"),mc=Symbol.for("react.offscreen"),Ss=Symbol.iterator;function Mt(e){return e===null||typeof e!="object"?null:(e=Ss&&e[Ss]||e["@@iterator"],typeof e=="function"?e:null)}var Q=Object.assign,gi;function Vt(e){if(gi===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);gi=n&&n[1]||""}return`
`+gi+e}var mi=!1;function hi(e,n){if(!e||mi)return"";mi=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(c){var r=c}Reflect.construct(e,[],n)}else{try{n.call()}catch(c){r=c}e.call(n.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,a=i.length-1;1<=l&&0<=a&&o[l]!==i[a];)a--;for(;1<=l&&0<=a;l--,a--)if(o[l]!==i[a]){if(l!==1||a!==1)do if(l--,a--,0>a||o[l]!==i[a]){var s=`
`+o[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=a);break}}}finally{mi=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Vt(e):""}function dp(e){switch(e.tag){case 5:return Vt(e.type);case 16:return Vt("Lazy");case 13:return Vt("Suspense");case 19:return Vt("SuspenseList");case 0:case 2:case 15:return e=hi(e.type,!1),e;case 11:return e=hi(e.type.render,!1),e;case 1:return e=hi(e.type,!0),e;default:return""}}function Gi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case tt:return"Fragment";case nt:return"Portal";case Hi:return"Profiler";case Xl:return"StrictMode";case Vi:return"Suspense";case Ki:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case gc:return(e.displayName||"Context")+".Consumer";case pc:return(e._context.displayName||"Context")+".Provider";case Jl:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Zl:return n=e.displayName||null,n!==null?n:Gi(e.type)||"Memo";case un:n=e._payload,e=e._init;try{return Gi(e(n))}catch{}}return null}function fp(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Gi(n);case 8:return n===Xl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function bn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function hc(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function pp(e){var n=hc(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var o=t.get,i=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Lr(e){e._valueTracker||(e._valueTracker=pp(e))}function yc(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=hc(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function co(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Qi(e,n){var t=n.checked;return Q({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function ws(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=bn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function vc(e,n){n=n.checked,n!=null&&Yl(e,"checked",n,!1)}function Yi(e,n){vc(e,n);var t=bn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Xi(e,n.type,t):n.hasOwnProperty("defaultValue")&&Xi(e,n.type,bn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function ks(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Xi(e,n,t){(n!=="number"||co(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Kt=Array.isArray;function pt(e,n,t,r){if(e=e.options,n){n={};for(var o=0;o<t.length;o++)n["$"+t[o]]=!0;for(t=0;t<e.length;t++)o=n.hasOwnProperty("$"+e[t].value),e[t].selected!==o&&(e[t].selected=o),o&&r&&(e[t].defaultSelected=!0)}else{for(t=""+bn(t),n=null,o=0;o<e.length;o++){if(e[o].value===t){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}n!==null||e[o].disabled||(n=e[o])}n!==null&&(n.selected=!0)}}function Ji(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(C(91));return Q({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Cs(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(C(92));if(Kt(t)){if(1<t.length)throw Error(C(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:bn(t)}}function xc(e,n){var t=bn(n.value),r=bn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function Ps(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Sc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Zi(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Sc(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var zr,wc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,o){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,o)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(zr=zr||document.createElement("div"),zr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=zr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function lr(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Xt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},gp=["Webkit","ms","Moz","O"];Object.keys(Xt).forEach(function(e){gp.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Xt[n]=Xt[e]})});function kc(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Xt.hasOwnProperty(e)&&Xt[e]?(""+n).trim():n+"px"}function Cc(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,o=kc(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,o):e[t]=o}}var mp=Q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qi(e,n){if(n){if(mp[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(C(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(C(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(C(61))}if(n.style!=null&&typeof n.style!="object")throw Error(C(62))}}function el(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var nl=null;function ql(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var tl=null,gt=null,mt=null;function _s(e){if(e=jr(e)){if(typeof tl!="function")throw Error(C(280));var n=e.stateNode;n&&(n=Wo(n),tl(e.stateNode,e.type,n))}}function Pc(e){gt?mt?mt.push(e):mt=[e]:gt=e}function _c(){if(gt){var e=gt,n=mt;if(mt=gt=null,_s(e),n)for(e=0;e<n.length;e++)_s(n[e])}}function bc(e,n){return e(n)}function jc(){}var yi=!1;function Ec(e,n,t){if(yi)return e(n,t);yi=!0;try{return bc(e,n,t)}finally{yi=!1,(gt!==null||mt!==null)&&(jc(),_c())}}function ar(e,n){var t=e.stateNode;if(t===null)return null;var r=Wo(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(C(231,n,typeof t));return t}var rl=!1;if(en)try{var It={};Object.defineProperty(It,"passive",{get:function(){rl=!0}}),window.addEventListener("test",It,It),window.removeEventListener("test",It,It)}catch{rl=!1}function hp(e,n,t,r,o,i,l,a,s){var c=Array.prototype.slice.call(arguments,3);try{n.apply(t,c)}catch(d){this.onError(d)}}var Jt=!1,fo=null,po=!1,ol=null,yp={onError:function(e){Jt=!0,fo=e}};function vp(e,n,t,r,o,i,l,a,s){Jt=!1,fo=null,hp.apply(yp,arguments)}function xp(e,n,t,r,o,i,l,a,s){if(vp.apply(this,arguments),Jt){if(Jt){var c=fo;Jt=!1,fo=null}else throw Error(C(198));po||(po=!0,ol=c)}}function Jn(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function $c(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function bs(e){if(Jn(e)!==e)throw Error(C(188))}function Sp(e){var n=e.alternate;if(!n){if(n=Jn(e),n===null)throw Error(C(188));return n!==e?null:e}for(var t=e,r=n;;){var o=t.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){t=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===t)return bs(o),e;if(i===r)return bs(o),n;i=i.sibling}throw Error(C(188))}if(t.return!==r.return)t=o,r=i;else{for(var l=!1,a=o.child;a;){if(a===t){l=!0,t=o,r=i;break}if(a===r){l=!0,r=o,t=i;break}a=a.sibling}if(!l){for(a=i.child;a;){if(a===t){l=!0,t=i,r=o;break}if(a===r){l=!0,r=i,t=o;break}a=a.sibling}if(!l)throw Error(C(189))}}if(t.alternate!==r)throw Error(C(190))}if(t.tag!==3)throw Error(C(188));return t.stateNode.current===t?e:n}function Tc(e){return e=Sp(e),e!==null?Nc(e):null}function Nc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Nc(e);if(n!==null)return n;e=e.sibling}return null}var Oc=be.unstable_scheduleCallback,js=be.unstable_cancelCallback,wp=be.unstable_shouldYield,kp=be.unstable_requestPaint,X=be.unstable_now,Cp=be.unstable_getCurrentPriorityLevel,ea=be.unstable_ImmediatePriority,Rc=be.unstable_UserBlockingPriority,go=be.unstable_NormalPriority,Pp=be.unstable_LowPriority,Dc=be.unstable_IdlePriority,Ao=null,Ke=null;function _p(e){if(Ke&&typeof Ke.onCommitFiberRoot=="function")try{Ke.onCommitFiberRoot(Ao,e,void 0,(e.current.flags&128)===128)}catch{}}var Ae=Math.clz32?Math.clz32:Ep,bp=Math.log,jp=Math.LN2;function Ep(e){return e>>>=0,e===0?32:31-(bp(e)/jp|0)|0}var Mr=64,Ir=4194304;function Gt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function mo(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=t&268435455;if(l!==0){var a=l&~o;a!==0?r=Gt(a):(i&=l,i!==0&&(r=Gt(i)))}else l=t&~o,l!==0?r=Gt(l):i!==0&&(r=Gt(i));if(r===0)return 0;if(n!==0&&n!==r&&!(n&o)&&(o=r&-r,i=n&-n,o>=i||o===16&&(i&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-Ae(n),o=1<<t,r|=e[t],n&=~o;return r}function $p(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Tp(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-Ae(i),a=1<<l,s=o[l];s===-1?(!(a&t)||a&r)&&(o[l]=$p(a,n)):s<=n&&(e.expiredLanes|=a),i&=~a}}function il(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Lc(){var e=Mr;return Mr<<=1,!(Mr&4194240)&&(Mr=64),e}function vi(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function _r(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Ae(n),e[n]=t}function Np(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var o=31-Ae(t),i=1<<o;n[o]=0,r[o]=-1,e[o]=-1,t&=~i}}function na(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-Ae(t),o=1<<r;o&n|e[r]&n&&(e[r]|=n),t&=~o}}var I=0;function zc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Mc,ta,Ic,Ac,Bc,ll=!1,Ar=[],yn=null,vn=null,xn=null,sr=new Map,ur=new Map,dn=[],Op="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Es(e,n){switch(e){case"focusin":case"focusout":yn=null;break;case"dragenter":case"dragleave":vn=null;break;case"mouseover":case"mouseout":xn=null;break;case"pointerover":case"pointerout":sr.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ur.delete(n.pointerId)}}function At(e,n,t,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},n!==null&&(n=jr(n),n!==null&&ta(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,o!==null&&n.indexOf(o)===-1&&n.push(o),e)}function Rp(e,n,t,r,o){switch(n){case"focusin":return yn=At(yn,e,n,t,r,o),!0;case"dragenter":return vn=At(vn,e,n,t,r,o),!0;case"mouseover":return xn=At(xn,e,n,t,r,o),!0;case"pointerover":var i=o.pointerId;return sr.set(i,At(sr.get(i)||null,e,n,t,r,o)),!0;case"gotpointercapture":return i=o.pointerId,ur.set(i,At(ur.get(i)||null,e,n,t,r,o)),!0}return!1}function Fc(e){var n=Bn(e.target);if(n!==null){var t=Jn(n);if(t!==null){if(n=t.tag,n===13){if(n=$c(t),n!==null){e.blockedOn=n,Bc(e.priority,function(){Ic(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function eo(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=al(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);nl=r,t.target.dispatchEvent(r),nl=null}else return n=jr(t),n!==null&&ta(n),e.blockedOn=t,!1;n.shift()}return!0}function $s(e,n,t){eo(e)&&t.delete(n)}function Dp(){ll=!1,yn!==null&&eo(yn)&&(yn=null),vn!==null&&eo(vn)&&(vn=null),xn!==null&&eo(xn)&&(xn=null),sr.forEach($s),ur.forEach($s)}function Bt(e,n){e.blockedOn===n&&(e.blockedOn=null,ll||(ll=!0,be.unstable_scheduleCallback(be.unstable_NormalPriority,Dp)))}function cr(e){function n(o){return Bt(o,e)}if(0<Ar.length){Bt(Ar[0],e);for(var t=1;t<Ar.length;t++){var r=Ar[t];r.blockedOn===e&&(r.blockedOn=null)}}for(yn!==null&&Bt(yn,e),vn!==null&&Bt(vn,e),xn!==null&&Bt(xn,e),sr.forEach(n),ur.forEach(n),t=0;t<dn.length;t++)r=dn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<dn.length&&(t=dn[0],t.blockedOn===null);)Fc(t),t.blockedOn===null&&dn.shift()}var ht=on.ReactCurrentBatchConfig,ho=!0;function Lp(e,n,t,r){var o=I,i=ht.transition;ht.transition=null;try{I=1,ra(e,n,t,r)}finally{I=o,ht.transition=i}}function zp(e,n,t,r){var o=I,i=ht.transition;ht.transition=null;try{I=4,ra(e,n,t,r)}finally{I=o,ht.transition=i}}function ra(e,n,t,r){if(ho){var o=al(e,n,t,r);if(o===null)Ei(e,n,r,yo,t),Es(e,r);else if(Rp(o,e,n,t,r))r.stopPropagation();else if(Es(e,r),n&4&&-1<Op.indexOf(e)){for(;o!==null;){var i=jr(o);if(i!==null&&Mc(i),i=al(e,n,t,r),i===null&&Ei(e,n,r,yo,t),i===o)break;o=i}o!==null&&r.stopPropagation()}else Ei(e,n,r,null,t)}}var yo=null;function al(e,n,t,r){if(yo=null,e=ql(r),e=Bn(e),e!==null)if(n=Jn(e),n===null)e=null;else if(t=n.tag,t===13){if(e=$c(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return yo=e,null}function Uc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Cp()){case ea:return 1;case Rc:return 4;case go:case Pp:return 16;case Dc:return 536870912;default:return 16}default:return 16}}var pn=null,oa=null,no=null;function Wc(){if(no)return no;var e,n=oa,t=n.length,r,o="value"in pn?pn.value:pn.textContent,i=o.length;for(e=0;e<t&&n[e]===o[e];e++);var l=t-e;for(r=1;r<=l&&n[t-r]===o[i-r];r++);return no=o.slice(e,1<r?1-r:void 0)}function to(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Br(){return!0}function Ts(){return!1}function Ee(e){function n(t,r,o,i,l){this._reactName=t,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Br:Ts,this.isPropagationStopped=Ts,this}return Q(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Br)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Br)},persist:function(){},isPersistent:Br}),n}var Et={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ia=Ee(Et),br=Q({},Et,{view:0,detail:0}),Mp=Ee(br),xi,Si,Ft,Bo=Q({},br,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:la,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ft&&(Ft&&e.type==="mousemove"?(xi=e.screenX-Ft.screenX,Si=e.screenY-Ft.screenY):Si=xi=0,Ft=e),xi)},movementY:function(e){return"movementY"in e?e.movementY:Si}}),Ns=Ee(Bo),Ip=Q({},Bo,{dataTransfer:0}),Ap=Ee(Ip),Bp=Q({},br,{relatedTarget:0}),wi=Ee(Bp),Fp=Q({},Et,{animationName:0,elapsedTime:0,pseudoElement:0}),Up=Ee(Fp),Wp=Q({},Et,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Hp=Ee(Wp),Vp=Q({},Et,{data:0}),Os=Ee(Vp),Kp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Gp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Qp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Yp(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Qp[e])?!!n[e]:!1}function la(){return Yp}var Xp=Q({},br,{key:function(e){if(e.key){var n=Kp[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=to(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Gp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:la,charCode:function(e){return e.type==="keypress"?to(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?to(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Jp=Ee(Xp),Zp=Q({},Bo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Rs=Ee(Zp),qp=Q({},br,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:la}),eg=Ee(qp),ng=Q({},Et,{propertyName:0,elapsedTime:0,pseudoElement:0}),tg=Ee(ng),rg=Q({},Bo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),og=Ee(rg),ig=[9,13,27,32],aa=en&&"CompositionEvent"in window,Zt=null;en&&"documentMode"in document&&(Zt=document.documentMode);var lg=en&&"TextEvent"in window&&!Zt,Hc=en&&(!aa||Zt&&8<Zt&&11>=Zt),Ds=" ",Ls=!1;function Vc(e,n){switch(e){case"keyup":return ig.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Kc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var rt=!1;function ag(e,n){switch(e){case"compositionend":return Kc(n);case"keypress":return n.which!==32?null:(Ls=!0,Ds);case"textInput":return e=n.data,e===Ds&&Ls?null:e;default:return null}}function sg(e,n){if(rt)return e==="compositionend"||!aa&&Vc(e,n)?(e=Wc(),no=oa=pn=null,rt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Hc&&n.locale!=="ko"?null:n.data;default:return null}}var ug={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zs(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!ug[e.type]:n==="textarea"}function Gc(e,n,t,r){Pc(r),n=vo(n,"onChange"),0<n.length&&(t=new ia("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var qt=null,dr=null;function cg(e){od(e,0)}function Fo(e){var n=lt(e);if(yc(n))return e}function dg(e,n){if(e==="change")return n}var Qc=!1;if(en){var ki;if(en){var Ci="oninput"in document;if(!Ci){var Ms=document.createElement("div");Ms.setAttribute("oninput","return;"),Ci=typeof Ms.oninput=="function"}ki=Ci}else ki=!1;Qc=ki&&(!document.documentMode||9<document.documentMode)}function Is(){qt&&(qt.detachEvent("onpropertychange",Yc),dr=qt=null)}function Yc(e){if(e.propertyName==="value"&&Fo(dr)){var n=[];Gc(n,dr,e,ql(e)),Ec(cg,n)}}function fg(e,n,t){e==="focusin"?(Is(),qt=n,dr=t,qt.attachEvent("onpropertychange",Yc)):e==="focusout"&&Is()}function pg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Fo(dr)}function gg(e,n){if(e==="click")return Fo(n)}function mg(e,n){if(e==="input"||e==="change")return Fo(n)}function hg(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Fe=typeof Object.is=="function"?Object.is:hg;function fr(e,n){if(Fe(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var o=t[r];if(!Wi.call(n,o)||!Fe(e[o],n[o]))return!1}return!0}function As(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Bs(e,n){var t=As(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=As(t)}}function Xc(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Xc(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Jc(){for(var e=window,n=co();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=co(e.document)}return n}function sa(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function yg(e){var n=Jc(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Xc(t.ownerDocument.documentElement,t)){if(r!==null&&sa(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var o=t.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Bs(t,i);var l=Bs(t,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(n=n.createRange(),n.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(n),e.extend(l.node,l.offset)):(n.setEnd(l.node,l.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var vg=en&&"documentMode"in document&&11>=document.documentMode,ot=null,sl=null,er=null,ul=!1;function Fs(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;ul||ot==null||ot!==co(r)||(r=ot,"selectionStart"in r&&sa(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),er&&fr(er,r)||(er=r,r=vo(sl,"onSelect"),0<r.length&&(n=new ia("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=ot)))}function Fr(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var it={animationend:Fr("Animation","AnimationEnd"),animationiteration:Fr("Animation","AnimationIteration"),animationstart:Fr("Animation","AnimationStart"),transitionend:Fr("Transition","TransitionEnd")},Pi={},Zc={};en&&(Zc=document.createElement("div").style,"AnimationEvent"in window||(delete it.animationend.animation,delete it.animationiteration.animation,delete it.animationstart.animation),"TransitionEvent"in window||delete it.transitionend.transition);function Uo(e){if(Pi[e])return Pi[e];if(!it[e])return e;var n=it[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Zc)return Pi[e]=n[t];return e}var qc=Uo("animationend"),ed=Uo("animationiteration"),nd=Uo("animationstart"),td=Uo("transitionend"),rd=new Map,Us="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function En(e,n){rd.set(e,n),Xn(n,[e])}for(var _i=0;_i<Us.length;_i++){var bi=Us[_i],xg=bi.toLowerCase(),Sg=bi[0].toUpperCase()+bi.slice(1);En(xg,"on"+Sg)}En(qc,"onAnimationEnd");En(ed,"onAnimationIteration");En(nd,"onAnimationStart");En("dblclick","onDoubleClick");En("focusin","onFocus");En("focusout","onBlur");En(td,"onTransitionEnd");xt("onMouseEnter",["mouseout","mouseover"]);xt("onMouseLeave",["mouseout","mouseover"]);xt("onPointerEnter",["pointerout","pointerover"]);xt("onPointerLeave",["pointerout","pointerover"]);Xn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Xn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Xn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Xn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Xn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Xn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wg=new Set("cancel close invalid load scroll toggle".split(" ").concat(Qt));function Ws(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,xp(r,n,void 0,e),e.currentTarget=null}function od(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],o=r.event;r=r.listeners;e:{var i=void 0;if(n)for(var l=r.length-1;0<=l;l--){var a=r[l],s=a.instance,c=a.currentTarget;if(a=a.listener,s!==i&&o.isPropagationStopped())break e;Ws(o,a,c),i=s}else for(l=0;l<r.length;l++){if(a=r[l],s=a.instance,c=a.currentTarget,a=a.listener,s!==i&&o.isPropagationStopped())break e;Ws(o,a,c),i=s}}}if(po)throw e=ol,po=!1,ol=null,e}function B(e,n){var t=n[gl];t===void 0&&(t=n[gl]=new Set);var r=e+"__bubble";t.has(r)||(id(n,e,2,!1),t.add(r))}function ji(e,n,t){var r=0;n&&(r|=4),id(t,e,r,n)}var Ur="_reactListening"+Math.random().toString(36).slice(2);function pr(e){if(!e[Ur]){e[Ur]=!0,fc.forEach(function(t){t!=="selectionchange"&&(wg.has(t)||ji(t,!1,e),ji(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Ur]||(n[Ur]=!0,ji("selectionchange",!1,n))}}function id(e,n,t,r){switch(Uc(n)){case 1:var o=Lp;break;case 4:o=zp;break;default:o=ra}t=o.bind(null,n,t,e),o=void 0,!rl||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(n,t,{capture:!0,passive:o}):e.addEventListener(n,t,!0):o!==void 0?e.addEventListener(n,t,{passive:o}):e.addEventListener(n,t,!1)}function Ei(e,n,t,r,o){var i=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;l=l.return}for(;a!==null;){if(l=Bn(a),l===null)return;if(s=l.tag,s===5||s===6){r=i=l;continue e}a=a.parentNode}}r=r.return}Ec(function(){var c=i,d=ql(t),f=[];e:{var h=rd.get(e);if(h!==void 0){var y=ia,x=e;switch(e){case"keypress":if(to(t)===0)break e;case"keydown":case"keyup":y=Jp;break;case"focusin":x="focus",y=wi;break;case"focusout":x="blur",y=wi;break;case"beforeblur":case"afterblur":y=wi;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Ns;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Ap;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=eg;break;case qc:case ed:case nd:y=Up;break;case td:y=tg;break;case"scroll":y=Mp;break;case"wheel":y=og;break;case"copy":case"cut":case"paste":y=Hp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Rs}var S=(n&4)!==0,P=!S&&e==="scroll",g=S?h!==null?h+"Capture":null:h;S=[];for(var p=c,m;p!==null;){m=p;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,g!==null&&(w=ar(p,g),w!=null&&S.push(gr(p,w,m)))),P)break;p=p.return}0<S.length&&(h=new y(h,x,null,t,d),f.push({event:h,listeners:S}))}}if(!(n&7)){e:{if(h=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",h&&t!==nl&&(x=t.relatedTarget||t.fromElement)&&(Bn(x)||x[nn]))break e;if((y||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,y?(x=t.relatedTarget||t.toElement,y=c,x=x?Bn(x):null,x!==null&&(P=Jn(x),x!==P||x.tag!==5&&x.tag!==6)&&(x=null)):(y=null,x=c),y!==x)){if(S=Ns,w="onMouseLeave",g="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(S=Rs,w="onPointerLeave",g="onPointerEnter",p="pointer"),P=y==null?h:lt(y),m=x==null?h:lt(x),h=new S(w,p+"leave",y,t,d),h.target=P,h.relatedTarget=m,w=null,Bn(d)===c&&(S=new S(g,p+"enter",x,t,d),S.target=m,S.relatedTarget=P,w=S),P=w,y&&x)n:{for(S=y,g=x,p=0,m=S;m;m=et(m))p++;for(m=0,w=g;w;w=et(w))m++;for(;0<p-m;)S=et(S),p--;for(;0<m-p;)g=et(g),m--;for(;p--;){if(S===g||g!==null&&S===g.alternate)break n;S=et(S),g=et(g)}S=null}else S=null;y!==null&&Hs(f,h,y,S,!1),x!==null&&P!==null&&Hs(f,P,x,S,!0)}}e:{if(h=c?lt(c):window,y=h.nodeName&&h.nodeName.toLowerCase(),y==="select"||y==="input"&&h.type==="file")var _=dg;else if(zs(h))if(Qc)_=mg;else{_=pg;var b=fg}else(y=h.nodeName)&&y.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(_=gg);if(_&&(_=_(e,c))){Gc(f,_,t,d);break e}b&&b(e,h,c),e==="focusout"&&(b=h._wrapperState)&&b.controlled&&h.type==="number"&&Xi(h,"number",h.value)}switch(b=c?lt(c):window,e){case"focusin":(zs(b)||b.contentEditable==="true")&&(ot=b,sl=c,er=null);break;case"focusout":er=sl=ot=null;break;case"mousedown":ul=!0;break;case"contextmenu":case"mouseup":case"dragend":ul=!1,Fs(f,t,d);break;case"selectionchange":if(vg)break;case"keydown":case"keyup":Fs(f,t,d)}var j;if(aa)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else rt?Vc(e,t)&&(T="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(T="onCompositionStart");T&&(Hc&&t.locale!=="ko"&&(rt||T!=="onCompositionStart"?T==="onCompositionEnd"&&rt&&(j=Wc()):(pn=d,oa="value"in pn?pn.value:pn.textContent,rt=!0)),b=vo(c,T),0<b.length&&(T=new Os(T,e,null,t,d),f.push({event:T,listeners:b}),j?T.data=j:(j=Kc(t),j!==null&&(T.data=j)))),(j=lg?ag(e,t):sg(e,t))&&(c=vo(c,"onBeforeInput"),0<c.length&&(d=new Os("onBeforeInput","beforeinput",null,t,d),f.push({event:d,listeners:c}),d.data=j))}od(f,n)})}function gr(e,n,t){return{instance:e,listener:n,currentTarget:t}}function vo(e,n){for(var t=n+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=ar(e,t),i!=null&&r.unshift(gr(e,i,o)),i=ar(e,n),i!=null&&r.push(gr(e,i,o))),e=e.return}return r}function et(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Hs(e,n,t,r,o){for(var i=n._reactName,l=[];t!==null&&t!==r;){var a=t,s=a.alternate,c=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&c!==null&&(a=c,o?(s=ar(t,i),s!=null&&l.unshift(gr(t,s,a))):o||(s=ar(t,i),s!=null&&l.push(gr(t,s,a)))),t=t.return}l.length!==0&&e.push({event:n,listeners:l})}var kg=/\r\n?/g,Cg=/\u0000|\uFFFD/g;function Vs(e){return(typeof e=="string"?e:""+e).replace(kg,`
`).replace(Cg,"")}function Wr(e,n,t){if(n=Vs(n),Vs(e)!==n&&t)throw Error(C(425))}function xo(){}var cl=null,dl=null;function fl(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var pl=typeof setTimeout=="function"?setTimeout:void 0,Pg=typeof clearTimeout=="function"?clearTimeout:void 0,Ks=typeof Promise=="function"?Promise:void 0,_g=typeof queueMicrotask=="function"?queueMicrotask:typeof Ks<"u"?function(e){return Ks.resolve(null).then(e).catch(bg)}:pl;function bg(e){setTimeout(function(){throw e})}function $i(e,n){var t=n,r=0;do{var o=t.nextSibling;if(e.removeChild(t),o&&o.nodeType===8)if(t=o.data,t==="/$"){if(r===0){e.removeChild(o),cr(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=o}while(t);cr(n)}function Sn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Gs(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var $t=Math.random().toString(36).slice(2),Ve="__reactFiber$"+$t,mr="__reactProps$"+$t,nn="__reactContainer$"+$t,gl="__reactEvents$"+$t,jg="__reactListeners$"+$t,Eg="__reactHandles$"+$t;function Bn(e){var n=e[Ve];if(n)return n;for(var t=e.parentNode;t;){if(n=t[nn]||t[Ve]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Gs(e);e!==null;){if(t=e[Ve])return t;e=Gs(e)}return n}e=t,t=e.parentNode}return null}function jr(e){return e=e[Ve]||e[nn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function lt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(C(33))}function Wo(e){return e[mr]||null}var ml=[],at=-1;function $n(e){return{current:e}}function F(e){0>at||(e.current=ml[at],ml[at]=null,at--)}function A(e,n){at++,ml[at]=e.current,e.current=n}var jn={},ce=$n(jn),ye=$n(!1),Vn=jn;function St(e,n){var t=e.type.contextTypes;if(!t)return jn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in t)o[i]=n[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=o),o}function ve(e){return e=e.childContextTypes,e!=null}function So(){F(ye),F(ce)}function Qs(e,n,t){if(ce.current!==jn)throw Error(C(168));A(ce,n),A(ye,t)}function ld(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var o in r)if(!(o in n))throw Error(C(108,fp(e)||"Unknown",o));return Q({},t,r)}function wo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||jn,Vn=ce.current,A(ce,e),A(ye,ye.current),!0}function Ys(e,n,t){var r=e.stateNode;if(!r)throw Error(C(169));t?(e=ld(e,n,Vn),r.__reactInternalMemoizedMergedChildContext=e,F(ye),F(ce),A(ce,e)):F(ye),A(ye,t)}var Xe=null,Ho=!1,Ti=!1;function ad(e){Xe===null?Xe=[e]:Xe.push(e)}function $g(e){Ho=!0,ad(e)}function Tn(){if(!Ti&&Xe!==null){Ti=!0;var e=0,n=I;try{var t=Xe;for(I=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}Xe=null,Ho=!1}catch(o){throw Xe!==null&&(Xe=Xe.slice(e+1)),Oc(ea,Tn),o}finally{I=n,Ti=!1}}return null}var st=[],ut=0,ko=null,Co=0,$e=[],Te=0,Kn=null,Je=1,Ze="";function In(e,n){st[ut++]=Co,st[ut++]=ko,ko=e,Co=n}function sd(e,n,t){$e[Te++]=Je,$e[Te++]=Ze,$e[Te++]=Kn,Kn=e;var r=Je;e=Ze;var o=32-Ae(r)-1;r&=~(1<<o),t+=1;var i=32-Ae(n)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,Je=1<<32-Ae(n)+o|t<<o|r,Ze=i+e}else Je=1<<i|t<<o|r,Ze=e}function ua(e){e.return!==null&&(In(e,1),sd(e,1,0))}function ca(e){for(;e===ko;)ko=st[--ut],st[ut]=null,Co=st[--ut],st[ut]=null;for(;e===Kn;)Kn=$e[--Te],$e[Te]=null,Ze=$e[--Te],$e[Te]=null,Je=$e[--Te],$e[Te]=null}var _e=null,Pe=null,W=!1,Ie=null;function ud(e,n){var t=Ne(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Xs(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,_e=e,Pe=Sn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,_e=e,Pe=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Kn!==null?{id:Je,overflow:Ze}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Ne(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,_e=e,Pe=null,!0):!1;default:return!1}}function hl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function yl(e){if(W){var n=Pe;if(n){var t=n;if(!Xs(e,n)){if(hl(e))throw Error(C(418));n=Sn(t.nextSibling);var r=_e;n&&Xs(e,n)?ud(r,t):(e.flags=e.flags&-4097|2,W=!1,_e=e)}}else{if(hl(e))throw Error(C(418));e.flags=e.flags&-4097|2,W=!1,_e=e}}}function Js(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;_e=e}function Hr(e){if(e!==_e)return!1;if(!W)return Js(e),W=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!fl(e.type,e.memoizedProps)),n&&(n=Pe)){if(hl(e))throw cd(),Error(C(418));for(;n;)ud(e,n),n=Sn(n.nextSibling)}if(Js(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(C(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Pe=Sn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Pe=null}}else Pe=_e?Sn(e.stateNode.nextSibling):null;return!0}function cd(){for(var e=Pe;e;)e=Sn(e.nextSibling)}function wt(){Pe=_e=null,W=!1}function da(e){Ie===null?Ie=[e]:Ie.push(e)}var Tg=on.ReactCurrentBatchConfig;function Ut(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(C(309));var r=t.stateNode}if(!r)throw Error(C(147,e));var o=r,i=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===i?n.ref:(n=function(l){var a=o.refs;l===null?delete a[i]:a[i]=l},n._stringRef=i,n)}if(typeof e!="string")throw Error(C(284));if(!t._owner)throw Error(C(290,e))}return e}function Vr(e,n){throw e=Object.prototype.toString.call(n),Error(C(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Zs(e){var n=e._init;return n(e._payload)}function dd(e){function n(g,p){if(e){var m=g.deletions;m===null?(g.deletions=[p],g.flags|=16):m.push(p)}}function t(g,p){if(!e)return null;for(;p!==null;)n(g,p),p=p.sibling;return null}function r(g,p){for(g=new Map;p!==null;)p.key!==null?g.set(p.key,p):g.set(p.index,p),p=p.sibling;return g}function o(g,p){return g=Pn(g,p),g.index=0,g.sibling=null,g}function i(g,p,m){return g.index=m,e?(m=g.alternate,m!==null?(m=m.index,m<p?(g.flags|=2,p):m):(g.flags|=2,p)):(g.flags|=1048576,p)}function l(g){return e&&g.alternate===null&&(g.flags|=2),g}function a(g,p,m,w){return p===null||p.tag!==6?(p=Mi(m,g.mode,w),p.return=g,p):(p=o(p,m),p.return=g,p)}function s(g,p,m,w){var _=m.type;return _===tt?d(g,p,m.props.children,w,m.key):p!==null&&(p.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===un&&Zs(_)===p.type)?(w=o(p,m.props),w.ref=Ut(g,p,m),w.return=g,w):(w=uo(m.type,m.key,m.props,null,g.mode,w),w.ref=Ut(g,p,m),w.return=g,w)}function c(g,p,m,w){return p===null||p.tag!==4||p.stateNode.containerInfo!==m.containerInfo||p.stateNode.implementation!==m.implementation?(p=Ii(m,g.mode,w),p.return=g,p):(p=o(p,m.children||[]),p.return=g,p)}function d(g,p,m,w,_){return p===null||p.tag!==7?(p=Hn(m,g.mode,w,_),p.return=g,p):(p=o(p,m),p.return=g,p)}function f(g,p,m){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Mi(""+p,g.mode,m),p.return=g,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Dr:return m=uo(p.type,p.key,p.props,null,g.mode,m),m.ref=Ut(g,null,p),m.return=g,m;case nt:return p=Ii(p,g.mode,m),p.return=g,p;case un:var w=p._init;return f(g,w(p._payload),m)}if(Kt(p)||Mt(p))return p=Hn(p,g.mode,m,null),p.return=g,p;Vr(g,p)}return null}function h(g,p,m,w){var _=p!==null?p.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return _!==null?null:a(g,p,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Dr:return m.key===_?s(g,p,m,w):null;case nt:return m.key===_?c(g,p,m,w):null;case un:return _=m._init,h(g,p,_(m._payload),w)}if(Kt(m)||Mt(m))return _!==null?null:d(g,p,m,w,null);Vr(g,m)}return null}function y(g,p,m,w,_){if(typeof w=="string"&&w!==""||typeof w=="number")return g=g.get(m)||null,a(p,g,""+w,_);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Dr:return g=g.get(w.key===null?m:w.key)||null,s(p,g,w,_);case nt:return g=g.get(w.key===null?m:w.key)||null,c(p,g,w,_);case un:var b=w._init;return y(g,p,m,b(w._payload),_)}if(Kt(w)||Mt(w))return g=g.get(m)||null,d(p,g,w,_,null);Vr(p,w)}return null}function x(g,p,m,w){for(var _=null,b=null,j=p,T=p=0,L=null;j!==null&&T<m.length;T++){j.index>T?(L=j,j=null):L=j.sibling;var R=h(g,j,m[T],w);if(R===null){j===null&&(j=L);break}e&&j&&R.alternate===null&&n(g,j),p=i(R,p,T),b===null?_=R:b.sibling=R,b=R,j=L}if(T===m.length)return t(g,j),W&&In(g,T),_;if(j===null){for(;T<m.length;T++)j=f(g,m[T],w),j!==null&&(p=i(j,p,T),b===null?_=j:b.sibling=j,b=j);return W&&In(g,T),_}for(j=r(g,j);T<m.length;T++)L=y(j,g,T,m[T],w),L!==null&&(e&&L.alternate!==null&&j.delete(L.key===null?T:L.key),p=i(L,p,T),b===null?_=L:b.sibling=L,b=L);return e&&j.forEach(function(H){return n(g,H)}),W&&In(g,T),_}function S(g,p,m,w){var _=Mt(m);if(typeof _!="function")throw Error(C(150));if(m=_.call(m),m==null)throw Error(C(151));for(var b=_=null,j=p,T=p=0,L=null,R=m.next();j!==null&&!R.done;T++,R=m.next()){j.index>T?(L=j,j=null):L=j.sibling;var H=h(g,j,R.value,w);if(H===null){j===null&&(j=L);break}e&&j&&H.alternate===null&&n(g,j),p=i(H,p,T),b===null?_=H:b.sibling=H,b=H,j=L}if(R.done)return t(g,j),W&&In(g,T),_;if(j===null){for(;!R.done;T++,R=m.next())R=f(g,R.value,w),R!==null&&(p=i(R,p,T),b===null?_=R:b.sibling=R,b=R);return W&&In(g,T),_}for(j=r(g,j);!R.done;T++,R=m.next())R=y(j,g,T,R.value,w),R!==null&&(e&&R.alternate!==null&&j.delete(R.key===null?T:R.key),p=i(R,p,T),b===null?_=R:b.sibling=R,b=R);return e&&j.forEach(function(Se){return n(g,Se)}),W&&In(g,T),_}function P(g,p,m,w){if(typeof m=="object"&&m!==null&&m.type===tt&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Dr:e:{for(var _=m.key,b=p;b!==null;){if(b.key===_){if(_=m.type,_===tt){if(b.tag===7){t(g,b.sibling),p=o(b,m.props.children),p.return=g,g=p;break e}}else if(b.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===un&&Zs(_)===b.type){t(g,b.sibling),p=o(b,m.props),p.ref=Ut(g,b,m),p.return=g,g=p;break e}t(g,b);break}else n(g,b);b=b.sibling}m.type===tt?(p=Hn(m.props.children,g.mode,w,m.key),p.return=g,g=p):(w=uo(m.type,m.key,m.props,null,g.mode,w),w.ref=Ut(g,p,m),w.return=g,g=w)}return l(g);case nt:e:{for(b=m.key;p!==null;){if(p.key===b)if(p.tag===4&&p.stateNode.containerInfo===m.containerInfo&&p.stateNode.implementation===m.implementation){t(g,p.sibling),p=o(p,m.children||[]),p.return=g,g=p;break e}else{t(g,p);break}else n(g,p);p=p.sibling}p=Ii(m,g.mode,w),p.return=g,g=p}return l(g);case un:return b=m._init,P(g,p,b(m._payload),w)}if(Kt(m))return x(g,p,m,w);if(Mt(m))return S(g,p,m,w);Vr(g,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,p!==null&&p.tag===6?(t(g,p.sibling),p=o(p,m),p.return=g,g=p):(t(g,p),p=Mi(m,g.mode,w),p.return=g,g=p),l(g)):t(g,p)}return P}var kt=dd(!0),fd=dd(!1),Po=$n(null),_o=null,ct=null,fa=null;function pa(){fa=ct=_o=null}function ga(e){var n=Po.current;F(Po),e._currentValue=n}function vl(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function yt(e,n){_o=e,fa=ct=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(he=!0),e.firstContext=null)}function Re(e){var n=e._currentValue;if(fa!==e)if(e={context:e,memoizedValue:n,next:null},ct===null){if(_o===null)throw Error(C(308));ct=e,_o.dependencies={lanes:0,firstContext:e}}else ct=ct.next=e;return n}var Fn=null;function ma(e){Fn===null?Fn=[e]:Fn.push(e)}function pd(e,n,t,r){var o=n.interleaved;return o===null?(t.next=t,ma(n)):(t.next=o.next,o.next=t),n.interleaved=t,tn(e,r)}function tn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var cn=!1;function ha(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function gd(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function qe(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function wn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,z&2){var o=r.pending;return o===null?n.next=n:(n.next=o.next,o.next=n),r.pending=n,tn(e,t)}return o=r.interleaved,o===null?(n.next=n,ma(r)):(n.next=o.next,o.next=n),r.interleaved=n,tn(e,t)}function ro(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,na(e,t)}}function qs(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var o=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var l={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};i===null?o=i=l:i=i.next=l,t=t.next}while(t!==null);i===null?o=i=n:i=i.next=n}else o=i=n;t={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function bo(e,n,t,r){var o=e.updateQueue;cn=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var s=a,c=s.next;s.next=null,l===null?i=c:l.next=c,l=s;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==l&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=s))}if(i!==null){var f=o.baseState;l=0,d=c=s=null,a=i;do{var h=a.lane,y=a.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=e,S=a;switch(h=n,y=t,S.tag){case 1:if(x=S.payload,typeof x=="function"){f=x.call(y,f,h);break e}f=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=S.payload,h=typeof x=="function"?x.call(y,f,h):x,h==null)break e;f=Q({},f,h);break e;case 2:cn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=o.effects,h===null?o.effects=[a]:h.push(a))}else y={eventTime:y,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=y,s=f):d=d.next=y,l|=h;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;h=a,a=h.next,h.next=null,o.lastBaseUpdate=h,o.shared.pending=null}}while(!0);if(d===null&&(s=f),o.baseState=s,o.firstBaseUpdate=c,o.lastBaseUpdate=d,n=o.shared.interleaved,n!==null){o=n;do l|=o.lane,o=o.next;while(o!==n)}else i===null&&(o.shared.lanes=0);Qn|=l,e.lanes=l,e.memoizedState=f}}function eu(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],o=r.callback;if(o!==null){if(r.callback=null,r=t,typeof o!="function")throw Error(C(191,o));o.call(r)}}}var Er={},Ge=$n(Er),hr=$n(Er),yr=$n(Er);function Un(e){if(e===Er)throw Error(C(174));return e}function ya(e,n){switch(A(yr,n),A(hr,e),A(Ge,Er),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Zi(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Zi(n,e)}F(Ge),A(Ge,n)}function Ct(){F(Ge),F(hr),F(yr)}function md(e){Un(yr.current);var n=Un(Ge.current),t=Zi(n,e.type);n!==t&&(A(hr,e),A(Ge,t))}function va(e){hr.current===e&&(F(Ge),F(hr))}var V=$n(0);function jo(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ni=[];function xa(){for(var e=0;e<Ni.length;e++)Ni[e]._workInProgressVersionPrimary=null;Ni.length=0}var oo=on.ReactCurrentDispatcher,Oi=on.ReactCurrentBatchConfig,Gn=0,G=null,q=null,ne=null,Eo=!1,nr=!1,vr=0,Ng=0;function ae(){throw Error(C(321))}function Sa(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Fe(e[t],n[t]))return!1;return!0}function wa(e,n,t,r,o,i){if(Gn=i,G=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,oo.current=e===null||e.memoizedState===null?Lg:zg,e=t(r,o),nr){i=0;do{if(nr=!1,vr=0,25<=i)throw Error(C(301));i+=1,ne=q=null,n.updateQueue=null,oo.current=Mg,e=t(r,o)}while(nr)}if(oo.current=$o,n=q!==null&&q.next!==null,Gn=0,ne=q=G=null,Eo=!1,n)throw Error(C(300));return e}function ka(){var e=vr!==0;return vr=0,e}function He(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ne===null?G.memoizedState=ne=e:ne=ne.next=e,ne}function De(){if(q===null){var e=G.alternate;e=e!==null?e.memoizedState:null}else e=q.next;var n=ne===null?G.memoizedState:ne.next;if(n!==null)ne=n,q=e;else{if(e===null)throw Error(C(310));q=e,e={memoizedState:q.memoizedState,baseState:q.baseState,baseQueue:q.baseQueue,queue:q.queue,next:null},ne===null?G.memoizedState=ne=e:ne=ne.next=e}return ne}function xr(e,n){return typeof n=="function"?n(e):n}function Ri(e){var n=De(),t=n.queue;if(t===null)throw Error(C(311));t.lastRenderedReducer=e;var r=q,o=r.baseQueue,i=t.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,t.pending=null}if(o!==null){i=o.next,r=r.baseState;var a=l=null,s=null,c=i;do{var d=c.lane;if((Gn&d)===d)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(a=s=f,l=r):s=s.next=f,G.lanes|=d,Qn|=d}c=c.next}while(c!==null&&c!==i);s===null?l=r:s.next=a,Fe(r,n.memoizedState)||(he=!0),n.memoizedState=r,n.baseState=l,n.baseQueue=s,t.lastRenderedState=r}if(e=t.interleaved,e!==null){o=e;do i=o.lane,G.lanes|=i,Qn|=i,o=o.next;while(o!==e)}else o===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Di(e){var n=De(),t=n.queue;if(t===null)throw Error(C(311));t.lastRenderedReducer=e;var r=t.dispatch,o=t.pending,i=n.memoizedState;if(o!==null){t.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);Fe(i,n.memoizedState)||(he=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),t.lastRenderedState=i}return[i,r]}function hd(){}function yd(e,n){var t=G,r=De(),o=n(),i=!Fe(r.memoizedState,o);if(i&&(r.memoizedState=o,he=!0),r=r.queue,Ca(Sd.bind(null,t,r,e),[e]),r.getSnapshot!==n||i||ne!==null&&ne.memoizedState.tag&1){if(t.flags|=2048,Sr(9,xd.bind(null,t,r,o,n),void 0,null),te===null)throw Error(C(349));Gn&30||vd(t,n,o)}return o}function vd(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=G.updateQueue,n===null?(n={lastEffect:null,stores:null},G.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function xd(e,n,t,r){n.value=t,n.getSnapshot=r,wd(n)&&kd(e)}function Sd(e,n,t){return t(function(){wd(n)&&kd(e)})}function wd(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Fe(e,t)}catch{return!0}}function kd(e){var n=tn(e,1);n!==null&&Be(n,e,1,-1)}function nu(e){var n=He();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xr,lastRenderedState:e},n.queue=e,e=e.dispatch=Dg.bind(null,G,e),[n.memoizedState,e]}function Sr(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=G.updateQueue,n===null?(n={lastEffect:null,stores:null},G.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function Cd(){return De().memoizedState}function io(e,n,t,r){var o=He();G.flags|=e,o.memoizedState=Sr(1|n,t,void 0,r===void 0?null:r)}function Vo(e,n,t,r){var o=De();r=r===void 0?null:r;var i=void 0;if(q!==null){var l=q.memoizedState;if(i=l.destroy,r!==null&&Sa(r,l.deps)){o.memoizedState=Sr(n,t,i,r);return}}G.flags|=e,o.memoizedState=Sr(1|n,t,i,r)}function tu(e,n){return io(8390656,8,e,n)}function Ca(e,n){return Vo(2048,8,e,n)}function Pd(e,n){return Vo(4,2,e,n)}function _d(e,n){return Vo(4,4,e,n)}function bd(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function jd(e,n,t){return t=t!=null?t.concat([e]):null,Vo(4,4,bd.bind(null,n,e),t)}function Pa(){}function Ed(e,n){var t=De();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Sa(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function $d(e,n){var t=De();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Sa(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function Td(e,n,t){return Gn&21?(Fe(t,n)||(t=Lc(),G.lanes|=t,Qn|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,he=!0),e.memoizedState=t)}function Og(e,n){var t=I;I=t!==0&&4>t?t:4,e(!0);var r=Oi.transition;Oi.transition={};try{e(!1),n()}finally{I=t,Oi.transition=r}}function Nd(){return De().memoizedState}function Rg(e,n,t){var r=Cn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Od(e))Rd(n,t);else if(t=pd(e,n,t,r),t!==null){var o=fe();Be(t,e,r,o),Dd(t,n,r)}}function Dg(e,n,t){var r=Cn(e),o={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Od(e))Rd(n,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var l=n.lastRenderedState,a=i(l,t);if(o.hasEagerState=!0,o.eagerState=a,Fe(a,l)){var s=n.interleaved;s===null?(o.next=o,ma(n)):(o.next=s.next,s.next=o),n.interleaved=o;return}}catch{}finally{}t=pd(e,n,o,r),t!==null&&(o=fe(),Be(t,e,r,o),Dd(t,n,r))}}function Od(e){var n=e.alternate;return e===G||n!==null&&n===G}function Rd(e,n){nr=Eo=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Dd(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,na(e,t)}}var $o={readContext:Re,useCallback:ae,useContext:ae,useEffect:ae,useImperativeHandle:ae,useInsertionEffect:ae,useLayoutEffect:ae,useMemo:ae,useReducer:ae,useRef:ae,useState:ae,useDebugValue:ae,useDeferredValue:ae,useTransition:ae,useMutableSource:ae,useSyncExternalStore:ae,useId:ae,unstable_isNewReconciler:!1},Lg={readContext:Re,useCallback:function(e,n){return He().memoizedState=[e,n===void 0?null:n],e},useContext:Re,useEffect:tu,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,io(4194308,4,bd.bind(null,n,e),t)},useLayoutEffect:function(e,n){return io(4194308,4,e,n)},useInsertionEffect:function(e,n){return io(4,2,e,n)},useMemo:function(e,n){var t=He();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=He();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=Rg.bind(null,G,e),[r.memoizedState,e]},useRef:function(e){var n=He();return e={current:e},n.memoizedState=e},useState:nu,useDebugValue:Pa,useDeferredValue:function(e){return He().memoizedState=e},useTransition:function(){var e=nu(!1),n=e[0];return e=Og.bind(null,e[1]),He().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=G,o=He();if(W){if(t===void 0)throw Error(C(407));t=t()}else{if(t=n(),te===null)throw Error(C(349));Gn&30||vd(r,n,t)}o.memoizedState=t;var i={value:t,getSnapshot:n};return o.queue=i,tu(Sd.bind(null,r,i,e),[e]),r.flags|=2048,Sr(9,xd.bind(null,r,i,t,n),void 0,null),t},useId:function(){var e=He(),n=te.identifierPrefix;if(W){var t=Ze,r=Je;t=(r&~(1<<32-Ae(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=vr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Ng++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},zg={readContext:Re,useCallback:Ed,useContext:Re,useEffect:Ca,useImperativeHandle:jd,useInsertionEffect:Pd,useLayoutEffect:_d,useMemo:$d,useReducer:Ri,useRef:Cd,useState:function(){return Ri(xr)},useDebugValue:Pa,useDeferredValue:function(e){var n=De();return Td(n,q.memoizedState,e)},useTransition:function(){var e=Ri(xr)[0],n=De().memoizedState;return[e,n]},useMutableSource:hd,useSyncExternalStore:yd,useId:Nd,unstable_isNewReconciler:!1},Mg={readContext:Re,useCallback:Ed,useContext:Re,useEffect:Ca,useImperativeHandle:jd,useInsertionEffect:Pd,useLayoutEffect:_d,useMemo:$d,useReducer:Di,useRef:Cd,useState:function(){return Di(xr)},useDebugValue:Pa,useDeferredValue:function(e){var n=De();return q===null?n.memoizedState=e:Td(n,q.memoizedState,e)},useTransition:function(){var e=Di(xr)[0],n=De().memoizedState;return[e,n]},useMutableSource:hd,useSyncExternalStore:yd,useId:Nd,unstable_isNewReconciler:!1};function ze(e,n){if(e&&e.defaultProps){n=Q({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function xl(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:Q({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Ko={isMounted:function(e){return(e=e._reactInternals)?Jn(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=fe(),o=Cn(e),i=qe(r,o);i.payload=n,t!=null&&(i.callback=t),n=wn(e,i,o),n!==null&&(Be(n,e,o,r),ro(n,e,o))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=fe(),o=Cn(e),i=qe(r,o);i.tag=1,i.payload=n,t!=null&&(i.callback=t),n=wn(e,i,o),n!==null&&(Be(n,e,o,r),ro(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=fe(),r=Cn(e),o=qe(t,r);o.tag=2,n!=null&&(o.callback=n),n=wn(e,o,r),n!==null&&(Be(n,e,r,t),ro(n,e,r))}};function ru(e,n,t,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):n.prototype&&n.prototype.isPureReactComponent?!fr(t,r)||!fr(o,i):!0}function Ld(e,n,t){var r=!1,o=jn,i=n.contextType;return typeof i=="object"&&i!==null?i=Re(i):(o=ve(n)?Vn:ce.current,r=n.contextTypes,i=(r=r!=null)?St(e,o):jn),n=new n(t,i),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Ko,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),n}function ou(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&Ko.enqueueReplaceState(n,n.state,null)}function Sl(e,n,t,r){var o=e.stateNode;o.props=t,o.state=e.memoizedState,o.refs={},ha(e);var i=n.contextType;typeof i=="object"&&i!==null?o.context=Re(i):(i=ve(n)?Vn:ce.current,o.context=St(e,i)),o.state=e.memoizedState,i=n.getDerivedStateFromProps,typeof i=="function"&&(xl(e,n,i,t),o.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(n=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),n!==o.state&&Ko.enqueueReplaceState(o,o.state,null),bo(e,t,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Pt(e,n){try{var t="",r=n;do t+=dp(r),r=r.return;while(r);var o=t}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:n,stack:o,digest:null}}function Li(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function wl(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var Ig=typeof WeakMap=="function"?WeakMap:Map;function zd(e,n,t){t=qe(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){No||(No=!0,Nl=r),wl(e,n)},t}function Md(e,n,t){t=qe(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=n.value;t.payload=function(){return r(o)},t.callback=function(){wl(e,n)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){wl(e,n),typeof r!="function"&&(kn===null?kn=new Set([this]):kn.add(this));var l=n.stack;this.componentDidCatch(n.value,{componentStack:l!==null?l:""})}),t}function iu(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new Ig;var o=new Set;r.set(n,o)}else o=r.get(n),o===void 0&&(o=new Set,r.set(n,o));o.has(t)||(o.add(t),e=Zg.bind(null,e,n,t),n.then(e,e))}function lu(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function au(e,n,t,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=qe(-1,1),n.tag=2,wn(t,n,1))),t.lanes|=1),e)}var Ag=on.ReactCurrentOwner,he=!1;function de(e,n,t,r){n.child=e===null?fd(n,null,t,r):kt(n,e.child,t,r)}function su(e,n,t,r,o){t=t.render;var i=n.ref;return yt(n,o),r=wa(e,n,t,r,i,o),t=ka(),e!==null&&!he?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~o,rn(e,n,o)):(W&&t&&ua(n),n.flags|=1,de(e,n,r,o),n.child)}function uu(e,n,t,r,o){if(e===null){var i=t.type;return typeof i=="function"&&!Oa(i)&&i.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=i,Id(e,n,i,r,o)):(e=uo(t.type,null,r,n,n.mode,o),e.ref=n.ref,e.return=n,n.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(t=t.compare,t=t!==null?t:fr,t(l,r)&&e.ref===n.ref)return rn(e,n,o)}return n.flags|=1,e=Pn(i,r),e.ref=n.ref,e.return=n,n.child=e}function Id(e,n,t,r,o){if(e!==null){var i=e.memoizedProps;if(fr(i,r)&&e.ref===n.ref)if(he=!1,n.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(he=!0);else return n.lanes=e.lanes,rn(e,n,o)}return kl(e,n,t,r,o)}function Ad(e,n,t){var r=n.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},A(ft,Ce),Ce|=t;else{if(!(t&1073741824))return e=i!==null?i.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,A(ft,Ce),Ce|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:t,A(ft,Ce),Ce|=r}else i!==null?(r=i.baseLanes|t,n.memoizedState=null):r=t,A(ft,Ce),Ce|=r;return de(e,n,o,t),n.child}function Bd(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function kl(e,n,t,r,o){var i=ve(t)?Vn:ce.current;return i=St(n,i),yt(n,o),t=wa(e,n,t,r,i,o),r=ka(),e!==null&&!he?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~o,rn(e,n,o)):(W&&r&&ua(n),n.flags|=1,de(e,n,t,o),n.child)}function cu(e,n,t,r,o){if(ve(t)){var i=!0;wo(n)}else i=!1;if(yt(n,o),n.stateNode===null)lo(e,n),Ld(n,t,r),Sl(n,t,r,o),r=!0;else if(e===null){var l=n.stateNode,a=n.memoizedProps;l.props=a;var s=l.context,c=t.contextType;typeof c=="object"&&c!==null?c=Re(c):(c=ve(t)?Vn:ce.current,c=St(n,c));var d=t.getDerivedStateFromProps,f=typeof d=="function"||typeof l.getSnapshotBeforeUpdate=="function";f||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||s!==c)&&ou(n,l,r,c),cn=!1;var h=n.memoizedState;l.state=h,bo(n,r,l,o),s=n.memoizedState,a!==r||h!==s||ye.current||cn?(typeof d=="function"&&(xl(n,t,d,r),s=n.memoizedState),(a=cn||ru(n,t,a,r,h,s,c))?(f||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(n.flags|=4194308)):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=s),l.props=r,l.state=s,l.context=c,r=a):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{l=n.stateNode,gd(e,n),a=n.memoizedProps,c=n.type===n.elementType?a:ze(n.type,a),l.props=c,f=n.pendingProps,h=l.context,s=t.contextType,typeof s=="object"&&s!==null?s=Re(s):(s=ve(t)?Vn:ce.current,s=St(n,s));var y=t.getDerivedStateFromProps;(d=typeof y=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==f||h!==s)&&ou(n,l,r,s),cn=!1,h=n.memoizedState,l.state=h,bo(n,r,l,o);var x=n.memoizedState;a!==f||h!==x||ye.current||cn?(typeof y=="function"&&(xl(n,t,y,r),x=n.memoizedState),(c=cn||ru(n,t,c,r,h,x,s)||!1)?(d||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,x,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,x,s)),typeof l.componentDidUpdate=="function"&&(n.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=x),l.props=r,l.state=x,l.context=s,r=c):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(n.flags|=1024),r=!1)}return Cl(e,n,t,r,i,o)}function Cl(e,n,t,r,o,i){Bd(e,n);var l=(n.flags&128)!==0;if(!r&&!l)return o&&Ys(n,t,!1),rn(e,n,i);r=n.stateNode,Ag.current=n;var a=l&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&l?(n.child=kt(n,e.child,null,i),n.child=kt(n,null,a,i)):de(e,n,a,i),n.memoizedState=r.state,o&&Ys(n,t,!0),n.child}function Fd(e){var n=e.stateNode;n.pendingContext?Qs(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Qs(e,n.context,!1),ya(e,n.containerInfo)}function du(e,n,t,r,o){return wt(),da(o),n.flags|=256,de(e,n,t,r),n.child}var Pl={dehydrated:null,treeContext:null,retryLane:0};function _l(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ud(e,n,t){var r=n.pendingProps,o=V.current,i=!1,l=(n.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),A(V,o&1),e===null)return yl(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(l=r.children,e=r.fallback,i?(r=n.mode,i=n.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=Yo(l,r,0,null),e=Hn(e,r,t,null),i.return=n,e.return=n,i.sibling=e,n.child=i,n.child.memoizedState=_l(t),n.memoizedState=Pl,e):_a(n,l));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return Bg(e,n,l,r,a,o,t);if(i){i=r.fallback,l=n.mode,o=e.child,a=o.sibling;var s={mode:"hidden",children:r.children};return!(l&1)&&n.child!==o?(r=n.child,r.childLanes=0,r.pendingProps=s,n.deletions=null):(r=Pn(o,s),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=Pn(a,i):(i=Hn(i,l,t,null),i.flags|=2),i.return=n,r.return=n,r.sibling=i,n.child=r,r=i,i=n.child,l=e.child.memoizedState,l=l===null?_l(t):{baseLanes:l.baseLanes|t,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~t,n.memoizedState=Pl,r}return i=e.child,e=i.sibling,r=Pn(i,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function _a(e,n){return n=Yo({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Kr(e,n,t,r){return r!==null&&da(r),kt(n,e.child,null,t),e=_a(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Bg(e,n,t,r,o,i,l){if(t)return n.flags&256?(n.flags&=-257,r=Li(Error(C(422))),Kr(e,n,l,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(i=r.fallback,o=n.mode,r=Yo({mode:"visible",children:r.children},o,0,null),i=Hn(i,o,l,null),i.flags|=2,r.return=n,i.return=n,r.sibling=i,n.child=r,n.mode&1&&kt(n,e.child,null,l),n.child.memoizedState=_l(l),n.memoizedState=Pl,i);if(!(n.mode&1))return Kr(e,n,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(C(419)),r=Li(i,r,void 0),Kr(e,n,l,r)}if(a=(l&e.childLanes)!==0,he||a){if(r=te,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,tn(e,o),Be(r,e,o,-1))}return Na(),r=Li(Error(C(421))),Kr(e,n,l,r)}return o.data==="$?"?(n.flags|=128,n.child=e.child,n=qg.bind(null,e),o._reactRetry=n,null):(e=i.treeContext,Pe=Sn(o.nextSibling),_e=n,W=!0,Ie=null,e!==null&&($e[Te++]=Je,$e[Te++]=Ze,$e[Te++]=Kn,Je=e.id,Ze=e.overflow,Kn=n),n=_a(n,r.children),n.flags|=4096,n)}function fu(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),vl(e.return,n,t)}function zi(e,n,t,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:o}:(i.isBackwards=n,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=t,i.tailMode=o)}function Wd(e,n,t){var r=n.pendingProps,o=r.revealOrder,i=r.tail;if(de(e,n,r.children,t),r=V.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&fu(e,t,n);else if(e.tag===19)fu(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(A(V,r),!(n.mode&1))n.memoizedState=null;else switch(o){case"forwards":for(t=n.child,o=null;t!==null;)e=t.alternate,e!==null&&jo(e)===null&&(o=t),t=t.sibling;t=o,t===null?(o=n.child,n.child=null):(o=t.sibling,t.sibling=null),zi(n,!1,o,t,i);break;case"backwards":for(t=null,o=n.child,n.child=null;o!==null;){if(e=o.alternate,e!==null&&jo(e)===null){n.child=o;break}e=o.sibling,o.sibling=t,t=o,o=e}zi(n,!0,t,null,i);break;case"together":zi(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function lo(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function rn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Qn|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(C(153));if(n.child!==null){for(e=n.child,t=Pn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Pn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Fg(e,n,t){switch(n.tag){case 3:Fd(n),wt();break;case 5:md(n);break;case 1:ve(n.type)&&wo(n);break;case 4:ya(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,o=n.memoizedProps.value;A(Po,r._currentValue),r._currentValue=o;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(A(V,V.current&1),n.flags|=128,null):t&n.child.childLanes?Ud(e,n,t):(A(V,V.current&1),e=rn(e,n,t),e!==null?e.sibling:null);A(V,V.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return Wd(e,n,t);n.flags|=128}if(o=n.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),A(V,V.current),r)break;return null;case 22:case 23:return n.lanes=0,Ad(e,n,t)}return rn(e,n,t)}var Hd,bl,Vd,Kd;Hd=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};bl=function(){};Vd=function(e,n,t,r){var o=e.memoizedProps;if(o!==r){e=n.stateNode,Un(Ge.current);var i=null;switch(t){case"input":o=Qi(e,o),r=Qi(e,r),i=[];break;case"select":o=Q({},o,{value:void 0}),r=Q({},r,{value:void 0}),i=[];break;case"textarea":o=Ji(e,o),r=Ji(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=xo)}qi(t,r);var l;t=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var a=o[c];for(l in a)a.hasOwnProperty(l)&&(t||(t={}),t[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ir.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var s=r[c];if(a=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&s!==a&&(s!=null||a!=null))if(c==="style")if(a){for(l in a)!a.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(t||(t={}),t[l]="");for(l in s)s.hasOwnProperty(l)&&a[l]!==s[l]&&(t||(t={}),t[l]=s[l])}else t||(i||(i=[]),i.push(c,t)),t=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(i=i||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ir.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&B("scroll",e),i||a===s||(i=[])):(i=i||[]).push(c,s))}t&&(i=i||[]).push("style",t);var c=i;(n.updateQueue=c)&&(n.flags|=4)}};Kd=function(e,n,t,r){t!==r&&(n.flags|=4)};function Wt(e,n){if(!W)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function se(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var o=e.child;o!==null;)t|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)t|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function Ug(e,n,t){var r=n.pendingProps;switch(ca(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return se(n),null;case 1:return ve(n.type)&&So(),se(n),null;case 3:return r=n.stateNode,Ct(),F(ye),F(ce),xa(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Hr(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Ie!==null&&(Dl(Ie),Ie=null))),bl(e,n),se(n),null;case 5:va(n);var o=Un(yr.current);if(t=n.type,e!==null&&n.stateNode!=null)Vd(e,n,t,r,o),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(C(166));return se(n),null}if(e=Un(Ge.current),Hr(n)){r=n.stateNode,t=n.type;var i=n.memoizedProps;switch(r[Ve]=n,r[mr]=i,e=(n.mode&1)!==0,t){case"dialog":B("cancel",r),B("close",r);break;case"iframe":case"object":case"embed":B("load",r);break;case"video":case"audio":for(o=0;o<Qt.length;o++)B(Qt[o],r);break;case"source":B("error",r);break;case"img":case"image":case"link":B("error",r),B("load",r);break;case"details":B("toggle",r);break;case"input":ws(r,i),B("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},B("invalid",r);break;case"textarea":Cs(r,i),B("invalid",r)}qi(t,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var a=i[l];l==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&Wr(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&Wr(r.textContent,a,e),o=["children",""+a]):ir.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&B("scroll",r)}switch(t){case"input":Lr(r),ks(r,i,!0);break;case"textarea":Lr(r),Ps(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=xo)}r=o,n.updateQueue=r,r!==null&&(n.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Sc(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(t,{is:r.is}):(e=l.createElement(t),t==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,t),e[Ve]=n,e[mr]=r,Hd(e,n,!1,!1),n.stateNode=e;e:{switch(l=el(t,r),t){case"dialog":B("cancel",e),B("close",e),o=r;break;case"iframe":case"object":case"embed":B("load",e),o=r;break;case"video":case"audio":for(o=0;o<Qt.length;o++)B(Qt[o],e);o=r;break;case"source":B("error",e),o=r;break;case"img":case"image":case"link":B("error",e),B("load",e),o=r;break;case"details":B("toggle",e),o=r;break;case"input":ws(e,r),o=Qi(e,r),B("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=Q({},r,{value:void 0}),B("invalid",e);break;case"textarea":Cs(e,r),o=Ji(e,r),B("invalid",e);break;default:o=r}qi(t,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var s=a[i];i==="style"?Cc(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&wc(e,s)):i==="children"?typeof s=="string"?(t!=="textarea"||s!=="")&&lr(e,s):typeof s=="number"&&lr(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(ir.hasOwnProperty(i)?s!=null&&i==="onScroll"&&B("scroll",e):s!=null&&Yl(e,i,s,l))}switch(t){case"input":Lr(e),ks(e,r,!1);break;case"textarea":Lr(e),Ps(e);break;case"option":r.value!=null&&e.setAttribute("value",""+bn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?pt(e,!!r.multiple,i,!1):r.defaultValue!=null&&pt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=xo)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return se(n),null;case 6:if(e&&n.stateNode!=null)Kd(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(C(166));if(t=Un(yr.current),Un(Ge.current),Hr(n)){if(r=n.stateNode,t=n.memoizedProps,r[Ve]=n,(i=r.nodeValue!==t)&&(e=_e,e!==null))switch(e.tag){case 3:Wr(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Wr(r.nodeValue,t,(e.mode&1)!==0)}i&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[Ve]=n,n.stateNode=r}return se(n),null;case 13:if(F(V),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(W&&Pe!==null&&n.mode&1&&!(n.flags&128))cd(),wt(),n.flags|=98560,i=!1;else if(i=Hr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(C(318));if(i=n.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(C(317));i[Ve]=n}else wt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;se(n),i=!1}else Ie!==null&&(Dl(Ie),Ie=null),i=!0;if(!i)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||V.current&1?ee===0&&(ee=3):Na())),n.updateQueue!==null&&(n.flags|=4),se(n),null);case 4:return Ct(),bl(e,n),e===null&&pr(n.stateNode.containerInfo),se(n),null;case 10:return ga(n.type._context),se(n),null;case 17:return ve(n.type)&&So(),se(n),null;case 19:if(F(V),i=n.memoizedState,i===null)return se(n),null;if(r=(n.flags&128)!==0,l=i.rendering,l===null)if(r)Wt(i,!1);else{if(ee!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(l=jo(e),l!==null){for(n.flags|=128,Wt(i,!1),r=l.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)i=t,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return A(V,V.current&1|2),n.child}e=e.sibling}i.tail!==null&&X()>_t&&(n.flags|=128,r=!0,Wt(i,!1),n.lanes=4194304)}else{if(!r)if(e=jo(l),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Wt(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!W)return se(n),null}else 2*X()-i.renderingStartTime>_t&&t!==1073741824&&(n.flags|=128,r=!0,Wt(i,!1),n.lanes=4194304);i.isBackwards?(l.sibling=n.child,n.child=l):(t=i.last,t!==null?t.sibling=l:n.child=l,i.last=l)}return i.tail!==null?(n=i.tail,i.rendering=n,i.tail=n.sibling,i.renderingStartTime=X(),n.sibling=null,t=V.current,A(V,r?t&1|2:t&1),n):(se(n),null);case 22:case 23:return Ta(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?Ce&1073741824&&(se(n),n.subtreeFlags&6&&(n.flags|=8192)):se(n),null;case 24:return null;case 25:return null}throw Error(C(156,n.tag))}function Wg(e,n){switch(ca(n),n.tag){case 1:return ve(n.type)&&So(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Ct(),F(ye),F(ce),xa(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return va(n),null;case 13:if(F(V),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(C(340));wt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return F(V),null;case 4:return Ct(),null;case 10:return ga(n.type._context),null;case 22:case 23:return Ta(),null;case 24:return null;default:return null}}var Gr=!1,ue=!1,Hg=typeof WeakSet=="function"?WeakSet:Set,$=null;function dt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){Y(e,n,r)}else t.current=null}function jl(e,n,t){try{t()}catch(r){Y(e,n,r)}}var pu=!1;function Vg(e,n){if(cl=ho,e=Jc(),sa(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var l=0,a=-1,s=-1,c=0,d=0,f=e,h=null;n:for(;;){for(var y;f!==t||o!==0&&f.nodeType!==3||(a=l+o),f!==i||r!==0&&f.nodeType!==3||(s=l+r),f.nodeType===3&&(l+=f.nodeValue.length),(y=f.firstChild)!==null;)h=f,f=y;for(;;){if(f===e)break n;if(h===t&&++c===o&&(a=l),h===i&&++d===r&&(s=l),(y=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=y}t=a===-1||s===-1?null:{start:a,end:s}}else t=null}t=t||{start:0,end:0}}else t=null;for(dl={focusedElem:e,selectionRange:t},ho=!1,$=n;$!==null;)if(n=$,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,$=e;else for(;$!==null;){n=$;try{var x=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var S=x.memoizedProps,P=x.memoizedState,g=n.stateNode,p=g.getSnapshotBeforeUpdate(n.elementType===n.type?S:ze(n.type,S),P);g.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var m=n.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(w){Y(n,n.return,w)}if(e=n.sibling,e!==null){e.return=n.return,$=e;break}$=n.return}return x=pu,pu=!1,x}function tr(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&jl(n,t,i)}o=o.next}while(o!==r)}}function Go(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function El(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Gd(e){var n=e.alternate;n!==null&&(e.alternate=null,Gd(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Ve],delete n[mr],delete n[gl],delete n[jg],delete n[Eg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Qd(e){return e.tag===5||e.tag===3||e.tag===4}function gu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Qd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function $l(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=xo));else if(r!==4&&(e=e.child,e!==null))for($l(e,n,t),e=e.sibling;e!==null;)$l(e,n,t),e=e.sibling}function Tl(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Tl(e,n,t),e=e.sibling;e!==null;)Tl(e,n,t),e=e.sibling}var re=null,Me=!1;function sn(e,n,t){for(t=t.child;t!==null;)Yd(e,n,t),t=t.sibling}function Yd(e,n,t){if(Ke&&typeof Ke.onCommitFiberUnmount=="function")try{Ke.onCommitFiberUnmount(Ao,t)}catch{}switch(t.tag){case 5:ue||dt(t,n);case 6:var r=re,o=Me;re=null,sn(e,n,t),re=r,Me=o,re!==null&&(Me?(e=re,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):re.removeChild(t.stateNode));break;case 18:re!==null&&(Me?(e=re,t=t.stateNode,e.nodeType===8?$i(e.parentNode,t):e.nodeType===1&&$i(e,t),cr(e)):$i(re,t.stateNode));break;case 4:r=re,o=Me,re=t.stateNode.containerInfo,Me=!0,sn(e,n,t),re=r,Me=o;break;case 0:case 11:case 14:case 15:if(!ue&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&jl(t,n,l),o=o.next}while(o!==r)}sn(e,n,t);break;case 1:if(!ue&&(dt(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(a){Y(t,n,a)}sn(e,n,t);break;case 21:sn(e,n,t);break;case 22:t.mode&1?(ue=(r=ue)||t.memoizedState!==null,sn(e,n,t),ue=r):sn(e,n,t);break;default:sn(e,n,t)}}function mu(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Hg),n.forEach(function(r){var o=em.bind(null,e,r);t.has(r)||(t.add(r),r.then(o,o))})}}function Le(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var o=t[r];try{var i=e,l=n,a=l;e:for(;a!==null;){switch(a.tag){case 5:re=a.stateNode,Me=!1;break e;case 3:re=a.stateNode.containerInfo,Me=!0;break e;case 4:re=a.stateNode.containerInfo,Me=!0;break e}a=a.return}if(re===null)throw Error(C(160));Yd(i,l,o),re=null,Me=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(c){Y(o,n,c)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Xd(n,e),n=n.sibling}function Xd(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Le(n,e),We(e),r&4){try{tr(3,e,e.return),Go(3,e)}catch(S){Y(e,e.return,S)}try{tr(5,e,e.return)}catch(S){Y(e,e.return,S)}}break;case 1:Le(n,e),We(e),r&512&&t!==null&&dt(t,t.return);break;case 5:if(Le(n,e),We(e),r&512&&t!==null&&dt(t,t.return),e.flags&32){var o=e.stateNode;try{lr(o,"")}catch(S){Y(e,e.return,S)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=t!==null?t.memoizedProps:i,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&vc(o,i),el(a,l);var c=el(a,i);for(l=0;l<s.length;l+=2){var d=s[l],f=s[l+1];d==="style"?Cc(o,f):d==="dangerouslySetInnerHTML"?wc(o,f):d==="children"?lr(o,f):Yl(o,d,f,c)}switch(a){case"input":Yi(o,i);break;case"textarea":xc(o,i);break;case"select":var h=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var y=i.value;y!=null?pt(o,!!i.multiple,y,!1):h!==!!i.multiple&&(i.defaultValue!=null?pt(o,!!i.multiple,i.defaultValue,!0):pt(o,!!i.multiple,i.multiple?[]:"",!1))}o[mr]=i}catch(S){Y(e,e.return,S)}}break;case 6:if(Le(n,e),We(e),r&4){if(e.stateNode===null)throw Error(C(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(S){Y(e,e.return,S)}}break;case 3:if(Le(n,e),We(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{cr(n.containerInfo)}catch(S){Y(e,e.return,S)}break;case 4:Le(n,e),We(e);break;case 13:Le(n,e),We(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Ea=X())),r&4&&mu(e);break;case 22:if(d=t!==null&&t.memoizedState!==null,e.mode&1?(ue=(c=ue)||d,Le(n,e),ue=c):Le(n,e),We(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!d&&e.mode&1)for($=e,d=e.child;d!==null;){for(f=$=d;$!==null;){switch(h=$,y=h.child,h.tag){case 0:case 11:case 14:case 15:tr(4,h,h.return);break;case 1:dt(h,h.return);var x=h.stateNode;if(typeof x.componentWillUnmount=="function"){r=h,t=h.return;try{n=r,x.props=n.memoizedProps,x.state=n.memoizedState,x.componentWillUnmount()}catch(S){Y(r,t,S)}}break;case 5:dt(h,h.return);break;case 22:if(h.memoizedState!==null){yu(f);continue}}y!==null?(y.return=h,$=y):yu(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{o=f.stateNode,c?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=f.stateNode,s=f.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=kc("display",l))}catch(S){Y(e,e.return,S)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(S){Y(e,e.return,S)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Le(n,e),We(e),r&4&&mu(e);break;case 21:break;default:Le(n,e),We(e)}}function We(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Qd(t)){var r=t;break e}t=t.return}throw Error(C(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(lr(o,""),r.flags&=-33);var i=gu(e);Tl(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,a=gu(e);$l(e,a,l);break;default:throw Error(C(161))}}catch(s){Y(e,e.return,s)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Kg(e,n,t){$=e,Jd(e)}function Jd(e,n,t){for(var r=(e.mode&1)!==0;$!==null;){var o=$,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||Gr;if(!l){var a=o.alternate,s=a!==null&&a.memoizedState!==null||ue;a=Gr;var c=ue;if(Gr=l,(ue=s)&&!c)for($=o;$!==null;)l=$,s=l.child,l.tag===22&&l.memoizedState!==null?vu(o):s!==null?(s.return=l,$=s):vu(o);for(;i!==null;)$=i,Jd(i),i=i.sibling;$=o,Gr=a,ue=c}hu(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,$=i):hu(e)}}function hu(e){for(;$!==null;){var n=$;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:ue||Go(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!ue)if(t===null)r.componentDidMount();else{var o=n.elementType===n.type?t.memoizedProps:ze(n.type,t.memoizedProps);r.componentDidUpdate(o,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=n.updateQueue;i!==null&&eu(n,i,r);break;case 3:var l=n.updateQueue;if(l!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}eu(n,l,t)}break;case 5:var a=n.stateNode;if(t===null&&n.flags&4){t=a;var s=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&t.focus();break;case"img":s.src&&(t.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var c=n.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&cr(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}ue||n.flags&512&&El(n)}catch(h){Y(n,n.return,h)}}if(n===e){$=null;break}if(t=n.sibling,t!==null){t.return=n.return,$=t;break}$=n.return}}function yu(e){for(;$!==null;){var n=$;if(n===e){$=null;break}var t=n.sibling;if(t!==null){t.return=n.return,$=t;break}$=n.return}}function vu(e){for(;$!==null;){var n=$;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Go(4,n)}catch(s){Y(n,t,s)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var o=n.return;try{r.componentDidMount()}catch(s){Y(n,o,s)}}var i=n.return;try{El(n)}catch(s){Y(n,i,s)}break;case 5:var l=n.return;try{El(n)}catch(s){Y(n,l,s)}}}catch(s){Y(n,n.return,s)}if(n===e){$=null;break}var a=n.sibling;if(a!==null){a.return=n.return,$=a;break}$=n.return}}var Gg=Math.ceil,To=on.ReactCurrentDispatcher,ba=on.ReactCurrentOwner,Oe=on.ReactCurrentBatchConfig,z=0,te=null,Z=null,oe=0,Ce=0,ft=$n(0),ee=0,wr=null,Qn=0,Qo=0,ja=0,rr=null,me=null,Ea=0,_t=1/0,Ye=null,No=!1,Nl=null,kn=null,Qr=!1,gn=null,Oo=0,or=0,Ol=null,ao=-1,so=0;function fe(){return z&6?X():ao!==-1?ao:ao=X()}function Cn(e){return e.mode&1?z&2&&oe!==0?oe&-oe:Tg.transition!==null?(so===0&&(so=Lc()),so):(e=I,e!==0||(e=window.event,e=e===void 0?16:Uc(e.type)),e):1}function Be(e,n,t,r){if(50<or)throw or=0,Ol=null,Error(C(185));_r(e,t,r),(!(z&2)||e!==te)&&(e===te&&(!(z&2)&&(Qo|=t),ee===4&&fn(e,oe)),xe(e,r),t===1&&z===0&&!(n.mode&1)&&(_t=X()+500,Ho&&Tn()))}function xe(e,n){var t=e.callbackNode;Tp(e,n);var r=mo(e,e===te?oe:0);if(r===0)t!==null&&js(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&js(t),n===1)e.tag===0?$g(xu.bind(null,e)):ad(xu.bind(null,e)),_g(function(){!(z&6)&&Tn()}),t=null;else{switch(zc(r)){case 1:t=ea;break;case 4:t=Rc;break;case 16:t=go;break;case 536870912:t=Dc;break;default:t=go}t=lf(t,Zd.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Zd(e,n){if(ao=-1,so=0,z&6)throw Error(C(327));var t=e.callbackNode;if(vt()&&e.callbackNode!==t)return null;var r=mo(e,e===te?oe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=Ro(e,r);else{n=r;var o=z;z|=2;var i=ef();(te!==e||oe!==n)&&(Ye=null,_t=X()+500,Wn(e,n));do try{Xg();break}catch(a){qd(e,a)}while(!0);pa(),To.current=i,z=o,Z!==null?n=0:(te=null,oe=0,n=ee)}if(n!==0){if(n===2&&(o=il(e),o!==0&&(r=o,n=Rl(e,o))),n===1)throw t=wr,Wn(e,0),fn(e,r),xe(e,X()),t;if(n===6)fn(e,r);else{if(o=e.current.alternate,!(r&30)&&!Qg(o)&&(n=Ro(e,r),n===2&&(i=il(e),i!==0&&(r=i,n=Rl(e,i))),n===1))throw t=wr,Wn(e,0),fn(e,r),xe(e,X()),t;switch(e.finishedWork=o,e.finishedLanes=r,n){case 0:case 1:throw Error(C(345));case 2:An(e,me,Ye);break;case 3:if(fn(e,r),(r&130023424)===r&&(n=Ea+500-X(),10<n)){if(mo(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){fe(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=pl(An.bind(null,e,me,Ye),n);break}An(e,me,Ye);break;case 4:if(fn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,o=-1;0<r;){var l=31-Ae(r);i=1<<l,l=n[l],l>o&&(o=l),r&=~i}if(r=o,r=X()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Gg(r/1960))-r,10<r){e.timeoutHandle=pl(An.bind(null,e,me,Ye),r);break}An(e,me,Ye);break;case 5:An(e,me,Ye);break;default:throw Error(C(329))}}}return xe(e,X()),e.callbackNode===t?Zd.bind(null,e):null}function Rl(e,n){var t=rr;return e.current.memoizedState.isDehydrated&&(Wn(e,n).flags|=256),e=Ro(e,n),e!==2&&(n=me,me=t,n!==null&&Dl(n)),e}function Dl(e){me===null?me=e:me.push.apply(me,e)}function Qg(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var o=t[r],i=o.getSnapshot;o=o.value;try{if(!Fe(i(),o))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function fn(e,n){for(n&=~ja,n&=~Qo,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Ae(n),r=1<<t;e[t]=-1,n&=~r}}function xu(e){if(z&6)throw Error(C(327));vt();var n=mo(e,0);if(!(n&1))return xe(e,X()),null;var t=Ro(e,n);if(e.tag!==0&&t===2){var r=il(e);r!==0&&(n=r,t=Rl(e,r))}if(t===1)throw t=wr,Wn(e,0),fn(e,n),xe(e,X()),t;if(t===6)throw Error(C(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,An(e,me,Ye),xe(e,X()),null}function $a(e,n){var t=z;z|=1;try{return e(n)}finally{z=t,z===0&&(_t=X()+500,Ho&&Tn())}}function Yn(e){gn!==null&&gn.tag===0&&!(z&6)&&vt();var n=z;z|=1;var t=Oe.transition,r=I;try{if(Oe.transition=null,I=1,e)return e()}finally{I=r,Oe.transition=t,z=n,!(z&6)&&Tn()}}function Ta(){Ce=ft.current,F(ft)}function Wn(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Pg(t)),Z!==null)for(t=Z.return;t!==null;){var r=t;switch(ca(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&So();break;case 3:Ct(),F(ye),F(ce),xa();break;case 5:va(r);break;case 4:Ct();break;case 13:F(V);break;case 19:F(V);break;case 10:ga(r.type._context);break;case 22:case 23:Ta()}t=t.return}if(te=e,Z=e=Pn(e.current,null),oe=Ce=n,ee=0,wr=null,ja=Qo=Qn=0,me=rr=null,Fn!==null){for(n=0;n<Fn.length;n++)if(t=Fn[n],r=t.interleaved,r!==null){t.interleaved=null;var o=r.next,i=t.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}t.pending=r}Fn=null}return e}function qd(e,n){do{var t=Z;try{if(pa(),oo.current=$o,Eo){for(var r=G.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Eo=!1}if(Gn=0,ne=q=G=null,nr=!1,vr=0,ba.current=null,t===null||t.return===null){ee=1,wr=n,Z=null;break}e:{var i=e,l=t.return,a=t,s=n;if(n=oe,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var y=lu(l);if(y!==null){y.flags&=-257,au(y,l,a,i,n),y.mode&1&&iu(i,c,n),n=y,s=c;var x=n.updateQueue;if(x===null){var S=new Set;S.add(s),n.updateQueue=S}else x.add(s);break e}else{if(!(n&1)){iu(i,c,n),Na();break e}s=Error(C(426))}}else if(W&&a.mode&1){var P=lu(l);if(P!==null){!(P.flags&65536)&&(P.flags|=256),au(P,l,a,i,n),da(Pt(s,a));break e}}i=s=Pt(s,a),ee!==4&&(ee=2),rr===null?rr=[i]:rr.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,n&=-n,i.lanes|=n;var g=zd(i,s,n);qs(i,g);break e;case 1:a=s;var p=i.type,m=i.stateNode;if(!(i.flags&128)&&(typeof p.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(kn===null||!kn.has(m)))){i.flags|=65536,n&=-n,i.lanes|=n;var w=Md(i,a,n);qs(i,w);break e}}i=i.return}while(i!==null)}tf(t)}catch(_){n=_,Z===t&&t!==null&&(Z=t=t.return);continue}break}while(!0)}function ef(){var e=To.current;return To.current=$o,e===null?$o:e}function Na(){(ee===0||ee===3||ee===2)&&(ee=4),te===null||!(Qn&268435455)&&!(Qo&268435455)||fn(te,oe)}function Ro(e,n){var t=z;z|=2;var r=ef();(te!==e||oe!==n)&&(Ye=null,Wn(e,n));do try{Yg();break}catch(o){qd(e,o)}while(!0);if(pa(),z=t,To.current=r,Z!==null)throw Error(C(261));return te=null,oe=0,ee}function Yg(){for(;Z!==null;)nf(Z)}function Xg(){for(;Z!==null&&!wp();)nf(Z)}function nf(e){var n=of(e.alternate,e,Ce);e.memoizedProps=e.pendingProps,n===null?tf(e):Z=n,ba.current=null}function tf(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=Wg(t,n),t!==null){t.flags&=32767,Z=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ee=6,Z=null;return}}else if(t=Ug(t,n,Ce),t!==null){Z=t;return}if(n=n.sibling,n!==null){Z=n;return}Z=n=e}while(n!==null);ee===0&&(ee=5)}function An(e,n,t){var r=I,o=Oe.transition;try{Oe.transition=null,I=1,Jg(e,n,t,r)}finally{Oe.transition=o,I=r}return null}function Jg(e,n,t,r){do vt();while(gn!==null);if(z&6)throw Error(C(327));t=e.finishedWork;var o=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(C(177));e.callbackNode=null,e.callbackPriority=0;var i=t.lanes|t.childLanes;if(Np(e,i),e===te&&(Z=te=null,oe=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Qr||(Qr=!0,lf(go,function(){return vt(),null})),i=(t.flags&15990)!==0,t.subtreeFlags&15990||i){i=Oe.transition,Oe.transition=null;var l=I;I=1;var a=z;z|=4,ba.current=null,Vg(e,t),Xd(t,e),yg(dl),ho=!!cl,dl=cl=null,e.current=t,Kg(t),kp(),z=a,I=l,Oe.transition=i}else e.current=t;if(Qr&&(Qr=!1,gn=e,Oo=o),i=e.pendingLanes,i===0&&(kn=null),_p(t.stateNode),xe(e,X()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)o=n[t],r(o.value,{componentStack:o.stack,digest:o.digest});if(No)throw No=!1,e=Nl,Nl=null,e;return Oo&1&&e.tag!==0&&vt(),i=e.pendingLanes,i&1?e===Ol?or++:(or=0,Ol=e):or=0,Tn(),null}function vt(){if(gn!==null){var e=zc(Oo),n=Oe.transition,t=I;try{if(Oe.transition=null,I=16>e?16:e,gn===null)var r=!1;else{if(e=gn,gn=null,Oo=0,z&6)throw Error(C(331));var o=z;for(z|=4,$=e.current;$!==null;){var i=$,l=i.child;if($.flags&16){var a=i.deletions;if(a!==null){for(var s=0;s<a.length;s++){var c=a[s];for($=c;$!==null;){var d=$;switch(d.tag){case 0:case 11:case 15:tr(8,d,i)}var f=d.child;if(f!==null)f.return=d,$=f;else for(;$!==null;){d=$;var h=d.sibling,y=d.return;if(Gd(d),d===c){$=null;break}if(h!==null){h.return=y,$=h;break}$=y}}}var x=i.alternate;if(x!==null){var S=x.child;if(S!==null){x.child=null;do{var P=S.sibling;S.sibling=null,S=P}while(S!==null)}}$=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,$=l;else e:for(;$!==null;){if(i=$,i.flags&2048)switch(i.tag){case 0:case 11:case 15:tr(9,i,i.return)}var g=i.sibling;if(g!==null){g.return=i.return,$=g;break e}$=i.return}}var p=e.current;for($=p;$!==null;){l=$;var m=l.child;if(l.subtreeFlags&2064&&m!==null)m.return=l,$=m;else e:for(l=p;$!==null;){if(a=$,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Go(9,a)}}catch(_){Y(a,a.return,_)}if(a===l){$=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,$=w;break e}$=a.return}}if(z=o,Tn(),Ke&&typeof Ke.onPostCommitFiberRoot=="function")try{Ke.onPostCommitFiberRoot(Ao,e)}catch{}r=!0}return r}finally{I=t,Oe.transition=n}}return!1}function Su(e,n,t){n=Pt(t,n),n=zd(e,n,1),e=wn(e,n,1),n=fe(),e!==null&&(_r(e,1,n),xe(e,n))}function Y(e,n,t){if(e.tag===3)Su(e,e,t);else for(;n!==null;){if(n.tag===3){Su(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(kn===null||!kn.has(r))){e=Pt(t,e),e=Md(n,e,1),n=wn(n,e,1),e=fe(),n!==null&&(_r(n,1,e),xe(n,e));break}}n=n.return}}function Zg(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=fe(),e.pingedLanes|=e.suspendedLanes&t,te===e&&(oe&t)===t&&(ee===4||ee===3&&(oe&130023424)===oe&&500>X()-Ea?Wn(e,0):ja|=t),xe(e,n)}function rf(e,n){n===0&&(e.mode&1?(n=Ir,Ir<<=1,!(Ir&130023424)&&(Ir=4194304)):n=1);var t=fe();e=tn(e,n),e!==null&&(_r(e,n,t),xe(e,t))}function qg(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),rf(e,t)}function em(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(t=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(n),rf(e,t)}var of;of=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||ye.current)he=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return he=!1,Fg(e,n,t);he=!!(e.flags&131072)}else he=!1,W&&n.flags&1048576&&sd(n,Co,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;lo(e,n),e=n.pendingProps;var o=St(n,ce.current);yt(n,t),o=wa(null,n,r,e,o,t);var i=ka();return n.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,ve(r)?(i=!0,wo(n)):i=!1,n.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,ha(n),o.updater=Ko,n.stateNode=o,o._reactInternals=n,Sl(n,r,e,t),n=Cl(null,n,r,!0,i,t)):(n.tag=0,W&&i&&ua(n),de(null,n,o,t),n=n.child),n;case 16:r=n.elementType;e:{switch(lo(e,n),e=n.pendingProps,o=r._init,r=o(r._payload),n.type=r,o=n.tag=tm(r),e=ze(r,e),o){case 0:n=kl(null,n,r,e,t);break e;case 1:n=cu(null,n,r,e,t);break e;case 11:n=su(null,n,r,e,t);break e;case 14:n=uu(null,n,r,ze(r.type,e),t);break e}throw Error(C(306,r,""))}return n;case 0:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:ze(r,o),kl(e,n,r,o,t);case 1:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:ze(r,o),cu(e,n,r,o,t);case 3:e:{if(Fd(n),e===null)throw Error(C(387));r=n.pendingProps,i=n.memoizedState,o=i.element,gd(e,n),bo(n,r,null,t);var l=n.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},n.updateQueue.baseState=i,n.memoizedState=i,n.flags&256){o=Pt(Error(C(423)),n),n=du(e,n,r,t,o);break e}else if(r!==o){o=Pt(Error(C(424)),n),n=du(e,n,r,t,o);break e}else for(Pe=Sn(n.stateNode.containerInfo.firstChild),_e=n,W=!0,Ie=null,t=fd(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(wt(),r===o){n=rn(e,n,t);break e}de(e,n,r,t)}n=n.child}return n;case 5:return md(n),e===null&&yl(n),r=n.type,o=n.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,fl(r,o)?l=null:i!==null&&fl(r,i)&&(n.flags|=32),Bd(e,n),de(e,n,l,t),n.child;case 6:return e===null&&yl(n),null;case 13:return Ud(e,n,t);case 4:return ya(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=kt(n,null,r,t):de(e,n,r,t),n.child;case 11:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:ze(r,o),su(e,n,r,o,t);case 7:return de(e,n,n.pendingProps,t),n.child;case 8:return de(e,n,n.pendingProps.children,t),n.child;case 12:return de(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,o=n.pendingProps,i=n.memoizedProps,l=o.value,A(Po,r._currentValue),r._currentValue=l,i!==null)if(Fe(i.value,l)){if(i.children===o.children&&!ye.current){n=rn(e,n,t);break e}}else for(i=n.child,i!==null&&(i.return=n);i!==null;){var a=i.dependencies;if(a!==null){l=i.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=qe(-1,t&-t),s.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?s.next=s:(s.next=d.next,d.next=s),c.pending=s}}i.lanes|=t,s=i.alternate,s!==null&&(s.lanes|=t),vl(i.return,t,n),a.lanes|=t;break}s=s.next}}else if(i.tag===10)l=i.type===n.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(C(341));l.lanes|=t,a=l.alternate,a!==null&&(a.lanes|=t),vl(l,t,n),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===n){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}de(e,n,o.children,t),n=n.child}return n;case 9:return o=n.type,r=n.pendingProps.children,yt(n,t),o=Re(o),r=r(o),n.flags|=1,de(e,n,r,t),n.child;case 14:return r=n.type,o=ze(r,n.pendingProps),o=ze(r.type,o),uu(e,n,r,o,t);case 15:return Id(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:ze(r,o),lo(e,n),n.tag=1,ve(r)?(e=!0,wo(n)):e=!1,yt(n,t),Ld(n,r,o),Sl(n,r,o,t),Cl(null,n,r,!0,e,t);case 19:return Wd(e,n,t);case 22:return Ad(e,n,t)}throw Error(C(156,n.tag))};function lf(e,n){return Oc(e,n)}function nm(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ne(e,n,t,r){return new nm(e,n,t,r)}function Oa(e){return e=e.prototype,!(!e||!e.isReactComponent)}function tm(e){if(typeof e=="function")return Oa(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Jl)return 11;if(e===Zl)return 14}return 2}function Pn(e,n){var t=e.alternate;return t===null?(t=Ne(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function uo(e,n,t,r,o,i){var l=2;if(r=e,typeof e=="function")Oa(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case tt:return Hn(t.children,o,i,n);case Xl:l=8,o|=8;break;case Hi:return e=Ne(12,t,n,o|2),e.elementType=Hi,e.lanes=i,e;case Vi:return e=Ne(13,t,n,o),e.elementType=Vi,e.lanes=i,e;case Ki:return e=Ne(19,t,n,o),e.elementType=Ki,e.lanes=i,e;case mc:return Yo(t,o,i,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case pc:l=10;break e;case gc:l=9;break e;case Jl:l=11;break e;case Zl:l=14;break e;case un:l=16,r=null;break e}throw Error(C(130,e==null?e:typeof e,""))}return n=Ne(l,t,n,o),n.elementType=e,n.type=r,n.lanes=i,n}function Hn(e,n,t,r){return e=Ne(7,e,r,n),e.lanes=t,e}function Yo(e,n,t,r){return e=Ne(22,e,r,n),e.elementType=mc,e.lanes=t,e.stateNode={isHidden:!1},e}function Mi(e,n,t){return e=Ne(6,e,null,n),e.lanes=t,e}function Ii(e,n,t){return n=Ne(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function rm(e,n,t,r,o){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=vi(0),this.expirationTimes=vi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vi(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Ra(e,n,t,r,o,i,l,a,s){return e=new rm(e,n,t,a,s),n===1?(n=1,i===!0&&(n|=8)):n=0,i=Ne(3,null,null,n),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},ha(i),e}function om(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:nt,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function af(e){if(!e)return jn;e=e._reactInternals;e:{if(Jn(e)!==e||e.tag!==1)throw Error(C(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(ve(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(C(171))}if(e.tag===1){var t=e.type;if(ve(t))return ld(e,t,n)}return n}function sf(e,n,t,r,o,i,l,a,s){return e=Ra(t,r,!0,e,o,i,l,a,s),e.context=af(null),t=e.current,r=fe(),o=Cn(t),i=qe(r,o),i.callback=n??null,wn(t,i,o),e.current.lanes=o,_r(e,o,r),xe(e,r),e}function Xo(e,n,t,r){var o=n.current,i=fe(),l=Cn(o);return t=af(t),n.context===null?n.context=t:n.pendingContext=t,n=qe(i,l),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=wn(o,n,l),e!==null&&(Be(e,o,l,i),ro(e,o,l)),l}function Do(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function wu(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Da(e,n){wu(e,n),(e=e.alternate)&&wu(e,n)}function im(){return null}var uf=typeof reportError=="function"?reportError:function(e){console.error(e)};function La(e){this._internalRoot=e}Jo.prototype.render=La.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(C(409));Xo(e,n,null,null)};Jo.prototype.unmount=La.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Yn(function(){Xo(null,e,null,null)}),n[nn]=null}};function Jo(e){this._internalRoot=e}Jo.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ac();e={blockedOn:null,target:e,priority:n};for(var t=0;t<dn.length&&n!==0&&n<dn[t].priority;t++);dn.splice(t,0,e),t===0&&Fc(e)}};function za(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Zo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ku(){}function lm(e,n,t,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var c=Do(l);i.call(c)}}var l=sf(n,r,e,0,null,!1,!1,"",ku);return e._reactRootContainer=l,e[nn]=l.current,pr(e.nodeType===8?e.parentNode:e),Yn(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var c=Do(s);a.call(c)}}var s=Ra(e,0,!1,null,null,!1,!1,"",ku);return e._reactRootContainer=s,e[nn]=s.current,pr(e.nodeType===8?e.parentNode:e),Yn(function(){Xo(n,s,t,r)}),s}function qo(e,n,t,r,o){var i=t._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var a=o;o=function(){var s=Do(l);a.call(s)}}Xo(n,l,e,o)}else l=lm(t,n,e,o,r);return Do(l)}Mc=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Gt(n.pendingLanes);t!==0&&(na(n,t|1),xe(n,X()),!(z&6)&&(_t=X()+500,Tn()))}break;case 13:Yn(function(){var r=tn(e,1);if(r!==null){var o=fe();Be(r,e,1,o)}}),Da(e,1)}};ta=function(e){if(e.tag===13){var n=tn(e,134217728);if(n!==null){var t=fe();Be(n,e,134217728,t)}Da(e,134217728)}};Ic=function(e){if(e.tag===13){var n=Cn(e),t=tn(e,n);if(t!==null){var r=fe();Be(t,e,n,r)}Da(e,n)}};Ac=function(){return I};Bc=function(e,n){var t=I;try{return I=e,n()}finally{I=t}};tl=function(e,n,t){switch(n){case"input":if(Yi(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var o=Wo(r);if(!o)throw Error(C(90));yc(r),Yi(r,o)}}}break;case"textarea":xc(e,t);break;case"select":n=t.value,n!=null&&pt(e,!!t.multiple,n,!1)}};bc=$a;jc=Yn;var am={usingClientEntryPoint:!1,Events:[jr,lt,Wo,Pc,_c,$a]},Ht={findFiberByHostInstance:Bn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},sm={bundleType:Ht.bundleType,version:Ht.version,rendererPackageName:Ht.rendererPackageName,rendererConfig:Ht.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:on.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Tc(e),e===null?null:e.stateNode},findFiberByHostInstance:Ht.findFiberByHostInstance||im,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Yr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yr.isDisabled&&Yr.supportsFiber)try{Ao=Yr.inject(sm),Ke=Yr}catch{}}je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=am;je.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!za(n))throw Error(C(200));return om(e,n,null,t)};je.createRoot=function(e,n){if(!za(e))throw Error(C(299));var t=!1,r="",o=uf;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),n=Ra(e,1,!1,null,null,t,!1,r,o),e[nn]=n.current,pr(e.nodeType===8?e.parentNode:e),new La(n)};je.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(C(188)):(e=Object.keys(e).join(","),Error(C(268,e)));return e=Tc(n),e=e===null?null:e.stateNode,e};je.flushSync=function(e){return Yn(e)};je.hydrate=function(e,n,t){if(!Zo(n))throw Error(C(200));return qo(null,e,n,!0,t)};je.hydrateRoot=function(e,n,t){if(!za(e))throw Error(C(405));var r=t!=null&&t.hydratedSources||null,o=!1,i="",l=uf;if(t!=null&&(t.unstable_strictMode===!0&&(o=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),n=sf(n,null,e,1,t??null,o,!1,i,l),e[nn]=n.current,pr(e),r)for(e=0;e<r.length;e++)t=r[e],o=t._getVersion,o=o(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,o]:n.mutableSourceEagerHydrationData.push(t,o);return new Jo(n)};je.render=function(e,n,t){if(!Zo(n))throw Error(C(200));return qo(null,e,n,!1,t)};je.unmountComponentAtNode=function(e){if(!Zo(e))throw Error(C(40));return e._reactRootContainer?(Yn(function(){qo(null,null,e,!1,function(){e._reactRootContainer=null,e[nn]=null})}),!0):!1};je.unstable_batchedUpdates=$a;je.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!Zo(t))throw Error(C(200));if(e==null||e._reactInternals===void 0)throw Error(C(38));return qo(e,n,t,!1,r)};je.version="18.3.1-next-f1338f8080-20240426";function cf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(cf)}catch(e){console.error(e)}}cf(),uc.exports=je;var um=uc.exports,cm,Cu=um;cm=Ui.createRoot=Cu.createRoot,Ui.hydrateRoot=Cu.hydrateRoot;/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function kr(){return kr=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},kr.apply(null,arguments)}var mn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(mn||(mn={}));const Pu="popstate";function dm(e){e===void 0&&(e={});function n(o,i){let{pathname:l="/",search:a="",hash:s=""}=Zn(o.location.hash.substr(1));return!l.startsWith("/")&&!l.startsWith(".")&&(l="/"+l),Ll("",{pathname:l,search:a,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function t(o,i){let l=o.document.querySelector("base"),a="";if(l&&l.getAttribute("href")){let s=o.location.href,c=s.indexOf("#");a=c===-1?s:s.slice(0,c)}return a+"#"+(typeof i=="string"?i:Lo(i))}function r(o,i){Ma(o.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(i)+")")}return pm(n,t,r,e)}function J(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function Ma(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function fm(){return Math.random().toString(36).substr(2,8)}function _u(e,n){return{usr:e.state,key:e.key,idx:n}}function Ll(e,n,t,r){return t===void 0&&(t=null),kr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?Zn(n):n,{state:t,key:n&&n.key||r||fm()})}function Lo(e){let{pathname:n="/",search:t="",hash:r=""}=e;return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(n+=r.charAt(0)==="#"?r:"#"+r),n}function Zn(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));let r=e.indexOf("?");r>=0&&(n.search=e.substr(r),e=e.substr(0,r)),e&&(n.pathname=e)}return n}function pm(e,n,t,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,l=o.history,a=mn.Pop,s=null,c=d();c==null&&(c=0,l.replaceState(kr({},l.state,{idx:c}),""));function d(){return(l.state||{idx:null}).idx}function f(){a=mn.Pop;let P=d(),g=P==null?null:P-c;c=P,s&&s({action:a,location:S.location,delta:g})}function h(P,g){a=mn.Push;let p=Ll(S.location,P,g);t&&t(p,P),c=d()+1;let m=_u(p,c),w=S.createHref(p);try{l.pushState(m,"",w)}catch(_){if(_ instanceof DOMException&&_.name==="DataCloneError")throw _;o.location.assign(w)}i&&s&&s({action:a,location:S.location,delta:1})}function y(P,g){a=mn.Replace;let p=Ll(S.location,P,g);t&&t(p,P),c=d();let m=_u(p,c),w=S.createHref(p);l.replaceState(m,"",w),i&&s&&s({action:a,location:S.location,delta:0})}function x(P){let g=o.location.origin!=="null"?o.location.origin:o.location.href,p=typeof P=="string"?P:Lo(P);return p=p.replace(/ $/,"%20"),J(g,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,g)}let S={get action(){return a},get location(){return e(o,l)},listen(P){if(s)throw new Error("A history only accepts one active listener");return o.addEventListener(Pu,f),s=P,()=>{o.removeEventListener(Pu,f),s=null}},createHref(P){return n(o,P)},createURL:x,encodeLocation(P){let g=x(P);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:h,replace:y,go(P){return l.go(P)}};return S}var bu;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(bu||(bu={}));function gm(e,n,t){return t===void 0&&(t="/"),mm(e,n,t)}function mm(e,n,t,r){let o=typeof n=="string"?Zn(n):n,i=Ia(o.pathname||"/",t);if(i==null)return null;let l=df(e);hm(l);let a=null,s=Em(i);for(let c=0;a==null&&c<l.length;++c)a=_m(l[c],s);return a}function df(e,n,t,r){n===void 0&&(n=[]),t===void 0&&(t=[]),r===void 0&&(r="");let o=(i,l,a)=>{let s={relativePath:a===void 0?i.path||"":a,caseSensitive:i.caseSensitive===!0,childrenIndex:l,route:i};s.relativePath.startsWith("/")&&(J(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let c=_n([r,s.relativePath]),d=t.concat(s);i.children&&i.children.length>0&&(J(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),df(i.children,n,d,c)),!(i.path==null&&!i.index)&&n.push({path:c,score:Cm(c,i.index),routesMeta:d})};return e.forEach((i,l)=>{var a;if(i.path===""||!((a=i.path)!=null&&a.includes("?")))o(i,l);else for(let s of ff(i.path))o(i,l,s)}),n}function ff(e){let n=e.split("/");if(n.length===0)return[];let[t,...r]=n,o=t.endsWith("?"),i=t.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let l=ff(r.join("/")),a=[];return a.push(...l.map(s=>s===""?i:[i,s].join("/"))),o&&a.push(...l),a.map(s=>e.startsWith("/")&&s===""?"/":s)}function hm(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:Pm(n.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const ym=/^:[\w-]+$/,vm=3,xm=2,Sm=1,wm=10,km=-2,ju=e=>e==="*";function Cm(e,n){let t=e.split("/"),r=t.length;return t.some(ju)&&(r+=km),n&&(r+=xm),t.filter(o=>!ju(o)).reduce((o,i)=>o+(ym.test(i)?vm:i===""?Sm:wm),r)}function Pm(e,n){return e.length===n.length&&e.slice(0,-1).every((r,o)=>r===n[o])?e[e.length-1]-n[n.length-1]:0}function _m(e,n,t){let{routesMeta:r}=e,o={},i="/",l=[];for(let a=0;a<r.length;++a){let s=r[a],c=a===r.length-1,d=i==="/"?n:n.slice(i.length)||"/",f=bm({path:s.relativePath,caseSensitive:s.caseSensitive,end:c},d),h=s.route;if(!f)return null;Object.assign(o,f.params),l.push({params:o,pathname:_n([i,f.pathname]),pathnameBase:Nm(_n([i,f.pathnameBase])),route:h}),f.pathnameBase!=="/"&&(i=_n([i,f.pathnameBase]))}return l}function bm(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,r]=jm(e.path,e.caseSensitive,e.end),o=n.match(t);if(!o)return null;let i=o[0],l=i.replace(/(.)\/+$/,"$1"),a=o.slice(1);return{params:r.reduce((c,d,f)=>{let{paramName:h,isOptional:y}=d;if(h==="*"){let S=a[f]||"";l=i.slice(0,i.length-S.length).replace(/(.)\/+$/,"$1")}const x=a[f];return y&&!x?c[h]=void 0:c[h]=(x||"").replace(/%2F/g,"/"),c},{}),pathname:i,pathnameBase:l,pattern:e}}function jm(e,n,t){n===void 0&&(n=!1),t===void 0&&(t=!0),Ma(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,a,s)=>(r.push({paramName:a,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,n?void 0:"i"),r]}function Em(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return Ma(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function Ia(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,r=e.charAt(t);return r&&r!=="/"?null:e.slice(t)||"/"}function $m(e,n){n===void 0&&(n="/");let{pathname:t,search:r="",hash:o=""}=typeof e=="string"?Zn(e):e,i;return t?(t=pf(t),t.startsWith("/")?i=Eu(t.substring(1),"/"):i=Eu(t,n)):i=n,{pathname:i,search:Om(r),hash:Rm(o)}}function Eu(e,n){let t=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function Ai(e,n,t,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Tm(e){return e.filter((n,t)=>t===0||n.route.path&&n.route.path.length>0)}function Aa(e,n){let t=Tm(e);return n?t.map((r,o)=>o===t.length-1?r.pathname:r.pathnameBase):t.map(r=>r.pathnameBase)}function Ba(e,n,t,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=Zn(e):(o=kr({},e),J(!o.pathname||!o.pathname.includes("?"),Ai("?","pathname","search",o)),J(!o.pathname||!o.pathname.includes("#"),Ai("#","pathname","hash",o)),J(!o.search||!o.search.includes("#"),Ai("#","search","hash",o)));let i=e===""||o.pathname==="",l=i?"/":o.pathname,a;if(l==null)a=t;else{let f=n.length-1;if(!r&&l.startsWith("..")){let h=l.split("/");for(;h[0]==="..";)h.shift(),f-=1;o.pathname=h.join("/")}a=f>=0?n[f]:"/"}let s=$m(o,a),c=l&&l!=="/"&&l.endsWith("/"),d=(i||l===".")&&t.endsWith("/");return!s.pathname.endsWith("/")&&(c||d)&&(s.pathname+="/"),s}const pf=e=>e.replace(/\/\/+/g,"/"),_n=e=>pf(e.join("/")),Nm=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Om=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Rm=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Dm(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const gf=["post","put","patch","delete"];new Set(gf);const Lm=["get",...gf];new Set(Lm);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Cr(){return Cr=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Cr.apply(null,arguments)}const Fa=v.createContext(null),zm=v.createContext(null),Nn=v.createContext(null),ei=v.createContext(null),ln=v.createContext({outlet:null,matches:[],isDataRoute:!1}),mf=v.createContext(null);function Mm(e,n){let{relative:t}=n===void 0?{}:n;Tt()||J(!1);let{basename:r,navigator:o}=v.useContext(Nn),{hash:i,pathname:l,search:a}=vf(e,{relative:t}),s=l;return r!=="/"&&(s=l==="/"?r:_n([r,l])),o.createHref({pathname:s,search:a,hash:i})}function Tt(){return v.useContext(ei)!=null}function Nt(){return Tt()||J(!1),v.useContext(ei).location}function hf(e){v.useContext(Nn).static||v.useLayoutEffect(e)}function yf(){let{isDataRoute:e}=v.useContext(ln);return e?Jm():Im()}function Im(){Tt()||J(!1);let e=v.useContext(Fa),{basename:n,future:t,navigator:r}=v.useContext(Nn),{matches:o}=v.useContext(ln),{pathname:i}=Nt(),l=JSON.stringify(Aa(o,t.v7_relativeSplatPath)),a=v.useRef(!1);return hf(()=>{a.current=!0}),v.useCallback(function(c,d){if(d===void 0&&(d={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let f=Ba(c,JSON.parse(l),i,d.relative==="path");e==null&&n!=="/"&&(f.pathname=f.pathname==="/"?n:_n([n,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[n,r,l,i,e])}function Am(){let{matches:e}=v.useContext(ln),n=e[e.length-1];return n?n.params:{}}function vf(e,n){let{relative:t}=n===void 0?{}:n,{future:r}=v.useContext(Nn),{matches:o}=v.useContext(ln),{pathname:i}=Nt(),l=JSON.stringify(Aa(o,r.v7_relativeSplatPath));return v.useMemo(()=>Ba(e,JSON.parse(l),i,t==="path"),[e,l,i,t])}function Bm(e,n){return Fm(e,n)}function Fm(e,n,t,r){Tt()||J(!1);let{navigator:o}=v.useContext(Nn),{matches:i}=v.useContext(ln),l=i[i.length-1],a=l?l.params:{};l&&l.pathname;let s=l?l.pathnameBase:"/";l&&l.route;let c=Nt(),d;if(n){var f;let P=typeof n=="string"?Zn(n):n;s==="/"||(f=P.pathname)!=null&&f.startsWith(s)||J(!1),d=P}else d=c;let h=d.pathname||"/",y=h;if(s!=="/"){let P=s.replace(/^\//,"").split("/");y="/"+h.replace(/^\//,"").split("/").slice(P.length).join("/")}let x=gm(e,{pathname:y}),S=Km(x&&x.map(P=>Object.assign({},P,{params:Object.assign({},a,P.params),pathname:_n([s,o.encodeLocation?o.encodeLocation(P.pathname).pathname:P.pathname]),pathnameBase:P.pathnameBase==="/"?s:_n([s,o.encodeLocation?o.encodeLocation(P.pathnameBase).pathname:P.pathnameBase])})),i,t,r);return n&&S?v.createElement(ei.Provider,{value:{location:Cr({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:mn.Pop}},S):S}function Um(){let e=Xm(),n=Dm(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return v.createElement(v.Fragment,null,v.createElement("h2",null,"Unexpected Application Error!"),v.createElement("h3",{style:{fontStyle:"italic"}},n),t?v.createElement("pre",{style:o},t):null,null)}const Wm=v.createElement(Um,null);class Hm extends v.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){console.error("React Router caught the following error during render",n,t)}render(){return this.state.error!==void 0?v.createElement(ln.Provider,{value:this.props.routeContext},v.createElement(mf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Vm(e){let{routeContext:n,match:t,children:r}=e,o=v.useContext(Fa);return o&&o.static&&o.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=t.route.id),v.createElement(ln.Provider,{value:n},r)}function Km(e,n,t,r){var o;if(n===void 0&&(n=[]),t===void 0&&(t=null),r===void 0&&(r=null),e==null){var i;if(!t)return null;if(t.errors)e=t.matches;else if((i=r)!=null&&i.v7_partialHydration&&n.length===0&&!t.initialized&&t.matches.length>0)e=t.matches;else return null}let l=e,a=(o=t)==null?void 0:o.errors;if(a!=null){let d=l.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);d>=0||J(!1),l=l.slice(0,Math.min(l.length,d+1))}let s=!1,c=-1;if(t&&r&&r.v7_partialHydration)for(let d=0;d<l.length;d++){let f=l[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=d),f.route.id){let{loaderData:h,errors:y}=t,x=f.route.loader&&h[f.route.id]===void 0&&(!y||y[f.route.id]===void 0);if(f.route.lazy||x){s=!0,c>=0?l=l.slice(0,c+1):l=[l[0]];break}}}return l.reduceRight((d,f,h)=>{let y,x=!1,S=null,P=null;t&&(y=a&&f.route.id?a[f.route.id]:void 0,S=f.route.errorElement||Wm,s&&(c<0&&h===0?(Zm("route-fallback"),x=!0,P=null):c===h&&(x=!0,P=f.route.hydrateFallbackElement||null)));let g=n.concat(l.slice(0,h+1)),p=()=>{let m;return y?m=S:x?m=P:f.route.Component?m=v.createElement(f.route.Component,null):f.route.element?m=f.route.element:m=d,v.createElement(Vm,{match:f,routeContext:{outlet:d,matches:g,isDataRoute:t!=null},children:m})};return t&&(f.route.ErrorBoundary||f.route.errorElement||h===0)?v.createElement(Hm,{location:t.location,revalidation:t.revalidation,component:S,error:y,children:p(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):p()},null)}var xf=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(xf||{}),Sf=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Sf||{});function Gm(e){let n=v.useContext(Fa);return n||J(!1),n}function Qm(e){let n=v.useContext(zm);return n||J(!1),n}function Ym(e){let n=v.useContext(ln);return n||J(!1),n}function wf(e){let n=Ym(),t=n.matches[n.matches.length-1];return t.route.id||J(!1),t.route.id}function Xm(){var e;let n=v.useContext(mf),t=Qm(),r=wf();return n!==void 0?n:(e=t.errors)==null?void 0:e[r]}function Jm(){let{router:e}=Gm(xf.UseNavigateStable),n=wf(Sf.UseNavigateStable),t=v.useRef(!1);return hf(()=>{t.current=!0}),v.useCallback(function(o,i){i===void 0&&(i={}),t.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,Cr({fromRouteId:n},i)))},[e,n])}const $u={};function Zm(e,n,t){$u[e]||($u[e]=!0)}function qm(e,n){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function zl(e){let{to:n,replace:t,state:r,relative:o}=e;Tt()||J(!1);let{future:i,static:l}=v.useContext(Nn),{matches:a}=v.useContext(ln),{pathname:s}=Nt(),c=yf(),d=Ba(n,Aa(a,i.v7_relativeSplatPath),s,o==="path"),f=JSON.stringify(d);return v.useEffect(()=>c(JSON.parse(f),{replace:t,state:r,relative:o}),[c,f,o,t,r]),null}function Yt(e){J(!1)}function eh(e){let{basename:n="/",children:t=null,location:r,navigationType:o=mn.Pop,navigator:i,static:l=!1,future:a}=e;Tt()&&J(!1);let s=n.replace(/^\/*/,"/"),c=v.useMemo(()=>({basename:s,navigator:i,static:l,future:Cr({v7_relativeSplatPath:!1},a)}),[s,a,i,l]);typeof r=="string"&&(r=Zn(r));let{pathname:d="/",search:f="",hash:h="",state:y=null,key:x="default"}=r,S=v.useMemo(()=>{let P=Ia(d,s);return P==null?null:{location:{pathname:P,search:f,hash:h,state:y,key:x},navigationType:o}},[s,d,f,h,y,x,o]);return S==null?null:v.createElement(Nn.Provider,{value:c},v.createElement(ei.Provider,{children:t,value:S}))}function nh(e){let{children:n,location:t}=e;return Bm(Ml(n),t)}new Promise(()=>{});function Ml(e,n){n===void 0&&(n=[]);let t=[];return v.Children.forEach(e,(r,o)=>{if(!v.isValidElement(r))return;let i=[...n,o];if(r.type===v.Fragment){t.push.apply(t,Ml(r.props.children,i));return}r.type!==Yt&&J(!1),!r.props.index||!r.props.children||J(!1);let l={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=Ml(r.props.children,i)),t.push(l)}),t}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Il(){return Il=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Il.apply(null,arguments)}function th(e,n){if(e==null)return{};var t={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(n.indexOf(r)!==-1)continue;t[r]=e[r]}return t}function rh(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function oh(e,n){return e.button===0&&(!n||n==="_self")&&!rh(e)}const ih=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],lh="6";try{window.__reactRouterVersion=lh}catch{}const ah="startTransition",Tu=Zf[ah];function sh(e){let{basename:n,children:t,future:r,window:o}=e,i=v.useRef();i.current==null&&(i.current=dm({window:o,v5Compat:!0}));let l=i.current,[a,s]=v.useState({action:l.action,location:l.location}),{v7_startTransition:c}=r||{},d=v.useCallback(f=>{c&&Tu?Tu(()=>s(f)):s(f)},[s,c]);return v.useLayoutEffect(()=>l.listen(d),[l,d]),v.useEffect(()=>qm(r),[r]),v.createElement(eh,{basename:n,children:t,location:a.location,navigationType:a.action,navigator:l,future:r})}const uh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ch=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Al=v.forwardRef(function(n,t){let{onClick:r,relative:o,reloadDocument:i,replace:l,state:a,target:s,to:c,preventScrollReset:d,viewTransition:f}=n,h=th(n,ih),{basename:y}=v.useContext(Nn),x,S=!1;if(typeof c=="string"&&ch.test(c)&&(x=c,uh))try{let m=new URL(window.location.href),w=c.startsWith("//")?new URL(m.protocol+c):new URL(c),_=Ia(w.pathname,y);w.origin===m.origin&&_!=null?c=_+w.search+w.hash:S=!0}catch{}let P=Mm(c,{relative:o}),g=dh(c,{replace:l,state:a,target:s,preventScrollReset:d,relative:o,viewTransition:f});function p(m){r&&r(m),m.defaultPrevented||g(m)}return v.createElement("a",Il({},h,{href:x||P,onClick:S||i?r:p,ref:t,target:s}))});var Nu;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Nu||(Nu={}));var Ou;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Ou||(Ou={}));function dh(e,n){let{target:t,replace:r,state:o,preventScrollReset:i,relative:l,viewTransition:a}=n===void 0?{}:n,s=yf(),c=Nt(),d=vf(e,{relative:l});return v.useCallback(f=>{if(oh(f,t)){f.preventDefault();let h=r!==void 0?r:Lo(c)===Lo(d);s(e,{replace:h,state:o,preventScrollReset:i,relative:l,viewTransition:a})}},[c,s,d,r,o,t,e,i,l,a])}const fh="https://github.com/frankvane/vane-components";class ph extends jt.Component{constructor(){super(...arguments);gs(this,"state",{error:null})}static getDerivedStateFromError(t){return{error:t}}render(){var t;return this.state.error?u.jsxs("div",{className:"crash",role:"alert",children:[u.jsx("h3",{children:"这个页面炸了"}),u.jsx("pre",{children:String(((t=this.state.error)==null?void 0:t.stack)||this.state.error)}),u.jsx("button",{type:"button",onClick:()=>this.setState({error:null}),children:"重试"})]}):this.props.children}}function kf(e,n){return String(e.entries.indexOf(n)+1).padStart(2,"0")}function gh({demos:e,pathname:n}){var s;const{groups:t,entries:r,label:o}=e,i=(s=r.find(c=>n===`/demo/${c.meta.slug}`))==null?void 0:s.meta.group,[l,a]=v.useState(()=>{var d;const c=(d=t[0])==null?void 0:d.key;return Object.fromEntries(t.map(f=>[f.key,f.key===(i??c)]))});return v.useEffect(()=>{i&&a(c=>c[i]?c:{...c,[i]:!0})},[i]),u.jsxs("div",{className:"nav-section",children:[u.jsxs("div",{className:"nav-section-head",children:[u.jsx("span",{children:o}),u.jsxs("code",{children:[r.length," demos"]})]}),t.map(c=>{const d=r.filter(h=>h.meta.group===c.key);if(d.length===0)return null;const f=l[c.key]??!1;return u.jsxs("div",{className:"nav-group",children:[u.jsxs("button",{type:"button",className:`nav-group-head${i===c.key?" is-current":""}`,onClick:()=>a(h=>({...h,[c.key]:!f})),"aria-expanded":f,children:[u.jsx("span",{className:`nav-caret${f?" is-open":""}`,"aria-hidden":!0,children:"▸"}),c.label,u.jsx("code",{children:d.length})]}),f?u.jsx("div",{className:"nav-list",children:d.map(h=>u.jsxs(Al,{to:`/demo/${h.meta.slug}`,className:`nav-sub${n===`/demo/${h.meta.slug}`?" is-active":""}`,children:[u.jsx("em",{"aria-hidden":!0,children:kf(e,h)}),h.meta.title]},h.meta.slug))}):null]},c.key)})]})}function mh({demos:e}){var a;const{slug:n}=Am(),{entries:t,detail:r}=e,o=n?t.find(s=>s.meta.slug===n):void 0,i=(a=t[0])==null?void 0:a.meta.slug;if(!o)return u.jsx(zl,{to:i?`/demo/${i}`:"/",replace:!0});const l=t.indexOf(o)+1;return u.jsx(jt.Fragment,{children:r(o,l)},o.meta.slug)}function hh({config:e}){var f,h;const{pathname:n}=Nt(),[t,r]=v.useState(!1),[o,i]=v.useState(!1);v.useEffect(()=>r(!1),[n]);const l=v.useCallback(()=>i(y=>!y),[]);v.useEffect(()=>{const y=x=>{const S=x.target,P=S&&(S.tagName==="INPUT"||S.tagName==="TEXTAREA"||S.isContentEditable);x.key==="Escape"&&r(!1),!P&&(x.key==="g"||x.key==="G")&&!x.metaKey&&!x.ctrlKey&&i(g=>!g)};return window.addEventListener("keydown",y),()=>window.removeEventListener("keydown",y)},[]);const a=e.demos,s=(f=a.entries[0])==null?void 0:f.meta.slug,c=v.useMemo(()=>{if(!n.startsWith("/demo"))return e.crumb(n);const y=n.replace(/^\/demo\/?/,""),x=a.entries.find(S=>S.meta.slug===y);return x?`demo ${kf(a,x)} · ${x.meta.title}`:"demo · 逐项示例"},[n,e,a]),d=v.useMemo(()=>e.nav.map((y,x)=>({...y,no:String(x+1).padStart(2,"0")})),[e.nav]);return u.jsxs("div",{className:`shell${t?" is-nav-open":""}${o?" is-guides":""}`,children:[u.jsx("a",{className:"skip-link",href:"#main",onClick:y=>{y.preventDefault();const x=document.getElementById("main");x==null||x.setAttribute("tabindex","-1"),x==null||x.focus(),x==null||x.scrollIntoView({block:"start"})},children:"跳到内容"}),u.jsxs("aside",{className:"side","aria-label":"站点导航",children:[u.jsxs(Al,{to:"/",className:"brand",children:[u.jsx("span",{className:"brand-mark","aria-hidden":!0,children:e.brand}),u.jsxs("span",{children:[u.jsx("strong",{children:e.pkg}),u.jsx("em",{children:e.subtitle})]})]}),u.jsxs("nav",{children:[d.map(y=>u.jsxs(Al,{to:y.to,className:`nav-item${n===y.to?" is-active":""}`,"aria-current":n===y.to?"page":void 0,children:[u.jsx("em",{"aria-hidden":!0,children:y.no}),u.jsx("span",{children:y.label}),y.hint?u.jsx("code",{children:y.hint}):null]},y.to)),u.jsx(gh,{demos:e.demos,pathname:n})]}),u.jsxs("div",{className:"side-foot",children:[u.jsx("p",{children:e.footer[0]}),u.jsx("p",{className:"muted",children:e.footer[1]})]})]}),u.jsx("button",{type:"button",className:"scrim","aria-label":"关闭导航",tabIndex:t?0:-1,onClick:()=>r(!1)}),u.jsxs("div",{className:"main",id:"main",children:[u.jsxs("header",{className:"topbar",children:[u.jsx("button",{type:"button",className:"nav-toggle","aria-label":t?"关闭导航":"打开导航","aria-expanded":t,onClick:()=>r(y=>!y),children:u.jsx("span",{"aria-hidden":!0})}),u.jsx("span",{className:"crumb",children:c}),u.jsxs("div",{className:"topbar-right",children:[(h=e.stats)==null?void 0:h.map(y=>u.jsxs("span",{className:"topbar-stat",title:y.title,children:[u.jsx("b",{children:y.value})," ",y.label]},y.label)),u.jsxs("button",{type:"button",className:"topbar-btn","aria-pressed":o,onClick:l,title:"显示栏位参考线（快捷键 G）",children:[u.jsx("i",{"aria-hidden":!0}),"guides"]}),u.jsx("a",{className:"topbar-link",href:e.sourceUrl??fh,target:"_blank",rel:"noreferrer",children:"source ↗"})]})]}),u.jsx("div",{className:"guides","aria-hidden":!0}),u.jsx(v.Suspense,{fallback:u.jsx("div",{className:"loading",children:"loading modules…"}),children:u.jsx(ph,{children:u.jsxs(nh,{children:[e.routes.map(y=>u.jsx(Yt,{path:y.path,element:y.element},y.path)),u.jsx(Yt,{path:"/demo",element:u.jsx(zl,{to:s?`/demo/${s}`:"/",replace:!0})}),u.jsx(Yt,{path:"/demo/:slug",element:u.jsx(mh,{demos:e.demos})}),u.jsx(Yt,{path:"*",element:u.jsx(zl,{to:"/",replace:!0})})]})})})]})]})}function yh({config:e}){return u.jsx(sh,{children:u.jsx(hh,{config:e})})}const vh="modulepreload",xh=function(e,n){return new URL(e,n).href},Ru={},ni=function(n,t,r){let o=Promise.resolve();if(t&&t.length>0){const l=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),s=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));o=Promise.allSettled(t.map(c=>{if(c=xh(c,r),c in Ru)return;Ru[c]=!0;const d=c.endsWith(".css"),f=d?'[rel="stylesheet"]':"";if(!!r)for(let x=l.length-1;x>=0;x--){const S=l[x];if(S.href===c&&(!d||S.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${f}`))return;const y=document.createElement("link");if(y.rel=d?"stylesheet":vh,d||(y.as="script"),y.crossOrigin="",y.href=c,s&&y.setAttribute("nonce",s),document.head.appendChild(y),d)return new Promise((x,S)=>{y.addEventListener("load",x),y.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${c}`)))})}))}function i(l){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=l,window.dispatchEvent(a),!a.defaultPrevented)throw l}return o.then(l=>{for(const a of l||[])a.status==="rejected"&&i(a.reason);return n().catch(i)})},Qe=Object.freeze([{key:"applied",label:"已投递",tone:"neutral"},{key:"screening",label:"筛选中",tone:"info"},{key:"interview",label:"面试中",tone:"warn"},{key:"offer",label:"Offer",tone:"good"},{key:"hired",label:"已入职",tone:"good"},{key:"rejected",label:"已婉拒",tone:"bad"}]),Sh=["renderToolbar","renderFooter","renderCardBadges","renderCardActions","renderColumnHeader"];function wh(){const e=new Map,n=new Map,t=(l,a)=>{const s=e.get(l);if(s)for(const c of[...s])try{c(a)}catch(d){console.warn(`[PluginBus] handler error for event "${l}"`,d)}},r=(l,a)=>{let s=e.get(l);return s||(s=new Set,e.set(l,s)),s.add(a),()=>{s==null||s.delete(a)}},o=(l,a)=>{const s=c=>{a(c),i(l,s)};return r(l,s)},i=(l,a)=>{var s;if(!a){e.delete(l);return}(s=e.get(l))==null||s.delete(a)};return{emit:t,on:r,once:o,off:i,getData:l=>n.get(l),setData:(l,a)=>{const s=n.get(l);n.set(l,a),s!==a&&t(l,a)},deleteData:l=>{const a=n.has(l);n.delete(l),a&&t(l,void 0)},hasData:l=>n.has(l),getAll:()=>{const l={};return n.forEach((a,s)=>{l[s]=a}),l},clear:()=>{e.clear(),n.clear()}}}function Cf(e){const n=new Map(e.map(a=>[a.name,a])),t=[];for(const a of e)for(const s of a.dependencies??[])n.has(s)||t.push(`${a.name} -> ${s}`);const r=[],o=new Set,i=[...e],l=a=>(a.dependencies??[]).every(s=>o.has(s)||!n.has(s));for(;i.length>0;){const a=i.filter(l);if(a.length===0)throw new Error(`[vane/plugin-core] 插件循环依赖: ${i.map(c=>c.name).join(" <-> ")}`);let s=a[0];for(const c of a)(c.priority??0)>(s.priority??0)&&(s=c);r.push(s),o.add(s.name),i.splice(i.indexOf(s),1)}return t.length>0&&console.warn(`[vane/plugin-core] 以下插件依赖未注册，将被忽略:
  ${t.join(`
  `)}`),r}async function kh(e,n={}){const{timeout:t=3e3,name:r="anonymous",hook:o="unknown"}=n;if(!t||t<=0)return await e();let i;const l=new Promise((a,s)=>{i=setTimeout(()=>{s(new Error(`[vane/plugin-core] 插件 ${r} 的钩子 ${o} 超时(${t}ms)`))},t)});try{return await Promise.race([Promise.resolve().then(e),l])}finally{i&&clearTimeout(i)}}const Ch=new Set(["onMount","onUnmount","onPropsChange","onError"]);function Ph(e={}){const n=e.logger??console,t=e.sandbox??!0,r=e.timeout??3e3,o=[],i=[],l=new Map,a=()=>Cf([...l.values()].filter(c=>c.enabled!==!1)),s=c=>{l.set(c.name,{...c,enabled:c.enabled??!0}),c.init&&Promise.resolve(c.init()).catch(d=>{n.warn(`[PluginManager] init failed for ${c.name}`,d)})};return{register:s,registerAll:c=>{for(const d of c)s(d)},unregister:c=>{const d=l.get(c);d&&(d.destroy&&Promise.resolve(d.destroy()).catch(f=>{n.warn(`[PluginManager] destroy failed for ${d.name}`,f)}),l.delete(c))},getPlugin:c=>l.get(c),getAllPlugins:()=>[...l.values()],getEnabledPlugins:()=>[...l.values()].filter(c=>c.enabled!==!1),getExecutionOrder:a,enable:c=>{const d=l.get(c);d&&(d.enabled=!0)},disable:c=>{const d=l.get(c);d&&(d.enabled=!1)},has:c=>l.has(c),executeHook:async(c,d,...f)=>{var h,y;for(const x of a()){const S=(h=x.hooks)==null?void 0:h[c];if(typeof S!="function")continue;const P=x.sandbox??t,g=x.timeout??r;let p;try{p=P?await kh(()=>S(d,...f),{timeout:g,name:x.name,hook:String(c)}):await S(d,...f)}catch(m){if(o.push({plugin:x.name,hook:String(c),error:m}),n.warn(`[PluginManager] hook ${String(c)} failed in ${x.name}`,m),(y=e.onError)==null||y.call(e,x.name,String(c),m),c==="onError")break;continue}if(Ch.has(String(c))&&typeof p=="function"){i.push(p);continue}if(p===!1)return!1;if(p!==void 0&&p!==!0)return p}},clear:()=>{const c=i.splice(0);for(const d of c.reverse())try{d()}catch(f){n.warn("[PluginManager] cleanup failed",f)}for(const d of l.values())d.destroy&&Promise.resolve(d.destroy()).catch(f=>{n.warn(`[PluginManager] destroy failed for ${d.name}`,f)});l.clear()},getErrors:()=>[...o]}}var _h=Object.defineProperty,bh=(e,n,t)=>n in e?_h(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,jh=(e,n,t)=>bh(e,n+"",t);class ti extends jt.Component{constructor(){super(...arguments),jh(this,"state",{error:null})}static getDerivedStateFromError(n){return{error:n}}componentDidCatch(n,t){var r,o;console.warn("[vane/plugin-core] 插件渲染错误已被隔离",n,t),(o=(r=this.props).onError)==null||o.call(r,n,t)}render(){const{error:n}=this.state;return n?this.props.fallback?this.props.fallback(n):null:this.props.children}}let Xr=null;function Eh(e=!1){if(Xr&&!e)return Xr;const n=typeof window<"u"?window.innerWidth:1024,t=typeof window<"u"?window.innerHeight:768,r=typeof window<"u"&&window.devicePixelRatio||1,o=typeof navigator<"u"&&navigator.userAgent||"",i=/iPad|Tablet/i.test(o),l=/Mobile|Android|iPhone/i.test(o),a=typeof window<"u"&&("ontouchstart"in window||(navigator.maxTouchPoints??0)>0);return Xr={type:i?"tablet":l?"mobile":"desktop",os:o,browser:o,devicePixelRatio:r,viewportWidth:n,viewportHeight:t,isTouchDevice:a,isRetina:r>=2},Xr}function Du(e,n){if(Object.is(e,n))return!0;if(typeof e!="object"||typeof n!="object"||e===null||n===null)return!1;const t=Object.keys(e),r=Object.keys(n);return t.length!==r.length?!1:t.every(o=>Object.is(e[o],n[o]))}function $h(e){const{plugins:n,props:t,data:r,initialState:o,containerRef:i,enableDebug:l=!1,managerOptions:a,extendContext:s}=e,c=v.useRef(null),d=i??c,f=v.useRef(null);f.current||(f.current=Ph(a));const h=f.current,y=v.useRef(null);y.current||(y.current=wh());const x=y.current,S=v.useRef(new Map),[P,g]=v.useState(o??{}),[,p]=v.useState(0),m=v.useCallback(()=>p(N=>N+1),[]),w=v.useMemo(()=>Eh(),[]),_=v.useRef(n),b=_.current;(b.length!==n.length||n.some((N,O)=>N!==b[O]))&&(_.current=n);const j=_.current,T=j.map(N=>N.name).join("|");v.useLayoutEffect(()=>{h.clear(),h.registerAll(j),l&&console.debug("[vane/plugin-core] plugins registered:",T)},[j]),v.useLayoutEffect(()=>()=>{h.executeHook("onUnmount",R.current),h.clear()},[h]);const L=v.useMemo(()=>Cf(j),[j]),R=v.useRef(null),H=v.useRef(t);Du(H.current,t)||(H.current=t);const Se=H.current,we=v.useRef(r);Du(we.current,r)||(we.current=r);const an=we.current,Ln=v.useMemo(()=>{const N={props:Se,data:an,bus:x,refs:{container:d,getContainer:()=>d.current},state:P,setState:O=>g(M=>({...M,...O})),shared:S.current,deviceInfo:w,forceUpdate:m,getSize:()=>{const O=d.current;return O?{width:O.offsetWidth,height:O.offsetHeight}:{width:0,height:0}},logger:console};return s?s(N):N},[Se,an,P,w,x,s]);R.current=Ln;const Lt=v.useCallback(N=>{var M,U;let O=N;for(const Ue of L){const ke=(M=Ue.hooks)==null?void 0:M.transformProps;if(typeof ke=="function")try{O=ke(O)}catch(zn){(((U=R.current)==null?void 0:U.logger)??console).warn(`[plugin-core] ${Ue.name}.transformProps 执行失败，已跳过`,zn)}}return O},[L]),zt=v.useCallback(N=>{var M,U;let O=N;for(const Ue of L){const ke=(M=Ue.hooks)==null?void 0:M.transformData;if(typeof ke=="function")try{O=ke(R.current,O)}catch(zn){(((U=R.current)==null?void 0:U.logger)??console).warn(`[plugin-core] ${Ue.name}.transformData 执行失败，已跳过`,zn)}}return O},[L]),E=v.useCallback((N,...O)=>h.executeHook(N,R.current,...O),[h]);return{manager:h,bus:x,context:Ln,state:P,setState:Ln.setState,execute:E,transformProps:Lt,transformData:zt,orderedPlugins:L}}v.createContext(null);function Th(e,n,t){const{hook:r,position:o="after"}=t;return e.filter(i=>i.enabled!==!1).filter(i=>{var l;return typeof((l=i.hooks)==null?void 0:l[r])=="function"}).filter(i=>{var a;const l=(a=i.config)==null?void 0:a.slotPosition;return o==="before"?l==="before":o==="footer"?l===void 0||l==="after"||l==="footer":l===void 0||l==="after"}).sort((i,l)=>{var a,s;return(((a=i.config)==null?void 0:a.order)??0)-(((s=l.config)==null?void 0:s.order)??0)||(l.priority??0)-(i.priority??0)}).map(i=>{try{const l=i.hooks[r](n);return l==null?null:u.jsx(ti,{children:l},`vane-slot-${i.name}`)}catch(l){return console.warn(`[vane/plugin-core] 插件 ${i.name} 的 ${r} 渲染失败`,l),null}})}const Ot=v.createContext(null);function Pf(e){return[...e].sort((n,t)=>{var r,o;return(((r=n.config)==null?void 0:r.order)??0)-(((o=t.config)==null?void 0:o.order)??0)||(t.priority??0)-(n.priority??0)})}function Nh(e){const n={};for(const t of Sh)n[t]=Pf(e.filter(r=>r.enabled!==!1&&typeof r.hooks[t]=="function"));return n}function Oh({orderedPlugins:e,context:n,children:t}){const r=v.useMemo(()=>Nh(e),[e]),o=v.useMemo(()=>({orderedPlugins:e,context:n,slots:r}),[e,n,r]);return u.jsx(Ot.Provider,{value:o,children:t})}function Ua(e,n,t,...r){return e.reduce((o,i)=>{try{const l=i.hooks[t](n,...r);return l==null||o.push(u.jsx(ti,{children:l},`vcd-slot-${i.name}`)),o}catch(l){return console.warn(`[vane-candidate] 插件 ${i.name} 的 ${t} 渲染失败`,l),o}},[])}function _f(e,n){return typeof e=="function"?e(...n):e}function Rh(e,n,t,r,...o){const i=Pf(e.filter(l=>l.enabled!==!1&&typeof l.hooks[t]=="function"));for(let l=i.length-1;l>=0;l--){const a=i[l];try{const s=a.hooks[t](n,...o);if(s!=null)return u.jsx(ti,{children:s},`vcd-content-${a.name}`)}catch(s){console.warn(`[vane-candidate] 插件 ${a.name} 的 ${t} 渲染失败`,s)}}return _f(r,o)}function Lu(e){const n=v.useContext(Ot),t=n?n.slots[e]:null,r=n?n.context:null;return v.useMemo(()=>t&&r?Ua(t,r,e):[],[t,r,e])}function zu(e,n){const t=v.useContext(Ot),r=t?t.slots[e]:null,o=t?t.context:null;return v.useMemo(()=>r&&o?Ua(r,o,e,n):[],[r,o,e,n])}function Dh(e,n,t){const r=v.useContext(Ot),o=r?r.slots[e]:null,i=r?r.context:null;return v.useMemo(()=>o&&i?Ua(o,i,e,n,t):[],[o,i,e,n,t])}function bf(e,n,...t){const r=v.useContext(Ot),o=r?r.orderedPlugins:null,i=r?r.context:null;return v.useMemo(()=>o&&i?Rh(o,i,e,n,...t):_f(n,t),[o,i,e,...t])}function Lh(){const e=v.useContext(Ot);return(e==null?void 0:e.context)??null}const k={bg:"#ffffff",text:"#1f2328",muted:"#5d636a",faint:"#767d87",line:"#e3e6ea",lineStrong:"#d4d8de",accent:"#2563eb",accentInk:"#ffffff",accentWash:"#eef3fe",chipBg:"#f2f3f5",chipText:"#1f2328",good:"#1f7a3f",warn:"#b45309",bad:"#b42318"},hn={neutral:{fg:"#5d636a",bg:"#f2f3f5"},info:{fg:"#1c6ea8",bg:"#e7f1fa"},warn:{fg:"#8a4a06",bg:"#fdf1e2"},good:{fg:"#1f7a3f",bg:"#e8f5ec"},bad:{fg:"#b42318",bg:"#fdeceb"}};function K(e){return{background:e?k.accent:k.chipBg,color:e?k.accentInk:k.chipText,border:`1px solid ${k.lineStrong}`,borderRadius:"var(--vcd-radius, 6px)",fontSize:12,padding:"3px 9px",cursor:"pointer"}}const On=v.forwardRef(function(n,t){const{children:r,containerClassName:o,containerStyle:i,onMount:l,onUnmount:a,containerRefExternal:s}=n,c=v.useRef(null),d=s??c,[,f]=v.useState(0),h=Lh(),y=v.useRef(h);y.current=h;const x=v.useRef(n);x.current=n;const S=n.stages??Qe,g=(h==null?void 0:h.data)??n.data??[];v.useImperativeHandle(t,()=>({getContainer:()=>d.current,forceUpdate:()=>f(_=>_+1),getSize:()=>{const _=d.current;return _?{width:_.offsetWidth,height:_.offsetHeight}:{width:0,height:0}},getStageKeys:()=>(x.current.stages??Qe).map(_=>_.key)}),[d]),v.useEffect(()=>(l==null||l(),()=>a==null?void 0:a()),[]);const p=Lu("renderToolbar"),m=Lu("renderFooter"),w=bf("renderCards",()=>zh(S,g),{stages:S,candidates:g});return u.jsxs("div",{ref:d,className:`vcd-root ${o||""}`,style:{position:"relative",boxSizing:"border-box",background:k.bg,color:k.text,fontFamily:"var(--vcd-font, system-ui, -apple-system, 'Segoe UI', Roboto, 'PingFang SC', 'Microsoft YaHei', sans-serif)",fontSize:14,lineHeight:1.6,...i},children:[p.length>0&&u.jsx("div",{className:"vcd-toolbar",style:{display:"flex",flexWrap:"wrap",alignItems:"center",gap:8,padding:"10px 16px",borderBottom:`1px solid ${k.line}`},children:p}),u.jsx("div",{className:"vcd-board",style:{padding:"12px 16px 4px"},children:w}),m.length>0&&u.jsx("div",{className:"vcd-footer",style:{display:"flex",flexWrap:"wrap",gap:12,padding:"12px 16px 14px",borderTop:`1px solid ${k.line}`,alignItems:"center"},children:m}),r]})});On.displayName="CandidateCore";function zh(e,n){return u.jsxs("div",{className:"vcd-kanban",style:{display:"flex",gap:12,alignItems:"flex-start",overflowX:"auto",paddingBottom:8},children:[e.map(t=>{const r=n.filter(o=>o.stage===t.key);return u.jsx(Mh,{stage:t,list:r},t.key)}),n.length===0&&u.jsx("div",{style:{color:k.muted,fontSize:13,padding:"8px 2px"},children:"暂无候选人"})]})}function Mh({stage:e,list:n}){const t=Dh("renderColumnHeader",e,n.length),r=hn[e.tone??"neutral"]??hn.neutral;return u.jsxs("section",{"data-stage-key":e.key,className:"vcd-column",style:{flex:"1 0 220px",minWidth:220,background:k.chipBg,borderRadius:"var(--vcd-radius, 8px)",padding:8},children:[u.jsxs("header",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:8},children:[u.jsx("span",{style:{fontSize:12,fontWeight:700,color:r.fg,background:r.bg,padding:"1px 8px",borderRadius:999},children:e.label}),u.jsx("span",{style:{fontSize:12,color:k.muted},children:n.length}),u.jsx("span",{style:{marginLeft:"auto",display:"inline-flex",gap:6},children:t})]}),u.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:n.map(o=>u.jsx(Ih,{candidate:o},o.id))})]})}function Ih({candidate:e}){return u.jsx("article",{"data-candidate-id":e.id,className:"vcd-card",style:{background:k.bg,color:k.text,border:`1px solid ${k.line}`,borderRadius:"var(--vcd-radius, 8px)",padding:"10px 12px",boxSizing:"border-box"},children:u.jsx(Ah,{candidate:e})})}function Ah({candidate:e}){const n=zu("renderCardBadges",e),t=zu("renderCardActions",e),r=bf("renderCardBody",()=>Bh(e),e);return u.jsxs(u.Fragment,{children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[e.avatar?u.jsx("img",{src:e.avatar,alt:"",width:32,height:32,style:{borderRadius:"50%",objectFit:"cover",border:`1px solid ${k.line}`}}):u.jsx("span",{"aria-hidden":"true",style:{width:32,height:32,borderRadius:"50%",background:k.accentWash,color:k.accent,display:"inline-flex",alignItems:"center",justifyContent:"center",fontWeight:700,fontSize:13,flexShrink:0},children:e.name.slice(0,1)}),u.jsxs("div",{style:{minWidth:0,flex:1},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[u.jsx("strong",{style:{fontSize:14,color:k.text},children:e.name}),n.length>0&&u.jsx("span",{style:{display:"inline-flex",gap:4,flexWrap:"wrap"},children:n})]}),u.jsx("div",{style:{fontSize:12,color:k.muted},children:e.role})]})]}),r,t.length>0&&u.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6,marginTop:8,paddingTop:8,borderTop:`1px solid ${k.line}`},children:t})]})}function Bh(e){return u.jsxs(u.Fragment,{children:[e.summary&&u.jsx("p",{style:{margin:"6px 0 0",fontSize:12,color:k.muted,display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical",overflow:"hidden"},children:e.summary}),u.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"2px 12px",marginTop:6,fontSize:12,color:k.muted},children:[e.source&&u.jsxs("span",{children:["来源：",e.source]}),e.appliedAt&&u.jsxs("span",{children:["投递：",e.appliedAt]}),e.email&&u.jsx("span",{children:e.email}),e.phone&&u.jsx("span",{children:e.phone})]})]})}function jf(e,n){return e.findIndex(t=>t.key===n)}function Fh(e,n,t){const r=jf(e,n);if(r<0)return n;const o=Math.min(Math.max(r+t,0),e.length-1);return e[o].key}function Uh(e,n,t){const r={at:new Date().toISOString(),action:n,...t?{detail:t}:{}};return{...e,history:[r,...(e.history??[]).slice(0,49)]}}function Mu(e,n,t){return e.map(r=>r.id===n?{...r,...t}:r)}function Iu(e){const n=e==null?"":String(e);return`"${(/^[=+\-@]/.test(n)?`'${n}`:n).replace(/"/g,'""')}"`}function Wh(e){return e&&e.replace(/^(\d{3})\d*(\d{4})$/,"$1****$2")}function Hh(e){if(!e||!e.includes("@"))return e;const[n,t]=e.split("@");return n.length<=2?`${n[0]??"*"}***@${t}`:`${n[0]}***${n[n.length-1]}@${t}`}const Vh=new Set(["children","containerRefExternal"]);function Kh(e,n){const t=e,r=n,o=new Set([...Object.keys(t),...Object.keys(r)]);for(const i of o)if(!Vh.has(i)&&!Object.is(t[i],r[i]))return!1;return!0}function qn(e,n){const t=Array.isArray(n)?{plugins:n}:n,{plugins:r,enableDebug:o=!1}=t,i=v.forwardRef((l,a)=>{const s=v.useRef(null),[c,d]=v.useState(l.data),f=v.useRef(!1),h=v.useCallback(b=>({...b,updateCandidate:(j,T)=>{b.bus.emit("candidate:update",{id:j,patch:T})},moveCandidate:(j,T)=>{var R;const L=((R=b.props)==null?void 0:R.stages)??Qe;b.bus.emit("candidate:move",{id:j,delta:T,stages:L})}}),[]),y=$h({plugins:r,props:l,data:c,containerRef:s,extendContext:h,enableDebug:o});v.useEffect(()=>{l.data!==void 0&&(f.current=!0,d(l.data))},[l.data]);const x=v.useRef(()=>{});x.current=b=>{var j;y.bus.emit("candidate:change",{data:b}),(j=l.onDataChange)==null||j.call(l,b)},v.useEffect(()=>y.bus.on("candidate:update",b=>{const{id:j,patch:T}=b??{};!j||!T||d(L=>{const H=Mu(L??[],j,T);return x.current(H),H})}),[y.bus]),v.useEffect(()=>y.bus.on("candidate:move",b=>{const{id:j,delta:T,stages:L}=b??{};!j||!T||d(R=>{const H=R??[],Se=H.find(Ln=>Ln.id===j);if(!Se)return H;const we=Fh(L??Qe,Se.stage,T);if(we===Se.stage)return H;const an=Mu(H,j,Uh({...Se,stage:we},"阶段流转",we));return x.current(an),an})}),[y.bus]);const S=y.context,P=v.useMemo(()=>c===void 0?void 0:y.transformData(c),[c,y.transformData,y.state]),g=v.useMemo(()=>({...S,data:P}),[S,P]),p=v.useCallback((b,...j)=>y.execute(b,...j),[y.manager]),m=y.transformProps(l);v.useEffect(()=>{p("onMount")},[p,y.orderedPlugins]);const w=v.useRef(null);v.useEffect(()=>{const b=w.current;w.current=l,!(!b||Kh(b,l))&&p("onPropsChange",b,l)},[l,p]);const _={...m,containerRefExternal:s,debug:m.debug??o,onMount:()=>{var b;(b=m.onMount)==null||b.call(m)},onUnmount:()=>{var b;(b=m.onUnmount)==null||b.call(m)},children:u.jsxs(ti,{children:[Th(y.orderedPlugins,g,{hook:"renderOverlay"}),m.children]})};return u.jsx(Oh,{orderedPlugins:y.orderedPlugins,context:g,children:u.jsx(e,{ref:a,..._})})});return i.displayName="WithPlugins(CandidateCore)",i}const Gh="Score",Qh="岗位匹配分徽章：候选人卡片右上角展示 0-100 匹配分胶囊，按阈值着色（优秀绿 / 待定橙 / 偏低红）。纯展示，不改数据。",Yh="0.1.0",Xh=["score","renderCardBadges"],Jh=[{name:"renderCardBadges",when:"每次渲染，每张候选人卡片",description:"渲染匹配分徽章（阈值着色）"}],Zh=[],qh="只读取 candidate.score，不调用上下文方法",ey=[{name:"goodThreshold",type:"number",default:"80",description:"≥该值显示绿色"},{name:"warnThreshold",type:"number",default:"60",description:"≥该值显示橙色，否则红色"}],ny="withCandidatePlugins(CandidateCore, [createScorePlugin({ goodThreshold: 85 })])",Wa={name:Gh,description:Qh,since:Yh,tags:Xh,events:Jh,methods:Zh,methodsNote:qh,config:ey,example:ny};function ty(e,n,t){return e>=n?k.good:e>=t?k.warn:k.bad}const $r=(e={})=>{const n=e.goodThreshold??80,t=e.warnThreshold??60;return{name:"score",version:"0.1.0",description:Wa.description,priority:10,config:{order:10},hooks:{renderCardBadges:(r,o)=>{if(typeof o.score!="number")return null;const i=ty(o.score,n,t);return u.jsxs("span",{title:`匹配分 ${o.score}`,"aria-label":`匹配分 ${o.score}`,style:{fontSize:11,fontWeight:700,color:i,border:`1px solid ${i}`,borderRadius:999,padding:"0 8px",lineHeight:"18px"},children:[o.score,"分"]},"score")}}}};$r.meta=Wa;const ry="StageFlow",oy="阶段流转：卡片操作区「◀ 推进 ▶」按钮，按阶段定义推进/退回候选人（自动追加流转历史，越界自动禁用）。流转核心动作插件。",iy="0.1.0",ly=["stage-flow","renderCardActions"],ay=[{name:"renderCardActions",when:"每次渲染，每张候选人卡片",description:"渲染推进/退回按钮，边界禁用"}],sy=["moveCandidate(id, delta)"],uy=[{name:"step",type:"number",default:"1",description:"每次流转的步长"},{name:"allowBackward",type:"boolean",default:"true",description:"是否允许回退"}],cy="withCandidatePlugins(CandidateCore, [createStageFlowPlugin({ allowBackward: false })])",Ha={name:ry,description:oy,since:iy,tags:ly,events:ay,methods:sy,config:uy,example:cy},Rt=(e={})=>{const n=e.step??1,t=e.allowBackward??!0;return{name:"stage-flow",version:"0.1.0",description:Ha.description,priority:20,config:{order:20},hooks:{renderCardActions:(r,o)=>{var d;const i=((d=r.props)==null?void 0:d.stages)??Qe,l=jf(i,o.stage),a=l<=0,s=l<0||l>=i.length-1,c=f=>({...dy,...f?{color:k.faint,cursor:"not-allowed"}:{}});return u.jsxs("span",{style:{display:"inline-flex",gap:2},children:[t&&u.jsx("button",{type:"button",disabled:a,"aria-label":`将 ${o.name} 退回上一阶段`,onClick:()=>r.moveCandidate(o.id,-n),style:c(a),children:"◀"}),u.jsx("button",{type:"button",disabled:s,"aria-label":`将 ${o.name} 推进到下一阶段`,onClick:()=>r.moveCandidate(o.id,n),style:c(s),children:"▶"})]},"stage-flow")}}}},dy={border:`1px solid ${k.lineStrong}`,background:k.chipBg,color:k.chipText,borderRadius:6,fontSize:12,padding:"2px 8px",cursor:"pointer",lineHeight:"18px"};Rt.meta=Ha;const Rn=[{key:"applied",label:"已投递",tone:"neutral"},{key:"screening",label:"筛选中",tone:"info"},{key:"interview",label:"面试中",tone:"warn"},{key:"offer",label:"Offer",tone:"good"},{key:"hired",label:"已入职",tone:"good"},{key:"rejected",label:"已婉拒",tone:"bad"}],Dn=[{id:"c-001",name:"陈知远",role:"高级前端工程师",stage:"interview",score:92,tags:["重点","内推"],source:"内推",appliedAt:"2026-10-28",email:"zhiyuan.chen@example.com",phone:"13812345678",summary:"8 年前端经验，主导过千万级 DAU 项目的性能优化与组件库建设，React / TypeScript 深度使用者。",starred:!0,interview:{date:"周二 14:00",interviewer:"王工",mode:"onsite"},notes:[{id:"n-1",author:"张HR",at:"2026-10-30T10:20:00.000Z",text:"一面通过，系统设计扎实，二面约下周二。"}],history:[{at:"2026-10-30T02:00:00.000Z",action:"阶段流转",detail:"interview"}]},{id:"c-002",name:"林小满",role:"前端工程师",stage:"offer",score:88,tags:["急招"],source:"BOSS 直聘",appliedAt:"2026-10-25",email:"xiaoman.lin@example.com",phone:"13987654321",summary:"4 年经验，熟悉 React 生态与工程化，有跨端（小程序 / H5）交付经验。",offer:{salary:"28K · 15薪",status:"sent"},history:[{at:"2026-11-01T08:00:00.000Z",action:"Offer 已发出"}]},{id:"c-003",name:"赵启明",role:"前端负责人",stage:"screening",score:85,tags:["重点"],source:"猎头",appliedAt:"2026-11-01",email:"qiming.zhao@example.com",phone:"13655556666",summary:"10 年经验，带过 15 人前端团队，擅长中大型 B 端系统架构与团队管理。"},{id:"c-004",name:"王雨桐",role:"初级前端工程师",stage:"applied",score:64,source:"官网投递",appliedAt:"2026-11-02",email:"yutong.wang@example.com",phone:"15811112222",summary:"应届毕业生，两段大厂实习经历，熟悉 React 与 Node 基础。"},{id:"c-005",name:"刘一鸣",role:"高级前端工程师",stage:"interview",score:78,source:"内推",appliedAt:"2026-10-27",email:"yiming.liu@example.com",phone:"13733334444",summary:"6 年经验，可视化方向，Canvas / WebGL 项目经验丰富。",interview:{date:"周四 16:00",interviewer:"李总监",mode:"video"}},{id:"c-006",name:"孙婉清",role:"全栈工程师",stage:"screening",score:74,tags:["备选"],source:"拉勾",appliedAt:"2026-10-30",email:"wanqing.sun@example.com",phone:"15966667777",summary:"5 年经验，React + NestJS 全栈，独立负责过 SaaS 产品从 0 到 1。"},{id:"c-007",name:"周北辰",role:"前端工程师",stage:"hired",score:90,tags:["重点"],source:"内推",appliedAt:"2026-10-08",email:"beichen.zhou@example.com",phone:"18677778888",summary:"5 年经验，已确认入职，负责核心交易链路前端。",offer:{salary:"32K · 16薪",status:"accepted"}},{id:"c-008",name:"吴悠悠",role:"前端工程师",stage:"rejected",score:45,source:"官网投递",appliedAt:"2026-10-20",email:"youyou.wu@example.com",phone:"17788889999",summary:"3 年经验，方向以移动端 Hybrid 为主，与岗位匹配度一般。",history:[{at:"2026-10-26T06:00:00.000Z",action:"阶段流转",detail:"rejected"}]},{id:"c-009",name:"郑星野",role:"资深前端工程师",stage:"applied",score:81,tags:["内推"],source:"内推",appliedAt:"2026-11-02",email:"xingye.zheng@example.com",phone:"15099990000",summary:"7 年经验，开源组件库维护者，关注工程化与研发效能。"},{id:"c-010",name:"陈知远",role:"前端工程师",stage:"applied",score:58,source:"BOSS 直聘",appliedAt:"2026-11-01",email:"zhiyuan.chen@example.com",phone:"13812345678",summary:"同名候选人，疑似重复投递（DupCheck 演示用）。"},{id:"c-011",name:"何静姝",role:"技术专家",stage:"screening",score:83,archived:!0,source:"猎头",appliedAt:"2026-09-15",email:"jingshu.he@example.com",phone:"13122223333",summary:"暂无匹配岗位，归档至人才库（ArchivePool 演示用）。"}],fy={slug:"basic",title:"最小可用",group:"basic",intro:"内核 + 匹配分/阶段流转两个插件跑通装配链路；加插件就是往 withPlugins 数组里加一项。",why:"第一次接入时的起点：两个插件就能看出「徽章槽 + 操作槽 + 数据流转」的完整回路。",plugs:[{fn:"createScorePlugin",cfg:"{}",why:"卡片右上角渲染匹配分胶囊，最简单的装饰槽插件。"},{fn:"createStageFlowPlugin",cfg:"{}",why:"卡片操作区 ◀/▶，经 ctx.moveCandidate 流转并自动留 history。"}],props:[],note:"withPlugins 是 withCandidatePlugins 的别名；数据流转在装配层内部态完成，宿主可用 onDataChange 同步。"},py=qn(On,[$r(),Rt()]);function gy(e){return u.jsx(py,{data:Dn.slice(0,6),stages:Rn,containerStyle:{maxWidth:1120}})}const my=Object.freeze(Object.defineProperty({__proto__:null,default:gy,meta:fy},Symbol.toStringTag,{value:"Module"})),hy="DupCheck",yy="重复候选人检测：按姓名/邮箱/手机号扫描列表，命中者在卡片上显示「疑似重复」警示徽章，辅助 HR 及时发现重复投递。",vy="0.1.0",xy=["dup-check","renderCardBadges"],Sy=[{name:"renderCardBadges",when:"每次渲染，每张候选人卡片",description:"命中重复时渲染警示徽章"}],wy=[],ky="只读取 ctx.data 与 candidate 字段，不调用上下文方法",Cy=[{name:"fields",type:"('name'|'email'|'phone')[]",default:"['name','email','phone']",description:"参与判重的字段"}],Py="withCandidatePlugins(CandidateCore, [createDupCheckPlugin({ fields: ['email', 'phone'] })])",Va={name:hy,description:yy,since:vy,tags:xy,events:Sy,methods:wy,methodsNote:ky,config:Cy,example:Py};function Au(e,n){var r;const t=[];for(const o of n){const i=(r=e[o])==null?void 0:r.trim().toLowerCase();i&&t.push(`${o}:${i}`)}return t}const Ka=(e={})=>{const n=e.fields??["name","email","phone"];return{name:"dup-check",version:"0.1.0",description:Va.description,priority:20,config:{order:20},hooks:{renderCardBadges:(t,r)=>{const o=t.data??[],i=Au(r,n);if(i.length===0)return null;const l=new Set;for(const a of o)a.id!==r.id&&Au(a,n).some(s=>i.includes(s))&&l.add(a.id);return l.size===0?null:u.jsx("span",{title:`与另外 ${l.size} 位候选人疑似重复`,"aria-label":`疑似重复：另有 ${l.size} 位`,style:{fontSize:11,fontWeight:700,color:"#8a4a06",background:"#fdf1e2",border:"1px solid #ecd3ae",borderRadius:999,padding:"0 8px",lineHeight:"18px"},children:"疑似重复"},"dup-check")}}}};Ka.meta=Va;const _y='button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';function Dt({title:e,onClose:n,children:t,width:r=360,zIndex:o=55,closeLabel:i="关闭",headerExtra:l,align:a="center"}){const s=v.useRef(null),c=v.useRef(n);return c.current=n,v.useEffect(()=>{const d=s.current;if(!d||typeof document>"u")return;const f=document.activeElement,h=()=>Array.from(d.querySelectorAll(_y)).filter(S=>!S.hasAttribute("disabled"));(h()[0]??d).focus();const x=S=>{if(S.key==="Escape"){S.stopPropagation(),c.current();return}if(S.key!=="Tab")return;const P=h();if(P.length===0){S.preventDefault(),d.focus();return}const g=P[0],p=P[P.length-1];S.shiftKey&&document.activeElement===g?(S.preventDefault(),p.focus()):!S.shiftKey&&document.activeElement===p&&(S.preventDefault(),g.focus())};return document.addEventListener("keydown",x),()=>{document.removeEventListener("keydown",x);try{f==null||f.focus()}catch{}}},[]),u.jsx("div",{"data-vcd-overlay":"",onClick:d=>{d.target===d.currentTarget&&n()},style:{position:"absolute",inset:0,background:"rgba(0,0,0,0.45)",display:"flex",alignItems:a==="end"?"flex-end":"center",justifyContent:"center",zIndex:o},children:u.jsxs("div",{ref:s,role:"dialog","aria-modal":"true","aria-label":typeof e=="string"?e:void 0,tabIndex:-1,onClick:d=>d.stopPropagation(),style:{background:"#fff",color:k.text,borderRadius:a==="end"?"10px 10px 0 0":10,padding:18,width:r,maxWidth:"92%",maxHeight:"86%",overflow:"auto",boxShadow:"0 8px 30px rgba(0,0,0,0.25)",outline:"none"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:12},children:[u.jsx("strong",{style:{color:k.text,flex:1,minWidth:0},children:e}),l,u.jsx("button",{type:"button",onClick:n,style:K(!1),children:i})]}),t]})})}const by="Tag",jy="候选人标签：卡片徽章区展示标签 chips，浮层内可添加/删除标签（支持快捷建议标签），写回 candidate.tags。",Ey="0.1.0",$y=["tags","renderCardBadges","renderOverlay"],Ty=[{name:"renderCardBadges",when:"每次渲染，每张候选人卡片",description:"展示标签 chips 与管理入口"},{name:"renderOverlay",when:"state.tagEditingId 非空时",description:"标签管理浮层（添加/删除/快捷建议）"}],Ny=["updateCandidate(id, { tags })"],Oy=[{name:"suggestTags",type:"string[]",default:"['重点','备选','急招','内推']",description:"快捷标签建议"},{name:"maxTags",type:"number",default:"8",description:"每位候选人最多标签数"}],Ry="withCandidatePlugins(CandidateCore, [createTagPlugin({ suggestTags: ['重点','银牌'] })])",Ga={name:by,description:jy,since:Ey,tags:$y,events:Ty,methods:Ny,config:Oy,example:Ry},ri=(e={})=>{const n=e.suggestTags??["重点","备选","急招","内推"],t=e.maxTags??8;return{name:"tags",version:"0.1.0",description:Ga.description,priority:30,config:{order:30},hooks:{renderCardBadges:(r,o)=>{const i=o.tags??[],l=r.state.tagEditingId===o.id;return u.jsxs(jt.Fragment,{children:[i.slice(0,3).map(a=>u.jsx("span",{style:{fontSize:11,color:k.chipText,background:k.chipBg,border:`1px solid ${k.line}`,borderRadius:999,padding:"0 8px",lineHeight:"18px"},children:a},a)),i.length>3&&u.jsxs("span",{title:i.join("、"),"aria-label":`共 ${i.length} 个标签`,style:{fontSize:11,color:k.faint,lineHeight:"18px"},children:["+",i.length-3]}),u.jsx("button",{type:"button","aria-haspopup":"dialog","aria-expanded":l,"aria-label":`${o.name} 的标签管理`,onClick:()=>r.setState({tagEditingId:l?null:o.id}),style:{...K(!1),fontSize:11,padding:"0 6px",lineHeight:"16px"},children:"标签"})]},"tags")},renderOverlay:r=>{const o=r.state.tagEditingId;if(!o)return null;const i=(r.data??[]).find(d=>d.id===o);if(!i)return null;const l=i.tags??[],a=()=>r.setState({tagEditingId:null}),s=d=>{const f=d.trim();!f||l.includes(f)||l.length>=t||r.updateCandidate(o,{tags:[...l,f]})},c=d=>r.updateCandidate(o,{tags:l.filter(f=>f!==d)});return u.jsxs(Dt,{title:`标签管理 · ${i.name}`,onClose:a,width:340,zIndex:56,children:[u.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:6,marginBottom:10},children:[l.length===0&&u.jsx("span",{style:{color:k.muted,fontSize:13},children:"暂无标签"}),l.map(d=>u.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:4,fontSize:12,color:k.chipText,background:k.chipBg,border:`1px solid ${k.line}`,borderRadius:999,padding:"2px 6px 2px 10px"},children:[d,u.jsx("button",{type:"button","aria-label":`删除标签 ${d}`,onClick:()=>c(d),style:{border:"none",background:"transparent",color:k.bad,cursor:"pointer",fontSize:12,padding:0,lineHeight:1},children:"×"})]},d))]}),u.jsxs("form",{onSubmit:d=>{d.preventDefault();const f=d.currentTarget.elements.namedItem("tag");f!=null&&f.value&&(s(f.value),f.value="")},style:{display:"flex",gap:6,marginBottom:10},children:[u.jsx("input",{name:"tag","aria-label":"新标签名称",placeholder:"输入标签后回车",maxLength:12,style:{flex:1,border:`1px solid ${k.lineStrong}`,borderRadius:6,padding:"5px 8px",fontSize:13,color:k.text,background:"#fff"}}),u.jsx("button",{type:"submit",style:K(!0),children:"添加"})]}),u.jsxs("div",{children:[u.jsx("div",{style:{fontSize:12,color:k.muted,marginBottom:4},children:"快捷标签"}),u.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6},children:n.map(d=>u.jsx("button",{type:"button",onClick:()=>s(d),style:K(l.includes(d)),children:d},d))})]})]},"tags-overlay")}}}};ri.meta=Ga;const Dy="Offer",Ly="Offer 状态徽章：候选人带 offer 字段时展示状态胶囊（审批中灰 / 已发出蓝 / 已接受绿 / 已婉拒红），可自定义文案。纯展示。",zy="0.1.0",My=["offer","renderCardBadges"],Iy=[{name:"renderCardBadges",when:"每次渲染，每张候选人卡片",description:"candidate.offer 存在时渲染状态徽章"}],Ay=[],By="只读取 candidate.offer，不调用上下文方法",Fy=[{name:"labels",type:"Partial<Record<status, string>>",default:"内置中文文案",description:"各状态自定义文案"}],Uy="withCandidatePlugins(CandidateCore, [createOfferPlugin({ labels: { sent: '已发 Offer' } })])",Qa={name:Dy,description:Ly,since:zy,tags:My,events:Iy,methods:Ay,methodsNote:By,config:Fy,example:Uy},Wy={draft:"Offer 审批中",sent:"Offer 已发出",accepted:"已接受 Offer",declined:"已婉拒 Offer"},Hy={draft:{fg:"#5d636a",bg:"#f2f3f5"},sent:{fg:"#1c6ea8",bg:"#e7f1fa"},accepted:{fg:"#1f7a3f",bg:"#e8f5ec"},declined:{fg:"#b42318",bg:"#fdeceb"}},Ya=(e={})=>{const n={...Wy,...e.labels??{}};return{name:"offer",version:"0.1.0",description:Qa.description,priority:40,config:{order:40},hooks:{renderCardBadges:(t,r)=>{const o=r.offer;if(!o)return null;const i=Hy[o.status];return u.jsx("span",{title:o.salary?`${n[o.status]} · ${o.salary}`:n[o.status],"aria-label":n[o.status],style:{fontSize:11,fontWeight:700,color:i.fg,background:i.bg,borderRadius:999,padding:"0 8px",lineHeight:"18px"},children:n[o.status]},"offer")}}}};Ya.meta=Qa;const Vy="Star",Ky="星标收藏：卡片操作区 ☆/★ 一键切换星标，可选把星标候选人置顶到各自阶段列最前（transformData）。",Gy="0.1.0",Qy=["star","renderCardActions","transformData"],Yy=[{name:"renderCardActions",when:"每次渲染，每张候选人卡片",description:"星标切换按钮（aria-pressed）"},{name:"transformData",when:"pinTop 开启时，渲染前",description:"星标候选人置顶排序"}],Xy=["updateCandidate(id, { starred })"],Jy=[{name:"pinTop",type:"boolean",default:"true",description:"星标候选人在列内置顶"}],Zy="withCandidatePlugins(CandidateCore, [createStarPlugin({ pinTop: false })])",Xa={name:Vy,description:Ky,since:Gy,tags:Qy,events:Yy,methods:Xy,config:Jy,example:Zy},oi=(e={})=>{const n=e.pinTop??!0;return{name:"star",version:"0.1.0",description:Xa.description,priority:10,config:{order:10},hooks:{...n?{transformData:(t,r)=>{const o=r??[],i=o.filter(a=>a.starred),l=o.filter(a=>!a.starred);return[...i,...l]}}:{},renderCardActions:(t,r)=>{const o=!!r.starred;return u.jsx("button",{type:"button","aria-pressed":o,"aria-label":o?`取消星标 ${r.name}`:`星标 ${r.name}`,title:o?"取消星标":"星标",onClick:()=>t.updateCandidate(r.id,{starred:!o}),style:{border:"none",background:"transparent",cursor:"pointer",fontSize:14,padding:"2px 4px",color:o?"#c2410c":k.muted,lineHeight:1},children:o?"★":"☆"},"star")}}}};oi.meta=Xa;const qy="Note",ev="招聘备注：卡片操作区备注按钮（带条数角标），浮层内查看/新增/删除备注，写回 candidate.notes。面试沟通、背调结论都记在这里。",nv="0.1.0",tv=["note","renderCardActions","renderOverlay"],rv=[{name:"renderCardActions",when:"每次渲染，每张候选人卡片",description:"备注入口按钮"},{name:"renderOverlay",when:"state.noteEditingId 非空时",description:"备注管理浮层"}],ov=["updateCandidate(id, { notes })"],iv=[{name:"authorName",type:"string",default:"'我'",description:"备注作者署名"},{name:"maxNotes",type:"number",default:"50",description:"每位候选人最多保留备注条数"}],lv="withCandidatePlugins(CandidateCore, [createNotePlugin({ authorName: '张HR' })])",Ja={name:qy,description:ev,since:nv,tags:tv,events:rv,methods:ov,config:iv,example:lv},ii=(e={})=>{const n=e.authorName??"我",t=e.maxNotes??50;return{name:"note",version:"0.1.0",description:Ja.description,priority:30,config:{order:30},hooks:{renderCardActions:(r,o)=>{var l;const i=((l=o.notes)==null?void 0:l.length)??0;return u.jsxs("button",{type:"button","aria-haspopup":"dialog","aria-label":`${o.name} 的备注（${i} 条）`,onClick:()=>r.setState({noteEditingId:r.state.noteEditingId===o.id?null:o.id}),style:av,children:["备注",i>0?` (${i})`:""]},"note")},renderOverlay:r=>{const o=r.state.noteEditingId;if(!o)return null;const i=(r.data??[]).find(s=>s.id===o);if(!i)return null;const l=i.notes??[],a=()=>r.setState({noteEditingId:null});return u.jsxs(Dt,{title:`备注 · ${i.name}`,onClose:a,width:380,zIndex:56,children:[u.jsxs("form",{onSubmit:s=>{s.preventDefault();const c=s.currentTarget.elements.namedItem("text"),d=c==null?void 0:c.value.trim();d&&(r.updateCandidate(o,{notes:[...l,{id:`n-${Date.now()}`,author:n,at:new Date().toISOString(),text:d}].slice(-t)}),c&&(c.value=""))},style:{display:"flex",gap:6,marginBottom:12},children:[u.jsx("input",{name:"text","aria-label":"备注内容",placeholder:"记录沟通要点…",style:{flex:1,border:`1px solid ${k.lineStrong}`,borderRadius:6,padding:"5px 8px",fontSize:13,color:k.text,background:"#fff"}}),u.jsx("button",{type:"submit",style:K(!0),children:"添加"})]}),u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[l.length===0&&u.jsx("span",{style:{color:k.muted,fontSize:13},children:"暂无备注"}),l.slice().reverse().map(s=>u.jsxs("div",{style:{border:`1px solid ${k.line}`,borderRadius:8,padding:"8px 10px",fontSize:13},children:[u.jsxs("div",{style:{display:"flex",gap:8,marginBottom:2},children:[u.jsx("strong",{style:{color:k.text},children:s.author}),u.jsx("span",{style:{color:k.faint,fontSize:12},children:s.at.slice(0,16).replace("T"," ")}),u.jsx("button",{type:"button","aria-label":`删除备注 ${s.text.slice(0,8)}`,onClick:()=>r.updateCandidate(o,{notes:l.filter(c=>c.id!==s.id)}),style:{marginLeft:"auto",border:"none",background:"transparent",color:k.bad,cursor:"pointer",fontSize:12},children:"删除"})]}),u.jsx("div",{style:{color:k.text},children:s.text})]},s.id))]})]},"note-overlay")}}}},av={border:`1px solid ${k.lineStrong}`,background:k.chipBg,color:k.chipText,borderRadius:6,fontSize:12,padding:"2px 8px",cursor:"pointer"};ii.meta=Ja;function Bi({label:e,children:n}){return u.jsxs("div",{style:{marginBottom:10},children:[u.jsx("div",{style:{fontSize:12,color:k.muted,marginBottom:4},children:e}),u.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6},children:n})]})}const sv="InterviewSlot",uv="面试安排：卡片操作区「安排面试」入口，浮层内从时间槽/面试官/形式中点选保存到 candidate.interview，卡片正文显示面试信息条。",cv="0.1.0",dv=["interview-slot","renderCardActions","renderCardBody","renderOverlay"],fv=[{name:"renderCardActions",when:"每次渲染，每张候选人卡片",description:"安排/改期面试入口"},{name:"renderCardBody",when:"candidate.interview 存在时",description:"面试信息条（时间/形式/面试官）"},{name:"renderOverlay",when:"state.interviewEditingId 非空时",description:"面试安排浮层"}],pv=["updateCandidate(id, { interview })"],gv=[{name:"slots",type:"string[]",default:"['周二 14:00','周三 10:00','周四 16:00','周五 15:00']",description:"可选时间槽"},{name:"interviewers",type:"string[]",default:"['王工','李总监']",description:"可选面试官"},{name:"modes",type:"('onsite'|'video'|'phone')[]",default:"['onsite','video']",description:"面试形式"}],mv="withCandidatePlugins(CandidateCore, [createInterviewSlotPlugin({ slots: ['周一 10:00', '周三 14:00'] })])",Za={name:sv,description:uv,since:cv,tags:dv,events:fv,methods:pv,config:gv,example:mv},Bu={onsite:"现场",video:"视频",phone:"电话"},qa=(e={})=>{const n=e.slots??["周二 14:00","周三 10:00","周四 16:00","周五 15:00"],t=e.interviewers??["王工","李总监"],r=e.modes??["onsite","video"];return{name:"interview-slot",version:"0.1.0",description:Za.description,priority:40,config:{order:40},hooks:{renderCardActions:(o,i)=>{const l=o.state.interviewEditingId===i.id;return u.jsx("button",{type:"button","aria-haspopup":"dialog","aria-expanded":l,"aria-label":`安排 ${i.name} 的面试`,onClick:()=>o.setState({interviewEditingId:l?null:i.id}),style:hv,children:i.interview?"改期":"安排面试"},"interview")},renderCardBody:(o,i)=>{const l=i.interview;return l?u.jsxs("div",{style:{marginTop:6,fontSize:12,color:"#8a4a06",background:"#fdf1e2",borderRadius:6,padding:"4px 8px"},children:["📅 面试：",l.date,l.mode&&` · ${Bu[l.mode]??l.mode}`,l.interviewer&&` · ${l.interviewer}`]}):null},renderOverlay:o=>{const i=o.state.interviewEditingId;if(!i)return null;const l=(o.data??[]).find(c=>c.id===i);if(!l)return null;const a=()=>o.setState({interviewEditingId:null}),s=c=>{const d=l.interview??{date:n[0]};o.updateCandidate(i,{interview:{...d,...c}})};return u.jsxs(Dt,{title:`安排面试 · ${l.name}`,onClose:a,width:360,zIndex:56,children:[u.jsx(Bi,{label:"时间槽",children:n.map(c=>{var d,f;return u.jsx("button",{type:"button","aria-pressed":((d=l.interview)==null?void 0:d.date)===c,onClick:()=>s({date:c}),style:K(((f=l.interview)==null?void 0:f.date)===c),children:c},c)})}),u.jsx(Bi,{label:"面试官",children:t.map(c=>{var d,f;return u.jsx("button",{type:"button","aria-pressed":((d=l.interview)==null?void 0:d.interviewer)===c,onClick:()=>s({interviewer:c}),style:K(((f=l.interview)==null?void 0:f.interviewer)===c),children:c},c)})}),u.jsx(Bi,{label:"形式",children:r.map(c=>{var d,f;return u.jsx("button",{type:"button","aria-pressed":((d=l.interview)==null?void 0:d.mode)===c,onClick:()=>s({mode:c}),style:K(((f=l.interview)==null?void 0:f.mode)===c),children:Bu[c]??c},c)})}),l.interview&&u.jsx("button",{type:"button",onClick:()=>o.updateCandidate(i,{interview:void 0}),style:{...K(!1),marginTop:12},children:"取消面试安排"})]},"interview-overlay")}}}},hv={border:`1px solid ${k.lineStrong}`,background:k.chipBg,color:k.chipText,borderRadius:6,fontSize:12,padding:"2px 8px",cursor:"pointer"};qa.meta=Za;const yv="RejectTpl",vv="婉拒模板：卡片操作区「婉拒」入口，浮层内选择模板（可预览编辑），确认后候选人流转到婉拒阶段并保留流转历史。",xv="0.1.0",Sv=["reject-tpl","renderCardActions","renderOverlay"],wv=[{name:"renderCardActions",when:"每次渲染，每张候选人卡片",description:"婉拒入口按钮"},{name:"renderOverlay",when:"state.rejectEditingId 非空时",description:"模板选择与编辑浮层"}],kv=["updateCandidate(id, { stage })"],Cv=[{name:"templates",type:"RejectTemplate[]",default:"内置 2 套",description:"婉拒信模板（id/title/body）"},{name:"targetStage",type:"string",default:"'rejected'",description:"流转目标阶段 key"}],Pv="withCandidatePlugins(CandidateCore, [createRejectTplPlugin({ targetStage: 'rejected' })])",es={name:yv,description:vv,since:xv,tags:Sv,events:wv,methods:kv,config:Cv,example:Pv},_v=[{id:"polite",title:"礼貌婉拒",body:"感谢您对本职位的关注。经过综合评估，我们认为您与当前岗位的匹配度仍有差距，但您的经历给我们留下了深刻印象。我们会将您纳入人才库，如有更合适的机会将第一时间与您联系。祝求职顺利！"},{id:"skill-gap",title:"技能方向不符",body:"感谢您抽出时间参与面试。该岗位更侧重 {{gap}} 方向的经验，与您当前的技术栈存在一定差异，故本次未能推进。期待未来在更匹配的岗位合作。"}],li=(e={})=>{const n=e.templates??_v,t=e.targetStage??"rejected";return{name:"reject-tpl",version:"0.1.0",description:es.description,priority:50,config:{order:50},hooks:{renderCardActions:(r,o)=>{const i=r.state.rejectEditingId===o.id;return u.jsx("button",{type:"button","aria-haspopup":"dialog","aria-expanded":i,"aria-label":`婉拒 ${o.name}`,onClick:()=>r.setState({rejectEditingId:i?null:o.id}),style:bv,children:"婉拒"},"reject")},renderOverlay:r=>{const o=r.state.rejectEditingId;if(!o)return null;const i=(r.data??[]).find(c=>c.id===o);if(!i)return null;const l=r.state.rejectTplId??n[0].id,a=n.find(c=>c.id===l)??n[0],s=()=>r.setState({rejectEditingId:null,rejectTplId:null});return u.jsxs(Dt,{title:`婉拒 · ${i.name}`,onClose:s,width:400,zIndex:57,children:[u.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6,marginBottom:10},children:n.map(c=>u.jsx("button",{type:"button","aria-pressed":c.id===a.id,onClick:()=>r.setState({rejectTplId:c.id}),style:K(c.id===a.id),children:c.title},c.id))}),u.jsx("textarea",{"aria-label":"婉拒信内容",defaultValue:a.body,rows:6,style:{width:"100%",boxSizing:"border-box",border:`1px solid ${k.lineStrong}`,borderRadius:6,padding:"8px 10px",fontSize:13,color:k.text,background:"#fff",resize:"vertical",marginBottom:12}},a.id),u.jsxs("div",{style:{display:"flex",gap:8,justifyContent:"flex-end"},children:[u.jsx("button",{type:"button",onClick:s,style:K(!1),children:"取消"}),u.jsx("button",{type:"button",onClick:()=>{r.updateCandidate(o,{stage:t}),s()},style:K(!0),children:"确认婉拒"})]})]},"reject-overlay")}}}},bv={border:`1px solid ${k.lineStrong}`,background:k.chipBg,color:"#b42318",borderRadius:6,fontSize:12,padding:"2px 8px",cursor:"pointer"};li.meta=es;const jv="Filter",Ev="阶段/标签筛选：工具栏阶段与标签下拉（标签选项可配置或自动从数据收集），transformData 按所选条件过滤看板。",$v="0.1.0",Tv=["filter","renderToolbar","transformData"],Nv=[{name:"renderToolbar",when:"每次渲染，工具栏",description:"阶段/标签筛选控件与清除按钮"},{name:"transformData",when:"渲染前，筛选条件变化时重跑",description:"按 filterStage / filterTag 过滤"}],Ov=[],Rv="通过 ctx.setState({ filterStage, filterTag }) 驱动",Dv=[{name:"tagOptions",type:"string[]",default:"自动从数据收集",description:"可选的标签筛选项"}],Lv="withCandidatePlugins(CandidateCore, [createFilterPlugin({ tagOptions: ['重点', '内推'] })])",ns={name:jv,description:Ev,since:$v,tags:Tv,events:Nv,methods:Ov,methodsNote:Rv,config:Dv,example:Lv},ai=(e={})=>({name:"filter",version:"0.1.0",description:ns.description,priority:50,config:{order:50},hooks:{transformData:(n,t)=>{const r=n.state.filterStage,o=n.state.filterTag;return!r&&!o?t:(t??[]).filter(l=>(!r||l.stage===r)&&(!o||(l.tags??[]).includes(o)))},renderToolbar:n=>{var a;const t=((a=n.props)==null?void 0:a.stages)??Qe,r=n.state.filterStage??"",o=n.state.filterTag??"",i=e.tagOptions??Array.from(new Set((n.data??[]).flatMap(s=>s.tags??[]))),l=!!(r||o);return u.jsxs("span",{style:{display:"inline-flex",gap:6,alignItems:"center"},children:[u.jsxs("select",{"aria-label":"按阶段筛选",value:r,onChange:s=>n.setState({filterStage:s.target.value||void 0}),style:Fu,children:[u.jsx("option",{value:"",children:"全部阶段"}),t.map(s=>u.jsx("option",{value:s.key,children:s.label},s.key))]}),i.length>0&&u.jsxs("select",{"aria-label":"按标签筛选",value:o,onChange:s=>n.setState({filterTag:s.target.value||void 0}),style:Fu,children:[u.jsx("option",{value:"",children:"全部标签"}),i.map(s=>u.jsx("option",{value:s,children:s},s))]}),l&&u.jsx("button",{type:"button",onClick:()=>n.setState({filterStage:void 0,filterTag:void 0}),style:K(!1),children:"清除筛选"})]},"filter")}}}),Fu={border:`1px solid ${k.lineStrong}`,borderRadius:6,fontSize:12,padding:"3px 6px",background:"#fff",color:k.text};ai.meta=ns;const zv="Search",Mv="关键词搜索：工具栏搜索框（姓名/岗位/摘要/标签/来源），transformData 实时过滤看板，空关键词不过滤。",Iv="0.1.0",Av=["search","renderToolbar","transformData"],Bv=[{name:"renderToolbar",when:"每次渲染，工具栏",description:"搜索输入框"},{name:"transformData",when:"渲染前，关键词变化时重跑",description:"按 searchKeyword 匹配过滤"}],Fv=[],Uv="通过 ctx.setState({ searchKeyword }) 驱动",Wv=[{name:"fields",type:"('name'|'role'|'summary'|'tags'|'source')[]",default:"全部字段",description:"参与搜索的字段"}],Hv="withCandidatePlugins(CandidateCore, [createSearchPlugin({ fields: ['name', 'role'] })])",ts={name:zv,description:Mv,since:Iv,tags:Av,events:Bv,methods:Fv,methodsNote:Uv,config:Wv,example:Hv};function Vv(e,n,t){const r=n.toLowerCase();for(const o of t){const i=e[o];if(typeof i=="string"&&i.toLowerCase().includes(r)||Array.isArray(i)&&i.some(l=>l.toLowerCase().includes(r)))return!0}return!1}const si=(e={})=>{const n=e.fields??["name","role","summary","tags","source"];return{name:"search",version:"0.1.0",description:ts.description,priority:40,config:{order:40},hooks:{transformData:(t,r)=>{var i;const o=(i=t.state.searchKeyword)==null?void 0:i.trim();return o?(r??[]).filter(l=>Vv(l,o,n)):r},renderToolbar:t=>{const r=t.state.searchKeyword??"";return u.jsx("span",{style:{display:"inline-flex",alignItems:"center"},children:u.jsx("input",{type:"search","aria-label":"搜索候选人",placeholder:"搜索姓名 / 岗位 / 标签…",defaultValue:r,onChange:o=>t.setState({searchKeyword:o.target.value||void 0}),style:{border:`1px solid ${k.lineStrong}`,borderRadius:6,fontSize:12,padding:"4px 8px",width:180,color:k.text,background:"#fff"}})},"search")}}}};si.meta=ts;const Kv="BatchOp",Gv="批量操作：工具栏「批量」进入选择模式，卡片出现复选框，支持全选/清空/批量流转到指定阶段/批量归档。写操作逐条走 updateCandidate / moveCandidate。",Qv="0.1.0",Yv=["batch-op","renderToolbar","renderCardActions"],Xv=[{name:"renderToolbar",when:"每次渲染，工具栏",description:"批量开关与批量操作按钮组"},{name:"renderCardActions",when:"批量模式开启时",description:"卡片复选框"}],Jv=["moveCandidate(id, delta)","updateCandidate(id, { stage | archived })"],Zv=[{name:"targetStages",type:"StageConfig[]",default:"跟随核心阶段定义",description:"批量流转目标阶段"}],qv="withCandidatePlugins(CandidateCore, [createBatchOpPlugin()])",rs={name:Kv,description:Gv,since:Qv,tags:Yv,events:Xv,methods:Jv,config:Zv,example:qv},ui=(e={})=>({name:"batch-op",version:"0.1.0",description:rs.description,priority:30,config:{order:30},hooks:{renderToolbar:n=>{var l;const t=!!n.state.batchMode,r=n.state.batchSelected??[],o=e.targetStages??((l=n.props)==null?void 0:l.stages)??Qe,i=(n.data??[]).filter(a=>!a.archived);return u.jsxs("span",{style:{display:"inline-flex",gap:6,alignItems:"center"},children:[u.jsx("button",{type:"button","aria-pressed":t,onClick:()=>n.setState({batchMode:!t,batchSelected:[]}),style:K(t),children:"批量"}),t&&u.jsxs(u.Fragment,{children:[u.jsx("button",{type:"button","aria-label":"全选当前候选人",onClick:()=>n.setState({batchSelected:i.map(a=>a.id)}),style:K(!1),children:"全选"}),u.jsx("button",{type:"button","aria-label":"清空选择",onClick:()=>n.setState({batchSelected:[]}),style:K(!1),children:"清空"}),u.jsxs("select",{"aria-label":"批量流转到阶段",value:"",disabled:r.length===0,onChange:a=>{const s=a.target.value;if(s){for(const c of r){const d=i.find(y=>y.id===c);if(!d)continue;const f=o.findIndex(y=>y.key===d.stage),h=o.findIndex(y=>y.key===s);f>=0&&h>=0?n.moveCandidate(c,h-f):n.updateCandidate(c,{stage:s})}n.setState({batchSelected:[]})}},style:{...e0,...r.length===0?{color:k.faint}:{}},children:[u.jsxs("option",{value:"",children:["流转到…",r.length>0?`（已选 ${r.length}）`:""]}),o.map(a=>u.jsx("option",{value:a.key,children:a.label},a.key))]}),u.jsx("button",{type:"button",disabled:r.length===0,"aria-label":`归档已选 ${r.length} 位候选人`,onClick:()=>{for(const a of r)n.updateCandidate(a,{archived:!0});n.setState({batchSelected:[]})},style:{...K(!1),...r.length===0?{color:k.faint,cursor:"not-allowed"}:{}},children:"归档"})]})]},"batch-op")},renderCardActions:(n,t)=>{if(!n.state.batchMode)return null;const r=n.state.batchSelected??[],o=r.includes(t.id);return u.jsxs("label",{style:{display:"inline-flex",alignItems:"center",gap:4,fontSize:12,color:k.muted},children:[u.jsx("input",{type:"checkbox",checked:o,"aria-label":`选择 ${t.name}`,onChange:()=>n.setState({batchSelected:o?r.filter(i=>i!==t.id):[...r,t.id]})}),"选择"]},"batch-check")}}}),e0={border:`1px solid ${k.lineStrong}`,borderRadius:6,fontSize:12,padding:"3px 6px",background:"#fff",color:k.text};ui.meta=rs;const n0="ViewSwitch",t0="看板/列表视图切换：工具栏互斥按钮切换 state.view，list 模式经 renderCards 内容覆盖槽渲染紧凑表格视图，kanban 模式回落核心默认看板。",r0="0.1.0",o0=["view-switch","renderToolbar","renderCards"],i0=[{name:"renderToolbar",when:"每次渲染，工具栏",description:"看板/列表切换按钮组"},{name:"renderCards",when:"state.view 为 list 时",description:"渲染列表视图（覆盖默认看板）"}],l0=[],a0="通过 ctx.setState({ view }) 驱动",s0=[{name:"pageSize",type:"number",default:"0",description:"列表视图条数上限（0 = 不分页）"}],u0="withCandidatePlugins(CandidateCore, [createViewSwitchPlugin({ pageSize: 20 })])",os={name:n0,description:t0,since:r0,tags:o0,events:i0,methods:l0,methodsNote:a0,config:s0,example:u0},is=(e={})=>{const n=e.pageSize??0;return{name:"view-switch",version:"0.1.0",description:os.description,priority:70,config:{order:70},hooks:{renderToolbar:t=>{const r=t.state.view??"kanban";return u.jsxs("span",{style:{display:"inline-flex",gap:0},children:[u.jsx("button",{type:"button","aria-pressed":r==="kanban",onClick:()=>t.setState({view:"kanban"}),style:{...K(r==="kanban"),borderRadius:"6px 0 0 6px"},children:"看板"}),u.jsx("button",{type:"button","aria-pressed":r==="list",onClick:()=>t.setState({view:"list"}),style:{...K(r==="list"),borderRadius:"0 6px 6px 0",marginLeft:-1},children:"列表"})]},"view-switch")},renderCards:(t,r)=>{if((t.state.view??"kanban")!=="list")return null;const o=r.stages??Qe,i=a=>{var s;return((s=o.find(c=>c.key===a))==null?void 0:s.label)??a};let l=r.candidates;return n>0&&(l=l.slice(0,n)),u.jsxs("div",{role:"table","aria-label":"候选人列表视图",style:{border:`1px solid ${k.line}`,borderRadius:"var(--vcd-radius, 8px)",overflow:"hidden"},children:[u.jsxs("div",{role:"row",style:{display:"grid",gridTemplateColumns:"2fr 1.4fr 1fr 1fr",background:k.chipBg,fontSize:12,fontWeight:700,color:k.muted,padding:"6px 12px",gap:8},children:[u.jsx("span",{children:"候选人"}),u.jsx("span",{children:"阶段"}),u.jsx("span",{children:"来源"}),u.jsx("span",{children:"投递时间"})]}),l.map((a,s)=>{var d;const c=hn[((d=o.find(f=>f.key===a.stage))==null?void 0:d.tone)??"neutral"]??hn.neutral;return u.jsxs("div",{role:"row","data-candidate-id":a.id,style:{display:"grid",gridTemplateColumns:"2fr 1.4fr 1fr 1fr",padding:"8px 12px",gap:8,fontSize:13,borderTop:s===0?"none":`1px solid ${k.line}`,alignItems:"center"},children:[u.jsxs("span",{style:{color:k.text,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:[u.jsx("strong",{children:a.name}),u.jsxs("span",{style:{color:k.muted},children:[" · ",a.role]})]}),u.jsx("span",{children:u.jsx("span",{style:{fontSize:11,fontWeight:700,color:c.fg,background:c.bg,borderRadius:999,padding:"0 8px",lineHeight:"18px"},children:i(a.stage)})}),u.jsx("span",{style:{color:k.muted,fontSize:12},children:a.source??"—"}),u.jsx("span",{style:{color:k.muted,fontSize:12},children:a.appliedAt??"—"})]},a.id)}),l.length===0&&u.jsx("div",{style:{padding:"12px",color:k.muted,fontSize:13},children:"暂无候选人"})]},"list-view")}}}};is.meta=os;const c0="ArchivePool",d0="人才库归档池：transformData 把已归档候选人从主看板滤除，工具栏「人才库」浮层支持一键恢复，卡片操作区提供归档入口。",f0="0.1.0",p0=["archive-pool","transformData","renderToolbar","renderOverlay","renderCardActions"],g0=[{name:"transformData",when:"渲染前",description:"滤除 archived 候选人"},{name:"renderToolbar",when:"每次渲染，工具栏",description:"人才库入口（带归档计数）"},{name:"renderOverlay",when:"state.archivePoolOpen 时",description:"人才库浮层（恢复/查看）"},{name:"renderCardActions",when:"每次渲染，每张候选人卡片",description:"归档按钮"}],m0=["updateCandidate(id, { archived })"],h0=[{name:"poolPageSize",type:"number",default:"0",description:"人才库浮层条数上限（0 = 不限制）"}],y0="withCandidatePlugins(CandidateCore, [createArchivePoolPlugin({ poolPageSize: 50 })])",ls={name:c0,description:d0,since:f0,tags:p0,events:g0,methods:m0,config:h0,example:y0},Tr=(e={})=>{const n=e.poolPageSize??0;return{name:"archive-pool",version:"0.1.0",description:ls.description,priority:50,config:{order:50},hooks:{transformData:(t,r)=>(r??[]).filter(o=>!o.archived),renderToolbar:t=>{var l;const o=(((l=t.props)==null?void 0:l.data)??[]).filter(a=>a.archived).length,i=!!t.state.archivePoolOpen;return u.jsxs("button",{type:"button","aria-haspopup":"dialog","aria-expanded":i,onClick:()=>t.setState({archivePoolOpen:!i}),style:K(i),children:["人才库（",o,"）"]},"archive-pool")},renderOverlay:t=>{var a;if(!t.state.archivePoolOpen)return null;const o=(((a=t.props)==null?void 0:a.data)??[]).filter(s=>s.archived),i=n>0?o.slice(0,n):o,l=()=>t.setState({archivePoolOpen:!1});return u.jsx(Dt,{title:`人才库（${o.length}）`,onClose:l,width:420,zIndex:56,children:u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[i.length===0&&u.jsx("span",{style:{color:k.muted,fontSize:13},children:"人才库为空：在卡片或批量操作里归档候选人后会出现在这里。"}),i.map(s=>u.jsxs("div",{"data-candidate-id":s.id,style:{display:"flex",alignItems:"center",gap:8,border:`1px solid ${k.line}`,borderRadius:8,padding:"8px 10px",fontSize:13},children:[u.jsxs("span",{style:{color:k.text,flex:1,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:[u.jsx("strong",{children:s.name}),u.jsxs("span",{style:{color:k.muted},children:[" · ",s.role]})]}),u.jsx("button",{type:"button","aria-label":`恢复 ${s.name} 到看板`,onClick:()=>t.updateCandidate(s.id,{archived:!1}),style:K(!0),children:"恢复"})]},s.id))]})},"archive-pool-overlay")},renderCardActions:(t,r)=>u.jsx("button",{type:"button","aria-label":`归档 ${r.name} 到人才库`,onClick:()=>t.updateCandidate(r.id,{archived:!0}),style:v0,children:"归档"},"archive")}}},v0={border:`1px solid ${k.lineStrong}`,background:k.chipBg,color:k.chipText,borderRadius:6,fontSize:12,padding:"2px 8px",cursor:"pointer"};Tr.meta=ls;const x0="Export",S0="CSV 导出：工具栏按钮把当前看板数据（经筛选/排序管道后）导出为带 BOM 的 UTF-8 CSV，内置公式注入防护与阶段名翻译，列可扩展。",w0="0.1.0",k0=["export","renderToolbar"],C0=[{name:"renderToolbar",when:"每次渲染，工具栏",description:"导出 CSV 按钮（点击触发 Blob 下载）"}],P0=[],_0="只读取 ctx.data，不调用上下文方法",b0=[{name:"filename",type:"string",default:"'candidates'",description:"导出文件名（自动带日期后缀）"},{name:"columns",type:"{header, get}[]",default:"内置 8 列",description:"额外导出列"}],j0="withCandidatePlugins(CandidateCore, [createExportPlugin({ filename: '候选人清单' })])",as={name:x0,description:S0,since:w0,tags:k0,events:C0,methods:P0,methodsNote:_0,config:b0,example:j0},Uu=[{header:"姓名",get:e=>e.name},{header:"岗位",get:e=>e.role},{header:"阶段",get:e=>e.stage},{header:"匹配分",get:e=>e.score},{header:"邮箱",get:e=>e.email},{header:"手机号",get:e=>e.phone},{header:"来源",get:e=>e.source},{header:"投递时间",get:e=>e.appliedAt}];function E0(e,n){const t=new Blob(["\uFEFF"+n],{type:"text/csv;charset=utf-8"}),r=URL.createObjectURL(t),o=document.createElement("a");o.href=r,o.download=e,o.click(),URL.revokeObjectURL(r)}const ci=(e={})=>{const n=e.filename??"candidates";return{name:"export",version:"0.1.0",description:as.description,priority:60,config:{order:60},hooks:{renderToolbar:t=>{var o;const r=((o=t.props)==null?void 0:o.stages)??Qe;return u.jsx("button",{type:"button","aria-label":"导出候选人列表为 CSV",onClick:()=>{const i=t.data??[],l=[...Uu,...e.columns??[]],a=c=>{var d;return((d=r.find(f=>f.key===c))==null?void 0:d.label)??c},s=[l.map(c=>Iu(c.header)).join(","),...i.map(c=>l.map(d=>Iu(d===Uu[2]?a(c.stage):d.get(c))).join(","))];E0(`${n}-${new Date().toISOString().slice(0,10)}.csv`,s.join(`\r
`))},style:K(!1),children:"导出 CSV"},"export")}}}};ci.meta=as;const $0="Stats",T0="漏斗统计：页脚渲染各阶段人数占比条（tone 着色，aria 可读），列头显示计数徽章（可关）。纯统计，不改数据。",N0="0.1.0",O0=["stats","renderFooter","renderColumnHeader"],R0=[{name:"renderFooter",when:"每次渲染，页脚",description:"漏斗条形统计"},{name:"renderColumnHeader",when:"每次渲染，每列头部",description:"列内人数徽章"}],D0=[],L0="只读取 ctx.data 与 props.stages，不调用上下文方法",z0=[{name:"columnCount",type:"boolean",default:"true",description:"是否在列头显示计数徽章"}],M0="withCandidatePlugins(CandidateCore, [createStatsPlugin({ columnCount: false })])",ss={name:$0,description:T0,since:N0,tags:O0,events:R0,methods:D0,methodsNote:L0,config:z0,example:M0},di=(e={})=>{const n=e.columnCount??!0;return{name:"stats",version:"0.1.0",description:ss.description,priority:10,config:{order:10},hooks:{renderColumnHeader:n?(t,r,o)=>u.jsx("span",{"aria-label":`${r.label} ${o} 人`,style:{fontSize:11,fontWeight:700,color:(hn[r.tone??"neutral"]??hn.neutral).fg,background:k.bg,border:`1px solid ${k.line}`,borderRadius:999,padding:"0 6px",lineHeight:"16px"},children:o},"col-count"):void 0,renderFooter:t=>{var l;const r=((l=t.props)==null?void 0:l.stages)??Qe,o=t.data??[],i=o.length;return i===0?null:u.jsxs("span",{role:"img","aria-label":`漏斗统计：共 ${i} 人，`+r.map(a=>`${a.label} ${o.filter(s=>s.stage===a.key).length} 人`).join("，"),style:{display:"inline-flex",alignItems:"center",gap:4,flexWrap:"wrap"},children:[u.jsx("span",{style:{fontSize:12,color:k.muted},children:"漏斗"}),r.map(a=>{const s=o.filter(d=>d.stage===a.key).length,c=hn[a.tone??"neutral"]??hn.neutral;return u.jsxs("span",{title:`${a.label}: ${s} 人`,style:{display:"inline-flex",alignItems:"center",gap:4,fontSize:11,fontWeight:700,color:c.fg,background:c.bg,borderRadius:999,padding:"0 8px",lineHeight:"18px"},children:[a.label,u.jsx("span",{style:{display:"inline-block",width:Math.max(s*4,2),height:8,borderRadius:4,background:c.fg},"aria-hidden":"true"}),s]},a.key)})]},"stats-funnel")}}}};di.meta=ss;const I0="ActivityLog",A0="操作日志：汇总所有候选人的 history 动作（流转/备注等，写操作链路自动记录），按时间倒序在浮层展示，页脚提供入口（带总数）。",B0="0.1.0",F0=["activity-log","renderFooter","renderOverlay"],U0=[{name:"renderFooter",when:"每次渲染，页脚",description:"日志入口按钮（带总数）"},{name:"renderOverlay",when:"state.activityLogOpen 时",description:"日志时间线浮层"}],W0=[],H0="只读取 ctx.data 中各候选人的 history，不调用上下文方法",V0=[{name:"maxEntries",type:"number",default:"100",description:"浮层最多展示条数"}],K0="withCandidatePlugins(CandidateCore, [createActivityLogPlugin({ maxEntries: 50 })])",us={name:I0,description:A0,since:B0,tags:F0,events:U0,methods:W0,methodsNote:H0,config:V0,example:K0},cs=(e={})=>{const n=e.maxEntries??100;return{name:"activity-log",version:"0.1.0",description:us.description,priority:20,config:{order:20},hooks:{renderFooter:t=>{const r=Wu(t.data);return u.jsxs("button",{type:"button","aria-haspopup":"dialog","aria-expanded":!!t.state.activityLogOpen,onClick:()=>t.setState({activityLogOpen:!t.state.activityLogOpen}),style:K(!!t.state.activityLogOpen),children:["操作日志（",r.length,"）"]},"activity-log")},renderOverlay:t=>{if(!t.state.activityLogOpen)return null;const r=Wu(t.data).slice(0,n),o=()=>t.setState({activityLogOpen:!1});return u.jsx(Dt,{title:"操作日志",onClose:o,width:400,zIndex:56,children:u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[r.length===0&&u.jsx("span",{style:{color:k.muted,fontSize:13},children:"暂无日志：流转、备注等操作会自动记录到候选人 history。"}),r.map((i,l)=>u.jsxs("div",{style:{display:"flex",gap:8,fontSize:13,alignItems:"baseline"},children:[u.jsx("span",{style:{color:k.faint,fontSize:12,flexShrink:0},children:i.at.slice(5,16).replace("T"," ")}),u.jsxs("span",{style:{color:k.text},children:[u.jsx("strong",{children:i.candidateName})," · ",i.action,i.detail?` → ${i.detail}`:""]})]},`${i.at}-${l}`))]})},"activity-log-overlay")}}}};function Wu(e){const n=[];for(const t of e??[])for(const r of t.history??[])n.push({...r,candidateName:t.name});return n.sort((t,r)=>t.at<r.at?1:-1)}cs.meta=us;const G0="RecommendSort",Q0="智能推荐排序：transformData 对候选人列表按匹配分（默认，同分按投递时间新在前）或投递时间排序，仅重排不增删。",Y0="0.1.0",X0=["recommend-sort","transformData"],J0=[{name:"transformData",when:"渲染前，对列表排序",description:"score / fresh 两种排序模式，可升降序"}],Z0=[],q0="只读取 candidate.score / appliedAt，不调用上下文方法",ex=[{name:"by",type:"'score' | 'fresh'",default:"'score'",description:"排序依据"},{name:"desc",type:"boolean",default:"true",description:"是否降序"}],nx="withCandidatePlugins(CandidateCore, [createRecommendSortPlugin({ by: 'fresh' })])",ds={name:G0,description:Q0,since:Y0,tags:X0,events:J0,methods:Z0,methodsNote:q0,config:ex,example:nx};function Jr(e){if(!e)return 0;const n=Date.parse(e);return Number.isNaN(n)?0:n}const Nr=(e={})=>{const n=e.by??"score",t=e.desc??!0;return{name:"recommend-sort",version:"0.1.0",description:ds.description,priority:30,config:{order:30},hooks:{transformData:(r,o)=>{const i=[...o??[]],l=t?-1:1;return i.sort((a,s)=>{if(n==="score"){const c=a.score??-1,d=s.score??-1;return c!==d?(c-d)*l:(Jr(a.appliedAt)-Jr(s.appliedAt))*-l}return(Jr(a.appliedAt)-Jr(s.appliedAt))*l}),i}}}};Nr.meta=ds;const tx="ContactMask",rx="联系方式脱敏：transformData 把邮箱/手机号替换为掩码（138****5678 / a***c@example.com），指定阶段可豁免（招聘后期需完整联系方式）。数据管道末位执行，不影响排序。",ox="0.1.0",ix=["contact-mask","transformData"],lx=[{name:"transformData",when:"渲染前，对联系方式脱敏",description:"email / phone 掩码化，visibleStages 豁免"}],ax=[],sx="只读取 candidate.email / phone / stage，不调用上下文方法",ux=[{name:"maskEmail",type:"boolean",default:"true",description:"是否脱敏邮箱"},{name:"maskPhone",type:"boolean",default:"true",description:"是否脱敏手机号"},{name:"visibleStages",type:"string[]",default:"[]",description:"免脱敏阶段 key 列表"}],cx="withCandidatePlugins(CandidateCore, [createContactMaskPlugin({ visibleStages: ['offer'] })])",fs={name:tx,description:rx,since:ox,tags:ix,events:lx,methods:ax,methodsNote:sx,config:ux,example:cx},fi=(e={})=>{const n=e.maskEmail??!0,t=e.maskPhone??!0,r=e.visibleStages??[];return{name:"contact-mask",version:"0.1.0",description:fs.description,priority:10,config:{order:10},hooks:{transformData:(o,i)=>(i??[]).map(a=>{if(r.includes(a.stage))return a;const s={...a};return n&&(s.email=Hh(a.email)),t&&(s.phone=Wh(a.phone)),s})}}};fi.meta=fs;const Fi=(e,n="")=>e===void 0?n:String(e),dx={ScorePlugin:e=>$r({goodThreshold:Number(e.goodThreshold??80),warnThreshold:Number(e.warnThreshold??60)}),DupCheckPlugin:()=>Ka({fields:["name","email","phone"]}),TagPlugin:e=>ri({suggestTags:["重点","备选","急招","内推"],maxTags:Number(e.maxTags??8)}),OfferPlugin:()=>Ya(),StarPlugin:e=>oi({pinTop:e.pinTop!==!1}),StageFlowPlugin:e=>Rt({step:Number(e.step??1),allowBackward:e.allowBackward!==!1}),NotePlugin:e=>ii({authorName:Fi(e.author,"演示 HR")}),InterviewSlotPlugin:()=>qa({slots:["周二 14:00","周三 10:00","周四 16:00"],interviewers:["王工","李总监"],modes:["onsite","video"]}),RejectTplPlugin:()=>li({targetStage:"rejected"}),FilterPlugin:()=>ai(),SearchPlugin:()=>si(),BatchOpPlugin:()=>ui(),ViewSwitchPlugin:e=>is({pageSize:Number(e.pageSize??0)}),ArchivePoolPlugin:()=>Tr(),ExportPlugin:e=>ci({filename:Fi(e.filename,"vane-candidates")}),StatsPlugin:e=>di({columnCount:e.columnCount!==!1}),ActivityLogPlugin:e=>cs({maxEntries:Number(e.maxEntries??20)}),RecommendSortPlugin:e=>Nr({by:Fi(e.by,"score")==="fresh"?"fresh":"score",desc:e.desc!==!1}),ContactMaskPlugin:e=>fi({maskEmail:e.maskEmail!==!1,maskPhone:e.maskPhone!==!1})};function le(e){const n=dx[e];if(!n)throw new Error(`未注册的示例插件：${e}`);return function({cfg:r}){const o=v.useMemo(()=>qn(On,[n(r)]),[JSON.stringify(r)]);return u.jsx(o,{data:Dn,stages:Rn,containerStyle:{maxWidth:1120}})}}const fx={slug:"score",title:"匹配分徽章",group:"badge",plugin:"ScorePlugin",intro:"候选人卡片右上角的 0-100 匹配分胶囊，按阈值着色（优秀绿 / 待定橙 / 偏低红）。",why:"刷简历时第一眼先看匹配度，分数颜色把「优先看谁」编码进视觉层。",plugs:[{fn:"createScorePlugin",cfg:"{ goodThreshold: {{goodThreshold}}, warnThreshold: 60 }",why:"纯展示不改数据：只读 candidate.score，按阈值着色。"}],props:[],controls:[{key:"goodThreshold",label:"优秀阈值",kind:"number",init:80,min:50,max:95,step:5}],note:"score 缺省的候选人不渲染徽章；阈值只影响颜色分界，不改排序。"},px=le("ScorePlugin"),gx=Object.freeze(Object.defineProperty({__proto__:null,default:px,meta:fx},Symbol.toStringTag,{value:"Module"})),mx={slug:"dup-check",title:"重复候选人检测",group:"badge",plugin:"DupCheckPlugin",intro:"扫描同名 / 同邮箱 / 同手机号的投递，命中者在卡片徽章区挂「疑似重复」警示。",why:"候选人重复投递很常见（内推 + 海投同时进行），合并档案前先标记出来。",plugs:[{fn:"createDupCheckPlugin",cfg:'{ fields: ["name", "email", "phone"] }',why:"用 signature map 两两比对，任何字段命中即双方都挂警示。"}],props:[],note:"样例里 c-001 与 c-010 同名同邮箱同手机号 —— 两张卡都会出现「疑似重复」。"},hx=le("DupCheckPlugin"),yx=Object.freeze(Object.defineProperty({__proto__:null,default:hx,meta:mx},Symbol.toStringTag,{value:"Module"})),vx={slug:"tags",title:"候选人标签",group:"badge",plugin:"TagPlugin",intro:"标签 chips 展示 + 管理浮层：点卡片上的「标签」按钮即可添加 / 删除，写回 candidate.tags。",why:"「重点 / 备选 / 急招」这类人工标记是筛选插件的数据源，先给卡片打上标签。",plugs:[{fn:"createTagPlugin",cfg:'{ suggestTags: ["重点", "备选", "急招", "内推"], maxTags: {{maxTags}} }',why:"快捷标签一键添加；超过 3 个折叠成 +N，点管理浮层看全量。"}],props:[],controls:[{key:"maxTags",label:"最多标签数",kind:"number",init:8,min:3,max:12,step:1}],note:"写操作走 ctx.updateCandidate，装配层自动落内部态并追加 history。"},xx=le("TagPlugin"),Sx=Object.freeze(Object.defineProperty({__proto__:null,default:xx,meta:vx},Symbol.toStringTag,{value:"Module"})),wx={slug:"offer",title:"Offer 状态徽章",group:"badge",plugin:"OfferPlugin",intro:"candidate.offer 存在时显示状态胶囊：审批中灰 / 已发出蓝 / 已接受绿 / 已婉拒红。",why:"Offer 阶段的候选人需要和普通候选人区分开，薪资信息藏在悬停提示里不占版面。",plugs:[{fn:"createOfferPlugin",cfg:"{}",why:"纯展示插件：四态配色内置，labels 可整体替换文案。"}],props:[],note:"样例里 c-002（已发出）与 c-007（已接受）会挂徽章；没有 offer 字段的卡片不受影响。"},kx=le("OfferPlugin"),Cx=Object.freeze(Object.defineProperty({__proto__:null,default:kx,meta:wx},Symbol.toStringTag,{value:"Module"})),Px={slug:"star",title:"星标收藏",group:"action",plugin:"StarPlugin",intro:"卡片操作区 ☆/★ 一键切换，pinTop 开启时星标候选人置顶到各自阶段列最前。",why:"挑出「今晚要再聊一轮」的人：星标是最轻量的关注动作。",plugs:[{fn:"createStarPlugin",cfg:"{ pinTop: {{pinTop}} }",why:"置顶经 transformData 实现，只影响展示顺序，不动数据。"}],props:[],controls:[{key:"pinTop",label:"星标置顶",kind:"switch",init:!0}],note:"关掉置顶后星标只改颜色不重排 —— 适合「保留顺序感」的团队习惯。"},_x=le("StarPlugin"),bx=Object.freeze(Object.defineProperty({__proto__:null,default:_x,meta:Px},Symbol.toStringTag,{value:"Module"})),jx={slug:"stage-flow",title:"阶段流转",group:"action",plugin:"StageFlowPlugin",intro:"卡片操作区「◀ 推进 ▶」，候选人沿阶段列流转；边界阶段自动禁用对应方向。",why:"ATS 最核心的动作：把「筛过 → 约面 → 发 offer」变成一次点击。",plugs:[{fn:"createStageFlowPlugin",cfg:"{ step: {{step}}, allowBackward: {{allowBackward}} }",why:"经 ctx.moveCandidate 流转，装配层自动追加 history 并广播 candidate:change。"}],props:[],controls:[{key:"step",label:"步长",kind:"number",init:1,min:1,max:2,step:1},{key:"allowBackward",label:"允许回退",kind:"switch",init:!0}],note:"流转只改 stage 字段；history 由装配层统一写，ActivityLog 插件读它做时间线。"},Hu=Dn.slice(0,5);function Ex({cfg:e,log:n}){const t=Number(e.step??1),r=e.allowBackward!==!1,o=v.useMemo(()=>qn(On,[Rt({step:t,allowBackward:r})]),[t,r]),i=v.useRef(new Map(Hu.map(a=>[a.id,a.stage]))),l=v.useCallback(a=>{for(const s of a){const c=i.current.get(s.id);c&&c!==s.stage&&n(`${s.name}：${c} → ${s.stage}`),i.current.set(s.id,s.stage)}},[n]);return u.jsx(o,{data:Hu,stages:Rn,containerStyle:{maxWidth:1120},onDataChange:l})}const $x=Object.freeze(Object.defineProperty({__proto__:null,default:Ex,meta:jx},Symbol.toStringTag,{value:"Module"})),Tx={slug:"note",title:"招聘备注",group:"action",plugin:"NotePlugin",intro:"卡片操作区「备注 (n)」按钮打开浮层：查看 / 新增 / 删除沟通记录，写回 candidate.notes。",why:"电话沟通后的结论必须留在候选人身上，否则下一个面试官要重新踩坑。",plugs:[{fn:"createNotePlugin",cfg:'{ authorName: "{{author}}" }',why:"新增备注自动署名 + 记时间；maxNotes 控制每人最多保留条数。"}],props:[],controls:[{key:"author",label:"备注署名",kind:"select",init:"演示 HR",options:[{label:"演示 HR",value:"演示 HR"},{label:"张HR",value:"张HR"},{label:"面试官",value:"面试官"}]}],note:"样例里陈知远已有一条备注；所有插件写入的备注 author 相同即可删（演示语义）。"},Nx=le("NotePlugin"),Ox=Object.freeze(Object.defineProperty({__proto__:null,default:Nx,meta:Tx},Symbol.toStringTag,{value:"Module"})),Rx={slug:"interview-slot",title:"面试安排",group:"action",plugin:"InterviewSlotPlugin",intro:"「安排面试」入口打开浮层：从时间槽 / 面试官 / 形式中点选保存到 candidate.interview。",why:"约面是高频且琐碎的动作：可选项收敛成按钮，点两下完成，不用手填表单。",plugs:[{fn:"createInterviewSlotPlugin",cfg:'{ slots: ["周二 14:00", "周三 10:00", "周四 16:00"], interviewers: ["王工", "李总监"], modes: ["onsite", "video"] }',why:"已安排的卡片正文出现 📅 面试信息条；再次点按钮是「改期」。"}],props:[],note:"保存经 ctx.updateCandidate；「取消面试安排」把 interview 字段清回 undefined。"},Dx=le("InterviewSlotPlugin"),Lx=Object.freeze(Object.defineProperty({__proto__:null,default:Dx,meta:Rx},Symbol.toStringTag,{value:"Module"})),zx={slug:"reject-tpl",title:"婉拒模板",group:"action",plugin:"RejectTplPlugin",intro:"「婉拒」入口打开浮层：选模板 → 预览编辑 → 确认后候选人流转到 rejected。",why:"婉拒信一天要发几十封：模板 + 一处编辑框比邮件客户端快得多。",plugs:[{fn:"createRejectTplPlugin",cfg:'{ targetStage: "rejected" }',why:"确认婉拒直接把 stage 写到目标阶段（自动留 history），不依赖相邻阶段。"}],props:[],note:"templates 可整体替换内置模板；文案里支持 {{gap}} 这类占位（模板自身的约定）。"},Mx=le("RejectTplPlugin"),Ix=Object.freeze(Object.defineProperty({__proto__:null,default:Mx,meta:zx},Symbol.toStringTag,{value:"Module"})),Ax={slug:"filter",title:"阶段 / 标签筛选",group:"toolbar",plugin:"FilterPlugin",intro:"工具栏两个下拉：按阶段、按标签过滤看板；有筛选时出现「清除筛选」。",why:"候选人一多，先按阶段或标签缩小范围再逐张看，是每天的第一次点击。",plugs:[{fn:"createFilterPlugin",cfg:"{}",why:"筛选状态写 ctx.state，transformData 按状态过滤 —— 只过滤展示，不删数据。"}],props:[],note:"标签选项默认从当前数据收集，也可用 tagOptions 配置固定集合。"},Bx=le("FilterPlugin"),Fx=Object.freeze(Object.defineProperty({__proto__:null,default:Bx,meta:Ax},Symbol.toStringTag,{value:"Module"})),Ux={slug:"search",title:"关键词搜索",group:"toolbar",plugin:"SearchPlugin",intro:"工具栏搜索框：姓名 / 岗位 / 摘要 / 标签 / 来源任一字段命中即保留。",why:"「上次那个做过可视化的叫什么来着」—— 搜索比翻列快。",plugs:[{fn:"createSearchPlugin",cfg:"{}",why:"非受控输入 + onChange 写 ctx.state.searchKeyword，transformData 立即过滤。"}],props:[],note:"fields 可收窄参与搜索的字段（比如只搜姓名，避免摘要噪音）。"},Wx=le("SearchPlugin"),Hx=Object.freeze(Object.defineProperty({__proto__:null,default:Wx,meta:Ux},Symbol.toStringTag,{value:"Module"})),Vx={slug:"batch-op",title:"批量操作",group:"toolbar",plugin:"BatchOpPlugin",intro:"工具栏「批量」开关进入选择模式：卡片出现复选框，支持全选 / 清空 / 批量流转 / 批量归档。",why:"一个批次 30 份简历都过了初筛，逐张点推进会把人点废。",plugs:[{fn:"createBatchOpPlugin",cfg:"{}",why:"选择集放 ctx.state.batchSelected；批量流转按阶段序号差值调 ctx.moveCandidate。"}],props:[],note:"批量归档只写 archived 标记 —— 看板上消失需要配合 ArchivePool 插件（见场景页）。"},Kx=le("BatchOpPlugin"),Gx=Object.freeze(Object.defineProperty({__proto__:null,default:Kx,meta:Vx},Symbol.toStringTag,{value:"Module"})),Qx={slug:"view-switch",title:"看板 / 列表切换",group:"toolbar",plugin:"ViewSwitchPlugin",intro:"工具栏互斥按钮切换视图：列表模式由 renderCards 内容覆盖槽整体接管渲染。",why:"看板适合「看分布」，列表适合「快速过一遍」—— 同一份数据两种密度。",plugs:[{fn:"createViewSwitchPlugin",cfg:"{ pageSize: {{pageSize}} }",why:"kanban 模式返回 null 回落核心默认看板；list 模式渲染紧凑表格，pageSize 可截断。"}],props:[],controls:[{key:"pageSize",label:"每页条数",kind:"number",init:0,min:0,max:12,step:1,hint:"0 = 不分页"}],note:"内容覆盖槽是「单值槽」：多个插件都实现 renderCards 时最高 priority 胜出。"},Yx=le("ViewSwitchPlugin"),Xx=Object.freeze(Object.defineProperty({__proto__:null,default:Yx,meta:Qx},Symbol.toStringTag,{value:"Module"})),Jx={slug:"archive-pool",title:"人才库归档池",group:"toolbar",plugin:"ArchivePoolPlugin",intro:"归档的候选人从主看板消失，进「人才库」浮层；可一键恢复回看板。",why:"暂无匹配岗位的好候选人不能丢 —— 归档是「冷藏」不是「删除」。",plugs:[{fn:"createArchivePoolPlugin",cfg:"{}",why:"transformData 把 archived 候选人滤出主看板；工具栏入口带实时计数。"}],props:[],note:"本页是受控模式：onDataChange 把新列表回写宿主，人才库计数才能实时反映刚归档的人。"};function Zx({log:e}){const[n,t]=v.useState(Dn),r=v.useMemo(()=>qn(On,[Tr()]),[]),o=v.useCallback(i=>{t(i);const l=i.filter(s=>!s.archived).length,a=i.filter(s=>s.archived).length;e(`看板 ${l} 人 · 人才库 ${a} 人`)},[e]);return u.jsx(r,{data:n,stages:Rn,containerStyle:{maxWidth:1120},onDataChange:o})}const qx=Object.freeze(Object.defineProperty({__proto__:null,default:Zx,meta:Jx},Symbol.toStringTag,{value:"Module"})),e1={slug:"export",title:"CSV 导出",group:"toolbar",plugin:"ExportPlugin",intro:"工具栏「导出 CSV」：把当前看板数据（经筛选 / 排序管道后）按列导出，带 BOM。",why:"周报要附件、老板要表格：导出的是管道末态，所见即所得。",plugs:[{fn:"createExportPlugin",cfg:'{ filename: "{{filename}}" }',why:"内置 8 列（姓名 / 岗位 / 阶段 / 匹配分 / 邮箱 / 手机号 / 来源 / 投递时间），columns 可追加。"}],props:[],controls:[{key:"filename",label:"文件名",kind:"select",init:"vane-candidates",options:[{label:"vane-candidates",value:"vane-candidates"},{label:"interview-week",value:"interview-week"}]}],note:"csvCell 做了公式注入防护（= + - @ 开头会被前置单引号）；日期后缀自动拼接。"},n1=le("ExportPlugin"),t1=Object.freeze(Object.defineProperty({__proto__:null,default:n1,meta:e1},Symbol.toStringTag,{value:"Module"})),r1={slug:"stats",title:"漏斗统计",group:"pipeline",plugin:"StatsPlugin",intro:"页脚各阶段人数占比条形图 + 列头计数徽章，转化漏斗一眼可读。",why:"每周复盘「卡在哪个阶段」：漏斗形态比数字表直觉得多。",plugs:[{fn:"createStatsPlugin",cfg:"{ columnCount: {{columnCount}} }",why:"renderFooter 画漏斗（纯只读）；renderColumnHeader 在每列头部挂人数徽章。"}],props:[],controls:[{key:"columnCount",label:"列头计数",kind:"switch",init:!0}],note:"统计基于 ctx.data（管道末态）—— 配合筛选插件时，漏斗反映的是筛选后的世界。"},o1=le("StatsPlugin"),i1=Object.freeze(Object.defineProperty({__proto__:null,default:o1,meta:r1},Symbol.toStringTag,{value:"Module"})),l1={slug:"activity-log",title:"操作日志",group:"pipeline",plugin:"ActivityLogPlugin",intro:"汇总所有候选人的 history（流转 / 备注等），按时间倒序在浮层展示，页脚提供入口。",why:"「这简历上周谁推进的？」—— 审计与交接时，时间线比记忆可靠。",plugs:[{fn:"createActivityLogPlugin",cfg:"{ maxEntries: {{maxEntries}} }",why:"只读插件：日志由写操作插件经 updateCandidate / moveCandidate 链路自动记录。"}],props:[],controls:[{key:"maxEntries",label:"展示条数",kind:"number",init:20,min:5,max:50,step:5}],note:"样例里 c-001 / c-008 / c-002 自带 history；先去推一张卡再打开日志，能看到新记录。"},a1=le("ActivityLogPlugin"),s1=Object.freeze(Object.defineProperty({__proto__:null,default:a1,meta:l1},Symbol.toStringTag,{value:"Module"})),u1={slug:"recommend-sort",title:"智能推荐排序",group:"pipeline",plugin:"RecommendSortPlugin",intro:"transformData 对列表排序：score 模式按匹配分（同分按投递时间新在前），fresh 模式按投递时间。",why:"先看分高的、再看新投的 —— 排序插件把「先看谁」这个决定交给数据。",plugs:[{fn:"createRecommendSortPlugin",cfg:'{ by: "{{by}}", desc: {{desc}} }',why:"只重排顺序不改数据；归档过滤交给 ArchivePool，本插件不关心。"}],props:[],controls:[{key:"by",label:"排序依据",kind:"select",init:"score",options:[{label:"匹配分",value:"score"},{label:"投递时间",value:"fresh"}]},{key:"desc",label:"降序",kind:"switch",init:!0}],note:"切换「投递时间」后，applied 列首卡从 81 分的郑星野换成 11-02 投递的同分选手。"},c1=le("RecommendSortPlugin"),d1=Object.freeze(Object.defineProperty({__proto__:null,default:c1,meta:u1},Symbol.toStringTag,{value:"Module"})),f1={slug:"contact-mask",title:"联系方式脱敏",group:"pipeline",plugin:"ContactMaskPlugin",intro:"把邮箱 / 手机号替换为掩码（138****5678 / a***c@example.com），指定阶段可豁免。",why:"简历池一旦外流，联系方式就是核心资产 —— 默认脱敏是合规底线。",plugs:[{fn:"createContactMaskPlugin",cfg:"{ maskEmail: {{maskEmail}}, maskPhone: {{maskPhone}} }",why:"transformData 管道末位执行（priority 10），保证排序仍用原始数据。"}],props:[],controls:[{key:"maskEmail",label:"脱敏邮箱",kind:"switch",init:!0},{key:"maskPhone",label:"脱敏手机",kind:"switch",init:!0}],note:"visibleStages 可豁免后期阶段（如 offer / hired 需要完整联系方式去约人）。"},p1=le("ContactMaskPlugin"),g1=Object.freeze(Object.defineProperty({__proto__:null,default:p1,meta:f1},Symbol.toStringTag,{value:"Module"})),m1=`import React from "react";
import { CandidateCore, withPlugins } from "vane-candidate";
import { createScorePlugin } from "vane-candidate/custom-plugins/ScorePlugin";
import { createStageFlowPlugin } from "vane-candidate/custom-plugins/StageFlowPlugin";
import type { DemoMeta, DemoStageProps } from "./types";
import { SAMPLE_CANDIDATES, SAMPLE_STAGES } from "../data/sample";

/**
 * 00 · 最小可用
 *
 * 内核起步，只叠两个最核心的插件（匹配分 + 阶段流转）——
 * 先把「装配 → 渲染」这条链跑通，再按需往 withPlugins 数组里加插件。
 *
 * 注意 import 是「消费者视角」包名（demo/vite.config.ts 的 alias 指回 src），
 * 页面里展示的源码可以原样复制到真实项目。
 */
export const meta: DemoMeta = {
  slug: "basic",
  title: "最小可用",
  group: "basic",
  intro: "内核 + 匹配分/阶段流转两个插件跑通装配链路；加插件就是往 withPlugins 数组里加一项。",
  why: "第一次接入时的起点：两个插件就能看出「徽章槽 + 操作槽 + 数据流转」的完整回路。",
  plugs: [
    { fn: "createScorePlugin", cfg: \`{}\`, why: "卡片右上角渲染匹配分胶囊，最简单的装饰槽插件。" },
    { fn: "createStageFlowPlugin", cfg: \`{}\`, why: "卡片操作区 ◀/▶，经 ctx.moveCandidate 流转并自动留 history。" },
  ],
  props: [],
  note: "withPlugins 是 withCandidatePlugins 的别名；数据流转在装配层内部态完成，宿主可用 onDataChange 同步。",
};

const Enhanced = withPlugins(CandidateCore, [
  createScorePlugin(),
  createStageFlowPlugin(),
]);

export default function Stage(_: DemoStageProps) {
  return (
    <Enhanced
      data={SAMPLE_CANDIDATES.slice(0, 6)}
      stages={SAMPLE_STAGES}
      containerStyle={{ maxWidth: 1120 }}
    />
  );
}
`,h1=`import { makeStage } from "./_factory";
import type { DemoMeta } from "./types";

export const meta: DemoMeta = {
  slug: "score",
  title: "匹配分徽章",
  group: "badge",
  plugin: "ScorePlugin",
  intro: "候选人卡片右上角的 0-100 匹配分胶囊，按阈值着色（优秀绿 / 待定橙 / 偏低红）。",
  why: "刷简历时第一眼先看匹配度，分数颜色把「优先看谁」编码进视觉层。",
  plugs: [
    {
      fn: "createScorePlugin",
      cfg: \`{ goodThreshold: {{goodThreshold}}, warnThreshold: 60 }\`,
      why: "纯展示不改数据：只读 candidate.score，按阈值着色。",
    },
  ],
  props: [],
  controls: [
    { key: "goodThreshold", label: "优秀阈值", kind: "number", init: 80, min: 50, max: 95, step: 5 },
  ],
  note: "score 缺省的候选人不渲染徽章；阈值只影响颜色分界，不改排序。",
};

export default makeStage("ScorePlugin");
`,y1=`import { makeStage } from "./_factory";
import type { DemoMeta } from "./types";

export const meta: DemoMeta = {
  slug: "dup-check",
  title: "重复候选人检测",
  group: "badge",
  plugin: "DupCheckPlugin",
  intro: "扫描同名 / 同邮箱 / 同手机号的投递，命中者在卡片徽章区挂「疑似重复」警示。",
  why: "候选人重复投递很常见（内推 + 海投同时进行），合并档案前先标记出来。",
  plugs: [
    {
      fn: "createDupCheckPlugin",
      cfg: \`{ fields: ["name", "email", "phone"] }\`,
      why: "用 signature map 两两比对，任何字段命中即双方都挂警示。",
    },
  ],
  props: [],
  note: "样例里 c-001 与 c-010 同名同邮箱同手机号 —— 两张卡都会出现「疑似重复」。",
};

export default makeStage("DupCheckPlugin");
`,v1=`import { makeStage } from "./_factory";
import type { DemoMeta } from "./types";

export const meta: DemoMeta = {
  slug: "tags",
  title: "候选人标签",
  group: "badge",
  plugin: "TagPlugin",
  intro: "标签 chips 展示 + 管理浮层：点卡片上的「标签」按钮即可添加 / 删除，写回 candidate.tags。",
  why: "「重点 / 备选 / 急招」这类人工标记是筛选插件的数据源，先给卡片打上标签。",
  plugs: [
    {
      fn: "createTagPlugin",
      cfg: \`{ suggestTags: ["重点", "备选", "急招", "内推"], maxTags: {{maxTags}} }\`,
      why: "快捷标签一键添加；超过 3 个折叠成 +N，点管理浮层看全量。",
    },
  ],
  props: [],
  controls: [{ key: "maxTags", label: "最多标签数", kind: "number", init: 8, min: 3, max: 12, step: 1 }],
  note: "写操作走 ctx.updateCandidate，装配层自动落内部态并追加 history。",
};

export default makeStage("TagPlugin");
`,x1=`import { makeStage } from "./_factory";
import type { DemoMeta } from "./types";

export const meta: DemoMeta = {
  slug: "offer",
  title: "Offer 状态徽章",
  group: "badge",
  plugin: "OfferPlugin",
  intro: "candidate.offer 存在时显示状态胶囊：审批中灰 / 已发出蓝 / 已接受绿 / 已婉拒红。",
  why: "Offer 阶段的候选人需要和普通候选人区分开，薪资信息藏在悬停提示里不占版面。",
  plugs: [
    {
      fn: "createOfferPlugin",
      cfg: \`{}\`,
      why: "纯展示插件：四态配色内置，labels 可整体替换文案。",
    },
  ],
  props: [],
  note: "样例里 c-002（已发出）与 c-007（已接受）会挂徽章；没有 offer 字段的卡片不受影响。",
};

export default makeStage("OfferPlugin");
`,S1=`import { makeStage } from "./_factory";
import type { DemoMeta } from "./types";

export const meta: DemoMeta = {
  slug: "star",
  title: "星标收藏",
  group: "action",
  plugin: "StarPlugin",
  intro: "卡片操作区 ☆/★ 一键切换，pinTop 开启时星标候选人置顶到各自阶段列最前。",
  why: "挑出「今晚要再聊一轮」的人：星标是最轻量的关注动作。",
  plugs: [
    {
      fn: "createStarPlugin",
      cfg: \`{ pinTop: {{pinTop}} }\`,
      why: "置顶经 transformData 实现，只影响展示顺序，不动数据。",
    },
  ],
  props: [],
  controls: [{ key: "pinTop", label: "星标置顶", kind: "switch", init: true }],
  note: "关掉置顶后星标只改颜色不重排 —— 适合「保留顺序感」的团队习惯。",
};

export default makeStage("StarPlugin");
`,w1=`import React, { useCallback, useMemo, useRef } from "react";
import { CandidateCore, withPlugins } from "vane-candidate";
import type { Candidate } from "vane-candidate";
import { createStageFlowPlugin } from "vane-candidate/custom-plugins/StageFlowPlugin";
import type { DemoMeta, DemoStageProps } from "./types";
import { SAMPLE_CANDIDATES, SAMPLE_STAGES } from "../data/sample";

export const meta: DemoMeta = {
  slug: "stage-flow",
  title: "阶段流转",
  group: "action",
  plugin: "StageFlowPlugin",
  intro: "卡片操作区「◀ 推进 ▶」，候选人沿阶段列流转；边界阶段自动禁用对应方向。",
  why: "ATS 最核心的动作：把「筛过 → 约面 → 发 offer」变成一次点击。",
  plugs: [
    {
      fn: "createStageFlowPlugin",
      cfg: \`{ step: {{step}}, allowBackward: {{allowBackward}} }\`,
      why: "经 ctx.moveCandidate 流转，装配层自动追加 history 并广播 candidate:change。",
    },
  ],
  props: [],
  controls: [
    { key: "step", label: "步长", kind: "number", init: 1, min: 1, max: 2, step: 1 },
    { key: "allowBackward", label: "允许回退", kind: "switch", init: true },
  ],
  note: "流转只改 stage 字段；history 由装配层统一写，ActivityLog 插件读它做时间线。",
};

const INITIAL = SAMPLE_CANDIDATES.slice(0, 5);

export default function Stage({ cfg, log }: DemoStageProps) {
  const step = Number(cfg.step ?? 1);
  const allowBackward = cfg.allowBackward !== false;

  const Board = useMemo(
    () => withPlugins(CandidateCore, [createStageFlowPlugin({ step, allowBackward })]),
    [step, allowBackward]
  );

  // 记录上一轮各候选人的阶段，onDataChange 时对比出「谁从哪挪到了哪」
  const prevStageRef = useRef<Map<string, string>>(
    new Map(INITIAL.map((c) => [c.id, c.stage]))
  );
  const handleChange = useCallback(
    (list: Candidate[]) => {
      for (const c of list) {
        const prev = prevStageRef.current.get(c.id);
        if (prev && prev !== c.stage) log(\`\${c.name}：\${prev} → \${c.stage}\`);
        prevStageRef.current.set(c.id, c.stage);
      }
    },
    [log]
  );

  return (
    <Board
      data={INITIAL}
      stages={SAMPLE_STAGES}
      containerStyle={{ maxWidth: 1120 }}
      onDataChange={handleChange}
    />
  );
}
`,k1=`import { makeStage } from "./_factory";
import type { DemoMeta } from "./types";

export const meta: DemoMeta = {
  slug: "note",
  title: "招聘备注",
  group: "action",
  plugin: "NotePlugin",
  intro: "卡片操作区「备注 (n)」按钮打开浮层：查看 / 新增 / 删除沟通记录，写回 candidate.notes。",
  why: "电话沟通后的结论必须留在候选人身上，否则下一个面试官要重新踩坑。",
  plugs: [
    {
      fn: "createNotePlugin",
      cfg: \`{ authorName: "{{author}}" }\`,
      why: "新增备注自动署名 + 记时间；maxNotes 控制每人最多保留条数。",
    },
  ],
  props: [],
  controls: [
    {
      key: "author",
      label: "备注署名",
      kind: "select",
      init: "演示 HR",
      options: [
        { label: "演示 HR", value: "演示 HR" },
        { label: "张HR", value: "张HR" },
        { label: "面试官", value: "面试官" },
      ],
    },
  ],
  note: "样例里陈知远已有一条备注；所有插件写入的备注 author 相同即可删（演示语义）。",
};

export default makeStage("NotePlugin");
`,C1=`import { makeStage } from "./_factory";
import type { DemoMeta } from "./types";

export const meta: DemoMeta = {
  slug: "interview-slot",
  title: "面试安排",
  group: "action",
  plugin: "InterviewSlotPlugin",
  intro: "「安排面试」入口打开浮层：从时间槽 / 面试官 / 形式中点选保存到 candidate.interview。",
  why: "约面是高频且琐碎的动作：可选项收敛成按钮，点两下完成，不用手填表单。",
  plugs: [
    {
      fn: "createInterviewSlotPlugin",
      cfg: \`{ slots: ["周二 14:00", "周三 10:00", "周四 16:00"], interviewers: ["王工", "李总监"], modes: ["onsite", "video"] }\`,
      why: "已安排的卡片正文出现 📅 面试信息条；再次点按钮是「改期」。",
    },
  ],
  props: [],
  note: "保存经 ctx.updateCandidate；「取消面试安排」把 interview 字段清回 undefined。",
};

export default makeStage("InterviewSlotPlugin");
`,P1=`import { makeStage } from "./_factory";
import type { DemoMeta } from "./types";

export const meta: DemoMeta = {
  slug: "reject-tpl",
  title: "婉拒模板",
  group: "action",
  plugin: "RejectTplPlugin",
  intro: "「婉拒」入口打开浮层：选模板 → 预览编辑 → 确认后候选人流转到 rejected。",
  why: "婉拒信一天要发几十封：模板 + 一处编辑框比邮件客户端快得多。",
  plugs: [
    {
      fn: "createRejectTplPlugin",
      cfg: \`{ targetStage: "rejected" }\`,
      why: "确认婉拒直接把 stage 写到目标阶段（自动留 history），不依赖相邻阶段。",
    },
  ],
  props: [],
  note: "templates 可整体替换内置模板；文案里支持 {{gap}} 这类占位（模板自身的约定）。",
};

export default makeStage("RejectTplPlugin");
`,_1=`import { makeStage } from "./_factory";
import type { DemoMeta } from "./types";

export const meta: DemoMeta = {
  slug: "filter",
  title: "阶段 / 标签筛选",
  group: "toolbar",
  plugin: "FilterPlugin",
  intro: "工具栏两个下拉：按阶段、按标签过滤看板；有筛选时出现「清除筛选」。",
  why: "候选人一多，先按阶段或标签缩小范围再逐张看，是每天的第一次点击。",
  plugs: [
    {
      fn: "createFilterPlugin",
      cfg: \`{}\`,
      why: "筛选状态写 ctx.state，transformData 按状态过滤 —— 只过滤展示，不删数据。",
    },
  ],
  props: [],
  note: "标签选项默认从当前数据收集，也可用 tagOptions 配置固定集合。",
};

export default makeStage("FilterPlugin");
`,b1=`import { makeStage } from "./_factory";
import type { DemoMeta } from "./types";

export const meta: DemoMeta = {
  slug: "search",
  title: "关键词搜索",
  group: "toolbar",
  plugin: "SearchPlugin",
  intro: "工具栏搜索框：姓名 / 岗位 / 摘要 / 标签 / 来源任一字段命中即保留。",
  why: "「上次那个做过可视化的叫什么来着」—— 搜索比翻列快。",
  plugs: [
    {
      fn: "createSearchPlugin",
      cfg: \`{}\`,
      why: "非受控输入 + onChange 写 ctx.state.searchKeyword，transformData 立即过滤。",
    },
  ],
  props: [],
  note: "fields 可收窄参与搜索的字段（比如只搜姓名，避免摘要噪音）。",
};

export default makeStage("SearchPlugin");
`,j1=`import { makeStage } from "./_factory";
import type { DemoMeta } from "./types";

export const meta: DemoMeta = {
  slug: "batch-op",
  title: "批量操作",
  group: "toolbar",
  plugin: "BatchOpPlugin",
  intro: "工具栏「批量」开关进入选择模式：卡片出现复选框，支持全选 / 清空 / 批量流转 / 批量归档。",
  why: "一个批次 30 份简历都过了初筛，逐张点推进会把人点废。",
  plugs: [
    {
      fn: "createBatchOpPlugin",
      cfg: \`{}\`,
      why: "选择集放 ctx.state.batchSelected；批量流转按阶段序号差值调 ctx.moveCandidate。",
    },
  ],
  props: [],
  note: "批量归档只写 archived 标记 —— 看板上消失需要配合 ArchivePool 插件（见场景页）。",
};

export default makeStage("BatchOpPlugin");
`,E1=`import { makeStage } from "./_factory";
import type { DemoMeta } from "./types";

export const meta: DemoMeta = {
  slug: "view-switch",
  title: "看板 / 列表切换",
  group: "toolbar",
  plugin: "ViewSwitchPlugin",
  intro: "工具栏互斥按钮切换视图：列表模式由 renderCards 内容覆盖槽整体接管渲染。",
  why: "看板适合「看分布」，列表适合「快速过一遍」—— 同一份数据两种密度。",
  plugs: [
    {
      fn: "createViewSwitchPlugin",
      cfg: \`{ pageSize: {{pageSize}} }\`,
      why: "kanban 模式返回 null 回落核心默认看板；list 模式渲染紧凑表格，pageSize 可截断。",
    },
  ],
  props: [],
  controls: [
    { key: "pageSize", label: "每页条数", kind: "number", init: 0, min: 0, max: 12, step: 1, hint: "0 = 不分页" },
  ],
  note: "内容覆盖槽是「单值槽」：多个插件都实现 renderCards 时最高 priority 胜出。",
};

export default makeStage("ViewSwitchPlugin");
`,$1=`import React, { useCallback, useMemo, useState } from "react";
import { CandidateCore, withPlugins } from "vane-candidate";
import type { Candidate } from "vane-candidate";
import { createArchivePoolPlugin } from "vane-candidate/custom-plugins/ArchivePoolPlugin";
import type { DemoMeta, DemoStageProps } from "./types";
import { SAMPLE_CANDIDATES, SAMPLE_STAGES } from "../data/sample";

export const meta: DemoMeta = {
  slug: "archive-pool",
  title: "人才库归档池",
  group: "toolbar",
  plugin: "ArchivePoolPlugin",
  intro: "归档的候选人从主看板消失，进「人才库」浮层；可一键恢复回看板。",
  why: "暂无匹配岗位的好候选人不能丢 —— 归档是「冷藏」不是「删除」。",
  plugs: [
    {
      fn: "createArchivePoolPlugin",
      cfg: \`{}\`,
      why: "transformData 把 archived 候选人滤出主看板；工具栏入口带实时计数。",
    },
  ],
  props: [],
  note: "本页是受控模式：onDataChange 把新列表回写宿主，人才库计数才能实时反映刚归档的人。",
};

export default function Stage({ log }: DemoStageProps) {
  const [data, setData] = useState<Candidate[]>(SAMPLE_CANDIDATES);

  const Board = useMemo(() => withPlugins(CandidateCore, [createArchivePoolPlugin()]), []);

  const handleChange = useCallback(
    (next: Candidate[]) => {
      setData(next);
      const onBoard = next.filter((c) => !c.archived).length;
      const pooled = next.filter((c) => c.archived).length;
      log(\`看板 \${onBoard} 人 · 人才库 \${pooled} 人\`);
    },
    [log]
  );

  return (
    <Board
      data={data}
      stages={SAMPLE_STAGES}
      containerStyle={{ maxWidth: 1120 }}
      onDataChange={handleChange}
    />
  );
}
`,T1=`import { makeStage } from "./_factory";
import type { DemoMeta } from "./types";

export const meta: DemoMeta = {
  slug: "export",
  title: "CSV 导出",
  group: "toolbar",
  plugin: "ExportPlugin",
  intro: "工具栏「导出 CSV」：把当前看板数据（经筛选 / 排序管道后）按列导出，带 BOM。",
  why: "周报要附件、老板要表格：导出的是管道末态，所见即所得。",
  plugs: [
    {
      fn: "createExportPlugin",
      cfg: \`{ filename: "{{filename}}" }\`,
      why: "内置 8 列（姓名 / 岗位 / 阶段 / 匹配分 / 邮箱 / 手机号 / 来源 / 投递时间），columns 可追加。",
    },
  ],
  props: [],
  controls: [
    {
      key: "filename",
      label: "文件名",
      kind: "select",
      init: "vane-candidates",
      options: [
        { label: "vane-candidates", value: "vane-candidates" },
        { label: "interview-week", value: "interview-week" },
      ],
    },
  ],
  note: "csvCell 做了公式注入防护（= + - @ 开头会被前置单引号）；日期后缀自动拼接。",
};

export default makeStage("ExportPlugin");
`,N1=`import { makeStage } from "./_factory";
import type { DemoMeta } from "./types";

export const meta: DemoMeta = {
  slug: "stats",
  title: "漏斗统计",
  group: "pipeline",
  plugin: "StatsPlugin",
  intro: "页脚各阶段人数占比条形图 + 列头计数徽章，转化漏斗一眼可读。",
  why: "每周复盘「卡在哪个阶段」：漏斗形态比数字表直觉得多。",
  plugs: [
    {
      fn: "createStatsPlugin",
      cfg: \`{ columnCount: {{columnCount}} }\`,
      why: "renderFooter 画漏斗（纯只读）；renderColumnHeader 在每列头部挂人数徽章。",
    },
  ],
  props: [],
  controls: [{ key: "columnCount", label: "列头计数", kind: "switch", init: true }],
  note: "统计基于 ctx.data（管道末态）—— 配合筛选插件时，漏斗反映的是筛选后的世界。",
};

export default makeStage("StatsPlugin");
`,O1=`import { makeStage } from "./_factory";
import type { DemoMeta } from "./types";

export const meta: DemoMeta = {
  slug: "activity-log",
  title: "操作日志",
  group: "pipeline",
  plugin: "ActivityLogPlugin",
  intro: "汇总所有候选人的 history（流转 / 备注等），按时间倒序在浮层展示，页脚提供入口。",
  why: "「这简历上周谁推进的？」—— 审计与交接时，时间线比记忆可靠。",
  plugs: [
    {
      fn: "createActivityLogPlugin",
      cfg: \`{ maxEntries: {{maxEntries}} }\`,
      why: "只读插件：日志由写操作插件经 updateCandidate / moveCandidate 链路自动记录。",
    },
  ],
  props: [],
  controls: [{ key: "maxEntries", label: "展示条数", kind: "number", init: 20, min: 5, max: 50, step: 5 }],
  note: "样例里 c-001 / c-008 / c-002 自带 history；先去推一张卡再打开日志，能看到新记录。",
};

export default makeStage("ActivityLogPlugin");
`,R1=`import { makeStage } from "./_factory";
import type { DemoMeta } from "./types";

export const meta: DemoMeta = {
  slug: "recommend-sort",
  title: "智能推荐排序",
  group: "pipeline",
  plugin: "RecommendSortPlugin",
  intro: "transformData 对列表排序：score 模式按匹配分（同分按投递时间新在前），fresh 模式按投递时间。",
  why: "先看分高的、再看新投的 —— 排序插件把「先看谁」这个决定交给数据。",
  plugs: [
    {
      fn: "createRecommendSortPlugin",
      cfg: \`{ by: "{{by}}", desc: {{desc}} }\`,
      why: "只重排顺序不改数据；归档过滤交给 ArchivePool，本插件不关心。",
    },
  ],
  props: [],
  controls: [
    {
      key: "by",
      label: "排序依据",
      kind: "select",
      init: "score",
      options: [
        { label: "匹配分", value: "score" },
        { label: "投递时间", value: "fresh" },
      ],
    },
    { key: "desc", label: "降序", kind: "switch", init: true },
  ],
  note: "切换「投递时间」后，applied 列首卡从 81 分的郑星野换成 11-02 投递的同分选手。",
};

export default makeStage("RecommendSortPlugin");
`,D1=`import { makeStage } from "./_factory";
import type { DemoMeta } from "./types";

export const meta: DemoMeta = {
  slug: "contact-mask",
  title: "联系方式脱敏",
  group: "pipeline",
  plugin: "ContactMaskPlugin",
  intro: "把邮箱 / 手机号替换为掩码（138****5678 / a***c@example.com），指定阶段可豁免。",
  why: "简历池一旦外流，联系方式就是核心资产 —— 默认脱敏是合规底线。",
  plugs: [
    {
      fn: "createContactMaskPlugin",
      cfg: \`{ maskEmail: {{maskEmail}}, maskPhone: {{maskPhone}} }\`,
      why: "transformData 管道末位执行（priority 10），保证排序仍用原始数据。",
    },
  ],
  props: [],
  controls: [
    { key: "maskEmail", label: "脱敏邮箱", kind: "switch", init: true },
    { key: "maskPhone", label: "脱敏手机", kind: "switch", init: true },
  ],
  note: "visibleStages 可豁免后期阶段（如 offer / hired 需要完整联系方式去约人）。",
};

export default makeStage("ContactMaskPlugin");
`,L1=Object.assign({"./00-basic.tsx":my,"./01-score.tsx":gx,"./02-dup-check.tsx":yx,"./03-tags.tsx":Sx,"./04-offer.tsx":Cx,"./05-star.tsx":bx,"./06-stage-flow.tsx":$x,"./07-note.tsx":Ox,"./08-interview-slot.tsx":Lx,"./09-reject-tpl.tsx":Ix,"./10-filter.tsx":Fx,"./11-search.tsx":Hx,"./12-batch-op.tsx":Gx,"./13-view-switch.tsx":Xx,"./14-archive-pool.tsx":qx,"./15-export.tsx":t1,"./16-stats.tsx":i1,"./17-activity-log.tsx":s1,"./18-recommend-sort.tsx":d1,"./19-contact-mask.tsx":g1}),z1=Object.assign({"./00-basic.tsx":m1,"./01-score.tsx":h1,"./02-dup-check.tsx":y1,"./03-tags.tsx":v1,"./04-offer.tsx":x1,"./05-star.tsx":S1,"./06-stage-flow.tsx":w1,"./07-note.tsx":k1,"./08-interview-slot.tsx":C1,"./09-reject-tpl.tsx":P1,"./10-filter.tsx":_1,"./11-search.tsx":b1,"./12-batch-op.tsx":j1,"./13-view-switch.tsx":E1,"./14-archive-pool.tsx":$1,"./15-export.tsx":T1,"./16-stats.tsx":N1,"./17-activity-log.tsx":O1,"./18-recommend-sort.tsx":R1,"./19-contact-mask.tsx":D1}),M1=e=>e.replace(/^\.\//,""),Bl=Object.entries(L1).map(([e,n])=>{const t=M1(e);return{meta:n.meta,Stage:n.default,file:t,source:z1[e]??""}}).sort((e,n)=>e.file.localeCompare(n.file)),I1=Array.from(new Set(Bl.map(e=>e.meta.group))),Fl={basic:{label:"基础装配",hint:"内核 + 最小插件链"},badge:{label:"徽章与标记",hint:"卡片上的信息密度"},action:{label:"动作与浮层",hint:"卡片操作区与弹层"},toolbar:{label:"工具栏与视图",hint:"筛 / 搜 / 批量 / 视图 / 导出"},pipeline:{label:"管道与统计",hint:"transformData 与只读面板"}};function Vu(e){const n={};for(const t of e.controls??[])n[t.key]=t.init;return n}const A1=`import type { PluginDoc } from "vane-plugin-core";
import type {
  Candidate,
  CandidatePluginCreator,
} from "../../components/CandidatePlugin/plugins/types";
import { Overlay } from "../../components/CandidatePlugin/plugins/overlay";
import { tokens, toolbarBtn } from "../../components/CandidatePlugin/plugins/tokens";
import doc from "./doc.json";

export interface ActivityLogConfig {
  /** 日志最多展示条数 */
  maxEntries?: number;
}

interface LogRow {
  at: string;
  action: string;
  detail?: string;
  candidateName: string;
}

/**
 * ActivityLog —— 操作日志。
 * 汇总所有候选人的 history（流转 / 备注等动作，由 updateCandidate /
 * moveCandidate 链路自动追加），按时间倒序在浮层展示；页脚提供入口按钮
 * （带日志总数）。日志写回由装配层与写操作插件负责，本插件只读。
 */
export const createActivityLogPlugin: CandidatePluginCreator<ActivityLogConfig> = (
  config = {}
) => {
  const maxEntries = config.maxEntries ?? 100;
  return {
    name: "activity-log",
    version: "0.1.0",
    description: doc.description,
    priority: 20,
    config: { order: 20 },
    hooks: {
      renderFooter: (ctx) => {
        const rows = collectRows(ctx.data as Candidate[] | undefined);
        return (
          <button
            key="activity-log"
            type="button"
            aria-haspopup="dialog"
            aria-expanded={!!ctx.state.activityLogOpen}
            onClick={() => ctx.setState({ activityLogOpen: !ctx.state.activityLogOpen })}
            style={toolbarBtn(!!ctx.state.activityLogOpen)}
          >
            操作日志（{rows.length}）
          </button>
        );
      },
      renderOverlay: (ctx) => {
        if (!ctx.state.activityLogOpen) return null;
        const rows = collectRows(ctx.data as Candidate[] | undefined).slice(0, maxEntries);
        const close = () => ctx.setState({ activityLogOpen: false });
        return (
          <Overlay key="activity-log-overlay" title="操作日志" onClose={close} width={400} zIndex={56}>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {rows.length === 0 && (
                <span style={{ color: tokens.muted, fontSize: 13 }}>
                  暂无日志：流转、备注等操作会自动记录到候选人 history。
                </span>
              )}
              {rows.map((r, i) => (
                <div
                  key={\`\${r.at}-\${i}\`}
                  style={{ display: "flex", gap: 8, fontSize: 13, alignItems: "baseline" }}
                >
                  <span style={{ color: tokens.faint, fontSize: 12, flexShrink: 0 }}>
                    {r.at.slice(5, 16).replace("T", " ")}
                  </span>
                  <span style={{ color: tokens.text }}>
                    <strong>{r.candidateName}</strong> · {r.action}
                    {r.detail ? \` → \${r.detail}\` : ""}
                  </span>
                </div>
              ))}
            </div>
          </Overlay>
        );
      },
    },
  };
};

function collectRows(data: Candidate[] | undefined): LogRow[] {
  const rows: LogRow[] = [];
  for (const c of data ?? []) {
    for (const h of c.history ?? []) {
      rows.push({ ...h, candidateName: c.name });
    }
  }
  return rows.sort((a, b) => (a.at < b.at ? 1 : -1));
}

createActivityLogPlugin.meta = doc as PluginDoc;
`,B1=`import type { PluginDoc } from "vane-plugin-core";
import type {
  Candidate,
  CandidatePluginCreator,
} from "../../components/CandidatePlugin/plugins/types";
import { Overlay } from "../../components/CandidatePlugin/plugins/overlay";
import { tokens, toolbarBtn } from "../../components/CandidatePlugin/plugins/tokens";
import doc from "./doc.json";

export interface ArchivePoolConfig {
  /** 人才库浮层每页条数上限 */
  poolPageSize?: number;
}

/**
 * ArchivePool —— 人才库归档池。
 * transformData 把 archived 候选人从主看板滤除；工具栏「人才库」按钮（带计数）
 * 打开浮层，支持恢复（archived:false）与彻底流转查看。归档入口在批量操作与
 * 卡片右键场景之外，这里额外提供卡片操作区「归档」按钮。
 */
export const createArchivePoolPlugin: CandidatePluginCreator<ArchivePoolConfig> = (
  config = {}
) => {
  const poolPageSize = config.poolPageSize ?? 0;
  return {
    name: "archive-pool",
    version: "0.1.0",
    description: doc.description,
    priority: 50,
    config: { order: 50 },
    hooks: {
      transformData: (_ctx, data) => {
        return (((data as Candidate[]) ?? []).filter((c) => !c.archived)) as typeof data;
      },
      renderToolbar: (ctx) => {
        // 注意：ctx.data 已是 transformData 之后的主看板数据，统计全量需从
        // state 缓存的原始列表取；这里用 props.data（宿主原始列表）兜底，
        // 归档人数 = 原始 - 看板。
        const raw = (ctx.props?.data as Candidate[] | undefined) ?? [];
        const archivedCount = raw.filter((c) => c.archived).length;
        const open = !!ctx.state.archivePoolOpen;
        return (
          <button
            key="archive-pool"
            type="button"
            aria-haspopup="dialog"
            aria-expanded={open}
            onClick={() => ctx.setState({ archivePoolOpen: !open })}
            style={toolbarBtn(open)}
          >
            人才库（{archivedCount}）
          </button>
        );
      },
      renderOverlay: (ctx) => {
        if (!ctx.state.archivePoolOpen) return null;
        const raw = (ctx.props?.data as Candidate[] | undefined) ?? [];
        const archived = raw.filter((c) => c.archived);
        const list = poolPageSize > 0 ? archived.slice(0, poolPageSize) : archived;
        const close = () => ctx.setState({ archivePoolOpen: false });
        return (
          <Overlay key="archive-pool-overlay" title={\`人才库（\${archived.length}）\`} onClose={close} width={420} zIndex={56}>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {list.length === 0 && (
                <span style={{ color: tokens.muted, fontSize: 13 }}>人才库为空：在卡片或批量操作里归档候选人后会出现在这里。</span>
              )}
              {list.map((c) => (
                <div
                  key={c.id}
                  data-candidate-id={c.id}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    border: \`1px solid \${tokens.line}\`,
                    borderRadius: 8,
                    padding: "8px 10px",
                    fontSize: 13,
                  }}
                >
                  <span style={{ color: tokens.text, flex: 1, minWidth: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                    <strong>{c.name}</strong>
                    <span style={{ color: tokens.muted }}> · {c.role}</span>
                  </span>
                  <button
                    type="button"
                    aria-label={\`恢复 \${c.name} 到看板\`}
                    onClick={() => ctx.updateCandidate(c.id, { archived: false })}
                    style={toolbarBtn(true)}
                  >
                    恢复
                  </button>
                </div>
              ))}
            </div>
          </Overlay>
        );
      },
      renderCardActions: (ctx, candidate) => (
        <button
          key="archive"
          type="button"
          aria-label={\`归档 \${candidate.name} 到人才库\`}
          onClick={() => ctx.updateCandidate(candidate.id, { archived: true })}
          style={poolBtn}
        >
          归档
        </button>
      ),
    },
  };
};

const poolBtn = {
  border: \`1px solid \${tokens.lineStrong}\`,
  background: tokens.chipBg,
  color: tokens.chipText,
  borderRadius: 6,
  fontSize: 12,
  padding: "2px 8px",
  cursor: "pointer",
};

createArchivePoolPlugin.meta = doc as PluginDoc;
`,F1=`import type { PluginDoc } from "vane-plugin-core";
import type {
  Candidate,
  CandidatePluginCreator,
  StageConfig,
} from "../../components/CandidatePlugin/plugins/types";
import { DEFAULT_STAGES } from "../../components/CandidatePlugin/plugins/types";
import { tokens, toolbarBtn } from "../../components/CandidatePlugin/plugins/tokens";
import doc from "./doc.json";

export interface BatchOpConfig {
  /** 批量操作目标阶段（默认全部阶段） */
  targetStages?: StageConfig[];
}

/**
 * BatchOp —— 批量操作。
 * 工具栏「批量」开关进入选择模式；卡片操作区出现复选框（state.batchSelected）；
 * 工具栏随后展示全选/清空/批量流转到…/批量归档。所有写操作走
 * ctx.updateCandidate / ctx.moveCandidate，逐条落内部态。
 */
export const createBatchOpPlugin: CandidatePluginCreator<BatchOpConfig> = (
  config = {}
) => {
  return {
    name: "batch-op",
    version: "0.1.0",
    description: doc.description,
    priority: 30,
    config: { order: 30 },
    hooks: {
      renderToolbar: (ctx) => {
        const batchMode = !!ctx.state.batchMode;
        const selected = (ctx.state.batchSelected as string[] | undefined) ?? [];
        const stages =
          config.targetStages ??
          (ctx.props?.stages ?? (DEFAULT_STAGES as StageConfig[])) as StageConfig[];
        const candidates = ((ctx.data as Candidate[]) ?? []).filter((c) => !c.archived);
        return (
          <span key="batch-op" style={{ display: "inline-flex", gap: 6, alignItems: "center" }}>
            <button
              type="button"
              aria-pressed={batchMode}
              onClick={() =>
                ctx.setState({ batchMode: !batchMode, batchSelected: [] })
              }
              style={toolbarBtn(batchMode)}
            >
              批量
            </button>
            {batchMode && (
              <>
                <button
                  type="button"
                  aria-label="全选当前候选人"
                  onClick={() =>
                    ctx.setState({ batchSelected: candidates.map((c) => c.id) })
                  }
                  style={toolbarBtn(false)}
                >
                  全选
                </button>
                <button
                  type="button"
                  aria-label="清空选择"
                  onClick={() => ctx.setState({ batchSelected: [] })}
                  style={toolbarBtn(false)}
                >
                  清空
                </button>
                <select
                  aria-label="批量流转到阶段"
                  value=""
                  disabled={selected.length === 0}
                  onChange={(e) => {
                    const target = e.target.value;
                    if (!target) return;
                    for (const id of selected) {
                      const c = candidates.find((x) => x.id === id);
                      if (!c) continue;
                      const from = stages.findIndex((s) => s.key === c.stage);
                      const to = stages.findIndex((s) => s.key === target);
                      if (from >= 0 && to >= 0) {
                        ctx.moveCandidate(id, to - from);
                      } else {
                        ctx.updateCandidate(id, { stage: target });
                      }
                    }
                    ctx.setState({ batchSelected: [] });
                  }}
                  style={{
                    ...selectStyle,
                    ...(selected.length === 0 ? { color: tokens.faint } : {}),
                  }}
                >
                  <option value="">
                    流转到…{selected.length > 0 ? \`（已选 \${selected.length}）\` : ""}
                  </option>
                  {stages.map((s) => (
                    <option key={s.key} value={s.key}>
                      {s.label}
                    </option>
                  ))}
                </select>
                <button
                  type="button"
                  disabled={selected.length === 0}
                  aria-label={\`归档已选 \${selected.length} 位候选人\`}
                  onClick={() => {
                    for (const id of selected) {
                      ctx.updateCandidate(id, { archived: true });
                    }
                    ctx.setState({ batchSelected: [] });
                  }}
                  style={{
                    ...toolbarBtn(false),
                    ...(selected.length === 0 ? { color: tokens.faint, cursor: "not-allowed" } : {}),
                  }}
                >
                  归档
                </button>
              </>
            )}
          </span>
        );
      },
      renderCardActions: (ctx, candidate) => {
        if (!ctx.state.batchMode) return null;
        const selected = ((ctx.state.batchSelected as string[] | undefined) ?? []);
        const checked = selected.includes(candidate.id);
        return (
          <label
            key="batch-check"
            style={{ display: "inline-flex", alignItems: "center", gap: 4, fontSize: 12, color: tokens.muted }}
          >
            <input
              type="checkbox"
              checked={checked}
              aria-label={\`选择 \${candidate.name}\`}
              onChange={() =>
                ctx.setState({
                  batchSelected: checked
                    ? selected.filter((id) => id !== candidate.id)
                    : [...selected, candidate.id],
                })
              }
            />
            选择
          </label>
        );
      },
    },
  };
};

const selectStyle = {
  border: \`1px solid \${tokens.lineStrong}\`,
  borderRadius: 6,
  fontSize: 12,
  padding: "3px 6px",
  background: "#fff",
  color: tokens.text,
} as const;

createBatchOpPlugin.meta = doc as PluginDoc;
`,U1=`import type { PluginDoc } from "vane-plugin-core";
import type {
  Candidate,
  CandidatePluginCreator,
} from "../../components/CandidatePlugin/plugins/types";
import { maskEmail, maskPhone } from "../../components/CandidatePlugin/domain";
import doc from "./doc.json";

export interface ContactMaskConfig {
  /** 是否脱敏邮箱 */
  maskEmail?: boolean;
  /** 是否脱敏手机号 */
  maskPhone?: boolean;
  /** 免脱敏阶段（如 offer/hired 阶段可见完整联系方式） */
  visibleStages?: string[];
}

/**
 * ContactMask —— 联系方式脱敏。
 * transformData 把邮箱 / 手机号替换为掩码（138****5678 / a***c@example.com），
 * visibleStages 内的阶段豁免（招聘后期需要完整联系方式联系候选人）。
 * 数据管道末位执行（priority 低于排序/筛选），保证排序仍用原始数据。
 */
export const createContactMaskPlugin: CandidatePluginCreator<ContactMaskConfig> = (
  config = {}
) => {
  const maskEmailOn = config.maskEmail ?? true;
  const maskPhoneOn = config.maskPhone ?? true;
  const visibleStages = config.visibleStages ?? [];
  return {
    name: "contact-mask",
    version: "0.1.0",
    description: doc.description,
    priority: 10,
    config: { order: 10 },
    hooks: {
      transformData: (_ctx, data) => {
        const list = (data as Candidate[]) ?? [];
        return list.map((c) => {
          if (visibleStages.includes(c.stage)) return c;
          const next = { ...c };
          if (maskEmailOn) next.email = maskEmail(c.email);
          if (maskPhoneOn) next.phone = maskPhone(c.phone);
          return next;
        }) as typeof data;
      },
    },
  };
};

createContactMaskPlugin.meta = doc as PluginDoc;
`,W1=`import type { PluginDoc } from "vane-plugin-core";
import type {
  Candidate,
  CandidatePluginCreator,
} from "../../components/CandidatePlugin/plugins/types";
import doc from "./doc.json";

export interface DupCheckConfig {
  /** 参与判重的字段（候选人为空的字段跳过） */
  fields?: Array<"name" | "email" | "phone">;
}

/** 计算候选人 key：按所选字段拼接（缺失字段跳过；全空返回 null 不判重） */
function dupKeys(c: Candidate, fields: Array<"name" | "email" | "phone">): string[] {
  const keys: string[] = [];
  for (const f of fields) {
    const v = (c[f] as string | undefined)?.trim().toLowerCase();
    if (v) keys.push(\`\${f}:\${v}\`);
  }
  return keys;
}

/**
 * DupCheck —— 重复候选人检测。
 * 用 signature map 扫描列表中同名 / 同邮箱 / 同手机号的候选人，
 * 命中者在卡片徽章区显示「疑似重复」警示（黄色底，防误导为错误）。
 */
export const createDupCheckPlugin: CandidatePluginCreator<DupCheckConfig> = (
  config = {}
) => {
  const fields = config.fields ?? ["name", "email", "phone"];
  return {
    name: "dup-check",
    version: "0.1.0",
    description: doc.description,
    priority: 20,
    config: { order: 20 },
    hooks: {
      renderCardBadges: (ctx, candidate) => {
        const list = (ctx.data as Candidate[]) ?? [];
        const myKeys = dupKeys(candidate, fields);
        if (myKeys.length === 0) return null;
        const dupIds = new Set<string>();
        for (const other of list) {
          if (other.id === candidate.id) continue;
          if (dupKeys(other, fields).some((k) => myKeys.includes(k))) {
            dupIds.add(other.id);
          }
        }
        if (dupIds.size === 0) return null;
        return (
          <span
            key="dup-check"
            title={\`与另外 \${dupIds.size} 位候选人疑似重复\`}
            aria-label={\`疑似重复：另有 \${dupIds.size} 位\`}
            style={{
              fontSize: 11,
              fontWeight: 700,
              color: "#8a4a06",
              background: "#fdf1e2",
              border: "1px solid #ecd3ae",
              borderRadius: 999,
              padding: "0 8px",
              lineHeight: "18px",
            }}
          >
            疑似重复
          </span>
        );
      },
    },
  };
};

createDupCheckPlugin.meta = doc as PluginDoc;
`,H1=`import type { PluginDoc } from "vane-plugin-core";
import type {
  Candidate,
  CandidatePluginCreator,
  StageConfig,
} from "../../components/CandidatePlugin/plugins/types";
import { DEFAULT_STAGES } from "../../components/CandidatePlugin/plugins/types";
import { csvCell } from "../../components/CandidatePlugin/domain";
import { toolbarBtn } from "../../components/CandidatePlugin/plugins/tokens";
import doc from "./doc.json";

export interface ExportConfig {
  /** 导出文件名（不含扩展名） */
  filename?: string;
  /** 额外列（header + 取值函数） */
  columns?: Array<{ header: string; get: (c: Candidate) => string | number | undefined }>;
}

const BUILTIN_COLUMNS: Array<{ header: string; get: (c: Candidate) => string | number | undefined }> = [
  { header: "姓名", get: (c) => c.name },
  { header: "岗位", get: (c) => c.role },
  { header: "阶段", get: (c) => c.stage },
  { header: "匹配分", get: (c) => c.score },
  { header: "邮箱", get: (c) => c.email },
  { header: "手机号", get: (c) => c.phone },
  { header: "来源", get: (c) => c.source },
  { header: "投递时间", get: (c) => c.appliedAt },
];

function download(filename: string, content: string) {
  // \\ufeff BOM：保证 Excel 打开 UTF-8 CSV 不乱码
  const blob = new Blob(["\\ufeff" + content], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

/**
 * Export —— CSV 导出。
 * 工具栏「导出 CSV」按钮：把当前看板数据（经筛选/排序管道之后）按列导出为
 * CSV（带 BOM，公式注入防护）。列可扩展。
 */
export const createExportPlugin: CandidatePluginCreator<ExportConfig> = (
  config = {}
) => {
  const filename = config.filename ?? "candidates";
  return {
    name: "export",
    version: "0.1.0",
    description: doc.description,
    priority: 60,
    config: { order: 60 },
    hooks: {
      renderToolbar: (ctx) => {
        const stages = (ctx.props?.stages ??
          (DEFAULT_STAGES as StageConfig[])) as StageConfig[];
        return (
          <button
            key="export"
            type="button"
            aria-label="导出候选人列表为 CSV"
            onClick={() => {
              const candidates = (ctx.data as Candidate[]) ?? [];
              const columns = [...BUILTIN_COLUMNS, ...(config.columns ?? [])];
              const stageLabel = (key: string) =>
                stages.find((s) => s.key === key)?.label ?? key;
              const rows = [
                columns.map((col) => csvCell(col.header)).join(","),
                ...candidates.map((c) =>
                  columns
                    .map((col) =>
                      csvCell(
                        col === BUILTIN_COLUMNS[2] ? stageLabel(c.stage) : col.get(c)
                      )
                    )
                    .join(",")
                ),
              ];
              download(\`\${filename}-\${new Date().toISOString().slice(0, 10)}.csv\`, rows.join("\\r\\n"));
            }}
            style={toolbarBtn(false)}
          >
            导出 CSV
          </button>
        );
      },
    },
  };
};

createExportPlugin.meta = doc as PluginDoc;
`,V1=`import type { PluginDoc } from "vane-plugin-core";
import type {
  Candidate,
  CandidatePluginCreator,
  StageConfig,
} from "../../components/CandidatePlugin/plugins/types";
import { DEFAULT_STAGES } from "../../components/CandidatePlugin/plugins/types";
import { tokens, toolbarBtn } from "../../components/CandidatePlugin/plugins/tokens";
import doc from "./doc.json";

export interface FilterConfig {
  /** 可选的标签筛选项（默认从数据里收集） */
  tagOptions?: string[];
}

/**
 * Filter —— 阶段 / 标签筛选。
 * renderToolbar：阶段下拉 + 标签下拉 + 清除按钮（状态写 ctx.state.filterStage /
 * filterTag）；transformData 按 state 过滤候选人列表。
 */
export const createFilterPlugin: CandidatePluginCreator<FilterConfig> = (
  config = {}
) => {
  return {
    name: "filter",
    version: "0.1.0",
    description: doc.description,
    priority: 50,
    config: { order: 50 },
    hooks: {
      transformData: (ctx, data) => {
        const stage = ctx.state.filterStage as string | undefined;
        const tag = ctx.state.filterTag as string | undefined;
        if (!stage && !tag) return data;
        const list = (data as Candidate[]) ?? [];
        return list.filter(
          (c) =>
            (!stage || c.stage === stage) && (!tag || (c.tags ?? []).includes(tag))
        ) as typeof data;
      },
      renderToolbar: (ctx) => {
        const stages = (ctx.props?.stages ??
          (DEFAULT_STAGES as StageConfig[])) as StageConfig[];
        const stage = (ctx.state.filterStage as string | undefined) ?? "";
        const tag = (ctx.state.filterTag as string | undefined) ?? "";
        // 标签选项：优先配置；否则从当前数据收集
        const tagOptions =
          config.tagOptions ??
          Array.from(
            new Set(((ctx.data as Candidate[]) ?? []).flatMap((c) => c.tags ?? []))
          );
        const hasFilter = !!(stage || tag);
        return (
          <span key="filter" style={{ display: "inline-flex", gap: 6, alignItems: "center" }}>
            <select
              aria-label="按阶段筛选"
              value={stage}
              onChange={(e) => ctx.setState({ filterStage: e.target.value || undefined })}
              style={selectStyle}
            >
              <option value="">全部阶段</option>
              {stages.map((s) => (
                <option key={s.key} value={s.key}>
                  {s.label}
                </option>
              ))}
            </select>
            {tagOptions.length > 0 && (
              <select
                aria-label="按标签筛选"
                value={tag}
                onChange={(e) => ctx.setState({ filterTag: e.target.value || undefined })}
                style={selectStyle}
              >
                <option value="">全部标签</option>
                {tagOptions.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            )}
            {hasFilter && (
              <button
                type="button"
                onClick={() => ctx.setState({ filterStage: undefined, filterTag: undefined })}
                style={toolbarBtn(false)}
              >
                清除筛选
              </button>
            )}
          </span>
        );
      },
    },
  };
};

const selectStyle = {
  border: \`1px solid \${tokens.lineStrong}\`,
  borderRadius: 6,
  fontSize: 12,
  padding: "3px 6px",
  background: "#fff",
  color: tokens.text,
} as const;

createFilterPlugin.meta = doc as PluginDoc;
`,K1=`import type { PluginDoc } from "vane-plugin-core";
import type {
  Candidate,
  CandidatePluginCreator,
} from "../../components/CandidatePlugin/plugins/types";
import { Overlay } from "../../components/CandidatePlugin/plugins/overlay";
import { tokens, toolbarBtn } from "../../components/CandidatePlugin/plugins/tokens";
import { FieldGroup } from "./FieldGroup";
import doc from "./doc.json";

export interface InterviewSlotConfig {
  /** 可选面试时间槽（展示文本） */
  slots?: string[];
  /** 可选面试官 */
  interviewers?: string[];
  /** 面试形式 */
  modes?: Array<"onsite" | "video" | "phone">;
}

const MODE_LABEL: Record<string, string> = {
  onsite: "现场",
  video: "视频",
  phone: "电话",
};

/**
 * InterviewSlot —— 面试安排。
 * 卡片操作区「安排面试」入口；浮层内从时间槽 / 面试官 / 形式中选择并保存到
 * candidate.interview。已安排时徽章区（经卡片正文 meta）显示面试信息。
 */
export const createInterviewSlotPlugin: CandidatePluginCreator<InterviewSlotConfig> = (
  config = {}
) => {
  const slots = config.slots ?? ["周二 14:00", "周三 10:00", "周四 16:00", "周五 15:00"];
  const interviewers = config.interviewers ?? ["王工", "李总监"];
  const modes = config.modes ?? ["onsite", "video"];
  return {
    name: "interview-slot",
    version: "0.1.0",
    description: doc.description,
    priority: 40,
    config: { order: 40 },
    hooks: {
      renderCardActions: (ctx, candidate) => {
        const editing = ctx.state.interviewEditingId === candidate.id;
        return (
          <button
            key="interview"
            type="button"
            aria-haspopup="dialog"
            aria-expanded={editing}
            aria-label={\`安排 \${candidate.name} 的面试\`}
            onClick={() =>
              ctx.setState({
                interviewEditingId: editing ? null : candidate.id,
              })
            }
            style={slotBtn}
          >
            {candidate.interview ? "改期" : "安排面试"}
          </button>
        );
      },
      renderCardBody: (_ctx, candidate) => {
        const itv = candidate.interview;
        if (!itv) return null;
        return (
          <div
            style={{
              marginTop: 6,
              fontSize: 12,
              color: "#8a4a06",
              background: "#fdf1e2",
              borderRadius: 6,
              padding: "4px 8px",
            }}
          >
            📅 面试：{itv.date}
            {itv.mode && \` · \${MODE_LABEL[itv.mode] ?? itv.mode}\`}
            {itv.interviewer && \` · \${itv.interviewer}\`}
          </div>
        );
      },
      renderOverlay: (ctx) => {
        const id = ctx.state.interviewEditingId as string | null;
        if (!id) return null;
        const candidate = ((ctx.data as Candidate[]) ?? []).find((c) => c.id === id);
        if (!candidate) return null;
        const close = () => ctx.setState({ interviewEditingId: null });
        const save = (patch: Partial<NonNullable<Candidate["interview"]>>) => {
          const base = candidate.interview ?? { date: slots[0] };
          ctx.updateCandidate(id, {
            interview: { ...base, ...patch } as Candidate["interview"],
          });
        };
        return (
          <Overlay
            key="interview-overlay"
            title={\`安排面试 · \${candidate.name}\`}
            onClose={close}
            width={360}
            zIndex={56}
          >
            <FieldGroup label="时间槽">
              {slots.map((s) => (
                <button
                  key={s}
                  type="button"
                  aria-pressed={candidate.interview?.date === s}
                  onClick={() => save({ date: s })}
                  style={toolbarBtn(candidate.interview?.date === s)}
                >
                  {s}
                </button>
              ))}
            </FieldGroup>
            <FieldGroup label="面试官">
              {interviewers.map((p) => (
                <button
                  key={p}
                  type="button"
                  aria-pressed={candidate.interview?.interviewer === p}
                  onClick={() => save({ interviewer: p })}
                  style={toolbarBtn(candidate.interview?.interviewer === p)}
                >
                  {p}
                </button>
              ))}
            </FieldGroup>
            <FieldGroup label="形式">
              {modes.map((m) => (
                <button
                  key={m}
                  type="button"
                  aria-pressed={candidate.interview?.mode === m}
                  onClick={() => save({ mode: m })}
                  style={toolbarBtn(candidate.interview?.mode === m)}
                >
                  {MODE_LABEL[m] ?? m}
                </button>
              ))}
            </FieldGroup>
            {candidate.interview && (
              <button
                type="button"
                onClick={() => ctx.updateCandidate(id, { interview: undefined })}
                style={{ ...toolbarBtn(false), marginTop: 12 }}
              >
                取消面试安排
              </button>
            )}
          </Overlay>
        );
      },
    },
  };
};

const slotBtn = {
  border: \`1px solid \${tokens.lineStrong}\`,
  background: tokens.chipBg,
  color: tokens.chipText,
  borderRadius: 6,
  fontSize: 12,
  padding: "2px 8px",
  cursor: "pointer",
};

createInterviewSlotPlugin.meta = doc as PluginDoc;
`,G1=`import type { PluginDoc } from "vane-plugin-core";
import type {
  Candidate,
  CandidatePluginCreator,
} from "../../components/CandidatePlugin/plugins/types";
import { Overlay } from "../../components/CandidatePlugin/plugins/overlay";
import { tokens, toolbarBtn } from "../../components/CandidatePlugin/plugins/tokens";
import doc from "./doc.json";

export interface NoteConfig {
  /** 备注作者署名（无宿主登录态时的默认作者） */
  authorName?: string;
  /** 每位候选人最多保留备注条数 */
  maxNotes?: number;
}

/**
 * Note —— 招聘备注。
 * 卡片操作区备注按钮（带条数角标）；浮层内查看/新增/删除备注，
 * 写回 candidate.notes（ctx.updateCandidate）。删除仅限自己刚加的（演示语义：
 * 所有插件写入的备注 author 相同即可删）。
 */
export const createNotePlugin: CandidatePluginCreator<NoteConfig> = (
  config = {}
) => {
  const authorName = config.authorName ?? "我";
  const maxNotes = config.maxNotes ?? 50;
  return {
    name: "note",
    version: "0.1.0",
    description: doc.description,
    priority: 30,
    config: { order: 30 },
    hooks: {
      renderCardActions: (ctx, candidate) => {
        const count = candidate.notes?.length ?? 0;
        return (
          <button
            key="note"
            type="button"
            aria-haspopup="dialog"
            aria-label={\`\${candidate.name} 的备注（\${count} 条）\`}
            onClick={() =>
              ctx.setState({
                noteEditingId: ctx.state.noteEditingId === candidate.id ? null : candidate.id,
              })
            }
            style={noteBtn}
          >
            备注{count > 0 ? \` (\${count})\` : ""}
          </button>
        );
      },
      renderOverlay: (ctx) => {
        const id = ctx.state.noteEditingId as string | null;
        if (!id) return null;
        const candidate = ((ctx.data as Candidate[]) ?? []).find((c) => c.id === id);
        if (!candidate) return null;
        const notes = candidate.notes ?? [];
        const close = () => ctx.setState({ noteEditingId: null });
        return (
          <Overlay key="note-overlay" title={\`备注 · \${candidate.name}\`} onClose={close} width={380} zIndex={56}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const input = e.currentTarget.elements.namedItem("text") as HTMLInputElement | null;
                const text = input?.value.trim();
                if (!text) return;
                ctx.updateCandidate(id, {
                  notes: [
                    ...notes,
                    { id: \`n-\${Date.now()}\`, author: authorName, at: new Date().toISOString(), text },
                  ].slice(-maxNotes),
                });
                if (input) input.value = "";
              }}
              style={{ display: "flex", gap: 6, marginBottom: 12 }}
            >
              <input
                name="text"
                aria-label="备注内容"
                placeholder="记录沟通要点…"
                style={{
                  flex: 1,
                  border: \`1px solid \${tokens.lineStrong}\`,
                  borderRadius: 6,
                  padding: "5px 8px",
                  fontSize: 13,
                  color: tokens.text,
                  background: "#fff",
                }}
              />
              <button type="submit" style={toolbarBtn(true)}>添加</button>
            </form>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {notes.length === 0 && (
                <span style={{ color: tokens.muted, fontSize: 13 }}>暂无备注</span>
              )}
              {notes
                .slice()
                .reverse()
                .map((n) => (
                  <div
                    key={n.id}
                    style={{
                      border: \`1px solid \${tokens.line}\`,
                      borderRadius: 8,
                      padding: "8px 10px",
                      fontSize: 13,
                    }}
                  >
                    <div style={{ display: "flex", gap: 8, marginBottom: 2 }}>
                      <strong style={{ color: tokens.text }}>{n.author}</strong>
                      <span style={{ color: tokens.faint, fontSize: 12 }}>
                        {n.at.slice(0, 16).replace("T", " ")}
                      </span>
                      <button
                        type="button"
                        aria-label={\`删除备注 \${n.text.slice(0, 8)}\`}
                        onClick={() =>
                          ctx.updateCandidate(id, {
                            notes: notes.filter((x) => x.id !== n.id),
                          })
                        }
                        style={{
                          marginLeft: "auto",
                          border: "none",
                          background: "transparent",
                          color: tokens.bad,
                          cursor: "pointer",
                          fontSize: 12,
                        }}
                      >
                        删除
                      </button>
                    </div>
                    <div style={{ color: tokens.text }}>{n.text}</div>
                  </div>
                ))}
            </div>
          </Overlay>
        );
      },
    },
  };
};

const noteBtn = {
  border: \`1px solid \${tokens.lineStrong}\`,
  background: tokens.chipBg,
  color: tokens.chipText,
  borderRadius: 6,
  fontSize: 12,
  padding: "2px 8px",
  cursor: "pointer",
};

createNotePlugin.meta = doc as PluginDoc;
`,Q1=`import type { PluginDoc } from "vane-plugin-core";
import type {
  CandidatePluginCreator,
} from "../../components/CandidatePlugin/plugins/types";
import doc from "./doc.json";

export interface OfferConfig {
  /** 各状态文案（缺省用内置中文） */
  labels?: Partial<Record<"draft" | "sent" | "accepted" | "declined", string>>;
}

const DEFAULT_LABELS: Record<"draft" | "sent" | "accepted" | "declined", string> = {
  draft: "Offer 审批中",
  sent: "Offer 已发出",
  accepted: "已接受 Offer",
  declined: "已婉拒 Offer",
};

const STATUS_COLOR: Record<"draft" | "sent" | "accepted" | "declined", { fg: string; bg: string }> = {
  draft: { fg: "#5d636a", bg: "#f2f3f5" },
  sent: { fg: "#1c6ea8", bg: "#e7f1fa" },
  accepted: { fg: "#1f7a3f", bg: "#e8f5ec" },
  declined: { fg: "#b42318", bg: "#fdeceb" },
};

/**
 * Offer —— Offer 状态徽章。
 * candidate.offer 存在时在卡片徽章区显示状态胶囊（审批中灰 / 已发出蓝 /
 * 已接受绿 / 已婉拒红）。纯展示，不改数据。
 */
export const createOfferPlugin: CandidatePluginCreator<OfferConfig> = (
  config = {}
) => {
  const labels = { ...DEFAULT_LABELS, ...(config.labels ?? {}) };
  return {
    name: "offer",
    version: "0.1.0",
    description: doc.description,
    priority: 40,
    config: { order: 40 },
    hooks: {
      renderCardBadges: (_ctx, candidate) => {
        const offer = candidate.offer;
        if (!offer) return null;
        const color = STATUS_COLOR[offer.status];
        return (
          <span
            key="offer"
            title={offer.salary ? \`\${labels[offer.status]} · \${offer.salary}\` : labels[offer.status]}
            aria-label={labels[offer.status]}
            style={{
              fontSize: 11,
              fontWeight: 700,
              color: color.fg,
              background: color.bg,
              borderRadius: 999,
              padding: "0 8px",
              lineHeight: "18px",
            }}
          >
            {labels[offer.status]}
          </span>
        );
      },
    },
  };
};

createOfferPlugin.meta = doc as PluginDoc;
`,Y1=`import type { PluginDoc } from "vane-plugin-core";
import type {
  Candidate,
  CandidatePluginCreator,
} from "../../components/CandidatePlugin/plugins/types";
import doc from "./doc.json";

export interface RecommendSortConfig {
  /** 排序依据：score 匹配分优先 / fresh 投递时间优先 */
  by?: "score" | "fresh";
  /** 是否降序（默认 true：分高 / 新投递在前） */
  desc?: boolean;
}

function parseTime(v?: string): number {
  if (!v) return 0;
  const t = Date.parse(v);
  return Number.isNaN(t) ? 0 : t;
}

/**
 * RecommendSort —— 智能推荐排序。
 * transformData 对候选人列表排序：score 模式按匹配分（分数相同按投递时间新
 * 在前）；fresh 模式按投递时间。已归档候选人交给 ArchivePool 过滤，本插件
 * 不关心。仅重排顺序，不增删数据。
 */
export const createRecommendSortPlugin: CandidatePluginCreator<RecommendSortConfig> = (
  config = {}
) => {
  const by = config.by ?? "score";
  const desc = config.desc ?? true;
  return {
    name: "recommend-sort",
    version: "0.1.0",
    description: doc.description,
    priority: 30,
    config: { order: 30 },
    hooks: {
      transformData: (_ctx, data) => {
        const list = [...((data as Candidate[]) ?? [])];
        const dir = desc ? -1 : 1;
        list.sort((a, b) => {
          if (by === "score") {
            const sa = a.score ?? -1;
            const sb = b.score ?? -1;
            if (sa !== sb) return (sa - sb) * dir;
            return (parseTime(a.appliedAt) - parseTime(b.appliedAt)) * -dir;
          }
          return (parseTime(a.appliedAt) - parseTime(b.appliedAt)) * dir;
        });
        return list as typeof data;
      },
    },
  };
};

createRecommendSortPlugin.meta = doc as PluginDoc;
`,X1=`import type { PluginDoc } from "vane-plugin-core";
import type {
  Candidate,
  CandidatePluginCreator,
} from "../../components/CandidatePlugin/plugins/types";
import { Overlay } from "../../components/CandidatePlugin/plugins/overlay";
import { tokens, toolbarBtn } from "../../components/CandidatePlugin/plugins/tokens";
import doc from "./doc.json";

export interface RejectTemplate {
  id: string;
  title: string;
  body: string;
}

export interface RejectTplConfig {
  /** 婉拒信模板（替换内置模板） */
  templates?: RejectTemplate[];
  /** 流转到目标阶段 key（默认 rejected） */
  targetStage?: string;
}

const BUILTIN_TEMPLATES: RejectTemplate[] = [
  {
    id: "polite",
    title: "礼貌婉拒",
    body:
      "感谢您对本职位的关注。经过综合评估，我们认为您与当前岗位的匹配度仍有差距，但您的经历给我们留下了深刻印象。我们会将您纳入人才库，如有更合适的机会将第一时间与您联系。祝求职顺利！",
  },
  {
    id: "skill-gap",
    title: "技能方向不符",
    body:
      "感谢您抽出时间参与面试。该岗位更侧重 {{gap}} 方向的经验，与您当前的技术栈存在一定差异，故本次未能推进。期待未来在更匹配的岗位合作。",
  },
];

/**
 * RejectTpl —— 婉拒模板。
 * 卡片操作区「婉拒」入口；浮层内选择模板、可预览编辑，确认后把候选人
 * 流转到 targetStage（默认 rejected，自动留 history）。
 */
export const createRejectTplPlugin: CandidatePluginCreator<RejectTplConfig> = (
  config = {}
) => {
  const templates = config.templates ?? BUILTIN_TEMPLATES;
  const targetStage = config.targetStage ?? "rejected";
  return {
    name: "reject-tpl",
    version: "0.1.0",
    description: doc.description,
    priority: 50,
    config: { order: 50 },
    hooks: {
      renderCardActions: (ctx, candidate) => {
        const editing = ctx.state.rejectEditingId === candidate.id;
        return (
          <button
            key="reject"
            type="button"
            aria-haspopup="dialog"
            aria-expanded={editing}
            aria-label={\`婉拒 \${candidate.name}\`}
            onClick={() =>
              ctx.setState({ rejectEditingId: editing ? null : candidate.id })
            }
            style={rejectBtn}
          >
            婉拒
          </button>
        );
      },
      renderOverlay: (ctx) => {
        const id = ctx.state.rejectEditingId as string | null;
        if (!id) return null;
        const candidate = ((ctx.data as Candidate[]) ?? []).find((c) => c.id === id);
        if (!candidate) return null;
        const tplId = (ctx.state.rejectTplId as string | null) ?? templates[0].id;
        const tpl = templates.find((t) => t.id === tplId) ?? templates[0];
        const close = () => ctx.setState({ rejectEditingId: null, rejectTplId: null });
        return (
          <Overlay key="reject-overlay" title={\`婉拒 · \${candidate.name}\`} onClose={close} width={400} zIndex={57}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 10 }}>
              {templates.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  aria-pressed={t.id === tpl.id}
                  onClick={() => ctx.setState({ rejectTplId: t.id })}
                  style={toolbarBtn(t.id === tpl.id)}
                >
                  {t.title}
                </button>
              ))}
            </div>
            <textarea
              key={tpl.id}
              aria-label="婉拒信内容"
              defaultValue={tpl.body}
              rows={6}
              style={{
                width: "100%",
                boxSizing: "border-box",
                border: \`1px solid \${tokens.lineStrong}\`,
                borderRadius: 6,
                padding: "8px 10px",
                fontSize: 13,
                color: tokens.text,
                background: "#fff",
                resize: "vertical",
                marginBottom: 12,
              }}
            />
            <div style={{ display: "flex", gap: 8, justifyContent: "flex-end" }}>
              <button type="button" onClick={close} style={toolbarBtn(false)}>
                取消
              </button>
              <button
                type="button"
                onClick={() => {
                  ctx.updateCandidate(id, { stage: targetStage });
                  close();
                }}
                style={toolbarBtn(true)}
              >
                确认婉拒
              </button>
            </div>
          </Overlay>
        );
      },
    },
  };
};

const rejectBtn = {
  border: \`1px solid \${tokens.lineStrong}\`,
  background: tokens.chipBg,
  color: "#b42318",
  borderRadius: 6,
  fontSize: 12,
  padding: "2px 8px",
  cursor: "pointer",
};

createRejectTplPlugin.meta = doc as PluginDoc;
`,J1=`import type { PluginDoc } from "vane-plugin-core";
import type {
  CandidatePluginCreator,
} from "../../components/CandidatePlugin/plugins/types";
import { tokens } from "../../components/CandidatePlugin/plugins/tokens";
import doc from "./doc.json";

export interface ScoreConfig {
  /** >= 该值显示为绿色（优秀） */
  goodThreshold?: number;
  /** >= 该值显示为橙色（待定），否则红色（偏低） */
  warnThreshold?: number;
}

/** 匹配分 → 语义色（实色，满足对比度） */
export function scoreTone(score: number, good: number, warn: number): string {
  return score >= good ? tokens.good : score >= warn ? tokens.warn : tokens.bad;
}

/**
 * Score —— 候选人岗位匹配分徽章。
 * renderCardBadges：按阈值着色的分数胶囊（80+ 绿 / 60+ 橙 / 其余红）。
 */
export const createScorePlugin: CandidatePluginCreator<ScoreConfig> = (
  config = {}
) => {
  const good = config.goodThreshold ?? 80;
  const warn = config.warnThreshold ?? 60;
  return {
    name: "score",
    version: "0.1.0",
    description: doc.description,
    priority: 10,
    config: { order: 10 },
    hooks: {
      renderCardBadges: (_ctx, candidate) => {
        if (typeof candidate.score !== "number") return null;
        const color = scoreTone(candidate.score, good, warn);
        return (
          <span
            key="score"
            title={\`匹配分 \${candidate.score}\`}
            aria-label={\`匹配分 \${candidate.score}\`}
            style={{
              fontSize: 11,
              fontWeight: 700,
              color,
              border: \`1px solid \${color}\`,
              borderRadius: 999,
              padding: "0 8px",
              lineHeight: "18px",
            }}
          >
            {candidate.score}分
          </span>
        );
      },
    },
  };
};

createScorePlugin.meta = doc as PluginDoc;
`,Z1=`import type { PluginDoc } from "vane-plugin-core";
import type {
  Candidate,
  CandidatePluginCreator,
} from "../../components/CandidatePlugin/plugins/types";
import { tokens } from "../../components/CandidatePlugin/plugins/tokens";
import doc from "./doc.json";

export interface SearchConfig {
  /** 参与搜索的字段 */
  fields?: Array<"name" | "role" | "summary" | "tags" | "source">;
  /** 防抖毫秒（受控输入场景建议 200+） */
  debounceMs?: number;
}

function matchText(c: Candidate, kw: string, fields: Array<"name" | "role" | "summary" | "tags" | "source">): boolean {
  const lower = kw.toLowerCase();
  for (const f of fields) {
    const v = c[f];
    if (typeof v === "string" && v.toLowerCase().includes(lower)) return true;
    if (Array.isArray(v) && v.some((t) => t.toLowerCase().includes(lower))) return true;
  }
  return false;
}

/**
 * Search —— 关键词搜索。
 * renderToolbar：搜索输入框（写 ctx.state.searchKeyword）；transformData 按
 * 姓名/岗位/摘要/标签/来源匹配过滤。空关键词不过滤。
 */
export const createSearchPlugin: CandidatePluginCreator<SearchConfig> = (
  config = {}
) => {
  const fields = config.fields ?? ["name", "role", "summary", "tags", "source"];
  return {
    name: "search",
    version: "0.1.0",
    description: doc.description,
    priority: 40,
    config: { order: 40 },
    hooks: {
      transformData: (ctx, data) => {
        const kw = (ctx.state.searchKeyword as string | undefined)?.trim();
        if (!kw) return data;
        return (((data as Candidate[]) ?? []).filter((c) => matchText(c, kw, fields))) as typeof data;
      },
      renderToolbar: (ctx) => {
        const kw = (ctx.state.searchKeyword as string | undefined) ?? "";
        return (
          <span key="search" style={{ display: "inline-flex", alignItems: "center" }}>
            <input
              type="search"
              aria-label="搜索候选人"
              placeholder="搜索姓名 / 岗位 / 标签…"
              defaultValue={kw}
              onChange={(e) => ctx.setState({ searchKeyword: e.target.value || undefined })}
              style={{
                border: \`1px solid \${tokens.lineStrong}\`,
                borderRadius: 6,
                fontSize: 12,
                padding: "4px 8px",
                width: 180,
                color: tokens.text,
                background: "#fff",
              }}
            />
          </span>
        );
      },
    },
  };
};

createSearchPlugin.meta = doc as PluginDoc;
`,q1=`import type { PluginDoc } from "vane-plugin-core";
import type {
  CandidatePluginCreator,
  StageConfig,
} from "../../components/CandidatePlugin/plugins/types";
import { DEFAULT_STAGES } from "../../components/CandidatePlugin/plugins/types";
import { stageIndexOf } from "../../components/CandidatePlugin/domain";
import { tokens } from "../../components/CandidatePlugin/plugins/tokens";
import doc from "./doc.json";

export interface StageFlowConfig {
  /** 每次流转的步长（默认 ±1） */
  step?: number;
  /** 是否允许回退（默认允许） */
  allowBackward?: boolean;
}

/**
 * StageFlow —— 阶段流转按钮。
 * 卡片操作区「◀ 推进 ▶」，经 ctx.moveCandidate 流转（装配层落内部态并自动
 * 追加 history）；边界阶段禁用对应方向。step / allowBackward 可配。
 */
export const createStageFlowPlugin: CandidatePluginCreator<StageFlowConfig> = (
  config = {}
) => {
  const step = config.step ?? 1;
  const allowBackward = config.allowBackward ?? true;
  return {
    name: "stage-flow",
    version: "0.1.0",
    description: doc.description,
    priority: 20,
    config: { order: 20 },
    hooks: {
      renderCardActions: (ctx, candidate) => {
        const stages = (ctx.props?.stages ??
          (DEFAULT_STAGES as StageConfig[])) as StageConfig[];
        const idx = stageIndexOf(stages, candidate.stage);
        const atFirst = idx <= 0;
        const atLast = idx < 0 || idx >= stages.length - 1;
        const btnStyle = (disabled: boolean) => ({
          ...{ ...flowBtn },
          ...(disabled ? { color: tokens.faint, cursor: "not-allowed" } : {}),
        });
        return (
          <span key="stage-flow" style={{ display: "inline-flex", gap: 2 }}>
            {allowBackward && (
              <button
                type="button"
                disabled={atFirst}
                aria-label={\`将 \${candidate.name} 退回上一阶段\`}
                onClick={() => ctx.moveCandidate(candidate.id, -step)}
                style={btnStyle(atFirst)}
              >
                ◀
              </button>
            )}
            <button
              type="button"
              disabled={atLast}
              aria-label={\`将 \${candidate.name} 推进到下一阶段\`}
              onClick={() => ctx.moveCandidate(candidate.id, step)}
              style={btnStyle(atLast)}
            >
              ▶
            </button>
          </span>
        );
      },
    },
  };
};

const flowBtn = {
  border: \`1px solid \${tokens.lineStrong}\`,
  background: tokens.chipBg,
  color: tokens.chipText,
  borderRadius: 6,
  fontSize: 12,
  padding: "2px 8px",
  cursor: "pointer",
  lineHeight: "18px",
};

createStageFlowPlugin.meta = doc as PluginDoc;
`,eS=`import type { PluginDoc } from "vane-plugin-core";
import type {
  Candidate,
  CandidatePluginCreator,
} from "../../components/CandidatePlugin/plugins/types";
import { tokens } from "../../components/CandidatePlugin/plugins/tokens";
import doc from "./doc.json";

export interface StarConfig {
  /** 星标候选人是否在列表中优先展示（经 transformData 置顶） */
  pinTop?: boolean;
}

/**
 * Star —— 星标收藏。
 * 卡片操作区 ☆/★ 切换（写 candidate.starred）；pinTop 开启时星标候选人
 * 经 transformData 置顶到各自阶段列最前。
 */
export const createStarPlugin: CandidatePluginCreator<StarConfig> = (
  config = {}
) => {
  const pinTop = config.pinTop ?? true;
  return {
    name: "star",
    version: "0.1.0",
    description: doc.description,
    priority: 10,
    config: { order: 10 },
    hooks: {
      ...(pinTop
        ? {
            transformData: (_ctx, data) => {
              const list = (data as Candidate[]) ?? [];
              const starred = list.filter((c) => c.starred);
              const rest = list.filter((c) => !c.starred);
              return [...starred, ...rest] as typeof data;
            },
          }
        : {}),
      renderCardActions: (ctx, candidate) => {
        const on = !!candidate.starred;
        return (
          <button
            key="star"
            type="button"
            aria-pressed={on}
            aria-label={on ? \`取消星标 \${candidate.name}\` : \`星标 \${candidate.name}\`}
            title={on ? "取消星标" : "星标"}
            onClick={() => ctx.updateCandidate(candidate.id, { starred: !on })}
            style={{
              border: "none",
              background: "transparent",
              cursor: "pointer",
              fontSize: 14,
              padding: "2px 4px",
              color: on ? "#c2410c" : tokens.muted,
              lineHeight: 1,
            }}
          >
            {on ? "★" : "☆"}
          </button>
        );
      },
    },
  };
};

createStarPlugin.meta = doc as PluginDoc;
`,nS=`import type { PluginDoc } from "vane-plugin-core";
import type {
  Candidate,
  CandidatePluginCreator,
  StageConfig,
} from "../../components/CandidatePlugin/plugins/types";
import { DEFAULT_STAGES } from "../../components/CandidatePlugin/plugins/types";
import { TONE_COLOR, tokens } from "../../components/CandidatePlugin/plugins/tokens";
import doc from "./doc.json";

export interface StatsConfig {
  /** 是否在列头显示计数徽章（renderColumnHeader） */
  columnCount?: boolean;
}

/**
 * Stats —— 漏斗统计。
 * renderFooter：各阶段人数占比条形图（点击阶段可联动 Filter 的
 * filterStage，若无 Filter 插件则仅展示）；renderColumnHeader：列头计数徽章。
 */
export const createStatsPlugin: CandidatePluginCreator<StatsConfig> = (
  config = {}
) => {
  const columnCount = config.columnCount ?? true;
  return {
    name: "stats",
    version: "0.1.0",
    description: doc.description,
    priority: 10,
    config: { order: 10 },
    hooks: {
      renderColumnHeader: columnCount
        ? (_ctx, stage, count) => (
            <span
              key="col-count"
              aria-label={\`\${stage.label} \${count} 人\`}
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: (TONE_COLOR[stage.tone ?? "neutral"] ?? TONE_COLOR.neutral).fg,
                background: tokens.bg,
                border: \`1px solid \${tokens.line}\`,
                borderRadius: 999,
                padding: "0 6px",
                lineHeight: "16px",
              }}
            >
              {count}
            </span>
          )
        : undefined,
      renderFooter: (ctx) => {
        const stages = (ctx.props?.stages ??
          (DEFAULT_STAGES as StageConfig[])) as StageConfig[];
        const candidates = (ctx.data as Candidate[]) ?? [];
        const total = candidates.length;
        if (total === 0) return null;
        return (
          <span
            key="stats-funnel"
            role="img"
            aria-label={\`漏斗统计：共 \${total} 人，\` + stages
              .map((s) => \`\${s.label} \${candidates.filter((c) => c.stage === s.key).length} 人\`)
              .join("，")}
            style={{ display: "inline-flex", alignItems: "center", gap: 4, flexWrap: "wrap" }}
          >
            <span style={{ fontSize: 12, color: tokens.muted }}>漏斗</span>
            {stages.map((s) => {
              const count = candidates.filter((c) => c.stage === s.key).length;
              const tone = TONE_COLOR[s.tone ?? "neutral"] ?? TONE_COLOR.neutral;
              return (
                <span
                  key={s.key}
                  title={\`\${s.label}: \${count} 人\`}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 4,
                    fontSize: 11,
                    fontWeight: 700,
                    color: tone.fg,
                    background: tone.bg,
                    borderRadius: 999,
                    padding: "0 8px",
                    lineHeight: "18px",
                  }}
                >
                  {s.label}
                  <span
                    style={{
                      display: "inline-block",
                      width: Math.max(count * 4, 2),
                      height: 8,
                      borderRadius: 4,
                      background: tone.fg,
                    }}
                    aria-hidden="true"
                  />
                  {count}
                </span>
              );
            })}
          </span>
        );
      },
    },
  };
};

createStatsPlugin.meta = doc as PluginDoc;
`,tS=`import React from "react";
import type { PluginDoc } from "vane-plugin-core";
import type {
  Candidate,
  CandidatePluginCreator,
} from "../../components/CandidatePlugin/plugins/types";
import { Overlay } from "../../components/CandidatePlugin/plugins/overlay";
import { tokens, toolbarBtn } from "../../components/CandidatePlugin/plugins/tokens";
import doc from "./doc.json";

export interface TagConfig {
  /** 快捷标签建议（编辑面板里一键添加） */
  suggestTags?: string[];
  /** 每位候选人最多标签数 */
  maxTags?: number;
}

/**
 * Tag —— 候选人标签。
 * renderCardBadges：展示标签 chips；点击「管理」打开浮层，可添加/删除标签，
 * 写回 candidate.tags（ctx.updateCandidate）。
 */
export const createTagPlugin: CandidatePluginCreator<TagConfig> = (config = {}) => {
  const suggests = config.suggestTags ?? ["重点", "备选", "急招", "内推"];
  const maxTags = config.maxTags ?? 8;
  return {
    name: "tags",
    version: "0.1.0",
    description: doc.description,
    priority: 30,
    config: { order: 30 },
    hooks: {
      renderCardBadges: (ctx, candidate) => {
        const tags = candidate.tags ?? [];
        const editing = ctx.state.tagEditingId === candidate.id;
        return (
          <React.Fragment key="tags">
            {tags.slice(0, 3).map((t) => (
              <span
                key={t}
                style={{
                  fontSize: 11,
                  color: tokens.chipText,
                  background: tokens.chipBg,
                  border: \`1px solid \${tokens.line}\`,
                  borderRadius: 999,
                  padding: "0 8px",
                  lineHeight: "18px",
                }}
              >
                {t}
              </span>
            ))}
            {tags.length > 3 && (
              <span
                title={tags.join("、")}
                aria-label={\`共 \${tags.length} 个标签\`}
                style={{ fontSize: 11, color: tokens.faint, lineHeight: "18px" }}
              >
                +{tags.length - 3}
              </span>
            )}
            <button
              type="button"
              aria-haspopup="dialog"
              aria-expanded={editing}
              aria-label={\`\${candidate.name} 的标签管理\`}
              onClick={() =>
                ctx.setState({
                  tagEditingId: editing ? null : candidate.id,
                })
              }
              style={{
                ...toolbarBtn(false),
                fontSize: 11,
                padding: "0 6px",
                lineHeight: "16px",
              }}
            >
              标签
            </button>
          </React.Fragment>
        );
      },
      renderOverlay: (ctx) => {
        const id = ctx.state.tagEditingId as string | null;
        if (!id) return null;
        const candidate = ((ctx.data as Candidate[]) ?? []).find((c) => c.id === id);
        if (!candidate) return null;
        const tags = candidate.tags ?? [];
        const close = () => ctx.setState({ tagEditingId: null });
        const add = (t: string) => {
          const value = t.trim();
          if (!value || tags.includes(value) || tags.length >= maxTags) return;
          ctx.updateCandidate(id, { tags: [...tags, value] });
        };
        const remove = (t: string) =>
          ctx.updateCandidate(id, { tags: tags.filter((x) => x !== t) });
        return (
          <Overlay key="tags-overlay" title={\`标签管理 · \${candidate.name}\`} onClose={close} width={340} zIndex={56}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 10 }}>
              {tags.length === 0 && <span style={{ color: tokens.muted, fontSize: 13 }}>暂无标签</span>}
              {tags.map((t) => (
                <span
                  key={t}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 4,
                    fontSize: 12,
                    color: tokens.chipText,
                    background: tokens.chipBg,
                    border: \`1px solid \${tokens.line}\`,
                    borderRadius: 999,
                    padding: "2px 6px 2px 10px",
                  }}
                >
                  {t}
                  <button
                    type="button"
                    aria-label={\`删除标签 \${t}\`}
                    onClick={() => remove(t)}
                    style={{ border: "none", background: "transparent", color: tokens.bad, cursor: "pointer", fontSize: 12, padding: 0, lineHeight: 1 }}
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const input = (e.currentTarget.elements.namedItem("tag") as HTMLInputElement | null);
                if (input?.value) {
                  add(input.value);
                  input.value = "";
                }
              }}
              style={{ display: "flex", gap: 6, marginBottom: 10 }}
            >
              <input
                name="tag"
                aria-label="新标签名称"
                placeholder="输入标签后回车"
                maxLength={12}
                style={{
                  flex: 1,
                  border: \`1px solid \${tokens.lineStrong}\`,
                  borderRadius: 6,
                  padding: "5px 8px",
                  fontSize: 13,
                  color: tokens.text,
                  background: "#fff",
                }}
              />
              <button type="submit" style={toolbarBtn(true)}>添加</button>
            </form>
            <div>
              <div style={{ fontSize: 12, color: tokens.muted, marginBottom: 4 }}>快捷标签</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {suggests.map((t) => (
                  <button key={t} type="button" onClick={() => add(t)} style={toolbarBtn(tags.includes(t))}>
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </Overlay>
        );
      },
    },
  };
};

createTagPlugin.meta = doc as PluginDoc;
`,rS=`import type { PluginDoc } from "vane-plugin-core";
import type {
  CandidatePluginCreator,
  StageConfig,
} from "../../components/CandidatePlugin/plugins/types";
import { DEFAULT_STAGES } from "../../components/CandidatePlugin/plugins/types";
import { TONE_COLOR, tokens, toolbarBtn } from "../../components/CandidatePlugin/plugins/tokens";
import doc from "./doc.json";

export interface ViewSwitchConfig {
  /** 列表视图每页条数上限（0 = 不分页） */
  pageSize?: number;
}

/**
 * ViewSwitch —— 看板 / 列表视图切换。
 * 工具栏两个互斥按钮写 state.view；renderCards 内容覆盖槽在 list 模式下
 * 渲染紧凑表格视图，kanban 模式返回 null 回落核心默认看板。
 */
export const createViewSwitchPlugin: CandidatePluginCreator<ViewSwitchConfig> = (
  config = {}
) => {
  const pageSize = config.pageSize ?? 0;
  return {
    name: "view-switch",
    version: "0.1.0",
    description: doc.description,
    priority: 70,
    config: { order: 70 },
    hooks: {
      renderToolbar: (ctx) => {
        const view = (ctx.state.view as string | undefined) ?? "kanban";
        return (
          <span key="view-switch" style={{ display: "inline-flex", gap: 0 }}>
            <button
              type="button"
              aria-pressed={view === "kanban"}
              onClick={() => ctx.setState({ view: "kanban" })}
              style={{ ...toolbarBtn(view === "kanban"), borderRadius: "6px 0 0 6px" }}
            >
              看板
            </button>
            <button
              type="button"
              aria-pressed={view === "list"}
              onClick={() => ctx.setState({ view: "list" })}
              style={{ ...toolbarBtn(view === "list"), borderRadius: "0 6px 6px 0", marginLeft: -1 }}
            >
              列表
            </button>
          </span>
        );
      },
      renderCards: (ctx, payload) => {
        if (((ctx.state.view as string | undefined) ?? "kanban") !== "list") return null;
        const stages = (payload.stages ??
          (DEFAULT_STAGES as StageConfig[])) as StageConfig[];
        const stageLabel = (key: string) => stages.find((s) => s.key === key)?.label ?? key;
        let candidates = payload.candidates;
        if (pageSize > 0) candidates = candidates.slice(0, pageSize);
        return (
          <div
            key="list-view"
            role="table"
            aria-label="候选人列表视图"
            style={{
              border: \`1px solid \${tokens.line}\`,
              borderRadius: "var(--vcd-radius, 8px)",
              overflow: "hidden",
            }}
          >
            <div
              role="row"
              style={{
                display: "grid",
                gridTemplateColumns: "2fr 1.4fr 1fr 1fr",
                background: tokens.chipBg,
                fontSize: 12,
                fontWeight: 700,
                color: tokens.muted,
                padding: "6px 12px",
                gap: 8,
              }}
            >
              <span>候选人</span>
              <span>阶段</span>
              <span>来源</span>
              <span>投递时间</span>
            </div>
            {candidates.map((c, i) => {
              const tone = TONE_COLOR[
                stages.find((s) => s.key === c.stage)?.tone ?? "neutral"
              ] ?? TONE_COLOR.neutral;
              return (
                <div
                  key={c.id}
                  role="row"
                  data-candidate-id={c.id}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "2fr 1.4fr 1fr 1fr",
                    padding: "8px 12px",
                    gap: 8,
                    fontSize: 13,
                    borderTop: i === 0 ? "none" : \`1px solid \${tokens.line}\`,
                    alignItems: "center",
                  }}
                >
                  <span style={{ color: tokens.text, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                    <strong>{c.name}</strong>
                    <span style={{ color: tokens.muted }}> · {c.role}</span>
                  </span>
                  <span>
                    <span
                      style={{
                        fontSize: 11,
                        fontWeight: 700,
                        color: tone.fg,
                        background: tone.bg,
                        borderRadius: 999,
                        padding: "0 8px",
                        lineHeight: "18px",
                      }}
                    >
                      {stageLabel(c.stage)}
                    </span>
                  </span>
                  <span style={{ color: tokens.muted, fontSize: 12 }}>{c.source ?? "—"}</span>
                  <span style={{ color: tokens.muted, fontSize: 12 }}>{c.appliedAt ?? "—"}</span>
                </div>
              );
            })}
            {candidates.length === 0 && (
              <div style={{ padding: "12px", color: tokens.muted, fontSize: 13 }}>暂无候选人</div>
            )}
          </div>
        );
      },
    },
  };
};

createViewSwitchPlugin.meta = doc as PluginDoc;
`,YS={badge:"徽章与标记",action:"动作与浮层",toolbar:"工具栏与视图",pipeline:"管道与统计"},Ku=["badge","action","toolbar","pipeline"],Gu=Object.assign({"/src/custom-plugins/ActivityLogPlugin/doc.json":us,"/src/custom-plugins/ArchivePoolPlugin/doc.json":ls,"/src/custom-plugins/BatchOpPlugin/doc.json":rs,"/src/custom-plugins/ContactMaskPlugin/doc.json":fs,"/src/custom-plugins/DupCheckPlugin/doc.json":Va,"/src/custom-plugins/ExportPlugin/doc.json":as,"/src/custom-plugins/FilterPlugin/doc.json":ns,"/src/custom-plugins/InterviewSlotPlugin/doc.json":Za,"/src/custom-plugins/NotePlugin/doc.json":Ja,"/src/custom-plugins/OfferPlugin/doc.json":Qa,"/src/custom-plugins/RecommendSortPlugin/doc.json":ds,"/src/custom-plugins/RejectTplPlugin/doc.json":es,"/src/custom-plugins/ScorePlugin/doc.json":Wa,"/src/custom-plugins/SearchPlugin/doc.json":ts,"/src/custom-plugins/StageFlowPlugin/doc.json":Ha,"/src/custom-plugins/StarPlugin/doc.json":Xa,"/src/custom-plugins/StatsPlugin/doc.json":ss,"/src/custom-plugins/TagPlugin/doc.json":Ga,"/src/custom-plugins/ViewSwitchPlugin/doc.json":os}),Qu=Object.assign({"/src/custom-plugins/ActivityLogPlugin/create.tsx":A1,"/src/custom-plugins/ArchivePoolPlugin/create.tsx":B1,"/src/custom-plugins/BatchOpPlugin/create.tsx":F1,"/src/custom-plugins/ContactMaskPlugin/create.tsx":U1,"/src/custom-plugins/DupCheckPlugin/create.tsx":W1,"/src/custom-plugins/ExportPlugin/create.tsx":H1,"/src/custom-plugins/FilterPlugin/create.tsx":V1,"/src/custom-plugins/InterviewSlotPlugin/create.tsx":K1,"/src/custom-plugins/NotePlugin/create.tsx":G1,"/src/custom-plugins/OfferPlugin/create.tsx":Q1,"/src/custom-plugins/RecommendSortPlugin/create.tsx":Y1,"/src/custom-plugins/RejectTplPlugin/create.tsx":X1,"/src/custom-plugins/ScorePlugin/create.tsx":J1,"/src/custom-plugins/SearchPlugin/create.tsx":Z1,"/src/custom-plugins/StageFlowPlugin/create.tsx":q1,"/src/custom-plugins/StarPlugin/create.tsx":eS,"/src/custom-plugins/StatsPlugin/create.tsx":nS,"/src/custom-plugins/TagPlugin/create.tsx":tS,"/src/custom-plugins/ViewSwitchPlugin/create.tsx":rS}),Ef=e=>e.replace(/^.*\/custom-plugins\//,"").replace(/\/.*$/,"");function oS(e){const n=Object.keys(Qu).find(o=>Ef(o)===e),t=n?Qu[n]:"",r=/priority:\s*(\d+)/.exec(t);return r?Number(r[1]):0}function iS(e){const n=Object.keys(Gu).find(t=>Ef(t)===e);return n?Gu[n]:{name:e,description:"（缺少 doc.json）"}}const lS=[{dir:"ScorePlugin",group:"badge",make:()=>$r({goodThreshold:80})},{dir:"DupCheckPlugin",group:"badge",make:()=>Ka({})},{dir:"TagPlugin",group:"badge",make:()=>ri({suggestTags:["重点","备选","急招","内推"]})},{dir:"OfferPlugin",group:"badge",make:()=>Ya()},{dir:"StarPlugin",group:"action",make:()=>oi({pinTop:!0})},{dir:"StageFlowPlugin",group:"action",make:()=>Rt({step:1})},{dir:"NotePlugin",group:"action",make:()=>ii({authorName:"演示 HR"})},{dir:"InterviewSlotPlugin",group:"action",make:()=>qa({slots:["周二 14:00","周三 10:00","周四 16:00"],interviewers:["王工","李总监"],modes:["onsite","video"]})},{dir:"RejectTplPlugin",group:"action",make:()=>li({})},{dir:"FilterPlugin",group:"toolbar",make:()=>ai()},{dir:"SearchPlugin",group:"toolbar",make:()=>si()},{dir:"BatchOpPlugin",group:"toolbar",make:()=>ui()},{dir:"ViewSwitchPlugin",group:"toolbar",make:()=>is({pageSize:0})},{dir:"ArchivePoolPlugin",group:"toolbar",make:()=>Tr()},{dir:"ExportPlugin",group:"toolbar",make:()=>ci({filename:"vane-candidates"})},{dir:"StatsPlugin",group:"pipeline",make:()=>di({columnCount:!0})},{dir:"ActivityLogPlugin",group:"pipeline",make:()=>cs({maxEntries:50})},{dir:"RecommendSortPlugin",group:"pipeline",make:()=>Nr({by:"score",desc:!0})},{dir:"ContactMaskPlugin",group:"pipeline",make:()=>fi({maskEmail:!0,maskPhone:!0})}],Ul=lS.map(e=>{const n=iS(e.dir);return{dir:e.dir,factory:`create${e.dir.replace(/Plugin$/,"")}Plugin`,group:e.group,priority:oS(e.dir),summary:n.description,doc:n,make:e.make}}).sort((e,n)=>Ku.indexOf(e.group)-Ku.indexOf(n.group)||n.priority-e.priority),aS={id:"daily-review",title:"日常刷简历",group:"日常运营",ref:{label:"对标 内推日常盘点",url:"https://developer.mozilla.org/"},pain:"每天早上要过一遍新投递：先看谁分高，看完写两笔备注，顺手把能推进的推进 —— 四个动作要一气呵成。",plugs:[{fn:"createRecommendSortPlugin",cfg:'{ by: "score", desc: true }',why:"匹配分高的排在各列最前，打开看板就知道先聊谁。"},{fn:"createScorePlugin",cfg:"{}",why:"分数胶囊按阈值着色，红橙绿把优先级编码进视觉。"},{fn:"createStageFlowPlugin",cfg:"{}",why:"看完直接点 ▶ 推进到下一阶段，history 自动记录。"},{fn:"createNotePlugin",cfg:'{ authorName: "张HR" }',why:"电话沟通结论落到候选人身上，浮层两步完成。"}],props:[],note:"排序经 transformData 只影响列内顺序；推进 / 备注由装配层落内部态，宿主可用 onDataChange 持久化。"};function sS(){const e=v.useMemo(()=>qn(On,[Nr({by:"score",desc:!0}),$r(),Rt(),ii({authorName:"张HR"})]),[]);return u.jsx(e,{data:Dn,stages:Rn,containerStyle:{minWidth:1180}})}const uS=Object.freeze(Object.defineProperty({__proto__:null,default:sS,meta:aS},Symbol.toStringTag,{value:"Module"})),cS={id:"screening-day",title:"HR 筛选日",group:"筛选冲刺",ref:{label:"对标 集中筛简历场景",url:"https://developer.mozilla.org/"},pain:"周末要清完 100+ 投递：先搜关键词、再按阶段过滤，过线的批量推进，不合适的套模板婉拒。",plugs:[{fn:"createSearchPlugin",cfg:"{}",why:"关键词同时匹配姓名 / 岗位 / 标签 / 来源，先缩小战场。"},{fn:"createFilterPlugin",cfg:"{}",why:"阶段 / 标签下拉精确过滤，只看「已投递」这一层。"},{fn:"createBatchOpPlugin",cfg:"{}",why:"批量模式全选后一键流转到「筛选中」，免去逐张点击。"},{fn:"createRejectTplPlugin",cfg:"{}",why:"不合适的套内置模板婉拒，确认后直接流转到 rejected。"},{fn:"createRecommendSortPlugin",cfg:'{ by: "fresh", desc: true }',why:"按投递时间降序，先处理新鲜的、过期的放后面。"}],props:[],note:"批量归档只写 archived 标记；要让看板上消失需配合 ArchivePool —— 见「人才库复盘」场景。"};function dS(){const e=v.useMemo(()=>qn(On,[Nr({by:"fresh",desc:!0}),si(),ai(),ui(),li()]),[]);return u.jsx(e,{data:Dn,stages:Rn,containerStyle:{minWidth:1180}})}const fS=Object.freeze(Object.defineProperty({__proto__:null,default:dS,meta:cS},Symbol.toStringTag,{value:"Module"})),pS={id:"talent-pool",title:"人才库复盘",group:"季度复盘",ref:{label:"对标 人才库季度盘点",url:"https://developer.mozilla.org/"},pain:"季度末盘点人才库：把好苗子星标 + 打标签，联系方式默认脱敏，最后导出一份给老板、看一眼漏斗。",plugs:[{fn:"createArchivePoolPlugin",cfg:"{}",why:"归档的候选人收进人才库浮层，可恢复；主看板只留活跃流水线。"},{fn:"createStarPlugin",cfg:"{ pinTop: true }",why:"好苗子星标置顶，复盘时优先过目。"},{fn:"createTagPlugin",cfg:'{ suggestTags: ["重点", "备选", "人才库"] }',why:"给人才库候选人打上业务标签，下次开岗直接筛。"},{fn:"createContactMaskPlugin",cfg:"{ maskEmail: true, maskPhone: true }",why:"复盘会上投影大屏，联系方式默认脱敏。"},{fn:"createExportPlugin",cfg:'{ filename: "talent-review" }',why:"导出当前管道末态 CSV，直接贴进季度汇报。"},{fn:"createStatsPlugin",cfg:"{}",why:"页脚漏斗 + 列头计数，各阶段存量一眼可读。"}],props:[],note:"本场景是受控模式：onDataChange 回写宿主再喂回 Board，人才库计数 / 漏斗都反映最新数据。"};function gS(){const[e,n]=v.useState(Dn),t=v.useMemo(()=>qn(On,[Tr(),oi({pinTop:!0}),ri({suggestTags:["重点","备选","人才库"]}),fi({maskEmail:!0,maskPhone:!0}),ci({filename:"talent-review"}),di()]),[]),r=v.useCallback(o=>n(o),[]);return u.jsx(t,{data:e,stages:Rn,containerStyle:{minWidth:1180},onDataChange:r})}const mS=Object.freeze(Object.defineProperty({__proto__:null,default:gS,meta:pS},Symbol.toStringTag,{value:"Module"})),hS=`/**
 * 日常刷简历：分数着色 + 推荐排序先看分高的，随手备注、随手推进。
 */
import React, { useMemo } from "react";
import { CandidateCore, withPlugins } from "vane-candidate";
import { createScorePlugin } from "vane-candidate/custom-plugins/ScorePlugin";
import { createStageFlowPlugin } from "vane-candidate/custom-plugins/StageFlowPlugin";
import { createNotePlugin } from "vane-candidate/custom-plugins/NotePlugin";
import { createRecommendSortPlugin } from "vane-candidate/custom-plugins/RecommendSortPlugin";
import { SAMPLE_CANDIDATES, SAMPLE_STAGES } from "../data/sample";

export const meta = {
  id: "daily-review",
  title: "日常刷简历",
  group: "日常运营",
  ref: { label: "对标 内推日常盘点", url: "https://developer.mozilla.org/" },
  pain: "每天早上要过一遍新投递：先看谁分高，看完写两笔备注，顺手把能推进的推进 —— 四个动作要一气呵成。",
  plugs: [
    { fn: "createRecommendSortPlugin", cfg: \`{ by: "score", desc: true }\`, why: "匹配分高的排在各列最前，打开看板就知道先聊谁。" },
    { fn: "createScorePlugin", cfg: \`{}\`, why: "分数胶囊按阈值着色，红橙绿把优先级编码进视觉。" },
    { fn: "createStageFlowPlugin", cfg: \`{}\`, why: "看完直接点 ▶ 推进到下一阶段，history 自动记录。" },
    { fn: "createNotePlugin", cfg: \`{ authorName: "张HR" }\`, why: "电话沟通结论落到候选人身上，浮层两步完成。" },
  ],
  props: [],
  note: "排序经 transformData 只影响列内顺序；推进 / 备注由装配层落内部态，宿主可用 onDataChange 持久化。",
};

export default function DailyReview() {
  const Board = useMemo(
    () =>
      withPlugins(CandidateCore, [
        createRecommendSortPlugin({ by: "score", desc: true }),
        createScorePlugin(),
        createStageFlowPlugin(),
        createNotePlugin({ authorName: "张HR" }),
      ]),
    []
  );
  return <Board data={SAMPLE_CANDIDATES} stages={SAMPLE_STAGES} containerStyle={{ minWidth: 1180 }} />;
}
`,yS=`/**
 * HR 筛选日：搜索定位 → 阶段过滤 → 批量推进 → 模板婉拒，一条流水线打完。
 */
import React, { useMemo } from "react";
import { CandidateCore, withPlugins } from "vane-candidate";
import { createFilterPlugin } from "vane-candidate/custom-plugins/FilterPlugin";
import { createSearchPlugin } from "vane-candidate/custom-plugins/SearchPlugin";
import { createBatchOpPlugin } from "vane-candidate/custom-plugins/BatchOpPlugin";
import { createRejectTplPlugin } from "vane-candidate/custom-plugins/RejectTplPlugin";
import { createRecommendSortPlugin } from "vane-candidate/custom-plugins/RecommendSortPlugin";
import { SAMPLE_CANDIDATES, SAMPLE_STAGES } from "../data/sample";

export const meta = {
  id: "screening-day",
  title: "HR 筛选日",
  group: "筛选冲刺",
  ref: { label: "对标 集中筛简历场景", url: "https://developer.mozilla.org/" },
  pain: "周末要清完 100+ 投递：先搜关键词、再按阶段过滤，过线的批量推进，不合适的套模板婉拒。",
  plugs: [
    { fn: "createSearchPlugin", cfg: \`{}\`, why: "关键词同时匹配姓名 / 岗位 / 标签 / 来源，先缩小战场。" },
    { fn: "createFilterPlugin", cfg: \`{}\`, why: "阶段 / 标签下拉精确过滤，只看「已投递」这一层。" },
    { fn: "createBatchOpPlugin", cfg: \`{}\`, why: "批量模式全选后一键流转到「筛选中」，免去逐张点击。" },
    { fn: "createRejectTplPlugin", cfg: \`{}\`, why: "不合适的套内置模板婉拒，确认后直接流转到 rejected。" },
    { fn: "createRecommendSortPlugin", cfg: \`{ by: "fresh", desc: true }\`, why: "按投递时间降序，先处理新鲜的、过期的放后面。" },
  ],
  props: [],
  note: "批量归档只写 archived 标记；要让看板上消失需配合 ArchivePool —— 见「人才库复盘」场景。",
};

export default function ScreeningDay() {
  const Board = useMemo(
    () =>
      withPlugins(CandidateCore, [
        createRecommendSortPlugin({ by: "fresh", desc: true }),
        createSearchPlugin(),
        createFilterPlugin(),
        createBatchOpPlugin(),
        createRejectTplPlugin(),
      ]),
    []
  );
  return <Board data={SAMPLE_CANDIDATES} stages={SAMPLE_STAGES} containerStyle={{ minWidth: 1180 }} />;
}
`,vS=`/**
 * 人才库复盘：归档池 + 星标 + 标签整理人才库，脱敏展示，导出与漏斗收尾。
 * 受控模式：onDataChange 把新列表回写宿主，归档 / 恢复的人才库计数才实时。
 */
import React, { useCallback, useMemo, useState } from "react";
import { CandidateCore, withPlugins } from "vane-candidate";
import type { Candidate } from "vane-candidate";
import { createArchivePoolPlugin } from "vane-candidate/custom-plugins/ArchivePoolPlugin";
import { createStarPlugin } from "vane-candidate/custom-plugins/StarPlugin";
import { createTagPlugin } from "vane-candidate/custom-plugins/TagPlugin";
import { createContactMaskPlugin } from "vane-candidate/custom-plugins/ContactMaskPlugin";
import { createExportPlugin } from "vane-candidate/custom-plugins/ExportPlugin";
import { createStatsPlugin } from "vane-candidate/custom-plugins/StatsPlugin";
import { SAMPLE_CANDIDATES, SAMPLE_STAGES } from "../data/sample";

export const meta = {
  id: "talent-pool",
  title: "人才库复盘",
  group: "季度复盘",
  ref: { label: "对标 人才库季度盘点", url: "https://developer.mozilla.org/" },
  pain: "季度末盘点人才库：把好苗子星标 + 打标签，联系方式默认脱敏，最后导出一份给老板、看一眼漏斗。",
  plugs: [
    { fn: "createArchivePoolPlugin", cfg: \`{}\`, why: "归档的候选人收进人才库浮层，可恢复；主看板只留活跃流水线。" },
    { fn: "createStarPlugin", cfg: \`{ pinTop: true }\`, why: "好苗子星标置顶，复盘时优先过目。" },
    { fn: "createTagPlugin", cfg: \`{ suggestTags: ["重点", "备选", "人才库"] }\`, why: "给人才库候选人打上业务标签，下次开岗直接筛。" },
    { fn: "createContactMaskPlugin", cfg: \`{ maskEmail: true, maskPhone: true }\`, why: "复盘会上投影大屏，联系方式默认脱敏。" },
    { fn: "createExportPlugin", cfg: \`{ filename: "talent-review" }\`, why: "导出当前管道末态 CSV，直接贴进季度汇报。" },
    { fn: "createStatsPlugin", cfg: \`{}\`, why: "页脚漏斗 + 列头计数，各阶段存量一眼可读。" },
  ],
  props: [],
  note: "本场景是受控模式：onDataChange 回写宿主再喂回 Board，人才库计数 / 漏斗都反映最新数据。",
};

export default function TalentPool() {
  const [data, setData] = useState<Candidate[]>(SAMPLE_CANDIDATES);

  const Board = useMemo(
    () =>
      withPlugins(CandidateCore, [
        createArchivePoolPlugin(),
        createStarPlugin({ pinTop: true }),
        createTagPlugin({ suggestTags: ["重点", "备选", "人才库"] }),
        createContactMaskPlugin({ maskEmail: true, maskPhone: true }),
        createExportPlugin({ filename: "talent-review" }),
        createStatsPlugin(),
      ]),
    []
  );

  const handleChange = useCallback((next: Candidate[]) => setData(next), []);

  return <Board data={data} stages={SAMPLE_STAGES} containerStyle={{ minWidth: 1180 }} onDataChange={handleChange} />;
}
`,xS=Object.assign({"./01-daily-review.tsx":uS,"./02-screening-day.tsx":fS,"./03-talent-pool.tsx":mS}),SS=Object.assign({"./01-daily-review.tsx":hS,"./02-screening-day.tsx":yS,"./03-talent-pool.tsx":vS}),wS=e=>e.replace(/^\.\//,""),zo=Object.entries(xS).map(([e,n])=>{const t=wS(e);return{meta:n.meta,Component:n.default,file:t,source:SS[e]??""}}).sort((e,n)=>e.file.localeCompare(n.file)),XS=zo.reduce((e,n)=>(e.includes(n.meta.group)||e.push(n.meta.group),e),[]),JS=Array.from(new Set(zo.flatMap(e=>e.meta.plugs.map(n=>n.fn)))).sort(),kS="import|from|export|default|function|return|const|let|var|new|if|else|for|of|in|while|switch|case|break|continue|type|interface|extends|implements|as|satisfies|await|async|throw|try|catch|finally|class|typeof|instanceof|delete|void|yield",CS="true|false|null|undefined|this|super",PS="number|string|boolean|object|any|unknown|never|React|HTMLElement|void",Yu=new RegExp([String.raw`(\/\/[^\n]*|\/\*[\s\S]*?\*\/)`,String.raw`(\`(?:\\[\s\S]|[^\\\`])*\`|"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*')`,String.raw`\b(${kS})\b`,String.raw`\b(${CS})\b`,String.raw`\b(${PS})\b`,String.raw`(<\/?[A-Za-z][\w.$]*)`,String.raw`\b(\d+(?:\.\d+)?)\b`].join("|"),"g"),Xu=["tok-comment","tok-string","tok-kw","tok-lit","tok-type","tok-tag","tok-num"];function _S(e){const n=[];let t=0;Yu.lastIndex=0;let r;for(;r=Yu.exec(e);){r.index>t&&n.push({text:e.slice(t,r.index),cls:null});const o=Xu.findIndex((i,l)=>r[l+1]!==void 0);n.push({text:r[0],cls:o>=0?Xu[o]:null}),t=r.index+r[0].length}return t<e.length&&n.push({text:e.slice(t),cls:null}),n}function Ju(e){try{const n=document.createElement("textarea");n.value=e,n.setAttribute("readonly",""),n.style.position="fixed",n.style.opacity="0",document.body.appendChild(n),n.select();const t=document.execCommand("copy");return document.body.removeChild(n),t}catch{return!1}}function bS({code:e,title:n="tsx",collapseAfter:t=24,maxHeight:r}){const[o,i]=v.useState("idle"),[l,a]=v.useState(!1),s=v.useMemo(()=>e.replace(/\s+$/,"").split(`
`),[e]),c=t>0&&s.length>t,d=c&&!l?s.slice(0,t).join(`
`):e,f=v.useMemo(()=>_S(d),[d]),h=v.useCallback(async()=>{var x;let y=!1;if((x=navigator.clipboard)!=null&&x.writeText)try{await navigator.clipboard.writeText(e),y=!0}catch{y=Ju(e)}else y=Ju(e);i(y?"ok":"fail"),window.setTimeout(()=>i("idle"),1600)},[e]);return u.jsxs("div",{className:"code",children:[u.jsxs("div",{className:"code-head",children:[u.jsx("span",{children:n}),u.jsxs("span",{style:{display:"flex",gap:6,alignItems:"center"},children:[u.jsxs("span",{children:[s.length," 行"]}),u.jsx("button",{type:"button",className:`code-copy${o==="ok"?" is-ok":o==="fail"?" is-fail":""}`,onClick:h,children:o==="ok"?"已复制":o==="fail"?"复制失败":"复制"})]})]}),u.jsx("pre",{style:r?{maxHeight:r}:{maxHeight:"none"},children:u.jsx("code",{children:f.map((y,x)=>y.cls?u.jsx("span",{className:y.cls,children:y.text},x):u.jsx(jt.Fragment,{children:y.text},x))})}),c?u.jsx("button",{type:"button",className:"code-more",onClick:()=>a(y=>!y),children:l?"收起":`展开余下 ${s.length-t} 行`}):null]})}function $f(e){return e.props??e.config??[]}function jS({doc:e}){var o,i,l;const n=$f(e),t=e.events??[],r=e.methods??[];return u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"doc-sec",children:[u.jsx("h5",{children:"属性 Props"}),n.length?u.jsxs("table",{className:"doc-table",children:[u.jsx("thead",{children:u.jsxs("tr",{children:[u.jsx("th",{children:"属性"}),u.jsx("th",{children:"类型"}),u.jsx("th",{children:"默认"}),u.jsx("th",{children:"说明"})]})}),u.jsx("tbody",{children:n.map(a=>u.jsxs("tr",{children:[u.jsx("td",{children:u.jsx("code",{children:a.name})}),u.jsx("td",{children:u.jsx("code",{className:"dim",children:a.type})}),u.jsx("td",{children:u.jsx("code",{className:"dim",children:a.default??"-"})}),u.jsx("td",{children:a.description??"—"})]},a.name))})]}):u.jsx("p",{className:"doc-note",children:"无可配置属性，工厂零参调用即可。"})]}),u.jsxs("div",{className:"doc-sec",children:[u.jsx("h5",{children:"事件 Events"}),t.length?u.jsxs("table",{className:"doc-table",children:[u.jsx("thead",{children:u.jsxs("tr",{children:[u.jsx("th",{children:"事件"}),u.jsx("th",{children:"触发时机"}),u.jsx("th",{children:"说明"})]})}),u.jsx("tbody",{children:t.map(a=>u.jsxs("tr",{children:[u.jsx("td",{children:u.jsx("code",{children:a.name})}),u.jsx("td",{children:a.when}),u.jsx("td",{children:a.description})]},a.name))})]}):u.jsx("p",{className:"doc-note",children:"不参与任何事件。"})]}),u.jsxs("div",{className:"doc-sec",children:[u.jsx("h5",{children:"方法 Methods"}),r.length?u.jsxs("table",{className:"doc-table",children:[u.jsx("thead",{children:u.jsxs("tr",{children:[u.jsx("th",{children:"方法"}),u.jsx("th",{children:"签名"}),u.jsx("th",{children:"说明"})]})}),u.jsx("tbody",{children:r.map(a=>u.jsxs("tr",{children:[u.jsx("td",{children:u.jsx("code",{children:a.name})}),u.jsx("td",{children:u.jsx("code",{className:"dim",children:a.signature})}),u.jsx("td",{children:a.description})]},a.name))})]}):u.jsx("p",{className:"doc-note",children:e.methodsNote??"不调用上下文方法。"})]}),u.jsxs("div",{className:"doc-cols",children:[(o=e.features)!=null&&o.length?u.jsxs("div",{children:[u.jsx("h5",{children:"能做"}),u.jsx("ul",{children:e.features.map(a=>u.jsx("li",{children:a},a))})]}):null,(i=e.useCases)!=null&&i.length?u.jsxs("div",{children:[u.jsx("h5",{children:"适合"}),u.jsx("ul",{children:e.useCases.map(a=>u.jsx("li",{children:a},a))})]}):null,(l=e.notes)!=null&&l.length?u.jsxs("div",{children:[u.jsx("h5",{children:"注意"}),u.jsx("ul",{children:e.notes.map(a=>u.jsx("li",{children:a},a))})]}):null]})]})}function ES({factory:e,priority:n,summary:t,doc:r,defaultOpen:o=!0}){var l,a;const i={props:$f(r).length,events:((l=r.events)==null?void 0:l.length)??0,methods:((a=r.methods)==null?void 0:a.length)??0};return u.jsxs("details",{className:"api-plug",open:o,children:[u.jsxs("summary",{children:[u.jsx("code",{children:e}),u.jsxs("span",{className:"tag tag-accent",children:["priority ",n]}),u.jsx("span",{className:"api-plug-desc",children:t}),u.jsxs("span",{className:"api-plug-n",children:[i.props," 属性 · ",i.events," 事件 · ",i.methods," 方法"]})]}),u.jsx("div",{className:"api-plug-body",children:u.jsx(jS,{doc:r})})]})}const $S=/create[A-Z]\w*Plugin/g;function TS(e){return(e.match(/create[A-Z]\w*Plugin/)??[e])[0]}function Tf(e){return e.dir?`create${e.dir}`:TS(e.factory)}function NS(e){return new Set(e.match($S)??[])}function OS(e,n){const t=NS(e);return n.filter(r=>t.has(Tf(r))).sort((r,o)=>r.priority-o.priority)}function RS({source:e,plugins:n,heading:t="本页用到的插件"}){const r=v.useMemo(()=>OS(e,n),[e,n]);return r.length===0?null:u.jsxs("section",{className:"api-sec",children:[u.jsxs("div",{className:"api-sec-head",children:[u.jsxs("h2",{className:"api-sec-title",children:[t," · ",r.length," 个"]}),u.jsxs("p",{className:"api-sec-sub",children:["就是上面代码里装配的全部成员。属性是工厂参数，事件是父组件传进来的回调， 方法是插件读取 / 调用的上下文能力 —— 表内容与 ",u.jsx("code",{children:"doc.json"})," 同源，随包发布。"]})]}),r.map(o=>u.jsx(ES,{factory:Tf(o),priority:o.priority,summary:o.summary??o.doc.description??"",doc:o.doc},o.factory))]})}const DS=/\{\{\s*([\w-]+)\s*\}\}/g;function ps(e,n){return e.replace(DS,(t,r)=>r in n?String(n[r]):t)}function LS(e,n){if(!e)return"";let t=ps(e,n).trim();return t.startsWith("{")&&t.endsWith("}")&&(t=t.slice(1,-1).trim()),t?`{ ${t} }`:""}function Nf(e,n){const t=e.plugs.map(r=>`  ${r.fn}(${LS(r.cfg,n)}),`).join(`
`);return e.plugs.length?`const Board = withPlugins(CandidateCore, [
${t}
]);`:"const Board = CandidateCore;"}function Of(e){const n=e.plugs.map(t=>t.fn).sort();return n.length?n.map(t=>{const r=`${t.replace(/^create/,"").replace(/Plugin$/,"")}Plugin`;return`import { ${t} } from "vane-candidate/custom-plugins/${r}";`}).join(`
`):"// 这一页只用 Core props，不需要任何插件"}function zS(e,n){const t=e.props.filter(r=>typeof r=="string"||!r.when||r.when(n)).map(r=>`      ${ps(typeof r=="string"?r:r.text,n)}`).join(`
`);return`// ${e.title} · 最小装配（照抄即可跑）
import { CandidateCore, withPlugins } from "vane-candidate";
import type { Candidate } from "vane-candidate";
${Of(e)}

${Nf(e,n)}

export default function Demo({ data }: { data: Candidate[] }) {
  return (
    <Board
      data={data}
${t}
    />
  );
}
`}function MS(e){return/^[A-Za-z_$][\w$]*$/.test(e)}function Mo(e,n){const t="  ".repeat(n),r="  ".repeat(n+1);if(e===null)return"null";if(e===void 0)return"undefined";if(typeof e=="string")return JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return String(e);if(Array.isArray(e))return e.length===0?"[]":`[
${e.map(i=>`${r}${Mo(i,n+1)}`).join(`,
`)},
${t}]`;if(typeof e=="object"){const o=Object.entries(e);return o.length===0?"{}":`{
${o.map(([l,a])=>`${r}${MS(l)?l:JSON.stringify(l)}: ${Mo(a,n+1)}`).join(`,
`)},
${t}}`}return JSON.stringify(e)}function IS(){const n=JSON.parse(JSON.stringify(Dn)).map(t=>t.avatar?{...t,avatar:"https://your-avatar.example.com/a.png"}:t);return`const SAMPLE_STAGES: StageConfig[] = ${Mo(Rn,0)};

const data: Candidate[] = ${Mo(n,0)};`}function AS(e,n){const t=e.props.filter(r=>typeof r=="string"||!r.when||r.when(n)).map(r=>`      ${ps(typeof r=="string"?r:r.text,n)}`).join(`
`);return`// ${e.title} · 完整示例（直接复制即可运行）
import { CandidateCore, withPlugins } from "vane-candidate";
import type { Candidate, StageConfig } from "vane-candidate";
${Of(e)}

${Nf(e,n)}

${IS()}

export default function Demo() {
  return (
    <Board
      data={data}
      stages={SAMPLE_STAGES}
${t}
    />
  );
}
`}function BS({controls:e,cfg:n,onChange:t}){return u.jsx("div",{className:"ctl-bar",children:e.map(r=>{const o=n[r.key];return u.jsxs("label",{className:"ctl",title:r.hint,children:[u.jsxs("span",{className:"ctl-label",children:[r.label,u.jsx("b",{className:"ctl-val",children:r.kind==="switch"?o?"开":"关":String(o)})]}),r.kind==="switch"?u.jsx("button",{type:"button",className:`ctl-switch${o?" is-on":""}`,onClick:()=>t(r.key,!o),"aria-pressed":!!o,children:u.jsx("i",{})}):r.kind==="select"?u.jsx("select",{className:"ctl-select",value:String(o),onChange:i=>t(r.key,i.target.value),children:(r.options??[]).map(i=>u.jsx("option",{value:i.value,children:i.label},i.value))}):u.jsx("input",{className:"ctl-range",type:"range",min:r.min??0,max:r.max??100,step:r.step??1,value:Number(o),onChange:i=>t(r.key,Number(i.target.value))})]},r.key)})})}function FS({lines:e,title:n="事件日志",empty:t="还没触发 —— 点卡片操作区的按钮，或拖上面的控件",right:r}){return u.jsxs("div",{className:"log",children:[u.jsxs("div",{className:"log-head",children:[u.jsx("span",{children:n}),u.jsxs("span",{className:"log-right",children:[r,u.jsx("b",{children:e.length})]})]}),e.length===0?u.jsx("p",{className:"log-empty",children:t}):u.jsx("ol",{className:"log-list",children:e.map(o=>u.jsxs("li",{className:`log-line is-${o.kind}`,children:[u.jsx("time",{children:o.at}),u.jsx("span",{children:o.text})]},o.id))})]})}function US({entry:e,order:n}){var P;const{meta:t,Stage:r,file:o,source:i}=e,[l,a]=v.useState(()=>Vu(t)),[s,c]=v.useState([]),[d,f]=v.useState("minimal"),h=v.useCallback((g,p="event")=>{const m=new Date().toLocaleTimeString("zh-CN",{hour12:!1});c(w=>[{id:w.length+1,at:m,text:g,kind:p},...w].slice(0,60))},[]),y=v.useCallback((g,p)=>{a(m=>({...m,[g]:p}))},[]),x=v.useMemo(()=>zS(t,l),[t,l]),S=v.useMemo(()=>AS(t,l),[t,l]);return u.jsxs("section",{className:"demo","data-demo":t.slug,children:[u.jsxs("header",{className:"demo-head",children:[u.jsxs("div",{className:"demo-folio",children:[u.jsx("span",{className:"demo-no",children:String(n).padStart(2,"0")}),u.jsx("em",{children:"plate"})]}),u.jsxs("div",{children:[u.jsxs("div",{className:"demo-title-row",children:[u.jsx("h2",{children:t.title}),u.jsx("span",{className:"demo-group",children:Fl[t.group].label}),t.plugin?u.jsx("code",{className:"demo-plugin",children:t.plugin}):null]}),u.jsx("p",{className:"demo-intro",children:t.intro}),u.jsxs("p",{className:"demo-why",children:[u.jsx("b",{children:"什么时候用"}),t.why]})]}),u.jsxs("div",{className:"demo-meta",children:[u.jsxs("div",{className:"demo-meta-row",children:[u.jsx("span",{children:"file"}),u.jsx("b",{children:o})]}),u.jsxs("div",{className:"demo-meta-row",children:[u.jsx("span",{children:"group"}),u.jsx("b",{children:Fl[t.group].label})]}),u.jsxs("div",{className:"demo-meta-row",children:[u.jsx("span",{children:"plugs"}),u.jsx("b",{children:t.plugs.length?`${t.plugs.length} installed`:"core only"})]})]})]}),(P=t.controls)!=null&&P.length?u.jsxs("div",{className:"demo-controls",children:[u.jsx(BS,{controls:t.controls,cfg:l,onChange:y}),u.jsx("button",{type:"button",className:"demo-reset",onClick:()=>{a(Vu(t)),c([])},children:"重置"})]}):null,u.jsxs("div",{className:"demo-body",children:[u.jsxs("figure",{className:"plate",children:[u.jsxs("figcaption",{className:"plate-cap",children:[u.jsx("b",{children:"stage"}),u.jsxs("span",{children:[t.tone==="light"?"light surface":"live render",t.stageHeight?` · ${t.stageHeight}px`:""]}),u.jsx("em",{children:"live"})]}),u.jsx("div",{className:"plate-ruler","aria-hidden":!0}),u.jsx("div",{className:`plate-body demo-stage${t.tone==="light"?" tone-light":""}`,style:{"--stage-h":`${t.stageHeight??380}px`},children:u.jsx(r,{cfg:l,log:h,setCfg:y})})]}),u.jsxs("aside",{className:"demo-side",children:[u.jsx("div",{className:"demo-plugs",children:t.plugs.length===0?u.jsx("span",{className:"demo-plug is-core",children:"仅 Core props"}):t.plugs.map(g=>u.jsx("span",{className:"demo-plug",children:g.fn.replace(/^create|Plugin$/g,"")},g.fn))}),u.jsx("ul",{className:"demo-why-list",children:t.plugs.map(g=>u.jsxs("li",{children:[u.jsx("code",{children:g.fn}),u.jsx("span",{children:g.why})]},g.fn))}),t.note?u.jsxs("p",{className:"demo-note",children:["⚠ ",t.note]}):null,u.jsx(FS,{lines:s,empty:t.plugs.length>0?"还没触发 —— 点卡片操作区的按钮，或拖上面的控件":"这一页没有事件类行为，日志留白"})]})]}),u.jsxs("div",{className:"demo-code",children:[u.jsxs("div",{className:"demo-switch",role:"tablist",children:[u.jsx("button",{type:"button",role:"tab","aria-selected":d==="minimal",className:d==="minimal"?"is-active":"",onClick:()=>f("minimal"),children:"最小装配"}),u.jsx("button",{type:"button",role:"tab","aria-selected":d==="full",className:d==="full"?"is-active":"",onClick:()=>f("full"),children:"完整源码"})]}),u.jsx(bS,{code:d==="minimal"?x:S,title:d==="minimal"?`${t.slug}.minimal.tsx`:o,collapseAfter:d==="minimal"?0:26,maxHeight:420},d)]}),u.jsx(RS,{source:i,plugins:Ul})]})}const WS=v.lazy(()=>ni(()=>import("./HomePage-D7tqnqWb.js"),[],import.meta.url).then(e=>({default:e.HomePage}))),HS=v.lazy(()=>ni(()=>import("./PluginsPage-Uv8kzAv9.js"),[],import.meta.url).then(e=>({default:e.PluginsPage}))),VS=v.lazy(()=>ni(()=>import("./ScenariosPage-C7j8jt8g.js"),__vite__mapDeps([0,1]),import.meta.url).then(e=>({default:e.ScenariosPage}))),KS={pkg:"vane-candidate",brand:"C",subtitle:"候选人流水线 / plugin index",nav:[{to:"/",label:"总览",hint:"overview"},{to:"/plugins",label:"插件工坊",hint:`${Ul.length} plugins`},{to:"/scenarios",label:"场景示例",hint:`${zo.length} scenes`}],routes:[{path:"/",element:u.jsx(WS,{})},{path:"/plugins",element:u.jsx(HS,{})},{path:"/scenarios",element:u.jsx(VS,{})}],crumb:e=>e==="/plugins"?"plugins · 插件工坊":e==="/scenarios"?"scenarios · 场景示例":"index · 总览",demos:{label:"逐项示例",groups:I1.map(e=>({key:e,label:Fl[e].label})),entries:Bl,detail:(e,n)=>u.jsx(US,{entry:e,order:n})},footer:[`${Ul.length} PLUGINS · ${zo.length} SCENES`,`${Bl.length} DEMOS`]};typeof location<"u"&&location.search.includes("selftest=1")&&ni(()=>import("./selftest-CqMPC3Dp.js"),__vite__mapDeps([2,1]),import.meta.url).then(e=>e.runSelfTestToTitle());function GS(){return u.jsx(yh,{config:KS})}Ui.createRoot(document.getElementById("root")).render(u.jsx(GS,{}));export{cs as A,Nr as B,bS as C,Bl as D,fi as E,cm as F,Ku as G,Al as L,Ul as P,zo as S,JS as U,Fl as a,YS as b,Rn as c,Dn as d,On as e,XS as f,um as g,$r as h,Ka as i,u as j,ri as k,Ya as l,oi as m,Rt as n,ii as o,qa as p,li as q,v as r,ai as s,si as t,ui as u,is as v,qn as w,Tr as x,ci as y,di as z};
