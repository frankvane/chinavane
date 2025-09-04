import{r as h,R as i,j as e}from"./index-CbVlrJMN.js";import{C as b}from"./ComponentTemplate-BnvJNrWP.js";function g(n){const t=h.useRef(1);return t.current++,t.current}const p=({title:n,children:t,className:a=""})=>{const r=g();return e.jsxs("div",{className:`border rounded-lg p-4 shadow-sm ${a}`,children:[n&&e.jsx("h3",{className:"text-lg font-semibold mb-3 text-gray-800",children:n}),e.jsx("div",{className:"text-gray-600",children:t}),e.jsxs("div",{className:"text-xs text-gray-400 mt-2",children:["渲染次数: ",r]})]})},y=()=>{const[n,t]=i.useState(!0),[a,r]=i.useState("这是卡片的内容");return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex gap-4 mb-4",children:[e.jsx("button",{onClick:()=>t(!n),className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600",children:n?"隐藏标题":"显示标题"}),e.jsx("button",{onClick:()=>r(a+"！"),className:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600",children:"更新内容"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs(p,{title:n?"基础卡片":void 0,children:[e.jsx("p",{children:a}),e.jsx("p",{className:"mt-2 text-sm text-gray-500",children:"这是通过 children 插槽传递的内容"})]}),e.jsx(p,{title:n?"富文本卡片":void 0,children:e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-2",children:"支持复杂内容"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[e.jsx("li",{children:"列表项 1"}),e.jsx("li",{children:"列表项 2"}),e.jsx("li",{children:"列表项 3"})]}),e.jsx("button",{className:"mt-3 px-3 py-1 bg-gray-200 text-gray-700 rounded text-sm hover:bg-gray-300",children:"操作按钮"})]})})]})]})},N=({header:n,sidebar:t,footer:a,children:r})=>e.jsxs("div",{className:"min-h-screen flex flex-col",children:[n&&e.jsx("header",{className:"bg-blue-600 text-white p-4",children:n}),e.jsxs("div",{className:"flex flex-1",children:[t&&e.jsx("aside",{className:"w-64 bg-gray-100 p-4",children:t}),e.jsx("main",{className:"flex-1 p-4",children:r})]}),a&&e.jsx("footer",{className:"bg-gray-800 text-white p-4",children:a})]}),v=()=>{const[n,t]=i.useState(!0),[a,r]=i.useState(!0);return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex gap-4 mb-4",children:[e.jsx("button",{onClick:()=>t(!n),className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600",children:n?"隐藏侧边栏":"显示侧边栏"}),e.jsx("button",{onClick:()=>r(!a),className:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600",children:a?"隐藏页脚":"显示页脚"})]}),e.jsx("div",{className:"border rounded-lg overflow-hidden",style:{height:"500px",display:"flex",flexDirection:"column"},children:e.jsx(N,{header:e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("h1",{className:"text-xl font-bold",children:"网站标题"}),e.jsxs("nav",{className:"space-x-4",children:[e.jsx("a",{href:"#",className:"hover:underline",children:"首页"}),e.jsx("a",{href:"#",className:"hover:underline",children:"关于"}),e.jsx("a",{href:"#",className:"hover:underline",children:"联系"})]})]}),sidebar:n?e.jsxs("div",{children:[e.jsx("h3",{className:"font-semibold mb-3",children:"导航菜单"}),e.jsxs("ul",{className:"space-y-2",children:[e.jsx("li",{children:e.jsx("a",{href:"#",className:"text-blue-600 hover:underline",children:"菜单项 1"})}),e.jsx("li",{children:e.jsx("a",{href:"#",className:"text-blue-600 hover:underline",children:"菜单项 2"})}),e.jsx("li",{children:e.jsx("a",{href:"#",className:"text-blue-600 hover:underline",children:"菜单项 3"})})]})]}):void 0,footer:a?e.jsx("div",{className:"text-center",children:e.jsx("p",{children:"© 2024 我的网站. 保留所有权利."})}):void 0,children:e.jsxs("div",{children:[e.jsx("h2",{className:"text-2xl font-bold mb-4",children:"主要内容区域"}),e.jsx("p",{className:"mb-4",children:"这是主要内容区域，通过 children 插槽传递。"}),e.jsx("p",{className:"mb-4",children:"Layout 组件通过具名插槽（header、sidebar、footer）和默认插槽（children） 实现了灵活的页面布局。"}),e.jsxs("div",{className:"bg-gray-50 p-4 rounded",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"特性说明"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[e.jsx("li",{children:"header 插槽：页面顶部导航区域"}),e.jsx("li",{children:"sidebar 插槽：侧边栏导航菜单"}),e.jsx("li",{children:"children 插槽：主要内容区域"}),e.jsxs("li",{children:["footer 插槽：页面底部信息",a?"（当前可见）":"（当前隐藏）"]})]})]}),a&&e.jsx("div",{className:"bg-blue-100 mt-4 p-3 text-sm rounded",children:"底部栏状态：显示中"}),!a&&e.jsx("div",{className:"bg-red-100 mt-4 p-3 text-sm rounded",children:"底部栏状态：隐藏中"})]})})})]})},f=({type:n,title:t,children:a,actions:r,onClose:s})=>{const l={success:"bg-green-50 border-green-200 text-green-800",warning:"bg-yellow-50 border-yellow-200 text-yellow-800",error:"bg-red-50 border-red-200 text-red-800",info:"bg-blue-50 border-blue-200 text-blue-800"},d={success:"✓",warning:"⚠",error:"✕",info:"ℹ"};return e.jsx("div",{className:`border rounded-lg p-4 ${l[n]}`,children:e.jsxs("div",{className:"flex items-start",children:[e.jsx("span",{className:"text-lg mr-3",children:d[n]}),e.jsxs("div",{className:"flex-1",children:[t&&e.jsx("h4",{className:"font-semibold mb-2",children:t}),e.jsx("div",{className:"mb-3",children:a}),r&&e.jsx("div",{className:"flex gap-2",children:r})]}),s&&e.jsx("button",{onClick:s,className:"ml-3 text-gray-400 hover:text-gray-600",children:"×"})]})})},j=()=>{const[n,t]=i.useState([{id:1,type:"success",title:"成功",show:!0},{id:2,type:"warning",title:"警告",show:!0},{id:3,type:"error",title:"错误",show:!0},{id:4,type:"info",title:"信息",show:!0}]),a=s=>{t(n.map(l=>l.id===s?{...l,show:!1}:l))},r=()=>{t(n.map(s=>({...s,show:!0})))};return e.jsxs("div",{className:"space-y-4",children:[e.jsx("button",{onClick:r,className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600",children:"重置所有警告"}),e.jsx("div",{className:"space-y-3",children:n.filter(s=>s.show).map(s=>e.jsxs(f,{type:s.type,title:s.title,onClose:()=>a(s.id),actions:s.type==="error"?e.jsxs("div",{className:"space-x-2",children:[e.jsx("button",{className:"px-3 py-1 bg-red-600 text-white rounded text-sm hover:bg-red-700",children:"重试"}),e.jsx("button",{className:"px-3 py-1 bg-gray-300 text-gray-700 rounded text-sm hover:bg-gray-400",children:"忽略"})]}):s.type==="warning"?e.jsx("button",{className:"px-3 py-1 bg-yellow-600 text-white rounded text-sm hover:bg-yellow-700",children:"了解详情"}):void 0,children:[e.jsxs("p",{children:["这是一个 ",s.type," 类型的警告消息。",s.type==="success"&&"操作已成功完成！",s.type==="warning"&&"请注意这个潜在的问题。",s.type==="error"&&"发生了一个错误，需要您的注意。",s.type==="info"&&"这里有一些有用的信息。"]}),s.type==="error"&&e.jsx("p",{className:"mt-2 text-sm",children:"错误代码: ERR_001 - 请联系技术支持获取帮助。"})]},s.id))}),n.every(s=>!s.show)&&e.jsx("div",{className:"text-center py-8 text-gray-500",children:"所有警告已关闭"})]})};function w({data:n,renderItem:t,renderEmpty:a,renderHeader:r,renderFooter:s,className:l=""}){return n.length===0&&a?e.jsxs("div",{className:`border rounded-lg ${l}`,children:[r&&e.jsx("div",{className:"border-b p-4 bg-gray-50",children:r()}),e.jsx("div",{className:"p-8 text-center",children:a()}),s&&e.jsx("div",{className:"border-t p-4 bg-gray-50",children:s()})]}):e.jsxs("div",{className:`border rounded-lg ${l}`,children:[r&&e.jsx("div",{className:"border-b p-4 bg-gray-50",children:r()}),e.jsx("div",{className:"divide-y",children:n.map((d,o)=>e.jsx("div",{className:"p-4",children:t(d,o)},o))}),s&&e.jsx("div",{className:"border-t p-4 bg-gray-50",children:s()})]})}const C=()=>{const[n,t]=i.useState([{id:1,name:"张三",email:"zhangsan@example.com",role:"管理员"},{id:2,name:"李四",email:"lisi@example.com",role:"用户"},{id:3,name:"王五",email:"wangwu@example.com",role:"用户"}]),[a,r]=i.useState(!1),s=()=>{const o={id:Date.now(),name:`用户${n.length+1}`,email:`user${n.length+1}@example.com`,role:"用户"};t([...n,o])},l=o=>{t(n.filter(u=>u.id!==o))},d=a?[]:n;return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex gap-4 mb-4",children:[e.jsx("button",{onClick:s,className:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600",children:"添加用户"}),e.jsx("button",{onClick:()=>r(!a),className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600",children:a?"显示数据":"显示空状态"})]}),e.jsx(w,{data:d,renderHeader:()=>e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"用户列表"}),e.jsxs("span",{className:"text-sm text-gray-500",children:["共 ",d.length," 个用户"]})]}),renderItem:(o,u)=>e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsx("div",{className:"w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold",children:o.name.charAt(0)}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium",children:o.name}),e.jsx("p",{className:"text-sm text-gray-500",children:o.email})]})]}),e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsx("span",{className:"px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm",children:o.role}),e.jsx("button",{onClick:()=>l(o.id),className:"text-red-500 hover:text-red-700",children:"删除"})]})]}),renderEmpty:()=>e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-6xl mb-4",children:"👥"}),e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"暂无用户"}),e.jsx("p",{className:"text-gray-500 mb-4",children:"还没有添加任何用户"}),e.jsx("button",{onClick:s,className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600",children:"添加第一个用户"})]}),renderFooter:()=>e.jsxs("div",{className:"flex justify-between items-center text-sm text-gray-500",children:[e.jsxs("span",{children:["最后更新: ",new Date().toLocaleTimeString()]}),e.jsx("button",{onClick:s,className:"text-blue-500 hover:text-blue-700",children:"+ 添加用户"})]})})]})},R=({isOpen:n,onClose:t,children:a,size:r="md"})=>{const s={sm:"max-w-sm",md:"max-w-md",lg:"max-w-lg",xl:"max-w-xl"};return h.useEffect(()=>(n?document.body.style.overflow="hidden":document.body.style.overflow="unset",()=>{document.body.style.overflow="unset"}),[n]),n?e.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center",children:[e.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50",onClick:t}),e.jsx("div",{className:`relative bg-white rounded-lg shadow-xl w-full mx-4 ${s[r]}`,children:a})]}):null},c=({children:n,onClose:t})=>e.jsxs("div",{className:"flex items-center justify-between p-6 border-b",children:[e.jsx("div",{className:"text-lg font-semibold",children:n}),t&&e.jsx("button",{onClick:t,className:"text-gray-400 hover:text-gray-600",children:"×"})]}),m=({children:n})=>e.jsx("div",{className:"p-6",children:n}),x=({children:n})=>e.jsx("div",{className:"flex justify-end gap-3 p-6 border-t bg-gray-50",children:n}),D=()=>{const[n,t]=i.useState(!1),[a,r]=i.useState("confirm"),s=o=>{r(o),t(!0)},l=()=>{t(!1)},d=()=>{switch(a){case"confirm":return e.jsxs(e.Fragment,{children:[e.jsx(c,{onClose:l,children:"确认删除"}),e.jsx(m,{children:e.jsx("p",{className:"text-gray-600",children:"您确定要删除这个项目吗？此操作无法撤销。"})}),e.jsxs(x,{children:[e.jsx("button",{onClick:l,className:"px-4 py-2 text-gray-600 border border-gray-300 rounded hover:bg-gray-50",children:"取消"}),e.jsx("button",{onClick:l,className:"px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600",children:"删除"})]})]});case"form":return e.jsxs(e.Fragment,{children:[e.jsx(c,{onClose:l,children:"编辑用户信息"}),e.jsx(m,{children:e.jsxs("form",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"姓名"}),e.jsx("input",{type:"text",className:"w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500",defaultValue:"张三"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"邮箱"}),e.jsx("input",{type:"email",className:"w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500",defaultValue:"zhangsan@example.com"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"角色"}),e.jsxs("select",{className:"w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500",children:[e.jsx("option",{children:"用户"}),e.jsx("option",{children:"管理员"})]})]})]})}),e.jsxs(x,{children:[e.jsx("button",{onClick:l,className:"px-4 py-2 text-gray-600 border border-gray-300 rounded hover:bg-gray-50",children:"取消"}),e.jsx("button",{onClick:l,className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600",children:"保存"})]})]});case"info":return e.jsxs(e.Fragment,{children:[e.jsx(c,{onClose:l,children:"系统信息"}),e.jsx(m,{children:e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-gray-600",children:"版本:"}),e.jsx("span",{className:"font-medium",children:"v1.0.0"})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-gray-600",children:"构建时间:"}),e.jsx("span",{className:"font-medium",children:"2024-01-15"})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-gray-600",children:"环境:"}),e.jsx("span",{className:"font-medium",children:"生产环境"})]}),e.jsx("div",{className:"mt-4 p-3 bg-blue-50 rounded",children:e.jsx("p",{className:"text-sm text-blue-800",children:"这是一个插槽组合示例，展示了如何使用多个插槽组件构建复杂的对话框。"})})]})}),e.jsx(x,{children:e.jsx("button",{onClick:l,className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600",children:"确定"})})]});default:return null}};return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex gap-4",children:[e.jsx("button",{onClick:()=>s("confirm"),className:"px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600",children:"确认对话框"}),e.jsx("button",{onClick:()=>s("form"),className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600",children:"表单对话框"}),e.jsx("button",{onClick:()=>s("info"),className:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600",children:"信息对话框"})]}),e.jsxs("div",{className:"p-4 bg-gray-50 rounded",children:[e.jsx("h4",{className:"font-semibold mb-2",children:"组件组合说明"}),e.jsxs("ul",{className:"text-sm text-gray-600 space-y-1",children:[e.jsx("li",{children:"• Dialog: 主对话框容器，负责遮罩层和定位"}),e.jsx("li",{children:"• DialogHeader: 对话框头部，包含标题和关闭按钮"}),e.jsx("li",{children:"• DialogContent: 对话框内容区域，承载主要内容"}),e.jsx("li",{children:"• DialogFooter: 对话框底部，通常包含操作按钮"})]})]}),e.jsx(R,{isOpen:n,onClose:l,size:"md",children:d()})]})},S=`import React, { ReactNode } from "react";

import { useRenderCount } from "./useRenderCount";

// Card 组件
interface CardProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ title, children, className = "" }) => {
  const renderCount = useRenderCount("Card");

  return (
    <div className={\`border rounded-lg p-4 shadow-sm \${className}\`}>
      {title && (
        <h3 className="text-lg font-semibold mb-3 text-gray-800">{title}</h3>
      )}
      <div className="text-gray-600">{children}</div>
      <div className="text-xs text-gray-400 mt-2">渲染次数: {renderCount}</div>
    </div>
  );
};

// 基础插槽示例
const BasicSlotExample: React.FC = () => {
  const [showTitle, setShowTitle] = React.useState(true);
  const [content, setContent] = React.useState("这是卡片的内容");

  return (
    <div className="space-y-4">
      <div className="flex gap-4 mb-4">
        <button
          onClick={() => setShowTitle(!showTitle)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          {showTitle ? "隐藏标题" : "显示标题"}
        </button>
        <button
          onClick={() => setContent(content + "！")}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          更新内容
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card title={showTitle ? "基础卡片" : undefined}>
          <p>{content}</p>
          <p className="mt-2 text-sm text-gray-500">
            这是通过 children 插槽传递的内容
          </p>
        </Card>

        <Card title={showTitle ? "富文本卡片" : undefined}>
          <div>
            <h4 className="font-medium mb-2">支持复杂内容</h4>
            <ul className="list-disc list-inside space-y-1">
              <li>列表项 1</li>
              <li>列表项 2</li>
              <li>列表项 3</li>
            </ul>
            <button className="mt-3 px-3 py-1 bg-gray-200 text-gray-700 rounded text-sm hover:bg-gray-300">
              操作按钮
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export { Card, BasicSlotExample };
`,k=`import React, { ReactNode } from "react";

// Alert 组件
interface AlertProps {
  type: "success" | "warning" | "error" | "info";
  title?: string;
  children: ReactNode;
  actions?: ReactNode;
  onClose?: () => void;
}

const Alert: React.FC<AlertProps> = ({
  type,
  title,
  children,
  actions,
  onClose,
}) => {
  const typeStyles = {
    success: "bg-green-50 border-green-200 text-green-800",
    warning: "bg-yellow-50 border-yellow-200 text-yellow-800",
    error: "bg-red-50 border-red-200 text-red-800",
    info: "bg-blue-50 border-blue-200 text-blue-800",
  };

  const iconMap = {
    success: "✓",
    warning: "⚠",
    error: "✕",
    info: "ℹ",
  };

  return (
    <div className={\`border rounded-lg p-4 \${typeStyles[type]}\`}>
      <div className="flex items-start">
        <span className="text-lg mr-3">{iconMap[type]}</span>
        <div className="flex-1">
          {title && <h4 className="font-semibold mb-2">{title}</h4>}
          <div className="mb-3">{children}</div>
          {actions && <div className="flex gap-2">{actions}</div>}
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="ml-3 text-gray-400 hover:text-gray-600"
          >
            ×
          </button>
        )}
      </div>
    </div>
  );
};

// 条件插槽示例
const ConditionalSlotExample: React.FC = () => {
  const [alerts, setAlerts] = React.useState([
    { id: 1, type: "success" as const, title: "成功", show: true },
    { id: 2, type: "warning" as const, title: "警告", show: true },
    { id: 3, type: "error" as const, title: "错误", show: true },
    { id: 4, type: "info" as const, title: "信息", show: true },
  ]);

  const closeAlert = (id: number) => {
    setAlerts(
      alerts.map((alert) =>
        alert.id === id ? { ...alert, show: false } : alert
      )
    );
  };

  const resetAlerts = () => {
    setAlerts(alerts.map((alert) => ({ ...alert, show: true })));
  };

  return (
    <div className="space-y-4">
      <button
        onClick={resetAlerts}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        重置所有警告
      </button>

      <div className="space-y-3">
        {alerts
          .filter((alert) => alert.show)
          .map((alert) => (
            <Alert
              key={alert.id}
              type={alert.type}
              title={alert.title}
              onClose={() => closeAlert(alert.id)}
              actions={
                alert.type === "error" ? (
                  <div className="space-x-2">
                    <button className="px-3 py-1 bg-red-600 text-white rounded text-sm hover:bg-red-700">
                      重试
                    </button>
                    <button className="px-3 py-1 bg-gray-300 text-gray-700 rounded text-sm hover:bg-gray-400">
                      忽略
                    </button>
                  </div>
                ) : alert.type === "warning" ? (
                  <button className="px-3 py-1 bg-yellow-600 text-white rounded text-sm hover:bg-yellow-700">
                    了解详情
                  </button>
                ) : undefined
              }
            >
              <p>
                这是一个 {alert.type} 类型的警告消息。
                {alert.type === "success" && "操作已成功完成！"}
                {alert.type === "warning" && "请注意这个潜在的问题。"}
                {alert.type === "error" && "发生了一个错误，需要您的注意。"}
                {alert.type === "info" && "这里有一些有用的信息。"}
              </p>
              {alert.type === "error" && (
                <p className="mt-2 text-sm">
                  错误代码: ERR_001 - 请联系技术支持获取帮助。
                </p>
              )}
            </Alert>
          ))}
      </div>

      {alerts.every((alert) => !alert.show) && (
        <div className="text-center py-8 text-gray-500">所有警告已关闭</div>
      )}
    </div>
  );
};

export { Alert, ConditionalSlotExample };
`,E=`import React, { ReactNode } from "react";

// List 组件
interface ListProps<T> {
  data: T[];
  renderItem: (item: T, index: number) => ReactNode;
  renderEmpty?: () => ReactNode;
  renderHeader?: () => ReactNode;
  renderFooter?: () => ReactNode;
  className?: string;
}

function List<T>({
  data,
  renderItem,
  renderEmpty,
  renderHeader,
  renderFooter,
  className = "",
}: ListProps<T>) {
  if (data.length === 0 && renderEmpty) {
    return (
      <div className={\`border rounded-lg \${className}\`}>
        {renderHeader && (
          <div className="border-b p-4 bg-gray-50">{renderHeader()}</div>
        )}
        <div className="p-8 text-center">{renderEmpty()}</div>
        {renderFooter && (
          <div className="border-t p-4 bg-gray-50">{renderFooter()}</div>
        )}
      </div>
    );
  }

  return (
    <div className={\`border rounded-lg \${className}\`}>
      {renderHeader && (
        <div className="border-b p-4 bg-gray-50">{renderHeader()}</div>
      )}
      <div className="divide-y">
        {data.map((item, index) => (
          <div key={index} className="p-4">
            {renderItem(item, index)}
          </div>
        ))}
      </div>
      {renderFooter && (
        <div className="border-t p-4 bg-gray-50">{renderFooter()}</div>
      )}
    </div>
  );
}

// 动态插槽示例
const DynamicSlotExample: React.FC = () => {
  const [users, setUsers] = React.useState([
    { id: 1, name: "张三", email: "zhangsan@example.com", role: "管理员" },
    { id: 2, name: "李四", email: "lisi@example.com", role: "用户" },
    { id: 3, name: "王五", email: "wangwu@example.com", role: "用户" },
  ]);

  const [showEmpty, setShowEmpty] = React.useState(false);

  const addUser = () => {
    const newUser = {
      id: Date.now(),
      name: \`用户\${users.length + 1}\`,
      email: \`user\${users.length + 1}@example.com\`,
      role: "用户",
    };
    setUsers([...users, newUser]);
  };

  const removeUser = (id: number) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const displayUsers = showEmpty ? [] : users;

  return (
    <div className="space-y-4">
      <div className="flex gap-4 mb-4">
        <button
          onClick={addUser}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          添加用户
        </button>
        <button
          onClick={() => setShowEmpty(!showEmpty)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          {showEmpty ? "显示数据" : "显示空状态"}
        </button>
      </div>

      <List
        data={displayUsers}
        renderHeader={() => (
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">用户列表</h3>
            <span className="text-sm text-gray-500">
              共 {displayUsers.length} 个用户
            </span>
          </div>
        )}
        renderItem={(user, index) => (
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold">
                {user.name.charAt(0)}
              </div>
              <div>
                <h4 className="font-medium">{user.name}</h4>
                <p className="text-sm text-gray-500">{user.email}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm">
                {user.role}
              </span>
              <button
                onClick={() => removeUser(user.id)}
                className="text-red-500 hover:text-red-700"
              >
                删除
              </button>
            </div>
          </div>
        )}
        renderEmpty={() => (
          <div className="text-center">
            <div className="text-6xl mb-4">👥</div>
            <h3 className="text-lg font-semibold mb-2">暂无用户</h3>
            <p className="text-gray-500 mb-4">还没有添加任何用户</p>
            <button
              onClick={addUser}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              添加第一个用户
            </button>
          </div>
        )}
        renderFooter={() => (
          <div className="flex justify-between items-center text-sm text-gray-500">
            <span>最后更新: {new Date().toLocaleTimeString()}</span>
            <button
              onClick={addUser}
              className="text-blue-500 hover:text-blue-700"
            >
              + 添加用户
            </button>
          </div>
        )}
      />
    </div>
  );
};

export { List, DynamicSlotExample };
`,F=`import React, { ReactNode } from "react";

// Layout 组件
interface LayoutProps {
  header?: ReactNode;
  sidebar?: ReactNode;
  footer?: ReactNode;
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({
  header,
  sidebar,
  footer,
  children,
}) => {
  return (
    <div className="min-h-screen flex flex-col">
      {header && (
        <header className="bg-blue-600 text-white p-4">{header}</header>
      )}
      <div className="flex flex-1">
        {sidebar && <aside className="w-64 bg-gray-100 p-4">{sidebar}</aside>}
        <main className="flex-1 p-4">{children}</main>
      </div>
      {footer && (
        <footer className="bg-gray-800 text-white p-4">{footer}</footer>
      )}
    </div>
  );
};

// 具名插槽示例
const NamedSlotExample: React.FC = () => {
  const [showSidebar, setShowSidebar] = React.useState(true);
  const [showFooter, setShowFooter] = React.useState(true);

  return (
    <div className="space-y-4">
      <div className="flex gap-4 mb-4">
        <button
          onClick={() => setShowSidebar(!showSidebar)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          {showSidebar ? "隐藏侧边栏" : "显示侧边栏"}
        </button>
        <button
          onClick={() => setShowFooter(!showFooter)}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          {showFooter ? "隐藏页脚" : "显示页脚"}
        </button>
      </div>

      <div
        className="border rounded-lg overflow-hidden"
        style={{ height: "500px", display: "flex", flexDirection: "column" }}
      >
        <Layout
          header={
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-bold">网站标题</h1>
              <nav className="space-x-4">
                <a href="#" className="hover:underline">
                  首页
                </a>
                <a href="#" className="hover:underline">
                  关于
                </a>
                <a href="#" className="hover:underline">
                  联系
                </a>
              </nav>
            </div>
          }
          sidebar={
            showSidebar ? (
              <div>
                <h3 className="font-semibold mb-3">导航菜单</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-blue-600 hover:underline">
                      菜单项 1
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-blue-600 hover:underline">
                      菜单项 2
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-blue-600 hover:underline">
                      菜单项 3
                    </a>
                  </li>
                </ul>
              </div>
            ) : undefined
          }
          footer={
            showFooter ? (
              <div className="text-center">
                <p>&copy; 2024 我的网站. 保留所有权利.</p>
              </div>
            ) : undefined
          }
        >
          <div>
            <h2 className="text-2xl font-bold mb-4">主要内容区域</h2>
            <p className="mb-4">这是主要内容区域，通过 children 插槽传递。</p>
            <p className="mb-4">
              Layout
              组件通过具名插槽（header、sidebar、footer）和默认插槽（children）
              实现了灵活的页面布局。
            </p>
            <div className="bg-gray-50 p-4 rounded">
              <h3 className="font-semibold mb-2">特性说明</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>header 插槽：页面顶部导航区域</li>
                <li>sidebar 插槽：侧边栏导航菜单</li>
                <li>children 插槽：主要内容区域</li>
                <li>
                  footer 插槽：页面底部信息
                  {showFooter ? "（当前可见）" : "（当前隐藏）"}
                </li>
              </ul>
            </div>
            {showFooter && (
              <div className="bg-blue-100 mt-4 p-3 text-sm rounded">
                底部栏状态：显示中
              </div>
            )}
            {!showFooter && (
              <div className="bg-red-100 mt-4 p-3 text-sm rounded">
                底部栏状态：隐藏中
              </div>
            )}
          </div>
        </Layout>
      </div>
    </div>
  );
};

export { Layout, NamedSlotExample };
`,T=`import React, { ReactNode, useEffect } from "react";

// Dialog 组件
interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
}

const Dialog: React.FC<DialogProps> = ({
  isOpen,
  onClose,
  children,
  size = "md",
}) => {
  const sizeClasses = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />
      <div
        className={\`relative bg-white rounded-lg shadow-xl w-full mx-4 \${sizeClasses[size]}\`}
      >
        {children}
      </div>
    </div>
  );
};

const DialogHeader: React.FC<{ children: ReactNode; onClose?: () => void }> = ({
  children,
  onClose,
}) => {
  return (
    <div className="flex items-center justify-between p-6 border-b">
      <div className="text-lg font-semibold">{children}</div>
      {onClose && (
        <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
          ×
        </button>
      )}
    </div>
  );
};

const DialogContent: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="p-6">{children}</div>;
};

const DialogFooter: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="flex justify-end gap-3 p-6 border-t bg-gray-50">
      {children}
    </div>
  );
};

// 插槽组合示例
const SlotCompositionExample: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [dialogType, setDialogType] = React.useState<
    "confirm" | "form" | "info"
  >("confirm");

  const openDialog = (type: "confirm" | "form" | "info") => {
    setDialogType(type);
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
  };

  const renderDialogContent = () => {
    switch (dialogType) {
      case "confirm":
        return (
          <>
            <DialogHeader onClose={closeDialog}>确认删除</DialogHeader>
            <DialogContent>
              <p className="text-gray-600">
                您确定要删除这个项目吗？此操作无法撤销。
              </p>
            </DialogContent>
            <DialogFooter>
              <button
                onClick={closeDialog}
                className="px-4 py-2 text-gray-600 border border-gray-300 rounded hover:bg-gray-50"
              >
                取消
              </button>
              <button
                onClick={closeDialog}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                删除
              </button>
            </DialogFooter>
          </>
        );
      case "form":
        return (
          <>
            <DialogHeader onClose={closeDialog}>编辑用户信息</DialogHeader>
            <DialogContent>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    姓名
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    defaultValue="张三"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    邮箱
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    defaultValue="zhangsan@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    角色
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>用户</option>
                    <option>管理员</option>
                  </select>
                </div>
              </form>
            </DialogContent>
            <DialogFooter>
              <button
                onClick={closeDialog}
                className="px-4 py-2 text-gray-600 border border-gray-300 rounded hover:bg-gray-50"
              >
                取消
              </button>
              <button
                onClick={closeDialog}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                保存
              </button>
            </DialogFooter>
          </>
        );
      case "info":
        return (
          <>
            <DialogHeader onClose={closeDialog}>系统信息</DialogHeader>
            <DialogContent>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">版本:</span>
                  <span className="font-medium">v1.0.0</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">构建时间:</span>
                  <span className="font-medium">2024-01-15</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">环境:</span>
                  <span className="font-medium">生产环境</span>
                </div>
                <div className="mt-4 p-3 bg-blue-50 rounded">
                  <p className="text-sm text-blue-800">
                    这是一个插槽组合示例，展示了如何使用多个插槽组件构建复杂的对话框。
                  </p>
                </div>
              </div>
            </DialogContent>
            <DialogFooter>
              <button
                onClick={closeDialog}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                确定
              </button>
            </DialogFooter>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-4">
        <button
          onClick={() => openDialog("confirm")}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          确认对话框
        </button>
        <button
          onClick={() => openDialog("form")}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          表单对话框
        </button>
        <button
          onClick={() => openDialog("info")}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          信息对话框
        </button>
      </div>

      <div className="p-4 bg-gray-50 rounded">
        <h4 className="font-semibold mb-2">组件组合说明</h4>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• Dialog: 主对话框容器，负责遮罩层和定位</li>
          <li>• DialogHeader: 对话框头部，包含标题和关闭按钮</li>
          <li>• DialogContent: 对话框内容区域，承载主要内容</li>
          <li>• DialogFooter: 对话框底部，通常包含操作按钮</li>
        </ul>
      </div>

      <Dialog isOpen={isOpen} onClose={closeDialog} size="md">
        {renderDialogContent()}
      </Dialog>
    </div>
  );
};

export {
  Dialog,
  DialogHeader,
  DialogContent,
  DialogFooter,
  SlotCompositionExample,
};
`,U=`import { useRef } from "react";\r
\r
/**\r
 * 统计组件渲染次数的自定义 Hook\r
 * @param label 可选标签，用于调试\r
 */\r
export function useRenderCount(label?: string): number {\r
  const countRef = useRef(1);\r
  countRef.current++;\r
  return countRef.current;\r
}\r
`,H=()=>{const n={title:"插槽组件 (Slot Components)",description:"插槽组件是一种设计模式，允许父组件向子组件传递内容。通过使用props.children或具名插槽，可以创建高度可复用和灵活的组件结构。",overview:[{title:"核心概念",items:["插槽组件是React中一种重要的组件设计模式，它允许父组件向子组件传递内容，实现组件的内容分发和布局控制。"]},{title:"主要优势",items:["提高组件的可复用性和灵活性","实现关注点分离，组件专注于布局和样式","支持内容的动态组合和条件渲染","简化复杂组件的API设计","提供更好的组件组合能力"]},{title:"适用场景",items:["需要灵活内容布局的容器组件","可复用的UI组件库开发","复杂表单和对话框组件","列表和卡片类展示组件","页面布局和模板组件"]},{title:"核心概念",items:["插槽组件允许父组件向子组件传递内容，实现内容分发和布局控制。","children插槽是React组件的特殊prop，可接收任意React节点。","具名插槽通过props传递特定内容，实现更精确的布局。","条件插槽根据内容存在与否进行条件渲染，提升智能性。","渲染函数插槽通过函数提供最大灵活性，支持动态内容生成。","插槽组合可嵌套多个插槽组件，构建复杂UI结构。"]}],tutorial:{concepts:["插槽组件允许父组件向子组件传递内容，实现内容分发和布局控制。","children插槽是React组件的特殊prop，可接收任意React节点。","具名插槽通过props传递特定内容，实现更精确的布局。","条件插槽根据内容存在与否进行条件渲染，提升智能性。","渲染函数插槽通过函数提供最大灵活性，支持动态内容生成。","插槽组合可嵌套多个插槽组件，构建复杂UI结构。"],steps:["定义插槽组件的接口，明确需要哪些插槽内容（children、props、函数等）","在子组件内部通过props.children或具名props渲染插槽内容","实现条件渲染和默认值逻辑，提升插槽的智能性和健壮性","支持渲染函数插槽，允许父组件传递函数生成动态内容","组合多个插槽组件，实现复杂的UI结构和布局","为插槽内容提供类型约束和文档说明，提升可维护性"],tips:["为插槽组件提供合理的默认内容，确保即使不传入内容也能正常工作","使用TypeScript为插槽内容提供精确的类型定义","避免插槽嵌套过深，保持组件结构简单清晰","在文档中明确说明每个插槽的用途和期望内容","考虑插槽内容的懒加载和性能优化"]},interview:{questions:[{question:"什么是插槽组件？它的主要用途是什么？",answer:"插槽组件是一种组件设计模式，允许父组件向子组件传递内容，实现组件内容的分发和布局控制。主要用途包括：1) 提高组件复用性，同一组件可以渲染不同内容；2) 实现关注点分离，布局和内容分开管理；3) 支持组件组合，构建复杂界面；4) 简化组件API，使用更直观。"},{question:"React中如何实现具名插槽？与Vue的插槽有什么区别？",answer:"React中实现具名插槽的方法：1) 通过props传递特定内容，如header、footer等；2) 使用对象传递多个插槽内容；3) 使用React Context在深层组件间传递插槽内容。与Vue的区别：Vue有专门的slot语法和name属性，React则更灵活但需要自行实现；Vue的插槽是声明式的，React的插槽是组合式的；React的插槽内容在父组件环境中求值，有更好的上下文访问能力。"},{question:"插槽组件与组合组件有什么区别和联系？",answer:"插槽组件与组合组件的区别：1) 插槽组件强调内容分发和布局控制，组合组件强调组件间的关系和通信；2) 插槽组件通常是独立使用的，组合组件通常一起使用；3) 插槽组件由单一容器管理内容，组合组件由多个协同工作的组件构成。联系：两者都是React组合模式的体现；都优于继承方式扩展组件功能；都有利于构建灵活、可复用的组件。"},{question:"如何处理插槽组件中的默认内容和条件渲染？",answer:"处理默认内容：1) 使用逻辑或(||)运算符，如{props.header || <DefaultHeader />}；2) 使用条件渲染，如{props.header ? props.header : <DefaultHeader />}；3) 使用默认参数，如function Card({header = <DefaultHeader />})。处理条件渲染：1) 使用三元运算符根据条件选择渲染内容；2) 使用&&运算符仅当条件为真时渲染内容；3) 使用早期返回模式处理特殊情况；4) 抽取条件逻辑到独立函数提高可读性。"}],keyPoints:["插槽组件允许父组件向子组件传递内容，提高组件复用性","children是React中最基本的插槽实现方式","具名插槽通过props实现，更精确地控制内容布局","渲染函数插槽提供最大灵活性，支持动态内容生成","插槽组件是组合优于继承原则的体现","插槽内容在父组件环境中求值，保持上下文访问能力"]},bestPractices:{dos:["为插槽提供有意义的命名，清晰表达用途","为插槽组件提供默认内容，提高组件健壮性","使用TypeScript为插槽内容提供类型定义","在文档中明确说明每个插槽的用途","保持插槽组件的单一职责，避免过于复杂","使用memoization优化插槽内容的渲染","考虑插槽内容的懒加载提升性能"],donts:["不要创建过多插槽，导致组件过于复杂","不要在插槽组件中假设插槽内容的结构","不要在插槽内容中过度依赖父组件状态","不要忘记处理插槽内容为空的情况","不要过度嵌套插槽组件，影响可读性","不要在渲染函数插槽中执行复杂计算"],patterns:["基础内容插槽：使用children传递主要内容","具名布局插槽：header、footer等特定位置内容","条件渲染插槽：根据内容是否存在选择渲染","渲染函数插槽：传递函数生成动态内容","组合插槽模式：多个插槽组件协同工作"]},examples:[{title:"示例1：基础Children插槽",description:"使用children属性实现基础的内容插槽功能",component:e.jsx(y,{}),observationPoints:["children插槽可以接收任意React节点","组件专注于布局和样式，内容由父组件决定","支持条件渲染，如标题的显示与隐藏","提供了良好的封装性和可复用性"],keyPoints:["children是React组件的特殊prop","可以传递文本、元素、组件等任意内容","组件内部通过{children}渲染传入的内容"],commonTraps:["忘记处理children为空的情况","在组件内部直接修改children内容","没有为children提供合适的容器样式"],solutions:["使用条件渲染处理空children","通过cloneElement安全地修改children","为children提供合适的布局容器"],importantTips:["children可以是任意类型的React节点","使用React.Children工具函数处理children数组","考虑为插槽内容提供默认值或占位符"],preCode:[{title:"useRenderCount",code:U}],codeExample:{title:"基础Children插槽",code:S}},{title:"示例2：具名插槽",description:"通过props传递特定位置的内容，实现更精确的布局控制",component:e.jsx(v,{}),observationPoints:["每个插槽都有明确的用途和位置","可以选择性地传递某些插槽内容","组件提供了完整的页面布局结构","插槽内容可以是复杂的React元素"],keyPoints:["具名插槽通过props传递特定内容","每个插槽都有独立的渲染逻辑","支持插槽的条件渲染和默认值"],commonTraps:["插槽名称不够语义化","没有处理插槽内容为空的情况","插槽之间的依赖关系处理不当"],solutions:["使用清晰的插槽命名约定","为每个插槽提供条件渲染逻辑","明确插槽之间的关系和约束"],importantTips:["具名插槽提供了更精确的内容控制","可以组合使用多个具名插槽","考虑插槽内容的响应式布局"],codeExample:{title:"具名插槽",code:F}},{title:"示例3：条件插槽",description:"根据插槽内容的存在与否进行条件渲染，提供更智能的组件行为",component:e.jsx(j,{}),observationPoints:["不同类型的警告有不同的样式和图标","操作按钮插槽只在需要时显示","关闭按钮插槽根据onClose属性条件渲染","标题插槽的存在影响整体布局"],keyPoints:["条件插槽根据内容存在与否渲染","可以根据props动态调整组件结构","提供了更智能的默认行为"],commonTraps:["条件判断逻辑过于复杂","没有考虑插槽内容的类型检查","条件渲染导致布局跳动"],solutions:["保持条件逻辑简单明确","使用TypeScript进行类型约束","为条件插槽预留布局空间"],importantTips:["条件插槽提供了更智能的组件行为","可以结合多个条件进行复杂的渲染逻辑","注意条件变化对性能的影响"],codeExample:{title:"条件插槽",code:k}},{title:"示例4：动态插槽",description:"使用渲染函数实现动态内容生成，提供最大的灵活性",component:e.jsx(C,{}),observationPoints:["渲染函数接收数据并返回React节点","可以根据数据动态生成不同的内容","空状态插槽提供了良好的用户体验","头部和底部插槽增强了组件的完整性"],keyPoints:["渲染函数插槽提供最大的灵活性","可以传递数据给渲染函数","支持复杂的动态内容生成逻辑"],commonTraps:["渲染函数过于复杂影响性能","没有处理数据为空的情况","渲染函数中的依赖项管理不当"],solutions:["保持渲染函数简单高效","提供空状态的渲染函数","使用useCallback优化渲染函数"],importantTips:["渲染函数插槽适合复杂的动态内容","可以传递多个参数给渲染函数","注意渲染函数的性能优化"],codeExample:{title:"动态插槽",code:E}},{title:"示例5：插槽组合",description:"多个插槽组件的嵌套和组合使用，构建复杂的UI结构",component:e.jsx(D,{}),observationPoints:["对话框由多个子组件组合而成","每个子组件负责特定的插槽区域","组件之间通过props进行通信","整体结构清晰，职责分明"],keyPoints:["插槽组合实现复杂UI的模块化","每个组件都有明确的职责","支持灵活的组件组合和嵌套"],commonTraps:["组件之间的耦合度过高","插槽组合层次过深","缺乏统一的设计规范"],solutions:["保持组件之间的松耦合","控制组合的复杂度","建立清晰的组件设计规范"],importantTips:["插槽组合实现复杂UI的模块化","每个组件都有明确的职责","支持灵活的组件组合和嵌套"],codeExample:{title:"插槽组合",code:T}}]};return e.jsx(b,{...n})};export{H as default};
