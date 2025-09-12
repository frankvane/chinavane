const n=`# Chapter 2: Zustand 进阶应用面试题

## 基础概念题

### 1. 什么是选择器优化？为什么重要？

**答案：**
选择器优化是通过精确订阅和稳定引用来减少不必要的组件重渲染的技术。

**核心原理：**
- 选择器应返回原始值或稳定引用，避免新对象/新数组
- 组件拆分 + 切片订阅，减少不相干的重渲染
- 对元组选择可使用浅比较（useShallow）降低渲染频率

**代码示例：**
\`\`\`typescript
// ❌ 错误：返回新对象
const selectUserObj = (state) => ({ name: state.user.name, age: state.user.age });

// ✅ 正确：返回原始值
const selectUserName = (state) => state.user.name;
const selectUserAge = (state) => state.user.age;

// 组件中使用
const UserDisplay = () => {
  const name = useStore(selectUserName);
  const age = useStore(selectUserAge);
  return <div>{name} - {age}</div>;
};
\`\`\`

### 2. 如何实现跨页面状态共享？

**答案：**
通过全局单例 store 实现跨页面共享，局部 store 实现组件隔离。

**实现方式：**
\`\`\`typescript
// 全局 store（单例导出）
export const useSharedCounter = create(
  devtools<SharedCounterState>(
    (set) => ({
      count: 0,
      step: 1,
      increment: () => set((s) => ({ count: s.count + s.step })),
      decrement: () => set((s) => ({ count: s.count - s.step })),
      setStep: (n) => set({ step: n }),
    }),
    { name: "GlobalSharedCounter" }
  )
);

// 局部 store（工厂函数）
const useLocalCounter = () => {
  return React.useMemo(
    () => create<CounterState>((set) => ({
      count: 0,
      increment: () => set((s) => ({ count: s.count + 1 })),
    })),
    []
  );
};
\`\`\`

### 3. 什么是嵌套状态的不可变更新？

**答案：**
嵌套状态的不可变更新是指在更新深层对象或数组时，创建新的引用而不是直接修改原有数据。

**对象更新：**
\`\`\`typescript
// 更新嵌套对象
const updateProfile = (partial: Partial<Profile>) => 
  set((state) => ({
    profile: { ...state.profile, ...partial }
  }));

// 更新深层嵌套
const updateAddress = (partial: Partial<Address>) => 
  set((state) => ({
    profile: {
      ...state.profile,
      address: { ...state.profile.address, ...partial }
    }
  }));
\`\`\`

**数组更新：**
\`\`\`typescript
// 添加项目
const addTodo = (text: string) => 
  set((state) => ({
    todos: [...state.todos, { id: Date.now(), text, done: false }]
  }));

// 更新项目
const toggleTodo = (id: number) => 
  set((state) => ({
    todos: state.todos.map(todo => 
      todo.id === id ? { ...todo, done: !todo.done } : todo
    )
  }));

// 删除项目
const removeTodo = (id: number) => 
  set((state) => ({
    todos: state.todos.filter(todo => todo.id !== id)
  }));
\`\`\`

## 进阶概念题

### 4. 如何使用 subscribe 进行状态监听？

**答案：**
subscribe 用于在组件外监听 store 变化，适合横切关注点和非 UI 副作用。

**基础用法：**
\`\`\`typescript
// 在组件中订阅
React.useEffect(() => {
  const unsub = useStore.subscribe((state, prev) => {
    if (state.connected !== prev.connected) {
      console.log('连接状态变化:', prev.connected, '->', state.connected);
    }
  });
  return () => unsub();
}, []);
\`\`\`

**选择性订阅：**
\`\`\`typescript
// 只监听特定字段变化
React.useEffect(() => {
  const unsub = useStore.subscribe((state, prev) => {
    const newLength = state.messages.length;
    const oldLength = prev.messages.length;
    if (newLength !== oldLength) {
      console.log('[SUBSCRIBE] 消息数量变化:', oldLength, '->', newLength);
    }
  });
  return () => unsub();
}, []);
\`\`\`

### 5. 如何处理异步 action 中的竞态条件？

**答案：**
使用 AbortController 实现请求中断与竞态控制，防止旧请求覆盖新数据。

**实现示例：**
\`\`\`typescript
interface UsersState {
  users: User[];
  loading: boolean;
  error: string | null;
  abortController: AbortController | null;
  fetchUsers: () => Promise<void>;
  cancelOngoing: () => void;
}

const useUsersStore = create<UsersState>((set, get) => ({
  users: [],
  loading: false,
  error: null,
  abortController: null,

  fetchUsers: async () => {
    // 取消之前的请求
    const { abortController: prev } = get();
    if (prev) {
      prev.abort();
    }

    const controller = new AbortController();
    set({ loading: true, error: null, abortController: controller });

    try {
      const response = await fetch('/api/users', {
        signal: controller.signal
      });
      const users = await response.json();
      set({ users, loading: false, abortController: null });
    } catch (error) {
      if (error.name !== 'AbortError') {
        set({ error: error.message, loading: false, abortController: null });
      }
    }
  },

  cancelOngoing: () => {
    const { abortController } = get();
    if (abortController) {
      abortController.abort();
      set({ loading: false, abortController: null });
    }
  }
}));
\`\`\`

### 6. 如何使用 useShallow 进行浅比较优化？

**答案：**
useShallow 适合对少量原始字段聚合的订阅，通过浅比较减少渲染次数。

**使用示例：**
\`\`\`typescript
import { useShallow } from 'zustand/react/shallow';

const ShallowDemo = () => {
  // 使用 useShallow 进行浅比较
  const [count, step] = useStore(
    useShallow((state) => [state.count, state.step])
  );

  return (
    <div>
      <div>Count: {count}</div>
      <div>Step: {step}</div>
    </div>
  );
};
\`\`\`

**注意事项：**
- 仅适用于原始值的浅层比较
- 避免在元组中包含新对象/数组
- 使用 useCallback 稳定 selector 函数

## 实践应用题

### 7. 如何设计一个支持外部数据源推送的 store？

**答案：**
将外部源逻辑放在组件/服务层，store 提供纯动作接口。

**实现示例：**
\`\`\`typescript
// Store 定义
interface FeedState {
  messages: FeedMessage[];
  connected: boolean;
  connect: () => void;
  disconnect: () => void;
  pushMessage: (message: FeedMessage) => void;
  clear: () => void;
}

const useFeedStore = create<FeedState>((set) => ({
  messages: [],
  connected: false,
  
  connect: () => set({ connected: true }),
  disconnect: () => set({ connected: false }),
  
  pushMessage: (message) => set((state) => ({
    messages: [...state.messages.slice(-19), message] // 限制长度
  })),
  
  clear: () => set({ messages: [] })
}));

// 组件中处理外部源
const ExternalSourceDemo = () => {
  const connected = useFeedStore(state => state.connected);
  const pushMessage = useFeedStore(state => state.pushMessage);
  
  React.useEffect(() => {
    if (!connected) return;
    
    const interval = setInterval(() => {
      pushMessage({
        id: Date.now(),
        content: \`消息 \${Date.now()}\`,
        timestamp: new Date().toLocaleTimeString()
      });
    }, 2000);
    
    return () => clearInterval(interval);
  }, [connected, pushMessage]);
  
  // ... 渲染逻辑
};
\`\`\`

### 8. 如何实现多 store 的联动？

**答案：**
将联动逻辑放在组件/服务层，避免 store 互相引用导致耦合。

**实现示例：**
\`\`\`typescript
// 用户 store
const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (user) => set({ user })
}));

// 购物车 store
const useCartStore = create<CartState>((set) => ({
  items: [],
  clearCart: () => set({ items: [] }),
  addItem: (item) => set((state) => ({ 
    items: [...state.items, item] 
  }))
}));

// 在组件中处理联动
const UserProfile = () => {
  const user = useUserStore(state => state.user);
  const clearCart = useCartStore(state => state.clearCart);
  const setUser = useUserStore(state => state.setUser);
  
  const handleLogout = () => {
    setUser(null);  // 清除用户信息
    clearCart();    // 清空购物车
  };
  
  return (
    <div>
      {user ? (
        <button onClick={handleLogout}>退出登录</button>
      ) : (
        <div>请登录</div>
      )}
    </div>
  );
};
\`\`\`

## 问题排查题

### 9. 为什么组件频繁重渲染？如何排查和优化？

**答案：**
组件频繁重渲染通常由选择器返回不稳定引用导致。

**排查步骤：**
1. 检查选择器是否返回新对象/数组
2. 使用 React DevTools Profiler 分析渲染次数
3. 检查是否订阅了过多字段

**优化方案：**
\`\`\`typescript
// ❌ 问题：每次返回新对象
const selectUser = (state) => ({
  name: state.user.name,
  age: state.user.age
});

// ✅ 解决：拆分为原始值选择器
const selectUserName = (state) => state.user.name;
const selectUserAge = (state) => state.user.age;

// ✅ 或使用 useShallow
const [name, age] = useStore(
  useShallow((state) => [state.user.name, state.user.age])
);
\`\`\`

### 10. 异步请求中如何避免内存泄漏？

**答案：**
通过正确清理 AbortController、定时器和订阅来避免内存泄漏。

**解决方案：**
\`\`\`typescript
// 在 store 中正确清理
const useAsyncStore = create<AsyncState>((set, get) => ({
  data: null,
  loading: false,
  abortController: null,
  
  fetchData: async () => {
    // 清理之前的请求
    const { abortController: prev } = get();
    if (prev) {
      prev.abort();
    }
    
    const controller = new AbortController();
    set({ loading: true, abortController: controller });
    
    try {
      const response = await fetch('/api/data', {
        signal: controller.signal
      });
      const data = await response.json();
      set({ data, loading: false, abortController: null });
    } catch (error) {
      if (error.name !== 'AbortError') {
        set({ loading: false, abortController: null });
      }
    }
  },
  
  cleanup: () => {
    const { abortController } = get();
    if (abortController) {
      abortController.abort();
    }
    set({ abortController: null, loading: false });
  }
}));

// 在组件中清理
const AsyncComponent = () => {
  const cleanup = useAsyncStore(state => state.cleanup);
  
  React.useEffect(() => {
    return () => {
      cleanup(); // 组件卸载时清理
    };
  }, [cleanup]);
  
  // ... 其他逻辑
};
\`\`\`

## 最佳实践题

### 11. 如何组织大型应用的 store 结构？

**答案：**
按领域拆分多个 store，避免单一巨大的 store。

**组织结构：**
\`\`\`typescript
// stores/user.ts
export const useUserStore = create<UserState>((set) => ({
  user: null,
  login: async (credentials) => { /* ... */ },
  logout: () => set({ user: null })
}));

// stores/cart.ts
export const useCartStore = create<CartState>((set) => ({
  items: [],
  addItem: (item) => { /* ... */ },
  removeItem: (id) => { /* ... */ }
}));

// stores/index.ts
export { useUserStore } from './user';
export { useCartStore } from './cart';
export { useProductStore } from './product';
\`\`\`

### 12. 如何为 store 编写单元测试？

**答案：**
直接测试 store 的状态变化和 action 执行结果。

**测试示例：**
\`\`\`typescript
import { act, renderHook } from '@testing-library/react';
import { useCounterStore } from './counterStore';

describe('CounterStore', () => {
  beforeEach(() => {
    // 重置 store 状态
    useCounterStore.setState({ count: 0, step: 1 });
  });
  
  it('should increment count by step', () => {
    const { result } = renderHook(() => useCounterStore());
    
    act(() => {
      result.current.increment();
    });
    
    expect(result.current.count).toBe(1);
  });
  
  it('should update step', () => {
    const { result } = renderHook(() => useCounterStore());
    
    act(() => {
      result.current.setStep(5);
    });
    
    expect(result.current.step).toBe(5);
    
    act(() => {
      result.current.increment();
    });
    
    expect(result.current.count).toBe(5);
  });
});
\`\`\`

### 13. 如何实现 store 的持久化？

**答案：**
使用 persist 中间件实现自动持久化到 localStorage。

**实现示例：**
\`\`\`typescript
import { persist } from 'zustand/middleware';

const usePersistedStore = create(
  persist<CounterState>(
    (set) => ({
      count: 0,
      increment: () => set((state) => ({ count: state.count + 1 })),
      reset: () => set({ count: 0 })
    }),
    {
      name: 'counter-storage', // localStorage key
      partialize: (state) => ({ count: state.count }), // 选择持久化字段
    }
  )
);
\`\`\`

### 14. 如何处理复杂的派生状态？

**答案：**
将复杂派生放在 store 中维护，或在组件层使用 useMemo。

**Store 中维护派生：**
\`\`\`typescript
interface TodoState {
  todos: Todo[];
  completedCount: number;
  pendingCount: number;
  addTodo: (text: string) => void;
  toggleTodo: (id: number) => void;
}

const useTodoStore = create<TodoState>((set, get) => ({
  todos: [],
  completedCount: 0,
  pendingCount: 0,
  
  addTodo: (text) => set((state) => {
    const newTodos = [...state.todos, { id: Date.now(), text, done: false }];
    return {
      todos: newTodos,
      completedCount: newTodos.filter(t => t.done).length,
      pendingCount: newTodos.filter(t => !t.done).length
    };
  }),
  
  toggleTodo: (id) => set((state) => {
    const newTodos = state.todos.map(todo => 
      todo.id === id ? { ...todo, done: !todo.done } : todo
    );
    return {
      todos: newTodos,
      completedCount: newTodos.filter(t => t.done).length,
      pendingCount: newTodos.filter(t => !t.done).length
    };
  })
}));
\`\`\`

**组件中使用 useMemo：**
\`\`\`typescript
const TodoStats = () => {
  const todos = useTodoStore(state => state.todos);
  
  const stats = React.useMemo(() => ({
    total: todos.length,
    completed: todos.filter(t => t.done).length,
    pending: todos.filter(t => !t.done).length
  }), [todos]);
  
  return (
    <div>
      <div>总计: {stats.total}</div>
      <div>已完成: {stats.completed}</div>
      <div>待完成: {stats.pending}</div>
    </div>
  );
};
\`\`\`

### 15. 如何实现条件订阅和动态选择器？

**答案：**
使用动态选择器和条件订阅来实现灵活的状态监听。

**动态选择器：**
\`\`\`typescript
// 创建动态选择器工厂
const createUserSelector = (userId: string) => 
  (state: AppState) => state.users.find(u => u.id === userId);

const UserProfile = ({ userId }: { userId: string }) => {
  const selectUser = React.useMemo(
    () => createUserSelector(userId),
    [userId]
  );
  
  const user = useAppStore(selectUser);
  
  return user ? <div>{user.name}</div> : <div>用户不存在</div>;
};
\`\`\`

**条件订阅：**
\`\`\`typescript
const ConditionalSubscription = ({ enabled }: { enabled: boolean }) => {
  const [data, setData] = React.useState(null);
  
  React.useEffect(() => {
    if (!enabled) return;
    
    const unsub = useDataStore.subscribe(
      (state) => state.importantData,
      (data) => {
        setData(data);
        console.log('重要数据更新:', data);
      }
    );
    
    return unsub;
  }, [enabled]);
  
  return enabled ? <div>监听中: {data}</div> : <div>监听已关闭</div>;
};
\`\`\`

这些面试题涵盖了 Zustand 进阶应用的核心概念，包括选择器优化、状态共享、嵌套状态管理、订阅模式、异步操作等重要主题，适合 30K 薪资水平的前端开发者面试准备。

`;export{n as default};
