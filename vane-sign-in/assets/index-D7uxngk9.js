var af=Object.defineProperty;var sf=(e,n,t)=>n in e?af(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var ns=(e,n,t)=>sf(e,typeof n!="symbol"?n+"":n,t);function uf(e,n){for(var t=0;t<n.length;t++){const r=n[t];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const l=Object.getOwnPropertyDescriptor(r,i);l&&Object.defineProperty(e,i,l.get?l:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(i){if(i.ep)return;i.ep=!0;const l=t(i);fetch(i.href,l)}})();function cf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var bu={exports:{}},Hi={},ju={exports:{}},D={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $r=Symbol.for("react.element"),df=Symbol.for("react.portal"),ff=Symbol.for("react.fragment"),pf=Symbol.for("react.strict_mode"),gf=Symbol.for("react.profiler"),mf=Symbol.for("react.provider"),hf=Symbol.for("react.context"),yf=Symbol.for("react.forward_ref"),vf=Symbol.for("react.suspense"),Sf=Symbol.for("react.memo"),xf=Symbol.for("react.lazy"),ts=Symbol.iterator;function wf(e){return e===null||typeof e!="object"?null:(e=ts&&e[ts]||e["@@iterator"],typeof e=="function"?e:null)}var $u={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Du=Object.assign,Nu={};function Tt(e,n,t){this.props=e,this.context=n,this.refs=Nu,this.updater=t||$u}Tt.prototype.isReactComponent={};Tt.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};Tt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Mu(){}Mu.prototype=Tt.prototype;function zo(e,n,t){this.props=e,this.context=n,this.refs=Nu,this.updater=t||$u}var Lo=zo.prototype=new Mu;Lo.constructor=zo;Du(Lo,Tt.prototype);Lo.isPureReactComponent=!0;var rs=Array.isArray,Ou=Object.prototype.hasOwnProperty,Ao={current:null},zu={key:!0,ref:!0,__self:!0,__source:!0};function Lu(e,n,t){var r,i={},l=null,o=null;if(n!=null)for(r in n.ref!==void 0&&(o=n.ref),n.key!==void 0&&(l=""+n.key),n)Ou.call(n,r)&&!zu.hasOwnProperty(r)&&(i[r]=n[r]);var a=arguments.length-2;if(a===1)i.children=t;else if(1<a){for(var s=Array(a),u=0;u<a;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:$r,type:e,key:l,ref:o,props:i,_owner:Ao.current}}function kf(e,n){return{$$typeof:$r,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Bo(e){return typeof e=="object"&&e!==null&&e.$$typeof===$r}function Pf(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var is=/\/+/g;function ul(e,n){return typeof e=="object"&&e!==null&&e.key!=null?Pf(""+e.key):n.toString(36)}function li(e,n,t,r,i){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(l){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case $r:case df:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+ul(o,0):r,rs(i)?(t="",e!=null&&(t=e.replace(is,"$&/")+"/"),li(i,n,t,"",function(u){return u})):i!=null&&(Bo(i)&&(i=kf(i,t+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(is,"$&/")+"/")+e)),n.push(i)),1;if(o=0,r=r===""?".":r+":",rs(e))for(var a=0;a<e.length;a++){l=e[a];var s=r+ul(l,a);o+=li(l,n,t,s,i)}else if(s=wf(e),typeof s=="function")for(e=s.call(e),a=0;!(l=e.next()).done;)l=l.value,s=r+ul(l,a++),o+=li(l,n,t,s,i);else if(l==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return o}function Fr(e,n,t){if(e==null)return e;var r=[],i=0;return li(e,r,"","",function(l){return n.call(t,l,i++)}),r}function _f(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var me={current:null},oi={transition:null},Cf={ReactCurrentDispatcher:me,ReactCurrentBatchConfig:oi,ReactCurrentOwner:Ao};function Au(){throw Error("act(...) is not supported in production builds of React.")}D.Children={map:Fr,forEach:function(e,n,t){Fr(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return Fr(e,function(){n++}),n},toArray:function(e){return Fr(e,function(n){return n})||[]},only:function(e){if(!Bo(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};D.Component=Tt;D.Fragment=ff;D.Profiler=gf;D.PureComponent=zo;D.StrictMode=pf;D.Suspense=vf;D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Cf;D.act=Au;D.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Du({},e.props),i=e.key,l=e.ref,o=e._owner;if(n!=null){if(n.ref!==void 0&&(l=n.ref,o=Ao.current),n.key!==void 0&&(i=""+n.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in n)Ou.call(n,s)&&!zu.hasOwnProperty(s)&&(r[s]=n[s]===void 0&&a!==void 0?a[s]:n[s])}var s=arguments.length-2;if(s===1)r.children=t;else if(1<s){a=Array(s);for(var u=0;u<s;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:$r,type:e.type,key:i,ref:l,props:r,_owner:o}};D.createContext=function(e){return e={$$typeof:hf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:mf,_context:e},e.Consumer=e};D.createElement=Lu;D.createFactory=function(e){var n=Lu.bind(null,e);return n.type=e,n};D.createRef=function(){return{current:null}};D.forwardRef=function(e){return{$$typeof:yf,render:e}};D.isValidElement=Bo;D.lazy=function(e){return{$$typeof:xf,_payload:{_status:-1,_result:e},_init:_f}};D.memo=function(e,n){return{$$typeof:Sf,type:e,compare:n===void 0?null:n}};D.startTransition=function(e){var n=oi.transition;oi.transition={};try{e()}finally{oi.transition=n}};D.unstable_act=Au;D.useCallback=function(e,n){return me.current.useCallback(e,n)};D.useContext=function(e){return me.current.useContext(e)};D.useDebugValue=function(){};D.useDeferredValue=function(e){return me.current.useDeferredValue(e)};D.useEffect=function(e,n){return me.current.useEffect(e,n)};D.useId=function(){return me.current.useId()};D.useImperativeHandle=function(e,n,t){return me.current.useImperativeHandle(e,n,t)};D.useInsertionEffect=function(e,n){return me.current.useInsertionEffect(e,n)};D.useLayoutEffect=function(e,n){return me.current.useLayoutEffect(e,n)};D.useMemo=function(e,n){return me.current.useMemo(e,n)};D.useReducer=function(e,n,t){return me.current.useReducer(e,n,t)};D.useRef=function(e){return me.current.useRef(e)};D.useState=function(e){return me.current.useState(e)};D.useSyncExternalStore=function(e,n,t){return me.current.useSyncExternalStore(e,n,t)};D.useTransition=function(){return me.current.useTransition()};D.version="18.3.1";ju.exports=D;var v=ju.exports;const Dr=cf(v),Ef=uf({__proto__:null,default:Dr},[v]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rf=v,If=Symbol.for("react.element"),Tf=Symbol.for("react.fragment"),bf=Object.prototype.hasOwnProperty,jf=Rf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,$f={key:!0,ref:!0,__self:!0,__source:!0};function Bu(e,n,t){var r,i={},l=null,o=null;t!==void 0&&(l=""+t),n.key!==void 0&&(l=""+n.key),n.ref!==void 0&&(o=n.ref);for(r in n)bf.call(n,r)&&!$f.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)i[r]===void 0&&(i[r]=n[r]);return{$$typeof:If,type:e,key:l,ref:o,props:i,_owner:jf.current}}Hi.Fragment=Tf;Hi.jsx=Bu;Hi.jsxs=Bu;bu.exports=Hi;var m=bu.exports,Ol={},Fu={exports:{}},Re={},Uu={exports:{}},Wu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(E,b){var j=E.length;E.push(b);e:for(;0<j;){var Y=j-1>>>1,re=E[Y];if(0<i(re,b))E[Y]=b,E[j]=re,j=Y;else break e}}function t(E){return E.length===0?null:E[0]}function r(E){if(E.length===0)return null;var b=E[0],j=E.pop();if(j!==b){E[0]=j;e:for(var Y=0,re=E.length,Ar=re>>>1;Y<Ar;){var Mn=2*(Y+1)-1,sl=E[Mn],On=Mn+1,Br=E[On];if(0>i(sl,j))On<re&&0>i(Br,sl)?(E[Y]=Br,E[On]=j,Y=On):(E[Y]=sl,E[Mn]=j,Y=Mn);else if(On<re&&0>i(Br,j))E[Y]=Br,E[On]=j,Y=On;else break e}}return b}function i(E,b){var j=E.sortIndex-b.sortIndex;return j!==0?j:E.id-b.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var s=[],u=[],f=1,c=null,p=3,y=!1,S=!1,x=!1,k=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(E){for(var b=t(u);b!==null;){if(b.callback===null)r(u);else if(b.startTime<=E)r(u),b.sortIndex=b.expirationTime,n(s,b);else break;b=t(u)}}function w(E){if(x=!1,h(E),!S)if(t(s)!==null)S=!0,Ke(_);else{var b=t(u);b!==null&&al(w,b.startTime-E)}}function _(E,b){S=!1,x&&(x=!1,g(T),T=-1),y=!0;var j=p;try{for(h(b),c=t(s);c!==null&&(!(c.expirationTime>b)||E&&!ke());){var Y=c.callback;if(typeof Y=="function"){c.callback=null,p=c.priorityLevel;var re=Y(c.expirationTime<=b);b=e.unstable_now(),typeof re=="function"?c.callback=re:c===t(s)&&r(s),h(b)}else r(s);c=t(s)}if(c!==null)var Ar=!0;else{var Mn=t(u);Mn!==null&&al(w,Mn.startTime-b),Ar=!1}return Ar}finally{c=null,p=j,y=!1}}var R=!1,I=null,T=-1,U=5,$=-1;function ke(){return!(e.unstable_now()-$<U)}function te(){if(I!==null){var E=e.unstable_now();$=E;var b=!0;try{b=I(!0,E)}finally{b?K():(R=!1,I=null)}}else R=!1}var K;if(typeof d=="function")K=function(){d(te)};else if(typeof MessageChannel<"u"){var We=new MessageChannel,Wt=We.port2;We.port1.onmessage=te,K=function(){Wt.postMessage(null)}}else K=function(){k(te,0)};function Ke(E){I=E,R||(R=!0,K())}function al(E,b){T=k(function(){E(e.unstable_now())},b)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){S||y||(S=!0,Ke(_))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return t(s)},e.unstable_next=function(E){switch(p){case 1:case 2:case 3:var b=3;break;default:b=p}var j=p;p=b;try{return E()}finally{p=j}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,b){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var j=p;p=E;try{return b()}finally{p=j}},e.unstable_scheduleCallback=function(E,b,j){var Y=e.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?Y+j:Y):j=Y,E){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=j+re,E={id:f++,callback:b,priorityLevel:E,startTime:j,expirationTime:re,sortIndex:-1},j>Y?(E.sortIndex=j,n(u,E),t(s)===null&&E===t(u)&&(x?(g(T),T=-1):x=!0,al(w,j-Y))):(E.sortIndex=re,n(s,E),S||y||(S=!0,Ke(_))),E},e.unstable_shouldYield=ke,e.unstable_wrapCallback=function(E){var b=p;return function(){var j=p;p=b;try{return E.apply(this,arguments)}finally{p=j}}}})(Wu);Uu.exports=Wu;var Df=Uu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nf=v,Ee=Df;function P(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Hu=new Set,pr={};function Yn(e,n){kt(e,n),kt(e+"Capture",n)}function kt(e,n){for(pr[e]=n,e=0;e<n.length;e++)Hu.add(n[e])}var nn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zl=Object.prototype.hasOwnProperty,Mf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ls={},os={};function Of(e){return zl.call(os,e)?!0:zl.call(ls,e)?!1:Mf.test(e)?os[e]=!0:(ls[e]=!0,!1)}function zf(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Lf(e,n,t,r){if(n===null||typeof n>"u"||zf(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function he(e,n,t,r,i,l,o){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=l,this.removeEmptyString=o}var se={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){se[e]=new he(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];se[n]=new he(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){se[e]=new he(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){se[e]=new he(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){se[e]=new he(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){se[e]=new he(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){se[e]=new he(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){se[e]=new he(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){se[e]=new he(e,5,!1,e.toLowerCase(),null,!1,!1)});var Fo=/[\-:]([a-z])/g;function Uo(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Fo,Uo);se[n]=new he(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Fo,Uo);se[n]=new he(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Fo,Uo);se[n]=new he(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){se[e]=new he(e,1,!1,e.toLowerCase(),null,!1,!1)});se.xlinkHref=new he("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){se[e]=new he(e,1,!1,e.toLowerCase(),null,!0,!0)});function Wo(e,n,t,r){var i=se.hasOwnProperty(n)?se[n]:null;(i!==null?i.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Lf(n,t,i,r)&&(t=null),r||i===null?Of(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(n=i.attributeName,r=i.attributeNamespace,t===null?e.removeAttribute(n):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var an=Nf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ur=Symbol.for("react.element"),it=Symbol.for("react.portal"),lt=Symbol.for("react.fragment"),Ho=Symbol.for("react.strict_mode"),Ll=Symbol.for("react.profiler"),Vu=Symbol.for("react.provider"),Gu=Symbol.for("react.context"),Vo=Symbol.for("react.forward_ref"),Al=Symbol.for("react.suspense"),Bl=Symbol.for("react.suspense_list"),Go=Symbol.for("react.memo"),cn=Symbol.for("react.lazy"),Qu=Symbol.for("react.offscreen"),as=Symbol.iterator;function Ht(e){return e===null||typeof e!="object"?null:(e=as&&e[as]||e["@@iterator"],typeof e=="function"?e:null)}var V=Object.assign,cl;function qt(e){if(cl===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);cl=n&&n[1]||""}return`
`+cl+e}var dl=!1;function fl(e,n){if(!e||dl)return"";dl=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(u){var r=u}Reflect.construct(e,[],n)}else{try{n.call()}catch(u){r=u}e.call(n.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),l=r.stack.split(`
`),o=i.length-1,a=l.length-1;1<=o&&0<=a&&i[o]!==l[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==l[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==l[a]){var s=`
`+i[o].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=o&&0<=a);break}}}finally{dl=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?qt(e):""}function Af(e){switch(e.tag){case 5:return qt(e.type);case 16:return qt("Lazy");case 13:return qt("Suspense");case 19:return qt("SuspenseList");case 0:case 2:case 15:return e=fl(e.type,!1),e;case 11:return e=fl(e.type.render,!1),e;case 1:return e=fl(e.type,!0),e;default:return""}}function Fl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case lt:return"Fragment";case it:return"Portal";case Ll:return"Profiler";case Ho:return"StrictMode";case Al:return"Suspense";case Bl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Gu:return(e.displayName||"Context")+".Consumer";case Vu:return(e._context.displayName||"Context")+".Provider";case Vo:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Go:return n=e.displayName||null,n!==null?n:Fl(e.type)||"Memo";case cn:n=e._payload,e=e._init;try{return Fl(e(n))}catch{}}return null}function Bf(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Fl(n);case 8:return n===Ho?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function En(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Xu(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ff(e){var n=Xu(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,l=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,l.call(this,o)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Wr(e){e._valueTracker||(e._valueTracker=Ff(e))}function Ku(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=Xu(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function yi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ul(e,n){var t=n.checked;return V({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function ss(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=En(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Yu(e,n){n=n.checked,n!=null&&Wo(e,"checked",n,!1)}function Wl(e,n){Yu(e,n);var t=En(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Hl(e,n.type,t):n.hasOwnProperty("defaultValue")&&Hl(e,n.type,En(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function us(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Hl(e,n,t){(n!=="number"||yi(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var er=Array.isArray;function ht(e,n,t,r){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&r&&(e[t].defaultSelected=!0)}else{for(t=""+En(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function Vl(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(P(91));return V({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function cs(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(P(92));if(er(t)){if(1<t.length)throw Error(P(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:En(t)}}function Ju(e,n){var t=En(n.value),r=En(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function ds(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Zu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Gl(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Zu(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Hr,qu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,i){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,i)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Hr=Hr||document.createElement("div"),Hr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Hr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function gr(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var ir={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Uf=["Webkit","ms","Moz","O"];Object.keys(ir).forEach(function(e){Uf.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),ir[n]=ir[e]})});function ec(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||ir.hasOwnProperty(e)&&ir[e]?(""+n).trim():n+"px"}function nc(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,i=ec(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,i):e[t]=i}}var Wf=V({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ql(e,n){if(n){if(Wf[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(P(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(P(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(P(61))}if(n.style!=null&&typeof n.style!="object")throw Error(P(62))}}function Xl(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Kl=null;function Qo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Yl=null,yt=null,vt=null;function fs(e){if(e=Or(e)){if(typeof Yl!="function")throw Error(P(280));var n=e.stateNode;n&&(n=Ki(n),Yl(e.stateNode,e.type,n))}}function tc(e){yt?vt?vt.push(e):vt=[e]:yt=e}function rc(){if(yt){var e=yt,n=vt;if(vt=yt=null,fs(e),n)for(e=0;e<n.length;e++)fs(n[e])}}function ic(e,n){return e(n)}function lc(){}var pl=!1;function oc(e,n,t){if(pl)return e(n,t);pl=!0;try{return ic(e,n,t)}finally{pl=!1,(yt!==null||vt!==null)&&(lc(),rc())}}function mr(e,n){var t=e.stateNode;if(t===null)return null;var r=Ki(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(P(231,n,typeof t));return t}var Jl=!1;if(nn)try{var Vt={};Object.defineProperty(Vt,"passive",{get:function(){Jl=!0}}),window.addEventListener("test",Vt,Vt),window.removeEventListener("test",Vt,Vt)}catch{Jl=!1}function Hf(e,n,t,r,i,l,o,a,s){var u=Array.prototype.slice.call(arguments,3);try{n.apply(t,u)}catch(f){this.onError(f)}}var lr=!1,vi=null,Si=!1,Zl=null,Vf={onError:function(e){lr=!0,vi=e}};function Gf(e,n,t,r,i,l,o,a,s){lr=!1,vi=null,Hf.apply(Vf,arguments)}function Qf(e,n,t,r,i,l,o,a,s){if(Gf.apply(this,arguments),lr){if(lr){var u=vi;lr=!1,vi=null}else throw Error(P(198));Si||(Si=!0,Zl=u)}}function Jn(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function ac(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function ps(e){if(Jn(e)!==e)throw Error(P(188))}function Xf(e){var n=e.alternate;if(!n){if(n=Jn(e),n===null)throw Error(P(188));return n!==e?null:e}for(var t=e,r=n;;){var i=t.return;if(i===null)break;var l=i.alternate;if(l===null){if(r=i.return,r!==null){t=r;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===t)return ps(i),e;if(l===r)return ps(i),n;l=l.sibling}throw Error(P(188))}if(t.return!==r.return)t=i,r=l;else{for(var o=!1,a=i.child;a;){if(a===t){o=!0,t=i,r=l;break}if(a===r){o=!0,r=i,t=l;break}a=a.sibling}if(!o){for(a=l.child;a;){if(a===t){o=!0,t=l,r=i;break}if(a===r){o=!0,r=l,t=i;break}a=a.sibling}if(!o)throw Error(P(189))}}if(t.alternate!==r)throw Error(P(190))}if(t.tag!==3)throw Error(P(188));return t.stateNode.current===t?e:n}function sc(e){return e=Xf(e),e!==null?uc(e):null}function uc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=uc(e);if(n!==null)return n;e=e.sibling}return null}var cc=Ee.unstable_scheduleCallback,gs=Ee.unstable_cancelCallback,Kf=Ee.unstable_shouldYield,Yf=Ee.unstable_requestPaint,J=Ee.unstable_now,Jf=Ee.unstable_getCurrentPriorityLevel,Xo=Ee.unstable_ImmediatePriority,dc=Ee.unstable_UserBlockingPriority,xi=Ee.unstable_NormalPriority,Zf=Ee.unstable_LowPriority,fc=Ee.unstable_IdlePriority,Vi=null,Qe=null;function qf(e){if(Qe&&typeof Qe.onCommitFiberRoot=="function")try{Qe.onCommitFiberRoot(Vi,e,void 0,(e.current.flags&128)===128)}catch{}}var Ae=Math.clz32?Math.clz32:tp,ep=Math.log,np=Math.LN2;function tp(e){return e>>>=0,e===0?32:31-(ep(e)/np|0)|0}var Vr=64,Gr=4194304;function nr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function wi(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,i=e.suspendedLanes,l=e.pingedLanes,o=t&268435455;if(o!==0){var a=o&~i;a!==0?r=nr(a):(l&=o,l!==0&&(r=nr(l)))}else o=t&~i,o!==0?r=nr(o):l!==0&&(r=nr(l));if(r===0)return 0;if(n!==0&&n!==r&&!(n&i)&&(i=r&-r,l=n&-n,i>=l||i===16&&(l&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-Ae(n),i=1<<t,r|=e[t],n&=~i;return r}function rp(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ip(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var o=31-Ae(l),a=1<<o,s=i[o];s===-1?(!(a&t)||a&r)&&(i[o]=rp(a,n)):s<=n&&(e.expiredLanes|=a),l&=~a}}function ql(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function pc(){var e=Vr;return Vr<<=1,!(Vr&4194240)&&(Vr=64),e}function gl(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Nr(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Ae(n),e[n]=t}function lp(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-Ae(t),l=1<<i;n[i]=0,r[i]=-1,e[i]=-1,t&=~l}}function Ko(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-Ae(t),i=1<<r;i&n|e[r]&n&&(e[r]|=n),t&=~i}}var M=0;function gc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var mc,Yo,hc,yc,vc,eo=!1,Qr=[],yn=null,vn=null,Sn=null,hr=new Map,yr=new Map,fn=[],op="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ms(e,n){switch(e){case"focusin":case"focusout":yn=null;break;case"dragenter":case"dragleave":vn=null;break;case"mouseover":case"mouseout":Sn=null;break;case"pointerover":case"pointerout":hr.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":yr.delete(n.pointerId)}}function Gt(e,n,t,r,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:l,targetContainers:[i]},n!==null&&(n=Or(n),n!==null&&Yo(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function ap(e,n,t,r,i){switch(n){case"focusin":return yn=Gt(yn,e,n,t,r,i),!0;case"dragenter":return vn=Gt(vn,e,n,t,r,i),!0;case"mouseover":return Sn=Gt(Sn,e,n,t,r,i),!0;case"pointerover":var l=i.pointerId;return hr.set(l,Gt(hr.get(l)||null,e,n,t,r,i)),!0;case"gotpointercapture":return l=i.pointerId,yr.set(l,Gt(yr.get(l)||null,e,n,t,r,i)),!0}return!1}function Sc(e){var n=An(e.target);if(n!==null){var t=Jn(n);if(t!==null){if(n=t.tag,n===13){if(n=ac(t),n!==null){e.blockedOn=n,vc(e.priority,function(){hc(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ai(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=no(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);Kl=r,t.target.dispatchEvent(r),Kl=null}else return n=Or(t),n!==null&&Yo(n),e.blockedOn=t,!1;n.shift()}return!0}function hs(e,n,t){ai(e)&&t.delete(n)}function sp(){eo=!1,yn!==null&&ai(yn)&&(yn=null),vn!==null&&ai(vn)&&(vn=null),Sn!==null&&ai(Sn)&&(Sn=null),hr.forEach(hs),yr.forEach(hs)}function Qt(e,n){e.blockedOn===n&&(e.blockedOn=null,eo||(eo=!0,Ee.unstable_scheduleCallback(Ee.unstable_NormalPriority,sp)))}function vr(e){function n(i){return Qt(i,e)}if(0<Qr.length){Qt(Qr[0],e);for(var t=1;t<Qr.length;t++){var r=Qr[t];r.blockedOn===e&&(r.blockedOn=null)}}for(yn!==null&&Qt(yn,e),vn!==null&&Qt(vn,e),Sn!==null&&Qt(Sn,e),hr.forEach(n),yr.forEach(n),t=0;t<fn.length;t++)r=fn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<fn.length&&(t=fn[0],t.blockedOn===null);)Sc(t),t.blockedOn===null&&fn.shift()}var St=an.ReactCurrentBatchConfig,ki=!0;function up(e,n,t,r){var i=M,l=St.transition;St.transition=null;try{M=1,Jo(e,n,t,r)}finally{M=i,St.transition=l}}function cp(e,n,t,r){var i=M,l=St.transition;St.transition=null;try{M=4,Jo(e,n,t,r)}finally{M=i,St.transition=l}}function Jo(e,n,t,r){if(ki){var i=no(e,n,t,r);if(i===null)_l(e,n,r,Pi,t),ms(e,r);else if(ap(i,e,n,t,r))r.stopPropagation();else if(ms(e,r),n&4&&-1<op.indexOf(e)){for(;i!==null;){var l=Or(i);if(l!==null&&mc(l),l=no(e,n,t,r),l===null&&_l(e,n,r,Pi,t),l===i)break;i=l}i!==null&&r.stopPropagation()}else _l(e,n,r,null,t)}}var Pi=null;function no(e,n,t,r){if(Pi=null,e=Qo(r),e=An(e),e!==null)if(n=Jn(e),n===null)e=null;else if(t=n.tag,t===13){if(e=ac(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Pi=e,null}function xc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Jf()){case Xo:return 1;case dc:return 4;case xi:case Zf:return 16;case fc:return 536870912;default:return 16}default:return 16}}var gn=null,Zo=null,si=null;function wc(){if(si)return si;var e,n=Zo,t=n.length,r,i="value"in gn?gn.value:gn.textContent,l=i.length;for(e=0;e<t&&n[e]===i[e];e++);var o=t-e;for(r=1;r<=o&&n[t-r]===i[l-r];r++);return si=i.slice(e,1<r?1-r:void 0)}function ui(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Xr(){return!0}function ys(){return!1}function Ie(e){function n(t,r,i,l,o){this._reactName=t,this._targetInst=i,this.type=r,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(l):l[a]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Xr:ys,this.isPropagationStopped=ys,this}return V(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Xr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Xr)},persist:function(){},isPersistent:Xr}),n}var bt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qo=Ie(bt),Mr=V({},bt,{view:0,detail:0}),dp=Ie(Mr),ml,hl,Xt,Gi=V({},Mr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ea,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Xt&&(Xt&&e.type==="mousemove"?(ml=e.screenX-Xt.screenX,hl=e.screenY-Xt.screenY):hl=ml=0,Xt=e),ml)},movementY:function(e){return"movementY"in e?e.movementY:hl}}),vs=Ie(Gi),fp=V({},Gi,{dataTransfer:0}),pp=Ie(fp),gp=V({},Mr,{relatedTarget:0}),yl=Ie(gp),mp=V({},bt,{animationName:0,elapsedTime:0,pseudoElement:0}),hp=Ie(mp),yp=V({},bt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),vp=Ie(yp),Sp=V({},bt,{data:0}),Ss=Ie(Sp),xp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pp(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=kp[e])?!!n[e]:!1}function ea(){return Pp}var _p=V({},Mr,{key:function(e){if(e.key){var n=xp[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=ui(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?wp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ea,charCode:function(e){return e.type==="keypress"?ui(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ui(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Cp=Ie(_p),Ep=V({},Gi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xs=Ie(Ep),Rp=V({},Mr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ea}),Ip=Ie(Rp),Tp=V({},bt,{propertyName:0,elapsedTime:0,pseudoElement:0}),bp=Ie(Tp),jp=V({},Gi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),$p=Ie(jp),Dp=[9,13,27,32],na=nn&&"CompositionEvent"in window,or=null;nn&&"documentMode"in document&&(or=document.documentMode);var Np=nn&&"TextEvent"in window&&!or,kc=nn&&(!na||or&&8<or&&11>=or),ws=" ",ks=!1;function Pc(e,n){switch(e){case"keyup":return Dp.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _c(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ot=!1;function Mp(e,n){switch(e){case"compositionend":return _c(n);case"keypress":return n.which!==32?null:(ks=!0,ws);case"textInput":return e=n.data,e===ws&&ks?null:e;default:return null}}function Op(e,n){if(ot)return e==="compositionend"||!na&&Pc(e,n)?(e=wc(),si=Zo=gn=null,ot=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return kc&&n.locale!=="ko"?null:n.data;default:return null}}var zp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ps(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!zp[e.type]:n==="textarea"}function Cc(e,n,t,r){tc(r),n=_i(n,"onChange"),0<n.length&&(t=new qo("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var ar=null,Sr=null;function Lp(e){Oc(e,0)}function Qi(e){var n=ut(e);if(Ku(n))return e}function Ap(e,n){if(e==="change")return n}var Ec=!1;if(nn){var vl;if(nn){var Sl="oninput"in document;if(!Sl){var _s=document.createElement("div");_s.setAttribute("oninput","return;"),Sl=typeof _s.oninput=="function"}vl=Sl}else vl=!1;Ec=vl&&(!document.documentMode||9<document.documentMode)}function Cs(){ar&&(ar.detachEvent("onpropertychange",Rc),Sr=ar=null)}function Rc(e){if(e.propertyName==="value"&&Qi(Sr)){var n=[];Cc(n,Sr,e,Qo(e)),oc(Lp,n)}}function Bp(e,n,t){e==="focusin"?(Cs(),ar=n,Sr=t,ar.attachEvent("onpropertychange",Rc)):e==="focusout"&&Cs()}function Fp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Qi(Sr)}function Up(e,n){if(e==="click")return Qi(n)}function Wp(e,n){if(e==="input"||e==="change")return Qi(n)}function Hp(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Fe=typeof Object.is=="function"?Object.is:Hp;function xr(e,n){if(Fe(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var i=t[r];if(!zl.call(n,i)||!Fe(e[i],n[i]))return!1}return!0}function Es(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Rs(e,n){var t=Es(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Es(t)}}function Ic(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Ic(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Tc(){for(var e=window,n=yi();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=yi(e.document)}return n}function ta(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Vp(e){var n=Tc(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Ic(t.ownerDocument.documentElement,t)){if(r!==null&&ta(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,l=Math.min(r.start,i);r=r.end===void 0?l:Math.min(r.end,i),!e.extend&&l>r&&(i=r,r=l,l=i),i=Rs(t,l);var o=Rs(t,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),l>r?(e.addRange(n),e.extend(o.node,o.offset)):(n.setEnd(o.node,o.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Gp=nn&&"documentMode"in document&&11>=document.documentMode,at=null,to=null,sr=null,ro=!1;function Is(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;ro||at==null||at!==yi(r)||(r=at,"selectionStart"in r&&ta(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),sr&&xr(sr,r)||(sr=r,r=_i(to,"onSelect"),0<r.length&&(n=new qo("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=at)))}function Kr(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var st={animationend:Kr("Animation","AnimationEnd"),animationiteration:Kr("Animation","AnimationIteration"),animationstart:Kr("Animation","AnimationStart"),transitionend:Kr("Transition","TransitionEnd")},xl={},bc={};nn&&(bc=document.createElement("div").style,"AnimationEvent"in window||(delete st.animationend.animation,delete st.animationiteration.animation,delete st.animationstart.animation),"TransitionEvent"in window||delete st.transitionend.transition);function Xi(e){if(xl[e])return xl[e];if(!st[e])return e;var n=st[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in bc)return xl[e]=n[t];return e}var jc=Xi("animationend"),$c=Xi("animationiteration"),Dc=Xi("animationstart"),Nc=Xi("transitionend"),Mc=new Map,Ts="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function In(e,n){Mc.set(e,n),Yn(n,[e])}for(var wl=0;wl<Ts.length;wl++){var kl=Ts[wl],Qp=kl.toLowerCase(),Xp=kl[0].toUpperCase()+kl.slice(1);In(Qp,"on"+Xp)}In(jc,"onAnimationEnd");In($c,"onAnimationIteration");In(Dc,"onAnimationStart");In("dblclick","onDoubleClick");In("focusin","onFocus");In("focusout","onBlur");In(Nc,"onTransitionEnd");kt("onMouseEnter",["mouseout","mouseover"]);kt("onMouseLeave",["mouseout","mouseover"]);kt("onPointerEnter",["pointerout","pointerover"]);kt("onPointerLeave",["pointerout","pointerover"]);Yn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Yn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Yn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Yn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Yn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Yn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var tr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Kp=new Set("cancel close invalid load scroll toggle".split(" ").concat(tr));function bs(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,Qf(r,n,void 0,e),e.currentTarget=null}function Oc(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],i=r.event;r=r.listeners;e:{var l=void 0;if(n)for(var o=r.length-1;0<=o;o--){var a=r[o],s=a.instance,u=a.currentTarget;if(a=a.listener,s!==l&&i.isPropagationStopped())break e;bs(i,a,u),l=s}else for(o=0;o<r.length;o++){if(a=r[o],s=a.instance,u=a.currentTarget,a=a.listener,s!==l&&i.isPropagationStopped())break e;bs(i,a,u),l=s}}}if(Si)throw e=Zl,Si=!1,Zl=null,e}function z(e,n){var t=n[so];t===void 0&&(t=n[so]=new Set);var r=e+"__bubble";t.has(r)||(zc(n,e,2,!1),t.add(r))}function Pl(e,n,t){var r=0;n&&(r|=4),zc(t,e,r,n)}var Yr="_reactListening"+Math.random().toString(36).slice(2);function wr(e){if(!e[Yr]){e[Yr]=!0,Hu.forEach(function(t){t!=="selectionchange"&&(Kp.has(t)||Pl(t,!1,e),Pl(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Yr]||(n[Yr]=!0,Pl("selectionchange",!1,n))}}function zc(e,n,t,r){switch(xc(n)){case 1:var i=up;break;case 4:i=cp;break;default:i=Jo}t=i.bind(null,n,t,e),i=void 0,!Jl||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function _l(e,n,t,r,i){var l=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var s=o.tag;if((s===3||s===4)&&(s=o.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;o=o.return}for(;a!==null;){if(o=An(a),o===null)return;if(s=o.tag,s===5||s===6){r=l=o;continue e}a=a.parentNode}}r=r.return}oc(function(){var u=l,f=Qo(t),c=[];e:{var p=Mc.get(e);if(p!==void 0){var y=qo,S=e;switch(e){case"keypress":if(ui(t)===0)break e;case"keydown":case"keyup":y=Cp;break;case"focusin":S="focus",y=yl;break;case"focusout":S="blur",y=yl;break;case"beforeblur":case"afterblur":y=yl;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=vs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=pp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Ip;break;case jc:case $c:case Dc:y=hp;break;case Nc:y=bp;break;case"scroll":y=dp;break;case"wheel":y=$p;break;case"copy":case"cut":case"paste":y=vp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=xs}var x=(n&4)!==0,k=!x&&e==="scroll",g=x?p!==null?p+"Capture":null:p;x=[];for(var d=u,h;d!==null;){h=d;var w=h.stateNode;if(h.tag===5&&w!==null&&(h=w,g!==null&&(w=mr(d,g),w!=null&&x.push(kr(d,w,h)))),k)break;d=d.return}0<x.length&&(p=new y(p,S,null,t,f),c.push({event:p,listeners:x}))}}if(!(n&7)){e:{if(p=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",p&&t!==Kl&&(S=t.relatedTarget||t.fromElement)&&(An(S)||S[tn]))break e;if((y||p)&&(p=f.window===f?f:(p=f.ownerDocument)?p.defaultView||p.parentWindow:window,y?(S=t.relatedTarget||t.toElement,y=u,S=S?An(S):null,S!==null&&(k=Jn(S),S!==k||S.tag!==5&&S.tag!==6)&&(S=null)):(y=null,S=u),y!==S)){if(x=vs,w="onMouseLeave",g="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(x=xs,w="onPointerLeave",g="onPointerEnter",d="pointer"),k=y==null?p:ut(y),h=S==null?p:ut(S),p=new x(w,d+"leave",y,t,f),p.target=k,p.relatedTarget=h,w=null,An(f)===u&&(x=new x(g,d+"enter",S,t,f),x.target=h,x.relatedTarget=k,w=x),k=w,y&&S)n:{for(x=y,g=S,d=0,h=x;h;h=rt(h))d++;for(h=0,w=g;w;w=rt(w))h++;for(;0<d-h;)x=rt(x),d--;for(;0<h-d;)g=rt(g),h--;for(;d--;){if(x===g||g!==null&&x===g.alternate)break n;x=rt(x),g=rt(g)}x=null}else x=null;y!==null&&js(c,p,y,x,!1),S!==null&&k!==null&&js(c,k,S,x,!0)}}e:{if(p=u?ut(u):window,y=p.nodeName&&p.nodeName.toLowerCase(),y==="select"||y==="input"&&p.type==="file")var _=Ap;else if(Ps(p))if(Ec)_=Wp;else{_=Fp;var R=Bp}else(y=p.nodeName)&&y.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(_=Up);if(_&&(_=_(e,u))){Cc(c,_,t,f);break e}R&&R(e,p,u),e==="focusout"&&(R=p._wrapperState)&&R.controlled&&p.type==="number"&&Hl(p,"number",p.value)}switch(R=u?ut(u):window,e){case"focusin":(Ps(R)||R.contentEditable==="true")&&(at=R,to=u,sr=null);break;case"focusout":sr=to=at=null;break;case"mousedown":ro=!0;break;case"contextmenu":case"mouseup":case"dragend":ro=!1,Is(c,t,f);break;case"selectionchange":if(Gp)break;case"keydown":case"keyup":Is(c,t,f)}var I;if(na)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else ot?Pc(e,t)&&(T="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(T="onCompositionStart");T&&(kc&&t.locale!=="ko"&&(ot||T!=="onCompositionStart"?T==="onCompositionEnd"&&ot&&(I=wc()):(gn=f,Zo="value"in gn?gn.value:gn.textContent,ot=!0)),R=_i(u,T),0<R.length&&(T=new Ss(T,e,null,t,f),c.push({event:T,listeners:R}),I?T.data=I:(I=_c(t),I!==null&&(T.data=I)))),(I=Np?Mp(e,t):Op(e,t))&&(u=_i(u,"onBeforeInput"),0<u.length&&(f=new Ss("onBeforeInput","beforeinput",null,t,f),c.push({event:f,listeners:u}),f.data=I))}Oc(c,n)})}function kr(e,n,t){return{instance:e,listener:n,currentTarget:t}}function _i(e,n){for(var t=n+"Capture",r=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=mr(e,t),l!=null&&r.unshift(kr(e,l,i)),l=mr(e,n),l!=null&&r.push(kr(e,l,i))),e=e.return}return r}function rt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function js(e,n,t,r,i){for(var l=n._reactName,o=[];t!==null&&t!==r;){var a=t,s=a.alternate,u=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&u!==null&&(a=u,i?(s=mr(t,l),s!=null&&o.unshift(kr(t,s,a))):i||(s=mr(t,l),s!=null&&o.push(kr(t,s,a)))),t=t.return}o.length!==0&&e.push({event:n,listeners:o})}var Yp=/\r\n?/g,Jp=/\u0000|\uFFFD/g;function $s(e){return(typeof e=="string"?e:""+e).replace(Yp,`
`).replace(Jp,"")}function Jr(e,n,t){if(n=$s(n),$s(e)!==n&&t)throw Error(P(425))}function Ci(){}var io=null,lo=null;function oo(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var ao=typeof setTimeout=="function"?setTimeout:void 0,Zp=typeof clearTimeout=="function"?clearTimeout:void 0,Ds=typeof Promise=="function"?Promise:void 0,qp=typeof queueMicrotask=="function"?queueMicrotask:typeof Ds<"u"?function(e){return Ds.resolve(null).then(e).catch(eg)}:ao;function eg(e){setTimeout(function(){throw e})}function Cl(e,n){var t=n,r=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(r===0){e.removeChild(i),vr(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=i}while(t);vr(n)}function xn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Ns(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var jt=Math.random().toString(36).slice(2),Ge="__reactFiber$"+jt,Pr="__reactProps$"+jt,tn="__reactContainer$"+jt,so="__reactEvents$"+jt,ng="__reactListeners$"+jt,tg="__reactHandles$"+jt;function An(e){var n=e[Ge];if(n)return n;for(var t=e.parentNode;t;){if(n=t[tn]||t[Ge]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Ns(e);e!==null;){if(t=e[Ge])return t;e=Ns(e)}return n}e=t,t=e.parentNode}return null}function Or(e){return e=e[Ge]||e[tn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ut(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(P(33))}function Ki(e){return e[Pr]||null}var uo=[],ct=-1;function Tn(e){return{current:e}}function L(e){0>ct||(e.current=uo[ct],uo[ct]=null,ct--)}function O(e,n){ct++,uo[ct]=e.current,e.current=n}var Rn={},fe=Tn(Rn),Se=Tn(!1),Hn=Rn;function Pt(e,n){var t=e.type.contextTypes;if(!t)return Rn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in t)i[l]=n[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function xe(e){return e=e.childContextTypes,e!=null}function Ei(){L(Se),L(fe)}function Ms(e,n,t){if(fe.current!==Rn)throw Error(P(168));O(fe,n),O(Se,t)}function Lc(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var i in r)if(!(i in n))throw Error(P(108,Bf(e)||"Unknown",i));return V({},t,r)}function Ri(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Rn,Hn=fe.current,O(fe,e),O(Se,Se.current),!0}function Os(e,n,t){var r=e.stateNode;if(!r)throw Error(P(169));t?(e=Lc(e,n,Hn),r.__reactInternalMemoizedMergedChildContext=e,L(Se),L(fe),O(fe,e)):L(Se),O(Se,t)}var Je=null,Yi=!1,El=!1;function Ac(e){Je===null?Je=[e]:Je.push(e)}function rg(e){Yi=!0,Ac(e)}function bn(){if(!El&&Je!==null){El=!0;var e=0,n=M;try{var t=Je;for(M=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}Je=null,Yi=!1}catch(i){throw Je!==null&&(Je=Je.slice(e+1)),cc(Xo,bn),i}finally{M=n,El=!1}}return null}var dt=[],ft=0,Ii=null,Ti=0,Te=[],be=0,Vn=null,Ze=1,qe="";function zn(e,n){dt[ft++]=Ti,dt[ft++]=Ii,Ii=e,Ti=n}function Bc(e,n,t){Te[be++]=Ze,Te[be++]=qe,Te[be++]=Vn,Vn=e;var r=Ze;e=qe;var i=32-Ae(r)-1;r&=~(1<<i),t+=1;var l=32-Ae(n)+i;if(30<l){var o=i-i%5;l=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ze=1<<32-Ae(n)+i|t<<i|r,qe=l+e}else Ze=1<<l|t<<i|r,qe=e}function ra(e){e.return!==null&&(zn(e,1),Bc(e,1,0))}function ia(e){for(;e===Ii;)Ii=dt[--ft],dt[ft]=null,Ti=dt[--ft],dt[ft]=null;for(;e===Vn;)Vn=Te[--be],Te[be]=null,qe=Te[--be],Te[be]=null,Ze=Te[--be],Te[be]=null}var Ce=null,_e=null,B=!1,Le=null;function Fc(e,n){var t=je(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function zs(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Ce=e,_e=xn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Ce=e,_e=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Vn!==null?{id:Ze,overflow:qe}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=je(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Ce=e,_e=null,!0):!1;default:return!1}}function co(e){return(e.mode&1)!==0&&(e.flags&128)===0}function fo(e){if(B){var n=_e;if(n){var t=n;if(!zs(e,n)){if(co(e))throw Error(P(418));n=xn(t.nextSibling);var r=Ce;n&&zs(e,n)?Fc(r,t):(e.flags=e.flags&-4097|2,B=!1,Ce=e)}}else{if(co(e))throw Error(P(418));e.flags=e.flags&-4097|2,B=!1,Ce=e}}}function Ls(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ce=e}function Zr(e){if(e!==Ce)return!1;if(!B)return Ls(e),B=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!oo(e.type,e.memoizedProps)),n&&(n=_e)){if(co(e))throw Uc(),Error(P(418));for(;n;)Fc(e,n),n=xn(n.nextSibling)}if(Ls(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(P(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){_e=xn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}_e=null}}else _e=Ce?xn(e.stateNode.nextSibling):null;return!0}function Uc(){for(var e=_e;e;)e=xn(e.nextSibling)}function _t(){_e=Ce=null,B=!1}function la(e){Le===null?Le=[e]:Le.push(e)}var ig=an.ReactCurrentBatchConfig;function Kt(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(P(309));var r=t.stateNode}if(!r)throw Error(P(147,e));var i=r,l=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===l?n.ref:(n=function(o){var a=i.refs;o===null?delete a[l]:a[l]=o},n._stringRef=l,n)}if(typeof e!="string")throw Error(P(284));if(!t._owner)throw Error(P(290,e))}return e}function qr(e,n){throw e=Object.prototype.toString.call(n),Error(P(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function As(e){var n=e._init;return n(e._payload)}function Wc(e){function n(g,d){if(e){var h=g.deletions;h===null?(g.deletions=[d],g.flags|=16):h.push(d)}}function t(g,d){if(!e)return null;for(;d!==null;)n(g,d),d=d.sibling;return null}function r(g,d){for(g=new Map;d!==null;)d.key!==null?g.set(d.key,d):g.set(d.index,d),d=d.sibling;return g}function i(g,d){return g=_n(g,d),g.index=0,g.sibling=null,g}function l(g,d,h){return g.index=h,e?(h=g.alternate,h!==null?(h=h.index,h<d?(g.flags|=2,d):h):(g.flags|=2,d)):(g.flags|=1048576,d)}function o(g){return e&&g.alternate===null&&(g.flags|=2),g}function a(g,d,h,w){return d===null||d.tag!==6?(d=Dl(h,g.mode,w),d.return=g,d):(d=i(d,h),d.return=g,d)}function s(g,d,h,w){var _=h.type;return _===lt?f(g,d,h.props.children,w,h.key):d!==null&&(d.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===cn&&As(_)===d.type)?(w=i(d,h.props),w.ref=Kt(g,d,h),w.return=g,w):(w=hi(h.type,h.key,h.props,null,g.mode,w),w.ref=Kt(g,d,h),w.return=g,w)}function u(g,d,h,w){return d===null||d.tag!==4||d.stateNode.containerInfo!==h.containerInfo||d.stateNode.implementation!==h.implementation?(d=Nl(h,g.mode,w),d.return=g,d):(d=i(d,h.children||[]),d.return=g,d)}function f(g,d,h,w,_){return d===null||d.tag!==7?(d=Wn(h,g.mode,w,_),d.return=g,d):(d=i(d,h),d.return=g,d)}function c(g,d,h){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Dl(""+d,g.mode,h),d.return=g,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Ur:return h=hi(d.type,d.key,d.props,null,g.mode,h),h.ref=Kt(g,null,d),h.return=g,h;case it:return d=Nl(d,g.mode,h),d.return=g,d;case cn:var w=d._init;return c(g,w(d._payload),h)}if(er(d)||Ht(d))return d=Wn(d,g.mode,h,null),d.return=g,d;qr(g,d)}return null}function p(g,d,h,w){var _=d!==null?d.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return _!==null?null:a(g,d,""+h,w);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Ur:return h.key===_?s(g,d,h,w):null;case it:return h.key===_?u(g,d,h,w):null;case cn:return _=h._init,p(g,d,_(h._payload),w)}if(er(h)||Ht(h))return _!==null?null:f(g,d,h,w,null);qr(g,h)}return null}function y(g,d,h,w,_){if(typeof w=="string"&&w!==""||typeof w=="number")return g=g.get(h)||null,a(d,g,""+w,_);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Ur:return g=g.get(w.key===null?h:w.key)||null,s(d,g,w,_);case it:return g=g.get(w.key===null?h:w.key)||null,u(d,g,w,_);case cn:var R=w._init;return y(g,d,h,R(w._payload),_)}if(er(w)||Ht(w))return g=g.get(h)||null,f(d,g,w,_,null);qr(d,w)}return null}function S(g,d,h,w){for(var _=null,R=null,I=d,T=d=0,U=null;I!==null&&T<h.length;T++){I.index>T?(U=I,I=null):U=I.sibling;var $=p(g,I,h[T],w);if($===null){I===null&&(I=U);break}e&&I&&$.alternate===null&&n(g,I),d=l($,d,T),R===null?_=$:R.sibling=$,R=$,I=U}if(T===h.length)return t(g,I),B&&zn(g,T),_;if(I===null){for(;T<h.length;T++)I=c(g,h[T],w),I!==null&&(d=l(I,d,T),R===null?_=I:R.sibling=I,R=I);return B&&zn(g,T),_}for(I=r(g,I);T<h.length;T++)U=y(I,g,T,h[T],w),U!==null&&(e&&U.alternate!==null&&I.delete(U.key===null?T:U.key),d=l(U,d,T),R===null?_=U:R.sibling=U,R=U);return e&&I.forEach(function(ke){return n(g,ke)}),B&&zn(g,T),_}function x(g,d,h,w){var _=Ht(h);if(typeof _!="function")throw Error(P(150));if(h=_.call(h),h==null)throw Error(P(151));for(var R=_=null,I=d,T=d=0,U=null,$=h.next();I!==null&&!$.done;T++,$=h.next()){I.index>T?(U=I,I=null):U=I.sibling;var ke=p(g,I,$.value,w);if(ke===null){I===null&&(I=U);break}e&&I&&ke.alternate===null&&n(g,I),d=l(ke,d,T),R===null?_=ke:R.sibling=ke,R=ke,I=U}if($.done)return t(g,I),B&&zn(g,T),_;if(I===null){for(;!$.done;T++,$=h.next())$=c(g,$.value,w),$!==null&&(d=l($,d,T),R===null?_=$:R.sibling=$,R=$);return B&&zn(g,T),_}for(I=r(g,I);!$.done;T++,$=h.next())$=y(I,g,T,$.value,w),$!==null&&(e&&$.alternate!==null&&I.delete($.key===null?T:$.key),d=l($,d,T),R===null?_=$:R.sibling=$,R=$);return e&&I.forEach(function(te){return n(g,te)}),B&&zn(g,T),_}function k(g,d,h,w){if(typeof h=="object"&&h!==null&&h.type===lt&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Ur:e:{for(var _=h.key,R=d;R!==null;){if(R.key===_){if(_=h.type,_===lt){if(R.tag===7){t(g,R.sibling),d=i(R,h.props.children),d.return=g,g=d;break e}}else if(R.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===cn&&As(_)===R.type){t(g,R.sibling),d=i(R,h.props),d.ref=Kt(g,R,h),d.return=g,g=d;break e}t(g,R);break}else n(g,R);R=R.sibling}h.type===lt?(d=Wn(h.props.children,g.mode,w,h.key),d.return=g,g=d):(w=hi(h.type,h.key,h.props,null,g.mode,w),w.ref=Kt(g,d,h),w.return=g,g=w)}return o(g);case it:e:{for(R=h.key;d!==null;){if(d.key===R)if(d.tag===4&&d.stateNode.containerInfo===h.containerInfo&&d.stateNode.implementation===h.implementation){t(g,d.sibling),d=i(d,h.children||[]),d.return=g,g=d;break e}else{t(g,d);break}else n(g,d);d=d.sibling}d=Nl(h,g.mode,w),d.return=g,g=d}return o(g);case cn:return R=h._init,k(g,d,R(h._payload),w)}if(er(h))return S(g,d,h,w);if(Ht(h))return x(g,d,h,w);qr(g,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,d!==null&&d.tag===6?(t(g,d.sibling),d=i(d,h),d.return=g,g=d):(t(g,d),d=Dl(h,g.mode,w),d.return=g,g=d),o(g)):t(g,d)}return k}var Ct=Wc(!0),Hc=Wc(!1),bi=Tn(null),ji=null,pt=null,oa=null;function aa(){oa=pt=ji=null}function sa(e){var n=bi.current;L(bi),e._currentValue=n}function po(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function xt(e,n){ji=e,oa=pt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(ve=!0),e.firstContext=null)}function De(e){var n=e._currentValue;if(oa!==e)if(e={context:e,memoizedValue:n,next:null},pt===null){if(ji===null)throw Error(P(308));pt=e,ji.dependencies={lanes:0,firstContext:e}}else pt=pt.next=e;return n}var Bn=null;function ua(e){Bn===null?Bn=[e]:Bn.push(e)}function Vc(e,n,t,r){var i=n.interleaved;return i===null?(t.next=t,ua(n)):(t.next=i.next,i.next=t),n.interleaved=t,rn(e,r)}function rn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var dn=!1;function ca(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Gc(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function en(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function wn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,N&2){var i=r.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),r.pending=n,rn(e,t)}return i=r.interleaved,i===null?(n.next=n,ua(r)):(n.next=i.next,i.next=n),r.interleaved=n,rn(e,t)}function ci(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Ko(e,t)}}function Bs(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var i=null,l=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};l===null?i=l=o:l=l.next=o,t=t.next}while(t!==null);l===null?i=l=n:l=l.next=n}else i=l=n;t={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function $i(e,n,t,r){var i=e.updateQueue;dn=!1;var l=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var s=a,u=s.next;s.next=null,o===null?l=u:o.next=u,o=s;var f=e.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=u:a.next=u,f.lastBaseUpdate=s))}if(l!==null){var c=i.baseState;o=0,f=u=s=null,a=l;do{var p=a.lane,y=a.eventTime;if((r&p)===p){f!==null&&(f=f.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var S=e,x=a;switch(p=n,y=t,x.tag){case 1:if(S=x.payload,typeof S=="function"){c=S.call(y,c,p);break e}c=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=x.payload,p=typeof S=="function"?S.call(y,c,p):S,p==null)break e;c=V({},c,p);break e;case 2:dn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[a]:p.push(a))}else y={eventTime:y,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(u=f=y,s=c):f=f.next=y,o|=p;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;p=a,a=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(f===null&&(s=c),i.baseState=s,i.firstBaseUpdate=u,i.lastBaseUpdate=f,n=i.shared.interleaved,n!==null){i=n;do o|=i.lane,i=i.next;while(i!==n)}else l===null&&(i.shared.lanes=0);Qn|=o,e.lanes=o,e.memoizedState=c}}function Fs(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],i=r.callback;if(i!==null){if(r.callback=null,r=t,typeof i!="function")throw Error(P(191,i));i.call(r)}}}var zr={},Xe=Tn(zr),_r=Tn(zr),Cr=Tn(zr);function Fn(e){if(e===zr)throw Error(P(174));return e}function da(e,n){switch(O(Cr,n),O(_r,e),O(Xe,zr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Gl(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Gl(n,e)}L(Xe),O(Xe,n)}function Et(){L(Xe),L(_r),L(Cr)}function Qc(e){Fn(Cr.current);var n=Fn(Xe.current),t=Gl(n,e.type);n!==t&&(O(_r,e),O(Xe,t))}function fa(e){_r.current===e&&(L(Xe),L(_r))}var W=Tn(0);function Di(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Rl=[];function pa(){for(var e=0;e<Rl.length;e++)Rl[e]._workInProgressVersionPrimary=null;Rl.length=0}var di=an.ReactCurrentDispatcher,Il=an.ReactCurrentBatchConfig,Gn=0,H=null,ee=null,ie=null,Ni=!1,ur=!1,Er=0,lg=0;function ue(){throw Error(P(321))}function ga(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Fe(e[t],n[t]))return!1;return!0}function ma(e,n,t,r,i,l){if(Gn=l,H=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,di.current=e===null||e.memoizedState===null?ug:cg,e=t(r,i),ur){l=0;do{if(ur=!1,Er=0,25<=l)throw Error(P(301));l+=1,ie=ee=null,n.updateQueue=null,di.current=dg,e=t(r,i)}while(ur)}if(di.current=Mi,n=ee!==null&&ee.next!==null,Gn=0,ie=ee=H=null,Ni=!1,n)throw Error(P(300));return e}function ha(){var e=Er!==0;return Er=0,e}function Ve(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ie===null?H.memoizedState=ie=e:ie=ie.next=e,ie}function Ne(){if(ee===null){var e=H.alternate;e=e!==null?e.memoizedState:null}else e=ee.next;var n=ie===null?H.memoizedState:ie.next;if(n!==null)ie=n,ee=e;else{if(e===null)throw Error(P(310));ee=e,e={memoizedState:ee.memoizedState,baseState:ee.baseState,baseQueue:ee.baseQueue,queue:ee.queue,next:null},ie===null?H.memoizedState=ie=e:ie=ie.next=e}return ie}function Rr(e,n){return typeof n=="function"?n(e):n}function Tl(e){var n=Ne(),t=n.queue;if(t===null)throw Error(P(311));t.lastRenderedReducer=e;var r=ee,i=r.baseQueue,l=t.pending;if(l!==null){if(i!==null){var o=i.next;i.next=l.next,l.next=o}r.baseQueue=i=l,t.pending=null}if(i!==null){l=i.next,r=r.baseState;var a=o=null,s=null,u=l;do{var f=u.lane;if((Gn&f)===f)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var c={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(a=s=c,o=r):s=s.next=c,H.lanes|=f,Qn|=f}u=u.next}while(u!==null&&u!==l);s===null?o=r:s.next=a,Fe(r,n.memoizedState)||(ve=!0),n.memoizedState=r,n.baseState=o,n.baseQueue=s,t.lastRenderedState=r}if(e=t.interleaved,e!==null){i=e;do l=i.lane,H.lanes|=l,Qn|=l,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function bl(e){var n=Ne(),t=n.queue;if(t===null)throw Error(P(311));t.lastRenderedReducer=e;var r=t.dispatch,i=t.pending,l=n.memoizedState;if(i!==null){t.pending=null;var o=i=i.next;do l=e(l,o.action),o=o.next;while(o!==i);Fe(l,n.memoizedState)||(ve=!0),n.memoizedState=l,n.baseQueue===null&&(n.baseState=l),t.lastRenderedState=l}return[l,r]}function Xc(){}function Kc(e,n){var t=H,r=Ne(),i=n(),l=!Fe(r.memoizedState,i);if(l&&(r.memoizedState=i,ve=!0),r=r.queue,ya(Zc.bind(null,t,r,e),[e]),r.getSnapshot!==n||l||ie!==null&&ie.memoizedState.tag&1){if(t.flags|=2048,Ir(9,Jc.bind(null,t,r,i,n),void 0,null),le===null)throw Error(P(349));Gn&30||Yc(t,n,i)}return i}function Yc(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=H.updateQueue,n===null?(n={lastEffect:null,stores:null},H.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Jc(e,n,t,r){n.value=t,n.getSnapshot=r,qc(n)&&ed(e)}function Zc(e,n,t){return t(function(){qc(n)&&ed(e)})}function qc(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Fe(e,t)}catch{return!0}}function ed(e){var n=rn(e,1);n!==null&&Be(n,e,1,-1)}function Us(e){var n=Ve();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Rr,lastRenderedState:e},n.queue=e,e=e.dispatch=sg.bind(null,H,e),[n.memoizedState,e]}function Ir(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=H.updateQueue,n===null?(n={lastEffect:null,stores:null},H.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function nd(){return Ne().memoizedState}function fi(e,n,t,r){var i=Ve();H.flags|=e,i.memoizedState=Ir(1|n,t,void 0,r===void 0?null:r)}function Ji(e,n,t,r){var i=Ne();r=r===void 0?null:r;var l=void 0;if(ee!==null){var o=ee.memoizedState;if(l=o.destroy,r!==null&&ga(r,o.deps)){i.memoizedState=Ir(n,t,l,r);return}}H.flags|=e,i.memoizedState=Ir(1|n,t,l,r)}function Ws(e,n){return fi(8390656,8,e,n)}function ya(e,n){return Ji(2048,8,e,n)}function td(e,n){return Ji(4,2,e,n)}function rd(e,n){return Ji(4,4,e,n)}function id(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function ld(e,n,t){return t=t!=null?t.concat([e]):null,Ji(4,4,id.bind(null,n,e),t)}function va(){}function od(e,n){var t=Ne();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&ga(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function ad(e,n){var t=Ne();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&ga(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function sd(e,n,t){return Gn&21?(Fe(t,n)||(t=pc(),H.lanes|=t,Qn|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,ve=!0),e.memoizedState=t)}function og(e,n){var t=M;M=t!==0&&4>t?t:4,e(!0);var r=Il.transition;Il.transition={};try{e(!1),n()}finally{M=t,Il.transition=r}}function ud(){return Ne().memoizedState}function ag(e,n,t){var r=Pn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},cd(e))dd(n,t);else if(t=Vc(e,n,t,r),t!==null){var i=ge();Be(t,e,r,i),fd(t,n,r)}}function sg(e,n,t){var r=Pn(e),i={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(cd(e))dd(n,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=n.lastRenderedReducer,l!==null))try{var o=n.lastRenderedState,a=l(o,t);if(i.hasEagerState=!0,i.eagerState=a,Fe(a,o)){var s=n.interleaved;s===null?(i.next=i,ua(n)):(i.next=s.next,s.next=i),n.interleaved=i;return}}catch{}finally{}t=Vc(e,n,i,r),t!==null&&(i=ge(),Be(t,e,r,i),fd(t,n,r))}}function cd(e){var n=e.alternate;return e===H||n!==null&&n===H}function dd(e,n){ur=Ni=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function fd(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Ko(e,t)}}var Mi={readContext:De,useCallback:ue,useContext:ue,useEffect:ue,useImperativeHandle:ue,useInsertionEffect:ue,useLayoutEffect:ue,useMemo:ue,useReducer:ue,useRef:ue,useState:ue,useDebugValue:ue,useDeferredValue:ue,useTransition:ue,useMutableSource:ue,useSyncExternalStore:ue,useId:ue,unstable_isNewReconciler:!1},ug={readContext:De,useCallback:function(e,n){return Ve().memoizedState=[e,n===void 0?null:n],e},useContext:De,useEffect:Ws,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,fi(4194308,4,id.bind(null,n,e),t)},useLayoutEffect:function(e,n){return fi(4194308,4,e,n)},useInsertionEffect:function(e,n){return fi(4,2,e,n)},useMemo:function(e,n){var t=Ve();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=Ve();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=ag.bind(null,H,e),[r.memoizedState,e]},useRef:function(e){var n=Ve();return e={current:e},n.memoizedState=e},useState:Us,useDebugValue:va,useDeferredValue:function(e){return Ve().memoizedState=e},useTransition:function(){var e=Us(!1),n=e[0];return e=og.bind(null,e[1]),Ve().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=H,i=Ve();if(B){if(t===void 0)throw Error(P(407));t=t()}else{if(t=n(),le===null)throw Error(P(349));Gn&30||Yc(r,n,t)}i.memoizedState=t;var l={value:t,getSnapshot:n};return i.queue=l,Ws(Zc.bind(null,r,l,e),[e]),r.flags|=2048,Ir(9,Jc.bind(null,r,l,t,n),void 0,null),t},useId:function(){var e=Ve(),n=le.identifierPrefix;if(B){var t=qe,r=Ze;t=(r&~(1<<32-Ae(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=Er++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=lg++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},cg={readContext:De,useCallback:od,useContext:De,useEffect:ya,useImperativeHandle:ld,useInsertionEffect:td,useLayoutEffect:rd,useMemo:ad,useReducer:Tl,useRef:nd,useState:function(){return Tl(Rr)},useDebugValue:va,useDeferredValue:function(e){var n=Ne();return sd(n,ee.memoizedState,e)},useTransition:function(){var e=Tl(Rr)[0],n=Ne().memoizedState;return[e,n]},useMutableSource:Xc,useSyncExternalStore:Kc,useId:ud,unstable_isNewReconciler:!1},dg={readContext:De,useCallback:od,useContext:De,useEffect:ya,useImperativeHandle:ld,useInsertionEffect:td,useLayoutEffect:rd,useMemo:ad,useReducer:bl,useRef:nd,useState:function(){return bl(Rr)},useDebugValue:va,useDeferredValue:function(e){var n=Ne();return ee===null?n.memoizedState=e:sd(n,ee.memoizedState,e)},useTransition:function(){var e=bl(Rr)[0],n=Ne().memoizedState;return[e,n]},useMutableSource:Xc,useSyncExternalStore:Kc,useId:ud,unstable_isNewReconciler:!1};function Oe(e,n){if(e&&e.defaultProps){n=V({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function go(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:V({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Zi={isMounted:function(e){return(e=e._reactInternals)?Jn(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=ge(),i=Pn(e),l=en(r,i);l.payload=n,t!=null&&(l.callback=t),n=wn(e,l,i),n!==null&&(Be(n,e,i,r),ci(n,e,i))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=ge(),i=Pn(e),l=en(r,i);l.tag=1,l.payload=n,t!=null&&(l.callback=t),n=wn(e,l,i),n!==null&&(Be(n,e,i,r),ci(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=ge(),r=Pn(e),i=en(t,r);i.tag=2,n!=null&&(i.callback=n),n=wn(e,i,r),n!==null&&(Be(n,e,r,t),ci(n,e,r))}};function Hs(e,n,t,r,i,l,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,o):n.prototype&&n.prototype.isPureReactComponent?!xr(t,r)||!xr(i,l):!0}function pd(e,n,t){var r=!1,i=Rn,l=n.contextType;return typeof l=="object"&&l!==null?l=De(l):(i=xe(n)?Hn:fe.current,r=n.contextTypes,l=(r=r!=null)?Pt(e,i):Rn),n=new n(t,l),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Zi,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),n}function Vs(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&Zi.enqueueReplaceState(n,n.state,null)}function mo(e,n,t,r){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs={},ca(e);var l=n.contextType;typeof l=="object"&&l!==null?i.context=De(l):(l=xe(n)?Hn:fe.current,i.context=Pt(e,l)),i.state=e.memoizedState,l=n.getDerivedStateFromProps,typeof l=="function"&&(go(e,n,l,t),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&Zi.enqueueReplaceState(i,i.state,null),$i(e,t,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Rt(e,n){try{var t="",r=n;do t+=Af(r),r=r.return;while(r);var i=t}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:n,stack:i,digest:null}}function jl(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function ho(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var fg=typeof WeakMap=="function"?WeakMap:Map;function gd(e,n,t){t=en(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){zi||(zi=!0,Eo=r),ho(e,n)},t}function md(e,n,t){t=en(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=n.value;t.payload=function(){return r(i)},t.callback=function(){ho(e,n)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(t.callback=function(){ho(e,n),typeof r!="function"&&(kn===null?kn=new Set([this]):kn.add(this));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})}),t}function Gs(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new fg;var i=new Set;r.set(n,i)}else i=r.get(n),i===void 0&&(i=new Set,r.set(n,i));i.has(t)||(i.add(t),e=Eg.bind(null,e,n,t),n.then(e,e))}function Qs(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Xs(e,n,t,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=en(-1,1),n.tag=2,wn(t,n,1))),t.lanes|=1),e)}var pg=an.ReactCurrentOwner,ve=!1;function pe(e,n,t,r){n.child=e===null?Hc(n,null,t,r):Ct(n,e.child,t,r)}function Ks(e,n,t,r,i){t=t.render;var l=n.ref;return xt(n,i),r=ma(e,n,t,r,l,i),t=ha(),e!==null&&!ve?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,ln(e,n,i)):(B&&t&&ra(n),n.flags|=1,pe(e,n,r,i),n.child)}function Ys(e,n,t,r,i){if(e===null){var l=t.type;return typeof l=="function"&&!Ea(l)&&l.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=l,hd(e,n,l,r,i)):(e=hi(t.type,null,r,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(l=e.child,!(e.lanes&i)){var o=l.memoizedProps;if(t=t.compare,t=t!==null?t:xr,t(o,r)&&e.ref===n.ref)return ln(e,n,i)}return n.flags|=1,e=_n(l,r),e.ref=n.ref,e.return=n,n.child=e}function hd(e,n,t,r,i){if(e!==null){var l=e.memoizedProps;if(xr(l,r)&&e.ref===n.ref)if(ve=!1,n.pendingProps=r=l,(e.lanes&i)!==0)e.flags&131072&&(ve=!0);else return n.lanes=e.lanes,ln(e,n,i)}return yo(e,n,t,r,i)}function yd(e,n,t){var r=n.pendingProps,i=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},O(mt,Pe),Pe|=t;else{if(!(t&1073741824))return e=l!==null?l.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,O(mt,Pe),Pe|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:t,O(mt,Pe),Pe|=r}else l!==null?(r=l.baseLanes|t,n.memoizedState=null):r=t,O(mt,Pe),Pe|=r;return pe(e,n,i,t),n.child}function vd(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function yo(e,n,t,r,i){var l=xe(t)?Hn:fe.current;return l=Pt(n,l),xt(n,i),t=ma(e,n,t,r,l,i),r=ha(),e!==null&&!ve?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,ln(e,n,i)):(B&&r&&ra(n),n.flags|=1,pe(e,n,t,i),n.child)}function Js(e,n,t,r,i){if(xe(t)){var l=!0;Ri(n)}else l=!1;if(xt(n,i),n.stateNode===null)pi(e,n),pd(n,t,r),mo(n,t,r,i),r=!0;else if(e===null){var o=n.stateNode,a=n.memoizedProps;o.props=a;var s=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=De(u):(u=xe(t)?Hn:fe.current,u=Pt(n,u));var f=t.getDerivedStateFromProps,c=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";c||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||s!==u)&&Vs(n,o,r,u),dn=!1;var p=n.memoizedState;o.state=p,$i(n,r,o,i),s=n.memoizedState,a!==r||p!==s||Se.current||dn?(typeof f=="function"&&(go(n,t,f,r),s=n.memoizedState),(a=dn||Hs(n,t,a,r,p,s,u))?(c||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(n.flags|=4194308)):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=s),o.props=r,o.state=s,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{o=n.stateNode,Gc(e,n),a=n.memoizedProps,u=n.type===n.elementType?a:Oe(n.type,a),o.props=u,c=n.pendingProps,p=o.context,s=t.contextType,typeof s=="object"&&s!==null?s=De(s):(s=xe(t)?Hn:fe.current,s=Pt(n,s));var y=t.getDerivedStateFromProps;(f=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==c||p!==s)&&Vs(n,o,r,s),dn=!1,p=n.memoizedState,o.state=p,$i(n,r,o,i);var S=n.memoizedState;a!==c||p!==S||Se.current||dn?(typeof y=="function"&&(go(n,t,y,r),S=n.memoizedState),(u=dn||Hs(n,t,u,r,p,S,s)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,S,s),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,S,s)),typeof o.componentDidUpdate=="function"&&(n.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=S),o.props=r,o.state=S,o.context=s,r=u):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(n.flags|=1024),r=!1)}return vo(e,n,t,r,l,i)}function vo(e,n,t,r,i,l){vd(e,n);var o=(n.flags&128)!==0;if(!r&&!o)return i&&Os(n,t,!1),ln(e,n,l);r=n.stateNode,pg.current=n;var a=o&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&o?(n.child=Ct(n,e.child,null,l),n.child=Ct(n,null,a,l)):pe(e,n,a,l),n.memoizedState=r.state,i&&Os(n,t,!0),n.child}function Sd(e){var n=e.stateNode;n.pendingContext?Ms(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Ms(e,n.context,!1),da(e,n.containerInfo)}function Zs(e,n,t,r,i){return _t(),la(i),n.flags|=256,pe(e,n,t,r),n.child}var So={dehydrated:null,treeContext:null,retryLane:0};function xo(e){return{baseLanes:e,cachePool:null,transitions:null}}function xd(e,n,t){var r=n.pendingProps,i=W.current,l=!1,o=(n.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(l=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),O(W,i&1),e===null)return fo(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(o=r.children,e=r.fallback,l?(r=n.mode,l=n.child,o={mode:"hidden",children:o},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=o):l=nl(o,r,0,null),e=Wn(e,r,t,null),l.return=n,e.return=n,l.sibling=e,n.child=l,n.child.memoizedState=xo(t),n.memoizedState=So,e):Sa(n,o));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return gg(e,n,o,r,a,i,t);if(l){l=r.fallback,o=n.mode,i=e.child,a=i.sibling;var s={mode:"hidden",children:r.children};return!(o&1)&&n.child!==i?(r=n.child,r.childLanes=0,r.pendingProps=s,n.deletions=null):(r=_n(i,s),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?l=_n(a,l):(l=Wn(l,o,t,null),l.flags|=2),l.return=n,r.return=n,r.sibling=l,n.child=r,r=l,l=n.child,o=e.child.memoizedState,o=o===null?xo(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},l.memoizedState=o,l.childLanes=e.childLanes&~t,n.memoizedState=So,r}return l=e.child,e=l.sibling,r=_n(l,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function Sa(e,n){return n=nl({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function ei(e,n,t,r){return r!==null&&la(r),Ct(n,e.child,null,t),e=Sa(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function gg(e,n,t,r,i,l,o){if(t)return n.flags&256?(n.flags&=-257,r=jl(Error(P(422))),ei(e,n,o,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(l=r.fallback,i=n.mode,r=nl({mode:"visible",children:r.children},i,0,null),l=Wn(l,i,o,null),l.flags|=2,r.return=n,l.return=n,r.sibling=l,n.child=r,n.mode&1&&Ct(n,e.child,null,o),n.child.memoizedState=xo(o),n.memoizedState=So,l);if(!(n.mode&1))return ei(e,n,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,l=Error(P(419)),r=jl(l,r,void 0),ei(e,n,o,r)}if(a=(o&e.childLanes)!==0,ve||a){if(r=le,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,rn(e,i),Be(r,e,i,-1))}return Ca(),r=jl(Error(P(421))),ei(e,n,o,r)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=Rg.bind(null,e),i._reactRetry=n,null):(e=l.treeContext,_e=xn(i.nextSibling),Ce=n,B=!0,Le=null,e!==null&&(Te[be++]=Ze,Te[be++]=qe,Te[be++]=Vn,Ze=e.id,qe=e.overflow,Vn=n),n=Sa(n,r.children),n.flags|=4096,n)}function qs(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),po(e.return,n,t)}function $l(e,n,t,r,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:i}:(l.isBackwards=n,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=t,l.tailMode=i)}function wd(e,n,t){var r=n.pendingProps,i=r.revealOrder,l=r.tail;if(pe(e,n,r.children,t),r=W.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&qs(e,t,n);else if(e.tag===19)qs(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(O(W,r),!(n.mode&1))n.memoizedState=null;else switch(i){case"forwards":for(t=n.child,i=null;t!==null;)e=t.alternate,e!==null&&Di(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),$l(n,!1,i,t,l);break;case"backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&Di(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}$l(n,!0,t,null,l);break;case"together":$l(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function pi(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function ln(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Qn|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(P(153));if(n.child!==null){for(e=n.child,t=_n(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=_n(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function mg(e,n,t){switch(n.tag){case 3:Sd(n),_t();break;case 5:Qc(n);break;case 1:xe(n.type)&&Ri(n);break;case 4:da(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,i=n.memoizedProps.value;O(bi,r._currentValue),r._currentValue=i;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(O(W,W.current&1),n.flags|=128,null):t&n.child.childLanes?xd(e,n,t):(O(W,W.current&1),e=ln(e,n,t),e!==null?e.sibling:null);O(W,W.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return wd(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),O(W,W.current),r)break;return null;case 22:case 23:return n.lanes=0,yd(e,n,t)}return ln(e,n,t)}var kd,wo,Pd,_d;kd=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};wo=function(){};Pd=function(e,n,t,r){var i=e.memoizedProps;if(i!==r){e=n.stateNode,Fn(Xe.current);var l=null;switch(t){case"input":i=Ul(e,i),r=Ul(e,r),l=[];break;case"select":i=V({},i,{value:void 0}),r=V({},r,{value:void 0}),l=[];break;case"textarea":i=Vl(e,i),r=Vl(e,r),l=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ci)}Ql(t,r);var o;t=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(pr.hasOwnProperty(u)?l||(l=[]):(l=l||[]).push(u,null));for(u in r){var s=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&s!==a&&(s!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||s&&s.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in s)s.hasOwnProperty(o)&&a[o]!==s[o]&&(t||(t={}),t[o]=s[o])}else t||(l||(l=[]),l.push(u,t)),t=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(l=l||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(l=l||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(pr.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&z("scroll",e),l||a===s||(l=[])):(l=l||[]).push(u,s))}t&&(l=l||[]).push("style",t);var u=l;(n.updateQueue=u)&&(n.flags|=4)}};_d=function(e,n,t,r){t!==r&&(n.flags|=4)};function Yt(e,n){if(!B)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ce(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function hg(e,n,t){var r=n.pendingProps;switch(ia(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ce(n),null;case 1:return xe(n.type)&&Ei(),ce(n),null;case 3:return r=n.stateNode,Et(),L(Se),L(fe),pa(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Zr(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Le!==null&&(To(Le),Le=null))),wo(e,n),ce(n),null;case 5:fa(n);var i=Fn(Cr.current);if(t=n.type,e!==null&&n.stateNode!=null)Pd(e,n,t,r,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(P(166));return ce(n),null}if(e=Fn(Xe.current),Zr(n)){r=n.stateNode,t=n.type;var l=n.memoizedProps;switch(r[Ge]=n,r[Pr]=l,e=(n.mode&1)!==0,t){case"dialog":z("cancel",r),z("close",r);break;case"iframe":case"object":case"embed":z("load",r);break;case"video":case"audio":for(i=0;i<tr.length;i++)z(tr[i],r);break;case"source":z("error",r);break;case"img":case"image":case"link":z("error",r),z("load",r);break;case"details":z("toggle",r);break;case"input":ss(r,l),z("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},z("invalid",r);break;case"textarea":cs(r,l),z("invalid",r)}Ql(t,l),i=null;for(var o in l)if(l.hasOwnProperty(o)){var a=l[o];o==="children"?typeof a=="string"?r.textContent!==a&&(l.suppressHydrationWarning!==!0&&Jr(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(l.suppressHydrationWarning!==!0&&Jr(r.textContent,a,e),i=["children",""+a]):pr.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&z("scroll",r)}switch(t){case"input":Wr(r),us(r,l,!0);break;case"textarea":Wr(r),ds(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=Ci)}r=i,n.updateQueue=r,r!==null&&(n.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Zu(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(t,{is:r.is}):(e=o.createElement(t),t==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,t),e[Ge]=n,e[Pr]=r,kd(e,n,!1,!1),n.stateNode=e;e:{switch(o=Xl(t,r),t){case"dialog":z("cancel",e),z("close",e),i=r;break;case"iframe":case"object":case"embed":z("load",e),i=r;break;case"video":case"audio":for(i=0;i<tr.length;i++)z(tr[i],e);i=r;break;case"source":z("error",e),i=r;break;case"img":case"image":case"link":z("error",e),z("load",e),i=r;break;case"details":z("toggle",e),i=r;break;case"input":ss(e,r),i=Ul(e,r),z("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=V({},r,{value:void 0}),z("invalid",e);break;case"textarea":cs(e,r),i=Vl(e,r),z("invalid",e);break;default:i=r}Ql(t,i),a=i;for(l in a)if(a.hasOwnProperty(l)){var s=a[l];l==="style"?nc(e,s):l==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&qu(e,s)):l==="children"?typeof s=="string"?(t!=="textarea"||s!=="")&&gr(e,s):typeof s=="number"&&gr(e,""+s):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(pr.hasOwnProperty(l)?s!=null&&l==="onScroll"&&z("scroll",e):s!=null&&Wo(e,l,s,o))}switch(t){case"input":Wr(e),us(e,r,!1);break;case"textarea":Wr(e),ds(e);break;case"option":r.value!=null&&e.setAttribute("value",""+En(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?ht(e,!!r.multiple,l,!1):r.defaultValue!=null&&ht(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ci)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return ce(n),null;case 6:if(e&&n.stateNode!=null)_d(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(P(166));if(t=Fn(Cr.current),Fn(Xe.current),Zr(n)){if(r=n.stateNode,t=n.memoizedProps,r[Ge]=n,(l=r.nodeValue!==t)&&(e=Ce,e!==null))switch(e.tag){case 3:Jr(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Jr(r.nodeValue,t,(e.mode&1)!==0)}l&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[Ge]=n,n.stateNode=r}return ce(n),null;case 13:if(L(W),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(B&&_e!==null&&n.mode&1&&!(n.flags&128))Uc(),_t(),n.flags|=98560,l=!1;else if(l=Zr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(P(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(P(317));l[Ge]=n}else _t(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;ce(n),l=!1}else Le!==null&&(To(Le),Le=null),l=!0;if(!l)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||W.current&1?ne===0&&(ne=3):Ca())),n.updateQueue!==null&&(n.flags|=4),ce(n),null);case 4:return Et(),wo(e,n),e===null&&wr(n.stateNode.containerInfo),ce(n),null;case 10:return sa(n.type._context),ce(n),null;case 17:return xe(n.type)&&Ei(),ce(n),null;case 19:if(L(W),l=n.memoizedState,l===null)return ce(n),null;if(r=(n.flags&128)!==0,o=l.rendering,o===null)if(r)Yt(l,!1);else{if(ne!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(o=Di(e),o!==null){for(n.flags|=128,Yt(l,!1),r=o.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)l=t,e=r,l.flags&=14680066,o=l.alternate,o===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=o.childLanes,l.lanes=o.lanes,l.child=o.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=o.memoizedProps,l.memoizedState=o.memoizedState,l.updateQueue=o.updateQueue,l.type=o.type,e=o.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return O(W,W.current&1|2),n.child}e=e.sibling}l.tail!==null&&J()>It&&(n.flags|=128,r=!0,Yt(l,!1),n.lanes=4194304)}else{if(!r)if(e=Di(o),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Yt(l,!0),l.tail===null&&l.tailMode==="hidden"&&!o.alternate&&!B)return ce(n),null}else 2*J()-l.renderingStartTime>It&&t!==1073741824&&(n.flags|=128,r=!0,Yt(l,!1),n.lanes=4194304);l.isBackwards?(o.sibling=n.child,n.child=o):(t=l.last,t!==null?t.sibling=o:n.child=o,l.last=o)}return l.tail!==null?(n=l.tail,l.rendering=n,l.tail=n.sibling,l.renderingStartTime=J(),n.sibling=null,t=W.current,O(W,r?t&1|2:t&1),n):(ce(n),null);case 22:case 23:return _a(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?Pe&1073741824&&(ce(n),n.subtreeFlags&6&&(n.flags|=8192)):ce(n),null;case 24:return null;case 25:return null}throw Error(P(156,n.tag))}function yg(e,n){switch(ia(n),n.tag){case 1:return xe(n.type)&&Ei(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Et(),L(Se),L(fe),pa(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return fa(n),null;case 13:if(L(W),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(P(340));_t()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return L(W),null;case 4:return Et(),null;case 10:return sa(n.type._context),null;case 22:case 23:return _a(),null;case 24:return null;default:return null}}var ni=!1,de=!1,vg=typeof WeakSet=="function"?WeakSet:Set,C=null;function gt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){Q(e,n,r)}else t.current=null}function ko(e,n,t){try{t()}catch(r){Q(e,n,r)}}var eu=!1;function Sg(e,n){if(io=ki,e=Tc(),ta(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var i=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{t.nodeType,l.nodeType}catch{t=null;break e}var o=0,a=-1,s=-1,u=0,f=0,c=e,p=null;n:for(;;){for(var y;c!==t||i!==0&&c.nodeType!==3||(a=o+i),c!==l||r!==0&&c.nodeType!==3||(s=o+r),c.nodeType===3&&(o+=c.nodeValue.length),(y=c.firstChild)!==null;)p=c,c=y;for(;;){if(c===e)break n;if(p===t&&++u===i&&(a=o),p===l&&++f===r&&(s=o),(y=c.nextSibling)!==null)break;c=p,p=c.parentNode}c=y}t=a===-1||s===-1?null:{start:a,end:s}}else t=null}t=t||{start:0,end:0}}else t=null;for(lo={focusedElem:e,selectionRange:t},ki=!1,C=n;C!==null;)if(n=C,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,C=e;else for(;C!==null;){n=C;try{var S=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var x=S.memoizedProps,k=S.memoizedState,g=n.stateNode,d=g.getSnapshotBeforeUpdate(n.elementType===n.type?x:Oe(n.type,x),k);g.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var h=n.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(w){Q(n,n.return,w)}if(e=n.sibling,e!==null){e.return=n.return,C=e;break}C=n.return}return S=eu,eu=!1,S}function cr(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&ko(n,t,l)}i=i.next}while(i!==r)}}function qi(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function Po(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Cd(e){var n=e.alternate;n!==null&&(e.alternate=null,Cd(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Ge],delete n[Pr],delete n[so],delete n[ng],delete n[tg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ed(e){return e.tag===5||e.tag===3||e.tag===4}function nu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ed(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function _o(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Ci));else if(r!==4&&(e=e.child,e!==null))for(_o(e,n,t),e=e.sibling;e!==null;)_o(e,n,t),e=e.sibling}function Co(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Co(e,n,t),e=e.sibling;e!==null;)Co(e,n,t),e=e.sibling}var oe=null,ze=!1;function un(e,n,t){for(t=t.child;t!==null;)Rd(e,n,t),t=t.sibling}function Rd(e,n,t){if(Qe&&typeof Qe.onCommitFiberUnmount=="function")try{Qe.onCommitFiberUnmount(Vi,t)}catch{}switch(t.tag){case 5:de||gt(t,n);case 6:var r=oe,i=ze;oe=null,un(e,n,t),oe=r,ze=i,oe!==null&&(ze?(e=oe,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):oe.removeChild(t.stateNode));break;case 18:oe!==null&&(ze?(e=oe,t=t.stateNode,e.nodeType===8?Cl(e.parentNode,t):e.nodeType===1&&Cl(e,t),vr(e)):Cl(oe,t.stateNode));break;case 4:r=oe,i=ze,oe=t.stateNode.containerInfo,ze=!0,un(e,n,t),oe=r,ze=i;break;case 0:case 11:case 14:case 15:if(!de&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var l=i,o=l.destroy;l=l.tag,o!==void 0&&(l&2||l&4)&&ko(t,n,o),i=i.next}while(i!==r)}un(e,n,t);break;case 1:if(!de&&(gt(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(a){Q(t,n,a)}un(e,n,t);break;case 21:un(e,n,t);break;case 22:t.mode&1?(de=(r=de)||t.memoizedState!==null,un(e,n,t),de=r):un(e,n,t);break;default:un(e,n,t)}}function tu(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new vg),n.forEach(function(r){var i=Ig.bind(null,e,r);t.has(r)||(t.add(r),r.then(i,i))})}}function Me(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var i=t[r];try{var l=e,o=n,a=o;e:for(;a!==null;){switch(a.tag){case 5:oe=a.stateNode,ze=!1;break e;case 3:oe=a.stateNode.containerInfo,ze=!0;break e;case 4:oe=a.stateNode.containerInfo,ze=!0;break e}a=a.return}if(oe===null)throw Error(P(160));Rd(l,o,i),oe=null,ze=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(u){Q(i,n,u)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Id(n,e),n=n.sibling}function Id(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Me(n,e),He(e),r&4){try{cr(3,e,e.return),qi(3,e)}catch(x){Q(e,e.return,x)}try{cr(5,e,e.return)}catch(x){Q(e,e.return,x)}}break;case 1:Me(n,e),He(e),r&512&&t!==null&&gt(t,t.return);break;case 5:if(Me(n,e),He(e),r&512&&t!==null&&gt(t,t.return),e.flags&32){var i=e.stateNode;try{gr(i,"")}catch(x){Q(e,e.return,x)}}if(r&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,o=t!==null?t.memoizedProps:l,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&l.type==="radio"&&l.name!=null&&Yu(i,l),Xl(a,o);var u=Xl(a,l);for(o=0;o<s.length;o+=2){var f=s[o],c=s[o+1];f==="style"?nc(i,c):f==="dangerouslySetInnerHTML"?qu(i,c):f==="children"?gr(i,c):Wo(i,f,c,u)}switch(a){case"input":Wl(i,l);break;case"textarea":Ju(i,l);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var y=l.value;y!=null?ht(i,!!l.multiple,y,!1):p!==!!l.multiple&&(l.defaultValue!=null?ht(i,!!l.multiple,l.defaultValue,!0):ht(i,!!l.multiple,l.multiple?[]:"",!1))}i[Pr]=l}catch(x){Q(e,e.return,x)}}break;case 6:if(Me(n,e),He(e),r&4){if(e.stateNode===null)throw Error(P(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(x){Q(e,e.return,x)}}break;case 3:if(Me(n,e),He(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{vr(n.containerInfo)}catch(x){Q(e,e.return,x)}break;case 4:Me(n,e),He(e);break;case 13:Me(n,e),He(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(ka=J())),r&4&&tu(e);break;case 22:if(f=t!==null&&t.memoizedState!==null,e.mode&1?(de=(u=de)||f,Me(n,e),de=u):Me(n,e),He(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(C=e,f=e.child;f!==null;){for(c=C=f;C!==null;){switch(p=C,y=p.child,p.tag){case 0:case 11:case 14:case 15:cr(4,p,p.return);break;case 1:gt(p,p.return);var S=p.stateNode;if(typeof S.componentWillUnmount=="function"){r=p,t=p.return;try{n=r,S.props=n.memoizedProps,S.state=n.memoizedState,S.componentWillUnmount()}catch(x){Q(r,t,x)}}break;case 5:gt(p,p.return);break;case 22:if(p.memoizedState!==null){iu(c);continue}}y!==null?(y.return=p,C=y):iu(c)}f=f.sibling}e:for(f=null,c=e;;){if(c.tag===5){if(f===null){f=c;try{i=c.stateNode,u?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(a=c.stateNode,s=c.memoizedProps.style,o=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=ec("display",o))}catch(x){Q(e,e.return,x)}}}else if(c.tag===6){if(f===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(x){Q(e,e.return,x)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===e)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break e;for(;c.sibling===null;){if(c.return===null||c.return===e)break e;f===c&&(f=null),c=c.return}f===c&&(f=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:Me(n,e),He(e),r&4&&tu(e);break;case 21:break;default:Me(n,e),He(e)}}function He(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Ed(t)){var r=t;break e}t=t.return}throw Error(P(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(gr(i,""),r.flags&=-33);var l=nu(e);Co(e,l,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=nu(e);_o(e,a,o);break;default:throw Error(P(161))}}catch(s){Q(e,e.return,s)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function xg(e,n,t){C=e,Td(e)}function Td(e,n,t){for(var r=(e.mode&1)!==0;C!==null;){var i=C,l=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||ni;if(!o){var a=i.alternate,s=a!==null&&a.memoizedState!==null||de;a=ni;var u=de;if(ni=o,(de=s)&&!u)for(C=i;C!==null;)o=C,s=o.child,o.tag===22&&o.memoizedState!==null?lu(i):s!==null?(s.return=o,C=s):lu(i);for(;l!==null;)C=l,Td(l),l=l.sibling;C=i,ni=a,de=u}ru(e)}else i.subtreeFlags&8772&&l!==null?(l.return=i,C=l):ru(e)}}function ru(e){for(;C!==null;){var n=C;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:de||qi(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!de)if(t===null)r.componentDidMount();else{var i=n.elementType===n.type?t.memoizedProps:Oe(n.type,t.memoizedProps);r.componentDidUpdate(i,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=n.updateQueue;l!==null&&Fs(n,l,r);break;case 3:var o=n.updateQueue;if(o!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Fs(n,o,t)}break;case 5:var a=n.stateNode;if(t===null&&n.flags&4){t=a;var s=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&t.focus();break;case"img":s.src&&(t.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var u=n.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var c=f.dehydrated;c!==null&&vr(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}de||n.flags&512&&Po(n)}catch(p){Q(n,n.return,p)}}if(n===e){C=null;break}if(t=n.sibling,t!==null){t.return=n.return,C=t;break}C=n.return}}function iu(e){for(;C!==null;){var n=C;if(n===e){C=null;break}var t=n.sibling;if(t!==null){t.return=n.return,C=t;break}C=n.return}}function lu(e){for(;C!==null;){var n=C;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{qi(4,n)}catch(s){Q(n,t,s)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var i=n.return;try{r.componentDidMount()}catch(s){Q(n,i,s)}}var l=n.return;try{Po(n)}catch(s){Q(n,l,s)}break;case 5:var o=n.return;try{Po(n)}catch(s){Q(n,o,s)}}}catch(s){Q(n,n.return,s)}if(n===e){C=null;break}var a=n.sibling;if(a!==null){a.return=n.return,C=a;break}C=n.return}}var wg=Math.ceil,Oi=an.ReactCurrentDispatcher,xa=an.ReactCurrentOwner,$e=an.ReactCurrentBatchConfig,N=0,le=null,q=null,ae=0,Pe=0,mt=Tn(0),ne=0,Tr=null,Qn=0,el=0,wa=0,dr=null,ye=null,ka=0,It=1/0,Ye=null,zi=!1,Eo=null,kn=null,ti=!1,mn=null,Li=0,fr=0,Ro=null,gi=-1,mi=0;function ge(){return N&6?J():gi!==-1?gi:gi=J()}function Pn(e){return e.mode&1?N&2&&ae!==0?ae&-ae:ig.transition!==null?(mi===0&&(mi=pc()),mi):(e=M,e!==0||(e=window.event,e=e===void 0?16:xc(e.type)),e):1}function Be(e,n,t,r){if(50<fr)throw fr=0,Ro=null,Error(P(185));Nr(e,t,r),(!(N&2)||e!==le)&&(e===le&&(!(N&2)&&(el|=t),ne===4&&pn(e,ae)),we(e,r),t===1&&N===0&&!(n.mode&1)&&(It=J()+500,Yi&&bn()))}function we(e,n){var t=e.callbackNode;ip(e,n);var r=wi(e,e===le?ae:0);if(r===0)t!==null&&gs(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&gs(t),n===1)e.tag===0?rg(ou.bind(null,e)):Ac(ou.bind(null,e)),qp(function(){!(N&6)&&bn()}),t=null;else{switch(gc(r)){case 1:t=Xo;break;case 4:t=dc;break;case 16:t=xi;break;case 536870912:t=fc;break;default:t=xi}t=zd(t,bd.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function bd(e,n){if(gi=-1,mi=0,N&6)throw Error(P(327));var t=e.callbackNode;if(wt()&&e.callbackNode!==t)return null;var r=wi(e,e===le?ae:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=Ai(e,r);else{n=r;var i=N;N|=2;var l=$d();(le!==e||ae!==n)&&(Ye=null,It=J()+500,Un(e,n));do try{_g();break}catch(a){jd(e,a)}while(!0);aa(),Oi.current=l,N=i,q!==null?n=0:(le=null,ae=0,n=ne)}if(n!==0){if(n===2&&(i=ql(e),i!==0&&(r=i,n=Io(e,i))),n===1)throw t=Tr,Un(e,0),pn(e,r),we(e,J()),t;if(n===6)pn(e,r);else{if(i=e.current.alternate,!(r&30)&&!kg(i)&&(n=Ai(e,r),n===2&&(l=ql(e),l!==0&&(r=l,n=Io(e,l))),n===1))throw t=Tr,Un(e,0),pn(e,r),we(e,J()),t;switch(e.finishedWork=i,e.finishedLanes=r,n){case 0:case 1:throw Error(P(345));case 2:Ln(e,ye,Ye);break;case 3:if(pn(e,r),(r&130023424)===r&&(n=ka+500-J(),10<n)){if(wi(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ge(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ao(Ln.bind(null,e,ye,Ye),n);break}Ln(e,ye,Ye);break;case 4:if(pn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,i=-1;0<r;){var o=31-Ae(r);l=1<<o,o=n[o],o>i&&(i=o),r&=~l}if(r=i,r=J()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*wg(r/1960))-r,10<r){e.timeoutHandle=ao(Ln.bind(null,e,ye,Ye),r);break}Ln(e,ye,Ye);break;case 5:Ln(e,ye,Ye);break;default:throw Error(P(329))}}}return we(e,J()),e.callbackNode===t?bd.bind(null,e):null}function Io(e,n){var t=dr;return e.current.memoizedState.isDehydrated&&(Un(e,n).flags|=256),e=Ai(e,n),e!==2&&(n=ye,ye=t,n!==null&&To(n)),e}function To(e){ye===null?ye=e:ye.push.apply(ye,e)}function kg(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var i=t[r],l=i.getSnapshot;i=i.value;try{if(!Fe(l(),i))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function pn(e,n){for(n&=~wa,n&=~el,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Ae(n),r=1<<t;e[t]=-1,n&=~r}}function ou(e){if(N&6)throw Error(P(327));wt();var n=wi(e,0);if(!(n&1))return we(e,J()),null;var t=Ai(e,n);if(e.tag!==0&&t===2){var r=ql(e);r!==0&&(n=r,t=Io(e,r))}if(t===1)throw t=Tr,Un(e,0),pn(e,n),we(e,J()),t;if(t===6)throw Error(P(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Ln(e,ye,Ye),we(e,J()),null}function Pa(e,n){var t=N;N|=1;try{return e(n)}finally{N=t,N===0&&(It=J()+500,Yi&&bn())}}function Xn(e){mn!==null&&mn.tag===0&&!(N&6)&&wt();var n=N;N|=1;var t=$e.transition,r=M;try{if($e.transition=null,M=1,e)return e()}finally{M=r,$e.transition=t,N=n,!(N&6)&&bn()}}function _a(){Pe=mt.current,L(mt)}function Un(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Zp(t)),q!==null)for(t=q.return;t!==null;){var r=t;switch(ia(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ei();break;case 3:Et(),L(Se),L(fe),pa();break;case 5:fa(r);break;case 4:Et();break;case 13:L(W);break;case 19:L(W);break;case 10:sa(r.type._context);break;case 22:case 23:_a()}t=t.return}if(le=e,q=e=_n(e.current,null),ae=Pe=n,ne=0,Tr=null,wa=el=Qn=0,ye=dr=null,Bn!==null){for(n=0;n<Bn.length;n++)if(t=Bn[n],r=t.interleaved,r!==null){t.interleaved=null;var i=r.next,l=t.pending;if(l!==null){var o=l.next;l.next=i,r.next=o}t.pending=r}Bn=null}return e}function jd(e,n){do{var t=q;try{if(aa(),di.current=Mi,Ni){for(var r=H.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ni=!1}if(Gn=0,ie=ee=H=null,ur=!1,Er=0,xa.current=null,t===null||t.return===null){ne=1,Tr=n,q=null;break}e:{var l=e,o=t.return,a=t,s=n;if(n=ae,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,f=a,c=f.tag;if(!(f.mode&1)&&(c===0||c===11||c===15)){var p=f.alternate;p?(f.updateQueue=p.updateQueue,f.memoizedState=p.memoizedState,f.lanes=p.lanes):(f.updateQueue=null,f.memoizedState=null)}var y=Qs(o);if(y!==null){y.flags&=-257,Xs(y,o,a,l,n),y.mode&1&&Gs(l,u,n),n=y,s=u;var S=n.updateQueue;if(S===null){var x=new Set;x.add(s),n.updateQueue=x}else S.add(s);break e}else{if(!(n&1)){Gs(l,u,n),Ca();break e}s=Error(P(426))}}else if(B&&a.mode&1){var k=Qs(o);if(k!==null){!(k.flags&65536)&&(k.flags|=256),Xs(k,o,a,l,n),la(Rt(s,a));break e}}l=s=Rt(s,a),ne!==4&&(ne=2),dr===null?dr=[l]:dr.push(l),l=o;do{switch(l.tag){case 3:l.flags|=65536,n&=-n,l.lanes|=n;var g=gd(l,s,n);Bs(l,g);break e;case 1:a=s;var d=l.type,h=l.stateNode;if(!(l.flags&128)&&(typeof d.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(kn===null||!kn.has(h)))){l.flags|=65536,n&=-n,l.lanes|=n;var w=md(l,a,n);Bs(l,w);break e}}l=l.return}while(l!==null)}Nd(t)}catch(_){n=_,q===t&&t!==null&&(q=t=t.return);continue}break}while(!0)}function $d(){var e=Oi.current;return Oi.current=Mi,e===null?Mi:e}function Ca(){(ne===0||ne===3||ne===2)&&(ne=4),le===null||!(Qn&268435455)&&!(el&268435455)||pn(le,ae)}function Ai(e,n){var t=N;N|=2;var r=$d();(le!==e||ae!==n)&&(Ye=null,Un(e,n));do try{Pg();break}catch(i){jd(e,i)}while(!0);if(aa(),N=t,Oi.current=r,q!==null)throw Error(P(261));return le=null,ae=0,ne}function Pg(){for(;q!==null;)Dd(q)}function _g(){for(;q!==null&&!Kf();)Dd(q)}function Dd(e){var n=Od(e.alternate,e,Pe);e.memoizedProps=e.pendingProps,n===null?Nd(e):q=n,xa.current=null}function Nd(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=yg(t,n),t!==null){t.flags&=32767,q=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ne=6,q=null;return}}else if(t=hg(t,n,Pe),t!==null){q=t;return}if(n=n.sibling,n!==null){q=n;return}q=n=e}while(n!==null);ne===0&&(ne=5)}function Ln(e,n,t){var r=M,i=$e.transition;try{$e.transition=null,M=1,Cg(e,n,t,r)}finally{$e.transition=i,M=r}return null}function Cg(e,n,t,r){do wt();while(mn!==null);if(N&6)throw Error(P(327));t=e.finishedWork;var i=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(P(177));e.callbackNode=null,e.callbackPriority=0;var l=t.lanes|t.childLanes;if(lp(e,l),e===le&&(q=le=null,ae=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||ti||(ti=!0,zd(xi,function(){return wt(),null})),l=(t.flags&15990)!==0,t.subtreeFlags&15990||l){l=$e.transition,$e.transition=null;var o=M;M=1;var a=N;N|=4,xa.current=null,Sg(e,t),Id(t,e),Vp(lo),ki=!!io,lo=io=null,e.current=t,xg(t),Yf(),N=a,M=o,$e.transition=l}else e.current=t;if(ti&&(ti=!1,mn=e,Li=i),l=e.pendingLanes,l===0&&(kn=null),qf(t.stateNode),we(e,J()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)i=n[t],r(i.value,{componentStack:i.stack,digest:i.digest});if(zi)throw zi=!1,e=Eo,Eo=null,e;return Li&1&&e.tag!==0&&wt(),l=e.pendingLanes,l&1?e===Ro?fr++:(fr=0,Ro=e):fr=0,bn(),null}function wt(){if(mn!==null){var e=gc(Li),n=$e.transition,t=M;try{if($e.transition=null,M=16>e?16:e,mn===null)var r=!1;else{if(e=mn,mn=null,Li=0,N&6)throw Error(P(331));var i=N;for(N|=4,C=e.current;C!==null;){var l=C,o=l.child;if(C.flags&16){var a=l.deletions;if(a!==null){for(var s=0;s<a.length;s++){var u=a[s];for(C=u;C!==null;){var f=C;switch(f.tag){case 0:case 11:case 15:cr(8,f,l)}var c=f.child;if(c!==null)c.return=f,C=c;else for(;C!==null;){f=C;var p=f.sibling,y=f.return;if(Cd(f),f===u){C=null;break}if(p!==null){p.return=y,C=p;break}C=y}}}var S=l.alternate;if(S!==null){var x=S.child;if(x!==null){S.child=null;do{var k=x.sibling;x.sibling=null,x=k}while(x!==null)}}C=l}}if(l.subtreeFlags&2064&&o!==null)o.return=l,C=o;else e:for(;C!==null;){if(l=C,l.flags&2048)switch(l.tag){case 0:case 11:case 15:cr(9,l,l.return)}var g=l.sibling;if(g!==null){g.return=l.return,C=g;break e}C=l.return}}var d=e.current;for(C=d;C!==null;){o=C;var h=o.child;if(o.subtreeFlags&2064&&h!==null)h.return=o,C=h;else e:for(o=d;C!==null;){if(a=C,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:qi(9,a)}}catch(_){Q(a,a.return,_)}if(a===o){C=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,C=w;break e}C=a.return}}if(N=i,bn(),Qe&&typeof Qe.onPostCommitFiberRoot=="function")try{Qe.onPostCommitFiberRoot(Vi,e)}catch{}r=!0}return r}finally{M=t,$e.transition=n}}return!1}function au(e,n,t){n=Rt(t,n),n=gd(e,n,1),e=wn(e,n,1),n=ge(),e!==null&&(Nr(e,1,n),we(e,n))}function Q(e,n,t){if(e.tag===3)au(e,e,t);else for(;n!==null;){if(n.tag===3){au(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(kn===null||!kn.has(r))){e=Rt(t,e),e=md(n,e,1),n=wn(n,e,1),e=ge(),n!==null&&(Nr(n,1,e),we(n,e));break}}n=n.return}}function Eg(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=ge(),e.pingedLanes|=e.suspendedLanes&t,le===e&&(ae&t)===t&&(ne===4||ne===3&&(ae&130023424)===ae&&500>J()-ka?Un(e,0):wa|=t),we(e,n)}function Md(e,n){n===0&&(e.mode&1?(n=Gr,Gr<<=1,!(Gr&130023424)&&(Gr=4194304)):n=1);var t=ge();e=rn(e,n),e!==null&&(Nr(e,n,t),we(e,t))}function Rg(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Md(e,t)}function Ig(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(P(314))}r!==null&&r.delete(n),Md(e,t)}var Od;Od=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Se.current)ve=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return ve=!1,mg(e,n,t);ve=!!(e.flags&131072)}else ve=!1,B&&n.flags&1048576&&Bc(n,Ti,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;pi(e,n),e=n.pendingProps;var i=Pt(n,fe.current);xt(n,t),i=ma(null,n,r,e,i,t);var l=ha();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,xe(r)?(l=!0,Ri(n)):l=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ca(n),i.updater=Zi,n.stateNode=i,i._reactInternals=n,mo(n,r,e,t),n=vo(null,n,r,!0,l,t)):(n.tag=0,B&&l&&ra(n),pe(null,n,i,t),n=n.child),n;case 16:r=n.elementType;e:{switch(pi(e,n),e=n.pendingProps,i=r._init,r=i(r._payload),n.type=r,i=n.tag=bg(r),e=Oe(r,e),i){case 0:n=yo(null,n,r,e,t);break e;case 1:n=Js(null,n,r,e,t);break e;case 11:n=Ks(null,n,r,e,t);break e;case 14:n=Ys(null,n,r,Oe(r.type,e),t);break e}throw Error(P(306,r,""))}return n;case 0:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Oe(r,i),yo(e,n,r,i,t);case 1:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Oe(r,i),Js(e,n,r,i,t);case 3:e:{if(Sd(n),e===null)throw Error(P(387));r=n.pendingProps,l=n.memoizedState,i=l.element,Gc(e,n),$i(n,r,null,t);var o=n.memoizedState;if(r=o.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},n.updateQueue.baseState=l,n.memoizedState=l,n.flags&256){i=Rt(Error(P(423)),n),n=Zs(e,n,r,t,i);break e}else if(r!==i){i=Rt(Error(P(424)),n),n=Zs(e,n,r,t,i);break e}else for(_e=xn(n.stateNode.containerInfo.firstChild),Ce=n,B=!0,Le=null,t=Hc(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(_t(),r===i){n=ln(e,n,t);break e}pe(e,n,r,t)}n=n.child}return n;case 5:return Qc(n),e===null&&fo(n),r=n.type,i=n.pendingProps,l=e!==null?e.memoizedProps:null,o=i.children,oo(r,i)?o=null:l!==null&&oo(r,l)&&(n.flags|=32),vd(e,n),pe(e,n,o,t),n.child;case 6:return e===null&&fo(n),null;case 13:return xd(e,n,t);case 4:return da(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Ct(n,null,r,t):pe(e,n,r,t),n.child;case 11:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Oe(r,i),Ks(e,n,r,i,t);case 7:return pe(e,n,n.pendingProps,t),n.child;case 8:return pe(e,n,n.pendingProps.children,t),n.child;case 12:return pe(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,i=n.pendingProps,l=n.memoizedProps,o=i.value,O(bi,r._currentValue),r._currentValue=o,l!==null)if(Fe(l.value,o)){if(l.children===i.children&&!Se.current){n=ln(e,n,t);break e}}else for(l=n.child,l!==null&&(l.return=n);l!==null;){var a=l.dependencies;if(a!==null){o=l.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(l.tag===1){s=en(-1,t&-t),s.tag=2;var u=l.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?s.next=s:(s.next=f.next,f.next=s),u.pending=s}}l.lanes|=t,s=l.alternate,s!==null&&(s.lanes|=t),po(l.return,t,n),a.lanes|=t;break}s=s.next}}else if(l.tag===10)o=l.type===n.type?null:l.child;else if(l.tag===18){if(o=l.return,o===null)throw Error(P(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),po(o,t,n),o=l.sibling}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===n){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}pe(e,n,i.children,t),n=n.child}return n;case 9:return i=n.type,r=n.pendingProps.children,xt(n,t),i=De(i),r=r(i),n.flags|=1,pe(e,n,r,t),n.child;case 14:return r=n.type,i=Oe(r,n.pendingProps),i=Oe(r.type,i),Ys(e,n,r,i,t);case 15:return hd(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Oe(r,i),pi(e,n),n.tag=1,xe(r)?(e=!0,Ri(n)):e=!1,xt(n,t),pd(n,r,i),mo(n,r,i,t),vo(null,n,r,!0,e,t);case 19:return wd(e,n,t);case 22:return yd(e,n,t)}throw Error(P(156,n.tag))};function zd(e,n){return cc(e,n)}function Tg(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function je(e,n,t,r){return new Tg(e,n,t,r)}function Ea(e){return e=e.prototype,!(!e||!e.isReactComponent)}function bg(e){if(typeof e=="function")return Ea(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Vo)return 11;if(e===Go)return 14}return 2}function _n(e,n){var t=e.alternate;return t===null?(t=je(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function hi(e,n,t,r,i,l){var o=2;if(r=e,typeof e=="function")Ea(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case lt:return Wn(t.children,i,l,n);case Ho:o=8,i|=8;break;case Ll:return e=je(12,t,n,i|2),e.elementType=Ll,e.lanes=l,e;case Al:return e=je(13,t,n,i),e.elementType=Al,e.lanes=l,e;case Bl:return e=je(19,t,n,i),e.elementType=Bl,e.lanes=l,e;case Qu:return nl(t,i,l,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Vu:o=10;break e;case Gu:o=9;break e;case Vo:o=11;break e;case Go:o=14;break e;case cn:o=16,r=null;break e}throw Error(P(130,e==null?e:typeof e,""))}return n=je(o,t,n,i),n.elementType=e,n.type=r,n.lanes=l,n}function Wn(e,n,t,r){return e=je(7,e,r,n),e.lanes=t,e}function nl(e,n,t,r){return e=je(22,e,r,n),e.elementType=Qu,e.lanes=t,e.stateNode={isHidden:!1},e}function Dl(e,n,t){return e=je(6,e,null,n),e.lanes=t,e}function Nl(e,n,t){return n=je(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function jg(e,n,t,r,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gl(0),this.expirationTimes=gl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ra(e,n,t,r,i,l,o,a,s){return e=new jg(e,n,t,a,s),n===1?(n=1,l===!0&&(n|=8)):n=0,l=je(3,null,null,n),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},ca(l),e}function $g(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:it,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function Ld(e){if(!e)return Rn;e=e._reactInternals;e:{if(Jn(e)!==e||e.tag!==1)throw Error(P(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(xe(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(P(171))}if(e.tag===1){var t=e.type;if(xe(t))return Lc(e,t,n)}return n}function Ad(e,n,t,r,i,l,o,a,s){return e=Ra(t,r,!0,e,i,l,o,a,s),e.context=Ld(null),t=e.current,r=ge(),i=Pn(t),l=en(r,i),l.callback=n??null,wn(t,l,i),e.current.lanes=i,Nr(e,i,r),we(e,r),e}function tl(e,n,t,r){var i=n.current,l=ge(),o=Pn(i);return t=Ld(t),n.context===null?n.context=t:n.pendingContext=t,n=en(l,o),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=wn(i,n,o),e!==null&&(Be(e,i,o,l),ci(e,i,o)),o}function Bi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function su(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Ia(e,n){su(e,n),(e=e.alternate)&&su(e,n)}function Dg(){return null}var Bd=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ta(e){this._internalRoot=e}rl.prototype.render=Ta.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(P(409));tl(e,n,null,null)};rl.prototype.unmount=Ta.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Xn(function(){tl(null,e,null,null)}),n[tn]=null}};function rl(e){this._internalRoot=e}rl.prototype.unstable_scheduleHydration=function(e){if(e){var n=yc();e={blockedOn:null,target:e,priority:n};for(var t=0;t<fn.length&&n!==0&&n<fn[t].priority;t++);fn.splice(t,0,e),t===0&&Sc(e)}};function ba(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function il(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function uu(){}function Ng(e,n,t,r,i){if(i){if(typeof r=="function"){var l=r;r=function(){var u=Bi(o);l.call(u)}}var o=Ad(n,r,e,0,null,!1,!1,"",uu);return e._reactRootContainer=o,e[tn]=o.current,wr(e.nodeType===8?e.parentNode:e),Xn(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Bi(s);a.call(u)}}var s=Ra(e,0,!1,null,null,!1,!1,"",uu);return e._reactRootContainer=s,e[tn]=s.current,wr(e.nodeType===8?e.parentNode:e),Xn(function(){tl(n,s,t,r)}),s}function ll(e,n,t,r,i){var l=t._reactRootContainer;if(l){var o=l;if(typeof i=="function"){var a=i;i=function(){var s=Bi(o);a.call(s)}}tl(n,o,e,i)}else o=Ng(t,n,e,i,r);return Bi(o)}mc=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=nr(n.pendingLanes);t!==0&&(Ko(n,t|1),we(n,J()),!(N&6)&&(It=J()+500,bn()))}break;case 13:Xn(function(){var r=rn(e,1);if(r!==null){var i=ge();Be(r,e,1,i)}}),Ia(e,1)}};Yo=function(e){if(e.tag===13){var n=rn(e,134217728);if(n!==null){var t=ge();Be(n,e,134217728,t)}Ia(e,134217728)}};hc=function(e){if(e.tag===13){var n=Pn(e),t=rn(e,n);if(t!==null){var r=ge();Be(t,e,n,r)}Ia(e,n)}};yc=function(){return M};vc=function(e,n){var t=M;try{return M=e,n()}finally{M=t}};Yl=function(e,n,t){switch(n){case"input":if(Wl(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var i=Ki(r);if(!i)throw Error(P(90));Ku(r),Wl(r,i)}}}break;case"textarea":Ju(e,t);break;case"select":n=t.value,n!=null&&ht(e,!!t.multiple,n,!1)}};ic=Pa;lc=Xn;var Mg={usingClientEntryPoint:!1,Events:[Or,ut,Ki,tc,rc,Pa]},Jt={findFiberByHostInstance:An,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Og={bundleType:Jt.bundleType,version:Jt.version,rendererPackageName:Jt.rendererPackageName,rendererConfig:Jt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:an.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=sc(e),e===null?null:e.stateNode},findFiberByHostInstance:Jt.findFiberByHostInstance||Dg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ri=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ri.isDisabled&&ri.supportsFiber)try{Vi=ri.inject(Og),Qe=ri}catch{}}Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Mg;Re.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ba(n))throw Error(P(200));return $g(e,n,null,t)};Re.createRoot=function(e,n){if(!ba(e))throw Error(P(299));var t=!1,r="",i=Bd;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=Ra(e,1,!1,null,null,t,!1,r,i),e[tn]=n.current,wr(e.nodeType===8?e.parentNode:e),new Ta(n)};Re.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(P(188)):(e=Object.keys(e).join(","),Error(P(268,e)));return e=sc(n),e=e===null?null:e.stateNode,e};Re.flushSync=function(e){return Xn(e)};Re.hydrate=function(e,n,t){if(!il(n))throw Error(P(200));return ll(null,e,n,!0,t)};Re.hydrateRoot=function(e,n,t){if(!ba(e))throw Error(P(405));var r=t!=null&&t.hydratedSources||null,i=!1,l="",o=Bd;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),n=Ad(n,null,e,1,t??null,i,!1,l,o),e[tn]=n.current,wr(e),r)for(e=0;e<r.length;e++)t=r[e],i=t._getVersion,i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i);return new rl(n)};Re.render=function(e,n,t){if(!il(n))throw Error(P(200));return ll(null,e,n,!1,t)};Re.unmountComponentAtNode=function(e){if(!il(e))throw Error(P(40));return e._reactRootContainer?(Xn(function(){ll(null,null,e,!1,function(){e._reactRootContainer=null,e[tn]=null})}),!0):!1};Re.unstable_batchedUpdates=Pa;Re.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!il(t))throw Error(P(200));if(e==null||e._reactInternals===void 0)throw Error(P(38));return ll(e,n,t,!1,r)};Re.version="18.3.1-next-f1338f8080-20240426";function Fd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Fd)}catch(e){console.error(e)}}Fd(),Fu.exports=Re;var Fi=Fu.exports,Ud,cu=Fi;Ud=Ol.createRoot=cu.createRoot,Ol.hydrateRoot=cu.hydrateRoot;/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function br(){return br=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},br.apply(null,arguments)}var hn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(hn||(hn={}));const du="popstate";function zg(e){e===void 0&&(e={});function n(i,l){let{pathname:o="/",search:a="",hash:s=""}=Zn(i.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),bo("",{pathname:o,search:a,hash:s},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function t(i,l){let o=i.document.querySelector("base"),a="";if(o&&o.getAttribute("href")){let s=i.location.href,u=s.indexOf("#");a=u===-1?s:s.slice(0,u)}return a+"#"+(typeof l=="string"?l:Ui(l))}function r(i,l){ja(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(l)+")")}return Ag(n,t,r,e)}function Z(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function ja(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function Lg(){return Math.random().toString(36).substr(2,8)}function fu(e,n){return{usr:e.state,key:e.key,idx:n}}function bo(e,n,t,r){return t===void 0&&(t=null),br({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?Zn(n):n,{state:t,key:n&&n.key||r||Lg()})}function Ui(e){let{pathname:n="/",search:t="",hash:r=""}=e;return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(n+=r.charAt(0)==="#"?r:"#"+r),n}function Zn(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));let r=e.indexOf("?");r>=0&&(n.search=e.substr(r),e=e.substr(0,r)),e&&(n.pathname=e)}return n}function Ag(e,n,t,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:l=!1}=r,o=i.history,a=hn.Pop,s=null,u=f();u==null&&(u=0,o.replaceState(br({},o.state,{idx:u}),""));function f(){return(o.state||{idx:null}).idx}function c(){a=hn.Pop;let k=f(),g=k==null?null:k-u;u=k,s&&s({action:a,location:x.location,delta:g})}function p(k,g){a=hn.Push;let d=bo(x.location,k,g);t&&t(d,k),u=f()+1;let h=fu(d,u),w=x.createHref(d);try{o.pushState(h,"",w)}catch(_){if(_ instanceof DOMException&&_.name==="DataCloneError")throw _;i.location.assign(w)}l&&s&&s({action:a,location:x.location,delta:1})}function y(k,g){a=hn.Replace;let d=bo(x.location,k,g);t&&t(d,k),u=f();let h=fu(d,u),w=x.createHref(d);o.replaceState(h,"",w),l&&s&&s({action:a,location:x.location,delta:0})}function S(k){let g=i.location.origin!=="null"?i.location.origin:i.location.href,d=typeof k=="string"?k:Ui(k);return d=d.replace(/ $/,"%20"),Z(g,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,g)}let x={get action(){return a},get location(){return e(i,o)},listen(k){if(s)throw new Error("A history only accepts one active listener");return i.addEventListener(du,c),s=k,()=>{i.removeEventListener(du,c),s=null}},createHref(k){return n(i,k)},createURL:S,encodeLocation(k){let g=S(k);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:p,replace:y,go(k){return o.go(k)}};return x}var pu;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(pu||(pu={}));function Bg(e,n,t){return t===void 0&&(t="/"),Fg(e,n,t)}function Fg(e,n,t,r){let i=typeof n=="string"?Zn(n):n,l=$a(i.pathname||"/",t);if(l==null)return null;let o=Wd(e);Ug(o);let a=null,s=em(l);for(let u=0;a==null&&u<o.length;++u)a=Jg(o[u],s);return a}function Wd(e,n,t,r){n===void 0&&(n=[]),t===void 0&&(t=[]),r===void 0&&(r="");let i=(l,o,a)=>{let s={relativePath:a===void 0?l.path||"":a,caseSensitive:l.caseSensitive===!0,childrenIndex:o,route:l};s.relativePath.startsWith("/")&&(Z(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=Cn([r,s.relativePath]),f=t.concat(s);l.children&&l.children.length>0&&(Z(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Wd(l.children,n,f,u)),!(l.path==null&&!l.index)&&n.push({path:u,score:Kg(u,l.index),routesMeta:f})};return e.forEach((l,o)=>{var a;if(l.path===""||!((a=l.path)!=null&&a.includes("?")))i(l,o);else for(let s of Hd(l.path))i(l,o,s)}),n}function Hd(e){let n=e.split("/");if(n.length===0)return[];let[t,...r]=n,i=t.endsWith("?"),l=t.replace(/\?$/,"");if(r.length===0)return i?[l,""]:[l];let o=Hd(r.join("/")),a=[];return a.push(...o.map(s=>s===""?l:[l,s].join("/"))),i&&a.push(...o),a.map(s=>e.startsWith("/")&&s===""?"/":s)}function Ug(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:Yg(n.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const Wg=/^:[\w-]+$/,Hg=3,Vg=2,Gg=1,Qg=10,Xg=-2,gu=e=>e==="*";function Kg(e,n){let t=e.split("/"),r=t.length;return t.some(gu)&&(r+=Xg),n&&(r+=Vg),t.filter(i=>!gu(i)).reduce((i,l)=>i+(Wg.test(l)?Hg:l===""?Gg:Qg),r)}function Yg(e,n){return e.length===n.length&&e.slice(0,-1).every((r,i)=>r===n[i])?e[e.length-1]-n[n.length-1]:0}function Jg(e,n,t){let{routesMeta:r}=e,i={},l="/",o=[];for(let a=0;a<r.length;++a){let s=r[a],u=a===r.length-1,f=l==="/"?n:n.slice(l.length)||"/",c=Zg({path:s.relativePath,caseSensitive:s.caseSensitive,end:u},f),p=s.route;if(!c)return null;Object.assign(i,c.params),o.push({params:i,pathname:Cn([l,c.pathname]),pathnameBase:rm(Cn([l,c.pathnameBase])),route:p}),c.pathnameBase!=="/"&&(l=Cn([l,c.pathnameBase]))}return o}function Zg(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,r]=qg(e.path,e.caseSensitive,e.end),i=n.match(t);if(!i)return null;let l=i[0],o=l.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,f,c)=>{let{paramName:p,isOptional:y}=f;if(p==="*"){let x=a[c]||"";o=l.slice(0,l.length-x.length).replace(/(.)\/+$/,"$1")}const S=a[c];return y&&!S?u[p]=void 0:u[p]=(S||"").replace(/%2F/g,"/"),u},{}),pathname:l,pathnameBase:o,pattern:e}}function qg(e,n,t){n===void 0&&(n=!1),t===void 0&&(t=!0),ja(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,s)=>(r.push({paramName:a,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,n?void 0:"i"),r]}function em(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return ja(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function $a(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,r=e.charAt(t);return r&&r!=="/"?null:e.slice(t)||"/"}function nm(e,n){n===void 0&&(n="/");let{pathname:t,search:r="",hash:i=""}=typeof e=="string"?Zn(e):e,l;return t?(t=Vd(t),t.startsWith("/")?l=mu(t.substring(1),"/"):l=mu(t,n)):l=n,{pathname:l,search:im(r),hash:lm(i)}}function mu(e,n){let t=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?t.length>1&&t.pop():i!=="."&&t.push(i)}),t.length>1?t.join("/"):"/"}function Ml(e,n,t,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function tm(e){return e.filter((n,t)=>t===0||n.route.path&&n.route.path.length>0)}function Da(e,n){let t=tm(e);return n?t.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):t.map(r=>r.pathnameBase)}function Na(e,n,t,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Zn(e):(i=br({},e),Z(!i.pathname||!i.pathname.includes("?"),Ml("?","pathname","search",i)),Z(!i.pathname||!i.pathname.includes("#"),Ml("#","pathname","hash",i)),Z(!i.search||!i.search.includes("#"),Ml("#","search","hash",i)));let l=e===""||i.pathname==="",o=l?"/":i.pathname,a;if(o==null)a=t;else{let c=n.length-1;if(!r&&o.startsWith("..")){let p=o.split("/");for(;p[0]==="..";)p.shift(),c-=1;i.pathname=p.join("/")}a=c>=0?n[c]:"/"}let s=nm(i,a),u=o&&o!=="/"&&o.endsWith("/"),f=(l||o===".")&&t.endsWith("/");return!s.pathname.endsWith("/")&&(u||f)&&(s.pathname+="/"),s}const Vd=e=>e.replace(/\/\/+/g,"/"),Cn=e=>Vd(e.join("/")),rm=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),im=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,lm=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function om(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Gd=["post","put","patch","delete"];new Set(Gd);const am=["get",...Gd];new Set(am);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function jr(){return jr=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},jr.apply(null,arguments)}const Ma=v.createContext(null),sm=v.createContext(null),jn=v.createContext(null),ol=v.createContext(null),sn=v.createContext({outlet:null,matches:[],isDataRoute:!1}),Qd=v.createContext(null);function um(e,n){let{relative:t}=n===void 0?{}:n;$t()||Z(!1);let{basename:r,navigator:i}=v.useContext(jn),{hash:l,pathname:o,search:a}=Yd(e,{relative:t}),s=o;return r!=="/"&&(s=o==="/"?r:Cn([r,o])),i.createHref({pathname:s,search:a,hash:l})}function $t(){return v.useContext(ol)!=null}function Dt(){return $t()||Z(!1),v.useContext(ol).location}function Xd(e){v.useContext(jn).static||v.useLayoutEffect(e)}function Kd(){let{isDataRoute:e}=v.useContext(sn);return e?Pm():cm()}function cm(){$t()||Z(!1);let e=v.useContext(Ma),{basename:n,future:t,navigator:r}=v.useContext(jn),{matches:i}=v.useContext(sn),{pathname:l}=Dt(),o=JSON.stringify(Da(i,t.v7_relativeSplatPath)),a=v.useRef(!1);return Xd(()=>{a.current=!0}),v.useCallback(function(u,f){if(f===void 0&&(f={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let c=Na(u,JSON.parse(o),l,f.relative==="path");e==null&&n!=="/"&&(c.pathname=c.pathname==="/"?n:Cn([n,c.pathname])),(f.replace?r.replace:r.push)(c,f.state,f)},[n,r,o,l,e])}function dm(){let{matches:e}=v.useContext(sn),n=e[e.length-1];return n?n.params:{}}function Yd(e,n){let{relative:t}=n===void 0?{}:n,{future:r}=v.useContext(jn),{matches:i}=v.useContext(sn),{pathname:l}=Dt(),o=JSON.stringify(Da(i,r.v7_relativeSplatPath));return v.useMemo(()=>Na(e,JSON.parse(o),l,t==="path"),[e,o,l,t])}function fm(e,n){return pm(e,n)}function pm(e,n,t,r){$t()||Z(!1);let{navigator:i}=v.useContext(jn),{matches:l}=v.useContext(sn),o=l[l.length-1],a=o?o.params:{};o&&o.pathname;let s=o?o.pathnameBase:"/";o&&o.route;let u=Dt(),f;if(n){var c;let k=typeof n=="string"?Zn(n):n;s==="/"||(c=k.pathname)!=null&&c.startsWith(s)||Z(!1),f=k}else f=u;let p=f.pathname||"/",y=p;if(s!=="/"){let k=s.replace(/^\//,"").split("/");y="/"+p.replace(/^\//,"").split("/").slice(k.length).join("/")}let S=Bg(e,{pathname:y}),x=vm(S&&S.map(k=>Object.assign({},k,{params:Object.assign({},a,k.params),pathname:Cn([s,i.encodeLocation?i.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?s:Cn([s,i.encodeLocation?i.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),l,t,r);return n&&x?v.createElement(ol.Provider,{value:{location:jr({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:hn.Pop}},x):x}function gm(){let e=km(),n=om(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return v.createElement(v.Fragment,null,v.createElement("h2",null,"Unexpected Application Error!"),v.createElement("h3",{style:{fontStyle:"italic"}},n),t?v.createElement("pre",{style:i},t):null,null)}const mm=v.createElement(gm,null);class hm extends v.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){console.error("React Router caught the following error during render",n,t)}render(){return this.state.error!==void 0?v.createElement(sn.Provider,{value:this.props.routeContext},v.createElement(Qd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ym(e){let{routeContext:n,match:t,children:r}=e,i=v.useContext(Ma);return i&&i.static&&i.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=t.route.id),v.createElement(sn.Provider,{value:n},r)}function vm(e,n,t,r){var i;if(n===void 0&&(n=[]),t===void 0&&(t=null),r===void 0&&(r=null),e==null){var l;if(!t)return null;if(t.errors)e=t.matches;else if((l=r)!=null&&l.v7_partialHydration&&n.length===0&&!t.initialized&&t.matches.length>0)e=t.matches;else return null}let o=e,a=(i=t)==null?void 0:i.errors;if(a!=null){let f=o.findIndex(c=>c.route.id&&(a==null?void 0:a[c.route.id])!==void 0);f>=0||Z(!1),o=o.slice(0,Math.min(o.length,f+1))}let s=!1,u=-1;if(t&&r&&r.v7_partialHydration)for(let f=0;f<o.length;f++){let c=o[f];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(u=f),c.route.id){let{loaderData:p,errors:y}=t,S=c.route.loader&&p[c.route.id]===void 0&&(!y||y[c.route.id]===void 0);if(c.route.lazy||S){s=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((f,c,p)=>{let y,S=!1,x=null,k=null;t&&(y=a&&c.route.id?a[c.route.id]:void 0,x=c.route.errorElement||mm,s&&(u<0&&p===0?(_m("route-fallback"),S=!0,k=null):u===p&&(S=!0,k=c.route.hydrateFallbackElement||null)));let g=n.concat(o.slice(0,p+1)),d=()=>{let h;return y?h=x:S?h=k:c.route.Component?h=v.createElement(c.route.Component,null):c.route.element?h=c.route.element:h=f,v.createElement(ym,{match:c,routeContext:{outlet:f,matches:g,isDataRoute:t!=null},children:h})};return t&&(c.route.ErrorBoundary||c.route.errorElement||p===0)?v.createElement(hm,{location:t.location,revalidation:t.revalidation,component:x,error:y,children:d(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):d()},null)}var Jd=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Jd||{}),Zd=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Zd||{});function Sm(e){let n=v.useContext(Ma);return n||Z(!1),n}function xm(e){let n=v.useContext(sm);return n||Z(!1),n}function wm(e){let n=v.useContext(sn);return n||Z(!1),n}function qd(e){let n=wm(),t=n.matches[n.matches.length-1];return t.route.id||Z(!1),t.route.id}function km(){var e;let n=v.useContext(Qd),t=xm(),r=qd();return n!==void 0?n:(e=t.errors)==null?void 0:e[r]}function Pm(){let{router:e}=Sm(Jd.UseNavigateStable),n=qd(Zd.UseNavigateStable),t=v.useRef(!1);return Xd(()=>{t.current=!0}),v.useCallback(function(i,l){l===void 0&&(l={}),t.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,jr({fromRouteId:n},l)))},[e,n])}const hu={};function _m(e,n,t){hu[e]||(hu[e]=!0)}function Cm(e,n){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function jo(e){let{to:n,replace:t,state:r,relative:i}=e;$t()||Z(!1);let{future:l,static:o}=v.useContext(jn),{matches:a}=v.useContext(sn),{pathname:s}=Dt(),u=Kd(),f=Na(n,Da(a,l.v7_relativeSplatPath),s,i==="path"),c=JSON.stringify(f);return v.useEffect(()=>u(JSON.parse(c),{replace:t,state:r,relative:i}),[u,c,i,t,r]),null}function rr(e){Z(!1)}function Em(e){let{basename:n="/",children:t=null,location:r,navigationType:i=hn.Pop,navigator:l,static:o=!1,future:a}=e;$t()&&Z(!1);let s=n.replace(/^\/*/,"/"),u=v.useMemo(()=>({basename:s,navigator:l,static:o,future:jr({v7_relativeSplatPath:!1},a)}),[s,a,l,o]);typeof r=="string"&&(r=Zn(r));let{pathname:f="/",search:c="",hash:p="",state:y=null,key:S="default"}=r,x=v.useMemo(()=>{let k=$a(f,s);return k==null?null:{location:{pathname:k,search:c,hash:p,state:y,key:S},navigationType:i}},[s,f,c,p,y,S,i]);return x==null?null:v.createElement(jn.Provider,{value:u},v.createElement(ol.Provider,{children:t,value:x}))}function Rm(e){let{children:n,location:t}=e;return fm($o(n),t)}new Promise(()=>{});function $o(e,n){n===void 0&&(n=[]);let t=[];return v.Children.forEach(e,(r,i)=>{if(!v.isValidElement(r))return;let l=[...n,i];if(r.type===v.Fragment){t.push.apply(t,$o(r.props.children,l));return}r.type!==rr&&Z(!1),!r.props.index||!r.props.children||Z(!1);let o={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=$o(r.props.children,l)),t.push(o)}),t}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Do(){return Do=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Do.apply(null,arguments)}function Im(e,n){if(e==null)return{};var t={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(n.indexOf(r)!==-1)continue;t[r]=e[r]}return t}function Tm(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function bm(e,n){return e.button===0&&(!n||n==="_self")&&!Tm(e)}const jm=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],$m="6";try{window.__reactRouterVersion=$m}catch{}const Dm="startTransition",yu=Ef[Dm];function Nm(e){let{basename:n,children:t,future:r,window:i}=e,l=v.useRef();l.current==null&&(l.current=zg({window:i,v5Compat:!0}));let o=l.current,[a,s]=v.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},f=v.useCallback(c=>{u&&yu?yu(()=>s(c)):s(c)},[s,u]);return v.useLayoutEffect(()=>o.listen(f),[o,f]),v.useEffect(()=>Cm(r),[r]),v.createElement(Em,{basename:n,children:t,location:a.location,navigationType:a.action,navigator:o,future:r})}const Mm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Om=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,No=v.forwardRef(function(n,t){let{onClick:r,relative:i,reloadDocument:l,replace:o,state:a,target:s,to:u,preventScrollReset:f,viewTransition:c}=n,p=Im(n,jm),{basename:y}=v.useContext(jn),S,x=!1;if(typeof u=="string"&&Om.test(u)&&(S=u,Mm))try{let h=new URL(window.location.href),w=u.startsWith("//")?new URL(h.protocol+u):new URL(u),_=$a(w.pathname,y);w.origin===h.origin&&_!=null?u=_+w.search+w.hash:x=!0}catch{}let k=um(u,{relative:i}),g=zm(u,{replace:o,state:a,target:s,preventScrollReset:f,relative:i,viewTransition:c});function d(h){r&&r(h),h.defaultPrevented||g(h)}return v.createElement("a",Do({},p,{href:S||k,onClick:x||l?r:d,ref:t,target:s}))});var vu;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(vu||(vu={}));var Su;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Su||(Su={}));function zm(e,n){let{target:t,replace:r,state:i,preventScrollReset:l,relative:o,viewTransition:a}=n===void 0?{}:n,s=Kd(),u=Dt(),f=Yd(e,{relative:o});return v.useCallback(c=>{if(bm(c,t)){c.preventDefault();let p=r!==void 0?r:Ui(u)===Ui(f);s(e,{replace:p,state:i,preventScrollReset:l,relative:o,viewTransition:a})}},[u,s,f,r,i,t,e,l,o,a])}const Lm="https://github.com/frankvane/vane-components";class Am extends Dr.Component{constructor(){super(...arguments);ns(this,"state",{error:null})}static getDerivedStateFromError(t){return{error:t}}render(){var t;return this.state.error?m.jsxs("div",{className:"crash",role:"alert",children:[m.jsx("h3",{children:"这个页面炸了"}),m.jsx("pre",{children:String(((t=this.state.error)==null?void 0:t.stack)||this.state.error)}),m.jsx("button",{type:"button",onClick:()=>this.setState({error:null}),children:"重试"})]}):this.props.children}}function ef(e,n){return String(e.entries.indexOf(n)+1).padStart(2,"0")}function Bm({demos:e,pathname:n}){var s;const{groups:t,entries:r,label:i}=e,l=(s=r.find(u=>n===`/demo/${u.meta.slug}`))==null?void 0:s.meta.group,[o,a]=v.useState(()=>{var f;const u=(f=t[0])==null?void 0:f.key;return Object.fromEntries(t.map(c=>[c.key,c.key===(l??u)]))});return v.useEffect(()=>{l&&a(u=>u[l]?u:{...u,[l]:!0})},[l]),m.jsxs("div",{className:"nav-section",children:[m.jsxs("div",{className:"nav-section-head",children:[m.jsx("span",{children:i}),m.jsxs("code",{children:[r.length," demos"]})]}),t.map(u=>{const f=r.filter(p=>p.meta.group===u.key);if(f.length===0)return null;const c=o[u.key]??!1;return m.jsxs("div",{className:"nav-group",children:[m.jsxs("button",{type:"button",className:`nav-group-head${l===u.key?" is-current":""}`,onClick:()=>a(p=>({...p,[u.key]:!c})),"aria-expanded":c,children:[m.jsx("span",{className:`nav-caret${c?" is-open":""}`,"aria-hidden":!0,children:"▸"}),u.label,m.jsx("code",{children:f.length})]}),c?m.jsx("div",{className:"nav-list",children:f.map(p=>m.jsxs(No,{to:`/demo/${p.meta.slug}`,className:`nav-sub${n===`/demo/${p.meta.slug}`?" is-active":""}`,children:[m.jsx("em",{"aria-hidden":!0,children:ef(e,p)}),p.meta.title]},p.meta.slug))}):null]},u.key)})]})}function Fm({demos:e}){const{slug:n}=dm(),{entries:t,detail:r}=e,i=n?t.find(o=>o.meta.slug===n):void 0;if(!i)return m.jsx(jo,{to:`/demo/${t[0].meta.slug}`,replace:!0});const l=t.indexOf(i)+1;return m.jsx(Dr.Fragment,{children:r(i,l)},i.meta.slug)}function Um({config:e}){var f;const{pathname:n}=Dt(),[t,r]=v.useState(!1),[i,l]=v.useState(!1);v.useEffect(()=>r(!1),[n]);const o=v.useCallback(()=>l(c=>!c),[]);v.useEffect(()=>{const c=p=>{const y=p.target,S=y&&(y.tagName==="INPUT"||y.tagName==="TEXTAREA"||y.isContentEditable);p.key==="Escape"&&r(!1),!S&&(p.key==="g"||p.key==="G")&&!p.metaKey&&!p.ctrlKey&&l(x=>!x)};return window.addEventListener("keydown",c),()=>window.removeEventListener("keydown",c)},[]);const a=e.demos,s=v.useMemo(()=>{if(!n.startsWith("/demo"))return e.crumb(n);const c=n.replace(/^\/demo\/?/,""),p=a.entries.find(y=>y.meta.slug===c);return p?`demo ${ef(a,p)} · ${p.meta.title}`:"demo · 逐项示例"},[n,e,a]),u=v.useMemo(()=>e.nav.map((c,p)=>({...c,no:String(p+1).padStart(2,"0")})),[e.nav]);return m.jsxs("div",{className:`shell${t?" is-nav-open":""}${i?" is-guides":""}`,children:[m.jsx("a",{className:"skip-link",href:"#main",onClick:c=>{c.preventDefault();const p=document.getElementById("main");p==null||p.setAttribute("tabindex","-1"),p==null||p.focus(),p==null||p.scrollIntoView({block:"start"})},children:"跳到内容"}),m.jsxs("aside",{className:"side","aria-label":"站点导航",children:[m.jsxs(No,{to:"/",className:"brand",children:[m.jsx("span",{className:"brand-mark","aria-hidden":!0,children:e.brand}),m.jsxs("span",{children:[m.jsx("strong",{children:e.pkg}),m.jsx("em",{children:e.subtitle})]})]}),m.jsxs("nav",{children:[u.map(c=>m.jsxs(No,{to:c.to,className:`nav-item${n===c.to?" is-active":""}`,"aria-current":n===c.to?"page":void 0,children:[m.jsx("em",{"aria-hidden":!0,children:c.no}),m.jsx("span",{children:c.label}),c.hint?m.jsx("code",{children:c.hint}):null]},c.to)),m.jsx(Bm,{demos:e.demos,pathname:n})]}),m.jsxs("div",{className:"side-foot",children:[m.jsx("p",{children:e.footer[0]}),m.jsx("p",{className:"muted",children:e.footer[1]})]})]}),m.jsx("button",{type:"button",className:"scrim","aria-label":"关闭导航",tabIndex:t?0:-1,onClick:()=>r(!1)}),m.jsxs("div",{className:"main",id:"main",children:[m.jsxs("header",{className:"topbar",children:[m.jsx("button",{type:"button",className:"nav-toggle","aria-label":t?"关闭导航":"打开导航","aria-expanded":t,onClick:()=>r(c=>!c),children:m.jsx("span",{"aria-hidden":!0})}),m.jsx("span",{className:"crumb",children:s}),m.jsxs("div",{className:"topbar-right",children:[(f=e.stats)==null?void 0:f.map(c=>m.jsxs("span",{className:"topbar-stat",title:c.title,children:[m.jsx("b",{children:c.value})," ",c.label]},c.label)),m.jsxs("button",{type:"button",className:"topbar-btn","aria-pressed":i,onClick:o,title:"显示栏位参考线（快捷键 G）",children:[m.jsx("i",{"aria-hidden":!0}),"guides"]}),m.jsx("a",{className:"topbar-link",href:e.sourceUrl??Lm,target:"_blank",rel:"noreferrer",children:"source ↗"})]})]}),m.jsx("div",{className:"guides","aria-hidden":!0}),m.jsx(v.Suspense,{fallback:m.jsx("div",{className:"loading",children:"loading modules…"}),children:m.jsx(Am,{children:m.jsxs(Rm,{children:[e.routes.map(c=>m.jsx(rr,{path:c.path,element:c.element},c.path)),m.jsx(rr,{path:"/demo",element:m.jsx(jo,{to:`/demo/${e.demos.entries[0].meta.slug}`,replace:!0})}),m.jsx(rr,{path:"/demo/:slug",element:m.jsx(Fm,{demos:e.demos})}),m.jsx(rr,{path:"*",element:m.jsx(jo,{to:"/",replace:!0})})]})})})]})]})}function Wm({config:e}){return m.jsx(Nm,{children:m.jsx(Um,{config:e})})}const Hm="modulepreload",Vm=function(e,n){return new URL(e,n).href},xu={},Oa=function(n,t,r){let i=Promise.resolve();if(t&&t.length>0){const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),s=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));i=Promise.allSettled(t.map(u=>{if(u=Vm(u,r),u in xu)return;xu[u]=!0;const f=u.endsWith(".css"),c=f?'[rel="stylesheet"]':"";if(!!r)for(let S=o.length-1;S>=0;S--){const x=o[S];if(x.href===u&&(!f||x.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${c}`))return;const y=document.createElement("link");if(y.rel=f?"stylesheet":Hm,f||(y.as="script"),y.crossOrigin="",y.href=u,s&&y.setAttribute("nonce",s),document.head.appendChild(y),f)return new Promise((S,x)=>{y.addEventListener("load",S),y.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${u}`)))})}))}function l(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&l(a.reason);return n().catch(l)})};function Gm(){const e=new Map,n=new Map,t=(o,a)=>{const s=e.get(o);if(s)for(const u of[...s])try{u(a)}catch(f){console.warn(`[PluginBus] handler error for event "${o}"`,f)}},r=(o,a)=>{let s=e.get(o);return s||(s=new Set,e.set(o,s)),s.add(a),()=>{s==null||s.delete(a)}},i=(o,a)=>{const s=u=>{a(u),l(o,s)};return r(o,s)},l=(o,a)=>{var s;if(!a){e.delete(o);return}(s=e.get(o))==null||s.delete(a)};return{emit:t,on:r,once:i,off:l,getData:o=>n.get(o),setData:(o,a)=>{const s=n.get(o);n.set(o,a),s!==a&&t(o,a)},deleteData:o=>{const a=n.has(o);n.delete(o),a&&t(o,void 0)},hasData:o=>n.has(o),getAll:()=>{const o={};return n.forEach((a,s)=>{o[s]=a}),o},clear:()=>{e.clear(),n.clear()}}}function nf(e){const n=new Map(e.map(a=>[a.name,a])),t=[];for(const a of e)for(const s of a.dependencies??[])n.has(s)||t.push(`${a.name} -> ${s}`);const r=[],i=new Set,l=[...e],o=a=>(a.dependencies??[]).every(s=>i.has(s)||!n.has(s));for(;l.length>0;){const a=l.filter(o);if(a.length===0)throw new Error(`[vane/plugin-core] 插件循环依赖: ${l.map(u=>u.name).join(" <-> ")}`);let s=a[0];for(const u of a)(u.priority??0)>(s.priority??0)&&(s=u);r.push(s),i.add(s.name),l.splice(l.indexOf(s),1)}return t.length>0&&console.warn(`[vane/plugin-core] 以下插件依赖未注册，将被忽略:
  ${t.join(`
  `)}`),r}async function Qm(e,n={}){const{timeout:t=3e3,name:r="anonymous",hook:i="unknown"}=n;if(!t||t<=0)return await e();let l;const o=new Promise((a,s)=>{l=setTimeout(()=>{s(new Error(`[vane/plugin-core] 插件 ${r} 的钩子 ${i} 超时(${t}ms)`))},t)});try{return await Promise.race([Promise.resolve().then(e),o])}finally{l&&clearTimeout(l)}}const Xm=new Set(["onMount","onUnmount","onPropsChange","onError"]);function Km(e={}){const n=e.logger??console,t=e.sandbox??!0,r=e.timeout??3e3,i=[],l=[],o=new Map,a=()=>nf([...o.values()].filter(u=>u.enabled!==!1)),s=u=>{o.set(u.name,{...u,enabled:u.enabled??!0}),u.init&&Promise.resolve(u.init()).catch(f=>{n.warn(`[PluginManager] init failed for ${u.name}`,f)})};return{register:s,registerAll:u=>{for(const f of u)s(f)},unregister:u=>{const f=o.get(u);f&&(f.destroy&&Promise.resolve(f.destroy()).catch(c=>{n.warn(`[PluginManager] destroy failed for ${f.name}`,c)}),o.delete(u))},getPlugin:u=>o.get(u),getAllPlugins:()=>[...o.values()],getEnabledPlugins:()=>[...o.values()].filter(u=>u.enabled!==!1),getExecutionOrder:a,enable:u=>{const f=o.get(u);f&&(f.enabled=!0)},disable:u=>{const f=o.get(u);f&&(f.enabled=!1)},has:u=>o.has(u),executeHook:async(u,f,...c)=>{var p,y;for(const S of a()){const x=(p=S.hooks)==null?void 0:p[u];if(typeof x!="function")continue;const k=S.sandbox??t,g=S.timeout??r;let d;try{d=k?await Qm(()=>x(f,...c),{timeout:g,name:S.name,hook:String(u)}):await x(f,...c)}catch(h){if(i.push({plugin:S.name,hook:String(u),error:h}),n.warn(`[PluginManager] hook ${String(u)} failed in ${S.name}`,h),(y=e.onError)==null||y.call(e,S.name,String(u),h),u==="onError")break;continue}if(Xm.has(String(u))&&typeof d=="function"){l.push(d);continue}if(d===!1)return!1;if(d!==void 0&&d!==!0)return d}},clear:()=>{const u=l.splice(0);for(const f of u.reverse())try{f()}catch(c){n.warn("[PluginManager] cleanup failed",c)}for(const f of o.values())f.destroy&&Promise.resolve(f.destroy()).catch(c=>{n.warn(`[PluginManager] destroy failed for ${f.name}`,c)});o.clear()},getErrors:()=>[...i]}}var Ym=Object.defineProperty,Jm=(e,n,t)=>n in e?Ym(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,Zm=(e,n,t)=>Jm(e,n+"",t);class za extends Dr.Component{constructor(){super(...arguments),Zm(this,"state",{error:null})}static getDerivedStateFromError(n){return{error:n}}componentDidCatch(n,t){var r,i;console.warn("[vane/plugin-core] 插件渲染错误已被隔离",n,t),(i=(r=this.props).onError)==null||i.call(r,n,t)}render(){const{error:n}=this.state;return n?this.props.fallback?this.props.fallback(n):null:this.props.children}}let ii=null;function qm(e=!1){if(ii&&!e)return ii;const n=typeof window<"u"?window.innerWidth:1024,t=typeof window<"u"?window.innerHeight:768,r=typeof window<"u"&&window.devicePixelRatio||1,i=typeof navigator<"u"&&navigator.userAgent||"",l=/iPad|Tablet/i.test(i),o=/Mobile|Android|iPhone/i.test(i),a=typeof window<"u"&&("ontouchstart"in window||(navigator.maxTouchPoints??0)>0);return ii={type:l?"tablet":o?"mobile":"desktop",os:i,browser:i,devicePixelRatio:r,viewportWidth:n,viewportHeight:t,isTouchDevice:a,isRetina:r>=2},ii}function eh(e){const{plugins:n,props:t,data:r,initialState:i,containerRef:l,enableDebug:o=!1,managerOptions:a,extendContext:s}=e,u=v.useRef(null),f=l??u,c=v.useRef(null);c.current||(c.current=Km(a));const p=c.current,y=v.useRef(null);y.current||(y.current=Gm());const S=y.current,x=v.useRef(new Map),[k,g]=v.useState(i??{}),[,d]=v.useState(0),h=v.useCallback(()=>d(te=>te+1),[]),w=v.useMemo(()=>qm(),[]),_=n.map(te=>te.name).join("|");v.useLayoutEffect(()=>{p.clear(),p.registerAll(n),o&&console.debug("[vane/plugin-core] plugins registered:",_)},[_]),v.useLayoutEffect(()=>()=>{p.executeHook("onUnmount",I.current),p.clear()},[p]);const R=v.useMemo(()=>nf(n),[_]),I=v.useRef(null),T=v.useMemo(()=>{const te={props:t,data:r,bus:S,refs:{container:f,getContainer:()=>f.current},state:k,setState:K=>g(We=>({...We,...K})),shared:x.current,deviceInfo:w,forceUpdate:h,getSize:()=>{const K=f.current;return K?{width:K.offsetWidth,height:K.offsetHeight}:{width:0,height:0}},logger:console};return s?s(te):te},[t,r,k,w,S,s]);I.current=T;const U=v.useCallback(te=>{var We;let K=te;for(const Wt of R){const Ke=(We=Wt.hooks)==null?void 0:We.transformProps;typeof Ke=="function"&&(K=Ke(K))}return K},[R]),$=v.useCallback(te=>{var We;let K=te;for(const Wt of R){const Ke=(We=Wt.hooks)==null?void 0:We.transformData;typeof Ke=="function"&&(K=Ke(I.current,K))}return K},[R]),ke=v.useCallback((te,...K)=>p.executeHook(te,I.current,...K),[p]);return{manager:p,bus:S,context:T,state:k,setState:T.setState,execute:ke,transformProps:U,transformData:$,orderedPlugins:R}}v.createContext(null);function nh(e,n,t){const{hook:r,position:i="after"}=t;return e.filter(l=>l.enabled!==!1).filter(l=>{var o;return typeof((o=l.hooks)==null?void 0:o[r])=="function"}).filter(l=>{var o;return(((o=l.config)==null?void 0:o.slotPosition)??"after")===i}).sort((l,o)=>{var a,s;return(((a=l.config)==null?void 0:a.order)??0)-(((s=o.config)==null?void 0:s.order)??0)||(o.priority??0)-(l.priority??0)}).map((l,o)=>{try{const a=l.hooks[r](n);return a==null?null:m.jsx(za,{children:a},`vane-slot-${l.name}-${o}`)}catch(a){return console.warn(`[vane/plugin-core] 插件 ${l.name} 的 ${r} 渲染失败`,a),null}})}const tf=v.createContext(null);function th({orderedPlugins:e,context:n,children:t}){const r=v.useMemo(()=>({orderedPlugins:e,context:n}),[e,n]);return m.jsx(tf.Provider,{value:r,children:t})}function rh(e,n,t){return[...e].filter(r=>r.enabled!==!1&&typeof r.hooks[t]=="function").sort((r,i)=>{var l,o;return(((l=r.config)==null?void 0:l.order)??0)-(((o=i.config)==null?void 0:o.order)??0)||(i.priority??0)-(r.priority??0)}).map((r,i)=>{try{const l=r.hooks[t](n);return l==null?null:m.jsx(za,{children:l},`signin-slot-${r.name}-${i}`)}catch(l){return console.warn(`[vane-sign-in] 插件 ${r.name} 的 ${t} 渲染失败`,l),null}}).filter(Boolean)}function Zt(e){const n=v.useContext(tf);return n?rh(n.orderedPlugins,n.context,e):[]}const A=v.forwardRef(function(n,t){const{children:r,containerClassName:i,containerStyle:l,containerRefExternal:o}=n,a=v.useRef(null),s=o||a,[,u]=v.useState(0),f=v.useCallback(()=>u(k=>k+1),[]),c=Zt("renderHeader"),p=Zt("renderCalendar"),y=Zt("renderRewards"),S=Zt("renderActions"),x=Zt("renderFooter");return v.useImperativeHandle(t,()=>({getContainer:()=>s.current,forceUpdate:f,getSize:()=>{const k=s.current;return k?{width:k.offsetWidth,height:k.offsetHeight}:{width:0,height:0}}}),[f]),m.jsxs("div",{ref:s,"data-testid":"si-root",className:`vs-signin ${i||""}`,style:{position:"relative",boxSizing:"border-box",background:"#fff",color:"#1f2328",borderRadius:12,border:"1px solid #e3e5e8",boxShadow:"0 1px 3px rgba(16, 22, 26, 0.06)",overflow:"hidden",display:"flex",flexDirection:"column",width:"100%",maxWidth:460,...l},children:[c.length>0&&m.jsx("div",{className:"vs-header",style:{display:"flex",flexDirection:"column",gap:12,padding:"14px 16px 8px"},children:c}),p.length>0&&m.jsx("div",{className:"vs-calendar",style:{display:"flex",flexDirection:"column",gap:12,padding:"8px 16px",borderTop:"1px solid #f0f2f4"},children:p}),y.length>0&&m.jsx("div",{className:"vs-rewards",style:{display:"flex",flexDirection:"column",gap:10,padding:"8px 16px",borderTop:"1px solid #f0f2f4"},children:y}),S.length>0&&m.jsx("div",{className:"vs-actions",style:{display:"flex",flexWrap:"wrap",gap:8,padding:"8px 16px",borderTop:"1px solid #f0f2f4"},children:S}),x.length>0&&m.jsx("div",{className:"vs-footer",style:{display:"flex",flexDirection:"column",gap:12,padding:"8px 16px 16px",borderTop:"1px solid #f0f2f4"},children:x}),r]})});A.displayName="SignInCore";function F(e,n){const t=Array.isArray(n)?{plugins:n}:n,{plugins:r,enableDebug:i=!1}=t,l=v.forwardRef((o,a)=>{const s=v.useRef(null),u=v.useCallback(k=>({...k,data:o.data,callbacks:o.callbacks??{}}),[o]),f=eh({plugins:r,props:o,data:o.data,containerRef:s,extendContext:u,enableDebug:i}),c=v.useRef(f.context);c.current=f.context;const p=v.useCallback((k,...g)=>f.execute(k,...g),[f.manager]),y=f.transformProps(o);v.useEffect(()=>{p("onMount")},[p]);const S=v.useRef(o);v.useEffect(()=>{const k=S.current;k!==o&&(S.current=o,p("onPropsChange",k,o))},[o,p]);const x={...y,containerRefExternal:s,debug:y.debug??i,onMount:()=>{var k;(k=y.onMount)==null||k.call(y)},onUnmount:()=>{var k;(k=y.onUnmount)==null||k.call(y)},children:m.jsx(za,{children:m.jsxs(m.Fragment,{children:[y.children,nh(f.orderedPlugins,f.context,{hook:"renderOverlay"})]})})};return m.jsx(th,{orderedPlugins:f.orderedPlugins,context:f.context,children:m.jsx(e,{ref:a,...x})})});return l.displayName="WithPlugins(SignInCore)",l}const Ue="#cf4407",ih="#fff1e6",lh="#b8860b",oh="#0f8a4a",ah="#1f2328",on="#6b6b6b",Kn="#8a8a8a",rf="#f2f3f5",sh="#e3e5e8",wu={signed:{bg:"#fff1e6",fg:"#d35400",border:"#cf4407"},today:{bg:"#cf4407",fg:"#ffffff",border:"#cf4407"},missed:{bg:"#f2f3f5",fg:"#7d7d7d",border:"#e3e5e8"},future:{bg:"#fafafa",fg:"#8a8a8a",border:"#ececec"},reward:{bg:"#fff8e1",fg:"#b8860b",border:"#e0a800"}},uh={signed:"✓",today:"今",missed:"·",future:"",reward:"★"},ch="StreakStatePlugin",dh="连签状态：展示当前连签天数与历史最高连签，头部区渲染。",fh="0.1.0",ph=["streak","header","status"],gh=[{name:"showMax",type:"boolean",default:"true",description:"是否展示历史最高连签天数"}],mh="withSignInPlugins(SignInCore, [createStreakStatePlugin()])",hh=[{name:"默认",description:"头部展示连签天数与最高连签",src:"createStreakStatePlugin()",config:{}}],La={name:ch,description:dh,since:fh,tags:ph,config:gh,example:mh,examples:hh};function $n(e={}){const{showMax:n=!0}=e;return{name:"StreakState",version:"0.1.0",description:La.description,priority:10,enabled:!0,hooks:{renderHeader:t=>{const{streak:r,maxStreak:i}=t.data;return m.jsxs("div",{"data-testid":"si-streak",style:{display:"flex",alignItems:"baseline",gap:8},children:[m.jsx("span",{style:{fontSize:34,fontWeight:800,color:Ue,lineHeight:1,letterSpacing:"-0.5px"},children:r}),m.jsx("span",{style:{fontSize:13,color:on,fontWeight:600},children:"天连签"}),n&&m.jsxs("span",{style:{marginLeft:"auto",fontSize:12,color:on,background:"#faf7f4",border:`1px solid ${sh}`,borderRadius:999,padding:"3px 10px",whiteSpace:"nowrap"},children:["最高 ",i," 天"]})]})}}}}$n.meta=La;const yh="CalendarStripPlugin",vh="日历条：横向滚动的逐日格，展示已签/今日/漏签/未来/奖励五态，带奖励格金点提示。",Sh="0.1.0",xh=["calendar","strip","status"],wh=[{name:"showRewardDot",type:"boolean",default:"true",description:"是否在带奖励的格右上角显示金点"}],kh="withSignInPlugins(SignInCore, [createCalendarStripPlugin()])",Ph=[{name:"默认",description:"日历条展示当月逐日签到状态",src:"createCalendarStripPlugin()",config:{}}],Aa={name:yh,description:vh,since:Sh,tags:xh,config:wh,example:kh,examples:Ph},ku={signed:{bg:"#fff1e6",fg:"#c2410c",border:"#cf4407"},today:{bg:"#cf4407",fg:"#ffffff",border:"#cf4407"},missed:{bg:"#f2f3f5",fg:"#6b6b6b",border:"#e3e5e8"},future:{bg:"#fafafa",fg:"#6b6b6b",border:"#ececec"},reward:{bg:"#fff8e1",fg:"#9a6a00",border:"#e0a800"}},_h={signed:"✓",today:"今",missed:"·",future:"",reward:"★"};function qn(e={}){const{showRewardDot:n=!0}=e;return{name:"CalendarStrip",version:"0.1.0",description:Aa.description,priority:20,enabled:!0,hooks:{renderCalendar:t=>{const r=t.data.calendar??[];return m.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6},children:r.map(i=>{const l=ku[i.status]??ku.future,o=!!(i.reward&&!i.reward.claimed);return m.jsxs("div",{title:i.date,style:{flex:"0 0 auto",width:42,height:54,borderRadius:8,background:l.bg,color:l.fg,border:`1px solid ${l.border}`,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",position:"relative"},children:[m.jsxs("span",{style:{fontSize:11,color:l.fg},children:["第",i.day,"天"]}),m.jsx("span",{style:{fontSize:16,fontWeight:700,lineHeight:1.1},children:_h[i.status]||i.day}),n&&o&&m.jsx("span",{style:{position:"absolute",top:4,right:4,width:6,height:6,borderRadius:"50%",background:"#b8860b"}})]},i.date)})})}}}}qn.meta=Aa;const Ch="RewardPreviewPlugin",Eh="奖励预告：从当前连签天数起，逐日展示后续可领奖励（积分 / 券 / 礼包 / 徽章）。",Rh="0.1.0",Ih=["reward","preview","rewards"],Th=[{name:"limit",type:"number",default:"5",description:"最多展示的奖励预告条数"}],bh="withSignInPlugins(SignInCore, [createRewardPreviewPlugin()])",jh=[{name:"默认",description:"奖励区逐日预告后续奖励",src:"createRewardPreviewPlugin()",config:{}}],Ba={name:Ch,description:Eh,since:Rh,tags:Ih,config:Th,example:bh,examples:jh};function Dn(e={}){const{limit:n=5}=e;return{name:"RewardPreview",version:"0.1.0",description:Ba.description,priority:30,enabled:!0,hooks:{renderRewards:t=>{const r=(t.data.rewards??[]).filter(i=>i.day>=t.data.streak);return r.length?m.jsx("div",{style:{background:"#fafbfc",border:"1px solid #eef0f2",borderRadius:10,padding:"10px 12px",display:"flex",flexDirection:"column",gap:8},children:r.slice(0,n).map(i=>m.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,fontSize:13},children:[m.jsx("span",{style:{width:32,height:32,borderRadius:8,flex:"0 0 auto",background:"#fff8e1",color:"#9a6a00",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:700},children:i.day}),m.jsx("span",{style:{color:"#1f2328"},children:i.label}),i.claimed&&m.jsx("span",{style:{marginLeft:"auto",color:"#0f8a4a",fontSize:12},children:"已领 ✓"})]},i.day))}):null}}}}Dn.meta=Ba;const $h="MakeupSlotPlugin",Dh="补签位：找到可补签的漏签格并提供补签入口，补签次数用尽后置灰禁用。",Nh="0.1.0",Mh=["makeup","actions","recovery"],Oh=[{name:"buttonText",type:"string",default:"undefined",description:"自定义按钮文案（禁用态仍显示「补签次数已用完」）"}],zh="withSignInPlugins(SignInCore, [createMakeupSlotPlugin()])",Lh=[{name:"默认",description:"操作区补签入口，禁用态置灰",src:"createMakeupSlotPlugin()",config:{}}],Fa={name:$h,description:Dh,since:Nh,tags:Mh,config:Oh,example:zh,examples:Lh};function et(e={}){const{buttonText:n}=e;return{name:"MakeupSlot",version:"0.1.0",description:Fa.description,priority:42,enabled:!0,hooks:{renderActions:t=>{const{makeup:r,calendar:i}=t.data,l=(i??[]).find(u=>u.canMakeup),o=r.available-r.used,a=o<=0||!l,s=a?"补签次数已用完":n??`补签 · 剩${o}次`;return m.jsx("button",{type:"button","data-testid":"si-makeup-btn","data-disabled":String(a),disabled:a,onClick:()=>{var u,f;return l&&((f=(u=t.callbacks).makeup)==null?void 0:f.call(u,l.date))},style:{border:a?"1px solid #d8d8d8":"1px solid #cf4407",background:a?"#f2f3f5":"#fff",color:a?"#8a8a8a":"#cf4407",borderRadius:18,padding:"6px 14px",fontSize:13,cursor:a?"not-allowed":"pointer"},children:s})}}}}et.meta=Fa;const Ah="TodayCheckInPlugin",Bh="今日签到：主 CTA，已签置灰、未签高亮，点击经回调下发签到动作。",Fh="0.1.0",Uh=["checkin","actions","cta"],Wh=[{name:"signedText",type:"string",default:"今日已签 ✓",description:"已签到时的按钮文案"},{name:"unsignedText",type:"string",default:"立即签到",description:"未签到时的按钮文案"}],Hh="withSignInPlugins(SignInCore, [createTodayCheckInPlugin()])",Vh=[{name:"默认",description:"操作区主签到按钮",src:"createTodayCheckInPlugin()",config:{}}],Ua={name:Ah,description:Bh,since:Fh,tags:Uh,config:Wh,example:Hh,examples:Vh};function Nn(e={}){const{signedText:n="今日已签 ✓",unsignedText:t="立即签到"}=e;return{name:"TodayCheckIn",version:"0.1.0",description:Ua.description,priority:40,enabled:!0,hooks:{renderActions:r=>{const{todaySigned:i}=r.data;return m.jsx("button",{type:"button","data-testid":"si-checkin-btn","data-signed":String(i),disabled:i,onClick:()=>{var l,o;return!i&&((o=(l=r.callbacks).sign)==null?void 0:o.call(l))},style:{border:"none",background:i?"#f2f3f5":"#cf4407",color:i?"#8a8a8a":"#ffffff",borderRadius:20,padding:"8px 20px",fontSize:14,fontWeight:700,cursor:i?"not-allowed":"pointer"},children:i?n:t})}}}}Nn.meta=Ua;const Gh={slug:"basic",title:"最小可用",group:"basic",intro:"内核 + 五个核心插件跑通装配链路；加插件就是往 withPlugins 数组里加一项。"};function Qh(e){const n=Array.from({length:14},(t,r)=>{const i=r+1,l=i<8?"signed":i===8&&!e?"today":i===9?"missed":"future";return{date:`2026-10-${String(i).padStart(2,"0")}`,day:i,status:l,canMakeup:i===9}});return{todaySigned:e,streak:e?8:7,maxStreak:12,totalDays:132,points:3680,calendar:n,rewards:[{day:1,kind:"points",value:10,label:"10 积分",claimed:!0},{day:3,kind:"coupon",value:5,label:"5 元券",claimed:!0},{day:7,kind:"gift",label:"7 天礼包",claimed:!0},{day:8,kind:"points",value:50,label:"50 积分"},{day:10,kind:"badge",label:"闪耀徽章"}],makeup:{available:3,used:1,max:3}}}const Xh=F(A,[$n(),qn(),Dn(),et(),Nn()]);function Kh(){const[e,n]=v.useState(!1),t=Qh(e),r={sign:()=>n(!0),makeup:()=>alert("触发补签"),claim:i=>alert(`领取第 ${i} 天奖励`)};return m.jsx(Xh,{data:t,callbacks:r,containerStyle:{maxWidth:480,margin:"0 auto"}})}const Yh=Object.freeze(Object.defineProperty({__proto__:null,default:Kh,meta:Gh},Symbol.toStringTag,{value:"Module"}));function G(e=!1){const n=Array.from({length:14},(i,l)=>{const o=l+1,a=o<8?"signed":o===8&&!e?"today":o===9?"missed":"future";return{date:`2026-10-${String(o).padStart(2,"0")}`,day:o,status:a,canMakeup:o===9}}),t=Date.now()+36e5,r=[{id:"c1",day:7,label:"7 天礼包",at:Date.now()-864e5},{id:"c2",day:3,label:"5 元券",at:Date.now()-3*864e5},{id:"c3",day:1,label:"10 积分",at:Date.now()-7*864e5}];return{todaySigned:e,streak:e?8:7,maxStreak:12,totalDays:132,points:3680,calendar:n,rewards:[{day:1,kind:"points",value:10,label:"10 积分",claimed:!0},{day:3,kind:"coupon",value:5,label:"5 元券",claimed:!0},{day:7,kind:"gift",label:"7 天礼包",claimed:!0},{day:8,kind:"points",value:50,label:"50 积分"},{day:10,kind:"badge",label:"闪耀徽章"}],makeup:{available:3,used:1,max:3},nextResetAt:t,level:{name:"黄金会员",current:680,next:1e3,progress:.68},rules:["每日 0 点刷新签到资格，连续签到奖励递增","断签后连签天数清零，但累计天数保留","补签卡可在断签 7 日内补回当日奖励","积分可 1:100 兑换现金券，详见会员中心"],history:r}}function X(e={}){return{sign:()=>{},claim:()=>{},makeup:()=>{},share:()=>{},remind:()=>{},invite:()=>{},...e}}const Jh={slug:"streak-state",title:"连签状态 StreakState",group:"plugin",intro:"头部连签天数 + 最高连签；断签清零、累计保留的领域逻辑由内核数据驱动。"},Zh=F(A,[$n()]);function qh(){const[e,n]=v.useState(!1),t=G(e),r=X({sign:()=>n(!0)});return m.jsx(Zh,{data:t,callbacks:r,containerStyle:{maxWidth:480,margin:"0 auto"}})}const ey=Object.freeze(Object.defineProperty({__proto__:null,default:qh,meta:Jh},Symbol.toStringTag,{value:"Module"})),ny={slug:"calendar-strip",title:"日历条 CalendarStrip",group:"plugin",intro:"横向日期条；已签/今日/漏签/补签/未来五态由 DayStatus 着色，各平台运营位通用。"},ty=F(A,[qn()]);function ry(){const[e,n]=v.useState(!1),t=G(e),r=X({sign:()=>n(!0)});return m.jsx(ty,{data:t,callbacks:r,containerStyle:{maxWidth:480,margin:"0 auto"}})}const iy=Object.freeze(Object.defineProperty({__proto__:null,default:ry,meta:ny},Symbol.toStringTag,{value:"Module"})),ly={slug:"reward-preview",title:"奖励预告 RewardPreview",group:"plugin",intro:"逐日奖励预览：已领取置灰打勾，未到天数半透明，临近大额奖励高亮。"},oy=F(A,[Dn()]);function ay(){const[e,n]=v.useState(!1),t=G(e),r=X({sign:()=>n(!0)});return m.jsx(oy,{data:t,callbacks:r,containerStyle:{maxWidth:480,margin:"0 auto"}})}const sy=Object.freeze(Object.defineProperty({__proto__:null,default:ay,meta:ly},Symbol.toStringTag,{value:"Module"})),uy={slug:"makeup-slot",title:"补签位 MakeupSlot",group:"plugin",intro:"断签缺口处的高亮补签入口：剩余补签卡数 + 一键补回当日奖励，走 callbacks.makeup。"},cy=F(A,[et()]);function dy(){const[e,n]=v.useState(!1),t=G(e),r=X({sign:()=>n(!0)});return m.jsx(cy,{data:t,callbacks:r,containerStyle:{maxWidth:480,margin:"0 auto"}})}const fy=Object.freeze(Object.defineProperty({__proto__:null,default:dy,meta:uy},Symbol.toStringTag,{value:"Module"})),py={slug:"today-check-in",title:"今日签到 TodayCheckIn",group:"plugin",intro:"操作区主按钮：未签时高亮的「立即签到」，已签后变为连签天数 + 明日预告。"},gy=F(A,[Nn()]);function my(){const[e,n]=v.useState(!1),t=G(e),r=X({sign:()=>n(!0)});return m.jsx(gy,{data:t,callbacks:r,containerStyle:{maxWidth:480,margin:"0 auto"}})}const hy=Object.freeze(Object.defineProperty({__proto__:null,default:my,meta:py},Symbol.toStringTag,{value:"Module"})),yy="PointsBalancePlugin",vy="累计积分：展示当前累计积分总额，头部区渲染。",Sy="0.1.0",xy=["points","header","balance"],wy=[],ky="withSignInPlugins(SignInCore, [createPointsBalancePlugin()])",Py=[{name:"默认",description:"头部展示累计积分",src:"createPointsBalancePlugin()",config:{}}],Wa={name:yy,description:vy,since:Sy,tags:xy,config:wy,example:ky,examples:Py};function Nt(e={}){return{name:"PointsBalance",version:"0.1.0",description:Wa.description,priority:11,enabled:!0,hooks:{renderHeader:n=>{const{points:t}=n.data;return m.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:6},children:[m.jsx("span",{style:{fontSize:13,color:on},children:"积分"}),m.jsx("span",{style:{fontSize:20,fontWeight:800,color:Ue,lineHeight:1},children:t})]})}}}}Nt.meta=Wa;const _y={slug:"points-balance",title:"积分余额 PointsBalance",group:"plugin",intro:"头部积分余额：大字号展示当前积分 + 累计天数，承接积分商城的入口视觉。"},Cy=F(A,[Nt()]);function Ey(){const[e,n]=v.useState(!1),t=G(e),r=X({sign:()=>n(!0)});return m.jsx(Cy,{data:t,callbacks:r,containerStyle:{maxWidth:480,margin:"0 auto"}})}const Ry=Object.freeze(Object.defineProperty({__proto__:null,default:Ey,meta:_y},Symbol.toStringTag,{value:"Module"})),Iy="StatRowPlugin",Ty="数据行：一行展示累计天数与累计积分，头部区渲染。",by="0.1.0",jy=["stat","header","summary"],$y=[],Dy="withSignInPlugins(SignInCore, [createStatRowPlugin()])",Ny=[{name:"默认",description:"头部展示累计天数与积分",src:"createStatRowPlugin()",config:{}}],Ha={name:Iy,description:Ty,since:by,tags:jy,config:$y,example:Dy,examples:Ny};function Mt(e={}){return{name:"StatRow",version:"0.1.0",description:Ha.description,priority:12,enabled:!0,hooks:{renderHeader:n=>{const{totalDays:t,points:r}=n.data;return m.jsxs("div",{style:{display:"flex",gap:18,fontSize:12,color:on},children:[m.jsxs("span",{children:["累计 ",m.jsx("b",{style:{color:ah,fontSize:14},children:t})," 天"]}),m.jsxs("span",{children:["累计 ",m.jsx("b",{style:{color:Ue,fontSize:14},children:r})," 分"]})]})}}}}Mt.meta=Ha;const My={slug:"stat-row",title:"统计行 StatRow",group:"plugin",intro:"头部三项指标横排：当前连签、累计天数、历史最高连签，一屏尽览进度。"},Oy=F(A,[Mt()]);function zy(){const[e,n]=v.useState(!1),t=G(e),r=X({sign:()=>n(!0)});return m.jsx(Oy,{data:t,callbacks:r,containerStyle:{maxWidth:480,margin:"0 auto"}})}const Ly=Object.freeze(Object.defineProperty({__proto__:null,default:zy,meta:My},Symbol.toStringTag,{value:"Module"})),Ay="LevelBadgePlugin",By="会员等级徽标：展示等级名与进度条，头部区渲染；无等级数据时静默跳过。",Fy="0.1.0",Uy=["level","header","badge"],Wy=[],Hy="withSignInPlugins(SignInCore, [createLevelBadgePlugin()])",Vy=[{name:"默认",description:"头部展示会员等级与进度",src:"createLevelBadgePlugin()",config:{}}],Va={name:Ay,description:By,since:Fy,tags:Uy,config:Wy,example:Hy,examples:Vy};function nt(e={}){return{name:"LevelBadge",version:"0.1.0",description:Va.description,priority:13,enabled:!0,hooks:{renderHeader:n=>{const t=n.data.level;if(!t)return null;const r=Math.round(Math.min(1,Math.max(0,t.progress))*100);return m.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[m.jsx("span",{style:{fontSize:12,fontWeight:700,color:"#ffffff",background:Ue,borderRadius:10,padding:"2px 8px",whiteSpace:"nowrap"},children:t.name}),m.jsx("div",{style:{flex:1,height:6,borderRadius:3,background:rf,overflow:"hidden"},children:m.jsx("div",{style:{width:`${r}%`,height:"100%",background:Ue}})}),m.jsxs("span",{style:{fontSize:11,color:Kn,whiteSpace:"nowrap"},children:[t.current,"/",t.next]})]})}}}}nt.meta=Va;const Gy={slug:"level-badge",title:"等级徽章 LevelBadge",group:"plugin",intro:"头部会员徽章：等级名 + 距下一级进度条，读 data.level 渲染。"},Qy=F(A,[nt()]);function Xy(){const[e,n]=v.useState(!1),t=G(e),r=X({sign:()=>n(!0)});return m.jsx(Qy,{data:t,callbacks:r,containerStyle:{maxWidth:480,margin:"0 auto"}})}const Ky=Object.freeze(Object.defineProperty({__proto__:null,default:Xy,meta:Gy},Symbol.toStringTag,{value:"Module"})),Yy="CountdownPlugin",Jy="次签倒计时：依据 nextResetAt 展示距下次可签到剩余时间，头部区渲染。",Zy="0.1.0",qy=["countdown","header","timer"],ev=[],nv="withSignInPlugins(SignInCore, [createCountdownPlugin()])",tv=[{name:"默认",description:"头部展示次签倒计时",src:"createCountdownPlugin()",config:{}}],Ga={name:Yy,description:Jy,since:Zy,tags:qy,config:ev,example:nv,examples:tv};function Ot(e={}){return{name:"Countdown",version:"0.1.0",description:Ga.description,priority:14,enabled:!0,hooks:{renderHeader:n=>{const{nextResetAt:t,todaySigned:r}=n.data;if(!t)return null;const i=t-Date.now();if(i<=0)return m.jsx("div",{style:{fontSize:12,color:oh},children:"现在可签到"});const l=Math.floor(i/36e5),o=Math.floor(i%36e5/6e4);return m.jsx("div",{style:{fontSize:12,color:Kn},children:r?`距下次可签到 ${l}小时${o}分`:"今日可签到"})}}}}Ot.meta=Ga;const rv={slug:"countdown",title:"次签倒计时 Countdown",group:"plugin",intro:"头部倒计时：读 data.nextResetAt 计算剩余小时/分钟，已过期则提示「现在可签到」。"},iv=F(A,[Ot()]);function lv(){const[e,n]=v.useState(!1),t=G(e),r=X({sign:()=>n(!0)});return m.jsx(iv,{data:t,callbacks:r,containerStyle:{maxWidth:480,margin:"0 auto"}})}const ov=Object.freeze(Object.defineProperty({__proto__:null,default:lv,meta:rv},Symbol.toStringTag,{value:"Module"})),av="CalendarGridPlugin",sv="月历网格：以 7 列网格形态呈现整轮签到进度，日历区渲染。",uv="0.1.0",cv=["calendar","grid","calendar-slot"],dv=[{name:"columns",type:"number",default:"7",description:"网格每周列数"}],fv="withSignInPlugins(SignInCore, [createCalendarGridPlugin()])",pv=[{name:"默认",description:"以 7 列网格展示整轮签到",src:"createCalendarGridPlugin()",config:{}}],Qa={name:av,description:sv,since:uv,tags:cv,config:dv,example:fv,examples:pv};function zt(e={}){const{columns:n=7}=e;return{name:"CalendarGrid",version:"0.1.0",description:Qa.description,priority:21,enabled:!0,hooks:{renderCalendar:t=>{const r=t.data.calendar??[];return m.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${n}, 1fr)`,gap:6},children:r.map(i=>{const l=wu[i.status]??wu.future;return m.jsxs("div",{title:i.date,style:{height:44,borderRadius:8,background:l.bg,color:l.fg,border:`1px solid ${l.border}`,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[m.jsxs("span",{style:{fontSize:10,color:l.fg},children:[i.day,"天"]}),m.jsx("span",{style:{fontSize:14,fontWeight:700,lineHeight:1.1},children:uh[i.status]||i.day})]},i.date)})})}}}}zt.meta=Qa;const gv={slug:"calendar-grid",title:"月历网格 CalendarGrid",group:"plugin",intro:"七列月历网格：已签/今日/漏签/补签/奖励日五态着色，适合大运营位全景展示。"},mv=F(A,[zt()]);function hv(){const[e,n]=v.useState(!1),t=G(e),r=X({sign:()=>n(!0)});return m.jsx(mv,{data:t,callbacks:r,containerStyle:{maxWidth:480,margin:"0 auto"}})}const yv=Object.freeze(Object.defineProperty({__proto__:null,default:hv,meta:gv},Symbol.toStringTag,{value:"Module"})),vv="RewardClaimPlugin",Sv="当日奖励领取：提供已达天数待领奖励的领取按钮，奖励区渲染。",xv="0.1.0",wv=["reward","claim","rewards-slot"],kv=[],Pv="withSignInPlugins(SignInCore, [createRewardClaimPlugin()])",_v=[{name:"默认",description:"展示待领奖励领取按钮",src:"createRewardClaimPlugin()",config:{}}],Xa={name:vv,description:Sv,since:xv,tags:wv,config:kv,example:Pv,examples:_v};function tt(e={}){return{name:"RewardClaim",version:"0.1.0",description:Xa.description,priority:31,enabled:!0,hooks:{renderRewards:n=>{const{rewards:t,streak:r}=n.data,i=(t??[]).find(l=>l.day<=r&&!l.claimed);return i?m.jsxs("button",{type:"button","data-testid":"si-claim-btn","data-day":String(i.day),onClick:()=>{var l,o;return(o=(l=n.callbacks).claim)==null?void 0:o.call(l,i.day)},style:{border:"none",background:Ue,color:"#ffffff",borderRadius:18,padding:"6px 16px",fontSize:13,fontWeight:700,cursor:"pointer"},children:["领取第",i.day,"天奖励 · ",i.label]}):m.jsx("div",{style:{fontSize:12,color:Kn},children:"今日奖励已全部领取"})}}}}tt.meta=Xa;const Cv={slug:"reward-claim",title:"奖励领取 RewardClaim",group:"plugin",intro:"奖励区领取：扫描 rewards，对 day<=streak 且未领的奖励给出「领取」按钮，走 callbacks.claim。"},Ev=F(A,[tt()]);function Rv(){const[e,n]=v.useState(!1),t=G(e),r=X({sign:()=>n(!0)});return m.jsx(Ev,{data:t,callbacks:r,containerStyle:{maxWidth:480,margin:"0 auto"}})}const Iv=Object.freeze(Object.defineProperty({__proto__:null,default:Rv,meta:Cv},Symbol.toStringTag,{value:"Module"})),Tv="MilestonePlugin",bv="里程碑进度：展示距下一未达奖励还差几天与进度条，奖励区渲染。",jv="0.1.0",$v=["milestone","rewards","progress"],Dv=[],Nv="withSignInPlugins(SignInCore, [createMilestonePlugin()])",Mv=[{name:"默认",description:"展示下一里程碑进度",src:"createMilestonePlugin()",config:{}}],Ka={name:Tv,description:bv,since:jv,tags:$v,config:Dv,example:Nv,examples:Mv};function Lt(e={}){return{name:"Milestone",version:"0.1.0",description:Ka.description,priority:32,enabled:!0,hooks:{renderRewards:n=>{const{rewards:t,streak:r}=n.data,i=(t??[]).filter(a=>a.day>r).sort((a,s)=>a.day-s.day)[0];if(!i)return m.jsx("div",{style:{fontSize:12,color:Kn},children:"已达成全部奖励 🎉"});const l=i.day-r,o=Math.round((i.day-l)/i.day*100);return m.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[m.jsxs("div",{style:{fontSize:12,color:on},children:["再连签 ",m.jsx("b",{style:{color:Ue},children:l})," 天解锁 ",i.label]}),m.jsx("div",{style:{height:6,borderRadius:3,background:rf,overflow:"hidden"},children:m.jsx("div",{style:{width:`${o}%`,height:"100%",background:lh}})})]})}}}}Lt.meta=Ka;const Ov={slug:"milestone",title:"里程碑 Milestone",group:"plugin",intro:"奖励区里程碑：找到下一未达奖励，展示「再连签 N 天」+ 进度条；全达成显示庆祝终态。"},zv=F(A,[Lt()]);function Lv(){const[e,n]=v.useState(!1),t=G(e),r=X({sign:()=>n(!0)});return m.jsx(zv,{data:t,callbacks:r,containerStyle:{maxWidth:480,margin:"0 auto"}})}const Av=Object.freeze(Object.defineProperty({__proto__:null,default:Lv,meta:Ov},Symbol.toStringTag,{value:"Module"})),Bv="SharePlugin",Fv="分享成就：触发分享回调的无状态按钮，操作区渲染。",Uv="0.1.0",Wv=["share","actions","social"],Hv=[{name:"text",type:"string",default:"分享成就",description:"按钮文案"}],Vv="withSignInPlugins(SignInCore, [createSharePlugin()])",Gv=[{name:"默认",description:"操作区展示分享按钮",src:"createSharePlugin()",config:{}}],Ya={name:Bv,description:Fv,since:Uv,tags:Wv,config:Hv,example:Vv,examples:Gv};function At(e={}){const{text:n="分享成就"}=e;return{name:"Share",version:"0.1.0",description:Ya.description,priority:43,enabled:!0,hooks:{renderActions:t=>m.jsx("button",{type:"button",onClick:()=>{var r,i;return(i=(r=t.callbacks).share)==null?void 0:i.call(r)},style:{border:"1px solid #d8d8d8",background:"#ffffff",color:on,borderRadius:18,padding:"6px 14px",fontSize:13,cursor:"pointer"},children:n})}}}At.meta=Ya;const Qv={slug:"share",title:"分享成就 Share",group:"plugin",intro:"操作区社交扩散位：点击触发 callbacks.share，海报/链接/卡片由消费方实现。"},Xv=F(A,[At()]);function Kv(){const[e,n]=v.useState(!1),t=G(e),r=X({sign:()=>n(!0)});return m.jsx(Xv,{data:t,callbacks:r,containerStyle:{maxWidth:480,margin:"0 auto"}})}const Yv=Object.freeze(Object.defineProperty({__proto__:null,default:Kv,meta:Qv},Symbol.toStringTag,{value:"Module"})),Jv="RemindPlugin",Zv="签到提醒开关：本地维护开关态并回调下发，操作区渲染。",qv="0.1.0",e0=["remind","actions","toggle"],n0=[{name:"defaultOn",type:"boolean",default:"false",description:"初始是否开启提醒"}],t0="withSignInPlugins(SignInCore, [createRemindPlugin()])",r0=[{name:"默认",description:"操作区展示提醒开关",src:"createRemindPlugin()",config:{}}],Ja={name:Jv,description:Zv,since:qv,tags:e0,config:n0,example:t0,examples:r0};function i0({ctx:e}){const[n,t]=v.useState(!1);return m.jsx("button",{type:"button",onClick:()=>{var i,l;const r=!n;t(r),(l=(i=e.callbacks).remind)==null||l.call(i,r)},style:{border:`1px solid ${n?Ue:"#d8d8d8"}`,background:n?ih:"#ffffff",color:n?Ue:on,borderRadius:18,padding:"6px 14px",fontSize:13,cursor:"pointer"},children:n?"已开启提醒":"签到提醒"})}function Bt(e={}){const{defaultOn:n=!1}=e;return{name:"Remind",version:"0.1.0",description:Ja.description,priority:44,enabled:!0,hooks:{renderActions:t=>m.jsx(i0,{ctx:t})}}}Bt.meta=Ja;const l0={slug:"remind",title:"签到提醒 Remind",group:"plugin",intro:"操作区提醒开关：插件自身管理开关态，切换即经 callbacks.remind 下发给消费方持久化。"},o0=F(A,[Bt()]);function a0(){const[e,n]=v.useState(!1),t=G(e),r=X({sign:()=>n(!0)});return m.jsx(o0,{data:t,callbacks:r,containerStyle:{maxWidth:480,margin:"0 auto"}})}const s0=Object.freeze(Object.defineProperty({__proto__:null,default:a0,meta:l0},Symbol.toStringTag,{value:"Module"})),u0="InvitePlugin",c0="邀请好友助力：触发邀请回调的按钮，操作区渲染，常用于拉新运营位。",d0="0.1.0",f0=["invite","actions","growth"],p0=[{name:"text",type:"string",default:"邀请好友助力",description:"按钮文案"}],g0="withSignInPlugins(SignInCore, [createInvitePlugin()])",m0=[{name:"默认",description:"操作区展示邀请按钮",src:"createInvitePlugin()",config:{}}],Za={name:u0,description:c0,since:d0,tags:f0,config:p0,example:g0,examples:m0};function Ft(e={}){const{text:n="邀请好友助力"}=e;return{name:"Invite",version:"0.1.0",description:Za.description,priority:45,enabled:!0,hooks:{renderActions:t=>m.jsx("button",{type:"button",onClick:()=>{var r,i;return(i=(r=t.callbacks).invite)==null?void 0:i.call(r)},style:{border:`1px solid ${Ue}`,background:"#ffffff",color:Ue,borderRadius:18,padding:"6px 14px",fontSize:13,cursor:"pointer"},children:n})}}}Ft.meta=Za;const h0={slug:"invite",title:"邀请助力 Invite",group:"plugin",intro:"操作区邀请位：点击触发 callbacks.invite，常用于拉新/游戏运营位解锁额外奖励。"},y0=F(A,[Ft()]);function v0(){const[e,n]=v.useState(!1),t=G(e),r=X({sign:()=>n(!0)});return m.jsx(y0,{data:t,callbacks:r,containerStyle:{maxWidth:480,margin:"0 auto"}})}const S0=Object.freeze(Object.defineProperty({__proto__:null,default:v0,meta:h0},Symbol.toStringTag,{value:"Module"})),x0="RuleExpandPlugin",w0="规则折叠展开：将活动规则折叠为可展开列表，底部区渲染；无规则时静默跳过。",k0="0.1.0",P0=["rule","footer","collapse"],_0=[{name:"defaultOpen",type:"boolean",default:"false",description:"初始是否展开"}],C0="withSignInPlugins(SignInCore, [createRuleExpandPlugin()])",E0=[{name:"默认",description:"底部展示可折叠的活动规则",src:"createRuleExpandPlugin()",config:{}}],qa={name:x0,description:w0,since:k0,tags:P0,config:_0,example:C0,examples:E0};function R0({rules:e}){const[n,t]=v.useState(!1);return!e||!e.length?null:m.jsxs("div",{children:[m.jsx("button",{type:"button",onClick:()=>t(r=>!r),style:{border:"none",background:"transparent",color:on,fontSize:13,cursor:"pointer",padding:0},children:n?"收起活动规则 ▲":"活动规则 ▼"}),n&&m.jsx("ul",{style:{margin:"6px 0 0",paddingLeft:18,fontSize:12,color:Kn},children:e.map((r,i)=>m.jsx("li",{children:r},i))})]})}function Ut(e={}){const{defaultOpen:n=!1}=e;return{name:"RuleExpand",version:"0.1.0",description:qa.description,priority:50,enabled:!0,hooks:{renderFooter:t=>m.jsx(R0,{rules:t.data.rules})}}}Ut.meta=qa;const I0={slug:"rule-expand",title:"规则折叠 RuleExpand",group:"plugin",intro:"底部区规则折叠：data.rules 收进可展开列表，点击展开/收起，避免长文案常驻占用空间。"},T0=F(A,[Ut()]);function b0(){const[e,n]=v.useState(!1),t=G(e),r=X({sign:()=>n(!0)});return m.jsx(T0,{data:t,callbacks:r,containerStyle:{maxWidth:480,margin:"0 auto"}})}const j0=Object.freeze(Object.defineProperty({__proto__:null,default:b0,meta:I0},Symbol.toStringTag,{value:"Module"})),$0="RewardHistoryPlugin",D0="领取记录：展示历史领取记录列表，底部区渲染；无记录时显示终态文案。",N0="0.1.0",M0=["history","footer","record"],O0=[{name:"limit",type:"number",default:"5",description:"最多展示几条记录"}],z0="withSignInPlugins(SignInCore, [createRewardHistoryPlugin()])",L0=[{name:"默认",description:"底部展示领取记录",src:"createRewardHistoryPlugin()",config:{}}],es={name:$0,description:D0,since:N0,tags:M0,config:O0,example:z0,examples:L0};function Lr(e={}){const{limit:n=5}=e;return{name:"RewardHistory",version:"0.1.0",description:es.description,priority:51,enabled:!0,hooks:{renderFooter:t=>{const r=t.data.history??[];return r.length?m.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[m.jsx("div",{style:{fontSize:12,color:on},children:"领取记录"}),r.slice(0,n).map(i=>m.jsxs("div",{style:{display:"flex",fontSize:12,color:Kn},children:[m.jsxs("span",{children:["第",i.day,"天 · ",i.label]}),m.jsx("span",{style:{marginLeft:"auto"},children:new Date(i.at).toLocaleDateString()})]},i.id))]}):m.jsx("div",{style:{fontSize:12,color:Kn},children:"暂无领取记录"})}}}}Lr.meta=es;const A0={slug:"reward-history",title:"领取记录 RewardHistory",group:"plugin",intro:"底部区领取记录：data.history 按时间倒序展示，无记录显示终态文案。"},B0=F(A,[Lr()]);function F0(){const[e,n]=v.useState(!1),t=G(e),r=X({sign:()=>n(!0)});return m.jsx(B0,{data:t,callbacks:r,containerStyle:{maxWidth:480,margin:"0 auto"}})}const U0=Object.freeze(Object.defineProperty({__proto__:null,default:F0,meta:A0},Symbol.toStringTag,{value:"Module"})),W0=`import React, { useState } from "react";\r
import { SignInCore, withSignInPlugins } from "vane-sign-in";\r
import { createStreakStatePlugin } from "vane-sign-in/custom-plugins/StreakStatePlugin";\r
import { createCalendarStripPlugin } from "vane-sign-in/custom-plugins/CalendarStripPlugin";\r
import { createRewardPreviewPlugin } from "vane-sign-in/custom-plugins/RewardPreviewPlugin";\r
import { createMakeupSlotPlugin } from "vane-sign-in/custom-plugins/MakeupSlotPlugin";\r
import { createTodayCheckInPlugin } from "vane-sign-in/custom-plugins/TodayCheckInPlugin";\r
import type { SignInData, SignInCallbacks } from "vane-sign-in";\r
import type { DemoMeta } from "./types";\r
\r
/**\r
 * 00 · 最小可用\r
 *\r
 * 内核起步：用插件装配出「连签状态 + 日历条 + 奖励预告 + 补签 + 今日签到」。\r
 * import 是「消费者视角」包名（demo/vite.config.ts 的 alias 指回 src），\r
 * 页面里展示的源码可以原样复制到真实项目。\r
 */\r
export const meta: DemoMeta = {\r
  slug: "basic",\r
  title: "最小可用",\r
  group: "basic",\r
  intro: "内核 + 五个核心插件跑通装配链路；加插件就是往 withPlugins 数组里加一项。",\r
};\r
\r
function buildData(signedToday: boolean): SignInData {\r
  const calendar = Array.from({ length: 14 }, (_, i) => {\r
    const day = i + 1;\r
    const status: SignInData["calendar"][number]["status"] = day < 8\r
      ? "signed"\r
      : day === 8 && !signedToday\r
      ? "today"\r
      : day === 9\r
      ? "missed"\r
      : "future";\r
    return {\r
      date: \`2026-10-\${String(day).padStart(2, "0")}\`,\r
      day,\r
      status,\r
      canMakeup: day === 9,\r
    };\r
  });\r
  return {\r
    todaySigned: signedToday,\r
    streak: signedToday ? 8 : 7,\r
    maxStreak: 12,\r
    totalDays: 132,\r
    points: 3680,\r
    calendar,\r
    rewards: [\r
      { day: 1, kind: "points", value: 10, label: "10 积分", claimed: true },\r
      { day: 3, kind: "coupon", value: 5, label: "5 元券", claimed: true },\r
      { day: 7, kind: "gift", label: "7 天礼包", claimed: true },\r
      { day: 8, kind: "points", value: 50, label: "50 积分" },\r
      { day: 10, kind: "badge", label: "闪耀徽章" },\r
    ],\r
    makeup: { available: 3, used: 1, max: 3 },\r
  };\r
}\r
\r
const Enhanced = withSignInPlugins(SignInCore, [\r
  createStreakStatePlugin(),\r
  createCalendarStripPlugin(),\r
  createRewardPreviewPlugin(),\r
  createMakeupSlotPlugin(),\r
  createTodayCheckInPlugin(),\r
]);\r
\r
export default function Stage() {\r
  const [signed, setSigned] = useState(false);\r
  const data = buildData(signed);\r
  const callbacks: SignInCallbacks = {\r
    sign: () => setSigned(true),\r
    makeup: () => alert("触发补签"),\r
    claim: (d) => alert(\`领取第 \${d} 天奖励\`),\r
  };\r
  return (\r
    <Enhanced\r
      data={data}\r
      callbacks={callbacks}\r
      containerStyle={{ maxWidth: 480, margin: "0 auto" }}\r
    />\r
  );\r
}\r
`,H0=`import React, { useState } from "react";\r
import { SignInCore, withSignInPlugins } from "vane-sign-in";\r
import { createStreakStatePlugin } from "vane-sign-in/custom-plugins/StreakStatePlugin";\r
import type { DemoMeta } from "./types";\r
import { buildSignInData, buildCallbacks } from "./lib/sampleData";\r
\r
/**\r
 * 01 · 连签状态 StreakState\r
 * 单装这一个插件：只渲染头部连签信息，演示「领域槽」如何把连签数封装成可替换的视觉块。\r
 */\r
export const meta: DemoMeta = {\r
  slug: "streak-state",\r
  title: "连签状态 StreakState",\r
  group: "plugin",\r
  intro: "头部连签天数 + 最高连签；断签清零、累计保留的领域逻辑由内核数据驱动。",\r
};\r
\r
const Enhanced = withSignInPlugins(SignInCore, [createStreakStatePlugin()]);\r
\r
export default function Stage() {\r
  const [signed, setSigned] = useState(false);\r
  const data = buildSignInData(signed);\r
  const callbacks = buildCallbacks({ sign: () => setSigned(true) });\r
  return (\r
    <Enhanced\r
      data={data}\r
      callbacks={callbacks}\r
      containerStyle={{ maxWidth: 480, margin: "0 auto" }}\r
    />\r
  );\r
}\r
`,V0=`import React, { useState } from "react";\r
import { SignInCore, withSignInPlugins } from "vane-sign-in";\r
import { createCalendarStripPlugin } from "vane-sign-in/custom-plugins/CalendarStripPlugin";\r
import type { DemoMeta } from "./types";\r
import { buildSignInData, buildCallbacks } from "./lib/sampleData";\r
\r
/**\r
 * 02 · 日历条 CalendarStrip\r
 * 单装这一个插件：只渲染日历区，横向日期条 + 今日/漏签/补签标记。\r
 */\r
export const meta: DemoMeta = {\r
  slug: "calendar-strip",\r
  title: "日历条 CalendarStrip",\r
  group: "plugin",\r
  intro: "横向日期条；已签/今日/漏签/补签/未来五态由 DayStatus 着色，各平台运营位通用。",\r
};\r
\r
const Enhanced = withSignInPlugins(SignInCore, [createCalendarStripPlugin()]);\r
\r
export default function Stage() {\r
  const [signed, setSigned] = useState(false);\r
  const data = buildSignInData(signed);\r
  const callbacks = buildCallbacks({ sign: () => setSigned(true) });\r
  return (\r
    <Enhanced\r
      data={data}\r
      callbacks={callbacks}\r
      containerStyle={{ maxWidth: 480, margin: "0 auto" }}\r
    />\r
  );\r
}\r
`,G0=`import React, { useState } from "react";\r
import { SignInCore, withSignInPlugins } from "vane-sign-in";\r
import { createRewardPreviewPlugin } from "vane-sign-in/custom-plugins/RewardPreviewPlugin";\r
import type { DemoMeta } from "./types";\r
import { buildSignInData, buildCallbacks } from "./lib/sampleData";\r
\r
/**\r
 * 03 · 奖励预告 RewardPreview\r
 * 单装这一个插件：只渲染奖励区，预告未来逐日奖励，已领标记置灰。\r
 */\r
export const meta: DemoMeta = {\r
  slug: "reward-preview",\r
  title: "奖励预告 RewardPreview",\r
  group: "plugin",\r
  intro: "逐日奖励预览：已领取置灰打勾，未到天数半透明，临近大额奖励高亮。",\r
};\r
\r
const Enhanced = withSignInPlugins(SignInCore, [createRewardPreviewPlugin()]);\r
\r
export default function Stage() {\r
  const [signed, setSigned] = useState(false);\r
  const data = buildSignInData(signed);\r
  const callbacks = buildCallbacks({ sign: () => setSigned(true) });\r
  return (\r
    <Enhanced\r
      data={data}\r
      callbacks={callbacks}\r
      containerStyle={{ maxWidth: 480, margin: "0 auto" }}\r
    />\r
  );\r
}\r
`,Q0=`import React, { useState } from "react";\r
import { SignInCore, withSignInPlugins } from "vane-sign-in";\r
import { createMakeupSlotPlugin } from "vane-sign-in/custom-plugins/MakeupSlotPlugin";\r
import type { DemoMeta } from "./types";\r
import { buildSignInData, buildCallbacks } from "./lib/sampleData";\r
\r
/**\r
 * 04 · 补签位 MakeupSlot\r
 * 单装这一个插件：只渲染操作区补签入口，展示剩余补签卡与一键补签。\r
 */\r
export const meta: DemoMeta = {\r
  slug: "makeup-slot",\r
  title: "补签位 MakeupSlot",\r
  group: "plugin",\r
  intro: "断签缺口处的高亮补签入口：剩余补签卡数 + 一键补回当日奖励，走 callbacks.makeup。",\r
};\r
\r
const Enhanced = withSignInPlugins(SignInCore, [createMakeupSlotPlugin()]);\r
\r
export default function Stage() {\r
  const [signed, setSigned] = useState(false);\r
  const data = buildSignInData(signed);\r
  const callbacks = buildCallbacks({ sign: () => setSigned(true) });\r
  return (\r
    <Enhanced\r
      data={data}\r
      callbacks={callbacks}\r
      containerStyle={{ maxWidth: 480, margin: "0 auto" }}\r
    />\r
  );\r
}\r
`,X0=`import React, { useState } from "react";\r
import { SignInCore, withSignInPlugins } from "vane-sign-in";\r
import { createTodayCheckInPlugin } from "vane-sign-in/custom-plugins/TodayCheckInPlugin";\r
import type { DemoMeta } from "./types";\r
import { buildSignInData, buildCallbacks } from "./lib/sampleData";\r
\r
/**\r
 * 05 · 今日签到 TodayCheckIn\r
 * 单装这一个插件：只渲染操作区主 CTA，点击置今日已签。\r
 * 用开关演示「未签 → 已签」两态切换（真实项目里由 callbacks.sign 落库后回灌数据）。\r
 */\r
export const meta: DemoMeta = {\r
  slug: "today-check-in",\r
  title: "今日签到 TodayCheckIn",\r
  group: "plugin",\r
  intro: "操作区主按钮：未签时高亮的「立即签到」，已签后变为连签天数 + 明日预告。",\r
};\r
\r
const Enhanced = withSignInPlugins(SignInCore, [createTodayCheckInPlugin()]);\r
\r
export default function Stage() {\r
  const [signed, setSigned] = useState(false);\r
  const data = buildSignInData(signed);\r
  const callbacks = buildCallbacks({ sign: () => setSigned(true) });\r
  return (\r
    <Enhanced\r
      data={data}\r
      callbacks={callbacks}\r
      containerStyle={{ maxWidth: 480, margin: "0 auto" }}\r
    />\r
  );\r
}\r
`,K0=`import React, { useState } from "react";\r
import { SignInCore, withSignInPlugins } from "vane-sign-in";\r
import { createPointsBalancePlugin } from "vane-sign-in/custom-plugins/PointsBalancePlugin";\r
import type { DemoMeta } from "./types";\r
import { buildSignInData, buildCallbacks } from "./lib/sampleData";\r
\r
/**\r
 * 06 · 积分余额 PointsBalance\r
 * 单装这一个插件：头部区展示当前积分，点按可跳积分明细（演示 callbacks 之外的纯展示）。\r
 */\r
export const meta: DemoMeta = {\r
  slug: "points-balance",\r
  title: "积分余额 PointsBalance",\r
  group: "plugin",\r
  intro: "头部积分余额：大字号展示当前积分 + 累计天数，承接积分商城的入口视觉。",\r
};\r
\r
const Enhanced = withSignInPlugins(SignInCore, [createPointsBalancePlugin()]);\r
\r
export default function Stage() {\r
  const [signed, setSigned] = useState(false);\r
  const data = buildSignInData(signed);\r
  const callbacks = buildCallbacks({ sign: () => setSigned(true) });\r
  return (\r
    <Enhanced\r
      data={data}\r
      callbacks={callbacks}\r
      containerStyle={{ maxWidth: 480, margin: "0 auto" }}\r
    />\r
  );\r
}\r
`,Y0=`import React, { useState } from "react";\r
import { SignInCore, withSignInPlugins } from "vane-sign-in";\r
import { createStatRowPlugin } from "vane-sign-in/custom-plugins/StatRowPlugin";\r
import type { DemoMeta } from "./types";\r
import { buildSignInData, buildCallbacks } from "./lib/sampleData";\r
\r
/**\r
 * 07 · 统计行 StatRow\r
 * 单装这一个插件：头部区横排关键指标（连签/累计/最高）。\r
 */\r
export const meta: DemoMeta = {\r
  slug: "stat-row",\r
  title: "统计行 StatRow",\r
  group: "plugin",\r
  intro: "头部三项指标横排：当前连签、累计天数、历史最高连签，一屏尽览进度。",\r
};\r
\r
const Enhanced = withSignInPlugins(SignInCore, [createStatRowPlugin()]);\r
\r
export default function Stage() {\r
  const [signed, setSigned] = useState(false);\r
  const data = buildSignInData(signed);\r
  const callbacks = buildCallbacks({ sign: () => setSigned(true) });\r
  return (\r
    <Enhanced\r
      data={data}\r
      callbacks={callbacks}\r
      containerStyle={{ maxWidth: 480, margin: "0 auto" }}\r
    />\r
  );\r
}\r
`,J0=`import React, { useState } from "react";\r
import { SignInCore, withSignInPlugins } from "vane-sign-in";\r
import { createLevelBadgePlugin } from "vane-sign-in/custom-plugins/LevelBadgePlugin";\r
import type { DemoMeta } from "./types";\r
import { buildSignInData, buildCallbacks } from "./lib/sampleData";\r
\r
/**\r
 * 08 · 等级徽章 LevelBadge\r
 * 单装这一个插件：头部区会员等级 + 升级进度条（读 data.level）。\r
 */\r
export const meta: DemoMeta = {\r
  slug: "level-badge",\r
  title: "等级徽章 LevelBadge",\r
  group: "plugin",\r
  intro: "头部会员徽章：等级名 + 距下一级进度条，读 data.level 渲染。",\r
};\r
\r
const Enhanced = withSignInPlugins(SignInCore, [createLevelBadgePlugin()]);\r
\r
export default function Stage() {\r
  const [signed, setSigned] = useState(false);\r
  const data = buildSignInData(signed);\r
  const callbacks = buildCallbacks({ sign: () => setSigned(true) });\r
  return (\r
    <Enhanced\r
      data={data}\r
      callbacks={callbacks}\r
      containerStyle={{ maxWidth: 480, margin: "0 auto" }}\r
    />\r
  );\r
}\r
`,Z0=`import React, { useState } from "react";\r
import { SignInCore, withSignInPlugins } from "vane-sign-in";\r
import { createCountdownPlugin } from "vane-sign-in/custom-plugins/CountdownPlugin";\r
import type { DemoMeta } from "./types";\r
import { buildSignInData, buildCallbacks } from "./lib/sampleData";\r
\r
/**\r
 * 09 · 次签倒计时 Countdown\r
 * 单装这一个插件：头部区展示距下次可签到的剩余时间（读 data.nextResetAt）。\r
 */\r
export const meta: DemoMeta = {\r
  slug: "countdown",\r
  title: "次签倒计时 Countdown",\r
  group: "plugin",\r
  intro: "头部倒计时：读 data.nextResetAt 计算剩余小时/分钟，已过期则提示「现在可签到」。",\r
};\r
\r
const Enhanced = withSignInPlugins(SignInCore, [createCountdownPlugin()]);\r
\r
export default function Stage() {\r
  const [signed, setSigned] = useState(false);\r
  const data = buildSignInData(signed);\r
  const callbacks = buildCallbacks({ sign: () => setSigned(true) });\r
  return (\r
    <Enhanced\r
      data={data}\r
      callbacks={callbacks}\r
      containerStyle={{ maxWidth: 480, margin: "0 auto" }}\r
    />\r
  );\r
}\r
`,q0=`import React, { useState } from "react";\r
import { SignInCore, withSignInPlugins } from "vane-sign-in";\r
import { createCalendarGridPlugin } from "vane-sign-in/custom-plugins/CalendarGridPlugin";\r
import type { DemoMeta } from "./types";\r
import { buildSignInData, buildCallbacks } from "./lib/sampleData";\r
\r
/**\r
 * 10 · 月历网格 CalendarGrid\r
 * 单装这一个插件：日历区 7 列网格，完整呈现当月签到全景。\r
 */\r
export const meta: DemoMeta = {\r
  slug: "calendar-grid",\r
  title: "月历网格 CalendarGrid",\r
  group: "plugin",\r
  intro: "七列月历网格：已签/今日/漏签/补签/奖励日五态着色，适合大运营位全景展示。",\r
};\r
\r
const Enhanced = withSignInPlugins(SignInCore, [createCalendarGridPlugin()]);\r
\r
export default function Stage() {\r
  const [signed, setSigned] = useState(false);\r
  const data = buildSignInData(signed);\r
  const callbacks = buildCallbacks({ sign: () => setSigned(true) });\r
  return (\r
    <Enhanced\r
      data={data}\r
      callbacks={callbacks}\r
      containerStyle={{ maxWidth: 480, margin: "0 auto" }}\r
    />\r
  );\r
}\r
`,eS=`import React, { useState } from "react";\r
import { SignInCore, withSignInPlugins } from "vane-sign-in";\r
import { createRewardClaimPlugin } from "vane-sign-in/custom-plugins/RewardClaimPlugin";\r
import type { DemoMeta } from "./types";\r
import { buildSignInData, buildCallbacks } from "./lib/sampleData";\r
\r
/**\r
 * 11 · 奖励领取 RewardClaim\r
 * 单装这一个插件：奖励区对「已达天数且未领」的奖励给出领取按钮（走 callbacks.claim）。\r
 */\r
export const meta: DemoMeta = {\r
  slug: "reward-claim",\r
  title: "奖励领取 RewardClaim",\r
  group: "plugin",\r
  intro: "奖励区领取：扫描 rewards，对 day<=streak 且未领的奖励给出「领取」按钮，走 callbacks.claim。",\r
};\r
\r
const Enhanced = withSignInPlugins(SignInCore, [createRewardClaimPlugin()]);\r
\r
export default function Stage() {\r
  const [signed, setSigned] = useState(false);\r
  const data = buildSignInData(signed);\r
  const callbacks = buildCallbacks({ sign: () => setSigned(true) });\r
  return (\r
    <Enhanced\r
      data={data}\r
      callbacks={callbacks}\r
      containerStyle={{ maxWidth: 480, margin: "0 auto" }}\r
    />\r
  );\r
}\r
`,nS=`import React, { useState } from "react";\r
import { SignInCore, withSignInPlugins } from "vane-sign-in";\r
import { createMilestonePlugin } from "vane-sign-in/custom-plugins/MilestonePlugin";\r
import type { DemoMeta } from "./types";\r
import { buildSignInData, buildCallbacks } from "./lib/sampleData";\r
\r
/**\r
 * 12 · 里程碑 Milestone\r
 * 单装这一个插件：奖励区展示距下一未达奖励的进度，与 RewardPreview 互补。\r
 */\r
export const meta: DemoMeta = {\r
  slug: "milestone",\r
  title: "里程碑 Milestone",\r
  group: "plugin",\r
  intro: "奖励区里程碑：找到下一未达奖励，展示「再连签 N 天」+ 进度条；全达成显示庆祝终态。",\r
};\r
\r
const Enhanced = withSignInPlugins(SignInCore, [createMilestonePlugin()]);\r
\r
export default function Stage() {\r
  const [signed, setSigned] = useState(false);\r
  const data = buildSignInData(signed);\r
  const callbacks = buildCallbacks({ sign: () => setSigned(true) });\r
  return (\r
    <Enhanced\r
      data={data}\r
      callbacks={callbacks}\r
      containerStyle={{ maxWidth: 480, margin: "0 auto" }}\r
    />\r
  );\r
}\r
`,tS=`import React, { useState } from "react";\r
import { SignInCore, withSignInPlugins } from "vane-sign-in";\r
import { createSharePlugin } from "vane-sign-in/custom-plugins/SharePlugin";\r
import type { DemoMeta } from "./types";\r
import { buildSignInData, buildCallbacks } from "./lib/sampleData";\r
\r
/**\r
 * 13 · 分享成就 Share\r
 * 单装这一个插件：操作区分享按钮，触发 callbacks.share（消费方决定分享渠道）。\r
 */\r
export const meta: DemoMeta = {\r
  slug: "share",\r
  title: "分享成就 Share",\r
  group: "plugin",\r
  intro: "操作区社交扩散位：点击触发 callbacks.share，海报/链接/卡片由消费方实现。",\r
};\r
\r
const Enhanced = withSignInPlugins(SignInCore, [createSharePlugin()]);\r
\r
export default function Stage() {\r
  const [signed, setSigned] = useState(false);\r
  const data = buildSignInData(signed);\r
  const callbacks = buildCallbacks({ sign: () => setSigned(true) });\r
  return (\r
    <Enhanced\r
      data={data}\r
      callbacks={callbacks}\r
      containerStyle={{ maxWidth: 480, margin: "0 auto" }}\r
    />\r
  );\r
}\r
`,rS=`import React, { useState } from "react";\r
import { SignInCore, withSignInPlugins } from "vane-sign-in";\r
import { createRemindPlugin } from "vane-sign-in/custom-plugins/RemindPlugin";\r
import type { DemoMeta } from "./types";\r
import { buildSignInData, buildCallbacks } from "./lib/sampleData";\r
\r
/**\r
 * 14 · 签到提醒 Remind\r
 * 单装这一个插件：操作区开关，本地维护开/关态并下发 callbacks.remind。\r
 */\r
export const meta: DemoMeta = {\r
  slug: "remind",\r
  title: "签到提醒 Remind",\r
  group: "plugin",\r
  intro: "操作区提醒开关：插件自身管理开关态，切换即经 callbacks.remind 下发给消费方持久化。",\r
};\r
\r
const Enhanced = withSignInPlugins(SignInCore, [createRemindPlugin()]);\r
\r
export default function Stage() {\r
  const [signed, setSigned] = useState(false);\r
  const data = buildSignInData(signed);\r
  const callbacks = buildCallbacks({ sign: () => setSigned(true) });\r
  return (\r
    <Enhanced\r
      data={data}\r
      callbacks={callbacks}\r
      containerStyle={{ maxWidth: 480, margin: "0 auto" }}\r
    />\r
  );\r
}\r
`,iS=`import React, { useState } from "react";\r
import { SignInCore, withSignInPlugins } from "vane-sign-in";\r
import { createInvitePlugin } from "vane-sign-in/custom-plugins/InvitePlugin";\r
import type { DemoMeta } from "./types";\r
import { buildSignInData, buildCallbacks } from "./lib/sampleData";\r
\r
/**\r
 * 15 · 邀请助力 Invite\r
 * 单装这一个插件：操作区邀请按钮，触发 callbacks.invite（拉新/游戏运营位常用）。\r
 */\r
export const meta: DemoMeta = {\r
  slug: "invite",\r
  title: "邀请助力 Invite",\r
  group: "plugin",\r
  intro: "操作区邀请位：点击触发 callbacks.invite，常用于拉新/游戏运营位解锁额外奖励。",\r
};\r
\r
const Enhanced = withSignInPlugins(SignInCore, [createInvitePlugin()]);\r
\r
export default function Stage() {\r
  const [signed, setSigned] = useState(false);\r
  const data = buildSignInData(signed);\r
  const callbacks = buildCallbacks({ sign: () => setSigned(true) });\r
  return (\r
    <Enhanced\r
      data={data}\r
      callbacks={callbacks}\r
      containerStyle={{ maxWidth: 480, margin: "0 auto" }}\r
    />\r
  );\r
}\r
`,lS=`import React, { useState } from "react";\r
import { SignInCore, withSignInPlugins } from "vane-sign-in";\r
import { createRuleExpandPlugin } from "vane-sign-in/custom-plugins/RuleExpandPlugin";\r
import type { DemoMeta } from "./types";\r
import { buildSignInData, buildCallbacks } from "./lib/sampleData";\r
\r
/**\r
 * 16 · 规则折叠 RuleExpand\r
 * 单装这一个插件：底部区把 data.rules 折叠为可展开列表，长规则不常驻。\r
 */\r
export const meta: DemoMeta = {\r
  slug: "rule-expand",\r
  title: "规则折叠 RuleExpand",\r
  group: "plugin",\r
  intro: "底部区规则折叠：data.rules 收进可展开列表，点击展开/收起，避免长文案常驻占用空间。",\r
};\r
\r
const Enhanced = withSignInPlugins(SignInCore, [createRuleExpandPlugin()]);\r
\r
export default function Stage() {\r
  const [signed, setSigned] = useState(false);\r
  const data = buildSignInData(signed);\r
  const callbacks = buildCallbacks({ sign: () => setSigned(true) });\r
  return (\r
    <Enhanced\r
      data={data}\r
      callbacks={callbacks}\r
      containerStyle={{ maxWidth: 480, margin: "0 auto" }}\r
    />\r
  );\r
}\r
`,oS=`import React, { useState } from "react";\r
import { SignInCore, withSignInPlugins } from "vane-sign-in";\r
import { createRewardHistoryPlugin } from "vane-sign-in/custom-plugins/RewardHistoryPlugin";\r
import type { DemoMeta } from "./types";\r
import { buildSignInData, buildCallbacks } from "./lib/sampleData";\r
\r
/**\r
 * 17 · 领取记录 RewardHistory\r
 * 单装这一个插件：底部区按时间倒序展示 data.history（读 data.history）。\r
 */\r
export const meta: DemoMeta = {\r
  slug: "reward-history",\r
  title: "领取记录 RewardHistory",\r
  group: "plugin",\r
  intro: "底部区领取记录：data.history 按时间倒序展示，无记录显示终态文案。",\r
};\r
\r
const Enhanced = withSignInPlugins(SignInCore, [createRewardHistoryPlugin()]);\r
\r
export default function Stage() {\r
  const [signed, setSigned] = useState(false);\r
  const data = buildSignInData(signed);\r
  const callbacks = buildCallbacks({ sign: () => setSigned(true) });\r
  return (\r
    <Enhanced\r
      data={data}\r
      callbacks={callbacks}\r
      containerStyle={{ maxWidth: 480, margin: "0 auto" }}\r
    />\r
  );\r
}\r
`,aS=Object.assign({"./00-basic.tsx":Yh,"./01-streak-state.tsx":ey,"./02-calendar-strip.tsx":iy,"./03-reward-preview.tsx":sy,"./04-makeup-slot.tsx":fy,"./05-today-check-in.tsx":hy,"./06-points-balance.tsx":Ry,"./07-stat-row.tsx":Ly,"./08-level-badge.tsx":Ky,"./09-countdown.tsx":ov,"./10-calendar-grid.tsx":yv,"./11-reward-claim.tsx":Iv,"./12-milestone.tsx":Av,"./13-share.tsx":Yv,"./14-remind.tsx":s0,"./15-invite.tsx":S0,"./16-rule-expand.tsx":j0,"./17-reward-history.tsx":U0}),sS=Object.assign({"./00-basic.tsx":W0,"./01-streak-state.tsx":H0,"./02-calendar-strip.tsx":V0,"./03-reward-preview.tsx":G0,"./04-makeup-slot.tsx":Q0,"./05-today-check-in.tsx":X0,"./06-points-balance.tsx":K0,"./07-stat-row.tsx":Y0,"./08-level-badge.tsx":J0,"./09-countdown.tsx":Z0,"./10-calendar-grid.tsx":q0,"./11-reward-claim.tsx":eS,"./12-milestone.tsx":nS,"./13-share.tsx":tS,"./14-remind.tsx":rS,"./15-invite.tsx":iS,"./16-rule-expand.tsx":lS,"./17-reward-history.tsx":oS}),uS=e=>e.replace(/^\.\//,""),Mo=Object.entries(aS).map(([e,n])=>{const t=uS(e);return{meta:n.meta,Stage:n.default,file:t,source:sS[e]??""}}).sort((e,n)=>e.file.localeCompare(n.file)),cS=Array.from(new Set(Mo.map(e=>e.meta.group))),lf={basic:{label:"基础用法"},advanced:{label:"进阶用法"},plugin:{label:"插件示例"}},dS="import|from|export|default|function|return|const|let|var|new|if|else|for|of|in|while|switch|case|break|continue|type|interface|extends|implements|as|satisfies|await|async|throw|try|catch|finally|class|typeof|instanceof|delete|void|yield",fS="true|false|null|undefined|this|super",pS="number|string|boolean|object|any|unknown|never|React|HTMLElement|void",Pu=new RegExp([String.raw`(\/\/[^\n]*|\/\*[\s\S]*?\*\/)`,String.raw`(\`(?:\\[\s\S]|[^\\\`])*\`|"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*')`,String.raw`\b(${dS})\b`,String.raw`\b(${fS})\b`,String.raw`\b(${pS})\b`,String.raw`(<\/?[A-Za-z][\w.$]*)`,String.raw`\b(\d+(?:\.\d+)?)\b`].join("|"),"g"),_u=["tok-comment","tok-string","tok-kw","tok-lit","tok-type","tok-tag","tok-num"];function gS(e){const n=[];let t=0;Pu.lastIndex=0;let r;for(;r=Pu.exec(e);){r.index>t&&n.push({text:e.slice(t,r.index),cls:null});const i=_u.findIndex((l,o)=>r[o+1]!==void 0);n.push({text:r[0],cls:i>=0?_u[i]:null}),t=r.index+r[0].length}return t<e.length&&n.push({text:e.slice(t),cls:null}),n}function Cu(e){try{const n=document.createElement("textarea");n.value=e,n.setAttribute("readonly",""),n.style.position="fixed",n.style.opacity="0",document.body.appendChild(n),n.select();const t=document.execCommand("copy");return document.body.removeChild(n),t}catch{return!1}}function mS({code:e,title:n="tsx",collapseAfter:t=24,maxHeight:r}){const[i,l]=v.useState("idle"),[o,a]=v.useState(!1),s=v.useMemo(()=>e.replace(/\s+$/,"").split(`
`),[e]),u=t>0&&s.length>t,f=u&&!o?s.slice(0,t).join(`
`):e,c=v.useMemo(()=>gS(f),[f]),p=v.useCallback(async()=>{var S;let y=!1;if((S=navigator.clipboard)!=null&&S.writeText)try{await navigator.clipboard.writeText(e),y=!0}catch{y=Cu(e)}else y=Cu(e);l(y?"ok":"fail"),window.setTimeout(()=>l("idle"),1600)},[e]);return m.jsxs("div",{className:"code",children:[m.jsxs("div",{className:"code-head",children:[m.jsx("span",{children:n}),m.jsxs("span",{style:{display:"flex",gap:6,alignItems:"center"},children:[m.jsxs("span",{children:[s.length," 行"]}),m.jsx("button",{type:"button",className:`code-copy${i==="ok"?" is-ok":i==="fail"?" is-fail":""}`,onClick:p,children:i==="ok"?"已复制":i==="fail"?"复制失败":"复制"})]})]}),m.jsx("pre",{style:r?{maxHeight:r}:void 0,children:m.jsx("code",{children:c.map((y,S)=>y.cls?m.jsx("span",{className:y.cls,children:y.text},S):m.jsx(Dr.Fragment,{children:y.text},S))})}),u?m.jsx("button",{type:"button",className:"code-more",onClick:()=>a(y=>!y),children:o?"收起":`展开余下 ${s.length-t} 行`}):null]})}function hS({entry:e,order:n}){var a;const{meta:t,Stage:r,source:i,file:l}=e,o=String(n).padStart(2,"0");return m.jsxs("article",{children:[m.jsx("header",{className:"page-head",children:m.jsxs("div",{children:[m.jsxs("p",{className:"eyebrow",children:[o," · ",((a=lf[t.group])==null?void 0:a.label)??t.group]}),m.jsx("h1",{className:"page-title",children:t.title})]})}),t.intro?m.jsx("p",{className:"page-sub",children:t.intro}):null,m.jsx("section",{className:"demo-stage",children:m.jsx(r,{})}),m.jsxs("section",{className:"demo-src-wrap",children:[m.jsxs("div",{className:"demo-src-head",children:[m.jsxs("span",{className:"demo-src-title",children:["源码 · ",l]}),m.jsx("span",{className:"demo-src-hint",children:"下面这份就是上面正在跑的那份 · 已高亮"})]}),m.jsx(mS,{code:i,title:l,collapseAfter:28,maxHeight:460})]})]})}const yS=`import type React from "react";
import type {
  SignInPlugin,
  SignInPluginContext,
} from "../../components/SignInPlugin/plugins/types";
import type { PluginDoc } from "vane-plugin-core";
import doc from "./doc.json";
import { DAY_COLORS, DAY_GLYPH } from "../tokens";

export interface CalendarGridConfig {
  /** 每周列数，默认 7 */
  columns?: number;
}

/**
 * CalendarGridPlugin - 月历网格（日历区）。
 * 与 CalendarStrip 同一份 calendar 数据，但用 7 列网格形态呈现，
 * 更适合展示整月/整轮签到进度。状态配色复用家族 tokens。
 */
export function createCalendarGridPlugin<T = any>(
  config: CalendarGridConfig = {}
): SignInPlugin<T> {
  const { columns = 7 } = config;
  return {
    name: "CalendarGrid",
    version: "0.1.0",
    description: doc.description,
    priority: 21,
    enabled: true,
    hooks: {
      renderCalendar: (ctx: SignInPluginContext<T>) => {
        const cells = ctx.data.calendar ?? [];
        return (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: \`repeat(\${columns}, 1fr)\`,
              gap: 6,
            }}
          >
            {cells.map((c) => {
              const s = DAY_COLORS[c.status] ?? DAY_COLORS.future;
              return (
                <div
                  key={c.date}
                  title={c.date}
                  style={{
                    height: 44,
                    borderRadius: 8,
                    background: s.bg,
                    color: s.fg,
                    border: \`1px solid \${s.border}\`,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span style={{ fontSize: 10, color: s.fg }}>{c.day}天</span>
                  <span style={{ fontSize: 14, fontWeight: 700, lineHeight: 1.1 }}>
                    {DAY_GLYPH[c.status] || c.day}
                  </span>
                </div>
              );
            })}
          </div>
        );
      },
    },
  };
}

createCalendarGridPlugin.meta = doc as PluginDoc;
`,vS=`import type React from "react";
import type {
  SignInPlugin,
  SignInPluginContext,
  DayCell,
  DayStatus,
} from "../../components/SignInPlugin/plugins/types";
import type { PluginDoc } from "vane-plugin-core";
import doc from "./doc.json";

export interface CalendarStripConfig {
  /** 是否高亮带奖励的格 */
  showRewardDot?: boolean;
}

/** 各状态配色（背景 + 字色成对，满足 ADR-13 对比度门槛：正文 ≥4.5） */
const COLORS: Record<DayStatus, { bg: string; fg: string; border: string }> = {
  signed: { bg: "#fff1e6", fg: "#c2410c", border: "#cf4407" },
  today: { bg: "#cf4407", fg: "#ffffff", border: "#cf4407" },
  missed: { bg: "#f2f3f5", fg: "#6b6b6b", border: "#e3e5e8" },
  future: { bg: "#fafafa", fg: "#6b6b6b", border: "#ececec" },
  reward: { bg: "#fff8e1", fg: "#9a6a00", border: "#e0a800" },
};

const GLYPH: Record<DayStatus, string> = {
  signed: "✓",
  today: "今",
  missed: "·",
  future: "",
  reward: "★",
};

/**
 * CalendarStripPlugin - 日历条（日历区）。
 * 横向滚动的逐日格：已签 / 今日 / 漏签 / 未来 / 奖励五态，带奖励的格右上角金点。
 */
export function createCalendarStripPlugin<T = any>(
  config: CalendarStripConfig = {}
): SignInPlugin<T> {
  const { showRewardDot = true } = config;

  return {
    name: "CalendarStrip",
    version: "0.1.0",
    description: doc.description,
    priority: 20,
    enabled: true,
    hooks: {
      renderCalendar: (ctx: SignInPluginContext<T>) => {
        const cells: DayCell[] = ctx.data.calendar ?? [];
        return (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 6,
            }}
          >
            {cells.map((c) => {
              const s = COLORS[c.status] ?? COLORS.future;
              const hasReward = !!(c.reward && !c.reward.claimed);
              return (
                <div
                  key={c.date}
                  title={c.date}
                  style={{
                    flex: "0 0 auto",
                    width: 42,
                    height: 54,
                    borderRadius: 8,
                    background: s.bg,
                    color: s.fg,
                    border: \`1px solid \${s.border}\`,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                  }}
                >
                  <span style={{ fontSize: 11, color: s.fg }}>第{c.day}天</span>
                  <span style={{ fontSize: 16, fontWeight: 700, lineHeight: 1.1 }}>
                    {GLYPH[c.status] || c.day}
                  </span>
                  {showRewardDot && hasReward && (
                    <span
                      style={{
                        position: "absolute",
                        top: 4,
                        right: 4,
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: "#b8860b",
                      }}
                    />
                  )}
                </div>
              );
            })}
          </div>
        );
      },
    },
  };
}

createCalendarStripPlugin.meta = doc as PluginDoc;
`,SS=`import type React from "react";
import type {
  SignInPlugin,
  SignInPluginContext,
} from "../../components/SignInPlugin/plugins/types";
import type { PluginDoc } from "vane-plugin-core";
import doc from "./doc.json";
import { GREEN, TEXT_3 } from "../tokens";

export type CountdownConfig = Record<string, never>;

/**
 * CountdownPlugin - 次签倒计时（头部区）。
 * 依据 data.nextResetAt 计算距下次可签到的剩余时间；已过期显示「现在可签到」。
 * 纯渲染计算（无定时器），由消费方在 nextResetAt 变化时重渲即可刷新。
 */
export function createCountdownPlugin<T = any>(
  _config: CountdownConfig = {}
): SignInPlugin<T> {
  return {
    name: "Countdown",
    version: "0.1.0",
    description: doc.description,
    priority: 14,
    enabled: true,
    hooks: {
      renderHeader: (ctx: SignInPluginContext<T>) => {
        const { nextResetAt, todaySigned } = ctx.data;
        if (!nextResetAt) return null;
        const diff = nextResetAt - Date.now();
        if (diff <= 0) {
          return (
            <div style={{ fontSize: 12, color: GREEN }}>现在可签到</div>
          );
        }
        const h = Math.floor(diff / 3.6e6);
        const m = Math.floor((diff % 3.6e6) / 6e4);
        return (
          <div style={{ fontSize: 12, color: TEXT_3 }}>
            {todaySigned
              ? \`距下次可签到 \${h}小时\${m}分\`
              : "今日可签到"}
          </div>
        );
      },
    },
  };
}

createCountdownPlugin.meta = doc as PluginDoc;
`,xS=`import type React from "react";
import type {
  SignInPlugin,
  SignInPluginContext,
} from "../../components/SignInPlugin/plugins/types";
import type { PluginDoc } from "vane-plugin-core";
import doc from "./doc.json";
import { ACCENT } from "../tokens";

export interface InviteConfig {
  /** 自定义按钮文案 */
  text?: string;
}

/**
 * InvitePlugin - 邀请好友助力（操作区）。
 * 触发 ctx.callbacks.invite()，常用于游戏/拉新运营位，邀请好友助力解锁额外奖励。
 */
export function createInvitePlugin<T = any>(
  config: InviteConfig = {}
): SignInPlugin<T> {
  const { text = "邀请好友助力" } = config;
  return {
    name: "Invite",
    version: "0.1.0",
    description: doc.description,
    priority: 45,
    enabled: true,
    hooks: {
      renderActions: (ctx: SignInPluginContext<T>) => {
        return (
          <button
            type="button"
            onClick={() => ctx.callbacks.invite?.()}
            style={{
              border: \`1px solid \${ACCENT}\`,
              background: "#ffffff",
              color: ACCENT,
              borderRadius: 18,
              padding: "6px 14px",
              fontSize: 13,
              cursor: "pointer",
            }}
          >
            {text}
          </button>
        );
      },
    },
  };
}

createInvitePlugin.meta = doc as PluginDoc;
`,wS=`import type React from "react";
import type {
  SignInPlugin,
  SignInPluginContext,
} from "../../components/SignInPlugin/plugins/types";
import type { PluginDoc } from "vane-plugin-core";
import doc from "./doc.json";
import { ACCENT, DISABLED_BG, TEXT_3 } from "../tokens";

export type LevelBadgeConfig = Record<string, never>;

/**
 * LevelBadgePlugin - 会员等级徽标（头部区）。
 * 展示当前会员等级名 + 进度条 + 当前/下一阶阈值（data.level）。
 * 无等级数据时静默返回 null，不影响其它头部插件。
 */
export function createLevelBadgePlugin<T = any>(
  _config: LevelBadgeConfig = {}
): SignInPlugin<T> {
  return {
    name: "LevelBadge",
    version: "0.1.0",
    description: doc.description,
    priority: 13,
    enabled: true,
    hooks: {
      renderHeader: (ctx: SignInPluginContext<T>) => {
        const level = ctx.data.level;
        if (!level) return null;
        const pct = Math.round(
          Math.min(1, Math.max(0, level.progress)) * 100
        );
        return (
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span
              style={{
                fontSize: 12,
                fontWeight: 700,
                color: "#ffffff",
                background: ACCENT,
                borderRadius: 10,
                padding: "2px 8px",
                whiteSpace: "nowrap",
              }}
            >
              {level.name}
            </span>
            <div
              style={{
                flex: 1,
                height: 6,
                borderRadius: 3,
                background: DISABLED_BG,
                overflow: "hidden",
              }}
            >
              <div
                style={{ width: \`\${pct}%\`, height: "100%", background: ACCENT }}
              />
            </div>
            <span style={{ fontSize: 11, color: TEXT_3, whiteSpace: "nowrap" }}>
              {level.current}/{level.next}
            </span>
          </div>
        );
      },
    },
  };
}

createLevelBadgePlugin.meta = doc as PluginDoc;
`,kS=`import type React from "react";
import type {
  SignInPlugin,
  SignInPluginContext,
  DayCell,
} from "../../components/SignInPlugin/plugins/types";
import type { PluginDoc } from "vane-plugin-core";
import doc from "./doc.json";

export interface MakeupSlotConfig {
  /** 自定义按钮文案（禁用态仍显示「补签次数已用完」） */
  buttonText?: string;
}

/**
 * MakeupSlotPlugin - 补签位（操作区）。
 * 找到第一个可补签的漏签格，展示补签入口；补签次数用尽后置灰禁用。
 * canMakeup 由消费方数据驱动（漏签且仍在补签窗口内）。
 */
export function createMakeupSlotPlugin<T = any>(
  config: MakeupSlotConfig = {}
): SignInPlugin<T> {
  const { buttonText } = config;

  return {
    name: "MakeupSlot",
    version: "0.1.0",
    description: doc.description,
    priority: 42,
    enabled: true,
    hooks: {
      renderActions: (ctx: SignInPluginContext<T>) => {
        const { makeup, calendar } = ctx.data;
        const target: DayCell | undefined = (calendar ?? []).find((c) => c.canMakeup);
        const remaining = makeup.available - makeup.used;
        const disabled = remaining <= 0 || !target;
        const label = disabled
          ? "补签次数已用完"
          : buttonText ?? \`补签 · 剩\${remaining}次\`;
        return (
          <button
            type="button"
            data-testid="si-makeup-btn"
            data-disabled={String(disabled)}
            disabled={disabled}
            onClick={() => target && ctx.callbacks.makeup?.(target.date)}
            style={{
              border: disabled ? "1px solid #d8d8d8" : "1px solid #cf4407",
              background: disabled ? "#f2f3f5" : "#fff",
              color: disabled ? "#8a8a8a" : "#cf4407",
              borderRadius: 18,
              padding: "6px 14px",
              fontSize: 13,
              cursor: disabled ? "not-allowed" : "pointer",
            }}
          >
            {label}
          </button>
        );
      },
    },
  };
}

createMakeupSlotPlugin.meta = doc as PluginDoc;
`,PS=`import type React from "react";
import type {
  SignInPlugin,
  SignInPluginContext,
} from "../../components/SignInPlugin/plugins/types";
import type { PluginDoc } from "vane-plugin-core";
import doc from "./doc.json";
import { ACCENT, DISABLED_BG, GOLD, TEXT_2, TEXT_3 } from "../tokens";

export type MilestoneConfig = Record<string, never>;

/**
 * MilestonePlugin - 里程碑进度（奖励区）。
 * 找到「下一未达奖励」（data.rewards 中 day>streak 的最小值），展示距其还差几天 +
 * 进度条；全部达成则显示庆祝终态。与 RewardPreview 互补：一个看未来清单，一个看里程碑。
 */
export function createMilestonePlugin<T = any>(
  _config: MilestoneConfig = {}
): SignInPlugin<T> {
  return {
    name: "Milestone",
    version: "0.1.0",
    description: doc.description,
    priority: 32,
    enabled: true,
    hooks: {
      renderRewards: (ctx: SignInPluginContext<T>) => {
        const { rewards, streak } = ctx.data;
        const next = (rewards ?? [])
          .filter((r) => r.day > streak)
          .sort((a, b) => a.day - b.day)[0];
        if (!next) {
          return (
            <div style={{ fontSize: 12, color: TEXT_3 }}>已达成全部奖励 🎉</div>
          );
        }
        const left = next.day - streak;
        const pct = Math.round(((next.day - left) / next.day) * 100);
        return (
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <div style={{ fontSize: 12, color: TEXT_2 }}>
              再连签 <b style={{ color: ACCENT }}>{left}</b> 天解锁 {next.label}
            </div>
            <div
              style={{
                height: 6,
                borderRadius: 3,
                background: DISABLED_BG,
                overflow: "hidden",
              }}
            >
              <div
                style={{ width: \`\${pct}%\`, height: "100%", background: GOLD }}
              />
            </div>
          </div>
        );
      },
    },
  };
}

createMilestonePlugin.meta = doc as PluginDoc;
`,_S=`import type React from "react";
import type {
  SignInPlugin,
  SignInPluginContext,
} from "../../components/SignInPlugin/plugins/types";
import type { PluginDoc } from "vane-plugin-core";
import doc from "./doc.json";
import { ACCENT, TEXT_2 } from "../tokens";

export type PointsBalanceConfig = Record<string, never>;

/**
 * PointsBalancePlugin - 累计积分（头部区）。
 * 展示当前累计积分总额（data.points），与连签数并排作为头部资产概览。
 */
export function createPointsBalancePlugin<T = any>(
  _config: PointsBalanceConfig = {}
): SignInPlugin<T> {
  return {
    name: "PointsBalance",
    version: "0.1.0",
    description: doc.description,
    priority: 11,
    enabled: true,
    hooks: {
      renderHeader: (ctx: SignInPluginContext<T>) => {
        const { points } = ctx.data;
        return (
          <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
            <span style={{ fontSize: 13, color: TEXT_2 }}>积分</span>
            <span
              style={{ fontSize: 20, fontWeight: 800, color: ACCENT, lineHeight: 1 }}
            >
              {points}
            </span>
          </div>
        );
      },
    },
  };
}

createPointsBalancePlugin.meta = doc as PluginDoc;
`,CS=`import type React from "react";
import { useState } from "react";
import type {
  SignInPlugin,
  SignInPluginContext,
} from "../../components/SignInPlugin/plugins/types";
import type { PluginDoc } from "vane-plugin-core";
import doc from "./doc.json";
import { ACCENT, ACCENT_SOFT, TEXT_2 } from "../tokens";

export interface RemindConfig {
  /** 初始是否开启提醒 */
  defaultOn?: boolean;
}

function RemindButton({ ctx }: { ctx: SignInPluginContext<any> }) {
  const [on, setOn] = useState(false);
  return (
    <button
      type="button"
      onClick={() => {
        const v = !on;
        setOn(v);
        ctx.callbacks.remind?.(v);
      }}
      style={{
        border: \`1px solid \${on ? ACCENT : "#d8d8d8"}\`,
        background: on ? ACCENT_SOFT : "#ffffff",
        color: on ? ACCENT : TEXT_2,
        borderRadius: 18,
        padding: "6px 14px",
        fontSize: 13,
        cursor: "pointer",
      }}
    >
      {on ? "已开启提醒" : "签到提醒"}
    </button>
  );
}

/**
 * RemindPlugin - 签到提醒开关（操作区）。
 * 本地维护开关态，切换即经 ctx.callbacks.remind(enabled) 下发给消费方持久化。
 */
export function createRemindPlugin<T = any>(
  config: RemindConfig = {}
): SignInPlugin<T> {
  const { defaultOn = false } = config;
  return {
    name: "Remind",
    version: "0.1.0",
    description: doc.description,
    priority: 44,
    enabled: true,
    hooks: {
      renderActions: (ctx: SignInPluginContext<T>) => {
        // defaultOn 仅作首次渲染初值；RemindButton 自身管态。
        void defaultOn;
        return <RemindButton ctx={ctx} />;
      },
    },
  };
}

createRemindPlugin.meta = doc as PluginDoc;
`,ES=`import type React from "react";
import type {
  SignInPlugin,
  SignInPluginContext,
  RewardInfo,
} from "../../components/SignInPlugin/plugins/types";
import type { PluginDoc } from "vane-plugin-core";
import doc from "./doc.json";
import { ACCENT, TEXT_3 } from "../tokens";

export type RewardClaimConfig = Record<string, never>;

/**
 * RewardClaimPlugin - 当日奖励领取（奖励区）。
 * 找到「已达天数可领但尚未领取」的第一个奖励（data.rewards 中 day<=streak 且 !claimed），
 * 提供领取按钮；点按经 ctx.callbacks.claim(day) 下发。无待领时显示终态文案。
 */
export function createRewardClaimPlugin<T = any>(
  _config: RewardClaimConfig = {}
): SignInPlugin<T> {
  return {
    name: "RewardClaim",
    version: "0.1.0",
    description: doc.description,
    priority: 31,
    enabled: true,
    hooks: {
      renderRewards: (ctx: SignInPluginContext<T>) => {
        const { rewards, streak } = ctx.data;
        const target: RewardInfo | undefined = (rewards ?? []).find(
          (r) => r.day <= streak && !r.claimed
        );
        if (!target) {
          return (
            <div style={{ fontSize: 12, color: TEXT_3 }}>
              今日奖励已全部领取
            </div>
          );
        }
        return (
          <button
            type="button"
            data-testid="si-claim-btn"
            data-day={String(target.day)}
            onClick={() => ctx.callbacks.claim?.(target.day)}
            style={{
              border: "none",
              background: ACCENT,
              color: "#ffffff",
              borderRadius: 18,
              padding: "6px 16px",
              fontSize: 13,
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            领取第{target.day}天奖励 · {target.label}
          </button>
        );
      },
    },
  };
}

createRewardClaimPlugin.meta = doc as PluginDoc;
`,RS=`import type React from "react";
import type {
  SignInPlugin,
  SignInPluginContext,
} from "../../components/SignInPlugin/plugins/types";
import type { PluginDoc } from "vane-plugin-core";
import doc from "./doc.json";
import { TEXT_2, TEXT_3 } from "../tokens";

export interface RewardHistoryConfig {
  /** 最多展示几条，默认 5 */
  limit?: number;
}

/**
 * RewardHistoryPlugin - 领取记录（底部区）。
 * 展示 data.history（领取记录），按时间倒序取前 limit 条；无记录显示终态文案。
 */
export function createRewardHistoryPlugin<T = any>(
  config: RewardHistoryConfig = {}
): SignInPlugin<T> {
  const { limit = 5 } = config;
  return {
    name: "RewardHistory",
    version: "0.1.0",
    description: doc.description,
    priority: 51,
    enabled: true,
    hooks: {
      renderFooter: (ctx: SignInPluginContext<T>) => {
        const history = ctx.data.history ?? [];
        if (!history.length) {
          return (
            <div style={{ fontSize: 12, color: TEXT_3 }}>暂无领取记录</div>
          );
        }
        return (
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <div style={{ fontSize: 12, color: TEXT_2 }}>领取记录</div>
            {history.slice(0, limit).map((h) => (
              <div
                key={h.id}
                style={{
                  display: "flex",
                  fontSize: 12,
                  color: TEXT_3,
                }}
              >
                <span>
                  第{h.day}天 · {h.label}
                </span>
                <span style={{ marginLeft: "auto" }}>
                  {new Date(h.at).toLocaleDateString()}
                </span>
              </div>
            ))}
          </div>
        );
      },
    },
  };
}

createRewardHistoryPlugin.meta = doc as PluginDoc;
`,IS=`import type React from "react";
import type {
  SignInPlugin,
  SignInPluginContext,
  RewardInfo,
} from "../../components/SignInPlugin/plugins/types";
import type { PluginDoc } from "vane-plugin-core";
import doc from "./doc.json";

export interface RewardPreviewConfig {
  /** 最多展示几条奖励预告，默认 5 */
  limit?: number;
}

/**
 * RewardPreviewPlugin - 奖励预告（奖励区）。
 * 从当前连签天数起，逐日展示后续可领奖励（积分 / 券 / 礼包 / 徽章）。
 * 已领取的奖励标记「已领」终态，不覆盖未领取。
 */
export function createRewardPreviewPlugin<T = any>(
  config: RewardPreviewConfig = {}
): SignInPlugin<T> {
  const { limit = 5 } = config;

  return {
    name: "RewardPreview",
    version: "0.1.0",
    description: doc.description,
    priority: 30,
    enabled: true,
    hooks: {
      renderRewards: (ctx: SignInPluginContext<T>) => {
        const rewards: RewardInfo[] = (ctx.data.rewards ?? []).filter(
          (r) => r.day >= ctx.data.streak
        );
        if (!rewards.length) return null;
        return (
          <div
            style={{
              background: "#fafbfc",
              border: "1px solid #eef0f2",
              borderRadius: 10,
              padding: "10px 12px",
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            {rewards.slice(0, limit).map((r) => (
              <div
                key={r.day}
                style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13 }}
              >
                <span
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 8,
                    flex: "0 0 auto",
                    background: "#fff8e1",
                    color: "#9a6a00",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                  }}
                >
                  {r.day}
                </span>
                <span style={{ color: "#1f2328" }}>{r.label}</span>
                {r.claimed && (
                  <span style={{ marginLeft: "auto", color: "#0f8a4a", fontSize: 12 }}>
                    已领 ✓
                  </span>
                )}
              </div>
            ))}
          </div>
        );
      },
    },
  };
}

createRewardPreviewPlugin.meta = doc as PluginDoc;
`,TS=`import type React from "react";
import { useState } from "react";
import type {
  SignInPlugin,
  SignInPluginContext,
} from "../../components/SignInPlugin/plugins/types";
import type { PluginDoc } from "vane-plugin-core";
import doc from "./doc.json";
import { TEXT_2, TEXT_3 } from "../tokens";

export interface RuleExpandConfig {
  /** 初始是否展开 */
  defaultOpen?: boolean;
}

function RuleBlock({ rules }: { rules?: string[] }) {
  const [open, setOpen] = useState(false);
  if (!rules || !rules.length) return null;
  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        style={{
          border: "none",
          background: "transparent",
          color: TEXT_2,
          fontSize: 13,
          cursor: "pointer",
          padding: 0,
        }}
      >
        {open ? "收起活动规则 ▲" : "活动规则 ▼"}
      </button>
      {open && (
        <ul
          style={{
            margin: "6px 0 0",
            paddingLeft: 18,
            fontSize: 12,
            color: TEXT_3,
          }}
        >
          {rules.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

/**
 * RuleExpandPlugin - 规则折叠展开（底部区）。
 * 将 data.rules 折叠为可展开列表，避免长规则文案常驻占用空间。
 * 无 rules 数据时静默返回 null。
 */
export function createRuleExpandPlugin<T = any>(
  config: RuleExpandConfig = {}
): SignInPlugin<T> {
  const { defaultOpen = false } = config;
  return {
    name: "RuleExpand",
    version: "0.1.0",
    description: doc.description,
    priority: 50,
    enabled: true,
    hooks: {
      renderFooter: (ctx: SignInPluginContext<T>) => {
        void defaultOpen;
        return <RuleBlock rules={ctx.data.rules} />;
      },
    },
  };
}

createRuleExpandPlugin.meta = doc as PluginDoc;
`,bS=`import type React from "react";
import type {
  SignInPlugin,
  SignInPluginContext,
} from "../../components/SignInPlugin/plugins/types";
import type { PluginDoc } from "vane-plugin-core";
import doc from "./doc.json";
import { TEXT_2 } from "../tokens";

export interface ShareConfig {
  /** 自定义按钮文案 */
  text?: string;
}

/**
 * SharePlugin - 分享成就（操作区）。
 * 触发 ctx.callbacks.share()，由消费方决定分享渠道（海报 / 链接 / 卡片）。
 * 纯无状态按钮，归属各平台运营位的社交扩散位。
 */
export function createSharePlugin<T = any>(
  config: ShareConfig = {}
): SignInPlugin<T> {
  const { text = "分享成就" } = config;
  return {
    name: "Share",
    version: "0.1.0",
    description: doc.description,
    priority: 43,
    enabled: true,
    hooks: {
      renderActions: (ctx: SignInPluginContext<T>) => {
        return (
          <button
            type="button"
            onClick={() => ctx.callbacks.share?.()}
            style={{
              border: "1px solid #d8d8d8",
              background: "#ffffff",
              color: TEXT_2,
              borderRadius: 18,
              padding: "6px 14px",
              fontSize: 13,
              cursor: "pointer",
            }}
          >
            {text}
          </button>
        );
      },
    },
  };
}

createSharePlugin.meta = doc as PluginDoc;
`,jS=`import type React from "react";
import type {
  SignInPlugin,
  SignInPluginContext,
} from "../../components/SignInPlugin/plugins/types";
import type { PluginDoc } from "vane-plugin-core";
import doc from "./doc.json";
import { ACCENT, TEXT, TEXT_2 } from "../tokens";

export type StatRowConfig = Record<string, never>;

/**
 * StatRowPlugin - 数据行（头部区）。
 * 一行展示「累计天数 / 累计积分」两项汇总指标，作为头部资产概览的补充行。
 */
export function createStatRowPlugin<T = any>(
  _config: StatRowConfig = {}
): SignInPlugin<T> {
  return {
    name: "StatRow",
    version: "0.1.0",
    description: doc.description,
    priority: 12,
    enabled: true,
    hooks: {
      renderHeader: (ctx: SignInPluginContext<T>) => {
        const { totalDays, points } = ctx.data;
        return (
          <div style={{ display: "flex", gap: 18, fontSize: 12, color: TEXT_2 }}>
            <span>
              累计 <b style={{ color: TEXT, fontSize: 14 }}>{totalDays}</b> 天
            </span>
            <span>
              累计 <b style={{ color: ACCENT, fontSize: 14 }}>{points}</b> 分
            </span>
          </div>
        );
      },
    },
  };
}

createStatRowPlugin.meta = doc as PluginDoc;
`,$S=`import type React from "react";
import type {
  SignInPlugin,
  SignInPluginContext,
} from "../../components/SignInPlugin/plugins/types";
import type { PluginDoc } from "vane-plugin-core";
import { ACCENT, TEXT_2, BORDER } from "../tokens";
import doc from "./doc.json";

export interface StreakStateConfig {
  /** 是否展示历史最高连签天数 */
  showMax?: boolean;
}

/**
 * StreakStatePlugin - 连签状态（头部区）。
 * 展示当前连签天数与历史最高连签；可关掉最高天数只留当前连签。
 */
export function createStreakStatePlugin<T = any>(
  config: StreakStateConfig = {}
): SignInPlugin<T> {
  const { showMax = true } = config;

  return {
    name: "StreakState",
    version: "0.1.0",
    description: doc.description,
    priority: 10,
    enabled: true,
    hooks: {
      renderHeader: (ctx: SignInPluginContext<T>) => {
        const { streak, maxStreak } = ctx.data;
        return (
          <div
            data-testid="si-streak"
            style={{ display: "flex", alignItems: "baseline", gap: 8 }}
          >
            <span
              style={{
                fontSize: 34,
                fontWeight: 800,
                color: ACCENT,
                lineHeight: 1,
                letterSpacing: "-0.5px",
              }}
            >
              {streak}
            </span>
            <span style={{ fontSize: 13, color: TEXT_2, fontWeight: 600 }}>
              天连签
            </span>
            {showMax && (
              <span
                style={{
                  marginLeft: "auto",
                  fontSize: 12,
                  color: TEXT_2,
                  background: "#faf7f4",
                  border: \`1px solid \${BORDER}\`,
                  borderRadius: 999,
                  padding: "3px 10px",
                  whiteSpace: "nowrap",
                }}
              >
                最高 {maxStreak} 天
              </span>
            )}
          </div>
        );
      },
    },
  };
}

createStreakStatePlugin.meta = doc as PluginDoc;
`,DS=`import type React from "react";
import type {
  SignInPlugin,
  SignInPluginContext,
} from "../../components/SignInPlugin/plugins/types";
import type { PluginDoc } from "vane-plugin-core";
import doc from "./doc.json";

export interface TodayCheckInConfig {
  /** 已签到时的按钮文案 */
  signedText?: string;
  /** 未签到时的按钮文案 */
  unsignedText?: string;
}

/**
 * TodayCheckInPlugin - 今日签到（操作区，主 CTA）。
 * todaySigned 驱动禁用态：已签 → 置灰「今日已签」，未签 → 高亮「立即签到」。
 * 点击经 ctx.callbacks.sign 下发，状态真相在消费方数据。
 */
export function createTodayCheckInPlugin<T = any>(
  config: TodayCheckInConfig = {}
): SignInPlugin<T> {
  const { signedText = "今日已签 ✓", unsignedText = "立即签到" } = config;

  return {
    name: "TodayCheckIn",
    version: "0.1.0",
    description: doc.description,
    priority: 40,
    enabled: true,
    hooks: {
      renderActions: (ctx: SignInPluginContext<T>) => {
        const { todaySigned } = ctx.data;
        return (
          <button
            type="button"
            data-testid="si-checkin-btn"
            data-signed={String(todaySigned)}
            disabled={todaySigned}
            onClick={() => !todaySigned && ctx.callbacks.sign?.()}
            style={{
              border: "none",
              background: todaySigned ? "#f2f3f5" : "#cf4407",
              color: todaySigned ? "#8a8a8a" : "#ffffff",
              borderRadius: 20,
              padding: "8px 20px",
              fontSize: 14,
              fontWeight: 700,
              cursor: todaySigned ? "not-allowed" : "pointer",
            }}
          >
            {todaySigned ? signedText : unsignedText}
          </button>
        );
      },
    },
  };
}

createTodayCheckInPlugin.meta = doc as PluginDoc;
`,P1={header:"头部区 · header",calendar:"日历区 · calendar",rewards:"奖励区 · rewards",actions:"操作区 · actions",footer:"底部区 · footer"},Eu=["header","calendar","rewards","actions","footer"],Ru=Object.assign({"/src/custom-plugins/CalendarGridPlugin/doc.json":Qa,"/src/custom-plugins/CalendarStripPlugin/doc.json":Aa,"/src/custom-plugins/CountdownPlugin/doc.json":Ga,"/src/custom-plugins/InvitePlugin/doc.json":Za,"/src/custom-plugins/LevelBadgePlugin/doc.json":Va,"/src/custom-plugins/MakeupSlotPlugin/doc.json":Fa,"/src/custom-plugins/MilestonePlugin/doc.json":Ka,"/src/custom-plugins/PointsBalancePlugin/doc.json":Wa,"/src/custom-plugins/RemindPlugin/doc.json":Ja,"/src/custom-plugins/RewardClaimPlugin/doc.json":Xa,"/src/custom-plugins/RewardHistoryPlugin/doc.json":es,"/src/custom-plugins/RewardPreviewPlugin/doc.json":Ba,"/src/custom-plugins/RuleExpandPlugin/doc.json":qa,"/src/custom-plugins/SharePlugin/doc.json":Ya,"/src/custom-plugins/StatRowPlugin/doc.json":Ha,"/src/custom-plugins/StreakStatePlugin/doc.json":La,"/src/custom-plugins/TodayCheckInPlugin/doc.json":Ua}),Iu=Object.assign({"/src/custom-plugins/CalendarGridPlugin/create.tsx":yS,"/src/custom-plugins/CalendarStripPlugin/create.tsx":vS,"/src/custom-plugins/CountdownPlugin/create.tsx":SS,"/src/custom-plugins/InvitePlugin/create.tsx":xS,"/src/custom-plugins/LevelBadgePlugin/create.tsx":wS,"/src/custom-plugins/MakeupSlotPlugin/create.tsx":kS,"/src/custom-plugins/MilestonePlugin/create.tsx":PS,"/src/custom-plugins/PointsBalancePlugin/create.tsx":_S,"/src/custom-plugins/RemindPlugin/create.tsx":CS,"/src/custom-plugins/RewardClaimPlugin/create.tsx":ES,"/src/custom-plugins/RewardHistoryPlugin/create.tsx":RS,"/src/custom-plugins/RewardPreviewPlugin/create.tsx":IS,"/src/custom-plugins/RuleExpandPlugin/create.tsx":TS,"/src/custom-plugins/SharePlugin/create.tsx":bS,"/src/custom-plugins/StatRowPlugin/create.tsx":jS,"/src/custom-plugins/StreakStatePlugin/create.tsx":$S,"/src/custom-plugins/TodayCheckInPlugin/create.tsx":DS}),of=e=>e.replace(/^.*\/custom-plugins\//,"").replace(/\/.*$/,"");function NS(e){const n=Object.keys(Iu).find(i=>of(i)===e),t=n?Iu[n]:"",r=/priority:\s*(\d+)/.exec(t);return r?Number(r[1]):0}function MS(e){const n=Object.keys(Ru).find(t=>of(t)===e);return n?Ru[n]:{name:e,description:"（缺少 doc.json）"}}const OS=[{dir:"StreakStatePlugin",group:"header",make:()=>$n()},{dir:"PointsBalancePlugin",group:"header",make:()=>Nt()},{dir:"StatRowPlugin",group:"header",make:()=>Mt()},{dir:"LevelBadgePlugin",group:"header",make:()=>nt()},{dir:"CountdownPlugin",group:"header",make:()=>Ot()},{dir:"CalendarStripPlugin",group:"calendar",make:()=>qn({showRewardDot:!0})},{dir:"CalendarGridPlugin",group:"calendar",make:()=>zt()},{dir:"MakeupSlotPlugin",group:"calendar",make:()=>et()},{dir:"RewardPreviewPlugin",group:"rewards",make:()=>Dn({limit:5})},{dir:"RewardClaimPlugin",group:"rewards",make:()=>tt()},{dir:"MilestonePlugin",group:"rewards",make:()=>Lt()},{dir:"TodayCheckInPlugin",group:"actions",make:()=>Nn()},{dir:"SharePlugin",group:"actions",make:()=>At()},{dir:"RemindPlugin",group:"actions",make:()=>Bt()},{dir:"InvitePlugin",group:"actions",make:()=>Ft()},{dir:"RuleExpandPlugin",group:"footer",make:()=>Ut({defaultOpen:!0})},{dir:"RewardHistoryPlugin",group:"footer",make:()=>Lr()}],Tu=OS.map(e=>{const n=MS(e.dir);return{dir:e.dir,factory:`create${e.dir.replace(/Plugin$/,"")}Plugin`,group:e.group,priority:NS(e.dir),summary:n.description,doc:n,make:e.make}}).sort((e,n)=>Eu.indexOf(e.group)-Eu.indexOf(n.group)||n.priority-e.priority),_1=["StreakStatePlugin","LevelBadgePlugin","CalendarStripPlugin","RewardPreviewPlugin","MilestonePlugin","TodayCheckInPlugin","MakeupSlotPlugin","SharePlugin","RuleExpandPlugin","RewardHistoryPlugin"],zS={id:"ecommerce",title:"电商签到运营位",group:"运营位",ref:{label:"电商 App · 签到弹层",url:"https://vane.dev/examples/sign-in/ecommerce"},pain:"一个按钮的签到太单薄，用户不知道连签能拿什么；把碎插件拼成一张完整运营位卡。",plugs:[{fn:"createStreakStatePlugin",why:"头部连签天数 + 最高连签，给连续打卡的用户正反馈"},{fn:"createCalendarStripPlugin",cfg:"showRewardDot: true",why:"14 天连签条，今天/已签/漏签一眼看清，带奖励的格打点"},{fn:"createRewardPreviewPlugin",why:"逐日奖励预告，把『再签 1 天得 50 积分』前置"},{fn:"createTodayCheckInPlugin",why:"主 CTA：今日签到 / 已签切换"},{fn:"createMakeupSlotPlugin",why:"漏签用户给补签入口，挽回流失"}],props:["data={data}","callbacks={callbacks}"],note:"五个原子插件，组合后就是一张可直接上线的大促签到卡。"},LS=F(A,[$n(),qn({showRewardDot:!0}),Dn(),Nn(),et()]);function AS(){const[e,n]=v.useState(!1),t=G(e),r=X({sign:()=>n(!0)});return m.jsx(LS,{data:t,callbacks:r,containerStyle:{maxWidth:460,margin:"0 auto"}})}const BS=Object.freeze(Object.defineProperty({__proto__:null,default:AS,meta:zS},Symbol.toStringTag,{value:"Module"})),FS={id:"game-streak",title:"游戏连签激励",group:"激励",ref:{label:"游戏 · 每日任务",url:"https://vane.dev/examples/sign-in/game-streak"},pain:"游戏侧要的是成长曲线与紧迫感，单插件撑不起；用 6 个插件拼出『每日任务』面板。",plugs:[{fn:"createStreakStatePlugin",why:"连签天数 + 最高连签，冲榜动机"},{fn:"createCalendarGridPlugin",why:"月历网格，看整月进度"},{fn:"createMilestonePlugin",why:"里程碑节点（如 7/30 天）给阶段目标"},{fn:"createLevelBadgePlugin",why:"会员等级徽章，成长感"},{fn:"createRewardClaimPlugin",why:"达标奖励一键领取"},{fn:"createCountdownPlugin",why:"距下次刷新倒计时，制造紧迫"}],props:["data={data}","callbacks={callbacks}"],note:"倒计时依赖数据里的 nextResetAt，样本数据已带该字段。"},US=F(A,[$n(),zt(),Lt(),nt(),tt(),Ot()]);function WS(){const[e,n]=v.useState(!1),t=G(e),r=X({sign:()=>n(!0)});return m.jsx(US,{data:t,callbacks:r,containerStyle:{maxWidth:460,margin:"0 auto"}})}const HS=Object.freeze(Object.defineProperty({__proto__:null,default:WS,meta:FS},Symbol.toStringTag,{value:"Module"})),VS={id:"membership",title:"会员积分中心",group:"账户",ref:{label:"会员中心",url:"https://vane.dev/examples/sign-in/membership"},pain:"会员中心重在资产与规则透明；碎插件组合成账户视图。",plugs:[{fn:"createPointsBalancePlugin",why:"积分余额醒目展示"},{fn:"createStatRowPlugin",why:"累计天数 / 连签 / 补签次数一横排"},{fn:"createLevelBadgePlugin",why:"当前等级与进度"},{fn:"createRewardPreviewPlugin",why:"积分可兑奖励预告"},{fn:"createRuleExpandPlugin",cfg:"defaultOpen: true",why:"积分规则可折叠展开"}],props:["data={data}","callbacks={callbacks}"],note:"sampleData 已带 level / rules 字段，等级与规则插件直接能渲染。"},GS=F(A,[Nt(),Mt(),nt(),Dn(),Ut({defaultOpen:!0})]);function QS(){const[e,n]=v.useState(!1),t=G(e),r=X({sign:()=>n(!0)});return m.jsx(GS,{data:t,callbacks:r,containerStyle:{maxWidth:460,margin:"0 auto"}})}const XS=Object.freeze(Object.defineProperty({__proto__:null,default:QS,meta:VS},Symbol.toStringTag,{value:"Module"})),KS={id:"social-viral",title:"社交分享裂变",group:"裂变",ref:{label:"社交裂变",url:"https://vane.dev/examples/sign-in/social-viral"},pain:"裂变链路是『签到→分享→邀请→提醒』，单插件无法表达流程；按顺序拼成一张裂变卡。",plugs:[{fn:"createTodayCheckInPlugin",why:"先完成今日签到这一动作"},{fn:"createSharePlugin",cfg:'text: "晒今日签到"',why:"分享得额外奖励的入口"},{fn:"createInvitePlugin",why:"邀请好友，裂变拉新"},{fn:"createRemindPlugin",why:"开启每日提醒，提升留存"},{fn:"createRewardClaimPlugin",why:"分享 / 邀请带来的奖励领取"}],props:["data={data}","callbacks={callbacks}"],note:"share / invite / remind 走各自 callbacks，组合后即一条裂变漏斗。"},YS=F(A,[Nn(),At({text:"晒今日签到"}),Ft(),Bt(),tt()]);function JS(){const[e,n]=v.useState(!1),t=G(e),r=X({sign:()=>n(!0)});return m.jsx(YS,{data:t,callbacks:r,containerStyle:{maxWidth:460,margin:"0 auto"}})}const ZS=Object.freeze(Object.defineProperty({__proto__:null,default:JS,meta:KS},Symbol.toStringTag,{value:"Module"})),qS={id:"full-stack",title:"全功能中台 · 17 插件全量",group:"全集",ref:{label:"组件能力全集",url:"https://vane.dev/examples/sign-in/full"},pain:"想一次性看全部 17 个插件怎么共存——全量装配的压力测试。",plugs:[{fn:"createStreakStatePlugin",why:"头部连签状态"},{fn:"createPointsBalancePlugin",why:"积分余额"},{fn:"createStatRowPlugin",why:"统计横排"},{fn:"createLevelBadgePlugin",why:"等级徽章"},{fn:"createCountdownPlugin",why:"刷新倒计时"},{fn:"createCalendarStripPlugin",why:"连签条"},{fn:"createCalendarGridPlugin",why:"月历网格"},{fn:"createMakeupSlotPlugin",why:"补签入口"},{fn:"createRewardPreviewPlugin",why:"奖励预告"},{fn:"createRewardClaimPlugin",why:"奖励领取"},{fn:"createMilestonePlugin",why:"里程碑"},{fn:"createTodayCheckInPlugin",why:"今日签到 CTA"},{fn:"createSharePlugin",why:"分享"},{fn:"createRemindPlugin",why:"提醒"},{fn:"createInvitePlugin",why:"邀请"},{fn:"createRuleExpandPlugin",why:"规则展开"},{fn:"createRewardHistoryPlugin",why:"领取记录"}],props:["data={data}","callbacks={callbacks}"],note:"五个槽位（header/calendar/rewards/actions/footer）同时承载多个插件，靠 priority 决定共存顺序。"},e1=F(A,[$n(),Nt(),Mt(),nt(),Ot(),qn({showRewardDot:!0}),zt(),et(),Dn(),tt(),Lt(),Nn(),At(),Bt(),Ft(),Ut({defaultOpen:!0}),Lr()]);function n1(){const[e,n]=v.useState(!1),t=G(e),r=X({sign:()=>n(!0)});return m.jsx(e1,{data:t,callbacks:r,containerStyle:{maxWidth:480,margin:"0 auto"}})}const t1=Object.freeze(Object.defineProperty({__proto__:null,default:n1,meta:qS},Symbol.toStringTag,{value:"Module"})),r1=`import React, { useState } from "react";\r
import { SignInCore, withSignInPlugins } from "vane-sign-in";\r
import {\r
  createStreakStatePlugin,\r
  createCalendarStripPlugin,\r
  createRewardPreviewPlugin,\r
  createTodayCheckInPlugin,\r
  createMakeupSlotPlugin,\r
} from "vane-sign-in/custom-plugins";\r
import type { ScenarioMeta } from "./types";\r
import { buildSignInData, buildCallbacks } from "../demos/lib/sampleData";\r
\r
/**\r
 * 01 · 电商签到运营位\r
 *\r
 * 把「连签状态 / 日历条 / 奖励预告 / 今日签到 / 补签」五个原子插件拼成一张运营位卡。\r
 * 单个插件都只解决一件事，但组合后就是电商 App 里最常见的「每日签到弹层」。\r
 */\r
export const meta: ScenarioMeta = {\r
  id: "ecommerce",\r
  title: "电商签到运营位",\r
  group: "运营位",\r
  ref: { label: "电商 App · 签到弹层", url: "https://vane.dev/examples/sign-in/ecommerce" },\r
  pain: "一个按钮的签到太单薄，用户不知道连签能拿什么；把碎插件拼成一张完整运营位卡。",\r
  plugs: [\r
    { fn: "createStreakStatePlugin", why: "头部连签天数 + 最高连签，给连续打卡的用户正反馈" },\r
    {\r
      fn: "createCalendarStripPlugin",\r
      cfg: "showRewardDot: true",\r
      why: "14 天连签条，今天/已签/漏签一眼看清，带奖励的格打点",\r
    },\r
    { fn: "createRewardPreviewPlugin", why: "逐日奖励预告，把『再签 1 天得 50 积分』前置" },\r
    { fn: "createTodayCheckInPlugin", why: "主 CTA：今日签到 / 已签切换" },\r
    { fn: "createMakeupSlotPlugin", why: "漏签用户给补签入口，挽回流失" },\r
  ],\r
  props: ["data={data}", "callbacks={callbacks}"],\r
  note: "五个原子插件，组合后就是一张可直接上线的大促签到卡。",\r
};\r
\r
const Enhanced = withSignInPlugins(SignInCore, [\r
  createStreakStatePlugin(),\r
  createCalendarStripPlugin({ showRewardDot: true }),\r
  createRewardPreviewPlugin(),\r
  createTodayCheckInPlugin(),\r
  createMakeupSlotPlugin(),\r
]);\r
\r
export default function Stage() {\r
  const [signed, setSigned] = useState(false);\r
  const data = buildSignInData(signed);\r
  const callbacks = buildCallbacks({ sign: () => setSigned(true) });\r
  return (\r
    <Enhanced\r
      data={data}\r
      callbacks={callbacks}\r
      containerStyle={{ maxWidth: 460, margin: "0 auto" }}\r
    />\r
  );\r
}\r
`,i1=`import React, { useState } from "react";\r
import { SignInCore, withSignInPlugins } from "vane-sign-in";\r
import {\r
  createStreakStatePlugin,\r
  createCalendarGridPlugin,\r
  createMilestonePlugin,\r
  createLevelBadgePlugin,\r
  createRewardClaimPlugin,\r
  createCountdownPlugin,\r
} from "vane-sign-in/custom-plugins";\r
import type { ScenarioMeta } from "./types";\r
import { buildSignInData, buildCallbacks } from "../demos/lib/sampleData";\r
\r
/**\r
 * 02 · 游戏连签激励\r
 *\r
 * 游戏侧要的是「成长曲线 + 紧迫感」。连签天数、月历网格、里程碑、等级徽章、\r
 * 奖励领取、下次刷新倒计时六个插件拼成一张「每日任务」面板。\r
 */\r
export const meta: ScenarioMeta = {\r
  id: "game-streak",\r
  title: "游戏连签激励",\r
  group: "激励",\r
  ref: { label: "游戏 · 每日任务", url: "https://vane.dev/examples/sign-in/game-streak" },\r
  pain: "游戏侧要的是成长曲线与紧迫感，单插件撑不起；用 6 个插件拼出『每日任务』面板。",\r
  plugs: [\r
    { fn: "createStreakStatePlugin", why: "连签天数 + 最高连签，冲榜动机" },\r
    { fn: "createCalendarGridPlugin", why: "月历网格，看整月进度" },\r
    { fn: "createMilestonePlugin", why: "里程碑节点（如 7/30 天）给阶段目标" },\r
    { fn: "createLevelBadgePlugin", why: "会员等级徽章，成长感" },\r
    { fn: "createRewardClaimPlugin", why: "达标奖励一键领取" },\r
    { fn: "createCountdownPlugin", why: "距下次刷新倒计时，制造紧迫" },\r
  ],\r
  props: ["data={data}", "callbacks={callbacks}"],\r
  note: "倒计时依赖数据里的 nextResetAt，样本数据已带该字段。",\r
};\r
\r
const Enhanced = withSignInPlugins(SignInCore, [\r
  createStreakStatePlugin(),\r
  createCalendarGridPlugin(),\r
  createMilestonePlugin(),\r
  createLevelBadgePlugin(),\r
  createRewardClaimPlugin(),\r
  createCountdownPlugin(),\r
]);\r
\r
export default function Stage() {\r
  const [signed, setSigned] = useState(false);\r
  const data = buildSignInData(signed);\r
  const callbacks = buildCallbacks({ sign: () => setSigned(true) });\r
  return (\r
    <Enhanced\r
      data={data}\r
      callbacks={callbacks}\r
      containerStyle={{ maxWidth: 460, margin: "0 auto" }}\r
    />\r
  );\r
}\r
`,l1=`import React, { useState } from "react";\r
import { SignInCore, withSignInPlugins } from "vane-sign-in";\r
import {\r
  createPointsBalancePlugin,\r
  createStatRowPlugin,\r
  createLevelBadgePlugin,\r
  createRewardPreviewPlugin,\r
  createRuleExpandPlugin,\r
} from "vane-sign-in/custom-plugins";\r
import type { ScenarioMeta } from "./types";\r
import { buildSignInData, buildCallbacks } from "../demos/lib/sampleData";\r
\r
/**\r
 * 03 · 会员积分中心\r
 *\r
 * 会员中心重在「资产 + 规则透明」。积分余额、统计横排、等级徽章、积分奖励预告、\r
 * 规则折叠五个插件组合成账户视图。\r
 */\r
export const meta: ScenarioMeta = {\r
  id: "membership",\r
  title: "会员积分中心",\r
  group: "账户",\r
  ref: { label: "会员中心", url: "https://vane.dev/examples/sign-in/membership" },\r
  pain: "会员中心重在资产与规则透明；碎插件组合成账户视图。",\r
  plugs: [\r
    { fn: "createPointsBalancePlugin", why: "积分余额醒目展示" },\r
    { fn: "createStatRowPlugin", why: "累计天数 / 连签 / 补签次数一横排" },\r
    { fn: "createLevelBadgePlugin", why: "当前等级与进度" },\r
    { fn: "createRewardPreviewPlugin", why: "积分可兑奖励预告" },\r
    { fn: "createRuleExpandPlugin", cfg: "defaultOpen: true", why: "积分规则可折叠展开" },\r
  ],\r
  props: ["data={data}", "callbacks={callbacks}"],\r
  note: "sampleData 已带 level / rules 字段，等级与规则插件直接能渲染。",\r
};\r
\r
const Enhanced = withSignInPlugins(SignInCore, [\r
  createPointsBalancePlugin(),\r
  createStatRowPlugin(),\r
  createLevelBadgePlugin(),\r
  createRewardPreviewPlugin(),\r
  createRuleExpandPlugin({ defaultOpen: true }),\r
]);\r
\r
export default function Stage() {\r
  const [signed, setSigned] = useState(false);\r
  const data = buildSignInData(signed);\r
  const callbacks = buildCallbacks({ sign: () => setSigned(true) });\r
  return (\r
    <Enhanced\r
      data={data}\r
      callbacks={callbacks}\r
      containerStyle={{ maxWidth: 460, margin: "0 auto" }}\r
    />\r
  );\r
}\r
`,o1=`import React, { useState } from "react";\r
import { SignInCore, withSignInPlugins } from "vane-sign-in";\r
import {\r
  createTodayCheckInPlugin,\r
  createSharePlugin,\r
  createInvitePlugin,\r
  createRemindPlugin,\r
  createRewardClaimPlugin,\r
} from "vane-sign-in/custom-plugins";\r
import type { ScenarioMeta } from "./types";\r
import { buildSignInData, buildCallbacks } from "../demos/lib/sampleData";\r
\r
/**\r
 * 04 · 社交分享裂变\r
 *\r
 * 裂变链路是「签到 → 分享 → 邀请 → 提醒」。TodayCheckIn 先完成动作，Share 晒单、\r
 * Invite 拉新、Remind 留存、RewardClaim 领取裂变奖励 —— 单插件无法表达流程，\r
 * 按顺序拼成一张裂变卡。\r
 */\r
export const meta: ScenarioMeta = {\r
  id: "social-viral",\r
  title: "社交分享裂变",\r
  group: "裂变",\r
  ref: { label: "社交裂变", url: "https://vane.dev/examples/sign-in/social-viral" },\r
  pain: "裂变链路是『签到→分享→邀请→提醒』，单插件无法表达流程；按顺序拼成一张裂变卡。",\r
  plugs: [\r
    { fn: "createTodayCheckInPlugin", why: "先完成今日签到这一动作" },\r
    { fn: "createSharePlugin", cfg: 'text: "晒今日签到"', why: "分享得额外奖励的入口" },\r
    { fn: "createInvitePlugin", why: "邀请好友，裂变拉新" },\r
    { fn: "createRemindPlugin", why: "开启每日提醒，提升留存" },\r
    { fn: "createRewardClaimPlugin", why: "分享 / 邀请带来的奖励领取" },\r
  ],\r
  props: ["data={data}", "callbacks={callbacks}"],\r
  note: "share / invite / remind 走各自 callbacks，组合后即一条裂变漏斗。",\r
};\r
\r
const Enhanced = withSignInPlugins(SignInCore, [\r
  createTodayCheckInPlugin(),\r
  createSharePlugin({ text: "晒今日签到" }),\r
  createInvitePlugin(),\r
  createRemindPlugin(),\r
  createRewardClaimPlugin(),\r
]);\r
\r
export default function Stage() {\r
  const [signed, setSigned] = useState(false);\r
  const data = buildSignInData(signed);\r
  const callbacks = buildCallbacks({ sign: () => setSigned(true) });\r
  return (\r
    <Enhanced\r
      data={data}\r
      callbacks={callbacks}\r
      containerStyle={{ maxWidth: 460, margin: "0 auto" }}\r
    />\r
  );\r
}\r
`,a1=`import React, { useState } from "react";\r
import { SignInCore, withSignInPlugins } from "vane-sign-in";\r
import {\r
  createStreakStatePlugin,\r
  createPointsBalancePlugin,\r
  createStatRowPlugin,\r
  createLevelBadgePlugin,\r
  createCountdownPlugin,\r
  createCalendarStripPlugin,\r
  createCalendarGridPlugin,\r
  createMakeupSlotPlugin,\r
  createRewardPreviewPlugin,\r
  createRewardClaimPlugin,\r
  createMilestonePlugin,\r
  createTodayCheckInPlugin,\r
  createSharePlugin,\r
  createRemindPlugin,\r
  createInvitePlugin,\r
  createRuleExpandPlugin,\r
  createRewardHistoryPlugin,\r
} from "vane-sign-in/custom-plugins";\r
import type { ScenarioMeta } from "./types";\r
import { buildSignInData, buildCallbacks } from "../demos/lib/sampleData";\r
\r
/**\r
 * 05 · 全功能中台（17 插件全量）\r
 *\r
 * 一次性把 17 个插件全量装配，展示完整能力边界，也是组合冲突 / 槽位共存的压力测试。\r
 */\r
export const meta: ScenarioMeta = {\r
  id: "full-stack",\r
  title: "全功能中台 · 17 插件全量",\r
  group: "全集",\r
  ref: { label: "组件能力全集", url: "https://vane.dev/examples/sign-in/full" },\r
  pain: "想一次性看全部 17 个插件怎么共存——全量装配的压力测试。",\r
  plugs: [\r
    { fn: "createStreakStatePlugin", why: "头部连签状态" },\r
    { fn: "createPointsBalancePlugin", why: "积分余额" },\r
    { fn: "createStatRowPlugin", why: "统计横排" },\r
    { fn: "createLevelBadgePlugin", why: "等级徽章" },\r
    { fn: "createCountdownPlugin", why: "刷新倒计时" },\r
    { fn: "createCalendarStripPlugin", why: "连签条" },\r
    { fn: "createCalendarGridPlugin", why: "月历网格" },\r
    { fn: "createMakeupSlotPlugin", why: "补签入口" },\r
    { fn: "createRewardPreviewPlugin", why: "奖励预告" },\r
    { fn: "createRewardClaimPlugin", why: "奖励领取" },\r
    { fn: "createMilestonePlugin", why: "里程碑" },\r
    { fn: "createTodayCheckInPlugin", why: "今日签到 CTA" },\r
    { fn: "createSharePlugin", why: "分享" },\r
    { fn: "createRemindPlugin", why: "提醒" },\r
    { fn: "createInvitePlugin", why: "邀请" },\r
    { fn: "createRuleExpandPlugin", why: "规则展开" },\r
    { fn: "createRewardHistoryPlugin", why: "领取记录" },\r
  ],\r
  props: ["data={data}", "callbacks={callbacks}"],\r
  note: "五个槽位（header/calendar/rewards/actions/footer）同时承载多个插件，靠 priority 决定共存顺序。",\r
};\r
\r
const Enhanced = withSignInPlugins(SignInCore, [\r
  createStreakStatePlugin(),\r
  createPointsBalancePlugin(),\r
  createStatRowPlugin(),\r
  createLevelBadgePlugin(),\r
  createCountdownPlugin(),\r
  createCalendarStripPlugin({ showRewardDot: true }),\r
  createCalendarGridPlugin(),\r
  createMakeupSlotPlugin(),\r
  createRewardPreviewPlugin(),\r
  createRewardClaimPlugin(),\r
  createMilestonePlugin(),\r
  createTodayCheckInPlugin(),\r
  createSharePlugin(),\r
  createRemindPlugin(),\r
  createInvitePlugin(),\r
  createRuleExpandPlugin({ defaultOpen: true }),\r
  createRewardHistoryPlugin(),\r
]);\r
\r
export default function Stage() {\r
  const [signed, setSigned] = useState(false);\r
  const data = buildSignInData(signed);\r
  const callbacks = buildCallbacks({ sign: () => setSigned(true) });\r
  return (\r
    <Enhanced\r
      data={data}\r
      callbacks={callbacks}\r
      containerStyle={{ maxWidth: 480, margin: "0 auto" }}\r
    />\r
  );\r
}\r
`,s1=Object.assign({"./01-ecommerce.tsx":BS,"./02-game-streak.tsx":HS,"./03-membership.tsx":XS,"./04-social-viral.tsx":ZS,"./05-full-stack.tsx":t1}),u1=Object.assign({"./01-ecommerce.tsx":r1,"./02-game-streak.tsx":i1,"./03-membership.tsx":l1,"./04-social-viral.tsx":o1,"./05-full-stack.tsx":a1}),c1=e=>e.replace(/^\.\//,""),Wi=Object.entries(s1).map(([e,n])=>{const t=c1(e);return{meta:n.meta,Component:n.default,file:t,source:u1[e]??""}}).sort((e,n)=>e.file.localeCompare(n.file)),C1=Wi.reduce((e,n)=>(e.includes(n.meta.group)||e.push(n.meta.group),e),[]),E1=Array.from(new Set(Wi.flatMap(e=>e.meta.plugs.map(n=>n.fn)))).sort(),d1=v.lazy(()=>Oa(()=>import("./HomePage-B0KzkKBx.js"),[],import.meta.url).then(e=>({default:e.HomePage}))),f1=v.lazy(()=>Oa(()=>import("./PluginsPage-BURRe1hA.js"),[],import.meta.url).then(e=>({default:e.PluginsPage}))),p1=v.lazy(()=>Oa(()=>import("./ScenariosPage-RQF9rFl6.js"),[],import.meta.url).then(e=>({default:e.ScenariosPage}))),g1={pkg:"vane-sign-in",brand:"S",subtitle:"每日签到 / plugin index",nav:[{to:"/",label:"总览",hint:"overview"},{to:"/plugins",label:"插件工坊",hint:`${Tu.length} plugins`},{to:"/scenarios",label:"场景示例",hint:`${Wi.length} plates`}],routes:[{path:"/",element:m.jsx(d1,{})},{path:"/plugins",element:m.jsx(f1,{})},{path:"/scenarios",element:m.jsx(p1,{})}],crumb:e=>e.startsWith("/plugins")?"workshop · 插件工坊":e.startsWith("/scenarios")?"plates · 场景示例":"index · 总览",demos:{label:"逐项示例",groups:cS.map(e=>({key:e,label:lf[e].label})),entries:Mo,detail:(e,n)=>m.jsx(hS,{entry:e,order:n})},footer:[`${Tu.length} PLUGINS · ${Wi.length} PLATES`,`${Mo.length} DEMOS · 插件索引`]};function m1(){return m.jsx(Wm,{config:g1})}const h1=F(A,[$n(),qn(),Dn(),et(),Nn(),Nt(),Mt(),nt(),Ot(),zt(),tt(),Lt(),At(),Bt(),Ft(),Ut(),Lr()]),Oo=()=>new Promise(e=>setTimeout(e,0)),y1=async(e,n=60)=>{for(let t=0;t<n&&!e();t++)await Oo()};async function v1(e){const n=document.createElement("div");n.style.cssText="position:fixed;left:0;top:0;width:420px;background:#fff",document.body.appendChild(n);const t=Ud(n);return Fi.flushSync(()=>t.render(e)),await Oo(),{host:n,root:t,q:r=>n.querySelector(r),qq:r=>n.querySelectorAll(r),click:async r=>{const i=n.querySelector(r);if(!i)throw new Error(`找不到元素 ${r}`);Fi.flushSync(()=>i.click()),await Oo()}}}function S1(e){const t=Array.from(e.querySelectorAll("*")).map(a=>({e:a,r:a.getBoundingClientRect()}));if(!t.some(a=>a.r.width>0||a.r.height>0))return{checked:0,problems:[]};const i=[];let l=0;const o=e.getBoundingClientRect();for(const{r:a}of t)l+=1,(a.width<0||a.height<0)&&i.push("negative-size"),(a.left<-1||a.top<-1)&&i.push("negative-coord"),(a.right>o.right+1||a.bottom>o.bottom+1)&&i.push("overflow"),(a.width===0||a.height===0)&&i.push("zero-size");return e.scrollHeight>e.clientHeight+1&&i.push("scroll-overflow"),{checked:l,problems:Array.from(new Set(i))}}async function x1(){const e=[];let n=0;const t=(l,o)=>{n+=1,document.title=`SELFTEST RUNNING ${n}`,o||e.push(l)},r={signed:!1,claimed:null,makeup:null};function i(){const[l,o]=v.useState(!1),a=G(l),s={sign:()=>{r.signed=!0,o(!0)},claim:u=>{r.claimed=u},makeup:u=>{r.makeup=u},share:()=>{},remind:()=>{},invite:()=>{}};return m.jsx(h1,{data:a,callbacks:s,containerStyle:{maxWidth:480}})}{const l=await v1(m.jsx(i,{}));t("根容器渲染 si-root",!!l.q('[data-testid="si-root"]'));const o=l.q('[data-testid="si-streak"]');t("连签数渲染（未签 streak=7）",!!o&&(o.textContent??"").includes("7")&&(o.textContent??"").includes("天连签"));const a=l.q('[data-testid="si-checkin-btn"]');t("今日签到按钮：未签态存在",!!a&&a.dataset.signed==="false"),t("今日签到按钮：未签文本「立即签到」",((a==null?void 0:a.textContent)??"")==="立即签到");const s=l.q('[data-testid="si-makeup-btn"]');t("补签入口存在且未禁用",!!s&&s.dataset.disabled==="false"&&s.disabled===!1),t("补签文案含「补签」",((s==null?void 0:s.textContent)??"").includes("补签")),t("未达领奖天数时无领取按钮",!l.q('[data-testid="si-claim-btn"]')),await l.click('[data-testid="si-checkin-btn"]'),await y1(()=>{var y;return((y=l.q('[data-testid="si-checkin-btn"]'))==null?void 0:y.dataset.signed)==="true"});const u=l.q('[data-testid="si-checkin-btn"]');t("签到后：按钮态 signed=true",(u==null?void 0:u.dataset.signed)==="true"),t("签到后：按钮禁用",(u==null?void 0:u.disabled)===!0),t("签到后：文案「今日已签 ✓」",((u==null?void 0:u.textContent)??"").includes("今日已签"));const f=l.q('[data-testid="si-streak"]');t("签到后：连签数更新为 8",!!f&&(f.textContent??"").includes("8")),t("签到回调被触发",r.signed===!0);const c=l.q('[data-testid="si-claim-btn"]');t("达标后：出现领取按钮",!!c&&c.dataset.day==="8"),c&&(await l.click('[data-testid="si-claim-btn"]'),t("领取回调被触发且 day=8",r.claimed===8)),await l.click('[data-testid="si-makeup-btn"]'),t("补签回调被触发且日期=2026-10-09",r.makeup==="2026-10-09");const p=S1(l.host);t("几何体检：0 问题（happy-dom 无布局引擎时自动跳过）",p.problems.length===0&&(p.checked===0||p.checked>=2)),Fi.flushSync(()=>l.root.unmount()),l.host.remove()}return{total:n,passed:n-e.length,failed:e}}async function w1(){document.title="SELFTEST RUNNING";try{const e=await x1();document.title=e.failed.length===0?`SELFTEST OK ${e.passed}/${e.total}`:`SELFTEST FAIL ${e.passed}/${e.total} :: ${e.failed.join(" | ")}`}catch(e){document.title=`SELFTEST ERROR :: ${e.message}`}}Ol.createRoot(document.getElementById("root")).render(m.jsx(m1,{}));typeof location<"u"&&location.search.includes("selftest=1")&&w1();export{mS as C,Mo as D,Eu as G,Tu as P,Wi as S,E1 as U,_1 as a,P1 as b,X as c,G as d,A as e,C1 as f,m as j,v as r,F as w};
