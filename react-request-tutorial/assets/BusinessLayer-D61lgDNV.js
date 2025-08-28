import{j as e,r as l}from"./index-Bi_r7QuH.js";import{C as b}from"./ComponentTemplate-C5EWLtXX.js";const j=()=>{const[i,o]=l.useState([]),[c,n]=l.useState(!1),[d,u]=l.useState([]),a=l.useCallback(s=>{u(t=>[...t,`${new Date().toLocaleTimeString()}: ${s}`])},[]),p=l.useCallback(async()=>{n(!0),a("📋 开始获取用户列表...");try{await new Promise(t=>setTimeout(t,1e3));const s=[{id:1,name:"张三",email:"zhangsan@example.com",role:"admin",status:"active",createdAt:"2024-01-15"},{id:2,name:"李四",email:"lisi@example.com",role:"user",status:"active",createdAt:"2024-01-16"},{id:3,name:"王五",email:"wangwu@example.com",role:"user",status:"inactive",createdAt:"2024-01-17"}];o(s),a(`✅ 用户列表获取成功，共 ${s.length} 个用户`)}catch(s){a(`❌ 获取用户列表失败: ${s}`)}finally{n(!1)}},[a]),h=l.useCallback(async()=>{n(!0);const s={name:"新用户"+Math.floor(Math.random()*1e3),email:`user${Math.floor(Math.random()*1e3)}@example.com`,role:"user"};a(`👤 创建用户: ${s.name}`);try{await new Promise(r=>setTimeout(r,800));const t={id:Date.now(),...s,status:"active",createdAt:new Date().toISOString().split("T")[0]};o(r=>[...r,t]),a(`✅ 用户创建成功: ${t.name} (ID: ${t.id})`)}catch(t){a(`❌ 创建用户失败: ${t}`)}finally{n(!1)}},[a]),x=l.useCallback(async(s,t)=>{n(!0),a(`🔄 更新用户 ${s} 状态为: ${t}`);try{await new Promise(r=>setTimeout(r,600)),o(r=>r.map(m=>m.id===s?{...m,status:t}:m)),a("✅ 用户状态更新成功")}catch(r){a(`❌ 更新用户状态失败: ${r}`)}finally{n(!1)}},[a]),g=l.useCallback(()=>{u([])},[]);return e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-sm border",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"用户管理业务层"}),e.jsxs("div",{className:"flex gap-3 mb-4 flex-wrap",children:[e.jsx("button",{onClick:p,disabled:c,className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50",children:c?"加载中...":"获取用户列表"}),e.jsx("button",{onClick:h,disabled:c,className:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:opacity-50",children:"创建用户"}),e.jsx("button",{onClick:g,className:"px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600",children:"清空日志"})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsxs("h4",{className:"font-medium mb-3",children:["用户列表 (",i.length,")"]}),e.jsx("div",{className:"bg-gray-50 p-3 rounded border max-h-64 overflow-y-auto",children:i.length===0?e.jsx("p",{className:"text-gray-500",children:"暂无用户数据"}):e.jsx("div",{className:"space-y-2",children:i.map(s=>e.jsx("div",{className:"bg-white p-3 rounded border",children:e.jsxs("div",{className:"flex justify-between items-start",children:[e.jsxs("div",{children:[e.jsx("p",{className:"font-medium",children:s.name}),e.jsx("p",{className:"text-sm text-gray-600",children:s.email}),e.jsxs("p",{className:"text-xs text-gray-500",children:["角色: ",s.role," | 创建: ",s.createdAt]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:`px-2 py-1 text-xs rounded ${s.status==="active"?"bg-green-100 text-green-800":"bg-red-100 text-red-800"}`,children:s.status}),e.jsx("button",{onClick:()=>x(s.id,s.status==="active"?"inactive":"active"),disabled:c,className:"px-2 py-1 text-xs bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50",children:"切换"})]})]})},s.id))})})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3",children:"操作日志"}),e.jsx("div",{className:"bg-gray-50 p-3 rounded border max-h-64 overflow-y-auto",children:d.length===0?e.jsx("p",{className:"text-gray-500",children:"暂无操作记录"}):e.jsx("div",{className:"space-y-1",children:d.map((s,t)=>e.jsx("div",{className:"text-sm font-mono text-gray-700",children:s},t))})})]})]})]})})},y=()=>{const[i,o]=l.useState([]),[c,n]=l.useState(!1),[d,u]=l.useState("all"),a=l.useCallback(async()=>{n(!0);try{await new Promise(t=>setTimeout(t,1e3)),o([{id:1001,userId:1,productName:"MacBook Pro",amount:12999,status:"completed",createdAt:"2024-01-15"},{id:1002,userId:2,productName:"iPhone 15",amount:5999,status:"processing",createdAt:"2024-01-16"},{id:1003,userId:1,productName:"AirPods Pro",amount:1999,status:"pending",createdAt:"2024-01-17"},{id:1004,userId:3,productName:"iPad Air",amount:4599,status:"cancelled",createdAt:"2024-01-18"}])}catch(s){console.error("获取订单失败:",s)}finally{n(!1)}},[]),p=l.useCallback(async(s,t)=>{n(!0);try{await new Promise(r=>setTimeout(r,600)),o(r=>r.map(m=>m.id===s?{...m,status:t}:m))}catch(r){console.error("更新订单状态失败:",r)}finally{n(!1)}},[]),h=i.filter(s=>d==="all"||s.status===d),x=[{value:"all",label:"全部",count:i.length},{value:"pending",label:"待处理",count:i.filter(s=>s.status==="pending").length},{value:"processing",label:"处理中",count:i.filter(s=>s.status==="processing").length},{value:"completed",label:"已完成",count:i.filter(s=>s.status==="completed").length},{value:"cancelled",label:"已取消",count:i.filter(s=>s.status==="cancelled").length}],g=s=>({pending:"bg-yellow-100 text-yellow-800",processing:"bg-blue-100 text-blue-800",completed:"bg-green-100 text-green-800",cancelled:"bg-red-100 text-red-800"})[s];return e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-sm border",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"订单管理业务层"}),e.jsxs("div",{className:"flex justify-between items-center mb-4",children:[e.jsx("button",{onClick:a,disabled:c,className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50",children:c?"加载中...":"获取订单列表"}),e.jsx("div",{className:"flex gap-2",children:x.map(s=>e.jsxs("button",{onClick:()=>u(s.value),className:`px-3 py-1 text-sm rounded ${d===s.value?"bg-blue-500 text-white":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`,children:[s.label," (",s.count,")"]},s.value))})]}),e.jsx("div",{className:"space-y-3",children:h.length===0?e.jsx("p",{className:"text-gray-500 text-center py-8",children:i.length===0?'点击"获取订单列表"加载数据':"没有符合条件的订单"}):h.map(s=>e.jsx("div",{className:"bg-gray-50 p-4 rounded border",children:e.jsxs("div",{className:"flex justify-between items-start",children:[e.jsxs("div",{children:[e.jsxs("h4",{className:"font-medium",children:["订单 #",s.id]}),e.jsxs("p",{className:"text-sm text-gray-600",children:["商品: ",s.productName]}),e.jsxs("p",{className:"text-sm text-gray-600",children:["金额: ¥",s.amount.toLocaleString()]}),e.jsxs("p",{className:"text-xs text-gray-500",children:["创建时间: ",s.createdAt]})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:`px-2 py-1 text-xs rounded ${g(s.status)}`,children:{pending:"待处理",processing:"处理中",completed:"已完成",cancelled:"已取消"}[s.status]}),s.status==="pending"&&e.jsx("button",{onClick:()=>p(s.id,"processing"),disabled:c,className:"px-2 py-1 text-xs bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50",children:"开始处理"}),s.status==="processing"&&e.jsx("button",{onClick:()=>p(s.id,"completed"),disabled:c,className:"px-2 py-1 text-xs bg-green-500 text-white rounded hover:bg-green-600 disabled:opacity-50",children:"完成订单"})]})]})},s.id))})]})})},N=()=>{const i=e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"核心概念"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 text-gray-700",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"业务封装"}),"：将具体的业务逻辑封装成独立的方法，如 fetchUserList()、updateOrderStatus() 等"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"领域驱动"}),"：按照业务领域划分 API 调用，如用户管理、订单管理、商品管理等"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"数据转换"}),"：在业务层处理前端展示所需的数据格式转换和计算"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"业务规则"}),"：在业务层实现特定的业务逻辑和验证规则"]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"主要优势"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 text-gray-700",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"业务聚合"}),"：将相关的 API 调用组织在一起，提高代码的可维护性"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"复用性强"}),"：业务方法可以在多个组件中复用，避免重复代码"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"易于测试"}),"：业务逻辑独立，便于编写单元测试和集成测试"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"职责清晰"}),"：将业务逻辑与 UI 逻辑分离，提高代码的可读性"]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"适用场景"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 text-gray-700",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"复杂业务系统"}),"：包含多个业务模块的大型应用系统"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"团队协作项目"}),"：需要多人协作开发的项目，便于分工和维护"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"API 密集应用"}),"：需要频繁调用后端 API 的前端应用"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"数据处理复杂"}),"：需要对 API 返回数据进行复杂处理的场景"]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"注意事项"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 text-gray-700",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"避免过度封装"}),"：不要为简单的 API 调用创建不必要的业务层"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"保持单一职责"}),"：每个业务方法应该只负责一个明确的业务功能"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"错误处理"}),"：在业务层统一处理业务相关的错误和异常情况"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"性能考虑"}),"：避免在业务层进行过重的计算，影响用户体验"]})]})]})]}),o=[{title:"用户管理业务层",component:e.jsx(j,{}),description:"演示用户相关的业务方法封装，包括获取用户列表、创建用户、更新用户状态等",observationPoints:["点击不同的操作按钮，观察业务方法的执行过程和结果","注意业务层如何处理数据的获取、创建和更新操作","观察操作日志如何记录业务操作的详细信息"],keyPoints:["每个业务方法都有明确的职责和功能","业务层处理数据的格式转换和状态管理","统一的错误处理和日志记录机制"],commonTraps:["在业务层混入 UI 逻辑和状态管理","业务方法职责不清，功能过于复杂","缺乏统一的错误处理机制"],solutions:["保持业务层的纯净，只处理业务逻辑","按照单一职责原则设计业务方法","建立统一的错误处理和日志记录规范"],codeExample:{code:`// 用户管理业务层示例
class UserService {
  private apiClient: ApiClient;

  constructor(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  // 获取用户列表
  async fetchUserList(params?: {
    page?: number;
    pageSize?: number;
    status?: 'active' | 'inactive';
  }): Promise<User[]> {
    try {
      const response = await this.apiClient.get<User[]>('/api/users', {
        params
      });
      
      // 业务层数据处理
      return response.data.map(user => ({
        ...user,
        displayName: \`\${user.name} (\${user.role})\`,
        isActive: user.status === 'active'
      }));
    } catch (error) {
      throw new Error(\`获取用户列表失败: \${error.message}\`);
    }
  }

  // 创建用户
  async createUser(userData: Partial<User>): Promise<User> {
    // 业务验证
    if (!userData.name || !userData.email) {
      throw new Error('用户名和邮箱不能为空');
    }

    try {
      const response = await this.apiClient.post<User>('/api/users', {
        ...userData,
        status: 'active',
        createdAt: new Date().toISOString()
      });
      
      return response.data;
    } catch (error) {
      throw new Error(\`创建用户失败: \${error.message}\`);
    }
  }

  // 更新用户状态
  async updateUserStatus(userId: number, status: 'active' | 'inactive'): Promise<void> {
    try {
      await this.apiClient.put(\`/api/users/\${userId}/status\`, { status });
    } catch (error) {
      throw new Error(\`更新用户状态失败: \${error.message}\`);
    }
  }
}`,language:"typescript",highlightLines:[9,16,28,35,44]}},{title:"订单管理业务层",component:e.jsx(y,{}),description:"演示订单相关的业务方法封装，包括获取订单列表、更新订单状态、订单筛选等",observationPoints:["点击获取订单列表，观察数据的加载和展示过程","使用状态筛选功能，观察前端数据过滤的实现","点击状态更新按钮，观察订单状态的变更流程"],keyPoints:["业务层负责数据的获取和状态管理","支持复杂的业务逻辑，如状态筛选和批量操作","提供用户友好的交互体验和状态反馈"],commonTraps:["在组件中直接调用底层 API，缺乏业务封装","业务逻辑分散在多个组件中，难以维护","缺乏统一的数据格式和状态管理"],solutions:["将相关的 API 调用封装到业务服务类中","建立统一的业务数据模型和状态管理","使用 TypeScript 确保数据类型的一致性"],codeExample:{code:`// 订单管理业务层示例
class OrderService {
  private apiClient: ApiClient;

  constructor(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  // 获取订单列表
  async fetchOrders(filters?: {
    status?: Order['status'];
    userId?: number;
    dateRange?: { start: string; end: string };
  }): Promise<Order[]> {
    try {
      const response = await this.apiClient.get<Order[]>('https://jsonplaceholder.typicode.com/posts', {
        params: filters
      });
      
      // 业务层数据处理
      return response.data.map(order => ({
        ...order,
        formattedAmount: \`¥\${order.amount.toLocaleString()}\`,
        statusText: this.getStatusText(order.status),
        canProcess: order.status === 'pending',
        canComplete: order.status === 'processing'
      }));
    } catch (error) {
      throw new Error(\`获取订单列表失败: \${error.message}\`);
    }
  }

  // 更新订单状态
  async updateOrderStatus(orderId: number, status: Order['status']): Promise<void> {
    // 业务验证
    const validTransitions = {
      pending: ['processing', 'cancelled'],
      processing: ['completed', 'cancelled'],
      completed: [],
      cancelled: []
    };

    try {
      await this.apiClient.put(\`https://jsonplaceholder.typicode.com/posts/\${orderId}\`, { 
        status,
        updatedAt: new Date().toISOString()
      });
    } catch (error) {
      throw new Error(\`更新订单状态失败: \${error.message}\`);
    }
  }

  // 批量处理订单
  async batchUpdateOrders(orderIds: number[], status: Order['status']): Promise<void> {
    try {
      await this.apiClient.post('https://jsonplaceholder.typicode.com/posts', {
        orderIds,
        status,
        updatedAt: new Date().toISOString()
      });
    } catch (error) {
      throw new Error(\`批量更新订单失败: \${error.message}\`);
    }
  }

  private getStatusText(status: Order['status']): string {
    const statusMap = {
      pending: '待处理',
      processing: '处理中',
      completed: '已完成',
      cancelled: '已取消'
    };
    return statusMap[status];
  }
}`,language:"typescript",highlightLines:[9,20,33,50,59]}}],c={concepts:["业务层是连接 UI 层和数据层的桥梁，负责处理具体的业务逻辑","按照业务领域划分服务类，如 UserService、OrderService、ProductService","在业务层进行数据验证、格式转换和业务规则处理","提供清晰的 API 接口，隐藏底层实现的复杂性"],steps:["分析业务需求，识别核心业务实体和操作","设计业务服务类的接口和方法签名","实现具体的业务方法，包括 API 调用和数据处理","添加业务验证和错误处理逻辑","编写单元测试，确保业务逻辑的正确性","在 UI 组件中使用业务服务，实现业务功能"],tips:["保持业务方法的单一职责，避免功能过于复杂","使用 TypeScript 定义清晰的业务数据模型","在业务层统一处理错误，提供有意义的错误信息","考虑使用依赖注入模式，提高代码的可测试性"]},n={questions:[{question:"业务层在前端架构中的作用是什么？",answer:"业务层作用：1) 封装具体的业务逻辑和 API 调用；2) 提供统一的业务接口给 UI 层使用；3) 处理数据验证、格式转换和业务规则；4) 隐藏底层实现细节，提高代码的可维护性；5) 便于单元测试和业务逻辑的复用。"},{question:"如何设计一个好的业务服务类？",answer:"设计原则：1) 按照业务领域划分，如用户、订单、商品等；2) 遵循单一职责原则，每个方法只处理一个业务功能；3) 提供清晰的方法签名和 TypeScript 类型定义；4) 统一的错误处理和返回格式；5) 考虑异步操作和并发控制；6) 支持依赖注入，便于测试和扩展。"},{question:"业务层与数据层的职责如何划分？",answer:"职责划分：业务层负责：业务逻辑处理、数据验证、格式转换、业务规则实现；数据层负责：HTTP 请求发送、响应处理、缓存管理、网络错误处理。业务层关注'做什么'，数据层关注'怎么做'。业务层调用数据层的方法，但不直接处理网络通信。"},{question:"如何在业务层处理复杂的业务逻辑？",answer:"处理策略：1) 将复杂逻辑分解为多个简单的步骤；2) 使用策略模式处理不同的业务场景；3) 建立业务规则引擎，支持动态配置；4) 使用状态机管理复杂的状态转换；5) 提供业务事件机制，支持业务流程的监控；6) 考虑使用领域驱动设计（DDD）的思想。"}],keyPoints:["业务层是前端架构的核心，连接 UI 层和数据层","按照业务领域划分服务类，提高代码的组织性","遵循单一职责原则，保持方法的简洁和专注","统一的错误处理和数据格式，提高用户体验"]},d={dos:["按照业务领域划分服务类，如 UserService、OrderService","为每个业务方法提供清晰的 TypeScript 类型定义","在业务层进行数据验证和格式转换","统一处理业务相关的错误和异常","使用依赖注入模式，提高代码的可测试性","编写完整的单元测试覆盖业务逻辑","提供有意义的错误信息和用户反馈","考虑业务方法的幂等性和并发安全"],donts:["不要在业务层处理 UI 相关的逻辑","不要让业务方法承担过多的职责","不要在业务层直接操作 DOM 或组件状态","不要忽略业务数据的验证和安全检查","不要在业务层进行复杂的异步操作编排","不要让业务层依赖具体的 UI 框架","不要在业务层硬编码业务规则和配置"],patterns:["服务层模式（Service Layer Pattern）：封装业务逻辑到独立的服务类","仓储模式（Repository Pattern）：抽象数据访问逻辑","策略模式（Strategy Pattern）：处理不同的业务场景和规则","工厂模式（Factory Pattern）：创建业务对象和服务实例","观察者模式（Observer Pattern）：实现业务事件的发布和订阅","命令模式（Command Pattern）：封装业务操作为可执行的命令","状态模式（State Pattern）：管理复杂的业务状态转换"]};return e.jsx(b,{title:"业务层",description:"学习如何在业务层封装具体的业务逻辑，包括用户管理、订单处理等业务功能的实现和组织。",overview:i,examples:o,tutorial:c,interview:n,bestPractices:d})};export{N as default};
