import{j as e}from"./index-MmCcWZhd.js";import{C as u}from"./ComponentTemplate-DoUPe1QN.js";const h=({children:t,header:s,sidebar:a,footer:l,sidebarWidth:i="250px"})=>e.jsxs("div",{className:"min-h-screen flex flex-col",children:[s&&e.jsx("header",{className:"bg-white shadow-sm border-b",children:s}),e.jsxs("div",{className:"flex flex-1",children:[a&&e.jsx("aside",{className:"bg-gray-50 border-r overflow-y-auto",style:{width:i},children:a}),e.jsx("main",{className:"flex-1 overflow-y-auto",children:t})]}),l&&e.jsx("footer",{className:"bg-white border-t",children:l})]}),b=({children:t,columns:s=1,gap:a="md",className:l=""})=>{const i=()=>{if(typeof s=="number")return`grid-cols-${s}`;const r=[];return s.sm&&r.push(`sm:grid-cols-${s.sm}`),s.md&&r.push(`md:grid-cols-${s.md}`),s.lg&&r.push(`lg:grid-cols-${s.lg}`),s.xl&&r.push(`xl:grid-cols-${s.xl}`),r.join(" ")},n={sm:"gap-2",md:"gap-4",lg:"gap-6",xl:"gap-8"}[a];return e.jsx("div",{className:`grid ${i()} ${n} ${l}`,children:t})},d=({children:t,direction:s="row",justify:a="start",align:l="start",wrap:i=!1,gap:n,className:r=""})=>{const c=s==="column"?"flex-col":"flex-row",m={start:"justify-start",end:"justify-end",center:"justify-center",between:"justify-between",around:"justify-around",evenly:"justify-evenly"}[a],x={start:"items-start",end:"items-end",center:"items-center",stretch:"items-stretch"}[l],g=i?"flex-wrap":"flex-nowrap",p=n?{sm:"gap-2",md:"gap-4",lg:"gap-6",xl:"gap-8"}[n]:"";return e.jsx("div",{className:`flex ${c} ${m} ${x} ${g} ${p} ${r}`,children:t})},f=({children:t,maxWidth:s="lg",fluid:a=!1,padding:l="md",className:i=""})=>{const n=a?"w-full":{sm:"max-w-sm",md:"max-w-md",lg:"max-w-4xl",xl:"max-w-6xl","2xl":"max-w-7xl"}[s],r={sm:"p-2",md:"p-4",lg:"p-6",xl:"p-8"}[l];return e.jsx("div",{className:`mx-auto ${n} ${r} ${i}`,children:t})},o=({children:t,title:s,subtitle:a,actions:l,className:i=""})=>e.jsxs("div",{className:`bg-white rounded-lg shadow-md overflow-hidden ${i}`,children:[(s||a||l)&&e.jsxs("div",{className:"px-6 py-4 border-b border-gray-200 flex justify-between items-start",children:[e.jsxs("div",{children:[s&&e.jsx("h3",{className:"text-lg font-semibold text-gray-900",children:s}),a&&e.jsx("p",{className:"text-sm text-gray-600 mt-1",children:a})]}),l&&e.jsx("div",{className:"ml-4",children:l})]}),e.jsx("div",{className:"p-6",children:t})]}),N=()=>e.jsx("div",{className:"h-96 border-2 border-dashed border-gray-300 rounded-lg overflow-hidden",children:e.jsx(h,{header:e.jsx("div",{className:"bg-blue-100 p-4 text-center text-blue-800 font-medium",children:"页面头部"}),sidebar:e.jsx("div",{className:"bg-green-100 p-4 text-center text-green-800 font-medium",children:"侧边栏"}),footer:e.jsx("div",{className:"bg-gray-100 p-4 text-center text-gray-800 font-medium",children:"页面底部"}),children:e.jsxs("div",{className:"bg-yellow-100 p-8 text-center",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2 text-yellow-800",children:"主要内容区域"}),e.jsx("p",{className:"text-yellow-700",children:"这里是页面的主要内容"})]})})}),v=()=>e.jsx(b,{columns:{sm:1,md:2,lg:3},gap:"md",children:[1,2,3,4,5,6].map(t=>e.jsxs("div",{className:"bg-blue-100 p-4 rounded-lg text-center",children:[e.jsxs("h4",{className:"font-semibold text-blue-800",children:["网格项 ",t]}),e.jsx("p",{className:"text-sm text-blue-600 mt-1",children:"响应式网格布局"})]},t))}),y=()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs(d,{justify:"between",align:"center",className:"bg-purple-100 p-4 rounded-lg",children:[e.jsx("div",{className:"bg-white p-3 rounded shadow",children:"左侧内容"}),e.jsx("div",{className:"bg-white p-3 rounded shadow",children:"中间内容"}),e.jsx("div",{className:"bg-white p-3 rounded shadow",children:"右侧内容"})]}),e.jsxs(d,{direction:"column",gap:"md",className:"bg-green-100 p-4 rounded-lg",children:[e.jsx("div",{className:"bg-white p-3 rounded shadow text-center",children:"垂直布局项 1"}),e.jsx("div",{className:"bg-white p-3 rounded shadow text-center",children:"垂直布局项 2"}),e.jsx("div",{className:"bg-white p-3 rounded shadow text-center",children:"垂直布局项 3"})]})]}),j=()=>e.jsx("div",{className:"bg-gray-100 p-4",children:e.jsxs(f,{maxWidth:"md",className:"bg-white rounded-lg",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"容器组件示例"}),e.jsx("p",{className:"text-gray-600 mb-4",children:"这个容器限制了最大宽度，并提供了居中对齐和内边距。 容器组件是构建响应式布局的基础。"}),e.jsx("div",{className:"bg-blue-50 p-3 rounded",children:e.jsx("p",{className:"text-sm text-blue-700",children:"容器内的内容会自动居中并保持合适的宽度。"})})]})}),C=()=>e.jsxs("div",{className:"grid md:grid-cols-2 gap-4",children:[e.jsx(o,{title:"基础卡片",subtitle:"简单的卡片示例",actions:e.jsx("button",{className:"text-blue-600 hover:text-blue-800 text-sm font-medium",children:"操作"}),children:e.jsx("p",{className:"text-gray-600",children:"这是一个基础的卡片组件，包含标题、副标题和操作按钮。 卡片是现代UI设计中常用的容器组件。"})}),e.jsxs(o,{className:"border-l-4 border-l-green-500",children:[e.jsx("h4",{className:"font-semibold text-green-800 mb-2",children:"自定义样式卡片"}),e.jsx("p",{className:"text-gray-600 text-sm",children:"通过className属性可以自定义卡片的样式， 这个卡片添加了绿色的左边框。"})]})]}),P=()=>{const t={title:"布局组件 (Layout Components)",description:"布局组件负责页面结构和元素排列，提供一致的视觉框架和响应式设计。通过合理使用布局组件，可以构建出结构清晰、响应式友好的用户界面。",overview:e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800 mb-3",children:"核心概念"}),e.jsx("p",{className:"text-gray-600 mb-4",children:"布局组件是构建用户界面结构的基础组件，它们定义了页面元素的排列方式和空间关系。 良好的布局组件设计能够提供一致的用户体验，并支持响应式设计。"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800 mb-3",children:"主要特性"}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-blue-50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-medium text-blue-800 mb-2",children:"响应式设计"}),e.jsx("p",{className:"text-sm text-blue-700",children:"自适应不同屏幕尺寸，提供最佳的用户体验"})]}),e.jsxs("div",{className:"bg-green-50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-medium text-green-800 mb-2",children:"灵活配置"}),e.jsx("p",{className:"text-sm text-green-700",children:"支持多种配置选项，满足不同的布局需求"})]}),e.jsxs("div",{className:"bg-purple-50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-medium text-purple-800 mb-2",children:"组合使用"}),e.jsx("p",{className:"text-sm text-purple-700",children:"可以嵌套和组合使用，构建复杂的布局结构"})]}),e.jsxs("div",{className:"bg-orange-50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-medium text-orange-800 mb-2",children:"性能优化"}),e.jsx("p",{className:"text-sm text-orange-700",children:"使用CSS Grid和Flexbox，提供高性能的布局方案"})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800 mb-3",children:"应用场景"}),e.jsxs("ul",{className:"space-y-2 text-gray-600",children:[e.jsxs("li",{className:"flex items-start",children:[e.jsx("span",{className:"text-blue-500 mr-2 mt-1",children:"•"}),e.jsx("span",{children:"页面整体布局 - 头部、侧边栏、内容区、底部的组织"})]}),e.jsxs("li",{className:"flex items-start",children:[e.jsx("span",{className:"text-blue-500 mr-2 mt-1",children:"•"}),e.jsx("span",{children:"内容排列 - 网格布局、弹性布局、列表布局"})]}),e.jsxs("li",{className:"flex items-start",children:[e.jsx("span",{className:"text-blue-500 mr-2 mt-1",children:"•"}),e.jsx("span",{children:"响应式设计 - 适配不同设备和屏幕尺寸"})]}),e.jsxs("li",{className:"flex items-start",children:[e.jsx("span",{className:"text-blue-500 mr-2 mt-1",children:"•"}),e.jsx("span",{children:"组件容器 - 为其他组件提供统一的容器和间距"})]})]})]})]}),examples:[{title:"页面布局组件",description:"提供标准的页面结构，包括头部、侧边栏、内容区和底部",component:e.jsx(N,{}),observationPoints:["页面采用经典的头部-主体-底部三段式布局","主体部分使用侧边栏+内容区的水平布局","所有区域都支持可选配置，提供灵活性","使用语义化HTML标签提升可访问性","布局高度自适应视口，确保页面填满屏幕"],keyPoints:["三段式布局 - header、main、footer的垂直排列","二级布局 - 主体内部的侧边栏和内容区水平排列","可选区域 - 通过条件渲染实现灵活的页面结构","语义化标签 - 使用header、aside、main、footer标签"],commonTraps:["忘记设置容器高度导致布局不完整","侧边栏宽度固定不适配移动端","内容区域缺少滚动处理","未考虑无侧边栏时的布局适配"],solutions:["使用min-h-screen确保最小高度","提供响应式的侧边栏宽度配置","为内容区域添加overflow-y-auto","通过条件渲染优雅处理可选区域"],importantTips:["页面布局是应用的骨架，需要考虑扩展性和维护性","合理使用语义化标签有助于SEO和可访问性","响应式设计要从布局层面开始考虑"],codeExample:{title:"页面布局组件实现",code:`// 页面布局组件的完整实现
interface PageLayoutProps {
  children: ReactNode;
  header?: ReactNode;
  sidebar?: ReactNode;
  footer?: ReactNode;
  sidebarWidth?: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({
  children,
  header,
  sidebar,
  footer,
  sidebarWidth = '250px'
}) => {
  return (
    <div className="min-h-screen flex flex-col">  {/* ← 重点：最小高度和垂直布局 */}
      {/* 头部 */}
      {header && (
        <header className="bg-white shadow-sm border-b">
          {header}
        </header>
      )}

      {/* 主体内容 */}
      <div className="flex flex-1">  {/* ← 重点：水平布局和自动填充 */}
        {/* 侧边栏 */}
        {sidebar && (
          <aside
            className="bg-gray-50 border-r overflow-y-auto"
            style={{ width: sidebarWidth }}  {/* ← 重点：动态宽度 */}
          >
            {sidebar}
          </aside>
        )}

        {/* 主要内容区域 */}
        <main className="flex-1 overflow-y-auto">  {/* ← 重点：自适应宽度 */}
          {children}
        </main>
      </div>

      {/* 底部 */}
      {footer && (
        <footer className="bg-white border-t">
          {footer}
        </footer>
      )}
    </div>
  );
};`,language:"tsx",highlightLines:[18,27,32,39],explanation:"关键代码说明：第18行设置最小高度和弹性布局；第27行主体使用弹性布局；第32行侧边栏动态宽度设置；第39行主内容区域自适应宽度"}},{title:"网格布局组件",description:"响应式网格布局，支持不同屏幕尺寸下的列数配置",component:e.jsx(v,{}),observationPoints:["网格项目自动排列，无需手动计算位置","响应式列数配置适应不同屏幕尺寸","统一的间距设置保持视觉一致性","网格项目高度自适应内容","支持任意数量的子元素"],keyPoints:["CSS Grid布局 - 现代二维布局系统","响应式断点 - sm、md、lg、xl四个断点配置","自动排列 - 子元素按顺序自动填充网格","间距控制 - 通过gap属性统一设置间距"],commonTraps:["在小屏幕上设置过多列数导致内容拥挤","忽略内容长度差异导致视觉不协调","gap设置过大或过小影响视觉效果","未考虑网格项目的最小宽度"],solutions:["为小屏幕设置合理的列数（通常1-2列）","使用统一的卡片组件保持视觉一致性","根据内容密度选择合适的gap值","设置网格项目的最小宽度限制"],importantTips:["CSS Grid是处理二维布局的最佳选择","响应式网格设计要优先考虑内容的可读性","合理的间距设计能显著提升用户体验"],codeExample:{title:"网格布局组件实现",code:`// 响应式网格布局组件
interface GridProps {
  children: ReactNode;
  columns?: number | { sm?: number; md?: number; lg?: number; xl?: number };
  gap?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const Grid: React.FC<GridProps> = ({
  children,
  columns = 1,
  gap = 'md',
  className = ''
}) => {
  const getGridCols = () => {
    if (typeof columns === 'number') {
      return \`grid-cols-\${columns}\`;  // ← 重点：固定列数
    }

    // 响应式列数配置
    return [
      columns.sm && \`sm:grid-cols-\${columns.sm}\`,  // ← 重点：小屏幕列数
      columns.md && \`md:grid-cols-\${columns.md}\`,  // ← 重点：中等屏幕列数
      columns.lg && \`lg:grid-cols-\${columns.lg}\`,  // ← 重点：大屏幕列数
      columns.xl && \`xl:grid-cols-\${columns.xl}\`   // ← 重点：超大屏幕列数
    ].filter(Boolean).join(' ');
  };

  const gapClasses = {
    sm: 'gap-2',
    md: 'gap-4',
    lg: 'gap-6',
    xl: 'gap-8'
  };

  return (
    <div className={\`grid \${getGridCols()} \${gapClasses[gap]} \${className}\`}>  {/* ← 重点：组合CSS类名 */}
      {children}
    </div>
  );
};`,language:"tsx",highlightLines:[13,15,16,17,18,19,29,30],explanation:"关键代码说明：第13-19行处理响应式列数配置；第29行使用CSS Grid布局；第30行动态应用网格列数和间距类名"}},{title:"弹性布局组件",description:"基于Flexbox的布局组件，支持多种对齐和排列方式",component:e.jsx(y,{}),observationPoints:["弹性项目可以自动伸缩适应容器大小","支持水平和垂直两个方向的布局","提供多种对齐方式的精确控制","换行功能处理内容溢出情况","间距设置统一且灵活"],keyPoints:["Flexbox布局 - 一维布局系统，适合处理行或列","主轴对齐 - justify-content控制主轴方向的对齐","交叉轴对齐 - align-items控制交叉轴方向的对齐","弹性换行 - flex-wrap处理内容溢出"],commonTraps:["混淆主轴和交叉轴的对齐属性","忘记设置flex-wrap导致内容溢出","在需要二维布局时错误使用Flexbox","过度依赖Flexbox处理复杂的网格布局"],solutions:["明确区分justify-content和align-items的作用","根据内容特点合理设置换行策略","复杂二维布局优先考虑CSS Grid","结合Flexbox和Grid各自的优势"],importantTips:["Flexbox最适合处理一维布局问题","理解主轴和交叉轴概念是掌握Flexbox的关键","合理的对齐设置能大大简化布局代码"],codeExample:{title:"弹性布局组件实现",code:`// 弹性布局组件
interface FlexProps {
  children: ReactNode;
  direction?: 'row' | 'column';
  justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
  align?: 'start' | 'end' | 'center' | 'stretch';
  wrap?: boolean;
  gap?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const Flex: React.FC<FlexProps> = ({
  children,
  direction = 'row',
  justify = 'start',
  align = 'start',
  wrap = false,
  gap,
  className = ''
}) => {
  const directionClasses = {
    row: 'flex-row',     // ← 重点：水平排列
    column: 'flex-col'   // ← 重点：垂直排列
  };

  const justifyClasses = {
    start: 'justify-start',
    end: 'justify-end',
    center: 'justify-center',      // ← 重点：主轴居中
    between: 'justify-between',    // ← 重点：两端对齐
    around: 'justify-around',
    evenly: 'justify-evenly'
  };

  const alignClasses = {
    start: 'items-start',
    end: 'items-end',
    center: 'items-center',        // ← 重点：交叉轴居中
    stretch: 'items-stretch'       // ← 重点：拉伸填充
  };

  const gapClasses = gap ? {
    sm: 'gap-2',
    md: 'gap-4',
    lg: 'gap-6',
    xl: 'gap-8'
  }[gap] : '';

  return (
    <div className={\`flex \${directionClasses[direction]}
    \${justifyClasses[justify]} \${alignClasses[align]}
     \${wrap ? 'flex-wrap' : ''} \${gapClasses} \${className}\`.trim()}>  {/* ← 重点：组合弹性布局类名 */}
      {children}
    </div>
  );
};`,language:"tsx",highlightLines:[20,25,32,44,45],explanation:"关键代码说明：第20-32行定义方向、对齐和换行的CSS类映射；第44行组合所有弹性布局类名；第45行应用到容器元素"}},{title:"容器组件",description:"提供内容容器，支持最大宽度限制和居中对齐",component:e.jsx(j,{}),observationPoints:["容器自动居中对齐，保持内容在页面中央","最大宽度限制确保在大屏幕上的可读性","响应式宽度配置适应不同设备","内边距设置提供合适的内容间距","流体模式支持全宽布局需求"],keyPoints:["居中对齐 - 使用margin: 0 auto实现水平居中","最大宽度 - 通过max-width控制内容宽度","响应式断点 - 不同屏幕尺寸的宽度配置","流体模式 - 可选的全宽布局支持"],commonTraps:["在小屏幕上设置过大的内边距","忘记设置最大宽度导致内容过宽","流体模式下内容缺少合理的边距","容器嵌套导致不必要的宽度限制"],solutions:["使用响应式内边距，小屏幕减少边距","根据内容类型设置合适的最大宽度","流体模式下仍需保持最小边距","避免不必要的容器嵌套"],importantTips:["容器组件是页面布局的基础，要考虑内容的最佳阅读体验","合理的最大宽度能显著提升大屏幕下的用户体验","响应式设计要平衡内容密度和可读性"],codeExample:{title:"容器组件实现",code:`// 容器组件
interface ContainerProps {
  children: ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  fluid?: boolean;
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const Container: React.FC<ContainerProps> = ({
  children,
  maxWidth = 'lg',
  fluid = false,
  padding = 'md',
  className = ''
}) => {
  const maxWidthClasses = {
    sm: 'max-w-sm',      // ← 重点：小容器宽度
    md: 'max-w-md',      // ← 重点：中等容器宽度
    lg: 'max-w-4xl',     // ← 重点：大容器宽度
    xl: 'max-w-6xl',     // ← 重点：超大容器宽度
    '2xl': 'max-w-7xl'   // ← 重点：最大容器宽度
  };

  const paddingClasses = {
    sm: 'px-4 py-2',
    md: 'px-6 py-4',
    lg: 'px-8 py-6',
    xl: 'px-12 py-8'
  };

  return (
    <div className={\`\${fluid ? 'w-full' : \`mx-auto \${maxWidthClasses[maxWidth]}\`}
    \${paddingClasses[padding]} \${className}\`.trim()}>  {/* ← 重点：条件渲染流体或固定宽度 */}
      {children}
    </div>
  );
};`,language:"tsx",highlightLines:[15,22,28,29],explanation:"关键代码说明：第15-22行定义最大宽度和内边距的CSS类映射；第28行根据fluid模式选择全宽或居中布局；第29行应用内边距和自定义类名"}},{title:"卡片组件",description:"内容卡片容器，支持标题、副标题和操作区域",component:e.jsx(C,{}),observationPoints:["卡片提供清晰的内容边界和视觉分组","标题和副标题建立内容层次结构","操作区域集中放置相关功能按钮","阴影效果增强卡片的立体感","圆角设计提升视觉友好度"],keyPoints:["内容分组 - 将相关信息组织在一个视觉单元内","层次结构 - 通过标题、副标题建立信息层级","操作集中 - 相关操作统一放置在操作区域","视觉设计 - 阴影、圆角、边距的协调配合"],commonTraps:["卡片内容过多导致信息密度过高","缺少合适的内边距影响可读性","操作按钮过多造成界面混乱","卡片尺寸不一致影响整体美观"],solutions:["合理控制卡片内容量，必要时分页或折叠","设置统一的内边距标准","限制操作按钮数量，使用下拉菜单收纳次要操作","建立卡片尺寸规范，保持视觉一致性"],importantTips:["卡片是现代UI设计的重要组件，要注重内容的组织和呈现","合理的视觉层次能帮助用户快速理解内容结构","操作区域的设计要平衡功能性和美观性"],codeExample:{title:"卡片组件实现",code:`// 卡片组件
interface CardProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  actions?: ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({
  children,
  title,
  subtitle,
  actions,
  className = ''
}) => {
  return (
    <div className={\`bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden \${className}\`}>  {/* ← 重点：卡片基础样式 */}
      {/* 头部区域 */}
      {(title || subtitle || actions) && (  {/* ← 重点：条件渲染头部 */}
        <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-start">
          <div>
            {title && (
              <h3 className="text-lg font-semibold text-gray-900 mb-1">  {/* ← 重点：标题样式 */}
                {title}
              </h3>
            )}
            {subtitle && (
              <p className="text-sm text-gray-600">{subtitle}</p>  {/* ← 重点：副标题样式 */}
            )}
          </div>
          {actions && (
            <div className="flex gap-2">{actions}</div>  {/* ← 重点：操作区域 */}
          )}
        </div>
      )}

      {/* 内容区域 */}
      <div className="px-6 py-4">  {/* ← 重点：内容区域内边距 */}
        {children}
      </div>
    </div>
  );
};`,language:"tsx",highlightLines:[16,18,20,25,32,36],explanation:"关键代码说明：第16行设置卡片基础样式；第18行条件渲染头部区域；第20-32行头部内容布局；第36行内容区域设置内边距"}}],codeExamples:[{title:"页面布局组件实现",code:`interface PageLayoutProps {
  children: ReactNode;
  header?: ReactNode;
  sidebar?: ReactNode;
  footer?: ReactNode;
  sidebarWidth?: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({
  children,
  header,
  sidebar,
  footer,
  sidebarWidth = '250px'
}) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* 头部 */}
      {header && (
        <header className="bg-white shadow-sm border-b">
          {header}
        </header>
      )}

      {/* 主体内容 */}
      <div className="flex flex-1">
        {/* 侧边栏 */}
        {sidebar && (
          <aside
            className="bg-gray-50 border-r overflow-y-auto"
            style={{ width: sidebarWidth }}
          >
            {sidebar}
          </aside>
        )}

        {/* 主要内容区域 */}
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>

      {/* 底部 */}
      {footer && (
        <footer className="bg-white border-t">
          {footer}
        </footer>
      )}
    </div>
  );
};`,language:"typescript",highlights:[19,22,28,31,38,44],observationPoints:["使用min-h-screen确保页面至少占满整个视口高度","采用flex布局实现头部、主体、底部的垂直排列","主体部分使用flex-1自动填充剩余空间","侧边栏和主内容区域使用水平flex布局","通过条件渲染实现可选的页面区域"],keyPoints:["flex布局的嵌套使用 - 外层垂直布局，内层水平布局","flex-1属性实现自适应高度和宽度","条件渲染提供灵活的页面结构配置","overflow-y-auto处理内容溢出滚动"],commonTraps:["忘记设置min-h-screen导致页面高度不足","侧边栏宽度设置不当影响响应式效果","未处理内容溢出导致布局破坏","过度嵌套flex容器影响性能"],solutions:["使用min-h-screen确保页面最小高度","提供sidebarWidth属性支持自定义宽度","添加overflow-y-auto处理内容滚动","合理规划flex容器层级结构"],importantTips:["页面布局组件是应用的基础架构，需要考虑扩展性","使用语义化HTML标签提升可访问性","flex布局比传统布局更适合现代响应式设计"]},{title:"响应式网格布局",code:`interface GridProps {
  children: ReactNode;
  columns?: number | { sm?: number; md?: number; lg?: number; xl?: number };
  gap?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const Grid: React.FC<GridProps> = ({
  children,
  columns = 1,
  gap = 'md',
  className = ''
}) => {
  const getGridCols = () => {
    if (typeof columns === 'number') {
      return \`grid-cols-\${columns}\`;
    }

    const responsive = [];
    if (columns.sm) responsive.push(\`sm:grid-cols-\${columns.sm}\`);
    if (columns.md) responsive.push(\`md:grid-cols-\${columns.md}\`);
    if (columns.lg) responsive.push(\`lg:grid-cols-\${columns.lg}\`);
    if (columns.xl) responsive.push(\`xl:grid-cols-\${columns.xl}\`);

    return responsive.join(' ');
  };

  const gapClass = {
    sm: 'gap-2',
    md: 'gap-4',
    lg: 'gap-6',
    xl: 'gap-8'
  }[gap];

  return (
    <div className={\`grid \${getGridCols()} \${gapClass} \${className}\`}>
      {children}
    </div>
  );
};`,language:"typescript",highlights:[3,10,16,17,22,23,24,25,27,30,37,38],observationPoints:["支持数字和对象两种列数配置方式","动态生成响应式CSS类名","使用联合类型定义gap间距选项","通过模板字符串组合CSS类名","提供className扩展自定义样式"],keyPoints:["响应式设计 - 支持不同屏幕尺寸的列数配置","类型安全 - 使用TypeScript联合类型约束参数","动态类名生成 - 根据配置生成对应的CSS Grid类","可扩展性 - 支持自定义className和gap配置"],commonTraps:["忘记配置响应式断点导致移动端显示问题","CSS Grid类名拼写错误导致样式失效","gap配置不当影响视觉效果","过多列数在小屏幕上显示拥挤"],solutions:["提供合理的响应式默认配置","使用TypeScript确保类名拼写正确","提供多种gap选项满足不同需求","在小屏幕上自动减少列数"],importantTips:["CSS Grid是现代布局的最佳选择，比float和position更强大","响应式设计要考虑内容在不同屏幕上的可读性","合理的间距设计能显著提升用户体验"]},{title:"弹性布局组件",code:`interface FlexProps {
  children: ReactNode;
  direction?: 'row' | 'column';
  justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
  align?: 'start' | 'end' | 'center' | 'stretch';
  wrap?: boolean;
  gap?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const Flex: React.FC<FlexProps> = ({
  children,
  direction = 'row',
  justify = 'start',
  align = 'start',
  wrap = false,
  gap,
  className = ''
}) => {
  const directionClass = direction === 'column' ? 'flex-col' : 'flex-row';

  const justifyClass = {
    start: 'justify-start',
    end: 'justify-end',
    center: 'justify-center',
    between: 'justify-between',
    around: 'justify-around',
    evenly: 'justify-evenly'
  }[justify];

  const alignClass = {
    start: 'items-start',
    end: 'items-end',
    center: 'items-center',
    stretch: 'items-stretch'
  }[align];

  const gapClass = gap ? {
    sm: 'gap-2',
    md: 'gap-4',
    lg: 'gap-6',
    xl: 'gap-8'
  }[gap] : '';

  const wrapClass = wrap ? 'flex-wrap' : 'flex-nowrap';

  return (
    <div className={\`flex \${directionClass} \${justifyClass} \${alignClass} \${wrapClass} \${gapClass} \${className}\`.trim()}>
      {children}
    </div>
  );
};`,language:"typescript",highlights:[5,6,7,8,22,24,33,40,47,50,51],observationPoints:["提供完整的Flexbox属性配置选项","使用对象映射将属性值转换为CSS类名","支持主轴和交叉轴的对齐方式配置","通过direction控制布局方向","模板字符串动态组合多个CSS类"],keyPoints:["Flexbox布局 - 一维布局系统，适合组件内部元素排列","属性映射 - 将语义化的属性值映射为具体的CSS类名","方向控制 - 支持水平和垂直两种布局方向","对齐配置 - 提供主轴和交叉轴的多种对齐选项"],commonTraps:["混淆justify和align的作用轴向","忘记设置flex容器的高度导致align无效","过度使用嵌套flex容器","不理解flex-wrap的影响"],solutions:["记住justify控制主轴，align控制交叉轴","为flex容器设置明确的高度或使用flex-1","合理规划flex容器的嵌套层级","根据内容特点选择是否启用wrap"],importantTips:["Flexbox适合一维布局，Grid适合二维布局","理解主轴和交叉轴的概念是使用Flexbox的关键","合理使用gap属性可以简化间距管理"]},{title:"容器和卡片组件",code:`interface ContainerProps {
  children: ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  fluid?: boolean;
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const Container: React.FC<ContainerProps> = ({
  children,
  maxWidth = 'lg',
  fluid = false,
  padding = 'md',
  className = ''
}) => {
  const maxWidthClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-4xl',
    xl: 'max-w-6xl',
    '2xl': 'max-w-7xl'
  };

  const paddingClasses = {
    sm: 'px-4 py-2',
    md: 'px-6 py-4',
    lg: 'px-8 py-6',
    xl: 'px-12 py-8'
  };

  return (
    <div className={\`\${fluid ? 'w-full' : \`mx-auto \${maxWidthClasses[maxWidth]}\`} \${paddingClasses[padding]} \${className}\`.trim()}>
      {children}
    </div>
  );
};

interface CardProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  actions?: ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({
  children,
  title,
  subtitle,
  actions,
  className = ''
}) => {
  return (
    <div className={\`bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden \${className}\`}>
      {(title || subtitle || actions) && (
        <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-start">
          <div>
            {title && (
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {title}
              </h3>
            )}
            {subtitle && (
              <p className="text-sm text-gray-600">{subtitle}</p>
            )}
          </div>
          {actions && (
            <div className="flex gap-2">{actions}</div>
          )}
        </div>
      )}
      <div className="px-6 py-4">
        {children}
      </div>
    </div>
  );
};`,language:"typescript",highlights:[3,11,18,26,34,40,47,54,55,58,65,69],observationPoints:["展示了各种布局组件的典型使用方式","PageLayout组件支持可选的页面区域配置","Grid组件使用响应式列数配置","Flex组件实现两端对齐的水平布局","Container组件提供内容宽度限制"],keyPoints:["组件组合使用 - 不同布局组件可以嵌套和组合","响应式配置 - 通过对象形式配置不同屏幕的列数","语义化使用 - 根据内容特点选择合适的布局组件","属性配置 - 通过props控制布局行为和样式"],commonTraps:["过度嵌套布局组件导致DOM结构复杂","不合理的响应式配置影响移动端体验","忽略内容特点盲目选择布局方式","缺少容器组件导致内容宽度失控"],solutions:["合理规划组件层级，避免不必要的嵌套","根据内容特点配置合适的响应式断点","理解各布局组件的适用场景","使用Container组件控制内容最大宽度"],importantTips:["容器组件提供内容宽度约束和居中对齐","卡片组件是现代UI设计的重要容器组件","合理的视觉层次能帮助用户快速理解内容结构"]},{title:"综合使用示例",code:`// 完整的页面布局示例
const DashboardPage: React.FC = () => {
  return (
    <PageLayout
      header={
        <Container fluid padding="md">
          <Flex justify="between" align="center">
            <h1 className="text-xl font-bold">仪表板</h1>
            <div className="flex gap-2">
              <button className="btn-primary">新建</button>
              <button className="btn-secondary">设置</button>
            </div>
          </Flex>
        </Container>
      }
      sidebar={
        <div className="p-4">
          <nav className="space-y-2">
            <a href="#" className="block p-2 rounded hover:bg-gray-100">概览</a>
            <a href="#" className="block p-2 rounded hover:bg-gray-100">数据</a>
            <a href="#" className="block p-2 rounded hover:bg-gray-100">设置</a>
          </nav>
        </div>
      }
      footer={
        <Container fluid padding="sm">
          <p className="text-center text-gray-500 text-sm">
            © 2024 我的应用. 保留所有权利.
          </p>
        </Container>
      }
    >
      <Container maxWidth="xl" padding="lg">
        {/* 统计卡片网格 */}
        <Grid columns={{ sm: 1, md: 2, lg: 4 }} gap="md" className="mb-8">
          <Card title="总用户" subtitle="本月新增">
            <div className="text-3xl font-bold text-blue-600">1,234</div>
            <div className="text-sm text-green-600 mt-1">↑ 12% 较上月</div>
          </Card>
          <Card title="订单数" subtitle="今日订单">
            <div className="text-3xl font-bold text-green-600">567</div>
            <div className="text-sm text-green-600 mt-1">↑ 8% 较昨日</div>
          </Card>
          <Card title="收入" subtitle="本月收入">
            <div className="text-3xl font-bold text-purple-600">¥89,012</div>
            <div className="text-sm text-red-600 mt-1">↓ 3% 较上月</div>
          </Card>
          <Card title="转化率" subtitle="平均转化率">
            <div className="text-3xl font-bold text-orange-600">3.2%</div>
            <div className="text-sm text-green-600 mt-1">↑ 0.5% 较上月</div>
          </Card>
        </Grid>

        {/* 内容区域 */}
        <Grid columns={{ sm: 1, lg: 2 }} gap="lg">
          <Card title="最近活动" actions={
            <button className="text-blue-600 hover:text-blue-800 text-sm">查看全部</button>
          }>
            <div className="space-y-3">
              <Flex align="center" gap="md">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 text-sm">U</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">新用户注册</p>
                  <p className="text-xs text-gray-500">2分钟前</p>
                </div>
              </Flex>
              <Flex align="center" gap="md">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-sm">O</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">新订单创建</p>
                  <p className="text-xs text-gray-500">5分钟前</p>
                </div>
              </Flex>
            </div>
          </Card>

          <Card title="快速操作">
            <Grid columns={2} gap="sm">
              <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 text-left">
                <div className="text-lg mb-1">📊</div>
                <div className="text-sm font-medium">查看报表</div>
              </button>
              <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 text-left">
                <div className="text-lg mb-1">👥</div>
                <div className="text-sm font-medium">用户管理</div>
              </button>
              <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 text-left">
                <div className="text-lg mb-1">⚙️</div>
                <div className="text-sm font-medium">系统设置</div>
              </button>
              <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 text-left">
                <div className="text-lg mb-1">📝</div>
                <div className="text-sm font-medium">内容管理</div>
              </button>
            </Grid>
          </Card>
        </Grid>
      </Container>
    </PageLayout>
  );
};`,language:"typescript",highlights:[4,6,7,15,25,32,34,35,50,55,56,74,75],observationPoints:["展示了完整的页面布局结构，包含头部、侧边栏、主内容和底部","使用Container组件控制内容宽度和内边距","Grid组件实现响应式的卡片布局","Flex组件处理头部导航和活动列表的对齐","Card组件提供统一的内容容器和视觉样式"],keyPoints:["组件嵌套 - PageLayout > Container > Grid > Card的层级结构","响应式设计 - 不同屏幕尺寸下的列数自动调整","内容组织 - 使用卡片组件将相关信息分组展示","交互设计 - 合理的按钮布局和悬停效果"],commonTraps:["过度嵌套导致DOM结构复杂难以维护","响应式配置不当影响移动端用户体验","忽略内容层次导致信息展示混乱","缺少合适的间距和对齐影响视觉效果"],solutions:["合理规划组件层级，每层组件都有明确职责","根据内容特点设置合适的响应式断点","使用卡片和网格组件建立清晰的信息层次","统一使用设计系统的间距和对齐规范"],importantTips:["布局组件的组合使用是构建复杂界面的关键","每个组件都应该有单一明确的布局职责","响应式设计要从整体布局到细节交互全面考虑"]}],tutorial:{concepts:["布局组件是构建UI结构的基础，决定了页面的整体架构","CSS Grid是二维布局系统，擅长处理复杂的行列布局","Flexbox是一维布局系统，适合处理单行或单列的元素排列","响应式设计需要考虑不同屏幕尺寸下的用户体验","组件组合可以构建复杂而灵活的布局系统","语义化HTML标签提升可访问性和SEO效果","容器组件控制内容宽度和居中对齐","卡片组件提供内容分组和视觉层次"],steps:["需求分析：确定页面布局结构和功能要求","技术选型：根据布局复杂度选择Grid或Flexbox","接口设计：定义组件的props和TypeScript类型","基础实现：编写核心布局逻辑和样式","响应式适配：添加断点和移动端优化","交互增强：处理内容溢出、滚动等边界情况","性能优化：减少重排重绘，优化渲染性能","可访问性：添加ARIA标签和键盘导航支持","测试验证：跨浏览器和设备兼容性测试","文档完善：编写使用指南和最佳实践"],tips:["优先使用CSS Grid处理二维布局，Flexbox处理一维布局","设置合理的默认值，减少使用者的配置负担","使用CSS变量实现主题定制和动态样式","考虑内容溢出情况，提供滚动或截断处理","移动端优先设计，然后向大屏幕扩展","使用语义化标签（header、main、aside、footer）","提供多种尺寸规格满足不同场景需求","合理使用margin和padding，保持视觉一致性","避免过度嵌套，保持DOM结构简洁","使用TypeScript确保类型安全和开发体验"]},interview:{questions:[{question:"CSS Grid和Flexbox的区别是什么？什么时候使用哪个？",answer:"CSS Grid是二维布局系统，可以同时控制行和列，适合处理复杂的页面布局；Flexbox是一维布局系统，只能控制一个方向（行或列），适合处理组件内部的元素排列。使用Grid处理整体页面结构，使用Flexbox处理导航栏、按钮组等线性布局。"},{question:"如何实现响应式布局？有哪些最佳实践？",answer:"1. 移动端优先设计，使用min-width媒体查询；2. 使用相对单位（%、em、rem、vw、vh）；3. CSS Grid的auto-fit/auto-fill实现自适应列数；4. Flexbox的flex属性实现弹性伸缩；5. 容器查询（Container Queries）处理组件级响应式；6. 合理设置断点，通常使用768px、1024px、1280px等。"},{question:"布局组件的性能优化策略有哪些？",answer:"1. 避免不必要的重新渲染，使用React.memo和useMemo；2. 使用CSS进行布局计算而非JavaScript；3. 避免深层DOM嵌套，保持结构扁平；4. 使用transform代替改变布局属性；5. 虚拟化长列表；6. 懒加载非关键内容；7. 使用will-change提示浏览器优化；8. 避免在render中创建新对象。"},{question:"如何处理布局组件的可访问性？",answer:"1. 使用语义化HTML标签（header、main、aside、footer、nav）；2. 提供合适的ARIA属性（role、aria-label、aria-describedby）；3. 确保键盘导航可用，合理的tab顺序；4. 保持足够的颜色对比度（至少4.5:1）；5. 支持屏幕阅读器；6. 提供跳转链接；7. 确保焦点可见性；8. 响应用户的偏好设置（如减少动画）。"},{question:"什么是容器查询？它解决了什么问题？",answer:"容器查询（Container Queries）允许组件根据其容器的尺寸而非视口尺寸来应用样式。它解决了组件在不同容器中需要不同样式的问题，实现了真正的组件级响应式设计。比如一个卡片组件在侧边栏（窄容器）和主内容区（宽容器）中可以有不同的布局。"},{question:"如何设计可复用的布局组件？",answer:"1. 单一职责原则，每个组件只负责一种布局；2. 提供合理的默认值和可选配置；3. 使用组合模式而非继承；4. 支持样式定制（CSS变量、className）；5. 考虑不同内容类型的适配；6. 提供完整的TypeScript类型定义；7. 编写清晰的文档和示例；8. 考虑向后兼容性。"}],keyPoints:["深入理解CSS Grid和Flexbox的原理和适用场景","掌握现代响应式设计技术，包括容器查询","了解布局组件的组合模式和设计原则","重视性能优化，避免布局抖动和重排","关注可访问性，使用语义化标签和ARIA属性","熟悉常见布局模式：圣杯布局、双飞翼布局、Sticky Footer等","理解CSS盒模型和BFC（块级格式化上下文）","掌握CSS变量和主题定制的实现方法"]},bestPractices:{dos:["使用语义化的HTML标签（header、main、aside、footer、nav）","提供合理的默认值和可选配置，降低使用门槛","支持响应式设计，移动端优先考虑","考虑内容溢出的处理，提供滚动或截断方案","使用TypeScript确保类型安全和开发体验","编写清晰的使用文档和代码示例","使用CSS变量支持主题定制","保持组件的单一职责，专注于布局功能","提供多种尺寸规格满足不同场景","合理使用margin和padding，保持视觉一致性","支持服务端渲染（SSR）和静态生成","使用现代CSS特性（Grid、Flexbox、Container Queries）"],donts:["不要过度嵌套布局组件，保持DOM结构简洁","不要忽视可访问性要求，确保键盘导航和屏幕阅读器支持","不要在布局组件中包含业务逻辑或状态管理","不要硬编码尺寸和间距，使用设计系统的标准值","不要忽略性能优化，避免不必要的重新渲染","不要在小屏幕上使用过多列数，影响内容可读性","不要忽略浏览器兼容性，提供合适的降级方案","不要过度依赖JavaScript进行布局计算","不要忽略内容的语义结构和层次关系","不要在布局组件中处理数据获取或副作用"],patterns:["容器-内容模式 - 外层容器负责布局约束，内层负责内容呈现","组合模式 - 通过组合多个简单布局组件构建复杂布局结构","响应式模式 - 根据屏幕尺寸和容器大小调整布局方式","网格系统模式 - 基于12列或其他列数的标准化网格系统","弹性布局模式 - 使用Flexbox实现灵活的一维布局","圣杯布局模式 - 三列布局，中间自适应，两侧固定宽度","双飞翼布局模式 - 类似圣杯布局，但实现方式不同","Sticky Footer模式 - 页脚始终在页面底部的布局","卡片网格模式 - 使用卡片组件构建的响应式网格布局","侧边栏模式 - 固定或可折叠的侧边导航布局"]}};return e.jsx(u,{...t})};export{P as default};
