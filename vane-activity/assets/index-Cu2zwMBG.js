var Cf=Object.defineProperty;var _f=(e,t,n)=>t in e?Cf(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var aa=(e,t,n)=>_f(e,typeof t!="symbol"?t+"":t,n);function bf(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Rf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Hu={exports:{}},Ni={},Vu={exports:{}},z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _r=Symbol.for("react.element"),Tf=Symbol.for("react.portal"),jf=Symbol.for("react.fragment"),Ef=Symbol.for("react.strict_mode"),$f=Symbol.for("react.profiler"),Af=Symbol.for("react.provider"),Lf=Symbol.for("react.context"),Nf=Symbol.for("react.forward_ref"),Mf=Symbol.for("react.suspense"),zf=Symbol.for("react.memo"),Of=Symbol.for("react.lazy"),ua=Symbol.iterator;function Df(e){return e===null||typeof e!="object"?null:(e=ua&&e[ua]||e["@@iterator"],typeof e=="function"?e:null)}var Qu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ku=Object.assign,Gu={};function An(e,t,n){this.props=e,this.context=t,this.refs=Gu,this.updater=n||Qu}An.prototype.isReactComponent={};An.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};An.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Yu(){}Yu.prototype=An.prototype;function Ns(e,t,n){this.props=e,this.context=t,this.refs=Gu,this.updater=n||Qu}var Ms=Ns.prototype=new Yu;Ms.constructor=Ns;Ku(Ms,An.prototype);Ms.isPureReactComponent=!0;var ca=Array.isArray,Ju=Object.prototype.hasOwnProperty,zs={current:null},Xu={key:!0,ref:!0,__self:!0,__source:!0};function Zu(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)Ju.call(t,r)&&!Xu.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:_r,type:e,key:o,ref:s,props:i,_owner:zs.current}}function If(e,t){return{$$typeof:_r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Os(e){return typeof e=="object"&&e!==null&&e.$$typeof===_r}function Ff(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var da=/\/+/g;function oo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Ff(""+e.key):t.toString(36)}function Yr(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case _r:case Tf:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+oo(s,0):r,ca(i)?(n="",e!=null&&(n=e.replace(da,"$&/")+"/"),Yr(i,t,n,"",function(c){return c})):i!=null&&(Os(i)&&(i=If(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(da,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",ca(e))for(var l=0;l<e.length;l++){o=e[l];var a=r+oo(o,l);s+=Yr(o,t,n,a,i)}else if(a=Df(e),typeof a=="function")for(e=a.call(e),l=0;!(o=e.next()).done;)o=o.value,a=r+oo(o,l++),s+=Yr(o,t,n,a,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Er(e,t,n){if(e==null)return e;var r=[],i=0;return Yr(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Bf(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var we={current:null},Jr={transition:null},Wf={ReactCurrentDispatcher:we,ReactCurrentBatchConfig:Jr,ReactCurrentOwner:zs};function qu(){throw Error("act(...) is not supported in production builds of React.")}z.Children={map:Er,forEach:function(e,t,n){Er(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Er(e,function(){t++}),t},toArray:function(e){return Er(e,function(t){return t})||[]},only:function(e){if(!Os(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};z.Component=An;z.Fragment=jf;z.Profiler=$f;z.PureComponent=Ns;z.StrictMode=Ef;z.Suspense=Mf;z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Wf;z.act=qu;z.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ku({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=zs.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(a in t)Ju.call(t,a)&&!Xu.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&l!==void 0?l[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:_r,type:e.type,key:i,ref:o,props:r,_owner:s}};z.createContext=function(e){return e={$$typeof:Lf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Af,_context:e},e.Consumer=e};z.createElement=Zu;z.createFactory=function(e){var t=Zu.bind(null,e);return t.type=e,t};z.createRef=function(){return{current:null}};z.forwardRef=function(e){return{$$typeof:Nf,render:e}};z.isValidElement=Os;z.lazy=function(e){return{$$typeof:Of,_payload:{_status:-1,_result:e},_init:Bf}};z.memo=function(e,t){return{$$typeof:zf,type:e,compare:t===void 0?null:t}};z.startTransition=function(e){var t=Jr.transition;Jr.transition={};try{e()}finally{Jr.transition=t}};z.unstable_act=qu;z.useCallback=function(e,t){return we.current.useCallback(e,t)};z.useContext=function(e){return we.current.useContext(e)};z.useDebugValue=function(){};z.useDeferredValue=function(e){return we.current.useDeferredValue(e)};z.useEffect=function(e,t){return we.current.useEffect(e,t)};z.useId=function(){return we.current.useId()};z.useImperativeHandle=function(e,t,n){return we.current.useImperativeHandle(e,t,n)};z.useInsertionEffect=function(e,t){return we.current.useInsertionEffect(e,t)};z.useLayoutEffect=function(e,t){return we.current.useLayoutEffect(e,t)};z.useMemo=function(e,t){return we.current.useMemo(e,t)};z.useReducer=function(e,t,n){return we.current.useReducer(e,t,n)};z.useRef=function(e){return we.current.useRef(e)};z.useState=function(e){return we.current.useState(e)};z.useSyncExternalStore=function(e,t,n){return we.current.useSyncExternalStore(e,t,n)};z.useTransition=function(){return we.current.useTransition()};z.version="18.3.1";Vu.exports=z;var x=Vu.exports;const en=Rf(x),Uf=bf({__proto__:null,default:en},[x]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hf=x,Vf=Symbol.for("react.element"),Qf=Symbol.for("react.fragment"),Kf=Object.prototype.hasOwnProperty,Gf=Hf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Yf={key:!0,ref:!0,__self:!0,__source:!0};function ec(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)Kf.call(t,r)&&!Yf.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Vf,type:e,key:o,ref:s,props:i,_owner:Gf.current}}Ni.Fragment=Qf;Ni.jsx=ec;Ni.jsxs=ec;Hu.exports=Ni;var u=Hu.exports,Mo={},tc={exports:{}},Le={},nc={exports:{}},rc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(E,L){var M=E.length;E.push(L);e:for(;0<M;){var Y=M-1>>>1,re=E[Y];if(0<i(re,L))E[Y]=L,E[M]=re,M=Y;else break e}}function n(E){return E.length===0?null:E[0]}function r(E){if(E.length===0)return null;var L=E[0],M=E.pop();if(M!==L){E[0]=M;e:for(var Y=0,re=E.length,B=re>>>1;Y<B;){var W=2*(Y+1)-1,ae=E[W],me=W+1,ue=E[me];if(0>i(ae,M))me<re&&0>i(ue,ae)?(E[Y]=ue,E[me]=M,Y=me):(E[Y]=ae,E[W]=M,Y=W);else if(me<re&&0>i(ue,M))E[Y]=ue,E[me]=M,Y=me;else break e}}return L}function i(E,L){var M=E.sortIndex-L.sortIndex;return M!==0?M:E.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,l=s.now();e.unstable_now=function(){return s.now()-l}}var a=[],c=[],f=1,p=null,m=3,h=!1,y=!1,P=!1,w=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(E){for(var L=n(c);L!==null;){if(L.callback===null)r(c);else if(L.startTime<=E)r(c),L.sortIndex=L.expirationTime,t(a,L);else break;L=n(c)}}function k(E){if(P=!1,v(E),!y)if(n(a)!==null)y=!0,Ue(S);else{var L=n(c);L!==null&&Xe(k,L.startTime-E)}}function S(E,L){y=!1,P&&(P=!1,g(j),j=-1),h=!0;var M=m;try{for(v(L),p=n(a);p!==null&&(!(p.expirationTime>L)||E&&!N());){var Y=p.callback;if(typeof Y=="function"){p.callback=null,m=p.priorityLevel;var re=Y(p.expirationTime<=L);L=e.unstable_now(),typeof re=="function"?p.callback=re:p===n(a)&&r(a),v(L)}else r(a);p=n(a)}if(p!==null)var B=!0;else{var W=n(c);W!==null&&Xe(k,W.startTime-L),B=!1}return B}finally{p=null,m=M,h=!1}}var b=!1,T=null,j=-1,C=5,_=-1;function N(){return!(e.unstable_now()-_<C)}function U(){if(T!==null){var E=e.unstable_now();_=E;var L=!0;try{L=T(!0,E)}finally{L?A():(b=!1,T=null)}}else b=!1}var A;if(typeof d=="function")A=function(){d(U)};else if(typeof MessageChannel<"u"){var V=new MessageChannel,We=V.port2;V.port1.onmessage=U,A=function(){We.postMessage(null)}}else A=function(){w(U,0)};function Ue(E){T=E,b||(b=!0,A())}function Xe(E,L){j=w(function(){E(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){y||h||(y=!0,Ue(S))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(E){switch(m){case 1:case 2:case 3:var L=3;break;default:L=m}var M=m;m=L;try{return E()}finally{m=M}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,L){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var M=m;m=E;try{return L()}finally{m=M}},e.unstable_scheduleCallback=function(E,L,M){var Y=e.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?Y+M:Y):M=Y,E){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=M+re,E={id:f++,callback:L,priorityLevel:E,startTime:M,expirationTime:re,sortIndex:-1},M>Y?(E.sortIndex=M,t(c,E),n(a)===null&&E===n(c)&&(P?(g(j),j=-1):P=!0,Xe(k,M-Y))):(E.sortIndex=re,t(a,E),y||h||(y=!0,Ue(S))),E},e.unstable_shouldYield=N,e.unstable_wrapCallback=function(E){var L=m;return function(){var M=m;m=L;try{return E.apply(this,arguments)}finally{m=M}}}})(rc);nc.exports=rc;var Jf=nc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xf=x,Ae=Jf;function R(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ic=new Set,sr={};function tn(e,t){_n(e,t),_n(e+"Capture",t)}function _n(e,t){for(sr[e]=t,e=0;e<t.length;e++)ic.add(t[e])}var ut=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zo=Object.prototype.hasOwnProperty,Zf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,fa={},pa={};function qf(e){return zo.call(pa,e)?!0:zo.call(fa,e)?!1:Zf.test(e)?pa[e]=!0:(fa[e]=!0,!1)}function ep(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function tp(e,t,n,r){if(t===null||typeof t>"u"||ep(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Se(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var ge={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ge[e]=new Se(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ge[t]=new Se(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ge[e]=new Se(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ge[e]=new Se(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ge[e]=new Se(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ge[e]=new Se(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ge[e]=new Se(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ge[e]=new Se(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ge[e]=new Se(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ds=/[\-:]([a-z])/g;function Is(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ds,Is);ge[t]=new Se(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ds,Is);ge[t]=new Se(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ds,Is);ge[t]=new Se(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ge[e]=new Se(e,1,!1,e.toLowerCase(),null,!1,!1)});ge.xlinkHref=new Se("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ge[e]=new Se(e,1,!1,e.toLowerCase(),null,!0,!0)});function Fs(e,t,n,r){var i=ge.hasOwnProperty(t)?ge[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(tp(t,n,i,r)&&(n=null),r||i===null?qf(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var pt=Xf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,$r=Symbol.for("react.element"),ln=Symbol.for("react.portal"),an=Symbol.for("react.fragment"),Bs=Symbol.for("react.strict_mode"),Oo=Symbol.for("react.profiler"),oc=Symbol.for("react.provider"),sc=Symbol.for("react.context"),Ws=Symbol.for("react.forward_ref"),Do=Symbol.for("react.suspense"),Io=Symbol.for("react.suspense_list"),Us=Symbol.for("react.memo"),ht=Symbol.for("react.lazy"),lc=Symbol.for("react.offscreen"),ga=Symbol.iterator;function On(e){return e===null||typeof e!="object"?null:(e=ga&&e[ga]||e["@@iterator"],typeof e=="function"?e:null)}var Z=Object.assign,so;function Qn(e){if(so===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);so=t&&t[1]||""}return`
`+so+e}var lo=!1;function ao(e,t){if(!e||lo)return"";lo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,l=o.length-1;1<=s&&0<=l&&i[s]!==o[l];)l--;for(;1<=s&&0<=l;s--,l--)if(i[s]!==o[l]){if(s!==1||l!==1)do if(s--,l--,0>l||i[s]!==o[l]){var a=`
`+i[s].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=s&&0<=l);break}}}finally{lo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Qn(e):""}function np(e){switch(e.tag){case 5:return Qn(e.type);case 16:return Qn("Lazy");case 13:return Qn("Suspense");case 19:return Qn("SuspenseList");case 0:case 2:case 15:return e=ao(e.type,!1),e;case 11:return e=ao(e.type.render,!1),e;case 1:return e=ao(e.type,!0),e;default:return""}}function Fo(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case an:return"Fragment";case ln:return"Portal";case Oo:return"Profiler";case Bs:return"StrictMode";case Do:return"Suspense";case Io:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case sc:return(e.displayName||"Context")+".Consumer";case oc:return(e._context.displayName||"Context")+".Provider";case Ws:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Us:return t=e.displayName||null,t!==null?t:Fo(e.type)||"Memo";case ht:t=e._payload,e=e._init;try{return Fo(e(t))}catch{}}return null}function rp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Fo(t);case 8:return t===Bs?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Lt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ac(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ip(e){var t=ac(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ar(e){e._valueTracker||(e._valueTracker=ip(e))}function uc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ac(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function li(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Bo(e,t){var n=t.checked;return Z({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ma(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Lt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function cc(e,t){t=t.checked,t!=null&&Fs(e,"checked",t,!1)}function Wo(e,t){cc(e,t);var n=Lt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Uo(e,t.type,n):t.hasOwnProperty("defaultValue")&&Uo(e,t.type,Lt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ha(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Uo(e,t,n){(t!=="number"||li(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Kn=Array.isArray;function xn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Lt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ho(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(R(91));return Z({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function va(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(R(92));if(Kn(n)){if(1<n.length)throw Error(R(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Lt(n)}}function dc(e,t){var n=Lt(t.value),r=Lt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ya(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function fc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Vo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?fc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Lr,pc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Lr=Lr||document.createElement("div"),Lr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Lr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function lr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Xn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},op=["Webkit","ms","Moz","O"];Object.keys(Xn).forEach(function(e){op.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Xn[t]=Xn[e]})});function gc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Xn.hasOwnProperty(e)&&Xn[e]?(""+t).trim():t+"px"}function mc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=gc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var sp=Z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Qo(e,t){if(t){if(sp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(R(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(R(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(R(61))}if(t.style!=null&&typeof t.style!="object")throw Error(R(62))}}function Ko(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Go=null;function Hs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Yo=null,Pn=null,kn=null;function xa(e){if(e=Tr(e)){if(typeof Yo!="function")throw Error(R(280));var t=e.stateNode;t&&(t=Ii(t),Yo(e.stateNode,e.type,t))}}function hc(e){Pn?kn?kn.push(e):kn=[e]:Pn=e}function vc(){if(Pn){var e=Pn,t=kn;if(kn=Pn=null,xa(e),t)for(e=0;e<t.length;e++)xa(t[e])}}function yc(e,t){return e(t)}function xc(){}var uo=!1;function Pc(e,t,n){if(uo)return e(t,n);uo=!0;try{return yc(e,t,n)}finally{uo=!1,(Pn!==null||kn!==null)&&(xc(),vc())}}function ar(e,t){var n=e.stateNode;if(n===null)return null;var r=Ii(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(R(231,t,typeof n));return n}var Jo=!1;if(ut)try{var Dn={};Object.defineProperty(Dn,"passive",{get:function(){Jo=!0}}),window.addEventListener("test",Dn,Dn),window.removeEventListener("test",Dn,Dn)}catch{Jo=!1}function lp(e,t,n,r,i,o,s,l,a){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(f){this.onError(f)}}var Zn=!1,ai=null,ui=!1,Xo=null,ap={onError:function(e){Zn=!0,ai=e}};function up(e,t,n,r,i,o,s,l,a){Zn=!1,ai=null,lp.apply(ap,arguments)}function cp(e,t,n,r,i,o,s,l,a){if(up.apply(this,arguments),Zn){if(Zn){var c=ai;Zn=!1,ai=null}else throw Error(R(198));ui||(ui=!0,Xo=c)}}function nn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function kc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Pa(e){if(nn(e)!==e)throw Error(R(188))}function dp(e){var t=e.alternate;if(!t){if(t=nn(e),t===null)throw Error(R(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Pa(i),e;if(o===r)return Pa(i),t;o=o.sibling}throw Error(R(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,l=i.child;l;){if(l===n){s=!0,n=i,r=o;break}if(l===r){s=!0,r=i,n=o;break}l=l.sibling}if(!s){for(l=o.child;l;){if(l===n){s=!0,n=o,r=i;break}if(l===r){s=!0,r=o,n=i;break}l=l.sibling}if(!s)throw Error(R(189))}}if(n.alternate!==r)throw Error(R(190))}if(n.tag!==3)throw Error(R(188));return n.stateNode.current===n?e:t}function wc(e){return e=dp(e),e!==null?Sc(e):null}function Sc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Sc(e);if(t!==null)return t;e=e.sibling}return null}var Cc=Ae.unstable_scheduleCallback,ka=Ae.unstable_cancelCallback,fp=Ae.unstable_shouldYield,pp=Ae.unstable_requestPaint,te=Ae.unstable_now,gp=Ae.unstable_getCurrentPriorityLevel,Vs=Ae.unstable_ImmediatePriority,_c=Ae.unstable_UserBlockingPriority,ci=Ae.unstable_NormalPriority,mp=Ae.unstable_LowPriority,bc=Ae.unstable_IdlePriority,Mi=null,tt=null;function hp(e){if(tt&&typeof tt.onCommitFiberRoot=="function")try{tt.onCommitFiberRoot(Mi,e,void 0,(e.current.flags&128)===128)}catch{}}var Ge=Math.clz32?Math.clz32:xp,vp=Math.log,yp=Math.LN2;function xp(e){return e>>>=0,e===0?32:31-(vp(e)/yp|0)|0}var Nr=64,Mr=4194304;function Gn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function di(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var l=s&~i;l!==0?r=Gn(l):(o&=s,o!==0&&(r=Gn(o)))}else s=n&~i,s!==0?r=Gn(s):o!==0&&(r=Gn(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ge(t),i=1<<n,r|=e[n],t&=~i;return r}function Pp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kp(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-Ge(o),l=1<<s,a=i[s];a===-1?(!(l&n)||l&r)&&(i[s]=Pp(l,t)):a<=t&&(e.expiredLanes|=l),o&=~l}}function Zo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Rc(){var e=Nr;return Nr<<=1,!(Nr&4194240)&&(Nr=64),e}function co(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function br(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ge(t),e[t]=n}function wp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ge(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Qs(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ge(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var F=0;function Tc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var jc,Ks,Ec,$c,Ac,qo=!1,zr=[],Ct=null,_t=null,bt=null,ur=new Map,cr=new Map,xt=[],Sp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function wa(e,t){switch(e){case"focusin":case"focusout":Ct=null;break;case"dragenter":case"dragleave":_t=null;break;case"mouseover":case"mouseout":bt=null;break;case"pointerover":case"pointerout":ur.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":cr.delete(t.pointerId)}}function In(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Tr(t),t!==null&&Ks(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Cp(e,t,n,r,i){switch(t){case"focusin":return Ct=In(Ct,e,t,n,r,i),!0;case"dragenter":return _t=In(_t,e,t,n,r,i),!0;case"mouseover":return bt=In(bt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return ur.set(o,In(ur.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,cr.set(o,In(cr.get(o)||null,e,t,n,r,i)),!0}return!1}function Lc(e){var t=Ht(e.target);if(t!==null){var n=nn(t);if(n!==null){if(t=n.tag,t===13){if(t=kc(n),t!==null){e.blockedOn=t,Ac(e.priority,function(){Ec(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Xr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=es(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Go=r,n.target.dispatchEvent(r),Go=null}else return t=Tr(n),t!==null&&Ks(t),e.blockedOn=n,!1;t.shift()}return!0}function Sa(e,t,n){Xr(e)&&n.delete(t)}function _p(){qo=!1,Ct!==null&&Xr(Ct)&&(Ct=null),_t!==null&&Xr(_t)&&(_t=null),bt!==null&&Xr(bt)&&(bt=null),ur.forEach(Sa),cr.forEach(Sa)}function Fn(e,t){e.blockedOn===t&&(e.blockedOn=null,qo||(qo=!0,Ae.unstable_scheduleCallback(Ae.unstable_NormalPriority,_p)))}function dr(e){function t(i){return Fn(i,e)}if(0<zr.length){Fn(zr[0],e);for(var n=1;n<zr.length;n++){var r=zr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Ct!==null&&Fn(Ct,e),_t!==null&&Fn(_t,e),bt!==null&&Fn(bt,e),ur.forEach(t),cr.forEach(t),n=0;n<xt.length;n++)r=xt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<xt.length&&(n=xt[0],n.blockedOn===null);)Lc(n),n.blockedOn===null&&xt.shift()}var wn=pt.ReactCurrentBatchConfig,fi=!0;function bp(e,t,n,r){var i=F,o=wn.transition;wn.transition=null;try{F=1,Gs(e,t,n,r)}finally{F=i,wn.transition=o}}function Rp(e,t,n,r){var i=F,o=wn.transition;wn.transition=null;try{F=4,Gs(e,t,n,r)}finally{F=i,wn.transition=o}}function Gs(e,t,n,r){if(fi){var i=es(e,t,n,r);if(i===null)ko(e,t,r,pi,n),wa(e,r);else if(Cp(i,e,t,n,r))r.stopPropagation();else if(wa(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var o=Tr(i);if(o!==null&&jc(o),o=es(e,t,n,r),o===null&&ko(e,t,r,pi,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else ko(e,t,r,null,n)}}var pi=null;function es(e,t,n,r){if(pi=null,e=Hs(r),e=Ht(e),e!==null)if(t=nn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=kc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return pi=e,null}function Nc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(gp()){case Vs:return 1;case _c:return 4;case ci:case mp:return 16;case bc:return 536870912;default:return 16}default:return 16}}var kt=null,Ys=null,Zr=null;function Mc(){if(Zr)return Zr;var e,t=Ys,n=t.length,r,i="value"in kt?kt.value:kt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return Zr=i.slice(e,1<r?1-r:void 0)}function qr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Or(){return!0}function Ca(){return!1}function Ne(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Or:Ca,this.isPropagationStopped=Ca,this}return Z(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Or)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Or)},persist:function(){},isPersistent:Or}),t}var Ln={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Js=Ne(Ln),Rr=Z({},Ln,{view:0,detail:0}),Tp=Ne(Rr),fo,po,Bn,zi=Z({},Rr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Bn&&(Bn&&e.type==="mousemove"?(fo=e.screenX-Bn.screenX,po=e.screenY-Bn.screenY):po=fo=0,Bn=e),fo)},movementY:function(e){return"movementY"in e?e.movementY:po}}),_a=Ne(zi),jp=Z({},zi,{dataTransfer:0}),Ep=Ne(jp),$p=Z({},Rr,{relatedTarget:0}),go=Ne($p),Ap=Z({},Ln,{animationName:0,elapsedTime:0,pseudoElement:0}),Lp=Ne(Ap),Np=Z({},Ln,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Mp=Ne(Np),zp=Z({},Ln,{data:0}),ba=Ne(zp),Op={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Dp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ip={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Fp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ip[e])?!!t[e]:!1}function Xs(){return Fp}var Bp=Z({},Rr,{key:function(e){if(e.key){var t=Op[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=qr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Dp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xs,charCode:function(e){return e.type==="keypress"?qr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?qr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Wp=Ne(Bp),Up=Z({},zi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ra=Ne(Up),Hp=Z({},Rr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xs}),Vp=Ne(Hp),Qp=Z({},Ln,{propertyName:0,elapsedTime:0,pseudoElement:0}),Kp=Ne(Qp),Gp=Z({},zi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Yp=Ne(Gp),Jp=[9,13,27,32],Zs=ut&&"CompositionEvent"in window,qn=null;ut&&"documentMode"in document&&(qn=document.documentMode);var Xp=ut&&"TextEvent"in window&&!qn,zc=ut&&(!Zs||qn&&8<qn&&11>=qn),Ta=" ",ja=!1;function Oc(e,t){switch(e){case"keyup":return Jp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Dc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var un=!1;function Zp(e,t){switch(e){case"compositionend":return Dc(t);case"keypress":return t.which!==32?null:(ja=!0,Ta);case"textInput":return e=t.data,e===Ta&&ja?null:e;default:return null}}function qp(e,t){if(un)return e==="compositionend"||!Zs&&Oc(e,t)?(e=Mc(),Zr=Ys=kt=null,un=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return zc&&t.locale!=="ko"?null:t.data;default:return null}}var eg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ea(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!eg[e.type]:t==="textarea"}function Ic(e,t,n,r){hc(r),t=gi(t,"onChange"),0<t.length&&(n=new Js("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var er=null,fr=null;function tg(e){Jc(e,0)}function Oi(e){var t=fn(e);if(uc(t))return e}function ng(e,t){if(e==="change")return t}var Fc=!1;if(ut){var mo;if(ut){var ho="oninput"in document;if(!ho){var $a=document.createElement("div");$a.setAttribute("oninput","return;"),ho=typeof $a.oninput=="function"}mo=ho}else mo=!1;Fc=mo&&(!document.documentMode||9<document.documentMode)}function Aa(){er&&(er.detachEvent("onpropertychange",Bc),fr=er=null)}function Bc(e){if(e.propertyName==="value"&&Oi(fr)){var t=[];Ic(t,fr,e,Hs(e)),Pc(tg,t)}}function rg(e,t,n){e==="focusin"?(Aa(),er=t,fr=n,er.attachEvent("onpropertychange",Bc)):e==="focusout"&&Aa()}function ig(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Oi(fr)}function og(e,t){if(e==="click")return Oi(t)}function sg(e,t){if(e==="input"||e==="change")return Oi(t)}function lg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Je=typeof Object.is=="function"?Object.is:lg;function pr(e,t){if(Je(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!zo.call(t,i)||!Je(e[i],t[i]))return!1}return!0}function La(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Na(e,t){var n=La(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=La(n)}}function Wc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Wc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Uc(){for(var e=window,t=li();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=li(e.document)}return t}function qs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function ag(e){var t=Uc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Wc(n.ownerDocument.documentElement,n)){if(r!==null&&qs(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Na(n,o);var s=Na(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var ug=ut&&"documentMode"in document&&11>=document.documentMode,cn=null,ts=null,tr=null,ns=!1;function Ma(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ns||cn==null||cn!==li(r)||(r=cn,"selectionStart"in r&&qs(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),tr&&pr(tr,r)||(tr=r,r=gi(ts,"onSelect"),0<r.length&&(t=new Js("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=cn)))}function Dr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var dn={animationend:Dr("Animation","AnimationEnd"),animationiteration:Dr("Animation","AnimationIteration"),animationstart:Dr("Animation","AnimationStart"),transitionend:Dr("Transition","TransitionEnd")},vo={},Hc={};ut&&(Hc=document.createElement("div").style,"AnimationEvent"in window||(delete dn.animationend.animation,delete dn.animationiteration.animation,delete dn.animationstart.animation),"TransitionEvent"in window||delete dn.transitionend.transition);function Di(e){if(vo[e])return vo[e];if(!dn[e])return e;var t=dn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Hc)return vo[e]=t[n];return e}var Vc=Di("animationend"),Qc=Di("animationiteration"),Kc=Di("animationstart"),Gc=Di("transitionend"),Yc=new Map,za="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Mt(e,t){Yc.set(e,t),tn(t,[e])}for(var yo=0;yo<za.length;yo++){var xo=za[yo],cg=xo.toLowerCase(),dg=xo[0].toUpperCase()+xo.slice(1);Mt(cg,"on"+dg)}Mt(Vc,"onAnimationEnd");Mt(Qc,"onAnimationIteration");Mt(Kc,"onAnimationStart");Mt("dblclick","onDoubleClick");Mt("focusin","onFocus");Mt("focusout","onBlur");Mt(Gc,"onTransitionEnd");_n("onMouseEnter",["mouseout","mouseover"]);_n("onMouseLeave",["mouseout","mouseover"]);_n("onPointerEnter",["pointerout","pointerover"]);_n("onPointerLeave",["pointerout","pointerover"]);tn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));tn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));tn("onBeforeInput",["compositionend","keypress","textInput","paste"]);tn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));tn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));tn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Yn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fg=new Set("cancel close invalid load scroll toggle".split(" ").concat(Yn));function Oa(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,cp(r,t,void 0,e),e.currentTarget=null}function Jc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var l=r[s],a=l.instance,c=l.currentTarget;if(l=l.listener,a!==o&&i.isPropagationStopped())break e;Oa(i,l,c),o=a}else for(s=0;s<r.length;s++){if(l=r[s],a=l.instance,c=l.currentTarget,l=l.listener,a!==o&&i.isPropagationStopped())break e;Oa(i,l,c),o=a}}}if(ui)throw e=Xo,ui=!1,Xo=null,e}function Q(e,t){var n=t[ls];n===void 0&&(n=t[ls]=new Set);var r=e+"__bubble";n.has(r)||(Xc(t,e,2,!1),n.add(r))}function Po(e,t,n){var r=0;t&&(r|=4),Xc(n,e,r,t)}var Ir="_reactListening"+Math.random().toString(36).slice(2);function gr(e){if(!e[Ir]){e[Ir]=!0,ic.forEach(function(n){n!=="selectionchange"&&(fg.has(n)||Po(n,!1,e),Po(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ir]||(t[Ir]=!0,Po("selectionchange",!1,t))}}function Xc(e,t,n,r){switch(Nc(t)){case 1:var i=bp;break;case 4:i=Rp;break;default:i=Gs}n=i.bind(null,t,n,e),i=void 0,!Jo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ko(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var a=s.tag;if((a===3||a===4)&&(a=s.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;s=s.return}for(;l!==null;){if(s=Ht(l),s===null)return;if(a=s.tag,a===5||a===6){r=o=s;continue e}l=l.parentNode}}r=r.return}Pc(function(){var c=o,f=Hs(n),p=[];e:{var m=Yc.get(e);if(m!==void 0){var h=Js,y=e;switch(e){case"keypress":if(qr(n)===0)break e;case"keydown":case"keyup":h=Wp;break;case"focusin":y="focus",h=go;break;case"focusout":y="blur",h=go;break;case"beforeblur":case"afterblur":h=go;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=_a;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=Ep;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=Vp;break;case Vc:case Qc:case Kc:h=Lp;break;case Gc:h=Kp;break;case"scroll":h=Tp;break;case"wheel":h=Yp;break;case"copy":case"cut":case"paste":h=Mp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Ra}var P=(t&4)!==0,w=!P&&e==="scroll",g=P?m!==null?m+"Capture":null:m;P=[];for(var d=c,v;d!==null;){v=d;var k=v.stateNode;if(v.tag===5&&k!==null&&(v=k,g!==null&&(k=ar(d,g),k!=null&&P.push(mr(d,k,v)))),w)break;d=d.return}0<P.length&&(m=new h(m,y,null,n,f),p.push({event:m,listeners:P}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",m&&n!==Go&&(y=n.relatedTarget||n.fromElement)&&(Ht(y)||y[ct]))break e;if((h||m)&&(m=f.window===f?f:(m=f.ownerDocument)?m.defaultView||m.parentWindow:window,h?(y=n.relatedTarget||n.toElement,h=c,y=y?Ht(y):null,y!==null&&(w=nn(y),y!==w||y.tag!==5&&y.tag!==6)&&(y=null)):(h=null,y=c),h!==y)){if(P=_a,k="onMouseLeave",g="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(P=Ra,k="onPointerLeave",g="onPointerEnter",d="pointer"),w=h==null?m:fn(h),v=y==null?m:fn(y),m=new P(k,d+"leave",h,n,f),m.target=w,m.relatedTarget=v,k=null,Ht(f)===c&&(P=new P(g,d+"enter",y,n,f),P.target=v,P.relatedTarget=w,k=P),w=k,h&&y)t:{for(P=h,g=y,d=0,v=P;v;v=sn(v))d++;for(v=0,k=g;k;k=sn(k))v++;for(;0<d-v;)P=sn(P),d--;for(;0<v-d;)g=sn(g),v--;for(;d--;){if(P===g||g!==null&&P===g.alternate)break t;P=sn(P),g=sn(g)}P=null}else P=null;h!==null&&Da(p,m,h,P,!1),y!==null&&w!==null&&Da(p,w,y,P,!0)}}e:{if(m=c?fn(c):window,h=m.nodeName&&m.nodeName.toLowerCase(),h==="select"||h==="input"&&m.type==="file")var S=ng;else if(Ea(m))if(Fc)S=sg;else{S=ig;var b=rg}else(h=m.nodeName)&&h.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(S=og);if(S&&(S=S(e,c))){Ic(p,S,n,f);break e}b&&b(e,m,c),e==="focusout"&&(b=m._wrapperState)&&b.controlled&&m.type==="number"&&Uo(m,"number",m.value)}switch(b=c?fn(c):window,e){case"focusin":(Ea(b)||b.contentEditable==="true")&&(cn=b,ts=c,tr=null);break;case"focusout":tr=ts=cn=null;break;case"mousedown":ns=!0;break;case"contextmenu":case"mouseup":case"dragend":ns=!1,Ma(p,n,f);break;case"selectionchange":if(ug)break;case"keydown":case"keyup":Ma(p,n,f)}var T;if(Zs)e:{switch(e){case"compositionstart":var j="onCompositionStart";break e;case"compositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else un?Oc(e,n)&&(j="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(j="onCompositionStart");j&&(zc&&n.locale!=="ko"&&(un||j!=="onCompositionStart"?j==="onCompositionEnd"&&un&&(T=Mc()):(kt=f,Ys="value"in kt?kt.value:kt.textContent,un=!0)),b=gi(c,j),0<b.length&&(j=new ba(j,e,null,n,f),p.push({event:j,listeners:b}),T?j.data=T:(T=Dc(n),T!==null&&(j.data=T)))),(T=Xp?Zp(e,n):qp(e,n))&&(c=gi(c,"onBeforeInput"),0<c.length&&(f=new ba("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:c}),f.data=T))}Jc(p,t)})}function mr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function gi(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=ar(e,n),o!=null&&r.unshift(mr(e,o,i)),o=ar(e,t),o!=null&&r.push(mr(e,o,i))),e=e.return}return r}function sn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Da(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var l=n,a=l.alternate,c=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&c!==null&&(l=c,i?(a=ar(n,o),a!=null&&s.unshift(mr(n,a,l))):i||(a=ar(n,o),a!=null&&s.push(mr(n,a,l)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var pg=/\r\n?/g,gg=/\u0000|\uFFFD/g;function Ia(e){return(typeof e=="string"?e:""+e).replace(pg,`
`).replace(gg,"")}function Fr(e,t,n){if(t=Ia(t),Ia(e)!==t&&n)throw Error(R(425))}function mi(){}var rs=null,is=null;function os(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ss=typeof setTimeout=="function"?setTimeout:void 0,mg=typeof clearTimeout=="function"?clearTimeout:void 0,Fa=typeof Promise=="function"?Promise:void 0,hg=typeof queueMicrotask=="function"?queueMicrotask:typeof Fa<"u"?function(e){return Fa.resolve(null).then(e).catch(vg)}:ss;function vg(e){setTimeout(function(){throw e})}function wo(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),dr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);dr(t)}function Rt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ba(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Nn=Math.random().toString(36).slice(2),et="__reactFiber$"+Nn,hr="__reactProps$"+Nn,ct="__reactContainer$"+Nn,ls="__reactEvents$"+Nn,yg="__reactListeners$"+Nn,xg="__reactHandles$"+Nn;function Ht(e){var t=e[et];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ct]||n[et]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ba(e);e!==null;){if(n=e[et])return n;e=Ba(e)}return t}e=n,n=e.parentNode}return null}function Tr(e){return e=e[et]||e[ct],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function fn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(R(33))}function Ii(e){return e[hr]||null}var as=[],pn=-1;function zt(e){return{current:e}}function K(e){0>pn||(e.current=as[pn],as[pn]=null,pn--)}function H(e,t){pn++,as[pn]=e.current,e.current=t}var Nt={},xe=zt(Nt),be=zt(!1),Yt=Nt;function bn(e,t){var n=e.type.contextTypes;if(!n)return Nt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Re(e){return e=e.childContextTypes,e!=null}function hi(){K(be),K(xe)}function Wa(e,t,n){if(xe.current!==Nt)throw Error(R(168));H(xe,t),H(be,n)}function Zc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(R(108,rp(e)||"Unknown",i));return Z({},n,r)}function vi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Nt,Yt=xe.current,H(xe,e),H(be,be.current),!0}function Ua(e,t,n){var r=e.stateNode;if(!r)throw Error(R(169));n?(e=Zc(e,t,Yt),r.__reactInternalMemoizedMergedChildContext=e,K(be),K(xe),H(xe,e)):K(be),H(be,n)}var ot=null,Fi=!1,So=!1;function qc(e){ot===null?ot=[e]:ot.push(e)}function Pg(e){Fi=!0,qc(e)}function Ot(){if(!So&&ot!==null){So=!0;var e=0,t=F;try{var n=ot;for(F=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ot=null,Fi=!1}catch(i){throw ot!==null&&(ot=ot.slice(e+1)),Cc(Vs,Ot),i}finally{F=t,So=!1}}return null}var gn=[],mn=0,yi=null,xi=0,ze=[],Oe=0,Jt=null,st=1,lt="";function Wt(e,t){gn[mn++]=xi,gn[mn++]=yi,yi=e,xi=t}function ed(e,t,n){ze[Oe++]=st,ze[Oe++]=lt,ze[Oe++]=Jt,Jt=e;var r=st;e=lt;var i=32-Ge(r)-1;r&=~(1<<i),n+=1;var o=32-Ge(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,st=1<<32-Ge(t)+i|n<<i|r,lt=o+e}else st=1<<o|n<<i|r,lt=e}function el(e){e.return!==null&&(Wt(e,1),ed(e,1,0))}function tl(e){for(;e===yi;)yi=gn[--mn],gn[mn]=null,xi=gn[--mn],gn[mn]=null;for(;e===Jt;)Jt=ze[--Oe],ze[Oe]=null,lt=ze[--Oe],ze[Oe]=null,st=ze[--Oe],ze[Oe]=null}var $e=null,Ee=null,G=!1,Ke=null;function td(e,t){var n=De(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ha(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,$e=e,Ee=Rt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,$e=e,Ee=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Jt!==null?{id:st,overflow:lt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=De(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,$e=e,Ee=null,!0):!1;default:return!1}}function us(e){return(e.mode&1)!==0&&(e.flags&128)===0}function cs(e){if(G){var t=Ee;if(t){var n=t;if(!Ha(e,t)){if(us(e))throw Error(R(418));t=Rt(n.nextSibling);var r=$e;t&&Ha(e,t)?td(r,n):(e.flags=e.flags&-4097|2,G=!1,$e=e)}}else{if(us(e))throw Error(R(418));e.flags=e.flags&-4097|2,G=!1,$e=e}}}function Va(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;$e=e}function Br(e){if(e!==$e)return!1;if(!G)return Va(e),G=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!os(e.type,e.memoizedProps)),t&&(t=Ee)){if(us(e))throw nd(),Error(R(418));for(;t;)td(e,t),t=Rt(t.nextSibling)}if(Va(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(R(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ee=Rt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ee=null}}else Ee=$e?Rt(e.stateNode.nextSibling):null;return!0}function nd(){for(var e=Ee;e;)e=Rt(e.nextSibling)}function Rn(){Ee=$e=null,G=!1}function nl(e){Ke===null?Ke=[e]:Ke.push(e)}var kg=pt.ReactCurrentBatchConfig;function Wn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(R(309));var r=n.stateNode}if(!r)throw Error(R(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var l=i.refs;s===null?delete l[o]:l[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(R(284));if(!n._owner)throw Error(R(290,e))}return e}function Wr(e,t){throw e=Object.prototype.toString.call(t),Error(R(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Qa(e){var t=e._init;return t(e._payload)}function rd(e){function t(g,d){if(e){var v=g.deletions;v===null?(g.deletions=[d],g.flags|=16):v.push(d)}}function n(g,d){if(!e)return null;for(;d!==null;)t(g,d),d=d.sibling;return null}function r(g,d){for(g=new Map;d!==null;)d.key!==null?g.set(d.key,d):g.set(d.index,d),d=d.sibling;return g}function i(g,d){return g=$t(g,d),g.index=0,g.sibling=null,g}function o(g,d,v){return g.index=v,e?(v=g.alternate,v!==null?(v=v.index,v<d?(g.flags|=2,d):v):(g.flags|=2,d)):(g.flags|=1048576,d)}function s(g){return e&&g.alternate===null&&(g.flags|=2),g}function l(g,d,v,k){return d===null||d.tag!==6?(d=Eo(v,g.mode,k),d.return=g,d):(d=i(d,v),d.return=g,d)}function a(g,d,v,k){var S=v.type;return S===an?f(g,d,v.props.children,k,v.key):d!==null&&(d.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===ht&&Qa(S)===d.type)?(k=i(d,v.props),k.ref=Wn(g,d,v),k.return=g,k):(k=si(v.type,v.key,v.props,null,g.mode,k),k.ref=Wn(g,d,v),k.return=g,k)}function c(g,d,v,k){return d===null||d.tag!==4||d.stateNode.containerInfo!==v.containerInfo||d.stateNode.implementation!==v.implementation?(d=$o(v,g.mode,k),d.return=g,d):(d=i(d,v.children||[]),d.return=g,d)}function f(g,d,v,k,S){return d===null||d.tag!==7?(d=Gt(v,g.mode,k,S),d.return=g,d):(d=i(d,v),d.return=g,d)}function p(g,d,v){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Eo(""+d,g.mode,v),d.return=g,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case $r:return v=si(d.type,d.key,d.props,null,g.mode,v),v.ref=Wn(g,null,d),v.return=g,v;case ln:return d=$o(d,g.mode,v),d.return=g,d;case ht:var k=d._init;return p(g,k(d._payload),v)}if(Kn(d)||On(d))return d=Gt(d,g.mode,v,null),d.return=g,d;Wr(g,d)}return null}function m(g,d,v,k){var S=d!==null?d.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return S!==null?null:l(g,d,""+v,k);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case $r:return v.key===S?a(g,d,v,k):null;case ln:return v.key===S?c(g,d,v,k):null;case ht:return S=v._init,m(g,d,S(v._payload),k)}if(Kn(v)||On(v))return S!==null?null:f(g,d,v,k,null);Wr(g,v)}return null}function h(g,d,v,k,S){if(typeof k=="string"&&k!==""||typeof k=="number")return g=g.get(v)||null,l(d,g,""+k,S);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case $r:return g=g.get(k.key===null?v:k.key)||null,a(d,g,k,S);case ln:return g=g.get(k.key===null?v:k.key)||null,c(d,g,k,S);case ht:var b=k._init;return h(g,d,v,b(k._payload),S)}if(Kn(k)||On(k))return g=g.get(v)||null,f(d,g,k,S,null);Wr(d,k)}return null}function y(g,d,v,k){for(var S=null,b=null,T=d,j=d=0,C=null;T!==null&&j<v.length;j++){T.index>j?(C=T,T=null):C=T.sibling;var _=m(g,T,v[j],k);if(_===null){T===null&&(T=C);break}e&&T&&_.alternate===null&&t(g,T),d=o(_,d,j),b===null?S=_:b.sibling=_,b=_,T=C}if(j===v.length)return n(g,T),G&&Wt(g,j),S;if(T===null){for(;j<v.length;j++)T=p(g,v[j],k),T!==null&&(d=o(T,d,j),b===null?S=T:b.sibling=T,b=T);return G&&Wt(g,j),S}for(T=r(g,T);j<v.length;j++)C=h(T,g,j,v[j],k),C!==null&&(e&&C.alternate!==null&&T.delete(C.key===null?j:C.key),d=o(C,d,j),b===null?S=C:b.sibling=C,b=C);return e&&T.forEach(function(N){return t(g,N)}),G&&Wt(g,j),S}function P(g,d,v,k){var S=On(v);if(typeof S!="function")throw Error(R(150));if(v=S.call(v),v==null)throw Error(R(151));for(var b=S=null,T=d,j=d=0,C=null,_=v.next();T!==null&&!_.done;j++,_=v.next()){T.index>j?(C=T,T=null):C=T.sibling;var N=m(g,T,_.value,k);if(N===null){T===null&&(T=C);break}e&&T&&N.alternate===null&&t(g,T),d=o(N,d,j),b===null?S=N:b.sibling=N,b=N,T=C}if(_.done)return n(g,T),G&&Wt(g,j),S;if(T===null){for(;!_.done;j++,_=v.next())_=p(g,_.value,k),_!==null&&(d=o(_,d,j),b===null?S=_:b.sibling=_,b=_);return G&&Wt(g,j),S}for(T=r(g,T);!_.done;j++,_=v.next())_=h(T,g,j,_.value,k),_!==null&&(e&&_.alternate!==null&&T.delete(_.key===null?j:_.key),d=o(_,d,j),b===null?S=_:b.sibling=_,b=_);return e&&T.forEach(function(U){return t(g,U)}),G&&Wt(g,j),S}function w(g,d,v,k){if(typeof v=="object"&&v!==null&&v.type===an&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case $r:e:{for(var S=v.key,b=d;b!==null;){if(b.key===S){if(S=v.type,S===an){if(b.tag===7){n(g,b.sibling),d=i(b,v.props.children),d.return=g,g=d;break e}}else if(b.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===ht&&Qa(S)===b.type){n(g,b.sibling),d=i(b,v.props),d.ref=Wn(g,b,v),d.return=g,g=d;break e}n(g,b);break}else t(g,b);b=b.sibling}v.type===an?(d=Gt(v.props.children,g.mode,k,v.key),d.return=g,g=d):(k=si(v.type,v.key,v.props,null,g.mode,k),k.ref=Wn(g,d,v),k.return=g,g=k)}return s(g);case ln:e:{for(b=v.key;d!==null;){if(d.key===b)if(d.tag===4&&d.stateNode.containerInfo===v.containerInfo&&d.stateNode.implementation===v.implementation){n(g,d.sibling),d=i(d,v.children||[]),d.return=g,g=d;break e}else{n(g,d);break}else t(g,d);d=d.sibling}d=$o(v,g.mode,k),d.return=g,g=d}return s(g);case ht:return b=v._init,w(g,d,b(v._payload),k)}if(Kn(v))return y(g,d,v,k);if(On(v))return P(g,d,v,k);Wr(g,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,d!==null&&d.tag===6?(n(g,d.sibling),d=i(d,v),d.return=g,g=d):(n(g,d),d=Eo(v,g.mode,k),d.return=g,g=d),s(g)):n(g,d)}return w}var Tn=rd(!0),id=rd(!1),Pi=zt(null),ki=null,hn=null,rl=null;function il(){rl=hn=ki=null}function ol(e){var t=Pi.current;K(Pi),e._currentValue=t}function ds(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Sn(e,t){ki=e,rl=hn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(_e=!0),e.firstContext=null)}function Fe(e){var t=e._currentValue;if(rl!==e)if(e={context:e,memoizedValue:t,next:null},hn===null){if(ki===null)throw Error(R(308));hn=e,ki.dependencies={lanes:0,firstContext:e}}else hn=hn.next=e;return t}var Vt=null;function sl(e){Vt===null?Vt=[e]:Vt.push(e)}function od(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,sl(t)):(n.next=i.next,i.next=n),t.interleaved=n,dt(e,r)}function dt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var vt=!1;function ll(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function sd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function at(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Tt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,O&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,dt(e,n)}return i=r.interleaved,i===null?(t.next=t,sl(r)):(t.next=i.next,i.next=t),r.interleaved=t,dt(e,n)}function ei(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Qs(e,n)}}function Ka(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function wi(e,t,n,r){var i=e.updateQueue;vt=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,c=a.next;a.next=null,s===null?o=c:s.next=c,s=a;var f=e.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==s&&(l===null?f.firstBaseUpdate=c:l.next=c,f.lastBaseUpdate=a))}if(o!==null){var p=i.baseState;s=0,f=c=a=null,l=o;do{var m=l.lane,h=l.eventTime;if((r&m)===m){f!==null&&(f=f.next={eventTime:h,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var y=e,P=l;switch(m=t,h=n,P.tag){case 1:if(y=P.payload,typeof y=="function"){p=y.call(h,p,m);break e}p=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=P.payload,m=typeof y=="function"?y.call(h,p,m):y,m==null)break e;p=Z({},p,m);break e;case 2:vt=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else h={eventTime:h,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(c=f=h,a=p):f=f.next=h,s|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(f===null&&(a=p),i.baseState=a,i.firstBaseUpdate=c,i.lastBaseUpdate=f,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Zt|=s,e.lanes=s,e.memoizedState=p}}function Ga(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(R(191,i));i.call(r)}}}var jr={},nt=zt(jr),vr=zt(jr),yr=zt(jr);function Qt(e){if(e===jr)throw Error(R(174));return e}function al(e,t){switch(H(yr,t),H(vr,e),H(nt,jr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Vo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Vo(t,e)}K(nt),H(nt,t)}function jn(){K(nt),K(vr),K(yr)}function ld(e){Qt(yr.current);var t=Qt(nt.current),n=Vo(t,e.type);t!==n&&(H(vr,e),H(nt,n))}function ul(e){vr.current===e&&(K(nt),K(vr))}var J=zt(0);function Si(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Co=[];function cl(){for(var e=0;e<Co.length;e++)Co[e]._workInProgressVersionPrimary=null;Co.length=0}var ti=pt.ReactCurrentDispatcher,_o=pt.ReactCurrentBatchConfig,Xt=0,X=null,se=null,ce=null,Ci=!1,nr=!1,xr=0,wg=0;function he(){throw Error(R(321))}function dl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Je(e[n],t[n]))return!1;return!0}function fl(e,t,n,r,i,o){if(Xt=o,X=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ti.current=e===null||e.memoizedState===null?bg:Rg,e=n(r,i),nr){o=0;do{if(nr=!1,xr=0,25<=o)throw Error(R(301));o+=1,ce=se=null,t.updateQueue=null,ti.current=Tg,e=n(r,i)}while(nr)}if(ti.current=_i,t=se!==null&&se.next!==null,Xt=0,ce=se=X=null,Ci=!1,t)throw Error(R(300));return e}function pl(){var e=xr!==0;return xr=0,e}function qe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ce===null?X.memoizedState=ce=e:ce=ce.next=e,ce}function Be(){if(se===null){var e=X.alternate;e=e!==null?e.memoizedState:null}else e=se.next;var t=ce===null?X.memoizedState:ce.next;if(t!==null)ce=t,se=e;else{if(e===null)throw Error(R(310));se=e,e={memoizedState:se.memoizedState,baseState:se.baseState,baseQueue:se.baseQueue,queue:se.queue,next:null},ce===null?X.memoizedState=ce=e:ce=ce.next=e}return ce}function Pr(e,t){return typeof t=="function"?t(e):t}function bo(e){var t=Be(),n=t.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=e;var r=se,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=s=null,a=null,c=o;do{var f=c.lane;if((Xt&f)===f)a!==null&&(a=a.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var p={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};a===null?(l=a=p,s=r):a=a.next=p,X.lanes|=f,Zt|=f}c=c.next}while(c!==null&&c!==o);a===null?s=r:a.next=l,Je(r,t.memoizedState)||(_e=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,X.lanes|=o,Zt|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ro(e){var t=Be(),n=t.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);Je(o,t.memoizedState)||(_e=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function ad(){}function ud(e,t){var n=X,r=Be(),i=t(),o=!Je(r.memoizedState,i);if(o&&(r.memoizedState=i,_e=!0),r=r.queue,gl(fd.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ce!==null&&ce.memoizedState.tag&1){if(n.flags|=2048,kr(9,dd.bind(null,n,r,i,t),void 0,null),de===null)throw Error(R(349));Xt&30||cd(n,t,i)}return i}function cd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function dd(e,t,n,r){t.value=n,t.getSnapshot=r,pd(t)&&gd(e)}function fd(e,t,n){return n(function(){pd(t)&&gd(e)})}function pd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Je(e,n)}catch{return!0}}function gd(e){var t=dt(e,1);t!==null&&Ye(t,e,1,-1)}function Ya(e){var t=qe();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Pr,lastRenderedState:e},t.queue=e,e=e.dispatch=_g.bind(null,X,e),[t.memoizedState,e]}function kr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function md(){return Be().memoizedState}function ni(e,t,n,r){var i=qe();X.flags|=e,i.memoizedState=kr(1|t,n,void 0,r===void 0?null:r)}function Bi(e,t,n,r){var i=Be();r=r===void 0?null:r;var o=void 0;if(se!==null){var s=se.memoizedState;if(o=s.destroy,r!==null&&dl(r,s.deps)){i.memoizedState=kr(t,n,o,r);return}}X.flags|=e,i.memoizedState=kr(1|t,n,o,r)}function Ja(e,t){return ni(8390656,8,e,t)}function gl(e,t){return Bi(2048,8,e,t)}function hd(e,t){return Bi(4,2,e,t)}function vd(e,t){return Bi(4,4,e,t)}function yd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function xd(e,t,n){return n=n!=null?n.concat([e]):null,Bi(4,4,yd.bind(null,t,e),n)}function ml(){}function Pd(e,t){var n=Be();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&dl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function kd(e,t){var n=Be();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&dl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function wd(e,t,n){return Xt&21?(Je(n,t)||(n=Rc(),X.lanes|=n,Zt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,_e=!0),e.memoizedState=n)}function Sg(e,t){var n=F;F=n!==0&&4>n?n:4,e(!0);var r=_o.transition;_o.transition={};try{e(!1),t()}finally{F=n,_o.transition=r}}function Sd(){return Be().memoizedState}function Cg(e,t,n){var r=Et(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Cd(e))_d(t,n);else if(n=od(e,t,n,r),n!==null){var i=ke();Ye(n,e,r,i),bd(n,t,r)}}function _g(e,t,n){var r=Et(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Cd(e))_d(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,l=o(s,n);if(i.hasEagerState=!0,i.eagerState=l,Je(l,s)){var a=t.interleaved;a===null?(i.next=i,sl(t)):(i.next=a.next,a.next=i),t.interleaved=i;return}}catch{}finally{}n=od(e,t,i,r),n!==null&&(i=ke(),Ye(n,e,r,i),bd(n,t,r))}}function Cd(e){var t=e.alternate;return e===X||t!==null&&t===X}function _d(e,t){nr=Ci=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function bd(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Qs(e,n)}}var _i={readContext:Fe,useCallback:he,useContext:he,useEffect:he,useImperativeHandle:he,useInsertionEffect:he,useLayoutEffect:he,useMemo:he,useReducer:he,useRef:he,useState:he,useDebugValue:he,useDeferredValue:he,useTransition:he,useMutableSource:he,useSyncExternalStore:he,useId:he,unstable_isNewReconciler:!1},bg={readContext:Fe,useCallback:function(e,t){return qe().memoizedState=[e,t===void 0?null:t],e},useContext:Fe,useEffect:Ja,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ni(4194308,4,yd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ni(4194308,4,e,t)},useInsertionEffect:function(e,t){return ni(4,2,e,t)},useMemo:function(e,t){var n=qe();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=qe();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Cg.bind(null,X,e),[r.memoizedState,e]},useRef:function(e){var t=qe();return e={current:e},t.memoizedState=e},useState:Ya,useDebugValue:ml,useDeferredValue:function(e){return qe().memoizedState=e},useTransition:function(){var e=Ya(!1),t=e[0];return e=Sg.bind(null,e[1]),qe().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=X,i=qe();if(G){if(n===void 0)throw Error(R(407));n=n()}else{if(n=t(),de===null)throw Error(R(349));Xt&30||cd(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Ja(fd.bind(null,r,o,e),[e]),r.flags|=2048,kr(9,dd.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=qe(),t=de.identifierPrefix;if(G){var n=lt,r=st;n=(r&~(1<<32-Ge(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=xr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=wg++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Rg={readContext:Fe,useCallback:Pd,useContext:Fe,useEffect:gl,useImperativeHandle:xd,useInsertionEffect:hd,useLayoutEffect:vd,useMemo:kd,useReducer:bo,useRef:md,useState:function(){return bo(Pr)},useDebugValue:ml,useDeferredValue:function(e){var t=Be();return wd(t,se.memoizedState,e)},useTransition:function(){var e=bo(Pr)[0],t=Be().memoizedState;return[e,t]},useMutableSource:ad,useSyncExternalStore:ud,useId:Sd,unstable_isNewReconciler:!1},Tg={readContext:Fe,useCallback:Pd,useContext:Fe,useEffect:gl,useImperativeHandle:xd,useInsertionEffect:hd,useLayoutEffect:vd,useMemo:kd,useReducer:Ro,useRef:md,useState:function(){return Ro(Pr)},useDebugValue:ml,useDeferredValue:function(e){var t=Be();return se===null?t.memoizedState=e:wd(t,se.memoizedState,e)},useTransition:function(){var e=Ro(Pr)[0],t=Be().memoizedState;return[e,t]},useMutableSource:ad,useSyncExternalStore:ud,useId:Sd,unstable_isNewReconciler:!1};function Ve(e,t){if(e&&e.defaultProps){t=Z({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function fs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Z({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Wi={isMounted:function(e){return(e=e._reactInternals)?nn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ke(),i=Et(e),o=at(r,i);o.payload=t,n!=null&&(o.callback=n),t=Tt(e,o,i),t!==null&&(Ye(t,e,i,r),ei(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ke(),i=Et(e),o=at(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Tt(e,o,i),t!==null&&(Ye(t,e,i,r),ei(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ke(),r=Et(e),i=at(n,r);i.tag=2,t!=null&&(i.callback=t),t=Tt(e,i,r),t!==null&&(Ye(t,e,r,n),ei(t,e,r))}};function Xa(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!pr(n,r)||!pr(i,o):!0}function Rd(e,t,n){var r=!1,i=Nt,o=t.contextType;return typeof o=="object"&&o!==null?o=Fe(o):(i=Re(t)?Yt:xe.current,r=t.contextTypes,o=(r=r!=null)?bn(e,i):Nt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Wi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Za(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Wi.enqueueReplaceState(t,t.state,null)}function ps(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},ll(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Fe(o):(o=Re(t)?Yt:xe.current,i.context=bn(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(fs(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Wi.enqueueReplaceState(i,i.state,null),wi(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function En(e,t){try{var n="",r=t;do n+=np(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function To(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function gs(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var jg=typeof WeakMap=="function"?WeakMap:Map;function Td(e,t,n){n=at(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ri||(Ri=!0,Cs=r),gs(e,t)},n}function jd(e,t,n){n=at(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){gs(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){gs(e,t),typeof r!="function"&&(jt===null?jt=new Set([this]):jt.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function qa(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new jg;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Ug.bind(null,e,t,n),t.then(e,e))}function eu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function tu(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=at(-1,1),t.tag=2,Tt(n,t,1))),n.lanes|=1),e)}var Eg=pt.ReactCurrentOwner,_e=!1;function Pe(e,t,n,r){t.child=e===null?id(t,null,n,r):Tn(t,e.child,n,r)}function nu(e,t,n,r,i){n=n.render;var o=t.ref;return Sn(t,i),r=fl(e,t,n,r,o,i),n=pl(),e!==null&&!_e?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ft(e,t,i)):(G&&n&&el(t),t.flags|=1,Pe(e,t,r,i),t.child)}function ru(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Sl(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Ed(e,t,o,r,i)):(e=si(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:pr,n(s,r)&&e.ref===t.ref)return ft(e,t,i)}return t.flags|=1,e=$t(o,r),e.ref=t.ref,e.return=t,t.child=e}function Ed(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(pr(o,r)&&e.ref===t.ref)if(_e=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(_e=!0);else return t.lanes=e.lanes,ft(e,t,i)}return ms(e,t,n,r,i)}function $d(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},H(yn,je),je|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,H(yn,je),je|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,H(yn,je),je|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,H(yn,je),je|=r;return Pe(e,t,i,n),t.child}function Ad(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ms(e,t,n,r,i){var o=Re(n)?Yt:xe.current;return o=bn(t,o),Sn(t,i),n=fl(e,t,n,r,o,i),r=pl(),e!==null&&!_e?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ft(e,t,i)):(G&&r&&el(t),t.flags|=1,Pe(e,t,n,i),t.child)}function iu(e,t,n,r,i){if(Re(n)){var o=!0;vi(t)}else o=!1;if(Sn(t,i),t.stateNode===null)ri(e,t),Rd(t,n,r),ps(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,l=t.memoizedProps;s.props=l;var a=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=Fe(c):(c=Re(n)?Yt:xe.current,c=bn(t,c));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof s.getSnapshotBeforeUpdate=="function";p||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==r||a!==c)&&Za(t,s,r,c),vt=!1;var m=t.memoizedState;s.state=m,wi(t,r,s,i),a=t.memoizedState,l!==r||m!==a||be.current||vt?(typeof f=="function"&&(fs(t,n,f,r),a=t.memoizedState),(l=vt||Xa(t,n,l,r,m,a,c))?(p||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),s.props=r,s.state=a,s.context=c,r=l):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,sd(e,t),l=t.memoizedProps,c=t.type===t.elementType?l:Ve(t.type,l),s.props=c,p=t.pendingProps,m=s.context,a=n.contextType,typeof a=="object"&&a!==null?a=Fe(a):(a=Re(n)?Yt:xe.current,a=bn(t,a));var h=n.getDerivedStateFromProps;(f=typeof h=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==p||m!==a)&&Za(t,s,r,a),vt=!1,m=t.memoizedState,s.state=m,wi(t,r,s,i);var y=t.memoizedState;l!==p||m!==y||be.current||vt?(typeof h=="function"&&(fs(t,n,h,r),y=t.memoizedState),(c=vt||Xa(t,n,c,r,m,y,a)||!1)?(f||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,y,a),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,y,a)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),s.props=r,s.state=y,s.context=a,r=c):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return hs(e,t,n,r,o,i)}function hs(e,t,n,r,i,o){Ad(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&Ua(t,n,!1),ft(e,t,o);r=t.stateNode,Eg.current=t;var l=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Tn(t,e.child,null,o),t.child=Tn(t,null,l,o)):Pe(e,t,l,o),t.memoizedState=r.state,i&&Ua(t,n,!0),t.child}function Ld(e){var t=e.stateNode;t.pendingContext?Wa(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Wa(e,t.context,!1),al(e,t.containerInfo)}function ou(e,t,n,r,i){return Rn(),nl(i),t.flags|=256,Pe(e,t,n,r),t.child}var vs={dehydrated:null,treeContext:null,retryLane:0};function ys(e){return{baseLanes:e,cachePool:null,transitions:null}}function Nd(e,t,n){var r=t.pendingProps,i=J.current,o=!1,s=(t.flags&128)!==0,l;if((l=s)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),H(J,i&1),e===null)return cs(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Vi(s,r,0,null),e=Gt(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=ys(n),t.memoizedState=vs,e):hl(t,s));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return $g(e,t,s,r,l,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=$t(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=$t(l,o):(o=Gt(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?ys(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=vs,r}return o=e.child,e=o.sibling,r=$t(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function hl(e,t){return t=Vi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ur(e,t,n,r){return r!==null&&nl(r),Tn(t,e.child,null,n),e=hl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function $g(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=To(Error(R(422))),Ur(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Vi({mode:"visible",children:r.children},i,0,null),o=Gt(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Tn(t,e.child,null,s),t.child.memoizedState=ys(s),t.memoizedState=vs,o);if(!(t.mode&1))return Ur(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(R(419)),r=To(o,r,void 0),Ur(e,t,s,r)}if(l=(s&e.childLanes)!==0,_e||l){if(r=de,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,dt(e,i),Ye(r,e,i,-1))}return wl(),r=To(Error(R(421))),Ur(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Hg.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Ee=Rt(i.nextSibling),$e=t,G=!0,Ke=null,e!==null&&(ze[Oe++]=st,ze[Oe++]=lt,ze[Oe++]=Jt,st=e.id,lt=e.overflow,Jt=t),t=hl(t,r.children),t.flags|=4096,t)}function su(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ds(e.return,t,n)}function jo(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Md(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Pe(e,t,r.children,n),r=J.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&su(e,n,t);else if(e.tag===19)su(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(H(J,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Si(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),jo(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Si(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}jo(t,!0,n,null,o);break;case"together":jo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ri(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ft(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Zt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(R(153));if(t.child!==null){for(e=t.child,n=$t(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=$t(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ag(e,t,n){switch(t.tag){case 3:Ld(t),Rn();break;case 5:ld(t);break;case 1:Re(t.type)&&vi(t);break;case 4:al(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;H(Pi,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(H(J,J.current&1),t.flags|=128,null):n&t.child.childLanes?Nd(e,t,n):(H(J,J.current&1),e=ft(e,t,n),e!==null?e.sibling:null);H(J,J.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Md(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),H(J,J.current),r)break;return null;case 22:case 23:return t.lanes=0,$d(e,t,n)}return ft(e,t,n)}var zd,xs,Od,Dd;zd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};xs=function(){};Od=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Qt(nt.current);var o=null;switch(n){case"input":i=Bo(e,i),r=Bo(e,r),o=[];break;case"select":i=Z({},i,{value:void 0}),r=Z({},r,{value:void 0}),o=[];break;case"textarea":i=Ho(e,i),r=Ho(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=mi)}Qo(n,r);var s;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(s in l)l.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(sr.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var a=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&a!==l&&(a!=null||l!=null))if(c==="style")if(l){for(s in l)!l.hasOwnProperty(s)||a&&a.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in a)a.hasOwnProperty(s)&&l[s]!==a[s]&&(n||(n={}),n[s]=a[s])}else n||(o||(o=[]),o.push(c,n)),n=a;else c==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(o=o||[]).push(c,a)):c==="children"?typeof a!="string"&&typeof a!="number"||(o=o||[]).push(c,""+a):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(sr.hasOwnProperty(c)?(a!=null&&c==="onScroll"&&Q("scroll",e),o||l===a||(o=[])):(o=o||[]).push(c,a))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};Dd=function(e,t,n,r){n!==r&&(t.flags|=4)};function Un(e,t){if(!G)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ve(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Lg(e,t,n){var r=t.pendingProps;switch(tl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ve(t),null;case 1:return Re(t.type)&&hi(),ve(t),null;case 3:return r=t.stateNode,jn(),K(be),K(xe),cl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Br(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ke!==null&&(Rs(Ke),Ke=null))),xs(e,t),ve(t),null;case 5:ul(t);var i=Qt(yr.current);if(n=t.type,e!==null&&t.stateNode!=null)Od(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(R(166));return ve(t),null}if(e=Qt(nt.current),Br(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[et]=t,r[hr]=o,e=(t.mode&1)!==0,n){case"dialog":Q("cancel",r),Q("close",r);break;case"iframe":case"object":case"embed":Q("load",r);break;case"video":case"audio":for(i=0;i<Yn.length;i++)Q(Yn[i],r);break;case"source":Q("error",r);break;case"img":case"image":case"link":Q("error",r),Q("load",r);break;case"details":Q("toggle",r);break;case"input":ma(r,o),Q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Q("invalid",r);break;case"textarea":va(r,o),Q("invalid",r)}Qo(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&Fr(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&Fr(r.textContent,l,e),i=["children",""+l]):sr.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&Q("scroll",r)}switch(n){case"input":Ar(r),ha(r,o,!0);break;case"textarea":Ar(r),ya(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=mi)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=fc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[et]=t,e[hr]=r,zd(e,t,!1,!1),t.stateNode=e;e:{switch(s=Ko(n,r),n){case"dialog":Q("cancel",e),Q("close",e),i=r;break;case"iframe":case"object":case"embed":Q("load",e),i=r;break;case"video":case"audio":for(i=0;i<Yn.length;i++)Q(Yn[i],e);i=r;break;case"source":Q("error",e),i=r;break;case"img":case"image":case"link":Q("error",e),Q("load",e),i=r;break;case"details":Q("toggle",e),i=r;break;case"input":ma(e,r),i=Bo(e,r),Q("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Z({},r,{value:void 0}),Q("invalid",e);break;case"textarea":va(e,r),i=Ho(e,r),Q("invalid",e);break;default:i=r}Qo(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var a=l[o];o==="style"?mc(e,a):o==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&pc(e,a)):o==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&lr(e,a):typeof a=="number"&&lr(e,""+a):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(sr.hasOwnProperty(o)?a!=null&&o==="onScroll"&&Q("scroll",e):a!=null&&Fs(e,o,a,s))}switch(n){case"input":Ar(e),ha(e,r,!1);break;case"textarea":Ar(e),ya(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Lt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?xn(e,!!r.multiple,o,!1):r.defaultValue!=null&&xn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=mi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ve(t),null;case 6:if(e&&t.stateNode!=null)Dd(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(R(166));if(n=Qt(yr.current),Qt(nt.current),Br(t)){if(r=t.stateNode,n=t.memoizedProps,r[et]=t,(o=r.nodeValue!==n)&&(e=$e,e!==null))switch(e.tag){case 3:Fr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Fr(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[et]=t,t.stateNode=r}return ve(t),null;case 13:if(K(J),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(G&&Ee!==null&&t.mode&1&&!(t.flags&128))nd(),Rn(),t.flags|=98560,o=!1;else if(o=Br(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(R(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(R(317));o[et]=t}else Rn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ve(t),o=!1}else Ke!==null&&(Rs(Ke),Ke=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||J.current&1?le===0&&(le=3):wl())),t.updateQueue!==null&&(t.flags|=4),ve(t),null);case 4:return jn(),xs(e,t),e===null&&gr(t.stateNode.containerInfo),ve(t),null;case 10:return ol(t.type._context),ve(t),null;case 17:return Re(t.type)&&hi(),ve(t),null;case 19:if(K(J),o=t.memoizedState,o===null)return ve(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)Un(o,!1);else{if(le!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Si(e),s!==null){for(t.flags|=128,Un(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return H(J,J.current&1|2),t.child}e=e.sibling}o.tail!==null&&te()>$n&&(t.flags|=128,r=!0,Un(o,!1),t.lanes=4194304)}else{if(!r)if(e=Si(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Un(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!G)return ve(t),null}else 2*te()-o.renderingStartTime>$n&&n!==1073741824&&(t.flags|=128,r=!0,Un(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=te(),t.sibling=null,n=J.current,H(J,r?n&1|2:n&1),t):(ve(t),null);case 22:case 23:return kl(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?je&1073741824&&(ve(t),t.subtreeFlags&6&&(t.flags|=8192)):ve(t),null;case 24:return null;case 25:return null}throw Error(R(156,t.tag))}function Ng(e,t){switch(tl(t),t.tag){case 1:return Re(t.type)&&hi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return jn(),K(be),K(xe),cl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ul(t),null;case 13:if(K(J),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(R(340));Rn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return K(J),null;case 4:return jn(),null;case 10:return ol(t.type._context),null;case 22:case 23:return kl(),null;case 24:return null;default:return null}}var Hr=!1,ye=!1,Mg=typeof WeakSet=="function"?WeakSet:Set,$=null;function vn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){q(e,t,r)}else n.current=null}function Ps(e,t,n){try{n()}catch(r){q(e,t,r)}}var lu=!1;function zg(e,t){if(rs=fi,e=Uc(),qs(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,l=-1,a=-1,c=0,f=0,p=e,m=null;t:for(;;){for(var h;p!==n||i!==0&&p.nodeType!==3||(l=s+i),p!==o||r!==0&&p.nodeType!==3||(a=s+r),p.nodeType===3&&(s+=p.nodeValue.length),(h=p.firstChild)!==null;)m=p,p=h;for(;;){if(p===e)break t;if(m===n&&++c===i&&(l=s),m===o&&++f===r&&(a=s),(h=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=h}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(is={focusedElem:e,selectionRange:n},fi=!1,$=t;$!==null;)if(t=$,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,$=e;else for(;$!==null;){t=$;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var P=y.memoizedProps,w=y.memoizedState,g=t.stateNode,d=g.getSnapshotBeforeUpdate(t.elementType===t.type?P:Ve(t.type,P),w);g.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(R(163))}}catch(k){q(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,$=e;break}$=t.return}return y=lu,lu=!1,y}function rr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Ps(t,n,o)}i=i.next}while(i!==r)}}function Ui(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ks(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Id(e){var t=e.alternate;t!==null&&(e.alternate=null,Id(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[et],delete t[hr],delete t[ls],delete t[yg],delete t[xg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Fd(e){return e.tag===5||e.tag===3||e.tag===4}function au(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Fd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ws(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=mi));else if(r!==4&&(e=e.child,e!==null))for(ws(e,t,n),e=e.sibling;e!==null;)ws(e,t,n),e=e.sibling}function Ss(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ss(e,t,n),e=e.sibling;e!==null;)Ss(e,t,n),e=e.sibling}var fe=null,Qe=!1;function mt(e,t,n){for(n=n.child;n!==null;)Bd(e,t,n),n=n.sibling}function Bd(e,t,n){if(tt&&typeof tt.onCommitFiberUnmount=="function")try{tt.onCommitFiberUnmount(Mi,n)}catch{}switch(n.tag){case 5:ye||vn(n,t);case 6:var r=fe,i=Qe;fe=null,mt(e,t,n),fe=r,Qe=i,fe!==null&&(Qe?(e=fe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):fe.removeChild(n.stateNode));break;case 18:fe!==null&&(Qe?(e=fe,n=n.stateNode,e.nodeType===8?wo(e.parentNode,n):e.nodeType===1&&wo(e,n),dr(e)):wo(fe,n.stateNode));break;case 4:r=fe,i=Qe,fe=n.stateNode.containerInfo,Qe=!0,mt(e,t,n),fe=r,Qe=i;break;case 0:case 11:case 14:case 15:if(!ye&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Ps(n,t,s),i=i.next}while(i!==r)}mt(e,t,n);break;case 1:if(!ye&&(vn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){q(n,t,l)}mt(e,t,n);break;case 21:mt(e,t,n);break;case 22:n.mode&1?(ye=(r=ye)||n.memoizedState!==null,mt(e,t,n),ye=r):mt(e,t,n);break;default:mt(e,t,n)}}function uu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Mg),t.forEach(function(r){var i=Vg.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function He(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,l=s;e:for(;l!==null;){switch(l.tag){case 5:fe=l.stateNode,Qe=!1;break e;case 3:fe=l.stateNode.containerInfo,Qe=!0;break e;case 4:fe=l.stateNode.containerInfo,Qe=!0;break e}l=l.return}if(fe===null)throw Error(R(160));Bd(o,s,i),fe=null,Qe=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(c){q(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Wd(t,e),t=t.sibling}function Wd(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(He(t,e),Ze(e),r&4){try{rr(3,e,e.return),Ui(3,e)}catch(P){q(e,e.return,P)}try{rr(5,e,e.return)}catch(P){q(e,e.return,P)}}break;case 1:He(t,e),Ze(e),r&512&&n!==null&&vn(n,n.return);break;case 5:if(He(t,e),Ze(e),r&512&&n!==null&&vn(n,n.return),e.flags&32){var i=e.stateNode;try{lr(i,"")}catch(P){q(e,e.return,P)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,l=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&cc(i,o),Ko(l,s);var c=Ko(l,o);for(s=0;s<a.length;s+=2){var f=a[s],p=a[s+1];f==="style"?mc(i,p):f==="dangerouslySetInnerHTML"?pc(i,p):f==="children"?lr(i,p):Fs(i,f,p,c)}switch(l){case"input":Wo(i,o);break;case"textarea":dc(i,o);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var h=o.value;h!=null?xn(i,!!o.multiple,h,!1):m!==!!o.multiple&&(o.defaultValue!=null?xn(i,!!o.multiple,o.defaultValue,!0):xn(i,!!o.multiple,o.multiple?[]:"",!1))}i[hr]=o}catch(P){q(e,e.return,P)}}break;case 6:if(He(t,e),Ze(e),r&4){if(e.stateNode===null)throw Error(R(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(P){q(e,e.return,P)}}break;case 3:if(He(t,e),Ze(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{dr(t.containerInfo)}catch(P){q(e,e.return,P)}break;case 4:He(t,e),Ze(e);break;case 13:He(t,e),Ze(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(xl=te())),r&4&&uu(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(ye=(c=ye)||f,He(t,e),ye=c):He(t,e),Ze(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!f&&e.mode&1)for($=e,f=e.child;f!==null;){for(p=$=f;$!==null;){switch(m=$,h=m.child,m.tag){case 0:case 11:case 14:case 15:rr(4,m,m.return);break;case 1:vn(m,m.return);var y=m.stateNode;if(typeof y.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(P){q(r,n,P)}}break;case 5:vn(m,m.return);break;case 22:if(m.memoizedState!==null){du(p);continue}}h!==null?(h.return=m,$=h):du(p)}f=f.sibling}e:for(f=null,p=e;;){if(p.tag===5){if(f===null){f=p;try{i=p.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=p.stateNode,a=p.memoizedProps.style,s=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=gc("display",s))}catch(P){q(e,e.return,P)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(P){q(e,e.return,P)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:He(t,e),Ze(e),r&4&&uu(e);break;case 21:break;default:He(t,e),Ze(e)}}function Ze(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Fd(n)){var r=n;break e}n=n.return}throw Error(R(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(lr(i,""),r.flags&=-33);var o=au(e);Ss(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,l=au(e);ws(e,l,s);break;default:throw Error(R(161))}}catch(a){q(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Og(e,t,n){$=e,Ud(e)}function Ud(e,t,n){for(var r=(e.mode&1)!==0;$!==null;){var i=$,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Hr;if(!s){var l=i.alternate,a=l!==null&&l.memoizedState!==null||ye;l=Hr;var c=ye;if(Hr=s,(ye=a)&&!c)for($=i;$!==null;)s=$,a=s.child,s.tag===22&&s.memoizedState!==null?fu(i):a!==null?(a.return=s,$=a):fu(i);for(;o!==null;)$=o,Ud(o),o=o.sibling;$=i,Hr=l,ye=c}cu(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,$=o):cu(e)}}function cu(e){for(;$!==null;){var t=$;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ye||Ui(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ye)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ve(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Ga(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ga(t,s,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&dr(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(R(163))}ye||t.flags&512&&ks(t)}catch(m){q(t,t.return,m)}}if(t===e){$=null;break}if(n=t.sibling,n!==null){n.return=t.return,$=n;break}$=t.return}}function du(e){for(;$!==null;){var t=$;if(t===e){$=null;break}var n=t.sibling;if(n!==null){n.return=t.return,$=n;break}$=t.return}}function fu(e){for(;$!==null;){var t=$;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ui(4,t)}catch(a){q(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(a){q(t,i,a)}}var o=t.return;try{ks(t)}catch(a){q(t,o,a)}break;case 5:var s=t.return;try{ks(t)}catch(a){q(t,s,a)}}}catch(a){q(t,t.return,a)}if(t===e){$=null;break}var l=t.sibling;if(l!==null){l.return=t.return,$=l;break}$=t.return}}var Dg=Math.ceil,bi=pt.ReactCurrentDispatcher,vl=pt.ReactCurrentOwner,Ie=pt.ReactCurrentBatchConfig,O=0,de=null,ie=null,pe=0,je=0,yn=zt(0),le=0,wr=null,Zt=0,Hi=0,yl=0,ir=null,Ce=null,xl=0,$n=1/0,it=null,Ri=!1,Cs=null,jt=null,Vr=!1,wt=null,Ti=0,or=0,_s=null,ii=-1,oi=0;function ke(){return O&6?te():ii!==-1?ii:ii=te()}function Et(e){return e.mode&1?O&2&&pe!==0?pe&-pe:kg.transition!==null?(oi===0&&(oi=Rc()),oi):(e=F,e!==0||(e=window.event,e=e===void 0?16:Nc(e.type)),e):1}function Ye(e,t,n,r){if(50<or)throw or=0,_s=null,Error(R(185));br(e,n,r),(!(O&2)||e!==de)&&(e===de&&(!(O&2)&&(Hi|=n),le===4&&Pt(e,pe)),Te(e,r),n===1&&O===0&&!(t.mode&1)&&($n=te()+500,Fi&&Ot()))}function Te(e,t){var n=e.callbackNode;kp(e,t);var r=di(e,e===de?pe:0);if(r===0)n!==null&&ka(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ka(n),t===1)e.tag===0?Pg(pu.bind(null,e)):qc(pu.bind(null,e)),hg(function(){!(O&6)&&Ot()}),n=null;else{switch(Tc(r)){case 1:n=Vs;break;case 4:n=_c;break;case 16:n=ci;break;case 536870912:n=bc;break;default:n=ci}n=Xd(n,Hd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Hd(e,t){if(ii=-1,oi=0,O&6)throw Error(R(327));var n=e.callbackNode;if(Cn()&&e.callbackNode!==n)return null;var r=di(e,e===de?pe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ji(e,r);else{t=r;var i=O;O|=2;var o=Qd();(de!==e||pe!==t)&&(it=null,$n=te()+500,Kt(e,t));do try{Bg();break}catch(l){Vd(e,l)}while(!0);il(),bi.current=o,O=i,ie!==null?t=0:(de=null,pe=0,t=le)}if(t!==0){if(t===2&&(i=Zo(e),i!==0&&(r=i,t=bs(e,i))),t===1)throw n=wr,Kt(e,0),Pt(e,r),Te(e,te()),n;if(t===6)Pt(e,r);else{if(i=e.current.alternate,!(r&30)&&!Ig(i)&&(t=ji(e,r),t===2&&(o=Zo(e),o!==0&&(r=o,t=bs(e,o))),t===1))throw n=wr,Kt(e,0),Pt(e,r),Te(e,te()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(R(345));case 2:Ut(e,Ce,it);break;case 3:if(Pt(e,r),(r&130023424)===r&&(t=xl+500-te(),10<t)){if(di(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ke(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ss(Ut.bind(null,e,Ce,it),t);break}Ut(e,Ce,it);break;case 4:if(Pt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-Ge(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=te()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Dg(r/1960))-r,10<r){e.timeoutHandle=ss(Ut.bind(null,e,Ce,it),r);break}Ut(e,Ce,it);break;case 5:Ut(e,Ce,it);break;default:throw Error(R(329))}}}return Te(e,te()),e.callbackNode===n?Hd.bind(null,e):null}function bs(e,t){var n=ir;return e.current.memoizedState.isDehydrated&&(Kt(e,t).flags|=256),e=ji(e,t),e!==2&&(t=Ce,Ce=n,t!==null&&Rs(t)),e}function Rs(e){Ce===null?Ce=e:Ce.push.apply(Ce,e)}function Ig(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Je(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Pt(e,t){for(t&=~yl,t&=~Hi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ge(t),r=1<<n;e[n]=-1,t&=~r}}function pu(e){if(O&6)throw Error(R(327));Cn();var t=di(e,0);if(!(t&1))return Te(e,te()),null;var n=ji(e,t);if(e.tag!==0&&n===2){var r=Zo(e);r!==0&&(t=r,n=bs(e,r))}if(n===1)throw n=wr,Kt(e,0),Pt(e,t),Te(e,te()),n;if(n===6)throw Error(R(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ut(e,Ce,it),Te(e,te()),null}function Pl(e,t){var n=O;O|=1;try{return e(t)}finally{O=n,O===0&&($n=te()+500,Fi&&Ot())}}function qt(e){wt!==null&&wt.tag===0&&!(O&6)&&Cn();var t=O;O|=1;var n=Ie.transition,r=F;try{if(Ie.transition=null,F=1,e)return e()}finally{F=r,Ie.transition=n,O=t,!(O&6)&&Ot()}}function kl(){je=yn.current,K(yn)}function Kt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,mg(n)),ie!==null)for(n=ie.return;n!==null;){var r=n;switch(tl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&hi();break;case 3:jn(),K(be),K(xe),cl();break;case 5:ul(r);break;case 4:jn();break;case 13:K(J);break;case 19:K(J);break;case 10:ol(r.type._context);break;case 22:case 23:kl()}n=n.return}if(de=e,ie=e=$t(e.current,null),pe=je=t,le=0,wr=null,yl=Hi=Zt=0,Ce=ir=null,Vt!==null){for(t=0;t<Vt.length;t++)if(n=Vt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}Vt=null}return e}function Vd(e,t){do{var n=ie;try{if(il(),ti.current=_i,Ci){for(var r=X.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ci=!1}if(Xt=0,ce=se=X=null,nr=!1,xr=0,vl.current=null,n===null||n.return===null){le=1,wr=t,ie=null;break}e:{var o=e,s=n.return,l=n,a=t;if(t=pe,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var c=a,f=l,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var m=f.alternate;m?(f.updateQueue=m.updateQueue,f.memoizedState=m.memoizedState,f.lanes=m.lanes):(f.updateQueue=null,f.memoizedState=null)}var h=eu(s);if(h!==null){h.flags&=-257,tu(h,s,l,o,t),h.mode&1&&qa(o,c,t),t=h,a=c;var y=t.updateQueue;if(y===null){var P=new Set;P.add(a),t.updateQueue=P}else y.add(a);break e}else{if(!(t&1)){qa(o,c,t),wl();break e}a=Error(R(426))}}else if(G&&l.mode&1){var w=eu(s);if(w!==null){!(w.flags&65536)&&(w.flags|=256),tu(w,s,l,o,t),nl(En(a,l));break e}}o=a=En(a,l),le!==4&&(le=2),ir===null?ir=[o]:ir.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var g=Td(o,a,t);Ka(o,g);break e;case 1:l=a;var d=o.type,v=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(jt===null||!jt.has(v)))){o.flags|=65536,t&=-t,o.lanes|=t;var k=jd(o,l,t);Ka(o,k);break e}}o=o.return}while(o!==null)}Gd(n)}catch(S){t=S,ie===n&&n!==null&&(ie=n=n.return);continue}break}while(!0)}function Qd(){var e=bi.current;return bi.current=_i,e===null?_i:e}function wl(){(le===0||le===3||le===2)&&(le=4),de===null||!(Zt&268435455)&&!(Hi&268435455)||Pt(de,pe)}function ji(e,t){var n=O;O|=2;var r=Qd();(de!==e||pe!==t)&&(it=null,Kt(e,t));do try{Fg();break}catch(i){Vd(e,i)}while(!0);if(il(),O=n,bi.current=r,ie!==null)throw Error(R(261));return de=null,pe=0,le}function Fg(){for(;ie!==null;)Kd(ie)}function Bg(){for(;ie!==null&&!fp();)Kd(ie)}function Kd(e){var t=Jd(e.alternate,e,je);e.memoizedProps=e.pendingProps,t===null?Gd(e):ie=t,vl.current=null}function Gd(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Ng(n,t),n!==null){n.flags&=32767,ie=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{le=6,ie=null;return}}else if(n=Lg(n,t,je),n!==null){ie=n;return}if(t=t.sibling,t!==null){ie=t;return}ie=t=e}while(t!==null);le===0&&(le=5)}function Ut(e,t,n){var r=F,i=Ie.transition;try{Ie.transition=null,F=1,Wg(e,t,n,r)}finally{Ie.transition=i,F=r}return null}function Wg(e,t,n,r){do Cn();while(wt!==null);if(O&6)throw Error(R(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(R(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(wp(e,o),e===de&&(ie=de=null,pe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Vr||(Vr=!0,Xd(ci,function(){return Cn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Ie.transition,Ie.transition=null;var s=F;F=1;var l=O;O|=4,vl.current=null,zg(e,n),Wd(n,e),ag(is),fi=!!rs,is=rs=null,e.current=n,Og(n),pp(),O=l,F=s,Ie.transition=o}else e.current=n;if(Vr&&(Vr=!1,wt=e,Ti=i),o=e.pendingLanes,o===0&&(jt=null),hp(n.stateNode),Te(e,te()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ri)throw Ri=!1,e=Cs,Cs=null,e;return Ti&1&&e.tag!==0&&Cn(),o=e.pendingLanes,o&1?e===_s?or++:(or=0,_s=e):or=0,Ot(),null}function Cn(){if(wt!==null){var e=Tc(Ti),t=Ie.transition,n=F;try{if(Ie.transition=null,F=16>e?16:e,wt===null)var r=!1;else{if(e=wt,wt=null,Ti=0,O&6)throw Error(R(331));var i=O;for(O|=4,$=e.current;$!==null;){var o=$,s=o.child;if($.flags&16){var l=o.deletions;if(l!==null){for(var a=0;a<l.length;a++){var c=l[a];for($=c;$!==null;){var f=$;switch(f.tag){case 0:case 11:case 15:rr(8,f,o)}var p=f.child;if(p!==null)p.return=f,$=p;else for(;$!==null;){f=$;var m=f.sibling,h=f.return;if(Id(f),f===c){$=null;break}if(m!==null){m.return=h,$=m;break}$=h}}}var y=o.alternate;if(y!==null){var P=y.child;if(P!==null){y.child=null;do{var w=P.sibling;P.sibling=null,P=w}while(P!==null)}}$=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,$=s;else e:for(;$!==null;){if(o=$,o.flags&2048)switch(o.tag){case 0:case 11:case 15:rr(9,o,o.return)}var g=o.sibling;if(g!==null){g.return=o.return,$=g;break e}$=o.return}}var d=e.current;for($=d;$!==null;){s=$;var v=s.child;if(s.subtreeFlags&2064&&v!==null)v.return=s,$=v;else e:for(s=d;$!==null;){if(l=$,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Ui(9,l)}}catch(S){q(l,l.return,S)}if(l===s){$=null;break e}var k=l.sibling;if(k!==null){k.return=l.return,$=k;break e}$=l.return}}if(O=i,Ot(),tt&&typeof tt.onPostCommitFiberRoot=="function")try{tt.onPostCommitFiberRoot(Mi,e)}catch{}r=!0}return r}finally{F=n,Ie.transition=t}}return!1}function gu(e,t,n){t=En(n,t),t=Td(e,t,1),e=Tt(e,t,1),t=ke(),e!==null&&(br(e,1,t),Te(e,t))}function q(e,t,n){if(e.tag===3)gu(e,e,n);else for(;t!==null;){if(t.tag===3){gu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(jt===null||!jt.has(r))){e=En(n,e),e=jd(t,e,1),t=Tt(t,e,1),e=ke(),t!==null&&(br(t,1,e),Te(t,e));break}}t=t.return}}function Ug(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ke(),e.pingedLanes|=e.suspendedLanes&n,de===e&&(pe&n)===n&&(le===4||le===3&&(pe&130023424)===pe&&500>te()-xl?Kt(e,0):yl|=n),Te(e,t)}function Yd(e,t){t===0&&(e.mode&1?(t=Mr,Mr<<=1,!(Mr&130023424)&&(Mr=4194304)):t=1);var n=ke();e=dt(e,t),e!==null&&(br(e,t,n),Te(e,n))}function Hg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Yd(e,n)}function Vg(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(R(314))}r!==null&&r.delete(t),Yd(e,n)}var Jd;Jd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||be.current)_e=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return _e=!1,Ag(e,t,n);_e=!!(e.flags&131072)}else _e=!1,G&&t.flags&1048576&&ed(t,xi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ri(e,t),e=t.pendingProps;var i=bn(t,xe.current);Sn(t,n),i=fl(null,t,r,e,i,n);var o=pl();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Re(r)?(o=!0,vi(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ll(t),i.updater=Wi,t.stateNode=i,i._reactInternals=t,ps(t,r,e,n),t=hs(null,t,r,!0,o,n)):(t.tag=0,G&&o&&el(t),Pe(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ri(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Kg(r),e=Ve(r,e),i){case 0:t=ms(null,t,r,e,n);break e;case 1:t=iu(null,t,r,e,n);break e;case 11:t=nu(null,t,r,e,n);break e;case 14:t=ru(null,t,r,Ve(r.type,e),n);break e}throw Error(R(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ve(r,i),ms(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ve(r,i),iu(e,t,r,i,n);case 3:e:{if(Ld(t),e===null)throw Error(R(387));r=t.pendingProps,o=t.memoizedState,i=o.element,sd(e,t),wi(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=En(Error(R(423)),t),t=ou(e,t,r,n,i);break e}else if(r!==i){i=En(Error(R(424)),t),t=ou(e,t,r,n,i);break e}else for(Ee=Rt(t.stateNode.containerInfo.firstChild),$e=t,G=!0,Ke=null,n=id(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Rn(),r===i){t=ft(e,t,n);break e}Pe(e,t,r,n)}t=t.child}return t;case 5:return ld(t),e===null&&cs(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,os(r,i)?s=null:o!==null&&os(r,o)&&(t.flags|=32),Ad(e,t),Pe(e,t,s,n),t.child;case 6:return e===null&&cs(t),null;case 13:return Nd(e,t,n);case 4:return al(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Tn(t,null,r,n):Pe(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ve(r,i),nu(e,t,r,i,n);case 7:return Pe(e,t,t.pendingProps,n),t.child;case 8:return Pe(e,t,t.pendingProps.children,n),t.child;case 12:return Pe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,H(Pi,r._currentValue),r._currentValue=s,o!==null)if(Je(o.value,s)){if(o.children===i.children&&!be.current){t=ft(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){s=o.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(o.tag===1){a=at(-1,n&-n),a.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?a.next=a:(a.next=f.next,f.next=a),c.pending=a}}o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),ds(o.return,n,t),l.lanes|=n;break}a=a.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(R(341));s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),ds(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Pe(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Sn(t,n),i=Fe(i),r=r(i),t.flags|=1,Pe(e,t,r,n),t.child;case 14:return r=t.type,i=Ve(r,t.pendingProps),i=Ve(r.type,i),ru(e,t,r,i,n);case 15:return Ed(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ve(r,i),ri(e,t),t.tag=1,Re(r)?(e=!0,vi(t)):e=!1,Sn(t,n),Rd(t,r,i),ps(t,r,i,n),hs(null,t,r,!0,e,n);case 19:return Md(e,t,n);case 22:return $d(e,t,n)}throw Error(R(156,t.tag))};function Xd(e,t){return Cc(e,t)}function Qg(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function De(e,t,n,r){return new Qg(e,t,n,r)}function Sl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Kg(e){if(typeof e=="function")return Sl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ws)return 11;if(e===Us)return 14}return 2}function $t(e,t){var n=e.alternate;return n===null?(n=De(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function si(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")Sl(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case an:return Gt(n.children,i,o,t);case Bs:s=8,i|=8;break;case Oo:return e=De(12,n,t,i|2),e.elementType=Oo,e.lanes=o,e;case Do:return e=De(13,n,t,i),e.elementType=Do,e.lanes=o,e;case Io:return e=De(19,n,t,i),e.elementType=Io,e.lanes=o,e;case lc:return Vi(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case oc:s=10;break e;case sc:s=9;break e;case Ws:s=11;break e;case Us:s=14;break e;case ht:s=16,r=null;break e}throw Error(R(130,e==null?e:typeof e,""))}return t=De(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Gt(e,t,n,r){return e=De(7,e,r,t),e.lanes=n,e}function Vi(e,t,n,r){return e=De(22,e,r,t),e.elementType=lc,e.lanes=n,e.stateNode={isHidden:!1},e}function Eo(e,t,n){return e=De(6,e,null,t),e.lanes=n,e}function $o(e,t,n){return t=De(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Gg(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=co(0),this.expirationTimes=co(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=co(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Cl(e,t,n,r,i,o,s,l,a){return e=new Gg(e,t,n,l,a),t===1?(t=1,o===!0&&(t|=8)):t=0,o=De(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ll(o),e}function Yg(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ln,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Zd(e){if(!e)return Nt;e=e._reactInternals;e:{if(nn(e)!==e||e.tag!==1)throw Error(R(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Re(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(R(171))}if(e.tag===1){var n=e.type;if(Re(n))return Zc(e,n,t)}return t}function qd(e,t,n,r,i,o,s,l,a){return e=Cl(n,r,!0,e,i,o,s,l,a),e.context=Zd(null),n=e.current,r=ke(),i=Et(n),o=at(r,i),o.callback=t??null,Tt(n,o,i),e.current.lanes=i,br(e,i,r),Te(e,r),e}function Qi(e,t,n,r){var i=t.current,o=ke(),s=Et(i);return n=Zd(n),t.context===null?t.context=n:t.pendingContext=n,t=at(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Tt(i,t,s),e!==null&&(Ye(e,i,s,o),ei(e,i,s)),s}function Ei(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function mu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function _l(e,t){mu(e,t),(e=e.alternate)&&mu(e,t)}function Jg(){return null}var ef=typeof reportError=="function"?reportError:function(e){console.error(e)};function bl(e){this._internalRoot=e}Ki.prototype.render=bl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(R(409));Qi(e,t,null,null)};Ki.prototype.unmount=bl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;qt(function(){Qi(null,e,null,null)}),t[ct]=null}};function Ki(e){this._internalRoot=e}Ki.prototype.unstable_scheduleHydration=function(e){if(e){var t=$c();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xt.length&&t!==0&&t<xt[n].priority;n++);xt.splice(n,0,e),n===0&&Lc(e)}};function Rl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Gi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function hu(){}function Xg(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=Ei(s);o.call(c)}}var s=qd(t,r,e,0,null,!1,!1,"",hu);return e._reactRootContainer=s,e[ct]=s.current,gr(e.nodeType===8?e.parentNode:e),qt(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=Ei(a);l.call(c)}}var a=Cl(e,0,!1,null,null,!1,!1,"",hu);return e._reactRootContainer=a,e[ct]=a.current,gr(e.nodeType===8?e.parentNode:e),qt(function(){Qi(t,a,n,r)}),a}function Yi(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var l=i;i=function(){var a=Ei(s);l.call(a)}}Qi(t,s,e,i)}else s=Xg(n,t,e,i,r);return Ei(s)}jc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Gn(t.pendingLanes);n!==0&&(Qs(t,n|1),Te(t,te()),!(O&6)&&($n=te()+500,Ot()))}break;case 13:qt(function(){var r=dt(e,1);if(r!==null){var i=ke();Ye(r,e,1,i)}}),_l(e,1)}};Ks=function(e){if(e.tag===13){var t=dt(e,134217728);if(t!==null){var n=ke();Ye(t,e,134217728,n)}_l(e,134217728)}};Ec=function(e){if(e.tag===13){var t=Et(e),n=dt(e,t);if(n!==null){var r=ke();Ye(n,e,t,r)}_l(e,t)}};$c=function(){return F};Ac=function(e,t){var n=F;try{return F=e,t()}finally{F=n}};Yo=function(e,t,n){switch(t){case"input":if(Wo(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Ii(r);if(!i)throw Error(R(90));uc(r),Wo(r,i)}}}break;case"textarea":dc(e,n);break;case"select":t=n.value,t!=null&&xn(e,!!n.multiple,t,!1)}};yc=Pl;xc=qt;var Zg={usingClientEntryPoint:!1,Events:[Tr,fn,Ii,hc,vc,Pl]},Hn={findFiberByHostInstance:Ht,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},qg={bundleType:Hn.bundleType,version:Hn.version,rendererPackageName:Hn.rendererPackageName,rendererConfig:Hn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:pt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=wc(e),e===null?null:e.stateNode},findFiberByHostInstance:Hn.findFiberByHostInstance||Jg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qr.isDisabled&&Qr.supportsFiber)try{Mi=Qr.inject(qg),tt=Qr}catch{}}Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Zg;Le.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Rl(t))throw Error(R(200));return Yg(e,t,null,n)};Le.createRoot=function(e,t){if(!Rl(e))throw Error(R(299));var n=!1,r="",i=ef;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Cl(e,1,!1,null,null,n,!1,r,i),e[ct]=t.current,gr(e.nodeType===8?e.parentNode:e),new bl(t)};Le.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(R(188)):(e=Object.keys(e).join(","),Error(R(268,e)));return e=wc(t),e=e===null?null:e.stateNode,e};Le.flushSync=function(e){return qt(e)};Le.hydrate=function(e,t,n){if(!Gi(t))throw Error(R(200));return Yi(null,e,t,!0,n)};Le.hydrateRoot=function(e,t,n){if(!Rl(e))throw Error(R(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=ef;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=qd(t,null,e,1,n??null,i,!1,o,s),e[ct]=t.current,gr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ki(t)};Le.render=function(e,t,n){if(!Gi(t))throw Error(R(200));return Yi(null,e,t,!1,n)};Le.unmountComponentAtNode=function(e){if(!Gi(e))throw Error(R(40));return e._reactRootContainer?(qt(function(){Yi(null,null,e,!1,function(){e._reactRootContainer=null,e[ct]=null})}),!0):!1};Le.unstable_batchedUpdates=Pl;Le.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Gi(n))throw Error(R(200));if(e==null||e._reactInternals===void 0)throw Error(R(38));return Yi(e,t,n,!1,r)};Le.version="18.3.1-next-f1338f8080-20240426";function tf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(tf)}catch(e){console.error(e)}}tf(),tc.exports=Le;var Tl=tc.exports,nf,vu=Tl;nf=Mo.createRoot=vu.createRoot,Mo.hydrateRoot=vu.hydrateRoot;/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Sr(){return Sr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Sr.apply(null,arguments)}var St;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(St||(St={}));const yu="popstate";function em(e){e===void 0&&(e={});function t(i,o){let{pathname:s="/",search:l="",hash:a=""}=rn(i.location.hash.substr(1));return!s.startsWith("/")&&!s.startsWith(".")&&(s="/"+s),Ts("",{pathname:s,search:l,hash:a},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(i,o){let s=i.document.querySelector("base"),l="";if(s&&s.getAttribute("href")){let a=i.location.href,c=a.indexOf("#");l=c===-1?a:a.slice(0,c)}return l+"#"+(typeof o=="string"?o:$i(o))}function r(i,o){jl(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(o)+")")}return nm(t,n,r,e)}function ne(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function jl(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function tm(){return Math.random().toString(36).substr(2,8)}function xu(e,t){return{usr:e.state,key:e.key,idx:t}}function Ts(e,t,n,r){return n===void 0&&(n=null),Sr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?rn(t):t,{state:n,key:t&&t.key||r||tm()})}function $i(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function rn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function nm(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,l=St.Pop,a=null,c=f();c==null&&(c=0,s.replaceState(Sr({},s.state,{idx:c}),""));function f(){return(s.state||{idx:null}).idx}function p(){l=St.Pop;let w=f(),g=w==null?null:w-c;c=w,a&&a({action:l,location:P.location,delta:g})}function m(w,g){l=St.Push;let d=Ts(P.location,w,g);n&&n(d,w),c=f()+1;let v=xu(d,c),k=P.createHref(d);try{s.pushState(v,"",k)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;i.location.assign(k)}o&&a&&a({action:l,location:P.location,delta:1})}function h(w,g){l=St.Replace;let d=Ts(P.location,w,g);n&&n(d,w),c=f();let v=xu(d,c),k=P.createHref(d);s.replaceState(v,"",k),o&&a&&a({action:l,location:P.location,delta:0})}function y(w){let g=i.location.origin!=="null"?i.location.origin:i.location.href,d=typeof w=="string"?w:$i(w);return d=d.replace(/ $/,"%20"),ne(g,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,g)}let P={get action(){return l},get location(){return e(i,s)},listen(w){if(a)throw new Error("A history only accepts one active listener");return i.addEventListener(yu,p),a=w,()=>{i.removeEventListener(yu,p),a=null}},createHref(w){return t(i,w)},createURL:y,encodeLocation(w){let g=y(w);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:m,replace:h,go(w){return s.go(w)}};return P}var Pu;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Pu||(Pu={}));function rm(e,t,n){return n===void 0&&(n="/"),im(e,t,n)}function im(e,t,n,r){let i=typeof t=="string"?rn(t):t,o=El(i.pathname||"/",n);if(o==null)return null;let s=rf(e);om(s);let l=null,a=vm(o);for(let c=0;l==null&&c<s.length;++c)l=gm(s[c],a);return l}function rf(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,l)=>{let a={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};a.relativePath.startsWith("/")&&(ne(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let c=At([r,a.relativePath]),f=n.concat(a);o.children&&o.children.length>0&&(ne(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),rf(o.children,t,f,c)),!(o.path==null&&!o.index)&&t.push({path:c,score:fm(c,o.index),routesMeta:f})};return e.forEach((o,s)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,s);else for(let a of of(o.path))i(o,s,a)}),t}function of(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=of(r.join("/")),l=[];return l.push(...s.map(a=>a===""?o:[o,a].join("/"))),i&&l.push(...s),l.map(a=>e.startsWith("/")&&a===""?"/":a)}function om(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:pm(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const sm=/^:[\w-]+$/,lm=3,am=2,um=1,cm=10,dm=-2,ku=e=>e==="*";function fm(e,t){let n=e.split("/"),r=n.length;return n.some(ku)&&(r+=dm),t&&(r+=am),n.filter(i=>!ku(i)).reduce((i,o)=>i+(sm.test(o)?lm:o===""?um:cm),r)}function pm(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function gm(e,t,n){let{routesMeta:r}=e,i={},o="/",s=[];for(let l=0;l<r.length;++l){let a=r[l],c=l===r.length-1,f=o==="/"?t:t.slice(o.length)||"/",p=mm({path:a.relativePath,caseSensitive:a.caseSensitive,end:c},f),m=a.route;if(!p)return null;Object.assign(i,p.params),s.push({params:i,pathname:At([o,p.pathname]),pathnameBase:Pm(At([o,p.pathnameBase])),route:m}),p.pathnameBase!=="/"&&(o=At([o,p.pathnameBase]))}return s}function mm(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=hm(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,f,p)=>{let{paramName:m,isOptional:h}=f;if(m==="*"){let P=l[p]||"";s=o.slice(0,o.length-P.length).replace(/(.)\/+$/,"$1")}const y=l[p];return h&&!y?c[m]=void 0:c[m]=(y||"").replace(/%2F/g,"/"),c},{}),pathname:o,pathnameBase:s,pattern:e}}function hm(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),jl(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,l,a)=>(r.push({paramName:l,isOptional:a!=null}),a?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function vm(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return jl(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function El(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function ym(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?rn(e):e,o;return n?(n=sf(n),n.startsWith("/")?o=wu(n.substring(1),"/"):o=wu(n,t)):o=t,{pathname:o,search:km(r),hash:wm(i)}}function wu(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Ao(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function xm(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function $l(e,t){let n=xm(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Al(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=rn(e):(i=Sr({},e),ne(!i.pathname||!i.pathname.includes("?"),Ao("?","pathname","search",i)),ne(!i.pathname||!i.pathname.includes("#"),Ao("#","pathname","hash",i)),ne(!i.search||!i.search.includes("#"),Ao("#","search","hash",i)));let o=e===""||i.pathname==="",s=o?"/":i.pathname,l;if(s==null)l=n;else{let p=t.length-1;if(!r&&s.startsWith("..")){let m=s.split("/");for(;m[0]==="..";)m.shift(),p-=1;i.pathname=m.join("/")}l=p>=0?t[p]:"/"}let a=ym(i,l),c=s&&s!=="/"&&s.endsWith("/"),f=(o||s===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(c||f)&&(a.pathname+="/"),a}const sf=e=>e.replace(/\/\/+/g,"/"),At=e=>sf(e.join("/")),Pm=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),km=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,wm=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Sm(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const lf=["post","put","patch","delete"];new Set(lf);const Cm=["get",...lf];new Set(Cm);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Cr(){return Cr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Cr.apply(null,arguments)}const Ll=x.createContext(null),_m=x.createContext(null),Dt=x.createContext(null),Ji=x.createContext(null),gt=x.createContext({outlet:null,matches:[],isDataRoute:!1}),af=x.createContext(null);function bm(e,t){let{relative:n}=t===void 0?{}:t;Mn()||ne(!1);let{basename:r,navigator:i}=x.useContext(Dt),{hash:o,pathname:s,search:l}=df(e,{relative:n}),a=s;return r!=="/"&&(a=s==="/"?r:At([r,s])),i.createHref({pathname:a,search:l,hash:o})}function Mn(){return x.useContext(Ji)!=null}function zn(){return Mn()||ne(!1),x.useContext(Ji).location}function uf(e){x.useContext(Dt).static||x.useLayoutEffect(e)}function cf(){let{isDataRoute:e}=x.useContext(gt);return e?Fm():Rm()}function Rm(){Mn()||ne(!1);let e=x.useContext(Ll),{basename:t,future:n,navigator:r}=x.useContext(Dt),{matches:i}=x.useContext(gt),{pathname:o}=zn(),s=JSON.stringify($l(i,n.v7_relativeSplatPath)),l=x.useRef(!1);return uf(()=>{l.current=!0}),x.useCallback(function(c,f){if(f===void 0&&(f={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let p=Al(c,JSON.parse(s),o,f.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:At([t,p.pathname])),(f.replace?r.replace:r.push)(p,f.state,f)},[t,r,s,o,e])}function Tm(){let{matches:e}=x.useContext(gt),t=e[e.length-1];return t?t.params:{}}function df(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=x.useContext(Dt),{matches:i}=x.useContext(gt),{pathname:o}=zn(),s=JSON.stringify($l(i,r.v7_relativeSplatPath));return x.useMemo(()=>Al(e,JSON.parse(s),o,n==="path"),[e,s,o,n])}function jm(e,t){return Em(e,t)}function Em(e,t,n,r){Mn()||ne(!1);let{navigator:i}=x.useContext(Dt),{matches:o}=x.useContext(gt),s=o[o.length-1],l=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let c=zn(),f;if(t){var p;let w=typeof t=="string"?rn(t):t;a==="/"||(p=w.pathname)!=null&&p.startsWith(a)||ne(!1),f=w}else f=c;let m=f.pathname||"/",h=m;if(a!=="/"){let w=a.replace(/^\//,"").split("/");h="/"+m.replace(/^\//,"").split("/").slice(w.length).join("/")}let y=rm(e,{pathname:h}),P=Mm(y&&y.map(w=>Object.assign({},w,{params:Object.assign({},l,w.params),pathname:At([a,i.encodeLocation?i.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?a:At([a,i.encodeLocation?i.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),o,n,r);return t&&P?x.createElement(Ji.Provider,{value:{location:Cr({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:St.Pop}},P):P}function $m(){let e=Im(),t=Sm(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return x.createElement(x.Fragment,null,x.createElement("h2",null,"Unexpected Application Error!"),x.createElement("h3",{style:{fontStyle:"italic"}},t),n?x.createElement("pre",{style:i},n):null,null)}const Am=x.createElement($m,null);class Lm extends x.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?x.createElement(gt.Provider,{value:this.props.routeContext},x.createElement(af.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Nm(e){let{routeContext:t,match:n,children:r}=e,i=x.useContext(Ll);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),x.createElement(gt.Provider,{value:t},r)}function Mm(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,l=(i=n)==null?void 0:i.errors;if(l!=null){let f=s.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);f>=0||ne(!1),s=s.slice(0,Math.min(s.length,f+1))}let a=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<s.length;f++){let p=s[f];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(c=f),p.route.id){let{loaderData:m,errors:h}=n,y=p.route.loader&&m[p.route.id]===void 0&&(!h||h[p.route.id]===void 0);if(p.route.lazy||y){a=!0,c>=0?s=s.slice(0,c+1):s=[s[0]];break}}}return s.reduceRight((f,p,m)=>{let h,y=!1,P=null,w=null;n&&(h=l&&p.route.id?l[p.route.id]:void 0,P=p.route.errorElement||Am,a&&(c<0&&m===0?(Bm("route-fallback"),y=!0,w=null):c===m&&(y=!0,w=p.route.hydrateFallbackElement||null)));let g=t.concat(s.slice(0,m+1)),d=()=>{let v;return h?v=P:y?v=w:p.route.Component?v=x.createElement(p.route.Component,null):p.route.element?v=p.route.element:v=f,x.createElement(Nm,{match:p,routeContext:{outlet:f,matches:g,isDataRoute:n!=null},children:v})};return n&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?x.createElement(Lm,{location:n.location,revalidation:n.revalidation,component:P,error:h,children:d(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):d()},null)}var ff=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(ff||{}),pf=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(pf||{});function zm(e){let t=x.useContext(Ll);return t||ne(!1),t}function Om(e){let t=x.useContext(_m);return t||ne(!1),t}function Dm(e){let t=x.useContext(gt);return t||ne(!1),t}function gf(e){let t=Dm(),n=t.matches[t.matches.length-1];return n.route.id||ne(!1),n.route.id}function Im(){var e;let t=x.useContext(af),n=Om(),r=gf();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Fm(){let{router:e}=zm(ff.UseNavigateStable),t=gf(pf.UseNavigateStable),n=x.useRef(!1);return uf(()=>{n.current=!0}),x.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Cr({fromRouteId:t},o)))},[e,t])}const Su={};function Bm(e,t,n){Su[e]||(Su[e]=!0)}function Wm(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function js(e){let{to:t,replace:n,state:r,relative:i}=e;Mn()||ne(!1);let{future:o,static:s}=x.useContext(Dt),{matches:l}=x.useContext(gt),{pathname:a}=zn(),c=cf(),f=Al(t,$l(l,o.v7_relativeSplatPath),a,i==="path"),p=JSON.stringify(f);return x.useEffect(()=>c(JSON.parse(p),{replace:n,state:r,relative:i}),[c,p,i,n,r]),null}function Jn(e){ne(!1)}function Um(e){let{basename:t="/",children:n=null,location:r,navigationType:i=St.Pop,navigator:o,static:s=!1,future:l}=e;Mn()&&ne(!1);let a=t.replace(/^\/*/,"/"),c=x.useMemo(()=>({basename:a,navigator:o,static:s,future:Cr({v7_relativeSplatPath:!1},l)}),[a,l,o,s]);typeof r=="string"&&(r=rn(r));let{pathname:f="/",search:p="",hash:m="",state:h=null,key:y="default"}=r,P=x.useMemo(()=>{let w=El(f,a);return w==null?null:{location:{pathname:w,search:p,hash:m,state:h,key:y},navigationType:i}},[a,f,p,m,h,y,i]);return P==null?null:x.createElement(Dt.Provider,{value:c},x.createElement(Ji.Provider,{children:n,value:P}))}function Hm(e){let{children:t,location:n}=e;return jm(Es(t),n)}new Promise(()=>{});function Es(e,t){t===void 0&&(t=[]);let n=[];return x.Children.forEach(e,(r,i)=>{if(!x.isValidElement(r))return;let o=[...t,i];if(r.type===x.Fragment){n.push.apply(n,Es(r.props.children,o));return}r.type!==Jn&&ne(!1),!r.props.index||!r.props.children||ne(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=Es(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function $s(){return $s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},$s.apply(null,arguments)}function Vm(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function Qm(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Km(e,t){return e.button===0&&(!t||t==="_self")&&!Qm(e)}const Gm=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Ym="6";try{window.__reactRouterVersion=Ym}catch{}const Jm="startTransition",Cu=Uf[Jm];function Xm(e){let{basename:t,children:n,future:r,window:i}=e,o=x.useRef();o.current==null&&(o.current=em({window:i,v5Compat:!0}));let s=o.current,[l,a]=x.useState({action:s.action,location:s.location}),{v7_startTransition:c}=r||{},f=x.useCallback(p=>{c&&Cu?Cu(()=>a(p)):a(p)},[a,c]);return x.useLayoutEffect(()=>s.listen(f),[s,f]),x.useEffect(()=>Wm(r),[r]),x.createElement(Um,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:s,future:r})}const Zm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",qm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,As=x.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:l,target:a,to:c,preventScrollReset:f,viewTransition:p}=t,m=Vm(t,Gm),{basename:h}=x.useContext(Dt),y,P=!1;if(typeof c=="string"&&qm.test(c)&&(y=c,Zm))try{let v=new URL(window.location.href),k=c.startsWith("//")?new URL(v.protocol+c):new URL(c),S=El(k.pathname,h);k.origin===v.origin&&S!=null?c=S+k.search+k.hash:P=!0}catch{}let w=bm(c,{relative:i}),g=eh(c,{replace:s,state:l,target:a,preventScrollReset:f,relative:i,viewTransition:p});function d(v){r&&r(v),v.defaultPrevented||g(v)}return x.createElement("a",$s({},m,{href:y||w,onClick:P||o?r:d,ref:n,target:a}))});var _u;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(_u||(_u={}));var bu;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(bu||(bu={}));function eh(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s,viewTransition:l}=t===void 0?{}:t,a=cf(),c=zn(),f=df(e,{relative:s});return x.useCallback(p=>{if(Km(p,n)){p.preventDefault();let m=r!==void 0?r:$i(c)===$i(f);a(e,{replace:m,state:i,preventScrollReset:o,relative:s,viewTransition:l})}},[c,a,f,r,i,n,e,o,s,l])}const th="https://github.com/frankvane/vane-components";class nh extends en.Component{constructor(){super(...arguments);aa(this,"state",{error:null})}static getDerivedStateFromError(n){return{error:n}}render(){var n;return this.state.error?u.jsxs("div",{className:"crash",role:"alert",children:[u.jsx("h3",{children:"这个页面炸了"}),u.jsx("pre",{children:String(((n=this.state.error)==null?void 0:n.stack)||this.state.error)}),u.jsx("button",{type:"button",onClick:()=>this.setState({error:null}),children:"重试"})]}):this.props.children}}function mf(e,t){return String(e.entries.indexOf(t)+1).padStart(2,"0")}function rh({demos:e,pathname:t}){var a;const{groups:n,entries:r,label:i}=e,o=(a=r.find(c=>t===`/demo/${c.meta.slug}`))==null?void 0:a.meta.group,[s,l]=x.useState(()=>{var f;const c=(f=n[0])==null?void 0:f.key;return Object.fromEntries(n.map(p=>[p.key,p.key===(o??c)]))});return x.useEffect(()=>{o&&l(c=>c[o]?c:{...c,[o]:!0})},[o]),u.jsxs("div",{className:"nav-section",children:[u.jsxs("div",{className:"nav-section-head",children:[u.jsx("span",{children:i}),u.jsxs("code",{children:[r.length," demos"]})]}),n.map(c=>{const f=r.filter(m=>m.meta.group===c.key);if(f.length===0)return null;const p=s[c.key]??!1;return u.jsxs("div",{className:"nav-group",children:[u.jsxs("button",{type:"button",className:`nav-group-head${o===c.key?" is-current":""}`,onClick:()=>l(m=>({...m,[c.key]:!p})),"aria-expanded":p,children:[u.jsx("span",{className:`nav-caret${p?" is-open":""}`,"aria-hidden":!0,children:"▸"}),c.label,u.jsx("code",{children:f.length})]}),p?u.jsx("div",{className:"nav-list",children:f.map(m=>u.jsxs(As,{to:`/demo/${m.meta.slug}`,className:`nav-sub${t===`/demo/${m.meta.slug}`?" is-active":""}`,children:[u.jsx("em",{"aria-hidden":!0,children:mf(e,m)}),m.meta.title]},m.meta.slug))}):null]},c.key)})]})}function ih({demos:e}){var l;const{slug:t}=Tm(),{entries:n,detail:r}=e,i=t?n.find(a=>a.meta.slug===t):void 0,o=(l=n[0])==null?void 0:l.meta.slug;if(!i)return u.jsx(js,{to:o?`/demo/${o}`:"/",replace:!0});const s=n.indexOf(i)+1;return u.jsx(en.Fragment,{children:r(i,s)},i.meta.slug)}function oh({config:e}){var p,m;const{pathname:t}=zn(),[n,r]=x.useState(!1),[i,o]=x.useState(!1);x.useEffect(()=>r(!1),[t]);const s=x.useCallback(()=>o(h=>!h),[]);x.useEffect(()=>{const h=y=>{const P=y.target,w=P&&(P.tagName==="INPUT"||P.tagName==="TEXTAREA"||P.isContentEditable);y.key==="Escape"&&r(!1),!w&&(y.key==="g"||y.key==="G")&&!y.metaKey&&!y.ctrlKey&&o(g=>!g)};return window.addEventListener("keydown",h),()=>window.removeEventListener("keydown",h)},[]);const l=e.demos,a=(p=l.entries[0])==null?void 0:p.meta.slug,c=x.useMemo(()=>{if(!t.startsWith("/demo"))return e.crumb(t);const h=t.replace(/^\/demo\/?/,""),y=l.entries.find(P=>P.meta.slug===h);return y?`demo ${mf(l,y)} · ${y.meta.title}`:"demo · 逐项示例"},[t,e,l]),f=x.useMemo(()=>e.nav.map((h,y)=>({...h,no:String(y+1).padStart(2,"0")})),[e.nav]);return u.jsxs("div",{className:`shell${n?" is-nav-open":""}${i?" is-guides":""}`,children:[u.jsx("a",{className:"skip-link",href:"#main",onClick:h=>{h.preventDefault();const y=document.getElementById("main");y==null||y.setAttribute("tabindex","-1"),y==null||y.focus(),y==null||y.scrollIntoView({block:"start"})},children:"跳到内容"}),u.jsxs("aside",{className:"side","aria-label":"站点导航",children:[u.jsxs(As,{to:"/",className:"brand",children:[u.jsx("span",{className:"brand-mark","aria-hidden":!0,children:e.brand}),u.jsxs("span",{children:[u.jsx("strong",{children:e.pkg}),u.jsx("em",{children:e.subtitle})]})]}),u.jsxs("nav",{children:[f.map(h=>u.jsxs(As,{to:h.to,className:`nav-item${t===h.to?" is-active":""}`,"aria-current":t===h.to?"page":void 0,children:[u.jsx("em",{"aria-hidden":!0,children:h.no}),u.jsx("span",{children:h.label}),h.hint?u.jsx("code",{children:h.hint}):null]},h.to)),u.jsx(rh,{demos:e.demos,pathname:t})]}),u.jsxs("div",{className:"side-foot",children:[u.jsx("p",{children:e.footer[0]}),u.jsx("p",{className:"muted",children:e.footer[1]})]})]}),u.jsx("button",{type:"button",className:"scrim","aria-label":"关闭导航",tabIndex:n?0:-1,onClick:()=>r(!1)}),u.jsxs("div",{className:"main",id:"main",children:[u.jsxs("header",{className:"topbar",children:[u.jsx("button",{type:"button",className:"nav-toggle","aria-label":n?"关闭导航":"打开导航","aria-expanded":n,onClick:()=>r(h=>!h),children:u.jsx("span",{"aria-hidden":!0})}),u.jsx("span",{className:"crumb",children:c}),u.jsxs("div",{className:"topbar-right",children:[(m=e.stats)==null?void 0:m.map(h=>u.jsxs("span",{className:"topbar-stat",title:h.title,children:[u.jsx("b",{children:h.value})," ",h.label]},h.label)),u.jsxs("button",{type:"button",className:"topbar-btn","aria-pressed":i,onClick:s,title:"显示栏位参考线（快捷键 G）",children:[u.jsx("i",{"aria-hidden":!0}),"guides"]}),u.jsx("a",{className:"topbar-link",href:e.sourceUrl??th,target:"_blank",rel:"noreferrer",children:"source ↗"})]})]}),u.jsx("div",{className:"guides","aria-hidden":!0}),u.jsx(x.Suspense,{fallback:u.jsx("div",{className:"loading",children:"loading modules…"}),children:u.jsx(nh,{children:u.jsxs(Hm,{children:[e.routes.map(h=>u.jsx(Jn,{path:h.path,element:h.element},h.path)),u.jsx(Jn,{path:"/demo",element:u.jsx(js,{to:a?`/demo/${a}`:"/",replace:!0})}),u.jsx(Jn,{path:"/demo/:slug",element:u.jsx(ih,{demos:e.demos})}),u.jsx(Jn,{path:"*",element:u.jsx(js,{to:"/",replace:!0})})]})})})]})]})}function sh({config:e}){return u.jsx(Xm,{children:u.jsx(oh,{config:e})})}const lh="modulepreload",ah=function(e,t){return new URL(e,t).href},Ru={},Nl=function(t,n,r){let i=Promise.resolve();if(n&&n.length>0){const s=document.getElementsByTagName("link"),l=document.querySelector("meta[property=csp-nonce]"),a=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));i=Promise.allSettled(n.map(c=>{if(c=ah(c,r),c in Ru)return;Ru[c]=!0;const f=c.endsWith(".css"),p=f?'[rel="stylesheet"]':"";if(!!r)for(let y=s.length-1;y>=0;y--){const P=s[y];if(P.href===c&&(!f||P.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${p}`))return;const h=document.createElement("link");if(h.rel=f?"stylesheet":lh,f||(h.as="script"),h.crossOrigin="",h.href=c,a&&h.setAttribute("nonce",a),document.head.appendChild(h),f)return new Promise((y,P)=>{h.addEventListener("load",y),h.addEventListener("error",()=>P(new Error(`Unable to preload CSS for ${c}`)))})}))}function o(s){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=s,window.dispatchEvent(l),!l.defaultPrevented)throw s}return i.then(s=>{for(const l of s||[])l.status==="rejected"&&o(l.reason);return t().catch(o)})};function uh(){const e=new Map,t=new Map;let n=0;const r=(l,a)=>{const c=e.get(l);if(c){if(n>=50){console.warn(`[PluginBus] emit depth exceeded: "${l}"`);return}n+=1;for(const f of[...c])try{f(a)}catch(p){console.warn(`[PluginBus] handler error for event "${l}"`,p)}n-=1}},i=(l,a)=>{let c=e.get(l);c||(c=new Set,e.set(l,c));const f=a;return c.add(f),()=>{c==null||c.delete(f)}},o=(l,a)=>{const c=f=>{try{a(f)}finally{s(l,c)}};return i(l,c)},s=(l,a)=>{var c;if(!a){e.delete(l);return}(c=e.get(l))==null||c.delete(a)};return{emit:r,on:i,once:o,off:s,getData:l=>t.get(l),setData:(l,a)=>{const c=t.get(l);t.set(l,a),c!==a&&r(l,a)},deleteData:l=>{const a=t.has(l);t.delete(l),a&&r(l,void 0)},hasData:l=>t.has(l),getAll:()=>{const l=Object.create(null);return t.forEach((a,c)=>{l[c]=a}),l},clear:()=>{e.clear(),t.clear()}}}function ch(e){const t=new Map(e.map(l=>[l.name,l])),n=[];for(const l of e)for(const a of l.dependencies??[])t.has(a)||n.push(`${l.name} -> ${a}`);const r=[],i=new Set,o=[...e],s=l=>(l.dependencies??[]).every(a=>i.has(a)||!t.has(a));for(;o.length>0;){const l=o.filter(s);if(l.length===0)throw new Error(`[vane/plugin-core] 插件循环依赖: ${o.map(c=>c.name).join(" <-> ")}`);let a=l[0];for(const c of l)(c.priority??0)>(a.priority??0)&&(a=c);r.push(a),i.add(a.name),o.splice(o.indexOf(a),1)}return n.length>0&&console.warn(`[vane/plugin-core] 以下插件依赖未注册，将被忽略:
  ${n.join(`
  `)}`),r}function hf(e,t){try{return ch(e)}catch(n){return t==null||t(n),e}}async function dh(e,t={}){const{timeout:n=3e3,name:r="anonymous",hook:i="unknown"}=t;if(!n||n<=0)return await e();let o;const s=new Promise((l,a)=>{o=setTimeout(()=>{a(new Error(`[vane/plugin-core] 插件 ${r} 的钩子 ${i} 超时(${n}ms)`))},n)});try{return await Promise.race([Promise.resolve().then(e),s])}finally{o&&clearTimeout(o)}}const fh=new Set(["onMount","onUnmount","onPropsChange","onError"]);function ph(e={}){const t=e.logger??console,n=e.sandbox??!0,r=e.timeout??3e3,i=[];let o=[];const s=new Map,l=new Map,a=new Set;let c=0,f=null,p=0;const m=(C,_,N)=>{i.push({plugin:C,hook:_,error:N})},h=()=>{c+=1,f=null},y=(C,_=new Set)=>C.enabled===!1?!1:_.has(C.name)?!0:(_.add(C.name),(C.dependencies??[]).every(N=>{const U=s.get(N);return!U||y(U,_)})),P=()=>{if(f)return f;const C=[...s.values()].filter(_=>y(_)?!0:(m(_.name,"dependencies",new Error("依赖已停用")),!1));return f=hf(C,_=>m("[order]","resolveDependencyOrder",_))},w=C=>{const _=o.filter(([N])=>!C||N===C).reverse();o=C?o.filter(([N])=>N!==C):[];for(const[,N]of _)try{N()}catch(U){t.warn("[vane] cleanup failed",U)}},g=C=>{var _;return Promise.resolve((_=C.destroy)==null?void 0:_.call(C)).catch(N=>t.warn(`[vane] destroy failed: ${C.name}`,N))},d=async(C,_,N,U,A)=>{var Xe,E;const V=_==="onUnmount";if(_==="onMount"||V){if(a.has(C.name)!==V)return{};V?a.delete(C.name):a.add(C.name)}const We=(Xe=C.hooks)==null?void 0:Xe[_];if(typeof We!="function")return{};let Ue;try{const L=()=>We(N,...U);Ue=C.sandbox??n?await dh(L,{timeout:C.timeout??r,name:C.name,hook:_}):await L()}catch(L){return A!==c?{}:(m(C.name,_,L),t.warn(`[vane] ${_} failed: ${C.name}`,L),(E=e.onError)==null||E.call(e,C.name,_,L),{stop:_==="onError"})}return A!==c?{}:fh.has(_)&&typeof Ue=="function"?(o.push([C.name,Ue]),{}):{value:Ue}},v=async(C,_,N)=>{const U=c;for(const A of P()){if(U!==c)return;const V=await d(A,C,_,N,U);if(V.stop)return;if(V.value===!1)return!1;if(V.value!==void 0&&V.value!==!0)return V.value}},k=(C,_,...N)=>v(C,_,N),S=C=>{s.get(C.name)&&l.get(C.name)!==C&&(t.warn(`[vane] duplicate plugin, destroy old: ${C.name}`),j(C.name)),s.set(C.name,{...C,enabled:C.enabled??!0}),l.set(C.name,C),a.delete(C.name),h(),C.init&&Promise.resolve(C.init()).catch(_=>{t.warn(`[vane] init failed: ${C.name}`,_)})},b=C=>C.forEach(S),T=C=>{s.delete(C),l.delete(C),a.delete(C),f=null},j=C=>{const _=s.get(C);_&&(h(),w(C),g(_),T(C))};return{register:S,registerAll:b,unregister:j,getPlugin:C=>s.get(C),getAllPlugins:()=>[...s.values()],getEnabledPlugins:()=>[...s.values()].filter(C=>C.enabled!==!1),getExecutionOrder:()=>[...P()],enable:C=>{const _=s.get(C);_&&(_.enabled=!0,f=null)},disable:C=>{const _=s.get(C);_&&(_.enabled=!1,f=null)},has:C=>s.has(C),executeHook:k,clear:()=>{h(),p+=1,w();const C=[...s.values()].map(g);return s.clear(),l.clear(),a.clear(),Promise.all(C).then(()=>{})},getErrors:()=>[...i],align:async(C,_)=>{const N=++p,U=new Map(C.map(A=>[A.name,A]));for(const A of[...s.keys()]){if(N!==p)return;if(l.get(A)===U.get(A))continue;const V=s.get(A);h(),await d(V,"onUnmount",_,[],c),w(A),await g(V),T(A)}for(const A of C){if(N!==p)return;l.get(A.name)!==A&&S(A)}},peekOrder:P}}var gh=Object.defineProperty,mh=(e,t,n)=>t in e?gh(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,hh=(e,t,n)=>mh(e,t+"",n);class vh extends en.Component{constructor(){super(...arguments),hh(this,"state",{error:null})}static getDerivedStateFromError(t){return{error:t}}componentDidUpdate(t){var i,o;const n=t.resetKeys??[],r=this.props.resetKeys??[];this.state.error&&(n.length!==r.length||n.some((s,l)=>!Object.is(s,r[l])))&&((o=(i=this.props).onReset)==null||o.call(i),this.setState({error:null}))}componentDidCatch(t,n){var r,i;console.warn("[vane/plugin-core] 插件渲染错误已被隔离",t,n),(i=(r=this.props).onError)==null||i.call(r,t,n)}render(){const{error:t}=this.state;return t?this.props.fallback?this.props.fallback(t):null:this.props.children}}let Kr=null;function yh(e=!1){if(Kr&&!e)return Kr;const t=typeof window<"u"?window.innerWidth:1024,n=typeof window<"u"?window.innerHeight:768,r=typeof window<"u"&&window.devicePixelRatio||1,i=typeof navigator<"u"&&navigator.userAgent||"",o=/iPad|Tablet/i.test(i),s=/Mobile|Android|iPhone/i.test(i),l=typeof window<"u"&&("ontouchstart"in window||(navigator.maxTouchPoints??0)>0);return Kr={type:o?"tablet":s?"mobile":"desktop",os:i,browser:i,devicePixelRatio:r,viewportWidth:t,viewportHeight:n,isTouchDevice:l,isRetina:r>=2},Kr}function Tu(e,t){if(Object.is(e,t))return!0;if(typeof e!="object"||typeof t!="object"||e===null||t===null)return!1;const n=Object.keys(e),r=Object.keys(t);return n.length!==r.length?!1:n.every(i=>Object.is(e[i],t[i]))}function xh(e){const{plugins:t,props:n,data:r,initialState:i,containerRef:o,enableDebug:s=!1,managerOptions:l,extendContext:a}=e,c=x.useRef(null),f=o??c,p=x.useRef(null);p.current||(p.current=ph(l));const m=p.current,h=x.useRef(null);h.current||(h.current=uh());const y=h.current,P=x.useRef(new Map),[w,g]=x.useState(i??{}),[,d]=x.useState(0),v=x.useCallback(()=>d(B=>B+1),[]),k=x.useMemo(()=>yh(),[]),S=x.useRef(n);Tu(S.current,n)||(S.current=n);const b=S.current,T=x.useRef(r);Tu(T.current,r)||(T.current=r);const j=T.current,C=x.useRef(null),_=x.useMemo(()=>{const B={props:b,data:j,bus:y,refs:{container:f,getContainer:()=>f.current},state:w,setState:W=>g(ae=>({...ae,...W})),shared:P.current,deviceInfo:k,forceUpdate:v,getSize:()=>{const W=f.current;return W?{width:W.offsetWidth,height:W.offsetHeight}:{width:0,height:0}},logger:console};return a?a(B):B},[b,j,w,k,y,a]);x.useLayoutEffect(()=>{C.current=_},[_]);const N=x.useRef(t),U=N.current;U!==t&&(U.length!==t.length||t.some((B,W)=>B!==U[W]))&&(N.current=t);const A=N.current,V=x.useRef(0);x.useLayoutEffect(()=>{const B=++V.current,W=C.current;return m.align(A,W).then(()=>{V.current===B&&(s&&console.debug("[vane/plugin-core] plugins registered:",A.map(ae=>ae.name).join("|")),m.executeHook("onMount",W))}),()=>{V.current+=1}},[A,m,s]),x.useLayoutEffect(()=>()=>{const B=C.current;if(!m.getExecutionOrder().some(W=>{var ae;return typeof((ae=W.hooks)==null?void 0:ae.onUnmount)=="function"})){m.clear();return}m.executeHook("onUnmount",B).finally(()=>m.clear())},[m]);const We=m.peekOrder(),Ue=x.useRef([]),Xe=x.useMemo(()=>{const B=new Map(A.map(ue=>[ue.name,ue])),W=A.filter(ue=>{var It;return ue.enabled!==!1&&((It=m.getPlugin(ue.name))==null?void 0:It.enabled)!==!1}),ae=We.length===W.length?We.map(ue=>B.get(ue.name)??ue):hf(W),me=Ue.current;return me.length===ae.length&&ae.every((ue,It)=>ue===me[It])?me:(Ue.current=ae,ae)},[A,m,We]),E=x.useRef(_);E.current=_;const L=x.useCallback((B,W)=>{var ue;const ae=E.current;let me=W;for(const It of Xe){const io=(ue=It.hooks)==null?void 0:ue[B];if(typeof io=="function")try{me=B==="transformData"?io(ae,me):io(me)}catch(Sf){(ae.logger??console).warn(`[plugin-core] ${It.name}.${B} 执行失败，已跳过`,Sf)}}return me},[Xe]),M=x.useCallback(B=>L("transformProps",B),[L]),Y=x.useCallback(B=>L("transformData",B),[L]),re=x.useCallback((B,...W)=>m.executeHook(B,C.current,...W),[m]);return{manager:m,bus:y,context:_,state:w,setState:_.setState,execute:re,transformProps:M,transformData:Y,orderedPlugins:Xe}}x.createContext(null);const vf=x.createContext(null),ju=new WeakMap;function Ph(e,t){let n=ju.get(e);n||(n=new Map,ju.set(e,n));let r=n.get(t);return r||(r=[...e].filter(i=>typeof i.hooks[t]=="function").sort((i,o)=>{var s,l;return(((s=i.config)==null?void 0:s.order)??0)-(((l=o.config)==null?void 0:l.order)??0)||(o.priority??0)-(i.priority??0)}),n.set(t,r)),r}function kh(e,t,n){return Ph(e,n).map((r,i)=>{if(r.enabled===!1)return null;try{const o=r.hooks[n],s=o(t);return s==null?null:u.jsx(vh,{children:s},`activity-slot-${r.name}-${i}`)}catch(o){return console.warn(`[vane-activity] 插件 ${r.name} 的 ${n} 渲染失败`,o),null}}).filter(Boolean)}function Ft(e){const t=x.useContext(vf);return t?kh(t.orderedPlugins,t.context,e):[]}const D=x.forwardRef(function(t,n){const{data:r,containerClassName:i,containerStyle:o,containerRefExternal:s,emptyText:l="活动暂未开始",loading:a,onMount:c,onUnmount:f}=t,p=x.useRef(null),m=s||p,[,h]=x.useState(0),y=en.useCallback(()=>h(N=>N+1),[]),P=Ft("renderHeader"),w=Ft("renderProgress"),g=Ft("renderTasks"),d=Ft("renderRewards"),v=Ft("renderRules"),k=Ft("renderFooter"),S=Ft("renderOverlay");x.useImperativeHandle(n,()=>({getContainer:()=>m.current,forceUpdate:y,getSize:()=>{const N=m.current;return N?{width:N.offsetWidth,height:N.offsetHeight}:{width:0,height:0}}}),[y,m]);const b=x.useRef(c),T=x.useRef(f);b.current=c,T.current=f,x.useEffect(()=>{var N;return(N=b.current)==null||N.call(b),()=>{var U;return(U=T.current)==null?void 0:U.call(T)}},[]);const j=r,_=(Array.isArray(j==null?void 0:j.tasks)?j.tasks:[]).length>0;return u.jsxs("div",{ref:m,className:`vc-activity ${i||""}`,style:{position:"relative",boxSizing:"border-box",background:"#fff",color:"#1f2328",fontFamily:"inherit",padding:16,...o},children:[P.length>0&&u.jsx("div",{className:"va-header",style:{marginBottom:12},children:P}),w.length>0&&u.jsx("div",{className:"va-hero",style:{marginBottom:12},children:w}),a&&u.jsx("div",{className:"va-loading",style:{padding:"12px 0",textAlign:"center",color:"#6b6b6b"},children:"加载中…"}),!a&&!_&&u.jsx("div",{className:"va-empty",style:{padding:"24px 0",textAlign:"center",color:"#6b6b6b"},children:l}),!a&&_&&u.jsxs(u.Fragment,{children:[g.length>0&&u.jsx("div",{className:"va-tasks",style:{marginBottom:12},children:g}),d.length>0&&u.jsx("div",{className:"va-rewards",style:{marginBottom:12},children:d})]}),!a&&v.length>0&&u.jsx("div",{className:"va-rules",children:v}),k.length>0&&u.jsx("div",{className:"va-footer",style:{marginTop:12},children:k}),S.length>0&&u.jsx("div",{className:"va-overlay",style:{position:"absolute",inset:0,pointerEvents:"none"},children:S})]})});D.displayName="ActivityCore";function wh({orderedPlugins:e,context:t,children:n}){const r=x.useMemo(()=>({orderedPlugins:e,context:t}),[e,t]);return u.jsx(vf.Provider,{value:r,children:n})}function Sh(e){if(e.length===0)return 0;let t=0,n=0;for(const i of e){const o=i.weight??1,s=Number.isFinite(o)&&o>0?o:1;t+=s;const l=Math.max(0,Math.min(1,Number.isFinite(i.progress)?i.progress:0));n+=l*s}const r=t===0?0:n/t;return Number.isFinite(r)?Math.max(0,Math.min(1,r)):0}function Ch(e,t,n){if(n)return"claimed";const r=Number.isFinite(e.threshold)?Math.max(0,Math.min(1,e.threshold)):1;return t>=r?"claimable":"locked"}function _h(e,t,n){return e.map(r=>({...r,status:Ch(r,t,n.includes(r.id))}))}function bh(e){const t=[...e].sort((s,l)=>(l.priority??0)-(s.priority??0)),n=new Map,r=new Set,i=[];for(const s of t){const l=s.exclusiveSlots??[];if(l.length===0)continue;const a=l.find(c=>n.has(c));if(a){r.add(s),i.push({name:s.name,slot:a,winner:n.get(a)});continue}for(const c of l)n.set(c,s.name)}return r.size===0?{kept:e,dropped:i}:{kept:e.filter(s=>!r.has(s)),dropped:i}}function Rh(e){return Array.from(new Set(e))}function Th(e){return!e||typeof e!="object"?e:{...e,tasks:Array.isArray(e.tasks)?e.tasks:[],rewards:Array.isArray(e.rewards)?e.rewards:[],rules:Array.isArray(e.rules)||typeof e.rules=="string"?e.rules:[]}}function I(e,t){const n=Array.isArray(t)?{plugins:t}:t,{plugins:r,enableDebug:i=!1}=n,{kept:o,dropped:s}=bh(r);if(s.length>0){const a=s.map(c=>`${c.name}(被 ${c.winner} 挤出 ${c.slot})`).join("、");console.warn(`[vane-activity] 独占槽位去重，以下插件未参与装配：${a}`)}const l=x.forwardRef((a,c)=>{const f=x.useRef(null),p=a.onClaim,m=x.useCallback(A=>A,[]),h=xh({plugins:o,props:a,data:a.data,containerRef:f,extendContext:m,enableDebug:i}),y=x.useMemo(()=>h.context.data===void 0?void 0:h.transformData(h.context.data),[h.context.data,h.transformData,h.state]),P=x.useMemo(()=>Th(y),[y]),w=a.claimedRewardIds!==void 0,g=x.useMemo(()=>{const A=w?a.claimedRewardIds:h.state.claimedIds;return Array.isArray(A)?A:[]},[w,a.claimedRewardIds,h.state.claimedIds]),d=x.useMemo(()=>(P==null?void 0:P.tasks)??[],[P]),v=x.useMemo(()=>Sh(d),[d]),k=x.useMemo(()=>_h((P==null?void 0:P.rewards)??[],v,g),[P,v,g]),S=x.useMemo(()=>new Map(k.map(A=>[A.id,A])),[k]),b=x.useRef(g);b.current=g;const T=x.useRef(new Set),j=x.useCallback(A=>{const V=S.get(A);if(!V){console.warn(`[vane-activity] 未知奖励 id：${A}`);return}if(V.status!=="claimable"){console.warn(`[vane-activity] 奖励 ${A} 当前状态为 ${V.status}，不能领取`);return}if(T.current.has(A))return;T.current.add(A);const We=Rh([...b.current,A]);b.current=We,w||h.setState({claimedIds:We}),p==null||p(A)},[w,p,S,h]);x.useEffect(()=>{for(const A of g)T.current.delete(A)},[g.join("|")]);const C=x.useCallback((A,...V)=>h.execute(A,...V),[h.manager]),_=h.transformProps(a);x.useEffect(()=>{C("onMount")},[C]);const N=x.useMemo(()=>({...h.context,data:P,tasks:d,progress:v,rewards:k,claimedIds:g,claim:j}),[h.context,P,d,v,k,g,j]),U={..._,containerRefExternal:f,debug:_.debug??i,data:N.data,onMount:()=>{var A;(A=_.onMount)==null||A.call(_)},onUnmount:()=>{var A;(A=_.onUnmount)==null||A.call(_)}};return u.jsx(wh,{orderedPlugins:h.orderedPlugins,context:N,children:u.jsx(e,{ref:c,...U})})});return l.displayName="WithPlugins(ActivityCore)",l}const jh="ProgressFxPlugin",Eh="进度特效：顶部进度条 fill + 百分比数字；进度达成 100% 时浮层庆祝条。",$h="0.1.0",Ah=["ui","进度","特效"],Lh=[{name:"height",type:"number",default:"8",description:"进度条高度（px），圆角随高度自动取 height / 2"},{name:"order",type:"number",default:"0",description:"同槽位排序键（升序靠前）：与 ProgressRing / MilestoneBar / CountdownTimer 共存时调整上下顺序"}],Nh=[{name:"renderProgress",when:"每次渲染；进度槽位无更高 order 的插件接管时",description:"输出「进度条 + 百分比数字」，百分比 = round(ctx.progress × 100)"},{name:"renderOverlay",when:"ctx.progress >= 1（全部任务完成）",description:"在浮层渲染「🎉 进度达成 100%」庆祝条（absolute + pointerEvents:none，不挡交互）；未达成返回 null"}],Mh=[],zh="纯展示：只读取 ctx.progress（0..1），不调用任何上下文方法，也不触发回调。",Oh=["进度条宽度随 progress 过渡（.4s ease）","100% 达成庆祝浮层"],Dh=["活动页顶部进度","任务完成度可视化","秒杀达标提示"],Ih=["height 只影响条高，颜色固定为强调橙 #ff7a29（填充不是文字，不受 ADR-13 约束）","庆祝浮层只在 progress 恰好达到 1 时出现，进度停在 0.99 不会触发"],Fh="const Activity = withPlugins(ActivityCore, [createProgressFxPlugin()]);",Bh=[{name:"默认进度条",description:"8px 条 + 百分比 + 达成庆祝",src:"createProgressFxPlugin()",config:{}},{name:"加粗进度条",description:"高度调到 14px，适合首屏大进度",src:"createProgressFxPlugin({ height: 14 })",config:{height:14}}],Ml={name:jh,description:Eh,since:$h,tags:Ah,props:Lh,events:Nh,methods:Mh,methodsNote:zh,features:Oh,useCases:Dh,notes:Ih,example:Fh,examples:Bh},oe=(e={})=>{const{height:t=8}=e;return{name:"ProgressFxPlugin",version:"0.1.0",description:Ml.description,priority:10,config:e,hooks:{renderProgress:n=>{const r=Math.round(Math.max(0,Math.min(1,n.progress??0))*100);return u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[u.jsx("div",{style:{flex:1,height:t,borderRadius:t/2,background:"rgba(128,128,128,0.18)",overflow:"hidden"},children:u.jsx("div",{style:{width:`${r}%`,height:"100%",borderRadius:t/2,background:"#ff7a29",transition:"width .4s ease"}})}),u.jsxs("span",{style:{fontSize:14,fontWeight:700,color:"#1f2328",minWidth:40,textAlign:"right"},children:[r,"%"]})]})},renderOverlay:n=>(n.progress??0)>=1?u.jsx("div",{style:{position:"absolute",top:8,left:"50%",transform:"translateX(-50%)",padding:"4px 12px",borderRadius:999,background:"#1f2328",color:"#fff",fontSize:12,pointerEvents:"none",whiteSpace:"nowrap"},children:"🎉 进度达成 100%"}):null}}};oe.meta=Ml;const Wh="TaskListPlugin",Uh="任务清单：渲染活动任务列表，展示标题/描述/进度与状态，含「去完成」动作按钮。",Hh="0.1.0",Vh=["ui","任务","列表"],Qh=[{name:"showProgress",type:"boolean",default:"true",description:"是否展示每个未完成任务的进度条"},{name:"doneLabel",type:"string",default:"已完成",description:"完成态文案（替代默认的「已完成」）"},{name:"order",type:"number",default:"0",description:"同槽位排序键（本插件独占 renderTasks，一般用不到）"}],Kh=[{name:"renderTasks",when:"每次渲染；任务槽位无更高 order 的插件接管时",description:"输出任务清单；ctx.tasks 为空时返回 null，槽位留空"},{name:"onTaskAction",when:"点击任务动作按钮（status !== completed 且配了 actionLabel）",description:"透传 ActivityCore 的 onTaskAction(taskId)，由消费方决定跳转/埋点"}],Gh=[],Yh="只读取 ctx.tasks 与 ctx.props.onTaskAction，不调用任何上下文方法。",Jh=["任务三态（locked / available / completed）配色","按任务 progress 渲染单项进度条"],Xh=["签到任务清单","拉新任务列表","积分任务中心"],Zh=["进度条默认不显示在已完成任务上（改 doneLabel 可换文案）",'声明 exclusiveSlots: ["renderTasks"]：与 TaskTabsPlugin（priority 22）同时装配时本插件让位并被丢弃，避免两份任务列表叠影'],qh="const Activity = withPlugins(ActivityCore, [createTaskListPlugin()]);",ev=[{name:"基础任务列表",description:"展示任务清单与每项进度",src:"createTaskListPlugin()",config:{}},{name:"隐藏单项进度条",description:"只列任务与状态，进度交给顶部 ProgressFx",src:"createTaskListPlugin({ showProgress: false })",config:{showProgress:!1}}],zl={name:Wh,description:Uh,since:Hh,tags:Vh,props:Qh,events:Kh,methods:Gh,methodsNote:Yh,features:Jh,useCases:Xh,notes:Zh,example:qh,examples:ev},tv={locked:"未解锁",available:"进行中",completed:"已完成"},nv={locked:"#5d636a",available:"#cf4407",completed:"#15803d"},ee=(e={})=>{const{showProgress:t=!0,doneLabel:n="已完成"}=e;return{name:"TaskListPlugin",version:"0.1.0",description:zl.description,priority:20,config:e,exclusiveSlots:["renderTasks"],hooks:{renderTasks:r=>{const i=r.tasks??[];return i.length===0?null:u.jsx("div",{style:{display:"flex",flexDirection:"column",gap:10},children:i.map(o=>{const s=nv[o.status],l=Math.round(Math.max(0,Math.min(1,o.progress??0))*100);return u.jsxs("div",{"data-testid":"activity-task",style:{display:"flex",alignItems:"center",gap:10,padding:"10px 12px",borderRadius:10,border:"1px solid rgba(128,128,128,0.18)",background:"#fff"},children:[u.jsxs("div",{style:{flex:1,minWidth:0},children:[u.jsx("div",{style:{fontWeight:600,fontSize:14,color:"#1f2328"},children:o.title}),o.desc&&u.jsx("div",{style:{fontSize:12,color:"#5d636a",marginTop:2},children:o.desc}),t&&o.status!=="completed"&&u.jsx("div",{style:{marginTop:6,height:4,borderRadius:2,background:"rgba(128,128,128,0.18)"},children:u.jsx("div",{style:{width:`${l}%`,height:"100%",borderRadius:2,background:"#cf4407"}})})]}),u.jsx("span",{style:{fontSize:12,color:s,fontWeight:600,whiteSpace:"nowrap"},children:o.status==="completed"?n:tv[o.status]}),o.actionLabel&&o.status!=="completed"&&u.jsx("button",{type:"button",onClick:()=>{var a,c;return(c=(a=r.props).onTaskAction)==null?void 0:c.call(a,o.id)},style:{border:"none",borderRadius:999,padding:"6px 14px",background:"#cf4407",color:"#fff",fontSize:13,cursor:"pointer"},children:o.actionLabel})]},o.id)})})}}}};ee.meta=zl;const rv="RewardClaimPlugin",iv="奖励领取：渲染奖励行，按派生状态展示按钮（可领/已领/锁定），点击调 claim。",ov="0.1.0",sv=["ui","奖励","领取"],lv=[{name:"claimedLabel",type:"string",default:"已领取",description:"已领取态按钮文案"},{name:"order",type:"number",default:"0",description:"同槽位排序键：与 RedeemCodePlugin 同在 renderRewards 时定上下"}],av=[{name:"renderRewards",when:"每次渲染；奖励槽位无更高 order 的插件接管时",description:"输出奖励行：可领（实心橙按钮）/ 已领（绿字禁用）/ 未解锁（灰字禁用）"},{name:"onClaim",when:"点击「领取」按钮（仅 claimable 态可点）",description:"先走 ctx.claim(rewardId) 更新内部态，再由内核透传 ActivityCore 的 onClaim(rewardId)"}],uv=[{name:"claim",signature:"ctx.claim(rewardId: string): void",description:"领取指定奖励：非受控时写入内核 claimedIds 并触发重渲染；受控（传了 claimedRewardIds）时只回调 onClaim"}],cv=["奖励三态派生（locked / claimable / claimed）","受控 / 非受控两种领取模式"],dv=["阶梯奖励领取","达标发券","任务奖励发放"],fv=["阈值来自 reward.threshold，比较对象是总体加权进度 ctx.progress","按钮配色已过 ADR-13：可领 #cf4407（白底 4.69:1），不用 #ff7a29（白字仅 2.6:1）"],pv="const Activity = withPlugins(ActivityCore, [createRewardClaimPlugin()]);",gv=[{name:"默认领取区",description:"阈值解锁后高亮「领取」",src:"createRewardClaimPlugin()",config:{}},{name:"自定义已领文案",description:"把「已领取」换成「已到账」",src:'createRewardClaimPlugin({ claimedLabel: "已到账" })',config:{claimedLabel:"已到账"}}],Ol={name:rv,description:iv,since:ov,tags:sv,props:lv,events:av,methods:uv,features:cv,useCases:dv,notes:fv,example:pv,examples:gv},Eu={locked:{label:"未解锁",bg:"rgba(128,128,128,0.12)",color:"#5d636a",disabled:!0},claimable:{label:"领取",bg:"#cf4407",color:"#fff",disabled:!1},claimed:{label:"已领取",bg:"rgba(21,128,61,0.12)",color:"#15803d",disabled:!0}},Me=(e={})=>{const{claimedLabel:t="已领取"}=e;return{name:"RewardClaimPlugin",version:"0.1.0",description:Ol.description,priority:30,exclusiveSlots:["renderRewards"],config:e,hooks:{renderRewards:n=>{const r=n.rewards??[];return r.length===0?null:u.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:r.map(i=>{const o=i.status==="claimed"?{...Eu.claimed,label:t}:Eu[i.status];return u.jsxs("div",{"data-testid":"activity-reward",style:{display:"flex",alignItems:"center",gap:10,padding:"10px 12px",borderRadius:10,border:"1px solid rgba(128,128,128,0.18)",background:"#fff"},children:[u.jsxs("div",{style:{flex:1,minWidth:0},children:[u.jsxs("div",{style:{fontWeight:600,fontSize:14,color:"#1f2328"},children:[i.icon?`${i.icon} `:"",i.title]}),i.desc&&u.jsx("div",{style:{fontSize:12,color:"#5d636a",marginTop:2},children:i.desc})]}),u.jsx("button",{type:"button",disabled:o.disabled,onClick:()=>n.claim(i.id),style:{border:"none",borderRadius:999,padding:"6px 14px",background:o.bg,color:o.color,fontSize:13,cursor:o.disabled?"default":"pointer"},children:o.label})]},i.id)})})}}}};Me.meta=Ol;function mv(e){return e?typeof e=="string"?[{content:e}]:e:[]}function hv({context:e,collapsedLines:t}){var o;const[n,r]=x.useState(!1),i=mv((o=e.data)==null?void 0:o.rules);return i.length===0?null:u.jsxs("div",{style:{borderTop:"1px solid rgba(128,128,128,0.18)",paddingTop:10},children:[u.jsxs("button",{type:"button","aria-expanded":n,onClick:()=>r(s=>!s),style:{display:"flex",alignItems:"center",gap:6,background:"none",border:"none",padding:0,cursor:"pointer",color:"#1f2328",fontSize:13,fontWeight:600},children:["活动规则",u.jsx("span",{style:{transform:n?"rotate(180deg)":"none",transition:"transform .2s",color:"#5d636a"},children:"▾"})]}),u.jsx("div",{style:n?{marginTop:8}:{marginTop:8,display:"-webkit-box",WebkitLineClamp:t,WebkitBoxOrient:"vertical",overflow:"hidden"},children:i.map((s,l)=>u.jsxs("p",{style:{margin:"0 0 6px",fontSize:12,lineHeight:1.6,color:"#5d636a"},children:[s.title?u.jsxs("strong",{style:{color:"#1f2328"},children:[s.title,"："]}):null,s.content]},l))})]})}const vv="RuleExpandPlugin",yv="规则折叠：渲染「活动规则」可折叠面板，折叠态按行数截断，同步 aria-expanded。",xv="0.1.0",Pv=["ui","规则","折叠"],kv=[{name:"collapsedLines",type:"number",default:"3",description:"折叠态最大展示行数（-webkit-line-clamp）"}],wv=[{name:"renderRules",when:"每次渲染；规则槽位无更高 order 的插件接管时",description:"输出「活动规则」折叠面板；data.rules 为空时返回 null"}],Sv=[],Cv="展开/收起用组件本地 useState，不写回 ctx，也不调用任何上下文方法。",_v=["长文 line-clamp 折叠","aria-expanded 无障碍状态同步"],bv=["活动规则说明","条款/免责声明","秒杀细则"],Rv=["rules 支持字符串或 { title, content } 数组两种形态","折叠状态是组件内部 state，重新挂载会回到折叠态"],Tv="const Activity = withPlugins(ActivityCore, [createRuleExpandPlugin()]);",jv=[{name:"默认折叠",description:"折叠 3 行，点击展开全文",src:"createRuleExpandPlugin()",config:{}},{name:"折叠 6 行",description:"首屏多露两行规则摘要",src:"createRuleExpandPlugin({ collapsedLines: 6 })",config:{collapsedLines:6}}],Dl={name:vv,description:yv,since:xv,tags:Pv,props:kv,events:wv,methods:Sv,methodsNote:Cv,features:_v,useCases:bv,notes:Rv,example:Tv,examples:jv},on=(e={})=>{const{collapsedLines:t=3}=e;return{name:"RuleExpandPlugin",version:"0.1.0",description:Dl.description,priority:40,exclusiveSlots:["renderRules"],config:e,hooks:{renderRules:n=>u.jsx(hv,{context:n,collapsedLines:t})}}};on.meta=Dl;const Ev={title:"夏日狂欢 · 7 日签到",tasks:[{id:"t1",title:"每日签到",desc:"连续签到领积分",progress:1,status:"completed",actionLabel:"已签到"},{id:"t2",title:"浏览会场 3 个商品",desc:"了解活动好物",progress:.6,status:"available",actionLabel:"去浏览",rewardId:"r1"},{id:"t3",title:"邀请 1 位好友",desc:"助力解锁终极大奖",progress:0,status:"locked",actionLabel:"去邀请",rewardId:"r2"}],rewards:[{id:"r1",title:"5 元无门槛券",threshold:.5,icon:"🎟️",desc:"浏览达标即可领取"},{id:"r2",title:"20 元会员券",threshold:.9,icon:"💎",desc:"邀请好友后解锁"},{id:"r3",title:"终极大礼包",threshold:1,icon:"🎁",desc:"全部任务完成发放"}],rules:[{title:"活动时间",content:"2024.07.01 - 2024.07.07，逾期任务与奖励失效。"},{title:"领取规则",content:"奖励按总体进度阈值解锁，达标后点击「领取」发放至账户；券类奖励有效期 7 天。"},{title:"特别说明",content:"邀请任务需好友完成注册并首单，视为有效助力；异常账号不予发放。"}]},$v=I(D,[oe(),ee(),Me(),on()]),Av={slug:"basic",title:"基础闭环：内核 + 4 官方插件",group:"basic",intro:"营销活动的最小完整形态——进度特效 / 任务清单 / 奖励领取 / 规则折叠各管一块，内核只负责骨架与生命周期转发。"};function Lv(){return u.jsx($v,{data:Ev,onTaskAction:e=>console.log("task action",e),onClaim:e=>console.log("claim",e)})}const Nv=Object.freeze(Object.defineProperty({__proto__:null,default:Lv,meta:Av},Symbol.toStringTag,{value:"Module"})),Mv={title:"夏日狂欢 · 7 日签到",tasks:[{id:"t1",title:"每日签到",desc:"连续签到领积分",progress:1,status:"completed",actionLabel:"已签到"},{id:"t2",title:"浏览会场 3 个商品",desc:"了解活动好物",progress:.6,status:"available",actionLabel:"去浏览"},{id:"t3",title:"邀请 1 位好友",desc:"助力解锁终极大奖",progress:0,status:"locked",actionLabel:"去邀请"}],rewards:[],rules:[]},zv=I(D,[ee()]),Ov={slug:"tasklist",title:"任务清单 TaskListPlugin",group:"plugin",intro:"只挂 TaskListPlugin 时，活动只剩「任务清单」区：每行展示标题 / 描述 / 进度与状态，并带「去完成」动作按钮。"};function Dv(){return u.jsx(zv,{data:Mv,onTaskAction:e=>console.log("task action",e)})}const Iv=Object.freeze(Object.defineProperty({__proto__:null,default:Dv,meta:Ov},Symbol.toStringTag,{value:"Module"})),Fv={title:"夏日狂欢 · 7 日签到",tasks:[{id:"t1",title:"每日签到",progress:1,status:"completed"},{id:"t2",title:"浏览会场 3 个商品",progress:1,status:"completed"},{id:"t3",title:"邀请 1 位好友",progress:1,status:"completed"}],rewards:[],rules:[]},Bv=I(D,[oe()]),Wv={slug:"progressfx",title:"进度特效 ProgressFxPlugin",group:"plugin",intro:"顶部进度条 + 百分比数字。本例三项任务全完成 → 3/3 = 100%，弹出庆祝浮层；把任务进度改成 1/0.6/0 就是 53%。"};function Uv(){return u.jsx(Bv,{data:Fv})}const Hv=Object.freeze(Object.defineProperty({__proto__:null,default:Uv,meta:Wv},Symbol.toStringTag,{value:"Module"})),Vv={title:"夏日狂欢 · 7 日签到",tasks:[{id:"t1",title:"每日签到",progress:1,status:"completed"},{id:"t2",title:"浏览会场 3 个商品",progress:.6,status:"available"},{id:"t3",title:"邀请 1 位好友",progress:0,status:"locked"}],rewards:[{id:"r1",title:"5 元无门槛券",threshold:.5,icon:"🎟️",desc:"浏览达标即可领取"},{id:"r2",title:"20 元会员券",threshold:.9,icon:"💎",desc:"邀请好友后解锁"},{id:"r3",title:"终极大礼包",threshold:1,icon:"🎁",desc:"全部任务完成发放"}],rules:[]},Qv=I(D,[Me()]),Kv={slug:"rewardclaim",title:"奖励领取 RewardClaimPlugin",group:"plugin",intro:"只挂 RewardClaimPlugin 时，活动只剩「奖励领取」区：按钮状态按「总体进度 vs 阈值」派生（可领 / 已领 / 锁定），点击调 onClaim。"};function Gv(){return u.jsx(Qv,{data:Vv,onClaim:e=>console.log("claim",e)})}const Yv=Object.freeze(Object.defineProperty({__proto__:null,default:Gv,meta:Kv},Symbol.toStringTag,{value:"Module"})),Jv={title:"夏日狂欢 · 7 日签到",tasks:[],rewards:[],rules:[{title:"活动时间",content:"2024.07.01 - 2024.07.07，逾期任务与奖励失效。"},{title:"领取规则",content:"奖励按总体进度阈值解锁，达标后点击「领取」发放至账户；券类奖励有效期 7 天。"},{title:"特别说明",content:"邀请任务需好友完成注册并首单，视为有效助力；异常账号不予发放。"}]},Xv=I(D,[on()]),Zv={slug:"ruleexpand",title:"规则折叠 RuleExpandPlugin",group:"plugin",intro:"只挂 RuleExpandPlugin 时，活动只剩「活动规则」可折叠面板：折叠态按行数截断长文，点击展开并同步 aria-expanded。"};function qv(){return u.jsx(Xv,{data:Jv})}const ey=Object.freeze(Object.defineProperty({__proto__:null,default:qv,meta:Zv},Symbol.toStringTag,{value:"Module"})),ty={title:"夏日狂欢 · 7 日签到",tasks:[{id:"t1",title:"每日签到",desc:"连续签到领积分",progress:1,status:"completed",actionLabel:"已签到"},{id:"t2",title:"浏览会场 3 个商品",desc:"了解活动好物",progress:1,status:"completed",actionLabel:"已浏览"},{id:"t3",title:"邀请 1 位好友",desc:"助力解锁终极大奖",progress:1,status:"completed",actionLabel:"已邀请"}],rewards:[{id:"r1",title:"5 元无门槛券",threshold:.5,icon:"🎟️",desc:"浏览达标即可领取"},{id:"r2",title:"20 元会员券",threshold:.9,icon:"💎",desc:"邀请好友后解锁"},{id:"r3",title:"终极大礼包",threshold:1,icon:"🎁",desc:"全部任务完成发放"}],rules:[{title:"活动时间",content:"2024.07.01 - 2024.07.07，逾期任务与奖励失效。"},{title:"领取规则",content:"奖励按总体进度阈值解锁，达标后点击「领取」发放至账户；券类奖励有效期 7 天。"},{title:"特别说明",content:"邀请任务需好友完成注册并首单，视为有效助力；异常账号不予发放。"}]},ny=I(D,[oe({height:12}),ee({showProgress:!0,doneLabel:"搞定"}),Me({claimedLabel:"已到账"}),on({collapsedLines:2})]),ry={slug:"advanced",title:"进阶：带配置的完整闭环 + 100% 庆祝",group:"advanced",intro:"四个插件都传了配置（进度条加高、完成态文案、已领文案、规则折叠到 2 行），并用全完成任务触发 100% 庆祝浮层——生产里最常见的形态。"};function iy(){return u.jsx(ny,{data:ty,onTaskAction:e=>console.log("task action",e),onClaim:e=>console.log("claim",e)})}const oy=Object.freeze(Object.defineProperty({__proto__:null,default:iy,meta:ry},Symbol.toStringTag,{value:"Module"}));function $u(e){return Math.max(0,e-Date.now())}function Au(e){const t=Math.floor(e/1e3),n=Math.floor(t/86400),r=String(Math.floor(t%86400/3600)).padStart(2,"0"),i=String(Math.floor(t%3600/60)).padStart(2,"0"),o=String(t%60).padStart(2,"0");return n>0?`${n}天 ${r}:${i}:${o}`:`${r}:${i}:${o}`}function sy({end:e,label:t,urgentMs:n}){const[r,i]=x.useState(null);x.useEffect(()=>{const s=$u(e);if(i(s),s<=0)return;const l=window.setInterval(()=>{const a=$u(e);i(a),a<=0&&window.clearInterval(l)},1e3);return()=>window.clearInterval(l)},[e]);const o=r!==null&&r>0&&r<=n;return u.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:8,fontSize:12},children:[u.jsx("span",{style:{color:"#5d636a"},children:t}),u.jsx("span",{role:"timer","aria-label":r===null?"剩余时间加载中":`剩余 ${Au(r)}`,style:{fontFamily:"var(--ff-mono, ui-monospace, monospace)",fontSize:14,fontWeight:700,color:r===0?"#5d636a":o?"#cf4407":"#1f2328",fontVariantNumeric:"tabular-nums"},children:r===null?"--:--:--":r===0?"已结束":Au(r)})]})}const ly="CountdownTimerPlugin",ay="活动倒计时：在进度区下方渲染「距活动结束 x天HH:MM:SS」，每秒自走；与 ProgressFx 同槽共存。",uy="0.1.0",cy=["ui","倒计时","进度区"],dy=[{name:"endTime",type:"string | number",default:"-",description:"截止时间（ISO 或时间戳）；不传则回退读 data.endTime，两者皆无则不渲染"},{name:"label",type:"string",default:"距活动结束",description:"倒计时前缀文案"},{name:"urgentMs",type:"number",default:"3600000",description:"剩余不足该毫秒数时进入紧急态（文字变警示色 #cf4407）"},{name:"order",type:"number",default:"0",description:"同槽位排序键（升序靠前）：默认排在 ProgressFx 之后（priority 更低）"}],fy=[{name:"renderProgress",when:"每次渲染；截止时间可解析时",description:"在进度槽位追加倒计时行；时间为空或非法时返回 null 让出槽位"}],py=[],gy="计时状态在组件内部自持（setInterval），不调用任何上下文方法，也不写内核 state。",my=["每秒自走，天/时/分/秒自适应格式","紧急态（默认最后 1 小时）文字变警示色","结束后显示「已结束」并停止计时器"],hy=["限时秒杀活动","大促倒计时","签到活动周期截止提示"],vy=["倒计时精度为秒，依赖客户端时钟；服务端下发 endTime 时注意时区（推荐 ISO 带时区或时间戳）"],yy='const Activity = withPlugins(ActivityCore, [createCountdownTimerPlugin({ endTime: "2026-12-31T23:59:59+08:00" })]);',xy=[{name:"从 data.endTime 读取",description:"不传配置，回退读活动数据的 endTime 字段",src:"createCountdownTimerPlugin()",config:{}},{name:"自定义文案与紧急阈值",description:"最后 30 分钟进入紧急态",src:'createCountdownTimerPlugin({ label: "距开抢", urgentMs: 1800000 })',config:{label:"距开抢",urgentMs:18e5}}],Il={name:ly,description:ay,since:uy,tags:cy,props:dy,events:fy,methods:py,methodsNote:gy,features:my,useCases:hy,notes:vy,example:yy,examples:xy},Fl=(e={})=>{const{endTime:t,label:n="距活动结束",urgentMs:r=36e5}=e;return{name:"CountdownTimerPlugin",version:"0.1.0",description:Il.description,priority:12,config:e,hooks:{renderProgress:i=>{var l;const o=t??((l=i.data)==null?void 0:l.endTime);if(o===void 0)return null;const s=typeof o=="number"?o:new Date(o).getTime();return Number.isFinite(s)?u.jsx(sy,{end:s,label:n,urgentMs:r}):null}}}};Fl.meta=Il;const Py={title:"夏日狂欢 · 7 日签到",endTime:"2026-12-31T23:59:59+08:00",tasks:[{id:"t1",title:"每日签到",progress:1,status:"completed"},{id:"t2",title:"浏览会场 3 个商品",progress:.6,status:"available"},{id:"t3",title:"邀请 1 位好友",progress:0,status:"locked"}],rewards:[],rules:[]},ky=I(D,[oe(),Fl(),ee()]),wy={slug:"countdown",title:"倒计时 CountdownTimerPlugin",group:"plugin",intro:"进度条下方追加每秒自走的倒计时行，截止时间读 data.endTime；最后 1 小时变紧急色。"};function Sy(){return u.jsx(ky,{data:Py})}const Cy=Object.freeze(Object.defineProperty({__proto__:null,default:Sy,meta:wy},Symbol.toStringTag,{value:"Module"})),_y="MilestoneBarPlugin",by="里程碑进度：把奖励阈值映射为轨道节点（已领取实心绿 / 可领警示橙 / 未达标灰），展示离下一档的空间距离。",Ry="0.1.0",Ty=["ui","里程碑","进度区"],jy=[{name:"height",type:"number",default:"6",description:"轨道高度（px）"},{name:"dotSize",type:"number",default:"18",description:"里程碑圆点直径（px）"},{name:"order",type:"number",default:"0",description:"同槽位排序键（升序靠前）：与 ProgressFx / ProgressRing 共存时决定上下位置"}],Ey=[{name:"renderProgress",when:"每次渲染；ctx.rewards 非空时",description:"在进度槽位渲染带节点的轨道；无奖励时返回 null 让出槽位"}],$y=[],Ay="只读取 ctx.progress 与 ctx.rewards（含派生状态），不调用任何上下文方法。",Ly=["节点状态完全由数据派生（claimed/claimable/locked）","节点 hover 显示奖励名与阈值（title）","纯形状表达，无文字，天然无对比度负担"],Ny=["阶梯奖励进度","会员成长值","众筹进度里程碑"],My=["奖励阈值建议避免扎堆（如 0.5/0.52/0.9），节点会视觉重叠"],Bl={name:_y,description:by,since:Ry,tags:Ty,props:jy,events:Ey,methods:$y,methodsNote:Ay,features:Ly,useCases:Ny,notes:My},Wl=(e={})=>{const{height:t=6,dotSize:n=18}=e;return{name:"MilestoneBarPlugin",version:"0.1.0",description:Bl.description,priority:13,config:e,hooks:{renderProgress:r=>{const i=Math.max(0,Math.min(1,r.progress??0)),o=r.rewards??[];if(o.length===0)return null;const s=Math.round(i*100);return u.jsxs("div",{role:"img","aria-label":`总体进度 ${s}%，共 ${o.length} 档里程碑`,style:{position:"relative",paddingTop:n/2+2,paddingBottom:n/2+2},children:[u.jsx("div",{style:{height:t,borderRadius:t/2,background:"rgba(128,128,128,0.18)"}}),u.jsx("div",{style:{position:"absolute",top:n/2+2,left:0,height:t,borderRadius:t/2,width:`${s}%`,background:"#ff7a29",transition:"width .4s ease"}}),o.map(l=>{const a=Number.isFinite(l.threshold)?Math.max(0,Math.min(1,l.threshold)):1,c=i>=a,f=l.status==="claimed",p=f?"#15803d":c?"#cf4407":"#c9cdd2";return u.jsx("div",{title:`${l.title}（阈值 ${Math.round(a*100)}%）`,style:{position:"absolute",top:2,left:`${Math.round(a*100)}%`,transform:"translateX(-50%)",width:n,height:n,borderRadius:"50%",background:f?p:"#fff",border:`2px solid ${p}`,boxSizing:"border-box",display:"flex",alignItems:"center",justifyContent:"center"},children:f||c?u.jsx("span",{style:{width:n/3,height:n/3,borderRadius:"50%",background:p}}):null},l.id)})]})}}}};Wl.meta=Bl;const zy={title:"夏日狂欢 · 7 日签到",tasks:[{id:"t1",title:"每日签到",progress:1,status:"completed"},{id:"t2",title:"浏览会场 3 个商品",progress:.6,status:"available"},{id:"t3",title:"邀请 1 位好友",progress:0,status:"locked"}],rewards:[{id:"r1",title:"5 元无门槛券",threshold:.5,icon:"🎟️",desc:"浏览达标即可领取"},{id:"r2",title:"20 元会员券",threshold:.9,icon:"💎",desc:"邀请好友后解锁"},{id:"r3",title:"终极大礼包",threshold:1,icon:"🎁",desc:"全部任务完成发放"}],rules:[]},Oy=I(D,[oe(),Wl(),ee()]),Dy={slug:"milestone",title:"里程碑 MilestoneBarPlugin",group:"plugin",intro:"把奖励阈值画成轨道节点（绿=已领 / 橙=可领 / 灰=未达标），与数字进度条上下互补。"};function Iy(){return u.jsx(Oy,{data:zy})}const Fy=Object.freeze(Object.defineProperty({__proto__:null,default:Iy,meta:Dy},Symbol.toStringTag,{value:"Module"})),By="CouponStackPlugin",Wy="券堆叠：把奖励渲染成一摞错位的票券卡（RewardClaim 的变体渲染），同槽位独占。",Uy="0.1.0",Hy=["ui","奖励","变体","独占"],Vy=[{name:"stackOffset",type:"number",default:"6",description:"相邻券卡的横向错位偏移（px）"},{name:"claimLabel",type:"string",default:"领取",description:"可领态按钮文案"},{name:"claimedLabel",type:"string",default:"已领取",description:"已领取态文案"},{name:"lockedLabel",type:"string",default:"未解锁",description:"锁定态文案"}],Qy=[{name:"renderRewards",when:"每次渲染；ctx.rewards 非空时",description:"渲染票券卡列表；无奖励时返回 null"},{name:"ctx.claim",when:"点击「领取」按钮",description:"领取对应奖励（内部态更新 + onClaim 回调），卡片随即变「已领取」"}],Ky=[],Gy="领取走 ctx.claim(rewardId)（内核统一入口），自身不持有领取状态。",Yy=["票券式卡面（虚线边 + 堆叠错位）","与 RewardClaim 声明互斥，装配期自动去重","三态配色守 ADR-13（白字按钮 #cf4407）"],Jy=["券包领取页","礼包兑换","需要弱化按钮、强化券面设计的场景"],Xy=["同时挂载 RewardClaim 时本插件被去重（priority 29 < 30）；想用堆叠风格就别挂 RewardClaim"],Zy="const Activity = withPlugins(ActivityCore, [createCouponStackPlugin()]);",qy=[{name:"默认堆叠",description:"替换 RewardClaim 的票券风格渲染",src:"createCouponStackPlugin()",config:{}},{name:"加大错位",description:"堆叠手感更明显",src:"createCouponStackPlugin({ stackOffset: 12 })",config:{stackOffset:12}}],Ul={name:By,description:Wy,since:Uy,tags:Hy,props:Vy,events:Qy,methods:Ky,methodsNote:Gy,features:Yy,useCases:Jy,notes:Xy,example:Zy,examples:qy},Hl=(e={})=>{const{stackOffset:t=6,claimLabel:n="领取",claimedLabel:r="已领取",lockedLabel:i="未解锁"}=e;return{name:"CouponStackPlugin",version:"0.1.0",description:Ul.description,priority:29,exclusiveSlots:["renderRewards"],config:e,hooks:{renderRewards:o=>{const s=o.rewards??[];return s.length===0?null:u.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:s.map((l,a)=>{const c=(a%2===0?-1:1)*t*((a+1)/2),f=Math.round(Math.max(0,Math.min(1,Number.isFinite(l.threshold)?l.threshold:1))*100);let p;return l.status==="claimable"?p=u.jsx("button",{type:"button",onClick:()=>o.claim(l.id),style:{border:"none",borderRadius:999,padding:"5px 16px",fontSize:13,fontWeight:700,cursor:"pointer",background:"#cf4407",color:"#fff"},children:n}):l.status==="claimed"?p=u.jsx("span",{style:{borderRadius:999,padding:"5px 16px",fontSize:13,fontWeight:700,background:"rgba(21,128,61,0.10)",color:"#15803d"},children:r}):p=u.jsx("span",{style:{borderRadius:999,padding:"5px 16px",fontSize:13,fontWeight:700,background:"rgba(93,99,106,0.10)",color:"#5d636a"},children:i}),u.jsxs("div",{"data-testid":"activity-coupon",style:{display:"flex",alignItems:"center",gap:12,padding:"12px 16px",borderRadius:12,border:"1px dashed #d8dce0",background:"#fff",boxShadow:"0 2px 6px rgba(0,0,0,0.06)",transform:`translateX(${c}px)`,transition:"transform .25s ease"},children:[u.jsx("span",{style:{fontSize:22},"aria-hidden":!0,children:l.icon??"🎟️"}),u.jsxs("div",{style:{flex:1,minWidth:0},children:[u.jsx("div",{style:{fontSize:14,fontWeight:700,color:"#1f2328"},children:l.title}),u.jsx("div",{style:{fontSize:12,color:"#5d636a",marginTop:2},children:l.desc??`总体进度达 ${f}% 解锁`})]}),p]},l.id)})})}}}};Hl.meta=Ul;const e0={title:"夏日狂欢 · 7 日签到",tasks:[{id:"t1",title:"每日签到",progress:1,status:"completed"},{id:"t2",title:"浏览会场 3 个商品",progress:.6,status:"available"},{id:"t3",title:"邀请 1 位好友",progress:0,status:"locked"}],rewards:[{id:"r1",title:"5 元无门槛券",threshold:.5,icon:"🎟️",desc:"浏览达标即可领取"},{id:"r2",title:"20 元会员券",threshold:.9,icon:"💎",desc:"邀请好友后解锁"},{id:"r3",title:"终极大礼包",threshold:1,icon:"🎁",desc:"全部任务完成发放"}],rules:[]},t0=I(D,[Hl(),ee()]),n0={slug:"coupon-stack",title:"券堆叠 CouponStackPlugin",group:"plugin",intro:"票券式卡面替代 RewardClaim 的行式列表；两者同槽独占，同时挂载时高 priority 者胜。"};function r0(){return u.jsx(t0,{data:e0,onClaim:e=>console.log("claim",e)})}const i0=Object.freeze(Object.defineProperty({__proto__:null,default:r0,meta:n0},Symbol.toStringTag,{value:"Module"}));function o0(e){return e?typeof e=="string"?[{content:e}]:e:[]}function s0(e){var p;const{context:t,triggerLabel:n,title:r,maxWidth:i}=e,[o,s]=x.useState(!1),l=x.useRef(null),a=x.useRef(null),c=x.useRef(null);x.useEffect(()=>{var w;if(!o)return;const m=document.body.style.overflow,h=document.activeElement,y=l.current;document.body.style.overflow="hidden",(w=c.current)==null||w.focus();const P=g=>{if(g.key==="Escape"){g.preventDefault(),s(!1);return}if(g.key!=="Tab"||!a.current)return;const d=a.current.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');if(d.length===0)return;const v=d[0],k=d[d.length-1];g.shiftKey&&document.activeElement===v?(g.preventDefault(),k.focus()):!g.shiftKey&&document.activeElement===k&&(g.preventDefault(),v.focus())};return document.addEventListener("keydown",P),()=>{var g;document.removeEventListener("keydown",P),document.body.style.overflow=m,y!=null&&y.isConnected?y.focus():(g=h==null?void 0:h.focus)==null||g.call(h)}},[o]);const f=o0((p=t.data)==null?void 0:p.rules);return f.length===0?null:u.jsxs(u.Fragment,{children:[u.jsxs("button",{ref:l,type:"button","aria-haspopup":"dialog","aria-expanded":o,onClick:()=>s(!0),style:{border:"1px solid #d8dce0",borderRadius:8,padding:"6px 14px",fontSize:13,background:"#fff",color:"#1f2328",cursor:"pointer"},children:[n," ",u.jsx("span",{"aria-hidden":!0,children:"›"})]}),o&&u.jsx("div",{ref:a,role:"dialog","aria-modal":"true","aria-label":r,onClick:()=>s(!1),style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.55)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e3,padding:24},children:u.jsxs("div",{onClick:m=>m.stopPropagation(),style:{background:"#fff",borderRadius:14,maxWidth:i,width:"100%",maxHeight:"70vh",overflow:"auto",padding:"18px 20px",boxShadow:"0 12px 40px rgba(0,0,0,0.25)"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:10},children:[u.jsx("strong",{style:{fontSize:15,color:"#1f2328"},children:r}),u.jsx("button",{ref:c,type:"button","aria-label":"关闭",onClick:()=>s(!1),style:{border:"none",background:"transparent",fontSize:18,lineHeight:1,color:"#5d636a",cursor:"pointer",padding:4},children:"✕"})]}),f.map((m,h)=>u.jsxs("div",{style:{marginBottom:10},children:[m.title&&u.jsx("div",{style:{fontSize:13,fontWeight:700,color:"#1f2328"},children:m.title}),u.jsx("div",{style:{fontSize:12,lineHeight:1.7,color:"#5d636a"},children:m.content})]},h))]})})]})}const l0="RuleModalPlugin",a0="弹窗版规则：规则区只放触发按钮，点击弹出模态窗展示完整规则（RuleExpand 的变体渲染），同槽位独占。",u0="0.1.0",c0=["ui","规则","弹窗","独占"],d0=[{name:"triggerLabel",type:"string",default:"活动规则",description:"触发按钮文案"},{name:"title",type:"string",default:"活动规则",description:"弹窗标题"},{name:"maxWidth",type:"number",default:"420",description:"弹窗最大宽度（px）"}],f0=[{name:"renderRules",when:"每次渲染；data.rules 非空时",description:"渲染触发按钮；无规则时返回 null"},{name:"open/close",when:"点击按钮 / 点击遮罩或 ✕",description:"弹窗开合为插件内部 useState，aria-haspopup / aria-expanded 同步"}],p0=[],g0="开合状态在插件内部自持，不调用任何上下文方法。",m0=["规则区零占位（只留一个按钮），主视觉更干净","与 RuleExpand 声明互斥，装配期自动去重","支持 string 与 {title, content}[] 两种 rules 形态"],h0=["规则长且多的复杂活动","需要保持活动页沉浸感的场景","移动端全屏规则查看"],v0=["弹窗用 position:fixed，祖先有 transform/filter 时 fixed 会降级为相对定位——套在带变换的容器里时注意"],y0="const Activity = withPlugins(ActivityCore, [createRuleModalPlugin()]);",x0=[{name:"默认弹窗规则",description:"替换 RuleExpand 的弹窗风格渲染",src:"createRuleModalPlugin()",config:{}},{name:"自定义入口文案",description:"按钮改成「玩法说明」",src:'createRuleModalPlugin({ triggerLabel: "玩法说明", title: "玩法说明" })',config:{triggerLabel:"玩法说明",title:"玩法说明"}}],Vl={name:l0,description:a0,since:u0,tags:c0,props:d0,events:f0,methods:p0,methodsNote:g0,features:m0,useCases:h0,notes:v0,example:y0,examples:x0},Ql=(e={})=>{const{triggerLabel:t="活动规则",title:n="活动规则",maxWidth:r=420}=e;return{name:"RuleModalPlugin",version:"0.1.0",description:Vl.description,priority:39,exclusiveSlots:["renderRules"],config:e,hooks:{renderRules:i=>u.jsx(s0,{context:i,triggerLabel:t,title:n,maxWidth:r})}}};Ql.meta=Vl;const P0={title:"夏日狂欢 · 7 日签到",tasks:[{id:"t1",title:"每日签到",progress:1,status:"completed"},{id:"t2",title:"浏览会场 3 个商品",progress:.6,status:"available"},{id:"t3",title:"邀请 1 位好友",progress:0,status:"locked"}],rewards:[],rules:[{title:"活动时间",content:"2024.07.01 - 2024.07.07，逾期任务与奖励失效。"},{title:"领取规则",content:"奖励按总体进度阈值解锁，达标后点击「领取」发放至账户；券类奖励有效期 7 天。"},{title:"特别说明",content:"邀请任务需好友完成注册并首单，视为有效助力；异常账号不予发放。"}]},k0=I(D,[Ql(),ee()]),w0={slug:"rule-modal",title:"弹窗规则 RuleModalPlugin",group:"plugin",intro:"规则折叠的弹窗形态：入口只剩一个按钮，规则长文收进模态窗；与 RuleExpand 同槽独占。"};function S0(){return u.jsx(k0,{data:P0})}const C0=Object.freeze(Object.defineProperty({__proto__:null,default:S0,meta:w0},Symbol.toStringTag,{value:"Module"}));function Vn(e,t){const n=Math.sin(e*127.1+t*311.7)*43758.5453;return n-Math.floor(n)}const Lu=["#ff7a29","#cf4407","#15803d","#5d636a","#f5b60f"];function _0(){const[e,t]=x.useState(!1);return x.useEffect(()=>{var i,o;const n=(i=window.matchMedia)==null?void 0:i.call(window,"(prefers-reduced-motion: reduce)");if(!n)return;const r=()=>t(n.matches);return r(),(o=n.addEventListener)==null||o.call(n,"change",r),()=>{var s;return(s=n.removeEventListener)==null?void 0:s.call(n,"change",r)}},[]),e}function b0({progress:e,count:t,durationSec:n,threshold:r}){const i=_0();if(!(e>=(Number.isFinite(r)?r:1))||i)return null;const s=Math.max(0,Math.min(60,Math.floor(Number.isFinite(t)?t:28))),l=Number.isFinite(n)&&n>0?n:2.6,a=Array.from({length:s},(c,f)=>{const p=Vn(f,1)*100,m=Vn(f,2)*1.2,h=l*(.7+Vn(f,3)*.6),y=5+Vn(f,4)*5,P=Lu[f%Lu.length],w=Vn(f,5)>.6;return u.jsx("span",{"aria-hidden":!0,style:{position:"absolute",top:-12,left:`${p}%`,width:y,height:y*(w?1:1.8),borderRadius:w?"50%":1,background:P,animation:`va-confetti-fall ${h}s linear ${m}s 2`,opacity:.9}},f)});return u.jsxs("div",{style:{position:"absolute",inset:0,overflow:"hidden",pointerEvents:"none"},children:[u.jsx("style",{children:"@keyframes va-confetti-fall{0%{transform:translateY(0) rotate(0)}100%{transform:translateY(340px) rotate(540deg)}}"}),a]})}const R0="ConfettiPlugin",T0="庆祝彩纸：进度达成阈值（默认 100%）时容器内下落彩纸动画；与 ProgressFx 文字浮层同槽共存。",j0="0.1.0",E0=["ui","庆祝","浮层","动画"],$0=[{name:"count",type:"number",default:"28",description:"彩纸数量"},{name:"durationSec",type:"number",default:"2.6",description:"单轮下落基准时长（秒，每片带随机扰动）"},{name:"threshold",type:"number",default:"1",description:"触发阈值（ctx.progress ≥ threshold 时庆祝）"}],A0=[{name:"renderOverlay",when:"每次渲染；progress 达阈值时",description:"渲染彩纸层（absolute + pointerEvents:none，不挡交互）；未达阈值返回 null"}],L0=[],N0="只读取 ctx.progress，不调用任何上下文方法；动画用 CSS keyframes（渲染时注入一次 <style>）。",M0=["overlay 槽位天然可叠加，与 ProgressFx 的「🎉 进度达成」横幅同屏","确定性伪随机：重渲染不跳变","纯形状无文字，零对比度负担"],z0=["进度达成庆祝","大奖开出氛围","活动结束撒花"],O0=["彩纸循环下落；想要一轮即止可外层按需卸载插件。low-end 设备上 count 建议 ≤ 40"],D0="const Activity = withPlugins(ActivityCore, [createConfettiPlugin()]);",I0=[{name:"默认彩纸",description:"100% 时与文字横幅同屏庆祝",src:"createConfettiPlugin()",config:{}},{name:"提前庆祝",description:"90% 就开始撒花",src:"createConfettiPlugin({ threshold: 0.9, count: 40 })",config:{threshold:.9,count:40}}],Kl={name:R0,description:T0,since:j0,tags:E0,props:$0,events:A0,methods:L0,methodsNote:N0,features:M0,useCases:z0,notes:O0,example:D0,examples:I0},Gl=(e={})=>{const{count:t=28,durationSec:n=2.6,threshold:r=1}=e;return{name:"ConfettiPlugin",version:"0.1.0",description:Kl.description,priority:50,config:e,hooks:{renderOverlay:i=>u.jsx(b0,{progress:i.progress??0,count:t,durationSec:n,threshold:r})}}};Gl.meta=Kl;const F0={title:"夏日狂欢 · 7 日签到",tasks:[{id:"t1",title:"每日签到",progress:1,status:"completed"},{id:"t2",title:"浏览会场 3 个商品",progress:1,status:"completed"},{id:"t3",title:"邀请 1 位好友",progress:1,status:"completed"}],rewards:[{id:"r1",title:"5 元无门槛券",threshold:.5,icon:"🎟️",desc:"浏览达标即可领取"},{id:"r2",title:"20 元会员券",threshold:.9,icon:"💎",desc:"邀请好友后解锁"},{id:"r3",title:"终极大礼包",threshold:1,icon:"🎁",desc:"全部任务完成发放"}],rules:[]},B0=I(D,[oe(),Gl(),Me(),ee()]),W0={slug:"confetti",title:"彩纸庆祝 ConfettiPlugin",group:"plugin",intro:"100% 时彩纸下落；与 ProgressFx 的文字横幅同屏共存——overlay 槽位可叠加、不独占。"};function U0(){return u.jsx(B0,{data:F0,onClaim:e=>console.log("claim",e)})}const H0=Object.freeze(Object.defineProperty({__proto__:null,default:U0,meta:W0},Symbol.toStringTag,{value:"Module"})),V0="ActivityHeaderPlugin",Q0="活动头部横幅：标题 + 副标题 + 标签 + 状态徽章（按 data.endTime 派生「剩 N 天 / 今日截止 / 已结束」）。",K0="0.1.0",G0=["ui","头部","横幅"],Y0=[{name:"title",type:"string",default:"data.title",description:"主标题；不传则读 data.title，两者都没有时不渲染"},{name:"subtitle",type:"string",default:"—",description:"副标题，一句话说明活动卖点（13px / #5d636a）"},{name:"tags",type:"string[]",default:"[]",description:"标签行（如「限时」「新人专享」），浅橙 chip 逐个渲染"},{name:"badge",type:"string",default:"按 endTime 派生",description:"状态徽章文案；显式传入时优先，传空串则不显示徽章"},{name:"icon",type:"string",default:"—",description:"标题前图标（emoji 或单字符），已标 aria-hidden 不干扰读屏"},{name:"align",type:'"left" | "center"',default:"left",description:"内容对齐方式，center 适合抽奖 / 节日大促类页头"}],J0=[{name:"renderHeader",when:"每次渲染；title 与 subtitle 同时为空时返回 null 让出槽位",description:"在 Core 最顶部渲染 <header> 横幅，读取 ctx.data.title 与 ctx.data.endTime"}],X0=[],Z0="纯展示，不调用任何上下文方法；徽章按 Date.now() 与 data.endTime 的差值现算，不持有计时器（秒级倒计时请叠加 CountdownTimerPlugin）。",q0=["徽章三态由数据派生，业务侧只需给 endTime","标签行可空，不占位","浅橙底 + 深字，正文对比度约 15:1"],e1=["大促会场页头","签到活动标题卡","抽奖活动 Banner 文案区"],t1=["徽章文案随父组件渲染刷新，不是每秒跳动的倒计时","title 与 subtitle 都为空时整块让出槽位，不会留空白"],Yl={name:V0,description:Q0,since:K0,tags:G0,props:Y0,events:J0,methods:X0,methodsNote:Z0,features:q0,useCases:e1,notes:t1};function n1(e){if(e==null)return null;const t=typeof e=="number"?e:Date.parse(e);if(Number.isNaN(t))return null;const n=t-Date.now();if(n<=0)return"已结束";const r=Math.ceil(n/864e5);return r<=1?"今日截止":`剩 ${r} 天`}const Xi=(e={})=>{const{title:t,subtitle:n,tags:r=[],badge:i,icon:o,align:s="left"}=e;return{name:"ActivityHeaderPlugin",version:"0.1.0",description:Yl.description,priority:5,config:e,hooks:{renderHeader:l=>{var p,m;const a=(p=l.data)==null?void 0:p.title,c=t??a;if(!c&&!n)return null;const f=i??n1((m=l.data)==null?void 0:m.endTime);return u.jsx("header",{style:{display:"flex",alignItems:"flex-start",gap:12,padding:"14px 16px",borderRadius:14,background:"linear-gradient(135deg, #fff5ee 0%, #fffaf7 100%)",border:"1px solid rgba(207,68,7,0.14)",textAlign:s==="center"?"center":"left",justifyContent:s==="center"?"center":"flex-start"},children:u.jsxs("div",{style:{minWidth:0,flex:1},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap",justifyContent:s==="center"?"center":"flex-start"},children:[o&&u.jsx("span",{"aria-hidden":"true",style:{fontSize:20,lineHeight:1},children:o}),u.jsx("h2",{style:{margin:0,fontSize:19,fontWeight:700,lineHeight:1.35,color:"#1f2328"},children:c}),f&&u.jsx("span",{style:{flex:"none",padding:"2px 8px",borderRadius:999,background:"#cf4407",color:"#fff",fontSize:12,fontWeight:600,lineHeight:1.6},children:f})]}),n&&u.jsx("p",{style:{margin:"6px 0 0",fontSize:13,lineHeight:1.6,color:"#5d636a"},children:n}),r.length>0&&u.jsx("ul",{style:{display:"flex",gap:6,flexWrap:"wrap",margin:"10px 0 0",padding:0,listStyle:"none",justifyContent:s==="center"?"center":"flex-start"},children:r.map((h,y)=>u.jsx("li",{style:{padding:"2px 8px",borderRadius:6,background:"rgba(207,68,7,0.1)",color:"#a33a06",fontSize:12,lineHeight:1.6},children:h},`${h}-${y}`))})]})})}}}};Xi.meta=Yl;const r1={title:"夏日狂欢 · 7 日签到",endTime:Date.now()+7*24*60*60*1e3,tasks:[{id:"t1",title:"每日签到",progress:1,status:"completed"},{id:"t2",title:"浏览会场 3 个商品",progress:.6,status:"available"},{id:"t3",title:"邀请 1 位好友",progress:0,status:"locked"}],rewards:[{id:"r1",title:"5 元无门槛券",threshold:.5,icon:"🎟️"},{id:"r2",title:"20 元会员券",threshold:.9,icon:"💎"}],rules:[]},i1=I(D,[Xi({subtitle:"连续签到 7 天，最高领 20 元会员券",tags:["限时","签到","新人专享"],icon:"☀️"}),oe(),ee()]),o1={slug:"header",title:"头部横幅 ActivityHeaderPlugin",group:"plugin",intro:"标题 + 副标题 + 标签 + 状态徽章；徽章由 data.endTime 派生，不写死文案。"};function s1(){return u.jsx(i1,{data:r1})}const l1=Object.freeze(Object.defineProperty({__proto__:null,default:s1,meta:o1},Symbol.toStringTag,{value:"Module"})),a1="ProgressRingPlugin",u1="环形进度：SVG 双环 + 中心百分比 + 右侧「已完成 x/y 项 / 距下一档还差 N%」文案。",c1="0.1.0",d1=["ui","进度区","环形"],f1=[{name:"size",type:"number",default:"104",description:"圆环直径（px），同时决定 svg 的 viewBox 边长"},{name:"strokeWidth",type:"number",default:"10",description:"环宽（px），半径 = (size - strokeWidth) / 2"},{name:"label",type:"string",default:'"总进度"',description:"环右侧标题文案"},{name:"showCaption",type:"boolean",default:"true",description:"是否显示「已完成 x/y 项」与「距下一档还差 N%」两行明细"},{name:"color",type:"string",default:'"#cf4407"',description:"进度环颜色（轨道固定 rgba(128,128,128,0.18)）"},{name:"order",type:"number",default:"0",description:"同槽位排序键（由内核 config.order 消费）：升序靠前，用于把环放在进度条上/下方"}],p1=[{name:"renderProgress",when:"每次渲染（进度、任务、奖励任一变化）",description:"在进度槽渲染环形进度 + 文案；不返回 null，永远是常驻区块"}],g1=[{name:"ctx.progress",signature:"number // 0..1",description:"读取总体加权进度（由 computeProgress 派生），插件内再 clamp 到 0..1 防越界"},{name:"ctx.tasks / ctx.rewards",signature:"ActivityTask[] / ActivityRewardWithStatus[]",description:"只读派生数据：tasks 用于统计完成项数，rewards 用于计算距下一档的百分比"}],m1="不调用 ctx.claim / ctx.setState，纯读取派生数据；进度变化靠父级重渲染传播。",h1=["SVG 绘制，无 canvas / 无第三方图表库","中心数字 aria-hidden，读屏只读 role=img 的 aria-label","环形与文案同排，窄屏下文案自动换行不撑破"],v1=["签到进度概览","成长值 / 等级进度","众筹目标完成度"],y1=["距下一档取「阈值 > 当前进度且未领取」中最小的一档，全部解锁时显示「全部奖励已解锁」","与 ProgressFx / MilestoneBar 同槽共存时按 order 升序、priority 降序纵向堆叠"],Jl={name:a1,description:u1,since:c1,tags:d1,props:f1,events:p1,methods:g1,methodsNote:m1,features:h1,useCases:v1,notes:y1},Xl=(e={})=>{const{size:t=104,strokeWidth:n=10,label:r="总进度",showCaption:i=!0,color:o="#cf4407"}=e;return{name:"ProgressRingPlugin",version:"0.1.0",description:Jl.description,priority:15,config:e,hooks:{renderProgress:s=>{const l=Math.min(1,Math.max(0,s.progress??0)),a=s.tasks??[],c=s.rewards??[],f=Math.round(l*100),p=(t-n)/2,m=2*Math.PI*p,h=m*l,y=t/2,P=a.filter(d=>d.status==="completed").length,w=c.filter(d=>d.status!=="claimed"&&d.threshold>l).sort((d,v)=>d.threshold-v.threshold)[0],g=w?Math.max(1,Math.ceil((w.threshold-l)*100)):0;return u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16},children:[u.jsxs("div",{role:"img","aria-label":`${r} ${f}%`,style:{position:"relative",width:t,height:t,flex:"none"},children:[u.jsxs("svg",{width:t,height:t,viewBox:`0 0 ${t} ${t}`,children:[u.jsx("circle",{cx:y,cy:y,r:p,fill:"none",stroke:"rgba(128,128,128,0.18)",strokeWidth:n}),u.jsx("circle",{cx:y,cy:y,r:p,fill:"none",stroke:o,strokeWidth:n,strokeLinecap:"round",strokeDasharray:`${h} ${m-h}`,transform:`rotate(-90 ${y} ${y})`,style:{transition:"stroke-dasharray .4s ease"}})]}),u.jsxs("div",{"aria-hidden":"true",style:{position:"absolute",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",pointerEvents:"none"},children:[u.jsxs("span",{style:{fontSize:22,fontWeight:700,lineHeight:1,color:"#1f2328"},children:[f,u.jsx("span",{style:{fontSize:12,fontWeight:600},children:"%"})]}),u.jsx("span",{style:{marginTop:2,fontSize:11,color:"#5d636a"},children:"完成"})]})]}),u.jsxs("div",{style:{minWidth:0},children:[u.jsx("div",{style:{fontSize:14,fontWeight:600,color:"#1f2328"},children:r}),i&&u.jsxs("div",{style:{marginTop:4,fontSize:12,lineHeight:1.7,color:"#5d636a"},children:["已完成 ",P,"/",a.length," 项",c.length>0&&u.jsxs(u.Fragment,{children:[u.jsx("br",{}),w?`距「${w.title}」还差 ${g}%`:"全部奖励已解锁"]})]})]})]})}}}};Xl.meta=Jl;const x1={title:"夏日狂欢 · 7 日签到",tasks:[{id:"t1",title:"每日签到",progress:1,status:"completed"},{id:"t2",title:"浏览会场 3 个商品",progress:.6,status:"available"},{id:"t3",title:"邀请 1 位好友",progress:0,status:"locked"}],rewards:[{id:"r1",title:"5 元无门槛券",threshold:.5,icon:"🎟️"},{id:"r2",title:"20 元会员券",threshold:.9,icon:"💎"},{id:"r3",title:"终极大礼包",threshold:1,icon:"🎁"}],rules:[]},P1=I(D,[Xl({size:112,label:"签到总进度",order:0}),oe({order:1}),ee()]),k1={slug:"progress-ring",title:"环形进度 ProgressRingPlugin",group:"plugin",intro:"SVG 双环 + 中心百分比 + 「距下一档还差 N%」；与进度条同槽上下互补。"};function w1(){return u.jsx(P1,{data:x1})}const S1=Object.freeze(Object.defineProperty({__proto__:null,default:w1,meta:k1},Symbol.toStringTag,{value:"Module"}));function C1({text:e}){const[t,n]=x.useState(!1);return x.useEffect(()=>{const r=requestAnimationFrame(()=>n(!0));return()=>cancelAnimationFrame(r)},[]),u.jsxs("div",{role:"status",style:{display:"flex",alignItems:"center",gap:8,maxWidth:260,padding:"9px 12px",borderRadius:10,background:"#1f2328",color:"#fff",fontSize:13,lineHeight:1.5,boxShadow:"0 6px 20px rgba(0,0,0,0.22)",opacity:t?1:0,transform:t?"translateY(0)":"translateY(8px)",transition:"opacity .22s ease, transform .22s ease",pointerEvents:"none"},children:[u.jsx("span",{"aria-hidden":"true",style:{flex:"none",width:16,height:16,borderRadius:"50%",background:"#15803d",color:"#fff",fontSize:11,lineHeight:"16px",textAlign:"center"},children:"✓"}),u.jsx("span",{children:e})]})}function _1({ctx:e,durationMs:t,max:n,position:r,message:i}){const[o,s]=x.useState([]),l=x.useRef([...e.claimedIds??[]]),a=(e.claimedIds??[]).join("|"),c=x.useRef(new Map);return x.useEffect(()=>()=>{for(const f of c.current.values())clearTimeout(f);c.current.clear()},[]),x.useEffect(()=>{const f=l.current,p=e.claimedIds??[],m=p.filter(P=>!f.includes(P));if(l.current=p,m.length===0)return;const h=e.rewards??[],y=m.map((P,w)=>{var g,d;return{key:`${P}-${Date.now()}-${w}`,text:(i==null?void 0:i(((g=h.find(v=>v.id===P))==null?void 0:g.title)??"奖励"))??`已领取：${((d=h.find(v=>v.id===P))==null?void 0:d.title)??"奖励"}`}});s(P=>{const w=[...P,...y],g=w.slice(0,Math.max(0,w.length-n));for(const d of g){const v=c.current.get(d.key);v!==void 0&&(clearTimeout(v),c.current.delete(d.key))}return w.slice(-n)});for(const P of y){const w=setTimeout(()=>{c.current.delete(P.key),s(g=>g.filter(d=>d.key!==P.key))},t);c.current.set(P.key,w)}},[a,t,n]),o.length===0?null:u.jsx("div",{"aria-live":"polite",style:{position:"absolute",display:"flex",flexDirection:"column",gap:8,pointerEvents:"none",...r==="top-center"?{top:12,left:"50%",transform:"translateX(-50%)",alignItems:"center"}:{bottom:12,right:12,alignItems:"flex-end"}},children:o.map(f=>u.jsx(C1,{text:f.text},f.key))})}const b1="ClaimToastPlugin",R1="领取成功轻提示：监听 claimedIds 新增项，在浮层右下角（或顶部居中）淡入「已领取：xx」，到时自动消失。",T1="0.1.0",j1=["ui","反馈","浮层"],E1=[{name:"durationMs",type:"number",default:"2400",description:"单条 toast 停留时长（毫秒）"},{name:"max",type:"number",default:"3",description:"同屏最多条数，超出丢弃最早的"},{name:"position",type:'"bottom-right" | "top-center"',default:'"bottom-right"',description:"出现位置；bottom-right 适合移动端底部拇指区，top-center 适合桌面端"},{name:"message",type:"(title: string) => string",default:"(t) => `已领取：${t}`",description:"自定义文案函数，入参是奖励标题"}],$1=[{name:"renderOverlay",when:"每次渲染；队列为空时返回 null（不占位）",description:"在浮层槽挂载 ClaimToastLayer，内部只渲染当前待显示的 toast 队列"},{name:"claimedIds 变化",when:'context.claimedIds 内容指纹（join("|")）发生变化时',description:"用 diff 找出新增的奖励 id，逐条生成 toast；首屏已有的领取记录不补弹"}],A1=[{name:"ctx.claimedIds",signature:"string[]",description:"读取已领取奖励 id；作为 change source 触发 toast"},{name:"ctx.rewards",signature:"ActivityRewardWithStatus[]",description:"按 id 查奖励标题，用于拼文案"}],L1="内部用 useState 持有 toast 队列、useRef 记录已处理的 claimedIds；不改写上下文状态，也不调用 claim。",N1=["首屏不补弹（挂载时的 claimedIds 视为已读）","多批连续领取各自计时，不会互相吞掉","深底白字，对比度约 14.6:1；role=status + aria-live=polite 播报"],M1=["领取优惠券成功提示","任务奖励到账确认","积分兑换结果反馈"],z1=["与 ConfettiPlugin 可共存：confetti 负责全屏庆祝，toast 负责逐条确认","overlay 容器本身 pointer-events:none，toast 不拦截点击，不会挡住下方按钮"],Zl={name:b1,description:R1,since:T1,tags:j1,props:E1,events:$1,methods:A1,methodsNote:L1,features:N1,useCases:M1,notes:z1},Zi=(e={})=>{const{durationMs:t=2400,max:n=3,position:r="bottom-right",message:i}=e;return{name:"ClaimToastPlugin",version:"0.1.0",description:Zl.description,priority:55,config:e,hooks:{renderOverlay:o=>u.jsx(_1,{ctx:o,durationMs:t,max:n,position:r,message:i})}}};Zi.meta=Zl;const O1={title:"夏日狂欢 · 7 日签到",tasks:[{id:"t1",title:"每日签到",progress:1,status:"completed"},{id:"t2",title:"浏览会场 3 个商品",progress:.6,status:"available"},{id:"t3",title:"邀请 1 位好友",progress:0,status:"locked"}],rewards:[{id:"r1",title:"5 元无门槛券",threshold:.5,icon:"🎟️",desc:"浏览达标即可领取"},{id:"r2",title:"20 元会员券",threshold:.9,icon:"💎",desc:"邀请好友后解锁"}],rules:[]},D1=I(D,[oe(),ee(),Me(),Zi({durationMs:2600,position:"bottom-right"})]),I1={slug:"claim-toast",title:"领取提示 ClaimToastPlugin",group:"plugin",intro:"领取后右下角淡入「已领取：xx」，2.6s 自动消失；多张排队、互不吞没。"};function F1(){return u.jsx(D1,{data:O1})}const B1=Object.freeze(Object.defineProperty({__proto__:null,default:F1,meta:I1},Symbol.toStringTag,{value:"Module"}));function Lo(e,t,n,r){const i=Number.isFinite(e)?e:r;return Math.max(t,Math.min(n,Math.floor(i)))}function W1({ctx:e,title:t,total:n,used:r,onInvite:i,maxAvatars:o}){var v;const s=(v=e.data)==null?void 0:v.share,l=Lo((s==null?void 0:s.total)??n,0,20,3),a=Lo((s==null?void 0:s.used)??r,0,l,0),[c,f]=x.useState(a);x.useEffect(()=>f(a),[a]);const p=s==null?void 0:s.helpers,m=Array.isArray(p)?p.filter(k=>k&&typeof k=="object"):[],h=Math.min(c,l),y=h>=l,P=Lo(o,0,10,5),w=m.slice(0,P),g=Math.max(0,m.length-w.length),d=()=>{if(!y){if(i){i();return}f(k=>Math.min(l,k+1))}};return u.jsxs("section",{"aria-label":t,style:{padding:"12px 14px",borderRadius:12,border:"1px solid rgba(128,128,128,0.18)",background:"#fff"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[u.jsx("span",{style:{flex:1,fontSize:14,fontWeight:600,color:"#1f2328"},children:t}),u.jsxs("span",{style:{fontSize:12,color:"#5d636a"},children:["今日助力 ",u.jsx("strong",{style:{color:"#1f2328"},children:h}),"/",l]})]}),u.jsx("div",{role:"img","aria-label":`助力进度 ${h}/${l}`,style:{display:"flex",gap:4,marginTop:10},children:Array.from({length:l},(k,S)=>u.jsx("span",{style:{flex:1,height:6,borderRadius:3,background:S<h?"#cf4407":"rgba(128,128,128,0.18)",transition:"background .25s ease"}},S))}),u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginTop:12},children:[u.jsxs("div",{style:{display:"flex",flex:1,alignItems:"center",minWidth:0},children:[w.map((k,S)=>u.jsx("span",{title:k.name??"",style:{width:26,height:26,marginLeft:S===0?0:-8,borderRadius:"50%",border:"2px solid #fff",background:"rgba(207,68,7,0.12)",color:"#a33a06",fontSize:12,lineHeight:"22px",textAlign:"center",overflow:"hidden",whiteSpace:"nowrap"},children:k.avatar??(k.name?String(k.name).slice(0,1):"?")},k.id??`helper-${S}`)),g>0&&u.jsxs("span",{style:{marginLeft:6,fontSize:12,color:"#5d636a"},children:["+",g]}),u.jsx("span",{style:{marginLeft:w.length===0?0:8,fontSize:12,lineHeight:1.6,color:"#5d636a"},children:y?"今日助力已满，明天再来":`还差 ${l-h} 人解锁下一档奖励`})]}),u.jsx("button",{type:"button",disabled:y,onClick:d,style:{flex:"none",border:"none",borderRadius:999,padding:"7px 14px",fontSize:13,fontWeight:600,background:y?"#5d636a":"#cf4407",color:"#fff",cursor:y?"default":"pointer"},children:y?"今日已满":"邀请助力"})]})]})}const U1="ShareBoostPlugin",H1="好友助力：分段名额进度 + 助力头像堆（超出折叠 +N）+「还差 N 人」+ 邀请按钮，落在活动底部。",V1="0.1.0",Q1=["ui","底部","社交"],K1=[{name:"title",type:"string",default:'"邀请好友助力"',description:"区块标题"},{name:"total",type:"number",default:"3",description:"未传 data.share 时的默认可助力总次数（优先级低于 data.share.total）"},{name:"used",type:"number",default:"0",description:"未传 data.share 时的默认已用次数（优先级低于 data.share.used）"},{name:"onInvite",type:"() => void",default:"—",description:"点「邀请助力」回调；传入时组件不自增，由业务侧回写 data.share.used 驱动"},{name:"maxAvatars",type:"number",default:"5",description:"头像最多显示几个，超出折叠为 +N"},{name:"order",type:"number",default:"0",description:"同槽位排序键：与 LeaderboardPlugin 同在 renderFooter 时用它决定上下顺序"}],G1=[{name:"renderFooter",when:"每次渲染；恒定渲染（无数据时用 config 兜底）",description:"在底部社交槽渲染助力条"},{name:"onInvite",when:"点击「邀请助力」且未满额时",description:"冒泡给消费方；未传则组件内乐观自增 used"}],Y1=[{name:"ctx.data.share",signature:"{ total: number; used: number; helpers?: { id, name, avatar? }[] }",description:"读取助力真值：total 决定分段数、used 决定点亮段、helpers 渲染头像堆"}],J1="内部 useState 保存乐观 used，并在 data.share.used 变化时同步；不调用 ctx.setState 污染活动状态。",X1=["分段进度把「还差几次」做成可数的格子，比百分比更好理解","头像堆 -8px 叠压，超出折叠 +N","满额按钮切 #5d636a 深灰 + 白字（5.4:1），不用 opacity 压字"],Z1=["砍价 / 助力解锁","邀请注册奖励","拼团人数进度"],q1=["传 onInvite 时务必回写 data.share.used，否则按钮点了没有视觉变化","helpers 少于 used 时不补假头像，只按真实列表渲染"],ql={name:U1,description:H1,since:V1,tags:Q1,props:K1,events:G1,methods:Y1,methodsNote:J1,features:X1,useCases:Z1,notes:q1},qi=(e={})=>{const{title:t="邀请好友助力",total:n=3,used:r=0,onInvite:i,maxAvatars:o=5}=e;return{name:"ShareBoostPlugin",version:"0.1.0",description:ql.description,priority:20,config:e,hooks:{renderFooter:s=>u.jsx(W1,{ctx:s,title:t,total:n,used:r,onInvite:i,maxAvatars:o})}}};qi.meta=ql;const ex={title:"夏日狂欢 · 7 日签到",tasks:[{id:"t1",title:"每日签到",progress:1,status:"completed"},{id:"t2",title:"浏览会场 3 个商品",progress:.6,status:"available"},{id:"t3",title:"邀请 1 位好友",progress:0,status:"locked"}],rewards:[{id:"r1",title:"5 元无门槛券",threshold:.5,icon:"🎟️"}],rules:[],share:{total:3,used:2,helpers:[{id:"u1",name:"阿柚",avatar:"🍊"},{id:"u2",name:"小满",avatar:"🌾"}]}},tx=I(D,[oe(),ee(),qi({title:"邀请好友助力",maxAvatars:5})]),nx={slug:"share-boost",title:"好友助力 ShareBoostPlugin",group:"plugin",intro:"分段名额 + 头像堆 + 「还差 N 人」；满额按钮切深灰，不用 opacity 压字。"};function rx(){return u.jsx(tx,{data:ex})}const ix=Object.freeze(Object.defineProperty({__proto__:null,default:rx,meta:nx},Symbol.toStringTag,{value:"Module"}));function ox(e){return e===1?{background:"#cf4407",color:"#fff"}:e<=3?{background:"#5d636a",color:"#fff"}:{background:"rgba(128,128,128,0.14)",color:"#5d636a"}}function Nu({entry:e,rank:t,unit:n,highlightMe:r}){const i=r&&e.isMe;return u.jsxs("li",{style:{display:"flex",alignItems:"center",gap:10,padding:"7px 8px",borderRadius:8,background:i?"rgba(207,68,7,0.08)":"transparent"},children:[u.jsx("span",{"aria-label":`第 ${t} 名`,style:{flex:"none",width:20,height:20,borderRadius:6,fontSize:12,fontWeight:700,lineHeight:"20px",textAlign:"center",...ox(t)},children:t}),u.jsx("span",{"aria-hidden":"true",style:{flex:"none",width:26,height:26,borderRadius:"50%",background:"rgba(207,68,7,0.1)",color:"#a33a06",fontSize:12,lineHeight:"26px",textAlign:"center",overflow:"hidden",whiteSpace:"nowrap"},children:e.avatar??e.name.slice(0,1)}),u.jsxs("span",{style:{flex:1,minWidth:0,fontSize:13,color:"#1f2328",fontWeight:i?700:400,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:[e.name,i&&u.jsx("span",{style:{marginLeft:6,padding:"0 5px",borderRadius:4,background:"#cf4407",color:"#fff",fontSize:11,fontWeight:600,lineHeight:"16px",display:"inline-block"},children:"我"})]}),u.jsxs("span",{style:{flex:"none",fontSize:13,fontWeight:700,color:"#1f2328"},children:[e.score,u.jsx("span",{style:{marginLeft:2,fontSize:11,fontWeight:400,color:"#5d636a"},children:n})]})]})}function sx(e){return Array.isArray(e)?e.filter(t=>!!t&&typeof t=="object").map((t,n)=>{const r=Number(t.score);return{id:String(t.id??`entry-${n}`),name:String(t.name??"?"),score:Number.isFinite(r)?r:0,avatar:typeof t.avatar=="string"?t.avatar:void 0,isMe:!!t.isMe}}):[]}function lx({ctx:e,title:t,topN:n,unit:r,highlightMe:i,emptyText:o}){var m;const s=(m=e.data)==null?void 0:m.leaderboard,l=x.useMemo(()=>sx(s).sort((h,y)=>y.score-h.score),[s]),a=Math.max(1,Math.min(50,Math.floor(Number.isFinite(n)?n:3)));if(l.length===0)return u.jsx("section",{"aria-label":t,style:{padding:"12px 14px",borderRadius:12,border:"1px solid rgba(128,128,128,0.18)",fontSize:13,color:"#5d636a"},children:o});const c=l.slice(0,a),f=l.findIndex(h=>h.isMe),p=i&&f>=a;return u.jsxs("section",{"aria-label":t,style:{padding:"12px 14px",borderRadius:12,border:"1px solid rgba(128,128,128,0.18)",background:"#fff"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:8,marginBottom:6},children:[u.jsx("span",{style:{fontSize:14,fontWeight:600,color:"#1f2328"},children:t}),u.jsxs("span",{style:{fontSize:12,color:"#5d636a"},children:["共 ",l.length," 人参与"]})]}),u.jsx("ol",{style:{margin:0,padding:0,listStyle:"none"},children:c.map((h,y)=>u.jsx(Nu,{entry:h,rank:y+1,unit:r,highlightMe:i},`${h.id}-${y}`))}),p&&u.jsxs(u.Fragment,{children:[u.jsx("div",{"aria-hidden":"true",style:{margin:"6px 0",borderTop:"1px dashed rgba(128,128,128,0.3)"}}),u.jsx("ol",{style:{margin:0,padding:0,listStyle:"none"},children:u.jsx(Nu,{entry:l[f],rank:f+1,unit:r,highlightMe:i})})]})]})}const ax="LeaderboardPlugin",ux="好友榜：按 score 降序取前 N 名，第一名强调橙名次牌，isMe 行浅橙底高亮；自己不在前 N 时底部补真实名次。",cx="0.1.0",dx=["ui","底部","社交","榜单"],fx=[{name:"title",type:"string",default:'"好友榜"',description:"榜单标题"},{name:"topN",type:"number",default:"3",description:"展示前几名"},{name:"unit",type:"string",default:'"分"',description:"分数单位后缀"},{name:"highlightMe",type:"boolean",default:"true",description:"是否高亮 isMe 行并在名字后加「我」标签"},{name:"emptyText",type:"string",default:'"暂无排行数据"',description:"data.leaderboard 为空时的占位文案"},{name:"order",type:"number",default:"0",description:"同槽位排序键：与 ShareBoostPlugin 同在 renderFooter 时决定上下顺序"}],px=[{name:"renderFooter",when:"每次渲染；data.leaderboard 为空时渲染占位卡片而非返回 null",description:"在底部社交槽渲染榜单（前 N 名 + 可选「我的名次」分隔行）"}],gx=[{name:"ctx.data.leaderboard",signature:"ActivityLeaderboardEntry[]",description:"读取榜单原始数据（id / name / score / avatar? / isMe?），插件内排序后切片"}],mx="只读数据并做不可变排序（[...list] 复制后 sort），不修改 ctx.data 原数组，也不调用 claim / setState。",hx=["排序在插件内完成，业务侧无需预排序","自己不在前 N 时用虚线上分隔并补真实名次，避免「我消失了」","名次牌 1 名 #cf4407 / 2-3 名 #5d636a，白字均 ≥5:1"],vx=["好友步数榜","邀请人数排行","积分 PK 榜"],yx=["score 相同按原始数组顺序稳定排列（Array.prototype.sort 在 ES2019+ 稳定）","topN 大于实际人数时按实际人数渲染"],ea={name:ax,description:ux,since:cx,tags:dx,props:fx,events:px,methods:gx,methodsNote:mx,features:hx,useCases:vx,notes:yx},ta=(e={})=>{const{title:t="好友榜",topN:n=3,unit:r="分",highlightMe:i=!0,emptyText:o="暂无排行数据"}=e;return{name:"LeaderboardPlugin",version:"0.1.0",description:ea.description,priority:25,config:e,hooks:{renderFooter:s=>u.jsx(lx,{ctx:s,title:t,topN:n,unit:r,highlightMe:i,emptyText:o})}}};ta.meta=ea;const xx={title:"夏日狂欢 · 7 日签到",tasks:[{id:"t1",title:"每日签到",progress:1,status:"completed"},{id:"t2",title:"浏览会场 3 个商品",progress:.6,status:"available"},{id:"t3",title:"邀请 1 位好友",progress:0,status:"locked"}],rewards:[{id:"r1",title:"5 元无门槛券",threshold:.5,icon:"🎟️"}],rules:[],leaderboard:[{id:"u1",name:"阿柚",score:1280,avatar:"🍊"},{id:"me",name:"我",score:960,avatar:"🙋",isMe:!0},{id:"u2",name:"小满",score:910,avatar:"🌾"},{id:"u3",name:"大白",score:640,avatar:"🐻"}],share:{total:3,used:1,helpers:[{id:"u1",name:"阿柚",avatar:"🍊"}]}},Px=I(D,[ee(),ta({title:"好友积分榜",topN:3,order:0}),qi({title:"邀请好友助力",order:1})]),kx={slug:"leaderboard",title:"好友榜 LeaderboardPlugin",group:"plugin",intro:"前 3 名 + 我的名次高亮；与助力条同槽靠 order 定序，互不重影。"};function wx(){return u.jsx(Px,{data:xx})}const Sx=Object.freeze(Object.defineProperty({__proto__:null,default:wx,meta:kx},Symbol.toStringTag,{value:"Module"})),Cx="AnnouncementPlugin",_x="活动公告条：横向滚动播报多条公告，纯 CSS 跑马灯（无定时器），悬停暂停、减动效偏好下静止。",bx="0.1.0",Rx=["ui","头部","公告","跑马灯"],Tx=[{name:"items",type:"string[]",default:"[]",description:"公告条目；data.announcements 非空时以数据为准，config 只在无数据时兜底"},{name:"label",type:"string",default:'"公告"',description:"左侧标签文案"},{name:"icon",type:"string",default:'"📢"',description:"标签前的图标（emoji 或字符）"},{name:"speedSec",type:"number",default:"16",description:"滚动一轮的秒数，越大越慢"},{name:"order",type:"number",default:"0",description:"同槽位排序键：与 ActivityHeaderPlugin 同在 renderHeader 时调上下顺序"}],jx=[{name:"renderHeader",when:"每次渲染；公告条目为空时返回 null（该区块不进产物）",description:"在头部槽渲染公告条；CSS 动画循环，不注册任何定时器，因此无事件回调"}],Ex=[{name:"ctx.data.announcements",signature:"string[] | undefined",description:"读取公告数据源；非空时优先于 config.items"}],$x="无内部状态、无状态写操作：纯函数式渲染，公告内容变化走父级 data 更新即可（插件自动跟随重渲染）。",Ax=["纯 CSS 跑马灯，不持有 setInterval，后台标签页不会积压回调","条目复制一份首尾相接，-50% 位移即无缝循环","悬停暂停（.va-announce-track:hover）、prefers-reduced-motion 下自动静止","标签用 #cf4407 底 + 白字，正文 #1f2328 压浅橙底，均满足 ADR-13"],Lx=["活动开场公告","中奖名单播报","规则变更提醒"],Nx=["priority 8 高于 ActivityHeaderPlugin 的 5，同装时公告条显示在横幅上方；需要反过来就传 order 调整","公告文字建议单条不超过 30 字，过长会拖慢一轮的阅读节奏（可调大 speedSec）"],na={name:Cx,description:_x,since:bx,tags:Rx,props:Tx,events:jx,methods:Ex,methodsNote:$x,features:Ax,useCases:Lx,notes:Nx},Mx=`@keyframes va-announce-scroll{from{transform:translateX(0)}to{transform:translateX(-50%)}}
@media (prefers-reduced-motion: reduce){.va-announce-track{animation:none!important;transform:none!important}}
.va-announce-track:hover{animation-play-state:paused}`,ra=(e={})=>{const{items:t=[],label:n="公告",icon:r="📢",speedSec:i=16}=e;return{name:"AnnouncementPlugin",version:"0.1.0",description:na.description,priority:8,config:e,hooks:{renderHeader:o=>{var c;const s=(c=o.data)==null?void 0:c.announcements,l=(s&&s.length>0?s:t).filter(f=>!!f);if(l.length===0)return null;const a=[...l,...l];return u.jsxs("section",{"aria-label":"活动公告",style:{display:"flex",alignItems:"center",gap:8,overflow:"hidden",padding:"6px 10px",borderRadius:999,background:"#fff6ef",border:"1px solid rgba(207,68,7,0.14)"},children:[u.jsx("style",{children:Mx}),u.jsxs("span",{style:{flex:"none",display:"inline-flex",alignItems:"center",gap:4,padding:"2px 8px",borderRadius:999,background:"#cf4407",color:"#fff",fontSize:12,fontWeight:600,lineHeight:1.7},children:[u.jsx("span",{"aria-hidden":"true",children:r}),n]}),u.jsx("div",{style:{flex:1,minWidth:0,overflow:"hidden"},children:u.jsx("div",{className:"va-announce-track",style:{display:"inline-flex",gap:28,whiteSpace:"nowrap",willChange:"transform",animation:`va-announce-scroll ${i}s linear infinite`},children:a.map((f,p)=>u.jsx("span",{"aria-hidden":p>=l.length?!0:void 0,style:{fontSize:12,lineHeight:1.7,color:"#1f2328"},children:f},`${f}-${p}`))})})]})}}}};ra.meta=na;const zx={title:"夏日狂欢 · 7 日签到",announcements:["8.1-8.7 全场券 5 折起，先领券再下单","每日 20:00 抽 20 元无门槛券，限前 1000 名","邀请好友下单再得 10 元红包，上不封顶"],tasks:[{id:"t1",title:"每日签到",progress:1,status:"completed"},{id:"t2",title:"浏览会场 3 个商品",progress:.6,status:"available"},{id:"t3",title:"邀请 1 位好友",progress:0,status:"locked"}],rewards:[{id:"r1",title:"5 元无门槛券",threshold:.5,icon:"🎟️"}],rules:[]},Ox=I(D,[ra({label:"公告",speedSec:18}),Xi({subtitle:"连续签到 7 天，最高领 20 元会员券",icon:"☀️"}),oe(),ee()]),Dx={slug:"announcement",title:"公告条 AnnouncementPlugin",group:"plugin",intro:"纯 CSS 跑马灯播报多条公告，悬停暂停；与头部横幅同槽，靠 priority 定在横幅之上。"};function Ix(){return u.jsx(Ox,{data:zx})}const Fx=Object.freeze(Object.defineProperty({__proto__:null,default:Ix,meta:Dx},Symbol.toStringTag,{value:"Module"}));function No(e,t,n,r){const i=Number.isFinite(e)?e:r;return Math.max(t,Math.min(n,Math.floor(i)))}function Bx({ctx:e,title:t,days:n,done:r,todayIndex:i,onCheckin:o,showButton:s}){var w;const l=(w=e.data)==null?void 0:w.checkin,a=No((l==null?void 0:l.days)??n,1,31,7),c=No((l==null?void 0:l.done)??r,0,a,0),f=No((l==null?void 0:l.todayIndex)??i??c,0,Math.max(0,a-1),0),[p,m]=x.useState(c);x.useEffect(()=>m(c),[c]);const h=p>=a,y=p>f||h,P=()=>{if(!y){if(o){o();return}m(g=>Math.min(a,g+1))}};return u.jsxs("section",{"aria-label":t,style:{padding:"12px 14px",borderRadius:12,border:"1px solid rgba(128,128,128,0.18)",background:"#fff"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[u.jsx("span",{style:{flex:1,fontSize:14,fontWeight:600,color:"#1f2328"},children:t}),u.jsxs("span",{style:{fontSize:12,color:"#5d636a"},children:["已连续 ",u.jsx("strong",{style:{color:"#1f2328"},children:p}),"/",a," 天"]})]}),u.jsx("div",{style:{display:"flex",gap:6,marginTop:10},children:Array.from({length:a},(g,d)=>{const v=d<p,k=d===f&&!v&&!h,S=v?"#cf4407":"#fff",b=v?"1px solid #cf4407":k?"1px dashed #cf4407":"1px solid rgba(128,128,128,0.22)",T=v?"#fff":k?"#cf4407":"#5d636a";return u.jsxs("div",{"data-testid":"checkin-cell","aria-label":`第 ${d+1} 天${v?"已签到":k?"待签到":"未开始"}`,style:{flex:1,minWidth:0,height:46,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:2,borderRadius:8,background:S,border:b,color:T,transition:"background .2s ease"},children:[u.jsxs("span",{style:{fontSize:11,lineHeight:1.3},children:[d+1,"天"]}),u.jsx("span",{style:{fontSize:13,fontWeight:700,lineHeight:1},children:v?"✓":k?"今":"·"})]},d)})}),s&&u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginTop:10},children:[u.jsx("span",{style:{flex:1,fontSize:12,lineHeight:1.6,color:"#5d636a"},children:h?"本轮签到已完成，奖励已全部发放":y?"今天已签到，明天再来":`签满 ${a} 天可得终极大礼包`}),u.jsx("button",{type:"button",disabled:y,onClick:P,style:{flex:"none",border:"none",borderRadius:999,padding:"7px 14px",fontSize:13,fontWeight:600,background:y?"#5d636a":"#cf4407",color:"#fff",cursor:y?"default":"pointer"},children:h?"已完成":y?"已签到":"今日签到"})]})]})}const Wx="CheckinCalendarPlugin",Ux="签到日历：N 个格子展示已签 / 今日待签 / 未开始三态，附连续天数与签到按钮，点按钮走 onCheckin 或本地乐观 +1。",Hx="0.1.0",Vx=["ui","进度","签到","日历"],Qx=[{name:"title",type:"string",default:'"连续签到"',description:"卡片标题"},{name:"days",type:"number",default:"7",description:"共几天；data.checkin.days 存在时以数据为准"},{name:"done",type:"number",default:"0",description:"已完成天数；data.checkin.done 存在时以数据为准"},{name:"todayIndex",type:"number",default:"done",description:"今天对应的格子下标（0-based），默认等于 done 即「今天还没签」"},{name:"onCheckin",type:"() => void",default:"undefined",description:"点「今日签到」的回调；不传则组件内乐观 +1，传了由业务侧回写 data.checkin.done"},{name:"showButton",type:"boolean",default:"true",description:"是否显示签到按钮（纯展示场景可关掉）"},{name:"order",type:"number",default:"0",description:"同槽位排序键：与 ProgressFx / ProgressRing / MilestoneBar 同在 renderProgress 时定上下"}],Kx=[{name:"onCheckin",when:"点击「今日签到」且今天尚未签到、本轮未签满时",description:"通知业务侧落库；插件在收到回调前不改本地态，业务侧需回写 data.checkin.done 才会推进格子"},{name:"renderProgress",when:"每次渲染",description:"在顶部进度槽渲染签到日历；showButton 为 false 时只渲染格子"}],Gx=[{name:"ctx.data.checkin",signature:"{ days?: number; done: number; todayIndex?: number }",description:"读取签到态；缺省时逐字段回退到 config"}],Yx="无对外命令式方法。未传 onCheckin 时内部用 useState 做乐观 +1（上限 days），传了则以 data 为准。",Jx=["三态格子：已签实心橙 + 白勾、今日虚线橙框「今」、未开始灰框","签满后按钮变「已完成」并禁用，提示语同步切换","格子宽度 flex:1 自适应，N=7 / 14 都不会溢出","全部色值满足 ADR-13：#fff 白字压 #cf4407 4.69:1、压 #5d636a 6.0:1"],Xx=["7 日签到","连续打卡领积分","任务型活动每日激励"],Zx=["todayIndex 大于 done 时（跳签场景）今天格子显示为「待签到」，中间断签格保持未开始","本插件不计算「连续」的业务语义，连续天数由业务侧在 done 里表达"],ia={name:Wx,description:Ux,since:Hx,tags:Vx,props:Qx,events:Kx,methods:Gx,methodsNote:Yx,features:Jx,useCases:Xx,notes:Zx},eo=(e={})=>{const{title:t="连续签到",days:n=7,done:r=0,todayIndex:i,onCheckin:o,showButton:s=!0}=e;return{name:"CheckinCalendarPlugin",version:"0.1.0",description:ia.description,priority:10,config:e,hooks:{renderProgress:l=>u.jsx(Bx,{ctx:l,title:t,days:n,done:r,todayIndex:i,onCheckin:o,showButton:s})}}};eo.meta=ia;const qx={title:"夏日狂欢 · 7 日签到",checkin:{days:7,done:3},tasks:[{id:"t1",title:"每日签到",progress:1,status:"completed"},{id:"t2",title:"浏览会场 3 个商品",progress:.6,status:"available"},{id:"t3",title:"邀请 1 位好友",progress:0,status:"locked"}],rewards:[{id:"r1",title:"5 元无门槛券",threshold:.5,icon:"🎟️"}],rules:[]},eP=I(D,[eo({title:"连续签到 · 7 天",order:0}),oe({order:1}),ee()]),tP={slug:"checkin",title:"签到日历 CheckinCalendarPlugin",group:"plugin",intro:"N 格三态日历（已签 / 今日 / 未开始），点「今日签到」乐观 +1；与进度条同槽靠 order 定序。"};function nP(){return u.jsx(eP,{data:qx})}const rP=Object.freeze(Object.defineProperty({__proto__:null,default:nP,meta:tP},Symbol.toStringTag,{value:"Module"})),iP={locked:"未解锁",available:"进行中",completed:"已完成"},oP={locked:"#5d636a",available:"#cf4407",completed:"#15803d"},sP={key:"all",label:"全部"};function lP({ctx:e,tabs:t,defaultTab:n,showProgress:r,doneLabel:i,emptyText:o}){const s=e.data,l=s==null?void 0:s.taskGroups,a=l&&l.length>0?l:t.length>0?t:[sP],c=e.tasks??[],f=en.useId(),[p,m]=x.useState(n??a[0].key),h=a.some(d=>d.key===p)?p:a[0].key,y=x.useRef(new Map),P=d=>{var v;(v=y.current.get(d))==null||v.focus(),m(d)},w=(d,v)=>{const k=a.map(T=>T.key),S=k.indexOf(v);if(S<0)return;let b=null;d.key==="ArrowRight"?b=k[(S+1)%k.length]:d.key==="ArrowLeft"?b=k[(S-1+k.length)%k.length]:d.key==="Home"?b=k[0]:d.key==="End"&&(b=k[k.length-1]),b!==null&&(d.preventDefault(),P(b))},g=h==="all"?c:c.filter(d=>d.group===h);return u.jsxs("section",{"aria-label":"任务清单",children:[u.jsx("div",{role:"tablist","aria-label":"任务分组",style:{display:"flex",gap:6,overflowX:"auto",paddingBottom:2},children:a.map(d=>{const v=d.key==="all"?c:c.filter(b=>b.group===d.key),k=v.filter(b=>b.status==="completed").length,S=d.key===h;return u.jsxs("button",{ref:b=>{b?y.current.set(d.key,b):y.current.delete(d.key)},type:"button",role:"tab",id:`${f}-tab-${d.key}`,"aria-selected":S,"aria-controls":`${f}-panel`,tabIndex:S?0:-1,"data-testid":"task-tab",onClick:()=>m(d.key),onKeyDown:b=>w(b,d.key),style:{flex:"none",display:"inline-flex",alignItems:"center",gap:5,border:S?"1px solid #cf4407":"1px solid rgba(128,128,128,0.22)",borderRadius:999,padding:"6px 12px",fontSize:13,fontWeight:S?600:400,background:S?"#cf4407":"#fff",color:S?"#fff":"#5d636a",cursor:"pointer"},children:[d.icon&&u.jsx("span",{"aria-hidden":"true",children:d.icon}),d.label,u.jsxs("span",{style:{fontSize:11},children:[k,"/",v.length]})]},d.key)})}),u.jsx("div",{id:`${f}-panel`,role:"tabpanel","aria-labelledby":`${f}-tab-${h}`,style:{marginTop:10},children:g.length===0?u.jsx("div",{style:{padding:"18px 0",textAlign:"center",fontSize:13,color:"#5d636a"},children:o}):u.jsx("div",{style:{display:"flex",flexDirection:"column",gap:10},children:g.map(d=>{const v=oP[d.status],k=Math.round(Math.max(0,Math.min(1,d.progress??0))*100);return u.jsxs("div",{"data-testid":"activity-task",style:{display:"flex",alignItems:"center",gap:10,padding:"10px 12px",borderRadius:10,border:"1px solid rgba(128,128,128,0.18)",background:"#fff"},children:[u.jsxs("div",{style:{flex:1,minWidth:0},children:[u.jsx("div",{style:{fontWeight:600,fontSize:14,color:"#1f2328"},children:d.title}),d.desc&&u.jsx("div",{style:{fontSize:12,color:"#5d636a",marginTop:2},children:d.desc}),r&&d.status!=="completed"&&u.jsx("div",{style:{marginTop:6,height:4,borderRadius:2,background:"rgba(128,128,128,0.18)"},children:u.jsx("div",{style:{width:`${k}%`,height:"100%",borderRadius:2,background:"#cf4407"}})})]}),u.jsx("span",{style:{fontSize:12,color:v,fontWeight:600,whiteSpace:"nowrap"},children:d.status==="completed"?i:iP[d.status]}),d.actionLabel&&d.status!=="completed"&&u.jsx("button",{type:"button",onClick:()=>{var S,b;return(b=(S=e.props).onTaskAction)==null?void 0:b.call(S,d.id)},style:{border:"none",borderRadius:999,padding:"6px 14px",background:"#cf4407",color:"#fff",fontSize:13,cursor:"pointer"},children:d.actionLabel})]},d.id)})})})]})}const aP="TaskTabsPlugin",uP="分组任务清单：页签切换（每日 / 成长 / 邀请…），每个页签带完成度计数，组内沿用任务行样式与「去完成」动作。",cP="0.1.0",dP=["ui","任务","分组","页签","独占槽位"],fP=[{name:"tabs",type:"ActivityTaskGroup[]",default:"[]",description:"页签定义（key / label / icon?）；data.taskGroups 非空时以数据为准"},{name:"defaultTab",type:"string",default:"第一个页签",description:"默认选中的页签 key"},{name:"showProgress",type:"boolean",default:"true",description:"是否展示未完成任务的进度条"},{name:"doneLabel",type:"string",default:'"已完成"',description:"完成态文案"},{name:"emptyText",type:"string",default:'"该分组暂无任务"',description:"页签下无任务时的占位文案（不返回 null，避免页签跳动）"},{name:"order",type:"number",default:"0",description:"同槽位排序键（本插件独占 renderTasks，一般用不到）"}],pP=[{name:"onTaskAction",when:"点击任务行的动作按钮（task.actionLabel 存在且未完成）",description:"透传 ctx.props.onTaskAction(taskId)，由业务侧跳转或标记完成"},{name:"renderTasks",when:"每次渲染；任务为空时返回 null",description:"在任务槽渲染页签 + 当前分组任务行"}],gP=[{name:"ctx.tasks",signature:"ActivityTask[]",description:"读取全量任务（含 group / status / progress），按当前页签过滤后渲染"}],mP="页签切换是组件内部 useState，不写回 ctx；需要外部控制选中页签请用 defaultTab 配合重挂载。",hP=["页签带完成度计数（2/3），未选中为白底灰字、选中为橙底白字","没有分组数据时（data.taskGroups 与 config.tabs 都为空）自动给一个「全部」页签，聚合所有任务","独占 renderTasks：与 TaskListPlugin 同时装配时本插件 priority 更高（22 > 20）自动胜出","页签横向可滚，移动端窄屏不换行挤压"],vP=["每日任务 / 成长任务 / 邀请任务分栏","多玩法活动的任务中心","任务量大于 8 条时的分类收纳"],yP=["任务未标 group 时只会出现在『全部』页签下","taskGroups 被外部替换导致当前页签消失时，自动回落到第一个页签","与 TaskListPlugin 二选一：同时装会在装配期打印去重警告并丢弃 TaskListPlugin"],oa={name:aP,description:uP,since:cP,tags:dP,props:fP,events:pP,methods:gP,methodsNote:mP,features:hP,useCases:vP,notes:yP},to=(e={})=>{const{tabs:t=[],defaultTab:n,showProgress:r=!0,doneLabel:i="已完成",emptyText:o="该分组暂无任务"}=e;return{name:"TaskTabsPlugin",version:"0.1.0",description:oa.description,priority:22,config:e,exclusiveSlots:["renderTasks"],hooks:{renderTasks:s=>(s.tasks??[]).length===0?null:u.jsx(lP,{ctx:s,tabs:t,defaultTab:n,showProgress:r,doneLabel:i,emptyText:o})}}};to.meta=oa;const xP={title:"夏日狂欢 · 任务中心",taskGroups:[{key:"daily",label:"每日",icon:"📅"},{key:"growth",label:"成长",icon:"🌱"},{key:"invite",label:"邀请",icon:"🤝"}],tasks:[{id:"d1",title:"每日签到",desc:"连续签到领积分",progress:1,status:"completed",group:"daily",actionLabel:"已签到"},{id:"d2",title:"浏览 3 个商品",desc:"了解活动好物",progress:1,status:"completed",group:"daily",actionLabel:"已完成"},{id:"g1",title:"收藏店铺",desc:"收藏后抽 20 元券",progress:.5,status:"available",group:"growth",actionLabel:"去收藏"},{id:"g2",title:"加入会员",desc:"享双倍积分",progress:0,status:"locked",group:"growth",actionLabel:"去开通"},{id:"i1",title:"邀请 1 位好友",desc:"好友下单后到账",progress:0,status:"locked",group:"invite",actionLabel:"去邀请"},{id:"i2",title:"好友助力 3 人",desc:"解锁终极大礼包",progress:0,status:"locked",group:"invite",actionLabel:"去助力"}],rewards:[{id:"r1",title:"5 元无门槛券",threshold:.5,icon:"🎟️"},{id:"r2",title:"20 元会员券",threshold:.9,icon:"💎"}],rules:[]},PP=I(D,[oe(),to({defaultTab:"daily",doneLabel:"已完成"}),Me()]),kP={slug:"task-tabs",title:"分组任务 TaskTabsPlugin",group:"plugin",intro:"页签切换 + 每组完成度计数；独占 renderTasks，与 TaskList 二选一。"};function wP(){return u.jsx(PP,{data:xP})}const SP=Object.freeze(Object.defineProperty({__proto__:null,default:wP,meta:kP},Symbol.toStringTag,{value:"Module"})),CP=[{id:"p1",label:"5 元券",icon:"🎟️"},{id:"p2",label:"谢谢参与",icon:"🍬"},{id:"p3",label:"20 积分",icon:"⭐"},{id:"p4",label:"会员 7 天",icon:"💎"},{id:"p5",label:"1 元红包",icon:"🧧"},{id:"p6",label:"谢谢参与",icon:"🍬"},{id:"p7",label:"免邮券",icon:"📦"},{id:"p8",label:"100 积分",icon:"🌟"}],_P=[0,1,2,3,-1,4,5,6,7],bP={padding:"12px 14px",borderRadius:12,border:"1px solid rgba(128,128,128,0.18)",background:"#fff"},RP={display:"flex",alignItems:"center",gap:8},TP={flex:1,fontSize:14,fontWeight:600,color:"#1f2328"},jP={fontSize:12,color:"#5d636a"},EP={color:"#1f2328"},$P={display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:8,marginTop:10},AP={gridColumn:"auto",border:"none",borderRadius:10,minHeight:56,fontSize:14,fontWeight:700,lineHeight:1.4,color:"#fff"},LP={display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:2,minHeight:56,borderRadius:10,transition:"background .12s ease, color .12s ease",border:"1px solid rgba(207,68,7,0.16)"},NP={fontSize:17,lineHeight:1},MP={fontSize:11,lineHeight:1.4,textAlign:"center"},zP={margin:"10px 0 0",minHeight:20,fontSize:12,lineHeight:1.7};function OP({title:e,prizes:t,times:n,remainingTimes:r,drawResult:i,onDraw:o}){const s=x.useMemo(()=>{const b=[...t.length>0?t.slice(0,8):CP];for(;b.length<8;)b.push({id:`pad-${b.length}`,label:"谢谢参与",icon:"🍬"});return b},[t]),[l,a]=x.useState(n),[c,f]=x.useState(-1),[p,m]=x.useState(!1),[h,y]=x.useState(null),P=r??l,w=Number.isFinite(P)?Math.max(0,Math.min(999,Math.floor(P))):0,g=x.useRef([]),d=x.useRef(!0);x.useEffect(()=>(d.current=!0,()=>{d.current=!1,g.current.forEach(S=>clearTimeout(S)),g.current=[]}),[]);const v=async()=>{if(p||w<=0)return;m(!0),y(null);let S,b;try{if(i){const _=await i();if(!d.current)return;if(!Number.isFinite(_.index))throw new Error("drawResult 返回的 index 不是有效数字");S=Math.max(0,Math.min(s.length-1,Math.floor(_.index))),b=_.remaining}else S=Math.floor(Math.random()*s.length)}catch(_){if(!d.current)return;m(!1),y("抽奖请求失败，请稍后重试"),console.warn("[vane-activity] Jackpot drawResult 执行失败",_);return}if(!d.current)return;r===void 0&&a(_=>typeof b=="number"&&Number.isFinite(b)?Math.max(0,Math.floor(b)):Math.max(0,_-1));const T=s.length*2+S+1;let j=0;const C=()=>{if(d.current)if(j+=1,f((j-1)%s.length),j<T)g.current.push(window.setTimeout(C,60+j*5));else{g.current=[],m(!1);const _=s[S];y(`恭喜获得「${_.label}」`),o==null||o(_,S)}};C()},k=w<=0;return u.jsxs("section",{"aria-label":e,style:bP,children:[u.jsxs("div",{style:RP,children:[u.jsx("span",{style:TP,children:e}),u.jsxs("span",{style:jP,children:["剩余 ",u.jsx("strong",{style:EP,children:w})," 次"]})]}),u.jsx("div",{role:"group","aria-label":"抽奖九宫格",style:$P,children:_P.map(S=>{if(S===-1)return u.jsx("button",{type:"button",disabled:p||k,onClick:v,style:{...AP,background:p?"#a33a06":k?"#5d636a":"#cf4407",cursor:p||k?"default":"pointer"},children:p?"抽取中":k?"已抽完":"抽一次"},"btn");const b=s[S],T=c===S;return u.jsxs("div",{"data-testid":"jackpot-cell","data-active":T?"1":void 0,style:{...LP,background:T?"#cf4407":"#fff7ef",color:T?"#fff":"#1f2328"},children:[u.jsx("span",{"aria-hidden":"true",style:NP,children:b.icon??"🎁"}),u.jsx("span",{style:MP,children:b.label})]},b.id)})}),u.jsx("p",{"aria-live":"polite",style:{...zP,color:h?"#a33a06":"#5d636a",fontWeight:h?600:400},children:p?"转动中，祝你好运…":h??(k?"今日次数已用完，明天再来":`共 ${s.length} 个奖励格，点击中间按钮开抽`)})]})}const DP="JackpotPlugin",IP="九宫格抽奖：8 格环绕中心按钮，逐格高亮减速后停在中奖格；次数用完自动禁用。",FP="0.1.0",BP=["ui","玩法","抽奖","九宫格","底部"],WP=[{name:"title",type:"string",default:'"幸运抽奖"',description:"卡片标题"},{name:"prizes",type:"JackpotPrize[]",default:"8 个内置奖励",description:"奖池 { id, label, icon? }；固定 8 格，不足补「谢谢参与」"},{name:"times",type:"number",default:"3",description:"未传 remainingTimes 时的初值；每抽按服务端返回或本地 -1，归零禁用"},{name:"remainingTimes",type:"number",default:"undefined",description:"受控次数；传入后组件不递减，由业务侧回写"},{name:"drawResult",type:"() => JackpotDrawResult | Promise<JackpotDrawResult>",default:"undefined",description:"服务端抽奖返回 { index, remaining? }；传入后不用本地随机"},{name:"onDraw",type:"(prize: JackpotPrize, index: number) => void",default:"undefined",description:"中奖通知（动画结束后）；仅通知不扣次数"},{name:"order",type:"number",default:"0",description:"同槽位排序键：与助力条 / 榜单同在 renderFooter 时定上下"}],UP=[{name:"onDraw",when:"抽奖动画跑完并确定中奖格后",description:"回传中奖奖励与下标，供发奖 / 埋点"},{name:"renderFooter",when:"每次渲染",description:"底部槽渲染九宫格卡片（含按钮与结果文案）"}],HP=[{name:"内部 draw()",signature:"() => Promise<void>",description:"开始抽取；drawing 或次数为 0 时忽略；失败展示错误并恢复按钮"}],VP="内部状态机（remaining / active / drawing / result），不暴露 ref 方法；外部触发请走自定义按钮 + 事件。",QP=["步数 = 8×2 + winner + 1，停格必为中奖格且至少转两圈","帧间隔 60 + step×5 ms 递增，尾部有减速手感","结果区 aria-live=polite，中奖色 #a33a06 对白底 6.6:1","卸载统一 clearTimeout，避免对已卸载组件 setState"],KP=["抽奖活动主玩法","任务完成后的奖励抽取","积分兑换转盘"],GP=["生产请传 drawResult 由服务端决定中奖格与次数；本地随机仅演示，不能作为发奖依据","中心按钮随状态切换：抽一次 / 抽取中 / 已抽完","九宫格固定 3×3，格子 minHeight 56，移动端一屏可容纳"],sa={name:DP,description:IP,since:FP,tags:BP,props:WP,events:UP,methods:HP,methodsNote:VP,features:QP,useCases:KP,notes:GP},no=(e={})=>{const{title:t="幸运抽奖",prizes:n=[],times:r=3,remainingTimes:i,drawResult:o,onDraw:s}=e;return{name:"JackpotPlugin",version:"0.1.0",description:sa.description,priority:24,config:e,hooks:{renderFooter:l=>u.jsx(OP,{title:t,prizes:n,times:r,remainingTimes:i,drawResult:o,onDraw:s})}}};no.meta=sa;const YP={title:"夏日狂欢 · 幸运抽奖",tasks:[{id:"t1",title:"每日签到",progress:1,status:"completed"},{id:"t2",title:"浏览会场 3 个商品",progress:.6,status:"available"},{id:"t3",title:"邀请 1 位好友",progress:0,status:"locked"}],rewards:[{id:"r1",title:"5 元无门槛券",threshold:.5,icon:"🎟️"}],rules:[]},JP=I(D,[oe(),ee(),no({title:"幸运抽奖 · 100% 中奖",times:3,prizes:[{id:"p1",label:"5 元券",icon:"🎟️"},{id:"p2",label:"谢谢参与",icon:"🍬"},{id:"p3",label:"20 积分",icon:"⭐"},{id:"p4",label:"会员 7 天",icon:"💎"},{id:"p5",label:"1 元红包",icon:"🧧"},{id:"p6",label:"谢谢参与",icon:"🍬"},{id:"p7",label:"免邮券",icon:"📦"},{id:"p8",label:"100 积分",icon:"🌟"}]})]),XP={slug:"jackpot",title:"抽奖九宫格 JackpotPlugin",group:"plugin",intro:"8 格奖池 + 中心按钮，高亮转两圈减速停格，次数用完自动禁用。"};function ZP(){return u.jsx(JP,{data:YP})}const qP=Object.freeze(Object.defineProperty({__proto__:null,default:ZP,meta:XP},Symbol.toStringTag,{value:"Module"}));function ek({title:e,prefix:t,minLength:n,placeholder:r,successText:i,onRedeem:o}){const[s,l]=x.useState(""),[a,c]=x.useState(null),[f,p]=x.useState(!1),m=x.useRef(!0);x.useEffect(()=>(m.current=!0,()=>{m.current=!1}),[]);const h=async P=>{if(P.preventDefault(),f)return;const w=s.trim().toUpperCase();if(!w){c({type:"error",text:"请输入兑换码"});return}if(w.length<n){c({type:"error",text:`兑换码至少 ${n} 位`});return}if(t&&!w.startsWith(t.toUpperCase())){c({type:"error",text:`兑换码应以 ${t.toUpperCase()} 开头`});return}p(!0);try{const g=await(o==null?void 0:o(w));if(!m.current)return;if(g===!1){c({type:"error",text:"兑换码无效或已被使用"});return}c({type:"ok",text:i}),l("")}catch{m.current&&c({type:"error",text:"兑换失败，请稍后重试"})}finally{m.current&&p(!1)}},y=(a==null?void 0:a.type)==="error";return u.jsxs("section",{"aria-label":e,style:{padding:"12px 14px",borderRadius:12,border:"1px solid rgba(128,128,128,0.18)",background:"#fff"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[u.jsx("span",{style:{flex:1,fontSize:14,fontWeight:600,color:"#1f2328"},children:e}),u.jsx("span",{style:{fontSize:12,color:"#5d636a"},children:t?`前缀 ${t.toUpperCase()} · 至少 ${n} 位`:`至少 ${n} 位`})]}),u.jsxs("form",{onSubmit:h,style:{display:"flex",gap:8,marginTop:10},children:[u.jsx("input",{value:s,onChange:P=>{l(P.target.value),a&&c(null)},placeholder:r,"aria-label":"兑换码","aria-invalid":y||void 0,autoComplete:"off",spellCheck:!1,style:{flex:1,minWidth:0,boxSizing:"border-box",height:34,padding:"0 10px",borderRadius:8,border:`1px solid ${y?"#b42318":"rgba(128,128,128,0.28)"}`,background:"#fff",color:"#1f2328",fontSize:13,fontFamily:"inherit",letterSpacing:"0.04em"}}),u.jsx("button",{type:"submit",disabled:f,style:{flex:"none",border:"none",borderRadius:8,padding:"0 16px",height:34,fontSize:13,fontWeight:600,background:f?"#a33a06":"#cf4407",color:"#fff",cursor:f?"default":"pointer"},children:f?"兑换中":"兑换"})]}),u.jsx("p",{"aria-live":"polite",style:{margin:"8px 0 0",minHeight:18,fontSize:12,lineHeight:1.6,color:a?a.type==="ok"?"#15803d":"#b42318":"#5d636a",fontWeight:a?600:400},children:a?a.text:"输入活动发放的兑换码，奖励实时入账"})]})}const tk="RedeemCodePlugin",nk="兑换码：输入框 + 本地校验（非空 / 长度 / 前缀）+ 成功或失败回执，回车即可提交，结果区 aria-live 播报。",rk="0.1.0",ik=["ui","奖励","兑换码","表单"],ok=[{name:"title",type:"string",default:'"兑换码"',description:"卡片标题"},{name:"prefix",type:"string",default:"undefined",description:'必填前缀（转大写比较，如 "VANE"）；不传则不校验前缀'},{name:"minLength",type:"number",default:"8",description:"兑换码最短长度"},{name:"placeholder",type:"string",default:'"如 VANE-8888"',description:"输入框占位文案"},{name:"successText",type:"string",default:'"兑换成功，奖励已入账"',description:"校验通过后的成功文案"},{name:"onRedeem",type:"(code: string) => boolean | void | Promise<boolean | void>",default:"undefined",description:"兑换回调，入参是 trim + 转大写后的码；返回 false 表示无效码；支持异步，等待期按钮禁用"},{name:"order",type:"number",default:"0",description:"同槽位排序键：与 RewardClaimPlugin 同在 renderRewards 时定上下"}],sk=[{name:"onRedeem",when:"表单提交（点「兑换」或回车）且本地校验全部通过后",description:"把规范化后的兑换码交给业务侧核销；返回 false 视为无效，异常转失败文案"},{name:"renderRewards",when:"每次渲染",description:"在奖励槽渲染兑换卡"}],lk=[{name:"内部 handleSubmit(event)",signature:"(event: React.FormEvent) => void",description:"阻止默认提交 → trim/大写 → 三重校验 → await onRedeem，期间 pending 禁点"}],ak="无对外命令式方法。输入变化即清除上一条回执，避免旧错误提示压在新输入上。",uk=["回车可直接提交（form onSubmit，不绑 keydown）","三层本地校验：非空 → 最短长度 → 前缀，错误文案各自独立","onRedeem 返回 false 时展示「兑换码无效或已被使用」，成功则清空输入","支持 Promise 回调：请求中按钮禁用并显示「兑换中」，卸载后丢弃回包","错误边框 #b42318 + aria-invalid + aria-live 文案，不靠颜色单独传达错误"],ck=["线下物料码核销","客服补发兑换码","渠道专属码"],dk=["兑换码统一转大写后比对，业务侧无需再做大小写归一","不声明独占 renderRewards：可与 RewardClaimPlugin / CouponStackPlugin 的奖励列表上下叠放共存（独占去重只在「声明了独占的插件之间」发生，非独占插件永不被丢）"],la={name:tk,description:nk,since:rk,tags:ik,props:ok,events:sk,methods:lk,methodsNote:ak,features:uk,useCases:ck,notes:dk},ro=(e={})=>{const{title:t="兑换码",prefix:n,minLength:r=8,placeholder:i="如 VANE-8888",successText:o="兑换成功，奖励已入账",onRedeem:s}=e;return{name:"RedeemCodePlugin",version:"0.1.0",description:la.description,priority:26,config:e,hooks:{renderRewards:l=>u.jsx(ek,{title:t,prefix:n,minLength:r,placeholder:i,successText:o,onRedeem:s})}}};ro.meta=la;const fk={title:"夏日狂欢 · 兑换中心",tasks:[{id:"t1",title:"每日签到",progress:1,status:"completed"},{id:"t2",title:"浏览会场 3 个商品",progress:.6,status:"available"},{id:"t3",title:"邀请 1 位好友",progress:0,status:"locked"}],rewards:[{id:"r1",title:"5 元无门槛券",threshold:.5,icon:"🎟️"}],rules:[]},pk=I(D,[oe(),ro({prefix:"VANE",order:0,onRedeem:e=>(console.log("[redeem]",e),e==="VANE-8888")}),Me({order:1})]),gk={slug:"redeem-code",title:"兑换码 RedeemCodePlugin",group:"plugin",intro:"输入框 + 长度/前缀校验 + 成功失败回执；与奖励列表同槽共存。"};function mk(){return u.jsx(pk,{data:fk})}const hk=Object.freeze(Object.defineProperty({__proto__:null,default:mk,meta:gk},Symbol.toStringTag,{value:"Module"})),vk=`import React from "react";
import { ActivityCore, withPlugins } from "vane-activity";
import type { ActivityData } from "vane-activity";
import { createProgressFxPlugin } from "vane-activity/custom-plugins/ProgressFxPlugin";
import { createTaskListPlugin } from "vane-activity/custom-plugins/TaskListPlugin";
import { createRewardClaimPlugin } from "vane-activity/custom-plugins/RewardClaimPlugin";
import { createRuleExpandPlugin } from "vane-activity/custom-plugins/RuleExpandPlugin";

/**
 * 基础闭环：内核 + 4 个官方插件全装。
 * 这是营销活动的最小完整形态——进度特效、任务清单、奖励领取、规则折叠各管一块，
 * 内核只负责「语义骨架 + 生命周期 + 五个领域槽位」的转发。
 *
 * 本文件自含全部数据，复制到你的项目（npm install vane-activity）即可复现演示台效果。
 *
 * 进度 = 任务完成度加权平均（内核 computeProgress）：
 *   (1 + 0.6 + 0) / 3 ≈ 0.53 → 顶部进度条显示 53%；
 *   5 元券（阈值 0.5）可领，20 元券（0.9）与终极大礼包（1.0）仍锁定。
 * 任务行 / 奖励行 / 活动规则的内容全部来自下面的 data，改数据即改界面。
 */
const sampleActivity: ActivityData = {
  title: "夏日狂欢 · 7 日签到",
  tasks: [
    {
      id: "t1",
      title: "每日签到",
      desc: "连续签到领积分",
      progress: 1,
      status: "completed",
      actionLabel: "已签到",
    },
    {
      id: "t2",
      title: "浏览会场 3 个商品",
      desc: "了解活动好物",
      progress: 0.6,
      status: "available",
      actionLabel: "去浏览",
      rewardId: "r1",
    },
    {
      id: "t3",
      title: "邀请 1 位好友",
      desc: "助力解锁终极大奖",
      progress: 0,
      status: "locked",
      actionLabel: "去邀请",
      rewardId: "r2",
    },
  ],
  rewards: [
    { id: "r1", title: "5 元无门槛券", threshold: 0.5, icon: "🎟️", desc: "浏览达标即可领取" },
    { id: "r2", title: "20 元会员券", threshold: 0.9, icon: "💎", desc: "邀请好友后解锁" },
    { id: "r3", title: "终极大礼包", threshold: 1, icon: "🎁", desc: "全部任务完成发放" },
  ],
  rules: [
    { title: "活动时间", content: "2024.07.01 - 2024.07.07，逾期任务与奖励失效。" },
    {
      title: "领取规则",
      content: "奖励按总体进度阈值解锁，达标后点击「领取」发放至账户；券类奖励有效期 7 天。",
    },
    {
      title: "特别说明",
      content: "邀请任务需好友完成注册并首单，视为有效助力；异常账号不予发放。",
    },
  ],
};

// priority 决定执行顺序：10 进度 → 20 任务 → 30 奖励 → 40 规则
const Activity = withPlugins(ActivityCore, [
  createProgressFxPlugin(), // 顶部进度条 + 100% 庆祝浮层
  createTaskListPlugin(), // 任务清单
  createRewardClaimPlugin(), // 奖励领取
  createRuleExpandPlugin(), // 规则折叠
]);

// meta 是演示台目录用的元信息（侧栏导航 / 路由），复制到你项目时可整段删掉
export const meta = {
  slug: "basic",
  title: "基础闭环：内核 + 4 官方插件",
  group: "basic",
  intro:
    "营销活动的最小完整形态——进度特效 / 任务清单 / 奖励领取 / 规则折叠各管一块，内核只负责骨架与生命周期转发。",
};

export default function Stage() {
  return (
    <Activity
      data={sampleActivity}
      onTaskAction={(id) => console.log("task action", id)}
      onClaim={(id) => console.log("claim", id)}
    />
  );
}
`,yk=`import React from "react";
import { ActivityCore, withPlugins } from "vane-activity";
import type { ActivityData } from "vane-activity";
import { createTaskListPlugin } from "vane-activity/custom-plugins/TaskListPlugin";

/**
 * 单插件聚焦：只挂 TaskListPlugin。
 * 此时活动只剩「任务清单」区——每行展示标题 / 描述 / 进度与状态，并带「去完成」动作按钮。
 * 每行的小进度条读的是 task.progress：签到 100%、浏览 60%、邀请 0%（越权锁定的不显示）。
 *
 * 本文件自含数据，复制到你的项目即可运行。演示台专用的 meta 导出可整段删掉。
 */
const data: ActivityData = {
  title: "夏日狂欢 · 7 日签到",
  tasks: [
    {
      id: "t1",
      title: "每日签到",
      desc: "连续签到领积分",
      progress: 1,
      status: "completed",
      actionLabel: "已签到",
    },
    {
      id: "t2",
      title: "浏览会场 3 个商品",
      desc: "了解活动好物",
      progress: 0.6,
      status: "available",
      actionLabel: "去浏览",
    },
    {
      id: "t3",
      title: "邀请 1 位好友",
      desc: "助力解锁终极大奖",
      progress: 0,
      status: "locked",
      actionLabel: "去邀请",
    },
  ],
  rewards: [],
  rules: [],
};

const Activity = withPlugins(ActivityCore, [createTaskListPlugin()]);

export const meta = {
  slug: "tasklist",
  title: "任务清单 TaskListPlugin",
  group: "plugin",
  intro:
    "只挂 TaskListPlugin 时，活动只剩「任务清单」区：每行展示标题 / 描述 / 进度与状态，并带「去完成」动作按钮。",
};

export default function Stage() {
  return <Activity data={data} onTaskAction={(id) => console.log("task action", id)} />;
}
`,xk=`import React from "react";
import { ActivityCore, withPlugins } from "vane-activity";
import type { ActivityData } from "vane-activity";
import { createProgressFxPlugin } from "vane-activity/custom-plugins/ProgressFxPlugin";

/**
 * 单插件聚焦：只挂 ProgressFxPlugin。
 *
 * 进度不是拍脑袋写的数字，而是「任务完成度的加权平均」（内核 computeProgress）：
 *   progress = Σ(task.progress × task.weight) / Σ(task.weight)
 *
 * 下面的数据三项任务全部 progress = 1、weight 取默认 1，所以：
 *   (1×1 + 1×1 + 1×1) / (1 + 1 + 1) = 3 / 3 = 1.0 → 界面显示 100%
 * 只有到 1.0 才会渲染那条「🎉 进度达成 100%」庆祝浮层（停在 0.99 也不弹）。
 *
 * 把三项 progress 改成 1 / 0.6 / 0 试试：(1 + 0.6 + 0) / 3 ≈ 0.53 → 界面显示 53%。
 *
 * 本文件自含数据，复制到你的项目即可运行。演示台专用的 meta 导出可整段删掉。
 */
const data: ActivityData = {
  title: "夏日狂欢 · 7 日签到",
  tasks: [
    { id: "t1", title: "每日签到", progress: 1, status: "completed" },
    { id: "t2", title: "浏览会场 3 个商品", progress: 1, status: "completed" },
    { id: "t3", title: "邀请 1 位好友", progress: 1, status: "completed" },
  ],
  rewards: [],
  rules: [],
};

const Activity = withPlugins(ActivityCore, [createProgressFxPlugin()]);

export const meta = {
  slug: "progressfx",
  title: "进度特效 ProgressFxPlugin",
  group: "plugin",
  intro:
    "顶部进度条 + 百分比数字。本例三项任务全完成 → 3/3 = 100%，弹出庆祝浮层；把任务进度改成 1/0.6/0 就是 53%。",
};

export default function Stage() {
  return <Activity data={data} />;
}
`,Pk=`import React from "react";
import { ActivityCore, withPlugins } from "vane-activity";
import type { ActivityData } from "vane-activity";
import { createRewardClaimPlugin } from "vane-activity/custom-plugins/RewardClaimPlugin";

/**
 * 单插件聚焦：只挂 RewardClaimPlugin。
 * 奖励按钮状态不是自己配的，是按「总体进度 vs 阈值」派生的：
 *   进度 = (1 + 0.6 + 0) / 3 ≈ 0.53（界面 53%）
 *   → 5 元券（阈值 0.5）≤ 进度，可领；20 元券（0.9）与终极大礼包（1.0）锁定。
 * 点击「领取」调 onClaim(id)（接业务发放接口）。
 *
 * 本文件自含数据，复制到你的项目即可运行。演示台专用的 meta 导出可整段删掉。
 */
const data: ActivityData = {
  title: "夏日狂欢 · 7 日签到",
  tasks: [
    { id: "t1", title: "每日签到", progress: 1, status: "completed" },
    { id: "t2", title: "浏览会场 3 个商品", progress: 0.6, status: "available" },
    { id: "t3", title: "邀请 1 位好友", progress: 0, status: "locked" },
  ],
  rewards: [
    { id: "r1", title: "5 元无门槛券", threshold: 0.5, icon: "🎟️", desc: "浏览达标即可领取" },
    { id: "r2", title: "20 元会员券", threshold: 0.9, icon: "💎", desc: "邀请好友后解锁" },
    { id: "r3", title: "终极大礼包", threshold: 1, icon: "🎁", desc: "全部任务完成发放" },
  ],
  rules: [],
};

const Activity = withPlugins(ActivityCore, [createRewardClaimPlugin()]);

export const meta = {
  slug: "rewardclaim",
  title: "奖励领取 RewardClaimPlugin",
  group: "plugin",
  intro:
    "只挂 RewardClaimPlugin 时，活动只剩「奖励领取」区：按钮状态按「总体进度 vs 阈值」派生（可领 / 已领 / 锁定），点击调 onClaim。",
};

export default function Stage() {
  return <Activity data={data} onClaim={(id) => console.log("claim", id)} />;
}
`,kk=`import React from "react";
import { ActivityCore, withPlugins } from "vane-activity";
import type { ActivityData } from "vane-activity";
import { createRuleExpandPlugin } from "vane-activity/custom-plugins/RuleExpandPlugin";

/**
 * 单插件聚焦：只挂 RuleExpandPlugin。
 * 渲染「活动规则」可折叠面板：折叠态按行数截断长文，点击展开并同步 aria-expanded。
 * rules 也支持纯字符串（整段文字不分条）或 { title, content } 分条结构，本例用后者。
 *
 * 本文件自含数据，复制到你的项目即可运行。演示台专用的 meta 导出可整段删掉。
 */
const data: ActivityData = {
  title: "夏日狂欢 · 7 日签到",
  tasks: [],
  rewards: [],
  rules: [
    { title: "活动时间", content: "2024.07.01 - 2024.07.07，逾期任务与奖励失效。" },
    {
      title: "领取规则",
      content: "奖励按总体进度阈值解锁，达标后点击「领取」发放至账户；券类奖励有效期 7 天。",
    },
    {
      title: "特别说明",
      content: "邀请任务需好友完成注册并首单，视为有效助力；异常账号不予发放。",
    },
  ],
};

const Activity = withPlugins(ActivityCore, [createRuleExpandPlugin()]);

export const meta = {
  slug: "ruleexpand",
  title: "规则折叠 RuleExpandPlugin",
  group: "plugin",
  intro:
    "只挂 RuleExpandPlugin 时，活动只剩「活动规则」可折叠面板：折叠态按行数截断长文，点击展开并同步 aria-expanded。",
};

export default function Stage() {
  return <Activity data={data} />;
}
`,wk=`import React from "react";
import { ActivityCore, withPlugins } from "vane-activity";
import type { ActivityData } from "vane-activity";
import { createProgressFxPlugin } from "vane-activity/custom-plugins/ProgressFxPlugin";
import { createTaskListPlugin } from "vane-activity/custom-plugins/TaskListPlugin";
import { createRewardClaimPlugin } from "vane-activity/custom-plugins/RewardClaimPlugin";
import { createRuleExpandPlugin } from "vane-activity/custom-plugins/RuleExpandPlugin";

/**
 * 进阶：四个插件都传了配置，并用「任务全完成」的数据触发 100% 庆祝浮层。
 * 这是生产里最常见的形态——进度条加高、完成态 / 已领态文案本地化、规则折叠到 2 行。
 *
 * 进度 = (1 + 1 + 1) / 3 = 1.0 → 界面 100%，三个奖励全部解锁（终极大礼包可领），
 * 顶部弹出「🎉 进度达成 100%」。
 *
 * 本文件自含数据，复制到你的项目即可运行。演示台专用的 meta 导出可整段删掉。
 */
const data: ActivityData = {
  title: "夏日狂欢 · 7 日签到",
  tasks: [
    {
      id: "t1",
      title: "每日签到",
      desc: "连续签到领积分",
      progress: 1,
      status: "completed",
      actionLabel: "已签到",
    },
    {
      id: "t2",
      title: "浏览会场 3 个商品",
      desc: "了解活动好物",
      progress: 1,
      status: "completed",
      actionLabel: "已浏览",
    },
    {
      id: "t3",
      title: "邀请 1 位好友",
      desc: "助力解锁终极大奖",
      progress: 1,
      status: "completed",
      actionLabel: "已邀请",
    },
  ],
  rewards: [
    { id: "r1", title: "5 元无门槛券", threshold: 0.5, icon: "🎟️", desc: "浏览达标即可领取" },
    { id: "r2", title: "20 元会员券", threshold: 0.9, icon: "💎", desc: "邀请好友后解锁" },
    { id: "r3", title: "终极大礼包", threshold: 1, icon: "🎁", desc: "全部任务完成发放" },
  ],
  rules: [
    { title: "活动时间", content: "2024.07.01 - 2024.07.07，逾期任务与奖励失效。" },
    {
      title: "领取规则",
      content: "奖励按总体进度阈值解锁，达标后点击「领取」发放至账户；券类奖励有效期 7 天。",
    },
    {
      title: "特别说明",
      content: "邀请任务需好友完成注册并首单，视为有效助力；异常账号不予发放。",
    },
  ],
};

const Activity = withPlugins(ActivityCore, [
  createProgressFxPlugin({ height: 12 }),
  createTaskListPlugin({ showProgress: true, doneLabel: "搞定" }),
  createRewardClaimPlugin({ claimedLabel: "已到账" }),
  createRuleExpandPlugin({ collapsedLines: 2 }),
]);

export const meta = {
  slug: "advanced",
  title: "进阶：带配置的完整闭环 + 100% 庆祝",
  group: "advanced",
  intro:
    "四个插件都传了配置（进度条加高、完成态文案、已领文案、规则折叠到 2 行），并用全完成任务触发 100% 庆祝浮层——生产里最常见的形态。",
};

export default function Stage() {
  return (
    <Activity
      data={data}
      onTaskAction={(id) => console.log("task action", id)}
      onClaim={(id) => console.log("claim", id)}
    />
  );
}
`,Sk=`import React from "react";
import { ActivityCore, withPlugins } from "vane-activity";
import type { ActivityData } from "vane-activity";
import { createProgressFxPlugin } from "vane-activity/custom-plugins/ProgressFxPlugin";
import { createCountdownTimerPlugin } from "vane-activity/custom-plugins/CountdownTimerPlugin";
import { createTaskListPlugin } from "vane-activity/custom-plugins/TaskListPlugin";

/**
 * CountdownTimerPlugin：进度条下方多一行「距活动结束 x天HH:MM:SS」，每秒自走。
 * 截止时间可来自工厂配置，也可像本例一样放在 data.endTime（两者都没配就不渲染）。
 * 最后 1 小时进入紧急态（文字变警示色）。
 *
 * 与 ProgressFx 同槽共存（renderProgress 都不声明独占）：进度条在上、倒计时在下。
 *
 * 本文件自含数据，复制到你的项目即可运行。演示台专用的 meta 导出可整段删掉。
 */
const data: ActivityData = {
  title: "夏日狂欢 · 7 日签到",
  endTime: "2026-12-31T23:59:59+08:00",
  tasks: [
    { id: "t1", title: "每日签到", progress: 1, status: "completed" },
    { id: "t2", title: "浏览会场 3 个商品", progress: 0.6, status: "available" },
    { id: "t3", title: "邀请 1 位好友", progress: 0, status: "locked" },
  ],
  rewards: [],
  rules: [],
};

const Activity = withPlugins(ActivityCore, [
  createProgressFxPlugin(),
  createCountdownTimerPlugin(),
  createTaskListPlugin(),
]);

export const meta = {
  slug: "countdown",
  title: "倒计时 CountdownTimerPlugin",
  group: "plugin",
  intro:
    "进度条下方追加每秒自走的倒计时行，截止时间读 data.endTime；最后 1 小时变紧急色。",
};

export default function Stage() {
  return <Activity data={data} />;
}
`,Ck=`import React from "react";
import { ActivityCore, withPlugins } from "vane-activity";
import type { ActivityData } from "vane-activity";
import { createProgressFxPlugin } from "vane-activity/custom-plugins/ProgressFxPlugin";
import { createMilestoneBarPlugin } from "vane-activity/custom-plugins/MilestoneBarPlugin";
import { createTaskListPlugin } from "vane-activity/custom-plugins/TaskListPlugin";

/**
 * MilestoneBarPlugin：把每个奖励的阈值映射成轨道节点——
 * 已领取=实心绿 / 已达标可领=警示橙 / 未达标=灰。progress 53% 时：
 * 5 元券（0.5）节点已点亮可领，20 元券（0.9）与终极大礼包（1.0）还是灰点。
 *
 * 与 ProgressFx 同槽共存：数字进度条在上、空间感里程碑在下，一个精确一个直观。
 *
 * 本文件自含数据，复制到你的项目即可运行。演示台专用的 meta 导出可整段删掉。
 */
const data: ActivityData = {
  title: "夏日狂欢 · 7 日签到",
  tasks: [
    { id: "t1", title: "每日签到", progress: 1, status: "completed" },
    { id: "t2", title: "浏览会场 3 个商品", progress: 0.6, status: "available" },
    { id: "t3", title: "邀请 1 位好友", progress: 0, status: "locked" },
  ],
  rewards: [
    { id: "r1", title: "5 元无门槛券", threshold: 0.5, icon: "🎟️", desc: "浏览达标即可领取" },
    { id: "r2", title: "20 元会员券", threshold: 0.9, icon: "💎", desc: "邀请好友后解锁" },
    { id: "r3", title: "终极大礼包", threshold: 1, icon: "🎁", desc: "全部任务完成发放" },
  ],
  rules: [],
};

const Activity = withPlugins(ActivityCore, [
  createProgressFxPlugin(),
  createMilestoneBarPlugin(),
  createTaskListPlugin(),
]);

export const meta = {
  slug: "milestone",
  title: "里程碑 MilestoneBarPlugin",
  group: "plugin",
  intro:
    "把奖励阈值画成轨道节点（绿=已领 / 橙=可领 / 灰=未达标），与数字进度条上下互补。",
};

export default function Stage() {
  return <Activity data={data} />;
}
`,_k=`import React from "react";
import { ActivityCore, withPlugins } from "vane-activity";
import type { ActivityData } from "vane-activity";
import { createCouponStackPlugin } from "vane-activity/custom-plugins/CouponStackPlugin";
import { createTaskListPlugin } from "vane-activity/custom-plugins/TaskListPlugin";

/**
 * CouponStackPlugin：奖励渲染成一摞错位的票券卡（RewardClaim 的变体风格）。
 *
 * 独占语义示范：CouponStack 与 RewardClaim 都声明独占 renderRewards 槽位，
 * 同时挂载时装配器只留 priority 高者（RewardClaim 30 > CouponStack 29，
 * 控制台会警告谁被挤出）。想要堆叠风格，就别挂 RewardClaim——本例正是如此。
 *
 * 本文件自含数据，复制到你的项目即可运行。演示台专用的 meta 导出可整段删掉。
 */
const data: ActivityData = {
  title: "夏日狂欢 · 7 日签到",
  tasks: [
    { id: "t1", title: "每日签到", progress: 1, status: "completed" },
    { id: "t2", title: "浏览会场 3 个商品", progress: 0.6, status: "available" },
    { id: "t3", title: "邀请 1 位好友", progress: 0, status: "locked" },
  ],
  rewards: [
    { id: "r1", title: "5 元无门槛券", threshold: 0.5, icon: "🎟️", desc: "浏览达标即可领取" },
    { id: "r2", title: "20 元会员券", threshold: 0.9, icon: "💎", desc: "邀请好友后解锁" },
    { id: "r3", title: "终极大礼包", threshold: 1, icon: "🎁", desc: "全部任务完成发放" },
  ],
  rules: [],
};

const Activity = withPlugins(ActivityCore, [
  createCouponStackPlugin(), // 独占 renderRewards（未挂 RewardClaim，所以由它接管）
  createTaskListPlugin(),
]);

export const meta = {
  slug: "coupon-stack",
  title: "券堆叠 CouponStackPlugin",
  group: "plugin",
  intro:
    "票券式卡面替代 RewardClaim 的行式列表；两者同槽独占，同时挂载时高 priority 者胜。",
};

export default function Stage() {
  return (
    <Activity data={data} onClaim={(id) => console.log("claim", id)} />
  );
}
`,bk=`import React from "react";
import { ActivityCore, withPlugins } from "vane-activity";
import type { ActivityData } from "vane-activity";
import { createRuleModalPlugin } from "vane-activity/custom-plugins/RuleModalPlugin";
import { createTaskListPlugin } from "vane-activity/custom-plugins/TaskListPlugin";

/**
 * RuleModalPlugin：规则区只留一个「活动规则 ›」按钮，点击弹出模态窗看完整规则。
 *
 * 独占语义示范：RuleModal 与 RuleExpand 都声明独占 renderRules 槽位，
 * 同时挂载时只留 priority 高者（RuleExpand 40 > RuleModal 39）。
 * 想要弹窗形态，就别挂 RuleExpand——本例正是如此。
 *
 * 本文件自含数据，复制到你的项目即可运行。演示台专用的 meta 导出可整段删掉。
 */
const data: ActivityData = {
  title: "夏日狂欢 · 7 日签到",
  tasks: [
    { id: "t1", title: "每日签到", progress: 1, status: "completed" },
    { id: "t2", title: "浏览会场 3 个商品", progress: 0.6, status: "available" },
    { id: "t3", title: "邀请 1 位好友", progress: 0, status: "locked" },
  ],
  rewards: [],
  rules: [
    { title: "活动时间", content: "2024.07.01 - 2024.07.07，逾期任务与奖励失效。" },
    {
      title: "领取规则",
      content: "奖励按总体进度阈值解锁，达标后点击「领取」发放至账户；券类奖励有效期 7 天。",
    },
    {
      title: "特别说明",
      content: "邀请任务需好友完成注册并首单，视为有效助力；异常账号不予发放。",
    },
  ],
};

const Activity = withPlugins(ActivityCore, [
  createRuleModalPlugin(), // 独占 renderRules（未挂 RuleExpand，所以由它接管）
  createTaskListPlugin(),
]);

export const meta = {
  slug: "rule-modal",
  title: "弹窗规则 RuleModalPlugin",
  group: "plugin",
  intro:
    "规则折叠的弹窗形态：入口只剩一个按钮，规则长文收进模态窗；与 RuleExpand 同槽独占。",
};

export default function Stage() {
  return <Activity data={data} />;
}
`,Rk=`import React from "react";
import { ActivityCore, withPlugins } from "vane-activity";
import type { ActivityData } from "vane-activity";
import { createProgressFxPlugin } from "vane-activity/custom-plugins/ProgressFxPlugin";
import { createConfettiPlugin } from "vane-activity/custom-plugins/ConfettiPlugin";
import { createRewardClaimPlugin } from "vane-activity/custom-plugins/RewardClaimPlugin";
import { createTaskListPlugin } from "vane-activity/custom-plugins/TaskListPlugin";

/**
 * ConfettiPlugin：进度达成 100% 时容器内下落彩纸。
 *
 * 浮层共存示范：overlay 槽位天然可叠加、不声明独占——本例同时挂 ProgressFx
 * （自带「🎉 进度达成 100%」文字横幅）与 Confetti（彩纸层），两者同屏。
 * 想要「提前庆祝」可以配 threshold（如 0.9）。
 *
 * 进度 = (1 + 1 + 1) / 3 = 1.0 → 100%，终极大礼包（阈值 1）也可领取。
 *
 * 本文件自含数据，复制到你的项目即可运行。演示台专用的 meta 导出可整段删掉。
 */
const data: ActivityData = {
  title: "夏日狂欢 · 7 日签到",
  tasks: [
    { id: "t1", title: "每日签到", progress: 1, status: "completed" },
    { id: "t2", title: "浏览会场 3 个商品", progress: 1, status: "completed" },
    { id: "t3", title: "邀请 1 位好友", progress: 1, status: "completed" },
  ],
  rewards: [
    { id: "r1", title: "5 元无门槛券", threshold: 0.5, icon: "🎟️", desc: "浏览达标即可领取" },
    { id: "r2", title: "20 元会员券", threshold: 0.9, icon: "💎", desc: "邀请好友后解锁" },
    { id: "r3", title: "终极大礼包", threshold: 1, icon: "🎁", desc: "全部任务完成发放" },
  ],
  rules: [],
};

const Activity = withPlugins(ActivityCore, [
  createProgressFxPlugin(), // 文字横幅浮层（overlay priority 10）
  createConfettiPlugin(), // 彩纸层浮层（overlay priority 50，共存不互斥）
  createRewardClaimPlugin(),
  createTaskListPlugin(),
]);

export const meta = {
  slug: "confetti",
  title: "彩纸庆祝 ConfettiPlugin",
  group: "plugin",
  intro:
    "100% 时彩纸下落；与 ProgressFx 的文字横幅同屏共存——overlay 槽位可叠加、不独占。",
};

export default function Stage() {
  return (
    <Activity data={data} onClaim={(id) => console.log("claim", id)} />
  );
}
`,Tk=`import React from "react";
import { ActivityCore, withPlugins } from "vane-activity";
import type { ActivityData } from "vane-activity";
import { createActivityHeaderPlugin } from "vane-activity/custom-plugins/ActivityHeaderPlugin";
import { createProgressFxPlugin } from "vane-activity/custom-plugins/ProgressFxPlugin";
import { createTaskListPlugin } from "vane-activity/custom-plugins/TaskListPlugin";

/**
 * ActivityHeaderPlugin：活动头部横幅（renderHeader 槽，Core 最顶部）。
 * 徽章不是写死的文案，而是由 data.endTime 派生——这里取「当前 + 7 天」，
 * 所以任何时间打开都显示「剩 7 天」，复制走也不会过期。
 *
 * 进度仍是 53%：任务加权 (1 + 0.6 + 0) / 3 ≈ 0.53，
 * 所以进度条停在 53%、5 元券（阈值 0.5）已可领。
 *
 * 本文件自含数据，复制到你的项目即可运行。演示台专用的 meta 导出可整段删掉。
 */
const data: ActivityData = {
  title: "夏日狂欢 · 7 日签到",
  endTime: Date.now() + 7 * 24 * 60 * 60 * 1000,
  tasks: [
    { id: "t1", title: "每日签到", progress: 1, status: "completed" },
    { id: "t2", title: "浏览会场 3 个商品", progress: 0.6, status: "available" },
    { id: "t3", title: "邀请 1 位好友", progress: 0, status: "locked" },
  ],
  rewards: [
    { id: "r1", title: "5 元无门槛券", threshold: 0.5, icon: "🎟️" },
    { id: "r2", title: "20 元会员券", threshold: 0.9, icon: "💎" },
  ],
  rules: [],
};

const Activity = withPlugins(ActivityCore, [
  createActivityHeaderPlugin({
    subtitle: "连续签到 7 天，最高领 20 元会员券",
    tags: ["限时", "签到", "新人专享"],
    icon: "☀️",
  }),
  createProgressFxPlugin(),
  createTaskListPlugin(),
]);

export const meta = {
  slug: "header",
  title: "头部横幅 ActivityHeaderPlugin",
  group: "plugin",
  intro: "标题 + 副标题 + 标签 + 状态徽章；徽章由 data.endTime 派生，不写死文案。",
};

export default function Stage() {
  return <Activity data={data} />;
}
`,jk=`import React from "react";
import { ActivityCore, withPlugins } from "vane-activity";
import type { ActivityData } from "vane-activity";
import { createProgressRingPlugin } from "vane-activity/custom-plugins/ProgressRingPlugin";
import { createProgressFxPlugin } from "vane-activity/custom-plugins/ProgressFxPlugin";
import { createTaskListPlugin } from "vane-activity/custom-plugins/TaskListPlugin";

/**
 * ProgressRingPlugin：环形进度（renderProgress 槽）。
 * 进度 53% 来自任务加权：(1 + 0.6 + 0) / 3 ≈ 0.53 —— 环走一半，中心数字 53。
 * 右侧第二行「距「20 元会员券」还差 37%」是插件自己算的：
 * 在未领取的奖励里找第一个 threshold > 53% 的档位（0.9），0.9 - 0.53 → 37%。
 *
 * 与 ProgressFx 同槽共存：环在上（order 0）、数字条在下（order 1），
 * 一个给「一眼比例」，一个给「精确刻度」。
 *
 * 本文件自含数据，复制到你的项目即可运行。演示台专用的 meta 导出可整段删掉。
 */
const data: ActivityData = {
  title: "夏日狂欢 · 7 日签到",
  tasks: [
    { id: "t1", title: "每日签到", progress: 1, status: "completed" },
    { id: "t2", title: "浏览会场 3 个商品", progress: 0.6, status: "available" },
    { id: "t3", title: "邀请 1 位好友", progress: 0, status: "locked" },
  ],
  rewards: [
    { id: "r1", title: "5 元无门槛券", threshold: 0.5, icon: "🎟️" },
    { id: "r2", title: "20 元会员券", threshold: 0.9, icon: "💎" },
    { id: "r3", title: "终极大礼包", threshold: 1, icon: "🎁" },
  ],
  rules: [],
};

const Activity = withPlugins(ActivityCore, [
  createProgressRingPlugin({ size: 112, label: "签到总进度", order: 0 }),
  createProgressFxPlugin({ order: 1 }),
  createTaskListPlugin(),
]);

export const meta = {
  slug: "progress-ring",
  title: "环形进度 ProgressRingPlugin",
  group: "plugin",
  intro: "SVG 双环 + 中心百分比 + 「距下一档还差 N%」；与进度条同槽上下互补。",
};

export default function Stage() {
  return <Activity data={data} />;
}
`,Ek=`import React from "react";
import { ActivityCore, withPlugins } from "vane-activity";
import type { ActivityData } from "vane-activity";
import { createClaimToastPlugin } from "vane-activity/custom-plugins/ClaimToastPlugin";
import { createRewardClaimPlugin } from "vane-activity/custom-plugins/RewardClaimPlugin";
import { createProgressFxPlugin } from "vane-activity/custom-plugins/ProgressFxPlugin";
import { createTaskListPlugin } from "vane-activity/custom-plugins/TaskListPlugin";

/**
 * ClaimToastPlugin：领取成功轻提示（renderOverlay 槽）。
 * 进度 53% 来自 (1 + 0.6 + 0) / 3 ≈ 0.53，于是 5 元券（阈值 0.5）状态是 claimable、
 * 20 元券（0.9）还是 locked —— 点「领取」就会在右下角浮出「已领取：5 元无门槛券」。
 *
 * 首屏已有的领取记录不会补弹；连续领两张会排队显示，各自计时消失。
 *
 * 本文件自含数据，复制到你的项目即可运行。演示台专用的 meta 导出可整段删掉。
 */
const data: ActivityData = {
  title: "夏日狂欢 · 7 日签到",
  tasks: [
    { id: "t1", title: "每日签到", progress: 1, status: "completed" },
    { id: "t2", title: "浏览会场 3 个商品", progress: 0.6, status: "available" },
    { id: "t3", title: "邀请 1 位好友", progress: 0, status: "locked" },
  ],
  rewards: [
    { id: "r1", title: "5 元无门槛券", threshold: 0.5, icon: "🎟️", desc: "浏览达标即可领取" },
    { id: "r2", title: "20 元会员券", threshold: 0.9, icon: "💎", desc: "邀请好友后解锁" },
  ],
  rules: [],
};

const Activity = withPlugins(ActivityCore, [
  createProgressFxPlugin(),
  createTaskListPlugin(),
  createRewardClaimPlugin(),
  createClaimToastPlugin({ durationMs: 2600, position: "bottom-right" }),
]);

export const meta = {
  slug: "claim-toast",
  title: "领取提示 ClaimToastPlugin",
  group: "plugin",
  intro: "领取后右下角淡入「已领取：xx」，2.6s 自动消失；多张排队、互不吞没。",
};

export default function Stage() {
  return <Activity data={data} />;
}
`,$k=`import React from "react";
import { ActivityCore, withPlugins } from "vane-activity";
import type { ActivityData } from "vane-activity";
import { createShareBoostPlugin } from "vane-activity/custom-plugins/ShareBoostPlugin";
import { createProgressFxPlugin } from "vane-activity/custom-plugins/ProgressFxPlugin";
import { createTaskListPlugin } from "vane-activity/custom-plugins/TaskListPlugin";

/**
 * ShareBoostPlugin：好友助力条（renderFooter 槽，活动最底部）。
 * 名额来自 data.share —— total 3 / used 2 / helpers 2 人，
 * 所以 3 段格子亮 2 段、文案「还差 1 人解锁下一档奖励」，按钮可点。
 *
 * 不传 onInvite 时点一下自己 +1（本地乐观态，无后端也能演示）；
 * 真实业务请传 onInvite 并回写 data.share.used，否则按钮点了没有视觉变化。
 *
 * 进度 53% 来自任务加权 (1 + 0.6 + 0) / 3。
 * 本文件自含数据，复制到你的项目即可运行。演示台专用的 meta 导出可整段删掉。
 */
const data: ActivityData = {
  title: "夏日狂欢 · 7 日签到",
  tasks: [
    { id: "t1", title: "每日签到", progress: 1, status: "completed" },
    { id: "t2", title: "浏览会场 3 个商品", progress: 0.6, status: "available" },
    { id: "t3", title: "邀请 1 位好友", progress: 0, status: "locked" },
  ],
  rewards: [{ id: "r1", title: "5 元无门槛券", threshold: 0.5, icon: "🎟️" }],
  rules: [],
  share: {
    total: 3,
    used: 2,
    helpers: [
      { id: "u1", name: "阿柚", avatar: "🍊" },
      { id: "u2", name: "小满", avatar: "🌾" },
    ],
  },
};

const Activity = withPlugins(ActivityCore, [
  createProgressFxPlugin(),
  createTaskListPlugin(),
  createShareBoostPlugin({ title: "邀请好友助力", maxAvatars: 5 }),
]);

export const meta = {
  slug: "share-boost",
  title: "好友助力 ShareBoostPlugin",
  group: "plugin",
  intro: "分段名额 + 头像堆 + 「还差 N 人」；满额按钮切深灰，不用 opacity 压字。",
};

export default function Stage() {
  return <Activity data={data} />;
}
`,Ak=`import React from "react";
import { ActivityCore, withPlugins } from "vane-activity";
import type { ActivityData } from "vane-activity";
import { createLeaderboardPlugin } from "vane-activity/custom-plugins/LeaderboardPlugin";
import { createShareBoostPlugin } from "vane-activity/custom-plugins/ShareBoostPlugin";
import { createTaskListPlugin } from "vane-activity/custom-plugins/TaskListPlugin";

/**
 * LeaderboardPlugin + ShareBoostPlugin：两个底部社交插件同槽共存。
 * 排序规则是「order 升序 → priority 降序」，这里显式写 order：
 * 榜单 order 0 在上、助力 order 1 在下 —— 以后调 priority 也不会打乱版式。
 *
 * 榜单数据来自 data.leaderboard，按 score 降序取前 3；isMe 行浅橙底 + 「我」标签。
 * 若把 isMe 那条的 score 改到第 4 名以下，插件会自动在底部用虚线补一行真实名次。
 *
 * 进度 53% 来自任务加权 (1 + 0.6 + 0) / 3。
 * 本文件自含数据，复制到你的项目即可运行。演示台专用的 meta 导出可整段删掉。
 */
const data: ActivityData = {
  title: "夏日狂欢 · 7 日签到",
  tasks: [
    { id: "t1", title: "每日签到", progress: 1, status: "completed" },
    { id: "t2", title: "浏览会场 3 个商品", progress: 0.6, status: "available" },
    { id: "t3", title: "邀请 1 位好友", progress: 0, status: "locked" },
  ],
  rewards: [{ id: "r1", title: "5 元无门槛券", threshold: 0.5, icon: "🎟️" }],
  rules: [],
  leaderboard: [
    { id: "u1", name: "阿柚", score: 1280, avatar: "🍊" },
    { id: "me", name: "我", score: 960, avatar: "🙋", isMe: true },
    { id: "u2", name: "小满", score: 910, avatar: "🌾" },
    { id: "u3", name: "大白", score: 640, avatar: "🐻" },
  ],
  share: { total: 3, used: 1, helpers: [{ id: "u1", name: "阿柚", avatar: "🍊" }] },
};

const Activity = withPlugins(ActivityCore, [
  createTaskListPlugin(),
  createLeaderboardPlugin({ title: "好友积分榜", topN: 3, order: 0 }),
  createShareBoostPlugin({ title: "邀请好友助力", order: 1 }),
]);

export const meta = {
  slug: "leaderboard",
  title: "好友榜 LeaderboardPlugin",
  group: "plugin",
  intro: "前 3 名 + 我的名次高亮；与助力条同槽靠 order 定序，互不重影。",
};

export default function Stage() {
  return <Activity data={data} />;
}
`,Lk=`import React from "react";
import { ActivityCore, withPlugins } from "vane-activity";
import type { ActivityData } from "vane-activity";
import { createAnnouncementPlugin } from "vane-activity/custom-plugins/AnnouncementPlugin";
import { createActivityHeaderPlugin } from "vane-activity/custom-plugins/ActivityHeaderPlugin";
import { createProgressFxPlugin } from "vane-activity/custom-plugins/ProgressFxPlugin";
import { createTaskListPlugin } from "vane-activity/custom-plugins/TaskListPlugin";

/**
 * AnnouncementPlugin：公告条，落在 renderHeader 槽，位于头部横幅之上。
 * priority 8 > ActivityHeaderPlugin 的 5 —— 同槽默认公告在上、横幅在下，不用写 order。
 *
 * 跑马灯是纯 CSS（条目复制一份 + translateX(-50%)），没有任何 setInterval；
 * 悬停会暂停，系统开了「减少动态效果」时自动静止。
 * 条目来自 data.announcements，插件 config 的 items 只做无数据时的兜底。
 *
 * 进度 53% 来自任务加权 (1 + 0.6 + 0) / 3。
 * 本文件自含数据，复制到你的项目即可运行。演示台专用的 meta 导出可整段删掉。
 */
const data: ActivityData = {
  title: "夏日狂欢 · 7 日签到",
  announcements: [
    "8.1-8.7 全场券 5 折起，先领券再下单",
    "每日 20:00 抽 20 元无门槛券，限前 1000 名",
    "邀请好友下单再得 10 元红包，上不封顶",
  ],
  tasks: [
    { id: "t1", title: "每日签到", progress: 1, status: "completed" },
    { id: "t2", title: "浏览会场 3 个商品", progress: 0.6, status: "available" },
    { id: "t3", title: "邀请 1 位好友", progress: 0, status: "locked" },
  ],
  rewards: [{ id: "r1", title: "5 元无门槛券", threshold: 0.5, icon: "🎟️" }],
  rules: [],
};

const Activity = withPlugins(ActivityCore, [
  createAnnouncementPlugin({ label: "公告", speedSec: 18 }),
  createActivityHeaderPlugin({ subtitle: "连续签到 7 天，最高领 20 元会员券", icon: "☀️" }),
  createProgressFxPlugin(),
  createTaskListPlugin(),
]);

export const meta = {
  slug: "announcement",
  title: "公告条 AnnouncementPlugin",
  group: "plugin",
  intro: "纯 CSS 跑马灯播报多条公告，悬停暂停；与头部横幅同槽，靠 priority 定在横幅之上。",
};

export default function Stage() {
  return <Activity data={data} />;
}
`,Nk=`import React from "react";
import { ActivityCore, withPlugins } from "vane-activity";
import type { ActivityData } from "vane-activity";
import { createCheckinCalendarPlugin } from "vane-activity/custom-plugins/CheckinCalendarPlugin";
import { createProgressFxPlugin } from "vane-activity/custom-plugins/ProgressFxPlugin";
import { createTaskListPlugin } from "vane-activity/custom-plugins/TaskListPlugin";

/**
 * CheckinCalendarPlugin：签到日历，落在 renderProgress 槽，与进度条同槽共存。
 *
 * 靠 order 定上下：日历 order 0 在上、进度条 order 1 在下（order 升序优先，
 * 同 order 才比 priority，所以想稳定版式就显式写 order）。
 *
 * data.checkin = { days: 7, done: 3 } 表示 7 天里已签 3 天，
 * todayIndex 缺省等于 done，于是第 4 格显示虚线橙框「今」，按钮可点；
 * 不传 onCheckin 时点按钮走组件内乐观 +1（签满 7 天后按钮变「已完成」）。
 *
 * 进度仍是 53%：任务加权 (1 + 0.6 + 0) / 3。
 * 本文件自含数据，复制到你的项目即可运行。演示台专用的 meta 导出可整段删掉。
 */
const data: ActivityData = {
  title: "夏日狂欢 · 7 日签到",
  checkin: { days: 7, done: 3 },
  tasks: [
    { id: "t1", title: "每日签到", progress: 1, status: "completed" },
    { id: "t2", title: "浏览会场 3 个商品", progress: 0.6, status: "available" },
    { id: "t3", title: "邀请 1 位好友", progress: 0, status: "locked" },
  ],
  rewards: [{ id: "r1", title: "5 元无门槛券", threshold: 0.5, icon: "🎟️" }],
  rules: [],
};

const Activity = withPlugins(ActivityCore, [
  createCheckinCalendarPlugin({ title: "连续签到 · 7 天", order: 0 }),
  createProgressFxPlugin({ order: 1 }),
  createTaskListPlugin(),
]);

export const meta = {
  slug: "checkin",
  title: "签到日历 CheckinCalendarPlugin",
  group: "plugin",
  intro: "N 格三态日历（已签 / 今日 / 未开始），点「今日签到」乐观 +1；与进度条同槽靠 order 定序。",
};

export default function Stage() {
  return <Activity data={data} />;
}
`,Mk=`import React from "react";
import { ActivityCore, withPlugins } from "vane-activity";
import type { ActivityData } from "vane-activity";
import { createTaskTabsPlugin } from "vane-activity/custom-plugins/TaskTabsPlugin";
import { createProgressFxPlugin } from "vane-activity/custom-plugins/ProgressFxPlugin";
import { createRewardClaimPlugin } from "vane-activity/custom-plugins/RewardClaimPlugin";

/**
 * TaskTabsPlugin：分组任务清单，独占 renderTasks 槽。
 *
 * 分组由 data.taskGroups 声明，任务用 task.group 归属；每个页签右上角带完成度（1/2）。
 * 内置「全部」页签（key = all）恒存在，聚合所有任务。
 *
 * 独占语义：TaskListPlugin 与 TaskTabsPlugin 都声明了 exclusiveSlots: ["renderTasks"]，
 * 同时装配时按 priority 去重 —— 本插件 22 > TaskList 20，TaskList 会被整体丢弃并在
 * 控制台 warn。所以这里只装 TaskTabs，别再叠一个 TaskList。
 *
 * 进度按全部任务加权：(1 + 1 + 0.5 + 0 + 0 + 0) / 6 ≈ 0.42，5 元券（阈值 0.5）还差一点。
 * 本文件自含数据，复制到你的项目即可运行。演示台专用的 meta 导出可整段删掉。
 */
const data: ActivityData = {
  title: "夏日狂欢 · 任务中心",
  taskGroups: [
    { key: "daily", label: "每日", icon: "📅" },
    { key: "growth", label: "成长", icon: "🌱" },
    { key: "invite", label: "邀请", icon: "🤝" },
  ],
  tasks: [
    { id: "d1", title: "每日签到", desc: "连续签到领积分", progress: 1, status: "completed", group: "daily", actionLabel: "已签到" },
    { id: "d2", title: "浏览 3 个商品", desc: "了解活动好物", progress: 1, status: "completed", group: "daily", actionLabel: "已完成" },
    { id: "g1", title: "收藏店铺", desc: "收藏后抽 20 元券", progress: 0.5, status: "available", group: "growth", actionLabel: "去收藏" },
    { id: "g2", title: "加入会员", desc: "享双倍积分", progress: 0, status: "locked", group: "growth", actionLabel: "去开通" },
    { id: "i1", title: "邀请 1 位好友", desc: "好友下单后到账", progress: 0, status: "locked", group: "invite", actionLabel: "去邀请" },
    { id: "i2", title: "好友助力 3 人", desc: "解锁终极大礼包", progress: 0, status: "locked", group: "invite", actionLabel: "去助力" },
  ],
  rewards: [
    { id: "r1", title: "5 元无门槛券", threshold: 0.5, icon: "🎟️" },
    { id: "r2", title: "20 元会员券", threshold: 0.9, icon: "💎" },
  ],
  rules: [],
};

const Activity = withPlugins(ActivityCore, [
  createProgressFxPlugin(),
  createTaskTabsPlugin({ defaultTab: "daily", doneLabel: "已完成" }),
  createRewardClaimPlugin(),
]);

export const meta = {
  slug: "task-tabs",
  title: "分组任务 TaskTabsPlugin",
  group: "plugin",
  intro: "页签切换 + 每组完成度计数；独占 renderTasks，与 TaskList 二选一。",
};

export default function Stage() {
  return <Activity data={data} />;
}
`,zk=`import React from "react";
import { ActivityCore, withPlugins } from "vane-activity";
import type { ActivityData } from "vane-activity";
import { createJackpotPlugin } from "vane-activity/custom-plugins/JackpotPlugin";
import { createProgressFxPlugin } from "vane-activity/custom-plugins/ProgressFxPlugin";
import { createTaskListPlugin } from "vane-activity/custom-plugins/TaskListPlugin";

/**
 * JackpotPlugin：幸运抽奖九宫格，落在 renderFooter 槽。
 *
 * 奖池固定 8 格（不足自动补「谢谢参与」，超过取前 8），中心是抽取按钮；
 * 点一次先乐观扣 1 次，然后高亮按 8 的倍数走两圈以上、逐渐减速，停在随机中奖格。
 * 次数归零后按钮变「已抽完」并禁用。
 *
 * 不传 onDraw 时中奖结果只展示在卡片里；接后端就传 onDraw 发奖并埋点
 * （次数已由插件扣减，不用回写）。
 *
 * 进度 53% 来自任务加权 (1 + 0.6 + 0) / 3。
 * 本文件自含数据，复制到你的项目即可运行。演示台专用的 meta 导出可整段删掉。
 */
const data: ActivityData = {
  title: "夏日狂欢 · 幸运抽奖",
  tasks: [
    { id: "t1", title: "每日签到", progress: 1, status: "completed" },
    { id: "t2", title: "浏览会场 3 个商品", progress: 0.6, status: "available" },
    { id: "t3", title: "邀请 1 位好友", progress: 0, status: "locked" },
  ],
  rewards: [{ id: "r1", title: "5 元无门槛券", threshold: 0.5, icon: "🎟️" }],
  rules: [],
};

const Activity = withPlugins(ActivityCore, [
  createProgressFxPlugin(),
  createTaskListPlugin(),
  createJackpotPlugin({
    title: "幸运抽奖 · 100% 中奖",
    times: 3,
    prizes: [
      { id: "p1", label: "5 元券", icon: "🎟️" },
      { id: "p2", label: "谢谢参与", icon: "🍬" },
      { id: "p3", label: "20 积分", icon: "⭐" },
      { id: "p4", label: "会员 7 天", icon: "💎" },
      { id: "p5", label: "1 元红包", icon: "🧧" },
      { id: "p6", label: "谢谢参与", icon: "🍬" },
      { id: "p7", label: "免邮券", icon: "📦" },
      { id: "p8", label: "100 积分", icon: "🌟" },
    ],
  }),
]);

export const meta = {
  slug: "jackpot",
  title: "抽奖九宫格 JackpotPlugin",
  group: "plugin",
  intro: "8 格奖池 + 中心按钮，高亮转两圈减速停格，次数用完自动禁用。",
};

export default function Stage() {
  return <Activity data={data} />;
}
`,Ok=`import React from "react";
import { ActivityCore, withPlugins } from "vane-activity";
import type { ActivityData } from "vane-activity";
import { createRedeemCodePlugin } from "vane-activity/custom-plugins/RedeemCodePlugin";
import { createRewardClaimPlugin } from "vane-activity/custom-plugins/RewardClaimPlugin";
import { createProgressFxPlugin } from "vane-activity/custom-plugins/ProgressFxPlugin";

/**
 * RedeemCodePlugin：兑换码，落在 renderRewards 槽且不声明独占，
 * 因此能和 RewardClaimPlugin 的奖励列表上下叠放（这里靠 order 把兑换卡放在上面）。
 *
 * 校验顺序：非空 → 最短长度 8 位 → 前缀 VANE，全过才调 onRedeem；
 * onRedeem 返回 false 时展示「兑换码无效或已被使用」。
 * 示例里只认 VANE-8888（前缀对但码错也会被拒），用来演示失败态。
 *
 * 输入框内容提交时会 trim + 转大写，业务侧拿到的一定是规范化后的码。
 * 本文件自含数据，复制到你的项目即可运行。演示台专用的 meta 导出可整段删掉。
 */
const data: ActivityData = {
  title: "夏日狂欢 · 兑换中心",
  tasks: [
    { id: "t1", title: "每日签到", progress: 1, status: "completed" },
    { id: "t2", title: "浏览会场 3 个商品", progress: 0.6, status: "available" },
    { id: "t3", title: "邀请 1 位好友", progress: 0, status: "locked" },
  ],
  rewards: [{ id: "r1", title: "5 元无门槛券", threshold: 0.5, icon: "🎟️" }],
  rules: [],
};

const Activity = withPlugins(ActivityCore, [
  createProgressFxPlugin(),
  createRedeemCodePlugin({
    prefix: "VANE",
    order: 0,
    onRedeem: (code) => {
      // 真实项目里换成接口核销；返回 false 就展示失败文案
      console.log("[redeem]", code);
      return code === "VANE-8888";
    },
  }),
  createRewardClaimPlugin({ order: 1 }),
]);

export const meta = {
  slug: "redeem-code",
  title: "兑换码 RedeemCodePlugin",
  group: "plugin",
  intro: "输入框 + 长度/前缀校验 + 成功失败回执；与奖励列表同槽共存。",
};

export default function Stage() {
  return <Activity data={data} />;
}
`,Dk=Object.assign({"./00-basic.tsx":Nv,"./01-tasklist.tsx":Iv,"./02-progressfx.tsx":Hv,"./03-rewardclaim.tsx":Yv,"./04-ruleexpand.tsx":ey,"./05-advanced.tsx":oy,"./06-countdown.tsx":Cy,"./07-milestone.tsx":Fy,"./08-coupon-stack.tsx":i0,"./09-rule-modal.tsx":C0,"./10-confetti.tsx":H0,"./11-header.tsx":l1,"./12-progress-ring.tsx":S1,"./13-claim-toast.tsx":B1,"./14-share-boost.tsx":ix,"./15-leaderboard.tsx":Sx,"./16-announcement.tsx":Fx,"./17-checkin.tsx":rP,"./18-task-tabs.tsx":SP,"./19-jackpot.tsx":qP,"./20-redeem-code.tsx":hk}),Ik=Object.assign({"./00-basic.tsx":vk,"./01-tasklist.tsx":yk,"./02-progressfx.tsx":xk,"./03-rewardclaim.tsx":Pk,"./04-ruleexpand.tsx":kk,"./05-advanced.tsx":wk,"./06-countdown.tsx":Sk,"./07-milestone.tsx":Ck,"./08-coupon-stack.tsx":_k,"./09-rule-modal.tsx":bk,"./10-confetti.tsx":Rk,"./11-header.tsx":Tk,"./12-progress-ring.tsx":jk,"./13-claim-toast.tsx":Ek,"./14-share-boost.tsx":$k,"./15-leaderboard.tsx":Ak,"./16-announcement.tsx":Lk,"./17-checkin.tsx":Nk,"./18-task-tabs.tsx":Mk,"./19-jackpot.tsx":zk,"./20-redeem-code.tsx":Ok}),Fk=e=>e.replace(/^\.\//,""),Ls=Object.entries(Dk).map(([e,t])=>{const n=Fk(e);return{meta:t.meta,Stage:t.default,file:n,source:Ik[e]??""}}).sort((e,t)=>e.file.localeCompare(t.file)),Bk=Array.from(new Set(Ls.map(e=>e.meta.group))),yf={basic:{label:"基础用法"},advanced:{label:"进阶用法"},plugin:{label:"插件示例"}},Wk="import|from|export|default|function|return|const|let|var|new|if|else|for|of|in|while|switch|case|break|continue|type|interface|extends|implements|as|satisfies|await|async|throw|try|catch|finally|class|typeof|instanceof|delete|void|yield",Uk="true|false|null|undefined|this|super",Hk="number|string|boolean|object|any|unknown|never|React|HTMLElement|void",Mu=new RegExp([String.raw`(\/\/[^\n]*|\/\*[\s\S]*?\*\/)`,String.raw`(\`(?:\\[\s\S]|[^\\\`])*\`|"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*')`,String.raw`\b(${Wk})\b`,String.raw`\b(${Uk})\b`,String.raw`\b(${Hk})\b`,String.raw`(<\/?[A-Za-z][\w.$]*)`,String.raw`\b(\d+(?:\.\d+)?)\b`].join("|"),"g"),zu=["tok-comment","tok-string","tok-kw","tok-lit","tok-type","tok-tag","tok-num"];function Vk(e){const t=[];let n=0;Mu.lastIndex=0;let r;for(;r=Mu.exec(e);){r.index>n&&t.push({text:e.slice(n,r.index),cls:null});const i=zu.findIndex((o,s)=>r[s+1]!==void 0);t.push({text:r[0],cls:i>=0?zu[i]:null}),n=r.index+r[0].length}return n<e.length&&t.push({text:e.slice(n),cls:null}),t}function Ou(e){try{const t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="fixed",t.style.opacity="0",document.body.appendChild(t),t.select();const n=document.execCommand("copy");return document.body.removeChild(t),n}catch{return!1}}function Qk({code:e,title:t="tsx",collapseAfter:n=24,maxHeight:r}){const[i,o]=x.useState("idle"),[s,l]=x.useState(!1),a=x.useMemo(()=>e.replace(/\s+$/,"").split(`
`),[e]),c=n>0&&a.length>n,f=c&&!s?a.slice(0,n).join(`
`):e,p=x.useMemo(()=>Vk(f),[f]),m=x.useCallback(async()=>{var y;let h=!1;if((y=navigator.clipboard)!=null&&y.writeText)try{await navigator.clipboard.writeText(e),h=!0}catch{h=Ou(e)}else h=Ou(e);o(h?"ok":"fail"),window.setTimeout(()=>o("idle"),1600)},[e]);return u.jsxs("div",{className:"code",children:[u.jsxs("div",{className:"code-head",children:[u.jsx("span",{children:t}),u.jsxs("span",{style:{display:"flex",gap:6,alignItems:"center"},children:[u.jsxs("span",{children:[a.length," 行"]}),u.jsx("button",{type:"button",className:`code-copy${i==="ok"?" is-ok":i==="fail"?" is-fail":""}`,onClick:m,children:i==="ok"?"已复制":i==="fail"?"复制失败":"复制"})]})]}),u.jsx("pre",{style:r?{maxHeight:r}:{maxHeight:"none"},children:u.jsx("code",{children:p.map((h,y)=>h.cls?u.jsx("span",{className:h.cls,children:h.text},y):u.jsx(en.Fragment,{children:h.text},y))})}),c?u.jsx("button",{type:"button",className:"code-more",onClick:()=>l(h=>!h),children:s?"收起":`展开余下 ${a.length-n} 行`}):null]})}function xf(e){return e.props??e.config??[]}function Kk({doc:e}){var i,o,s;const t=xf(e),n=e.events??[],r=e.methods??[];return u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"doc-sec",children:[u.jsx("h5",{children:"属性 Props"}),t.length?u.jsxs("table",{className:"doc-table",children:[u.jsx("thead",{children:u.jsxs("tr",{children:[u.jsx("th",{children:"属性"}),u.jsx("th",{children:"类型"}),u.jsx("th",{children:"默认"}),u.jsx("th",{children:"说明"})]})}),u.jsx("tbody",{children:t.map(l=>u.jsxs("tr",{children:[u.jsx("td",{children:u.jsx("code",{children:l.name})}),u.jsx("td",{children:u.jsx("code",{className:"dim",children:l.type})}),u.jsx("td",{children:u.jsx("code",{className:"dim",children:l.default??"-"})}),u.jsx("td",{children:l.description??"—"})]},l.name))})]}):u.jsx("p",{className:"doc-note",children:"无可配置属性，工厂零参调用即可。"})]}),u.jsxs("div",{className:"doc-sec",children:[u.jsx("h5",{children:"事件 Events"}),n.length?u.jsxs("table",{className:"doc-table",children:[u.jsx("thead",{children:u.jsxs("tr",{children:[u.jsx("th",{children:"事件"}),u.jsx("th",{children:"触发时机"}),u.jsx("th",{children:"说明"})]})}),u.jsx("tbody",{children:n.map(l=>u.jsxs("tr",{children:[u.jsx("td",{children:u.jsx("code",{children:l.name})}),u.jsx("td",{children:l.when}),u.jsx("td",{children:l.description})]},l.name))})]}):u.jsx("p",{className:"doc-note",children:"不参与任何事件。"})]}),u.jsxs("div",{className:"doc-sec",children:[u.jsx("h5",{children:"方法 Methods"}),r.length?u.jsxs("table",{className:"doc-table",children:[u.jsx("thead",{children:u.jsxs("tr",{children:[u.jsx("th",{children:"方法"}),u.jsx("th",{children:"签名"}),u.jsx("th",{children:"说明"})]})}),u.jsx("tbody",{children:r.map(l=>u.jsxs("tr",{children:[u.jsx("td",{children:u.jsx("code",{children:l.name})}),u.jsx("td",{children:u.jsx("code",{className:"dim",children:l.signature})}),u.jsx("td",{children:l.description})]},l.name))})]}):u.jsx("p",{className:"doc-note",children:e.methodsNote??"不调用上下文方法。"})]}),u.jsxs("div",{className:"doc-cols",children:[(i=e.features)!=null&&i.length?u.jsxs("div",{children:[u.jsx("h5",{children:"能做"}),u.jsx("ul",{children:e.features.map(l=>u.jsx("li",{children:l},l))})]}):null,(o=e.useCases)!=null&&o.length?u.jsxs("div",{children:[u.jsx("h5",{children:"适合"}),u.jsx("ul",{children:e.useCases.map(l=>u.jsx("li",{children:l},l))})]}):null,(s=e.notes)!=null&&s.length?u.jsxs("div",{children:[u.jsx("h5",{children:"注意"}),u.jsx("ul",{children:e.notes.map(l=>u.jsx("li",{children:l},l))})]}):null]})]})}function Gk({factory:e,priority:t,summary:n,doc:r,defaultOpen:i=!0}){var s,l;const o={props:xf(r).length,events:((s=r.events)==null?void 0:s.length)??0,methods:((l=r.methods)==null?void 0:l.length)??0};return u.jsxs("details",{className:"api-plug",open:i,children:[u.jsxs("summary",{children:[u.jsx("code",{children:e}),u.jsxs("span",{className:"tag tag-accent",children:["priority ",t]}),u.jsx("span",{className:"api-plug-desc",children:n}),u.jsxs("span",{className:"api-plug-n",children:[o.props," 属性 · ",o.events," 事件 · ",o.methods," 方法"]})]}),u.jsx("div",{className:"api-plug-body",children:u.jsx(Kk,{doc:r})})]})}const Yk=/create[A-Z]\w*Plugin/g;function Jk(e){return(e.match(/create[A-Z]\w*Plugin/)??[e])[0]}function Pf(e){return e.dir?`create${e.dir}`:Jk(e.factory)}function Xk(e){return new Set(e.match(Yk)??[])}function Zk(e,t){const n=Xk(e);return t.filter(r=>n.has(Pf(r))).sort((r,i)=>r.priority-i.priority)}function qk({source:e,plugins:t,heading:n="本页用到的插件"}){const r=x.useMemo(()=>Zk(e,t),[e,t]);return r.length===0?null:u.jsxs("section",{className:"api-sec",children:[u.jsxs("div",{className:"api-sec-head",children:[u.jsxs("h2",{className:"api-sec-title",children:[n," · ",r.length," 个"]}),u.jsxs("p",{className:"api-sec-sub",children:["就是上面代码里装配的全部成员。属性是工厂参数，事件是父组件传进来的回调， 方法是插件读取 / 调用的上下文能力 —— 表内容与 ",u.jsx("code",{children:"doc.json"})," 同源，随包发布。"]})]}),r.map(i=>u.jsx(Gk,{factory:Pf(i),priority:i.priority,summary:i.summary??i.doc.description??"",doc:i.doc},i.factory))]})}const ew=`import React from "react";
import type { PluginCreator, PluginDoc } from "vane-plugin-core";
import type {
  ActivityPluginConfigBase,
  ActivityPluginContext,
} from "../../components/ActivityPlugin/plugins/types";
import doc from "./doc.json";

export interface ActivityHeaderPluginConfig extends ActivityPluginConfigBase {
  /** 标题（默认取 data.title） */
  title?: string;
  /** 副标题（一句话说明活动卖点） */
  subtitle?: string;
  /** 标签行（如「限时」「新人专享」） */
  tags?: string[];
  /** 状态徽章文案；不传则按 data.endTime 派生（剩 N 天 / 今日截止 / 已结束） */
  badge?: string;
  /** 标题前的图标（emoji 或字符） */
  icon?: string;
  /** 对齐方式（默认 left） */
  align?: "left" | "center";
}

/** 从截止时间派生徽章文案；无截止时间返回 null（不渲染徽章） */
function deriveBadge(endTime?: string | number): string | null {
  if (endTime === undefined || endTime === null) return null;
  const end = typeof endTime === "number" ? endTime : Date.parse(endTime);
  if (Number.isNaN(end)) return null;
  const ms = end - Date.now();
  if (ms <= 0) return "已结束";
  const days = Math.ceil(ms / 86400000);
  return days <= 1 ? "今日截止" : \`剩 \${days} 天\`;
}

/**
 * ActivityHeaderPlugin - 活动头部横幅：标题 + 副标题 + 标签 + 状态徽章。
 *
 * 落在 renderHeader 槽（Core 最顶部）。徽章按 data.endTime 派生，插件本身不持有
 * 计时器；需要秒级倒计时请叠加 CountdownTimerPlugin（同页共存不冲突）。
 */
export const createActivityHeaderPlugin: PluginCreator<ActivityHeaderPluginConfig> = (
  config = {}
) => {
  const { title, subtitle, tags = [], badge, icon, align = "left" } = config;

  return {
    name: "ActivityHeaderPlugin",
    version: "0.1.0",
    description: doc.description,
    priority: 5,
    config,
    hooks: {
      renderHeader: (context: ActivityPluginContext) => {
        const dataTitle = (context.data as { title?: string } | undefined)?.title;
        const heading = title ?? dataTitle;
        if (!heading && !subtitle) return null;

        const statusBadge =
          badge ??
          deriveBadge((context.data as { endTime?: string | number } | undefined)?.endTime);

        return (
          <header
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: 12,
              padding: "14px 16px",
              borderRadius: 14,
              /* 浅橙底 + 深字（ADR-13）：正文 #1f2328 对 #fff5ee 约 15:1 */
              background: "linear-gradient(135deg, #fff5ee 0%, #fffaf7 100%)",
              border: "1px solid rgba(207,68,7,0.14)",
              textAlign: align === "center" ? "center" : "left",
              justifyContent: align === "center" ? "center" : "flex-start",
            }}
          >
            <div style={{ minWidth: 0, flex: 1 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  flexWrap: "wrap",
                  justifyContent: align === "center" ? "center" : "flex-start",
                }}
              >
                {icon && (
                  <span aria-hidden="true" style={{ fontSize: 20, lineHeight: 1 }}>
                    {icon}
                  </span>
                )}
                <h2
                  style={{
                    margin: 0,
                    fontSize: 19,
                    fontWeight: 700,
                    lineHeight: 1.35,
                    color: "#1f2328",
                  }}
                >
                  {heading}
                </h2>
                {statusBadge && (
                  <span
                    style={{
                      flex: "none",
                      padding: "2px 8px",
                      borderRadius: 999,
                      background: "#cf4407",
                      color: "#fff",
                      fontSize: 12,
                      fontWeight: 600,
                      lineHeight: 1.6,
                    }}
                  >
                    {statusBadge}
                  </span>
                )}
              </div>

              {subtitle && (
                <p
                  style={{
                    margin: "6px 0 0",
                    fontSize: 13,
                    lineHeight: 1.6,
                    color: "#5d636a",
                  }}
                >
                  {subtitle}
                </p>
              )}

              {tags.length > 0 && (
                <ul
                  style={{
                    display: "flex",
                    gap: 6,
                    flexWrap: "wrap",
                    margin: "10px 0 0",
                    padding: 0,
                    listStyle: "none",
                    justifyContent: align === "center" ? "center" : "flex-start",
                  }}
                >
                  {tags.map((tag, i) => (
                    <li
                      key={\`\${tag}-\${i}\`}
                      style={{
                        padding: "2px 8px",
                        borderRadius: 6,
                        background: "rgba(207,68,7,0.1)",
                        color: "#a33a06",
                        fontSize: 12,
                        lineHeight: 1.6,
                      }}
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </header>
        );
      },
    },
  };
};

createActivityHeaderPlugin.meta = doc as PluginDoc;
`,tw=`import React from "react";
import type { PluginCreator, PluginDoc } from "vane-plugin-core";
import type {
  ActivityData,
  ActivityPluginConfigBase,
  ActivityPluginContext,
} from "../../components/ActivityPlugin/plugins/types";
import doc from "./doc.json";

export interface AnnouncementPluginConfig extends ActivityPluginConfigBase {
  /** 公告条目（未传则读 data.announcements） */
  items?: string[];
  /** 左侧标签文案（默认「公告」） */
  label?: string;
  /** 标签前的图标（默认 📢） */
  icon?: string;
  /** 滚动一轮的秒数（默认 16，越大越慢） */
  speedSec?: number;
}

const KEYFRAMES = \`@keyframes va-announce-scroll{from{transform:translateX(0)}to{transform:translateX(-50%)}}
@media (prefers-reduced-motion: reduce){.va-announce-track{animation:none!important;transform:none!important}}
.va-announce-track:hover{animation-play-state:paused}\`;

/**
 * AnnouncementPlugin - 活动公告条（renderHeader 槽，位于头部横幅之上）。
 *
 * 纯 CSS 跑马灯：条目复制一份首尾相接，\`translateX(-50%)\` 即为无缝循环，不持有任何
 * 定时器（比 setInterval 省一次重渲染，也不会在后台标签页里积压）。悬停暂停，
 * \`prefers-reduced-motion\` 下自动静止。
 */
export const createAnnouncementPlugin: PluginCreator<AnnouncementPluginConfig> = (
  config = {}
) => {
  const { items = [], label = "公告", icon = "📢", speedSec = 16 } = config;

  return {
    name: "AnnouncementPlugin",
    version: "0.1.0",
    description: doc.description,
    priority: 8,
    config,
    hooks: {
      renderHeader: (context: ActivityPluginContext) => {
        const fromData = (context.data as ActivityData | undefined)?.announcements;
        const list = (fromData && fromData.length > 0 ? fromData : items).filter(
          (text) => !!text
        );
        if (list.length === 0) return null;

        // 复制一份实现无缝循环（-50% 正好是一份的宽度）
        const loop = [...list, ...list];

        return (
          <section
            aria-label="活动公告"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              overflow: "hidden",
              padding: "6px 10px",
              borderRadius: 999,
              /* 浅橙底 + 深字：#1f2328 对 #fff6ef 约 15:1 */
              background: "#fff6ef",
              border: "1px solid rgba(207,68,7,0.14)",
            }}
          >
            <style>{KEYFRAMES}</style>
            <span
              style={{
                flex: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 4,
                padding: "2px 8px",
                borderRadius: 999,
                background: "#cf4407",
                color: "#fff",
                fontSize: 12,
                fontWeight: 600,
                lineHeight: 1.7,
              }}
            >
              <span aria-hidden="true">{icon}</span>
              {label}
            </span>

            <div style={{ flex: 1, minWidth: 0, overflow: "hidden" }}>
              <div
                className="va-announce-track"
                style={{
                  display: "inline-flex",
                  gap: 28,
                  whiteSpace: "nowrap",
                  willChange: "transform",
                  animation: \`va-announce-scroll \${speedSec}s linear infinite\`,
                }}
              >
                {loop.map((text, i) => (
                  <span
                    key={\`\${text}-\${i}\`}
                    aria-hidden={i >= list.length ? true : undefined}
                    style={{ fontSize: 12, lineHeight: 1.7, color: "#1f2328" }}
                  >
                    {text}
                  </span>
                ))}
              </div>
            </div>
          </section>
        );
      },
    },
  };
};

createAnnouncementPlugin.meta = doc as PluginDoc;
`,nw=`import type { PluginCreator, PluginDoc } from "vane-plugin-core";
import type {
  ActivityPluginConfigBase,
  ActivityPluginContext,
} from "../../components/ActivityPlugin/plugins/types";
import { CheckinCalendar } from "./internal";
import doc from "./doc.json";

export interface CheckinCalendarPluginConfig extends ActivityPluginConfigBase {
  /** 标题（默认「连续签到」） */
  title?: string;
  /** 共几天（默认 data.checkin.days ?? 7） */
  days?: number;
  /** 已完成天数（默认 data.checkin.done ?? 0） */
  done?: number;
  /** 今天格子下标 0-based（默认 data.checkin.todayIndex ?? done） */
  todayIndex?: number;
  /** 签到回调；不传则组件内乐观 +1（无后端场景） */
  onCheckin?: () => void;
  /** 是否显示签到按钮（默认 true） */
  showButton?: boolean;
}

/**
 * CheckinCalendarPlugin - 签到日历：N 格进度（已签 / 今日 / 未开始三态）+ 连续天数 + 签到按钮。
 *
 * 落在 renderProgress 槽，与进度条 / 环 / 里程碑同槽共存（靠 order 定上下）。
 * 数据来自 data.checkin（days / done / todayIndex）；不传时回退 config 的 days / done。
 */
export const createCheckinCalendarPlugin: PluginCreator<
  CheckinCalendarPluginConfig
> = (config = {}) => {
  const {
    title = "连续签到",
    days = 7,
    done = 0,
    todayIndex,
    onCheckin,
    showButton = true,
  } = config;

  return {
    name: "CheckinCalendarPlugin",
    version: "0.1.0",
    description: doc.description,
    priority: 10,
    config,
    hooks: {
      renderProgress: (context: ActivityPluginContext) => (
        <CheckinCalendar
          ctx={context}
          title={title}
          days={days}
          done={done}
          todayIndex={todayIndex}
          onCheckin={onCheckin}
          showButton={showButton}
        />
      ),
    },
  };
};

createCheckinCalendarPlugin.meta = doc as PluginDoc;
`,rw=`import type { PluginCreator, PluginDoc } from "vane-plugin-core";
import type {
  ActivityPluginConfigBase,
  ActivityPluginContext,
} from "../../components/ActivityPlugin/plugins/types";
import { ClaimToastLayer } from "./internal";
import doc from "./doc.json";

export interface ClaimToastPluginConfig extends ActivityPluginConfigBase {
  /** 单条 toast 停留时长（ms，默认 2400） */
  durationMs?: number;
  /** 同屏最多几条（默认 3），超出丢弃最早的 */
  max?: number;
  /** 出现位置（默认 bottom-right） */
  position?: "bottom-right" | "top-center";
  /** 自定义文案，默认「已领取：{title}」 */
  message?: (title: string) => string;
}

/**
 * ClaimToastPlugin - 领取成功轻提示：监听 ctx.claimedIds 新增项，在右下角浮出
 * 「已领取：xx」并自动消失。与 ConfettiPlugin（全屏庆祝）正交互补：一个重度仪式感，
 * 一个轻量确认。
 *
 * 首屏已存在的领取记录不会补弹（seenRef 初始化为挂载时的 claimedIds）。
 */
export const createClaimToastPlugin: PluginCreator<ClaimToastPluginConfig> = (
  config = {}
) => {
  const {
    durationMs = 2400,
    max = 3,
    position = "bottom-right",
    message,
  } = config;

  return {
    name: "ClaimToastPlugin",
    version: "0.1.0",
    description: doc.description,
    priority: 55,
    config,
    hooks: {
      renderOverlay: (context: ActivityPluginContext) => (
        <ClaimToastLayer
          ctx={context}
          durationMs={durationMs}
          max={max}
          position={position}
          message={message}
        />
      ),
    },
  };
};

createClaimToastPlugin.meta = doc as PluginDoc;
`,iw=`import type { PluginCreator, PluginDoc } from "vane-plugin-core";
import type { ActivityPluginContext } from "../../components/ActivityPlugin/plugins/types";
import { ConfettiBurst } from "./internal";
import doc from "./doc.json";

export interface ConfettiPluginConfig {
  /** 彩纸数量（默认 28） */
  count?: number;
  /** 单轮下落时长（秒，默认 2.6） */
  durationSec?: number;
  /** 达成阈值（默认 1，即 100% 才庆祝） */
  threshold?: number;
}

/**
 * ConfettiPlugin - 庆祝彩纸（renderOverlay）：总体进度达到阈值（默认 100%）时，
 * 在活动容器内下落一轮彩纸。与 ProgressFx 自带的文字浮层同槽共存——overlay 槽位
 * 天然可叠加，本插件不声明独占。纯形状动画（无文字），pointerEvents:none 不挡交互。
 */
export const createConfettiPlugin: PluginCreator<ConfettiPluginConfig> = (
  config = {}
) => {
  const { count = 28, durationSec = 2.6, threshold = 1 } = config;

  return {
    name: "ConfettiPlugin",
    version: "0.1.0",
    description: doc.description,
    priority: 50,
    config,
    hooks: {
      renderOverlay: (context: ActivityPluginContext) => (
        <ConfettiBurst
          progress={context.progress ?? 0}
          count={count}
          durationSec={durationSec}
          threshold={threshold}
        />
      ),
    },
  };
};

createConfettiPlugin.meta = doc as PluginDoc;
`,ow=`import type { PluginCreator, PluginDoc } from "vane-plugin-core";
import type {
  ActivityPluginConfigBase,
  ActivityPluginContext,
  ActivityData,
} from "../../components/ActivityPlugin/plugins/types";
import { Countdown } from "./internal";
import doc from "./doc.json";

export interface CountdownTimerPluginConfig extends ActivityPluginConfigBase {
  /** 截止时间（ISO 字符串或时间戳）；不传则回退读 data.endTime */
  endTime?: string | number;
  /** 前缀文案（默认「距活动结束」） */
  label?: string;
  /** 剩余不足该毫秒数时进入紧急态（文字变警示色，默认 1 小时） */
  urgentMs?: number;
}

/**
 * CountdownTimerPlugin - 活动倒计时：renderProgress 槽位在进度条下方追加一行
 * 「距活动结束 x天HH:MM:SS」。截止时间优先取工厂配置，否则回退 data.endTime；
 * 都没有则不渲染。与 ProgressFx 同槽共存（互不独占）。
 */
export const createCountdownTimerPlugin: PluginCreator<CountdownTimerPluginConfig> = (
  config = {}
) => {
  const { endTime, label = "距活动结束", urgentMs = 3600_000 } = config;

  return {
    name: "CountdownTimerPlugin",
    version: "0.1.0",
    description: doc.description,
    priority: 12,
    config,
    hooks: {
      renderProgress: (context: ActivityPluginContext) => {
        const raw = endTime ?? (context.data as ActivityData | undefined)?.endTime;
        if (raw === undefined) return null;
        const end = typeof raw === "number" ? raw : new Date(raw).getTime();
        if (!Number.isFinite(end)) return null;
        return <Countdown end={end} label={label} urgentMs={urgentMs} />;
      },
    },
  };
};

createCountdownTimerPlugin.meta = doc as PluginDoc;
`,sw=`import React from "react";
import type { PluginCreator, PluginDoc } from "vane-plugin-core";
import type { ActivityPluginContext } from "../../components/ActivityPlugin/plugins/types";
import doc from "./doc.json";

export interface CouponStackPluginConfig {
  /** 券堆叠的错位偏移（px，默认 6） */
  stackOffset?: number;
  /** 「领取」按钮文案（默认「领取」） */
  claimLabel?: string;
  /** 「已领取」文案（默认「已领取」） */
  claimedLabel?: string;
  /** 「未解锁」文案（默认「未解锁」） */
  lockedLabel?: string;
}

/**
 * CouponStackPlugin - 券堆叠（RewardClaim 的变体渲染）：每张奖励渲染成一张
 * 「票券」卡，堆叠错位摆放。与 RewardClaim 互为同槽位竞品——都声明独占
 * renderRewards，同时挂载时只留 priority 高者（装配期去重，控制台有警告）。
 */
export const createCouponStackPlugin: PluginCreator<CouponStackPluginConfig> = (
  config = {}
) => {
  const {
    stackOffset = 6,
    claimLabel = "领取",
    claimedLabel = "已领取",
    lockedLabel = "未解锁",
  } = config;

  return {
    name: "CouponStackPlugin",
    version: "0.1.0",
    description: doc.description,
    priority: 29,
    exclusiveSlots: ["renderRewards"],
    config,
    hooks: {
      renderRewards: (context: ActivityPluginContext) => {
        const rewards = context.rewards ?? [];
        if (rewards.length === 0) return null;

        return (
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {rewards.map((r, i) => {
              // 堆叠错位：越靠后的卡越往右下偏，营造一摞券的手感
              const offset = (i % 2 === 0 ? -1 : 1) * stackOffset * ((i + 1) / 2);
              const reachPct = Math.round(
                Math.max(
                  0,
                  Math.min(1, Number.isFinite(r.threshold) ? r.threshold : 1)
                ) * 100
              );

              let btn: React.ReactNode;
              if (r.status === "claimable") {
                btn = (
                  <button
                    type="button"
                    onClick={() => context.claim(r.id)}
                    style={{
                      border: "none",
                      borderRadius: 999,
                      padding: "5px 16px",
                      fontSize: 13,
                      fontWeight: 700,
                      cursor: "pointer",
                      background: "#cf4407",
                      color: "#fff",
                    }}
                  >
                    {claimLabel}
                  </button>
                );
              } else if (r.status === "claimed") {
                btn = (
                  <span
                    style={{
                      borderRadius: 999,
                      padding: "5px 16px",
                      fontSize: 13,
                      fontWeight: 700,
                      background: "rgba(21,128,61,0.10)",
                      color: "#15803d",
                    }}
                  >
                    {claimedLabel}
                  </span>
                );
              } else {
                btn = (
                  <span
                    style={{
                      borderRadius: 999,
                      padding: "5px 16px",
                      fontSize: 13,
                      fontWeight: 700,
                      background: "rgba(93,99,106,0.10)",
                      color: "#5d636a",
                    }}
                  >
                    {lockedLabel}
                  </span>
                );
              }

              return (
                <div
                  key={r.id}
                  data-testid="activity-coupon"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    padding: "12px 16px",
                    borderRadius: 12,
                    border: "1px dashed #d8dce0",
                    background: "#fff",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.06)",
                    transform: \`translateX(\${offset}px)\`,
                    transition: "transform .25s ease",
                  }}
                >
                  <span style={{ fontSize: 22 }} aria-hidden>
                    {r.icon ?? "🎟️"}
                  </span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 14, fontWeight: 700, color: "#1f2328" }}>
                      {r.title}
                    </div>
                    <div style={{ fontSize: 12, color: "#5d636a", marginTop: 2 }}>
                      {r.desc ?? \`总体进度达 \${reachPct}% 解锁\`}
                    </div>
                  </div>
                  {btn}
                </div>
              );
            })}
          </div>
        );
      },
    },
  };
};

createCouponStackPlugin.meta = doc as PluginDoc;
`,lw=`import type { PluginCreator, PluginDoc } from "vane-plugin-core";
import type {
  ActivityPluginConfigBase,
  ActivityPluginContext,
} from "../../components/ActivityPlugin/plugins/types";
import { JackpotCard } from "./internal";
import doc from "./doc.json";

export interface JackpotPrize {
  id: string;
  label: string;
  icon?: string;
}

/** 服务端权威抽奖结果：中奖格下标（0-7）与可选的剩余次数 */
export interface JackpotDrawResult {
  index: number;
  remaining?: number;
}

export interface JackpotPluginConfig extends ActivityPluginConfigBase {
  /** 卡片标题（默认「幸运抽奖」） */
  title?: string;
  /** 奖池（固定 8 格；不足自动补「谢谢参与」，超过取前 8 个） */
  prizes?: JackpotPrize[];
  /** 剩余抽奖次数（默认 3） */
  times?: number;
  /** 受控剩余次数；传了则由业务侧回写，组件不自行递减 */
  remainingTimes?: number;
  /**
   * 服务端权威抽奖：返回中奖格与剩余次数。
   * 传了则不再使用本地 Math.random；请求期间按钮禁用。
   * 生产环境应始终由服务端决定中奖结果。
   */
  drawResult?: () => JackpotDrawResult | Promise<JackpotDrawResult>;
  /** 中奖通知（动画结束后触发）；仅通知，不负责扣次数 */
  onDraw?: (prize: JackpotPrize, index: number) => void;
}

/**
 * JackpotPlugin - 幸运抽奖九宫格（renderFooter 槽）。
 *
 * 8 个奖励格围绕中心按钮排布，点击后高亮按帧推进、逐渐减速，停在随机中奖格上。
 * 生产环境应通过 drawResult 由服务端决定中奖格与剩余次数；不传时才使用本地随机
 * （仅适合演示，不能作为发奖依据）。remainingTimes 传入时组件不自行扣次数。
 * 计时器在卸载时统一清理，避免对着已卸载组件 setState。
 */
export const createJackpotPlugin: PluginCreator<JackpotPluginConfig> = (
  config = {}
) => {
  const {
    title = "幸运抽奖",
    prizes = [],
    times = 3,
    remainingTimes,
    drawResult,
    onDraw,
  } = config;

  return {
    name: "JackpotPlugin",
    version: "0.1.0",
    description: doc.description,
    priority: 24,
    config,
    hooks: {
      renderFooter: (_context: ActivityPluginContext) => (
        <JackpotCard
          title={title}
          prizes={prizes}
          times={times}
          remainingTimes={remainingTimes}
          drawResult={drawResult}
          onDraw={onDraw}
        />
      ),
    },
  };
};

createJackpotPlugin.meta = doc as PluginDoc;
`,aw=`import type { PluginCreator, PluginDoc } from "vane-plugin-core";
import type {
  ActivityPluginConfigBase,
  ActivityPluginContext,
} from "../../components/ActivityPlugin/plugins/types";
import { LeaderboardPanel } from "./internal";
import doc from "./doc.json";

export interface LeaderboardPluginConfig extends ActivityPluginConfigBase {
  /** 标题（默认「好友榜」） */
  title?: string;
  /** 展示前几名（默认 3） */
  topN?: number;
  /** 分数单位（默认「分」） */
  unit?: string;
  /** 是否高亮 isMe 行（默认 true） */
  highlightMe?: boolean;
  /** 无数据时的文案（默认「暂无排行数据」） */
  emptyText?: string;
}

/**
 * LeaderboardPlugin - 好友榜：按 score 降序取前 topN，第一名强调橙名次牌，
 * isMe 行浅橙底高亮并带「我」标签；自己不在前 topN 时在底部单独补一行真实名次。
 */
export const createLeaderboardPlugin: PluginCreator<LeaderboardPluginConfig> = (
  config = {}
) => {
  const { title = "好友榜", topN = 3, unit = "分", highlightMe = true, emptyText = "暂无排行数据" } =
    config;

  return {
    name: "LeaderboardPlugin",
    version: "0.1.0",
    description: doc.description,
    priority: 25,
    config,
    hooks: {
      renderFooter: (context: ActivityPluginContext) => (
        <LeaderboardPanel
          ctx={context}
          title={title}
          topN={topN}
          unit={unit}
          highlightMe={highlightMe}
          emptyText={emptyText}
        />
      ),
    },
  };
};

createLeaderboardPlugin.meta = doc as PluginDoc;
`,uw=`import React from "react";
import type { PluginCreator, PluginDoc } from "vane-plugin-core";
import type {
  ActivityPluginConfigBase,
  ActivityPluginContext,
} from "../../components/ActivityPlugin/plugins/types";
import doc from "./doc.json";

export interface MilestoneBarPluginConfig extends ActivityPluginConfigBase {
  /** 轨道高度（px，默认 6） */
  height?: number;
  /** 里程碑圆点直径（px，默认 18） */
  dotSize?: number;
}

/**
 * MilestoneBarPlugin - 里程碑进度：把每个奖励的 threshold 映射为轨道上的节点，
 * 已领取=实心绿 / 已达标可领=警示橙 / 未达标=灰。纯形状表达（无文字），与
 * ProgressFx 同槽共存时可在进度条下方形成「离下一档还差多少」的空间感。
 */
export const createMilestoneBarPlugin: PluginCreator<MilestoneBarPluginConfig> = (
  config = {}
) => {
  const { height = 6, dotSize = 18 } = config;

  return {
    name: "MilestoneBarPlugin",
    version: "0.1.0",
    description: doc.description,
    priority: 13,
    config,
    hooks: {
      renderProgress: (context: ActivityPluginContext) => {
        const progress = Math.max(0, Math.min(1, context.progress ?? 0));
        const rewards = context.rewards ?? [];
        if (rewards.length === 0) return null;
        const pct = Math.round(progress * 100);

        return (
          <div
            role="img"
            aria-label={\`总体进度 \${pct}%，共 \${rewards.length} 档里程碑\`}
            style={{ position: "relative", paddingTop: dotSize / 2 + 2, paddingBottom: dotSize / 2 + 2 }}
          >
            {/* 底轨 */}
            <div
              style={{
                height,
                borderRadius: height / 2,
                background: "rgba(128,128,128,0.18)",
              }}
            />
            {/* 进度填充 */}
            <div
              style={{
                position: "absolute",
                top: dotSize / 2 + 2,
                left: 0,
                height,
                borderRadius: height / 2,
                width: \`\${pct}%\`,
                background: "#ff7a29",
                transition: "width .4s ease",
              }}
            />
            {/* 里程碑节点 */}
            {rewards.map((r) => {
              // P2-1：阈值夹到 [0,1]，非有限值按 1，避免节点跑出轨道
              const threshold = Number.isFinite(r.threshold)
                ? Math.max(0, Math.min(1, r.threshold))
                : 1;
              const reached = progress >= threshold;
              const claimed = r.status === "claimed";
              const color = claimed ? "#15803d" : reached ? "#cf4407" : "#c9cdd2";
              return (
                <div
                  key={r.id}
                  title={\`\${r.title}（阈值 \${Math.round(threshold * 100)}%）\`}
                  style={{
                    position: "absolute",
                    top: 2,
                    left: \`\${Math.round(threshold * 100)}%\`,
                    transform: "translateX(-50%)",
                    width: dotSize,
                    height: dotSize,
                    borderRadius: "50%",
                    background: claimed ? color : "#fff",
                    border: \`2px solid \${color}\`,
                    boxSizing: "border-box",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {claimed || reached ? (
                    <span
                      style={{
                        width: dotSize / 3,
                        height: dotSize / 3,
                        borderRadius: "50%",
                        background: color,
                      }}
                    />
                  ) : null}
                </div>
              );
            })}
          </div>
        );
      },
    },
  };
};

createMilestoneBarPlugin.meta = doc as PluginDoc;
`,cw=`import React from "react";
import type { PluginCreator, PluginDoc } from "vane-plugin-core";
import type {
  ActivityPluginConfigBase,
  ActivityPluginContext,
} from "../../components/ActivityPlugin/plugins/types";
import doc from "./doc.json";

export interface ProgressFxPluginConfig extends ActivityPluginConfigBase {
  /** 进度条高度（px，默认 8） */
  height?: number;
}

/**
 * ProgressFxPlugin - 进度特效：顶部进度条 fill + 百分比数字；进度达成 100% 时
 * 在浮层叠加「🎉 进度达成」庆祝条（renderOverlay，绝对定位、pointerEvents:none）。
 */
export const createProgressFxPlugin: PluginCreator<ProgressFxPluginConfig> = (
  config = {}
) => {
  const { height = 8 } = config;

  return {
    name: "ProgressFxPlugin",
    version: "0.1.0",
    description: doc.description,
    priority: 10,
    config,
    hooks: {
      renderProgress: (context: ActivityPluginContext) => {
        const pct = Math.round(
          Math.max(0, Math.min(1, context.progress ?? 0)) * 100
        );
        return (
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div
              style={{
                flex: 1,
                height,
                borderRadius: height / 2,
                background: "rgba(128,128,128,0.18)",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: \`\${pct}%\`,
                  height: "100%",
                  borderRadius: height / 2,
                  background: "#ff7a29",
                  transition: "width .4s ease",
                }}
              />
            </div>
            <span
              style={{
                fontSize: 14,
                fontWeight: 700,
                color: "#1f2328",
                minWidth: 40,
                textAlign: "right",
              }}
            >
              {pct}%
            </span>
          </div>
        );
      },
      renderOverlay: (context: ActivityPluginContext) => {
        const reached = (context.progress ?? 0) >= 1;
        if (!reached) return null;
        return (
          <div
            style={{
              position: "absolute",
              top: 8,
              left: "50%",
              transform: "translateX(-50%)",
              padding: "4px 12px",
              borderRadius: 999,
              background: "#1f2328",
              color: "#fff",
              fontSize: 12,
              pointerEvents: "none",
              whiteSpace: "nowrap",
            }}
          >
            🎉 进度达成 100%
          </div>
        );
      },
    },
  };
};

createProgressFxPlugin.meta = doc as PluginDoc;
`,dw=`import React from "react";
import type { PluginCreator, PluginDoc } from "vane-plugin-core";
import type {
  ActivityPluginConfigBase,
  ActivityPluginContext,
} from "../../components/ActivityPlugin/plugins/types";
import doc from "./doc.json";

export interface ProgressRingPluginConfig extends ActivityPluginConfigBase {
  /** 圆环直径（px，默认 104） */
  size?: number;
  /** 环宽（px，默认 10） */
  strokeWidth?: number;
  /** 右侧标题（默认「总进度」） */
  label?: string;
  /** 是否显示「已完成 x/y 项」明细（默认 true） */
  showCaption?: boolean;
  /** 进度色（默认 #cf4407，白字按钮同款强调橙，环本身无对比度要求但需与轨道拉开） */
  color?: string;
}

/**
 * ProgressRingPlugin - 环形进度：SVG 双环 + 中心百分比 + 右侧文案（完成项数 / 距下一档）。
 *
 * 与 ProgressFxPlugin（数字进度条）、MilestoneBarPlugin（节点轨道）同属 renderProgress
 * 槽，可三段共存：环给「一眼的比例」，条给「精确的刻度」，节点给「空间距离」。
 */
export const createProgressRingPlugin: PluginCreator<ProgressRingPluginConfig> = (
  config = {}
) => {
  const {
    size = 104,
    strokeWidth = 10,
    label = "总进度",
    showCaption = true,
    color = "#cf4407",
  } = config;

  return {
    name: "ProgressRingPlugin",
    version: "0.1.0",
    description: doc.description,
    priority: 15,
    config,
    hooks: {
      renderProgress: (context: ActivityPluginContext) => {
        const progress = Math.min(1, Math.max(0, context.progress ?? 0));
        const tasks = context.tasks ?? [];
        const rewards = context.rewards ?? [];
        const pct = Math.round(progress * 100);

        const radius = (size - strokeWidth) / 2;
        const circumference = 2 * Math.PI * radius;
        const dash = circumference * progress;
        const center = size / 2;

        const doneCount = tasks.filter((t) => t.status === "completed").length;
        // 距下一档：取第一个「阈值高于当前进度且未领取」的奖励
        const next = rewards
          .filter((r) => r.status !== "claimed" && r.threshold > progress)
          .sort((a, b) => a.threshold - b.threshold)[0];
        const gap = next ? Math.max(1, Math.ceil((next.threshold - progress) * 100)) : 0;

        return (
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div
              role="img"
              aria-label={\`\${label} \${pct}%\`}
              style={{ position: "relative", width: size, height: size, flex: "none" }}
            >
              <svg width={size} height={size} viewBox={\`0 0 \${size} \${size}\`}>
                <circle
                  cx={center}
                  cy={center}
                  r={radius}
                  fill="none"
                  stroke="rgba(128,128,128,0.18)"
                  strokeWidth={strokeWidth}
                />
                <circle
                  cx={center}
                  cy={center}
                  r={radius}
                  fill="none"
                  stroke={color}
                  strokeWidth={strokeWidth}
                  strokeLinecap="round"
                  strokeDasharray={\`\${dash} \${circumference - dash}\`}
                  /* 从 12 点方向顺时针起画 */
                  transform={\`rotate(-90 \${center} \${center})\`}
                  style={{ transition: "stroke-dasharray .4s ease" }}
                />
              </svg>
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  pointerEvents: "none",
                }}
              >
                <span
                  style={{ fontSize: 22, fontWeight: 700, lineHeight: 1, color: "#1f2328" }}
                >
                  {pct}
                  <span style={{ fontSize: 12, fontWeight: 600 }}>%</span>
                </span>
                <span style={{ marginTop: 2, fontSize: 11, color: "#5d636a" }}>完成</span>
              </div>
            </div>

            <div style={{ minWidth: 0 }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: "#1f2328" }}>{label}</div>
              {showCaption && (
                <div style={{ marginTop: 4, fontSize: 12, lineHeight: 1.7, color: "#5d636a" }}>
                  已完成 {doneCount}/{tasks.length} 项
                  {rewards.length > 0 && (
                    <>
                      <br />
                      {next ? \`距「\${next.title}」还差 \${gap}%\` : "全部奖励已解锁"}
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        );
      },
    },
  };
};

createProgressRingPlugin.meta = doc as PluginDoc;
`,fw=`import type { PluginCreator, PluginDoc } from "vane-plugin-core";
import type {
  ActivityPluginConfigBase,
  ActivityPluginContext,
} from "../../components/ActivityPlugin/plugins/types";
import { RedeemForm } from "./internal";
import doc from "./doc.json";

export interface RedeemCodePluginConfig extends ActivityPluginConfigBase {
  /** 卡片标题（默认「兑换码」） */
  title?: string;
  /** 必填前缀（大写比较，如 "VANE"）；不传则不校验前缀 */
  prefix?: string;
  /** 最短长度（默认 8） */
  minLength?: number;
  /** 输入框占位文案 */
  placeholder?: string;
  /** 兑换成功文案（默认「兑换成功，奖励已入账」） */
  successText?: string;
  /** 兑换回调；返回 false（或 Promise<false>）视为无效码；抛错展示失败文案 */
  onRedeem?: (code: string) => boolean | void | Promise<boolean | void>;
}

/**
 * RedeemCodePlugin - 兑换码：输入框 + 本地校验（长度 / 前缀）+ 成功或失败回执。
 *
 * 落在 renderRewards 槽且不声明独占：可与 RewardClaimPlugin 的奖励列表上下叠放
 * （order 定序）。独占去重只发生在「声明了独占的插件之间」，本插件永不被丢弃。
 */
export const createRedeemCodePlugin: PluginCreator<RedeemCodePluginConfig> = (
  config = {}
) => {
  const {
    title = "兑换码",
    prefix,
    minLength = 8,
    placeholder = "如 VANE-8888",
    successText = "兑换成功，奖励已入账",
    onRedeem,
  } = config;

  return {
    name: "RedeemCodePlugin",
    version: "0.1.0",
    description: doc.description,
    priority: 26,
    config,
    hooks: {
      renderRewards: (_context: ActivityPluginContext) => (
        <RedeemForm
          title={title}
          prefix={prefix}
          minLength={minLength}
          placeholder={placeholder}
          successText={successText}
          onRedeem={onRedeem}
        />
      ),
    },
  };
};

createRedeemCodePlugin.meta = doc as PluginDoc;
`,pw=`import React from "react";
import type { PluginCreator, PluginDoc } from "vane-plugin-core";
import type {
  ActivityPluginConfigBase,
  ActivityPluginContext,
  ActivityRewardWithStatus,
  RewardStatus,
} from "../../components/ActivityPlugin/plugins/types";
import doc from "./doc.json";

export interface RewardClaimPluginConfig extends ActivityPluginConfigBase {
  /** 已领取文案（默认「已领取」） */
  claimedLabel?: string;
}

/** 领取按钮三态样式（ADR-13：禁用/锁定态实色 ≥4.5，不靠 opacity）
 *  claimable 必须用 #cf4407：#ff7a29 白字仅 2.6:1 不达标（sign-in 同款强调橙）
 *  locked   #5d636a（muted，浅灰底 5.4:1）
 *  claimed  #15803d（白底 5.0:1） */
const BTN: Record<
  RewardStatus,
  { label: string; bg: string; color: string; disabled: boolean }
> = {
  locked: { label: "未解锁", bg: "rgba(128,128,128,0.12)", color: "#5d636a", disabled: true },
  claimable: { label: "领取", bg: "#cf4407", color: "#fff", disabled: false },
  claimed: { label: "已领取", bg: "rgba(21,128,61,0.12)", color: "#15803d", disabled: true },
};

/**
 * RewardClaimPlugin - 奖励领取：渲染奖励行，按派生状态展示按钮
 * （claimable 高亮可点 / claimed 已完成 / locked 未解锁），点击调 context.claim。
 */
export const createRewardClaimPlugin: PluginCreator<RewardClaimPluginConfig> = (
  config = {}
) => {
  const { claimedLabel = "已领取" } = config;

  return {
    name: "RewardClaimPlugin",
    version: "0.1.0",
    description: doc.description,
    priority: 30,
    exclusiveSlots: ["renderRewards"],
    config,
    hooks: {
      renderRewards: (context: ActivityPluginContext) => {
        const rewards = (context.rewards ?? []) as ActivityRewardWithStatus[];
        if (rewards.length === 0) return null;
        return (
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {rewards.map((r) => {
              const btn =
                r.status === "claimed"
                  ? { ...BTN.claimed, label: claimedLabel }
                  : BTN[r.status];
              return (
                <div
                  key={r.id}
                  data-testid="activity-reward"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "10px 12px",
                    borderRadius: 10,
                    border: "1px solid rgba(128,128,128,0.18)",
                    background: "#fff",
                  }}
                >
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontWeight: 600, fontSize: 14, color: "#1f2328" }}>
                      {r.icon ? \`\${r.icon} \` : ""}
                      {r.title}
                    </div>
                    {r.desc && (
                      <div style={{ fontSize: 12, color: "#5d636a", marginTop: 2 }}>
                        {r.desc}
                      </div>
                    )}
                  </div>
                  <button
                    type="button"
                    disabled={btn.disabled}
                    onClick={() => context.claim(r.id)}
                    style={{
                      border: "none",
                      borderRadius: 999,
                      padding: "6px 14px",
                      background: btn.bg,
                      color: btn.color,
                      fontSize: 13,
                      cursor: btn.disabled ? "default" : "pointer",
                    }}
                  >
                    {btn.label}
                  </button>
                </div>
              );
            })}
          </div>
        );
      },
    },
  };
};

createRewardClaimPlugin.meta = doc as PluginDoc;
`,gw=`import type { PluginCreator, PluginDoc } from "vane-plugin-core";
import type { ActivityPluginContext } from "../../components/ActivityPlugin/plugins/types";
import { RulePanel } from "./internal";
import doc from "./doc.json";

export interface RuleExpandPluginConfig {
  /** 折叠态最大展示行数（默认 3） */
  collapsedLines?: number;
}

export const createRuleExpandPlugin: PluginCreator<RuleExpandPluginConfig> = (
  config = {}
) => {
  const { collapsedLines = 3 } = config;

  return {
    name: "RuleExpandPlugin",
    version: "0.1.0",
    description: doc.description,
    priority: 40,
    exclusiveSlots: ["renderRules"],
    config,
    hooks: {
      renderRules: (context: ActivityPluginContext) => (
        <RulePanel context={context} collapsedLines={collapsedLines} />
      ),
    },
  };
};

createRuleExpandPlugin.meta = doc as PluginDoc;
`,mw=`import type { PluginCreator, PluginDoc } from "vane-plugin-core";
import type { ActivityPluginContext } from "../../components/ActivityPlugin/plugins/types";
import { RuleModalTrigger } from "./internal";
import doc from "./doc.json";

export interface RuleModalPluginConfig {
  /** 触发按钮文案（默认「活动规则」） */
  triggerLabel?: string;
  /** 弹窗标题（默认「活动规则」） */
  title?: string;
  /** 弹窗最大宽度（px，默认 420） */
  maxWidth?: number;
}

/**
 * RuleModalPlugin - 弹窗版规则（RuleExpand 的变体渲染）：规则区只放一个触发按钮，
 * 点击弹出模态窗展示完整规则。与 RuleExpand 都声明独占 renderRules，同时挂载时
 * 只留 priority 高者（装配期去重，控制台有警告）。
 */
export const createRuleModalPlugin: PluginCreator<RuleModalPluginConfig> = (
  config = {}
) => {
  const { triggerLabel = "活动规则", title = "活动规则", maxWidth = 420 } = config;

  return {
    name: "RuleModalPlugin",
    version: "0.1.0",
    description: doc.description,
    priority: 39,
    exclusiveSlots: ["renderRules"],
    config,
    hooks: {
      renderRules: (context: ActivityPluginContext) => (
        <RuleModalTrigger
          context={context}
          triggerLabel={triggerLabel}
          title={title}
          maxWidth={maxWidth}
        />
      ),
    },
  };
};

createRuleModalPlugin.meta = doc as PluginDoc;
`,hw=`import type { PluginCreator, PluginDoc } from "vane-plugin-core";
import type {
  ActivityPluginConfigBase,
  ActivityPluginContext,
} from "../../components/ActivityPlugin/plugins/types";
import { ShareBoostBar } from "./internal";
import doc from "./doc.json";

export interface ShareBoostPluginConfig extends ActivityPluginConfigBase {
  /** 标题（默认「邀请好友助力」） */
  title?: string;
  /** 未传 data.share 时的默认总次数（默认 3） */
  total?: number;
  /** 未传 data.share 时的默认已用次数（默认 0） */
  used?: number;
  /** 点「邀请助力」回调；传了则由业务侧回写 data.share.used，不传则组件内乐观自增 */
  onInvite?: () => void;
  /** 头像最多显示几个（默认 5），超出折叠为 +N */
  maxAvatars?: number;
}

/**
 * ShareBoostPlugin - 好友助力：分段名额 + 助力头像堆 + 「还差 N 人」+ 邀请按钮。
 *
 * 数据来自 data.share（total / used / helpers）；不传时回退 config 的 total / used，
 * 便于单独演示。传入 onInvite 时由业务侧回写 data.share.used 驱动，不传则组件内
 * 乐观自增（无后端场景）。
 */
export const createShareBoostPlugin: PluginCreator<ShareBoostPluginConfig> = (
  config = {}
) => {
  const {
    title = "邀请好友助力",
    total = 3,
    used = 0,
    onInvite,
    maxAvatars = 5,
  } = config;

  return {
    name: "ShareBoostPlugin",
    version: "0.1.0",
    description: doc.description,
    priority: 20,
    config,
    hooks: {
      renderFooter: (context: ActivityPluginContext) => (
        <ShareBoostBar
          ctx={context}
          title={title}
          total={total}
          used={used}
          onInvite={onInvite}
          maxAvatars={maxAvatars}
        />
      ),
    },
  };
};

createShareBoostPlugin.meta = doc as PluginDoc;
`,vw=`import React from "react";
import type { PluginCreator, PluginDoc } from "vane-plugin-core";
import type {
  ActivityPluginConfigBase,
  ActivityPluginContext,
  ActivityTask,
  TaskStatus,
} from "../../components/ActivityPlugin/plugins/types";
import doc from "./doc.json";

export interface TaskListPluginConfig extends ActivityPluginConfigBase {
  /** 是否展示每个任务的进度条（默认 true） */
  showProgress?: boolean;
  /** 完成态文案（默认「已完成」） */
  doneLabel?: string;
}

const STATUS_LABEL: Record<TaskStatus, string> = {
  locked: "未解锁",
  available: "进行中",
  completed: "已完成",
};

/** 状态色（ADR-13：禁用/锁定态实色 ≥4.5，不靠 opacity）
 *  locked   #5d636a（muted，白底 6.0:1）
 *  available #cf4407（白底 4.69:1）
 *  completed #15803d（白底 5.0:1）；#8a8f98/#1f9d55 仅 3.25/3.49 不达标，已弃用 */
const STATUS_COLOR: Record<TaskStatus, string> = {
  locked: "#5d636a",
  available: "#cf4407",
  completed: "#15803d",
};

/**
 * TaskListPlugin - 任务清单：渲染活动任务列表，展示标题 / 描述 / 进度与状态，
 * 含「去完成」动作按钮（调 context.props.onTaskAction）。
 */
export const createTaskListPlugin: PluginCreator<TaskListPluginConfig> = (
  config = {}
) => {
  const { showProgress = true, doneLabel = "已完成" } = config;

  return {
    name: "TaskListPlugin",
    version: "0.1.0",
    description: doc.description,
    priority: 20,
    config,
    // 任务清单是 renderTasks 的基准实现：与 TaskTabsPlugin（22）等更强视图竞争时让位，
    // 避免两份任务列表叠在一起（装配期去重并 console.warn）。
    exclusiveSlots: ["renderTasks"],
    hooks: {
      renderTasks: (context: ActivityPluginContext) => {
        const tasks = (context.tasks ?? []) as ActivityTask[];
        if (tasks.length === 0) return null;
        return (
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {tasks.map((task) => {
              const color = STATUS_COLOR[task.status];
              const pct = Math.round(
                Math.max(0, Math.min(1, task.progress ?? 0)) * 100
              );
              return (
                <div
                  key={task.id}
                  data-testid="activity-task"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "10px 12px",
                    borderRadius: 10,
                    border: "1px solid rgba(128,128,128,0.18)",
                    background: "#fff",
                  }}
                >
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontWeight: 600, fontSize: 14, color: "#1f2328" }}>
                      {task.title}
                    </div>
                    {task.desc && (
                      <div style={{ fontSize: 12, color: "#5d636a", marginTop: 2 }}>
                        {task.desc}
                      </div>
                    )}
                    {showProgress && task.status !== "completed" && (
                      <div
                        style={{
                          marginTop: 6,
                          height: 4,
                          borderRadius: 2,
                          background: "rgba(128,128,128,0.18)",
                        }}
                      >
                        <div
                          style={{
                            width: \`\${pct}%\`,
                            height: "100%",
                            borderRadius: 2,
                            background: "#cf4407",
                          }}
                        />
                      </div>
                    )}
                  </div>
                  <span
                    style={{
                      fontSize: 12,
                      color,
                      fontWeight: 600,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {task.status === "completed" ? doneLabel : STATUS_LABEL[task.status]}
                  </span>
                  {task.actionLabel && task.status !== "completed" && (
                    <button
                      type="button"
                      onClick={() => context.props.onTaskAction?.(task.id)}
                      style={{
                        border: "none",
                        borderRadius: 999,
                        padding: "6px 14px",
                        background: "#cf4407",
                        color: "#fff",
                        fontSize: 13,
                        cursor: "pointer",
                      }}
                    >
                      {task.actionLabel}
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        );
      },
    },
  };
};

createTaskListPlugin.meta = doc as PluginDoc;
`,yw=`import type { PluginCreator, PluginDoc } from "vane-plugin-core";
import type {
  ActivityPluginConfigBase,
  ActivityPluginContext,
  ActivityTask,
  ActivityTaskGroup,
} from "../../components/ActivityPlugin/plugins/types";
import { TaskTabs } from "./internal";
import doc from "./doc.json";

export interface TaskTabsPluginConfig extends ActivityPluginConfigBase {
  /** 页签（未传则读 data.taskGroups；都没有则单「全部」页签） */
  tabs?: ActivityTaskGroup[];
  /** 默认选中页签 key（默认第一个） */
  defaultTab?: string;
  /** 是否展示任务进度条（默认 true） */
  showProgress?: boolean;
  /** 完成态文案（默认「已完成」） */
  doneLabel?: string;
  /** 分组无任务时的文案（默认「该分组暂无任务」） */
  emptyText?: string;
}

/**
 * TaskTabsPlugin - 分组任务清单：页签切换 + 每页签完成度 + 组内任务行。
 *
 * 独占 renderTasks 槽：与 TaskListPlugin 同时装配时只留 priority 高者（本插件 22 >
 * TaskList 20，装配期去重并 console.warn）。任务用 task.group 归属分组，
 * 分组定义来自 data.taskGroups（或 config.tabs）。
 */
export const createTaskTabsPlugin: PluginCreator<TaskTabsPluginConfig> = (
  config = {}
) => {
  const {
    tabs = [],
    defaultTab,
    showProgress = true,
    doneLabel = "已完成",
    emptyText = "该分组暂无任务",
  } = config;

  return {
    name: "TaskTabsPlugin",
    version: "0.1.0",
    description: doc.description,
    priority: 22,
    config,
    exclusiveSlots: ["renderTasks"],
    hooks: {
      renderTasks: (context: ActivityPluginContext) => {
        const tasks = (context.tasks ?? []) as ActivityTask[];
        if (tasks.length === 0) return null;
        return (
          <TaskTabs
            ctx={context}
            tabs={tabs}
            defaultTab={defaultTab}
            showProgress={showProgress}
            doneLabel={doneLabel}
            emptyText={emptyText}
          />
        );
      },
    },
  };
};

createTaskTabsPlugin.meta = doc as PluginDoc;
`,qw={core:"核心闭环",display:"进度与氛围",info:"规则说明",social:"社交与反馈"},Du=["core","display","info","social"],Iu=Object.assign({"/src/custom-plugins/ActivityHeaderPlugin/doc.json":Yl,"/src/custom-plugins/AnnouncementPlugin/doc.json":na,"/src/custom-plugins/CheckinCalendarPlugin/doc.json":ia,"/src/custom-plugins/ClaimToastPlugin/doc.json":Zl,"/src/custom-plugins/ConfettiPlugin/doc.json":Kl,"/src/custom-plugins/CountdownTimerPlugin/doc.json":Il,"/src/custom-plugins/CouponStackPlugin/doc.json":Ul,"/src/custom-plugins/JackpotPlugin/doc.json":sa,"/src/custom-plugins/LeaderboardPlugin/doc.json":ea,"/src/custom-plugins/MilestoneBarPlugin/doc.json":Bl,"/src/custom-plugins/ProgressFxPlugin/doc.json":Ml,"/src/custom-plugins/ProgressRingPlugin/doc.json":Jl,"/src/custom-plugins/RedeemCodePlugin/doc.json":la,"/src/custom-plugins/RewardClaimPlugin/doc.json":Ol,"/src/custom-plugins/RuleExpandPlugin/doc.json":Dl,"/src/custom-plugins/RuleModalPlugin/doc.json":Vl,"/src/custom-plugins/ShareBoostPlugin/doc.json":ql,"/src/custom-plugins/TaskListPlugin/doc.json":zl,"/src/custom-plugins/TaskTabsPlugin/doc.json":oa}),Fu=Object.assign({"/src/custom-plugins/ActivityHeaderPlugin/create.tsx":ew,"/src/custom-plugins/AnnouncementPlugin/create.tsx":tw,"/src/custom-plugins/CheckinCalendarPlugin/create.tsx":nw,"/src/custom-plugins/ClaimToastPlugin/create.tsx":rw,"/src/custom-plugins/ConfettiPlugin/create.tsx":iw,"/src/custom-plugins/CountdownTimerPlugin/create.tsx":ow,"/src/custom-plugins/CouponStackPlugin/create.tsx":sw,"/src/custom-plugins/JackpotPlugin/create.tsx":lw,"/src/custom-plugins/LeaderboardPlugin/create.tsx":aw,"/src/custom-plugins/MilestoneBarPlugin/create.tsx":uw,"/src/custom-plugins/ProgressFxPlugin/create.tsx":cw,"/src/custom-plugins/ProgressRingPlugin/create.tsx":dw,"/src/custom-plugins/RedeemCodePlugin/create.tsx":fw,"/src/custom-plugins/RewardClaimPlugin/create.tsx":pw,"/src/custom-plugins/RuleExpandPlugin/create.tsx":gw,"/src/custom-plugins/RuleModalPlugin/create.tsx":mw,"/src/custom-plugins/ShareBoostPlugin/create.tsx":hw,"/src/custom-plugins/TaskListPlugin/create.tsx":vw,"/src/custom-plugins/TaskTabsPlugin/create.tsx":yw}),kf=e=>e.replace(/^.*\/custom-plugins\//,"").replace(/\/.*$/,"");function xw(e){const t=Object.keys(Fu).find(i=>kf(i)===e),n=t?Fu[t]:"",r=/priority:\s*(\d+)/.exec(n);return r?Number(r[1]):0}function Pw(e){const t=Object.keys(Iu).find(n=>kf(n)===e);return t?Iu[t]:{name:e,description:"（缺少 doc.json）"}}const kw=[{dir:"TaskListPlugin",group:"core",make:e=>ee(e)},{dir:"TaskTabsPlugin",group:"core",make:e=>to(e)},{dir:"RewardClaimPlugin",group:"core",make:e=>Me(e)},{dir:"RedeemCodePlugin",group:"core",args:{prefix:"VANE"},make:e=>ro(e)},{dir:"JackpotPlugin",group:"core",make:e=>no(e)},{dir:"ActivityHeaderPlugin",group:"display",make:e=>Xi(e)},{dir:"AnnouncementPlugin",group:"display",make:e=>ra(e)},{dir:"ProgressFxPlugin",group:"display",make:e=>oe(e)},{dir:"ProgressRingPlugin",group:"display",make:e=>Xl(e)},{dir:"CheckinCalendarPlugin",group:"display",make:e=>eo(e)},{dir:"CountdownTimerPlugin",group:"display",make:e=>Fl(e)},{dir:"MilestoneBarPlugin",group:"display",make:e=>Wl(e)},{dir:"ConfettiPlugin",group:"display",make:e=>Gl(e)},{dir:"CouponStackPlugin",group:"display",make:e=>Hl(e)},{dir:"RuleExpandPlugin",group:"info",make:e=>on(e)},{dir:"RuleModalPlugin",group:"info",make:e=>Ql(e)},{dir:"ClaimToastPlugin",group:"social",make:e=>Zi(e)},{dir:"ShareBoostPlugin",group:"social",make:e=>qi(e)},{dir:"LeaderboardPlugin",group:"social",make:e=>ta(e)}],Ai=kw.map(e=>{const t=Pw(e.dir),n=e.args??{};return{dir:e.dir,factory:`create${e.dir}`,group:e.group,priority:xw(e.dir),summary:t.description,doc:t,args:n,make:()=>e.make(n)}}).sort((e,t)=>Du.indexOf(e.group)-Du.indexOf(t.group)||t.priority-e.priority),Bu=new Map(Ai.map(e=>[e.dir,e])),e2=["TaskListPlugin","RewardClaimPlugin","ProgressFxPlugin"];function ww({entry:e,order:t}){var l;const{meta:n,Stage:r,source:i,file:o}=e,s=String(t).padStart(2,"0");return u.jsxs("article",{children:[u.jsx("header",{className:"page-head",children:u.jsxs("div",{children:[u.jsxs("p",{className:"eyebrow",children:[s," · ",((l=yf[n.group])==null?void 0:l.label)??n.group]}),u.jsx("h1",{className:"page-title",children:n.title})]})}),n.intro?u.jsx("p",{className:"page-sub",children:n.intro}):null,u.jsx("section",{className:"demo-stage",children:u.jsx(r,{})}),u.jsx(Qk,{code:i,title:`源码 · ${o}`,collapseAfter:0}),u.jsx(qk,{source:i,plugins:Ai})]})}const Sw={title:"夏日狂欢 · 7 日签到",tasks:[{id:"t1",title:"每日签到",desc:"连续签到领积分",progress:1,status:"completed",actionLabel:"已签到"},{id:"t2",title:"浏览会场 3 个商品",desc:"了解活动好物",progress:.6,status:"available",actionLabel:"去浏览",rewardId:"r1"},{id:"t3",title:"邀请 1 位好友",desc:"助力解锁终极大奖",progress:0,status:"locked",actionLabel:"去邀请",rewardId:"r2"}],rewards:[{id:"r1",title:"5 元无门槛券",threshold:.5,icon:"🎟️",desc:"浏览达标即可领取"},{id:"r2",title:"20 元会员券",threshold:.9,icon:"💎",desc:"邀请好友后解锁"},{id:"r3",title:"终极大礼包",threshold:1,icon:"🎁",desc:"全部任务完成发放"}],rules:[{title:"活动时间",content:"2024.07.01 - 2024.07.07，逾期任务与奖励失效。"},{title:"领取规则",content:"奖励按总体进度阈值解锁，达标后点击「领取」发放至账户；券类奖励有效期 7 天。"},{title:"特别说明",content:"邀请任务需好友完成注册并首单，视为有效助力；异常账号不予发放。"}]},Cw=I(D,[oe(),ee(),Me(),on()]),_w={id:"signin",title:"每日签到",group:"签到",blurb:"进度条 + 任务清单 + 奖励领取 + 规则折叠，最完整的活动闭环。",dataNote:"数据内联 · 加权进度 (1 + 0.6 + 0) / 3 ≈ 53%"};function bw(){return u.jsx(Cw,{data:Sw,onTaskAction:e=>console.log("task action",e),onClaim:e=>console.log("claim",e)})}const Rw=Object.freeze(Object.defineProperty({__proto__:null,default:bw,meta:_w},Symbol.toStringTag,{value:"Module"})),Tw={title:"限时秒杀 · 冲刺 100%",tasks:[{id:"t1",title:"领取秒杀券",progress:1,status:"completed",actionLabel:"已领取"},{id:"t2",title:"加购 3 件商品",progress:1,status:"completed",actionLabel:"已加购"},{id:"t3",title:"20:00 下单",progress:1,status:"completed",actionLabel:"已下单"}],rewards:[{id:"r1",title:"5 元秒杀券",threshold:.5,icon:"⚡",desc:"加购即得"},{id:"r2",title:"免运费权益",threshold:.8,icon:"🚚",desc:"下单即送"},{id:"r3",title:"整点免单名额",threshold:1,icon:"🎁",desc:"全部完成抽免单"}],rules:"秒杀商品数量有限，下单后 15 分钟内未支付订单自动释放。"},jw=I(D,[oe({height:12}),ee({showProgress:!1}),Me({claimedLabel:"已领取"})]),Ew={id:"flash",title:"限时秒杀",group:"促销",blurb:"达标即领，无需规则说明：进度特效驱动紧迫感，任务清单与奖励领取就够了。",dataNote:"数据内联 · 三项全完成 (1 + 1 + 1) / 3 = 100%"};function $w(){return u.jsx(jw,{data:Tw,onTaskAction:e=>console.log("task action",e),onClaim:e=>console.log("claim",e)})}const Aw=Object.freeze(Object.defineProperty({__proto__:null,default:$w,meta:Ew},Symbol.toStringTag,{value:"Module"})),Lw=`/**
 * 场景 01 · 每日签到
 *
 * 最完整的活动闭环：进度条 + 任务清单 + 奖励领取 + 规则折叠。
 * 本文件自含全部数据，复制到项目里（npm install vane-activity）即可原样运行。
 *
 * 进度 = 任务完成度加权平均（内核 computeProgress）：
 *   (1 + 0.6 + 0) / 3 ≈ 0.53 → 顶部进度条 53%
 *   → 5 元券（阈值 0.5）可领，20 元券（0.9）与终极大礼包（1）仍锁定。
 */
import React from "react";
import { ActivityCore, withPlugins } from "vane-activity";
import type { ActivityData } from "vane-activity";
import { createProgressFxPlugin } from "vane-activity/custom-plugins/ProgressFxPlugin";
import { createTaskListPlugin } from "vane-activity/custom-plugins/TaskListPlugin";
import { createRewardClaimPlugin } from "vane-activity/custom-plugins/RewardClaimPlugin";
import { createRuleExpandPlugin } from "vane-activity/custom-plugins/RuleExpandPlugin";

const data: ActivityData = {
  title: "夏日狂欢 · 7 日签到",
  tasks: [
    {
      id: "t1",
      title: "每日签到",
      desc: "连续签到领积分",
      progress: 1,
      status: "completed",
      actionLabel: "已签到",
    },
    {
      id: "t2",
      title: "浏览会场 3 个商品",
      desc: "了解活动好物",
      progress: 0.6,
      status: "available",
      actionLabel: "去浏览",
      rewardId: "r1",
    },
    {
      id: "t3",
      title: "邀请 1 位好友",
      desc: "助力解锁终极大奖",
      progress: 0,
      status: "locked",
      actionLabel: "去邀请",
      rewardId: "r2",
    },
  ],
  rewards: [
    { id: "r1", title: "5 元无门槛券", threshold: 0.5, icon: "🎟️", desc: "浏览达标即可领取" },
    { id: "r2", title: "20 元会员券", threshold: 0.9, icon: "💎", desc: "邀请好友后解锁" },
    { id: "r3", title: "终极大礼包", threshold: 1, icon: "🎁", desc: "全部任务完成发放" },
  ],
  rules: [
    { title: "活动时间", content: "2024.07.01 - 2024.07.07，逾期任务与奖励失效。" },
    {
      title: "领取规则",
      content: "奖励按总体进度阈值解锁，达标后点击「领取」发放至账户；券类奖励有效期 7 天。",
    },
    {
      title: "特别说明",
      content: "邀请任务需好友完成注册并首单，视为有效助力；异常账号不予发放。",
    },
  ],
};

// 装配顺序由 priority 决定：10 进度 → 20 任务 → 30 奖励 → 40 规则
const Activity = withPlugins(ActivityCore, [
  createProgressFxPlugin(),
  createTaskListPlugin(),
  createRewardClaimPlugin(),
  createRuleExpandPlugin(),
]);

// 演示站用的元信息，复制到自己项目时可整段删掉
export const meta = {
  id: "signin",
  title: "每日签到",
  group: "签到",
  blurb: "进度条 + 任务清单 + 奖励领取 + 规则折叠，最完整的活动闭环。",
  dataNote: "数据内联 · 加权进度 (1 + 0.6 + 0) / 3 ≈ 53%",
};

export default function Stage() {
  return (
    <Activity
      data={data}
      onTaskAction={(id) => console.log("task action", id)}
      onClaim={(id) => console.log("claim", id)}
    />
  );
}
`,Nw=`/**
 * 场景 02 · 限时秒杀
 *
 * 达标即领，不需要规则说明：进度特效驱动紧迫感，任务清单 + 奖励领取就够。
 * 同一份内核、更少的插件 —— 没装的区块不进产物。
 *
 * 本文件自含全部数据，复制到项目里（npm install vane-activity）即可原样运行。
 * 三项任务全部完成 → 进度 = (1 + 1 + 1) / 3 = 1.0 → 100%，触发庆祝浮层。
 */
import React from "react";
import { ActivityCore, withPlugins } from "vane-activity";
import type { ActivityData } from "vane-activity";
import { createProgressFxPlugin } from "vane-activity/custom-plugins/ProgressFxPlugin";
import { createTaskListPlugin } from "vane-activity/custom-plugins/TaskListPlugin";
import { createRewardClaimPlugin } from "vane-activity/custom-plugins/RewardClaimPlugin";

const data: ActivityData = {
  title: "限时秒杀 · 冲刺 100%",
  tasks: [
    { id: "t1", title: "领取秒杀券", progress: 1, status: "completed", actionLabel: "已领取" },
    { id: "t2", title: "加购 3 件商品", progress: 1, status: "completed", actionLabel: "已加购" },
    { id: "t3", title: "20:00 下单", progress: 1, status: "completed", actionLabel: "已下单" },
  ],
  rewards: [
    { id: "r1", title: "5 元秒杀券", threshold: 0.5, icon: "⚡", desc: "加购即得" },
    { id: "r2", title: "免运费权益", threshold: 0.8, icon: "🚚", desc: "下单即送" },
    { id: "r3", title: "整点免单名额", threshold: 1, icon: "🎁", desc: "全部完成抽免单" },
  ],
  rules: "秒杀商品数量有限，下单后 15 分钟内未支付订单自动释放。",
};

// 少装一个 RuleExpandPlugin：规则区整块不进产物，页面更短
const Activity = withPlugins(ActivityCore, [
  createProgressFxPlugin({ height: 12 }),
  createTaskListPlugin({ showProgress: false }),
  createRewardClaimPlugin({ claimedLabel: "已领取" }),
]);

// 演示站用的元信息，复制到自己项目时可整段删掉
export const meta = {
  id: "flash",
  title: "限时秒杀",
  group: "促销",
  blurb: "达标即领，无需规则说明：进度特效驱动紧迫感，任务清单与奖励领取就够了。",
  dataNote: "数据内联 · 三项全完成 (1 + 1 + 1) / 3 = 100%",
};

export default function Stage() {
  return (
    <Activity
      data={data}
      onTaskAction={(id) => console.log("task action", id)}
      onClaim={(id) => console.log("claim", id)}
    />
  );
}
`,Mw=Object.assign({"./01-signin.tsx":Rw,"./02-flash.tsx":Aw}),zw=Object.assign({"./01-signin.tsx":Lw,"./02-flash.tsx":Nw}),Ow=e=>e.replace(/^\.\//,"");function Dw(e){return Array.from(new Set(Array.from(e.matchAll(/custom-plugins\/([A-Za-z]+Plugin)/g)).map(n=>n[1]))).sort((n,r)=>{var i,o;return(((i=Bu.get(n))==null?void 0:i.priority)??0)-(((o=Bu.get(r))==null?void 0:o.priority)??0)})}const Li=Object.entries(Mw).map(([e,t])=>{const n=zw[e]??"";return{meta:t.meta,Stage:t.default,file:Ow(e),source:n,plugs:Dw(n)}}).sort((e,t)=>e.file.localeCompare(t.file)),t2=Array.from(new Set(Li.map(e=>e.meta.group))),n2=Array.from(new Set(Li.flatMap(e=>e.plugs))),Iw=x.lazy(()=>Nl(()=>import("./HomePage-bBv0P7sV.js"),[],import.meta.url).then(e=>({default:e.HomePage}))),Fw=x.lazy(()=>Nl(()=>import("./PluginsPage-BTPDf_Nb.js"),[],import.meta.url).then(e=>({default:e.PluginsPage}))),Bw=x.lazy(()=>Nl(()=>import("./ScenariosPage-BjVrBoOC.js"),[],import.meta.url).then(e=>({default:e.ScenariosPage}))),Ww={pkg:"vane-activity",brand:"A",subtitle:"营销活动 / plugin index",nav:[{to:"/",label:"总览",hint:"overview"},{to:"/plugins",label:"插件工坊",hint:`${Ai.length} plugins`},{to:"/scenarios",label:"场景示例",hint:`${Li.length} plates`}],routes:[{path:"/",element:u.jsx(Iw,{})},{path:"/plugins",element:u.jsx(Fw,{})},{path:"/scenarios",element:u.jsx(Bw,{})}],crumb:e=>e.startsWith("/plugins")?"workshop · 插件工坊":e.startsWith("/scenarios")?"plates · 场景示例":"index · 总览",demos:{label:"逐项示例",groups:Bk.map(e=>({key:e,label:yf[e].label})),entries:Ls,detail:(e,t)=>u.jsx(ww,{entry:e,order:t})},footer:[`${Ai.length} PLUGINS · ${Li.length} PLATES`,`${Ls.length} DEMOS · ACTIVITY CORE`]};function Uw(){return u.jsx(sh,{config:Ww})}const yt={title:"夏日狂欢 · 7 日签到",taskGroups:[{key:"daily",label:"每日",icon:"📅"},{key:"growth",label:"成长",icon:"🌱"},{key:"invite",label:"邀请",icon:"🤝"}],tasks:[{id:"t1",title:"每日签到",desc:"连续签到领积分",progress:1,status:"completed",group:"daily",actionLabel:"已签到"},{id:"t2",title:"浏览会场 3 个商品",desc:"了解活动好物",progress:.6,status:"available",group:"growth",actionLabel:"去浏览",rewardId:"r1"},{id:"t3",title:"邀请 1 位好友",desc:"助力解锁终极大奖",progress:0,status:"locked",group:"invite",actionLabel:"去邀请",rewardId:"r2"}],rewards:[{id:"r1",title:"5 元无门槛券",threshold:.5,icon:"🎟️",desc:"浏览达标即可领取"},{id:"r2",title:"20 元会员券",threshold:.9,icon:"💎",desc:"邀请好友后解锁"},{id:"r3",title:"终极大礼包",threshold:1,icon:"🎁",desc:"全部任务完成发放"}],rules:[{title:"活动时间",content:"2024.07.01 - 2024.07.07，逾期任务与奖励失效。"},{title:"领取规则",content:"奖励按总体进度阈值解锁，达标后点击「领取」发放至账户；券类奖励有效期 7 天。"},{title:"特别说明",content:"邀请任务需好友完成注册并首单，视为有效助力；异常账号不予发放。"}],endTime:"2026-11-10T23:59:59+08:00",share:{total:3,used:1,helpers:[{id:"u1",name:"阿柚",avatar:"🍊"},{id:"u2",name:"小满",avatar:"🌾"}]},leaderboard:[{id:"u1",name:"阿柚",score:1280,avatar:"🍊"},{id:"me",name:"我",score:960,avatar:"🙋",isMe:!0},{id:"u2",name:"小满",score:910,avatar:"🌾"},{id:"u3",name:"大白",score:640,avatar:"🐻"}],announcements:["8.1-8.7 全场券 5 折起，先领券再下单","每日 20:00 抽 20 元无门槛券，限前 1000 名","邀请好友下单再得 10 元红包，上不封顶"],checkin:{days:7,done:3}},Hw={...yt,tasks:yt.tasks.map(e=>({...e,progress:1,status:"completed"}))};function Vw(e){const t=[];if(!e)return{problems:["体检根节点不存在"],checked:0};const n=Array.from(e.querySelectorAll('[data-testid="activity-task"], [data-testid="activity-reward"]'));let r=0;const i=e.getBoundingClientRect();if(!(i.width!==0||i.height!==0||n.some(l=>{const a=l.getBoundingClientRect();return a.width!==0||a.height!==0})))return{problems:[],checked:0};for(const l of n){r+=1;const a=l.getBoundingClientRect();if(a.width===0||a.height===0){t.push(`零尺寸卡片（${a.width}×${a.height}）`);continue}const c=a.left-i.left,f=a.top-i.top;(c<-.5||f<-.5)&&t.push(`负坐标卡片（left=${c.toFixed(1)}, top=${f.toFixed(1)}）`),(a.right-i.right>1||a.bottom-i.bottom>1)&&t.push(`越界卡片（超出宿主右/下边界 ${(a.right-i.right).toFixed(1)}/${(a.bottom-i.bottom).toFixed(1)}px）`)}for(let l=0;l<n.length;l+=1)for(let a=l+1;a<n.length;a+=1){const c=n[l].getBoundingClientRect(),f=n[a].getBoundingClientRect();c.left<f.right-1&&f.left<c.right-1&&c.top<f.bottom-1&&f.top<c.bottom-1&&t.push(`卡片重叠：第 ${l+1} 与第 ${a+1} 张`)}const s=n.reduce((l,a)=>Math.max(l,a.getBoundingClientRect().bottom-i.top),0);return n.length&&e.scrollHeight+1<s&&t.push(`容器未撑开：scrollHeight=${e.scrollHeight} 小于内容底边 ${s.toFixed(1)}`),{problems:Array.from(new Set(t)),checked:r}}const Qw=I(D,[ee(),oe(),Me(),on()]),Kw=I(D,[ee(),Me(),Zi({durationMs:8e3})]);function Wu({data:e,onTaskAction:t,onClaim:n}){return u.jsx(Qw,{data:e,onTaskAction:t,onClaim:n})}function Gw({data:e,onClaim:t}){return u.jsx(Kw,{data:e,onClaim:t})}const Uu=()=>new Promise(e=>setTimeout(e,0)),wf=()=>!!globalThis.IS_REACT_ACT_ENVIRONMENT,rt=e=>{wf()?x.act(e):Tl.flushSync(e)},Yw=async e=>{wf()?await x.act(async()=>{e(),await new Promise(t=>setTimeout(t,0))}):Tl.flushSync(e)};async function Bt(e){const t=document.createElement("div");t.style.cssText="position:fixed;left:0;top:0;width:420px;background:#fff",document.body.appendChild(t);const n=nf(t);return rt(()=>n.render(e)),await Uu(),{host:t,root:n,q:r=>t.querySelector(r),qa:r=>Array.from(t.querySelectorAll(r)),text:()=>t.textContent??"",clickEl:async r=>{await Yw(()=>r.click()),await Uu()}}}function Gr(e,t,n){return e?Array.from(e.querySelectorAll(t)).find(r=>(r.textContent??"").includes(n))??null:null}async function Jw(){var r;const e=[];let t=0;const n=(i,o)=>{t+=1,document.title=`SELFTEST RUNNING ${t}`,o||e.push(i)};{const i=[],o=[],s=await Bt(u.jsx(Wu,{data:yt,onTaskAction:P=>i.push(P),onClaim:P=>o.push(P)})),l=s.q(".vc-activity");n("渲染：活动根节点 .vc-activity 存在",!!l),n("渲染：任务卡片 = 3",s.qa('[data-testid="activity-task"]').length===3),n("渲染：奖励卡片 = 3",s.qa('[data-testid="activity-reward"]').length===3),n("进度：显示 53%（sampleActivity 加权）",((l==null?void 0:l.textContent)??"").includes("53%")),n("几何体检：无叠卡/溢出/零尺寸",Vw(l).problems.length===0);const a=Gr(l,'[data-testid="activity-task"]',"浏览会场"),c=(a==null?void 0:a.querySelector("button"))??null;n("任务：存在 t2 浏览任务卡片",!!a),n("任务：t2 渲染动作按钮",!!c),c&&await s.clickEl(c),n("任务：点击「去浏览」触发 onTaskAction('t2')",i.includes("t2"));const f=Gr(l,'[data-testid="activity-reward"]',"5 元无门槛券"),p=f==null?void 0:f.querySelector("button");n("奖励：r1(5元券) 渲染领取按钮",!!p),n("奖励：r1 按钮可点（claimable）",!!p&&!p.disabled),p&&await s.clickEl(p),n("奖励：点击「领取」触发 onClaim('r1')",o.includes("r1"));const m=Gr(l,'[data-testid="activity-reward"]',"终极大礼包"),h=m==null?void 0:m.querySelector("button");n("奖励：r3(阈值1) 未解锁且禁用",!!h&&h.disabled);const y=s.qa("button").find(P=>(P.textContent??"").includes("活动规则"));n("规则：渲染「活动规则」按钮",!!y),n("规则：初始 aria-expanded=false",(y==null?void 0:y.getAttribute("aria-expanded"))==="false"),y&&await s.clickEl(y),n("规则：点击后 aria-expanded=true",(y==null?void 0:y.getAttribute("aria-expanded"))==="true"),rt(()=>s.root.unmount()),s.host.remove()}{const i=await Bt(u.jsx(Wu,{data:Hw})),o=i.q(".vc-activity");n("全完成：进度显示 100%",((o==null?void 0:o.textContent)??"").includes("100%")),n("全完成：触发「进度达成 100%」庆祝浮层",((o==null?void 0:o.textContent)??"").includes("进度达成 100%")),rt(()=>i.root.unmount()),i.host.remove()}{const i=[],o=await Bt(u.jsx(Gw,{data:yt,onClaim:c=>i.push(c)})),s=o.q(".vc-activity"),l=Gr(s,'[data-testid="activity-reward"]',"5 元无门槛券"),a=l==null?void 0:l.querySelector("button");n("toast：领取前浮层为空（首屏不补弹）",((s==null?void 0:s.textContent)??"").includes("已领取：")===!1),a&&await o.clickEl(a),n("toast：点击领取触发 onClaim('r1')",i.includes("r1")),n("toast：领取后浮出「已领取：5 元无门槛券」",((s==null?void 0:s.textContent)??"").includes("已领取：5 元无门槛券")),n("toast：role=status 可被读屏播报",o.qa('[role="status"]').length>0),rt(()=>o.root.unmount()),o.host.remove()}{const i=I(D,[to()]),o=await Bt(u.jsx(i,{data:yt}));n("tabs：渲染 3 个分组页签",o.qa('[data-testid="task-tab"]').length===3),n("tabs：默认页签（每日）只显示本组任务",o.qa('[data-testid="activity-task"]').every(w=>(w.textContent??"").includes("每日签到"))),await o.clickEl(o.qa('[data-testid="task-tab"]')[1]),n("tabs：切到「成长」后显示浏览任务",(((r=o.qa('[data-testid="activity-task"]')[0])==null?void 0:r.textContent)??"").includes("浏览会场")),rt(()=>o.root.unmount()),o.host.remove();const s=I(D,[eo()]),l=await Bt(u.jsx(s,{data:yt}));n("checkin：初始显示 3/7 天",(l.text()??"").includes("3/7 天"));const a=l.qa("button").find(w=>w.textContent==="今日签到");n("checkin：渲染可点的「今日签到」按钮",!!a&&!a.disabled),a&&await l.clickEl(a),n("checkin：签到后推进到 4/7 天",(l.text()??"").includes("4/7 天")),rt(()=>l.root.unmount()),l.host.remove();const c=I(D,[no({times:1})]),f=await Bt(u.jsx(c,{data:yt}));n("jackpot：渲染 8 个奖励格",f.qa('[data-testid="jackpot-cell"]').length===8);const p=f.qa("button").find(w=>w.textContent==="抽一次");n("jackpot：初始剩余 1 次",(f.text()??"").includes("剩余 1 次")),p&&await f.clickEl(p),n("jackpot：抽一次后剩余 0 次",(f.text()??"").includes("剩余 0 次")),n("jackpot：按钮进入「抽取中」态",f.qa("button").some(w=>w.textContent==="抽取中")),rt(()=>f.root.unmount()),f.host.remove();const m=I(D,[ro({prefix:"VANE",minLength:8,onRedeem:w=>w==="VANE-8888"})]),h=await Bt(u.jsx(m,{data:yt})),y=h.q("input");n("redeem：渲染兑换码输入框",!!y),await h.clickEl(h.qa("button").find(w=>w.textContent==="兑换")),n("redeem：空值提交提示「请输入兑换码」",(h.text()??"").includes("请输入兑换码"));const P=(w,g)=>{var v;const d=(v=Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,"value"))==null?void 0:v.set;rt(()=>{d==null||d.call(w,g),w.dispatchEvent(new Event("input",{bubbles:!0}))})};P(y,"VANE-9999"),await h.clickEl(h.qa("button").find(w=>w.textContent==="兑换")),n("redeem：错误码提示「兑换码无效或已被使用」",(h.text()??"").includes("兑换码无效或已被使用")),P(y,"vane-8888"),await h.clickEl(h.qa("button").find(w=>w.textContent==="兑换")),n("redeem：正确码（小写自动归一）提示兑换成功",(h.text()??"").includes("兑换成功")),rt(()=>h.root.unmount()),h.host.remove()}return{total:t,passed:t-e.length,failed:e}}async function Xw(){document.title="SELFTEST RUNNING";try{const e=await Jw();document.title=e.failed.length===0?`SELFTEST OK ${e.passed}/${e.total}`:`SELFTEST FAIL ${e.passed}/${e.total} :: ${e.failed.join(" | ")}`}catch(e){document.title=`SELFTEST ERROR :: ${e.message}`}}Mo.createRoot(document.getElementById("root")).render(u.jsx(Uw,{}));typeof location<"u"&&location.search.includes("selftest=1")&&Xw();export{D as A,Qk as C,Ls as D,Du as G,As as L,Ai as P,Li as S,n2 as U,e2 as a,qw as b,Kk as c,Bu as d,Gk as e,t2 as f,u as j,x as r,yt as s,I as w};
