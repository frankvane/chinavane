const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./HomePage-08ohE39Q.js","./index-Cujxpxm5.js","./catalog-zlOVewXD.js","./catalog-schftO3X.js","./PluginsPage-vy_dzWrE.js","./ScenariosPage-vebfdlGd.js","./LayoutsPage-CAO52srq.js"])))=>i.map(i=>d[i]);
var ht=Object.defineProperty;var ft=(e,n,o)=>n in e?ht(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o;var Te=(e,n,o)=>ft(e,typeof n!="symbol"?n+"":n,o);import{r as b,R as yt,j as t,a as R,w as un,C as Z,s as j,b as W,B as k,o as bt,c as xt,d as vt,e as A,f as Oe,i as Ct,P,g as Pt}from"./index-Cujxpxm5.js";/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function J(){return J=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var r in o)({}).hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},J.apply(null,arguments)}var M;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(M||(M={}));const Ne="popstate";function wt(e){e===void 0&&(e={});function n(i,l){let{pathname:a="/",search:s="",hash:c=""}=z(i.location.hash.substr(1));return!a.startsWith("/")&&!a.startsWith(".")&&(a="/"+a),ge("",{pathname:a,search:s,hash:c},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function o(i,l){let a=i.document.querySelector("base"),s="";if(a&&a.getAttribute("href")){let c=i.location.href,u=c.indexOf("#");s=u===-1?c:c.slice(0,u)}return s+"#"+(typeof l=="string"?l:oe(l))}function r(i,l){ve(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(l)+")")}return St(n,o,r,e)}function O(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function ve(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function kt(){return Math.random().toString(36).substr(2,8)}function Ae(e,n){return{usr:e.state,key:e.key,idx:n}}function ge(e,n,o,r){return o===void 0&&(o=null),J({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?z(n):n,{state:o,key:n&&n.key||r||kt()})}function oe(e){let{pathname:n="/",search:o="",hash:r=""}=e;return o&&o!=="?"&&(n+=o.charAt(0)==="?"?o:"?"+o),r&&r!=="#"&&(n+=r.charAt(0)==="#"?r:"#"+r),n}function z(e){let n={};if(e){let o=e.indexOf("#");o>=0&&(n.hash=e.substr(o),e=e.substr(0,o));let r=e.indexOf("?");r>=0&&(n.search=e.substr(r),e=e.substr(0,r)),e&&(n.pathname=e)}return n}function St(e,n,o,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:l=!1}=r,a=i.history,s=M.Pop,c=null,u=d();u==null&&(u=0,a.replaceState(J({},a.state,{idx:u}),""));function d(){return(a.state||{idx:null}).idx}function p(){s=M.Pop;let m=d(),x=m==null?null:m-u;u=m,c&&c({action:s,location:y.location,delta:x})}function h(m,x){s=M.Push;let C=ge(y.location,m,x);o&&o(C,m),u=d()+1;let v=Ae(C,u),S=y.createHref(C);try{a.pushState(v,"",S)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;i.location.assign(S)}l&&c&&c({action:s,location:y.location,delta:1})}function g(m,x){s=M.Replace;let C=ge(y.location,m,x);o&&o(C,m),u=d();let v=Ae(C,u),S=y.createHref(C);a.replaceState(v,"",S),l&&c&&c({action:s,location:y.location,delta:0})}function f(m){let x=i.location.origin!=="null"?i.location.origin:i.location.href,C=typeof m=="string"?m:oe(m);return C=C.replace(/ $/,"%20"),O(x,"No window.location.(origin|href) available to create URL for href: "+C),new URL(C,x)}let y={get action(){return s},get location(){return e(i,a)},listen(m){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(Ne,p),c=m,()=>{i.removeEventListener(Ne,p),c=null}},createHref(m){return n(i,m)},createURL:f,encodeLocation(m){let x=f(m);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:h,replace:g,go(m){return a.go(m)}};return y}var _e;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(_e||(_e={}));function jt(e,n,o){return o===void 0&&(o="/"),$t(e,n,o)}function $t(e,n,o,r){let i=typeof n=="string"?z(n):n,l=Ce(i.pathname||"/",o);if(l==null)return null;let a=dn(e);It(a);let s=null,c=Ut(l);for(let u=0;s==null&&u<a.length;++u)s=Et(a[u],c);return s}function dn(e,n,o,r){n===void 0&&(n=[]),o===void 0&&(o=[]),r===void 0&&(r="");let i=(l,a,s)=>{let c={relativePath:s===void 0?l.path||"":s,caseSensitive:l.caseSensitive===!0,childrenIndex:a,route:l};c.relativePath.startsWith("/")&&(O(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=L([r,c.relativePath]),d=o.concat(c);l.children&&l.children.length>0&&(O(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),dn(l.children,n,d,u)),!(l.path==null&&!l.index)&&n.push({path:u,score:_t(u,l.index),routesMeta:d})};return e.forEach((l,a)=>{var s;if(l.path===""||!((s=l.path)!=null&&s.includes("?")))i(l,a);else for(let c of pn(l.path))i(l,a,c)}),n}function pn(e){let n=e.split("/");if(n.length===0)return[];let[o,...r]=n,i=o.endsWith("?"),l=o.replace(/\?$/,"");if(r.length===0)return i?[l,""]:[l];let a=pn(r.join("/")),s=[];return s.push(...a.map(c=>c===""?l:[l,c].join("/"))),i&&s.push(...a),s.map(c=>e.startsWith("/")&&c===""?"/":c)}function It(e){e.sort((n,o)=>n.score!==o.score?o.score-n.score:Dt(n.routesMeta.map(r=>r.childrenIndex),o.routesMeta.map(r=>r.childrenIndex)))}const Rt=/^:[\w-]+$/,Bt=3,Tt=2,Ot=1,Nt=10,At=-2,De=e=>e==="*";function _t(e,n){let o=e.split("/"),r=o.length;return o.some(De)&&(r+=At),n&&(r+=Tt),o.filter(i=>!De(i)).reduce((i,l)=>i+(Rt.test(l)?Bt:l===""?Ot:Nt),r)}function Dt(e,n){return e.length===n.length&&e.slice(0,-1).every((r,i)=>r===n[i])?e[e.length-1]-n[n.length-1]:0}function Et(e,n,o){let{routesMeta:r}=e,i={},l="/",a=[];for(let s=0;s<r.length;++s){let c=r[s],u=s===r.length-1,d=l==="/"?n:n.slice(l.length)||"/",p=Mt({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},d),h=c.route;if(!p)return null;Object.assign(i,p.params),a.push({params:i,pathname:L([l,p.pathname]),pathnameBase:Kt(L([l,p.pathnameBase])),route:h}),p.pathnameBase!=="/"&&(l=L([l,p.pathnameBase]))}return a}function Mt(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[o,r]=Lt(e.path,e.caseSensitive,e.end),i=n.match(o);if(!i)return null;let l=i[0],a=l.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((u,d,p)=>{let{paramName:h,isOptional:g}=d;if(h==="*"){let y=s[p]||"";a=l.slice(0,l.length-y.length).replace(/(.)\/+$/,"$1")}const f=s[p];return g&&!f?u[h]=void 0:u[h]=(f||"").replace(/%2F/g,"/"),u},{}),pathname:l,pathnameBase:a,pattern:e}}function Lt(e,n,o){n===void 0&&(n=!1),o===void 0&&(o=!0),ve(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,s,c)=>(r.push({paramName:s,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,n?void 0:"i"),r]}function Ut(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return ve(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function Ce(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let o=n.endsWith("/")?n.length-1:n.length,r=e.charAt(o);return r&&r!=="/"?null:e.slice(o)||"/"}function Ft(e,n){n===void 0&&(n="/");let{pathname:o,search:r="",hash:i=""}=typeof e=="string"?z(e):e,l;return o?(o=gn(o),o.startsWith("/")?l=Ee(o.substring(1),"/"):l=Ee(o,n)):l=n,{pathname:l,search:Vt(r),hash:Wt(i)}}function Ee(e,n){let o=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?o.length>1&&o.pop():i!=="."&&o.push(i)}),o.length>1?o.join("/"):"/"}function ue(e,n,o,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+o+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function zt(e){return e.filter((n,o)=>o===0||n.route.path&&n.route.path.length>0)}function Pe(e,n){let o=zt(e);return n?o.map((r,i)=>i===o.length-1?r.pathname:r.pathnameBase):o.map(r=>r.pathnameBase)}function we(e,n,o,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=z(e):(i=J({},e),O(!i.pathname||!i.pathname.includes("?"),ue("?","pathname","search",i)),O(!i.pathname||!i.pathname.includes("#"),ue("#","pathname","hash",i)),O(!i.search||!i.search.includes("#"),ue("#","search","hash",i)));let l=e===""||i.pathname==="",a=l?"/":i.pathname,s;if(a==null)s=o;else{let p=n.length-1;if(!r&&a.startsWith("..")){let h=a.split("/");for(;h[0]==="..";)h.shift(),p-=1;i.pathname=h.join("/")}s=p>=0?n[p]:"/"}let c=Ft(i,s),u=a&&a!=="/"&&a.endsWith("/"),d=(l||a===".")&&o.endsWith("/");return!c.pathname.endsWith("/")&&(u||d)&&(c.pathname+="/"),c}const gn=e=>e.replace(/\/\/+/g,"/"),L=e=>gn(e.join("/")),Kt=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Vt=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Wt=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Ht(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const mn=["post","put","patch","delete"];new Set(mn);const Gt=["get",...mn];new Set(Gt);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function X(){return X=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var r in o)({}).hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},X.apply(null,arguments)}const ke=b.createContext(null),qt=b.createContext(null),U=b.createContext(null),ae=b.createContext(null),D=b.createContext({outlet:null,matches:[],isDataRoute:!1}),hn=b.createContext(null);function Yt(e,n){let{relative:o}=n===void 0?{}:n;H()||O(!1);let{basename:r,navigator:i}=b.useContext(U),{hash:l,pathname:a,search:s}=bn(e,{relative:o}),c=a;return r!=="/"&&(c=a==="/"?r:L([r,a])),i.createHref({pathname:c,search:s,hash:l})}function H(){return b.useContext(ae)!=null}function G(){return H()||O(!1),b.useContext(ae).location}function fn(e){b.useContext(U).static||b.useLayoutEffect(e)}function yn(){let{isDataRoute:e}=b.useContext(D);return e?cr():Qt()}function Qt(){H()||O(!1);let e=b.useContext(ke),{basename:n,future:o,navigator:r}=b.useContext(U),{matches:i}=b.useContext(D),{pathname:l}=G(),a=JSON.stringify(Pe(i,o.v7_relativeSplatPath)),s=b.useRef(!1);return fn(()=>{s.current=!0}),b.useCallback(function(u,d){if(d===void 0&&(d={}),!s.current)return;if(typeof u=="number"){r.go(u);return}let p=we(u,JSON.parse(a),l,d.relative==="path");e==null&&n!=="/"&&(p.pathname=p.pathname==="/"?n:L([n,p.pathname])),(d.replace?r.replace:r.push)(p,d.state,d)},[n,r,a,l,e])}function Jt(){let{matches:e}=b.useContext(D),n=e[e.length-1];return n?n.params:{}}function bn(e,n){let{relative:o}=n===void 0?{}:n,{future:r}=b.useContext(U),{matches:i}=b.useContext(D),{pathname:l}=G(),a=JSON.stringify(Pe(i,r.v7_relativeSplatPath));return b.useMemo(()=>we(e,JSON.parse(a),l,o==="path"),[e,a,l,o])}function Xt(e,n){return Zt(e,n)}function Zt(e,n,o,r){H()||O(!1);let{navigator:i}=b.useContext(U),{matches:l}=b.useContext(D),a=l[l.length-1],s=a?a.params:{};a&&a.pathname;let c=a?a.pathnameBase:"/";a&&a.route;let u=G(),d;if(n){var p;let m=typeof n=="string"?z(n):n;c==="/"||(p=m.pathname)!=null&&p.startsWith(c)||O(!1),d=m}else d=u;let h=d.pathname||"/",g=h;if(c!=="/"){let m=c.replace(/^\//,"").split("/");g="/"+h.replace(/^\//,"").split("/").slice(m.length).join("/")}let f=jt(e,{pathname:g}),y=or(f&&f.map(m=>Object.assign({},m,{params:Object.assign({},s,m.params),pathname:L([c,i.encodeLocation?i.encodeLocation(m.pathname).pathname:m.pathname]),pathnameBase:m.pathnameBase==="/"?c:L([c,i.encodeLocation?i.encodeLocation(m.pathnameBase).pathname:m.pathnameBase])})),l,o,r);return n&&y?b.createElement(ae.Provider,{value:{location:X({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:M.Pop}},y):y}function er(){let e=lr(),n=Ht(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),o=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},n),o?b.createElement("pre",{style:i},o):null,null)}const nr=b.createElement(er,null);class tr extends b.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,o){return o.location!==n.location||o.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:o.error,location:o.location,revalidation:n.revalidation||o.revalidation}}componentDidCatch(n,o){console.error("React Router caught the following error during render",n,o)}render(){return this.state.error!==void 0?b.createElement(D.Provider,{value:this.props.routeContext},b.createElement(hn.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function rr(e){let{routeContext:n,match:o,children:r}=e,i=b.useContext(ke);return i&&i.static&&i.staticContext&&(o.route.errorElement||o.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=o.route.id),b.createElement(D.Provider,{value:n},r)}function or(e,n,o,r){var i;if(n===void 0&&(n=[]),o===void 0&&(o=null),r===void 0&&(r=null),e==null){var l;if(!o)return null;if(o.errors)e=o.matches;else if((l=r)!=null&&l.v7_partialHydration&&n.length===0&&!o.initialized&&o.matches.length>0)e=o.matches;else return null}let a=e,s=(i=o)==null?void 0:i.errors;if(s!=null){let d=a.findIndex(p=>p.route.id&&(s==null?void 0:s[p.route.id])!==void 0);d>=0||O(!1),a=a.slice(0,Math.min(a.length,d+1))}let c=!1,u=-1;if(o&&r&&r.v7_partialHydration)for(let d=0;d<a.length;d++){let p=a[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(u=d),p.route.id){let{loaderData:h,errors:g}=o,f=p.route.loader&&h[p.route.id]===void 0&&(!g||g[p.route.id]===void 0);if(p.route.lazy||f){c=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}}return a.reduceRight((d,p,h)=>{let g,f=!1,y=null,m=null;o&&(g=s&&p.route.id?s[p.route.id]:void 0,y=p.route.errorElement||nr,c&&(u<0&&h===0?(ur("route-fallback"),f=!0,m=null):u===h&&(f=!0,m=p.route.hydrateFallbackElement||null)));let x=n.concat(a.slice(0,h+1)),C=()=>{let v;return g?v=y:f?v=m:p.route.Component?v=b.createElement(p.route.Component,null):p.route.element?v=p.route.element:v=d,b.createElement(rr,{match:p,routeContext:{outlet:d,matches:x,isDataRoute:o!=null},children:v})};return o&&(p.route.ErrorBoundary||p.route.errorElement||h===0)?b.createElement(tr,{location:o.location,revalidation:o.revalidation,component:y,error:g,children:C(),routeContext:{outlet:null,matches:x,isDataRoute:!0}}):C()},null)}var xn=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(xn||{}),vn=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(vn||{});function ir(e){let n=b.useContext(ke);return n||O(!1),n}function sr(e){let n=b.useContext(qt);return n||O(!1),n}function ar(e){let n=b.useContext(D);return n||O(!1),n}function Cn(e){let n=ar(),o=n.matches[n.matches.length-1];return o.route.id||O(!1),o.route.id}function lr(){var e;let n=b.useContext(hn),o=sr(),r=Cn();return n!==void 0?n:(e=o.errors)==null?void 0:e[r]}function cr(){let{router:e}=ir(xn.UseNavigateStable),n=Cn(vn.UseNavigateStable),o=b.useRef(!1);return fn(()=>{o.current=!0}),b.useCallback(function(i,l){l===void 0&&(l={}),o.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,X({fromRouteId:n},l)))},[e,n])}const Me={};function ur(e,n,o){Me[e]||(Me[e]=!0)}function dr(e,n){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function me(e){let{to:n,replace:o,state:r,relative:i}=e;H()||O(!1);let{future:l,static:a}=b.useContext(U),{matches:s}=b.useContext(D),{pathname:c}=G(),u=yn(),d=we(n,Pe(s,l.v7_relativeSplatPath),c,i==="path"),p=JSON.stringify(d);return b.useEffect(()=>u(JSON.parse(p),{replace:o,state:r,relative:i}),[u,p,i,o,r]),null}function Q(e){O(!1)}function pr(e){let{basename:n="/",children:o=null,location:r,navigationType:i=M.Pop,navigator:l,static:a=!1,future:s}=e;H()&&O(!1);let c=n.replace(/^\/*/,"/"),u=b.useMemo(()=>({basename:c,navigator:l,static:a,future:X({v7_relativeSplatPath:!1},s)}),[c,s,l,a]);typeof r=="string"&&(r=z(r));let{pathname:d="/",search:p="",hash:h="",state:g=null,key:f="default"}=r,y=b.useMemo(()=>{let m=Ce(d,c);return m==null?null:{location:{pathname:m,search:p,hash:h,state:g,key:f},navigationType:i}},[c,d,p,h,g,f,i]);return y==null?null:b.createElement(U.Provider,{value:u},b.createElement(ae.Provider,{children:o,value:y}))}function gr(e){let{children:n,location:o}=e;return Xt(he(n),o)}new Promise(()=>{});function he(e,n){n===void 0&&(n=[]);let o=[];return b.Children.forEach(e,(r,i)=>{if(!b.isValidElement(r))return;let l=[...n,i];if(r.type===b.Fragment){o.push.apply(o,he(r.props.children,l));return}r.type!==Q&&O(!1),!r.props.index||!r.props.children||O(!1);let a={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=he(r.props.children,l)),o.push(a)}),o}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fe(){return fe=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var r in o)({}).hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},fe.apply(null,arguments)}function mr(e,n){if(e==null)return{};var o={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(n.indexOf(r)!==-1)continue;o[r]=e[r]}return o}function hr(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function fr(e,n){return e.button===0&&(!n||n==="_self")&&!hr(e)}const yr=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],br="6";try{window.__reactRouterVersion=br}catch{}const xr="startTransition",Le=yt[xr];function vr(e){let{basename:n,children:o,future:r,window:i}=e,l=b.useRef();l.current==null&&(l.current=wt({window:i,v5Compat:!0}));let a=l.current,[s,c]=b.useState({action:a.action,location:a.location}),{v7_startTransition:u}=r||{},d=b.useCallback(p=>{u&&Le?Le(()=>c(p)):c(p)},[c,u]);return b.useLayoutEffect(()=>a.listen(d),[a,d]),b.useEffect(()=>dr(r),[r]),b.createElement(pr,{basename:n,children:o,location:s.location,navigationType:s.action,navigator:a,future:r})}const Cr=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Pr=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ye=b.forwardRef(function(n,o){let{onClick:r,relative:i,reloadDocument:l,replace:a,state:s,target:c,to:u,preventScrollReset:d,viewTransition:p}=n,h=mr(n,yr),{basename:g}=b.useContext(U),f,y=!1;if(typeof u=="string"&&Pr.test(u)&&(f=u,Cr))try{let v=new URL(window.location.href),S=u.startsWith("//")?new URL(v.protocol+u):new URL(u),T=Ce(S.pathname,g);S.origin===v.origin&&T!=null?u=T+S.search+S.hash:y=!0}catch{}let m=Yt(u,{relative:i}),x=wr(u,{replace:a,state:s,target:c,preventScrollReset:d,relative:i,viewTransition:p});function C(v){r&&r(v),v.defaultPrevented||x(v)}return b.createElement("a",fe({},h,{href:f||m,onClick:y||l?r:C,ref:o,target:c}))});var Ue;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Ue||(Ue={}));var Fe;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Fe||(Fe={}));function wr(e,n){let{target:o,replace:r,state:i,preventScrollReset:l,relative:a,viewTransition:s}=n===void 0?{}:n,c=yn(),u=G(),d=bn(e,{relative:a});return b.useCallback(p=>{if(fr(p,o)){p.preventDefault();let h=r!==void 0?r:oe(u)===oe(d);c(e,{replace:h,state:i,preventScrollReset:l,relative:a,viewTransition:s})}},[u,c,d,r,i,o,e,l,a,s])}const kr="https://github.com/frankvane/vane-components";class Sr extends R.Component{constructor(){super(...arguments);Te(this,"state",{error:null})}static getDerivedStateFromError(o){return{error:o}}render(){var o;return this.state.error?t.jsxs("div",{className:"crash",role:"alert",children:[t.jsx("h3",{children:"这个页面炸了"}),t.jsx("pre",{children:String(((o=this.state.error)==null?void 0:o.stack)||this.state.error)}),t.jsx("button",{type:"button",onClick:()=>this.setState({error:null}),children:"重试"})]}):this.props.children}}function Pn(e,n){return String(e.entries.indexOf(n)+1).padStart(2,"0")}function jr({demos:e,pathname:n}){var c;const{groups:o,entries:r,label:i}=e,l=(c=r.find(u=>n===`/demo/${u.meta.slug}`))==null?void 0:c.meta.group,[a,s]=b.useState(()=>{var d;const u=(d=o[0])==null?void 0:d.key;return Object.fromEntries(o.map(p=>[p.key,p.key===(l??u)]))});return b.useEffect(()=>{l&&s(u=>u[l]?u:{...u,[l]:!0})},[l]),t.jsxs("div",{className:"nav-section",children:[t.jsxs("div",{className:"nav-section-head",children:[t.jsx("span",{children:i}),t.jsxs("code",{children:[r.length," demos"]})]}),o.map(u=>{const d=r.filter(h=>h.meta.group===u.key);if(d.length===0)return null;const p=a[u.key]??!1;return t.jsxs("div",{className:"nav-group",children:[t.jsxs("button",{type:"button",className:`nav-group-head${l===u.key?" is-current":""}`,onClick:()=>s(h=>({...h,[u.key]:!p})),"aria-expanded":p,children:[t.jsx("span",{className:`nav-caret${p?" is-open":""}`,"aria-hidden":!0,children:"▸"}),u.label,t.jsx("code",{children:d.length})]}),p?t.jsx("div",{className:"nav-list",children:d.map(h=>t.jsxs(ye,{to:`/demo/${h.meta.slug}`,className:`nav-sub${n===`/demo/${h.meta.slug}`?" is-active":""}`,children:[t.jsx("em",{"aria-hidden":!0,children:Pn(e,h)}),h.meta.title]},h.meta.slug))}):null]},u.key)})]})}function $r({demos:e}){var s;const{slug:n}=Jt(),{entries:o,detail:r}=e,i=n?o.find(c=>c.meta.slug===n):void 0,l=(s=o[0])==null?void 0:s.meta.slug;if(!i)return t.jsx(me,{to:l?`/demo/${l}`:"/",replace:!0});const a=o.indexOf(i)+1;return t.jsx(R.Fragment,{children:r(i,a)},i.meta.slug)}function Ir({config:e}){var p,h;const{pathname:n}=G(),[o,r]=b.useState(!1),[i,l]=b.useState(!1);b.useEffect(()=>r(!1),[n]);const a=b.useCallback(()=>l(g=>!g),[]);b.useEffect(()=>{const g=f=>{const y=f.target,m=y&&(y.tagName==="INPUT"||y.tagName==="TEXTAREA"||y.isContentEditable);f.key==="Escape"&&r(!1),!m&&(f.key==="g"||f.key==="G")&&!f.metaKey&&!f.ctrlKey&&l(x=>!x)};return window.addEventListener("keydown",g),()=>window.removeEventListener("keydown",g)},[]);const s=e.demos,c=(p=s.entries[0])==null?void 0:p.meta.slug,u=b.useMemo(()=>{if(!n.startsWith("/demo"))return e.crumb(n);const g=n.replace(/^\/demo\/?/,""),f=s.entries.find(y=>y.meta.slug===g);return f?`demo ${Pn(s,f)} · ${f.meta.title}`:"demo · 逐项示例"},[n,e,s]),d=b.useMemo(()=>e.nav.map((g,f)=>({...g,no:String(f+1).padStart(2,"0")})),[e.nav]);return t.jsxs("div",{className:`shell${o?" is-nav-open":""}${i?" is-guides":""}`,children:[t.jsx("a",{className:"skip-link",href:"#main",onClick:g=>{g.preventDefault();const f=document.getElementById("main");f==null||f.setAttribute("tabindex","-1"),f==null||f.focus(),f==null||f.scrollIntoView({block:"start"})},children:"跳到内容"}),t.jsxs("aside",{className:"side","aria-label":"站点导航",children:[t.jsxs(ye,{to:"/",className:"brand",children:[t.jsx("span",{className:"brand-mark","aria-hidden":!0,children:e.brand}),t.jsxs("span",{children:[t.jsx("strong",{children:e.pkg}),t.jsx("em",{children:e.subtitle})]})]}),t.jsxs("nav",{children:[d.map(g=>t.jsxs(ye,{to:g.to,className:`nav-item${n===g.to?" is-active":""}`,"aria-current":n===g.to?"page":void 0,children:[t.jsx("em",{"aria-hidden":!0,children:g.no}),t.jsx("span",{children:g.label}),g.hint?t.jsx("code",{children:g.hint}):null]},g.to)),t.jsx(jr,{demos:e.demos,pathname:n})]}),t.jsxs("div",{className:"side-foot",children:[t.jsx("p",{children:e.footer[0]}),t.jsx("p",{className:"muted",children:e.footer[1]})]})]}),t.jsx("button",{type:"button",className:"scrim","aria-label":"关闭导航",tabIndex:o?0:-1,onClick:()=>r(!1)}),t.jsxs("div",{className:"main",id:"main",children:[t.jsxs("header",{className:"topbar",children:[t.jsx("button",{type:"button",className:"nav-toggle","aria-label":o?"关闭导航":"打开导航","aria-expanded":o,onClick:()=>r(g=>!g),children:t.jsx("span",{"aria-hidden":!0})}),t.jsx("span",{className:"crumb",children:u}),t.jsxs("div",{className:"topbar-right",children:[(h=e.stats)==null?void 0:h.map(g=>t.jsxs("span",{className:"topbar-stat",title:g.title,children:[t.jsx("b",{children:g.value})," ",g.label]},g.label)),t.jsxs("button",{type:"button",className:"topbar-btn","aria-pressed":i,onClick:a,title:"显示栏位参考线（快捷键 G）",children:[t.jsx("i",{"aria-hidden":!0}),"guides"]}),t.jsx("a",{className:"topbar-link",href:e.sourceUrl??kr,target:"_blank",rel:"noreferrer",children:"source ↗"})]})]}),t.jsx("div",{className:"guides","aria-hidden":!0}),t.jsx(b.Suspense,{fallback:t.jsx("div",{className:"loading",children:"loading modules…"}),children:t.jsx(Sr,{children:t.jsxs(gr,{children:[e.routes.map(g=>t.jsx(Q,{path:g.path,element:g.element},g.path)),t.jsx(Q,{path:"/demo",element:t.jsx(me,{to:c?`/demo/${c}`:"/",replace:!0})}),t.jsx(Q,{path:"/demo/:slug",element:t.jsx($r,{demos:e.demos})}),t.jsx(Q,{path:"*",element:t.jsx(me,{to:"/",replace:!0})})]})})})]})]})}function Rr({config:e}){return t.jsx(vr,{children:t.jsx(Ir,{config:e})})}const Br="modulepreload",Tr=function(e,n){return new URL(e,n).href},ze={},le=function(n,o,r){let i=Promise.resolve();if(o&&o.length>0){const a=document.getElementsByTagName("link"),s=document.querySelector("meta[property=csp-nonce]"),c=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));i=Promise.allSettled(o.map(u=>{if(u=Tr(u,r),u in ze)return;ze[u]=!0;const d=u.endsWith(".css"),p=d?'[rel="stylesheet"]':"";if(!!r)for(let f=a.length-1;f>=0;f--){const y=a[f];if(y.href===u&&(!d||y.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${p}`))return;const g=document.createElement("link");if(g.rel=d?"stylesheet":Br,d||(g.as="script"),g.crossOrigin="",g.href=u,c&&g.setAttribute("nonce",c),document.head.appendChild(g),d)return new Promise((f,y)=>{g.addEventListener("load",f),g.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${u}`)))})}))}function l(a){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=a,window.dispatchEvent(s),!s.defaultPrevented)throw a}return i.then(a=>{for(const s of a||[])s.status==="rejected"&&l(s.reason);return n().catch(l)})},be={core:{label:"Core 内核",hint:"props / ref / 生命周期"},media:{label:"媒体",hint:"图 / 视频 / 轮播"},buy:{label:"交易链路",hint:"SKU → 数量 → 价格 → 券 → 汇总"},display:{label:"展示",hint:"角标 / 标签 / 倒计时 / 评价 / 入场"},interaction:{label:"交互",hint:"操作按钮 / 悬停"},infra:{label:"基础设施",hint:"状态 / 埋点 / 无障碍 / 响应式"},compound:{label:"复合组件",hint:"ProductCard 与 38 个子组件"}},Or=["core","media","buy","display","interaction","infra","compound"];function Ke(e){const n={};for(const o of e.controls??[])n[o.key]=o.init;return n}function K(e,n){var r,i;const o=[];for(const l of n){const a=(i=(r=e.bus)==null?void 0:r.on)==null?void 0:i.call(r,l,()=>{e.forceUpdate()});typeof a=="function"&&o.push(a)}return e.forceUpdate(),()=>{for(const l of o)try{l()}catch{}}}function B({title:e,subtitle:n,note:o}){return t.jsxs("div",{className:"stage-content",children:[e?t.jsx("div",{className:"stage-title",children:e}):null,n?t.jsx("div",{className:"stage-sub",children:n}):null,o?t.jsx("div",{className:"stage-note",children:o}):null]})}function Nr(e){return un(Z,{plugins:e})}const wn=b.createContext("");function Ar({cfg:e,children:n}){return t.jsx(wn.Provider,{value:JSON.stringify(e),children:n})}function N(e){const n=b.useContext(wn),o=e.map(r=>r.name).join("|");return b.useMemo(()=>un(Z,{plugins:e}),[o,n])}const _r=[{sku:"TS-RED-M",options:{颜色:"赤陶",尺码:"M"},price:319,stock:3,image:j({label:"赤陶 / M",width:600,height:600,hue:12})},{sku:"TS-RED-L",options:{颜色:"赤陶",尺码:"L"},price:319,stock:12,image:j({label:"赤陶 / L",width:600,height:600,hue:12})},{sku:"TS-OLIVE-M",options:{颜色:"橄榄",尺码:"M"},price:299,stock:26,image:j({label:"橄榄 / M",width:600,height:600,hue:96})},{sku:"TS-OLIVE-L",options:{颜色:"橄榄",尺码:"L"},price:299,stock:0,image:j({label:"橄榄 / L",width:600,height:600,hue:96})}],w={id:"p-tee",short:"长绒棉 T 恤",title:"经典圆领 T 恤 · 260g 长绒棉",subtitle:"新疆长绒棉 · 双纱领口 · 三色可选",price:299,oldPrice:399,image:j({label:"长绒棉 T 恤",hue:96}),images:[j({label:"正面",hue:96}),j({label:"细节 / 领口",hue:104}),j({label:"背面",hue:88}),j({label:"上身",hue:112})],inventory:12,tags:["纯棉","夏季","基础款"],rating:4.6,ratingCount:1284,features:["不掉色，机洗 30 次色差 < 1 级","双纱领口，久穿不松","260g 克重，不透不闷"],description:"260g 精梳长绒棉，双纱领口加固。肩线落在肩峰内 1cm，视觉收窄。三色都是低饱和土色系，配牛仔或工装都稳。",brand:"VANE BASICS",skuCode:"VB-TEE-260",specs:[{key:"面料",value:"100% 新疆长绒棉"},{key:"克重",value:"260g/㎡"},{key:"版型",value:"宽松直筒"},{key:"产地",value:"浙江 · 宁波"}],variants:_r,attributes:[{name:"颜色",options:["赤陶","橄榄"]},{name:"尺码",options:["M","L"]}],colors:[{name:"赤陶",hex:"#b4553c"},{name:"橄榄",hex:"#6b7245"}]},ie={id:"p-mug",short:"手冲马克杯",title:"手冲马克杯 · 300ml 粗陶",subtitle:"景德镇粗陶 · 手作釉面 · 每只纹理不同",price:168,oldPrice:219,image:j({label:"粗陶马克杯",hue:32}),images:[j({label:"杯身",hue:32}),j({label:"釉面细节",hue:40})],inventory:4,tags:["手作","粗陶"],rating:4.9,ratingCount:236,features:["手作釉面，每只纹理不同","杯壁 5mm，保温久","可进洗碗机"],description:"景德镇手作粗陶，300ml 容量，杯壁 5mm。窑变釉，每只纹理都不同，收到的那只只属于你。",brand:"VANE STUDIO",skuCode:"VS-MUG-300",attributes:[],specs:[{key:"容量",value:"300ml"},{key:"材质",value:"高温粗陶"},{key:"工艺",value:"手作 · 窑变釉"}]},Dr={id:"p-chair",short:"折叠露营椅",title:"轻量折叠露营椅 · 铝合金",subtitle:"1.9kg · 承重 120kg · 收纳 38cm",price:459,oldPrice:599,image:W("露营椅","1.9kg"),images:[W("椅身","1.9kg"),W("收纳","38cm")],inventory:48,tags:["户外","轻量"],rating:4.4,ratingCount:892,features:["7075 铝合金骨架，整椅 1.9kg","承重 120kg","收纳后 38cm，可进背包侧袋"],description:"7075 铝合金骨架 + 600D 牛津布，整椅 1.9kg，承重 120kg。收起来 38cm，塞背包侧袋就走。",brand:"VANE OUTDOOR",skuCode:"VO-CHAIR-01",attributes:[],specs:[{key:"重量",value:"1.9kg"},{key:"承重",value:"120kg"},{key:"收纳长度",value:"38cm"}]},Ve=[w,ie,Dr],sd={id:"p-mango",short:"小台芒",title:"云南小台芒 · 树上熟",subtitle:"当日采摘 · 冷链直发 · 坏果包赔",price:29.9,oldPrice:39.9,image:j({label:"小台芒",hue:42}),images:[j({label:"整箱",hue:42}),j({label:"果肉",hue:48})],inventory:7,tags:["今日达","冷链","坏果包赔"],rating:4.7,ratingCount:3412,features:["树上熟，甜度 18°+","冷链直发，24h 到家","坏果包赔，拍照即退"],description:"云南元江小台芒，树上熟到 8 分才摘。冷链直发，24 小时内到。坏果拍照即赔，不用寄回。",brand:"山野鲜",skuCode:"SY-MANGO",specs:[{key:"产地",value:"云南 · 元江"},{key:"甜度",value:"18° 以上"},{key:"时效",value:"24 小时达"}],variants:[{sku:"MGO-500",options:{规格:"500g"},price:29.9,stock:7},{sku:"MGO-1K",options:{规格:"1kg"},price:52,stock:12},{sku:"MGO-2K",options:{规格:"2kg"},price:96,stock:3}],attributes:[{name:"规格",options:["500g","1kg","2kg"]}]},ad={id:"p-buds",short:"降噪耳机",title:"主动降噪耳机 · 42dB 深度",subtitle:"双设备连接 · 单次 8 小时 · 支持无线充",price:899,oldPrice:1099,image:j({label:"降噪耳机",hue:232}),images:[j({label:"充电盒",hue:232}),j({label:"佩戴",hue:240})],inventory:36,tags:["降噪","双设备","无线充"],rating:4.5,ratingCount:8921,features:["42dB 主动降噪","双设备无缝切换","单次 8 小时 / 总计 32 小时"],description:"42dB 主动降噪，通勤地铁里能压掉大半低频。双设备连接，手机和电脑之间自动切。",brand:"VANE AUDIO",skuCode:"VA-BUDS-42",specs:[{key:"降噪深度",value:"42dB"},{key:"续航",value:"8h / 32h（含盒）"},{key:"蓝牙",value:"5.4 · 双设备"},{key:"充电",value:"USB-C / 无线"}],variants:[{sku:"BUDS-BK-STD",options:{颜色:"曜石黑",套装:"标准"},price:899,stock:20,image:j({label:"曜石黑",hue:220})},{sku:"BUDS-BK-PRO",options:{颜色:"曜石黑",套装:"充电盒套装"},price:1049,stock:12,image:j({label:"曜石黑 / 套装",hue:220})},{sku:"BUDS-WH-STD",options:{颜色:"雾白",套装:"标准"},price:899,stock:4,image:j({label:"雾白",hue:210})},{sku:"BUDS-WH-PRO",options:{颜色:"雾白",套装:"充电盒套装"},price:1049,stock:0,image:j({label:"雾白 / 套装",hue:210})}],attributes:[{name:"颜色",options:["曜石黑","雾白"]},{name:"套装",options:["标准","充电盒套装"]}],colors:[{name:"曜石黑",hex:"#2b2f36"},{name:"雾白",hex:"#e8e6e1"}]},ld={id:"p-lip",short:"丝绒唇釉",title:"丝绒雾面唇釉 · 4.5g",subtitle:"不拔干 · 不挂杯 · 三层显色",price:129,oldPrice:159,image:j({label:"丝绒唇釉",hue:348}),images:[j({label:"#01 干枯玫瑰",hue:348}),j({label:"#04 冰糖山楂",hue:8}),j({label:"#07 肉桂奶茶",hue:28})],inventory:52,tags:["雾面","不拔干","显色"],rating:4.6,ratingCount:15802,features:["雾面但不拔干","不挂杯，喝水不掉色","三层薄涂即显色"],description:"雾面质地但不拔干，加了 3% 角鲨烷。薄涂三层就能盖住唇色，喝水不挂杯。",brand:"VANE BEAUTY",skuCode:"VB-LIP",specs:[{key:"净含量",value:"4.5g"},{key:"妆效",value:"丝绒雾面"},{key:"保质期",value:"3 年"}],variants:[{sku:"LIP-01",options:{色号:"#01 干枯玫瑰"},price:129,stock:24,image:j({label:"#01 干枯玫瑰",hue:348})},{sku:"LIP-04",options:{色号:"#04 冰糖山楂"},price:129,stock:18,image:j({label:"#04 冰糖山楂",hue:8})},{sku:"LIP-07",options:{色号:"#07 肉桂奶茶"},price:129,stock:10,image:j({label:"#07 肉桂奶茶",hue:28})}],attributes:[{name:"色号",options:["#01 干枯玫瑰","#04 冰糖山楂","#07 肉桂奶茶"]}],colors:[{name:"#01 干枯玫瑰",hex:"#a8606a"},{name:"#04 冰糖山楂",hex:"#b23a35"},{name:"#07 肉桂奶茶",hex:"#b0806a"}]},cd={id:"p-lamp",short:"落地灯",title:"极简落地灯 · 三档色温",subtitle:"160cm · 无极调光 · 包安装",price:599,oldPrice:799,image:W("落地灯","160cm"),images:[W("整灯","160cm"),W("灯头","调光")],inventory:15,tags:["包安装","无极调光","三色温"],rating:4.4,ratingCount:623,features:["三档色温 3000/4000/5000K","无极调光，最低 1% 不闪","大件送装一体，师傅上门"],description:"160cm 落地灯，三档色温 + 无极调光。大件送装一体，师傅送货上门并安装。",brand:"VANE HOME",skuCode:"VH-LAMP-160",specs:[{key:"高度",value:"160cm"},{key:"功率",value:"18W LED"},{key:"色温",value:"3000 / 4000 / 5000K"},{key:"配送",value:"送装一体（3–5 天）"}],variants:[{sku:"LAMP-160-BK",options:{尺寸:"160cm",颜色:"哑光黑"},price:599,stock:9},{sku:"LAMP-160-WH",options:{尺寸:"160cm",颜色:"米白"},price:599,stock:6},{sku:"LAMP-140-BK",options:{尺寸:"140cm",颜色:"哑光黑"},price:499,stock:0}],attributes:[{name:"尺寸",options:["140cm","160cm"]},{name:"颜色",options:["哑光黑","米白"]}]},ud={id:"p-ticket",short:"话剧票",title:"话剧《夜市》· 上海场",subtitle:"2026 巡演 · 105 分钟 · 中场无休",price:280,image:j({label:"夜市",hue:268}),images:[j({label:"剧照 01",hue:268}),j({label:"剧照 02",hue:280})],inventory:46,tags:["话剧","上海","可选座"],rating:4.8,ratingCount:1290,features:["105 分钟，中场无休","可选座，出票即锁定座位","开演前 48 小时可退"],description:"2026 巡演上海站。105 分钟无中场，建议 12 岁以上观众。可选座，出票即锁定。",brand:"VANE THEATRE",skuCode:"VT-NIGHT",specs:[{key:"时长",value:"105 分钟"},{key:"场馆",value:"上海 · 兰心大戏院"},{key:"退改",value:"开演前 48h 可退"}],variants:[{sku:"TK-1031-280",options:{场次:"10-31 19:30",票档:"280 元"},price:280,stock:20},{sku:"TK-1031-380",options:{场次:"10-31 19:30",票档:"380 元"},price:380,stock:12},{sku:"TK-1101-280",options:{场次:"11-01 14:30",票档:"280 元"},price:280,stock:9},{sku:"TK-1101-380",options:{场次:"11-01 14:30",票档:"380 元"},price:380,stock:5}],attributes:[{name:"场次",options:["10-31 19:30","11-01 14:30"]},{name:"票档",options:["280 元","380 元"]}]},dd={id:"p-course",short:"设计课",title:"界面设计系统课 · 第 8 期",subtitle:"12 周 · 24 节课 · 作业逐份批改",price:499,oldPrice:899,image:j({label:"设计系统课",hue:196}),images:[j({label:"课程封面",hue:196}),j({label:"作业示例",hue:204})],inventory:28,tags:["直播","作业批改","可试看"],rating:4.9,ratingCount:472,features:["12 周 24 节课，每周一次直播","每份作业逐份批改","结课项目写进作品集"],description:"12 周系统课，从设计令牌到组件库落地。每周一次直播 + 作业逐份批改，结课产出可写进作品集。",brand:"VANE CLASS",skuCode:"VC-DS-08",specs:[{key:"周期",value:"12 周 / 24 节课"},{key:"形式",value:"直播 + 回放永久"},{key:"服务",value:"作业逐份批改"}],variants:[{sku:"DS-08-OCT",options:{班期:"10 月 26 日开班"},price:499,stock:16},{sku:"DS-08-NOV",options:{班期:"11 月 30 日开班"},price:499,stock:12}],attributes:[{name:"班期",options:["10 月 26 日开班","11 月 30 日开班"]}]};function pd(){return["帆布托特包","黄铜书签","羊毛毡垫","双肩相机包","玻璃冷萃壶","亚麻桌旗","牛皮卡包","香樟木托盘"].map((n,o)=>({...Ve[o%Ve.length],id:`wall-${o}`,short:n,title:`${n} · 编辑部选品`,price:79+o*57,oldPrice:o%3===0?129+o*57:void 0,image:j({label:n,hue:o*36%360}),inventory:[2,6,18,0,40,9,25,63][o],tags:[["手作","日用","户外","通勤"][o%4]],rating:Number((4.1+o%8*.1).toFixed(1)),ratingCount:120+o*87}))}function Se(e){return(Array.isArray(e.variants)?e.variants:[]).map(o=>({sku:o.sku??"",attrs:o.options??o.attributes??{},price:o.price,stock:o.stock,image:o.image}))}const Er={meta:{slug:"core-props",title:"Core props 与容器",group:"core",capability:"core-props",intro:"CardCore 的全部视觉相关 props：layout 方向、padding、containerStyle。没有插件时卡片只剩你传进去的内容。",why:"需要一张「有生命周期和 ref、但没有预设立场」的容器时用它 —— 比如后台的详情面板、自研卡片的底座。",plugs:[],props:['layout="{{layout}}"',"padding={ {{padding}} }","onClick={handleClick}"],note:"padding 是四边同值或 { top, right, bottom, left }；它会被算进容器盒模型，overlay 插件定位时依赖这一点。",controls:[{key:"layout",label:"布局方向",kind:"select",init:"vertical",options:[{label:"vertical 竖排",value:"vertical"},{label:"horizontal 横排",value:"horizontal"}]},{key:"padding",label:"padding",kind:"number",init:16,min:0,max:32,step:2}],dataCode:`// Core 不读 data 的字段，它只把 data 原样交给 renderContent / 插件
{
  title: "经典圆领 T 恤 · 260g 长绒棉",
  price: 299,
}`},Stage:({cfg:e})=>t.jsx(Z,{cardId:"core-props",data:w,layout:e.layout,padding:Number(e.padding),renderContent:n=>{const o=n;return t.jsx(B,{title:o.title,subtitle:o.subtitle,note:"这段内容来自 renderContent"})}})},Mr={meta:{slug:"core-ref",title:"CardCoreRef 三个方法",group:"core",capability:"core-ref",intro:"getContainer / getSize / forceUpdate 三个方法。点按钮，右边日志会写出真实的 DOM 引用与像素尺寸。",why:"外层要做「按卡片尺寸算文案行数」「滚动到这张卡」「外部改了引用数据要它重画」时用 ref，不要靠 setTimeout 猜时机。",plugs:[],props:["ref={cardRef}","padding={16}"],note:"getSize 读的是 offsetWidth/offsetHeight，是布局后的真实值；卡片还没进 DOM 时返回 0。",children:'      <Content title="点上面的按钮试 ref 方法" subtitle="容器引用 / 尺寸 / 强制更新" />'},Stage:({log:e})=>{const n=b.useRef(null);return t.jsxs("div",{children:[t.jsx(Z,{ref:n,cardId:"core-ref",data:w,padding:16,renderContent:()=>t.jsx(B,{title:"点下面的按钮试 ref 方法",subtitle:"容器引用 / 尺寸 / 强制更新"})}),t.jsxs("div",{className:"stage-tools",children:[t.jsx("button",{type:"button",className:"vc-btn",onClick:()=>{var r;const o=(r=n.current)==null?void 0:r.getContainer();e(o?`getContainer() → <div data-card-id="${o.dataset.cardId}">`:"getContainer() → null",o?"event":"warn")},children:"getContainer()"}),t.jsx("button",{type:"button",className:"vc-btn",onClick:()=>{var r;const o=(r=n.current)==null?void 0:r.getSize();e(o?`getSize() → ${o.width} × ${o.height}px`:"getSize() → null")},children:"getSize()"}),t.jsx("button",{type:"button",className:"vc-btn",onClick:()=>{var o;(o=n.current)==null||o.forceUpdate(),e("forceUpdate() → 已请求重绘")},children:"forceUpdate()"})]})]})}},Lr={meta:{slug:"core-lifecycle",title:"生命周期与可见性",group:"core",capability:"core-lifecycle",intro:"Core 的四个回调各自什么时候触发。把「挂载」开关关掉，能看到 unmount 立刻被记录；把卡片滚出视口，可见性会变 false。",why:"埋点曝光、懒加载、入场动画都挂在这几个点上。它们必须是「真的触发一次」，而不是每次渲染都触发。",plugs:[],props:["debug={ {{debug}} }",'onMount={() => log("mount")}','onUnmount={() => log("unmount")}',"onVisibilityChange={(v) => log(`visible: ${v}`)}","onHover={(h) => log(`hover: ${h}`)}"],note:"可见性用 IntersectionObserver（threshold 0.1）判定，只在**跨越阈值**时回调，不是每帧回调。",controls:[{key:"mounted",label:"挂载",kind:"switch",init:!0},{key:"debug",label:"debug 日志",kind:"switch",init:!1}]},Stage:({cfg:e,log:n})=>{const[o,r]=b.useState(0);return t.jsx("div",{children:e.mounted?t.jsx(Z,{cardId:"core-lifecycle",data:w,padding:16,debug:!!e.debug,onMount:()=>n("onMount → 进入 DOM"),onUnmount:()=>n("onUnmount → 已离开 DOM","warn"),onVisibilityChange:i=>n(`onVisibilityChange → ${i}`,"info"),onHover:i=>n(`onHover → ${i}`,"info"),onClick:()=>{r(i=>i+1),n(`onClick → 第 ${o+1} 次`)},renderContent:()=>t.jsx(B,{title:"点我 / 悬停我 / 滚我出视口",subtitle:`已点击 ${o} 次`})}):t.jsx("div",{className:"stage-empty",children:"已卸载 —— 看右侧日志里的 onUnmount"})})}},Ur=[Er,Mr,Lr],Fr=({src:e,alt:n,lazyLoad:o,placeholder:r,errorFallback:i})=>{const[l,a]=R.useState("loading");return R.useEffect(()=>{a("loading")},[e]),t.jsxs("div",{style:{position:"relative",width:"100%",aspectRatio:"1 / 1",overflow:"hidden",borderRadius:"8px 8px 0 0",background:"#f5f5f5"},"data-image-state":l,children:[l==="loading"&&r?t.jsx("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center"},children:r}):null,t.jsx("img",{src:e,alt:n,style:{width:"100%",height:"100%",objectFit:"cover",display:"block",opacity:l==="loaded"?1:0,transition:"opacity 0.2s ease"},loading:o?"lazy":"eager",onLoad:()=>a("loaded"),onError:()=>a("failed")}),l==="failed"?t.jsx("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center"},"data-image-state-fallback":"true",children:i??null}):null]})},zr=(e={})=>({name:"ImagePlugin",version:"1.1.0",description:"商品主图（占位实现：固定 1:1、可占位、失败兜底）",priority:10,hooks:{onMount:o=>K(o,[k.skuVariant]),renderHeader:o=>{var s,c,u;const r=o.data,i=(u=(c=(s=o.bus)==null?void 0:s.getData)==null?void 0:c.call(s,k.skuVariant))==null?void 0:u.image,l=e.src||i||(r==null?void 0:r.image),a=e.alt||(r==null?void 0:r.name)||"商品图片";return l?t.jsx(Fr,{src:l,alt:a,lazyLoad:!!e.lazyLoad,placeholder:e.placeholder,errorFallback:e.errorFallback}):null}},config:e}),Kr="ImagePlugin",Vr="商品主图（占位实现）：固定 1:1、加载前可占位、失败可兜底；选中变体带图时自动换图。要真正的懒加载/模糊占位请用 vane-lazy-image。",Wr="2.0.0",Hr=["media","header","图片"],Gr=[{name:"onMount",when:"卡片挂载完成、插件注册后执行一次",description:"建立观察器 / 监听器，返回清理函数以便卸载时释放"},{name:"renderHeader",when:"每次渲染，卡片头部槽位",description:"卡片头部内容（标题行、标签、状态条）"}],qr=[],Yr="只读取 context 字段（props / state / data），不调用上下文方法",Qr=[{name:"src",type:"string",default:"-",description:"固定封面图；不填则依次取变体图、data.image"},{name:"alt",type:"string",default:"data.name 或「商品图片」",description:"替代文本"},{name:"lazyLoad",type:"boolean",default:"false",description:"只透传给 <img loading>，不做真正的懒加载（已废弃，见 notes）"},{name:"placeholder",type:"React.ReactNode",default:"-",description:"加载完成前显示的内容"},{name:"errorFallback",type:"React.ReactNode",default:"-",description:"加载失败时替换整张图的内容"}],Jr=`const Card = withPlugins(CardCore, [
  createImagePlugin({
    placeholder: <Skeleton />,
    errorFallback: <span>图片暂不可用</span>,
  }),
]);

// 变体带图时主图自动跟随：variants 里给 image 即可
createSKUPlugin({ attributes, variants: [{ sku: "R", attrs: { 颜色: "红" }, image: "/red.jpg" }] });`,Xr=["src 优先级：config.src > 选中变体图 > data.image","订阅 skuVariant，切规格后主图实时更换","加载完成前显示 placeholder，完成后淡入（0.2s）","加载失败时整块换成 errorFallback（旧版是恒 display:none 的死代码，只会留一块空白灰底）"],Zr=["商品列表主图","变体换图","图片加载失败兜底"],eo=["D1-A 决策：本项目不再自带图片优化能力，ImagePlugin 只保证「有图、有比例、有兜底」。懒加载/自适应尺寸/模糊占位请交给 vane-lazy-image。","lazyLoad 只是给 <img> 加 loading 属性，浏览器支持程度不同，不要据此认为已实现懒加载。","placeholder 在图片加载完成（onLoad）后移除；若图片来源被缓存直接命中，onLoad 仍会触发，不会一直停在占位态。"],kn={name:Kr,description:Vr,since:Wr,tags:Hr,events:Gr,methods:qr,methodsNote:Yr,config:Qr,example:Jr,features:Xr,useCases:Zr,notes:eo},Sn=Object.assign(zr,{meta:kn}),no=(e={})=>{const{autoplay:n=!1,muted:o=!0,loop:r=!1,controls:i=!0,poster:l,playOnHover:a=!1,style:s={}}=e;return{name:"VideoPlugin",version:"1.0.0",description:"视频展示插件（头部区域）",priority:40,hooks:{renderHeader:u=>{var h,g;if((g=(h=u.bus)==null?void 0:h.getData)!=null&&g.call(h,"media.handledByGallery"))return null;const d=u.data,p=(d==null?void 0:d.video)||e.src;return p?t.jsx("div",{style:{width:"100%",aspectRatio:"16 / 9",overflow:"hidden",borderRadius:"8px 8px 0 0",background:"#000"},children:t.jsx("video",{autoPlay:n,muted:o,loop:r,controls:i,poster:l||(d==null?void 0:d.poster),style:{width:"100%",height:"100%",objectFit:"cover",display:"block",...s},children:t.jsx("source",{src:p})})}):null},onHover:(u,d)=>{var g,f,y,m;if(!a||(f=(g=u.bus)==null?void 0:g.getData)!=null&&f.call(g,"media.handledByGallery"))return;const p=u.getContainer(),h=p==null?void 0:p.querySelector("video");h&&(d?(y=h.play)==null||y.call(h):(m=h.pause)==null||m.call(h))}},config:e}},to="VideoPlugin",ro="在卡片头部区域渲染 16:9 视频；可选悬停自动播放/暂停。与 GalleryPlugin 同时启用时自动让位，避免重复渲染。",oo="2.0.0",io=["media","header","视频"],so=[{name:"onHover",when:"指针进入 / 离开卡片（isHovered 布尔值）",description:"悬停态处理：预加载、浮层提示、动效触发"},{name:"renderHeader",when:"每次渲染，卡片头部槽位",description:"卡片头部内容（标题行、标签、状态条）"}],ao=[{name:"getContainer",signature:"ctx.getContainer(): HTMLDivElement | null",description:"取宿主 DOM 容器，可能为 null，使用前需判空"}],lo=[{name:"src",type:"string",default:"-",description:"视频地址；不填则读 data.video"},{name:"autoplay",type:"boolean",default:"false",description:"进页面即自动播放"},{name:"muted",type:"boolean",default:"true",description:"静音；autoplay 时必须为 true，否则浏览器会拦截"},{name:"loop",type:"boolean",default:"false",description:"循环播放"},{name:"controls",type:"boolean",default:"true",description:"显示原生播放控件"},{name:"poster",type:"string",default:"-",description:"封面图；不填则读 data.poster"},{name:"playOnHover",type:"boolean",default:"false",description:"悬停播放、移开暂停（需打开 controls 或 autoplay 才有意义）"},{name:"style",type:"React.CSSProperties",default:"{}",description:"视频元素样式"},{name:"headerPosition",type:'"before" | "after"',default:'"after"',description:"放在卡片主体之前还是之后"},{name:"order",type:"number",default:"0",description:"同区域内的排序权重（越小越前）"}],co=`const Card = withPlugins(CardCore, [
  createVideoPlugin({ src: "/demo.mp4", muted: true, playOnHover: true, headerPosition: "before" }),
]);`,uo=["16:9 容器固定比例，避免加载后跳版","playOnHover 走插件 onHover 钩子，不额外挂 DOM 监听","检测到 bus 上的 media.handledByGallery 标记时主动让位"],po=["服饰 / 家居的动效展示","开箱视频","商品详情首屏"],go=["autoplay 需同时 muted: true，否则被浏览器策略拦截（静默失败，不报错）。","与 GalleryPlugin 同时启用且都配了视频时，以 Gallery 为准（VideoPlugin 不渲染）。","playOnHover 取容器内第一个 <video>，自定义 renderContent 里若有别的视频会被误伤。"],jn={name:to,description:ro,since:oo,tags:io,events:so,methods:ao,config:lo,example:co,features:uo,useCases:po,notes:go},$n=Object.assign(no,{meta:jn}),mo=({slides:e,style:n,enableZoom:o,autoplay:r,interval:i,showIndicators:l,showThumbnails:a,errorFallbackSrc:s,context:c})=>{const[u,d]=R.useState(0),[p,h]=R.useState(!1),g=r&&!e.some(I=>I.type==="video")&&e.length>1;R.useEffect(()=>{if(!g)return;const I=setInterval(()=>{d($=>($+1)%e.length)},i);return()=>clearInterval(I)},[g,i,e.length]),R.useEffect(()=>{u>e.length-1&&d(0)},[u,e.length]);const f=I=>{h(!1),d($=>($+I+e.length)%e.length)},y=e.length?Math.min(u,e.length-1):0,m=e[y],x=c.data,C=e.some(I=>I.type==="video"),v=c.bus,S=c.forceUpdate;if(R.useEffect(()=>{var $,E,F;!(v!=null&&v.setData)||!!(($=v.getData)!=null&&$.call(v,"media.handledByGallery"))===C||(C?(v.setData("media.videoInGallery",!0),v.setData("media.handledByGallery",!0)):((E=v.deleteData)==null||E.call(v,"media.videoInGallery"),(F=v.deleteData)==null||F.call(v,"media.handledByGallery")),S==null||S())},[C,v,S]),!m)return null;const T=I=>{const $=I.currentTarget;if(s&&$.dataset.fallback!=="1"){$.dataset.fallback="1",$.src=s;return}$.style.visibility="hidden"};return t.jsxs("div",{style:{position:"relative",width:"100%",aspectRatio:"16 / 9",overflow:"hidden",borderRadius:"8px 8px 0 0",background:m.type==="image"?"#f5f5f5":"#000",...n},children:[m.type==="image"?t.jsx("img",{src:m.src,alt:(x==null?void 0:x.name)||"商品图片",style:{width:"100%",height:"100%",objectFit:"cover",display:"block",cursor:o?"zoom-in":"default"},onClick:()=>{o&&bt(m.src)},onError:T}):t.jsx("div",{style:{position:"relative",width:"100%",height:"100%"},children:p?t.jsx("video",{controls:!0,autoPlay:!0,style:{width:"100%",height:"100%",objectFit:"cover"},children:t.jsx("source",{src:m.src})}):t.jsxs(t.Fragment,{children:[t.jsx("img",{src:m.thumb||(x==null?void 0:x.poster)||"",alt:(x==null?void 0:x.name)||"商品视频预览",style:{width:"100%",height:"100%",objectFit:"cover",display:"block"},onError:T}),t.jsx("button",{onClick:()=>h(!0),"aria-label":"播放视频",style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",background:"rgba(0,0,0,0.6)",color:"#fff",border:"none",borderRadius:999,padding:"12px 16px",cursor:"pointer"},children:"▶"})]})}),e.length>1&&t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>f(-1),style:{position:"absolute",top:"50%",left:8,transform:"translateY(-50%)",background:"rgba(0,0,0,0.58)",color:"#fff",border:"none",borderRadius:4,padding:"4px 8px",cursor:"pointer"},children:"‹"}),t.jsx("button",{onClick:()=>f(1),style:{position:"absolute",top:"50%",right:8,transform:"translateY(-50%)",background:"rgba(0,0,0,0.58)",color:"#fff",border:"none",borderRadius:4,padding:"4px 8px",cursor:"pointer"},children:"›"})]}),l&&e.length>1&&t.jsx("div",{style:{position:"absolute",bottom:8,left:0,right:0,display:"flex",justifyContent:"center",gap:6},children:e.map((I,$)=>t.jsx("span",{title:I.type==="video"?"视频":"图片",style:{width:8,height:8,borderRadius:"50%",background:$===y?"#333":"#bbb",display:"inline-block"}},$))}),a&&e.length>1&&t.jsx("div",{style:{position:"absolute",left:8,right:8,bottom:40,display:"flex",gap:8,justifyContent:"center"},children:e.map((I,$)=>t.jsx("button",{onClick:()=>{h(!1),d($)},title:I.type==="video"?"视频":"图片",style:{border:$===y?"2px solid #fff":"1px solid rgba(255,255,255,0.6)",padding:0,borderRadius:4,background:"transparent",cursor:"pointer"},children:t.jsx("img",{src:I.thumb||I.src,alt:I.type==="video"?"视频缩略图":"图片缩略图",style:{width:44,height:28,objectFit:"cover",display:"block",borderRadius:4},onError:T})},$))})]})},ho=(e={})=>{const{autoplay:n=!1,interval:o=3e3,showIndicators:r=!0,enableZoom:i=!1,showThumbnails:l=!0,style:a={},videoSrc:s,videoPoster:c,errorFallbackSrc:u}=e;return{name:"GalleryPlugin",version:"1.0.0",description:"图片画廊插件（头部区域轮播）",priority:40,hooks:{renderHeader:p=>{const h=p.data,g=e.images||(h==null?void 0:h.images)||(h!=null&&h.image?[h.image]:[]),f=s||(h==null?void 0:h.video),y=[...g.map(m=>({type:"image",src:m,thumb:m}))];if(f){const m=c||(h==null?void 0:h.poster)||g[0],x={type:"video",src:f,thumb:m||""},C=y.length,v=(e.videoIndex??C+1)-1,S=Math.max(0,Math.min(C,v));y.splice(S,0,x)}return y.length?t.jsx(mo,{slides:y,style:a,enableZoom:i,autoplay:n,interval:o,showIndicators:r,showThumbnails:l,errorFallbackSrc:u,context:p}):null}},config:e}},fo="GalleryPlugin",yo="图片/视频轮播头图：指示点、缩略图、点击放大，视频可插到指定位置。一张图时退化为静态图。",bo="2.0.0",xo=["media","header","画廊"],vo=[{name:"renderHeader",when:"每次渲染，卡片头部槽位",description:"卡片头部内容（标题行、标签、状态条）"}],Co=[],Po="只读取 context 字段（props / state / data），不调用上下文方法",wo=[{name:"images",type:"string[]",default:"[]",description:"图片地址列表；不填则读 data.images"},{name:"autoplay",type:"boolean",default:"false",description:"自动轮播（含视频时自动关闭，避免抢播）"},{name:"interval",type:"number",default:"3000",description:"轮播间隔（毫秒）"},{name:"showIndicators",type:"boolean",default:"true",description:"显示底部指示点"},{name:"enableZoom",type:"boolean",default:"false",description:"点击图片放大查看"},{name:"showThumbnails",type:"boolean",default:"true",description:"显示缩略图条"},{name:"style",type:"React.CSSProperties",default:"{}",description:"画廊容器样式"},{name:"videoSrc",type:"string",default:"-",description:"要插入的单个视频地址"},{name:"videoPoster",type:"string",default:"-",description:"视频封面"},{name:"videoIndex",type:"number",default:"末尾",description:"视频插入位置（从 1 开始），默认追加到末尾"},{name:"headerPosition",type:'"before" | "after"',default:'"before"',description:"放在卡片主体之前还是之后"},{name:"order",type:"number",default:"0",description:"同区域内的排序权重（越小越前）"}],ko=`const Card = withPlugins(CardCore, [
  createGalleryPlugin({
    images: ["/a.jpg", "/b.jpg", "/c.jpg"],
    videoSrc: "/demo.mp4",
    videoIndex: 1,
    enableZoom: true,
  }),
]);`,So=["单图自动退化为静态图，不渲染指示点与缩略图","含视频时强制关闭自动轮播，防止视频被切走","手动翻页后停止自动轮播，把控制权交还用户","进入画廊后向 bus 写 media.handledByGallery，VideoPlugin 据此让位"],jo=["服饰多角度图","3C 产品的图片 + 演示视频","家具场景图"],$o=["定时器在副作用返回里清理，组件卸载/切换不残留 interval。","videoIndex 从 1 开始计数；超出范围时按追加处理。","图片地址失效时没有兜底占位（按 D1-A 已把图片能力降级为占位，需要懒加载/兜底请用 vane-lazy-image）。"],In={name:fo,description:yo,since:bo,tags:xo,events:vo,methods:Co,methodsNote:Po,config:wo,example:ko,features:So,useCases:jo,notes:$o},Rn=Object.assign(ho,{meta:In}),We=({attributes:e,selection:n,onChange:o})=>t.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr",gap:10},children:e.map(r=>t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap"},children:[t.jsx("span",{style:{fontSize:12,color:"#666",minWidth:60},children:r.name}),t.jsx("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:r.options.map(i=>{const l=n[r.name]===i;return t.jsx("button",{onClick:()=>o(r.name,i),style:{padding:"6px 10px",borderRadius:6,border:l?"2px solid #2e7d32":"1px solid #ddd",background:l?"#E8F5E9":"#fff",color:"#333",cursor:"pointer",fontSize:12},children:i},i)})})]},r.name))});function Io(e,n){if(e.length)return e.find(o=>vt(o.attrs,n))}const Ro=e=>{const n=(e==null?void 0:e.attributes)||[],o=(e==null?void 0:e.variants)||[],r=(e==null?void 0:e.renderIn)||"footer",i=(a,s)=>{var d,p;const c=a.bus;(d=c==null?void 0:c.setData)==null||d.call(c,k.skuSelection,s);const u=Io(o,s);xt(c,u),(p=c==null?void 0:c.emit)==null||p.call(c,"sku:change",{attrs:s,variant:u,stock:typeof(u==null?void 0:u.stock)=="number"?u.stock:void 0})};return{name:"SKUPlugin",version:"1.1.0",description:"基础 SKU 变体选择与匹配",priority:60,hooks:{onMount:a=>{const s=n.reduce((c,u)=>{var p,h;const d=(h=(p=a.data)==null?void 0:p.defaultAttrs)==null?void 0:h[u.name];return d&&(c[u.name]=d),c},{});return i(a,s),K(a,[k.skuSelection,k.skuVariant])},renderFooter:a=>{var d,p,h,g;if(r!=="footer")return null;const s=((p=(d=a.bus)==null?void 0:d.getData)==null?void 0:p.call(d,k.skuSelection))||{},c=(f,y)=>{i(a,{...s,[f]:y})},u=(g=(h=a.bus)==null?void 0:h.getData)==null?void 0:g.call(h,k.skuVariant);return t.jsxs("div",{style:{padding:12,borderTop:"1px dashed #eee"},children:[t.jsx("div",{style:{fontSize:12,color:"#6b6b6b",marginBottom:6},children:"选择规格"}),t.jsx(We,{attributes:n,selection:s,onChange:c}),u&&t.jsxs("div",{style:{marginTop:8,fontSize:12,color:"#555"},children:["已选：",Object.entries(u.attrs).map(([f,y])=>`${f}:${y}`).join(" / "),"（SKU：",u.sku,"）",typeof u.stock=="number"&&t.jsxs("span",{style:{marginLeft:8},children:["库存：",u.stock]})]})]})},renderOverlay:a=>{var u,d;if(r!=="overlay")return null;const s=((d=(u=a.bus)==null?void 0:u.getData)==null?void 0:d.call(u,k.skuSelection))||{},c=(p,h)=>{i(a,{...s,[p]:h})};return t.jsx("div",{style:{position:"absolute",bottom:8,left:8,right:8,background:"rgba(255,255,255,0.9)",borderRadius:8,padding:8,zIndex:9},children:t.jsx(We,{attributes:n,selection:s,onChange:c})})}},config:e}},Bo="SKUPlugin",To="变体选择与匹配：属性选择写入总线，命中的变体（价格/库存/图片）同步到 selection、variant、price、image 四个键，是整条交易链的源头。",Oo="2.0.0",No=["buy","sku","bus-source"],Ao=[{name:"onMount",when:"卡片挂载完成、插件注册后执行一次",description:"建立观察器 / 监听器，返回清理函数以便卸载时释放"},{name:"renderOverlay",when:"每次渲染，绝对定位覆盖在卡片内容之上",description:"卡片浮层：角标、收藏按钮、动画、骨架遮罩等"},{name:"renderFooter",when:"每次渲染，卡片底部槽位",description:"卡片底部内容（操作行、价格补充、来源）"}],_o=[],Do="只读取 context 字段（props / state / data），不调用上下文方法",Eo=[{name:"attributes",type:"SKUAttribute[]",default:"-",description:'属性定义，如 [{ name: "颜色", options: ["红","蓝"] }]'},{name:"variants",type:"SKUVariant[]",default:"-",description:"变体列表，每项 { sku, attrs, price?, stock?, image? }"},{name:"renderIn",type:'"footer" | "overlay"',default:'"footer"',description:"选择控件渲染位置"}],Mo=`const Card = withPlugins(CardCore, [
  createSKUPlugin({
    attributes: [
      { name: "颜色", options: ["红", "蓝"] },
      { name: "尺码", options: ["M", "L"] },
    ],
    variants: [
      { sku: "R-M", attrs: { 颜色: "红", 尺码: "M" }, price: 299, stock: 8 },
      { sku: "B-L", attrs: { 颜色: "蓝", 尺码: "L" }, price: 319, stock: 0 },
    ],
  }),
]);`,Lo=["只匹配「所有已选属性都命中」的变体，选不全就不写 variant","挂载时按 data.defaultAttrs 预选，首屏即带默认规格","写入总线后，价格/数量/库存/图片相关插件自动跟随，插件之间零耦合"],Uo=["多规格商品","颜色 + 尺码选择","带图切换的变体（variant.image）"],Fo=["priority 60，仅次于 State/A11y（100），保证它是交易链里最早写总线的那个。","本插件是纯「源」：只写不订阅，所以不会因为自己的写入而重渲染 —— 需要跟随变化的消费者请自行订阅。","属性值全选齐但无匹配变体时，variant 保持上一次的命中值（不清空），界面会停在上一个规格；需要严格置空请自行监听 sku:change 处理。"],Bn={name:Bo,description:To,since:Oo,tags:No,events:Ao,methods:_o,methodsNote:Do,config:Eo,example:Mo,features:Lo,useCases:Uo,notes:Fo},je=Object.assign(Ro,{meta:Bn});function ce(e,n){return{...n,...e||{}}}const He=({context:e,min:n,step:o,max:r,resetOnVariantChange:i=!0,clampOnMaxDecrease:l=!0})=>{var m,x,C,v,S;const a=r===0?0:n,s=((x=(m=e.bus)==null?void 0:m.getData)==null?void 0:x.call(m,k.quantity))??a,[c,u]=R.useState(String(s));R.useEffect(()=>{u(String(s))},[s]);const d=R.useRef(void 0);R.useEffect(()=>()=>{d.current&&window.clearTimeout(d.current)},[]);const p=R.useCallback(T=>{var $,E;const I=Math.min(Math.max(T,a),r);(E=($=e.bus)==null?void 0:$.setData)==null||E.call($,k.quantity,I)},[e.bus,a,r]),h=()=>p(s-o),g=()=>p(s+o),f=(S=(v=(C=e.bus)==null?void 0:C.getData)==null?void 0:v.call(C,k.skuVariant))==null?void 0:S.sku,y=R.useRef(f);return R.useEffect(()=>{y.current!==f&&(y.current=f,i&&p(r===0?0:n))},[f,n,r,i,p]),R.useEffect(()=>{r===0?s!==0&&p(0):l&&s>r&&p(r)},[r,l,p]),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[t.jsx("span",{style:{fontSize:12,color:"#666"},children:"数量"}),t.jsx("button",{onClick:h,disabled:s<=a,style:{minWidth:32,lineHeight:1,padding:"4px 10px",border:"1px solid #ddd",borderRadius:6,background:"#fff",color:s<=a?"#8f8f8f":"#333",cursor:s<=a?"not-allowed":"pointer"},children:"-"}),t.jsx("input",{type:"number",value:c,min:a,max:r,step:o,onChange:T=>{const I=T.target.value;u(I),d.current&&window.clearTimeout(d.current),d.current=window.setTimeout(()=>{const $=Number(I);Number.isFinite($)&&p($)},150)},disabled:r===0,style:{width:56,textAlign:"center",padding:"4px 8px",border:"1px solid #ddd",borderRadius:6,background:r===0?"#f7f7f7":"#fff",color:r===0?"#bbb":"#333"}}),t.jsx("button",{onClick:g,disabled:s>=r||r===0,style:{minWidth:32,lineHeight:1,padding:"4px 10px",border:"1px solid #ddd",borderRadius:6,background:"#fff",color:s>=r||r===0?"#8f8f8f":"#333",cursor:s>=r||r===0?"not-allowed":"pointer"},children:"+"}),r===0?t.jsx("span",{style:{marginLeft:"auto",fontSize:12,color:"#c62828",fontWeight:700},children:"缺货"}):t.jsxs("span",{style:{marginLeft:"auto",fontSize:12,color:"#6b6b6b"},children:["最大 ",r]}),(()=>{const T=Number(c);return!Number.isFinite(T)||T<a||T>r?t.jsxs("span",{style:{marginLeft:8,fontSize:12,color:"#c62828"},children:["请输入 ",a," 至 ",r," 的整数"]}):null})()]})};function de(e,n,o){var s,c,u;if(typeof n.max=="number")return Math.max(o,n.max);const r=(c=(s=e.bus)==null?void 0:s.getData)==null?void 0:c.call(s,k.skuVariant),i=n.useVariantStock!==!1?r==null?void 0:r.stock:void 0,l=(u=e.data)==null?void 0:u.inventory,a=typeof i=="number"?i:typeof l=="number"?l:void 0;return typeof a=="number"?a<=0?0:Math.max(o,a):99}const zo=(e={})=>{const n=ce(e,{min:1,step:1,renderIn:"footer",useVariantStock:!0,resetOnVariantChange:!0,clampOnMaxDecrease:!0});return{name:"QuantityPlugin",version:"1.0.0",description:"数量选择步进器（联动库存/变体）",priority:30,hooks:{onMount:r=>{var s,c;const l=de(r,{...n},n.min??1)===0?0:Math.max(n.min??1,1);return(c=(s=r.bus)==null?void 0:s.setData)==null||c.call(s,k.quantity,l),K(r,[k.quantity,k.skuVariant])},renderFooter:r=>{if(n.renderIn!=="footer")return null;const i=de(r,{...n},n.min??1);return t.jsx("div",{style:{padding:12,borderTop:"1px dashed #eee"},children:t.jsx(He,{context:r,min:n.min??1,step:n.step??1,max:i,resetOnVariantChange:n.resetOnVariantChange,clampOnMaxDecrease:n.clampOnMaxDecrease})})},renderOverlay:r=>{if(n.renderIn!=="overlay")return null;const i=de(r,{...n},n.min??1);return t.jsx("div",{style:{position:"absolute",bottom:8,left:8,right:8,background:"rgba(255,255,255,0.92)",borderRadius:8,padding:8,zIndex:9},children:t.jsx(He,{context:r,min:n.min??1,step:n.step??1,max:i,resetOnVariantChange:n.resetOnVariantChange,clampOnMaxDecrease:n.clampOnMaxDecrease})})}},config:n}},Ko="QuantityPlugin",Vo="数量步进器：上下限随变体库存自动收紧，数量写入总线（quantity）供价格/汇总插件消费；可渲染在页脚或覆盖层。",Wo="2.0.0",Ho=["buy","quantity","stepper"],Go=[{name:"onMount",when:"卡片挂载完成、插件注册后执行一次",description:"建立观察器 / 监听器，返回清理函数以便卸载时释放"},{name:"renderOverlay",when:"每次渲染，绝对定位覆盖在卡片内容之上",description:"卡片浮层：角标、收藏按钮、动画、骨架遮罩等"},{name:"renderFooter",when:"每次渲染，卡片底部槽位",description:"卡片底部内容（操作行、价格补充、来源）"}],qo=[],Yo="只读取 context 字段（props / state / data），不调用上下文方法",Qo=[{name:"min",type:"number",default:"1",description:"最小数量"},{name:"max",type:"number",default:"自动",description:"最大数量；不填则由变体库存或 data.inventory 推断"},{name:"step",type:"number",default:"1",description:"每次增减的步长"},{name:"renderIn",type:'"footer" | "overlay"',default:'"footer"',description:"渲染位置（footer 页脚 / overlay 覆盖层，两条分支都已实现）"},{name:"useVariantStock",type:"boolean",default:"true",description:"优先用选中变体的库存作为上限"},{name:"resetOnVariantChange",type:"boolean",default:"true",description:"切换规格时把数量重置回最小值"},{name:"clampOnMaxDecrease",type:"boolean",default:"true",description:"上限变小时把当前数量钳制到新上限"}],Jo=`const Card = withPlugins(CardCore, [
  createSKUPlugin({ attributes, variants }),
  createQuantityPlugin({ min: 1, max: 10, step: 1, useVariantStock: true }),
]);`,Xo=["上限优先级：config.max > 变体库存 > data.inventory > 99","库存为 0 时上限归零，数量直接为 0（缺货不显示 1）","输入框有防抖与本地显示值，不会每敲一个字符就写一次总线","规格切换后自动重置/钳制，避免把上一规格的数量带过去"],Zo=["加购数量选择","限购商品","按库存收紧的预售卡"],ei=["priority 30，晚于 SKUPlugin（60）执行，所以 onMount 时能读到默认变体的库存。","数量写入的是 BusKeys.quantity，价格插件读同一键；不要在外层再维护一份数量，否则两边会打架。","库存为 0 时数量为 0，但并不会禁用按钮 —— 需要「售罄置灰」请配合 InventoryPlugin 或自行在 renderCustomActions 里判断。"],Tn={name:Ko,description:Vo,since:Wo,tags:Ho,events:Go,methods:qo,methodsNote:Yo,config:Qo,example:Jo,features:Xo,useCases:Zo,notes:ei},On=Object.assign(zo,{meta:Tn});function q(e,n,o){try{return new Intl.NumberFormat(o||"zh-CN",{style:n?"currency":"decimal",currency:n||"CNY",maximumFractionDigits:0}).format(e)}catch{return`¥${e}`}}function Ge(e){const n=e??{};return Number(n.oldPrice??n.originalPrice??0)}const ni=(e={})=>{const n=ce(e,{showOriginalPrice:!0,showDiscount:!0,showSavings:!0,showSavingsBadgeInPriceArea:!0,showTotalPrice:!1,currency:"CNY",locale:"zh-CN",order:10});return{name:"PriceCalculatorPlugin",version:"1.0.0",description:"价格计算与展示（现价/原价/折扣/节省）",priority:20,hooks:{onMount:r=>{var c,u,d,p,h,g;const i=()=>{var S,T,I,$,E,F,Re,ne,Be;const f=(T=(S=r.bus)==null?void 0:S.getData)==null?void 0:T.call(S,k.skuPrice),y=Number(f??((I=r.data)==null?void 0:I.price)??0),m=Number(((E=($=r.bus)==null?void 0:$.getData)==null?void 0:E.call($,k.quantity))??1),x=(Re=(F=r.bus)==null?void 0:F.getData)==null?void 0:Re.call(F,k.couponApplied),C=y*m,v=Math.max(0,C-A(C,x));(Be=(ne=r.bus)==null?void 0:ne.emit)==null||Be.call(ne,"price:change",{price:y,quantity:m,subtotal:C,total:v,coupon:x}),r.forceUpdate()},l=(u=(c=r.bus)==null?void 0:c.on)==null?void 0:u.call(c,k.skuPrice,i),a=(p=(d=r.bus)==null?void 0:d.on)==null?void 0:p.call(d,k.quantity,i),s=(g=(h=r.bus)==null?void 0:h.on)==null?void 0:g.call(h,k.couponApplied,i);return i(),()=>{if(l)try{l()}catch{}if(a)try{a()}catch{}if(s)try{s()}catch{}}},renderFooter:r=>{var f,y,m,x,C,v,S;const i=(y=(f=r.bus)==null?void 0:f.getData)==null?void 0:y.call(f,k.skuPrice),l=Number(i??((m=r.data)==null?void 0:m.price)??0),a=Ge(r.data),s=n.showOriginalPrice&&a>l&&a>0,c=s?a-l:0,u=s?Math.round((1-l/a)*100):0,d=Number(((C=(x=r.bus)==null?void 0:x.getData)==null?void 0:C.call(x,k.quantity))??1),p=(S=(v=r.bus)==null?void 0:v.getData)==null?void 0:S.call(v,k.couponApplied),h=l*d,g=Math.max(0,h-A(h,p));return t.jsxs("div",{style:{padding:12},children:[t.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:8},children:[t.jsx("span",{style:{fontSize:20,fontWeight:800,color:"#c62828"},children:q(l,n.currency,n.locale)}),s&&t.jsx("span",{style:{fontSize:14,color:"#6b6b6b",textDecoration:"line-through"},children:q(a,n.currency,n.locale)}),s&&n.showDiscount&&t.jsxs("span",{style:{fontSize:12,color:"#2e7d32",fontWeight:700},children:["-",u,"%"]})]}),s&&n.showSavings&&t.jsxs("div",{style:{marginTop:4,fontSize:12,color:"#555"},children:["已省 ",q(c,n.currency,n.locale)]}),n.showTotalPrice&&t.jsxs("div",{style:{marginTop:6,display:"flex",justifyContent:"space-between",alignItems:"center"},children:[t.jsxs("span",{style:{fontSize:12,color:"#666"},children:["数量：",d,p!=null&&p.code?`（已用券：${p.code}）`:""]}),t.jsxs("span",{style:{fontSize:14,fontWeight:700,color:"#1565c0"},children:["合计 ",q(g,n.currency,n.locale)]})]})]})},renderPriceArea:r=>{var p,h,g;const i=(h=(p=r.bus)==null?void 0:p.getData)==null?void 0:h.call(p,k.skuPrice),l=Number(i??((g=r.data)==null?void 0:g.price)??0),a=Ge(r.data),s=n.showOriginalPrice&&a>l&&a>0,c=s?Math.round((1-l/a)*100):0,u=s?a-l:0;if(!s)return null;const d=[];return n.showDiscount&&c>0&&d.push(t.jsxs("span",{style:{fontSize:12,color:"#2e7d32",fontWeight:700},title:"折扣",children:["-",c,"%"]},"discount")),n.showSavingsBadgeInPriceArea&&u>0&&d.push(t.jsxs("span",{title:"已省",style:{display:"inline-flex",alignItems:"center",fontSize:12,color:"#1b5e20",background:"#E8F5E9",border:"1px solid #C8E6C9",borderRadius:12,padding:"2px 6px",marginLeft:6},children:["省 ",q(u,n.currency,n.locale)]},"savings")),d.length?t.jsx(t.Fragment,{children:d}):null}},config:n}},ti="PriceCalculatorPlugin",ri="价格区核心：展示单价、划线原价、折扣、节省额与合计，并在价格/数量/券变化时发布 price:change 事件。",oi="2.0.0",ii=["buy","price","bus-source"],si=[{name:"onMount",when:"卡片挂载完成、插件注册后执行一次",description:"建立观察器 / 监听器，返回清理函数以便卸载时释放"},{name:"renderFooter",when:"每次渲染，卡片底部槽位",description:"卡片底部内容（操作行、价格补充、来源）"},{name:"renderPriceArea",when:'渲染价格区时（卡片按 usePluginSlot("priceArea") 读取）',description:"价格区领域槽：比价、省钱徽章、单位价、可领券提示等，排序规则与内核插槽一致"}],ai=[{name:"forceUpdate",signature:"ctx.forceUpdate(): void",description:"主动触发宿主重渲染；改了闭包里的可变状态后必须调用，否则视图不刷新"}],li=[{name:"showOriginalPrice",type:"boolean",default:"false",description:"显示划线原价（需 data.oldPrice > 当前价；兼容旧字段 originalPrice）"},{name:"showDiscount",type:"boolean",default:"false",description:"显示折扣百分比"},{name:"showSavings",type:"boolean",default:"false",description:"显示节省金额"},{name:"showSavingsBadgeInPriceArea",type:"boolean",default:"false",description:"在价格区放节省徽章"},{name:"showTotalPrice",type:"boolean",default:"false",description:"显示按数量与优惠折算后的合计"},{name:"currency",type:"string",default:"CNY",description:"货币代码，交给 Intl.NumberFormat"},{name:"locale",type:"string",default:"zh-CN",description:"格式化区域"},{name:"order",type:"number",default:"0",description:"priceArea 渲染顺序（越小越前）"}],ci=`const Card = withPlugins(CardCore, [
  createPriceCalculatorPlugin({
    showOriginalPrice: true,
    showDiscount: true,
    showTotalPrice: true,
    currency: "CNY",
    order: 1,
  }),
]);`,ui=["价格来源优先级：总线 skuPrice（选中变体价）> data.price","监听 skuPrice / quantity / couponApplied 三键，任一变化即重算并 emit price:change","合计做 Math.max(0, …) 保护，不会被券扣成负数","货币格式化失败时退回 ¥ 前缀，不会抛错"],di=["商品单价展示","折扣与节省额","随数量/优惠券实时变价"],pi=["priority 20：低于订阅方 Analytics（50），所以 Analytics 能收到首个 price:change；调整优先级时注意这条隐式顺序。","price:change 只是事件，渲染用的价格仍是各插件直接读总线 —— 别把「有没有收到事件」当成「界面有没有更新」。","券的门槛（minAmount）不由本插件校验，直接套用不达门槛的券会算出异常低价；需要校验请在选券侧拦截。"],Nn={name:ti,description:ri,since:oi,tags:ii,events:si,methods:ai,config:li,example:ci,features:ui,useCases:di,notes:pi},$e=Object.assign(ni,{meta:Nn}),gi=(e={})=>{const{competitors:n=[],showLowestPrice:o=!0,sortBy:r="price",sortOrder:i="asc",filterMaxPrice:l,highlightLowerThanOurPrice:a=!0,priceDiffHighlightThreshold:s=0}=e;return{name:"ComparePricePlugin",version:"1.0.0",description:"展示其他平台价格对比",priority:20,hooks:{onMount:u=>K(u,[k.skuPrice]),renderFooter:u=>{var g,f,y;if(!n.length)return null;const d=Number(((f=(g=u.bus)==null?void 0:g.getData)==null?void 0:f.call(g,k.skuPrice))??((y=u.data)==null?void 0:y.price)??0);let p=[...n];typeof l=="number"&&(p=p.filter(m=>m.price<=l)),p.sort((m,x)=>{const C=r==="name"?m.name.localeCompare(x.name):m.price-0,v=r==="name"?x.name.localeCompare(m.name):x.price-0,S=r==="name"?C-v:m.price-x.price;return i==="asc"?S:-S});const h=o&&p.length?p.reduce((m,x)=>x.price<m.price?x:m,p[0]):void 0;return t.jsxs("div",{style:{padding:12,borderTop:"1px dashed #eee"},children:[t.jsx("div",{style:{fontSize:12,color:"#6b6b6b",marginBottom:6},children:"平台价格对比"}),t.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr auto",gap:6},children:p.map(m=>{const x=(h==null?void 0:h.name)===m.name,C=a&&d>0&&m.price<d,v=d>0?d-m.price:0,S=x||C||s>0&&v>=s;return t.jsxs(R.Fragment,{children:[t.jsx("div",{style:{fontSize:13,color:"#555"},children:m.name}),t.jsxs("div",{style:{fontSize:13,fontWeight:700,color:S?"#2e7d32":"#333"},children:["¥",m.price,C&&t.jsxs("span",{title:"低于当前价",style:{marginLeft:6,fontSize:11,color:"#2e7d32"},children:["↓",Math.max(0,v)]})]})]},m.name)})}),h&&t.jsxs("div",{style:{marginTop:6,fontSize:12,color:"#2e7d32"},children:["当前最低：",h.name,"（¥",h.price,"）"]})]})},renderPriceArea:u=>{var m,x,C;if(!n.length)return null;const d=Number(((x=(m=u.bus)==null?void 0:m.getData)==null?void 0:x.call(m,k.skuPrice))??((C=u.data)==null?void 0:C.price)??0),p=n.reduce((v,S)=>S.price<v?S.price:v,1/0);if(!isFinite(p))return null;const h=d-p,g=h<0,f=g?"#1b5e20":"#a52714",y=g?`低于最低价 ¥${Math.round(Math.abs(h))}`:`最低价 ¥${p}`;return t.jsx("span",{style:{display:"inline-flex",alignItems:"center",fontSize:12,fontWeight:700,color:f,background:g?"#E8F5E9":"#FFF3F3",border:`1px solid ${g?"#C8E6C9":"#F5C6CB"}`,borderRadius:12,padding:"2px 6px",marginLeft:6},title:"平台比价",children:y})}},config:{...e,order:20}}},mi="ComparePricePlugin",hi="竞品比价：列出其它平台价格，标出最低价，并高亮「比我们便宜」的项。当前价取自总线 skuPrice，变化时会重算高亮。",fi="2.0.0",yi=["buy","price","比价"],bi=[{name:"onMount",when:"卡片挂载完成、插件注册后执行一次",description:"建立观察器 / 监听器，返回清理函数以便卸载时释放"},{name:"renderFooter",when:"每次渲染，卡片底部槽位",description:"卡片底部内容（操作行、价格补充、来源）"},{name:"renderPriceArea",when:'渲染价格区时（卡片按 usePluginSlot("priceArea") 读取）',description:"价格区领域槽：比价、省钱徽章、单位价、可领券提示等，排序规则与内核插槽一致"}],xi=[],vi="只读取 context 字段（props / state / data），不调用上下文方法",Ci=[{name:"competitors",type:"Array<{ name: string; price: number; url?: string }>",default:"[]",description:"竞品列表；为空时整块不渲染"},{name:"showLowestPrice",type:"boolean",default:"true",description:"标记最低价"},{name:"sortBy",type:'"price" | "name"',default:'"price"',description:"排序字段"},{name:"sortOrder",type:'"asc" | "desc"',default:'"asc"',description:"排序方向"},{name:"filterMaxPrice",type:"number",default:"-",description:"只显示不高于该价格的竞品"},{name:"highlightLowerThanOurPrice",type:"boolean",default:"true",description:"高亮比当前价低的竞品"},{name:"priceDiffHighlightThreshold",type:"number",default:"0",description:"价差超过该值才高亮"}],Pi=`const Card = withPlugins(CardCore, [
  createComparePricePlugin({
    competitors: [
      { name: "某东", price: 289 },
      { name: "某猫", price: 305, url: "https://example.com" },
    ],
    highlightLowerThanOurPrice: true,
    priceDiffHighlightThreshold: 10,
  }),
]);`,wi=["当前价优先取总线 skuPrice（跟随变体），没有再回落到 data.price","订阅 skuPrice，规格切换后高亮状态实时重算","支持按价格/名称排序与价格上限过滤"],ki=["比价促销卡","「买贵退差」宣称","多平台价格对照"],Si=["priority 20，与 PriceCalculator 同级；两者都在价格区但互不依赖，只共享总线上的价格。","competitors 为空数组时 onMount 仍会订阅总线（一次无害订阅），但页脚不渲染任何节点。","价差阈值判断的是「竞品价 - 当前价」，当前价为 0 时所有竞品都会被判为更贵，不会误高亮。"],An={name:mi,description:hi,since:fi,tags:yi,events:bi,methods:xi,methodsNote:vi,config:Ci,example:Pi,features:wi,useCases:ki,notes:Si},_n=Object.assign(gi,{meta:An}),ji=e=>{const n=(e==null?void 0:e.coupons)||[];return{name:"CouponPlugin",version:"1.0.0",description:"优惠券展示与应用",priority:25,hooks:{onMount:r=>{var i,l;e!=null&&e.autoApply&&n.length&&((l=(i=r.bus)==null?void 0:i.setData)==null||l.call(i,k.couponApplied,n[0]))},renderFooter:r=>{var s,c;if(!n.length)return null;const i=(c=(s=r.bus)==null?void 0:s.getData)==null?void 0:c.call(s,k.couponApplied),l=u=>{var d,p;return(p=(d=r.bus)==null?void 0:d.setData)==null?void 0:p.call(d,k.couponApplied,u)},a=()=>{var u,d;return(d=(u=r.bus)==null?void 0:u.deleteData)==null?void 0:d.call(u,k.couponApplied)};return t.jsxs("div",{style:{padding:12,borderTop:"1px dashed #eee"},children:[t.jsx("div",{style:{fontSize:12,color:"#6b6b6b",marginBottom:6},children:"可用优惠券"}),t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:n.map(u=>{const d=(i==null?void 0:i.code)===u.code;return t.jsxs("button",{onClick:()=>d?a():l(u),title:u.code,style:{padding:"6px 10px",borderRadius:6,border:d?"2px solid #2e7d32":"1px solid #ddd",background:d?"#E8F5E9":"#fff",color:"#333",cursor:"pointer",fontSize:12},children:[u.code," - ",Oe(u,"¥")]},u.code)})}),i&&t.jsxs("div",{style:{marginTop:8,fontSize:12,color:"#2e7d32"},children:["已应用优惠券：",i.code,"（",Oe(i,"¥"),"）"]})]})}},config:e}},$i="CouponPlugin",Ii="展示可选优惠券并写入总线（coupon.applied），供 OrderSummary / PriceCalculator 等消费。可配置自动套用第一张。",Ri="2.0.0",Bi=["buy","footer","优惠券","bus-source"],Ti=[{name:"onMount",when:"卡片挂载完成、插件注册后执行一次",description:"建立观察器 / 监听器，返回清理函数以便卸载时释放"},{name:"renderFooter",when:"每次渲染，卡片底部槽位",description:"卡片底部内容（操作行、价格补充、来源）"}],Oi=[],Ni="只读取 context 字段（props / state / data），不调用上下文方法",Ai=[{name:"coupons",type:"Coupon[]",default:"[]",description:"可用券列表（必填），每项含 code / discount / minAmount? / expiry?"},{name:"autoApply",type:"boolean",default:"false",description:"挂载时自动套用第一张券"}],_i=`const Card = withPlugins(CardCore, [
  createCouponPlugin({
    coupons: [
      { code: "NEW10", discount: 10, minAmount: 99 },
      { code: "VIP20", discount: 20, minAmount: 199 },
    ],
    autoApply: false,
  }),
]);`,Di=["选券/取消券只改总线数据，价格由下游插件重算，插件之间零耦合","autoApply 在 onMount 里套用第一张，首屏即带优惠价","无券时不渲染整块页脚"],Ei=["领券后下单","满减券选择器","会员专属券展示"],Mi=["写入的键是 BusKeys.couponApplied（coupon.applied）；只写不订阅，因此不会引起自身重渲染。","本插件不校验 minAmount / expiry，门槛判断由消费方（PriceCalculator）负责 —— 直接套用不满足门槛的券会算出负价。","选券状态的唯一真相在总线上，卸载插件会丢；需要跨卡片保留请自行在外层持有。"],Dn={name:$i,description:Ii,since:Ri,tags:Bi,events:Ti,methods:Oi,methodsNote:Ni,config:Ai,example:_i,features:Di,useCases:Ei,notes:Mi},En=Object.assign(ji,{meta:Dn});function qe(e,n,o){try{return new Intl.NumberFormat(o||"zh-CN",{style:n?"currency":"decimal",currency:n||"CNY",maximumFractionDigits:0}).format(e)}catch{return`¥${e}`}}function te(e,n){const o=e.filter(r=>Ct(n,r));if(o.length)return o.reduce((r,i)=>A(n,i)>A(n,r)?i:r,o[0])}function Y(e,n){return A(e,n)}const Li=e=>{const n=ce(e||{},{coupons:[],placement:"footer",autoApplyBest:!1,currency:"CNY",locale:"zh-CN",order:30});return{name:"CouponRecommendPlugin",version:"1.0.0",description:"根据小计自动推荐更优优惠券",priority:22,hooks:{onMount:r=>{var l,a,s,c,u,d,p;const i=K(r,[k.skuPrice,k.quantity,k.couponApplied]);if(n.autoApplyBest){const h=Number(((a=(l=r.bus)==null?void 0:l.getData)==null?void 0:a.call(l,k.skuPrice))??((s=r.data)==null?void 0:s.price)??0),g=Number(((u=(c=r.bus)==null?void 0:c.getData)==null?void 0:u.call(c,k.quantity))??1),f=h*g,y=te(n.coupons,f);y&&((p=(d=r.bus)==null?void 0:d.setData)==null||p.call(d,k.couponApplied,y))}return i},renderFooter:r=>{var h,g,f,y,m,x,C;if(n.placement!=="footer"||!n.coupons.length)return null;const i=Number(((g=(h=r.bus)==null?void 0:h.getData)==null?void 0:g.call(h,k.skuPrice))??((f=r.data)==null?void 0:f.price)??0),l=Number(((m=(y=r.bus)==null?void 0:y.getData)==null?void 0:m.call(y,k.quantity))??1),a=i*l,s=(C=(x=r.bus)==null?void 0:x.getData)==null?void 0:C.call(x,k.couponApplied),c=te(n.coupons,a),u=!!c&&(!s||A(a,c)>Y(a,s));if(!c||!u)return null;const d=Math.max(0,A(a,c)-Y(a,s)),p=()=>{var v,S;return(S=(v=r.bus)==null?void 0:v.setData)==null?void 0:S.call(v,k.couponApplied,c)};return t.jsx("div",{style:{padding:12,borderTop:"1px dashed #eee",background:"#f9fff6"},children:t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[t.jsx("span",{style:{fontSize:12,color:"#2e7d32",fontWeight:700},children:"有更优优惠券可用"}),t.jsxs("span",{style:{fontSize:12,color:"#666"},children:["可再省 ",qe(d,n.currency,n.locale)]}),t.jsx("button",{onClick:p,style:{marginLeft:"auto",padding:"4px 10px",borderRadius:6,border:"1px solid #c8e6c9",background:"#e8f5e9",color:"#2e7d32"},children:"一键使用"})]})})},renderOverlay:r=>{var p,h,g,f,y,m,x;if(n.placement!=="overlay"||!n.coupons.length)return null;const i=Number(((h=(p=r.bus)==null?void 0:p.getData)==null?void 0:h.call(p,k.skuPrice))??((g=r.data)==null?void 0:g.price)??0),l=Number(((y=(f=r.bus)==null?void 0:f.getData)==null?void 0:y.call(f,k.quantity))??1),a=i*l,s=(x=(m=r.bus)==null?void 0:m.getData)==null?void 0:x.call(m,k.couponApplied),c=te(n.coupons,a),u=!!c&&(!s||A(a,c)>Y(a,s));if(!c||!u)return null;const d=()=>{var C,v;return(v=(C=r.bus)==null?void 0:C.setData)==null?void 0:v.call(C,k.couponApplied,c)};return t.jsx("div",{style:{position:"absolute",top:8,left:8,right:8,background:"#e8f5e9",border:"1px solid #c8e6c9",borderRadius:8,padding:8,zIndex:11},children:t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[t.jsxs("span",{style:{fontSize:12,color:"#2e7d32",fontWeight:700},children:["推荐更优券：",c.code]}),t.jsx("button",{onClick:d,style:{marginLeft:"auto",padding:"4px 10px",borderRadius:6,border:"1px solid #c8e6c9",background:"#c8e6c9",color:"#2e7d32"},children:"使用"})]})})},renderPriceArea:r=>{var h,g,f,y,m,x,C;if(!n.coupons.length)return null;const i=Number(((g=(h=r.bus)==null?void 0:h.getData)==null?void 0:g.call(h,k.skuPrice))??((f=r.data)==null?void 0:f.price)??0),l=Number(((m=(y=r.bus)==null?void 0:y.getData)==null?void 0:m.call(y,k.quantity))??1),a=i*l,s=(C=(x=r.bus)==null?void 0:x.getData)==null?void 0:C.call(x,k.couponApplied),c=te(n.coupons,a),u=!!c&&(!s||A(a,c)>Y(a,s));if(!c||!u)return null;const d=Math.max(0,A(a,c)-Y(a,s)),p=()=>{var v,S;return(S=(v=r.bus)==null?void 0:v.setData)==null?void 0:S.call(v,k.couponApplied,c)};return t.jsxs("span",{onClick:p,title:`更优优惠券：${c.code}`,style:{display:"inline-flex",alignItems:"center",gap:6,fontSize:12,color:"#1b5e20",background:"#E8F5E9",border:"1px solid #C8E6C9",borderRadius:12,padding:"2px 8px",cursor:"pointer",marginLeft:6},children:["可领券再省 ",qe(d,n.currency,n.locale)]})}},config:n}},Ui="CouponRecommendPlugin",Fi="按当前小计推荐可用券，可自动套用最优券；套用结果写进总线 coupon.applied，与手选券（CouponPlugin）共用同一个键。",zi="2.0.0",Ki=["buy","coupon","bus-source"],Vi=[{name:"onMount",when:"卡片挂载完成、插件注册后执行一次",description:"建立观察器 / 监听器，返回清理函数以便卸载时释放"},{name:"renderOverlay",when:"每次渲染，绝对定位覆盖在卡片内容之上",description:"卡片浮层：角标、收藏按钮、动画、骨架遮罩等"},{name:"renderFooter",when:"每次渲染，卡片底部槽位",description:"卡片底部内容（操作行、价格补充、来源）"},{name:"renderPriceArea",when:'渲染价格区时（卡片按 usePluginSlot("priceArea") 读取）',description:"价格区领域槽：比价、省钱徽章、单位价、可领券提示等，排序规则与内核插槽一致"}],Wi=[],Hi="只读取 context 字段（props / state / data），不调用上下文方法",Gi=[{name:"coupons",type:"Coupon[]",default:"-",description:"候选券列表（必填）"},{name:"placement",type:'"footer" | "overlay"',default:'"footer"',description:"渲染位置"},{name:"autoApplyBest",type:"boolean",default:"false",description:"挂载时自动套用门槛内优惠力度最大的券"},{name:"currency",type:"string",default:"CNY",description:"货币代码"},{name:"locale",type:"string",default:"zh-CN",description:"格式化区域"},{name:"order",type:"number",default:"0",description:"priceArea 渲染顺序"}],qi=`const Card = withPlugins(CardCore, [
  createCouponRecommendPlugin({
    coupons: [
      { code: "NEW10", discount: 10, minAmount: 99 },
      { code: "VIP50", discount: 50, minAmount: 299 },
    ],
    autoApplyBest: true,
  }),
]);`,Yi=["按小计过滤门槛内的券，再按 discount 取最优","订阅 skuPrice / quantity / couponApplied，数量变化后推荐随之更新","与手选券共写 coupon.applied，谁后写谁生效（同屏建议只留一种）"],Qi=["凑单推荐","最优券自动套用","满减阶梯提示"],Ji=["priority 22，高于 PriceCalculator（20），保证 autoApplyBest 写入的券能被首次算价读到 —— 这条顺序是价格正确的前提。","同时装 CouponPlugin 时两者都写 coupon.applied，autoApply 与 autoApplyBest 会互相覆盖，表现为「选了又跳回去」；请只启用其中一个。","券不过期校验（expiry 未参与判断），过期券只要在列表里就可能被推荐。"],Mn={name:Ui,description:Fi,since:zi,tags:Ki,events:Vi,methods:Wi,methodsNote:Hi,config:Gi,example:qi,features:Yi,useCases:Qi,notes:Ji},Ln=Object.assign(Li,{meta:Mn});function V(e,n,o){try{return new Intl.NumberFormat(o||"zh-CN",{style:n?"currency":"decimal",currency:n||"CNY",maximumFractionDigits:0}).format(e)}catch{return`¥${e}`}}const Xi=(e={})=>{const n=ce(e,{showBreakdown:!0,showTax:!1,showShipping:!1,currency:"CNY",locale:"zh-CN",taxRate:0,shippingFee:0,placement:"footer"});return{name:"OrderSummaryPlugin",version:"1.0.0",description:"显示单价×数量−优惠券+税费/运费的账单明细",priority:18,hooks:{onMount:r=>K(r,[k.skuPrice,k.quantity,k.couponApplied]),renderFooter:r=>{var g,f,y,m,x,C,v;if(n.placement!=="footer")return null;const i=(f=(g=r.bus)==null?void 0:g.getData)==null?void 0:f.call(g,k.skuPrice),l=Number(i??((y=r.data)==null?void 0:y.price)??0),a=Number(((x=(m=r.bus)==null?void 0:m.getData)==null?void 0:x.call(m,k.quantity))??1),s=(v=(C=r.bus)==null?void 0:C.getData)==null?void 0:v.call(C,k.couponApplied),c=l*a,u=A(c,s),d=n.showTax?Math.round(c*(n.taxRate??0)):0,p=n.showShipping?n.shippingFee??0:0,h=Math.max(0,c-u+d+p);return t.jsxs("div",{style:{padding:12,borderTop:"1px dashed #eee"},children:[t.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr auto",gap:8,fontSize:13,color:"#555"},children:n.showBreakdown&&t.jsxs(t.Fragment,{children:[t.jsx("span",{children:"单价 × 数量"}),t.jsxs("span",{style:{textAlign:"right"},children:[V(l,n.currency,n.locale)," × ",a]}),(s==null?void 0:s.code)&&t.jsxs(t.Fragment,{children:[t.jsxs("span",{children:["优惠券（",s.code,"）"]}),t.jsxs("span",{style:{textAlign:"right",color:"#c62828"},children:["- ",V(u,n.currency,n.locale)]})]}),n.showTax&&t.jsxs(t.Fragment,{children:[t.jsx("span",{children:"税费"}),t.jsx("span",{style:{textAlign:"right"},children:V(d,n.currency,n.locale)})]}),n.showShipping&&t.jsxs(t.Fragment,{children:[t.jsx("span",{children:"运费"}),t.jsx("span",{style:{textAlign:"right"},children:V(p,n.currency,n.locale)})]})]})}),t.jsxs("div",{style:{marginTop:8,display:"flex",justifyContent:"space-between",alignItems:"center"},children:[t.jsx("span",{style:{fontSize:12,color:"#6b6b6b"},children:"合计"}),t.jsx("span",{style:{fontSize:16,fontWeight:800,color:"#1565c0"},children:V(h,n.currency,n.locale)})]})]})},renderOverlay:r=>{var g,f,y,m,x,C,v;if(n.placement!=="overlay")return null;const i=(f=(g=r.bus)==null?void 0:g.getData)==null?void 0:f.call(g,k.skuPrice),l=Number(i??((y=r.data)==null?void 0:y.price)??0),a=Number(((x=(m=r.bus)==null?void 0:m.getData)==null?void 0:x.call(m,k.quantity))??1),s=(v=(C=r.bus)==null?void 0:C.getData)==null?void 0:v.call(C,k.couponApplied),c=l*a,u=A(c,s),d=n.showTax?Math.round(c*(n.taxRate??0)):0,p=n.showShipping?n.shippingFee??0:0,h=Math.max(0,c-u+d+p);return t.jsx("div",{style:{position:"absolute",bottom:8,left:8,right:8,background:"rgba(255,255,255,0.95)",borderRadius:8,padding:8,zIndex:10},children:t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[t.jsx("span",{style:{fontSize:12,color:"#666"},children:"合计"}),t.jsx("span",{style:{fontSize:16,fontWeight:800,color:"#1565c0"},children:V(h,n.currency,n.locale)})]})})}},config:n}},Zi="OrderSummaryPlugin",es="订单汇总：小计、券抵扣、税费、运费、合计逐行展开，数据全部取自总线，不重复算价。",ns="2.0.0",ts=["buy","summary","footer"],rs=[{name:"onMount",when:"卡片挂载完成、插件注册后执行一次",description:"建立观察器 / 监听器，返回清理函数以便卸载时释放"},{name:"renderOverlay",when:"每次渲染，绝对定位覆盖在卡片内容之上",description:"卡片浮层：角标、收藏按钮、动画、骨架遮罩等"},{name:"renderFooter",when:"每次渲染，卡片底部槽位",description:"卡片底部内容（操作行、价格补充、来源）"}],os=[],is="只读取 context 字段（props / state / data），不调用上下文方法",ss=[{name:"showBreakdown",type:"boolean",default:"true",description:"显示明细行（小计/优惠/税/运费）"},{name:"showTax",type:"boolean",default:"false",description:"显示税费"},{name:"showShipping",type:"boolean",default:"false",description:"显示运费"},{name:"currency",type:"string",default:"CNY",description:"货币代码"},{name:"locale",type:"string",default:"zh-CN",description:"格式化区域"},{name:"taxRate",type:"number",default:"0",description:"税率，0.1 表示 10%（按小计计）"},{name:"shippingFee",type:"number",default:"0",description:"固定运费"},{name:"placement",type:'"footer" | "overlay"',default:'"footer"',description:"渲染位置"}],as=`const Card = withPlugins(CardCore, [
  createOrderSummaryPlugin({
    showTax: true,
    taxRate: 0.06,
    showShipping: true,
    shippingFee: 12,
  }),
]);`,ls=["券抵扣做 Math.min(券额, 小计) 保护，不会把合计算成负数","订阅价格/数量/券三键，任何变化都自动重算","税费按小计计（不含运费），运费单独加"],cs=["下单前费用确认","含税价格展示","运费明细"],us=["priority 18，低于 PriceCalculator（20）：它只做展示，不发布事件，顺序只影响钩子执行先后。","合计口径与 PriceCalculator 的 total 一致（小计 - 券 + 税 + 运费），两处同时展示时不会对不上。","showBreakdown 关闭时只显示一行合计；税费/运费关闭时既不显示也不计入。"],Un={name:Zi,description:es,since:ns,tags:ts,events:rs,methods:os,methodsNote:is,config:ss,example:as,features:ls,useCases:cs,notes:us},Fn=Object.assign(Xi,{meta:Un});function ds(e){var r,i,l;const n=(i=(r=e.bus)==null?void 0:r.getData)==null?void 0:i.call(r,k.skuVariant);if(typeof(n==null?void 0:n.stock)=="number")return n.stock;const o=(l=e.data)==null?void 0:l.inventory;return typeof o=="number"?o:void 0}const ps=(e={})=>{const{lowStockThreshold:n=5,showOverlayWhenSoldOut:o=!0}=e;return{name:"InventoryPlugin",version:"1.1.0",description:"库存状态展示插件（售罄覆盖层 / 低库存角标）",priority:45,hooks:{onMount:i=>K(i,[k.skuVariant]),renderOverlay:i=>{const l=ds(i),a=typeof l=="number",s=o&&a&&l<=0,c=a&&l>0&&l<=n;return!s&&!c?null:t.jsxs(t.Fragment,{children:[s&&t.jsx("div",{role:"status","aria-live":"polite","data-card-sold-out":"true",style:{position:"absolute",inset:0,background:"rgba(0,0,0,0.5)",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontSize:18,fontWeight:600,borderRadius:8,zIndex:9,pointerEvents:"none"},children:"已售罄"}),c&&t.jsx("div",{style:{position:"absolute",top:8,left:8,background:"#b35c00",color:"#fff",padding:"4px 8px",fontSize:12,borderRadius:4,zIndex:10,pointerEvents:"none"},children:"库存紧张"})]})}},config:e}},gs="InventoryPlugin",ms="库存状态：无货盖「已售罄」蒙层，低库存角标提示。库存口径与 QuantityPlugin 一致（选中变体库存优先）。",hs="2.0.0",fs=["buy","overlay","库存"],ys=[{name:"onMount",when:"卡片挂载完成、插件注册后执行一次",description:"建立观察器 / 监听器，返回清理函数以便卸载时释放"},{name:"renderOverlay",when:"每次渲染，绝对定位覆盖在卡片内容之上",description:"卡片浮层：角标、收藏按钮、动画、骨架遮罩等"}],bs=[],xs="只读取 context 字段（props / state / data），不调用上下文方法",vs=[{name:"lowStockThreshold",type:"number",default:"5",description:"低库存阈值，库存 ≤ 该值且 > 0 时显示「库存紧张」"},{name:"showOverlayWhenSoldOut",type:"boolean",default:"true",description:"无货时是否盖蒙层"}],Cs=`const Card = withPlugins(CardCore, [
  createSKUPlugin({ attributes, variants }),
  createInventoryPlugin({ lowStockThreshold: 3 }),
]);`,Ps=["库存口径：选中变体 stock > data.inventory > 0","订阅 skuVariant，切换规格后售罄/紧张状态实时变化","售罄蒙层与低库存角标互斥（售罄时只盖蒙层）","库存充足时不渲染任何节点"],ws=["售罄置灰","仅剩 N 件提醒","预售/补货提示"],ks=["旧版只看 data.inventory，会和 QuantityPlugin 的口径打架（选了缺货规格时数量变 0，但卡片不显示售罄）；现已统一，两面同时看变体库存。","低库存角标过去挂在已删除的 renderBadge 钩子上，从来没显示过；C2 起并入 renderOverlay。","本插件只做展示，不阻止加购 —— 需要「售罄不可加购」请配合 ActionsPlugin 关闭按钮或自行在 renderCustomActions 判断。"],zn={name:gs,description:ms,since:hs,tags:fs,events:ys,methods:bs,methodsNote:xs,config:vs,example:Cs,features:Ps,useCases:ws,notes:ks},Kn=Object.assign(ps,{meta:zn}),Ss=(e={})=>{const{position:n="top-right",customStyle:o={}}=e;return{name:"BadgePlugin",version:"1.0.0",description:"徽章插件",priority:15,hooks:{renderOverlay:i=>{const l=i.data,a=e.text||(l==null?void 0:l.badge),s=e.type||(l==null?void 0:l.badgeType)||"default";if(!a)return null;const c={premium:{bg:"#FFD700",fg:"#3d2f00"},hot:{bg:"#c4390f",fg:"#fff"},new:{bg:"#2e7d32",fg:"#fff"},sale:{bg:"#c62828",fg:"#fff"},default:{bg:"#6b6b6b",fg:"#fff"}},u={"top-left":{top:"8px",left:"8px"},"top-right":{top:"8px",right:"8px"},"bottom-left":{bottom:"8px",left:"8px"},"bottom-right":{bottom:"8px",right:"8px"}};return t.jsx("div",{style:{position:"absolute",...u[n],padding:"4px 12px",background:c[s].bg,color:c[s].fg,fontSize:"12px",fontWeight:"bold",borderRadius:"4px",zIndex:10,pointerEvents:"none",...o},children:a})}},config:e}},js="BadgePlugin",$s="在卡片角落渲染一枚角标（甄选 / 热卖 / 新品 / 促销）。config 优先，未配置时回落到数据里的 badge 与 badgeType 字段。",Is="2.0.0",Rs=["display","overlay","角标"],Bs=[{name:"renderOverlay",when:"每次渲染，绝对定位覆盖在卡片内容之上",description:"卡片浮层：角标、收藏按钮、动画、骨架遮罩等"}],Ts=[],Os="只读取 context 字段（props / state / data），不调用上下文方法",Ns=[{name:"text",type:"string",default:"-",description:"角标文案；不填则读 data.badge"},{name:"type",type:'"premium" | "hot" | "new" | "sale" | "default"',default:'"default"',description:"配色，对应金 / 橙 / 绿 / 红 / 灰；不填则读 data.badgeType"},{name:"position",type:'"top-left" | "top-right" | "bottom-left" | "bottom-right"',default:'"top-right"',description:"角标贴哪个角"},{name:"customStyle",type:"React.CSSProperties",default:"{}",description:"覆盖默认样式（默认配色之后合并）"}],As=`const Card = withPlugins(CardCore, [
  createBadgePlugin({ text: "甄选", type: "premium" }),
]);

// 也可以在数据里给，config 不写文案时生效
<Card data={{ badge: "限时", badgeType: "sale" }} />;`,_s=["config 与 data 双来源，config 优先","文案为空时整块不渲染（不留空壳节点）","只占 overlay 层，不影响正文布局"],Ds=["商品列表的「甄选 / 自营」标识","限时促销角标","新品标记"],Es=["priority 15，低于库存/倒计时类告警角标；同时开启时后者会盖在上面。","同一张卡只建议用一个 BadgePlugin，多个会叠在同一个角。"],Vn={name:js,description:$s,since:Is,tags:Rs,events:Bs,methods:Ts,methodsNote:Os,config:Ns,example:As,features:_s,useCases:Ds,notes:Es},Wn=Object.assign(Ss,{meta:Vn});function Ye(e){return Array.isArray(e)?e.map(n=>typeof n=="string"?{label:n}:n&&typeof n=="object"&&"label"in n?n:null).filter(n=>!!(n!=null&&n.label)):[]}function Ms(e){const n=/^#?([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(e.trim());if(!n)return"#222";let o=n[1];o.length===3&&(o=o.split("").map(d=>d+d).join(""));const r=d=>d<=.03928?d/12.92:((d+.055)/1.055)**2.4,[i,l,a]=[0,2,4].map(d=>r(parseInt(o.slice(d,d+2),16)/255)),s=.2126*i+.7152*l+.0722*a,c=1.05/(s+.05),u=(s+.05)/(.0144+.05);return c>=u?"#fff":"#222"}const Ls=(e={})=>{const{tags:n=[],maxTags:o=3}=e;return{name:"UserTagPlugin",version:"1.0.0",description:"在图片区域叠加用户标签",priority:35,hooks:{renderOverlay:i=>{var s;const l=Ye(n),a=(l.length?l:Ye((s=i.data)==null?void 0:s.tags)).slice(0,o);return a.length?t.jsx("div",{style:{position:"absolute",bottom:8,right:8,display:"flex",gap:6,flexWrap:"wrap",zIndex:9},children:a.map(c=>t.jsx("span",{style:{padding:"2px 8px",borderRadius:12,fontSize:12,fontWeight:700,background:c.color||"#eee",color:Ms(c.color||"#eee")},children:c.label},c.label))}):null}},config:e}},Us="UserTagPlugin",Fs="在图片右下角叠加一组用户标签（如「宝妈首选」「回购 3 次」），超量自动截断。",zs="2.0.0",Ks=["display","overlay","标签"],Vs=[{name:"renderOverlay",when:"每次渲染，绝对定位覆盖在卡片内容之上",description:"卡片浮层：角标、收藏按钮、动画、骨架遮罩等"}],Ws=[],Hs="只读取 context 字段（props / state / data），不调用上下文方法",Gs=[{name:"tags",type:"UserTag[]",default:"[]",description:"标签列表；data.tags 有值时以数据为准"},{name:"maxTags",type:"number",default:"3",description:"最多展示几个，超出直接丢弃（不做省略号）"}],qs=`const Card = withPlugins(CardCore, [
  createUserTagPlugin({
    tags: [{ label: "回购 3 次" }, { label: "宝妈首选", color: "#ffe0b2" }],
    maxTags: 2,
  }),
]);`,Ys=["data.tags 优先于 config.tags，便于按商品动态给标签","标签自带颜色，未指定时用浅灰底","无标签时不渲染"],Qs=["个性化推荐理由","复购 / 收藏行为标签","人群圈选标签"],Js=["标签过多会挤压图片可视区，maxTags 建议 ≤3。","priority 35，高于徽章（15），两者同在右下角时标签在上层。"],Hn={name:Us,description:Fs,since:zs,tags:Ks,events:Vs,methods:Ws,methodsNote:Hs,config:Gs,example:qs,features:Ys,useCases:Qs,notes:Js},Gn=Object.assign(Ls,{meta:Hn});function Xs(e,n,o){const r=i=>String(i).padStart(2,"0");return`${r(e)}:${r(n)}:${r(o)}`}const Zs=({resolveEnd:e,prefix:n,positionStyle:o,style:r})=>{const i=R.useRef(null),l=i.current??(i.current=e()),[a,s]=R.useState("");return R.useEffect(()=>{let c;const u=()=>{const d=l-Date.now();if(d<=0)return s("已结束"),c!==void 0&&(clearInterval(c),c=void 0),!1;const p=Math.floor(d/36e5),h=Math.floor(d%36e5/6e4),g=Math.floor(d%6e4/1e3);return s(`${n} ${Xs(p,h,g)}`),!0};return u()&&(c=setInterval(u,1e3)),()=>{c!==void 0&&clearInterval(c)}},[l,n]),t.jsx("div",{style:{position:"absolute",background:"rgba(0,0,0,0.7)",color:"#fff",padding:"4px 8px",borderRadius:4,fontFamily:"monospace",fontSize:12,zIndex:10,pointerEvents:"none",...o,...r},children:a})},ea={"top-left":{top:"8px",left:"8px"},"top-right":{top:"8px",right:"8px"},"bottom-left":{bottom:"8px",left:"8px"},"bottom-right":{bottom:"8px",right:"8px"}},na=(e={})=>{const{endTimestamp:n,durationMs:o,position:r="top-left",style:i={},prefix:l="⏰"}=e,a=()=>typeof n=="number"&&n>0?n:Date.now()+(typeof o=="number"?o:60*60*1e3);return{name:"CountdownPlugin",version:"1.0.0",description:"倒计时徽章插件",priority:40,hooks:{renderOverlay:()=>t.jsx(Zs,{resolveEnd:a,prefix:l,positionStyle:ea[r],style:i})},config:e}},ta="CountdownPlugin",ra="倒计时角标：按截止时间或持续时长每秒刷新，归零显示「已结束」并停止计时。",oa="2.0.0",ia=["display","overlay","倒计时"],sa=[{name:"renderOverlay",when:"每次渲染，绝对定位覆盖在卡片内容之上",description:"卡片浮层：角标、收藏按钮、动画、骨架遮罩等"}],aa=[],la="只读取 context 字段（props / state / data），不调用上下文方法",ca=[{name:"endTimestamp",type:"number",default:"-",description:"结束时间戳（毫秒）；与 durationMs 二选一，优先本项"},{name:"durationMs",type:"number",default:"3600000",description:"从挂载时刻起的持续时长（毫秒），默认 1 小时"},{name:"position",type:'"top-left" | "top-right" | "bottom-left" | "bottom-right"',default:'"top-left"',description:"角标位置"},{name:"style",type:"React.CSSProperties",default:"{}",description:"覆盖默认样式（黑底白字等宽）"},{name:"prefix",type:"string",default:'"⏰"',description:"文本前缀"}],ua=`const Card = withPlugins(CardCore, [
  createCountdownPlugin({ endTimestamp: Date.now() + 2 * 3600 * 1000, position: "top-left" }),
]);

// 按「进页面后 30 分钟」倒计时
createCountdownPlugin({ durationMs: 30 * 60 * 1000 });`,da=["endTimestamp 优先于 durationMs","durationMs 在挂载时才求值一次，父级重渲染不会把倒计时重置","归零显示「已结束」并清掉定时器，不再每秒空转","已过期时连定时器都不创建"],pa=["限时秒杀","优惠截止提醒","预售结束倒计时"],ga=["只精确到秒，不做服务端时间校正；客户端时间被改动会直接反映在文案上。","倒计时组件是模块级稳定组件（旧版在 renderOverlay 里 useMemo 造组件，属 hooks 违规）。","多个 CountdownPlugin 会叠在同一个角，只留一个。"],qn={name:ta,description:ra,since:oa,tags:ia,events:sa,methods:aa,methodsNote:la,config:ca,example:ua,features:da,useCases:pa,notes:ga},Yn=Object.assign(na,{meta:qn}),Qe=({filled:e,onClick:n})=>t.jsx("span",{onClick:n,style:{color:e?"#947004":"#767676",cursor:n?"pointer":"default",fontSize:16},children:"★"}),Je=[1,2,3,4,5],ma=({rating:e,reviewCount:n,showRating:o,showReviewCount:r,enableUserReview:i,onReviewSubmit:l})=>{const[a,s]=R.useState(0),[c,u]=R.useState("");return t.jsxs("div",{style:{padding:"8px 12px",borderTop:"1px solid #eee"},children:[o&&t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[t.jsx("div",{children:Je.map(d=>t.jsx(Qe,{filled:d<=Math.round(e)},d))}),t.jsx("span",{style:{color:"#666",fontSize:12},children:e.toFixed(1)}),r&&t.jsxs("span",{style:{color:"#6b6b6b",fontSize:12},children:["（",n," 评价）"]})]}),i&&t.jsxs("div",{style:{marginTop:8,display:"grid",gap:8},children:[t.jsx("div",{children:Je.map(d=>t.jsx(Qe,{filled:d<=a,onClick:()=>s(d)},`user-${d}`))}),t.jsx("textarea",{rows:2,placeholder:"说说你的看法...",value:c,onChange:d=>u(d.target.value),style:{width:"100%",resize:"vertical",padding:6,border:"1px solid #ddd",borderRadius:4}}),t.jsx("button",{onClick:()=>l==null?void 0:l(a,c),style:{padding:"6px 12px",border:"1px solid #ddd",borderRadius:4,background:"#fff",color:"#333",cursor:"pointer"},children:"提交评价"})]})]})},ha=(e={})=>{const{showRating:n=!0,showReviewCount:o=!0,enableUserReview:r=!1,onReviewSubmit:i}=e;return{name:"ReviewPlugin",version:"1.0.0",description:"评分与评价展示插件",priority:30,hooks:{renderFooter:a=>{const s=a.data,c=(s==null?void 0:s.rating)??0,u=(s==null?void 0:s.ratingCount)??0;return t.jsx(ma,{rating:c,reviewCount:u,showRating:n,showReviewCount:o,enableUserReview:r,onReviewSubmit:i})}},config:e}},fa="ReviewPlugin",ya="页脚评价区：星级 + 评分 + 评价数；可选开启用户打分与评论输入。",ba="2.0.0",xa=["buy","footer","评价"],va=[{name:"renderFooter",when:"每次渲染，卡片底部槽位",description:"卡片底部内容（操作行、价格补充、来源）"}],Ca=[],Pa="只读取 context 字段（props / state / data），不调用上下文方法",wa=[{name:"showRating",type:"boolean",default:"true",description:"显示星级与平均分"},{name:"showReviewCount",type:"boolean",default:"true",description:"显示评价条数"},{name:"enableUserReview",type:"boolean",default:"false",description:"开启用户打分与评论输入框"},{name:"onReviewSubmit",type:"(rating: number, comment: string) => void",default:"-",description:"提交回调，自己负责发请求"}],ka=`const Card = withPlugins(CardCore, [
  createReviewPlugin({
    enableUserReview: true,
    onReviewSubmit: (rating, comment) => api.review({ rating, comment }),
  }),
]);

// 评分数据来自 data.rating / data.ratingCount
<Card data={{ rating: 4.6, ratingCount: 128 }} />;`,Sa=["展示态与录入态共用一套星级，enableUserReview 关闭时零交互","评分四舍五入到整星，数字保留一位小数","用户打分/评论是独立组件内的局部状态，改它不会重渲染整张卡"],ja=["商品卡口碑展示","晒单引导","低分商品的差评预警"],$a=["data.rating 缺失时按 0 处理，会显示 0.0 与五颗空星 —— 无评价的商品建议关掉 showRating。","提交只回调、不落库，也不做必填校验；rating = 0 时也可以提交，请在回调里自行拦截。","priority 30，页脚内排在操作按钮（20）之后。"],Qn={name:fa,description:ya,since:ba,tags:xa,events:va,methods:Ca,methodsNote:Pa,config:wa,example:ka,features:Sa,useCases:ja,notes:$a},Jn=Object.assign(ha,{meta:Qn}),Xe=500,Ia=100,Ra=20;function Ba(){if(typeof window>"u"||typeof window.matchMedia!="function")return!1;try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}}const Ta=()=>({name:"AnimationPlugin",version:"1.1.0",description:"卡片进入动画（淡入+上移；respects prefers-reduced-motion）",priority:1,hooks:{onMount:e=>{const n=e.getContainer();if(!n||Ba())return;n.style.opacity="0",n.style.transform=`translateY(${Ra}px)`;const o=setTimeout(()=>{n.style.transition=`opacity ${Xe}ms ease, transform ${Xe}ms ease`,n.style.opacity="1",n.style.transform="translateY(0)"},Ia);return()=>{clearTimeout(o),n.style.opacity="",n.style.transform=""}}}}),Oa="AnimationPlugin",Na="入场动画：挂载时淡入 + 上移 20px。尊重系统「减弱动效」偏好，卸载时清理定时器并复原内联样式。",Aa="2.0.0",_a=["display","animation","动效"],Da=[{name:"onMount",when:"卡片挂载完成、插件注册后执行一次",description:"建立观察器 / 监听器，返回清理函数以便卸载时释放"}],Ea=[{name:"getContainer",signature:"ctx.getContainer(): HTMLDivElement | null",description:"取宿主 DOM 容器，可能为 null，使用前需判空"}],Ma=[],La=`const Card = withPlugins(CardCore, [
  createAnimationPlugin(),
  createImagePlugin(),
  createBadgePlugin({ text: "新品" }),
]);`,Ua=["挂载后 100ms 开始，500ms 内淡入并从 translateY(20px) 归位","prefers-reduced-motion: reduce 时完全不动画（不写任何内联样式）","卸载时 clearTimeout 并把 opacity / transform 复原，容器复用时不会「隐形」"],Fa=["列表首屏的入场节奏","瀑布流/网格的加载观感"],za=["无配置项（工厂不接收参数），要调节奏只能改源码里的 DURATION_MS / DELAY_MS / OFFSET_PX。","priority 1（最低）意味着 onMount 最后执行：入场动画会盖掉其它插件在 onMount 里写的内联 opacity/transform。","HoverPlugin 的放大是在 hover 事件时才写 transform，那时入场动画已结束，两者不冲突；但连续 hover 与入场动画重叠会有轻微抖动，同屏建议只留一个负责 transform。","动画用的是内联 style 而非 CSS 变量，和 D4-B 的样式抽取不是同一套机制；需要主题化时先还原成 class。"],Xn={name:Oa,description:Na,since:Aa,tags:_a,events:Da,methods:Ea,config:Ma,example:La,features:Ua,useCases:Fa,notes:za},Zn=Object.assign(Ta,{meta:Xn}),Ka=(e={})=>{const{showCartButton:n=!0,showWishlistButton:o=!0,cartButtonText:r={add:"加入购物车",remove:"移出购物车"},wishlistButtonText:i={add:"加入心愿单",remove:"移出心愿单"},renderCustomActions:l}=e;return{name:"ActionsPlugin",version:"1.0.0",description:"操作按钮插件",priority:20,hooks:{renderFooter:s=>{const{state:c,bus:u}=s,d=(g,f)=>{var m,x;const y=(x=(m=s.sharedData)==null?void 0:m.get)==null?void 0:x.call(m,g);return typeof y=="boolean"?y:!!f},p=()=>{var f,y;const g=!d("actions:cart",c.cart);(y=(f=s.sharedData)==null?void 0:f.set)==null||y.call(f,"actions:cart",g),u==null||u.emit("cart:change",{cardId:s.cardId,isAdded:g}),s.setState({cart:g})},h=()=>{var f,y;const g=!d("actions:wishlist",c.wishlist);(y=(f=s.sharedData)==null?void 0:f.set)==null||y.call(f,"actions:wishlist",g),u==null||u.emit("wishlist:change",{cardId:s.cardId,isWishlisted:g}),s.setState({wishlist:g})};return l?l(s):t.jsxs("div",{style:{display:"flex",gap:"8px",padding:"12px",borderTop:"1px solid #eee"},children:[n&&t.jsx("button",{onClick:p,style:{flex:1,padding:"8px 16px",border:"1px solid #ddd",borderRadius:"4px",background:c.cart?"#2e7d32":"#fff",color:c.cart?"#fff":"#333",cursor:"pointer",fontSize:"14px",transition:"all 0.2s"},children:c.cart?r.remove:r.add}),o&&t.jsx("button",{onClick:h,style:{flex:1,padding:"8px 16px",border:"1px solid #ddd",borderRadius:"4px",background:c.wishlist?"#c4390f":"#fff",color:c.wishlist?"#fff":"#333",cursor:"pointer",fontSize:"14px",transition:"all 0.2s"},children:c.wishlist?i.remove:i.add})]})}},config:{order:20,...e}}},Va="ActionsPlugin",Wa="页脚的操作按钮区：加入购物车 / 加入心愿单，状态写在卡片 state 上（cart / wishlist），并向外抛出 cart:change 事件。",Ha="2.0.0",Ga=["interaction","footer","按钮"],qa=[{name:"renderFooter",when:"每次渲染，卡片底部槽位",description:"卡片底部内容（操作行、价格补充、来源）"},{name:"cart:change",when:"点击加购按钮后",description:"广播加购结果 { id, count }，供外部购物车同步"},{name:"wishlist:change",when:"点击收藏按钮后",description:"广播收藏状态 { id, active }"}],Ya=[{name:"setState",signature:"ctx.setState(updates: Partial<CardState>): void",description:"合并写入内核 state 并触发重渲染；只有字段真正变化时才更新"}],Qa=[{name:"showCartButton",type:"boolean",default:"true",description:"显示购物车按钮"},{name:"showWishlistButton",type:"boolean",default:"true",description:"显示心愿单按钮"},{name:"cartButtonText",type:"{ add: string; remove: string }",default:'{ add: "加入购物车", remove: "移出购物车" }',description:"购物车按钮在两种状态下的文案"},{name:"wishlistButtonText",type:"{ add: string; remove: string }",default:'{ add: "加入心愿单", remove: "移出心愿单" }',description:"心愿单按钮在两种状态下的文案"},{name:"renderCustomActions",type:"(context) => React.ReactNode",default:"-",description:"在所有按钮之后追加自定义操作区"}],Ja=`const Card = withPlugins(CardCore, [
  createActionsPlugin({
    showWishlistButton: false,
    cartButtonText: { add: "立即抢购", remove: "取消" },
  }),
]);`,Xa=["按钮文案随 cart / wishlist 状态自动切换","点击后同时更新卡片 state 并 emit cart:change，便于外层接购物车","支持 renderCustomActions 追加业务按钮"],Za=["商品卡加购","收藏 / 心愿单","自定义「立即购买」"],el=["state 是每张卡独立的，不做跨卡同步；购物车总量请在外层监听 cart:change 汇总。","renderCustomActions 收到的是插件上下文（含 state / bus / data），不是 React 组件，别在里面调 hook。","与 StatePlugin 同时启用时，state.cart 的初值由 StatePlugin 决定（false），按钮文案会在挂载后对齐。"],et={name:Va,description:Wa,since:Ha,tags:Ga,events:qa,methods:Ya,config:Qa,example:Ja,features:Xa,useCases:Za,notes:el},ee=Object.assign(Ka,{meta:et}),nl=(e={})=>{const{enableShadow:n=!0,enableScale:o=!0,enableBorder:r=!1,shadowIntensity:i="medium",scaleRatio:l=1.02}=e,a={light:"0 2px 8px rgba(0,0,0,0.1)",medium:"0 4px 12px rgba(0,0,0,0.15)",heavy:"0 8px 24px rgba(0,0,0,0.2)"};return{name:"HoverPlugin",version:"1.0.0",description:"悬停效果插件",priority:5,hooks:{transformProps:c=>({...c,containerStyle:{...c.containerStyle,transition:"all 0.3s ease",cursor:"pointer"}}),onHover:(c,u)=>{const d=c.getContainer();d&&(u?(n&&(d.style.boxShadow=a[i]),o&&(d.style.transform=`scale(${l})`),r&&(d.style.border="2px solid #2e7d32")):(d.style.boxShadow="0 2px 4px rgba(0,0,0,0.1)",d.style.transform="scale(1)",r&&(d.style.border="1px solid #eee")))}},config:e}},tl="HoverPlugin",rl="悬停时的视觉反馈：投影 / 轻微放大 / 描边。走 transformProps 注入容器样式，不额外包 DOM。",ol="2.0.0",il=["display","interaction","hover"],sl=[{name:"onHover",when:"指针进入 / 离开卡片（isHovered 布尔值）",description:"悬停态处理：预加载、浮层提示、动效触发"},{name:"transformProps",when:"渲染前链式改写卡片 props",description:"注入默认值、裁剪字段、按 config 覆盖宿主 props"}],al=[{name:"getContainer",signature:"ctx.getContainer(): HTMLDivElement | null",description:"取宿主 DOM 容器，可能为 null，使用前需判空"}],ll=[{name:"enableShadow",type:"boolean",default:"true",description:"悬停加投影"},{name:"enableScale",type:"boolean",default:"true",description:"悬停轻微放大"},{name:"enableBorder",type:"boolean",default:"false",description:"悬停加描边"},{name:"shadowIntensity",type:'"light" | "medium" | "heavy"',default:'"medium"',description:"投影强度"},{name:"scaleRatio",type:"number",default:"1.02",description:"放大倍数，1 表示不放大"}],cl=`const Card = withPlugins(CardCore, [
  createHoverPlugin({ shadowIntensity: "heavy", scaleRatio: 1.03 }),
]);`,ul=["通过 transformProps 改容器样式，零额外 DOM 包裹","阴影 / 放大 / 描边可独立开关","过渡曲线固定 0.3s ease，避免和布局动画打架"],dl=["列表卡片的可点击暗示","图片墙的悬停聚焦"],pl=["priority 5（最低），保证它先注入基础样式、被其它插件的样式覆盖。","放大用 transform，不触发重排；但父容器 overflow: hidden 时会裁掉边缘，需要留 padding。"],nt={name:tl,description:rl,since:ol,tags:il,events:sl,methods:al,config:ll,example:cl,features:ul,useCases:dl,notes:pl},tt=Object.assign(nl,{meta:nt}),gl=(e={})=>{const{onCartChange:n,onWishlistChange:o}=e;return{name:"StatePlugin",version:"1.0.0",description:"状态管理插件",priority:100,hooks:{onMount:i=>{i.setState({cart:!1,wishlist:!1})},onStateChange:(i,l,a)=>{l.cart!==a.cart&&(n==null||n(i.cardId,!!a.cart)),l.wishlist!==a.wishlist&&(o==null||o(i.cardId,!!a.wishlist))}},config:e}},ml="StatePlugin",hl="卡片状态初值与差分回调：把 cart / wishlist 初始化为 false，并在状态变化时回调 config 里的 onCartChange / onWishlistChange。",fl="2.0.0",yl=["infra","state","生命周期"],bl=[{name:"onMount",when:"卡片挂载完成、插件注册后执行一次",description:"建立观察器 / 监听器，返回清理函数以便卸载时释放"},{name:"onStateChange",when:"setState 提交后（回传 prevState / nextState 两份完整状态）",description:"状态差分后的联动：刷新派生值、上报曝光、触发动效；setState updater 本身保持纯函数"}],xl=[{name:"setState",signature:"ctx.setState(updates: Partial<CardState>): void",description:"合并写入内核 state 并触发重渲染；只有字段真正变化时才更新"}],vl=[{name:"enableCart",type:"boolean",default:"true",description:"启用购物车状态"},{name:"enableWishlist",type:"boolean",default:"true",description:"启用心愿单状态"},{name:"onCartChange",type:"(cardId: string, isAdded: boolean) => void",default:"-",description:"购物车状态变化回调（由 onStateChange 差分触发）"},{name:"onWishlistChange",type:"(cardId: string, isWishlisted: boolean) => void",default:"-",description:"心愿单状态变化回调"}],Cl=`const Card = withPlugins(CardCore, [
  createStatePlugin({
    onCartChange: (cardId, added) => cart.add(cardId, added),
    onWishlistChange: (cardId, on) => wishlist.toggle(cardId, on),
  }),
]);`,Pl=["挂载时把 cart / wishlist 置为 false，保证按钮文案有确定的初值","回调走 onStateChange 的差分比较，只在真的变了才触发（不会因无关状态更新而误报）","priority 100，是整个插件链里最早初始化状态的"],wl=["加购/收藏的外部同步","按钮文案的初始态","跨卡购物车汇总"],kl=["旧版的 onCartChange / onWishlistChange 是**插件钩子**（24 个钩子里的两个），但没有任何地方触发它们 —— 属于死钩子，C2 已删除；现在同名的是 config 回调，由 onStateChange 差分驱动，名字保留是为了兼容旧配置。","enableCart / enableWishlist 目前只影响状态初始化，不阻止别的插件写 cart / wishlist（真要禁用请别装 ActionsPlugin）。","本插件不持久化，刷新即丢；需要保留状态请在外层接 onCartChange 自己存。"],rt={name:ml,description:hl,since:fl,tags:yl,events:bl,methods:xl,config:vl,example:Cl,features:Pl,useCases:wl,notes:kl},ot=Object.assign(gl,{meta:rt}),pe="__analytics.visibleSince",Sl=(e={})=>{const n=(o,r)=>{var i;try{typeof e.transport=="function"?e.transport(o,r):(i=e.sdk)!=null&&i.track?e.sdk.track(o,r):console.log(`[Analytics] ${o}`,r)}catch(l){console.warn("[Analytics] transport failed",l)}};return{name:"AnalyticsPlugin",version:"1.3.0",description:"点击、购物车与曝光统计（曝光复用 Core 的可见性，不重复建 IO）",priority:50,hooks:{onMount:o=>{var l,a,s,c;const r=(a=(l=o.bus)==null?void 0:l.on)==null?void 0:a.call(l,"sku:change",u=>{n("sku_change",{cardId:o.cardId,...u})}),i=(c=(s=o.bus)==null?void 0:s.on)==null?void 0:c.call(s,"price:change",u=>{n("price_change",{cardId:o.cardId,...u})});return()=>{try{r==null||r()}catch{}try{i==null||i()}catch{}}},onVisibilityChange:(o,r)=>{var s,c,u;const i=o.sharedData;if(r){(s=i==null?void 0:i.set)==null||s.call(i,pe,Date.now()),n("exposure_enter",{cardId:o.cardId,ts:Date.now()});return}const l=(c=i==null?void 0:i.get)==null?void 0:c.call(i,pe);(u=i==null?void 0:i.delete)==null||u.call(i,pe);const a=typeof l=="number"?Date.now()-l:0;(!e.minExposureMs||a>=e.minExposureMs)&&n("exposure_exit",{cardId:o.cardId,ts:Date.now(),dwellMs:a})},onClick:(o,r)=>{n("click",{cardId:o.cardId,position:{x:r.clientX,y:r.clientY}})},onStateChange:(o,r,i)=>{r.cart!==i.cart&&n("cart",{cardId:o.cardId,action:i.cart?"add":"remove"}),r.wishlist!==i.wishlist&&n("wishlist",{cardId:o.cardId,action:i.wishlist?"add":"remove"})}}}},jl="AnalyticsPlugin",$l="曝光 / 点击 / 加购 / 心愿单上报。曝光复用 CardCore 的可见性观测（不自建 IntersectionObserver），可接自定义 transport 或第三方 SDK。",Il="2.0.0",Rl=["infra","analytics","埋点"],Bl=[{name:"onMount",when:"卡片挂载完成、插件注册后执行一次",description:"建立观察器 / 监听器，返回清理函数以便卸载时释放"},{name:"onClick",when:"用户点击卡片主体（内部按钮的点击也会冒泡到这里，需自行判 target）",description:"整卡点击行为：跳转、埋点、展开详情"},{name:"onVisibilityChange",when:"IntersectionObserver 判定可见性变化（首次判定也会触发）",description:"曝光 / 离开视口的上报与懒执行入口"},{name:"onStateChange",when:"setState 提交后（回传 prevState / nextState 两份完整状态）",description:"状态差分后的联动：刷新派生值、上报曝光、触发动效；setState updater 本身保持纯函数"}],Tl=[],Ol="只读取 context 字段（props / state / data），不调用上下文方法",Nl=[{name:"transport",type:"(event: string, payload: unknown) => void",default:"-",description:"自定义上报管道，优先级高于 sdk"},{name:"sdk",type:"{ track?: (event: string, payload: unknown) => void }",default:"-",description:"第三方 SDK 适配；transport 未提供时才用"},{name:"minExposureMs",type:"number",default:"0",description:"最小曝光时长阈值，短于此时不上报 exposure_exit"}],Al=`const Card = withPlugins(CardCore, [
  createAnalyticsPlugin({
    transport: (event, payload) => beacon("/track", { event, ...payload }),
    minExposureMs: 500,
  }),
]);`,_l=["事件：exposure_enter / exposure_exit / click / cart / wishlist / sku_change / price_change","曝光进入/离开由 Core 的 onVisibilityChange 下发，每张卡只有一个观测器","曝光时长存在该卡自己的 sharedData 里，多卡并发不会串数据","transport 抛错被吞掉并 warn，不影响卡片渲染"],Dl=["商品曝光率统计","加购转化漏斗","点击热区埋点"],El=["priority 50，高于价格/券类发布方（20~22）：onMount 里先订阅，才收得到首个 price:change / sku:change。","dwellMs 用 Date.now() 计算，不依赖 performance.now()（后者在部分 SSR/测试环境缺失）。","未提供 transport 也未提供 sdk 时打到 console.log，线上务必显式接入，否则等于静默丢弃。"],it={name:jl,description:$l,since:Il,tags:Rl,events:Bl,methods:Tl,methodsNote:Ol,config:Nl,example:Al,features:_l,useCases:Dl,notes:El},st=Object.assign(Sl,{meta:it});function Ze(e){const n=e.target;n&&(e.key==="Enter"?n.click():e.key===" "&&(e.preventDefault(),n.click()))}const xe="a11y-live-region";let re=0;function Ml(){if(typeof document>"u")return null;let e=document.getElementById(xe);return e||(e=document.createElement("div"),e.id=xe,e.setAttribute("aria-live","polite"),e.setAttribute("role","status"),e.style.position="absolute",e.style.left="-9999px",e.style.width="1px",e.style.height="1px",e.style.overflow="hidden",document.body.appendChild(e)),re+=1,e}function Ll(){var e;re=Math.max(0,re-1),!(re>0)&&(typeof document>"u"||(e=document.getElementById(xe))==null||e.remove())}const Ul=(e={})=>{const{announceOnFocus:n=!1,keyboardNavigation:o=!0,highContrast:r=!1}=e;return{name:"A11yPlugin",version:"1.1.0",description:"无障碍增强插件（ARIA与键盘导航）",priority:100,hooks:{onMount:l=>{var d,p;const a=l.getContainer();if(!a)return;const s=((d=l.data)==null?void 0:d.name)||((p=l.data)==null?void 0:p.title)||"商品卡片";a.setAttribute("role","article"),a.setAttribute("aria-label",s),o&&(a.setAttribute("tabindex","0"),a.addEventListener("keydown",Ze));let c=null;const u=()=>{c&&(c.textContent=`聚焦：${s}`)};return n&&(c=Ml(),a.addEventListener("focus",u)),r&&(a.style.outline="2px solid #000",a.style.backgroundColor="#fff",a.style.color="#000"),()=>{a.removeEventListener("keydown",Ze),n&&(a.removeEventListener("focus",u),Ll()),a.removeAttribute("tabindex"),a.removeAttribute("role"),a.removeAttribute("aria-label")}}},config:e}},Fl="A11yPlugin",zl="无障碍增强：给卡片补 role / aria-label、可选键盘导航与聚焦播报、高对比配色。",Kl="2.0.0",Vl=["infra","a11y","无障碍"],Wl=[{name:"onMount",when:"卡片挂载完成、插件注册后执行一次",description:"建立观察器 / 监听器，返回清理函数以便卸载时释放"}],Hl=[{name:"getContainer",signature:"ctx.getContainer(): HTMLDivElement | null",description:"取宿主 DOM 容器，可能为 null，使用前需判空"}],Gl=[{name:"announceOnFocus",type:"boolean",default:"false",description:"聚焦时向全局播报区写入「聚焦：xx」"},{name:"keyboardNavigation",type:"boolean",default:"true",description:"容器可聚焦，Enter / Space 触发点击"},{name:"highContrast",type:"boolean",default:"false",description:"黑描边白底黑字的高对比模式"}],ql=`const Card = withPlugins(CardCore, [
  createA11yPlugin({ keyboardNavigation: true, announceOnFocus: true }),
]);`,Yl=["role=article + aria-label（取 data.name / data.title，兜底「商品卡片」）","全局播报区 #a11y-live-region 按引用计数共享，最后一张卡卸载时才移除","focus / keydown 监听都是具名 handler，随卸载一起摘掉，不累积","卸载时清掉 role / tabindex / aria-label，容器被复用时不留脏属性"],Ql=["商品列表的无障碍改造","键盘用户浏览","读屏播报"],Jl=["priority 100，和 StatePlugin 同属最早执行的一批（要赶在渲染前把 ARIA 打上）。","Enter / Space 是直接在事件目标上 .click()，若子元素本身是按钮会触发两次 —— 卡内已有原生按钮时建议关掉 keyboardNavigation。","播报区是 document.body 上的单例节点，SSR 下不会创建（typeof document 守卫），水合后才生效。"],at={name:Fl,description:zl,since:Kl,tags:Vl,events:Wl,methods:Hl,config:Gl,example:ql,features:Yl,useCases:Ql,notes:Jl},lt=Object.assign(Ul,{meta:at}),Xl=(e={})=>{const{breakpoints:n={mobile:600,tablet:900,desktop:1200},layouts:o={mobile:"vertical",tablet:"vertical",desktop:"horizontal"},containerStyles:r={}}=e,i=(a,s)=>{if(!a)return;const c=s<=n.mobile,u=s>n.mobile&&s<=n.tablet,d=c?o.mobile:u?o.tablet:o.desktop;a.style.transition=a.style.transition||"all 0.2s ease",a.setAttribute("data-layout",d||"vertical");const p=c?r.mobile:u?r.tablet:r.desktop;p&&Object.assign(a.style,p)};return{name:"ResponsivePlugin",version:"1.0.0",description:"根据卡片尺寸切换布局与样式",priority:80,hooks:{onMount:a=>{const s=a.getSize();i(a.getContainer(),s.width)},onResize:(a,s)=>{i(a.getContainer(),s)},transformProps:a=>({...a,containerStyle:{boxSizing:"border-box",width:"100%",...a.containerStyle}})},config:e}},Zl="ResponsivePlugin",ec="按容器宽度切换布局方向与容器样式：手机/平板竖向、桌面横向，并在容器上写 data-layout 供 CSS 选择器使用。",nc="2.0.0",tc=["media","responsive","布局"],rc=[{name:"onMount",when:"卡片挂载完成、插件注册后执行一次",description:"建立观察器 / 监听器，返回清理函数以便卸载时释放"},{name:"onResize",when:"容器尺寸变化（width / height，ResizeObserver 驱动）",description:"按尺寸切换排版或降级（如窄卡隐藏副标题）"},{name:"transformProps",when:"渲染前链式改写卡片 props",description:"注入默认值、裁剪字段、按 config 覆盖宿主 props"}],oc=[{name:"getContainer",signature:"ctx.getContainer(): HTMLDivElement | null",description:"取宿主 DOM 容器，可能为 null，使用前需判空"},{name:"getSize",signature:"ctx.getSize(): CardSize",description:"读取宿主容器当前尺寸（px），用于按尺寸排版或降级"}],ic=[{name:"breakpoints",type:"{ mobile: number; tablet: number; desktop: number }",default:"{ mobile: 600, tablet: 900, desktop: 1200 }",description:"三档宽度阈值（px），按容器实际宽度判断"},{name:"layouts",type:'{ mobile?: "vertical" | "horizontal"; tablet?: ...; desktop?: ... }',default:'{ mobile: "vertical", tablet: "vertical", desktop: "horizontal" }',description:"各档位的布局方向"},{name:"containerStyles",type:"{ mobile?: CSSProperties; tablet?: CSSProperties; desktop?: CSSProperties }",default:"{}",description:"各档位注入到容器的内联样式"}],sc=`const Card = withPlugins(CardCore, [
  createResponsivePlugin({
    breakpoints: { mobile: 480, tablet: 768, desktop: 1024 },
    layouts: { mobile: "vertical", tablet: "horizontal", desktop: "horizontal" },
  }),
]);`,ac=["按容器宽度而非视口宽度判断，同一页面可混排不同尺寸卡片",'在容器上写 data-layout，配套 CSS 用 [data-layout="horizontal"] 精准命中',"切换布局时自动加 0.2s 过渡"],lc=["PC / 移动端共用一套卡片","侧边栏窄卡与主区宽卡并存","响应式商品墙"],cc=["改的是容器的内联样式与属性，样式优先级高于外部 class，需要外部覆盖时要显式写 !important。","containerStyles 是按档位整体 Object.assign，多次切换不会自动回滚上一档的样式 —— 想让样式互斥，请给每档写全字段。","与 HoverPlugin 的 transform 冲突时以后执行的为准，二者都在 transformProps 层，建议只保留一个负责动画。"],ct={name:Zl,description:ec,since:nc,tags:tc,events:rc,methods:oc,config:ic,example:sc,features:ac,useCases:lc,notes:cc},ut=Object.assign(Xl,{meta:ct}),uc=""+new URL("demo-Dt_qGC1z.mp4",import.meta.url).href,dc=Nr([Sn({alt:"商品主图"})]),pc={meta:{slug:"image",title:"ImagePlugin：主图 + 破图兜底",group:"media",plugin:"ImagePlugin",intro:"读 data.image 渲染头部主图，固定比例裁切；图加载失败时走 fallback，容器高度不塌。",why:"列表卡和商详卡的第一屏都是图。图挂掉时如果容器塌了，整张卡会跳一下 —— 兜底比展示更重要。",plugs:[{fn:"createImagePlugin",cfg:'alt: "商品主图"',why:"把主图放进头部区，并在破图时用 placeholder 顶住高度"}],props:["padding={0}"],note:"没有图源时它返回 null（头部不占位），不会渲染一个空的 <img>；主图还会跟随总线 sku.variant 自动换图。",controls:[{key:"source",label:"图源",kind:"select",init:"data",options:[{label:"data.image",value:"data"},{label:"无图（不渲染）",value:"none"},{label:"坏图（走兜底）",value:"broken"}]}]},Stage:({cfg:e})=>{const n=e.source==="none"?{...w,image:void 0}:e.source==="broken"?{...w,image:"https://invalid.example/broken.png"}:w;return t.jsx(dc,{cardId:"media-image",data:n,padding:0,children:t.jsx(B,{title:w.title,subtitle:w.subtitle})})}},gc={meta:{slug:"video",title:"VideoPlugin：头部视频 + 悬停播放",group:"media",plugin:"VideoPlugin",intro:"16:9 头部视频，可配封面、静音、循环、悬停播放。默认不自动播 —— 带声自动播会被浏览器拦，用户也烦。",why:"服饰 / 家电 / 户外这类商品，视频比图更能说明「用起来什么感觉」，但必须由用户决定播不播。",plugs:[{fn:"createVideoPlugin",cfg:`src: videoUrl, muted: {{muted}},
        playOnHover: {{hoverPlay}}`,why:"提供头部视频区，并在悬停时播放 / 移出暂停"}],props:["padding={0}"],note:"如果同时装了 GalleryPlugin，Gallery 会声明 media.handledByGallery，Video 自动让位（避免出现两个播放器）。",controls:[{key:"hoverPlay",label:"悬停播放",kind:"switch",init:!1},{key:"muted",label:"静音",kind:"switch",init:!0}]},Stage:({cfg:e})=>{const n=N([$n({src:uc,poster:j({label:"视频封面",width:480,height:270}),muted:!!e.muted,playOnHover:!!e.hoverPlay,controls:!0})]);return t.jsx(n,{cardId:"media-video",data:w,padding:0,children:t.jsx(B,{title:w.title,subtitle:"把鼠标移到视频上：开了「悬停播放」才会真的动"})})}},mc={meta:{slug:"gallery",title:"GalleryPlugin：多图轮播 + 缩略图",group:"media",plugin:"GalleryPlugin",intro:"多图轮播，可开指示器、缩略图、自动播；support 把视频插进第 N 位。选规格时若变体带图，主图会跟着切。",why:"商详卡有 3–6 张图时，用缩略图比用圆点更省一次点击 —— 用户能直接跳到想看的那张。",plugs:[{fn:"createGalleryPlugin",cfg:`images: data.images,
        autoplay: {{autoplay}},
        showThumbnails: {{thumbs}},
        interval: {{interval}}`,why:"轮播 + 缩略图 + 自动播，替代「一张主图 + 一串小图」的手写实现"}],props:["padding={0}"],note:"自动播要配合 interval；用户手动点过之后应停掉自动播（本插件在交互后自动暂停，避免「抢控制权」）。",controls:[{key:"interval",label:"自动播间隔",kind:"number",init:3e3,min:1e3,max:6e3,step:500},{key:"autoplay",label:"自动播",kind:"switch",init:!1},{key:"thumbs",label:"缩略图",kind:"switch",init:!0}]},Stage:({cfg:e})=>{var o;const n=N([Rn({images:w.images,autoplay:!!e.autoplay,interval:Number(e.interval),showThumbnails:!!e.thumbs,showIndicators:!0})]);return t.jsx(n,{cardId:"media-gallery",data:w,padding:0,children:t.jsx(B,{title:w.title,subtitle:`${((o=w.images)==null?void 0:o.length)??0} 张图 · 点缩略图直接跳`})})}},hc=[pc,gc,mc],dt=(e,n)=>({name:"BusLoggerLocal",priority:0,hooks:{onMount:o=>{const r=e.map(i=>o.bus.on(i,l=>n(`${i} → ${JSON.stringify(l)}`,"info")));return()=>r.forEach(i=>i())}}}),fc=w.attributes,yc=Se(w),bc={meta:{slug:"sku",title:"SKUPlugin：选规格，写总线",group:"buy",plugin:"SKUPlugin",intro:"属性选择器。选中组合命中变体后，把 selection / variant / price / image 四个键写进总线 —— 它是整条交易链唯一的源。",why:"多规格商品的「选颜色 → 选尺码 → 价格跟着变」全靠它。其它插件不要自己算规格，读总线就行。",plugs:[{fn:"createSKUPlugin",cfg:`attributes: attrs,
        variants: variants`,why:"提供属性选择 UI，并把命中的变体写进总线"},{fn:"createBusLogger",why:"页内局部插件：把总线写入抄到日志，看清「谁在什么时候写了什么」",local:!0}],props:["padding={16}"],note:"属性没选全就不写 variant —— 此时价格会回退到商品级 price，而不是拿「颜色对了尺码没选」的变体价顶上。",children:'      <Content title={product.title} subtitle="选完颜色 + 尺码，右侧日志会写出命中的变体" />',dataCode:`// SKU 插件需要两份数据：属性定义 + 变体列表
attributes: [
  { name: "颜色", options: ["赤陶", "橄榄"] },
  { name: "尺码", options: ["M", "L"] },
],
variants: [
  { sku: "TS-RED-M", attrs: { 颜色: "赤陶", 尺码: "M" }, price: 319, stock: 3 },
  { sku: "TS-RED-L", attrs: { 颜色: "赤陶", 尺码: "L" }, price: 319, stock: 12 },
  { sku: "TS-OLIVE-M", attrs: { 颜色: "橄榄", 尺码: "M" }, price: 299, stock: 26 },
  { sku: "TS-OLIVE-L", attrs: { 颜色: "橄榄", 尺码: "L" }, price: 299, stock: 0 },
],`},Stage:({log:e})=>{const n=N([je({attributes:fc,variants:yc}),dt(["sku.selection","sku.variant","sku.price"],e)]);return t.jsx(n,{cardId:"buy-sku",data:w,padding:16,children:t.jsx(B,{title:w.title,subtitle:"选完颜色 + 尺码，右侧日志会写出命中的变体"})})}},xc={meta:{slug:"quantity",title:"QuantityPlugin：步进器与库存上限",group:"buy",plugin:"QuantityPlugin",intro:"数量步进器。上限优先取「选中变体的库存」，没有变体才退回商品级 inventory；规格切换时可选择重置到 min。",why:"限量 / 秒杀场景里，数量上限算错会直接产生超卖订单 —— 上限必须跟着选中的规格走。",plugs:[{fn:"createQuantityPlugin",cfg:`min: {{min}}, useVariantStock: true,
        // max 交给库存推断：写死就会绕开库存`,why:"提供步进器，并在规格切换 / 库存下降时把数量钳回合法区间"}],props:["padding={16}","data={{ ...product, inventory: {{inventory}} }}"],note:"不装 SKU 时上限只能取商品级 inventory；这也是工坊里把两者都勾上时提示「上限看起来没生效」的原因。",controls:[{key:"min",label:"min",kind:"number",init:1,min:1,max:5},{key:"inventory",label:"库存 inventory",kind:"number",init:12,min:0,max:40}]},Stage:({cfg:e})=>{const n=N([On({min:Number(e.min),useVariantStock:!0})]);return t.jsx(n,{cardId:"buy-quantity",data:{...w,inventory:Number(e.inventory)},padding:16,children:t.jsx(B,{title:w.title,subtitle:"拖「库存」到 3 以下：步进器上限会跟着收"})})}},vc={meta:{slug:"price",title:"PriceCalculatorPlugin：到手价 / 折扣 / 省多少",group:"buy",plugin:"PriceCalculatorPlugin",intro:"读 data.price、总线 sku.price / quantity / coupon.applied，算出到手价、折扣百分比、节省金额。价格区（priceArea）也由它提供。",why:"用户只看「到手价」。把原价、折扣、省多少拆成三个插件各自算，迟早会出现三个数字对不上。",plugs:[{fn:"createPriceCalculatorPlugin",cfg:"showDiscount: {{discount}}, showSavings: {{savings}}, showTotalPrice: true",why:"价格区唯一的决策者：所有价格数字都从它出，别的插件不要再算一遍"}],props:["padding={16}","data={product}"],note:"它同时提供 renderPriceArea —— 复合组件的 <ProductCard.Price> 就是靠这个槽位把「单价 / 折扣 / 省多少」拼进一行的。",controls:[{key:"discount",label:"显示折扣",kind:"switch",init:!0},{key:"savings",label:"显示节省",kind:"switch",init:!0}]},Stage:({cfg:e})=>{const n=N([$e({showDiscount:!!e.discount,showSavings:!!e.savings,showTotalPrice:!0})]);return t.jsx(n,{cardId:"buy-price",data:w,padding:16,children:t.jsx(B,{title:w.title,subtitle:`原价 ${w.oldPrice} → 现价 ${w.price}`})})}},Cc={meta:{slug:"compare",title:"ComparePricePlugin：外部价格参照",group:"buy",plugin:"ComparePricePlugin",intro:"列出竞品 / 其它渠道价格，标出最低价，并在「比我们便宜」时高亮提醒。数据来自配置，不联网。",why:"比价是转化工具，不是装饰。它必须老实 —— 我们比谁贵就得显示贵，否则用户一旦发现就会失去信任。",plugs:[{fn:"createComparePricePlugin",cfg:"competitors: competitors, showLowestPrice: true, highlightLowerThanOurPrice: true",why:"渲染比价列表并标出最低价，同时在 priceArea 里放一条「低于本店」提示"}],props:["padding={16}"],note:"价格来自配置：真实项目里请在服务端算好再下发，不要让前端去抓竞品页面（合规与稳定性都扛不住）。",children:'      <Content title={product.title} subtitle="竞品 288 比本店 299 便宜：会高亮，这是刻意的" />'},Stage:()=>{const e=N([_n({competitors:[{name:"线下专柜",price:399},{name:"某电商",price:288},{name:"官方旗舰",price:319}],showLowestPrice:!0,highlightLowerThanOurPrice:!0,sortBy:"price",sortOrder:"asc"})]);return t.jsx(e,{cardId:"buy-compare",data:w,padding:16,children:t.jsx(B,{title:w.title,subtitle:"竞品 288 比本店 299 便宜：会高亮，这是刻意的"})})}},Pc={meta:{slug:"coupon",title:"CouponPlugin：领券与门槛提示",group:"buy",plugin:"CouponPlugin",intro:"券列表 + 门槛提示 + 领取。领取写入总线 coupon.applied，价格与汇总插件据此重算。",why:"「差 20 元可用 30 元券」是最有效的凑单提示；但门槛判断必须和价格计算用同一份合计，否则会出现「领了却说不能用」。",plugs:[{fn:"createCouponPlugin",cfg:"coupons: coupons",why:"渲染券列表、判断门槛，并把可用券写进总线"},{fn:"createBusLogger",why:"页内局部插件：订阅 coupon.applied，看清领取动作真的改了总线",local:!0}],props:["padding={16}"],note:"券的 discount 是「金额」不是「百分比」；minAmount 未达时按钮禁用并显示差额，不要偷偷把价格改低来「凑」。",children:'      <Content title={product.title} subtitle="点右侧「领取」：日志会写出 coupon.applied" />'},Stage:({log:e})=>{const n=N([En({coupons:[{code:"NEW30",discount:30,minAmount:199,expiry:new Date(Date.now()+6048e5)},{code:"VIP50",discount:50,minAmount:399,expiry:new Date(Date.now()+2592e6)},{code:"FREESHIP",discount:12,minAmount:99}]}),dt(["coupon.applied"],e)]);return t.jsx(n,{cardId:"buy-coupon",data:w,padding:16,children:t.jsx(B,{title:w.title,subtitle:"点券上的「领取」：日志会写出 coupon.applied"})})}},wc={meta:{slug:"coupon-recommend",title:"CouponRecommendPlugin：自动挑最省的那张",group:"buy",plugin:"CouponRecommendPlugin",intro:"从候选券里算出「当前最优」并自动应用，同时在价格区挂一条「已用券」说明；覆盖层有一个可展开的券包。",why:"券多了用户不会算。默认帮他用最优的，比让他自己一个个试更能提升转化 —— 但要明确告诉他用了哪张。",plugs:[{fn:"createCouponRecommendPlugin",cfg:"coupons: coupons, autoApplyBest: true",why:"按当前合计挑最优券、写 coupon.applied，并在 priceArea 说明用了哪张"}],props:["padding={16}"],note:"autoApplyBest 只做「默认值」，用户手动换券之后不要每次重算又改回去 —— 那会让人觉得「点了没用」。",children:'      <Content title={product.title} subtitle="券包里 FREESHIP 永远可用、VIP50 门槛 399 未达" />'},Stage:()=>{const e=N([Ln({coupons:[{code:"NEW30",discount:30,minAmount:199},{code:"VIP50",discount:50,minAmount:399},{code:"FREESHIP",discount:12,minAmount:99}],autoApplyBest:!0})]);return t.jsx(e,{cardId:"buy-coupon-recommend",data:w,padding:16,children:t.jsx(B,{title:w.title,subtitle:"券包里 FREESHIP 永远可用、VIP50 门槛 399 未达"})})}},kc={meta:{slug:"order-summary",title:"OrderSummaryPlugin：合计、运费、税",group:"buy",plugin:"OrderSummaryPlugin",intro:"把「单价 × 数量 − 优惠 + 运费 + 税」算成一份明细。所有输入都来自总线，它只负责算与展示。",why:"结算区的合计必须只有一处计算。散在各处时，最典型的 bug 就是「明细加起来和合计对不上」。",plugs:[{fn:"createOrderSummaryPlugin",cfg:"showBreakdown: true, shippingFee: {{shipping}}, taxRate: 0.06",why:"统一算合计并给出明细行，避免每个页面各写一遍"}],props:["padding={16}"],note:"税与运费都是配置项：真实项目应从服务端拿，前端只做展示；这里给固定值是为了让示例稳定可复现。",controls:[{key:"shipping",label:"运费",kind:"number",init:12,min:0,max:30,step:2}]},Stage:({cfg:e})=>{const n=N([Fn({showBreakdown:!0,showShipping:!0,shippingFee:Number(e.shipping),taxRate:.06})]);return t.jsx(n,{cardId:"buy-summary",data:w,padding:16,children:t.jsx(B,{title:w.title,subtitle:"合计 = 单价 × 数量 − 优惠 + 运费 + 税"})})}},Sc={meta:{slug:"inventory",title:"InventoryPlugin：低库存 / 售罄覆盖层",group:"buy",plugin:"InventoryPlugin",intro:"按库存量分三档：充足 / 低库存（≤ 阈值）/ 售罄。低库存给紧迫感，售罄则直接盖一层「已售罄」。",why:"把「还剩 3 件」写成营销话术很容易，但库存是事实：阈值必须是可配的，售罄时不能让用户还能加购。",plugs:[{fn:"createInventoryPlugin",cfg:"lowStockThreshold: {{threshold}}, showOverlayWhenSoldOut: true",why:"按阈值渲染库存提示，售罄时叠加覆盖层挡住加购入口"}],props:["padding={16}","data={{ ...product, inventory: {{stock}} }}"],note:"库存取 data.inventory；有选中变体时优先用变体库存 —— 所以这页拖「库存」比拖别的更直观。",controls:[{key:"stock",label:"库存",kind:"number",init:4,min:0,max:30},{key:"threshold",label:"低库存阈值",kind:"number",init:10,min:1,max:20}]},Stage:({cfg:e})=>{const n=N([Kn({lowStockThreshold:Number(e.threshold),showOverlayWhenSoldOut:!0})]);return t.jsx(n,{cardId:"buy-inventory",data:{...w,inventory:Number(e.stock)},padding:16,children:t.jsx(B,{title:w.title,subtitle:"把库存拖到 0：覆盖层会盖住整张卡"})})}},jc=[bc,xc,vc,Cc,Pc,wc,kc,Sc],$c=[{label:"premium 甄选",value:"premium"},{label:"hot 热卖",value:"hot"},{label:"new 新品",value:"new"},{label:"sale 特惠",value:"sale"}],Ic={meta:{slug:"badge",title:"BadgePlugin：四角角标",group:"display",plugin:"BadgePlugin",intro:"在 overlay 层画一个角标，四角可选、四种预设语义色。它不吃鼠标事件，不会挡住下面的加购按钮。",why:"「甄选 / 新品 / 特惠」这类标签是运营位，应该由运营配置决定，而不是写死在卡片模板里。",plugs:[{fn:"createBadgePlugin",cfg:'text: "{{text}}", type: "{{type}}", position: "{{position}}"',why:"把运营标签画在角上，且不拦截点击"}],props:["padding={0}"],note:"overlay 层是 pointer-events: none，只有角标本身可点；否则整张卡会被这层盖住，加购按钮点不动。",controls:[{key:"text",label:"文案",kind:"select",init:"甄选",options:[{label:"甄选",value:"甄选"},{label:"限时",value:"限时"},{label:"仅此一件",value:"仅此一件"}]},{key:"type",label:"语义",kind:"select",init:"premium",options:$c},{key:"position",label:"位置",kind:"select",init:"top-left",options:[{label:"左上",value:"top-left"},{label:"右上",value:"top-right"},{label:"左下",value:"bottom-left"},{label:"右下",value:"bottom-right"}]}]},Stage:({cfg:e})=>{const n=N([Wn({text:String(e.text),type:e.type,position:e.position})]);return t.jsx(n,{cardId:"display-badge",data:w,padding:0,children:t.jsx(B,{title:w.title,subtitle:"角标在 overlay 层，不吃点击"})})}},Rc={meta:{slug:"user-tag",title:"UserTagPlugin：会员 / 复购标签",group:"display",plugin:"UserTagPlugin",intro:"一排细标签，表达「这个人和这件商品的关系」：会员等级、复购次数、收藏夹分组。超量按 maxTags 截断。",why:"个性化提示比通用标签有效得多，但一屏不能超过 2–3 个 —— 多了就变成噪音。maxTags 就是那个保险丝。",plugs:[{fn:"createUserTagPlugin",cfg:"tags: tags, maxTags: {{max}}",why:"把用户维度的标签画在卡片上，并按 maxTags 截断"}],props:["padding={16}"],note:"标签颜色建议由数据侧给（与会员体系一致），不要在前端按 label 做 if 判断 —— 加一个等级就要改一次代码。",controls:[{key:"max",label:"maxTags",kind:"number",init:2,min:1,max:4}]},Stage:({cfg:e})=>{const n=N([Gn({tags:[{label:"88VIP",color:"#b4553c"},{label:"回购 3 次",color:"#6b7245"},{label:"江浙沪次日达",color:"#5a6f8c"},{label:"已收藏 12 天",color:"#8c6f5a"}],maxTags:Number(e.max)})]);return t.jsx(n,{cardId:"display-user-tag",data:w,padding:16,children:t.jsx(B,{title:w.title,subtitle:"拖 maxTags：多出来的标签会被截掉（不是换行）"})})}},Bc={meta:{slug:"countdown",title:"CountdownPlugin：秒杀倒计时",group:"display",plugin:"CountdownPlugin",intro:"从 durationMs 或 endTimestamp 起算，每秒更新一次；到 0 就停在那里，不会出现负数。",why:"促销都有截止时间。倒计时的价值是「让人现在决定」，但时间必须是服务端给的，不能按客户端时钟随便算。",plugs:[{fn:"createCountdownPlugin",cfg:'durationMs: {{minutes}} * 60 * 1000, prefix: "⏰"',why:"在 overlay 上画倒计时，并按秒节流重渲染"}],props:["padding={0}"],note:"priority 40；它每秒重渲染自身，不要让它和 AnimationPlugin 同时改容器过渡（会互相打断）。",controls:[{key:"minutes",label:"剩余分钟",kind:"number",init:180,min:1,max:360,step:10}]},Stage:({cfg:e})=>{const n=N([Yn({durationMs:Number(e.minutes)*60*1e3,prefix:"⏰"})]);return t.jsx(n,{cardId:"display-countdown",data:w,padding:0,children:t.jsx(B,{title:w.title,subtitle:"改「剩余分钟」会重挂计时器，重新开始走"})})}},Tc={meta:{slug:"review",title:"ReviewPlugin：星级与评价数",group:"display",plugin:"ReviewPlugin",intro:"读 data.rating / ratingCount 渲染星级与条数；enableUserReview 打开后可以点星写评价。",why:"评分是决策依据。它必须来自真实数据（哪怕只有 3 条），不能让前端默认给 5 星 —— 那是骗。",plugs:[{fn:"createReviewPlugin",cfg:"showRating: true, showReviewCount: true",why:"把评分与评价数放进 footer，保持「价格下面紧跟口碑」的阅读顺序"}],props:["padding={16}","data={{ ...product, rating: {{rating}}, ratingCount: 1284 }}"],note:"未评分（0 条）时按 0 显示而不是藏起来 —— 藏起来会让「新品」看起来像「没人买」。",controls:[{key:"rating",label:"评分",kind:"number",init:4.6,min:0,max:5,step:.1}]},Stage:({cfg:e})=>{const n=N([Jn({showRating:!0,showReviewCount:!0})]);return t.jsx(n,{cardId:"display-review",data:{...w,rating:Number(e.rating)},padding:16,children:t.jsx(B,{title:w.title,subtitle:"拖「评分」：星会跟着变，评价数不变"})})}},Oc={meta:{slug:"animation",title:"AnimationPlugin：入场淡入上移",group:"display",plugin:"AnimationPlugin",intro:"挂载后 100ms 开始，500ms 内从「透明 + 下移 20px」走到位。卸载时复原内联样式，容器被复用也不会「消失」。",why:"列表里一次出现十几张卡时，轻微入场能让视线有落点。但它必须在 prefers-reduced-motion 下自动关闭。",plugs:[{fn:"createAnimationPlugin",why:"提供入场动画，并处理好定时器清理与减弱动效偏好"}],props:["padding={0}"],note:"点「重新入场」会换 key 强制重挂 —— 这是看动画最省事的办法，也顺便验证了清理逻辑（旧定时器不会残留）。",controls:[{key:"replay",label:"重新入场",kind:"switch",init:!1,nonLayout:!0}]},Stage:({cfg:e})=>{const n=N([Zn()]);return t.jsx(n,{cardId:"display-animation",data:ie,padding:0,children:t.jsx(B,{title:ie.title,subtitle:"每次重挂都会淡入 —— 老定时器不会留下半透明容器"})},String(e.replay))}},Nc=[Ic,Rc,Bc,Tc,Oc],Ac=(e,n)=>({name:"BusLoggerLocal",priority:0,hooks:{onMount:o=>{const r=e.map(i=>o.bus.on(i,l=>n(`${i} → ${JSON.stringify(l)}`,"info")));return()=>r.forEach(i=>i())}}}),_c={meta:{slug:"actions",title:"ActionsPlugin：加购 / 收藏",group:"interaction",plugin:"ActionsPlugin",intro:"footer 区两个主按钮。点击先发总线事件（cart:change / wishlist:change），再改卡片状态 —— 顺序很重要，外部监听才能拿到最新值。",why:"加购是整张卡的点击目标。它的状态必须和真实购物车一致：重复点不能重复加、成功后要能撤销。",plugs:[{fn:"createActionsPlugin",cfg:"showCartButton: true, showWishlistButton: {{wish}}",why:"提供两个主操作按钮，并维护「已加入」的视觉状态"},{fn:"createBusLogger",why:"页内局部插件：把 cart:change / wishlist:change 抄到日志，验证「先发事件后改状态」",local:!0}],props:["padding={16}"],note:"按钮文案要按状态切换（加入 / 移出）。只改颜色不改文案，用户会以为点失败了。",controls:[{key:"wish",label:"显示收藏",kind:"switch",init:!0}],children:'      <Content title={product.title} subtitle="点按钮：右侧日志会记录事件与状态" />'},Stage:({cfg:e,log:n})=>{const o=N([ee({showCartButton:!0,showWishlistButton:!!e.wish}),Ac(["cart:change","wishlist:change"],n)]);return t.jsx(o,{cardId:"interaction-actions",data:w,padding:16,children:t.jsx(B,{title:w.title,subtitle:"点按钮：右侧日志会记录事件与状态"})})}},Dc={meta:{slug:"hover",title:"HoverPlugin：阴影 / 缩放 / 描边",group:"interaction",plugin:"HoverPlugin",intro:"悬停时给卡片加阴影、轻微放大或描边。它走 transformProps 与 onHover，不改 DOM 结构，也不会吃掉点击。",why:"悬停反馈是「这张卡可以点」的最轻提示。但它必须是过渡而不是瞬变，否则鼠标划过一片卡片会像在闪。",plugs:[{fn:"createHoverPlugin",cfg:"enableShadow: {{shadow}}, enableScale: {{scale}}",why:"提供悬停反馈，并保证缩放不会溢出容器（transform 不改变布局）"}],props:["padding={16}"],note:"缩放用 transform 而不是改 width —— 改宽高会触发重排，十几张卡同时悬停时会掉帧。",controls:[{key:"shadow",label:"阴影",kind:"switch",init:!0},{key:"scale",label:"缩放",kind:"switch",init:!0}]},Stage:({cfg:e,log:n})=>{const o=N([tt({enableShadow:!!e.shadow,enableScale:!!e.scale,shadowIntensity:"medium"})]);return t.jsx(o,{cardId:"interaction-hover",data:w,padding:16,onHover:r=>n(`hover → ${r}`,"info"),children:t.jsx(B,{title:w.title,subtitle:"把鼠标移上去再移开",note:"悬停只改 transform / box-shadow"})})}},Ec=[_c,Dc],Mc={meta:{slug:"state",title:"StatePlugin：状态差分回调",group:"infra",plugin:"StatePlugin",intro:"卡片状态（cart / wishlist / hover / visible）只在**变化时**回调一次。旧版把回调塞在 setState 的 updater 里，导致一次点击触发两次。",why:"外部要同步「这张卡已加购」到自己的 store 时，必须依赖稳定的差分回调，而不是猜 setState 什么时候执行。",plugs:[{fn:"createStatePlugin",cfg:"enableCart: true,\n        enableWishlist: true,\n        onCartChange: (id, v) => log(`cart → ${v}`),\n        onWishlistChange: (id, v) => log(`wishlist → ${v}`)",why:"把状态变化以回调形式交出来（而不是让外部轮询）"},{fn:"createActionsPlugin",why:"页内需要一个能改状态的按钮，否则这页没东西可点"}],props:["padding={16}"],note:"onStateChange 现在在 state 提交后的 effect 里触发：updater 保持纯函数，一次点击只回调一次。",children:'      <Content title={product.title} subtitle="点「加入购物车」：日志只应出现一次 cart → true" />'},Stage:({log:e})=>{const n=N([ot({enableCart:!0,enableWishlist:!0,onCartChange:(o,r)=>e(`cart → ${r}`,r?"event":"warn"),onWishlistChange:(o,r)=>e(`wishlist → ${r}`,r?"event":"warn")}),ee()]);return t.jsx(n,{cardId:"infra-state",data:w,padding:16,children:t.jsx(B,{title:w.title,subtitle:"点「加入购物车」：日志只应出现一次 cart → true"})})}},Lc={meta:{slug:"analytics",title:"AnalyticsPlugin：曝光 / 点击 / 状态",group:"infra",plugin:"AnalyticsPlugin",intro:"通过 transport 把曝光、点击、状态变化交给外部上报管道。曝光有最小停留阈值（minExposureMs），闪一下就划走的不算。",why:"卡片的转化分析要靠「曝光 → 点击 → 加购」三段漏斗。曝光口径错了，后面全是错的。",plugs:[{fn:"createAnalyticsPlugin",cfg:`transport: (event, payload) => log(event),
        minExposureMs: {{minMs}}`,why:"统一采集曝光 / 点击 / 状态，并支持替换上报实现（SDK 或自有管道）"},{fn:"createActionsPlugin",why:"需要一个能产生 state 变化与点击的入口"}],props:["padding={16}"],note:"transport 是唯一出口：接第三方 SDK 时不要改插件内部，包一层 transport 即可（也方便做采样与脱敏）。",controls:[{key:"minMs",label:"最小曝光 ms",kind:"number",init:600,min:0,max:2e3,step:100}],children:'      <Content title={product.title} subtitle="点卡片 / 点按钮：日志里会看到 view / click / state" />'},Stage:({cfg:e,log:n})=>{const o=N([st({minExposureMs:Number(e.minMs),transport:(r,i)=>{const l=JSON.stringify(i??{}).slice(0,60);n(`${r} ${l}`,"info")}}),ee()]);return t.jsx(o,{cardId:"infra-analytics",data:w,padding:16,children:t.jsx(B,{title:w.title,subtitle:"点卡片 / 点按钮：日志里会看到 view / click / state"})})}},Uc={meta:{slug:"a11y",title:"A11yPlugin：语义、键盘、播报",group:"infra",plugin:"A11yPlugin",intro:"给容器补 role=article 与 aria-label，可开 tabindex 与键盘导航，聚焦时把商品名播报给读屏。卸载时逐一移除，不留脏属性。",why:"键盘用户靠 tab 走完整页。卡片如果不可聚焦、没有名字，读屏会念成「分组」——等于这张卡不存在。",plugs:[{fn:"createA11yPlugin",cfg:"keyboardNavigation: {{keys}}, announceOnFocus: true, highContrast: {{contrast}}",why:"补语义与键盘可达性，并在聚焦时播报商品名"}],props:["padding={16}"],note:"tabindex 是「加在容器上」，所以整张卡只占一个 tab 位；内部按钮仍可单独聚焦。别给每个子元素都加 tabindex，那会让 tab 变成折磨。",controls:[{key:"keys",label:"键盘导航",kind:"switch",init:!0},{key:"contrast",label:"高对比",kind:"switch",init:!1}],children:'      <Content title={product.title} subtitle="按 Tab 聚焦这张卡，再按 Enter / 方向键试试" />'},Stage:({cfg:e})=>{const n=N([lt({keyboardNavigation:!!e.keys,announceOnFocus:!0,highContrast:!!e.contrast}),ee()]);return t.jsx(n,{cardId:"infra-a11y",data:w,padding:16,children:t.jsx(B,{title:w.title,subtitle:"按 Tab 聚焦这张卡，再按 Enter / 方向键试试"})})}},Fc={meta:{slug:"responsive",title:"ResponsivePlugin：按卡片宽度换布局",group:"infra",plugin:"ResponsivePlugin",intro:"跟 viewport 无关 —— 它看的是**卡片自己的宽度**。卡片放到侧栏、弹窗、抽屉里都能自适应，这才是可复用组件该有的行为。",why:"同一个商品卡会在主图位、侧栏推荐、移动端抽屉里出现。用媒体查询写死，进弹窗就会「以为自己是桌面」。",plugs:[{fn:"createResponsivePlugin",cfg:"breakpoints: { mobile: 360, tablet: 620, desktop: 900 }",why:"用 ResizeObserver 量自身宽度，切换 layout 与容器样式"}],props:["padding={16}","containerStyle={{ width: {{width}} }}"],note:"阈值以「卡片宽度」为准：拖到 360 以下会变竖排，620 以上变横排（内容在图右侧）。",controls:[{key:"width",label:"卡片宽度",kind:"number",init:360,min:260,max:860,step:20}],stageWidth:900},Stage:({cfg:e})=>{const n=N([ut()]);return t.jsx(n,{cardId:"infra-responsive",data:w,padding:16,containerStyle:{width:Number(e.width)},children:t.jsx(B,{title:w.title,subtitle:`当前宽度 ${e.width}px —— 布局跟着它变`})})}},zc=[Mc,Lc,Uc,Fc],Kc=w.attributes,Vc=Se(w);function _({children:e}){return t.jsx(P,{productId:"compound-demo",data:w,children:e})}const Wc={meta:{slug:"pc-basic",title:"ProductCard 基础版式",group:"compound",capability:"compound",intro:"六行子组件拼出一张完整列表卡：图、标题、副标题、价格、划线价、标签。子组件不传 props，全部回退到 data。",why:"90% 的列表卡就是这个结构。先确认「不给 props 也能渲染」，再按需覆盖个别字段。",plugs:[],props:["<ProductCard data={product}>","  <ProductCard.Image />","  <ProductCard.Title />"],note:"子组件的顺序 = 视觉顺序，没有隐式排序；想调换价格与标题的位置，直接调换两行即可。"},Stage:()=>t.jsxs(_,{children:[t.jsx(P.Image,{}),t.jsx(P.Title,{}),t.jsx(P.Subtitle,{}),t.jsx(P.Price,{}),t.jsx(P.OldPrice,{}),t.jsx(P.Tags,{})]})},Hc={meta:{slug:"pc-price",title:"价格区：现价 / 划线价 / 折扣 / 节省",group:"compound",capability:"compound-price",intro:"四个价格相关组件并排。<Price> 是价格区的锚点 —— 插件通过 priceArea 槽位把「省多少 / 单位价」挂进它内部。",why:"价格区是转化核心，也是最容易「三个数字互相矛盾」的地方。用同一份 data + 同一个槽位，矛盾就消失了。",plugs:[],props:["<ProductCard.Price />","<ProductCard.OldPrice />","<ProductCard.Discount percent={25} />"],note:"Discount 可以显式给 percent；不给时按 oldPrice / price 自己算，避免手写 25 这种会和数据脱节的常量。",dataCode:`// 价格区读这三个字段（缺哪个就少一行）
{
  price: 299,
  oldPrice: 399,
  weightGram: 260,   // PricePerUnit 用：算「每 100g 多少钱」
}`},Stage:()=>t.jsxs(_,{children:[t.jsx(P.Title,{}),t.jsx(P.Price,{}),t.jsx(P.OldPrice,{}),t.jsx(P.Discount,{}),t.jsx(P.SavingsBadge,{}),t.jsx(P.PricePerUnit,{unitLabel:"每 100g",totalGram:260})]})},Gc={meta:{slug:"pc-options",title:"规格选择：色板 / 尺码 / 通用属性",group:"compound",capability:"compound-options",intro:"三种选规格的写法：色板（带颜色）、尺码（一排数字字母）、通用属性选择器。它们都写 ProductCard 的本地 state。",why:"颜色要看色块、尺码要看尺码表、其它属性（材质/容量）只能给一排按钮 —— 三种交互不该硬塞进一个组件。",plugs:[],props:['<ProductCard.ColorSwatches attributeName="颜色" />','<ProductCard.SizeSelector sizes={["M","L"]} />'],note:"这些组件写的是复合组件自己的 state（attributes），不是插件总线。要联动价格请用 SKU 插件，见「价格区接缝」页。"},Stage:()=>t.jsxs(_,{children:[t.jsx(P.Image,{}),t.jsx(P.Title,{}),t.jsx(P.ColorSwatches,{attributeName:"颜色"}),t.jsx(P.SizeSelector,{sizes:["M","L","XL"],attributeName:"尺码"}),t.jsx(P.OptionPicker,{name:"材质",options:["纯棉","混纺","天丝"]}),t.jsx(P.SelectedInfo,{})]})},qc={meta:{slug:"pc-stock",title:"库存 / 编码 / 参数表",group:"compound",capability:"compound-stock",intro:"库存徽章按阈值变色、SKU 编码补前缀、参数表支持对象或数组两种形态。都是「不显眼但缺了会被问」的信息。",why:"商详页的信任感来自细节：还剩几件、什么编码、什么材质。缺一项，用户就会去问客服。",plugs:[],props:["<ProductCard.StockBadge showQuantity />","<ProductCard.SpecsTable />"],note:'SpecsTable 的 specs 支持 `{ 材质: "纯棉" }` 或 `[{ key, value }]` —— 两种历史数据的形态都认，不必在业务层先做转换。'},Stage:()=>t.jsxs(_,{children:[t.jsx(P.Title,{}),t.jsx(P.StockBadge,{showQuantity:!0,lowStockThreshold:10}),t.jsx(P.Inventory,{threshold:10}),t.jsx(P.SKUCode,{prefix:"SKU"}),t.jsx(P.SpecsTable,{})]})},Yc={meta:{slug:"pc-actions",title:"操作区：加购 + 数量",group:"compound",capability:"compound-actions",intro:"数量步进 + 主按钮。 QuantityStepper 的上限会读选中规格的库存，Actions 的主按钮状态跟 cart 走。",why:"商详的最后一屏就是「买几个 + 加购」。这两个控件必须能互相看见：数量超库存时按钮要禁用。",plugs:[],props:["<ProductCard.QuantityStepper min={1} />","<ProductCard.Actions />"],note:"Actions 只负责交互与状态，真正下单是业务回调；组件不内置任何请求。"},Stage:()=>t.jsxs(_,{children:[t.jsx(P.Image,{}),t.jsx(P.Title,{}),t.jsx(P.Price,{}),t.jsx(P.QuantityStepper,{min:1}),t.jsx(P.Actions,{})]})},Qc={meta:{slug:"pc-coupon",title:"券条与订单汇总",group:"compound",capability:"compound-coupon",intro:"券条横向铺开、超出折叠；汇总面板给明细行。两者都读 ProductCard 的 state，不各自算一遍价格。",why:"「能领几张券」和「最后花多少钱」必须在同一屏给出，中间隔一次跳转就会流失。",plugs:[],props:['<ProductCard.CouponBar layout="horizontal" maxVisible={2} />',"<ProductCard.OrderSummaryPanel showTax />"],note:"CouponBar 的 onCouponApply 是业务回调：组件不决定券能不能用，只用 disabled 表达结论 —— 规则留在服务端。"},Stage:()=>t.jsxs(_,{children:[t.jsx(P.Title,{}),t.jsx(P.Price,{}),t.jsx(P.CouponBar,{layout:"horizontal",maxVisible:2,showExpiry:!0,coupons:[{id:"c1",title:"新客立减 30",discount:30,discountType:"amount",minAmount:199,code:"NEW30"},{id:"c2",title:"满 399 减 50",discount:50,discountType:"amount",minAmount:399,code:"VIP50"},{id:"c3",title:"免运费",discount:12,discountType:"amount",minAmount:99,code:"FREESHIP"}]}),t.jsx(P.OrderSummaryPanel,{showTax:!0,showShipping:!0,taxRate:.06,shippingFee:12})]})},Jc={meta:{slug:"pc-shipping",title:"物流：文案 / 运费估算 / 时效轴",group:"compound",capability:"compound-shipping",intro:"三件物流相关组件：一句文案、一个可交互的运费估算（选地区 + 选方式）、一条交货时间轴（可跳周末）。",why:"运费是弃单第一大原因。把「发到哪儿、多少钱、几天到」放在加购之前，比事后解释便宜得多。",plugs:[],props:["<ProductCard.ShippingEstimator regions={regions} methods={methods} />"],note:"DeliveryTimeline 的 etaDays 是「工作日」还是「自然日」必须和物流口径一致；这里按自然日算，周末不跳过。"},Stage:()=>t.jsxs(_,{children:[t.jsx(P.Title,{}),t.jsx(P.Shipping,{info:"江浙沪次日达 · 满 199 包邮"}),t.jsx(P.ShippingEstimator,{regions:[{code:"ZJ",name:"浙江",baseFee:8,extraPerKg:2,etaDays:1},{code:"BJ",name:"北京",baseFee:12,extraPerKg:4,etaDays:3},{code:"XJ",name:"新疆",baseFee:22,extraPerKg:12,etaDays:6}],methods:[{code:"std",name:"标准快递",multiplier:1},{code:"exp",name:"顺丰特快",multiplier:2.4,etaOffset:-1}],weightKg:.5,showBreakdown:!0}),t.jsx(P.DeliveryTimeline,{etaDays:3,showDates:!0})]})},Xc={meta:{slug:"pc-service",title:"售后：退换政策与保修",group:"compound",capability:"compound-service",intro:"政策组件把「几天内可退、谁付运费、什么条件不退」讲清楚；保修组件是一句话 + 详情链接。",why:"售后条款写在角落没人看，但真出事时它就是信任的来源。结构化表达能让客服少回答一半问题。",plugs:[],props:["<ProductCard.ReturnPolicy windowDays={7} />",'<ProductCard.Warranty info="一年质保" />'],note:"窗口期与免运费门槛都是显式 props：不要从文案里正则解析「7天无理由」，那一定会解析错。"},Stage:()=>t.jsxs(_,{children:[t.jsx(P.Title,{}),t.jsx(P.Warranty,{info:"一年质保 · 非人为损坏免费换新"}),t.jsx(P.ReturnPolicy,{windowDays:7,freeReturnWithinDays:7,allowExchange:!0,conditions:["吊牌完整","未下水洗涤","不影响二次销售"],contact:"400-000-0000"})]})},Zc={meta:{slug:"pc-content",title:"内容区：描述 / 卖点 / 分节 / 分隔",group:"compound",capability:"compound-content",intro:"长文本折叠、卖点列表、可折叠分节、分割线。都是排版件，但决定商详「读起来累不累」。",why:"商详不是说明书。卖点用列表、描述用折叠、分节给标题 —— 用户扫三秒就能判断要不要往下读。",plugs:[],props:["<ProductCard.Description lines={3} />","<ProductCard.FeatureList />"],note:"Description 的 lines 是「折叠到几行」，展开后仍是原文，不做二次加工。"},Stage:()=>t.jsxs(_,{children:[t.jsx(P.Title,{}),t.jsx(P.Subtitle,{}),t.jsx(P.FeatureList,{}),t.jsx(P.Section,{title:"商品描述",children:t.jsx(P.Description,{lines:3})}),t.jsx(P.Divider,{}),t.jsx(P.Section,{title:"面料与工艺",children:t.jsx(P.Description,{children:"260g 精梳长绒棉，双纱领口加固。肩线落在肩峰内 1cm，视觉收窄。三色都是低饱和土色系。"})})]})},eu={meta:{slug:"pc-media",title:"变体媒体切换",group:"compound",capability:"compound-media",intro:"主图 + 缩略图组，支持按选中规格换主图；aspectRatio 可配，切换不改变布局高度。",why:"颜色不同、图就不同。让用户点色板时图跟着换，比让他自己在一堆图里找要快得多。",plugs:[],props:['<ProductCard.VariantMediaSwitcher aspectRatio="4 / 3" showBorder />'],note:"缩略图与主图共用同一份 images；变体图通过 VariantImage 的 label 关联，不额外维护映射表。"},Stage:()=>t.jsxs(_,{children:[t.jsx(P.Image,{}),t.jsx(P.VariantMediaSwitcher,{images:w.images,aspectRatio:"4 / 3",showBorder:!0,enableManualSwitch:!0}),t.jsx(P.Title,{})]})},nu={meta:{slug:"pc-market",title:"品牌 / 徽章组 / 评分 / 搭配购",group:"compound",capability:"compound-market",intro:"品牌背书、一排徽章、星级评分、搭配购（组合价与单买价对比）。",why:"客单价不是靠涨价，是靠搭配。「买这个的人还买了」放在商详里，比拼团弹窗有效。",plugs:[],props:['<ProductCard.BadgeGroup badges={["自营","次日达"]} />',"<ProductCard.UpsellBundle bundles={bundles} />"],note:"UpsellBundle 的组合价由业务给（bundle.price），组件不替你算折扣 —— 算错就是资损。"},Stage:()=>t.jsxs(_,{children:[t.jsx(P.Brand,{name:w.brand}),t.jsx(P.BadgeGroup,{badges:["自营","次日达","7 天无理由"]}),t.jsx(P.Title,{}),t.jsx(P.Rating,{}),t.jsx(P.UpsellBundle,{bundles:[{id:"b1",title:"T 恤 + 马克杯",bundlePrice:399,savingsPercent:15,items:[{id:"p-tee",title:"长绒棉 T 恤",image:w.image,price:299},{id:"p-mug",title:"手冲马克杯",image:ie.image,price:168}]}],showSavings:!0})]})},tu={meta:{slug:"pc-a11y",title:"无障碍工具条与已选信息",group:"compound",capability:"compound-a11y",intro:"工具条提供对比度 / 字号 / 动效三个开关；已选信息把当前 attributes 与数量摊出来（可选 JSON 视图）。",why:"把无障碍做成用户可调的开关，比在系统层面一刀切更实用 —— 视力不同的用户需求差异很大。",plugs:[],props:['<ProductCard.A11yToolbar applyTo="document" />',"<ProductCard.SelectedInfo showJSON />"],note:'applyTo="document" 会影响整页；只想影响卡片时请自行包一层容器并传入 scoped 场景。'},Stage:()=>t.jsxs(_,{children:[t.jsx(P.A11yToolbar,{}),t.jsx(P.Title,{}),t.jsx(P.ColorSwatches,{attributeName:"颜色"}),t.jsx(P.SizeSelector,{sizes:["M","L"],attributeName:"尺码"}),t.jsx(P.SelectedInfo,{showJSON:!0})]})},ru={meta:{slug:"pc-seam",title:"价格区接缝：插件挂进复合组件",group:"compound",capability:"compound-seam",intro:"同一张复合组件卡，装上 SKU + PriceCalculator 后：选规格会改价，「省多少」也出现在价格区。这就是 priceArea 槽位。",why:"复合组件不该把价格算法抄一遍。它只提供「槽位」，谁的逻辑谁挂进来 —— 这是插件与版式解耦的关键。",plugs:[{fn:"createSKUPlugin",cfg:"attributes: attrs, variants: variants",why:"提供规格选择并写总线"},{fn:"createPriceCalculatorPlugin",why:"把到手价 / 折扣 / 省多少挂进价格区槽位"}],props:["<ProductCard plugins={[...]} data={product}>","  <ProductCard.Price />"],note:'<ProductCard.Price> 内部调用 usePluginSlot("priceArea")：没有插件时它自己渲染单价，有插件时把插件片段拼进来。',dataCode:`// ProductCard 的 plugins 走的是同一套 withPlugins，只是包在复合组件外层
<ProductCard
  data={product}
  plugins={[createSKUPlugin({ attributes, variants }), createPriceCalculatorPlugin()]}
>
  <ProductCard.Price />
</ProductCard>`},Stage:()=>t.jsxs(P,{productId:"compound-seam",data:w,plugins:[je({attributes:Kc,variants:Vc}),$e({showDiscount:!0,showSavings:!0})],children:[t.jsx(P.Image,{}),t.jsx(P.Title,{}),t.jsx(P.Price,{}),t.jsx(P.VariantSelector,{}),t.jsx(P.StockBadge,{showQuantity:!0})]})},ou=[Wc,Hc,Gc,qc,Yc,Qc,Jc,Xc,Zc,eu,nu,tu,ru],Ie=[...Ur,...hc,...jc,...Nc,...Ec,...zc,...ou],iu=Or.filter(e=>Ie.some(n=>n.meta.group===e)),gd=Array.from(new Set(Ie.map(e=>e.meta.plugin).filter(e=>!!e))).sort(),su="import|from|export|default|function|return|const|let|var|new|if|else|for|of|in|while|switch|case|break|continue|type|interface|extends|implements|as|satisfies|await|async|throw|try|catch|finally|class|typeof|instanceof|delete|void|yield",au="true|false|null|undefined|this|super",lu="number|string|boolean|object|any|unknown|never|React|HTMLElement|void",en=new RegExp([String.raw`(\/\/[^\n]*|\/\*[\s\S]*?\*\/)`,String.raw`(\`(?:\\[\s\S]|[^\\\`])*\`|"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*')`,String.raw`\b(${su})\b`,String.raw`\b(${au})\b`,String.raw`\b(${lu})\b`,String.raw`(<\/?[A-Za-z][\w.$]*)`,String.raw`\b(\d+(?:\.\d+)?)\b`].join("|"),"g"),nn=["tok-comment","tok-string","tok-kw","tok-lit","tok-type","tok-tag","tok-num"];function cu(e){const n=[];let o=0;en.lastIndex=0;let r;for(;r=en.exec(e);){r.index>o&&n.push({text:e.slice(o,r.index),cls:null});const i=nn.findIndex((l,a)=>r[a+1]!==void 0);n.push({text:r[0],cls:i>=0?nn[i]:null}),o=r.index+r[0].length}return o<e.length&&n.push({text:e.slice(o),cls:null}),n}function tn(e){try{const n=document.createElement("textarea");n.value=e,n.setAttribute("readonly",""),n.style.position="fixed",n.style.opacity="0",document.body.appendChild(n),n.select();const o=document.execCommand("copy");return document.body.removeChild(n),o}catch{return!1}}function uu({code:e,title:n="tsx",collapseAfter:o=24,maxHeight:r}){const[i,l]=b.useState("idle"),[a,s]=b.useState(!1),c=b.useMemo(()=>e.replace(/\s+$/,"").split(`
`),[e]),u=o>0&&c.length>o,d=u&&!a?c.slice(0,o).join(`
`):e,p=b.useMemo(()=>cu(d),[d]),h=b.useCallback(async()=>{var f;let g=!1;if((f=navigator.clipboard)!=null&&f.writeText)try{await navigator.clipboard.writeText(e),g=!0}catch{g=tn(e)}else g=tn(e);l(g?"ok":"fail"),window.setTimeout(()=>l("idle"),1600)},[e]);return t.jsxs("div",{className:"code",children:[t.jsxs("div",{className:"code-head",children:[t.jsx("span",{children:n}),t.jsxs("span",{style:{display:"flex",gap:6,alignItems:"center"},children:[t.jsxs("span",{children:[c.length," 行"]}),t.jsx("button",{type:"button",className:`code-copy${i==="ok"?" is-ok":i==="fail"?" is-fail":""}`,onClick:h,children:i==="ok"?"已复制":i==="fail"?"复制失败":"复制"})]})]}),t.jsx("pre",{style:r?{maxHeight:r}:{maxHeight:"none"},children:t.jsx("code",{children:p.map((g,f)=>g.cls?t.jsx("span",{className:g.cls,children:g.text},f):t.jsx(R.Fragment,{children:g.text},f))})}),u?t.jsx("button",{type:"button",className:"code-more",onClick:()=>s(g=>!g),children:a?"收起":`展开余下 ${c.length-o} 行`}):null]})}function pt(e){return e.props??e.config??[]}function du({doc:e}){var i,l,a;const n=pt(e),o=e.events??[],r=e.methods??[];return t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"doc-sec",children:[t.jsx("h5",{children:"属性 Props"}),n.length?t.jsxs("table",{className:"doc-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"属性"}),t.jsx("th",{children:"类型"}),t.jsx("th",{children:"默认"}),t.jsx("th",{children:"说明"})]})}),t.jsx("tbody",{children:n.map(s=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:s.name})}),t.jsx("td",{children:t.jsx("code",{className:"dim",children:s.type})}),t.jsx("td",{children:t.jsx("code",{className:"dim",children:s.default??"-"})}),t.jsx("td",{children:s.description??"—"})]},s.name))})]}):t.jsx("p",{className:"doc-note",children:"无可配置属性，工厂零参调用即可。"})]}),t.jsxs("div",{className:"doc-sec",children:[t.jsx("h5",{children:"事件 Events"}),o.length?t.jsxs("table",{className:"doc-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"事件"}),t.jsx("th",{children:"触发时机"}),t.jsx("th",{children:"说明"})]})}),t.jsx("tbody",{children:o.map(s=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:s.name})}),t.jsx("td",{children:s.when}),t.jsx("td",{children:s.description})]},s.name))})]}):t.jsx("p",{className:"doc-note",children:"不参与任何事件。"})]}),t.jsxs("div",{className:"doc-sec",children:[t.jsx("h5",{children:"方法 Methods"}),r.length?t.jsxs("table",{className:"doc-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"方法"}),t.jsx("th",{children:"签名"}),t.jsx("th",{children:"说明"})]})}),t.jsx("tbody",{children:r.map(s=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:s.name})}),t.jsx("td",{children:t.jsx("code",{className:"dim",children:s.signature})}),t.jsx("td",{children:s.description})]},s.name))})]}):t.jsx("p",{className:"doc-note",children:e.methodsNote??"不调用上下文方法。"})]}),t.jsxs("div",{className:"doc-cols",children:[(i=e.features)!=null&&i.length?t.jsxs("div",{children:[t.jsx("h5",{children:"能做"}),t.jsx("ul",{children:e.features.map(s=>t.jsx("li",{children:s},s))})]}):null,(l=e.useCases)!=null&&l.length?t.jsxs("div",{children:[t.jsx("h5",{children:"适合"}),t.jsx("ul",{children:e.useCases.map(s=>t.jsx("li",{children:s},s))})]}):null,(a=e.notes)!=null&&a.length?t.jsxs("div",{children:[t.jsx("h5",{children:"注意"}),t.jsx("ul",{children:e.notes.map(s=>t.jsx("li",{children:s},s))})]}):null]})]})}function pu({factory:e,priority:n,summary:o,doc:r,defaultOpen:i=!0}){var a,s;const l={props:pt(r).length,events:((a=r.events)==null?void 0:a.length)??0,methods:((s=r.methods)==null?void 0:s.length)??0};return t.jsxs("details",{className:"api-plug",open:i,children:[t.jsxs("summary",{children:[t.jsx("code",{children:e}),t.jsxs("span",{className:"tag tag-accent",children:["priority ",n]}),t.jsx("span",{className:"api-plug-desc",children:o}),t.jsxs("span",{className:"api-plug-n",children:[l.props," 属性 · ",l.events," 事件 · ",l.methods," 方法"]})]}),t.jsx("div",{className:"api-plug-body",children:t.jsx(du,{doc:r})})]})}const gu=/create[A-Z]\w*Plugin/g;function mu(e){return(e.match(/create[A-Z]\w*Plugin/)??[e])[0]}function gt(e){return e.dir?`create${e.dir}`:mu(e.factory)}function hu(e){return new Set(e.match(gu)??[])}function fu(e,n){const o=hu(e);return n.filter(r=>o.has(gt(r))).sort((r,i)=>r.priority-i.priority)}function yu({source:e,plugins:n,heading:o="本页用到的插件"}){const r=b.useMemo(()=>fu(e,n),[e,n]);return r.length===0?null:t.jsxs("section",{className:"api-sec",children:[t.jsxs("div",{className:"api-sec-head",children:[t.jsxs("h2",{className:"api-sec-title",children:[o," · ",r.length," 个"]}),t.jsxs("p",{className:"api-sec-sub",children:["就是上面代码里装配的全部成员。属性是工厂参数，事件是父组件传进来的回调， 方法是插件读取 / 调用的上下文能力 —— 表内容与 ",t.jsx("code",{children:"doc.json"})," 同源，随包发布。"]})]}),r.map(i=>t.jsx(pu,{factory:gt(i),priority:i.priority,summary:i.summary??i.doc.description??"",doc:i.doc},i.factory))]})}const bu=`/**\r
 * A11yPlugin - 无障碍增强（ARIA 标注 / 键盘导航 / 聚焦播报 / 高对比）\r
 *\r
 * 迁移要点（C3.2）：\r
 *  - 旧版的 focus 监听是匿名箭头函数，removeEventListener 拿不到引用 → 永不移除，\r
 *    卡片反复挂载会累积监听；改为具名 handler，随 onMount 返回值统一回收。\r
 *  - 全局 #a11y-live-region 改为「引用计数」：多张卡共用同一个播报节点，\r
 *    最后一张卡卸载时才移除，避免先卸载的卡把别人的播报区删掉。\r
 *  - 清理不再走 onUnmount 钩子（那要在卸载时再查一次 getContainer），\r
 *    直接在 onMount 里返回，和内核的 cleanup 语义一致。\r
 */\r
\r
import type { CardPlugin, PluginCreator } from "../../components/CardPlugin/plugins/types";\r
\r
export interface A11yPluginConfig {\r
  announceOnFocus?: boolean;\r
  keyboardNavigation?: boolean;\r
  highContrast?: boolean;\r
}\r
\r
function handleKeyboard(e: KeyboardEvent) {\r
  const target = e.target as HTMLElement | null;\r
  if (!target) return;\r
  // 简易键盘导航：Enter 触发点击，Space 阻止滚动并触发点击\r
  if (e.key === "Enter") {\r
    target.click();\r
  } else if (e.key === " ") {\r
    e.preventDefault();\r
    target.click();\r
  }\r
}\r
\r
// ===== 全局播报区（引用计数）=====\r
\r
const LIVE_REGION_ID = "a11y-live-region";\r
let liveRegionUsers = 0;\r
\r
function acquireLiveRegion(): HTMLElement | null {\r
  if (typeof document === "undefined") return null;\r
\r
  let el = document.getElementById(LIVE_REGION_ID);\r
  if (!el) {\r
    el = document.createElement("div");\r
    el.id = LIVE_REGION_ID;\r
    el.setAttribute("aria-live", "polite");\r
    el.setAttribute("role", "status");\r
    el.style.position = "absolute";\r
    el.style.left = "-9999px";\r
    el.style.width = "1px";\r
    el.style.height = "1px";\r
    el.style.overflow = "hidden";\r
    document.body.appendChild(el);\r
  }\r
  liveRegionUsers += 1;\r
  return el;\r
}\r
\r
function releaseLiveRegion(): void {\r
  liveRegionUsers = Math.max(0, liveRegionUsers - 1);\r
  if (liveRegionUsers > 0) return;\r
  if (typeof document === "undefined") return;\r
  document.getElementById(LIVE_REGION_ID)?.remove();\r
}\r
\r
/** 仅供测试：当前播报区引用计数 */\r
export function __getLiveRegionUsers(): number {\r
  return liveRegionUsers;\r
}\r
\r
// 工厂返回 T 收敛为 unknown：T 仅经 data 透传，自定义 data 形态的调用方请显式写泛型参数。
export const createA11yPlugin: PluginCreator<unknown, A11yPluginConfig> = (\r
  config = {}\r
) => {\r
  const {\r
    announceOnFocus = false,\r
    keyboardNavigation = true,\r
    highContrast = false,\r
  } = config;\r
\r
  const plugin: CardPlugin = {\r
    name: "A11yPlugin",\r
    version: "1.1.0",\r
    description: "无障碍增强插件（ARIA与键盘导航）",\r
    priority: 100,\r
    hooks: {\r
      onMount: (context) => {\r
        const container = context.getContainer();\r
        if (!container) return;\r
\r
        const name =\r
          (context.data as { name?: string; title?: string } | undefined)?.name ||\r
          (context.data as { name?: string; title?: string } | undefined)?.title ||\r
          "商品卡片";\r
        container.setAttribute("role", "article");\r
        container.setAttribute("aria-label", name);\r
\r
        if (keyboardNavigation) {\r
          container.setAttribute("tabindex", "0");\r
          container.addEventListener("keydown", handleKeyboard);\r
        }\r
\r
        // 聚焦播报：具名 handler + 播报区引用计数\r
        let live: HTMLElement | null = null;\r
        const onFocus = () => {\r
          if (live) live.textContent = \`聚焦：\${name}\`;\r
        };\r
        if (announceOnFocus) {\r
          live = acquireLiveRegion();\r
          container.addEventListener("focus", onFocus);\r
        }\r
\r
        if (highContrast) {\r
          container.style.outline = "2px solid #000";\r
          container.style.backgroundColor = "#fff";\r
          container.style.color = "#000";\r
        }\r
\r
        return () => {\r
          container.removeEventListener("keydown", handleKeyboard);\r
          if (announceOnFocus) {\r
            container.removeEventListener("focus", onFocus);\r
            releaseLiveRegion();\r
          }\r
          container.removeAttribute("tabindex");\r
          container.removeAttribute("role");\r
          container.removeAttribute("aria-label");\r
        };\r
      },\r
    },\r
    config,\r
  };\r
\r
  return plugin;\r
};\r
`,xu=`/**\r
 * ActionsPlugin - 操作按钮插件\r
 * 负责渲染购物车、心愿单等操作按钮\r
 */\r
\r
import type { CardPlugin, CardPluginContext, PluginCreator } from "../../components/CardPlugin/plugins/types";\r
\r
import React from "react";\r
\r
export interface ActionsPluginConfig {\r
  showCartButton?: boolean;\r
  showWishlistButton?: boolean;\r
  cartButtonText?: { add: string; remove: string };\r
  wishlistButtonText?: { add: string; remove: string };\r
  // 自定义操作渲染函数由宿主实现，上下文为完整插件上下文（T=unknown，读取 data 时自行断言）。\r
  renderCustomActions?: (context: CardPluginContext) => React.ReactNode;\r
}\r
\r
// 工厂返回 T 收敛为 unknown：T 仅经 data 透传，自定义 data 形态的调用方请显式写泛型参数。\r
export const createActionsPlugin: PluginCreator<unknown, ActionsPluginConfig> = (\r
  config = {}\r
) => {\r
  const {\r
    showCartButton = true,\r
    showWishlistButton = true,\r
    cartButtonText = { add: "加入购物车", remove: "移出购物车" },\r
    wishlistButtonText = { add: "加入心愿单", remove: "移出心愿单" },\r
    renderCustomActions,\r
  } = config;\r
\r
  const plugin: CardPlugin = {\r
    name: "ActionsPlugin",\r
    version: "1.0.0",\r
    description: "操作按钮插件",\r
    priority: 20,\r
\r
    hooks: {\r
      renderFooter: (context) => {\r
        const { state, bus } = context;\r
\r
        // 同一次点击批次里多次触发时，闭包里的 state 还是旧值；sharedData（每个\r
        // runtime 一个 Map）是跨点击的同步真源，state 只负责触发重渲染（P2-5）。\r
        const readFlag = (key: string, fallback: boolean | undefined) => {\r
          const stored = context.sharedData?.get?.(key);\r
          return typeof stored === "boolean" ? stored : Boolean(fallback);\r
        };\r
\r
        const handleCartClick = () => {\r
          const newState = !readFlag("actions:cart", state.cart);\r
          context.sharedData?.set?.("actions:cart", newState);\r
          bus?.emit("cart:change", {\r
            cardId: context.cardId,\r
            isAdded: newState,\r
          });\r
          context.setState({ cart: newState });\r
        };\r
\r
        const handleWishlistClick = () => {\r
          const newState = !readFlag("actions:wishlist", state.wishlist);\r
          context.sharedData?.set?.("actions:wishlist", newState);\r
          bus?.emit("wishlist:change", {\r
            cardId: context.cardId,\r
            isWishlisted: newState,\r
          });\r
          context.setState({ wishlist: newState });\r
        };\r
\r
        if (renderCustomActions) {\r
          return renderCustomActions(context);\r
        }\r
\r
        return (\r
          <div\r
            style={{\r
              display: "flex",\r
              gap: "8px",\r
              padding: "12px",\r
              borderTop: "1px solid #eee",\r
            }}\r
          >\r
            {showCartButton && (\r
              <button\r
                onClick={handleCartClick}\r
                style={{\r
                  flex: 1,\r
                  padding: "8px 16px",\r
                  border: "1px solid #ddd",\r
                  borderRadius: "4px",\r
                  background: state.cart ? "#2e7d32" : "#fff",\r
                  color: state.cart ? "#fff" : "#333",\r
                  cursor: "pointer",\r
                  fontSize: "14px",\r
                  transition: "all 0.2s",\r
                }}\r
              >\r
                {state.cart ? cartButtonText.remove : cartButtonText.add}\r
              </button>\r
            )}\r
            {showWishlistButton && (\r
              <button\r
                onClick={handleWishlistClick}\r
                style={{\r
                  flex: 1,\r
                  padding: "8px 16px",\r
                  border: "1px solid #ddd",\r
                  borderRadius: "4px",\r
                  background: state.wishlist ? "#c4390f" : "#fff",\r
                  color: state.wishlist ? "#fff" : "#333",\r
                  cursor: "pointer",\r
                  fontSize: "14px",\r
                  transition: "all 0.2s",\r
                }}\r
              >\r
                {state.wishlist\r
                  ? wishlistButtonText.remove\r
                  : wishlistButtonText.add}\r
              </button>\r
            )}\r
          </div>\r
        );\r
      },\r
    },\r
\r
    // order 给 20：footer 里「按钮永远排最后」应该是结构性的，而不是靠 priority 撞运气。\r
    // 价格区默认 order 10、券条 0，于是顺序稳定为 券 → 价格 → 按钮。\r
    config: { order: 20, ...config },\r
  };\r
\r
  return plugin;\r
};\r
`,vu=`/**\r
 * AnalyticsPlugin - 曝光 / 点击 / 加购 / 心愿单 上报\r
 *\r
 * 迁移要点（C3.2）：\r
 *  - 不再自建 IntersectionObserver。CardCore 已经在做可见性观测并通过\r
 *    onVisibilityChange 下发，重复建 IO 等于每张卡两套观测、两份回调；\r
 *  - 曝光时长改为「进入可见时在 sharedData 里记时间戳，离开时算差」。\r
 *    不能用工厂作用域的变量：同一个插件对象会被所有卡片共享，会把 A 卡的\r
 *    进入时间和 B 卡的离开时间算在一起。\r
 *  - 上报通道 send 提到工厂层，原来在 4 个钩子里各抄了一遍。\r
 */\r
\r
import type { CardPlugin, CardPluginContext } from "../../components/CardPlugin/plugins";\r
import React from "react";\r
\r
export interface AnalyticsPluginConfig {\r
  // 上报载荷由宿主自定义，按 unknown 传递；宿主在 transport 内自行断言形状。\r
  transport?: (event: string, payload: unknown) => void; // 自定义上报管道\r
  // 第三方 SDK 的载荷同样由宿主定义，按 unknown 传递。\r
  sdk?: { track?: (event: string, payload: unknown) => void }; // 第三方 SDK\r
  minExposureMs?: number; // 最小曝光时长阈值，短于此不记入曝光退出\r
}\r
\r
/** 每张卡各自的「本次进入可见的时间戳」存放键 */\r
const VISIBLE_SINCE = "__analytics.visibleSince";\r
\r
export const createAnalyticsPlugin = (\r
  config: AnalyticsPluginConfig = {}\r
): CardPlugin => {\r
  const send = (event: string, payload: unknown) => {\r
    try {\r
      if (typeof config.transport === "function") {\r
        config.transport(event, payload);\r
      } else if (config.sdk?.track) {\r
        config.sdk.track(event, payload);\r
      } else {\r
        console.log(\`[Analytics] \${event}\`, payload);\r
      }\r
    } catch (e) {\r
      console.warn("[Analytics] transport failed", e);\r
    }\r
  };\r
\r
  return {\r
    name: "AnalyticsPlugin",\r
    version: "1.3.0",\r
    description: "点击、购物车与曝光统计（曝光复用 Core 的可见性，不重复建 IO）",\r
    priority: 50,\r
    hooks: {\r
      onMount: (context: CardPluginContext) => {\r
        // 只订阅总线；曝光交给 onVisibilityChange\r
        const offSku = context.bus?.on?.("sku:change", (data: Record<string, unknown>) => {\r
          send("sku_change", { cardId: context.cardId, ...data });\r
        });\r
        const offPrice = context.bus?.on?.("price:change", (data: Record<string, unknown>) => {\r
          send("price_change", { cardId: context.cardId, ...data });\r
        });\r
\r
        return () => {\r
          try {\r
            offSku?.();\r
          } catch {}\r
          try {\r
            offPrice?.();\r
          } catch {}\r
        };\r
      },\r
\r
      onVisibilityChange: (context: CardPluginContext, isVisible: boolean) => {\r
        const shared = context.sharedData;\r
        if (isVisible) {\r
          shared?.set?.(VISIBLE_SINCE, Date.now());\r
          send("exposure_enter", { cardId: context.cardId, ts: Date.now() });\r
          return;\r
        }\r
\r
        const since = shared?.get?.(VISIBLE_SINCE) as number | undefined;\r
        shared?.delete?.(VISIBLE_SINCE);\r
        const dwellMs = typeof since === "number" ? Date.now() - since : 0;\r
        if (!config.minExposureMs || dwellMs >= config.minExposureMs) {\r
          send("exposure_exit", {\r
            cardId: context.cardId,\r
            ts: Date.now(),\r
            dwellMs,\r
          });\r
        }\r
      },\r
\r
      onClick: (context: CardPluginContext, event: React.MouseEvent) => {\r
        send("click", {\r
          cardId: context.cardId,\r
          position: { x: event.clientX, y: event.clientY },\r
        });\r
      },\r
\r
      // 旧版 onCartChange / onWishlistChange 死钩子 → 订阅 onStateChange 的差分\r
      onStateChange: (\r
        context: CardPluginContext,\r
        prev: { cart?: boolean; wishlist?: boolean },\r
        next: { cart?: boolean; wishlist?: boolean }\r
      ) => {\r
        if (prev.cart !== next.cart) {\r
          send("cart", {\r
            cardId: context.cardId,\r
            action: next.cart ? "add" : "remove",\r
          });\r
        }\r
        if (prev.wishlist !== next.wishlist) {\r
          send("wishlist", {\r
            cardId: context.cardId,\r
            action: next.wishlist ? "add" : "remove",\r
          });\r
        }\r
      },\r
    },\r
  };\r
};\r
`,Cu=`/**\r
 * AnimationPlugin - 入场动画（淡入 + 上移）\r
 *\r
 * 迁移要点（C3.3）：\r
 *  - setTimeout 以前没有清理：100ms 内卸载会在已脱离文档的元素上继续跑，\r
 *    而且会把 opacity:0 留在原地（容器被复用时表现为「卡片不见了」）。\r
 *  - 尊重 prefers-reduced-motion: reduce —— 用户在系统里关掉动效时直接不上动画。\r
 */\r
\r
import type { CardPlugin, CardPluginContext } from "../../components/CardPlugin/plugins";\r
\r
const DURATION_MS = 500;\r
const DELAY_MS = 100;\r
const OFFSET_PX = 20;\r
\r
function prefersReducedMotion(): boolean {\r
  if (typeof window === "undefined") return false;\r
  if (typeof window.matchMedia !== "function") return false;\r
  try {\r
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;\r
  } catch {\r
    return false;\r
  }\r
}\r
\r
export const createAnimationPlugin = (): CardPlugin => ({\r
  name: "AnimationPlugin",\r
  version: "1.1.0",\r
  description: "卡片进入动画（淡入+上移；respects prefers-reduced-motion）",\r
  priority: 1,\r
  hooks: {\r
    onMount: (context: CardPluginContext) => {\r
      const container = context.getContainer();\r
      if (!container) return;\r
\r
      // 用户偏好减弱动效：直接跳过，不写任何内联样式\r
      if (prefersReducedMotion()) return;\r
\r
      container.style.opacity = "0";\r
      container.style.transform = \`translateY(\${OFFSET_PX}px)\`;\r
\r
      const timer = setTimeout(() => {\r
        container.style.transition = \`opacity \${DURATION_MS}ms ease, transform \${DURATION_MS}ms ease\`;\r
        container.style.opacity = "1";\r
        container.style.transform = "translateY(0)";\r
      }, DELAY_MS);\r
\r
      return () => {\r
        clearTimeout(timer);\r
        // 卸载时把动画中途的内联样式复原，避免容器被复用后不可见\r
        container.style.opacity = "";\r
        container.style.transform = "";\r
      };\r
    },\r
  },\r
});\r
`,Pu=`/**\r
 * BadgePlugin - 徽章插件\r
 * 负责渲染商品徽章（如：甄选、热卖等）\r
 */\r
\r
import type { CardPlugin, PluginCreator } from "../../components/CardPlugin/plugins/types";\r
\r
import React from "react";\r
\r
export interface BadgePluginConfig {\r
  text?: string;\r
  type?: "premium" | "hot" | "new" | "sale" | "default";\r
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";\r
  customStyle?: React.CSSProperties;\r
}\r
\r
// 工厂返回 T 收敛为 unknown：T 仅经 data 透传，自定义 data 形态的调用方请显式写泛型参数。
export const createBadgePlugin: PluginCreator<unknown, BadgePluginConfig> = (\r
  config = {}\r
) => {\r
  const { position = "top-right", customStyle = {} } = config;\r
\r
  const plugin: CardPlugin = {\r
    name: "BadgePlugin",\r
    version: "1.0.0",\r
    description: "徽章插件",\r
    priority: 15,\r
\r
    hooks: {\r
      renderOverlay: (context) => {\r
        // 优先使用 config 中的配置，其次从 context.data 读取\r
        const data = context.data as { badge?: string; badgeType?: string } | undefined;\r
        const text = config.text || data?.badge;\r
        const type: keyof typeof palette =\r
          (config.type as keyof typeof palette) ||\r
          (data?.badgeType as keyof typeof palette) ||\r
          "default";\r
\r
        if (!text) return null;\r
\r
        // 根据类型设置颜色。底色和字色成对给：\r
        // 原来统一用白字，压在金色（1.4:1）、橙红（3.2:1）、绿（2.8:1）上全都读不清，\r
        // 亮底必须配深字 —— 徽章是「一眼要看清两个字」的元件。\r
        const palette = {\r
          premium: { bg: "#FFD700", fg: "#3d2f00" },\r
          hot: { bg: "#c4390f", fg: "#fff" },\r
          new: { bg: "#2e7d32", fg: "#fff" },\r
          sale: { bg: "#c62828", fg: "#fff" },\r
          default: { bg: "#6b6b6b", fg: "#fff" },\r
        };\r
\r
        // 根据位置设置定位\r
        const positions = {\r
          "top-left": { top: "8px", left: "8px" },\r
          "top-right": { top: "8px", right: "8px" },\r
          "bottom-left": { bottom: "8px", left: "8px" },\r
          "bottom-right": { bottom: "8px", right: "8px" },\r
        };\r
\r
        return (\r
          <div\r
            style={{\r
              position: "absolute",\r
              ...positions[position],\r
              padding: "4px 12px",\r
              background: palette[type].bg,\r
              color: palette[type].fg,\r
              fontSize: "12px",\r
              fontWeight: "bold",\r
              borderRadius: "4px",\r
              zIndex: 10,\r
              pointerEvents: "none",\r
              ...customStyle,\r
            }}\r
          >\r
            {text}\r
          </div>\r
        );\r
      },\r
    },\r
\r
    config,\r
  };\r
\r
  return plugin;\r
};\r
`,wu=`/**\r
 * ComparePricePlugin - 比价展示插件（增强：排序/过滤/低价高亮/波动提示）\r
 */\r
import type { CardPlugin, PluginCreator } from "../../components/CardPlugin/plugins/types";\r
import { BusKeys } from "../../components/CardPlugin/plugins/BusKeys";\r
import { setupForceUpdateOnBusKeys } from "../../components/CardPlugin/plugins/utils/busHelpers";\r
import React from "react";\r
\r
export interface ComparePricePluginConfig {\r
  competitors?: Array<{ name: string; price: number; url?: string }>;\r
  showLowestPrice?: boolean;\r
  sortBy?: "price" | "name";\r
  sortOrder?: "asc" | "desc";\r
  filterMaxPrice?: number;\r
  highlightLowerThanOurPrice?: boolean;\r
  priceDiffHighlightThreshold?: number; // 与当前价差超过阈值高亮\r
}\r
\r
// 工厂返回 T 收敛为 unknown：T 仅经 data 透传，自定义 data 形态的调用方请显式写泛型参数。
export const createComparePricePlugin: PluginCreator<unknown, ComparePricePluginConfig> = (\r
  config = {}\r
) => {\r
  const {\r
    competitors = [],\r
    showLowestPrice = true,\r
    sortBy = "price",\r
    sortOrder = "asc",\r
    filterMaxPrice,\r
    highlightLowerThanOurPrice = true,\r
    priceDiffHighlightThreshold = 0,\r
  } = config;\r
\r
  const plugin: CardPlugin = {\r
    name: "ComparePricePlugin",\r
    version: "1.0.0",\r
    description: "展示其他平台价格对比",\r
    priority: 20,\r
    hooks: {\r
      onMount: (context) => {\r
        // 当当前价变化时，触发更新以重算高亮\r
        const cleanup = setupForceUpdateOnBusKeys(context, [BusKeys.skuPrice]);\r
        return cleanup;\r
      },\r
      renderFooter: (context) => {\r
        if (!competitors.length) return null;\r
        const currentPrice = Number(\r
          context.bus?.getData?.(BusKeys.skuPrice) ??\r
            (context.data as { price?: number } | undefined)?.price ??\r
            0\r
        );\r
\r
        let list = [...competitors];\r
        if (typeof filterMaxPrice === "number") {\r
          list = list.filter((c) => c.price <= filterMaxPrice!);\r
        }\r
        list.sort((a, b) => {\r
          const valA = sortBy === "name" ? a.name.localeCompare(b.name) : a.price - 0;\r
          const valB = sortBy === "name" ? b.name.localeCompare(a.name) : b.price - 0;\r
          const cmp = sortBy === "name" ? valA - valB : (a.price - b.price);\r
          return sortOrder === "asc" ? cmp : -cmp;\r
        });\r
\r
        const lowest = showLowestPrice && list.length\r
          ? list.reduce((min, c) => (c.price < min.price ? c : min), list[0])\r
          : undefined;\r
        return (\r
          <div style={{ padding: 12, borderTop: "1px dashed #eee" }}>\r
            <div style={{ fontSize: 12, color: "#6b6b6b", marginBottom: 6 }}>平台价格对比</div>\r
            <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 6 }}>\r
              {list.map((c) => {\r
                const isLowest = lowest?.name === c.name;\r
                const lowerThanOur = highlightLowerThanOurPrice && currentPrice > 0 && c.price < currentPrice;\r
                const diff = currentPrice > 0 ? currentPrice - c.price : 0;\r
                const highlight = isLowest || lowerThanOur || (priceDiffHighlightThreshold > 0 && diff >= priceDiffHighlightThreshold);\r
                return (\r
                <React.Fragment key={c.name}>\r
                  <div style={{ fontSize: 13, color: "#555" }}>{c.name}</div>\r
                  <div style={{ fontSize: 13, fontWeight: 700, color: highlight ? "#2e7d32" : "#333" }}>\r
                    ¥{c.price}\r
                    {lowerThanOur && (\r
                      <span title="低于当前价" style={{ marginLeft: 6, fontSize: 11, color: "#2e7d32" }}>↓{Math.max(0, diff)}</span>\r
                    )}\r
                  </div>\r
                </React.Fragment>\r
              );})}\r
            </div>\r
            {lowest && (\r
              <div style={{ marginTop: 6, fontSize: 12, color: "#2e7d32" }}>\r
                当前最低：{lowest.name}（¥{lowest.price}）\r
              </div>\r
            )}\r
          </div>\r
        );\r
      },\r
      renderPriceArea: (context) => {\r
        if (!competitors.length) return null;\r
        const currentPrice = Number(\r
          context.bus?.getData?.(BusKeys.skuPrice) ??\r
            (context.data as { price?: number } | undefined)?.price ??\r
            0\r
        );\r
        const lowest = competitors.reduce((min, c) => (c.price < min ? c.price : min), Infinity);\r
        if (!isFinite(lowest)) return null;\r
        const diff = currentPrice - lowest;\r
        const isLower = diff < 0;\r
        const color = isLower ? "#1b5e20" : "#a52714";\r
        const label = isLower ? \`低于最低价 ¥\${Math.round(Math.abs(diff))}\` : \`最低价 ¥\${lowest}\`;\r
        return (\r
          <span\r
            style={{\r
              display: "inline-flex",\r
              alignItems: "center",\r
              fontSize: 12,\r
              fontWeight: 700,\r
              color,\r
              background: isLower ? "#E8F5E9" : "#FFF3F3",\r
              border: \`1px solid \${isLower ? "#C8E6C9" : "#F5C6CB"}\`,\r
              borderRadius: 12,\r
              padding: "2px 6px",\r
              marginLeft: 6,\r
            }}\r
            title="平台比价"\r
          >\r
            {label}\r
          </span>\r
        );\r
      },\r
    },\r
    config: { ...config, order: 20 },\r
  };\r
\r
  return plugin;\r
};`,ku=`import type { CardPlugin, PluginCreator } from "../../components/CardPlugin/plugins/types";

import React from "react";

import { CountdownOverlay } from "./internal";

export interface CountdownPluginConfig {
  /** 结束时间戳，毫秒。与 durationMs 二选一，优先使用 endTimestamp */
  endTimestamp?: number;
  /** 从 now 开始的持续时长（毫秒） */
  durationMs?: number;
  /** 徽章位置 */
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  /** 自定义样式 */
  style?: React.CSSProperties;
  /** 前缀字符，例如 ⏰ */
  prefix?: string;
}

const positionsStyle: Record<
  NonNullable<CountdownPluginConfig["position"]>,
  React.CSSProperties
> = {
  "top-left": { top: "8px", left: "8px" },
  "top-right": { top: "8px", right: "8px" },
  "bottom-left": { bottom: "8px", left: "8px" },
  "bottom-right": { bottom: "8px", right: "8px" },
};

// 工厂返回 T 收敛为 unknown：T 仅经 data 透传，自定义 data 形态的调用方请显式写泛型参数。
export const createCountdownPlugin: PluginCreator<
  unknown,
  CountdownPluginConfig
> = (config = {}) => {
  const {
    endTimestamp,
    durationMs,
    position = "top-left",
    style = {},
    prefix = "⏰",
  } = config;

  const resolveEnd = () =>
    typeof endTimestamp === "number" && endTimestamp > 0
      ? endTimestamp
      : Date.now() + (typeof durationMs === "number" ? durationMs : 60 * 60 * 1000);

  const plugin: CardPlugin = {
    name: "CountdownPlugin",
    version: "1.0.0",
    description: "倒计时徽章插件",
    priority: 40,

    hooks: {
      renderOverlay: () => (
        <CountdownOverlay
          resolveEnd={resolveEnd}
          prefix={prefix}
          positionStyle={positionsStyle[position]}
          style={style}
        />
      ),
    },

    config,
  };

  return plugin;
};
`,Su=`/**\r
 * CouponPlugin - 优惠券展示与应用插件\r
 */\r
import type { CardPlugin, PluginCreator } from "../../components/CardPlugin/plugins/types";\r
import { BusKeys } from "../../components/CardPlugin/plugins/BusKeys";\r
import { couponValueLabel, type CouponLike } from "../../components/CardPlugin/plugins/utils/coupon";\r
import React from "react";\r
\r
export interface Coupon extends CouponLike {\r
  code: string;\r
  /** 金额或折数；配合 discountType 解释（见 utils/coupon） */\r
  discount: number;\r
  minAmount?: number;\r
  expiry?: Date;\r
}\r
\r
export interface CouponPluginConfig {\r
  coupons: Coupon[];\r
  autoApply?: boolean;\r
}\r
\r
// 工厂返回 T 收敛为 unknown：T 仅经 data 透传，自定义 data 形态的调用方请显式写泛型参数。
export const createCouponPlugin: PluginCreator<unknown, CouponPluginConfig> = (\r
  config\r
) => {\r
  const coupons = config?.coupons || [];\r
\r
  const plugin: CardPlugin = {\r
    name: "CouponPlugin",\r
    version: "1.0.0",\r
    description: "优惠券展示与应用",\r
    priority: 25,\r
    hooks: {\r
      onMount: (context) => {\r
        if (config?.autoApply && coupons.length) {\r
          context.bus?.setData?.(BusKeys.couponApplied, coupons[0]);\r
        }\r
      },\r
      renderFooter: (context) => {\r
        if (!coupons.length) return null;\r
        const applied: Coupon | undefined = context.bus?.getData?.(BusKeys.couponApplied);\r
        const apply = (c: Coupon) => context.bus?.setData?.(BusKeys.couponApplied, c);\r
        const clear = () => context.bus?.deleteData?.(BusKeys.couponApplied);\r
\r
        return (\r
          <div style={{ padding: 12, borderTop: "1px dashed #eee" }}>\r
            <div style={{ fontSize: 12, color: "#6b6b6b", marginBottom: 6 }}>可用优惠券</div>\r
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>\r
              {coupons.map((c) => {\r
                const isApplied = applied?.code === c.code;\r
                return (\r
                  <button\r
                    key={c.code}\r
                    onClick={() => (isApplied ? clear() : apply(c))}\r
                    title={c.code}\r
                    style={{\r
                      padding: "6px 10px",\r
                      borderRadius: 6,\r
                      border: isApplied ? "2px solid #2e7d32" : "1px solid #ddd",\r
                      background: isApplied ? "#E8F5E9" : "#fff",\r
                      color: "#333",\r
                      cursor: "pointer",\r
                      fontSize: 12,\r
                    }}\r
                  >\r
                    {c.code} - {couponValueLabel(c, "¥")}\r
                  </button>\r
                );\r
              })}\r
            </div>\r
            {applied && (\r
              <div style={{ marginTop: 8, fontSize: 12, color: "#2e7d32" }}>\r
                已应用优惠券：{applied.code}（{couponValueLabel(applied, "¥")}）\r
              </div>\r
            )}\r
          </div>\r
        );\r
      },\r
    },\r
    config,\r
  };\r
\r
  return plugin;\r
};`,ju=`/**\r
 * CouponRecommendPlugin - 优惠券智能推荐\r
 */\r
import type { CardPlugin, PluginCreator } from "../../components/CardPlugin/plugins/types";\r
import { BusKeys } from "../../components/CardPlugin/plugins/BusKeys";\r
import { setupForceUpdateOnBusKeys } from "../../components/CardPlugin/plugins/utils/busHelpers";\r
import { applyDefaults } from "../../components/CardPlugin/plugins/utils/config";\r
import { computeCouponCut, isCouponApplicable, type CouponLike } from "../../components/CardPlugin/plugins/utils/coupon";\r
import type { Coupon } from "../CouponPlugin";\r
import React from "react";\r
\r
export interface CouponRecommendPluginConfig {\r
  coupons: Coupon[];\r
  placement?: "footer" | "overlay";\r
  autoApplyBest?: boolean; // 是否自动应用最佳券\r
  currency?: string;\r
  locale?: string;\r
  order?: number; // priceArea 渲染顺序\r
}\r
\r
function formatCurrency(value: number, currency?: string, locale?: string) {\r
  try {\r
    return new Intl.NumberFormat(locale || "zh-CN", {\r
      style: currency ? "currency" : "decimal",\r
      currency: currency || "CNY",\r
      maximumFractionDigits: 0,\r
    }).format(value);\r
  } catch {\r
    return \`¥\${value}\`;\r
  }\r
}\r
\r
function pickBestCoupon(coupons: Coupon[], subtotal: number): Coupon | undefined {\r
  const applicable = coupons.filter((c) => isCouponApplicable(subtotal, c));\r
  if (!applicable.length) return undefined;\r
  return applicable.reduce(\r
    (best, c) =>\r
      computeCouponCut(subtotal, c) > computeCouponCut(subtotal, best) ? c : best,\r
    applicable[0]\r
  );\r
}\r
\r
/** 当前已应用券的折扣额（统一口径，供 isBetter / delta 复用） */\r
function appliedCut(subtotal: number, applied?: CouponLike): number {\r
  return computeCouponCut(subtotal, applied);\r
}\r
\r
// 工厂返回 T 收敛为 unknown：T 仅经 data 透传，自定义 data 形态的调用方请显式写泛型参数。\r
export const createCouponRecommendPlugin: PluginCreator<unknown, CouponRecommendPluginConfig> = (\r
  config\r
) => {\r
  const cfg = applyDefaults<CouponRecommendPluginConfig>(config || {}, {\r
    coupons: [],\r
    placement: "footer",\r
    autoApplyBest: false,\r
    currency: "CNY",\r
    locale: "zh-CN",\r
    order: 30,\r
  });\r
\r
  const plugin: CardPlugin = {\r
    name: "CouponRecommendPlugin",\r
    version: "1.0.0",\r
    description: "根据小计自动推荐更优优惠券",\r
    priority: 22,\r
    hooks: {\r
      onMount: (context) => {\r
        const cleanup = setupForceUpdateOnBusKeys(context, [\r
          BusKeys.skuPrice,\r
          BusKeys.quantity,\r
          BusKeys.couponApplied,\r
        ]);\r
        // 自动应用当前最优券（可选）\r
        if (cfg.autoApplyBest) {\r
          const price = Number(context.bus?.getData?.(BusKeys.skuPrice) ?? (context.data as { price?: number } | undefined)?.price ?? 0);\r
          const qty = Number(context.bus?.getData?.(BusKeys.quantity) ?? 1);\r
          const subtotal = price * qty;\r
          const best = pickBestCoupon(cfg.coupons, subtotal);\r
          if (best) context.bus?.setData?.(BusKeys.couponApplied, best);\r
        }\r
        return cleanup;\r
      },\r
      renderFooter: (context) => {\r
        if (cfg.placement !== "footer" || !cfg.coupons.length) return null;\r
        const price = Number(context.bus?.getData?.(BusKeys.skuPrice) ?? (context.data as { price?: number } | undefined)?.price ?? 0);\r
        const qty = Number(context.bus?.getData?.(BusKeys.quantity) ?? 1);\r
        const subtotal = price * qty;\r
        const applied = context.bus?.getData?.(BusKeys.couponApplied) as Coupon | undefined;\r
        const best = pickBestCoupon(cfg.coupons, subtotal);\r
\r
        const isBetter =\r
          !!best &&\r
          (!applied || computeCouponCut(subtotal, best) > appliedCut(subtotal, applied));\r
        if (!best || !isBetter) return null;\r
\r
        const delta = Math.max(\r
          0,\r
          computeCouponCut(subtotal, best) - appliedCut(subtotal, applied)\r
        );\r
\r
        const applyBest = () => context.bus?.setData?.(BusKeys.couponApplied, best);\r
\r
        return (\r
          <div style={{ padding: 12, borderTop: "1px dashed #eee", background: "#f9fff6" }}>\r
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>\r
              <span style={{ fontSize: 12, color: "#2e7d32", fontWeight: 700 }}>有更优优惠券可用</span>\r
              <span style={{ fontSize: 12, color: "#666" }}>可再省 {formatCurrency(delta, cfg.currency, cfg.locale)}</span>\r
              <button onClick={applyBest} style={{ marginLeft: "auto", padding: "4px 10px", borderRadius: 6, border: "1px solid #c8e6c9", background: "#e8f5e9", color: "#2e7d32" }}>一键使用</button>\r
            </div>\r
          </div>\r
        );\r
      },\r
      renderOverlay: (context) => {\r
        if (cfg.placement !== "overlay" || !cfg.coupons.length) return null;\r
        const price = Number(context.bus?.getData?.(BusKeys.skuPrice) ?? (context.data as { price?: number } | undefined)?.price ?? 0);\r
        const qty = Number(context.bus?.getData?.(BusKeys.quantity) ?? 1);\r
        const subtotal = price * qty;\r
        const applied = context.bus?.getData?.(BusKeys.couponApplied) as Coupon | undefined;\r
        const best = pickBestCoupon(cfg.coupons, subtotal);\r
\r
        const isBetter =\r
          !!best &&\r
          (!applied || computeCouponCut(subtotal, best) > appliedCut(subtotal, applied));\r
        if (!best || !isBetter) return null;\r
\r
        const applyBest = () => context.bus?.setData?.(BusKeys.couponApplied, best);\r
        return (\r
          <div style={{ position: "absolute", top: 8, left: 8, right: 8, background: "#e8f5e9", border: "1px solid #c8e6c9", borderRadius: 8, padding: 8, zIndex: 11 }}>\r
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>\r
              <span style={{ fontSize: 12, color: "#2e7d32", fontWeight: 700 }}>推荐更优券：{best.code}</span>\r
              <button onClick={applyBest} style={{ marginLeft: "auto", padding: "4px 10px", borderRadius: 6, border: "1px solid #c8e6c9", background: "#c8e6c9", color: "#2e7d32" }}>使用</button>\r
            </div>\r
          </div>\r
        );\r
      },\r
      renderPriceArea: (context) => {\r
        if (!cfg.coupons.length) return null;\r
        const price = Number(context.bus?.getData?.(BusKeys.skuPrice) ?? (context.data as { price?: number } | undefined)?.price ?? 0);\r
        const qty = Number(context.bus?.getData?.(BusKeys.quantity) ?? 1);\r
        const subtotal = price * qty;\r
        const applied = context.bus?.getData?.(BusKeys.couponApplied) as Coupon | undefined;\r
        const best = pickBestCoupon(cfg.coupons, subtotal);\r
\r
        const isBetter =\r
          !!best &&\r
          (!applied || computeCouponCut(subtotal, best) > appliedCut(subtotal, applied));\r
        if (!best || !isBetter) return null;\r
\r
        const delta = Math.max(\r
          0,\r
          computeCouponCut(subtotal, best) - appliedCut(subtotal, applied)\r
        );\r
        const applyBest = () => context.bus?.setData?.(BusKeys.couponApplied, best);\r
        return (\r
          <span\r
            onClick={applyBest}\r
            title={\`更优优惠券：\${best.code}\`}\r
            style={{\r
              display: "inline-flex",\r
              alignItems: "center",\r
              gap: 6,\r
              fontSize: 12,\r
              color: "#1b5e20",\r
              background: "#E8F5E9",\r
              border: "1px solid #C8E6C9",\r
              borderRadius: 12,\r
              padding: "2px 8px",\r
              cursor: "pointer",\r
              marginLeft: 6,\r
            }}\r
          >\r
            可领券再省 {formatCurrency(delta, cfg.currency, cfg.locale)}\r
          </span>\r
        );\r
      },\r
    },\r
    config: cfg,\r
  };\r
\r
  return plugin;\r
};`,$u=`import type { CardPlugin, PluginCreator } from "../../components/CardPlugin/plugins/types";
import React from "react";

import { GalleryHeaderComp, type Slide } from "./internal";

export interface GalleryPluginConfig {
  images?: string[];
  autoplay?: boolean;
  interval?: number;
  showIndicators?: boolean;
  enableZoom?: boolean;
  showThumbnails?: boolean;
  style?: React.CSSProperties;
  videoSrc?: string;
  videoPoster?: string;
  /** 图片加载失败时的兜底图；不传则隐藏破图，不再硬编码 /404.jpg */
  errorFallbackSrc?: string;
  // 渲染位置控制（供 withPlugins 读取）
  headerPosition?: "before" | "after";
  order?: number;
  // 将视频插入到第 N 个位置（1 开始）。默认在末尾
  videoIndex?: number;
}

/** 画廊从 data 里读取的字段（ProductData 之外还允许宿主自定义） */
type GalleryData = {
  name?: string;
  images?: string[];
  image?: string;
  video?: string;
  poster?: string;
};

// 工厂返回 T 收敛为 unknown：T 仅经 data 透传，自定义 data 形态的调用方请显式写泛型参数。
export const createGalleryPlugin: PluginCreator<unknown, GalleryPluginConfig> = (
  config = {}
) => {
  const {
    autoplay = false,
    interval = 3000,
    showIndicators = true,
    enableZoom = false,
    showThumbnails = true,
    style = {},
    videoSrc,
    videoPoster,
    errorFallbackSrc,
  } = config;

  const plugin: CardPlugin = {
    name: "GalleryPlugin",
    version: "1.0.0",
    description: "图片画廊插件（头部区域轮播）",
    priority: 40,
    hooks: {
      renderHeader: (context) => {
        const data = context.data as GalleryData | undefined;
        const imgs: string[] =
          config.images || data?.images || (data?.image ? [data.image] : []);
        const vSrc = videoSrc || data?.video;

        const slides: Slide[] = [
          ...imgs.map((src) => ({ type: "image" as const, src, thumb: src })),
        ];
        if (vSrc) {
          const poster = videoPoster || data?.poster || imgs[0];
          const videoSlide: Slide = { type: "video", src: vSrc, thumb: poster || "" };
          const totalImages = slides.length;
          const desired = (config.videoIndex ?? totalImages + 1) - 1;
          const insertIndex = Math.max(0, Math.min(totalImages, desired));
          slides.splice(insertIndex, 0, videoSlide);
          // 标记由 GalleryHeaderComp 的 effect 写入（渲染期写总线不安全，见 P2-6）
        }
        if (!slides.length) return null;

        return (
          <GalleryHeaderComp
            slides={slides}
            style={style}
            enableZoom={enableZoom}
            autoplay={autoplay}
            interval={interval}
            showIndicators={showIndicators}
            showThumbnails={showThumbnails}
            errorFallbackSrc={errorFallbackSrc}
            context={context}
          />
        );
      },
    },
    config,
  };

  return plugin;
};
`,Iu=`/**\r
 * HoverPlugin - 悬停效果插件\r
 * 负责卡片悬停时的视觉反馈\r
 */\r
\r
import type { CardPlugin, PluginCreator } from "../../components/CardPlugin/plugins/types";\r
\r
export interface HoverPluginConfig {\r
  enableShadow?: boolean;\r
  enableScale?: boolean;\r
  enableBorder?: boolean;\r
  shadowIntensity?: "light" | "medium" | "heavy";\r
  scaleRatio?: number;\r
}\r
\r
// 工厂返回 T 收敛为 unknown：T 仅经 data 透传，自定义 data 形态的调用方请显式写泛型参数。
export const createHoverPlugin: PluginCreator<unknown, HoverPluginConfig> = (\r
  config = {}\r
) => {\r
  const {\r
    enableShadow = true,\r
    enableScale = true,\r
    enableBorder = false,\r
    shadowIntensity = "medium",\r
    scaleRatio = 1.02,\r
  } = config;\r
\r
  const shadows = {\r
    light: "0 2px 8px rgba(0,0,0,0.1)",\r
    medium: "0 4px 12px rgba(0,0,0,0.15)",\r
    heavy: "0 8px 24px rgba(0,0,0,0.2)",\r
  };\r
\r
  const plugin: CardPlugin = {\r
    name: "HoverPlugin",\r
    version: "1.0.0",\r
    description: "悬停效果插件",\r
    priority: 5,\r
\r
    hooks: {\r
      transformProps: (props) => {\r
        return {\r
          ...props,\r
          containerStyle: {\r
            ...props.containerStyle,\r
            transition: "all 0.3s ease",\r
            cursor: "pointer",\r
          },\r
        };\r
      },\r
\r
      onHover: (context, isHovered) => {\r
        const container = context.getContainer();\r
        if (!container) return;\r
\r
        if (isHovered) {\r
          if (enableShadow) {\r
            container.style.boxShadow = shadows[shadowIntensity];\r
          }\r
          if (enableScale) {\r
            container.style.transform = \`scale(\${scaleRatio})\`;\r
          }\r
          if (enableBorder) {\r
            container.style.border = "2px solid #2e7d32";\r
          }\r
        } else {\r
          container.style.boxShadow = "0 2px 4px rgba(0,0,0,0.1)";\r
          container.style.transform = "scale(1)";\r
          if (enableBorder) {\r
            container.style.border = "1px solid #eee";\r
          }\r
        }\r
      },\r
    },\r
\r
    config,\r
  };\r
\r
  return plugin;\r
};\r
`,Ru=`/**
 * ImagePlugin - 商品主图（D1-A：降级为占位实现）
 *
 * 只做「一张封面图」：固定 1:1、可占位、加载失败可兜底。
 * 懒加载/模糊占位/响应式 srcset 属于 vane-lazy-image 的职责，这里不重复实现
 * （旧版的 lazyLoad 只是给 <img loading> 传个属性，容易让人误以为有完整懒加载）。
 *
 * 迁移要点（C3.3）：
 *  - 旧版的 errorFallback 是死代码：<img> 出错时把自己 display:none，而 fallback
 *    那层写死了 display:none，永远不会显示 —— 结果是一块空白灰底。改为组件内
 *    failed 状态互斥渲染。
 *  - placeholder 以前声明了但没人用，现在真正实现为「加载完成前可见」。
 */

import type { CardPlugin, PluginCreator } from "../../components/CardPlugin/plugins/types";
import { BusKeys } from "../../components/CardPlugin/plugins/BusKeys";
import { setupForceUpdateOnBusKeys } from "../../components/CardPlugin/plugins/utils/busHelpers";

import React from "react";

import { CardImage } from "./internal";

export interface ImagePluginConfig {
  src?: string;
  alt?: string;
  /** @deprecated 只透传给 <img loading>，不做真正的懒加载；要懒加载请用 vane-lazy-image */
  lazyLoad?: boolean;
  placeholder?: React.ReactNode;
  errorFallback?: React.ReactNode;
}

// 工厂返回 T 收敛为 unknown：T 仅经 data 透传，自定义 data 形态的调用方请显式写泛型参数。
export const createImagePlugin: PluginCreator<unknown, ImagePluginConfig> = (
  config = {}
) => {
  const plugin: CardPlugin = {
    name: "ImagePlugin",
    version: "1.1.0",
    description: "商品主图（占位实现：固定 1:1、可占位、失败兜底）",
    priority: 10,

    hooks: {
      // 选中变体带图时，主图要跟着换 —— 订阅 skuVariant 触发重渲染
      onMount: (context) =>
        setupForceUpdateOnBusKeys(context, [BusKeys.skuVariant]),

      renderHeader: (context) => {
        // 优先 config，其次变体图，最后 data.image
        const data = context.data as { image?: string; name?: string } | undefined;
        const variantImage = (
          context.bus?.getData?.(BusKeys.skuVariant) as
            | { image?: string }
            | undefined
        )?.image;
        const src = config.src || variantImage || data?.image;
        const alt = config.alt || data?.name || "商品图片";

        if (!src) return null;

        return (
          <CardImage
            src={src}
            alt={alt}
            lazyLoad={Boolean(config.lazyLoad)}
            placeholder={config.placeholder}
            errorFallback={config.errorFallback}
          />
        );
      },
    },

    config,
  };

  return plugin;
};
`,Bu=`/**\r
 * InventoryPlugin - 库存状态（售罄覆盖层 / 低库存角标）\r
 *\r
 * 迁移要点（C3.3）：\r
 *  - 低库存角标以前挂在已删除的 renderBadge 钩子上，从来没显示过；现在并入\r
 *    renderOverlay（C2 已做）。\r
 *  - 库存口径与 QuantityPlugin 对齐：**选中变体的库存优先**，其次 data.inventory。\r
 *    旧版只看 data.inventory，于是「选了缺货规格 → 数量变 0，但卡片不显示售罄」。\r
 *    并订阅 skuVariant，切规格后状态实时跟着变。\r
 */\r
\r
import type { CardPlugin, PluginBus, PluginCreator } from "../../components/CardPlugin/plugins/types";\r
import { BusKeys } from "../../components/CardPlugin/plugins/BusKeys";\r
import { setupForceUpdateOnBusKeys } from "../../components/CardPlugin/plugins/utils/busHelpers";\r
import React from "react";\r
\r
export interface InventoryPluginConfig {\r
  lowStockThreshold?: number; // 低库存阈值\r
  showOverlayWhenSoldOut?: boolean; // 售罄时覆盖层\r
}\r
\r
/**\r
 * 库存口径：选中变体库存 > data.inventory > 未知。\r
 *\r
 * 返回 \`undefined\` 表示「未知」，绝不能折算成 0 —— \`ProductData.inventory\` 与\r
 * \`ProductVariant.stock\` 都是可选的，契约写明「缺失表示未知」。旧版回落成 0，\r
 * 于是只传 price/title/image 的卡片首帧就被判成售罄并盖上整卡蒙层（P0-1）。\r
 */\r
function resolveInventory(\r
  context: { bus?: PluginBus; data?: unknown }\r
): number | undefined {\r
  const variant = context.bus?.getData?.(BusKeys.skuVariant) as\r
    | { stock?: number }\r
    | undefined;\r
  if (typeof variant?.stock === "number") return variant.stock;\r
  const inventory = (context.data as { inventory?: number } | undefined)?.inventory;\r
  return typeof inventory === "number" ? inventory : undefined;\r
}\r
\r
// 工厂返回 T 收敛为 unknown：T 仅经 data 透传，自定义 data 形态的调用方请显式写泛型参数。\r
export const createInventoryPlugin: PluginCreator<unknown, InventoryPluginConfig> = (\r
  config = {}\r
) => {\r
  const { lowStockThreshold = 5, showOverlayWhenSoldOut = true } = config;\r
\r
  const plugin: CardPlugin = {\r
    name: "InventoryPlugin",\r
    version: "1.1.0",\r
    description: "库存状态展示插件（售罄覆盖层 / 低库存角标）",\r
    priority: 45,\r
    hooks: {\r
      // 切规格后库存口径变了，需要重渲染\r
      onMount: (context) =>\r
        setupForceUpdateOnBusKeys(context, [BusKeys.skuVariant]),\r
\r
      renderOverlay: (context) => {\r
        const inventory = resolveInventory(context);\r
        // 未知库存（undefined）既不是售罄也不是紧张：什么都不渲染\r
        const known = typeof inventory === "number";\r
        const soldOut = showOverlayWhenSoldOut && known && inventory! <= 0;\r
        const lowStock = known && inventory! > 0 && inventory! <= lowStockThreshold;\r
        if (!soldOut && !lowStock) return null;\r
        return (\r
          <>\r
            {soldOut && (\r
              <div\r
                role="status"\r
                aria-live="polite"\r
                data-card-sold-out="true"\r
                style={{\r
                  position: "absolute",\r
                  inset: 0,\r
                  background: "rgba(0,0,0,0.5)",\r
                  color: "#fff",\r
                  display: "flex",\r
                  alignItems: "center",\r
                  justifyContent: "center",\r
                  fontSize: 18,\r
                  fontWeight: 600,\r
                  borderRadius: 8,\r
                  zIndex: 9,\r
                  // 蒙层只是视觉提示，不能吞掉整卡的点击/滚动：\r
                  // 旧版没有这行，售罄时点规格、点加购、点主图全部无效。\r
                  pointerEvents: "none",\r
                }}\r
              >\r
                已售罄\r
              </div>\r
            )}\r
            {lowStock && (\r
              <div\r
                style={{\r
                  position: "absolute",\r
                  top: 8,\r
                  left: 8,\r
                  background: "#b35c00",\r
                  color: "#fff",\r
                  padding: "4px 8px",\r
                  fontSize: 12,\r
                  borderRadius: 4,\r
                  zIndex: 10,\r
                  pointerEvents: "none",\r
                }}\r
              >\r
                库存紧张\r
              </div>\r
            )}\r
          </>\r
        );\r
      },\r
    },\r
    config,\r
  };\r
\r
  return plugin;\r
};\r
`,Tu=`/**\r
 * OrderSummaryPlugin - 账单明细/结算摘要\r
 */\r
import type { CardPlugin, PluginCreator } from "../../components/CardPlugin/plugins/types";\r
import { BusKeys } from "../../components/CardPlugin/plugins/BusKeys";\r
import { setupForceUpdateOnBusKeys } from "../../components/CardPlugin/plugins/utils/busHelpers";\r
import { applyDefaults } from "../../components/CardPlugin/plugins/utils/config";\r
import { computeCouponCut, type CouponLike } from "../../components/CardPlugin/plugins/utils/coupon";\r
import React from "react";\r
\r
export interface OrderSummaryPluginConfig {\r
  showBreakdown?: boolean; // 是否显示明细行\r
  showTax?: boolean;\r
  showShipping?: boolean;\r
  currency?: string;\r
  locale?: string;\r
  taxRate?: number; // 税率（如 0.1 表示 10%）\r
  shippingFee?: number; // 固定运费\r
  placement?: "footer" | "overlay";\r
}\r
\r
function formatCurrency(value: number, currency?: string, locale?: string) {\r
  try {\r
    return new Intl.NumberFormat(locale || "zh-CN", {\r
      style: currency ? "currency" : "decimal",\r
      currency: currency || "CNY",\r
      maximumFractionDigits: 0,\r
    }).format(value);\r
  } catch {\r
    return \`¥\${value}\`;\r
  }\r
}\r
\r
// 工厂返回 T 收敛为 unknown：T 仅经 data 透传，自定义 data 形态的调用方请显式写泛型参数。
export const createOrderSummaryPlugin: PluginCreator<unknown, OrderSummaryPluginConfig> = (\r
  config = {}\r
) => {\r
  const cfg = applyDefaults<OrderSummaryPluginConfig>(config, {\r
    showBreakdown: true,\r
    showTax: false,\r
    showShipping: false,\r
    currency: "CNY",\r
    locale: "zh-CN",\r
    taxRate: 0,\r
    shippingFee: 0,\r
    placement: "footer",\r
  });\r
\r
  const plugin: CardPlugin = {\r
    name: "OrderSummaryPlugin",\r
    version: "1.0.0",\r
    description: "显示单价×数量−优惠券+税费/运费的账单明细",\r
    priority: 18,\r
    hooks: {\r
      onMount: (context) => {\r
        const cleanup = setupForceUpdateOnBusKeys(context, [\r
          BusKeys.skuPrice,\r
          BusKeys.quantity,\r
          BusKeys.couponApplied,\r
        ]);\r
        return cleanup;\r
      },\r
      renderFooter: (context) => {\r
        if (cfg.placement !== "footer") return null;\r
        const skuPrice = context.bus?.getData?.(BusKeys.skuPrice);\r
        const price = Number(\r
          skuPrice ?? (context.data as { price?: number } | undefined)?.price ?? 0\r
        );\r
        const qty = Number(context.bus?.getData?.(BusKeys.quantity) ?? 1);\r
        const appliedCoupon = context.bus?.getData?.(BusKeys.couponApplied) as CouponLike | undefined;\r
        const subtotal = price * qty;\r
        const couponCut = computeCouponCut(subtotal, appliedCoupon);\r
        const tax = cfg.showTax ? Math.round(subtotal * (cfg.taxRate ?? 0)) : 0;\r
        const shipping = cfg.showShipping ? (cfg.shippingFee ?? 0) : 0;\r
        const total = Math.max(0, subtotal - couponCut + tax + shipping);\r
\r
        return (\r
          <div style={{ padding: 12, borderTop: "1px dashed #eee" }}>\r
            <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 8, fontSize: 13, color: "#555" }}>\r
              {cfg.showBreakdown && (\r
                <>\r
                  <span>单价 × 数量</span>\r
                  <span style={{ textAlign: "right" }}>{formatCurrency(price, cfg.currency, cfg.locale)} × {qty}</span>\r
                  {appliedCoupon?.code && (\r
                    <>\r
                      <span>优惠券（{appliedCoupon.code}）</span>\r
                      <span style={{ textAlign: "right", color: "#c62828" }}>- {formatCurrency(couponCut, cfg.currency, cfg.locale)}</span>\r
                    </>\r
                  )}\r
                  {cfg.showTax && (\r
                    <>\r
                      <span>税费</span>\r
                      <span style={{ textAlign: "right" }}>{formatCurrency(tax, cfg.currency, cfg.locale)}</span>\r
                    </>\r
                  )}\r
                  {cfg.showShipping && (\r
                    <>\r
                      <span>运费</span>\r
                      <span style={{ textAlign: "right" }}>{formatCurrency(shipping, cfg.currency, cfg.locale)}</span>\r
                    </>\r
                  )}\r
                </>\r
              )}\r
            </div>\r
\r
            <div style={{ marginTop: 8, display: "flex", justifyContent: "space-between", alignItems: "center" }}>\r
              <span style={{ fontSize: 12, color: "#6b6b6b" }}>合计</span>\r
              <span style={{ fontSize: 16, fontWeight: 800, color: "#1565c0" }}>{formatCurrency(total, cfg.currency, cfg.locale)}</span>\r
            </div>\r
          </div>\r
        );\r
      },\r
      renderOverlay: (context) => {\r
        if (cfg.placement !== "overlay") return null;\r
        const skuPrice = context.bus?.getData?.(BusKeys.skuPrice);\r
        const price = Number(\r
          skuPrice ?? (context.data as { price?: number } | undefined)?.price ?? 0\r
        );\r
        const qty = Number(context.bus?.getData?.(BusKeys.quantity) ?? 1);\r
        const appliedCoupon = context.bus?.getData?.(BusKeys.couponApplied) as CouponLike | undefined;\r
        const subtotal = price * qty;\r
        const couponCut = computeCouponCut(subtotal, appliedCoupon);\r
        const tax = cfg.showTax ? Math.round(subtotal * (cfg.taxRate ?? 0)) : 0;\r
        const shipping = cfg.showShipping ? (cfg.shippingFee ?? 0) : 0;\r
        const total = Math.max(0, subtotal - couponCut + tax + shipping);\r
\r
        return (\r
          <div style={{ position: "absolute", bottom: 8, left: 8, right: 8, background: "rgba(255,255,255,0.95)", borderRadius: 8, padding: 8, zIndex: 10 }}>\r
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>\r
              <span style={{ fontSize: 12, color: "#666" }}>合计</span>\r
              <span style={{ fontSize: 16, fontWeight: 800, color: "#1565c0" }}>{formatCurrency(total, cfg.currency, cfg.locale)}</span>\r
            </div>\r
          </div>\r
        );\r
      },\r
    },\r
    config: cfg,\r
  };\r
\r
  return plugin;\r
};`,Ou=`/**\r
 * PriceCalculatorPlugin - 价格计算与展示插件\r
 */\r
import type { CardPlugin, PluginCreator } from "../../components/CardPlugin/plugins/types";\r
import { BusKeys } from "../../components/CardPlugin/plugins/BusKeys";\r
import { applyDefaults } from "../../components/CardPlugin/plugins/utils/config";\r
import { computeCouponCut, type CouponLike } from "../../components/CardPlugin/plugins/utils/coupon";\r
import React from "react";\r
\r
export interface PriceCalculatorPluginConfig {\r
  showOriginalPrice?: boolean;\r
  showDiscount?: boolean; // 显示折扣百分比\r
  showSavings?: boolean; // 显示节省金额\r
  showSavingsBadgeInPriceArea?: boolean; // 在价格区域显示节省徽章\r
  showTotalPrice?: boolean; // 显示按数量与优惠后的合计\r
  currency?: string; // 如 CNY, USD\r
  locale?: string; // 如 zh-CN, en-US\r
  order?: number; // priceArea 渲染顺序\r
}\r
\r
function formatCurrency(value: number, currency?: string, locale?: string) {\r
  try {\r
    return new Intl.NumberFormat(locale || "zh-CN", {\r
      style: currency ? "currency" : "decimal",\r
      currency: currency || "CNY",\r
      maximumFractionDigits: 0,\r
    }).format(value);\r
  } catch {\r
    return \`¥\${value}\`;\r
  }\r
}\r
\r
/**\r
 * 原价字段：公开类型 \`ProductData\` 里叫 \`oldPrice\`，插件早期只认 \`originalPrice\`。\r
 *\r
 * 结果就是「按文档给数据的人永远看不到划线价与折扣」（示例页的数据都是 oldPrice，\r
 * 于是 \`showDiscount\` / \`showSavings\` 两个开关拖了半天什么都不变 —— 看起来像控件坏了，\r
 * 其实是原价恒为 0、\`hasOriginal\` 恒 false）。\r
 * 以公开类型为准：先读 oldPrice，再兼容 originalPrice。\r
 */\r
function readOriginalPrice(data: unknown): number {\r
  const d = (data ?? {}) as { oldPrice?: number; originalPrice?: number };\r
  return Number(d.oldPrice ?? d.originalPrice ?? 0);\r
}\r
\r
// 工厂返回 T 收敛为 unknown：T 仅经 data 透传，自定义 data 形态的调用方请显式写泛型参数。
export const createPriceCalculatorPlugin: PluginCreator<unknown, PriceCalculatorPluginConfig> = (\r
  config = {}\r
) => {\r
  const cfg = applyDefaults<PriceCalculatorPluginConfig>(config, {\r
    showOriginalPrice: true,\r
    showDiscount: true,\r
    showSavings: true,\r
    showSavingsBadgeInPriceArea: true,\r
    showTotalPrice: false,\r
    currency: "CNY",\r
    locale: "zh-CN",\r
    order: 10,\r
  });\r
\r
  const plugin: CardPlugin = {\r
    name: "PriceCalculatorPlugin",\r
    version: "1.0.0",\r
    description: "价格计算与展示（现价/原价/折扣/节省）",\r
    priority: 20,\r
    hooks: {\r
      onMount: (context) => {\r
        // 在价格/数量/优惠券相关键变化时触发更新与事件发布\r
        const recalc = () => {\r
          const skuPrice = context.bus?.getData?.(BusKeys.skuPrice);\r
          const price = Number(skuPrice ?? (context.data as { price?: number } | undefined)?.price ?? 0);\r
          const quantity = Number(context.bus?.getData?.(BusKeys.quantity) ?? 1);\r
          const appliedCoupon = context.bus?.getData?.(BusKeys.couponApplied) as CouponLike | undefined;\r
          const subtotal = price * quantity;\r
          // 折扣口径唯一实现在 utils/coupon（金额券 / 折数券）\r
          const total = Math.max(0, subtotal - computeCouponCut(subtotal, appliedCoupon));\r
          // 发布 price:change 事件（含当前单价/数量/小计/合计/券）\r
          context.bus?.emit?.("price:change", { price, quantity, subtotal, total, coupon: appliedCoupon });\r
          // 触发 UI 刷新\r
          context.forceUpdate();\r
        };\r
\r
        const off1 = context.bus?.on?.(BusKeys.skuPrice, recalc);\r
        const off2 = context.bus?.on?.(BusKeys.quantity, recalc);\r
        const off3 = context.bus?.on?.(BusKeys.couponApplied, recalc);\r
        // 初始化一次\r
        recalc();\r
        // 卸载清理\r
        return () => {\r
          if (off1) {\r
            try { off1(); } catch {}\r
          }\r
          if (off2) {\r
            try { off2(); } catch {}\r
          }\r
          if (off3) {\r
            try { off3(); } catch {}\r
          }\r
        };\r
      },\r
      renderFooter: (context) => {\r
        const skuPrice = context.bus?.getData?.(BusKeys.skuPrice);\r
        const price = Number(\r
          skuPrice ?? (context.data as { price?: number } | undefined)?.price ?? 0\r
        );\r
        const originalPrice = readOriginalPrice(context.data);\r
        const hasOriginal = cfg.showOriginalPrice && originalPrice > price && originalPrice > 0;\r
        const savings = hasOriginal ? originalPrice - price : 0;\r
        const discount = hasOriginal ? Math.round((1 - price / originalPrice) * 100) : 0;\r
\r
        const quantity = Number(context.bus?.getData?.(BusKeys.quantity) ?? 1);\r
        const appliedCoupon = context.bus?.getData?.(BusKeys.couponApplied) as CouponLike | undefined;\r
        const subtotal = price * quantity;\r
        const total = Math.max(0, subtotal - computeCouponCut(subtotal, appliedCoupon));\r
\r
        return (\r
          <div style={{ padding: 12 }}>\r
            <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>\r
              <span style={{ fontSize: 20, fontWeight: 800, color: "#c62828" }}>\r
                {formatCurrency(price, cfg.currency, cfg.locale)}\r
              </span>\r
              {hasOriginal && (\r
                <span style={{ fontSize: 14, color: "#6b6b6b", textDecoration: "line-through" }}>\r
                  {formatCurrency(originalPrice, cfg.currency, cfg.locale)}\r
                </span>\r
              )}\r
              {hasOriginal && cfg.showDiscount && (\r
                <span style={{ fontSize: 12, color: "#2e7d32", fontWeight: 700 }}>-{discount}%</span>\r
              )}\r
            </div>\r
\r
            {(hasOriginal && cfg.showSavings) && (\r
              <div style={{ marginTop: 4, fontSize: 12, color: "#555" }}>\r
                已省 {formatCurrency(savings, cfg.currency, cfg.locale)}\r
              </div>\r
            )}\r
\r
            {cfg.showTotalPrice && (\r
              <div style={{ marginTop: 6, display: "flex", justifyContent: "space-between", alignItems: "center" }}>\r
                <span style={{ fontSize: 12, color: "#666" }}>数量：{quantity}{appliedCoupon?.code ? \`（已用券：\${appliedCoupon.code}）\` : ""}</span>\r
                <span style={{ fontSize: 14, fontWeight: 700, color: "#1565c0" }}>\r
                  合计 {formatCurrency(total, cfg.currency, cfg.locale)}\r
                </span>\r
              </div>\r
            )}\r
          </div>\r
        );\r
      },\r
      renderPriceArea: (context) => {\r
        const skuPrice = context.bus?.getData?.(BusKeys.skuPrice);\r
        const price = Number(\r
          skuPrice ?? (context.data as { price?: number } | undefined)?.price ?? 0\r
        );\r
        const originalPrice = readOriginalPrice(context.data);\r
        const hasOriginal = cfg.showOriginalPrice && originalPrice > price && originalPrice > 0;\r
        const discount = hasOriginal ? Math.round((1 - price / originalPrice) * 100) : 0;\r
        const savings = hasOriginal ? originalPrice - price : 0;\r
        if (!hasOriginal) return null;\r
        const nodes: React.ReactNode[] = [];\r
        if (cfg.showDiscount && discount > 0) {\r
          nodes.push(\r
            <span key="discount" style={{ fontSize: 12, color: "#2e7d32", fontWeight: 700 }} title="折扣">\r
              -{discount}%\r
            </span>\r
          );\r
        }\r
        if (cfg.showSavingsBadgeInPriceArea && savings > 0) {\r
          nodes.push(\r
            <span\r
              key="savings"\r
              title="已省"\r
              style={{\r
                display: "inline-flex",\r
                alignItems: "center",\r
                fontSize: 12,\r
                color: "#1b5e20",\r
                background: "#E8F5E9",\r
                border: "1px solid #C8E6C9",\r
                borderRadius: 12,\r
                padding: "2px 6px",\r
                marginLeft: 6,\r
              }}\r
            >\r
              省 {formatCurrency(savings, cfg.currency, cfg.locale)}\r
            </span>\r
          );\r
        }\r
        if (!nodes.length) return null;\r
        return <>{nodes}</>;\r
      },\r
    },\r
    config: cfg,\r
  };\r
\r
  return plugin;\r
};`,Nu=`/**
 * QuantityPlugin - 数量步进器插件
 */
import type { CardPlugin, PluginBus, PluginCreator } from "../../components/CardPlugin/plugins/types";
import { BusKeys } from "../../components/CardPlugin/plugins/BusKeys";
import { setupForceUpdateOnBusKeys } from "../../components/CardPlugin/plugins/utils/busHelpers";
import { applyDefaults } from "../../components/CardPlugin/plugins/utils/config";
import React from "react";

import { Stepper } from "./internal";

export interface QuantityPluginConfig {
  min?: number;
  max?: number; // 若未设置，则自动根据变体库存或整体库存推断
  step?: number;
  renderIn?: "footer" | "overlay";
  useVariantStock?: boolean; // 优先使用选中变体的库存作为上限
  resetOnVariantChange?: boolean; // 规格切换时是否重置数量到最小值
  clampOnMaxDecrease?: boolean; // 当最大值下降时是否钳制到新上限
}

function getMax(
  context: { bus?: PluginBus; data?: unknown },
  config: QuantityPluginConfig,
  min: number
): number {
  if (typeof config.max === "number") return Math.max(min, config.max);
  const variant = context.bus?.getData?.(BusKeys.skuVariant) as { stock?: number } | undefined;
  const stockVariant = config.useVariantStock !== false ? variant?.stock : undefined;
  const inventory = (context.data as { inventory?: number } | undefined)?.inventory;
  const cap = typeof stockVariant === "number" ? stockVariant : typeof inventory === "number" ? inventory : undefined;
  if (typeof cap === "number") {
    // 库存为 0 时直接返回 0（缺货），避免最小值提升为 1
    if (cap <= 0) return 0;
    return Math.max(min, cap);
  }
  return 99;
}

// 工厂返回 T 收敛为 unknown：T 仅经 data 透传，自定义 data 形态的调用方请显式写泛型参数。
export const createQuantityPlugin: PluginCreator<unknown, QuantityPluginConfig> = (
  config = {}
) => {
  const cfg = applyDefaults<QuantityPluginConfig>(config, {
    min: 1,
    step: 1,
    renderIn: "footer",
    useVariantStock: true,
    resetOnVariantChange: true,
    clampOnMaxDecrease: true,
  });

  const plugin: CardPlugin = {
    name: "QuantityPlugin",
    version: "1.0.0",
    description: "数量选择步进器（联动库存/变体）",
    priority: 30,
    hooks: {
      onMount: (context) => {
        const currentMax = getMax(context, { ...cfg }, cfg.min ?? 1);
        const initial = currentMax === 0 ? 0 : Math.max(cfg.min ?? 1, 1);
        context.bus?.setData?.(BusKeys.quantity, initial);
        // 针对数量与变体变化订阅强制刷新
        const cleanup = setupForceUpdateOnBusKeys(context, [
          BusKeys.quantity,
          BusKeys.skuVariant,
        ]);
        // 在卸载时清理（挂载内返回清理函数）
        return cleanup;
      },
      renderFooter: (context) => {
        if (cfg.renderIn !== "footer") return null;
        const max = getMax(context, { ...cfg }, cfg.min ?? 1);
        return (
          <div style={{ padding: 12, borderTop: "1px dashed #eee" }}>
            <Stepper
              context={context}
              min={cfg.min ?? 1}
              step={cfg.step ?? 1}
              max={max}
              resetOnVariantChange={cfg.resetOnVariantChange}
              clampOnMaxDecrease={cfg.clampOnMaxDecrease}
            />
          </div>
        );
      },
      renderOverlay: (context) => {
        if (cfg.renderIn !== "overlay") return null;
        const max = getMax(context, { ...cfg }, cfg.min ?? 1);
        return (
          <div style={{ position: "absolute", bottom: 8, left: 8, right: 8, background: "rgba(255,255,255,0.92)", borderRadius: 8, padding: 8, zIndex: 9 }}>
            <Stepper
              context={context}
              min={cfg.min ?? 1}
              step={cfg.step ?? 1}
              max={max}
              resetOnVariantChange={cfg.resetOnVariantChange}
              clampOnMaxDecrease={cfg.clampOnMaxDecrease}
            />
          </div>
        );
      },
    },
    config: cfg,
  };

  return plugin;
};
`,Au=`import type { CardPlugin, PluginCreator } from "../../components/CardPlugin/plugins/types";\r
\r
export interface ResponsivePluginConfig {\r
  breakpoints?: { mobile: number; tablet: number; desktop: number };\r
  layouts?: { mobile?: "vertical" | "horizontal"; tablet?: "vertical" | "horizontal"; desktop?: "vertical" | "horizontal" };\r
  containerStyles?: { mobile?: React.CSSProperties; tablet?: React.CSSProperties; desktop?: React.CSSProperties };\r
}\r
\r
// 工厂返回 T 收敛为 unknown：T 仅经 data 透传，自定义 data 形态的调用方请显式写泛型参数。
export const createResponsivePlugin: PluginCreator<unknown, ResponsivePluginConfig> = (\r
  config = {}\r
) => {\r
  const {\r
    breakpoints = { mobile: 600, tablet: 900, desktop: 1200 },\r
    layouts = { mobile: "vertical", tablet: "vertical", desktop: "horizontal" },\r
    containerStyles = {},\r
  } = config;\r
\r
  const applyLayout = (container: HTMLDivElement | null, width: number) => {\r
    if (!container) return;\r
\r
    const isMobile = width <= breakpoints.mobile;\r
    const isTablet = width > breakpoints.mobile && width <= breakpoints.tablet;\r
    const layout = isMobile ? layouts.mobile : isTablet ? layouts.tablet : layouts.desktop;\r
\r
    // 基础样式：平滑过渡\r
    container.style.transition = container.style.transition || "all 0.2s ease";\r
\r
    // 布局方向标记（供外层样式选择器使用）\r
    container.setAttribute("data-layout", layout || "vertical");\r
\r
    // 注入常用容器样式（可选）\r
    const styleByBp = isMobile\r
      ? containerStyles.mobile\r
      : isTablet\r
      ? containerStyles.tablet\r
      : containerStyles.desktop;\r
    if (styleByBp) {\r
      Object.assign(container.style, styleByBp);\r
    }\r
  };\r
\r
  const plugin: CardPlugin = {\r
    name: "ResponsivePlugin",\r
    version: "1.0.0",\r
    description: "根据卡片尺寸切换布局与样式",\r
    priority: 80,\r
    hooks: {\r
      onMount: (context) => {\r
        const size = context.getSize();\r
        applyLayout(context.getContainer(), size.width);\r
      },\r
      onResize: (context, width) => {\r
        applyLayout(context.getContainer(), width);\r
      },\r
      transformProps: (props) => {\r
        // 在 props 层加入响应式基础样式，避免闪烁\r
        return {\r
          ...props,\r
          containerStyle: {\r
            boxSizing: "border-box",\r
            width: "100%",\r
            ...props.containerStyle,\r
          },\r
        };\r
      },\r
    },\r
    config,\r
  };\r
\r
  return plugin;\r
};`,_u=`import type { CardPlugin, PluginCreator } from "../../components/CardPlugin/plugins/types";
import React from "react";

import { ReviewFooter } from "./internal";

export interface ReviewPluginConfig {
  showRating?: boolean;
  showReviewCount?: boolean;
  enableUserReview?: boolean;
  onReviewSubmit?: (rating: number, comment: string) => void;
}

// 工厂返回 T 收敛为 unknown：T 仅经 data 透传，自定义 data 形态的调用方请显式写泛型参数。
export const createReviewPlugin: PluginCreator<unknown, ReviewPluginConfig> = (
  config = {}
) => {
  const {
    showRating = true,
    showReviewCount = true,
    enableUserReview = false,
    onReviewSubmit,
  } = config;

  const plugin: CardPlugin = {
    name: "ReviewPlugin",
    version: "1.0.0",
    description: "评分与评价展示插件",
    priority: 30,
    hooks: {
      renderFooter: (context) => {
        const data = context.data as
          | { rating?: number; ratingCount?: number }
          | undefined;
        const rating: number = data?.rating ?? 0;
        const reviewCount: number = data?.ratingCount ?? 0;

        return (
          <ReviewFooter
            rating={rating}
            reviewCount={reviewCount}
            showRating={showRating}
            showReviewCount={showReviewCount}
            enableUserReview={enableUserReview}
            onReviewSubmit={onReviewSubmit}
          />
        );
      },
    },
    config,
  };

  return plugin;
};
`,Du=`/**
 * SKUPlugin - 基础变体选择与匹配
 *
 * 口径统一（P1-2）：与复合组件完全一致地使用 \`attributesMatchExactly\` ——
 * 只有「已选属性集 == 变体属性集」才算命中；只选了颜色还没选尺码时不写价格，
 * 让价格回退到商品级字段，而不是拿数组里第一条同色变体顶上去。
 *
 * 派生键（P1-3）：每次选择变化都先清后写（\`writeSkuDerivedKeys\`），
 * 并且 onMount 返回总线订阅，只装 SKUPlugin 时选中态也能刷新。
 */
import type { CardPlugin, PluginBus, PluginCreator } from "../../components/CardPlugin/plugins/types";
import { BusKeys } from "../../components/CardPlugin/plugins/BusKeys";
import { attributesMatchExactly } from "../../components/CardPlugin/types/product";
import { setupForceUpdateOnBusKeys } from "../../components/CardPlugin/plugins/utils/busHelpers";
import { writeSkuDerivedKeys } from "../../components/CardPlugin/plugins/utils/sku";
import React from "react";

import { Selector } from "./internal";

export interface SKUAttribute {
  name: string; // 如 颜色、尺码
  options: string[]; // 如 ["红", "蓝"]
}

export interface SKUVariant {
  sku: string;
  attrs: Record<string, string>; // { 颜色: "红", 尺码: "M" }
  price?: number;
  stock?: number;
  image?: string;
}

export interface SKUPluginConfig {
  attributes: SKUAttribute[];
  variants: SKUVariant[];
  renderIn?: "footer" | "overlay"; // 选择控件位置
}

function matchVariant(
  variants: SKUVariant[],
  selection: Record<string, string>
): SKUVariant | undefined {
  if (!variants.length) return undefined;
  return variants.find((v) => attributesMatchExactly(v.attrs, selection));
}

// 工厂返回 T 收敛为 unknown：T 仅经 data 透传，自定义 data 形态的调用方请显式写泛型参数。
export const createSKUPlugin: PluginCreator<unknown, SKUPluginConfig> = (config) => {
  const attributes = config?.attributes || [];
  const variants = config?.variants || [];
  const renderIn = config?.renderIn || "footer";

  /** 唯一的「写选择 + 写派生键 + 发事件」入口（footer / overlay / 首屏共用） */
  const applySelection = (
    context: { bus?: PluginBus },
    next: Record<string, string>
  ) => {
    const bus = context.bus;
    bus?.setData?.(BusKeys.skuSelection, next);
    const matched = matchVariant(variants, next);
    // 先清后写：未命中时把 skuVariant / skuPrice / skuImage 全部清掉
    writeSkuDerivedKeys(bus, matched);
    // 发布 sku:change 事件
    bus?.emit?.("sku:change", {
      attrs: next,
      variant: matched,
      stock: typeof matched?.stock === "number" ? matched.stock : undefined,
    });
  };

  const plugin: CardPlugin = {
    name: "SKUPlugin",
    version: "1.1.0",
    description: "基础 SKU 变体选择与匹配",
    priority: 60,
    hooks: {
      onMount: (context) => {
        // 初始化选择
        const initSel = attributes.reduce<Record<string, string>>((acc, a) => {
          const d = (context.data as { defaultAttrs?: Record<string, string> } | undefined)
            ?.defaultAttrs?.[a.name];
          if (d) acc[a.name] = d;
          return acc;
        }, {});
        applySelection(context, initSel);
        // 只装 SKUPlugin（没有 PriceCalculator 等消费方）时，点击后也要刷新选中态
        return setupForceUpdateOnBusKeys(context, [
          BusKeys.skuSelection,
          BusKeys.skuVariant,
        ]);
      },
      renderFooter: (context) => {
        if (renderIn !== "footer") return null;
        const sel = context.bus?.getData?.<Record<string, string>>(BusKeys.skuSelection) || {};
        const setSel = (name: string, value: string) => {
          applySelection(context, { ...sel, [name]: value });
        };

        const variant = context.bus?.getData?.<SKUVariant>(BusKeys.skuVariant);
        return (
          <div style={{ padding: 12, borderTop: "1px dashed #eee" }}>
            <div style={{ fontSize: 12, color: "#6b6b6b", marginBottom: 6 }}>选择规格</div>
            <Selector attributes={attributes} selection={sel} onChange={setSel} />
            {variant && (
              <div style={{ marginTop: 8, fontSize: 12, color: "#555" }}>
                已选：{Object.entries(variant.attrs).map(([k, v]) => \`\${k}:\${v}\`).join(" / ")}（SKU：{variant.sku}）
                {typeof variant.stock === "number" && <span style={{ marginLeft: 8 }}>库存：{variant.stock}</span>}
              </div>
            )}
          </div>
        );
      },
      renderOverlay: (context) => {
        if (renderIn !== "overlay") return null;
        const sel = context.bus?.getData?.<Record<string, string>>(BusKeys.skuSelection) || {};
        const setSel = (name: string, value: string) => {
          applySelection(context, { ...sel, [name]: value });
        };
        return (
          <div style={{ position: "absolute", bottom: 8, left: 8, right: 8, background: "rgba(255,255,255,0.9)", borderRadius: 8, padding: 8, zIndex: 9 }}>
            <Selector attributes={attributes} selection={sel} onChange={setSel} />
          </div>
        );
      },
    },
    config,
  };

  return plugin;
};
`,Eu=`/**\r
 * StatePlugin - 状态管理插件\r
 * 负责购物车和心愿单状态的管理\r
 */\r
\r
import type { CardPlugin, PluginCreator } from "../../components/CardPlugin/plugins/types";\r
\r
export interface StatePluginConfig {\r
  enableCart?: boolean;\r
  enableWishlist?: boolean;\r
  onCartChange?: (cardId: string, isAdded: boolean) => void;\r
  onWishlistChange?: (cardId: string, isWishlisted: boolean) => void;\r
}\r
\r
// 工厂返回 T 收敛为 unknown：T 仅经 data 透传，自定义 data 形态的调用方请显式写泛型参数。\r
export const createStatePlugin: PluginCreator<unknown, StatePluginConfig> = (\r
  config = {}\r
) => {\r
  // enableCart / enableWishlist 是历史配置项，从未参与状态逻辑；\r
  // 保留在 config 里原样透传，但不再解构，避免「声明了却不使用」。\r
  const { onCartChange, onWishlistChange } = config;\r
\r
  const plugin: CardPlugin = {\r
    name: "StatePlugin",\r
    version: "1.0.0",\r
    description: "状态管理插件",\r
    priority: 100,\r
\r
    hooks: {\r
      onMount: (context) => {\r
        // 初始化状态\r
        context.setState({\r
          cart: false,\r
          wishlist: false,\r
        });\r
      },\r
\r
      // onCartChange / onWishlistChange 是旧版死钩子（无人触发）；\r
      // 改为订阅 onStateChange 的状态差分，状态变化时回调外部配置。\r
      onStateChange: (context, prev, next) => {\r
        if (prev.cart !== next.cart) {\r
          onCartChange?.(context.cardId, Boolean(next.cart));\r
        }\r
        if (prev.wishlist !== next.wishlist) {\r
          onWishlistChange?.(context.cardId, Boolean(next.wishlist));\r
        }\r
      },\r
    },\r
\r
    config,\r
  };\r
\r
  return plugin;\r
};\r
`,Mu=`/**\r
 * UserTagPlugin - 用户标签覆盖展示\r
 */\r
import type { CardPlugin, PluginCreator } from "../../components/CardPlugin/plugins/types";\r
import React from "react";\r
\r
export interface UserTag {\r
  label: string;\r
  color?: string;\r
}\r
\r
export interface UserTagPluginConfig {\r
  tags?: UserTag[];\r
  maxTags?: number;\r
}\r
\r
/**\r
 * 两种形态都收：\`["88VIP"]\` 与 \`[{ label: "88VIP", color: "#b4553c" }]\`。\r
 *\r
 * \`ProductData.tags\` 的类型是 \`string[]\`，而本插件的配置是 \`UserTag[]\` ——\r
 * 不做归一化时，直接把商品数据里的 tags 交给它，渲染出来是一排**空标签**\r
 * （\`t.label\` 是 undefined），看起来像「插件没生效」。\r
 */\r
function normalizeTags(list: unknown): UserTag[] {\r
  if (!Array.isArray(list)) return [];\r
  return list\r
    .map((t) =>\r
      typeof t === "string"\r
        ? { label: t }\r
        : t && typeof t === "object" && "label" in t\r
          ? (t as UserTag)\r
          : null\r
    )\r
    .filter((t): t is UserTag => Boolean(t?.label));\r
}\r
\r
/**\r
 * 标签底色是数据侧给的（\`{ label, color }\`），字色只能按底色亮度选：\r
 * 统一写死 \`#222\` 时，深色标签（会员红、橄榄绿）上的深字只有 3.1:1。\r
 */\r
function readableOn(bg: string): string {\r
  const m = /^#?([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(bg.trim());\r
  if (!m) return "#222";\r
  let hex = m[1];\r
  if (hex.length === 3) hex = hex.split("").map((c) => c + c).join("");\r
  const lin = (v: number) => (v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4);\r
  const [r, g, b] = [0, 2, 4].map((i) => lin(parseInt(hex.slice(i, i + 2), 16) / 255));\r
  const L = 0.2126 * r + 0.7152 * g + 0.0722 * b;\r
  const onWhite = 1.05 / (L + 0.05);\r
  const onInk = (L + 0.05) / (0.0144 + 0.05);\r
  return onWhite >= onInk ? "#fff" : "#222";\r
}\r
\r
// 工厂返回 T 收敛为 unknown：T 仅经 data 透传，自定义 data 形态的调用方请显式写泛型参数。\r
export const createUserTagPlugin: PluginCreator<unknown, UserTagPluginConfig> = (\r
  config = {}\r
) => {\r
  const { tags = [], maxTags = 3 } = config;\r
\r
  const plugin: CardPlugin = {\r
    name: "UserTagPlugin",\r
    version: "1.0.0",\r
    description: "在图片区域叠加用户标签",\r
    priority: 35,\r
    hooks: {\r
      renderOverlay: (context) => {\r
        // 配置优先、data 兜底：与 BadgePlugin 一致（显式配置 > 数据默认值）。\r
        // 反过来写的话，示例页里传的 tags 会被商品数据顶掉，页面上永远看不到自己配的标签。\r
        const configured = normalizeTags(tags);\r
        const list = (\r
          configured.length\r
            ? configured\r
            : normalizeTags((context.data as { tags?: string[] } | undefined)?.tags)\r
        ).slice(0, maxTags);\r
        if (!list.length) return null;\r
\r
        return (\r
          <div style={{ position: "absolute", bottom: 8, right: 8, display: "flex", gap: 6, flexWrap: "wrap", zIndex: 9 }}>\r
            {list.map((t) => (\r
              <span\r
                key={t.label}\r
                style={{\r
                  padding: "2px 8px",\r
                  borderRadius: 12,\r
                  fontSize: 12,\r
                  fontWeight: 700,\r
                  background: t.color || "#eee",\r
                  color: readableOn(t.color || "#eee"),\r
                }}\r
              >\r
                {t.label}\r
              </span>\r
            ))}\r
          </div>\r
        );\r
      },\r
    },\r
    config,\r
  };\r
\r
  return plugin;\r
};`,Lu=`import type { CardPlugin, PluginCreator } from "../../components/CardPlugin/plugins/types";\r
\r
import React from "react";\r
\r
export interface VideoPluginConfig {\r
  src?: string;\r
  autoplay?: boolean;\r
  muted?: boolean;\r
  loop?: boolean;\r
  controls?: boolean;\r
  poster?: string;\r
  playOnHover?: boolean;\r
  style?: React.CSSProperties;\r
  // 渲染位置控制（供 withPlugins 读取）\r
  headerPosition?: "before" | "after";\r
  order?: number;\r
}\r
\r
// 工厂返回 T 收敛为 unknown：T 仅经 data 透传，自定义 data 形态的调用方请显式写泛型参数。
export const createVideoPlugin: PluginCreator<unknown, VideoPluginConfig> = (\r
  config = {}\r
) => {\r
  const {\r
    autoplay = false,\r
    muted = true,\r
    loop = false,\r
    controls = true,\r
    poster,\r
    playOnHover = false,\r
    style = {},\r
  } = config;\r
\r
  const plugin: CardPlugin = {\r
    name: "VideoPlugin",\r
    version: "1.0.0",\r
    description: "视频展示插件（头部区域）",\r
    priority: 40,\r
    hooks: {\r
      renderHeader: (context) => {\r
        // 若画廊已声明处理视频，则避免重复渲染\r
        if (context.bus?.getData?.("media.handledByGallery")) {\r
          return null;\r
        }\r
        const data = context.data as { video?: string; poster?: string } | undefined;\r
        const videoSrc = data?.video || config.src;\r
        if (!videoSrc) return null;\r
\r
        return (\r
          <div style={{ width: "100%", aspectRatio: "16 / 9", overflow: "hidden", borderRadius: "8px 8px 0 0", background: "#000" }}>\r
            <video\r
              autoPlay={autoplay}\r
              muted={muted}\r
              loop={loop}\r
              controls={controls}\r
              poster={poster || data?.poster}\r
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", ...style }}\r
            >\r
              <source src={videoSrc} />\r
            </video>\r
          </div>\r
        );\r
      },\r
      onHover: (context, isHovered) => {\r
        if (!playOnHover) return;\r
        // 若视频由画廊处理，跳过悬停控制，避免获取错误元素\r
        if (context.bus?.getData?.("media.handledByGallery")) return;\r
        const container = context.getContainer();\r
        const video = container?.querySelector("video");\r
        if (video) {\r
          // eslint-disable-next-line\r
          isHovered ? video.play?.() : video.pause?.();\r
        }\r
      },\r
    },\r
    config,\r
  };\r
\r
  return plugin;\r
};`,md={media:"媒体",buy:"交易",display:"展示",interaction:"交互",infra:"基础设施"},rn=["media","buy","display","interaction","infra"],on=Object.assign({"/src/custom-plugins/A11yPlugin/doc.json":at,"/src/custom-plugins/ActionsPlugin/doc.json":et,"/src/custom-plugins/AnalyticsPlugin/doc.json":it,"/src/custom-plugins/AnimationPlugin/doc.json":Xn,"/src/custom-plugins/BadgePlugin/doc.json":Vn,"/src/custom-plugins/ComparePricePlugin/doc.json":An,"/src/custom-plugins/CountdownPlugin/doc.json":qn,"/src/custom-plugins/CouponPlugin/doc.json":Dn,"/src/custom-plugins/CouponRecommendPlugin/doc.json":Mn,"/src/custom-plugins/GalleryPlugin/doc.json":In,"/src/custom-plugins/HoverPlugin/doc.json":nt,"/src/custom-plugins/ImagePlugin/doc.json":kn,"/src/custom-plugins/InventoryPlugin/doc.json":zn,"/src/custom-plugins/OrderSummaryPlugin/doc.json":Un,"/src/custom-plugins/PriceCalculatorPlugin/doc.json":Nn,"/src/custom-plugins/QuantityPlugin/doc.json":Tn,"/src/custom-plugins/ResponsivePlugin/doc.json":ct,"/src/custom-plugins/ReviewPlugin/doc.json":Qn,"/src/custom-plugins/SKUPlugin/doc.json":Bn,"/src/custom-plugins/StatePlugin/doc.json":rt,"/src/custom-plugins/UserTagPlugin/doc.json":Hn,"/src/custom-plugins/VideoPlugin/doc.json":jn}),Uu=Object.assign({}),Fu=Object.assign({"/src/custom-plugins/A11yPlugin/create.tsx":bu,"/src/custom-plugins/ActionsPlugin/create.tsx":xu,"/src/custom-plugins/AnalyticsPlugin/create.tsx":vu,"/src/custom-plugins/AnimationPlugin/create.tsx":Cu,"/src/custom-plugins/BadgePlugin/create.tsx":Pu,"/src/custom-plugins/ComparePricePlugin/create.tsx":wu,"/src/custom-plugins/CountdownPlugin/create.tsx":ku,"/src/custom-plugins/CouponPlugin/create.tsx":Su,"/src/custom-plugins/CouponRecommendPlugin/create.tsx":ju,"/src/custom-plugins/GalleryPlugin/create.tsx":$u,"/src/custom-plugins/HoverPlugin/create.tsx":Iu,"/src/custom-plugins/ImagePlugin/create.tsx":Ru,"/src/custom-plugins/InventoryPlugin/create.tsx":Bu,"/src/custom-plugins/OrderSummaryPlugin/create.tsx":Tu,"/src/custom-plugins/PriceCalculatorPlugin/create.tsx":Ou,"/src/custom-plugins/QuantityPlugin/create.tsx":Nu,"/src/custom-plugins/ResponsivePlugin/create.tsx":Au,"/src/custom-plugins/ReviewPlugin/create.tsx":_u,"/src/custom-plugins/SKUPlugin/create.tsx":Du,"/src/custom-plugins/StatePlugin/create.tsx":Eu,"/src/custom-plugins/UserTagPlugin/create.tsx":Mu,"/src/custom-plugins/VideoPlugin/create.tsx":Lu}),sn={...Uu,...Fu},mt=e=>e.replace(/^.*\/custom-plugins\//,"").replace(/\/.*$/,"");function zu(e){const n=Object.keys(sn).find(i=>mt(i)===e),o=n?sn[n]:"",r=/priority:\s*(\d+)/.exec(o);return r?Number(r[1]):0}function Ku(e){const n=Object.keys(on).find(o=>mt(o)===e);return n?on[n]:{name:e,description:"（缺少 doc.json）"}}const an=[j({label:"主图",width:600,height:450,hue:96}),j({label:"细节",width:600,height:450,hue:112}),j({label:"场景",width:600,height:450,hue:84})],ln=[{code:"NEW30",discount:30,minAmount:199,expiry:new Date(Date.now()+7*864e5)},{code:"VIP50",discount:50,minAmount:399,expiry:new Date(Date.now()+30*864e5)},{code:"FREESHIP",discount:12,minAmount:99}],Vu=[{dir:"ImagePlugin",group:"media",make:()=>Sn({alt:w.title})},{dir:"VideoPlugin",group:"media",make:()=>$n({src:"",poster:an[2],muted:!0,controls:!0})},{dir:"GalleryPlugin",group:"media",make:()=>Rn({images:an,showThumbnails:!0,showIndicators:!0})},{dir:"SKUPlugin",group:"buy",make:()=>je({attributes:w.attributes,variants:Se(w)})},{dir:"QuantityPlugin",group:"buy",make:()=>On({min:1,step:1,useVariantStock:!0})},{dir:"PriceCalculatorPlugin",group:"buy",make:()=>$e({showDiscount:!0,showSavings:!0,showTotalPrice:!0,showSavingsBadgeInPriceArea:!0})},{dir:"ComparePricePlugin",group:"buy",make:()=>_n({competitors:[{name:"线下专柜",price:399},{name:"某电商",price:288},{name:"官方旗舰",price:319}],showLowestPrice:!0,highlightLowerThanOurPrice:!0,sortBy:"price",sortOrder:"asc"})},{dir:"CouponPlugin",group:"buy",make:()=>En({coupons:ln})},{dir:"CouponRecommendPlugin",group:"buy",make:()=>Ln({coupons:ln,autoApplyBest:!0})},{dir:"OrderSummaryPlugin",group:"buy",make:()=>Fn({showBreakdown:!0,showShipping:!0,shippingFee:12,taxRate:.06})},{dir:"InventoryPlugin",group:"buy",make:()=>Kn({lowStockThreshold:10})},{dir:"BadgePlugin",group:"display",make:()=>Wn({text:"甄选",type:"premium",position:"top-left"})},{dir:"UserTagPlugin",group:"display",make:()=>Gn({tags:[{label:"88VIP",color:"#b4553c"},{label:"回购 3 次",color:"#6b7245"}],maxTags:2})},{dir:"CountdownPlugin",group:"display",make:()=>Yn({durationMs:3*36e5,prefix:"⏰"})},{dir:"ReviewPlugin",group:"display",make:()=>Jn({showRating:!0,showReviewCount:!0})},{dir:"AnimationPlugin",group:"display",make:()=>Zn()},{dir:"ActionsPlugin",group:"interaction",make:()=>ee({showCartButton:!0,showWishlistButton:!0})},{dir:"HoverPlugin",group:"interaction",make:()=>tt({enableScale:!0,enableShadow:!0})},{dir:"StatePlugin",group:"infra",make:()=>ot({enableCart:!0,enableWishlist:!0})},{dir:"AnalyticsPlugin",group:"infra",make:()=>st({transport:()=>{},minExposureMs:600})},{dir:"A11yPlugin",group:"infra",make:()=>lt({keyboardNavigation:!0,announceOnFocus:!0})},{dir:"ResponsivePlugin",group:"infra",make:()=>ut()}],se=Vu.map(e=>{const n=Ku(e.dir);return{dir:e.dir,factory:`create${e.dir}`,group:e.group,priority:zu(e.dir),summary:n.description,doc:n,make:e.make}}).sort((e,n)=>rn.indexOf(e.group)-rn.indexOf(n.group)||n.priority-e.priority),hd=new Map(se.map(e=>[e.dir,e])),fd=[{a:"ImagePlugin",b:"GalleryPlugin",why:"两者都渲染主媒体区，Gallery 会盖掉 Image（图还在，但你看不到 Image 的兜底逻辑）"},{a:"BadgePlugin",b:"CountdownPlugin",why:"两者都画在 overlay 的 top-right、偏移都是 8px、zIndex 都是 10 —— 完全重叠。改 position 才能共存"},{a:"AnimationPlugin",b:"HoverPlugin",why:"都在写容器的 transform：入场动画命令式写内联样式，悬停靠 transformProps 注入，后写者覆盖先写者"},{a:"QuantityPlugin",b:"SKUPlugin",why:"不算错，但数量上限依赖规格库存：不同时选规格，max 会退回商品级库存，看起来像「上限没生效」"}],yd=["ImagePlugin","BadgePlugin","PriceCalculatorPlugin","ActionsPlugin","HoverPlugin"],Wu=/\{\{\s*([\w-]+)\s*\}\}/g;function cn(e,n){return e.replace(Wu,(o,r)=>r in n?String(n[r]):o)}function Hu(e,n){const o=e.plugs.filter(p=>!p.local),r=e.plugs.filter(p=>p.local),i=o.map(p=>p.fn).sort(),l=i.length>3,a=i.length?l?`import {
${i.map(p=>`  ${p},`).join(`
`)}
} from "vane-card/custom-plugins";`:`import { ${i.join(", ")} } from "vane-card/custom-plugins";`:"// 这一页只用 Core props，不需要任何插件",s=r.length?`
// 页内局部插件（本文件内定义，不在 vane-card/custom-plugins 里）：
//   ${r.map(p=>`${p.fn}()`).join("、")}`:"",c=e.plugs.map(p=>`  ${p.fn}(${p.cfg?`{ ${cn(p.cfg,n)} }`:""}),${p.local?"  // 局部插件":""}`).join(`
`),u=e.props.filter(p=>typeof p=="string"||!p.when||p.when(n)).map(p=>`      ${cn(typeof p=="string"?p:p.text,n)}`).join(`
`),d=e.plugs.length?`const Card = withPlugins(CardCore, {
  plugins: [
${c.split(`
`).map(p=>`  ${p}`).join(`
`)}
  ],
});`:"const Card = CardCore;";return`// ${e.title} · 最小装配（照抄即可跑）
import { CardCore, withPlugins } from "vane-card";
${a}${s}
import type { ProductData } from "vane-card";

${d}

export function Demo({ product }: { product: ProductData }) {
  return (
    <Card
      cardId="${e.slug}"
      data={product}
${u}
    >
${e.children??"      {/* 卡片内容来自插件；没装插件时这里就是全部内容 */}"}
    </Card>
  );
}
`}function Gu(e){return e.dataCode?e.dataCode:`// 插件只读这些字段（缺哪个就只是对应区域不渲染，不抛错）
{
  title: "经典圆领 T 恤 · 260g 长绒棉",
  subtitle: "新疆长绒棉 · 双纱领口 · 三色可选",
  price: 299,
  oldPrice: 399,
  image: "data:image/svg+xml,…",
  inventory: 12,
  rating: 4.6,
  ratingCount: 1284,
  tags: ["纯棉", "夏季", "基础款"],
  variants: [
    { sku: "TS-RED-M", attrs: { 颜色: "赤陶", 尺码: "M" }, price: 319, stock: 3 },
    { sku: "TS-OLIVE-L", attrs: { 颜色: "橄榄", 尺码: "L" }, price: 299, stock: 0 },
  ],
}`}function qu({controls:e,cfg:n,onChange:o}){return t.jsx("div",{className:"ctl-bar",children:e.filter(r=>!r.when||r.when(n)).map(r=>{const i=n[r.key];return t.jsxs("label",{className:"ctl",title:r.hint,"data-ctl":r.key,"data-kind":r.kind,children:[t.jsxs("span",{className:"ctl-label",children:[r.label,t.jsx("b",{className:"ctl-val",children:r.kind==="switch"?i?"开":"关":String(i)})]}),r.kind==="switch"?t.jsx("button",{type:"button",className:`ctl-switch${i?" is-on":""}`,onClick:()=>o(r.key,!i),"aria-pressed":!!i,children:t.jsx("i",{})}):r.kind==="select"?t.jsx("select",{className:"ctl-select",value:String(i),onChange:l=>o(r.key,l.target.value),children:(r.options??[]).map(l=>t.jsx("option",{value:l.value,children:l.label},l.value))}):t.jsx("input",{className:"ctl-range",type:"range",min:r.min??0,max:r.max??100,step:r.step??1,value:Number(i),onChange:l=>o(r.key,Number(l.target.value))})]},r.key)})})}function Yu({lines:e,title:n="事件日志",empty:o="还没触发 —— 试着滚动、点一张卡",right:r}){return t.jsxs("div",{className:"log",children:[t.jsxs("div",{className:"log-head",children:[t.jsx("span",{children:n}),t.jsxs("span",{className:"log-right",children:[r,t.jsx("b",{children:e.length})]})]}),e.length===0?t.jsx("p",{className:"log-empty",children:o}):t.jsx("ol",{className:"log-list",children:e.map(i=>t.jsxs("li",{className:`log-line is-${i.kind}`,children:[t.jsx("time",{children:i.at}),t.jsx("span",{children:i.text})]},i.id))})]})}const Qu=/^(createImagePlugin|createGalleryPlugin|createVideoPlugin)$/;function Ju({entry:e,order:n}){var y;const{meta:o,Stage:r}=e,[i,l]=b.useState(()=>Ke(o)),[a,s]=b.useState([]),[c,u]=b.useState("minimal"),d=o.group!=="compound"&&!o.plugs.some(m=>Qu.test(m.fn)),p=b.useCallback((m,x="event")=>{const C=new Date().toLocaleTimeString("zh-CN",{hour12:!1});s(v=>[{id:v.length+1,at:C,text:m,kind:x},...v].slice(0,60))},[]),h=b.useCallback((m,x)=>{l(C=>({...C,[m]:x}))},[]),g=b.useMemo(()=>Hu(o,i),[o,i]),f=b.useMemo(()=>Gu(o),[o]);return t.jsxs("section",{className:"demo","data-demo":o.slug,children:[t.jsxs("header",{className:"demo-head",children:[t.jsxs("div",{className:"demo-folio",children:[t.jsx("span",{className:"demo-no",children:String(n).padStart(2,"0")}),t.jsx("em",{children:"plate"})]}),t.jsxs("div",{children:[t.jsxs("div",{className:"demo-title-row",children:[t.jsx("h2",{children:o.title}),t.jsx("span",{className:"demo-group",children:be[o.group].label}),o.plugin?t.jsx("code",{className:"demo-plugin",children:o.plugin}):null]}),t.jsx("p",{className:"demo-intro",children:o.intro}),t.jsxs("p",{className:"demo-why",children:[t.jsx("b",{children:"什么时候用"}),o.why]})]}),t.jsxs("div",{className:"demo-meta",children:[t.jsxs("div",{className:"demo-meta-row",children:[t.jsx("span",{children:"route"}),t.jsxs("b",{children:["#/demos/",o.slug]})]}),t.jsxs("div",{className:"demo-meta-row",children:[t.jsx("span",{children:"group"}),t.jsx("b",{children:be[o.group].label})]}),t.jsxs("div",{className:"demo-meta-row",children:[t.jsx("span",{children:"plugs"}),t.jsx("b",{children:o.plugs.length?`${o.plugs.length} installed`:"core only"})]})]})]}),(y=o.controls)!=null&&y.length?t.jsxs("div",{className:"demo-controls",children:[t.jsx(qu,{controls:o.controls,cfg:i,onChange:h}),t.jsx("button",{type:"button",className:"demo-reset",onClick:()=>{l(Ke(o)),s([])},children:"重置"})]}):null,t.jsxs("div",{className:"demo-body",children:[t.jsxs("figure",{className:"plate",children:[t.jsxs("figcaption",{className:"plate-cap",children:[t.jsx("b",{children:"stage"}),t.jsxs("span",{children:[o.tone==="light"?"light surface":"live render"," · ",o.stageWidth??360,"px"]}),t.jsx("em",{children:"live"})]}),t.jsx("div",{className:"plate-ruler","aria-hidden":!0}),t.jsx("div",{className:`plate-body demo-stage${o.tone==="light"?" tone-light":""}`,style:{"--card-w":`${o.stageWidth??360}px`},children:t.jsx("div",{className:`demo-card${d?" is-no-media":""}`,"data-card-stage":!0,children:t.jsx(Ar,{cfg:i,children:t.jsx(r,{cfg:i,log:p,setCfg:h})})})})]}),t.jsxs("aside",{className:"demo-side",children:[t.jsx("div",{className:"demo-plugs",children:o.plugs.length===0?t.jsx("span",{className:"demo-plug is-core",children:"仅 Core props"}):o.plugs.map(m=>t.jsx("span",{className:`demo-plug${m.local?" is-local":""}`,children:m.fn.replace(/^create|Plugin$/g,"")},m.fn))}),t.jsx("ul",{className:"demo-why-list",children:o.plugs.map(m=>t.jsxs("li",{children:[t.jsx("code",{children:m.fn}),t.jsx("span",{children:m.why})]},m.fn))}),o.note?t.jsxs("p",{className:"demo-note",children:["⚠ ",o.note]}):null,t.jsx(Yu,{lines:a,empty:o.plugs.length>0?"还没触发 —— 拖上面的控件，或悬停 / 点卡片 / 选规格":"这一页没有事件类行为，日志留白"})]})]}),t.jsxs("div",{className:"demo-code",children:[t.jsxs("div",{className:"demo-switch",role:"tablist",children:[t.jsx("button",{type:"button",role:"tab","aria-selected":c==="minimal",className:c==="minimal"?"is-active":"",onClick:()=>u("minimal"),children:"最小装配"}),t.jsx("button",{type:"button",role:"tab","aria-selected":c==="data",className:c==="data"?"is-active":"",onClick:()=>u("data"),children:"数据对象"})]}),t.jsx(uu,{code:c==="minimal"?g:f,title:c==="minimal"?`${o.slug}.minimal.tsx`:`${o.slug}.data.ts`,collapseAfter:0,maxHeight:430},c)]}),t.jsx(yu,{source:g,plugins:se})]})}const Xu=b.lazy(()=>le(()=>import("./HomePage-08ohE39Q.js"),__vite__mapDeps([0,1,2,3]),import.meta.url).then(e=>({default:e.HomePage}))),Zu=b.lazy(()=>le(()=>import("./PluginsPage-vy_dzWrE.js"),__vite__mapDeps([4,1]),import.meta.url).then(e=>({default:e.PluginsPage}))),ed=b.lazy(()=>le(()=>import("./ScenariosPage-vebfdlGd.js"),__vite__mapDeps([5,1,2]),import.meta.url).then(e=>({default:e.ScenariosPage}))),nd=b.lazy(()=>le(()=>import("./LayoutsPage-CAO52srq.js"),__vite__mapDeps([6,1,3]),import.meta.url).then(e=>({default:e.LayoutsPage}))),td={pkg:"vane-card",brand:"C",subtitle:"卡片排版台 / plugin index",nav:[{to:"/",label:"总览",hint:"overview"},{to:"/plugins",label:"插件工坊",hint:`${se.length} plugins`},{to:"/scenarios",label:"场景示例",hint:"16 plates"},{to:"/layouts",label:"布局专区",hint:"9 layouts"}],routes:[{path:"/",element:t.jsx(Xu,{})},{path:"/plugins",element:t.jsx(Zu,{})},{path:"/scenarios",element:t.jsx(ed,{})},{path:"/layouts",element:t.jsx(nd,{})}],crumb:e=>e.startsWith("/plugins")?"workshop · 插件工坊":e.startsWith("/scenarios")?"plates · 场景示例":e.startsWith("/layouts")?"layouts · 布局专区":"index · 总览",demos:{label:"逐项示例",groups:iu.map(e=>({key:e,label:be[e].label})),entries:Ie,detail:(e,n)=>t.jsx(Ju,{entry:e,order:n})},footer:[`${se.length} PLUGINS · 9 LAYOUTS · 10 PLATES`,"15 HOOKS · D2-A / D4-B"]};function rd(){return t.jsx(Rr,{config:td})}Pt(document.getElementById("root")).render(t.jsx(R.StrictMode,{children:t.jsx(rd,{})}));export{sd as A,ad as B,uu as C,Ie as D,ld as E,Rn as F,rn as G,cd as H,ud as I,dd as J,ye as L,ie as M,se as P,w as T,gd as a,iu as b,Sn as c,Wn as d,$e as e,tt as f,ee as g,yd as h,fd as i,hd as j,md as k,je as l,On as m,Kn as n,Yn as o,Ln as p,Fn as q,En as r,Se as s,Dr as t,_n as u,$n as v,uc as w,pd as x,Jn as y,ut as z};
