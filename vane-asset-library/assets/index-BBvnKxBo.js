var cp=Object.defineProperty;var dp=(e,t,n)=>t in e?cp(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Ba=(e,t,n)=>dp(e,typeof t!="symbol"?t+"":t,n);function fp(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const l=Object.getOwnPropertyDescriptor(r,i);l&&Object.defineProperty(e,i,l.get?l:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(i){if(i.ep)return;i.ep=!0;const l=n(i);fetch(i.href,l)}})();function pp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var wc={exports:{}},gl={},xc={exports:{}},O={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qr=Symbol.for("react.element"),gp=Symbol.for("react.portal"),mp=Symbol.for("react.fragment"),hp=Symbol.for("react.strict_mode"),yp=Symbol.for("react.profiler"),vp=Symbol.for("react.provider"),wp=Symbol.for("react.context"),xp=Symbol.for("react.forward_ref"),Sp=Symbol.for("react.suspense"),kp=Symbol.for("react.memo"),Pp=Symbol.for("react.lazy"),Va=Symbol.iterator;function bp(e){return e===null||typeof e!="object"?null:(e=Va&&e[Va]||e["@@iterator"],typeof e=="function"?e:null)}var Sc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},kc=Object.assign,Pc={};function Kn(e,t,n){this.props=e,this.context=t,this.refs=Pc,this.updater=n||Sc}Kn.prototype.isReactComponent={};Kn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Kn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function bc(){}bc.prototype=Kn.prototype;function hs(e,t,n){this.props=e,this.context=t,this.refs=Pc,this.updater=n||Sc}var ys=hs.prototype=new bc;ys.constructor=hs;kc(ys,Kn.prototype);ys.isPureReactComponent=!0;var Ua=Array.isArray,_c=Object.prototype.hasOwnProperty,vs={current:null},Cc={key:!0,ref:!0,__self:!0,__source:!0};function Ec(e,t,n){var r,i={},l=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(l=""+t.key),t)_c.call(t,r)&&!Cc.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var a=Array(s),c=0;c<s;c++)a[c]=arguments[c+2];i.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:qr,type:e,key:l,ref:o,props:i,_owner:vs.current}}function _p(e,t){return{$$typeof:qr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ws(e){return typeof e=="object"&&e!==null&&e.$$typeof===qr}function Cp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ka=/\/+/g;function Ml(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Cp(""+e.key):t.toString(36)}function Ei(e,t,n,r,i){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(l){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case qr:case gp:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Ml(o,0):r,Ua(i)?(n="",e!=null&&(n=e.replace(Ka,"$&/")+"/"),Ei(i,t,n,"",function(c){return c})):i!=null&&(ws(i)&&(i=_p(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Ka,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",Ua(e))for(var s=0;s<e.length;s++){l=e[s];var a=r+Ml(l,s);o+=Ei(l,t,n,a,i)}else if(a=bp(e),typeof a=="function")for(e=a.call(e),s=0;!(l=e.next()).done;)l=l.value,a=r+Ml(l,s++),o+=Ei(l,t,n,a,i);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function ui(e,t,n){if(e==null)return e;var r=[],i=0;return Ei(e,r,"","",function(l){return t.call(n,l,i++)}),r}function Ep(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Pe={current:null},Ai={transition:null},Ap={ReactCurrentDispatcher:Pe,ReactCurrentBatchConfig:Ai,ReactCurrentOwner:vs};function Ac(){throw Error("act(...) is not supported in production builds of React.")}O.Children={map:ui,forEach:function(e,t,n){ui(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ui(e,function(){t++}),t},toArray:function(e){return ui(e,function(t){return t})||[]},only:function(e){if(!ws(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};O.Component=Kn;O.Fragment=mp;O.Profiler=yp;O.PureComponent=hs;O.StrictMode=hp;O.Suspense=Sp;O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ap;O.act=Ac;O.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=kc({},e.props),i=e.key,l=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,o=vs.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in t)_c.call(t,a)&&!Cc.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&s!==void 0?s[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){s=Array(a);for(var c=0;c<a;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:qr,type:e.type,key:i,ref:l,props:r,_owner:o}};O.createContext=function(e){return e={$$typeof:wp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:vp,_context:e},e.Consumer=e};O.createElement=Ec;O.createFactory=function(e){var t=Ec.bind(null,e);return t.type=e,t};O.createRef=function(){return{current:null}};O.forwardRef=function(e){return{$$typeof:xp,render:e}};O.isValidElement=ws;O.lazy=function(e){return{$$typeof:Pp,_payload:{_status:-1,_result:e},_init:Ep}};O.memo=function(e,t){return{$$typeof:kp,type:e,compare:t===void 0?null:t}};O.startTransition=function(e){var t=Ai.transition;Ai.transition={};try{e()}finally{Ai.transition=t}};O.unstable_act=Ac;O.useCallback=function(e,t){return Pe.current.useCallback(e,t)};O.useContext=function(e){return Pe.current.useContext(e)};O.useDebugValue=function(){};O.useDeferredValue=function(e){return Pe.current.useDeferredValue(e)};O.useEffect=function(e,t){return Pe.current.useEffect(e,t)};O.useId=function(){return Pe.current.useId()};O.useImperativeHandle=function(e,t,n){return Pe.current.useImperativeHandle(e,t,n)};O.useInsertionEffect=function(e,t){return Pe.current.useInsertionEffect(e,t)};O.useLayoutEffect=function(e,t){return Pe.current.useLayoutEffect(e,t)};O.useMemo=function(e,t){return Pe.current.useMemo(e,t)};O.useReducer=function(e,t,n){return Pe.current.useReducer(e,t,n)};O.useRef=function(e){return Pe.current.useRef(e)};O.useState=function(e){return Pe.current.useState(e)};O.useSyncExternalStore=function(e,t,n){return Pe.current.useSyncExternalStore(e,t,n)};O.useTransition=function(){return Pe.current.useTransition()};O.version="18.3.1";xc.exports=O;var y=xc.exports;const Yr=pp(y),Lp=fp({__proto__:null,default:Yr},[y]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jp=y,$p=Symbol.for("react.element"),zp=Symbol.for("react.fragment"),Np=Object.prototype.hasOwnProperty,Tp=jp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Fp={key:!0,ref:!0,__self:!0,__source:!0};function Lc(e,t,n){var r,i={},l=null,o=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Np.call(t,r)&&!Fp.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:$p,type:e,key:l,ref:o,props:i,_owner:Tp.current}}gl.Fragment=zp;gl.jsx=Lc;gl.jsxs=Lc;wc.exports=gl;var u=wc.exports,po={},jc={exports:{}},De={},$c={exports:{}},zc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(E,N){var R=E.length;E.push(N);e:for(;0<R;){var Y=R-1>>>1,V=E[Y];if(0<i(V,N))E[Y]=N,E[R]=V,R=Y;else break e}}function n(E){return E.length===0?null:E[0]}function r(E){if(E.length===0)return null;var N=E[0],R=E.pop();if(R!==N){E[0]=R;e:for(var Y=0,V=E.length,F=V>>>1;Y<F;){var M=2*(Y+1)-1,G=E[M],K=M+1,W=E[K];if(0>i(G,R))K<V&&0>i(W,G)?(E[Y]=W,E[K]=R,Y=K):(E[Y]=G,E[M]=R,Y=M);else if(K<V&&0>i(W,R))E[Y]=W,E[K]=R,Y=K;else break e}}return N}function i(E,N){var R=E.sortIndex-N.sortIndex;return R!==0?R:E.id-N.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var a=[],c=[],d=1,f=null,m=3,v=!1,w=!1,S=!1,b=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(E){for(var N=n(c);N!==null;){if(N.callback===null)r(c);else if(N.startTime<=E)r(c),N.sortIndex=N.expirationTime,t(a,N);else break;N=n(c)}}function x(E){if(S=!1,h(E),!w)if(n(a)!==null)w=!0,de(C);else{var N=n(c);N!==null&&U(x,N.startTime-E)}}function C(E,N){w=!1,S&&(S=!1,g(L),L=-1),v=!0;var R=m;try{for(h(N),f=n(a);f!==null&&(!(f.expirationTime>N)||E&&!T());){var Y=f.callback;if(typeof Y=="function"){f.callback=null,m=f.priorityLevel;var V=Y(f.expirationTime<=N);N=e.unstable_now(),typeof V=="function"?f.callback=V:f===n(a)&&r(a),h(N)}else r(a);f=n(a)}if(f!==null)var F=!0;else{var M=n(c);M!==null&&U(x,M.startTime-N),F=!1}return F}finally{f=null,m=R,v=!1}}var j=!1,A=null,L=-1,k=5,_=-1;function T(){return!(e.unstable_now()-_<k)}function I(){if(A!==null){var E=e.unstable_now();_=E;var N=!0;try{N=A(!0,E)}finally{N?D():(j=!1,A=null)}}else j=!1}var D;if(typeof p=="function")D=function(){p(I)};else if(typeof MessageChannel<"u"){var J=new MessageChannel,le=J.port2;J.port1.onmessage=I,D=function(){le.postMessage(null)}}else D=function(){b(I,0)};function de(E){A=E,j||(j=!0,D())}function U(E,N){L=b(function(){E(e.unstable_now())},N)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){w||v||(w=!0,de(C))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(E){switch(m){case 1:case 2:case 3:var N=3;break;default:N=m}var R=m;m=N;try{return E()}finally{m=R}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,N){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var R=m;m=E;try{return N()}finally{m=R}},e.unstable_scheduleCallback=function(E,N,R){var Y=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?Y+R:Y):R=Y,E){case 1:var V=-1;break;case 2:V=250;break;case 5:V=1073741823;break;case 4:V=1e4;break;default:V=5e3}return V=R+V,E={id:d++,callback:N,priorityLevel:E,startTime:R,expirationTime:V,sortIndex:-1},R>Y?(E.sortIndex=R,t(c,E),n(a)===null&&E===n(c)&&(S?(g(L),L=-1):S=!0,U(x,R-Y))):(E.sortIndex=V,t(a,E),w||v||(w=!0,de(C))),E},e.unstable_shouldYield=T,e.unstable_wrapCallback=function(E){var N=m;return function(){var R=m;m=N;try{return E.apply(this,arguments)}finally{m=R}}}})(zc);$c.exports=zc;var Dp=$c.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mp=y,Fe=Dp;function P(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Nc=new Set,Lr={};function un(e,t){Dn(e,t),Dn(e+"Capture",t)}function Dn(e,t){for(Lr[e]=t,e=0;e<t.length;e++)Nc.add(t[e])}var ht=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),go=Object.prototype.hasOwnProperty,Ip=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ha={},Wa={};function Rp(e){return go.call(Wa,e)?!0:go.call(Ha,e)?!1:Ip.test(e)?Wa[e]=!0:(Ha[e]=!0,!1)}function Op(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Bp(e,t,n,r){if(t===null||typeof t>"u"||Op(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function be(e,t,n,r,i,l,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=o}var he={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){he[e]=new be(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];he[t]=new be(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){he[e]=new be(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){he[e]=new be(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){he[e]=new be(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){he[e]=new be(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){he[e]=new be(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){he[e]=new be(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){he[e]=new be(e,5,!1,e.toLowerCase(),null,!1,!1)});var xs=/[\-:]([a-z])/g;function Ss(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(xs,Ss);he[t]=new be(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(xs,Ss);he[t]=new be(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(xs,Ss);he[t]=new be(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){he[e]=new be(e,1,!1,e.toLowerCase(),null,!1,!1)});he.xlinkHref=new be("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){he[e]=new be(e,1,!1,e.toLowerCase(),null,!0,!0)});function ks(e,t,n,r){var i=he.hasOwnProperty(t)?he[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Bp(t,n,i,r)&&(n=null),r||i===null?Rp(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var St=Mp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ci=Symbol.for("react.element"),hn=Symbol.for("react.portal"),yn=Symbol.for("react.fragment"),Ps=Symbol.for("react.strict_mode"),mo=Symbol.for("react.profiler"),Tc=Symbol.for("react.provider"),Fc=Symbol.for("react.context"),bs=Symbol.for("react.forward_ref"),ho=Symbol.for("react.suspense"),yo=Symbol.for("react.suspense_list"),_s=Symbol.for("react.memo"),_t=Symbol.for("react.lazy"),Dc=Symbol.for("react.offscreen"),Qa=Symbol.iterator;function lr(e){return e===null||typeof e!="object"?null:(e=Qa&&e[Qa]||e["@@iterator"],typeof e=="function"?e:null)}var re=Object.assign,Il;function mr(e){if(Il===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Il=t&&t[1]||""}return`
`+Il+e}var Rl=!1;function Ol(e,t){if(!e||Rl)return"";Rl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),l=r.stack.split(`
`),o=i.length-1,s=l.length-1;1<=o&&0<=s&&i[o]!==l[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==l[s]){if(o!==1||s!==1)do if(o--,s--,0>s||i[o]!==l[s]){var a=`
`+i[o].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=o&&0<=s);break}}}finally{Rl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?mr(e):""}function Vp(e){switch(e.tag){case 5:return mr(e.type);case 16:return mr("Lazy");case 13:return mr("Suspense");case 19:return mr("SuspenseList");case 0:case 2:case 15:return e=Ol(e.type,!1),e;case 11:return e=Ol(e.type.render,!1),e;case 1:return e=Ol(e.type,!0),e;default:return""}}function vo(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case yn:return"Fragment";case hn:return"Portal";case mo:return"Profiler";case Ps:return"StrictMode";case ho:return"Suspense";case yo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Fc:return(e.displayName||"Context")+".Consumer";case Tc:return(e._context.displayName||"Context")+".Provider";case bs:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case _s:return t=e.displayName||null,t!==null?t:vo(e.type)||"Memo";case _t:t=e._payload,e=e._init;try{return vo(e(t))}catch{}}return null}function Up(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return vo(t);case 8:return t===Ps?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Bt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Mc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Kp(e){var t=Mc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,l.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function di(e){e._valueTracker||(e._valueTracker=Kp(e))}function Ic(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Mc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Oi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function wo(e,t){var n=t.checked;return re({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ga(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Bt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Rc(e,t){t=t.checked,t!=null&&ks(e,"checked",t,!1)}function xo(e,t){Rc(e,t);var n=Bt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?So(e,t.type,n):t.hasOwnProperty("defaultValue")&&So(e,t.type,Bt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function qa(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function So(e,t,n){(t!=="number"||Oi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var hr=Array.isArray;function jn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Bt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function ko(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(P(91));return re({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ya(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(P(92));if(hr(n)){if(1<n.length)throw Error(P(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Bt(n)}}function Oc(e,t){var n=Bt(t.value),r=Bt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Xa(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Bc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Po(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Bc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var fi,Vc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(fi=fi||document.createElement("div"),fi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=fi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function jr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var xr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Hp=["Webkit","ms","Moz","O"];Object.keys(xr).forEach(function(e){Hp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),xr[t]=xr[e]})});function Uc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||xr.hasOwnProperty(e)&&xr[e]?(""+t).trim():t+"px"}function Kc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Uc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Wp=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function bo(e,t){if(t){if(Wp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(P(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(P(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(P(61))}if(t.style!=null&&typeof t.style!="object")throw Error(P(62))}}function _o(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Co=null;function Cs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Eo=null,$n=null,zn=null;function Za(e){if(e=Jr(e)){if(typeof Eo!="function")throw Error(P(280));var t=e.stateNode;t&&(t=wl(t),Eo(e.stateNode,e.type,t))}}function Hc(e){$n?zn?zn.push(e):zn=[e]:$n=e}function Wc(){if($n){var e=$n,t=zn;if(zn=$n=null,Za(e),t)for(e=0;e<t.length;e++)Za(t[e])}}function Qc(e,t){return e(t)}function Gc(){}var Bl=!1;function qc(e,t,n){if(Bl)return e(t,n);Bl=!0;try{return Qc(e,t,n)}finally{Bl=!1,($n!==null||zn!==null)&&(Gc(),Wc())}}function $r(e,t){var n=e.stateNode;if(n===null)return null;var r=wl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(P(231,t,typeof n));return n}var Ao=!1;if(ht)try{var or={};Object.defineProperty(or,"passive",{get:function(){Ao=!0}}),window.addEventListener("test",or,or),window.removeEventListener("test",or,or)}catch{Ao=!1}function Qp(e,t,n,r,i,l,o,s,a){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(d){this.onError(d)}}var Sr=!1,Bi=null,Vi=!1,Lo=null,Gp={onError:function(e){Sr=!0,Bi=e}};function qp(e,t,n,r,i,l,o,s,a){Sr=!1,Bi=null,Qp.apply(Gp,arguments)}function Yp(e,t,n,r,i,l,o,s,a){if(qp.apply(this,arguments),Sr){if(Sr){var c=Bi;Sr=!1,Bi=null}else throw Error(P(198));Vi||(Vi=!0,Lo=c)}}function cn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Yc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ja(e){if(cn(e)!==e)throw Error(P(188))}function Xp(e){var t=e.alternate;if(!t){if(t=cn(e),t===null)throw Error(P(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var l=i.alternate;if(l===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===n)return Ja(i),e;if(l===r)return Ja(i),t;l=l.sibling}throw Error(P(188))}if(n.return!==r.return)n=i,r=l;else{for(var o=!1,s=i.child;s;){if(s===n){o=!0,n=i,r=l;break}if(s===r){o=!0,r=i,n=l;break}s=s.sibling}if(!o){for(s=l.child;s;){if(s===n){o=!0,n=l,r=i;break}if(s===r){o=!0,r=l,n=i;break}s=s.sibling}if(!o)throw Error(P(189))}}if(n.alternate!==r)throw Error(P(190))}if(n.tag!==3)throw Error(P(188));return n.stateNode.current===n?e:t}function Xc(e){return e=Xp(e),e!==null?Zc(e):null}function Zc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Zc(e);if(t!==null)return t;e=e.sibling}return null}var Jc=Fe.unstable_scheduleCallback,eu=Fe.unstable_cancelCallback,Zp=Fe.unstable_shouldYield,Jp=Fe.unstable_requestPaint,oe=Fe.unstable_now,eg=Fe.unstable_getCurrentPriorityLevel,Es=Fe.unstable_ImmediatePriority,ed=Fe.unstable_UserBlockingPriority,Ui=Fe.unstable_NormalPriority,tg=Fe.unstable_LowPriority,td=Fe.unstable_IdlePriority,ml=null,ot=null;function ng(e){if(ot&&typeof ot.onCommitFiberRoot=="function")try{ot.onCommitFiberRoot(ml,e,void 0,(e.current.flags&128)===128)}catch{}}var Ze=Math.clz32?Math.clz32:lg,rg=Math.log,ig=Math.LN2;function lg(e){return e>>>=0,e===0?32:31-(rg(e)/ig|0)|0}var pi=64,gi=4194304;function yr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ki(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,l=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~i;s!==0?r=yr(s):(l&=o,l!==0&&(r=yr(l)))}else o=n&~i,o!==0?r=yr(o):l!==0&&(r=yr(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,l=t&-t,i>=l||i===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ze(t),i=1<<n,r|=e[n],t&=~i;return r}function og(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function sg(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var o=31-Ze(l),s=1<<o,a=i[o];a===-1?(!(s&n)||s&r)&&(i[o]=og(s,t)):a<=t&&(e.expiredLanes|=s),l&=~s}}function jo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function nd(){var e=pi;return pi<<=1,!(pi&4194240)&&(pi=64),e}function Vl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Xr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ze(t),e[t]=n}function ag(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ze(n),l=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~l}}function As(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ze(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var H=0;function rd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var id,Ls,ld,od,sd,$o=!1,mi=[],zt=null,Nt=null,Tt=null,zr=new Map,Nr=new Map,Et=[],ug="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function tu(e,t){switch(e){case"focusin":case"focusout":zt=null;break;case"dragenter":case"dragleave":Nt=null;break;case"mouseover":case"mouseout":Tt=null;break;case"pointerover":case"pointerout":zr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Nr.delete(t.pointerId)}}function sr(e,t,n,r,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[i]},t!==null&&(t=Jr(t),t!==null&&Ls(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function cg(e,t,n,r,i){switch(t){case"focusin":return zt=sr(zt,e,t,n,r,i),!0;case"dragenter":return Nt=sr(Nt,e,t,n,r,i),!0;case"mouseover":return Tt=sr(Tt,e,t,n,r,i),!0;case"pointerover":var l=i.pointerId;return zr.set(l,sr(zr.get(l)||null,e,t,n,r,i)),!0;case"gotpointercapture":return l=i.pointerId,Nr.set(l,sr(Nr.get(l)||null,e,t,n,r,i)),!0}return!1}function ad(e){var t=Zt(e.target);if(t!==null){var n=cn(t);if(n!==null){if(t=n.tag,t===13){if(t=Yc(n),t!==null){e.blockedOn=t,sd(e.priority,function(){ld(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Li(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=zo(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Co=r,n.target.dispatchEvent(r),Co=null}else return t=Jr(n),t!==null&&Ls(t),e.blockedOn=n,!1;t.shift()}return!0}function nu(e,t,n){Li(e)&&n.delete(t)}function dg(){$o=!1,zt!==null&&Li(zt)&&(zt=null),Nt!==null&&Li(Nt)&&(Nt=null),Tt!==null&&Li(Tt)&&(Tt=null),zr.forEach(nu),Nr.forEach(nu)}function ar(e,t){e.blockedOn===t&&(e.blockedOn=null,$o||($o=!0,Fe.unstable_scheduleCallback(Fe.unstable_NormalPriority,dg)))}function Tr(e){function t(i){return ar(i,e)}if(0<mi.length){ar(mi[0],e);for(var n=1;n<mi.length;n++){var r=mi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(zt!==null&&ar(zt,e),Nt!==null&&ar(Nt,e),Tt!==null&&ar(Tt,e),zr.forEach(t),Nr.forEach(t),n=0;n<Et.length;n++)r=Et[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Et.length&&(n=Et[0],n.blockedOn===null);)ad(n),n.blockedOn===null&&Et.shift()}var Nn=St.ReactCurrentBatchConfig,Hi=!0;function fg(e,t,n,r){var i=H,l=Nn.transition;Nn.transition=null;try{H=1,js(e,t,n,r)}finally{H=i,Nn.transition=l}}function pg(e,t,n,r){var i=H,l=Nn.transition;Nn.transition=null;try{H=4,js(e,t,n,r)}finally{H=i,Nn.transition=l}}function js(e,t,n,r){if(Hi){var i=zo(e,t,n,r);if(i===null)Zl(e,t,r,Wi,n),tu(e,r);else if(cg(i,e,t,n,r))r.stopPropagation();else if(tu(e,r),t&4&&-1<ug.indexOf(e)){for(;i!==null;){var l=Jr(i);if(l!==null&&id(l),l=zo(e,t,n,r),l===null&&Zl(e,t,r,Wi,n),l===i)break;i=l}i!==null&&r.stopPropagation()}else Zl(e,t,r,null,n)}}var Wi=null;function zo(e,t,n,r){if(Wi=null,e=Cs(r),e=Zt(e),e!==null)if(t=cn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Yc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Wi=e,null}function ud(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(eg()){case Es:return 1;case ed:return 4;case Ui:case tg:return 16;case td:return 536870912;default:return 16}default:return 16}}var Lt=null,$s=null,ji=null;function cd(){if(ji)return ji;var e,t=$s,n=t.length,r,i="value"in Lt?Lt.value:Lt.textContent,l=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[l-r];r++);return ji=i.slice(e,1<r?1-r:void 0)}function $i(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function hi(){return!0}function ru(){return!1}function Me(e){function t(n,r,i,l,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(l):l[s]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?hi:ru,this.isPropagationStopped=ru,this}return re(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=hi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=hi)},persist:function(){},isPersistent:hi}),t}var Hn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zs=Me(Hn),Zr=re({},Hn,{view:0,detail:0}),gg=Me(Zr),Ul,Kl,ur,hl=re({},Zr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ns,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ur&&(ur&&e.type==="mousemove"?(Ul=e.screenX-ur.screenX,Kl=e.screenY-ur.screenY):Kl=Ul=0,ur=e),Ul)},movementY:function(e){return"movementY"in e?e.movementY:Kl}}),iu=Me(hl),mg=re({},hl,{dataTransfer:0}),hg=Me(mg),yg=re({},Zr,{relatedTarget:0}),Hl=Me(yg),vg=re({},Hn,{animationName:0,elapsedTime:0,pseudoElement:0}),wg=Me(vg),xg=re({},Hn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Sg=Me(xg),kg=re({},Hn,{data:0}),lu=Me(kg),Pg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_g={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Cg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=_g[e])?!!t[e]:!1}function Ns(){return Cg}var Eg=re({},Zr,{key:function(e){if(e.key){var t=Pg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=$i(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?bg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ns,charCode:function(e){return e.type==="keypress"?$i(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?$i(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ag=Me(Eg),Lg=re({},hl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ou=Me(Lg),jg=re({},Zr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ns}),$g=Me(jg),zg=re({},Hn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ng=Me(zg),Tg=re({},hl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Fg=Me(Tg),Dg=[9,13,27,32],Ts=ht&&"CompositionEvent"in window,kr=null;ht&&"documentMode"in document&&(kr=document.documentMode);var Mg=ht&&"TextEvent"in window&&!kr,dd=ht&&(!Ts||kr&&8<kr&&11>=kr),su=" ",au=!1;function fd(e,t){switch(e){case"keyup":return Dg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var vn=!1;function Ig(e,t){switch(e){case"compositionend":return pd(t);case"keypress":return t.which!==32?null:(au=!0,su);case"textInput":return e=t.data,e===su&&au?null:e;default:return null}}function Rg(e,t){if(vn)return e==="compositionend"||!Ts&&fd(e,t)?(e=cd(),ji=$s=Lt=null,vn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return dd&&t.locale!=="ko"?null:t.data;default:return null}}var Og={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function uu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Og[e.type]:t==="textarea"}function gd(e,t,n,r){Hc(r),t=Qi(t,"onChange"),0<t.length&&(n=new zs("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Pr=null,Fr=null;function Bg(e){_d(e,0)}function yl(e){var t=Sn(e);if(Ic(t))return e}function Vg(e,t){if(e==="change")return t}var md=!1;if(ht){var Wl;if(ht){var Ql="oninput"in document;if(!Ql){var cu=document.createElement("div");cu.setAttribute("oninput","return;"),Ql=typeof cu.oninput=="function"}Wl=Ql}else Wl=!1;md=Wl&&(!document.documentMode||9<document.documentMode)}function du(){Pr&&(Pr.detachEvent("onpropertychange",hd),Fr=Pr=null)}function hd(e){if(e.propertyName==="value"&&yl(Fr)){var t=[];gd(t,Fr,e,Cs(e)),qc(Bg,t)}}function Ug(e,t,n){e==="focusin"?(du(),Pr=t,Fr=n,Pr.attachEvent("onpropertychange",hd)):e==="focusout"&&du()}function Kg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return yl(Fr)}function Hg(e,t){if(e==="click")return yl(t)}function Wg(e,t){if(e==="input"||e==="change")return yl(t)}function Qg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var et=typeof Object.is=="function"?Object.is:Qg;function Dr(e,t){if(et(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!go.call(t,i)||!et(e[i],t[i]))return!1}return!0}function fu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function pu(e,t){var n=fu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=fu(n)}}function yd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?yd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function vd(){for(var e=window,t=Oi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Oi(e.document)}return t}function Fs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Gg(e){var t=vd(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&yd(n.ownerDocument.documentElement,n)){if(r!==null&&Fs(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,l=Math.min(r.start,i);r=r.end===void 0?l:Math.min(r.end,i),!e.extend&&l>r&&(i=r,r=l,l=i),i=pu(n,l);var o=pu(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var qg=ht&&"documentMode"in document&&11>=document.documentMode,wn=null,No=null,br=null,To=!1;function gu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;To||wn==null||wn!==Oi(r)||(r=wn,"selectionStart"in r&&Fs(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),br&&Dr(br,r)||(br=r,r=Qi(No,"onSelect"),0<r.length&&(t=new zs("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=wn)))}function yi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var xn={animationend:yi("Animation","AnimationEnd"),animationiteration:yi("Animation","AnimationIteration"),animationstart:yi("Animation","AnimationStart"),transitionend:yi("Transition","TransitionEnd")},Gl={},wd={};ht&&(wd=document.createElement("div").style,"AnimationEvent"in window||(delete xn.animationend.animation,delete xn.animationiteration.animation,delete xn.animationstart.animation),"TransitionEvent"in window||delete xn.transitionend.transition);function vl(e){if(Gl[e])return Gl[e];if(!xn[e])return e;var t=xn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in wd)return Gl[e]=t[n];return e}var xd=vl("animationend"),Sd=vl("animationiteration"),kd=vl("animationstart"),Pd=vl("transitionend"),bd=new Map,mu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ut(e,t){bd.set(e,t),un(t,[e])}for(var ql=0;ql<mu.length;ql++){var Yl=mu[ql],Yg=Yl.toLowerCase(),Xg=Yl[0].toUpperCase()+Yl.slice(1);Ut(Yg,"on"+Xg)}Ut(xd,"onAnimationEnd");Ut(Sd,"onAnimationIteration");Ut(kd,"onAnimationStart");Ut("dblclick","onDoubleClick");Ut("focusin","onFocus");Ut("focusout","onBlur");Ut(Pd,"onTransitionEnd");Dn("onMouseEnter",["mouseout","mouseover"]);Dn("onMouseLeave",["mouseout","mouseover"]);Dn("onPointerEnter",["pointerout","pointerover"]);Dn("onPointerLeave",["pointerout","pointerover"]);un("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));un("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));un("onBeforeInput",["compositionend","keypress","textInput","paste"]);un("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));un("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));un("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Zg=new Set("cancel close invalid load scroll toggle".split(" ").concat(vr));function hu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Yp(r,t,void 0,e),e.currentTarget=null}function _d(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],a=s.instance,c=s.currentTarget;if(s=s.listener,a!==l&&i.isPropagationStopped())break e;hu(i,s,c),l=a}else for(o=0;o<r.length;o++){if(s=r[o],a=s.instance,c=s.currentTarget,s=s.listener,a!==l&&i.isPropagationStopped())break e;hu(i,s,c),l=a}}}if(Vi)throw e=Lo,Vi=!1,Lo=null,e}function X(e,t){var n=t[Ro];n===void 0&&(n=t[Ro]=new Set);var r=e+"__bubble";n.has(r)||(Cd(t,e,2,!1),n.add(r))}function Xl(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var vi="_reactListening"+Math.random().toString(36).slice(2);function Mr(e){if(!e[vi]){e[vi]=!0,Nc.forEach(function(n){n!=="selectionchange"&&(Zg.has(n)||Xl(n,!1,e),Xl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[vi]||(t[vi]=!0,Xl("selectionchange",!1,t))}}function Cd(e,t,n,r){switch(ud(t)){case 1:var i=fg;break;case 4:i=pg;break;default:i=js}n=i.bind(null,t,n,e),i=void 0,!Ao||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Zl(e,t,n,r,i){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;s!==null;){if(o=Zt(s),o===null)return;if(a=o.tag,a===5||a===6){r=l=o;continue e}s=s.parentNode}}r=r.return}qc(function(){var c=l,d=Cs(n),f=[];e:{var m=bd.get(e);if(m!==void 0){var v=zs,w=e;switch(e){case"keypress":if($i(n)===0)break e;case"keydown":case"keyup":v=Ag;break;case"focusin":w="focus",v=Hl;break;case"focusout":w="blur",v=Hl;break;case"beforeblur":case"afterblur":v=Hl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=iu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=hg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=$g;break;case xd:case Sd:case kd:v=wg;break;case Pd:v=Ng;break;case"scroll":v=gg;break;case"wheel":v=Fg;break;case"copy":case"cut":case"paste":v=Sg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=ou}var S=(t&4)!==0,b=!S&&e==="scroll",g=S?m!==null?m+"Capture":null:m;S=[];for(var p=c,h;p!==null;){h=p;var x=h.stateNode;if(h.tag===5&&x!==null&&(h=x,g!==null&&(x=$r(p,g),x!=null&&S.push(Ir(p,x,h)))),b)break;p=p.return}0<S.length&&(m=new v(m,w,null,n,d),f.push({event:m,listeners:S}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",m&&n!==Co&&(w=n.relatedTarget||n.fromElement)&&(Zt(w)||w[yt]))break e;if((v||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,v?(w=n.relatedTarget||n.toElement,v=c,w=w?Zt(w):null,w!==null&&(b=cn(w),w!==b||w.tag!==5&&w.tag!==6)&&(w=null)):(v=null,w=c),v!==w)){if(S=iu,x="onMouseLeave",g="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(S=ou,x="onPointerLeave",g="onPointerEnter",p="pointer"),b=v==null?m:Sn(v),h=w==null?m:Sn(w),m=new S(x,p+"leave",v,n,d),m.target=b,m.relatedTarget=h,x=null,Zt(d)===c&&(S=new S(g,p+"enter",w,n,d),S.target=h,S.relatedTarget=b,x=S),b=x,v&&w)t:{for(S=v,g=w,p=0,h=S;h;h=gn(h))p++;for(h=0,x=g;x;x=gn(x))h++;for(;0<p-h;)S=gn(S),p--;for(;0<h-p;)g=gn(g),h--;for(;p--;){if(S===g||g!==null&&S===g.alternate)break t;S=gn(S),g=gn(g)}S=null}else S=null;v!==null&&yu(f,m,v,S,!1),w!==null&&b!==null&&yu(f,b,w,S,!0)}}e:{if(m=c?Sn(c):window,v=m.nodeName&&m.nodeName.toLowerCase(),v==="select"||v==="input"&&m.type==="file")var C=Vg;else if(uu(m))if(md)C=Wg;else{C=Kg;var j=Ug}else(v=m.nodeName)&&v.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(C=Hg);if(C&&(C=C(e,c))){gd(f,C,n,d);break e}j&&j(e,m,c),e==="focusout"&&(j=m._wrapperState)&&j.controlled&&m.type==="number"&&So(m,"number",m.value)}switch(j=c?Sn(c):window,e){case"focusin":(uu(j)||j.contentEditable==="true")&&(wn=j,No=c,br=null);break;case"focusout":br=No=wn=null;break;case"mousedown":To=!0;break;case"contextmenu":case"mouseup":case"dragend":To=!1,gu(f,n,d);break;case"selectionchange":if(qg)break;case"keydown":case"keyup":gu(f,n,d)}var A;if(Ts)e:{switch(e){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else vn?fd(e,n)&&(L="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(dd&&n.locale!=="ko"&&(vn||L!=="onCompositionStart"?L==="onCompositionEnd"&&vn&&(A=cd()):(Lt=d,$s="value"in Lt?Lt.value:Lt.textContent,vn=!0)),j=Qi(c,L),0<j.length&&(L=new lu(L,e,null,n,d),f.push({event:L,listeners:j}),A?L.data=A:(A=pd(n),A!==null&&(L.data=A)))),(A=Mg?Ig(e,n):Rg(e,n))&&(c=Qi(c,"onBeforeInput"),0<c.length&&(d=new lu("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=A))}_d(f,t)})}function Ir(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Qi(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=$r(e,n),l!=null&&r.unshift(Ir(e,l,i)),l=$r(e,t),l!=null&&r.push(Ir(e,l,i))),e=e.return}return r}function gn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function yu(e,t,n,r,i){for(var l=t._reactName,o=[];n!==null&&n!==r;){var s=n,a=s.alternate,c=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&c!==null&&(s=c,i?(a=$r(n,l),a!=null&&o.unshift(Ir(n,a,s))):i||(a=$r(n,l),a!=null&&o.push(Ir(n,a,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Jg=/\r\n?/g,em=/\u0000|\uFFFD/g;function vu(e){return(typeof e=="string"?e:""+e).replace(Jg,`
`).replace(em,"")}function wi(e,t,n){if(t=vu(t),vu(e)!==t&&n)throw Error(P(425))}function Gi(){}var Fo=null,Do=null;function Mo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Io=typeof setTimeout=="function"?setTimeout:void 0,tm=typeof clearTimeout=="function"?clearTimeout:void 0,wu=typeof Promise=="function"?Promise:void 0,nm=typeof queueMicrotask=="function"?queueMicrotask:typeof wu<"u"?function(e){return wu.resolve(null).then(e).catch(rm)}:Io;function rm(e){setTimeout(function(){throw e})}function Jl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Tr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Tr(t)}function Ft(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function xu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Wn=Math.random().toString(36).slice(2),lt="__reactFiber$"+Wn,Rr="__reactProps$"+Wn,yt="__reactContainer$"+Wn,Ro="__reactEvents$"+Wn,im="__reactListeners$"+Wn,lm="__reactHandles$"+Wn;function Zt(e){var t=e[lt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[yt]||n[lt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=xu(e);e!==null;){if(n=e[lt])return n;e=xu(e)}return t}e=n,n=e.parentNode}return null}function Jr(e){return e=e[lt]||e[yt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Sn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(P(33))}function wl(e){return e[Rr]||null}var Oo=[],kn=-1;function Kt(e){return{current:e}}function Z(e){0>kn||(e.current=Oo[kn],Oo[kn]=null,kn--)}function q(e,t){kn++,Oo[kn]=e.current,e.current=t}var Vt={},xe=Kt(Vt),Ae=Kt(!1),rn=Vt;function Mn(e,t){var n=e.type.contextTypes;if(!n)return Vt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in n)i[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Le(e){return e=e.childContextTypes,e!=null}function qi(){Z(Ae),Z(xe)}function Su(e,t,n){if(xe.current!==Vt)throw Error(P(168));q(xe,t),q(Ae,n)}function Ed(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(P(108,Up(e)||"Unknown",i));return re({},n,r)}function Yi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Vt,rn=xe.current,q(xe,e),q(Ae,Ae.current),!0}function ku(e,t,n){var r=e.stateNode;if(!r)throw Error(P(169));n?(e=Ed(e,t,rn),r.__reactInternalMemoizedMergedChildContext=e,Z(Ae),Z(xe),q(xe,e)):Z(Ae),q(Ae,n)}var ft=null,xl=!1,eo=!1;function Ad(e){ft===null?ft=[e]:ft.push(e)}function om(e){xl=!0,Ad(e)}function Ht(){if(!eo&&ft!==null){eo=!0;var e=0,t=H;try{var n=ft;for(H=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ft=null,xl=!1}catch(i){throw ft!==null&&(ft=ft.slice(e+1)),Jc(Es,Ht),i}finally{H=t,eo=!1}}return null}var Pn=[],bn=0,Xi=null,Zi=0,Ie=[],Re=0,ln=null,pt=1,gt="";function qt(e,t){Pn[bn++]=Zi,Pn[bn++]=Xi,Xi=e,Zi=t}function Ld(e,t,n){Ie[Re++]=pt,Ie[Re++]=gt,Ie[Re++]=ln,ln=e;var r=pt;e=gt;var i=32-Ze(r)-1;r&=~(1<<i),n+=1;var l=32-Ze(t)+i;if(30<l){var o=i-i%5;l=(r&(1<<o)-1).toString(32),r>>=o,i-=o,pt=1<<32-Ze(t)+i|n<<i|r,gt=l+e}else pt=1<<l|n<<i|r,gt=e}function Ds(e){e.return!==null&&(qt(e,1),Ld(e,1,0))}function Ms(e){for(;e===Xi;)Xi=Pn[--bn],Pn[bn]=null,Zi=Pn[--bn],Pn[bn]=null;for(;e===ln;)ln=Ie[--Re],Ie[Re]=null,gt=Ie[--Re],Ie[Re]=null,pt=Ie[--Re],Ie[Re]=null}var Te=null,Ne=null,ee=!1,Xe=null;function jd(e,t){var n=Oe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Pu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Te=e,Ne=Ft(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Te=e,Ne=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=ln!==null?{id:pt,overflow:gt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Oe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Te=e,Ne=null,!0):!1;default:return!1}}function Bo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Vo(e){if(ee){var t=Ne;if(t){var n=t;if(!Pu(e,t)){if(Bo(e))throw Error(P(418));t=Ft(n.nextSibling);var r=Te;t&&Pu(e,t)?jd(r,n):(e.flags=e.flags&-4097|2,ee=!1,Te=e)}}else{if(Bo(e))throw Error(P(418));e.flags=e.flags&-4097|2,ee=!1,Te=e}}}function bu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Te=e}function xi(e){if(e!==Te)return!1;if(!ee)return bu(e),ee=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Mo(e.type,e.memoizedProps)),t&&(t=Ne)){if(Bo(e))throw $d(),Error(P(418));for(;t;)jd(e,t),t=Ft(t.nextSibling)}if(bu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(P(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ne=Ft(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ne=null}}else Ne=Te?Ft(e.stateNode.nextSibling):null;return!0}function $d(){for(var e=Ne;e;)e=Ft(e.nextSibling)}function In(){Ne=Te=null,ee=!1}function Is(e){Xe===null?Xe=[e]:Xe.push(e)}var sm=St.ReactCurrentBatchConfig;function cr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(P(309));var r=n.stateNode}if(!r)throw Error(P(147,e));var i=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(o){var s=i.refs;o===null?delete s[l]:s[l]=o},t._stringRef=l,t)}if(typeof e!="string")throw Error(P(284));if(!n._owner)throw Error(P(290,e))}return e}function Si(e,t){throw e=Object.prototype.toString.call(t),Error(P(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function _u(e){var t=e._init;return t(e._payload)}function zd(e){function t(g,p){if(e){var h=g.deletions;h===null?(g.deletions=[p],g.flags|=16):h.push(p)}}function n(g,p){if(!e)return null;for(;p!==null;)t(g,p),p=p.sibling;return null}function r(g,p){for(g=new Map;p!==null;)p.key!==null?g.set(p.key,p):g.set(p.index,p),p=p.sibling;return g}function i(g,p){return g=Rt(g,p),g.index=0,g.sibling=null,g}function l(g,p,h){return g.index=h,e?(h=g.alternate,h!==null?(h=h.index,h<p?(g.flags|=2,p):h):(g.flags|=2,p)):(g.flags|=1048576,p)}function o(g){return e&&g.alternate===null&&(g.flags|=2),g}function s(g,p,h,x){return p===null||p.tag!==6?(p=so(h,g.mode,x),p.return=g,p):(p=i(p,h),p.return=g,p)}function a(g,p,h,x){var C=h.type;return C===yn?d(g,p,h.props.children,x,h.key):p!==null&&(p.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===_t&&_u(C)===p.type)?(x=i(p,h.props),x.ref=cr(g,p,h),x.return=g,x):(x=Ii(h.type,h.key,h.props,null,g.mode,x),x.ref=cr(g,p,h),x.return=g,x)}function c(g,p,h,x){return p===null||p.tag!==4||p.stateNode.containerInfo!==h.containerInfo||p.stateNode.implementation!==h.implementation?(p=ao(h,g.mode,x),p.return=g,p):(p=i(p,h.children||[]),p.return=g,p)}function d(g,p,h,x,C){return p===null||p.tag!==7?(p=nn(h,g.mode,x,C),p.return=g,p):(p=i(p,h),p.return=g,p)}function f(g,p,h){if(typeof p=="string"&&p!==""||typeof p=="number")return p=so(""+p,g.mode,h),p.return=g,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case ci:return h=Ii(p.type,p.key,p.props,null,g.mode,h),h.ref=cr(g,null,p),h.return=g,h;case hn:return p=ao(p,g.mode,h),p.return=g,p;case _t:var x=p._init;return f(g,x(p._payload),h)}if(hr(p)||lr(p))return p=nn(p,g.mode,h,null),p.return=g,p;Si(g,p)}return null}function m(g,p,h,x){var C=p!==null?p.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return C!==null?null:s(g,p,""+h,x);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case ci:return h.key===C?a(g,p,h,x):null;case hn:return h.key===C?c(g,p,h,x):null;case _t:return C=h._init,m(g,p,C(h._payload),x)}if(hr(h)||lr(h))return C!==null?null:d(g,p,h,x,null);Si(g,h)}return null}function v(g,p,h,x,C){if(typeof x=="string"&&x!==""||typeof x=="number")return g=g.get(h)||null,s(p,g,""+x,C);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ci:return g=g.get(x.key===null?h:x.key)||null,a(p,g,x,C);case hn:return g=g.get(x.key===null?h:x.key)||null,c(p,g,x,C);case _t:var j=x._init;return v(g,p,h,j(x._payload),C)}if(hr(x)||lr(x))return g=g.get(h)||null,d(p,g,x,C,null);Si(p,x)}return null}function w(g,p,h,x){for(var C=null,j=null,A=p,L=p=0,k=null;A!==null&&L<h.length;L++){A.index>L?(k=A,A=null):k=A.sibling;var _=m(g,A,h[L],x);if(_===null){A===null&&(A=k);break}e&&A&&_.alternate===null&&t(g,A),p=l(_,p,L),j===null?C=_:j.sibling=_,j=_,A=k}if(L===h.length)return n(g,A),ee&&qt(g,L),C;if(A===null){for(;L<h.length;L++)A=f(g,h[L],x),A!==null&&(p=l(A,p,L),j===null?C=A:j.sibling=A,j=A);return ee&&qt(g,L),C}for(A=r(g,A);L<h.length;L++)k=v(A,g,L,h[L],x),k!==null&&(e&&k.alternate!==null&&A.delete(k.key===null?L:k.key),p=l(k,p,L),j===null?C=k:j.sibling=k,j=k);return e&&A.forEach(function(T){return t(g,T)}),ee&&qt(g,L),C}function S(g,p,h,x){var C=lr(h);if(typeof C!="function")throw Error(P(150));if(h=C.call(h),h==null)throw Error(P(151));for(var j=C=null,A=p,L=p=0,k=null,_=h.next();A!==null&&!_.done;L++,_=h.next()){A.index>L?(k=A,A=null):k=A.sibling;var T=m(g,A,_.value,x);if(T===null){A===null&&(A=k);break}e&&A&&T.alternate===null&&t(g,A),p=l(T,p,L),j===null?C=T:j.sibling=T,j=T,A=k}if(_.done)return n(g,A),ee&&qt(g,L),C;if(A===null){for(;!_.done;L++,_=h.next())_=f(g,_.value,x),_!==null&&(p=l(_,p,L),j===null?C=_:j.sibling=_,j=_);return ee&&qt(g,L),C}for(A=r(g,A);!_.done;L++,_=h.next())_=v(A,g,L,_.value,x),_!==null&&(e&&_.alternate!==null&&A.delete(_.key===null?L:_.key),p=l(_,p,L),j===null?C=_:j.sibling=_,j=_);return e&&A.forEach(function(I){return t(g,I)}),ee&&qt(g,L),C}function b(g,p,h,x){if(typeof h=="object"&&h!==null&&h.type===yn&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case ci:e:{for(var C=h.key,j=p;j!==null;){if(j.key===C){if(C=h.type,C===yn){if(j.tag===7){n(g,j.sibling),p=i(j,h.props.children),p.return=g,g=p;break e}}else if(j.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===_t&&_u(C)===j.type){n(g,j.sibling),p=i(j,h.props),p.ref=cr(g,j,h),p.return=g,g=p;break e}n(g,j);break}else t(g,j);j=j.sibling}h.type===yn?(p=nn(h.props.children,g.mode,x,h.key),p.return=g,g=p):(x=Ii(h.type,h.key,h.props,null,g.mode,x),x.ref=cr(g,p,h),x.return=g,g=x)}return o(g);case hn:e:{for(j=h.key;p!==null;){if(p.key===j)if(p.tag===4&&p.stateNode.containerInfo===h.containerInfo&&p.stateNode.implementation===h.implementation){n(g,p.sibling),p=i(p,h.children||[]),p.return=g,g=p;break e}else{n(g,p);break}else t(g,p);p=p.sibling}p=ao(h,g.mode,x),p.return=g,g=p}return o(g);case _t:return j=h._init,b(g,p,j(h._payload),x)}if(hr(h))return w(g,p,h,x);if(lr(h))return S(g,p,h,x);Si(g,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,p!==null&&p.tag===6?(n(g,p.sibling),p=i(p,h),p.return=g,g=p):(n(g,p),p=so(h,g.mode,x),p.return=g,g=p),o(g)):n(g,p)}return b}var Rn=zd(!0),Nd=zd(!1),Ji=Kt(null),el=null,_n=null,Rs=null;function Os(){Rs=_n=el=null}function Bs(e){var t=Ji.current;Z(Ji),e._currentValue=t}function Uo(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Tn(e,t){el=e,Rs=_n=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ee=!0),e.firstContext=null)}function Ve(e){var t=e._currentValue;if(Rs!==e)if(e={context:e,memoizedValue:t,next:null},_n===null){if(el===null)throw Error(P(308));_n=e,el.dependencies={lanes:0,firstContext:e}}else _n=_n.next=e;return t}var Jt=null;function Vs(e){Jt===null?Jt=[e]:Jt.push(e)}function Td(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Vs(t)):(n.next=i.next,i.next=n),t.interleaved=n,vt(e,r)}function vt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ct=!1;function Us(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Fd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function mt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Dt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,B&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,vt(e,n)}return i=r.interleaved,i===null?(t.next=t,Vs(r)):(t.next=i.next,i.next=t),r.interleaved=t,vt(e,n)}function zi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,As(e,n)}}function Cu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?i=l=o:l=l.next=o,n=n.next}while(n!==null);l===null?i=l=t:l=l.next=t}else i=l=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function tl(e,t,n,r){var i=e.updateQueue;Ct=!1;var l=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var a=s,c=a.next;a.next=null,o===null?l=c:o.next=c,o=a;var d=e.alternate;d!==null&&(d=d.updateQueue,s=d.lastBaseUpdate,s!==o&&(s===null?d.firstBaseUpdate=c:s.next=c,d.lastBaseUpdate=a))}if(l!==null){var f=i.baseState;o=0,d=c=a=null,s=l;do{var m=s.lane,v=s.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:v,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var w=e,S=s;switch(m=t,v=n,S.tag){case 1:if(w=S.payload,typeof w=="function"){f=w.call(v,f,m);break e}f=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=S.payload,m=typeof w=="function"?w.call(v,f,m):w,m==null)break e;f=re({},f,m);break e;case 2:Ct=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[s]:m.push(s))}else v={eventTime:v,lane:m,tag:s.tag,payload:s.payload,callback:s.callback,next:null},d===null?(c=d=v,a=f):d=d.next=v,o|=m;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;m=s,s=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(d===null&&(a=f),i.baseState=a,i.firstBaseUpdate=c,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else l===null&&(i.shared.lanes=0);sn|=o,e.lanes=o,e.memoizedState=f}}function Eu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(P(191,i));i.call(r)}}}var ei={},st=Kt(ei),Or=Kt(ei),Br=Kt(ei);function en(e){if(e===ei)throw Error(P(174));return e}function Ks(e,t){switch(q(Br,t),q(Or,e),q(st,ei),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Po(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Po(t,e)}Z(st),q(st,t)}function On(){Z(st),Z(Or),Z(Br)}function Dd(e){en(Br.current);var t=en(st.current),n=Po(t,e.type);t!==n&&(q(Or,e),q(st,n))}function Hs(e){Or.current===e&&(Z(st),Z(Or))}var te=Kt(0);function nl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var to=[];function Ws(){for(var e=0;e<to.length;e++)to[e]._workInProgressVersionPrimary=null;to.length=0}var Ni=St.ReactCurrentDispatcher,no=St.ReactCurrentBatchConfig,on=0,ne=null,ue=null,fe=null,rl=!1,_r=!1,Vr=0,am=0;function ye(){throw Error(P(321))}function Qs(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!et(e[n],t[n]))return!1;return!0}function Gs(e,t,n,r,i,l){if(on=l,ne=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ni.current=e===null||e.memoizedState===null?fm:pm,e=n(r,i),_r){l=0;do{if(_r=!1,Vr=0,25<=l)throw Error(P(301));l+=1,fe=ue=null,t.updateQueue=null,Ni.current=gm,e=n(r,i)}while(_r)}if(Ni.current=il,t=ue!==null&&ue.next!==null,on=0,fe=ue=ne=null,rl=!1,t)throw Error(P(300));return e}function qs(){var e=Vr!==0;return Vr=0,e}function it(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fe===null?ne.memoizedState=fe=e:fe=fe.next=e,fe}function Ue(){if(ue===null){var e=ne.alternate;e=e!==null?e.memoizedState:null}else e=ue.next;var t=fe===null?ne.memoizedState:fe.next;if(t!==null)fe=t,ue=e;else{if(e===null)throw Error(P(310));ue=e,e={memoizedState:ue.memoizedState,baseState:ue.baseState,baseQueue:ue.baseQueue,queue:ue.queue,next:null},fe===null?ne.memoizedState=fe=e:fe=fe.next=e}return fe}function Ur(e,t){return typeof t=="function"?t(e):t}function ro(e){var t=Ue(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=ue,i=r.baseQueue,l=n.pending;if(l!==null){if(i!==null){var o=i.next;i.next=l.next,l.next=o}r.baseQueue=i=l,n.pending=null}if(i!==null){l=i.next,r=r.baseState;var s=o=null,a=null,c=l;do{var d=c.lane;if((on&d)===d)a!==null&&(a=a.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};a===null?(s=a=f,o=r):a=a.next=f,ne.lanes|=d,sn|=d}c=c.next}while(c!==null&&c!==l);a===null?o=r:a.next=s,et(r,t.memoizedState)||(Ee=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do l=i.lane,ne.lanes|=l,sn|=l,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function io(e){var t=Ue(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,l=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do l=e(l,o.action),o=o.next;while(o!==i);et(l,t.memoizedState)||(Ee=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function Md(){}function Id(e,t){var n=ne,r=Ue(),i=t(),l=!et(r.memoizedState,i);if(l&&(r.memoizedState=i,Ee=!0),r=r.queue,Ys(Bd.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||fe!==null&&fe.memoizedState.tag&1){if(n.flags|=2048,Kr(9,Od.bind(null,n,r,i,t),void 0,null),pe===null)throw Error(P(349));on&30||Rd(n,t,i)}return i}function Rd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ne.updateQueue,t===null?(t={lastEffect:null,stores:null},ne.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Od(e,t,n,r){t.value=n,t.getSnapshot=r,Vd(t)&&Ud(e)}function Bd(e,t,n){return n(function(){Vd(t)&&Ud(e)})}function Vd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!et(e,n)}catch{return!0}}function Ud(e){var t=vt(e,1);t!==null&&Je(t,e,1,-1)}function Au(e){var t=it();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ur,lastRenderedState:e},t.queue=e,e=e.dispatch=dm.bind(null,ne,e),[t.memoizedState,e]}function Kr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ne.updateQueue,t===null?(t={lastEffect:null,stores:null},ne.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Kd(){return Ue().memoizedState}function Ti(e,t,n,r){var i=it();ne.flags|=e,i.memoizedState=Kr(1|t,n,void 0,r===void 0?null:r)}function Sl(e,t,n,r){var i=Ue();r=r===void 0?null:r;var l=void 0;if(ue!==null){var o=ue.memoizedState;if(l=o.destroy,r!==null&&Qs(r,o.deps)){i.memoizedState=Kr(t,n,l,r);return}}ne.flags|=e,i.memoizedState=Kr(1|t,n,l,r)}function Lu(e,t){return Ti(8390656,8,e,t)}function Ys(e,t){return Sl(2048,8,e,t)}function Hd(e,t){return Sl(4,2,e,t)}function Wd(e,t){return Sl(4,4,e,t)}function Qd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Gd(e,t,n){return n=n!=null?n.concat([e]):null,Sl(4,4,Qd.bind(null,t,e),n)}function Xs(){}function qd(e,t){var n=Ue();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Qs(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Yd(e,t){var n=Ue();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Qs(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Xd(e,t,n){return on&21?(et(n,t)||(n=nd(),ne.lanes|=n,sn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ee=!0),e.memoizedState=n)}function um(e,t){var n=H;H=n!==0&&4>n?n:4,e(!0);var r=no.transition;no.transition={};try{e(!1),t()}finally{H=n,no.transition=r}}function Zd(){return Ue().memoizedState}function cm(e,t,n){var r=It(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Jd(e))ef(t,n);else if(n=Td(e,t,n,r),n!==null){var i=ke();Je(n,e,r,i),tf(n,t,r)}}function dm(e,t,n){var r=It(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Jd(e))ef(t,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var o=t.lastRenderedState,s=l(o,n);if(i.hasEagerState=!0,i.eagerState=s,et(s,o)){var a=t.interleaved;a===null?(i.next=i,Vs(t)):(i.next=a.next,a.next=i),t.interleaved=i;return}}catch{}finally{}n=Td(e,t,i,r),n!==null&&(i=ke(),Je(n,e,r,i),tf(n,t,r))}}function Jd(e){var t=e.alternate;return e===ne||t!==null&&t===ne}function ef(e,t){_r=rl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function tf(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,As(e,n)}}var il={readContext:Ve,useCallback:ye,useContext:ye,useEffect:ye,useImperativeHandle:ye,useInsertionEffect:ye,useLayoutEffect:ye,useMemo:ye,useReducer:ye,useRef:ye,useState:ye,useDebugValue:ye,useDeferredValue:ye,useTransition:ye,useMutableSource:ye,useSyncExternalStore:ye,useId:ye,unstable_isNewReconciler:!1},fm={readContext:Ve,useCallback:function(e,t){return it().memoizedState=[e,t===void 0?null:t],e},useContext:Ve,useEffect:Lu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ti(4194308,4,Qd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ti(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ti(4,2,e,t)},useMemo:function(e,t){var n=it();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=it();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=cm.bind(null,ne,e),[r.memoizedState,e]},useRef:function(e){var t=it();return e={current:e},t.memoizedState=e},useState:Au,useDebugValue:Xs,useDeferredValue:function(e){return it().memoizedState=e},useTransition:function(){var e=Au(!1),t=e[0];return e=um.bind(null,e[1]),it().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ne,i=it();if(ee){if(n===void 0)throw Error(P(407));n=n()}else{if(n=t(),pe===null)throw Error(P(349));on&30||Rd(r,t,n)}i.memoizedState=n;var l={value:n,getSnapshot:t};return i.queue=l,Lu(Bd.bind(null,r,l,e),[e]),r.flags|=2048,Kr(9,Od.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=it(),t=pe.identifierPrefix;if(ee){var n=gt,r=pt;n=(r&~(1<<32-Ze(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Vr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=am++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},pm={readContext:Ve,useCallback:qd,useContext:Ve,useEffect:Ys,useImperativeHandle:Gd,useInsertionEffect:Hd,useLayoutEffect:Wd,useMemo:Yd,useReducer:ro,useRef:Kd,useState:function(){return ro(Ur)},useDebugValue:Xs,useDeferredValue:function(e){var t=Ue();return Xd(t,ue.memoizedState,e)},useTransition:function(){var e=ro(Ur)[0],t=Ue().memoizedState;return[e,t]},useMutableSource:Md,useSyncExternalStore:Id,useId:Zd,unstable_isNewReconciler:!1},gm={readContext:Ve,useCallback:qd,useContext:Ve,useEffect:Ys,useImperativeHandle:Gd,useInsertionEffect:Hd,useLayoutEffect:Wd,useMemo:Yd,useReducer:io,useRef:Kd,useState:function(){return io(Ur)},useDebugValue:Xs,useDeferredValue:function(e){var t=Ue();return ue===null?t.memoizedState=e:Xd(t,ue.memoizedState,e)},useTransition:function(){var e=io(Ur)[0],t=Ue().memoizedState;return[e,t]},useMutableSource:Md,useSyncExternalStore:Id,useId:Zd,unstable_isNewReconciler:!1};function qe(e,t){if(e&&e.defaultProps){t=re({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ko(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:re({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var kl={isMounted:function(e){return(e=e._reactInternals)?cn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ke(),i=It(e),l=mt(r,i);l.payload=t,n!=null&&(l.callback=n),t=Dt(e,l,i),t!==null&&(Je(t,e,i,r),zi(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ke(),i=It(e),l=mt(r,i);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=Dt(e,l,i),t!==null&&(Je(t,e,i,r),zi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ke(),r=It(e),i=mt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Dt(e,i,r),t!==null&&(Je(t,e,r,n),zi(t,e,r))}};function ju(e,t,n,r,i,l,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,o):t.prototype&&t.prototype.isPureReactComponent?!Dr(n,r)||!Dr(i,l):!0}function nf(e,t,n){var r=!1,i=Vt,l=t.contextType;return typeof l=="object"&&l!==null?l=Ve(l):(i=Le(t)?rn:xe.current,r=t.contextTypes,l=(r=r!=null)?Mn(e,i):Vt),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=kl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),t}function $u(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&kl.enqueueReplaceState(t,t.state,null)}function Ho(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Us(e);var l=t.contextType;typeof l=="object"&&l!==null?i.context=Ve(l):(l=Le(t)?rn:xe.current,i.context=Mn(e,l)),i.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(Ko(e,t,l,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&kl.enqueueReplaceState(i,i.state,null),tl(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Bn(e,t){try{var n="",r=t;do n+=Vp(r),r=r.return;while(r);var i=n}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:i,digest:null}}function lo(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Wo(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var mm=typeof WeakMap=="function"?WeakMap:Map;function rf(e,t,n){n=mt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ol||(ol=!0,ns=r),Wo(e,t)},n}function lf(e,t,n){n=mt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Wo(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){Wo(e,t),typeof r!="function"&&(Mt===null?Mt=new Set([this]):Mt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function zu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new mm;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Lm.bind(null,e,t,n),t.then(e,e))}function Nu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Tu(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=mt(-1,1),t.tag=2,Dt(n,t,1))),n.lanes|=1),e)}var hm=St.ReactCurrentOwner,Ee=!1;function Se(e,t,n,r){t.child=e===null?Nd(t,null,n,r):Rn(t,e.child,n,r)}function Fu(e,t,n,r,i){n=n.render;var l=t.ref;return Tn(t,i),r=Gs(e,t,n,r,l,i),n=qs(),e!==null&&!Ee?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,wt(e,t,i)):(ee&&n&&Ds(t),t.flags|=1,Se(e,t,r,i),t.child)}function Du(e,t,n,r,i){if(e===null){var l=n.type;return typeof l=="function"&&!la(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,of(e,t,l,r,i)):(e=Ii(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&i)){var o=l.memoizedProps;if(n=n.compare,n=n!==null?n:Dr,n(o,r)&&e.ref===t.ref)return wt(e,t,i)}return t.flags|=1,e=Rt(l,r),e.ref=t.ref,e.return=t,t.child=e}function of(e,t,n,r,i){if(e!==null){var l=e.memoizedProps;if(Dr(l,r)&&e.ref===t.ref)if(Ee=!1,t.pendingProps=r=l,(e.lanes&i)!==0)e.flags&131072&&(Ee=!0);else return t.lanes=e.lanes,wt(e,t,i)}return Qo(e,t,n,r,i)}function sf(e,t,n){var r=t.pendingProps,i=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},q(En,ze),ze|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,q(En,ze),ze|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,q(En,ze),ze|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,q(En,ze),ze|=r;return Se(e,t,i,n),t.child}function af(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Qo(e,t,n,r,i){var l=Le(n)?rn:xe.current;return l=Mn(t,l),Tn(t,i),n=Gs(e,t,n,r,l,i),r=qs(),e!==null&&!Ee?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,wt(e,t,i)):(ee&&r&&Ds(t),t.flags|=1,Se(e,t,n,i),t.child)}function Mu(e,t,n,r,i){if(Le(n)){var l=!0;Yi(t)}else l=!1;if(Tn(t,i),t.stateNode===null)Fi(e,t),nf(t,n,r),Ho(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var a=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ve(c):(c=Le(n)?rn:xe.current,c=Mn(t,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||a!==c)&&$u(t,o,r,c),Ct=!1;var m=t.memoizedState;o.state=m,tl(t,r,o,i),a=t.memoizedState,s!==r||m!==a||Ae.current||Ct?(typeof d=="function"&&(Ko(t,n,d,r),a=t.memoizedState),(s=Ct||ju(t,n,s,r,m,a,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),o.props=r,o.state=a,o.context=c,r=s):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Fd(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:qe(t.type,s),o.props=c,f=t.pendingProps,m=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=Ve(a):(a=Le(n)?rn:xe.current,a=Mn(t,a));var v=n.getDerivedStateFromProps;(d=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==f||m!==a)&&$u(t,o,r,a),Ct=!1,m=t.memoizedState,o.state=m,tl(t,r,o,i);var w=t.memoizedState;s!==f||m!==w||Ae.current||Ct?(typeof v=="function"&&(Ko(t,n,v,r),w=t.memoizedState),(c=Ct||ju(t,n,c,r,m,w,a)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,w,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,w,a)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),o.props=r,o.state=w,o.context=a,r=c):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Go(e,t,n,r,l,i)}function Go(e,t,n,r,i,l){af(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&ku(t,n,!1),wt(e,t,l);r=t.stateNode,hm.current=t;var s=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Rn(t,e.child,null,l),t.child=Rn(t,null,s,l)):Se(e,t,s,l),t.memoizedState=r.state,i&&ku(t,n,!0),t.child}function uf(e){var t=e.stateNode;t.pendingContext?Su(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Su(e,t.context,!1),Ks(e,t.containerInfo)}function Iu(e,t,n,r,i){return In(),Is(i),t.flags|=256,Se(e,t,n,r),t.child}var qo={dehydrated:null,treeContext:null,retryLane:0};function Yo(e){return{baseLanes:e,cachePool:null,transitions:null}}function cf(e,t,n){var r=t.pendingProps,i=te.current,l=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),q(te,i&1),e===null)return Vo(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,l?(r=t.mode,l=t.child,o={mode:"hidden",children:o},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=o):l=_l(o,r,0,null),e=nn(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Yo(n),t.memoizedState=qo,e):Zs(t,o));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return ym(e,t,o,r,s,i,n);if(l){l=r.fallback,o=t.mode,i=e.child,s=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=Rt(i,a),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?l=Rt(s,l):(l=nn(l,o,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,o=e.child.memoizedState,o=o===null?Yo(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},l.memoizedState=o,l.childLanes=e.childLanes&~n,t.memoizedState=qo,r}return l=e.child,e=l.sibling,r=Rt(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Zs(e,t){return t=_l({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ki(e,t,n,r){return r!==null&&Is(r),Rn(t,e.child,null,n),e=Zs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ym(e,t,n,r,i,l,o){if(n)return t.flags&256?(t.flags&=-257,r=lo(Error(P(422))),ki(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,i=t.mode,r=_l({mode:"visible",children:r.children},i,0,null),l=nn(l,i,o,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&Rn(t,e.child,null,o),t.child.memoizedState=Yo(o),t.memoizedState=qo,l);if(!(t.mode&1))return ki(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,l=Error(P(419)),r=lo(l,r,void 0),ki(e,t,o,r)}if(s=(o&e.childLanes)!==0,Ee||s){if(r=pe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,vt(e,i),Je(r,e,i,-1))}return ia(),r=lo(Error(P(421))),ki(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=jm.bind(null,e),i._reactRetry=t,null):(e=l.treeContext,Ne=Ft(i.nextSibling),Te=t,ee=!0,Xe=null,e!==null&&(Ie[Re++]=pt,Ie[Re++]=gt,Ie[Re++]=ln,pt=e.id,gt=e.overflow,ln=t),t=Zs(t,r.children),t.flags|=4096,t)}function Ru(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Uo(e.return,t,n)}function oo(e,t,n,r,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=i)}function df(e,t,n){var r=t.pendingProps,i=r.revealOrder,l=r.tail;if(Se(e,t,r.children,n),r=te.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ru(e,n,t);else if(e.tag===19)Ru(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(q(te,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&nl(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),oo(t,!1,i,n,l);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&nl(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}oo(t,!0,n,null,l);break;case"together":oo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Fi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function wt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),sn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(P(153));if(t.child!==null){for(e=t.child,n=Rt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Rt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function vm(e,t,n){switch(t.tag){case 3:uf(t),In();break;case 5:Dd(t);break;case 1:Le(t.type)&&Yi(t);break;case 4:Ks(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;q(Ji,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(q(te,te.current&1),t.flags|=128,null):n&t.child.childLanes?cf(e,t,n):(q(te,te.current&1),e=wt(e,t,n),e!==null?e.sibling:null);q(te,te.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return df(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),q(te,te.current),r)break;return null;case 22:case 23:return t.lanes=0,sf(e,t,n)}return wt(e,t,n)}var ff,Xo,pf,gf;ff=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Xo=function(){};pf=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,en(st.current);var l=null;switch(n){case"input":i=wo(e,i),r=wo(e,r),l=[];break;case"select":i=re({},i,{value:void 0}),r=re({},r,{value:void 0}),l=[];break;case"textarea":i=ko(e,i),r=ko(e,r),l=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Gi)}bo(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var s=i[c];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Lr.hasOwnProperty(c)?l||(l=[]):(l=l||[]).push(c,null));for(c in r){var a=r[c];if(s=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&a!==s&&(a!=null||s!=null))if(c==="style")if(s){for(o in s)!s.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&s[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(l||(l=[]),l.push(c,n)),n=a;else c==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(l=l||[]).push(c,a)):c==="children"?typeof a!="string"&&typeof a!="number"||(l=l||[]).push(c,""+a):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Lr.hasOwnProperty(c)?(a!=null&&c==="onScroll"&&X("scroll",e),l||s===a||(l=[])):(l=l||[]).push(c,a))}n&&(l=l||[]).push("style",n);var c=l;(t.updateQueue=c)&&(t.flags|=4)}};gf=function(e,t,n,r){n!==r&&(t.flags|=4)};function dr(e,t){if(!ee)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ve(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function wm(e,t,n){var r=t.pendingProps;switch(Ms(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ve(t),null;case 1:return Le(t.type)&&qi(),ve(t),null;case 3:return r=t.stateNode,On(),Z(Ae),Z(xe),Ws(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(xi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Xe!==null&&(ls(Xe),Xe=null))),Xo(e,t),ve(t),null;case 5:Hs(t);var i=en(Br.current);if(n=t.type,e!==null&&t.stateNode!=null)pf(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(P(166));return ve(t),null}if(e=en(st.current),xi(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[lt]=t,r[Rr]=l,e=(t.mode&1)!==0,n){case"dialog":X("cancel",r),X("close",r);break;case"iframe":case"object":case"embed":X("load",r);break;case"video":case"audio":for(i=0;i<vr.length;i++)X(vr[i],r);break;case"source":X("error",r);break;case"img":case"image":case"link":X("error",r),X("load",r);break;case"details":X("toggle",r);break;case"input":Ga(r,l),X("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},X("invalid",r);break;case"textarea":Ya(r,l),X("invalid",r)}bo(n,l),i=null;for(var o in l)if(l.hasOwnProperty(o)){var s=l[o];o==="children"?typeof s=="string"?r.textContent!==s&&(l.suppressHydrationWarning!==!0&&wi(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(l.suppressHydrationWarning!==!0&&wi(r.textContent,s,e),i=["children",""+s]):Lr.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&X("scroll",r)}switch(n){case"input":di(r),qa(r,l,!0);break;case"textarea":di(r),Xa(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=Gi)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Bc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[lt]=t,e[Rr]=r,ff(e,t,!1,!1),t.stateNode=e;e:{switch(o=_o(n,r),n){case"dialog":X("cancel",e),X("close",e),i=r;break;case"iframe":case"object":case"embed":X("load",e),i=r;break;case"video":case"audio":for(i=0;i<vr.length;i++)X(vr[i],e);i=r;break;case"source":X("error",e),i=r;break;case"img":case"image":case"link":X("error",e),X("load",e),i=r;break;case"details":X("toggle",e),i=r;break;case"input":Ga(e,r),i=wo(e,r),X("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=re({},r,{value:void 0}),X("invalid",e);break;case"textarea":Ya(e,r),i=ko(e,r),X("invalid",e);break;default:i=r}bo(n,i),s=i;for(l in s)if(s.hasOwnProperty(l)){var a=s[l];l==="style"?Kc(e,a):l==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Vc(e,a)):l==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&jr(e,a):typeof a=="number"&&jr(e,""+a):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Lr.hasOwnProperty(l)?a!=null&&l==="onScroll"&&X("scroll",e):a!=null&&ks(e,l,a,o))}switch(n){case"input":di(e),qa(e,r,!1);break;case"textarea":di(e),Xa(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Bt(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?jn(e,!!r.multiple,l,!1):r.defaultValue!=null&&jn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Gi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ve(t),null;case 6:if(e&&t.stateNode!=null)gf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(P(166));if(n=en(Br.current),en(st.current),xi(t)){if(r=t.stateNode,n=t.memoizedProps,r[lt]=t,(l=r.nodeValue!==n)&&(e=Te,e!==null))switch(e.tag){case 3:wi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&wi(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[lt]=t,t.stateNode=r}return ve(t),null;case 13:if(Z(te),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ee&&Ne!==null&&t.mode&1&&!(t.flags&128))$d(),In(),t.flags|=98560,l=!1;else if(l=xi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(P(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(P(317));l[lt]=t}else In(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ve(t),l=!1}else Xe!==null&&(ls(Xe),Xe=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||te.current&1?ce===0&&(ce=3):ia())),t.updateQueue!==null&&(t.flags|=4),ve(t),null);case 4:return On(),Xo(e,t),e===null&&Mr(t.stateNode.containerInfo),ve(t),null;case 10:return Bs(t.type._context),ve(t),null;case 17:return Le(t.type)&&qi(),ve(t),null;case 19:if(Z(te),l=t.memoizedState,l===null)return ve(t),null;if(r=(t.flags&128)!==0,o=l.rendering,o===null)if(r)dr(l,!1);else{if(ce!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=nl(e),o!==null){for(t.flags|=128,dr(l,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,o=l.alternate,o===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=o.childLanes,l.lanes=o.lanes,l.child=o.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=o.memoizedProps,l.memoizedState=o.memoizedState,l.updateQueue=o.updateQueue,l.type=o.type,e=o.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return q(te,te.current&1|2),t.child}e=e.sibling}l.tail!==null&&oe()>Vn&&(t.flags|=128,r=!0,dr(l,!1),t.lanes=4194304)}else{if(!r)if(e=nl(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),dr(l,!0),l.tail===null&&l.tailMode==="hidden"&&!o.alternate&&!ee)return ve(t),null}else 2*oe()-l.renderingStartTime>Vn&&n!==1073741824&&(t.flags|=128,r=!0,dr(l,!1),t.lanes=4194304);l.isBackwards?(o.sibling=t.child,t.child=o):(n=l.last,n!==null?n.sibling=o:t.child=o,l.last=o)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=oe(),t.sibling=null,n=te.current,q(te,r?n&1|2:n&1),t):(ve(t),null);case 22:case 23:return ra(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ze&1073741824&&(ve(t),t.subtreeFlags&6&&(t.flags|=8192)):ve(t),null;case 24:return null;case 25:return null}throw Error(P(156,t.tag))}function xm(e,t){switch(Ms(t),t.tag){case 1:return Le(t.type)&&qi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return On(),Z(Ae),Z(xe),Ws(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Hs(t),null;case 13:if(Z(te),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(P(340));In()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Z(te),null;case 4:return On(),null;case 10:return Bs(t.type._context),null;case 22:case 23:return ra(),null;case 24:return null;default:return null}}var Pi=!1,we=!1,Sm=typeof WeakSet=="function"?WeakSet:Set,z=null;function Cn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ie(e,t,r)}else n.current=null}function Zo(e,t,n){try{n()}catch(r){ie(e,t,r)}}var Ou=!1;function km(e,t){if(Fo=Hi,e=vd(),Fs(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var o=0,s=-1,a=-1,c=0,d=0,f=e,m=null;t:for(;;){for(var v;f!==n||i!==0&&f.nodeType!==3||(s=o+i),f!==l||r!==0&&f.nodeType!==3||(a=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(v=f.firstChild)!==null;)m=f,f=v;for(;;){if(f===e)break t;if(m===n&&++c===i&&(s=o),m===l&&++d===r&&(a=o),(v=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=v}n=s===-1||a===-1?null:{start:s,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Do={focusedElem:e,selectionRange:n},Hi=!1,z=t;z!==null;)if(t=z,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,z=e;else for(;z!==null;){t=z;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var S=w.memoizedProps,b=w.memoizedState,g=t.stateNode,p=g.getSnapshotBeforeUpdate(t.elementType===t.type?S:qe(t.type,S),b);g.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(x){ie(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,z=e;break}z=t.return}return w=Ou,Ou=!1,w}function Cr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&Zo(t,n,l)}i=i.next}while(i!==r)}}function Pl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Jo(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function mf(e){var t=e.alternate;t!==null&&(e.alternate=null,mf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[lt],delete t[Rr],delete t[Ro],delete t[im],delete t[lm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function hf(e){return e.tag===5||e.tag===3||e.tag===4}function Bu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||hf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function es(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Gi));else if(r!==4&&(e=e.child,e!==null))for(es(e,t,n),e=e.sibling;e!==null;)es(e,t,n),e=e.sibling}function ts(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ts(e,t,n),e=e.sibling;e!==null;)ts(e,t,n),e=e.sibling}var ge=null,Ye=!1;function bt(e,t,n){for(n=n.child;n!==null;)yf(e,t,n),n=n.sibling}function yf(e,t,n){if(ot&&typeof ot.onCommitFiberUnmount=="function")try{ot.onCommitFiberUnmount(ml,n)}catch{}switch(n.tag){case 5:we||Cn(n,t);case 6:var r=ge,i=Ye;ge=null,bt(e,t,n),ge=r,Ye=i,ge!==null&&(Ye?(e=ge,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ge.removeChild(n.stateNode));break;case 18:ge!==null&&(Ye?(e=ge,n=n.stateNode,e.nodeType===8?Jl(e.parentNode,n):e.nodeType===1&&Jl(e,n),Tr(e)):Jl(ge,n.stateNode));break;case 4:r=ge,i=Ye,ge=n.stateNode.containerInfo,Ye=!0,bt(e,t,n),ge=r,Ye=i;break;case 0:case 11:case 14:case 15:if(!we&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var l=i,o=l.destroy;l=l.tag,o!==void 0&&(l&2||l&4)&&Zo(n,t,o),i=i.next}while(i!==r)}bt(e,t,n);break;case 1:if(!we&&(Cn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){ie(n,t,s)}bt(e,t,n);break;case 21:bt(e,t,n);break;case 22:n.mode&1?(we=(r=we)||n.memoizedState!==null,bt(e,t,n),we=r):bt(e,t,n);break;default:bt(e,t,n)}}function Vu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Sm),t.forEach(function(r){var i=$m.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Qe(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var l=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 5:ge=s.stateNode,Ye=!1;break e;case 3:ge=s.stateNode.containerInfo,Ye=!0;break e;case 4:ge=s.stateNode.containerInfo,Ye=!0;break e}s=s.return}if(ge===null)throw Error(P(160));yf(l,o,i),ge=null,Ye=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(c){ie(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)vf(t,e),t=t.sibling}function vf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Qe(t,e),nt(e),r&4){try{Cr(3,e,e.return),Pl(3,e)}catch(S){ie(e,e.return,S)}try{Cr(5,e,e.return)}catch(S){ie(e,e.return,S)}}break;case 1:Qe(t,e),nt(e),r&512&&n!==null&&Cn(n,n.return);break;case 5:if(Qe(t,e),nt(e),r&512&&n!==null&&Cn(n,n.return),e.flags&32){var i=e.stateNode;try{jr(i,"")}catch(S){ie(e,e.return,S)}}if(r&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,o=n!==null?n.memoizedProps:l,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&l.type==="radio"&&l.name!=null&&Rc(i,l),_o(s,o);var c=_o(s,l);for(o=0;o<a.length;o+=2){var d=a[o],f=a[o+1];d==="style"?Kc(i,f):d==="dangerouslySetInnerHTML"?Vc(i,f):d==="children"?jr(i,f):ks(i,d,f,c)}switch(s){case"input":xo(i,l);break;case"textarea":Oc(i,l);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var v=l.value;v!=null?jn(i,!!l.multiple,v,!1):m!==!!l.multiple&&(l.defaultValue!=null?jn(i,!!l.multiple,l.defaultValue,!0):jn(i,!!l.multiple,l.multiple?[]:"",!1))}i[Rr]=l}catch(S){ie(e,e.return,S)}}break;case 6:if(Qe(t,e),nt(e),r&4){if(e.stateNode===null)throw Error(P(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(S){ie(e,e.return,S)}}break;case 3:if(Qe(t,e),nt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Tr(t.containerInfo)}catch(S){ie(e,e.return,S)}break;case 4:Qe(t,e),nt(e);break;case 13:Qe(t,e),nt(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(ta=oe())),r&4&&Vu(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(we=(c=we)||d,Qe(t,e),we=c):Qe(t,e),nt(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!d&&e.mode&1)for(z=e,d=e.child;d!==null;){for(f=z=d;z!==null;){switch(m=z,v=m.child,m.tag){case 0:case 11:case 14:case 15:Cr(4,m,m.return);break;case 1:Cn(m,m.return);var w=m.stateNode;if(typeof w.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(S){ie(r,n,S)}}break;case 5:Cn(m,m.return);break;case 22:if(m.memoizedState!==null){Ku(f);continue}}v!==null?(v.return=m,z=v):Ku(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,c?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(s=f.stateNode,a=f.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=Uc("display",o))}catch(S){ie(e,e.return,S)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(S){ie(e,e.return,S)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Qe(t,e),nt(e),r&4&&Vu(e);break;case 21:break;default:Qe(t,e),nt(e)}}function nt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(hf(n)){var r=n;break e}n=n.return}throw Error(P(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(jr(i,""),r.flags&=-33);var l=Bu(e);ts(e,l,i);break;case 3:case 4:var o=r.stateNode.containerInfo,s=Bu(e);es(e,s,o);break;default:throw Error(P(161))}}catch(a){ie(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Pm(e,t,n){z=e,wf(e)}function wf(e,t,n){for(var r=(e.mode&1)!==0;z!==null;){var i=z,l=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Pi;if(!o){var s=i.alternate,a=s!==null&&s.memoizedState!==null||we;s=Pi;var c=we;if(Pi=o,(we=a)&&!c)for(z=i;z!==null;)o=z,a=o.child,o.tag===22&&o.memoizedState!==null?Hu(i):a!==null?(a.return=o,z=a):Hu(i);for(;l!==null;)z=l,wf(l),l=l.sibling;z=i,Pi=s,we=c}Uu(e)}else i.subtreeFlags&8772&&l!==null?(l.return=i,z=l):Uu(e)}}function Uu(e){for(;z!==null;){var t=z;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:we||Pl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!we)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:qe(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&Eu(t,l,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Eu(t,o,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Tr(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}we||t.flags&512&&Jo(t)}catch(m){ie(t,t.return,m)}}if(t===e){z=null;break}if(n=t.sibling,n!==null){n.return=t.return,z=n;break}z=t.return}}function Ku(e){for(;z!==null;){var t=z;if(t===e){z=null;break}var n=t.sibling;if(n!==null){n.return=t.return,z=n;break}z=t.return}}function Hu(e){for(;z!==null;){var t=z;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Pl(4,t)}catch(a){ie(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(a){ie(t,i,a)}}var l=t.return;try{Jo(t)}catch(a){ie(t,l,a)}break;case 5:var o=t.return;try{Jo(t)}catch(a){ie(t,o,a)}}}catch(a){ie(t,t.return,a)}if(t===e){z=null;break}var s=t.sibling;if(s!==null){s.return=t.return,z=s;break}z=t.return}}var bm=Math.ceil,ll=St.ReactCurrentDispatcher,Js=St.ReactCurrentOwner,Be=St.ReactCurrentBatchConfig,B=0,pe=null,ae=null,me=0,ze=0,En=Kt(0),ce=0,Hr=null,sn=0,bl=0,ea=0,Er=null,Ce=null,ta=0,Vn=1/0,dt=null,ol=!1,ns=null,Mt=null,bi=!1,jt=null,sl=0,Ar=0,rs=null,Di=-1,Mi=0;function ke(){return B&6?oe():Di!==-1?Di:Di=oe()}function It(e){return e.mode&1?B&2&&me!==0?me&-me:sm.transition!==null?(Mi===0&&(Mi=nd()),Mi):(e=H,e!==0||(e=window.event,e=e===void 0?16:ud(e.type)),e):1}function Je(e,t,n,r){if(50<Ar)throw Ar=0,rs=null,Error(P(185));Xr(e,n,r),(!(B&2)||e!==pe)&&(e===pe&&(!(B&2)&&(bl|=n),ce===4&&At(e,me)),je(e,r),n===1&&B===0&&!(t.mode&1)&&(Vn=oe()+500,xl&&Ht()))}function je(e,t){var n=e.callbackNode;sg(e,t);var r=Ki(e,e===pe?me:0);if(r===0)n!==null&&eu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&eu(n),t===1)e.tag===0?om(Wu.bind(null,e)):Ad(Wu.bind(null,e)),nm(function(){!(B&6)&&Ht()}),n=null;else{switch(rd(r)){case 1:n=Es;break;case 4:n=ed;break;case 16:n=Ui;break;case 536870912:n=td;break;default:n=Ui}n=Ef(n,xf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function xf(e,t){if(Di=-1,Mi=0,B&6)throw Error(P(327));var n=e.callbackNode;if(Fn()&&e.callbackNode!==n)return null;var r=Ki(e,e===pe?me:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=al(e,r);else{t=r;var i=B;B|=2;var l=kf();(pe!==e||me!==t)&&(dt=null,Vn=oe()+500,tn(e,t));do try{Em();break}catch(s){Sf(e,s)}while(!0);Os(),ll.current=l,B=i,ae!==null?t=0:(pe=null,me=0,t=ce)}if(t!==0){if(t===2&&(i=jo(e),i!==0&&(r=i,t=is(e,i))),t===1)throw n=Hr,tn(e,0),At(e,r),je(e,oe()),n;if(t===6)At(e,r);else{if(i=e.current.alternate,!(r&30)&&!_m(i)&&(t=al(e,r),t===2&&(l=jo(e),l!==0&&(r=l,t=is(e,l))),t===1))throw n=Hr,tn(e,0),At(e,r),je(e,oe()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(P(345));case 2:Yt(e,Ce,dt);break;case 3:if(At(e,r),(r&130023424)===r&&(t=ta+500-oe(),10<t)){if(Ki(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ke(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Io(Yt.bind(null,e,Ce,dt),t);break}Yt(e,Ce,dt);break;case 4:if(At(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-Ze(r);l=1<<o,o=t[o],o>i&&(i=o),r&=~l}if(r=i,r=oe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*bm(r/1960))-r,10<r){e.timeoutHandle=Io(Yt.bind(null,e,Ce,dt),r);break}Yt(e,Ce,dt);break;case 5:Yt(e,Ce,dt);break;default:throw Error(P(329))}}}return je(e,oe()),e.callbackNode===n?xf.bind(null,e):null}function is(e,t){var n=Er;return e.current.memoizedState.isDehydrated&&(tn(e,t).flags|=256),e=al(e,t),e!==2&&(t=Ce,Ce=n,t!==null&&ls(t)),e}function ls(e){Ce===null?Ce=e:Ce.push.apply(Ce,e)}function _m(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],l=i.getSnapshot;i=i.value;try{if(!et(l(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function At(e,t){for(t&=~ea,t&=~bl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ze(t),r=1<<n;e[n]=-1,t&=~r}}function Wu(e){if(B&6)throw Error(P(327));Fn();var t=Ki(e,0);if(!(t&1))return je(e,oe()),null;var n=al(e,t);if(e.tag!==0&&n===2){var r=jo(e);r!==0&&(t=r,n=is(e,r))}if(n===1)throw n=Hr,tn(e,0),At(e,t),je(e,oe()),n;if(n===6)throw Error(P(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Yt(e,Ce,dt),je(e,oe()),null}function na(e,t){var n=B;B|=1;try{return e(t)}finally{B=n,B===0&&(Vn=oe()+500,xl&&Ht())}}function an(e){jt!==null&&jt.tag===0&&!(B&6)&&Fn();var t=B;B|=1;var n=Be.transition,r=H;try{if(Be.transition=null,H=1,e)return e()}finally{H=r,Be.transition=n,B=t,!(B&6)&&Ht()}}function ra(){ze=En.current,Z(En)}function tn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,tm(n)),ae!==null)for(n=ae.return;n!==null;){var r=n;switch(Ms(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&qi();break;case 3:On(),Z(Ae),Z(xe),Ws();break;case 5:Hs(r);break;case 4:On();break;case 13:Z(te);break;case 19:Z(te);break;case 10:Bs(r.type._context);break;case 22:case 23:ra()}n=n.return}if(pe=e,ae=e=Rt(e.current,null),me=ze=t,ce=0,Hr=null,ea=bl=sn=0,Ce=Er=null,Jt!==null){for(t=0;t<Jt.length;t++)if(n=Jt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,l=n.pending;if(l!==null){var o=l.next;l.next=i,r.next=o}n.pending=r}Jt=null}return e}function Sf(e,t){do{var n=ae;try{if(Os(),Ni.current=il,rl){for(var r=ne.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}rl=!1}if(on=0,fe=ue=ne=null,_r=!1,Vr=0,Js.current=null,n===null||n.return===null){ce=1,Hr=t,ae=null;break}e:{var l=e,o=n.return,s=n,a=t;if(t=me,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var c=a,d=s,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=Nu(o);if(v!==null){v.flags&=-257,Tu(v,o,s,l,t),v.mode&1&&zu(l,c,t),t=v,a=c;var w=t.updateQueue;if(w===null){var S=new Set;S.add(a),t.updateQueue=S}else w.add(a);break e}else{if(!(t&1)){zu(l,c,t),ia();break e}a=Error(P(426))}}else if(ee&&s.mode&1){var b=Nu(o);if(b!==null){!(b.flags&65536)&&(b.flags|=256),Tu(b,o,s,l,t),Is(Bn(a,s));break e}}l=a=Bn(a,s),ce!==4&&(ce=2),Er===null?Er=[l]:Er.push(l),l=o;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var g=rf(l,a,t);Cu(l,g);break e;case 1:s=a;var p=l.type,h=l.stateNode;if(!(l.flags&128)&&(typeof p.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Mt===null||!Mt.has(h)))){l.flags|=65536,t&=-t,l.lanes|=t;var x=lf(l,s,t);Cu(l,x);break e}}l=l.return}while(l!==null)}bf(n)}catch(C){t=C,ae===n&&n!==null&&(ae=n=n.return);continue}break}while(!0)}function kf(){var e=ll.current;return ll.current=il,e===null?il:e}function ia(){(ce===0||ce===3||ce===2)&&(ce=4),pe===null||!(sn&268435455)&&!(bl&268435455)||At(pe,me)}function al(e,t){var n=B;B|=2;var r=kf();(pe!==e||me!==t)&&(dt=null,tn(e,t));do try{Cm();break}catch(i){Sf(e,i)}while(!0);if(Os(),B=n,ll.current=r,ae!==null)throw Error(P(261));return pe=null,me=0,ce}function Cm(){for(;ae!==null;)Pf(ae)}function Em(){for(;ae!==null&&!Zp();)Pf(ae)}function Pf(e){var t=Cf(e.alternate,e,ze);e.memoizedProps=e.pendingProps,t===null?bf(e):ae=t,Js.current=null}function bf(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=xm(n,t),n!==null){n.flags&=32767,ae=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ce=6,ae=null;return}}else if(n=wm(n,t,ze),n!==null){ae=n;return}if(t=t.sibling,t!==null){ae=t;return}ae=t=e}while(t!==null);ce===0&&(ce=5)}function Yt(e,t,n){var r=H,i=Be.transition;try{Be.transition=null,H=1,Am(e,t,n,r)}finally{Be.transition=i,H=r}return null}function Am(e,t,n,r){do Fn();while(jt!==null);if(B&6)throw Error(P(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(P(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(ag(e,l),e===pe&&(ae=pe=null,me=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||bi||(bi=!0,Ef(Ui,function(){return Fn(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=Be.transition,Be.transition=null;var o=H;H=1;var s=B;B|=4,Js.current=null,km(e,n),vf(n,e),Gg(Do),Hi=!!Fo,Do=Fo=null,e.current=n,Pm(n),Jp(),B=s,H=o,Be.transition=l}else e.current=n;if(bi&&(bi=!1,jt=e,sl=i),l=e.pendingLanes,l===0&&(Mt=null),ng(n.stateNode),je(e,oe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ol)throw ol=!1,e=ns,ns=null,e;return sl&1&&e.tag!==0&&Fn(),l=e.pendingLanes,l&1?e===rs?Ar++:(Ar=0,rs=e):Ar=0,Ht(),null}function Fn(){if(jt!==null){var e=rd(sl),t=Be.transition,n=H;try{if(Be.transition=null,H=16>e?16:e,jt===null)var r=!1;else{if(e=jt,jt=null,sl=0,B&6)throw Error(P(331));var i=B;for(B|=4,z=e.current;z!==null;){var l=z,o=l.child;if(z.flags&16){var s=l.deletions;if(s!==null){for(var a=0;a<s.length;a++){var c=s[a];for(z=c;z!==null;){var d=z;switch(d.tag){case 0:case 11:case 15:Cr(8,d,l)}var f=d.child;if(f!==null)f.return=d,z=f;else for(;z!==null;){d=z;var m=d.sibling,v=d.return;if(mf(d),d===c){z=null;break}if(m!==null){m.return=v,z=m;break}z=v}}}var w=l.alternate;if(w!==null){var S=w.child;if(S!==null){w.child=null;do{var b=S.sibling;S.sibling=null,S=b}while(S!==null)}}z=l}}if(l.subtreeFlags&2064&&o!==null)o.return=l,z=o;else e:for(;z!==null;){if(l=z,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Cr(9,l,l.return)}var g=l.sibling;if(g!==null){g.return=l.return,z=g;break e}z=l.return}}var p=e.current;for(z=p;z!==null;){o=z;var h=o.child;if(o.subtreeFlags&2064&&h!==null)h.return=o,z=h;else e:for(o=p;z!==null;){if(s=z,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Pl(9,s)}}catch(C){ie(s,s.return,C)}if(s===o){z=null;break e}var x=s.sibling;if(x!==null){x.return=s.return,z=x;break e}z=s.return}}if(B=i,Ht(),ot&&typeof ot.onPostCommitFiberRoot=="function")try{ot.onPostCommitFiberRoot(ml,e)}catch{}r=!0}return r}finally{H=n,Be.transition=t}}return!1}function Qu(e,t,n){t=Bn(n,t),t=rf(e,t,1),e=Dt(e,t,1),t=ke(),e!==null&&(Xr(e,1,t),je(e,t))}function ie(e,t,n){if(e.tag===3)Qu(e,e,n);else for(;t!==null;){if(t.tag===3){Qu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Mt===null||!Mt.has(r))){e=Bn(n,e),e=lf(t,e,1),t=Dt(t,e,1),e=ke(),t!==null&&(Xr(t,1,e),je(t,e));break}}t=t.return}}function Lm(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ke(),e.pingedLanes|=e.suspendedLanes&n,pe===e&&(me&n)===n&&(ce===4||ce===3&&(me&130023424)===me&&500>oe()-ta?tn(e,0):ea|=n),je(e,t)}function _f(e,t){t===0&&(e.mode&1?(t=gi,gi<<=1,!(gi&130023424)&&(gi=4194304)):t=1);var n=ke();e=vt(e,t),e!==null&&(Xr(e,t,n),je(e,n))}function jm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),_f(e,n)}function $m(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(P(314))}r!==null&&r.delete(t),_f(e,n)}var Cf;Cf=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ae.current)Ee=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ee=!1,vm(e,t,n);Ee=!!(e.flags&131072)}else Ee=!1,ee&&t.flags&1048576&&Ld(t,Zi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Fi(e,t),e=t.pendingProps;var i=Mn(t,xe.current);Tn(t,n),i=Gs(null,t,r,e,i,n);var l=qs();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Le(r)?(l=!0,Yi(t)):l=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Us(t),i.updater=kl,t.stateNode=i,i._reactInternals=t,Ho(t,r,e,n),t=Go(null,t,r,!0,l,n)):(t.tag=0,ee&&l&&Ds(t),Se(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Fi(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Nm(r),e=qe(r,e),i){case 0:t=Qo(null,t,r,e,n);break e;case 1:t=Mu(null,t,r,e,n);break e;case 11:t=Fu(null,t,r,e,n);break e;case 14:t=Du(null,t,r,qe(r.type,e),n);break e}throw Error(P(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:qe(r,i),Qo(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:qe(r,i),Mu(e,t,r,i,n);case 3:e:{if(uf(t),e===null)throw Error(P(387));r=t.pendingProps,l=t.memoizedState,i=l.element,Fd(e,t),tl(t,r,null,n);var o=t.memoizedState;if(r=o.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){i=Bn(Error(P(423)),t),t=Iu(e,t,r,n,i);break e}else if(r!==i){i=Bn(Error(P(424)),t),t=Iu(e,t,r,n,i);break e}else for(Ne=Ft(t.stateNode.containerInfo.firstChild),Te=t,ee=!0,Xe=null,n=Nd(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(In(),r===i){t=wt(e,t,n);break e}Se(e,t,r,n)}t=t.child}return t;case 5:return Dd(t),e===null&&Vo(t),r=t.type,i=t.pendingProps,l=e!==null?e.memoizedProps:null,o=i.children,Mo(r,i)?o=null:l!==null&&Mo(r,l)&&(t.flags|=32),af(e,t),Se(e,t,o,n),t.child;case 6:return e===null&&Vo(t),null;case 13:return cf(e,t,n);case 4:return Ks(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Rn(t,null,r,n):Se(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:qe(r,i),Fu(e,t,r,i,n);case 7:return Se(e,t,t.pendingProps,n),t.child;case 8:return Se(e,t,t.pendingProps.children,n),t.child;case 12:return Se(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,l=t.memoizedProps,o=i.value,q(Ji,r._currentValue),r._currentValue=o,l!==null)if(et(l.value,o)){if(l.children===i.children&&!Ae.current){t=wt(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var s=l.dependencies;if(s!==null){o=l.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(l.tag===1){a=mt(-1,n&-n),a.tag=2;var c=l.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?a.next=a:(a.next=d.next,d.next=a),c.pending=a}}l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),Uo(l.return,n,t),s.lanes|=n;break}a=a.next}}else if(l.tag===10)o=l.type===t.type?null:l.child;else if(l.tag===18){if(o=l.return,o===null)throw Error(P(341));o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Uo(o,n,t),o=l.sibling}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===t){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}Se(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Tn(t,n),i=Ve(i),r=r(i),t.flags|=1,Se(e,t,r,n),t.child;case 14:return r=t.type,i=qe(r,t.pendingProps),i=qe(r.type,i),Du(e,t,r,i,n);case 15:return of(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:qe(r,i),Fi(e,t),t.tag=1,Le(r)?(e=!0,Yi(t)):e=!1,Tn(t,n),nf(t,r,i),Ho(t,r,i,n),Go(null,t,r,!0,e,n);case 19:return df(e,t,n);case 22:return sf(e,t,n)}throw Error(P(156,t.tag))};function Ef(e,t){return Jc(e,t)}function zm(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Oe(e,t,n,r){return new zm(e,t,n,r)}function la(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Nm(e){if(typeof e=="function")return la(e)?1:0;if(e!=null){if(e=e.$$typeof,e===bs)return 11;if(e===_s)return 14}return 2}function Rt(e,t){var n=e.alternate;return n===null?(n=Oe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ii(e,t,n,r,i,l){var o=2;if(r=e,typeof e=="function")la(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case yn:return nn(n.children,i,l,t);case Ps:o=8,i|=8;break;case mo:return e=Oe(12,n,t,i|2),e.elementType=mo,e.lanes=l,e;case ho:return e=Oe(13,n,t,i),e.elementType=ho,e.lanes=l,e;case yo:return e=Oe(19,n,t,i),e.elementType=yo,e.lanes=l,e;case Dc:return _l(n,i,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Tc:o=10;break e;case Fc:o=9;break e;case bs:o=11;break e;case _s:o=14;break e;case _t:o=16,r=null;break e}throw Error(P(130,e==null?e:typeof e,""))}return t=Oe(o,n,t,i),t.elementType=e,t.type=r,t.lanes=l,t}function nn(e,t,n,r){return e=Oe(7,e,r,t),e.lanes=n,e}function _l(e,t,n,r){return e=Oe(22,e,r,t),e.elementType=Dc,e.lanes=n,e.stateNode={isHidden:!1},e}function so(e,t,n){return e=Oe(6,e,null,t),e.lanes=n,e}function ao(e,t,n){return t=Oe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Tm(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vl(0),this.expirationTimes=Vl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function oa(e,t,n,r,i,l,o,s,a){return e=new Tm(e,t,n,s,a),t===1?(t=1,l===!0&&(t|=8)):t=0,l=Oe(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Us(l),e}function Fm(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:hn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Af(e){if(!e)return Vt;e=e._reactInternals;e:{if(cn(e)!==e||e.tag!==1)throw Error(P(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Le(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(P(171))}if(e.tag===1){var n=e.type;if(Le(n))return Ed(e,n,t)}return t}function Lf(e,t,n,r,i,l,o,s,a){return e=oa(n,r,!0,e,i,l,o,s,a),e.context=Af(null),n=e.current,r=ke(),i=It(n),l=mt(r,i),l.callback=t??null,Dt(n,l,i),e.current.lanes=i,Xr(e,i,r),je(e,r),e}function Cl(e,t,n,r){var i=t.current,l=ke(),o=It(i);return n=Af(n),t.context===null?t.context=n:t.pendingContext=n,t=mt(l,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Dt(i,t,o),e!==null&&(Je(e,i,o,l),zi(e,i,o)),o}function ul(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Gu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function sa(e,t){Gu(e,t),(e=e.alternate)&&Gu(e,t)}function Dm(){return null}var jf=typeof reportError=="function"?reportError:function(e){console.error(e)};function aa(e){this._internalRoot=e}El.prototype.render=aa.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(P(409));Cl(e,t,null,null)};El.prototype.unmount=aa.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;an(function(){Cl(null,e,null,null)}),t[yt]=null}};function El(e){this._internalRoot=e}El.prototype.unstable_scheduleHydration=function(e){if(e){var t=od();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Et.length&&t!==0&&t<Et[n].priority;n++);Et.splice(n,0,e),n===0&&ad(e)}};function ua(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Al(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function qu(){}function Mm(e,t,n,r,i){if(i){if(typeof r=="function"){var l=r;r=function(){var c=ul(o);l.call(c)}}var o=Lf(t,r,e,0,null,!1,!1,"",qu);return e._reactRootContainer=o,e[yt]=o.current,Mr(e.nodeType===8?e.parentNode:e),an(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var c=ul(a);s.call(c)}}var a=oa(e,0,!1,null,null,!1,!1,"",qu);return e._reactRootContainer=a,e[yt]=a.current,Mr(e.nodeType===8?e.parentNode:e),an(function(){Cl(t,a,n,r)}),a}function Ll(e,t,n,r,i){var l=n._reactRootContainer;if(l){var o=l;if(typeof i=="function"){var s=i;i=function(){var a=ul(o);s.call(a)}}Cl(t,o,e,i)}else o=Mm(n,t,e,i,r);return ul(o)}id=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=yr(t.pendingLanes);n!==0&&(As(t,n|1),je(t,oe()),!(B&6)&&(Vn=oe()+500,Ht()))}break;case 13:an(function(){var r=vt(e,1);if(r!==null){var i=ke();Je(r,e,1,i)}}),sa(e,1)}};Ls=function(e){if(e.tag===13){var t=vt(e,134217728);if(t!==null){var n=ke();Je(t,e,134217728,n)}sa(e,134217728)}};ld=function(e){if(e.tag===13){var t=It(e),n=vt(e,t);if(n!==null){var r=ke();Je(n,e,t,r)}sa(e,t)}};od=function(){return H};sd=function(e,t){var n=H;try{return H=e,t()}finally{H=n}};Eo=function(e,t,n){switch(t){case"input":if(xo(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=wl(r);if(!i)throw Error(P(90));Ic(r),xo(r,i)}}}break;case"textarea":Oc(e,n);break;case"select":t=n.value,t!=null&&jn(e,!!n.multiple,t,!1)}};Qc=na;Gc=an;var Im={usingClientEntryPoint:!1,Events:[Jr,Sn,wl,Hc,Wc,na]},fr={findFiberByHostInstance:Zt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Rm={bundleType:fr.bundleType,version:fr.version,rendererPackageName:fr.rendererPackageName,rendererConfig:fr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:St.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Xc(e),e===null?null:e.stateNode},findFiberByHostInstance:fr.findFiberByHostInstance||Dm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _i=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_i.isDisabled&&_i.supportsFiber)try{ml=_i.inject(Rm),ot=_i}catch{}}De.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Im;De.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ua(t))throw Error(P(200));return Fm(e,t,null,n)};De.createRoot=function(e,t){if(!ua(e))throw Error(P(299));var n=!1,r="",i=jf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=oa(e,1,!1,null,null,n,!1,r,i),e[yt]=t.current,Mr(e.nodeType===8?e.parentNode:e),new aa(t)};De.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(P(188)):(e=Object.keys(e).join(","),Error(P(268,e)));return e=Xc(t),e=e===null?null:e.stateNode,e};De.flushSync=function(e){return an(e)};De.hydrate=function(e,t,n){if(!Al(t))throw Error(P(200));return Ll(null,e,t,!0,n)};De.hydrateRoot=function(e,t,n){if(!ua(e))throw Error(P(405));var r=n!=null&&n.hydratedSources||null,i=!1,l="",o=jf;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Lf(t,null,e,1,n??null,i,!1,l,o),e[yt]=t.current,Mr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new El(t)};De.render=function(e,t,n){if(!Al(t))throw Error(P(200));return Ll(null,e,t,!1,n)};De.unmountComponentAtNode=function(e){if(!Al(e))throw Error(P(40));return e._reactRootContainer?(an(function(){Ll(null,null,e,!1,function(){e._reactRootContainer=null,e[yt]=null})}),!0):!1};De.unstable_batchedUpdates=na;De.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Al(n))throw Error(P(200));if(e==null||e._reactInternals===void 0)throw Error(P(38));return Ll(e,t,n,!1,r)};De.version="18.3.1-next-f1338f8080-20240426";function $f(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($f)}catch(e){console.error(e)}}$f(),jc.exports=De;var Ri=jc.exports,zf,Yu=Ri;zf=po.createRoot=Yu.createRoot,po.hydrateRoot=Yu.hydrateRoot;/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Wr(){return Wr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Wr.apply(null,arguments)}var $t;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})($t||($t={}));const Xu="popstate";function Om(e){e===void 0&&(e={});function t(i,l){let{pathname:o="/",search:s="",hash:a=""}=dn(i.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),os("",{pathname:o,search:s,hash:a},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function n(i,l){let o=i.document.querySelector("base"),s="";if(o&&o.getAttribute("href")){let a=i.location.href,c=a.indexOf("#");s=c===-1?a:a.slice(0,c)}return s+"#"+(typeof l=="string"?l:cl(l))}function r(i,l){ca(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(l)+")")}return Vm(t,n,r,e)}function se(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function ca(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Bm(){return Math.random().toString(36).substr(2,8)}function Zu(e,t){return{usr:e.state,key:e.key,idx:t}}function os(e,t,n,r){return n===void 0&&(n=null),Wr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?dn(t):t,{state:n,key:t&&t.key||r||Bm()})}function cl(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function dn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Vm(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:l=!1}=r,o=i.history,s=$t.Pop,a=null,c=d();c==null&&(c=0,o.replaceState(Wr({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function f(){s=$t.Pop;let b=d(),g=b==null?null:b-c;c=b,a&&a({action:s,location:S.location,delta:g})}function m(b,g){s=$t.Push;let p=os(S.location,b,g);n&&n(p,b),c=d()+1;let h=Zu(p,c),x=S.createHref(p);try{o.pushState(h,"",x)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;i.location.assign(x)}l&&a&&a({action:s,location:S.location,delta:1})}function v(b,g){s=$t.Replace;let p=os(S.location,b,g);n&&n(p,b),c=d();let h=Zu(p,c),x=S.createHref(p);o.replaceState(h,"",x),l&&a&&a({action:s,location:S.location,delta:0})}function w(b){let g=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof b=="string"?b:cl(b);return p=p.replace(/ $/,"%20"),se(g,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,g)}let S={get action(){return s},get location(){return e(i,o)},listen(b){if(a)throw new Error("A history only accepts one active listener");return i.addEventListener(Xu,f),a=b,()=>{i.removeEventListener(Xu,f),a=null}},createHref(b){return t(i,b)},createURL:w,encodeLocation(b){let g=w(b);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:m,replace:v,go(b){return o.go(b)}};return S}var Ju;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Ju||(Ju={}));function Um(e,t,n){return n===void 0&&(n="/"),Km(e,t,n)}function Km(e,t,n,r){let i=typeof t=="string"?dn(t):t,l=da(i.pathname||"/",n);if(l==null)return null;let o=Nf(e);Hm(o);let s=null,a=rh(l);for(let c=0;s==null&&c<o.length;++c)s=eh(o[c],a);return s}function Nf(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(l,o,s)=>{let a={relativePath:s===void 0?l.path||"":s,caseSensitive:l.caseSensitive===!0,childrenIndex:o,route:l};a.relativePath.startsWith("/")&&(se(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let c=Ot([r,a.relativePath]),d=n.concat(a);l.children&&l.children.length>0&&(se(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Nf(l.children,t,d,c)),!(l.path==null&&!l.index)&&t.push({path:c,score:Zm(c,l.index),routesMeta:d})};return e.forEach((l,o)=>{var s;if(l.path===""||!((s=l.path)!=null&&s.includes("?")))i(l,o);else for(let a of Tf(l.path))i(l,o,a)}),t}function Tf(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),l=n.replace(/\?$/,"");if(r.length===0)return i?[l,""]:[l];let o=Tf(r.join("/")),s=[];return s.push(...o.map(a=>a===""?l:[l,a].join("/"))),i&&s.push(...o),s.map(a=>e.startsWith("/")&&a===""?"/":a)}function Hm(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Jm(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Wm=/^:[\w-]+$/,Qm=3,Gm=2,qm=1,Ym=10,Xm=-2,ec=e=>e==="*";function Zm(e,t){let n=e.split("/"),r=n.length;return n.some(ec)&&(r+=Xm),t&&(r+=Gm),n.filter(i=>!ec(i)).reduce((i,l)=>i+(Wm.test(l)?Qm:l===""?qm:Ym),r)}function Jm(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function eh(e,t,n){let{routesMeta:r}=e,i={},l="/",o=[];for(let s=0;s<r.length;++s){let a=r[s],c=s===r.length-1,d=l==="/"?t:t.slice(l.length)||"/",f=th({path:a.relativePath,caseSensitive:a.caseSensitive,end:c},d),m=a.route;if(!f)return null;Object.assign(i,f.params),o.push({params:i,pathname:Ot([l,f.pathname]),pathnameBase:oh(Ot([l,f.pathnameBase])),route:m}),f.pathnameBase!=="/"&&(l=Ot([l,f.pathnameBase]))}return o}function th(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=nh(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let l=i[0],o=l.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((c,d,f)=>{let{paramName:m,isOptional:v}=d;if(m==="*"){let S=s[f]||"";o=l.slice(0,l.length-S.length).replace(/(.)\/+$/,"$1")}const w=s[f];return v&&!w?c[m]=void 0:c[m]=(w||"").replace(/%2F/g,"/"),c},{}),pathname:l,pathnameBase:o,pattern:e}}function nh(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),ca(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,s,a)=>(r.push({paramName:s,isOptional:a!=null}),a?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function rh(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return ca(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function da(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function ih(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?dn(e):e,l;return n?(n=Ff(n),n.startsWith("/")?l=tc(n.substring(1),"/"):l=tc(n,t)):l=t,{pathname:l,search:sh(r),hash:ah(i)}}function tc(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function uo(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function lh(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function fa(e,t){let n=lh(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function pa(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=dn(e):(i=Wr({},e),se(!i.pathname||!i.pathname.includes("?"),uo("?","pathname","search",i)),se(!i.pathname||!i.pathname.includes("#"),uo("#","pathname","hash",i)),se(!i.search||!i.search.includes("#"),uo("#","search","hash",i)));let l=e===""||i.pathname==="",o=l?"/":i.pathname,s;if(o==null)s=n;else{let f=t.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),f-=1;i.pathname=m.join("/")}s=f>=0?t[f]:"/"}let a=ih(i,s),c=o&&o!=="/"&&o.endsWith("/"),d=(l||o===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(c||d)&&(a.pathname+="/"),a}const Ff=e=>e.replace(/\/\/+/g,"/"),Ot=e=>Ff(e.join("/")),oh=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),sh=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,ah=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function uh(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Df=["post","put","patch","delete"];new Set(Df);const ch=["get",...Df];new Set(ch);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Qr(){return Qr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Qr.apply(null,arguments)}const ga=y.createContext(null),dh=y.createContext(null),Wt=y.createContext(null),jl=y.createContext(null),kt=y.createContext({outlet:null,matches:[],isDataRoute:!1}),Mf=y.createContext(null);function fh(e,t){let{relative:n}=t===void 0?{}:t;Qn()||se(!1);let{basename:r,navigator:i}=y.useContext(Wt),{hash:l,pathname:o,search:s}=Of(e,{relative:n}),a=o;return r!=="/"&&(a=o==="/"?r:Ot([r,o])),i.createHref({pathname:a,search:s,hash:l})}function Qn(){return y.useContext(jl)!=null}function Gn(){return Qn()||se(!1),y.useContext(jl).location}function If(e){y.useContext(Wt).static||y.useLayoutEffect(e)}function Rf(){let{isDataRoute:e}=y.useContext(kt);return e?Ch():ph()}function ph(){Qn()||se(!1);let e=y.useContext(ga),{basename:t,future:n,navigator:r}=y.useContext(Wt),{matches:i}=y.useContext(kt),{pathname:l}=Gn(),o=JSON.stringify(fa(i,n.v7_relativeSplatPath)),s=y.useRef(!1);return If(()=>{s.current=!0}),y.useCallback(function(c,d){if(d===void 0&&(d={}),!s.current)return;if(typeof c=="number"){r.go(c);return}let f=pa(c,JSON.parse(o),l,d.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:Ot([t,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[t,r,o,l,e])}function gh(){let{matches:e}=y.useContext(kt),t=e[e.length-1];return t?t.params:{}}function Of(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=y.useContext(Wt),{matches:i}=y.useContext(kt),{pathname:l}=Gn(),o=JSON.stringify(fa(i,r.v7_relativeSplatPath));return y.useMemo(()=>pa(e,JSON.parse(o),l,n==="path"),[e,o,l,n])}function mh(e,t){return hh(e,t)}function hh(e,t,n,r){Qn()||se(!1);let{navigator:i}=y.useContext(Wt),{matches:l}=y.useContext(kt),o=l[l.length-1],s=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let c=Gn(),d;if(t){var f;let b=typeof t=="string"?dn(t):t;a==="/"||(f=b.pathname)!=null&&f.startsWith(a)||se(!1),d=b}else d=c;let m=d.pathname||"/",v=m;if(a!=="/"){let b=a.replace(/^\//,"").split("/");v="/"+m.replace(/^\//,"").split("/").slice(b.length).join("/")}let w=Um(e,{pathname:v}),S=Sh(w&&w.map(b=>Object.assign({},b,{params:Object.assign({},s,b.params),pathname:Ot([a,i.encodeLocation?i.encodeLocation(b.pathname).pathname:b.pathname]),pathnameBase:b.pathnameBase==="/"?a:Ot([a,i.encodeLocation?i.encodeLocation(b.pathnameBase).pathname:b.pathnameBase])})),l,n,r);return t&&S?y.createElement(jl.Provider,{value:{location:Qr({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:$t.Pop}},S):S}function yh(){let e=_h(),t=uh(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return y.createElement(y.Fragment,null,y.createElement("h2",null,"Unexpected Application Error!"),y.createElement("h3",{style:{fontStyle:"italic"}},t),n?y.createElement("pre",{style:i},n):null,null)}const vh=y.createElement(yh,null);class wh extends y.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?y.createElement(kt.Provider,{value:this.props.routeContext},y.createElement(Mf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function xh(e){let{routeContext:t,match:n,children:r}=e,i=y.useContext(ga);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),y.createElement(kt.Provider,{value:t},r)}function Sh(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var l;if(!n)return null;if(n.errors)e=n.matches;else if((l=r)!=null&&l.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let o=e,s=(i=n)==null?void 0:i.errors;if(s!=null){let d=o.findIndex(f=>f.route.id&&(s==null?void 0:s[f.route.id])!==void 0);d>=0||se(!1),o=o.slice(0,Math.min(o.length,d+1))}let a=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let f=o[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=d),f.route.id){let{loaderData:m,errors:v}=n,w=f.route.loader&&m[f.route.id]===void 0&&(!v||v[f.route.id]===void 0);if(f.route.lazy||w){a=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,f,m)=>{let v,w=!1,S=null,b=null;n&&(v=s&&f.route.id?s[f.route.id]:void 0,S=f.route.errorElement||vh,a&&(c<0&&m===0?(Eh("route-fallback"),w=!0,b=null):c===m&&(w=!0,b=f.route.hydrateFallbackElement||null)));let g=t.concat(o.slice(0,m+1)),p=()=>{let h;return v?h=S:w?h=b:f.route.Component?h=y.createElement(f.route.Component,null):f.route.element?h=f.route.element:h=d,y.createElement(xh,{match:f,routeContext:{outlet:d,matches:g,isDataRoute:n!=null},children:h})};return n&&(f.route.ErrorBoundary||f.route.errorElement||m===0)?y.createElement(wh,{location:n.location,revalidation:n.revalidation,component:S,error:v,children:p(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):p()},null)}var Bf=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Bf||{}),Vf=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Vf||{});function kh(e){let t=y.useContext(ga);return t||se(!1),t}function Ph(e){let t=y.useContext(dh);return t||se(!1),t}function bh(e){let t=y.useContext(kt);return t||se(!1),t}function Uf(e){let t=bh(),n=t.matches[t.matches.length-1];return n.route.id||se(!1),n.route.id}function _h(){var e;let t=y.useContext(Mf),n=Ph(),r=Uf();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Ch(){let{router:e}=kh(Bf.UseNavigateStable),t=Uf(Vf.UseNavigateStable),n=y.useRef(!1);return If(()=>{n.current=!0}),y.useCallback(function(i,l){l===void 0&&(l={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Qr({fromRouteId:t},l)))},[e,t])}const nc={};function Eh(e,t,n){nc[e]||(nc[e]=!0)}function Ah(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function ss(e){let{to:t,replace:n,state:r,relative:i}=e;Qn()||se(!1);let{future:l,static:o}=y.useContext(Wt),{matches:s}=y.useContext(kt),{pathname:a}=Gn(),c=Rf(),d=pa(t,fa(s,l.v7_relativeSplatPath),a,i==="path"),f=JSON.stringify(d);return y.useEffect(()=>c(JSON.parse(f),{replace:n,state:r,relative:i}),[c,f,i,n,r]),null}function wr(e){se(!1)}function Lh(e){let{basename:t="/",children:n=null,location:r,navigationType:i=$t.Pop,navigator:l,static:o=!1,future:s}=e;Qn()&&se(!1);let a=t.replace(/^\/*/,"/"),c=y.useMemo(()=>({basename:a,navigator:l,static:o,future:Qr({v7_relativeSplatPath:!1},s)}),[a,s,l,o]);typeof r=="string"&&(r=dn(r));let{pathname:d="/",search:f="",hash:m="",state:v=null,key:w="default"}=r,S=y.useMemo(()=>{let b=da(d,a);return b==null?null:{location:{pathname:b,search:f,hash:m,state:v,key:w},navigationType:i}},[a,d,f,m,v,w,i]);return S==null?null:y.createElement(Wt.Provider,{value:c},y.createElement(jl.Provider,{children:n,value:S}))}function jh(e){let{children:t,location:n}=e;return mh(as(t),n)}new Promise(()=>{});function as(e,t){t===void 0&&(t=[]);let n=[];return y.Children.forEach(e,(r,i)=>{if(!y.isValidElement(r))return;let l=[...t,i];if(r.type===y.Fragment){n.push.apply(n,as(r.props.children,l));return}r.type!==wr&&se(!1),!r.props.index||!r.props.children||se(!1);let o={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=as(r.props.children,l)),n.push(o)}),n}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function us(){return us=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},us.apply(null,arguments)}function $h(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function zh(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Nh(e,t){return e.button===0&&(!t||t==="_self")&&!zh(e)}const Th=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Fh="6";try{window.__reactRouterVersion=Fh}catch{}const Dh="startTransition",rc=Lp[Dh];function Mh(e){let{basename:t,children:n,future:r,window:i}=e,l=y.useRef();l.current==null&&(l.current=Om({window:i,v5Compat:!0}));let o=l.current,[s,a]=y.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},d=y.useCallback(f=>{c&&rc?rc(()=>a(f)):a(f)},[a,c]);return y.useLayoutEffect(()=>o.listen(d),[o,d]),y.useEffect(()=>Ah(r),[r]),y.createElement(Lh,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:o,future:r})}const Ih=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Rh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,cs=y.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:l,replace:o,state:s,target:a,to:c,preventScrollReset:d,viewTransition:f}=t,m=$h(t,Th),{basename:v}=y.useContext(Wt),w,S=!1;if(typeof c=="string"&&Rh.test(c)&&(w=c,Ih))try{let h=new URL(window.location.href),x=c.startsWith("//")?new URL(h.protocol+c):new URL(c),C=da(x.pathname,v);x.origin===h.origin&&C!=null?c=C+x.search+x.hash:S=!0}catch{}let b=fh(c,{relative:i}),g=Oh(c,{replace:o,state:s,target:a,preventScrollReset:d,relative:i,viewTransition:f});function p(h){r&&r(h),h.defaultPrevented||g(h)}return y.createElement("a",us({},m,{href:w||b,onClick:S||l?r:p,ref:n,target:a}))});var ic;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(ic||(ic={}));var lc;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(lc||(lc={}));function Oh(e,t){let{target:n,replace:r,state:i,preventScrollReset:l,relative:o,viewTransition:s}=t===void 0?{}:t,a=Rf(),c=Gn(),d=Of(e,{relative:o});return y.useCallback(f=>{if(Nh(f,n)){f.preventDefault();let m=r!==void 0?r:cl(c)===cl(d);a(e,{replace:m,state:i,preventScrollReset:l,relative:o,viewTransition:s})}},[c,a,d,r,i,n,e,l,o,s])}const Bh="https://github.com/frankvane/vane-components";class Vh extends Yr.Component{constructor(){super(...arguments);Ba(this,"state",{error:null})}static getDerivedStateFromError(n){return{error:n}}render(){var n;return this.state.error?u.jsxs("div",{className:"crash",role:"alert",children:[u.jsx("h3",{children:"这个页面炸了"}),u.jsx("pre",{children:String(((n=this.state.error)==null?void 0:n.stack)||this.state.error)}),u.jsx("button",{type:"button",onClick:()=>this.setState({error:null}),children:"重试"})]}):this.props.children}}function Kf(e,t){return String(e.entries.indexOf(t)+1).padStart(2,"0")}function Uh({demos:e,pathname:t}){var a;const{groups:n,entries:r,label:i}=e,l=(a=r.find(c=>t===`/demo/${c.meta.slug}`))==null?void 0:a.meta.group,[o,s]=y.useState(()=>{var d;const c=(d=n[0])==null?void 0:d.key;return Object.fromEntries(n.map(f=>[f.key,f.key===(l??c)]))});return y.useEffect(()=>{l&&s(c=>c[l]?c:{...c,[l]:!0})},[l]),u.jsxs("div",{className:"nav-section",children:[u.jsxs("div",{className:"nav-section-head",children:[u.jsx("span",{children:i}),u.jsxs("code",{children:[r.length," demos"]})]}),n.map(c=>{const d=r.filter(m=>m.meta.group===c.key);if(d.length===0)return null;const f=o[c.key]??!1;return u.jsxs("div",{className:"nav-group",children:[u.jsxs("button",{type:"button",className:`nav-group-head${l===c.key?" is-current":""}`,onClick:()=>s(m=>({...m,[c.key]:!f})),"aria-expanded":f,children:[u.jsx("span",{className:`nav-caret${f?" is-open":""}`,"aria-hidden":!0,children:"▸"}),c.label,u.jsx("code",{children:d.length})]}),f?u.jsx("div",{className:"nav-list",children:d.map(m=>u.jsxs(cs,{to:`/demo/${m.meta.slug}`,className:`nav-sub${t===`/demo/${m.meta.slug}`?" is-active":""}`,children:[u.jsx("em",{"aria-hidden":!0,children:Kf(e,m)}),m.meta.title]},m.meta.slug))}):null]},c.key)})]})}function Kh({demos:e}){var s;const{slug:t}=gh(),{entries:n,detail:r}=e,i=t?n.find(a=>a.meta.slug===t):void 0,l=(s=n[0])==null?void 0:s.meta.slug;if(!i)return u.jsx(ss,{to:l?`/demo/${l}`:"/",replace:!0});const o=n.indexOf(i)+1;return u.jsx(Yr.Fragment,{children:r(i,o)},i.meta.slug)}function Hh({config:e}){var f,m;const{pathname:t}=Gn(),[n,r]=y.useState(!1),[i,l]=y.useState(!1);y.useEffect(()=>r(!1),[t]);const o=y.useCallback(()=>l(v=>!v),[]);y.useEffect(()=>{const v=w=>{const S=w.target,b=S&&(S.tagName==="INPUT"||S.tagName==="TEXTAREA"||S.isContentEditable);w.key==="Escape"&&r(!1),!b&&(w.key==="g"||w.key==="G")&&!w.metaKey&&!w.ctrlKey&&l(g=>!g)};return window.addEventListener("keydown",v),()=>window.removeEventListener("keydown",v)},[]);const s=e.demos,a=(f=s.entries[0])==null?void 0:f.meta.slug,c=y.useMemo(()=>{if(!t.startsWith("/demo"))return e.crumb(t);const v=t.replace(/^\/demo\/?/,""),w=s.entries.find(S=>S.meta.slug===v);return w?`demo ${Kf(s,w)} · ${w.meta.title}`:"demo · 逐项示例"},[t,e,s]),d=y.useMemo(()=>e.nav.map((v,w)=>({...v,no:String(w+1).padStart(2,"0")})),[e.nav]);return u.jsxs("div",{className:`shell${n?" is-nav-open":""}${i?" is-guides":""}`,children:[u.jsx("a",{className:"skip-link",href:"#main",onClick:v=>{v.preventDefault();const w=document.getElementById("main");w==null||w.setAttribute("tabindex","-1"),w==null||w.focus(),w==null||w.scrollIntoView({block:"start"})},children:"跳到内容"}),u.jsxs("aside",{className:"side","aria-label":"站点导航",children:[u.jsxs(cs,{to:"/",className:"brand",children:[u.jsx("span",{className:"brand-mark","aria-hidden":!0,children:e.brand}),u.jsxs("span",{children:[u.jsx("strong",{children:e.pkg}),u.jsx("em",{children:e.subtitle})]})]}),u.jsxs("nav",{children:[d.map(v=>u.jsxs(cs,{to:v.to,className:`nav-item${t===v.to?" is-active":""}`,"aria-current":t===v.to?"page":void 0,children:[u.jsx("em",{"aria-hidden":!0,children:v.no}),u.jsx("span",{children:v.label}),v.hint?u.jsx("code",{children:v.hint}):null]},v.to)),u.jsx(Uh,{demos:e.demos,pathname:t})]}),u.jsxs("div",{className:"side-foot",children:[u.jsx("p",{children:e.footer[0]}),u.jsx("p",{className:"muted",children:e.footer[1]})]})]}),u.jsx("button",{type:"button",className:"scrim","aria-label":"关闭导航",tabIndex:n?0:-1,onClick:()=>r(!1)}),u.jsxs("div",{className:"main",id:"main",children:[u.jsxs("header",{className:"topbar",children:[u.jsx("button",{type:"button",className:"nav-toggle","aria-label":n?"关闭导航":"打开导航","aria-expanded":n,onClick:()=>r(v=>!v),children:u.jsx("span",{"aria-hidden":!0})}),u.jsx("span",{className:"crumb",children:c}),u.jsxs("div",{className:"topbar-right",children:[(m=e.stats)==null?void 0:m.map(v=>u.jsxs("span",{className:"topbar-stat",title:v.title,children:[u.jsx("b",{children:v.value})," ",v.label]},v.label)),u.jsxs("button",{type:"button",className:"topbar-btn","aria-pressed":i,onClick:o,title:"显示栏位参考线（快捷键 G）",children:[u.jsx("i",{"aria-hidden":!0}),"guides"]}),u.jsx("a",{className:"topbar-link",href:e.sourceUrl??Bh,target:"_blank",rel:"noreferrer",children:"source ↗"})]})]}),u.jsx("div",{className:"guides","aria-hidden":!0}),u.jsx(y.Suspense,{fallback:u.jsx("div",{className:"loading",children:"loading modules…"}),children:u.jsx(Vh,{children:u.jsxs(jh,{children:[e.routes.map(v=>u.jsx(wr,{path:v.path,element:v.element},v.path)),u.jsx(wr,{path:"/demo",element:u.jsx(ss,{to:a?`/demo/${a}`:"/",replace:!0})}),u.jsx(wr,{path:"/demo/:slug",element:u.jsx(Kh,{demos:e.demos})}),u.jsx(wr,{path:"*",element:u.jsx(ss,{to:"/",replace:!0})})]})})})]})]})}function Wh({config:e}){return u.jsx(Mh,{children:u.jsx(Hh,{config:e})})}const Qh="modulepreload",Gh=function(e,t){return new URL(e,t).href},oc={},ma=function(t,n,r){let i=Promise.resolve();if(n&&n.length>0){const o=document.getElementsByTagName("link"),s=document.querySelector("meta[property=csp-nonce]"),a=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));i=Promise.allSettled(n.map(c=>{if(c=Gh(c,r),c in oc)return;oc[c]=!0;const d=c.endsWith(".css"),f=d?'[rel="stylesheet"]':"";if(!!r)for(let w=o.length-1;w>=0;w--){const S=o[w];if(S.href===c&&(!d||S.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${f}`))return;const v=document.createElement("link");if(v.rel=d?"stylesheet":Qh,d||(v.as="script"),v.crossOrigin="",v.href=c,a&&v.setAttribute("nonce",a),document.head.appendChild(v),d)return new Promise((w,S)=>{v.addEventListener("load",w),v.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${c}`)))})}))}function l(o){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=o,window.dispatchEvent(s),!s.defaultPrevented)throw o}return i.then(o=>{for(const s of o||[])s.status==="rejected"&&l(s.reason);return t().catch(l)})},sc=(e,t)=>{const n=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 240"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="hsl(${e} 62% 56%)"/><stop offset="1" stop-color="hsl(${(e+38)%360} 58% 38%)"/></linearGradient></defs><rect width="320" height="240" fill="url(#g)"/><circle cx="256" cy="52" r="30" fill="rgba(255,255,255,.18)"/><text x="18" y="212" font-family="monospace" font-size="15" fill="rgba(255,255,255,.92)">${t}</text></svg>`;return`data:image/svg+xml;charset=utf-8,${encodeURIComponent(n)}`},at=[{id:"f-brand",name:"品牌"},{id:"f-product",name:"产品"},{id:"f-video",name:"视频"},{id:"f-ugc",name:"用户投稿"}],ds=[{id:"a-01",title:"首页主视觉 2026",hue:8,tags:["banner","首页"],folderId:"f-brand",folderName:"品牌",size:486233,width:1920,height:1080,favorite:!0,createdAt:"2026-11-02"},{id:"a-02",title:"春季节日海报",hue:336,tags:["海报","节日"],folderId:"f-brand",folderName:"品牌",size:265117,width:1200,height:1600,createdAt:"2026-10-28"},{id:"a-03",title:"品牌 Logo 墙",hue:214,tags:["品牌","logo"],folderId:"f-brand",folderName:"品牌",size:98244,width:1600,height:900,createdAt:"2026-10-20"},{id:"a-04",title:"618 大促 KV",hue:22,tags:["活动","banner"],folderId:"f-brand",folderName:"品牌",size:731882,width:2560,height:1440,createdAt:"2026-10-15"},{id:"a-05",title:"移动端 Banner",hue:46,tags:["banner","移动端"],folderId:"f-brand",folderName:"品牌",size:154220,width:750,height:400,createdAt:"2026-10-12"},{id:"a-06",title:"产品主图 · 白底",hue:194,tags:["产品","主图"],folderId:"f-product",folderName:"产品",size:322486,width:2e3,height:2e3,createdAt:"2026-10-30"},{id:"a-07",title:"产品场景图 · 客厅",hue:168,tags:["产品","场景"],folderId:"f-product",folderName:"产品",size:611002,width:3e3,height:2e3,favorite:!0,createdAt:"2026-10-29"},{id:"a-08",title:"详情页长图",hue:282,tags:["详情页","电商"],folderId:"f-product",folderName:"产品",size:1288310,width:1080,height:9600,createdAt:"2026-10-27"},{id:"a-09",title:"UI 组件截图",hue:232,tags:["UI","组件"],folderId:"f-product",folderName:"产品",size:187334,width:1440,height:900,createdAt:"2026-10-25"},{id:"a-10",title:"图标素材包",hue:262,tags:["图标","素材包"],folderId:"f-product",folderName:"产品",size:45210,width:512,height:512,createdAt:"2026-10-22"},{id:"a-11",title:"发布会宣传片",kind:"video",hue:356,duration:96,tags:["短视频","发布会"],folderId:"f-video",folderName:"视频",size:18422014,width:1920,height:1080,createdAt:"2026-11-01"},{id:"a-12",title:"教程 01 · 快速上手",kind:"video",hue:206,duration:252,tags:["教程","短视频"],folderId:"f-video",folderName:"视频",size:42118802,width:1920,height:1080,createdAt:"2026-10-31"},{id:"a-13",title:"教程 02 · 进阶技巧",kind:"video",hue:176,duration:215,tags:["教程"],folderId:"f-video",folderName:"视频",size:38220441,width:1920,height:1080,createdAt:"2026-10-30"},{id:"a-14",title:"品牌循环动画",kind:"video",hue:300,duration:12,tags:["品牌","动效"],folderId:"f-video",folderName:"视频",size:8841220,width:1080,height:1080,createdAt:"2026-10-26"},{id:"a-15",title:"用户投稿 · 开箱",hue:96,tags:["UGC","实拍"],folderId:"f-ugc",folderName:"用户投稿",size:288910,width:1500,height:2e3,createdAt:"2026-10-24"},{id:"a-16",title:"用户投稿 · 街拍",hue:118,tags:["UGC","实拍"],folderId:"f-ugc",folderName:"用户投稿",size:402118,width:1600,height:1067,createdAt:"2026-10-23"},{id:"a-17",title:"用户短视频 · 露营",kind:"video",hue:132,duration:28,tags:["UGC","短视频"],folderId:"f-ugc",folderName:"用户投稿",size:12004488,width:1080,height:1920,createdAt:"2026-10-21"},{id:"a-18",title:"媒体实拍 · 展会",hue:28,tags:["实拍","媒体"],folderId:"f-brand",folderName:"品牌",size:733991,width:2400,height:1600,createdAt:"2026-10-18"},{id:"a-19",title:"头像兜底图",hue:320,tags:["头像","占位"],folderId:"f-product",folderName:"产品",size:8422,width:200,height:200,createdAt:"2026-10-16"},{id:"a-20",title:"深色占位底图",hue:226,tags:["占位"],folderId:"f-product",folderName:"产品",size:12211,width:800,height:600,createdAt:"2026-10-14"},{id:"a-21",title:"上传中 · 新品实拍 01",hue:60,tags:["上传中"],folderId:"f-product",folderName:"产品",size:0,status:"processing",createdAt:"2026-11-03"},{id:"a-22",title:"上传中 · 新品实拍 02",hue:84,tags:["上传中"],folderId:"f-product",folderName:"产品",size:0,status:"processing",createdAt:"2026-11-03"},{id:"a-23",title:"转码失败 · 素材 07",kind:"video",hue:0,tags:["失败"],folderId:"f-video",folderName:"视频",size:0,status:"failed",createdAt:"2026-11-02"}],dl=["素材包","节日","活动","实拍","UI","教程"];function qh(e){const t=[];for(let n=ds.length;n<e;n+=1){const r=n+1;t.push({id:`a-${String(r).padStart(2,"0")}`,title:`运营备用素材 ${String(r-ds.length).padStart(2,"0")}`,hue:n*37%360,tags:[dl[n%dl.length]],folderId:n%2?"f-ugc":"f-product",folderName:n%2?"用户投稿":"产品",size:96e3+n*7919%4e5,width:1600,height:1200,createdAt:`2026-09-${String(n%28+1).padStart(2,"0")}`})}return t}const ha=e=>({id:e.id,kind:e.kind??"image",src:sc(e.hue,e.id),thumbnail:e.kind==="video"?sc(e.hue,`${e.id} · poster`):void 0,title:e.title,width:e.width,height:e.height,duration:e.duration,size:e.size,mimeType:e.kind==="video"?"video/mp4":"image/svg+xml",tags:e.tags,folderId:e.folderId,folderName:e.folderName,createdAt:e.createdAt,status:e.status??"ready",favorite:e.favorite,owner:"设计中心"}),Ke=[...ds,...qh(48)].map(ha);function Yh(e=240){const t=[...Ke];for(let n=Ke.length;n<e;n+=1){const r=n+1;t.push(ha({id:`bulk-${r}`,title:`批量素材 ${String(r).padStart(3,"0")}`,kind:r%9===0?"video":"image",hue:r*23%360,tags:[dl[r%dl.length]],folderId:r%3===0?"f-ugc":"f-product",folderName:r%3===0?"用户投稿":"产品",size:12e4+r*6151%9e5,width:1600,height:1200,duration:r%9===0?30+r%200:void 0,createdAt:`2026-08-${String(r%28+1).padStart(2,"0")}`}))}return t}function Xh(e){return ha({id:`up-${Date.now()}-${e}`,title:`新上传素材 ${e+1}`,hue:(e*61+180)%360,tags:["新上传"],folderId:"f-product",folderName:"产品",size:26e4,width:1600,height:1200,status:"processing",createdAt:new Date().toISOString()})}const Hf={dropzone:[],toolbar:[],footer:[],overlay:[],empty:[],cardOverlay:()=>[],cardActions:()=>[],cardMeta:()=>[]},Zh=["renderDropzone","renderToolbar","renderCardOverlay","renderCardActions","renderCardMeta","renderFooter","renderOverlay"],Jh=[],ey=176,ty=12;function ny(e){if(!e||typeof window>"u")return 1;const t=window.getComputedStyle(e).gridTemplateColumns;if(!t||t==="none")return 1;const n=t.trim().split(/\s+/).filter(Boolean).length;return n>0?n:1}function ry({card:e,slots:t,tabIndex:n,onToggle:r,onActivate:i,onFocus:l}){var f;const{item:o}=e,s=((f=o.title)==null?void 0:f.trim())||o.id,a=o.kind==="video"?o.thumbnail??"":o.src,[c,d]=y.useState(!1);return y.useEffect(()=>d(!1),[a]),u.jsxs("div",{role:"option","aria-selected":e.selected,"aria-disabled":!e.selectable||e.blocked||void 0,"aria-label":s,tabIndex:n,"data-asset-id":o.id,"data-active":e.active?"true":"false","data-selected":e.selected?"true":"false","data-selectable":e.selectable?"true":"false","data-blocked":e.blocked?"true":"false","data-kind":o.kind,"data-status":o.status??"ready",className:"vc-asset-card",onClick:()=>r==null?void 0:r(o.id),onDoubleClick:()=>i==null?void 0:i(o.id),onFocus:()=>l==null?void 0:l(o.id),children:[u.jsxs("div",{className:"vc-asset-card__media",children:[a&&!c?u.jsx("img",{src:a,alt:"",loading:"lazy",decoding:"async",onError:()=>d(!0)}):u.jsx("span",{className:"vc-asset-card__ph","aria-hidden":"true",children:o.kind==="video"?"video":"image"}),t.cardOverlay(o,e.index),t.cardActions(o,e.index)]}),u.jsxs("div",{className:"vc-asset-card__body",children:[u.jsx("span",{className:"vc-asset-card__title",title:s,children:s}),t.cardMeta(o,e.index)]})]})}const tt=y.forwardRef((e,t)=>{var _,T;const{cards:n=Jh,slots:r=Hf,emptyReason:i,multiple:l=!0,view:o="grid",columnWidth:s=ey,gap:a=ty,selectedIds:c=[],onToggleCard:d,onActivateCard:f,onFocusCard:m,containerClassName:v,containerStyle:w,onMount:S,onUnmount:b,debug:g,containerRefExternal:p}=e,h=y.useRef(null),x=p??h,C=y.useRef(null),[,j]=y.useState(0),A=y.useRef(!1);y.useImperativeHandle(t,()=>({getContainer:()=>x.current,forceUpdate:()=>j(I=>I+1),getSize:()=>{var I,D;return{width:((I=x.current)==null?void 0:I.offsetWidth)??0,height:((D=x.current)==null?void 0:D.offsetHeight)??0}},getSelection:()=>c,getVisibleIds:()=>n.map(I=>I.item.id)}),[x,n,c]),y.useEffect(()=>(g&&console.debug("[AssetLibraryCore] mounted"),S==null||S(),()=>b==null?void 0:b()),[]),y.useEffect(()=>{var D;if(!A.current)return;A.current=!1;const I=(D=C.current)==null?void 0:D.querySelector('[data-active="true"]');I==null||I.focus()},[n]);const L=I=>{if(!n.length)return;const D=Math.max(0,n.findIndex(de=>de.active)),J=ny(C.current);let le=-1;switch(I.key){case"ArrowRight":le=D+1;break;case"ArrowLeft":le=D-1;break;case"ArrowDown":le=D+J;break;case"ArrowUp":le=D-J;break;case"Home":le=0;break;case"End":le=n.length-1;break;case" ":case"Spacebar":le=D,d==null||d(n[D].item.id);break;case"Enter":f==null||f(n[D].item.id);return;default:return}I.preventDefault(),!(le<0||le>=n.length)&&(A.current=!0,m==null||m(n[le].item.id))},k=((_=n.find(I=>I.active))==null?void 0:_.item.id)??((T=n[0])==null?void 0:T.item.id)??null;return u.jsxs("div",{ref:x,className:["vc-asset",v].filter(Boolean).join(" "),"data-view":o,style:w,children:[r.dropzone,r.toolbar,u.jsx("div",{ref:C,className:"vc-asset__grid","data-view":o,"data-testid":"asset-grid",role:"listbox","aria-multiselectable":l||void 0,"aria-label":"素材列表",style:{gap:a,"--vc-asset-col":`${s}px`},onKeyDown:L,children:n.map(I=>u.jsx(ry,{card:I,slots:r,tabIndex:I.item.id===k?0:-1,onToggle:d,onActivate:f,onFocus:m},I.item.id))}),n.length===0?u.jsx("div",{className:"vc-asset__empty",role:"status","data-reason":i??"empty",children:r.empty.length>0?r.empty:u.jsx("p",{children:i==="filtered"?"没有符合条件的素材":"素材库还是空的"})}):null,r.footer,r.overlay]})});tt.displayName="AssetLibraryCore";function iy(){const e=new Map,t=new Map;let n=0;const r=(s,a)=>{const c=e.get(s);if(c){if(n>=50){console.warn(`[PluginBus] emit depth exceeded: "${s}"`);return}n+=1;for(const d of[...c])try{d(a)}catch(f){console.warn(`[PluginBus] handler error for event "${s}"`,f)}n-=1}},i=(s,a)=>{let c=e.get(s);c||(c=new Set,e.set(s,c));const d=a;return c.add(d),()=>{c==null||c.delete(d)}},l=(s,a)=>{const c=d=>{try{a(d)}finally{o(s,c)}};return i(s,c)},o=(s,a)=>{var c;if(!a){e.delete(s);return}(c=e.get(s))==null||c.delete(a)};return{emit:r,on:i,once:l,off:o,getData:s=>t.get(s),setData:(s,a)=>{const c=t.get(s);t.set(s,a),c!==a&&r(s,a)},deleteData:s=>{const a=t.has(s);t.delete(s),a&&r(s,void 0)},hasData:s=>t.has(s),getAll:()=>{const s=Object.create(null);return t.forEach((a,c)=>{s[c]=a}),s},clear:()=>{e.clear(),t.clear()}}}function ly(e){const t=new Map(e.map(s=>[s.name,s])),n=[];for(const s of e)for(const a of s.dependencies??[])t.has(a)||n.push(`${s.name} -> ${a}`);const r=[],i=new Set,l=[...e],o=s=>(s.dependencies??[]).every(a=>i.has(a)||!t.has(a));for(;l.length>0;){const s=l.filter(o);if(s.length===0)throw new Error(`[vane/plugin-core] 插件循环依赖: ${l.map(c=>c.name).join(" <-> ")}`);let a=s[0];for(const c of s)(c.priority??0)>(a.priority??0)&&(a=c);r.push(a),i.add(a.name),l.splice(l.indexOf(a),1)}return n.length>0&&console.warn(`[vane/plugin-core] 以下插件依赖未注册，将被忽略:
  ${n.join(`
  `)}`),r}function Wf(e,t){try{return ly(e)}catch(n){return t==null||t(n),e}}async function oy(e,t={}){const{timeout:n=3e3,name:r="anonymous",hook:i="unknown"}=t;if(!n||n<=0)return await e();let l;const o=new Promise((s,a)=>{l=setTimeout(()=>{a(new Error(`[vane/plugin-core] 插件 ${r} 的钩子 ${i} 超时(${n}ms)`))},n)});try{return await Promise.race([Promise.resolve().then(e),o])}finally{l&&clearTimeout(l)}}const sy=new Set(["onMount","onUnmount","onPropsChange","onError"]);function ay(e={}){const t=e.logger??console,n=e.sandbox??!0,r=e.timeout??3e3,i=[];let l=[];const o=new Map,s=new Map,a=new Set;let c=0,d=null,f=0;const m=(k,_,T)=>{i.push({plugin:k,hook:_,error:T})},v=()=>{c+=1,d=null},w=(k,_=new Set)=>k.enabled===!1?!1:_.has(k.name)?!0:(_.add(k.name),(k.dependencies??[]).every(T=>{const I=o.get(T);return!I||w(I,_)})),S=()=>{if(d)return d;const k=[...o.values()].filter(_=>w(_)?!0:(m(_.name,"dependencies",new Error("依赖已停用")),!1));return d=Wf(k,_=>m("[order]","resolveDependencyOrder",_))},b=k=>{const _=l.filter(([T])=>!k||T===k).reverse();l=k?l.filter(([T])=>T!==k):[];for(const[,T]of _)try{T()}catch(I){t.warn("[vane] cleanup failed",I)}},g=k=>{var _;return Promise.resolve((_=k.destroy)==null?void 0:_.call(k)).catch(T=>t.warn(`[vane] destroy failed: ${k.name}`,T))},p=async(k,_,T,I,D)=>{var U,E;const J=_==="onUnmount";if(_==="onMount"||J){if(a.has(k.name)!==J)return{};J?a.delete(k.name):a.add(k.name)}const le=(U=k.hooks)==null?void 0:U[_];if(typeof le!="function")return{};let de;try{const N=()=>le(T,...I);de=k.sandbox??n?await oy(N,{timeout:k.timeout??r,name:k.name,hook:_}):await N()}catch(N){return D!==c?{}:(m(k.name,_,N),t.warn(`[vane] ${_} failed: ${k.name}`,N),(E=e.onError)==null||E.call(e,k.name,_,N),{stop:_==="onError"})}return D!==c?{}:sy.has(_)&&typeof de=="function"?(l.push([k.name,de]),{}):{value:de}},h=async(k,_,T)=>{const I=c;for(const D of S()){if(I!==c)return;const J=await p(D,k,_,T,I);if(J.stop)return;if(J.value===!1)return!1;if(J.value!==void 0&&J.value!==!0)return J.value}},x=(k,_,...T)=>h(k,_,T),C=k=>{o.get(k.name)&&s.get(k.name)!==k&&(t.warn(`[vane] duplicate plugin, destroy old: ${k.name}`),L(k.name)),o.set(k.name,{...k,enabled:k.enabled??!0}),s.set(k.name,k),a.delete(k.name),v(),k.init&&Promise.resolve(k.init()).catch(_=>{t.warn(`[vane] init failed: ${k.name}`,_)})},j=k=>k.forEach(C),A=k=>{o.delete(k),s.delete(k),a.delete(k),d=null},L=k=>{const _=o.get(k);_&&(v(),b(k),g(_),A(k))};return{register:C,registerAll:j,unregister:L,getPlugin:k=>o.get(k),getAllPlugins:()=>[...o.values()],getEnabledPlugins:()=>[...o.values()].filter(k=>k.enabled!==!1),getExecutionOrder:()=>[...S()],enable:k=>{const _=o.get(k);_&&(_.enabled=!0,d=null)},disable:k=>{const _=o.get(k);_&&(_.enabled=!1,d=null)},has:k=>o.has(k),executeHook:x,clear:()=>{v(),f+=1,b();const k=[...o.values()].map(g);return o.clear(),s.clear(),a.clear(),Promise.all(k).then(()=>{})},getErrors:()=>[...i],align:async(k,_)=>{const T=++f,I=new Map(k.map(D=>[D.name,D]));for(const D of[...o.keys()]){if(T!==f)return;if(s.get(D)===I.get(D))continue;const J=o.get(D);v(),await p(J,"onUnmount",_,[],c),b(D),await g(J),A(D)}for(const D of k){if(T!==f)return;s.get(D.name)!==D&&C(D)}},peekOrder:S}}var uy=Object.defineProperty,cy=(e,t,n)=>t in e?uy(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,dy=(e,t,n)=>cy(e,t+"",n);class Qf extends Yr.Component{constructor(){super(...arguments),dy(this,"state",{error:null})}static getDerivedStateFromError(t){return{error:t}}componentDidUpdate(t){var i,l;const n=t.resetKeys??[],r=this.props.resetKeys??[];this.state.error&&(n.length!==r.length||n.some((o,s)=>!Object.is(o,r[s])))&&((l=(i=this.props).onReset)==null||l.call(i),this.setState({error:null}))}componentDidCatch(t,n){var r,i;console.warn("[vane/plugin-core] 插件渲染错误已被隔离",t,n),(i=(r=this.props).onError)==null||i.call(r,t,n)}render(){const{error:t}=this.state;return t?this.props.fallback?this.props.fallback(t):null:this.props.children}}let Ci=null;function fy(e=!1){if(Ci&&!e)return Ci;const t=typeof window<"u"?window.innerWidth:1024,n=typeof window<"u"?window.innerHeight:768,r=typeof window<"u"&&window.devicePixelRatio||1,i=typeof navigator<"u"&&navigator.userAgent||"",l=/iPad|Tablet/i.test(i),o=/Mobile|Android|iPhone/i.test(i),s=typeof window<"u"&&("ontouchstart"in window||(navigator.maxTouchPoints??0)>0);return Ci={type:l?"tablet":o?"mobile":"desktop",os:i,browser:i,devicePixelRatio:r,viewportWidth:t,viewportHeight:n,isTouchDevice:s,isRetina:r>=2},Ci}function ac(e,t){if(Object.is(e,t))return!0;if(typeof e!="object"||typeof t!="object"||e===null||t===null)return!1;const n=Object.keys(e),r=Object.keys(t);return n.length!==r.length?!1:n.every(i=>Object.is(e[i],t[i]))}function py(e){const{plugins:t,props:n,data:r,initialState:i,containerRef:l,enableDebug:o=!1,managerOptions:s,extendContext:a}=e,c=y.useRef(null),d=l??c,f=y.useRef(null);f.current||(f.current=ay(s));const m=f.current,v=y.useRef(null);v.current||(v.current=iy());const w=v.current,S=y.useRef(new Map),[b,g]=y.useState(i??{}),[,p]=y.useState(0),h=y.useCallback(()=>p(F=>F+1),[]),x=y.useMemo(()=>fy(),[]),C=y.useRef(n);ac(C.current,n)||(C.current=n);const j=C.current,A=y.useRef(r);ac(A.current,r)||(A.current=r);const L=A.current,k=y.useRef(null),_=y.useMemo(()=>{const F={props:j,data:L,bus:w,refs:{container:d,getContainer:()=>d.current},state:b,setState:M=>g(G=>({...G,...M})),shared:S.current,deviceInfo:x,forceUpdate:h,getSize:()=>{const M=d.current;return M?{width:M.offsetWidth,height:M.offsetHeight}:{width:0,height:0}},logger:console};return a?a(F):F},[j,L,b,x,w,a]);y.useLayoutEffect(()=>{k.current=_},[_]);const T=y.useRef(t),I=T.current;I!==t&&(I.length!==t.length||t.some((F,M)=>F!==I[M]))&&(T.current=t);const D=T.current,J=y.useRef(0);y.useLayoutEffect(()=>{const F=++J.current,M=k.current;return m.align(D,M).then(()=>{J.current===F&&(o&&console.debug("[vane/plugin-core] plugins registered:",D.map(G=>G.name).join("|")),m.executeHook("onMount",M))}),()=>{J.current+=1}},[D,m,o]),y.useLayoutEffect(()=>()=>{const F=k.current;if(!m.getExecutionOrder().some(M=>{var G;return typeof((G=M.hooks)==null?void 0:G.onUnmount)=="function"})){m.clear();return}m.executeHook("onUnmount",F).finally(()=>m.clear())},[m]);const le=m.peekOrder(),de=y.useRef([]),U=y.useMemo(()=>{const F=new Map(D.map(W=>[W.name,W])),M=D.filter(W=>{var $e;return W.enabled!==!1&&(($e=m.getPlugin(W.name))==null?void 0:$e.enabled)!==!1}),G=le.length===M.length?le.map(W=>F.get(W.name)??W):Wf(M),K=de.current;return K.length===G.length&&G.every((W,$e)=>W===K[$e])?K:(de.current=G,G)},[D,m,le]),E=y.useRef(_);E.current=_;const N=y.useCallback((F,M)=>{var W;const G=E.current;let K=M;for(const $e of U){const He=(W=$e.hooks)==null?void 0:W[F];if(typeof He=="function")try{K=F==="transformData"?He(G,K):He(K)}catch(oi){(G.logger??console).warn(`[plugin-core] ${$e.name}.${F} 执行失败，已跳过`,oi)}}return K},[U]),R=y.useCallback(F=>N("transformProps",F),[N]),Y=y.useCallback(F=>N("transformData",F),[N]),V=y.useCallback((F,...M)=>m.executeHook(F,k.current,...M),[m]);return{manager:m,bus:w,context:_,state:b,setState:_.setState,execute:V,transformProps:R,transformData:Y,orderedPlugins:U}}y.createContext(null);const gy=new Set(["image","video"]),my=new Set(["ready","processing","failed"]);function hy(e){if(e instanceof Date){const t=e.getTime();return Number.isFinite(t)?t:void 0}if(typeof e=="number")return Number.isFinite(e)?e:void 0;if(typeof e=="string"&&e.trim()){const t=Date.parse(e);return Number.isFinite(t)?t:void 0}}function Gf(e){if(!e)return"";const n=e.split("?")[0].split("#")[0].split("/");return n[n.length-1]??""}function yy(e){var r;const t=(r=e.title)==null?void 0:r.trim();return t||Gf(e.src)||e.id}function vy(e){const t=[];if(!Array.isArray(e))return e!=null&&t.push("items 不是数组，已忽略"),{items:[],issues:t};const n=new Set,r=[];let i=0,l=0,o=0,s=0;for(const a of e){if(!a||typeof a!="object"){i+=1;continue}const c=a,d=c.id;if(typeof d!="string"||!d.trim()){i+=1;continue}if(n.has(d)){l+=1;continue}n.add(d);let f=c.kind;gy.has(f)||(f="image",o+=1);let m=c.status;m!==void 0&&!my.has(m)&&(m="ready",s+=1);const v=Array.isArray(c.tags)?Array.from(new Set(c.tags.filter(w=>typeof w=="string").map(w=>w.trim()).filter(Boolean))):void 0;r.push({...c,id:d,kind:f,src:typeof c.src=="string"?c.src:"",status:m,tags:v})}return i&&t.push(`${i} 条素材缺合法 id，已丢弃`),l&&t.push(`${l} 条素材 id 重复，已保留首次出现`),o&&t.push(`${o} 条素材 kind 非法，已按 image 处理`),s&&t.push(`${s} 条素材 status 非法，已按 ready 处理`),{items:r,issues:t}}function wy(e){if(!Array.isArray(e))return[];const t=new Set,n=[];for(const r of e){if(!r||typeof r!="object")continue;const i=r;typeof i.id!="string"||!i.id.trim()||t.has(i.id)||(t.add(i.id),n.push({...i,id:i.id,name:typeof i.name=="string"&&i.name?i.name:i.id}))}return n}function co(e,t,n=0){if(!Array.isArray(e))return[];const r=new Set(t.map(o=>o.id)),i=new Set,l=[];for(const o of e)if(!(typeof o!="string"||!r.has(o)||i.has(o))&&(i.add(o),l.push(o),n>0&&l.length>=n))break;return l}function mn(e){return(e.status??"ready")==="ready"}function xy(e,t){const n=t.trim().toLowerCase();return n?[e.title,Gf(e.src),e.folderName,e.mimeType,e.owner,...e.tags??[]].filter(i=>typeof i=="string"&&i.length>0).join(" ").toLowerCase().includes(n):!0}function Sy(e,t){const n=t.kinds.length?new Set(t.kinds):null,r=t.tags.length?new Set(t.tags):null;return e.filter(i=>!(n&&!n.has(i.kind)||t.folderId&&(i.folderId??null)!==t.folderId||r&&!(i.tags??[]).some(o=>r.has(o))||!xy(i,t.query)))}function ky(e,t){switch(t){case"name":return yy(e).toLowerCase();case"createdAt":return hy(e.createdAt);case"size":return typeof e.size=="number"&&Number.isFinite(e.size)?e.size:void 0;case"duration":return typeof e.duration=="number"&&Number.isFinite(e.duration)?e.duration:void 0;default:return}}function Py(e,t){const n=t.dir==="asc"?1:-1;return e.map((r,i)=>({item:r,index:i,value:ky(r,t.key)})).sort((r,i)=>{const l=r.value===void 0||r.value==="",o=i.value===void 0||i.value==="";return l||o?l&&o?r.index-i.index:l?1:-1:r.value===i.value?r.index-i.index:typeof r.value=="string"&&typeof i.value=="string"?r.value.localeCompare(i.value,"zh-Hans-CN")*n:(r.value-i.value)*n}).map(r=>r.item)}function by(e,t,n){if(!Number.isFinite(n)||n<=0)return{visible:e,page:1,pageCount:1};const r=Math.max(1,Math.ceil(e.length/n)),i=Math.min(Math.max(1,Math.floor(t)||1),r),l=(i-1)*n;return{visible:e.slice(l,l+n),page:i,pageCount:r}}function _y(e){if(typeof e!="number"||!Number.isFinite(e)||e<0)return"";const t=Math.round(e),n=Math.floor(t/3600),r=Math.floor(t%3600/60),i=t%60,l=o=>String(o).padStart(2,"0");return n>0?`${n}:${l(r)}:${l(i)}`:`${r}:${l(i)}`}function Cy(e){if(typeof e!="number"||!Number.isFinite(e)||e<0)return"";if(e<1024)return`${Math.round(e)} B`;const t=["KB","MB","GB","TB"];let n=e/1024,r=0;for(;n>=1024&&r<t.length-1;)n/=1024,r+=1;return`${n>=10?Math.round(n):n.toFixed(1)} ${t[r]}`}function Ey(e){const t=new Map;for(const n of e)for(const r of n.tags??[])t.set(r,(t.get(r)??0)+1);return Array.from(t,([n,r])=>({tag:n,count:r})).sort((n,r)=>r.count-n.count||n.tag.localeCompare(r.tag,"zh-Hans-CN"))}function Ay(e,t){const n=new Map;for(const r of e){const i=r.folderId??null;i&&n.set(i,(n.get(i)??0)+1)}return t.map(r=>({...r,count:n.get(r.id)??r.count??0}))}function Ly(e,t){return e===0?"empty":t===0?"filtered":null}const jy=[...Zh,"renderEmpty"];function $y(e){return[...e].sort((t,n)=>{var r,i;return(((r=t.config)==null?void 0:r.order)??0)-(((i=n.config)==null?void 0:i.order)??0)||(n.priority??0)-(t.priority??0)})}function zy(e){const t={};for(const n of jy)t[n]=$y(e.filter(r=>r.enabled!==!1&&typeof r.hooks[n]=="function"));return t}function pr(e,t,n,...r){const i=[];for(const l of e){const o=l.hooks[n];if(typeof o=="function")try{const s=o(t,...r);if(s==null||s===!1)continue;i.push(u.jsx(Qf,{children:s},`val-${n}-${l.name}`))}catch(s){console.warn(`[vane-asset-library] 插件 ${l.name} 的 ${n} 渲染失败`,s)}}return i}function Ny(e,t,n){for(let r=e.length-1;r>=0;r-=1){const i=e[r],l=i.hooks.renderEmpty;if(typeof l=="function")try{const o=l(t,n);if(o==null||o===!1)continue;return[u.jsx(Qf,{children:o},`val-empty-${i.name}`)]}catch(o){console.warn(`[vane-asset-library] 插件 ${i.name} 的 renderEmpty 渲染失败`,o)}}return[]}function Ty(e,t,n){const r=zy(e),i=l=>(o,s)=>pr(r[l]??[],t,l,o,s);return{dropzone:pr(r.renderDropzone??[],t,"renderDropzone"),toolbar:pr(r.renderToolbar??[],t,"renderToolbar"),footer:pr(r.renderFooter??[],t,"renderFooter"),overlay:pr(r.renderOverlay??[],t,"renderOverlay"),empty:n?Ny(r.renderEmpty??[],t,n):[],cardOverlay:i("renderCardOverlay"),cardActions:i("renderCardActions"),cardMeta:i("renderCardMeta")}}const uc=24,fl={key:"createdAt",dir:"desc"};function Fy(e,t=""){return typeof e=="string"?e:t}function Dy(e){return Array.isArray(e)?e.filter(t=>typeof t=="string"):[]}function My(e){return Array.isArray(e)?e.filter(t=>t==="image"||t==="video"):[]}function cc(e,t){return typeof e=="number"&&Number.isFinite(e)?e:t}function Iy(e){const t=e.sortKey==="name"||e.sortKey==="createdAt"||e.sortKey==="size"||e.sortKey==="duration"?e.sortKey:fl.key,n=e.sortDir==="asc"||e.sortDir==="desc"?e.sortDir:fl.dir;return{key:t,dir:n}}function Ry(e){return e==="list"?"list":"grid"}function qf(e,t){const n=Array.isArray(t)?{plugins:t}:t,r=n.plugins??[],{enableDebug:i=!1}=n,l=y.forwardRef((o,s)=>{const a=y.useRef(null),c=y.useRef(()=>{}),{items:d,folders:f,selectedIds:m,defaultSelectedIds:v,maxSelected:w,multiple:S,pageSize:b,initialSort:g,initialView:p,onSelectionChange:h,onItemActivate:x,onUpload:C,onAssetAction:j}=o,A=y.useMemo(()=>vy(d),[d]),L=A.items,k=A.issues;y.useEffect(()=>{k.length&&console.warn("[vane-asset-library] 素材数据存在异常，已按归一化结果渲染：",k.join("；"))},[k]);const _=y.useMemo(()=>wy(f),[f]),T=Math.max(0,w??0),I=S!==!1,D=m!==void 0,J=y.useMemo(()=>({query:"",kinds:[],tags:[],folderId:null,sortKey:(g==null?void 0:g.key)??fl.key,sortDir:(g==null?void 0:g.dir)??fl.dir,view:p??"grid",page:1,pageSize:b??uc,selectedIds:co(v??[],L,T),activeId:null,previewId:null}),[]),le=y.useCallback(V=>{const F=V.state??{},M=V.setState,G=Fy(F.query),K=My(F.kinds),W=Dy(F.tags),$e=typeof F.folderId=="string"?F.folderId:null,He=Iy(F),oi=Ry(F.view),Fl=cc(F.pageSize,uc),ct=co(D?m:F.selectedIds,L,T),Dl=new Set(ct),si=Py(Sy(L,{query:G,kinds:K,tags:W,folderId:$e}),He),ai=by(si,cc(F.page,1),Fl),Ia=ai.visible,Ra=new Map(L.map($=>[$.id,$])),Oa=$=>$.map(Q=>Ra.get(Q)).filter(Q=>!!Q),ir=$=>{const Q=co($,L,T);M({selectedIds:Q});const We=Oa(Q);h==null||h(Q,We),c.current("onSelectionChange",Q,We)},ap=$=>{const Q=Ra.get($);if(!(!Q||!mn(Q))){if(Dl.has($)){ir(ct.filter(We=>We!==$));return}if(!I){ir([$]);return}T>0&&ct.length>=T||ir([...ct,$])}},up=()=>{const $=[...ct];for(const Q of Ia)if(!(!mn(Q)||$.includes(Q.id))){if(T>0&&$.length>=T)break;$.push(Q.id)}ir($)},Gt=$=>{M({...$,page:1})};return{...V,items:L,folders:_,filtered:si,visible:Ia,total:si.length,emptyReason:Ly(L.length,si.length),query:G,kinds:K,tags:W,folderId:$e,setQuery:$=>{$!==G&&Gt({query:$})},toggleKind:$=>{const Q=K.includes($)?K.filter(We=>We!==$):[...K,$];Gt({kinds:Q})},setKinds:$=>{$.length===K.length&&$.every(Q=>K.includes(Q))||Gt({kinds:$})},toggleTag:$=>{const Q=W.includes($)?W.filter(We=>We!==$):[...W,$];Gt({tags:Q})},setTags:$=>{$.length===W.length&&$.every(Q=>W.includes(Q))||Gt({tags:$})},setFolder:$=>{$!==$e&&Gt({folderId:$})},clearFilters:()=>{!G&&!K.length&&!W.length&&!$e||Gt({query:"",kinds:[],tags:[],folderId:null})},hasFilters:!!(G||K.length||W.length||$e),sortKey:He.key,sortDir:He.dir,setSort:($,Q)=>{const We=Q??($===He.key?He.dir==="asc"?"desc":"asc":$==="createdAt"?"desc":"asc");$===He.key&&We===He.dir||M({sortKey:$,sortDir:We})},view:oi,setView:$=>{$!==oi&&M({view:$})},page:ai.page,pageSize:Fl,pageCount:ai.pageCount,setPage:$=>{$!==ai.page&&M({page:$})},setPageSize:$=>{$!==Fl&&M({pageSize:$,page:1})},selectedIds:ct,selectedItems:Oa(ct),isSelected:$=>Dl.has($),toggleSelect:ap,selectAllVisible:up,clearSelection:()=>{ct.length&&ir([])},maxSelected:T,isSelectable:mn,isBlocked:$=>mn($)&&T>0&&ct.length>=T&&!Dl.has($.id),activeId:typeof F.activeId=="string"?F.activeId:null,setActiveId:$=>{M({activeId:$})},requestUpload:$=>{C==null||C($),c.current("onUploadRequest",$)},requestAction:($,Q)=>{j==null||j($,Q)},previewId:typeof F.previewId=="string"?F.previewId:null,openPreview:$=>M({previewId:$}),closePreview:()=>M({previewId:null})}},[L,_,D,m,T,I,h,C,j]),de=py({plugins:r,props:o,initialState:J,containerRef:a,enableDebug:i,extendContext:le});c.current=(V,...F)=>{const M=de.execute;M(V,...F)};const U=de.context;y.useEffect(()=>{b!==void 0&&b!==U.pageSize&&de.setState({pageSize:b,page:1})},[b]);const E=y.useMemo(()=>{const V=new Set(U.selectedIds),F=U.selectedIds.length;return U.visible.map((M,G)=>{const K=mn(M);return{item:M,index:G,selected:V.has(M.id),selectable:K,blocked:K&&T>0&&F>=T&&!V.has(M.id),active:U.activeId===M.id}})},[U.visible,U.selectedIds,U.activeId,T]),N=de.orderedPlugins,R=y.useMemo(()=>N.length?Ty(N,U,U.emptyReason):Hf,[N,U]),Y=y.useCallback(V=>{const F=U.items.find(M=>M.id===V);F&&(x==null||x(F),c.current("onAssetActivate",F))},[U.items,x]);return u.jsx(e,{...o,ref:s,containerRefExternal:a,cards:E,slots:R,emptyReason:U.emptyReason,view:U.view,page:U.page,selectedIds:U.selectedIds,maxSelected:T,multiple:I,onToggleCard:U.toggleSelect,onActivateCard:Y,onFocusCard:U.setActiveId})});return l.displayName="withAssetLibraryPlugins",l}const xt=qf;function Yf(e=[]){return qf(tt,e)}Yf([]);const Oy="Dropzone",By="拖拽上传占位：接收拖入或点击选择的文件，按 accept 过滤后交回宿主，组件不发起任何请求。",Vy="0.1.0",Uy=["upload","dropzone","dnd"],Ky=[{name:"renderDropzone",when:"每次渲染",description:"拖拽上传占位：接收拖入或点击选择的文件，按 accept 过……"}],Hy=[],Wy=[{name:"accept",type:"string[]",default:'["image/*","video/*"]',description:"允许的文件类型，支持 image/* 前缀与 .png 扩展名"},{name:"label",type:"string",default:"拖拽素材到此处",description:"主文案"},{name:"multiple",type:"boolean",default:"true",description:"是否允许一次多选"}],Qy='createDropzonePlugin({ accept: ["image/*"], label: "拖入图片" })',Gy=["dragover 必 preventDefault，否则 drop 永远不触发","过滤不匹配类型后才上抛 File[]","点击 / Enter 空格均可唤起文件选择"],qy=["后台素材库上传入口","批量导入素材"],ya={name:Oy,description:By,since:Vy,tags:Uy,events:Ky,methods:Hy,config:Wy,example:Qy,features:Gy,useCases:qy},Yy=["image/*","video/*"];function Xy(e,t){if(!t.length)return!0;const n=e.type||"",r=e.name.toLowerCase();return t.some(i=>{const l=i.trim().toLowerCase();return l?l.endsWith("/*")?n.startsWith(l.slice(0,-1)):l.startsWith(".")?r.endsWith(l):n===l:!1})}function Zy({ctx:e,accept:t,label:n,multiple:r}){const[i,l]=y.useState(!1),o=y.useRef(null),s=c=>{const d=Array.from(c??[]).filter(f=>Xy(f,t));d.length&&e.requestUpload(d)},a=()=>{var c;return(c=o.current)==null?void 0:c.click()};return u.jsxs("div",{className:"vc-asset-dropzone","data-dragging":i?"true":void 0,role:"button",tabIndex:0,"aria-label":`${n}，也可点击选择文件`,onClick:a,onKeyDown:c=>{(c.key==="Enter"||c.key===" ")&&(c.preventDefault(),a())},onDragOver:c=>{c.preventDefault(),l(!0)},onDragLeave:()=>l(!1),onDrop:c=>{var d;c.preventDefault(),l(!1),s(((d=c.dataTransfer)==null?void 0:d.files)??null)},children:[u.jsxs("span",{children:[u.jsx("strong",{children:n})," 或点击选择文件"]}),u.jsx("input",{ref:o,type:"file",hidden:!0,accept:t.join(","),multiple:r,onChange:c=>{s(c.target.files),c.target.value=""}})]})}const $l=(e={})=>{const t=e.accept??Yy,n=e.label??"拖拽素材到此处",r=e.multiple!==!1;return{name:"dropzone",version:"0.1.0",description:ya.description,priority:5,config:e,hooks:{renderDropzone:i=>u.jsx(Zy,{ctx:i,accept:t,label:n,multiple:r})}}};$l.meta=ya;const Jy="Search",ev="关键词搜索：按标题 / 文件名 / 标签 / 分组 / MIME 过滤，200ms 防抖并使用 ⌘K 聚焦。",tv="0.1.0",nv=["search","filter","debounce"],rv=[{name:"renderToolbar",when:"每次渲染",description:"关键词搜索：按标题 / 文件名 / 标签 / 分组 / MI……"}],iv=[],lv=[{name:"placeholder",type:"string",default:"搜索名称 / 标签 / 分组",description:"占位文案"},{name:"debounce",type:"number",default:"200",description:"写回筛选条件的防抖毫秒"},{name:"hotkey",type:"boolean",default:"true",description:"⌘K / Ctrl+K 聚焦输入框"},{name:"width",type:"number",default:"200",description:"输入框宽度（px）"}],ov='createSearchPlugin({ debounce: 300, placeholder: "搜素材" })',sv=["外部清空筛选后输入框自动同步","Esc 清空关键词","防抖期间不触发整墙重排"],av=["素材检索","按文件名定位素材"],va={name:Jy,description:ev,since:tv,tags:nv,events:rv,methods:iv,config:lv,example:ov,features:sv,useCases:av};function uv({ctx:e,placeholder:t,debounce:n,hotkey:r,width:i}){const[l,o]=y.useState(e.query),s=y.useRef(null),a=y.useRef(null);y.useEffect(()=>{o(e.query)},[e.query]),y.useEffect(()=>{if(!r||typeof window>"u")return;const d=f=>{var m;(f.metaKey||f.ctrlKey)&&f.key.toLowerCase()==="k"&&(f.preventDefault(),(m=a.current)==null||m.focus())};return window.addEventListener("keydown",d),()=>window.removeEventListener("keydown",d)},[r]),y.useEffect(()=>()=>{s.current!==null&&window.clearTimeout(s.current)},[]);const c=d=>{o(d),s.current!==null&&window.clearTimeout(s.current),s.current=window.setTimeout(()=>{s.current=null,e.setQuery(d)},n)};return u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[u.jsx("input",{ref:a,className:"vc-asset-input",type:"search",value:l,placeholder:t,"aria-label":"搜索素材",style:{width:i},onChange:d=>c(d.target.value),onKeyDown:d=>{d.key==="Escape"&&l&&(d.stopPropagation(),c(""))}}),l?u.jsx("button",{type:"button",className:"vc-asset-btn","aria-label":"清空搜索",onClick:()=>c(""),children:"清空"}):null]})}const qn=(e={})=>{const t=e.placeholder??"搜索名称 / 标签 / 分组",n=e.debounce??200,r=e.hotkey!==!1,i=e.width??200;return{name:"search",version:"0.1.0",description:va.description,priority:10,config:e,hooks:{renderToolbar:l=>u.jsx(uv,{ctx:l,placeholder:t,debounce:n,hotkey:r,width:i})}}};qn.meta=va;function Xf(...e){return e.filter(Boolean).join(" ")}function Un({active:e,className:t,children:n,...r}){return u.jsx("button",{type:"button","aria-pressed":e,className:Xf("vc-asset-chip",t),...r,children:n})}function Zf({tone:e,className:t,children:n,title:r}){return u.jsx("span",{className:Xf("vc-asset-badge",t),"data-tone":e,title:r,children:n})}function zl({align:e="end",children:t}){return u.jsx("div",{className:"vc-asset-card__overlay","data-align":e,children:t})}function wa(e){e.stopPropagation(),e.preventDefault()}const cv="KindFilter",dv="按素材类型筛选（图片 / 视频），chip 上带各类型总数；「全部」只清类型，不动关键词与标签。",fv="0.1.0",pv=["filter","kind"],gv=[{name:"renderToolbar",when:"每次渲染",description:"按素材类型筛选（图片 / 视频），chip 上带各类型总数；……"}],mv=[],hv=[{name:"kinds",type:"Array<{kind,label}>",default:"图片/视频",description:"参与筛选的类型与文案"},{name:"allLabel",type:"string",default:"全部",description:"「全部」chip 文案"}],yv='createKindFilterPlugin({ allLabel: "所有类型" })',vv=["计数取归一化全量，不随筛选变化","多选 OR 语义","「全部」不清空其它筛选条件"],wv=["图库 / 视频混排","只看视频素材"],xa={name:cv,description:dv,since:fv,tags:pv,events:gv,methods:mv,config:hv,example:yv,features:vv,useCases:wv},xv=[{kind:"image",label:"图片"},{kind:"video",label:"视频"}];function Sv({ctx:e,options:t,allLabel:n}){const r=i=>e.items.filter(l=>l.kind===i).length;return u.jsxs("div",{className:"vc-asset-toolbar",role:"group","aria-label":"按素材类型筛选",children:[u.jsxs(Un,{active:e.kinds.length===0,onClick:()=>e.setKinds([]),children:[n,u.jsx("span",{className:"vc-asset-count",children:e.items.length})]}),t.map(({kind:i,label:l})=>u.jsxs(Un,{active:e.kinds.includes(i),onClick:()=>e.toggleKind(i),children:[l,u.jsx("span",{className:"vc-asset-count",children:r(i)})]},i))]})}const fn=(e={})=>{var r;const t=(r=e.kinds)!=null&&r.length?e.kinds:xv,n=e.allLabel??"全部";return{name:"kind-filter",version:"0.1.0",description:xa.description,priority:11,config:e,hooks:{renderToolbar:i=>u.jsx(Sv,{ctx:i,options:t,allLabel:n})}}};fn.meta=xa;const kv="TagFilter",Pv="标签面筛选：从素材汇总标签并按出现次数排序，支持多选（OR），已选标签永不被截断。",bv="0.1.0",_v=["filter","tag","facet"],Cv=[{name:"renderToolbar",when:"每次渲染",description:"标签面筛选：从素材汇总标签并按出现次数排序，支持多选（OR）……"}],Ev=[],Av=[{name:"max",type:"number",default:"8",description:"最多展示几个标签，0 = 不限"},{name:"sort",type:'"count" | "name"',default:'"count"',description:"标签排序方式"}],Lv="createTagFilterPlugin({ max: 12 })",jv=["facet 从全量素材现算，选中后其它标签不消失","已选标签始终可见，可再次点掉","一键清除标签"],$v=["按业务标签筛素材","运营选图"],Sa={name:kv,description:Pv,since:bv,tags:_v,events:Cv,methods:Ev,config:Av,example:Lv,features:jv,useCases:$v};function zv({ctx:e,max:t,sort:n}){const r=Ey(e.items),i=n==="name"?[...r].sort((c,d)=>c.tag.localeCompare(d.tag,"zh-Hans-CN")):r,l=r.filter(c=>e.tags.includes(c.tag)),o=t>0?i.slice(0,t):i,s=[...l,...o.filter(c=>!e.tags.includes(c.tag))],a=t>0?s.slice(0,Math.max(t,l.length)):s;return r.length?u.jsxs("div",{className:"vc-asset-toolbar",role:"group","aria-label":"按标签筛选",children:[a.map(c=>u.jsxs(Un,{active:e.tags.includes(c.tag),onClick:()=>e.toggleTag(c.tag),children:[c.tag,u.jsx("span",{className:"vc-asset-count",children:c.count})]},c.tag)),e.tags.length>0?u.jsx("button",{type:"button",className:"vc-asset-btn",onClick:()=>e.setTags([]),children:"清除标签"}):null]}):null}const Yn=(e={})=>{const t=e.max??8,n=e.sort??"count";return{name:"tag-filter",version:"0.1.0",description:Sa.description,priority:12,config:e,hooks:{renderToolbar:r=>u.jsx(zv,{ctx:r,max:t,sort:n})}}};Yn.meta=Sa;const Nv="FolderFilter",Tv="分组筛选：按宿主传入的 folders 平铺切换（不做文件树），chip 上显示该组真实数量。",Fv="0.1.0",Dv=["filter","folder","group"],Mv=[{name:"renderToolbar",when:"每次渲染",description:"分组筛选：按宿主传入的 folders 平铺切换（不做文件树……"}],Iv=[],Rv=[{name:"allLabel",type:"string",default:"全部分组",description:"「全部」chip 文案"},{name:"hideEmpty",type:"boolean",default:"false",description:"是否隐藏 0 项的分组"}],Ov="createFolderFilterPlugin({ hideEmpty: true })",Bv=["计数按 items 现算，folder.count 只作兜底","与类型 / 标签 / 搜索可叠加","无 folders 时整块不渲染"],Vv=["按项目 / 栏目分组管理素材"],ka={name:Nv,description:Tv,since:Fv,tags:Dv,events:Mv,methods:Iv,config:Rv,example:Ov,features:Bv,useCases:Vv};function Uv({ctx:e,allLabel:t,hideEmpty:n}){const r=Ay(e.items,e.folders),i=n?r.filter(l=>l.count>0):r;return i.length?u.jsxs("div",{className:"vc-asset-toolbar",role:"group","aria-label":"按分组筛选",children:[u.jsx(Un,{active:e.folderId===null,onClick:()=>e.setFolder(null),children:t}),i.map(l=>u.jsxs(Un,{active:e.folderId===l.id,onClick:()=>e.setFolder(l.id),children:[l.name,u.jsx("span",{className:"vc-asset-count",children:l.count})]},l.id))]}):null}const Xn=(e={})=>{const t=e.allLabel??"全部分组",n=e.hideEmpty===!0;return{name:"folder-filter",version:"0.1.0",description:ka.description,priority:13,config:e,hooks:{renderToolbar:r=>u.jsx(Uv,{ctx:r,allLabel:t,hideEmpty:n})}}};Xn.meta=ka;const Kv="Sort",Hv="排序：名称 / 时间 / 体积 / 时长，点同一字段反转方向，缺值恒沉底。",Wv="0.1.0",Qv=["sort"],Gv=[{name:"renderToolbar",when:"每次渲染",description:"排序：名称 / 时间 / 体积 / 时长，点同一字段反转方向……"}],qv=[],Yv=[{name:"options",type:"SortOption[]",default:"时间/名称/体积/时长",description:"可选排序项"}],Xv='createSortPlugin({ options: [{ key: "size", label: "体积" }] })',Zv=["稳定排序，同值保持入参顺序","缺值不随方向翻转（永远排末尾）","中文按 localeCompare 排序"],Jv=["按最新上传排序","找大文件"],Pa={name:Kv,description:Hv,since:Wv,tags:Qv,events:Gv,methods:qv,config:Yv,example:Xv,features:Zv,useCases:Jv},e0=[{key:"createdAt",label:"时间"},{key:"name",label:"名称"},{key:"size",label:"体积"},{key:"duration",label:"时长"}];function t0({ctx:e,options:t}){return u.jsxs("div",{className:"vc-asset-toolbar",role:"group","aria-label":"排序",children:[u.jsx("select",{className:"vc-asset-input","aria-label":"排序字段",value:e.sortKey,onChange:n=>e.setSort(n.target.value),children:t.map(n=>u.jsx("option",{value:n.key,children:n.label},n.key))}),u.jsx("button",{type:"button",className:"vc-asset-btn","aria-label":e.sortDir==="asc"?"当前升序，点击改为降序":"当前降序，点击改为升序",onClick:()=>e.setSort(e.sortKey,e.sortDir==="asc"?"desc":"asc"),children:e.sortDir==="asc"?"↑ 升序":"↓ 降序"})]})}const Zn=(e={})=>{var n;const t=(n=e.options)!=null&&n.length?e.options:e0;return{name:"sort",version:"0.1.0",description:Pa.description,priority:14,config:e,hooks:{renderToolbar:r=>u.jsx(t0,{ctx:r,options:t})}}};Zn.meta=Pa;const n0="ViewSwitch",r0="网格 / 列表视图切换；布局由 CSS 的 data-view 选择器负责，插件不复制渲染逻辑。",i0="0.1.0",l0=["view","layout"],o0=[{name:"renderToolbar",when:"每次渲染",description:"网格 / 列表视图切换；布局由 CSS 的 data-vie……"}],s0=[],a0=[{name:"views",type:"AssetView[]",default:'["grid","list"]',description:"可切换的视图"},{name:"labels",type:"Partial<Record<AssetView,string>>",default:"网格/列表",description:"视图文案"}],u0='createViewSwitchPlugin({ views: ["grid"] })',c0=["切换只写内核 state.view","列表视图媒体区固定窄条","ARIA group 标注"],d0=["后台素材浏览密度切换"],ba={name:n0,description:r0,since:i0,tags:l0,events:o0,methods:s0,config:a0,example:u0,features:c0,useCases:d0},f0=["grid","list"],p0={grid:"网格",list:"列表"};function g0({ctx:e,views:t,labels:n}){return u.jsx("div",{className:"vc-asset-toolbar",role:"group","aria-label":"视图切换",children:t.map(r=>u.jsx(Un,{active:e.view===r,onClick:()=>e.setView(r),children:n[r]},r))})}const ti=(e={})=>{var r;const t=(r=e.views)!=null&&r.length?e.views:f0,n={...p0,...e.labels};return{name:"view-switch",version:"0.1.0",description:ba.description,priority:15,config:e,hooks:{renderToolbar:i=>u.jsx(g0,{ctx:i,views:t,labels:n})}}};ti.meta=ba;const m0="Count",h0="结果计数：过滤后总数、当前页 / 总页数与已选数量，分页时明确标注「本页 n 条」。",y0="0.1.0",v0=["count","status"],w0=[{name:"renderToolbar",when:"每次渲染",description:"结果计数：过滤后总数、当前页 / 总页数与已选数量，分页时明……"}],x0=[],S0=[{name:"showTotal",type:"boolean",default:"true",description:"显示过滤后总数"},{name:"showVisible",type:"boolean",default:"true",description:"多页时显示当前页信息"},{name:"showSelected",type:"boolean",default:"true",description:"显示已选数量"},{name:"separator",type:"string",default:"·",description:"分隔符"}],k0="createCountPlugin({ showSelected: false })",P0=["aria-live 播报计数变化","单页时不显示页码段","不手抄任何数字，全部实时算"],b0=["筛选结果反馈","批量操作前确认数量"],_a={name:m0,description:h0,since:y0,tags:v0,events:w0,methods:x0,config:S0,example:k0,features:P0,useCases:b0};function _0({ctx:e,showTotal:t,showVisible:n,showSelected:r,separator:i}){const l=[];return t&&l.push(`共 ${e.total} 项`),n&&e.pageCount>1&&l.push(`第 ${e.page} / ${e.pageCount} 页 · 本页 ${e.visible.length}`),r&&l.push(`已选 ${e.selectedIds.length}`),u.jsx("span",{className:"vc-asset-count","data-testid":"asset-count",role:"status","aria-live":"polite",children:l.join(` ${i} `)})}const pn=(e={})=>{const t=e.showTotal!==!1,n=e.showVisible!==!1,r=e.showSelected!==!1,i=e.separator??"·";return{name:"count",version:"0.1.0",description:_a.description,priority:16,config:e,hooks:{renderToolbar:l=>u.jsx(_0,{ctx:l,showTotal:t,showVisible:n,showSelected:r,separator:i})}}};pn.meta=_a;const C0="SelectAll",E0="全选本页 / 取消选择：只作用于当前页可见且就绪的素材，达上限时按钮如实禁用。",A0="0.1.0",L0=["select","batch"],j0=[{name:"renderToolbar",when:"每次渲染",description:"全选本页 / 取消选择：只作用于当前页可见且就绪的素材，达上……"}],$0=[],z0=[{name:"selectLabel",type:"string",default:"全选本页",description:"全选按钮文案"},{name:"clearLabel",type:"string",default:"取消选择",description:"清空按钮文案"}],N0="createSelectAllPlugin()",T0=["排除未就绪素材","不跨页全选（避免误删）","达到 maxSelected 时禁用并说明"],F0=["批量删除前的快速选择","批量下载当前页"],Ca={name:C0,description:E0,since:A0,tags:L0,events:j0,methods:$0,config:z0,example:N0,features:T0,useCases:F0};function D0({ctx:e,selectLabel:t,clearLabel:n}){const r=e.visible.filter(mn),i=r.length>0&&r.every(o=>e.isSelected(o.id)),l=e.maxSelected>0&&e.selectedIds.length>=e.maxSelected;return u.jsxs("div",{className:"vc-asset-toolbar",role:"group","aria-label":"批量选择",children:[u.jsxs("button",{type:"button",className:"vc-asset-btn",disabled:!r.length||i||l,onClick:()=>e.selectAllVisible(),children:[t,r.length?`（${r.length}）`:""]}),u.jsx("button",{type:"button",className:"vc-asset-btn",disabled:e.selectedIds.length===0,onClick:()=>e.clearSelection(),children:n})]})}const ni=(e={})=>{const t=e.selectLabel??"全选本页",n=e.clearLabel??"取消选择";return{name:"select-all",version:"0.1.0",description:Ca.description,priority:17,config:e,hooks:{renderToolbar:r=>u.jsx(D0,{ctx:r,selectLabel:t,clearLabel:n})}}};ni.meta=Ca;const M0="SelectMark",I0="卡片选择标记：左上角勾选圈，多选时显示选择序号；点标记不会触发卡片其它行为。",R0="0.1.0",O0=["select","overlay"],B0=[{name:"renderCardOverlay",when:"每次渲染，逐张卡片调用",description:"卡片选择标记：左上角勾选圈，多选时显示选择序号；点标记不会触……"}],V0=[],U0=[{name:"showIndex",type:"boolean",default:"true",description:"多选时显示第几个被选中"}],K0="createSelectMarkPlugin({ showIndex: false })",H0=["stopPropagation 避免双触发","未就绪素材不渲染标记","达上限的卡片禁用并给出 aria-label"],W0=["多选素材","选图器"],Ea={name:M0,description:I0,since:R0,tags:O0,events:B0,methods:V0,config:U0,example:K0,features:H0,useCases:W0};function Q0({ctx:e,item:t,showIndex:n}){if(!e.isSelectable(t))return null;const r=e.isSelected(t.id),i=e.selectedIds.indexOf(t.id)+1,l=e.isBlocked(t),o=r?`取消选择 ${t.title??t.id}`:l?`已达选择上限，无法选择 ${t.title??t.id}`:`选择 ${t.title??t.id}`;return u.jsx(zl,{align:"start",children:u.jsx("button",{type:"button",className:"vc-asset-mark","data-selected":r?"true":"false","aria-pressed":r,"aria-label":o,title:o,disabled:l,onClick:s=>{wa(s),e.toggleSelect(t.id)},children:r?n&&e.selectedIds.length>1?i:"✓":""})})}const Jn=(e={})=>{const t=e.showIndex!==!1;return{name:"select-mark",version:"0.1.0",description:Ea.description,priority:20,config:e,hooks:{renderCardOverlay:(n,r)=>u.jsx(Q0,{ctx:n,item:r,showIndex:t})}}};Jn.meta=Ea;const G0="KindBadge",q0="类型角标：默认只给视频显示 VID，用来区分「静帧缩略图」与「真图片」。",Y0="0.1.0",X0=["overlay","kind"],Z0=[{name:"renderCardOverlay",when:"每次渲染，逐张卡片调用",description:"类型角标：默认只给视频显示 VID，用来区分「静帧缩略图」与……"}],J0=[],ew=[{name:"labels",type:"Partial<Record<AssetKind,string>>",default:"PIC/VID",description:"角标文案"},{name:"showFor",type:"AssetKind[]",default:'["video"]',description:"在哪些类型上显示"}],tw='createKindBadgePlugin({ showFor: ["image", "video"] })',nw=["只读归一化后的 kind","可图文混排时同时标注","角标可被屏幕阅读器忽略（纯装饰）"],rw=["图视频混排的素材墙"],Aa={name:G0,description:q0,since:Y0,tags:X0,events:Z0,methods:J0,config:ew,example:tw,features:nw,useCases:rw},iw={image:"PIC",video:"VID"};function lw({item:e,labels:t,showFor:n}){return n.includes(e.kind)?u.jsx(zl,{align:"end",children:u.jsx(Zf,{children:t[e.kind]})}):null}const Nl=(e={})=>{const t={...iw,...e.labels},n=e.showFor??["video"];return{name:"kind-badge",version:"0.1.0",description:Aa.description,priority:21,config:e,hooks:{renderCardOverlay:(r,i)=>u.jsx(lw,{item:i,labels:t,showFor:n})}}};Nl.meta=Aa;const ow="Duration",sw="视频时长角标：只读 item.duration，不在组件里加载媒体元数据。",aw="0.1.0",uw=["overlay","video","duration"],cw=[{name:"renderCardOverlay",when:"每次渲染，逐张卡片调用",description:"视频时长角标：只读 item.duration，不在组件里加……"}],dw=[],fw=[{name:"fallback",type:"boolean",default:"false",description:"无时长时是否显示 --:--"}],pw="createDurationPlugin({ fallback: true })",gw=["mm:ss / h:mm:ss 自动切换","非视频不渲染","缺失时长不编造"],mw=["视频素材墙","影视素材管理"],La={name:ow,description:sw,since:aw,tags:uw,events:cw,methods:dw,config:fw,example:pw,features:gw,useCases:mw};function hw({item:e,fallback:t}){if(e.kind!=="video")return null;const n=_y(e.duration);return!n&&!t?null:u.jsx(zl,{align:"bottom",children:u.jsx(Zf,{title:`时长 ${n||"未知"}`,children:n||"--:--"})})}const Tl=(e={})=>{const t=e.fallback===!0;return{name:"duration",version:"0.1.0",description:La.description,priority:22,config:e,hooks:{renderCardOverlay:(n,r)=>u.jsx(hw,{item:r,fallback:t})}}};Tl.meta=La;const yw="StatusBadge",vw="素材状态遮罩：processing / failed 时在卡片中央标注，说明为什么这张卡点不动。",ww="0.1.0",xw=["overlay","status","a11y"],Sw=[{name:"renderCardOverlay",when:"每次渲染，逐张卡片调用",description:"素材状态遮罩：processing / failed 时在卡……"}],kw=[],Pw=[{name:"labels",type:"Partial<Record<AssetStatus,string>>",default:"转码中/处理失败",description:"状态文案"}],bw='createStatusBadgePlugin({ labels: { processing: "上传中" } })',_w=["ready 不渲染任何节点","半透明遮罩，仍可看见缩略图","aria-label 说明不可选原因"],Cw=["上传后转码占位","失败文件提示"],ja={name:yw,description:vw,since:ww,tags:xw,events:Sw,methods:kw,config:Pw,example:bw,features:_w,useCases:Cw},Ew={ready:"",processing:"转码中",failed:"处理失败"};function Aw({item:e,labels:t}){const n=e.status??"ready";if(n==="ready")return null;const r=t[n];return u.jsx("div",{className:"vc-asset-status","data-status":n,role:"img","aria-label":r,children:u.jsx("span",{className:"vc-asset-status__text","data-tone":n==="failed"?"danger":"warn",children:r})})}const er=(e={})=>{const t={...Ew,...e.labels};return{name:"status-badge",version:"0.1.0",description:ja.description,priority:23,config:e,hooks:{renderCardOverlay:(n,r)=>u.jsx(Aw,{item:r,labels:t})}}};er.meta=ja;const Lw="Favorite",jw='收藏星标：点击抛 onAssetAction("favorite")，亮灭取决于宿主回写的 item.favorite。',$w="0.1.0",zw=["overlay","favorite","action"],Nw=[{name:"renderCardOverlay",when:"每次渲染，逐张卡片调用",description:'收藏星标：点击抛 onAssetAction("favori……'}],Tw=[],Fw=[{name:"action",type:"string",default:"favorite",description:"回调动作名"},{name:"activeColor",type:"string",default:"#9a5b00",description:"已收藏颜色（默认取 --vane-asset-warn，保证 4.9:1）"}],Dw='createFavoritePlugin({ action: "star" })',Mw=["不做乐观更新，避免与宿主数据打架","aria-pressed 表达状态","点击阻断卡片选中"],Iw=["素材收藏","常用图标记"],$a={name:Lw,description:jw,since:$w,tags:zw,events:Nw,methods:Tw,config:Fw,example:Dw,features:Mw,useCases:Iw};function Rw({ctx:e,item:t,action:n,activeColor:r}){const i=t.favorite===!0,l=i?`取消收藏 ${t.title??t.id}`:`收藏 ${t.title??t.id}`;return u.jsx(zl,{align:"bottom-start",children:u.jsx("button",{type:"button",className:"vc-asset-icon","data-active":i?"true":"false","aria-pressed":i,"aria-label":l,title:l,style:{color:i?r:void 0},onClick:o=>{wa(o),e.requestAction(n,{id:t.id})},children:i?"★":"☆"})})}const ri=(e={})=>{const t=e.action??"favorite",n=e.activeColor??"#9a5b00";return{name:"favorite",version:"0.1.0",description:$a.description,priority:24,config:e,hooks:{renderCardOverlay:(r,i)=>u.jsx(Rw,{ctx:r,item:i,action:t,activeColor:n})}}};ri.meta=$a;const Ow="CardActions",Bw="卡片操作：预览 / 下载 / 删除，预览走内置浮层，其余动作交回宿主（onAssetAction）。",Vw="0.1.0",Uw=["action","overlay"],Kw=[{name:"renderCardActions",when:"每次渲染，逐张卡片调用",description:"卡片操作：预览 / 下载 / 删除，预览走内置浮层，其余动作……"}],Hw=[],Ww=[{name:"actions",type:"CardAction[]",default:"预览/下载/删除",description:"操作项，preview 为内置动作"}],Qw='createCardActionsPlugin({ actions: [{ action: "download", label: "下载" }] })',Gw=["按钮常驻可见，不依赖 hover","preview 与 LightBox 联动","危险动作单独 tone"],qw=["素材单卡操作","下载 / 删除入口"],za={name:Ow,description:Bw,since:Vw,tags:Uw,events:Kw,methods:Hw,config:Ww,example:Qw,features:Gw,useCases:qw},Yw=[{action:"preview",label:"预览",icon:"⌕"},{action:"download",label:"下载",icon:"↓"},{action:"delete",label:"删除",icon:"×",tone:"danger"}];function Xw({ctx:e,item:t,actions:n}){return u.jsx("div",{className:"vc-asset-actions",role:"group","aria-label":`${t.title??t.id} 操作`,children:n.map(r=>u.jsx("button",{type:"button",className:"vc-asset-icon","data-tone":r.tone,"aria-label":`${r.label} ${t.title??t.id}`,title:r.label,onClick:i=>{if(wa(i),r.action==="preview"){e.openPreview(t.id);return}e.requestAction(r.action,{id:t.id})},children:r.icon??r.label},r.action))})}const ii=(e={})=>{var n;const t=(n=e.actions)!=null&&n.length?e.actions:Yw;return{name:"card-actions",version:"0.1.0",description:za.description,priority:25,config:e,hooks:{renderCardActions:(r,i)=>u.jsx(Xw,{ctx:r,item:i,actions:t})}}};ii.meta=za;const Zw="MetaLine",Jw="卡片元信息行：体积 / 分辨率 / 分组 / 标签 / 日期，缺字段就少一段，绝不编造。",ex="0.1.0",tx=["overlay","meta"],nx=[{name:"renderCardMeta",when:"每次渲染，逐张卡片调用",description:"卡片元信息行：体积 / 分辨率 / 分组 / 标签 / 日期……"}],rx=[],ix=[{name:"show",type:"MetaField[]",default:'["size","dimension"]',description:"展示哪些字段"},{name:"maxTags",type:"number",default:"2",description:"标签最多显示几个"}],lx='createMetaLinePlugin({ show: ["size", "dimension", "date"] })',ox=["分隔点由 CSS 伪元素生成，首尾不多点","体积 / 日期格式化走 domain 纯函数","无效值自动跳过"],sx=["素材规格速览","找超标大图"],Na={name:Zw,description:Jw,since:ex,tags:tx,events:nx,methods:rx,config:ix,example:lx,features:ox,useCases:sx},ax=["size","dimension"];function ux(e){if(e===void 0)return"";const t=e instanceof Date?e:new Date(e),n=t.getTime();if(!Number.isFinite(n))return"";const r=i=>String(i).padStart(2,"0");return`${t.getFullYear()}-${r(t.getMonth()+1)}-${r(t.getDate())}`}function cx({item:e,show:t,maxTags:n}){var i;const r=[];if(t.includes("dimension")&&e.width&&e.height&&r.push(`${e.width}×${e.height}`),t.includes("size")){const l=Cy(e.size);l&&r.push(l)}if(t.includes("folder")&&e.folderName&&r.push(e.folderName),t.includes("date")){const l=ux(e.createdAt);l&&r.push(l)}return t.includes("tags")&&((i=e.tags)!=null&&i.length)&&r.push(e.tags.slice(0,n).join(" / ")),r.length?u.jsx("span",{className:"vc-asset-meta","data-testid":"asset-meta",children:r.map((l,o)=>u.jsx("span",{className:o>0?"vc-asset-meta__dot":void 0,children:l},`${l}-${o}`))}):null}const tr=(e={})=>{var r;const t=(r=e.show)!=null&&r.length?e.show:ax,n=e.maxTags??2;return{name:"meta-line",version:"0.1.0",description:Na.description,priority:26,config:e,hooks:{renderCardMeta:(i,l)=>u.jsx(cx,{item:l,show:t,maxTags:n})}}};tr.meta=Na;const dx="BulkBar",fx="批量操作条：已选数量 + 批量下载 / 删除 / 清空，动作名统一带 bulk: 前缀。",px="0.1.0",gx=["batch","footer"],mx=[{name:"renderFooter",when:"每次渲染",description:"批量操作条：已选数量 + 批量下载 / 删除 / 清空，动作……"}],hx=[],yx=[{name:"actions",type:"BulkAction[]",default:"批量下载/批量删除",description:"批量动作项"},{name:"label",type:"string",default:"已选 {n} 项",description:"已选文案，{n} 会替换成数量"}],vx='createBulkBarPlugin({ label: "已选 {n} 个素材" })',wx=["未选择时整块不渲染，页脚不占位","动作带 bulk: 前缀便于宿主分流","内置清空选择"],xx=["批量删除素材","批量导出"],Ta={name:dx,description:fx,since:px,tags:gx,events:mx,methods:hx,config:yx,example:vx,features:wx,useCases:xx},Sx=[{action:"bulk:download",label:"批量下载"},{action:"bulk:delete",label:"批量删除",tone:"danger"}];function kx({ctx:e,actions:t,label:n}){const r=e.selectedIds.length;return r?u.jsxs("div",{className:"vc-asset-footer",role:"region","aria-label":"批量操作",children:[u.jsx("span",{className:"vc-asset-count",role:"status","aria-live":"polite",children:n.replace("{n}",String(r))}),t.map(i=>u.jsx("button",{type:"button",className:"vc-asset-btn","data-tone":i.tone,onClick:()=>e.requestAction(i.action,{ids:e.selectedIds}),children:i.label},i.action)),u.jsx("button",{type:"button",className:"vc-asset-btn",onClick:()=>e.clearSelection(),children:"清空选择"})]}):null}const li=(e={})=>{var r;const t=(r=e.actions)!=null&&r.length?e.actions:Sx,n=e.label??"已选 {n} 项";return{name:"bulk-bar",version:"0.1.0",description:Ta.description,priority:30,config:e,hooks:{renderFooter:i=>u.jsx(kx,{ctx:i,actions:t,label:n})}}};li.meta=Ta;const Px="Pagination",bx="分页器：页码窗口 5 个 + 每页条数；pageCount 由纯函数算，越界自动夹紧。",_x="0.1.0",Cx=["pagination","footer"],Ex=[{name:"renderFooter",when:"每次渲染",description:"分页器：页码窗口 5 个 + 每页条数；pageCount ……"}],Ax=[],Lx=[{name:"pageSizes",type:"number[]",default:"[12,24,48]",description:"可选每页条数，[] 隐藏下拉"},{name:"window",type:"number",default:"5",description:"页码窗口大小"}],jx="createPaginationPlugin({ pageSizes: [24, 48, 96] })",$x=["只有一页时不渲染","aria-current 标注当前页","改每页条数回到第 1 页"],zx=["大库分页浏览"],Fa={name:Px,description:bx,since:_x,tags:Cx,events:Ex,methods:Ax,config:Lx,example:jx,features:$x,useCases:zx};function Nx(e,t,n){const r=Math.floor(n/2);let i=Math.max(1,e-r);const l=Math.min(t,i+n-1);i=Math.max(1,l-n+1);const o=[];for(let s=i;s<=l;s+=1)o.push(s);return o}function Tx({ctx:e,pageSizes:t,size:n}){if(e.pageCount<=1)return null;const r=Nx(e.page,e.pageCount,n);return u.jsxs("div",{className:"vc-asset-pager",role:"navigation","aria-label":"分页",children:[u.jsx("button",{type:"button",className:"vc-asset-btn",disabled:e.page<=1,onClick:()=>e.setPage(e.page-1),children:"上一页"}),r.map(i=>u.jsx("button",{type:"button",className:"vc-asset-btn","data-tone":i===e.page?"accent":void 0,"aria-current":i===e.page?"page":void 0,onClick:()=>e.setPage(i),children:i},i)),u.jsx("button",{type:"button",className:"vc-asset-btn",disabled:e.page>=e.pageCount,onClick:()=>e.setPage(e.page+1),children:"下一页"}),t.length?u.jsx("select",{className:"vc-asset-input","aria-label":"每页条数",value:e.pageSize,onChange:i=>e.setPageSize(Number(i.target.value)),children:t.map(i=>u.jsxs("option",{value:i,children:["每页 ",i]},i))}):null]})}const Pt=(e={})=>{const t=e.pageSizes??[12,24,48],n=e.window??5;return{name:"pagination",version:"0.1.0",description:Fa.description,priority:31,config:e,hooks:{renderFooter:r=>u.jsx(Tx,{ctx:r,pageSizes:t,size:n})}}};Pt.meta=Fa;const Fx="EmptyState",Dx="空态：区分「库为空」与「筛选无结果」，后者给一键清空筛选，避免用户误以为素材被删。",Mx="0.1.0",Ix=["empty","a11y"],Rx=[{name:"renderEmpty",when:"每次渲染",description:"空态：区分「库为空」与「筛选无结果」，后者给一键清空筛选，避……"}],Ox=[],Bx=[{name:"emptyText",type:"string",default:"素材库还是空的",description:"无素材文案"},{name:"emptyHint",type:"string",default:"拖拽图片或视频到上方区域即可开始",description:"无素材补充说明"},{name:"filteredText",type:"string",default:"没有符合当前条件的素材",description:"筛选无结果文案"},{name:"clearLabel",type:"string",default:"清空筛选条件",description:"清空按钮文案"}],Vx='createEmptyStatePlugin({ emptyText: "还没有素材" })',Ux=["两种原因文案分叉","筛选无结果时给恢复入口","单值槽：最高 priority 胜出"],Kx=["空库引导","筛选无结果兜底"],Da={name:Fx,description:Dx,since:Mx,tags:Ix,events:Rx,methods:Ox,config:Bx,example:Vx,features:Ux,useCases:Kx};function Hx({ctx:e,reason:t,config:n}){return t==="filtered"?u.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:10},children:[u.jsx("p",{children:n.filteredText}),u.jsx("button",{type:"button",className:"vc-asset-btn","data-tone":"accent",onClick:()=>e.clearFilters(),children:n.clearLabel})]}):u.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:6},children:[u.jsx("p",{children:n.emptyText}),u.jsx("span",{className:"vc-asset-meta",children:n.emptyHint})]})}const ut=(e={})=>{const t={emptyText:e.emptyText??"素材库还是空的",emptyHint:e.emptyHint??"拖拽图片或视频到上方区域即可开始",filteredText:e.filteredText??"没有符合当前条件的素材",clearLabel:e.clearLabel??"清空筛选条件"};return{name:"empty-state",version:"0.1.0",description:Da.description,priority:40,config:e,hooks:{renderEmpty:(n,r)=>u.jsx(Hx,{ctx:n,reason:r,config:t})}}};ut.meta=Da;const Wx="LightBox",Qx="大图 / 视频预览浮层：Esc 或点遮罩关闭，左右方向键在当前筛选结果里切换。",Gx="0.1.0",qx=["preview","overlay","keyboard"],Yx=[{name:"onAssetActivate",when:"双击卡片 / 按 Enter",description:"打开当前素材的预览浮层（宿主若自己接了 onItemActivate 不冲突，两者都执行）"},{name:"renderOverlay",when:"previewId 非空时",description:"渲染 dialog 浮层：Esc 或点遮罩关闭，← → 在筛选结果里切换"}],Xx=[],Zx=[{name:"arrows",type:"boolean",default:"true",description:"支持 ← → 在筛选结果里切换"},{name:"restoreFocus",type:"boolean",default:"true",description:"关闭后恢复焦点（由宿主焦点管理兜底）"}],Jx="createLightBoxPlugin({ arrows: false })",eS=["双击卡片 / Enter 即可打开，卡片上的预览按钮也能远程打开","打开态存内核 state，任何插件都能 openPreview / closePreview","翻页范围是筛选结果而非当前页","dialog 语义 + aria-modal"],tS=["素材大图预览","视频抽查"],Ma={name:Wx,description:Qx,since:Gx,tags:qx,events:Yx,methods:Xx,config:Zx,example:Jx,features:eS,useCases:tS};function dc(e,t){const n=e.filtered.findIndex(r=>r.id===t);return n<0?"":`${n+1} / ${e.filtered.length}`}function nS({ctx:e,item:t,arrows:n}){const r=e.filtered.findIndex(i=>i.id===t.id);return y.useEffect(()=>{const i=l=>{if(l.key==="Escape"){l.preventDefault(),e.closePreview();return}n&&(l.key==="ArrowRight"&&r>=0&&r<e.filtered.length-1&&(l.preventDefault(),e.openPreview(e.filtered[r+1].id)),l.key==="ArrowLeft"&&r>0&&(l.preventDefault(),e.openPreview(e.filtered[r-1].id)))};return window.addEventListener("keydown",i),()=>window.removeEventListener("keydown",i)},[n,e,r]),u.jsxs("div",{className:"vc-asset-lightbox",role:"dialog","aria-modal":"true","aria-label":`预览 ${t.title??t.id}`,onClick:()=>e.closePreview(),children:[u.jsx("button",{type:"button",className:"vc-asset-lightbox__close",onClick:i=>{i.stopPropagation(),e.closePreview()},children:"关闭 ESC"}),u.jsx("div",{className:"vc-asset-lightbox__body",onClick:i=>i.stopPropagation(),children:t.kind==="video"?u.jsx("video",{src:t.src,controls:!0,autoPlay:!0,playsInline:!0}):u.jsx("img",{src:t.src,alt:t.title??t.id})}),u.jsxs("div",{className:"vc-asset-lightbox__bar",children:[u.jsx("span",{children:t.title??t.id}),dc(e,t.id)?u.jsxs("span",{children:["· ",dc(e,t.id)]}):null,n?u.jsx("span",{children:"· ← → 切换"}):null]})]})}const Qt=(e={})=>{const t=e.arrows!==!1;return{name:"lightbox",version:"0.1.0",description:Ma.description,priority:45,config:e,hooks:{onAssetActivate:(n,r)=>{n.previewId||n.openPreview(r.id)},renderOverlay:n=>{if(!n.previewId)return null;const r=n.items.find(i=>i.id===n.previewId);return r?u.jsx(nS,{ctx:n,item:r,arrows:t}):null}}}};Qt.meta=Ma;const An=(e,t,n)=>e[t]===void 0?n:Number(e[t]),Xt=(e,t,n=!0)=>e[t]===void 0?n:!!e[t],Jf={DropzonePlugin:e=>$l({label:e.label===void 0?"拖素材到这里，或点击选择":String(e.label),multiple:Xt(e,"multiple"),accept:["image/*","video/*"]}),SearchPlugin:e=>qn({placeholder:"搜素材名 / 标签",hotkey:Xt(e,"hotkey"),debounce:An(e,"debounce",180)}),KindFilterPlugin:e=>fn({allLabel:"全部",kinds:e.kinds==="both"?void 0:[{kind:"image",label:"图片"},{kind:"video",label:"视频"}]}),TagFilterPlugin:e=>Yn({max:An(e,"max",6),sort:e.sort==="name"?"name":"count"}),FolderFilterPlugin:()=>Xn({allLabel:"全部素材",hideEmpty:!1}),SortPlugin:()=>Zn({}),ViewSwitchPlugin:e=>ti({views:e.views==="grid"?["grid"]:["grid","list"]}),CountPlugin:e=>pn({showTotal:Xt(e,"showTotal"),showVisible:Xt(e,"showVisible"),showSelected:Xt(e,"showSelected")}),SelectAllPlugin:()=>ni({}),SelectMarkPlugin:e=>Jn({showIndex:Xt(e,"showIndex")}),KindBadgePlugin:e=>Nl(e.showFor==="both"?{}:{labels:{video:"视频"},showFor:["video"]}),DurationPlugin:()=>Tl({fallback:!0}),StatusBadgePlugin:()=>er({}),FavoritePlugin:()=>ri({action:"favorite"}),CardActionsPlugin:()=>ii({actions:[{action:"download",label:"下载",icon:"↓"},{action:"rename",label:"重命名",icon:"✎"},{action:"delete",label:"删除",icon:"×",tone:"danger"}]}),MetaLinePlugin:e=>tr({show:e.fields==="size"?["size"]:["size","dimension","folder"],maxTags:2}),BulkBarPlugin:()=>li({label:"已选 {n} 项",actions:[{action:"bulk:download",label:"批量下载"},{action:"bulk:move",label:"移动到…"},{action:"bulk:delete",label:"批量删除",tone:"danger"}]}),PaginationPlugin:e=>Pt({pageSizes:e.sizes==="wide"?[8,16,48]:[6,12,24]}),EmptyStatePlugin:()=>ut({}),LightBoxPlugin:()=>Qt({arrows:!0,restoreFocus:!0})};function nr(e,t){const n={};if("pageSize"in e&&(n.pageSize=An(e,"pageSize",12)),"maxSelected"in e){const r=An(e,"maxSelected",0);r>0&&(n.maxSelected=r)}return"multiple"in e&&(n.multiple=Xt(e,"multiple")),"columnWidth"in e&&(n.columnWidth=An(e,"columnWidth",176)),"gap"in e&&(n.gap=An(e,"gap",12)),t&&(n.onSelectionChange=(r,i)=>{if(!r.length)return t("选择已清空","info");t(`选中 ${r.length} 项：${i.map(l=>l.title??l.id).join(" / ")}`)},n.onItemActivate=r=>t(`激活 ${r.title??r.id}（双击 / Enter）`,"info")),n}function rr(e,t){return y.useMemo(()=>{const n=Jf[e];if(!n)throw new Error(`未注册的示例插件：${e}`);return xt(tt,[n(t)])},[e,t])}function _e(e,t={}){if(!Jf[e])throw new Error(`未注册的示例插件：${e}`);const n=t.items??Ke;return function({cfg:i,log:l}){var a;const o=rr(e,i),s=((a=t.bind)==null?void 0:a.call(t,i,l))??{};return u.jsx("div",{className:"stage",children:u.jsx(o,{items:n,folders:at,...nr(i,l),...s})})}}const rS={slug:"dropzone",title:"拖拽上传占位",group:"plugin",plugin:"DropzonePlugin",intro:"把图片或视频拖到网格上方的虚线区，组件把 File[] 交给 onUpload，剩下的（上传、进度、失败重试）全部归宿主。",why:"素材库最常见的入口就是拖拽。内置 XHR 只会逼你在「进度条长什么样」上跟组件打架，所以这里只做占位与回调。",plugs:[{fn:"createDropzonePlugin",cfg:'label: "拖素材到这里，或点击选择", accept: ["image/*", "video/*"]',why:"虚线占位 + 点击唤起系统文件选择；accept 决定选文件对话框的过滤条件。"}],props:[],controls:[{key:"multiple",label:"允许多选",kind:"switch",init:!0}],stageHeight:520,note:"演示里「上传」是本地 setTimeout 假装的：真实项目请在 onUpload 里走自己的上传，完成后把新素材合并进 items。"};function iS({cfg:e,log:t}){const n=rr("DropzonePlugin",e),[r,i]=y.useState(Ke),l=y.useCallback(o=>{const s=o.map((a,c)=>Xh(c));i(a=>[...s,...a]),t(`收到 ${o.length} 个文件：${o.map(a=>a.name).join("、")}`),window.setTimeout(()=>{i(a=>a.map(c=>c.id.startsWith("up-")?{...c,status:"ready"}:c)),t(`上传完成，${s.length} 项转为 ready`,"info")},1200)},[t]);return u.jsx("div",{className:"stage",children:u.jsx(n,{items:r,folders:at,...nr(e,t),onUpload:l})})}const lS=Object.freeze(Object.defineProperty({__proto__:null,default:iS,meta:rS},Symbol.toStringTag,{value:"Module"})),oS={slug:"search",title:"搜索与热键",group:"plugin",plugin:"SearchPlugin",intro:"在标题、标签、文件名里做子串匹配，输入后 180ms 才触发筛选；按 / 键从任意位置跳到搜索框。",why:"素材一多，找东西的第一动作就是打字。搜索必须支持标签与文件名，只匹配标题等于逼用户记住命名。",plugs:[{fn:"createSearchPlugin",cfg:'placeholder: "搜素材名 / 标签", hotkey: true, debounce: 180',why:"工具栏里的输入框；debounce 是插件的本地状态，不污染素材库 state。"}],props:["pageSize={{pageSize}}"],controls:[{key:"pageSize",label:"每页",kind:"number",init:12,min:6,max:36,step:6},{key:"hotkey",label:"/ 热键",kind:"switch",init:!0,nonLayout:!0},{key:"debounce",label:"防抖(ms)",kind:"number",init:180,min:0,max:600,step:60,nonLayout:!0}],stageHeight:560,note:"搜索框输入「教程」试试：它命中的是标签，不是标题。"},sS=_e("SearchPlugin"),aS=Object.freeze(Object.defineProperty({__proto__:null,default:sS,meta:oS},Symbol.toStringTag,{value:"Module"})),uS={slug:"kind-filter",title:"按类型筛选",group:"plugin",plugin:"KindFilterPlugin",intro:"工具栏里的「全部 / 图片 / 视频」段控，一次只生效一种类型；切换时页码回到第 1 页。",why:"素材库至少有两种介质。用段控而不是复选，是因为「同时看图又看视频」几乎没有真实需求，却会让状态多一层。",plugs:[{fn:"createKindFilterPlugin",cfg:'allLabel: "全部"',why:"绑定 ctx.kinds 与 ctx.toggleKind；数量角标取自归一化后的素材统计。"}],props:["pageSize={{pageSize}}"],controls:[{key:"pageSize",label:"每页",kind:"number",init:12,min:6,max:36,step:6}],stageHeight:520},cS=_e("KindFilterPlugin"),dS=Object.freeze(Object.defineProperty({__proto__:null,default:cS,meta:uS},Symbol.toStringTag,{value:"Module"})),fS={slug:"tag-filter",title:"标签筛选",group:"plugin",plugin:"TagFilterPlugin",intro:"工具条里一排标签 chip，按出现次数倒序取前 6 个；点选多个标签取并集，再点一次取消。",why:"标签是运营自己维护的维度，比文件夹细、比搜索快。用「或」而不是「与」，是因为多选标签时用户想看的是「这几类我都关心」。",plugs:[{fn:"createTagFilterPlugin",cfg:'max: 6, sort: "count"',why:"max 控制展示条数（避免工具条被 40 个标签撑爆），sort 决定倒序还是按名。"}],props:["pageSize={{pageSize}}"],controls:[{key:"max",label:"展示标签数",kind:"number",init:6,min:3,max:12,step:1},{key:"sort",label:"排序",kind:"select",init:"count",options:[{label:"按出现次数",value:"count"},{label:"按名称",value:"name"}],nonLayout:!0},{key:"pageSize",label:"每页",kind:"number",init:12,min:6,max:36,step:6}],stageHeight:540,note:"标签筛选与类型筛选、文件夹、搜索是叠加关系，四个条件同时生效。"},pS=_e("TagFilterPlugin"),gS=Object.freeze(Object.defineProperty({__proto__:null,default:pS,meta:fS},Symbol.toStringTag,{value:"Module"})),mS={slug:"folder-filter",title:"文件夹导航",group:"plugin",plugin:"FolderFilterPlugin",intro:"工具栏左侧的文件夹下拉，「全部素材」加四个分组，每项带实时数量；数量来自 items 现算，不看后端脸色。",why:"素材库的分组维度通常是「谁负责 / 用在哪」，比标签更稳定。数量现算可以避免宿主忘了同步 count 造成的空白感。",plugs:[{fn:"createFolderFilterPlugin",cfg:'allLabel: "全部素材", hideEmpty: false',why:"绑定 ctx.folderId 与 ctx.setFolder；数量由 normalizeFolders + filterAssets 的中间结果算出。"}],props:["pageSize={{pageSize}}"],controls:[{key:"pageSize",label:"每页",kind:"number",init:12,min:6,max:36,step:6}],stageHeight:520},hS=_e("FolderFilterPlugin"),yS=Object.freeze(Object.defineProperty({__proto__:null,default:hS,meta:mS},Symbol.toStringTag,{value:"Module"})),vS={slug:"sort",title:"排序",group:"plugin",plugin:"SortPlugin",intro:"排序键可在名称 / 创建时间 / 体积 / 时长之间切换，方向再点一次取反；缺该字段的素材永远排在最后。",why:"「最近的素材」和「最大的素材」是两个完全不同的找东西场景。缺值恒沉底是硬约束 —— 否则图片会被「按时长排」挤成一堆。",plugs:[{fn:"createSortPlugin",why:"绑定 ctx.sortKey / ctx.sortDir 与 setSort；图标用纯文本箭头，不引图标库。"}],props:["pageSize={{pageSize}}"],controls:[{key:"pageSize",label:"每页",kind:"number",init:12,min:6,max:36,step:6}],stageHeight:520,note:"排序是稳定排序：同值时保持传入顺序，不会在翻页时跳来跳去。"},wS=_e("SortPlugin"),xS=Object.freeze(Object.defineProperty({__proto__:null,default:wS,meta:vS},Symbol.toStringTag,{value:"Module"})),SS={slug:"view-switch",title:"网格 / 列表切换",group:"plugin",plugin:"ViewSwitchPlugin",intro:"同一个素材墙在「网格」与「列表」之间切换。列表视图把每项压成一行，适合快速核对文件名与体积。",why:"挑图要网格，对账要列表。让视图成为状态而不是两套组件，插件才能同时作用于两种视图。",plugs:[{fn:"createViewSwitchPlugin",cfg:'views: ["grid", "list"]',why:"绑定 ctx.view / ctx.setView；views 只有一个元素时插件自动隐身。"}],props:["pageSize={{pageSize}}"],controls:[{key:"views",label:"可选视图",kind:"select",init:"both",options:[{label:"网格 + 列表",value:"both"},{label:"仅网格",value:"grid"}],nonLayout:!0},{key:"pageSize",label:"每页",kind:"number",init:12,min:6,max:36,step:6}],stageHeight:520},kS=_e("ViewSwitchPlugin"),PS=Object.freeze(Object.defineProperty({__proto__:null,default:kS,meta:SS},Symbol.toStringTag,{value:"Module"})),bS={slug:"count",title:"数量统计",group:"plugin",plugin:"CountPlugin",intro:"工具条右侧的读数条：总量、当前筛出、已选。三段可以单独关掉，分隔符可换。",why:"筛选之后用户需要立刻知道「还剩多少」，否则会怀疑是不是筛空了。已选数量是批量操作前的确认位。",plugs:[{fn:"createCountPlugin",cfg:"showTotal: true, showVisible: true, showSelected: true",why:"读 ctx.total / ctx.filtered.length / ctx.selectedIds.length，不自己算。"}],props:["pageSize={{pageSize}}"],controls:[{key:"showTotal",label:"总量",kind:"switch",init:!0,nonLayout:!0},{key:"showVisible",label:"筛出",kind:"switch",init:!0,nonLayout:!0},{key:"showSelected",label:"已选",kind:"switch",init:!0,nonLayout:!0},{key:"pageSize",label:"每页",kind:"number",init:12,min:6,max:36,step:6}],stageHeight:500},_S=_e("CountPlugin"),CS=Object.freeze(Object.defineProperty({__proto__:null,default:_S,meta:bS},Symbol.toStringTag,{value:"Module"})),ES={slug:"select-all",title:"全选当前页",group:"plugin",plugin:"SelectAllPlugin",intro:"一键选中当前页所有「就绪」素材，再点一次清空。处理中 / 失败的素材不会被卷进来。",why:"批量下载、批量移动都需要一个「这一页我都要」的入口。全选范围限定当前页，是为了跟分页的语义对齐。",plugs:[{fn:"createSelectAllPlugin",why:"调 ctx.selectAllVisible() / ctx.clearSelection()；是否显示取决于当前页有无可选且未选的项。"}],props:["multiple","maxSelected={{maxSelected}}","pageSize={{pageSize}}"],controls:[{key:"multiple",label:"多选",kind:"switch",init:!0,nonLayout:!0},{key:"maxSelected",label:"选择上限",kind:"number",init:12,min:0,max:24,step:1},{key:"pageSize",label:"每页",kind:"number",init:12,min:6,max:24,step:6}],stageHeight:500,note:"把上限调到 3 再点全选：只有前 3 个就绪项被选中，其余静默跳过，日志里能数出来。"},AS=_e("SelectAllPlugin"),LS=Object.freeze(Object.defineProperty({__proto__:null,default:AS,meta:ES},Symbol.toStringTag,{value:"Module"})),jS={slug:"select-mark",title:"选择标记与序号",group:"plugin",plugin:"SelectMarkPlugin",intro:"选中的卡片左上角出现实色圆形标记；打开序号后按点击顺序编号，取消中间一项会重排。",why:"多选必须给一个不会看错的视觉反馈。用实色而不是半透明叠层，是因为叠层在浅色素材上会读不清（对比度不可控）。",plugs:[{fn:"createSelectMarkPlugin",cfg:"showIndex: true",why:"读 ctx.selectedIds 的下标定位序号；不可选素材（处理中/失败）不显示标记。"}],props:["multiple","pageSize={{pageSize}}"],controls:[{key:"multiple",label:"多选",kind:"switch",init:!0,nonLayout:!0},{key:"showIndex",label:"显示序号",kind:"switch",init:!0,nonLayout:!0},{key:"pageSize",label:"每页",kind:"number",init:12,min:6,max:36,step:6}],stageHeight:500},$S=_e("SelectMarkPlugin"),zS=Object.freeze(Object.defineProperty({__proto__:null,default:$S,meta:jS},Symbol.toStringTag,{value:"Module"})),NS={slug:"kind-badge",title:"类型角标",group:"plugin",plugin:"KindBadgePlugin",intro:"缩略图左下角的「图片 / 视频」角标，文案可换，可限定只对某种类型显示。",why:"视频有缩略图、图片也有缩略图，光看图分不出能不能播。角标是最省成本的区分方式。",plugs:[{fn:"createKindBadgePlugin",cfg:'labels: { video: "视频" }, showFor: ["video"]',why:"只给视频加角标：图片是默认情况，标出来反而更吵。"}],props:["pageSize={{pageSize}}"],controls:[{key:"showFor",label:"角标范围",kind:"select",init:"video",options:[{label:"仅视频",value:"video"},{label:"图片 + 视频",value:"both"}],nonLayout:!0},{key:"pageSize",label:"每页",kind:"number",init:12,min:6,max:36,step:6}],stageHeight:480},TS=_e("KindBadgePlugin"),FS=Object.freeze(Object.defineProperty({__proto__:null,default:TS,meta:NS},Symbol.toStringTag,{value:"Module"})),DS={slug:"duration",title:"视频时长",group:"plugin",plugin:"DurationPlugin",intro:"视频卡片右下角显示 01:36 / 04:12 这样的时长；数据里没有 duration 时（fallback 打开）显示占位符而不是留白。",why:"挑视频第一眼看时长。让组件自己去读媒体元数据意味着每张卡都要先下载视频头，等于把列表页变成下载队列。",plugs:[{fn:"createDurationPlugin",cfg:"fallback: true",why:"格式化 秒 → mm:ss 或 h:mm:ss；fallback 决定缺数据时是否占位。"}],props:["pageSize={{pageSize}}"],controls:[{key:"pageSize",label:"每页",kind:"number",init:12,min:6,max:36,step:6}],stageHeight:480,note:"翻到视频所在的页（视频在「视频」文件夹里），或先按类型筛出视频。"},MS=_e("DurationPlugin"),IS=Object.freeze(Object.defineProperty({__proto__:null,default:MS,meta:DS},Symbol.toStringTag,{value:"Module"})),RS={slug:"status-badge",title:"状态角标",group:"plugin",plugin:"StatusBadgePlugin",intro:"转码中 / 处理失败两种状态贴在缩略图右上角，失败项整体压暗；两种状态都不可选，点击也不进入选择集。",why:"「上传完成」不等于「可用」。转码、审核、病毒扫描都可能让素材暂时不可用，状态必须显式表达，否则用户会以为文件丢了。",plugs:[{fn:"createStatusBadgePlugin",cfg:'{ labels: { processing: "转码中", failed: "处理失败" } }',why:"文案可覆盖；ready 恒不显示，避免「每一张都写着就绪」。"}],props:["multiple","pageSize={{pageSize}}"],controls:[{key:"multiple",label:"多选",kind:"switch",init:!0,nonLayout:!0},{key:"pageSize",label:"每页",kind:"number",init:12,min:6,max:36,step:6}],stageHeight:480,note:"示例数据里有 2 个「转码中」和 1 个「处理失败」，都在第一页附近。"},OS=_e("StatusBadgePlugin"),BS=Object.freeze(Object.defineProperty({__proto__:null,default:OS,meta:RS},Symbol.toStringTag,{value:"Module"})),VS={slug:"favorite",title:"收藏标记",group:"plugin",plugin:"FavoritePlugin",intro:"卡片右上角的星标，点一下发出 favorite 动作；是否真的收藏由宿主决定，组件只按 item.favorite 渲染。",why:"收藏几乎是所有素材库的第一需求，但它属于业务状态（存哪、怎么同步、要不要同步到服务端），组件不该假装知道。",plugs:[{fn:"createFavoritePlugin",cfg:'action: "favorite"',why:"纯受控：读 item.favorite，点击只 requestAction，不改任何本地状态。"}],props:[],controls:[],stageHeight:480,note:"这一页的 onAssetAction 把动作写进日志并翻转 item.favorite —— 真实项目里换成你的接口调用即可。"};function US({cfg:e,log:t}){const n=rr("FavoritePlugin",e),[r,i]=y.useState(Ke),l=y.useCallback((o,s)=>{var d;if(o!=="favorite"||!s.id)return;const a=s.id;i(f=>f.map(m=>m.id===a?{...m,favorite:!m.favorite}:m));const c=!((d=r.find(f=>f.id===a))!=null&&d.favorite);t(`${c?"收藏":"取消收藏"} ${a}`)},[r,t]);return u.jsx("div",{className:"stage",children:u.jsx(n,{items:r,folders:at,...nr(e,t),onAssetAction:l})})}const KS=Object.freeze(Object.defineProperty({__proto__:null,default:US,meta:VS},Symbol.toStringTag,{value:"Module"})),HS={slug:"card-actions",title:"卡片操作",group:"plugin",plugin:"CardActionsPlugin",intro:"缩略图右上角一排小按钮：预览 / 下载 / 删除。预览走组件内置浮层，其余动作交给 onAssetAction。",why:"每张卡都要能单独处理。动作名由宿主定义，组件不预设「删除」要不要二次确认 —— 那是你的弹窗。",plugs:[{fn:"createCardActionsPlugin",cfg:'actions: [{ action: "download", label: "下载", icon: "↓" }, { action: "delete", label: "删除", icon: "×", tone: "danger" }]',why:"动作表完全可配；tone: danger 只影响配色，不影响行为。"}],props:[],controls:[],stageHeight:480,note:"点删除不会真的删 —— 这一页的 onAssetAction 只把动作写进日志。"};function WS({cfg:e,log:t}){const n=rr("CardActionsPlugin",e),r=y.useCallback((i,l)=>{t(`动作 ${i} · ${l.id??(l.ids??[]).join(",")}`)},[t]);return u.jsx("div",{className:"stage",children:u.jsx(n,{items:Ke,folders:at,...nr(e,t),onAssetAction:r})})}const QS=Object.freeze(Object.defineProperty({__proto__:null,default:WS,meta:HS},Symbol.toStringTag,{value:"Module"})),GS={slug:"meta-line",title:"卡片元信息",group:"plugin",plugin:"MetaLinePlugin",intro:"标题下面一行小字：体积 / 分辨率 / 文件夹 / 标签。字段可任选组合，缺数据时少一段而不是显示「—」。",why:"挑素材经常要比体积和分辨率。元信息不该塞进标题，也不该在缺数据时留空位 —— 两种情况都会让卡片高低不齐。",plugs:[{fn:"createMetaLinePlugin",cfg:'show: ["size", "dimension", "folder"], maxTags: 2',why:"show 决定段落与顺序；maxTags 控制标签最多几个（多了会换行撑高卡片）。"}],props:["pageSize={{pageSize}}"],controls:[{key:"fields",label:"字段",kind:"select",init:"full",options:[{label:"体积 + 分辨率 + 文件夹",value:"full"},{label:"仅体积",value:"size"}],nonLayout:!0},{key:"pageSize",label:"每页",kind:"number",init:12,min:6,max:36,step:6}],stageHeight:500},qS=_e("MetaLinePlugin"),YS=Object.freeze(Object.defineProperty({__proto__:null,default:qS,meta:GS},Symbol.toStringTag,{value:"Module"})),XS={slug:"bulk-bar",title:"批量操作条",group:"plugin",plugin:"BulkBarPlugin",intro:"选中素材后页脚浮出操作条：已选 N 项 + 批量下载 / 移动到 / 删除。清空选择后自动收起。",why:"多选的意义在批量动作。把动作条固定在页脚而不是顶部，是因为操作对象在下面，视线不用来回跳。",plugs:[{fn:"createBulkBarPlugin",cfg:'label: "已选 {n} 项", actions: [{ action: "bulk:download", label: "批量下载" }, { action: "bulk:delete", label: "批量删除", tone: "danger" }]',why:"文案里的 {n} 会被替换成数量；动作通过 requestAction(action, { ids }) 抛出整批 id。"}],props:["multiple","maxSelected={{maxSelected}}","pageSize={{pageSize}}"],controls:[{key:"multiple",label:"多选",kind:"switch",init:!0,nonLayout:!0},{key:"maxSelected",label:"选择上限",kind:"number",init:0,min:0,max:24,step:1},{key:"pageSize",label:"每页",kind:"number",init:12,min:6,max:24,step:6}],stageHeight:520,note:"点几张卡片，页脚会浮出来；再点「清空」看它收起。"};function ZS({cfg:e,log:t}){const n=rr("BulkBarPlugin",e),r=y.useCallback((i,l)=>{var s;const o=((s=l.ids)==null?void 0:s.length)??(l.id?1:0);t(`${i} · ${o} 项`)},[t]);return u.jsx("div",{className:"stage",children:u.jsx(n,{items:Ke,folders:at,...nr(e,t),onAssetAction:r})})}const JS=Object.freeze(Object.defineProperty({__proto__:null,default:ZS,meta:XS},Symbol.toStringTag,{value:"Module"})),e1={slug:"pagination",title:"分页",group:"plugin",plugin:"PaginationPlugin",intro:"页脚分页器：上一页 / 页码窗口 / 下一页 + 每页条数选择。改每页条数后页码自动回到 1。",why:"素材库动辄几千项，虚拟滚动做不好会丢焦点、丢选中态。分页是最稳的方案，也能让「全选当前页」有明确边界。",plugs:[{fn:"createPaginationPlugin",cfg:"pageSizes: [6, 12, 24]",why:"绑定 ctx.page / ctx.pageCount / ctx.setPage / ctx.setPageSize；window 控制页码窗口宽度。"}],props:["pageSize={{pageSize}}"],controls:[{key:"pageSize",label:"每页",kind:"number",init:12,min:6,max:36,step:6}],stageHeight:560,note:"把每页调到 6，翻到第 5 页，再用搜索框输入「教程」—— 页码会被夹紧，不会停留在空页。"},t1=_e("PaginationPlugin"),n1=Object.freeze(Object.defineProperty({__proto__:null,default:t1,meta:e1},Symbol.toStringTag,{value:"Module"})),r1={slug:"empty-state",title:"空态分叉",group:"plugin",plugin:"EmptyStatePlugin",intro:"把素材清空看「空库」，或搜索一个不存在的关键词看「筛空」—— 两种空态给的出口不一样。",why:"空库时用户该做的是上传，筛空时该做的是清条件。一句「暂无数据」会让用户卡在原地不知道该改什么。",plugs:[{fn:"createEmptyStatePlugin",cfg:'{ clearLabel: "清空筛选" }',why:"单值槽：同一时刻只有一个空态节点生效，多个插件抢这个槽时按 priority 取最高的。"}],props:["pageSize={{pageSize}}"],controls:[{key:"mode",label:"数据源",kind:"select",init:"normal",options:[{label:"有素材",value:"normal"},{label:"空库",value:"empty"}]},{key:"pageSize",label:"每页",kind:"number",init:12,min:6,max:36,step:6}],stageHeight:440,note:"筛空状态：把数据源留在「有素材」，然后在搜索框输入「不存在的关键词」。"},i1=[];function l1({cfg:e,log:t}){const n=rr("EmptyStatePlugin",e),r=y.useMemo(()=>nr(e,t),[e,t]),i=y.useCallback(l=>t(`空态里点上传：收到 ${l.length} 个文件`),[t]);return u.jsx("div",{className:"stage",children:u.jsx(n,{items:e.mode==="empty"?i1:Ke,folders:e.mode==="empty"?[]:at,...r,onUpload:i})})}const o1=Object.freeze(Object.defineProperty({__proto__:null,default:l1,meta:r1},Symbol.toStringTag,{value:"Module"})),s1={slug:"lightbox",title:"大图预览",group:"plugin",plugin:"LightBoxPlugin",intro:"双击任一素材打开大图浮层，浮层里可左右翻、Esc 关闭；关闭后键盘焦点回到打开它的那张卡。",why:"缩略图看不清细节，点开大图是刚需。焦点还原是可访问性的硬要求 —— 否则键盘用户关掉浮层就「丢」在页面顶部。",plugs:[{fn:"createLightBoxPlugin",cfg:"arrows: true, restoreFocus: true",why:"覆盖层槽位的唯一使用者；翻页范围是当前筛选结果，不是当前页。"}],props:["pageSize={{pageSize}}"],controls:[{key:"pageSize",label:"每页",kind:"number",init:12,min:6,max:36,step:6}],stageHeight:520,note:"浮层的翻页范围是「整个筛选结果」，所以翻到第 12 页之后还能继续往后翻。"},a1=_e("LightBoxPlugin"),u1=Object.freeze(Object.defineProperty({__proto__:null,default:a1,meta:s1},Symbol.toStringTag,{value:"Module"})),c1=`/**
 * 示例 00 · 拖拽上传占位
 *
 * 这一页要演示的是「组件只负责收集文件，上传归宿主」：拖进来的文件立刻以
 * \`status: "processing"\` 追加到列表，1.2s 后由页面（假装是宿主的上传接口）
 * 把它们改成 \`ready\`。组件全程不知道有网络请求这回事。
 */
import React, { useCallback, useState } from "react";
import type { AssetItem } from "vane-asset-library";
import { makeUploadingAsset, SAMPLE_ASSETS, SAMPLE_FOLDERS } from "../data/samples";
import { baseProps, useLibrary } from "./_factory";
import type { DemoMeta, DemoStageProps } from "./types";

export const meta: DemoMeta = {
  slug: "dropzone",
  title: "拖拽上传占位",
  group: "plugin",
  plugin: "DropzonePlugin",
  intro:
    "把图片或视频拖到网格上方的虚线区，组件把 File[] 交给 onUpload，剩下的（上传、进度、失败重试）全部归宿主。",
  why: "素材库最常见的入口就是拖拽。内置 XHR 只会逼你在「进度条长什么样」上跟组件打架，所以这里只做占位与回调。",
  plugs: [
    {
      fn: "createDropzonePlugin",
      cfg: 'label: "拖素材到这里，或点击选择", accept: ["image/*", "video/*"]',
      why: "虚线占位 + 点击唤起系统文件选择；accept 决定选文件对话框的过滤条件。",
    },
  ],
  props: [],
  controls: [
    { key: "multiple", label: "允许多选", kind: "switch", init: true },
  ],
  stageHeight: 520,
  note: "演示里「上传」是本地 setTimeout 假装的：真实项目请在 onUpload 里走自己的上传，完成后把新素材合并进 items。",
};

function Stage({ cfg, log }: DemoStageProps) {
  const Library = useLibrary("DropzonePlugin", cfg);
  const [items, setItems] = useState<AssetItem[]>(SAMPLE_ASSETS);

  const onUpload = useCallback(
    (files: File[]) => {
      const added = files.map((_, i) => makeUploadingAsset(i));
      setItems((prev) => [...added, ...prev]);
      log(\`收到 \${files.length} 个文件：\${files.map((f) => f.name).join("、")}\`);

      // 假装上传完成：宿主改了 status，组件只是照着渲染
      window.setTimeout(() => {
        setItems((prev) =>
          prev.map((it) => (it.id.startsWith("up-") ? { ...it, status: "ready" } : it))
        );
        log(\`上传完成，\${added.length} 项转为 ready\`, "info");
      }, 1200);
    },
    [log]
  );

  return (
    <div className="stage">
      <Library
        items={items}
        folders={SAMPLE_FOLDERS}
        {...baseProps(cfg, log)}
        onUpload={onUpload}
      />
    </div>
  );
}

export default Stage;
`,d1=`/**
 * 示例 01 · 搜索
 *
 * 关键词走「标题 + 标签 + 文件名」三路匹配，输入防抖 180ms。
 * 搜索框带 \`/\` 热键：焦点不在任何输入控件时按 \`/\` 直接聚焦，这是素材库的高频动作。
 */
import { makeStage } from "./_factory";
import type { DemoMeta } from "./types";

export const meta: DemoMeta = {
  slug: "search",
  title: "搜索与热键",
  group: "plugin",
  plugin: "SearchPlugin",
  intro:
    "在标题、标签、文件名里做子串匹配，输入后 180ms 才触发筛选；按 / 键从任意位置跳到搜索框。",
  why: "素材一多，找东西的第一动作就是打字。搜索必须支持标签与文件名，只匹配标题等于逼用户记住命名。",
  plugs: [
    {
      fn: "createSearchPlugin",
      cfg: 'placeholder: "搜素材名 / 标签", hotkey: true, debounce: 180',
      why: "工具栏里的输入框；debounce 是插件的本地状态，不污染素材库 state。",
    },
  ],
  props: ["pageSize={{pageSize}}"],
  controls: [
    { key: "pageSize", label: "每页", kind: "number", init: 12, min: 6, max: 36, step: 6 },
    { key: "hotkey", label: "/ 热键", kind: "switch", init: true, nonLayout: true },
    { key: "debounce", label: "防抖(ms)", kind: "number", init: 180, min: 0, max: 600, step: 60, nonLayout: true },
  ],
  stageHeight: 560,
  note: "搜索框输入「教程」试试：它命中的是标签，不是标题。",
};

export default makeStage("SearchPlugin");
`,f1=`/**
 * 示例 02 · 按类型筛选
 *
 * 图片 / 视频 / 全部，单选段控。切换时页码自动回到 1 —— 否则在第 4 页切类型会看到空白。
 */
import { makeStage } from "./_factory";
import type { DemoMeta } from "./types";

export const meta: DemoMeta = {
  slug: "kind-filter",
  title: "按类型筛选",
  group: "plugin",
  plugin: "KindFilterPlugin",
  intro:
    "工具栏里的「全部 / 图片 / 视频」段控，一次只生效一种类型；切换时页码回到第 1 页。",
  why: "素材库至少有两种介质。用段控而不是复选，是因为「同时看图又看视频」几乎没有真实需求，却会让状态多一层。",
  plugs: [
    {
      fn: "createKindFilterPlugin",
      cfg: 'allLabel: "全部"',
      why: "绑定 ctx.kinds 与 ctx.toggleKind；数量角标取自归一化后的素材统计。",
    },
  ],
  props: ["pageSize={{pageSize}}"],
  controls: [
    { key: "pageSize", label: "每页", kind: "number", init: 12, min: 6, max: 36, step: 6 },
  ],
  stageHeight: 520,
};

export default makeStage("KindFilterPlugin");
`,p1=`/**
 * 示例 03 · 标签筛选
 *
 * 标签按出现次数倒序，只展示前 N 个；选中多个标签是「或」关系（任一命中即保留）。
 */
import { makeStage } from "./_factory";
import type { DemoMeta } from "./types";

export const meta: DemoMeta = {
  slug: "tag-filter",
  title: "标签筛选",
  group: "plugin",
  plugin: "TagFilterPlugin",
  intro:
    "工具条里一排标签 chip，按出现次数倒序取前 6 个；点选多个标签取并集，再点一次取消。",
  why: "标签是运营自己维护的维度，比文件夹细、比搜索快。用「或」而不是「与」，是因为多选标签时用户想看的是「这几类我都关心」。",
  plugs: [
    {
      fn: "createTagFilterPlugin",
      cfg: 'max: 6, sort: "count"',
      why: "max 控制展示条数（避免工具条被 40 个标签撑爆），sort 决定倒序还是按名。",
    },
  ],
  props: ["pageSize={{pageSize}}"],
  controls: [
    { key: "max", label: "展示标签数", kind: "number", init: 6, min: 3, max: 12, step: 1 },
    {
      key: "sort",
      label: "排序",
      kind: "select",
      init: "count",
      options: [
        { label: "按出现次数", value: "count" },
        { label: "按名称", value: "name" },
      ],
      nonLayout: true,
    },
    { key: "pageSize", label: "每页", kind: "number", init: 12, min: 6, max: 36, step: 6 },
  ],
  stageHeight: 540,
  note: "标签筛选与类型筛选、文件夹、搜索是叠加关系，四个条件同时生效。",
};

export default makeStage("TagFilterPlugin");
`,g1=`/**
 * 示例 04 · 文件夹导航
 *
 * 文件夹数量由 items 现算（宿主传了 count 就用宿主的），空文件夹默认仍然显示 ——
 * 素材库的「空文件夹」本身是信息，藏起来会让人以为文件夹被删了。
 */
import { makeStage } from "./_factory";
import type { DemoMeta } from "./types";

export const meta: DemoMeta = {
  slug: "folder-filter",
  title: "文件夹导航",
  group: "plugin",
  plugin: "FolderFilterPlugin",
  intro:
    "工具栏左侧的文件夹下拉，「全部素材」加四个分组，每项带实时数量；数量来自 items 现算，不看后端脸色。",
  why: "素材库的分组维度通常是「谁负责 / 用在哪」，比标签更稳定。数量现算可以避免宿主忘了同步 count 造成的空白感。",
  plugs: [
    {
      fn: "createFolderFilterPlugin",
      cfg: 'allLabel: "全部素材", hideEmpty: false',
      why: "绑定 ctx.folderId 与 ctx.setFolder；数量由 normalizeFolders + filterAssets 的中间结果算出。",
    },
  ],
  props: ["pageSize={{pageSize}}"],
  controls: [
    { key: "pageSize", label: "每页", kind: "number", init: 12, min: 6, max: 36, step: 6 },
  ],
  stageHeight: 520,
};

export default makeStage("FolderFilterPlugin");
`,m1=`/**
 * 示例 05 · 排序
 *
 * 四个排序键：名称 / 创建时间 / 体积 / 时长。缺值的素材恒沉底（不管是升序还是降序），
 * 否则「按时长排」会把一堆没有时长的图片顶到最前面。
 */
import { makeStage } from "./_factory";
import type { DemoMeta } from "./types";

export const meta: DemoMeta = {
  slug: "sort",
  title: "排序",
  group: "plugin",
  plugin: "SortPlugin",
  intro:
    "排序键可在名称 / 创建时间 / 体积 / 时长之间切换，方向再点一次取反；缺该字段的素材永远排在最后。",
  why: "「最近的素材」和「最大的素材」是两个完全不同的找东西场景。缺值恒沉底是硬约束 —— 否则图片会被「按时长排」挤成一堆。",
  plugs: [
    {
      fn: "createSortPlugin",
      why: "绑定 ctx.sortKey / ctx.sortDir 与 setSort；图标用纯文本箭头，不引图标库。",
    },
  ],
  props: ["pageSize={{pageSize}}"],
  controls: [
    { key: "pageSize", label: "每页", kind: "number", init: 12, min: 6, max: 36, step: 6 },
  ],
  stageHeight: 520,
  note: "排序是稳定排序：同值时保持传入顺序，不会在翻页时跳来跳去。",
};

export default makeStage("SortPlugin");
`,h1=`/**
 * 示例 06 · 视图切换
 *
 * 网格 / 列表两种视图共用同一份卡片数据，只是 Core 换了渲染分支。
 * 单视图模式下（views: ["grid"]）插件不渲染任何东西 —— 没有可选项的段控是噪音。
 */
import { makeStage } from "./_factory";
import type { DemoMeta } from "./types";

export const meta: DemoMeta = {
  slug: "view-switch",
  title: "网格 / 列表切换",
  group: "plugin",
  plugin: "ViewSwitchPlugin",
  intro:
    "同一个素材墙在「网格」与「列表」之间切换。列表视图把每项压成一行，适合快速核对文件名与体积。",
  why: "挑图要网格，对账要列表。让视图成为状态而不是两套组件，插件才能同时作用于两种视图。",
  plugs: [
    {
      fn: "createViewSwitchPlugin",
      cfg: 'views: ["grid", "list"]',
      why: "绑定 ctx.view / ctx.setView；views 只有一个元素时插件自动隐身。",
    },
  ],
  props: ["pageSize={{pageSize}}"],
  controls: [
    {
      key: "views",
      label: "可选视图",
      kind: "select",
      init: "both",
      options: [
        { label: "网格 + 列表", value: "both" },
        { label: "仅网格", value: "grid" },
      ],
      nonLayout: true,
    },
    { key: "pageSize", label: "每页", kind: "number", init: 12, min: 6, max: 36, step: 6 },
  ],
  stageHeight: 520,
};

export default makeStage("ViewSwitchPlugin");
`,y1=`/**
 * 示例 07 · 数量统计
 *
 * 三段读数可单独开关：总量 / 当前筛出 / 已选。都在筛选与选择之后计算，
 * 所以「筛出 6」是筛选后的数量，不是总数。
 */
import { makeStage } from "./_factory";
import type { DemoMeta } from "./types";

export const meta: DemoMeta = {
  slug: "count",
  title: "数量统计",
  group: "plugin",
  plugin: "CountPlugin",
  intro:
    "工具条右侧的读数条：总量、当前筛出、已选。三段可以单独关掉，分隔符可换。",
  why: "筛选之后用户需要立刻知道「还剩多少」，否则会怀疑是不是筛空了。已选数量是批量操作前的确认位。",
  plugs: [
    {
      fn: "createCountPlugin",
      cfg: "showTotal: true, showVisible: true, showSelected: true",
      why: "读 ctx.total / ctx.filtered.length / ctx.selectedIds.length，不自己算。",
    },
  ],
  props: ["pageSize={{pageSize}}"],
  controls: [
    { key: "showTotal", label: "总量", kind: "switch", init: true, nonLayout: true },
    { key: "showVisible", label: "筛出", kind: "switch", init: true, nonLayout: true },
    { key: "showSelected", label: "已选", kind: "switch", init: true, nonLayout: true },
    { key: "pageSize", label: "每页", kind: "number", init: 12, min: 6, max: 36, step: 6 },
  ],
  stageHeight: 500,
};

export default makeStage("CountPlugin");
`,v1=`/**
 * 示例 08 · 全选当前页
 *
 * 「全选」只作用于当前页里 \`status === "ready"\` 的项：未就绪的素材不该被批量删除。
 * 已被 maxSelected 卡住的项会被跳过，且不弹提示 —— 上限是宿主定的规则，不该在卡片层吵。
 */
import { makeStage } from "./_factory";
import type { DemoMeta } from "./types";

export const meta: DemoMeta = {
  slug: "select-all",
  title: "全选当前页",
  group: "plugin",
  plugin: "SelectAllPlugin",
  intro:
    "一键选中当前页所有「就绪」素材，再点一次清空。处理中 / 失败的素材不会被卷进来。",
  why: "批量下载、批量移动都需要一个「这一页我都要」的入口。全选范围限定当前页，是为了跟分页的语义对齐。",
  plugs: [
    {
      fn: "createSelectAllPlugin",
      why: "调 ctx.selectAllVisible() / ctx.clearSelection()；是否显示取决于当前页有无可选且未选的项。",
    },
  ],
  props: ["multiple", "maxSelected={{maxSelected}}", "pageSize={{pageSize}}"],
  controls: [
    { key: "multiple", label: "多选", kind: "switch", init: true, nonLayout: true },
    { key: "maxSelected", label: "选择上限", kind: "number", init: 12, min: 0, max: 24, step: 1 },
    { key: "pageSize", label: "每页", kind: "number", init: 12, min: 6, max: 24, step: 6 },
  ],
  stageHeight: 500,
  note: "把上限调到 3 再点全选：只有前 3 个就绪项被选中，其余静默跳过，日志里能数出来。",
};

export default makeStage("SelectAllPlugin");
`,w1=`/**
 * 示例 09 · 选择序号
 *
 * 选中卡片左上角出现圆形标记，可切换成「1 / 2 / 3」的序号 —— 顺序就是用户点击顺序，
 * 批量插入编辑器时，序号本身有语义。
 */
import { makeStage } from "./_factory";
import type { DemoMeta } from "./types";

export const meta: DemoMeta = {
  slug: "select-mark",
  title: "选择标记与序号",
  group: "plugin",
  plugin: "SelectMarkPlugin",
  intro:
    "选中的卡片左上角出现实色圆形标记；打开序号后按点击顺序编号，取消中间一项会重排。",
  why: "多选必须给一个不会看错的视觉反馈。用实色而不是半透明叠层，是因为叠层在浅色素材上会读不清（对比度不可控）。",
  plugs: [
    {
      fn: "createSelectMarkPlugin",
      cfg: "showIndex: true",
      why: "读 ctx.selectedIds 的下标定位序号；不可选素材（处理中/失败）不显示标记。",
    },
  ],
  props: ["multiple", "pageSize={{pageSize}}"],
  controls: [
    { key: "multiple", label: "多选", kind: "switch", init: true, nonLayout: true },
    { key: "showIndex", label: "显示序号", kind: "switch", init: true, nonLayout: true },
    { key: "pageSize", label: "每页", kind: "number", init: 12, min: 6, max: 36, step: 6 },
  ],
  stageHeight: 500,
};

export default makeStage("SelectMarkPlugin");
`,x1=`/**
 * 示例 10 · 类型角标
 *
 * 图片 / 视频角标贴在缩略图左下角。只有一种介质时应该关掉它 —— 全是图片的库上
 * 每个卡片都写「图片」是在制造噪音。
 */
import { makeStage } from "./_factory";
import type { DemoMeta } from "./types";

export const meta: DemoMeta = {
  slug: "kind-badge",
  title: "类型角标",
  group: "plugin",
  plugin: "KindBadgePlugin",
  intro: "缩略图左下角的「图片 / 视频」角标，文案可换，可限定只对某种类型显示。",
  why: "视频有缩略图、图片也有缩略图，光看图分不出能不能播。角标是最省成本的区分方式。",
  plugs: [
    {
      fn: "createKindBadgePlugin",
      cfg: 'labels: { video: "视频" }, showFor: ["video"]',
      why: "只给视频加角标：图片是默认情况，标出来反而更吵。",
    },
  ],
  props: ["pageSize={{pageSize}}"],
  controls: [
    {
      key: "showFor",
      label: "角标范围",
      kind: "select",
      init: "video",
      options: [
        { label: "仅视频", value: "video" },
        { label: "图片 + 视频", value: "both" },
      ],
      nonLayout: true,
    },
    { key: "pageSize", label: "每页", kind: "number", init: 12, min: 6, max: 36, step: 6 },
  ],
  stageHeight: 480,
};

export default makeStage("KindBadgePlugin");
`,S1=`/**
 * 示例 11 · 视频时长
 *
 * 时长是素材数据的一部分（宿主写入 \`duration\`，单位秒），组件不读媒体元数据 ——
 * 读元数据要先下载视频，素材列表里这么干会拖垮首屏。
 */
import { makeStage } from "./_factory";
import type { DemoMeta } from "./types";

export const meta: DemoMeta = {
  slug: "duration",
  title: "视频时长",
  group: "plugin",
  plugin: "DurationPlugin",
  intro:
    "视频卡片右下角显示 01:36 / 04:12 这样的时长；数据里没有 duration 时（fallback 打开）显示占位符而不是留白。",
  why: "挑视频第一眼看时长。让组件自己去读媒体元数据意味着每张卡都要先下载视频头，等于把列表页变成下载队列。",
  plugs: [
    {
      fn: "createDurationPlugin",
      cfg: "fallback: true",
      why: "格式化 秒 → mm:ss 或 h:mm:ss；fallback 决定缺数据时是否占位。",
    },
  ],
  props: ["pageSize={{pageSize}}"],
  controls: [
    { key: "pageSize", label: "每页", kind: "number", init: 12, min: 6, max: 36, step: 6 },
  ],
  stageHeight: 480,
  note: "翻到视频所在的页（视频在「视频」文件夹里），或先按类型筛出视频。",
};

export default makeStage("DurationPlugin");
`,k1=`/**
 * 示例 12 · 状态角标
 *
 * ready 不显示任何东西；processing 显示「转码中」，failed 显示「处理失败」并压一层遮罩。
 * 状态为 processing / failed 的素材不可选 —— 选一个还不能用的素材，批量操作必然失败。
 */
import { makeStage } from "./_factory";
import type { DemoMeta } from "./types";

export const meta: DemoMeta = {
  slug: "status-badge",
  title: "状态角标",
  group: "plugin",
  plugin: "StatusBadgePlugin",
  intro:
    "转码中 / 处理失败两种状态贴在缩略图右上角，失败项整体压暗；两种状态都不可选，点击也不进入选择集。",
  why: "「上传完成」不等于「可用」。转码、审核、病毒扫描都可能让素材暂时不可用，状态必须显式表达，否则用户会以为文件丢了。",
  plugs: [
    {
      fn: "createStatusBadgePlugin",
      cfg: '{ labels: { processing: "转码中", failed: "处理失败" } }',
      why: "文案可覆盖；ready 恒不显示，避免「每一张都写着就绪」。",
    },
  ],
  props: ["multiple", "pageSize={{pageSize}}"],
  controls: [
    { key: "multiple", label: "多选", kind: "switch", init: true, nonLayout: true },
    { key: "pageSize", label: "每页", kind: "number", init: 12, min: 6, max: 36, step: 6 },
  ],
  stageHeight: 480,
  note: "示例数据里有 2 个「转码中」和 1 个「处理失败」，都在第一页附近。",
};

export default makeStage("StatusBadgePlugin");
`,P1=`/**
 * 示例 13 · 收藏
 *
 * 组件不存收藏状态：点星标 → \`onAssetAction("favorite", { id })\` → 宿主翻转
 * \`item.favorite\` → 组件按新数据重渲染。这一页用页面状态扮演宿主。
 */
import React, { useCallback, useState } from "react";
import type { AssetItem } from "vane-asset-library";
import { SAMPLE_ASSETS, SAMPLE_FOLDERS } from "../data/samples";
import { baseProps, useLibrary } from "./_factory";
import type { DemoMeta, DemoStageProps } from "./types";

export const meta: DemoMeta = {
  slug: "favorite",
  title: "收藏标记",
  group: "plugin",
  plugin: "FavoritePlugin",
  intro:
    "卡片右上角的星标，点一下发出 favorite 动作；是否真的收藏由宿主决定，组件只按 item.favorite 渲染。",
  why: "收藏几乎是所有素材库的第一需求，但它属于业务状态（存哪、怎么同步、要不要同步到服务端），组件不该假装知道。",
  plugs: [
    {
      fn: "createFavoritePlugin",
      cfg: 'action: "favorite"',
      why: "纯受控：读 item.favorite，点击只 requestAction，不改任何本地状态。",
    },
  ],
  props: [],
  controls: [],
  stageHeight: 480,
  note: "这一页的 onAssetAction 把动作写进日志并翻转 item.favorite —— 真实项目里换成你的接口调用即可。",
};

function Stage({ cfg, log }: DemoStageProps) {
  const Library = useLibrary("FavoritePlugin", cfg);
  const [items, setItems] = useState<AssetItem[]>(SAMPLE_ASSETS);

  const onAssetAction = useCallback(
    (action: string, payload: { id?: string; ids?: string[] }) => {
      if (action !== "favorite" || !payload.id) return;
      const target = payload.id;
      setItems((prev) =>
        prev.map((it) => (it.id === target ? { ...it, favorite: !it.favorite } : it))
      );
      const next = !items.find((it) => it.id === target)?.favorite;
      log(\`\${next ? "收藏" : "取消收藏"} \${target}\`);
    },
    [items, log]
  );

  return (
    <div className="stage">
      <Library
        items={items}
        folders={SAMPLE_FOLDERS}
        {...baseProps(cfg, log)}
        onAssetAction={onAssetAction}
      />
    </div>
  );
}

export default Stage;
`,b1=`/**
 * 示例 14 · 卡片操作
 *
 * 预览在组件内部闭环（打开 LightBox），下载 / 重命名 / 删除一律抛给宿主。
 * 按钮常驻可见而不是 hover 才出现 —— hover-only 的按钮在触摸屏上等于不存在。
 */
import React, { useCallback } from "react";
import { SAMPLE_ASSETS, SAMPLE_FOLDERS } from "../data/samples";
import { baseProps, useLibrary } from "./_factory";
import type { DemoMeta, DemoStageProps } from "./types";

export const meta: DemoMeta = {
  slug: "card-actions",
  title: "卡片操作",
  group: "plugin",
  plugin: "CardActionsPlugin",
  intro:
    "缩略图右上角一排小按钮：预览 / 下载 / 删除。预览走组件内置浮层，其余动作交给 onAssetAction。",
  why: "每张卡都要能单独处理。动作名由宿主定义，组件不预设「删除」要不要二次确认 —— 那是你的弹窗。",
  plugs: [
    {
      fn: "createCardActionsPlugin",
      cfg: 'actions: [{ action: "download", label: "下载", icon: "↓" }, { action: "delete", label: "删除", icon: "×", tone: "danger" }]',
      why: "动作表完全可配；tone: danger 只影响配色，不影响行为。",
    },
  ],
  props: [],
  controls: [],
  stageHeight: 480,
  note: "点删除不会真的删 —— 这一页的 onAssetAction 只把动作写进日志。",
};

function Stage({ cfg, log }: DemoStageProps) {
  const Library = useLibrary("CardActionsPlugin", cfg);

  const onAssetAction = useCallback(
    (action: string, payload: { id?: string; ids?: string[] }) => {
      log(\`动作 \${action} · \${payload.id ?? (payload.ids ?? []).join(",")}\`);
    },
    [log]
  );

  return (
    <div className="stage">
      <Library
        items={SAMPLE_ASSETS}
        folders={SAMPLE_FOLDERS}
        {...baseProps(cfg, log)}
        onAssetAction={onAssetAction}
      />
    </div>
  );
}

export default Stage;
`,_1=`/**
 * 示例 15 · 元信息行
 *
 * 只呈现数据里已有的字段：缺 width/height 就不写分辨率，缺 folderName 就少一段。
 * 分隔点用 CSS 伪元素生成，避免拼字符串时首尾多出一个点。
 */
import { makeStage } from "./_factory";
import type { DemoMeta } from "./types";

export const meta: DemoMeta = {
  slug: "meta-line",
  title: "卡片元信息",
  group: "plugin",
  plugin: "MetaLinePlugin",
  intro:
    "标题下面一行小字：体积 / 分辨率 / 文件夹 / 标签。字段可任选组合，缺数据时少一段而不是显示「—」。",
  why: "挑素材经常要比体积和分辨率。元信息不该塞进标题，也不该在缺数据时留空位 —— 两种情况都会让卡片高低不齐。",
  plugs: [
    {
      fn: "createMetaLinePlugin",
      cfg: 'show: ["size", "dimension", "folder"], maxTags: 2',
      why: "show 决定段落与顺序；maxTags 控制标签最多几个（多了会换行撑高卡片）。",
    },
  ],
  props: ["pageSize={{pageSize}}"],
  controls: [
    {
      key: "fields",
      label: "字段",
      kind: "select",
      init: "full",
      options: [
        { label: "体积 + 分辨率 + 文件夹", value: "full" },
        { label: "仅体积", value: "size" },
      ],
      nonLayout: true,
    },
    { key: "pageSize", label: "每页", kind: "number", init: 12, min: 6, max: 36, step: 6 },
  ],
  stageHeight: 500,
};

export default makeStage("MetaLinePlugin");
`,C1=`/**
 * 示例 16 · 批量操作条
 *
 * 未选择时页脚不渲染任何东西：空着占一行会把网格往下推，页面每次点选都「跳」一下。
 * 所有动作名带 \`bulk:\` 前缀，宿主据此区分单卡操作与批量操作。
 */
import React, { useCallback } from "react";
import { SAMPLE_ASSETS, SAMPLE_FOLDERS } from "../data/samples";
import { baseProps, useLibrary } from "./_factory";
import type { DemoMeta, DemoStageProps } from "./types";

export const meta: DemoMeta = {
  slug: "bulk-bar",
  title: "批量操作条",
  group: "plugin",
  plugin: "BulkBarPlugin",
  intro:
    "选中素材后页脚浮出操作条：已选 N 项 + 批量下载 / 移动到 / 删除。清空选择后自动收起。",
  why: "多选的意义在批量动作。把动作条固定在页脚而不是顶部，是因为操作对象在下面，视线不用来回跳。",
  plugs: [
    {
      fn: "createBulkBarPlugin",
      cfg: 'label: "已选 {n} 项", actions: [{ action: "bulk:download", label: "批量下载" }, { action: "bulk:delete", label: "批量删除", tone: "danger" }]',
      why: "文案里的 {n} 会被替换成数量；动作通过 requestAction(action, { ids }) 抛出整批 id。",
    },
  ],
  props: ["multiple", "maxSelected={{maxSelected}}", "pageSize={{pageSize}}"],
  controls: [
    { key: "multiple", label: "多选", kind: "switch", init: true, nonLayout: true },
    { key: "maxSelected", label: "选择上限", kind: "number", init: 0, min: 0, max: 24, step: 1 },
    { key: "pageSize", label: "每页", kind: "number", init: 12, min: 6, max: 24, step: 6 },
  ],
  stageHeight: 520,
  note: "点几张卡片，页脚会浮出来；再点「清空」看它收起。",
};

function Stage({ cfg, log }: DemoStageProps) {
  const Library = useLibrary("BulkBarPlugin", cfg);

  const onAssetAction = useCallback(
    (action: string, payload: { id?: string; ids?: string[] }) => {
      const count = payload.ids?.length ?? (payload.id ? 1 : 0);
      log(\`\${action} · \${count} 项\`);
    },
    [log]
  );

  return (
    <div className="stage">
      <Library
        items={SAMPLE_ASSETS}
        folders={SAMPLE_FOLDERS}
        {...baseProps(cfg, log)}
        onAssetAction={onAssetAction}
      />
    </div>
  );
}

export default Stage;
`,E1=`/**
 * 示例 17 · 分页
 *
 * page 越界会被夹紧到有效范围：筛选把结果从 48 项缩到 6 项时，停在第 4 页不会白屏。
 * 分页器是「页码窗口」式（当前页左右各两页 + 首尾），不是把所有页平铺。
 */
import { makeStage } from "./_factory";
import type { DemoMeta } from "./types";

export const meta: DemoMeta = {
  slug: "pagination",
  title: "分页",
  group: "plugin",
  plugin: "PaginationPlugin",
  intro:
    "页脚分页器：上一页 / 页码窗口 / 下一页 + 每页条数选择。改每页条数后页码自动回到 1。",
  why: "素材库动辄几千项，虚拟滚动做不好会丢焦点、丢选中态。分页是最稳的方案，也能让「全选当前页」有明确边界。",
  plugs: [
    {
      fn: "createPaginationPlugin",
      cfg: "pageSizes: [6, 12, 24]",
      why: "绑定 ctx.page / ctx.pageCount / ctx.setPage / ctx.setPageSize；window 控制页码窗口宽度。",
    },
  ],
  props: ["pageSize={{pageSize}}"],
  controls: [
    { key: "pageSize", label: "每页", kind: "number", init: 12, min: 6, max: 36, step: 6 },
  ],
  stageHeight: 560,
  note: "把每页调到 6，翻到第 5 页，再用搜索框输入「教程」—— 页码会被夹紧，不会停留在空页。",
};

export default makeStage("PaginationPlugin");
`,A1=`/**
 * 示例 18 · 空态分叉
 *
 * 两种空态必须分开：库里真的没素材（empty）→ 引导上传；
 * 筛出来 0 条（filtered）→ 给「清空筛选」。用同一句「暂无数据」是产品事故。
 */
import React, { useCallback, useMemo } from "react";
import type { AssetItem } from "vane-asset-library";
import { SAMPLE_ASSETS, SAMPLE_FOLDERS } from "../data/samples";
import { baseProps, useLibrary } from "./_factory";
import type { DemoMeta, DemoStageProps } from "./types";

export const meta: DemoMeta = {
  slug: "empty-state",
  title: "空态分叉",
  group: "plugin",
  plugin: "EmptyStatePlugin",
  intro:
    "把素材清空看「空库」，或搜索一个不存在的关键词看「筛空」—— 两种空态给的出口不一样。",
  why: "空库时用户该做的是上传，筛空时该做的是清条件。一句「暂无数据」会让用户卡在原地不知道该改什么。",
  plugs: [
    {
      fn: "createEmptyStatePlugin",
      cfg: '{ clearLabel: "清空筛选" }',
      why: "单值槽：同一时刻只有一个空态节点生效，多个插件抢这个槽时按 priority 取最高的。",
    },
  ],
  props: ["pageSize={{pageSize}}"],
  controls: [
    {
      key: "mode",
      label: "数据源",
      kind: "select",
      init: "normal",
      options: [
        { label: "有素材", value: "normal" },
        { label: "空库", value: "empty" },
      ],
    },
    { key: "pageSize", label: "每页", kind: "number", init: 12, min: 6, max: 36, step: 6 },
  ],
  stageHeight: 440,
  note: "筛空状态：把数据源留在「有素材」，然后在搜索框输入「不存在的关键词」。",
};

const NO_ITEMS: AssetItem[] = [];

function Stage({ cfg, log }: DemoStageProps) {
  const Library = useLibrary("EmptyStatePlugin", cfg);
  // 用同一份 props 对象：切数据源时只换 items，不重建装配
  const props = useMemo(() => baseProps(cfg, log), [cfg, log]);
  const onUpload = useCallback(
    (files: File[]) => log(\`空态里点上传：收到 \${files.length} 个文件\`),
    [log]
  );

  return (
    <div className="stage">
      <Library
        items={cfg.mode === "empty" ? NO_ITEMS : SAMPLE_ASSETS}
        folders={cfg.mode === "empty" ? [] : SAMPLE_FOLDERS}
        {...props}
        onUpload={onUpload}
      />
    </div>
  );
}

export default Stage;
`,L1=`/**
 * 示例 19 · 大图预览
 *
 * 双击卡片（或按 Enter）打开浮层：Esc 关闭、左右方向键换图、关闭后焦点回到原来那张卡。
 * 浮层挂在容器内部而不是 portal 到 body —— 这样容器的 CSS 作用域与主题令牌都还在。
 */
import { makeStage } from "./_factory";
import type { DemoMeta } from "./types";

export const meta: DemoMeta = {
  slug: "lightbox",
  title: "大图预览",
  group: "plugin",
  plugin: "LightBoxPlugin",
  intro:
    "双击任一素材打开大图浮层，浮层里可左右翻、Esc 关闭；关闭后键盘焦点回到打开它的那张卡。",
  why: "缩略图看不清细节，点开大图是刚需。焦点还原是可访问性的硬要求 —— 否则键盘用户关掉浮层就「丢」在页面顶部。",
  plugs: [
    {
      fn: "createLightBoxPlugin",
      cfg: "arrows: true, restoreFocus: true",
      why: "覆盖层槽位的唯一使用者；翻页范围是当前筛选结果，不是当前页。",
    },
  ],
  props: ["pageSize={{pageSize}}"],
  controls: [
    { key: "pageSize", label: "每页", kind: "number", init: 12, min: 6, max: 36, step: 6 },
  ],
  stageHeight: 520,
  note: "浮层的翻页范围是「整个筛选结果」，所以翻到第 12 页之后还能继续往后翻。",
};

export default makeStage("LightBoxPlugin");
`,j1=Object.assign({"./00-dropzone.tsx":lS,"./01-search.tsx":aS,"./02-kind-filter.tsx":dS,"./03-tag-filter.tsx":gS,"./04-folder-filter.tsx":yS,"./05-sort.tsx":xS,"./06-view-switch.tsx":PS,"./07-count.tsx":CS,"./08-select-all.tsx":LS,"./09-select-mark.tsx":zS,"./10-kind-badge.tsx":FS,"./11-duration.tsx":IS,"./12-status-badge.tsx":BS,"./13-favorite.tsx":KS,"./14-card-actions.tsx":QS,"./15-meta-line.tsx":YS,"./16-bulk-bar.tsx":JS,"./17-pagination.tsx":n1,"./18-empty-state.tsx":o1,"./19-lightbox.tsx":u1}),$1=Object.assign({"./00-dropzone.tsx":c1,"./01-search.tsx":d1,"./02-kind-filter.tsx":f1,"./03-tag-filter.tsx":p1,"./04-folder-filter.tsx":g1,"./05-sort.tsx":m1,"./06-view-switch.tsx":h1,"./07-count.tsx":y1,"./08-select-all.tsx":v1,"./09-select-mark.tsx":w1,"./10-kind-badge.tsx":x1,"./11-duration.tsx":S1,"./12-status-badge.tsx":k1,"./13-favorite.tsx":P1,"./14-card-actions.tsx":b1,"./15-meta-line.tsx":_1,"./16-bulk-bar.tsx":C1,"./17-pagination.tsx":E1,"./18-empty-state.tsx":A1,"./19-lightbox.tsx":L1}),z1=e=>e.replace(/^\.\//,""),fs=Object.entries(j1).map(([e,t])=>{const n=z1(e);return{meta:t.meta,Stage:t.default,file:n,source:$1[e]??""}}).sort((e,t)=>e.file.localeCompare(t.file)),N1=Array.from(new Set(fs.map(e=>e.meta.group))),ps={basic:{label:"基础功能",hint:"Core 自身的 props"},advanced:{label:"高级功能",hint:"受控选择 / 键盘 / 空态"},plugin:{label:"插件功能",hint:"一插件一页"}};function fc(e){const t={};for(const n of e.controls??[])t[n.key]=n.init;return t}const T1=`/* eslint-disable react-refresh/only-export-components -- 插件工厂文件必然同时导出工厂与内部视图组件；库产物不走应用层 HMR，该规则在此为误报 */
import React from "react";
import type { PluginDoc } from "vane-plugin-core";
import type {
  AssetLibraryContext,
  AssetPlugin,
  AssetPluginCreator,
} from "../../components/AssetLibraryPlugin/plugins/types";
import doc from "./doc.json";

/**
 * BulkBarPlugin — 批量操作条（页脚）。
 *
 * 未选择时不渲染任何东西：页脚空占一行会把网格往下推 30px，页面会「跳」。
 * 所有操作名带 \`bulk:\` 前缀，宿主据此区分「单卡操作」与「批量操作」，
 * 不必猜 payload 里的 id 是单个还是数组。
 */
export interface BulkAction {
  action: string;
  label: string;
  tone?: "default" | "danger";
}

export interface BulkBarConfig {
  actions?: BulkAction[];
  /** 已选文案，\`{n}\` 会被替换成数量 */
  label?: string;
}

const DEFAULT_ACTIONS: BulkAction[] = [
  { action: "bulk:download", label: "批量下载" },
  { action: "bulk:delete", label: "批量删除", tone: "danger" },
];

function BulkBarView({
  ctx,
  actions,
  label,
}: {
  ctx: AssetLibraryContext;
  actions: BulkAction[];
  label: string;
}) {
  const count = ctx.selectedIds.length;
  if (!count) return null;

  return (
    <div className="vc-asset-footer" role="region" aria-label="批量操作">
      <span className="vc-asset-count" role="status" aria-live="polite">
        {label.replace("{n}", String(count))}
      </span>
      {actions.map((entry) => (
        <button
          key={entry.action}
          type="button"
          className="vc-asset-btn"
          data-tone={entry.tone}
          onClick={() => ctx.requestAction(entry.action, { ids: ctx.selectedIds })}
        >
          {entry.label}
        </button>
      ))}
      <button type="button" className="vc-asset-btn" onClick={() => ctx.clearSelection()}>
        清空选择
      </button>
    </div>
  );
}

export const createBulkBarPlugin: AssetPluginCreator<BulkBarConfig> = (config = {}) => {
  const actions = config.actions?.length ? config.actions : DEFAULT_ACTIONS;
  const label = config.label ?? "已选 {n} 项";

  return {
    name: "bulk-bar",
    version: "0.1.0",
    description: doc.description,
    priority: 30,
    config,
    hooks: {
      renderFooter: (context) => (
        <BulkBarView ctx={context} actions={actions} label={label} />
      ),
    },
  } satisfies AssetPlugin;
};

createBulkBarPlugin.meta = doc as PluginDoc;
`,F1=`/* eslint-disable react-refresh/only-export-components -- 插件工厂文件必然同时导出工厂与内部视图组件；库产物不走应用层 HMR，该规则在此为误报 */
import React from "react";
import type { PluginDoc } from "vane-plugin-core";
import type {
  AssetItem,
  AssetLibraryContext,
  AssetPlugin,
  AssetPluginCreator,
} from "../../components/AssetLibraryPlugin/plugins/types";
import { stop } from "../_shared/ui";
import doc from "./doc.json";

/**
 * CardActionsPlugin — 卡片操作（预览 / 下载 / 删除…）。
 *
 * \`preview\` 是唯一在组件内部闭环的动作（打开 LightBox 浮层）；
 * 其余动作一律通过 \`ctx.requestAction(name, { id })\` 抛给宿主 —— 组件不知道
 * 你的下载接口、删除确认弹窗长什么样，装作知道只会逼宿主绕开组件。
 *
 * 按钮常驻可见而不是 hover 才出现：hover-only 的按钮在触摸设备上等于不存在，
 * 也会被对比度体检判成不可读。
 */
export interface CardAction {
  /** 传给 onAssetAction 的动作名 */
  action: string;
  label: string;
  /** 纯文本图标（不引图标库，省体积） */
  icon?: string;
  tone?: "default" | "danger";
}

export interface CardActionsConfig {
  actions?: CardAction[];
}

const DEFAULT_ACTIONS: CardAction[] = [
  { action: "preview", label: "预览", icon: "⌕" },
  { action: "download", label: "下载", icon: "↓" },
  { action: "delete", label: "删除", icon: "×", tone: "danger" },
];

function CardActionsView({
  ctx,
  item,
  actions,
}: {
  ctx: AssetLibraryContext;
  item: AssetItem;
  actions: CardAction[];
}) {
  return (
    <div className="vc-asset-actions" role="group" aria-label={\`\${item.title ?? item.id} 操作\`}>
      {actions.map((entry) => (
        <button
          key={entry.action}
          type="button"
          className="vc-asset-icon"
          data-tone={entry.tone}
          aria-label={\`\${entry.label} \${item.title ?? item.id}\`}
          title={entry.label}
          onClick={(event) => {
            stop(event);
            if (entry.action === "preview") {
              ctx.openPreview(item.id);
              return;
            }
            ctx.requestAction(entry.action, { id: item.id });
          }}
        >
          {entry.icon ?? entry.label}
        </button>
      ))}
    </div>
  );
}

export const createCardActionsPlugin: AssetPluginCreator<CardActionsConfig> = (
  config = {}
) => {
  const actions = config.actions?.length ? config.actions : DEFAULT_ACTIONS;

  return {
    name: "card-actions",
    version: "0.1.0",
    description: doc.description,
    priority: 25,
    config,
    hooks: {
      renderCardActions: (context, item) => (
        <CardActionsView ctx={context} item={item} actions={actions} />
      ),
    },
  } satisfies AssetPlugin;
};

createCardActionsPlugin.meta = doc as PluginDoc;
`,D1=`/* eslint-disable react-refresh/only-export-components -- 插件工厂文件必然同时导出工厂与内部视图组件；库产物不走应用层 HMR，该规则在此为误报 */
import React from "react";
import type { PluginDoc } from "vane-plugin-core";
import type {
  AssetLibraryContext,
  AssetPlugin,
  AssetPluginCreator,
} from "../../components/AssetLibraryPlugin/plugins/types";
import doc from "./doc.json";

/**
 * CountPlugin — 结果计数。
 *
 * 三个数各说一件事：total=过滤后的总数、visible=当前页条数、selected=已选。
 * 分页时把「当前页/总数」写清楚，否则用户会以为筛选把素材弄丢了。
 */
export interface CountConfig {
  showTotal?: boolean;
  showVisible?: boolean;
  showSelected?: boolean;
  /** 分隔符，默认 · */
  separator?: string;
}

function CountView({
  ctx,
  showTotal,
  showVisible,
  showSelected,
  separator,
}: {
  ctx: AssetLibraryContext;
  showTotal: boolean;
  showVisible: boolean;
  showSelected: boolean;
  separator: string;
}) {
  const parts: string[] = [];
  if (showTotal) parts.push(\`共 \${ctx.total} 项\`);
  if (showVisible && ctx.pageCount > 1) {
    parts.push(\`第 \${ctx.page} / \${ctx.pageCount} 页 · 本页 \${ctx.visible.length}\`);
  }
  if (showSelected) parts.push(\`已选 \${ctx.selectedIds.length}\`);

  return (
    <span className="vc-asset-count" data-testid="asset-count" role="status" aria-live="polite">
      {parts.join(\` \${separator} \`)}
    </span>
  );
}

export const createCountPlugin: AssetPluginCreator<CountConfig> = (config = {}) => {
  const showTotal = config.showTotal !== false;
  const showVisible = config.showVisible !== false;
  const showSelected = config.showSelected !== false;
  const separator = config.separator ?? "·";

  return {
    name: "count",
    version: "0.1.0",
    description: doc.description,
    priority: 16,
    config,
    hooks: {
      renderToolbar: (context) => (
        <CountView
          ctx={context}
          showTotal={showTotal}
          showVisible={showVisible}
          showSelected={showSelected}
          separator={separator}
        />
      ),
    },
  } satisfies AssetPlugin;
};

createCountPlugin.meta = doc as PluginDoc;
`,M1=`/* eslint-disable react-refresh/only-export-components -- 插件工厂文件必然同时导出工厂与内部视图组件；库产物不走应用层 HMR，该规则在此为误报 */
import React, { useRef, useState } from "react";
import type { PluginDoc } from "vane-plugin-core";
import type {
  AssetLibraryContext,
  AssetPlugin,
  AssetPluginCreator,
} from "../../components/AssetLibraryPlugin/plugins/types";
import doc from "./doc.json";

/**
 * DropzonePlugin — 拖拽上传占位。
 *
 * 边界（分析 §0）：组件只负责「收集 File[] 并交回宿主」，
 * 不发起请求、不管进度/重试/断点 —— 那套语义属于宿主的上传器。
 *
 * accept 支持 \`image/*\` 这类前缀规则，也支持 \`.png\` 扩展名；命中的文件才会上抛。
 */
export interface DropzoneConfig {
  /** 允许的类型，默认 ["image/*", "video/*"] */
  accept?: string[];
  /** 主文案 */
  label?: string;
  /** 是否允许一次多选，默认 true */
  multiple?: boolean;
}

const DEFAULT_ACCEPT = ["image/*", "video/*"];

/** accept 规则匹配：\`image/*\` 走 MIME 前缀，其余按 MIME 等值或扩展名后缀 */
export function matchesAccept(file: File, accept: string[]): boolean {
  if (!accept.length) return true;
  const type = file.type || "";
  const name = file.name.toLowerCase();
  return accept.some((rule) => {
    const normalized = rule.trim().toLowerCase();
    if (!normalized) return false;
    if (normalized.endsWith("/*")) return type.startsWith(normalized.slice(0, -1));
    if (normalized.startsWith(".")) return name.endsWith(normalized);
    return type === normalized;
  });
}

interface DropzoneViewProps {
  ctx: AssetLibraryContext;
  accept: string[];
  label: string;
  multiple: boolean;
}

function DropzoneView({ ctx, accept, label, multiple }: DropzoneViewProps) {
  const [dragging, setDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const deliver = (list: FileList | null) => {
    const files = Array.from(list ?? []).filter((file) => matchesAccept(file, accept));
    if (files.length) ctx.requestUpload(files);
  };

  const openPicker = () => inputRef.current?.click();

  return (
    <div
      className="vc-asset-dropzone"
      data-dragging={dragging ? "true" : undefined}
      role="button"
      tabIndex={0}
      aria-label={\`\${label}，也可点击选择文件\`}
      onClick={openPicker}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openPicker();
        }
      }}
      onDragOver={(event) => {
        // 不 preventDefault 的话浏览器会直接打开文件，drop 事件永远不来
        event.preventDefault();
        setDragging(true);
      }}
      onDragLeave={() => setDragging(false)}
      onDrop={(event) => {
        event.preventDefault();
        setDragging(false);
        deliver(event.dataTransfer?.files ?? null);
      }}
    >
      <span>
        <strong>{label}</strong> 或点击选择文件
      </span>
      <input
        ref={inputRef}
        type="file"
        hidden
        accept={accept.join(",")}
        multiple={multiple}
        onChange={(event) => {
          deliver(event.target.files);
          // 清空 value：否则连续选同一个文件不会再触发 change
          event.target.value = "";
        }}
      />
    </div>
  );
}

export const createDropzonePlugin: AssetPluginCreator<DropzoneConfig> = (
  config = {}
) => {
  const accept = config.accept ?? DEFAULT_ACCEPT;
  const label = config.label ?? "拖拽素材到此处";
  const multiple = config.multiple !== false;

  return {
    name: "dropzone",
    version: "0.1.0",
    description: doc.description,
    priority: 5,
    config,
    hooks: {
      renderDropzone: (context) => (
        <DropzoneView ctx={context} accept={accept} label={label} multiple={multiple} />
      ),
    },
  } satisfies AssetPlugin;
};

createDropzonePlugin.meta = doc as PluginDoc;
`,I1=`/* eslint-disable react-refresh/only-export-components -- 插件工厂文件必然同时导出工厂与内部视图组件；库产物不走应用层 HMR，该规则在此为误报 */
import React from "react";
import type { PluginDoc } from "vane-plugin-core";
import type {
  AssetItem,
  AssetPlugin,
  AssetPluginCreator,
} from "../../components/AssetLibraryPlugin/plugins/types";
import { formatDuration } from "../../components/AssetLibraryPlugin/domain";
import { Badge, CardCorner } from "../_shared/ui";
import doc from "./doc.json";

/**
 * DurationBadgePlugin — 视频时长角标。
 *
 * 只读 item.duration，绝不在组件里 load metadata：
 * 那会让每张卡在渲染后多一次网络请求，且 happy-dom / 无媒体解码环境里必然拿不到值。
 * 宿主想要时长，就该在生成素材数据时写进 duration。
 */
export interface DurationConfig {
  /** 无时长的视频是否显示 "--:--"，默认 false（不显示） */
  fallback?: boolean;
}

function DurationView({ item, fallback }: { item: AssetItem; fallback: boolean }) {
  if (item.kind !== "video") return null;
  const text = formatDuration(item.duration);
  if (!text && !fallback) return null;
  return (
    <CardCorner align="bottom">
      <Badge title={\`时长 \${text || "未知"}\`}>{text || "--:--"}</Badge>
    </CardCorner>
  );
}

export const createDurationPlugin: AssetPluginCreator<DurationConfig> = (config = {}) => {
  const fallback = config.fallback === true;

  return {
    name: "duration",
    version: "0.1.0",
    description: doc.description,
    priority: 22,
    config,
    hooks: {
      renderCardOverlay: (_context, item) => <DurationView item={item} fallback={fallback} />,
    },
  } satisfies AssetPlugin;
};

createDurationPlugin.meta = doc as PluginDoc;
`,R1=`/* eslint-disable react-refresh/only-export-components -- 插件工厂文件必然同时导出工厂与内部视图组件；库产物不走应用层 HMR，该规则在此为误报 */
import React from "react";
import type { PluginDoc } from "vane-plugin-core";
import type {
  AssetEmptyReason,
  AssetLibraryContext,
  AssetPlugin,
  AssetPluginCreator,
} from "../../components/AssetLibraryPlugin/plugins/types";
import doc from "./doc.json";

/**
 * EmptyStatePlugin — 空态。
 *
 * 必须分叉两种原因（分析 §2.2 第 5 条）：
 *  - \`empty\`：库里真没素材 → 引导上传；
 *  - \`filtered\`：筛选把结果筛没了 → 给「清空筛选」，否则用户只能一个个猜是哪个条件。
 * 混成一句「暂无数据」是最常见的体验塌方：用户会去翻素材是否被删了。
 *
 * 单值槽：多个 empty 插件同时装上时，priority 最高的那个胜出。
 */
export interface EmptyStateConfig {
  emptyText?: string;
  emptyHint?: string;
  filteredText?: string;
  clearLabel?: string;
}

function EmptyView({
  ctx,
  reason,
  config,
}: {
  ctx: AssetLibraryContext;
  reason: AssetEmptyReason;
  config: Required<EmptyStateConfig>;
}) {
  if (reason === "filtered") {
    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
        <p>{config.filteredText}</p>
        <button
          type="button"
          className="vc-asset-btn"
          data-tone="accent"
          onClick={() => ctx.clearFilters()}
        >
          {config.clearLabel}
        </button>
      </div>
    );
  }
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
      <p>{config.emptyText}</p>
      <span className="vc-asset-meta">{config.emptyHint}</span>
    </div>
  );
}

export const createEmptyStatePlugin: AssetPluginCreator<EmptyStateConfig> = (
  config = {}
) => {
  const resolved: Required<EmptyStateConfig> = {
    emptyText: config.emptyText ?? "素材库还是空的",
    emptyHint: config.emptyHint ?? "拖拽图片或视频到上方区域即可开始",
    filteredText: config.filteredText ?? "没有符合当前条件的素材",
    clearLabel: config.clearLabel ?? "清空筛选条件",
  };

  return {
    name: "empty-state",
    version: "0.1.0",
    description: doc.description,
    priority: 40,
    config,
    hooks: {
      renderEmpty: (context, reason) => (
        <EmptyView ctx={context} reason={reason} config={resolved} />
      ),
    },
  } satisfies AssetPlugin;
};

createEmptyStatePlugin.meta = doc as PluginDoc;
`,O1=`/* eslint-disable react-refresh/only-export-components -- 插件工厂文件必然同时导出工厂与内部视图组件；库产物不走应用层 HMR，该规则在此为误报 */
import React from "react";
import type { PluginDoc } from "vane-plugin-core";
import type {
  AssetItem,
  AssetLibraryContext,
  AssetPlugin,
  AssetPluginCreator,
} from "../../components/AssetLibraryPlugin/plugins/types";
import { CardCorner, stop } from "../_shared/ui";
import doc from "./doc.json";

/**
 * FavoritePlugin — 收藏星标。
 *
 * 组件不改素材数据（items 是宿主的），只抛 \`onAssetAction("favorite", { id })\`；
 * 星标亮灭取决于宿主回写后的 item.favorite。这是「受控 data」的必然结果：
 * 组件内先乐观翻转会和宿主数据打架。
 */
export interface FavoriteConfig {
  /** 回调动作名，默认 favorite */
  action?: string;
  /**
   * 已收藏填充色，默认 #9a5b00。
   *
   * 不用更亮的琥珀：#f5a524 压在同色系淡底上只有 1.91:1，视觉上像没点亮，
   * 对比度体检也会判不合格。这个值 = --vane-asset-warn，与淡底搭配能到 4.9:1。
   */
  activeColor?: string;
}

function FavoriteView({
  ctx,
  item,
  action,
  activeColor,
}: {
  ctx: AssetLibraryContext;
  item: AssetItem;
  action: string;
  activeColor: string;
}) {
  const active = item.favorite === true;
  const label = active ? \`取消收藏 \${item.title ?? item.id}\` : \`收藏 \${item.title ?? item.id}\`;

  return (
    <CardCorner align="bottom-start">
      <button
        type="button"
        className="vc-asset-icon"
        data-active={active ? "true" : "false"}
        aria-pressed={active}
        aria-label={label}
        title={label}
        style={{ color: active ? activeColor : undefined }}
        onClick={(event) => {
          stop(event);
          ctx.requestAction(action, { id: item.id });
        }}
      >
        {active ? "★" : "☆"}
      </button>
    </CardCorner>
  );
}

export const createFavoritePlugin: AssetPluginCreator<FavoriteConfig> = (config = {}) => {
  const action = config.action ?? "favorite";
  const activeColor = config.activeColor ?? "#9a5b00";

  return {
    name: "favorite",
    version: "0.1.0",
    description: doc.description,
    priority: 24,
    config,
    hooks: {
      renderCardOverlay: (context, item) => (
        <FavoriteView ctx={context} item={item} action={action} activeColor={activeColor} />
      ),
    },
  } satisfies AssetPlugin;
};

createFavoritePlugin.meta = doc as PluginDoc;
`,B1=`/* eslint-disable react-refresh/only-export-components -- 插件工厂文件必然同时导出工厂与内部视图组件；库产物不走应用层 HMR，该规则在此为误报 */
import React from "react";
import type { PluginDoc } from "vane-plugin-core";
import type {
  AssetLibraryContext,
  AssetPlugin,
  AssetPluginCreator,
} from "../../components/AssetLibraryPlugin/plugins/types";
import { buildFolderFacets } from "../../components/AssetLibraryPlugin/domain";
import { Chip } from "../_shared/ui";
import doc from "./doc.json";

/**
 * FolderFilterPlugin — 分组（文件夹）筛选。
 *
 * 刻意只做「平铺 chip」，不做文件树：本包定位是网格墙，树形侧栏是另一个组件的事
 * （分析 §0 已划界）。分组来源是宿主传入的 folders，计数按 items 现算。
 */
export interface FolderFilterConfig {
  allLabel?: string;
  /** 隐藏 0 项的分组，默认 false（保留可见，避免分组「凭空消失」） */
  hideEmpty?: boolean;
}

function FolderFilterView({
  ctx,
  allLabel,
  hideEmpty,
}: {
  ctx: AssetLibraryContext;
  allLabel: string;
  hideEmpty: boolean;
}) {
  const facets = buildFolderFacets(ctx.items, ctx.folders);
  const shown = hideEmpty ? facets.filter((facet) => facet.count > 0) : facets;
  if (!shown.length) return null;

  return (
    <div className="vc-asset-toolbar" role="group" aria-label="按分组筛选">
      <Chip active={ctx.folderId === null} onClick={() => ctx.setFolder(null)}>
        {allLabel}
      </Chip>
      {shown.map((facet) => (
        <Chip
          key={facet.id}
          active={ctx.folderId === facet.id}
          onClick={() => ctx.setFolder(facet.id)}
        >
          {facet.name}
          <span className="vc-asset-count">{facet.count}</span>
        </Chip>
      ))}
    </div>
  );
}

export const createFolderFilterPlugin: AssetPluginCreator<FolderFilterConfig> = (
  config = {}
) => {
  const allLabel = config.allLabel ?? "全部分组";
  const hideEmpty = config.hideEmpty === true;

  return {
    name: "folder-filter",
    version: "0.1.0",
    description: doc.description,
    priority: 13,
    config,
    hooks: {
      renderToolbar: (context) => (
        <FolderFilterView ctx={context} allLabel={allLabel} hideEmpty={hideEmpty} />
      ),
    },
  } satisfies AssetPlugin;
};

createFolderFilterPlugin.meta = doc as PluginDoc;
`,V1=`/* eslint-disable react-refresh/only-export-components -- 插件工厂文件必然同时导出工厂与内部视图组件；库产物不走应用层 HMR，该规则在此为误报 */
import React from "react";
import type { PluginDoc } from "vane-plugin-core";
import type {
  AssetKind,
  AssetItem,
  AssetPlugin,
  AssetPluginCreator,
} from "../../components/AssetLibraryPlugin/plugins/types";
import { Badge, CardCorner } from "../_shared/ui";
import doc from "./doc.json";

/**
 * KindBadgePlugin — 类型角标。
 *
 * 图片墙里视频的缩略图就是一张静帧，不给角标用户分不出「这是图还是视频」。
 * 只读归一化后的 kind（非法值在 normalizeAssets 已归一到 image）。
 */
export interface KindBadgeConfig {
  labels?: Partial<Record<AssetKind, string>>;
  /** 仅在这些类型上显示，默认 视频 才显示（图片常有明显特征，不占角标位） */
  showFor?: AssetKind[];
}

const DEFAULT_LABELS: Record<AssetKind, string> = { image: "PIC", video: "VID" };

function KindBadgeView({
  item,
  labels,
  showFor,
}: {
  item: AssetItem;
  labels: Record<AssetKind, string>;
  showFor: AssetKind[];
}) {
  if (!showFor.includes(item.kind)) return null;
  return (
    <CardCorner align="end">
      <Badge>{labels[item.kind]}</Badge>
    </CardCorner>
  );
}

export const createKindBadgePlugin: AssetPluginCreator<KindBadgeConfig> = (
  config = {}
) => {
  const labels = { ...DEFAULT_LABELS, ...config.labels };
  const showFor = config.showFor ?? ["video"];

  return {
    name: "kind-badge",
    version: "0.1.0",
    description: doc.description,
    priority: 21,
    config,
    hooks: {
      renderCardOverlay: (_context, item) => (
        <KindBadgeView item={item} labels={labels} showFor={showFor} />
      ),
    },
  } satisfies AssetPlugin;
};

createKindBadgePlugin.meta = doc as PluginDoc;
`,U1=`/* eslint-disable react-refresh/only-export-components -- 插件工厂文件必然同时导出工厂与内部视图组件；库产物不走应用层 HMR，该规则在此为误报 */
import React from "react";
import type { PluginDoc } from "vane-plugin-core";
import type {
  AssetKind,
  AssetLibraryContext,
  AssetPlugin,
  AssetPluginCreator,
} from "../../components/AssetLibraryPlugin/plugins/types";
import { Chip } from "../_shared/ui";
import doc from "./doc.json";

/**
 * KindFilterPlugin — 按素材类型筛选。
 *
 * 「全部」不是「清空所有筛选」，只清 kinds：搜索词、标签、分组必须保持。
 * 计数用归一化后的全量 items（不是过滤后的 filtered），否则点一次图片，
 * 「视频 12」会瞬间变成 0，用户会以为素材没了。
 */
export interface KindFilterConfig {
  /** 参与筛选的类型与文案，默认图片/视频 */
  kinds?: Array<{ kind: AssetKind; label: string }>;
  allLabel?: string;
}

const DEFAULT_KINDS: Array<{ kind: AssetKind; label: string }> = [
  { kind: "image", label: "图片" },
  { kind: "video", label: "视频" },
];

function KindFilterView({
  ctx,
  options,
  allLabel,
}: {
  ctx: AssetLibraryContext;
  options: Array<{ kind: AssetKind; label: string }>;
  allLabel: string;
}) {
  const countOf = (kind: AssetKind) =>
    ctx.items.filter((item) => item.kind === kind).length;

  return (
    <div className="vc-asset-toolbar" role="group" aria-label="按素材类型筛选">
      <Chip active={ctx.kinds.length === 0} onClick={() => ctx.setKinds([])}>
        {allLabel}
        <span className="vc-asset-count">{ctx.items.length}</span>
      </Chip>
      {options.map(({ kind, label }) => (
        <Chip
          key={kind}
          active={ctx.kinds.includes(kind)}
          onClick={() => ctx.toggleKind(kind)}
        >
          {label}
          <span className="vc-asset-count">{countOf(kind)}</span>
        </Chip>
      ))}
    </div>
  );
}

export const createKindFilterPlugin: AssetPluginCreator<KindFilterConfig> = (
  config = {}
) => {
  const options = config.kinds?.length ? config.kinds : DEFAULT_KINDS;
  const allLabel = config.allLabel ?? "全部";

  return {
    name: "kind-filter",
    version: "0.1.0",
    description: doc.description,
    priority: 11,
    config,
    hooks: {
      renderToolbar: (context) => (
        <KindFilterView ctx={context} options={options} allLabel={allLabel} />
      ),
    },
  } satisfies AssetPlugin;
};

createKindFilterPlugin.meta = doc as PluginDoc;
`,K1=`/* eslint-disable react-refresh/only-export-components -- 插件工厂文件必然同时导出工厂与内部视图组件；库产物不走应用层 HMR，该规则在此为误报 */
import React, { useEffect } from "react";
import type { PluginDoc } from "vane-plugin-core";
import type {
  AssetItem,
  AssetLibraryContext,
  AssetPlugin,
  AssetPluginCreator,
} from "../../components/AssetLibraryPlugin/plugins/types";
import doc from "./doc.json";

/**
 * LightBoxPlugin — 大图 / 视频预览浮层。
 *
 * 打开态存在内核 state.previewId（不是组件本地 state）：
 * 卡片上的「预览」按钮和浮层不在同一棵子树里，本地 state 传不过去；
 * 存内核 state 后任何插件都能 openPreview / closePreview。
 *
 * 左右切换在 ctx.filtered（当前筛选结果）里走，而不是只有当前页 ——
 * 用户的心理模型是「翻我这批筛选出来的素材」，不是「翻这 24 个」。
 */
export interface LightBoxConfig {
  /** 支持左右方向键切换，默认 true */
  arrows?: boolean;
  /** 关闭时是否恢复焦点，默认 true */
  restoreFocus?: boolean;
}

function formatIndex(ctx: AssetLibraryContext, id: string): string {
  const index = ctx.filtered.findIndex((item) => item.id === id);
  if (index < 0) return "";
  return \`\${index + 1} / \${ctx.filtered.length}\`;
}

function LightBoxView({
  ctx,
  item,
  arrows,
}: {
  ctx: AssetLibraryContext;
  item: AssetItem;
  arrows: boolean;
}) {
  const index = ctx.filtered.findIndex((entry) => entry.id === item.id);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        ctx.closePreview();
        return;
      }
      if (!arrows) return;
      if (event.key === "ArrowRight" && index >= 0 && index < ctx.filtered.length - 1) {
        event.preventDefault();
        ctx.openPreview(ctx.filtered[index + 1].id);
      }
      if (event.key === "ArrowLeft" && index > 0) {
        event.preventDefault();
        ctx.openPreview(ctx.filtered[index - 1].id);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [arrows, ctx, index]);

  return (
    <div
      className="vc-asset-lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={\`预览 \${item.title ?? item.id}\`}
      onClick={() => ctx.closePreview()}
    >
      <button
        type="button"
        className="vc-asset-lightbox__close"
        onClick={(event) => {
          event.stopPropagation();
          ctx.closePreview();
        }}
      >
        关闭 ESC
      </button>
      <div className="vc-asset-lightbox__body" onClick={(event) => event.stopPropagation()}>
        {item.kind === "video" ? (
          <video src={item.src} controls autoPlay playsInline />
        ) : (
          <img src={item.src} alt={item.title ?? item.id} />
        )}
      </div>
      <div className="vc-asset-lightbox__bar">
        <span>{item.title ?? item.id}</span>
        {formatIndex(ctx, item.id) ? <span>· {formatIndex(ctx, item.id)}</span> : null}
        {arrows ? <span>· ← → 切换</span> : null}
      </div>
    </div>
  );
}

export const createLightBoxPlugin: AssetPluginCreator<LightBoxConfig> = (config = {}) => {
  const arrows = config.arrows !== false;

  return {
    name: "lightbox",
    version: "0.1.0",
    description: doc.description,
    priority: 45,
    config,
    hooks: {
      /**
       * 双击 / Enter 直接打开预览。
       *
       * \`onItemActivate\` 在内核里默认什么也不做（宿主可以自己接「打开详情页」），
       * 而素材库最常见的激活语义就是「看大图」—— 不接这一步，用户双击卡片会觉得坏了。
       * 宿主同时传了自己的 onItemActivate 也不会冲突：两个都执行。
       */
      onAssetActivate: (context, item) => {
        if (context.previewId) return;
        context.openPreview(item.id);
      },
      renderOverlay: (context) => {
        if (!context.previewId) return null;
        const item = context.items.find((entry) => entry.id === context.previewId);
        if (!item) return null;
        return <LightBoxView ctx={context} item={item} arrows={arrows} />;
      },
    },
  } satisfies AssetPlugin;
};

createLightBoxPlugin.meta = doc as PluginDoc;
`,H1=`/* eslint-disable react-refresh/only-export-components -- 插件工厂文件必然同时导出工厂与内部视图组件；库产物不走应用层 HMR，该规则在此为误报 */
import React from "react";
import type { PluginDoc } from "vane-plugin-core";
import type {
  AssetItem,
  AssetPlugin,
  AssetPluginCreator,
} from "../../components/AssetLibraryPlugin/plugins/types";
import { formatSize } from "../../components/AssetLibraryPlugin/domain";
import doc from "./doc.json";

/**
 * MetaLinePlugin — 卡片元信息行。
 *
 * 只呈现数据里已有的字段，缺什么就少一段，不编造（缺 width/height 就不写分辨率）。
 * 分隔点用 CSS 伪元素（.vc-asset-meta__dot），避免拼字符串时首尾多出一个点。
 */
export type MetaField = "size" | "dimension" | "folder" | "tags" | "date";

export interface MetaLineConfig {
  /** 展示哪些字段，默认 体积 + 分辨率 */
  show?: MetaField[];
  /** 标签最多显示几个，默认 2 */
  maxTags?: number;
}

const DEFAULT_SHOW: MetaField[] = ["size", "dimension"];

function formatDate(value: AssetItem["createdAt"]): string {
  if (value === undefined) return "";
  const date = value instanceof Date ? value : new Date(value);
  const time = date.getTime();
  if (!Number.isFinite(time)) return "";
  const pad = (n: number) => String(n).padStart(2, "0");
  return \`\${date.getFullYear()}-\${pad(date.getMonth() + 1)}-\${pad(date.getDate())}\`;
}

function MetaLineView({
  item,
  show,
  maxTags,
}: {
  item: AssetItem;
  show: MetaField[];
  maxTags: number;
}) {
  const parts: string[] = [];
  if (show.includes("dimension") && item.width && item.height) {
    parts.push(\`\${item.width}×\${item.height}\`);
  }
  if (show.includes("size")) {
    const size = formatSize(item.size);
    if (size) parts.push(size);
  }
  if (show.includes("folder") && item.folderName) parts.push(item.folderName);
  if (show.includes("date")) {
    const date = formatDate(item.createdAt);
    if (date) parts.push(date);
  }
  if (show.includes("tags") && item.tags?.length) {
    parts.push(item.tags.slice(0, maxTags).join(" / "));
  }
  if (!parts.length) return null;

  return (
    <span className="vc-asset-meta" data-testid="asset-meta">
      {parts.map((part, index) => (
        <span key={\`\${part}-\${index}\`} className={index > 0 ? "vc-asset-meta__dot" : undefined}>
          {part}
        </span>
      ))}
    </span>
  );
}

export const createMetaLinePlugin: AssetPluginCreator<MetaLineConfig> = (config = {}) => {
  const show = config.show?.length ? config.show : DEFAULT_SHOW;
  const maxTags = config.maxTags ?? 2;

  return {
    name: "meta-line",
    version: "0.1.0",
    description: doc.description,
    priority: 26,
    config,
    hooks: {
      renderCardMeta: (_context, item) => (
        <MetaLineView item={item} show={show} maxTags={maxTags} />
      ),
    },
  } satisfies AssetPlugin;
};

createMetaLinePlugin.meta = doc as PluginDoc;
`,W1=`/* eslint-disable react-refresh/only-export-components -- 插件工厂文件必然同时导出工厂与内部视图组件；库产物不走应用层 HMR，该规则在此为误报 */
import React from "react";
import type { PluginDoc } from "vane-plugin-core";
import type {
  AssetLibraryContext,
  AssetPlugin,
  AssetPluginCreator,
} from "../../components/AssetLibraryPlugin/plugins/types";
import doc from "./doc.json";

/**
 * PaginationPlugin — 分页器。
 *
 * pageCount 由 domain.paginateAssets 算（越界自动夹紧），插件只负责表达：
 * 页码窗口最多 5 个，当前页居中；只有一页时不渲染，避免占位抖动。
 */
export interface PaginationConfig {
  /** 可选每页条数，默认 [12, 24, 48]；传 [] 隐藏该下拉 */
  pageSizes?: number[];
  /** 页码窗口大小，默认 5 */
  window?: number;
}

function pageWindow(current: number, pageCount: number, size: number): number[] {
  const half = Math.floor(size / 2);
  let start = Math.max(1, current - half);
  const end = Math.min(pageCount, start + size - 1);
  start = Math.max(1, end - size + 1);
  const pages: number[] = [];
  for (let page = start; page <= end; page += 1) pages.push(page);
  return pages;
}

function PaginationView({
  ctx,
  pageSizes,
  size,
}: {
  ctx: AssetLibraryContext;
  pageSizes: number[];
  size: number;
}) {
  if (ctx.pageCount <= 1) return null;
  const pages = pageWindow(ctx.page, ctx.pageCount, size);

  return (
    <div className="vc-asset-pager" role="navigation" aria-label="分页">
      <button
        type="button"
        className="vc-asset-btn"
        disabled={ctx.page <= 1}
        onClick={() => ctx.setPage(ctx.page - 1)}
      >
        上一页
      </button>
      {pages.map((page) => (
        <button
          key={page}
          type="button"
          className="vc-asset-btn"
          data-tone={page === ctx.page ? "accent" : undefined}
          aria-current={page === ctx.page ? "page" : undefined}
          onClick={() => ctx.setPage(page)}
        >
          {page}
        </button>
      ))}
      <button
        type="button"
        className="vc-asset-btn"
        disabled={ctx.page >= ctx.pageCount}
        onClick={() => ctx.setPage(ctx.page + 1)}
      >
        下一页
      </button>
      {pageSizes.length ? (
        <select
          className="vc-asset-input"
          aria-label="每页条数"
          value={ctx.pageSize}
          onChange={(event) => ctx.setPageSize(Number(event.target.value))}
        >
          {pageSizes.map((value) => (
            <option key={value} value={value}>
              每页 {value}
            </option>
          ))}
        </select>
      ) : null}
    </div>
  );
}

export const createPaginationPlugin: AssetPluginCreator<PaginationConfig> = (
  config = {}
) => {
  const pageSizes = config.pageSizes ?? [12, 24, 48];
  const size = config.window ?? 5;

  return {
    name: "pagination",
    version: "0.1.0",
    description: doc.description,
    priority: 31,
    config,
    hooks: {
      renderFooter: (context) => (
        <PaginationView ctx={context} pageSizes={pageSizes} size={size} />
      ),
    },
  } satisfies AssetPlugin;
};

createPaginationPlugin.meta = doc as PluginDoc;
`,Q1=`/* eslint-disable react-refresh/only-export-components -- 插件工厂文件必然同时导出工厂与内部视图组件；库产物不走应用层 HMR，该规则在此为误报 */
import React, { useEffect, useRef, useState } from "react";
import type { PluginDoc } from "vane-plugin-core";
import type {
  AssetLibraryContext,
  AssetPlugin,
  AssetPluginCreator,
} from "../../components/AssetLibraryPlugin/plugins/types";
import doc from "./doc.json";

/**
 * SearchPlugin — 关键词搜索。
 *
 * 输入框是本地受控 + 防抖写回 ctx.setQuery：每次按键都写内核 state 会让整墙重排，
 * 200ms 防抖是「手感」与「渲染量」的折中。外部改 query（清空筛选 / URL 恢复）时
 * 用 effect 反向同步本地值，否则输入框会与外部的真实条件脱钩。
 */
export interface SearchConfig {
  placeholder?: string;
  /** 防抖毫秒，默认 200 */
  debounce?: number;
  /** ⌘K / Ctrl+K 聚焦，默认 true */
  hotkey?: boolean;
  /** 输入框宽度，默认 200 */
  width?: number;
}

interface SearchBoxProps {
  ctx: AssetLibraryContext;
  placeholder: string;
  debounce: number;
  hotkey: boolean;
  width: number;
}

function SearchBox({ ctx, placeholder, debounce, hotkey, width }: SearchBoxProps) {
  const [value, setValue] = useState(ctx.query);
  const timerRef = useRef<number | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  // 外部条件变化 → 同步输入框（清空筛选、从 URL 恢复等）
  useEffect(() => {
    setValue(ctx.query);
  }, [ctx.query]);

  useEffect(() => {
    if (!hotkey || typeof window === "undefined") return;
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [hotkey]);

  useEffect(
    () => () => {
      if (timerRef.current !== null) window.clearTimeout(timerRef.current);
    },
    []
  );

  const commit = (next: string) => {
    setValue(next);
    if (timerRef.current !== null) window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => {
      timerRef.current = null;
      ctx.setQuery(next);
    }, debounce);
  };

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
      <input
        ref={inputRef}
        className="vc-asset-input"
        type="search"
        value={value}
        placeholder={placeholder}
        aria-label="搜索素材"
        style={{ width }}
        onChange={(event) => commit(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Escape" && value) {
            event.stopPropagation();
            commit("");
          }
        }}
      />
      {value ? (
        <button
          type="button"
          className="vc-asset-btn"
          aria-label="清空搜索"
          onClick={() => commit("")}
        >
          清空
        </button>
      ) : null}
    </div>
  );
}

export const createSearchPlugin: AssetPluginCreator<SearchConfig> = (config = {}) => {
  const placeholder = config.placeholder ?? "搜索名称 / 标签 / 分组";
  const debounce = config.debounce ?? 200;
  const hotkey = config.hotkey !== false;
  const width = config.width ?? 200;

  return {
    name: "search",
    version: "0.1.0",
    description: doc.description,
    priority: 10,
    config,
    hooks: {
      renderToolbar: (context) => (
        <SearchBox
          ctx={context}
          placeholder={placeholder}
          debounce={debounce}
          hotkey={hotkey}
          width={width}
        />
      ),
    },
  } satisfies AssetPlugin;
};

createSearchPlugin.meta = doc as PluginDoc;
`,G1=`/* eslint-disable react-refresh/only-export-components -- 插件工厂文件必然同时导出工厂与内部视图组件；库产物不走应用层 HMR，该规则在此为误报 */
import React from "react";
import type { PluginDoc } from "vane-plugin-core";
import type {
  AssetLibraryContext,
  AssetPlugin,
  AssetPluginCreator,
} from "../../components/AssetLibraryPlugin/plugins/types";
import { isAssetSelectable } from "../../components/AssetLibraryPlugin/domain";
import doc from "./doc.json";

/**
 * SelectAllPlugin — 全选 / 取消选择。
 *
 * 语义严格限定在「当前页可见且就绪的素材」：
 *  - 不含未就绪（processing / failed）—— 它们本来就不可选；
 *  - 不含分页外的项 —— 「全选」跨页却不显示数量，是后台最常见的误删来源；
 *  - 已达 maxSelected 时按上限截断，按钮如实禁用。
 * 文案因此写「全选本页」，不自欺。
 */
export interface SelectAllConfig {
  selectLabel?: string;
  clearLabel?: string;
}

function SelectAllView({
  ctx,
  selectLabel,
  clearLabel,
}: {
  ctx: AssetLibraryContext;
  selectLabel: string;
  clearLabel: string;
}) {
  const selectable = ctx.visible.filter(isAssetSelectable);
  const allSelected =
    selectable.length > 0 && selectable.every((item) => ctx.isSelected(item.id));
  const atLimit = ctx.maxSelected > 0 && ctx.selectedIds.length >= ctx.maxSelected;

  return (
    <div className="vc-asset-toolbar" role="group" aria-label="批量选择">
      <button
        type="button"
        className="vc-asset-btn"
        disabled={!selectable.length || allSelected || atLimit}
        onClick={() => ctx.selectAllVisible()}
      >
        {selectLabel}
        {selectable.length ? \`（\${selectable.length}）\` : ""}
      </button>
      <button
        type="button"
        className="vc-asset-btn"
        disabled={ctx.selectedIds.length === 0}
        onClick={() => ctx.clearSelection()}
      >
        {clearLabel}
      </button>
    </div>
  );
}

export const createSelectAllPlugin: AssetPluginCreator<SelectAllConfig> = (
  config = {}
) => {
  const selectLabel = config.selectLabel ?? "全选本页";
  const clearLabel = config.clearLabel ?? "取消选择";

  return {
    name: "select-all",
    version: "0.1.0",
    description: doc.description,
    priority: 17,
    config,
    hooks: {
      renderToolbar: (context) => (
        <SelectAllView ctx={context} selectLabel={selectLabel} clearLabel={clearLabel} />
      ),
    },
  } satisfies AssetPlugin;
};

createSelectAllPlugin.meta = doc as PluginDoc;
`,q1=`/* eslint-disable react-refresh/only-export-components -- 插件工厂文件必然同时导出工厂与内部视图组件；库产物不走应用层 HMR，该规则在此为误报 */
import React from "react";
import type { PluginDoc } from "vane-plugin-core";
import type {
  AssetItem,
  AssetLibraryContext,
  AssetPlugin,
  AssetPluginCreator,
} from "../../components/AssetLibraryPlugin/plugins/types";
import { CardCorner, stop } from "../_shared/ui";
import doc from "./doc.json";

/**
 * SelectMarkPlugin — 卡片选择标记。
 *
 * 已选显示勾选（多选模式下显示「第几个被选中」），未选显示空心圈。
 * 点击必须 stopPropagation：否则会先被标记按钮处理、再冒泡到卡片触发一次 toggle，
 * 结果就是「点一下选中又取消」。
 *
 * 未就绪素材不渲染标记：不给用户一个按了没反应的按钮（原因由 status-badge 说明）。
 */
export interface SelectMarkConfig {
  /** 多选时显示选择序号，默认 true */
  showIndex?: boolean;
}

function SelectMarkView({
  ctx,
  item,
  showIndex,
}: {
  ctx: AssetLibraryContext;
  item: AssetItem;
  showIndex: boolean;
}) {
  if (!ctx.isSelectable(item)) return null;

  const selected = ctx.isSelected(item.id);
  const order = ctx.selectedIds.indexOf(item.id) + 1;
  const blocked = ctx.isBlocked(item);
  const label = selected
    ? \`取消选择 \${item.title ?? item.id}\`
    : blocked
      ? \`已达选择上限，无法选择 \${item.title ?? item.id}\`
      : \`选择 \${item.title ?? item.id}\`;

  return (
    <CardCorner align="start">
      <button
        type="button"
        className="vc-asset-mark"
        data-selected={selected ? "true" : "false"}
        aria-pressed={selected}
        aria-label={label}
        title={label}
        disabled={blocked}
        onClick={(event) => {
          stop(event);
          ctx.toggleSelect(item.id);
        }}
      >
        {selected ? (showIndex && ctx.selectedIds.length > 1 ? order : "✓") : ""}
      </button>
    </CardCorner>
  );
}

export const createSelectMarkPlugin: AssetPluginCreator<SelectMarkConfig> = (
  config = {}
) => {
  const showIndex = config.showIndex !== false;

  return {
    name: "select-mark",
    version: "0.1.0",
    description: doc.description,
    priority: 20,
    config,
    hooks: {
      renderCardOverlay: (context, item) => (
        <SelectMarkView ctx={context} item={item} showIndex={showIndex} />
      ),
    },
  } satisfies AssetPlugin;
};

createSelectMarkPlugin.meta = doc as PluginDoc;
`,Y1=`/* eslint-disable react-refresh/only-export-components -- 插件工厂文件必然同时导出工厂与内部视图组件；库产物不走应用层 HMR，该规则在此为误报 */
import React from "react";
import type { PluginDoc } from "vane-plugin-core";
import type {
  AssetLibraryContext,
  AssetPlugin,
  AssetPluginCreator,
  AssetSortKey,
} from "../../components/AssetLibraryPlugin/plugins/types";
import doc from "./doc.json";

/**
 * SortPlugin — 排序。
 *
 * 点同一个字段 = 反转方向；换字段 = 用该字段的默认方向（时间默认新在前，
 * 其余默认升序）。排序本身在 domain.sortAssets 里，缺值恒沉底，不由插件决定。
 */
export interface SortOption {
  key: AssetSortKey;
  label: string;
}

export interface SortConfig {
  /** 可选排序项，默认 名称/时间/体积/时长 */
  options?: SortOption[];
}

const DEFAULT_OPTIONS: SortOption[] = [
  { key: "createdAt", label: "时间" },
  { key: "name", label: "名称" },
  { key: "size", label: "体积" },
  { key: "duration", label: "时长" },
];

function SortView({ ctx, options }: { ctx: AssetLibraryContext; options: SortOption[] }) {
  return (
    <div className="vc-asset-toolbar" role="group" aria-label="排序">
      <select
        className="vc-asset-input"
        aria-label="排序字段"
        value={ctx.sortKey}
        onChange={(event) => ctx.setSort(event.target.value as AssetSortKey)}
      >
        {options.map((option) => (
          <option key={option.key} value={option.key}>
            {option.label}
          </option>
        ))}
      </select>
      <button
        type="button"
        className="vc-asset-btn"
        aria-label={ctx.sortDir === "asc" ? "当前升序，点击改为降序" : "当前降序，点击改为升序"}
        onClick={() => ctx.setSort(ctx.sortKey, ctx.sortDir === "asc" ? "desc" : "asc")}
      >
        {ctx.sortDir === "asc" ? "↑ 升序" : "↓ 降序"}
      </button>
    </div>
  );
}

export const createSortPlugin: AssetPluginCreator<SortConfig> = (config = {}) => {
  const options = config.options?.length ? config.options : DEFAULT_OPTIONS;

  return {
    name: "sort",
    version: "0.1.0",
    description: doc.description,
    priority: 14,
    config,
    hooks: {
      renderToolbar: (context) => <SortView ctx={context} options={options} />,
    },
  } satisfies AssetPlugin;
};

createSortPlugin.meta = doc as PluginDoc;
`,X1=`/* eslint-disable react-refresh/only-export-components -- 插件工厂文件必然同时导出工厂与内部视图组件；库产物不走应用层 HMR，该规则在此为误报 */
import React from "react";
import type { PluginDoc } from "vane-plugin-core";
import type {
  AssetItem,
  AssetPlugin,
  AssetPluginCreator,
  AssetStatus,
} from "../../components/AssetLibraryPlugin/plugins/types";
import doc from "./doc.json";

/**
 * StatusBadgePlugin — 素材状态遮罩。
 *
 * processing / failed 的素材仍然可见（用户需要知道文件在库里），但不可选。
 * 「为什么点不动」必须在卡片上直接说清楚，否则用户只会觉得组件坏了 ——
 * 这是本包最容易被忽略的一条体验底线。
 */
export interface StatusBadgeConfig {
  labels?: Partial<Record<AssetStatus, string>>;
}

const DEFAULT_LABELS: Record<AssetStatus, string> = {
  ready: "",
  processing: "转码中",
  failed: "处理失败",
};

function StatusView({
  item,
  labels,
}: {
  item: AssetItem;
  labels: Record<AssetStatus, string>;
}) {
  const status = item.status ?? "ready";
  if (status === "ready") return null;
  const text = labels[status];

  return (
    <div className="vc-asset-status" data-status={status} role="img" aria-label={text}>
      <span className="vc-asset-status__text" data-tone={status === "failed" ? "danger" : "warn"}>
        {text}
      </span>
    </div>
  );
}

export const createStatusBadgePlugin: AssetPluginCreator<StatusBadgeConfig> = (
  config = {}
) => {
  const labels = { ...DEFAULT_LABELS, ...config.labels };

  return {
    name: "status-badge",
    version: "0.1.0",
    description: doc.description,
    priority: 23,
    config,
    hooks: {
      renderCardOverlay: (_context, item) => <StatusView item={item} labels={labels} />,
    },
  } satisfies AssetPlugin;
};

createStatusBadgePlugin.meta = doc as PluginDoc;
`,Z1=`/* eslint-disable react-refresh/only-export-components -- 插件工厂文件必然同时导出工厂与内部视图组件；库产物不走应用层 HMR，该规则在此为误报 */
import React from "react";
import type { PluginDoc } from "vane-plugin-core";
import type {
  AssetLibraryContext,
  AssetPlugin,
  AssetPluginCreator,
} from "../../components/AssetLibraryPlugin/plugins/types";
import { buildTagFacets } from "../../components/AssetLibraryPlugin/domain";
import { Chip } from "../_shared/ui";
import doc from "./doc.json";

/**
 * TagFilterPlugin — 标签面筛选。
 *
 * facet 从归一化后的全量 items 现算（不是当前结果集），否则选中一个标签后
 * 其他标签会跟着消失，用户没法二次叠加。
 * 多选语义是 OR（命中任一），与 filterAssets 实现严格一致。
 */
export interface TagFilterConfig {
  /** 最多展示几个标签，默认 8；0 = 不限 */
  max?: number;
  /** 排序方式，默认按出现次数 */
  sort?: "count" | "name";
}

function TagFilterView({
  ctx,
  max,
  sort,
}: {
  ctx: AssetLibraryContext;
  max: number;
  sort: "count" | "name";
}) {
  const facets = buildTagFacets(ctx.items);
  const ordered =
    sort === "name"
      ? [...facets].sort((a, b) => a.tag.localeCompare(b.tag, "zh-Hans-CN"))
      : facets;
  // 已选中的标签必须始终可见，否则「选中后自己被截断」就再也点不掉了
  const selectedFacets = facets.filter((facet) => ctx.tags.includes(facet.tag));
  const head = max > 0 ? ordered.slice(0, max) : ordered;
  const merged = [...selectedFacets, ...head.filter((f) => !ctx.tags.includes(f.tag))];
  const shown = max > 0 ? merged.slice(0, Math.max(max, selectedFacets.length)) : merged;

  if (!facets.length) return null;

  return (
    <div className="vc-asset-toolbar" role="group" aria-label="按标签筛选">
      {shown.map((facet) => (
        <Chip
          key={facet.tag}
          active={ctx.tags.includes(facet.tag)}
          onClick={() => ctx.toggleTag(facet.tag)}
        >
          {facet.tag}
          <span className="vc-asset-count">{facet.count}</span>
        </Chip>
      ))}
      {ctx.tags.length > 0 ? (
        <button type="button" className="vc-asset-btn" onClick={() => ctx.setTags([])}>
          清除标签
        </button>
      ) : null}
    </div>
  );
}

export const createTagFilterPlugin: AssetPluginCreator<TagFilterConfig> = (
  config = {}
) => {
  const max = config.max ?? 8;
  const sort = config.sort ?? "count";

  return {
    name: "tag-filter",
    version: "0.1.0",
    description: doc.description,
    priority: 12,
    config,
    hooks: {
      renderToolbar: (context) => <TagFilterView ctx={context} max={max} sort={sort} />,
    },
  } satisfies AssetPlugin;
};

createTagFilterPlugin.meta = doc as PluginDoc;
`,J1=`/* eslint-disable react-refresh/only-export-components -- 插件工厂文件必然同时导出工厂与内部视图组件；库产物不走应用层 HMR，该规则在此为误报 */
import React from "react";
import type { PluginDoc } from "vane-plugin-core";
import type {
  AssetLibraryContext,
  AssetPlugin,
  AssetPluginCreator,
  AssetView,
} from "../../components/AssetLibraryPlugin/plugins/types";
import { Chip } from "../_shared/ui";
import doc from "./doc.json";

/**
 * ViewSwitchPlugin — 网格 / 列表切换。
 *
 * 只切 view 状态；两种视图的布局由 components.css 的 data-view 选择器负责，
 * 插件不碰 DOM 结构，也不复制卡片渲染逻辑。
 */
export interface ViewSwitchConfig {
  views?: AssetView[];
  labels?: Partial<Record<AssetView, string>>;
}

const DEFAULT_VIEWS: AssetView[] = ["grid", "list"];
const DEFAULT_LABELS: Record<AssetView, string> = { grid: "网格", list: "列表" };

function ViewSwitchView({
  ctx,
  views,
  labels,
}: {
  ctx: AssetLibraryContext;
  views: AssetView[];
  labels: Record<AssetView, string>;
}) {
  return (
    <div className="vc-asset-toolbar" role="group" aria-label="视图切换">
      {views.map((view) => (
        <Chip key={view} active={ctx.view === view} onClick={() => ctx.setView(view)}>
          {labels[view]}
        </Chip>
      ))}
    </div>
  );
}

export const createViewSwitchPlugin: AssetPluginCreator<ViewSwitchConfig> = (
  config = {}
) => {
  const views = config.views?.length ? config.views : DEFAULT_VIEWS;
  const labels = { ...DEFAULT_LABELS, ...config.labels };

  return {
    name: "view-switch",
    version: "0.1.0",
    description: doc.description,
    priority: 15,
    config,
    hooks: {
      renderToolbar: (context) => (
        <ViewSwitchView ctx={context} views={views} labels={labels} />
      ),
    },
  } satisfies AssetPlugin;
};

createViewSwitchPlugin.meta = doc as PluginDoc;
`,uP={filter:"筛选与浏览",card:"卡片增强",batch:"批量与分页",flow:"上传与预览"},pc=["filter","card","batch","flow"],gc=Object.assign({"/src/custom-plugins/BulkBarPlugin/doc.json":Ta,"/src/custom-plugins/CardActionsPlugin/doc.json":za,"/src/custom-plugins/CountPlugin/doc.json":_a,"/src/custom-plugins/DropzonePlugin/doc.json":ya,"/src/custom-plugins/DurationPlugin/doc.json":La,"/src/custom-plugins/EmptyStatePlugin/doc.json":Da,"/src/custom-plugins/FavoritePlugin/doc.json":$a,"/src/custom-plugins/FolderFilterPlugin/doc.json":ka,"/src/custom-plugins/KindBadgePlugin/doc.json":Aa,"/src/custom-plugins/KindFilterPlugin/doc.json":xa,"/src/custom-plugins/LightBoxPlugin/doc.json":Ma,"/src/custom-plugins/MetaLinePlugin/doc.json":Na,"/src/custom-plugins/PaginationPlugin/doc.json":Fa,"/src/custom-plugins/SearchPlugin/doc.json":va,"/src/custom-plugins/SelectAllPlugin/doc.json":Ca,"/src/custom-plugins/SelectMarkPlugin/doc.json":Ea,"/src/custom-plugins/SortPlugin/doc.json":Pa,"/src/custom-plugins/StatusBadgePlugin/doc.json":ja,"/src/custom-plugins/TagFilterPlugin/doc.json":Sa,"/src/custom-plugins/ViewSwitchPlugin/doc.json":ba}),mc=Object.assign({"/src/custom-plugins/BulkBarPlugin/create.tsx":T1,"/src/custom-plugins/CardActionsPlugin/create.tsx":F1,"/src/custom-plugins/CountPlugin/create.tsx":D1,"/src/custom-plugins/DropzonePlugin/create.tsx":M1,"/src/custom-plugins/DurationPlugin/create.tsx":I1,"/src/custom-plugins/EmptyStatePlugin/create.tsx":R1,"/src/custom-plugins/FavoritePlugin/create.tsx":O1,"/src/custom-plugins/FolderFilterPlugin/create.tsx":B1,"/src/custom-plugins/KindBadgePlugin/create.tsx":V1,"/src/custom-plugins/KindFilterPlugin/create.tsx":U1,"/src/custom-plugins/LightBoxPlugin/create.tsx":K1,"/src/custom-plugins/MetaLinePlugin/create.tsx":H1,"/src/custom-plugins/PaginationPlugin/create.tsx":W1,"/src/custom-plugins/SearchPlugin/create.tsx":Q1,"/src/custom-plugins/SelectAllPlugin/create.tsx":G1,"/src/custom-plugins/SelectMarkPlugin/create.tsx":q1,"/src/custom-plugins/SortPlugin/create.tsx":Y1,"/src/custom-plugins/StatusBadgePlugin/create.tsx":X1,"/src/custom-plugins/TagFilterPlugin/create.tsx":Z1,"/src/custom-plugins/ViewSwitchPlugin/create.tsx":J1}),ep=e=>e.replace(/^.*\/custom-plugins\//,"").replace(/\/.*$/,"");function ek(e){const t=Object.keys(mc).find(i=>ep(i)===e),n=t?mc[t]:"",r=/priority:\s*(\d+)/.exec(n);return r?Number(r[1]):0}function tk(e){const t=Object.keys(gc).find(n=>ep(n)===e);return t?gc[t]:{name:e,description:"（缺少 doc.json）"}}const nk=[{dir:"SearchPlugin",group:"filter",make:()=>qn({})},{dir:"KindFilterPlugin",group:"filter",make:()=>fn({})},{dir:"TagFilterPlugin",group:"filter",make:()=>Yn({max:6})},{dir:"FolderFilterPlugin",group:"filter",make:()=>Xn({})},{dir:"SortPlugin",group:"filter",make:()=>Zn({})},{dir:"ViewSwitchPlugin",group:"filter",make:()=>ti({})},{dir:"CountPlugin",group:"filter",make:()=>pn({})},{dir:"SelectAllPlugin",group:"filter",make:()=>ni({})},{dir:"SelectMarkPlugin",group:"card",make:()=>Jn({})},{dir:"KindBadgePlugin",group:"card",make:()=>Nl({})},{dir:"DurationPlugin",group:"card",make:()=>Tl({fallback:!0})},{dir:"StatusBadgePlugin",group:"card",make:()=>er({})},{dir:"FavoritePlugin",group:"card",make:()=>ri({})},{dir:"CardActionsPlugin",group:"card",make:()=>ii({})},{dir:"MetaLinePlugin",group:"card",make:()=>tr({show:["size","dimension","folder"]})},{dir:"BulkBarPlugin",group:"batch",make:()=>li({})},{dir:"PaginationPlugin",group:"batch",make:()=>Pt({})},{dir:"DropzonePlugin",group:"flow",make:()=>$l({})},{dir:"EmptyStatePlugin",group:"flow",make:()=>ut({})},{dir:"LightBoxPlugin",group:"flow",make:()=>Qt({})}],gs=nk.map(e=>{const t=tk(e.dir);return{dir:e.dir,factory:`create${e.dir.replace(/Plugin$/,"")}Plugin`,group:e.group,priority:ek(e.dir),summary:t.description,doc:t,make:e.make}}).sort((e,t)=>pc.indexOf(e.group)-pc.indexOf(t.group)||e.priority-t.priority),cP={multiple:!0,pageSize:8},rk=xt(tt,[$l({label:"拖素材进来，或点击选择文件"}),qn({placeholder:"搜素材名 / 标签"}),fn({allLabel:"全部"}),Yn({max:5}),Xn({allLabel:"全部素材"}),Zn({}),pn({}),Jn({showIndex:!0}),ri({action:"favorite"}),ii({actions:[{action:"preview",label:"预览",icon:"⌕"},{action:"download",label:"下载",icon:"↓"}]}),tr({show:["size","dimension","folder"],maxTags:2}),er({}),li({label:"已选 {n} 项"}),Pt({pageSizes:[12,24,48]}),ut({clearLabel:"清空全部筛选"}),Qt({arrows:!0,restoreFocus:!0})]),ik={id:"design-library",title:"品牌素材库",group:"内容运营",ref:{label:"Figma Assets / 蓝湖素材库",url:"https://www.figma.com/"},pain:"设计师找不到上周那张主视觉：命名靠人记、分组靠翻页、下载要挨个点。",plugs:[{fn:"createDropzonePlugin",cfg:'label: "拖素材进来，或点击选择文件"',why:"新素材从拖拽进，不提供第二条上传路径。"},{fn:"createSearchPlugin",cfg:'placeholder: "搜素材名 / 标签"',why:"标题 + 标签 + 文件名三路匹配，输错字也能命中。"},{fn:"createKindFilterPlugin",cfg:'allLabel: "全部"',why:"图片和视频混在一库里，先按介质收窄。"},{fn:"createTagFilterPlugin",cfg:"max: 5",why:"运营维护的活动 / 场景标签，比文件夹更贴近找图的思路。"},{fn:"createFolderFilterPlugin",cfg:'allLabel: "全部素材"',why:"分组按「谁负责」划，数量现算，不依赖后端同步。"},{fn:"createSortPlugin",why:"默认按创建时间倒序：刚做完的永远在最前。"},{fn:"createCountPlugin",why:"筛选后立刻告诉用户还剩多少，避免以为筛空了。"},{fn:"createSelectMarkPlugin",cfg:"showIndex: true",why:"批量插入设计稿时，选择顺序本身有语义。"},{fn:"createFavoritePlugin",cfg:'action: "favorite"',why:"收藏是高频动作，但状态归宿主存。"},{fn:"createCardActionsPlugin",cfg:'actions: [{ action: "download", label: "下载", icon: "↓" }]',why:"单张素材要能直接下载，不必先选中再批量。"},{fn:"createMetaLinePlugin",cfg:'show: ["size", "dimension", "folder"], maxTags: 2',why:"体积与分辨率是设计师挑图的硬指标。"},{fn:"createStatusBadgePlugin",why:"转码中的视频不该被当成可用素材。"},{fn:"createBulkBarPlugin",cfg:'label: "已选 {n} 项"',why:"批量交给下游时，需要一次性把 id 交出去。"},{fn:"createPaginationPlugin",cfg:"pageSizes: [12, 24, 48]",why:"几千项素材不可能一次铺完，分页给「全选」明确边界。"},{fn:"createEmptyStatePlugin",cfg:'clearLabel: "清空全部筛选"',why:"筛空时给出口，而不是让用户面对一片空白。"},{fn:"createLightBoxPlugin",cfg:"arrows: true, restoreFocus: true",why:"缩略图看不清细节，双击看原图。"}],props:["pageSize={12}","maxSelected={24}","columnWidth={168}"],note:"16 个插件同时装着，用户看到的仍然只是一个素材库 —— 没有多出来的按钮，也没有互相打架的布局。",tone:"dark"};function lk(){const[e,t]=y.useState(Ke),n=y.useCallback((r,i)=>{if(r!=="favorite"||!i.id)return;const l=i.id;t(o=>o.map(s=>s.id===l?{...s,favorite:!s.favorite}:s))},[]);return u.jsx("div",{className:"stage",children:u.jsx(rk,{items:e,folders:at,pageSize:12,maxSelected:24,columnWidth:168,onAssetAction:n,onUpload:r=>{console.info("[design-library] upload",r.map(i=>i.name))}})})}const ok=Object.freeze(Object.defineProperty({__proto__:null,default:lk,meta:ik},Symbol.toStringTag,{value:"Module"})),sk=Yh(96).filter(e=>e.folderId==="f-ugc"||e.status!=="ready"),ak=xt(tt,[Zn({}),Yn({max:4,sort:"name"}),ti({}),pn({showTotal:!1,showSelected:!0}),ni({selectLabel:"全选本页",clearLabel:"取消"}),Nl({labels:{video:"视频"},showFor:["video"]}),er({labels:{processing:"转码中",failed:"转码失败"}}),ii({actions:[{action:"preview",label:"预览",icon:"⌕"},{action:"reject",label:"驳回",icon:"×",tone:"danger"}]}),li({label:"待审 {n} 项",actions:[{action:"bulk:approve",label:"批量通过"},{action:"bulk:reject",label:"批量驳回",tone:"danger"}]}),Pt({pageSizes:[12,24]}),ut({emptyText:"今天没有待审投稿",filteredText:"这个条件下没有投稿"}),Qt({})]),uk={id:"ugc-review",title:"用户投稿审核",group:"内容运营",ref:{label:"小红书 / 抖音创作者后台",url:"https://creator.xiaohongshu.com/"},pain:"待审队列里混着「还没转码好」的素材，运营选了它批量通过，结果一半操作失败。",plugs:[{fn:"createSortPlugin",why:"按创建时间排，先来先审。"},{fn:"createTagFilterPlugin",cfg:'max: 4, sort: "name"',why:"按投稿话题分批处理，一次只审一类。"},{fn:"createViewSwitchPlugin",why:"审核看细节用网格，核对名单用列表。"},{fn:"createCountPlugin",cfg:"showTotal: false, showSelected: true",why:"总量没意义，只看「这轮选了几条」。"},{fn:"createSelectAllPlugin",cfg:'selectLabel: "全选本页", clearLabel: "取消"',why:"审核是批量动作，全选是主路径；跳过未就绪项是硬要求。"},{fn:"createKindBadgePlugin",cfg:'labels: { video: "视频" }, showFor: ["video"]',why:"视频要单独过一遍人工，角标先标出来。"},{fn:"createStatusBadgePlugin",cfg:'{ labels: { processing: "转码中", failed: "转码失败" } }',why:"状态必须一眼可见，否则选到就是白操作。"},{fn:"createCardActionsPlugin",cfg:'actions: [{ action: "reject", label: "驳回", tone: "danger" }]',why:"单条驳回比勾选再点批量快。"},{fn:"createBulkBarPlugin",cfg:'label: "待审 {n} 项"',why:"批量通过是这一页的核心动作，固定页脚常驻。"},{fn:"createPaginationPlugin",cfg:"pageSizes: [12, 24]",why:"一屏审 12 条是人的注意力上限。"},{fn:"createEmptyStatePlugin",cfg:'{ emptyText: "今天没有待审投稿" }',why:"审完要看得出「真的清空了」。"},{fn:"createLightBoxPlugin",why:"审核要看原图，不看缩略图。"}],props:["pageSize={12}","maxSelected={12}","columnWidth={150}"],note:"未就绪素材点了也不进选择集 —— 这是 Core 的语义，不是插件的补丁。",tone:"dark"};function ck(){const[e,t]=y.useState(sk),[n,r]=y.useState("—"),i=y.useCallback((l,o)=>{var a;const s=((a=o.ids)==null?void 0:a.length)??(o.id?1:0);r(`${l} · ${s} 项`),l==="bulk:reject"&&o.ids&&t(c=>c.filter(d=>{var f;return!((f=o.ids)!=null&&f.includes(d.id))}))},[]);return u.jsxs("div",{className:"stage",children:[u.jsx(ak,{items:e,folders:at,pageSize:12,maxSelected:12,columnWidth:150,onAssetAction:i}),u.jsxs("p",{className:"stage-tip",children:["最近一次动作 ",u.jsx("b",{children:n})]})]})}const dk=Object.freeze(Object.defineProperty({__proto__:null,default:ck,meta:uk},Symbol.toStringTag,{value:"Module"})),fk=xt(tt,[fn({allLabel:"全部素材"}),Xn({allLabel:"全部文件夹"}),Zn({}),ti({labels:{grid:"封面",list:"清单"}}),pn({showTotal:!0,showVisible:!0,showSelected:!1}),Tl({fallback:!0}),er({}),Jn({showIndex:!1}),ri({action:"favorite"}),tr({show:["size","dimension"],maxTags:1}),ut({emptyText:"视频库里还没有素材"}),Qt({arrows:!0,restoreFocus:!0})]),pk={id:"video-picker",title:"视频选题清单",group:"内容运营",ref:{label:"Frame.io / 剪映素材中心",url:"https://frame.io/"},pain:"挑片要一眼看到时长和规格，网格缩略图什么都看不出来，只能一个个点开。",plugs:[{fn:"createKindFilterPlugin",cfg:'allLabel: "全部素材"',why:"默认全部，但图片与视频必须能一键分开。"},{fn:"createFolderFilterPlugin",cfg:'allLabel: "全部文件夹"',why:"按投放渠道分文件夹，选题时先选渠道。"},{fn:"createSortPlugin",why:"按时长排序找「15 秒以内」的素材。"},{fn:"createViewSwitchPlugin",cfg:'labels: { grid: "封面", list: "清单" }',why:"同一份数据两种读法，标签也跟着改口语化文案。"},{fn:"createCountPlugin",cfg:"showTotal: true, showVisible: true, showSelected: false",why:"选题时关心「这个渠道有多少片」，不关心选了几条。"},{fn:"createDurationPlugin",cfg:"fallback: true",why:"时长是第一筛选维度，缺数据的显示占位而不是留白。"},{fn:"createStatusBadgePlugin",why:"转码中的片子现在还不能剪。"},{fn:"createSelectMarkPlugin",cfg:"showIndex: false",why:"选题单不需要顺序，只要看得出选没选。"},{fn:"createFavoritePlugin",cfg:'action: "favorite"',why:"收藏 = 加入选题单，是这一页的产出。"},{fn:"createMetaLinePlugin",cfg:'show: ["size", "dimension"], maxTags: 1',why:"规格与体积决定能不能直接进剪辑。"},{fn:"createEmptyStatePlugin",cfg:'{ emptyText: "视频库里还没有素材" }',why:"空库时引导上传，而不是提示「换个筛选条件」。"},{fn:"createLightBoxPlugin",cfg:"arrows: true, restoreFocus: true",why:"连续看片，左右键比来回点击快得多。"}],props:["pageSize={10}",'initialView="list"',"columnWidth={160}"],note:"列表视图下时长与规格仍在同一行没拥挤 —— 视图切换换的是排布，不是数据。",tone:"dark"};function gk(){const[e,t]=y.useState(Ke.filter(n=>n.kind==="video"||n.folderId==="f-product"));return u.jsx("div",{className:"stage",children:u.jsx(fk,{items:e,folders:at,pageSize:10,initialView:"list",columnWidth:160,onAssetAction:(n,r)=>{if(n!=="favorite"||!r.id)return;const i=r.id;t(l=>l.map(o=>o.id===i?{...o,favorite:!o.favorite}:o))}})})}const mk=Object.freeze(Object.defineProperty({__proto__:null,default:gk,meta:pk},Symbol.toStringTag,{value:"Module"})),hk=xt(tt,[qn({placeholder:"搜商品图",hotkey:!1}),fn({allLabel:"全部"}),Yn({max:4}),Xn({allLabel:"全部图库"}),pn({showTotal:!1,showVisible:!1}),Jn({showIndex:!1}),tr({show:["dimension","size"],maxTags:0}),Pt({pageSizes:[8,16]}),ut({filteredText:"没有匹配的图片"}),Qt({})]),yk={id:"product-picker",title:"商品选图（单选）",group:"电商后台",ref:{label:"淘宝千牛 / 抖店后台",url:"https://myseller.taobao.com/"},pain:"商品主图只能选一张，但素材库通常长得像多选页：点了两张，用户不知道到底存了哪张。",plugs:[{fn:"createSearchPlugin",cfg:'placeholder: "搜商品图", hotkey: false',why:"这个页面嵌在表单里，全局热键会和表单冲突，关掉。"},{fn:"createKindFilterPlugin",cfg:'allLabel: "全部"',why:"主图只用图片，但图库里也有视频，先收窄。"},{fn:"createTagFilterPlugin",cfg:"max: 4",why:"按品类标签找图，比翻页快。"},{fn:"createFolderFilterPlugin",cfg:'allLabel: "全部图库"',why:"按店铺 / 品牌分图库。"},{fn:"createCountPlugin",cfg:"showTotal: false, showVisible: false",why:"选图场景只关心选中了谁，数字越多越乱。"},{fn:"createSelectMarkPlugin",cfg:"showIndex: false",why:"单选不需要序号，一个对勾就够。"},{fn:"createMetaLinePlugin",cfg:'show: ["dimension", "size"], maxTags: 0',why:"主图有最低分辨率要求，尺寸必须一眼可见。"},{fn:"createPaginationPlugin",cfg:"pageSizes: [8, 16]",why:"嵌在表单里，一屏 8 张不会把页面撑太长。"},{fn:"createEmptyStatePlugin",cfg:'{ filteredText: "没有匹配的图片" }',why:"筛空时提示换个词，而不是让用户以为图库是空的。"},{fn:"createLightBoxPlugin",why:"主图要看清细节，尤其是有没有水印。"}],props:["multiple={false}","maxSelected={1}","pageSize={8}","columnWidth={140}"],note:"单选语义由 Core 负责：multiple={false} 时点第二张直接替换，不会堆积选中项。",tone:"light"};function vk(){const[e,t]=y.useState(["a-06"]),n=y.useCallback(r=>{t(r.slice(0,1))},[]);return u.jsxs("div",{className:"stage",children:[u.jsx(hk,{items:Ke.filter(r=>r.folderId==="f-product"||r.kind==="image"),folders:at,multiple:!1,maxSelected:1,pageSize:8,columnWidth:140,selectedIds:e,onSelectionChange:n}),u.jsxs("p",{className:"stage-tip",children:["当前主图 ",u.jsx("b",{children:e[0]??"未选择"})]})]})}const wk=Object.freeze(Object.defineProperty({__proto__:null,default:vk,meta:yk},Symbol.toStringTag,{value:"Module"})),xk=`/**
 * 场景 01 · 品牌素材库
 *
 * 设计团队每天的开场页：左边选分组、上面搜关键词、卡片上能直接收藏和下载。
 * 十一个插件装在一起，但用户看到的只是一个能用的素材库 —— 这是插件式设计的全部意义。
 */
import React, { useCallback, useState } from "react";
import { AssetLibraryCore, withAssetLibraryPlugins } from "vane-asset-library";
import type { AssetItem } from "vane-asset-library";
import { createBulkBarPlugin } from "vane-asset-library/custom-plugins/BulkBarPlugin";
import { createCardActionsPlugin } from "vane-asset-library/custom-plugins/CardActionsPlugin";
import { createCountPlugin } from "vane-asset-library/custom-plugins/CountPlugin";
import { createDropzonePlugin } from "vane-asset-library/custom-plugins/DropzonePlugin";
import { createEmptyStatePlugin } from "vane-asset-library/custom-plugins/EmptyStatePlugin";
import { createFavoritePlugin } from "vane-asset-library/custom-plugins/FavoritePlugin";
import { createFolderFilterPlugin } from "vane-asset-library/custom-plugins/FolderFilterPlugin";
import { createKindFilterPlugin } from "vane-asset-library/custom-plugins/KindFilterPlugin";
import { createLightBoxPlugin } from "vane-asset-library/custom-plugins/LightBoxPlugin";
import { createMetaLinePlugin } from "vane-asset-library/custom-plugins/MetaLinePlugin";
import { createPaginationPlugin } from "vane-asset-library/custom-plugins/PaginationPlugin";
import { createSearchPlugin } from "vane-asset-library/custom-plugins/SearchPlugin";
import { createSelectMarkPlugin } from "vane-asset-library/custom-plugins/SelectMarkPlugin";
import { createSortPlugin } from "vane-asset-library/custom-plugins/SortPlugin";
import { createStatusBadgePlugin } from "vane-asset-library/custom-plugins/StatusBadgePlugin";
import { createTagFilterPlugin } from "vane-asset-library/custom-plugins/TagFilterPlugin";
import { SAMPLE_ASSETS, SAMPLE_FOLDERS } from "../data/samples";
import type { ScenarioMeta } from "./types";

const Library = withAssetLibraryPlugins(AssetLibraryCore, [
  createDropzonePlugin({ label: "拖素材进来，或点击选择文件" }),
  createSearchPlugin({ placeholder: "搜素材名 / 标签" }),
  createKindFilterPlugin({ allLabel: "全部" }),
  createTagFilterPlugin({ max: 5 }),
  createFolderFilterPlugin({ allLabel: "全部素材" }),
  createSortPlugin({}),
  createCountPlugin({}),
  createSelectMarkPlugin({ showIndex: true }),
  createFavoritePlugin({ action: "favorite" }),
  createCardActionsPlugin({
    actions: [
      { action: "preview", label: "预览", icon: "⌕" },
      { action: "download", label: "下载", icon: "↓" },
    ],
  }),
  createMetaLinePlugin({ show: ["size", "dimension", "folder"], maxTags: 2 }),
  createStatusBadgePlugin({}),
  createBulkBarPlugin({ label: "已选 {n} 项" }),
  createPaginationPlugin({ pageSizes: [12, 24, 48] }),
  createEmptyStatePlugin({ clearLabel: "清空全部筛选" }),
  createLightBoxPlugin({ arrows: true, restoreFocus: true }),
]);

export const meta: ScenarioMeta = {
  id: "design-library",
  title: "品牌素材库",
  group: "内容运营",
  ref: { label: "Figma Assets / 蓝湖素材库", url: "https://www.figma.com/" },
  pain: "设计师找不到上周那张主视觉：命名靠人记、分组靠翻页、下载要挨个点。",
  plugs: [
    { fn: "createDropzonePlugin", cfg: 'label: "拖素材进来，或点击选择文件"', why: "新素材从拖拽进，不提供第二条上传路径。" },
    { fn: "createSearchPlugin", cfg: 'placeholder: "搜素材名 / 标签"', why: "标题 + 标签 + 文件名三路匹配，输错字也能命中。" },
    { fn: "createKindFilterPlugin", cfg: 'allLabel: "全部"', why: "图片和视频混在一库里，先按介质收窄。" },
    { fn: "createTagFilterPlugin", cfg: "max: 5", why: "运营维护的活动 / 场景标签，比文件夹更贴近找图的思路。" },
    { fn: "createFolderFilterPlugin", cfg: 'allLabel: "全部素材"', why: "分组按「谁负责」划，数量现算，不依赖后端同步。" },
    { fn: "createSortPlugin", why: "默认按创建时间倒序：刚做完的永远在最前。" },
    { fn: "createCountPlugin", why: "筛选后立刻告诉用户还剩多少，避免以为筛空了。" },
    { fn: "createSelectMarkPlugin", cfg: "showIndex: true", why: "批量插入设计稿时，选择顺序本身有语义。" },
    { fn: "createFavoritePlugin", cfg: 'action: "favorite"', why: "收藏是高频动作，但状态归宿主存。" },
    { fn: "createCardActionsPlugin", cfg: 'actions: [{ action: "download", label: "下载", icon: "↓" }]', why: "单张素材要能直接下载，不必先选中再批量。" },
    { fn: "createMetaLinePlugin", cfg: 'show: ["size", "dimension", "folder"], maxTags: 2', why: "体积与分辨率是设计师挑图的硬指标。" },
    { fn: "createStatusBadgePlugin", why: "转码中的视频不该被当成可用素材。" },
    { fn: "createBulkBarPlugin", cfg: 'label: "已选 {n} 项"', why: "批量交给下游时，需要一次性把 id 交出去。" },
    { fn: "createPaginationPlugin", cfg: "pageSizes: [12, 24, 48]", why: "几千项素材不可能一次铺完，分页给「全选」明确边界。" },
    { fn: "createEmptyStatePlugin", cfg: 'clearLabel: "清空全部筛选"', why: "筛空时给出口，而不是让用户面对一片空白。" },
    { fn: "createLightBoxPlugin", cfg: "arrows: true, restoreFocus: true", why: "缩略图看不清细节，双击看原图。" },
  ],
  props: ["pageSize={12}", "maxSelected={24}", "columnWidth={168}"],
  note: "16 个插件同时装着，用户看到的仍然只是一个素材库 —— 没有多出来的按钮，也没有互相打架的布局。",
  tone: "dark",
};

export default function DesignLibraryScene() {
  const [items, setItems] = useState<AssetItem[]>(SAMPLE_ASSETS);

  const onAssetAction = useCallback(
    (action: string, payload: { id?: string; ids?: string[] }) => {
      if (action !== "favorite" || !payload.id) return;
      const target = payload.id;
      setItems((prev) =>
        prev.map((it) => (it.id === target ? { ...it, favorite: !it.favorite } : it))
      );
    },
    []
  );

  return (
    <div className="stage">
      <Library
        items={items}
        folders={SAMPLE_FOLDERS}
        pageSize={12}
        maxSelected={24}
        columnWidth={168}
        onAssetAction={onAssetAction}
        onUpload={(files) => {
          // 真实项目在这里走上传；场景里只把文件名写进控制台，避免伪造进度
          console.info("[design-library] upload", files.map((f) => f.name));
        }}
      />
    </div>
  );
}
`,Sk=`/**
 * 场景 02 · 用户投稿审核
 *
 * 运营只看两件事：哪些还没转好、哪些可以批量通过。所以这里把「状态」放到第一位，
 * 选择上限开得很小（一次审 12 条），分页只给 12 / 24 两档。
 */
import React, { useCallback, useState } from "react";
import { AssetLibraryCore, withAssetLibraryPlugins } from "vane-asset-library";
import type { AssetItem } from "vane-asset-library";
import { createBulkBarPlugin } from "vane-asset-library/custom-plugins/BulkBarPlugin";
import { createCardActionsPlugin } from "vane-asset-library/custom-plugins/CardActionsPlugin";
import { createCountPlugin } from "vane-asset-library/custom-plugins/CountPlugin";
import { createEmptyStatePlugin } from "vane-asset-library/custom-plugins/EmptyStatePlugin";
import { createKindBadgePlugin } from "vane-asset-library/custom-plugins/KindBadgePlugin";
import { createLightBoxPlugin } from "vane-asset-library/custom-plugins/LightBoxPlugin";
import { createPaginationPlugin } from "vane-asset-library/custom-plugins/PaginationPlugin";
import { createSelectAllPlugin } from "vane-asset-library/custom-plugins/SelectAllPlugin";
import { createSortPlugin } from "vane-asset-library/custom-plugins/SortPlugin";
import { createStatusBadgePlugin } from "vane-asset-library/custom-plugins/StatusBadgePlugin";
import { createTagFilterPlugin } from "vane-asset-library/custom-plugins/TagFilterPlugin";
import { createViewSwitchPlugin } from "vane-asset-library/custom-plugins/ViewSwitchPlugin";
import { SAMPLE_FOLDERS, bulkAssets } from "../data/samples";
import type { ScenarioMeta } from "./types";

const UGC = bulkAssets(96).filter((it) => it.folderId === "f-ugc" || it.status !== "ready");

const Library = withAssetLibraryPlugins(AssetLibraryCore, [
  createSortPlugin({}),
  createTagFilterPlugin({ max: 4, sort: "name" }),
  createViewSwitchPlugin({}),
  createCountPlugin({ showTotal: false, showSelected: true }),
  createSelectAllPlugin({ selectLabel: "全选本页", clearLabel: "取消" }),
  createKindBadgePlugin({ labels: { video: "视频" }, showFor: ["video"] }),
  createStatusBadgePlugin({ labels: { processing: "转码中", failed: "转码失败" } }),
  createCardActionsPlugin({
    actions: [
      { action: "preview", label: "预览", icon: "⌕" },
      { action: "reject", label: "驳回", icon: "×", tone: "danger" },
    ],
  }),
  createBulkBarPlugin({
    label: "待审 {n} 项",
    actions: [
      { action: "bulk:approve", label: "批量通过" },
      { action: "bulk:reject", label: "批量驳回", tone: "danger" },
    ],
  }),
  createPaginationPlugin({ pageSizes: [12, 24] }),
  createEmptyStatePlugin({ emptyText: "今天没有待审投稿", filteredText: "这个条件下没有投稿" }),
  createLightBoxPlugin({}),
]);

export const meta: ScenarioMeta = {
  id: "ugc-review",
  title: "用户投稿审核",
  group: "内容运营",
  ref: { label: "小红书 / 抖音创作者后台", url: "https://creator.xiaohongshu.com/" },
  pain: "待审队列里混着「还没转码好」的素材，运营选了它批量通过，结果一半操作失败。",
  plugs: [
    { fn: "createSortPlugin", why: "按创建时间排，先来先审。" },
    { fn: "createTagFilterPlugin", cfg: 'max: 4, sort: "name"', why: "按投稿话题分批处理，一次只审一类。" },
    { fn: "createViewSwitchPlugin", why: "审核看细节用网格，核对名单用列表。" },
    { fn: "createCountPlugin", cfg: "showTotal: false, showSelected: true", why: "总量没意义，只看「这轮选了几条」。" },
    { fn: "createSelectAllPlugin", cfg: 'selectLabel: "全选本页", clearLabel: "取消"', why: "审核是批量动作，全选是主路径；跳过未就绪项是硬要求。" },
    { fn: "createKindBadgePlugin", cfg: 'labels: { video: "视频" }, showFor: ["video"]', why: "视频要单独过一遍人工，角标先标出来。" },
    { fn: "createStatusBadgePlugin", cfg: '{ labels: { processing: "转码中", failed: "转码失败" } }', why: "状态必须一眼可见，否则选到就是白操作。" },
    { fn: "createCardActionsPlugin", cfg: 'actions: [{ action: "reject", label: "驳回", tone: "danger" }]', why: "单条驳回比勾选再点批量快。" },
    { fn: "createBulkBarPlugin", cfg: 'label: "待审 {n} 项"', why: "批量通过是这一页的核心动作，固定页脚常驻。" },
    { fn: "createPaginationPlugin", cfg: "pageSizes: [12, 24]", why: "一屏审 12 条是人的注意力上限。" },
    { fn: "createEmptyStatePlugin", cfg: '{ emptyText: "今天没有待审投稿" }', why: "审完要看得出「真的清空了」。" },
    { fn: "createLightBoxPlugin", why: "审核要看原图，不看缩略图。" },
  ],
  props: ["pageSize={12}", "maxSelected={12}", "columnWidth={150}"],
  note: "未就绪素材点了也不进选择集 —— 这是 Core 的语义，不是插件的补丁。",
  tone: "dark",
};

export default function UgcReviewScene() {
  const [items, setItems] = useState<AssetItem[]>(UGC);
  const [lastAction, setLastAction] = useState("—");

  const onAssetAction = useCallback(
    (action: string, payload: { id?: string; ids?: string[] }) => {
      const count = payload.ids?.length ?? (payload.id ? 1 : 0);
      setLastAction(\`\${action} · \${count} 项\`);
      if (action === "bulk:reject" && payload.ids) {
        setItems((prev) => prev.filter((it) => !payload.ids?.includes(it.id)));
      }
    },
    []
  );

  return (
    <div className="stage">
      <Library
        items={items}
        folders={SAMPLE_FOLDERS}
        pageSize={12}
        maxSelected={12}
        columnWidth={150}
        onAssetAction={onAssetAction}
      />
      <p className="stage-tip">
        最近一次动作 <b>{lastAction}</b>
      </p>
    </div>
  );
}
`,kk=`/**
 * 场景 03 · 视频选题
 *
 * 视频库的挑片页：先按时长和更新时间筛，再逐条看时长与规格，收藏进选题单。
 * 这一页默认就是列表视图 —— 挑片时要读文件名与时长，网格反而不如列表。
 */
import React, { useState } from "react";
import { AssetLibraryCore, withAssetLibraryPlugins } from "vane-asset-library";
import type { AssetItem } from "vane-asset-library";
import { createCountPlugin } from "vane-asset-library/custom-plugins/CountPlugin";
import { createDurationPlugin } from "vane-asset-library/custom-plugins/DurationPlugin";
import { createEmptyStatePlugin } from "vane-asset-library/custom-plugins/EmptyStatePlugin";
import { createFavoritePlugin } from "vane-asset-library/custom-plugins/FavoritePlugin";
import { createFolderFilterPlugin } from "vane-asset-library/custom-plugins/FolderFilterPlugin";
import { createKindFilterPlugin } from "vane-asset-library/custom-plugins/KindFilterPlugin";
import { createLightBoxPlugin } from "vane-asset-library/custom-plugins/LightBoxPlugin";
import { createMetaLinePlugin } from "vane-asset-library/custom-plugins/MetaLinePlugin";
import { createSelectMarkPlugin } from "vane-asset-library/custom-plugins/SelectMarkPlugin";
import { createSortPlugin } from "vane-asset-library/custom-plugins/SortPlugin";
import { createStatusBadgePlugin } from "vane-asset-library/custom-plugins/StatusBadgePlugin";
import { createViewSwitchPlugin } from "vane-asset-library/custom-plugins/ViewSwitchPlugin";
import { SAMPLE_ASSETS, SAMPLE_FOLDERS } from "../data/samples";
import type { ScenarioMeta } from "./types";

const Library = withAssetLibraryPlugins(AssetLibraryCore, [
  createKindFilterPlugin({ allLabel: "全部素材" }),
  createFolderFilterPlugin({ allLabel: "全部文件夹" }),
  createSortPlugin({}),
  createViewSwitchPlugin({ labels: { grid: "封面", list: "清单" } }),
  createCountPlugin({ showTotal: true, showVisible: true, showSelected: false }),
  createDurationPlugin({ fallback: true }),
  createStatusBadgePlugin({}),
  createSelectMarkPlugin({ showIndex: false }),
  createFavoritePlugin({ action: "favorite" }),
  createMetaLinePlugin({ show: ["size", "dimension"], maxTags: 1 }),
  createEmptyStatePlugin({ emptyText: "视频库里还没有素材" }),
  createLightBoxPlugin({ arrows: true, restoreFocus: true }),
]);

export const meta: ScenarioMeta = {
  id: "video-picker",
  title: "视频选题清单",
  group: "内容运营",
  ref: { label: "Frame.io / 剪映素材中心", url: "https://frame.io/" },
  pain: "挑片要一眼看到时长和规格，网格缩略图什么都看不出来，只能一个个点开。",
  plugs: [
    { fn: "createKindFilterPlugin", cfg: 'allLabel: "全部素材"', why: "默认全部，但图片与视频必须能一键分开。" },
    { fn: "createFolderFilterPlugin", cfg: 'allLabel: "全部文件夹"', why: "按投放渠道分文件夹，选题时先选渠道。" },
    { fn: "createSortPlugin", why: "按时长排序找「15 秒以内」的素材。" },
    { fn: "createViewSwitchPlugin", cfg: 'labels: { grid: "封面", list: "清单" }', why: "同一份数据两种读法，标签也跟着改口语化文案。" },
    { fn: "createCountPlugin", cfg: "showTotal: true, showVisible: true, showSelected: false", why: "选题时关心「这个渠道有多少片」，不关心选了几条。" },
    { fn: "createDurationPlugin", cfg: "fallback: true", why: "时长是第一筛选维度，缺数据的显示占位而不是留白。" },
    { fn: "createStatusBadgePlugin", why: "转码中的片子现在还不能剪。" },
    { fn: "createSelectMarkPlugin", cfg: "showIndex: false", why: "选题单不需要顺序，只要看得出选没选。" },
    { fn: "createFavoritePlugin", cfg: 'action: "favorite"', why: "收藏 = 加入选题单，是这一页的产出。" },
    { fn: "createMetaLinePlugin", cfg: 'show: ["size", "dimension"], maxTags: 1', why: "规格与体积决定能不能直接进剪辑。" },
    { fn: "createEmptyStatePlugin", cfg: '{ emptyText: "视频库里还没有素材" }', why: "空库时引导上传，而不是提示「换个筛选条件」。" },
    { fn: "createLightBoxPlugin", cfg: "arrows: true, restoreFocus: true", why: "连续看片，左右键比来回点击快得多。" },
  ],
  props: ["pageSize={10}", 'initialView="list"', "columnWidth={160}"],
  note: "列表视图下时长与规格仍在同一行没拥挤 —— 视图切换换的是排布，不是数据。",
  tone: "dark",
};

export default function VideoPickerScene() {
  const [items, setItems] = useState<AssetItem[]>(
    // 只留视频 + 少量图片当作封面参考
    SAMPLE_ASSETS.filter((it) => it.kind === "video" || it.folderId === "f-product")
  );

  return (
    <div className="stage">
      <Library
        items={items}
        folders={SAMPLE_FOLDERS}
        pageSize={10}
        initialView="list"
        columnWidth={160}
        onAssetAction={(action, payload) => {
          if (action !== "favorite" || !payload.id) return;
          const target = payload.id;
          setItems((prev) =>
            prev.map((it) => (it.id === target ? { ...it, favorite: !it.favorite } : it))
          );
        }}
      />
    </div>
  );
}
`,Pk=`/**
 * 场景 04 · 商品选图（单选 · 浅色后台）
 *
 * 同一个组件在「选一张」时怎么用：multiple={false} + maxSelected={1}，
 * 点第二张自动替换第一张，不弹「只能选一个」的提示。
 * 底色换成浅色（tone-light 只覆盖语义令牌，组件代码一行不改）。
 */
import React, { useCallback, useState } from "react";
import { AssetLibraryCore, withAssetLibraryPlugins } from "vane-asset-library";
import { createCountPlugin } from "vane-asset-library/custom-plugins/CountPlugin";
import { createEmptyStatePlugin } from "vane-asset-library/custom-plugins/EmptyStatePlugin";
import { createFolderFilterPlugin } from "vane-asset-library/custom-plugins/FolderFilterPlugin";
import { createKindFilterPlugin } from "vane-asset-library/custom-plugins/KindFilterPlugin";
import { createLightBoxPlugin } from "vane-asset-library/custom-plugins/LightBoxPlugin";
import { createMetaLinePlugin } from "vane-asset-library/custom-plugins/MetaLinePlugin";
import { createPaginationPlugin } from "vane-asset-library/custom-plugins/PaginationPlugin";
import { createSearchPlugin } from "vane-asset-library/custom-plugins/SearchPlugin";
import { createSelectMarkPlugin } from "vane-asset-library/custom-plugins/SelectMarkPlugin";
import { createTagFilterPlugin } from "vane-asset-library/custom-plugins/TagFilterPlugin";
import { SAMPLE_ASSETS, SAMPLE_FOLDERS } from "../data/samples";
import type { ScenarioMeta } from "./types";

const Library = withAssetLibraryPlugins(AssetLibraryCore, [
  createSearchPlugin({ placeholder: "搜商品图", hotkey: false }),
  createKindFilterPlugin({ allLabel: "全部" }),
  createTagFilterPlugin({ max: 4 }),
  createFolderFilterPlugin({ allLabel: "全部图库" }),
  createCountPlugin({ showTotal: false, showVisible: false }),
  createSelectMarkPlugin({ showIndex: false }),
  createMetaLinePlugin({ show: ["dimension", "size"], maxTags: 0 }),
  createPaginationPlugin({ pageSizes: [8, 16] }),
  createEmptyStatePlugin({ filteredText: "没有匹配的图片" }),
  createLightBoxPlugin({}),
]);

export const meta: ScenarioMeta = {
  id: "product-picker",
  title: "商品选图（单选）",
  group: "电商后台",
  ref: { label: "淘宝千牛 / 抖店后台", url: "https://myseller.taobao.com/" },
  pain: "商品主图只能选一张，但素材库通常长得像多选页：点了两张，用户不知道到底存了哪张。",
  plugs: [
    { fn: "createSearchPlugin", cfg: 'placeholder: "搜商品图", hotkey: false', why: "这个页面嵌在表单里，全局热键会和表单冲突，关掉。" },
    { fn: "createKindFilterPlugin", cfg: 'allLabel: "全部"', why: "主图只用图片，但图库里也有视频，先收窄。" },
    { fn: "createTagFilterPlugin", cfg: "max: 4", why: "按品类标签找图，比翻页快。" },
    { fn: "createFolderFilterPlugin", cfg: 'allLabel: "全部图库"', why: "按店铺 / 品牌分图库。" },
    { fn: "createCountPlugin", cfg: "showTotal: false, showVisible: false", why: "选图场景只关心选中了谁，数字越多越乱。" },
    { fn: "createSelectMarkPlugin", cfg: "showIndex: false", why: "单选不需要序号，一个对勾就够。" },
    { fn: "createMetaLinePlugin", cfg: 'show: ["dimension", "size"], maxTags: 0', why: "主图有最低分辨率要求，尺寸必须一眼可见。" },
    { fn: "createPaginationPlugin", cfg: "pageSizes: [8, 16]", why: "嵌在表单里，一屏 8 张不会把页面撑太长。" },
    { fn: "createEmptyStatePlugin", cfg: '{ filteredText: "没有匹配的图片" }', why: "筛空时提示换个词，而不是让用户以为图库是空的。" },
    { fn: "createLightBoxPlugin", why: "主图要看清细节，尤其是有没有水印。" },
  ],
  props: ["multiple={false}", "maxSelected={1}", "pageSize={8}", "columnWidth={140}"],
  note: "单选语义由 Core 负责：multiple={false} 时点第二张直接替换，不会堆积选中项。",
  tone: "light",
};

export default function ProductPickerScene() {
  const [selected, setSelected] = useState<string[]>(["a-06"]);

  // 受控用法：真相在页面（表单）这一侧，组件只回传
  const onSelectionChange = useCallback((ids: string[]) => {
    setSelected(ids.slice(0, 1));
  }, []);

  return (
    <div className="stage">
      <Library
        items={SAMPLE_ASSETS.filter((it) => it.folderId === "f-product" || it.kind === "image")}
        folders={SAMPLE_FOLDERS}
        multiple={false}
        maxSelected={1}
        pageSize={8}
        columnWidth={140}
        selectedIds={selected}
        onSelectionChange={onSelectionChange}
      />
      <p className="stage-tip">
        当前主图 <b>{selected[0] ?? "未选择"}</b>
      </p>
    </div>
  );
}
`,bk=Object.assign({"./01-design-library.tsx":ok,"./02-ugc-review.tsx":dk,"./03-video-picker.tsx":mk,"./04-product-picker.tsx":wk}),_k=Object.assign({"./01-design-library.tsx":xk,"./02-ugc-review.tsx":Sk,"./03-video-picker.tsx":kk,"./04-product-picker.tsx":Pk}),Ck=e=>e.replace(/^\.\//,""),pl=Object.entries(bk).map(([e,t])=>{const n=Ck(e);return{meta:t.meta,Component:t.default,file:n,source:_k[e]??""}}).sort((e,t)=>e.file.localeCompare(t.file)),dP=pl.reduce((e,t)=>(e.includes(t.meta.group)||e.push(t.meta.group),e),[]),fP=Array.from(new Set(pl.flatMap(e=>e.meta.plugs.map(t=>t.fn)))).sort(),Ek="import|from|export|default|function|return|const|let|var|new|if|else|for|of|in|while|switch|case|break|continue|type|interface|extends|implements|as|satisfies|await|async|throw|try|catch|finally|class|typeof|instanceof|delete|void|yield",Ak="true|false|null|undefined|this|super",Lk="number|string|boolean|object|any|unknown|never|React|HTMLElement|void",hc=new RegExp([String.raw`(\/\/[^\n]*|\/\*[\s\S]*?\*\/)`,String.raw`(\`(?:\\[\s\S]|[^\\\`])*\`|"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*')`,String.raw`\b(${Ek})\b`,String.raw`\b(${Ak})\b`,String.raw`\b(${Lk})\b`,String.raw`(<\/?[A-Za-z][\w.$]*)`,String.raw`\b(\d+(?:\.\d+)?)\b`].join("|"),"g"),yc=["tok-comment","tok-string","tok-kw","tok-lit","tok-type","tok-tag","tok-num"];function jk(e){const t=[];let n=0;hc.lastIndex=0;let r;for(;r=hc.exec(e);){r.index>n&&t.push({text:e.slice(n,r.index),cls:null});const i=yc.findIndex((l,o)=>r[o+1]!==void 0);t.push({text:r[0],cls:i>=0?yc[i]:null}),n=r.index+r[0].length}return n<e.length&&t.push({text:e.slice(n),cls:null}),t}function vc(e){try{const t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="fixed",t.style.opacity="0",document.body.appendChild(t),t.select();const n=document.execCommand("copy");return document.body.removeChild(t),n}catch{return!1}}function $k({code:e,title:t="tsx",collapseAfter:n=24,maxHeight:r}){const[i,l]=y.useState("idle"),[o,s]=y.useState(!1),a=y.useMemo(()=>e.replace(/\s+$/,"").split(`
`),[e]),c=n>0&&a.length>n,d=c&&!o?a.slice(0,n).join(`
`):e,f=y.useMemo(()=>jk(d),[d]),m=y.useCallback(async()=>{var w;let v=!1;if((w=navigator.clipboard)!=null&&w.writeText)try{await navigator.clipboard.writeText(e),v=!0}catch{v=vc(e)}else v=vc(e);l(v?"ok":"fail"),window.setTimeout(()=>l("idle"),1600)},[e]);return u.jsxs("div",{className:"code",children:[u.jsxs("div",{className:"code-head",children:[u.jsx("span",{children:t}),u.jsxs("span",{style:{display:"flex",gap:6,alignItems:"center"},children:[u.jsxs("span",{children:[a.length," 行"]}),u.jsx("button",{type:"button",className:`code-copy${i==="ok"?" is-ok":i==="fail"?" is-fail":""}`,onClick:m,children:i==="ok"?"已复制":i==="fail"?"复制失败":"复制"})]})]}),u.jsx("pre",{style:r?{maxHeight:r}:{maxHeight:"none"},children:u.jsx("code",{children:f.map((v,w)=>v.cls?u.jsx("span",{className:v.cls,children:v.text},w):u.jsx(Yr.Fragment,{children:v.text},w))})}),c?u.jsx("button",{type:"button",className:"code-more",onClick:()=>s(v=>!v),children:o?"收起":`展开余下 ${a.length-n} 行`}):null]})}function tp(e){return e.props??e.config??[]}function zk({doc:e}){var i,l,o;const t=tp(e),n=e.events??[],r=e.methods??[];return u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"doc-sec",children:[u.jsx("h5",{children:"属性 Props"}),t.length?u.jsxs("table",{className:"doc-table",children:[u.jsx("thead",{children:u.jsxs("tr",{children:[u.jsx("th",{children:"属性"}),u.jsx("th",{children:"类型"}),u.jsx("th",{children:"默认"}),u.jsx("th",{children:"说明"})]})}),u.jsx("tbody",{children:t.map(s=>u.jsxs("tr",{children:[u.jsx("td",{children:u.jsx("code",{children:s.name})}),u.jsx("td",{children:u.jsx("code",{className:"dim",children:s.type})}),u.jsx("td",{children:u.jsx("code",{className:"dim",children:s.default??"-"})}),u.jsx("td",{children:s.description??"—"})]},s.name))})]}):u.jsx("p",{className:"doc-note",children:"无可配置属性，工厂零参调用即可。"})]}),u.jsxs("div",{className:"doc-sec",children:[u.jsx("h5",{children:"事件 Events"}),n.length?u.jsxs("table",{className:"doc-table",children:[u.jsx("thead",{children:u.jsxs("tr",{children:[u.jsx("th",{children:"事件"}),u.jsx("th",{children:"触发时机"}),u.jsx("th",{children:"说明"})]})}),u.jsx("tbody",{children:n.map(s=>u.jsxs("tr",{children:[u.jsx("td",{children:u.jsx("code",{children:s.name})}),u.jsx("td",{children:s.when}),u.jsx("td",{children:s.description})]},s.name))})]}):u.jsx("p",{className:"doc-note",children:"不参与任何事件。"})]}),u.jsxs("div",{className:"doc-sec",children:[u.jsx("h5",{children:"方法 Methods"}),r.length?u.jsxs("table",{className:"doc-table",children:[u.jsx("thead",{children:u.jsxs("tr",{children:[u.jsx("th",{children:"方法"}),u.jsx("th",{children:"签名"}),u.jsx("th",{children:"说明"})]})}),u.jsx("tbody",{children:r.map(s=>u.jsxs("tr",{children:[u.jsx("td",{children:u.jsx("code",{children:s.name})}),u.jsx("td",{children:u.jsx("code",{className:"dim",children:s.signature})}),u.jsx("td",{children:s.description})]},s.name))})]}):u.jsx("p",{className:"doc-note",children:e.methodsNote??"不调用上下文方法。"})]}),u.jsxs("div",{className:"doc-cols",children:[(i=e.features)!=null&&i.length?u.jsxs("div",{children:[u.jsx("h5",{children:"能做"}),u.jsx("ul",{children:e.features.map(s=>u.jsx("li",{children:s},s))})]}):null,(l=e.useCases)!=null&&l.length?u.jsxs("div",{children:[u.jsx("h5",{children:"适合"}),u.jsx("ul",{children:e.useCases.map(s=>u.jsx("li",{children:s},s))})]}):null,(o=e.notes)!=null&&o.length?u.jsxs("div",{children:[u.jsx("h5",{children:"注意"}),u.jsx("ul",{children:e.notes.map(s=>u.jsx("li",{children:s},s))})]}):null]})]})}function Nk({factory:e,priority:t,summary:n,doc:r,defaultOpen:i=!0}){var o,s;const l={props:tp(r).length,events:((o=r.events)==null?void 0:o.length)??0,methods:((s=r.methods)==null?void 0:s.length)??0};return u.jsxs("details",{className:"api-plug",open:i,children:[u.jsxs("summary",{children:[u.jsx("code",{children:e}),u.jsxs("span",{className:"tag tag-accent",children:["priority ",t]}),u.jsx("span",{className:"api-plug-desc",children:n}),u.jsxs("span",{className:"api-plug-n",children:[l.props," 属性 · ",l.events," 事件 · ",l.methods," 方法"]})]}),u.jsx("div",{className:"api-plug-body",children:u.jsx(zk,{doc:r})})]})}const Tk=/create[A-Z]\w*Plugin/g;function Fk(e){return(e.match(/create[A-Z]\w*Plugin/)??[e])[0]}function np(e){return e.dir?`create${e.dir}`:Fk(e.factory)}function Dk(e){return new Set(e.match(Tk)??[])}function Mk(e,t){const n=Dk(e);return t.filter(r=>n.has(np(r))).sort((r,i)=>r.priority-i.priority)}function Ik({source:e,plugins:t,heading:n="本页用到的插件"}){const r=y.useMemo(()=>Mk(e,t),[e,t]);return r.length===0?null:u.jsxs("section",{className:"api-sec",children:[u.jsxs("div",{className:"api-sec-head",children:[u.jsxs("h2",{className:"api-sec-title",children:[n," · ",r.length," 个"]}),u.jsxs("p",{className:"api-sec-sub",children:["就是上面代码里装配的全部成员。属性是工厂参数，事件是父组件传进来的回调， 方法是插件读取 / 调用的上下文能力 —— 表内容与 ",u.jsx("code",{children:"doc.json"})," 同源，随包发布。"]})]}),r.map(i=>u.jsx(Nk,{factory:np(i),priority:i.priority,summary:i.summary??i.doc.description??"",doc:i.doc},i.factory))]})}const Gr="vane-asset-library",Rk=/\{\{\s*([\w-]+)\s*\}\}/g;function rp(e,t){return e.replace(Rk,(n,r)=>r in t?String(t[r]):n)}function Ok(e){return`${e.replace(/^create/,"").replace(/Plugin$/,"")}Plugin`}function Bk(e,t){if(!e)return"";let n=rp(e,t).trim();return n.startsWith("{")&&n.endsWith("}")&&(n=n.slice(1,-1).trim()),n?`{ ${n} }`:""}function ip(e){const t=[...new Set(e.plugs.map(n=>n.fn))].sort();return t.length?t.map(n=>`import { ${n} } from "${Gr}/custom-plugins/${Ok(n)}";`).join(`
`):"// 这一页只用 Core props，不需要任何插件"}function lp(e,t){return e.plugs.length?`const Library = withAssetLibraryPlugins(AssetLibraryCore, [
${e.plugs.map(r=>`  ${r.fn}(${Bk(r.cfg,t)}),`).join(`
`)}
]);`:"const Library = AssetLibraryCore;"}function op(e,t){return e.props.filter(n=>typeof n=="string"||!n.when||n.when(t)).map(n=>`      ${rp(typeof n=="string"?n:n.text,t)}`).join(`
`)}function Vk(e,t){return`// ${e.title} · 最小装配（照抄即可跑）
import { AssetLibraryCore, withAssetLibraryPlugins } from "${Gr}";
import type { AssetItem } from "${Gr}";
${ip(e)}

${lp(e,t)}

export default function Demo({ items }: { items: AssetItem[] }) {
  return (
    <Library
      items={items}
${op(e,t)}
    />
  );
}
`}function Uk(e){return/^[A-Za-z_$][\w$]*$/.test(e)}function ms(e,t){const n="  ".repeat(t),r="  ".repeat(t+1);if(e===null)return"null";if(e===void 0)return"undefined";if(typeof e=="string")return JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return String(e);if(Array.isArray(e))return e.length?`[
${e.map(l=>`${r}${ms(l,t+1)}`).join(`,
`)},
${n}]`:"[]";if(typeof e=="object"){const i=Object.entries(e);return i.length?`{
${i.map(([o,s])=>`${r}${Uk(o)?o:JSON.stringify(o)}: ${ms(s,t+1)}`).join(`,
`)},
${n}}`:"{}"}return JSON.stringify(e)}function Kk(){const e=Ke.map(t=>({...t,src:`https://cdn.example.com/${t.id}.${t.kind==="video"?"mp4":"png"}`,thumbnail:t.kind==="video"?`https://cdn.example.com/${t.id}.jpg`:t.thumbnail}));return`const items: AssetItem[] = ${ms(e,0)};`}function Hk(e,t){return`// ${e.title} · 完整示例（直接复制即可运行）
import { AssetLibraryCore, withAssetLibraryPlugins } from "${Gr}";
import type { AssetItem } from "${Gr}";
${ip(e)}

${lp(e,t)}

${Kk()}

export default function Demo() {
  return <Library items={items}${e.props.length?`
`+op(e,t).replace(/^ {6}/gm,"    "):""} />;
}
`}function Wk({controls:e,cfg:t,onChange:n}){return u.jsx("div",{className:"ctl-bar",children:e.filter(r=>!r.when||r.when(t)).map(r=>{const i=t[r.key];return u.jsxs("label",{className:"ctl",title:r.hint,children:[u.jsxs("span",{className:"ctl-label",children:[r.label,u.jsx("b",{className:"ctl-val",children:r.kind==="switch"?i?"开":"关":String(i)})]}),r.kind==="switch"?u.jsx("button",{type:"button",className:`ctl-switch${i?" is-on":""}`,onClick:()=>n(r.key,!i),"aria-pressed":!!i,children:u.jsx("i",{})}):r.kind==="select"?u.jsx("select",{className:"ctl-select",value:String(i),onChange:l=>n(r.key,l.target.value),children:(r.options??[]).map(l=>u.jsx("option",{value:l.value,children:l.label},l.value))}):u.jsx("input",{className:"ctl-range",type:"range",min:r.min??0,max:r.max??100,step:r.step??1,value:Number(i),onChange:l=>n(r.key,Number(l.target.value))})]},r.key)})})}function Qk({lines:e,title:t="事件日志",empty:n="还没触发 —— 点一张卡、拖一个素材进来",right:r}){return u.jsxs("div",{className:"log",children:[u.jsxs("div",{className:"log-head",children:[u.jsx("span",{children:t}),u.jsxs("span",{className:"log-right",children:[r,u.jsx("b",{children:e.length})]})]}),e.length===0?u.jsx("p",{className:"log-empty",children:n}):u.jsx("ol",{className:"log-list",children:e.map(i=>u.jsxs("li",{className:`log-line is-${i.kind}`,children:[u.jsx("time",{children:i.at}),u.jsx("span",{children:i.text})]},i.id))})]})}function Gk({entry:e,order:t}){var b;const{meta:n,Stage:r,file:i,source:l}=e,[o,s]=y.useState(()=>fc(n)),[a,c]=y.useState([]),[d,f]=y.useState("minimal"),m=y.useCallback((g,p="event")=>{const h=new Date().toLocaleTimeString("zh-CN",{hour12:!1});c(x=>[{id:x.length+1,at:h,text:g,kind:p},...x].slice(0,60))},[]),v=y.useCallback((g,p)=>{s(h=>({...h,[g]:p}))},[]),w=y.useMemo(()=>Vk(n,o),[n,o]),S=y.useMemo(()=>Hk(n,o),[n,o]);return u.jsxs("section",{className:"demo","data-demo":n.slug,children:[u.jsxs("header",{className:"demo-head",children:[u.jsxs("div",{className:"demo-folio",children:[u.jsx("span",{className:"demo-no",children:String(t).padStart(2,"0")}),u.jsx("em",{children:"plate"})]}),u.jsxs("div",{children:[u.jsxs("div",{className:"demo-title-row",children:[u.jsx("h2",{children:n.title}),u.jsx("span",{className:"demo-group",children:ps[n.group].label}),n.plugin?u.jsx("code",{className:"demo-plugin",children:n.plugin}):null]}),u.jsx("p",{className:"demo-intro",children:n.intro}),u.jsxs("p",{className:"demo-why",children:[u.jsx("b",{children:"什么时候用"}),n.why]})]}),u.jsxs("div",{className:"demo-meta",children:[u.jsxs("div",{className:"demo-meta-row",children:[u.jsx("span",{children:"file"}),u.jsx("b",{children:i})]}),u.jsxs("div",{className:"demo-meta-row",children:[u.jsx("span",{children:"group"}),u.jsx("b",{children:ps[n.group].label})]}),u.jsxs("div",{className:"demo-meta-row",children:[u.jsx("span",{children:"plugs"}),u.jsx("b",{children:n.plugs.length?`${n.plugs.length} installed`:"core only"})]})]})]}),(b=n.controls)!=null&&b.length?u.jsxs("div",{className:"demo-controls",children:[u.jsx(Wk,{controls:n.controls,cfg:o,onChange:v}),u.jsx("button",{type:"button",className:"demo-reset",onClick:()=>{s(fc(n)),c([])},children:"重置"})]}):null,u.jsxs("div",{className:"demo-body",children:[u.jsxs("figure",{className:"plate",children:[u.jsxs("figcaption",{className:"plate-cap",children:[u.jsx("b",{children:"stage"}),u.jsxs("span",{children:[n.tone==="light"?"light surface":"live render",n.stageHeight?` · ${n.stageHeight}px`:""]}),u.jsx("em",{children:"live"})]}),u.jsx("div",{className:"plate-ruler","aria-hidden":!0}),u.jsx("div",{className:`plate-body demo-stage${n.tone==="light"?" tone-light":""}`,style:{"--stage-h":`${n.stageHeight??420}px`},children:u.jsx(r,{cfg:o,log:m,setCfg:v})})]}),u.jsxs("aside",{className:"demo-side",children:[u.jsx("div",{className:"demo-plugs",children:n.plugs.length===0?u.jsx("span",{className:"demo-plug is-core",children:"仅 Core props"}):n.plugs.map(g=>u.jsx("span",{className:`demo-plug${g.local?" is-local":""}`,children:g.fn.replace(/^create|Plugin$/g,"")},g.fn))}),u.jsx("ul",{className:"demo-why-list",children:n.plugs.map(g=>u.jsxs("li",{children:[u.jsx("code",{children:g.fn}),u.jsx("span",{children:g.why})]},g.fn))}),n.note?u.jsxs("p",{className:"demo-note",children:["⚠ ",n.note]}):null,u.jsx(Qk,{lines:a,empty:n.plugs.length>0?"还没触发 —— 拖上面的控件，或点卡片 / 拖文件进来":"这一页没有事件类行为，日志留白"})]})]}),u.jsxs("div",{className:"demo-code",children:[u.jsxs("div",{className:"demo-switch",role:"tablist",children:[u.jsx("button",{type:"button",role:"tab","aria-selected":d==="minimal",className:d==="minimal"?"is-active":"",onClick:()=>f("minimal"),children:"最小装配"}),u.jsx("button",{type:"button",role:"tab","aria-selected":d==="full",className:d==="full"?"is-active":"",onClick:()=>f("full"),children:"完整源码"})]}),u.jsx($k,{code:d==="minimal"?w:S,title:d==="minimal"?`${n.slug}.minimal.tsx`:i,collapseAfter:d==="minimal"?0:26,maxHeight:420},d)]}),u.jsx(Ik,{source:l,plugins:gs})]})}const qk=y.lazy(()=>ma(()=>import("./HomePage-CCKoyfon.js"),[],import.meta.url).then(e=>({default:e.HomePage}))),Yk=y.lazy(()=>ma(()=>import("./PluginsPage-U_Q2FWMB.js"),[],import.meta.url).then(e=>({default:e.PluginsPage}))),Xk=y.lazy(()=>ma(()=>import("./ScenariosPage-BO3t_2L-.js"),[],import.meta.url).then(e=>({default:e.ScenariosPage}))),Zk={pkg:"vane-asset-library",brand:"A",subtitle:"素材库 / plugin index",nav:[{to:"/",label:"总览",hint:"overview"},{to:"/plugins",label:"插件工坊",hint:`${gs.length} plugins`},{to:"/scenarios",label:"场景示例",hint:`${pl.length} scenes`}],routes:[{path:"/",element:u.jsx(qk,{})},{path:"/plugins",element:u.jsx(Yk,{})},{path:"/scenarios",element:u.jsx(Xk,{})}],crumb:e=>e==="/plugins"?"plugins · 插件工坊":e==="/scenarios"?"scenarios · 场景示例":"index · 总览",demos:{label:"逐项示例",groups:N1.map(e=>({key:e,label:ps[e].label})),entries:fs,detail:(e,t)=>u.jsx(Gk,{entry:e,order:t})},footer:[`${gs.length} PLUGINS · ${pl.length} SCENES`,`${fs.length} DEMOS`]};function Jk(){return u.jsx(Wh,{config:Zk})}const eP=1.5;function sp(e){const t=getComputedStyle(e).gridTemplateColumns;return!t||t==="none"?0:t.trim().split(/\s+/).filter(n=>n&&n!=="0px").length}function tP(e,t){const n=[],r=e.querySelector(".vc-asset");if(!r)return n.push({scenario:t,kind:"empty",detail:"舞台里找不到 .vc-asset（组件没渲染）"}),n;r.offsetHeight<=0&&n.push({scenario:t,kind:"zero-size",detail:".vc-asset 高度为 0"});const i=r.querySelector(".vc-asset__grid"),l=Array.from(r.querySelectorAll(".vc-asset-card"));if(i){sp(i)<1&&n.push({scenario:t,kind:"no-columns",detail:`网格列数为 0（宽 ${i.clientWidth}px，可能是容器宽度不足或 display 被覆盖）`});const a=i.clientWidth;if(a>0){for(const c of l)if(c.offsetWidth>a+eP){n.push({scenario:t,kind:"overflow",detail:`卡片 ${c.dataset.assetId??"?"} 宽 ${c.offsetWidth} > 网格 ${a}`});break}}}const o=l.filter(s=>s.offsetHeight<=0);return o.length&&l.length&&n.push({scenario:t,kind:"zero-size",detail:`${o.length}/${l.length} 张卡片高度为 0`}),!l.length&&!r.querySelector(".vc-asset__empty")&&n.push({scenario:t,kind:"no-empty-hint",detail:"没有卡片，也没有空态文案"}),n}function nP(e=document){const t=[];return e.querySelectorAll(".scn-card, .ws-stage").forEach((n,r)=>{var o;const i=n.querySelector(".scn-stage, .ws-scroll"),l=n.dataset.scenario??((o=n.querySelector(".scn-id"))==null?void 0:o.textContent)??`stage-${r+1}`;if(!i){t.push({scenario:l,kind:"empty",detail:"卡片里找不到舞台容器"});return}if(i.offsetHeight<=0){t.push({scenario:l,kind:"empty",detail:"舞台高度 <= 0，组件没有真正渲染"});return}t.push(...tP(i,l))}),t}function pP(e,t){if(e.length===0)return`${t} 张卡 · 0 命中`;const n=new Map;for(const r of e)n.set(r.kind,(n.get(r.kind)??0)+1);return`${t} 张卡 · ${e.length} 命中（${[...n].map(([r,i])=>`${r}:${i}`).join(" ")}）`}const rP=e=>`data:image/svg+xml;charset=utf-8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 60"><rect width="80" height="60" fill="hsl(${e} 60% 50%)"/></svg>`)}`,rt=Array.from({length:12},(e,t)=>({id:`t-${t+1}`,kind:t===4?"video":"image",src:rP(t*29),title:t===3?"教程素材":`素材 ${t+1}`,tags:t%3===0?["教程"]:["实拍"],size:1e3*(t+1),width:1600,height:1200,createdAt:`2026-0${t%9+1}-10`,status:t>=9?t===11?"failed":"processing":"ready"})),gr=Yf([]),fo=xt(tt,[qn({debounce:60}),fn({}),ni({selectLabel:"全选本页",clearLabel:"取消"}),Pt({pageSizes:[6,12]}),ut({}),Qt({})]),iP=xt(tt,[Pt({pageSizes:[6,12]}),ut({}),{name:"probe",version:"0.0.0",priority:99,hooks:{renderToolbar:e=>u.jsxs("div",{"data-probe-group":!0,children:[u.jsx("button",{type:"button","data-probe":"hit",onClick:()=>e.setQuery("教程"),children:"筛：教程"}),u.jsx("button",{type:"button","data-probe":"miss",onClick:()=>e.setQuery("绝对不存在的关键词"),children:"筛：无命中"}),u.jsx("button",{type:"button","data-probe":"clear",onClick:()=>e.clearFilters(),children:"清空条件"})]})}}]),Ln=(e=0)=>new Promise(t=>setTimeout(t,e));async function Ge(e,t={}){const{width:n=900,parent:r}=t,i=document.createElement("div");i.style.cssText=r?`width:${n}px;background:#121110`:`position:fixed;left:0;top:0;width:${n}px;background:#121110`,(r??document.body).appendChild(i);const l=zf(i);return Ri.flushSync(()=>l.render(e)),await Ln(),{host:i,root:l,q:o=>i.querySelector(o),all:o=>Array.from(i.querySelectorAll(o)),click:async o=>{if(!o)throw new Error("元素不存在");Ri.flushSync(()=>o.click()),await Ln()},done:async()=>{Ri.flushSync(()=>l.unmount()),i.remove()}}}async function lP(){const e=[];let t=0;const n=(r,i)=>{t+=1,document.title=`SELFTEST RUNNING ${t}`,i||e.push(r)};{const r=await Ge(u.jsx(gr,{items:rt,pageSize:12})),i=r.q(".vc-asset"),l=r.q(".vc-asset__grid"),o=i?getComputedStyle(i).backgroundColor:"";n("结构：容器自带不透明背景（ADR-13 不继承宿主）",!!o&&o!=="rgba(0, 0, 0, 0)"&&o!=="transparent"),n("结构：网格 role=listbox",(l==null?void 0:l.getAttribute("role"))==="listbox"),n("结构：渲染 12 张卡",r.all(".vc-asset-card").length===12),n("结构：卡片 role=option + aria-selected",r.all(".vc-asset-card").every(s=>s.getAttribute("role")==="option"&&s.hasAttribute("aria-selected"))),n("结构：网格列数由容器宽度推导（≥2 列）",!!l&&sp(l)>=2),n("结构：roving tabindex —— 只有一张卡可 Tab 到",r.all('.vc-asset-card[tabindex="0"]').length===1),await r.done()}{const r=await Ge(u.jsx(gr,{items:rt,pageSize:12})),i=r.all(".vc-asset-card");await r.click(i[0]),n("选择：点第一张 → data-selected=true",i[0].dataset.selected==="true"),await r.click(i[1]),n("选择：多选累加（两张都选中）",r.all('.vc-asset-card[data-selected="true"]').length===2),await r.click(i[0]),n("选择：再点一次取消",i[0].dataset.selected==="false");const l=r.q('.vc-asset-card[data-status="processing"]');await r.click(l),n("选择：processing 素材点不动",(l==null?void 0:l.dataset.selected)==="false");const o=r.q('.vc-asset-card[data-status="failed"]');await r.click(o),n("选择：failed 素材点不动",(o==null?void 0:o.dataset.selected)==="false"),n("选择：不可选项有 aria-disabled",(l==null?void 0:l.getAttribute("aria-disabled"))==="true"),await r.done()}{const r=await Ge(u.jsx(gr,{items:rt,pageSize:12,multiple:!1})),i=r.all(".vc-asset-card");await r.click(i[0]),await r.click(i[1]),n("单选：multiple=false 时替换而不是累加",r.all('.vc-asset-card[data-selected="true"]').length===1),await r.done()}{const r=await Ge(u.jsx(gr,{items:rt,pageSize:12,maxSelected:2})),i=r.all(".vc-asset-card");await r.click(i[0]),await r.click(i[1]),await r.click(i[2]),n("上限：maxSelected=2 时第 3 张被拦",r.all('.vc-asset-card[data-selected="true"]').length===2),n("上限：被拦的卡片标 data-blocked=true",i[2].dataset.blocked==="true"),await r.click(i[0]),n("上限：已选项仍可取消（不被上限锁死）",r.all('.vc-asset-card[data-selected="true"]').length===1),await r.done()}{const r=await Ge(u.jsx(gr,{items:rt,pageSize:12})),i=r.all(".vc-asset-card")[0];i.focus(),i.dispatchEvent(new KeyboardEvent("keydown",{key:"ArrowRight",bubbles:!0})),await Ln();const l=document.activeElement;n("键盘：→ 把焦点移到下一张卡",l!==i&&(l==null?void 0:l.classList.contains("vc-asset-card"))===!0),n("键盘：移动焦点不等于选中",i.dataset.selected==="false"),l==null||l.dispatchEvent(new KeyboardEvent("keydown",{key:" ",bubbles:!0})),await Ln(),n("键盘：Space 才选中",(l==null?void 0:l.dataset.selected)==="true"),await r.done()}{const r=await Ge(u.jsx(fo,{items:rt,pageSize:6}));n("分页：pageSize=6 时只渲染 6 张",r.all(".vc-asset-card").length===6),n("搜索：插件渲染出 input[type=search]",!!r.q('input[type="search"]'));const i=r.all(".vc-asset-toolbar button").find(l=>(l.textContent??"").includes("全选"));n("全选：按钮存在且文案带数量",/全选本页（\d+）/.test((i==null?void 0:i.textContent)??"")),await r.click(i??null),n("全选：只选当前页就绪项（本页 6 项全 ready）",r.all('.vc-asset-card[data-selected="true"]').length===6),await r.done()}{const r=await Ge(u.jsx(iP,{items:rt,pageSize:6}));n("过滤：初始分页 6 张",r.all(".vc-asset-card").length===6),await r.click(r.q('[data-probe="hit"]'));const i=r.all(".vc-asset-card").length;n(`过滤：query=教程 → 4 项（实际 ${i}）`,i===4),await r.click(r.q('[data-probe="clear"]'));const l=r.all(".vc-asset-card").length;n(`过滤：清空条件回到分页 6 张（实际 ${l}）`,l===6),await r.click(r.q('[data-probe="miss"]'));const o=r.q(".vc-asset__empty"),s=o?`reason=${o.getAttribute("data-reason")}`:`无空态节点，卡片 ${r.all(".vc-asset-card").length} 张`;n(`空态：筛空给 data-reason=filtered（${s}）`,(o==null?void 0:o.getAttribute("data-reason"))==="filtered"),await r.done()}{const r=xt(tt,[ut({})]),i=await Ge(u.jsx(r,{items:[]})),l=i.q(".vc-asset__empty");n("空态：空库渲染 .vc-asset__empty",!!l),n("空态：data-reason=empty",(l==null?void 0:l.getAttribute("data-reason"))==="empty"),await i.done()}{const r=await Ge(u.jsx(fo,{items:rt.slice(0,4),pageSize:4}));r.all(".vc-asset-card")[0].dispatchEvent(new MouseEvent("dblclick",{bubbles:!0})),await Ln();const l=r.q(".vc-asset-lightbox");n(`浮层：双击打开 .vc-asset-lightbox（${l?"已开到":"没打开"}）`,!!l),n(`浮层：role=dialog（${(l==null?void 0:l.getAttribute("role"))??"无节点"}）`,(l==null?void 0:l.getAttribute("role"))==="dialog"),document.dispatchEvent(new KeyboardEvent("keydown",{key:"Escape",bubbles:!0})),await Ln(),n("浮层：Esc 关闭",!r.q(".vc-asset-lightbox")),await r.done()}{const r=xt(tt,[{name:"bomb",version:"1.0.0",priority:10,hooks:{renderToolbar(){throw new Error("插件炸了")}}},Pt({})]),i=await Ge(u.jsx(r,{items:rt,pageSize:6}));n("沙箱：单个插件抛错不影响整墙渲染",i.all(".vc-asset-card").length===6),n("沙箱：其它插件的槽位仍在（分页器还在）",!!i.q(".vc-asset-pager")),await i.done()}{const r=document.createElement("div");document.body.appendChild(r);const i=document.createElement("div");i.className="scn-card",i.dataset.scenario="selftest";const l=document.createElement("div");l.className="scn-stage",i.appendChild(l),r.appendChild(i);const o=await Ge(u.jsx(fo,{items:rt,pageSize:12}),{parent:l}),s=nP(r);n("几何体检：无溢出 / 零尺寸 / 0 列 / 缺空态",s.length===0),s.length&&console.warn("[selftest] audit issues",s),await o.done(),r.remove()}{const r=document.querySelectorAll(".side .nav-item").length;n(`外壳：主导航 ≥3 项（实际 ${r}）`,r>=3);const i=document.querySelector("#main"),l=((i==null?void 0:i.textContent)??"").trim();n(`外壳：主内容区已渲染（${l.length} 字）`,l.length>40),n("外壳：没有落进错误兜底页",document.querySelector(".crash")===null);const o=location.hash.replace(/^#/,"")||"/";if(o.startsWith("/demo/")){const s=document.querySelectorAll(".demo .plate-body").length;n(`路由 ${o}：示例页舞台已挂载（${s}）`,s===1)}else if(o.startsWith("/plugins")){const s=document.querySelectorAll(".ws-check").length;n(`路由 ${o}：插件目录 20 条（${s}）`,s===20)}else if(o.startsWith("/scenarios")){const s=document.querySelectorAll(".scn-card").length;n(`路由 ${o}：场景卡 ≥4 张（${s}）`,s>=4)}else n(`路由 ${o}：总览 hero 已渲染`,!!document.querySelector(".hp-hero"))}return{total:t,passed:t-e.length,failed:e}}async function oP(){document.title="SELFTEST RUNNING";try{const e=await lP();document.title=e.failed.length===0?`SELFTEST OK ${e.passed}/${e.total}`:`SELFTEST FAIL ${e.passed}/${e.total} :: ${e.failed.join(" | ")}`}catch(e){document.title=`SELFTEST ERROR :: ${e.message}`}}po.createRoot(document.getElementById("root")).render(u.jsx(Jk,{}));typeof location<"u"&&location.search.includes("selftest=1")&&oP();export{tt as A,$k as C,fs as D,pc as G,cs as L,gs as P,pl as S,fP as U,ps as a,uP as b,at as c,Ke as d,cP as e,dP as f,nP as g,u as j,y as r,pP as s,xt as w};
