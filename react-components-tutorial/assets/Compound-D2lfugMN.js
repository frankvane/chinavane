import{r as c,j as e}from"./index-H7t66yxh.js";import{C as S}from"./ComponentTemplate-bNJaV0ol.js";const C=c.createContext(void 0),h=()=>{const n=c.useContext(C);if(!n)throw new Error("Tab components must be used within a Tabs component");return n},l=({children:n,defaultTab:t="tab1",className:a=""})=>{const[r,i]=c.useState(t);return e.jsx(C.Provider,{value:{activeTab:r,setActiveTab:i},children:e.jsx("div",{className:`tabs ${a}`,children:n})})},v=({children:n,className:t=""})=>e.jsx("div",{className:`flex border-b border-gray-200 ${t}`,children:n}),y=({value:n,children:t,className:a=""})=>{const{activeTab:r,setActiveTab:i}=h(),d=r===n;return e.jsx("button",{className:`px-4 py-2 font-medium text-sm focus:outline-none transition-colors ${d?"text-blue-600 border-b-2 border-blue-600 bg-blue-50":"text-gray-500 hover:text-gray-700 hover:bg-gray-50"} ${a}`,onClick:()=>i(n),children:t})},N=({children:n,className:t=""})=>e.jsx("div",{className:`tab-panels ${t}`,children:n}),T=({value:n,children:t,className:a=""})=>{const{activeTab:r}=h();return r!==n?null:e.jsx("div",{className:`p-4 ${a}`,children:t})};l.List=v;l.Tab=y;l.Panels=N;l.Panel=T;l.displayName="Tabs";v.displayName="Tabs.List";y.displayName="Tabs.Tab";N.displayName="Tabs.Panels";T.displayName="Tabs.Panel";const g=c.createContext(void 0),f=()=>{const n=c.useContext(g);if(!n)throw new Error("Accordion components must be used within an Accordion component");return n},o=({children:n,allowMultiple:t=!1,defaultOpen:a=[],className:r=""})=>{const[i,d]=c.useState(a),F=x=>{d(u=>t?u.includes(x)?u.filter(B=>B!==x):[...u,x]:u.includes(x)?[]:[x])};return e.jsx(g.Provider,{value:{openItems:i,toggleItem:F,allowMultiple:t},children:e.jsx("div",{className:`accordion space-y-2 ${r}`,children:n})})},P=({value:n,children:t,className:a=""})=>e.jsx("div",{className:`border border-gray-200 rounded-lg ${a}`,children:t}),M=({value:n,children:t,className:a=""})=>{const{openItems:r,toggleItem:i}=f(),d=r.includes(n);return e.jsx("button",{className:`w-full px-4 py-3 text-left font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset transition-colors ${d?"bg-blue-50 text-blue-700":"bg-gray-50 text-gray-700 hover:bg-gray-100"} ${a}`,onClick:()=>i(n),children:e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{children:t}),e.jsx("span",{className:`transform transition-transform ${d?"rotate-180":"rotate-0"}`,children:"▼"})]})})},A=({value:n,children:t,className:a=""})=>{const{openItems:r}=f();return r.includes(n)?e.jsx("div",{className:`px-4 py-3 bg-white border-t border-gray-200 ${a}`,children:t}):null};o.Item=P;o.Header=M;o.Panel=A;o.displayName="Accordion";P.displayName="Accordion.Item";M.displayName="Accordion.Header";A.displayName="Accordion.Panel";const j=c.createContext(void 0),I=()=>{const n=c.useContext(j);if(!n)throw new Error("Modal components must be used within a Modal component");return n},s=({children:n,isOpen:t,onClose:a})=>t?e.jsx(j.Provider,{value:{isOpen:t,onClose:a},children:n}):null,w=({children:n,className:t=""})=>{const{onClose:a}=I();return e.jsx("div",{className:`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ${t}`,onClick:a,children:n})},H=({children:n,className:t=""})=>e.jsx("div",{className:`bg-white rounded-lg shadow-xl max-w-md w-full mx-4 ${t}`,onClick:a=>a.stopPropagation(),children:n}),k=({children:n,className:t=""})=>e.jsx("div",{className:`px-6 py-4 border-b border-gray-200 ${t}`,children:n}),R=({children:n,className:t=""})=>e.jsx("div",{className:`px-6 py-4 ${t}`,children:n}),O=({children:n,className:t=""})=>e.jsx("div",{className:`px-6 py-4 border-t border-gray-200 flex justify-end space-x-2 ${t}`,children:n}),$=({children:n="×",className:t=""})=>{const{onClose:a}=I();return e.jsx("button",{className:`absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl font-bold focus:outline-none ${t}`,onClick:a,children:n})};s.Overlay=w;s.Content=H;s.Header=k;s.Body=R;s.Footer=O;s.CloseButton=$;s.displayName="Modal";w.displayName="Modal.Overlay";H.displayName="Modal.Content";k.displayName="Modal.Header";R.displayName="Modal.Body";O.displayName="Modal.Footer";$.displayName="Modal.CloseButton";const q=()=>e.jsx("div",{className:"w-full max-w-2xl mx-auto",children:e.jsxs(l,{defaultTab:"home",className:"bg-white rounded-lg shadow-sm border",children:[e.jsxs(l.List,{className:"bg-gray-50 rounded-t-lg",children:[e.jsx(l.Tab,{value:"home",children:"首页"}),e.jsx(l.Tab,{value:"about",children:"关于"}),e.jsx(l.Tab,{value:"contact",children:"联系"}),e.jsx(l.Tab,{value:"services",children:"服务"})]}),e.jsxs(l.Panels,{children:[e.jsxs(l.Panel,{value:"home",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"欢迎来到首页"}),e.jsx("p",{className:"text-gray-600",children:"这是首页内容。复合组件模式让我们可以灵活地组合Tab组件， 每个Tab和Panel通过value属性进行关联。"})]}),e.jsxs(l.Panel,{value:"about",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"关于我们"}),e.jsx("p",{className:"text-gray-600",children:"这是关于页面的内容。注意观察当你切换标签时， 只有对应的面板内容会显示，其他面板会被隐藏。"})]}),e.jsxs(l.Panel,{value:"contact",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"联系方式"}),e.jsxs("p",{className:"text-gray-600",children:["邮箱: contact@example.com",e.jsx("br",{}),"电话: +86 123-4567-8900",e.jsx("br",{}),"地址: 北京市朝阳区示例街道123号"]})]}),e.jsxs(l.Panel,{value:"services",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"我们的服务"}),e.jsxs("ul",{className:"text-gray-600 space-y-1",children:[e.jsx("li",{children:"• Web开发"}),e.jsx("li",{children:"• 移动应用开发"}),e.jsx("li",{children:"• UI/UX设计"}),e.jsx("li",{children:"• 技术咨询"})]})]})]})]})}),E=()=>e.jsxs("div",{className:"w-full max-w-2xl mx-auto space-y-6",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"text-md font-medium mb-3 text-gray-700",children:"单选模式（默认）"}),e.jsxs(o,{defaultOpen:["item1"],children:[e.jsxs(o.Item,{value:"item1",children:[e.jsx(o.Header,{value:"item1",children:"什么是复合组件模式？"}),e.jsx(o.Panel,{value:"item1",children:"复合组件模式是一种React设计模式，它允许你创建一组相关的组件， 这些组件可以协同工作来构建复杂的UI。通过Context API， 父组件可以与子组件共享状态和方法。"})]}),e.jsxs(o.Item,{value:"item2",children:[e.jsx(o.Header,{value:"item2",children:"复合组件的优势是什么？"}),e.jsx(o.Panel,{value:"item2",children:"主要优势包括：API设计优雅、高度灵活、关注点分离、 状态共享便捷、易于扩展等。用户可以自由组合和排列子组件， 每个子组件都有明确的职责。"})]}),e.jsxs(o.Item,{value:"item3",children:[e.jsx(o.Header,{value:"item3",children:"适用于哪些场景？"}),e.jsx(o.Panel,{value:"item3",children:"适用于Tab标签页、Accordion折叠面板、Modal对话框、 Dropdown下拉菜单、Form表单等需要组件间协作的场景。"})]})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-md font-medium mb-3 text-gray-700",children:"多选模式"}),e.jsxs(o,{allowMultiple:!0,defaultOpen:["faq1","faq3"],children:[e.jsxs(o.Item,{value:"faq1",children:[e.jsx(o.Header,{value:"faq1",children:"如何实现状态共享？"}),e.jsx(o.Panel,{value:"faq1",children:"通过React的Context API实现状态共享。主组件创建Context并提供状态， 子组件通过useContext Hook获取共享的状态和方法。"})]}),e.jsxs(o.Item,{value:"faq2",children:[e.jsx(o.Header,{value:"faq2",children:"如何优化性能？"}),e.jsx(o.Panel,{value:"faq2",children:"使用useMemo缓存Context值，使用useCallback缓存事件处理函数， 使用memo包装子组件避免无关更新，合理设计状态结构。"})]}),e.jsxs(o.Item,{value:"faq3",children:[e.jsx(o.Header,{value:"faq3",children:"TypeScript支持如何？"}),e.jsx(o.Panel,{value:"faq3",children:"完全支持TypeScript。定义Context类型、Props类型， 使用泛型确保类型安全，为复合组件提供完整的类型定义。"})]})]})]})]}),L=()=>{const[n,t]=c.useState(!1),[a,r]=c.useState(!1);return e.jsxs("div",{className:"w-full max-w-2xl mx-auto",children:[e.jsxs("div",{className:"space-x-4",children:[e.jsx("button",{className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors",onClick:()=>t(!0),children:"打开信息弹窗"}),e.jsx("button",{className:"px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors",onClick:()=>r(!0),children:"打开确认弹窗"})]}),e.jsx(s,{isOpen:n,onClose:()=>t(!1),children:e.jsx(s.Overlay,{children:e.jsxs(s.Content,{children:[e.jsx(s.CloseButton,{}),e.jsx(s.Header,{children:e.jsx("h3",{className:"text-lg font-semibold",children:"复合组件模式说明"})}),e.jsxs(s.Body,{children:[e.jsx("p",{className:"text-gray-600 mb-4",children:"这是一个使用复合组件模式构建的Modal对话框。 注意观察以下特点："}),e.jsxs("ul",{className:"text-gray-600 space-y-2",children:[e.jsx("li",{children:"• Modal.Overlay 提供遮罩层和居中布局"}),e.jsx("li",{children:"• Modal.Content 阻止事件冒泡避免意外关闭"}),e.jsx("li",{children:"• Modal.Header/Body/Footer 提供结构化布局"}),e.jsx("li",{children:"• Modal.CloseButton 提供关闭交互"})]})]}),e.jsx(s.Footer,{children:e.jsx("button",{className:"px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition-colors",onClick:()=>t(!1),children:"关闭"})})]})})}),e.jsx(s,{isOpen:a,onClose:()=>r(!1),children:e.jsx(s.Overlay,{children:e.jsxs(s.Content,{className:"max-w-sm",children:[e.jsx(s.Header,{children:e.jsx("h3",{className:"text-lg font-semibold text-red-600",children:"确认操作"})}),e.jsx(s.Body,{children:e.jsx("p",{className:"text-gray-600",children:"你确定要执行这个操作吗？此操作不可撤销。"})}),e.jsxs(s.Footer,{children:[e.jsx("button",{className:"px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition-colors",onClick:()=>r(!1),children:"取消"}),e.jsx("button",{className:"px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors",onClick:()=>{alert("操作已确认！"),r(!1)},children:"确认"})]})]})})})]})},m=`import React, { ReactNode, createContext, useContext, useState } from "react";

// Tab Context 类型定义
interface TabContextType {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

// 创建 Tab Context
const TabContext = createContext<TabContextType | undefined>(undefined);

// 自定义 Hook 用于使用 Tab Context
const useTabContext = () => {
  const context = useContext(TabContext);
  if (!context) {
    throw new Error("Tab components must be used within a Tabs component");
  }
  return context;
};

// Tabs 主组件 Props
interface TabsProps {
  children: ReactNode;
  defaultTab?: string;
  className?: string;
}

// Tabs 主组件
const Tabs: React.FC<TabsProps> & {
  List: typeof TabList;
  Tab: typeof Tab;
  Panels: typeof TabPanels;
  Panel: typeof TabPanel;
} = ({ children, defaultTab = "tab1", className = "" }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  return (
    <TabContext.Provider value={{ activeTab, setActiveTab }}>
      <div className={\`tabs \${className}\`}>{children}</div>
    </TabContext.Provider>
  );
};

// Tab 列表容器组件
const TabList: React.FC<{ children: ReactNode; className?: string }> = ({
  children,
  className = "",
}) => {
  return (
    <div className={\`flex border-b border-gray-200 \${className}\`}>
      {children}
    </div>
  );
};

// 单个 Tab 组件 Props
interface TabProps {
  value: string;
  children: ReactNode;
  className?: string;
}

// 单个 Tab 组件
const Tab: React.FC<TabProps> = ({ value, children, className = "" }) => {
  const { activeTab, setActiveTab } = useTabContext();
  const isActive = activeTab === value;

  return (
    <button
      className={\`px-4 py-2 font-medium text-sm focus:outline-none transition-colors \${
        isActive
          ? "text-blue-600 border-b-2 border-blue-600 bg-blue-50"
          : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
      } \${className}\`}
      onClick={() => setActiveTab(value)}
    >
      {children}
    </button>
  );
};

// Tab 面板容器组件
const TabPanels: React.FC<{ children: ReactNode; className?: string }> = ({
  children,
  className = "",
}) => {
  return <div className={\`tab-panels \${className}\`}>{children}</div>;
};

// 单个 Tab 面板组件 Props
interface TabPanelProps {
  value: string;
  children: ReactNode;
  className?: string;
}

// 单个 Tab 面板组件
const TabPanel: React.FC<TabPanelProps> = ({
  value,
  children,
  className = "",
}) => {
  const { activeTab } = useTabContext();
  if (activeTab !== value) return null;

  return <div className={\`p-4 \${className}\`}>{children}</div>;
};

// 将子组件附加到主组件
Tabs.List = TabList;
Tabs.Tab = Tab;
Tabs.Panels = TabPanels;
Tabs.Panel = TabPanel;

// 设置显示名称
Tabs.displayName = "Tabs";
TabList.displayName = "Tabs.List";
Tab.displayName = "Tabs.Tab";
TabPanels.displayName = "Tabs.Panels";
TabPanel.displayName = "Tabs.Panel";

export default Tabs;
export { useTabContext };
export type { TabsProps, TabProps, TabPanelProps };`,p=`import React, { ReactNode, createContext, useContext, useState } from "react";

// Accordion Context 类型定义
interface AccordionContextType {
  openItems: string[];
  toggleItem: (item: string) => void;
  allowMultiple: boolean;
}

// 创建 Accordion Context
const AccordionContext = createContext<AccordionContextType | undefined>(
  undefined
);

// 自定义 Hook 用于使用 Accordion Context
const useAccordionContext = () => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error(
      "Accordion components must be used within an Accordion component"
    );
  }
  return context;
};

// Accordion 主组件 Props
interface AccordionProps {
  children: ReactNode;
  allowMultiple?: boolean;
  defaultOpen?: string[];
  className?: string;
}

// Accordion 主组件
const Accordion: React.FC<AccordionProps> & {
  Item: typeof AccordionItem;
  Header: typeof AccordionHeader;
  Panel: typeof AccordionPanel;
} = ({ children, allowMultiple = false, defaultOpen = [], className = "" }) => {
  const [openItems, setOpenItems] = useState<string[]>(defaultOpen);

  const toggleItem = (item: string) => {
    setOpenItems((prev) => {
      if (allowMultiple) {
        return prev.includes(item)
          ? prev.filter((i) => i !== item)
          : [...prev, item];
      } else {
        return prev.includes(item) ? [] : [item];
      }
    });
  };

  return (
    <AccordionContext.Provider value={{ openItems, toggleItem, allowMultiple }}>
      <div className={\`accordion space-y-2 \${className}\`}>{children}</div>
    </AccordionContext.Provider>
  );
};

// Accordion 项目组件 Props
interface AccordionItemProps {
  value: string;
  children: ReactNode;
  className?: string;
}

// Accordion 项目组件
const AccordionItem: React.FC<AccordionItemProps> = ({
  value,
  children,
  className = "",
}) => {
  return (
    <div className={\`border border-gray-200 rounded-lg \${className}\`}>
      {children}
    </div>
  );
};

// Accordion 头部组件 Props
interface AccordionHeaderProps {
  value: string;
  children: ReactNode;
  className?: string;
}

// Accordion 头部组件
const AccordionHeader: React.FC<AccordionHeaderProps> = ({
  value,
  children,
  className = "",
}) => {
  const { openItems, toggleItem } = useAccordionContext();
  const isOpen = openItems.includes(value);

  return (
    <button
      className={\`w-full px-4 py-3 text-left font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset transition-colors \${
        isOpen ? "bg-blue-50 text-blue-700" : "bg-gray-50 text-gray-700 hover:bg-gray-100"
      } \${className}\`}
      onClick={() => toggleItem(value)}
    >
      <div className="flex justify-between items-center">
        <span>{children}</span>
        <span className={\`transform transition-transform \${
          isOpen ? "rotate-180" : "rotate-0"
        }\`}>
          ▼
        </span>
      </div>
    </button>
  );
};

// Accordion 面板组件 Props
interface AccordionPanelProps {
  value: string;
  children: ReactNode;
  className?: string;
}

// Accordion 面板组件
const AccordionPanel: React.FC<AccordionPanelProps> = ({
  value,
  children,
  className = "",
}) => {
  const { openItems } = useAccordionContext();
  const isOpen = openItems.includes(value);

  if (!isOpen) return null;

  return (
    <div className={\`px-4 py-3 bg-white border-t border-gray-200 \${className}\`}>
      {children}
    </div>
  );
};

// 将子组件附加到主组件
Accordion.Item = AccordionItem;
Accordion.Header = AccordionHeader;
Accordion.Panel = AccordionPanel;

// 设置显示名称
Accordion.displayName = "Accordion";
AccordionItem.displayName = "Accordion.Item";
AccordionHeader.displayName = "Accordion.Header";
AccordionPanel.displayName = "Accordion.Panel";

export default Accordion;
export { useAccordionContext };
export type { AccordionProps, AccordionItemProps, AccordionHeaderProps, AccordionPanelProps };`,b=`import React, { ReactNode, createContext, useContext } from "react";

// Modal Context 类型定义
interface ModalContextType {
  isOpen: boolean;
  onClose: () => void;
}

// 创建 Modal Context
const ModalContext = createContext<ModalContextType | undefined>(undefined);

// 自定义 Hook 用于使用 Modal Context
const useModalContext = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("Modal components must be used within a Modal component");
  }
  return context;
};

// Modal 主组件 Props
interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

// Modal 主组件
const Modal: React.FC<ModalProps> & {
  Overlay: typeof ModalOverlay;
  Content: typeof ModalContent;
  Header: typeof ModalHeader;
  Body: typeof ModalBody;
  Footer: typeof ModalFooter;
  CloseButton: typeof ModalCloseButton;
} = ({ children, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <ModalContext.Provider value={{ isOpen, onClose }}>
      {children}
    </ModalContext.Provider>
  );
};

// Modal 遮罩层组件
const ModalOverlay: React.FC<{
  children: ReactNode;
  className?: string;
}> = ({ children, className = "" }) => {
  const { onClose } = useModalContext();

  return (
    <div
      className={\`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 \${className}\`}
      onClick={onClose}
    >
      {children}
    </div>
  );
};

// Modal 内容容器组件
const ModalContent: React.FC<{
  children: ReactNode;
  className?: string;
}> = ({ children, className = "" }) => {
  return (
    <div
      className={\`bg-white rounded-lg shadow-xl max-w-md w-full mx-4 \${className}\`}
      onClick={(e) => e.stopPropagation()}
    >
      {children}
    </div>
  );
};

// Modal 头部组件
const ModalHeader: React.FC<{
  children: ReactNode;
  className?: string;
}> = ({ children, className = "" }) => {
  return (
    <div className={\`px-6 py-4 border-b border-gray-200 \${className}\`}>
      {children}
    </div>
  );
};

// Modal 主体组件
const ModalBody: React.FC<{
  children: ReactNode;
  className?: string;
}> = ({ children, className = "" }) => {
  return <div className={\`px-6 py-4 \${className}\`}>{children}</div>;
};

// Modal 底部组件
const ModalFooter: React.FC<{
  children: ReactNode;
  className?: string;
}> = ({ children, className = "" }) => {
  return (
    <div
      className={\`px-6 py-4 border-t border-gray-200 flex justify-end space-x-2 \${className}\`}
    >
      {children}
    </div>
  );
};

// Modal 关闭按钮组件
const ModalCloseButton: React.FC<{
  children?: ReactNode;
  className?: string;
}> = ({ children = "×", className = "" }) => {
  const { onClose } = useModalContext();

  return (
    <button
      className={\`absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl font-bold focus:outline-none \${className}\`}
      onClick={onClose}
    >
      {children}
    </button>
  );
};

// 将子组件附加到主组件
Modal.Overlay = ModalOverlay;
Modal.Content = ModalContent;
Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;
Modal.CloseButton = ModalCloseButton;

// 设置显示名称
Modal.displayName = "Modal";
ModalOverlay.displayName = "Modal.Overlay";
ModalContent.displayName = "Modal.Content";
ModalHeader.displayName = "Modal.Header";
ModalBody.displayName = "Modal.Body";
ModalFooter.displayName = "Modal.Footer";
ModalCloseButton.displayName = "Modal.CloseButton";

export default Modal;
export { useModalContext };
export type { ModalProps };`,z=()=>{const n={title:"复合组件 (Compound Components)",description:"复合组件是一种React设计模式，它允许你创建一组相关的组件，这些组件可以协同工作来构建复杂的UI。通过Context API，父组件可以与子组件共享状态和方法，提供灵活且易用的API。",overview:[{title:"核心概念",items:["复合组件模式通过将相关的组件组合在一起，形成一个功能完整的组件系统","主组件负责状态管理和Context提供，子组件负责具体的UI渲染和交互","通过Context API在组件间共享状态和方法","静态属性组合导出提供了优雅的API设计模式"]},{title:"主要优势",items:["API设计优雅 - 提供直观、语义化的组件API","高度灵活 - 用户可以自由组合和排列子组件","关注点分离 - 每个子组件都有明确的职责","状态共享 - 通过Context在组件间共享状态","易于扩展 - 可以轻松添加新的子组件"]},{title:"适用场景",items:["Tab标签页 - 标签头和内容面板的组合","Accordion折叠面板 - 标题和内容的可折叠组合","Modal对话框 - 遮罩、内容、头部、底部的组合","Dropdown下拉菜单 - 触发器和菜单项的组合","Form表单 - 表单字段和验证的组合"]},{title:"设计原则",items:["单一职责 - 每个子组件只负责一个特定功能","松耦合 - 子组件之间通过Context通信，减少直接依赖","高内聚 - 相关的组件组合在一起形成完整功能","可组合性 - 支持灵活的组件组合和嵌套","一致性 - 保持API设计的一致性和可预测性"]}],examples:[{title:"示例1：Tab标签页组件",description:"使用复合组件模式实现灵活的Tab标签页功能",component:e.jsx(q,{}),observationPoints:["Tab组件通过Context共享activeTab状态","Tabs.List和Tabs.Panels提供清晰的结构分离","每个Tabs.Tab和Tabs.Panel通过value属性关联","点击标签时，只有对应的面板会显示"],keyPoints:["使用createContext创建TabContext来共享状态","主组件Tabs管理activeTab状态并提供Context","子组件通过useContext获取共享状态和方法"],commonTraps:["忘记在子组件中检查Context是否存在","在Context Provider外部使用子组件","Tab和Panel的value值不匹配"],solutions:["在自定义Hook中添加Context存在性检查","确保所有子组件都在Provider内部使用","使用TypeScript确保value类型一致性"],importantTips:["Context提供了组件间状态共享的机制","静态属性组合导出提供了优雅的API设计","自定义Hook封装了Context的使用逻辑"],preCode:[{title:"Tabs.tsx - Tab复合组件实现",code:m}],codeExample:{title:"Tabs.tsx - Tab复合组件实现",code:m}},{title:"示例2：Accordion折叠面板",description:"支持单选和多选模式的可折叠面板组件",component:e.jsx(E,{}),observationPoints:["支持allowMultiple属性控制单选/多选模式","每个面板项都有独立的展开/折叠状态","Header组件包含展开/折叠的交互逻辑","Panel组件根据状态控制内容的显示/隐藏"],keyPoints:["使用数组管理多个面板的开启状态","toggleItem方法根据allowMultiple模式处理状态更新","子组件通过value属性与状态数组关联"],commonTraps:["单选模式下忘记清空其他已开启的面板","状态更新逻辑过于复杂导致性能问题","面板项的value值重复导致状态混乱"],solutions:["在toggleItem中正确处理单选和多选逻辑","使用useCallback优化状态更新函数","确保每个面板项都有唯一的value值"],importantTips:["数组状态管理适用于多选场景","条件渲染可以控制组件的显示/隐藏","状态更新逻辑要考虑不同的使用模式"],preCode:[{title:"Accordion.tsx - 折叠面板复合组件实现",code:p}],codeExample:{title:"Accordion.tsx - 折叠面板复合组件实现",code:p}},{title:"示例3：Modal对话框组件",description:"可组合的模态框组件，支持灵活的内容布局",component:e.jsx(L,{}),observationPoints:["Modal.Overlay提供遮罩层和居中布局","Modal.Content阻止事件冒泡避免意外关闭","Modal.CloseButton提供关闭交互","各个子组件可以灵活组合使用"],keyPoints:["条件渲染控制整个Modal的显示/隐藏","事件冒泡控制实现点击遮罩关闭功能","子组件通过Context获取关闭方法"],commonTraps:["忘记阻止Content区域的事件冒泡","Modal打开时没有处理页面滚动","关闭按钮的点击事件处理不当"],solutions:["在Modal.Content上使用stopPropagation","使用body样式控制页面滚动","确保关闭按钮正确调用onClose方法"],importantTips:["事件冒泡机制可以实现点击遮罩关闭","条件渲染是控制Modal显示的关键","子组件的职责分离使API更加清晰"],preCode:[{title:"Modal.tsx - 模态框复合组件实现",code:b}],codeExample:{title:"Modal.tsx - 模态框复合组件实现",code:b}}],tutorial:{concepts:["复合组件通过Context API在相关组件间共享状态和方法","主组件负责状态管理和Context提供，子组件负责具体的UI渲染","静态属性组合导出提供了优雅的API设计模式","自定义Hook封装Context使用逻辑，提供错误检查和类型安全","复合组件支持灵活的组件组合和嵌套使用"],steps:["创建Context：定义状态类型并使用createContext创建Context","实现自定义Hook：封装useContext调用，添加错误检查和类型安全","开发主组件：管理状态，提供Context，渲染子组件容器","开发子组件：使用自定义Hook获取状态，实现具体的UI和交互","组合导出：通过静态属性将子组件附加到主组件上","类型定义：为复合组件定义完整的TypeScript类型","性能优化：使用useMemo、useCallback等Hook优化性能"],tips:["在自定义Hook中添加Context存在性检查，提供清晰的错误信息","使用TypeScript确保Context类型安全和API一致性","合理使用useMemo和useCallback避免不必要的重渲染","保持子组件的单一职责，每个组件只负责一个特定功能","为复合组件提供清晰的文档和使用示例","考虑组件的可访问性，添加适当的ARIA属性"]},interview:{questions:[{question:"什么是复合组件模式？它解决了什么问题？",answer:"复合组件模式是一种React设计模式，它将相关的组件组合在一起，通过Context共享状态。主要特点包括：组件组合 - 将多个相关组件组合成一个功能完整的组件系统；状态共享 - 通过Context API在组件间共享状态和方法；API设计 - 提供直观、语义化的组件使用方式；关注点分离 - 每个子组件都有明确的职责和功能；解决问题 - 避免props drilling，提供更灵活的组件组合方式。"},{question:"复合组件模式的核心实现原理是什么？",answer:"复合组件模式的核心实现包括以下几个关键部分：Context创建 - 使用createContext创建状态共享的Context；状态管理 - 主组件管理状态并通过Provider提供给子组件；Hook封装 - 自定义Hook封装Context使用，提供错误检查；组合导出 - 通过静态属性将子组件附加到主组件上；类型安全 - 使用TypeScript确保API的类型安全性。"},{question:"复合组件模式相比其他模式有什么优势？",answer:"复合组件模式相比其他模式具有以下优势：API优雅 - 提供直观、语义化的组件使用方式；高度灵活 - 用户可以自由组合和排列子组件；状态隔离 - 每个复合组件实例都有独立的状态；易于扩展 - 可以轻松添加新的子组件而不影响现有API；关注点分离 - 每个子组件都有明确的职责，便于维护。"},{question:"在实现复合组件时需要注意哪些性能问题？",answer:"实现复合组件时需要注意以下性能问题：Context值缓存 - 使用useMemo缓存Context值避免不必要的重渲染；回调函数优化 - 使用useCallback缓存事件处理函数；子组件优化 - 使用memo包装子组件避免无关更新；状态结构设计 - 合理设计状态结构，避免频繁的深层更新；渲染优化 - 避免在render中创建新对象或函数。"},{question:"如何测试复合组件？",answer:"测试复合组件需要考虑以下几个方面：单元测试 - 分别测试每个子组件的功能和行为；集成测试 - 测试组件间的状态共享和交互；用户交互测试 - 模拟用户操作，验证组件响应；边界情况测试 - 测试错误状态和异常情况的处理；可访问性测试 - 确保组件符合无障碍访问标准。"}],keyPoints:["复合组件通过Context API实现组件间的状态共享","静态属性组合导出提供了优雅的API设计模式","自定义Hook封装Context使用逻辑，提供错误检查和类型安全","每个子组件都有明确的职责，支持灵活的组合使用","性能优化需要合理使用useMemo、useCallback等Hook","TypeScript类型定义确保复合组件的类型安全性"]},bestPractices:{dos:["为每个复合组件创建专门的Context，避免状态混乱","在自定义Hook中添加Context存在性检查，提供清晰的错误信息","使用TypeScript定义完整的类型，确保API的类型安全","合理使用useMemo和useCallback优化Context和回调函数性能","保持子组件的单一职责，每个组件只负责一个特定功能","为复合组件提供清晰的文档和使用示例"],donts:["不要在没有Provider的情况下使用子组件","不要在Context中存储过多的状态，保持状态结构简单","不要忘记优化Context值，避免不必要的重渲染","不要让子组件直接依赖彼此，应该通过Context通信","不要在render中创建新的Context值或回调函数"],patterns:["Context + Hook模式 - 使用Context共享状态，自定义Hook封装使用逻辑","静态属性组合模式 - 通过静态属性将子组件附加到主组件","状态提升模式 - 将共享状态提升到主组件中管理","错误边界模式 - 在Context Hook中添加错误检查和处理","性能优化模式 - 使用useMemo、useCallback优化性能","类型安全模式 - 使用TypeScript确保API类型安全","可访问性模式 - 添加适当的ARIA属性和键盘导航支持","测试友好模式 - 设计易于测试的组件结构和API","文档驱动模式 - 提供清晰的使用文档和示例代码","渐进增强模式 - 支持基础功能的同时提供高级定制选项","组件库模式 - 设计可复用的复合组件供团队使用","主题定制模式 - 支持样式主题和定制化需求"]}};return e.jsx(S,{...n})};export{z as default};
