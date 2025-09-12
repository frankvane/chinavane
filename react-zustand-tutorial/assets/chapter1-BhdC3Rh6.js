const n=`# Chapter 1: Zustand 基础概念面试题

## 目标薪资：30K

---

## 一、基础概念题

### 1. 什么是 Zustand？它与其他状态管理库有什么区别？

**答案：**
Zustand 是一个轻量级的 React 状态管理库，具有以下特点：

- **简洁的 API**：使用 \`create\` 函数创建 store，无需复杂的 boilerplate 代码
- **无需 Provider**：不需要在应用顶层包装 Provider，可以直接在任何组件中使用
- **TypeScript 友好**：提供完整的类型推断和类型安全
- **轻量级**：包体积小，性能优秀
- **灵活的架构**：支持多 store、中间件、选择器等高级特性

与其他库的对比：
- **vs Redux**：无需 action/reducer 模式，API 更简洁，不需要 Provider
- **vs Context API**：性能更好，避免了 Context 的重渲染问题
- **vs MobX**：学习成本更低，更接近 React 的函数式编程理念

### 2. Zustand 的 create 函数是如何工作的？

**答案：**
\`create\` 函数是 Zustand 的核心 API，工作原理如下：

\`\`\`typescript
import { create } from 'zustand'

interface CounterState {
  count: number
  increment: () => void
  decrement: () => void
  reset: () => void
}

const useCounterStore = create<CounterState>((set, get) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 })
}))
\`\`\`

**工作机制：**
1. \`create\` 接收一个工厂函数，该函数接收 \`set\`、\`get\`、\`store\` 参数
2. \`set\` 函数用于更新状态，支持对象合并和函数式更新
3. \`get\` 函数用于获取当前状态
4. 返回一个 React Hook，可以在组件中直接使用
5. 自动处理订阅和取消订阅

### 3. set 函数支持哪些更新方式？请举例说明。

**答案：**
\`set\` 函数支持三种主要的更新方式：

**1. 对象合并更新：**
\`\`\`typescript
set({ count: 1 }) // 合并到现有状态
\`\`\`

**2. 函数式更新：**
\`\`\`typescript
set((state) => ({ count: state.count + 1 })) // 基于当前状态计算新状态
\`\`\`

**3. 完全替换：**
\`\`\`typescript
set(newState, true) // 第二个参数为 true 时完全替换状态
\`\`\`

**复杂对象更新示例：**
\`\`\`typescript
// 更新嵌套对象
set((state) => ({
  user: { ...state.user, name: 'New Name' }
}))

// 更新数组
set((state) => ({
  todos: [...state.todos, newTodo]
}))
\`\`\`

### 4. 什么是选择器（Selector）？为什么要使用选择器？

**答案：**
选择器是用于从 store 中选择特定状态片段的函数，具有以下优势：

**定义和使用：**
\`\`\`typescript
// 定义选择器
const selectCount = (state: CounterState) => state.count
const selectIsPositive = (state: CounterState) => state.count > 0

// 在组件中使用
function Counter() {
  const count = useCounterStore(selectCount)
  const isPositive = useCounterStore(selectIsPositive)
  
  return <div>Count: {count} ({isPositive ? 'Positive' : 'Not Positive'})</div>
}
\`\`\`

**使用选择器的原因：**
1. **性能优化**：只有选择的状态变化时才重新渲染
2. **避免不必要的渲染**：不订阅整个 store
3. **代码复用**：选择器可以在多个组件间共享
4. **计算属性**：可以在选择器中进行状态派生
5. **类型安全**：TypeScript 提供完整的类型推断

### 5. 如何在 Zustand 中处理异步操作？

**答案：**
Zustand 中处理异步操作非常直观，可以直接在 action 中使用 async/await：

\`\`\`typescript
interface UserState {
  users: User[]
  loading: boolean
  error: string | null
  fetchUsers: () => Promise<void>
  createUser: (userData: CreateUserData) => Promise<void>
}

const useUserStore = create<UserState>((set, get) => ({
  users: [],
  loading: false,
  error: null,
  
  fetchUsers: async () => {
    set({ loading: true, error: null })
    try {
      const response = await api.getUsers()
      set({ users: response.data, loading: false })
    } catch (error) {
      set({ error: error.message, loading: false })
    }
  },
  
  createUser: async (userData) => {
    set({ loading: true })
    try {
      const newUser = await api.createUser(userData)
      set((state) => ({
        users: [...state.users, newUser],
        loading: false
      }))
    } catch (error) {
      set({ error: error.message, loading: false })
    }
  }
}))
\`\`\`

**关键点：**
- 在异步操作开始时设置 loading 状态
- 使用 try/catch 处理错误
- 在操作完成后更新相应的状态
- 可以使用 \`get()\` 获取当前状态进行条件判断

---

## 二、进阶概念题

### 6. 什么是中间件（Middleware）？Zustand 中常用的中间件有哪些？

**答案：**
中间件是增强 store 功能的高阶函数，它们包装原始的 store 配置来添加额外功能。

**常用中间件：**

**1. persist 中间件（状态持久化）：**
\`\`\`typescript
import { persist } from 'zustand/middleware'

const useStore = create(
  persist(
    (set) => ({
      count: 0,
      increment: () => set((state) => ({ count: state.count + 1 }))
    }),
    {
      name: 'counter-storage', // 存储键名
      partialize: (state) => ({ count: state.count }) // 选择要持久化的字段
    }
  )
)
\`\`\`

**2. devtools 中间件（开发者工具）：**
\`\`\`typescript
import { devtools } from 'zustand/middleware'

const useStore = create(
  devtools(
    (set) => ({
      count: 0,
      increment: () => set((state) => ({ count: state.count + 1 }))
    }),
    { name: 'Counter Store' }
  )
)
\`\`\`

**3. 自定义日志中间件：**
\`\`\`typescript
const logger = (config) => (set, get, api) =>
  config(
    (...args) => {
      console.log('Previous state:', get())
      set(...args)
      console.log('New state:', get())
    },
    get,
    api
  )
\`\`\`

**4. 组合多个中间件：**
\`\`\`typescript
const useStore = create(
  devtools(
    persist(
      logger((set) => ({
        // store 配置
      })),
      { name: 'app-storage' }
    ),
    { name: 'App Store' }
  )
)
\`\`\`

### 7. 如何实现多 Store 架构？什么时候应该拆分 Store？

**答案：**
多 Store 架构按业务领域拆分状态管理，提高代码的可维护性和可扩展性。

**实现示例：**

\`\`\`typescript
// 用户 Store
interface UserState {
  user: User | null
  login: (credentials: LoginData) => Promise<void>
  logout: () => void
}

const useUserStore = create<UserState>((set) => ({
  user: null,
  login: async (credentials) => {
    const user = await authAPI.login(credentials)
    set({ user })
  },
  logout: () => set({ user: null })
}))

// 购物车 Store
interface CartState {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (id: string) => void
  clear: () => void
}

const useCartStore = create<CartState>((set) => ({
  items: [],
  addItem: (item) => set((state) => ({ 
    items: [...state.items, item] 
  })),
  removeItem: (id) => set((state) => ({
    items: state.items.filter(item => item.id !== id)
  })),
  clear: () => set({ items: [] })
}))

// 在组件中组合使用
function CheckoutPage() {
  const user = useUserStore(state => state.user)
  const items = useCartStore(state => state.items)
  const clearCart = useCartStore(state => state.clear)
  const logout = useUserStore(state => state.logout)
  
  const handleCheckout = () => {
    if (!user) {
      // 提示登录
      return
    }
    // 执行结算逻辑
    clearCart()
  }
  
  return (
    // JSX
  )
}
\`\`\`

**何时拆分 Store：**
1. **按业务领域**：用户管理、购物车、订单等
2. **按生命周期**：全局状态 vs 页面级状态
3. **按访问频率**：高频更新的状态单独管理
4. **按团队分工**：不同团队负责不同模块
5. **按持久化需求**：需要持久化的状态单独管理

### 8. 如何优化 Zustand 应用的性能？

**答案：**
性能优化的关键策略：

**1. 使用精确的选择器：**
\`\`\`typescript
// ❌ 订阅整个 store
const state = useStore()

// ✅ 只订阅需要的字段
const count = useStore(state => state.count)
const name = useStore(state => state.user.name)
\`\`\`

**2. 选择器返回原始值：**
\`\`\`typescript
// ❌ 返回新对象，每次都会重新渲染
const userInfo = useStore(state => ({ 
  name: state.user.name, 
  age: state.user.age 
}))

// ✅ 分别订阅原始值
const userName = useStore(state => state.user.name)
const userAge = useStore(state => state.user.age)
\`\`\`

**3. 使用 shallow 比较：**
\`\`\`typescript
import { shallow } from 'zustand/shallow'

const { name, age } = useStore(
  state => ({ name: state.user.name, age: state.user.age }),
  shallow
)
\`\`\`

**4. 合理拆分组件：**
\`\`\`typescript
// 将大组件拆分为小组件，每个组件只订阅需要的状态
function UserProfile() {
  return (
    <div>
      <UserName />
      <UserAge />
      <UserEmail />
    </div>
  )
}

function UserName() {
  const name = useStore(state => state.user.name)
  return <span>{name}</span>
}
\`\`\`

**5. 批量更新：**
\`\`\`typescript
// ❌ 多次更新
set({ loading: true })
set({ error: null })
set({ data: newData })

// ✅ 批量更新
set({ loading: true, error: null, data: newData })
\`\`\`

---

## 三、实践应用题

### 9. 如何设计一个用户认证的 Store？包含登录、登出、token 刷新等功能。

**答案：**

\`\`\`typescript
interface User {
  id: string
  name: string
  email: string
  role: string
}

interface AuthState {
  user: User | null
  token: string | null
  refreshToken: string | null
  isLoading: boolean
  error: string | null
  
  // Actions
  login: (credentials: LoginCredentials) => Promise<void>
  logout: () => void
  refreshAuth: () => Promise<void>
  clearError: () => void
  updateProfile: (updates: Partial<User>) => Promise<void>
}

const useAuthStore = create<AuthState>()(
  persist(
    devtools(
      (set, get) => ({
        user: null,
        token: null,
        refreshToken: null,
        isLoading: false,
        error: null,
        
        login: async (credentials) => {
          set({ isLoading: true, error: null })
          try {
            const response = await authAPI.login(credentials)
            set({
              user: response.user,
              token: response.token,
              refreshToken: response.refreshToken,
              isLoading: false
            })
          } catch (error) {
            set({ 
              error: error.message, 
              isLoading: false 
            })
          }
        },
        
        logout: () => {
          // 清除本地存储
          localStorage.removeItem('auth-storage')
          set({
            user: null,
            token: null,
            refreshToken: null,
            error: null
          })
        },
        
        refreshAuth: async () => {
          const { refreshToken } = get()
          if (!refreshToken) {
            get().logout()
            return
          }
          
          try {
            const response = await authAPI.refreshToken(refreshToken)
            set({
              token: response.token,
              refreshToken: response.refreshToken
            })
          } catch (error) {
            get().logout()
          }
        },
        
        clearError: () => set({ error: null }),
        
        updateProfile: async (updates) => {
          const { user } = get()
          if (!user) return
          
          set({ isLoading: true })
          try {
            const updatedUser = await userAPI.updateProfile(user.id, updates)
            set({ 
              user: updatedUser, 
              isLoading: false 
            })
          } catch (error) {
            set({ 
              error: error.message, 
              isLoading: false 
            })
          }
        }
      }),
      { name: 'Auth Store' }
    ),
    {
      name: 'auth-storage',
      partialize: (state) => ({
        user: state.user,
        token: state.token,
        refreshToken: state.refreshToken
      })
    }
  )
)

// 选择器
export const selectUser = (state: AuthState) => state.user
export const selectIsAuthenticated = (state: AuthState) => !!state.token
export const selectIsLoading = (state: AuthState) => state.isLoading
export const selectError = (state: AuthState) => state.error
\`\`\`

### 10. 如何实现一个支持撤销/重做功能的 Store？

**答案：**

\`\`\`typescript
interface HistoryState<T> {
  past: T[]
  present: T
  future: T[]
}

interface UndoRedoActions {
  undo: () => void
  redo: () => void
  canUndo: boolean
  canRedo: boolean
}

function createUndoRedoStore<T>(initialState: T) {
  return create<HistoryState<T> & UndoRedoActions & T>()(
    devtools(
      (set, get) => ({
        // 历史状态
        past: [],
        present: initialState,
        future: [],
        
        // 计算属性
        get canUndo() {
          return get().past.length > 0
        },
        
        get canRedo() {
          return get().future.length > 0
        },
        
        // 撤销操作
        undo: () => {
          const { past, present, future } = get()
          if (past.length === 0) return
          
          const previous = past[past.length - 1]
          const newPast = past.slice(0, past.length - 1)
          
          set({
            past: newPast,
            present: previous,
            future: [present, ...future],
            ...previous // 展开当前状态
          })
        },
        
        // 重做操作
        redo: () => {
          const { past, present, future } = get()
          if (future.length === 0) return
          
          const next = future[0]
          const newFuture = future.slice(1)
          
          set({
            past: [...past, present],
            present: next,
            future: newFuture,
            ...next // 展开下一个状态
          })
        },
        
        // 包装更新函数以支持历史记录
        updateWithHistory: (updater: (state: T) => T) => {
          const { past, present, future } = get()
          const newState = updater(present)
          
          set({
            past: [...past, present],
            present: newState,
            future: [], // 清空 future
            ...newState
          })
        },
        
        // 初始状态的属性
        ...initialState
      }),
      { name: 'Undo Redo Store' }
    )
  )
}

// 使用示例
interface CounterState {
  count: number
  increment: () => void
  decrement: () => void
  reset: () => void
}

const useCounterStore = createUndoRedoStore<Pick<CounterState, 'count'>>({
  count: 0
})

// 扩展 actions
const useCounterActions = () => {
  const updateWithHistory = useCounterStore(state => state.updateWithHistory)
  
  return {
    increment: () => updateWithHistory(state => ({ count: state.count + 1 })),
    decrement: () => updateWithHistory(state => ({ count: state.count - 1 })),
    reset: () => updateWithHistory(() => ({ count: 0 }))
  }
}
\`\`\`

---

## 四、问题排查题

### 11. 组件频繁重新渲染，如何排查和解决？

**答案：**

**排查步骤：**

1. **使用 React DevTools Profiler**：
   - 记录组件渲染性能
   - 查看哪些组件在不必要的时候重新渲染
   - 分析渲染原因

2. **添加渲染计数器**：
\`\`\`typescript
function DebugComponent() {
  const renderCount = useRef(0)
  renderCount.current++
  
  console.log(\`Component rendered \${renderCount.current} times\`)
  
  return <div>Render count: {renderCount.current}</div>
}
\`\`\`

3. **检查选择器使用**：
\`\`\`typescript
// ❌ 问题：订阅整个 store
const state = useStore()

// ❌ 问题：选择器返回新对象
const userInfo = useStore(state => ({
  name: state.user.name,
  age: state.user.age
}))

// ✅ 解决：使用精确选择器
const userName = useStore(state => state.user.name)
const userAge = useStore(state => state.user.age)

// ✅ 解决：使用 shallow 比较
const userInfo = useStore(
  state => ({ name: state.user.name, age: state.user.age }),
  shallow
)
\`\`\`

**常见问题和解决方案：**

1. **选择器引用不稳定**：
\`\`\`typescript
// ❌ 每次渲染都创建新函数
function Component() {
  const data = useStore(state => state.items.filter(item => item.active))
}

// ✅ 使用 useMemo 或将选择器提取到组件外
const selectActiveItems = state => state.items.filter(item => item.active)

function Component() {
  const data = useStore(selectActiveItems)
}
\`\`\`

2. **状态更新过于频繁**：
\`\`\`typescript
// ❌ 多次单独更新
actions.forEach(action => {
  set(state => ({ ...state, [action.id]: action.value }))
})

// ✅ 批量更新
set(state => {
  const updates = {}
  actions.forEach(action => {
    updates[action.id] = action.value
  })
  return { ...state, ...updates }
})
\`\`\`

### 12. 状态更新后组件没有重新渲染，可能的原因有哪些？

**答案：**

**可能原因和解决方案：**

1. **直接修改状态对象**：
\`\`\`typescript
// ❌ 直接修改，不会触发重新渲染
set(state => {
  state.user.name = 'New Name' // 直接修改
  return state
})

// ✅ 不可变更新
set(state => ({
  ...state,
  user: { ...state.user, name: 'New Name' }
}))
\`\`\`

2. **选择器比较问题**：
\`\`\`typescript
// ❌ 选择器返回相同的引用
const selectUser = state => state.user // 如果 user 对象没有变化

// ✅ 选择具体的值
const selectUserName = state => state.user.name
\`\`\`

3. **异步更新时机问题**：
\`\`\`typescript
// ❌ 在异步回调中使用过期的状态
setTimeout(() => {
  set({ count: count + 1 }) // count 可能是过期的值
}, 1000)

// ✅ 使用函数式更新
setTimeout(() => {
  set(state => ({ count: state.count + 1 }))
}, 1000)
\`\`\`

4. **组件没有正确订阅**：
\`\`\`typescript
// ❌ 没有使用 store
function Component() {
  const { count } = useCounterStore.getState() // 不会订阅更新
  return <div>{count}</div>
}

// ✅ 正确订阅
function Component() {
  const count = useCounterStore(state => state.count)
  return <div>{count}</div>
}
\`\`\`

---

## 五、最佳实践题

### 13. 在大型项目中如何组织 Zustand Store 的文件结构？

**答案：**

**推荐的文件结构：**

\`\`\`
src/
├── stores/
│   ├── index.ts                 # 导出所有 stores
│   ├── auth/
│   │   ├── index.ts            # 导出 auth store
│   │   ├── types.ts            # 类型定义
│   │   ├── store.ts            # store 实现
│   │   ├── selectors.ts        # 选择器
│   │   └── actions.ts          # 复杂 actions（可选）
│   ├── user/
│   │   ├── index.ts
│   │   ├── types.ts
│   │   ├── store.ts
│   │   └── selectors.ts
│   ├── cart/
│   │   ├── index.ts
│   │   ├── types.ts
│   │   ├── store.ts
│   │   └── selectors.ts
│   └── ui/
│       ├── index.ts
│       ├── types.ts
│       ├── store.ts
│       └── selectors.ts
├── hooks/
│   ├── useAuth.ts              # 自定义 hooks
│   ├── useCart.ts
│   └── useUI.ts
└── utils/
    ├── storage.ts              # 持久化工具
    └── middleware.ts           # 自定义中间件
\`\`\`

**具体实现示例：**

\`\`\`typescript
// stores/auth/types.ts
export interface User {
  id: string
  name: string
  email: string
  role: 'admin' | 'user'
}

export interface AuthState {
  user: User | null
  token: string | null
  isLoading: boolean
  error: string | null
}

export interface AuthActions {
  login: (credentials: LoginCredentials) => Promise<void>
  logout: () => void
  refreshToken: () => Promise<void>
  clearError: () => void
}

// stores/auth/selectors.ts
import type { AuthState } from './types'

export const selectUser = (state: AuthState) => state.user
export const selectIsAuthenticated = (state: AuthState) => !!state.token
export const selectIsLoading = (state: AuthState) => state.isLoading
export const selectError = (state: AuthState) => state.error
export const selectUserRole = (state: AuthState) => state.user?.role
export const selectIsAdmin = (state: AuthState) => state.user?.role === 'admin'

// stores/auth/store.ts
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import type { AuthState, AuthActions } from './types'

export const useAuthStore = create<AuthState & AuthActions>()()
  devtools(
    persist(
      (set, get) => ({
        // state
        user: null,
        token: null,
        isLoading: false,
        error: null,
        
        // actions
        login: async (credentials) => {
          // 实现登录逻辑
        },
        logout: () => {
          // 实现登出逻辑
        },
        refreshToken: async () => {
          // 实现 token 刷新逻辑
        },
        clearError: () => set({ error: null })
      }),
      {
        name: 'auth-storage',
        partialize: (state) => ({
          user: state.user,
          token: state.token
        })
      }
    ),
    { name: 'Auth Store' }
  )

// stores/auth/index.ts
export { useAuthStore } from './store'
export * from './selectors'
export * from './types'

// hooks/useAuth.ts
import { useAuthStore, selectUser, selectIsAuthenticated } from '../stores/auth'

export function useAuth() {
  const user = useAuthStore(selectUser)
  const isAuthenticated = useAuthStore(selectIsAuthenticated)
  const login = useAuthStore(state => state.login)
  const logout = useAuthStore(state => state.logout)
  
  return {
    user,
    isAuthenticated,
    login,
    logout
  }
}
\`\`\`

### 14. 如何为 Zustand Store 编写单元测试？

**答案：**

**测试策略：**

1. **测试 Store 的初始状态**
2. **测试 Actions 的状态更新**
3. **测试选择器的返回值**
4. **测试异步操作**
5. **测试中间件功能**

**测试实现示例：**

\`\`\`typescript
// __tests__/stores/counter.test.ts
import { act, renderHook } from '@testing-library/react'
import { useCounterStore } from '../stores/counter'

// 在每个测试前重置 store
beforeEach(() => {
  useCounterStore.setState({ count: 0 })
})

describe('Counter Store', () => {
  it('should have initial state', () => {
    const { result } = renderHook(() => useCounterStore())
    
    expect(result.current.count).toBe(0)
  })
  
  it('should increment count', () => {
    const { result } = renderHook(() => useCounterStore())
    
    act(() => {
      result.current.increment()
    })
    
    expect(result.current.count).toBe(1)
  })
  
  it('should decrement count', () => {
    const { result } = renderHook(() => useCounterStore())
    
    // 先设置初始值
    act(() => {
      useCounterStore.setState({ count: 5 })
    })
    
    act(() => {
      result.current.decrement()
    })
    
    expect(result.current.count).toBe(4)
  })
  
  it('should reset count', () => {
    const { result } = renderHook(() => useCounterStore())
    
    // 先设置一个非零值
    act(() => {
      useCounterStore.setState({ count: 10 })
    })
    
    act(() => {
      result.current.reset()
    })
    
    expect(result.current.count).toBe(0)
  })
})

// 测试选择器
describe('Counter Selectors', () => {
  it('should select count correctly', () => {
    const { result } = renderHook(() => 
      useCounterStore(state => state.count)
    )
    
    expect(result.current).toBe(0)
    
    act(() => {
      useCounterStore.setState({ count: 5 })
    })
    
    expect(result.current).toBe(5)
  })
})

// 测试异步操作
describe('Async Actions', () => {
  it('should handle async increment', async () => {
    const { result } = renderHook(() => useCounterStore())
    
    await act(async () => {
      await result.current.asyncIncrement()
    })
    
    expect(result.current.count).toBe(1)
    expect(result.current.isLoading).toBe(false)
  })
  
  it('should handle async errors', async () => {
    // Mock API 失败
    jest.spyOn(api, 'increment').mockRejectedValue(new Error('API Error'))
    
    const { result } = renderHook(() => useCounterStore())
    
    await act(async () => {
      await result.current.asyncIncrement()
    })
    
    expect(result.current.error).toBe('API Error')
    expect(result.current.isLoading).toBe(false)
  })
})
\`\`\`

**测试工具函数：**

\`\`\`typescript
// test-utils/store-utils.ts
import type { StateCreator } from 'zustand'

// 创建测试用的 store
export function createTestStore<T>(storeConfig: StateCreator<T>) {
  const store = create(storeConfig)
  
  // 添加重置功能
  const reset = () => {
    const initialState = storeConfig(
      store.setState,
      store.getState,
      store
    )
    store.setState(initialState, true)
  }
  
  return { store, reset }
}

// 测试中间件
export function testMiddleware<T>(
  middleware: any,
  storeConfig: StateCreator<T>
) {
  const { store } = createTestStore(middleware(storeConfig))
  return store
}
\`\`\`

---

## 六、总结

### 核心知识点

1. **基础概念**：create 函数、set/get 函数、选择器
2. **状态更新**：不可变更新、函数式更新、批量更新
3. **性能优化**：精确选择器、shallow 比较、组件拆分
4. **中间件**：persist、devtools、自定义中间件
5. **架构设计**：多 Store、文件组织、最佳实践
6. **测试策略**：单元测试、集成测试、Mock 处理

### 面试重点

- 理解 Zustand 的核心原理和优势
- 掌握性能优化的关键技巧
- 能够设计合理的 Store 架构
- 具备问题排查和解决能力
- 了解最佳实践和代码组织方式

### 实际应用能力

- 能够独立设计和实现复杂的状态管理方案
- 具备大型项目的架构设计能力
- 掌握性能优化和问题排查技能
- 能够编写高质量的测试代码
`;export{n as default};
