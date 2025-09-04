import{j as e,r as a}from"./index-H7t66yxh.js";import{C as x}from"./ComponentTemplate-bNJaV0ol.js";function H(t){return function(r){const{isLoading:n,...s}=r;return n?e.jsxs("div",{className:"flex items-center justify-center p-8",children:[e.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"}),e.jsx("span",{className:"ml-2 text-gray-600",children:"加载中..."})]}):e.jsx(t,{...s})}}function p(t,o="user"){return function(n){const[s]=a.useState({role:"admin",name:"管理员"});return!s||s.role!==o?e.jsx("div",{className:"bg-red-50 border border-red-200 rounded-lg p-4",children:e.jsxs("p",{className:"text-red-700",children:["⚠️ 权限不足，需要 ",o," 权限"]})}):e.jsx(t,{...n,user:s})}}function O(t,o){return function(n){const[s,u]=a.useState(null),[C,f]=a.useState(!0),[h,g]=a.useState(null);return a.useEffect(()=>{let i=!0;return o().then(d=>{i&&u(d)}).catch(d=>{i&&g(d.message)}).finally(()=>{i&&f(!1)}),()=>{i=!1}},[]),e.jsx(t,{...n,data:s,loading:C,error:h})}}const c=({user:t})=>e.jsxs("div",{className:"bg-green-50 border border-green-200 rounded-lg p-4",children:[e.jsx("h3",{className:"text-lg font-semibold text-green-800",children:"用户资料"}),e.jsxs("p",{className:"text-green-700",children:["姓名: ",(t==null?void 0:t.name)||"未知用户"]}),e.jsxs("p",{className:"text-green-700",children:["角色: ",(t==null?void 0:t.role)||"无"]})]}),b=()=>{const[t,o]=a.useState(!1),r=H(c);return e.jsxs("div",{children:[e.jsx("button",{onClick:()=>o(!t),className:"mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",children:t?"停止加载":"开始加载"}),e.jsx(r,{isLoading:t,user:{name:"张三",role:"user"}})]})},N=()=>{const t=p(c,"admin"),o=p(c,"user");return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-2",children:"需要管理员权限的组件："}),e.jsx(t,{})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-2",children:"需要用户权限的组件："}),e.jsx(o,{})]})]})},R=({data:t,loading:o,error:r})=>o?e.jsx("div",{className:"text-blue-600",children:"数据加载中..."}):r?e.jsxs("div",{className:"text-red-600",children:["错误: ",r]}):t?e.jsxs("div",{className:"bg-blue-50 border border-blue-200 rounded-lg p-4",children:[e.jsx("h4",{className:"font-medium mb-2",children:"用户列表："}),e.jsx("ul",{className:"list-disc list-inside",children:t.users.map((n,s)=>e.jsx("li",{className:"text-blue-700",children:n},s))})]}):e.jsx("div",{className:"text-gray-600",children:"暂无数据"}),v=()=>{const o=O(R,()=>new Promise(r=>{setTimeout(()=>{r({users:["用户1","用户2","用户3"]})},1e3)}));return e.jsx(o,{})},m=`import React from 'react';

// 用户资料组件的类型定义
export interface UserProfileProps {
  user?: { name: string; role: string };
}

// 用户资料组件
export const UserProfile: React.FC<UserProfileProps> = ({ user }) => (
  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
    <h3 className="text-lg font-semibold text-green-800">用户资料</h3>
    <p className="text-green-700">姓名: {user?.name || "未知用户"}</p>
    <p className="text-green-700">角色: {user?.role || "无"}</p>
  </div>
);`,w=`import React from 'react';
import { withAuth } from './hocs';
import { UserProfile } from './UserProfile';

// 使用 withAuth HOC 的示例组件
export const WithAuthExample: React.FC = () => {
  const AdminOnlyProfile = withAuth(UserProfile, "admin");
  const UserProfile2 = withAuth(UserProfile, "user");

  return (
    <div className="space-y-4">
      <div>
        <h4 className="font-medium mb-2">需要管理员权限的组件：</h4>
        <AdminOnlyProfile />
      </div>
      <div>
        <h4 className="font-medium mb-2">需要用户权限的组件：</h4>
        <UserProfile2 />
      </div>
    </div>
  );
};`,P=`import React from 'react';
import { withData } from './hocs';

// 数据组件的类型定义
interface DataComponentProps {
  data: { users: string[] } | null;
  loading: boolean;
  error: string | null;
}

// 数据展示组件
const DataComponent: React.FC<DataComponentProps> = ({
  data,
  loading,
  error,
}) => {
  if (loading) return <div className="text-blue-600">数据加载中...</div>;
  if (error) return <div className="text-red-600">错误: {error}</div>;
  if (!data) return <div className="text-gray-600">暂无数据</div>;

  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
      <h4 className="font-medium mb-2">用户列表：</h4>
      <ul className="list-disc list-inside">
        {data.users.map((user, index) => (
          <li key={index} className="text-blue-700">
            {user}
          </li>
        ))}
      </ul>
    </div>
  );
};

// 使用 withData HOC 的示例组件
export const WithDataExample: React.FC = () => {
  const mockDataSource = () =>
    new Promise<{ users: string[] }>((resolve) => {
      setTimeout(() => {
        resolve({ users: ["用户1", "用户2", "用户3"] });
      }, 1000);
    });

  const EnhancedDataComponent = withData(DataComponent, mockDataSource);

  return <EnhancedDataComponent />;
};

export { DataComponent };`,j=`import React, { useState } from 'react';
import { withLoading } from './hocs';
import { UserProfile } from './UserProfile';

// 使用 withLoading HOC 的示例组件
export const WithLoadingExample: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const EnhancedUserProfile = withLoading(UserProfile);

  return (
    <div>
      <button
        onClick={() => setIsLoading(!isLoading)}
        className="mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        {isLoading ? "停止加载" : "开始加载"}
      </button>
      <EnhancedUserProfile
        isLoading={isLoading}
        user={{ name: "张三", role: "user" }}
      />
    </div>
  );
};`,l=`import React, { ComponentType, useEffect, useState } from 'react';

// withLoading HOC - 为组件添加加载状态
export function withLoading<T extends object>(WrappedComponent: ComponentType<T>) {
  return function WithLoadingComponent(props: T & { isLoading?: boolean }) {
    const { isLoading, ...restProps } = props;

    if (isLoading) {
      return (
        <div className="flex items-center justify-center p-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
          <span className="ml-2 text-gray-600">加载中...</span>
        </div>
      );
    }

    return <WrappedComponent {...(restProps as T)} />;
  };
}

// withAuth HOC - 权限控制
export function withAuth<T extends object>(
  WrappedComponent: ComponentType<T>,
  requiredRole: string = "user"
) {
  return function WithAuthComponent(props: T) {
    const [user] = useState({ role: "admin", name: "管理员" });

    if (!user || user.role !== requiredRole) {
      return (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-700">⚠️ 权限不足，需要 {requiredRole} 权限</p>
        </div>
      );
    }

    return <WrappedComponent {...props} user={user} />;
  };
}

// withData HOC - 数据获取
export function withData<T extends object, D = any>(
  WrappedComponent: ComponentType<
    T & { data: D; loading: boolean; error: string | null }
  >,
  dataSource: () => Promise<D>
) {
  return function WithDataComponent(props: T) {
    const [data, setData] = useState<D | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
      let isMounted = true;
      
      dataSource()
        .then((result) => {
          if (isMounted) {
            setData(result);
          }
        })
        .catch((err) => {
          if (isMounted) {
            setError(err.message);
          }
        })
        .finally(() => {
          if (isMounted) {
            setLoading(false);
          }
        });

      return () => {
        isMounted = false;
      };
    }, []);

    return (
      <WrappedComponent
        {...props}
        data={data}
        loading={loading}
        error={error}
      />
    );
  };
}`,L=()=>{const t={title:"高阶组件 (Higher-Order Components)",description:"高阶组件是一个函数，接收一个组件并返回一个新的增强组件。它是React中复用组件逻辑的高级技巧，类似于高阶函数的概念。",overview:[{title:"核心概念",items:["高阶组件（HOC）是一个函数，接收一个组件并返回一个新的增强组件","HOC是React中复用组件逻辑的高级技巧，类似于高阶函数的概念","它不是React API的一部分，而是基于React组合特性形成的设计模式","通过组合而非继承来扩展组件功能，实现横切关注点的分离"]},{title:"主要优势",items:["实现组件逻辑的复用，避免代码重复","通过组合方式扩展功能，符合开闭原则","可以在不修改原组件的情况下增强功能","支持链式调用，可以组合多个HOC"]},{title:"适用场景",items:["横切关注点（如日志、权限验证、性能监控）","条件渲染逻辑（如加载状态、错误处理）","数据获取和状态管理","组件增强和装饰（如主题注入、样式增强）"]},{title:"注意事项",items:["不要在render方法中使用HOC，会导致组件重新挂载","静态方法需要手动复制到新组件","Refs不会自动传递，需要使用React.forwardRef","可能导致组件层级过深，影响调试和性能"]}],examples:[{title:"1. Loading状态HOC",description:"为组件添加统一的加载状态处理",component:e.jsx(b,{}),observationPoints:['点击"开始加载"按钮时，组件显示loading状态','loading状态下显示旋转动画和"加载中..."文字','点击"停止加载"按钮时，恢复显示原组件内容',"HOC完全接管了loading状态的UI展示逻辑"],keyPoints:["HOC接收isLoading prop来控制loading状态","使用条件渲染在loading和正常状态间切换","通过解构props分离HOC专用props和组件props","HOC不修改原组件，只是在外层包装逻辑"],commonTraps:["忘记传递isLoading prop导致组件无法显示loading状态","在HOC内部硬编码loading UI，缺乏灵活性","没有正确解构props，导致原组件收到不需要的props"],solutions:["确保在使用HOC时正确传递isLoading prop","可以将loading UI作为参数传入HOC，提高复用性","使用TypeScript确保props类型安全"],importantTips:["withLoading HOC可以应用于任何组件，提供统一的loading体验","loading状态的UI可以根据设计系统进行定制","这种模式特别适合需要异步数据加载的组件"],preCode:[{title:"UserProfile",code:m},{title:"HOCs",code:l}],codeExample:{title:"Loading状态HOC示例",code:j}},{title:"2. 权限控制HOC",description:"根据用户权限控制组件的访问",component:e.jsx(N,{}),observationPoints:["管理员权限组件正常显示用户信息","用户权限组件也正常显示（当前用户是管理员）","如果用户权限不足，会显示权限不足的提示信息","HOC在权限验证失败时完全阻止原组件渲染"],keyPoints:["HOC接收requiredRole参数指定所需权限级别","在渲染前进行权限检查，决定是否渲染原组件","权限不足时显示友好的错误提示","权限验证通过时将用户信息传递给原组件"],commonTraps:["硬编码用户信息，实际应用中应从Context或状态管理获取","权限检查逻辑过于简单，实际可能需要更复杂的权限系统","没有处理用户信息为空的情况"],solutions:["集成真实的用户认证系统和权限管理","使用React Context或Redux管理用户状态","提供更灵活的权限检查函数"],importantTips:["权限控制HOC应该与应用的认证系统紧密集成","考虑提供loading状态，因为权限检查可能是异步的","权限不足的提示信息应该用户友好且符合设计规范"],preCode:[{title:"UserProfile",code:m},{title:"withAuth",code:l}],codeExample:{title:"权限控制HOC示例",code:w}},{title:"3. 数据获取HOC",description:"封装数据获取逻辑，提供统一的数据接口",component:e.jsx(v,{}),observationPoints:['组件加载时自动显示"数据加载中..."状态',"1秒后数据加载完成，显示用户列表","HOC自动处理了loading、data、error三种状态","原组件只需关心如何渲染数据，无需处理加载逻辑"],keyPoints:["HOC封装了完整的异步数据获取流程","提供loading、data、error三个状态给原组件","使用useEffect在组件挂载时自动获取数据","通过isMounted标志避免组件卸载后的状态更新"],commonTraps:["没有处理组件卸载时的清理，可能导致内存泄漏","数据获取失败时没有提供重试机制","没有考虑数据缓存，每次都重新获取"],solutions:["使用cleanup函数和isMounted标志防止内存泄漏","提供重试机制和错误恢复功能","考虑集成数据缓存或使用SWR等库"],importantTips:["withData HOC适合封装标准的CRUD操作","可以扩展支持分页、筛选等高级功能","在实际项目中建议使用成熟的数据获取库如React Query"],preCode:[{title:"withData",code:l}],codeExample:{title:"数据获取HOC示例",code:P}}],tutorial:{concepts:["HOC（Higher-Order Component）是一个函数，接收一个组件并返回一个新的增强组件","HOC是React中实现横切关注点（cross-cutting concerns）的主要方式","HOC不修改原始组件，而是通过组合的方式扩展功能，遵循开闭原则","HOC可以用于逻辑复用、props操作、状态管理、条件渲染等场景","HOC本质上是一种设计模式，类似于装饰器模式"],steps:["1. 定义HOC函数：创建一个接收组件作为参数的函数","2. 创建包装组件：在HOC内部定义一个新的React组件","3. 添加增强逻辑：在包装组件中实现所需的功能（状态管理、副作用等）","4. 渲染原组件：返回原始组件并传递所有必要的props","5. 设置displayName：为调试和开发工具提供有意义的组件名称","6. 处理静态方法：复制原组件的静态方法到新组件","7. 转发refs：使用React.forwardRef确保ref能正确传递到原组件"],tips:["使用TypeScript泛型确保类型安全，避免props类型丢失","为HOC组件设置有意义的displayName，格式如：WithHOCName(ComponentName)","使用React.forwardRef转发refs，确保父组件能访问到被包装组件的实例","复制原组件的静态方法到新组件，使用hoist-non-react-statics库","避免在render方法中创建HOC，这会导致组件重新挂载","考虑使用React Hooks替代HOC，Hooks通常更简洁且易于理解","为复杂的HOC提供配置选项，增加灵活性和可复用性"]},interview:{questions:[{question:"什么是HOC（高阶组件）？它的核心思想是什么？",answer:"HOC是一个函数，接收一个组件作为参数并返回一个新的增强组件。核心思想是通过组合而非继承来扩展组件功能，实现横切关注点的分离和逻辑复用。它类似于高阶函数的概念，但应用于React组件。"},{question:"HOC解决了什么问题？有哪些典型应用场景？",answer:"HOC主要解决组件间逻辑复用问题。典型应用场景包括：1）权限控制和身份验证；2）数据获取和状态管理；3）日志记录和性能监控；4）主题切换和样式注入；5）表单验证和错误处理；6）条件渲染和加载状态管理。"},{question:"HOC和React Hooks的区别是什么？各有什么优缺点？",answer:"HOC通过组件包装实现逻辑复用，Hooks通过函数调用实现。HOC优点：概念清晰、可以操作整个组件树；缺点：可能导致包装地狱、props来源不明确。Hooks优点：更简洁、逻辑更清晰、避免嵌套；缺点：只能在函数组件中使用、有使用规则限制。"},{question:"使用HOC时需要注意哪些问题？如何避免常见陷阱？",answer:"常见问题：1）不要在render中创建HOC，会导致重新挂载；2）需要转发refs和复制静态方法；3）props命名冲突；4）调试困难。解决方案：1）在组件外部创建HOC；2）使用React.forwardRef和hoist-non-react-statics；3）使用命名空间避免冲突；4）设置displayName便于调试。"},{question:"如何实现一个类型安全的HOC？",answer:"使用TypeScript泛型：1）定义泛型参数约束原组件props类型；2）明确指定HOC注入的props类型；3）使用交叉类型合并props；4）正确处理可选props和默认值；5）为复杂场景提供类型辅助函数。"}],keyPoints:["HOC是函数，不是组件，遵循函数式编程思想","通过组合而非继承实现功能扩展，符合React设计理念","解决横切关注点问题，实现关注点分离","不修改原组件，保持组件的纯净性和可测试性","需要正确处理refs转发、静态方法复制和displayName设置","在现代React开发中，Hooks通常是更好的选择","适合封装复杂的、跨组件的业务逻辑"]},bestPractices:{dos:["使用TypeScript泛型确保类型安全，避免any类型的滥用","为HOC设置有意义的displayName，格式：WithHOCName(ComponentName)","使用React.forwardRef正确转发refs到被包装组件","使用hoist-non-react-statics库复制静态方法","在组件外部创建HOC实例，避免在render中创建","提供清晰的文档说明HOC的功能和使用方法","为复杂HOC提供配置选项，增加灵活性","使用命名空间避免props命名冲突","实现适当的错误边界和异常处理","考虑性能优化，使用React.memo等优化手段"],donts:["不要在render方法中创建HOC，会导致组件重新挂载","不要修改原始组件的prototype或静态属性",'不要过度嵌套HOC，避免"包装地狱"',"不要在HOC中直接修改传入的props对象","不要忽略ref转发和静态方法复制","不要使用HOC处理简单的逻辑，优先考虑Hooks","不要在HOC中硬编码业务逻辑，保持通用性","不要忽略TypeScript类型定义，避免类型丢失","不要在HOC中进行副作用操作而不清理","不要创建过于复杂的HOC，影响代码可读性"],patterns:["属性代理模式：HOC通过props传递数据和方法给被包装组件","反向继承模式：HOC返回的组件继承自被包装组件（不推荐）","条件渲染模式：根据条件决定是否渲染被包装组件","数据获取模式：HOC负责数据获取，被包装组件负责展示","权限控制模式：HOC进行权限验证，控制组件访问","错误边界模式：HOC提供错误捕获和处理能力","主题注入模式：HOC注入主题相关的props和样式","生命周期增强模式：HOC添加额外的生命周期逻辑","状态管理模式：HOC提供状态管理和状态同步功能","组合模式：多个HOC组合使用，实现复杂功能"]}};return e.jsx(x,{...t})};export{L as default};
