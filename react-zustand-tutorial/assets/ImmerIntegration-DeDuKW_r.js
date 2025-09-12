import{r as k,j as e}from"./index-BWM6UHr8.js";import{d as Be}from"./middleware-CPUTVaT6.js";import{c as Le,C as Me}from"./ComponentTemplate-ClBHhBQ8.js";var Re=Symbol.for("immer-nothing"),ke=Symbol.for("immer-draftable"),_=Symbol.for("immer-state");function $(t,...n){throw new Error(`[Immer] minified error nr: ${t}. Full error at: https://bit.ly/3cXEKWf`)}var W=Object.getPrototypeOf;function X(t){return!!t&&!!t[_]}function q(t){var n;return t?$e(t)||Array.isArray(t)||!!t[ke]||!!((n=t.constructor)!=null&&n[ke])||te(t)||me(t):!1}var qe=Object.prototype.constructor.toString();function $e(t){if(!t||typeof t!="object")return!1;const n=W(t);if(n===null)return!0;const s=Object.hasOwnProperty.call(n,"constructor")&&n.constructor;return s===Object?!0:typeof s=="function"&&Function.toString.call(s)===qe}function ae(t,n){ce(t)===0?Reflect.ownKeys(t).forEach(s=>{n(s,t[s],t)}):t.forEach((s,r)=>n(r,s,t))}function ce(t){const n=t[_];return n?n.type_:Array.isArray(t)?1:te(t)?2:me(t)?3:0}function je(t,n){return ce(t)===2?t.has(n):Object.prototype.hasOwnProperty.call(t,n)}function Fe(t,n,s){const r=ce(t);r===2?t.set(n,s):r===3?t.add(s):t[n]=s}function Ke(t,n){return t===n?t!==0||1/t===1/n:t!==t&&n!==n}function te(t){return t instanceof Map}function me(t){return t instanceof Set}function M(t){return t.copy_||t.base_}function ve(t,n){if(te(t))return new Map(t);if(me(t))return new Set(t);if(Array.isArray(t))return Array.prototype.slice.call(t);const s=$e(t);if(n===!0||n==="class_only"&&!s){const r=Object.getOwnPropertyDescriptors(t);delete r[_];let o=Reflect.ownKeys(r);for(let d=0;d<o.length;d++){const i=o[d],l=r[i];l.writable===!1&&(l.writable=!0,l.configurable=!0),(l.get||l.set)&&(r[i]={configurable:!0,writable:!0,enumerable:l.enumerable,value:t[i]})}return Object.create(W(t),r)}else{const r=W(t);if(r!==null&&s)return{...t};const o=Object.create(r);return Object.assign(o,t)}}function Ie(t,n=!1){return pe(t)||X(t)||!q(t)||(ce(t)>1&&Object.defineProperties(t,{set:{value:ie},add:{value:ie},clear:{value:ie},delete:{value:ie}}),Object.freeze(t),n&&Object.values(t).forEach(s=>Ie(s,!0))),t}function ie(){$(2)}function pe(t){return Object.isFrozen(t)}var Ge={};function K(t){const n=Ge[t];return n||$(0,t),n}var V;function Ee(){return V}function Je(t,n){return{drafts_:[],parent_:t,immer_:n,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function Ae(t,n){n&&(K("Patches"),t.patches_=[],t.inversePatches_=[],t.patchListener_=n)}function ye(t){Ne(t),t.drafts_.forEach(Ze),t.drafts_=null}function Ne(t){t===V&&(V=t.parent_)}function _e(t){return V=Je(V,t)}function Ze(t){const n=t[_];n.type_===0||n.type_===1?n.revoke_():n.revoked_=!0}function Ce(t,n){n.unfinalizedDrafts_=n.drafts_.length;const s=n.drafts_[0];return t!==void 0&&t!==s?(s[_].modified_&&(ye(n),$(4)),q(t)&&(t=de(n,t),n.parent_||le(n,t)),n.patches_&&K("Patches").generateReplacementPatches_(s[_].base_,t,n.patches_,n.inversePatches_)):t=de(n,s,[]),ye(n),n.patches_&&n.patchListener_(n.patches_,n.inversePatches_),t!==Re?t:void 0}function de(t,n,s){if(pe(n))return n;const r=n[_];if(!r)return ae(n,(o,d)=>De(t,r,n,o,d,s)),n;if(r.scope_!==t)return n;if(!r.modified_)return le(t,r.base_,!0),r.base_;if(!r.finalized_){r.finalized_=!0,r.scope_.unfinalizedDrafts_--;const o=r.copy_;let d=o,i=!1;r.type_===3&&(d=new Set(o),o.clear(),i=!0),ae(d,(l,u)=>De(t,r,o,l,u,s,i)),le(t,o,!1),s&&t.patches_&&K("Patches").generatePatches_(r,s,t.patches_,t.inversePatches_)}return r.copy_}function De(t,n,s,r,o,d,i){if(X(o)){const l=d&&n&&n.type_!==3&&!je(n.assigned_,r)?d.concat(r):void 0,u=de(t,o,l);if(Fe(s,r,u),X(u))t.canAutoFreeze_=!1;else return}else i&&s.add(o);if(q(o)&&!pe(o)){if(!t.immer_.autoFreeze_&&t.unfinalizedDrafts_<1)return;de(t,o),(!n||!n.scope_.parent_)&&typeof r!="symbol"&&(te(s)?s.has(r):Object.prototype.propertyIsEnumerable.call(s,r))&&le(t,o)}}function le(t,n,s=!1){!t.parent_&&t.immer_.autoFreeze_&&t.canAutoFreeze_&&Ie(n,s)}function He(t,n){const s=Array.isArray(t),r={type_:s?1:0,scope_:n?n.scope_:Ee(),modified_:!1,finalized_:!1,assigned_:{},parent_:n,base_:t,draft_:null,copy_:null,revoke_:null,isManual_:!1};let o=r,d=Pe;s&&(o=[r],d=ee);const{revoke:i,proxy:l}=Proxy.revocable(o,d);return r.draft_=l,r.revoke_=i,l}var Pe={get(t,n){if(n===_)return t;const s=M(t);if(!je(s,n))return We(t,s,n);const r=s[n];return t.finalized_||!q(r)?r:r===he(t.base_,n)?(xe(t),t.copy_[n]=Te(r,t)):r},has(t,n){return n in M(t)},ownKeys(t){return Reflect.ownKeys(M(t))},set(t,n,s){const r=Oe(M(t),n);if(r!=null&&r.set)return r.set.call(t.draft_,s),!0;if(!t.modified_){const o=he(M(t),n),d=o==null?void 0:o[_];if(d&&d.base_===s)return t.copy_[n]=s,t.assigned_[n]=!1,!0;if(Ke(s,o)&&(s!==void 0||je(t.base_,n)))return!0;xe(t),we(t)}return t.copy_[n]===s&&(s!==void 0||n in t.copy_)||Number.isNaN(s)&&Number.isNaN(t.copy_[n])||(t.copy_[n]=s,t.assigned_[n]=!0),!0},deleteProperty(t,n){return he(t.base_,n)!==void 0||n in t.base_?(t.assigned_[n]=!1,xe(t),we(t)):delete t.assigned_[n],t.copy_&&delete t.copy_[n],!0},getOwnPropertyDescriptor(t,n){const s=M(t),r=Reflect.getOwnPropertyDescriptor(s,n);return r&&{writable:!0,configurable:t.type_!==1||n!=="length",enumerable:r.enumerable,value:s[n]}},defineProperty(){$(11)},getPrototypeOf(t){return W(t.base_)},setPrototypeOf(){$(12)}},ee={};ae(Pe,(t,n)=>{ee[t]=function(){return arguments[0]=arguments[0][0],n.apply(this,arguments)}});ee.deleteProperty=function(t,n){return ee.set.call(this,t,n,void 0)};ee.set=function(t,n,s){return Pe.set.call(this,t[0],n,s,t[0])};function he(t,n){const s=t[_];return(s?M(s):t)[n]}function We(t,n,s){var o;const r=Oe(n,s);return r?"value"in r?r.value:(o=r.get)==null?void 0:o.call(t.draft_):void 0}function Oe(t,n){if(!(n in t))return;let s=W(t);for(;s;){const r=Object.getOwnPropertyDescriptor(s,n);if(r)return r;s=W(s)}}function we(t){t.modified_||(t.modified_=!0,t.parent_&&we(t.parent_))}function xe(t){t.copy_||(t.copy_=ve(t.base_,t.scope_.immer_.useStrictShallowCopy_))}var Xe=class{constructor(t){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(n,s,r)=>{if(typeof n=="function"&&typeof s!="function"){const d=s;s=n;const i=this;return function(u=d,...D){return i.produce(u,C=>s.call(this,C,...D))}}typeof s!="function"&&$(6),r!==void 0&&typeof r!="function"&&$(7);let o;if(q(n)){const d=_e(this),i=Te(n,void 0);let l=!0;try{o=s(i),l=!1}finally{l?ye(d):Ne(d)}return Ae(d,r),Ce(o,d)}else if(!n||typeof n!="object"){if(o=s(n),o===void 0&&(o=n),o===Re&&(o=void 0),this.autoFreeze_&&Ie(o,!0),r){const d=[],i=[];K("Patches").generateReplacementPatches_(n,o,d,i),r(d,i)}return o}else $(1,n)},this.produceWithPatches=(n,s)=>{if(typeof n=="function")return(i,...l)=>this.produceWithPatches(i,u=>n(u,...l));let r,o;return[this.produce(n,s,(i,l)=>{r=i,o=l}),r,o]},typeof(t==null?void 0:t.autoFreeze)=="boolean"&&this.setAutoFreeze(t.autoFreeze),typeof(t==null?void 0:t.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(t.useStrictShallowCopy)}createDraft(t){q(t)||$(8),X(t)&&(t=Qe(t));const n=_e(this),s=Te(t,void 0);return s[_].isManual_=!0,Ne(n),s}finishDraft(t,n){const s=t&&t[_];(!s||!s.isManual_)&&$(9);const{scope_:r}=s;return Ae(r,n),Ce(void 0,r)}setAutoFreeze(t){this.autoFreeze_=t}setUseStrictShallowCopy(t){this.useStrictShallowCopy_=t}applyPatches(t,n){let s;for(s=n.length-1;s>=0;s--){const o=n[s];if(o.path.length===0&&o.op==="replace"){t=o.value;break}}s>-1&&(n=n.slice(s+1));const r=K("Patches").applyPatches_;return X(t)?r(t,n):this.produce(t,o=>r(o,n))}};function Te(t,n){const s=te(t)?K("MapSet").proxyMap_(t,n):me(t)?K("MapSet").proxySet_(t,n):He(t,n);return(n?n.scope_:Ee()).drafts_.push(s),s}function Qe(t){return X(t)||$(10,t),ze(t)}function ze(t){if(!q(t)||pe(t))return t;const n=t[_];let s;if(n){if(!n.modified_)return n.base_;n.finalized_=!0,s=ve(t,n.scope_.immer_.useStrictShallowCopy_)}else s=ve(t,!0);return ae(s,(r,o)=>{Fe(s,r,ze(o))}),n&&(n.finalized_=!1),s}var Ye=new Xe,Ve=Ye.produce;const et=t=>(n,s,r)=>(r.setState=(o,d,...i)=>{const l=typeof o=="function"?Ve(o):o;return n(l,d,...i)},t(r.setState,s,r)),tt=et,Ue=()=>`${Date.now()}-${Math.random().toString(36).substr(2,9)}`,Se=Le()(Be(tt(t=>({user:null,projects:[],currentProject:null,ui:{sidebarOpen:!1,theme:"light",loading:!1,error:null},filters:{todoStatus:"all",priority:"all",search:""},setUser:n=>{t(s=>{s.user=n})},updateUser:n=>{t(s=>{s.user&&(n.name&&(s.user.name=n.name),n.email&&(s.user.email=n.email),n.avatar&&(s.user.avatar=n.avatar),n.preferences&&(n.preferences.theme&&(s.user.preferences.theme=n.preferences.theme),n.preferences.language&&(s.user.preferences.language=n.preferences.language),n.preferences.notifications!==void 0&&(s.user.preferences.notifications=n.preferences.notifications)),n.profile&&(n.profile.bio&&(s.user.profile.bio=n.profile.bio),n.profile.location&&(s.user.profile.location=n.profile.location),n.profile.website&&(s.user.profile.website=n.profile.website),n.profile.social&&(n.profile.social.twitter&&(s.user.profile.social.twitter=n.profile.social.twitter),n.profile.social.github&&(s.user.profile.social.github=n.profile.social.github),n.profile.social.linkedin&&(s.user.profile.social.linkedin=n.profile.social.linkedin))))})},addProject:n=>{t(s=>{s.projects.push(n)})},updateProject:(n,s)=>{t(r=>{const o=r.projects.find(d=>d.id===n);o&&(s.name&&(o.name=s.name),s.description&&(o.description=s.description),s.status&&(o.status=s.status),s.members&&(o.members=s.members),s.updatedAt&&(o.updatedAt=s.updatedAt))})},deleteProject:n=>{t(s=>{s.projects=s.projects.filter(r=>r.id!==n),s.currentProject===n&&(s.currentProject=null)})},setCurrentProject:n=>{t(s=>{s.currentProject=n})},addTodo:(n,s)=>{t(r=>{const o=r.projects.find(d=>d.id===n);if(o){const d={...s,id:Ue(),createdAt:new Date,updatedAt:new Date};o.todos.push(d)}})},updateTodo:(n,s,r)=>{t(o=>{const d=o.projects.find(i=>i.id===n);if(d){const i=d.todos.find(l=>l.id===s);i&&(r.text&&(i.text=r.text),r.completed!==void 0&&(i.completed=r.completed),r.priority&&(i.priority=r.priority),r.tags&&(i.tags=r.tags),r.subtasks&&(i.subtasks=r.subtasks),i.updatedAt=new Date)}})},deleteTodo:(n,s)=>{t(r=>{const o=r.projects.find(d=>d.id===n);o&&(o.todos=o.todos.filter(d=>d.id!==s))})},toggleTodo:(n,s)=>{t(r=>{const o=r.projects.find(d=>d.id===n);if(o){const d=o.todos.find(i=>i.id===s);d&&(d.completed=!d.completed,d.updatedAt=new Date)}})},addSubtask:(n,s,r)=>{t(o=>{const d=o.projects.find(i=>i.id===n);if(d){const i=d.todos.find(l=>l.id===s);if(i){const l={...r,id:Ue(),createdAt:new Date};i.subtasks.push(l),i.updatedAt=new Date}}})},updateSubtask:(n,s,r,o)=>{t(d=>{const i=d.projects.find(l=>l.id===n);if(i){const l=i.todos.find(u=>u.id===s);if(l){const u=l.subtasks.find(D=>D.id===r);u&&(o.text&&(u.text=o.text),o.completed!==void 0&&(u.completed=o.completed),l.updatedAt=new Date)}}})},deleteSubtask:(n,s,r)=>{t(o=>{const d=o.projects.find(i=>i.id===n);if(d){const i=d.todos.find(l=>l.id===s);i&&(i.subtasks=i.subtasks.filter(l=>l.id!==r),i.updatedAt=new Date)}})},toggleSubtask:(n,s,r)=>{t(o=>{const d=o.projects.find(i=>i.id===n);if(d){const i=d.todos.find(l=>l.id===s);if(i){const l=i.subtasks.find(u=>u.id===r);l&&(l.completed=!l.completed,i.updatedAt=new Date)}}})},setUIState:n=>{t(s=>{n.sidebarOpen!==void 0&&(s.ui.sidebarOpen=n.sidebarOpen),n.theme&&(s.ui.theme=n.theme),n.loading!==void 0&&(s.ui.loading=n.loading),n.error!==void 0&&(s.ui.error=n.error)})},setFilters:n=>{t(s=>{n.todoStatus&&(s.filters.todoStatus=n.todoStatus),n.priority&&(s.filters.priority=n.priority),n.search!==void 0&&(s.filters.search=n.search)})},resetState:()=>{t(n=>{n.user=null,n.projects=[],n.currentProject=null,n.ui.sidebarOpen=!1,n.ui.theme="light",n.ui.loading=!1,n.ui.error=null,n.filters.todoStatus="all",n.filters.priority="all",n.filters.search=""})},batchUpdateTodos:(n,s)=>{t(r=>{const o=r.projects.find(d=>d.id===n);o&&s.forEach(({todoId:d,updates:i})=>{const l=o.todos.find(u=>u.id===d);l&&(i.text&&(l.text=i.text),i.completed!==void 0&&(l.completed=i.completed),i.priority&&(l.priority=i.priority),i.tags&&(l.tags=i.tags),l.updatedAt=new Date)})})},updateUserProfile:n=>{t(s=>{s.user&&(n.bio&&(s.user.profile.bio=n.bio),n.location&&(s.user.profile.location=n.location),n.website&&(s.user.profile.website=n.website),n.social&&(n.social.twitter&&(s.user.profile.social.twitter=n.social.twitter),n.social.github&&(s.user.profile.social.github=n.social.github),n.social.linkedin&&(s.user.profile.social.linkedin=n.social.linkedin)))})},updateUserPreferences:n=>{t(s=>{s.user&&(n.theme&&(s.user.preferences.theme=n.theme),n.language&&(s.user.preferences.language=n.language),n.notifications!==void 0&&(s.user.preferences.notifications=n.notifications))})},updateUserSocial:n=>{t(s=>{s.user&&(n.twitter&&(s.user.profile.social.twitter=n.twitter),n.github&&(s.user.profile.social.github=n.github),n.linkedin&&(s.user.profile.social.linkedin=n.linkedin))})}})),{name:"immer-store"})),nt=()=>{const{user:t,projects:n,currentProject:s,ui:r,filters:o,setUser:d,updateUser:i,addProject:l,updateProject:u,deleteProject:D,setCurrentProject:C,addTodo:E,updateTodo:ne,deleteTodo:F,toggleTodo:f,addSubtask:z,updateSubtask:b,deleteSubtask:B,toggleSubtask:P,setUIState:y,setFilters:U,resetState:G}=Se(),[v,j]=k.useState(""),[N,J]=k.useState(""),[L,Z]=k.useState(""),[S,H]=k.useState(null),w=n.find(p=>p.id===s),a=((w==null?void 0:w.todos)||[]).filter(p=>{const h=o.todoStatus==="all"||o.todoStatus==="active"&&!p.completed||o.todoStatus==="completed"&&p.completed,I=o.priority==="all"||p.priority===o.priority,g=!o.search||p.text.toLowerCase().includes(o.search.toLowerCase());return h&&I&&g}),c=()=>{if(v.trim()){const p={id:Date.now().toString(),name:v.trim(),description:"",status:"active",todos:[],members:[],createdAt:new Date,updatedAt:new Date};l(p),j("")}},x=()=>{N.trim()&&s&&(E(s,{text:N.trim(),completed:!1,priority:"medium",tags:[],subtasks:[]}),J(""))},A=()=>{L.trim()&&s&&S&&(z(s,S,{text:L.trim(),completed:!1}),Z(""))},R=()=>{t&&i({name:t.name+" (Updated)",preferences:{...t.preferences,theme:t.preferences.theme==="light"?"dark":"light"}})};return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"用户信息 (Immer 更新)"}),e.jsx("div",{className:"space-y-4",children:t?e.jsxs("div",{className:"space-y-2",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"姓名:"})," ",t.name]}),e.jsxs("p",{children:[e.jsx("strong",{children:"邮箱:"})," ",t.email]}),e.jsxs("p",{children:[e.jsx("strong",{children:"主题:"})," ",t.preferences.theme]}),e.jsxs("p",{children:[e.jsx("strong",{children:"语言:"})," ",t.preferences.language]}),e.jsxs("p",{children:[e.jsx("strong",{children:"通知:"})," ",t.preferences.notifications?"开启":"关闭"]}),e.jsx("button",{onClick:R,className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600",children:"更新用户信息"})]}):e.jsx("div",{className:"space-y-2",children:e.jsx("button",{onClick:()=>d({id:"1",name:"测试用户",email:"test@example.com",preferences:{theme:"light",language:"zh-CN",notifications:!0},profile:{bio:"这是一个测试用户",location:"北京",website:"https://example.com",social:{twitter:"@test",github:"testuser"}}}),className:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600",children:"创建测试用户"})})})]}),e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"项目管理 (Immer 更新)"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex space-x-2",children:[e.jsx("input",{type:"text",placeholder:"项目名称",value:v,onChange:p=>j(p.target.value),className:"flex-1 border rounded px-3 py-2"}),e.jsx("button",{onClick:c,className:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600",children:"添加项目"})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:n.map(p=>e.jsxs("div",{className:"border rounded p-4",children:[e.jsxs("div",{className:"flex justify-between items-start mb-2",children:[e.jsx("h4",{className:"font-medium",children:p.name}),e.jsxs("div",{className:"flex space-x-1",children:[e.jsx("button",{onClick:()=>C(p.id),className:`px-2 py-1 text-xs rounded ${s===p.id?"bg-blue-500 text-white":"bg-gray-200"}`,children:"选择"}),e.jsx("button",{onClick:()=>D(p.id),className:"px-2 py-1 text-xs bg-red-500 text-white rounded hover:bg-red-600",children:"删除"})]})]}),e.jsxs("p",{className:"text-sm text-gray-600",children:["待办事项: ",p.todos.length]}),e.jsxs("p",{className:"text-sm text-gray-600",children:["状态: ",p.status]})]},p.id))})]})]}),s&&e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow",children:[e.jsxs("h3",{className:"text-lg font-semibold mb-4",children:["待办事项 - ",w==null?void 0:w.name," (Immer 更新)"]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex space-x-2",children:[e.jsx("input",{type:"text",placeholder:"新待办事项",value:N,onChange:p=>J(p.target.value),className:"flex-1 border rounded px-3 py-2"}),e.jsx("button",{onClick:x,className:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600",children:"添加"})]}),e.jsxs("div",{className:"flex space-x-2",children:[e.jsxs("select",{value:o.todoStatus,onChange:p=>U({todoStatus:p.target.value}),className:"border rounded px-3 py-2",children:[e.jsx("option",{value:"all",children:"全部"}),e.jsx("option",{value:"active",children:"进行中"}),e.jsx("option",{value:"completed",children:"已完成"})]}),e.jsxs("select",{value:o.priority,onChange:p=>U({priority:p.target.value}),className:"border rounded px-3 py-2",children:[e.jsx("option",{value:"all",children:"全部优先级"}),e.jsx("option",{value:"low",children:"低"}),e.jsx("option",{value:"medium",children:"中"}),e.jsx("option",{value:"high",children:"高"})]}),e.jsx("input",{type:"text",placeholder:"搜索...",value:o.search,onChange:p=>U({search:p.target.value}),className:"border rounded px-3 py-2"})]}),e.jsx("div",{className:"space-y-2",children:a.map(p=>e.jsxs("div",{className:"border rounded p-4",children:[e.jsxs("div",{className:"flex items-center space-x-2 mb-2",children:[e.jsx("input",{type:"checkbox",checked:p.completed,onChange:()=>f(s,p.id),className:"rounded"}),e.jsx("span",{className:`flex-1 ${p.completed?"line-through text-gray-500":""}`,children:p.text}),e.jsx("span",{className:`px-2 py-1 text-xs rounded ${p.priority==="high"?"bg-red-100 text-red-800":p.priority==="medium"?"bg-yellow-100 text-yellow-800":"bg-green-100 text-green-800"}`,children:p.priority}),e.jsx("button",{onClick:()=>H(p.id),className:"px-2 py-1 text-xs bg-blue-500 text-white rounded hover:bg-blue-600",children:"子任务"}),e.jsx("button",{onClick:()=>F(s,p.id),className:"px-2 py-1 text-xs bg-red-500 text-white rounded hover:bg-red-600",children:"删除"})]}),S===p.id&&e.jsxs("div",{className:"ml-6 space-y-2",children:[e.jsxs("div",{className:"flex space-x-2",children:[e.jsx("input",{type:"text",placeholder:"新子任务",value:L,onChange:h=>Z(h.target.value),className:"flex-1 border rounded px-2 py-1 text-sm"}),e.jsx("button",{onClick:A,className:"px-2 py-1 text-xs bg-green-500 text-white rounded hover:bg-green-600",children:"添加"})]}),p.subtasks.map(h=>e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("input",{type:"checkbox",checked:h.completed,onChange:()=>P(s,p.id,h.id),className:"rounded"}),e.jsx("span",{className:`text-sm ${h.completed?"line-through text-gray-500":""}`,children:h.text}),e.jsx("button",{onClick:()=>B(s,p.id,h.id),className:"px-1 py-1 text-xs bg-red-500 text-white rounded hover:bg-red-600",children:"删除"})]},h.id))]})]},p.id))})]})]}),e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"控制面板"}),e.jsxs("div",{className:"flex space-x-2",children:[e.jsx("button",{onClick:()=>y({sidebarOpen:!r.sidebarOpen}),className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600",children:"切换侧边栏"}),e.jsx("button",{onClick:()=>y({theme:r.theme==="light"?"dark":"light"}),className:"px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600",children:"切换主题"}),e.jsx("button",{onClick:G,className:"px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600",children:"重置状态"})]}),e.jsxs("div",{className:"mt-4 text-sm text-gray-600",children:[e.jsxs("p",{children:["侧边栏: ",r.sidebarOpen?"开启":"关闭"]}),e.jsxs("p",{children:["主题: ",r.theme]}),e.jsxs("p",{children:["项目数量: ",n.length]}),e.jsxs("p",{children:["当前项目: ",(w==null?void 0:w.name)||"无"]})]})]})]})},st=()=>{const{user:t,projects:n,updateUser:s,updateUserProfile:r,updateUserPreferences:o,updateUserSocial:d,addProject:i,updateProject:l,addTodo:u,updateTodo:D,addSubtask:C,updateSubtask:E,batchUpdateTodos:ne,setUser:F}=Se(),[f,z]=k.useState(null),[b,B]=k.useState(null),[P,y]=k.useState(!1),[U,G]=k.useState(""),v=n.find(a=>a.id===f),j=v==null?void 0:v.todos.find(a=>a.id===b),N=a=>{G(a),setTimeout(()=>G(""),3e3)},J=()=>{if(!t){N("请先创建用户数据");return}y(!0),s({name:t.name+" (复杂更新)",preferences:{...t.preferences,theme:t.preferences.theme==="light"?"dark":"light",language:t.preferences.language==="zh-CN"?"en-US":"zh-CN"},profile:{...t.profile,bio:t.profile.bio+" - 已更新",social:{...t.profile.social,twitter:t.profile.social.twitter?t.profile.social.twitter+"_updated":"@new_twitter"}}}),setTimeout(()=>{y(!1),N("用户信息更新成功！")},500)},L=()=>{if(n.length===0){N("请先创建项目数据");return}y(!0),n.forEach((a,c)=>{l(a.id,{name:`${a.name} (批量更新 ${c+1})`,description:`这是第 ${c+1} 个项目的更新描述`,updatedAt:new Date})}),setTimeout(()=>{y(!1),N(`成功批量更新 ${n.length} 个项目！`)},500)},Z=()=>{if(!f||!b){N("请先选择项目和待办事项");return}y(!0),D(f,b,{text:(j==null?void 0:j.text)+" (复杂更新)",priority:(j==null?void 0:j.priority)==="low"?"high":"low",tags:[...(j==null?void 0:j.tags)||[],"complex-update","immer-demo"],updatedAt:new Date});for(let a=1;a<=3;a++)C(f,b,{text:`复杂更新的子任务 ${a}`,completed:!1});setTimeout(()=>{y(!1),N("待办事项复杂更新成功！")},500)},S=()=>{if(!f||!v){N("请先选择项目");return}if(v.todos.length===0){N("该项目没有待办事项");return}y(!0);const a=v.todos.map((c,x)=>({todoId:c.id,updates:{text:`${c.text} (批量更新 ${x+1})`,priority:x%2===0?"high":"low",tags:[...c.tags,"batch-update"],updatedAt:new Date}}));ne(f,a),setTimeout(()=>{y(!1),N(`成功批量更新 ${a.length} 个待办事项！`)},500)},H=()=>{if(!t){N("请先创建用户数据");return}y(!0),o({theme:t.preferences.theme==="light"?"dark":"light",notifications:!t.preferences.notifications}),r({bio:t.profile.bio+" (深度更新)",social:{github:t.profile.social.github?t.profile.social.github+"_updated":"new_github",linkedin:t.profile.social.linkedin?t.profile.social.linkedin+"_updated":"new_linkedin"}}),d({twitter:t.profile.social.twitter?t.profile.social.twitter+"_deep":"@deep_update"}),setTimeout(()=>{y(!1),N("深度嵌套更新成功！")},500)},w=()=>{if(y(!0),t||F({id:"1",name:"测试用户",email:"test@example.com",avatar:"https://via.placeholder.com/40",preferences:{theme:"light",language:"zh-CN",notifications:!0},profile:{bio:"这是一个测试用户",location:"北京",website:"https://example.com",social:{twitter:"@test",github:"testuser",linkedin:"test-user"}}}),n.length===0){const a={id:`test-project-${Date.now()}`,name:"测试项目",description:"这是一个测试项目",status:"active",todos:[],members:[],createdAt:new Date,updatedAt:new Date};i(a),z(a.id);for(let c=1;c<=3;c++)u(a.id,{text:`测试待办事项 ${c}`,completed:!1,priority:c===1?"high":"medium",tags:[`tag-${c}`,"test"],subtasks:[]})}setTimeout(()=>{y(!1),N("测试数据创建成功！")},500)},m=()=>{y(!0),z(null),B(null),setTimeout(()=>{y(!1),N("数据已重置！")},500)};return e.jsxs("div",{className:"space-y-6",children:[U&&e.jsx("div",{className:"bg-green-50 border border-green-200 rounded p-4",children:e.jsx("p",{className:"text-green-800",children:U})}),P&&e.jsx("div",{className:"bg-blue-50 border border-blue-200 rounded p-4",children:e.jsx("p",{className:"text-blue-800",children:"正在处理中..."})}),e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"测试数据"}),e.jsxs("div",{className:"flex space-x-2",children:[e.jsx("button",{onClick:w,disabled:P,className:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:opacity-50",children:"创建测试数据"}),e.jsx("button",{onClick:m,disabled:P,className:"px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 disabled:opacity-50",children:"重置数据"})]})]}),t&&e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"复杂用户信息更新"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-2",children:"基本信息"}),e.jsxs("p",{children:[e.jsx("strong",{children:"姓名:"})," ",t.name]}),e.jsxs("p",{children:[e.jsx("strong",{children:"邮箱:"})," ",t.email]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-2",children:"偏好设置"}),e.jsxs("p",{children:[e.jsx("strong",{children:"主题:"})," ",t.preferences.theme]}),e.jsxs("p",{children:[e.jsx("strong",{children:"语言:"})," ",t.preferences.language]}),e.jsxs("p",{children:[e.jsx("strong",{children:"通知:"})," ",t.preferences.notifications?"开启":"关闭"]})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-2",children:"个人资料"}),e.jsxs("p",{children:[e.jsx("strong",{children:"简介:"})," ",t.profile.bio]}),e.jsxs("p",{children:[e.jsx("strong",{children:"位置:"})," ",t.profile.location]}),e.jsxs("p",{children:[e.jsx("strong",{children:"网站:"})," ",t.profile.website]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-2",children:"社交链接"}),e.jsxs("p",{children:[e.jsx("strong",{children:"Twitter:"})," ",t.profile.social.twitter||"未设置"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"GitHub:"})," ",t.profile.social.github||"未设置"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"LinkedIn:"})," ",t.profile.social.linkedin||"未设置"]})]}),e.jsxs("div",{className:"flex space-x-2",children:[e.jsx("button",{onClick:J,disabled:P,className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50",children:"复杂用户信息更新"}),e.jsx("button",{onClick:H,disabled:P,className:"px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 disabled:opacity-50",children:"深度嵌套更新"})]})]})]}),n.length>0&&e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"项目选择"}),e.jsx("div",{className:"flex flex-wrap gap-2",children:n.map(a=>e.jsx("button",{onClick:()=>z(a.id),className:`px-4 py-2 rounded ${f===a.id?"bg-blue-500 text-white":"bg-gray-200 hover:bg-gray-300"}`,children:a.name},a.id))})]}),v&&e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow",children:[e.jsxs("h3",{className:"text-lg font-semibold mb-4",children:["复杂项目更新 - ",v.name]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"flex space-x-2",children:e.jsx("button",{onClick:L,disabled:P,className:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:opacity-50",children:"批量更新所有项目"})}),e.jsxs("p",{className:"text-sm text-gray-600",children:["项目描述: ",v.description]}),e.jsxs("p",{className:"text-sm text-gray-600",children:["待办事项数量: ",v.todos.length]})]})]}),v&&v.todos.length>0&&e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"复杂待办事项更新"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"flex flex-wrap gap-2",children:v.todos.map(a=>e.jsx("button",{onClick:()=>B(a.id),className:`px-3 py-1 rounded text-sm ${b===a.id?"bg-blue-500 text-white":"bg-gray-200 hover:bg-gray-300"}`,children:a.text},a.id))}),j&&e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"border rounded p-4",children:[e.jsxs("h4",{className:"font-medium mb-2",children:["选中的待办事项: ",j.text]}),e.jsxs("p",{children:[e.jsx("strong",{children:"优先级:"})," ",j.priority]}),e.jsxs("p",{children:[e.jsx("strong",{children:"标签:"})," ",j.tags.join(", ")||"无"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"子任务数量:"})," ",j.subtasks.length]})]}),e.jsxs("div",{className:"flex space-x-2",children:[e.jsx("button",{onClick:Z,disabled:P,className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50",children:"复杂待办事项更新"}),e.jsx("button",{onClick:S,disabled:P,className:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:opacity-50",children:"批量更新所有待办事项"})]}),j.subtasks.length>0&&e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"font-medium",children:"子任务:"}),j.subtasks.map(a=>e.jsxs("div",{className:"flex items-center space-x-2 p-2 border rounded",children:[e.jsx("input",{type:"checkbox",checked:a.completed,readOnly:!0,className:"rounded"}),e.jsx("span",{className:a.completed?"line-through text-gray-500":"",children:a.text})]},a.id))]})]})]})]}),e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Immer 复杂更新说明"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-blue-50 p-4 rounded",children:[e.jsx("h4",{className:"font-medium text-blue-800 mb-2",children:"复杂更新特性"}),e.jsxs("ul",{className:"text-sm text-blue-700 space-y-1",children:[e.jsx("li",{children:"• 支持深层嵌套对象的直接修改"}),e.jsx("li",{children:"• 自动处理不可变数据结构"}),e.jsx("li",{children:"• 结构共享，减少内存占用"}),e.jsx("li",{children:"• 简化复杂状态更新逻辑"}),e.jsx("li",{children:"• 保持代码的可读性和可维护性"})]})]}),e.jsxs("div",{className:"bg-green-50 p-4 rounded",children:[e.jsx("h4",{className:"font-medium text-green-800 mb-2",children:"使用场景"}),e.jsxs("ul",{className:"text-sm text-green-700 space-y-1",children:[e.jsx("li",{children:"• 复杂的用户配置文件更新"}),e.jsx("li",{children:"• 嵌套的项目和任务管理"}),e.jsx("li",{children:"• 批量状态更新操作"}),e.jsx("li",{children:"• 需要保持不可变性的应用"}),e.jsx("li",{children:"• 复杂表单状态管理"})]})]})]})]})]})},rt=()=>{const{projects:t,addProject:n,updateProject:s,addTodo:r,batchUpdateTodos:o,resetState:d}=Se(),[i,l]=k.useState({projects:[]}),[u,D]=k.useState({immer:[],normal:[]}),[C,E]=k.useState(!1),[ne,F]=k.useState(""),[f,z]=k.useState({immer:null,normal:null,operations:0}),[b,B]=k.useState({immer:null,normal:null,operations:0}),P=m=>{l(a=>({...a,projects:[...a.projects,{...m,id:`normal-${Date.now()}-${Math.random()}`}]}))},y=(m,a)=>{l(c=>({...c,projects:c.projects.map(x=>x.id===m?{...x,...a}:x)}))},U=(m,a)=>{l(c=>({...c,projects:c.projects.map(x=>x.id===m?{...x,todos:[...x.todos,{...a,id:`normal-todo-${Date.now()}-${Math.random()}`,createdAt:new Date,updatedAt:new Date}]}:x)}))},G=(m,a)=>{l(c=>({...c,projects:c.projects.map(x=>x.id===m?{...x,todos:x.todos.map(A=>{const R=a.find(p=>p.todoId===A.id);return R?{...A,...R.updates,updatedAt:new Date}:A})}:x)}))},v=async()=>{for(let m=0;m<10;m++)n({id:`warmup-${m}`,name:`预热项目 ${m}`,description:`预热描述 ${m}`,status:"active",todos:[],members:[],createdAt:new Date,updatedAt:new Date});await new Promise(m=>setTimeout(m,50)),d(),l({projects:[]})},j=async(m,a)=>{var R,p;const c=performance.now();F(`${m} - ${a} 次基础操作`);for(let h=0;h<a;h++){if(m==="immer")if(h%2===0)n({id:`immer-test-${Date.now()}-${h}`,name:`Immer测试项目 ${h}`,description:`这是第 ${h} 个Immer测试项目`,status:"active",todos:[],members:[],createdAt:new Date,updatedAt:new Date});else{const I=(R=t[0])==null?void 0:R.id;I&&r(I,{text:`Immer测试待办事项 ${h}`,completed:!1,priority:"medium",tags:[],subtasks:[]})}else if(h%2===0)P({name:`普通测试项目 ${h}`,description:`这是第 ${h} 个普通测试项目`,status:"active",todos:[],members:[],createdAt:new Date,updatedAt:new Date});else{const I=(p=i.projects[0])==null?void 0:p.id;I&&U(I,{text:`普通测试待办事项 ${h}`,completed:!1,priority:"medium",tags:[],subtasks:[]})}h%100===0&&await new Promise(I=>setTimeout(I,1))}const A=performance.now()-c;D(h=>({...h,[m]:[...h[m],{time:A,count:a,type:"basic"}]}))},N=async()=>{var h,I;E(!0),F("批量操作测试"),await v();const m=`batch-test-${Date.now()}`,a=100;n({id:m,name:"Immer批量测试项目",description:"用于Immer批量测试的项目",status:"active",todos:[],members:[],createdAt:new Date,updatedAt:new Date}),P({name:"普通批量测试项目",description:"用于普通批量测试的项目",status:"active",todos:[],members:[],createdAt:new Date,updatedAt:new Date});for(let g=0;g<a;g++){r(m,{text:`Immer批量测试待办事项 ${g}`,completed:!1,priority:"medium",tags:[],subtasks:[]});const O=(h=i.projects[i.projects.length-1])==null?void 0:h.id;O&&U(O,{text:`普通批量测试待办事项 ${g}`,completed:!1,priority:"medium",tags:[],subtasks:[]})}await new Promise(g=>setTimeout(g,200));const c=3;let x=0,A=0;for(let g=0;g<c;g++){const O=performance.now(),ue=Array.from({length:a},(re,Y)=>({todoId:`immer-todo-${Y}`,updates:{text:`Immer批量更新 ${Y} (轮次 ${g})`,priority:Y%2===0?"high":"low",tags:[`immer-tag-${Y}`,`round-${g}`]}}));o(m,ue);const ge=performance.now();x+=ge-O;const Q=performance.now(),se=(I=i.projects[i.projects.length-1])==null?void 0:I.id;if(se){const re=Array.from({length:a},(Y,oe)=>({todoId:`normal-todo-${oe}`,updates:{text:`普通批量更新 ${oe} (轮次 ${g})`,priority:oe%2===0?"high":"low",tags:[`normal-tag-${oe}`,`round-${g}`]}}));G(se,re)}const T=performance.now();A+=T-Q,await new Promise(re=>setTimeout(re,50))}const R=x/c,p=A/c;z({immer:R,normal:p,operations:a}),E(!1),F("")},J=async()=>{var h,I;E(!0),F("复杂嵌套更新测试"),await v();const m=`complex-immer-${Date.now()}`,a=50;n({id:m,name:"Immer复杂测试项目",description:"用于Immer复杂测试的项目",status:"active",todos:[],members:[],createdAt:new Date,updatedAt:new Date}),P({name:"普通复杂测试项目",description:"用于普通复杂测试的项目",status:"active",todos:[],members:[],createdAt:new Date,updatedAt:new Date});for(let g=0;g<20;g++){r(m,{text:`Immer复杂测试待办事项 ${g}`,completed:!1,priority:"medium",tags:[],subtasks:[]});const O=(h=i.projects[i.projects.length-1])==null?void 0:h.id;O&&U(O,{text:`普通复杂测试待办事项 ${g}`,completed:!1,priority:"medium",tags:[],subtasks:[]})}await new Promise(g=>setTimeout(g,200));const c=3;let x=0,A=0;for(let g=0;g<c;g++){const O=performance.now();for(let T=0;T<a;T++)s(m,{name:`Immer更新后的项目 ${T} (轮次 ${g})`,description:`这是第 ${T} 次Immer更新 (轮次 ${g})`,updatedAt:new Date}),r(m,{text:`Immer复杂更新测试 ${T} (轮次 ${g})`,completed:!1,priority:"high",tags:[`immer-tag-${T}`,"test",`round-${g}`],subtasks:[]});const ue=performance.now();x+=ue-O;const ge=performance.now(),Q=(I=i.projects[i.projects.length-1])==null?void 0:I.id;if(Q)for(let T=0;T<a;T++)y(Q,{name:`普通更新后的项目 ${T} (轮次 ${g})`,description:`这是第 ${T} 次普通更新 (轮次 ${g})`,updatedAt:new Date}),U(Q,{text:`普通复杂更新测试 ${T} (轮次 ${g})`,completed:!1,priority:"high",tags:[`normal-tag-${T}`,"test",`round-${g}`],subtasks:[]});const se=performance.now();A+=se-ge,await new Promise(T=>setTimeout(T,50))}const R=x/c,p=A/c;B({immer:R,normal:p,operations:a*2}),E(!1),F("")},L=async()=>{E(!0),D({immer:[],normal:[]}),await v();const m=[100,250,500];for(const a of m)await j("immer",a),await new Promise(c=>setTimeout(c,200)),await j("normal",a),await new Promise(c=>setTimeout(c,200));E(!1),F("")},Z=()=>{d(),l({projects:[]}),D({immer:[],normal:[]}),z({immer:null,normal:null,operations:0}),B({immer:null,normal:null,operations:0})},S=m=>m.length===0?0:m.reduce((a,c)=>a+c.time,0)/m.length,H=m=>m.length===0?0:m.reduce((a,c)=>a+c.count/(c.time/1e3),0)/m.length,w=(m,a)=>a===0?0:(a-m)/a*100;return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"性能对比测试控制面板"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-4",children:[e.jsx("button",{onClick:L,disabled:C,className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50",children:C?"测试中...":"运行基础性能测试"}),e.jsx("button",{onClick:N,disabled:C,className:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:opacity-50",children:"批量操作对比测试"}),e.jsx("button",{onClick:J,disabled:C,className:"px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 disabled:opacity-50",children:"复杂更新对比测试"}),e.jsx("button",{onClick:Z,disabled:C,className:"px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 disabled:opacity-50",children:"重置测试数据"})]}),C&&e.jsx("div",{className:"bg-yellow-50 border border-yellow-200 rounded p-4",children:e.jsxs("p",{className:"text-yellow-800",children:["正在运行测试: ",ne]})})]})]}),e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"测试操作详细说明"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-green-50 p-4 rounded",children:[e.jsx("h4",{className:"font-medium text-green-800 mb-2",children:"批量操作测试"}),e.jsxs("div",{className:"text-sm text-green-700 space-y-2",children:[e.jsx("p",{children:e.jsx("strong",{children:"准备阶段："})}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 ml-4",children:[e.jsx("li",{children:"创建 1 个测试项目"}),e.jsx("li",{children:"添加 100 个待办事项到项目"})]}),e.jsx("p",{children:e.jsx("strong",{children:"测试阶段："})}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 ml-4",children:[e.jsx("li",{children:"同时更新 100 个待办事项的以下属性："}),e.jsx("li",{children:'• text: 更新为 "批量更新 [序号]"'}),e.jsx("li",{children:'• priority: 交替设置为 "high" 或 "low"'}),e.jsx("li",{children:'• tags: 添加新标签 "tag-[序号]"'}),e.jsx("li",{children:"• updatedAt: 更新为当前时间"}),e.jsx("li",{children:"• 进行 3 轮测试取平均值"})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"测量："}),"批量更新 100 个待办事项的平均耗时"]})]})]}),e.jsxs("div",{className:"bg-purple-50 p-4 rounded",children:[e.jsx("h4",{className:"font-medium text-purple-800 mb-2",children:"复杂更新测试"}),e.jsxs("div",{className:"text-sm text-purple-700 space-y-2",children:[e.jsx("p",{children:e.jsx("strong",{children:"准备阶段："})}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 ml-4",children:[e.jsx("li",{children:"创建 1 个测试项目"}),e.jsx("li",{children:"添加 20 个初始待办事项"})]}),e.jsx("p",{children:e.jsx("strong",{children:"测试阶段（循环 50 次）："})}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 ml-4",children:[e.jsx("li",{children:"更新项目信息："}),e.jsx("li",{children:'• name: 更新为 "更新后的项目 [序号]"'}),e.jsx("li",{children:'• description: 更新为 "这是第 [序号] 次更新"'}),e.jsx("li",{children:"• updatedAt: 更新为当前时间"}),e.jsx("li",{children:"添加新待办事项："}),e.jsx("li",{children:'• text: "复杂更新测试 [序号]"'}),e.jsx("li",{children:'• priority: "high"'}),e.jsx("li",{children:'• tags: ["tag-[序号]", "test"]'}),e.jsx("li",{children:"• 进行 3 轮测试取平均值"})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"测量："}),"50 次项目更新 + 50 次待办事项添加的平均耗时"]})]})]})]})]}),f.immer!==null&&f.normal!==null&&e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"批量操作测试结果对比"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-green-50 p-4 rounded",children:[e.jsx("h4",{className:"font-medium text-green-800 mb-2",children:"Immer 批量更新"}),e.jsxs("p",{className:"text-green-700",children:[e.jsx("strong",{children:"耗时:"})," ",f.immer.toFixed(2),"ms"]}),e.jsxs("p",{className:"text-sm text-green-600",children:["平均每个操作: ",(f.immer/f.operations).toFixed(2),"ms"]}),e.jsxs("p",{className:"text-sm text-green-600",children:["操作数量: ",f.operations," 个待办事项"]})]}),e.jsxs("div",{className:"bg-blue-50 p-4 rounded",children:[e.jsx("h4",{className:"font-medium text-blue-800 mb-2",children:"普通批量更新"}),e.jsxs("p",{className:"text-blue-700",children:[e.jsx("strong",{children:"耗时:"})," ",f.normal.toFixed(2),"ms"]}),e.jsxs("p",{className:"text-sm text-blue-600",children:["平均每个操作: ",(f.normal/f.operations).toFixed(2),"ms"]}),e.jsxs("p",{className:"text-sm text-blue-600",children:["操作数量: ",f.operations," 个待办事项"]})]})]}),e.jsxs("div",{className:"mt-4 p-4 bg-gray-50 rounded",children:[e.jsx("h4",{className:"font-medium mb-2",children:"性能对比结果"}),e.jsx("p",{className:"text-lg",children:f.immer<f.normal?e.jsxs("span",{className:"text-green-600",children:["Immer 比普通更新快"," ",w(f.immer,f.normal).toFixed(1),"%"]}):e.jsxs("span",{className:"text-red-600",children:["普通更新比 Immer 快"," ",w(f.normal,f.immer).toFixed(1),"%"]})}),e.jsxs("p",{className:"text-sm text-gray-600 mt-2",children:["基于 ",f.operations," 个操作的 3 轮测试平均值"]})]})]}),b.immer!==null&&b.normal!==null&&e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"复杂更新测试结果对比"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-green-50 p-4 rounded",children:[e.jsx("h4",{className:"font-medium text-green-800 mb-2",children:"Immer 复杂更新"}),e.jsxs("p",{className:"text-green-700",children:[e.jsx("strong",{children:"耗时:"})," ",b.immer.toFixed(2),"ms"]}),e.jsxs("p",{className:"text-sm text-green-600",children:["平均每个操作: ",(b.immer/b.operations).toFixed(2),"ms"]}),e.jsxs("p",{className:"text-sm text-green-600",children:["操作数量: ",b.operations," 个操作"]})]}),e.jsxs("div",{className:"bg-blue-50 p-4 rounded",children:[e.jsx("h4",{className:"font-medium text-blue-800 mb-2",children:"普通复杂更新"}),e.jsxs("p",{className:"text-blue-700",children:[e.jsx("strong",{children:"耗时:"})," ",b.normal.toFixed(2),"ms"]}),e.jsxs("p",{className:"text-sm text-blue-600",children:["平均每个操作: ",(b.normal/b.operations).toFixed(2),"ms"]}),e.jsxs("p",{className:"text-sm text-blue-600",children:["操作数量: ",b.operations," 个操作"]})]})]}),e.jsxs("div",{className:"mt-4 p-4 bg-gray-50 rounded",children:[e.jsx("h4",{className:"font-medium mb-2",children:"性能对比结果"}),e.jsx("p",{className:"text-lg",children:b.immer<b.normal?e.jsxs("span",{className:"text-green-600",children:["Immer 比普通更新快"," ",w(b.immer,b.normal).toFixed(1),"%"]}):e.jsxs("span",{className:"text-red-600",children:["普通更新比 Immer 快"," ",w(b.normal,b.immer).toFixed(1),"%"]})}),e.jsxs("p",{className:"text-sm text-gray-600 mt-2",children:["基于 ",b.operations," 个操作的 3 轮测试平均值"]})]})]}),e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"基础性能对比结果"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium text-green-600 mb-2",children:"Immer 性能"}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("p",{children:["平均耗时: ",S(u.immer).toFixed(2),"ms"]}),e.jsxs("p",{children:["平均操作/秒:"," ",H(u.immer).toFixed(0)]}),e.jsxs("p",{children:["测试次数: ",u.immer.length]})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium text-blue-600 mb-2",children:"普通更新性能"}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("p",{children:["平均耗时: ",S(u.normal).toFixed(2),"ms"]}),e.jsxs("p",{children:["平均操作/秒:"," ",H(u.normal).toFixed(0)]}),e.jsxs("p",{children:["测试次数: ",u.normal.length]})]})]})]}),u.immer.length>0&&u.normal.length>0&&e.jsxs("div",{className:"mt-4 p-4 bg-gray-50 rounded",children:[e.jsx("h4",{className:"font-medium mb-2",children:"总体性能对比"}),e.jsx("p",{className:"text-lg",children:S(u.immer)<S(u.normal)?e.jsxs("span",{className:"text-green-600",children:["Immer 平均比普通更新快"," ",w(S(u.immer),S(u.normal)).toFixed(1),"%"]}):e.jsxs("span",{className:"text-red-600",children:["普通更新平均比 Immer 快"," ",w(S(u.normal),S(u.immer)).toFixed(1),"%"]})})]})]}),u.immer.length>0&&e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"详细测试结果对比"}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full border-collapse border border-gray-300",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"bg-gray-50",children:[e.jsx("th",{className:"border border-gray-300 px-4 py-2 text-left",children:"操作次数"}),e.jsx("th",{className:"border border-gray-300 px-4 py-2 text-left",children:"Immer 耗时 (ms)"}),e.jsx("th",{className:"border border-gray-300 px-4 py-2 text-left",children:"普通更新耗时 (ms)"}),e.jsx("th",{className:"border border-gray-300 px-4 py-2 text-left",children:"性能差异"}),e.jsx("th",{className:"border border-gray-300 px-4 py-2 text-left",children:"提升百分比"})]})}),e.jsx("tbody",{children:u.immer.map((m,a)=>{const c=u.normal[a],x=c?w(m.time,c.time):0;return e.jsxs("tr",{className:a%2===0?"bg-white":"bg-gray-50",children:[e.jsx("td",{className:"border border-gray-300 px-4 py-2",children:m.count}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-green-600",children:m.time.toFixed(2)}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-blue-600",children:(c==null?void 0:c.time.toFixed(2))||"N/A"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2",children:c?m.time<c.time?e.jsxs("span",{className:"text-green-600",children:["Immer 快"," ",(c.time-m.time).toFixed(2),"ms"]}):e.jsxs("span",{className:"text-red-600",children:["普通更新快"," ",(m.time-c.time).toFixed(2),"ms"]}):"N/A"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2",children:x>0?e.jsxs("span",{className:"text-green-600",children:["+",x.toFixed(1),"%"]}):e.jsxs("span",{className:"text-red-600",children:[x.toFixed(1),"%"]})})]},a)})})]})})]}),e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"性能分析说明"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-green-50 p-4 rounded",children:[e.jsx("h4",{className:"font-medium text-green-800 mb-2",children:"Immer 优势"}),e.jsxs("ul",{className:"text-sm text-green-700 space-y-1",children:[e.jsx("li",{children:"• 不可变数据结构，避免意外修改"}),e.jsx("li",{children:"• 结构共享，减少内存占用"}),e.jsx("li",{children:"• 简化复杂嵌套状态更新"}),e.jsx("li",{children:"• 更好的调试体验"}),e.jsx("li",{children:"• 自动优化更新操作"})]})]}),e.jsxs("div",{className:"bg-blue-50 p-4 rounded",children:[e.jsx("h4",{className:"font-medium text-blue-800 mb-2",children:"测试改进"}),e.jsxs("ul",{className:"text-sm text-blue-700 space-y-1",children:[e.jsx("li",{children:"• 增加了测试数据量（100-500 个操作）"}),e.jsx("li",{children:"• 进行 3 轮测试取平均值"}),e.jsx("li",{children:"• 添加预热机制减少首次运行影响"}),e.jsx("li",{children:"• 更真实的测试场景"}),e.jsx("li",{children:"• 显示具体的操作数量"})]})]})]})]})]})},ot=`import React, { useState } from 'react';
import { useImmerStore } from '../stores/immerStore';

const BasicImmerDemo: React.FC = () => {
  const {
    user,
    projects,
    currentProject,
    ui,
    filters,
    setUser,
    updateUser,
    addProject,
    updateProject,
    deleteProject,
    setCurrentProject,
    addTodo,
    updateTodo,
    deleteTodo,
    toggleTodo,
    addSubtask,
    updateSubtask,
    deleteSubtask,
    toggleSubtask,
    setUIState,
    setFilters,
    resetState,
  } = useImmerStore();

  const [newProjectName, setNewProjectName] = useState('');
  const [newTodoText, setNewTodoText] = useState('');
  const [newSubtaskText, setNewSubtaskText] = useState('');
  const [selectedTodoId, setSelectedTodoId] = useState<string | null>(null);

  // 获取当前项目的待办事项
  const currentProjectData = projects.find(p => p.id === currentProject);
  const todos = currentProjectData?.todos || [];

  // 过滤后的待办事项
  const filteredTodos = todos.filter(todo => {
    const matchesStatus = filters.todoStatus === 'all' || 
      (filters.todoStatus === 'active' && !todo.completed) ||
      (filters.todoStatus === 'completed' && todo.completed);
    
    const matchesPriority = filters.priority === 'all' || todo.priority === filters.priority;
    
    const matchesSearch = !filters.search || 
      todo.text.toLowerCase().includes(filters.search.toLowerCase());
    
    return matchesStatus && matchesPriority && matchesSearch;
  });

  const handleAddProject = () => {
    if (newProjectName.trim()) {
      const project = {
        id: Date.now().toString(),
        name: newProjectName.trim(),
        description: '',
        status: 'active' as const,
        todos: [],
        members: [],
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      addProject(project);
      setNewProjectName('');
    }
  };

  const handleAddTodo = () => {
    if (newTodoText.trim() && currentProject) {
      addTodo(currentProject, {
        text: newTodoText.trim(),
        completed: false,
        priority: 'medium',
        tags: [],
        subtasks: [],
      });
      setNewTodoText('');
    }
  };

  const handleAddSubtask = () => {
    if (newSubtaskText.trim() && currentProject && selectedTodoId) {
      addSubtask(currentProject, selectedTodoId, {
        text: newSubtaskText.trim(),
        completed: false,
      });
      setNewSubtaskText('');
    }
  };

  const handleUpdateUser = () => {
    if (user) {
      updateUser({
        name: user.name + ' (Updated)',
        preferences: {
          ...user.preferences,
          theme: user.preferences.theme === 'light' ? 'dark' : 'light',
        },
      });
    }
  };

  return (
    <div className="space-y-6">
      {/* 用户信息部分 */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">用户信息 (Immer 更新)</h3>
        <div className="space-y-4">
          {user ? (
            <div className="space-y-2">
              <p><strong>姓名:</strong> {user.name}</p>
              <p><strong>邮箱:</strong> {user.email}</p>
              <p><strong>主题:</strong> {user.preferences.theme}</p>
              <p><strong>语言:</strong> {user.preferences.language}</p>
              <p><strong>通知:</strong> {user.preferences.notifications ? '开启' : '关闭'}</p>
              <button
                onClick={handleUpdateUser}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                更新用户信息
              </button>
            </div>
          ) : (
            <div className="space-y-2">
              <button
                onClick={() => setUser({
                  id: '1',
                  name: '测试用户',
                  email: 'test@example.com',
                  preferences: {
                    theme: 'light',
                    language: 'zh-CN',
                    notifications: true,
                  },
                  profile: {
                    bio: '这是一个测试用户',
                    location: '北京',
                    website: 'https://example.com',
                    social: {
                      twitter: '@test',
                      github: 'testuser',
                    },
                  },
                })}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              >
                创建测试用户
              </button>
            </div>
          )}
        </div>
      </div>

      {/* 项目管理部分 */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">项目管理 (Immer 更新)</h3>
        <div className="space-y-4">
          <div className="flex space-x-2">
            <input
              type="text"
              placeholder="项目名称"
              value={newProjectName}
              onChange={(e) => setNewProjectName(e.target.value)}
              className="flex-1 border rounded px-3 py-2"
            />
            <button
              onClick={handleAddProject}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              添加项目
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map((project) => (
              <div key={project.id} className="border rounded p-4">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium">{project.name}</h4>
                  <div className="flex space-x-1">
                    <button
                      onClick={() => setCurrentProject(project.id)}
                      className={\`px-2 py-1 text-xs rounded \${
                        currentProject === project.id 
                          ? 'bg-blue-500 text-white' 
                          : 'bg-gray-200'
                      }\`}
                    >
                      选择
                    </button>
                    <button
                      onClick={() => deleteProject(project.id)}
                      className="px-2 py-1 text-xs bg-red-500 text-white rounded hover:bg-red-600"
                    >
                      删除
                    </button>
                  </div>
                </div>
                <p className="text-sm text-gray-600">待办事项: {project.todos.length}</p>
                <p className="text-sm text-gray-600">状态: {project.status}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 待办事项部分 */}
      {currentProject && (
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">
            待办事项 - {currentProjectData?.name} (Immer 更新)
          </h3>
          <div className="space-y-4">
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="新待办事项"
                value={newTodoText}
                onChange={(e) => setNewTodoText(e.target.value)}
                className="flex-1 border rounded px-3 py-2"
              />
              <button
                onClick={handleAddTodo}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              >
                添加
              </button>
            </div>

            <div className="flex space-x-2">
              <select
                value={filters.todoStatus}
                onChange={(e) => setFilters({ todoStatus: e.target.value as any })}
                className="border rounded px-3 py-2"
              >
                <option value="all">全部</option>
                <option value="active">进行中</option>
                <option value="completed">已完成</option>
              </select>
              <select
                value={filters.priority}
                onChange={(e) => setFilters({ priority: e.target.value as any })}
                className="border rounded px-3 py-2"
              >
                <option value="all">全部优先级</option>
                <option value="low">低</option>
                <option value="medium">中</option>
                <option value="high">高</option>
              </select>
              <input
                type="text"
                placeholder="搜索..."
                value={filters.search}
                onChange={(e) => setFilters({ search: e.target.value })}
                className="border rounded px-3 py-2"
              />
            </div>

            <div className="space-y-2">
              {filteredTodos.map((todo) => (
                <div key={todo.id} className="border rounded p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <input
                      type="checkbox"
                      checked={todo.completed}
                      onChange={() => toggleTodo(currentProject, todo.id)}
                      className="rounded"
                    />
                    <span className={\`flex-1 \${todo.completed ? 'line-through text-gray-500' : ''}\`}>
                      {todo.text}
                    </span>
                    <span className={\`px-2 py-1 text-xs rounded \${
                      todo.priority === 'high' ? 'bg-red-100 text-red-800' :
                      todo.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }\`}>
                      {todo.priority}
                    </span>
                    <button
                      onClick={() => setSelectedTodoId(todo.id)}
                      className="px-2 py-1 text-xs bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                      子任务
                    </button>
                    <button
                      onClick={() => deleteTodo(currentProject, todo.id)}
                      className="px-2 py-1 text-xs bg-red-500 text-white rounded hover:bg-red-600"
                    >
                      删除
                    </button>
                  </div>

                  {/* 子任务部分 */}
                  {selectedTodoId === todo.id && (
                    <div className="ml-6 space-y-2">
                      <div className="flex space-x-2">
                        <input
                          type="text"
                          placeholder="新子任务"
                          value={newSubtaskText}
                          onChange={(e) => setNewSubtaskText(e.target.value)}
                          className="flex-1 border rounded px-2 py-1 text-sm"
                        />
                        <button
                          onClick={handleAddSubtask}
                          className="px-2 py-1 text-xs bg-green-500 text-white rounded hover:bg-green-600"
                        >
                          添加
                        </button>
                      </div>
                      {todo.subtasks.map((subtask) => (
                        <div key={subtask.id} className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            checked={subtask.completed}
                            onChange={() => toggleSubtask(currentProject, todo.id, subtask.id)}
                            className="rounded"
                          />
                          <span className={\`text-sm \${subtask.completed ? 'line-through text-gray-500' : ''}\`}>
                            {subtask.text}
                          </span>
                          <button
                            onClick={() => deleteSubtask(currentProject, todo.id, subtask.id)}
                            className="px-1 py-1 text-xs bg-red-500 text-white rounded hover:bg-red-600"
                          >
                            删除
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 控制面板 */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">控制面板</h3>
        <div className="flex space-x-2">
          <button
            onClick={() => setUIState({ sidebarOpen: !ui.sidebarOpen })}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            切换侧边栏
          </button>
          <button
            onClick={() => setUIState({ theme: ui.theme === 'light' ? 'dark' : 'light' })}
            className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
          >
            切换主题
          </button>
          <button
            onClick={resetState}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            重置状态
          </button>
        </div>
        <div className="mt-4 text-sm text-gray-600">
          <p>侧边栏: {ui.sidebarOpen ? '开启' : '关闭'}</p>
          <p>主题: {ui.theme}</p>
          <p>项目数量: {projects.length}</p>
          <p>当前项目: {currentProjectData?.name || '无'}</p>
        </div>
      </div>
    </div>
  );
};

export default BasicImmerDemo;
`,it=`import React, { useState, useEffect } from "react";
import { useImmerStore } from "../stores/immerStore";

const ComplexNestedUpdateDemo: React.FC = () => {
  const {
    user,
    projects,
    updateUser,
    updateUserProfile,
    updateUserPreferences,
    updateUserSocial,
    addProject,
    updateProject,
    addTodo,
    updateTodo,
    addSubtask,
    updateSubtask,
    batchUpdateTodos,
    setUser,
  } = useImmerStore();

  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [selectedTodo, setSelectedTodo] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<string>("");

  // 获取选中的项目
  const currentProject = projects.find(p => p.id === selectedProject);
  const currentTodo = currentProject?.todos.find(t => t.id === selectedTodo);

  // 显示消息
  const showMessage = (msg: string) => {
    setMessage(msg);
    setTimeout(() => setMessage(""), 3000);
  };

  // 复杂用户信息更新示例
  const handleComplexUserUpdate = () => {
    if (!user) {
      showMessage("请先创建用户数据");
      return;
    }

    setIsLoading(true);
    
    // 同时更新多个嵌套属性
    updateUser({
      name: user.name + " (复杂更新)",
      preferences: {
        ...user.preferences,
        theme: user.preferences.theme === "light" ? "dark" : "light",
        language: user.preferences.language === "zh-CN" ? "en-US" : "zh-CN",
      },
      profile: {
        ...user.profile,
        bio: user.profile.bio + " - 已更新",
        social: {
          ...user.profile.social,
          twitter: user.profile.social.twitter ? user.profile.social.twitter + "_updated" : "@new_twitter",
        },
      },
    });

    setTimeout(() => {
      setIsLoading(false);
      showMessage("用户信息更新成功！");
    }, 500);
  };

  // 批量更新项目信息
  const handleBatchProjectUpdate = () => {
    if (projects.length === 0) {
      showMessage("请先创建项目数据");
      return;
    }

    setIsLoading(true);
    
    projects.forEach((project, index) => {
      updateProject(project.id, {
        name: \`\${project.name} (批量更新 \${index + 1})\`,
        description: \`这是第 \${index + 1} 个项目的更新描述\`,
        updatedAt: new Date(),
      });
    });

    setTimeout(() => {
      setIsLoading(false);
      showMessage(\`成功批量更新 \${projects.length} 个项目！\`);
    }, 500);
  };

  // 复杂待办事项更新
  const handleComplexTodoUpdate = () => {
    if (!selectedProject || !selectedTodo) {
      showMessage("请先选择项目和待办事项");
      return;
    }

    setIsLoading(true);

    // 更新待办事项的多个属性
    updateTodo(selectedProject, selectedTodo, {
      text: currentTodo?.text + " (复杂更新)",
      priority: currentTodo?.priority === "low" ? "high" : "low",
      tags: [...(currentTodo?.tags || []), "complex-update", "immer-demo"],
      updatedAt: new Date(),
    });

    // 同时添加多个子任务
    for (let i = 1; i <= 3; i++) {
      addSubtask(selectedProject, selectedTodo, {
        text: \`复杂更新的子任务 \${i}\`,
        completed: false,
      });
    }

    setTimeout(() => {
      setIsLoading(false);
      showMessage("待办事项复杂更新成功！");
    }, 500);
  };

  // 批量更新待办事项
  const handleBatchTodoUpdate = () => {
    if (!selectedProject || !currentProject) {
      showMessage("请先选择项目");
      return;
    }

    if (currentProject.todos.length === 0) {
      showMessage("该项目没有待办事项");
      return;
    }

    setIsLoading(true);

    const batchUpdates = currentProject.todos.map((todo, index) => ({
      todoId: todo.id,
      updates: {
        text: \`\${todo.text} (批量更新 \${index + 1})\`,
        priority: index % 2 === 0 ? "high" : "low",
        tags: [...todo.tags, "batch-update"],
        updatedAt: new Date(),
      },
    }));

    batchUpdateTodos(selectedProject, batchUpdates);

    setTimeout(() => {
      setIsLoading(false);
      showMessage(\`成功批量更新 \${batchUpdates.length} 个待办事项！\`);
    }, 500);
  };

  // 深度嵌套更新示例
  const handleDeepNestedUpdate = () => {
    if (!user) {
      showMessage("请先创建用户数据");
      return;
    }

    setIsLoading(true);

    // 更新用户偏好的深层嵌套属性
    updateUserPreferences({
      theme: user.preferences.theme === "light" ? "dark" : "light",
      notifications: !user.preferences.notifications,
    });

    // 更新用户资料的深层嵌套属性
    updateUserProfile({
      bio: user.profile.bio + " (深度更新)",
      social: {
        github: user.profile.social.github ? user.profile.social.github + "_updated" : "new_github",
        linkedin: user.profile.social.linkedin ? user.profile.social.linkedin + "_updated" : "new_linkedin",
      },
    });

    // 更新社交链接
    updateUserSocial({
      twitter: user.profile.social.twitter ? user.profile.social.twitter + "_deep" : "@deep_update",
    });

    setTimeout(() => {
      setIsLoading(false);
      showMessage("深度嵌套更新成功！");
    }, 500);
  };

  // 创建测试数据
  const createTestData = () => {
    setIsLoading(true);

    // 创建测试用户
    if (!user) {
      setUser({
        id: "1",
        name: "测试用户",
        email: "test@example.com",
        avatar: "https://via.placeholder.com/40",
        preferences: {
          theme: "light",
          language: "zh-CN",
          notifications: true,
        },
        profile: {
          bio: "这是一个测试用户",
          location: "北京",
          website: "https://example.com",
          social: {
            twitter: "@test",
            github: "testuser",
            linkedin: "test-user",
          },
        },
      });
    }

    // 创建测试项目
    if (projects.length === 0) {
      const testProject = {
        id: \`test-project-\${Date.now()}\`,
        name: "测试项目",
        description: "这是一个测试项目",
        status: "active" as const,
        todos: [],
        members: [],
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      addProject(testProject);
      setSelectedProject(testProject.id);

      // 添加测试待办事项
      for (let i = 1; i <= 3; i++) {
        addTodo(testProject.id, {
          text: \`测试待办事项 \${i}\`,
          completed: false,
          priority: i === 1 ? "high" : "medium",
          tags: [\`tag-\${i}\`, "test"],
          subtasks: [],
        });
      }
    }

    setTimeout(() => {
      setIsLoading(false);
      showMessage("测试数据创建成功！");
    }, 500);
  };

  // 重置数据
  const resetData = () => {
    setIsLoading(true);
    setSelectedProject(null);
    setSelectedTodo(null);
    
    setTimeout(() => {
      setIsLoading(false);
      showMessage("数据已重置！");
    }, 500);
  };

  return (
    <div className="space-y-6">
      {/* 消息提示 */}
      {message && (
        <div className="bg-green-50 border border-green-200 rounded p-4">
          <p className="text-green-800">{message}</p>
        </div>
      )}

      {/* 加载状态 */}
      {isLoading && (
        <div className="bg-blue-50 border border-blue-200 rounded p-4">
          <p className="text-blue-800">正在处理中...</p>
        </div>
      )}

      {/* 测试数据创建 */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">测试数据</h3>
        <div className="flex space-x-2">
          <button
            onClick={createTestData}
            disabled={isLoading}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:opacity-50"
          >
            创建测试数据
          </button>
          <button
            onClick={resetData}
            disabled={isLoading}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 disabled:opacity-50"
          >
            重置数据
          </button>
        </div>
      </div>

      {/* 复杂用户信息更新 */}
      {user && (
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">复杂用户信息更新</h3>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium mb-2">基本信息</h4>
                <p><strong>姓名:</strong> {user.name}</p>
                <p><strong>邮箱:</strong> {user.email}</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">偏好设置</h4>
                <p><strong>主题:</strong> {user.preferences.theme}</p>
                <p><strong>语言:</strong> {user.preferences.language}</p>
                <p><strong>通知:</strong> {user.preferences.notifications ? "开启" : "关闭"}</p>
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-2">个人资料</h4>
              <p><strong>简介:</strong> {user.profile.bio}</p>
              <p><strong>位置:</strong> {user.profile.location}</p>
              <p><strong>网站:</strong> {user.profile.website}</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">社交链接</h4>
              <p><strong>Twitter:</strong> {user.profile.social.twitter || "未设置"}</p>
              <p><strong>GitHub:</strong> {user.profile.social.github || "未设置"}</p>
              <p><strong>LinkedIn:</strong> {user.profile.social.linkedin || "未设置"}</p>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={handleComplexUserUpdate}
                disabled={isLoading}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
              >
                复杂用户信息更新
              </button>
              <button
                onClick={handleDeepNestedUpdate}
                disabled={isLoading}
                className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 disabled:opacity-50"
              >
                深度嵌套更新
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 项目选择 */}
      {projects.length > 0 && (
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">项目选择</h3>
          <div className="flex flex-wrap gap-2">
            {projects.map((project) => (
              <button
                key={project.id}
                onClick={() => setSelectedProject(project.id)}
                className={\`px-4 py-2 rounded \${
                  selectedProject === project.id
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                }\`}
              >
                {project.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* 复杂项目更新 */}
      {currentProject && (
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">复杂项目更新 - {currentProject.name}</h3>
          <div className="space-y-4">
            <div className="flex space-x-2">
              <button
                onClick={handleBatchProjectUpdate}
                disabled={isLoading}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:opacity-50"
              >
                批量更新所有项目
              </button>
            </div>
            <p className="text-sm text-gray-600">
              项目描述: {currentProject.description}
            </p>
            <p className="text-sm text-gray-600">
              待办事项数量: {currentProject.todos.length}
            </p>
          </div>
        </div>
      )}

      {/* 复杂待办事项更新 */}
      {currentProject && currentProject.todos.length > 0 && (
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">复杂待办事项更新</h3>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {currentProject.todos.map((todo) => (
                <button
                  key={todo.id}
                  onClick={() => setSelectedTodo(todo.id)}
                  className={\`px-3 py-1 rounded text-sm \${
                    selectedTodo === todo.id
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 hover:bg-gray-300"
                  }\`}
                >
                  {todo.text}
                </button>
              ))}
            </div>

            {currentTodo && (
              <div className="space-y-4">
                <div className="border rounded p-4">
                  <h4 className="font-medium mb-2">选中的待办事项: {currentTodo.text}</h4>
                  <p><strong>优先级:</strong> {currentTodo.priority}</p>
                  <p><strong>标签:</strong> {currentTodo.tags.join(", ") || "无"}</p>
                  <p><strong>子任务数量:</strong> {currentTodo.subtasks.length}</p>
                </div>

                <div className="flex space-x-2">
                  <button
                    onClick={handleComplexTodoUpdate}
                    disabled={isLoading}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
                  >
                    复杂待办事项更新
                  </button>
                  <button
                    onClick={handleBatchTodoUpdate}
                    disabled={isLoading}
                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:opacity-50"
                  >
                    批量更新所有待办事项
                  </button>
                </div>

                {/* 子任务列表 */}
                {currentTodo.subtasks.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="font-medium">子任务:</h4>
                    {currentTodo.subtasks.map((subtask) => (
                      <div key={subtask.id} className="flex items-center space-x-2 p-2 border rounded">
                        <input
                          type="checkbox"
                          checked={subtask.completed}
                          readOnly
                          className="rounded"
                        />
                        <span className={subtask.completed ? "line-through text-gray-500" : ""}>
                          {subtask.text}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* 更新说明 */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">Immer 复杂更新说明</h3>
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded">
            <h4 className="font-medium text-blue-800 mb-2">复杂更新特性</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• 支持深层嵌套对象的直接修改</li>
              <li>• 自动处理不可变数据结构</li>
              <li>• 结构共享，减少内存占用</li>
              <li>• 简化复杂状态更新逻辑</li>
              <li>• 保持代码的可读性和可维护性</li>
            </ul>
          </div>
          <div className="bg-green-50 p-4 rounded">
            <h4 className="font-medium text-green-800 mb-2">使用场景</h4>
            <ul className="text-sm text-green-700 space-y-1">
              <li>• 复杂的用户配置文件更新</li>
              <li>• 嵌套的项目和任务管理</li>
              <li>• 批量状态更新操作</li>
              <li>• 需要保持不可变性的应用</li>
              <li>• 复杂表单状态管理</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplexNestedUpdateDemo;
`,fe=`import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { AppState, User, Project, Todo, Subtask } from '../types';

// 定义 Store 接口，包含状态和方法
interface ImmerStore extends AppState {
  // 用户相关操作
  setUser: (user: User) => void;
  updateUser: (updates: Partial<User>) => void;
  
  // 项目相关操作
  addProject: (project: Project) => void;
  updateProject: (id: string, updates: Partial<Project>) => void;
  deleteProject: (id: string) => void;
  setCurrentProject: (id: string | null) => void;
  
  // 待办事项相关操作
  addTodo: (projectId: string, todo: Omit<Todo, 'id' | 'createdAt' | 'updatedAt'>) => void;
  updateTodo: (projectId: string, todoId: string, updates: Partial<Todo>) => void;
  deleteTodo: (projectId: string, todoId: string) => void;
  toggleTodo: (projectId: string, todoId: string) => void;
  
  // 子任务相关操作
  addSubtask: (projectId: string, todoId: string, subtask: Omit<Subtask, 'id' | 'createdAt'>) => void;
  updateSubtask: (projectId: string, todoId: string, subtaskId: string, updates: Partial<Subtask>) => void;
  deleteSubtask: (projectId: string, todoId: string, subtaskId: string) => void;
  toggleSubtask: (projectId: string, todoId: string, subtaskId: string) => void;
  
  // UI 状态操作
  setUIState: (updates: Partial<AppState['ui']>) => void;
  
  // 过滤器操作
  setFilters: (updates: Partial<AppState['filters']>) => void;
  
  // 重置状态
  resetState: () => void;
  
  // 批量操作
  batchUpdateTodos: (projectId: string, updates: { todoId: string; updates: Partial<Todo> }[]) => void;
  
  // 复杂嵌套更新
  updateUserProfile: (updates: Partial<User['profile']>) => void;
  updateUserPreferences: (updates: Partial<User['preferences']>) => void;
  updateUserSocial: (updates: Partial<User['profile']['social']>) => void;
}

// 生成唯一ID的辅助函数
const generateUniqueId = () => {
  return \`\${Date.now()}-\${Math.random().toString(36).substr(2, 9)}\`;
};

// 创建 Immer Store
export const useImmerStore = create<ImmerStore>()(
  devtools(
    immer((set) => ({
      // 初始状态
      user: null,
      projects: [],
      currentProject: null,
      ui: {
        sidebarOpen: false,
        theme: 'light',
        loading: false,
        error: null,
      },
      filters: {
        todoStatus: 'all',
        priority: 'all',
        search: '',
      },

      // 用户相关操作 - 使用 Immer 直接修改
      setUser: (user: User) => {
        set((state) => {
          state.user = user;
        });
      },

      updateUser: (updates: Partial<User>) => {
        set((state) => {
          if (state.user) {
            // 直接修改嵌套对象属性
            if (updates.name) state.user.name = updates.name;
            if (updates.email) state.user.email = updates.email;
            if (updates.avatar) state.user.avatar = updates.avatar;
            
            // 更新偏好设置
            if (updates.preferences) {
              if (updates.preferences.theme) state.user.preferences.theme = updates.preferences.theme;
              if (updates.preferences.language) state.user.preferences.language = updates.preferences.language;
              if (updates.preferences.notifications !== undefined) {
                state.user.preferences.notifications = updates.preferences.notifications;
              }
            }
            
            // 更新个人资料
            if (updates.profile) {
              if (updates.profile.bio) state.user.profile.bio = updates.profile.bio;
              if (updates.profile.location) state.user.profile.location = updates.profile.location;
              if (updates.profile.website) state.user.profile.website = updates.profile.website;
              
              // 更新社交链接
              if (updates.profile.social) {
                if (updates.profile.social.twitter) state.user.profile.social.twitter = updates.profile.social.twitter;
                if (updates.profile.social.github) state.user.profile.social.github = updates.profile.social.github;
                if (updates.profile.social.linkedin) state.user.profile.social.linkedin = updates.profile.social.linkedin;
              }
            }
          }
        });
      },

      // 项目相关操作 - 使用 Immer 直接修改
      addProject: (project: Project) => {
        set((state) => {
          state.projects.push(project);
        });
      },

      updateProject: (id: string, updates: Partial<Project>) => {
        set((state) => {
          const project = state.projects.find(p => p.id === id);
          if (project) {
            // 直接修改项目属性
            if (updates.name) project.name = updates.name;
            if (updates.description) project.description = updates.description;
            if (updates.status) project.status = updates.status;
            if (updates.members) project.members = updates.members;
            if (updates.updatedAt) project.updatedAt = updates.updatedAt;
          }
        });
      },

      deleteProject: (id: string) => {
        set((state) => {
          state.projects = state.projects.filter(p => p.id !== id);
          if (state.currentProject === id) {
            state.currentProject = null;
          }
        });
      },

      setCurrentProject: (id: string | null) => {
        set((state) => {
          state.currentProject = id;
        });
      },

      // 待办事项相关操作 - 使用 Immer 直接修改
      addTodo: (projectId: string, todo: Omit<Todo, 'id' | 'createdAt' | 'updatedAt'>) => {
        set((state) => {
          const project = state.projects.find(p => p.id === projectId);
          if (project) {
            const newTodo: Todo = {
              ...todo,
              id: generateUniqueId(),
              createdAt: new Date(),
              updatedAt: new Date(),
            };
            project.todos.push(newTodo);
          }
        });
      },

      updateTodo: (projectId: string, todoId: string, updates: Partial<Todo>) => {
        set((state) => {
          const project = state.projects.find(p => p.id === projectId);
          if (project) {
            const todo = project.todos.find(t => t.id === todoId);
            if (todo) {
              // 直接修改待办事项属性
              if (updates.text) todo.text = updates.text;
              if (updates.completed !== undefined) todo.completed = updates.completed;
              if (updates.priority) todo.priority = updates.priority;
              if (updates.tags) todo.tags = updates.tags;
              if (updates.subtasks) todo.subtasks = updates.subtasks;
              todo.updatedAt = new Date();
            }
          }
        });
      },

      deleteTodo: (projectId: string, todoId: string) => {
        set((state) => {
          const project = state.projects.find(p => p.id === projectId);
          if (project) {
            project.todos = project.todos.filter(t => t.id !== todoId);
          }
        });
      },

      toggleTodo: (projectId: string, todoId: string) => {
        set((state) => {
          const project = state.projects.find(p => p.id === projectId);
          if (project) {
            const todo = project.todos.find(t => t.id === todoId);
            if (todo) {
              todo.completed = !todo.completed;
              todo.updatedAt = new Date();
            }
          }
        });
      },

      // 子任务相关操作 - 使用 Immer 直接修改
      addSubtask: (projectId: string, todoId: string, subtask: Omit<Subtask, 'id' | 'createdAt'>) => {
        set((state) => {
          const project = state.projects.find(p => p.id === projectId);
          if (project) {
            const todo = project.todos.find(t => t.id === todoId);
            if (todo) {
              const newSubtask: Subtask = {
                ...subtask,
                id: generateUniqueId(),
                createdAt: new Date(),
              };
              todo.subtasks.push(newSubtask);
              todo.updatedAt = new Date();
            }
          }
        });
      },

      updateSubtask: (projectId: string, todoId: string, subtaskId: string, updates: Partial<Subtask>) => {
        set((state) => {
          const project = state.projects.find(p => p.id === projectId);
          if (project) {
            const todo = project.todos.find(t => t.id === todoId);
            if (todo) {
              const subtask = todo.subtasks.find(s => s.id === subtaskId);
              if (subtask) {
                // 直接修改子任务属性
                if (updates.text) subtask.text = updates.text;
                if (updates.completed !== undefined) subtask.completed = updates.completed;
                todo.updatedAt = new Date();
              }
            }
          }
        });
      },

      deleteSubtask: (projectId: string, todoId: string, subtaskId: string) => {
        set((state) => {
          const project = state.projects.find(p => p.id === projectId);
          if (project) {
            const todo = project.todos.find(t => t.id === todoId);
            if (todo) {
              todo.subtasks = todo.subtasks.filter(s => s.id !== subtaskId);
              todo.updatedAt = new Date();
            }
          }
        });
      },

      toggleSubtask: (projectId: string, todoId: string, subtaskId: string) => {
        set((state) => {
          const project = state.projects.find(p => p.id === projectId);
          if (project) {
            const todo = project.todos.find(t => t.id === todoId);
            if (todo) {
              const subtask = todo.subtasks.find(s => s.id === subtaskId);
              if (subtask) {
                subtask.completed = !subtask.completed;
                todo.updatedAt = new Date();
              }
            }
          }
        });
      },

      // UI 状态操作 - 使用 Immer 直接修改
      setUIState: (updates: Partial<AppState['ui']>) => {
        set((state) => {
          if (updates.sidebarOpen !== undefined) state.ui.sidebarOpen = updates.sidebarOpen;
          if (updates.theme) state.ui.theme = updates.theme;
          if (updates.loading !== undefined) state.ui.loading = updates.loading;
          if (updates.error !== undefined) state.ui.error = updates.error;
        });
      },

      // 过滤器操作 - 使用 Immer 直接修改
      setFilters: (updates: Partial<AppState['filters']>) => {
        set((state) => {
          if (updates.todoStatus) state.filters.todoStatus = updates.todoStatus;
          if (updates.priority) state.filters.priority = updates.priority;
          if (updates.search !== undefined) state.filters.search = updates.search;
        });
      },

      // 重置状态 - 使用 Immer 直接修改
      resetState: () => {
        set((state) => {
          state.user = null;
          state.projects = [];
          state.currentProject = null;
          state.ui.sidebarOpen = false;
          state.ui.theme = 'light';
          state.ui.loading = false;
          state.ui.error = null;
          state.filters.todoStatus = 'all';
          state.filters.priority = 'all';
          state.filters.search = '';
        });
      },

      // 批量操作示例 - 使用 Immer 直接修改
      batchUpdateTodos: (projectId: string, updates: { todoId: string; updates: Partial<Todo> }[]) => {
        set((state) => {
          const project = state.projects.find(p => p.id === projectId);
          if (project) {
            updates.forEach(({ todoId, updates: todoUpdates }) => {
              const todo = project.todos.find(t => t.id === todoId);
              if (todo) {
                // 直接修改待办事项属性
                if (todoUpdates.text) todo.text = todoUpdates.text;
                if (todoUpdates.completed !== undefined) todo.completed = todoUpdates.completed;
                if (todoUpdates.priority) todo.priority = todoUpdates.priority;
                if (todoUpdates.tags) todo.tags = todoUpdates.tags;
                todo.updatedAt = new Date();
              }
            });
          }
        });
      },

      // 复杂嵌套更新示例 - 使用 Immer 直接修改
      updateUserProfile: (updates: Partial<User['profile']>) => {
        set((state) => {
          if (state.user) {
            if (updates.bio) state.user.profile.bio = updates.bio;
            if (updates.location) state.user.profile.location = updates.location;
            if (updates.website) state.user.profile.website = updates.website;
            if (updates.social) {
              if (updates.social.twitter) state.user.profile.social.twitter = updates.social.twitter;
              if (updates.social.github) state.user.profile.social.github = updates.social.github;
              if (updates.social.linkedin) state.user.profile.social.linkedin = updates.social.linkedin;
            }
          }
        });
      },

      updateUserPreferences: (updates: Partial<User['preferences']>) => {
        set((state) => {
          if (state.user) {
            if (updates.theme) state.user.preferences.theme = updates.theme;
            if (updates.language) state.user.preferences.language = updates.language;
            if (updates.notifications !== undefined) {
              state.user.preferences.notifications = updates.notifications;
            }
          }
        });
      },

      updateUserSocial: (updates: Partial<User['profile']['social']>) => {
        set((state) => {
          if (state.user) {
            if (updates.twitter) state.user.profile.social.twitter = updates.twitter;
            if (updates.github) state.user.profile.social.github = updates.github;
            if (updates.linkedin) state.user.profile.social.linkedin = updates.linkedin;
          }
        });
      },
    })),
    {
      name: 'immer-store',
    }
  )
);
`,at=`import React, { useState } from "react";
import { useImmerStore } from "../stores/immerStore";

// 模拟普通状态管理（不使用 Immer）
interface NormalState {
  projects: Array<{
    id: string;
    name: string;
    description: string;
    status: "active" | "inactive" | "completed";
    todos: Array<{
      id: string;
      text: string;
      completed: boolean;
      priority: "low" | "medium" | "high";
      tags: string[];
      subtasks: Array<{
        id: string;
        text: string;
        completed: boolean;
        createdAt: Date;
      }>;
      createdAt: Date;
      updatedAt: Date;
    }>;
    members: string[];
    createdAt: Date;
    updatedAt: Date;
  }>;
}

const PerformanceComparisonDemo: React.FC = () => {
  const {
    projects: immerProjects,
    addProject: immerAddProject,
    updateProject: immerUpdateProject,
    addTodo: immerAddTodo,
    batchUpdateTodos: immerBatchUpdateTodos,
    resetState,
  } = useImmerStore();

  // 普通状态管理（不使用 Immer）
  const [normalState, setNormalState] = useState<NormalState>({
    projects: [],
  });

  const [testResults, setTestResults] = useState<{
    immer: { time: number; count: number; type: string }[];
    normal: { time: number; count: number; type: string }[];
  }>({
    immer: [],
    normal: [],
  });
  const [isRunning, setIsRunning] = useState(false);
  const [currentTest, setCurrentTest] = useState<string>("");
  const [batchTestResults, setBatchTestResults] = useState<{
    immer: number | null;
    normal: number | null;
    operations: number;
  }>({ immer: null, normal: null, operations: 0 });
  const [complexTestResults, setComplexTestResults] = useState<{
    immer: number | null;
    normal: number | null;
    operations: number;
  }>({ immer: null, normal: null, operations: 0 });

  // 普通状态管理的操作方法
  const normalAddProject = (project: any) => {
    setNormalState((prev) => ({
      ...prev,
      projects: [
        ...prev.projects,
        { ...project, id: \`normal-\${Date.now()}-\${Math.random()}\` },
      ],
    }));
  };

  const normalUpdateProject = (id: string, updates: any) => {
    setNormalState((prev) => ({
      ...prev,
      projects: prev.projects.map((project) =>
        project.id === id ? { ...project, ...updates } : project
      ),
    }));
  };

  const normalAddTodo = (projectId: string, todo: any) => {
    setNormalState((prev) => ({
      ...prev,
      projects: prev.projects.map((project) =>
        project.id === projectId
          ? {
              ...project,
              todos: [
                ...project.todos,
                {
                  ...todo,
                  id: \`normal-todo-\${Date.now()}-\${Math.random()}\`,
                  createdAt: new Date(),
                  updatedAt: new Date(),
                },
              ],
            }
          : project
      ),
    }));
  };

  const normalBatchUpdateTodos = (
    projectId: string,
    updates: Array<{ todoId: string; updates: any }>
  ) => {
    setNormalState((prev) => ({
      ...prev,
      projects: prev.projects.map((project) =>
        project.id === projectId
          ? {
              ...project,
              todos: project.todos.map((todo) => {
                const update = updates.find((u) => u.todoId === todo.id);
                return update
                  ? { ...todo, ...update.updates, updatedAt: new Date() }
                  : todo;
              }),
            }
          : project
      ),
    }));
  };

  // 预热函数 - 让浏览器优化代码
  const warmup = async () => {
    // 创建一些测试数据来预热
    for (let i = 0; i < 10; i++) {
      immerAddProject({
        id: \`warmup-\${i}\`,
        name: \`预热项目 \${i}\`,
        description: \`预热描述 \${i}\`,
        status: "active",
        todos: [],
        members: [],
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }
    
    // 等待一下让状态更新
    await new Promise(resolve => setTimeout(resolve, 50));
    
    // 清理预热数据
    resetState();
    setNormalState({ projects: [] });
  };

  // 基础性能测试
  const runBasicPerformanceTest = async (
    testType: "immer" | "normal",
    operationCount: number
  ) => {
    const startTime = performance.now();

    setCurrentTest(\`\${testType} - \${operationCount} 次基础操作\`);

    for (let i = 0; i < operationCount; i++) {
      if (testType === "immer") {
        // 使用 Immer 的更新
        if (i % 2 === 0) {
          immerAddProject({
            id: \`immer-test-\${Date.now()}-\${i}\`,
            name: \`Immer测试项目 \${i}\`,
            description: \`这是第 \${i} 个Immer测试项目\`,
            status: "active",
            todos: [],
            members: [],
            createdAt: new Date(),
            updatedAt: new Date(),
          });
        } else {
          const projectId = immerProjects[0]?.id;
          if (projectId) {
            immerAddTodo(projectId, {
              text: \`Immer测试待办事项 \${i}\`,
              completed: false,
              priority: "medium",
              tags: [],
              subtasks: [],
            });
          }
        }
      } else {
        // 使用普通状态更新
        if (i % 2 === 0) {
          normalAddProject({
            name: \`普通测试项目 \${i}\`,
            description: \`这是第 \${i} 个普通测试项目\`,
            status: "active",
            todos: [],
            members: [],
            createdAt: new Date(),
            updatedAt: new Date(),
          });
        } else {
          const projectId = normalState.projects[0]?.id;
          if (projectId) {
            normalAddTodo(projectId, {
              text: \`普通测试待办事项 \${i}\`,
              completed: false,
              priority: "medium",
              tags: [],
              subtasks: [],
            });
          }
        }
      }

      // 添加小延迟以模拟真实场景
      if (i % 100 === 0) {
        await new Promise((resolve) => setTimeout(resolve, 1));
      }
    }

    const endTime = performance.now();
    const totalTime = endTime - startTime;

    setTestResults((prev) => ({
      ...prev,
      [testType]: [
        ...prev[testType],
        { time: totalTime, count: operationCount, type: "basic" },
      ],
    }));
  };

  // 批量操作测试 - 增加数据量
  const runBatchTest = async () => {
    setIsRunning(true);
    setCurrentTest("批量操作测试");

    // 预热
    await warmup();

    // 准备测试数据 - 增加数据量
    const testProjectId = \`batch-test-\${Date.now()}\`;
    const operationCount = 100; // 增加到 100 个操作

    // 为 Immer 创建测试项目
    immerAddProject({
      id: testProjectId,
      name: "Immer批量测试项目",
      description: "用于Immer批量测试的项目",
      status: "active",
      todos: [],
      members: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    // 为普通状态创建测试项目
    normalAddProject({
      name: "普通批量测试项目",
      description: "用于普通批量测试的项目",
      status: "active",
      todos: [],
      members: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    // 添加测试待办事项
    for (let i = 0; i < operationCount; i++) {
      immerAddTodo(testProjectId, {
        text: \`Immer批量测试待办事项 \${i}\`,
        completed: false,
        priority: "medium",
        tags: [],
        subtasks: [],
      });

      const normalProjectId =
        normalState.projects[normalState.projects.length - 1]?.id;
      if (normalProjectId) {
        normalAddTodo(normalProjectId, {
          text: \`普通批量测试待办事项 \${i}\`,
          completed: false,
          priority: "medium",
          tags: [],
          subtasks: [],
        });
      }
    }

    // 等待状态更新
    await new Promise((resolve) => setTimeout(resolve, 200));

    // 多次测试取平均值
    const testRounds = 3;
    let immerTotalTime = 0;
    let normalTotalTime = 0;

    for (let round = 0; round < testRounds; round++) {
      // 测试 Immer 批量更新
      const immerStartTime = performance.now();
      const immerBatchUpdates = Array.from({ length: operationCount }, (_, i) => ({
        todoId: \`immer-todo-\${i}\`,
        updates: {
          text: \`Immer批量更新 \${i} (轮次 \${round})\`,
          priority: (i % 2 === 0 ? "high" : "low") as "high" | "low",
          tags: [\`immer-tag-\${i}\`, \`round-\${round}\`],
        },
      }));
      immerBatchUpdateTodos(testProjectId, immerBatchUpdates);
      const immerEndTime = performance.now();
      immerTotalTime += immerEndTime - immerStartTime;

      // 测试普通批量更新
      const normalStartTime = performance.now();
      const normalProjectId =
        normalState.projects[normalState.projects.length - 1]?.id;
      if (normalProjectId) {
        const normalBatchUpdates = Array.from({ length: operationCount }, (_, i) => ({
          todoId: \`normal-todo-\${i}\`,
          updates: {
            text: \`普通批量更新 \${i} (轮次 \${round})\`,
            priority: (i % 2 === 0 ? "high" : "low") as "high" | "low",
            tags: [\`normal-tag-\${i}\`, \`round-\${round}\`],
          },
        }));
        normalBatchUpdateTodos(normalProjectId, normalBatchUpdates);
      }
      const normalEndTime = performance.now();
      normalTotalTime += normalEndTime - normalStartTime;

      // 轮次间等待
      await new Promise((resolve) => setTimeout(resolve, 50));
    }

    const immerAvgTime = immerTotalTime / testRounds;
    const normalAvgTime = normalTotalTime / testRounds;

    setBatchTestResults({ 
      immer: immerAvgTime, 
      normal: normalAvgTime, 
      operations: operationCount 
    });
    setIsRunning(false);
    setCurrentTest("");
  };

  // 复杂嵌套更新测试 - 增加数据量
  const runComplexUpdateTest = async () => {
    setIsRunning(true);
    setCurrentTest("复杂嵌套更新测试");

    // 预热
    await warmup();

    // 准备测试数据 - 增加数据量
    const immerProjectId = \`complex-immer-\${Date.now()}\`;
    const operationCount = 50; // 增加到 50 次操作

    // 为 Immer 创建测试项目
    immerAddProject({
      id: immerProjectId,
      name: "Immer复杂测试项目",
      description: "用于Immer复杂测试的项目",
      status: "active",
      todos: [],
      members: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    // 为普通状态创建测试项目
    normalAddProject({
      name: "普通复杂测试项目",
      description: "用于普通复杂测试的项目",
      status: "active",
      todos: [],
      members: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    // 添加测试待办事项
    for (let i = 0; i < 20; i++) {
      immerAddTodo(immerProjectId, {
        text: \`Immer复杂测试待办事项 \${i}\`,
        completed: false,
        priority: "medium",
        tags: [],
        subtasks: [],
      });

      const currentNormalProjectId =
        normalState.projects[normalState.projects.length - 1]?.id;
      if (currentNormalProjectId) {
        normalAddTodo(currentNormalProjectId, {
          text: \`普通复杂测试待办事项 \${i}\`,
          completed: false,
          priority: "medium",
          tags: [],
          subtasks: [],
        });
      }
    }

    // 等待状态更新
    await new Promise((resolve) => setTimeout(resolve, 200));

    // 多次测试取平均值
    const testRounds = 3;
    let immerTotalTime = 0;
    let normalTotalTime = 0;

    for (let round = 0; round < testRounds; round++) {
      // 测试 Immer 复杂更新
      const immerStartTime = performance.now();
      for (let i = 0; i < operationCount; i++) {
        // 更新项目信息
        immerUpdateProject(immerProjectId, {
          name: \`Immer更新后的项目 \${i} (轮次 \${round})\`,
          description: \`这是第 \${i} 次Immer更新 (轮次 \${round})\`,
          updatedAt: new Date(),
        });

        // 添加待办事项
        immerAddTodo(immerProjectId, {
          text: \`Immer复杂更新测试 \${i} (轮次 \${round})\`,
          completed: false,
          priority: "high",
          tags: [\`immer-tag-\${i}\`, "test", \`round-\${round}\`],
          subtasks: [],
        });
      }
      const immerEndTime = performance.now();
      immerTotalTime += immerEndTime - immerStartTime;

      // 测试普通复杂更新
      const normalStartTime = performance.now();
      const currentNormalProjectId =
        normalState.projects[normalState.projects.length - 1]?.id;
      if (currentNormalProjectId) {
        for (let i = 0; i < operationCount; i++) {
          // 更新项目信息
          normalUpdateProject(currentNormalProjectId, {
            name: \`普通更新后的项目 \${i} (轮次 \${round})\`,
            description: \`这是第 \${i} 次普通更新 (轮次 \${round})\`,
            updatedAt: new Date(),
          });

          // 添加待办事项
          normalAddTodo(currentNormalProjectId, {
            text: \`普通复杂更新测试 \${i} (轮次 \${round})\`,
            completed: false,
            priority: "high",
            tags: [\`normal-tag-\${i}\`, "test", \`round-\${round}\`],
            subtasks: [],
          });
        }
      }
      const normalEndTime = performance.now();
      normalTotalTime += normalEndTime - normalStartTime;

      // 轮次间等待
      await new Promise((resolve) => setTimeout(resolve, 50));
    }

    const immerAvgTime = immerTotalTime / testRounds;
    const normalAvgTime = normalTotalTime / testRounds;

    setComplexTestResults({ 
      immer: immerAvgTime, 
      normal: normalAvgTime, 
      operations: operationCount * 2 // 每次循环包含 2 个操作
    });
    setIsRunning(false);
    setCurrentTest("");
  };

  // 运行所有基础性能测试
  const runAllBasicTests = async () => {
    setIsRunning(true);
    setTestResults({ immer: [], normal: [] });

    // 预热
    await warmup();

    const testCounts = [100, 250, 500]; // 增加测试数量

    for (const count of testCounts) {
      // 测试 Immer
      await runBasicPerformanceTest("immer", count);
      await new Promise((resolve) => setTimeout(resolve, 200));

      // 测试普通更新
      await runBasicPerformanceTest("normal", count);
      await new Promise((resolve) => setTimeout(resolve, 200));
    }

    setIsRunning(false);
    setCurrentTest("");
  };

  // 重置测试数据
  const resetTestData = () => {
    resetState();
    setNormalState({ projects: [] });
    setTestResults({ immer: [], normal: [] });
    setBatchTestResults({ immer: null, normal: null, operations: 0 });
    setComplexTestResults({ immer: null, normal: null, operations: 0 });
  };

  // 计算平均性能
  const getAverageTime = (
    results: { time: number; count: number; type: string }[]
  ) => {
    if (results.length === 0) return 0;
    return (
      results.reduce((sum, result) => sum + result.time, 0) / results.length
    );
  };

  const getAverageOpsPerSecond = (
    results: { time: number; count: number; type: string }[]
  ) => {
    if (results.length === 0) return 0;
    return (
      results.reduce(
        (sum, result) => sum + result.count / (result.time / 1000),
        0
      ) / results.length
    );
  };

  // 计算性能提升百分比
  const getPerformanceImprovement = (immerTime: number, normalTime: number) => {
    if (normalTime === 0) return 0;
    return ((normalTime - immerTime) / normalTime) * 100;
  };

  return (
    <div className="space-y-6">
      {/* 测试控制面板 */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">性能对比测试控制面板</h3>
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={runAllBasicTests}
              disabled={isRunning}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
            >
              {isRunning ? "测试中..." : "运行基础性能测试"}
            </button>
            <button
              onClick={runBatchTest}
              disabled={isRunning}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:opacity-50"
            >
              批量操作对比测试
            </button>
            <button
              onClick={runComplexUpdateTest}
              disabled={isRunning}
              className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 disabled:opacity-50"
            >
              复杂更新对比测试
            </button>
            <button
              onClick={resetTestData}
              disabled={isRunning}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 disabled:opacity-50"
            >
              重置测试数据
            </button>
          </div>

          {isRunning && (
            <div className="bg-yellow-50 border border-yellow-200 rounded p-4">
              <p className="text-yellow-800">正在运行测试: {currentTest}</p>
            </div>
          )}
        </div>
      </div>

      {/* 测试操作说明 */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">测试操作详细说明</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-green-50 p-4 rounded">
            <h4 className="font-medium text-green-800 mb-2">批量操作测试</h4>
            <div className="text-sm text-green-700 space-y-2">
              <p><strong>准备阶段：</strong></p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>创建 1 个测试项目</li>
                <li>添加 100 个待办事项到项目</li>
              </ul>
              <p><strong>测试阶段：</strong></p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>同时更新 100 个待办事项的以下属性：</li>
                <li>• text: 更新为 "批量更新 [序号]"</li>
                <li>• priority: 交替设置为 "high" 或 "low"</li>
                <li>• tags: 添加新标签 "tag-[序号]"</li>
                <li>• updatedAt: 更新为当前时间</li>
                <li>• 进行 3 轮测试取平均值</li>
              </ul>
              <p><strong>测量：</strong>批量更新 100 个待办事项的平均耗时</p>
            </div>
          </div>
          <div className="bg-purple-50 p-4 rounded">
            <h4 className="font-medium text-purple-800 mb-2">复杂更新测试</h4>
            <div className="text-sm text-purple-700 space-y-2">
              <p><strong>准备阶段：</strong></p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>创建 1 个测试项目</li>
                <li>添加 20 个初始待办事项</li>
              </ul>
              <p><strong>测试阶段（循环 50 次）：</strong></p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>更新项目信息：</li>
                <li>• name: 更新为 "更新后的项目 [序号]"</li>
                <li>• description: 更新为 "这是第 [序号] 次更新"</li>
                <li>• updatedAt: 更新为当前时间</li>
                <li>添加新待办事项：</li>
                <li>• text: "复杂更新测试 [序号]"</li>
                <li>• priority: "high"</li>
                <li>• tags: ["tag-[序号]", "test"]</li>
                <li>• 进行 3 轮测试取平均值</li>
              </ul>
              <p><strong>测量：</strong>50 次项目更新 + 50 次待办事项添加的平均耗时</p>
            </div>
          </div>
        </div>
      </div>

      {/* 批量测试结果对比 */}
      {batchTestResults.immer !== null && batchTestResults.normal !== null && (
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">批量操作测试结果对比</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-4 rounded">
              <h4 className="font-medium text-green-800 mb-2">
                Immer 批量更新
              </h4>
              <p className="text-green-700">
                <strong>耗时:</strong> {batchTestResults.immer.toFixed(2)}ms
              </p>
              <p className="text-sm text-green-600">
                平均每个操作: {(batchTestResults.immer / batchTestResults.operations).toFixed(2)}ms
              </p>
              <p className="text-sm text-green-600">
                操作数量: {batchTestResults.operations} 个待办事项
              </p>
            </div>
            <div className="bg-blue-50 p-4 rounded">
              <h4 className="font-medium text-blue-800 mb-2">普通批量更新</h4>
              <p className="text-blue-700">
                <strong>耗时:</strong> {batchTestResults.normal.toFixed(2)}ms
              </p>
              <p className="text-sm text-blue-600">
                平均每个操作: {(batchTestResults.normal / batchTestResults.operations).toFixed(2)}ms
              </p>
              <p className="text-sm text-blue-600">
                操作数量: {batchTestResults.operations} 个待办事项
              </p>
            </div>
          </div>
          <div className="mt-4 p-4 bg-gray-50 rounded">
            <h4 className="font-medium mb-2">性能对比结果</h4>
            <p className="text-lg">
              {batchTestResults.immer < batchTestResults.normal ? (
                <span className="text-green-600">
                  Immer 比普通更新快{" "}
                  {getPerformanceImprovement(
                    batchTestResults.immer,
                    batchTestResults.normal
                  ).toFixed(1)}
                  %
                </span>
              ) : (
                <span className="text-red-600">
                  普通更新比 Immer 快{" "}
                  {getPerformanceImprovement(
                    batchTestResults.normal,
                    batchTestResults.immer
                  ).toFixed(1)}
                  %
                </span>
              )}
            </p>
            <p className="text-sm text-gray-600 mt-2">
              基于 {batchTestResults.operations} 个操作的 3 轮测试平均值
            </p>
          </div>
        </div>
      )}

      {/* 复杂更新测试结果对比 */}
      {complexTestResults.immer !== null &&
        complexTestResults.normal !== null && (
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">复杂更新测试结果对比</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-4 rounded">
                <h4 className="font-medium text-green-800 mb-2">
                  Immer 复杂更新
                </h4>
                <p className="text-green-700">
                  <strong>耗时:</strong> {complexTestResults.immer.toFixed(2)}ms
                </p>
                <p className="text-sm text-green-600">
                  平均每个操作: {(complexTestResults.immer / complexTestResults.operations).toFixed(2)}ms
                </p>
                <p className="text-sm text-green-600">
                  操作数量: {complexTestResults.operations} 个操作
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded">
                <h4 className="font-medium text-blue-800 mb-2">普通复杂更新</h4>
                <p className="text-blue-700">
                  <strong>耗时:</strong> {complexTestResults.normal.toFixed(2)}
                  ms
                </p>
                <p className="text-sm text-blue-600">
                  平均每个操作: {(complexTestResults.normal / complexTestResults.operations).toFixed(2)}ms
                </p>
                <p className="text-sm text-blue-600">
                  操作数量: {complexTestResults.operations} 个操作
                </p>
              </div>
            </div>
            <div className="mt-4 p-4 bg-gray-50 rounded">
              <h4 className="font-medium mb-2">性能对比结果</h4>
              <p className="text-lg">
                {complexTestResults.immer < complexTestResults.normal ? (
                  <span className="text-green-600">
                    Immer 比普通更新快{" "}
                    {getPerformanceImprovement(
                      complexTestResults.immer,
                      complexTestResults.normal
                    ).toFixed(1)}
                    %
                  </span>
                ) : (
                  <span className="text-red-600">
                    普通更新比 Immer 快{" "}
                    {getPerformanceImprovement(
                      complexTestResults.normal,
                      complexTestResults.immer
                    ).toFixed(1)}
                    %
                  </span>
                )}
              </p>
              <p className="text-sm text-gray-600 mt-2">
                基于 {complexTestResults.operations} 个操作的 3 轮测试平均值
              </p>
            </div>
          </div>
        )}

      {/* 基础性能对比结果 */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">基础性能对比结果</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-green-600 mb-2">Immer 性能</h4>
            <div className="space-y-2">
              <p>平均耗时: {getAverageTime(testResults.immer).toFixed(2)}ms</p>
              <p>
                平均操作/秒:{" "}
                {getAverageOpsPerSecond(testResults.immer).toFixed(0)}
              </p>
              <p>测试次数: {testResults.immer.length}</p>
            </div>
          </div>
          <div>
            <h4 className="font-medium text-blue-600 mb-2">普通更新性能</h4>
            <div className="space-y-2">
              <p>平均耗时: {getAverageTime(testResults.normal).toFixed(2)}ms</p>
              <p>
                平均操作/秒:{" "}
                {getAverageOpsPerSecond(testResults.normal).toFixed(0)}
              </p>
              <p>测试次数: {testResults.normal.length}</p>
            </div>
          </div>
        </div>

        {testResults.immer.length > 0 && testResults.normal.length > 0 && (
          <div className="mt-4 p-4 bg-gray-50 rounded">
            <h4 className="font-medium mb-2">总体性能对比</h4>
            <p className="text-lg">
              {getAverageTime(testResults.immer) <
              getAverageTime(testResults.normal) ? (
                <span className="text-green-600">
                  Immer 平均比普通更新快{" "}
                  {getPerformanceImprovement(
                    getAverageTime(testResults.immer),
                    getAverageTime(testResults.normal)
                  ).toFixed(1)}
                  %
                </span>
              ) : (
                <span className="text-red-600">
                  普通更新平均比 Immer 快{" "}
                  {getPerformanceImprovement(
                    getAverageTime(testResults.normal),
                    getAverageTime(testResults.immer)
                  ).toFixed(1)}
                  %
                </span>
              )}
            </p>
          </div>
        )}
      </div>

      {/* 详细测试结果表格 */}
      {testResults.immer.length > 0 && (
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">详细测试结果对比</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    操作次数
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    Immer 耗时 (ms)
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    普通更新耗时 (ms)
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    性能差异
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    提升百分比
                  </th>
                </tr>
              </thead>
              <tbody>
                {testResults.immer.map((immerResult, index) => {
                  const normalResult = testResults.normal[index];
                  const improvement = normalResult
                    ? getPerformanceImprovement(
                        immerResult.time,
                        normalResult.time
                      )
                    : 0;

                  return (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    >
                      <td className="border border-gray-300 px-4 py-2">
                        {immerResult.count}
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-green-600">
                        {immerResult.time.toFixed(2)}
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-blue-600">
                        {normalResult?.time.toFixed(2) || "N/A"}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {normalResult ? (
                          immerResult.time < normalResult.time ? (
                            <span className="text-green-600">
                              Immer 快{" "}
                              {(normalResult.time - immerResult.time).toFixed(
                                2
                              )}
                              ms
                            </span>
                          ) : (
                            <span className="text-red-600">
                              普通更新快{" "}
                              {(immerResult.time - normalResult.time).toFixed(
                                2
                              )}
                              ms
                            </span>
                          )
                        ) : (
                          "N/A"
                        )}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {improvement > 0 ? (
                          <span className="text-green-600">
                            +{improvement.toFixed(1)}%
                          </span>
                        ) : (
                          <span className="text-red-600">
                            {improvement.toFixed(1)}%
                          </span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* 性能分析说明 */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">性能分析说明</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-green-50 p-4 rounded">
            <h4 className="font-medium text-green-800 mb-2">Immer 优势</h4>
            <ul className="text-sm text-green-700 space-y-1">
              <li>• 不可变数据结构，避免意外修改</li>
              <li>• 结构共享，减少内存占用</li>
              <li>• 简化复杂嵌套状态更新</li>
              <li>• 更好的调试体验</li>
              <li>• 自动优化更新操作</li>
            </ul>
          </div>
          <div className="bg-blue-50 p-4 rounded">
            <h4 className="font-medium text-blue-800 mb-2">测试改进</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• 增加了测试数据量（100-500 个操作）</li>
              <li>• 进行 3 轮测试取平均值</li>
              <li>• 添加预热机制减少首次运行影响</li>
              <li>• 更真实的测试场景</li>
              <li>• 显示具体的操作数量</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceComparisonDemo;
`,be=`// Immer 集成相关类型定义

// 用户信息接口
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  preferences: {
    theme: 'light' | 'dark';
    language: string;
    notifications: boolean;
  };
  profile: {
    bio: string;
    location: string;
    website: string;
    social: {
      twitter?: string;
      github?: string;
      linkedin?: string;
    };
  };
}

// 待办事项接口
export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
  subtasks: Subtask[];
}

// 子任务接口
export interface Subtask {
  id: string;
  text: string;
  completed: boolean;
  createdAt: Date;
}

// 项目接口
export interface Project {
  id: string;
  name: string;
  description: string;
  status: 'active' | 'completed' | 'archived';
  todos: Todo[];
  members: string[];
  createdAt: Date;
  updatedAt: Date;
}

// 应用状态接口
export interface AppState {
  user: User | null;
  projects: Project[];
  currentProject: string | null;
  ui: {
    sidebarOpen: boolean;
    theme: 'light' | 'dark';
    loading: boolean;
    error: string | null;
  };
  filters: {
    todoStatus: 'all' | 'active' | 'completed';
    priority: 'all' | 'low' | 'medium' | 'high';
    search: string;
  };
}

// 操作类型
export type AppAction = 
  | { type: 'SET_USER'; payload: User }
  | { type: 'UPDATE_USER'; payload: Partial<User> }
  | { type: 'ADD_PROJECT'; payload: Project }
  | { type: 'UPDATE_PROJECT'; payload: { id: string; updates: Partial<Project> } }
  | { type: 'DELETE_PROJECT'; payload: string }
  | { type: 'SET_CURRENT_PROJECT'; payload: string | null }
  | { type: 'ADD_TODO'; payload: { projectId: string; todo: Omit<Todo, 'id' | 'createdAt' | 'updatedAt'> } }
  | { type: 'UPDATE_TODO'; payload: { projectId: string; todoId: string; updates: Partial<Todo> } }
  | { type: 'DELETE_TODO'; payload: { projectId: string; todoId: string } }
  | { type: 'TOGGLE_TODO'; payload: { projectId: string; todoId: string } }
  | { type: 'ADD_SUBTASK'; payload: { projectId: string; todoId: string; subtask: Omit<Subtask, 'id' | 'createdAt'> } }
  | { type: 'UPDATE_SUBTASK'; payload: { projectId: string; todoId: string; subtaskId: string; updates: Partial<Subtask> } }
  | { type: 'DELETE_SUBTASK'; payload: { projectId: string; todoId: string; subtaskId: string } }
  | { type: 'TOGGLE_SUBTASK'; payload: { projectId: string; todoId: string; subtaskId: string } }
  | { type: 'SET_UI_STATE'; payload: Partial<AppState['ui']> }
  | { type: 'SET_FILTERS'; payload: Partial<AppState['filters']> }
  | { type: 'RESET_STATE' };

// Immer 配置
export interface ImmerConfig {
  enablePatches: boolean;
  enableAutoFreeze: boolean;
  enableMapSet: boolean;
}

// 性能统计
export interface PerformanceStats {
  updateCount: number;
  lastUpdateTime: number;
  averageUpdateTime: number;
  immerEnabled: boolean;
}
`,mt=()=>e.jsx(Me,{title:"Immer 集成",description:"演示如何在 Zustand 中集成 Immer，简化复杂嵌套状态的更新操作，提供更直观的不可变数据操作体验。",overview:[{title:"核心概念",items:["使用 zustand/middleware/immer 中间件","支持直接修改嵌套对象和数组","自动处理不可变数据结构转换","保持结构共享，减少内存占用","简化复杂状态更新逻辑","提供直观的 mutable API","与现有 Zustand 功能完美兼容"]},{title:"主要优势",items:["大幅简化嵌套状态更新代码","减少样板代码和错误率","提供直观的 mutable 操作体验","自动处理不可变数据结构","保持结构共享，优化性能","更好的代码可读性和可维护性","与 Redux DevTools 完美集成"]},{title:"适用场景",items:["复杂的嵌套状态结构","需要频繁更新深层对象","表单状态管理","购物车和用户偏好设置","项目管理和任务跟踪","需要不可变性的应用","团队协作开发"]},{title:"注意事项",items:["理解 Immer 的工作原理","避免在 Immer 内部使用不可变操作","注意性能影响和内存使用","合理选择使用场景","保持代码的一致性和可读性","考虑团队的学习成本"]}],examples:[{title:"基础 Immer 使用",component:e.jsx(nt,{}),description:"演示基本的 Immer 集成，包括用户信息、项目管理和待办事项的简单更新操作。",observationPoints:["观察用户信息的直接修改操作","体验项目管理的嵌套状态更新","查看待办事项和子任务的管理","注意状态更新的简洁性","观察 UI 状态和过滤器的更新"],keyPoints:["使用 immer 中间件包装 store","支持直接修改嵌套对象","自动处理不可变数据结构","简化复杂状态更新逻辑","保持代码的可读性"],commonTraps:["在 Immer 内部使用不可变操作","忘记处理数组和对象的更新","过度使用 Immer 导致性能问题","不理解 Immer 的工作原理"],solutions:["在 Immer 内部使用 mutable 操作","直接修改数组和对象属性","合理选择使用场景","学习 Immer 的核心概念"],preCode:[{title:"类型定义",code:be},{title:"Immer Store",code:fe}],codeExample:{title:"基础 Immer 演示",code:ot}},{title:"复杂嵌套更新",component:e.jsx(st,{}),description:"演示复杂的嵌套状态更新，包括用户配置、项目管理和批量操作。",observationPoints:["观察用户信息的复杂更新操作","体验批量项目更新功能","查看待办事项的复杂修改","注意深层嵌套对象的更新","观察批量操作的效果"],keyPoints:["支持深层嵌套对象的直接修改","提供批量更新操作","简化复杂状态更新逻辑","保持代码的可读性","自动处理不可变数据结构"],commonTraps:["复杂更新逻辑难以理解","批量操作性能问题","深层嵌套更新错误","状态更新不一致"],solutions:["使用 Immer 简化复杂更新","合理设计批量操作","仔细处理嵌套结构","保持状态更新的一致性"],preCode:[{title:"类型定义",code:be},{title:"Immer Store",code:fe}],codeExample:{title:"复杂嵌套更新演示",code:it}},{title:"性能对比分析",component:e.jsx(rt,{}),description:"对比 Immer 和普通状态更新的性能差异，分析适用场景和优化建议。",observationPoints:["运行性能测试观察结果","对比不同操作次数的性能","查看批量操作的性能表现","分析复杂更新的性能影响","了解性能优化建议"],keyPoints:["Immer 的性能特点分析","不同场景下的性能表现","批量操作的优势","复杂更新的性能影响","性能优化建议"],commonTraps:["过度使用 Immer 导致性能问题","不理解 Immer 的性能特点","忽略批量操作的重要性","没有考虑性能优化"],solutions:["合理选择使用场景","了解 Immer 的性能特点","使用批量操作优化性能","定期进行性能测试"],preCode:[{title:"类型定义",code:be},{title:"Immer Store",code:fe}],codeExample:{title:"性能对比演示",code:at}}],tutorial:{concepts:["Immer 中间件集成与配置","不可变数据结构的自动处理","嵌套状态更新的简化操作","结构共享和性能优化","与 Zustand 的完美结合"],steps:["安装和配置 Immer 中间件","设计复杂的状态结构","使用 mutable API 更新状态","处理数组和对象的更新","优化性能和内存使用","集成调试和开发工具"],tips:["在 Immer 内部使用 mutable 操作","合理设计状态结构避免过度嵌套","使用批量操作优化性能","定期进行性能测试和优化","保持代码的一致性和可读性","学习 Immer 的最佳实践"]},interview:{questions:[{question:"如何在 Zustand 中集成 Immer？",answer:"使用 zustand/middleware/immer 中间件包装 store，在更新函数中直接修改状态对象，Immer 会自动处理不可变数据结构转换。"},{question:"Immer 相比普通状态更新有什么优势？",answer:"简化嵌套状态更新代码，减少样板代码，提供直观的 mutable 操作体验，自动处理不可变数据结构，保持结构共享优化性能。"},{question:"什么时候应该使用 Immer？",answer:"复杂嵌套状态结构、频繁更新深层对象、表单状态管理、需要不可变性的应用、团队协作开发等场景。"},{question:"如何优化 Immer 的性能？",answer:"合理选择使用场景，避免过度使用，使用批量操作，定期进行性能测试，保持状态结构的简洁性。"}],keyPoints:["Immer 中间件集成与配置","嵌套状态更新的简化操作","性能优化和最佳实践","适用场景和注意事项"]},bestPractices:{dos:["在 Immer 内部使用 mutable 操作","合理设计状态结构","使用批量操作优化性能","保持代码的一致性和可读性","定期进行性能测试","学习 Immer 的最佳实践"],donts:["不要在 Immer 内部使用不可变操作","不要过度使用 Immer","不要忽略性能影响","不要忽视代码的可维护性"],patterns:["Immer 中间件 + 复杂状态结构","批量操作 + 性能优化","嵌套更新 + 代码简化","结构共享 + 内存优化"]}});export{mt as default};
