import{r as i,a as y,j as e}from"./index-CbVlrJMN.js";import{C as M}from"./ComponentTemplate-BnvJNrWP.js";const I=({children:t,container:o})=>{const[n,r]=i.useState(null);return i.useEffect(()=>{let s=o,l=!1;return s||(s=document.createElement("div"),s.className="portal-container",document.body.appendChild(s),l=!0),r(s),()=>{l&&s&&s.parentNode&&s.parentNode.removeChild(s)}},[o]),n?y.createPortal(t,n):null},A=({isOpen:t,onClose:o,children:n,closeOnEscape:r=!0,closeOnOverlayClick:s=!0,className:l=""})=>{const c=i.useRef(null),d=i.useRef(null);i.useEffect(()=>(t?(d.current=document.activeElement,c.current&&c.current.focus(),document.body.style.overflow="hidden"):(document.body.style.overflow="",d.current instanceof HTMLElement&&d.current.focus()),()=>{document.body.style.overflow=""}),[t]),i.useEffect(()=>{const u=v=>{r&&v.key==="Escape"&&o()};return t&&document.addEventListener("keydown",u),()=>{document.removeEventListener("keydown",u)}},[t,r,o]);const g=u=>{s&&u.target===u.currentTarget&&o()};if(!t)return null;const N=e.jsxs("div",{className:`fixed inset-0 z-50 flex items-center justify-center ${l}`,onClick:g,children:[e.jsx("div",{className:"absolute inset-0 bg-black bg-opacity-50 transition-opacity"}),e.jsx("div",{ref:c,className:"relative bg-white rounded-lg shadow-xl max-w-lg w-full mx-4 max-h-[90vh] overflow-auto",tabIndex:-1,role:"dialog","aria-modal":"true",children:n})]});return y.createPortal(N,document.body)},b=({children:t,content:o,position:n="top",trigger:r="hover",delay:s=200,className:l=""})=>{const[c,d]=i.useState(!1),[g,N]=i.useState({top:0,left:0}),u=i.useRef(null),v=i.useRef(null),f=i.useRef(null),P=()=>{if(!u.current)return;const a=u.current.getBoundingClientRect(),m=window.pageYOffset||document.documentElement.scrollTop,h=window.pageXOffset||document.documentElement.scrollLeft;let p=0,x=0;switch(n){case"top":p=a.top+m-10,x=a.left+h+a.width/2;break;case"bottom":p=a.bottom+m+10,x=a.left+h+a.width/2;break;case"left":p=a.top+m+a.height/2,x=a.left+h-10;break;case"right":p=a.top+m+a.height/2,x=a.right+h+10;break}N({top:p,left:x})},w=()=>{f.current&&clearTimeout(f.current),f.current=setTimeout(()=>{P(),d(!0)},s)},j=()=>{f.current&&clearTimeout(f.current),f.current=setTimeout(()=>{d(!1)},100)},T=()=>{r==="click"&&(c?j():w())};i.useEffect(()=>{const a=()=>{c&&P()},m=()=>{c&&P()};return window.addEventListener("resize",a),window.addEventListener("scroll",m),()=>{window.removeEventListener("resize",a),window.removeEventListener("scroll",m),f.current&&clearTimeout(f.current)}},[c]);const E=()=>`absolute z-50 px-2 py-1 text-sm text-white bg-gray-800 rounded shadow-lg pointer-events-none ${{top:"transform -translate-x-1/2 -translate-y-full",bottom:"transform -translate-x-1/2",left:"transform -translate-y-1/2 -translate-x-full",right:"transform -translate-y-1/2"}[n]} ${l}`,O=()=>`absolute w-2 h-2 bg-gray-800 transform rotate-45 ${{top:"top-full left-1/2 transform -translate-x-1/2 -translate-y-1/2",bottom:"bottom-full left-1/2 transform -translate-x-1/2 translate-y-1/2",left:"left-full top-1/2 transform -translate-y-1/2 -translate-x-1/2",right:"right-full top-1/2 transform -translate-y-1/2 translate-x-1/2"}[n]}`,k={...r==="hover"&&{onMouseEnter:w,onMouseLeave:j},...r==="click"&&{onClick:T},...r==="focus"&&{onFocus:w,onBlur:j}},R=c?e.jsxs("div",{ref:v,className:E(),style:{top:g.top,left:g.left},role:"tooltip",children:[o,e.jsx("div",{className:O()})]}):null;return e.jsxs(e.Fragment,{children:[e.jsx("div",{ref:u,className:"inline-block",...k,children:t}),R&&y.createPortal(R,document.body)]})},C=i.createContext(null),D=(t,o)=>{switch(o.type){case"ADD_NOTIFICATION":return{...t,notifications:[...t.notifications,o.payload]};case"REMOVE_NOTIFICATION":return{...t,notifications:t.notifications.filter(n=>n.id!==o.payload)};default:return t}},L=({children:t})=>{const[o,n]=i.useReducer(D,{notifications:[]}),r=i.useCallback(l=>{const c=Math.random().toString(36).substr(2,9),d={...l,id:c,duration:l.duration??5e3,closable:l.closable??!0};n({type:"ADD_NOTIFICATION",payload:d}),d.duration>0&&setTimeout(()=>{n({type:"REMOVE_NOTIFICATION",payload:c})},d.duration)},[]),s=i.useCallback(l=>{n({type:"REMOVE_NOTIFICATION",payload:l})},[]);return e.jsxs(C.Provider,{value:{notifications:o.notifications,addNotification:r,removeNotification:s},children:[t,e.jsx(S,{})]})},S=()=>{const t=i.useContext(C);if(!t)return null;const{notifications:o,removeNotification:n}=t;if(o.length===0)return null;const r=e.jsx("div",{className:"fixed top-4 right-4 z-50 space-y-2",children:o.map(s=>e.jsx(F,{notification:s,onClose:()=>n(s.id)},s.id))});return y.createPortal(r,document.body)},F=({notification:t,onClose:o})=>{const n=s=>({success:"bg-green-50 border-green-200 text-green-800",error:"bg-red-50 border-red-200 text-red-800",warning:"bg-yellow-50 border-yellow-200 text-yellow-800",info:"bg-blue-50 border-blue-200 text-blue-800"})[s],r=s=>({success:"✅",error:"❌",warning:"⚠️",info:"ℹ️"})[s];return e.jsx("div",{className:`max-w-sm w-full border rounded-lg shadow-lg p-4 transition-all duration-300 ease-in-out transform translate-x-0 ${n(t.type)}`,children:e.jsxs("div",{className:"flex items-start",children:[e.jsx("div",{className:"flex-shrink-0",children:e.jsx("span",{className:"text-lg",children:r(t.type)})}),e.jsxs("div",{className:"ml-3 flex-1",children:[e.jsx("h4",{className:"text-sm font-medium",children:t.title}),t.message&&e.jsx("p",{className:"mt-1 text-sm opacity-90",children:t.message})]}),t.closable&&e.jsx("div",{className:"ml-4 flex-shrink-0",children:e.jsxs("button",{onClick:o,className:"inline-flex text-gray-400 hover:text-gray-600 focus:outline-none focus:text-gray-600 transition ease-in-out duration-150",children:[e.jsx("span",{className:"sr-only",children:"关闭"}),e.jsx("svg",{className:"h-4 w-4",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})})]})})]})})},z=()=>{const t=i.useContext(C);if(!t)throw new Error("useNotifications must be used within a NotificationProvider");return t},V=()=>{const[t,o]=i.useState(!1),[n,r]=i.useState("Hello from Portal!");return e.jsxs("div",{className:"p-6 bg-gray-50 rounded-lg",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"基础Portal示例"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsx("button",{onClick:()=>o(!t),className:`px-4 py-2 rounded transition-colors ${t?"bg-red-500 text-white hover:bg-red-600":"bg-blue-500 text-white hover:bg-blue-600"}`,children:t?"隐藏Portal":"显示Portal"}),e.jsx("input",{type:"text",value:n,onChange:s=>r(s.target.value),placeholder:"输入Portal内容",className:"px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),e.jsxs("div",{className:"p-4 bg-white border border-gray-200 rounded",children:[e.jsx("h4",{className:"font-medium mb-2",children:"当前页面内容"}),e.jsx("p",{className:"text-gray-600 text-sm",children:"这是正常的页面内容。Portal内容将渲染到document.body中， 不受当前组件的样式和层级影响。"})]})]}),t&&e.jsx(I,{children:e.jsxs("div",{className:"fixed top-4 left-4 bg-yellow-400 text-black p-4 rounded-lg shadow-lg z-50",children:[e.jsx("h4",{className:"font-bold mb-2",children:"🚀 Portal内容"}),e.jsx("p",{children:n}),e.jsx("p",{className:"text-xs mt-2 opacity-75",children:"这个内容通过Portal渲染到了document.body"})]})})]})},$=()=>{const[t,o]=i.useState(!1),[n,r]=i.useState("simple"),s=()=>{switch(n){case"simple":return e.jsxs("div",{className:"p-6",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"简单模态框"}),e.jsx("p",{className:"text-gray-600 mb-4",children:"这是一个简单的模态框示例。点击背景或按ESC键可以关闭。"}),e.jsx("div",{className:"flex justify-end space-x-2",children:e.jsx("button",{onClick:()=>o(!1),className:"px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600",children:"关闭"})})]});case"form":return e.jsxs("div",{className:"p-6",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"表单模态框"}),e.jsxs("form",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"姓名"}),e.jsx("input",{type:"text",className:"w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"请输入姓名"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"邮箱"}),e.jsx("input",{type:"email",className:"w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"请输入邮箱"})]}),e.jsxs("div",{className:"flex justify-end space-x-2 pt-4",children:[e.jsx("button",{type:"button",onClick:()=>o(!1),className:"px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600",children:"取消"}),e.jsx("button",{type:"submit",className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600",children:"提交"})]})]})]});case"confirmation":return e.jsxs("div",{className:"p-6",children:[e.jsxs("div",{className:"flex items-center mb-4",children:[e.jsx("div",{className:"w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3",children:e.jsx("span",{className:"text-red-600 text-xl",children:"⚠️"})}),e.jsx("h3",{className:"text-lg font-semibold text-gray-900",children:"确认删除"})]}),e.jsx("p",{className:"text-gray-600 mb-6",children:"您确定要删除这个项目吗？此操作无法撤销。"}),e.jsxs("div",{className:"flex justify-end space-x-2",children:[e.jsx("button",{onClick:()=>o(!1),className:"px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600",children:"取消"}),e.jsx("button",{onClick:()=>{alert("已删除！"),o(!1)},className:"px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600",children:"确认删除"})]})]});default:return null}};return e.jsxs("div",{className:"p-6 bg-gray-50 rounded-lg",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"模态框Portal示例"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"flex flex-wrap gap-2",children:[{type:"simple",label:"简单模态框"},{type:"form",label:"表单模态框"},{type:"confirmation",label:"确认模态框"}].map(l=>e.jsx("button",{onClick:()=>{r(l.type),o(!0)},className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors",children:l.label},l.type))}),e.jsxs("div",{className:"p-4 bg-white border border-gray-200 rounded",children:[e.jsx("h4",{className:"font-medium mb-2",children:"模态框特性"}),e.jsxs("ul",{className:"text-sm text-gray-600 space-y-1",children:[e.jsx("li",{children:"• 焦点管理：自动聚焦到模态框，关闭后恢复原焦点"}),e.jsx("li",{children:"• 键盘支持：ESC键关闭模态框"}),e.jsx("li",{children:"• 背景点击：点击遮罩层关闭模态框"}),e.jsx("li",{children:"• 滚动锁定：防止背景页面滚动"}),e.jsx("li",{children:"• 无障碍支持：正确的ARIA属性"})]})]})]}),e.jsx(A,{isOpen:t,onClose:()=>o(!1),children:s()})]})},B=()=>e.jsxs("div",{className:"p-6 bg-gray-50 rounded-lg",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"工具提示Portal示例"}),e.jsxs("div",{className:"space-y-6",children:[e.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4",children:[{position:"top",label:"顶部提示"},{position:"bottom",label:"底部提示"},{position:"left",label:"左侧提示"},{position:"right",label:"右侧提示"}].map(t=>e.jsx(b,{content:`这是${t.label}的内容`,position:t.position,trigger:"hover",children:e.jsx("button",{className:"w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors",children:t.label})},t.position))}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[e.jsx(b,{content:"悬停触发的工具提示",trigger:"hover",delay:300,children:e.jsxs("div",{className:"p-4 bg-white border border-gray-200 rounded text-center cursor-pointer hover:bg-gray-50",children:[e.jsx("span",{className:"text-2xl mb-2 block",children:"🖱️"}),e.jsx("span",{className:"text-sm font-medium",children:"悬停触发"})]})}),e.jsx(b,{content:"点击触发的工具提示，再次点击关闭",trigger:"click",children:e.jsxs("div",{className:"p-4 bg-white border border-gray-200 rounded text-center cursor-pointer hover:bg-gray-50",children:[e.jsx("span",{className:"text-2xl mb-2 block",children:"👆"}),e.jsx("span",{className:"text-sm font-medium",children:"点击触发"})]})}),e.jsx(b,{content:"聚焦触发的工具提示",trigger:"focus",children:e.jsxs("div",{className:"p-4 bg-white border border-gray-200 rounded text-center",children:[e.jsx("span",{className:"text-2xl mb-2 block",children:"⌨️"}),e.jsx("input",{type:"text",placeholder:"聚焦触发",className:"w-full text-sm text-center border-none outline-none bg-transparent font-medium"})]})})]}),e.jsxs("div",{className:"p-4 bg-white border border-gray-200 rounded",children:[e.jsx("h4",{className:"font-medium mb-2",children:"工具提示特性"}),e.jsxs("ul",{className:"text-sm text-gray-600 space-y-1",children:[e.jsx("li",{children:"• 智能定位：自动计算最佳显示位置"}),e.jsx("li",{children:"• 多种触发方式：悬停、点击、聚焦"}),e.jsx("li",{children:"• 延迟控制：可配置显示和隐藏延迟"}),e.jsx("li",{children:"• 响应式：窗口大小变化时自动重新定位"}),e.jsx("li",{children:"• 滚动跟随：页面滚动时保持正确位置"})]})]})]})]}),_=()=>{const{addNotification:t}=z(),o=n=>{t({type:n,...{success:{title:"操作成功",message:"您的操作已成功完成！"},error:{title:"操作失败",message:"抱歉，操作过程中出现了错误。"},warning:{title:"警告提示",message:"请注意，这个操作可能有风险。"},info:{title:"信息提示",message:"这是一条普通的信息通知。"}}[n],duration:5e3})};return e.jsxs("div",{className:"p-6 bg-gray-50 rounded-lg",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"通知Portal示例"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-2",children:[{type:"success",label:"成功通知",color:"bg-green-500 hover:bg-green-600"},{type:"error",label:"错误通知",color:"bg-red-500 hover:bg-red-600"},{type:"warning",label:"警告通知",color:"bg-yellow-500 hover:bg-yellow-600"},{type:"info",label:"信息通知",color:"bg-blue-500 hover:bg-blue-600"}].map(n=>e.jsx("button",{onClick:()=>o(n.type),className:`px-4 py-2 text-white rounded transition-colors ${n.color}`,children:n.label},n.type))}),e.jsxs("div",{className:"flex space-x-2",children:[e.jsx("button",{onClick:()=>{t({type:"info",title:"持久通知",message:"这个通知不会自动消失，需要手动关闭。",duration:0})},className:"px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition-colors",children:"持久通知"}),e.jsx("button",{onClick:()=>{t({type:"warning",title:"不可关闭通知",message:"这个通知无法手动关闭，3秒后自动消失。",duration:3e3,closable:!1})},className:"px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors",children:"不可关闭"})]}),e.jsxs("div",{className:"p-4 bg-white border border-gray-200 rounded",children:[e.jsx("h4",{className:"font-medium mb-2",children:"通知系统特性"}),e.jsxs("ul",{className:"text-sm text-gray-600 space-y-1",children:[e.jsx("li",{children:"• 多种类型：成功、错误、警告、信息"}),e.jsx("li",{children:"• 自动消失：可配置自动消失时间"}),e.jsx("li",{children:"• 手动关闭：支持用户手动关闭"}),e.jsx("li",{children:"• 堆叠显示：多个通知自动堆叠排列"}),e.jsx("li",{children:"• 全局管理：通过Context进行全局状态管理"})]})]})]})]})},H=()=>e.jsx(L,{children:e.jsx(_,{})}),q=`import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface BasicPortalProps {
  children: React.ReactNode;
  container?: Element | null;
}

// 基础Portal组件
const BasicPortal: React.FC<BasicPortalProps> = ({ children, container }) => {
  const [mountNode, setMountNode] = useState<Element | null>(null);

  useEffect(() => {
    // 如果没有指定容器，创建一个新的div元素
    let node = container;
    let shouldRemove = false;

    if (!node) {
      node = document.createElement("div");
      node.className = "portal-container";
      document.body.appendChild(node);
      shouldRemove = true;
    }

    setMountNode(node);

    // 清理函数
    return () => {
      if (shouldRemove && node && node.parentNode) {
        node.parentNode.removeChild(node);
      }
    };
  }, [container]);

  // 如果挂载节点还没准备好，不渲染任何内容
  if (!mountNode) {
    return null;
  }

  // 使用createPortal将children渲染到指定的DOM节点
  return createPortal(children, mountNode);
};

export default BasicPortal;`,X=`import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

interface ModalPortalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  closeOnEscape?: boolean;
  closeOnOverlayClick?: boolean;
  className?: string;
}

// 模态框Portal组件
const ModalPortal: React.FC<ModalPortalProps> = ({
  isOpen,
  onClose,
  children,
  closeOnEscape = true,
  closeOnOverlayClick = true,
  className = "",
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<Element | null>(null);

  useEffect(() => {
    if (isOpen) {
      // 保存当前焦点元素
      previousActiveElement.current = document.activeElement;
      
      // 将焦点移到模态框
      if (modalRef.current) {
        modalRef.current.focus();
      }

      // 阻止背景滚动
      document.body.style.overflow = "hidden";
    } else {
      // 恢复背景滚动
      document.body.style.overflow = "";
      
      // 恢复之前的焦点
      if (previousActiveElement.current instanceof HTMLElement) {
        previousActiveElement.current.focus();
      }
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (closeOnEscape && event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, closeOnEscape, onClose]);

  const handleOverlayClick = (event: React.MouseEvent) => {
    if (closeOnOverlayClick && event.target === event.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) {
    return null;
  }

  const modalContent = (
    <div
      className={\`fixed inset-0 z-50 flex items-center justify-center \${className}\`}
      onClick={handleOverlayClick}
    >
      {/* 背景遮罩 */}
      <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity" />
      
      {/* 模态框内容 */}
      <div
        ref={modalRef}
        className="relative bg-white rounded-lg shadow-xl max-w-lg w-full mx-4 max-h-[90vh] overflow-auto"
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
      >
        {children}
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};

export default ModalPortal;`,Y=`import React, { createContext, useContext, useReducer, useCallback } from "react";
import { createPortal } from "react-dom";

type NotificationType = "success" | "error" | "warning" | "info";

interface Notification {
  id: string;
  type: NotificationType;
  title: string;
  message?: string;
  duration?: number;
  closable?: boolean;
}

interface NotificationState {
  notifications: Notification[];
}

type NotificationAction =
  | { type: "ADD_NOTIFICATION"; payload: Notification }
  | { type: "REMOVE_NOTIFICATION"; payload: string };

const NotificationContext = createContext<{
  notifications: Notification[];
  addNotification: (notification: Omit<Notification, "id">) => void;
  removeNotification: (id: string) => void;
} | null>(null);

const notificationReducer = (
  state: NotificationState,
  action: NotificationAction
): NotificationState => {
  switch (action.type) {
    case "ADD_NOTIFICATION":
      return {
        ...state,
        notifications: [...state.notifications, action.payload],
      };
    case "REMOVE_NOTIFICATION":
      return {
        ...state,
        notifications: state.notifications.filter(
          (notification) => notification.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

// 通知提供者组件
export const NotificationProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(notificationReducer, {
    notifications: [],
  });

  const addNotification = useCallback(
    (notification: Omit<Notification, "id">) => {
      const id = Math.random().toString(36).substr(2, 9);
      const newNotification = {
        ...notification,
        id,
        duration: notification.duration ?? 5000,
        closable: notification.closable ?? true,
      };

      dispatch({ type: "ADD_NOTIFICATION", payload: newNotification });

      // 自动移除通知
      if (newNotification.duration > 0) {
        setTimeout(() => {
          dispatch({ type: "REMOVE_NOTIFICATION", payload: id });
        }, newNotification.duration);
      }
    },
    []
  );

  const removeNotification = useCallback((id: string) => {
    dispatch({ type: "REMOVE_NOTIFICATION", payload: id });
  }, []);

  return (
    <NotificationContext.Provider
      value={{
        notifications: state.notifications,
        addNotification,
        removeNotification,
      }}
    >
      {children}
      <NotificationContainer />
    </NotificationContext.Provider>
  );
};

// 通知容器组件
const NotificationContainer: React.FC = () => {
  const context = useContext(NotificationContext);
  
  if (!context) {
    return null;
  }

  const { notifications, removeNotification } = context;

  if (notifications.length === 0) {
    return null;
  }

  const notificationContainer = (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {notifications.map((notification) => (
        <NotificationItem
          key={notification.id}
          notification={notification}
          onClose={() => removeNotification(notification.id)}
        />
      ))}
    </div>
  );

  return createPortal(notificationContainer, document.body);
};

// 单个通知项组件
const NotificationItem: React.FC<{
  notification: Notification;
  onClose: () => void;
}> = ({ notification, onClose }) => {
  const getTypeStyles = (type: NotificationType) => {
    const styles = {
      success: "bg-green-50 border-green-200 text-green-800",
      error: "bg-red-50 border-red-200 text-red-800",
      warning: "bg-yellow-50 border-yellow-200 text-yellow-800",
      info: "bg-blue-50 border-blue-200 text-blue-800",
    };
    return styles[type];
  };

  const getIcon = (type: NotificationType) => {
    const icons = {
      success: "✅",
      error: "❌",
      warning: "⚠️",
      info: "ℹ️",
    };
    return icons[type];
  };

  return (
    <div
      className={\`max-w-sm w-full border rounded-lg shadow-lg p-4 transition-all duration-300 ease-in-out transform translate-x-0 \${getTypeStyles(
        notification.type
      )}\`}
    >
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <span className="text-lg">{getIcon(notification.type)}</span>
        </div>
        <div className="ml-3 flex-1">
          <h4 className="text-sm font-medium">{notification.title}</h4>
          {notification.message && (
            <p className="mt-1 text-sm opacity-90">{notification.message}</p>
          )}
        </div>
        {notification.closable && (
          <div className="ml-4 flex-shrink-0">
            <button
              onClick={onClose}
              className="inline-flex text-gray-400 hover:text-gray-600 focus:outline-none focus:text-gray-600 transition ease-in-out duration-150"
            >
              <span className="sr-only">关闭</span>
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// Hook for using notifications
export const useNotifications = () => {
  const context = useContext(NotificationContext);
  
  if (!context) {
    throw new Error("useNotifications must be used within a NotificationProvider");
  }
  
  return context;
};

export default NotificationProvider;`,J=`import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

type TooltipPosition = "top" | "bottom" | "left" | "right";

interface TooltipPortalProps {
  children: React.ReactNode;
  content: React.ReactNode;
  position?: TooltipPosition;
  trigger?: "hover" | "click" | "focus";
  delay?: number;
  className?: string;
}

// 工具提示Portal组件
const TooltipPortal: React.FC<TooltipPortalProps> = ({
  children,
  content,
  position = "top",
  trigger = "hover",
  delay = 200,
  className = "",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
  const triggerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const calculatePosition = () => {
    if (!triggerRef.current) return;

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

    let top = 0;
    let left = 0;

    switch (position) {
      case "top":
        top = triggerRect.top + scrollTop - 10;
        left = triggerRect.left + scrollLeft + triggerRect.width / 2;
        break;
      case "bottom":
        top = triggerRect.bottom + scrollTop + 10;
        left = triggerRect.left + scrollLeft + triggerRect.width / 2;
        break;
      case "left":
        top = triggerRect.top + scrollTop + triggerRect.height / 2;
        left = triggerRect.left + scrollLeft - 10;
        break;
      case "right":
        top = triggerRect.top + scrollTop + triggerRect.height / 2;
        left = triggerRect.right + scrollLeft + 10;
        break;
    }

    setTooltipPosition({ top, left });
  };

  const showTooltip = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    timeoutRef.current = setTimeout(() => {
      calculatePosition();
      setIsVisible(true);
    }, delay);
  };

  const hideTooltip = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    timeoutRef.current = setTimeout(() => {
      setIsVisible(false);
    }, 100);
  };

  const handleTriggerEvent = () => {
    if (trigger === "click") {
      if (isVisible) {
        hideTooltip();
      } else {
        showTooltip();
      }
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (isVisible) {
        calculatePosition();
      }
    };

    const handleScroll = () => {
      if (isVisible) {
        calculatePosition();
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isVisible]);

  const getTooltipClasses = () => {
    const baseClasses = "absolute z-50 px-2 py-1 text-sm text-white bg-gray-800 rounded shadow-lg pointer-events-none";
    const positionClasses = {
      top: "transform -translate-x-1/2 -translate-y-full",
      bottom: "transform -translate-x-1/2",
      left: "transform -translate-y-1/2 -translate-x-full",
      right: "transform -translate-y-1/2",
    };
    
    return \`\${baseClasses} \${positionClasses[position]} \${className}\`;
  };

  const getArrowClasses = () => {
    const baseClasses = "absolute w-2 h-2 bg-gray-800 transform rotate-45";
    const arrowPositions = {
      top: "top-full left-1/2 transform -translate-x-1/2 -translate-y-1/2",
      bottom: "bottom-full left-1/2 transform -translate-x-1/2 translate-y-1/2",
      left: "left-full top-1/2 transform -translate-y-1/2 -translate-x-1/2",
      right: "right-full top-1/2 transform -translate-y-1/2 translate-x-1/2",
    };
    
    return \`\${baseClasses} \${arrowPositions[position]}\`;
  };

  const triggerProps = {
    ...(trigger === "hover" && {
      onMouseEnter: showTooltip,
      onMouseLeave: hideTooltip,
    }),
    ...(trigger === "click" && {
      onClick: handleTriggerEvent,
    }),
    ...(trigger === "focus" && {
      onFocus: showTooltip,
      onBlur: hideTooltip,
    }),
  };

  const tooltip = isVisible ? (
    <div
      ref={tooltipRef}
      className={getTooltipClasses()}
      style={{
        top: tooltipPosition.top,
        left: tooltipPosition.left,
      }}
      role="tooltip"
    >
      {content}
      <div className={getArrowClasses()} />
    </div>
  ) : null;

  return (
    <>
      <div ref={triggerRef} className="inline-block" {...triggerProps}>
        {children}
      </div>
      {tooltip && createPortal(tooltip, document.body)}
    </>
  );
};

export default TooltipPortal;`,Q=()=>{const t={title:"Portal组件",description:"Portal提供了一种将子节点渲染到存在于父组件以外的DOM节点的优秀方案。这对于模态框、工具提示、通知等需要脱离正常文档流的组件非常有用。",overview:[{title:"核心概念",items:["DOM节点传送：将组件渲染到指定的DOM节点","样式隔离：避免父组件样式的影响","层级控制：确保组件在正确的层级显示","事件冒泡：保持React事件系统的正常工作","生命周期管理：正确处理组件的挂载和卸载"]},{title:"主要优势",items:["将内容渲染到body等任意DOM节点，突破父组件限制","模态框、工具提示、通知等场景实现更优雅","样式和层级独立，避免父组件影响","事件冒泡依然可控，支持React事件系统"]},{title:"适用场景",items:["模态框、弹窗、对话框","工具提示、Popover、下拉菜单","全局通知、Toast、Snackbar","需要脱离文档流的浮层组件"]},{title:"注意事项",items:["Portal内容可能不受父组件样式影响，需单独处理样式","事件冒泡依然存在，需根据场景决定是否阻止","Portal创建的DOM节点需在卸载时清理","可访问性（ARIA属性、焦点管理）需手动处理"]}],examples:[{title:"基础Portal",component:e.jsx(V,{}),description:"最简单的Portal实现，将内容渲染到指定容器。",observationPoints:["观察Portal内容渲染到body元素中，而不是父组件内","Portal内容的样式和定位不受父组件影响","查看开发者工具中的DOM结构变化"],keyPoints:["使用createPortal将内容渲染到任意DOM节点","常用于模态框、通知、浮层等场景"],commonTraps:["忘记清理Portal创建的DOM节点","样式作用域不一致导致显示异常"],solutions:["在useEffect的清理函数中移除创建的DOM节点","使用全局样式或内联样式保证Portal内容显示正确"],importantTips:["Portal内容脱离父组件DOM树，需单独处理样式和层级"],codeExample:{title:"基础Portal",code:q}},{title:"模态框Portal",component:e.jsx($,{}),description:"使用Portal实现功能完整的模态框组件。",observationPoints:["模态框渲染到body元素，覆盖整个视口","ESC键和点击遮罩关闭功能","焦点管理和背景滚动锁定","模态框的可访问性属性（ARIA）"],keyPoints:["模态框内容通过Portal渲染到body，保证层级最高","支持键盘关闭、焦点陷阱、滚动锁定等高级特性"],commonTraps:["未正确处理焦点管理，导致可访问性问题","未锁定背景滚动，用户体验差"],solutions:["实现焦点陷阱，保存和恢复之前的焦点状态","在模态框打开时锁定body滚动"],importantTips:['模态框需添加role="dialog"、aria-modal等属性'],codeExample:{title:"模态框Portal",code:X}},{title:"工具提示Portal",component:e.jsx(B,{}),description:"动态定位的工具提示Portal实现。",observationPoints:["工具提示的动态定位计算","不同触发方式（悬停、点击、焦点）","窗口大小变化时自动重新定位","边界检测逻辑"],keyPoints:["Portal结合定位算法实现智能浮层","支持多种触发方式和边界检测"],commonTraps:["定位计算不准确导致溢出","未处理窗口resize事件"],solutions:["监听resize和scroll事件，动态更新位置","边界检测防止溢出"],importantTips:["工具提示需考虑移动端和响应式场景"],codeExample:{title:"工具提示Portal",code:J}},{title:"通知Portal系统",component:e.jsx(H,{}),description:"完整的通知系统Portal实现。",observationPoints:["多类型通知自动堆叠显示","自动消失和手动关闭","全局状态管理"],keyPoints:["通知通过Portal渲染到body右上角，支持堆叠和自动消失","Context管理全局通知状态"],commonTraps:["通知未正确清理导致内存泄漏"],solutions:["在通知关闭时及时移除DOM节点和状态"],importantTips:["通知Portal适合全局消息提示，需注意性能和体验"],codeExample:{title:"通知Portal系统",code:Y}}],tutorial:{concepts:["Portal是React提供的跨层级渲染机制，允许将子节点渲染到父组件以外的DOM节点。","常用于模态框、通知、工具提示等需要脱离文档流的场景。","createPortal方法是Portal的核心API。","Portal内容的样式和层级需单独管理。","事件冒泡依然存在，需根据场景决定是否阻止。"],steps:["确定需要跨层级渲染的场景（如模态框、通知）","使用createPortal将内容渲染到目标DOM节点（如document.body）","处理样式隔离和层级管理，保证内容显示正确","根据需要处理事件冒泡和阻止","在组件卸载时清理Portal创建的DOM节点","实现可访问性支持（ARIA属性、焦点管理）"],tips:["优先选择document.body作为Portal容器，保证层级最高","在useEffect中处理DOM节点的创建和清理","为Portal内容添加role、aria-modal等属性，提升可访问性","使用stopPropagation阻止不需要的事件冒泡","结合Context实现全局Portal管理（如通知系统）"]},interview:{questions:[{question:"什么是React Portal？它解决了什么问题？",answer:"Portal是React提供的一种机制，允许将子节点渲染到父组件以外的DOM节点。主要解决模态框、通知、工具提示等需要脱离正常文档流的场景，保证内容层级和样式独立。"},{question:"Portal的实现原理是什么？",answer:"Portal通过ReactDOM.createPortal方法，将React元素渲染到指定的DOM节点。它不会改变React组件树结构，但会改变DOM结构，实现跨层级渲染。"},{question:"Portal内容的事件冒泡如何处理？",answer:"Portal内容的事件依然会冒泡到React组件树中的父组件。可以通过stopPropagation阻止不需要的事件冒泡，保证事件处理的正确性。"},{question:"Portal在可访问性方面有哪些注意事项？",answer:'模态框等Portal内容需添加role="dialog"、aria-modal等属性，正确管理焦点，保证无障碍访问体验。'},{question:"Portal的常见陷阱和最佳实践有哪些？",answer:"常见陷阱包括忘记清理DOM节点、样式作用域问题、事件处理混乱、焦点管理缺失。最佳实践是使用useEffect清理节点、全局样式、stopPropagation、实现焦点陷阱。"}],keyPoints:["Portal实现跨层级渲染，常用于模态框、通知、浮层等场景","createPortal是核心API，需指定目标DOM节点","事件冒泡依然存在，需根据场景处理","样式和层级需单独管理，避免父组件影响","可访问性支持（ARIA属性、焦点管理）很重要"]},bestPractices:{dos:["合理选择Portal容器，优先使用document.body","在组件卸载时清理Portal创建的DOM节点","为Portal内容添加适当的ARIA属性和键盘支持","根据场景使用stopPropagation阻止事件冒泡","结合Context实现全局Portal管理（如通知系统）"],donts:["不要忘记清理Portal创建的DOM节点，避免内存泄漏","不要依赖父组件样式，Portal内容需单独处理样式","不要忽略事件冒泡，可能导致意外行为","不要忽略焦点管理和可访问性支持","不要在Portal内容中直接操作父组件状态"],patterns:["基础Portal模式：将内容渲染到body或指定容器","模态框/弹窗模式：结合Portal实现高层级浮层","通知/Toast模式：全局Portal管理消息提示","工具提示/Popover模式：动态定位Portal内容","Context结合Portal实现全局状态管理"]}};return e.jsx(M,{...t})};export{Q as default};
