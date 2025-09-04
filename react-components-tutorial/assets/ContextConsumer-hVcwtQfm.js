import{r as c,j as e}from"./index-H7t66yxh.js";import{C as k}from"./ComponentTemplate-bNJaV0ol.js";const v=c.createContext(void 0),S=({children:m})=>{const[r,o]=c.useState([]),a=c.useCallback((n,d,l=5e3)=>{const g=Date.now().toString(),u={id:g,message:n,type:d,duration:l};o(x=>[...x,u]),l>0&&setTimeout(()=>{s(g)},l)},[]),s=c.useCallback(n=>{o(d=>d.filter(l=>l.id!==n))},[]),t=c.useCallback(()=>{o([])},[]),i=c.useMemo(()=>({notifications:r,addNotification:a,removeNotification:s,clearAll:t}),[r,a,s,t]);return e.jsx(v.Provider,{value:i,children:m})},I=()=>{const m=c.useContext(v);if(m===void 0)throw new Error("useNotification must be used within a NotificationProvider");return m},L=()=>{console.log("BasicConsumerExample 渲染");const m=()=>e.jsx(v.Consumer,{children:o=>{if(console.log("NotificationDisplay Consumer 渲染",o),!o)return e.jsx("div",{className:"text-red-500",children:"NotificationContext not found"});const{notifications:a,removeNotification:s,clearAll:t}=o;return a.length===0?e.jsxs("div",{className:"p-4 text-center text-gray-500 border-2 border-dashed border-gray-300 rounded-lg",children:[e.jsx("div",{className:"text-2xl mb-2",children:"🔔"}),e.jsx("p",{children:"暂无通知"})]}):e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800",children:"通知列表"}),e.jsx("button",{onClick:t,className:"px-3 py-1 bg-gray-600 text-white rounded text-sm hover:bg-gray-700",children:"清空所有"})]}),e.jsx("div",{className:"space-y-2",children:a.map(i=>{const n={success:"bg-green-50 border-green-200 text-green-800",error:"bg-red-50 border-red-200 text-red-800",warning:"bg-yellow-50 border-yellow-200 text-yellow-800",info:"bg-blue-50 border-blue-200 text-blue-800"}[i.type],d={success:"✅",error:"❌",warning:"⚠️",info:"ℹ️"}[i.type];return e.jsx("div",{className:`p-3 border rounded-lg ${n}`,children:e.jsxs("div",{className:"flex items-start justify-between",children:[e.jsxs("div",{className:"flex items-start space-x-2",children:[e.jsx("span",{className:"text-lg",children:d}),e.jsx("p",{className:"flex-1",children:i.message})]}),e.jsx("button",{onClick:()=>s(i.id),className:"ml-2 text-gray-400 hover:text-gray-600",children:"×"})]})},i.id)})})]})}}),r=()=>{const{addNotification:o}=I();return e.jsxs("div",{className:"space-y-3",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800",children:"添加通知"}),e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx("button",{onClick:()=>{console.log("添加成功通知"),o("操作成功完成！","success")},className:"px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700",children:"成功通知"}),e.jsx("button",{onClick:()=>{console.log("添加错误通知"),o("发生了一个错误","error")},className:"px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700",children:"错误通知"}),e.jsx("button",{onClick:()=>{console.log("添加警告通知"),o("请注意这个警告","warning")},className:"px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700",children:"警告通知"}),e.jsx("button",{onClick:()=>{console.log("添加信息通知"),o("这是一条信息","info")},className:"px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700",children:"信息通知"})]})]})};return e.jsxs(S,{children:[e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsx(r,{}),e.jsx(m,{})]}),e.jsxs("div",{className:"mt-6 p-4 bg-gray-50 border border-gray-200 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-gray-800 mb-2",children:"Context.Consumer 特点"}),e.jsxs("ul",{className:"text-sm text-gray-600 space-y-1",children:[e.jsx("li",{children:"• 使用render props模式访问Context数据"}),e.jsx("li",{children:"• 可以在JSX中直接处理Context不存在的情况"}),e.jsx("li",{children:"• 适用于类组件和函数组件"}),e.jsx("li",{children:"• 可以与useContext Hook混合使用"})]})]})]})},P=`import React from 'react';
import { NotificationContext, NotificationProvider, useNotification } from './NotificationContext';

const BasicConsumerExample: React.FC = () => {
  console.log("BasicConsumerExample 渲染"); // ← 重点：控制台日志

  const NotificationDisplay: React.FC = () => {
    return (
      <NotificationContext.Consumer>
        {(context) => {
          console.log("NotificationDisplay Consumer 渲染", context); // ← 重点：Consumer渲染日志

          if (!context) {
            return (
              <div className="text-red-500">NotificationContext not found</div>
            );
          }

          const { notifications, removeNotification, clearAll } = context;

          if (notifications.length === 0) {
            return (
              <div className="p-4 text-center text-gray-500 border-2 border-dashed border-gray-300 rounded-lg">
                <div className="text-2xl mb-2">🔔</div>
                <p>暂无通知</p>
              </div>
            );
          }

          return (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-800">
                  通知列表
                </h3>
                <button
                  onClick={clearAll} // ← 重点：Consumer中直接使用Context方法
                  className="px-3 py-1 bg-gray-600 text-white rounded text-sm hover:bg-gray-700"
                >
                  清空所有
                </button>
              </div>

              <div className="space-y-2">
                {notifications.map((notification) => {
                  const bgColor = {
                    success: "bg-green-50 border-green-200 text-green-800",
                    error: "bg-red-50 border-red-200 text-red-800",
                    warning: "bg-yellow-50 border-yellow-200 text-yellow-800",
                    info: "bg-blue-50 border-blue-200 text-blue-800",
                  }[notification.type];

                  const icon = {
                    success: "✅",
                    error: "❌",
                    warning: "⚠️",
                    info: "ℹ️",
                  }[notification.type];

                  return (
                    <div
                      key={notification.id}
                      className={\`p-3 border rounded-lg \${bgColor}\`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-2">
                          <span className="text-lg">{icon}</span>
                          <p className="flex-1">{notification.message}</p>
                        </div>
                        <button
                          onClick={() => removeNotification(notification.id)} // ← 重点：动态调用Context方法
                          className="ml-2 text-gray-400 hover:text-gray-600"
                        >
                          ×
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        }}
      </NotificationContext.Consumer>
    );
  };

  const NotificationControls: React.FC = () => {
    const { addNotification } = useNotification(); // ← 重点：结合useContext使用

    return (
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-gray-800">添加通知</h3>
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => {
              console.log("添加成功通知"); // ← 重点：操作日志
              addNotification("操作成功完成！", "success");
            }}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            成功通知
          </button>
          <button
            onClick={() => {
              console.log("添加错误通知"); // ← 重点：操作日志
              addNotification("发生了一个错误", "error");
            }}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            错误通知
          </button>
          <button
            onClick={() => {
              console.log("添加警告通知"); // ← 重点：操作日志
              addNotification("请注意这个警告", "warning");
            }}
            className="px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700"
          >
            警告通知
          </button>
          <button
            onClick={() => {
              console.log("添加信息通知"); // ← 重点：操作日志
              addNotification("这是一条信息", "info");
            }}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            信息通知
          </button>
        </div>
      </div>
    );
  };

  return (
    <NotificationProvider>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <NotificationControls />
        <NotificationDisplay />
      </div>

      <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-lg">
        <h4 className="font-semibold text-gray-800 mb-2">
          Context.Consumer 特点
        </h4>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• 使用render props模式访问Context数据</li>
          <li>• 可以在JSX中直接处理Context不存在的情况</li>
          <li>• 适用于类组件和函数组件</li>
          <li>• 可以与useContext Hook混合使用</li>
        </ul>
      </div>
    </NotificationProvider>
  );
};

export default BasicConsumerExample;`;class R extends c.Component{componentDidMount(){console.log("ClassConsumerExample 组件挂载")}componentDidUpdate(){console.log("ClassConsumerExample 组件更新")}render(){return console.log("ClassConsumerExample 渲染"),e.jsx(S,{children:e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"p-4 bg-blue-50 border border-blue-200 rounded-lg",children:[e.jsx("h3",{className:"text-lg font-semibold text-blue-800 mb-2",children:"类组件中的 Context Consumer"}),e.jsx("p",{className:"text-blue-700 text-sm",children:"这是一个类组件示例，展示如何在类组件中使用 Context.Consumer"})]}),e.jsx(v.Consumer,{children:r=>{if(console.log("类组件 Consumer 渲染",r),!r)return e.jsx("div",{className:"text-red-500",children:"NotificationContext not found in class component"});const{notifications:o,addNotification:a,clearAll:s}=r;return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsx("h4",{className:"font-semibold text-gray-800",children:"类组件操作面板"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("button",{onClick:()=>{console.log("类组件添加通知"),a("来自类组件的通知","info")},className:"w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700",children:"📢 添加类组件通知"}),e.jsx("button",{onClick:()=>{console.log("类组件添加成功通知"),a("类组件操作成功！","success")},className:"w-full px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700",children:"✅ 成功通知"}),e.jsx("button",{onClick:()=>{console.log("类组件清空通知"),s()},className:"w-full px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700",children:"🗑️ 清空所有"})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("h4",{className:"font-semibold text-gray-800",children:["通知列表 (",o.length,")"]}),e.jsx("div",{className:"max-h-48 overflow-y-auto space-y-2",children:o.length===0?e.jsxs("div",{className:"p-4 text-center text-gray-500 border-2 border-dashed border-gray-300 rounded-lg",children:[e.jsx("div",{className:"text-2xl mb-2",children:"📭"}),e.jsx("p",{children:"暂无通知"})]}):o.map(t=>{const i={success:"bg-green-50 border-green-200 text-green-800",error:"bg-red-50 border-red-200 text-red-800",warning:"bg-yellow-50 border-yellow-200 text-yellow-800",info:"bg-blue-50 border-blue-200 text-blue-800"}[t.type],n={success:"✅",error:"❌",warning:"⚠️",info:"ℹ️"}[t.type];return e.jsx("div",{className:`p-3 border rounded-lg ${i}`,children:e.jsxs("div",{className:"flex items-start space-x-2",children:[e.jsx("span",{className:"text-lg",children:n}),e.jsx("p",{className:"flex-1 text-sm",children:t.message})]})},t.id)})})]})]}),e.jsxs("div",{className:"p-4 bg-yellow-50 border border-yellow-200 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-yellow-800 mb-2",children:"类组件 Consumer 特点"}),e.jsxs("ul",{className:"text-sm text-yellow-700 space-y-1",children:[e.jsx("li",{children:"• 类组件无法使用 useContext Hook，必须使用 Consumer"}),e.jsx("li",{children:"• Consumer 提供了类组件访问 Context 的唯一方式"}),e.jsx("li",{children:"• 可以在类组件的任何方法中使用 Consumer"}),e.jsx("li",{children:"• Consumer 与类组件的生命周期方法完全兼容"})]})]}),e.jsxs("div",{className:"p-4 bg-purple-50 border border-purple-200 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-purple-800 mb-2",children:"生命周期集成"}),e.jsx("p",{className:"text-sm text-purple-700 mb-2",children:"打开浏览器控制台查看类组件生命周期日志："}),e.jsxs("ul",{className:"text-sm text-purple-600 space-y-1",children:[e.jsx("li",{children:"• componentDidMount: 组件挂载时触发"}),e.jsx("li",{children:"• componentDidUpdate: Context 数据变化时触发"}),e.jsx("li",{children:"• render: 每次重新渲染时触发"})]})]})]})}})]})})}}const E=`import React, { Component } from 'react';
import { NotificationContext, NotificationProvider } from './NotificationContext';

class ClassConsumerExample extends Component {
  componentDidMount() {
    console.log("ClassConsumerExample 组件挂载"); // ← 重点：生命周期日志
  }

  componentDidUpdate() {
    console.log("ClassConsumerExample 组件更新"); // ← 重点：生命周期日志
  }

  render() {
    console.log("ClassConsumerExample 渲染"); // ← 重点：渲染日志

    return (
      <NotificationProvider>
        <div className="space-y-6">
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">
              类组件中的 Context Consumer
            </h3>
            <p className="text-blue-700 text-sm">
              这是一个类组件示例，展示如何在类组件中使用 Context.Consumer
            </p>
          </div>

          {/* 类组件中使用Consumer */}
          <NotificationContext.Consumer>
            {(context) => {
              console.log("类组件 Consumer 渲染", context); // ← 重点：Consumer渲染日志

              if (!context) {
                return (
                  <div className="text-red-500">
                    NotificationContext not found in class component
                  </div>
                );
              }

              const { notifications, addNotification, clearAll } = context;

              return (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* 控制面板 */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-800">
                        类组件操作面板
                      </h4>
                      <div className="space-y-2">
                        <button
                          onClick={() => {
                            console.log("类组件添加通知"); // ← 重点：操作日志
                            addNotification(
                              "来自类组件的通知",
                              "info"
                            ); // ← 重点：类组件中调用Context方法
                          }}
                          className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                        >
                          📢 添加类组件通知
                        </button>
                        <button
                          onClick={() => {
                            console.log("类组件添加成功通知"); // ← 重点：操作日志
                            addNotification(
                              "类组件操作成功！",
                              "success"
                            ); // ← 重点：类组件中调用Context方法
                          }}
                          className="w-full px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                        >
                          ✅ 成功通知
                        </button>
                        <button
                          onClick={() => {
                            console.log("类组件清空通知"); // ← 重点：操作日志
                            clearAll(); // ← 重点：类组件中调用Context方法
                          }}
                          className="w-full px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
                        >
                          🗑️ 清空所有
                        </button>
                      </div>
                    </div>

                    {/* 通知显示 */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-800">
                        通知列表 ({notifications.length})
                      </h4>
                      <div className="max-h-48 overflow-y-auto space-y-2">
                        {notifications.length === 0 ? (
                          <div className="p-4 text-center text-gray-500 border-2 border-dashed border-gray-300 rounded-lg">
                            <div className="text-2xl mb-2">📭</div>
                            <p>暂无通知</p>
                          </div>
                        ) : (
                          notifications.map((notification) => {
                            const bgColor = {
                              success:
                                "bg-green-50 border-green-200 text-green-800",
                              error: "bg-red-50 border-red-200 text-red-800",
                              warning:
                                "bg-yellow-50 border-yellow-200 text-yellow-800",
                              info: "bg-blue-50 border-blue-200 text-blue-800",
                            }[notification.type];

                            const icon = {
                              success: "✅",
                              error: "❌",
                              warning: "⚠️",
                              info: "ℹ️",
                            }[notification.type];

                            return (
                              <div
                                key={notification.id}
                                className={\`p-3 border rounded-lg \${bgColor}\`}
                              >
                                <div className="flex items-start space-x-2">
                                  <span className="text-lg">{icon}</span>
                                  <p className="flex-1 text-sm">
                                    {notification.message}
                                  </p>
                                </div>
                              </div>
                            );
                          })
                        )}
                      </div>
                    </div>
                  </div>

                  {/* 类组件特点说明 */}
                  <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <h4 className="font-semibold text-yellow-800 mb-2">
                      类组件 Consumer 特点
                    </h4>
                    <ul className="text-sm text-yellow-700 space-y-1">
                      <li>
                        • 类组件无法使用 useContext Hook，必须使用 Consumer
                      </li>
                      <li>• Consumer 提供了类组件访问 Context 的唯一方式</li>
                      <li>• 可以在类组件的任何方法中使用 Consumer</li>
                      <li>• Consumer 与类组件的生命周期方法完全兼容</li>
                    </ul>
                  </div>

                  {/* 生命周期演示 */}
                  <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                    <h4 className="font-semibold text-purple-800 mb-2">
                      生命周期集成
                    </h4>
                    <p className="text-sm text-purple-700 mb-2">
                      打开浏览器控制台查看类组件生命周期日志：
                    </p>
                    <ul className="text-sm text-purple-600 space-y-1">
                      <li>• componentDidMount: 组件挂载时触发</li>
                      <li>• componentDidUpdate: Context 数据变化时触发</li>
                      <li>• render: 每次重新渲染时触发</li>
                    </ul>
                  </div>
                </div>
              );
            }}
          </NotificationContext.Consumer>
        </div>
      </NotificationProvider>
    );
  }
}

export default ClassConsumerExample;`,b=c.createContext(void 0),A=({children:m})=>{const r=[{code:"zh",name:"中文",flag:"🇨🇳"},{code:"en",name:"English",flag:"🇺🇸"},{code:"ja",name:"日本語",flag:"🇯🇵"},{code:"ko",name:"한국어",flag:"🇰🇷"}],[o,a]=c.useState(r[0]),s={zh:{welcome:"欢迎",hello:"你好，{name}！",goodbye:"再见",settings:"设置",language:"语言",theme:"主题",profile:"个人资料",logout:"退出登录",save:"保存",cancel:"取消",confirm:"确认",loading:"加载中...",error:"发生错误",success:"操作成功"},en:{welcome:"Welcome",hello:"Hello, {name}!",goodbye:"Goodbye",settings:"Settings",language:"Language",theme:"Theme",profile:"Profile",logout:"Logout",save:"Save",cancel:"Cancel",confirm:"Confirm",loading:"Loading...",error:"An error occurred",success:"Operation successful"},ja:{welcome:"ようこそ",hello:"こんにちは、{name}さん！",goodbye:"さようなら",settings:"設定",language:"言語",theme:"テーマ",profile:"プロフィール",logout:"ログアウト",save:"保存",cancel:"キャンセル",confirm:"確認",loading:"読み込み中...",error:"エラーが発生しました",success:"操作が成功しました"},ko:{welcome:"환영합니다",hello:"안녕하세요, {name}님!",goodbye:"안녕히 가세요",settings:"설정",language:"언어",theme:"테마",profile:"프로필",logout:"로그아웃",save:"저장",cancel:"취소",confirm:"확인",loading:"로딩 중...",error:"오류가 발생했습니다",success:"작업이 성공했습니다"}},t=c.useCallback(d=>{const l=r.find(g=>g.code===d);l&&a(l)},[r]),i=c.useCallback((d,l)=>{var u;const g=((u=s[o.code])==null?void 0:u[d])||d;return l?Object.entries(l).reduce((x,[C,p])=>x.replace(`{${C}}`,p),g):g},[o.code,s]),n=c.useMemo(()=>({currentLanguage:o,availableLanguages:r,translations:s,changeLanguage:t,t:i}),[o,r,s,t,i]);return e.jsx(b.Provider,{value:n,children:m})},J=()=>{console.log("I18nConsumerExample 渲染");const m=()=>e.jsx(b.Consumer,{children:a=>{if(console.log("LanguageSelector Consumer 渲染",a),!a)return e.jsx("div",{className:"text-red-500",children:"I18nContext not found"});const{currentLanguage:s,availableLanguages:t,changeLanguage:i}=a;return e.jsxs("div",{className:"space-y-3",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800",children:"语言选择"}),e.jsx("div",{className:"grid grid-cols-2 gap-2",children:t.map(n=>{const d=s.code===n.code;return e.jsx("button",{onClick:()=>{console.log(`切换语言到: ${n.name}`),i(n.code)},className:`p-3 border rounded-lg text-left transition-colors ${d?"bg-blue-50 border-blue-300 text-blue-800":"bg-white border-gray-300 text-gray-700 hover:bg-gray-50"}`,children:e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("span",{className:"text-2xl",children:n.flag}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium",children:n.name}),e.jsx("div",{className:"text-sm text-gray-500",children:n.code.toUpperCase()})]}),d&&e.jsx("span",{className:"ml-auto text-blue-600",children:"✓"})]})},n.code)})})]})}}),r=()=>e.jsx(b.Consumer,{children:a=>{if(console.log("TranslationDemo Consumer 渲染",a),!a)return e.jsx("div",{className:"text-red-500",children:"I18nContext not found"});const{t:s,currentLanguage:t}=a;return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800",children:"翻译演示"}),e.jsxs("div",{className:"text-sm text-gray-500",children:["当前语言: ",t.flag," ",t.name]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"p-3 bg-white border border-gray-200 rounded-lg",children:[e.jsx("div",{className:"text-sm text-gray-500 mb-1",children:"基础翻译:"}),e.jsx("div",{className:"font-medium",children:s("welcome")})]}),e.jsxs("div",{className:"p-3 bg-white border border-gray-200 rounded-lg",children:[e.jsx("div",{className:"text-sm text-gray-500 mb-1",children:"参数化翻译:"}),e.jsxs("div",{className:"font-medium",children:[s("hello",{name:"张三"})," "]})]}),e.jsx("div",{className:"grid grid-cols-2 gap-2",children:["settings","language","theme","profile","save","cancel","loading","success"].map(i=>e.jsxs("div",{className:"p-2 bg-gray-50 border border-gray-200 rounded text-center",children:[e.jsx("div",{className:"text-xs text-gray-500 mb-1",children:i}),e.jsx("div",{className:"text-sm font-medium",children:s(i)})," "]},i))})]})]})}}),o=()=>e.jsx(b.Consumer,{children:a=>{if(!a)return e.jsx("div",{className:"text-red-500",children:"I18nContext not found"});const{t:s}=a;return e.jsxs("div",{className:"mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg",children:[e.jsxs("h4",{className:"font-semibold text-gray-800 mb-3",children:[s("settings")," "]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("button",{className:"w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700",children:[s("save")," "]}),e.jsxs("button",{className:"w-full px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700",children:[s("cancel")," "]})]})]})}});return e.jsxs(A,{children:[e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsx(m,{}),e.jsx(r,{})]}),e.jsx(o,{}),e.jsxs("div",{className:"mt-6 p-4 bg-gray-50 border border-gray-200 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-gray-800 mb-2",children:"国际化 Consumer 特点"}),e.jsxs("ul",{className:"text-sm text-gray-600 space-y-1",children:[e.jsx("li",{children:"• Consumer可以访问Context中的所有方法和数据"}),e.jsx("li",{children:"• 在Consumer中可以直接调用翻译函数"}),e.jsx("li",{children:"• 支持参数化翻译和动态语言切换"}),e.jsx("li",{children:"• Consumer内部可以进行复杂的数据处理"})]})]})]})},T=`import React from 'react';
import { I18nContext, I18nProvider } from './I18nContext';

const I18nConsumerExample: React.FC = () => {
  console.log("I18nConsumerExample 渲染"); // ← 重点：控制台日志

  const LanguageSelector: React.FC = () => {
    return (
      <I18nContext.Consumer>
        {(context) => {
          console.log("LanguageSelector Consumer 渲染", context); // ← 重点：Consumer渲染日志

          if (!context) {
            return <div className="text-red-500">I18nContext not found</div>;
          }

          const { currentLanguage, availableLanguages, changeLanguage } = context;

          return (
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-gray-800">语言选择</h3>
              <div className="grid grid-cols-2 gap-2">
                {availableLanguages.map((language) => {
                  const isActive = currentLanguage.code === language.code;
                  return (
                    <button
                      key={language.code}
                      onClick={() => {
                        console.log(\`切换语言到: \${language.name}\`); // ← 重点：操作日志
                        changeLanguage(language.code); // ← 重点：Consumer中调用Context方法
                      }}
                      className={\`p-3 border rounded-lg text-left transition-colors \${
                        isActive
                          ? "bg-blue-50 border-blue-300 text-blue-800"
                          : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
                      }\`}
                    >
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl">{language.flag}</span>
                        <div>
                          <div className="font-medium">{language.name}</div>
                          <div className="text-sm text-gray-500">
                            {language.code.toUpperCase()}
                          </div>
                        </div>
                        {isActive && (
                          <span className="ml-auto text-blue-600">✓</span>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        }}
      </I18nContext.Consumer>
    );
  };

  const TranslationDemo: React.FC = () => {
    return (
      <I18nContext.Consumer>
        {(context) => {
          console.log("TranslationDemo Consumer 渲染", context); // ← 重点：Consumer渲染日志

          if (!context) {
            return <div className="text-red-500">I18nContext not found</div>;
          }

          const { t, currentLanguage } = context;

          return (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-800">
                  翻译演示
                </h3>
                <div className="text-sm text-gray-500">
                  当前语言: {currentLanguage.flag} {currentLanguage.name}
                </div>
              </div>

              <div className="space-y-3">
                <div className="p-3 bg-white border border-gray-200 rounded-lg">
                  <div className="text-sm text-gray-500 mb-1">基础翻译:</div>
                  <div className="font-medium">{t("welcome")}</div>
                </div>

                <div className="p-3 bg-white border border-gray-200 rounded-lg">
                  <div className="text-sm text-gray-500 mb-1">参数化翻译:</div>
                  <div className="font-medium">
                    {t("hello", { name: "张三" })} {/* ← 重点：Consumer中使用参数化翻译 */}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {[
                    "settings",
                    "language",
                    "theme",
                    "profile",
                    "save",
                    "cancel",
                    "loading",
                    "success",
                  ].map((key) => (
                    <div
                      key={key}
                      className="p-2 bg-gray-50 border border-gray-200 rounded text-center"
                    >
                      <div className="text-xs text-gray-500 mb-1">{key}</div>
                      <div className="text-sm font-medium">{t(key)}</div> {/* ← 重点：动态翻译 */}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        }}
      </I18nContext.Consumer>
    );
  };

  const UserInterface: React.FC = () => {
    return (
      <I18nContext.Consumer>
        {(context) => {
          if (!context) {
            return <div className="text-red-500">I18nContext not found</div>;
          }

          const { t } = context;

          return (
            <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-3">
                {t("settings")} {/* ← 重点：UI中使用翻译 */}
              </h4>
              <div className="space-y-2">
                <button className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                  {t("save")} {/* ← 重点：按钮文本翻译 */}
                </button>
                <button className="w-full px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700">
                  {t("cancel")} {/* ← 重点：按钮文本翻译 */}
                </button>
              </div>
            </div>
          );
        }}
      </I18nContext.Consumer>
    );
  };

  return (
    <I18nProvider>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <LanguageSelector />
        <TranslationDemo />
      </div>
      <UserInterface />

      <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-lg">
        <h4 className="font-semibold text-gray-800 mb-2">
          国际化 Consumer 特点
        </h4>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• Consumer可以访问Context中的所有方法和数据</li>
          <li>• 在Consumer中可以直接调用翻译函数</li>
          <li>• 支持参数化翻译和动态语言切换</li>
          <li>• Consumer内部可以进行复杂的数据处理</li>
        </ul>
      </div>
    </I18nProvider>
  );
};

export default I18nConsumerExample;`,$=`import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';

// 语言国际化Context
interface Language {
  code: string;
  name: string;
  flag: string;
}

interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

interface I18nContextType {
  currentLanguage: Language;
  availableLanguages: Language[];
  translations: Translations;
  changeLanguage: (code: string) => void;
  t: (key: string, params?: Record<string, string>) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

const I18nProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const availableLanguages: Language[] = [
    { code: "zh", name: "中文", flag: "🇨🇳" },
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "ja", name: "日本語", flag: "🇯🇵" },
    { code: "ko", name: "한국어", flag: "🇰🇷" },
  ];

  const [currentLanguage, setCurrentLanguage] = useState<Language>(
    availableLanguages[0]
  );

  const translations: Translations = {
    zh: {
      welcome: "欢迎",
      hello: "你好，{name}！",
      goodbye: "再见",
      settings: "设置",
      language: "语言",
      theme: "主题",
      profile: "个人资料",
      logout: "退出登录",
      save: "保存",
      cancel: "取消",
      confirm: "确认",
      loading: "加载中...",
      error: "发生错误",
      success: "操作成功",
    },
    en: {
      welcome: "Welcome",
      hello: "Hello, {name}!",
      goodbye: "Goodbye",
      settings: "Settings",
      language: "Language",
      theme: "Theme",
      profile: "Profile",
      logout: "Logout",
      save: "Save",
      cancel: "Cancel",
      confirm: "Confirm",
      loading: "Loading...",
      error: "An error occurred",
      success: "Operation successful",
    },
    ja: {
      welcome: "ようこそ",
      hello: "こんにちは、{name}さん！",
      goodbye: "さようなら",
      settings: "設定",
      language: "言語",
      theme: "テーマ",
      profile: "プロフィール",
      logout: "ログアウト",
      save: "保存",
      cancel: "キャンセル",
      confirm: "確認",
      loading: "読み込み中...",
      error: "エラーが発生しました",
      success: "操作が成功しました",
    },
    ko: {
      welcome: "환영합니다",
      hello: "안녕하세요, {name}님!",
      goodbye: "안녕히 가세요",
      settings: "설정",
      language: "언어",
      theme: "테마",
      profile: "프로필",
      logout: "로그아웃",
      save: "저장",
      cancel: "취소",
      confirm: "확인",
      loading: "로딩 중...",
      error: "오류가 발생했습니다",
      success: "작업이 성공했습니다",
    },
  };

  const changeLanguage = useCallback(
    (code: string) => {
      const language = availableLanguages.find((lang) => lang.code === code);
      if (language) {
        setCurrentLanguage(language);
      }
    },
    [availableLanguages]
  );

  const t = useCallback(
    (key: string, params?: Record<string, string>) => {
      const translation = translations[currentLanguage.code]?.[key] || key;

      if (params) {
        return Object.entries(params).reduce(
          (result, [paramKey, paramValue]) =>
            result.replace(\`{\${paramKey}}\`, paramValue),
          translation
        );
      }

      return translation;
    },
    [currentLanguage.code, translations]
  );

  const value = useMemo(
    () => ({
      currentLanguage,
      availableLanguages,
      translations,
      changeLanguage,
      t,
    }),
    [currentLanguage, availableLanguages, translations, changeLanguage, t]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

const useI18n = () => {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
};

export { I18nContext, I18nProvider, useI18n };
export type { Language, Translations, I18nContextType };`,j=`import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';\r
\r
// 通知系统Context\r
interface Notification {\r
  id: string;\r
  message: string;\r
  type: "success" | "error" | "warning" | "info";\r
  duration?: number;\r
}\r
\r
interface NotificationContextType {\r
  notifications: Notification[];\r
  addNotification: (\r
    message: string,\r
    type: Notification["type"],\r
    duration?: number\r
  ) => void;\r
  removeNotification: (id: string) => void;\r
  clearAll: () => void;\r
}\r
\r
const NotificationContext = createContext<NotificationContextType | undefined>(\r
  undefined\r
);\r
\r
const NotificationProvider: React.FC<{ children: React.ReactNode }> = ({\r
  children,\r
}) => {\r
  const [notifications, setNotifications] = useState<Notification[]>([]);\r
\r
  const addNotification = useCallback(\r
    (message: string, type: Notification["type"], duration = 5000) => {\r
      const id = Date.now().toString();\r
      const notification: Notification = { id, message, type, duration };\r
\r
      setNotifications((prev) => [...prev, notification]);\r
\r
      // 自动移除通知\r
      if (duration > 0) {\r
        setTimeout(() => {\r
          removeNotification(id);\r
        }, duration);\r
      }\r
    },\r
    []\r
  );\r
\r
  const removeNotification = useCallback((id: string) => {\r
    setNotifications((prev) =>\r
      prev.filter((notification) => notification.id !== id)\r
    );\r
  }, []);\r
\r
  const clearAll = useCallback(() => {\r
    setNotifications([]);\r
  }, []);\r
\r
  const value = useMemo(\r
    () => ({\r
      notifications,\r
      addNotification,\r
      removeNotification,\r
      clearAll,\r
    }),\r
    [notifications, addNotification, removeNotification, clearAll]\r
  );\r
\r
  return (\r
    <NotificationContext.Provider value={value}>\r
      {children}\r
    </NotificationContext.Provider>\r
  );\r
};\r
\r
const useNotification = () => {\r
  const context = useContext(NotificationContext);\r
  if (context === undefined) {\r
    throw new Error(\r
      "useNotification must be used within a NotificationProvider"\r
    );\r
  }\r
  return context;\r
};\r
\r
export { NotificationContext, NotificationProvider, useNotification };\r
export type { Notification, NotificationContextType };`,f=c.createContext(void 0),M=({children:m})=>{const r={theme:"light",language:"zh",fontSize:"medium",notifications:!0,autoSave:!0,compactMode:!1},[o,a]=c.useState(()=>{try{const l=localStorage.getItem("app-settings");return l?{...r,...JSON.parse(l)}:r}catch{return r}}),s=c.useCallback((l,g)=>{a(u=>{const x={...u,[l]:g};return localStorage.setItem("app-settings",JSON.stringify(x)),x})},[]),t=c.useCallback(()=>{a(r),localStorage.setItem("app-settings",JSON.stringify(r))},[r]),i=c.useCallback(()=>JSON.stringify(o,null,2),[o]),n=c.useCallback(l=>{try{const g=JSON.parse(l),u={...r,...g};return a(u),localStorage.setItem("app-settings",JSON.stringify(u)),!0}catch{return!1}},[r]),d=c.useMemo(()=>({settings:o,updateSetting:s,resetSettings:t,exportSettings:i,importSettings:n}),[o,s,t,i,n]);return e.jsx(f.Provider,{value:d,children:m})},z=()=>{console.log("SettingsConsumerExample 渲染");const m=c.useRef(null),r=()=>e.jsx(f.Consumer,{children:s=>{if(console.log("SettingsPanel Consumer 渲染",s),!s)return e.jsx("div",{className:"text-red-500",children:"SettingsContext not found"});const{settings:t,updateSetting:i}=s;return e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800",children:"应用设置"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"主题模式"}),e.jsx("div",{className:"grid grid-cols-3 gap-2",children:["light","dark","auto"].map(n=>e.jsxs("button",{onClick:()=>{console.log(`切换主题到: ${n}`),i("theme",n)},className:`p-2 border rounded text-sm ${t.theme===n?"bg-blue-50 border-blue-300 text-blue-800":"bg-white border-gray-300 text-gray-700 hover:bg-gray-50"}`,children:[n==="light"&&"🌞 浅色",n==="dark"&&"🌙 深色",n==="auto"&&"🔄 自动"]},n))})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"字体大小"}),e.jsx("div",{className:"grid grid-cols-3 gap-2",children:["small","medium","large"].map(n=>e.jsxs("button",{onClick:()=>{console.log(`切换字体大小到: ${n}`),i("fontSize",n)},className:`p-2 border rounded text-sm ${t.fontSize===n?"bg-green-50 border-green-300 text-green-800":"bg-white border-gray-300 text-gray-700 hover:bg-gray-50"}`,children:[n==="small"&&"📝 小",n==="medium"&&"📄 中",n==="large"&&"📋 大"]},n))})]}),e.jsx("div",{className:"space-y-3",children:[{key:"notifications",label:"通知提醒",icon:"🔔"},{key:"autoSave",label:"自动保存",icon:"💾"},{key:"compactMode",label:"紧凑模式",icon:"📱"}].map(({key:n,label:d,icon:l})=>e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("span",{children:l}),e.jsx("span",{className:"text-sm font-medium text-gray-700",children:d})]}),e.jsx("button",{onClick:()=>{console.log(`切换${d}: ${!t[n]}`),i(n,!t[n])},className:`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${t[n]?"bg-blue-600":"bg-gray-300"}`,children:e.jsx("span",{className:`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${t[n]?"translate-x-6":"translate-x-1"}`})})]},n))})]})}}),o=()=>e.jsx(f.Consumer,{children:s=>{if(console.log("SettingsPreview Consumer 渲染",s),!s)return e.jsx("div",{className:"text-red-500",children:"SettingsContext not found"});const{settings:t}=s;return e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800",children:"设置预览"}),e.jsxs("div",{className:"p-4 bg-white border border-gray-200 rounded-lg",children:[e.jsx("h4",{className:"font-medium text-gray-800 mb-3",children:"当前设置"}),e.jsxs("div",{className:"space-y-2 text-sm",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-gray-600",children:"主题:"}),e.jsxs("span",{className:"font-medium",children:[t.theme==="light"&&"🌞 浅色",t.theme==="dark"&&"🌙 深色",t.theme==="auto"&&"🔄 自动"]})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-gray-600",children:"语言:"}),e.jsx("span",{className:"font-medium",children:t.language})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-gray-600",children:"字体大小:"}),e.jsxs("span",{className:"font-medium",children:[t.fontSize==="small"&&"📝 小",t.fontSize==="medium"&&"📄 中",t.fontSize==="large"&&"📋 大"]})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-gray-600",children:"通知:"}),e.jsx("span",{className:"font-medium",children:t.notifications?"✅ 开启":"❌ 关闭"})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-gray-600",children:"自动保存:"}),e.jsx("span",{className:"font-medium",children:t.autoSave?"✅ 开启":"❌ 关闭"})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-gray-600",children:"紧凑模式:"}),e.jsx("span",{className:"font-medium",children:t.compactMode?"✅ 开启":"❌ 关闭"})]})]})]})]})}}),a=()=>e.jsx(f.Consumer,{children:s=>{if(!s)return e.jsx("div",{className:"text-red-500",children:"SettingsContext not found"});const{resetSettings:t,exportSettings:i,importSettings:n}=s,d=()=>{console.log("导出设置");const u=i(),x=new Blob([u],{type:"application/json"}),C=URL.createObjectURL(x),p=document.createElement("a");p.href=C,p.download="app-settings.json",p.click(),URL.revokeObjectURL(C)},l=()=>{var u;console.log("导入设置"),(u=m.current)==null||u.click()},g=u=>{var C;const x=(C=u.target.files)==null?void 0:C[0];if(x){const p=new FileReader;p.onload=w=>{var N;try{const h=(N=w.target)==null?void 0:N.result,y=n(h);console.log("导入结果:",y?"成功":"失败"),alert(y?"设置导入成功！":"设置导入失败，请检查文件格式。")}catch(h){console.error("导入错误:",h),alert("设置导入失败，请检查文件格式。")}},p.readAsText(x)}};return e.jsxs("div",{className:"mt-6 space-y-3",children:[e.jsx("h4",{className:"font-semibold text-gray-800",children:"设置管理"}),e.jsxs("div",{className:"flex space-x-2",children:[e.jsx("button",{onClick:()=>{console.log("重置设置"),confirm("确定要重置所有设置吗？")&&t()},className:"px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 text-sm",children:"🔄 重置设置"}),e.jsx("button",{onClick:d,className:"px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 text-sm",children:"📤 导出设置"}),e.jsx("button",{onClick:l,className:"px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm",children:"📥 导入设置"})]}),e.jsx("input",{ref:m,type:"file",accept:".json",onChange:g,className:"hidden"})]})}});return e.jsxs(M,{children:[e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsx(r,{}),e.jsx(o,{})]}),e.jsx(a,{}),e.jsxs("div",{className:"mt-6 p-4 bg-gray-50 border border-gray-200 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-gray-800 mb-2",children:"设置管理 Consumer 特点"}),e.jsxs("ul",{className:"text-sm text-gray-600 space-y-1",children:[e.jsx("li",{children:"• Consumer可以处理复杂的业务逻辑"}),e.jsx("li",{children:"• 在Consumer中可以调用多个Context方法"}),e.jsx("li",{children:"• Consumer支持异步操作和文件处理"}),e.jsx("li",{children:"• 可以在Consumer中进行数据验证和错误处理"})]})]})]})},O=`import React, { useRef } from 'react';
import { SettingsContext, SettingsProvider } from './SettingsContext';

const SettingsConsumerExample: React.FC = () => {
  console.log("SettingsConsumerExample 渲染"); // ← 重点：控制台日志

  const fileInputRef = useRef<HTMLInputElement>(null);

  const SettingsPanel: React.FC = () => {
    return (
      <SettingsContext.Consumer>
        {(context) => {
          console.log("SettingsPanel Consumer 渲染", context); // ← 重点：Consumer渲染日志

          if (!context) {
            return <div className="text-red-500">SettingsContext not found</div>;
          }

          const { settings, updateSetting } = context;

          return (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">应用设置</h3>

              {/* 主题设置 */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  主题模式
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(["light", "dark", "auto"] as const).map((theme) => (
                    <button
                      key={theme}
                      onClick={() => {
                        console.log(\`切换主题到: \${theme}\`); // ← 重点：操作日志
                        updateSetting("theme", theme); // ← 重点：Consumer中调用Context方法
                      }}
                      className={\`p-2 border rounded text-sm \${
                        settings.theme === theme
                          ? "bg-blue-50 border-blue-300 text-blue-800"
                          : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
                      }\`}
                    >
                      {theme === "light" && "🌞 浅色"}
                      {theme === "dark" && "🌙 深色"}
                      {theme === "auto" && "🔄 自动"}
                    </button>
                  ))}
                </div>
              </div>

              {/* 字体大小 */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  字体大小
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(["small", "medium", "large"] as const).map((size) => (
                    <button
                      key={size}
                      onClick={() => {
                        console.log(\`切换字体大小到: \${size}\`); // ← 重点：操作日志
                        updateSetting("fontSize", size); // ← 重点：Consumer中调用Context方法
                      }}
                      className={\`p-2 border rounded text-sm \${
                        settings.fontSize === size
                          ? "bg-green-50 border-green-300 text-green-800"
                          : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
                      }\`}
                    >
                      {size === "small" && "📝 小"}
                      {size === "medium" && "📄 中"}
                      {size === "large" && "📋 大"}
                    </button>
                  ))}
                </div>
              </div>

              {/* 开关设置 */}
              <div className="space-y-3">
                {[
                  { key: "notifications" as const, label: "通知提醒", icon: "🔔" },
                  { key: "autoSave" as const, label: "自动保存", icon: "💾" },
                  { key: "compactMode" as const, label: "紧凑模式", icon: "📱" },
                ].map(({ key, label, icon }) => (
                  <div key={key} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span>{icon}</span>
                      <span className="text-sm font-medium text-gray-700">
                        {label}
                      </span>
                    </div>
                    <button
                      onClick={() => {
                        console.log(\`切换\${label}: \${!settings[key]}\`); // ← 重点：操作日志
                        updateSetting(key, !settings[key]); // ← 重点：Consumer中调用Context方法
                      }}
                      className={\`relative inline-flex h-6 w-11 items-center rounded-full transition-colors \${
                        settings[key] ? "bg-blue-600" : "bg-gray-300"
                      }\`}
                    >
                      <span
                        className={\`inline-block h-4 w-4 transform rounded-full bg-white transition-transform \${
                          settings[key] ? "translate-x-6" : "translate-x-1"
                        }\`}
                      />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          );
        }}
      </SettingsContext.Consumer>
    );
  };

  const SettingsPreview: React.FC = () => {
    return (
      <SettingsContext.Consumer>
        {(context) => {
          console.log("SettingsPreview Consumer 渲染", context); // ← 重点：Consumer渲染日志

          if (!context) {
            return <div className="text-red-500">SettingsContext not found</div>;
          }

          const { settings } = context;

          return (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">设置预览</h3>

              <div className="p-4 bg-white border border-gray-200 rounded-lg">
                <h4 className="font-medium text-gray-800 mb-3">当前设置</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">主题:</span>
                    <span className="font-medium">
                      {settings.theme === "light" && "🌞 浅色"}
                      {settings.theme === "dark" && "🌙 深色"}
                      {settings.theme === "auto" && "🔄 自动"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">语言:</span>
                    <span className="font-medium">{settings.language}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">字体大小:</span>
                    <span className="font-medium">
                      {settings.fontSize === "small" && "📝 小"}
                      {settings.fontSize === "medium" && "📄 中"}
                      {settings.fontSize === "large" && "📋 大"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">通知:</span>
                    <span className="font-medium">
                      {settings.notifications ? "✅ 开启" : "❌ 关闭"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">自动保存:</span>
                    <span className="font-medium">
                      {settings.autoSave ? "✅ 开启" : "❌ 关闭"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">紧凑模式:</span>
                    <span className="font-medium">
                      {settings.compactMode ? "✅ 开启" : "❌ 关闭"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </SettingsContext.Consumer>
    );
  };

  const SettingsActions: React.FC = () => {
    return (
      <SettingsContext.Consumer>
        {(context) => {
          if (!context) {
            return <div className="text-red-500">SettingsContext not found</div>;
          }

          const { resetSettings, exportSettings, importSettings } = context;

          const handleExport = () => {
            console.log("导出设置"); // ← 重点：操作日志
            const settingsJson = exportSettings(); // ← 重点：Consumer中调用Context方法
            const blob = new Blob([settingsJson], { type: "application/json" });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "app-settings.json";
            a.click();
            URL.revokeObjectURL(url);
          };

          const handleImport = () => {
            console.log("导入设置"); // ← 重点：操作日志
            fileInputRef.current?.click();
          };

          const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            const file = event.target.files?.[0];
            if (file) {
              const reader = new FileReader();
              reader.onload = (e) => {
                try {
                  const content = e.target?.result as string;
                  const success = importSettings(content); // ← 重点：Consumer中调用Context方法
                  console.log("导入结果:", success ? "成功" : "失败"); // ← 重点：操作结果日志
                  alert(success ? "设置导入成功！" : "设置导入失败，请检查文件格式。");
                } catch (error) {
                  console.error("导入错误:", error); // ← 重点：错误日志
                  alert("设置导入失败，请检查文件格式。");
                }
              };
              reader.readAsText(file);
            }
          };

          return (
            <div className="mt-6 space-y-3">
              <h4 className="font-semibold text-gray-800">设置管理</h4>
              <div className="flex space-x-2">
                <button
                  onClick={() => {
                    console.log("重置设置"); // ← 重点：操作日志
                    if (confirm("确定要重置所有设置吗？")) {
                      resetSettings(); // ← 重点：Consumer中调用Context方法
                    }
                  }}
                  className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 text-sm"
                >
                  🔄 重置设置
                </button>
                <button
                  onClick={handleExport}
                  className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 text-sm"
                >
                  📤 导出设置
                </button>
                <button
                  onClick={handleImport}
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
                >
                  📥 导入设置
                </button>
              </div>
              <input
                ref={fileInputRef}
                type="file"
                accept=".json"
                onChange={handleFileChange}
                className="hidden"
              />
            </div>
          );
        }}
      </SettingsContext.Consumer>
    );
  };

  return (
    <SettingsProvider>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SettingsPanel />
        <SettingsPreview />
      </div>
      <SettingsActions />

      <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-lg">
        <h4 className="font-semibold text-gray-800 mb-2">
          设置管理 Consumer 特点
        </h4>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• Consumer可以处理复杂的业务逻辑</li>
          <li>• 在Consumer中可以调用多个Context方法</li>
          <li>• Consumer支持异步操作和文件处理</li>
          <li>• 可以在Consumer中进行数据验证和错误处理</li>
        </ul>
      </div>
    </SettingsProvider>
  );
};

export default SettingsConsumerExample;`,D=`import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';

// 应用设置Context
interface AppSettings {
  theme: "light" | "dark" | "auto";
  language: string;
  fontSize: "small" | "medium" | "large";
  notifications: boolean;
  autoSave: boolean;
  compactMode: boolean;
}

interface SettingsContextType {
  settings: AppSettings;
  updateSetting: <K extends keyof AppSettings>(
    key: K,
    value: AppSettings[K]
  ) => void;
  resetSettings: () => void;
  exportSettings: () => string;
  importSettings: (settingsJson: string) => boolean;
}

const SettingsContext = createContext<SettingsContextType | undefined>(
  undefined
);

const SettingsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const defaultSettings: AppSettings = {
    theme: "light",
    language: "zh",
    fontSize: "medium",
    notifications: true,
    autoSave: true,
    compactMode: false,
  };

  const [settings, setSettings] = useState<AppSettings>(() => {
    try {
      const saved = localStorage.getItem("app-settings");
      return saved
        ? { ...defaultSettings, ...JSON.parse(saved) }
        : defaultSettings;
    } catch {
      return defaultSettings;
    }
  });

  const updateSetting = useCallback(
    <K extends keyof AppSettings>(key: K, value: AppSettings[K]) => {
      setSettings((prev) => {
        const newSettings = { ...prev, [key]: value };
        localStorage.setItem("app-settings", JSON.stringify(newSettings));
        return newSettings;
      });
    },
    []
  );

  const resetSettings = useCallback(() => {
    setSettings(defaultSettings);
    localStorage.setItem("app-settings", JSON.stringify(defaultSettings));
  }, [defaultSettings]);

  const exportSettings = useCallback(() => {
    return JSON.stringify(settings, null, 2);
  }, [settings]);

  const importSettings = useCallback(
    (settingsJson: string) => {
      try {
        const importedSettings = JSON.parse(settingsJson);
        const validatedSettings = { ...defaultSettings, ...importedSettings };
        setSettings(validatedSettings);
        localStorage.setItem("app-settings", JSON.stringify(validatedSettings));
        return true;
      } catch {
        return false;
      }
    },
    [defaultSettings]
  );

  const value = useMemo(
    () => ({
      settings,
      updateSetting,
      resetSettings,
      exportSettings,
      importSettings,
    }),
    [settings, updateSetting, resetSettings, exportSettings, importSettings]
  );

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
};

const useSettings = () => {
  const context = useContext(SettingsContext);
  if (context === undefined) {
    throw new Error("useSettings must be used within a SettingsProvider");
  }
  return context;
};

export { SettingsContext, SettingsProvider, useSettings };
export type { AppSettings, SettingsContextType };`,H=()=>{const m=[{title:"核心概念",items:["Context Consumer是React Context API的消费者组件，使用render props模式来访问Context数据","相比于useContext Hook，Consumer组件提供了更灵活的数据处理方式","特别适用于类组件或需要条件渲染的场景","通过函数作为子组件的方式，Consumer接收Context值并返回JSX元素"]},{title:"主要优势",items:["render props模式 - 使用函数作为子组件，提供灵活的数据处理","类组件支持 - 可以在类组件中使用，不受Hook限制","条件渲染 - 可以在JSX中直接处理Context不存在的情况","多Context支持 - 可以嵌套使用消费多个Context","错误处理 - 便于处理Context未提供的错误情况"]},{title:"适用场景",items:["类组件中消费Context数据","需要条件渲染Context数据的场景","需要在JSX中直接处理Context错误的情况","多个Context的复杂组合使用","需要更灵活的Context数据处理逻辑"]},{title:"与useContext的对比",items:["Consumer使用render props，useContext使用Hook","Consumer可以在JSX中处理错误，useContext需要额外的错误处理","Consumer适用于类组件，useContext只能在函数组件中使用","Consumer提供更灵活的数据处理，useContext更简洁"]}],r=[{title:"基础Consumer使用",description:"展示如何使用Context.Consumer消费通知系统的Context数据，演示render props模式的基本用法",component:e.jsx(L,{}),observationPoints:["Consumer使用render props模式，函数接收Context值作为参数","可以在Consumer内部直接处理Context不存在的情况","Consumer可以与useContext Hook混合使用","render props提供了灵活的条件渲染能力"],keyPoints:["Context.Consumer使用render props模式访问Context数据","Consumer函数参数是Context的当前值","需要检查Context是否存在，提供错误处理","可以在JSX中直接使用Context数据进行条件渲染"],preCode:[{title:"NotificationContext",code:j}],codeExample:{title:"基础Consumer使用",code:P}},{title:"国际化Consumer",description:"使用Consumer实现多语言国际化功能，展示如何在Consumer中处理复杂的Context数据",component:e.jsx(J,{}),observationPoints:["Consumer可以访问Context中的所有方法和数据","在Consumer中可以直接调用Context的方法","Consumer支持复杂的数据处理和转换","可以在Consumer中使用Context的计算属性"],keyPoints:["Consumer可以访问Context中的函数和计算属性","在Consumer中可以进行复杂的数据处理","Consumer支持动态的UI渲染","可以在Consumer中处理Context数据的副作用"],preCode:[{title:"I18nContext",code:$}],codeExample:{title:"国际化Consumer",code:T}},{title:"设置管理Consumer",description:"使用Consumer管理应用设置，支持导入导出功能，展示Consumer在复杂业务场景中的应用",component:e.jsx(z,{}),observationPoints:["Consumer可以处理复杂的业务逻辑","在Consumer中可以调用多个Context方法","Consumer支持异步操作和文件处理","可以在Consumer中进行数据验证和错误处理"],keyPoints:["Consumer适合处理复杂的业务逻辑","可以在Consumer中组合多个Context操作","Consumer支持异步操作和副作用处理","在Consumer中可以进行数据的导入导出"],preCode:[{title:"SettingsContext",code:D}],codeExample:{title:"设置管理Consumer",code:O}},{title:"类组件Consumer",description:"展示如何在类组件中使用Context.Consumer，演示Consumer在类组件中的优势",component:e.jsx(R,{}),observationPoints:["类组件可以通过Consumer访问Context数据","Consumer在类组件中提供了灵活的Context消费方式","类组件中的Consumer可以访问生命周期方法","Consumer比contextType更灵活，可以消费多个Context"],keyPoints:["类组件中使用Consumer比contextType更灵活","Consumer可以在类组件的render方法中使用","类组件Consumer可以结合生命周期方法使用","Consumer支持在类组件中消费多个Context"],preCode:[{title:"NotificationContext",code:j}],codeExample:{title:"类组件Consumer",code:E}}];return e.jsx(k,{title:"Context Consumer",description:"Context Consumer是React Context API的消费者组件，使用render props模式来访问Context数据，提供了更灵活的Context数据处理方式，特别适用于类组件或需要条件渲染的场景。",overview:m,examples:r,tutorial:{concepts:["Context Consumer的基本概念：使用render props模式消费Context数据","Consumer与useContext的区别：Consumer更灵活，useContext更简洁","render props模式：函数作为子组件，接收Context值作为参数","错误处理：Consumer可以在JSX中直接处理Context不存在的情况"],steps:["创建Context并提供Provider组件","使用Context.Consumer包装需要消费数据的组件","在Consumer中使用render props函数接收Context值","在函数中处理Context数据并返回JSX元素","添加错误处理，检查Context是否存在"],tips:["Consumer适用于类组件或需要条件渲染的场景","可以嵌套使用Consumer消费多个Context","在Consumer中可以直接处理Context错误情况","Consumer提供了比useContext更灵活的数据处理方式","结合类组件的生命周期方法使用Consumer"]},interview:{questions:[{question:"Context Consumer和useContext Hook有什么区别？",answer:"主要区别包括：1) 使用方式：Consumer使用render props模式，useContext使用Hook；2) 适用场景：Consumer可以在类组件中使用，useContext只能在函数组件中使用；3) 灵活性：Consumer提供更灵活的数据处理，可以在JSX中直接处理错误，useContext更简洁；4) 多Context：Consumer可以嵌套使用消费多个Context。"},{question:"什么是render props模式？Consumer如何使用这种模式？",answer:"render props是一种在React组件间共享代码的技术，通过一个值为函数的prop来告诉组件要渲染什么。Consumer使用render props模式：<Context.Consumer>{value => <div>{value}</div>}</Context.Consumer>，函数接收Context的当前值作为参数，返回要渲染的JSX元素。"},{question:"在什么情况下应该选择Consumer而不是useContext？",answer:"选择Consumer的情况：1) 在类组件中使用Context；2) 需要在JSX中直接处理Context错误或条件渲染；3) 需要消费多个Context并进行复杂的数据处理；4) 需要更灵活的Context数据处理逻辑；5) 与类组件的生命周期方法结合使用。"},{question:"如何在Consumer中处理Context不存在的情况？",answer:"在Consumer的render props函数中检查Context值：&lt;Context.Consumer&gt;{value =&gt; value ? &lt;div&gt;{value.data}&lt;/div&gt; : &lt;div&gt;Context未提供&lt;/div&gt;}&lt;/Context.Consumer&gt;。也可以提供默认值或抛出错误，确保应用的健壮性。"}],keyPoints:["Consumer使用render props模式访问Context数据","适用于类组件或需要条件渲染的场景","可以在JSX中直接处理Context错误情况","支持嵌套使用消费多个Context","提供比useContext更灵活的数据处理方式"]},bestPractices:{dos:["在类组件中使用Consumer访问Context数据","在Consumer中添加错误处理和默认值","使用Consumer进行条件渲染和复杂数据处理","合理嵌套Consumer消费多个Context","结合类组件生命周期方法使用Consumer","在render props函数中进行数据验证"],donts:["不要在简单场景下过度使用Consumer","不要忘记处理Context不存在的情况","不要在Consumer中进行复杂的副作用操作","不要过度嵌套Consumer导致代码难以维护","不要在函数组件中优先选择Consumer而不是useContext","不要忽略Consumer的性能影响"],patterns:["结合高阶组件(HOC)封装Consumer逻辑","使用Consumer实现条件渲染和错误边界","在类组件中使用Consumer替代contextType","组合多个Consumer实现复杂的Context消费","使用Consumer实现Context数据的转换和处理"]}})};export{H as default};
