import{j as e,r as h}from"./index-MmCcWZhd.js";import{C as p}from"./ComponentTemplate-DoUPe1QN.js";const l=s=>{const r=h.useRef(0);return r.current+=1,r.current},m=({title:s,children:r,className:t=""})=>e.jsxs("div",{className:`bg-white rounded-lg shadow-md border border-gray-200 ${t}`,children:[s&&e.jsx("div",{className:"px-6 py-4 border-b border-gray-200",children:e.jsx("h3",{className:"text-lg font-semibold text-gray-900",children:s})}),e.jsx("div",{className:"px-6 py-4",children:r})]}),g=({header:s,sidebar:r,footer:t,children:a})=>e.jsxs("div",{className:"border border-gray-300 rounded-lg overflow-hidden",children:[s&&e.jsx("header",{className:"bg-blue-600 text-white p-4",children:s}),e.jsxs("div",{className:"flex min-h-[200px]",children:[r&&e.jsx("aside",{className:"w-48 bg-gray-100 p-4 border-r border-gray-300",children:r}),e.jsx("main",{className:"flex-1 p-4",children:a})]}),t&&e.jsx("footer",{className:"bg-gray-800 text-white p-4",children:t})]}),n=({type:s,title:r,children:t,actions:a,onClose:i})=>{const d={success:"bg-green-50 border-green-200 text-green-800",warning:"bg-yellow-50 border-yellow-200 text-yellow-800",error:"bg-red-50 border-red-200 text-red-800",info:"bg-blue-50 border-blue-200 text-blue-800"},c={success:"✅",warning:"⚠️",error:"❌",info:"ℹ️"};return e.jsx("div",{className:`border rounded-lg p-4 ${d[s]}`,children:e.jsxs("div",{className:"flex items-start",children:[e.jsx("span",{className:"text-xl mr-3",children:c[s]}),e.jsxs("div",{className:"flex-1",children:[r&&e.jsx("h4",{className:"font-semibold mb-2",children:r}),e.jsx("div",{className:"mb-3",children:t}),a&&e.jsx("div",{className:"flex space-x-2",children:a})]}),i&&e.jsx("button",{onClick:i,className:"ml-2 text-gray-400 hover:text-gray-600 text-xl leading-none",children:"×"})]})})};function x({data:s,renderItem:r,renderEmpty:t,renderHeader:a,renderFooter:i,className:d=""}){return e.jsxs("div",{className:`${d}`,children:[a&&a(),s.length>0?e.jsx("div",{className:"space-y-2",children:s.map((c,o)=>e.jsx("div",{className:"border-b border-gray-200 pb-2 last:border-b-0",children:r(c,o)},o))}):t?t():e.jsx("div",{className:"text-center py-8 text-gray-500",children:"暂无数据"}),i&&i()]})}const b=({isOpen:s,onClose:r,children:t,size:a="md"})=>{if(!s)return null;const i={sm:"max-w-sm",md:"max-w-md",lg:"max-w-lg",xl:"max-w-xl"};return e.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center",children:[e.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50",onClick:r}),e.jsx("div",{className:`relative bg-white rounded-lg shadow-xl w-full mx-4 ${i[a]}`,children:t})]})},N=({children:s,onClose:r})=>e.jsxs("div",{className:"flex items-center justify-between px-6 py-4 border-b border-gray-200",children:[e.jsx("div",{className:"text-lg font-semibold text-gray-900",children:s}),r&&e.jsx("button",{onClick:r,className:"text-gray-400 hover:text-gray-600 text-xl",children:"×"})]}),y=({children:s})=>e.jsx("div",{className:"px-6 py-4",children:s}),u=({children:s})=>e.jsx("div",{className:"px-6 py-4 border-t border-gray-200 flex justify-end space-x-2",children:s}),v=()=>{const s=l();return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"text-sm text-gray-500 mb-2",children:["渲染次数: ",s]}),e.jsx(m,{title:"用户信息",children:e.jsxs("div",{className:"space-y-2",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"姓名:"})," 张三"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"邮箱:"})," zhangsan@example.com"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"角色:"})," 管理员"]})]})}),e.jsx(m,{children:e.jsxs("div",{className:"text-center py-4",children:[e.jsx("h4",{className:"text-lg font-semibold text-gray-800 mb-2",children:"无标题卡片"}),e.jsx("p",{className:"text-gray-600",children:"这是一个没有标题的卡片示例，内容通过children插槽传入。"})]})})]})},j=()=>{const s=l();return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"text-sm text-gray-500 mb-2",children:["渲染次数: ",s]}),e.jsx(g,{header:e.jsx("h1",{className:"text-xl font-bold",children:"网站标题"}),sidebar:e.jsxs("nav",{className:"space-y-2",children:[e.jsx("div",{className:"font-medium text-gray-700",children:"导航菜单"}),e.jsxs("ul",{className:"space-y-1 text-sm",children:[e.jsx("li",{children:e.jsx("a",{href:"#",className:"text-blue-600 hover:underline",children:"首页"})}),e.jsx("li",{children:e.jsx("a",{href:"#",className:"text-blue-600 hover:underline",children:"产品"})}),e.jsx("li",{children:e.jsx("a",{href:"#",className:"text-blue-600 hover:underline",children:"关于"})})]})]}),footer:e.jsx("p",{className:"text-sm",children:"© 2024 版权所有"}),children:e.jsxs("div",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-semibold text-gray-800",children:"主要内容区域"}),e.jsx("p",{className:"text-gray-600",children:"这是主要内容区域，通过children插槽传入。 左侧是侧边栏，顶部是头部，底部是页脚，都是通过具名插槽实现的。"}),e.jsx("div",{className:"bg-blue-50 p-4 rounded-lg",children:e.jsx("p",{className:"text-blue-700",children:"这种布局模式在实际项目中非常常见，提供了很好的灵活性。"})})]})})]})},f=()=>{const s=l();return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"text-sm text-gray-500 mb-2",children:["渲染次数: ",s]}),e.jsx(n,{type:"success",title:"操作成功",children:"数据已成功保存到数据库中。"}),e.jsx(n,{type:"warning",title:"注意",actions:e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"bg-yellow-600 text-white px-3 py-1 rounded text-sm hover:bg-yellow-700",children:"确认"}),e.jsx("button",{className:"bg-gray-300 text-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-400",children:"取消"})]}),onClose:()=>console.log("关闭警告"),children:"这个操作可能会影响其他用户，请谨慎操作。"}),e.jsx(n,{type:"error",children:"发生了一个错误，请稍后重试。"}),e.jsx(n,{type:"info",title:"提示信息",children:"这是一个信息提示，用于向用户展示重要信息。"})]})},C=()=>{const s=l(),r=[{name:"张三",email:"zhangsan@example.com",role:"管理员"},{name:"李四",email:"lisi@example.com",role:"用户"},{name:"王五",email:"wangwu@example.com",role:"编辑"}],t=[];return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"text-sm text-gray-500 mb-2",children:["渲染次数: ",s]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3",children:"有数据的列表："}),e.jsx(x,{data:r,renderHeader:()=>e.jsx("div",{className:"bg-gray-50 p-3 rounded-t-lg border-b",children:e.jsx("h3",{className:"text-lg font-semibold text-gray-800",children:"用户列表"})}),renderItem:(a,i)=>e.jsxs("div",{className:"flex justify-between items-center py-2",children:[e.jsxs("div",{children:[e.jsx("span",{className:"font-medium text-gray-900",children:a.name}),e.jsxs("span",{className:"ml-2 text-sm text-gray-500",children:["(",a.role,")"]})]}),e.jsx("span",{className:"text-gray-600 text-sm",children:a.email})]}),renderFooter:()=>e.jsxs("div",{className:"bg-gray-50 p-3 rounded-b-lg border-t text-center text-sm text-gray-600",children:["共 ",r.length," 个用户"]}),className:"border border-gray-200 rounded-lg overflow-hidden"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3",children:"空数据列表："}),e.jsx(x,{data:t,renderItem:a=>e.jsx("div",{children:a.name}),renderEmpty:()=>e.jsxs("div",{className:"text-center py-8",children:[e.jsx("div",{className:"text-gray-400 text-4xl mb-4",children:"📝"}),e.jsx("p",{className:"text-gray-500 mb-4",children:"还没有用户数据"}),e.jsx("button",{className:"bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600",children:"添加第一个用户"})]}),className:"border border-gray-200 rounded-lg"})]})]})},w=()=>{const s=l(),[r,t]=h.useState(!1);return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"text-sm text-gray-500 mb-2",children:["渲染次数: ",s]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("button",{onClick:()=>t(!0),className:"bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600",children:"打开对话框"}),e.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-medium mb-3",children:"组合示例："}),e.jsxs("div",{className:"space-y-2 text-sm text-gray-700",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("span",{className:"w-20 font-medium",children:"Dialog:"}),e.jsx("span",{children:"主容器组件，提供基础布局和遮罩"})]}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("span",{className:"w-20 font-medium",children:"Header:"}),e.jsx("span",{children:"头部插槽，包含标题和关闭按钮"})]}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("span",{className:"w-20 font-medium",children:"Content:"}),e.jsx("span",{children:"内容插槽，显示主要信息"})]}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("span",{className:"w-20 font-medium",children:"Footer:"}),e.jsx("span",{children:"底部插槽，包含操作按钮"})]})]})]})]}),e.jsxs(b,{isOpen:r,onClose:()=>t(!1),size:"lg",children:[e.jsx(N,{onClose:()=>t(!1),children:"确认删除"}),e.jsx(y,{children:e.jsx("p",{children:"你确定要删除这个项目吗？此操作不可撤销。"})}),e.jsxs(u,{children:[e.jsx("button",{onClick:()=>t(!1),className:"bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400",children:"取消"}),e.jsx("button",{onClick:()=>{console.log("删除操作"),t(!1)},className:"bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600",children:"删除"})]})]})]})},D=()=>{const s={title:"插槽组件 (Slot Components)",description:"插槽组件是一种设计模式，允许父组件向子组件传递内容。通过使用props.children或具名插槽，可以创建高度可复用和灵活的组件结构。",overview:e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-3",children:"核心概念"}),e.jsx("p",{className:"text-gray-700",children:"插槽组件是React中一种重要的组件设计模式，它允许父组件向子组件传递内容，实现组件的内容分发和布局控制。"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-3",children:"主要优势"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 text-gray-700",children:[e.jsx("li",{children:"提高组件的可复用性和灵活性"}),e.jsx("li",{children:"实现关注点分离，组件专注于布局和样式"}),e.jsx("li",{children:"支持内容的动态组合和条件渲染"}),e.jsx("li",{children:"简化复杂组件的API设计"}),e.jsx("li",{children:"提供更好的组件组合能力"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-3",children:"适用场景"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 text-gray-700",children:[e.jsx("li",{children:"需要灵活内容布局的容器组件"}),e.jsx("li",{children:"可复用的UI组件库开发"}),e.jsx("li",{children:"复杂表单和对话框组件"}),e.jsx("li",{children:"列表和卡片类展示组件"}),e.jsx("li",{children:"页面布局和模板组件"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-3",children:"核心要素"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 text-gray-700",children:[e.jsx("li",{children:"children插槽：默认内容插槽，接收任意React节点"}),e.jsx("li",{children:"具名插槽：通过props传递的特定位置内容"}),e.jsx("li",{children:"条件插槽：根据内容存在与否进行条件渲染"}),e.jsx("li",{children:"渲染函数插槽：通过函数提供更大的灵活性"}),e.jsx("li",{children:"插槽组合：多个插槽组件的嵌套和组合使用"})]})]})]}),examples:[{title:"示例1：基础Children插槽",description:"使用children属性实现基础的内容插槽功能",component:e.jsx(v,{}),observationPoints:["children插槽可以接收任意React节点","组件专注于布局和样式，内容由父组件决定","支持条件渲染，如标题的显示与隐藏","提供了良好的封装性和可复用性"],keyPoints:["children是React组件的特殊prop","可以传递文本、元素、组件等任意内容","组件内部通过{children}渲染传入的内容"],commonTraps:["忘记处理children为空的情况","在组件内部直接修改children内容","没有为children提供合适的容器样式"],solutions:["使用条件渲染处理空children","通过cloneElement安全地修改children","为children提供合适的布局容器"],importantTips:["children可以是任意类型的React节点","使用React.Children工具函数处理children数组","考虑为插槽内容提供默认值或占位符"],codeExample:{title:"基础卡片组件实现",code:`// 基础卡片组件
interface CardProps {
  title?: string;  // ← 重点：可选的标题属性
  children: ReactNode;  // ← 重点：必需的children插槽
  className?: string;
}

const Card: React.FC<CardProps> = ({ title, children, className = '' }) => {
  return (
    <div className={\`bg-white rounded-lg shadow-md border border-gray-200 \${className}\`}>
      {/* 条件渲染标题 */}
      {title && (  // ← 重点：条件渲染标题插槽
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        </div>
      )}
      {/* 内容插槽 */}
      <div className="px-6 py-4">
        {children}  {/* ← 重点：渲染children内容 */}
      </div>
    </div>
  );
};

// 使用方式
<Card title="用户信息">  {/* ← 重点：传递标题和内容 */}
  <div className="space-y-2">
    <p><strong>姓名:</strong> 张三</p>
    <p><strong>邮箱:</strong> zhangsan@example.com</p>
    <p><strong>角色:</strong> 管理员</p>
  </div>
</Card>`,language:"typescript",highlights:[3,4,12,17,23],description:"基础卡片组件通过children插槽接收任意内容，并提供统一的布局和样式。"}},{title:"示例2：具名插槽",description:"通过props传递特定位置的内容，实现更精确的布局控制",component:e.jsx(j,{}),observationPoints:["每个插槽都有明确的用途和位置","可以选择性地传递某些插槽内容","组件提供了完整的页面布局结构","插槽内容可以是复杂的React元素"],keyPoints:["具名插槽通过props传递特定内容","每个插槽都有独立的渲染逻辑","支持插槽的条件渲染和默认值"],commonTraps:["插槽名称不够语义化","没有处理插槽内容为空的情况","插槽之间的依赖关系处理不当"],solutions:["使用清晰的插槽命名约定","为每个插槽提供条件渲染逻辑","明确插槽之间的关系和约束"],importantTips:["具名插槽提供了更精确的内容控制","可以组合使用多个具名插槽","考虑插槽内容的响应式布局"],codeExample:{title:"布局组件具名插槽",code:`// 具名插槽布局组件
interface LayoutProps {
  header?: ReactNode;  // ← 重点：头部插槽
  sidebar?: ReactNode;  // ← 重点：侧边栏插槽
  footer?: ReactNode;  // ← 重点：底部插槽
  children: ReactNode;  // ← 重点：主内容插槽
}

const Layout: React.FC<LayoutProps> = ({ header, sidebar, footer, children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* 头部插槽 */}
      {header && (  // ← 重点：条件渲染头部
        <header className="bg-blue-600 text-white p-4">
          {header}
        </header>
      )}
      
      {/* 主体区域 */}
      <div className="flex-1 flex">
        {/* 侧边栏插槽 */}
        {sidebar && (  // ← 重点：条件渲染侧边栏
          <aside className="w-64 bg-gray-100 p-4">
            {sidebar}
          </aside>
        )}
        
        {/* 主内容插槽 */}
        <main className="flex-1 p-4">
          {children}  // ← 重点：主内容区域
        </main>
      </div>
      
      {/* 底部插槽 */}
      {footer && (  // ← 重点：条件渲染底部
        <footer className="bg-gray-800 text-white p-4">
          {footer}
        </footer>
      )}
    </div>
  );
};

// 使用方式
<Layout
  header={<h1>网站标题</h1>}  // ← 重点：传递头部内容
  sidebar={<nav>导航菜单</nav>}  // ← 重点：传递侧边栏内容
  footer={<p>版权信息</p>}  // ← 重点：传递底部内容
>
  <div>主要内容区域</div>  {/* ← 重点：主内容通过children传递 */}
</Layout>`,language:"typescript",highlights:[3,4,5,6,13,22,29,33,41,42,43,45],description:"布局组件通过具名插槽实现灵活的页面布局，每个区域都可以独立控制。"}},{title:"示例3：条件插槽",description:"根据插槽内容的存在与否进行条件渲染，提供更智能的组件行为",component:e.jsx(f,{}),observationPoints:["不同类型的警告有不同的样式和图标","操作按钮插槽只在需要时显示","关闭按钮插槽根据onClose属性条件渲染","标题插槽的存在影响整体布局"],keyPoints:["条件插槽根据内容存在与否渲染","可以根据props动态调整组件结构","提供了更智能的默认行为"],commonTraps:["条件判断逻辑过于复杂","没有考虑插槽内容的类型检查","条件渲染导致布局跳动"],solutions:["保持条件逻辑简单明确","使用TypeScript进行类型约束","为条件插槽预留布局空间"],importantTips:["条件插槽提供了更智能的组件行为","可以结合多个条件进行复杂的渲染逻辑","注意条件变化对性能的影响"],codeExample:{title:"警告组件条件插槽",code:`// 条件插槽警告组件
interface AlertProps {
  type: 'success' | 'warning' | 'error' | 'info';
  title?: string;  // ← 重点：可选标题插槽
  children: ReactNode;
  actions?: ReactNode;  // ← 重点：可选操作按钮插槽
  onClose?: () => void;  // ← 重点：可选关闭功能
}

const Alert: React.FC<AlertProps> = ({ 
  type, title, children, actions, onClose 
}) => {
  const typeStyles = {
    success: 'bg-green-50 border-green-200 text-green-800',
    warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
    error: 'bg-red-50 border-red-200 text-red-800',
    info: 'bg-blue-50 border-blue-200 text-blue-800'
  };
  
  return (
    <div className={\`border rounded-lg p-4 \${typeStyles[type]}\`}>
      <div className="flex items-start">
        <span className="text-xl mr-3">{iconMap[type]}</span>
        
        <div className="flex-1">
          {/* 标题插槽 - 条件渲染 */}
          {title && (  // ← 重点：条件渲染标题
            <h4 className="font-semibold mb-2">{title}</h4>
          )}
          
          {/* 内容插槽 */}
          <div className="mb-3">
            {children}
          </div>
          
          {/* 操作按钮插槽 - 条件渲染 */}
          {actions && (  // ← 重点：条件渲染操作按钮
            <div className="flex space-x-2">
              {actions}
            </div>
          )}
        </div>
        
        {/* 关闭按钮插槽 - 条件渲染 */}
        {onClose && (  // ← 重点：条件渲染关闭按钮
          <button onClick={onClose} className="ml-2 text-gray-400 hover:text-gray-600">
            ×
          </button>
        )}
      </div>
    </div>
  );
};`,language:"typescript",highlights:[4,6,7,27,36,43],description:"警告组件根据不同的props条件渲染不同的插槽内容，提供灵活的组件行为。"}},{title:"示例4：动态插槽",description:"使用渲染函数实现动态内容生成，提供最大的灵活性",component:e.jsx(C,{}),observationPoints:["渲染函数接收数据并返回React节点","可以根据数据动态生成不同的内容","空状态插槽提供了良好的用户体验","头部和底部插槽增强了组件的完整性"],keyPoints:["渲染函数插槽提供最大的灵活性","可以传递数据给渲染函数","支持复杂的动态内容生成逻辑"],commonTraps:["渲染函数过于复杂影响性能","没有处理数据为空的情况","渲染函数中的依赖项管理不当"],solutions:["保持渲染函数简单高效","提供空状态的渲染函数","使用useCallback优化渲染函数"],importantTips:["渲染函数插槽适合复杂的动态内容","可以传递多个参数给渲染函数","注意渲染函数的性能优化"],codeExample:{title:"动态列表组件",code:`// 动态插槽列表组件
interface ListProps<T> {
  data: T[];
  renderItem: (item: T, index: number) => ReactNode;  // ← 重点：项目渲染函数
  renderEmpty?: () => ReactNode;  // ← 重点：空状态渲染函数
  renderHeader?: () => ReactNode;  // ← 重点：头部渲染函数
  renderFooter?: () => ReactNode;  // ← 重点：底部渲染函数
  className?: string;
}

function List<T>({
  data, renderItem, renderEmpty, renderHeader, renderFooter, className = ''
}: ListProps<T>) {
  return (
    <div className={\`\${className}\`}>
      {/* 头部插槽 */}
      {renderHeader && renderHeader()}  {/* ← 重点：调用头部渲染函数 */}
      
      {/* 列表内容 */}
      {data.length > 0 ? (
        <div className="space-y-2">
          {data.map((item, index) => (
            <div key={index} className="border-b border-gray-200 pb-2 last:border-b-0">
              {renderItem(item, index)}  {/* ← 重点：调用项目渲染函数 */}
            </div>
          ))}
        </div>
      ) : (
        // 空状态插槽
        renderEmpty ? renderEmpty() : (  // ← 重点：条件调用空状态渲染函数
          <div className="text-center py-8 text-gray-500">
            暂无数据
          </div>
        )
      )}
      
      {/* 底部插槽 */}
      {renderFooter && renderFooter()}  {/* ← 重点：调用底部渲染函数 */}
    </div>
  );
}

// 使用方式
<List
  data={users}
  renderHeader={() => (  // ← 重点：头部渲染函数实现
    <h3 className="text-lg font-semibold mb-4">用户列表</h3>
  )}
  renderItem={(user, index) => (  // ← 重点：项目渲染函数实现
    <div className="flex justify-between items-center">
      <span>{user.name}</span>
      <span className="text-gray-500">{user.email}</span>
    </div>
  )}
  renderEmpty={() => (  // ← 重点：空状态渲染函数实现
    <div className="text-center py-8">
      <p className="text-gray-500 mb-4">还没有用户</p>
      <button className="btn-primary">添加用户</button>
    </div>
  )}
/>`,language:"typescript",highlights:[4,5,6,7,17,24,29,35,41,44,48],description:"动态列表组件通过渲染函数插槽实现灵活的内容生成和布局控制。"}},{title:"示例5：插槽组合",description:"多个插槽组件的嵌套和组合使用，构建复杂的UI结构",component:e.jsx(w,{}),observationPoints:["对话框由多个子组件组合而成","每个子组件负责特定的插槽区域","组件之间通过props进行通信","整体结构清晰，职责分明"],keyPoints:["插槽组合实现复杂UI的模块化","每个组件都有明确的职责","支持灵活的组件组合和嵌套"],commonTraps:["组件之间的耦合度过高","插槽组合层次过深","缺乏统一的设计规范"],solutions:["保持组件之间的松耦合","控制组合的复杂度","建立清晰的组件设计规范"],importantTips:["插槽组合适合构建复杂的UI组件","每个组件应该有单一的职责","考虑组件的可测试性和可维护性"],codeExample:{title:"对话框组合组件",code:`// 对话框主组件
interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;  // ← 重点：接收子组件组合
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const Dialog: React.FC<DialogProps> = ({ isOpen, onClose, children, size = 'md' }) => {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />
      <div className={\`relative bg-white rounded-lg shadow-xl w-full mx-4 \${sizeClasses[size]}\`}>
        {children}  {/* ← 重点：渲染子组件组合 */}
      </div>
    </div>
  );
};

// 对话框头部组件
const DialogHeader: React.FC<{ children: ReactNode; onClose?: () => void }> = ({ 
  children, onClose 
}) => {
  return (
    <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
      <div className="text-lg font-semibold text-gray-900">
        {children}  {/* ← 重点：头部内容插槽 */}
      </div>
      {onClose && (
        <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
          ×
        </button>
      )}
    </div>
  );
};

// 对话框内容组件
const DialogContent: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="px-6 py-4">
      {children}  {/* ← 重点：内容插槽 */}
    </div>
  );
};

// 对话框底部组件
const DialogFooter: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="px-6 py-4 border-t border-gray-200 flex justify-end space-x-2">
      {children}  {/* ← 重点：底部操作插槽 */}
    </div>
  );
};

// 组合使用方式
<Dialog isOpen={isOpen} onClose={closeDialog} size="lg">  {/* ← 重点：主容器 */}
  <DialogHeader onClose={closeDialog}>  {/* ← 重点：头部组件 */}
    确认删除
  </DialogHeader>
  
  <DialogContent>  {/* ← 重点：内容组件 */}
    <p>你确定要删除这个项目吗？此操作不可撤销。</p>
  </DialogContent>
  
  <DialogFooter>  {/* ← 重点：底部组件 */}
    <button onClick={closeDialog}>取消</button>
    <button onClick={handleDelete}>删除</button>
  </DialogFooter>
</Dialog>`,language:"typescript",highlights:[5,16,28,40,47,51,52,55,58,61],description:"对话框通过多个子组件的组合实现复杂的UI结构，每个组件负责特定的插槽区域。"}}],codeExamples:[{title:"基础插槽实现",code:`// 基础插槽组件
interface ContainerProps {
  children: ReactNode;  // ← 重点：children插槽
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className = '' }) => {
  return (
    <div className={\`container mx-auto p-4 \${className}\`}>
      {children}  // ← 重点：渲染插槽内容
    </div>
  );
};

// 使用方式
<Container>
  <h1>标题</h1>
  <p>内容</p>
</Container>`,language:"typescript",description:"最基础的插槽实现，通过children属性接收和渲染内容。"},{title:"具名插槽实现",code:`// 具名插槽组件
interface ModalProps {
  header?: ReactNode;  // ← 重点：头部插槽
  footer?: ReactNode;  // ← 重点：底部插槽
  children: ReactNode;  // ← 重点：内容插槽
  isOpen: boolean;
}

const Modal: React.FC<ModalProps> = ({ header, footer, children, isOpen }) => {
  if (!isOpen) return null;
  
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {header && <div className="modal-header">{header}</div>}  // ← 重点：条件渲染头部
        <div className="modal-body">{children}</div>  // ← 重点：渲染主内容
        {footer && <div className="modal-footer">{footer}</div>}  // ← 重点：条件渲染底部
      </div>
    </div>
  );
};`,language:"typescript",description:"通过具名props实现多个插槽，每个插槽负责不同的内容区域。"},{title:"渲染函数插槽",code:`// 渲染函数插槽组件
interface DataListProps<T> {
  data: T[];
  renderItem: (item: T, index: number) => ReactNode;  // ← 重点：渲染函数插槽
  renderEmpty?: () => ReactNode;  // ← 重点：空状态渲染函数
}

function DataList<T>({ data, renderItem, renderEmpty }: DataListProps<T>) {
  if (data.length === 0) {
    return renderEmpty ? renderEmpty() : <div>暂无数据</div>;  // ← 重点：空状态处理
  }
  
  return (
    <div className="data-list">
      {data.map((item, index) => (
        <div key={index} className="data-item">
          {renderItem(item, index)}  // ← 重点：调用渲染函数
        </div>
      ))}
    </div>
  );
}

// 使用方式
<DataList
  data={users}
  renderItem={(user, index) => (  // ← 重点：传递渲染函数
    <div>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
    </div>
  )}
  renderEmpty={() => <div>没有用户数据</div>}
/>`,language:"typescript",description:"使用渲染函数插槽实现动态内容生成，提供最大的灵活性。"},{title:"插槽组合模式",code:`// 复杂插槽组合
interface PageLayoutProps {
  header?: ReactNode;
  sidebar?: ReactNode;
  footer?: ReactNode;
  children: ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ 
  header, sidebar, footer, children 
}) => {
  return (
    <div className="page-layout">
      {/* 头部插槽 */}
      {header && (
        <header className="page-header">
          {header}  // ← 重点：头部内容插槽
        </header>
      )}
      
      <div className="page-body">
        {/* 侧边栏插槽 */}
        {sidebar && (
          <aside className="page-sidebar">
            {sidebar}  // ← 重点：侧边栏插槽
          </aside>
        )}
        
        {/* 主内容插槽 */}
        <main className="page-main">
          {children}  // ← 重点：主内容插槽
        </main>
      </div>
      
      {/* 底部插槽 */}
      {footer && (
        <footer className="page-footer">
          {footer}  // ← 重点：底部插槽
        </footer>
      )}
    </div>
  );
};

// 嵌套使用
<PageLayout
  header={<Navigation />}  // ← 重点：传递导航组件
  sidebar={<Sidebar />}    // ← 重点：传递侧边栏组件
  footer={<Footer />}      // ← 重点：传递底部组件
>
  <Card>  // ← 重点：主内容区域嵌套其他组件
    <CardHeader>标题</CardHeader>
    <CardContent>内容</CardContent>
  </Card>
</PageLayout>`,language:"typescript",description:"复杂的插槽组合模式，支持多层嵌套和灵活的内容组织。"}],tutorial:{concepts:["插槽组件是React中实现内容分发的重要模式","通过children属性实现基础的内容插槽","具名插槽通过props传递特定位置的内容","条件插槽根据内容存在与否进行渲染","渲染函数插槽提供动态内容生成能力"],steps:["第一步：理解插槽概念 - 插槽是组件中预留的内容位置，可以接收外部传入的React节点","第二步：实现具名插槽 - 通过props传递特定位置的内容，实现更精确的布局控制","第三步：添加条件渲染 - 根据插槽内容的存在与否进行条件渲染，提供更智能的组件行为","第四步：使用渲染函数 - 对于需要动态生成内容的场景，使用渲染函数插槽提供最大的灵活性"],tips:["使用TypeScript为插槽内容提供类型约束","为插槽提供合理的默认值或占位符","考虑插槽内容的响应式布局","使用React.Children工具函数处理children数组","避免在插槽组件内部直接修改children内容"]},interview:{questions:[{question:"什么是插槽组件？它解决了什么问题？",answer:"插槽组件是一种设计模式，允许父组件向子组件传递内容。它解决了组件内容分发的问题，提高了组件的可复用性和灵活性。通过插槽，组件可以专注于布局和样式，而内容由使用者决定。"},{question:"children和具名插槽有什么区别？",answer:"children是React的特殊prop，用于传递默认内容插槽。具名插槽通过自定义props传递特定位置的内容。children适合简单的内容传递，具名插槽适合需要精确控制内容位置的场景。"},{question:"如何处理插槽内容为空的情况？",answer:"可以使用条件渲染来处理空插槽：1) 使用 && 操作符进行条件渲染；2) 提供默认内容或占位符；3) 使用三元操作符提供备选方案；4) 对于渲染函数插槽，提供默认的渲染逻辑。"},{question:"什么时候使用渲染函数插槽？",answer:"渲染函数插槽适用于：1) 需要动态生成内容的场景；2) 需要传递数据给插槽内容；3) 需要根据状态动态调整渲染逻辑；4) 实现复杂的列表或表格组件。渲染函数提供了最大的灵活性。"},{question:"如何优化插槽组件的性能？",answer:"性能优化策略：1) 使用React.memo包装插槽组件；2) 使用useCallback缓存渲染函数；3) 避免在render中创建新的对象或函数；4) 合理使用key属性；5) 考虑使用useMemo缓存复杂的插槽内容。"}],keyPoints:["插槽组件实现了内容与布局的分离","children是最基础的插槽实现方式","具名插槽提供更精确的内容控制","渲染函数插槽适合动态内容生成","条件渲染提供智能的组件行为","插槽组合可以构建复杂的UI结构","类型约束确保插槽使用的安全性","性能优化对于复杂插槽组件很重要"]},bestPractices:{dos:["使用children作为默认内容插槽","为具名插槽使用语义化的命名","根据插槽内容存在与否进行条件渲染","为插槽内容提供TypeScript类型约束","使用渲染函数插槽实现动态内容","保持插槽API简单明确","为插槽提供合理的默认值","考虑插槽内容的响应式布局","使用React.memo优化插槽组件性能","为复杂插槽组合建立清晰的层次结构"],donts:["不要在插槽组件内部直接修改children内容","不要创建过于复杂的插槽嵌套结构","不要忽略插槽内容为空的情况处理","不要在render中创建新的渲染函数","不要让插槽组件承担过多的业务逻辑","不要使用不语义化的插槽命名","不要忽略插槽内容的可访问性","不要让条件渲染导致布局跳动","不要过度使用渲染函数插槽","不要忽略插槽组件的性能影响"],patterns:["插槽组件是实现组件复用的重要手段","合理使用插槽可以大大提高开发效率","插槽组合是构建复杂UI的有效方式","条件插槽提供了更智能的组件行为","渲染函数插槽适合处理动态内容场景","类型约束能够提高插槽使用的安全性","性能优化对于复杂插槽组件很重要","测试策略应该覆盖所有插槽场景","文档和示例对于插槽组件使用很关键","插槽设计应该考虑未来的扩展性"]}};return e.jsx(p,{...s})};export{D as default};
