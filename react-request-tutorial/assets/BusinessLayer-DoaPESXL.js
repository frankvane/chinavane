var L=Object.defineProperty;var C=(c,t,s)=>t in c?L(c,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):c[t]=s;var f=(c,t,s)=>C(c,typeof t!="symbol"?t+"":t,s);import{r as m,j as e}from"./index-C7SuDyTR.js";import{C as k}from"./ComponentTemplate-BzrYXZsv.js";class A{constructor(){f(this,"users",[]);f(this,"nextId",1)}async delay(t=1e3){return new Promise(s=>setTimeout(s,t))}async getUsers(){return await this.delay(),this.users.length===0&&(this.users=[{id:1,name:"张三",email:"zhangsan@example.com",role:"admin",status:"active",createdAt:new Date().toISOString()},{id:2,name:"李四",email:"lisi@example.com",role:"user",status:"active",createdAt:new Date().toISOString()}],this.nextId=3),[...this.users]}async createUser(t){if(await this.delay(),this.users.some(a=>a.email===t.email))throw new Error("邮箱已存在");const s={id:this.nextId++,...t,status:"active",createdAt:new Date().toISOString()};return this.users.push(s),s}async deleteUser(t){await this.delay();const s=this.users.findIndex(a=>a.id===t);if(s===-1)throw new Error("用户不存在");this.users.splice(s,1)}async updateUser(t,s){await this.delay();const a=this.users.find(p=>p.id===t);if(!a)throw new Error("用户不存在");return Object.assign(a,s),a}}class D{constructor(){f(this,"orders",[]);f(this,"nextId",1)}async delay(t=1e3){return new Promise(s=>setTimeout(s,t))}async getOrders(){return await this.delay(),this.orders.length===0&&(this.orders=[{id:1,userId:1,productId:1001,productName:"MacBook Pro",quantity:1,price:12999,total:12999,totalAmount:12999,status:"completed",createdAt:new Date().toISOString()},{id:2,userId:2,productId:1002,productName:"iPhone 15",quantity:2,price:5999,total:11998,totalAmount:11998,status:"processing",createdAt:new Date().toISOString()}],this.nextId=3),[...this.orders]}async createOrder(t){await this.delay();const s={id:this.nextId++,...t,productId:t.productId||1e3,total:t.quantity*t.price,totalAmount:t.quantity*t.price,status:"pending",createdAt:new Date().toISOString()};return this.orders.push(s),s}async updateOrderStatus(t,s){await this.delay();const a=this.orders.find(p=>p.id===t);if(!a)throw new Error("订单不存在");return a.status=s,a}async deleteOrder(t){await this.delay();const s=this.orders.findIndex(a=>a.id===t);if(s===-1)throw new Error("订单不存在");this.orders.splice(s,1)}async getOrderById(t){await this.delay();const s=this.orders.find(a=>a.id===t);if(!s)throw new Error("订单不存在");return s}}const U=new A,N=new D,$=()=>{const[c,t]=m.useState([]),[s,a]=m.useState(!1),[p,l]=m.useState(null),[u,g]=m.useState({userId:1,productName:"",quantity:1,price:0}),[b,I]=m.useState([]);m.useEffect(()=>{y()},[]);const i=n=>{I(d=>[...d,`${new Date().toLocaleTimeString()}: ${n}`])},y=async()=>{try{a(!0),l(null),i("开始加载订单列表...");const n=await N.getOrders();t(n),i(`成功加载 ${n.length} 个订单`)}catch(n){const d=n instanceof Error?n.message:"获取订单列表失败";l(d),i(`加载订单失败: ${d}`)}finally{a(!1)}},S=async()=>{if(!u.productName||u.price<=0){const n="请填写完整的订单信息且价格必须大于0";l(n),i(n);return}try{a(!0),l(null),i(`创建订单: ${u.productName}`);const n=await N.createOrder(u);t(d=>[...d,n]),g({userId:1,productName:"",quantity:1,price:0}),i(`订单创建成功: ID ${n.id}`)}catch(n){const d=n instanceof Error?n.message:"创建订单失败";l(d),i(`创建订单失败: ${d}`)}finally{a(!1)}},v=async(n,d)=>{try{a(!0),l(null),i(`更新订单状态: ID ${n} -> ${d}`);const x=await N.updateOrderStatus(n,d);t(w=>w.map(O=>O.id===n?x:O)),i(`订单状态更新成功: ID ${n}`)}catch(x){const w=x instanceof Error?x.message:"更新订单状态失败";l(w),i(`更新订单状态失败: ${w}`)}finally{a(!1)}},r=async n=>{try{a(!0),l(null),i(`删除订单: ID ${n}`),await N.deleteOrder(n),t(d=>d.filter(x=>x.id!==n)),i(`订单删除成功: ID ${n}`)}catch(d){const x=d instanceof Error?d.message:"删除订单失败";l(x),i(`删除订单失败: ${x}`)}finally{a(!1)}},o=n=>{switch(n){case"pending":return"bg-yellow-100 text-yellow-800";case"processing":return"bg-blue-100 text-blue-800";case"completed":return"bg-green-100 text-green-800";case"cancelled":return"bg-red-100 text-red-800";default:return"bg-gray-100 text-gray-800"}},h=n=>{switch(n){case"pending":return"待处理";case"processing":return"处理中";case"completed":return"已完成";case"cancelled":return"已取消";default:return"未知"}};return e.jsxs("div",{className:"space-y-6",children:[p&&e.jsx("div",{className:"mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded",children:p}),e.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-semibold mb-3",children:"订单管理操作"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsx("button",{onClick:y,disabled:s,className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50",children:s?"加载中...":"加载订单列表"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("input",{type:"text",placeholder:"商品名称",value:u.productName,onChange:n=>g(d=>({...d,productName:n.target.value})),className:"w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"}),e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx("input",{type:"number",placeholder:"数量",min:"1",value:u.quantity,onChange:n=>g(d=>({...d,quantity:parseInt(n.target.value)||1})),className:"px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"}),e.jsx("input",{type:"number",placeholder:"价格",min:"0",step:"0.01",value:u.price,onChange:n=>g(d=>({...d,price:parseFloat(n.target.value)||0})),className:"px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),e.jsx("button",{onClick:S,disabled:s,className:"w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:opacity-50",children:"创建订单"})]})]})]}),e.jsxs("div",{className:"bg-white border rounded-lg",children:[e.jsx("div",{className:"px-4 py-3 border-b bg-gray-50",children:e.jsxs("h4",{className:"font-semibold",children:["订单列表 (",c.length,")"]})}),e.jsx("div",{className:"divide-y",children:c.length===0?e.jsx("div",{className:"px-4 py-8 text-center text-gray-500",children:'暂无订单数据，点击"加载订单列表"获取数据'}):c.map(n=>e.jsxs("div",{className:"px-4 py-3",children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsxs("div",{children:[e.jsx("div",{className:"font-medium",children:n.productName}),e.jsxs("div",{className:"text-sm text-gray-500",children:["数量: ",n.quantity," | 价格: ¥",n.price.toFixed(2)," | 总计: ¥",n.total.toFixed(2)]})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("span",{className:`px-2 py-1 text-xs rounded ${o(n.status)}`,children:h(n.status)}),e.jsx("button",{onClick:()=>r(n.id),disabled:s,className:"px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600 disabled:opacity-50",children:"删除"})]})]}),e.jsxs("div",{className:"flex space-x-2",children:[n.status==="pending"&&e.jsx("button",{onClick:()=>v(n.id,"processing"),disabled:s,className:"px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 disabled:opacity-50",children:"开始处理"}),n.status==="processing"&&e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>v(n.id,"completed"),disabled:s,className:"px-3 py-1 bg-green-500 text-white text-sm rounded hover:bg-green-600 disabled:opacity-50",children:"完成订单"}),e.jsx("button",{onClick:()=>v(n.id,"cancelled"),disabled:s,className:"px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600 disabled:opacity-50",children:"取消订单"})]})]})]},n.id))})]}),e.jsxs("div",{className:"bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm",children:[e.jsx("div",{className:"mb-2 text-gray-300",children:"操作日志:"}),e.jsx("div",{className:"space-y-1 max-h-40 overflow-y-auto",children:b.length===0?e.jsx("div",{className:"text-gray-500",children:"暂无操作记录"}):b.map((n,d)=>e.jsx("div",{children:n},d))})]})]})},P=`import React, { useState, useCallback } from "react";
import { Order } from "./types";

// 订单管理业务层演示
const OrderManagementDemo: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState<"all" | "pending" | "completed" | "cancelled">("all");
  const [logs, setLogs] = useState<string[]>([]);

  const addLog = useCallback((message: string) => {
    setLogs((prev) => [
      ...prev,
      \`\${new Date().toLocaleTimeString()}: \${message}\`,
    ]);
  }, []);

  // 模拟业务层方法：获取订单列表
  const fetchOrderList = useCallback(async () => {
    setLoading(true);
    addLog("📋 开始获取订单列表...");

    try {
      // 模拟网络延迟
      await new Promise((resolve) => setTimeout(resolve, 1200));

      // 模拟业务数据
      const mockOrders: Order[] = [
        {
          id: 1001,
          userId: 1,
          productId: 2001,
          productName: "商品A",
          quantity: 2,
          price: 149.99,
          total: 299.98,
          totalAmount: 299.98,
          status: "pending",
          createdAt: "2024-01-15T10:30:00Z",
          updatedAt: "2024-01-15T10:30:00Z",
        },
        {
          id: 1002,
          userId: 2,
          productId: 2002,
          productName: "商品B",
          quantity: 1,
          price: 199.99,
          total: 199.99,
          totalAmount: 199.99,
          status: "completed",
          createdAt: "2024-01-16T14:20:00Z",
          updatedAt: "2024-01-16T16:45:00Z",
        },
        {
          id: 1003,
          userId: 1,
          productId: 2003,
          productName: "商品C",
          quantity: 3,
          price: 29.99,
          total: 89.97,
          totalAmount: 89.97,
          status: "cancelled",
          createdAt: "2024-01-17T09:15:00Z",
          updatedAt: "2024-01-17T11:30:00Z",
        },
      ];

      setOrders(mockOrders);
      addLog(\`✅ 订单列表获取成功，共 \${mockOrders.length} 个订单\`);
    } catch (error) {
      addLog(\`❌ 获取订单列表失败: \${error}\`);
    } finally {
      setLoading(false);
    }
  }, [addLog]);

  // 模拟业务层方法：更新订单状态
  const updateOrderStatus = useCallback(
    async (orderId: number, newStatus: Order["status"]) => {
      setLoading(true);
      addLog(\`🔄 更新订单 \${orderId} 状态为: \${newStatus}\`);

      try {
        // 模拟网络延迟
        await new Promise((resolve) => setTimeout(resolve, 800));

        setOrders((prev) =>
          prev.map((order) =>
            order.id === orderId
              ? {
                  ...order,
                  status: newStatus,
                  updatedAt: new Date().toISOString(),
                }
              : order
          )
        );

        addLog(\`✅ 订单状态更新成功\`);
      } catch (error) {
        addLog(\`❌ 更新订单状态失败: \${error}\`);
      } finally {
        setLoading(false);
      }
    },
    [addLog]
  );

  // 过滤订单
  const filteredOrders = orders.filter((order) => {
    if (filter === "all") return true;
    return order.status === filter;
  });

  const getStatusColor = (status: Order["status"]) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "completed":
        return "bg-green-100 text-green-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const clearLogs = useCallback(() => {
    setLogs([]);
  }, []);

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <h3 className="text-lg font-semibold mb-4">订单管理业务层</h3>

        <div className="flex gap-3 mb-4 flex-wrap">
          <button
            onClick={fetchOrderList}
            disabled={loading}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
          >
            {loading ? "加载中..." : "获取订单列表"}
          </button>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value as typeof filter)}
            className="px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">全部订单</option>
            <option value="pending">待处理</option>
            <option value="completed">已完成</option>
            <option value="cancelled">已取消</option>
          </select>
          <button
            onClick={clearLogs}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            清空日志
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium mb-3">
              订单列表 ({filteredOrders.length}/{orders.length})
            </h4>
            <div className="bg-gray-50 p-3 rounded border max-h-64 overflow-y-auto">
              {filteredOrders.length === 0 ? (
                <p className="text-gray-500">暂无订单数据</p>
              ) : (
                <div className="space-y-2">
                  {filteredOrders.map((order) => (
                    <div key={order.id} className="bg-white p-3 rounded border">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium">订单 #{order.id}</p>
                          <p className="text-sm text-gray-600">
                            用户ID: {order.userId} | 产品ID: {order.productId}
                          </p>
                          <p className="text-sm text-gray-600">
                            数量: {order.quantity} | 金额: ¥{order.totalAmount}
                          </p>
                          <p className="text-xs text-gray-500">
                            创建: {new Date(order.createdAt).toLocaleString()}
                          </p>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <span
                            className={\`px-2 py-1 text-xs rounded \${
                              getStatusColor(order.status)
                            }\`}
                          >
                            {order.status}
                          </span>
                          <div className="flex gap-1">
                            {order.status === "pending" && (
                              <>
                                <button
                                  onClick={() =>
                                    updateOrderStatus(order.id, "completed")
                                  }
                                  disabled={loading}
                                  className="px-2 py-1 text-xs bg-green-500 text-white rounded hover:bg-green-600 disabled:opacity-50"
                                >
                                  完成
                                </button>
                                <button
                                  onClick={() =>
                                    updateOrderStatus(order.id, "cancelled")
                                  }
                                  disabled={loading}
                                  className="px-2 py-1 text-xs bg-red-500 text-white rounded hover:bg-red-600 disabled:opacity-50"
                                >
                                  取消
                                </button>
                              </>
                            )}
                            {order.status === "cancelled" && (
                              <button
                                onClick={() =>
                                  updateOrderStatus(order.id, "pending")
                                }
                                disabled={loading}
                                className="px-2 py-1 text-xs bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
                              >
                                重新处理
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-3">操作日志</h4>
            <div className="bg-gray-50 p-3 rounded border max-h-64 overflow-y-auto">
              {logs.length === 0 ? (
                <p className="text-gray-500">暂无操作记录</p>
              ) : (
                <div className="space-y-1">
                  {logs.map((log, index) => (
                    <div
                      key={index}
                      className="text-sm font-mono text-gray-700"
                    >
                      {log}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderManagementDemo;`,T=()=>{const[c,t]=m.useState([]),[s,a]=m.useState(!1),[p,l]=m.useState(null),[u,g]=m.useState({name:"",email:"",role:"user"}),[b,I]=m.useState([]);m.useEffect(()=>{y()},[]);const i=r=>{const o=new Date().toLocaleTimeString();I(h=>[...h,`[${o}] ${r}`])},y=async()=>{try{a(!0),l(null),i("开始加载用户列表...");const r=await U.getUsers();t(r),i(`成功加载 ${r.length} 个用户`)}catch(r){const o=r instanceof Error?r.message:"获取用户列表失败";l(o),i(`加载用户失败: ${o}`)}finally{a(!1)}},S=async()=>{if(!u.name||!u.email){const r="请填写完整的用户信息";l(r),i(r);return}try{a(!0),l(null),i(`创建用户: ${u.name}`);const r=await U.createUser(u);t(o=>[...o,r]),g({name:"",email:"",role:"user"}),i(`用户创建成功: ID ${r.id}`)}catch(r){const o=r instanceof Error?r.message:"创建用户失败";l(o),i(`创建用户失败: ${o}`)}finally{a(!1)}},v=async r=>{try{a(!0),l(null),i(`删除用户: ID ${r}`),await U.deleteUser(r),t(o=>o.filter(h=>h.id!==r)),i(`用户删除成功: ID ${r}`)}catch(o){const h=o instanceof Error?o.message:"删除用户失败";l(h),i(`删除用户失败: ${h}`)}finally{a(!1)}};return e.jsxs("div",{className:"space-y-6",children:[p&&e.jsx("div",{className:"mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded",children:p}),e.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-semibold mb-3",children:"用户管理操作"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsx("button",{onClick:y,disabled:s,className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50",children:s?"加载中...":"加载用户列表"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("input",{type:"text",placeholder:"用户名",value:u.name,onChange:r=>g(o=>({...o,name:r.target.value})),className:"w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"}),e.jsx("input",{type:"email",placeholder:"邮箱",value:u.email,onChange:r=>g(o=>({...o,email:r.target.value})),className:"w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"}),e.jsxs("select",{value:u.role,onChange:r=>g(o=>({...o,role:r.target.value})),className:"w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500",children:[e.jsx("option",{value:"user",children:"普通用户"}),e.jsx("option",{value:"admin",children:"管理员"})]}),e.jsx("button",{onClick:S,disabled:s,className:"w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:opacity-50",children:"创建用户"})]})]})]}),e.jsxs("div",{className:"bg-white border rounded-lg",children:[e.jsx("div",{className:"px-4 py-3 border-b bg-gray-50",children:e.jsxs("h4",{className:"font-semibold",children:["用户列表 (",c.length,")"]})}),e.jsx("div",{className:"divide-y",children:c.length===0?e.jsx("div",{className:"px-4 py-8 text-center text-gray-500",children:'暂无用户数据，点击"加载用户列表"获取数据'}):c.map(r=>e.jsxs("div",{className:"px-4 py-3 flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("div",{className:"font-medium",children:r.name}),e.jsx("div",{className:"text-sm text-gray-500",children:r.email}),e.jsx("span",{className:`inline-block px-2 py-1 text-xs rounded ${r.role==="admin"?"bg-red-100 text-red-800":"bg-blue-100 text-blue-800"}`,children:r.role==="admin"?"管理员":"普通用户"})]}),e.jsx("button",{onClick:()=>v(r.id),disabled:s,className:"px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600 disabled:opacity-50",children:"删除"})]},r.id))})]}),e.jsxs("div",{className:"bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm",children:[e.jsx("div",{className:"mb-2 text-gray-300",children:"操作日志:"}),e.jsx("div",{className:"space-y-1 max-h-40 overflow-y-auto",children:b.length===0?e.jsx("div",{className:"text-gray-500",children:"暂无操作记录"}):b.map((r,o)=>e.jsx("div",{children:r},o))})]})]})},q=`import React, { useState, useCallback } from "react";
import { User } from "./types";

// 用户管理业务层演示
const UserManagementDemo: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);

  const addLog = useCallback((message: string) => {
    setLogs((prev) => [
      ...prev,
      \`\${new Date().toLocaleTimeString()}: \${message}\`,
    ]);
  }, []);

  // 模拟业务层方法：获取用户列表
  const fetchUserList = useCallback(async () => {
    setLoading(true);
    addLog("📋 开始获取用户列表...");

    try {
      // 模拟网络延迟
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // 模拟业务数据
      const mockUsers: User[] = [
        {
          id: 1,
          name: "张三",
          email: "zhangsan@example.com",
          role: "admin",
          status: "active",
          createdAt: "2024-01-15",
        },
        {
          id: 2,
          name: "李四",
          email: "lisi@example.com",
          role: "user",
          status: "active",
          createdAt: "2024-01-16",
        },
        {
          id: 3,
          name: "王五",
          email: "wangwu@example.com",
          role: "user",
          status: "inactive",
          createdAt: "2024-01-17",
        },
      ];

      setUsers(mockUsers);
      addLog(\`✅ 用户列表获取成功，共 \${mockUsers.length} 个用户\`);
    } catch (error) {
      addLog(\`❌ 获取用户列表失败: \${error}\`);
    } finally {
      setLoading(false);
    }
  }, [addLog]);

  // 模拟业务层方法：创建用户
  const createUser = useCallback(async () => {
    setLoading(true);
    const newUser = {
      name: "新用户" + Math.floor(Math.random() * 1000),
      email: \`user\${Math.floor(Math.random() * 1000)}@example.com\`,
      role: "user",
    };

    addLog(\`👤 创建用户: \${newUser.name}\`);

    try {
      // 模拟网络延迟
      await new Promise((resolve) => setTimeout(resolve, 800));

      const createdUser: User = {
        id: Date.now(),
        ...newUser,
        role: newUser.role as 'admin' | 'user',
        status: "active",
        createdAt: new Date().toISOString().split("T")[0],
      };

      setUsers((prev) => [...prev, createdUser]);
      addLog(\`✅ 用户创建成功: \${createdUser.name} (ID: \${createdUser.id})\`);
    } catch (error) {
      addLog(\`❌ 创建用户失败: \${error}\`);
    } finally {
      setLoading(false);
    }
  }, [addLog]);

  // 模拟业务层方法：更新用户状态
  const updateUserStatus = useCallback(
    async (userId: number, newStatus: "active" | "inactive") => {
      setLoading(true);
      addLog(\`🔄 更新用户 \${userId} 状态为: \${newStatus}\`);

      try {
        // 模拟网络延迟
        await new Promise((resolve) => setTimeout(resolve, 600));

        setUsers((prev) =>
          prev.map((user) =>
            user.id === userId ? { ...user, status: newStatus } : user
          )
        );

        addLog(\`✅ 用户状态更新成功\`);
      } catch (error) {
        addLog(\`❌ 更新用户状态失败: \${error}\`);
      } finally {
        setLoading(false);
      }
    },
    [addLog]
  );

  const clearLogs = useCallback(() => {
    setLogs([]);
  }, []);

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <h3 className="text-lg font-semibold mb-4">用户管理业务层</h3>

        <div className="flex gap-3 mb-4 flex-wrap">
          <button
            onClick={fetchUserList}
            disabled={loading}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
          >
            {loading ? "加载中..." : "获取用户列表"}
          </button>
          <button
            onClick={createUser}
            disabled={loading}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:opacity-50"
          >
            创建用户
          </button>
          <button
            onClick={clearLogs}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            清空日志
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium mb-3">用户列表 ({users.length})</h4>
            <div className="bg-gray-50 p-3 rounded border max-h-64 overflow-y-auto">
              {users.length === 0 ? (
                <p className="text-gray-500">暂无用户数据</p>
              ) : (
                <div className="space-y-2">
                  {users.map((user) => (
                    <div key={user.id} className="bg-white p-3 rounded border">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium">{user.name}</p>
                          <p className="text-sm text-gray-600">{user.email}</p>
                          <p className="text-xs text-gray-500">
                            角色: {user.role} | 创建: {user.createdAt}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span
                            className={\`px-2 py-1 text-xs rounded \${
                              user.status === "active"
                                ? "bg-green-100 text-green-800"
                                : "bg-red-100 text-red-800"
                            }\`}
                          >
                            {user.status}
                          </span>
                          <button
                            onClick={() =>
                              updateUserStatus(
                                user.id,
                                user.status === "active" ? "inactive" : "active"
                              )
                            }
                            disabled={loading}
                            className="px-2 py-1 text-xs bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
                          >
                            切换
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-3">操作日志</h4>
            <div className="bg-gray-50 p-3 rounded border max-h-64 overflow-y-auto">
              {logs.length === 0 ? (
                <p className="text-gray-500">暂无操作记录</p>
              ) : (
                <div className="space-y-1">
                  {logs.map((log, index) => (
                    <div
                      key={index}
                      className="text-sm font-mono text-gray-700"
                    >
                      {log}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserManagementDemo;`,j=`// 用户相关类型定义
export interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user';
  status: 'active' | 'inactive';
  createdAt: string;
}

export interface CreateUserRequest {
  name: string;
  email: string;
  role: 'admin' | 'user';
}

// 订单相关类型定义
export interface Order {
  id: number;
  userId: number;
  productId: number;
  productName: string;
  quantity: number;
  price: number;
  total: number;
  totalAmount: number;
  status: 'pending' | 'processing' | 'completed' | 'cancelled';
  createdAt: string;
  updatedAt?: string;
}

export interface CreateOrderRequest {
  userId: number;
  productId?: number;
  productName: string;
  quantity: number;
  price: number;
}

// API 响应类型
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

// 用户服务类
export class UserService {
  // baseUrl已移除
  private users: User[] = [];
  private nextId = 1;

  // 模拟 API 延迟
  private async delay(ms: number = 1000): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // 获取用户列表
  async getUsers(): Promise<User[]> {
    await this.delay();
    
    // 模拟初始数据
    if (this.users.length === 0) {
      this.users = [
        {
          id: 1,
          name: '张三',
          email: 'zhangsan@example.com',
          role: 'admin',
          status: 'active',
          createdAt: new Date().toISOString(),
        },
        {
          id: 2,
          name: '李四',
          email: 'lisi@example.com',
          role: 'user',
          status: 'active',
          createdAt: new Date().toISOString(),
        },
      ];
      this.nextId = 3;
    }
    
    return [...this.users];
  }

  // 创建用户
  async createUser(userData: CreateUserRequest): Promise<User> {
    await this.delay();
    
    // 模拟邮箱重复检查
    if (this.users.some(user => user.email === userData.email)) {
      throw new Error('邮箱已存在');
    }
    
    const newUser: User = {
      id: this.nextId++,
      ...userData,
      status: 'active',
      createdAt: new Date().toISOString(),
    };
    
    this.users.push(newUser);
    return newUser;
  }

  // 删除用户
  async deleteUser(id: number): Promise<void> {
    await this.delay();
    
    const index = this.users.findIndex(user => user.id === id);
    if (index === -1) {
      throw new Error('用户不存在');
    }
    
    this.users.splice(index, 1);
  }

  // 更新用户
  async updateUser(id: number, userData: Partial<CreateUserRequest>): Promise<User> {
    await this.delay();
    
    const user = this.users.find(u => u.id === id);
    if (!user) {
      throw new Error('用户不存在');
    }
    
    Object.assign(user, userData);
    return user;
  }
}

// 订单服务类
export class OrderService {
  // baseUrl已移除
  private orders: Order[] = [];
  private nextId = 1;

  // 模拟 API 延迟
  private async delay(ms: number = 1000): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // 获取订单列表
  async getOrders(): Promise<Order[]> {
    await this.delay();
    
    // 模拟初始数据
    if (this.orders.length === 0) {
      this.orders = [
        {
          id: 1,
          userId: 1,
          productId: 1001,
          productName: 'MacBook Pro',
          quantity: 1,
          price: 12999,
          total: 12999,
          totalAmount: 12999,
          status: 'completed',
          createdAt: new Date().toISOString(),
        },
        {
          id: 2,
          userId: 2,
          productId: 1002,
          productName: 'iPhone 15',
          quantity: 2,
          price: 5999,
          total: 11998,
          totalAmount: 11998,
          status: 'processing',
          createdAt: new Date().toISOString(),
        },
      ];
      this.nextId = 3;
    }
    
    return [...this.orders];
  }

  // 创建订单
  async createOrder(orderData: CreateOrderRequest): Promise<Order> {
    await this.delay();
    
    const newOrder: Order = {
      id: this.nextId++,
      ...orderData,
      productId: orderData.productId || 1000,
      total: orderData.quantity * orderData.price,
      totalAmount: orderData.quantity * orderData.price,
      status: 'pending',
      createdAt: new Date().toISOString(),
    };
    
    this.orders.push(newOrder);
    return newOrder;
  }

  // 更新订单状态
  async updateOrderStatus(id: number, status: Order['status']): Promise<Order> {
    await this.delay();
    
    const order = this.orders.find(o => o.id === id);
    if (!order) {
      throw new Error('订单不存在');
    }
    
    order.status = status;
    return order;
  }

  // 删除订单
  async deleteOrder(id: number): Promise<void> {
    await this.delay();
    
    const index = this.orders.findIndex(order => order.id === id);
    if (index === -1) {
      throw new Error('订单不存在');
    }
    
    this.orders.splice(index, 1);
  }

  // 获取订单详情
  async getOrderById(id: number): Promise<Order> {
    await this.delay();
    
    const order = this.orders.find(o => o.id === id);
    if (!order) {
      throw new Error('订单不存在');
    }
    
    return order;
  }
}

// 导出服务实例
export const userService = new UserService();
export const orderService = new OrderService();`,F=()=>e.jsx(k,{title:"业务层封装",description:"学习如何在业务层封装请求逻辑，实现数据管理和业务规则的分离",overview:[{title:"核心概念",items:["业务层是连接UI层和数据层的中间层","负责处理业务逻辑和数据转换","提供统一的数据接口给UI层使用","管理应用状态和缓存策略"]},{title:"主要优势",items:["业务逻辑集中管理，便于维护","UI组件专注于展示，职责单一","数据处理逻辑可复用","便于单元测试和调试"]},{title:"适用场景",items:["复杂的数据处理和转换","多个组件共享相同业务逻辑","需要缓存和状态管理的场景","大型应用的架构设计"]},{title:"注意事项",items:["确保业务层与UI层解耦，便于维护和测试","合理处理异常和错误，避免影响用户体验","注意缓存失效和数据同步问题","避免在业务层中引入UI相关逻辑"]}],examples:[{title:"用户管理业务层",component:e.jsx(T,{}),description:"演示用户管理相关的业务逻辑封装，包括用户列表获取、用户创建、状态更新等操作",observationPoints:["观察业务层如何封装用户相关的CRUD操作","注意业务逻辑与UI展示的分离","查看错误处理和加载状态的管理","观察日志记录和操作反馈的实现"],keyPoints:["业务层方法使用async/await处理异步操作","统一的错误处理和日志记录机制","状态管理与UI更新的解耦","业务数据的模拟和Mock策略"],commonTraps:["在组件中直接调用API，缺少业务层抽象","业务逻辑散落在多个组件中，难以维护","缺少统一的错误处理机制","状态更新逻辑过于复杂，影响性能"],solutions:["创建专门的业务层服务类或Hook","使用统一的数据访问接口","实现全局的错误处理和日志系统","采用状态管理库优化数据流"],importantTips:["业务层应该独立于UI框架，便于测试和复用","合理使用缓存策略，避免重复请求","业务方法应该有清晰的输入输出定义","考虑使用TypeScript增强类型安全"],preCode:[{title:"Types",code:j}],codeExample:{title:"用户管理业务层演示",code:q}},{title:"订单管理业务层",component:e.jsx($,{}),description:"展示订单管理的业务逻辑实现，包括订单查询、状态更新、过滤等功能",observationPoints:["观察订单状态的业务规则实现","注意过滤和搜索逻辑的封装","查看订单状态变更的业务流程","观察数据展示和交互的分离"],keyPoints:["复杂业务规则的封装和管理","状态机模式在订单流程中的应用","数据过滤和排序的业务逻辑","业务操作的权限控制"],commonTraps:["订单状态变更缺少业务规则验证","过滤逻辑直接在UI组件中实现","缺少订单操作的权限检查","业务规则硬编码在组件中"],solutions:["实现订单状态机，规范状态变更流程","创建专门的过滤和搜索服务","集成权限系统，控制操作权限","使用配置化方式管理业务规则"],importantTips:["订单业务逻辑通常比较复杂，需要仔细设计","状态变更应该有明确的业务规则约束","考虑并发操作对订单状态的影响","业务操作应该有完整的审计日志"],preCode:[{title:"Types",code:j}],codeExample:{title:"订单管理业务层演示",code:P}}],tutorial:{concepts:["业务层是应用架构中的重要组成部分，负责处理业务逻辑","通过业务层可以实现数据访问、业务规则、状态管理的统一封装","业务层应该独立于UI框架，便于测试和维护","合理的业务层设计可以提高代码的可复用性和可维护性"],steps:["分析业务需求，识别核心业务实体和操作","设计业务层接口，定义输入输出数据结构","实现业务逻辑，包括数据处理、验证、转换等","集成数据访问层，处理与后端API的交互","添加错误处理、日志记录等横切关注点","编写单元测试，验证业务逻辑的正确性","在UI层集成业务层，实现数据绑定和交互"],tips:["业务层方法应该有清晰的职责边界，避免过度耦合","使用TypeScript定义业务数据模型，增强类型安全","合理使用缓存策略，提高应用性能","业务层应该处理所有可能的异常情况","考虑使用依赖注入，提高代码的可测试性"]},interview:{questions:[{question:"什么是业务层？它在应用架构中的作用是什么？",answer:"业务层是应用架构中连接UI层和数据层的中间层，主要负责处理业务逻辑、数据转换、状态管理等。它的作用包括：1）封装业务规则和逻辑；2）提供统一的数据接口；3）管理应用状态；4）处理数据验证和转换；5）实现横切关注点如日志、缓存等。"},{question:"如何设计一个好的业务层？",answer:"设计好的业务层需要考虑：1）单一职责原则，每个业务服务只处理特定领域的逻辑；2）接口清晰，输入输出明确定义；3）独立于UI框架，便于测试和复用；4）合理的错误处理机制；5）适当的缓存策略；6）良好的扩展性和可维护性；7）使用TypeScript增强类型安全。"},{question:"业务层与UI层应该如何交互？",answer:"业务层与UI层的交互应该遵循：1）UI层通过定义好的接口调用业务层方法；2）业务层返回标准化的数据结构；3）使用状态管理工具（如Redux、Zustand）管理共享状态；4）业务层不应该直接操作DOM或UI组件；5）通过回调函数或事件机制处理异步操作；6）UI层专注于展示，业务层专注于逻辑处理。"},{question:"在React中如何实现业务层？",answer:"在React中实现业务层的常见方式：1）自定义Hook：封装业务逻辑和状态管理；2）Service类：创建独立的业务服务类；3）Context API：提供全局的业务状态和方法；4）状态管理库：如Redux Toolkit、Zustand等；5）数据获取库：如React Query、SWR等。选择哪种方式取决于应用的复杂度和团队偏好。"}],keyPoints:["业务层是应用架构的核心，负责处理所有业务逻辑","良好的业务层设计可以提高代码的可维护性和可测试性","业务层应该独立于UI框架，便于复用和测试","合理的状态管理和缓存策略是业务层设计的重点","业务层需要处理错误、日志、权限等横切关注点"]},bestPractices:{dos:["将业务逻辑集中在业务层，保持UI组件的简洁","使用TypeScript定义清晰的业务数据模型","实现统一的错误处理和日志记录机制","合理使用缓存策略，避免重复的网络请求","为业务层方法编写完整的单元测试","使用依赖注入提高代码的可测试性","保持业务层方法的纯函数特性，便于测试"],donts:["不要在UI组件中直接处理复杂的业务逻辑","不要让业务层直接依赖UI框架或DOM操作","不要在业务层中硬编码UI相关的常量或配置","不要忽略错误处理和边界情况的处理","不要让业务层方法承担过多的职责","不要在没有缓存策略的情况下频繁调用API"],patterns:["Repository模式：封装数据访问逻辑","Service模式：封装业务逻辑和规则","Factory模式：创建复杂的业务对象","Observer模式：处理业务事件和通知","Strategy模式：处理不同的业务策略","Command模式：封装业务操作和撤销逻辑"]}});export{F as default};
