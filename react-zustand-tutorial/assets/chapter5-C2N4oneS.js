const n=`# Chapter 5: Zustand 实际应用场景面试题

## 基础概念题

### 1. 什么是购物车状态管理？如何使用 Zustand 实现？

**答案：**
购物车状态管理是电商应用的核心功能，需要管理商品添加、移除、数量更新、价格计算等操作。使用 Zustand 实现购物车管理具有以下特点：

- **状态结构设计**：包含商品列表、总价、总数量、折扣等
- **操作方法**：addItem、removeItem、updateQuantity、clearCart 等
- **价格计算**：实时计算原价、折扣价、总价
- **持久化**：使用 persist 中间件保存购物车状态

\`\`\`typescript
interface CartStore {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
  totalDiscount: number;
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
}

const useCartStore = create<CartStore>()(persist(
  (set, get) => ({
    items: [],
    totalItems: 0,
    totalPrice: 0,
    totalDiscount: 0,
    
    addItem: (product, quantity = 1) => {
      set((state) => {
        const existingItem = state.items.find(item => item.productId === product.id);
        if (existingItem) {
          const updatedItems = state.items.map(item =>
            item.productId === product.id
              ? { ...item, quantity: item.quantity + quantity }
              : item
          );
          const stats = calculateCartStats(updatedItems);
          return { items: updatedItems, ...stats };
        } else {
          const newItem = { id: generateId(), productId: product.id, product, quantity };
          const updatedItems = [...state.items, newItem];
          const stats = calculateCartStats(updatedItems);
          return { items: updatedItems, ...stats };
        }
      });
    }
  }),
  { name: 'cart-storage' }
));
\`\`\`

### 2. 用户认证状态管理的核心要素有哪些？

**答案：**
用户认证状态管理是应用安全的基础，核心要素包括：

- **用户状态**：登录状态、用户信息、权限角色
- **Token 管理**：访问令牌、刷新令牌、过期处理
- **权限控制**：基于角色的访问控制（RBAC）
- **状态持久化**：确保页面刷新后状态保持
- **安全策略**：敏感信息保护、HTTPS 传输

\`\`\`typescript
interface AuthStore {
  isAuthenticated: boolean;
  user: User | null;
  token: string | null;
  refreshToken: string | null;
  permissions: string[];
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => void;
  refreshAccessToken: () => Promise<void>;
  hasPermission: (permission: string) => boolean;
  hasRole: (role: string) => boolean;
}
\`\`\`

### 3. WebSocket 状态管理的关键概念是什么？

**答案：**
WebSocket 状态管理涉及实时通信的复杂状态处理：

- **连接状态**：disconnected、connecting、connected、error
- **消息模型**：统一的消息结构（id、text、timestamp、direction）
- **副作用管理**：连接、事件绑定、清理的集中管理
- **错误处理**：统一的错误收集和状态迁移
- **资源清理**：防止内存泄漏的幂等清理

\`\`\`typescript
type WSStatus = 'disconnected' | 'connecting' | 'connected' | 'error';

interface WSMessage {
  id: string;
  text: string;
  timestamp: Date;
  direction: 'sent' | 'received';
}

interface WSStore {
  status: WSStatus;
  messages: WSMessage[];
  lastError: string | null;
  connect: (url?: string) => void;
  disconnect: () => void;
  send: (text: string) => void;
  clearMessages: () => void;
}
\`\`\`

### 4. Modal 全局管理的优势是什么？

**答案：**
全局 Modal 管理通过统一的状态管理提供以下优势：

- **统一 API**：openModal、closeModal、closeAllModals 等标准接口
- **数据传递**：支持向 Modal 传递和读取数据
- **单实例规范**：关键流程同一时刻只显示一个 Modal
- **层级管理**：支持 zIndex 控制 Modal 层级
- **向导流程**：支持复杂的多步骤业务流程

\`\`\`typescript
interface ModalStore {
  modals: Record<string, Modal>;
  openModal: (id: string, data?: ModalData, zIndex?: number) => void;
  closeModal: (id: string) => void;
  closeAllModals: () => void;
  getModal: (id: string) => Modal | undefined;
  isModalOpen: (id: string) => boolean;
}
\`\`\`

### 5. UI Store 的设计原则是什么？

**答案：**
UI Store 专注于呈现相关的全局状态管理：

- **职责单一**：只管理 UI 相关状态（主题、语言、侧边栏等）
- **主题支持**：light、dark、system 三种模式
- **国际化**：语言标识管理，配合 i18n 使用
- **持久化**：本地存储用户偏好设置
- **系统集成**：与系统主题偏好同步

\`\`\`typescript
type Theme = 'light' | 'dark' | 'system';
type Locale = 'zh' | 'en';

interface UIStore {
  theme: Theme;
  locale: Locale;
  isSidebarOpen: boolean;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  setLocale: (locale: Locale) => void;
  toggleSidebar: () => void;
}
\`\`\`

## 进阶概念题

### 6. 如何实现购物车的批量操作和性能优化？

**答案：**
购物车批量操作需要考虑性能和用户体验：

\`\`\`typescript
interface CartStore {
  // 批量操作
  addMultipleItems: (items: { product: Product; quantity: number }[]) => void;
  removeMultipleItems: (productIds: string[]) => void;
  updateMultipleQuantities: (updates: { productId: string; quantity: number }[]) => void;
  
  // 性能优化
  batchUpdate: (updates: () => void) => void;
}

const useCartStore = create<CartStore>((set, get) => ({
  // 批量添加商品
  addMultipleItems: (items) => {
    set((state) => {
      let updatedItems = [...state.items];
      
      items.forEach(({ product, quantity }) => {
        const existingIndex = updatedItems.findIndex(item => item.productId === product.id);
        if (existingIndex >= 0) {
          updatedItems[existingIndex] = {
            ...updatedItems[existingIndex],
            quantity: updatedItems[existingIndex].quantity + quantity
          };
        } else {
          updatedItems.push({
            id: generateId(),
            productId: product.id,
            product,
            quantity,
            addedAt: new Date()
          });
        }
      });
      
      const stats = calculateCartStats(updatedItems);
      return { items: updatedItems, ...stats, lastUpdated: new Date() };
    });
  },
  
  // 批量更新（减少重渲染）
  batchUpdate: (updates) => {
    const currentState = get();
    updates();
    // 只触发一次状态更新
  }
}));
\`\`\`

### 7. 如何实现 Token 自动刷新机制？

**答案：**
Token 自动刷新需要处理过期检测、自动刷新和请求重试：

\`\`\`typescript
interface AuthStore {
  token: string | null;
  refreshToken: string | null;
  tokenExpiry: Date | null;
  isRefreshing: boolean;
  
  refreshAccessToken: () => Promise<void>;
  setupTokenRefresh: () => void;
  clearTokenRefresh: () => void;
}

const useAuthStore = create<AuthStore>((set, get) => {
  let refreshTimer: NodeJS.Timeout | null = null;
  
  return {
    token: null,
    refreshToken: null,
    tokenExpiry: null,
    isRefreshing: false,
    
    refreshAccessToken: async () => {
      const { refreshToken, isRefreshing } = get();
      if (!refreshToken || isRefreshing) return;
      
      set({ isRefreshing: true });
      
      try {
        const response = await api.post('/auth/refresh', { refreshToken });
        const { token, refreshToken: newRefreshToken, expiresIn } = response.data;
        
        const tokenExpiry = new Date(Date.now() + expiresIn * 1000);
        
        set({
          token,
          refreshToken: newRefreshToken,
          tokenExpiry,
          isRefreshing: false
        });
        
        // 设置下次自动刷新
        get().setupTokenRefresh();
      } catch (error) {
        set({ isRefreshing: false });
        // 刷新失败，清除认证状态
        get().logout();
      }
    },
    
    setupTokenRefresh: () => {
      const { tokenExpiry } = get();
      if (!tokenExpiry) return;
      
      // 在过期前 5 分钟刷新
      const refreshTime = tokenExpiry.getTime() - Date.now() - 5 * 60 * 1000;
      
      if (refreshTime > 0) {
        refreshTimer = setTimeout(() => {
          get().refreshAccessToken();
        }, refreshTime);
      }
    },
    
    clearTokenRefresh: () => {
      if (refreshTimer) {
        clearTimeout(refreshTimer);
        refreshTimer = null;
      }
    }
  };
});

// API 拦截器
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      const { refreshAccessToken, token } = useAuthStore.getState();
      
      if (token) {
        await refreshAccessToken();
        // 重试原请求
        return api.request(error.config);
      }
    }
    return Promise.reject(error);
  }
);
\`\`\`

### 8. 如何处理 WebSocket 的重连和心跳机制？

**答案：**
WebSocket 重连和心跳机制确保连接的稳定性：

\`\`\`typescript
interface WSStore {
  status: WSStatus;
  reconnectAttempts: number;
  maxReconnectAttempts: number;
  reconnectInterval: number;
  heartbeatInterval: number;
  lastHeartbeat: Date | null;
  
  connect: (url?: string) => void;
  disconnect: () => void;
  setupHeartbeat: () => void;
  clearHeartbeat: () => void;
  reconnect: () => void;
}

const useWSStore = create<WSStore>((set, get) => {
  let socket: WebSocket | null = null;
  let heartbeatTimer: NodeJS.Timeout | null = null;
  let reconnectTimer: NodeJS.Timeout | null = null;
  
  return {
    status: 'disconnected',
    reconnectAttempts: 0,
    maxReconnectAttempts: 5,
    reconnectInterval: 1000,
    heartbeatInterval: 30000,
    lastHeartbeat: null,
    
    connect: (url = DEFAULT_WS_URL) => {
      if (socket?.readyState === WebSocket.OPEN) {
        socket.close();
      }
      
      set({ status: 'connecting' });
      
      socket = new WebSocket(url);
      
      socket.onopen = () => {
        set({ 
          status: 'connected', 
          reconnectAttempts: 0,
          lastError: null 
        });
        get().setupHeartbeat();
      };
      
      socket.onclose = (event) => {
        get().clearHeartbeat();
        
        if (event.code !== 1000) { // 非正常关闭
          const { reconnectAttempts, maxReconnectAttempts } = get();
          
          if (reconnectAttempts < maxReconnectAttempts) {
            set({ status: 'connecting' });
            get().reconnect();
          } else {
            set({ 
              status: 'error', 
              lastError: '连接失败，已达到最大重试次数' 
            });
          }
        } else {
          set({ status: 'disconnected' });
        }
      };
      
      socket.onerror = () => {
        set({ 
          status: 'error', 
          lastError: '连接错误' 
        });
      };
      
      socket.onmessage = (event) => {
        const { data } = event;
        
        // 处理心跳响应
        if (data === 'pong') {
          set({ lastHeartbeat: new Date() });
          return;
        }
        
        // 处理普通消息
        const message: WSMessage = {
          id: generateId(),
          text: data,
          timestamp: new Date(),
          direction: 'received'
        };
        
        set((state) => ({
          messages: [...state.messages, message]
        }));
      };
    },
    
    setupHeartbeat: () => {
      heartbeatTimer = setInterval(() => {
        if (socket?.readyState === WebSocket.OPEN) {
          socket.send('ping');
        }
      }, get().heartbeatInterval);
    },
    
    clearHeartbeat: () => {
      if (heartbeatTimer) {
        clearInterval(heartbeatTimer);
        heartbeatTimer = null;
      }
    },
    
    reconnect: () => {
      const { reconnectAttempts, reconnectInterval } = get();
      
      set({ reconnectAttempts: reconnectAttempts + 1 });
      
      // 指数退避
      const delay = reconnectInterval * Math.pow(2, reconnectAttempts);
      
      reconnectTimer = setTimeout(() => {
        get().connect();
      }, delay);
    }
  };
});
\`\`\`

## 实践应用题

### 9. 设计一个完整的电商购物车系统，包括商品管理、优惠券、配送费计算等功能。

**答案：**
完整的电商购物车系统需要考虑多个维度：

\`\`\`typescript
interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  stock: number;
  category: string;
  weight: number; // 用于配送费计算
  image: string;
}

interface CartItem {
  id: string;
  productId: string;
  product: Product;
  quantity: number;
  selectedSpecs?: Record<string, string>; // 商品规格
  addedAt: Date;
  notes?: string;
}

interface Coupon {
  id: string;
  code: string;
  type: 'percentage' | 'fixed' | 'shipping';
  value: number;
  minAmount?: number;
  maxDiscount?: number;
  validUntil: Date;
  usageLimit?: number;
  usedCount: number;
}

interface ShippingOption {
  id: string;
  name: string;
  price: number;
  estimatedDays: number;
  freeShippingThreshold?: number;
}

interface CartStore {
  // 基础状态
  items: CartItem[];
  selectedItems: string[]; // 选中的商品ID
  
  // 优惠券
  appliedCoupons: Coupon[];
  availableCoupons: Coupon[];
  
  // 配送
  selectedShipping: ShippingOption | null;
  shippingAddress: Address | null;
  
  // 计算结果
  subtotal: number;
  discountAmount: number;
  shippingFee: number;
  totalAmount: number;
  
  // 操作方法
  addItem: (product: Product, quantity?: number, specs?: Record<string, string>) => void;
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  toggleItemSelection: (itemId: string) => void;
  selectAllItems: () => void;
  
  // 优惠券操作
  applyCoupon: (couponCode: string) => Promise<boolean>;
  removeCoupon: (couponId: string) => void;
  
  // 配送操作
  setShippingOption: (option: ShippingOption) => void;
  setShippingAddress: (address: Address) => void;
  
  // 计算方法
  calculateTotals: () => void;
  validateCart: () => CartValidationResult;
}

const useCartStore = create<CartStore>()(persist(
  (set, get) => ({
    items: [],
    selectedItems: [],
    appliedCoupons: [],
    availableCoupons: [],
    selectedShipping: null,
    shippingAddress: null,
    subtotal: 0,
    discountAmount: 0,
    shippingFee: 0,
    totalAmount: 0,
    
    addItem: (product, quantity = 1, specs) => {
      set((state) => {
        const existingItem = state.items.find(
          item => item.productId === product.id && 
          JSON.stringify(item.selectedSpecs) === JSON.stringify(specs)
        );
        
        let updatedItems;
        if (existingItem) {
          updatedItems = state.items.map(item =>
            item.id === existingItem.id
              ? { ...item, quantity: item.quantity + quantity }
              : item
          );
        } else {
          const newItem: CartItem = {
            id: generateId(),
            productId: product.id,
            product,
            quantity,
            selectedSpecs: specs,
            addedAt: new Date()
          };
          updatedItems = [...state.items, newItem];
        }
        
        return { items: updatedItems };
      });
      get().calculateTotals();
    },
    
    applyCoupon: async (couponCode) => {
      try {
        const coupon = await api.validateCoupon(couponCode, {
          items: get().items,
          subtotal: get().subtotal
        });
        
        set((state) => ({
          appliedCoupons: [...state.appliedCoupons, coupon]
        }));
        
        get().calculateTotals();
        return true;
      } catch (error) {
        return false;
      }
    },
    
    calculateTotals: () => {
      const { items, selectedItems, appliedCoupons, selectedShipping } = get();
      
      // 计算选中商品的小计
      const selectedCartItems = items.filter(item => selectedItems.includes(item.id));
      const subtotal = selectedCartItems.reduce((sum, item) => {
        const itemPrice = item.product.price * item.quantity;
        const discount = item.product.discount || 0;
        return sum + (itemPrice * (1 - discount / 100));
      }, 0);
      
      // 计算优惠券折扣
      let discountAmount = 0;
      appliedCoupons.forEach(coupon => {
        if (coupon.type === 'percentage') {
          const discount = subtotal * (coupon.value / 100);
          discountAmount += coupon.maxDiscount 
            ? Math.min(discount, coupon.maxDiscount) 
            : discount;
        } else if (coupon.type === 'fixed') {
          discountAmount += Math.min(coupon.value, subtotal);
        }
      });
      
      // 计算配送费
      let shippingFee = 0;
      if (selectedShipping) {
        const afterDiscount = subtotal - discountAmount;
        if (!selectedShipping.freeShippingThreshold || 
            afterDiscount < selectedShipping.freeShippingThreshold) {
          shippingFee = selectedShipping.price;
          
          // 检查是否有免运费优惠券
          const hasShippingCoupon = appliedCoupons.some(c => c.type === 'shipping');
          if (hasShippingCoupon) {
            shippingFee = 0;
          }
        }
      }
      
      const totalAmount = subtotal - discountAmount + shippingFee;
      
      set({
        subtotal,
        discountAmount,
        shippingFee,
        totalAmount
      });
    },
    
    validateCart: () => {
      const { items } = get();
      const errors: string[] = [];
      const warnings: string[] = [];
      
      items.forEach(item => {
        if (item.quantity > item.product.stock) {
          errors.push(\`\${item.product.name} 库存不足\`);
        }
        if (item.product.stock < 5) {
          warnings.push(\`\${item.product.name} 库存紧张\`);
        }
      });
      
      return {
        isValid: errors.length === 0,
        errors,
        warnings
      };
    }
  }),
  {
    name: 'cart-storage',
    partialize: (state) => ({
      items: state.items,
      selectedItems: state.selectedItems,
      shippingAddress: state.shippingAddress
    })
  }
));
\`\`\`

### 10. 实现一个支持多角色权限的用户管理系统。

**答案：**
多角色权限系统需要细粒度的权限控制：

\`\`\`typescript
interface Permission {
  id: string;
  name: string;
  resource: string; // 资源类型
  action: string;   // 操作类型
  conditions?: Record<string, any>; // 条件限制
}

interface Role {
  id: string;
  name: string;
  description: string;
  permissions: Permission[];
  level: number; // 角色级别
}

interface User {
  id: string;
  username: string;
  email: string;
  roles: Role[];
  permissions: Permission[]; // 用户特殊权限
  profile: UserProfile;
  settings: UserSettings;
  lastLoginAt: Date;
  isActive: boolean;
}

interface AuthStore {
  // 认证状态
  isAuthenticated: boolean;
  user: User | null;
  token: string | null;
  refreshToken: string | null;
  
  // 权限缓存
  userPermissions: Set<string>;
  rolePermissions: Map<string, Set<string>>;
  
  // 认证方法
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => void;
  register: (userData: RegisterData) => Promise<void>;
  
  // 权限检查
  hasPermission: (resource: string, action: string, context?: any) => boolean;
  hasRole: (roleName: string) => boolean;
  hasAnyRole: (roleNames: string[]) => boolean;
  hasAllRoles: (roleNames: string[]) => boolean;
  
  // 权限管理
  grantPermission: (userId: string, permission: Permission) => Promise<void>;
  revokePermission: (userId: string, permissionId: string) => Promise<void>;
  assignRole: (userId: string, roleId: string) => Promise<void>;
  removeRole: (userId: string, roleId: string) => Promise<void>;
  
  // 用户管理
  updateProfile: (profile: Partial<UserProfile>) => Promise<void>;
  updateSettings: (settings: Partial<UserSettings>) => Promise<void>;
  changePassword: (oldPassword: string, newPassword: string) => Promise<void>;
}

const useAuthStore = create<AuthStore>()(persist(
  (set, get) => ({
    isAuthenticated: false,
    user: null,
    token: null,
    refreshToken: null,
    userPermissions: new Set(),
    rolePermissions: new Map(),
    
    login: async (credentials) => {
      try {
        const response = await api.post('/auth/login', credentials);
        const { user, token, refreshToken } = response.data;
        
        // 构建权限缓存
        const permissions = new Set<string>();
        
        // 添加角色权限
        user.roles.forEach((role: Role) => {
          role.permissions.forEach((permission: Permission) => {
            permissions.add(\`\${permission.resource}:\${permission.action}\`);
          });
        });
        
        // 添加用户特殊权限
        user.permissions.forEach((permission: Permission) => {
          permissions.add(\`\${permission.resource}:\${permission.action}\`);
        });
        
        set({
          isAuthenticated: true,
          user,
          token,
          refreshToken,
          userPermissions: permissions
        });
        
        // 设置 API 认证头
        api.defaults.headers.common['Authorization'] = \`Bearer \${token}\`;
        
      } catch (error) {
        throw new Error('登录失败');
      }
    },
    
    hasPermission: (resource, action, context) => {
      const { userPermissions, user } = get();
      
      if (!user || !userPermissions) return false;
      
      const permissionKey = \`\${resource}:\${action}\`;
      
      // 检查基础权限
      if (!userPermissions.has(permissionKey)) return false;
      
      // 检查条件权限
      if (context) {
        const permission = [...user.roles, { permissions: user.permissions }]
          .flatMap(r => r.permissions)
          .find(p => p.resource === resource && p.action === action);
          
        if (permission?.conditions) {
          return evaluateConditions(permission.conditions, context, user);
        }
      }
      
      return true;
    },
    
    hasRole: (roleName) => {
      const { user } = get();
      return user?.roles.some(role => role.name === roleName) || false;
    },
    
    hasAnyRole: (roleNames) => {
      const { user } = get();
      return user?.roles.some(role => roleNames.includes(role.name)) || false;
    },
    
    hasAllRoles: (roleNames) => {
      const { user } = get();
      if (!user) return false;
      
      const userRoleNames = user.roles.map(role => role.name);
      return roleNames.every(roleName => userRoleNames.includes(roleName));
    },
    
    assignRole: async (userId, roleId) => {
      try {
        await api.post(\`/users/\${userId}/roles\`, { roleId });
        
        // 如果是当前用户，更新本地状态
        const { user } = get();
        if (user && user.id === userId) {
          const roleResponse = await api.get(\`/roles/\${roleId}\`);
          const newRole = roleResponse.data;
          
          set((state) => ({
            user: {
              ...state.user!,
              roles: [...state.user!.roles, newRole]
            }
          }));
          
          // 重新构建权限缓存
          get().refreshPermissions();
        }
      } catch (error) {
        throw new Error('角色分配失败');
      }
    },
    
    refreshPermissions: () => {
      const { user } = get();
      if (!user) return;
      
      const permissions = new Set<string>();
      
      user.roles.forEach(role => {
        role.permissions.forEach(permission => {
          permissions.add(\`\${permission.resource}:\${permission.action}\`);
        });
      });
      
      user.permissions.forEach(permission => {
        permissions.add(\`\${permission.resource}:\${permission.action}\`);
      });
      
      set({ userPermissions: permissions });
    }
  }),
  {
    name: 'auth-storage',
    partialize: (state) => ({
      token: state.token,
      refreshToken: state.refreshToken,
      user: state.user
    })
  }
));

// 权限条件评估函数
function evaluateConditions(
  conditions: Record<string, any>, 
  context: any, 
  user: User
): boolean {
  // 示例条件评估逻辑
  if (conditions.owner && context.userId !== user.id) {
    return false;
  }
  
  if (conditions.department && !user.profile.departments?.includes(context.department)) {
    return false;
  }
  
  if (conditions.level && user.roles.every(role => role.level < conditions.level)) {
    return false;
  }
  
  return true;
}

// 权限检查 Hook
function usePermission(resource: string, action: string, context?: any) {
  const hasPermission = useAuthStore(state => state.hasPermission);
  return hasPermission(resource, action, context);
}

// 权限保护组件
function PermissionGuard({ 
  resource, 
  action, 
  context, 
  children, 
  fallback 
}: {
  resource: string;
  action: string;
  context?: any;
  children: React.ReactNode;
  fallback?: React.ReactNode;
}) {
  const hasPermission = usePermission(resource, action, context);
  
  if (!hasPermission) {
    return fallback || null;
  }
  
  return <>{children}</>;
}
\`\`\`

## 问题排查题

### 11. 购物车状态更新后价格计算不正确，如何排查和解决？

**答案：**
价格计算问题的排查步骤：

**1. 检查计算逻辑**
\`\`\`typescript
// 错误示例：直接修改状态
const badCalculation = () => {
  set((state) => {
    state.totalPrice += item.price; // 错误：直接修改
    return state;
  });
};

// 正确示例：重新计算
const goodCalculation = () => {
  set((state) => {
    const totalPrice = state.items.reduce((sum, item) => {
      const itemPrice = item.product.price * item.quantity;
      const discount = item.product.discount || 0;
      return sum + (itemPrice * (1 - discount / 100));
    }, 0);
    
    return { ...state, totalPrice };
  });
};
\`\`\`

**2. 添加调试日志**
\`\`\`typescript
const calculateTotals = () => {
  set((state) => {
    console.log('计算前状态:', state.items);
    
    const subtotal = state.items.reduce((sum, item) => {
      const itemPrice = item.product.price * item.quantity;
      const discount = item.product.discount || 0;
      const finalPrice = itemPrice * (1 - discount / 100);
      
      console.log(\`商品 \${item.product.name}:\`, {
        price: item.product.price,
        quantity: item.quantity,
        discount,
        itemPrice,
        finalPrice
      });
      
      return sum + finalPrice;
    }, 0);
    
    console.log('计算结果:', { subtotal });
    
    return { ...state, totalPrice: subtotal };
  });
};
\`\`\`

**3. 使用 DevTools 监控**
\`\`\`typescript
const useCartStore = create<CartStore>()(devtools(
  persist(
    (set, get) => ({
      // store 实现
    }),
    { name: 'cart-storage' }
  ),
  { name: 'cart-store' }
));
\`\`\`

**4. 单元测试验证**
\`\`\`typescript
describe('购物车价格计算', () => {
  beforeEach(() => {
    useCartStore.getState().clearCart();
  });
  
  test('应该正确计算单个商品价格', () => {
    const product = { id: '1', name: '商品1', price: 100, discount: 10 };
    
    useCartStore.getState().addItem(product, 2);
    
    const { totalPrice } = useCartStore.getState();
    expect(totalPrice).toBe(180); // 100 * 2 * 0.9
  });
  
  test('应该正确计算多个商品价格', () => {
    const product1 = { id: '1', name: '商品1', price: 100, discount: 10 };
    const product2 = { id: '2', name: '商品2', price: 200, discount: 0 };
    
    useCartStore.getState().addItem(product1, 1);
    useCartStore.getState().addItem(product2, 1);
    
    const { totalPrice } = useCartStore.getState();
    expect(totalPrice).toBe(290); // 90 + 200
  });
});
\`\`\`

### 12. WebSocket 连接频繁断开重连，如何诊断和优化？

**答案：**
WebSocket 连接问题的诊断和优化：

**1. 连接状态监控**
\`\`\`typescript
const useWSStore = create<WSStore>((set, get) => {
  let socket: WebSocket | null = null;
  let connectionStats = {
    connectAttempts: 0,
    successfulConnections: 0,
    disconnections: 0,
    errors: 0,
    lastConnectTime: null as Date | null,
    lastDisconnectTime: null as Date | null,
    averageConnectionDuration: 0
  };
  
  return {
    status: 'disconnected',
    connectionStats,
    
    connect: (url) => {
      connectionStats.connectAttempts++;
      connectionStats.lastConnectTime = new Date();
      
      console.log('尝试连接 WebSocket:', { url, attempt: connectionStats.connectAttempts });
      
      socket = new WebSocket(url);
      
      socket.onopen = () => {
        connectionStats.successfulConnections++;
        console.log('WebSocket 连接成功');
        set({ status: 'connected', connectionStats: { ...connectionStats } });
      };
      
      socket.onclose = (event) => {
        connectionStats.disconnections++;
        connectionStats.lastDisconnectTime = new Date();
        
        // 计算连接持续时间
        if (connectionStats.lastConnectTime) {
          const duration = Date.now() - connectionStats.lastConnectTime.getTime();
          connectionStats.averageConnectionDuration = 
            (connectionStats.averageConnectionDuration + duration) / 2;
        }
        
        console.log('WebSocket 连接关闭:', {
          code: event.code,
          reason: event.reason,
          wasClean: event.wasClean,
          stats: connectionStats
        });
        
        set({ status: 'disconnected', connectionStats: { ...connectionStats } });
      };
      
      socket.onerror = (error) => {
        connectionStats.errors++;
        console.error('WebSocket 错误:', error, { stats: connectionStats });
        set({ status: 'error', connectionStats: { ...connectionStats } });
      };
    }
  };
});
\`\`\`

**2. 智能重连策略**
\`\`\`typescript
interface ReconnectConfig {
  maxAttempts: number;
  baseDelay: number;
  maxDelay: number;
  backoffFactor: number;
  jitter: boolean;
}

const useWSStore = create<WSStore>((set, get) => {
  let reconnectTimer: NodeJS.Timeout | null = null;
  const reconnectConfig: ReconnectConfig = {
    maxAttempts: 10,
    baseDelay: 1000,
    maxDelay: 30000,
    backoffFactor: 2,
    jitter: true
  };
  
  const calculateReconnectDelay = (attempt: number): number => {
    const { baseDelay, maxDelay, backoffFactor, jitter } = reconnectConfig;
    
    let delay = Math.min(baseDelay * Math.pow(backoffFactor, attempt), maxDelay);
    
    // 添加随机抖动，避免多个客户端同时重连
    if (jitter) {
      delay = delay * (0.5 + Math.random() * 0.5);
    }
    
    return delay;
  };
  
  const scheduleReconnect = () => {
    const { reconnectAttempts } = get();
    
    if (reconnectAttempts >= reconnectConfig.maxAttempts) {
      console.log('达到最大重连次数，停止重连');
      set({ status: 'error', lastError: '连接失败，已达到最大重试次数' });
      return;
    }
    
    const delay = calculateReconnectDelay(reconnectAttempts);
    console.log(\`\${delay}ms 后尝试重连 (第 \${reconnectAttempts + 1} 次)\`);
    
    reconnectTimer = setTimeout(() => {
      set((state) => ({ reconnectAttempts: state.reconnectAttempts + 1 }));
      get().connect();
    }, delay);
  };
  
  return {
    reconnectAttempts: 0,
    
    connect: (url) => {
      // 清除之前的重连定时器
      if (reconnectTimer) {
        clearTimeout(reconnectTimer);
        reconnectTimer = null;
      }
      
      // 连接逻辑...
      
      socket.onclose = (event) => {
        if (event.code !== 1000 && event.code !== 1001) {
          // 非正常关闭，尝试重连
          scheduleReconnect();
        }
      };
      
      socket.onopen = () => {
        // 连接成功，重置重连计数
        set({ status: 'connected', reconnectAttempts: 0 });
      };
    },
    
    disconnect: () => {
      // 清除重连定时器
      if (reconnectTimer) {
        clearTimeout(reconnectTimer);
        reconnectTimer = null;
      }
      
      if (socket) {
        socket.close(1000, '用户主动断开');
        socket = null;
      }
      
      set({ status: 'disconnected', reconnectAttempts: 0 });
    }
  };
});
\`\`\`

**3. 网络状态检测**
\`\`\`typescript
const useNetworkStatus = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  
  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      console.log('网络已连接');
    };
    
    const handleOffline = () => {
      setIsOnline(false);
      console.log('网络已断开');
    };
    
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);
  
  return isOnline;
};

// 在组件中使用
function WebSocketComponent() {
  const isOnline = useNetworkStatus();
  const { status, connect, disconnect } = useWSStore();
  
  useEffect(() => {
    if (isOnline && status === 'disconnected') {
      // 网络恢复时自动重连
      connect();
    } else if (!isOnline && status === 'connected') {
      // 网络断开时主动断开连接
      disconnect();
    }
  }, [isOnline, status]);
  
  return (
    <div>
      <div>网络状态: {isOnline ? '在线' : '离线'}</div>
      <div>连接状态: {status}</div>
    </div>
  );
}
\`\`\`

## 最佳实践题

### 13. 如何设计一个可扩展的状态管理架构？

**答案：**
可扩展的状态管理架构设计原则：

**1. 模块化设计**
\`\`\`typescript
// 基础 Store 接口
interface BaseStore {
  loading: boolean;
  error: string | null;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  clearError: () => void;
}

// Store 工厂函数
function createBaseStore<T extends BaseStore>(initialState: Partial<T>) {
  return {
    loading: false,
    error: null,
    ...initialState,
    
    setLoading: (loading: boolean) => ({ loading }),
    setError: (error: string | null) => ({ error }),
    clearError: () => ({ error: null })
  };
}

// 具体业务 Store
interface UserStore extends BaseStore {
  users: User[];
  currentUser: User | null;
  fetchUsers: () => Promise<void>;
  createUser: (userData: CreateUserData) => Promise<void>;
}

const useUserStore = create<UserStore>((set, get) => ({
  ...createBaseStore<UserStore>({
    users: [],
    currentUser: null
  }),
  
  fetchUsers: async () => {
    set({ loading: true, error: null });
    try {
      const users = await api.getUsers();
      set({ users, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
  
  createUser: async (userData) => {
    set({ loading: true, error: null });
    try {
      const newUser = await api.createUser(userData);
      set((state) => ({
        users: [...state.users, newUser],
        loading: false
      }));
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  }
}));
\`\`\`

**2. 中间件系统**
\`\`\`typescript
// 日志中间件
const logger = (config) => (set, get, api) =>
  config(
    (...args) => {
      console.log('状态更新前:', get());
      set(...args);
      console.log('状态更新后:', get());
    },
    get,
    api
  );

// 性能监控中间件
const performance = (config) => (set, get, api) => {
  const startTime = performance.now();
  
  return config(
    (...args) => {
      const updateStart = performance.now();
      set(...args);
      const updateEnd = performance.now();
      
      if (updateEnd - updateStart > 16) { // 超过一帧时间
        console.warn('状态更新耗时过长:', updateEnd - updateStart, 'ms');
      }
    },
    get,
    api
  );
};

// 错误边界中间件
const errorBoundary = (config) => (set, get, api) =>
  config(
    (...args) => {
      try {
        set(...args);
      } catch (error) {
        console.error('状态更新错误:', error);
        // 可以发送错误报告
        errorReporting.captureException(error);
      }
    },
    get,
    api
  );

// 使用中间件
const useAppStore = create(
  logger(
    performance(
      errorBoundary(
        persist(
          (set, get) => ({
            // store 实现
          }),
          { name: 'app-storage' }
        )
      )
    )
  )
);
\`\`\`

**3. 类型安全的选择器**
\`\`\`typescript
// 选择器工厂
function createSelector<T, R>(
  store: UseBoundStore<StoreApi<T>>,
  selector: (state: T) => R,
  equalityFn?: (a: R, b: R) => boolean
) {
  return () => store(selector, equalityFn);
}

// 预定义选择器
const userSelectors = {
  users: createSelector(useUserStore, (state) => state.users),
  currentUser: createSelector(useUserStore, (state) => state.currentUser),
  loading: createSelector(useUserStore, (state) => state.loading),
  error: createSelector(useUserStore, (state) => state.error),
  
  // 计算选择器
  activeUsers: createSelector(
    useUserStore,
    (state) => state.users.filter(user => user.isActive),
    (a, b) => a.length === b.length && a.every((user, i) => user.id === b[i].id)
  ),
  
  userById: (id: string) => createSelector(
    useUserStore,
    (state) => state.users.find(user => user.id === id)
  )
};

// 在组件中使用
function UserList() {
  const users = userSelectors.users();
  const loading = userSelectors.loading();
  const activeUsers = userSelectors.activeUsers();
  
  return (
    <div>
      {loading ? (
        <div>加载中...</div>
      ) : (
        <div>
          <div>总用户数: {users.length}</div>
          <div>活跃用户数: {activeUsers.length}</div>
          {users.map(user => (
            <UserItem key={user.id} user={user} />
          ))}
        </div>
      )}
    </div>
  );
}
\`\`\`

**4. 插件系统**
\`\`\`typescript
// 插件接口
interface StorePlugin<T = any> {
  name: string;
  version: string;
  install: (store: StoreApi<T>) => void;
  uninstall?: (store: StoreApi<T>) => void;
}

// 缓存插件
const cachePlugin: StorePlugin = {
  name: 'cache',
  version: '1.0.0',
  install: (store) => {
    const cache = new Map();
    
    // 添加缓存方法
    store.cache = {
      get: (key: string) => cache.get(key),
      set: (key: string, value: any, ttl?: number) => {
        cache.set(key, { value, expiry: ttl ? Date.now() + ttl : null });
      },
      clear: () => cache.clear()
    };
  }
};

// 插件管理器
class PluginManager {
  private plugins = new Map<string, StorePlugin>();
  
  register(plugin: StorePlugin) {
    this.plugins.set(plugin.name, plugin);
  }
  
  install<T>(store: StoreApi<T>, pluginNames: string[]) {
    pluginNames.forEach(name => {
      const plugin = this.plugins.get(name);
      if (plugin) {
        plugin.install(store);
      }
    });
  }
  
  uninstall<T>(store: StoreApi<T>, pluginNames: string[]) {
    pluginNames.forEach(name => {
      const plugin = this.plugins.get(name);
      if (plugin?.uninstall) {
        plugin.uninstall(store);
      }
    });
  }
}

// 使用插件
const pluginManager = new PluginManager();
pluginManager.register(cachePlugin);

const store = create((set, get) => ({ /* store 实现 */ }));
pluginManager.install(store, ['cache']);
\`\`\`

### 14. 如何实现状态的时间旅行和调试功能？

**答案：**
状态时间旅行和调试功能的实现：

**1. 状态历史记录**
\`\`\`typescript
interface StateSnapshot<T> {
  id: string;
  timestamp: Date;
  state: T;
  action: string;
  diff?: any;
}

interface TimeTravel<T> {
  history: StateSnapshot<T>[];
  currentIndex: number;
  maxHistorySize: number;
  
  // 时间旅行操作
  undo: () => void;
  redo: () => void;
  jumpTo: (index: number) => void;
  
  // 历史管理
  clearHistory: () => void;
  exportHistory: () => string;
  importHistory: (data: string) => void;
}

// 时间旅行中间件
function timeTravel<T>(
  config: StateCreator<T>,
  options: { maxHistorySize?: number } = {}
) {
  return (set: SetState<T>, get: GetState<T>, api: StoreApi<T>) => {
    const { maxHistorySize = 50 } = options;
    
    let history: StateSnapshot<T>[] = [];
    let currentIndex = -1;
    let isTimeTravel = false;
    
    const saveSnapshot = (state: T, action: string) => {
      if (isTimeTravel) return;
      
      const snapshot: StateSnapshot<T> = {
        id: generateId(),
        timestamp: new Date(),
        state: JSON.parse(JSON.stringify(state)),
        action
      };
      
      // 如果不在历史末尾，删除后续历史
      if (currentIndex < history.length - 1) {
        history = history.slice(0, currentIndex + 1);
      }
      
      history.push(snapshot);
      currentIndex = history.length - 1;
      
      // 限制历史大小
      if (history.length > maxHistorySize) {
        history = history.slice(-maxHistorySize);
        currentIndex = history.length - 1;
      }
    };
    
    const wrappedSet: SetState<T> = (partial, replace, action) => {
      const prevState = get();
      set(partial, replace);
      const nextState = get();
      
      saveSnapshot(nextState, action || 'unknown');
    };
    
    const store = config(wrappedSet, get, api);
    
    // 添加时间旅行方法
    (api as any).timeTravel = {
      get history() { return history; },
      get currentIndex() { return currentIndex; },
      
      undo: () => {
        if (currentIndex > 0) {
          currentIndex--;
          isTimeTravel = true;
          set(history[currentIndex].state, true);
          isTimeTravel = false;
        }
      },
      
      redo: () => {
        if (currentIndex < history.length - 1) {
          currentIndex++;
          isTimeTravel = true;
          set(history[currentIndex].state, true);
          isTimeTravel = false;
        }
      },
      
      jumpTo: (index: number) => {
        if (index >= 0 && index < history.length) {
          currentIndex = index;
          isTimeTravel = true;
          set(history[index].state, true);
          isTimeTravel = false;
        }
      },
      
      clearHistory: () => {
        history = [];
        currentIndex = -1;
      },
      
      exportHistory: () => {
        return JSON.stringify({
          history,
          currentIndex,
          exportedAt: new Date()
        });
      },
      
      importHistory: (data: string) => {
        try {
          const imported = JSON.parse(data);
          history = imported.history;
          currentIndex = imported.currentIndex;
        } catch (error) {
          console.error('导入历史失败:', error);
        }
      }
    };
    
    return store;
  };
}
\`\`\`

**2. 调试面板组件**
\`\`\`typescript
function DebugPanel<T>({ store }: { store: StoreApi<T> }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSnapshot, setSelectedSnapshot] = useState<number | null>(null);
  
  const timeTravel = (store as any).timeTravel;
  const { history, currentIndex } = timeTravel;
  
  const handleUndo = () => {
    timeTravel.undo();
  };
  
  const handleRedo = () => {
    timeTravel.redo();
  };
  
  const handleJumpTo = (index: number) => {
    timeTravel.jumpTo(index);
    setSelectedSnapshot(index);
  };
  
  const handleExport = () => {
    const data = timeTravel.exportHistory();
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = \`state-history-\${Date.now()}.json\`;
    a.click();
    
    URL.revokeObjectURL(url);
  };
  
  const handleImport = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (e) => {
      const data = e.target?.result as string;
      timeTravel.importHistory(data);
    };
    reader.readAsText(file);
  };
  
  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-blue-500 text-white p-2 rounded"
      >
        调试
      </button>
    );
  }
  
  return (
    <div className="fixed bottom-4 right-4 w-96 h-96 bg-white border shadow-lg rounded">
      <div className="p-4 border-b flex justify-between items-center">
        <h3 className="font-bold">状态调试器</h3>
        <button
          onClick={() => setIsOpen(false)}
          className="text-gray-500 hover:text-gray-700"
        >
          ×
        </button>
      </div>
      
      <div className="p-4 flex-1 overflow-auto">
        {/* 控制按钮 */}
        <div className="flex gap-2 mb-4">
          <button
            onClick={handleUndo}
            disabled={currentIndex <= 0}
            className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
          >
            撤销
          </button>
          <button
            onClick={handleRedo}
            disabled={currentIndex >= history.length - 1}
            className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
          >
            重做
          </button>
          <button
            onClick={handleExport}
            className="px-3 py-1 bg-blue-200 rounded"
          >
            导出
          </button>
          <label className="px-3 py-1 bg-green-200 rounded cursor-pointer">
            导入
            <input
              type="file"
              accept=".json"
              onChange={handleImport}
              className="hidden"
            />
          </label>
        </div>
        
        {/* 历史列表 */}
        <div className="space-y-2">
          {history.map((snapshot, index) => (
            <div
              key={snapshot.id}
              onClick={() => handleJumpTo(index)}
              className={\`p-2 border rounded cursor-pointer \${
                index === currentIndex ? 'bg-blue-100 border-blue-300' : 'hover:bg-gray-50'
              }\`}
            >
              <div className="text-sm font-medium">{snapshot.action}</div>
              <div className="text-xs text-gray-500">
                {snapshot.timestamp.toLocaleTimeString()}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
\`\`\`

**3. 状态差异对比**
\`\`\`typescript
// 状态差异计算
function calculateStateDiff(prev: any, next: any): any {
  if (prev === next) return null;
  
  if (typeof prev !== 'object' || typeof next !== 'object') {
    return { from: prev, to: next };
  }
  
  if (Array.isArray(prev) && Array.isArray(next)) {
    const diff: any = {};
    const maxLength = Math.max(prev.length, next.length);
    
    for (let i = 0; i < maxLength; i++) {
      const itemDiff = calculateStateDiff(prev[i], next[i]);
      if (itemDiff) {
        diff[i] = itemDiff;
      }
    }
    
    return Object.keys(diff).length > 0 ? diff : null;
  }
  
  const diff: any = {};
  const allKeys = new Set([...Object.keys(prev || {}), ...Object.keys(next || {})]);
  
  allKeys.forEach(key => {
    const itemDiff = calculateStateDiff(prev?.[key], next?.[key]);
    if (itemDiff) {
      diff[key] = itemDiff;
    }
  });
  
  return Object.keys(diff).length > 0 ? diff : null;
}

// 状态差异可视化组件
function StateDiff({ prev, next }: { prev: any; next: any }) {
  const diff = calculateStateDiff(prev, next);
  
  if (!diff) {
    return <div className="text-gray-500">无变化</div>;
  }
  
  const renderDiff = (obj: any, path = '') => {
    if (obj?.from !== undefined && obj?.to !== undefined) {
      return (
        <div key={path} className="mb-2">
          <div className="font-mono text-sm">{path}</div>
          <div className="flex gap-2">
            <span className="bg-red-100 px-2 py-1 rounded text-sm">
              - {JSON.stringify(obj.from)}
            </span>
            <span className="bg-green-100 px-2 py-1 rounded text-sm">
              + {JSON.stringify(obj.to)}
            </span>
          </div>
        </div>
      );
    }
    
    return Object.entries(obj).map(([key, value]) => {
      const newPath = path ? \`\${path}.\${key}\` : key;
      return renderDiff(value, newPath);
    });
  };
  
  return <div>{renderDiff(diff)}</div>;
}
\`\`\`

### 15. 如何优化大型应用的状态管理性能？

**答案：**
大型应用状态管理性能优化策略：

**1. 状态分片和懒加载**
\`\`\`typescript
// 状态分片管理
interface AppState {
  user: UserState;
  products: ProductState;
  cart: CartState;
  ui: UIState;
}

// 懒加载 Store
const createLazyStore = <T>(storeFactory: () => StoreApi<T>) => {
  let store: StoreApi<T> | null = null;
  
  return () => {
    if (!store) {
      store = storeFactory();
    }
    return store;
  };
};

// 产品 Store（懒加载）
const getProductStore = createLazyStore(() =>
  create<ProductState>((set, get) => ({
    products: [],
    categories: [],
    filters: {},
    
    loadProducts: async (categoryId?: string) => {
      // 只在需要时加载
      const products = await api.getProducts(categoryId);
      set({ products });
    }
  }))
);

// 条件性 Store 初始化
function useConditionalStore<T>(condition: boolean, storeHook: () => T): T | null {
  const [store, setStore] = useState<T | null>(null);
  
  useEffect(() => {
    if (condition && !store) {
      setStore(storeHook());
    }
  }, [condition, store]);
  
  return store;
}
\`\`\`

**2. 选择器优化**
\`\`\`typescript
// 记忆化选择器
const createMemoizedSelector = <T, R>(
  selector: (state: T) => R,
  deps?: (state: T) => any[]
) => {
  let lastDeps: any[] | undefined;
  let lastResult: R;
  
  return (state: T): R => {
    if (deps) {
      const currentDeps = deps(state);
      if (lastDeps && currentDeps.every((dep, i) => dep === lastDeps![i])) {
        return lastResult;
      }
      lastDeps = currentDeps;
    }
    
    lastResult = selector(state);
    return lastResult;
  };
};

// 批量选择器
const createBatchSelector = <T, R extends Record<string, any>>(
  selectors: { [K in keyof R]: (state: T) => R[K] }
) => {
  return (state: T): R => {
    const result = {} as R;
    Object.entries(selectors).forEach(([key, selector]) => {
      result[key as keyof R] = (selector as any)(state);
    });
    return result;
  };
};

// 使用示例
const userSelectors = createBatchSelector({
  currentUser: (state: AppState) => state.user.currentUser,
  isAuthenticated: (state: AppState) => state.user.isAuthenticated,
  permissions: (state: AppState) => state.user.permissions
});

function UserProfile() {
  const { currentUser, isAuthenticated, permissions } = useAppStore(userSelectors);
  
  return (
    <div>
      {isAuthenticated && currentUser && (
        <div>
          <h1>{currentUser.name}</h1>
          <div>权限: {permissions.join(', ')}</div>
        </div>
      )}
    </div>
  );
}
\`\`\`

**3. 虚拟化和分页**
\`\`\`typescript
// 虚拟化列表 Store
interface VirtualListStore {
  items: any[];
  visibleRange: { start: number; end: number };
  itemHeight: number;
  containerHeight: number;
  scrollTop: number;
  
  setScrollTop: (scrollTop: number) => void;
  setContainerHeight: (height: number) => void;
  loadMoreItems: () => Promise<void>;
}

const useVirtualListStore = create<VirtualListStore>((set, get) => ({
  items: [],
  visibleRange: { start: 0, end: 0 },
  itemHeight: 50,
  containerHeight: 400,
  scrollTop: 0,
  
  setScrollTop: (scrollTop) => {
    const { itemHeight, containerHeight } = get();
    const start = Math.floor(scrollTop / itemHeight);
    const end = Math.min(
      start + Math.ceil(containerHeight / itemHeight) + 1,
      get().items.length
    );
    
    set({ scrollTop, visibleRange: { start, end } });
  },
  
  setContainerHeight: (containerHeight) => {
    set({ containerHeight });
    get().setScrollTop(get().scrollTop); // 重新计算可见范围
  },
  
  loadMoreItems: async () => {
    const { items } = get();
    const newItems = await api.getItems(items.length, 50);
    set({ items: [...items, ...newItems] });
  }
}));

// 虚拟化列表组件
function VirtualList() {
  const {
    items,
    visibleRange,
    itemHeight,
    scrollTop,
    setScrollTop,
    setContainerHeight
  } = useVirtualListStore();
  
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    const resizeObserver = new ResizeObserver(([entry]) => {
      setContainerHeight(entry.contentRect.height);
    });
    
    resizeObserver.observe(container);
    return () => resizeObserver.disconnect();
  }, []);
  
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setScrollTop(e.currentTarget.scrollTop);
  };
  
  const visibleItems = items.slice(visibleRange.start, visibleRange.end);
  const totalHeight = items.length * itemHeight;
  const offsetY = visibleRange.start * itemHeight;
  
  return (
    <div
      ref={containerRef}
      onScroll={handleScroll}
      style={{ height: 400, overflow: 'auto' }}
    >
      <div style={{ height: totalHeight, position: 'relative' }}>
        <div style={{ transform: \`translateY(\${offsetY}px)\` }}>
          {visibleItems.map((item, index) => (
            <div
              key={visibleRange.start + index}
              style={{ height: itemHeight }}
            >
              {/* 渲染项目内容 */}
              {item.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
\`\`\`

这些实际应用场景的面试题涵盖了 Zustand 在复杂业务场景中的应用，包括购物车管理、用户认证、WebSocket 通信、Modal 管理和 UI 状态管理等。通过这些题目可以全面考察候选人对 Zustand 实际应用的理解和实践能力。`;export{n as default};
