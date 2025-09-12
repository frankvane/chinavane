const e=`# Chapter 3: Zustand 高级特性面试题

## 基础概念题

### 1. 什么是 Zustand 的 persist 中间件？它解决了什么问题？

**答案：**
persist 中间件是 Zustand 提供的持久化存储解决方案，主要解决以下问题：

- **状态丢失问题**：页面刷新后状态自动恢复
- **用户体验问题**：保持用户的操作状态和偏好设置
- **网络开销问题**：减少重复的服务器请求
- **离线支持问题**：提供离线状态管理能力

\`\`\`typescript
import { persist, createJSONStorage } from 'zustand/middleware'

interface UserStore {
  user: User | null
  theme: 'light' | 'dark'
  settings: UserSettings
  login: (user: User) => void
  logout: () => void
}

const useUserStore = create<UserStore>()(persist(
  (set) => ({
    user: null,
    theme: 'light',
    settings: { notifications: true },
    login: (user) => set({ user }),
    logout: () => set({ user: null })
  }),
  {
    name: 'user-storage',
    storage: createJSONStorage(() => localStorage)
  }
))
\`\`\`

### 2. localStorage 和 sessionStorage 在 Zustand 中有什么区别？

**答案：**

| 特性 | localStorage | sessionStorage |
|------|-------------|----------------|
| **生命周期** | 持久保存，直到手动清除 | 标签页关闭后自动清除 |
| **作用域** | 同源下所有标签页共享 | 仅当前标签页 |
| **适用场景** | 用户偏好、长期设置 | 临时会话数据 |
| **存储限制** | 通常 5-10MB | 通常 5-10MB |

\`\`\`typescript
// localStorage 配置
const usePersistentStore = create(persist(
  (set) => ({ count: 0 }),
  {
    name: 'persistent-storage',
    storage: createJSONStorage(() => localStorage)
  }
))

// sessionStorage 配置
const useSessionStore = create(persist(
  (set) => ({ tempData: '' }),
  {
    name: 'session-storage',
    storage: createJSONStorage(() => sessionStorage)
  }
))
\`\`\`

### 3. 什么是组合选择器？它有什么优势？

**答案：**
组合选择器是将多个状态组合成复杂选择器的功能，主要优势包括：

- **代码复用性**：减少重复的状态选择逻辑
- **性能优化**：避免不必要的重新计算
- **类型安全**：提供完整的 TypeScript 支持
- **逻辑清晰**：将复杂的状态组合逻辑封装

\`\`\`typescript
// 组合选择器示例
const useUserProfile = () => {
  const user = useUserStore(state => state.user)
  const isLoggedIn = useUserStore(state => !!state.user)
  const preferences = useUserStore(state => state.preferences)
  
  return useMemo(() => ({
    user,
    isLoggedIn,
    displayName: user?.name || 'Guest',
    theme: preferences?.theme || 'light',
    hasNotifications: preferences?.notifications && isLoggedIn
  }), [user, isLoggedIn, preferences])
}
\`\`\`

## 进阶概念题

### 4. 如何在 Zustand 中实现 Redux Thunk 兼容？

**答案：**
通过创建 thunk 中间件，包装 store 的 set 方法，支持函数类型的 action：

\`\`\`typescript
// Thunk 中间件实现
const thunk = (config) => (set, get, api) => {
  const thunkSet = (action) => {
    if (typeof action === 'function') {
      return action(set, get, api)
    }
    return set(action)
  }
  
  return config(thunkSet, get, api)
}

// 使用 Thunk 模式
interface ThunkStore {
  count: number
  loading: boolean
  error: string | null
  increment: () => void
  asyncIncrement: () => Promise<void>
}

const useThunkStore = create<ThunkStore>()(thunk((set, get) => ({
  count: 0,
  loading: false,
  error: null,
  increment: () => set(state => ({ count: state.count + 1 })),
  asyncIncrement: async () => {
    set({ loading: true, error: null })
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      set(state => ({ count: state.count + 1, loading: false }))
    } catch (error) {
      set({ loading: false, error: error.message })
    }
  }
})))
\`\`\`

### 5. subscribeWithSelector 如何工作？有什么优势？

**答案：**
subscribeWithSelector 允许精确订阅特定选择器的变化，只在该选择器返回的值发生变化时触发回调：

\`\`\`typescript
import { subscribeWithSelector } from 'zustand/middleware'

const useStore = create(subscribeWithSelector((set) => ({
  user: null,
  posts: [],
  comments: [],
  updateUser: (user) => set({ user }),
  addPost: (post) => set(state => ({ posts: [...state.posts, post] }))
})))

// 精确订阅用户变化
const unsubscribe = useStore.subscribe(
  (state) => state.user,
  (user, prevUser) => {
    console.log('User changed:', { user, prevUser })
    // 只在用户发生变化时执行
  }
)

// 订阅复杂选择器
const unsubscribeUserPosts = useStore.subscribe(
  (state) => ({ user: state.user, postCount: state.posts.length }),
  (current, previous) => {
    if (current.user?.id !== previous.user?.id) {
      console.log('User or post count changed')
    }
  },
  { equalityFn: shallow }
)
\`\`\`

**优势：**
- 避免不必要的重新渲染
- 精确控制状态变化监听
- 支持复杂的选择器逻辑
- 自动管理订阅生命周期

### 6. 如何使用 partialize 实现部分持久化？

**答案：**
partialize 函数允许选择性地持久化特定字段，避免存储敏感或临时数据：

\`\`\`typescript
interface AppStore {
  // 需要持久化的字段
  user: User | null
  theme: 'light' | 'dark'
  settings: UserSettings
  
  // 不需要持久化的字段
  loading: boolean
  error: string | null
  tempData: any
  
  // Actions
  login: (user: User) => void
  setTheme: (theme: 'light' | 'dark') => void
  setLoading: (loading: boolean) => void
}

const useAppStore = create<AppStore>()(persist(
  (set) => ({
    // 状态定义
    user: null,
    theme: 'light',
    settings: { notifications: true },
    loading: false,
    error: null,
    tempData: null,
    
    // Actions
    login: (user) => set({ user }),
    setTheme: (theme) => set({ theme }),
    setLoading: (loading) => set({ loading })
  }),
  {
    name: 'app-storage',
    storage: createJSONStorage(() => localStorage),
    partialize: (state) => ({
      user: state.user,
      theme: state.theme,
      settings: state.settings
      // loading, error, tempData 不会被持久化
    })
  }
))
\`\`\`

## 实践应用题

### 7. 如何设计一个支持多种存储策略的用户偏好系统？

**答案：**
设计一个灵活的用户偏好系统，支持不同的存储策略：

\`\`\`typescript
// 存储策略接口
interface StorageStrategy {
  name: string
  storage: () => Storage
  persistent: boolean
}

// 存储策略定义
const storageStrategies: Record<string, StorageStrategy> = {
  local: {
    name: 'local-preferences',
    storage: () => localStorage,
    persistent: true
  },
  session: {
    name: 'session-preferences',
    storage: () => sessionStorage,
    persistent: false
  },
  memory: {
    name: 'memory-preferences',
    storage: () => ({
      getItem: () => null,
      setItem: () => {},
      removeItem: () => {}
    } as Storage),
    persistent: false
  }
}

// 用户偏好 Store
interface UserPreferencesStore {
  theme: 'light' | 'dark' | 'auto'
  language: string
  notifications: boolean
  layout: 'grid' | 'list'
  storageStrategy: keyof typeof storageStrategies
  
  updatePreference: <K extends keyof UserPreferencesStore>(
    key: K, 
    value: UserPreferencesStore[K]
  ) => void
  switchStorageStrategy: (strategy: keyof typeof storageStrategies) => void
  resetPreferences: () => void
}

const createUserPreferencesStore = (strategy: keyof typeof storageStrategies) => {
  const storageConfig = storageStrategies[strategy]
  
  return create<UserPreferencesStore>()(persist(
    (set, get) => ({
      theme: 'light',
      language: 'en',
      notifications: true,
      layout: 'grid',
      storageStrategy: strategy,
      
      updatePreference: (key, value) => set({ [key]: value }),
      
      switchStorageStrategy: (newStrategy) => {
        const currentState = get()
        // 清除当前存储
        storageConfig.storage().removeItem(storageConfig.name)
        // 更新策略
        set({ storageStrategy: newStrategy })
      },
      
      resetPreferences: () => set({
        theme: 'light',
        language: 'en',
        notifications: true,
        layout: 'grid'
      })
    }),
    {
      name: storageConfig.name,
      storage: createJSONStorage(storageConfig.storage),
      partialize: (state) => ({
        theme: state.theme,
        language: state.language,
        notifications: state.notifications,
        layout: state.layout
        // storageStrategy 不持久化
      })
    }
  ))
}
\`\`\`

### 8. 如何实现一个性能监控的选择器系统？

**答案：**
创建一个带性能监控的选择器装饰器系统：

\`\`\`typescript
// 性能监控接口
interface PerformanceMetrics {
  name: string
  executionTime: number
  callCount: number
  averageTime: number
  lastExecuted: Date
}

// 性能监控 Store
interface PerformanceStore {
  metrics: Record<string, PerformanceMetrics>
  addMetric: (name: string, executionTime: number) => void
  getMetrics: () => PerformanceMetrics[]
  resetMetrics: () => void
}

const usePerformanceStore = create<PerformanceStore>((set, get) => ({
  metrics: {},
  
  addMetric: (name, executionTime) => set(state => {
    const existing = state.metrics[name]
    const newCallCount = (existing?.callCount || 0) + 1
    const totalTime = (existing?.averageTime || 0) * (existing?.callCount || 0) + executionTime
    
    return {
      metrics: {
        ...state.metrics,
        [name]: {
          name,
          executionTime,
          callCount: newCallCount,
          averageTime: totalTime / newCallCount,
          lastExecuted: new Date()
        }
      }
    }
  }),
  
  getMetrics: () => Object.values(get().metrics),
  resetMetrics: () => set({ metrics: {} })
}))

// 性能监控装饰器
function withPerformanceMonitoring<T extends (...args: any[]) => any>(
  selector: T,
  name: string
): T {
  return ((...args: Parameters<T>) => {
    const startTime = performance.now()
    const result = selector(...args)
    const endTime = performance.now()
    
    usePerformanceStore.getState().addMetric(name, endTime - startTime)
    
    return result
  }) as T
}

// 使用示例
const useOptimizedSelectors = () => {
  const expensiveSelector = withPerformanceMonitoring(
    (state: AppState) => {
      // 复杂的计算逻辑
      return state.items
        .filter(item => item.active)
        .map(item => ({ ...item, computed: item.value * 2 }))
        .sort((a, b) => a.computed - b.computed)
    },
    'expensiveSelector'
  )
  
  const userProfileSelector = withPerformanceMonitoring(
    (state: AppState) => ({
      user: state.user,
      isLoggedIn: !!state.user,
      displayName: state.user?.name || 'Guest'
    }),
    'userProfileSelector'
  )
  
  return { expensiveSelector, userProfileSelector }
}
\`\`\`

## 问题排查题

### 9. 用户反馈持久化数据在某些浏览器中丢失，如何排查和解决？

**答案：**

**排查步骤：**

1. **检查浏览器兼容性**
\`\`\`typescript
// 检测存储支持
function checkStorageSupport() {
  try {
    const testKey = '__storage_test__'
    localStorage.setItem(testKey, 'test')
    localStorage.removeItem(testKey)
    return true
  } catch (e) {
    console.warn('localStorage not supported:', e)
    return false
  }
}

// 带降级的存储创建
const createSafeStorage = () => {
  if (checkStorageSupport()) {
    return localStorage
  }
  
  // 内存存储降级
  const memoryStorage = new Map()
  return {
    getItem: (key: string) => memoryStorage.get(key) || null,
    setItem: (key: string, value: string) => memoryStorage.set(key, value),
    removeItem: (key: string) => memoryStorage.delete(key)
  } as Storage
}
\`\`\`

2. **添加错误处理和监控**
\`\`\`typescript
const useSafePersistedStore = create(persist(
  (set) => ({ count: 0 }),
  {
    name: 'safe-storage',
    storage: createJSONStorage(() => createSafeStorage()),
    onRehydrateStorage: () => (state, error) => {
      if (error) {
        console.error('Failed to rehydrate:', error)
        // 发送错误报告
        reportError('storage_rehydration_failed', error)
      } else {
        console.log('Successfully rehydrated:', state)
      }
    }
  }
))
\`\`\`

3. **实现存储健康检查**
\`\`\`typescript
function performStorageHealthCheck() {
  const checks = {
    localStorage: false,
    sessionStorage: false,
    quota: 0,
    usage: 0
  }
  
  try {
    // 检查 localStorage
    localStorage.setItem('__health_check__', 'test')
    localStorage.removeItem('__health_check__')
    checks.localStorage = true
  } catch (e) {
    console.warn('localStorage health check failed:', e)
  }
  
  try {
    // 检查 sessionStorage
    sessionStorage.setItem('__health_check__', 'test')
    sessionStorage.removeItem('__health_check__')
    checks.sessionStorage = true
  } catch (e) {
    console.warn('sessionStorage health check failed:', e)
  }
  
  // 检查存储配额（如果支持）
  if ('storage' in navigator && 'estimate' in navigator.storage) {
    navigator.storage.estimate().then(estimate => {
      checks.quota = estimate.quota || 0
      checks.usage = estimate.usage || 0
    })
  }
  
  return checks
}
\`\`\`

### 10. 如何解决组合选择器导致的性能问题？

**答案：**

**问题识别：**
\`\`\`typescript
// 问题代码：每次都重新计算
const BadSelector = () => {
  const items = useStore(state => state.items)
  const filters = useStore(state => state.filters)
  
  // 每次渲染都会重新计算，即使数据没变
  const filteredItems = items.filter(item => 
    filters.categories.includes(item.category) &&
    item.price >= filters.minPrice &&
    item.price <= filters.maxPrice
  ).sort((a, b) => a.name.localeCompare(b.name))
  
  return <div>{filteredItems.length} items</div>
}
\`\`\`

**解决方案：**

1. **使用 useMemo 优化**
\`\`\`typescript
const OptimizedSelector = () => {
  const items = useStore(state => state.items)
  const filters = useStore(state => state.filters)
  
  const filteredItems = useMemo(() => {
    return items
      .filter(item => 
        filters.categories.includes(item.category) &&
        item.price >= filters.minPrice &&
        item.price <= filters.maxPrice
      )
      .sort((a, b) => a.name.localeCompare(b.name))
  }, [items, filters])
  
  return <div>{filteredItems.length} items</div>
}
\`\`\`

2. **创建专用的选择器 Store**
\`\`\`typescript
interface SelectorStore {
  filteredItems: Item[]
  updateFilteredItems: (items: Item[], filters: Filters) => void
}

const useSelectorStore = create<SelectorStore>((set) => ({
  filteredItems: [],
  updateFilteredItems: (items, filters) => {
    const filtered = items
      .filter(item => 
        filters.categories.includes(item.category) &&
        item.price >= filters.minPrice &&
        item.price <= filters.maxPrice
      )
      .sort((a, b) => a.name.localeCompare(b.name))
    
    set({ filteredItems: filtered })
  }
}))

// 在主 Store 中订阅变化
useStore.subscribe(
  (state) => ({ items: state.items, filters: state.filters }),
  ({ items, filters }) => {
    useSelectorStore.getState().updateFilteredItems(items, filters)
  },
  { equalityFn: shallow }
)
\`\`\`

3. **使用 Proxy 实现懒计算**
\`\`\`typescript
const createLazySelector = <T, R>(
  selector: (state: T) => R,
  equalityFn = Object.is
) => {
  let lastState: T
  let lastResult: R
  let hasComputed = false
  
  return (state: T): R => {
    if (!hasComputed || !equalityFn(state, lastState)) {
      lastResult = selector(state)
      lastState = state
      hasComputed = true
    }
    return lastResult
  }
}

const lazyFilteredItems = createLazySelector(
  (state: AppState) => state.items.filter(item => item.active),
  (a, b) => a.items === b.items
)
\`\`\`

## 最佳实践题

### 11. 如何设计一个企业级的 Zustand 状态管理架构？

**答案：**

**1. 分层架构设计**
\`\`\`typescript
// 领域层 - 业务逻辑
interface UserDomain {
  user: User | null
  permissions: Permission[]
  login: (credentials: LoginCredentials) => Promise<void>
  logout: () => void
  checkPermission: (permission: string) => boolean
}

// 应用层 - 应用状态
interface AppDomain {
  loading: boolean
  error: string | null
  notifications: Notification[]
  setLoading: (loading: boolean) => void
  addNotification: (notification: Notification) => void
}

// UI层 - 界面状态
interface UIDomain {
  theme: Theme
  sidebar: { collapsed: boolean }
  modal: { open: boolean; content: ReactNode }
  toggleSidebar: () => void
  openModal: (content: ReactNode) => void
}
\`\`\`

**2. Store 组合模式**
\`\`\`typescript
// Store 工厂
const createDomainStore = <T>(
  name: string,
  initialState: T,
  actions: (set: SetState<T>, get: GetState<T>) => Partial<T>
) => {
  return create<T>()(devtools(persist(
    (set, get) => ({ ...initialState, ...actions(set, get) }),
    {
      name: \`\${name}-store\`,
      partialize: (state) => {
        // 只持久化非临时状态
        const { loading, error, ...persistedState } = state as any
        return persistedState
      }
    }
  ), { name }))
}

// 领域 Store 创建
const useUserStore = createDomainStore(
  'user',
  { user: null, permissions: [] },
  (set, get) => ({
    login: async (credentials) => {
      set({ loading: true })
      try {
        const { user, permissions } = await authService.login(credentials)
        set({ user, permissions, loading: false })
      } catch (error) {
        set({ error: error.message, loading: false })
      }
    },
    logout: () => set({ user: null, permissions: [] }),
    checkPermission: (permission) => {
      return get().permissions.some(p => p.name === permission)
    }
  })
)
\`\`\`

**3. 中间件组合**
\`\`\`typescript
// 企业级中间件组合
const createEnterpriseStore = <T>(
  name: string,
  config: StateCreator<T>
) => {
  return create<T>()(devtools(
    persist(
      subscribeWithSelector(
        immer(config)
      ),
      {
        name: \`enterprise-\${name}\`,
        version: 1,
        migrate: (persistedState, version) => {
          // 数据迁移逻辑
          return persistedState
        }
      }
    ),
    { name: \`Enterprise \${name}\` }
  ))
}
\`\`\`

### 12. 如何实现 Zustand 的测试策略？

**答案：**

**1. Store 单元测试**
\`\`\`typescript
// Store 测试工具
const createTestStore = <T>(initialState?: Partial<T>) => {
  const store = create<T>()((set, get) => ({
    ...defaultState,
    ...initialState,
    // 测试专用的重置方法
    __reset: () => set(defaultState as T)
  } as T))
  
  return {
    store,
    reset: () => store.getState().__reset(),
    getState: () => store.getState(),
    setState: (state: Partial<T>) => store.setState(state)
  }
}

// 测试示例
describe('UserStore', () => {
  let testStore: ReturnType<typeof createTestStore<UserStore>>
  
  beforeEach(() => {
    testStore = createTestStore<UserStore>()
  })
  
  it('should login user successfully', async () => {
    const mockUser = { id: '1', name: 'Test User' }
    jest.spyOn(authService, 'login').mockResolvedValue(mockUser)
    
    await testStore.getState().login({ email: 'test@test.com', password: 'password' })
    
    expect(testStore.getState().user).toEqual(mockUser)
    expect(testStore.getState().loading).toBe(false)
  })
  
  it('should handle login error', async () => {
    const error = new Error('Invalid credentials')
    jest.spyOn(authService, 'login').mockRejectedValue(error)
    
    await testStore.getState().login({ email: 'test@test.com', password: 'wrong' })
    
    expect(testStore.getState().user).toBeNull()
    expect(testStore.getState().error).toBe('Invalid credentials')
  })
})
\`\`\`

**2. 组件集成测试**
\`\`\`typescript
// 测试工具包装器
const TestStoreProvider: React.FC<{ children: ReactNode; initialState?: any }> = ({ 
  children, 
  initialState 
}) => {
  const TestStore = createTestStore(initialState)
  
  return (
    <TestStoreContext.Provider value={TestStore}>
      {children}
    </TestStoreContext.Provider>
  )
}

// 组件测试
describe('UserProfile Component', () => {
  it('should display user information when logged in', () => {
    const mockUser = { id: '1', name: 'Test User', email: 'test@test.com' }
    
    render(
      <TestStoreProvider initialState={{ user: mockUser }}>
        <UserProfile />
      </TestStoreProvider>
    )
    
    expect(screen.getByText('Test User')).toBeInTheDocument()
    expect(screen.getByText('test@test.com')).toBeInTheDocument()
  })
  
  it('should show login prompt when not logged in', () => {
    render(
      <TestStoreProvider initialState={{ user: null }}>
        <UserProfile />
      </TestStoreProvider>
    )
    
    expect(screen.getByText('Please log in')).toBeInTheDocument()
  })
})
\`\`\`

**3. E2E 测试策略**
\`\`\`typescript
// Cypress 测试
describe('User Authentication Flow', () => {
  beforeEach(() => {
    // 清除持久化存储
    cy.clearLocalStorage()
    cy.clearSessionStorage()
    cy.visit('/login')
  })
  
  it('should persist user session after page refresh', () => {
    // 登录
    cy.get('[data-testid="email"]').type('test@test.com')
    cy.get('[data-testid="password"]').type('password')
    cy.get('[data-testid="login-button"]').click()
    
    // 验证登录状态
    cy.get('[data-testid="user-name"]').should('contain', 'Test User')
    
    // 刷新页面
    cy.reload()
    
    // 验证状态持久化
    cy.get('[data-testid="user-name"]').should('contain', 'Test User')
  })
})
\`\`\`

这些面试题涵盖了 Zustand 高级特性的核心概念、实际应用和最佳实践，适合 30K 薪资水平的前端开发者。每个问题都包含了详细的代码示例和实践指导。`;export{e as default};
