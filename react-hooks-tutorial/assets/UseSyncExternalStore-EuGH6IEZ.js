var y=Object.defineProperty;var f=(s,r,t)=>r in s?y(s,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[r]=t;var b=(s,r,t)=>f(s,typeof r!="symbol"?r+"":r,t);import{r as o,j as e}from"./index-D5aG88J3.js";import{C as w}from"./ComponentTemplate-DZf1RTVD.js";class j{constructor(){b(this,"listeners",{})}on(r,t){this.listeners[r]||(this.listeners[r]=[]),this.listeners[r].push(t)}off(r,t){this.listeners[r]&&(this.listeners[r]=this.listeners[r].filter(n=>n!==t))}emit(r,...t){this.listeners[r]&&this.listeners[r].forEach(n=>n(...t))}}class k extends j{constructor(){super(...arguments);b(this,"state",{count:0,user:{name:"Guest",isLoggedIn:!1},theme:"light",notifications:[]})}getState(){return this.state}setState(t){this.state={...this.state,...t},this.emit("change")}increment(){this.setState({count:this.state.count+1})}decrement(){this.setState({count:this.state.count-1})}setUser(t){this.setState({user:t})}setTheme(t){this.setState({theme:t})}addNotification(t){const n={id:Date.now(),message:t,timestamp:new Date().toLocaleTimeString()};this.setState({notifications:[...this.state.notifications,n]})}removeNotification(t){this.setState({notifications:this.state.notifications.filter(n=>n.id!==t)})}}const a=new k,E=()=>{const s=o.useSyncExternalStore(n=>(a.on("change",n),()=>a.off("change",n)),()=>a.getState()),[r,t]=o.useState(0);return e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-blue-50 p-4 rounded-lg border border-blue-200",children:[e.jsx("h3",{className:"text-lg font-semibold text-blue-800 mb-3",children:"基础计数器演示"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-white p-4 rounded border",children:[e.jsx("h4",{className:"font-semibold text-blue-700 mb-3",children:"全局状态 (useSyncExternalStore)"}),e.jsxs("div",{className:"text-2xl font-bold text-blue-600 mb-3",children:["计数: ",s.count]}),e.jsxs("div",{className:"space-x-2",children:[e.jsx("button",{onClick:()=>a.increment(),className:"px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors",children:"+1"}),e.jsx("button",{onClick:()=>a.decrement(),className:"px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors",children:"-1"})]})]}),e.jsxs("div",{className:"bg-white p-4 rounded border",children:[e.jsx("h4",{className:"font-semibold text-gray-700 mb-3",children:"本地状态 (useState)"}),e.jsxs("div",{className:"text-2xl font-bold text-gray-600 mb-3",children:["计数: ",r]}),e.jsxs("div",{className:"space-x-2",children:[e.jsx("button",{onClick:()=>t(n=>n+1),className:"px-3 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors",children:"+1"}),e.jsx("button",{onClick:()=>t(n=>n-1),className:"px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors",children:"-1"})]})]})]}),e.jsx("div",{className:"mt-4 bg-blue-100 p-3 rounded",children:e.jsxs("p",{className:"text-sm text-blue-700",children:[e.jsx("strong",{children:"对比说明:"})," 左侧使用 useSyncExternalStore 订阅全局状态， 右侧使用 useState 管理本地状态。全局状态可以在多个组件间共享。"]})})]})})},C=`import React, { useState, useSyncExternalStore } from 'react';\r
\r
// 简单的事件发射器\r
class EventEmitter {\r
  private listeners: { [key: string]: Function[] } = {};\r
\r
  on(event: string, listener: Function) {\r
    if (!this.listeners[event]) {\r
      this.listeners[event] = [];\r
    }\r
    this.listeners[event].push(listener);\r
  }\r
\r
  off(event: string, listener: Function) {\r
    if (!this.listeners[event]) return;\r
    this.listeners[event] = this.listeners[event].filter((l) => l !== listener);\r
  }\r
\r
  emit(event: string, ...args: any[]) {\r
    if (!this.listeners[event]) return;\r
    this.listeners[event].forEach((listener) => listener(...args));\r
  }\r
}\r
\r
// 全局状态管理器\r
class GlobalStore extends EventEmitter {\r
  private state: any = {\r
    count: 0,\r
    user: { name: "Guest", isLoggedIn: false },\r
    theme: "light",\r
    notifications: [],\r
  };\r
\r
  getState() {\r
    return this.state;\r
  }\r
\r
  setState(newState: Partial<typeof this.state>) {\r
    this.state = { ...this.state, ...newState };\r
    this.emit("change");\r
  }\r
\r
  increment() {\r
    this.setState({ count: this.state.count + 1 });\r
  }\r
\r
  decrement() {\r
    this.setState({ count: this.state.count - 1 });\r
  }\r
\r
  setUser(user: { name: string; isLoggedIn: boolean }) {\r
    this.setState({ user });\r
  }\r
\r
  setTheme(theme: string) {\r
    this.setState({ theme });\r
  }\r
\r
  addNotification(message: string) {\r
    const notification = {\r
      id: Date.now(),\r
      message,\r
      timestamp: new Date().toLocaleTimeString(),\r
    };\r
    this.setState({\r
      notifications: [...this.state.notifications, notification],\r
    });\r
  }\r
\r
  removeNotification(id: number) {\r
    this.setState({\r
      notifications: this.state.notifications.filter((n: any) => n.id !== id),\r
    });\r
  }\r
}\r
\r
const globalStore = new GlobalStore();\r
\r
// 基础计数器演示\r
const BasicCounterDemo: React.FC = () => {\r
  // 使用 useSyncExternalStore 订阅全局状态\r
  const state = useSyncExternalStore(\r
    (callback) => {\r
      globalStore.on("change", callback);\r
      return () => globalStore.off("change", callback);\r
    },\r
    () => globalStore.getState()\r
  );\r
\r
  const [localCount, setLocalCount] = useState(0);\r
\r
  return (\r
    <div className="space-y-6">\r
      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">\r
        <h3 className="text-lg font-semibold text-blue-800 mb-3">\r
          基础计数器演示\r
        </h3>\r
\r
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">\r
          <div className="bg-white p-4 rounded border">\r
            <h4 className="font-semibold text-blue-700 mb-3">\r
              全局状态 (useSyncExternalStore)\r
            </h4>\r
            <div className="text-2xl font-bold text-blue-600 mb-3">\r
              计数: {state.count}\r
            </div>\r
            <div className="space-x-2">\r
              <button\r
                onClick={() => globalStore.increment()}\r
                className="px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"\r
              >\r
                +1\r
              </button>\r
              <button\r
                onClick={() => globalStore.decrement()}\r
                className="px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"\r
              >\r
                -1\r
              </button>\r
            </div>\r
          </div>\r
\r
          <div className="bg-white p-4 rounded border">\r
            <h4 className="font-semibold text-gray-700 mb-3">\r
              本地状态 (useState)\r
            </h4>\r
            <div className="text-2xl font-bold text-gray-600 mb-3">\r
              计数: {localCount}\r
            </div>\r
            <div className="space-x-2">\r
              <button\r
                onClick={() => setLocalCount((prev) => prev + 1)}\r
                className="px-3 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"\r
              >\r
                +1\r
              </button>\r
              <button\r
                onClick={() => setLocalCount((prev) => prev - 1)}\r
                className="px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"\r
              >\r
                -1\r
              </button>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div className="mt-4 bg-blue-100 p-3 rounded">\r
          <p className="text-sm text-blue-700">\r
            <strong>对比说明:</strong> 左侧使用 useSyncExternalStore\r
            订阅全局状态， 右侧使用 useState\r
            管理本地状态。全局状态可以在多个组件间共享。\r
          </p>\r
        </div>\r
      </div>\r
    </div>\r
  );\r
};\r
\r
export { BasicCounterDemo, globalStore };`,L=()=>{const s=o.useCallback(d=>{const c=()=>d();return window.addEventListener("resize",c),()=>window.removeEventListener("resize",c)},[]),r=o.useCallback(()=>JSON.stringify({width:window.innerWidth,height:window.innerHeight}),[]),t=o.useCallback(()=>JSON.stringify({width:1024,height:768}),[]),n=o.useSyncExternalStore(s,r,t),l=o.useMemo(()=>JSON.parse(n),[n]),i=o.useCallback(d=>{const c=()=>d(),x=()=>d();return window.addEventListener("online",c),window.addEventListener("offline",x),()=>{window.removeEventListener("online",c),window.removeEventListener("offline",x)}},[]),u=o.useCallback(()=>navigator.onLine,[]),p=o.useCallback(()=>!0,[]),g=o.useSyncExternalStore(i,u,p),m=o.useMemo(()=>window.matchMedia("(max-width: 768px)"),[]),v=o.useCallback(d=>{const c=()=>d();return m.addEventListener("change",c),()=>m.removeEventListener("change",c)},[m]),N=o.useCallback(()=>m.matches,[m]),S=o.useCallback(()=>!1,[]),h=o.useSyncExternalStore(v,N,S);return e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-indigo-50 p-4 rounded-lg border border-indigo-200",children:[e.jsx("h3",{className:"text-lg font-semibold text-indigo-800 mb-3",children:"浏览器 API 集成演示"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 mb-4",children:[e.jsxs("div",{className:"bg-white p-4 rounded border",children:[e.jsx("h4",{className:"font-semibold text-indigo-700 mb-2",children:"窗口尺寸"}),e.jsxs("div",{className:"space-y-1",children:[e.jsxs("p",{className:"text-sm",children:["宽度: ",e.jsxs("span",{className:"font-mono",children:[l.width,"px"]})]}),e.jsxs("p",{className:"text-sm",children:["高度: ",e.jsxs("span",{className:"font-mono",children:[l.height,"px"]})]}),e.jsx("p",{className:"text-xs text-gray-500 mt-2",children:"调整浏览器窗口大小试试"})]})]}),e.jsxs("div",{className:"bg-white p-4 rounded border",children:[e.jsx("h4",{className:"font-semibold text-indigo-700 mb-2",children:"网络状态"}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("span",{className:`w-3 h-3 rounded-full ${g?"bg-green-500":"bg-red-500"}`}),e.jsx("span",{className:g?"text-green-600":"text-red-600",children:g?"在线":"离线"})]}),e.jsx("p",{className:"text-xs text-gray-500 mt-2",children:"断开网络连接试试"})]}),e.jsxs("div",{className:"bg-white p-4 rounded border",children:[e.jsx("h4",{className:"font-semibold text-indigo-700 mb-2",children:"设备类型"}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("span",{className:"text-2xl",children:h?"📱":"💻"}),e.jsx("span",{className:h?"text-blue-600":"text-purple-600",children:h?"移动设备":"桌面设备"})]}),e.jsx("p",{className:"text-xs text-gray-500 mt-2",children:"基于屏幕宽度 ≤ 768px 判断"})]})]}),e.jsxs("div",{className:"bg-white p-4 rounded border",children:[e.jsx("h4",{className:"font-semibold text-indigo-700 mb-3",children:"技术说明"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-sm",children:[e.jsxs("div",{children:[e.jsx("h5",{className:"font-medium mb-2",children:"订阅函数实现"}),e.jsxs("ul",{className:"space-y-1 text-gray-600",children:[e.jsx("li",{children:"• 添加事件监听器"}),e.jsx("li",{children:"• 返回清理函数"}),e.jsx("li",{children:"• 自动处理订阅/取消订阅"})]})]}),e.jsxs("div",{children:[e.jsx("h5",{className:"font-medium mb-2",children:"快照函数实现"}),e.jsxs("ul",{className:"space-y-1 text-gray-600",children:[e.jsx("li",{children:"• 返回当前状态值"}),e.jsx("li",{children:"• 保持函数纯净性"}),e.jsx("li",{children:"• 支持服务端渲染"})]})]})]})]}),e.jsx("div",{className:"bg-indigo-100 p-3 rounded",children:e.jsxs("p",{className:"text-sm text-indigo-700",children:[e.jsx("strong",{children:"API 集成:"})," useSyncExternalStore 可以轻松集成各种浏览器 API， 实现响应式的状态管理，确保 UI 与外部状态保持同步。"]})})]})})},I=`import React, { useSyncExternalStore, useMemo, useCallback } from "react";\r
\r
// 浏览器 API 集成演示\r
const BrowserAPIDemo: React.FC = () => {\r
  // 窗口尺寸订阅 - 使用稳定的订阅和快照函数避免死循环\r
  const windowSizeSubscribe = useCallback((callback: () => void) => {\r
    const handleResize = () => callback();\r
    window.addEventListener("resize", handleResize);\r
    return () => window.removeEventListener("resize", handleResize);\r
  }, []);\r
\r
  const getWindowSizeSnapshot = useCallback(() => {\r
    return JSON.stringify({ width: window.innerWidth, height: window.innerHeight });\r
  }, []);\r
\r
  const getWindowSizeServerSnapshot = useCallback(() => {\r
    return JSON.stringify({ width: 1024, height: 768 });\r
  }, []);\r
\r
  const windowSizeString = useSyncExternalStore(\r
    windowSizeSubscribe,\r
    getWindowSizeSnapshot,\r
    getWindowSizeServerSnapshot\r
  );\r
\r
  const windowSize = useMemo(() => JSON.parse(windowSizeString), [windowSizeString]);\r
\r
  // 网络状态订阅\r
  const networkSubscribe = useCallback((callback: () => void) => {\r
    const handleOnline = () => callback();\r
    const handleOffline = () => callback();\r
    window.addEventListener("online", handleOnline);\r
    window.addEventListener("offline", handleOffline);\r
    return () => {\r
      window.removeEventListener("online", handleOnline);\r
      window.removeEventListener("offline", handleOffline);\r
    };\r
  }, []);\r
\r
  const getNetworkSnapshot = useCallback(() => navigator.onLine, []);\r
  const getNetworkServerSnapshot = useCallback(() => true, []);\r
\r
  const isOnline = useSyncExternalStore(\r
    networkSubscribe,\r
    getNetworkSnapshot,\r
    getNetworkServerSnapshot\r
  );\r
\r
  // 媒体查询订阅 - 缓存 MediaQueryList 对象避免重复创建\r
  const mediaQuery = useMemo(() => window.matchMedia("(max-width: 768px)"), []);\r
\r
  const mediaQuerySubscribe = useCallback((callback: () => void) => {\r
    const handleChange = () => callback();\r
    mediaQuery.addEventListener("change", handleChange);\r
    return () => mediaQuery.removeEventListener("change", handleChange);\r
  }, [mediaQuery]);\r
\r
  const getMediaQuerySnapshot = useCallback(() => mediaQuery.matches, [mediaQuery]);\r
  const getMediaQueryServerSnapshot = useCallback(() => false, []);\r
\r
  const isMobile = useSyncExternalStore(\r
    mediaQuerySubscribe,\r
    getMediaQuerySnapshot,\r
    getMediaQueryServerSnapshot\r
  );\r
\r
  return (\r
    <div className="space-y-6">\r
      <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">\r
        <h3 className="text-lg font-semibold text-indigo-800 mb-3">\r
          浏览器 API 集成演示\r
        </h3>\r
\r
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">\r
          <div className="bg-white p-4 rounded border">\r
            <h4 className="font-semibold text-indigo-700 mb-2">窗口尺寸</h4>\r
            <div className="space-y-1">\r
              <p className="text-sm">\r
                宽度: <span className="font-mono">{windowSize.width}px</span>\r
              </p>\r
              <p className="text-sm">\r
                高度: <span className="font-mono">{windowSize.height}px</span>\r
              </p>\r
              <p className="text-xs text-gray-500 mt-2">\r
                调整浏览器窗口大小试试\r
              </p>\r
            </div>\r
          </div>\r
\r
          <div className="bg-white p-4 rounded border">\r
            <h4 className="font-semibold text-indigo-700 mb-2">网络状态</h4>\r
            <div className="flex items-center space-x-2">\r
              <span\r
                className={\`w-3 h-3 rounded-full \${\r
                  isOnline ? "bg-green-500" : "bg-red-500"\r
                }\`}\r
              ></span>\r
              <span className={isOnline ? "text-green-600" : "text-red-600"}>\r
                {isOnline ? "在线" : "离线"}\r
              </span>\r
            </div>\r
            <p className="text-xs text-gray-500 mt-2">断开网络连接试试</p>\r
          </div>\r
\r
          <div className="bg-white p-4 rounded border">\r
            <h4 className="font-semibold text-indigo-700 mb-2">设备类型</h4>\r
            <div className="flex items-center space-x-2">\r
              <span className="text-2xl">{isMobile ? "📱" : "💻"}</span>\r
              <span className={isMobile ? "text-blue-600" : "text-purple-600"}>\r
                {isMobile ? "移动设备" : "桌面设备"}\r
              </span>\r
            </div>\r
            <p className="text-xs text-gray-500 mt-2">\r
              基于屏幕宽度 ≤ 768px 判断\r
            </p>\r
          </div>\r
        </div>\r
\r
        <div className="bg-white p-4 rounded border">\r
          <h4 className="font-semibold text-indigo-700 mb-3">技术说明</h4>\r
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">\r
            <div>\r
              <h5 className="font-medium mb-2">订阅函数实现</h5>\r
              <ul className="space-y-1 text-gray-600">\r
                <li>• 添加事件监听器</li>\r
                <li>• 返回清理函数</li>\r
                <li>• 自动处理订阅/取消订阅</li>\r
              </ul>\r
            </div>\r
            <div>\r
              <h5 className="font-medium mb-2">快照函数实现</h5>\r
              <ul className="space-y-1 text-gray-600">\r
                <li>• 返回当前状态值</li>\r
                <li>• 保持函数纯净性</li>\r
                <li>• 支持服务端渲染</li>\r
              </ul>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div className="bg-indigo-100 p-3 rounded">\r
          <p className="text-sm text-indigo-700">\r
            <strong>API 集成:</strong> useSyncExternalStore\r
            可以轻松集成各种浏览器 API， 实现响应式的状态管理，确保 UI\r
            与外部状态保持同步。\r
          </p>\r
        </div>\r
      </div>\r
    </div>\r
  );\r
};\r
\r
export { BrowserAPIDemo };\r
`,P=()=>{const s=o.useSyncExternalStore(n=>(a.on("change",n),()=>a.off("change",n)),()=>a.getState()),r=[{type:"info",label:"信息",color:"blue"},{type:"success",label:"成功",color:"green"},{type:"warning",label:"警告",color:"yellow"},{type:"error",label:"错误",color:"red"}],t=n=>{const l={info:"这是一条信息通知",success:"操作成功完成！",warning:"请注意这个警告",error:"发生了一个错误"};a.addNotification(l[n]||"通知消息")};return e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-orange-50 p-4 rounded-lg border border-orange-200",children:[e.jsx("h3",{className:"text-lg font-semibold text-orange-800 mb-3",children:"通知系统演示"}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-white p-4 rounded border",children:[e.jsx("h4",{className:"font-semibold text-orange-700 mb-3",children:"添加通知"}),e.jsx("div",{className:"grid grid-cols-2 gap-2 mb-4",children:r.map(({type:n,label:l,color:i})=>e.jsx("button",{onClick:()=>t(n),className:`px-3 py-2 rounded text-white transition-colors ${i==="blue"?"bg-blue-500 hover:bg-blue-600":i==="green"?"bg-green-500 hover:bg-green-600":i==="yellow"?"bg-yellow-500 hover:bg-yellow-600":"bg-red-500 hover:bg-red-600"}`,children:l},n))}),e.jsx("button",{onClick:()=>a.setState({notifications:[]}),className:"w-full px-3 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors",children:"清空所有通知"})]}),e.jsxs("div",{className:"bg-white p-4 rounded border",children:[e.jsxs("div",{className:"flex items-center justify-between mb-3",children:[e.jsx("h4",{className:"font-semibold text-orange-700",children:"通知列表"}),e.jsxs("span",{className:"bg-orange-100 text-orange-800 px-2 py-1 rounded text-sm",children:[s.notifications.length," 条"]})]}),e.jsx("div",{className:"max-h-40 overflow-y-auto space-y-2",children:s.notifications.length===0?e.jsx("p",{className:"text-gray-500 text-center py-4",children:"暂无通知"}):s.notifications.map(n=>e.jsxs("div",{className:"flex items-center justify-between bg-gray-50 p-2 rounded border",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("p",{className:"text-sm text-gray-800",children:n.message}),e.jsx("p",{className:"text-xs text-gray-500",children:n.timestamp})]}),e.jsx("button",{onClick:()=>a.removeNotification(n.id),className:"ml-2 text-red-500 hover:text-red-700 transition-colors",children:"✕"})]},n.id))})]})]}),e.jsx("div",{className:"mt-4 bg-orange-100 p-3 rounded",children:e.jsxs("p",{className:"text-sm text-orange-700",children:[e.jsx("strong",{children:"全局状态:"})," 通知系统展示了如何使用 useSyncExternalStore 管理复杂的全局状态，所有组件都能实时接收通知变化。"]})})]})})},T=`import React, { useSyncExternalStore } from "react";\r
import { globalStore } from "./BasicCounterDemo";\r
\r
// 通知系统演示\r
const NotificationSystemDemo: React.FC = () => {\r
  const state = useSyncExternalStore(\r
    (callback) => {\r
      globalStore.on("change", callback);\r
      return () => globalStore.off("change", callback);\r
    },\r
    () => globalStore.getState()\r
  );\r
\r
  const notificationTypes = [\r
    { type: "info", label: "信息", color: "blue" },\r
    { type: "success", label: "成功", color: "green" },\r
    { type: "warning", label: "警告", color: "yellow" },\r
    { type: "error", label: "错误", color: "red" },\r
  ];\r
\r
  const addNotification = (type: string) => {\r
    const messages = {\r
      info: "这是一条信息通知",\r
      success: "操作成功完成！",\r
      warning: "请注意这个警告",\r
      error: "发生了一个错误",\r
    };\r
    globalStore.addNotification(\r
      messages[type as keyof typeof messages] || "通知消息"\r
    );\r
  };\r
\r
  return (\r
    <div className="space-y-6">\r
      <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">\r
        <h3 className="text-lg font-semibold text-orange-800 mb-3">\r
          通知系统演示\r
        </h3>\r
\r
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">\r
          <div className="bg-white p-4 rounded border">\r
            <h4 className="font-semibold text-orange-700 mb-3">添加通知</h4>\r
            <div className="grid grid-cols-2 gap-2 mb-4">\r
              {notificationTypes.map(({ type, label, color }) => (\r
                <button\r
                  key={type}\r
                  onClick={() => addNotification(type)}\r
                  className={\`px-3 py-2 rounded text-white transition-colors \${\r
                    color === "blue"\r
                      ? "bg-blue-500 hover:bg-blue-600"\r
                      : color === "green"\r
                      ? "bg-green-500 hover:bg-green-600"\r
                      : color === "yellow"\r
                      ? "bg-yellow-500 hover:bg-yellow-600"\r
                      : "bg-red-500 hover:bg-red-600"\r
                  }\`}\r
                >\r
                  {label}\r
                </button>\r
              ))}\r
            </div>\r
            <button\r
              onClick={() => globalStore.setState({ notifications: [] })}\r
              className="w-full px-3 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"\r
            >\r
              清空所有通知\r
            </button>\r
          </div>\r
\r
          <div className="bg-white p-4 rounded border">\r
            <div className="flex items-center justify-between mb-3">\r
              <h4 className="font-semibold text-orange-700">通知列表</h4>\r
              <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-sm">\r
                {state.notifications.length} 条\r
              </span>\r
            </div>\r
            <div className="max-h-40 overflow-y-auto space-y-2">\r
              {state.notifications.length === 0 ? (\r
                <p className="text-gray-500 text-center py-4">暂无通知</p>\r
              ) : (\r
                state.notifications.map((notification: any) => (\r
                  <div\r
                    key={notification.id}\r
                    className="flex items-center justify-between bg-gray-50 p-2 rounded border"\r
                  >\r
                    <div className="flex-1">\r
                      <p className="text-sm text-gray-800">\r
                        {notification.message}\r
                      </p>\r
                      <p className="text-xs text-gray-500">\r
                        {notification.timestamp}\r
                      </p>\r
                    </div>\r
                    <button\r
                      onClick={() =>\r
                        globalStore.removeNotification(notification.id)\r
                      }\r
                      className="ml-2 text-red-500 hover:text-red-700 transition-colors"\r
                    >\r
                      ✕\r
                    </button>\r
                  </div>\r
                ))\r
              )}\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div className="mt-4 bg-orange-100 p-3 rounded">\r
          <p className="text-sm text-orange-700">\r
            <strong>全局状态:</strong> 通知系统展示了如何使用\r
            useSyncExternalStore\r
            管理复杂的全局状态，所有组件都能实时接收通知变化。\r
          </p>\r
        </div>\r
      </div>\r
    </div>\r
  );\r
};\r
\r
export { NotificationSystemDemo };\r
`,D=()=>{const s=o.useSyncExternalStore(n=>(a.on("change",n),()=>a.off("change",n)),()=>a.getState()),r={light:{bg:"bg-white",text:"text-gray-800",border:"border-gray-200"},dark:{bg:"bg-gray-800",text:"text-white",border:"border-gray-600"},blue:{bg:"bg-blue-100",text:"text-blue-800",border:"border-blue-300"},green:{bg:"bg-green-100",text:"text-green-800",border:"border-green-300"}},t=r[s.theme]||r.light;return e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-purple-50 p-4 rounded-lg border border-purple-200",children:[e.jsx("h3",{className:"text-lg font-semibold text-purple-800 mb-3",children:"主题切换演示"}),e.jsx("div",{className:"mb-4 flex flex-wrap gap-2",children:Object.keys(r).map(n=>e.jsx("button",{onClick:()=>{a.setTheme(n),a.addNotification(`主题已切换为 ${n}`)},className:`px-3 py-2 rounded transition-colors ${s.theme===n?"bg-purple-500 text-white":"bg-gray-200 text-gray-700 hover:bg-gray-300"}`,children:n.charAt(0).toUpperCase()+n.slice(1)},n))}),e.jsxs("div",{className:`p-6 rounded-lg border-2 transition-all duration-300 ${t.bg} ${t.text} ${t.border}`,children:[e.jsx("h4",{className:"text-xl font-bold mb-3",children:"主题预览区域"}),e.jsxs("p",{className:"mb-4",children:["当前主题: ",e.jsx("strong",{children:s.theme})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("h5",{className:"font-semibold",children:"示例内容"}),e.jsx("p",{className:"text-sm",children:"这是一段示例文本，展示当前主题的文字颜色。"}),e.jsx("button",{className:`px-3 py-1 rounded border ${t.border} hover:opacity-80 transition-opacity`,children:"示例按钮"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h5",{className:"font-semibold",children:"主题信息"}),e.jsxs("ul",{className:"text-sm space-y-1",children:[e.jsxs("li",{children:["• 背景: ",t.bg]}),e.jsxs("li",{children:["• 文字: ",t.text]}),e.jsxs("li",{children:["• 边框: ",t.border]})]})]})]})]}),e.jsx("div",{className:"mt-4 bg-purple-100 p-3 rounded",children:e.jsxs("p",{className:"text-sm text-purple-700",children:[e.jsx("strong",{children:"实时同步:"})," ","主题变化会立即应用到所有使用该状态的组件， 实现了全局主题的统一管理。"]})})]})})},R=`import React, { useSyncExternalStore } from 'react';
import { globalStore } from './BasicCounterDemo';

// 主题切换演示
const ThemeSwitcherDemo: React.FC = () => {
  const state = useSyncExternalStore(
    (callback) => {
      globalStore.on("change", callback);
      return () => globalStore.off("change", callback);
    },
    () => globalStore.getState()
  );

  const themes = {
    light: { bg: "bg-white", text: "text-gray-800", border: "border-gray-200" },
    dark: { bg: "bg-gray-800", text: "text-white", border: "border-gray-600" },
    blue: {
      bg: "bg-blue-100",
      text: "text-blue-800",
      border: "border-blue-300",
    },
    green: {
      bg: "bg-green-100",
      text: "text-green-800",
      border: "border-green-300",
    },
  };

  const currentTheme =
    themes[state.theme as keyof typeof themes] || themes.light;

  return (
    <div className="space-y-6">
      <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
        <h3 className="text-lg font-semibold text-purple-800 mb-3">
          主题切换演示
        </h3>

        <div className="mb-4 flex flex-wrap gap-2">
          {Object.keys(themes).map((theme) => (
            <button
              key={theme}
              onClick={() => {
                globalStore.setTheme(theme);
                globalStore.addNotification(\`主题已切换为 \${theme}\`);
              }}
              className={\`px-3 py-2 rounded transition-colors \${
                state.theme === theme
                  ? "bg-purple-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }\`}
            >
              {theme.charAt(0).toUpperCase() + theme.slice(1)}
            </button>
          ))}
        </div>

        <div
          className={\`p-6 rounded-lg border-2 transition-all duration-300 \${currentTheme.bg} \${currentTheme.text} \${currentTheme.border}\`}
        >
          <h4 className="text-xl font-bold mb-3">主题预览区域</h4>
          <p className="mb-4">
            当前主题: <strong>{state.theme}</strong>
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h5 className="font-semibold">示例内容</h5>
              <p className="text-sm">
                这是一段示例文本，展示当前主题的文字颜色。
              </p>
              <button
                className={\`px-3 py-1 rounded border \${currentTheme.border} hover:opacity-80 transition-opacity\`}
              >
                示例按钮
              </button>
            </div>
            <div className="space-y-2">
              <h5 className="font-semibold">主题信息</h5>
              <ul className="text-sm space-y-1">
                <li>• 背景: {currentTheme.bg}</li>
                <li>• 文字: {currentTheme.text}</li>
                <li>• 边框: {currentTheme.border}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-4 bg-purple-100 p-3 rounded">
          <p className="text-sm text-purple-700">
            <strong>实时同步:</strong>{" "}
            主题变化会立即应用到所有使用该状态的组件，
            实现了全局主题的统一管理。
          </p>
        </div>
      </div>
    </div>
  );
};

export { ThemeSwitcherDemo };`,z=()=>{const s=o.useSyncExternalStore(i=>(a.on("change",i),()=>a.off("change",i)),()=>a.getState()),[r,t]=o.useState(""),n=()=>{r.trim()&&(a.setUser({name:r,isLoggedIn:!0}),a.addNotification(`欢迎 ${r}！`),t(""))},l=()=>{a.setUser({name:"Guest",isLoggedIn:!1}),a.addNotification("已退出登录")};return e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-green-50 p-4 rounded-lg border border-green-200",children:[e.jsx("h3",{className:"text-lg font-semibold text-green-800 mb-3",children:"用户状态管理"}),e.jsxs("div",{className:"bg-white p-4 rounded border mb-4",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-green-700",children:"当前用户"}),e.jsx("p",{className:"text-lg",children:s.user.isLoggedIn?e.jsxs("span",{className:"text-green-600",children:["👤 ",s.user.name]}):e.jsx("span",{className:"text-gray-500",children:"👤 未登录"})})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("span",{className:`w-3 h-3 rounded-full ${s.user.isLoggedIn?"bg-green-500":"bg-gray-400"}`}),e.jsx("span",{className:"text-sm text-gray-600",children:s.user.isLoggedIn?"在线":"离线"})]})]}),s.user.isLoggedIn?e.jsx("button",{onClick:l,className:"px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors",children:"退出登录"}):e.jsxs("div",{className:"flex space-x-2",children:[e.jsx("input",{type:"text",value:r,onChange:i=>t(i.target.value),placeholder:"输入用户名",className:"flex-1 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500",onKeyPress:i=>i.key==="Enter"&&n()}),e.jsx("button",{onClick:n,disabled:!r.trim(),className:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",children:"登录"})]})]}),e.jsx("div",{className:"bg-green-100 p-3 rounded",children:e.jsxs("p",{className:"text-sm text-green-700",children:[e.jsx("strong",{children:"状态同步:"})," 用户状态变化会立即同步到所有订阅的组件， 实现了跨组件的状态共享。"]})})]})})},A=`import React, { useState, useSyncExternalStore } from "react";

import { globalStore } from "./BasicCounterDemo";

// 用户状态管理演示
const UserStateDemo: React.FC = () => {
  const state = useSyncExternalStore(
    (callback) => {
      globalStore.on("change", callback);
      return () => globalStore.off("change", callback);
    },
    () => globalStore.getState()
  );

  const [username, setUsername] = useState("");

  const handleLogin = () => {
    if (username.trim()) {
      globalStore.setUser({ name: username, isLoggedIn: true });
      globalStore.addNotification(\`欢迎 \${username}！\`);
      setUsername("");
    }
  };

  const handleLogout = () => {
    globalStore.setUser({ name: "Guest", isLoggedIn: false });
    globalStore.addNotification("已退出登录");
  };

  return (
    <div className="space-y-6">
      <div className="bg-green-50 p-4 rounded-lg border border-green-200">
        <h3 className="text-lg font-semibold text-green-800 mb-3">
          用户状态管理
        </h3>

        <div className="bg-white p-4 rounded border mb-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h4 className="font-semibold text-green-700">当前用户</h4>
              <p className="text-lg">
                {state.user.isLoggedIn ? (
                  <span className="text-green-600">👤 {state.user.name}</span>
                ) : (
                  <span className="text-gray-500">👤 未登录</span>
                )}
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <span
                className={\`w-3 h-3 rounded-full \${
                  state.user.isLoggedIn ? "bg-green-500" : "bg-gray-400"
                }\`}
              ></span>
              <span className="text-sm text-gray-600">
                {state.user.isLoggedIn ? "在线" : "离线"}
              </span>
            </div>
          </div>

          {!state.user.isLoggedIn ? (
            <div className="flex space-x-2">
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="输入用户名"
                className="flex-1 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                onKeyPress={(e) => e.key === "Enter" && handleLogin()}
              />
              <button
                onClick={handleLogin}
                disabled={!username.trim()}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                登录
              </button>
            </div>
          ) : (
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
            >
              退出登录
            </button>
          )}
        </div>

        <div className="bg-green-100 p-3 rounded">
          <p className="text-sm text-green-700">
            <strong>状态同步:</strong> 用户状态变化会立即同步到所有订阅的组件，
            实现了跨组件的状态共享。
          </p>
        </div>
      </div>
    </div>
  );
};

export { UserStateDemo };
`,U=()=>e.jsx(w,{title:"useSyncExternalStore",description:"useSyncExternalStore 是 React 18 引入的一个 Hook，用于订阅外部数据源。它允许组件与外部状态管理库、浏览器 API 或其他外部数据源进行同步。",overview:[{title:"核心概念",items:["订阅外部数据源","快照函数获取状态","服务端渲染支持","状态同步一致性"]},{title:"主要优势",items:["外部状态库集成","自动订阅管理","并发特性支持","一致状态快照"]},{title:"适用场景",items:["第三方状态管理","浏览器 API 订阅","实时数据订阅","全局状态管理"]},{title:"注意事项",items:["订阅函数返回清理","快照函数不可变值","避免副作用操作","考虑 SSR 兼容性"]}],examples:[{title:"基础计数器",component:e.jsx(E,{}),description:"演示 useSyncExternalStore 的基本用法和与 useState 的对比",observationPoints:["点击全局状态的按钮，观察状态的实时同步","对比本地状态和全局状态的行为差异","全局状态可以在多个组件间共享","状态变化会立即反映到所有订阅的组件"],keyPoints:["useSyncExternalStore 用于订阅外部状态","subscribe 函数处理订阅和取消订阅","getSnapshot 函数返回当前状态快照","状态变化会触发组件重新渲染"],commonTraps:["订阅函数不稳定导致重复订阅","快照函数不纯净导致性能问题","忘记在订阅函数中返回清理函数"],solutions:["使用 useCallback 稳定订阅函数","确保快照函数是纯函数","始终返回清理函数取消订阅"],codeExample:{code:C,highlights:[10,20,30],title:"基础计数器源码"}},{title:"用户状态管理",component:e.jsx(z,{}),description:"演示复杂状态对象的管理和用户认证流程",observationPoints:["输入用户名并登录，观察状态的变化","登录后查看用户信息的实时显示","退出登录时状态立即更新","通知系统会自动添加相关消息"],keyPoints:["支持复杂的状态对象管理","状态变化会触发相关的副作用","可以实现用户认证等业务逻辑","状态同步是自动和即时的"],commonTraps:["状态更新时丢失其他属性","忘记处理异步状态变化","状态结构设计不合理"],solutions:["使用展开运算符保持状态完整性","合理设计状态更新的时机","采用扁平化的状态结构"],codeExample:{code:A,highlights:[21,31,41],title:"用户状态同步源码"}},{title:"主题切换系统",component:e.jsx(D,{}),description:"演示全局主题管理和实时样式更新",observationPoints:["点击不同主题按钮，观察样式的即时变化","主题信息会实时显示在预览区域","所有使用主题的组件都会同步更新","主题切换会触发通知消息"],keyPoints:["实现全局主题的统一管理","支持多种主题的动态切换","样式变化是响应式的","可以与通知系统集成"],commonTraps:["主题状态与组件状态不同步","样式切换时出现闪烁","主题配置管理混乱"],solutions:["使用全局状态管理主题","通过 CSS 过渡实现平滑切换","采用配置对象管理主题"],codeExample:{code:R,highlights:[18,28,38],title:"主题切换源码"}},{title:"通知系统",component:e.jsx(P,{}),description:"演示消息通知的全局管理和实时更新",observationPoints:["添加不同类型的通知消息","观察通知列表的实时更新","点击删除按钮移除单个通知","使用清空按钮移除所有通知"],keyPoints:["支持多种类型的通知消息","通知状态全局共享","支持单个和批量删除","时间戳自动记录"],commonTraps:["通知数量过多影响性能","通知状态更新不及时","通知样式不统一"],solutions:["限制通知数量或自动清理","使用响应式状态管理","统一通知组件的设计"],codeExample:{code:T,highlights:[15,25,35],title:"通知系统源码"}},{title:"浏览器 API 集成",component:e.jsx(L,{}),description:"演示与浏览器原生 API 的集成，如窗口大小、网络状态等",observationPoints:["调整浏览器窗口大小，观察尺寸的实时变化","断开网络连接，查看在线状态的变化","调整窗口宽度，观察设备类型的判断","所有状态变化都是自动和即时的"],keyPoints:["可以订阅各种浏览器 API","自动处理事件监听器的添加和移除","支持媒体查询等响应式特性","状态变化是响应式的"],commonTraps:["忘记移除事件监听器导致内存泄漏","频繁的状态更新影响性能","服务端渲染时访问浏览器 API"],solutions:["在订阅函数中返回清理函数","使用防抖或节流优化更新频率","提供服务端快照函数"],codeExample:{code:I,highlights:[12,22,32],title:"Browser API 同步源码"}}],tutorial:{concepts:["useSyncExternalStore 的基本概念和用途","订阅函数和快照函数的作用","与传统状态管理的区别","并发渲染中的一致性保证","服务端渲染的支持"],steps:["从 React 中导入 useSyncExternalStore","创建外部状态管理器","实现订阅和取消订阅逻辑","定义获取状态快照的函数","在组件中使用 useSyncExternalStore"],tips:["订阅函数应该是稳定的，避免重复订阅","快照函数应该是纯函数，避免副作用","始终在订阅函数中返回清理函数","考虑服务端渲染时提供服务端快照","合理设计外部状态的结构"]},interview:{questions:[{question:"useSyncExternalStore 解决了什么问题？",answer:"useSyncExternalStore 主要解决了在 React 18 并发渲染中订阅外部状态的一致性问题。它确保组件在并发渲染过程中能够安全地读取外部状态，避免了状态不一致和撕裂现象。"},{question:"useSyncExternalStore 的三个参数分别是什么？",answer:"三个参数分别是：1) subscribe - 订阅函数，用于订阅外部状态变化；2) getSnapshot - 快照函数，用于获取当前状态快照；3) getServerSnapshot - 服务端快照函数（可选），用于服务端渲染时获取初始状态。"},{question:"如何确保订阅函数的稳定性？",answer:"可以通过以下方式确保稳定性：1) 使用 useCallback 包装订阅函数；2) 将订阅逻辑定义在组件外部；3) 避免在订阅函数中使用会变化的依赖；4) 确保订阅函数的引用在组件重新渲染时保持不变。"},{question:"useSyncExternalStore 与 useEffect + useState 的区别？",answer:"主要区别：1) 并发安全性 - useSyncExternalStore 在并发渲染中保证一致性；2) 性能优化 - 自动处理订阅优化；3) 服务端渲染支持 - 内置 SSR 支持；4) 类型安全 - 更好的 TypeScript 支持；5) 专门设计 - 专为外部状态订阅而设计。"}],keyPoints:["React 18 新增的外部状态订阅 Hook","确保并发渲染中的状态一致性","支持服务端渲染","自动处理订阅和取消订阅","适用于状态管理库和浏览器 API 集成"]},bestPractices:{dos:["使用稳定的订阅函数引用","确保快照函数是纯函数","在订阅函数中返回清理函数","为服务端渲染提供快照函数","合理设计外部状态结构"],donts:["不要在快照函数中执行副作用","不要忘记取消订阅","不要频繁改变订阅函数引用","不要在订阅函数中执行异步操作","不要忽视服务端渲染的兼容性"],patterns:["状态管理器模式：创建专门的外部状态管理类","事件订阅模式：使用事件发射器管理状态变化","浏览器 API 集成模式：订阅浏览器原生 API","选择器模式：只订阅状态的特定部分"]}});export{U as default};
