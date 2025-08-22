import{j as e,r}from"./index-MmCcWZhd.js";import{C as P}from"./ComponentTemplate-DoUPe1QN.js";const p=r.createContext(void 0),m=()=>{const t=r.useContext(p);if(!t)throw new Error("Tab components must be used within a Tabs component");return t},a=({children:t,defaultTab:o="tab1",className:n=""})=>{const[i,c]=r.useState(o);return e.jsx(p.Provider,{value:{activeTab:i,setActiveTab:c},children:e.jsx("div",{className:`tabs-container ${n}`,children:t})})},y=({children:t,className:o=""})=>e.jsx("div",{className:`flex border-b border-gray-200 ${o}`,children:t}),j=({value:t,children:o,className:n=""})=>{const{activeTab:i,setActiveTab:c}=m(),d=i===t;return e.jsx("button",{className:`px-4 py-2 font-medium text-sm focus:outline-none transition-colors ${d?"text-blue-600 border-b-2 border-blue-600 bg-blue-50":"text-gray-500 hover:text-gray-700 hover:bg-gray-50"} ${n}`,onClick:()=>c(t),children:o})},I=({children:t,className:o=""})=>e.jsx("div",{className:`tab-panels ${o}`,children:t}),f=({value:t,children:o,className:n=""})=>{const{activeTab:i}=m();return i!==t?null:e.jsx("div",{className:`tab-panel p-4 ${n}`,children:o})};a.List=y;a.Tab=j;a.Panels=I;a.Panel=f;const C=r.createContext(void 0),b=()=>{const t=r.useContext(C);if(!t)throw new Error("Accordion components must be used within an Accordion component");return t},s=({children:t,allowMultiple:o=!1,defaultOpen:n=[],className:i=""})=>{const[c,d]=r.useState(n),g=u=>{d(x=>o?x.includes(u)?x.filter(T=>T!==u):[...x,u]:x.includes(u)?[]:[u])};return e.jsx(C.Provider,{value:{openItems:c,toggleItem:g,allowMultiple:o},children:e.jsx("div",{className:`accordion ${i}`,children:t})})},M=({value:t,children:o,className:n=""})=>e.jsx("div",{className:`border border-gray-200 rounded-lg mb-2 ${n}`,children:o}),A=({value:t,children:o,className:n=""})=>{const{openItems:i,toggleItem:c}=b(),d=i.includes(t);return e.jsxs("button",{className:`w-full px-4 py-3 text-left font-medium text-gray-900 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors flex justify-between items-center ${n}`,onClick:()=>c(t),children:[e.jsx("span",{children:o}),e.jsx("span",{className:`transform transition-transform duration-200 ${d?"rotate-180":""}`,children:"▼"})]})},N=({value:t,children:o,className:n=""})=>{const{openItems:i}=b();return i.includes(t)?e.jsx("div",{className:`px-4 py-3 text-gray-700 bg-white ${n}`,children:o}):null};s.Item=M;s.Header=A;s.Panel=N;const v=r.createContext(void 0),h=()=>{const t=r.useContext(v);if(!t)throw new Error("Modal components must be used within a Modal component");return t},l=({children:t,isOpen:o,onClose:n})=>o?e.jsx(v.Provider,{value:{isOpen:o,onClose:n},children:t}):null,k=({children:t,className:o=""})=>{const{onClose:n}=h();return e.jsx("div",{className:`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ${o}`,onClick:n,children:t})},w=({children:t,className:o=""})=>e.jsx("div",{className:`bg-white rounded-lg shadow-xl max-w-md w-full mx-4 ${o}`,onClick:n=>n.stopPropagation(),children:t}),S=({children:t,className:o=""})=>e.jsx("div",{className:`px-6 py-4 border-b border-gray-200 ${o}`,children:e.jsx("h3",{className:"text-lg font-semibold text-gray-900",children:t})}),R=({children:t,className:o=""})=>e.jsx("div",{className:`px-6 py-4 ${o}`,children:t}),H=({children:t,className:o=""})=>e.jsx("div",{className:`px-6 py-4 border-t border-gray-200 flex justify-end space-x-2 ${o}`,children:t}),O=({children:t="×",className:o=""})=>{const{onClose:n}=h();return e.jsx("button",{className:`absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl font-bold ${o}`,onClick:n,children:t})};l.Overlay=k;l.Content=w;l.Header=S;l.Body=R;l.Footer=H;l.CloseButton=O;const F=()=>e.jsx("div",{className:"w-full max-w-2xl",children:e.jsxs(a,{defaultTab:"home",children:[e.jsxs(a.List,{children:[e.jsx(a.Tab,{value:"home",children:"首页"}),e.jsx(a.Tab,{value:"about",children:"关于"}),e.jsx(a.Tab,{value:"contact",children:"联系"})]}),e.jsxs(a.Panels,{children:[e.jsxs(a.Panel,{value:"home",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"欢迎来到首页"}),e.jsx("p",{className:"text-gray-600",children:"这是首页的内容。复合组件模式让我们可以灵活地组合不同的子组件。"})]}),e.jsxs(a.Panel,{value:"about",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"关于我们"}),e.jsx("p",{className:"text-gray-600",children:"这是关于页面的内容。每个Tab.Panel只有在对应的Tab被激活时才会显示。"})]}),e.jsxs(a.Panel,{value:"contact",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"联系方式"}),e.jsx("p",{className:"text-gray-600",children:"这是联系页面的内容。状态管理通过Context在组件间共享。"})]})]})]})}),E=()=>e.jsx("div",{className:"w-full max-w-2xl",children:e.jsxs(s,{allowMultiple:!0,defaultOpen:["item1"],children:[e.jsxs(s.Item,{value:"item1",children:[e.jsx(s.Header,{value:"item1",children:"什么是复合组件模式？"}),e.jsx(s.Panel,{value:"item1",children:"复合组件模式是一种React设计模式，它允许你创建一组相关的组件，这些组件可以协同工作来构建复杂的UI。 通过Context API，父组件可以与子组件共享状态和方法。"})]}),e.jsxs(s.Item,{value:"item2",children:[e.jsx(s.Header,{value:"item2",children:"复合组件的优势是什么？"}),e.jsx(s.Panel,{value:"item2",children:"复合组件提供了更好的API设计、更高的灵活性、更清晰的组件关系， 同时保持了良好的封装性和可维护性。"})]}),e.jsxs(s.Item,{value:"item3",children:[e.jsx(s.Header,{value:"item3",children:"如何实现复合组件？"}),e.jsx(s.Panel,{value:"item3",children:"实现复合组件需要：1) 创建Context来共享状态，2) 实现主组件和子组件， 3) 通过静态属性组合导出，4) 提供清晰的API接口。"})]})]})}),$=()=>{const[t,o]=r.useState(!1);return e.jsxs("div",{children:[e.jsx("button",{className:"px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700",onClick:()=>o(!0),children:"打开模态框"}),e.jsx(l,{isOpen:t,onClose:()=>o(!1),children:e.jsx(l.Overlay,{children:e.jsxs(l.Content,{children:[e.jsx(l.CloseButton,{}),e.jsx(l.Header,{children:"确认操作"}),e.jsx(l.Body,{children:e.jsx("p",{className:"text-gray-600",children:"这是一个使用复合组件模式构建的模态框。 每个子组件都有明确的职责和清晰的API。"})}),e.jsxs(l.Footer,{children:[e.jsx("button",{className:"px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 mr-2",onClick:()=>o(!1),children:"取消"}),e.jsx("button",{className:"px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700",onClick:()=>o(!1),children:"确认"})]})]})})})]})},q=()=>{const t={title:"复合组件 (Compound Components)",description:"复合组件是一种React设计模式，它允许你创建一组相关的组件，这些组件可以协同工作来构建复杂的UI。通过Context API，父组件可以与子组件共享状态和方法，提供灵活且易用的API。",overview:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"核心概念"}),e.jsx("p",{className:"text-gray-700",children:"复合组件模式通过将相关的组件组合在一起，形成一个功能完整的组件系统。 主组件负责状态管理和Context提供，子组件负责具体的UI渲染和交互。"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"主要优势"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 text-gray-700",children:[e.jsx("li",{children:"API设计优雅 - 提供直观、语义化的组件API"}),e.jsx("li",{children:"高度灵活 - 用户可以自由组合和排列子组件"}),e.jsx("li",{children:"关注点分离 - 每个子组件都有明确的职责"}),e.jsx("li",{children:"状态共享 - 通过Context在组件间共享状态"}),e.jsx("li",{children:"易于扩展 - 可以轻松添加新的子组件"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"适用场景"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 text-gray-700",children:[e.jsx("li",{children:"Tab标签页 - 标签头和内容面板的组合"}),e.jsx("li",{children:"Accordion折叠面板 - 标题和内容的可折叠组合"}),e.jsx("li",{children:"Modal对话框 - 遮罩、内容、头部、底部的组合"}),e.jsx("li",{children:"Dropdown下拉菜单 - 触发器和菜单项的组合"}),e.jsx("li",{children:"Form表单 - 表单字段和验证的组合"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"设计原则"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 text-gray-700",children:[e.jsx("li",{children:"单一职责 - 每个子组件只负责一个特定功能"}),e.jsx("li",{children:"松耦合 - 子组件之间通过Context通信，减少直接依赖"}),e.jsx("li",{children:"高内聚 - 相关的组件组合在一起形成完整功能"}),e.jsx("li",{children:"可组合性 - 支持灵活的组件组合和嵌套"}),e.jsx("li",{children:"一致性 - 保持API设计的一致性和可预测性"})]})]})]}),examples:[{title:"示例1：Tab标签页组件",description:"使用复合组件模式实现灵活的Tab标签页功能",component:e.jsx(F,{}),observationPoints:["Tab组件通过Context共享activeTab状态","Tabs.List和Tabs.Panels提供清晰的结构分离","每个Tabs.Tab和Tabs.Panel通过value属性关联","点击标签时，只有对应的面板会显示"],keyPoints:["使用createContext创建TabContext来共享状态","主组件Tabs管理activeTab状态并提供Context","子组件通过useContext获取共享状态和方法"],commonTraps:["忘记在子组件中检查Context是否存在","在Context Provider外部使用子组件","Tab和Panel的value值不匹配"],solutions:["在自定义Hook中添加Context存在性检查","确保所有子组件都在Provider内部使用","使用TypeScript确保value类型一致性"],importantTips:["Context提供了组件间状态共享的机制","静态属性组合导出提供了优雅的API设计","自定义Hook封装了Context的使用逻辑"],codeExample:{title:"Tab组件核心实现",code:`// 创建Context来共享状态
const TabContext = createContext<TabContextType | undefined>(undefined);

// 自定义Hook封装Context使用
const useTabContext = () => {
  const context = useContext(TabContext);  // ← 重点：获取Context
  if (!context) {
    throw new Error("Tab components must be used within a Tabs component");  // ← 重点：错误检查
  }
  return context;
};

// 主组件：管理状态并提供Context
const Tabs: React.FC<TabsProps> = ({ children, defaultTab = "tab1" }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);  // ← 重点：状态管理

  return (
    <TabContext.Provider value={{ activeTab, setActiveTab }}>  {/* ← 重点：Context提供 */}
      <div className="tabs-container">{children}</div>
    </TabContext.Provider>
  );
};

// 子组件：使用Context中的状态
const Tab: React.FC<TabProps> = ({ value, children }) => {
  const { activeTab, setActiveTab } = useTabContext();  // ← 重点：使用Context
  const isActive = activeTab === value;

  return (
    <button
      className={isActive ? "active" : ""}
      onClick={() => setActiveTab(value)}  // ← 重点：更新共享状态
    >
      {children}
    </button>
  );
};

// 静态属性组合导出
Tabs.Tab = Tab;  // ← 重点：组合导出
Tabs.List = TabList;
Tabs.Panel = TabPanel;`,language:"typescript",highlights:[5,7,13,16,22,25,30,35,37],description:"通过Context API实现状态共享，使用静态属性组合导出提供优雅的API。"}},{title:"示例2：Accordion折叠面板",description:"支持单选和多选模式的可折叠面板组件",component:e.jsx(E,{}),observationPoints:["支持allowMultiple属性控制单选/多选模式","每个面板项都有独立的展开/折叠状态","Header组件包含展开/折叠的交互逻辑","Panel组件根据状态控制内容的显示/隐藏"],keyPoints:["使用数组管理多个面板的开启状态","toggleItem方法根据allowMultiple模式处理状态更新","子组件通过value属性与状态数组关联"],commonTraps:["单选模式下忘记清空其他已开启的面板","状态更新逻辑过于复杂导致性能问题","面板项的value值重复导致状态混乱"],solutions:["在toggleItem中正确处理单选和多选逻辑","使用useCallback优化状态更新函数","确保每个面板项都有唯一的value值"],importantTips:["数组状态管理适用于多选场景","条件渲染可以控制组件的显示/隐藏","状态更新逻辑要考虑不同的使用模式"],codeExample:{title:"Accordion状态管理",code:`// Accordion主组件：管理多个面板的状态
const Accordion: React.FC<AccordionProps> = ({
  children,
  allowMultiple = false,  // ← 重点：控制单选/多选模式
  defaultOpen = [],
}) => {
  const [openItems, setOpenItems] = useState<string[]>(defaultOpen);  // ← 重点：数组状态

  const toggleItem = (item: string) => {
    setOpenItems((prev) => {
      if (allowMultiple) {
        // 多选模式：添加或移除项目
        return prev.includes(item)
          ? prev.filter((i) => i !== item)  // ← 重点：移除项目
          : [...prev, item];  // ← 重点：添加项目
      } else {
        // 单选模式：只保留一个项目
        return prev.includes(item) ? [] : [item];  // ← 重点：单选逻辑
      }
    });
  };

  return (
    <AccordionContext.Provider value={{ openItems, toggleItem, allowMultiple }}>  {/* ← 重点：提供状态和方法 */}
      <div className="accordion">{children}</div>
    </AccordionContext.Provider>
  );
};

// Header组件：处理点击交互
const AccordionHeader: React.FC<AccordionHeaderProps> = ({ value, children }) => {
  const { openItems, toggleItem } = useAccordionContext();  // ← 重点：获取状态和方法
  const isOpen = openItems.includes(value);  // ← 重点：检查是否展开

  return (
    <button onClick={() => toggleItem(value)}>  {/* ← 重点：触发状态切换 */}
      <span>{children}</span>
      <span className={isOpen ? "rotate-180" : ""}> ▼ </span>  {/* ← 重点：视觉反馈 */}
    </button>
  );
};

// Panel组件：条件渲染内容
const AccordionPanel: React.FC<AccordionPanelProps> = ({ value, children }) => {
  const { openItems } = useAccordionContext();
  const isOpen = openItems.includes(value);  // ← 重点：检查展开状态

  if (!isOpen) return null;  // ← 重点：条件渲染

  return <div className="accordion-panel">{children}</div>;
};

// 静态属性组合导出
Accordion.Item = AccordionItem;  // ← 重点：组合导出
Accordion.Header = AccordionHeader;
Accordion.Panel = AccordionPanel;`,language:"typescript",highlights:[4,7,14,15,18,24,31,32,35,37,43,45,49,50,51],description:"使用数组状态管理多个面板，支持单选和多选模式的灵活切换。"}},{title:"示例3：Modal对话框组件",description:"可组合的模态框组件，支持灵活的内容布局",component:e.jsx($,{}),observationPoints:["Modal.Overlay提供遮罩层和居中布局","Modal.Content阻止事件冒泡避免意外关闭","Modal.CloseButton提供关闭交互","各个子组件可以灵活组合使用"],keyPoints:["条件渲染控制整个Modal的显示/隐藏","事件冒泡控制实现点击遮罩关闭功能","子组件通过Context获取关闭方法"],commonTraps:["忘记阻止Content区域的事件冒泡","Modal打开时没有处理页面滚动","关闭按钮的点击事件处理不当"],solutions:["在Modal.Content上使用stopPropagation","使用body样式控制页面滚动","确保关闭按钮正确调用onClose方法"],importantTips:["事件冒泡机制可以实现点击遮罩关闭","条件渲染是控制Modal显示的关键","子组件的职责分离使API更加清晰"],codeExample:{title:"Modal组件结构",code:`// Modal主组件：条件渲染和Context提供
const Modal: React.FC<ModalProps> = ({ children, isOpen, onClose }) => {
  if (!isOpen) return null;  // ← 重点：条件渲染控制显示

  return (
    <ModalContext.Provider value={{ isOpen, onClose }}>  {/* ← 重点：提供关闭方法 */}
      {children}
    </ModalContext.Provider>
  );
};

// Overlay组件：遮罩层和点击关闭
const ModalOverlay: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { onClose } = useModalContext();  // ← 重点：获取关闭方法

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}  // ← 重点：点击遮罩关闭
    >
      {children}
    </div>
  );
};

// Content组件：阻止事件冒泡
const ModalContent: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div
      className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4"
      onClick={(e) => e.stopPropagation()}  // ← 重点：阻止事件冒泡
    >
      {children}
    </div>
  );
};

// CloseButton组件：关闭按钮
const ModalCloseButton: React.FC = () => {
  const { onClose } = useModalContext();  // ← 重点：获取关闭方法

  return (
    <button
      className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
      onClick={onClose}  // ← 重点：点击关闭
    >
      ×
    </button>
  );
};

// 静态属性组合导出
Modal.Overlay = ModalOverlay;  // ← 重点：组合导出
Modal.Content = ModalContent;
Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;
Modal.CloseButton = ModalCloseButton;

// 使用示例：灵活组合
<Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
  <Modal.Overlay>  {/* ← 重点：遮罩层 */}
    <Modal.Content>  {/* ← 重点：内容容器 */}
      <Modal.CloseButton />  {/* ← 重点：关闭按钮 */}
      <Modal.Header>标题</Modal.Header>  {/* ← 重点：头部 */}
      <Modal.Body>内容</Modal.Body>  {/* ← 重点：主体 */}
      <Modal.Footer>底部</Modal.Footer>  {/* ← 重点：底部 */}
    </Modal.Content>
  </Modal.Overlay>
</Modal>`,language:"typescript",highlights:[3,6,14,19,30,37,41,48,49,50,51,52,53,57,58,59,60,61,62],description:"通过事件冒泡控制和条件渲染实现灵活的模态框组件。"}}],codeExamples:[{title:"基础复合组件结构",code:`// 1. 创建Context
const ComponentContext = createContext<ContextType | undefined>(undefined);

// 2. 自定义Hook
const useComponentContext = () => {
  const context = useContext(ComponentContext);  // ← 重点：获取Context
  if (!context) {
    throw new Error("Components must be used within Provider");  // ← 重点：错误检查
  }
  return context;
};

// 3. 主组件
const MainComponent: React.FC<Props> = ({ children }) => {
  const [state, setState] = useState(initialState);  // ← 重点：状态管理

  return (
    <ComponentContext.Provider value={{ state, setState }}>  {/* ← 重点：提供Context */}
      <div className="main-component">{children}</div>
    </ComponentContext.Provider>
  );
};

// 4. 子组件
const SubComponent: React.FC<SubProps> = ({ children }) => {
  const { state, setState } = useComponentContext();  // ← 重点：使用Context
  
  return (
    <div onClick={() => setState(newState)}>  {/* ← 重点：更新状态 */}
      {children}
    </div>
  );
};

// 5. 组合导出
MainComponent.Sub = SubComponent;  // ← 重点：静态属性组合`,language:"typescript",description:"复合组件的基本结构：Context创建、状态管理、组合导出。"},{title:"状态共享模式",code:`// 复杂状态管理示例
interface StateType {
  activeItems: string[];
  mode: 'single' | 'multiple';
  disabled: boolean;
}

const ComplexComponent: React.FC<Props> = ({ 
  children, 
  mode = 'single',
  defaultActive = [] 
}) => {
  const [state, setState] = useState<StateType>({  // ← 重点：复杂状态结构
    activeItems: defaultActive,
    mode,
    disabled: false
  });

  // 状态更新方法
  const toggleItem = useCallback((item: string) => {  // ← 重点：优化回调函数
    setState(prev => ({
      ...prev,
      activeItems: prev.mode === 'single' 
        ? [item]  // ← 重点：单选逻辑
        : prev.activeItems.includes(item)
          ? prev.activeItems.filter(i => i !== item)  // ← 重点：多选移除
          : [...prev.activeItems, item]  // ← 重点：多选添加
    }));
  }, []);

  const contextValue = useMemo(() => ({  // ← 重点：优化Context值
    ...state,
    toggleItem,
    isActive: (item: string) => state.activeItems.includes(item)
  }), [state, toggleItem]);

  return (
    <ComponentContext.Provider value={contextValue}>  {/* ← 重点：提供优化的Context */}
      {children}
    </ComponentContext.Provider>
  );
};`,language:"typescript",description:"使用useCallback和useMemo优化复杂状态管理和Context性能。"},{title:"TypeScript类型定义",code:`// 完整的TypeScript类型定义
interface ContextType {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  disabled?: boolean;
}

// 主组件Props类型
interface MainComponentProps {
  children: ReactNode;
  defaultTab?: string;
  disabled?: boolean;
  onChange?: (tab: string) => void;  // ← 重点：回调函数类型
}

// 子组件Props类型
interface SubComponentProps {
  value: string;
  children: ReactNode;
  disabled?: boolean;
  className?: string;
}

// 复合组件类型定义
type CompoundComponentType = React.FC<MainComponentProps> & {  // ← 重点：复合类型
  Tab: React.FC<SubComponentProps>;
  Panel: React.FC<SubComponentProps>;
  List: React.FC<{ children: ReactNode; className?: string }>;
};

// 实现复合组件
const TabComponent: CompoundComponentType = ({ 
  children, 
  defaultTab,
  onChange 
}) => {
  const [activeTab, setActiveTab] = useState(defaultTab || '');
  
  const handleTabChange = useCallback((tab: string) => {  // ← 重点：类型安全的回调
    setActiveTab(tab);
    onChange?.(tab);  // ← 重点：可选回调调用
  }, [onChange]);

  return (
    <TabContext.Provider value={{ activeTab, setActiveTab: handleTabChange }}>  {/* ← 重点：类型安全的Context */}
      {children}
    </TabContext.Provider>
  );
};

// 类型安全的组合导出
TabComponent.Tab = Tab as React.FC<SubComponentProps>;  // ← 重点：类型断言
TabComponent.Panel = Panel as React.FC<SubComponentProps>;
TabComponent.List = List as React.FC<{ children: ReactNode; className?: string }>;`,language:"typescript",description:"完整的TypeScript类型定义，确保复合组件的类型安全。"},{title:"性能优化模式",code:`// 性能优化的复合组件实现
const OptimizedComponent: React.FC<Props> = ({ children, ...props }) => {
  // 使用useReducer管理复杂状态
  const [state, dispatch] = useReducer(stateReducer, initialState);  // ← 重点：useReducer优化
  
  // 缓存Context值避免不必要的重渲染
  const contextValue = useMemo(() => ({  // ← 重点：缓存Context值
    ...state,
    dispatch
  }), [state]);
  
  return (
    <ComponentContext.Provider value={contextValue}>
      {children}
    </ComponentContext.Provider>
  );
};

// 使用memo优化子组件
const OptimizedSubComponent = memo<SubProps>(({ value, children }) => {  // ← 重点：memo优化
  const { state, dispatch } = useComponentContext();
  
  // 使用useCallback缓存事件处理函数
  const handleClick = useCallback(() => {  // ← 重点：缓存事件处理
    dispatch({ type: 'TOGGLE_ITEM', payload: value });
  }, [dispatch, value]);
  
  return (
    <div onClick={handleClick}>
      {children}
    </div>
  );
});

// 状态管理reducer
const stateReducer = (state: StateType, action: ActionType): StateType => {  // ← 重点：reducer模式
  switch (action.type) {
    case 'TOGGLE_ITEM':
      return {
        ...state,
        activeItems: toggleItemInArray(state.activeItems, action.payload)
      };
    case 'SET_MODE':
      return {
        ...state,
        mode: action.payload,
        activeItems: action.payload === 'single' ? state.activeItems.slice(0, 1) : state.activeItems
      };
    default:
      return state;
  }
};`,language:"typescript",description:"使用useReducer、useMemo、useCallback和memo优化复合组件性能。"}],tutorial:{concepts:["复合组件通过Context API在相关组件间共享状态和方法","主组件负责状态管理和Context提供，子组件负责具体的UI渲染","静态属性组合导出提供了优雅的API设计模式","自定义Hook封装Context使用逻辑，提供错误检查和类型安全","复合组件支持灵活的组件组合和嵌套使用"],steps:["创建Context：定义状态类型并使用createContext创建Context","实现自定义Hook：封装useContext调用，添加错误检查和类型安全","开发主组件：管理状态，提供Context，渲染子组件容器","开发子组件：使用自定义Hook获取状态，实现具体的UI和交互","组合导出：通过静态属性将子组件附加到主组件上","类型定义：为复合组件定义完整的TypeScript类型","性能优化：使用useMemo、useCallback等Hook优化性能"],tips:["在自定义Hook中添加Context存在性检查，提供清晰的错误信息","使用TypeScript确保Context类型安全和API一致性","合理使用useMemo和useCallback避免不必要的重渲染","保持子组件的单一职责，每个组件只负责一个特定功能","为复合组件提供清晰的文档和使用示例","考虑组件的可访问性，添加适当的ARIA属性"]},interview:{questions:[{question:"什么是复合组件模式？它解决了什么问题？",answer:"复合组件模式是一种React设计模式，它将相关的组件组合在一起，通过Context共享状态：",points:["组件组合：将多个相关组件组合成一个功能完整的组件系统","状态共享：通过Context API在组件间共享状态和方法","API设计：提供直观、语义化的组件使用方式","关注点分离：每个子组件都有明确的职责和功能","解决问题：避免props drilling，提供更灵活的组件组合方式"],type:"blue"},{question:"复合组件模式的核心实现原理是什么？",answer:"复合组件模式的核心实现包括以下几个关键部分：",points:["Context创建：使用createContext创建状态共享的Context","状态管理：主组件管理状态并通过Provider提供给子组件","Hook封装：自定义Hook封装Context使用，提供错误检查","组合导出：通过静态属性将子组件附加到主组件上","类型安全：使用TypeScript确保API的类型安全性"],type:"green"},{question:"复合组件模式相比其他模式有什么优势？",answer:"复合组件模式相比其他模式具有以下优势：",points:["API优雅：提供直观、语义化的组件使用方式","高度灵活：用户可以自由组合和排列子组件","状态隔离：每个复合组件实例都有独立的状态","易于扩展：可以轻松添加新的子组件而不影响现有API","关注点分离：每个子组件都有明确的职责，便于维护"],type:"purple"},{question:"在实现复合组件时需要注意哪些性能问题？",answer:"实现复合组件时需要注意以下性能问题：",points:["Context值缓存：使用useMemo缓存Context值避免不必要的重渲染","回调函数优化：使用useCallback缓存事件处理函数","子组件优化：使用memo包装子组件避免无关更新","状态结构设计：合理设计状态结构，避免频繁的深层更新","渲染优化：避免在render中创建新对象或函数"],type:"red"}],keyPoints:["复合组件通过Context API实现组件间的状态共享","静态属性组合导出提供了优雅的API设计模式","自定义Hook封装Context使用逻辑，提供错误检查和类型安全","每个子组件都有明确的职责，支持灵活的组合使用","性能优化需要合理使用useMemo、useCallback等Hook","TypeScript类型定义确保复合组件的类型安全性"]},bestPractices:{dos:["为每个复合组件创建专门的Context，避免状态混乱","在自定义Hook中添加Context存在性检查，提供清晰的错误信息","使用TypeScript定义完整的类型，确保API的类型安全","合理使用useMemo和useCallback优化Context和回调函数性能","保持子组件的单一职责，每个组件只负责一个特定功能","为复合组件提供清晰的文档和使用示例"],donts:["不要在没有Provider的情况下使用子组件","不要在Context中存储过多的状态，保持状态结构简单","不要忘记优化Context值，避免不必要的重渲染","不要让子组件直接依赖彼此，应该通过Context通信","不要在render中创建新的Context值或回调函数"],patterns:["Context + Hook模式 - 使用Context共享状态，自定义Hook封装使用逻辑","静态属性组合模式 - 通过静态属性将子组件附加到主组件","状态提升模式 - 将共享状态提升到主组件中管理","错误边界模式 - 在Context Hook中添加错误检查和处理","性能优化模式 - 使用useMemo、useCallback优化性能","类型安全模式 - 使用TypeScript确保API类型安全","可访问性模式 - 添加适当的ARIA属性和键盘导航支持","测试友好模式 - 设计易于测试的组件结构和API","文档驱动模式 - 提供清晰的使用文档和示例代码","渐进增强模式 - 支持基础功能的同时提供高级定制选项","组件库模式 - 设计可复用的复合组件供团队使用","主题定制模式 - 支持样式主题和定制化需求"]}};return e.jsx(P,{...t})};export{q as default};
