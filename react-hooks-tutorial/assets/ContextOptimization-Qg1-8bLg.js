import{r as o,s as R,j as e}from"./index-nevtk0dH.js";import{C as H}from"./ComponentTemplate-CQT_cNgc.js";const h={user:{id:1,name:"John Doe",email:"john@example.com"},theme:"light",notifications:{count:5,enabled:!0}},f=Symbol(),W=Symbol(),J=typeof window>"u"||/ServerSideRendering/.test(window.navigator&&window.navigator.userAgent),z=J?o.useEffect:o.useLayoutEffect,$=R.unstable_runWithPriority?t=>{try{R.unstable_runWithPriority(R.unstable_NormalPriority,t)}catch(s){if(s.message==="Not implemented.")t();else throw s}}:t=>t(),G=t=>({value:n,children:r})=>{const u=o.useRef(n),d=o.useRef(0),[l,m]=o.useState(null);l&&(l(n),m(null));const c=o.useRef();if(!c.current){const i=new Set,a=(N,A)=>{d.current+=1;const S={n:d.current};A!=null&&A.suspense&&(S.n*=-1,S.p=new Promise(k=>{m(()=>U=>{S.v=U,delete S.p,k(U)})})),i.forEach(k=>k(S)),N()};c.current={[f]:{v:u,n:d,l:i,u:a}}}return z(()=>{u.current=n,d.current+=1,$(()=>{c.current[f].l.forEach(i=>{i({n:d.current,v:n})})})},[n]),o.createElement(t,{value:c.current},r)};function y(t){const s=o.createContext({[f]:{v:{current:t},n:{current:-1},l:new Set,u:n=>n()}});return s[W]=s.Provider,s.Provider=G(s.Provider),delete s.Consumer,s}function p(t,s){const n=o.useContext(t)[f],{v:{current:r},n:{current:u},l:d}=n,l=s(r),[m,c]=o.useReducer((i,a)=>{if(!a)return[r,l];if("p"in a)throw a.p;if(a.n===u)return Object.is(i[1],l)?i:[r,l];try{if("v"in a){if(Object.is(i[0],a.v))return i;const N=s(a.v);return Object.is(i[1],N)?i:[a.v,N]}}catch{}return[...i]},[r,l]);return Object.is(m[1],l)||c(),z(()=>(d.add(c),()=>{d.delete(c)}),[d]),m[1]}const v=y(null);let b={provider:0,consumer:0};const X=({children:t})=>{const[s,n]=o.useState(h),c={state:s,actions:{updateUser:i=>{n(a=>({...a,user:{...a.user,...i}}))},updateTheme:i=>{n(a=>({...a,theme:i}))},updateNotifications:i=>{n(a=>({...a,notifications:{...a.notifications,...i}}))},resetState:()=>{n(h)}}};return b.provider++,e.jsx(v.Provider,{value:c,children:t})},Z=({children:t})=>{const[s,n]=o.useState(h),r=o.useCallback(i=>{n(a=>({...a,user:{...a.user,...i}}))},[]),u=o.useCallback(i=>{n(a=>({...a,theme:i}))},[]),d=o.useCallback(i=>{n(a=>({...a,notifications:{...a.notifications,...i}}))},[]),l=o.useCallback(()=>{n(h)},[]),m=o.useMemo(()=>({updateUser:r,updateTheme:u,updateNotifications:d,resetState:l}),[r,u,d,l]),c=o.useMemo(()=>({state:s,actions:m}),[s,m]);return b.provider++,e.jsx(v.Provider,{value:c,children:t})},Q=()=>{const t=p(v,n=>n==null?void 0:n.state),s=p(v,n=>n==null?void 0:n.actions);if(!t||!s)throw new Error("BasicConsumerComponent must be used within BasicAppProvider");return b.consumer++,e.jsxs("div",{className:"p-4 border rounded-lg bg-red-50 border-red-200",children:[e.jsxs("h4",{className:"font-semibold text-red-800 mb-3",children:["未优化版本 (渲染次数: ",b.consumer,")"]}),e.jsxs("div",{className:"space-y-2 text-sm",children:[e.jsxs("div",{children:[e.jsx("strong",{children:"用户:"})," ",t.user.name," (",t.user.email,")"]}),e.jsxs("div",{children:[e.jsx("strong",{children:"主题:"})," ",t.theme]}),e.jsxs("div",{children:[e.jsx("strong",{children:"通知:"})," ",t.notifications.count," 条 (",t.notifications.enabled?"开启":"关闭",")"]})]}),e.jsxs("div",{className:"mt-3 space-x-2",children:[e.jsx("button",{onClick:()=>s.updateUser({name:"张三"}),className:"px-2 py-1 bg-red-500 text-white rounded text-xs hover:bg-red-600",children:"更新用户"}),e.jsx("button",{onClick:()=>s.updateTheme(t.theme==="light"?"dark":"light"),className:"px-2 py-1 bg-red-500 text-white rounded text-xs hover:bg-red-600",children:"切换主题"}),e.jsx("button",{onClick:()=>s.updateNotifications({count:t.notifications.count+1}),className:"px-2 py-1 bg-red-500 text-white rounded text-xs hover:bg-red-600",children:"增加通知"})]})]})},K=o.memo(()=>{const t=p(v,n=>n==null?void 0:n.state),s=p(v,n=>n==null?void 0:n.actions);if(!t||!s)throw new Error("OptimizedConsumerComponent must be used within OptimizedAppProvider");return b.consumer++,e.jsxs("div",{className:"p-4 border rounded-lg bg-green-50 border-green-200",children:[e.jsxs("h4",{className:"font-semibold text-green-800 mb-3",children:["优化版本 (渲染次数: ",b.consumer,")"]}),e.jsxs("div",{className:"space-y-2 text-sm",children:[e.jsxs("div",{children:[e.jsx("strong",{children:"用户:"})," ",t.user.name," (",t.user.email,")"]}),e.jsxs("div",{children:[e.jsx("strong",{children:"主题:"})," ",t.theme]}),e.jsxs("div",{children:[e.jsx("strong",{children:"通知:"})," ",t.notifications.count," 条 (",t.notifications.enabled?"开启":"关闭",")"]})]}),e.jsxs("div",{className:"mt-3 space-x-2",children:[e.jsx("button",{onClick:()=>s.updateUser({name:"李四"}),className:"px-2 py-1 bg-green-500 text-white rounded text-xs hover:bg-green-600",children:"更新用户"}),e.jsx("button",{onClick:()=>s.updateTheme(t.theme==="light"?"dark":"light"),className:"px-2 py-1 bg-green-500 text-white rounded text-xs hover:bg-green-600",children:"切换主题"}),e.jsx("button",{onClick:()=>s.updateNotifications({count:t.notifications.count+1}),className:"px-2 py-1 bg-green-500 text-white rounded text-xs hover:bg-green-600",children:"增加通知"})]})]})});K.displayName="OptimizedConsumerComponent";const Y=Q,ee=K,te=()=>{b={provider:0,consumer:0}},g=y(null),T=y(null);let C={provider:0,consumer:0,stateConsumer:0,actionsConsumer:0};const ne=({children:t})=>{const[s,n]=o.useState(h),r=o.useCallback(c=>{n(i=>({...i,user:{...i.user,...c}}))},[]),u=o.useCallback(c=>{n(i=>({...i,theme:c}))},[]),d=o.useCallback(c=>{n(i=>({...i,notifications:{...i.notifications,...c}}))},[]),l=o.useCallback(()=>{n(h)},[]),m=o.useMemo(()=>({updateUser:r,updateTheme:u,updateNotifications:d,resetState:l}),[r,u,d,l]);return C.provider++,e.jsx(g.Provider,{value:s,children:e.jsx(T.Provider,{value:m,children:t})})},D=o.memo(()=>{const t=p(g,r=>r==null?void 0:r.user),s=p(g,r=>r==null?void 0:r.theme),n=p(g,r=>r==null?void 0:r.notifications);if(!t||!s||!n)throw new Error("StateOnlyConsumerComponent must be used within SeparatedAppProvider");return C.stateConsumer=(C.stateConsumer||0)+1,e.jsxs("div",{className:"p-4 border rounded-lg bg-blue-50 border-blue-200",children:[e.jsxs("h4",{className:"font-semibold text-blue-800 mb-3",children:["只读状态组件 (渲染次数: ",C.stateConsumer,")"]}),e.jsxs("div",{className:"space-y-2 text-sm",children:[e.jsxs("div",{children:[e.jsx("strong",{children:"用户:"})," ",t.name," (",t.email,")"]}),e.jsxs("div",{children:[e.jsx("strong",{children:"主题:"})," ",s]}),e.jsxs("div",{children:[e.jsx("strong",{children:"通知:"})," ",n.count," 条 (",n.enabled?"开启":"关闭",")"]})]}),e.jsx("p",{className:"text-xs text-blue-600 mt-2",children:"💡 此组件只消费状态，不会因操作函数变化而重新渲染"})]})});D.displayName="StateOnlyConsumerComponent";const V=o.memo(()=>{const t=p(T,s=>s);if(!t)throw new Error("ActionsOnlyConsumerComponent must be used within SeparatedAppProvider");return C.actionsConsumer=(C.actionsConsumer||0)+1,e.jsxs("div",{className:"p-4 border rounded-lg bg-purple-50 border-purple-200",children:[e.jsxs("h4",{className:"font-semibold text-purple-800 mb-3",children:["操作组件 (渲染次数: ",C.actionsConsumer,")"]}),e.jsxs("div",{className:"space-x-2",children:[e.jsx("button",{onClick:()=>t.updateUser({name:"王五"}),className:"px-2 py-1 bg-purple-500 text-white rounded text-xs hover:bg-purple-600",children:"更新用户"}),e.jsx("button",{onClick:()=>t.updateTheme("dark"),className:"px-2 py-1 bg-purple-500 text-white rounded text-xs hover:bg-purple-600",children:"切换主题"}),e.jsx("button",{onClick:()=>t.updateNotifications({count:10}),className:"px-2 py-1 bg-purple-500 text-white rounded text-xs hover:bg-purple-600",children:"设置通知"})]}),e.jsx("p",{className:"text-xs text-purple-600 mt-2",children:"💡 此组件只消费操作，很少重新渲染，性能更好"})]})});V.displayName="ActionsOnlyConsumerComponent";const F=o.memo(()=>{const t=p(g,r=>r==null?void 0:r.user),s=p(g,r=>r==null?void 0:r.theme),n=p(T,r=>r);if(!t||!s||!n)throw new Error("MixedConsumerComponent must be used within SeparatedAppProvider");return C.consumer++,e.jsxs("div",{className:"p-4 border rounded-lg bg-gray-50 border-gray-200",children:[e.jsxs("h4",{className:"font-semibold text-gray-800 mb-3",children:["混合组件 (渲染次数: ",C.consumer,")"]}),e.jsxs("div",{className:"space-y-2 text-sm mb-3",children:[e.jsxs("div",{children:[e.jsx("strong",{children:"用户:"})," ",t.name]}),e.jsxs("div",{children:[e.jsx("strong",{children:"主题:"})," ",s]})]}),e.jsxs("div",{className:"space-x-2",children:[e.jsx("button",{onClick:()=>n.updateUser({name:"赵六"}),className:"px-2 py-1 bg-gray-500 text-white rounded text-xs hover:bg-gray-600",children:"更新用户"}),e.jsx("button",{onClick:()=>n.updateTheme(s==="light"?"dark":"light"),className:"px-2 py-1 bg-gray-500 text-white rounded text-xs hover:bg-gray-600",children:"切换主题"})]}),e.jsx("p",{className:"text-xs text-gray-600 mt-2",children:"💡 此组件同时消费状态和操作，会在状态变化时重新渲染"})]})});F.displayName="MixedConsumerComponent";const se=D,re=V,oe=F,ie=()=>{C={provider:0,consumer:0,stateConsumer:0,actionsConsumer:0}},O=y(null);let x={provider:0,consumer:0,userConsumer:0,themeConsumer:0,notificationConsumer:0};const ae=({children:t})=>{const[s,n]=o.useState(h),r=o.useCallback(i=>{n(a=>({...a,user:{...a.user,...i}}))},[]),u=o.useCallback(i=>{n(a=>({...a,theme:i}))},[]),d=o.useCallback(i=>{n(a=>({...a,notifications:{...a.notifications,...i}}))},[]),l=o.useCallback(()=>{n(h)},[]),m=o.useMemo(()=>({updateUser:r,updateTheme:u,updateNotifications:d,resetState:l}),[r,u,d,l]),c=o.useMemo(()=>({state:s,actions:m}),[s,m]);return x.provider++,e.jsx(O.Provider,{value:c,children:t})},j=t=>p(O,s=>{if(!s)throw new Error("useSelector must be used within SelectorAppProvider");return t(s)}),w=()=>p(O,t=>{if(!t)throw new Error("useActions must be used within SelectorAppProvider");return t.actions}),q=o.memo(()=>{const t=j(n=>n.state.user),s=w();return x.userConsumer=(x.userConsumer||0)+1,e.jsxs("div",{className:"p-4 border rounded-lg bg-indigo-50 border-indigo-200",children:[e.jsxs("h4",{className:"font-semibold text-indigo-800 mb-3",children:["用户选择器组件 (渲染次数: ",x.userConsumer,")"]}),e.jsxs("div",{className:"space-y-2 text-sm mb-3",children:[e.jsxs("div",{children:[e.jsx("strong",{children:"ID:"})," ",t.id]}),e.jsxs("div",{children:[e.jsx("strong",{children:"姓名:"})," ",t.name]}),e.jsxs("div",{children:[e.jsx("strong",{children:"邮箱:"})," ",t.email]})]}),e.jsxs("div",{className:"space-x-2",children:[e.jsx("button",{onClick:()=>s.updateUser({name:"选择器用户"}),className:"px-2 py-1 bg-indigo-500 text-white rounded text-xs hover:bg-indigo-600",children:"更新用户"}),e.jsx("button",{onClick:()=>s.updateUser({email:"selector@example.com"}),className:"px-2 py-1 bg-indigo-500 text-white rounded text-xs hover:bg-indigo-600",children:"更新邮箱"})]}),e.jsx("p",{className:"text-xs text-indigo-600 mt-2",children:"💡 只在用户信息变化时重新渲染"})]})});q.displayName="UserSelectorConsumerComponent";const I=o.memo(()=>{const t=j(n=>n.state.theme),s=w();return x.themeConsumer=(x.themeConsumer||0)+1,e.jsxs("div",{className:"p-4 border rounded-lg bg-yellow-50 border-yellow-200",children:[e.jsxs("h4",{className:"font-semibold text-yellow-800 mb-3",children:["主题选择器组件 (渲染次数: ",x.themeConsumer,")"]}),e.jsxs("div",{className:"space-y-2 text-sm mb-3",children:[e.jsxs("div",{children:[e.jsx("strong",{children:"当前主题:"})," ",t]}),e.jsx("div",{className:`w-4 h-4 rounded ${t==="light"?"bg-yellow-300":"bg-gray-800"}`})]}),e.jsxs("div",{className:"space-x-2",children:[e.jsx("button",{onClick:()=>s.updateTheme("light"),className:"px-2 py-1 bg-yellow-500 text-white rounded text-xs hover:bg-yellow-600",children:"浅色主题"}),e.jsx("button",{onClick:()=>s.updateTheme("dark"),className:"px-2 py-1 bg-yellow-500 text-white rounded text-xs hover:bg-yellow-600",children:"深色主题"})]}),e.jsx("p",{className:"text-xs text-yellow-600 mt-2",children:"💡 只在主题变化时重新渲染"})]})});I.displayName="ThemeSelectorConsumerComponent";const _=o.memo(()=>{const t=j(n=>n.state.notifications),s=w();return x.notificationConsumer=(x.notificationConsumer||0)+1,e.jsxs("div",{className:"p-4 border rounded-lg bg-green-50 border-green-200",children:[e.jsxs("h4",{className:"font-semibold text-green-800 mb-3",children:["通知选择器组件 (渲染次数: ",x.notificationConsumer,")"]}),e.jsxs("div",{className:"space-y-2 text-sm mb-3",children:[e.jsxs("div",{children:[e.jsx("strong",{children:"通知数量:"})," ",t.count]}),e.jsxs("div",{children:[e.jsx("strong",{children:"通知状态:"})," ",t.enabled?"开启":"关闭"]})]}),e.jsxs("div",{className:"space-x-2",children:[e.jsx("button",{onClick:()=>s.updateNotifications({count:t.count+1}),className:"px-2 py-1 bg-green-500 text-white rounded text-xs hover:bg-green-600",children:"增加通知"}),e.jsx("button",{onClick:()=>s.updateNotifications({enabled:!t.enabled}),className:"px-2 py-1 bg-green-500 text-white rounded text-xs hover:bg-green-600",children:"切换状态"}),e.jsx("button",{onClick:()=>s.updateNotifications({count:0}),className:"px-2 py-1 bg-green-500 text-white rounded text-xs hover:bg-green-600",children:"清空通知"})]}),e.jsx("p",{className:"text-xs text-green-600 mt-2",children:"💡 只在通知信息变化时重新渲染"})]})});_.displayName="NotificationSelectorConsumerComponent";const L=o.memo(()=>{const t=j(n=>({userName:n.state.user.name,theme:n.state.theme})),s=w();return x.consumer++,e.jsxs("div",{className:"p-4 border rounded-lg bg-pink-50 border-pink-200",children:[e.jsxs("h4",{className:"font-semibold text-pink-800 mb-3",children:["复合选择器组件 (渲染次数: ",x.consumer,")"]}),e.jsxs("div",{className:"space-y-2 text-sm mb-3",children:[e.jsxs("div",{children:[e.jsx("strong",{children:"用户:"})," ",t.userName]}),e.jsxs("div",{children:[e.jsx("strong",{children:"主题:"})," ",t.theme]})]}),e.jsxs("div",{className:"space-x-2",children:[e.jsx("button",{onClick:()=>s.updateUser({name:"复合用户"}),className:"px-2 py-1 bg-pink-500 text-white rounded text-xs hover:bg-pink-600",children:"更新用户"}),e.jsx("button",{onClick:()=>s.updateTheme(t.theme==="light"?"dark":"light"),className:"px-2 py-1 bg-pink-500 text-white rounded text-xs hover:bg-pink-600",children:"切换主题"})]}),e.jsx("p",{className:"text-xs text-pink-600 mt-2",children:"💡 只在用户名或主题变化时重新渲染"})]})});L.displayName="CompositeConsumerComponent";const ce=q,de=I,le=_,ue=L,me=()=>{x={provider:0,consumer:0,userConsumer:0,themeConsumer:0,notificationConsumer:0}},pe=()=>{const[t,s]=o.useState(0),n=()=>{te(),s(r=>r+1)};return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800",children:"Context 基础优化对比"}),e.jsx("button",{onClick:n,className:"px-3 py-1 bg-gray-500 text-white rounded text-sm hover:bg-gray-600",children:"重置计数"})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsx(X,{children:e.jsx(Y,{})}),e.jsx(Z,{children:e.jsx(ee,{})})]},t),e.jsxs("div",{className:"bg-blue-50 p-4 rounded-lg border border-blue-200",children:[e.jsx("h4",{className:"font-semibold text-blue-800 mb-2",children:"🔍 观察要点"}),e.jsxs("ul",{className:"text-sm text-blue-700 space-y-1",children:[e.jsxs("li",{children:["• ",e.jsx("strong",{children:"点击任一按钮时"}),"：左侧组件的渲染次数会增加"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"右侧组件使用了优化"}),"：渲染次数增加较少"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"这展示了 Context 优化对性能的影响"}),"：在大型应用中，这种优化效果更加明显"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"在大型应用中"}),"：这种优化效果更加明显"]})]})]})]})},xe=()=>{const[t,s]=o.useState(0),n=()=>{ie(),s(r=>r+1)};return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800",children:"Context 分离优化"}),e.jsx("button",{onClick:n,className:"px-3 py-1 bg-gray-500 text-white rounded text-sm hover:bg-gray-600",children:"重置计数"})]}),e.jsx(ne,{children:e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-4",children:[e.jsx(se,{}),e.jsx(re,{}),e.jsx(oe,{})]})},t),e.jsxs("div",{className:"bg-green-50 p-4 rounded-lg border border-green-200",children:[e.jsx("h4",{className:"font-semibold text-green-800 mb-2",children:"🔍 观察要点"}),e.jsxs("ul",{className:"text-sm text-green-700 space-y-1",children:[e.jsxs("li",{children:["• ",e.jsx("strong",{children:"状态和操作分离"}),"：减少不必要的重新渲染"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"只读组件不会因操作函数变化而重渲染"}),"：性能更好"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"操作组件很少重渲染"}),"：性能更好"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"每个组件只关心自己需要的部分"}),"：实现精确更新"]})]})]})]})},Ce=()=>{const[t,s]=o.useState(0),n=()=>{me(),s(r=>r+1)};return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800",children:"选择器模式优化"}),e.jsx("button",{onClick:n,className:"px-3 py-1 bg-gray-500 text-white rounded text-sm hover:bg-gray-600",children:"重置计数"})]}),e.jsx(ae,{children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-4",children:[e.jsx(ce,{}),e.jsx(de,{}),e.jsx(le,{})]}),e.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-1 gap-4",children:e.jsx(ue,{})})]})},t),e.jsxs("div",{className:"bg-purple-50 p-4 rounded-lg border border-purple-200",children:[e.jsx("h4",{className:"font-semibold text-purple-800 mb-2",children:"🔍 观察要点"}),e.jsxs("ul",{className:"text-sm text-purple-700 space-y-1",children:[e.jsxs("li",{children:["• ",e.jsx("strong",{children:"组件只订阅需要的状态片段"}),"：实现精确更新"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"使用 useMemo 确保选择器结果的稳定性"}),"：避免不必要的重渲染"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"类似 Redux 的 useSelector 模式"}),"：提供熟悉的开发体验"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"适合复杂状态管理场景"}),"：可以精确控制组件的重渲染时机"]})]})]})]})},P=`import {
  AppActions,
  AppContextValue,
  AppState,
  RenderCounts,
  defaultState,
} from "./types";
import React, { memo, useCallback, useMemo, useState } from "react";
import { createContext, useContextSelector } from "use-context-selector";

// 创建 Context
const BasicAppContext = createContext<AppContextValue | null>(null);

// 渲染计数器
let basicRenderCounts: RenderCounts = {
  provider: 0,
  consumer: 0,
};

// 未优化的 Provider
export const BasicAppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, setState] = useState<AppState>(defaultState);

  // 每次渲染都会创建新的函数 - 未优化
  const updateUser = (user: Partial<AppState["user"]>) => {
    setState((prev) => ({
      ...prev,
      user: { ...prev.user, ...user },
    }));
  };

  const updateTheme = (theme: "light" | "dark") => {
    setState((prev) => ({ ...prev, theme }));
  };

  const updateNotifications = (
    notifications: Partial<AppState["notifications"]>
  ) => {
    setState((prev) => ({
      ...prev,
      notifications: { ...prev.notifications, ...notifications },
    }));
  };

  const resetState = () => {
    setState(defaultState);
  };

  // 每次渲染都会创建新的对象 - 未优化
  const actions: AppActions = {
    updateUser,
    updateTheme,
    updateNotifications,
    resetState,
  };

  // 每次渲染都会创建新的 value 对象 - 未优化
  const value: AppContextValue = {
    state,
    actions,
  };

  basicRenderCounts.provider++;

  return (
    <BasicAppContext.Provider value={value}>
      {children}
    </BasicAppContext.Provider>
  );
};

// 优化的 Provider
export const OptimizedAppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, setState] = useState<AppState>(defaultState);

  // 使用 useCallback 缓存函数 - 优化
  const updateUser = useCallback((user: Partial<AppState["user"]>) => {
    setState((prev) => ({
      ...prev,
      user: { ...prev.user, ...user },
    }));
  }, []);

  const updateTheme = useCallback((theme: "light" | "dark") => {
    setState((prev) => ({ ...prev, theme }));
  }, []);

  const updateNotifications = useCallback(
    (notifications: Partial<AppState["notifications"]>) => {
      setState((prev) => ({
        ...prev,
        notifications: { ...prev.notifications, ...notifications },
      }));
    },
    []
  );

  const resetState = useCallback(() => {
    setState(defaultState);
  }, []);

  // 使用 useMemo 缓存 actions 对象 - 优化
  const actions = useMemo<AppActions>(
    () => ({
      updateUser,
      updateTheme,
      updateNotifications,
      resetState,
    }),
    [updateUser, updateTheme, updateNotifications, resetState]
  );

  // 使用 useMemo 缓存 value 对象 - 优化
  const value = useMemo<AppContextValue>(
    () => ({
      state,
      actions,
    }),
    [state, actions]
  );

  basicRenderCounts.provider++;

  return (
    <BasicAppContext.Provider value={value}>
      {children}
    </BasicAppContext.Provider>
  );
};

// 未优化的消费者组件
const BasicConsumerComponent: React.FC = () => {
  const state = useContextSelector(
    BasicAppContext,
    (context) => context?.state
  );
  const actions = useContextSelector(
    BasicAppContext,
    (context) => context?.actions
  );

  if (!state || !actions) {
    throw new Error(
      "BasicConsumerComponent must be used within BasicAppProvider"
    );
  }
  basicRenderCounts.consumer++;

  return (
    <div className="p-4 border rounded-lg bg-red-50 border-red-200">
      <h4 className="font-semibold text-red-800 mb-3">
        未优化版本 (渲染次数: {basicRenderCounts.consumer})
      </h4>
      <div className="space-y-2 text-sm">
        <div>
          <strong>用户:</strong> {state.user.name} ({state.user.email})
        </div>
        <div>
          <strong>主题:</strong> {state.theme}
        </div>
        <div>
          <strong>通知:</strong> {state.notifications.count} 条 (
          {state.notifications.enabled ? "开启" : "关闭"})
        </div>
      </div>
      <div className="mt-3 space-x-2">
        <button
          onClick={() => actions.updateUser({ name: "张三" })}
          className="px-2 py-1 bg-red-500 text-white rounded text-xs hover:bg-red-600"
        >
          更新用户
        </button>
        <button
          onClick={() =>
            actions.updateTheme(state.theme === "light" ? "dark" : "light")
          }
          className="px-2 py-1 bg-red-500 text-white rounded text-xs hover:bg-red-600"
        >
          切换主题
        </button>
        <button
          onClick={() =>
            actions.updateNotifications({
              count: state.notifications.count + 1,
            })
          }
          className="px-2 py-1 bg-red-500 text-white rounded text-xs hover:bg-red-600"
        >
          增加通知
        </button>
      </div>
    </div>
  );
};

// 优化的消费者组件 - 使用 memo
const OptimizedConsumerComponent = memo(() => {
  const state = useContextSelector(
    BasicAppContext,
    (context) => context?.state
  );
  const actions = useContextSelector(
    BasicAppContext,
    (context) => context?.actions
  );

  if (!state || !actions) {
    throw new Error(
      "OptimizedConsumerComponent must be used within OptimizedAppProvider"
    );
  }
  basicRenderCounts.consumer++;

  return (
    <div className="p-4 border rounded-lg bg-green-50 border-green-200">
      <h4 className="font-semibold text-green-800 mb-3">
        优化版本 (渲染次数: {basicRenderCounts.consumer})
      </h4>
      <div className="space-y-2 text-sm">
        <div>
          <strong>用户:</strong> {state.user.name} ({state.user.email})
        </div>
        <div>
          <strong>主题:</strong> {state.theme}
        </div>
        <div>
          <strong>通知:</strong> {state.notifications.count} 条 (
          {state.notifications.enabled ? "开启" : "关闭"})
        </div>
      </div>
      <div className="mt-3 space-x-2">
        <button
          onClick={() => actions.updateUser({ name: "李四" })}
          className="px-2 py-1 bg-green-500 text-white rounded text-xs hover:bg-green-600"
        >
          更新用户
        </button>
        <button
          onClick={() =>
            actions.updateTheme(state.theme === "light" ? "dark" : "light")
          }
          className="px-2 py-1 bg-green-500 text-white rounded text-xs hover:bg-green-600"
        >
          切换主题
        </button>
        <button
          onClick={() =>
            actions.updateNotifications({
              count: state.notifications.count + 1,
            })
          }
          className="px-2 py-1 bg-green-500 text-white rounded text-xs hover:bg-green-600"
        >
          增加通知
        </button>
      </div>
    </div>
  );
});

OptimizedConsumerComponent.displayName = "OptimizedConsumerComponent";

// 导出消费者组件
export const BasicConsumer = BasicConsumerComponent;
export const OptimizedConsumer = OptimizedConsumerComponent;

// 重置计数器
export const resetBasicCounts = () => {
  basicRenderCounts = {
    provider: 0,
    consumer: 0,
  };
};

// 获取计数器
export const getBasicRenderCounts = () => ({ ...basicRenderCounts });
`,B=`import React, { useState } from 'react';
import {
  BasicAppProvider,
  OptimizedAppProvider,
  BasicConsumer,
  OptimizedConsumer,
  resetBasicCounts
} from './BasicContext';
import {
  SeparatedAppProvider,
  StateOnlyConsumer,
  ActionsOnlyConsumer,
  MixedConsumer,
  resetSeparatedCounts
} from './SeparatedContext';
import {
  SelectorAppProvider,
  UserSelectorConsumer,
  ThemeSelectorConsumer,
  NotificationSelectorConsumer,
  CompositeConsumer,
  resetSelectorCounts
} from './SelectorContext';

// Context 基础优化对比示例
export const BasicContextDemo: React.FC = () => {
  const [resetKey, setResetKey] = useState(0);
  
  const handleReset = () => {
    resetBasicCounts();
    setResetKey(prev => prev + 1);
  };
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-800">Context 基础优化对比</h3>
        <button
          onClick={handleReset}
          className="px-3 py-1 bg-gray-500 text-white rounded text-sm hover:bg-gray-600"
        >
          重置计数
        </button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6" key={resetKey}>
        {/* 未优化版本 */}
        <BasicAppProvider>
          <BasicConsumer />
        </BasicAppProvider>
        
        {/* 优化版本 */}
        <OptimizedAppProvider>
          <OptimizedConsumer />
        </OptimizedAppProvider>
      </div>
      
      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
        <h4 className="font-semibold text-blue-800 mb-2">🔍 观察要点</h4>
        <ul className="text-sm text-blue-700 space-y-1">
          <li>• <strong>点击任一按钮时</strong>：左侧组件的渲染次数会增加</li>
          <li>• <strong>右侧组件使用了优化</strong>：渲染次数增加较少</li>
          <li>• <strong>这展示了 Context 优化对性能的影响</strong>：在大型应用中，这种优化效果更加明显</li>
          <li>• <strong>在大型应用中</strong>：这种优化效果更加明显</li>
        </ul>
      </div>
    </div>
  );
};

// Context 分离优化示例
export const ContextSeparationDemo: React.FC = () => {
  const [resetKey, setResetKey] = useState(0);
  
  const handleReset = () => {
    resetSeparatedCounts();
    setResetKey(prev => prev + 1);
  };
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-800">Context 分离优化</h3>
        <button
          onClick={handleReset}
          className="px-3 py-1 bg-gray-500 text-white rounded text-sm hover:bg-gray-600"
        >
          重置计数
        </button>
      </div>
      
      <SeparatedAppProvider key={resetKey}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <StateOnlyConsumer />
          <ActionsOnlyConsumer />
          <MixedConsumer />
        </div>
      </SeparatedAppProvider>
      
      <div className="bg-green-50 p-4 rounded-lg border border-green-200">
        <h4 className="font-semibold text-green-800 mb-2">🔍 观察要点</h4>
        <ul className="text-sm text-green-700 space-y-1">
          <li>• <strong>状态和操作分离</strong>：减少不必要的重新渲染</li>
          <li>• <strong>只读组件不会因操作函数变化而重渲染</strong>：性能更好</li>
          <li>• <strong>操作组件很少重渲染</strong>：性能更好</li>
          <li>• <strong>每个组件只关心自己需要的部分</strong>：实现精确更新</li>
        </ul>
      </div>
    </div>
  );
};

// 选择器模式优化示例
export const SelectorPatternDemo: React.FC = () => {
  const [resetKey, setResetKey] = useState(0);
  
  const handleReset = () => {
    resetSelectorCounts();
    setResetKey(prev => prev + 1);
  };
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-800">选择器模式优化</h3>
        <button
          onClick={handleReset}
          className="px-3 py-1 bg-gray-500 text-white rounded text-sm hover:bg-gray-600"
        >
          重置计数
        </button>
      </div>
      
      <SelectorAppProvider key={resetKey}>
        <div className="space-y-4">
          {/* 第一行：精确选择器组件 */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <UserSelectorConsumer />
            <ThemeSelectorConsumer />
            <NotificationSelectorConsumer />
          </div>
          
          {/* 第二行：复合选择器组件 */}
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-4">
            <CompositeConsumer />
          </div>
        </div>
      </SelectorAppProvider>
      
      <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
        <h4 className="font-semibold text-purple-800 mb-2">🔍 观察要点</h4>
        <ul className="text-sm text-purple-700 space-y-1">
          <li>• <strong>组件只订阅需要的状态片段</strong>：实现精确更新</li>
          <li>• <strong>使用 useMemo 确保选择器结果的稳定性</strong>：避免不必要的重渲染</li>
          <li>• <strong>类似 Redux 的 useSelector 模式</strong>：提供熟悉的开发体验</li>
          <li>• <strong>适合复杂状态管理场景</strong>：可以精确控制组件的重渲染时机</li>
        </ul>
      </div>
    </div>
  );
};

// 导出所有示例组件
export default {
  BasicContextDemo,
  ContextSeparationDemo,
  SelectorPatternDemo
};`,M=`import React, { useState, useCallback, useMemo, memo } from 'react';\r
import { createContext, useContextSelector } from 'use-context-selector';\r
import { AppState, AppActions, AppContextValue, defaultState, RenderCounts } from './types';\r
\r
// 创建 Context\r
const SelectorAppContext = createContext<AppContextValue | null>(null);\r
\r
// 渲染计数器\r
let selectorRenderCounts: RenderCounts = {\r
  provider: 0,\r
  consumer: 0,\r
  userConsumer: 0,\r
  themeConsumer: 0,\r
  notificationConsumer: 0\r
};\r
\r
// 选择器模式的 Provider\r
export const SelectorAppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {\r
  const [state, setState] = useState<AppState>(defaultState);\r
  \r
  // 使用 useCallback 缓存操作函数\r
  const updateUser = useCallback((user: Partial<AppState['user']>) => {\r
    setState(prev => ({\r
      ...prev,\r
      user: { ...prev.user, ...user }\r
    }));\r
  }, []);\r
  \r
  const updateTheme = useCallback((theme: 'light' | 'dark') => {\r
    setState(prev => ({ ...prev, theme }));\r
  }, []);\r
  \r
  const updateNotifications = useCallback((notifications: Partial<AppState['notifications']>) => {\r
    setState(prev => ({\r
      ...prev,\r
      notifications: { ...prev.notifications, ...notifications }\r
    }));\r
  }, []);\r
  \r
  const resetState = useCallback(() => {\r
    setState(defaultState);\r
  }, []);\r
  \r
  // 缓存 actions 对象\r
  const actions = useMemo<AppActions>(() => ({\r
    updateUser,\r
    updateTheme,\r
    updateNotifications,\r
    resetState\r
  }), [updateUser, updateTheme, updateNotifications, resetState]);\r
  \r
  // 缓存 value 对象\r
  const value = useMemo<AppContextValue>(() => ({\r
    state,\r
    actions\r
  }), [state, actions]);\r
  \r
  selectorRenderCounts.provider++;\r
  \r
  return (\r
    <SelectorAppContext.Provider value={value}>\r
      {children}\r
    </SelectorAppContext.Provider>\r
  );\r
};\r
\r
// 自定义选择器 Hook\r
export const useSelector = <T,>(selector: (context: AppContextValue) => T): T => {\r
  return useContextSelector(SelectorAppContext, (context) => {\r
    if (!context) {\r
      throw new Error('useSelector must be used within SelectorAppProvider');\r
    }\r
    return selector(context);\r
  });\r
};\r
\r
// 获取操作的 Hook\r
export const useActions = (): AppActions => {\r
  return useContextSelector(SelectorAppContext, (context) => {\r
    if (!context) {\r
      throw new Error('useActions must be used within SelectorAppProvider');\r
    }\r
    return context.actions;\r
  });\r
};\r
\r
// 只订阅用户信息的组件\r
const UserSelectorConsumerComponent = memo(() => {\r
  // 只选择用户信息\r
  const user = useSelector((context) => context.state.user);\r
  const actions = useActions();\r
  \r
  selectorRenderCounts.userConsumer = (selectorRenderCounts.userConsumer || 0) + 1;\r
  \r
  return (\r
    <div className="p-4 border rounded-lg bg-indigo-50 border-indigo-200">\r
      <h4 className="font-semibold text-indigo-800 mb-3">\r
        用户选择器组件 (渲染次数: {selectorRenderCounts.userConsumer})\r
      </h4>\r
      <div className="space-y-2 text-sm mb-3">\r
        <div><strong>ID:</strong> {user.id}</div>\r
        <div><strong>姓名:</strong> {user.name}</div>\r
        <div><strong>邮箱:</strong> {user.email}</div>\r
      </div>\r
      <div className="space-x-2">\r
        <button\r
          onClick={() => actions.updateUser({ name: '选择器用户' })}\r
          className="px-2 py-1 bg-indigo-500 text-white rounded text-xs hover:bg-indigo-600"\r
        >\r
          更新用户\r
        </button>\r
        <button\r
          onClick={() => actions.updateUser({ email: 'selector@example.com' })}\r
          className="px-2 py-1 bg-indigo-500 text-white rounded text-xs hover:bg-indigo-600"\r
        >\r
          更新邮箱\r
        </button>\r
      </div>\r
      <p className="text-xs text-indigo-600 mt-2">\r
        💡 只在用户信息变化时重新渲染\r
      </p>\r
    </div>\r
  );\r
});\r
\r
UserSelectorConsumerComponent.displayName = 'UserSelectorConsumerComponent';\r
\r
// 只订阅主题的组件\r
const ThemeSelectorConsumerComponent = memo(() => {\r
  // 只选择主题信息\r
  const theme = useSelector((context) => context.state.theme);\r
  const actions = useActions();\r
  \r
  selectorRenderCounts.themeConsumer = (selectorRenderCounts.themeConsumer || 0) + 1;\r
  \r
  return (\r
    <div className="p-4 border rounded-lg bg-yellow-50 border-yellow-200">\r
      <h4 className="font-semibold text-yellow-800 mb-3">\r
        主题选择器组件 (渲染次数: {selectorRenderCounts.themeConsumer})\r
      </h4>\r
      <div className="space-y-2 text-sm mb-3">\r
        <div><strong>当前主题:</strong> {theme}</div>\r
        <div className={\`w-4 h-4 rounded \${theme === 'light' ? 'bg-yellow-300' : 'bg-gray-800'}\`}></div>\r
      </div>\r
      <div className="space-x-2">\r
        <button\r
          onClick={() => actions.updateTheme('light')}\r
          className="px-2 py-1 bg-yellow-500 text-white rounded text-xs hover:bg-yellow-600"\r
        >\r
          浅色主题\r
        </button>\r
        <button\r
          onClick={() => actions.updateTheme('dark')}\r
          className="px-2 py-1 bg-yellow-500 text-white rounded text-xs hover:bg-yellow-600"\r
        >\r
          深色主题\r
        </button>\r
      </div>\r
      <p className="text-xs text-yellow-600 mt-2">\r
        💡 只在主题变化时重新渲染\r
      </p>\r
    </div>\r
  );\r
});\r
\r
ThemeSelectorConsumerComponent.displayName = 'ThemeSelectorConsumerComponent';\r
\r
// 只订阅通知的组件\r
const NotificationSelectorConsumerComponent = memo(() => {\r
  // 只选择通知信息\r
  const notifications = useSelector((context) => context.state.notifications);\r
  const actions = useActions();\r
  \r
  selectorRenderCounts.notificationConsumer = (selectorRenderCounts.notificationConsumer || 0) + 1;\r
  \r
  return (\r
    <div className="p-4 border rounded-lg bg-green-50 border-green-200">\r
      <h4 className="font-semibold text-green-800 mb-3">\r
        通知选择器组件 (渲染次数: {selectorRenderCounts.notificationConsumer})\r
      </h4>\r
      <div className="space-y-2 text-sm mb-3">\r
        <div><strong>通知数量:</strong> {notifications.count}</div>\r
        <div><strong>通知状态:</strong> {notifications.enabled ? '开启' : '关闭'}</div>\r
      </div>\r
      <div className="space-x-2">\r
        <button\r
          onClick={() => actions.updateNotifications({ count: notifications.count + 1 })}\r
          className="px-2 py-1 bg-green-500 text-white rounded text-xs hover:bg-green-600"\r
        >\r
          增加通知\r
        </button>\r
        <button\r
          onClick={() => actions.updateNotifications({ enabled: !notifications.enabled })}\r
          className="px-2 py-1 bg-green-500 text-white rounded text-xs hover:bg-green-600"\r
        >\r
          切换状态\r
        </button>\r
        <button\r
          onClick={() => actions.updateNotifications({ count: 0 })}\r
          className="px-2 py-1 bg-green-500 text-white rounded text-xs hover:bg-green-600"\r
        >\r
          清空通知\r
        </button>\r
      </div>\r
      <p className="text-xs text-green-600 mt-2">\r
        💡 只在通知信息变化时重新渲染\r
      </p>\r
    </div>\r
  );\r
});\r
\r
NotificationSelectorConsumerComponent.displayName = 'NotificationSelectorConsumerComponent';\r
\r
// 复合选择器组件 - 选择多个状态片段\r
const CompositeConsumerComponent = memo(() => {\r
  // 使用复合选择器\r
  const userAndTheme = useSelector((context) => ({\r
    userName: context.state.user.name,\r
    theme: context.state.theme\r
  }));\r
  const actions = useActions();\r
  \r
  selectorRenderCounts.consumer++;\r
  \r
  return (\r
    <div className="p-4 border rounded-lg bg-pink-50 border-pink-200">\r
      <h4 className="font-semibold text-pink-800 mb-3">\r
        复合选择器组件 (渲染次数: {selectorRenderCounts.consumer})\r
      </h4>\r
      <div className="space-y-2 text-sm mb-3">\r
        <div><strong>用户:</strong> {userAndTheme.userName}</div>\r
        <div><strong>主题:</strong> {userAndTheme.theme}</div>\r
      </div>\r
      <div className="space-x-2">\r
        <button\r
          onClick={() => actions.updateUser({ name: '复合用户' })}\r
          className="px-2 py-1 bg-pink-500 text-white rounded text-xs hover:bg-pink-600"\r
        >\r
          更新用户\r
        </button>\r
        <button\r
          onClick={() => actions.updateTheme(userAndTheme.theme === 'light' ? 'dark' : 'light')}\r
          className="px-2 py-1 bg-pink-500 text-white rounded text-xs hover:bg-pink-600"\r
        >\r
          切换主题\r
        </button>\r
      </div>\r
      <p className="text-xs text-pink-600 mt-2">\r
        💡 只在用户名或主题变化时重新渲染\r
      </p>\r
    </div>\r
  );\r
});\r
\r
CompositeConsumerComponent.displayName = 'CompositeConsumerComponent';\r
\r
// 导出组件\r
export const UserSelectorConsumer = UserSelectorConsumerComponent;\r
export const ThemeSelectorConsumer = ThemeSelectorConsumerComponent;\r
export const NotificationSelectorConsumer = NotificationSelectorConsumerComponent;\r
export const CompositeConsumer = CompositeConsumerComponent;\r
\r
// 重置计数器\r
export const resetSelectorCounts = () => {\r
  selectorRenderCounts = {\r
    provider: 0,\r
    consumer: 0,\r
    userConsumer: 0,\r
    themeConsumer: 0,\r
    notificationConsumer: 0\r
  };\r
};\r
\r
// 获取计数器\r
export const getSelectorRenderCounts = () => ({ ...selectorRenderCounts });`,E=`import React, { useState, useCallback, useMemo, memo } from 'react';
import { createContext, useContextSelector } from 'use-context-selector';
import { AppState, AppActions, defaultState, RenderCounts } from './types';

// 分离的 Context - 状态和操作分开
const StateContext = createContext<AppState | null>(null);
const ActionsContext = createContext<AppActions | null>(null);

// 渲染计数器
let separatedRenderCounts: RenderCounts = {
  provider: 0,
  consumer: 0,
  stateConsumer: 0,
  actionsConsumer: 0
};

// 分离的 Provider
export const SeparatedAppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<AppState>(defaultState);
  
  // 使用 useCallback 缓存操作函数
  const updateUser = useCallback((user: Partial<AppState['user']>) => {
    setState(prev => ({
      ...prev,
      user: { ...prev.user, ...user }
    }));
  }, []);
  
  const updateTheme = useCallback((theme: 'light' | 'dark') => {
    setState(prev => ({ ...prev, theme }));
  }, []);
  
  const updateNotifications = useCallback((notifications: Partial<AppState['notifications']>) => {
    setState(prev => ({
      ...prev,
      notifications: { ...prev.notifications, ...notifications }
    }));
  }, []);
  
  const resetState = useCallback(() => {
    setState(defaultState);
  }, []);
  
  // 缓存 actions 对象
  const actions = useMemo<AppActions>(() => ({
    updateUser,
    updateTheme,
    updateNotifications,
    resetState
  }), [updateUser, updateTheme, updateNotifications, resetState]);
  
  separatedRenderCounts.provider++;
  
  return (
    <StateContext.Provider value={state}>
      <ActionsContext.Provider value={actions}>
        {children}
      </ActionsContext.Provider>
    </StateContext.Provider>
  );
};

// 只消费状态的组件
const StateOnlyConsumerComponent = memo(() => {
  // 使用 useContextSelector 只订阅状态
  const user = useContextSelector(StateContext, (state) => state?.user);
  const theme = useContextSelector(StateContext, (state) => state?.theme);
  const notifications = useContextSelector(StateContext, (state) => state?.notifications);
  
  if (!user || !theme || !notifications) {
    throw new Error('StateOnlyConsumerComponent must be used within SeparatedAppProvider');
  }
  
  separatedRenderCounts.stateConsumer = (separatedRenderCounts.stateConsumer || 0) + 1;
  
  return (
    <div className="p-4 border rounded-lg bg-blue-50 border-blue-200">
      <h4 className="font-semibold text-blue-800 mb-3">
        只读状态组件 (渲染次数: {separatedRenderCounts.stateConsumer})
      </h4>
      <div className="space-y-2 text-sm">
        <div><strong>用户:</strong> {user.name} ({user.email})</div>
        <div><strong>主题:</strong> {theme}</div>
        <div><strong>通知:</strong> {notifications.count} 条 ({notifications.enabled ? '开启' : '关闭'})</div>
      </div>
      <p className="text-xs text-blue-600 mt-2">
        💡 此组件只消费状态，不会因操作函数变化而重新渲染
      </p>
    </div>
  );
});

StateOnlyConsumerComponent.displayName = 'StateOnlyConsumerComponent';

// 只消费操作的组件
const ActionsOnlyConsumerComponent = memo(() => {
  // 使用 useContextSelector 只订阅操作
  const actions = useContextSelector(ActionsContext, (actions) => actions);
  
  if (!actions) {
    throw new Error('ActionsOnlyConsumerComponent must be used within SeparatedAppProvider');
  }
  
  separatedRenderCounts.actionsConsumer = (separatedRenderCounts.actionsConsumer || 0) + 1;
  
  return (
    <div className="p-4 border rounded-lg bg-purple-50 border-purple-200">
      <h4 className="font-semibold text-purple-800 mb-3">
        操作组件 (渲染次数: {separatedRenderCounts.actionsConsumer})
      </h4>
      <div className="space-x-2">
        <button
          onClick={() => actions.updateUser({ name: '王五' })}
          className="px-2 py-1 bg-purple-500 text-white rounded text-xs hover:bg-purple-600"
        >
          更新用户
        </button>
        <button
          onClick={() => actions.updateTheme('dark')}
          className="px-2 py-1 bg-purple-500 text-white rounded text-xs hover:bg-purple-600"
        >
          切换主题
        </button>
        <button
          onClick={() => actions.updateNotifications({ count: 10 })}
          className="px-2 py-1 bg-purple-500 text-white rounded text-xs hover:bg-purple-600"
        >
          设置通知
        </button>
      </div>
      <p className="text-xs text-purple-600 mt-2">
        💡 此组件只消费操作，很少重新渲染，性能更好
      </p>
    </div>
  );
});

ActionsOnlyConsumerComponent.displayName = 'ActionsOnlyConsumerComponent';

// 混合消费组件 - 用于对比
const MixedConsumerComponent = memo(() => {
  // 同时消费状态和操作
  const user = useContextSelector(StateContext, (state) => state?.user);
  const theme = useContextSelector(StateContext, (state) => state?.theme);
  const actions = useContextSelector(ActionsContext, (actions) => actions);
  
  if (!user || !theme || !actions) {
    throw new Error('MixedConsumerComponent must be used within SeparatedAppProvider');
  }
  
  separatedRenderCounts.consumer++;
  
  return (
    <div className="p-4 border rounded-lg bg-gray-50 border-gray-200">
      <h4 className="font-semibold text-gray-800 mb-3">
        混合组件 (渲染次数: {separatedRenderCounts.consumer})
      </h4>
      <div className="space-y-2 text-sm mb-3">
        <div><strong>用户:</strong> {user.name}</div>
        <div><strong>主题:</strong> {theme}</div>
      </div>
      <div className="space-x-2">
        <button
          onClick={() => actions.updateUser({ name: '赵六' })}
          className="px-2 py-1 bg-gray-500 text-white rounded text-xs hover:bg-gray-600"
        >
          更新用户
        </button>
        <button
          onClick={() => actions.updateTheme(theme === 'light' ? 'dark' : 'light')}
          className="px-2 py-1 bg-gray-500 text-white rounded text-xs hover:bg-gray-600"
        >
          切换主题
        </button>
      </div>
      <p className="text-xs text-gray-600 mt-2">
        💡 此组件同时消费状态和操作，会在状态变化时重新渲染
      </p>
    </div>
  );
});

MixedConsumerComponent.displayName = 'MixedConsumerComponent';

// 导出组件
export const StateOnlyConsumer = StateOnlyConsumerComponent;
export const ActionsOnlyConsumer = ActionsOnlyConsumerComponent;
export const MixedConsumer = MixedConsumerComponent;

// 重置计数器
export const resetSeparatedCounts = () => {
  separatedRenderCounts = {
    provider: 0,
    consumer: 0,
    stateConsumer: 0,
    actionsConsumer: 0
  };
};

// 获取计数器
export const getSeparatedRenderCounts = () => ({ ...separatedRenderCounts });`,he=`// 用户信息接口\r
export interface User {\r
  id: number;\r
  name: string;\r
  email: string;\r
}\r
\r
// 应用状态接口\r
export interface AppState {\r
  user: User;\r
  theme: 'light' | 'dark';\r
  notifications: {\r
    count: number;\r
    enabled: boolean;\r
  };\r
}\r
\r
// 应用操作接口\r
export interface AppActions {\r
  updateUser: (user: Partial<User>) => void;\r
  updateTheme: (theme: 'light' | 'dark') => void;\r
  updateNotifications: (notifications: Partial<AppState['notifications']>) => void;\r
  resetState: () => void;\r
}\r
\r
// Context 值接口\r
export interface AppContextValue {\r
  state: AppState;\r
  actions: AppActions;\r
}\r
\r
// 渲染计数接口\r
export interface RenderCounts {\r
  provider: number;\r
  consumer: number;\r
  userConsumer?: number;\r
  themeConsumer?: number;\r
  notificationConsumer?: number;\r
  stateConsumer?: number;\r
  actionsConsumer?: number;\r
}\r
\r
// 默认状态\r
export const defaultState: AppState = {\r
  user: {\r
    id: 1,\r
    name: 'John Doe',\r
    email: 'john@example.com'\r
  },\r
  theme: 'light',\r
  notifications: {\r
    count: 5,\r
    enabled: true\r
  }\r
};`,ve=()=>e.jsx(H,{title:"Context 状态管理优化",description:"React Context 是 React 提供的状态管理解决方案，用于在组件树中共享状态。然而，不当使用 Context 可能导致性能问题。本节展示如何通过各种优化技术来提升 Context 的性能，包括函数缓存、值缓存、Context 分离和选择器模式等。",overview:e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-blue-50 p-4 rounded-lg border border-blue-200",children:[e.jsx("h3",{className:"font-semibold text-blue-800 mb-2",children:"🎯 核心概念"}),e.jsxs("ul",{className:"text-sm text-blue-700 space-y-1",children:[e.jsx("li",{children:"• Context 提供者"}),e.jsx("li",{children:"• Context 消费者"}),e.jsx("li",{children:"• 值缓存"}),e.jsx("li",{children:"• 函数缓存"})]})]}),e.jsxs("div",{className:"bg-green-50 p-4 rounded-lg border border-green-200",children:[e.jsx("h3",{className:"font-semibold text-green-800 mb-2",children:"✨ 主要优势"}),e.jsxs("ul",{className:"text-sm text-green-700 space-y-1",children:[e.jsx("li",{children:"• 状态共享"}),e.jsx("li",{children:"• 解耦组件"}),e.jsx("li",{children:"• 集中管理"}),e.jsx("li",{children:"• 灵活订阅"})]})]}),e.jsxs("div",{className:"bg-yellow-50 p-4 rounded-lg border border-yellow-200",children:[e.jsx("h3",{className:"font-semibold text-yellow-800 mb-2",children:"🎪 适用场景"}),e.jsxs("ul",{className:"text-sm text-yellow-700 space-y-1",children:[e.jsx("li",{children:"• 全局状态"}),e.jsx("li",{children:"• 深层传递"}),e.jsx("li",{children:"• 状态共享"}),e.jsx("li",{children:"• 配置管理"})]})]}),e.jsxs("div",{className:"bg-red-50 p-4 rounded-lg border border-red-200",children:[e.jsx("h3",{className:"font-semibold text-red-800 mb-2",children:"⚠️ 注意事项"}),e.jsxs("ul",{className:"text-sm text-red-700 space-y-1",children:[e.jsx("li",{children:"• 性能影响"}),e.jsx("li",{children:"• 过度使用"}),e.jsx("li",{children:"• 值稳定性"}),e.jsx("li",{children:"• 分离关注点"})]})]})]})}),examples:[{title:"Context 基础优化对比",component:e.jsx(pe,{}),description:"对比未优化和优化后的 Context 实现，展示缓存对性能的影响。",observationPoints:["点击任一按钮时，左侧组件的渲染次数会增加","右侧组件使用了优化，渲染次数增加较少","这展示了 Context 优化对性能的影响","在大型应用中，这种优化效果更加明显"],keyPoints:["使用 useCallback 缓存事件处理函数","使用 useMemo 缓存 Context 值对象","避免在每次渲染时创建新的函数和对象","配合 React.memo 优化消费者组件"],commonTraps:["在 Provider 中每次渲染都创建新的函数","在 Provider 中每次渲染都创建新的值对象","忘记对消费者组件使用 React.memo"],solutions:["使用 useCallback 缓存所有传递给 Context 的函数","使用 useMemo 缓存 Context 的值对象","对所有消费者组件使用 React.memo"],importantTips:["左侧组件每次都会重新渲染，性能较差","右侧组件使用了优化技术，性能更好"],preCode:[{title:"Types",code:he}],codeExample:{title:"优化后的 Context 实现",code:P}},{title:"Context 分离优化",component:e.jsx(xe,{}),description:"通过分离不同关注点的 Context 来实现精确更新，减少不必要的重新渲染。",observationPoints:["状态和操作分离，减少不必要的重新渲染","只读组件不会因操作函数变化而重渲染","操作组件很少重渲染，性能更好","每个组件只关心自己需要的部分，实现精确更新"],keyPoints:["将不同类型的状态分离到不同的 Context","组件只消费需要的 Context","实现精确的状态订阅和更新","避免无关状态变化导致的重新渲染"],commonTraps:["将所有状态放在一个大的 Context 中","组件消费了不需要的状态","Context 嵌套过深影响性能"],solutions:["按功能或领域分离 Context","组件只消费必要的 Context","合理组织 Context 的层次结构"],importantTips:["分离 Context 可以实现更精确的状态管理","每个组件只会在相关状态变化时重新渲染"],preCode:[{title:"BasicContext",code:P},{title:"SelectorContext",code:M},{title:"SeparatedContext",code:E}],codeExample:{title:"Context 分离优化",code:B}},{title:"选择器模式优化",component:e.jsx(Ce,{}),description:"使用选择器模式让组件只订阅需要的状态片段，类似 Redux 的 useSelector。",observationPoints:["组件只订阅需要的状态片段，实现精确更新","使用 useMemo 确保选择器结果的稳定性","类似 Redux 的 useSelector 模式","适合复杂状态管理场景"],keyPoints:["使用选择器函数精确订阅状态","通过 useMemo 确保选择器结果稳定","分离状态和动作的管理","提供类似 Redux 的开发体验"],commonTraps:["选择器函数没有正确缓存","选择器返回新对象导致不必要渲染","动作函数没有正确缓存"],solutions:["使用 useMemo 缓存选择器结果","选择器应该返回原始值或稳定引用","使用 useCallback 缓存动作函数"],importantTips:["选择器模式提供了最精确的状态订阅","适合复杂应用的状态管理需求"],preCode:[{title:"BasicContext",code:P},{title:"SelectorContext",code:M},{title:"SeparatedContext",code:E}],codeExample:{title:"选择器模式优化",code:B}}],tutorial:{concepts:["Context 提供了跨组件的状态共享机制","不当使用 Context 会导致性能问题","需要缓存 Context 值和函数来优化性能","分离不同关注点的 Context 可以实现精确更新","选择器模式提供了最灵活的状态订阅方式"],steps:["识别需要共享的状态和操作","使用 useCallback 缓存所有事件处理函数","使用 useMemo 缓存 Context 值对象","考虑按功能分离不同的 Context","对消费者组件使用 React.memo 优化","实现选择器模式进行精确状态订阅","测试和验证优化效果"],tips:["不是所有状态都适合放在 Context 中","优先考虑本地状态，再考虑 Context","使用 ESLint 规则检查 Context 的使用","定期审查 Context 的结构和性能","考虑使用状态管理库处理复杂场景","合理组织 Context 的层次结构"]},interview:{questions:[{question:"Context 的性能问题主要体现在哪里？",answer:"Context 的性能问题主要体现在：1) Context 值变化时，所有消费该 Context 的组件都会重新渲染；2) 如果 Provider 每次渲染都创建新的值对象或函数，会导致所有消费者不必要的重新渲染；3) 将不相关的状态放在同一个 Context 中，会导致组件订阅了不需要的状态变化；4) 深层嵌套的 Context 会影响性能和可维护性。"},{question:"如何优化 Context 的性能？",answer:"优化 Context 性能的方法：1) 使用 useCallback 缓存传递给 Context 的函数；2) 使用 useMemo 缓存 Context 的值对象；3) 按功能或领域分离不同的 Context；4) 对消费者组件使用 React.memo；5) 实现选择器模式，让组件只订阅需要的状态片段；6) 避免在 Context 中放置频繁变化的状态；7) 合理组织 Context 的层次结构。"},{question:"什么是 Context 分离，为什么要分离？",answer:"Context 分离是指将不同类型或不相关的状态分离到不同的 Context 中。分离的原因：1) 避免组件订阅不需要的状态变化；2) 实现精确的状态更新，只有相关组件才会重新渲染；3) 提高代码的可维护性和可读性；4) 减少 Context 值的复杂度；5) 便于测试和调试。例如，用户信息、主题设置、通知状态应该分离到不同的 Context 中。"},{question:"选择器模式在 Context 中是如何工作的？",answer:"选择器模式允许组件精确订阅 Context 中的特定状态片段：1) 创建一个选择器 Hook，接收选择器函数作为参数；2) 选择器函数从完整状态中提取组件需要的部分；3) 使用 useMemo 缓存选择器的结果，确保引用稳定性；4) 组件只有在选择的状态片段变化时才会重新渲染。这种模式类似于 Redux 的 useSelector，提供了最精确的状态订阅机制。"},{question:"Context 与其他状态管理方案的对比？",answer:"Context 与其他状态管理方案的对比：1) 与 Props 传递相比：避免了 props drilling，但可能导致性能问题；2) 与 Redux 相比：更简单直接，但缺乏时间旅行、中间件等高级功能；3) 与 Zustand 相比：原生支持，但需要更多优化工作；4) 与 Recoil 相比：更成熟稳定，但状态管理能力较弱。Context 适合中小型应用的状态管理，复杂应用建议使用专门的状态管理库。"}],keyPoints:["Context 值变化会导致所有消费者重新渲染","需要缓存 Context 值和函数来优化性能","分离不同关注点的 Context 实现精确更新","选择器模式提供最精确的状态订阅","合理选择状态管理方案很重要","性能优化需要权衡复杂度和收益"]},bestPractices:{dos:["使用 useCallback 缓存传递给 Context 的函数","使用 useMemo 缓存 Context 的值对象","按功能或领域分离不同的 Context","对消费者组件使用 React.memo 优化","实现选择器模式进行精确状态订阅","合理组织 Context 的层次结构","定期审查 Context 的性能和结构","为 Context 提供默认值和错误边界"],donts:["不要将所有状态都放在一个大的 Context 中","不要在 Provider 中每次渲染都创建新的值对象","不要在 Provider 中每次渲染都创建新的函数","不要让组件消费不需要的 Context","不要在 Context 中放置频繁变化的状态","不要过度嵌套 Context Provider","不要忘记为 Context 提供类型定义","不要在没有 Provider 的情况下使用 Context"],patterns:["Provider 优化模式 - 缓存 Context 值和函数","Context 分离模式 - 按功能分离不同的 Context","选择器模式 - 精确订阅状态片段","组合 Provider 模式 - 组合多个 Context Provider","高阶组件模式 - 封装 Context 消费逻辑","自定义 Hook 模式 - 封装 Context 使用逻辑","错误边界模式 - 处理 Context 使用错误","懒加载模式 - 按需加载 Context 状态"]}});export{ve as default};
