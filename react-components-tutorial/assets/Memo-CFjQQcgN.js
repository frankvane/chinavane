import{r as o,R as y,j as e}from"./index-H7t66yxh.js";import{C as k}from"./ComponentTemplate-bNJaV0ol.js";const S=`import React, { memo } from "react";
import RenderCounter from "./RenderCounter";

// 未优化的组件
const UnoptimizedComponent: React.FC<{ name: string; count: number }> = ({
  name,
  count,
}) => {
  console.log(\`\${name} 组件重新渲染\`);
  return (
    <div className="p-4 border border-gray-300 rounded">
      <RenderCounter name={name} />
      <h3 className="font-bold">{name}</h3>
      <p>计数: {count}</p>
    </div>
  );
};

// 使用React.memo优化的组件
const OptimizedComponent = memo<{ name: string; count: number }>(
  ({ name, count }) => {
    console.log(\`\${name} 组件重新渲染\`);
    return (
      <div className="p-4 border border-green-300 rounded">
        <RenderCounter name={name} />
        <h3 className="font-bold">{name}</h3>
        <p>计数: {count}</p>
      </div>
    );
  }
);

export { UnoptimizedComponent, OptimizedComponent };`,b=({name:n})=>{const[s,r]=o.useState(0);return y.useEffect(()=>{r(c=>c+1)},[]),e.jsxs("div",{className:"text-sm text-gray-600 mb-2",children:[n," 渲染次数: ",s]})},M=o.memo(({user:n,selected:s,onSelect:r,onEdit:c,onDelete:a})=>(console.log(`UserCard ${n.id} 重新渲染`),e.jsxs("div",{className:`p-4 border rounded ${s?"border-blue-500 bg-blue-50":"border-gray-200"}`,children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("input",{type:"checkbox",checked:s,onChange:m=>r(n.id,m.target.checked)}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-semibold",children:n.name}),e.jsx("p",{className:"text-sm text-gray-600",children:n.email}),e.jsxs("p",{className:"text-sm text-gray-600",children:["年龄: ",n.age]})]})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:()=>c(n),className:"px-3 py-1 text-sm bg-yellow-500 text-white rounded hover:bg-yellow-600",children:"编辑"}),e.jsx("button",{onClick:()=>a(n.id),className:"px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600",children:"删除"})]})]}),e.jsx(b,{name:`UserCard-${n.id}`})]}))),N=()=>{const[n,s]=o.useState([{id:1,name:"张三",email:"zhangsan@example.com",age:25},{id:2,name:"李四",email:"lisi@example.com",age:30},{id:3,name:"王五",email:"wangwu@example.com",age:28}]),[r,c]=o.useState(""),[a,m]=o.useState("name"),[i,l]=o.useState(new Set),p=o.useMemo(()=>(console.log("执行用户过滤和排序..."),n.filter(t=>t.name.toLowerCase().includes(r.toLowerCase())||t.email.toLowerCase().includes(r.toLowerCase())).sort((t,d)=>a==="name"?t.name.localeCompare(d.name):a==="email"?t.email.localeCompare(d.email):t.age-d.age)),[n,r,a]),x=o.useCallback((t,d)=>{l(u=>{const g=new Set(u);return d?g.add(t):g.delete(t),g})},[]),C=o.useCallback(t=>{console.log("编辑用户:",t.name)},[]),v=o.useCallback(t=>{s(d=>d.filter(u=>u.id!==t)),l(d=>{const u=new Set(d);return u.delete(t),u})},[]),f=o.useMemo(()=>i.size,[i]);return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex gap-4 mb-4",children:[e.jsx("input",{type:"text",value:r,onChange:t=>c(t.target.value),placeholder:"搜索用户...",className:"px-3 py-2 border border-gray-300 rounded"}),e.jsxs("select",{value:a,onChange:t=>m(t.target.value),className:"px-3 py-2 border border-gray-300 rounded",children:[e.jsx("option",{value:"name",children:"按姓名排序"}),e.jsx("option",{value:"email",children:"按邮箱排序"}),e.jsx("option",{value:"age",children:"按年龄排序"})]})]}),e.jsxs("div",{className:"text-sm text-gray-600 mb-2",children:["已选择 ",f," 个用户"]}),e.jsx("div",{className:"space-y-2",children:p.map(t=>e.jsx(M,{user:t,selected:i.has(t.id),onSelect:x,onEdit:C,onDelete:v},t.id))})]})},R=`import React, { useCallback, useMemo, useState } from "react";
import UserCardMemo, { User } from "./UserCard";

// 综合优化示例
const ComprehensiveExample: React.FC = () => {
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: "张三", email: "zhangsan@example.com", age: 25 },
    { id: 2, name: "李四", email: "lisi@example.com", age: 30 },
    { id: 3, name: "王五", email: "wangwu@example.com", age: 28 },
  ]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState<"name" | "email" | "age">("name");
  const [selectedUsers, setSelectedUsers] = useState<Set<number>>(new Set());

  // 使用useMemo优化搜索和排序
  const filteredAndSortedUsers = useMemo(() => {
    console.log("执行用户过滤和排序...");
    return users
      .filter(
        (user) =>
          user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.email.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .sort((a, b) => {
        if (sortBy === "name") return a.name.localeCompare(b.name);
        if (sortBy === "email") return a.email.localeCompare(b.email);
        return a.age - b.age;
      });
  }, [users, searchTerm, sortBy]);

  // 使用useCallback优化回调函数
  const handleUserSelect = useCallback((userId: number, selected: boolean) => {
    setSelectedUsers((prev) => {
      const newSet = new Set(prev);
      if (selected) {
        newSet.add(userId);
      } else {
        newSet.delete(userId);
      }
      return newSet;
    });
  }, []);

  const handleUserEdit = useCallback((user: User) => {
    console.log("编辑用户:", user.name);
  }, []);

  const handleUserDelete = useCallback((userId: number) => {
    setUsers((prev) => prev.filter((user) => user.id !== userId));
    setSelectedUsers((prev) => {
      const newSet = new Set(prev);
      newSet.delete(userId);
      return newSet;
    });
  }, []);

  const selectedCount = useMemo(() => {
    return selectedUsers.size;
  }, [selectedUsers]);

  return (
    <div className="space-y-4">
      <div className="flex gap-4 mb-4">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="搜索用户..."
          className="px-3 py-2 border border-gray-300 rounded"
        />
        <select
          value={sortBy}
          onChange={(e) =>
            setSortBy(e.target.value as "name" | "email" | "age")
          }
          className="px-3 py-2 border border-gray-300 rounded"
        >
          <option value="name">按姓名排序</option>
          <option value="email">按邮箱排序</option>
          <option value="age">按年龄排序</option>
        </select>
      </div>

      <div className="text-sm text-gray-600 mb-2">
        已选择 {selectedCount} 个用户
      </div>

      <div className="space-y-2">
        {filteredAndSortedUsers.map((user) => (
          <UserCardMemo
            key={user.id}
            user={user}
            selected={selectedUsers.has(user.id)}
            onSelect={handleUserSelect}
            onEdit={handleUserEdit}
            onDelete={handleUserDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default ComprehensiveExample;`,j=({name:n,count:s})=>(console.log(`${n} 组件重新渲染`),e.jsxs("div",{className:"p-4 border border-gray-300 rounded",children:[e.jsx(b,{name:n}),e.jsx("h3",{className:"font-bold",children:n}),e.jsxs("p",{children:["计数: ",s]})]})),U=o.memo(({name:n,count:s})=>(console.log(`${n} 组件重新渲染`),e.jsxs("div",{className:"p-4 border border-green-300 rounded",children:[e.jsx(b,{name:n}),e.jsx("h3",{className:"font-bold",children:n}),e.jsxs("p",{children:["计数: ",s]})]}))),T=()=>{const[n,s]=o.useState(0),[r,c]=o.useState(0);return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex gap-4 mb-4",children:[e.jsxs("button",{onClick:()=>s(a=>a+1),className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600",children:["无关更新 (",n,")"]}),e.jsxs("button",{onClick:()=>c(a=>a+1),className:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600",children:["更新计数 (",r,")"]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsx(j,{name:"普通组件",count:r}),e.jsx(U,{name:"Memo组件",count:r})]})]})},h=`import React, { useState } from "react";\r
import { UnoptimizedComponent, OptimizedComponent } from "./BasicComponents";\r
\r
// React.memo基础用法示例\r
const MemoBasicExample: React.FC = () => {\r
  const [unrelatedState, setUnrelatedState] = useState(0);\r
  const [count, setCount] = useState(0);\r
\r
  return (\r
    <div className="space-y-4">\r
      <div className="flex gap-4 mb-4">\r
        <button\r
          onClick={() => setUnrelatedState((prev) => prev + 1)}\r
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"\r
        >\r
          无关更新 ({unrelatedState})\r
        </button>\r
        <button\r
          onClick={() => setCount((prev) => prev + 1)}\r
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"\r
        >\r
          更新计数 ({count})\r
        </button>\r
      </div>\r
\r
      <div className="grid grid-cols-2 gap-4">\r
        <UnoptimizedComponent name="普通组件" count={count} />\r
        <OptimizedComponent name="Memo组件" count={count} />\r
      </div>\r
    </div>\r
  );\r
};\r
\r
export default MemoBasicExample;`,w=`import React, { useState } from "react";

// 渲染计数器组件
interface RenderCounterProps {
  name: string;
}

const RenderCounter: React.FC<RenderCounterProps> = ({ name }) => {
  const [count, setCount] = useState(0);

  React.useEffect(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div className="text-sm text-gray-600 mb-2">
      {name} 渲染次数: {count}
    </div>
  );
};

export default RenderCounter;`,E=`import React, { memo } from "react";\r
import RenderCounter from "./RenderCounter";\r
\r
// 示例组件定义\r
interface TodoItem {\r
  id: number;\r
  text: string;\r
  completed: boolean;\r
}\r
\r
interface TodoItemProps {\r
  todo: TodoItem;\r
  onToggle: (id: number) => void;\r
}\r
\r
// memo优化的TodoItem组件\r
const TodoItemMemo = memo<TodoItemProps>(({ todo, onToggle }) => {\r
  console.log(\`TodoItem \${todo.id} 重新渲染\`);\r
  return (\r
    <div className="flex items-center gap-2 p-2 border border-gray-200 rounded">\r
      <input\r
        type="checkbox"\r
        checked={todo.completed}\r
        onChange={() => onToggle(todo.id)}\r
      />\r
      <span className={todo.completed ? "line-through text-gray-500" : ""}>\r
        {todo.text}\r
      </span>\r
      <RenderCounter name={\`Todo-\${todo.id}\`} />\r
    </div>\r
  );\r
});\r
\r
export default TodoItemMemo;\r
export type { TodoItem, TodoItemProps };`,P=o.memo(({todo:n,onToggle:s})=>(console.log(`TodoItem ${n.id} 重新渲染`),e.jsxs("div",{className:"flex items-center gap-2 p-2 border border-gray-200 rounded",children:[e.jsx("input",{type:"checkbox",checked:n.completed,onChange:()=>s(n.id)}),e.jsx("span",{className:n.completed?"line-through text-gray-500":"",children:n.text}),e.jsx(b,{name:`Todo-${n.id}`})]}))),I=()=>{const[n,s]=o.useState([{id:1,text:"学习React",completed:!1},{id:2,text:"学习TypeScript",completed:!0},{id:3,text:"学习性能优化",completed:!1}]),[r,c]=o.useState(0),a=o.useCallback(m=>{s(i=>i.map(l=>l.id===m?{...l,completed:!l.completed}:l))},[]);return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("button",{onClick:()=>c(m=>m+1),className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mb-4",children:["无关更新 (",r,")"]}),e.jsx("div",{className:"space-y-2",children:n.map(m=>e.jsx(P,{todo:m,onToggle:a},m.id))})]})},z=`import React, { useCallback, useState } from "react";
import TodoItemMemo, { TodoItem } from "./TodoItem";

// useCallback示例
const UseCallbackExample: React.FC = () => {
  const [todos, setTodos] = useState<TodoItem[]>([
    { id: 1, text: "学习React", completed: false },
    { id: 2, text: "学习TypeScript", completed: true },
    { id: 3, text: "学习性能优化", completed: false },
  ]);
  const [count, setCount] = useState(0);

  // 使用useCallback缓存函数引用
  const handleToggle = useCallback((id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }, []);

  return (
    <div className="space-y-4">
      <button
        onClick={() => setCount((prev) => prev + 1)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mb-4"
      >
        无关更新 ({count})
      </button>

      <div className="space-y-2">
        {todos.map((todo) => (
          <TodoItemMemo key={todo.id} todo={todo} onToggle={handleToggle} />
        ))}
      </div>
    </div>
  );
};

export default UseCallbackExample;`,B=()=>{const[n]=o.useState(Array.from({length:1e3},(l,p)=>({id:p,value:Math.random()}))),[s,r]=o.useState(""),[c,a]=o.useState(0),m=(l,p)=>(console.log("执行昂贵计算..."),l.filter(x=>x.value.toString().includes(p)).reduce((x,C)=>x+C.value,0)),i=o.useMemo(()=>m(n,s),[n,s]);return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex gap-4 mb-4",children:[e.jsx("input",{type:"text",value:s,onChange:l=>r(l.target.value),placeholder:"过滤条件...",className:"px-3 py-2 border border-gray-300 rounded"}),e.jsxs("button",{onClick:()=>a(l=>l+1),className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600",children:["无关更新 (",c,")"]})]}),e.jsxs("div",{className:"p-4 bg-gray-100 rounded",children:[e.jsxs("p",{children:["计算结果: ",i.toFixed(4)]}),e.jsx("p",{className:"text-sm text-gray-600",children:"打开控制台查看计算执行情况"})]})]})},D=`import React, { useMemo, useState } from "react";

// useMemo示例
const UseMemoExample: React.FC = () => {
  const [items] = useState(
    Array.from({ length: 1000 }, (_, i) => ({ id: i, value: Math.random() }))
  );
  const [filter, setFilter] = useState("");
  const [count, setCount] = useState(0);

  // 昂贵的计算
  const expensiveCalculation = (items: typeof items, filter: string) => {
    console.log("执行昂贵计算...");
    return items
      .filter((item) => item.value.toString().includes(filter))
      .reduce((sum, item) => sum + item.value, 0);
  };

  // 使用useMemo缓存计算结果
  const memoizedResult = useMemo(() => {
    return expensiveCalculation(items, filter);
  }, [items, filter]);

  return (
    <div className="space-y-4">
      <div className="flex gap-4 mb-4">
        <input
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="过滤条件..."
          className="px-3 py-2 border border-gray-300 rounded"
        />
        <button
          onClick={() => setCount((prev) => prev + 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          无关更新 ({count})
        </button>
      </div>

      <div className="p-4 bg-gray-100 rounded">
        <p>计算结果: {memoizedResult.toFixed(4)}</p>
        <p className="text-sm text-gray-600">打开控制台查看计算执行情况</p>
      </div>
    </div>
  );
};

export default UseMemoExample;`,$=`import React, { memo } from "react";
import RenderCounter from "./RenderCounter";

interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

interface UserCardProps {
  user: User;
  selected: boolean;
  onSelect: (id: number, selected: boolean) => void;
  onEdit: (user: User) => void;
  onDelete: (id: number) => void;
}

// memo优化的用户卡片组件
const UserCardMemo = memo<UserCardProps>(
  ({ user, selected, onSelect, onEdit, onDelete }) => {
    console.log(\`UserCard \${user.id} 重新渲染\`);

    return (
      <div
        className={\`p-4 border rounded \${
          selected ? "border-blue-500 bg-blue-50" : "border-gray-200"
        }\`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={selected}
              onChange={(e) => onSelect(user.id, e.target.checked)}
            />
            <div>
              <h3 className="font-semibold">{user.name}</h3>
              <p className="text-sm text-gray-600">{user.email}</p>
              <p className="text-sm text-gray-600">年龄: {user.age}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => onEdit(user)}
              className="px-3 py-1 text-sm bg-yellow-500 text-white rounded hover:bg-yellow-600"
            >
              编辑
            </button>
            <button
              onClick={() => onDelete(user.id)}
              className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600"
            >
              删除
            </button>
          </div>
        </div>
        <RenderCounter name={\`UserCard-\${user.id}\`} />
      </div>
    );
  }
);

export default UserCardMemo;
export type { User, UserCardProps };`,F={title:"React.memo 性能优化",subtitle:"React.memo Performance Optimization",description:"学习如何使用 React.memo、useMemo 和 useCallback 进行 React 应用性能优化",overview:[{title:"核心概念",items:["React.memo 是一个高阶组件，用于优化函数组件的性能","通过对组件的 props 进行浅比较，只有当 props 发生变化时才重新渲染组件","useMemo 缓存计算结果，避免昂贵计算的重复执行","useCallback 缓存函数引用，避免因函数重新创建导致的子组件重新渲染"]},{title:"主要优势",items:["减少不必要的组件重新渲染","提升应用整体性能","优化用户体验，减少界面卡顿","降低 CPU 使用率"]},{title:"适用场景",items:["纯展示组件，props 变化频率较低","渲染开销较大的组件","父组件频繁更新但子组件 props 相对稳定","列表渲染中的单个项目组件"]},{title:"注意事项",items:["不要过度使用，可能带来额外的比较开销","注意对象和数组 props 的引用比较问题","需要配合 useMemo 和 useCallback 使用才能发挥最大效果","对于 props 经常变化的组件，memo 可能不会带来性能提升"]}],examples:[{title:"React.memo 基础用法",component:e.jsx(T,{}),code:{"RenderCounter.tsx":w,"BasicComponents.tsx":S,"MemoBasicExample.tsx":h},description:"演示 React.memo 如何避免不必要的组件重新渲染",observationPoints:["点击'无关更新'按钮时，只有普通组件会重新渲染（渲染次数增加），memo组件会跳过渲染（渲染次数不变）","点击'更新计数'按钮时，两个组件都会重新渲染，因为props发生了变化","这展示了React.memo的性能优化效果：当props没有变化时，memo组件会跳过重新渲染"],keyPoints:["React.memo会对props进行浅比较","只有props发生变化时才会重新渲染","可以显著减少不必要的渲染次数"],commonTraps:["在JSX中直接创建对象或数组","在render方法中创建新的函数","不正确使用内联样式对象"],solutions:["使用useMemo缓存复杂对象","使用useCallback缓存函数","将对象定义在组件外部"],importantTips:["左侧组件每次都会重新渲染，因为父组件状态变化","右侧组件使用了memo，只有在props变化时才会重新渲染","打开控制台可以看到渲染日志"],codeExample:{title:"React.memo 基础用法",code:h,language:"tsx"}},{title:"useMemo 优化昂贵计算",component:e.jsx(B,{}),codeExample:{title:"useMemo 优化昂贵计算",code:D,language:"tsx"},description:"演示如何使用 useMemo 缓存计算结果，避免重复执行昂贵的计算",observationPoints:["在过滤条件输入框中输入内容时，会触发计算重新执行","点击'无关更新'按钮时，计算不会重新执行，因为依赖项没有变化","打开控制台可以看到'执行昂贵计算...'的日志，观察计算执行时机"],keyPoints:["useMemo缓存计算结果，只有依赖项变化时才重新计算","适用于计算开销较大的场景","依赖数组决定何时重新计算"],commonTraps:["依赖数组设置不正确","对简单计算使用useMemo，可能带来额外开销","在useMemo中执行副作用操作"],solutions:["仔细检查依赖数组，确保包含所有相关变量","只对真正昂贵的计算使用useMemo","将副作用操作移到useEffect中"],importantTips:["useMemo的第一个参数是计算函数，第二个参数是依赖数组","当依赖项没有变化时，直接返回缓存的结果","适合用于过滤、排序、格式化等计算密集型操作"]},{title:"useCallback 优化函数引用",component:e.jsx(I,{}),preCode:[{title:"TodoItem",code:E}],codeExample:{title:"useCallback 优化函数引用",code:z},description:"演示如何使用 useCallback 缓存函数引用，避免因函数重新创建导致的子组件重新渲染",observationPoints:["点击'无关更新'按钮时，TodoItem组件不会重新渲染","点击复选框切换完成状态时，只有对应的TodoItem会重新渲染","打开控制台查看组件渲染日志，观察优化效果"],keyPoints:["useCallback缓存函数引用，避免每次渲染都创建新函数","配合memo使用可以避免子组件不必要的重新渲染","依赖数组决定何时重新创建函数"],commonTraps:["对所有函数都使用useCallback","依赖数组设置错误","在useCallback中使用过时的闭包变量"],solutions:["只对传递给memo组件的函数使用useCallback","正确设置依赖数组","使用函数式更新避免闭包问题"],importantTips:["useCallback返回的是函数本身，useMemo返回的是函数执行结果","useCallback(fn, deps) 等价于 useMemo(() => fn, deps)","主要用于优化传递给子组件的回调函数"]},{title:"综合优化策略",component:e.jsx(N,{}),preCode:[{title:"UserCard",code:$}],codeExample:{title:"综合优化策略",code:R},description:"在实际项目中，通常需要结合多种优化技术来达到最佳性能",observationPoints:["在搜索框中输入内容时，会触发用户列表的过滤和排序","改变排序方式时，会重新执行排序逻辑","选择/取消选择用户时，只有对应的UserCard会重新渲染","打开控制台查看优化效果和渲染日志"],keyPoints:["useMemo缓存搜索和排序结果","useCallback缓存事件处理函数","memo优化UserCard组件","合理的依赖数组设置"],commonTraps:["传递不稳定的对象引用给子组件","在渲染过程中创建新的函数","忘记对列表项组件使用memo"],solutions:["使用useMemo缓存传递给子组件的对象","使用useCallback缓存事件处理函数","对列表项组件使用memo优化"],importantTips:["这是一个完整的性能优化示例，展示了多种技术的组合使用","注意观察控制台日志，了解各个组件的渲染情况","在实际项目中，应该根据具体情况选择合适的优化策略"]}],tutorial:{concepts:["React.memo 是一个高阶组件，用于优化函数组件的性能","useMemo 用于缓存计算结果，避免在每次渲染时重复执行昂贵的计算","useCallback 用于缓存函数引用，避免因函数重新创建导致的子组件重新渲染","这些优化技术都基于浅比较（shallow comparison）","过度使用这些优化可能会适得其反，需要根据实际情况权衡"],steps:["识别性能瓶颈：使用 React DevTools Profiler 找出渲染缓慢的组件","应用 React.memo：对纯函数组件使用 memo 包装，避免不必要的重新渲染","优化昂贵计算：使用 useMemo 缓存复杂计算的结果","稳定函数引用：使用 useCallback 缓存传递给子组件的函数","验证优化效果：再次使用 Profiler 验证性能改进"],tips:["不要过早优化，先确保功能正确性","使用 React DevTools Profiler 来识别真正的性能问题","memo、useMemo 和 useCallback 都有自己的开销，不要滥用","依赖数组要准确，遗漏依赖可能导致 bug","对于简单的计算，直接计算可能比 useMemo 更快","考虑使用 React.lazy 和 Suspense 进行代码分割"]},interview:{questions:[{question:"React.memo的工作原理是什么？什么时候应该使用它？",answer:`React.memo是一个高阶组件，它通过对组件的props进行浅比较来决定是否重新渲染组件。工作原理：

1. **浅比较机制**：React.memo默认使用Object.is()进行浅比较，比较props的第一层属性
2. **渲染决策**：如果props没有变化，返回上次渲染的结果；如果有变化，重新渲染组件
3. **自定义比较**：可以提供第二个参数作为自定义比较函数

**使用场景**：
- 纯展示组件，props变化频率低
- 渲染开销较大的组件
- 父组件频繁更新但子组件props相对稳定

**注意事项**：
- 对于props经常变化的组件，memo可能带来额外开销
- 对象和数组props需要注意引用比较问题`},{question:"useMemo和useCallback的区别是什么？如何选择使用？",answer:`useMemo和useCallback都是用于性能优化的Hook，但用途不同：

**useMemo**：
- 缓存计算结果（值）
- 用于避免昂贵的计算重复执行
- 返回计算后的值

**useCallback**：
- 缓存函数引用
- 用于避免函数重新创建导致的子组件重新渲染
- 返回函数本身

**选择原则**：
- 需要缓存计算结果时使用useMemo
- 需要稳定函数引用时使用useCallback
- useCallback(fn, deps) 等价于 useMemo(() => fn, deps)

**实际应用**：
\`\`\`javascript
// useMemo - 缓存计算结果
const expensiveValue = useMemo(() => {
  return heavyCalculation(data);
}, [data]);

// useCallback - 缓存函数引用
const handleClick = useCallback(() => {
  // 处理逻辑
}, [dependency]);
\`\`\``},{question:"如何避免React性能优化中的常见陷阱？",answer:`React性能优化中的常见陷阱及避免方法：

**1. 过度优化**
- 陷阱：对所有组件都使用memo，对所有函数都使用useCallback
- 避免：只在确实需要时使用，通过性能分析工具验证效果

**2. 依赖数组错误**
- 陷阱：遗漏依赖项或添加不必要的依赖项
- 避免：使用ESLint规则，仔细检查依赖关系

**3. 引用类型props问题**
- 陷阱：传递对象或数组字面量作为props
- 避免：使用useMemo缓存对象，或将对象提取到组件外部

**4. memo比较函数错误**
- 陷阱：自定义比较函数逻辑错误或过于复杂
- 避免：保持比较函数简单，返回true表示props相等

**5. 忽略子组件优化**
- 陷阱：只优化父组件，忽略子组件的优化
- 避免：系统性地分析组件树，从叶子节点开始优化

**最佳实践**：
- 先测量，后优化
- 使用React DevTools Profiler
- 关注用户体验指标
- 避免premature optimization`},{question:"在什么情况下React.memo可能不起作用？如何解决？",answer:`React.memo不起作用的常见情况及解决方案：

**1. 对象/数组props引用变化**
\`\`\`javascript
// 问题：每次渲染都创建新对象
const Parent = () => {
  return <Child user={{ name: 'John', age: 25 }} />; // 新对象引用
};

// 解决：使用useMemo缓存对象
const Parent = () => {
  const user = useMemo(() => ({ name: 'John', age: 25 }), []);
  return <Child user={user} />;
};
\`\`\`

**2. 函数props引用变化**
\`\`\`javascript
// 问题：每次渲染都创建新函数
const Parent = () => {
  return <Child onClick={() => console.log('click')} />; // 新函数引用
};

// 解决：使用useCallback缓存函数
const Parent = () => {
  const handleClick = useCallback(() => console.log('click'), []);
  return <Child onClick={handleClick} />;
};
\`\`\`

**3. children prop变化**
\`\`\`javascript
// 问题：children每次都是新的React元素
const Parent = () => {
  return (
    <MemoChild>
      <div>Content</div> {/* 新的React元素 */}
    </MemoChild>
  );
};

// 解决：将children提取为稳定引用
const stableContent = <div>Content</div>;
const Parent = () => {
  return <MemoChild>{stableContent}</MemoChild>;
};
\`\`\`

**4. 深层对象属性变化**
\`\`\`javascript
// 问题：浅比较无法检测深层变化
const user = { profile: { name: 'John' } };
user.profile.name = 'Jane'; // 引用相同但内容变化

// 解决：使用自定义比较函数
const DeepMemoChild = memo(Child, (prevProps, nextProps) => {
  return isEqual(prevProps.user, nextProps.user); // 深度比较
});
\`\`\``}],keyPoints:["React.memo通过浅比较props来决定是否重新渲染组件","useMemo用于缓存计算结果，useCallback用于缓存函数引用","对象和数组props的引用变化会导致memo失效","正确的依赖数组设置对优化效果至关重要","过度优化可能带来负面效果，需要基于实际测量进行优化","组合使用多种优化技术可以达到最佳性能效果"]},bestPractices:{dos:["使用React DevTools Profiler分析性能瓶颈后再进行优化","对纯展示组件和渲染开销大的组件使用React.memo","对昂贵的计算使用useMemo缓存结果","对传递给memo组件的回调函数使用useCallback","正确设置依赖数组，包含所有相关变量","使用useMemo缓存传递给子组件的对象和数组","保持自定义比较函数简单高效","定期检查优化效果，确保性能确实得到提升"],donts:["不要对所有组件都使用memo，避免过度优化","不要对props频繁变化的组件使用memo","不要对简单计算使用useMemo，可能带来额外开销","不要对所有函数都使用useCallback","不要在useMemo中执行副作用操作","不要忽略依赖数组，避免闭包陷阱","不要在render中创建新的对象和函数引用","不要进行过早优化，先确保功能正确"],patterns:["组合优化模式：结合memo、useMemo、useCallback进行综合优化","依赖提升模式：将稳定的值提升到组件外部或使用useMemo缓存","回调稳定化模式：使用useCallback稳定传递给子组件的函数引用","计算缓存模式：使用useMemo缓存复杂的数据处理结果","条件优化模式：根据组件特性选择合适的优化策略","渐进优化模式：从叶子节点开始，逐步向上优化组件树","测量驱动模式：基于实际性能测量结果进行优化决策"]}},q=()=>e.jsx(k,{...F});export{q as default};
