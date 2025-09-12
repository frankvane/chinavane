const r=`# Chapter 8: Zustand 最佳实践与使用建议 - 面试题\r
\r
## 基础概念题\r
\r
### 1. Zustand 中如何实现精准订阅以减少不必要的重渲染？\r
\r
**答案：**\r
\r
**选择器模式：**\r
\`\`\`typescript\r
// ❌ 错误：订阅整个store\r
const BadComponent = () => {\r
  const store = useStore(); // 任何字段变化都会重渲染\r
  return <div>{store.count}</div>;\r
};\r
\r
// ✅ 正确：精准选择器\r
const GoodComponent = () => {\r
  const count = useStore(state => state.count); // 只订阅count变化\r
  return <div>{count}</div>;\r
};\r
\r
// ✅ 更好：稳定的选择器\r
const selectCount = (state) => state.count;\r
const BestComponent = () => {\r
  const count = useStore(selectCount); // 选择器引用稳定\r
  return <div>{count}</div>;\r
};\r
\`\`\`\r
\r
**多字段订阅：**\r
\`\`\`typescript\r
// ❌ 错误：返回新对象\r
const BadMultiSelect = () => {\r
  const { count, step } = useStore(state => ({ \r
    count: state.count, \r
    step: state.step \r
  })); // 每次都创建新对象\r
  return <div>{count} + {step}</div>;\r
};\r
\r
// ✅ 正确：使用shallow比较\r
import { shallow } from 'zustand/shallow';\r
\r
const GoodMultiSelect = () => {\r
  const { count, step } = useStore(\r
    state => ({ count: state.count, step: state.step }),\r
    shallow\r
  );\r
  return <div>{count} + {step}</div>;\r
};\r
\r
// ✅ 更好：分别订阅\r
const BestMultiSelect = () => {\r
  const count = useStore(state => state.count);\r
  const step = useStore(state => state.step);\r
  return <div>{count} + {step}</div>;\r
};\r
\`\`\`\r
\r
**核心原则：**\r
1. **最小订阅**：只订阅组件实际使用的字段\r
2. **稳定引用**：选择器函数保持引用稳定\r
3. **原始值优先**：返回原始值而非对象\r
4. **shallow比较**：多字段时使用shallow\r
\r
### 2. 如何按领域拆分 Zustand Store？\r
\r
**答案：**\r
\r
**按职责拆分：**\r
\`\`\`typescript\r
// ❌ 错误：单体Store\r
const useMonolithicStore = create((set) => ({\r
  // UI状态\r
  theme: 'light',\r
  sidebarOpen: false,\r
  selectedTab: 'home',\r
  \r
  // 业务状态\r
  user: null,\r
  products: [],\r
  cart: [],\r
  \r
  // 临时状态\r
  loading: false,\r
  error: null,\r
  \r
  // 所有动作混在一起\r
  setTheme: (theme) => set({ theme }),\r
  toggleSidebar: () => set(state => ({ sidebarOpen: !state.sidebarOpen })),\r
  setUser: (user) => set({ user }),\r
  addToCart: (product) => set(state => ({ cart: [...state.cart, product] })),\r
  // ...\r
}));\r
\r
// ✅ 正确：按领域拆分\r
// UI Store - 管理界面交互状态\r
const useUIStore = create((set) => ({\r
  theme: 'light' as 'light' | 'dark',\r
  sidebarOpen: false,\r
  selectedTab: 'home',\r
  \r
  setTheme: (theme: 'light' | 'dark') => set({ theme }),\r
  toggleSidebar: () => set(state => ({ sidebarOpen: !state.sidebarOpen })),\r
  setSelectedTab: (tab: string) => set({ selectedTab: tab })\r
}));\r
\r
// Domain Store - 管理业务逻辑状态\r
const useCartStore = create((set, get) => ({\r
  items: [] as CartItem[],\r
  \r
  addItem: (product: Product) => set(state => ({\r
    items: [...state.items, { ...product, quantity: 1, id: Date.now() }]\r
  })),\r
  \r
  removeItem: (id: number) => set(state => ({\r
    items: state.items.filter(item => item.id !== id)\r
  })),\r
  \r
  updateQuantity: (id: number, quantity: number) => set(state => ({\r
    items: state.items.map(item => \r
      item.id === id ? { ...item, quantity } : item\r
    )\r
  })),\r
  \r
  getTotalPrice: () => {\r
    const { items } = get();\r
    return items.reduce((total, item) => total + item.price * item.quantity, 0);\r
  }\r
}));\r
\r
// User Store - 管理用户状态\r
const useUserStore = create((set) => ({\r
  profile: null as User | null,\r
  preferences: {},\r
  \r
  setProfile: (profile: User) => set({ profile }),\r
  updatePreferences: (prefs: Partial<UserPreferences>) => \r
    set(state => ({ preferences: { ...state.preferences, ...prefs } }))\r
}));\r
\`\`\`\r
\r
**组合使用：**\r
\`\`\`typescript\r
// 组件中组合多个Store\r
const Dashboard = () => {\r
  // UI状态\r
  const theme = useUIStore(state => state.theme);\r
  const sidebarOpen = useUIStore(state => state.sidebarOpen);\r
  const toggleSidebar = useUIStore(state => state.toggleSidebar);\r
  \r
  // 业务状态\r
  const cartItems = useCartStore(state => state.items);\r
  const user = useUserStore(state => state.profile);\r
  \r
  return (\r
    <div className={\`dashboard \${theme} \${sidebarOpen ? 'sidebar-open' : ''}\`}>\r
      <Sidebar onToggle={toggleSidebar} />\r
      <Header user={user} cartCount={cartItems.length} />\r
      <MainContent />\r
    </div>\r
  );\r
};\r
\`\`\`\r
\r
**拆分原则：**\r
1. **UI Store**：主题、布局、交互状态\r
2. **Domain Store**：业务逻辑、实体数据\r
3. **Feature Store**：特定功能的状态\r
4. **Temporary Store**：临时状态、表单数据\r
\r
### 3. Zustand 与 React Query 如何协作避免双份真相？\r
\r
**答案：**\r
\r
**职责分离原则：**\r
\`\`\`typescript\r
// ❌ 错误：在Zustand中复制服务端数据\r
const useBadStore = create((set) => ({\r
  users: [], // 与React Query重复\r
  products: [], // 与React Query重复\r
  loading: false,\r
  \r
  fetchUsers: async () => {\r
    set({ loading: true });\r
    const users = await api.getUsers();\r
    set({ users, loading: false }); // 双份真相\r
  }\r
}));\r
\r
// ✅ 正确：职责分离\r
// React Query管理服务端状态\r
const useUsersQuery = () => useQuery({\r
  queryKey: ['users'],\r
  queryFn: () => api.getUsers(),\r
  staleTime: 5 * 60 * 1000\r
});\r
\r
const useProductsQuery = () => useQuery({\r
  queryKey: ['products'],\r
  queryFn: () => api.getProducts(),\r
  staleTime: 10 * 60 * 1000\r
});\r
\r
// Zustand仅管理UI交互状态\r
const useUIStore = create((set) => ({\r
  selectedUserId: null,\r
  selectedProductIds: [],\r
  filters: { category: 'all', priceRange: [0, 1000] },\r
  sortBy: 'name',\r
  \r
  selectUser: (id: string) => set({ selectedUserId: id }),\r
  toggleProductSelection: (id: string) => set(state => ({\r
    selectedProductIds: state.selectedProductIds.includes(id)\r
      ? state.selectedProductIds.filter(pid => pid !== id)\r
      : [...state.selectedProductIds, id]\r
  })),\r
  setFilters: (filters: Partial<Filters>) => set(state => ({\r
    filters: { ...state.filters, ...filters }\r
  })),\r
  setSortBy: (sortBy: string) => set({ sortBy })\r
}));\r
\`\`\`\r
\r
**协作模式：**\r
\`\`\`typescript\r
// 组件中组合使用\r
const ProductManagement = () => {\r
  // 服务端数据\r
  const { data: products, isLoading, error } = useProductsQuery();\r
  \r
  // UI交互状态\r
  const selectedProductIds = useUIStore(state => state.selectedProductIds);\r
  const filters = useUIStore(state => state.filters);\r
  const sortBy = useUIStore(state => state.sortBy);\r
  const toggleProductSelection = useUIStore(state => state.toggleProductSelection);\r
  const setFilters = useUIStore(state => state.setFilters);\r
  \r
  // 派生状态（在组件层计算）\r
  const filteredProducts = useMemo(() => {\r
    if (!products) return [];\r
    \r
    return products\r
      .filter(product => {\r
        if (filters.category !== 'all' && product.category !== filters.category) {\r
          return false;\r
        }\r
        if (product.price < filters.priceRange[0] || product.price > filters.priceRange[1]) {\r
          return false;\r
        }\r
        return true;\r
      })\r
      .sort((a, b) => {\r
        switch (sortBy) {\r
          case 'name': return a.name.localeCompare(b.name);\r
          case 'price': return a.price - b.price;\r
          default: return 0;\r
        }\r
      });\r
  }, [products, filters, sortBy]);\r
  \r
  const selectedProducts = useMemo(() => \r
    filteredProducts.filter(p => selectedProductIds.includes(p.id)),\r
    [filteredProducts, selectedProductIds]\r
  );\r
  \r
  if (isLoading) return <LoadingSpinner />;\r
  if (error) return <ErrorMessage error={error} />;\r
  \r
  return (\r
    <div className="grid grid-cols-3 gap-4">\r
      <ProductFilters filters={filters} onFiltersChange={setFilters} />\r
      <ProductList \r
        products={filteredProducts}\r
        selectedIds={selectedProductIds}\r
        onToggleSelection={toggleProductSelection}\r
      />\r
      <SelectedProductsSummary products={selectedProducts} />\r
    </div>\r
  );\r
};\r
\`\`\`\r
\r
**边界划分：**\r
1. **React Query**：数据获取、缓存、重试、失效\r
2. **Zustand**：选中状态、筛选条件、UI交互\r
3. **组件层**：组合两者，提供派生状态\r
4. **避免**：在Zustand中复制远程数据\r
\r
## 进阶概念题\r
\r
### 4. 如何设计一个可扩展的 Zustand 中间件系统？\r
\r
**答案：**\r
\r
\`\`\`typescript\r
// 中间件类型定义\r
type Middleware<T> = (\r
  config: StateCreator<T, [], [], T>\r
) => StateCreator<T, [], [], T>;\r
\r
// 1. 日志中间件\r
const logger = <T>(config: StateCreator<T, [], [], T>): StateCreator<T, [], [], T> => \r
  (set, get, api) => {\r
    const loggedSet = (partial: T | Partial<T> | ((state: T) => T | Partial<T>), replace?: boolean) => {\r
      console.log('🔄 State Update:', {\r
        previous: get(),\r
        update: typeof partial === 'function' ? 'function' : partial,\r
        timestamp: new Date().toISOString()\r
      });\r
      \r
      set(partial, replace);\r
      \r
      console.log('✅ New State:', get());\r
    };\r
    \r
    return config(loggedSet, get, api);\r
  };\r
\r
// 2. 性能监控中间件\r
const performance = <T>(config: StateCreator<T, [], [], T>): StateCreator<T, [], [], T> => \r
  (set, get, api) => {\r
    const performanceSet = (partial: T | Partial<T> | ((state: T) => T | Partial<T>), replace?: boolean) => {\r
      const start = performance.now();\r
      set(partial, replace);\r
      const end = performance.now();\r
      \r
      if (end - start > 1) { // 超过1ms记录\r
        console.warn(\`⚠️ Slow state update: \${end - start}ms\`);\r
      }\r
    };\r
    \r
    return config(performanceSet, get, api);\r
  };\r
\r
// 3. 状态验证中间件\r
const validator = <T>(schema: (state: T) => boolean) => \r
  (config: StateCreator<T, [], [], T>): StateCreator<T, [], [], T> => \r
    (set, get, api) => {\r
      const validatedSet = (partial: T | Partial<T> | ((state: T) => T | Partial<T>), replace?: boolean) => {\r
        set(partial, replace);\r
        \r
        const newState = get();\r
        if (!schema(newState)) {\r
          console.error('❌ State validation failed:', newState);\r
          // 可以选择回滚或抛出错误\r
        }\r
      };\r
      \r
      return config(validatedSet, get, api);\r
    };\r
\r
// 4. 状态历史中间件\r
const history = <T>(maxHistory: number = 10) => \r
  (config: StateCreator<T, [], [], T>): StateCreator<T, [], [], T> => \r
    (set, get, api) => {\r
      let stateHistory: T[] = [];\r
      let currentIndex = -1;\r
      \r
      const historySet = (partial: T | Partial<T> | ((state: T) => T | Partial<T>), replace?: boolean) => {\r
        // 保存当前状态到历史\r
        const currentState = get();\r
        stateHistory = stateHistory.slice(0, currentIndex + 1);\r
        stateHistory.push(currentState);\r
        \r
        if (stateHistory.length > maxHistory) {\r
          stateHistory = stateHistory.slice(-maxHistory);\r
        }\r
        \r
        currentIndex = stateHistory.length - 1;\r
        \r
        set(partial, replace);\r
      };\r
      \r
      const store = config(historySet, get, api);\r
      \r
      return {\r
        ...store,\r
        undo: () => {\r
          if (currentIndex > 0) {\r
            currentIndex--;\r
            set(stateHistory[currentIndex], true);\r
          }\r
        },\r
        redo: () => {\r
          if (currentIndex < stateHistory.length - 1) {\r
            currentIndex++;\r
            set(stateHistory[currentIndex], true);\r
          }\r
        },\r
        canUndo: () => currentIndex > 0,\r
        canRedo: () => currentIndex < stateHistory.length - 1\r
      };\r
    };\r
\r
// 5. 中间件组合器\r
const compose = <T>(...middlewares: Middleware<T>[]) => \r
  (config: StateCreator<T, [], [], T>): StateCreator<T, [], [], T> => \r
    middlewares.reduceRight((acc, middleware) => middleware(acc), config);\r
\r
// 使用示例\r
interface CounterState {\r
  count: number;\r
  increment: () => void;\r
  decrement: () => void;\r
  reset: () => void;\r
  undo?: () => void;\r
  redo?: () => void;\r
  canUndo?: () => boolean;\r
  canRedo?: () => boolean;\r
}\r
\r
// 状态验证规则\r
const counterSchema = (state: CounterState) => {\r
  return state.count >= 0 && state.count <= 100;\r
};\r
\r
// 组合多个中间件\r
const useCounterStore = create<CounterState>()(compose(\r
  logger,\r
  performance,\r
  validator(counterSchema),\r
  history(5),\r
  devtools\r
)((set, get) => ({\r
  count: 0,\r
  increment: () => set(state => ({ count: state.count + 1 })),\r
  decrement: () => set(state => ({ count: state.count - 1 })),\r
  reset: () => set({ count: 0 })\r
})));\r
\r
// 在组件中使用\r
const CounterWithHistory = () => {\r
  const { count, increment, decrement, reset, undo, redo, canUndo, canRedo } = useCounterStore();\r
  \r
  return (\r
    <div className="space-y-4">\r
      <div className="text-2xl font-bold">Count: {count}</div>\r
      \r
      <div className="space-x-2">\r
        <button onClick={increment}>+</button>\r
        <button onClick={decrement}>-</button>\r
        <button onClick={reset}>Reset</button>\r
      </div>\r
      \r
      <div className="space-x-2">\r
        <button onClick={undo} disabled={!canUndo?.()}>Undo</button>\r
        <button onClick={redo} disabled={!canRedo?.()}>Redo</button>\r
      </div>\r
    </div>\r
  );\r
};\r
\`\`\`\r
\r
### 5. 如何实现 Zustand Store 的类型安全和测试策略？\r
\r
**答案：**\r
\r
**类型安全设计：**\r
\`\`\`typescript\r
// 1. 严格的类型定义\r
interface UserState {\r
  profile: User | null;\r
  preferences: UserPreferences;\r
  isAuthenticated: boolean;\r
}\r
\r
interface UserActions {\r
  login: (user: User) => void;\r
  logout: () => void;\r
  updateProfile: (updates: Partial<User>) => void;\r
  updatePreferences: (prefs: Partial<UserPreferences>) => void;\r
}\r
\r
type UserStore = UserState & UserActions;\r
\r
// 2. 类型安全的Store创建\r
const createUserStore = () => create<UserStore>()(\r
  devtools(\r
    (set, get) => ({\r
      // State\r
      profile: null,\r
      preferences: {\r
        theme: 'light',\r
        language: 'en',\r
        notifications: true\r
      },\r
      isAuthenticated: false,\r
      \r
      // Actions\r
      login: (user: User) => set({ \r
        profile: user, \r
        isAuthenticated: true \r
      }),\r
      \r
      logout: () => set({ \r
        profile: null, \r
        isAuthenticated: false,\r
        preferences: {\r
          theme: 'light',\r
          language: 'en',\r
          notifications: true\r
        }\r
      }),\r
      \r
      updateProfile: (updates: Partial<User>) => set(state => ({\r
        profile: state.profile ? { ...state.profile, ...updates } : null\r
      })),\r
      \r
      updatePreferences: (prefs: Partial<UserPreferences>) => set(state => ({\r
        preferences: { ...state.preferences, ...prefs }\r
      }))\r
    }),\r
    { name: 'user-store' }\r
  )\r
);\r
\r
// 3. 类型安全的选择器\r
const createUserSelectors = <T extends UserStore>(store: T) => ({\r
  profile: (state: T) => state.profile,\r
  isAuthenticated: (state: T) => state.isAuthenticated,\r
  theme: (state: T) => state.preferences.theme,\r
  hasProfile: (state: T) => state.profile !== null,\r
  displayName: (state: T) => state.profile?.name || 'Guest'\r
});\r
\r
// 使用\r
const useUserStore = createUserStore();\r
const userSelectors = createUserSelectors(useUserStore.getState());\r
\r
const UserProfile = () => {\r
  const profile = useUserStore(userSelectors.profile);\r
  const displayName = useUserStore(userSelectors.displayName);\r
  \r
  return <div>Welcome, {displayName}!</div>;\r
};\r
\`\`\`\r
\r
**测试策略：**\r
\`\`\`typescript\r
// 1. Store测试工具\r
class StoreTestUtils {\r
  static createTestStore<T>(initialState?: Partial<T>) {\r
    const store = create<T>()(() => initialState as T);\r
    return {\r
      store,\r
      getState: store.getState,\r
      setState: store.setState,\r
      subscribe: store.subscribe\r
    };\r
  }\r
  \r
  static async waitForStateChange<T>(store: any, predicate: (state: T) => boolean, timeout = 1000) {\r
    return new Promise<T>((resolve, reject) => {\r
      const timer = setTimeout(() => reject(new Error('Timeout')), timeout);\r
      \r
      const unsubscribe = store.subscribe((state: T) => {\r
        if (predicate(state)) {\r
          clearTimeout(timer);\r
          unsubscribe();\r
          resolve(state);\r
        }\r
      });\r
      \r
      // 检查当前状态\r
      if (predicate(store.getState())) {\r
        clearTimeout(timer);\r
        unsubscribe();\r
        resolve(store.getState());\r
      }\r
    });\r
  }\r
}\r
\r
// 2. 单元测试示例\r
describe('UserStore', () => {\r
  let store: ReturnType<typeof createUserStore>;\r
  \r
  beforeEach(() => {\r
    store = createUserStore();\r
  });\r
  \r
  describe('login', () => {\r
    it('should set user profile and authentication status', () => {\r
      const mockUser: User = {\r
        id: '1',\r
        name: 'John Doe',\r
        email: 'john@example.com'\r
      };\r
      \r
      store.getState().login(mockUser);\r
      \r
      const state = store.getState();\r
      expect(state.profile).toEqual(mockUser);\r
      expect(state.isAuthenticated).toBe(true);\r
    });\r
  });\r
  \r
  describe('logout', () => {\r
    it('should clear user data and reset preferences', () => {\r
      // 先登录\r
      const mockUser: User = { id: '1', name: 'John', email: 'john@example.com' };\r
      store.getState().login(mockUser);\r
      \r
      // 修改偏好设置\r
      store.getState().updatePreferences({ theme: 'dark' });\r
      \r
      // 登出\r
      store.getState().logout();\r
      \r
      const state = store.getState();\r
      expect(state.profile).toBeNull();\r
      expect(state.isAuthenticated).toBe(false);\r
      expect(state.preferences.theme).toBe('light'); // 重置为默认值\r
    });\r
  });\r
  \r
  describe('updateProfile', () => {\r
    it('should update profile when user is logged in', () => {\r
      const mockUser: User = { id: '1', name: 'John', email: 'john@example.com' };\r
      store.getState().login(mockUser);\r
      \r
      store.getState().updateProfile({ name: 'Jane Doe' });\r
      \r
      const state = store.getState();\r
      expect(state.profile?.name).toBe('Jane Doe');\r
      expect(state.profile?.email).toBe('john@example.com'); // 其他字段不变\r
    });\r
    \r
    it('should not update profile when user is not logged in', () => {\r
      store.getState().updateProfile({ name: 'Jane Doe' });\r
      \r
      const state = store.getState();\r
      expect(state.profile).toBeNull();\r
    });\r
  });\r
});\r
\r
// 3. 集成测试示例\r
describe('UserStore Integration', () => {\r
  it('should handle complete user flow', async () => {\r
    const store = createUserStore();\r
    const mockUser: User = { id: '1', name: 'John', email: 'john@example.com' };\r
    \r
    // 登录\r
    store.getState().login(mockUser);\r
    expect(store.getState().isAuthenticated).toBe(true);\r
    \r
    // 更新偏好\r
    store.getState().updatePreferences({ theme: 'dark', language: 'zh' });\r
    expect(store.getState().preferences.theme).toBe('dark');\r
    \r
    // 更新个人资料\r
    store.getState().updateProfile({ name: 'John Smith' });\r
    expect(store.getState().profile?.name).toBe('John Smith');\r
    \r
    // 登出\r
    store.getState().logout();\r
    expect(store.getState().isAuthenticated).toBe(false);\r
    expect(store.getState().profile).toBeNull();\r
  });\r
});\r
\r
// 4. React组件测试\r
import { renderHook, act } from '@testing-library/react';\r
\r
describe('UserStore React Integration', () => {\r
  it('should trigger re-render when state changes', () => {\r
    const store = createUserStore();\r
    const { result, rerender } = renderHook(() => useUserStore(state => state.isAuthenticated));\r
    \r
    expect(result.current).toBe(false);\r
    \r
    act(() => {\r
      store.getState().login({ id: '1', name: 'John', email: 'john@example.com' });\r
    });\r
    \r
    rerender();\r
    expect(result.current).toBe(true);\r
  });\r
});\r
\r
// 5. 性能测试\r
describe('UserStore Performance', () => {\r
  it('should handle rapid state updates efficiently', () => {\r
    const store = createUserStore();\r
    const start = performance.now();\r
    \r
    for (let i = 0; i < 1000; i++) {\r
      store.getState().updatePreferences({ theme: i % 2 === 0 ? 'light' : 'dark' });\r
    }\r
    \r
    const end = performance.now();\r
    expect(end - start).toBeLessThan(100); // 应该在100ms内完成\r
  });\r
});\r
\`\`\`\r
\r
## 实践应用题\r
\r
### 6. 设计一个支持插件化的 Zustand 状态管理架构\r
\r
**答案：**\r
\r
\`\`\`typescript\r
// 1. 插件系统核心\r
interface Plugin<T = any> {\r
  name: string;\r
  version: string;\r
  install: (store: StoreApi<T>, options?: any) => void;\r
  uninstall?: (store: StoreApi<T>) => void;\r
}\r
\r
class PluginManager<T> {\r
  private plugins = new Map<string, Plugin<T>>();\r
  private installedPlugins = new Set<string>();\r
  \r
  register(plugin: Plugin<T>) {\r
    if (this.plugins.has(plugin.name)) {\r
      throw new Error(\`Plugin \${plugin.name} already registered\`);\r
    }\r
    this.plugins.set(plugin.name, plugin);\r
  }\r
  \r
  install(store: StoreApi<T>, pluginName: string, options?: any) {\r
    const plugin = this.plugins.get(pluginName);\r
    if (!plugin) {\r
      throw new Error(\`Plugin \${pluginName} not found\`);\r
    }\r
    \r
    if (this.installedPlugins.has(pluginName)) {\r
      console.warn(\`Plugin \${pluginName} already installed\`);\r
      return;\r
    }\r
    \r
    plugin.install(store, options);\r
    this.installedPlugins.add(pluginName);\r
  }\r
  \r
  uninstall(store: StoreApi<T>, pluginName: string) {\r
    const plugin = this.plugins.get(pluginName);\r
    if (plugin?.uninstall) {\r
      plugin.uninstall(store);\r
    }\r
    this.installedPlugins.delete(pluginName);\r
  }\r
  \r
  getInstalledPlugins() {\r
    return Array.from(this.installedPlugins);\r
  }\r
}\r
\r
// 2. 具体插件实现\r
// 状态持久化插件\r
const persistPlugin: Plugin = {\r
  name: 'persist',\r
  version: '1.0.0',\r
  install: (store, options = {}) => {\r
    const { key = 'zustand-store', storage = localStorage } = options;\r
    \r
    // 加载初始状态\r
    try {\r
      const savedState = storage.getItem(key);\r
      if (savedState) {\r
        store.setState(JSON.parse(savedState), true);\r
      }\r
    } catch (error) {\r
      console.error('Failed to load persisted state:', error);\r
    }\r
    \r
    // 订阅状态变化并保存\r
    const unsubscribe = store.subscribe((state) => {\r
      try {\r
        storage.setItem(key, JSON.stringify(state));\r
      } catch (error) {\r
        console.error('Failed to persist state:', error);\r
      }\r
    });\r
    \r
    // 保存取消订阅函数\r
    (store as any)._persistUnsubscribe = unsubscribe;\r
  },\r
  uninstall: (store) => {\r
    const unsubscribe = (store as any)._persistUnsubscribe;\r
    if (unsubscribe) {\r
      unsubscribe();\r
      delete (store as any)._persistUnsubscribe;\r
    }\r
  }\r
};\r
\r
// 状态同步插件\r
const syncPlugin: Plugin = {\r
  name: 'sync',\r
  version: '1.0.0',\r
  install: (store, options = {}) => {\r
    const { channel = 'zustand-sync' } = options;\r
    const bc = new BroadcastChannel(channel);\r
    \r
    // 监听其他标签页的状态变化\r
    bc.onmessage = (event) => {\r
      if (event.data.type === 'STATE_UPDATE') {\r
        store.setState(event.data.state, true);\r
      }\r
    };\r
    \r
    // 广播本地状态变化\r
    const unsubscribe = store.subscribe((state) => {\r
      bc.postMessage({ type: 'STATE_UPDATE', state });\r
    });\r
    \r
    (store as any)._syncChannel = bc;\r
    (store as any)._syncUnsubscribe = unsubscribe;\r
  },\r
  uninstall: (store) => {\r
    const bc = (store as any)._syncChannel;\r
    const unsubscribe = (store as any)._syncUnsubscribe;\r
    \r
    if (bc) {\r
      bc.close();\r
      delete (store as any)._syncChannel;\r
    }\r
    \r
    if (unsubscribe) {\r
      unsubscribe();\r
      delete (store as any)._syncUnsubscribe;\r
    }\r
  }\r
};\r
\r
// 状态验证插件\r
const validationPlugin: Plugin = {\r
  name: 'validation',\r
  version: '1.0.0',\r
  install: (store, options = {}) => {\r
    const { schema, onError } = options;\r
    \r
    if (!schema) {\r
      throw new Error('Validation plugin requires a schema');\r
    }\r
    \r
    const originalSetState = store.setState;\r
    \r
    store.setState = (partial, replace) => {\r
      // 先应用更新\r
      originalSetState(partial, replace);\r
      \r
      // 然后验证新状态\r
      const newState = store.getState();\r
      const isValid = schema(newState);\r
      \r
      if (!isValid) {\r
        const error = new Error('State validation failed');\r
        if (onError) {\r
          onError(error, newState);\r
        } else {\r
          console.error('State validation failed:', newState);\r
        }\r
      }\r
    };\r
    \r
    (store as any)._originalSetState = originalSetState;\r
  },\r
  uninstall: (store) => {\r
    const originalSetState = (store as any)._originalSetState;\r
    if (originalSetState) {\r
      store.setState = originalSetState;\r
      delete (store as any)._originalSetState;\r
    }\r
  }\r
};\r
\r
// 3. 可插拔的Store创建器\r
class PluggableStore<T> {\r
  private store: StoreApi<T>;\r
  private pluginManager: PluginManager<T>;\r
  \r
  constructor(initializer: StateCreator<T, [], [], T>) {\r
    this.store = createStore(initializer);\r
    this.pluginManager = new PluginManager<T>();\r
    \r
    // 注册内置插件\r
    this.pluginManager.register(persistPlugin);\r
    this.pluginManager.register(syncPlugin);\r
    this.pluginManager.register(validationPlugin);\r
  }\r
  \r
  use(pluginName: string, options?: any) {\r
    this.pluginManager.install(this.store, pluginName, options);\r
    return this;\r
  }\r
  \r
  unuse(pluginName: string) {\r
    this.pluginManager.uninstall(this.store, pluginName);\r
    return this;\r
  }\r
  \r
  getStore() {\r
    return this.store;\r
  }\r
  \r
  getInstalledPlugins() {\r
    return this.pluginManager.getInstalledPlugins();\r
  }\r
}\r
\r
// 4. 使用示例\r
interface AppState {\r
  user: User | null;\r
  theme: 'light' | 'dark';\r
  count: number;\r
}\r
\r
interface AppActions {\r
  setUser: (user: User) => void;\r
  setTheme: (theme: 'light' | 'dark') => void;\r
  increment: () => void;\r
}\r
\r
type AppStore = AppState & AppActions;\r
\r
// 创建可插拔的Store\r
const createAppStore = () => {\r
  const pluggableStore = new PluggableStore<AppStore>((set) => ({\r
    // State\r
    user: null,\r
    theme: 'light',\r
    count: 0,\r
    \r
    // Actions\r
    setUser: (user) => set({ user }),\r
    setTheme: (theme) => set({ theme }),\r
    increment: () => set(state => ({ count: state.count + 1 }))\r
  }));\r
  \r
  // 安装插件\r
  pluggableStore\r
    .use('persist', { \r
      key: 'app-store',\r
      storage: localStorage \r
    })\r
    .use('sync', { \r
      channel: 'app-sync' \r
    })\r
    .use('validation', {\r
      schema: (state: AppStore) => {\r
        return state.count >= 0 && state.count <= 1000;\r
      },\r
      onError: (error, state) => {\r
        console.error('App state validation failed:', error, state);\r
      }\r
    });\r
  \r
  return pluggableStore.getStore();\r
};\r
\r
// 5. React Hook包装\r
const useAppStore = <T>(selector: (state: AppStore) => T) => {\r
  const store = useMemo(() => createAppStore(), []);\r
  return useStore(store, selector);\r
};\r
\r
// 使用\r
const App = () => {\r
  const count = useAppStore(state => state.count);\r
  const increment = useAppStore(state => state.increment);\r
  const theme = useAppStore(state => state.theme);\r
  const setTheme = useAppStore(state => state.setTheme);\r
  \r
  return (\r
    <div className={\`app \${theme}\`}>\r
      <div>Count: {count}</div>\r
      <button onClick={increment}>Increment</button>\r
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Toggle Theme</button>\r
    </div>\r
  );\r
};\r
\`\`\`\r
\r
### 7. 实现一个 Zustand Store 的性能监控和优化系统\r
\r
**答案：**\r
\r
\`\`\`typescript\r
// 1. 性能监控核心\r
interface PerformanceMetrics {\r
  updateCount: number;\r
  averageUpdateTime: number;\r
  slowUpdates: Array<{\r
    timestamp: number;\r
    duration: number;\r
    action: string;\r
  }>;\r
  subscriberCount: number;\r
  memoryUsage: number;\r
}\r
\r
class StorePerformanceMonitor<T> {\r
  private metrics: PerformanceMetrics = {\r
    updateCount: 0,\r
    averageUpdateTime: 0,\r
    slowUpdates: [],\r
    subscriberCount: 0,\r
    memoryUsage: 0\r
  };\r
  \r
  private updateTimes: number[] = [];\r
  private subscribers = new Set<Function>();\r
  private slowUpdateThreshold = 5; // ms\r
  \r
  monitor(store: StoreApi<T>) {\r
    // 包装setState方法\r
    const originalSetState = store.setState;\r
    \r
    store.setState = (partial, replace) => {\r
      const start = performance.now();\r
      const actionName = this.getActionName(partial);\r
      \r
      originalSetState(partial, replace);\r
      \r
      const end = performance.now();\r
      const duration = end - start;\r
      \r
      this.recordUpdate(duration, actionName);\r
    };\r
    \r
    // 包装subscribe方法\r
    const originalSubscribe = store.subscribe;\r
    \r
    store.subscribe = (listener) => {\r
      this.subscribers.add(listener);\r
      this.metrics.subscriberCount = this.subscribers.size;\r
      \r
      const unsubscribe = originalSubscribe(listener);\r
      \r
      return () => {\r
        this.subscribers.delete(listener);\r
        this.metrics.subscriberCount = this.subscribers.size;\r
        unsubscribe();\r
      };\r
    };\r
    \r
    // 定期更新内存使用情况\r
    setInterval(() => {\r
      this.updateMemoryUsage(store);\r
    }, 5000);\r
    \r
    return this;\r
  }\r
  \r
  private getActionName(partial: any): string {\r
    if (typeof partial === 'function') {\r
      return partial.name || 'anonymous';\r
    }\r
    return Object.keys(partial).join(',');\r
  }\r
  \r
  private recordUpdate(duration: number, actionName: string) {\r
    this.metrics.updateCount++;\r
    this.updateTimes.push(duration);\r
    \r
    // 保持最近1000次更新的记录\r
    if (this.updateTimes.length > 1000) {\r
      this.updateTimes = this.updateTimes.slice(-1000);\r
    }\r
    \r
    // 计算平均时间\r
    this.metrics.averageUpdateTime = \r
      this.updateTimes.reduce((sum, time) => sum + time, 0) / this.updateTimes.length;\r
    \r
    // 记录慢更新\r
    if (duration > this.slowUpdateThreshold) {\r
      this.metrics.slowUpdates.push({\r
        timestamp: Date.now(),\r
        duration,\r
        action: actionName\r
      });\r
      \r
      // 保持最近100次慢更新记录\r
      if (this.metrics.slowUpdates.length > 100) {\r
        this.metrics.slowUpdates = this.metrics.slowUpdates.slice(-100);\r
      }\r
      \r
      console.warn(\`🐌 Slow store update detected: \${actionName} took \${duration.toFixed(2)}ms\`);\r
    }\r
  }\r
  \r
  private updateMemoryUsage(store: StoreApi<T>) {\r
    try {\r
      const state = store.getState();\r
      const stateString = JSON.stringify(state);\r
      this.metrics.memoryUsage = new Blob([stateString]).size;\r
    } catch (error) {\r
      console.warn('Failed to calculate memory usage:', error);\r
    }\r
  }\r
  \r
  getMetrics(): PerformanceMetrics {\r
    return { ...this.metrics };\r
  }\r
  \r
  generateReport() {\r
    const metrics = this.getMetrics();\r
    \r
    return {\r
      summary: {\r
        totalUpdates: metrics.updateCount,\r
        averageUpdateTime: \`\${metrics.averageUpdateTime.toFixed(2)}ms\`,\r
        slowUpdatesCount: metrics.slowUpdates.length,\r
        subscriberCount: metrics.subscriberCount,\r
        memoryUsage: \`\${(metrics.memoryUsage / 1024).toFixed(2)}KB\`\r
      },\r
      recommendations: this.generateRecommendations(metrics),\r
      slowUpdates: metrics.slowUpdates.slice(-10) // 最近10次慢更新\r
    };\r
  }\r
  \r
  private generateRecommendations(metrics: PerformanceMetrics): string[] {\r
    const recommendations = [];\r
    \r
    if (metrics.averageUpdateTime > 2) {\r
      recommendations.push('考虑优化状态更新逻辑，平均更新时间较长');\r
    }\r
    \r
    if (metrics.slowUpdates.length > 10) {\r
      recommendations.push('存在较多慢更新，检查是否有复杂的状态计算');\r
    }\r
    \r
    if (metrics.subscriberCount > 50) {\r
      recommendations.push('订阅者数量较多，考虑拆分Store或优化选择器');\r
    }\r
    \r
    if (metrics.memoryUsage > 1024 * 1024) { // 1MB\r
      recommendations.push('状态占用内存较大，考虑清理不必要的数据');\r
    }\r
    \r
    return recommendations;\r
  }\r
}\r
\r
// 2. 渲染性能监控\r
class RenderPerformanceMonitor {\r
  private renderCounts = new Map<string, number>();\r
  private renderTimes = new Map<string, number[]>();\r
  \r
  trackComponent(componentName: string) {\r
    return (WrappedComponent: React.ComponentType<any>) => {\r
      return React.memo((props: any) => {\r
        const renderCount = this.renderCounts.get(componentName) || 0;\r
        this.renderCounts.set(componentName, renderCount + 1);\r
        \r
        const start = performance.now();\r
        \r
        useEffect(() => {\r
          const end = performance.now();\r
          const duration = end - start;\r
          \r
          const times = this.renderTimes.get(componentName) || [];\r
          times.push(duration);\r
          \r
          if (times.length > 100) {\r
            times.splice(0, times.length - 100);\r
          }\r
          \r
          this.renderTimes.set(componentName, times);\r
          \r
          if (duration > 16) { // 超过一帧时间\r
            console.warn(\`🐌 Slow render: \${componentName} took \${duration.toFixed(2)}ms\`);\r
          }\r
        });\r
        \r
        return <WrappedComponent {...props} />;\r
      });\r
    };\r
  }\r
  \r
  getRenderStats() {\r
    const stats = new Map<string, {\r
      renderCount: number;\r
      averageRenderTime: number;\r
      maxRenderTime: number;\r
    }>();\r
    \r
    for (const [componentName, count] of this.renderCounts) {\r
      const times = this.renderTimes.get(componentName) || [];\r
      const averageTime = times.length > 0 \r
        ? times.reduce((sum, time) => sum + time, 0) / times.length \r
        : 0;\r
      const maxTime = times.length > 0 ? Math.max(...times) : 0;\r
      \r
      stats.set(componentName, {\r
        renderCount: count,\r
        averageRenderTime: averageTime,\r
        maxRenderTime: maxTime\r
      });\r
    }\r
    \r
    return stats;\r
  }\r
}\r
\r
// 3. 自动优化建议\r
class StoreOptimizer<T> {\r
  private monitor: StorePerformanceMonitor<T>;\r
  private renderMonitor: RenderPerformanceMonitor;\r
  \r
  constructor() {\r
    this.monitor = new StorePerformanceMonitor<T>();\r
    this.renderMonitor = new RenderPerformanceMonitor();\r
  }\r
  \r
  optimize(store: StoreApi<T>) {\r
    this.monitor.monitor(store);\r
    \r
    // 定期生成优化建议\r
    setInterval(() => {\r
      this.generateOptimizationSuggestions();\r
    }, 30000); // 每30秒\r
    \r
    return {\r
      trackComponent: this.renderMonitor.trackComponent.bind(this.renderMonitor),\r
      getMetrics: this.monitor.getMetrics.bind(this.monitor),\r
      getReport: this.monitor.generateReport.bind(this.monitor),\r
      getRenderStats: this.renderMonitor.getRenderStats.bind(this.renderMonitor)\r
    };\r
  }\r
  \r
  private generateOptimizationSuggestions() {\r
    const storeMetrics = this.monitor.getMetrics();\r
    const renderStats = this.renderMonitor.getRenderStats();\r
    \r
    const suggestions = [];\r
    \r
    // 分析Store性能\r
    if (storeMetrics.averageUpdateTime > 5) {\r
      suggestions.push({\r
        type: 'store',\r
        severity: 'high',\r
        message: '状态更新时间过长，考虑优化状态结构或减少计算复杂度'\r
      });\r
    }\r
    \r
    // 分析渲染性能\r
    for (const [componentName, stats] of renderStats) {\r
      if (stats.renderCount > 100 && stats.averageRenderTime > 10) {\r
        suggestions.push({\r
          type: 'render',\r
          severity: 'medium',\r
          message: \`组件 \${componentName} 渲染频繁且耗时，考虑使用更精确的选择器\`\r
        });\r
      }\r
    }\r
    \r
    if (suggestions.length > 0) {\r
      console.group('🔧 性能优化建议');\r
      suggestions.forEach(suggestion => {\r
        console.log(\`\${suggestion.severity === 'high' ? '🔴' : '🟡'} \${suggestion.message}\`);\r
      });\r
      console.groupEnd();\r
    }\r
  }\r
}\r
\r
// 4. 使用示例\r
interface AppState {\r
  users: User[];\r
  selectedUserId: string | null;\r
  filters: {\r
    search: string;\r
    status: string;\r
  };\r
}\r
\r
interface AppActions {\r
  setUsers: (users: User[]) => void;\r
  selectUser: (id: string) => void;\r
  updateFilters: (filters: Partial<AppState['filters']>) => void;\r
}\r
\r
type AppStore = AppState & AppActions;\r
\r
// 创建带性能监控的Store\r
const createMonitoredStore = () => {\r
  const store = create<AppStore>((set) => ({\r
    users: [],\r
    selectedUserId: null,\r
    filters: { search: '', status: 'all' },\r
    \r
    setUsers: (users) => set({ users }),\r
    selectUser: (id) => set({ selectedUserId: id }),\r
    updateFilters: (filters) => set(state => ({\r
      filters: { ...state.filters, ...filters }\r
    }))\r
  }));\r
  \r
  const optimizer = new StoreOptimizer<AppStore>();\r
  const tools = optimizer.optimize(store);\r
  \r
  return { store, tools };\r
};\r
\r
// 在组件中使用\r
const { store, tools } = createMonitoredStore();\r
\r
const UserList = tools.trackComponent('UserList')(({ users, onSelect }) => {\r
  return (\r
    <div>\r
      {users.map(user => (\r
        <div key={user.id} onClick={() => onSelect(user.id)}>\r
          {user.name}\r
        </div>\r
      ))}\r
    </div>\r
  );\r
});\r
\r
const App = () => {\r
  const users = useStore(store, state => state.users);\r
  const selectUser = useStore(store, state => state.selectUser);\r
  \r
  // 显示性能报告\r
  useEffect(() => {\r
    const interval = setInterval(() => {\r
      const report = tools.getReport();\r
      console.log('性能报告:', report);\r
    }, 10000);\r
    \r
    return () => clearInterval(interval);\r
  }, []);\r
  \r
  return <UserList users={users} onSelect={selectUser} />;\r
};\r
\`\`\`\r
\r
## 问题排查题\r
\r
### 8. 如何排查和解决 Zustand Store 的内存泄漏问题？\r
\r
**答案：**\r
\r
**常见内存泄漏场景和解决方案：**\r
\r
\`\`\`typescript\r
// 1. 内存泄漏检测工具\r
class MemoryLeakDetector<T> {\r
  private subscriptions = new WeakMap<object, Set<() => void>>();\r
  private storeRefs = new WeakSet<StoreApi<T>>();\r
  private componentRefs = new WeakMap<React.ComponentType, number>();\r
  \r
  trackStore(store: StoreApi<T>, name: string) {\r
    this.storeRefs.add(store);\r
    \r
    // 包装subscribe方法\r
    const originalSubscribe = store.subscribe;\r
    \r
    store.subscribe = (listener) => {\r
      const unsubscribe = originalSubscribe(listener);\r
      \r
      // 记录订阅\r
      if (!this.subscriptions.has(store)) {\r
        this.subscriptions.set(store, new Set());\r
      }\r
      this.subscriptions.get(store)!.add(unsubscribe);\r
      \r
      return () => {\r
        this.subscriptions.get(store)?.delete(unsubscribe);\r
        unsubscribe();\r
      };\r
    };\r
    \r
    // 定期检查\r
    setInterval(() => {\r
      this.checkForLeaks(store, name);\r
    }, 10000);\r
    \r
    return this;\r
  }\r
  \r
  private checkForLeaks(store: StoreApi<T>, name: string) {\r
    const subscriptions = this.subscriptions.get(store);\r
    const subscriptionCount = subscriptions?.size || 0;\r
    \r
    if (subscriptionCount > 100) {\r
      console.warn(\`🚨 Potential memory leak in store "\${name}": \${subscriptionCount} active subscriptions\`);\r
    }\r
    \r
    // 检查状态大小\r
    const state = store.getState();\r
    const stateSize = JSON.stringify(state).length;\r
    \r
    if (stateSize > 1024 * 1024) { // 1MB\r
      console.warn(\`🚨 Large state detected in store "\${name}": \${(stateSize / 1024 / 1024).toFixed(2)}MB\`);\r
    }\r
  }\r
  \r
  trackComponent(Component: React.ComponentType, name: string) {\r
    return React.memo((props: any) => {\r
      const mountCount = this.componentRefs.get(Component) || 0;\r
      this.componentRefs.set(Component, mountCount + 1);\r
      \r
      useEffect(() => {\r
        return () => {\r
          const currentCount = this.componentRefs.get(Component) || 0;\r
          this.componentRefs.set(Component, Math.max(0, currentCount - 1));\r
        };\r
      }, []);\r
      \r
      return <Component {...props} />;\r
    });\r
  }\r
  \r
  generateLeakReport() {\r
    const report = {\r
      stores: [] as Array<{ name: string; subscriptions: number }>,\r
      components: [] as Array<{ name: string; instances: number }>,\r
      recommendations: [] as string[]\r
    };\r
    \r
    // 分析组件实例\r
    for (const [component, count] of this.componentRefs) {\r
      if (count > 10) {\r
        report.components.push({\r
          name: component.name || 'Anonymous',\r
          instances: count\r
        });\r
        \r
        report.recommendations.push(\r
          \`组件 \${component.name} 有 \${count} 个实例，可能存在内存泄漏\`\r
        );\r
      }\r
    }\r
    \r
    return report;\r
  }\r
}\r
\r
// 2. 常见泄漏场景修复\r
\r
// ❌ 错误：未清理订阅\r
const BadComponent = () => {\r
  const [data, setData] = useState([]);\r
  \r
  useEffect(() => {\r
    const unsubscribe = store.subscribe((state) => {\r
      setData(state.data);\r
    });\r
    \r
    // 忘记清理订阅！\r
  }, []);\r
  \r
  return <div>{data.length}</div>;\r
};\r
\r
// ✅ 正确：清理订阅\r
const GoodComponent = () => {\r
  const [data, setData] = useState([]);\r
  \r
  useEffect(() => {\r
    const unsubscribe = store.subscribe((state) => {\r
      setData(state.data);\r
    });\r
    \r
    return unsubscribe; // 清理订阅\r
  }, []);\r
  \r
  return <div>{data.length}</div>;\r
};\r
\r
// ❌ 错误：在Store中保存组件引用\r
const useBadStore = create((set, get) => ({\r
  components: new Set(), // 保存组件引用\r
  \r
  registerComponent: (component) => {\r
    const { components } = get();\r
    components.add(component); // 内存泄漏！\r
    set({ components });\r
  }\r
}));\r
\r
// ✅ 正确：使用WeakSet或避免保存引用\r
const useGoodStore = create((set, get) => ({\r
  componentIds: new Set<string>(), // 只保存ID\r
  \r
  registerComponent: (componentId: string) => {\r
    const { componentIds } = get();\r
    set({ componentIds: new Set([...componentIds, componentId]) });\r
  },\r
  \r
  unregisterComponent: (componentId: string) => {\r
    const { componentIds } = get();\r
    const newIds = new Set(componentIds);\r
    newIds.delete(componentId);\r
    set({ componentIds: newIds });\r
  }\r
}));\r
\r
// ❌ 错误：累积大量历史数据\r
const useBadHistoryStore = create((set, get) => ({\r
  history: [],\r
  \r
  addToHistory: (item) => {\r
    const { history } = get();\r
    set({ history: [...history, item] }); // 无限增长！\r
  }\r
}));\r
\r
// ✅ 正确：限制历史数据大小\r
const useGoodHistoryStore = create((set, get) => ({\r
  history: [],\r
  maxHistorySize: 100,\r
  \r
  addToHistory: (item) => {\r
    const { history, maxHistorySize } = get();\r
    const newHistory = [...history, item];\r
    \r
    // 保持历史记录在限制范围内\r
    if (newHistory.length > maxHistorySize) {\r
      newHistory.splice(0, newHistory.length - maxHistorySize);\r
    }\r
    \r
    set({ history: newHistory });\r
  },\r
  \r
  clearHistory: () => set({ history: [] })\r
}));\r
\r
// 3. 自动清理机制\r
class AutoCleanupManager<T> {\r
  private cleanupTasks = new Map<string, () => void>();\r
  private intervals = new Map<string, NodeJS.Timeout>();\r
  \r
  setupAutoCleanup(store: StoreApi<T>, config: {\r
    maxStateSize?: number;\r
    maxHistoryItems?: number;\r
    cleanupInterval?: number;\r
  }) {\r
    const {\r
      maxStateSize = 1024 * 1024, // 1MB\r
      maxHistoryItems = 1000,\r
      cleanupInterval = 60000 // 1分钟\r
    } = config;\r
    \r
    const cleanup = () => {\r
      const state = store.getState() as any;\r
      let needsUpdate = false;\r
      const updates: any = {};\r
      \r
      // 清理大型数组\r
      for (const [key, value] of Object.entries(state)) {\r
        if (Array.isArray(value) && value.length > maxHistoryItems) {\r
          updates[key] = value.slice(-maxHistoryItems);\r
          needsUpdate = true;\r
          console.log(\`🧹 Cleaned up \${key}: \${value.length} -> \${maxHistoryItems} items\`);\r
        }\r
      }\r
      \r
      // 检查状态大小\r
      const stateSize = JSON.stringify(state).length;\r
      if (stateSize > maxStateSize) {\r
        console.warn(\`⚠️ State size (\${(stateSize / 1024 / 1024).toFixed(2)}MB) exceeds limit\`);\r
      }\r
      \r
      if (needsUpdate) {\r
        store.setState(updates);\r
      }\r
    };\r
    \r
    const intervalId = setInterval(cleanup, cleanupInterval);\r
    this.intervals.set('autoCleanup', intervalId);\r
    \r
    return () => {\r
      const id = this.intervals.get('autoCleanup');\r
      if (id) {\r
        clearInterval(id);\r
        this.intervals.delete('autoCleanup');\r
      }\r
    };\r
  }\r
  \r
  destroy() {\r
    // 清理所有定时器\r
    for (const [name, intervalId] of this.intervals) {\r
      clearInterval(intervalId);\r
    }\r
    this.intervals.clear();\r
    \r
    // 执行所有清理任务\r
    for (const [name, cleanup] of this.cleanupTasks) {\r
      try {\r
        cleanup();\r
      } catch (error) {\r
        console.error(\`Failed to cleanup \${name}:\`, error);\r
      }\r
    }\r
    this.cleanupTasks.clear();\r
  }\r
}\r
\r
// 4. 使用示例\r
const detector = new MemoryLeakDetector();\r
const cleanupManager = new AutoCleanupManager();\r
\r
// 创建带内存监控的Store\r
const createMonitoredStore = () => {\r
  const store = create((set) => ({\r
    users: [],\r
    history: [],\r
    cache: new Map(),\r
    \r
    addUser: (user) => set(state => ({ users: [...state.users, user] })),\r
    addToHistory: (item) => set(state => ({ history: [...state.history, item] })),\r
    clearCache: () => set({ cache: new Map() })\r
  }));\r
  \r
  // 设置监控\r
  detector.trackStore(store, 'main-store');\r
  \r
  // 设置自动清理\r
  const cleanup = cleanupManager.setupAutoCleanup(store, {\r
    maxHistoryItems: 100,\r
    cleanupInterval: 30000\r
  });\r
  \r
  return { store, cleanup };\r
};\r
\`\`\`\r
\r
### 9. 如何优化大型应用中的 Zustand Store 性能？\r
\r
**答案：**\r
\r
**分层优化策略：**\r
\r
\`\`\`typescript\r
// 1. Store拆分和懒加载\r
class StoreRegistry {\r
  private stores = new Map<string, any>();\r
  private lazyStores = new Map<string, () => any>();\r
  \r
  register<T>(name: string, storeFactory: () => T) {\r
    this.lazyStores.set(name, storeFactory);\r
  }\r
  \r
  get<T>(name: string): T {\r
    if (this.stores.has(name)) {\r
      return this.stores.get(name);\r
    }\r
    \r
    const factory = this.lazyStores.get(name);\r
    if (!factory) {\r
      throw new Error(\`Store \${name} not found\`);\r
    }\r
    \r
    const store = factory();\r
    this.stores.set(name, store);\r
    return store;\r
  }\r
  \r
  unload(name: string) {\r
    this.stores.delete(name);\r
  }\r
}\r
\r
// 2. 选择器优化\r
class SelectorOptimizer {\r
  private selectorCache = new WeakMap();\r
  \r
  createMemoizedSelector<T, R>(\r
    selector: (state: T) => R,\r
    equalityFn?: (a: R, b: R) => boolean\r
  ) {\r
    return (state: T) => {\r
      const cached = this.selectorCache.get(state);\r
      if (cached) {\r
        return cached;\r
      }\r
      \r
      const result = selector(state);\r
      this.selectorCache.set(state, result);\r
      return result;\r
    };\r
  }\r
  \r
  createComputedSelector<T, R>(\r
    dependencies: Array<(state: T) => any>,\r
    compute: (...deps: any[]) => R\r
  ) {\r
    let lastDeps: any[] = [];\r
    let lastResult: R;\r
    \r
    return (state: T) => {\r
      const currentDeps = dependencies.map(dep => dep(state));\r
      \r
      if (lastDeps.length === 0 || \r
          currentDeps.some((dep, index) => dep !== lastDeps[index])) {\r
        lastResult = compute(...currentDeps);\r
        lastDeps = currentDeps;\r
      }\r
      \r
      return lastResult;\r
    };\r
  }\r
}\r
\r
// 3. 批量更新优化\r
class BatchUpdateManager<T> {\r
  private pendingUpdates: Array<(state: T) => Partial<T>> = [];\r
  private batchTimeout: NodeJS.Timeout | null = null;\r
  private store: StoreApi<T>;\r
  \r
  constructor(store: StoreApi<T>) {\r
    this.store = store;\r
  }\r
  \r
  batchUpdate(updater: (state: T) => Partial<T>) {\r
    this.pendingUpdates.push(updater);\r
    \r
    if (this.batchTimeout) {\r
      clearTimeout(this.batchTimeout);\r
    }\r
    \r
    this.batchTimeout = setTimeout(() => {\r
      this.flushUpdates();\r
    }, 0);\r
  }\r
  \r
  private flushUpdates() {\r
    if (this.pendingUpdates.length === 0) return;\r
    \r
    const currentState = this.store.getState();\r
    const finalUpdate = this.pendingUpdates.reduce(\r
      (acc, updater) => ({ ...acc, ...updater(currentState) }),\r
      {}\r
    );\r
    \r
    this.store.setState(finalUpdate);\r
    this.pendingUpdates = [];\r
    this.batchTimeout = null;\r
  }\r
}\r
\r
// 4. 虚拟化大列表\r
const useVirtualizedList = <T>(items: T[], itemHeight: number, containerHeight: number) => {\r
  const [scrollTop, setScrollTop] = useState(0);\r
  \r
  const visibleCount = Math.ceil(containerHeight / itemHeight);\r
  const startIndex = Math.floor(scrollTop / itemHeight);\r
  const endIndex = Math.min(startIndex + visibleCount, items.length);\r
  \r
  const visibleItems = useMemo(() => \r
    items.slice(startIndex, endIndex).map((item, index) => ({\r
      item,\r
      index: startIndex + index\r
    })),\r
    [items, startIndex, endIndex]\r
  );\r
  \r
  const totalHeight = items.length * itemHeight;\r
  const offsetY = startIndex * itemHeight;\r
  \r
  return {\r
    visibleItems,\r
    totalHeight,\r
    offsetY,\r
    onScroll: (e: React.UIEvent) => setScrollTop(e.currentTarget.scrollTop)\r
  };\r
};\r
\r
// 5. 性能优化的Store实现\r
interface OptimizedStoreConfig {\r
  enableBatching?: boolean;\r
  enableVirtualization?: boolean;\r
  maxCacheSize?: number;\r
  enableProfiling?: boolean;\r
}\r
\r
class OptimizedStore<T> {\r
  private store: StoreApi<T>;\r
  private batchManager?: BatchUpdateManager<T>;\r
  private selectorOptimizer: SelectorOptimizer;\r
  private config: OptimizedStoreConfig;\r
  \r
  constructor(\r
    initializer: StateCreator<T, [], [], T>,\r
    config: OptimizedStoreConfig = {}\r
  ) {\r
    this.config = {\r
      enableBatching: true,\r
      enableVirtualization: false,\r
      maxCacheSize: 1000,\r
      enableProfiling: false,\r
      ...config\r
    };\r
    \r
    this.store = create(initializer);\r
    this.selectorOptimizer = new SelectorOptimizer();\r
    \r
    if (this.config.enableBatching) {\r
      this.batchManager = new BatchUpdateManager(this.store);\r
    }\r
  }\r
  \r
  getState() {\r
    return this.store.getState();\r
  }\r
  \r
  setState(updater: (state: T) => Partial<T>) {\r
    if (this.batchManager) {\r
      this.batchManager.batchUpdate(updater);\r
    } else {\r
      this.store.setState(updater);\r
    }\r
  }\r
  \r
  subscribe(listener: (state: T) => void) {\r
    return this.store.subscribe(listener);\r
  }\r
  \r
  createSelector<R>(selector: (state: T) => R) {\r
    return this.selectorOptimizer.createMemoizedSelector(selector);\r
  }\r
  \r
  createComputedSelector<R>(\r
    dependencies: Array<(state: T) => any>,\r
    compute: (...deps: any[]) => R\r
  ) {\r
    return this.selectorOptimizer.createComputedSelector(dependencies, compute);\r
  }\r
}\r
\r
// 使用示例\r
interface AppState {\r
  users: User[];\r
  selectedUserIds: string[];\r
  filters: FilterState;\r
  ui: UIState;\r
}\r
\r
const optimizedStore = new OptimizedStore<AppState>(\r
  (set) => ({\r
    users: [],\r
    selectedUserIds: [],\r
    filters: { search: '', category: 'all' },\r
    ui: { loading: false, error: null }\r
  }),\r
  {\r
    enableBatching: true,\r
    enableProfiling: true,\r
    maxCacheSize: 500\r
  }\r
);\r
\r
// 优化的选择器\r
const selectFilteredUsers = optimizedStore.createComputedSelector(\r
  [\r
    (state) => state.users,\r
    (state) => state.filters\r
  ],\r
  (users, filters) => {\r
    return users.filter(user => {\r
      if (filters.search && !user.name.toLowerCase().includes(filters.search.toLowerCase())) {\r
        return false;\r
      }\r
      if (filters.category !== 'all' && user.category !== filters.category) {\r
        return false;\r
      }\r
      return true;\r
    });\r
  }\r
);\r
\`\`\`\r
\r
## 最佳实践题\r
\r
### 10. 设计一个企业级 Zustand 状态管理规范\r
\r
**答案：**\r
\r
\`\`\`typescript\r
// 1. 类型定义规范\r
namespace StoreTypes {\r
  // 基础状态接口\r
  export interface BaseState {\r
    loading: boolean;\r
    error: string | null;\r
    lastUpdated: number;\r
  }\r
  \r
  // 基础动作接口\r
  export interface BaseActions {\r
    setLoading: (loading: boolean) => void;\r
    setError: (error: string | null) => void;\r
    reset: () => void;\r
  }\r
  \r
  // Store命名规范\r
  export type StoreName = \r
    | \`use\${string}Store\`  // 如: useUserStore\r
    | \`use\${string}State\`; // 如: useAppState\r
}\r
\r
// 2. Store创建规范\r
abstract class BaseStore<TState extends StoreTypes.BaseState, TActions extends StoreTypes.BaseActions> {\r
  protected abstract getInitialState(): TState;\r
  protected abstract getActions(set: SetState<TState>, get: GetState<TState>): TActions;\r
  \r
  create() {\r
    return create<TState & TActions>()(devtools(\r
      (set, get) => ({\r
        ...this.getInitialState(),\r
        ...this.getActions(set, get)\r
      }),\r
      { name: this.constructor.name }\r
    ));\r
  }\r
}\r
\r
// 3. 具体Store实现规范\r
class UserStoreImpl extends BaseStore<UserState, UserActions> {\r
  protected getInitialState(): UserState {\r
    return {\r
      loading: false,\r
      error: null,\r
      lastUpdated: 0,\r
      profile: null,\r
      preferences: {\r
        theme: 'light',\r
        language: 'en'\r
      }\r
    };\r
  }\r
  \r
  protected getActions(set: SetState<UserState>, get: GetState<UserState>): UserActions {\r
    return {\r
      setLoading: (loading) => set({ loading }),\r
      setError: (error) => set({ error }),\r
      reset: () => set(this.getInitialState()),\r
      \r
      // 用户特定动作\r
      setProfile: (profile) => set({ \r
        profile, \r
        lastUpdated: Date.now(),\r
        error: null \r
      }),\r
      \r
      updatePreferences: (preferences) => set(state => ({\r
        preferences: { ...state.preferences, ...preferences },\r
        lastUpdated: Date.now()\r
      })),\r
      \r
      // 异步动作\r
      fetchProfile: async (userId: string) => {\r
        const { setLoading, setError, setProfile } = get();\r
        \r
        setLoading(true);\r
        setError(null);\r
        \r
        try {\r
          const profile = await userApi.getProfile(userId);\r
          setProfile(profile);\r
        } catch (error) {\r
          setError(error.message);\r
        } finally {\r
          setLoading(false);\r
        }\r
      }\r
    };\r
  }\r
}\r
\r
// 4. Store注册和管理\r
class StoreManager {\r
  private static instance: StoreManager;\r
  private stores = new Map<string, any>();\r
  private storeFactories = new Map<string, () => any>();\r
  \r
  static getInstance() {\r
    if (!StoreManager.instance) {\r
      StoreManager.instance = new StoreManager();\r
    }\r
    return StoreManager.instance;\r
  }\r
  \r
  register<T>(name: string, factory: () => T) {\r
    this.storeFactories.set(name, factory);\r
  }\r
  \r
  get<T>(name: string): T {\r
    if (!this.stores.has(name)) {\r
      const factory = this.storeFactories.get(name);\r
      if (!factory) {\r
        throw new Error(\`Store \${name} not registered\`);\r
      }\r
      this.stores.set(name, factory());\r
    }\r
    return this.stores.get(name);\r
  }\r
}\r
\r
// 5. 使用规范\r
// 注册Store\r
const storeManager = StoreManager.getInstance();\r
storeManager.register('user', () => new UserStoreImpl().create());\r
storeManager.register('cart', () => new CartStoreImpl().create());\r
\r
// 导出Hook\r
export const useUserStore = <T>(selector: (state: UserState & UserActions) => T) => {\r
  const store = storeManager.get<ReturnType<UserStoreImpl['create']>>('user');\r
  return useStore(store, selector);\r
};\r
\r
// 6. 测试规范\r
class StoreTestSuite<TState, TActions> {\r
  constructor(\r
    private storeName: string,\r
    private storeFactory: () => StoreApi<TState & TActions>\r
  ) {}\r
  \r
  testInitialState(expectedState: Partial<TState>) {\r
    const store = this.storeFactory();\r
    const state = store.getState();\r
    \r
    for (const [key, value] of Object.entries(expectedState)) {\r
      expect(state[key]).toEqual(value);\r
    }\r
  }\r
  \r
  testAction<K extends keyof TActions>(\r
    actionName: K,\r
    actionArgs: Parameters<TActions[K]>,\r
    expectedStateChange: Partial<TState>\r
  ) {\r
    const store = this.storeFactory();\r
    const action = store.getState()[actionName] as Function;\r
    \r
    action(...actionArgs);\r
    \r
    const newState = store.getState();\r
    for (const [key, value] of Object.entries(expectedStateChange)) {\r
      expect(newState[key]).toEqual(value);\r
    }\r
  }\r
  \r
  testAsyncAction<K extends keyof TActions>(\r
    actionName: K,\r
    actionArgs: Parameters<TActions[K]>,\r
    expectedStateSequence: Array<Partial<TState>>\r
  ) {\r
    return new Promise<void>((resolve) => {\r
      const store = this.storeFactory();\r
      const states: Array<Partial<TState>> = [];\r
      \r
      const unsubscribe = store.subscribe((state) => {\r
        states.push(state);\r
        \r
        if (states.length === expectedStateSequence.length) {\r
          expectedStateSequence.forEach((expected, index) => {\r
            for (const [key, value] of Object.entries(expected)) {\r
              expect(states[index][key]).toEqual(value);\r
            }\r
          });\r
          \r
          unsubscribe();\r
          resolve();\r
        }\r
      });\r
      \r
      const action = store.getState()[actionName] as Function;\r
      action(...actionArgs);\r
    });\r
  }\r
}\r
\r
// 7. 文档生成规范\r
class StoreDocGenerator {\r
  static generateDocs<T>(store: StoreApi<T>, storeName: string) {\r
    const state = store.getState();\r
    const stateKeys = Object.keys(state).filter(key => typeof state[key] !== 'function');\r
    const actionKeys = Object.keys(state).filter(key => typeof state[key] === 'function');\r
    \r
    return {\r
      name: storeName,\r
      state: stateKeys.map(key => ({\r
        name: key,\r
        type: typeof state[key],\r
        description: \`State field: \${key}\`\r
      })),\r
      actions: actionKeys.map(key => ({\r
        name: key,\r
        type: 'function',\r
        description: \`Action: \${key}\`\r
      }))\r
    };\r
  }\r
}\r
\r
// 8. 性能监控规范\r
class StorePerformanceMonitor {\r
  private static monitors = new Map<string, PerformanceObserver>();\r
  \r
  static monitor(storeName: string, store: StoreApi<any>) {\r
    const observer = new PerformanceObserver((list) => {\r
      const entries = list.getEntries();\r
      entries.forEach(entry => {\r
        if (entry.duration > 16) { // 超过一帧\r
          console.warn(\`🐌 Slow store operation in \${storeName}: \${entry.name} took \${entry.duration}ms\`);\r
        }\r
      });\r
    });\r
    \r
    observer.observe({ entryTypes: ['measure'] });\r
    this.monitors.set(storeName, observer);\r
    \r
    // 包装setState以添加性能测量\r
    const originalSetState = store.setState;\r
    store.setState = (partial, replace) => {\r
      performance.mark(\`\${storeName}-setState-start\`);\r
      originalSetState(partial, replace);\r
      performance.mark(\`\${storeName}-setState-end\`);\r
      performance.measure(\r
        \`\${storeName}-setState\`,\r
        \`\${storeName}-setState-start\`,\r
        \`\${storeName}-setState-end\`\r
      );\r
    };\r
  }\r
  \r
  static stopMonitoring(storeName: string) {\r
    const observer = this.monitors.get(storeName);\r
    if (observer) {\r
      observer.disconnect();\r
      this.monitors.delete(storeName);\r
    }\r
  }\r
}\r
\`\`\`\r
\r
**企业级最佳实践总结：**\r
\r
1. **代码组织**：按领域拆分Store，使用统一的命名规范\r
2. **类型安全**：严格的TypeScript类型定义，避免any类型\r
3. **性能优化**：精准选择器、批量更新、虚拟化大列表\r
4. **错误处理**：统一的错误状态管理和错误边界\r
5. **测试覆盖**：完整的单元测试和集成测试\r
6. **监控观测**：性能监控、内存泄漏检测、状态变更追踪\r
7. **文档规范**：自动生成API文档，维护使用指南\r
8. **团队协作**：代码审查清单、最佳实践培训\r
\r
这套规范确保了Zustand在大型项目中的可维护性、可扩展性和团队协作效率。`;export{r as default};
