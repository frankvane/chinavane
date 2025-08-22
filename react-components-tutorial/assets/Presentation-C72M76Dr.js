import{j as e}from"./index-MmCcWZhd.js";import{C as m}from"./ComponentTemplate-DoUPe1QN.js";const i=({user:t,showStatus:r=!1,compact:a=!1,onClick:o})=>{const l=()=>{o==null||o(t)},s=n=>{switch(n){case"online":return"bg-green-500";case"away":return"bg-yellow-500";case"offline":return"bg-gray-500";default:return"bg-gray-500"}};return e.jsx("div",{className:`bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow ${o?"cursor-pointer":""} ${a?"p-3":"p-4"}`,onClick:l,children:e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsxs("div",{className:"relative",children:[t.avatar?e.jsx("img",{src:t.avatar,alt:t.name,className:`rounded-full object-cover ${a?"w-10 h-10":"w-12 h-12"}`}):e.jsx("div",{className:`rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold ${a?"w-10 h-10 text-sm":"w-12 h-12"}`,children:t.name.charAt(0).toUpperCase()}),r&&t.status&&e.jsx("div",{className:`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${s(t.status)}`})]}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("h3",{className:`font-semibold text-gray-900 truncate ${a?"text-sm":"text-base"}`,children:t.name}),e.jsx("p",{className:`text-gray-600 truncate ${a?"text-xs":"text-sm"}`,children:t.email}),t.role&&!a&&e.jsx("span",{className:"inline-block px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full mt-1",children:t.role})]})]})})},d=({products:t,layout:r="grid",onProductClick:a})=>{const o=s=>Array.from({length:5},(n,c)=>e.jsx("span",{className:`text-sm ${c<s?"text-yellow-400":"text-gray-300"}`,children:"★"},c)),l=({product:s})=>e.jsxs("div",{className:`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow ${a?"cursor-pointer":""} ${r==="list"?"flex":""}`,onClick:()=>a==null?void 0:a(s),children:[s.image&&e.jsx("div",{className:r==="list"?"w-24 h-24 flex-shrink-0":"h-48",children:e.jsx("img",{src:s.image,alt:s.name,className:"w-full h-full object-cover"})}),e.jsxs("div",{className:`p-4 ${r==="list"?"flex-1":""}`,children:[e.jsxs("div",{className:"flex justify-between items-start mb-2",children:[e.jsx("h3",{className:"font-semibold text-gray-900 truncate flex-1",children:s.name}),e.jsx("span",{className:`ml-2 px-2 py-1 text-xs rounded-full ${s.inStock?"bg-green-100 text-green-800":"bg-red-100 text-red-800"}`,children:s.inStock?"有库存":"缺货"})]}),s.category&&e.jsx("p",{className:"text-sm text-gray-600 mb-2",children:s.category}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("span",{className:"text-lg font-bold text-blue-600",children:["¥",s.price.toFixed(2)]}),s.rating&&e.jsxs("div",{className:"flex items-center space-x-1",children:[e.jsx("div",{className:"flex",children:o(s.rating)}),e.jsxs("span",{className:"text-sm text-gray-600",children:["(",s.rating,")"]})]})]})]})]});return e.jsx("div",{className:r==="grid"?"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4":"space-y-4",children:t.map(s=>e.jsx(l,{product:s},s.id))})},p=({data:t,colorScheme:r="blue"})=>{const a=s=>({blue:"bg-blue-50 text-blue-600 border-blue-200",green:"bg-green-50 text-green-600 border-green-200",purple:"bg-purple-50 text-purple-600 border-purple-200",orange:"bg-orange-50 text-orange-600 border-orange-200"})[s],o=s=>{switch(s){case"up":return"↗";case"down":return"↘";case"stable":return"→";default:return""}},l=s=>{switch(s){case"up":return"text-green-600";case"down":return"text-red-600";case"stable":return"text-gray-600";default:return"text-gray-600"}};return e.jsx("div",{className:`rounded-lg border p-6 ${a(r)}`,children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-medium text-gray-600 mb-1",children:t.label}),e.jsx("p",{className:"text-2xl font-bold text-gray-900",children:t.value})]}),t.change!==void 0&&e.jsxs("div",{className:`flex items-center space-x-1 ${l(t.trend)}`,children:[e.jsx("span",{className:"text-lg",children:o(t.trend)}),e.jsxs("span",{className:"text-sm font-medium",children:[t.change>0?"+":"",t.change,"%"]})]})]})})},u=({data:t,columns:r,onRowClick:a,loading:o=!1})=>o?e.jsx("div",{className:"bg-white rounded-lg shadow-md p-8",children:e.jsx("div",{className:"animate-pulse space-y-4",children:Array.from({length:5}).map((l,s)=>e.jsx("div",{className:"h-4 bg-gray-200 rounded"},s))})}):e.jsxs("div",{className:"bg-white rounded-lg shadow-md overflow-hidden",children:[e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full",children:[e.jsx("thead",{className:"bg-gray-50",children:e.jsx("tr",{children:r.map((l,s)=>e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",style:{width:l.width},children:l.title},s))})}),e.jsx("tbody",{className:"bg-white divide-y divide-gray-200",children:t.map((l,s)=>e.jsx("tr",{className:`hover:bg-gray-50 ${a?"cursor-pointer":""}`,onClick:()=>a==null?void 0:a(l),children:r.map((n,c)=>e.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-900",children:n.render?n.render(l[n.key],l):l[n.key]},c))},s))})]})}),t.length===0&&e.jsx("div",{className:"text-center py-8 text-gray-500",children:"暂无数据"})]}),g=()=>{const t=[{id:1,name:"张三",email:"zhangsan@example.com",role:"管理员",status:"online"},{id:2,name:"李四",email:"lisi@example.com",role:"用户",status:"away"},{id:3,name:"王五",email:"wangwu@example.com",role:"编辑",status:"offline"}];return e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-4",children:t.map(r=>e.jsx(i,{user:r,showStatus:!0,onClick:a=>console.log("点击用户:",a.name)},r.id))}),e.jsxs("div",{className:"bg-gray-100 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-medium mb-2",children:"紧凑模式"}),e.jsx("div",{className:"grid md:grid-cols-2 gap-2",children:t.slice(0,2).map(r=>e.jsx(i,{user:r,compact:!0},r.id))})]})]})},x=()=>{const t=[{id:1,name:"iPhone 15 Pro",price:7999,category:"智能手机",rating:5,inStock:!0},{id:2,name:"MacBook Air M2",price:8999,category:"笔记本电脑",rating:4,inStock:!0},{id:3,name:"AirPods Pro",price:1899,category:"耳机",rating:4,inStock:!1}];return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3",children:"网格布局"}),e.jsx(d,{products:t,layout:"grid",onProductClick:r=>console.log("点击产品:",r.name)})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3",children:"列表布局"}),e.jsx(d,{products:t.slice(0,2),layout:"list"})]})]})},h=()=>{const t=[{label:"总用户数",value:"12,345",change:12,trend:"up"},{label:"月活跃用户",value:"8,901",change:-3,trend:"down"},{label:"总收入",value:"¥234,567",change:8,trend:"up"},{label:"转化率",value:"3.2%",change:0,trend:"stable"}],r=["blue","green","purple","orange"];return e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",children:t.map((a,o)=>e.jsx(p,{data:a,colorScheme:r[o]},o))})},b=()=>{const t=[{id:1,name:"张三",email:"zhangsan@example.com",role:"管理员",status:"活跃"},{id:2,name:"李四",email:"lisi@example.com",role:"用户",status:"活跃"},{id:3,name:"王五",email:"wangwu@example.com",role:"编辑",status:"禁用"}],r=[{key:"id",title:"ID",width:"80px"},{key:"name",title:"姓名"},{key:"email",title:"邮箱"},{key:"role",title:"角色",render:a=>e.jsx("span",{className:"px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full",children:a})},{key:"status",title:"状态",render:a=>e.jsx("span",{className:`px-2 py-1 text-xs rounded-full ${a==="活跃"?"bg-green-100 text-green-800":"bg-red-100 text-red-800"}`,children:a})}];return e.jsx(u,{data:t,columns:r,onRowClick:a=>console.log("点击行:",a)})},f=()=>{const t={title:"展示组件 (Presentation Components)",description:"展示组件专注于UI呈现，不包含业务逻辑，通过props接收数据并渲染界面。它们是纯函数式组件，易于测试和复用，是构建用户界面的基础单元。",overview:e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800 mb-3",children:"核心概念"}),e.jsx("p",{className:"text-gray-600 mb-4",children:'展示组件（Presentation Components）也称为"哑组件"或"无状态组件"， 它们的主要职责是接收props并渲染UI。这种设计模式将数据逻辑与UI展示分离， 提高了组件的可复用性和可测试性。'})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800 mb-3",children:"主要特征"}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-blue-50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-medium text-blue-800 mb-2",children:"纯函数特性"}),e.jsx("p",{className:"text-sm text-blue-700",children:"相同的props输入总是产生相同的输出，没有副作用"})]}),e.jsxs("div",{className:"bg-green-50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-medium text-green-800 mb-2",children:"无状态管理"}),e.jsx("p",{className:"text-sm text-green-700",children:"不维护内部状态，所有数据通过props传入"})]}),e.jsxs("div",{className:"bg-purple-50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-medium text-purple-800 mb-2",children:"高度复用"}),e.jsx("p",{className:"text-sm text-purple-700",children:"可在不同场景下复用，只需传入不同的props"})]}),e.jsxs("div",{className:"bg-orange-50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-medium text-orange-800 mb-2",children:"易于测试"}),e.jsx("p",{className:"text-sm text-orange-700",children:"测试简单直接，只需验证props与渲染结果的关系"})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800 mb-3",children:"应用场景"}),e.jsxs("ul",{className:"space-y-2 text-gray-600",children:[e.jsxs("li",{className:"flex items-start",children:[e.jsx("span",{className:"text-blue-500 mr-2 mt-1",children:"•"}),e.jsx("span",{children:"数据展示 - 用户卡片、产品列表、统计图表等"})]}),e.jsxs("li",{className:"flex items-start",children:[e.jsx("span",{className:"text-blue-500 mr-2 mt-1",children:"•"}),e.jsx("span",{children:"UI组件库 - 按钮、输入框、模态框等基础组件"})]}),e.jsxs("li",{className:"flex items-start",children:[e.jsx("span",{className:"text-blue-500 mr-2 mt-1",children:"•"}),e.jsx("span",{children:"布局组件 - 网格、容器、卡片等布局元素"})]}),e.jsxs("li",{className:"flex items-start",children:[e.jsx("span",{className:"text-blue-500 mr-2 mt-1",children:"•"}),e.jsx("span",{children:"表单元素 - 表单字段、验证提示、格式化显示"})]})]})]})]}),examples:[{title:"用户卡片组件",description:"展示用户信息的卡片组件，支持不同的显示模式和交互",component:e.jsx(g,{}),observationPoints:["用户卡片支持头像显示和默认头像生成","在线状态指示器根据用户状态显示不同颜色","紧凑模式下组件尺寸和信息显示会相应调整","点击卡片时会触发onClick回调函数"],keyPoints:["使用条件渲染处理可选的头像和状态显示","通过props控制组件的显示模式和交互行为","使用Tailwind CSS实现响应式设计和状态样式","组件保持纯函数特性，所有数据通过props传入"],commonTraps:["在父组件中直接创建用户对象作为props传递","忘记处理头像加载失败的情况","硬编码状态颜色而不是使用动态计算","没有考虑长用户名的截断处理"],solutions:["使用useMemo缓存用户对象，避免不必要的重渲染","添加图片加载错误处理和默认头像逻辑","创建状态颜色映射函数，便于维护和扩展","使用CSS truncate类处理文本溢出"],importantTips:["用户卡片组件展示了展示组件的典型特征：纯函数、props驱动、无业务逻辑","通过showStatus和compact props提供了灵活的配置选项","onClick回调的可选性使组件既可用于展示也可用于交互场景"],codeExample:{title:"用户卡片组件实现",code:`interface UserCardProps {
  user: User;
  showStatus?: boolean;  // ← 重点：可选的状态显示
  compact?: boolean;     // ← 重点：紧凑模式配置
  onClick?: (user: User) => void;  // ← 重点：可选的点击回调
}

const UserCard: React.FC<UserCardProps> = ({ 
  user, 
  showStatus = false,   // ← 重点：默认值设置
  compact = false,
  onClick 
}) => {
  const handleClick = () => {
    onClick?.(user);      // ← 重点：安全的回调调用
  };

  const getStatusColor = (status?: string) => {  // ← 重点：状态颜色映射
    switch (status) {
      case 'online': return 'bg-green-500';
      case 'away': return 'bg-yellow-500';
      case 'offline': return 'bg-gray-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div 
      className={\`bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow \${
        onClick ? 'cursor-pointer' : ''  // ← 重点：条件样式
      } \${compact ? 'p-3' : 'p-4'}\`}   // ← 重点：响应式padding
      onClick={handleClick}
    >
      <div className="flex items-center space-x-3">
        <div className="relative">
          {user.avatar ? (  // ← 重点：条件渲染头像
            <img 
              src={user.avatar} 
              alt={user.name}
              className={\`rounded-full object-cover \${
                compact ? 'w-10 h-10' : 'w-12 h-12'
              }\`}
            />
          ) : (
            <div className={\`rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold \${
              compact ? 'w-10 h-10 text-sm' : 'w-12 h-12'
            }\`}>
              {user.name.charAt(0).toUpperCase()}  // ← 重点：默认头像生成
            </div>
          )}
          {showStatus && user.status && (  // ← 重点：条件渲染状态指示器
            <div className={\`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white \${
              getStatusColor(user.status)
            }\`} />
          )}
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className={\`font-semibold text-gray-900 truncate \${
            compact ? 'text-sm' : 'text-base'  // ← 重点：响应式字体大小
          }\`}>
            {user.name}
          </h3>
          <p className={\`text-gray-600 truncate \${
            compact ? 'text-xs' : 'text-sm'
          }\`}>
            {user.email}
          </p>
          {user.role && !compact && (  // ← 重点：条件渲染角色标签
            <span className="inline-block px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full mt-1">
              {user.role}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};`,language:"typescript",highlights:[3,4,5,10,11,16,20,33,35,39,47,54,58,66,70]}},{title:"产品列表组件",description:"产品展示组件，支持网格和列表两种布局模式",component:e.jsx(x,{}),observationPoints:["支持网格和列表两种布局模式的切换","产品评分使用星级显示，直观易懂","库存状态通过颜色标签清晰标识","点击产品项时会触发onProductClick回调"],keyPoints:["使用layout prop控制组件的布局模式","通过条件渲染实现不同布局下的样式适配","星级评分组件展示了数据可视化的实现","组件内部封装了ProductItem子组件提高代码复用性"],commonTraps:["在map渲染中没有提供稳定的key值","图片加载失败时没有提供备用方案","价格显示没有考虑国际化和货币格式","长产品名称没有适当的截断处理"],solutions:["使用product.id作为key值确保列表更新的正确性","添加图片加载错误处理和占位符","使用toFixed()方法格式化价格显示","应用truncate类处理长文本溢出"],importantTips:["产品列表组件展示了如何通过props控制组件的布局和行为","内部子组件的封装提高了代码的可读性和维护性","条件渲染和动态样式的使用展示了React组件的灵活性"],codeExample:{title:"产品列表组件实现",code:`interface ProductListProps {
  products: Product[];
  layout?: 'grid' | 'list';  // ← 重点：布局模式配置
  onProductClick?: (product: Product) => void;
}

const ProductList: React.FC<ProductListProps> = ({ 
  products, 
  layout = 'grid',  // ← 重点：默认布局模式
  onProductClick 
}) => {
  const renderStars = (rating: number) => {  // ← 重点：星级渲染函数
    return Array.from({ length: 5 }, (_, i) => (
      <span 
        key={i} 
        className={\`text-sm \${
          i < rating ? 'text-yellow-400' : 'text-gray-300'
        }\`}
      >
        ★
      </span>
    ));
  };

  const ProductItem: React.FC<{ product: Product }> = ({ product }) => (  // ← 重点：内部子组件
    <div 
      className={\`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow \${
        onProductClick ? 'cursor-pointer' : ''
      } \${layout === 'list' ? 'flex' : ''}\`}  // ← 重点：条件样式
      onClick={() => onProductClick?.(product)}
    >
      {product.image && (
        <div className={layout === 'list' ? 'w-24 h-24 flex-shrink-0' : 'h-48'}>  // ← 重点：响应式图片容器
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <div className={\`p-4 \${layout === 'list' ? 'flex-1' : ''}\`}>  // ← 重点：布局适配
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-gray-900 truncate flex-1">
            {product.name}
          </h3>
          <span className={\`ml-2 px-2 py-1 text-xs rounded-full \${
            product.inStock   // ← 重点：库存状态样式
              ? 'bg-green-100 text-green-800' 
              : 'bg-red-100 text-red-800'
          }\`}>
            {product.inStock ? '有库存' : '缺货'}
          </span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-blue-600">
            ¥{product.price.toFixed(2)}  // ← 重点：价格格式化
          </span>
          
          {product.rating && (
            <div className="flex items-center space-x-1">
              <div className="flex">
                {renderStars(product.rating)}  // ← 重点：星级评分显示
              </div>
              <span className="text-sm text-gray-600">({product.rating})</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className={layout === 'grid'   // ← 重点：布局模式切换
      ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'
      : 'space-y-4'
    }>
      {products.map(product => (
        <ProductItem key={product.id} product={product} />  // ← 重点：稳定的key值
      ))}
    </div>
  );
};`,language:"typescript",highlights:[3,9,12,25,29,33,41,45,54,66,69,71]}},{title:"统计卡片组件",description:"数据统计展示组件，支持趋势指示和多种配色方案",component:e.jsx(h,{}),observationPoints:["统计数值支持格式化显示，如千分位分隔符","趋势指示器通过颜色和图标直观显示数据变化","支持多种配色方案适应不同的数据类型","卡片布局响应式设计，适配不同屏幕尺寸"],keyPoints:["使用colorScheme prop控制卡片的配色方案","通过trend prop显示数据趋势和变化百分比","数值格式化函数提供了良好的用户体验","图标和颜色的组合使用增强了信息的可读性"],commonTraps:["直接在组件内部进行数值计算和格式化","硬编码颜色值而不是使用主题系统","没有处理极大或极小数值的显示","趋势计算逻辑过于复杂导致性能问题"],solutions:["将数值格式化逻辑提取为独立的工具函数","使用CSS变量或主题配置管理颜色方案","添加数值范围检查和适当的显示格式","使用useMemo缓存复杂的趋势计算结果"],importantTips:["统计卡片组件展示了数据可视化在展示组件中的应用","colorScheme系统提供了灵活的主题配置能力","趋势指示器的实现展示了条件渲染和动态样式的最佳实践"],codeExample:{title:"统计卡片组件实现",code:`interface StatCardProps {
  data: StatData;
  colorScheme?: 'blue' | 'green' | 'purple' | 'orange';  // ← 重点：配色方案
}

const StatCard: React.FC<StatCardProps> = ({ data, colorScheme = 'blue' }) => {
  const getColorClasses = (scheme: string) => {  // ← 重点：配色方案映射
    const colors = {
      blue: 'bg-blue-50 text-blue-600 border-blue-200',
      green: 'bg-green-50 text-green-600 border-green-200',
      purple: 'bg-purple-50 text-purple-600 border-purple-200',
      orange: 'bg-orange-50 text-orange-600 border-orange-200'
    };
    return colors[scheme as keyof typeof colors];
  };

  const getTrendIcon = (trend?: string) => {  // ← 重点：趋势图标映射
    switch (trend) {
      case 'up': return '↗';
      case 'down': return '↘';
      case 'stable': return '→';
      default: return '';
    }
  };

  const getTrendColor = (trend?: string) => {  // ← 重点：趋势颜色映射
    switch (trend) {
      case 'up': return 'text-green-600';
      case 'down': return 'text-red-600';
      case 'stable': return 'text-gray-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className={\`rounded-lg border p-6 \${getColorClasses(colorScheme)}\`}>  // ← 重点：动态样式应用
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600 mb-1">{data.label}</p>
          <p className="text-2xl font-bold text-gray-900">{data.value}</p>  // ← 重点：数值显示
        </div>
        
        {data.change !== undefined && (  // ← 重点：条件渲染趋势信息
          <div className={\`flex items-center space-x-1 \${getTrendColor(data.trend)}\`}>
            <span className="text-lg">{getTrendIcon(data.trend)}</span>  // ← 重点：趋势图标
            <span className="text-sm font-medium">
              {data.change > 0 ? '+' : ''}{data.change}%  // ← 重点：趋势数值格式化
            </span>
          </div>
        )}
      </div>
    </div>
  );
};`,language:"typescript",highlights:[3,7,17,26,35,39,42,44,45]}},{title:"数据表格组件",description:"通用数据表格组件，支持自定义列渲染和行点击事件",component:e.jsx(b,{}),observationPoints:["表格支持自定义列定义和渲染函数","行点击事件提供了良好的交互体验","表头和数据行的样式保持一致性","空数据状态有友好的提示信息","加载状态使用骨架屏提供良好的用户体验"],keyPoints:["使用columns配置定义表格结构和渲染逻辑","通过render函数支持自定义单元格内容","onRowClick回调提供行级交互能力","组件内部处理了数据为空和加载中的边界情况","泛型设计使组件具有良好的类型安全性"],commonTraps:["在render函数中直接创建复杂对象或组件","没有为表格行提供稳定的key值","表格列宽没有合理的响应式处理","大量数据时没有考虑性能优化","没有处理表格横向滚动的问题"],solutions:["使用useCallback缓存render函数，避免不必要的重渲染","确保每行数据有唯一标识符作为key","使用CSS Grid或Flexbox实现响应式列宽","考虑使用虚拟滚动处理大数据集","添加overflow-x-auto处理表格横向滚动"],importantTips:["数据表格组件展示了配置驱动的组件设计模式","columns配置的灵活性使组件具有很强的复用性","自定义渲染函数的支持展示了React组件的扩展能力","泛型的使用提供了类型安全和智能提示"],codeExample:{title:"数据表格组件实现",code:`interface TableColumn<T> {
  key: keyof T;
  title: string;
  render?: (value: any, record: T) => React.ReactNode;  // ← 重点：自定义渲染函数
  width?: string;
}

interface DataTableProps<T> {
  data: T[];
  columns: TableColumn<T>[];  // ← 重点：列配置数组
  onRowClick?: (record: T) => void;  // ← 重点：行点击回调
  loading?: boolean;
}

const DataTable = <T extends Record<string, any>>({  // ← 重点：泛型约束
  data, 
  columns, 
  onRowClick,
  loading = false 
}: DataTableProps<T>) => {
  if (loading) {  // ← 重点：加载状态处理
    return (
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="animate-pulse space-y-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="h-4 bg-gray-200 rounded" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="overflow-x-auto">  // ← 重点：横向滚动处理
        <table className="w-full">
          <thead className="bg-gray-50">  // ← 重点：表头样式
            <tr>
              {columns.map((column, index) => (
                <th 
                  key={index}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  style={{ width: column.width }}  // ← 重点：自定义列宽
                >
                  {column.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((record, rowIndex) => (
              <tr 
                key={rowIndex}
                className={\`hover:bg-gray-50 \${
                  onRowClick ? 'cursor-pointer' : ''
                }\`}  // ← 重点：条件样式
                onClick={() => onRowClick?.(record)}
              >
                {columns.map((column, colIndex) => (
                  <td key={colIndex} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {column.render   // ← 重点：条件渲染单元格内容
                      ? column.render(record[column.key], record)
                      : record[column.key]
                    }
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {data.length === 0 && (  // ← 重点：空数据状态
        <div className="text-center py-8 text-gray-500">
          暂无数据
        </div>
      )}
    </div>
  );
};`,language:"typescript",highlights:[4,10,11,15,21,33,35,40,49,51,54,56,64]}}],codeExamples:[{title:"用户卡片组件实现",code:`interface UserCardProps {
  user: User;
  showStatus?: boolean;  // ← 重点：可选的状态显示
  compact?: boolean;     // ← 重点：紧凑模式配置
  onClick?: (user: User) => void;  // ← 重点：可选的点击回调
}

const UserCard: React.FC<UserCardProps> = ({ 
  user, 
  showStatus = false,   // ← 重点：默认值设置
  compact = false,
  onClick 
}) => {
  const handleClick = () => {
    onClick?.(user);      // ← 重点：安全的回调调用
  };

  const getStatusColor = (status?: string) => {  // ← 重点：状态颜色映射
    switch (status) {
      case 'online': return 'bg-green-500';
      case 'away': return 'bg-yellow-500';
      case 'offline': return 'bg-gray-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div 
      className={\`bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow \${
        onClick ? 'cursor-pointer' : ''  // ← 重点：条件样式
      } \${compact ? 'p-3' : 'p-4'}\`}   // ← 重点：响应式padding
      onClick={handleClick}
    >
      <div className="flex items-center space-x-3">
        <div className="relative">
          {user.avatar ? (  // ← 重点：条件渲染头像
            <img 
              src={user.avatar} 
              alt={user.name}
              className={\`rounded-full object-cover \${
                compact ? 'w-10 h-10' : 'w-12 h-12'
              }\`}
            />
          ) : (
            <div className={\`rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold \${
              compact ? 'w-10 h-10 text-sm' : 'w-12 h-12'
            }\`}>
              {user.name.charAt(0).toUpperCase()}  // ← 重点：默认头像生成
            </div>
          )}
          {showStatus && user.status && (  // ← 重点：条件渲染状态指示器
            <div className={\`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white \${
              getStatusColor(user.status)
            }\`} />
          )}
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className={\`font-semibold text-gray-900 truncate \${
            compact ? 'text-sm' : 'text-base'  // ← 重点：响应式字体大小
          }\`}>
            {user.name}
          </h3>
          <p className={\`text-gray-600 truncate \${
            compact ? 'text-xs' : 'text-sm'
          }\`}>
            {user.email}
          </p>
          {user.role && !compact && (  // ← 重点：条件渲染角色标签
            <span className="inline-block px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full mt-1">
              {user.role}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};`,language:"typescript",highlights:[3,4,5,10,11,16,20,33,35,39,47,54,58,66,70],observationPoints:["接口定义清晰，所有可选属性都有明确的类型注解","使用默认参数提供合理的默认行为","条件渲染处理了头像、状态指示器和角色标签的显示","响应式设计通过compact属性控制组件尺寸"],keyPoints:["可选链操作符(?.)确保回调函数的安全调用","状态颜色映射函数提供了可维护的样式管理","模板字符串和条件表达式实现动态样式","truncate类处理长文本的溢出问题"],commonTraps:["忘记处理onClick为undefined的情况","硬编码样式类名而不是使用动态计算","没有为图片添加alt属性影响可访问性","状态颜色映射没有默认值处理"],solutions:["使用可选链操作符安全调用回调函数","创建样式映射函数统一管理动态样式","为所有图片元素添加有意义的alt属性","在switch语句中添加default分支处理未知状态"],importantTips:["展示组件应该保持纯函数特性，所有数据通过props传入","使用TypeScript接口定义清晰的组件API","条件渲染和动态样式是React组件灵活性的体现"]},{title:"数据表格组件实现",code:`interface DataTableProps<T> {
  data: T[];
  columns: TableColumn<T>[];  // ← 重点：列配置数组
  onRowClick?: (record: T) => void;  // ← 重点：行点击回调
  loading?: boolean;
}

const DataTable = <T extends Record<string, any>>({  // ← 重点：泛型约束
  data, 
  columns, 
  onRowClick,
  loading = false  // ← 重点：默认加载状态
}: DataTableProps<T>) => {
  if (loading) {  // ← 重点：加载状态处理
    return (
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="animate-pulse space-y-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="h-4 bg-gray-200 rounded" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="overflow-x-auto">  // ← 重点：横向滚动处理
        <table className="w-full">
          <thead className="bg-gray-50">  // ← 重点：表头样式
            <tr>
              {columns.map((column, index) => (
                <th 
                  key={index}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  style={{ width: column.width }}  // ← 重点：自定义列宽
                >
                  {column.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((record, rowIndex) => (
              <tr 
                key={rowIndex}
                className={\`hover:bg-gray-50 \${
                  onRowClick ? 'cursor-pointer' : ''  // ← 重点：条件样式
                }\`}
                onClick={() => onRowClick?.(record)}  // ← 重点：安全的回调调用
              >
                {columns.map((column, colIndex) => (
                  <td key={colIndex} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {column.render   // ← 重点：条件渲染单元格内容
                      ? column.render(record[column.key], record)
                      : record[column.key]
                    }
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};`,language:"typescript",highlights:[5,6,10,14,16,29,31,37,48,50,53],observationPoints:["泛型设计使组件具有良好的类型安全性","加载状态使用骨架屏提供良好的用户体验","表格支持横向滚动处理长内容","列配置支持自定义渲染函数和列宽设置"],keyPoints:["泛型约束确保数据类型的一致性和类型安全","条件渲染处理加载状态和自定义单元格内容","可选链操作符确保回调函数的安全调用","CSS类名组合实现响应式和交互式设计"],commonTraps:["没有为表格行提供稳定的key值","忘记处理数据为空的情况","自定义渲染函数中创建复杂对象导致性能问题","表格在小屏幕上没有适当的响应式处理"],solutions:["使用数据的唯一标识符作为key，如record.id","添加空数据状态的友好提示信息","使用useCallback缓存渲染函数避免重复创建","使用overflow-x-auto实现横向滚动"],importantTips:["数据表格组件展示了配置驱动的组件设计模式","泛型的使用提供了类型安全和智能提示","自定义渲染函数的支持展示了React组件的扩展能力"]},{title:"统计卡片组件实现",code:`interface StatCardProps {
  data: StatData;
  colorScheme?: 'blue' | 'green' | 'purple' | 'orange';  // ← 重点：配色方案
}

const StatCard: React.FC<StatCardProps> = ({ data, colorScheme = 'blue' }) => {
  const getColorClasses = (scheme: string) => {  // ← 重点：配色方案映射
    const colors = {
      blue: 'bg-blue-50 text-blue-600 border-blue-200',
      green: 'bg-green-50 text-green-600 border-green-200',
      purple: 'bg-purple-50 text-purple-600 border-purple-200',
      orange: 'bg-orange-50 text-orange-600 border-orange-200'
    };
    return colors[scheme as keyof typeof colors];
  };

  const getTrendIcon = (trend?: string) => {  // ← 重点：趋势图标映射
    switch (trend) {
      case 'up': return '↗';
      case 'down': return '↘';
      case 'stable': return '→';
      default: return '';
    }
  };

  const getTrendColor = (trend?: string) => {  // ← 重点：趋势颜色映射
    switch (trend) {
      case 'up': return 'text-green-600';
      case 'down': return 'text-red-600';
      case 'stable': return 'text-gray-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className={\`rounded-lg border p-6 \${getColorClasses(colorScheme)}\`}>  // ← 重点：动态样式应用
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600 mb-1">{data.label}</p>
          <p className="text-2xl font-bold text-gray-900">{data.value}</p>  // ← 重点：数值显示
        </div>
        
        {data.change !== undefined && (  // ← 重点：条件渲染趋势信息
          <div className={\`flex items-center space-x-1 \${getTrendColor(data.trend)}\`}>
            <span className="text-lg">{getTrendIcon(data.trend)}</span>  // ← 重点：趋势图标
            <span className="text-sm font-medium">
              {data.change > 0 ? '+' : ''}{data.change}%  // ← 重点：趋势数值格式化
            </span>
          </div>
        )}
      </div>
    </div>
  );
};`,language:"typescript",highlights:[5,8,18,27,37,41,44,46,47],observationPoints:["配色方案通过枚举类型提供类型安全的选项","颜色映射函数统一管理不同主题的样式","趋势指示器通过图标和颜色直观显示数据变化","条件渲染确保只在有趋势数据时显示相关信息"],keyPoints:["使用对象映射管理复杂的样式配置","类型断言确保对象键的类型安全访问","分离的函数职责使代码更易维护和测试","模板字符串实现动态样式的灵活组合"],commonTraps:["硬编码颜色值而不是使用主题系统","没有处理未知配色方案的情况","趋势计算逻辑过于复杂导致性能问题","没有考虑数值格式化的国际化需求"],solutions:["使用CSS变量或主题配置管理颜色方案","在映射函数中添加默认值处理","使用useMemo缓存复杂的计算结果","提供formatter prop支持自定义数值格式化"],importantTips:["统计卡片组件展示了数据可视化在展示组件中的应用","配色方案系统提供了灵活的主题配置能力","趋势指示器的实现展示了条件渲染和动态样式的最佳实践"]},{title:"使用示例",code:`// 用户卡片使用
<UserCard 
  user={user}   // ← 重点：用户数据对象
  showStatus    // ← 重点：显示在线状态
  compact       // ← 重点：紧凑模式
  onClick={(user) => handleUserClick(user)}  // ← 重点：点击回调
/>

// 产品列表使用
<ProductList 
  products={products}  // ← 重点：产品数据数组
  layout="grid"        // ← 重点：网格布局模式
  onProductClick={(product) => handleProductClick(product)}  // ← 重点：产品点击处理
/>

// 统计卡片使用
<StatCard 
  data={{  // ← 重点：统计数据对象
    label: '总用户数',
    value: '12,345',
    change: 12,      // ← 重点：变化百分比
    trend: 'up'      // ← 重点：趋势方向
  }} 
  colorScheme="blue"  // ← 重点：配色方案
/>

// 数据表格使用
<DataTable 
  data={users}     // ← 重点：表格数据
  columns={columns}  // ← 重点：列配置
  onRowClick={(record) => handleRowClick(record)}  // ← 重点：行点击处理
  loading={isLoading}  // ← 重点：加载状态
/>`,language:"typescript",highlights:[3,4,5,6,11,12,13,18,21,22,24,28,29,30,31],observationPoints:["每个组件都有清晰的props接口和使用方式","回调函数的命名遵循React事件处理的约定","数据结构设计合理，便于理解和使用","组件配置选项提供了灵活的定制能力"],keyPoints:["props传递遵循React的单向数据流原则","回调函数使用箭头函数确保正确的this绑定","布尔属性可以简写，如showStatus等价于showStatus={true}","对象字面量直接传递给data prop展示了数据结构"],commonTraps:["在JSX中直接创建对象或函数导致不必要的重渲染","忘记处理异步数据加载时的loading状态","回调函数没有正确处理参数类型","硬编码配置值而不是使用变量或常量"],solutions:["使用useMemo或useState缓存对象和函数","合理使用loading状态提供用户反馈","使用TypeScript确保回调函数参数类型正确","将配置选项提取为常量或配置对象"],importantTips:["展示组件的使用应该简洁明了，避免复杂的逻辑","合理的props设计使组件既灵活又易用","回调函数的命名应该清晰表达其用途和时机"]}],tutorial:{concepts:["展示组件只负责UI渲染，不包含业务逻辑","通过props接收所有需要的数据和回调函数","组件应该是纯函数，相同输入产生相同输出","使用TypeScript定义清晰的props接口","支持可选的样式和行为配置"],steps:["分析组件需要展示的数据结构","定义props接口，包括数据和回调函数","实现组件的渲染逻辑","添加条件渲染和样式变化","处理用户交互事件","优化组件性能和可访问性","编写组件文档和使用示例"],tips:["保持组件的单一职责原则","使用默认参数提供合理的默认值","通过className prop支持自定义样式","使用条件渲染处理可选内容","考虑组件的响应式设计"]},interview:{questions:[{question:"展示组件和容器组件的区别是什么？",answer:"展示组件专注于UI渲染，通过props接收数据，不包含业务逻辑；容器组件负责数据获取和状态管理，将数据传递给展示组件。这种分离提高了组件的可复用性和可测试性。"},{question:"如何设计一个好的展示组件？",answer:"好的展示组件应该：1）有清晰的props接口；2）是纯函数，无副作用；3）支持必要的配置选项；4）有良好的默认值；5）考虑可访问性；6）性能优化（如使用React.memo）。"},{question:"展示组件如何处理用户交互？",answer:"展示组件通过props接收回调函数来处理用户交互，如onClick、onChange等。组件本身不处理业务逻辑，只是将事件和相关数据传递给父组件。"},{question:"如何测试展示组件？",answer:"展示组件的测试相对简单：1）测试不同props下的渲染结果；2）测试用户交互是否正确触发回调；3）测试边界情况和错误状态；4）使用快照测试确保UI稳定性。"}],keyPoints:["理解展示组件的职责和特点","掌握props接口的设计原则","了解纯函数组件的概念","熟悉条件渲染和样式处理","掌握组件测试的方法"]},bestPractices:{dos:["保持组件的纯函数特性","使用TypeScript定义清晰的接口","提供合理的默认值","支持自定义样式和配置","考虑组件的可访问性","使用React.memo优化性能"],donts:["不要在展示组件中包含业务逻辑","不要直接修改props","不要在组件内部维护状态（除UI状态外）","不要硬编码样式和文本","不要忽略边界情况的处理"],patterns:["纯函数模式 - 相同输入产生相同输出","配置化模式 - 通过props控制组件行为","组合模式 - 支持children和插槽","渲染属性模式 - 支持自定义渲染逻辑","条件渲染模式 - 根据props决定渲染内容"]}};return e.jsx(m,{...t})};export{f as default};
