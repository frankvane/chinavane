import{j as e,r as a,a as w,R as S}from"./index-MmCcWZhd.js";import{C as L}from"./ComponentTemplate-DoUPe1QN.js";const T=({children:l,container:t})=>{const[o,i]=a.useState(null);return a.useEffect(()=>{const r=t||document.createElement("div");return t||(r.id="portal-root",document.body.appendChild(r)),i(r),()=>{!t&&r.parentNode&&r.parentNode.removeChild(r)}},[t]),o?w.createPortal(l,o):null},O=({isOpen:l,onClose:t,title:o,children:i,closeOnOverlayClick:r=!0,closeOnEscape:n=!0})=>{const s=a.useRef(null);if(a.useEffect(()=>{var p;if(!l)return;const c=x=>{n&&x.key==="Escape"&&t()},u=document.activeElement,f=(p=s.current)==null?void 0:p.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');return f&&f.length>0&&f[0].focus(),document.body.style.overflow="hidden",document.addEventListener("keydown",c),()=>{document.body.style.overflow="unset",document.removeEventListener("keydown",c),u&&u.focus()}},[l,n,t]),!l)return null;const h=c=>{r&&c.target===c.currentTarget&&t()};return w.createPortal(e.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4",onClick:h,children:[e.jsx("div",{className:"absolute inset-0 bg-black bg-opacity-50 transition-opacity"}),e.jsxs("div",{ref:s,className:"relative bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-auto",role:"dialog","aria-modal":"true","aria-labelledby":o?"modal-title":void 0,children:[o&&e.jsxs("div",{className:"flex items-center justify-between p-4 border-b border-gray-200",children:[e.jsx("h3",{id:"modal-title",className:"text-lg font-semibold text-gray-900",children:o}),e.jsx("button",{onClick:t,className:"text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded","aria-label":"关闭模态框",children:e.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),e.jsx("div",{className:"p-4",children:i})]})]}),document.body)},j=({children:l,content:t,position:o="top",trigger:i="hover",delay:r=200})=>{const[n,s]=a.useState(!1),[h,c]=a.useState({top:0,left:0}),u=a.useRef(null),f=a.useRef(null),p=a.useRef(null),x=a.useCallback(()=>{if(!u.current)return;const d=u.current.getBoundingClientRect(),b=window.innerWidth,R=window.innerHeight;let m=0,g=0;const P=8,v=120,y=32;switch(o){case"top":m=d.top-y-P,g=d.left+(d.width-v)/2;break;case"bottom":m=d.bottom+P,g=d.left+(d.width-v)/2;break;case"left":m=d.top+(d.height-y)/2,g=d.left-v-P;break;case"right":m=d.top+(d.height-y)/2,g=d.right+P;break}g<4&&(g=4),g+v>b-4&&(g=b-v-4),m<4&&(m=4),m+y>R-4&&(m=R-y-4),c({top:m,left:g})},[o]),N=()=>{p.current&&clearTimeout(p.current),p.current=setTimeout(()=>{s(!0),setTimeout(()=>{x()},50)},r)},k=()=>{p.current&&clearTimeout(p.current),s(!1)},E=()=>{i==="click"&&(n?k():N())};a.useEffect(()=>{const d=()=>{n&&x()},b=()=>{n&&x()};return window.addEventListener("resize",d),window.addEventListener("scroll",b,!0),()=>{p.current&&clearTimeout(p.current),window.removeEventListener("resize",d),window.removeEventListener("scroll",b,!0)}},[n]),a.useEffect(()=>{n&&x()},[t]);const C=()=>"px-2 py-1 text-sm text-white bg-gray-900 rounded shadow-lg whitespace-nowrap transition-opacity duration-200 opacity-100",M={onClick:i==="click"?E:void 0,onMouseEnter:i==="hover"?N:void 0,onMouseLeave:i==="hover"?k:void 0,onFocus:i==="focus"?N:void 0,onBlur:i==="focus"?k:void 0};return e.jsxs(e.Fragment,{children:[S.cloneElement(l,{...M,ref:u}),n&&w.createPortal(e.jsxs("div",{ref:f,className:C(),style:{position:"fixed",top:h.top,left:h.left,zIndex:9999},role:"tooltip",children:[t,e.jsx("div",{className:`absolute w-2 h-2 bg-gray-900 rotate-45 ${o==="top"?"bottom-[-4px] left-1/2 -translate-x-1/2":o==="bottom"?"top-[-4px] left-1/2 -translate-x-1/2":o==="left"?"right-[-4px] top-1/2 -translate-y-1/2":"left-[-4px] top-1/2 -translate-y-1/2"}`})]}),document.body)]})},D=({notifications:l,onRemove:t,position:o="top-right"})=>{const i=()=>({"top-right":"top-4 right-4","top-left":"top-4 left-4","bottom-right":"bottom-4 right-4","bottom-left":"bottom-4 left-4","top-center":"top-4 left-1/2 -translate-x-1/2","bottom-center":"bottom-4 left-1/2 -translate-x-1/2"})[o],r=s=>({success:"bg-green-50 border-green-200 text-green-800",error:"bg-red-50 border-red-200 text-red-800",warning:"bg-yellow-50 border-yellow-200 text-yellow-800",info:"bg-blue-50 border-blue-200 text-blue-800"})[s],n=s=>({success:e.jsx("svg",{className:"w-5 h-5 text-green-600",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),error:e.jsx("svg",{className:"w-5 h-5 text-red-600",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})}),warning:e.jsx("svg",{className:"w-5 h-5 text-yellow-600",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 18.5c-.77.833.192 2.5 1.732 2.5z"})}),info:e.jsx("svg",{className:"w-5 h-5 text-blue-600",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})})[s];return l.length===0?null:w.createPortal(e.jsx("div",{className:`fixed z-50 space-y-2 ${i()}`,children:l.map(s=>e.jsx("div",{className:`max-w-sm w-full border rounded-lg shadow-lg p-4 transform transition-all duration-300 ease-in-out ${r(s.type)}`,role:"alert",children:e.jsxs("div",{className:"flex items-start space-x-3",children:[e.jsx("div",{className:"flex-shrink-0",children:n(s.type)}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("h4",{className:"text-sm font-semibold",children:s.title}),s.message&&e.jsx("p",{className:"text-sm mt-1 opacity-90",children:s.message})]}),e.jsx("button",{onClick:()=>t(s.id),className:"flex-shrink-0 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded","aria-label":"关闭通知",children:e.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]})},s.id))}),document.body)},B=()=>{const[l,t]=a.useState(!1),[o,i]=a.useState("这是通过Portal渲染的内容！");return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsx("button",{onClick:()=>t(!l),className:`px-4 py-2 rounded text-white ${l?"bg-red-600 hover:bg-red-700":"bg-blue-600 hover:bg-blue-700"}`,children:l?"隐藏Portal":"显示Portal"}),e.jsx("input",{type:"text",value:o,onChange:r=>i(r.target.value),placeholder:"修改Portal内容",className:"px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),e.jsxs("div",{className:"p-4 bg-gray-50 border border-gray-200 rounded-lg",children:[e.jsx("p",{className:"text-gray-600 mb-2",children:"这是父组件的内容区域"}),e.jsx("p",{className:"text-sm text-gray-500",children:"Portal内容会渲染到document.body中，而不是这个容器内。 打开开发者工具查看DOM结构可以看到Portal内容在body的直接子元素中。"})]}),l&&e.jsx(T,{children:e.jsxs("div",{className:"fixed top-4 left-4 p-4 bg-yellow-100 border border-yellow-300 rounded-lg shadow-lg z-50",children:[e.jsx("h3",{className:"font-semibold text-yellow-800 mb-2",children:"Portal内容"}),e.jsx("p",{className:"text-yellow-700",children:o}),e.jsx("p",{className:"text-xs text-yellow-600 mt-2",children:"这个内容通过Portal渲染到了document.body中"})]})})]})},z=()=>{const[l,t]=a.useState(!1),[o,i]=a.useState("simple"),[r,n]=a.useState({name:"",email:"",message:""}),s=c=>{c.preventDefault(),alert(`表单提交: ${JSON.stringify(r,null,2)}`),t(!1),n({name:"",email:"",message:""})},h=()=>{switch(o){case"simple":return e.jsxs("div",{children:[e.jsx("p",{className:"text-gray-600 mb-4",children:"这是一个简单的模态框示例。模态框内容通过Portal渲染到document.body中， 确保它能够覆盖页面上的所有其他内容。"}),e.jsxs("div",{className:"flex justify-end space-x-3",children:[e.jsx("button",{onClick:()=>t(!1),className:"px-4 py-2 text-gray-600 border border-gray-300 rounded hover:bg-gray-50",children:"取消"}),e.jsx("button",{onClick:()=>t(!1),className:"px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700",children:"确定"})]})]});case"form":return e.jsxs("form",{onSubmit:s,children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"姓名"}),e.jsx("input",{type:"text",value:r.name,onChange:c=>n(u=>({...u,name:c.target.value})),className:"w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500",required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"邮箱"}),e.jsx("input",{type:"email",value:r.email,onChange:c=>n(u=>({...u,email:c.target.value})),className:"w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500",required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"留言"}),e.jsx("textarea",{value:r.message,onChange:c=>n(u=>({...u,message:c.target.value})),rows:3,className:"w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500",required:!0})]})]}),e.jsxs("div",{className:"flex justify-end space-x-3 mt-6",children:[e.jsx("button",{type:"button",onClick:()=>t(!1),className:"px-4 py-2 text-gray-600 border border-gray-300 rounded hover:bg-gray-50",children:"取消"}),e.jsx("button",{type:"submit",className:"px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700",children:"提交"})]})]});case"confirmation":return e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center space-x-3 mb-4",children:[e.jsx("div",{className:"flex-shrink-0",children:e.jsx("svg",{className:"w-8 h-8 text-red-600",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 18.5c-.77.833.192 2.5 1.732 2.5z"})})}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-lg font-semibold text-gray-900",children:"确认删除"}),e.jsx("p",{className:"text-gray-600",children:"此操作无法撤销，确定要继续吗？"})]})]}),e.jsxs("div",{className:"flex justify-end space-x-3",children:[e.jsx("button",{onClick:()=>t(!1),className:"px-4 py-2 text-gray-600 border border-gray-300 rounded hover:bg-gray-50",children:"取消"}),e.jsx("button",{onClick:()=>{alert("已确认删除"),t(!1)},className:"px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700",children:"确认删除"})]})]});default:return null}};return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap gap-3",children:[e.jsx("button",{onClick:()=>{i("simple"),t(!0)},className:"px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700",children:"简单模态框"}),e.jsx("button",{onClick:()=>{i("form"),t(!0)},className:"px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700",children:"表单模态框"}),e.jsx("button",{onClick:()=>{i("confirmation"),t(!0)},className:"px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700",children:"确认模态框"})]}),e.jsxs("div",{className:"p-4 bg-gray-50 border border-gray-200 rounded-lg",children:[e.jsx("p",{className:"text-gray-600",children:"点击上方按钮打开不同类型的模态框。模态框支持："}),e.jsxs("ul",{className:"list-disc list-inside text-gray-600 mt-2 space-y-1",children:[e.jsx("li",{children:"ESC键关闭"}),e.jsx("li",{children:"点击遮罩关闭"}),e.jsx("li",{children:"焦点管理"}),e.jsx("li",{children:"背景滚动锁定"}),e.jsx("li",{children:"可访问性支持"})]})]}),e.jsx(O,{isOpen:l,onClose:()=>t(!1),title:o==="simple"?"简单模态框":o==="form"?"表单模态框":"确认操作",children:h()})]})},A=()=>{const[l,t]=a.useState([]),o=r=>{const n=Date.now().toString(),s={id:n,type:r,title:`${r.charAt(0).toUpperCase()+r.slice(1)} 通知`,message:`这是一个${r}类型的通知消息`,duration:5e3};t(h=>[...h,s]),setTimeout(()=>{i(n)},s.duration)},i=r=>{t(n=>n.filter(s=>s.id!==r))};return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"text-lg font-semibold text-gray-800 mb-3",children:"工具提示示例"}),e.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4",children:[e.jsx(j,{content:"顶部工具提示",position:"top",trigger:"hover",children:e.jsx("button",{className:"px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700",children:"悬停 - 顶部"})}),e.jsx(j,{content:"底部工具提示",position:"bottom",trigger:"hover",children:e.jsx("button",{className:"px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700",children:"悬停 - 底部"})}),e.jsx(j,{content:"左侧工具提示",position:"left",trigger:"click",children:e.jsx("button",{className:"px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700",children:"点击 - 左侧"})}),e.jsx(j,{content:"右侧工具提示",position:"right",trigger:"focus",children:e.jsx("button",{className:"px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700",children:"焦点 - 右侧"})})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-lg font-semibold text-gray-800 mb-3",children:"通知Portal示例"}),e.jsxs("div",{className:"flex flex-wrap gap-3 mb-4",children:[e.jsx("button",{onClick:()=>o("success"),className:"px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700",children:"成功通知"}),e.jsx("button",{onClick:()=>o("error"),className:"px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700",children:"错误通知"}),e.jsx("button",{onClick:()=>o("warning"),className:"px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700",children:"警告通知"}),e.jsx("button",{onClick:()=>o("info"),className:"px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700",children:"信息通知"})]}),e.jsx("div",{className:"p-4 bg-gray-50 border border-gray-200 rounded-lg",children:e.jsx("p",{className:"text-gray-600",children:"点击上方按钮添加通知。通知会自动在5秒后消失，也可以手动关闭。 通知通过Portal渲染到页面右上角，不受当前容器限制。"})})]}),e.jsx(D,{notifications:l,onRemove:i,position:"top-right"})]})},I=()=>{const l={title:"Portal组件",description:"Portal提供了一种将子组件渲染到父组件DOM层次结构之外的方式，常用于模态框、工具提示、通知等需要脱离正常文档流的场景。",overview:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800 mb-2",children:"概念"}),e.jsx("p",{className:"text-gray-600",children:"Portal是React提供的一个特殊功能，允许将组件渲染到DOM树中的任意位置， 而不仅仅是其父组件内部。这对于需要脱离正常文档流的UI元素非常有用。"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800 mb-2",children:"工作原理"}),e.jsxs("ul",{className:"list-disc list-inside text-gray-600 space-y-1",children:[e.jsx("li",{children:"使用ReactDOM.createPortal()创建Portal"}),e.jsx("li",{children:"第一个参数是要渲染的React元素"}),e.jsx("li",{children:"第二个参数是目标DOM节点"}),e.jsx("li",{children:"事件冒泡仍然按照React组件树进行"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800 mb-2",children:"常见用途"}),e.jsxs("ul",{className:"list-disc list-inside text-gray-600 space-y-1",children:[e.jsx("li",{children:"模态框和对话框"}),e.jsx("li",{children:"工具提示和弹出框"}),e.jsx("li",{children:"通知和消息提示"}),e.jsx("li",{children:"下拉菜单和选择器"}),e.jsx("li",{children:"全屏覆盖层"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800 mb-2",children:"优势"}),e.jsxs("ul",{className:"list-disc list-inside text-gray-600 space-y-1",children:[e.jsx("li",{children:"避免z-index层级问题"}),e.jsx("li",{children:"不受父容器样式限制"}),e.jsx("li",{children:"保持React事件系统的完整性"}),e.jsx("li",{children:"便于实现全局UI组件"})]})]})]}),examples:[{title:"基础Portal使用",description:"展示Portal的基本用法和DOM渲染位置",component:e.jsx(B,{}),observationPoints:["观察Portal内容渲染到body元素中，而不是父组件内","注意Portal内容的样式不受父容器限制","查看开发者工具中的DOM结构变化","观察Portal容器的动态创建和销毁过程"],keyPoints:["createPortal是React提供的Portal创建方法","Portal内容渲染到指定的DOM节点中","事件冒泡仍然按照React组件树进行","需要手动管理Portal容器的生命周期"],commonTraps:["忘记清理Portal容器导致内存泄漏","在服务端渲染中直接使用Portal导致错误","忽略Portal内容的样式隔离问题","没有正确处理Portal的条件渲染"],solutions:["在useEffect的清理函数中移除Portal容器","使用条件判断确保在客户端环境中使用Portal","为Portal内容添加独立的样式作用域","使用状态控制Portal的显示和隐藏"],importantTips:["合理管理Portal容器的创建时机","考虑Portal内容的可访问性支持","注意Portal与父组件的通信方式","处理Portal内容的响应式布局"],codeExample:{title:"基础Portal实现",code:`import { createPortal } from 'react-dom';
import { useState, useEffect } from 'react';

const BasicPortal = ({ children, container }) => {
  const [mountNode, setMountNode] = useState(null); // ← 重点：状态管理Portal容器

  useEffect(() => {
    // ← 重点：创建或使用指定的容器
    const node = container || document.createElement('div');
    if (!container) {
      node.id = 'portal-root';
      document.body.appendChild(node); // ← 重点：添加到body中
    }
    setMountNode(node);

    // ← 重点：清理函数防止内存泄漏
    return () => {
      if (!container && node.parentNode) {
        node.parentNode.removeChild(node);
      }
    };
  }, [container]);

  if (!mountNode) return null;

  // ← 重点：使用createPortal渲染到指定节点
  return createPortal(children, mountNode);
};

// 使用Portal
const App = () => {
  const [showPortal, setShowPortal] = useState(false);

  return (
    <div>
      <h1>主应用内容</h1>
      <button onClick={() => setShowPortal(!showPortal)}>
        {showPortal ? '隐藏' : '显示'} Portal
      </button>
      {showPortal && (
        <BasicPortal> {/* ← 重点：条件渲染Portal */}
          <div className="portal-content">
            这个内容会渲染到body中
          </div>
        </BasicPortal>
      )}
    </div>
  );
};`,language:"tsx",highlights:[5,8,10,11,15,16,17,18,23,24,37,38],description:"展示Portal的基本实现和使用方式"}},{title:"模态框Portal",description:"使用Portal实现功能完整的模态框组件",component:e.jsx(z,{}),observationPoints:["观察模态框渲染到body元素，覆盖整个视口","注意背景遮罩层的点击关闭功能","查看ESC键关闭和焦点管理效果","观察模态框打开时背景滚动的阻止效果"],keyPoints:["模态框需要渲染到body避免z-index问题","实现焦点管理确保可访问性","支持ESC键和背景点击关闭","阻止背景滚动提升用户体验"],commonTraps:["忘记恢复之前的焦点状态","没有阻止背景滚动导致体验问题","忽略键盘导航和可访问性","模态框关闭时没有正确清理事件监听器"],solutions:["记录并恢复previousActiveElement","设置body的overflow样式控制滚动","添加role和aria属性支持屏幕阅读器","在useEffect清理函数中移除事件监听器"],importantTips:["合理管理模态框的层级关系","考虑移动端的适配和交互","提供清晰的视觉反馈","支持嵌套模态框的场景"],codeExample:{title:"模态框Portal实现",code:`const ModalPortal = ({ isOpen, onClose, children }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    // ← 重点：焦点管理
    const previousActiveElement = document.activeElement;
    const focusableElements = modalRef.current?.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    if (focusableElements?.length > 0) {
      focusableElements[0].focus(); // ← 重点：聚焦到第一个可聚焦元素
    }

    // ← 重点：阻止背景滚动
    document.body.style.overflow = 'hidden';

    // ← 重点：ESC键关闭
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);

    return () => {
      // ← 重点：清理和恢复
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', handleEscape);
      if (previousActiveElement) {
        previousActiveElement.focus(); // ← 重点：恢复之前的焦点
      }
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div className="modal-overlay" onClick={onClose}> {/* ← 重点：背景点击关闭 */}
      <div
        ref={modalRef}
        className="modal-content"
        onClick={(e) => e.stopPropagation()} {/* ← 重点：阻止事件冒泡 */}
        role="dialog" {/* ← 重点：可访问性属性 */}
        aria-modal="true"
      >
        {children}
      </div>
    </div>,
    document.body // ← 重点：渲染到body
  );
};`,language:"tsx",highlights:[7,8,14,18,21,22,27,28,31,39,43,44,45,50],description:"功能完整的模态框Portal实现"}},{title:"工具提示和通知Portal",description:"工具提示和通知系统的Portal实现",component:e.jsx(A,{}),observationPoints:["观察工具提示的动态定位计算","注意不同触发方式的交互效果","查看通知系统的自动消失机制","观察Portal内容的位置自适应"],keyPoints:["工具提示需要动态计算位置避免溢出","支持多种触发方式提升用户体验","通知系统需要管理多个实例","考虑不同屏幕尺寸的适配"],commonTraps:["工具提示位置计算不准确导致溢出","没有处理窗口大小变化的重新定位","通知堆叠时的层级和动画问题","忘记清理定时器导致内存泄漏"],solutions:["使用getBoundingClientRect精确计算位置","监听resize事件重新计算位置","使用合适的z-index和动画过渡","在组件卸载时清理所有定时器"],importantTips:["合理设置工具提示的显示延迟","考虑触摸设备的交互方式","提供丰富的通知类型和样式","支持通知的手动关闭和自动消失"],codeExample:{title:"工具提示Portal实现",code:`const TooltipPortal = ({ children, content, position = 'top' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
  const triggerRef = useRef(null);

  // ← 重点：简化的位置计算函数
  const calculatePosition = () => {
    if (!triggerRef.current) return;

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const gap = 8;
    const tooltipWidth = 120; // ← 重点：预估工具提示尺寸
    const tooltipHeight = 32;

    let top, left;
    switch (position) {
      case 'top':
        top = triggerRect.top - tooltipHeight - gap; // ← 重点：使用fixed定位，无需滚动偏移
        left = triggerRect.left + (triggerRect.width - tooltipWidth) / 2;
        break;
      case 'bottom':
        top = triggerRect.bottom + gap;
        left = triggerRect.left + (triggerRect.width - tooltipWidth) / 2;
        break;
      case 'left':
        top = triggerRect.top + (triggerRect.height - tooltipHeight) / 2; // ← 重点：垂直居中对齐
        left = triggerRect.left - tooltipWidth - gap;
        break;
      case 'right':
        top = triggerRect.top + (triggerRect.height - tooltipHeight) / 2;
        left = triggerRect.right + gap; // ← 重点：右侧定位
        break;
    }

    setTooltipPosition({ top, left }); // ← 重点：更新位置状态
  };

  const showTooltip = () => {
    setIsVisible(true);
    // ← 重点：使用requestAnimationFrame确保DOM更新后计算位置
    requestAnimationFrame(() => {
      calculatePosition();
    });
  };

  return (
    <div className="relative inline-block"> {/* ← 重点：相对定位容器 */}
      <div
        ref={triggerRef}
        onMouseEnter={showTooltip}
        onMouseLeave={() => setIsVisible(false)}
      >
        {children}
      </div>
      {isVisible && createPortal( {/* ← 重点：条件渲染Portal */}
        <div
          className="px-2 py-1 text-sm text-white bg-gray-900 rounded shadow-lg"
          style={{
            position: 'fixed', // ← 重点：使用fixed定位
            top: tooltipPosition.top,
            left: tooltipPosition.left,
            zIndex: 9999,
          }}
        >
          {content}
        </div>,
        document.body // ← 重点：渲染到body
      )}
    </div>
  );
};`,language:"tsx",highlights:[8,14,15,20,21,28,33,42,43,48,58,59,60],description:"修复后的工具提示Portal实现，使用fixed定位和简化的位置计算"}}],codeExamples:[{title:"基础Portal实现",code:`import { createPortal } from 'react-dom';
import { useState, useEffect } from 'react';

const BasicPortal = ({ children, container }) => {
  const [mountNode, setMountNode] = useState(null); // ← 重点：状态管理Portal容器

  useEffect(() => {
    // ← 重点：创建或使用指定的容器
    const node = container || document.createElement('div');
    if (!container) {
      node.id = 'portal-root';
      document.body.appendChild(node); // ← 重点：添加到body中
    }
    setMountNode(node);

    // ← 重点：清理函数防止内存泄漏
    return () => {
      if (!container && node.parentNode) {
        node.parentNode.removeChild(node);
      }
    };
  }, [container]);

  if (!mountNode) return null;

  // ← 重点：使用createPortal渲染到指定节点
  return createPortal(children, mountNode);
};

// 使用Portal
const App = () => {
  const [showPortal, setShowPortal] = useState(false);

  return (
    <div>
      <h1>主应用内容</h1>
      <button onClick={() => setShowPortal(!showPortal)}>
        {showPortal ? '隐藏' : '显示'} Portal
      </button>
      {showPortal && ( // ← 重点：条件渲染Portal
        <BasicPortal>
          <div className="portal-content">
            这个内容会渲染到body中
          </div>
        </BasicPortal>
      )}
    </div>
  );
};`,language:"tsx",highlights:[5,8,9,13,17,27,28,41,42],description:"基础Portal组件的实现方式"},{title:"模态框Portal",code:`const ModalPortal = ({ isOpen, onClose, children }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    // ← 重点：焦点管理
    const previousActiveElement = document.activeElement;
    const focusableElements = modalRef.current?.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    if (focusableElements?.length > 0) {
      focusableElements[0].focus(); // ← 重点：聚焦到第一个可聚焦元素
    }

    // ← 重点：阻止背景滚动
    document.body.style.overflow = 'hidden';

    // ← 重点：ESC键关闭
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);

    return () => {
      // ← 重点：清理和恢复
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', handleEscape);
      if (previousActiveElement) {
        previousActiveElement.focus(); // ← 重点：恢复之前的焦点
      }
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div className="modal-overlay" onClick={onClose}> {/* ← 重点：背景点击关闭 */}
      <div
        ref={modalRef}
        className="modal-content"
        onClick={(e) => e.stopPropagation()} {/* ← 重点：阻止事件冒泡 */}
        role="dialog" {/* ← 重点：可访问性属性 */}
        aria-modal="true"
      >
        {children}
      </div>
    </div>,
    document.body // ← 重点：渲染到body
  );
};`,language:"tsx",highlights:[8,9,15,18,21,22,27,28,31,40,44,45,46,51],description:"功能完整的模态框Portal实现"},{title:"工具提示Portal",code:`const TooltipPortal = ({ children, content, position = 'top' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
  const triggerRef = useRef(null);

  // ← 重点：简化的位置计算函数
  const calculatePosition = () => {
    if (!triggerRef.current) return;

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const gap = 8;
    const tooltipWidth = 120; // ← 重点：预估工具提示尺寸
    const tooltipHeight = 32;

    let top, left;
    switch (position) {
      case 'top':
        top = triggerRect.top - tooltipHeight - gap; // ← 重点：使用fixed定位，无需滚动偏移
        left = triggerRect.left + (triggerRect.width - tooltipWidth) / 2;
        break;
      case 'bottom':
        top = triggerRect.bottom + gap;
        left = triggerRect.left + (triggerRect.width - tooltipWidth) / 2;
        break;
      case 'left':
        top = triggerRect.top + (triggerRect.height - tooltipHeight) / 2; // ← 重点：垂直居中对齐
        left = triggerRect.left - tooltipWidth - gap;
        break;
      case 'right':
        top = triggerRect.top + (triggerRect.height - tooltipHeight) / 2;
        left = triggerRect.right + gap; // ← 重点：右侧定位
        break;
    }

    setTooltipPosition({ top, left }); // ← 重点：更新位置状态
  };

  const showTooltip = () => {
    setIsVisible(true);
    // ← 重点：使用requestAnimationFrame确保DOM更新后计算位置
    requestAnimationFrame(() => {
      calculatePosition();
    });
  };

  return (
    <div className="relative inline-block"> {/* ← 重点：相对定位容器 */}
      <div
        ref={triggerRef}
        onMouseEnter={showTooltip}
        onMouseLeave={() => setIsVisible(false)}
      >
        {children}
      </div>
      {isVisible && createPortal( {/* ← 重点：条件渲染Portal */}
        <div
          className="px-2 py-1 text-sm text-white bg-gray-900 rounded shadow-lg"
          style={{
            position: 'fixed', // ← 重点：使用fixed定位
            top: tooltipPosition.top,
            left: tooltipPosition.left,
            zIndex: 9999,
          }}
        >
          {content}
        </div>,
        document.body // ← 重点：渲染到body
      )}
    </div>
  );
};`,language:"tsx",highlights:[8,14,15,20,21,28,33,42,43,48,58,59,60],description:"修复后的工具提示Portal实现，使用fixed定位和简化的位置计算"}],tutorial:{concepts:["Portal允许组件渲染到DOM树的任意位置","createPortal接收子元素和目标DOM节点","事件冒泡仍然按照React组件树进行","Portal常用于模态框、工具提示等场景","需要手动管理Portal容器的生命周期"],steps:["导入createPortal从react-dom","创建或选择目标DOM节点","使用createPortal渲染内容到目标节点","处理Portal的生命周期管理","实现必要的事件处理和交互","添加可访问性支持","处理焦点管理和键盘导航"],tips:["合理管理Portal容器的创建和销毁","注意处理事件冒泡和阻止默认行为","实现适当的焦点管理策略","考虑可访问性和键盘导航","处理不同屏幕尺寸的适配","避免Portal内容影响页面布局"]},interview:{questions:[{question:"什么是React Portal？它解决了什么问题？",answer:"Portal是React提供的一种将组件渲染到父组件DOM层次结构之外的方式。它解决了z-index层级问题、父容器样式限制等问题，特别适用于模态框、工具提示等需要脱离正常文档流的UI组件。"},{question:"Portal中的事件冒泡是如何工作的？",answer:"虽然Portal将内容渲染到DOM树的其他位置，但事件冒泡仍然按照React组件树的层次结构进行。这意味着Portal内的事件会冒泡到其React父组件，而不是DOM父元素，保持了React事件系统的一致性。"},{question:"使用Portal时需要注意哪些问题？",answer:"需要注意：1) 手动管理Portal容器的生命周期；2) 处理焦点管理和键盘导航；3) 考虑可访问性支持；4) 避免内存泄漏；5) 处理事件冒泡和阻止默认行为；6) 考虑服务端渲染的兼容性。"},{question:"Portal与普通组件渲染有什么区别？",answer:"主要区别：1) 渲染位置 - Portal可以渲染到任意DOM节点；2) 样式继承 - Portal不继承父容器样式；3) 事件处理 - 事件仍按React组件树冒泡；4) 生命周期 - 需要手动管理容器节点；5) 用途 - 主要用于需要脱离文档流的UI组件。"},{question:"如何实现一个可访问的模态框Portal？",answer:'实现要点：1) 使用role="dialog"和aria-modal="true"；2) 管理焦点，打开时聚焦到模态框内第一个可聚焦元素；3) 支持ESC键关闭；4) 阻止背景滚动；5) 关闭时恢复之前的焦点；6) 提供适当的aria-label或aria-labelledby；7) 支持键盘导航。'}],keyPoints:["Portal允许组件渲染到DOM树的任意位置","事件冒泡仍然按照React组件树进行","常用于模态框、工具提示、通知等场景","需要手动管理Portal容器的生命周期","要考虑焦点管理和可访问性支持","避免z-index层级问题和样式限制"]},bestPractices:{dos:["合理管理Portal容器的创建和销毁","实现适当的焦点管理策略","添加键盘导航和可访问性支持","处理事件冒泡和阻止默认行为","考虑不同屏幕尺寸的适配","提供清晰的视觉反馈和交互提示"],donts:["不要忘记清理Portal容器避免内存泄漏","不要忽略焦点管理和键盘导航","不要在Portal内容中阻止所有事件冒泡","不要忽略可访问性和屏幕阅读器支持","不要在服务端渲染中直接使用Portal","不要让Portal内容影响页面的正常布局"],patterns:["模态框Portal - 全屏覆盖的对话框","工具提示Portal - 悬浮显示的提示信息","通知Portal - 固定位置的消息提示","下拉菜单Portal - 脱离容器限制的菜单","全屏Portal - 覆盖整个视口的内容"]}};return e.jsx(L,{...l})};export{I as default};
