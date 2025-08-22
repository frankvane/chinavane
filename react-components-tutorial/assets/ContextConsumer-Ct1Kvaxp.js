import{j as e,r as c}from"./index-B_BA6J2H.js";import{C as k}from"./ComponentTemplate-CRmS-rAK.js";const h=c.createContext(void 0),v=({children:a})=>{const[s,t]=c.useState([]),o=c.useCallback((m,x,i=5e3)=>{const n=Date.now().toString(),u={id:n,message:m,type:x,duration:i};t(C=>[...C,u]),i>0&&setTimeout(()=>{r(n)},i)},[]),r=c.useCallback(m=>{t(x=>x.filter(i=>i.id!==m))},[]),d=c.useCallback(()=>{t([])},[]),l=c.useMemo(()=>({notifications:s,addNotification:o,removeNotification:r,clearAll:d}),[s,o,r,d]);return e.jsx(h.Provider,{value:l,children:a})},S=()=>{const a=c.useContext(h);if(a===void 0)throw new Error("useNotification must be used within a NotificationProvider");return a},b=c.createContext(void 0),w=({children:a})=>{const s=[{code:"zh",name:"中文",flag:"🇨🇳"},{code:"en",name:"English",flag:"🇺🇸"},{code:"ja",name:"日本語",flag:"🇯🇵"},{code:"ko",name:"한국어",flag:"🇰🇷"}],[t,o]=c.useState(s[0]),r={zh:{welcome:"欢迎",hello:"你好，{name}！",goodbye:"再见",settings:"设置",language:"语言",theme:"主题",profile:"个人资料",logout:"退出登录",save:"保存",cancel:"取消",confirm:"确认",loading:"加载中...",error:"发生错误",success:"操作成功"},en:{welcome:"Welcome",hello:"Hello, {name}!",goodbye:"Goodbye",settings:"Settings",language:"Language",theme:"Theme",profile:"Profile",logout:"Logout",save:"Save",cancel:"Cancel",confirm:"Confirm",loading:"Loading...",error:"An error occurred",success:"Operation successful"},ja:{welcome:"ようこそ",hello:"こんにちは、{name}さん！",goodbye:"さようなら",settings:"設定",language:"言語",theme:"テーマ",profile:"プロフィール",logout:"ログアウト",save:"保存",cancel:"キャンセル",confirm:"確認",loading:"読み込み中...",error:"エラーが発生しました",success:"操作が成功しました"},ko:{welcome:"환영합니다",hello:"안녕하세요, {name}님!",goodbye:"안녕히 가세요",settings:"설정",language:"언어",theme:"테마",profile:"프로필",logout:"로그아웃",save:"저장",cancel:"취소",confirm:"확인",loading:"로딩 중...",error:"오류가 발생했습니다",success:"작업이 성공했습니다"}},d=c.useCallback(x=>{const i=s.find(n=>n.code===x);i&&o(i)},[s]),l=c.useCallback((x,i)=>{var u;const n=((u=r[t.code])==null?void 0:u[x])||x;return i?Object.entries(i).reduce((C,[g,p])=>C.replace(`{${g}}`,p),n):n},[t.code,r]),m=c.useMemo(()=>({currentLanguage:t,availableLanguages:s,translations:r,changeLanguage:d,t:l}),[t,s,r,d,l]);return e.jsx(b.Provider,{value:m,children:a})},y=c.createContext(void 0),P=({children:a})=>{const s={theme:"light",language:"zh",fontSize:"medium",notifications:!0,autoSave:!0,compactMode:!1},[t,o]=c.useState(()=>{try{const i=localStorage.getItem("app-settings");return i?{...s,...JSON.parse(i)}:s}catch{return s}}),r=c.useCallback((i,n)=>{o(u=>{const C={...u,[i]:n};return localStorage.setItem("app-settings",JSON.stringify(C)),C})},[]),d=c.useCallback(()=>{o(s),localStorage.setItem("app-settings",JSON.stringify(s))},[s]),l=c.useCallback(()=>JSON.stringify(t,null,2),[t]),m=c.useCallback(i=>{try{const n=JSON.parse(i),u={...s,...n};return o(u),localStorage.setItem("app-settings",JSON.stringify(u)),!0}catch{return!1}},[s]),x=c.useMemo(()=>({settings:t,updateSetting:r,resetSettings:d,exportSettings:l,importSettings:m}),[t,r,d,l,m]);return e.jsx(y.Provider,{value:x,children:a})},E=()=>{console.log("BasicConsumerExample 渲染");const a=()=>e.jsx(h.Consumer,{children:t=>{if(console.log("NotificationDisplay Consumer 渲染",t),!t)return e.jsx("div",{className:"text-red-500",children:"NotificationContext not found"});const{notifications:o,removeNotification:r,clearAll:d}=t;return o.length===0?e.jsxs("div",{className:"p-4 text-center text-gray-500 border-2 border-dashed border-gray-300 rounded-lg",children:[e.jsx("div",{className:"text-2xl mb-2",children:"🔔"}),e.jsx("p",{children:"暂无通知"})]}):e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800",children:"通知列表"}),e.jsx("button",{onClick:d,className:"px-3 py-1 bg-gray-600 text-white rounded text-sm hover:bg-gray-700",children:"清空所有"})]}),e.jsx("div",{className:"space-y-2",children:o.map(l=>{const m={success:"bg-green-50 border-green-200 text-green-800",error:"bg-red-50 border-red-200 text-red-800",warning:"bg-yellow-50 border-yellow-200 text-yellow-800",info:"bg-blue-50 border-blue-200 text-blue-800"}[l.type],x={success:"✅",error:"❌",warning:"⚠️",info:"ℹ️"}[l.type];return e.jsx("div",{className:`p-3 border rounded-lg ${m}`,children:e.jsxs("div",{className:"flex items-start justify-between",children:[e.jsxs("div",{className:"flex items-start space-x-2",children:[e.jsx("span",{className:"text-lg",children:x}),e.jsx("p",{className:"flex-1",children:l.message})]}),e.jsx("button",{onClick:()=>r(l.id),className:"ml-2 text-gray-400 hover:text-gray-600",children:"×"})]})},l.id)})})]})}}),s=()=>{const{addNotification:t}=S();return e.jsxs("div",{className:"space-y-3",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800",children:"添加通知"}),e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx("button",{onClick:()=>{console.log("添加成功通知"),t("操作成功完成！","success")},className:"px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700",children:"成功通知"}),e.jsx("button",{onClick:()=>{console.log("添加错误通知"),t("发生了一个错误","error")},className:"px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700",children:"错误通知"}),e.jsx("button",{onClick:()=>{console.log("添加警告通知"),t("请注意这个警告","warning")},className:"px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700",children:"警告通知"}),e.jsx("button",{onClick:()=>{console.log("添加信息通知"),t("这是一条信息","info")},className:"px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700",children:"信息通知"})]})]})};return e.jsxs(v,{children:[e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsx(s,{}),e.jsx(a,{})]}),e.jsxs("div",{className:"mt-6 p-4 bg-gray-50 border border-gray-200 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-gray-800 mb-2",children:"Context.Consumer 特点"}),e.jsxs("ul",{className:"text-sm text-gray-600 space-y-1",children:[e.jsx("li",{children:"• 使用render props模式消费Context"}),e.jsx("li",{children:"• 适用于类组件或需要条件渲染的场景"}),e.jsx("li",{children:"• 提供更灵活的Context数据处理方式"}),e.jsx("li",{children:"• 可以在JSX中直接处理Context不存在的情况"})]})]})]})},T=()=>{console.log("I18nConsumerExample 渲染");const a=()=>e.jsx(b.Consumer,{children:t=>{if(console.log("LanguageSelector Consumer 渲染",t),!t)return e.jsx("div",{className:"text-red-500",children:"I18nContext not found"});const{currentLanguage:o,availableLanguages:r,changeLanguage:d}=t;return e.jsxs("div",{className:"space-y-3",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800",children:"语言选择"}),e.jsx("div",{className:"grid grid-cols-2 gap-2",children:r.map(l=>e.jsx("button",{onClick:()=>{console.log("切换语言到:",l.code),d(l.code)},className:`p-3 border rounded-lg text-left transition-colors ${o.code===l.code?"bg-blue-50 border-blue-300 text-blue-800":"bg-white border-gray-300 text-gray-700 hover:bg-gray-50"}`,children:e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("span",{className:"text-xl",children:l.flag}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium",children:l.name}),e.jsx("div",{className:"text-xs text-gray-500",children:l.code})]})]})},l.code))})]})}}),s=()=>e.jsx(b.Consumer,{children:t=>{if(console.log("TranslatedContent Consumer 渲染",t),!t)return e.jsx("div",{className:"text-red-500",children:"I18nContext not found"});const{t:o,currentLanguage:r}=t;return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-4 bg-white border border-gray-200 rounded-lg",children:[e.jsxs("h3",{className:"text-lg font-semibold mb-3",children:[r.flag," ",o("welcome")," "]}),e.jsxs("div",{className:"space-y-2 text-gray-700",children:[e.jsx("p",{children:o("hello",{name:"用户"})})," ",e.jsxs("p",{children:[o("settings"),": ",o("language")," / ",o("theme")]}),e.jsxs("div",{className:"flex space-x-2 mt-4",children:[e.jsx("button",{onClick:()=>console.log("保存按钮点击"),className:"px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700",children:o("save")}),e.jsx("button",{onClick:()=>console.log("取消按钮点击"),className:"px-3 py-1 bg-gray-600 text-white rounded text-sm hover:bg-gray-700",children:o("cancel")}),e.jsx("button",{onClick:()=>console.log("确认按钮点击"),className:"px-3 py-1 bg-green-600 text-white rounded text-sm hover:bg-green-700",children:o("confirm")})]})]})]}),e.jsxs("div",{className:"p-3 bg-gray-50 border border-gray-200 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-gray-800 mb-2",children:"状态信息"}),e.jsxs("div",{className:"text-sm text-gray-600 space-y-1",children:[e.jsxs("p",{children:["当前语言: ",r.name," (",r.code,")"]}),e.jsxs("p",{children:["加载状态: ",o("loading")]}),e.jsxs("p",{children:["成功消息: ",o("success")]}),e.jsxs("p",{children:["错误消息: ",o("error")]})]})]})]})}});return e.jsx(w,{children:e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsx(a,{}),e.jsx(s,{})]})})},L=()=>{console.log("SettingsConsumerExample 渲染");const a=()=>e.jsx(y.Consumer,{children:s=>{if(console.log("SettingsPanel Consumer 渲染",s),!s)return e.jsx("div",{className:"text-red-500",children:"SettingsContext not found"});const{settings:t,updateSetting:o,resetSettings:r,exportSettings:d,importSettings:l}=s,m=()=>{const n=document.createElement("input");n.type="file",n.accept=".json",n.onchange=u=>{var g;const C=(g=u.target.files)==null?void 0:g[0];if(C){const p=new FileReader;p.onload=N=>{var f;const j=(f=N.target)==null?void 0:f.result;console.log("导入设置:",j),l(j)?(console.log("设置导入成功"),alert("设置导入成功！")):(console.error("设置导入失败"),alert("设置导入失败，请检查文件格式。"))},p.readAsText(C)}},n.click()},x=()=>{const n=d();console.log("导出设置:",n);const u=new Blob([n],{type:"application/json"}),C=URL.createObjectURL(u),g=document.createElement("a");g.href=C,g.download="app-settings.json",g.click(),URL.revokeObjectURL(C)},i=()=>{console.log("重置设置"),r()};return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800",children:"应用设置"}),e.jsxs("div",{className:"flex space-x-2",children:[e.jsx("button",{onClick:x,className:"px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700",children:"导出设置"}),e.jsx("button",{onClick:m,className:"px-3 py-1 bg-green-600 text-white rounded text-sm hover:bg-green-700",children:"导入设置"}),e.jsx("button",{onClick:i,className:"px-3 py-1 bg-red-600 text-white rounded text-sm hover:bg-red-700",children:"重置设置"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"p-4 bg-white border border-gray-200 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-gray-800 mb-3",children:"外观"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"主题"}),e.jsxs("select",{value:t.theme,onChange:n=>{console.log("主题切换到:",n.target.value),o("theme",n.target.value)},className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",children:[e.jsx("option",{value:"light",children:"浅色"}),e.jsx("option",{value:"dark",children:"深色"}),e.jsx("option",{value:"auto",children:"自动"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"字体大小"}),e.jsxs("select",{value:t.fontSize,onChange:n=>{console.log("字体大小切换到:",n.target.value),o("fontSize",n.target.value)},className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",children:[e.jsx("option",{value:"small",children:"小"}),e.jsx("option",{value:"medium",children:"中"}),e.jsx("option",{value:"large",children:"大"})]})]})]})]}),e.jsxs("div",{className:"p-4 bg-white border border-gray-200 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-gray-800 mb-3",children:"功能"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("input",{type:"checkbox",id:"notifications",checked:t.notifications,onChange:n=>{console.log("通知设置切换到:",n.target.checked),o("notifications",n.target.checked)},className:"rounded border-gray-300 text-blue-600 focus:ring-blue-500"}),e.jsx("label",{htmlFor:"notifications",className:"text-sm text-gray-700",children:"启用通知"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("input",{type:"checkbox",id:"autoSave",checked:t.autoSave,onChange:n=>{console.log("自动保存设置切换到:",n.target.checked),o("autoSave",n.target.checked)},className:"rounded border-gray-300 text-blue-600 focus:ring-blue-500"}),e.jsx("label",{htmlFor:"autoSave",className:"text-sm text-gray-700",children:"自动保存"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("input",{type:"checkbox",id:"compactMode",checked:t.compactMode,onChange:n=>{console.log("紧凑模式设置切换到:",n.target.checked),o("compactMode",n.target.checked)},className:"rounded border-gray-300 text-blue-600 focus:ring-blue-500"}),e.jsx("label",{htmlFor:"compactMode",className:"text-sm text-gray-700",children:"紧凑模式"})]})]})]})]}),e.jsxs("div",{className:"p-4 bg-gray-50 border border-gray-200 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-gray-800 mb-2",children:"当前设置"}),e.jsxs("pre",{className:"text-xs text-gray-600 bg-white p-3 rounded border overflow-x-auto",children:[JSON.stringify(t,null,2)," "]})]})]})}});return e.jsx(P,{children:e.jsx(a,{})})};class I extends c.Component{componentDidMount(){console.log("ClassConsumerExample 组件挂载")}componentDidUpdate(){console.log("ClassConsumerExample 组件更新")}render(){return console.log("ClassConsumerExample 渲染"),e.jsx(v,{children:e.jsxs("div",{className:"p-4 bg-white border border-gray-200 rounded-lg",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800 mb-4",children:"类组件中使用Consumer"}),e.jsx(h.Consumer,{children:s=>{if(console.log("类组件中的Consumer渲染",s),!s)return e.jsx("div",{className:"text-red-500",children:"NotificationContext not found"});const{notifications:t,addNotification:o,clearAll:r}=s;return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex space-x-2",children:[e.jsx("button",{onClick:()=>{console.log("类组件中添加通知"),o("来自类组件的通知","info")},className:"px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700",children:"添加通知"}),e.jsx("button",{onClick:()=>{console.log("类组件中清空通知"),r()},className:"px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700",children:"清空通知"})]}),e.jsxs("div",{className:"text-sm text-gray-600",children:[e.jsxs("p",{children:["当前通知数量: ",t.length]}),e.jsx("p",{children:"类组件可以通过Consumer访问Context数据"})]}),t.length>0&&e.jsx("div",{className:"space-y-2",children:t.slice(-3).map(d=>e.jsx("div",{className:"p-2 bg-blue-50 border border-blue-200 rounded text-sm",children:d.message},d.id))})]})}})]})})}}const M=()=>{const a={title:"Context Consumer",description:"Context Consumer是React Context API的消费者组件，使用render props模式来访问Context数据，提供了更灵活的Context数据处理方式，特别适用于类组件或需要条件渲染的场景。",overview:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"核心概念"}),e.jsx("p",{className:"text-gray-700",children:"Context Consumer是React Context API的消费者组件，它使用render props模式来访问Context中的数据。 相比于useContext Hook，Consumer组件提供了更灵活的数据处理方式， 特别适用于类组件或需要条件渲染的场景。"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"主要优势"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 text-gray-700",children:[e.jsx("li",{children:"render props模式 - 使用函数作为子组件，提供灵活的数据处理"}),e.jsx("li",{children:"类组件支持 - 可以在类组件中使用，不受Hook限制"}),e.jsx("li",{children:"条件渲染 - 可以在JSX中直接处理Context不存在的情况"}),e.jsx("li",{children:"多Context支持 - 可以嵌套使用消费多个Context"}),e.jsx("li",{children:"错误处理 - 便于处理Context未提供的错误情况"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"适用场景"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 text-gray-700",children:[e.jsx("li",{children:"类组件中消费Context数据"}),e.jsx("li",{children:"需要条件渲染Context数据的场景"}),e.jsx("li",{children:"需要在JSX中直接处理Context错误的情况"}),e.jsx("li",{children:"多个Context的复杂组合使用"}),e.jsx("li",{children:"需要更灵活的Context数据处理逻辑"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"与useContext的对比"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 text-gray-700",children:[e.jsx("li",{children:"Consumer使用render props，useContext使用Hook"}),e.jsx("li",{children:"Consumer可以在JSX中处理错误，useContext需要额外的错误处理"}),e.jsx("li",{children:"Consumer适用于类组件，useContext只能在函数组件中使用"}),e.jsx("li",{children:"Consumer提供更灵活的数据处理，useContext更简洁"})]})]})]}),examples:[{title:"示例1：基础Consumer使用",description:"展示如何使用Context.Consumer消费通知系统的Context数据，演示render props模式的基本用法",component:e.jsx(E,{}),observationPoints:["Consumer使用render props模式，函数接收Context值作为参数","可以在Consumer内部直接处理Context不存在的情况","Consumer可以与useContext Hook混合使用","render props提供了灵活的条件渲染能力"],keyPoints:["Context.Consumer使用render props模式访问Context数据","Consumer函数参数是Context的当前值","需要检查Context是否存在，提供错误处理","可以在JSX中直接使用Context数据进行条件渲染"],commonTraps:["忘记检查Context是否存在，导致运行时错误","在Consumer内部创建新对象或函数，影响性能","过度嵌套Consumer，影响代码可读性"],solutions:["始终检查Context是否存在，提供fallback UI","使用useMemo和useCallback优化Consumer内部的计算","创建自定义组件简化多Context的消费"],importantTips:["Consumer的render props函数会在Context值变化时重新执行","可以在Consumer中直接解构Context值","Consumer适合需要条件渲染Context数据的场景"],codeExample:{title:"基础Consumer使用",code:`// 使用Context.Consumer消费通知系统数据
const NotificationDisplay: React.FC = () => {
  return (
    <NotificationContext.Consumer>
      {(context) => {
        console.log("Consumer渲染", context); // ← 重点：Consumer渲染日志
        
        // ← 重点：检查Context是否存在
        if (!context) {
          return <div>NotificationContext not found</div>;
        }
        
        const { notifications, removeNotification, clearAll } = context;
        
        return (
          <div>
            <button onClick={clearAll}> // ← 重点：Consumer中直接使用Context方法
              清空所有
            </button>
            {notifications.map(notification => (
              <div key={notification.id}>
                {notification.message}
                <button 
                  onClick={() => removeNotification(notification.id)} // ← 重点：动态调用Context方法
                >
                  删除
                </button>
              </div>
            ))}
          </div>
        );
      }}
    </NotificationContext.Consumer>
  );
};`,language:"tsx",highlights:[4,7,8,9,15,20]}},{title:"示例2：国际化Consumer",description:"使用Consumer实现多语言国际化功能，展示如何在Consumer中处理复杂的Context数据",component:e.jsx(T,{}),observationPoints:["Consumer可以访问Context中的所有方法和数据","在Consumer中可以直接调用Context的方法","Consumer支持复杂的数据处理和转换","可以在Consumer中使用Context的计算属性"],keyPoints:["Consumer可以访问Context中的函数和计算属性","在Consumer中可以进行复杂的数据处理","Consumer支持动态的UI渲染","可以在Consumer中处理Context数据的副作用"],commonTraps:["在Consumer中进行复杂计算，影响性能","忘记处理Context方法调用的错误","在Consumer中创建过多的临时变量"],solutions:["将复杂计算移到Context Provider中","使用try-catch处理Context方法调用","合理使用解构赋值简化代码"],importantTips:["Consumer中可以直接调用Context的所有方法","注意Context方法调用的副作用","可以在Consumer中进行条件性的方法调用"],codeExample:{title:"国际化Consumer",code:`// 使用Consumer实现国际化功能
const TranslatedContent: React.FC = () => {
  return (
    <I18nContext.Consumer>
      {(context) => {
        console.log("I18n Consumer渲染", context); // ← 重点：Consumer渲染日志
        
        if (!context) {
          return <div>I18nContext not found</div>;
        }
        
        const { t, currentLanguage, changeLanguage } = context;
        
        return (
          <div>
            <h3>{currentLanguage.flag} {t("welcome")}</h3> {/* ← 重点：Consumer中使用翻译函数 */}
            <p>{t("hello", { name: "用户" })}</p> {/* ← 重点：带参数的翻译 */}
            
            <button 
              onClick={() => {
                console.log("切换语言"); // ← 重点：操作日志
                changeLanguage("en"); // ← 重点：Consumer中调用Context方法
              }}
            >
              Switch to English
            </button>
          </div>
        );
      }}
    </I18nContext.Consumer>
  );
};`,language:"tsx",highlights:[6,12,16,17,21,22]}},{title:"示例3：设置管理Consumer",description:"使用Consumer管理应用设置，支持导入导出功能，展示Consumer在复杂业务场景中的应用",component:e.jsx(L,{}),observationPoints:["Consumer可以处理复杂的业务逻辑","在Consumer中可以调用多个Context方法","Consumer支持异步操作和文件处理","可以在Consumer中进行数据验证和错误处理"],keyPoints:["Consumer适合处理复杂的业务逻辑","可以在Consumer中组合多个Context操作","Consumer支持异步操作和副作用处理","在Consumer中可以进行数据的导入导出"],commonTraps:["在Consumer中处理过多的业务逻辑","忘记处理异步操作的错误","在Consumer中直接操作DOM"],solutions:["将复杂业务逻辑抽取到自定义Hook中","使用try-catch处理异步操作","使用ref或事件处理器操作DOM"],importantTips:["Consumer中可以处理文件操作和异步逻辑","注意异步操作对组件状态的影响","合理使用Consumer的render props特性"],codeExample:{title:"设置管理Consumer",code:`// 使用Consumer管理应用设置
const SettingsPanel: React.FC = () => {
  return (
    <SettingsContext.Consumer>
      {(context) => {
        console.log("Settings Consumer渲染", context); // ← 重点：Consumer渲染日志
        
        if (!context) {
          return <div>SettingsContext not found</div>;
        }
        
        const { settings, updateSetting, exportSettings, importSettings } = context;
        
        const handleExport = () => {
          const dataStr = exportSettings();
          console.log("导出设置:", dataStr); // ← 重点：导出日志
          // 创建下载链接
          const dataBlob = new Blob([dataStr], { type: "application/json" });
          const url = URL.createObjectURL(dataBlob);
          const link = document.createElement("a");
          link.href = url;
          link.download = "settings.json";
          link.click();
        };
        
        return (
          <div>
            <select 
              value={settings.theme}
              onChange={(e) => {
                console.log("主题切换:", e.target.value); // ← 重点：设置更新日志
                updateSetting("theme", e.target.value); // ← 重点：Consumer中更新设置
              }}
            >
              <option value="light">浅色</option>
              <option value="dark">深色</option>
            </select>
            
            <button onClick={handleExport}>
              导出设置
            </button>
            
            <pre>{JSON.stringify(settings, null, 2)}</pre> {/* ← 重点：实时显示设置状态 */}
          </div>
        );
      }}
    </SettingsContext.Consumer>
  );
};`,language:"tsx",highlights:[6,12,15,16,30,31,42]}},{title:"示例4：类组件Consumer",description:"展示如何在类组件中使用Context.Consumer，演示Consumer在类组件中的优势",component:e.jsx(I,{}),observationPoints:["类组件可以通过Consumer访问Context数据","Consumer在类组件中提供了灵活的Context消费方式","类组件中的Consumer可以访问生命周期方法","Consumer比contextType更灵活，可以消费多个Context"],keyPoints:["类组件中使用Consumer比contextType更灵活","Consumer可以在类组件的render方法中使用","类组件Consumer可以结合生命周期方法使用","Consumer支持在类组件中消费多个Context"],commonTraps:["在类组件中混合使用Consumer和contextType","忘记在类组件中处理Consumer的错误情况","在类组件的生命周期方法中直接使用Context"],solutions:["在类组件中统一使用Consumer或contextType","在Consumer中添加错误边界处理","通过Consumer将Context数据传递给生命周期方法"],importantTips:["类组件中Consumer比contextType更强大","Consumer可以在类组件中处理多个Context","注意类组件Consumer的性能优化"],codeExample:{title:"类组件Consumer",code:`// 在类组件中使用Context.Consumer
class ClassConsumerExample extends Component {
  componentDidMount() {
    console.log("类组件挂载"); // ← 重点：类组件生命周期日志
  }
  
  componentDidUpdate() {
    console.log("类组件更新"); // ← 重点：类组件生命周期日志
  }
  
  render() {
    console.log("类组件渲染"); // ← 重点：类组件渲染日志
    
    return (
      <NotificationContext.Consumer>
        {(context) => {
          console.log("类组件Consumer渲染", context); // ← 重点：类组件Consumer日志
          
          if (!context) {
            return <div>Context not found</div>;
          }
          
          const { notifications, addNotification, clearAll } = context;
          
          return (
            <div>
              <button 
                onClick={() => {
                  console.log("类组件中添加通知"); // ← 重点：类组件操作日志
                  addNotification("来自类组件的通知", "info");
                }}
              >
                添加通知
              </button>
              
              <p>通知数量: {notifications.length}</p>
            </div>
          );
        }}
      </NotificationContext.Consumer>
    );
  }
}`,language:"tsx",highlights:[4,8,12,17,29,30]}}],tutorial:{concepts:["Context.Consumer使用render props模式","Consumer函数接收Context值作为参数","Consumer可以处理Context不存在的情况","Consumer适用于类组件和函数组件","Consumer可以嵌套使用消费多个Context","Consumer提供比useContext更灵活的数据处理"],steps:["创建Context对象和Provider组件","在需要消费数据的地方使用Context.Consumer","在Consumer的render函数中处理Context数据","添加Context不存在时的错误处理","根据Context数据渲染相应的UI","处理Context数据的更新和副作用","优化Consumer的性能和可读性"],tips:["始终检查Context是否存在，避免运行时错误","使用TypeScript为Context提供类型安全","考虑创建自定义组件简化多Context的消费","在类组件中优先使用Consumer而不是contextType","避免过深的Consumer嵌套，影响代码可读性","合理使用Consumer的render props特性","注意Consumer内部的性能优化"]},interview:{questions:[{question:"Context.Consumer和useContext有什么区别？",answer:"主要区别：1) Consumer使用render props模式，useContext使用Hook；2) Consumer可以在类组件中使用，useContext只能在函数组件中使用；3) Consumer可以在JSX中直接处理Context不存在的情况，useContext需要额外的错误处理；4) Consumer提供更灵活的数据处理方式，useContext更简洁；5) Consumer可以嵌套使用消费多个Context，useContext需要多次调用。"},{question:"什么时候应该使用Context.Consumer？",answer:"适合使用Consumer的场景：1) 在类组件中消费Context数据；2) 需要在JSX中条件渲染Context数据；3) 需要同时消费多个Context；4) 需要更灵活的Context数据处理逻辑；5) 需要在render函数中直接处理Context错误；6) 使用render props模式的组件库。"},{question:"如何在Consumer中处理多个Context？",answer:"处理多个Context的方法：1) 嵌套多个Consumer组件；2) 创建自定义的MultiContextConsumer组件；3) 使用高阶组件包装多个Context；4) 在函数组件中结合使用Consumer和useContext；5) 创建Context组合器简化多Context的使用；6) 使用Context.Consumer的render props特性灵活处理数据。"},{question:"Consumer的render props模式有什么优势？",answer:"render props模式的优势：1) 提供更灵活的数据处理方式；2) 可以在JSX中直接处理条件逻辑；3) 支持动态的组件渲染；4) 便于处理Context不存在的错误情况；5) 可以传递额外的props给子组件；6) 支持复杂的数据转换和计算；7) 便于测试和调试。"},{question:"如何优化Consumer的性能？",answer:"优化Consumer性能的方法：1) 避免在Consumer内部创建新对象和函数；2) 使用useMemo和useCallback优化render函数；3) 将稳定的数据和变化的数据分离到不同Context；4) 避免过深的Consumer嵌套；5) 使用React.memo包装Consumer组件；6) 合理拆分Context避免不必要的重渲染；7) 在Provider中优化Context值的创建。"},{question:"在类组件中使用Consumer有什么注意事项？",answer:"类组件中使用Consumer的注意事项：1) Consumer比contextType更灵活，可以消费多个Context；2) 在类组件的生命周期方法中不能直接访问Context；3) 需要通过Consumer的render props传递Context数据；4) 注意Consumer的重渲染对类组件性能的影响；5) 在类组件中处理Consumer的错误边界；6) 避免在类组件的构造函数中使用Consumer；7) 合理使用类组件的state和Context数据。"}],keyPoints:["Context.Consumer使用render props模式访问Context数据","Consumer可以在类组件和函数组件中使用","Consumer提供了灵活的Context数据处理方式","Consumer可以在JSX中直接处理Context错误","Consumer支持嵌套使用消费多个Context","Consumer比useContext提供更多的控制能力","Consumer适合需要条件渲染Context数据的场景"]},bestPractices:{dos:["始终检查Context是否存在，提供fallback UI","使用TypeScript为Context提供类型安全","在Consumer中合理使用解构赋值","创建自定义Hook简化Consumer的使用","在类组件中优先使用Consumer而不是contextType","使用Consumer的render props特性处理复杂逻辑","为Consumer组件添加适当的错误边界","在Consumer中添加必要的控制台日志用于调试"],donts:["不要在Consumer内部创建新对象或函数","不要过度嵌套Consumer，影响代码可读性","不要在Consumer中处理过多的业务逻辑","不要忘记处理Context不存在的情况","不要在Consumer中直接操作DOM","不要在Consumer中进行复杂的异步操作","不要混合使用Consumer和useContext在同一组件中"],patterns:["Render Props模式 - 使用函数作为子组件访问Context","错误边界模式 - 在Consumer中处理Context错误","条件渲染模式 - 根据Context状态渲染不同UI","多Context消费模式 - 嵌套Consumer消费多个Context","高阶组件模式 - 使用HOC包装Consumer逻辑","自定义Hook模式 - 创建Hook简化Consumer使用","组合模式 - 将多个Consumer组合成复合组件"]}};return e.jsx(k,{...a})};export{M as default};
