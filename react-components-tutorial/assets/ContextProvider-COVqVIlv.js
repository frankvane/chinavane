const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./BasicThemeExample-DgIh7V1x.js","./index-CbVlrJMN.js","./index-BFRj4jJ-.css","./AuthenticationExample-CEXsxhCK.js","./ShoppingCartExample-CVqw5Otq.js"])))=>i.map(i=>d[i]);
import{j as t,R as e,_ as n}from"./index-CbVlrJMN.js";import{C as r}from"./ComponentTemplate-BnvJNrWP.js";const i=`import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';

// 用户类型定义
interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: 'admin' | 'user' | 'guest';
}

// 认证Context类型定义
interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  updateProfile: (updates: Partial<User>) => void;
}

// 创建认证Context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// 认证Provider组件
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // 登录方法
  const login = useCallback(async (email: string, password: string) => {
    setIsLoading(true);
    console.log('登录尝试:', email);
    
    try {
      // 模拟API调用
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // 模拟登录成功
      if (email && password) {
        const mockUser: User = {
          id: '1',
          name: email.split('@')[0],
          email,
          avatar: \`https://api.dicebear.com/7.x/avataaars/svg?seed=\${email}\`,
          role: email.includes('admin') ? 'admin' : 'user',
        };
        
        setUser(mockUser);
        console.log('登录成功:', mockUser);
      } else {
        throw new Error('邮箱和密码不能为空');
      }
    } catch (error) {
      console.error('登录失败:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, []);

  // 登出方法
  const logout = useCallback(() => {
    console.log('用户登出');
    setUser(null);
  }, []);

  // 更新用户资料方法
  const updateProfile = useCallback((updates: Partial<User>) => {
    setUser(prev => {
      if (!prev) return null;
      const updatedUser = { ...prev, ...updates };
      console.log('用户资料更新:', updatedUser);
      return updatedUser;
    });
  }, []);

  // 计算认证状态
  const isAuthenticated = useMemo(() => user !== null, [user]);

  // Context值，使用useMemo优化
  const value = useMemo(
    () => ({
      user,
      isLoading,
      isAuthenticated,
      login,
      logout,
      updateProfile,
    }),
    [user, isLoading, isAuthenticated, login, logout, updateProfile]
  );

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// 自定义Hook，提供类型安全的Context访问
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// 导出Context对象（用于高级用法）
export { AuthContext };

// 导出类型定义
export type { User, AuthContextType };`,a=`import React, { createContext, useCallback, useContext, useMemo, useReducer } from 'react';

// 购物车商品类型定义
interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  category: string;
}

// 购物车状态类型定义
interface CartState {
  items: CartItem[];
  total: number;
  itemCount: number;
  discount: number;
}

// 购物车操作类型定义
type CartAction =
  | { type: 'ADD_ITEM'; payload: Omit<CartItem, 'quantity'> }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'APPLY_DISCOUNT'; payload: number };

// 购物车Context类型定义
interface CartContextType {
  state: CartState;
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  applyDiscount: (discount: number) => void;
  getItemById: (id: string) => CartItem | undefined;
  isItemInCart: (id: string) => boolean;
}

// 购物车reducer函数
const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      
      let newItems: CartItem[];
      if (existingItem) {
        // 如果商品已存在，增加数量
        newItems = state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // 如果商品不存在，添加新商品
        newItems = [...state.items, { ...action.payload, quantity: 1 }];
      }
      
      const total = newItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
      const itemCount = newItems.reduce((sum, item) => sum + item.quantity, 0);
      
      return {
        ...state,
        items: newItems,
        total: total - (total * state.discount / 100),
        itemCount,
      };
    }
    
    case 'REMOVE_ITEM': {
      const newItems = state.items.filter(item => item.id !== action.payload);
      const total = newItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
      const itemCount = newItems.reduce((sum, item) => sum + item.quantity, 0);
      
      return {
        ...state,
        items: newItems,
        total: total - (total * state.discount / 100),
        itemCount,
      };
    }
    
    case 'UPDATE_QUANTITY': {
      if (action.payload.quantity <= 0) {
        // 如果数量为0或负数，移除商品
        return cartReducer(state, { type: 'REMOVE_ITEM', payload: action.payload.id });
      }
      
      const newItems = state.items.map(item =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      );
      
      const total = newItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
      const itemCount = newItems.reduce((sum, item) => sum + item.quantity, 0);
      
      return {
        ...state,
        items: newItems,
        total: total - (total * state.discount / 100),
        itemCount,
      };
    }
    
    case 'CLEAR_CART':
      return {
        ...state,
        items: [],
        total: 0,
        itemCount: 0,
      };
    
    case 'APPLY_DISCOUNT': {
      const baseTotal = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
      return {
        ...state,
        discount: action.payload,
        total: baseTotal - (baseTotal * action.payload / 100),
      };
    }
    
    default:
      return state;
  }
};

// 初始状态
const initialState: CartState = {
  items: [],
  total: 0,
  itemCount: 0,
  discount: 0,
};

// 创建购物车Context
const CartContext = createContext<CartContextType | undefined>(undefined);

// 购物车Provider组件
export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // 添加商品到购物车
  const addItem = useCallback((item: Omit<CartItem, 'quantity'>) => {
    console.log('添加商品到购物车:', item);
    dispatch({ type: 'ADD_ITEM', payload: item });
  }, []);

  // 从购物车移除商品
  const removeItem = useCallback((id: string) => {
    console.log('从购物车移除商品:', id);
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  }, []);

  // 更新商品数量
  const updateQuantity = useCallback((id: string, quantity: number) => {
    console.log('更新商品数量:', id, quantity);
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  }, []);

  // 清空购物车
  const clearCart = useCallback(() => {
    console.log('清空购物车');
    dispatch({ type: 'CLEAR_CART' });
  }, []);

  // 应用折扣
  const applyDiscount = useCallback((discount: number) => {
    console.log('应用折扣:', discount + '%');
    dispatch({ type: 'APPLY_DISCOUNT', payload: discount });
  }, []);

  // 根据ID获取商品
  const getItemById = useCallback((id: string) => {
    return state.items.find(item => item.id === id);
  }, [state.items]);

  // 检查商品是否在购物车中
  const isItemInCart = useCallback((id: string) => {
    return state.items.some(item => item.id === id);
  }, [state.items]);

  // Context值，使用useMemo优化
  const value = useMemo(
    () => ({
      state,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      applyDiscount,
      getItemById,
      isItemInCart,
    }),
    [state, addItem, removeItem, updateQuantity, clearCart, applyDiscount, getItemById, isItemInCart]
  );

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

// 自定义Hook，提供类型安全的Context访问
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

// 导出Context对象（用于高级用法）
export { CartContext };

// 导出类型定义
export type { CartItem, CartState, CartAction, CartContextType };`,s=`import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';

// 主题Context类型定义
interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
    border: string;
  };
}

// 创建主题Context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// 主题Provider组件
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // 主题切换方法，使用useCallback优化性能
  const toggleTheme = useCallback(() => {
    console.log('主题切换:', theme === 'light' ? 'dark' : 'light');
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  }, [theme]);

  // 主题颜色配置，使用useMemo优化计算
  const colors = useMemo(() => {
    return theme === 'light'
      ? {
          primary: '#3B82F6',
          secondary: '#6B7280',
          background: '#FFFFFF',
          text: '#1F2937',
          border: '#E5E7EB',
        }
      : {
          primary: '#60A5FA',
          secondary: '#9CA3AF',
          background: '#1F2937',
          text: '#F9FAFB',
          border: '#374151',
        };
  }, [theme]);

  // Context值，使用useMemo优化
  const value = useMemo(
    () => ({
      theme,
      toggleTheme,
      colors,
    }),
    [theme, toggleTheme, colors]
  );

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

// 自定义Hook，提供类型安全的Context访问
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// 导出Context对象（用于高级用法）
export { ThemeContext };

// 导出类型定义
export type { ThemeContextType };`,u=e.lazy(()=>n(()=>import("./BasicThemeExample-DgIh7V1x.js"),__vite__mapDeps([0,1,2]),import.meta.url)),m=e.lazy(()=>n(()=>import("./AuthenticationExample-CEXsxhCK.js"),__vite__mapDeps([3,1,2]),import.meta.url)),c=e.lazy(()=>n(()=>import("./ShoppingCartExample-CVqw5Otq.js"),__vite__mapDeps([4,1,2]),import.meta.url)),C=()=>{const o={title:"Context Provider",description:"Context Provider是React Context API的核心组件，用于向组件树提供共享状态和方法，解决props drilling问题。通过Provider模式，可以实现全局状态管理、主题切换、用户认证等功能。",overview:[{title:"Context Provider概念",items:["React Context API的提供者组件","向子组件树提供共享的状态和方法","通过createContext创建Context对象","使用Provider组件包装需要访问状态的组件树"]},{title:"工作机制",items:["Provider接收value属性包含共享状态和方法","子组件通过useContext Hook访问Provider值","支持Consumer组件访问Context值","实现跨组件的状态共享和通信"]},{title:"组合使用",items:["多个Provider可以嵌套使用","实现复杂的状态管理架构","每个Provider管理特定领域状态","提供模块化的状态管理方案"]},{title:"性能考虑",items:["使用useMemo和useCallback优化Context值","确保Context值的引用稳定性","合理拆分Context减少重渲染影响","避免在Context中存储频繁变化的状态"]}],examples:[{title:"基础主题Provider",component:t.jsx(u,{}),description:"演示如何创建和使用主题Context Provider，实现全局主题管理",observationPoints:["点击主题切换按钮时，所有使用主题Context的组件都会同步更新","主题状态在Provider中统一管理，子组件通过useContext访问","Context值使用useMemo优化，避免不必要的重渲染"],keyPoints:["createContext创建主题Context对象","Provider组件管理主题状态和切换逻辑","useContext Hook访问主题数据和方法","useMemo优化Context值的引用稳定性"],commonTraps:["每次渲染都创建新的Context值对象","忘记使用Provider包装组件树","在Context中存储频繁变化的状态"],solutions:["使用useMemo缓存Context值对象","确保Provider正确包装需要访问Context的组件","将频繁变化的状态拆分到独立的Context中"],importantTips:["主题Context提供了完整的主题管理解决方案","通过TypeScript接口确保类型安全","支持深色和浅色主题的无缝切换"],codeExample:{title:"主题Context实现",code:s,language:"tsx"}},{title:"用户认证Provider",component:t.jsx(m,{}),description:"展示用户认证Context的实现，包括登录、登出和用户信息管理",observationPoints:["登录成功后，用户信息会在所有组件中同步显示","登出操作会清除用户状态并更新所有相关组件","认证状态变化时，相关UI组件会自动响应更新"],keyPoints:["认证Context管理用户登录状态和信息","提供login、logout等认证操作方法","支持持久化存储用户认证信息","实现认证状态的全局共享"],commonTraps:["在Context中直接存储敏感信息如密码","忘记处理认证失败的错误状态","没有实现认证信息的持久化存储"],solutions:["只在Context中存储必要的用户信息，敏感数据由后端管理","添加完整的错误处理和加载状态管理","结合localStorage实现认证状态持久化"],importantTips:["认证Context提供了完整的用户认证流程","支持异步登录操作和状态管理","实现了安全的用户信息存储和访问"],codeExample:{title:"认证Context实现",code:i,language:"tsx"}},{title:"购物车Provider",component:t.jsx(c,{}),description:"使用useReducer实现复杂的购物车状态管理，包含商品增删改查功能",observationPoints:["添加商品时，购物车数量和总价会自动更新","修改商品数量时，相关计算会实时响应","删除商品时，购物车状态会正确更新"],keyPoints:["使用useReducer管理复杂的购物车状态","实现商品的增删改查操作","自动计算购物车总价和商品数量","提供完整的购物车操作API"],commonTraps:["直接修改state对象而不是返回新对象","忘记处理商品数量为0的边界情况","没有正确计算购物车总价"],solutions:["在reducer中始终返回新的state对象","添加商品数量验证和边界处理逻辑","使用reduce方法正确计算总价和数量"],importantTips:["购物车Context展示了useReducer的强大功能","支持复杂的状态管理和业务逻辑","提供了完整的电商购物车解决方案"],codeExample:{title:"购物车Context实现",code:a,language:"tsx"}}],tutorial:{concepts:["使用createContext创建Context对象，可以提供默认值","Provider通过value属性向子组件传递数据","Provider内部使用useState或useReducer管理状态","使用useMemo和useCallback优化Context值性能","合理拆分Context避免不必要的重渲染"],steps:["定义Context类型接口，使用createContext创建Context对象","创建Provider组件，管理内部状态，提供Context值","封装useContext调用，提供类型安全的Context访问","在组件树中使用Provider包装需要访问Context的组件","在子组件中使用自定义Hook访问Context值"],tips:["使用useMemo缓存Context值，避免每次渲染都创建新对象","将不相关的状态拆分到不同的Context中，减少重渲染范围","为Context提供合理的默认值，确保在没有Provider时也能正常工作","在自定义Hook中添加Context存在性检查，提供友好的错误信息","使用TypeScript定义严格的Context类型，避免运行时错误","为Provider组件编写单元测试，确保状态管理逻辑的正确性"]},interview:{questions:[{question:"Context Provider的工作原理是什么？",answer:"Context Provider通过React的Context机制向组件树提供共享状态。它创建一个Context对象，然后使用Provider组件包装子组件树，通过value属性传递数据。子组件可以通过useContext Hook访问这些数据，实现跨组件的状态共享。"},{question:"如何优化Context Provider的性能？",answer:"主要通过以下方式优化：1) 使用useMemo包装Context值对象，避免每次渲染都创建新对象；2) 使用useCallback包装方法，保持引用稳定；3) 合理拆分Context，避免不相关的状态更新导致大范围重渲染；4) 使用React.memo包装消费Context的组件。"},{question:"Context Provider与Redux的区别？",answer:"Context Provider是React内置的状态管理方案，适合中小型应用和组件间的状态共享；Redux是第三方状态管理库，提供更强大的功能如时间旅行、中间件等，适合大型复杂应用。Context更轻量，Redux功能更丰富但学习成本更高。"},{question:"什么时候应该使用Context Provider？",answer:"当需要在多个组件间共享状态，且这些组件在组件树中距离较远时使用Context。典型场景包括：主题管理、用户认证状态、语言设置、购物车状态等。避免为了简单的父子组件通信而使用Context。"}],keyPoints:["Context Provider是React Context API的核心组件","通过value属性向子组件树提供共享状态","需要配合useContext Hook或Consumer组件使用","支持多个Provider嵌套和组合使用","性能优化需要注意Context值的稳定性"]},bestPractices:{dos:["为Context提供有意义的默认值和类型定义","使用自定义Hook封装Context访问逻辑","通过useMemo和useCallback优化Context值","合理拆分Context，按功能模块组织","在Provider内部处理错误边界","为Context消费者提供清晰的错误提示"],donts:["不要在Context中存储频繁变化的状态","不要创建过于庞大的单一Context","不要忘记优化Context值的引用稳定性","不要在不需要的地方过度使用Context","不要在Context中存储可以通过props传递的简单数据","不要忘记处理Context未提供时的错误情况"],patterns:["组合模式：多个小Context组合使用","工厂模式：动态创建Context Provider","观察者模式：Context状态变化通知","策略模式：根据Context状态选择不同策略","单例模式：全局唯一的Context实例"]}};return t.jsx(r,{...o})};export{C as default};
