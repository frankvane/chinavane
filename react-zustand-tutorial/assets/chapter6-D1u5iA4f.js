const e=`# Chapter 6: Zustand 高级集成与跨平台应用 - 面试题

## 基础概念题

### 1. React Query 与 Zustand 的职责分离原则是什么？

**答案：**
- **React Query**：负责服务端状态管理，包括数据获取、缓存、重试、并发去重等
- **Zustand**：负责客户端UI状态和交互状态管理，如选中项、筛选条件、全局UI状态等
- **核心原则**：避免双份真相，不要将远程数据复制到Zustand中

\`\`\`typescript
// ❌ 错误：在Zustand中复制远程数据
interface BadStore {
  users: User[];
  selectedUserId?: number;
  fetchUsers: () => void;
}

// ✅ 正确：职责分离
// React Query管理远程数据
const { data: users } = useQuery({ queryKey: ['users'], queryFn: fetchUsers });

// Zustand仅管理交互状态
interface UIStore {
  selectedUserId?: number;
  selectUser: (id?: number) => void;
}
\`\`\`

### 2. React 18 并发特性中 useTransition 和 useDeferredValue 的区别？

**答案：**
- **useTransition**：将状态更新标记为非紧急，可被中断，保持交互响应性
- **useDeferredValue**：推迟昂贵计算的消费，输入保持即时响应

\`\`\`typescript
// useTransition - 标记更新为非紧急
const [isPending, startTransition] = useTransition();
const handleFilter = (value: string) => {
  startTransition(() => {
    setFilter(value); // 非紧急更新
  });
};

// useDeferredValue - 推迟昂贵计算
const [query, setQuery] = useState('');
const deferredQuery = useDeferredValue(query);
const filteredItems = useMemo(() => {
  return items.filter(item => item.name.includes(deferredQuery));
}, [items, deferredQuery]);
\`\`\`

### 3. SSR/Server Components 中 Zustand 的注水（hydration）机制？

**答案：**
注水是将服务端初始状态注入到客户端store的过程：

\`\`\`typescript
// 服务端状态类型
interface SSRState {
  users: UserProfile[];
  hydratedAt?: number;
}

// Store定义
const useSSRStore = create<SSRStore>((set) => ({
  users: [],
  hydratedAt: undefined,
  // 注水方法
  hydrate: (state: Partial<SSRState>) => 
    set((prev) => ({ ...prev, ...state, hydratedAt: Date.now() })),
  reset: () => set({ users: [], hydratedAt: undefined })
}));

// 客户端使用
const hydrate = useSSRStore(s => s.hydrate);
useEffect(() => {
  // 从服务端注入的数据恢复状态
  const serverData = window.__INITIAL_STATE__;
  if (serverData) {
    hydrate(serverData);
  }
}, []);
\`\`\`

## 进阶概念题

### 4. 如何设计跨平台（Web/React Native）的 Zustand Store？

**答案：**
使用适配器模式抽象平台差异：

\`\`\`typescript
// 平台适配器接口
interface PlatformAdapter {
  platformName: string;
  now: () => number;
  getItem: (key: string) => Promise<string | null> | string | null;
  setItem: (key: string, value: string) => Promise<void> | void;
  removeItem: (key: string) => Promise<void> | void;
}

// Web适配器
const webAdapter: PlatformAdapter = {
  platformName: 'web',
  now: () => performance.now(),
  getItem: (key) => localStorage.getItem(key),
  setItem: (key, value) => localStorage.setItem(key, value),
  removeItem: (key) => localStorage.removeItem(key)
};

// React Native适配器
const rnAdapter: PlatformAdapter = {
  platformName: 'react-native',
  now: () => Date.now(),
  getItem: (key) => AsyncStorage.getItem(key),
  setItem: (key, value) => AsyncStorage.setItem(key, value),
  removeItem: (key) => AsyncStorage.removeItem(key)
};

// 创建跨平台Store
const createCrossplatformStore = (adapter: PlatformAdapter) => 
  create<Store>((set, get) => ({
    data: null,
    save: async () => {
      const state = get();
      await adapter.setItem('app-state', JSON.stringify(state.data));
    },
    load: async () => {
      const saved = await adapter.getItem('app-state');
      if (saved) {
        set({ data: JSON.parse(saved) });
      }
    }
  }));
\`\`\`

### 5. React Query 的缓存失效策略与 Zustand 如何协作？

**答案：**
通过精准的queryKey失效和Zustand状态同步：

\`\`\`typescript
// Zustand管理UI状态
const useUIStore = create<UIStore>((set) => ({
  selectedUserId: undefined,
  selectUser: (id?: number) => set({ selectedUserId: id })
}));

// React Query + Mutation
const useCreateUser = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: createUser,
    onSuccess: (newUser) => {
      // 精准失效用户列表查询
      queryClient.invalidateQueries({ queryKey: ['users'] });
      
      // 可选：乐观更新
      queryClient.setQueryData(['users'], (old: User[]) => 
        old ? [...old, newUser] : [newUser]
      );
      
      // 同步选中状态到Zustand
      useUIStore.getState().selectUser(newUser.id);
    },
    onError: (error) => {
      // 错误处理，不影响Zustand状态
      console.error('创建用户失败:', error);
    }
  });
};

// 组件中使用
const UserList = () => {
  const { data: users } = useQuery({ queryKey: ['users'], queryFn: fetchUsers });
  const selectedUserId = useUIStore(s => s.selectedUserId);
  const selectUser = useUIStore(s => s.selectUser);
  const createUserMutation = useCreateUser();
  
  return (
    <div>
      {users?.map(user => (
        <div 
          key={user.id}
          className={selectedUserId === user.id ? 'selected' : ''}
          onClick={() => selectUser(user.id)}
        >
          {user.name}
        </div>
      ))}
    </div>
  );
};
\`\`\`

## 实践应用题

### 6. 实现一个支持 Suspense 的资源加载器与 Zustand 协作

**答案：**

\`\`\`typescript
// 资源加载器
function createResource<T>(loader: () => Promise<T>) {
  let status: 'pending' | 'success' | 'error' = 'pending';
  let result: any;
  
  const promise = loader().then(
    (data) => {
      status = 'success';
      result = data;
    },
    (error) => {
      status = 'error';
      result = error;
    }
  );
  
  return {
    read() {
      if (status === 'pending') throw promise;
      if (status === 'error') throw result;
      return result as T;
    }
  };
}

// Zustand Store管理加载状态
interface ResourceStore {
  loadingTimes: number[];
  addLoadTime: (time: number) => void;
  clearTimes: () => void;
}

const useResourceStore = create<ResourceStore>((set) => ({
  loadingTimes: [],
  addLoadTime: (time) => set((s) => ({ 
    loadingTimes: [...s.loadingTimes, time] 
  })),
  clearTimes: () => set({ loadingTimes: [] })
}));

// 使用Suspense的组件
const SuspenseDemo = () => {
  const [resource, setResource] = useState<any>(null);
  const addLoadTime = useResourceStore(s => s.addLoadTime);
  const loadingTimes = useResourceStore(s => s.loadingTimes);
  
  const handleLoad = () => {
    const startTime = performance.now();
    const newResource = createResource(async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      const endTime = performance.now();
      addLoadTime(endTime - startTime);
      return { data: 'Loaded data', timestamp: Date.now() };
    });
    setResource(newResource);
  };
  
  return (
    <div>
      <button onClick={handleLoad}>加载资源</button>
      <div>加载次数: {loadingTimes.length}</div>
      <div>平均耗时: {loadingTimes.length > 0 ? 
        Math.round(loadingTimes.reduce((a, b) => a + b, 0) / loadingTimes.length) : 0}ms
      </div>
      
      {resource && (
        <Suspense fallback={<div>Loading...</div>}>
          <ResourceDisplay resource={resource} />
        </Suspense>
      )}
    </div>
  );
};

const ResourceDisplay = ({ resource }: { resource: any }) => {
  const data = resource.read();
  return <div>数据: {JSON.stringify(data)}</div>;
};
\`\`\`

### 7. 设计一个支持序列化和版本迁移的持久化方案

**答案：**

\`\`\`typescript
// 版本化状态接口
interface VersionedState {
  version: number;
  data: any;
  timestamp: number;
}

// 迁移函数类型
type MigrationFn = (oldData: any) => any;

// 持久化管理器
class PersistenceManager {
  private currentVersion = 2;
  private migrations: Record<number, MigrationFn> = {
    1: (data) => ({ ...data, newField: 'default' }),
    2: (data) => ({ ...data, settings: data.settings || {} })
  };
  
  serialize(state: any): string {
    const versionedState: VersionedState = {
      version: this.currentVersion,
      data: this.sanitizeForSerialization(state),
      timestamp: Date.now()
    };
    return JSON.stringify(versionedState);
  }
  
  deserialize(serialized: string): any {
    try {
      const parsed: VersionedState = JSON.parse(serialized);
      return this.migrate(parsed);
    } catch (error) {
      console.warn('反序列化失败:', error);
      return null;
    }
  }
  
  private migrate(versionedState: VersionedState): any {
    let { data, version } = versionedState;
    
    // 执行必要的迁移
    while (version < this.currentVersion) {
      const migration = this.migrations[version + 1];
      if (migration) {
        data = migration(data);
        version++;
      } else {
        break;
      }
    }
    
    return data;
  }
  
  private sanitizeForSerialization(state: any): any {
    // 移除不需要序列化的字段
    const { temporaryData, ...serializable } = state;
    return serializable;
  }
}

// 在Store中使用
const persistenceManager = new PersistenceManager();

interface AppStore {
  user: User | null;
  settings: Settings;
  temporaryData: any; // 不会被序列化
  save: () => void;
  load: () => void;
}

const useAppStore = create<AppStore>((set, get) => ({
  user: null,
  settings: { theme: 'light', language: 'zh' },
  temporaryData: null,
  
  save: () => {
    const state = get();
    const serialized = persistenceManager.serialize(state);
    localStorage.setItem('app-state', serialized);
  },
  
  load: () => {
    const serialized = localStorage.getItem('app-state');
    if (serialized) {
      const data = persistenceManager.deserialize(serialized);
      if (data) {
        set((prev) => ({ ...prev, ...data }));
      }
    }
  }
}));
\`\`\`

## 问题排查题

### 8. React Query 缓存与 Zustand 状态不同步的问题如何排查？

**答案：**

**常见原因和解决方案：**

1. **双份真相问题**
\`\`\`typescript
// ❌ 问题：在Zustand中复制了React Query的数据
const useBadStore = create((set) => ({
  users: [], // 与React Query的users重复
  setUsers: (users) => set({ users })
}));

// ✅ 解决：只在Zustand中存储UI状态
const useUIStore = create((set) => ({
  selectedUserId: undefined,
  selectUser: (id) => set({ selectedUserId: id })
}));
\`\`\`

2. **缓存失效时机不当**
\`\`\`typescript
// ❌ 问题：Mutation后没有正确失效缓存
const useCreateUser = () => {
  return useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      // 忘记失效缓存，导致列表不更新
    }
  });
};

// ✅ 解决：正确的失效策略
const useCreateUser = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    }
  });
};
\`\`\`

3. **选择器订阅问题**
\`\`\`typescript
// ❌ 问题：选择器返回新对象导致不必要渲染
const selectedUser = useUIStore(s => ({ 
  id: s.selectedUserId,
  data: users?.find(u => u.id === s.selectedUserId) 
})); // 每次都是新对象

// ✅ 解决：使用稳定的选择器
const selectedUserId = useUIStore(s => s.selectedUserId);
const selectedUser = useMemo(() => 
  users?.find(u => u.id === selectedUserId), 
  [users, selectedUserId]
);
\`\`\`

**排查工具：**
\`\`\`typescript
// React Query DevTools
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

// Zustand DevTools
const useStore = create(
  devtools((set) => ({ /* ... */ }), { name: 'MyStore' })
);

// 自定义同步检查
const useSyncChecker = () => {
  const { data: queryUsers } = useQuery({ queryKey: ['users'], queryFn: fetchUsers });
  const selectedUserId = useUIStore(s => s.selectedUserId);
  
  useEffect(() => {
    if (selectedUserId && queryUsers) {
      const exists = queryUsers.some(u => u.id === selectedUserId);
      if (!exists) {
        console.warn('选中的用户在查询结果中不存在', { selectedUserId, queryUsers });
      }
    }
  }, [selectedUserId, queryUsers]);
};
\`\`\`

### 9. 并发模式下状态更新丢失的问题如何解决？

**答案：**

**问题分析：**
在React 18并发模式下，状态更新可能被中断，导致状态丢失或不一致。

**解决方案：**

1. **使用 startTransition 包装非紧急更新**
\`\`\`typescript
const useSearchStore = create<SearchStore>((set) => ({
  query: '',
  results: [],
  isSearching: false,
  
  setQuery: (query: string) => {
    set({ query });
    
    // 使用 startTransition 包装搜索逻辑
    startTransition(() => {
      set({ isSearching: true });
      performSearch(query).then(results => {
        set({ results, isSearching: false });
      });
    });
  }
}));
\`\`\`

2. **使用 useDeferredValue 延迟昂贵计算**
\`\`\`typescript
const SearchComponent = () => {
  const query = useSearchStore(s => s.query);
  const setQuery = useSearchStore(s => s.setQuery);
  
  // 延迟搜索查询，保持输入响应性
  const deferredQuery = useDeferredValue(query);
  
  const filteredResults = useMemo(() => {
    return performExpensiveFilter(deferredQuery);
  }, [deferredQuery]);
  
  return (
    <div>
      <input 
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="搜索..."
      />
      {filteredResults.map(result => (
        <div key={result.id}>{result.title}</div>
      ))}
    </div>
  );
};
\`\`\`

3. **批量更新和状态合并**
\`\`\`typescript
const useBatchStore = create<BatchStore>((set) => ({
  items: [],
  
  // 批量添加项目，避免多次渲染
  addItemsBatch: (newItems: Item[]) => {
    set((state) => ({
      items: [...state.items, ...newItems]
    }));
  },
  
  // 使用 unstable_batchedUpdates 确保原子性
  updateMultipleFields: (updates: Partial<BatchStore>) => {
    unstable_batchedUpdates(() => {
      set((state) => ({ ...state, ...updates }));
    });
  }
}));
\`\`\`

## 最佳实践题

### 10. 设计一个大型应用的 Zustand + React Query 架构

**答案：**

\`\`\`typescript
// 1. 分层架构设计

// API层 - React Query
const useUsersQuery = () => useQuery({
  queryKey: ['users'],
  queryFn: fetchUsers,
  staleTime: 5 * 60 * 1000, // 5分钟
  gcTime: 10 * 60 * 1000   // 10分钟
});

const useUserMutations = () => {
  const queryClient = useQueryClient();
  
  const createUser = useMutation({
    mutationFn: createUserAPI,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    }
  });
  
  const updateUser = useMutation({
    mutationFn: updateUserAPI,
    onSuccess: (updatedUser) => {
      queryClient.setQueryData(['users'], (old: User[]) => 
        old?.map(user => user.id === updatedUser.id ? updatedUser : user)
      );
    }
  });
  
  return { createUser, updateUser };
};

// UI状态层 - Zustand
interface UIStore {
  // 全局UI状态
  sidebarOpen: boolean;
  theme: 'light' | 'dark';
  
  // 页面级状态
  selectedUserId?: number;
  userFilters: UserFilters;
  
  // 动作
  toggleSidebar: () => void;
  setTheme: (theme: 'light' | 'dark') => void;
  selectUser: (id?: number) => void;
  setUserFilters: (filters: Partial<UserFilters>) => void;
}

const useUIStore = create<UIStore>()()
  devtools(
    persist(
      (set) => ({
        sidebarOpen: false,
        theme: 'light',
        selectedUserId: undefined,
        userFilters: { status: 'all', role: 'all' },
        
        toggleSidebar: () => set((s) => ({ sidebarOpen: !s.sidebarOpen })),
        setTheme: (theme) => set({ theme }),
        selectUser: (id) => set({ selectedUserId: id }),
        setUserFilters: (filters) => set((s) => ({ 
          userFilters: { ...s.userFilters, ...filters } 
        }))
      }),
      {
        name: 'ui-store',
        partialize: (state) => ({ 
          theme: state.theme,
          userFilters: state.userFilters 
        })
      }
    ),
    { name: 'UIStore' }
  );

// 2. 组合层 - 自定义Hooks
const useUserManagement = () => {
  // React Query数据
  const { data: users, isLoading, error } = useUsersQuery();
  const { createUser, updateUser } = useUserMutations();
  
  // Zustand UI状态
  const selectedUserId = useUIStore(s => s.selectedUserId);
  const userFilters = useUIStore(s => s.userFilters);
  const selectUser = useUIStore(s => s.selectUser);
  const setUserFilters = useUIStore(s => s.setUserFilters);
  
  // 派生状态
  const filteredUsers = useMemo(() => {
    if (!users) return [];
    return users.filter(user => {
      if (userFilters.status !== 'all' && user.status !== userFilters.status) {
        return false;
      }
      if (userFilters.role !== 'all' && user.role !== userFilters.role) {
        return false;
      }
      return true;
    });
  }, [users, userFilters]);
  
  const selectedUser = useMemo(() => 
    users?.find(u => u.id === selectedUserId),
    [users, selectedUserId]
  );
  
  return {
    // 数据
    users: filteredUsers,
    selectedUser,
    isLoading,
    error,
    
    // UI状态
    userFilters,
    
    // 动作
    selectUser,
    setUserFilters,
    createUser: createUser.mutate,
    updateUser: updateUser.mutate,
    
    // 状态
    isCreating: createUser.isPending,
    isUpdating: updateUser.isPending
  };
};

// 3. 组件层
const UserManagementPage = () => {
  const {
    users,
    selectedUser,
    isLoading,
    userFilters,
    selectUser,
    setUserFilters,
    createUser,
    isCreating
  } = useUserManagement();
  
  if (isLoading) return <LoadingSpinner />;
  
  return (
    <div className="grid grid-cols-3 gap-4">
      {/* 筛选器 */}
      <div>
        <UserFilters 
          filters={userFilters}
          onChange={setUserFilters}
        />
      </div>
      
      {/* 用户列表 */}
      <div>
        <UserList 
          users={users}
          selectedId={selectedUser?.id}
          onSelect={selectUser}
        />
        <CreateUserButton 
          onCreate={createUser}
          isLoading={isCreating}
        />
      </div>
      
      {/* 用户详情 */}
      <div>
        {selectedUser ? (
          <UserDetail user={selectedUser} />
        ) : (
          <div>请选择用户</div>
        )}
      </div>
    </div>
  );
};

// 4. 性能优化
const UserList = React.memo(({ users, selectedId, onSelect }) => {
  return (
    <div className="space-y-2">
      {users.map(user => (
        <UserListItem
          key={user.id}
          user={user}
          isSelected={selectedId === user.id}
          onSelect={() => onSelect(user.id)}
        />
      ))}
    </div>
  );
});

const UserListItem = React.memo(({ user, isSelected, onSelect }) => {
  return (
    <div 
      className={\`p-2 cursor-pointer \${
        isSelected ? 'bg-blue-100' : 'hover:bg-gray-50'
      }\`}
      onClick={onSelect}
    >
      {user.name}
    </div>
  );
});
\`\`\`

**架构优势：**
1. **清晰的职责分离**：React Query管理服务端状态，Zustand管理UI状态
2. **可测试性**：每层都可以独立测试
3. **可维护性**：状态逻辑集中，组件专注于渲染
4. **性能优化**：选择器订阅最小切片，React.memo避免不必要渲染
5. **类型安全**：完整的TypeScript支持

这种架构适合大型应用，能够很好地处理复杂的状态管理需求，同时保持代码的可维护性和性能。`;export{e as default};
