var Pf=Object.defineProperty;var wf=(e,n,t)=>n in e?Pf(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var sa=(e,n,t)=>wf(e,typeof n!="symbol"?n+"":n,t);function Sf(e,n){for(var t=0;t<n.length;t++){const r=n[t];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();function bf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Wu={exports:{}},Li={},Hu={exports:{}},L={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sr=Symbol.for("react.element"),Cf=Symbol.for("react.portal"),_f=Symbol.for("react.fragment"),Rf=Symbol.for("react.strict_mode"),Tf=Symbol.for("react.profiler"),Ef=Symbol.for("react.provider"),jf=Symbol.for("react.context"),$f=Symbol.for("react.forward_ref"),Af=Symbol.for("react.suspense"),Lf=Symbol.for("react.memo"),Mf=Symbol.for("react.lazy"),la=Symbol.iterator;function Nf(e){return e===null||typeof e!="object"?null:(e=la&&e[la]||e["@@iterator"],typeof e=="function"?e:null)}var Uu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Vu=Object.assign,Yu={};function Tt(e,n,t){this.props=e,this.context=n,this.refs=Yu,this.updater=t||Uu}Tt.prototype.isReactComponent={};Tt.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};Tt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Qu(){}Qu.prototype=Tt.prototype;function As(e,n,t){this.props=e,this.context=n,this.refs=Yu,this.updater=t||Uu}var Ls=As.prototype=new Qu;Ls.constructor=As;Vu(Ls,Tt.prototype);Ls.isPureReactComponent=!0;var aa=Array.isArray,Ku=Object.prototype.hasOwnProperty,Ms={current:null},Gu={key:!0,ref:!0,__self:!0,__source:!0};function Ju(e,n,t){var r,i={},o=null,s=null;if(n!=null)for(r in n.ref!==void 0&&(s=n.ref),n.key!==void 0&&(o=""+n.key),n)Ku.call(n,r)&&!Gu.hasOwnProperty(r)&&(i[r]=n[r]);var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){for(var a=Array(l),c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Sr,type:e,key:o,ref:s,props:i,_owner:Ms.current}}function zf(e,n){return{$$typeof:Sr,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Ns(e){return typeof e=="object"&&e!==null&&e.$$typeof===Sr}function Df(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var ua=/\/+/g;function ro(e,n){return typeof e=="object"&&e!==null&&e.key!=null?Df(""+e.key):n.toString(36)}function Kr(e,n,t,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Sr:case Cf:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+ro(s,0):r,aa(i)?(t="",e!=null&&(t=e.replace(ua,"$&/")+"/"),Kr(i,n,t,"",function(c){return c})):i!=null&&(Ns(i)&&(i=zf(i,t+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(ua,"$&/")+"/")+e)),n.push(i)),1;if(s=0,r=r===""?".":r+":",aa(e))for(var l=0;l<e.length;l++){o=e[l];var a=r+ro(o,l);s+=Kr(o,n,t,a,i)}else if(a=Nf(e),typeof a=="function")for(e=a.call(e),l=0;!(o=e.next()).done;)o=o.value,a=r+ro(o,l++),s+=Kr(o,n,t,a,i);else if(o==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return s}function Er(e,n,t){if(e==null)return e;var r=[],i=0;return Kr(e,r,"","",function(o){return n.call(t,o,i++)}),r}function If(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var me={current:null},Gr={transition:null},Of={ReactCurrentDispatcher:me,ReactCurrentBatchConfig:Gr,ReactCurrentOwner:Ms};function Xu(){throw Error("act(...) is not supported in production builds of React.")}L.Children={map:Er,forEach:function(e,n,t){Er(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return Er(e,function(){n++}),n},toArray:function(e){return Er(e,function(n){return n})||[]},only:function(e){if(!Ns(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};L.Component=Tt;L.Fragment=_f;L.Profiler=Tf;L.PureComponent=As;L.StrictMode=Rf;L.Suspense=Af;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Of;L.act=Xu;L.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Vu({},e.props),i=e.key,o=e.ref,s=e._owner;if(n!=null){if(n.ref!==void 0&&(o=n.ref,s=Ms.current),n.key!==void 0&&(i=""+n.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(a in n)Ku.call(n,a)&&!Gu.hasOwnProperty(a)&&(r[a]=n[a]===void 0&&l!==void 0?l[a]:n[a])}var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){l=Array(a);for(var c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Sr,type:e.type,key:i,ref:o,props:r,_owner:s}};L.createContext=function(e){return e={$$typeof:jf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Ef,_context:e},e.Consumer=e};L.createElement=Ju;L.createFactory=function(e){var n=Ju.bind(null,e);return n.type=e,n};L.createRef=function(){return{current:null}};L.forwardRef=function(e){return{$$typeof:$f,render:e}};L.isValidElement=Ns;L.lazy=function(e){return{$$typeof:Mf,_payload:{_status:-1,_result:e},_init:If}};L.memo=function(e,n){return{$$typeof:Lf,type:e,compare:n===void 0?null:n}};L.startTransition=function(e){var n=Gr.transition;Gr.transition={};try{e()}finally{Gr.transition=n}};L.unstable_act=Xu;L.useCallback=function(e,n){return me.current.useCallback(e,n)};L.useContext=function(e){return me.current.useContext(e)};L.useDebugValue=function(){};L.useDeferredValue=function(e){return me.current.useDeferredValue(e)};L.useEffect=function(e,n){return me.current.useEffect(e,n)};L.useId=function(){return me.current.useId()};L.useImperativeHandle=function(e,n,t){return me.current.useImperativeHandle(e,n,t)};L.useInsertionEffect=function(e,n){return me.current.useInsertionEffect(e,n)};L.useLayoutEffect=function(e,n){return me.current.useLayoutEffect(e,n)};L.useMemo=function(e,n){return me.current.useMemo(e,n)};L.useReducer=function(e,n,t){return me.current.useReducer(e,n,t)};L.useRef=function(e){return me.current.useRef(e)};L.useState=function(e){return me.current.useState(e)};L.useSyncExternalStore=function(e,n,t){return me.current.useSyncExternalStore(e,n,t)};L.useTransition=function(){return me.current.useTransition()};L.version="18.3.1";Hu.exports=L;var x=Hu.exports;const Xn=bf(x),Ff=Sf({__proto__:null,default:Xn},[x]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bf=x,Wf=Symbol.for("react.element"),Hf=Symbol.for("react.fragment"),Uf=Object.prototype.hasOwnProperty,Vf=Bf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Yf={key:!0,ref:!0,__self:!0,__source:!0};function Zu(e,n,t){var r,i={},o=null,s=null;t!==void 0&&(o=""+t),n.key!==void 0&&(o=""+n.key),n.ref!==void 0&&(s=n.ref);for(r in n)Uf.call(n,r)&&!Yf.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)i[r]===void 0&&(i[r]=n[r]);return{$$typeof:Wf,type:e,key:o,ref:s,props:i,_owner:Vf.current}}Li.Fragment=Hf;Li.jsx=Zu;Li.jsxs=Zu;Wu.exports=Li;var u=Wu.exports,Lo={},qu={exports:{}},Te={},ec={exports:{}},nc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(T,$){var A=T.length;T.push($);e:for(;0<A;){var I=A-1>>>1,V=T[I];if(0<i(V,$))T[I]=$,T[A]=V,A=I;else break e}}function t(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var $=T[0],A=T.pop();if(A!==$){T[0]=A;e:for(var I=0,V=T.length,Ve=V>>>1;I<Ve;){var Se=2*(I+1)-1,Nn=T[Se],zn=Se+1,Tr=T[zn];if(0>i(Nn,A))zn<V&&0>i(Tr,Nn)?(T[I]=Tr,T[zn]=A,I=zn):(T[I]=Nn,T[Se]=A,I=Se);else if(zn<V&&0>i(Tr,A))T[I]=Tr,T[zn]=A,I=zn;else break e}}return $}function i(T,$){var A=T.sortIndex-$.sortIndex;return A!==0?A:T.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,l=s.now();e.unstable_now=function(){return s.now()-l}}var a=[],c=[],f=1,p=null,h=3,m=!1,v=!1,k=!1,w=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(T){for(var $=t(c);$!==null;){if($.callback===null)r(c);else if($.startTime<=T)r(c),$.sortIndex=$.expirationTime,n(a,$);else break;$=t(c)}}function P(T){if(k=!1,y(T),!v)if(t(a)!==null)v=!0,Lt(S);else{var $=t(c);$!==null&&Mt(P,$.startTime-T)}}function S(T,$){v=!1,k&&(k=!1,g(R),R=-1),m=!0;var A=h;try{for(y($),p=t(a);p!==null&&(!(p.expirationTime>$)||T&&!B());){var I=p.callback;if(typeof I=="function"){p.callback=null,h=p.priorityLevel;var V=I(p.expirationTime<=$);$=e.unstable_now(),typeof V=="function"?p.callback=V:p===t(a)&&r(a),y($)}else r(a);p=t(a)}if(p!==null)var Ve=!0;else{var Se=t(c);Se!==null&&Mt(P,Se.startTime-$),Ve=!1}return Ve}finally{p=null,h=A,m=!1}}var b=!1,_=null,R=-1,N=5,j=-1;function B(){return!(e.unstable_now()-j<N)}function we(){if(_!==null){var T=e.unstable_now();j=T;var $=!0;try{$=_(!0,T)}finally{$?M():(b=!1,_=null)}}else b=!1}var M;if(typeof d=="function")M=function(){d(we)};else if(typeof MessageChannel<"u"){var De=new MessageChannel,cn=De.port2;De.port1.onmessage=we,M=function(){cn.postMessage(null)}}else M=function(){w(we,0)};function Lt(T){_=T,b||(b=!0,M())}function Mt(T,$){R=w(function(){T(e.unstable_now())},$)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){v||m||(v=!0,Lt(S))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return t(a)},e.unstable_next=function(T){switch(h){case 1:case 2:case 3:var $=3;break;default:$=h}var A=h;h=$;try{return T()}finally{h=A}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,$){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var A=h;h=T;try{return $()}finally{h=A}},e.unstable_scheduleCallback=function(T,$,A){var I=e.unstable_now();switch(typeof A=="object"&&A!==null?(A=A.delay,A=typeof A=="number"&&0<A?I+A:I):A=I,T){case 1:var V=-1;break;case 2:V=250;break;case 5:V=1073741823;break;case 4:V=1e4;break;default:V=5e3}return V=A+V,T={id:f++,callback:$,priorityLevel:T,startTime:A,expirationTime:V,sortIndex:-1},A>I?(T.sortIndex=A,n(c,T),t(a)===null&&T===t(c)&&(k?(g(R),R=-1):k=!0,Mt(P,A-I))):(T.sortIndex=V,n(a,T),v||m||(v=!0,Lt(S))),T},e.unstable_shouldYield=B,e.unstable_wrapCallback=function(T){var $=h;return function(){var A=h;h=$;try{return T.apply(this,arguments)}finally{h=A}}}})(nc);ec.exports=nc;var Qf=ec.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kf=x,Re=Qf;function C(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var tc=new Set,ir={};function Zn(e,n){Pt(e,n),Pt(e+"Capture",n)}function Pt(e,n){for(ir[e]=n,e=0;e<n.length;e++)tc.add(n[e])}var rn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Mo=Object.prototype.hasOwnProperty,Gf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ca={},da={};function Jf(e){return Mo.call(da,e)?!0:Mo.call(ca,e)?!1:Gf.test(e)?da[e]=!0:(ca[e]=!0,!1)}function Xf(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Zf(e,n,t,r){if(n===null||typeof n>"u"||Xf(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function he(e,n,t,r,i,o,s){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=o,this.removeEmptyString=s}var ae={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ae[e]=new he(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];ae[n]=new he(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ae[e]=new he(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ae[e]=new he(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ae[e]=new he(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ae[e]=new he(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ae[e]=new he(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ae[e]=new he(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ae[e]=new he(e,5,!1,e.toLowerCase(),null,!1,!1)});var zs=/[\-:]([a-z])/g;function Ds(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(zs,Ds);ae[n]=new he(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(zs,Ds);ae[n]=new he(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(zs,Ds);ae[n]=new he(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ae[e]=new he(e,1,!1,e.toLowerCase(),null,!1,!1)});ae.xlinkHref=new he("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ae[e]=new he(e,1,!1,e.toLowerCase(),null,!0,!0)});function Is(e,n,t,r){var i=ae.hasOwnProperty(n)?ae[n]:null;(i!==null?i.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Zf(n,t,i,r)&&(t=null),r||i===null?Jf(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(n=i.attributeName,r=i.attributeNamespace,t===null?e.removeAttribute(n):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var an=Kf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,jr=Symbol.for("react.element"),rt=Symbol.for("react.portal"),it=Symbol.for("react.fragment"),Os=Symbol.for("react.strict_mode"),No=Symbol.for("react.profiler"),rc=Symbol.for("react.provider"),ic=Symbol.for("react.context"),Fs=Symbol.for("react.forward_ref"),zo=Symbol.for("react.suspense"),Do=Symbol.for("react.suspense_list"),Bs=Symbol.for("react.memo"),fn=Symbol.for("react.lazy"),oc=Symbol.for("react.offscreen"),fa=Symbol.iterator;function Nt(e){return e===null||typeof e!="object"?null:(e=fa&&e[fa]||e["@@iterator"],typeof e=="function"?e:null)}var G=Object.assign,io;function Ut(e){if(io===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);io=n&&n[1]||""}return`
`+io+e}var oo=!1;function so(e,n){if(!e||oo)return"";oo=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(c){var r=c}Reflect.construct(e,[],n)}else{try{n.call()}catch(c){r=c}e.call(n.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,l=o.length-1;1<=s&&0<=l&&i[s]!==o[l];)l--;for(;1<=s&&0<=l;s--,l--)if(i[s]!==o[l]){if(s!==1||l!==1)do if(s--,l--,0>l||i[s]!==o[l]){var a=`
`+i[s].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=s&&0<=l);break}}}finally{oo=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Ut(e):""}function qf(e){switch(e.tag){case 5:return Ut(e.type);case 16:return Ut("Lazy");case 13:return Ut("Suspense");case 19:return Ut("SuspenseList");case 0:case 2:case 15:return e=so(e.type,!1),e;case 11:return e=so(e.type.render,!1),e;case 1:return e=so(e.type,!0),e;default:return""}}function Io(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case it:return"Fragment";case rt:return"Portal";case No:return"Profiler";case Os:return"StrictMode";case zo:return"Suspense";case Do:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ic:return(e.displayName||"Context")+".Consumer";case rc:return(e._context.displayName||"Context")+".Provider";case Fs:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Bs:return n=e.displayName||null,n!==null?n:Io(e.type)||"Memo";case fn:n=e._payload,e=e._init;try{return Io(e(n))}catch{}}return null}function ep(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Io(n);case 8:return n===Os?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function En(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function sc(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function np(e){var n=sc(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,o=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function $r(e){e._valueTracker||(e._valueTracker=np(e))}function lc(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=sc(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function si(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Oo(e,n){var t=n.checked;return G({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function pa(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=En(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function ac(e,n){n=n.checked,n!=null&&Is(e,"checked",n,!1)}function Fo(e,n){ac(e,n);var t=En(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Bo(e,n.type,t):n.hasOwnProperty("defaultValue")&&Bo(e,n.type,En(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function ga(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Bo(e,n,t){(n!=="number"||si(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Vt=Array.isArray;function mt(e,n,t,r){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&r&&(e[t].defaultSelected=!0)}else{for(t=""+En(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function Wo(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(C(91));return G({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ma(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(C(92));if(Vt(t)){if(1<t.length)throw Error(C(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:En(t)}}function uc(e,n){var t=En(n.value),r=En(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function ha(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function cc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ho(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?cc(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ar,dc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,i){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,i)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Ar=Ar||document.createElement("div"),Ar.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Ar.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function or(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Gt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},tp=["Webkit","ms","Moz","O"];Object.keys(Gt).forEach(function(e){tp.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Gt[n]=Gt[e]})});function fc(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Gt.hasOwnProperty(e)&&Gt[e]?(""+n).trim():n+"px"}function pc(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,i=fc(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,i):e[t]=i}}var rp=G({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Uo(e,n){if(n){if(rp[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(C(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(C(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(C(61))}if(n.style!=null&&typeof n.style!="object")throw Error(C(62))}}function Vo(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Yo=null;function Ws(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Qo=null,ht=null,yt=null;function ya(e){if(e=_r(e)){if(typeof Qo!="function")throw Error(C(280));var n=e.stateNode;n&&(n=Ii(n),Qo(e.stateNode,e.type,n))}}function gc(e){ht?yt?yt.push(e):yt=[e]:ht=e}function mc(){if(ht){var e=ht,n=yt;if(yt=ht=null,ya(e),n)for(e=0;e<n.length;e++)ya(n[e])}}function hc(e,n){return e(n)}function yc(){}var lo=!1;function vc(e,n,t){if(lo)return e(n,t);lo=!0;try{return hc(e,n,t)}finally{lo=!1,(ht!==null||yt!==null)&&(yc(),mc())}}function sr(e,n){var t=e.stateNode;if(t===null)return null;var r=Ii(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(C(231,n,typeof t));return t}var Ko=!1;if(rn)try{var zt={};Object.defineProperty(zt,"passive",{get:function(){Ko=!0}}),window.addEventListener("test",zt,zt),window.removeEventListener("test",zt,zt)}catch{Ko=!1}function ip(e,n,t,r,i,o,s,l,a){var c=Array.prototype.slice.call(arguments,3);try{n.apply(t,c)}catch(f){this.onError(f)}}var Jt=!1,li=null,ai=!1,Go=null,op={onError:function(e){Jt=!0,li=e}};function sp(e,n,t,r,i,o,s,l,a){Jt=!1,li=null,ip.apply(op,arguments)}function lp(e,n,t,r,i,o,s,l,a){if(sp.apply(this,arguments),Jt){if(Jt){var c=li;Jt=!1,li=null}else throw Error(C(198));ai||(ai=!0,Go=c)}}function qn(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function xc(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function va(e){if(qn(e)!==e)throw Error(C(188))}function ap(e){var n=e.alternate;if(!n){if(n=qn(e),n===null)throw Error(C(188));return n!==e?null:e}for(var t=e,r=n;;){var i=t.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){t=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===t)return va(i),e;if(o===r)return va(i),n;o=o.sibling}throw Error(C(188))}if(t.return!==r.return)t=i,r=o;else{for(var s=!1,l=i.child;l;){if(l===t){s=!0,t=i,r=o;break}if(l===r){s=!0,r=i,t=o;break}l=l.sibling}if(!s){for(l=o.child;l;){if(l===t){s=!0,t=o,r=i;break}if(l===r){s=!0,r=o,t=i;break}l=l.sibling}if(!s)throw Error(C(189))}}if(t.alternate!==r)throw Error(C(190))}if(t.tag!==3)throw Error(C(188));return t.stateNode.current===t?e:n}function kc(e){return e=ap(e),e!==null?Pc(e):null}function Pc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Pc(e);if(n!==null)return n;e=e.sibling}return null}var wc=Re.unstable_scheduleCallback,xa=Re.unstable_cancelCallback,up=Re.unstable_shouldYield,cp=Re.unstable_requestPaint,Z=Re.unstable_now,dp=Re.unstable_getCurrentPriorityLevel,Hs=Re.unstable_ImmediatePriority,Sc=Re.unstable_UserBlockingPriority,ui=Re.unstable_NormalPriority,fp=Re.unstable_LowPriority,bc=Re.unstable_IdlePriority,Mi=null,Ge=null;function pp(e){if(Ge&&typeof Ge.onCommitFiberRoot=="function")try{Ge.onCommitFiberRoot(Mi,e,void 0,(e.current.flags&128)===128)}catch{}}var We=Math.clz32?Math.clz32:hp,gp=Math.log,mp=Math.LN2;function hp(e){return e>>>=0,e===0?32:31-(gp(e)/mp|0)|0}var Lr=64,Mr=4194304;function Yt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ci(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=t&268435455;if(s!==0){var l=s&~i;l!==0?r=Yt(l):(o&=s,o!==0&&(r=Yt(o)))}else s=t&~i,s!==0?r=Yt(s):o!==0&&(r=Yt(o));if(r===0)return 0;if(n!==0&&n!==r&&!(n&i)&&(i=r&-r,o=n&-n,i>=o||i===16&&(o&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-We(n),i=1<<t,r|=e[t],n&=~i;return r}function yp(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vp(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-We(o),l=1<<s,a=i[s];a===-1?(!(l&t)||l&r)&&(i[s]=yp(l,n)):a<=n&&(e.expiredLanes|=l),o&=~l}}function Jo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Cc(){var e=Lr;return Lr<<=1,!(Lr&4194240)&&(Lr=64),e}function ao(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function br(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-We(n),e[n]=t}function xp(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-We(t),o=1<<i;n[i]=0,r[i]=-1,e[i]=-1,t&=~o}}function Us(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-We(t),i=1<<r;i&n|e[r]&n&&(e[r]|=n),t&=~i}}var F=0;function _c(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Rc,Vs,Tc,Ec,jc,Xo=!1,Nr=[],kn=null,Pn=null,wn=null,lr=new Map,ar=new Map,mn=[],kp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ka(e,n){switch(e){case"focusin":case"focusout":kn=null;break;case"dragenter":case"dragleave":Pn=null;break;case"mouseover":case"mouseout":wn=null;break;case"pointerover":case"pointerout":lr.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ar.delete(n.pointerId)}}function Dt(e,n,t,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},n!==null&&(n=_r(n),n!==null&&Vs(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function Pp(e,n,t,r,i){switch(n){case"focusin":return kn=Dt(kn,e,n,t,r,i),!0;case"dragenter":return Pn=Dt(Pn,e,n,t,r,i),!0;case"mouseover":return wn=Dt(wn,e,n,t,r,i),!0;case"pointerover":var o=i.pointerId;return lr.set(o,Dt(lr.get(o)||null,e,n,t,r,i)),!0;case"gotpointercapture":return o=i.pointerId,ar.set(o,Dt(ar.get(o)||null,e,n,t,r,i)),!0}return!1}function $c(e){var n=Bn(e.target);if(n!==null){var t=qn(n);if(t!==null){if(n=t.tag,n===13){if(n=xc(t),n!==null){e.blockedOn=n,jc(e.priority,function(){Tc(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Jr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Zo(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);Yo=r,t.target.dispatchEvent(r),Yo=null}else return n=_r(t),n!==null&&Vs(n),e.blockedOn=t,!1;n.shift()}return!0}function Pa(e,n,t){Jr(e)&&t.delete(n)}function wp(){Xo=!1,kn!==null&&Jr(kn)&&(kn=null),Pn!==null&&Jr(Pn)&&(Pn=null),wn!==null&&Jr(wn)&&(wn=null),lr.forEach(Pa),ar.forEach(Pa)}function It(e,n){e.blockedOn===n&&(e.blockedOn=null,Xo||(Xo=!0,Re.unstable_scheduleCallback(Re.unstable_NormalPriority,wp)))}function ur(e){function n(i){return It(i,e)}if(0<Nr.length){It(Nr[0],e);for(var t=1;t<Nr.length;t++){var r=Nr[t];r.blockedOn===e&&(r.blockedOn=null)}}for(kn!==null&&It(kn,e),Pn!==null&&It(Pn,e),wn!==null&&It(wn,e),lr.forEach(n),ar.forEach(n),t=0;t<mn.length;t++)r=mn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<mn.length&&(t=mn[0],t.blockedOn===null);)$c(t),t.blockedOn===null&&mn.shift()}var vt=an.ReactCurrentBatchConfig,di=!0;function Sp(e,n,t,r){var i=F,o=vt.transition;vt.transition=null;try{F=1,Ys(e,n,t,r)}finally{F=i,vt.transition=o}}function bp(e,n,t,r){var i=F,o=vt.transition;vt.transition=null;try{F=4,Ys(e,n,t,r)}finally{F=i,vt.transition=o}}function Ys(e,n,t,r){if(di){var i=Zo(e,n,t,r);if(i===null)xo(e,n,r,fi,t),ka(e,r);else if(Pp(i,e,n,t,r))r.stopPropagation();else if(ka(e,r),n&4&&-1<kp.indexOf(e)){for(;i!==null;){var o=_r(i);if(o!==null&&Rc(o),o=Zo(e,n,t,r),o===null&&xo(e,n,r,fi,t),o===i)break;i=o}i!==null&&r.stopPropagation()}else xo(e,n,r,null,t)}}var fi=null;function Zo(e,n,t,r){if(fi=null,e=Ws(r),e=Bn(e),e!==null)if(n=qn(e),n===null)e=null;else if(t=n.tag,t===13){if(e=xc(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return fi=e,null}function Ac(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(dp()){case Hs:return 1;case Sc:return 4;case ui:case fp:return 16;case bc:return 536870912;default:return 16}default:return 16}}var yn=null,Qs=null,Xr=null;function Lc(){if(Xr)return Xr;var e,n=Qs,t=n.length,r,i="value"in yn?yn.value:yn.textContent,o=i.length;for(e=0;e<t&&n[e]===i[e];e++);var s=t-e;for(r=1;r<=s&&n[t-r]===i[o-r];r++);return Xr=i.slice(e,1<r?1-r:void 0)}function Zr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function zr(){return!0}function wa(){return!1}function Ee(e){function n(t,r,i,o,s){this._reactName=t,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(t=e[l],this[l]=t?t(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?zr:wa,this.isPropagationStopped=wa,this}return G(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=zr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=zr)},persist:function(){},isPersistent:zr}),n}var Et={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ks=Ee(Et),Cr=G({},Et,{view:0,detail:0}),Cp=Ee(Cr),uo,co,Ot,Ni=G({},Cr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ot&&(Ot&&e.type==="mousemove"?(uo=e.screenX-Ot.screenX,co=e.screenY-Ot.screenY):co=uo=0,Ot=e),uo)},movementY:function(e){return"movementY"in e?e.movementY:co}}),Sa=Ee(Ni),_p=G({},Ni,{dataTransfer:0}),Rp=Ee(_p),Tp=G({},Cr,{relatedTarget:0}),fo=Ee(Tp),Ep=G({},Et,{animationName:0,elapsedTime:0,pseudoElement:0}),jp=Ee(Ep),$p=G({},Et,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ap=Ee($p),Lp=G({},Et,{data:0}),ba=Ee(Lp),Mp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Np={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Dp(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=zp[e])?!!n[e]:!1}function Gs(){return Dp}var Ip=G({},Cr,{key:function(e){if(e.key){var n=Mp[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Zr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Np[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gs,charCode:function(e){return e.type==="keypress"?Zr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Zr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Op=Ee(Ip),Fp=G({},Ni,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ca=Ee(Fp),Bp=G({},Cr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gs}),Wp=Ee(Bp),Hp=G({},Et,{propertyName:0,elapsedTime:0,pseudoElement:0}),Up=Ee(Hp),Vp=G({},Ni,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Yp=Ee(Vp),Qp=[9,13,27,32],Js=rn&&"CompositionEvent"in window,Xt=null;rn&&"documentMode"in document&&(Xt=document.documentMode);var Kp=rn&&"TextEvent"in window&&!Xt,Mc=rn&&(!Js||Xt&&8<Xt&&11>=Xt),_a=" ",Ra=!1;function Nc(e,n){switch(e){case"keyup":return Qp.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ot=!1;function Gp(e,n){switch(e){case"compositionend":return zc(n);case"keypress":return n.which!==32?null:(Ra=!0,_a);case"textInput":return e=n.data,e===_a&&Ra?null:e;default:return null}}function Jp(e,n){if(ot)return e==="compositionend"||!Js&&Nc(e,n)?(e=Lc(),Xr=Qs=yn=null,ot=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Mc&&n.locale!=="ko"?null:n.data;default:return null}}var Xp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ta(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Xp[e.type]:n==="textarea"}function Dc(e,n,t,r){gc(r),n=pi(n,"onChange"),0<n.length&&(t=new Ks("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Zt=null,cr=null;function Zp(e){Kc(e,0)}function zi(e){var n=at(e);if(lc(n))return e}function qp(e,n){if(e==="change")return n}var Ic=!1;if(rn){var po;if(rn){var go="oninput"in document;if(!go){var Ea=document.createElement("div");Ea.setAttribute("oninput","return;"),go=typeof Ea.oninput=="function"}po=go}else po=!1;Ic=po&&(!document.documentMode||9<document.documentMode)}function ja(){Zt&&(Zt.detachEvent("onpropertychange",Oc),cr=Zt=null)}function Oc(e){if(e.propertyName==="value"&&zi(cr)){var n=[];Dc(n,cr,e,Ws(e)),vc(Zp,n)}}function eg(e,n,t){e==="focusin"?(ja(),Zt=n,cr=t,Zt.attachEvent("onpropertychange",Oc)):e==="focusout"&&ja()}function ng(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return zi(cr)}function tg(e,n){if(e==="click")return zi(n)}function rg(e,n){if(e==="input"||e==="change")return zi(n)}function ig(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Ue=typeof Object.is=="function"?Object.is:ig;function dr(e,n){if(Ue(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var i=t[r];if(!Mo.call(n,i)||!Ue(e[i],n[i]))return!1}return!0}function $a(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Aa(e,n){var t=$a(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=$a(t)}}function Fc(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Fc(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Bc(){for(var e=window,n=si();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=si(e.document)}return n}function Xs(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function og(e){var n=Bc(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Fc(t.ownerDocument.documentElement,t)){if(r!==null&&Xs(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Aa(t,o);var s=Aa(t,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(n),e.extend(s.node,s.offset)):(n.setEnd(s.node,s.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var sg=rn&&"documentMode"in document&&11>=document.documentMode,st=null,qo=null,qt=null,es=!1;function La(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;es||st==null||st!==si(r)||(r=st,"selectionStart"in r&&Xs(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),qt&&dr(qt,r)||(qt=r,r=pi(qo,"onSelect"),0<r.length&&(n=new Ks("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=st)))}function Dr(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var lt={animationend:Dr("Animation","AnimationEnd"),animationiteration:Dr("Animation","AnimationIteration"),animationstart:Dr("Animation","AnimationStart"),transitionend:Dr("Transition","TransitionEnd")},mo={},Wc={};rn&&(Wc=document.createElement("div").style,"AnimationEvent"in window||(delete lt.animationend.animation,delete lt.animationiteration.animation,delete lt.animationstart.animation),"TransitionEvent"in window||delete lt.transitionend.transition);function Di(e){if(mo[e])return mo[e];if(!lt[e])return e;var n=lt[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Wc)return mo[e]=n[t];return e}var Hc=Di("animationend"),Uc=Di("animationiteration"),Vc=Di("animationstart"),Yc=Di("transitionend"),Qc=new Map,Ma="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $n(e,n){Qc.set(e,n),Zn(n,[e])}for(var ho=0;ho<Ma.length;ho++){var yo=Ma[ho],lg=yo.toLowerCase(),ag=yo[0].toUpperCase()+yo.slice(1);$n(lg,"on"+ag)}$n(Hc,"onAnimationEnd");$n(Uc,"onAnimationIteration");$n(Vc,"onAnimationStart");$n("dblclick","onDoubleClick");$n("focusin","onFocus");$n("focusout","onBlur");$n(Yc,"onTransitionEnd");Pt("onMouseEnter",["mouseout","mouseover"]);Pt("onMouseLeave",["mouseout","mouseover"]);Pt("onPointerEnter",["pointerout","pointerover"]);Pt("onPointerLeave",["pointerout","pointerover"]);Zn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Zn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Zn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Zn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Zn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Zn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ug=new Set("cancel close invalid load scroll toggle".split(" ").concat(Qt));function Na(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,lp(r,n,void 0,e),e.currentTarget=null}function Kc(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],i=r.event;r=r.listeners;e:{var o=void 0;if(n)for(var s=r.length-1;0<=s;s--){var l=r[s],a=l.instance,c=l.currentTarget;if(l=l.listener,a!==o&&i.isPropagationStopped())break e;Na(i,l,c),o=a}else for(s=0;s<r.length;s++){if(l=r[s],a=l.instance,c=l.currentTarget,l=l.listener,a!==o&&i.isPropagationStopped())break e;Na(i,l,c),o=a}}}if(ai)throw e=Go,ai=!1,Go=null,e}function H(e,n){var t=n[os];t===void 0&&(t=n[os]=new Set);var r=e+"__bubble";t.has(r)||(Gc(n,e,2,!1),t.add(r))}function vo(e,n,t){var r=0;n&&(r|=4),Gc(t,e,r,n)}var Ir="_reactListening"+Math.random().toString(36).slice(2);function fr(e){if(!e[Ir]){e[Ir]=!0,tc.forEach(function(t){t!=="selectionchange"&&(ug.has(t)||vo(t,!1,e),vo(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Ir]||(n[Ir]=!0,vo("selectionchange",!1,n))}}function Gc(e,n,t,r){switch(Ac(n)){case 1:var i=Sp;break;case 4:i=bp;break;default:i=Ys}t=i.bind(null,n,t,e),i=void 0,!Ko||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function xo(e,n,t,r,i){var o=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var a=s.tag;if((a===3||a===4)&&(a=s.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;s=s.return}for(;l!==null;){if(s=Bn(l),s===null)return;if(a=s.tag,a===5||a===6){r=o=s;continue e}l=l.parentNode}}r=r.return}vc(function(){var c=o,f=Ws(t),p=[];e:{var h=Qc.get(e);if(h!==void 0){var m=Ks,v=e;switch(e){case"keypress":if(Zr(t)===0)break e;case"keydown":case"keyup":m=Op;break;case"focusin":v="focus",m=fo;break;case"focusout":v="blur",m=fo;break;case"beforeblur":case"afterblur":m=fo;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Sa;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=Rp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=Wp;break;case Hc:case Uc:case Vc:m=jp;break;case Yc:m=Up;break;case"scroll":m=Cp;break;case"wheel":m=Yp;break;case"copy":case"cut":case"paste":m=Ap;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Ca}var k=(n&4)!==0,w=!k&&e==="scroll",g=k?h!==null?h+"Capture":null:h;k=[];for(var d=c,y;d!==null;){y=d;var P=y.stateNode;if(y.tag===5&&P!==null&&(y=P,g!==null&&(P=sr(d,g),P!=null&&k.push(pr(d,P,y)))),w)break;d=d.return}0<k.length&&(h=new m(h,v,null,t,f),p.push({event:h,listeners:k}))}}if(!(n&7)){e:{if(h=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",h&&t!==Yo&&(v=t.relatedTarget||t.fromElement)&&(Bn(v)||v[on]))break e;if((m||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,m?(v=t.relatedTarget||t.toElement,m=c,v=v?Bn(v):null,v!==null&&(w=qn(v),v!==w||v.tag!==5&&v.tag!==6)&&(v=null)):(m=null,v=c),m!==v)){if(k=Sa,P="onMouseLeave",g="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(k=Ca,P="onPointerLeave",g="onPointerEnter",d="pointer"),w=m==null?h:at(m),y=v==null?h:at(v),h=new k(P,d+"leave",m,t,f),h.target=w,h.relatedTarget=y,P=null,Bn(f)===c&&(k=new k(g,d+"enter",v,t,f),k.target=y,k.relatedTarget=w,P=k),w=P,m&&v)n:{for(k=m,g=v,d=0,y=k;y;y=tt(y))d++;for(y=0,P=g;P;P=tt(P))y++;for(;0<d-y;)k=tt(k),d--;for(;0<y-d;)g=tt(g),y--;for(;d--;){if(k===g||g!==null&&k===g.alternate)break n;k=tt(k),g=tt(g)}k=null}else k=null;m!==null&&za(p,h,m,k,!1),v!==null&&w!==null&&za(p,w,v,k,!0)}}e:{if(h=c?at(c):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var S=qp;else if(Ta(h))if(Ic)S=rg;else{S=ng;var b=eg}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(S=tg);if(S&&(S=S(e,c))){Dc(p,S,t,f);break e}b&&b(e,h,c),e==="focusout"&&(b=h._wrapperState)&&b.controlled&&h.type==="number"&&Bo(h,"number",h.value)}switch(b=c?at(c):window,e){case"focusin":(Ta(b)||b.contentEditable==="true")&&(st=b,qo=c,qt=null);break;case"focusout":qt=qo=st=null;break;case"mousedown":es=!0;break;case"contextmenu":case"mouseup":case"dragend":es=!1,La(p,t,f);break;case"selectionchange":if(sg)break;case"keydown":case"keyup":La(p,t,f)}var _;if(Js)e:{switch(e){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else ot?Nc(e,t)&&(R="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(R="onCompositionStart");R&&(Mc&&t.locale!=="ko"&&(ot||R!=="onCompositionStart"?R==="onCompositionEnd"&&ot&&(_=Lc()):(yn=f,Qs="value"in yn?yn.value:yn.textContent,ot=!0)),b=pi(c,R),0<b.length&&(R=new ba(R,e,null,t,f),p.push({event:R,listeners:b}),_?R.data=_:(_=zc(t),_!==null&&(R.data=_)))),(_=Kp?Gp(e,t):Jp(e,t))&&(c=pi(c,"onBeforeInput"),0<c.length&&(f=new ba("onBeforeInput","beforeinput",null,t,f),p.push({event:f,listeners:c}),f.data=_))}Kc(p,n)})}function pr(e,n,t){return{instance:e,listener:n,currentTarget:t}}function pi(e,n){for(var t=n+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=sr(e,t),o!=null&&r.unshift(pr(e,o,i)),o=sr(e,n),o!=null&&r.push(pr(e,o,i))),e=e.return}return r}function tt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function za(e,n,t,r,i){for(var o=n._reactName,s=[];t!==null&&t!==r;){var l=t,a=l.alternate,c=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&c!==null&&(l=c,i?(a=sr(t,o),a!=null&&s.unshift(pr(t,a,l))):i||(a=sr(t,o),a!=null&&s.push(pr(t,a,l)))),t=t.return}s.length!==0&&e.push({event:n,listeners:s})}var cg=/\r\n?/g,dg=/\u0000|\uFFFD/g;function Da(e){return(typeof e=="string"?e:""+e).replace(cg,`
`).replace(dg,"")}function Or(e,n,t){if(n=Da(n),Da(e)!==n&&t)throw Error(C(425))}function gi(){}var ns=null,ts=null;function rs(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var is=typeof setTimeout=="function"?setTimeout:void 0,fg=typeof clearTimeout=="function"?clearTimeout:void 0,Ia=typeof Promise=="function"?Promise:void 0,pg=typeof queueMicrotask=="function"?queueMicrotask:typeof Ia<"u"?function(e){return Ia.resolve(null).then(e).catch(gg)}:is;function gg(e){setTimeout(function(){throw e})}function ko(e,n){var t=n,r=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(r===0){e.removeChild(i),ur(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=i}while(t);ur(n)}function Sn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Oa(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var jt=Math.random().toString(36).slice(2),Ke="__reactFiber$"+jt,gr="__reactProps$"+jt,on="__reactContainer$"+jt,os="__reactEvents$"+jt,mg="__reactListeners$"+jt,hg="__reactHandles$"+jt;function Bn(e){var n=e[Ke];if(n)return n;for(var t=e.parentNode;t;){if(n=t[on]||t[Ke]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Oa(e);e!==null;){if(t=e[Ke])return t;e=Oa(e)}return n}e=t,t=e.parentNode}return null}function _r(e){return e=e[Ke]||e[on],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function at(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(C(33))}function Ii(e){return e[gr]||null}var ss=[],ut=-1;function An(e){return{current:e}}function U(e){0>ut||(e.current=ss[ut],ss[ut]=null,ut--)}function W(e,n){ut++,ss[ut]=e.current,e.current=n}var jn={},fe=An(jn),xe=An(!1),Yn=jn;function wt(e,n){var t=e.type.contextTypes;if(!t)return jn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in t)i[o]=n[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function ke(e){return e=e.childContextTypes,e!=null}function mi(){U(xe),U(fe)}function Fa(e,n,t){if(fe.current!==jn)throw Error(C(168));W(fe,n),W(xe,t)}function Jc(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var i in r)if(!(i in n))throw Error(C(108,ep(e)||"Unknown",i));return G({},t,r)}function hi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||jn,Yn=fe.current,W(fe,e),W(xe,xe.current),!0}function Ba(e,n,t){var r=e.stateNode;if(!r)throw Error(C(169));t?(e=Jc(e,n,Yn),r.__reactInternalMemoizedMergedChildContext=e,U(xe),U(fe),W(fe,e)):U(xe),W(xe,t)}var qe=null,Oi=!1,Po=!1;function Xc(e){qe===null?qe=[e]:qe.push(e)}function yg(e){Oi=!0,Xc(e)}function Ln(){if(!Po&&qe!==null){Po=!0;var e=0,n=F;try{var t=qe;for(F=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}qe=null,Oi=!1}catch(i){throw qe!==null&&(qe=qe.slice(e+1)),wc(Hs,Ln),i}finally{F=n,Po=!1}}return null}var ct=[],dt=0,yi=null,vi=0,$e=[],Ae=0,Qn=null,en=1,nn="";function On(e,n){ct[dt++]=vi,ct[dt++]=yi,yi=e,vi=n}function Zc(e,n,t){$e[Ae++]=en,$e[Ae++]=nn,$e[Ae++]=Qn,Qn=e;var r=en;e=nn;var i=32-We(r)-1;r&=~(1<<i),t+=1;var o=32-We(n)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,en=1<<32-We(n)+i|t<<i|r,nn=o+e}else en=1<<o|t<<i|r,nn=e}function Zs(e){e.return!==null&&(On(e,1),Zc(e,1,0))}function qs(e){for(;e===yi;)yi=ct[--dt],ct[dt]=null,vi=ct[--dt],ct[dt]=null;for(;e===Qn;)Qn=$e[--Ae],$e[Ae]=null,nn=$e[--Ae],$e[Ae]=null,en=$e[--Ae],$e[Ae]=null}var _e=null,Ce=null,Y=!1,Be=null;function qc(e,n){var t=Le(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Wa(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,_e=e,Ce=Sn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,_e=e,Ce=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Qn!==null?{id:en,overflow:nn}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Le(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,_e=e,Ce=null,!0):!1;default:return!1}}function ls(e){return(e.mode&1)!==0&&(e.flags&128)===0}function as(e){if(Y){var n=Ce;if(n){var t=n;if(!Wa(e,n)){if(ls(e))throw Error(C(418));n=Sn(t.nextSibling);var r=_e;n&&Wa(e,n)?qc(r,t):(e.flags=e.flags&-4097|2,Y=!1,_e=e)}}else{if(ls(e))throw Error(C(418));e.flags=e.flags&-4097|2,Y=!1,_e=e}}}function Ha(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;_e=e}function Fr(e){if(e!==_e)return!1;if(!Y)return Ha(e),Y=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!rs(e.type,e.memoizedProps)),n&&(n=Ce)){if(ls(e))throw ed(),Error(C(418));for(;n;)qc(e,n),n=Sn(n.nextSibling)}if(Ha(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(C(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Ce=Sn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Ce=null}}else Ce=_e?Sn(e.stateNode.nextSibling):null;return!0}function ed(){for(var e=Ce;e;)e=Sn(e.nextSibling)}function St(){Ce=_e=null,Y=!1}function el(e){Be===null?Be=[e]:Be.push(e)}var vg=an.ReactCurrentBatchConfig;function Ft(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(C(309));var r=t.stateNode}if(!r)throw Error(C(147,e));var i=r,o=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===o?n.ref:(n=function(s){var l=i.refs;s===null?delete l[o]:l[o]=s},n._stringRef=o,n)}if(typeof e!="string")throw Error(C(284));if(!t._owner)throw Error(C(290,e))}return e}function Br(e,n){throw e=Object.prototype.toString.call(n),Error(C(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Ua(e){var n=e._init;return n(e._payload)}function nd(e){function n(g,d){if(e){var y=g.deletions;y===null?(g.deletions=[d],g.flags|=16):y.push(d)}}function t(g,d){if(!e)return null;for(;d!==null;)n(g,d),d=d.sibling;return null}function r(g,d){for(g=new Map;d!==null;)d.key!==null?g.set(d.key,d):g.set(d.index,d),d=d.sibling;return g}function i(g,d){return g=Rn(g,d),g.index=0,g.sibling=null,g}function o(g,d,y){return g.index=y,e?(y=g.alternate,y!==null?(y=y.index,y<d?(g.flags|=2,d):y):(g.flags|=2,d)):(g.flags|=1048576,d)}function s(g){return e&&g.alternate===null&&(g.flags|=2),g}function l(g,d,y,P){return d===null||d.tag!==6?(d=To(y,g.mode,P),d.return=g,d):(d=i(d,y),d.return=g,d)}function a(g,d,y,P){var S=y.type;return S===it?f(g,d,y.props.children,P,y.key):d!==null&&(d.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===fn&&Ua(S)===d.type)?(P=i(d,y.props),P.ref=Ft(g,d,y),P.return=g,P):(P=oi(y.type,y.key,y.props,null,g.mode,P),P.ref=Ft(g,d,y),P.return=g,P)}function c(g,d,y,P){return d===null||d.tag!==4||d.stateNode.containerInfo!==y.containerInfo||d.stateNode.implementation!==y.implementation?(d=Eo(y,g.mode,P),d.return=g,d):(d=i(d,y.children||[]),d.return=g,d)}function f(g,d,y,P,S){return d===null||d.tag!==7?(d=Vn(y,g.mode,P,S),d.return=g,d):(d=i(d,y),d.return=g,d)}function p(g,d,y){if(typeof d=="string"&&d!==""||typeof d=="number")return d=To(""+d,g.mode,y),d.return=g,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case jr:return y=oi(d.type,d.key,d.props,null,g.mode,y),y.ref=Ft(g,null,d),y.return=g,y;case rt:return d=Eo(d,g.mode,y),d.return=g,d;case fn:var P=d._init;return p(g,P(d._payload),y)}if(Vt(d)||Nt(d))return d=Vn(d,g.mode,y,null),d.return=g,d;Br(g,d)}return null}function h(g,d,y,P){var S=d!==null?d.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return S!==null?null:l(g,d,""+y,P);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case jr:return y.key===S?a(g,d,y,P):null;case rt:return y.key===S?c(g,d,y,P):null;case fn:return S=y._init,h(g,d,S(y._payload),P)}if(Vt(y)||Nt(y))return S!==null?null:f(g,d,y,P,null);Br(g,y)}return null}function m(g,d,y,P,S){if(typeof P=="string"&&P!==""||typeof P=="number")return g=g.get(y)||null,l(d,g,""+P,S);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case jr:return g=g.get(P.key===null?y:P.key)||null,a(d,g,P,S);case rt:return g=g.get(P.key===null?y:P.key)||null,c(d,g,P,S);case fn:var b=P._init;return m(g,d,y,b(P._payload),S)}if(Vt(P)||Nt(P))return g=g.get(y)||null,f(d,g,P,S,null);Br(d,P)}return null}function v(g,d,y,P){for(var S=null,b=null,_=d,R=d=0,N=null;_!==null&&R<y.length;R++){_.index>R?(N=_,_=null):N=_.sibling;var j=h(g,_,y[R],P);if(j===null){_===null&&(_=N);break}e&&_&&j.alternate===null&&n(g,_),d=o(j,d,R),b===null?S=j:b.sibling=j,b=j,_=N}if(R===y.length)return t(g,_),Y&&On(g,R),S;if(_===null){for(;R<y.length;R++)_=p(g,y[R],P),_!==null&&(d=o(_,d,R),b===null?S=_:b.sibling=_,b=_);return Y&&On(g,R),S}for(_=r(g,_);R<y.length;R++)N=m(_,g,R,y[R],P),N!==null&&(e&&N.alternate!==null&&_.delete(N.key===null?R:N.key),d=o(N,d,R),b===null?S=N:b.sibling=N,b=N);return e&&_.forEach(function(B){return n(g,B)}),Y&&On(g,R),S}function k(g,d,y,P){var S=Nt(y);if(typeof S!="function")throw Error(C(150));if(y=S.call(y),y==null)throw Error(C(151));for(var b=S=null,_=d,R=d=0,N=null,j=y.next();_!==null&&!j.done;R++,j=y.next()){_.index>R?(N=_,_=null):N=_.sibling;var B=h(g,_,j.value,P);if(B===null){_===null&&(_=N);break}e&&_&&B.alternate===null&&n(g,_),d=o(B,d,R),b===null?S=B:b.sibling=B,b=B,_=N}if(j.done)return t(g,_),Y&&On(g,R),S;if(_===null){for(;!j.done;R++,j=y.next())j=p(g,j.value,P),j!==null&&(d=o(j,d,R),b===null?S=j:b.sibling=j,b=j);return Y&&On(g,R),S}for(_=r(g,_);!j.done;R++,j=y.next())j=m(_,g,R,j.value,P),j!==null&&(e&&j.alternate!==null&&_.delete(j.key===null?R:j.key),d=o(j,d,R),b===null?S=j:b.sibling=j,b=j);return e&&_.forEach(function(we){return n(g,we)}),Y&&On(g,R),S}function w(g,d,y,P){if(typeof y=="object"&&y!==null&&y.type===it&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case jr:e:{for(var S=y.key,b=d;b!==null;){if(b.key===S){if(S=y.type,S===it){if(b.tag===7){t(g,b.sibling),d=i(b,y.props.children),d.return=g,g=d;break e}}else if(b.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===fn&&Ua(S)===b.type){t(g,b.sibling),d=i(b,y.props),d.ref=Ft(g,b,y),d.return=g,g=d;break e}t(g,b);break}else n(g,b);b=b.sibling}y.type===it?(d=Vn(y.props.children,g.mode,P,y.key),d.return=g,g=d):(P=oi(y.type,y.key,y.props,null,g.mode,P),P.ref=Ft(g,d,y),P.return=g,g=P)}return s(g);case rt:e:{for(b=y.key;d!==null;){if(d.key===b)if(d.tag===4&&d.stateNode.containerInfo===y.containerInfo&&d.stateNode.implementation===y.implementation){t(g,d.sibling),d=i(d,y.children||[]),d.return=g,g=d;break e}else{t(g,d);break}else n(g,d);d=d.sibling}d=Eo(y,g.mode,P),d.return=g,g=d}return s(g);case fn:return b=y._init,w(g,d,b(y._payload),P)}if(Vt(y))return v(g,d,y,P);if(Nt(y))return k(g,d,y,P);Br(g,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,d!==null&&d.tag===6?(t(g,d.sibling),d=i(d,y),d.return=g,g=d):(t(g,d),d=To(y,g.mode,P),d.return=g,g=d),s(g)):t(g,d)}return w}var bt=nd(!0),td=nd(!1),xi=An(null),ki=null,ft=null,nl=null;function tl(){nl=ft=ki=null}function rl(e){var n=xi.current;U(xi),e._currentValue=n}function us(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function xt(e,n){ki=e,nl=ft=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(ve=!0),e.firstContext=null)}function Ne(e){var n=e._currentValue;if(nl!==e)if(e={context:e,memoizedValue:n,next:null},ft===null){if(ki===null)throw Error(C(308));ft=e,ki.dependencies={lanes:0,firstContext:e}}else ft=ft.next=e;return n}var Wn=null;function il(e){Wn===null?Wn=[e]:Wn.push(e)}function rd(e,n,t,r){var i=n.interleaved;return i===null?(t.next=t,il(n)):(t.next=i.next,i.next=t),n.interleaved=t,sn(e,r)}function sn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var pn=!1;function ol(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function id(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function tn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function bn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,z&2){var i=r.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),r.pending=n,sn(e,t)}return i=r.interleaved,i===null?(n.next=n,il(r)):(n.next=i.next,i.next=n),r.interleaved=n,sn(e,t)}function qr(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Us(e,t)}}function Va(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var i=null,o=null;if(t=t.firstBaseUpdate,t!==null){do{var s={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};o===null?i=o=s:o=o.next=s,t=t.next}while(t!==null);o===null?i=o=n:o=o.next=n}else i=o=n;t={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Pi(e,n,t,r){var i=e.updateQueue;pn=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,c=a.next;a.next=null,s===null?o=c:s.next=c,s=a;var f=e.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==s&&(l===null?f.firstBaseUpdate=c:l.next=c,f.lastBaseUpdate=a))}if(o!==null){var p=i.baseState;s=0,f=c=a=null,l=o;do{var h=l.lane,m=l.eventTime;if((r&h)===h){f!==null&&(f=f.next={eventTime:m,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=e,k=l;switch(h=n,m=t,k.tag){case 1:if(v=k.payload,typeof v=="function"){p=v.call(m,p,h);break e}p=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=k.payload,h=typeof v=="function"?v.call(m,p,h):v,h==null)break e;p=G({},p,h);break e;case 2:pn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else m={eventTime:m,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(c=f=m,a=p):f=f.next=m,s|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(f===null&&(a=p),i.baseState=a,i.firstBaseUpdate=c,i.lastBaseUpdate=f,n=i.shared.interleaved,n!==null){i=n;do s|=i.lane,i=i.next;while(i!==n)}else o===null&&(i.shared.lanes=0);Gn|=s,e.lanes=s,e.memoizedState=p}}function Ya(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],i=r.callback;if(i!==null){if(r.callback=null,r=t,typeof i!="function")throw Error(C(191,i));i.call(r)}}}var Rr={},Je=An(Rr),mr=An(Rr),hr=An(Rr);function Hn(e){if(e===Rr)throw Error(C(174));return e}function sl(e,n){switch(W(hr,n),W(mr,e),W(Je,Rr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Ho(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Ho(n,e)}U(Je),W(Je,n)}function Ct(){U(Je),U(mr),U(hr)}function od(e){Hn(hr.current);var n=Hn(Je.current),t=Ho(n,e.type);n!==t&&(W(mr,e),W(Je,t))}function ll(e){mr.current===e&&(U(Je),U(mr))}var Q=An(0);function wi(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var wo=[];function al(){for(var e=0;e<wo.length;e++)wo[e]._workInProgressVersionPrimary=null;wo.length=0}var ei=an.ReactCurrentDispatcher,So=an.ReactCurrentBatchConfig,Kn=0,K=null,te=null,ie=null,Si=!1,er=!1,yr=0,xg=0;function ue(){throw Error(C(321))}function ul(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Ue(e[t],n[t]))return!1;return!0}function cl(e,n,t,r,i,o){if(Kn=o,K=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,ei.current=e===null||e.memoizedState===null?Sg:bg,e=t(r,i),er){o=0;do{if(er=!1,yr=0,25<=o)throw Error(C(301));o+=1,ie=te=null,n.updateQueue=null,ei.current=Cg,e=t(r,i)}while(er)}if(ei.current=bi,n=te!==null&&te.next!==null,Kn=0,ie=te=K=null,Si=!1,n)throw Error(C(300));return e}function dl(){var e=yr!==0;return yr=0,e}function Qe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ie===null?K.memoizedState=ie=e:ie=ie.next=e,ie}function ze(){if(te===null){var e=K.alternate;e=e!==null?e.memoizedState:null}else e=te.next;var n=ie===null?K.memoizedState:ie.next;if(n!==null)ie=n,te=e;else{if(e===null)throw Error(C(310));te=e,e={memoizedState:te.memoizedState,baseState:te.baseState,baseQueue:te.baseQueue,queue:te.queue,next:null},ie===null?K.memoizedState=ie=e:ie=ie.next=e}return ie}function vr(e,n){return typeof n=="function"?n(e):n}function bo(e){var n=ze(),t=n.queue;if(t===null)throw Error(C(311));t.lastRenderedReducer=e;var r=te,i=r.baseQueue,o=t.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,t.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=s=null,a=null,c=o;do{var f=c.lane;if((Kn&f)===f)a!==null&&(a=a.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var p={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};a===null?(l=a=p,s=r):a=a.next=p,K.lanes|=f,Gn|=f}c=c.next}while(c!==null&&c!==o);a===null?s=r:a.next=l,Ue(r,n.memoizedState)||(ve=!0),n.memoizedState=r,n.baseState=s,n.baseQueue=a,t.lastRenderedState=r}if(e=t.interleaved,e!==null){i=e;do o=i.lane,K.lanes|=o,Gn|=o,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Co(e){var n=ze(),t=n.queue;if(t===null)throw Error(C(311));t.lastRenderedReducer=e;var r=t.dispatch,i=t.pending,o=n.memoizedState;if(i!==null){t.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);Ue(o,n.memoizedState)||(ve=!0),n.memoizedState=o,n.baseQueue===null&&(n.baseState=o),t.lastRenderedState=o}return[o,r]}function sd(){}function ld(e,n){var t=K,r=ze(),i=n(),o=!Ue(r.memoizedState,i);if(o&&(r.memoizedState=i,ve=!0),r=r.queue,fl(cd.bind(null,t,r,e),[e]),r.getSnapshot!==n||o||ie!==null&&ie.memoizedState.tag&1){if(t.flags|=2048,xr(9,ud.bind(null,t,r,i,n),void 0,null),oe===null)throw Error(C(349));Kn&30||ad(t,n,i)}return i}function ad(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=K.updateQueue,n===null?(n={lastEffect:null,stores:null},K.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function ud(e,n,t,r){n.value=t,n.getSnapshot=r,dd(n)&&fd(e)}function cd(e,n,t){return t(function(){dd(n)&&fd(e)})}function dd(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Ue(e,t)}catch{return!0}}function fd(e){var n=sn(e,1);n!==null&&He(n,e,1,-1)}function Qa(e){var n=Qe();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:vr,lastRenderedState:e},n.queue=e,e=e.dispatch=wg.bind(null,K,e),[n.memoizedState,e]}function xr(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=K.updateQueue,n===null?(n={lastEffect:null,stores:null},K.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function pd(){return ze().memoizedState}function ni(e,n,t,r){var i=Qe();K.flags|=e,i.memoizedState=xr(1|n,t,void 0,r===void 0?null:r)}function Fi(e,n,t,r){var i=ze();r=r===void 0?null:r;var o=void 0;if(te!==null){var s=te.memoizedState;if(o=s.destroy,r!==null&&ul(r,s.deps)){i.memoizedState=xr(n,t,o,r);return}}K.flags|=e,i.memoizedState=xr(1|n,t,o,r)}function Ka(e,n){return ni(8390656,8,e,n)}function fl(e,n){return Fi(2048,8,e,n)}function gd(e,n){return Fi(4,2,e,n)}function md(e,n){return Fi(4,4,e,n)}function hd(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function yd(e,n,t){return t=t!=null?t.concat([e]):null,Fi(4,4,hd.bind(null,n,e),t)}function pl(){}function vd(e,n){var t=ze();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&ul(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function xd(e,n){var t=ze();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&ul(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function kd(e,n,t){return Kn&21?(Ue(t,n)||(t=Cc(),K.lanes|=t,Gn|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,ve=!0),e.memoizedState=t)}function kg(e,n){var t=F;F=t!==0&&4>t?t:4,e(!0);var r=So.transition;So.transition={};try{e(!1),n()}finally{F=t,So.transition=r}}function Pd(){return ze().memoizedState}function Pg(e,n,t){var r=_n(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},wd(e))Sd(n,t);else if(t=rd(e,n,t,r),t!==null){var i=ge();He(t,e,r,i),bd(t,n,r)}}function wg(e,n,t){var r=_n(e),i={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(wd(e))Sd(n,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=n.lastRenderedReducer,o!==null))try{var s=n.lastRenderedState,l=o(s,t);if(i.hasEagerState=!0,i.eagerState=l,Ue(l,s)){var a=n.interleaved;a===null?(i.next=i,il(n)):(i.next=a.next,a.next=i),n.interleaved=i;return}}catch{}finally{}t=rd(e,n,i,r),t!==null&&(i=ge(),He(t,e,r,i),bd(t,n,r))}}function wd(e){var n=e.alternate;return e===K||n!==null&&n===K}function Sd(e,n){er=Si=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function bd(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Us(e,t)}}var bi={readContext:Ne,useCallback:ue,useContext:ue,useEffect:ue,useImperativeHandle:ue,useInsertionEffect:ue,useLayoutEffect:ue,useMemo:ue,useReducer:ue,useRef:ue,useState:ue,useDebugValue:ue,useDeferredValue:ue,useTransition:ue,useMutableSource:ue,useSyncExternalStore:ue,useId:ue,unstable_isNewReconciler:!1},Sg={readContext:Ne,useCallback:function(e,n){return Qe().memoizedState=[e,n===void 0?null:n],e},useContext:Ne,useEffect:Ka,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,ni(4194308,4,hd.bind(null,n,e),t)},useLayoutEffect:function(e,n){return ni(4194308,4,e,n)},useInsertionEffect:function(e,n){return ni(4,2,e,n)},useMemo:function(e,n){var t=Qe();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=Qe();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=Pg.bind(null,K,e),[r.memoizedState,e]},useRef:function(e){var n=Qe();return e={current:e},n.memoizedState=e},useState:Qa,useDebugValue:pl,useDeferredValue:function(e){return Qe().memoizedState=e},useTransition:function(){var e=Qa(!1),n=e[0];return e=kg.bind(null,e[1]),Qe().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=K,i=Qe();if(Y){if(t===void 0)throw Error(C(407));t=t()}else{if(t=n(),oe===null)throw Error(C(349));Kn&30||ad(r,n,t)}i.memoizedState=t;var o={value:t,getSnapshot:n};return i.queue=o,Ka(cd.bind(null,r,o,e),[e]),r.flags|=2048,xr(9,ud.bind(null,r,o,t,n),void 0,null),t},useId:function(){var e=Qe(),n=oe.identifierPrefix;if(Y){var t=nn,r=en;t=(r&~(1<<32-We(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=yr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=xg++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},bg={readContext:Ne,useCallback:vd,useContext:Ne,useEffect:fl,useImperativeHandle:yd,useInsertionEffect:gd,useLayoutEffect:md,useMemo:xd,useReducer:bo,useRef:pd,useState:function(){return bo(vr)},useDebugValue:pl,useDeferredValue:function(e){var n=ze();return kd(n,te.memoizedState,e)},useTransition:function(){var e=bo(vr)[0],n=ze().memoizedState;return[e,n]},useMutableSource:sd,useSyncExternalStore:ld,useId:Pd,unstable_isNewReconciler:!1},Cg={readContext:Ne,useCallback:vd,useContext:Ne,useEffect:fl,useImperativeHandle:yd,useInsertionEffect:gd,useLayoutEffect:md,useMemo:xd,useReducer:Co,useRef:pd,useState:function(){return Co(vr)},useDebugValue:pl,useDeferredValue:function(e){var n=ze();return te===null?n.memoizedState=e:kd(n,te.memoizedState,e)},useTransition:function(){var e=Co(vr)[0],n=ze().memoizedState;return[e,n]},useMutableSource:sd,useSyncExternalStore:ld,useId:Pd,unstable_isNewReconciler:!1};function Oe(e,n){if(e&&e.defaultProps){n=G({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function cs(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:G({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Bi={isMounted:function(e){return(e=e._reactInternals)?qn(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=ge(),i=_n(e),o=tn(r,i);o.payload=n,t!=null&&(o.callback=t),n=bn(e,o,i),n!==null&&(He(n,e,i,r),qr(n,e,i))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=ge(),i=_n(e),o=tn(r,i);o.tag=1,o.payload=n,t!=null&&(o.callback=t),n=bn(e,o,i),n!==null&&(He(n,e,i,r),qr(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=ge(),r=_n(e),i=tn(t,r);i.tag=2,n!=null&&(i.callback=n),n=bn(e,i,r),n!==null&&(He(n,e,r,t),qr(n,e,r))}};function Ga(e,n,t,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):n.prototype&&n.prototype.isPureReactComponent?!dr(t,r)||!dr(i,o):!0}function Cd(e,n,t){var r=!1,i=jn,o=n.contextType;return typeof o=="object"&&o!==null?o=Ne(o):(i=ke(n)?Yn:fe.current,r=n.contextTypes,o=(r=r!=null)?wt(e,i):jn),n=new n(t,o),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Bi,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),n}function Ja(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&Bi.enqueueReplaceState(n,n.state,null)}function ds(e,n,t,r){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs={},ol(e);var o=n.contextType;typeof o=="object"&&o!==null?i.context=Ne(o):(o=ke(n)?Yn:fe.current,i.context=wt(e,o)),i.state=e.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(cs(e,n,o,t),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&Bi.enqueueReplaceState(i,i.state,null),Pi(e,t,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function _t(e,n){try{var t="",r=n;do t+=qf(r),r=r.return;while(r);var i=t}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:n,stack:i,digest:null}}function _o(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function fs(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var _g=typeof WeakMap=="function"?WeakMap:Map;function _d(e,n,t){t=tn(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){_i||(_i=!0,ws=r),fs(e,n)},t}function Rd(e,n,t){t=tn(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=n.value;t.payload=function(){return r(i)},t.callback=function(){fs(e,n)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){fs(e,n),typeof r!="function"&&(Cn===null?Cn=new Set([this]):Cn.add(this));var s=n.stack;this.componentDidCatch(n.value,{componentStack:s!==null?s:""})}),t}function Xa(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new _g;var i=new Set;r.set(n,i)}else i=r.get(n),i===void 0&&(i=new Set,r.set(n,i));i.has(t)||(i.add(t),e=Fg.bind(null,e,n,t),n.then(e,e))}function Za(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function qa(e,n,t,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=tn(-1,1),n.tag=2,bn(t,n,1))),t.lanes|=1),e)}var Rg=an.ReactCurrentOwner,ve=!1;function pe(e,n,t,r){n.child=e===null?td(n,null,t,r):bt(n,e.child,t,r)}function eu(e,n,t,r,i){t=t.render;var o=n.ref;return xt(n,i),r=cl(e,n,t,r,o,i),t=dl(),e!==null&&!ve?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,ln(e,n,i)):(Y&&t&&Zs(n),n.flags|=1,pe(e,n,r,i),n.child)}function nu(e,n,t,r,i){if(e===null){var o=t.type;return typeof o=="function"&&!Pl(o)&&o.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=o,Td(e,n,o,r,i)):(e=oi(t.type,null,r,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(t=t.compare,t=t!==null?t:dr,t(s,r)&&e.ref===n.ref)return ln(e,n,i)}return n.flags|=1,e=Rn(o,r),e.ref=n.ref,e.return=n,n.child=e}function Td(e,n,t,r,i){if(e!==null){var o=e.memoizedProps;if(dr(o,r)&&e.ref===n.ref)if(ve=!1,n.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(ve=!0);else return n.lanes=e.lanes,ln(e,n,i)}return ps(e,n,t,r,i)}function Ed(e,n,t){var r=n.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},W(gt,be),be|=t;else{if(!(t&1073741824))return e=o!==null?o.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,W(gt,be),be|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:t,W(gt,be),be|=r}else o!==null?(r=o.baseLanes|t,n.memoizedState=null):r=t,W(gt,be),be|=r;return pe(e,n,i,t),n.child}function jd(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function ps(e,n,t,r,i){var o=ke(t)?Yn:fe.current;return o=wt(n,o),xt(n,i),t=cl(e,n,t,r,o,i),r=dl(),e!==null&&!ve?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,ln(e,n,i)):(Y&&r&&Zs(n),n.flags|=1,pe(e,n,t,i),n.child)}function tu(e,n,t,r,i){if(ke(t)){var o=!0;hi(n)}else o=!1;if(xt(n,i),n.stateNode===null)ti(e,n),Cd(n,t,r),ds(n,t,r,i),r=!0;else if(e===null){var s=n.stateNode,l=n.memoizedProps;s.props=l;var a=s.context,c=t.contextType;typeof c=="object"&&c!==null?c=Ne(c):(c=ke(t)?Yn:fe.current,c=wt(n,c));var f=t.getDerivedStateFromProps,p=typeof f=="function"||typeof s.getSnapshotBeforeUpdate=="function";p||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==r||a!==c)&&Ja(n,s,r,c),pn=!1;var h=n.memoizedState;s.state=h,Pi(n,r,s,i),a=n.memoizedState,l!==r||h!==a||xe.current||pn?(typeof f=="function"&&(cs(n,t,f,r),a=n.memoizedState),(l=pn||Ga(n,t,l,r,h,a,c))?(p||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(n.flags|=4194308)):(typeof s.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=a),s.props=r,s.state=a,s.context=c,r=l):(typeof s.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{s=n.stateNode,id(e,n),l=n.memoizedProps,c=n.type===n.elementType?l:Oe(n.type,l),s.props=c,p=n.pendingProps,h=s.context,a=t.contextType,typeof a=="object"&&a!==null?a=Ne(a):(a=ke(t)?Yn:fe.current,a=wt(n,a));var m=t.getDerivedStateFromProps;(f=typeof m=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==p||h!==a)&&Ja(n,s,r,a),pn=!1,h=n.memoizedState,s.state=h,Pi(n,r,s,i);var v=n.memoizedState;l!==p||h!==v||xe.current||pn?(typeof m=="function"&&(cs(n,t,m,r),v=n.memoizedState),(c=pn||Ga(n,t,c,r,h,v,a)||!1)?(f||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,v,a),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,v,a)),typeof s.componentDidUpdate=="function"&&(n.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(n.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=v),s.props=r,s.state=v,s.context=a,r=c):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(n.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(n.flags|=1024),r=!1)}return gs(e,n,t,r,o,i)}function gs(e,n,t,r,i,o){jd(e,n);var s=(n.flags&128)!==0;if(!r&&!s)return i&&Ba(n,t,!1),ln(e,n,o);r=n.stateNode,Rg.current=n;var l=s&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&s?(n.child=bt(n,e.child,null,o),n.child=bt(n,null,l,o)):pe(e,n,l,o),n.memoizedState=r.state,i&&Ba(n,t,!0),n.child}function $d(e){var n=e.stateNode;n.pendingContext?Fa(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Fa(e,n.context,!1),sl(e,n.containerInfo)}function ru(e,n,t,r,i){return St(),el(i),n.flags|=256,pe(e,n,t,r),n.child}var ms={dehydrated:null,treeContext:null,retryLane:0};function hs(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ad(e,n,t){var r=n.pendingProps,i=Q.current,o=!1,s=(n.flags&128)!==0,l;if((l=s)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),W(Q,i&1),e===null)return as(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(s=r.children,e=r.fallback,o?(r=n.mode,o=n.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Ui(s,r,0,null),e=Vn(e,r,t,null),o.return=n,e.return=n,o.sibling=e,n.child=o,n.child.memoizedState=hs(t),n.memoizedState=ms,e):gl(n,s));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return Tg(e,n,s,r,l,i,t);if(o){o=r.fallback,s=n.mode,i=e.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(s&1)&&n.child!==i?(r=n.child,r.childLanes=0,r.pendingProps=a,n.deletions=null):(r=Rn(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=Rn(l,o):(o=Vn(o,s,t,null),o.flags|=2),o.return=n,r.return=n,r.sibling=o,n.child=r,r=o,o=n.child,s=e.child.memoizedState,s=s===null?hs(t):{baseLanes:s.baseLanes|t,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~t,n.memoizedState=ms,r}return o=e.child,e=o.sibling,r=Rn(o,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function gl(e,n){return n=Ui({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Wr(e,n,t,r){return r!==null&&el(r),bt(n,e.child,null,t),e=gl(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Tg(e,n,t,r,i,o,s){if(t)return n.flags&256?(n.flags&=-257,r=_o(Error(C(422))),Wr(e,n,s,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(o=r.fallback,i=n.mode,r=Ui({mode:"visible",children:r.children},i,0,null),o=Vn(o,i,s,null),o.flags|=2,r.return=n,o.return=n,r.sibling=o,n.child=r,n.mode&1&&bt(n,e.child,null,s),n.child.memoizedState=hs(s),n.memoizedState=ms,o);if(!(n.mode&1))return Wr(e,n,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(C(419)),r=_o(o,r,void 0),Wr(e,n,s,r)}if(l=(s&e.childLanes)!==0,ve||l){if(r=oe,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,sn(e,i),He(r,e,i,-1))}return kl(),r=_o(Error(C(421))),Wr(e,n,s,r)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=Bg.bind(null,e),i._reactRetry=n,null):(e=o.treeContext,Ce=Sn(i.nextSibling),_e=n,Y=!0,Be=null,e!==null&&($e[Ae++]=en,$e[Ae++]=nn,$e[Ae++]=Qn,en=e.id,nn=e.overflow,Qn=n),n=gl(n,r.children),n.flags|=4096,n)}function iu(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),us(e.return,n,t)}function Ro(e,n,t,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:i}:(o.isBackwards=n,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=t,o.tailMode=i)}function Ld(e,n,t){var r=n.pendingProps,i=r.revealOrder,o=r.tail;if(pe(e,n,r.children,t),r=Q.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&iu(e,t,n);else if(e.tag===19)iu(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(W(Q,r),!(n.mode&1))n.memoizedState=null;else switch(i){case"forwards":for(t=n.child,i=null;t!==null;)e=t.alternate,e!==null&&wi(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),Ro(n,!1,i,t,o);break;case"backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&wi(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}Ro(n,!0,t,null,o);break;case"together":Ro(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function ti(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function ln(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Gn|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(C(153));if(n.child!==null){for(e=n.child,t=Rn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Rn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Eg(e,n,t){switch(n.tag){case 3:$d(n),St();break;case 5:od(n);break;case 1:ke(n.type)&&hi(n);break;case 4:sl(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,i=n.memoizedProps.value;W(xi,r._currentValue),r._currentValue=i;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(W(Q,Q.current&1),n.flags|=128,null):t&n.child.childLanes?Ad(e,n,t):(W(Q,Q.current&1),e=ln(e,n,t),e!==null?e.sibling:null);W(Q,Q.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return Ld(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),W(Q,Q.current),r)break;return null;case 22:case 23:return n.lanes=0,Ed(e,n,t)}return ln(e,n,t)}var Md,ys,Nd,zd;Md=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};ys=function(){};Nd=function(e,n,t,r){var i=e.memoizedProps;if(i!==r){e=n.stateNode,Hn(Je.current);var o=null;switch(t){case"input":i=Oo(e,i),r=Oo(e,r),o=[];break;case"select":i=G({},i,{value:void 0}),r=G({},r,{value:void 0}),o=[];break;case"textarea":i=Wo(e,i),r=Wo(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=gi)}Uo(t,r);var s;t=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(s in l)l.hasOwnProperty(s)&&(t||(t={}),t[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ir.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var a=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&a!==l&&(a!=null||l!=null))if(c==="style")if(l){for(s in l)!l.hasOwnProperty(s)||a&&a.hasOwnProperty(s)||(t||(t={}),t[s]="");for(s in a)a.hasOwnProperty(s)&&l[s]!==a[s]&&(t||(t={}),t[s]=a[s])}else t||(o||(o=[]),o.push(c,t)),t=a;else c==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(o=o||[]).push(c,a)):c==="children"?typeof a!="string"&&typeof a!="number"||(o=o||[]).push(c,""+a):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ir.hasOwnProperty(c)?(a!=null&&c==="onScroll"&&H("scroll",e),o||l===a||(o=[])):(o=o||[]).push(c,a))}t&&(o=o||[]).push("style",t);var c=o;(n.updateQueue=c)&&(n.flags|=4)}};zd=function(e,n,t,r){t!==r&&(n.flags|=4)};function Bt(e,n){if(!Y)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ce(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function jg(e,n,t){var r=n.pendingProps;switch(qs(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ce(n),null;case 1:return ke(n.type)&&mi(),ce(n),null;case 3:return r=n.stateNode,Ct(),U(xe),U(fe),al(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Fr(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Be!==null&&(Cs(Be),Be=null))),ys(e,n),ce(n),null;case 5:ll(n);var i=Hn(hr.current);if(t=n.type,e!==null&&n.stateNode!=null)Nd(e,n,t,r,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(C(166));return ce(n),null}if(e=Hn(Je.current),Fr(n)){r=n.stateNode,t=n.type;var o=n.memoizedProps;switch(r[Ke]=n,r[gr]=o,e=(n.mode&1)!==0,t){case"dialog":H("cancel",r),H("close",r);break;case"iframe":case"object":case"embed":H("load",r);break;case"video":case"audio":for(i=0;i<Qt.length;i++)H(Qt[i],r);break;case"source":H("error",r);break;case"img":case"image":case"link":H("error",r),H("load",r);break;case"details":H("toggle",r);break;case"input":pa(r,o),H("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},H("invalid",r);break;case"textarea":ma(r,o),H("invalid",r)}Uo(t,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&Or(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&Or(r.textContent,l,e),i=["children",""+l]):ir.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&H("scroll",r)}switch(t){case"input":$r(r),ga(r,o,!0);break;case"textarea":$r(r),ha(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=gi)}r=i,n.updateQueue=r,r!==null&&(n.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=cc(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(t,{is:r.is}):(e=s.createElement(t),t==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,t),e[Ke]=n,e[gr]=r,Md(e,n,!1,!1),n.stateNode=e;e:{switch(s=Vo(t,r),t){case"dialog":H("cancel",e),H("close",e),i=r;break;case"iframe":case"object":case"embed":H("load",e),i=r;break;case"video":case"audio":for(i=0;i<Qt.length;i++)H(Qt[i],e);i=r;break;case"source":H("error",e),i=r;break;case"img":case"image":case"link":H("error",e),H("load",e),i=r;break;case"details":H("toggle",e),i=r;break;case"input":pa(e,r),i=Oo(e,r),H("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=G({},r,{value:void 0}),H("invalid",e);break;case"textarea":ma(e,r),i=Wo(e,r),H("invalid",e);break;default:i=r}Uo(t,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var a=l[o];o==="style"?pc(e,a):o==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&dc(e,a)):o==="children"?typeof a=="string"?(t!=="textarea"||a!=="")&&or(e,a):typeof a=="number"&&or(e,""+a):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(ir.hasOwnProperty(o)?a!=null&&o==="onScroll"&&H("scroll",e):a!=null&&Is(e,o,a,s))}switch(t){case"input":$r(e),ga(e,r,!1);break;case"textarea":$r(e),ha(e);break;case"option":r.value!=null&&e.setAttribute("value",""+En(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?mt(e,!!r.multiple,o,!1):r.defaultValue!=null&&mt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=gi)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return ce(n),null;case 6:if(e&&n.stateNode!=null)zd(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(C(166));if(t=Hn(hr.current),Hn(Je.current),Fr(n)){if(r=n.stateNode,t=n.memoizedProps,r[Ke]=n,(o=r.nodeValue!==t)&&(e=_e,e!==null))switch(e.tag){case 3:Or(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Or(r.nodeValue,t,(e.mode&1)!==0)}o&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[Ke]=n,n.stateNode=r}return ce(n),null;case 13:if(U(Q),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Y&&Ce!==null&&n.mode&1&&!(n.flags&128))ed(),St(),n.flags|=98560,o=!1;else if(o=Fr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(C(318));if(o=n.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(C(317));o[Ke]=n}else St(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;ce(n),o=!1}else Be!==null&&(Cs(Be),Be=null),o=!0;if(!o)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||Q.current&1?re===0&&(re=3):kl())),n.updateQueue!==null&&(n.flags|=4),ce(n),null);case 4:return Ct(),ys(e,n),e===null&&fr(n.stateNode.containerInfo),ce(n),null;case 10:return rl(n.type._context),ce(n),null;case 17:return ke(n.type)&&mi(),ce(n),null;case 19:if(U(Q),o=n.memoizedState,o===null)return ce(n),null;if(r=(n.flags&128)!==0,s=o.rendering,s===null)if(r)Bt(o,!1);else{if(re!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(s=wi(e),s!==null){for(n.flags|=128,Bt(o,!1),r=s.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)o=t,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return W(Q,Q.current&1|2),n.child}e=e.sibling}o.tail!==null&&Z()>Rt&&(n.flags|=128,r=!0,Bt(o,!1),n.lanes=4194304)}else{if(!r)if(e=wi(s),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Bt(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!Y)return ce(n),null}else 2*Z()-o.renderingStartTime>Rt&&t!==1073741824&&(n.flags|=128,r=!0,Bt(o,!1),n.lanes=4194304);o.isBackwards?(s.sibling=n.child,n.child=s):(t=o.last,t!==null?t.sibling=s:n.child=s,o.last=s)}return o.tail!==null?(n=o.tail,o.rendering=n,o.tail=n.sibling,o.renderingStartTime=Z(),n.sibling=null,t=Q.current,W(Q,r?t&1|2:t&1),n):(ce(n),null);case 22:case 23:return xl(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?be&1073741824&&(ce(n),n.subtreeFlags&6&&(n.flags|=8192)):ce(n),null;case 24:return null;case 25:return null}throw Error(C(156,n.tag))}function $g(e,n){switch(qs(n),n.tag){case 1:return ke(n.type)&&mi(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Ct(),U(xe),U(fe),al(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return ll(n),null;case 13:if(U(Q),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(C(340));St()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return U(Q),null;case 4:return Ct(),null;case 10:return rl(n.type._context),null;case 22:case 23:return xl(),null;case 24:return null;default:return null}}var Hr=!1,de=!1,Ag=typeof WeakSet=="function"?WeakSet:Set,E=null;function pt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){J(e,n,r)}else t.current=null}function vs(e,n,t){try{t()}catch(r){J(e,n,r)}}var ou=!1;function Lg(e,n){if(ns=di,e=Bc(),Xs(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{t.nodeType,o.nodeType}catch{t=null;break e}var s=0,l=-1,a=-1,c=0,f=0,p=e,h=null;n:for(;;){for(var m;p!==t||i!==0&&p.nodeType!==3||(l=s+i),p!==o||r!==0&&p.nodeType!==3||(a=s+r),p.nodeType===3&&(s+=p.nodeValue.length),(m=p.firstChild)!==null;)h=p,p=m;for(;;){if(p===e)break n;if(h===t&&++c===i&&(l=s),h===o&&++f===r&&(a=s),(m=p.nextSibling)!==null)break;p=h,h=p.parentNode}p=m}t=l===-1||a===-1?null:{start:l,end:a}}else t=null}t=t||{start:0,end:0}}else t=null;for(ts={focusedElem:e,selectionRange:t},di=!1,E=n;E!==null;)if(n=E,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,E=e;else for(;E!==null;){n=E;try{var v=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var k=v.memoizedProps,w=v.memoizedState,g=n.stateNode,d=g.getSnapshotBeforeUpdate(n.elementType===n.type?k:Oe(n.type,k),w);g.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var y=n.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(P){J(n,n.return,P)}if(e=n.sibling,e!==null){e.return=n.return,E=e;break}E=n.return}return v=ou,ou=!1,v}function nr(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&vs(n,t,o)}i=i.next}while(i!==r)}}function Wi(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function xs(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Dd(e){var n=e.alternate;n!==null&&(e.alternate=null,Dd(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Ke],delete n[gr],delete n[os],delete n[mg],delete n[hg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Id(e){return e.tag===5||e.tag===3||e.tag===4}function su(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Id(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ks(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=gi));else if(r!==4&&(e=e.child,e!==null))for(ks(e,n,t),e=e.sibling;e!==null;)ks(e,n,t),e=e.sibling}function Ps(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ps(e,n,t),e=e.sibling;e!==null;)Ps(e,n,t),e=e.sibling}var se=null,Fe=!1;function dn(e,n,t){for(t=t.child;t!==null;)Od(e,n,t),t=t.sibling}function Od(e,n,t){if(Ge&&typeof Ge.onCommitFiberUnmount=="function")try{Ge.onCommitFiberUnmount(Mi,t)}catch{}switch(t.tag){case 5:de||pt(t,n);case 6:var r=se,i=Fe;se=null,dn(e,n,t),se=r,Fe=i,se!==null&&(Fe?(e=se,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):se.removeChild(t.stateNode));break;case 18:se!==null&&(Fe?(e=se,t=t.stateNode,e.nodeType===8?ko(e.parentNode,t):e.nodeType===1&&ko(e,t),ur(e)):ko(se,t.stateNode));break;case 4:r=se,i=Fe,se=t.stateNode.containerInfo,Fe=!0,dn(e,n,t),se=r,Fe=i;break;case 0:case 11:case 14:case 15:if(!de&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&vs(t,n,s),i=i.next}while(i!==r)}dn(e,n,t);break;case 1:if(!de&&(pt(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(l){J(t,n,l)}dn(e,n,t);break;case 21:dn(e,n,t);break;case 22:t.mode&1?(de=(r=de)||t.memoizedState!==null,dn(e,n,t),de=r):dn(e,n,t);break;default:dn(e,n,t)}}function lu(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Ag),n.forEach(function(r){var i=Wg.bind(null,e,r);t.has(r)||(t.add(r),r.then(i,i))})}}function Ie(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var i=t[r];try{var o=e,s=n,l=s;e:for(;l!==null;){switch(l.tag){case 5:se=l.stateNode,Fe=!1;break e;case 3:se=l.stateNode.containerInfo,Fe=!0;break e;case 4:se=l.stateNode.containerInfo,Fe=!0;break e}l=l.return}if(se===null)throw Error(C(160));Od(o,s,i),se=null,Fe=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(c){J(i,n,c)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Fd(n,e),n=n.sibling}function Fd(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ie(n,e),Ye(e),r&4){try{nr(3,e,e.return),Wi(3,e)}catch(k){J(e,e.return,k)}try{nr(5,e,e.return)}catch(k){J(e,e.return,k)}}break;case 1:Ie(n,e),Ye(e),r&512&&t!==null&&pt(t,t.return);break;case 5:if(Ie(n,e),Ye(e),r&512&&t!==null&&pt(t,t.return),e.flags&32){var i=e.stateNode;try{or(i,"")}catch(k){J(e,e.return,k)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=t!==null?t.memoizedProps:o,l=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&ac(i,o),Vo(l,s);var c=Vo(l,o);for(s=0;s<a.length;s+=2){var f=a[s],p=a[s+1];f==="style"?pc(i,p):f==="dangerouslySetInnerHTML"?dc(i,p):f==="children"?or(i,p):Is(i,f,p,c)}switch(l){case"input":Fo(i,o);break;case"textarea":uc(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var m=o.value;m!=null?mt(i,!!o.multiple,m,!1):h!==!!o.multiple&&(o.defaultValue!=null?mt(i,!!o.multiple,o.defaultValue,!0):mt(i,!!o.multiple,o.multiple?[]:"",!1))}i[gr]=o}catch(k){J(e,e.return,k)}}break;case 6:if(Ie(n,e),Ye(e),r&4){if(e.stateNode===null)throw Error(C(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(k){J(e,e.return,k)}}break;case 3:if(Ie(n,e),Ye(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{ur(n.containerInfo)}catch(k){J(e,e.return,k)}break;case 4:Ie(n,e),Ye(e);break;case 13:Ie(n,e),Ye(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(yl=Z())),r&4&&lu(e);break;case 22:if(f=t!==null&&t.memoizedState!==null,e.mode&1?(de=(c=de)||f,Ie(n,e),de=c):Ie(n,e),Ye(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!f&&e.mode&1)for(E=e,f=e.child;f!==null;){for(p=E=f;E!==null;){switch(h=E,m=h.child,h.tag){case 0:case 11:case 14:case 15:nr(4,h,h.return);break;case 1:pt(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){r=h,t=h.return;try{n=r,v.props=n.memoizedProps,v.state=n.memoizedState,v.componentWillUnmount()}catch(k){J(r,t,k)}}break;case 5:pt(h,h.return);break;case 22:if(h.memoizedState!==null){uu(p);continue}}m!==null?(m.return=h,E=m):uu(p)}f=f.sibling}e:for(f=null,p=e;;){if(p.tag===5){if(f===null){f=p;try{i=p.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=p.stateNode,a=p.memoizedProps.style,s=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=fc("display",s))}catch(k){J(e,e.return,k)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(k){J(e,e.return,k)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Ie(n,e),Ye(e),r&4&&lu(e);break;case 21:break;default:Ie(n,e),Ye(e)}}function Ye(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Id(t)){var r=t;break e}t=t.return}throw Error(C(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(or(i,""),r.flags&=-33);var o=su(e);Ps(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,l=su(e);ks(e,l,s);break;default:throw Error(C(161))}}catch(a){J(e,e.return,a)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Mg(e,n,t){E=e,Bd(e)}function Bd(e,n,t){for(var r=(e.mode&1)!==0;E!==null;){var i=E,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Hr;if(!s){var l=i.alternate,a=l!==null&&l.memoizedState!==null||de;l=Hr;var c=de;if(Hr=s,(de=a)&&!c)for(E=i;E!==null;)s=E,a=s.child,s.tag===22&&s.memoizedState!==null?cu(i):a!==null?(a.return=s,E=a):cu(i);for(;o!==null;)E=o,Bd(o),o=o.sibling;E=i,Hr=l,de=c}au(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,E=o):au(e)}}function au(e){for(;E!==null;){var n=E;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:de||Wi(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!de)if(t===null)r.componentDidMount();else{var i=n.elementType===n.type?t.memoizedProps:Oe(n.type,t.memoizedProps);r.componentDidUpdate(i,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=n.updateQueue;o!==null&&Ya(n,o,r);break;case 3:var s=n.updateQueue;if(s!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Ya(n,s,t)}break;case 5:var l=n.stateNode;if(t===null&&n.flags&4){t=l;var a=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&t.focus();break;case"img":a.src&&(t.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var c=n.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&ur(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}de||n.flags&512&&xs(n)}catch(h){J(n,n.return,h)}}if(n===e){E=null;break}if(t=n.sibling,t!==null){t.return=n.return,E=t;break}E=n.return}}function uu(e){for(;E!==null;){var n=E;if(n===e){E=null;break}var t=n.sibling;if(t!==null){t.return=n.return,E=t;break}E=n.return}}function cu(e){for(;E!==null;){var n=E;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Wi(4,n)}catch(a){J(n,t,a)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var i=n.return;try{r.componentDidMount()}catch(a){J(n,i,a)}}var o=n.return;try{xs(n)}catch(a){J(n,o,a)}break;case 5:var s=n.return;try{xs(n)}catch(a){J(n,s,a)}}}catch(a){J(n,n.return,a)}if(n===e){E=null;break}var l=n.sibling;if(l!==null){l.return=n.return,E=l;break}E=n.return}}var Ng=Math.ceil,Ci=an.ReactCurrentDispatcher,ml=an.ReactCurrentOwner,Me=an.ReactCurrentBatchConfig,z=0,oe=null,ee=null,le=0,be=0,gt=An(0),re=0,kr=null,Gn=0,Hi=0,hl=0,tr=null,ye=null,yl=0,Rt=1/0,Ze=null,_i=!1,ws=null,Cn=null,Ur=!1,vn=null,Ri=0,rr=0,Ss=null,ri=-1,ii=0;function ge(){return z&6?Z():ri!==-1?ri:ri=Z()}function _n(e){return e.mode&1?z&2&&le!==0?le&-le:vg.transition!==null?(ii===0&&(ii=Cc()),ii):(e=F,e!==0||(e=window.event,e=e===void 0?16:Ac(e.type)),e):1}function He(e,n,t,r){if(50<rr)throw rr=0,Ss=null,Error(C(185));br(e,t,r),(!(z&2)||e!==oe)&&(e===oe&&(!(z&2)&&(Hi|=t),re===4&&hn(e,le)),Pe(e,r),t===1&&z===0&&!(n.mode&1)&&(Rt=Z()+500,Oi&&Ln()))}function Pe(e,n){var t=e.callbackNode;vp(e,n);var r=ci(e,e===oe?le:0);if(r===0)t!==null&&xa(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&xa(t),n===1)e.tag===0?yg(du.bind(null,e)):Xc(du.bind(null,e)),pg(function(){!(z&6)&&Ln()}),t=null;else{switch(_c(r)){case 1:t=Hs;break;case 4:t=Sc;break;case 16:t=ui;break;case 536870912:t=bc;break;default:t=ui}t=Gd(t,Wd.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Wd(e,n){if(ri=-1,ii=0,z&6)throw Error(C(327));var t=e.callbackNode;if(kt()&&e.callbackNode!==t)return null;var r=ci(e,e===oe?le:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=Ti(e,r);else{n=r;var i=z;z|=2;var o=Ud();(oe!==e||le!==n)&&(Ze=null,Rt=Z()+500,Un(e,n));do try{Ig();break}catch(l){Hd(e,l)}while(!0);tl(),Ci.current=o,z=i,ee!==null?n=0:(oe=null,le=0,n=re)}if(n!==0){if(n===2&&(i=Jo(e),i!==0&&(r=i,n=bs(e,i))),n===1)throw t=kr,Un(e,0),hn(e,r),Pe(e,Z()),t;if(n===6)hn(e,r);else{if(i=e.current.alternate,!(r&30)&&!zg(i)&&(n=Ti(e,r),n===2&&(o=Jo(e),o!==0&&(r=o,n=bs(e,o))),n===1))throw t=kr,Un(e,0),hn(e,r),Pe(e,Z()),t;switch(e.finishedWork=i,e.finishedLanes=r,n){case 0:case 1:throw Error(C(345));case 2:Fn(e,ye,Ze);break;case 3:if(hn(e,r),(r&130023424)===r&&(n=yl+500-Z(),10<n)){if(ci(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ge(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=is(Fn.bind(null,e,ye,Ze),n);break}Fn(e,ye,Ze);break;case 4:if(hn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,i=-1;0<r;){var s=31-We(r);o=1<<s,s=n[s],s>i&&(i=s),r&=~o}if(r=i,r=Z()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Ng(r/1960))-r,10<r){e.timeoutHandle=is(Fn.bind(null,e,ye,Ze),r);break}Fn(e,ye,Ze);break;case 5:Fn(e,ye,Ze);break;default:throw Error(C(329))}}}return Pe(e,Z()),e.callbackNode===t?Wd.bind(null,e):null}function bs(e,n){var t=tr;return e.current.memoizedState.isDehydrated&&(Un(e,n).flags|=256),e=Ti(e,n),e!==2&&(n=ye,ye=t,n!==null&&Cs(n)),e}function Cs(e){ye===null?ye=e:ye.push.apply(ye,e)}function zg(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var i=t[r],o=i.getSnapshot;i=i.value;try{if(!Ue(o(),i))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function hn(e,n){for(n&=~hl,n&=~Hi,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-We(n),r=1<<t;e[t]=-1,n&=~r}}function du(e){if(z&6)throw Error(C(327));kt();var n=ci(e,0);if(!(n&1))return Pe(e,Z()),null;var t=Ti(e,n);if(e.tag!==0&&t===2){var r=Jo(e);r!==0&&(n=r,t=bs(e,r))}if(t===1)throw t=kr,Un(e,0),hn(e,n),Pe(e,Z()),t;if(t===6)throw Error(C(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Fn(e,ye,Ze),Pe(e,Z()),null}function vl(e,n){var t=z;z|=1;try{return e(n)}finally{z=t,z===0&&(Rt=Z()+500,Oi&&Ln())}}function Jn(e){vn!==null&&vn.tag===0&&!(z&6)&&kt();var n=z;z|=1;var t=Me.transition,r=F;try{if(Me.transition=null,F=1,e)return e()}finally{F=r,Me.transition=t,z=n,!(z&6)&&Ln()}}function xl(){be=gt.current,U(gt)}function Un(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,fg(t)),ee!==null)for(t=ee.return;t!==null;){var r=t;switch(qs(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&mi();break;case 3:Ct(),U(xe),U(fe),al();break;case 5:ll(r);break;case 4:Ct();break;case 13:U(Q);break;case 19:U(Q);break;case 10:rl(r.type._context);break;case 22:case 23:xl()}t=t.return}if(oe=e,ee=e=Rn(e.current,null),le=be=n,re=0,kr=null,hl=Hi=Gn=0,ye=tr=null,Wn!==null){for(n=0;n<Wn.length;n++)if(t=Wn[n],r=t.interleaved,r!==null){t.interleaved=null;var i=r.next,o=t.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}t.pending=r}Wn=null}return e}function Hd(e,n){do{var t=ee;try{if(tl(),ei.current=bi,Si){for(var r=K.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Si=!1}if(Kn=0,ie=te=K=null,er=!1,yr=0,ml.current=null,t===null||t.return===null){re=1,kr=n,ee=null;break}e:{var o=e,s=t.return,l=t,a=n;if(n=le,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var c=a,f=l,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var m=Za(s);if(m!==null){m.flags&=-257,qa(m,s,l,o,n),m.mode&1&&Xa(o,c,n),n=m,a=c;var v=n.updateQueue;if(v===null){var k=new Set;k.add(a),n.updateQueue=k}else v.add(a);break e}else{if(!(n&1)){Xa(o,c,n),kl();break e}a=Error(C(426))}}else if(Y&&l.mode&1){var w=Za(s);if(w!==null){!(w.flags&65536)&&(w.flags|=256),qa(w,s,l,o,n),el(_t(a,l));break e}}o=a=_t(a,l),re!==4&&(re=2),tr===null?tr=[o]:tr.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,n&=-n,o.lanes|=n;var g=_d(o,a,n);Va(o,g);break e;case 1:l=a;var d=o.type,y=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Cn===null||!Cn.has(y)))){o.flags|=65536,n&=-n,o.lanes|=n;var P=Rd(o,l,n);Va(o,P);break e}}o=o.return}while(o!==null)}Yd(t)}catch(S){n=S,ee===t&&t!==null&&(ee=t=t.return);continue}break}while(!0)}function Ud(){var e=Ci.current;return Ci.current=bi,e===null?bi:e}function kl(){(re===0||re===3||re===2)&&(re=4),oe===null||!(Gn&268435455)&&!(Hi&268435455)||hn(oe,le)}function Ti(e,n){var t=z;z|=2;var r=Ud();(oe!==e||le!==n)&&(Ze=null,Un(e,n));do try{Dg();break}catch(i){Hd(e,i)}while(!0);if(tl(),z=t,Ci.current=r,ee!==null)throw Error(C(261));return oe=null,le=0,re}function Dg(){for(;ee!==null;)Vd(ee)}function Ig(){for(;ee!==null&&!up();)Vd(ee)}function Vd(e){var n=Kd(e.alternate,e,be);e.memoizedProps=e.pendingProps,n===null?Yd(e):ee=n,ml.current=null}function Yd(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=$g(t,n),t!==null){t.flags&=32767,ee=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{re=6,ee=null;return}}else if(t=jg(t,n,be),t!==null){ee=t;return}if(n=n.sibling,n!==null){ee=n;return}ee=n=e}while(n!==null);re===0&&(re=5)}function Fn(e,n,t){var r=F,i=Me.transition;try{Me.transition=null,F=1,Og(e,n,t,r)}finally{Me.transition=i,F=r}return null}function Og(e,n,t,r){do kt();while(vn!==null);if(z&6)throw Error(C(327));t=e.finishedWork;var i=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(C(177));e.callbackNode=null,e.callbackPriority=0;var o=t.lanes|t.childLanes;if(xp(e,o),e===oe&&(ee=oe=null,le=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Ur||(Ur=!0,Gd(ui,function(){return kt(),null})),o=(t.flags&15990)!==0,t.subtreeFlags&15990||o){o=Me.transition,Me.transition=null;var s=F;F=1;var l=z;z|=4,ml.current=null,Lg(e,t),Fd(t,e),og(ts),di=!!ns,ts=ns=null,e.current=t,Mg(t),cp(),z=l,F=s,Me.transition=o}else e.current=t;if(Ur&&(Ur=!1,vn=e,Ri=i),o=e.pendingLanes,o===0&&(Cn=null),pp(t.stateNode),Pe(e,Z()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)i=n[t],r(i.value,{componentStack:i.stack,digest:i.digest});if(_i)throw _i=!1,e=ws,ws=null,e;return Ri&1&&e.tag!==0&&kt(),o=e.pendingLanes,o&1?e===Ss?rr++:(rr=0,Ss=e):rr=0,Ln(),null}function kt(){if(vn!==null){var e=_c(Ri),n=Me.transition,t=F;try{if(Me.transition=null,F=16>e?16:e,vn===null)var r=!1;else{if(e=vn,vn=null,Ri=0,z&6)throw Error(C(331));var i=z;for(z|=4,E=e.current;E!==null;){var o=E,s=o.child;if(E.flags&16){var l=o.deletions;if(l!==null){for(var a=0;a<l.length;a++){var c=l[a];for(E=c;E!==null;){var f=E;switch(f.tag){case 0:case 11:case 15:nr(8,f,o)}var p=f.child;if(p!==null)p.return=f,E=p;else for(;E!==null;){f=E;var h=f.sibling,m=f.return;if(Dd(f),f===c){E=null;break}if(h!==null){h.return=m,E=h;break}E=m}}}var v=o.alternate;if(v!==null){var k=v.child;if(k!==null){v.child=null;do{var w=k.sibling;k.sibling=null,k=w}while(k!==null)}}E=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,E=s;else e:for(;E!==null;){if(o=E,o.flags&2048)switch(o.tag){case 0:case 11:case 15:nr(9,o,o.return)}var g=o.sibling;if(g!==null){g.return=o.return,E=g;break e}E=o.return}}var d=e.current;for(E=d;E!==null;){s=E;var y=s.child;if(s.subtreeFlags&2064&&y!==null)y.return=s,E=y;else e:for(s=d;E!==null;){if(l=E,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Wi(9,l)}}catch(S){J(l,l.return,S)}if(l===s){E=null;break e}var P=l.sibling;if(P!==null){P.return=l.return,E=P;break e}E=l.return}}if(z=i,Ln(),Ge&&typeof Ge.onPostCommitFiberRoot=="function")try{Ge.onPostCommitFiberRoot(Mi,e)}catch{}r=!0}return r}finally{F=t,Me.transition=n}}return!1}function fu(e,n,t){n=_t(t,n),n=_d(e,n,1),e=bn(e,n,1),n=ge(),e!==null&&(br(e,1,n),Pe(e,n))}function J(e,n,t){if(e.tag===3)fu(e,e,t);else for(;n!==null;){if(n.tag===3){fu(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Cn===null||!Cn.has(r))){e=_t(t,e),e=Rd(n,e,1),n=bn(n,e,1),e=ge(),n!==null&&(br(n,1,e),Pe(n,e));break}}n=n.return}}function Fg(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=ge(),e.pingedLanes|=e.suspendedLanes&t,oe===e&&(le&t)===t&&(re===4||re===3&&(le&130023424)===le&&500>Z()-yl?Un(e,0):hl|=t),Pe(e,n)}function Qd(e,n){n===0&&(e.mode&1?(n=Mr,Mr<<=1,!(Mr&130023424)&&(Mr=4194304)):n=1);var t=ge();e=sn(e,n),e!==null&&(br(e,n,t),Pe(e,t))}function Bg(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Qd(e,t)}function Wg(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(n),Qd(e,t)}var Kd;Kd=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||xe.current)ve=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return ve=!1,Eg(e,n,t);ve=!!(e.flags&131072)}else ve=!1,Y&&n.flags&1048576&&Zc(n,vi,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;ti(e,n),e=n.pendingProps;var i=wt(n,fe.current);xt(n,t),i=cl(null,n,r,e,i,t);var o=dl();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,ke(r)?(o=!0,hi(n)):o=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ol(n),i.updater=Bi,n.stateNode=i,i._reactInternals=n,ds(n,r,e,t),n=gs(null,n,r,!0,o,t)):(n.tag=0,Y&&o&&Zs(n),pe(null,n,i,t),n=n.child),n;case 16:r=n.elementType;e:{switch(ti(e,n),e=n.pendingProps,i=r._init,r=i(r._payload),n.type=r,i=n.tag=Ug(r),e=Oe(r,e),i){case 0:n=ps(null,n,r,e,t);break e;case 1:n=tu(null,n,r,e,t);break e;case 11:n=eu(null,n,r,e,t);break e;case 14:n=nu(null,n,r,Oe(r.type,e),t);break e}throw Error(C(306,r,""))}return n;case 0:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Oe(r,i),ps(e,n,r,i,t);case 1:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Oe(r,i),tu(e,n,r,i,t);case 3:e:{if($d(n),e===null)throw Error(C(387));r=n.pendingProps,o=n.memoizedState,i=o.element,id(e,n),Pi(n,r,null,t);var s=n.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},n.updateQueue.baseState=o,n.memoizedState=o,n.flags&256){i=_t(Error(C(423)),n),n=ru(e,n,r,t,i);break e}else if(r!==i){i=_t(Error(C(424)),n),n=ru(e,n,r,t,i);break e}else for(Ce=Sn(n.stateNode.containerInfo.firstChild),_e=n,Y=!0,Be=null,t=td(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(St(),r===i){n=ln(e,n,t);break e}pe(e,n,r,t)}n=n.child}return n;case 5:return od(n),e===null&&as(n),r=n.type,i=n.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,rs(r,i)?s=null:o!==null&&rs(r,o)&&(n.flags|=32),jd(e,n),pe(e,n,s,t),n.child;case 6:return e===null&&as(n),null;case 13:return Ad(e,n,t);case 4:return sl(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=bt(n,null,r,t):pe(e,n,r,t),n.child;case 11:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Oe(r,i),eu(e,n,r,i,t);case 7:return pe(e,n,n.pendingProps,t),n.child;case 8:return pe(e,n,n.pendingProps.children,t),n.child;case 12:return pe(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,i=n.pendingProps,o=n.memoizedProps,s=i.value,W(xi,r._currentValue),r._currentValue=s,o!==null)if(Ue(o.value,s)){if(o.children===i.children&&!xe.current){n=ln(e,n,t);break e}}else for(o=n.child,o!==null&&(o.return=n);o!==null;){var l=o.dependencies;if(l!==null){s=o.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(o.tag===1){a=tn(-1,t&-t),a.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?a.next=a:(a.next=f.next,f.next=a),c.pending=a}}o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),us(o.return,t,n),l.lanes|=t;break}a=a.next}}else if(o.tag===10)s=o.type===n.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(C(341));s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),us(s,t,n),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===n){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}pe(e,n,i.children,t),n=n.child}return n;case 9:return i=n.type,r=n.pendingProps.children,xt(n,t),i=Ne(i),r=r(i),n.flags|=1,pe(e,n,r,t),n.child;case 14:return r=n.type,i=Oe(r,n.pendingProps),i=Oe(r.type,i),nu(e,n,r,i,t);case 15:return Td(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Oe(r,i),ti(e,n),n.tag=1,ke(r)?(e=!0,hi(n)):e=!1,xt(n,t),Cd(n,r,i),ds(n,r,i,t),gs(null,n,r,!0,e,t);case 19:return Ld(e,n,t);case 22:return Ed(e,n,t)}throw Error(C(156,n.tag))};function Gd(e,n){return wc(e,n)}function Hg(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Le(e,n,t,r){return new Hg(e,n,t,r)}function Pl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ug(e){if(typeof e=="function")return Pl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Fs)return 11;if(e===Bs)return 14}return 2}function Rn(e,n){var t=e.alternate;return t===null?(t=Le(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function oi(e,n,t,r,i,o){var s=2;if(r=e,typeof e=="function")Pl(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case it:return Vn(t.children,i,o,n);case Os:s=8,i|=8;break;case No:return e=Le(12,t,n,i|2),e.elementType=No,e.lanes=o,e;case zo:return e=Le(13,t,n,i),e.elementType=zo,e.lanes=o,e;case Do:return e=Le(19,t,n,i),e.elementType=Do,e.lanes=o,e;case oc:return Ui(t,i,o,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case rc:s=10;break e;case ic:s=9;break e;case Fs:s=11;break e;case Bs:s=14;break e;case fn:s=16,r=null;break e}throw Error(C(130,e==null?e:typeof e,""))}return n=Le(s,t,n,i),n.elementType=e,n.type=r,n.lanes=o,n}function Vn(e,n,t,r){return e=Le(7,e,r,n),e.lanes=t,e}function Ui(e,n,t,r){return e=Le(22,e,r,n),e.elementType=oc,e.lanes=t,e.stateNode={isHidden:!1},e}function To(e,n,t){return e=Le(6,e,null,n),e.lanes=t,e}function Eo(e,n,t){return n=Le(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Vg(e,n,t,r,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ao(0),this.expirationTimes=ao(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ao(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function wl(e,n,t,r,i,o,s,l,a){return e=new Vg(e,n,t,l,a),n===1?(n=1,o===!0&&(n|=8)):n=0,o=Le(3,null,null,n),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},ol(o),e}function Yg(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:rt,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function Jd(e){if(!e)return jn;e=e._reactInternals;e:{if(qn(e)!==e||e.tag!==1)throw Error(C(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(ke(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(C(171))}if(e.tag===1){var t=e.type;if(ke(t))return Jc(e,t,n)}return n}function Xd(e,n,t,r,i,o,s,l,a){return e=wl(t,r,!0,e,i,o,s,l,a),e.context=Jd(null),t=e.current,r=ge(),i=_n(t),o=tn(r,i),o.callback=n??null,bn(t,o,i),e.current.lanes=i,br(e,i,r),Pe(e,r),e}function Vi(e,n,t,r){var i=n.current,o=ge(),s=_n(i);return t=Jd(t),n.context===null?n.context=t:n.pendingContext=t,n=tn(o,s),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=bn(i,n,s),e!==null&&(He(e,i,s,o),qr(e,i,s)),s}function Ei(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function pu(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Sl(e,n){pu(e,n),(e=e.alternate)&&pu(e,n)}function Qg(){return null}var Zd=typeof reportError=="function"?reportError:function(e){console.error(e)};function bl(e){this._internalRoot=e}Yi.prototype.render=bl.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(C(409));Vi(e,n,null,null)};Yi.prototype.unmount=bl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Jn(function(){Vi(null,e,null,null)}),n[on]=null}};function Yi(e){this._internalRoot=e}Yi.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ec();e={blockedOn:null,target:e,priority:n};for(var t=0;t<mn.length&&n!==0&&n<mn[t].priority;t++);mn.splice(t,0,e),t===0&&$c(e)}};function Cl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Qi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function gu(){}function Kg(e,n,t,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=Ei(s);o.call(c)}}var s=Xd(n,r,e,0,null,!1,!1,"",gu);return e._reactRootContainer=s,e[on]=s.current,fr(e.nodeType===8?e.parentNode:e),Jn(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=Ei(a);l.call(c)}}var a=wl(e,0,!1,null,null,!1,!1,"",gu);return e._reactRootContainer=a,e[on]=a.current,fr(e.nodeType===8?e.parentNode:e),Jn(function(){Vi(n,a,t,r)}),a}function Ki(e,n,t,r,i){var o=t._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var l=i;i=function(){var a=Ei(s);l.call(a)}}Vi(n,s,e,i)}else s=Kg(t,n,e,i,r);return Ei(s)}Rc=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Yt(n.pendingLanes);t!==0&&(Us(n,t|1),Pe(n,Z()),!(z&6)&&(Rt=Z()+500,Ln()))}break;case 13:Jn(function(){var r=sn(e,1);if(r!==null){var i=ge();He(r,e,1,i)}}),Sl(e,1)}};Vs=function(e){if(e.tag===13){var n=sn(e,134217728);if(n!==null){var t=ge();He(n,e,134217728,t)}Sl(e,134217728)}};Tc=function(e){if(e.tag===13){var n=_n(e),t=sn(e,n);if(t!==null){var r=ge();He(t,e,n,r)}Sl(e,n)}};Ec=function(){return F};jc=function(e,n){var t=F;try{return F=e,n()}finally{F=t}};Qo=function(e,n,t){switch(n){case"input":if(Fo(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var i=Ii(r);if(!i)throw Error(C(90));lc(r),Fo(r,i)}}}break;case"textarea":uc(e,t);break;case"select":n=t.value,n!=null&&mt(e,!!t.multiple,n,!1)}};hc=vl;yc=Jn;var Gg={usingClientEntryPoint:!1,Events:[_r,at,Ii,gc,mc,vl]},Wt={findFiberByHostInstance:Bn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Jg={bundleType:Wt.bundleType,version:Wt.version,rendererPackageName:Wt.rendererPackageName,rendererConfig:Wt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:an.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=kc(e),e===null?null:e.stateNode},findFiberByHostInstance:Wt.findFiberByHostInstance||Qg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Vr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vr.isDisabled&&Vr.supportsFiber)try{Mi=Vr.inject(Jg),Ge=Vr}catch{}}Te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Gg;Te.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Cl(n))throw Error(C(200));return Yg(e,n,null,t)};Te.createRoot=function(e,n){if(!Cl(e))throw Error(C(299));var t=!1,r="",i=Zd;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=wl(e,1,!1,null,null,t,!1,r,i),e[on]=n.current,fr(e.nodeType===8?e.parentNode:e),new bl(n)};Te.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(C(188)):(e=Object.keys(e).join(","),Error(C(268,e)));return e=kc(n),e=e===null?null:e.stateNode,e};Te.flushSync=function(e){return Jn(e)};Te.hydrate=function(e,n,t){if(!Qi(n))throw Error(C(200));return Ki(null,e,n,!0,t)};Te.hydrateRoot=function(e,n,t){if(!Cl(e))throw Error(C(405));var r=t!=null&&t.hydratedSources||null,i=!1,o="",s=Zd;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),n=Xd(n,null,e,1,t??null,i,!1,o,s),e[on]=n.current,fr(e),r)for(e=0;e<r.length;e++)t=r[e],i=t._getVersion,i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i);return new Yi(n)};Te.render=function(e,n,t){if(!Qi(n))throw Error(C(200));return Ki(null,e,n,!1,t)};Te.unmountComponentAtNode=function(e){if(!Qi(e))throw Error(C(40));return e._reactRootContainer?(Jn(function(){Ki(null,null,e,!1,function(){e._reactRootContainer=null,e[on]=null})}),!0):!1};Te.unstable_batchedUpdates=vl;Te.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!Qi(t))throw Error(C(200));if(e==null||e._reactInternals===void 0)throw Error(C(38));return Ki(e,n,t,!1,r)};Te.version="18.3.1-next-f1338f8080-20240426";function qd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(qd)}catch(e){console.error(e)}}qd(),qu.exports=Te;var _l=qu.exports,ef,mu=_l;ef=Lo.createRoot=mu.createRoot,Lo.hydrateRoot=mu.hydrateRoot;/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Pr(){return Pr=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Pr.apply(null,arguments)}var xn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(xn||(xn={}));const hu="popstate";function Xg(e){e===void 0&&(e={});function n(i,o){let{pathname:s="/",search:l="",hash:a=""}=et(i.location.hash.substr(1));return!s.startsWith("/")&&!s.startsWith(".")&&(s="/"+s),_s("",{pathname:s,search:l,hash:a},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(i,o){let s=i.document.querySelector("base"),l="";if(s&&s.getAttribute("href")){let a=i.location.href,c=a.indexOf("#");l=c===-1?a:a.slice(0,c)}return l+"#"+(typeof o=="string"?o:ji(o))}function r(i,o){Rl(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(o)+")")}return qg(n,t,r,e)}function q(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function Rl(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function Zg(){return Math.random().toString(36).substr(2,8)}function yu(e,n){return{usr:e.state,key:e.key,idx:n}}function _s(e,n,t,r){return t===void 0&&(t=null),Pr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?et(n):n,{state:t,key:n&&n.key||r||Zg()})}function ji(e){let{pathname:n="/",search:t="",hash:r=""}=e;return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(n+=r.charAt(0)==="#"?r:"#"+r),n}function et(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));let r=e.indexOf("?");r>=0&&(n.search=e.substr(r),e=e.substr(0,r)),e&&(n.pathname=e)}return n}function qg(e,n,t,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,l=xn.Pop,a=null,c=f();c==null&&(c=0,s.replaceState(Pr({},s.state,{idx:c}),""));function f(){return(s.state||{idx:null}).idx}function p(){l=xn.Pop;let w=f(),g=w==null?null:w-c;c=w,a&&a({action:l,location:k.location,delta:g})}function h(w,g){l=xn.Push;let d=_s(k.location,w,g);t&&t(d,w),c=f()+1;let y=yu(d,c),P=k.createHref(d);try{s.pushState(y,"",P)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;i.location.assign(P)}o&&a&&a({action:l,location:k.location,delta:1})}function m(w,g){l=xn.Replace;let d=_s(k.location,w,g);t&&t(d,w),c=f();let y=yu(d,c),P=k.createHref(d);s.replaceState(y,"",P),o&&a&&a({action:l,location:k.location,delta:0})}function v(w){let g=i.location.origin!=="null"?i.location.origin:i.location.href,d=typeof w=="string"?w:ji(w);return d=d.replace(/ $/,"%20"),q(g,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,g)}let k={get action(){return l},get location(){return e(i,s)},listen(w){if(a)throw new Error("A history only accepts one active listener");return i.addEventListener(hu,p),a=w,()=>{i.removeEventListener(hu,p),a=null}},createHref(w){return n(i,w)},createURL:v,encodeLocation(w){let g=v(w);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:h,replace:m,go(w){return s.go(w)}};return k}var vu;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(vu||(vu={}));function em(e,n,t){return t===void 0&&(t="/"),nm(e,n,t)}function nm(e,n,t,r){let i=typeof n=="string"?et(n):n,o=Tl(i.pathname||"/",t);if(o==null)return null;let s=nf(e);tm(s);let l=null,a=gm(o);for(let c=0;l==null&&c<s.length;++c)l=dm(s[c],a);return l}function nf(e,n,t,r){n===void 0&&(n=[]),t===void 0&&(t=[]),r===void 0&&(r="");let i=(o,s,l)=>{let a={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};a.relativePath.startsWith("/")&&(q(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let c=Tn([r,a.relativePath]),f=t.concat(a);o.children&&o.children.length>0&&(q(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),nf(o.children,n,f,c)),!(o.path==null&&!o.index)&&n.push({path:c,score:um(c,o.index),routesMeta:f})};return e.forEach((o,s)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,s);else for(let a of tf(o.path))i(o,s,a)}),n}function tf(e){let n=e.split("/");if(n.length===0)return[];let[t,...r]=n,i=t.endsWith("?"),o=t.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=tf(r.join("/")),l=[];return l.push(...s.map(a=>a===""?o:[o,a].join("/"))),i&&l.push(...s),l.map(a=>e.startsWith("/")&&a===""?"/":a)}function tm(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:cm(n.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const rm=/^:[\w-]+$/,im=3,om=2,sm=1,lm=10,am=-2,xu=e=>e==="*";function um(e,n){let t=e.split("/"),r=t.length;return t.some(xu)&&(r+=am),n&&(r+=om),t.filter(i=>!xu(i)).reduce((i,o)=>i+(rm.test(o)?im:o===""?sm:lm),r)}function cm(e,n){return e.length===n.length&&e.slice(0,-1).every((r,i)=>r===n[i])?e[e.length-1]-n[n.length-1]:0}function dm(e,n,t){let{routesMeta:r}=e,i={},o="/",s=[];for(let l=0;l<r.length;++l){let a=r[l],c=l===r.length-1,f=o==="/"?n:n.slice(o.length)||"/",p=fm({path:a.relativePath,caseSensitive:a.caseSensitive,end:c},f),h=a.route;if(!p)return null;Object.assign(i,p.params),s.push({params:i,pathname:Tn([o,p.pathname]),pathnameBase:ym(Tn([o,p.pathnameBase])),route:h}),p.pathnameBase!=="/"&&(o=Tn([o,p.pathnameBase]))}return s}function fm(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,r]=pm(e.path,e.caseSensitive,e.end),i=n.match(t);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,f,p)=>{let{paramName:h,isOptional:m}=f;if(h==="*"){let k=l[p]||"";s=o.slice(0,o.length-k.length).replace(/(.)\/+$/,"$1")}const v=l[p];return m&&!v?c[h]=void 0:c[h]=(v||"").replace(/%2F/g,"/"),c},{}),pathname:o,pathnameBase:s,pattern:e}}function pm(e,n,t){n===void 0&&(n=!1),t===void 0&&(t=!0),Rl(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,l,a)=>(r.push({paramName:l,isOptional:a!=null}),a?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,n?void 0:"i"),r]}function gm(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return Rl(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function Tl(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,r=e.charAt(t);return r&&r!=="/"?null:e.slice(t)||"/"}function mm(e,n){n===void 0&&(n="/");let{pathname:t,search:r="",hash:i=""}=typeof e=="string"?et(e):e,o;return t?(t=rf(t),t.startsWith("/")?o=ku(t.substring(1),"/"):o=ku(t,n)):o=n,{pathname:o,search:vm(r),hash:xm(i)}}function ku(e,n){let t=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?t.length>1&&t.pop():i!=="."&&t.push(i)}),t.length>1?t.join("/"):"/"}function jo(e,n,t,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function hm(e){return e.filter((n,t)=>t===0||n.route.path&&n.route.path.length>0)}function El(e,n){let t=hm(e);return n?t.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):t.map(r=>r.pathnameBase)}function jl(e,n,t,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=et(e):(i=Pr({},e),q(!i.pathname||!i.pathname.includes("?"),jo("?","pathname","search",i)),q(!i.pathname||!i.pathname.includes("#"),jo("#","pathname","hash",i)),q(!i.search||!i.search.includes("#"),jo("#","search","hash",i)));let o=e===""||i.pathname==="",s=o?"/":i.pathname,l;if(s==null)l=t;else{let p=n.length-1;if(!r&&s.startsWith("..")){let h=s.split("/");for(;h[0]==="..";)h.shift(),p-=1;i.pathname=h.join("/")}l=p>=0?n[p]:"/"}let a=mm(i,l),c=s&&s!=="/"&&s.endsWith("/"),f=(o||s===".")&&t.endsWith("/");return!a.pathname.endsWith("/")&&(c||f)&&(a.pathname+="/"),a}const rf=e=>e.replace(/\/\/+/g,"/"),Tn=e=>rf(e.join("/")),ym=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),vm=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,xm=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function km(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const of=["post","put","patch","delete"];new Set(of);const Pm=["get",...of];new Set(Pm);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function wr(){return wr=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},wr.apply(null,arguments)}const $l=x.createContext(null),wm=x.createContext(null),Mn=x.createContext(null),Gi=x.createContext(null),un=x.createContext({outlet:null,matches:[],isDataRoute:!1}),sf=x.createContext(null);function Sm(e,n){let{relative:t}=n===void 0?{}:n;$t()||q(!1);let{basename:r,navigator:i}=x.useContext(Mn),{hash:o,pathname:s,search:l}=uf(e,{relative:t}),a=s;return r!=="/"&&(a=s==="/"?r:Tn([r,s])),i.createHref({pathname:a,search:l,hash:o})}function $t(){return x.useContext(Gi)!=null}function At(){return $t()||q(!1),x.useContext(Gi).location}function lf(e){x.useContext(Mn).static||x.useLayoutEffect(e)}function af(){let{isDataRoute:e}=x.useContext(un);return e?Dm():bm()}function bm(){$t()||q(!1);let e=x.useContext($l),{basename:n,future:t,navigator:r}=x.useContext(Mn),{matches:i}=x.useContext(un),{pathname:o}=At(),s=JSON.stringify(El(i,t.v7_relativeSplatPath)),l=x.useRef(!1);return lf(()=>{l.current=!0}),x.useCallback(function(c,f){if(f===void 0&&(f={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let p=jl(c,JSON.parse(s),o,f.relative==="path");e==null&&n!=="/"&&(p.pathname=p.pathname==="/"?n:Tn([n,p.pathname])),(f.replace?r.replace:r.push)(p,f.state,f)},[n,r,s,o,e])}function Cm(){let{matches:e}=x.useContext(un),n=e[e.length-1];return n?n.params:{}}function uf(e,n){let{relative:t}=n===void 0?{}:n,{future:r}=x.useContext(Mn),{matches:i}=x.useContext(un),{pathname:o}=At(),s=JSON.stringify(El(i,r.v7_relativeSplatPath));return x.useMemo(()=>jl(e,JSON.parse(s),o,t==="path"),[e,s,o,t])}function _m(e,n){return Rm(e,n)}function Rm(e,n,t,r){$t()||q(!1);let{navigator:i}=x.useContext(Mn),{matches:o}=x.useContext(un),s=o[o.length-1],l=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let c=At(),f;if(n){var p;let w=typeof n=="string"?et(n):n;a==="/"||(p=w.pathname)!=null&&p.startsWith(a)||q(!1),f=w}else f=c;let h=f.pathname||"/",m=h;if(a!=="/"){let w=a.replace(/^\//,"").split("/");m="/"+h.replace(/^\//,"").split("/").slice(w.length).join("/")}let v=em(e,{pathname:m}),k=Am(v&&v.map(w=>Object.assign({},w,{params:Object.assign({},l,w.params),pathname:Tn([a,i.encodeLocation?i.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?a:Tn([a,i.encodeLocation?i.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),o,t,r);return n&&k?x.createElement(Gi.Provider,{value:{location:wr({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:xn.Pop}},k):k}function Tm(){let e=zm(),n=km(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return x.createElement(x.Fragment,null,x.createElement("h2",null,"Unexpected Application Error!"),x.createElement("h3",{style:{fontStyle:"italic"}},n),t?x.createElement("pre",{style:i},t):null,null)}const Em=x.createElement(Tm,null);class jm extends x.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){console.error("React Router caught the following error during render",n,t)}render(){return this.state.error!==void 0?x.createElement(un.Provider,{value:this.props.routeContext},x.createElement(sf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function $m(e){let{routeContext:n,match:t,children:r}=e,i=x.useContext($l);return i&&i.static&&i.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=t.route.id),x.createElement(un.Provider,{value:n},r)}function Am(e,n,t,r){var i;if(n===void 0&&(n=[]),t===void 0&&(t=null),r===void 0&&(r=null),e==null){var o;if(!t)return null;if(t.errors)e=t.matches;else if((o=r)!=null&&o.v7_partialHydration&&n.length===0&&!t.initialized&&t.matches.length>0)e=t.matches;else return null}let s=e,l=(i=t)==null?void 0:i.errors;if(l!=null){let f=s.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);f>=0||q(!1),s=s.slice(0,Math.min(s.length,f+1))}let a=!1,c=-1;if(t&&r&&r.v7_partialHydration)for(let f=0;f<s.length;f++){let p=s[f];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(c=f),p.route.id){let{loaderData:h,errors:m}=t,v=p.route.loader&&h[p.route.id]===void 0&&(!m||m[p.route.id]===void 0);if(p.route.lazy||v){a=!0,c>=0?s=s.slice(0,c+1):s=[s[0]];break}}}return s.reduceRight((f,p,h)=>{let m,v=!1,k=null,w=null;t&&(m=l&&p.route.id?l[p.route.id]:void 0,k=p.route.errorElement||Em,a&&(c<0&&h===0?(Im("route-fallback"),v=!0,w=null):c===h&&(v=!0,w=p.route.hydrateFallbackElement||null)));let g=n.concat(s.slice(0,h+1)),d=()=>{let y;return m?y=k:v?y=w:p.route.Component?y=x.createElement(p.route.Component,null):p.route.element?y=p.route.element:y=f,x.createElement($m,{match:p,routeContext:{outlet:f,matches:g,isDataRoute:t!=null},children:y})};return t&&(p.route.ErrorBoundary||p.route.errorElement||h===0)?x.createElement(jm,{location:t.location,revalidation:t.revalidation,component:k,error:m,children:d(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):d()},null)}var cf=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(cf||{}),df=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(df||{});function Lm(e){let n=x.useContext($l);return n||q(!1),n}function Mm(e){let n=x.useContext(wm);return n||q(!1),n}function Nm(e){let n=x.useContext(un);return n||q(!1),n}function ff(e){let n=Nm(),t=n.matches[n.matches.length-1];return t.route.id||q(!1),t.route.id}function zm(){var e;let n=x.useContext(sf),t=Mm(),r=ff();return n!==void 0?n:(e=t.errors)==null?void 0:e[r]}function Dm(){let{router:e}=Lm(cf.UseNavigateStable),n=ff(df.UseNavigateStable),t=x.useRef(!1);return lf(()=>{t.current=!0}),x.useCallback(function(i,o){o===void 0&&(o={}),t.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,wr({fromRouteId:n},o)))},[e,n])}const Pu={};function Im(e,n,t){Pu[e]||(Pu[e]=!0)}function Om(e,n){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Rs(e){let{to:n,replace:t,state:r,relative:i}=e;$t()||q(!1);let{future:o,static:s}=x.useContext(Mn),{matches:l}=x.useContext(un),{pathname:a}=At(),c=af(),f=jl(n,El(l,o.v7_relativeSplatPath),a,i==="path"),p=JSON.stringify(f);return x.useEffect(()=>c(JSON.parse(p),{replace:t,state:r,relative:i}),[c,p,i,t,r]),null}function Kt(e){q(!1)}function Fm(e){let{basename:n="/",children:t=null,location:r,navigationType:i=xn.Pop,navigator:o,static:s=!1,future:l}=e;$t()&&q(!1);let a=n.replace(/^\/*/,"/"),c=x.useMemo(()=>({basename:a,navigator:o,static:s,future:wr({v7_relativeSplatPath:!1},l)}),[a,l,o,s]);typeof r=="string"&&(r=et(r));let{pathname:f="/",search:p="",hash:h="",state:m=null,key:v="default"}=r,k=x.useMemo(()=>{let w=Tl(f,a);return w==null?null:{location:{pathname:w,search:p,hash:h,state:m,key:v},navigationType:i}},[a,f,p,h,m,v,i]);return k==null?null:x.createElement(Mn.Provider,{value:c},x.createElement(Gi.Provider,{children:t,value:k}))}function Bm(e){let{children:n,location:t}=e;return _m(Ts(n),t)}new Promise(()=>{});function Ts(e,n){n===void 0&&(n=[]);let t=[];return x.Children.forEach(e,(r,i)=>{if(!x.isValidElement(r))return;let o=[...n,i];if(r.type===x.Fragment){t.push.apply(t,Ts(r.props.children,o));return}r.type!==Kt&&q(!1),!r.props.index||!r.props.children||q(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=Ts(r.props.children,o)),t.push(s)}),t}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Es(){return Es=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Es.apply(null,arguments)}function Wm(e,n){if(e==null)return{};var t={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(n.indexOf(r)!==-1)continue;t[r]=e[r]}return t}function Hm(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Um(e,n){return e.button===0&&(!n||n==="_self")&&!Hm(e)}const Vm=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Ym="6";try{window.__reactRouterVersion=Ym}catch{}const Qm="startTransition",wu=Ff[Qm];function Km(e){let{basename:n,children:t,future:r,window:i}=e,o=x.useRef();o.current==null&&(o.current=Xg({window:i,v5Compat:!0}));let s=o.current,[l,a]=x.useState({action:s.action,location:s.location}),{v7_startTransition:c}=r||{},f=x.useCallback(p=>{c&&wu?wu(()=>a(p)):a(p)},[a,c]);return x.useLayoutEffect(()=>s.listen(f),[s,f]),x.useEffect(()=>Om(r),[r]),x.createElement(Fm,{basename:n,children:t,location:l.location,navigationType:l.action,navigator:s,future:r})}const Gm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Jm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,js=x.forwardRef(function(n,t){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:l,target:a,to:c,preventScrollReset:f,viewTransition:p}=n,h=Wm(n,Vm),{basename:m}=x.useContext(Mn),v,k=!1;if(typeof c=="string"&&Jm.test(c)&&(v=c,Gm))try{let y=new URL(window.location.href),P=c.startsWith("//")?new URL(y.protocol+c):new URL(c),S=Tl(P.pathname,m);P.origin===y.origin&&S!=null?c=S+P.search+P.hash:k=!0}catch{}let w=Sm(c,{relative:i}),g=Xm(c,{replace:s,state:l,target:a,preventScrollReset:f,relative:i,viewTransition:p});function d(y){r&&r(y),y.defaultPrevented||g(y)}return x.createElement("a",Es({},h,{href:v||w,onClick:k||o?r:d,ref:t,target:a}))});var Su;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Su||(Su={}));var bu;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(bu||(bu={}));function Xm(e,n){let{target:t,replace:r,state:i,preventScrollReset:o,relative:s,viewTransition:l}=n===void 0?{}:n,a=af(),c=At(),f=uf(e,{relative:s});return x.useCallback(p=>{if(Um(p,t)){p.preventDefault();let h=r!==void 0?r:ji(c)===ji(f);a(e,{replace:h,state:i,preventScrollReset:o,relative:s,viewTransition:l})}},[c,a,f,r,i,t,e,o,s,l])}const Zm="https://github.com/frankvane/vane-components";class qm extends Xn.Component{constructor(){super(...arguments);sa(this,"state",{error:null})}static getDerivedStateFromError(t){return{error:t}}render(){var t;return this.state.error?u.jsxs("div",{className:"crash",role:"alert",children:[u.jsx("h3",{children:"这个页面炸了"}),u.jsx("pre",{children:String(((t=this.state.error)==null?void 0:t.stack)||this.state.error)}),u.jsx("button",{type:"button",onClick:()=>this.setState({error:null}),children:"重试"})]}):this.props.children}}function pf(e,n){return String(e.entries.indexOf(n)+1).padStart(2,"0")}function eh({demos:e,pathname:n}){var a;const{groups:t,entries:r,label:i}=e,o=(a=r.find(c=>n===`/demo/${c.meta.slug}`))==null?void 0:a.meta.group,[s,l]=x.useState(()=>{var f;const c=(f=t[0])==null?void 0:f.key;return Object.fromEntries(t.map(p=>[p.key,p.key===(o??c)]))});return x.useEffect(()=>{o&&l(c=>c[o]?c:{...c,[o]:!0})},[o]),u.jsxs("div",{className:"nav-section",children:[u.jsxs("div",{className:"nav-section-head",children:[u.jsx("span",{children:i}),u.jsxs("code",{children:[r.length," demos"]})]}),t.map(c=>{const f=r.filter(h=>h.meta.group===c.key);if(f.length===0)return null;const p=s[c.key]??!1;return u.jsxs("div",{className:"nav-group",children:[u.jsxs("button",{type:"button",className:`nav-group-head${o===c.key?" is-current":""}`,onClick:()=>l(h=>({...h,[c.key]:!p})),"aria-expanded":p,children:[u.jsx("span",{className:`nav-caret${p?" is-open":""}`,"aria-hidden":!0,children:"▸"}),c.label,u.jsx("code",{children:f.length})]}),p?u.jsx("div",{className:"nav-list",children:f.map(h=>u.jsxs(js,{to:`/demo/${h.meta.slug}`,className:`nav-sub${n===`/demo/${h.meta.slug}`?" is-active":""}`,children:[u.jsx("em",{"aria-hidden":!0,children:pf(e,h)}),h.meta.title]},h.meta.slug))}):null]},c.key)})]})}function nh({demos:e}){var l;const{slug:n}=Cm(),{entries:t,detail:r}=e,i=n?t.find(a=>a.meta.slug===n):void 0,o=(l=t[0])==null?void 0:l.meta.slug;if(!i)return u.jsx(Rs,{to:o?`/demo/${o}`:"/",replace:!0});const s=t.indexOf(i)+1;return u.jsx(Xn.Fragment,{children:r(i,s)},i.meta.slug)}function th({config:e}){var p,h;const{pathname:n}=At(),[t,r]=x.useState(!1),[i,o]=x.useState(!1);x.useEffect(()=>r(!1),[n]);const s=x.useCallback(()=>o(m=>!m),[]);x.useEffect(()=>{const m=v=>{const k=v.target,w=k&&(k.tagName==="INPUT"||k.tagName==="TEXTAREA"||k.isContentEditable);v.key==="Escape"&&r(!1),!w&&(v.key==="g"||v.key==="G")&&!v.metaKey&&!v.ctrlKey&&o(g=>!g)};return window.addEventListener("keydown",m),()=>window.removeEventListener("keydown",m)},[]);const l=e.demos,a=(p=l.entries[0])==null?void 0:p.meta.slug,c=x.useMemo(()=>{if(!n.startsWith("/demo"))return e.crumb(n);const m=n.replace(/^\/demo\/?/,""),v=l.entries.find(k=>k.meta.slug===m);return v?`demo ${pf(l,v)} · ${v.meta.title}`:"demo · 逐项示例"},[n,e,l]),f=x.useMemo(()=>e.nav.map((m,v)=>({...m,no:String(v+1).padStart(2,"0")})),[e.nav]);return u.jsxs("div",{className:`shell${t?" is-nav-open":""}${i?" is-guides":""}`,children:[u.jsx("a",{className:"skip-link",href:"#main",onClick:m=>{m.preventDefault();const v=document.getElementById("main");v==null||v.setAttribute("tabindex","-1"),v==null||v.focus(),v==null||v.scrollIntoView({block:"start"})},children:"跳到内容"}),u.jsxs("aside",{className:"side","aria-label":"站点导航",children:[u.jsxs(js,{to:"/",className:"brand",children:[u.jsx("span",{className:"brand-mark","aria-hidden":!0,children:e.brand}),u.jsxs("span",{children:[u.jsx("strong",{children:e.pkg}),u.jsx("em",{children:e.subtitle})]})]}),u.jsxs("nav",{children:[f.map(m=>u.jsxs(js,{to:m.to,className:`nav-item${n===m.to?" is-active":""}`,"aria-current":n===m.to?"page":void 0,children:[u.jsx("em",{"aria-hidden":!0,children:m.no}),u.jsx("span",{children:m.label}),m.hint?u.jsx("code",{children:m.hint}):null]},m.to)),u.jsx(eh,{demos:e.demos,pathname:n})]}),u.jsxs("div",{className:"side-foot",children:[u.jsx("p",{children:e.footer[0]}),u.jsx("p",{className:"muted",children:e.footer[1]})]})]}),u.jsx("button",{type:"button",className:"scrim","aria-label":"关闭导航",tabIndex:t?0:-1,onClick:()=>r(!1)}),u.jsxs("div",{className:"main",id:"main",children:[u.jsxs("header",{className:"topbar",children:[u.jsx("button",{type:"button",className:"nav-toggle","aria-label":t?"关闭导航":"打开导航","aria-expanded":t,onClick:()=>r(m=>!m),children:u.jsx("span",{"aria-hidden":!0})}),u.jsx("span",{className:"crumb",children:c}),u.jsxs("div",{className:"topbar-right",children:[(h=e.stats)==null?void 0:h.map(m=>u.jsxs("span",{className:"topbar-stat",title:m.title,children:[u.jsx("b",{children:m.value})," ",m.label]},m.label)),u.jsxs("button",{type:"button",className:"topbar-btn","aria-pressed":i,onClick:s,title:"显示栏位参考线（快捷键 G）",children:[u.jsx("i",{"aria-hidden":!0}),"guides"]}),u.jsx("a",{className:"topbar-link",href:e.sourceUrl??Zm,target:"_blank",rel:"noreferrer",children:"source ↗"})]})]}),u.jsx("div",{className:"guides","aria-hidden":!0}),u.jsx(x.Suspense,{fallback:u.jsx("div",{className:"loading",children:"loading modules…"}),children:u.jsx(qm,{children:u.jsxs(Bm,{children:[e.routes.map(m=>u.jsx(Kt,{path:m.path,element:m.element},m.path)),u.jsx(Kt,{path:"/demo",element:u.jsx(Rs,{to:a?`/demo/${a}`:"/",replace:!0})}),u.jsx(Kt,{path:"/demo/:slug",element:u.jsx(nh,{demos:e.demos})}),u.jsx(Kt,{path:"*",element:u.jsx(Rs,{to:"/",replace:!0})})]})})})]})]})}function rh({config:e}){return u.jsx(Km,{children:u.jsx(th,{config:e})})}const ih="modulepreload",oh=function(e,n){return new URL(e,n).href},Cu={},Al=function(n,t,r){let i=Promise.resolve();if(t&&t.length>0){const s=document.getElementsByTagName("link"),l=document.querySelector("meta[property=csp-nonce]"),a=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));i=Promise.allSettled(t.map(c=>{if(c=oh(c,r),c in Cu)return;Cu[c]=!0;const f=c.endsWith(".css"),p=f?'[rel="stylesheet"]':"";if(!!r)for(let v=s.length-1;v>=0;v--){const k=s[v];if(k.href===c&&(!f||k.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${p}`))return;const m=document.createElement("link");if(m.rel=f?"stylesheet":ih,f||(m.as="script"),m.crossOrigin="",m.href=c,a&&m.setAttribute("nonce",a),document.head.appendChild(m),f)return new Promise((v,k)=>{m.addEventListener("load",v),m.addEventListener("error",()=>k(new Error(`Unable to preload CSS for ${c}`)))})}))}function o(s){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=s,window.dispatchEvent(l),!l.defaultPrevented)throw s}return i.then(s=>{for(const l of s||[])l.status==="rejected"&&o(l.reason);return n().catch(o)})};function sh(){const e=new Map,n=new Map,t=(s,l)=>{const a=e.get(s);if(a)for(const c of[...a])try{c(l)}catch(f){console.warn(`[PluginBus] handler error for event "${s}"`,f)}},r=(s,l)=>{let a=e.get(s);return a||(a=new Set,e.set(s,a)),a.add(l),()=>{a==null||a.delete(l)}},i=(s,l)=>{const a=c=>{l(c),o(s,a)};return r(s,a)},o=(s,l)=>{var a;if(!l){e.delete(s);return}(a=e.get(s))==null||a.delete(l)};return{emit:t,on:r,once:i,off:o,getData:s=>n.get(s),setData:(s,l)=>{const a=n.get(s);n.set(s,l),a!==l&&t(s,l)},deleteData:s=>{const l=n.has(s);n.delete(s),l&&t(s,void 0)},hasData:s=>n.has(s),getAll:()=>{const s={};return n.forEach((l,a)=>{s[a]=l}),s},clear:()=>{e.clear(),n.clear()}}}function gf(e){const n=new Map(e.map(l=>[l.name,l])),t=[];for(const l of e)for(const a of l.dependencies??[])n.has(a)||t.push(`${l.name} -> ${a}`);const r=[],i=new Set,o=[...e],s=l=>(l.dependencies??[]).every(a=>i.has(a)||!n.has(a));for(;o.length>0;){const l=o.filter(s);if(l.length===0)throw new Error(`[vane/plugin-core] 插件循环依赖: ${o.map(c=>c.name).join(" <-> ")}`);let a=l[0];for(const c of l)(c.priority??0)>(a.priority??0)&&(a=c);r.push(a),i.add(a.name),o.splice(o.indexOf(a),1)}return t.length>0&&console.warn(`[vane/plugin-core] 以下插件依赖未注册，将被忽略:
  ${t.join(`
  `)}`),r}async function lh(e,n={}){const{timeout:t=3e3,name:r="anonymous",hook:i="unknown"}=n;if(!t||t<=0)return await e();let o;const s=new Promise((l,a)=>{o=setTimeout(()=>{a(new Error(`[vane/plugin-core] 插件 ${r} 的钩子 ${i} 超时(${t}ms)`))},t)});try{return await Promise.race([Promise.resolve().then(e),s])}finally{o&&clearTimeout(o)}}const ah=new Set(["onMount","onUnmount","onPropsChange","onError"]);function uh(e={}){const n=e.logger??console,t=e.sandbox??!0,r=e.timeout??3e3,i=[],o=[],s=new Map,l=()=>gf([...s.values()].filter(c=>c.enabled!==!1)),a=c=>{s.set(c.name,{...c,enabled:c.enabled??!0}),c.init&&Promise.resolve(c.init()).catch(f=>{n.warn(`[PluginManager] init failed for ${c.name}`,f)})};return{register:a,registerAll:c=>{for(const f of c)a(f)},unregister:c=>{const f=s.get(c);f&&(f.destroy&&Promise.resolve(f.destroy()).catch(p=>{n.warn(`[PluginManager] destroy failed for ${f.name}`,p)}),s.delete(c))},getPlugin:c=>s.get(c),getAllPlugins:()=>[...s.values()],getEnabledPlugins:()=>[...s.values()].filter(c=>c.enabled!==!1),getExecutionOrder:l,enable:c=>{const f=s.get(c);f&&(f.enabled=!0)},disable:c=>{const f=s.get(c);f&&(f.enabled=!1)},has:c=>s.has(c),executeHook:async(c,f,...p)=>{var h,m;for(const v of l()){const k=(h=v.hooks)==null?void 0:h[c];if(typeof k!="function")continue;const w=v.sandbox??t,g=v.timeout??r;let d;try{d=w?await lh(()=>k(f,...p),{timeout:g,name:v.name,hook:String(c)}):await k(f,...p)}catch(y){if(i.push({plugin:v.name,hook:String(c),error:y}),n.warn(`[PluginManager] hook ${String(c)} failed in ${v.name}`,y),(m=e.onError)==null||m.call(e,v.name,String(c),y),c==="onError")break;continue}if(ah.has(String(c))&&typeof d=="function"){o.push(d);continue}if(d===!1)return!1;if(d!==void 0&&d!==!0)return d}},clear:()=>{const c=o.splice(0);for(const f of c.reverse())try{f()}catch(p){n.warn("[PluginManager] cleanup failed",p)}for(const f of s.values())f.destroy&&Promise.resolve(f.destroy()).catch(p=>{n.warn(`[PluginManager] destroy failed for ${f.name}`,p)});s.clear()},getErrors:()=>[...i]}}var ch=Object.defineProperty,dh=(e,n,t)=>n in e?ch(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,fh=(e,n,t)=>dh(e,n+"",t);class ph extends Xn.Component{constructor(){super(...arguments),fh(this,"state",{error:null})}static getDerivedStateFromError(n){return{error:n}}componentDidCatch(n,t){var r,i;console.warn("[vane/plugin-core] 插件渲染错误已被隔离",n,t),(i=(r=this.props).onError)==null||i.call(r,n,t)}render(){const{error:n}=this.state;return n?this.props.fallback?this.props.fallback(n):null:this.props.children}}let Yr=null;function gh(e=!1){if(Yr&&!e)return Yr;const n=typeof window<"u"?window.innerWidth:1024,t=typeof window<"u"?window.innerHeight:768,r=typeof window<"u"&&window.devicePixelRatio||1,i=typeof navigator<"u"&&navigator.userAgent||"",o=/iPad|Tablet/i.test(i),s=/Mobile|Android|iPhone/i.test(i),l=typeof window<"u"&&("ontouchstart"in window||(navigator.maxTouchPoints??0)>0);return Yr={type:o?"tablet":s?"mobile":"desktop",os:i,browser:i,devicePixelRatio:r,viewportWidth:n,viewportHeight:t,isTouchDevice:l,isRetina:r>=2},Yr}function _u(e,n){if(Object.is(e,n))return!0;if(typeof e!="object"||typeof n!="object"||e===null||n===null)return!1;const t=Object.keys(e),r=Object.keys(n);return t.length!==r.length?!1:t.every(i=>Object.is(e[i],n[i]))}function mh(e){const{plugins:n,props:t,data:r,initialState:i,containerRef:o,enableDebug:s=!1,managerOptions:l,extendContext:a}=e,c=x.useRef(null),f=o??c,p=x.useRef(null);p.current||(p.current=uh(l));const h=p.current,m=x.useRef(null);m.current||(m.current=sh());const v=m.current,k=x.useRef(new Map),[w,g]=x.useState(i??{}),[,d]=x.useState(0),y=x.useCallback(()=>d($=>$+1),[]),P=x.useMemo(()=>gh(),[]),S=x.useRef(n),b=S.current;(b.length!==n.length||n.some(($,A)=>$!==b[A]))&&(S.current=n);const _=S.current,R=_.map($=>$.name).join("|");x.useLayoutEffect(()=>{h.clear(),h.registerAll(_),s&&console.debug("[vane/plugin-core] plugins registered:",R)},[_]),x.useLayoutEffect(()=>()=>{h.executeHook("onUnmount",j.current),h.clear()},[h]);const N=x.useMemo(()=>gf(_),[_]),j=x.useRef(null),B=x.useRef(t);_u(B.current,t)||(B.current=t);const we=B.current,M=x.useRef(r);_u(M.current,r)||(M.current=r);const De=M.current,cn=x.useMemo(()=>{const $={props:we,data:De,bus:v,refs:{container:f,getContainer:()=>f.current},state:w,setState:A=>g(I=>({...I,...A})),shared:k.current,deviceInfo:P,forceUpdate:y,getSize:()=>{const A=f.current;return A?{width:A.offsetWidth,height:A.offsetHeight}:{width:0,height:0}},logger:console};return a?a($):$},[we,De,w,P,v,a]);j.current=cn;const Lt=x.useCallback($=>{var I,V;let A=$;for(const Ve of N){const Se=(I=Ve.hooks)==null?void 0:I.transformProps;if(typeof Se=="function")try{A=Se(A)}catch(Nn){(((V=j.current)==null?void 0:V.logger)??console).warn(`[plugin-core] ${Ve.name}.transformProps 执行失败，已跳过`,Nn)}}return A},[N]),Mt=x.useCallback($=>{var I,V;let A=$;for(const Ve of N){const Se=(I=Ve.hooks)==null?void 0:I.transformData;if(typeof Se=="function")try{A=Se(j.current,A)}catch(Nn){(((V=j.current)==null?void 0:V.logger)??console).warn(`[plugin-core] ${Ve.name}.transformData 执行失败，已跳过`,Nn)}}return A},[N]),T=x.useCallback(($,...A)=>h.executeHook($,j.current,...A),[h]);return{manager:h,bus:v,context:cn,state:w,setState:cn.setState,execute:T,transformProps:Lt,transformData:Mt,orderedPlugins:N}}x.createContext(null);const mf=x.createContext(null);function hh({orderedPlugins:e,context:n,children:t}){const r=x.useMemo(()=>({orderedPlugins:e,context:n}),[e,n]);return u.jsx(mf.Provider,{value:r,children:t})}const Ru=new WeakMap;function yh(e,n){let t=Ru.get(e);t||(t=new Map,Ru.set(e,t));let r=t.get(n);return r||(r=[...e].filter(i=>typeof i.hooks[n]=="function").sort((i,o)=>{var s,l;return(((s=i.config)==null?void 0:s.order)??0)-(((l=o.config)==null?void 0:l.order)??0)||(o.priority??0)-(i.priority??0)}),t.set(n,r)),r}function vh(e,n,t){return yh(e,t).map((r,i)=>{if(r.enabled===!1)return null;try{const o=r.hooks[t],s=o(n);return s==null?null:u.jsx(ph,{children:s},`activity-slot-${r.name}-${i}`)}catch(o){return console.warn(`[vane-activity] 插件 ${r.name} 的 ${t} 渲染失败`,o),null}}).filter(Boolean)}function Dn(e){const n=x.useContext(mf);return n?vh(n.orderedPlugins,n.context,e):[]}const D=x.forwardRef(function(n,t){const{data:r,containerClassName:i,containerStyle:o,containerRefExternal:s,emptyText:l="活动暂未开始",loading:a,onMount:c,onUnmount:f}=n,p=x.useRef(null),h=s||p,[,m]=x.useState(0),v=Xn.useCallback(()=>m(B=>B+1),[]),k=Dn("renderHeader"),w=Dn("renderProgress"),g=Dn("renderTasks"),d=Dn("renderRewards"),y=Dn("renderRules"),P=Dn("renderFooter"),S=Dn("renderOverlay");x.useImperativeHandle(t,()=>({getContainer:()=>h.current,forceUpdate:v,getSize:()=>{const B=h.current;return B?{width:B.offsetWidth,height:B.offsetHeight}:{width:0,height:0}}}),[v,h]);const b=x.useRef(c),_=x.useRef(f);b.current=c,_.current=f,x.useEffect(()=>{var B;return(B=b.current)==null||B.call(b),()=>{var we;return(we=_.current)==null?void 0:we.call(_)}},[]);const R=r,j=(Array.isArray(R==null?void 0:R.tasks)?R.tasks:[]).length>0;return u.jsxs("div",{ref:h,className:`vc-activity ${i||""}`,style:{position:"relative",boxSizing:"border-box",background:"#fff",color:"#1f2328",fontFamily:"inherit",padding:16,...o},children:[k.length>0&&u.jsx("div",{className:"va-header",style:{marginBottom:12},children:k}),w.length>0&&u.jsx("div",{className:"va-hero",style:{marginBottom:12},children:w}),a&&u.jsx("div",{className:"va-loading",style:{padding:"12px 0",textAlign:"center",color:"#6b6b6b"},children:"加载中…"}),!a&&!j&&u.jsx("div",{className:"va-empty",style:{padding:"24px 0",textAlign:"center",color:"#6b6b6b"},children:l}),!a&&j&&u.jsxs(u.Fragment,{children:[g.length>0&&u.jsx("div",{className:"va-tasks",style:{marginBottom:12},children:g}),d.length>0&&u.jsx("div",{className:"va-rewards",style:{marginBottom:12},children:d})]}),!a&&y.length>0&&u.jsx("div",{className:"va-rules",children:y}),P.length>0&&u.jsx("div",{className:"va-footer",style:{marginTop:12},children:P}),S.length>0&&u.jsx("div",{className:"va-overlay",style:{position:"absolute",inset:0,pointerEvents:"none"},children:S})]})});D.displayName="ActivityCore";function xh(e){if(e.length===0)return 0;let n=0,t=0;for(const i of e){const o=i.weight??1,s=Number.isFinite(o)&&o>0?o:1;n+=s;const l=Math.max(0,Math.min(1,Number.isFinite(i.progress)?i.progress:0));t+=l*s}const r=n===0?0:t/n;return Number.isFinite(r)?Math.max(0,Math.min(1,r)):0}function kh(e,n,t){if(t)return"claimed";const r=Number.isFinite(e.threshold)?Math.max(0,Math.min(1,e.threshold)):1;return n>=r?"claimable":"locked"}function Ph(e,n,t){return e.map(r=>({...r,status:kh(r,n,t.includes(r.id))}))}function wh(e){const n=[...e].sort((s,l)=>(l.priority??0)-(s.priority??0)),t=new Map,r=new Set,i=[];for(const s of n){const l=s.exclusiveSlots??[];if(l.length===0)continue;const a=l.find(c=>t.has(c));if(a){r.add(s),i.push({name:s.name,slot:a,winner:t.get(a)});continue}for(const c of l)t.set(c,s.name)}return r.size===0?{kept:e,dropped:i}:{kept:e.filter(s=>!r.has(s)),dropped:i}}function Sh(e){return Array.from(new Set(e))}function bh(e){return!e||typeof e!="object"?e:{...e,tasks:Array.isArray(e.tasks)?e.tasks:[],rewards:Array.isArray(e.rewards)?e.rewards:[],rules:Array.isArray(e.rules)||typeof e.rules=="string"?e.rules:[]}}function O(e,n){const t=Array.isArray(n)?{plugins:n}:n,{plugins:r,enableDebug:i=!1}=t,{kept:o,dropped:s}=wh(r);if(s.length>0){const a=s.map(c=>`${c.name}(被 ${c.winner} 挤出 ${c.slot})`).join("、");console.warn(`[vane-activity] 独占槽位去重，以下插件未参与装配：${a}`)}const l=x.forwardRef((a,c)=>{const f=x.useRef(null),p=a.onClaim,h=x.useCallback(M=>M,[]),m=mh({plugins:o,props:a,data:a.data,containerRef:f,extendContext:h,enableDebug:i}),v=x.useMemo(()=>m.context.data===void 0?void 0:m.transformData(m.context.data),[m.context.data,m.transformData,m.state]),k=x.useMemo(()=>bh(v),[v]),w=a.claimedRewardIds!==void 0,g=x.useMemo(()=>{const M=w?a.claimedRewardIds:m.state.claimedIds;return Array.isArray(M)?M:[]},[w,a.claimedRewardIds,m.state.claimedIds]),d=x.useMemo(()=>(k==null?void 0:k.tasks)??[],[k]),y=x.useMemo(()=>xh(d),[d]),P=x.useMemo(()=>Ph((k==null?void 0:k.rewards)??[],y,g),[k,y,g]),S=x.useMemo(()=>new Map(P.map(M=>[M.id,M])),[P]),b=x.useRef(g);b.current=g;const _=x.useRef(new Set),R=x.useCallback(M=>{const De=S.get(M);if(!De){console.warn(`[vane-activity] 未知奖励 id：${M}`);return}if(De.status!=="claimable"){console.warn(`[vane-activity] 奖励 ${M} 当前状态为 ${De.status}，不能领取`);return}if(_.current.has(M))return;_.current.add(M);const cn=Sh([...b.current,M]);b.current=cn,w||m.setState({claimedIds:cn}),p==null||p(M)},[w,p,S,m]);x.useEffect(()=>{for(const M of g)_.current.delete(M)},[g.join("|")]);const N=x.useCallback((M,...De)=>m.execute(M,...De),[m.manager]),j=m.transformProps(a);x.useEffect(()=>{N("onMount")},[N]);const B=x.useMemo(()=>({...m.context,data:k,tasks:d,progress:y,rewards:P,claimedIds:g,claim:R}),[m.context,k,d,y,P,g,R]),we={...j,containerRefExternal:f,debug:j.debug??i,data:B.data,onMount:()=>{var M;(M=j.onMount)==null||M.call(j)},onUnmount:()=>{var M;(M=j.onUnmount)==null||M.call(j)}};return u.jsx(hh,{orderedPlugins:m.orderedPlugins,context:B,children:u.jsx(e,{ref:c,...we})})});return l.displayName="WithPlugins(ActivityCore)",l}const Ch="ProgressFxPlugin",_h="进度特效：顶部进度条 fill + 百分比数字；进度达成 100% 时浮层庆祝条。",Rh="0.1.0",Th=["ui","进度","特效"],Eh=[{name:"height",type:"number",default:"8",description:"进度条高度（px），圆角随高度自动取 height / 2"},{name:"order",type:"number",default:"0",description:"同槽位排序键（升序靠前）：与 ProgressRing / MilestoneBar / CountdownTimer 共存时调整上下顺序"}],jh=[{name:"renderProgress",when:"每次渲染；进度槽位无更高 order 的插件接管时",description:"输出「进度条 + 百分比数字」，百分比 = round(ctx.progress × 100)"},{name:"renderOverlay",when:"ctx.progress >= 1（全部任务完成）",description:"在浮层渲染「🎉 进度达成 100%」庆祝条（absolute + pointerEvents:none，不挡交互）；未达成返回 null"}],$h=[],Ah="纯展示：只读取 ctx.progress（0..1），不调用任何上下文方法，也不触发回调。",Lh=["进度条宽度随 progress 过渡（.4s ease）","100% 达成庆祝浮层"],Mh=["活动页顶部进度","任务完成度可视化","秒杀达标提示"],Nh=["height 只影响条高，颜色固定为强调橙 #ff7a29（填充不是文字，不受 ADR-13 约束）","庆祝浮层只在 progress 恰好达到 1 时出现，进度停在 0.99 不会触发"],zh="const Activity = withPlugins(ActivityCore, [createProgressFxPlugin()]);",Dh=[{name:"默认进度条",description:"8px 条 + 百分比 + 达成庆祝",src:"createProgressFxPlugin()",config:{}},{name:"加粗进度条",description:"高度调到 14px，适合首屏大进度",src:"createProgressFxPlugin({ height: 14 })",config:{height:14}}],Ll={name:Ch,description:_h,since:Rh,tags:Th,props:Eh,events:jh,methods:$h,methodsNote:Ah,features:Lh,useCases:Mh,notes:Nh,example:zh,examples:Dh},ne=(e={})=>{const{height:n=8}=e;return{name:"ProgressFxPlugin",version:"0.1.0",description:Ll.description,priority:10,config:e,hooks:{renderProgress:t=>{const r=Math.round(Math.max(0,Math.min(1,t.progress??0))*100);return u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[u.jsx("div",{style:{flex:1,height:n,borderRadius:n/2,background:"rgba(128,128,128,0.18)",overflow:"hidden"},children:u.jsx("div",{style:{width:`${r}%`,height:"100%",borderRadius:n/2,background:"#ff7a29",transition:"width .4s ease"}})}),u.jsxs("span",{style:{fontSize:14,fontWeight:700,color:"#1f2328",minWidth:40,textAlign:"right"},children:[r,"%"]})]})},renderOverlay:t=>(t.progress??0)>=1?u.jsx("div",{style:{position:"absolute",top:8,left:"50%",transform:"translateX(-50%)",padding:"4px 12px",borderRadius:999,background:"#1f2328",color:"#fff",fontSize:12,pointerEvents:"none",whiteSpace:"nowrap"},children:"🎉 进度达成 100%"}):null}}};ne.meta=Ll;const Ih="TaskListPlugin",Oh="任务清单：渲染活动任务列表，展示标题/描述/进度与状态，含「去完成」动作按钮。",Fh="0.1.0",Bh=["ui","任务","列表"],Wh=[{name:"showProgress",type:"boolean",default:"true",description:"是否展示每个未完成任务的进度条"},{name:"doneLabel",type:"string",default:"已完成",description:"完成态文案（替代默认的「已完成」）"},{name:"order",type:"number",default:"0",description:"同槽位排序键（本插件独占 renderTasks，一般用不到）"}],Hh=[{name:"renderTasks",when:"每次渲染；任务槽位无更高 order 的插件接管时",description:"输出任务清单；ctx.tasks 为空时返回 null，槽位留空"},{name:"onTaskAction",when:"点击任务动作按钮（status !== completed 且配了 actionLabel）",description:"透传 ActivityCore 的 onTaskAction(taskId)，由消费方决定跳转/埋点"}],Uh=[],Vh="只读取 ctx.tasks 与 ctx.props.onTaskAction，不调用任何上下文方法。",Yh=["任务三态（locked / available / completed）配色","按任务 progress 渲染单项进度条"],Qh=["签到任务清单","拉新任务列表","积分任务中心"],Kh=["进度条默认不显示在已完成任务上（改 doneLabel 可换文案）",'声明 exclusiveSlots: ["renderTasks"]：与 TaskTabsPlugin（priority 22）同时装配时本插件让位并被丢弃，避免两份任务列表叠影'],Gh="const Activity = withPlugins(ActivityCore, [createTaskListPlugin()]);",Jh=[{name:"基础任务列表",description:"展示任务清单与每项进度",src:"createTaskListPlugin()",config:{}},{name:"隐藏单项进度条",description:"只列任务与状态，进度交给顶部 ProgressFx",src:"createTaskListPlugin({ showProgress: false })",config:{showProgress:!1}}],Ml={name:Ih,description:Oh,since:Fh,tags:Bh,props:Wh,events:Hh,methods:Uh,methodsNote:Vh,features:Yh,useCases:Qh,notes:Kh,example:Gh,examples:Jh},Xh={locked:"未解锁",available:"进行中",completed:"已完成"},Zh={locked:"#5d636a",available:"#cf4407",completed:"#15803d"},X=(e={})=>{const{showProgress:n=!0,doneLabel:t="已完成"}=e;return{name:"TaskListPlugin",version:"0.1.0",description:Ml.description,priority:20,config:e,exclusiveSlots:["renderTasks"],hooks:{renderTasks:r=>{const i=r.tasks??[];return i.length===0?null:u.jsx("div",{style:{display:"flex",flexDirection:"column",gap:10},children:i.map(o=>{const s=Zh[o.status],l=Math.round(Math.max(0,Math.min(1,o.progress??0))*100);return u.jsxs("div",{"data-testid":"activity-task",style:{display:"flex",alignItems:"center",gap:10,padding:"10px 12px",borderRadius:10,border:"1px solid rgba(128,128,128,0.18)",background:"#fff"},children:[u.jsxs("div",{style:{flex:1,minWidth:0},children:[u.jsx("div",{style:{fontWeight:600,fontSize:14,color:"#1f2328"},children:o.title}),o.desc&&u.jsx("div",{style:{fontSize:12,color:"#5d636a",marginTop:2},children:o.desc}),n&&o.status!=="completed"&&u.jsx("div",{style:{marginTop:6,height:4,borderRadius:2,background:"rgba(128,128,128,0.18)"},children:u.jsx("div",{style:{width:`${l}%`,height:"100%",borderRadius:2,background:"#cf4407"}})})]}),u.jsx("span",{style:{fontSize:12,color:s,fontWeight:600,whiteSpace:"nowrap"},children:o.status==="completed"?t:Xh[o.status]}),o.actionLabel&&o.status!=="completed"&&u.jsx("button",{type:"button",onClick:()=>{var a,c;return(c=(a=r.props).onTaskAction)==null?void 0:c.call(a,o.id)},style:{border:"none",borderRadius:999,padding:"6px 14px",background:"#cf4407",color:"#fff",fontSize:13,cursor:"pointer"},children:o.actionLabel})]},o.id)})})}}}};X.meta=Ml;const qh="RewardClaimPlugin",ey="奖励领取：渲染奖励行，按派生状态展示按钮（可领/已领/锁定），点击调 claim。",ny="0.1.0",ty=["ui","奖励","领取"],ry=[{name:"claimedLabel",type:"string",default:"已领取",description:"已领取态按钮文案"},{name:"order",type:"number",default:"0",description:"同槽位排序键：与 RedeemCodePlugin 同在 renderRewards 时定上下"}],iy=[{name:"renderRewards",when:"每次渲染；奖励槽位无更高 order 的插件接管时",description:"输出奖励行：可领（实心橙按钮）/ 已领（绿字禁用）/ 未解锁（灰字禁用）"},{name:"onClaim",when:"点击「领取」按钮（仅 claimable 态可点）",description:"先走 ctx.claim(rewardId) 更新内部态，再由内核透传 ActivityCore 的 onClaim(rewardId)"}],oy=[{name:"claim",signature:"ctx.claim(rewardId: string): void",description:"领取指定奖励：非受控时写入内核 claimedIds 并触发重渲染；受控（传了 claimedRewardIds）时只回调 onClaim"}],sy=["奖励三态派生（locked / claimable / claimed）","受控 / 非受控两种领取模式"],ly=["阶梯奖励领取","达标发券","任务奖励发放"],ay=["阈值来自 reward.threshold，比较对象是总体加权进度 ctx.progress","按钮配色已过 ADR-13：可领 #cf4407（白底 4.69:1），不用 #ff7a29（白字仅 2.6:1）"],uy="const Activity = withPlugins(ActivityCore, [createRewardClaimPlugin()]);",cy=[{name:"默认领取区",description:"阈值解锁后高亮「领取」",src:"createRewardClaimPlugin()",config:{}},{name:"自定义已领文案",description:"把「已领取」换成「已到账」",src:'createRewardClaimPlugin({ claimedLabel: "已到账" })',config:{claimedLabel:"已到账"}}],Nl={name:qh,description:ey,since:ny,tags:ty,props:ry,events:iy,methods:oy,features:sy,useCases:ly,notes:ay,example:uy,examples:cy},Tu={locked:{label:"未解锁",bg:"rgba(128,128,128,0.12)",color:"#5d636a",disabled:!0},claimable:{label:"领取",bg:"#cf4407",color:"#fff",disabled:!1},claimed:{label:"已领取",bg:"rgba(21,128,61,0.12)",color:"#15803d",disabled:!0}},je=(e={})=>{const{claimedLabel:n="已领取"}=e;return{name:"RewardClaimPlugin",version:"0.1.0",description:Nl.description,priority:30,exclusiveSlots:["renderRewards"],config:e,hooks:{renderRewards:t=>{const r=t.rewards??[];return r.length===0?null:u.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:r.map(i=>{const o=i.status==="claimed"?{...Tu.claimed,label:n}:Tu[i.status];return u.jsxs("div",{"data-testid":"activity-reward",style:{display:"flex",alignItems:"center",gap:10,padding:"10px 12px",borderRadius:10,border:"1px solid rgba(128,128,128,0.18)",background:"#fff"},children:[u.jsxs("div",{style:{flex:1,minWidth:0},children:[u.jsxs("div",{style:{fontWeight:600,fontSize:14,color:"#1f2328"},children:[i.icon?`${i.icon} `:"",i.title]}),i.desc&&u.jsx("div",{style:{fontSize:12,color:"#5d636a",marginTop:2},children:i.desc})]}),u.jsx("button",{type:"button",disabled:o.disabled,onClick:()=>t.claim(i.id),style:{border:"none",borderRadius:999,padding:"6px 14px",background:o.bg,color:o.color,fontSize:13,cursor:o.disabled?"default":"pointer"},children:o.label})]},i.id)})})}}}};je.meta=Nl;const dy="RuleExpandPlugin",fy="规则折叠：渲染「活动规则」可折叠面板，折叠态按行数截断，同步 aria-expanded。",py="0.1.0",gy=["ui","规则","折叠"],my=[{name:"collapsedLines",type:"number",default:"3",description:"折叠态最大展示行数（-webkit-line-clamp）"}],hy=[{name:"renderRules",when:"每次渲染；规则槽位无更高 order 的插件接管时",description:"输出「活动规则」折叠面板；data.rules 为空时返回 null"}],yy=[],vy="展开/收起用组件本地 useState，不写回 ctx，也不调用任何上下文方法。",xy=["长文 line-clamp 折叠","aria-expanded 无障碍状态同步"],ky=["活动规则说明","条款/免责声明","秒杀细则"],Py=["rules 支持字符串或 { title, content } 数组两种形态","折叠状态是组件内部 state，重新挂载会回到折叠态"],wy="const Activity = withPlugins(ActivityCore, [createRuleExpandPlugin()]);",Sy=[{name:"默认折叠",description:"折叠 3 行，点击展开全文",src:"createRuleExpandPlugin()",config:{}},{name:"折叠 6 行",description:"首屏多露两行规则摘要",src:"createRuleExpandPlugin({ collapsedLines: 6 })",config:{collapsedLines:6}}],zl={name:dy,description:fy,since:py,tags:gy,props:my,events:hy,methods:yy,methodsNote:vy,features:xy,useCases:ky,notes:Py,example:wy,examples:Sy};function by(e){return e?typeof e=="string"?[{content:e}]:e:[]}function Cy({context:e,collapsedLines:n}){var o;const[t,r]=x.useState(!1),i=by((o=e.data)==null?void 0:o.rules);return i.length===0?null:u.jsxs("div",{style:{borderTop:"1px solid rgba(128,128,128,0.18)",paddingTop:10},children:[u.jsxs("button",{type:"button","aria-expanded":t,onClick:()=>r(s=>!s),style:{display:"flex",alignItems:"center",gap:6,background:"none",border:"none",padding:0,cursor:"pointer",color:"#1f2328",fontSize:13,fontWeight:600},children:["活动规则",u.jsx("span",{style:{transform:t?"rotate(180deg)":"none",transition:"transform .2s",color:"#5d636a"},children:"▾"})]}),u.jsx("div",{style:t?{marginTop:8}:{marginTop:8,display:"-webkit-box",WebkitLineClamp:n,WebkitBoxOrient:"vertical",overflow:"hidden"},children:i.map((s,l)=>u.jsxs("p",{style:{margin:"0 0 6px",fontSize:12,lineHeight:1.6,color:"#5d636a"},children:[s.title?u.jsxs("strong",{style:{color:"#1f2328"},children:[s.title,"："]}):null,s.content]},l))})]})}const nt=(e={})=>{const{collapsedLines:n=3}=e;return{name:"RuleExpandPlugin",version:"0.1.0",description:zl.description,priority:40,exclusiveSlots:["renderRules"],config:e,hooks:{renderRules:t=>u.jsx(Cy,{context:t,collapsedLines:n})}}};nt.meta=zl;const _y={title:"夏日狂欢 · 7 日签到",tasks:[{id:"t1",title:"每日签到",desc:"连续签到领积分",progress:1,status:"completed",actionLabel:"已签到"},{id:"t2",title:"浏览会场 3 个商品",desc:"了解活动好物",progress:.6,status:"available",actionLabel:"去浏览",rewardId:"r1"},{id:"t3",title:"邀请 1 位好友",desc:"助力解锁终极大奖",progress:0,status:"locked",actionLabel:"去邀请",rewardId:"r2"}],rewards:[{id:"r1",title:"5 元无门槛券",threshold:.5,icon:"🎟️",desc:"浏览达标即可领取"},{id:"r2",title:"20 元会员券",threshold:.9,icon:"💎",desc:"邀请好友后解锁"},{id:"r3",title:"终极大礼包",threshold:1,icon:"🎁",desc:"全部任务完成发放"}],rules:[{title:"活动时间",content:"2024.07.01 - 2024.07.07，逾期任务与奖励失效。"},{title:"领取规则",content:"奖励按总体进度阈值解锁，达标后点击「领取」发放至账户；券类奖励有效期 7 天。"},{title:"特别说明",content:"邀请任务需好友完成注册并首单，视为有效助力；异常账号不予发放。"}]},Ry=O(D,[ne(),X(),je(),nt()]),Ty={slug:"basic",title:"基础闭环：内核 + 4 官方插件",group:"basic",intro:"营销活动的最小完整形态——进度特效 / 任务清单 / 奖励领取 / 规则折叠各管一块，内核只负责骨架与生命周期转发。"};function Ey(){return u.jsx(Ry,{data:_y,onTaskAction:e=>console.log("task action",e),onClaim:e=>console.log("claim",e)})}const jy=Object.freeze(Object.defineProperty({__proto__:null,default:Ey,meta:Ty},Symbol.toStringTag,{value:"Module"})),$y={title:"夏日狂欢 · 7 日签到",tasks:[{id:"t1",title:"每日签到",desc:"连续签到领积分",progress:1,status:"completed",actionLabel:"已签到"},{id:"t2",title:"浏览会场 3 个商品",desc:"了解活动好物",progress:.6,status:"available",actionLabel:"去浏览"},{id:"t3",title:"邀请 1 位好友",desc:"助力解锁终极大奖",progress:0,status:"locked",actionLabel:"去邀请"}],rewards:[],rules:[]},Ay=O(D,[X()]),Ly={slug:"tasklist",title:"任务清单 TaskListPlugin",group:"plugin",intro:"只挂 TaskListPlugin 时，活动只剩「任务清单」区：每行展示标题 / 描述 / 进度与状态，并带「去完成」动作按钮。"};function My(){return u.jsx(Ay,{data:$y,onTaskAction:e=>console.log("task action",e)})}const Ny=Object.freeze(Object.defineProperty({__proto__:null,default:My,meta:Ly},Symbol.toStringTag,{value:"Module"})),zy={title:"夏日狂欢 · 7 日签到",tasks:[{id:"t1",title:"每日签到",progress:1,status:"completed"},{id:"t2",title:"浏览会场 3 个商品",progress:1,status:"completed"},{id:"t3",title:"邀请 1 位好友",progress:1,status:"completed"}],rewards:[],rules:[]},Dy=O(D,[ne()]),Iy={slug:"progressfx",title:"进度特效 ProgressFxPlugin",group:"plugin",intro:"顶部进度条 + 百分比数字。本例三项任务全完成 → 3/3 = 100%，弹出庆祝浮层；把任务进度改成 1/0.6/0 就是 53%。"};function Oy(){return u.jsx(Dy,{data:zy})}const Fy=Object.freeze(Object.defineProperty({__proto__:null,default:Oy,meta:Iy},Symbol.toStringTag,{value:"Module"})),By={title:"夏日狂欢 · 7 日签到",tasks:[{id:"t1",title:"每日签到",progress:1,status:"completed"},{id:"t2",title:"浏览会场 3 个商品",progress:.6,status:"available"},{id:"t3",title:"邀请 1 位好友",progress:0,status:"locked"}],rewards:[{id:"r1",title:"5 元无门槛券",threshold:.5,icon:"🎟️",desc:"浏览达标即可领取"},{id:"r2",title:"20 元会员券",threshold:.9,icon:"💎",desc:"邀请好友后解锁"},{id:"r3",title:"终极大礼包",threshold:1,icon:"🎁",desc:"全部任务完成发放"}],rules:[]},Wy=O(D,[je()]),Hy={slug:"rewardclaim",title:"奖励领取 RewardClaimPlugin",group:"plugin",intro:"只挂 RewardClaimPlugin 时，活动只剩「奖励领取」区：按钮状态按「总体进度 vs 阈值」派生（可领 / 已领 / 锁定），点击调 onClaim。"};function Uy(){return u.jsx(Wy,{data:By,onClaim:e=>console.log("claim",e)})}const Vy=Object.freeze(Object.defineProperty({__proto__:null,default:Uy,meta:Hy},Symbol.toStringTag,{value:"Module"})),Yy={title:"夏日狂欢 · 7 日签到",tasks:[],rewards:[],rules:[{title:"活动时间",content:"2024.07.01 - 2024.07.07，逾期任务与奖励失效。"},{title:"领取规则",content:"奖励按总体进度阈值解锁，达标后点击「领取」发放至账户；券类奖励有效期 7 天。"},{title:"特别说明",content:"邀请任务需好友完成注册并首单，视为有效助力；异常账号不予发放。"}]},Qy=O(D,[nt()]),Ky={slug:"ruleexpand",title:"规则折叠 RuleExpandPlugin",group:"plugin",intro:"只挂 RuleExpandPlugin 时，活动只剩「活动规则」可折叠面板：折叠态按行数截断长文，点击展开并同步 aria-expanded。"};function Gy(){return u.jsx(Qy,{data:Yy})}const Jy=Object.freeze(Object.defineProperty({__proto__:null,default:Gy,meta:Ky},Symbol.toStringTag,{value:"Module"})),Xy={title:"夏日狂欢 · 7 日签到",tasks:[{id:"t1",title:"每日签到",desc:"连续签到领积分",progress:1,status:"completed",actionLabel:"已签到"},{id:"t2",title:"浏览会场 3 个商品",desc:"了解活动好物",progress:1,status:"completed",actionLabel:"已浏览"},{id:"t3",title:"邀请 1 位好友",desc:"助力解锁终极大奖",progress:1,status:"completed",actionLabel:"已邀请"}],rewards:[{id:"r1",title:"5 元无门槛券",threshold:.5,icon:"🎟️",desc:"浏览达标即可领取"},{id:"r2",title:"20 元会员券",threshold:.9,icon:"💎",desc:"邀请好友后解锁"},{id:"r3",title:"终极大礼包",threshold:1,icon:"🎁",desc:"全部任务完成发放"}],rules:[{title:"活动时间",content:"2024.07.01 - 2024.07.07，逾期任务与奖励失效。"},{title:"领取规则",content:"奖励按总体进度阈值解锁，达标后点击「领取」发放至账户；券类奖励有效期 7 天。"},{title:"特别说明",content:"邀请任务需好友完成注册并首单，视为有效助力；异常账号不予发放。"}]},Zy=O(D,[ne({height:12}),X({showProgress:!0,doneLabel:"搞定"}),je({claimedLabel:"已到账"}),nt({collapsedLines:2})]),qy={slug:"advanced",title:"进阶：带配置的完整闭环 + 100% 庆祝",group:"advanced",intro:"四个插件都传了配置（进度条加高、完成态文案、已领文案、规则折叠到 2 行），并用全完成任务触发 100% 庆祝浮层——生产里最常见的形态。"};function ev(){return u.jsx(Zy,{data:Xy,onTaskAction:e=>console.log("task action",e),onClaim:e=>console.log("claim",e)})}const nv=Object.freeze(Object.defineProperty({__proto__:null,default:ev,meta:qy},Symbol.toStringTag,{value:"Module"})),tv="CountdownTimerPlugin",rv="活动倒计时：在进度区下方渲染「距活动结束 x天HH:MM:SS」，每秒自走；与 ProgressFx 同槽共存。",iv="0.1.0",ov=["ui","倒计时","进度区"],sv=[{name:"endTime",type:"string | number",default:"-",description:"截止时间（ISO 或时间戳）；不传则回退读 data.endTime，两者皆无则不渲染"},{name:"label",type:"string",default:"距活动结束",description:"倒计时前缀文案"},{name:"urgentMs",type:"number",default:"3600000",description:"剩余不足该毫秒数时进入紧急态（文字变警示色 #cf4407）"},{name:"order",type:"number",default:"0",description:"同槽位排序键（升序靠前）：默认排在 ProgressFx 之后（priority 更低）"}],lv=[{name:"renderProgress",when:"每次渲染；截止时间可解析时",description:"在进度槽位追加倒计时行；时间为空或非法时返回 null 让出槽位"}],av=[],uv="计时状态在组件内部自持（setInterval），不调用任何上下文方法，也不写内核 state。",cv=["每秒自走，天/时/分/秒自适应格式","紧急态（默认最后 1 小时）文字变警示色","结束后显示「已结束」并停止计时器"],dv=["限时秒杀活动","大促倒计时","签到活动周期截止提示"],fv=["倒计时精度为秒，依赖客户端时钟；服务端下发 endTime 时注意时区（推荐 ISO 带时区或时间戳）"],pv='const Activity = withPlugins(ActivityCore, [createCountdownTimerPlugin({ endTime: "2026-12-31T23:59:59+08:00" })]);',gv=[{name:"从 data.endTime 读取",description:"不传配置，回退读活动数据的 endTime 字段",src:"createCountdownTimerPlugin()",config:{}},{name:"自定义文案与紧急阈值",description:"最后 30 分钟进入紧急态",src:'createCountdownTimerPlugin({ label: "距开抢", urgentMs: 1800000 })',config:{label:"距开抢",urgentMs:18e5}}],Dl={name:tv,description:rv,since:iv,tags:ov,props:sv,events:lv,methods:av,methodsNote:uv,features:cv,useCases:dv,notes:fv,example:pv,examples:gv};function Eu(e){return Math.max(0,e-Date.now())}function ju(e){const n=Math.floor(e/1e3),t=Math.floor(n/86400),r=String(Math.floor(n%86400/3600)).padStart(2,"0"),i=String(Math.floor(n%3600/60)).padStart(2,"0"),o=String(n%60).padStart(2,"0");return t>0?`${t}天 ${r}:${i}:${o}`:`${r}:${i}:${o}`}function mv({end:e,label:n,urgentMs:t}){const[r,i]=x.useState(null);x.useEffect(()=>{const s=Eu(e);if(i(s),s<=0)return;const l=window.setInterval(()=>{const a=Eu(e);i(a),a<=0&&window.clearInterval(l)},1e3);return()=>window.clearInterval(l)},[e]);const o=r!==null&&r>0&&r<=t;return u.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:8,fontSize:12},children:[u.jsx("span",{style:{color:"#5d636a"},children:n}),u.jsx("span",{role:"timer","aria-label":r===null?"剩余时间加载中":`剩余 ${ju(r)}`,style:{fontFamily:"var(--ff-mono, ui-monospace, monospace)",fontSize:14,fontWeight:700,color:r===0?"#5d636a":o?"#cf4407":"#1f2328",fontVariantNumeric:"tabular-nums"},children:r===null?"--:--:--":r===0?"已结束":ju(r)})]})}const Il=(e={})=>{const{endTime:n,label:t="距活动结束",urgentMs:r=36e5}=e;return{name:"CountdownTimerPlugin",version:"0.1.0",description:Dl.description,priority:12,config:e,hooks:{renderProgress:i=>{var l;const o=n??((l=i.data)==null?void 0:l.endTime);if(o===void 0)return null;const s=typeof o=="number"?o:new Date(o).getTime();return Number.isFinite(s)?u.jsx(mv,{end:s,label:t,urgentMs:r}):null}}}};Il.meta=Dl;const hv={title:"夏日狂欢 · 7 日签到",endTime:"2026-12-31T23:59:59+08:00",tasks:[{id:"t1",title:"每日签到",progress:1,status:"completed"},{id:"t2",title:"浏览会场 3 个商品",progress:.6,status:"available"},{id:"t3",title:"邀请 1 位好友",progress:0,status:"locked"}],rewards:[],rules:[]},yv=O(D,[ne(),Il(),X()]),vv={slug:"countdown",title:"倒计时 CountdownTimerPlugin",group:"plugin",intro:"进度条下方追加每秒自走的倒计时行，截止时间读 data.endTime；最后 1 小时变紧急色。"};function xv(){return u.jsx(yv,{data:hv})}const kv=Object.freeze(Object.defineProperty({__proto__:null,default:xv,meta:vv},Symbol.toStringTag,{value:"Module"})),Pv="MilestoneBarPlugin",wv="里程碑进度：把奖励阈值映射为轨道节点（已领取实心绿 / 可领警示橙 / 未达标灰），展示离下一档的空间距离。",Sv="0.1.0",bv=["ui","里程碑","进度区"],Cv=[{name:"height",type:"number",default:"6",description:"轨道高度（px）"},{name:"dotSize",type:"number",default:"18",description:"里程碑圆点直径（px）"},{name:"order",type:"number",default:"0",description:"同槽位排序键（升序靠前）：与 ProgressFx / ProgressRing 共存时决定上下位置"}],_v=[{name:"renderProgress",when:"每次渲染；ctx.rewards 非空时",description:"在进度槽位渲染带节点的轨道；无奖励时返回 null 让出槽位"}],Rv=[],Tv="只读取 ctx.progress 与 ctx.rewards（含派生状态），不调用任何上下文方法。",Ev=["节点状态完全由数据派生（claimed/claimable/locked）","节点 hover 显示奖励名与阈值（title）","纯形状表达，无文字，天然无对比度负担"],jv=["阶梯奖励进度","会员成长值","众筹进度里程碑"],$v=["奖励阈值建议避免扎堆（如 0.5/0.52/0.9），节点会视觉重叠"],Ol={name:Pv,description:wv,since:Sv,tags:bv,props:Cv,events:_v,methods:Rv,methodsNote:Tv,features:Ev,useCases:jv,notes:$v},Fl=(e={})=>{const{height:n=6,dotSize:t=18}=e;return{name:"MilestoneBarPlugin",version:"0.1.0",description:Ol.description,priority:13,config:e,hooks:{renderProgress:r=>{const i=Math.max(0,Math.min(1,r.progress??0)),o=r.rewards??[];if(o.length===0)return null;const s=Math.round(i*100);return u.jsxs("div",{role:"img","aria-label":`总体进度 ${s}%，共 ${o.length} 档里程碑`,style:{position:"relative",paddingTop:t/2+2,paddingBottom:t/2+2},children:[u.jsx("div",{style:{height:n,borderRadius:n/2,background:"rgba(128,128,128,0.18)"}}),u.jsx("div",{style:{position:"absolute",top:t/2+2,left:0,height:n,borderRadius:n/2,width:`${s}%`,background:"#ff7a29",transition:"width .4s ease"}}),o.map(l=>{const a=Number.isFinite(l.threshold)?Math.max(0,Math.min(1,l.threshold)):1,c=i>=a,f=l.status==="claimed",p=f?"#15803d":c?"#cf4407":"#c9cdd2";return u.jsx("div",{title:`${l.title}（阈值 ${Math.round(a*100)}%）`,style:{position:"absolute",top:2,left:`${Math.round(a*100)}%`,transform:"translateX(-50%)",width:t,height:t,borderRadius:"50%",background:f?p:"#fff",border:`2px solid ${p}`,boxSizing:"border-box",display:"flex",alignItems:"center",justifyContent:"center"},children:f||c?u.jsx("span",{style:{width:t/3,height:t/3,borderRadius:"50%",background:p}}):null},l.id)})]})}}}};Fl.meta=Ol;const Av={title:"夏日狂欢 · 7 日签到",tasks:[{id:"t1",title:"每日签到",progress:1,status:"completed"},{id:"t2",title:"浏览会场 3 个商品",progress:.6,status:"available"},{id:"t3",title:"邀请 1 位好友",progress:0,status:"locked"}],rewards:[{id:"r1",title:"5 元无门槛券",threshold:.5,icon:"🎟️",desc:"浏览达标即可领取"},{id:"r2",title:"20 元会员券",threshold:.9,icon:"💎",desc:"邀请好友后解锁"},{id:"r3",title:"终极大礼包",threshold:1,icon:"🎁",desc:"全部任务完成发放"}],rules:[]},Lv=O(D,[ne(),Fl(),X()]),Mv={slug:"milestone",title:"里程碑 MilestoneBarPlugin",group:"plugin",intro:"把奖励阈值画成轨道节点（绿=已领 / 橙=可领 / 灰=未达标），与数字进度条上下互补。"};function Nv(){return u.jsx(Lv,{data:Av})}const zv=Object.freeze(Object.defineProperty({__proto__:null,default:Nv,meta:Mv},Symbol.toStringTag,{value:"Module"})),Dv="CouponStackPlugin",Iv="券堆叠：把奖励渲染成一摞错位的票券卡（RewardClaim 的变体渲染），同槽位独占。",Ov="0.1.0",Fv=["ui","奖励","变体","独占"],Bv=[{name:"stackOffset",type:"number",default:"6",description:"相邻券卡的横向错位偏移（px）"},{name:"claimLabel",type:"string",default:"领取",description:"可领态按钮文案"},{name:"claimedLabel",type:"string",default:"已领取",description:"已领取态文案"},{name:"lockedLabel",type:"string",default:"未解锁",description:"锁定态文案"}],Wv=[{name:"renderRewards",when:"每次渲染；ctx.rewards 非空时",description:"渲染票券卡列表；无奖励时返回 null"},{name:"ctx.claim",when:"点击「领取」按钮",description:"领取对应奖励（内部态更新 + onClaim 回调），卡片随即变「已领取」"}],Hv=[],Uv="领取走 ctx.claim(rewardId)（内核统一入口），自身不持有领取状态。",Vv=["票券式卡面（虚线边 + 堆叠错位）","与 RewardClaim 声明互斥，装配期自动去重","三态配色守 ADR-13（白字按钮 #cf4407）"],Yv=["券包领取页","礼包兑换","需要弱化按钮、强化券面设计的场景"],Qv=["同时挂载 RewardClaim 时本插件被去重（priority 29 < 30）；想用堆叠风格就别挂 RewardClaim"],Kv="const Activity = withPlugins(ActivityCore, [createCouponStackPlugin()]);",Gv=[{name:"默认堆叠",description:"替换 RewardClaim 的票券风格渲染",src:"createCouponStackPlugin()",config:{}},{name:"加大错位",description:"堆叠手感更明显",src:"createCouponStackPlugin({ stackOffset: 12 })",config:{stackOffset:12}}],Bl={name:Dv,description:Iv,since:Ov,tags:Fv,props:Bv,events:Wv,methods:Hv,methodsNote:Uv,features:Vv,useCases:Yv,notes:Qv,example:Kv,examples:Gv},Wl=(e={})=>{const{stackOffset:n=6,claimLabel:t="领取",claimedLabel:r="已领取",lockedLabel:i="未解锁"}=e;return{name:"CouponStackPlugin",version:"0.1.0",description:Bl.description,priority:29,exclusiveSlots:["renderRewards"],config:e,hooks:{renderRewards:o=>{const s=o.rewards??[];return s.length===0?null:u.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:s.map((l,a)=>{const c=(a%2===0?-1:1)*n*((a+1)/2),f=Math.round(Math.max(0,Math.min(1,Number.isFinite(l.threshold)?l.threshold:1))*100);let p;return l.status==="claimable"?p=u.jsx("button",{type:"button",onClick:()=>o.claim(l.id),style:{border:"none",borderRadius:999,padding:"5px 16px",fontSize:13,fontWeight:700,cursor:"pointer",background:"#cf4407",color:"#fff"},children:t}):l.status==="claimed"?p=u.jsx("span",{style:{borderRadius:999,padding:"5px 16px",fontSize:13,fontWeight:700,background:"rgba(21,128,61,0.10)",color:"#15803d"},children:r}):p=u.jsx("span",{style:{borderRadius:999,padding:"5px 16px",fontSize:13,fontWeight:700,background:"rgba(93,99,106,0.10)",color:"#5d636a"},children:i}),u.jsxs("div",{"data-testid":"activity-coupon",style:{display:"flex",alignItems:"center",gap:12,padding:"12px 16px",borderRadius:12,border:"1px dashed #d8dce0",background:"#fff",boxShadow:"0 2px 6px rgba(0,0,0,0.06)",transform:`translateX(${c}px)`,transition:"transform .25s ease"},children:[u.jsx("span",{style:{fontSize:22},"aria-hidden":!0,children:l.icon??"🎟️"}),u.jsxs("div",{style:{flex:1,minWidth:0},children:[u.jsx("div",{style:{fontSize:14,fontWeight:700,color:"#1f2328"},children:l.title}),u.jsx("div",{style:{fontSize:12,color:"#5d636a",marginTop:2},children:l.desc??`总体进度达 ${f}% 解锁`})]}),p]},l.id)})})}}}};Wl.meta=Bl;const Jv={title:"夏日狂欢 · 7 日签到",tasks:[{id:"t1",title:"每日签到",progress:1,status:"completed"},{id:"t2",title:"浏览会场 3 个商品",progress:.6,status:"available"},{id:"t3",title:"邀请 1 位好友",progress:0,status:"locked"}],rewards:[{id:"r1",title:"5 元无门槛券",threshold:.5,icon:"🎟️",desc:"浏览达标即可领取"},{id:"r2",title:"20 元会员券",threshold:.9,icon:"💎",desc:"邀请好友后解锁"},{id:"r3",title:"终极大礼包",threshold:1,icon:"🎁",desc:"全部任务完成发放"}],rules:[]},Xv=O(D,[Wl(),X()]),Zv={slug:"coupon-stack",title:"券堆叠 CouponStackPlugin",group:"plugin",intro:"票券式卡面替代 RewardClaim 的行式列表；两者同槽独占，同时挂载时高 priority 者胜。"};function qv(){return u.jsx(Xv,{data:Jv,onClaim:e=>console.log("claim",e)})}const e0=Object.freeze(Object.defineProperty({__proto__:null,default:qv,meta:Zv},Symbol.toStringTag,{value:"Module"})),n0="RuleModalPlugin",t0="弹窗版规则：规则区只放触发按钮，点击弹出模态窗展示完整规则（RuleExpand 的变体渲染），同槽位独占。",r0="0.1.0",i0=["ui","规则","弹窗","独占"],o0=[{name:"triggerLabel",type:"string",default:"活动规则",description:"触发按钮文案"},{name:"title",type:"string",default:"活动规则",description:"弹窗标题"},{name:"maxWidth",type:"number",default:"420",description:"弹窗最大宽度（px）"}],s0=[{name:"renderRules",when:"每次渲染；data.rules 非空时",description:"渲染触发按钮；无规则时返回 null"},{name:"open/close",when:"点击按钮 / 点击遮罩或 ✕",description:"弹窗开合为插件内部 useState，aria-haspopup / aria-expanded 同步"}],l0=[],a0="开合状态在插件内部自持，不调用任何上下文方法。",u0=["规则区零占位（只留一个按钮），主视觉更干净","与 RuleExpand 声明互斥，装配期自动去重","支持 string 与 {title, content}[] 两种 rules 形态"],c0=["规则长且多的复杂活动","需要保持活动页沉浸感的场景","移动端全屏规则查看"],d0=["弹窗用 position:fixed，祖先有 transform/filter 时 fixed 会降级为相对定位——套在带变换的容器里时注意"],f0="const Activity = withPlugins(ActivityCore, [createRuleModalPlugin()]);",p0=[{name:"默认弹窗规则",description:"替换 RuleExpand 的弹窗风格渲染",src:"createRuleModalPlugin()",config:{}},{name:"自定义入口文案",description:"按钮改成「玩法说明」",src:'createRuleModalPlugin({ triggerLabel: "玩法说明", title: "玩法说明" })',config:{triggerLabel:"玩法说明",title:"玩法说明"}}],Hl={name:n0,description:t0,since:r0,tags:i0,props:o0,events:s0,methods:l0,methodsNote:a0,features:u0,useCases:c0,notes:d0,example:f0,examples:p0};function g0(e){return e?typeof e=="string"?[{content:e}]:e:[]}function m0(e){var p;const{context:n,triggerLabel:t,title:r,maxWidth:i}=e,[o,s]=x.useState(!1),l=x.useRef(null),a=x.useRef(null),c=x.useRef(null);x.useEffect(()=>{var w;if(!o)return;const h=document.body.style.overflow,m=document.activeElement,v=l.current;document.body.style.overflow="hidden",(w=c.current)==null||w.focus();const k=g=>{if(g.key==="Escape"){g.preventDefault(),s(!1);return}if(g.key!=="Tab"||!a.current)return;const d=a.current.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');if(d.length===0)return;const y=d[0],P=d[d.length-1];g.shiftKey&&document.activeElement===y?(g.preventDefault(),P.focus()):!g.shiftKey&&document.activeElement===P&&(g.preventDefault(),y.focus())};return document.addEventListener("keydown",k),()=>{var g;document.removeEventListener("keydown",k),document.body.style.overflow=h,v!=null&&v.isConnected?v.focus():(g=m==null?void 0:m.focus)==null||g.call(m)}},[o]);const f=g0((p=n.data)==null?void 0:p.rules);return f.length===0?null:u.jsxs(u.Fragment,{children:[u.jsxs("button",{ref:l,type:"button","aria-haspopup":"dialog","aria-expanded":o,onClick:()=>s(!0),style:{border:"1px solid #d8dce0",borderRadius:8,padding:"6px 14px",fontSize:13,background:"#fff",color:"#1f2328",cursor:"pointer"},children:[t," ",u.jsx("span",{"aria-hidden":!0,children:"›"})]}),o&&u.jsx("div",{ref:a,role:"dialog","aria-modal":"true","aria-label":r,onClick:()=>s(!1),style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.55)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e3,padding:24},children:u.jsxs("div",{onClick:h=>h.stopPropagation(),style:{background:"#fff",borderRadius:14,maxWidth:i,width:"100%",maxHeight:"70vh",overflow:"auto",padding:"18px 20px",boxShadow:"0 12px 40px rgba(0,0,0,0.25)"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:10},children:[u.jsx("strong",{style:{fontSize:15,color:"#1f2328"},children:r}),u.jsx("button",{ref:c,type:"button","aria-label":"关闭",onClick:()=>s(!1),style:{border:"none",background:"transparent",fontSize:18,lineHeight:1,color:"#5d636a",cursor:"pointer",padding:4},children:"✕"})]}),f.map((h,m)=>u.jsxs("div",{style:{marginBottom:10},children:[h.title&&u.jsx("div",{style:{fontSize:13,fontWeight:700,color:"#1f2328"},children:h.title}),u.jsx("div",{style:{fontSize:12,lineHeight:1.7,color:"#5d636a"},children:h.content})]},m))]})})]})}const Ul=(e={})=>{const{triggerLabel:n="活动规则",title:t="活动规则",maxWidth:r=420}=e;return{name:"RuleModalPlugin",version:"0.1.0",description:Hl.description,priority:39,exclusiveSlots:["renderRules"],config:e,hooks:{renderRules:i=>u.jsx(m0,{context:i,triggerLabel:n,title:t,maxWidth:r})}}};Ul.meta=Hl;const h0={title:"夏日狂欢 · 7 日签到",tasks:[{id:"t1",title:"每日签到",progress:1,status:"completed"},{id:"t2",title:"浏览会场 3 个商品",progress:.6,status:"available"},{id:"t3",title:"邀请 1 位好友",progress:0,status:"locked"}],rewards:[],rules:[{title:"活动时间",content:"2024.07.01 - 2024.07.07，逾期任务与奖励失效。"},{title:"领取规则",content:"奖励按总体进度阈值解锁，达标后点击「领取」发放至账户；券类奖励有效期 7 天。"},{title:"特别说明",content:"邀请任务需好友完成注册并首单，视为有效助力；异常账号不予发放。"}]},y0=O(D,[Ul(),X()]),v0={slug:"rule-modal",title:"弹窗规则 RuleModalPlugin",group:"plugin",intro:"规则折叠的弹窗形态：入口只剩一个按钮，规则长文收进模态窗；与 RuleExpand 同槽独占。"};function x0(){return u.jsx(y0,{data:h0})}const k0=Object.freeze(Object.defineProperty({__proto__:null,default:x0,meta:v0},Symbol.toStringTag,{value:"Module"})),P0="ConfettiPlugin",w0="庆祝彩纸：进度达成阈值（默认 100%）时容器内下落彩纸动画；与 ProgressFx 文字浮层同槽共存。",S0="0.1.0",b0=["ui","庆祝","浮层","动画"],C0=[{name:"count",type:"number",default:"28",description:"彩纸数量"},{name:"durationSec",type:"number",default:"2.6",description:"单轮下落基准时长（秒，每片带随机扰动）"},{name:"threshold",type:"number",default:"1",description:"触发阈值（ctx.progress ≥ threshold 时庆祝）"}],_0=[{name:"renderOverlay",when:"每次渲染；progress 达阈值时",description:"渲染彩纸层（absolute + pointerEvents:none，不挡交互）；未达阈值返回 null"}],R0=[],T0="只读取 ctx.progress，不调用任何上下文方法；动画用 CSS keyframes（渲染时注入一次 <style>）。",E0=["overlay 槽位天然可叠加，与 ProgressFx 的「🎉 进度达成」横幅同屏","确定性伪随机：重渲染不跳变","纯形状无文字，零对比度负担"],j0=["进度达成庆祝","大奖开出氛围","活动结束撒花"],$0=["彩纸循环下落；想要一轮即止可外层按需卸载插件。low-end 设备上 count 建议 ≤ 40"],A0="const Activity = withPlugins(ActivityCore, [createConfettiPlugin()]);",L0=[{name:"默认彩纸",description:"100% 时与文字横幅同屏庆祝",src:"createConfettiPlugin()",config:{}},{name:"提前庆祝",description:"90% 就开始撒花",src:"createConfettiPlugin({ threshold: 0.9, count: 40 })",config:{threshold:.9,count:40}}],Vl={name:P0,description:w0,since:S0,tags:b0,props:C0,events:_0,methods:R0,methodsNote:T0,features:E0,useCases:j0,notes:$0,example:A0,examples:L0};function Ht(e,n){const t=Math.sin(e*127.1+n*311.7)*43758.5453;return t-Math.floor(t)}const $u=["#ff7a29","#cf4407","#15803d","#5d636a","#f5b60f"];function M0(){const[e,n]=x.useState(!1);return x.useEffect(()=>{var i,o;const t=(i=window.matchMedia)==null?void 0:i.call(window,"(prefers-reduced-motion: reduce)");if(!t)return;const r=()=>n(t.matches);return r(),(o=t.addEventListener)==null||o.call(t,"change",r),()=>{var s;return(s=t.removeEventListener)==null?void 0:s.call(t,"change",r)}},[]),e}function N0({progress:e,count:n,durationSec:t,threshold:r}){const i=M0();if(!(e>=(Number.isFinite(r)?r:1))||i)return null;const s=Math.max(0,Math.min(60,Math.floor(Number.isFinite(n)?n:28))),l=Number.isFinite(t)&&t>0?t:2.6,a=Array.from({length:s},(c,f)=>{const p=Ht(f,1)*100,h=Ht(f,2)*1.2,m=l*(.7+Ht(f,3)*.6),v=5+Ht(f,4)*5,k=$u[f%$u.length],w=Ht(f,5)>.6;return u.jsx("span",{"aria-hidden":!0,style:{position:"absolute",top:-12,left:`${p}%`,width:v,height:v*(w?1:1.8),borderRadius:w?"50%":1,background:k,animation:`va-confetti-fall ${m}s linear ${h}s 2`,opacity:.9}},f)});return u.jsxs("div",{style:{position:"absolute",inset:0,overflow:"hidden",pointerEvents:"none"},children:[u.jsx("style",{children:"@keyframes va-confetti-fall{0%{transform:translateY(0) rotate(0)}100%{transform:translateY(340px) rotate(540deg)}}"}),a]})}const Yl=(e={})=>{const{count:n=28,durationSec:t=2.6,threshold:r=1}=e;return{name:"ConfettiPlugin",version:"0.1.0",description:Vl.description,priority:50,config:e,hooks:{renderOverlay:i=>u.jsx(N0,{progress:i.progress??0,count:n,durationSec:t,threshold:r})}}};Yl.meta=Vl;const z0={title:"夏日狂欢 · 7 日签到",tasks:[{id:"t1",title:"每日签到",progress:1,status:"completed"},{id:"t2",title:"浏览会场 3 个商品",progress:1,status:"completed"},{id:"t3",title:"邀请 1 位好友",progress:1,status:"completed"}],rewards:[{id:"r1",title:"5 元无门槛券",threshold:.5,icon:"🎟️",desc:"浏览达标即可领取"},{id:"r2",title:"20 元会员券",threshold:.9,icon:"💎",desc:"邀请好友后解锁"},{id:"r3",title:"终极大礼包",threshold:1,icon:"🎁",desc:"全部任务完成发放"}],rules:[]},D0=O(D,[ne(),Yl(),je(),X()]),I0={slug:"confetti",title:"彩纸庆祝 ConfettiPlugin",group:"plugin",intro:"100% 时彩纸下落；与 ProgressFx 的文字横幅同屏共存——overlay 槽位可叠加、不独占。"};function O0(){return u.jsx(D0,{data:z0,onClaim:e=>console.log("claim",e)})}const F0=Object.freeze(Object.defineProperty({__proto__:null,default:O0,meta:I0},Symbol.toStringTag,{value:"Module"})),B0="ActivityHeaderPlugin",W0="活动头部横幅：标题 + 副标题 + 标签 + 状态徽章（按 data.endTime 派生「剩 N 天 / 今日截止 / 已结束」）。",H0="0.1.0",U0=["ui","头部","横幅"],V0=[{name:"title",type:"string",default:"data.title",description:"主标题；不传则读 data.title，两者都没有时不渲染"},{name:"subtitle",type:"string",default:"—",description:"副标题，一句话说明活动卖点（13px / #5d636a）"},{name:"tags",type:"string[]",default:"[]",description:"标签行（如「限时」「新人专享」），浅橙 chip 逐个渲染"},{name:"badge",type:"string",default:"按 endTime 派生",description:"状态徽章文案；显式传入时优先，传空串则不显示徽章"},{name:"icon",type:"string",default:"—",description:"标题前图标（emoji 或单字符），已标 aria-hidden 不干扰读屏"},{name:"align",type:'"left" | "center"',default:"left",description:"内容对齐方式，center 适合抽奖 / 节日大促类页头"}],Y0=[{name:"renderHeader",when:"每次渲染；title 与 subtitle 同时为空时返回 null 让出槽位",description:"在 Core 最顶部渲染 <header> 横幅，读取 ctx.data.title 与 ctx.data.endTime"}],Q0=[],K0="纯展示，不调用任何上下文方法；徽章按 Date.now() 与 data.endTime 的差值现算，不持有计时器（秒级倒计时请叠加 CountdownTimerPlugin）。",G0=["徽章三态由数据派生，业务侧只需给 endTime","标签行可空，不占位","浅橙底 + 深字，正文对比度约 15:1"],J0=["大促会场页头","签到活动标题卡","抽奖活动 Banner 文案区"],X0=["徽章文案随父组件渲染刷新，不是每秒跳动的倒计时","title 与 subtitle 都为空时整块让出槽位，不会留空白"],Ql={name:B0,description:W0,since:H0,tags:U0,props:V0,events:Y0,methods:Q0,methodsNote:K0,features:G0,useCases:J0,notes:X0};function Z0(e){if(e==null)return null;const n=typeof e=="number"?e:Date.parse(e);if(Number.isNaN(n))return null;const t=n-Date.now();if(t<=0)return"已结束";const r=Math.ceil(t/864e5);return r<=1?"今日截止":`剩 ${r} 天`}const Ji=(e={})=>{const{title:n,subtitle:t,tags:r=[],badge:i,icon:o,align:s="left"}=e;return{name:"ActivityHeaderPlugin",version:"0.1.0",description:Ql.description,priority:5,config:e,hooks:{renderHeader:l=>{var p,h;const a=(p=l.data)==null?void 0:p.title,c=n??a;if(!c&&!t)return null;const f=i??Z0((h=l.data)==null?void 0:h.endTime);return u.jsx("header",{style:{display:"flex",alignItems:"flex-start",gap:12,padding:"14px 16px",borderRadius:14,background:"linear-gradient(135deg, #fff5ee 0%, #fffaf7 100%)",border:"1px solid rgba(207,68,7,0.14)",textAlign:s==="center"?"center":"left",justifyContent:s==="center"?"center":"flex-start"},children:u.jsxs("div",{style:{minWidth:0,flex:1},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap",justifyContent:s==="center"?"center":"flex-start"},children:[o&&u.jsx("span",{"aria-hidden":"true",style:{fontSize:20,lineHeight:1},children:o}),u.jsx("h2",{style:{margin:0,fontSize:19,fontWeight:700,lineHeight:1.35,color:"#1f2328"},children:c}),f&&u.jsx("span",{style:{flex:"none",padding:"2px 8px",borderRadius:999,background:"#cf4407",color:"#fff",fontSize:12,fontWeight:600,lineHeight:1.6},children:f})]}),t&&u.jsx("p",{style:{margin:"6px 0 0",fontSize:13,lineHeight:1.6,color:"#5d636a"},children:t}),r.length>0&&u.jsx("ul",{style:{display:"flex",gap:6,flexWrap:"wrap",margin:"10px 0 0",padding:0,listStyle:"none",justifyContent:s==="center"?"center":"flex-start"},children:r.map((m,v)=>u.jsx("li",{style:{padding:"2px 8px",borderRadius:6,background:"rgba(207,68,7,0.1)",color:"#a33a06",fontSize:12,lineHeight:1.6},children:m},`${m}-${v}`))})]})})}}}};Ji.meta=Ql;const q0={title:"夏日狂欢 · 7 日签到",endTime:Date.now()+7*24*60*60*1e3,tasks:[{id:"t1",title:"每日签到",progress:1,status:"completed"},{id:"t2",title:"浏览会场 3 个商品",progress:.6,status:"available"},{id:"t3",title:"邀请 1 位好友",progress:0,status:"locked"}],rewards:[{id:"r1",title:"5 元无门槛券",threshold:.5,icon:"🎟️"},{id:"r2",title:"20 元会员券",threshold:.9,icon:"💎"}],rules:[]},e1=O(D,[Ji({subtitle:"连续签到 7 天，最高领 20 元会员券",tags:["限时","签到","新人专享"],icon:"☀️"}),ne(),X()]),n1={slug:"header",title:"头部横幅 ActivityHeaderPlugin",group:"plugin",intro:"标题 + 副标题 + 标签 + 状态徽章；徽章由 data.endTime 派生，不写死文案。"};function t1(){return u.jsx(e1,{data:q0})}const r1=Object.freeze(Object.defineProperty({__proto__:null,default:t1,meta:n1},Symbol.toStringTag,{value:"Module"})),i1="ProgressRingPlugin",o1="环形进度：SVG 双环 + 中心百分比 + 右侧「已完成 x/y 项 / 距下一档还差 N%」文案。",s1="0.1.0",l1=["ui","进度区","环形"],a1=[{name:"size",type:"number",default:"104",description:"圆环直径（px），同时决定 svg 的 viewBox 边长"},{name:"strokeWidth",type:"number",default:"10",description:"环宽（px），半径 = (size - strokeWidth) / 2"},{name:"label",type:"string",default:'"总进度"',description:"环右侧标题文案"},{name:"showCaption",type:"boolean",default:"true",description:"是否显示「已完成 x/y 项」与「距下一档还差 N%」两行明细"},{name:"color",type:"string",default:'"#cf4407"',description:"进度环颜色（轨道固定 rgba(128,128,128,0.18)）"},{name:"order",type:"number",default:"0",description:"同槽位排序键（由内核 config.order 消费）：升序靠前，用于把环放在进度条上/下方"}],u1=[{name:"renderProgress",when:"每次渲染（进度、任务、奖励任一变化）",description:"在进度槽渲染环形进度 + 文案；不返回 null，永远是常驻区块"}],c1=[{name:"ctx.progress",signature:"number // 0..1",description:"读取总体加权进度（由 computeProgress 派生），插件内再 clamp 到 0..1 防越界"},{name:"ctx.tasks / ctx.rewards",signature:"ActivityTask[] / ActivityRewardWithStatus[]",description:"只读派生数据：tasks 用于统计完成项数，rewards 用于计算距下一档的百分比"}],d1="不调用 ctx.claim / ctx.setState，纯读取派生数据；进度变化靠父级重渲染传播。",f1=["SVG 绘制，无 canvas / 无第三方图表库","中心数字 aria-hidden，读屏只读 role=img 的 aria-label","环形与文案同排，窄屏下文案自动换行不撑破"],p1=["签到进度概览","成长值 / 等级进度","众筹目标完成度"],g1=["距下一档取「阈值 > 当前进度且未领取」中最小的一档，全部解锁时显示「全部奖励已解锁」","与 ProgressFx / MilestoneBar 同槽共存时按 order 升序、priority 降序纵向堆叠"],Kl={name:i1,description:o1,since:s1,tags:l1,props:a1,events:u1,methods:c1,methodsNote:d1,features:f1,useCases:p1,notes:g1},Gl=(e={})=>{const{size:n=104,strokeWidth:t=10,label:r="总进度",showCaption:i=!0,color:o="#cf4407"}=e;return{name:"ProgressRingPlugin",version:"0.1.0",description:Kl.description,priority:15,config:e,hooks:{renderProgress:s=>{const l=Math.min(1,Math.max(0,s.progress??0)),a=s.tasks??[],c=s.rewards??[],f=Math.round(l*100),p=(n-t)/2,h=2*Math.PI*p,m=h*l,v=n/2,k=a.filter(d=>d.status==="completed").length,w=c.filter(d=>d.status!=="claimed"&&d.threshold>l).sort((d,y)=>d.threshold-y.threshold)[0],g=w?Math.max(1,Math.ceil((w.threshold-l)*100)):0;return u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16},children:[u.jsxs("div",{role:"img","aria-label":`${r} ${f}%`,style:{position:"relative",width:n,height:n,flex:"none"},children:[u.jsxs("svg",{width:n,height:n,viewBox:`0 0 ${n} ${n}`,children:[u.jsx("circle",{cx:v,cy:v,r:p,fill:"none",stroke:"rgba(128,128,128,0.18)",strokeWidth:t}),u.jsx("circle",{cx:v,cy:v,r:p,fill:"none",stroke:o,strokeWidth:t,strokeLinecap:"round",strokeDasharray:`${m} ${h-m}`,transform:`rotate(-90 ${v} ${v})`,style:{transition:"stroke-dasharray .4s ease"}})]}),u.jsxs("div",{"aria-hidden":"true",style:{position:"absolute",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",pointerEvents:"none"},children:[u.jsxs("span",{style:{fontSize:22,fontWeight:700,lineHeight:1,color:"#1f2328"},children:[f,u.jsx("span",{style:{fontSize:12,fontWeight:600},children:"%"})]}),u.jsx("span",{style:{marginTop:2,fontSize:11,color:"#5d636a"},children:"完成"})]})]}),u.jsxs("div",{style:{minWidth:0},children:[u.jsx("div",{style:{fontSize:14,fontWeight:600,color:"#1f2328"},children:r}),i&&u.jsxs("div",{style:{marginTop:4,fontSize:12,lineHeight:1.7,color:"#5d636a"},children:["已完成 ",k,"/",a.length," 项",c.length>0&&u.jsxs(u.Fragment,{children:[u.jsx("br",{}),w?`距「${w.title}」还差 ${g}%`:"全部奖励已解锁"]})]})]})]})}}}};Gl.meta=Kl;const m1={title:"夏日狂欢 · 7 日签到",tasks:[{id:"t1",title:"每日签到",progress:1,status:"completed"},{id:"t2",title:"浏览会场 3 个商品",progress:.6,status:"available"},{id:"t3",title:"邀请 1 位好友",progress:0,status:"locked"}],rewards:[{id:"r1",title:"5 元无门槛券",threshold:.5,icon:"🎟️"},{id:"r2",title:"20 元会员券",threshold:.9,icon:"💎"},{id:"r3",title:"终极大礼包",threshold:1,icon:"🎁"}],rules:[]},h1=O(D,[Gl({size:112,label:"签到总进度",order:0}),ne({order:1}),X()]),y1={slug:"progress-ring",title:"环形进度 ProgressRingPlugin",group:"plugin",intro:"SVG 双环 + 中心百分比 + 「距下一档还差 N%」；与进度条同槽上下互补。"};function v1(){return u.jsx(h1,{data:m1})}const x1=Object.freeze(Object.defineProperty({__proto__:null,default:v1,meta:y1},Symbol.toStringTag,{value:"Module"})),k1="ClaimToastPlugin",P1="领取成功轻提示：监听 claimedIds 新增项，在浮层右下角（或顶部居中）淡入「已领取：xx」，到时自动消失。",w1="0.1.0",S1=["ui","反馈","浮层"],b1=[{name:"durationMs",type:"number",default:"2400",description:"单条 toast 停留时长（毫秒）"},{name:"max",type:"number",default:"3",description:"同屏最多条数，超出丢弃最早的"},{name:"position",type:'"bottom-right" | "top-center"',default:'"bottom-right"',description:"出现位置；bottom-right 适合移动端底部拇指区，top-center 适合桌面端"},{name:"message",type:"(title: string) => string",default:"(t) => `已领取：${t}`",description:"自定义文案函数，入参是奖励标题"}],C1=[{name:"renderOverlay",when:"每次渲染；队列为空时返回 null（不占位）",description:"在浮层槽挂载 ClaimToastLayer，内部只渲染当前待显示的 toast 队列"},{name:"claimedIds 变化",when:'context.claimedIds 内容指纹（join("|")）发生变化时',description:"用 diff 找出新增的奖励 id，逐条生成 toast；首屏已有的领取记录不补弹"}],_1=[{name:"ctx.claimedIds",signature:"string[]",description:"读取已领取奖励 id；作为 change source 触发 toast"},{name:"ctx.rewards",signature:"ActivityRewardWithStatus[]",description:"按 id 查奖励标题，用于拼文案"}],R1="内部用 useState 持有 toast 队列、useRef 记录已处理的 claimedIds；不改写上下文状态，也不调用 claim。",T1=["首屏不补弹（挂载时的 claimedIds 视为已读）","多批连续领取各自计时，不会互相吞掉","深底白字，对比度约 14.6:1；role=status + aria-live=polite 播报"],E1=["领取优惠券成功提示","任务奖励到账确认","积分兑换结果反馈"],j1=["与 ConfettiPlugin 可共存：confetti 负责全屏庆祝，toast 负责逐条确认","overlay 容器本身 pointer-events:none，toast 不拦截点击，不会挡住下方按钮"],Jl={name:k1,description:P1,since:w1,tags:S1,props:b1,events:C1,methods:_1,methodsNote:R1,features:T1,useCases:E1,notes:j1};function $1({text:e}){const[n,t]=x.useState(!1);return x.useEffect(()=>{const r=requestAnimationFrame(()=>t(!0));return()=>cancelAnimationFrame(r)},[]),u.jsxs("div",{role:"status",style:{display:"flex",alignItems:"center",gap:8,maxWidth:260,padding:"9px 12px",borderRadius:10,background:"#1f2328",color:"#fff",fontSize:13,lineHeight:1.5,boxShadow:"0 6px 20px rgba(0,0,0,0.22)",opacity:n?1:0,transform:n?"translateY(0)":"translateY(8px)",transition:"opacity .22s ease, transform .22s ease",pointerEvents:"none"},children:[u.jsx("span",{"aria-hidden":"true",style:{flex:"none",width:16,height:16,borderRadius:"50%",background:"#15803d",color:"#fff",fontSize:11,lineHeight:"16px",textAlign:"center"},children:"✓"}),u.jsx("span",{children:e})]})}function A1({ctx:e,durationMs:n,max:t,position:r,message:i}){const[o,s]=x.useState([]),l=x.useRef([...e.claimedIds??[]]),a=(e.claimedIds??[]).join("|"),c=x.useRef(new Map);return x.useEffect(()=>()=>{for(const f of c.current.values())clearTimeout(f);c.current.clear()},[]),x.useEffect(()=>{const f=l.current,p=e.claimedIds??[],h=p.filter(k=>!f.includes(k));if(l.current=p,h.length===0)return;const m=e.rewards??[],v=h.map((k,w)=>{var g,d;return{key:`${k}-${Date.now()}-${w}`,text:(i==null?void 0:i(((g=m.find(y=>y.id===k))==null?void 0:g.title)??"奖励"))??`已领取：${((d=m.find(y=>y.id===k))==null?void 0:d.title)??"奖励"}`}});s(k=>{const w=[...k,...v],g=w.slice(0,Math.max(0,w.length-t));for(const d of g){const y=c.current.get(d.key);y!==void 0&&(clearTimeout(y),c.current.delete(d.key))}return w.slice(-t)});for(const k of v){const w=setTimeout(()=>{c.current.delete(k.key),s(g=>g.filter(d=>d.key!==k.key))},n);c.current.set(k.key,w)}},[a,n,t]),o.length===0?null:u.jsx("div",{"aria-live":"polite",style:{position:"absolute",display:"flex",flexDirection:"column",gap:8,pointerEvents:"none",...r==="top-center"?{top:12,left:"50%",transform:"translateX(-50%)",alignItems:"center"}:{bottom:12,right:12,alignItems:"flex-end"}},children:o.map(f=>u.jsx($1,{text:f.text},f.key))})}const Xi=(e={})=>{const{durationMs:n=2400,max:t=3,position:r="bottom-right",message:i}=e;return{name:"ClaimToastPlugin",version:"0.1.0",description:Jl.description,priority:55,config:e,hooks:{renderOverlay:o=>u.jsx(A1,{ctx:o,durationMs:n,max:t,position:r,message:i})}}};Xi.meta=Jl;const L1={title:"夏日狂欢 · 7 日签到",tasks:[{id:"t1",title:"每日签到",progress:1,status:"completed"},{id:"t2",title:"浏览会场 3 个商品",progress:.6,status:"available"},{id:"t3",title:"邀请 1 位好友",progress:0,status:"locked"}],rewards:[{id:"r1",title:"5 元无门槛券",threshold:.5,icon:"🎟️",desc:"浏览达标即可领取"},{id:"r2",title:"20 元会员券",threshold:.9,icon:"💎",desc:"邀请好友后解锁"}],rules:[]},M1=O(D,[ne(),X(),je(),Xi({durationMs:2600,position:"bottom-right"})]),N1={slug:"claim-toast",title:"领取提示 ClaimToastPlugin",group:"plugin",intro:"领取后右下角淡入「已领取：xx」，2.6s 自动消失；多张排队、互不吞没。"};function z1(){return u.jsx(M1,{data:L1})}const D1=Object.freeze(Object.defineProperty({__proto__:null,default:z1,meta:N1},Symbol.toStringTag,{value:"Module"})),I1="ShareBoostPlugin",O1="好友助力：分段名额进度 + 助力头像堆（超出折叠 +N）+「还差 N 人」+ 邀请按钮，落在活动底部。",F1="0.1.0",B1=["ui","底部","社交"],W1=[{name:"title",type:"string",default:'"邀请好友助力"',description:"区块标题"},{name:"total",type:"number",default:"3",description:"未传 data.share 时的默认可助力总次数（优先级低于 data.share.total）"},{name:"used",type:"number",default:"0",description:"未传 data.share 时的默认已用次数（优先级低于 data.share.used）"},{name:"onInvite",type:"() => void",default:"—",description:"点「邀请助力」回调；传入时组件不自增，由业务侧回写 data.share.used 驱动"},{name:"maxAvatars",type:"number",default:"5",description:"头像最多显示几个，超出折叠为 +N"},{name:"order",type:"number",default:"0",description:"同槽位排序键：与 LeaderboardPlugin 同在 renderFooter 时用它决定上下顺序"}],H1=[{name:"renderFooter",when:"每次渲染；恒定渲染（无数据时用 config 兜底）",description:"在底部社交槽渲染助力条"},{name:"onInvite",when:"点击「邀请助力」且未满额时",description:"冒泡给消费方；未传则组件内乐观自增 used"}],U1=[{name:"ctx.data.share",signature:"{ total: number; used: number; helpers?: { id, name, avatar? }[] }",description:"读取助力真值：total 决定分段数、used 决定点亮段、helpers 渲染头像堆"}],V1="内部 useState 保存乐观 used，并在 data.share.used 变化时同步；不调用 ctx.setState 污染活动状态。",Y1=["分段进度把「还差几次」做成可数的格子，比百分比更好理解","头像堆 -8px 叠压，超出折叠 +N","满额按钮切 #5d636a 深灰 + 白字（5.4:1），不用 opacity 压字"],Q1=["砍价 / 助力解锁","邀请注册奖励","拼团人数进度"],K1=["传 onInvite 时务必回写 data.share.used，否则按钮点了没有视觉变化","helpers 少于 used 时不补假头像，只按真实列表渲染"],Xl={name:I1,description:O1,since:F1,tags:B1,props:W1,events:H1,methods:U1,methodsNote:V1,features:Y1,useCases:Q1,notes:K1};function $o(e,n,t,r){const i=Number.isFinite(e)?e:r;return Math.max(n,Math.min(t,Math.floor(i)))}function G1({ctx:e,title:n,total:t,used:r,onInvite:i,maxAvatars:o}){var y;const s=(y=e.data)==null?void 0:y.share,l=$o((s==null?void 0:s.total)??t,0,20,3),a=$o((s==null?void 0:s.used)??r,0,l,0),[c,f]=x.useState(a);x.useEffect(()=>f(a),[a]);const p=s==null?void 0:s.helpers,h=Array.isArray(p)?p.filter(P=>P&&typeof P=="object"):[],m=Math.min(c,l),v=m>=l,k=$o(o,0,10,5),w=h.slice(0,k),g=Math.max(0,h.length-w.length),d=()=>{if(!v){if(i){i();return}f(P=>Math.min(l,P+1))}};return u.jsxs("section",{"aria-label":n,style:{padding:"12px 14px",borderRadius:12,border:"1px solid rgba(128,128,128,0.18)",background:"#fff"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[u.jsx("span",{style:{flex:1,fontSize:14,fontWeight:600,color:"#1f2328"},children:n}),u.jsxs("span",{style:{fontSize:12,color:"#5d636a"},children:["今日助力 ",u.jsx("strong",{style:{color:"#1f2328"},children:m}),"/",l]})]}),u.jsx("div",{role:"img","aria-label":`助力进度 ${m}/${l}`,style:{display:"flex",gap:4,marginTop:10},children:Array.from({length:l},(P,S)=>u.jsx("span",{style:{flex:1,height:6,borderRadius:3,background:S<m?"#cf4407":"rgba(128,128,128,0.18)",transition:"background .25s ease"}},S))}),u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginTop:12},children:[u.jsxs("div",{style:{display:"flex",flex:1,alignItems:"center",minWidth:0},children:[w.map((P,S)=>u.jsx("span",{title:P.name??"",style:{width:26,height:26,marginLeft:S===0?0:-8,borderRadius:"50%",border:"2px solid #fff",background:"rgba(207,68,7,0.12)",color:"#a33a06",fontSize:12,lineHeight:"22px",textAlign:"center",overflow:"hidden",whiteSpace:"nowrap"},children:P.avatar??(P.name?String(P.name).slice(0,1):"?")},P.id??`helper-${S}`)),g>0&&u.jsxs("span",{style:{marginLeft:6,fontSize:12,color:"#5d636a"},children:["+",g]}),u.jsx("span",{style:{marginLeft:w.length===0?0:8,fontSize:12,lineHeight:1.6,color:"#5d636a"},children:v?"今日助力已满，明天再来":`还差 ${l-m} 人解锁下一档奖励`})]}),u.jsx("button",{type:"button",disabled:v,onClick:d,style:{flex:"none",border:"none",borderRadius:999,padding:"7px 14px",fontSize:13,fontWeight:600,background:v?"#5d636a":"#cf4407",color:"#fff",cursor:v?"default":"pointer"},children:v?"今日已满":"邀请助力"})]})]})}const Zi=(e={})=>{const{title:n="邀请好友助力",total:t=3,used:r=0,onInvite:i,maxAvatars:o=5}=e;return{name:"ShareBoostPlugin",version:"0.1.0",description:Xl.description,priority:20,config:e,hooks:{renderFooter:s=>u.jsx(G1,{ctx:s,title:n,total:t,used:r,onInvite:i,maxAvatars:o})}}};Zi.meta=Xl;const J1={title:"夏日狂欢 · 7 日签到",tasks:[{id:"t1",title:"每日签到",progress:1,status:"completed"},{id:"t2",title:"浏览会场 3 个商品",progress:.6,status:"available"},{id:"t3",title:"邀请 1 位好友",progress:0,status:"locked"}],rewards:[{id:"r1",title:"5 元无门槛券",threshold:.5,icon:"🎟️"}],rules:[],share:{total:3,used:2,helpers:[{id:"u1",name:"阿柚",avatar:"🍊"},{id:"u2",name:"小满",avatar:"🌾"}]}},X1=O(D,[ne(),X(),Zi({title:"邀请好友助力",maxAvatars:5})]),Z1={slug:"share-boost",title:"好友助力 ShareBoostPlugin",group:"plugin",intro:"分段名额 + 头像堆 + 「还差 N 人」；满额按钮切深灰，不用 opacity 压字。"};function q1(){return u.jsx(X1,{data:J1})}const ex=Object.freeze(Object.defineProperty({__proto__:null,default:q1,meta:Z1},Symbol.toStringTag,{value:"Module"})),nx="LeaderboardPlugin",tx="好友榜：按 score 降序取前 N 名，第一名强调橙名次牌，isMe 行浅橙底高亮；自己不在前 N 时底部补真实名次。",rx="0.1.0",ix=["ui","底部","社交","榜单"],ox=[{name:"title",type:"string",default:'"好友榜"',description:"榜单标题"},{name:"topN",type:"number",default:"3",description:"展示前几名"},{name:"unit",type:"string",default:'"分"',description:"分数单位后缀"},{name:"highlightMe",type:"boolean",default:"true",description:"是否高亮 isMe 行并在名字后加「我」标签"},{name:"emptyText",type:"string",default:'"暂无排行数据"',description:"data.leaderboard 为空时的占位文案"},{name:"order",type:"number",default:"0",description:"同槽位排序键：与 ShareBoostPlugin 同在 renderFooter 时决定上下顺序"}],sx=[{name:"renderFooter",when:"每次渲染；data.leaderboard 为空时渲染占位卡片而非返回 null",description:"在底部社交槽渲染榜单（前 N 名 + 可选「我的名次」分隔行）"}],lx=[{name:"ctx.data.leaderboard",signature:"ActivityLeaderboardEntry[]",description:"读取榜单原始数据（id / name / score / avatar? / isMe?），插件内排序后切片"}],ax="只读数据并做不可变排序（[...list] 复制后 sort），不修改 ctx.data 原数组，也不调用 claim / setState。",ux=["排序在插件内完成，业务侧无需预排序","自己不在前 N 时用虚线上分隔并补真实名次，避免「我消失了」","名次牌 1 名 #cf4407 / 2-3 名 #5d636a，白字均 ≥5:1"],cx=["好友步数榜","邀请人数排行","积分 PK 榜"],dx=["score 相同按原始数组顺序稳定排列（Array.prototype.sort 在 ES2019+ 稳定）","topN 大于实际人数时按实际人数渲染"],Zl={name:nx,description:tx,since:rx,tags:ix,props:ox,events:sx,methods:lx,methodsNote:ax,features:ux,useCases:cx,notes:dx};function fx(e){return e===1?{background:"#cf4407",color:"#fff"}:e<=3?{background:"#5d636a",color:"#fff"}:{background:"rgba(128,128,128,0.14)",color:"#5d636a"}}function Au({entry:e,rank:n,unit:t,highlightMe:r}){const i=r&&e.isMe;return u.jsxs("li",{style:{display:"flex",alignItems:"center",gap:10,padding:"7px 8px",borderRadius:8,background:i?"rgba(207,68,7,0.08)":"transparent"},children:[u.jsx("span",{"aria-label":`第 ${n} 名`,style:{flex:"none",width:20,height:20,borderRadius:6,fontSize:12,fontWeight:700,lineHeight:"20px",textAlign:"center",...fx(n)},children:n}),u.jsx("span",{"aria-hidden":"true",style:{flex:"none",width:26,height:26,borderRadius:"50%",background:"rgba(207,68,7,0.1)",color:"#a33a06",fontSize:12,lineHeight:"26px",textAlign:"center",overflow:"hidden",whiteSpace:"nowrap"},children:e.avatar??e.name.slice(0,1)}),u.jsxs("span",{style:{flex:1,minWidth:0,fontSize:13,color:"#1f2328",fontWeight:i?700:400,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:[e.name,i&&u.jsx("span",{style:{marginLeft:6,padding:"0 5px",borderRadius:4,background:"#cf4407",color:"#fff",fontSize:11,fontWeight:600,lineHeight:"16px",display:"inline-block"},children:"我"})]}),u.jsxs("span",{style:{flex:"none",fontSize:13,fontWeight:700,color:"#1f2328"},children:[e.score,u.jsx("span",{style:{marginLeft:2,fontSize:11,fontWeight:400,color:"#5d636a"},children:t})]})]})}function px(e){return Array.isArray(e)?e.filter(n=>!!n&&typeof n=="object").map((n,t)=>{const r=Number(n.score);return{id:String(n.id??`entry-${t}`),name:String(n.name??"?"),score:Number.isFinite(r)?r:0,avatar:typeof n.avatar=="string"?n.avatar:void 0,isMe:!!n.isMe}}):[]}function gx({ctx:e,title:n,topN:t,unit:r,highlightMe:i,emptyText:o}){var h;const s=(h=e.data)==null?void 0:h.leaderboard,l=x.useMemo(()=>px(s).sort((m,v)=>v.score-m.score),[s]),a=Math.max(1,Math.min(50,Math.floor(Number.isFinite(t)?t:3)));if(l.length===0)return u.jsx("section",{"aria-label":n,style:{padding:"12px 14px",borderRadius:12,border:"1px solid rgba(128,128,128,0.18)",fontSize:13,color:"#5d636a"},children:o});const c=l.slice(0,a),f=l.findIndex(m=>m.isMe),p=i&&f>=a;return u.jsxs("section",{"aria-label":n,style:{padding:"12px 14px",borderRadius:12,border:"1px solid rgba(128,128,128,0.18)",background:"#fff"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:8,marginBottom:6},children:[u.jsx("span",{style:{fontSize:14,fontWeight:600,color:"#1f2328"},children:n}),u.jsxs("span",{style:{fontSize:12,color:"#5d636a"},children:["共 ",l.length," 人参与"]})]}),u.jsx("ol",{style:{margin:0,padding:0,listStyle:"none"},children:c.map((m,v)=>u.jsx(Au,{entry:m,rank:v+1,unit:r,highlightMe:i},`${m.id}-${v}`))}),p&&u.jsxs(u.Fragment,{children:[u.jsx("div",{"aria-hidden":"true",style:{margin:"6px 0",borderTop:"1px dashed rgba(128,128,128,0.3)"}}),u.jsx("ol",{style:{margin:0,padding:0,listStyle:"none"},children:u.jsx(Au,{entry:l[f],rank:f+1,unit:r,highlightMe:i})})]})]})}const ql=(e={})=>{const{title:n="好友榜",topN:t=3,unit:r="分",highlightMe:i=!0,emptyText:o="暂无排行数据"}=e;return{name:"LeaderboardPlugin",version:"0.1.0",description:Zl.description,priority:25,config:e,hooks:{renderFooter:s=>u.jsx(gx,{ctx:s,title:n,topN:t,unit:r,highlightMe:i,emptyText:o})}}};ql.meta=Zl;const mx={title:"夏日狂欢 · 7 日签到",tasks:[{id:"t1",title:"每日签到",progress:1,status:"completed"},{id:"t2",title:"浏览会场 3 个商品",progress:.6,status:"available"},{id:"t3",title:"邀请 1 位好友",progress:0,status:"locked"}],rewards:[{id:"r1",title:"5 元无门槛券",threshold:.5,icon:"🎟️"}],rules:[],leaderboard:[{id:"u1",name:"阿柚",score:1280,avatar:"🍊"},{id:"me",name:"我",score:960,avatar:"🙋",isMe:!0},{id:"u2",name:"小满",score:910,avatar:"🌾"},{id:"u3",name:"大白",score:640,avatar:"🐻"}],share:{total:3,used:1,helpers:[{id:"u1",name:"阿柚",avatar:"🍊"}]}},hx=O(D,[X(),ql({title:"好友积分榜",topN:3,order:0}),Zi({title:"邀请好友助力",order:1})]),yx={slug:"leaderboard",title:"好友榜 LeaderboardPlugin",group:"plugin",intro:"前 3 名 + 我的名次高亮；与助力条同槽靠 order 定序，互不重影。"};function vx(){return u.jsx(hx,{data:mx})}const xx=Object.freeze(Object.defineProperty({__proto__:null,default:vx,meta:yx},Symbol.toStringTag,{value:"Module"})),kx="AnnouncementPlugin",Px="活动公告条：横向滚动播报多条公告，纯 CSS 跑马灯（无定时器），悬停暂停、减动效偏好下静止。",wx="0.1.0",Sx=["ui","头部","公告","跑马灯"],bx=[{name:"items",type:"string[]",default:"[]",description:"公告条目；data.announcements 非空时以数据为准，config 只在无数据时兜底"},{name:"label",type:"string",default:'"公告"',description:"左侧标签文案"},{name:"icon",type:"string",default:'"📢"',description:"标签前的图标（emoji 或字符）"},{name:"speedSec",type:"number",default:"16",description:"滚动一轮的秒数，越大越慢"},{name:"order",type:"number",default:"0",description:"同槽位排序键：与 ActivityHeaderPlugin 同在 renderHeader 时调上下顺序"}],Cx=[{name:"renderHeader",when:"每次渲染；公告条目为空时返回 null（该区块不进产物）",description:"在头部槽渲染公告条；CSS 动画循环，不注册任何定时器，因此无事件回调"}],_x=[{name:"ctx.data.announcements",signature:"string[] | undefined",description:"读取公告数据源；非空时优先于 config.items"}],Rx="无内部状态、无状态写操作：纯函数式渲染，公告内容变化走父级 data 更新即可（插件自动跟随重渲染）。",Tx=["纯 CSS 跑马灯，不持有 setInterval，后台标签页不会积压回调","条目复制一份首尾相接，-50% 位移即无缝循环","悬停暂停（.va-announce-track:hover）、prefers-reduced-motion 下自动静止","标签用 #cf4407 底 + 白字，正文 #1f2328 压浅橙底，均满足 ADR-13"],Ex=["活动开场公告","中奖名单播报","规则变更提醒"],jx=["priority 8 高于 ActivityHeaderPlugin 的 5，同装时公告条显示在横幅上方；需要反过来就传 order 调整","公告文字建议单条不超过 30 字，过长会拖慢一轮的阅读节奏（可调大 speedSec）"],ea={name:kx,description:Px,since:wx,tags:Sx,props:bx,events:Cx,methods:_x,methodsNote:Rx,features:Tx,useCases:Ex,notes:jx},$x=`@keyframes va-announce-scroll{from{transform:translateX(0)}to{transform:translateX(-50%)}}
@media (prefers-reduced-motion: reduce){.va-announce-track{animation:none!important;transform:none!important}}
.va-announce-track:hover{animation-play-state:paused}`,na=(e={})=>{const{items:n=[],label:t="公告",icon:r="📢",speedSec:i=16}=e;return{name:"AnnouncementPlugin",version:"0.1.0",description:ea.description,priority:8,config:e,hooks:{renderHeader:o=>{var c;const s=(c=o.data)==null?void 0:c.announcements,l=(s&&s.length>0?s:n).filter(f=>!!f);if(l.length===0)return null;const a=[...l,...l];return u.jsxs("section",{"aria-label":"活动公告",style:{display:"flex",alignItems:"center",gap:8,overflow:"hidden",padding:"6px 10px",borderRadius:999,background:"#fff6ef",border:"1px solid rgba(207,68,7,0.14)"},children:[u.jsx("style",{children:$x}),u.jsxs("span",{style:{flex:"none",display:"inline-flex",alignItems:"center",gap:4,padding:"2px 8px",borderRadius:999,background:"#cf4407",color:"#fff",fontSize:12,fontWeight:600,lineHeight:1.7},children:[u.jsx("span",{"aria-hidden":"true",children:r}),t]}),u.jsx("div",{style:{flex:1,minWidth:0,overflow:"hidden"},children:u.jsx("div",{className:"va-announce-track",style:{display:"inline-flex",gap:28,whiteSpace:"nowrap",willChange:"transform",animation:`va-announce-scroll ${i}s linear infinite`},children:a.map((f,p)=>u.jsx("span",{"aria-hidden":p>=l.length?!0:void 0,style:{fontSize:12,lineHeight:1.7,color:"#1f2328"},children:f},`${f}-${p}`))})})]})}}}};na.meta=ea;const Ax={title:"夏日狂欢 · 7 日签到",announcements:["8.1-8.7 全场券 5 折起，先领券再下单","每日 20:00 抽 20 元无门槛券，限前 1000 名","邀请好友下单再得 10 元红包，上不封顶"],tasks:[{id:"t1",title:"每日签到",progress:1,status:"completed"},{id:"t2",title:"浏览会场 3 个商品",progress:.6,status:"available"},{id:"t3",title:"邀请 1 位好友",progress:0,status:"locked"}],rewards:[{id:"r1",title:"5 元无门槛券",threshold:.5,icon:"🎟️"}],rules:[]},Lx=O(D,[na({label:"公告",speedSec:18}),Ji({subtitle:"连续签到 7 天，最高领 20 元会员券",icon:"☀️"}),ne(),X()]),Mx={slug:"announcement",title:"公告条 AnnouncementPlugin",group:"plugin",intro:"纯 CSS 跑马灯播报多条公告，悬停暂停；与头部横幅同槽，靠 priority 定在横幅之上。"};function Nx(){return u.jsx(Lx,{data:Ax})}const zx=Object.freeze(Object.defineProperty({__proto__:null,default:Nx,meta:Mx},Symbol.toStringTag,{value:"Module"})),Dx="CheckinCalendarPlugin",Ix="签到日历：N 个格子展示已签 / 今日待签 / 未开始三态，附连续天数与签到按钮，点按钮走 onCheckin 或本地乐观 +1。",Ox="0.1.0",Fx=["ui","进度","签到","日历"],Bx=[{name:"title",type:"string",default:'"连续签到"',description:"卡片标题"},{name:"days",type:"number",default:"7",description:"共几天；data.checkin.days 存在时以数据为准"},{name:"done",type:"number",default:"0",description:"已完成天数；data.checkin.done 存在时以数据为准"},{name:"todayIndex",type:"number",default:"done",description:"今天对应的格子下标（0-based），默认等于 done 即「今天还没签」"},{name:"onCheckin",type:"() => void",default:"undefined",description:"点「今日签到」的回调；不传则组件内乐观 +1，传了由业务侧回写 data.checkin.done"},{name:"showButton",type:"boolean",default:"true",description:"是否显示签到按钮（纯展示场景可关掉）"},{name:"order",type:"number",default:"0",description:"同槽位排序键：与 ProgressFx / ProgressRing / MilestoneBar 同在 renderProgress 时定上下"}],Wx=[{name:"onCheckin",when:"点击「今日签到」且今天尚未签到、本轮未签满时",description:"通知业务侧落库；插件在收到回调前不改本地态，业务侧需回写 data.checkin.done 才会推进格子"},{name:"renderProgress",when:"每次渲染",description:"在顶部进度槽渲染签到日历；showButton 为 false 时只渲染格子"}],Hx=[{name:"ctx.data.checkin",signature:"{ days?: number; done: number; todayIndex?: number }",description:"读取签到态；缺省时逐字段回退到 config"}],Ux="无对外命令式方法。未传 onCheckin 时内部用 useState 做乐观 +1（上限 days），传了则以 data 为准。",Vx=["三态格子：已签实心橙 + 白勾、今日虚线橙框「今」、未开始灰框","签满后按钮变「已完成」并禁用，提示语同步切换","格子宽度 flex:1 自适应，N=7 / 14 都不会溢出","全部色值满足 ADR-13：#fff 白字压 #cf4407 4.69:1、压 #5d636a 6.0:1"],Yx=["7 日签到","连续打卡领积分","任务型活动每日激励"],Qx=["todayIndex 大于 done 时（跳签场景）今天格子显示为「待签到」，中间断签格保持未开始","本插件不计算「连续」的业务语义，连续天数由业务侧在 done 里表达"],ta={name:Dx,description:Ix,since:Ox,tags:Fx,props:Bx,events:Wx,methods:Hx,methodsNote:Ux,features:Vx,useCases:Yx,notes:Qx};function Ao(e,n,t,r){const i=Number.isFinite(e)?e:r;return Math.max(n,Math.min(t,Math.floor(i)))}function Kx({ctx:e,title:n,days:t,done:r,todayIndex:i,onCheckin:o,showButton:s}){var w;const l=(w=e.data)==null?void 0:w.checkin,a=Ao((l==null?void 0:l.days)??t,1,31,7),c=Ao((l==null?void 0:l.done)??r,0,a,0),f=Ao((l==null?void 0:l.todayIndex)??i??c,0,Math.max(0,a-1),0),[p,h]=x.useState(c);x.useEffect(()=>h(c),[c]);const m=p>=a,v=p>f||m,k=()=>{if(!v){if(o){o();return}h(g=>Math.min(a,g+1))}};return u.jsxs("section",{"aria-label":n,style:{padding:"12px 14px",borderRadius:12,border:"1px solid rgba(128,128,128,0.18)",background:"#fff"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[u.jsx("span",{style:{flex:1,fontSize:14,fontWeight:600,color:"#1f2328"},children:n}),u.jsxs("span",{style:{fontSize:12,color:"#5d636a"},children:["已连续 ",u.jsx("strong",{style:{color:"#1f2328"},children:p}),"/",a," 天"]})]}),u.jsx("div",{style:{display:"flex",gap:6,marginTop:10},children:Array.from({length:a},(g,d)=>{const y=d<p,P=d===f&&!y&&!m,S=y?"#cf4407":"#fff",b=y?"1px solid #cf4407":P?"1px dashed #cf4407":"1px solid rgba(128,128,128,0.22)",_=y?"#fff":P?"#cf4407":"#5d636a";return u.jsxs("div",{"data-testid":"checkin-cell","aria-label":`第 ${d+1} 天${y?"已签到":P?"待签到":"未开始"}`,style:{flex:1,minWidth:0,height:46,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:2,borderRadius:8,background:S,border:b,color:_,transition:"background .2s ease"},children:[u.jsxs("span",{style:{fontSize:11,lineHeight:1.3},children:[d+1,"天"]}),u.jsx("span",{style:{fontSize:13,fontWeight:700,lineHeight:1},children:y?"✓":P?"今":"·"})]},d)})}),s&&u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginTop:10},children:[u.jsx("span",{style:{flex:1,fontSize:12,lineHeight:1.6,color:"#5d636a"},children:m?"本轮签到已完成，奖励已全部发放":v?"今天已签到，明天再来":`签满 ${a} 天可得终极大礼包`}),u.jsx("button",{type:"button",disabled:v,onClick:k,style:{flex:"none",border:"none",borderRadius:999,padding:"7px 14px",fontSize:13,fontWeight:600,background:v?"#5d636a":"#cf4407",color:"#fff",cursor:v?"default":"pointer"},children:m?"已完成":v?"已签到":"今日签到"})]})]})}const qi=(e={})=>{const{title:n="连续签到",days:t=7,done:r=0,todayIndex:i,onCheckin:o,showButton:s=!0}=e;return{name:"CheckinCalendarPlugin",version:"0.1.0",description:ta.description,priority:10,config:e,hooks:{renderProgress:l=>u.jsx(Kx,{ctx:l,title:n,days:t,done:r,todayIndex:i,onCheckin:o,showButton:s})}}};qi.meta=ta;const Gx={title:"夏日狂欢 · 7 日签到",checkin:{days:7,done:3},tasks:[{id:"t1",title:"每日签到",progress:1,status:"completed"},{id:"t2",title:"浏览会场 3 个商品",progress:.6,status:"available"},{id:"t3",title:"邀请 1 位好友",progress:0,status:"locked"}],rewards:[{id:"r1",title:"5 元无门槛券",threshold:.5,icon:"🎟️"}],rules:[]},Jx=O(D,[qi({title:"连续签到 · 7 天",order:0}),ne({order:1}),X()]),Xx={slug:"checkin",title:"签到日历 CheckinCalendarPlugin",group:"plugin",intro:"N 格三态日历（已签 / 今日 / 未开始），点「今日签到」乐观 +1；与进度条同槽靠 order 定序。"};function Zx(){return u.jsx(Jx,{data:Gx})}const qx=Object.freeze(Object.defineProperty({__proto__:null,default:Zx,meta:Xx},Symbol.toStringTag,{value:"Module"})),ek="TaskTabsPlugin",nk="分组任务清单：页签切换（每日 / 成长 / 邀请…），每个页签带完成度计数，组内沿用任务行样式与「去完成」动作。",tk="0.1.0",rk=["ui","任务","分组","页签","独占槽位"],ik=[{name:"tabs",type:"ActivityTaskGroup[]",default:"[]",description:"页签定义（key / label / icon?）；data.taskGroups 非空时以数据为准"},{name:"defaultTab",type:"string",default:"第一个页签",description:"默认选中的页签 key"},{name:"showProgress",type:"boolean",default:"true",description:"是否展示未完成任务的进度条"},{name:"doneLabel",type:"string",default:'"已完成"',description:"完成态文案"},{name:"emptyText",type:"string",default:'"该分组暂无任务"',description:"页签下无任务时的占位文案（不返回 null，避免页签跳动）"},{name:"order",type:"number",default:"0",description:"同槽位排序键（本插件独占 renderTasks，一般用不到）"}],ok=[{name:"onTaskAction",when:"点击任务行的动作按钮（task.actionLabel 存在且未完成）",description:"透传 ctx.props.onTaskAction(taskId)，由业务侧跳转或标记完成"},{name:"renderTasks",when:"每次渲染；任务为空时返回 null",description:"在任务槽渲染页签 + 当前分组任务行"}],sk=[{name:"ctx.tasks",signature:"ActivityTask[]",description:"读取全量任务（含 group / status / progress），按当前页签过滤后渲染"}],lk="页签切换是组件内部 useState，不写回 ctx；需要外部控制选中页签请用 defaultTab 配合重挂载。",ak=["页签带完成度计数（2/3），未选中为白底灰字、选中为橙底白字","没有分组数据时（data.taskGroups 与 config.tabs 都为空）自动给一个「全部」页签，聚合所有任务","独占 renderTasks：与 TaskListPlugin 同时装配时本插件 priority 更高（22 > 20）自动胜出","页签横向可滚，移动端窄屏不换行挤压"],uk=["每日任务 / 成长任务 / 邀请任务分栏","多玩法活动的任务中心","任务量大于 8 条时的分类收纳"],ck=["任务未标 group 时只会出现在『全部』页签下","taskGroups 被外部替换导致当前页签消失时，自动回落到第一个页签","与 TaskListPlugin 二选一：同时装会在装配期打印去重警告并丢弃 TaskListPlugin"],ra={name:ek,description:nk,since:tk,tags:rk,props:ik,events:ok,methods:sk,methodsNote:lk,features:ak,useCases:uk,notes:ck},dk={locked:"未解锁",available:"进行中",completed:"已完成"},fk={locked:"#5d636a",available:"#cf4407",completed:"#15803d"},pk={key:"all",label:"全部"};function gk({ctx:e,tabs:n,defaultTab:t,showProgress:r,doneLabel:i,emptyText:o}){const s=e.data,l=s==null?void 0:s.taskGroups,a=l&&l.length>0?l:n.length>0?n:[pk],c=e.tasks??[],f=Xn.useId(),[p,h]=x.useState(t??a[0].key),m=a.some(d=>d.key===p)?p:a[0].key,v=x.useRef(new Map),k=d=>{var y;(y=v.current.get(d))==null||y.focus(),h(d)},w=(d,y)=>{const P=a.map(_=>_.key),S=P.indexOf(y);if(S<0)return;let b=null;d.key==="ArrowRight"?b=P[(S+1)%P.length]:d.key==="ArrowLeft"?b=P[(S-1+P.length)%P.length]:d.key==="Home"?b=P[0]:d.key==="End"&&(b=P[P.length-1]),b!==null&&(d.preventDefault(),k(b))},g=m==="all"?c:c.filter(d=>d.group===m);return u.jsxs("section",{"aria-label":"任务清单",children:[u.jsx("div",{role:"tablist","aria-label":"任务分组",style:{display:"flex",gap:6,overflowX:"auto",paddingBottom:2},children:a.map(d=>{const y=d.key==="all"?c:c.filter(b=>b.group===d.key),P=y.filter(b=>b.status==="completed").length,S=d.key===m;return u.jsxs("button",{ref:b=>{b?v.current.set(d.key,b):v.current.delete(d.key)},type:"button",role:"tab",id:`${f}-tab-${d.key}`,"aria-selected":S,"aria-controls":`${f}-panel`,tabIndex:S?0:-1,"data-testid":"task-tab",onClick:()=>h(d.key),onKeyDown:b=>w(b,d.key),style:{flex:"none",display:"inline-flex",alignItems:"center",gap:5,border:S?"1px solid #cf4407":"1px solid rgba(128,128,128,0.22)",borderRadius:999,padding:"6px 12px",fontSize:13,fontWeight:S?600:400,background:S?"#cf4407":"#fff",color:S?"#fff":"#5d636a",cursor:"pointer"},children:[d.icon&&u.jsx("span",{"aria-hidden":"true",children:d.icon}),d.label,u.jsxs("span",{style:{fontSize:11},children:[P,"/",y.length]})]},d.key)})}),u.jsx("div",{id:`${f}-panel`,role:"tabpanel","aria-labelledby":`${f}-tab-${m}`,style:{marginTop:10},children:g.length===0?u.jsx("div",{style:{padding:"18px 0",textAlign:"center",fontSize:13,color:"#5d636a"},children:o}):u.jsx("div",{style:{display:"flex",flexDirection:"column",gap:10},children:g.map(d=>{const y=fk[d.status],P=Math.round(Math.max(0,Math.min(1,d.progress??0))*100);return u.jsxs("div",{"data-testid":"activity-task",style:{display:"flex",alignItems:"center",gap:10,padding:"10px 12px",borderRadius:10,border:"1px solid rgba(128,128,128,0.18)",background:"#fff"},children:[u.jsxs("div",{style:{flex:1,minWidth:0},children:[u.jsx("div",{style:{fontWeight:600,fontSize:14,color:"#1f2328"},children:d.title}),d.desc&&u.jsx("div",{style:{fontSize:12,color:"#5d636a",marginTop:2},children:d.desc}),r&&d.status!=="completed"&&u.jsx("div",{style:{marginTop:6,height:4,borderRadius:2,background:"rgba(128,128,128,0.18)"},children:u.jsx("div",{style:{width:`${P}%`,height:"100%",borderRadius:2,background:"#cf4407"}})})]}),u.jsx("span",{style:{fontSize:12,color:y,fontWeight:600,whiteSpace:"nowrap"},children:d.status==="completed"?i:dk[d.status]}),d.actionLabel&&d.status!=="completed"&&u.jsx("button",{type:"button",onClick:()=>{var S,b;return(b=(S=e.props).onTaskAction)==null?void 0:b.call(S,d.id)},style:{border:"none",borderRadius:999,padding:"6px 14px",background:"#cf4407",color:"#fff",fontSize:13,cursor:"pointer"},children:d.actionLabel})]},d.id)})})})]})}const eo=(e={})=>{const{tabs:n=[],defaultTab:t,showProgress:r=!0,doneLabel:i="已完成",emptyText:o="该分组暂无任务"}=e;return{name:"TaskTabsPlugin",version:"0.1.0",description:ra.description,priority:22,config:e,exclusiveSlots:["renderTasks"],hooks:{renderTasks:s=>(s.tasks??[]).length===0?null:u.jsx(gk,{ctx:s,tabs:n,defaultTab:t,showProgress:r,doneLabel:i,emptyText:o})}}};eo.meta=ra;const mk={title:"夏日狂欢 · 任务中心",taskGroups:[{key:"daily",label:"每日",icon:"📅"},{key:"growth",label:"成长",icon:"🌱"},{key:"invite",label:"邀请",icon:"🤝"}],tasks:[{id:"d1",title:"每日签到",desc:"连续签到领积分",progress:1,status:"completed",group:"daily",actionLabel:"已签到"},{id:"d2",title:"浏览 3 个商品",desc:"了解活动好物",progress:1,status:"completed",group:"daily",actionLabel:"已完成"},{id:"g1",title:"收藏店铺",desc:"收藏后抽 20 元券",progress:.5,status:"available",group:"growth",actionLabel:"去收藏"},{id:"g2",title:"加入会员",desc:"享双倍积分",progress:0,status:"locked",group:"growth",actionLabel:"去开通"},{id:"i1",title:"邀请 1 位好友",desc:"好友下单后到账",progress:0,status:"locked",group:"invite",actionLabel:"去邀请"},{id:"i2",title:"好友助力 3 人",desc:"解锁终极大礼包",progress:0,status:"locked",group:"invite",actionLabel:"去助力"}],rewards:[{id:"r1",title:"5 元无门槛券",threshold:.5,icon:"🎟️"},{id:"r2",title:"20 元会员券",threshold:.9,icon:"💎"}],rules:[]},hk=O(D,[ne(),eo({defaultTab:"daily",doneLabel:"已完成"}),je()]),yk={slug:"task-tabs",title:"分组任务 TaskTabsPlugin",group:"plugin",intro:"页签切换 + 每组完成度计数；独占 renderTasks，与 TaskList 二选一。"};function vk(){return u.jsx(hk,{data:mk})}const xk=Object.freeze(Object.defineProperty({__proto__:null,default:vk,meta:yk},Symbol.toStringTag,{value:"Module"})),kk="JackpotPlugin",Pk="九宫格抽奖：8 格环绕中心按钮，逐格高亮减速后停在中奖格；次数用完自动禁用。",wk="0.1.0",Sk=["ui","玩法","抽奖","九宫格","底部"],bk=[{name:"title",type:"string",default:'"幸运抽奖"',description:"卡片标题"},{name:"prizes",type:"JackpotPrize[]",default:"8 个内置奖励",description:"奖池 { id, label, icon? }；固定 8 格，不足补「谢谢参与」"},{name:"times",type:"number",default:"3",description:"未传 remainingTimes 时的初值；每抽按服务端返回或本地 -1，归零禁用"},{name:"remainingTimes",type:"number",default:"undefined",description:"受控次数；传入后组件不递减，由业务侧回写"},{name:"drawResult",type:"() => JackpotDrawResult | Promise<JackpotDrawResult>",default:"undefined",description:"服务端抽奖返回 { index, remaining? }；传入后不用本地随机"},{name:"onDraw",type:"(prize: JackpotPrize, index: number) => void",default:"undefined",description:"中奖通知（动画结束后）；仅通知不扣次数"},{name:"order",type:"number",default:"0",description:"同槽位排序键：与助力条 / 榜单同在 renderFooter 时定上下"}],Ck=[{name:"onDraw",when:"抽奖动画跑完并确定中奖格后",description:"回传中奖奖励与下标，供发奖 / 埋点"},{name:"renderFooter",when:"每次渲染",description:"底部槽渲染九宫格卡片（含按钮与结果文案）"}],_k=[{name:"内部 draw()",signature:"() => Promise<void>",description:"开始抽取；drawing 或次数为 0 时忽略；失败展示错误并恢复按钮"}],Rk="内部状态机（remaining / active / drawing / result），不暴露 ref 方法；外部触发请走自定义按钮 + 事件。",Tk=["步数 = 8×2 + winner + 1，停格必为中奖格且至少转两圈","帧间隔 60 + step×5 ms 递增，尾部有减速手感","结果区 aria-live=polite，中奖色 #a33a06 对白底 6.6:1","卸载统一 clearTimeout，避免对已卸载组件 setState"],Ek=["抽奖活动主玩法","任务完成后的奖励抽取","积分兑换转盘"],jk=["生产请传 drawResult 由服务端决定中奖格与次数；本地随机仅演示，不能作为发奖依据","中心按钮随状态切换：抽一次 / 抽取中 / 已抽完","九宫格固定 3×3，格子 minHeight 56，移动端一屏可容纳"],ia={name:kk,description:Pk,since:wk,tags:Sk,props:bk,events:Ck,methods:_k,methodsNote:Rk,features:Tk,useCases:Ek,notes:jk},$k=[{id:"p1",label:"5 元券",icon:"🎟️"},{id:"p2",label:"谢谢参与",icon:"🍬"},{id:"p3",label:"20 积分",icon:"⭐"},{id:"p4",label:"会员 7 天",icon:"💎"},{id:"p5",label:"1 元红包",icon:"🧧"},{id:"p6",label:"谢谢参与",icon:"🍬"},{id:"p7",label:"免邮券",icon:"📦"},{id:"p8",label:"100 积分",icon:"🌟"}],Ak=[0,1,2,3,-1,4,5,6,7],Lk={padding:"12px 14px",borderRadius:12,border:"1px solid rgba(128,128,128,0.18)",background:"#fff"},Mk={display:"flex",alignItems:"center",gap:8},Nk={flex:1,fontSize:14,fontWeight:600,color:"#1f2328"},zk={fontSize:12,color:"#5d636a"},Dk={color:"#1f2328"},Ik={display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:8,marginTop:10},Ok={gridColumn:"auto",border:"none",borderRadius:10,minHeight:56,fontSize:14,fontWeight:700,lineHeight:1.4,color:"#fff"},Fk={display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:2,minHeight:56,borderRadius:10,transition:"background .12s ease, color .12s ease",border:"1px solid rgba(207,68,7,0.16)"},Bk={fontSize:17,lineHeight:1},Wk={fontSize:11,lineHeight:1.4,textAlign:"center"},Hk={margin:"10px 0 0",minHeight:20,fontSize:12,lineHeight:1.7};function Uk({title:e,prizes:n,times:t,remainingTimes:r,drawResult:i,onDraw:o}){const s=x.useMemo(()=>{const b=[...n.length>0?n.slice(0,8):$k];for(;b.length<8;)b.push({id:`pad-${b.length}`,label:"谢谢参与",icon:"🍬"});return b},[n]),[l,a]=x.useState(t),[c,f]=x.useState(-1),[p,h]=x.useState(!1),[m,v]=x.useState(null),k=r??l,w=Number.isFinite(k)?Math.max(0,Math.min(999,Math.floor(k))):0,g=x.useRef([]),d=x.useRef(!0);x.useEffect(()=>(d.current=!0,()=>{d.current=!1,g.current.forEach(S=>clearTimeout(S)),g.current=[]}),[]);const y=async()=>{if(p||w<=0)return;h(!0),v(null);let S,b;try{if(i){const j=await i();if(!d.current)return;if(!Number.isFinite(j.index))throw new Error("drawResult 返回的 index 不是有效数字");S=Math.max(0,Math.min(s.length-1,Math.floor(j.index))),b=j.remaining}else S=Math.floor(Math.random()*s.length)}catch(j){if(!d.current)return;h(!1),v("抽奖请求失败，请稍后重试"),console.warn("[vane-activity] Jackpot drawResult 执行失败",j);return}if(!d.current)return;r===void 0&&a(j=>typeof b=="number"&&Number.isFinite(b)?Math.max(0,Math.floor(b)):Math.max(0,j-1));const _=s.length*2+S+1;let R=0;const N=()=>{if(d.current)if(R+=1,f((R-1)%s.length),R<_)g.current.push(window.setTimeout(N,60+R*5));else{g.current=[],h(!1);const j=s[S];v(`恭喜获得「${j.label}」`),o==null||o(j,S)}};N()},P=w<=0;return u.jsxs("section",{"aria-label":e,style:Lk,children:[u.jsxs("div",{style:Mk,children:[u.jsx("span",{style:Nk,children:e}),u.jsxs("span",{style:zk,children:["剩余 ",u.jsx("strong",{style:Dk,children:w})," 次"]})]}),u.jsx("div",{role:"group","aria-label":"抽奖九宫格",style:Ik,children:Ak.map(S=>{if(S===-1)return u.jsx("button",{type:"button",disabled:p||P,onClick:y,style:{...Ok,background:p?"#a33a06":P?"#5d636a":"#cf4407",cursor:p||P?"default":"pointer"},children:p?"抽取中":P?"已抽完":"抽一次"},"btn");const b=s[S],_=c===S;return u.jsxs("div",{"data-testid":"jackpot-cell","data-active":_?"1":void 0,style:{...Fk,background:_?"#cf4407":"#fff7ef",color:_?"#fff":"#1f2328"},children:[u.jsx("span",{"aria-hidden":"true",style:Bk,children:b.icon??"🎁"}),u.jsx("span",{style:Wk,children:b.label})]},b.id)})}),u.jsx("p",{"aria-live":"polite",style:{...Hk,color:m?"#a33a06":"#5d636a",fontWeight:m?600:400},children:p?"转动中，祝你好运…":m??(P?"今日次数已用完，明天再来":`共 ${s.length} 个奖励格，点击中间按钮开抽`)})]})}const no=(e={})=>{const{title:n="幸运抽奖",prizes:t=[],times:r=3,remainingTimes:i,drawResult:o,onDraw:s}=e;return{name:"JackpotPlugin",version:"0.1.0",description:ia.description,priority:24,config:e,hooks:{renderFooter:l=>u.jsx(Uk,{title:n,prizes:t,times:r,remainingTimes:i,drawResult:o,onDraw:s})}}};no.meta=ia;const Vk={title:"夏日狂欢 · 幸运抽奖",tasks:[{id:"t1",title:"每日签到",progress:1,status:"completed"},{id:"t2",title:"浏览会场 3 个商品",progress:.6,status:"available"},{id:"t3",title:"邀请 1 位好友",progress:0,status:"locked"}],rewards:[{id:"r1",title:"5 元无门槛券",threshold:.5,icon:"🎟️"}],rules:[]},Yk=O(D,[ne(),X(),no({title:"幸运抽奖 · 100% 中奖",times:3,prizes:[{id:"p1",label:"5 元券",icon:"🎟️"},{id:"p2",label:"谢谢参与",icon:"🍬"},{id:"p3",label:"20 积分",icon:"⭐"},{id:"p4",label:"会员 7 天",icon:"💎"},{id:"p5",label:"1 元红包",icon:"🧧"},{id:"p6",label:"谢谢参与",icon:"🍬"},{id:"p7",label:"免邮券",icon:"📦"},{id:"p8",label:"100 积分",icon:"🌟"}]})]),Qk={slug:"jackpot",title:"抽奖九宫格 JackpotPlugin",group:"plugin",intro:"8 格奖池 + 中心按钮，高亮转两圈减速停格，次数用完自动禁用。"};function Kk(){return u.jsx(Yk,{data:Vk})}const Gk=Object.freeze(Object.defineProperty({__proto__:null,default:Kk,meta:Qk},Symbol.toStringTag,{value:"Module"})),Jk="RedeemCodePlugin",Xk="兑换码：输入框 + 本地校验（非空 / 长度 / 前缀）+ 成功或失败回执，回车即可提交，结果区 aria-live 播报。",Zk="0.1.0",qk=["ui","奖励","兑换码","表单"],eP=[{name:"title",type:"string",default:'"兑换码"',description:"卡片标题"},{name:"prefix",type:"string",default:"undefined",description:'必填前缀（转大写比较，如 "VANE"）；不传则不校验前缀'},{name:"minLength",type:"number",default:"8",description:"兑换码最短长度"},{name:"placeholder",type:"string",default:'"如 VANE-8888"',description:"输入框占位文案"},{name:"successText",type:"string",default:'"兑换成功，奖励已入账"',description:"校验通过后的成功文案"},{name:"onRedeem",type:"(code: string) => boolean | void | Promise<boolean | void>",default:"undefined",description:"兑换回调，入参是 trim + 转大写后的码；返回 false 表示无效码；支持异步，等待期按钮禁用"},{name:"order",type:"number",default:"0",description:"同槽位排序键：与 RewardClaimPlugin 同在 renderRewards 时定上下"}],nP=[{name:"onRedeem",when:"表单提交（点「兑换」或回车）且本地校验全部通过后",description:"把规范化后的兑换码交给业务侧核销；返回 false 视为无效，异常转失败文案"},{name:"renderRewards",when:"每次渲染",description:"在奖励槽渲染兑换卡"}],tP=[{name:"内部 handleSubmit(event)",signature:"(event: React.FormEvent) => void",description:"阻止默认提交 → trim/大写 → 三重校验 → await onRedeem，期间 pending 禁点"}],rP="无对外命令式方法。输入变化即清除上一条回执，避免旧错误提示压在新输入上。",iP=["回车可直接提交（form onSubmit，不绑 keydown）","三层本地校验：非空 → 最短长度 → 前缀，错误文案各自独立","onRedeem 返回 false 时展示「兑换码无效或已被使用」，成功则清空输入","支持 Promise 回调：请求中按钮禁用并显示「兑换中」，卸载后丢弃回包","错误边框 #b42318 + aria-invalid + aria-live 文案，不靠颜色单独传达错误"],oP=["线下物料码核销","客服补发兑换码","渠道专属码"],sP=["兑换码统一转大写后比对，业务侧无需再做大小写归一","不声明独占 renderRewards：可与 RewardClaimPlugin / CouponStackPlugin 的奖励列表上下叠放共存（独占去重只在「声明了独占的插件之间」发生，非独占插件永不被丢）"],oa={name:Jk,description:Xk,since:Zk,tags:qk,props:eP,events:nP,methods:tP,methodsNote:rP,features:iP,useCases:oP,notes:sP};function lP({title:e,prefix:n,minLength:t,placeholder:r,successText:i,onRedeem:o}){const[s,l]=x.useState(""),[a,c]=x.useState(null),[f,p]=x.useState(!1),h=x.useRef(!0);x.useEffect(()=>(h.current=!0,()=>{h.current=!1}),[]);const m=async k=>{if(k.preventDefault(),f)return;const w=s.trim().toUpperCase();if(!w){c({type:"error",text:"请输入兑换码"});return}if(w.length<t){c({type:"error",text:`兑换码至少 ${t} 位`});return}if(n&&!w.startsWith(n.toUpperCase())){c({type:"error",text:`兑换码应以 ${n.toUpperCase()} 开头`});return}p(!0);try{const g=await(o==null?void 0:o(w));if(!h.current)return;if(g===!1){c({type:"error",text:"兑换码无效或已被使用"});return}c({type:"ok",text:i}),l("")}catch{h.current&&c({type:"error",text:"兑换失败，请稍后重试"})}finally{h.current&&p(!1)}},v=(a==null?void 0:a.type)==="error";return u.jsxs("section",{"aria-label":e,style:{padding:"12px 14px",borderRadius:12,border:"1px solid rgba(128,128,128,0.18)",background:"#fff"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[u.jsx("span",{style:{flex:1,fontSize:14,fontWeight:600,color:"#1f2328"},children:e}),u.jsx("span",{style:{fontSize:12,color:"#5d636a"},children:n?`前缀 ${n.toUpperCase()} · 至少 ${t} 位`:`至少 ${t} 位`})]}),u.jsxs("form",{onSubmit:m,style:{display:"flex",gap:8,marginTop:10},children:[u.jsx("input",{value:s,onChange:k=>{l(k.target.value),a&&c(null)},placeholder:r,"aria-label":"兑换码","aria-invalid":v||void 0,autoComplete:"off",spellCheck:!1,style:{flex:1,minWidth:0,boxSizing:"border-box",height:34,padding:"0 10px",borderRadius:8,border:`1px solid ${v?"#b42318":"rgba(128,128,128,0.28)"}`,background:"#fff",color:"#1f2328",fontSize:13,fontFamily:"inherit",letterSpacing:"0.04em"}}),u.jsx("button",{type:"submit",disabled:f,style:{flex:"none",border:"none",borderRadius:8,padding:"0 16px",height:34,fontSize:13,fontWeight:600,background:f?"#a33a06":"#cf4407",color:"#fff",cursor:f?"default":"pointer"},children:f?"兑换中":"兑换"})]}),u.jsx("p",{"aria-live":"polite",style:{margin:"8px 0 0",minHeight:18,fontSize:12,lineHeight:1.6,color:a?a.type==="ok"?"#15803d":"#b42318":"#5d636a",fontWeight:a?600:400},children:a?a.text:"输入活动发放的兑换码，奖励实时入账"})]})}const to=(e={})=>{const{title:n="兑换码",prefix:t,minLength:r=8,placeholder:i="如 VANE-8888",successText:o="兑换成功，奖励已入账",onRedeem:s}=e;return{name:"RedeemCodePlugin",version:"0.1.0",description:oa.description,priority:26,config:e,hooks:{renderRewards:l=>u.jsx(lP,{title:n,prefix:t,minLength:r,placeholder:i,successText:o,onRedeem:s})}}};to.meta=oa;const aP={title:"夏日狂欢 · 兑换中心",tasks:[{id:"t1",title:"每日签到",progress:1,status:"completed"},{id:"t2",title:"浏览会场 3 个商品",progress:.6,status:"available"},{id:"t3",title:"邀请 1 位好友",progress:0,status:"locked"}],rewards:[{id:"r1",title:"5 元无门槛券",threshold:.5,icon:"🎟️"}],rules:[]},uP=O(D,[ne(),to({prefix:"VANE",order:0,onRedeem:e=>(console.log("[redeem]",e),e==="VANE-8888")}),je({order:1})]),cP={slug:"redeem-code",title:"兑换码 RedeemCodePlugin",group:"plugin",intro:"输入框 + 长度/前缀校验 + 成功失败回执；与奖励列表同槽共存。"};function dP(){return u.jsx(uP,{data:aP})}const fP=Object.freeze(Object.defineProperty({__proto__:null,default:dP,meta:cP},Symbol.toStringTag,{value:"Module"})),pP=`import React from "react";
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
`,gP=`import React from "react";
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
`,mP=`import React from "react";
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
`,hP=`import React from "react";
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
`,yP=`import React from "react";
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
`,vP=`import React from "react";
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
`,xP=`import React from "react";
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
`,kP=`import React from "react";
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
`,PP=`import React from "react";
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
`,wP=`import React from "react";
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
`,SP=`import React from "react";
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
`,bP=`import React from "react";
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
`,CP=`import React from "react";
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
`,_P=`import React from "react";
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
`,RP=`import React from "react";
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
`,TP=`import React from "react";
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
`,EP=`import React from "react";
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
`,jP=`import React from "react";
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
`,$P=`import React from "react";
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
`,AP=`import React from "react";
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
`,LP=`import React from "react";
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
`,MP=Object.assign({"./00-basic.tsx":jy,"./01-tasklist.tsx":Ny,"./02-progressfx.tsx":Fy,"./03-rewardclaim.tsx":Vy,"./04-ruleexpand.tsx":Jy,"./05-advanced.tsx":nv,"./06-countdown.tsx":kv,"./07-milestone.tsx":zv,"./08-coupon-stack.tsx":e0,"./09-rule-modal.tsx":k0,"./10-confetti.tsx":F0,"./11-header.tsx":r1,"./12-progress-ring.tsx":x1,"./13-claim-toast.tsx":D1,"./14-share-boost.tsx":ex,"./15-leaderboard.tsx":xx,"./16-announcement.tsx":zx,"./17-checkin.tsx":qx,"./18-task-tabs.tsx":xk,"./19-jackpot.tsx":Gk,"./20-redeem-code.tsx":fP}),NP=Object.assign({"./00-basic.tsx":pP,"./01-tasklist.tsx":gP,"./02-progressfx.tsx":mP,"./03-rewardclaim.tsx":hP,"./04-ruleexpand.tsx":yP,"./05-advanced.tsx":vP,"./06-countdown.tsx":xP,"./07-milestone.tsx":kP,"./08-coupon-stack.tsx":PP,"./09-rule-modal.tsx":wP,"./10-confetti.tsx":SP,"./11-header.tsx":bP,"./12-progress-ring.tsx":CP,"./13-claim-toast.tsx":_P,"./14-share-boost.tsx":RP,"./15-leaderboard.tsx":TP,"./16-announcement.tsx":EP,"./17-checkin.tsx":jP,"./18-task-tabs.tsx":$P,"./19-jackpot.tsx":AP,"./20-redeem-code.tsx":LP}),zP=e=>e.replace(/^\.\//,""),$s=Object.entries(MP).map(([e,n])=>{const t=zP(e);return{meta:n.meta,Stage:n.default,file:t,source:NP[e]??""}}).sort((e,n)=>e.file.localeCompare(n.file)),DP=Array.from(new Set($s.map(e=>e.meta.group))),hf={basic:{label:"基础用法"},advanced:{label:"进阶用法"},plugin:{label:"插件示例"}},IP="import|from|export|default|function|return|const|let|var|new|if|else|for|of|in|while|switch|case|break|continue|type|interface|extends|implements|as|satisfies|await|async|throw|try|catch|finally|class|typeof|instanceof|delete|void|yield",OP="true|false|null|undefined|this|super",FP="number|string|boolean|object|any|unknown|never|React|HTMLElement|void",Lu=new RegExp([String.raw`(\/\/[^\n]*|\/\*[\s\S]*?\*\/)`,String.raw`(\`(?:\\[\s\S]|[^\\\`])*\`|"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*')`,String.raw`\b(${IP})\b`,String.raw`\b(${OP})\b`,String.raw`\b(${FP})\b`,String.raw`(<\/?[A-Za-z][\w.$]*)`,String.raw`\b(\d+(?:\.\d+)?)\b`].join("|"),"g"),Mu=["tok-comment","tok-string","tok-kw","tok-lit","tok-type","tok-tag","tok-num"];function BP(e){const n=[];let t=0;Lu.lastIndex=0;let r;for(;r=Lu.exec(e);){r.index>t&&n.push({text:e.slice(t,r.index),cls:null});const i=Mu.findIndex((o,s)=>r[s+1]!==void 0);n.push({text:r[0],cls:i>=0?Mu[i]:null}),t=r.index+r[0].length}return t<e.length&&n.push({text:e.slice(t),cls:null}),n}function Nu(e){try{const n=document.createElement("textarea");n.value=e,n.setAttribute("readonly",""),n.style.position="fixed",n.style.opacity="0",document.body.appendChild(n),n.select();const t=document.execCommand("copy");return document.body.removeChild(n),t}catch{return!1}}function WP({code:e,title:n="tsx",collapseAfter:t=24,maxHeight:r}){const[i,o]=x.useState("idle"),[s,l]=x.useState(!1),a=x.useMemo(()=>e.replace(/\s+$/,"").split(`
`),[e]),c=t>0&&a.length>t,f=c&&!s?a.slice(0,t).join(`
`):e,p=x.useMemo(()=>BP(f),[f]),h=x.useCallback(async()=>{var v;let m=!1;if((v=navigator.clipboard)!=null&&v.writeText)try{await navigator.clipboard.writeText(e),m=!0}catch{m=Nu(e)}else m=Nu(e);o(m?"ok":"fail"),window.setTimeout(()=>o("idle"),1600)},[e]);return u.jsxs("div",{className:"code",children:[u.jsxs("div",{className:"code-head",children:[u.jsx("span",{children:n}),u.jsxs("span",{style:{display:"flex",gap:6,alignItems:"center"},children:[u.jsxs("span",{children:[a.length," 行"]}),u.jsx("button",{type:"button",className:`code-copy${i==="ok"?" is-ok":i==="fail"?" is-fail":""}`,onClick:h,children:i==="ok"?"已复制":i==="fail"?"复制失败":"复制"})]})]}),u.jsx("pre",{style:r?{maxHeight:r}:{maxHeight:"none"},children:u.jsx("code",{children:p.map((m,v)=>m.cls?u.jsx("span",{className:m.cls,children:m.text},v):u.jsx(Xn.Fragment,{children:m.text},v))})}),c?u.jsx("button",{type:"button",className:"code-more",onClick:()=>l(m=>!m),children:s?"收起":`展开余下 ${a.length-t} 行`}):null]})}function yf(e){return e.props??e.config??[]}function HP({doc:e}){var i,o,s;const n=yf(e),t=e.events??[],r=e.methods??[];return u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"doc-sec",children:[u.jsx("h5",{children:"属性 Props"}),n.length?u.jsxs("table",{className:"doc-table",children:[u.jsx("thead",{children:u.jsxs("tr",{children:[u.jsx("th",{children:"属性"}),u.jsx("th",{children:"类型"}),u.jsx("th",{children:"默认"}),u.jsx("th",{children:"说明"})]})}),u.jsx("tbody",{children:n.map(l=>u.jsxs("tr",{children:[u.jsx("td",{children:u.jsx("code",{children:l.name})}),u.jsx("td",{children:u.jsx("code",{className:"dim",children:l.type})}),u.jsx("td",{children:u.jsx("code",{className:"dim",children:l.default??"-"})}),u.jsx("td",{children:l.description??"—"})]},l.name))})]}):u.jsx("p",{className:"doc-note",children:"无可配置属性，工厂零参调用即可。"})]}),u.jsxs("div",{className:"doc-sec",children:[u.jsx("h5",{children:"事件 Events"}),t.length?u.jsxs("table",{className:"doc-table",children:[u.jsx("thead",{children:u.jsxs("tr",{children:[u.jsx("th",{children:"事件"}),u.jsx("th",{children:"触发时机"}),u.jsx("th",{children:"说明"})]})}),u.jsx("tbody",{children:t.map(l=>u.jsxs("tr",{children:[u.jsx("td",{children:u.jsx("code",{children:l.name})}),u.jsx("td",{children:l.when}),u.jsx("td",{children:l.description})]},l.name))})]}):u.jsx("p",{className:"doc-note",children:"不参与任何事件。"})]}),u.jsxs("div",{className:"doc-sec",children:[u.jsx("h5",{children:"方法 Methods"}),r.length?u.jsxs("table",{className:"doc-table",children:[u.jsx("thead",{children:u.jsxs("tr",{children:[u.jsx("th",{children:"方法"}),u.jsx("th",{children:"签名"}),u.jsx("th",{children:"说明"})]})}),u.jsx("tbody",{children:r.map(l=>u.jsxs("tr",{children:[u.jsx("td",{children:u.jsx("code",{children:l.name})}),u.jsx("td",{children:u.jsx("code",{className:"dim",children:l.signature})}),u.jsx("td",{children:l.description})]},l.name))})]}):u.jsx("p",{className:"doc-note",children:e.methodsNote??"不调用上下文方法。"})]}),u.jsxs("div",{className:"doc-cols",children:[(i=e.features)!=null&&i.length?u.jsxs("div",{children:[u.jsx("h5",{children:"能做"}),u.jsx("ul",{children:e.features.map(l=>u.jsx("li",{children:l},l))})]}):null,(o=e.useCases)!=null&&o.length?u.jsxs("div",{children:[u.jsx("h5",{children:"适合"}),u.jsx("ul",{children:e.useCases.map(l=>u.jsx("li",{children:l},l))})]}):null,(s=e.notes)!=null&&s.length?u.jsxs("div",{children:[u.jsx("h5",{children:"注意"}),u.jsx("ul",{children:e.notes.map(l=>u.jsx("li",{children:l},l))})]}):null]})]})}function UP({factory:e,priority:n,summary:t,doc:r,defaultOpen:i=!0}){var s,l;const o={props:yf(r).length,events:((s=r.events)==null?void 0:s.length)??0,methods:((l=r.methods)==null?void 0:l.length)??0};return u.jsxs("details",{className:"api-plug",open:i,children:[u.jsxs("summary",{children:[u.jsx("code",{children:e}),u.jsxs("span",{className:"tag tag-accent",children:["priority ",n]}),u.jsx("span",{className:"api-plug-desc",children:t}),u.jsxs("span",{className:"api-plug-n",children:[o.props," 属性 · ",o.events," 事件 · ",o.methods," 方法"]})]}),u.jsx("div",{className:"api-plug-body",children:u.jsx(HP,{doc:r})})]})}const VP=/create[A-Z]\w*Plugin/g;function YP(e){return(e.match(/create[A-Z]\w*Plugin/)??[e])[0]}function vf(e){return e.dir?`create${e.dir}`:YP(e.factory)}function QP(e){return new Set(e.match(VP)??[])}function KP(e,n){const t=QP(e);return n.filter(r=>t.has(vf(r))).sort((r,i)=>r.priority-i.priority)}function GP({source:e,plugins:n,heading:t="本页用到的插件"}){const r=x.useMemo(()=>KP(e,n),[e,n]);return r.length===0?null:u.jsxs("section",{className:"api-sec",children:[u.jsxs("div",{className:"api-sec-head",children:[u.jsxs("h2",{className:"api-sec-title",children:[t," · ",r.length," 个"]}),u.jsxs("p",{className:"api-sec-sub",children:["就是上面代码里装配的全部成员。属性是工厂参数，事件是父组件传进来的回调， 方法是插件读取 / 调用的上下文能力 —— 表内容与 ",u.jsx("code",{children:"doc.json"})," 同源，随包发布。"]})]}),r.map(i=>u.jsx(UP,{factory:vf(i),priority:i.priority,summary:i.summary??i.doc.description??"",doc:i.doc},i.factory))]})}const JP=`import React from "react";
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
`,XP=`import React from "react";
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
`,ZP=`import React, { useEffect, useState } from "react";
import type { PluginCreator, PluginDoc } from "vane-plugin-core";
import type {
  ActivityCheckinState,
  ActivityData,
  ActivityPluginConfigBase,
  ActivityPluginContext,
} from "../../components/ActivityPlugin/plugins/types";
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

/** P2-5：把接口传入的 days / done / todayIndex 夹到合法范围，避免超大渲染或越界。 */
function clampInt(value: number, min: number, max: number, fallback: number): number {
  const n = Number.isFinite(value) ? value : fallback;
  return Math.max(min, Math.min(max, Math.floor(n)));
}

function CheckinCalendar({
  ctx,
  title,
  days: daysProp,
  done: doneProp,
  todayIndex: todayProp,
  onCheckin,
  showButton,
}: {
  ctx: ActivityPluginContext;
  title: string;
  days: number;
  done: number;
  todayIndex?: number;
  onCheckin?: () => void;
  showButton: boolean;
}) {
  const state = (ctx.data as ActivityData | undefined)?.checkin as
    | ActivityCheckinState
    | undefined;
  const days = clampInt(state?.days ?? daysProp, 1, 31, 7);
  const baseDone = clampInt(state?.done ?? doneProp, 0, days, 0);
  const todayIndex = clampInt(
    state?.todayIndex ?? todayProp ?? baseDone,
    0,
    Math.max(0, days - 1),
    0
  );

  const [done, setDone] = useState(baseDone);
  // 业务侧回写 data.checkin.done 后同步本地乐观态
  useEffect(() => setDone(baseDone), [baseDone]);

  const finished = done >= days;
  const signedToday = done > todayIndex || finished;

  const handleCheckin = () => {
    if (signedToday) return;
    if (onCheckin) {
      onCheckin();
      return;
    }
    setDone((d) => Math.min(days, d + 1));
  };

  return (
    <section
      aria-label={title}
      style={{
        padding: "12px 14px",
        borderRadius: 12,
        border: "1px solid rgba(128,128,128,0.18)",
        background: "#fff",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{ flex: 1, fontSize: 14, fontWeight: 600, color: "#1f2328" }}>
          {title}
        </span>
        <span style={{ fontSize: 12, color: "#5d636a" }}>
          已连续 <strong style={{ color: "#1f2328" }}>{done}</strong>/{days} 天
        </span>
      </div>

      <div style={{ display: "flex", gap: 6, marginTop: 10 }}>
        {Array.from({ length: days }, (_, i) => {
          const isDone = i < done;
          const isToday = i === todayIndex && !isDone && !finished;
          const bg = isDone ? "#cf4407" : "#fff";
          const border = isDone
            ? "1px solid #cf4407"
            : isToday
              ? "1px dashed #cf4407"
              : "1px solid rgba(128,128,128,0.22)";
          const color = isDone ? "#fff" : isToday ? "#cf4407" : "#5d636a";
          return (
            <div
              key={i}
              data-testid="checkin-cell"
              aria-label={\`第 \${i + 1} 天\${isDone ? "已签到" : isToday ? "待签到" : "未开始"}\`}
              style={{
                flex: 1,
                minWidth: 0,
                height: 46,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 2,
                borderRadius: 8,
                background: bg,
                border,
                color,
                transition: "background .2s ease",
              }}
            >
              {/* 白字压 #cf4407 必须 full opacity：0.9 会跌到 4.06:1（ADR-13 禁 opacity 压字） */}
              <span style={{ fontSize: 11, lineHeight: 1.3 }}>
                {i + 1}天
              </span>
              <span style={{ fontSize: 13, fontWeight: 700, lineHeight: 1 }}>
                {isDone ? "✓" : isToday ? "今" : "·"}
              </span>
            </div>
          );
        })}
      </div>

      {showButton && (
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 10 }}>
          <span style={{ flex: 1, fontSize: 12, lineHeight: 1.6, color: "#5d636a" }}>
            {finished
              ? "本轮签到已完成，奖励已全部发放"
              : signedToday
                ? "今天已签到，明天再来"
                : \`签满 \${days} 天可得终极大礼包\`}
          </span>
          <button
            type="button"
            disabled={signedToday}
            onClick={handleCheckin}
            style={{
              flex: "none",
              border: "none",
              borderRadius: 999,
              padding: "7px 14px",
              fontSize: 13,
              fontWeight: 600,
              /* 可点 #cf4407 白字 4.69:1；已完成 #5d636a 白字 6.0:1 */
              background: signedToday ? "#5d636a" : "#cf4407",
              color: "#fff",
              cursor: signedToday ? "default" : "pointer",
            }}
          >
            {finished ? "已完成" : signedToday ? "已签到" : "今日签到"}
          </button>
        </div>
      )}
    </section>
  );
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
`,qP=`import React, { useEffect, useRef, useState } from "react";
import type { PluginCreator, PluginDoc } from "vane-plugin-core";
import type {
  ActivityPluginConfigBase,
  ActivityPluginContext,
} from "../../components/ActivityPlugin/plugins/types";
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

interface ToastItem {
  key: string;
  text: string;
}

/** 单条 toast：挂载后下一帧切到 show 态，让 transition 真正跑一次入场动画 */
function ToastCard({ text }: { text: string }) {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const raf = requestAnimationFrame(() => setShown(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div
      role="status"
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        maxWidth: 260,
        padding: "9px 12px",
        borderRadius: 10,
        /* 深底白字（ADR-13）：#fff on #1f2328 ≈ 14.6:1 */
        background: "#1f2328",
        color: "#fff",
        fontSize: 13,
        lineHeight: 1.5,
        boxShadow: "0 6px 20px rgba(0,0,0,0.22)",
        opacity: shown ? 1 : 0,
        transform: shown ? "translateY(0)" : "translateY(8px)",
        transition: "opacity .22s ease, transform .22s ease",
        pointerEvents: "none",
      }}
    >
      <span
        aria-hidden="true"
        style={{
          flex: "none",
          width: 16,
          height: 16,
          borderRadius: "50%",
          background: "#15803d",
          color: "#fff",
          fontSize: 11,
          lineHeight: "16px",
          textAlign: "center",
        }}
      >
        ✓
      </span>
      <span>{text}</span>
    </div>
  );
}

function ClaimToastLayer({
  ctx,
  durationMs,
  max,
  position,
  message,
}: {
  ctx: ActivityPluginContext;
  durationMs: number;
  max: number;
  position: "bottom-right" | "top-center";
  message?: (title: string) => string;
}) {
  const [items, setItems] = useState<ToastItem[]>([]);
  // 已处理过的领取 id（首屏已有的领取记录不弹，只弹「本次会话新增」）
  const seenRef = useRef<string[]>([...(ctx.claimedIds ?? [])]);
  const idsKey = (ctx.claimedIds ?? []).join("|");
  // 每条 toast 独立计时：连续领取时不会被下一批的 effect cleanup 取消。
  const timersRef = useRef<Map<string, ReturnType<typeof setTimeout>>>(new Map());

  // 仅卸载时统一清理所有计时器。
  useEffect(
    () => () => {
      for (const timer of timersRef.current.values()) clearTimeout(timer);
      timersRef.current.clear();
    },
    []
  );

  useEffect(() => {
    const prev = seenRef.current;
    const ids = ctx.claimedIds ?? [];
    const added = ids.filter((id) => !prev.includes(id));
    seenRef.current = ids;
    if (added.length === 0) return;

    const rewards = ctx.rewards ?? [];
    const fresh = added.map((id, i) => ({
      key: \`\${id}-\${Date.now()}-\${i}\`,
      text:
        message?.(rewards.find((r) => r.id === id)?.title ?? "奖励") ??
        \`已领取：\${rewards.find((r) => r.id === id)?.title ?? "奖励"}\`,
    }));

    setItems((cur) => {
      const next = [...cur, ...fresh];
      // 超出 max 被挤掉的条目，连带取消它自己的计时器。
      const evicted = next.slice(0, Math.max(0, next.length - max));
      for (const it of evicted) {
        const timer = timersRef.current.get(it.key);
        if (timer !== undefined) {
          clearTimeout(timer);
          timersRef.current.delete(it.key);
        }
      }
      return next.slice(-max);
    });

    for (const item of fresh) {
      const timer = setTimeout(() => {
        timersRef.current.delete(item.key);
        setItems((cur) => cur.filter((it) => it.key !== item.key));
      }, durationMs);
      timersRef.current.set(item.key, timer);
    }
    // idsKey 是 claimedIds 的稳定内容指纹；ctx 每次渲染都是新对象，不能进依赖
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idsKey, durationMs, max]);

  if (items.length === 0) return null;

  return (
    <div
      aria-live="polite"
      style={{
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        pointerEvents: "none",
        ...(position === "top-center"
          ? { top: 12, left: "50%", transform: "translateX(-50%)", alignItems: "center" }
          : { bottom: 12, right: 12, alignItems: "flex-end" }),
      }}
    >
      {items.map((it) => (
        <ToastCard key={it.key} text={it.text} />
      ))}
    </div>
  );
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
`,ew=`import React, { useEffect, useState } from "react";
import type { PluginCreator, PluginDoc } from "vane-plugin-core";
import type { ActivityPluginContext } from "../../components/ActivityPlugin/plugins/types";
import doc from "./doc.json";

export interface ConfettiPluginConfig {
  /** 彩纸数量（默认 28） */
  count?: number;
  /** 单轮下落时长（秒，默认 2.6） */
  durationSec?: number;
  /** 达成阈值（默认 1，即 100% 才庆祝） */
  threshold?: number;
}

/** 确定性伪随机（同一 index 每次渲染结果一致，避免重渲染跳变） */
function rand(i: number, salt: number): number {
  const x = Math.sin(i * 127.1 + salt * 311.7) * 43758.5453;
  return x - Math.floor(x);
}

const COLORS = ["#ff7a29", "#cf4407", "#15803d", "#5d636a", "#f5b60f"];

/** P2-8：尊重系统「减少动态效果」设置，避免常驻动画。 */
function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    if (!mq) return;
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);
  return reduced;
}

function ConfettiBurst({
  progress,
  count,
  durationSec,
  threshold,
}: {
  progress: number;
  count: number;
  durationSec: number;
  threshold: number;
}) {
  const reduced = usePrefersReducedMotion();
  const reached = progress >= (Number.isFinite(threshold) ? threshold : 1);
  if (!reached || reduced) return null;

  // P2-5：数量与时长做上限保护
  const total = Math.max(0, Math.min(60, Math.floor(Number.isFinite(count) ? count : 28)));
  const duration =
    Number.isFinite(durationSec) && durationSec > 0 ? durationSec : 2.6;

  const pieces = Array.from({ length: total }, (_, i) => {
    const left = rand(i, 1) * 100;
    const delay = rand(i, 2) * 1.2;
    const dur = duration * (0.7 + rand(i, 3) * 0.6);
    const size = 5 + rand(i, 4) * 5;
    const color = COLORS[i % COLORS.length];
    const round = rand(i, 5) > 0.6;
    return (
      <span
        key={i}
        aria-hidden
        style={{
          position: "absolute",
          top: -12,
          left: \`\${left}%\`,
          width: size,
          height: size * (round ? 1 : 1.8),
          borderRadius: round ? "50%" : 1,
          background: color,
          // P2-8：只播两轮，不再 infinite 常驻合成层
          animation: \`va-confetti-fall \${dur}s linear \${delay}s 2\`,
          opacity: 0.9,
        }}
      />
    );
  });

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      <style>{\`@keyframes va-confetti-fall{0%{transform:translateY(0) rotate(0)}100%{transform:translateY(340px) rotate(540deg)}}\`}</style>
      {pieces}
    </div>
  );
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
`,nw=`import React, { useEffect, useState } from "react";
import type { PluginCreator, PluginDoc } from "vane-plugin-core";
import type {
  ActivityPluginConfigBase,
  ActivityPluginContext,
  ActivityData,
} from "../../components/ActivityPlugin/plugins/types";
import doc from "./doc.json";

export interface CountdownTimerPluginConfig extends ActivityPluginConfigBase {
  /** 截止时间（ISO 字符串或时间戳）；不传则回退读 data.endTime */
  endTime?: string | number;
  /** 前缀文案（默认「距活动结束」） */
  label?: string;
  /** 剩余不足该毫秒数时进入紧急态（文字变警示色，默认 1 小时） */
  urgentMs?: number;
}

function remainingMs(end: number): number {
  return Math.max(0, end - Date.now());
}

function format(ms: number): string {
  const s = Math.floor(ms / 1000);
  const d = Math.floor(s / 86400);
  const h = String(Math.floor((s % 86400) / 3600)).padStart(2, "0");
  const m = String(Math.floor((s % 3600) / 60)).padStart(2, "0");
  const sec = String(s % 60).padStart(2, "0");
  return d > 0 ? \`\${d}天 \${h}:\${m}:\${sec}\` : \`\${h}:\${m}:\${sec}\`;
}

/** 自走计时组件：时间态在组件内部，不占用内核状态 */
function Countdown({
  end,
  label,
  urgentMs,
}: {
  end: number;
  label: string;
  urgentMs: number;
}) {
  // P2-16：初始不读 Date.now()，避免 SSR 与客户端首帧不一致；挂载后再计算。
  const [left, setLeft] = useState<number | null>(null);
  useEffect(() => {
    const remain = remainingMs(end);
    setLeft(remain);
    if (remain <= 0) return;
    const timer = window.setInterval(() => {
      const next = remainingMs(end);
      setLeft(next);
      // P2-6：归零即停表，不再每秒 setLeft(0)
      if (next <= 0) window.clearInterval(timer);
    }, 1000);
    return () => window.clearInterval(timer);
  }, [end]);

  const urgent = left !== null && left > 0 && left <= urgentMs;
  return (
    <div style={{ display: "flex", alignItems: "baseline", gap: 8, fontSize: 12 }}>
      <span style={{ color: "#5d636a" }}>{label}</span>
      <span
        role="timer"
        aria-label={left === null ? "剩余时间加载中" : \`剩余 \${format(left)}\`}
        style={{
          fontFamily: "var(--ff-mono, ui-monospace, monospace)",
          fontSize: 14,
          fontWeight: 700,
          color: left === 0 ? "#5d636a" : urgent ? "#cf4407" : "#1f2328",
          fontVariantNumeric: "tabular-nums",
        }}
      >
        {left === null ? "--:--:--" : left === 0 ? "已结束" : format(left)}
      </span>
    </div>
  );
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
`,tw=`import React from "react";
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
`,rw=`import React, { useEffect, useMemo, useRef, useState } from "react";
import type { PluginCreator, PluginDoc } from "vane-plugin-core";
import type {
  ActivityPluginConfigBase,
  ActivityPluginContext,
} from "../../components/ActivityPlugin/plugins/types";
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

const DEFAULT_PRIZES: JackpotPrize[] = [
  { id: "p1", label: "5 元券", icon: "🎟️" },
  { id: "p2", label: "谢谢参与", icon: "🍬" },
  { id: "p3", label: "20 积分", icon: "⭐" },
  { id: "p4", label: "会员 7 天", icon: "💎" },
  { id: "p5", label: "1 元红包", icon: "🧧" },
  { id: "p6", label: "谢谢参与", icon: "🍬" },
  { id: "p7", label: "免邮券", icon: "📦" },
  { id: "p8", label: "100 积分", icon: "🌟" },
];

/** 九宫格布局：中心是按钮，其余 8 格按环形排布（0-3 在按钮前，5-8 依次在后） */
const CELL_SLOTS = [0, 1, 2, 3, -1, 4, 5, 6, 7];

// 静态样式提到模块级：既压缩产物，也避免每帧 new 一堆同内容对象。
const CARD_STYLE: React.CSSProperties = {
  padding: "12px 14px",
  borderRadius: 12,
  border: "1px solid rgba(128,128,128,0.18)",
  background: "#fff",
};
const HEAD_STYLE: React.CSSProperties = { display: "flex", alignItems: "center", gap: 8 };
const TITLE_STYLE: React.CSSProperties = {
  flex: 1,
  fontSize: 14,
  fontWeight: 600,
  color: "#1f2328",
};
const META_STYLE: React.CSSProperties = { fontSize: 12, color: "#5d636a" };
const STRONG_STYLE: React.CSSProperties = { color: "#1f2328" };
const GRID_STYLE: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: 8,
  marginTop: 10,
};
const BUTTON_STYLE: React.CSSProperties = {
  gridColumn: "auto",
  border: "none",
  borderRadius: 10,
  minHeight: 56,
  fontSize: 14,
  fontWeight: 700,
  lineHeight: 1.4,
  color: "#fff",
};
const CELL_STYLE: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: 2,
  minHeight: 56,
  borderRadius: 10,
  transition: "background .12s ease, color .12s ease",
  border: "1px solid rgba(207,68,7,0.16)",
};
const ICON_STYLE: React.CSSProperties = { fontSize: 17, lineHeight: 1 };
const LABEL_STYLE: React.CSSProperties = { fontSize: 11, lineHeight: 1.4, textAlign: "center" };
const MSG_STYLE: React.CSSProperties = {
  margin: "10px 0 0",
  minHeight: 20,
  fontSize: 12,
  lineHeight: 1.7,
};

function JackpotCard({
  title,
  prizes,
  times,
  remainingTimes,
  drawResult,
  onDraw,
}: {
  title: string;
  prizes: JackpotPrize[];
  times: number;
  remainingTimes?: number;
  drawResult?: () => JackpotDrawResult | Promise<JackpotDrawResult>;
  onDraw?: (prize: JackpotPrize, index: number) => void;
}) {
  const cells = useMemo(() => {
    const list = prizes.length > 0 ? prizes.slice(0, 8) : DEFAULT_PRIZES;
    const filled = [...list];
    while (filled.length < 8) {
      filled.push({ id: \`pad-\${filled.length}\`, label: "谢谢参与", icon: "🍬" });
    }
    return filled;
  }, [prizes]);

  const [localRemaining, setLocalRemaining] = useState(times);
  const [active, setActive] = useState(-1);
  const [drawing, setDrawing] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  // 受控优先：remainingTimes 传入时以宿主/服务端为准，组件不自行递减。
  // P2-5：次数夹到 0..999，脏数据（NaN / 负数 / 超大值）不参与按钮状态判断。
  const rawRemaining = remainingTimes ?? localRemaining;
  const remaining = Number.isFinite(rawRemaining)
    ? Math.max(0, Math.min(999, Math.floor(rawRemaining)))
    : 0;

  // 抽奖过程是一串 setTimeout；卸载必须清干净，否则会对着已卸载组件 setState
  const timers = useRef<number[]>([]);
  const alive = useRef(true);

  useEffect(() => {
    alive.current = true;
    return () => {
      alive.current = false;
      timers.current.forEach((id) => clearTimeout(id));
      timers.current = [];
    };
  }, []);

  const draw = async () => {
    if (drawing || remaining <= 0) return;
    setDrawing(true);
    setResult(null);

    let winner: number;
    let nextRemaining: number | undefined;
    try {
      if (drawResult) {
        // 服务端权威：中奖格与剩余次数都由业务侧决定。
        const res = await drawResult();
        if (!alive.current) return;
        if (!Number.isFinite(res.index)) {
          throw new Error("drawResult 返回的 index 不是有效数字");
        }
        winner = Math.max(
          0,
          Math.min(cells.length - 1, Math.floor(res.index))
        );
        nextRemaining = res.remaining;
      } else {
        winner = Math.floor(Math.random() * cells.length);
      }
    } catch (err) {
      if (!alive.current) return;
      setDrawing(false);
      setResult("抽奖请求失败，请稍后重试");
      console.warn("[vane-activity] Jackpot drawResult 执行失败", err);
      return;
    }
    if (!alive.current) return;

    // 非受控：优先采用服务端返回的剩余次数，否则本地自减。
    if (remainingTimes === undefined) {
      setLocalRemaining((prev) =>
        typeof nextRemaining === "number" && Number.isFinite(nextRemaining)
          ? Math.max(0, Math.floor(nextRemaining))
          : Math.max(0, prev - 1)
      );
    }

    // 至少转两圈再停，停的位置一定是 winner：steps-1 ≡ winner (mod 8)
    const steps = cells.length * 2 + winner + 1;
    let step = 0;

    const tick = () => {
      if (!alive.current) return;
      step += 1;
      setActive((step - 1) % cells.length);
      if (step < steps) {
        // 逐渐减速，观感更像转盘
        timers.current.push(window.setTimeout(tick, 60 + step * 5));
      } else {
        timers.current = [];
        setDrawing(false);
        const prize = cells[winner];
        setResult(\`恭喜获得「\${prize.label}」\`);
        onDraw?.(prize, winner);
      }
    };
    tick();
  };

  const exhausted = remaining <= 0;

  return (
    <section aria-label={title} style={CARD_STYLE}>
      <div style={HEAD_STYLE}>
        <span style={TITLE_STYLE}>{title}</span>
        <span style={META_STYLE}>
          剩余 <strong style={STRONG_STYLE}>{remaining}</strong> 次
        </span>
      </div>

      <div role="group" aria-label="抽奖九宫格" style={GRID_STYLE}>
        {CELL_SLOTS.map((slot) => {
          if (slot === -1) {
            return (
              <button
                key="btn"
                type="button"
                disabled={drawing || exhausted}
                onClick={draw}
                style={{
                  ...BUTTON_STYLE,
                  /* 可点 #cf4407 4.69:1；抽取中 #a33a06 6.6:1；抽完 #5d636a 6.0:1 */
                  background: drawing ? "#a33a06" : exhausted ? "#5d636a" : "#cf4407",
                  cursor: drawing || exhausted ? "default" : "pointer",
                }}
              >
                {drawing ? "抽取中" : exhausted ? "已抽完" : "抽一次"}
              </button>
            );
          }
          const cell = cells[slot];
          const isActive = active === slot;
          return (
            <div
              key={cell.id}
              data-testid="jackpot-cell"
              data-active={isActive ? "1" : undefined}
              style={{
                ...CELL_STYLE,
                background: isActive ? "#cf4407" : "#fff7ef",
                color: isActive ? "#fff" : "#1f2328",
              }}
            >
              <span aria-hidden="true" style={ICON_STYLE}>
                {cell.icon ?? "🎁"}
              </span>
              <span style={LABEL_STYLE}>{cell.label}</span>
            </div>
          );
        })}
      </div>

      <p
        aria-live="polite"
        style={{
          ...MSG_STYLE,
          /* 中奖 #a33a06 压白底 6.6:1；未抽时用 muted */
          color: result ? "#a33a06" : "#5d636a",
          fontWeight: result ? 600 : 400,
        }}
      >
        {drawing
          ? "转动中，祝你好运…"
          : (result ??
            (exhausted
              ? "今日次数已用完，明天再来"
              : \`共 \${cells.length} 个奖励格，点击中间按钮开抽\`))}
      </p>
    </section>
  );
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
`,iw=`import React, { useMemo } from "react";
import type { PluginCreator, PluginDoc } from "vane-plugin-core";
import type {
  ActivityData,
  ActivityLeaderboardEntry,
  ActivityPluginConfigBase,
  ActivityPluginContext,
} from "../../components/ActivityPlugin/plugins/types";
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

/** 名次牌配色：第一名强调橙，其余深灰；两者白字均 ≥5:1 */
function medalStyle(rank: number): React.CSSProperties {
  if (rank === 1) return { background: "#cf4407", color: "#fff" };
  if (rank <= 3) return { background: "#5d636a", color: "#fff" };
  return { background: "rgba(128,128,128,0.14)", color: "#5d636a" };
}

function LeaderRow({
  entry,
  rank,
  unit,
  highlightMe,
}: {
  entry: ActivityLeaderboardEntry;
  rank: number;
  unit: string;
  highlightMe: boolean;
}) {
  const me = highlightMe && entry.isMe;
  return (
    <li
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "7px 8px",
        borderRadius: 8,
        background: me ? "rgba(207,68,7,0.08)" : "transparent",
      }}
    >
      <span
        aria-label={\`第 \${rank} 名\`}
        style={{
          flex: "none",
          width: 20,
          height: 20,
          borderRadius: 6,
          fontSize: 12,
          fontWeight: 700,
          lineHeight: "20px",
          textAlign: "center",
          ...medalStyle(rank),
        }}
      >
        {rank}
      </span>
      <span
        aria-hidden="true"
        style={{
          flex: "none",
          width: 26,
          height: 26,
          borderRadius: "50%",
          background: "rgba(207,68,7,0.1)",
          color: "#a33a06",
          fontSize: 12,
          lineHeight: "26px",
          textAlign: "center",
          overflow: "hidden",
          whiteSpace: "nowrap",
        }}
      >
        {entry.avatar ?? entry.name.slice(0, 1)}
      </span>
      <span
        style={{
          flex: 1,
          minWidth: 0,
          fontSize: 13,
          color: "#1f2328",
          fontWeight: me ? 700 : 400,
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        {entry.name}
        {me && (
          <span
            style={{
              marginLeft: 6,
              padding: "0 5px",
              borderRadius: 4,
              background: "#cf4407",
              color: "#fff",
              fontSize: 11,
              fontWeight: 600,
              lineHeight: "16px",
              display: "inline-block",
            }}
          >
            我
          </span>
        )}
      </span>
      <span style={{ flex: "none", fontSize: 13, fontWeight: 700, color: "#1f2328" }}>
        {entry.score}
        <span style={{ marginLeft: 2, fontSize: 11, fontWeight: 400, color: "#5d636a" }}>
          {unit}
        </span>
      </span>
    </li>
  );
}

/** P2-10：脏数据兜底：非数组返回 []，缺 id / name / score 的条目补默认值。 */
function normalizeEntries(raw: unknown): ActivityLeaderboardEntry[] {
  if (!Array.isArray(raw)) return [];
  return raw
    .filter((entry): entry is Record<string, unknown> => !!entry && typeof entry === "object")
    .map((entry, i) => {
      const score = Number(entry.score);
      return {
        id: String(entry.id ?? \`entry-\${i}\`),
        name: String(entry.name ?? "?"),
        score: Number.isFinite(score) ? score : 0,
        avatar: typeof entry.avatar === "string" ? entry.avatar : undefined,
        isMe: !!entry.isMe,
      };
    });
}

function LeaderboardPanel({
  ctx,
  title,
  topN,
  unit,
  highlightMe,
  emptyText,
}: {
  ctx: ActivityPluginContext;
  title: string;
  topN: number;
  unit: string;
  highlightMe: boolean;
  emptyText: string;
}) {
  const raw = (ctx.data as ActivityData | undefined)?.leaderboard;
  // P2-9：排序与截取放进 useMemo，避免每次渲染全量 sort；slice 不改原数组。
  const all = useMemo(
    () => normalizeEntries(raw).sort((a, b) => b.score - a.score),
    [raw]
  );
  // P2-5：topN 夹到 1..50，避免脏配置切出空榜或渲染过长。
  const limit = Math.max(1, Math.min(50, Math.floor(Number.isFinite(topN) ? topN : 3)));

  if (all.length === 0) {
    return (
      <section
        aria-label={title}
        style={{
          padding: "12px 14px",
          borderRadius: 12,
          border: "1px solid rgba(128,128,128,0.18)",
          fontSize: 13,
          color: "#5d636a",
        }}
      >
        {emptyText}
      </section>
    );
  }

  const top = all.slice(0, limit);
  const myIndex = all.findIndex((e) => e.isMe);
  const meOutside = highlightMe && myIndex >= limit;

  return (
    <section
      aria-label={title}
      style={{
        padding: "12px 14px",
        borderRadius: 12,
        border: "1px solid rgba(128,128,128,0.18)",
        background: "#fff",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          gap: 8,
          marginBottom: 6,
        }}
      >
        <span style={{ fontSize: 14, fontWeight: 600, color: "#1f2328" }}>{title}</span>
        <span style={{ fontSize: 12, color: "#5d636a" }}>
          共 {all.length} 人参与
        </span>
      </div>

      <ol style={{ margin: 0, padding: 0, listStyle: "none" }}>
        {top.map((entry, i) => (
          <LeaderRow
            key={\`\${entry.id}-\${i}\`}
            entry={entry}
            rank={i + 1}
            unit={unit}
            highlightMe={highlightMe}
          />
        ))}
      </ol>

      {meOutside && (
        <>
          <div
            aria-hidden="true"
            style={{
              margin: "6px 0",
              borderTop: "1px dashed rgba(128,128,128,0.3)",
            }}
          />
          <ol style={{ margin: 0, padding: 0, listStyle: "none" }}>
            <LeaderRow
              entry={all[myIndex]}
              rank={myIndex + 1}
              unit={unit}
              highlightMe={highlightMe}
            />
          </ol>
        </>
      )}
    </section>
  );
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
`,ow=`import React from "react";
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
`,sw=`import React from "react";
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
`,lw=`import React from "react";
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
`,aw=`import React, { useEffect, useRef, useState } from "react";
import type { PluginCreator, PluginDoc } from "vane-plugin-core";
import type {
  ActivityPluginConfigBase,
  ActivityPluginContext,
} from "../../components/ActivityPlugin/plugins/types";
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

function RedeemForm({
  title,
  prefix,
  minLength,
  placeholder,
  successText,
  onRedeem,
}: {
  title: string;
  prefix?: string;
  minLength: number;
  placeholder: string;
  successText: string;
  onRedeem?: (code: string) => boolean | void | Promise<boolean | void>;
}) {
  const [code, setCode] = useState("");
  const [msg, setMsg] = useState<{ type: "ok" | "error"; text: string } | null>(null);
  const [pending, setPending] = useState(false);
  const alive = useRef(true);
  useEffect(() => {
    alive.current = true;
    return () => {
      alive.current = false;
    };
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (pending) return;
    const value = code.trim().toUpperCase();

    if (!value) {
      setMsg({ type: "error", text: "请输入兑换码" });
      return;
    }
    if (value.length < minLength) {
      setMsg({ type: "error", text: \`兑换码至少 \${minLength} 位\` });
      return;
    }
    if (prefix && !value.startsWith(prefix.toUpperCase())) {
      setMsg({ type: "error", text: \`兑换码应以 \${prefix.toUpperCase()} 开头\` });
      return;
    }

    // P2-13：支持 Promise；等待期间禁用提交，卸载后丢弃回包。
    setPending(true);
    try {
      const ok = await onRedeem?.(value);
      if (!alive.current) return;
      if (ok === false) {
        setMsg({ type: "error", text: "兑换码无效或已被使用" });
        return;
      }
      setMsg({ type: "ok", text: successText });
      setCode("");
    } catch {
      if (alive.current) {
        setMsg({ type: "error", text: "兑换失败，请稍后重试" });
      }
    } finally {
      if (alive.current) setPending(false);
    }
  };

  const invalid = msg?.type === "error";

  return (
    <section
      aria-label={title}
      style={{
        padding: "12px 14px",
        borderRadius: 12,
        border: "1px solid rgba(128,128,128,0.18)",
        background: "#fff",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{ flex: 1, fontSize: 14, fontWeight: 600, color: "#1f2328" }}>
          {title}
        </span>
        <span style={{ fontSize: 12, color: "#5d636a" }}>
          {prefix ? \`前缀 \${prefix.toUpperCase()} · 至少 \${minLength} 位\` : \`至少 \${minLength} 位\`}
        </span>
      </div>

      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", gap: 8, marginTop: 10 }}
      >
        <input
          value={code}
          onChange={(e) => {
            setCode(e.target.value);
            if (msg) setMsg(null);
          }}
          placeholder={placeholder}
          aria-label="兑换码"
          aria-invalid={invalid || undefined}
          autoComplete="off"
          spellCheck={false}
          style={{
            flex: 1,
            minWidth: 0,
            boxSizing: "border-box",
            height: 34,
            padding: "0 10px",
            borderRadius: 8,
            /* 错误态边框加深，但不靠边框单独传达错误（另有 aria-live 文案） */
            border: \`1px solid \${invalid ? "#b42318" : "rgba(128,128,128,0.28)"}\`,
            background: "#fff",
            color: "#1f2328",
            fontSize: 13,
            fontFamily: "inherit",
            letterSpacing: "0.04em",
          }}
        />
        <button
          type="submit"
          disabled={pending}
          style={{
            flex: "none",
            border: "none",
            borderRadius: 8,
            padding: "0 16px",
            height: 34,
            fontSize: 13,
            fontWeight: 600,
            background: pending ? "#a33a06" : "#cf4407",
            color: "#fff",
            cursor: pending ? "default" : "pointer",
          }}
        >
          {pending ? "兑换中" : "兑换"}
        </button>
      </form>

      <p
        aria-live="polite"
        style={{
          margin: "8px 0 0",
          minHeight: 18,
          fontSize: 12,
          lineHeight: 1.6,
          /* 成功 #15803d 5.0:1；失败 #b42318 5.9:1；无消息用 muted #5d636a 6.0:1 */
          color: msg ? (msg.type === "ok" ? "#15803d" : "#b42318") : "#5d636a",
          fontWeight: msg ? 600 : 400,
        }}
      >
        {msg ? msg.text : "输入活动发放的兑换码，奖励实时入账"}
      </p>
    </section>
  );
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
`,uw=`import React from "react";
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
`,cw=`import React, { useState } from "react";
import type { PluginCreator, PluginDoc } from "vane-plugin-core";
import type {
  ActivityPluginContext,
  ActivityData,
  ActivityRule,
} from "../../components/ActivityPlugin/plugins/types";
import doc from "./doc.json";

export interface RuleExpandPluginConfig {
  /** 折叠态最大展示行数（默认 3） */
  collapsedLines?: number;
}

function normalizeRules(
  rules: string | ActivityRule[] | undefined
): ActivityRule[] {
  if (!rules) return [];
  if (typeof rules === "string") return [{ content: rules }];
  return rules;
}

/**
 * RuleExpandPlugin - 规则折叠：渲染「活动规则」可折叠面板，折叠态按 collapsedLines
 * 截断（line-clamp），展开/收起同步 aria-expanded。折叠状态为组件本地 state。
 */
function RulePanel({
  context,
  collapsedLines,
}: {
  context: ActivityPluginContext;
  collapsedLines: number;
}) {
  const [open, setOpen] = useState(false);
  const rules = normalizeRules((context.data as ActivityData | undefined)?.rules);
  if (rules.length === 0) return null;

  return (
    <div style={{ borderTop: "1px solid rgba(128,128,128,0.18)", paddingTop: 10 }}>
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 6,
          background: "none",
          border: "none",
          padding: 0,
          cursor: "pointer",
          color: "#1f2328",
          fontSize: 13,
          fontWeight: 600,
        }}
      >
        活动规则
        <span
          style={{
            transform: open ? "rotate(180deg)" : "none",
            transition: "transform .2s",
            color: "#5d636a",
          }}
        >
          ▾
        </span>
      </button>
      <div
        style={
          open
            ? { marginTop: 8 }
            : {
                marginTop: 8,
                display: "-webkit-box",
                WebkitLineClamp: collapsedLines,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }
        }
      >
        {rules.map((r, i) => (
          <p
            key={i}
            style={{
              margin: "0 0 6px",
              fontSize: 12,
              lineHeight: 1.6,
              color: "#5d636a",
            }}
          >
            {r.title ? (
              <strong style={{ color: "#1f2328" }}>{r.title}：</strong>
            ) : null}
            {r.content}
          </p>
        ))}
      </div>
    </div>
  );
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
`,dw=`import React, { useEffect, useRef, useState } from "react";
import type { PluginCreator, PluginDoc } from "vane-plugin-core";
import type {
  ActivityPluginContext,
  ActivityRule,
} from "../../components/ActivityPlugin/plugins/types";
import doc from "./doc.json";

export interface RuleModalPluginConfig {
  /** 触发按钮文案（默认「活动规则」） */
  triggerLabel?: string;
  /** 弹窗标题（默认「活动规则」） */
  title?: string;
  /** 弹窗最大宽度（px，默认 420） */
  maxWidth?: number;
}

function normalizeRules(
  rules: string | ActivityRule[] | undefined
): ActivityRule[] {
  if (!rules) return [];
  if (typeof rules === "string") return [{ content: rules }];
  return rules;
}

/** 模块级组件：身份稳定，开合状态自持（creator 调用时闭包传入文案配置） */
function RuleModalTrigger(props: {
  context: ActivityPluginContext;
  triggerLabel: string;
  title: string;
  maxWidth: number;
}) {
  const { context, triggerLabel, title, maxWidth } = props;
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  // P1-6：Esc 关闭、初始焦点、Tab 焦点环、滚动锁、关闭后焦点还原。
  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    const prevFocus = document.activeElement as HTMLElement | null;
    const trigger = triggerRef.current;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        return;
      }
      if (event.key !== "Tab" || !dialogRef.current) return;
      const focusables = dialogRef.current.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
      // 关闭后回到触发按钮；若触发按钮已卸载则退回先前焦点元素
      if (trigger?.isConnected) trigger.focus();
      else prevFocus?.focus?.();
    };
  }, [open]);

  const rules = normalizeRules(
    (context.data as { rules?: string | ActivityRule[] } | undefined)?.rules
  );
  if (rules.length === 0) return null;

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        style={{
          border: "1px solid #d8dce0",
          borderRadius: 8,
          padding: "6px 14px",
          fontSize: 13,
          background: "#fff",
          color: "#1f2328",
          cursor: "pointer",
        }}
      >
        {triggerLabel} <span aria-hidden>›</span>
      </button>

      {open && (
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label={title}
          onClick={() => setOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.55)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            padding: 24,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#fff",
              borderRadius: 14,
              maxWidth,
              width: "100%",
              maxHeight: "70vh",
              overflow: "auto",
              padding: "18px 20px",
              boxShadow: "0 12px 40px rgba(0,0,0,0.25)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 10,
              }}
            >
              <strong style={{ fontSize: 15, color: "#1f2328" }}>{title}</strong>
              <button
                ref={closeRef}
                type="button"
                aria-label="关闭"
                onClick={() => setOpen(false)}
                style={{
                  border: "none",
                  background: "transparent",
                  fontSize: 18,
                  lineHeight: 1,
                  color: "#5d636a",
                  cursor: "pointer",
                  padding: 4,
                }}
              >
                ✕
              </button>
            </div>
            {rules.map((rule, i) => (
              <div key={i} style={{ marginBottom: 10 }}>
                {rule.title && (
                  <div style={{ fontSize: 13, fontWeight: 700, color: "#1f2328" }}>
                    {rule.title}
                  </div>
                )}
                <div style={{ fontSize: 12, lineHeight: 1.7, color: "#5d636a" }}>
                  {rule.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
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
`,fw=`import React, { useEffect, useState } from "react";
import type { PluginCreator, PluginDoc } from "vane-plugin-core";
import type {
  ActivityData,
  ActivityPluginConfigBase,
  ActivityPluginContext,
  ActivityShareState,
} from "../../components/ActivityPlugin/plugins/types";
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

/** P2-5：总量/已用/头像数量都做上限夹取，避免接口脏数据渲染上百段。 */
function clampInt(value: number, min: number, max: number, fallback: number): number {
  const n = Number.isFinite(value) ? value : fallback;
  return Math.max(min, Math.min(max, Math.floor(n)));
}

function ShareBoostBar({
  ctx,
  title,
  total: totalProp,
  used: usedProp,
  onInvite,
  maxAvatars,
}: {
  ctx: ActivityPluginContext;
  title: string;
  total: number;
  used: number;
  onInvite?: () => void;
  maxAvatars: number;
}) {
  const share = (ctx.data as ActivityData | undefined)?.share as ActivityShareState | undefined;
  const total = clampInt(share?.total ?? totalProp, 0, 20, 3);
  const baseUsed = clampInt(share?.used ?? usedProp, 0, total, 0);
  const [used, setUsed] = useState(baseUsed);

  // 业务侧回写 data.share.used 后同步本地乐观态
  useEffect(() => setUsed(baseUsed), [baseUsed]);

  const rawHelpers = share?.helpers;
  const helpers = Array.isArray(rawHelpers)
    ? rawHelpers.filter((h) => h && typeof h === "object")
    : [];
  const capped = Math.min(used, total);
  const full = capped >= total;
  const avatarLimit = clampInt(maxAvatars, 0, 10, 5);
  const shown = helpers.slice(0, avatarLimit);
  const overflow = Math.max(0, helpers.length - shown.length);

  const handleInvite = () => {
    if (full) return;
    if (onInvite) {
      onInvite();
      return;
    }
    setUsed((u) => Math.min(total, u + 1));
  };

  return (
    <section
      aria-label={title}
      style={{
        padding: "12px 14px",
        borderRadius: 12,
        border: "1px solid rgba(128,128,128,0.18)",
        background: "#fff",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{ flex: 1, fontSize: 14, fontWeight: 600, color: "#1f2328" }}>
          {title}
        </span>
        <span style={{ fontSize: 12, color: "#5d636a" }}>
          今日助力 <strong style={{ color: "#1f2328" }}>{capped}</strong>/{total}
        </span>
      </div>

      {/* 分段进度：每段代表一次助力名额 */}
      <div
        role="img"
        aria-label={\`助力进度 \${capped}/\${total}\`}
        style={{ display: "flex", gap: 4, marginTop: 10 }}
      >
        {Array.from({ length: total }, (_, i) => (
          <span
            key={i}
            style={{
              flex: 1,
              height: 6,
              borderRadius: 3,
              background: i < capped ? "#cf4407" : "rgba(128,128,128,0.18)",
              transition: "background .25s ease",
            }}
          />
        ))}
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 12 }}>
        <div style={{ display: "flex", flex: 1, alignItems: "center", minWidth: 0 }}>
          {shown.map((h, i) => (
            <span
              key={h.id ?? \`helper-\${i}\`}
              title={h.name ?? ""}
              style={{
                width: 26,
                height: 26,
                marginLeft: i === 0 ? 0 : -8,
                borderRadius: "50%",
                border: "2px solid #fff",
                background: "rgba(207,68,7,0.12)",
                color: "#a33a06",
                fontSize: 12,
                lineHeight: "22px",
                textAlign: "center",
                overflow: "hidden",
                whiteSpace: "nowrap",
              }}
            >
              {h.avatar ?? (h.name ? String(h.name).slice(0, 1) : "?")}
            </span>
          ))}
          {overflow > 0 && (
            <span style={{ marginLeft: 6, fontSize: 12, color: "#5d636a" }}>
              +{overflow}
            </span>
          )}
          <span
            style={{
              marginLeft: shown.length === 0 ? 0 : 8,
              fontSize: 12,
              lineHeight: 1.6,
              color: "#5d636a",
            }}
          >
            {full ? "今日助力已满，明天再来" : \`还差 \${total - capped} 人解锁下一档奖励\`}
          </span>
        </div>

        <button
          type="button"
          disabled={full}
          onClick={handleInvite}
          style={{
            flex: "none",
            border: "none",
            borderRadius: 999,
            padding: "7px 14px",
            fontSize: 13,
            fontWeight: 600,
            /* 可点 #cf4407 + 白字 5.0:1；满额 #5d636a 深灰底 + 白字 5.4:1 */
            background: full ? "#5d636a" : "#cf4407",
            color: "#fff",
            cursor: full ? "default" : "pointer",
          }}
        >
          {full ? "今日已满" : "邀请助力"}
        </button>
      </div>
    </section>
  );
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
`,pw=`import React from "react";
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
`,gw=`import React, { useRef, useState } from "react";
import type { PluginCreator, PluginDoc } from "vane-plugin-core";
import type {
  ActivityData,
  ActivityPluginConfigBase,
  ActivityPluginContext,
  ActivityTask,
  ActivityTaskGroup,
  TaskStatus,
} from "../../components/ActivityPlugin/plugins/types";
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

const STATUS_LABEL: Record<TaskStatus, string> = {
  locked: "未解锁",
  available: "进行中",
  completed: "已完成",
};

/** 状态色（ADR-13：实色 ≥4.5，不靠 opacity，同 TaskListPlugin） */
const STATUS_COLOR: Record<TaskStatus, string> = {
  locked: "#5d636a",
  available: "#cf4407",
  completed: "#15803d",
};

const ALL_TAB: ActivityTaskGroup = { key: "all", label: "全部" };

function TaskTabs({
  ctx,
  tabs: tabsProp,
  defaultTab,
  showProgress,
  doneLabel,
  emptyText,
}: {
  ctx: ActivityPluginContext;
  tabs: ActivityTaskGroup[];
  defaultTab?: string;
  showProgress: boolean;
  doneLabel: string;
  emptyText: string;
}) {
  const data = ctx.data as ActivityData | undefined;
  const dataTabs = data?.taskGroups;
  const tabs =
    dataTabs && dataTabs.length > 0 ? dataTabs : tabsProp.length > 0 ? tabsProp : [ALL_TAB];
  const tasks = (ctx.tasks ?? []) as ActivityTask[];

  const baseId = React.useId();
  const [active, setActive] = useState(defaultTab ?? tabs[0].key);
  // 页签被外部换掉时回到第一个，避免停在已不存在的分组上
  const current = tabs.some((t) => t.key === active) ? active : tabs[0].key;

  // P2-11：WAI-ARIA tabs 模式——方向键在页签间移动焦点并选中，Home/End 到两端。
  const tabRefs = useRef<Map<string, HTMLButtonElement>>(new Map());

  const focusTab = (key: string) => {
    tabRefs.current.get(key)?.focus();
    setActive(key);
  };
  const onTabKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, key: string) => {
    const keys = tabs.map((t) => t.key);
    const index = keys.indexOf(key);
    if (index < 0) return;
    let next: string | null = null;
    if (event.key === "ArrowRight") next = keys[(index + 1) % keys.length];
    else if (event.key === "ArrowLeft") next = keys[(index - 1 + keys.length) % keys.length];
    else if (event.key === "Home") next = keys[0];
    else if (event.key === "End") next = keys[keys.length - 1];
    if (next !== null) {
      event.preventDefault();
      focusTab(next);
    }
  };

  const shown = current === "all" ? tasks : tasks.filter((t) => t.group === current);

  return (
    <section aria-label="任务清单">
      <div
        role="tablist"
        aria-label="任务分组"
        style={{ display: "flex", gap: 6, overflowX: "auto", paddingBottom: 2 }}
      >
        {tabs.map((tab) => {
          const groupTasks =
            tab.key === "all" ? tasks : tasks.filter((t) => t.group === tab.key);
          const groupDone = groupTasks.filter((t) => t.status === "completed").length;
          const selected = tab.key === current;
          return (
            <button
              key={tab.key}
              ref={(el) => {
                if (el) tabRefs.current.set(tab.key, el);
                else tabRefs.current.delete(tab.key);
              }}
              type="button"
              role="tab"
              id={\`\${baseId}-tab-\${tab.key}\`}
              aria-selected={selected}
              aria-controls={\`\${baseId}-panel\`}
              tabIndex={selected ? 0 : -1}
              data-testid="task-tab"
              onClick={() => setActive(tab.key)}
              onKeyDown={(event) => onTabKeyDown(event, tab.key)}
              style={{
                flex: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 5,
                border: selected ? "1px solid #cf4407" : "1px solid rgba(128,128,128,0.22)",
                borderRadius: 999,
                padding: "6px 12px",
                fontSize: 13,
                fontWeight: selected ? 600 : 400,
                /* 选中 #cf4407 白字 4.69:1；未选中白底 #5d636a 6.0:1 */
                background: selected ? "#cf4407" : "#fff",
                color: selected ? "#fff" : "#5d636a",
                cursor: "pointer",
              }}
            >
              {tab.icon && <span aria-hidden="true">{tab.icon}</span>}
              {tab.label}
              {/* 选中态白字压 #cf4407 不能降 opacity：0.9 → 4.06:1 不达标（ADR-13） */}
              <span style={{ fontSize: 11 }}>
                {groupDone}/{groupTasks.length}
              </span>
            </button>
          );
        })}
      </div>

      <div
        id={\`\${baseId}-panel\`}
        role="tabpanel"
        aria-labelledby={\`\${baseId}-tab-\${current}\`}
        style={{ marginTop: 10 }}
      >
        {shown.length === 0 ? (
          <div
            style={{
              padding: "18px 0",
              textAlign: "center",
              fontSize: 13,
              color: "#5d636a",
            }}
          >
            {emptyText}
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {shown.map((task) => {
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
                      onClick={() => ctx.props.onTaskAction?.(task.id)}
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
        )}
      </div>
    </section>
  );
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
`,Gw={core:"核心闭环",display:"进度与氛围",info:"规则说明",social:"社交与反馈"},zu=["core","display","info","social"],Du=Object.assign({"/src/custom-plugins/ActivityHeaderPlugin/doc.json":Ql,"/src/custom-plugins/AnnouncementPlugin/doc.json":ea,"/src/custom-plugins/CheckinCalendarPlugin/doc.json":ta,"/src/custom-plugins/ClaimToastPlugin/doc.json":Jl,"/src/custom-plugins/ConfettiPlugin/doc.json":Vl,"/src/custom-plugins/CountdownTimerPlugin/doc.json":Dl,"/src/custom-plugins/CouponStackPlugin/doc.json":Bl,"/src/custom-plugins/JackpotPlugin/doc.json":ia,"/src/custom-plugins/LeaderboardPlugin/doc.json":Zl,"/src/custom-plugins/MilestoneBarPlugin/doc.json":Ol,"/src/custom-plugins/ProgressFxPlugin/doc.json":Ll,"/src/custom-plugins/ProgressRingPlugin/doc.json":Kl,"/src/custom-plugins/RedeemCodePlugin/doc.json":oa,"/src/custom-plugins/RewardClaimPlugin/doc.json":Nl,"/src/custom-plugins/RuleExpandPlugin/doc.json":zl,"/src/custom-plugins/RuleModalPlugin/doc.json":Hl,"/src/custom-plugins/ShareBoostPlugin/doc.json":Xl,"/src/custom-plugins/TaskListPlugin/doc.json":Ml,"/src/custom-plugins/TaskTabsPlugin/doc.json":ra}),Iu=Object.assign({"/src/custom-plugins/ActivityHeaderPlugin/create.tsx":JP,"/src/custom-plugins/AnnouncementPlugin/create.tsx":XP,"/src/custom-plugins/CheckinCalendarPlugin/create.tsx":ZP,"/src/custom-plugins/ClaimToastPlugin/create.tsx":qP,"/src/custom-plugins/ConfettiPlugin/create.tsx":ew,"/src/custom-plugins/CountdownTimerPlugin/create.tsx":nw,"/src/custom-plugins/CouponStackPlugin/create.tsx":tw,"/src/custom-plugins/JackpotPlugin/create.tsx":rw,"/src/custom-plugins/LeaderboardPlugin/create.tsx":iw,"/src/custom-plugins/MilestoneBarPlugin/create.tsx":ow,"/src/custom-plugins/ProgressFxPlugin/create.tsx":sw,"/src/custom-plugins/ProgressRingPlugin/create.tsx":lw,"/src/custom-plugins/RedeemCodePlugin/create.tsx":aw,"/src/custom-plugins/RewardClaimPlugin/create.tsx":uw,"/src/custom-plugins/RuleExpandPlugin/create.tsx":cw,"/src/custom-plugins/RuleModalPlugin/create.tsx":dw,"/src/custom-plugins/ShareBoostPlugin/create.tsx":fw,"/src/custom-plugins/TaskListPlugin/create.tsx":pw,"/src/custom-plugins/TaskTabsPlugin/create.tsx":gw}),xf=e=>e.replace(/^.*\/custom-plugins\//,"").replace(/\/.*$/,"");function mw(e){const n=Object.keys(Iu).find(i=>xf(i)===e),t=n?Iu[n]:"",r=/priority:\s*(\d+)/.exec(t);return r?Number(r[1]):0}function hw(e){const n=Object.keys(Du).find(t=>xf(t)===e);return n?Du[n]:{name:e,description:"（缺少 doc.json）"}}const yw=[{dir:"TaskListPlugin",group:"core",make:e=>X(e)},{dir:"TaskTabsPlugin",group:"core",make:e=>eo(e)},{dir:"RewardClaimPlugin",group:"core",make:e=>je(e)},{dir:"RedeemCodePlugin",group:"core",args:{prefix:"VANE"},make:e=>to(e)},{dir:"JackpotPlugin",group:"core",make:e=>no(e)},{dir:"ActivityHeaderPlugin",group:"display",make:e=>Ji(e)},{dir:"AnnouncementPlugin",group:"display",make:e=>na(e)},{dir:"ProgressFxPlugin",group:"display",make:e=>ne(e)},{dir:"ProgressRingPlugin",group:"display",make:e=>Gl(e)},{dir:"CheckinCalendarPlugin",group:"display",make:e=>qi(e)},{dir:"CountdownTimerPlugin",group:"display",make:e=>Il(e)},{dir:"MilestoneBarPlugin",group:"display",make:e=>Fl(e)},{dir:"ConfettiPlugin",group:"display",make:e=>Yl(e)},{dir:"CouponStackPlugin",group:"display",make:e=>Wl(e)},{dir:"RuleExpandPlugin",group:"info",make:e=>nt(e)},{dir:"RuleModalPlugin",group:"info",make:e=>Ul(e)},{dir:"ClaimToastPlugin",group:"social",make:e=>Xi(e)},{dir:"ShareBoostPlugin",group:"social",make:e=>Zi(e)},{dir:"LeaderboardPlugin",group:"social",make:e=>ql(e)}],$i=yw.map(e=>{const n=hw(e.dir),t=e.args??{};return{dir:e.dir,factory:`create${e.dir}`,group:e.group,priority:mw(e.dir),summary:n.description,doc:n,args:t,make:()=>e.make(t)}}).sort((e,n)=>zu.indexOf(e.group)-zu.indexOf(n.group)||n.priority-e.priority),Ou=new Map($i.map(e=>[e.dir,e])),Jw=["TaskListPlugin","RewardClaimPlugin","ProgressFxPlugin"];function vw({entry:e,order:n}){var l;const{meta:t,Stage:r,source:i,file:o}=e,s=String(n).padStart(2,"0");return u.jsxs("article",{children:[u.jsx("header",{className:"page-head",children:u.jsxs("div",{children:[u.jsxs("p",{className:"eyebrow",children:[s," · ",((l=hf[t.group])==null?void 0:l.label)??t.group]}),u.jsx("h1",{className:"page-title",children:t.title})]})}),t.intro?u.jsx("p",{className:"page-sub",children:t.intro}):null,u.jsx("section",{className:"demo-stage",children:u.jsx(r,{})}),u.jsx(WP,{code:i,title:`源码 · ${o}`,collapseAfter:0}),u.jsx(GP,{source:i,plugins:$i})]})}const xw={title:"夏日狂欢 · 7 日签到",tasks:[{id:"t1",title:"每日签到",desc:"连续签到领积分",progress:1,status:"completed",actionLabel:"已签到"},{id:"t2",title:"浏览会场 3 个商品",desc:"了解活动好物",progress:.6,status:"available",actionLabel:"去浏览",rewardId:"r1"},{id:"t3",title:"邀请 1 位好友",desc:"助力解锁终极大奖",progress:0,status:"locked",actionLabel:"去邀请",rewardId:"r2"}],rewards:[{id:"r1",title:"5 元无门槛券",threshold:.5,icon:"🎟️",desc:"浏览达标即可领取"},{id:"r2",title:"20 元会员券",threshold:.9,icon:"💎",desc:"邀请好友后解锁"},{id:"r3",title:"终极大礼包",threshold:1,icon:"🎁",desc:"全部任务完成发放"}],rules:[{title:"活动时间",content:"2024.07.01 - 2024.07.07，逾期任务与奖励失效。"},{title:"领取规则",content:"奖励按总体进度阈值解锁，达标后点击「领取」发放至账户；券类奖励有效期 7 天。"},{title:"特别说明",content:"邀请任务需好友完成注册并首单，视为有效助力；异常账号不予发放。"}]},kw=O(D,[ne(),X(),je(),nt()]),Pw={id:"signin",title:"每日签到",group:"签到",blurb:"进度条 + 任务清单 + 奖励领取 + 规则折叠，最完整的活动闭环。",dataNote:"数据内联 · 加权进度 (1 + 0.6 + 0) / 3 ≈ 53%"};function ww(){return u.jsx(kw,{data:xw,onTaskAction:e=>console.log("task action",e),onClaim:e=>console.log("claim",e)})}const Sw=Object.freeze(Object.defineProperty({__proto__:null,default:ww,meta:Pw},Symbol.toStringTag,{value:"Module"})),bw={title:"限时秒杀 · 冲刺 100%",tasks:[{id:"t1",title:"领取秒杀券",progress:1,status:"completed",actionLabel:"已领取"},{id:"t2",title:"加购 3 件商品",progress:1,status:"completed",actionLabel:"已加购"},{id:"t3",title:"20:00 下单",progress:1,status:"completed",actionLabel:"已下单"}],rewards:[{id:"r1",title:"5 元秒杀券",threshold:.5,icon:"⚡",desc:"加购即得"},{id:"r2",title:"免运费权益",threshold:.8,icon:"🚚",desc:"下单即送"},{id:"r3",title:"整点免单名额",threshold:1,icon:"🎁",desc:"全部完成抽免单"}],rules:"秒杀商品数量有限，下单后 15 分钟内未支付订单自动释放。"},Cw=O(D,[ne({height:12}),X({showProgress:!1}),je({claimedLabel:"已领取"})]),_w={id:"flash",title:"限时秒杀",group:"促销",blurb:"达标即领，无需规则说明：进度特效驱动紧迫感，任务清单与奖励领取就够了。",dataNote:"数据内联 · 三项全完成 (1 + 1 + 1) / 3 = 100%"};function Rw(){return u.jsx(Cw,{data:bw,onTaskAction:e=>console.log("task action",e),onClaim:e=>console.log("claim",e)})}const Tw=Object.freeze(Object.defineProperty({__proto__:null,default:Rw,meta:_w},Symbol.toStringTag,{value:"Module"})),Ew=`/**
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
`,jw=`/**
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
`,$w=Object.assign({"./01-signin.tsx":Sw,"./02-flash.tsx":Tw}),Aw=Object.assign({"./01-signin.tsx":Ew,"./02-flash.tsx":jw}),Lw=e=>e.replace(/^\.\//,"");function Mw(e){return Array.from(new Set(Array.from(e.matchAll(/custom-plugins\/([A-Za-z]+Plugin)/g)).map(t=>t[1]))).sort((t,r)=>{var i,o;return(((i=Ou.get(t))==null?void 0:i.priority)??0)-(((o=Ou.get(r))==null?void 0:o.priority)??0)})}const Ai=Object.entries($w).map(([e,n])=>{const t=Aw[e]??"";return{meta:n.meta,Stage:n.default,file:Lw(e),source:t,plugs:Mw(t)}}).sort((e,n)=>e.file.localeCompare(n.file)),Xw=Array.from(new Set(Ai.map(e=>e.meta.group))),Zw=Array.from(new Set(Ai.flatMap(e=>e.plugs))),Nw=x.lazy(()=>Al(()=>import("./HomePage-6yQiqIle.js"),[],import.meta.url).then(e=>({default:e.HomePage}))),zw=x.lazy(()=>Al(()=>import("./PluginsPage-BRKAIUYl.js"),[],import.meta.url).then(e=>({default:e.PluginsPage}))),Dw=x.lazy(()=>Al(()=>import("./ScenariosPage-B6xerfww.js"),[],import.meta.url).then(e=>({default:e.ScenariosPage}))),Iw={pkg:"vane-activity",brand:"A",subtitle:"营销活动 / plugin index",nav:[{to:"/",label:"总览",hint:"overview"},{to:"/plugins",label:"插件工坊",hint:`${$i.length} plugins`},{to:"/scenarios",label:"场景示例",hint:`${Ai.length} plates`}],routes:[{path:"/",element:u.jsx(Nw,{})},{path:"/plugins",element:u.jsx(zw,{})},{path:"/scenarios",element:u.jsx(Dw,{})}],crumb:e=>e.startsWith("/plugins")?"workshop · 插件工坊":e.startsWith("/scenarios")?"plates · 场景示例":"index · 总览",demos:{label:"逐项示例",groups:DP.map(e=>({key:e,label:hf[e].label})),entries:$s,detail:(e,n)=>u.jsx(vw,{entry:e,order:n})},footer:[`${$i.length} PLUGINS · ${Ai.length} PLATES`,`${$s.length} DEMOS · ACTIVITY CORE`]};function Ow(){return u.jsx(rh,{config:Iw})}const gn={title:"夏日狂欢 · 7 日签到",taskGroups:[{key:"daily",label:"每日",icon:"📅"},{key:"growth",label:"成长",icon:"🌱"},{key:"invite",label:"邀请",icon:"🤝"}],tasks:[{id:"t1",title:"每日签到",desc:"连续签到领积分",progress:1,status:"completed",group:"daily",actionLabel:"已签到"},{id:"t2",title:"浏览会场 3 个商品",desc:"了解活动好物",progress:.6,status:"available",group:"growth",actionLabel:"去浏览",rewardId:"r1"},{id:"t3",title:"邀请 1 位好友",desc:"助力解锁终极大奖",progress:0,status:"locked",group:"invite",actionLabel:"去邀请",rewardId:"r2"}],rewards:[{id:"r1",title:"5 元无门槛券",threshold:.5,icon:"🎟️",desc:"浏览达标即可领取"},{id:"r2",title:"20 元会员券",threshold:.9,icon:"💎",desc:"邀请好友后解锁"},{id:"r3",title:"终极大礼包",threshold:1,icon:"🎁",desc:"全部任务完成发放"}],rules:[{title:"活动时间",content:"2024.07.01 - 2024.07.07，逾期任务与奖励失效。"},{title:"领取规则",content:"奖励按总体进度阈值解锁，达标后点击「领取」发放至账户；券类奖励有效期 7 天。"},{title:"特别说明",content:"邀请任务需好友完成注册并首单，视为有效助力；异常账号不予发放。"}],endTime:"2026-11-10T23:59:59+08:00",share:{total:3,used:1,helpers:[{id:"u1",name:"阿柚",avatar:"🍊"},{id:"u2",name:"小满",avatar:"🌾"}]},leaderboard:[{id:"u1",name:"阿柚",score:1280,avatar:"🍊"},{id:"me",name:"我",score:960,avatar:"🙋",isMe:!0},{id:"u2",name:"小满",score:910,avatar:"🌾"},{id:"u3",name:"大白",score:640,avatar:"🐻"}],announcements:["8.1-8.7 全场券 5 折起，先领券再下单","每日 20:00 抽 20 元无门槛券，限前 1000 名","邀请好友下单再得 10 元红包，上不封顶"],checkin:{days:7,done:3}},Fw={...gn,tasks:gn.tasks.map(e=>({...e,progress:1,status:"completed"}))};function Bw(e){const n=[];if(!e)return{problems:["体检根节点不存在"],checked:0};const t=Array.from(e.querySelectorAll('[data-testid="activity-task"], [data-testid="activity-reward"]'));let r=0;const i=e.getBoundingClientRect();if(!(i.width!==0||i.height!==0||t.some(l=>{const a=l.getBoundingClientRect();return a.width!==0||a.height!==0})))return{problems:[],checked:0};for(const l of t){r+=1;const a=l.getBoundingClientRect();if(a.width===0||a.height===0){n.push(`零尺寸卡片（${a.width}×${a.height}）`);continue}const c=a.left-i.left,f=a.top-i.top;(c<-.5||f<-.5)&&n.push(`负坐标卡片（left=${c.toFixed(1)}, top=${f.toFixed(1)}）`),(a.right-i.right>1||a.bottom-i.bottom>1)&&n.push(`越界卡片（超出宿主右/下边界 ${(a.right-i.right).toFixed(1)}/${(a.bottom-i.bottom).toFixed(1)}px）`)}for(let l=0;l<t.length;l+=1)for(let a=l+1;a<t.length;a+=1){const c=t[l].getBoundingClientRect(),f=t[a].getBoundingClientRect();c.left<f.right-1&&f.left<c.right-1&&c.top<f.bottom-1&&f.top<c.bottom-1&&n.push(`卡片重叠：第 ${l+1} 与第 ${a+1} 张`)}const s=t.reduce((l,a)=>Math.max(l,a.getBoundingClientRect().bottom-i.top),0);return t.length&&e.scrollHeight+1<s&&n.push(`容器未撑开：scrollHeight=${e.scrollHeight} 小于内容底边 ${s.toFixed(1)}`),{problems:Array.from(new Set(n)),checked:r}}const Ww=O(D,[X(),ne(),je(),nt()]),Hw=O(D,[X(),je(),Xi({durationMs:8e3})]);function Fu({data:e,onTaskAction:n,onClaim:t}){return u.jsx(Ww,{data:e,onTaskAction:n,onClaim:t})}function Uw({data:e,onClaim:n}){return u.jsx(Hw,{data:e,onClaim:n})}const Bu=()=>new Promise(e=>setTimeout(e,0)),kf=()=>!!globalThis.IS_REACT_ACT_ENVIRONMENT,Xe=e=>{kf()?x.act(e):_l.flushSync(e)},Vw=async e=>{kf()?await x.act(async()=>{e(),await new Promise(n=>setTimeout(n,0))}):_l.flushSync(e)};async function In(e){const n=document.createElement("div");n.style.cssText="position:fixed;left:0;top:0;width:420px;background:#fff",document.body.appendChild(n);const t=ef(n);return Xe(()=>t.render(e)),await Bu(),{host:n,root:t,q:r=>n.querySelector(r),qa:r=>Array.from(n.querySelectorAll(r)),text:()=>n.textContent??"",clickEl:async r=>{await Vw(()=>r.click()),await Bu()}}}function Qr(e,n,t){return e?Array.from(e.querySelectorAll(n)).find(r=>(r.textContent??"").includes(t))??null:null}async function Yw(){var r;const e=[];let n=0;const t=(i,o)=>{n+=1,document.title=`SELFTEST RUNNING ${n}`,o||e.push(i)};{const i=[],o=[],s=await In(u.jsx(Fu,{data:gn,onTaskAction:k=>i.push(k),onClaim:k=>o.push(k)})),l=s.q(".vc-activity");t("渲染：活动根节点 .vc-activity 存在",!!l),t("渲染：任务卡片 = 3",s.qa('[data-testid="activity-task"]').length===3),t("渲染：奖励卡片 = 3",s.qa('[data-testid="activity-reward"]').length===3),t("进度：显示 53%（sampleActivity 加权）",((l==null?void 0:l.textContent)??"").includes("53%")),t("几何体检：无叠卡/溢出/零尺寸",Bw(l).problems.length===0);const a=Qr(l,'[data-testid="activity-task"]',"浏览会场"),c=(a==null?void 0:a.querySelector("button"))??null;t("任务：存在 t2 浏览任务卡片",!!a),t("任务：t2 渲染动作按钮",!!c),c&&await s.clickEl(c),t("任务：点击「去浏览」触发 onTaskAction('t2')",i.includes("t2"));const f=Qr(l,'[data-testid="activity-reward"]',"5 元无门槛券"),p=f==null?void 0:f.querySelector("button");t("奖励：r1(5元券) 渲染领取按钮",!!p),t("奖励：r1 按钮可点（claimable）",!!p&&!p.disabled),p&&await s.clickEl(p),t("奖励：点击「领取」触发 onClaim('r1')",o.includes("r1"));const h=Qr(l,'[data-testid="activity-reward"]',"终极大礼包"),m=h==null?void 0:h.querySelector("button");t("奖励：r3(阈值1) 未解锁且禁用",!!m&&m.disabled);const v=s.qa("button").find(k=>(k.textContent??"").includes("活动规则"));t("规则：渲染「活动规则」按钮",!!v),t("规则：初始 aria-expanded=false",(v==null?void 0:v.getAttribute("aria-expanded"))==="false"),v&&await s.clickEl(v),t("规则：点击后 aria-expanded=true",(v==null?void 0:v.getAttribute("aria-expanded"))==="true"),Xe(()=>s.root.unmount()),s.host.remove()}{const i=await In(u.jsx(Fu,{data:Fw})),o=i.q(".vc-activity");t("全完成：进度显示 100%",((o==null?void 0:o.textContent)??"").includes("100%")),t("全完成：触发「进度达成 100%」庆祝浮层",((o==null?void 0:o.textContent)??"").includes("进度达成 100%")),Xe(()=>i.root.unmount()),i.host.remove()}{const i=[],o=await In(u.jsx(Uw,{data:gn,onClaim:c=>i.push(c)})),s=o.q(".vc-activity"),l=Qr(s,'[data-testid="activity-reward"]',"5 元无门槛券"),a=l==null?void 0:l.querySelector("button");t("toast：领取前浮层为空（首屏不补弹）",((s==null?void 0:s.textContent)??"").includes("已领取：")===!1),a&&await o.clickEl(a),t("toast：点击领取触发 onClaim('r1')",i.includes("r1")),t("toast：领取后浮出「已领取：5 元无门槛券」",((s==null?void 0:s.textContent)??"").includes("已领取：5 元无门槛券")),t("toast：role=status 可被读屏播报",o.qa('[role="status"]').length>0),Xe(()=>o.root.unmount()),o.host.remove()}{const i=O(D,[eo()]),o=await In(u.jsx(i,{data:gn}));t("tabs：渲染 3 个分组页签",o.qa('[data-testid="task-tab"]').length===3),t("tabs：默认页签（每日）只显示本组任务",o.qa('[data-testid="activity-task"]').every(w=>(w.textContent??"").includes("每日签到"))),await o.clickEl(o.qa('[data-testid="task-tab"]')[1]),t("tabs：切到「成长」后显示浏览任务",(((r=o.qa('[data-testid="activity-task"]')[0])==null?void 0:r.textContent)??"").includes("浏览会场")),Xe(()=>o.root.unmount()),o.host.remove();const s=O(D,[qi()]),l=await In(u.jsx(s,{data:gn}));t("checkin：初始显示 3/7 天",(l.text()??"").includes("3/7 天"));const a=l.qa("button").find(w=>w.textContent==="今日签到");t("checkin：渲染可点的「今日签到」按钮",!!a&&!a.disabled),a&&await l.clickEl(a),t("checkin：签到后推进到 4/7 天",(l.text()??"").includes("4/7 天")),Xe(()=>l.root.unmount()),l.host.remove();const c=O(D,[no({times:1})]),f=await In(u.jsx(c,{data:gn}));t("jackpot：渲染 8 个奖励格",f.qa('[data-testid="jackpot-cell"]').length===8);const p=f.qa("button").find(w=>w.textContent==="抽一次");t("jackpot：初始剩余 1 次",(f.text()??"").includes("剩余 1 次")),p&&await f.clickEl(p),t("jackpot：抽一次后剩余 0 次",(f.text()??"").includes("剩余 0 次")),t("jackpot：按钮进入「抽取中」态",f.qa("button").some(w=>w.textContent==="抽取中")),Xe(()=>f.root.unmount()),f.host.remove();const h=O(D,[to({prefix:"VANE",minLength:8,onRedeem:w=>w==="VANE-8888"})]),m=await In(u.jsx(h,{data:gn})),v=m.q("input");t("redeem：渲染兑换码输入框",!!v),await m.clickEl(m.qa("button").find(w=>w.textContent==="兑换")),t("redeem：空值提交提示「请输入兑换码」",(m.text()??"").includes("请输入兑换码"));const k=(w,g)=>{var y;const d=(y=Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,"value"))==null?void 0:y.set;Xe(()=>{d==null||d.call(w,g),w.dispatchEvent(new Event("input",{bubbles:!0}))})};k(v,"VANE-9999"),await m.clickEl(m.qa("button").find(w=>w.textContent==="兑换")),t("redeem：错误码提示「兑换码无效或已被使用」",(m.text()??"").includes("兑换码无效或已被使用")),k(v,"vane-8888"),await m.clickEl(m.qa("button").find(w=>w.textContent==="兑换")),t("redeem：正确码（小写自动归一）提示兑换成功",(m.text()??"").includes("兑换成功")),Xe(()=>m.root.unmount()),m.host.remove()}return{total:n,passed:n-e.length,failed:e}}async function Qw(){document.title="SELFTEST RUNNING";try{const e=await Yw();document.title=e.failed.length===0?`SELFTEST OK ${e.passed}/${e.total}`:`SELFTEST FAIL ${e.passed}/${e.total} :: ${e.failed.join(" | ")}`}catch(e){document.title=`SELFTEST ERROR :: ${e.message}`}}Lo.createRoot(document.getElementById("root")).render(u.jsx(Ow,{}));typeof location<"u"&&location.search.includes("selftest=1")&&Qw();export{D as A,WP as C,$s as D,zu as G,js as L,$i as P,Ai as S,Zw as U,Jw as a,Gw as b,HP as c,Ou as d,UP as e,Xw as f,u as j,x as r,gn as s,O as w};
