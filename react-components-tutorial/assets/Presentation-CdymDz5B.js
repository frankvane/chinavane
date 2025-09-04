import{j as e}from"./index-CbVlrJMN.js";import{C as x}from"./ComponentTemplate-BnvJNrWP.js";const h=({data:t,columns:r,onRowClick:s,loading:l=!1})=>l?e.jsx("div",{className:"bg-white rounded-lg shadow-md p-8",children:e.jsx("div",{className:"animate-pulse space-y-4",children:Array.from({length:5}).map((n,a)=>e.jsx("div",{className:"h-4 bg-gray-200 rounded"},a))})}):e.jsxs("div",{className:"bg-white rounded-lg shadow-md overflow-hidden",children:[e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full",children:[e.jsx("thead",{className:"bg-gray-50",children:e.jsx("tr",{children:r.map((n,a)=>e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",style:{width:n.width},children:n.title},a))})}),e.jsx("tbody",{className:"bg-white divide-y divide-gray-200",children:t.map((n,a)=>e.jsx("tr",{className:`hover:bg-gray-50 ${s?"cursor-pointer":""}`,onClick:()=>s==null?void 0:s(n),children:r.map((o,i)=>e.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-900",children:o.render?o.render(n[o.key],n):n[o.key]},i))},a))})]})}),t.length===0&&e.jsx("div",{className:"text-center py-8 text-gray-500",children:"暂无数据"})]}),b=()=>{const t=[{id:1,name:"张三",email:"zhangsan@example.com",role:"管理员",status:"活跃"},{id:2,name:"李四",email:"lisi@example.com",role:"用户",status:"活跃"},{id:3,name:"王五",email:"wangwu@example.com",role:"编辑",status:"禁用"}],r=[{key:"id",title:"ID",width:"80px"},{key:"name",title:"姓名"},{key:"email",title:"邮箱"},{key:"role",title:"角色",render:s=>e.jsx("span",{className:"px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full",children:s})},{key:"status",title:"状态",render:s=>e.jsx("span",{className:`px-2 py-1 text-xs rounded-full ${s==="活跃"?"bg-green-100 text-green-800":"bg-red-100 text-red-800"}`,children:s})}];return e.jsx(h,{data:t,columns:r,onRowClick:s=>console.log("点击行:",s)})},c=`import React from 'react';

// 表格列定义
export interface TableColumn<T> {
  key: keyof T;
  title: string;
  render?: (value: any, record: T) => React.ReactNode;
  width?: string;
}

// 数据表格组件属性
export interface DataTableProps<T> {
  data: T[];
  columns: TableColumn<T>[];
  onRowClick?: (record: T) => void;
  loading?: boolean;
}

// 数据表格组件
export const DataTable = <T extends Record<string, any>>({ 
  data, 
  columns, 
  onRowClick,
  loading = false 
}: DataTableProps<T>) => {
  if (loading) {
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
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              {columns.map((column, index) => (
                <th 
                  key={index}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  style={{ width: column.width }}
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
                }\`}
                onClick={() => onRowClick?.(record)}
              >
                {columns.map((column, colIndex) => (
                  <td key={colIndex} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {column.render 
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
      
      {data.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          暂无数据
        </div>
      )}
    </div>
  );
};

// 数据表格示例组件
export const DataTableExample: React.FC = () => {
  const sampleData = [
    { id: 1, name: '张三', email: 'zhangsan@example.com', role: '管理员', status: '活跃' },
    { id: 2, name: '李四', email: 'lisi@example.com', role: '用户', status: '活跃' },
    { id: 3, name: '王五', email: 'wangwu@example.com', role: '编辑', status: '禁用' }
  ];

  const columns: TableColumn<typeof sampleData[0]>[] = [
    {
      key: 'id',
      title: 'ID',
      width: '80px'
    },
    {
      key: 'name',
      title: '姓名'
    },
    {
      key: 'email',
      title: '邮箱'
    },
    {
      key: 'role',
      title: '角色',
      render: (value) => (
        <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">
          {value}
        </span>
      )
    },
    {
      key: 'status',
      title: '状态',
      render: (value) => (
        <span className={\`px-2 py-1 text-xs rounded-full \${
          value === '活跃' 
            ? 'bg-green-100 text-green-800' 
            : 'bg-red-100 text-red-800'
        }\`}>
          {value}
        </span>
      )
    }
  ];

  return (
    <DataTable 
      data={sampleData} 
      columns={columns}
      onRowClick={(record) => console.log('点击行:', record)}
    />
  );
};

export default DataTable;`,d=`import React from 'react';

// 产品数据接口
export interface Product {
  id: number;
  name: string;
  price: number;
  image?: string;
  category?: string;
  rating?: number;
  inStock?: boolean;
}

// 产品列表组件属性
export interface ProductListProps {
  products: Product[];
  layout?: 'grid' | 'list';
  onProductClick?: (product: Product) => void;
}

// 产品列表组件
export const ProductList: React.FC<ProductListProps> = ({ 
  products, 
  layout = 'grid',
  onProductClick 
}) => {
  const renderStars = (rating: number) => {
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

  const ProductItem: React.FC<{ product: Product }> = ({ product }) => (
    <div 
      className={\`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow \${
        onProductClick ? 'cursor-pointer' : ''
      } \${layout === 'list' ? 'flex' : ''}\`}
      onClick={() => onProductClick?.(product)}
    >
      {product.image && (
        <div className={layout === 'list' ? 'w-24 h-24 flex-shrink-0' : 'h-48'}>
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <div className={\`p-4 \${layout === 'list' ? 'flex-1' : ''}\`}>
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-gray-900 truncate flex-1">
            {product.name}
          </h3>
          <span className={\`ml-2 px-2 py-1 text-xs rounded-full \${
            product.inStock 
              ? 'bg-green-100 text-green-800' 
              : 'bg-red-100 text-red-800'
          }\`}>
            {product.inStock ? '有库存' : '缺货'}
          </span>
        </div>
        
        {product.category && (
          <p className="text-sm text-gray-600 mb-2">{product.category}</p>
        )}
        
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-blue-600">
            ¥{product.price.toFixed(2)}
          </span>
          
          {product.rating && (
            <div className="flex items-center space-x-1">
              <div className="flex">
                {renderStars(product.rating)}
              </div>
              <span className="text-sm text-gray-600">({product.rating})</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className={layout === 'grid' 
      ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'
      : 'space-y-4'
    }>
      {products.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

// 产品列表示例组件
export const ProductListExample: React.FC = () => {
  const sampleProducts: Product[] = [
    {
      id: 1,
      name: 'iPhone 15 Pro',
      price: 7999,
      category: '智能手机',
      rating: 5,
      inStock: true
    },
    {
      id: 2,
      name: 'MacBook Air M2',
      price: 8999,
      category: '笔记本电脑',
      rating: 4,
      inStock: true
    },
    {
      id: 3,
      name: 'AirPods Pro',
      price: 1899,
      category: '耳机',
      rating: 4,
      inStock: false
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h4 className="font-medium mb-3">网格布局</h4>
        <ProductList 
          products={sampleProducts} 
          layout="grid"
          onProductClick={(product) => console.log('点击产品:', product.name)}
        />
      </div>
      
      <div>
        <h4 className="font-medium mb-3">列表布局</h4>
        <ProductList 
          products={sampleProducts.slice(0, 2)} 
          layout="list"
        />
      </div>
    </div>
  );
};

export default ProductList;`,m=({products:t,layout:r="grid",onProductClick:s})=>{const l=a=>Array.from({length:5},(o,i)=>e.jsx("span",{className:`text-sm ${i<a?"text-yellow-400":"text-gray-300"}`,children:"★"},i)),n=({product:a})=>e.jsxs("div",{className:`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow ${s?"cursor-pointer":""} ${r==="list"?"flex":""}`,onClick:()=>s==null?void 0:s(a),children:[a.image&&e.jsx("div",{className:r==="list"?"w-24 h-24 flex-shrink-0":"h-48",children:e.jsx("img",{src:a.image,alt:a.name,className:"w-full h-full object-cover"})}),e.jsxs("div",{className:`p-4 ${r==="list"?"flex-1":""}`,children:[e.jsxs("div",{className:"flex justify-between items-start mb-2",children:[e.jsx("h3",{className:"font-semibold text-gray-900 truncate flex-1",children:a.name}),e.jsx("span",{className:`ml-2 px-2 py-1 text-xs rounded-full ${a.inStock?"bg-green-100 text-green-800":"bg-red-100 text-red-800"}`,children:a.inStock?"有库存":"缺货"})]}),a.category&&e.jsx("p",{className:"text-sm text-gray-600 mb-2",children:a.category}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("span",{className:"text-lg font-bold text-blue-600",children:["¥",a.price.toFixed(2)]}),a.rating&&e.jsxs("div",{className:"flex items-center space-x-1",children:[e.jsx("div",{className:"flex",children:l(a.rating)}),e.jsxs("span",{className:"text-sm text-gray-600",children:["(",a.rating,")"]})]})]})]})]});return e.jsx("div",{className:r==="grid"?"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4":"space-y-4",children:t.map(a=>e.jsx(n,{product:a},a.id))})},v=()=>{const t=[{id:1,name:"iPhone 15 Pro",price:7999,category:"智能手机",rating:5,inStock:!0},{id:2,name:"MacBook Air M2",price:8999,category:"笔记本电脑",rating:4,inStock:!0},{id:3,name:"AirPods Pro",price:1899,category:"耳机",rating:4,inStock:!1}];return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3",children:"网格布局"}),e.jsx(m,{products:t,layout:"grid",onProductClick:r=>console.log("点击产品:",r.name)})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3",children:"列表布局"}),e.jsx(m,{products:t.slice(0,2),layout:"list"})]})]})},y=({data:t,colorScheme:r="blue"})=>{const s=a=>({blue:"bg-blue-50 text-blue-600 border-blue-200",green:"bg-green-50 text-green-600 border-green-200",purple:"bg-purple-50 text-purple-600 border-purple-200",orange:"bg-orange-50 text-orange-600 border-orange-200"})[a],l=a=>{switch(a){case"up":return"↗";case"down":return"↘";case"stable":return"→";default:return""}},n=a=>{switch(a){case"up":return"text-green-600";case"down":return"text-red-600";case"stable":return"text-gray-600";default:return"text-gray-600"}};return e.jsx("div",{className:`rounded-lg border p-6 ${s(r)}`,children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-medium text-gray-600 mb-1",children:t.label}),e.jsx("p",{className:"text-2xl font-bold text-gray-900",children:t.value})]}),t.change!==void 0&&e.jsxs("div",{className:`flex items-center space-x-1 ${n(t.trend)}`,children:[e.jsx("span",{className:"text-lg",children:l(t.trend)}),e.jsxs("span",{className:"text-sm font-medium",children:[t.change>0?"+":"",t.change,"%"]})]})]})})},f=()=>{const t=[{label:"总用户数",value:"12,345",change:12,trend:"up"},{label:"月活跃用户",value:"8,901",change:-3,trend:"down"},{label:"总收入",value:"¥234,567",change:8,trend:"up"},{label:"转化率",value:"3.2%",change:0,trend:"stable"}],r=["blue","green","purple","orange"];return e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",children:t.map((s,l)=>e.jsx(y,{data:s,colorScheme:r[l]},l))})},p=`import React from 'react';

// 统计数据接口
export interface StatData {
  label: string;
  value: string | number;
  change?: number;
  trend?: 'up' | 'down' | 'stable';
}

// 统计卡片组件属性
export interface StatCardProps {
  data: StatData;
  colorScheme?: 'blue' | 'green' | 'purple' | 'orange';
}

// 统计卡片组件
export const StatCard: React.FC<StatCardProps> = ({ data, colorScheme = 'blue' }) => {
  const getColorClasses = (scheme: string) => {
    const colors = {
      blue: 'bg-blue-50 text-blue-600 border-blue-200',
      green: 'bg-green-50 text-green-600 border-green-200',
      purple: 'bg-purple-50 text-purple-600 border-purple-200',
      orange: 'bg-orange-50 text-orange-600 border-orange-200'
    };
    return colors[scheme as keyof typeof colors];
  };

  const getTrendIcon = (trend?: string) => {
    switch (trend) {
      case 'up': return '↗';
      case 'down': return '↘';
      case 'stable': return '→';
      default: return '';
    }
  };

  const getTrendColor = (trend?: string) => {
    switch (trend) {
      case 'up': return 'text-green-600';
      case 'down': return 'text-red-600';
      case 'stable': return 'text-gray-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className={\`rounded-lg border p-6 \${getColorClasses(colorScheme)}\`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600 mb-1">{data.label}</p>
          <p className="text-2xl font-bold text-gray-900">{data.value}</p>
        </div>
        
        {data.change !== undefined && (
          <div className={\`flex items-center space-x-1 \${getTrendColor(data.trend)}\`}>
            <span className="text-lg">{getTrendIcon(data.trend)}</span>
            <span className="text-sm font-medium">
              {data.change > 0 ? '+' : ''}{data.change}%
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

// 统计卡片示例组件
export const StatCardExample: React.FC = () => {
  const sampleStats: StatData[] = [
    {
      label: '总用户数',
      value: '12,345',
      change: 12,
      trend: 'up'
    },
    {
      label: '月活跃用户',
      value: '8,901',
      change: -3,
      trend: 'down'
    },
    {
      label: '总收入',
      value: '¥234,567',
      change: 8,
      trend: 'up'
    },
    {
      label: '转化率',
      value: '3.2%',
      change: 0,
      trend: 'stable'
    }
  ];

  const colorSchemes: Array<'blue' | 'green' | 'purple' | 'orange'> = ['blue', 'green', 'purple', 'orange'];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {sampleStats.map((stat, index) => (
        <StatCard 
          key={index} 
          data={stat} 
          colorScheme={colorSchemes[index]}
        />
      ))}
    </div>
  );
};

export default StatCard;`,u=({user:t,showStatus:r=!1,compact:s=!1,onClick:l})=>{const n=()=>{l==null||l(t)},a=o=>{switch(o){case"online":return"bg-green-500";case"away":return"bg-yellow-500";case"offline":return"bg-gray-500";default:return"bg-gray-500"}};return e.jsx("div",{className:`bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow ${l?"cursor-pointer":""} ${s?"p-3":"p-4"}`,onClick:n,children:e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsxs("div",{className:"relative",children:[t.avatar?e.jsx("img",{src:t.avatar,alt:t.name,className:`rounded-full object-cover ${s?"w-10 h-10":"w-12 h-12"}`}):e.jsx("div",{className:`rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold ${s?"w-10 h-10 text-sm":"w-12 h-12"}`,children:t.name.charAt(0).toUpperCase()}),r&&t.status&&e.jsx("div",{className:`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${a(t.status)}`})]}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("h3",{className:`font-semibold text-gray-900 truncate ${s?"text-sm":"text-base"}`,children:t.name}),e.jsx("p",{className:`text-gray-600 truncate ${s?"text-xs":"text-sm"}`,children:t.email}),t.role&&!s&&e.jsx("span",{className:"inline-block px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full mt-1",children:t.role})]})]})})},w=()=>{const t=[{id:1,name:"张三",email:"zhangsan@example.com",role:"管理员",status:"online"},{id:2,name:"李四",email:"lisi@example.com",role:"用户",status:"away"},{id:3,name:"王五",email:"wangwu@example.com",role:"编辑",status:"offline"}];return e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-4",children:t.map(r=>e.jsx(u,{user:r,showStatus:!0,onClick:s=>console.log("点击用户:",s.name)},r.id))}),e.jsxs("div",{className:"bg-gray-100 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-medium mb-2",children:"紧凑模式"}),e.jsx("div",{className:"grid md:grid-cols-2 gap-2",children:t.slice(0,2).map(r=>e.jsx(u,{user:r,compact:!0},r.id))})]})]})},g=`import React from 'react';

// 用户数据接口
export interface User {
  id: number;
  name: string;
  email: string;
  avatar?: string;
  role?: string;
  status?: 'online' | 'offline' | 'away';
}

// 用户卡片组件属性
export interface UserCardProps {
  user: User;
  showStatus?: boolean;
  compact?: boolean;
  onClick?: (user: User) => void;
}

// 用户卡片组件
export const UserCard: React.FC<UserCardProps> = ({ 
  user, 
  showStatus = false, 
  compact = false,
  onClick 
}) => {
  const handleClick = () => {
    onClick?.(user);
  };

  const getStatusColor = (status?: string) => {
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
        onClick ? 'cursor-pointer' : ''
      } \${compact ? 'p-3' : 'p-4'}\`}
      onClick={handleClick}
    >
      <div className="flex items-center space-x-3">
        <div className="relative">
          {user.avatar ? (
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
              {user.name.charAt(0).toUpperCase()}
            </div>
          )}
          {showStatus && user.status && (
            <div className={\`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white \${
              getStatusColor(user.status)
            }\`} />
          )}
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className={\`font-semibold text-gray-900 truncate \${
            compact ? 'text-sm' : 'text-base'
          }\`}>
            {user.name}
          </h3>
          <p className={\`text-gray-600 truncate \${
            compact ? 'text-xs' : 'text-sm'
          }\`}>
            {user.email}
          </p>
          {user.role && !compact && (
            <span className="inline-block px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full mt-1">
              {user.role}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

// 用户卡片示例组件
export const UserCardExample: React.FC = () => {
  const sampleUsers: User[] = [
    {
      id: 1,
      name: '张三',
      email: 'zhangsan@example.com',
      role: '管理员',
      status: 'online'
    },
    {
      id: 2,
      name: '李四',
      email: 'lisi@example.com',
      role: '用户',
      status: 'away'
    },
    {
      id: 3,
      name: '王五',
      email: 'wangwu@example.com',
      role: '编辑',
      status: 'offline'
    }
  ];

  return (
    <div className="space-y-4">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sampleUsers.map(user => (
          <UserCard 
            key={user.id} 
            user={user} 
            showStatus 
            onClick={(user) => console.log('点击用户:', user.name)}
          />
        ))}
      </div>
      
      <div className="bg-gray-100 p-4 rounded-lg">
        <h4 className="font-medium mb-2">紧凑模式</h4>
        <div className="grid md:grid-cols-2 gap-2">
          {sampleUsers.slice(0, 2).map(user => (
            <UserCard key={user.id} user={user} compact />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserCard;`,C=()=>e.jsx(x,{title:"展示组件 (Presentation Components)",description:"展示组件专注于UI呈现，不包含业务逻辑，通过props接收数据并渲染界面。它们是纯函数式组件，易于测试和复用，是构建用户界面的基础单元。",overview:[{title:"核心概念",items:["纯函数特性：相同的props输入总是产生相同的输出，没有副作用","无状态管理：不维护内部状态，所有数据通过props传入","职责单一：只负责UI渲染，不包含业务逻辑","高度复用：可在不同场景下复用，只需传入不同的props"]},{title:"主要优势",items:["易于测试：测试简单直接，只需验证props与渲染结果的关系","高可复用性：可在多个场景下使用，提高开发效率","清晰的接口：通过TypeScript接口定义清晰的props结构","性能优化：可以使用React.memo进行性能优化"]},{title:"适用场景",items:["数据展示组件：用户卡片、产品列表、统计图表等","UI组件库：按钮、输入框、模态框等基础组件","布局组件：网格、容器、卡片等布局元素","表单元素：表单字段、验证提示、格式化显示"]},{title:"注意事项",items:["避免在组件内部维护状态（除UI状态外）","不要直接修改props，保持组件的纯函数特性","合理设计props接口，提供必要的配置选项","考虑组件的可访问性和响应式设计"]}],examples:[{title:"用户卡片组件",component:e.jsx(w,{}),description:"展示用户信息的卡片组件，支持不同的显示模式和交互功能。",observationPoints:["观察不同用户状态（在线、离开、离线）的视觉指示器","注意紧凑模式和普通模式的布局差异","点击卡片时会在控制台输出用户信息","头像缺失时会显示用户名首字母作为占位符"],keyPoints:["通过props接收用户数据和配置选项","支持可选的状态显示和紧凑模式","使用条件渲染处理可选内容","通过回调函数处理用户交互"],commonTraps:["在JSX中直接创建对象导致不必要的重渲染","忘记处理头像缺失的情况","硬编码样式而不是使用配置选项","没有正确处理点击事件的参数传递"],solutions:["使用useMemo缓存复杂对象","提供合理的默认值和占位符","通过props支持样式定制","使用箭头函数确保正确的参数传递"],importantTips:["展示组件应该保持纯函数特性","合理的props设计使组件既灵活又易用","考虑不同屏幕尺寸下的响应式布局"],preCode:[{title:"UserCard组件",code:g}],codeExample:{title:"用户卡片组件",code:g}},{title:"产品列表组件",component:e.jsx(v,{}),description:"展示产品信息的列表组件，支持网格和列表两种布局模式。",observationPoints:["对比网格布局和列表布局的视觉效果","注意产品评分的星级显示","观察库存状态的不同颜色标识","点击产品时会在控制台输出产品信息"],keyPoints:["支持灵活的布局模式切换","使用条件渲染处理可选的产品信息","通过CSS类名实现响应式布局","星级评分的动态渲染实现"],commonTraps:["布局切换时样式冲突","图片加载失败时的处理","价格格式化的精度问题","响应式布局在小屏幕上的显示问题"],solutions:["使用条件CSS类名避免样式冲突","提供图片加载失败的占位符","使用toFixed方法确保价格格式一致","合理设置断点和网格列数"],importantTips:["布局组件应该支持多种显示模式","考虑内容长度变化对布局的影响","合理使用CSS Grid和Flexbox"],preCode:[{title:"ProductCard组件",code:d}],codeExample:{title:"产品列表组件",code:d}},{title:"统计卡片组件",component:e.jsx(f,{}),description:"展示统计数据的卡片组件，支持趋势指示和多种颜色主题。",observationPoints:["观察不同颜色主题的视觉效果","注意趋势指示器的方向和颜色","数值变化百分比的显示格式","卡片布局在不同屏幕尺寸下的适应性"],keyPoints:["支持多种颜色主题配置","趋势指示器的动态显示","响应式网格布局","数据格式化和显示优化"],commonTraps:["颜色主题配置不当导致可读性问题","趋势计算逻辑错误","数值格式化不一致","在小屏幕上布局拥挤"],solutions:["使用预定义的颜色主题确保一致性","正确处理正负数和零值的趋势显示","统一数值格式化规则","合理设置响应式断点"],importantTips:["统计组件应该突出关键数据","颜色使用要符合用户认知习惯","考虑数据更新时的动画效果"],preCode:[{title:"StatCard组件",code:p}],codeExample:{title:"统计卡片组件",code:p}},{title:"数据表格组件",component:e.jsx(b,{}),description:"通用的数据表格组件，支持自定义列渲染和行点击事件。",observationPoints:["观察表格的响应式滚动行为","注意自定义渲染的标签样式","点击表格行时会在控制台输出行数据","空数据状态的友好提示"],keyPoints:["灵活的列配置和自定义渲染","支持行点击事件处理","响应式表格设计","加载状态和空数据处理"],commonTraps:["表格在小屏幕上的显示问题","自定义渲染函数的性能问题","表格数据更新时的状态同步","列宽设置不当导致布局问题"],solutions:["使用横向滚动处理小屏幕显示","使用React.memo优化自定义渲染组件","正确使用key属性确保数据同步","合理设置列宽和最小宽度"],importantTips:["表格组件应该处理各种数据状态","自定义渲染要考虑性能影响","提供良好的用户交互反馈"],preCode:[{title:"DataTable组件",code:c}],codeExample:{title:"数据表格组件",code:c}}],tutorial:{concepts:["展示组件只负责UI渲染，不包含业务逻辑","通过props接收所有需要的数据和回调函数","组件应该是纯函数，相同输入产生相同输出","使用TypeScript定义清晰的props接口","支持可选的样式和行为配置"],steps:["分析组件需要展示的数据结构","定义props接口，包括数据和回调函数","实现组件的渲染逻辑","添加条件渲染和样式变化","处理用户交互事件","优化组件性能和可访问性","编写组件文档和使用示例"],tips:["保持组件的单一职责原则","使用默认参数提供合理的默认值","通过className prop支持自定义样式","使用条件渲染处理可选内容","考虑组件的响应式设计"]},interview:{questions:[{question:"展示组件和容器组件的区别是什么？",answer:"展示组件专注于UI渲染，通过props接收数据，不包含业务逻辑；容器组件负责数据获取和状态管理，将数据传递给展示组件。这种分离提高了组件的可复用性和可测试性。"},{question:"如何设计一个好的展示组件？",answer:"好的展示组件应该：1）有清晰的props接口；2）是纯函数，无副作用；3）支持必要的配置选项；4）有良好的默认值；5）考虑可访问性；6）性能优化（如使用React.memo）。"},{question:"展示组件如何处理用户交互？",answer:"展示组件通过props接收回调函数来处理用户交互，如onClick、onChange等。组件本身不处理业务逻辑，只是将事件和相关数据传递给父组件。"},{question:"如何测试展示组件？",answer:"展示组件的测试相对简单：1）测试不同props下的渲染结果；2）测试用户交互是否正确触发回调；3）测试边界情况和错误状态；4）使用快照测试确保UI稳定性。"}],keyPoints:["理解展示组件的职责和特点","掌握props接口的设计原则","了解纯函数组件的概念","熟悉条件渲染和样式处理","掌握组件测试的方法"]},bestPractices:{dos:["保持组件的纯函数特性","使用TypeScript定义清晰的接口","提供合理的默认值","支持自定义样式和配置","考虑组件的可访问性","使用React.memo优化性能"],donts:["不要在展示组件中包含业务逻辑","不要直接修改props","不要在组件内部维护状态（除UI状态外）","不要硬编码样式和文本","不要忽略边界情况的处理"],patterns:["纯函数模式 - 相同输入产生相同输出","配置化模式 - 通过props控制组件行为","组合模式 - 支持children和插槽","渲染属性模式 - 支持自定义渲染逻辑","条件渲染模式 - 根据props决定渲染内容"]}});export{C as default};
