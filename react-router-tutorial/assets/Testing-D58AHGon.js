import{j as e,r as h}from"./index-CKwi3pR7.js";import{C as D}from"./ComponentTemplate-CukjZkuC.js";const I=()=>{const[c,i]=h.useState([{name:"路由组件测试",tests:[],totalTests:0,passedTests:0,failedTests:0,coverage:0},{name:"导航功能测试",tests:[],totalTests:0,passedTests:0,failedTests:0,coverage:0},{name:"Hook测试",tests:[],totalTests:0,passedTests:0,failedTests:0,coverage:0}]),[d,m]=h.useState(!1),[g,p]=h.useState(null),j={路由组件测试:[{id:"route-render-1",name:"应该正确渲染路由组件",test:()=>Math.random()>.1},{id:"route-props-1",name:"应该正确传递路由参数",test:()=>Math.random()>.2},{id:"route-nested-1",name:"应该正确处理嵌套路由",test:()=>Math.random()>.15},{id:"route-guard-1",name:"应该正确执行路由守卫",test:()=>Math.random()>.1}],导航功能测试:[{id:"nav-programmatic-1",name:"应该支持编程式导航",test:()=>Math.random()>.05},{id:"nav-history-1",name:"应该正确管理历史记录",test:()=>Math.random()>.1},{id:"nav-state-1",name:"应该正确传递导航状态",test:()=>Math.random()>.2},{id:"nav-replace-1",name:"应该支持替换式导航",test:()=>Math.random()>.1}],Hook测试:[{id:"hook-navigate-1",name:"useNavigate应该返回导航函数",test:()=>Math.random()>.05},{id:"hook-location-1",name:"useLocation应该返回当前位置",test:()=>Math.random()>.1},{id:"hook-params-1",name:"useParams应该返回路由参数",test:()=>Math.random()>.15},{id:"hook-search-1",name:"useSearchParams应该处理查询参数",test:()=>Math.random()>.2}]},y=async t=>{const s=Date.now();await new Promise(u=>setTimeout(u,Math.random()*500+200));const o=t.test(),a=Date.now()-s;return{id:t.id,name:t.name,status:o?"passed":"failed",duration:a,error:o?void 0:"测试断言失败",coverage:Math.random()*30+70}},v=async t=>{const s=j[t];for(const o of s){p(`${t} - ${o.name}`);const a=await y(o);i(u=>u.map(l=>{if(l.name===t){const x=[...l.tests,a],R=x.filter(b=>b.status==="passed").length,M=x.filter(b=>b.status==="failed").length,B=x.reduce((b,S)=>b+(S.coverage||0),0)/x.length;return{...l,tests:x,totalTests:x.length,passedTests:R,failedTests:M,coverage:Math.round(B)}}return l}))}p(null)},f=async()=>{m(!0),i(t=>t.map(s=>({...s,tests:[],totalTests:0,passedTests:0,failedTests:0,coverage:0})));for(const t of Object.keys(j))await v(t);m(!1)},N=async t=>{m(!0),i(s=>s.map(o=>o.name===t?{...o,tests:[],totalTests:0,passedTests:0,failedTests:0,coverage:0}:o)),await v(t),m(!1)},T=()=>{i(t=>t.map(s=>({...s,tests:[],totalTests:0,passedTests:0,failedTests:0,coverage:0})))},k=c.reduce((t,s)=>t+s.totalTests,0),w=c.reduce((t,s)=>t+s.passedTests,0),r=c.reduce((t,s)=>t+s.failedTests,0),n=c.length>0?Math.round(c.reduce((t,s)=>t+s.coverage,0)/c.length):0;return e.jsxs("div",{className:"border rounded-lg overflow-hidden",children:[e.jsxs("div",{className:"bg-gray-100 p-4",children:[e.jsx("h3",{className:"font-semibold mb-3",children:"单元测试演示"}),e.jsxs("div",{className:"flex justify-between items-center mb-4",children:[e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:f,disabled:d,className:`px-4 py-2 rounded text-sm transition-colors ${d?"bg-gray-300 text-gray-500 cursor-not-allowed":"bg-green-500 text-white hover:bg-green-600"}`,children:d?"运行中...":"运行所有测试"}),e.jsx("button",{onClick:T,disabled:d,className:"px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 text-sm disabled:opacity-50",children:"清除结果"})]}),e.jsxs("div",{className:"flex gap-4 text-sm",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"font-bold text-lg",children:k}),e.jsx("div",{className:"text-gray-600",children:"总测试"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"font-bold text-lg text-green-600",children:w}),e.jsx("div",{className:"text-gray-600",children:"通过"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"font-bold text-lg text-red-600",children:r}),e.jsx("div",{className:"text-gray-600",children:"失败"})]}),e.jsxs("div",{className:"text-center",children:[e.jsxs("div",{className:"font-bold text-lg text-blue-600",children:[n,"%"]}),e.jsx("div",{className:"text-gray-600",children:"覆盖率"})]})]})]}),g&&e.jsx("div",{className:"mb-4 p-3 bg-blue-50 border border-blue-200 rounded",children:e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 mr-2"}),e.jsxs("span",{className:"text-blue-800 text-sm",children:["正在运行: ",g]})]})})]}),e.jsxs("div",{className:"p-4",children:[e.jsx("div",{className:"space-y-6",children:c.map(t=>e.jsxs("div",{className:"border rounded-lg overflow-hidden",children:[e.jsxs("div",{className:"bg-gray-50 p-3 flex justify-between items-center",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold",children:t.name}),e.jsx("div",{className:"text-sm text-gray-600",children:t.totalTests>0&&e.jsxs("span",{children:[t.passedTests," 通过, ",t.failedTests," 失败, 覆盖率 ",t.coverage,"%"]})})]}),e.jsx("button",{onClick:()=>N(t.name),disabled:d,className:"px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm disabled:opacity-50",children:"运行"})]}),t.tests.length>0&&e.jsx("div",{className:"p-3",children:e.jsx("div",{className:"space-y-2",children:t.tests.map(s=>e.jsxs("div",{className:`flex justify-between items-center p-2 rounded text-sm ${s.status==="passed"?"bg-green-50 border border-green-200":s.status==="failed"?"bg-red-50 border border-red-200":"bg-gray-50 border border-gray-200"}`,children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("span",{className:`mr-2 ${s.status==="passed"?"text-green-600":s.status==="failed"?"text-red-600":"text-gray-600"}`,children:s.status==="passed"?"✓":s.status==="failed"?"✗":"○"}),e.jsx("span",{children:s.name}),s.error&&e.jsxs("span",{className:"ml-2 text-red-600 text-xs",children:["(",s.error,")"]})]}),e.jsxs("div",{className:"flex items-center gap-2 text-xs text-gray-500",children:[e.jsxs("span",{children:[s.duration,"ms"]}),s.coverage&&e.jsxs("span",{children:[Math.round(s.coverage),"%"]})]})]},s.id))})})]},t.name))}),e.jsxs("div",{className:"mt-6 bg-blue-50 p-4 rounded",children:[e.jsx("h4",{className:"font-semibold text-blue-800 mb-2",children:"单元测试最佳实践："}),e.jsxs("ul",{className:"text-sm text-blue-700 space-y-1",children:[e.jsxs("li",{children:["• ",e.jsx("strong",{children:"隔离测试:"})," 每个测试应该独立，不依赖其他测试"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"Mock依赖:"})," 使用Mock模拟外部依赖和副作用"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"测试覆盖:"})," 确保关键路径和边界情况的测试覆盖"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"描述清晰:"})," 测试名称应该清楚描述测试的目的"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"快速执行:"})," 单元测试应该快速执行，避免网络请求"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"断言明确:"})," 使用明确的断言，避免模糊的测试条件"]})]})]})]})]})},P=()=>{const[c]=h.useState([{id:"user-flow-1",name:"用户注册流程",description:"测试完整的用户注册和登录流程",steps:["访问注册页面","填写注册表单","提交注册信息","验证邮箱","登录系统","访问用户中心"],status:"pending"},{id:"navigation-flow-1",name:"导航流程测试",description:"测试应用内的各种导航场景",steps:["从首页导航到产品页","使用面包屑导航","测试浏览器前进后退","测试深层链接访问","测试路由守卫","测试404页面"],status:"pending"},{id:"data-flow-1",name:"数据流测试",description:"测试数据加载和状态管理",steps:["加载初始数据","测试数据缓存","测试数据更新","测试错误处理","测试加载状态","测试数据同步"],status:"pending"}]),[i,d]=h.useState(null),[m,g]=h.useState(null),[p,j]=h.useState({}),y=async r=>{d(r.id);const n=Date.now(),t=[];for(const a of r.steps){g(a);const u=Date.now();await new Promise(R=>setTimeout(R,Math.random()*1e3+500));const l=Math.random()>.15,x=Date.now()-u;if(t.push({name:a,status:l?"passed":"failed",duration:x,error:l?void 0:"步骤执行失败"}),!l)break}const s=Date.now()-n,o=t.every(a=>a.status==="passed");j(a=>({...a,[r.id]:{status:o?"passed":"failed",duration:s,steps:t}})),d(null),g(null)},v=async()=>{for(const r of c)await y(r)},f=()=>{j({})},N=c.length,T=Object.keys(p).length,k=Object.values(p).filter(r=>r.status==="passed").length,w=Object.values(p).filter(r=>r.status==="failed").length;return e.jsxs("div",{className:"border rounded-lg overflow-hidden",children:[e.jsxs("div",{className:"bg-gray-100 p-4",children:[e.jsx("h3",{className:"font-semibold mb-3",children:"集成测试演示"}),e.jsxs("div",{className:"flex justify-between items-center mb-4",children:[e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:v,disabled:i!==null,className:`px-4 py-2 rounded text-sm transition-colors ${i!==null?"bg-gray-300 text-gray-500 cursor-not-allowed":"bg-purple-500 text-white hover:bg-purple-600"}`,children:i?"运行中...":"运行所有场景"}),e.jsx("button",{onClick:f,disabled:i!==null,className:"px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 text-sm disabled:opacity-50",children:"清除结果"})]}),e.jsxs("div",{className:"flex gap-4 text-sm",children:[e.jsxs("div",{className:"text-center",children:[e.jsxs("div",{className:"font-bold text-lg",children:[T,"/",N]}),e.jsx("div",{className:"text-gray-600",children:"已完成"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"font-bold text-lg text-green-600",children:k}),e.jsx("div",{className:"text-gray-600",children:"通过"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"font-bold text-lg text-red-600",children:w}),e.jsx("div",{className:"text-gray-600",children:"失败"})]})]})]}),i&&m&&e.jsx("div",{className:"mb-4 p-3 bg-purple-50 border border-purple-200 rounded",children:e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"animate-spin rounded-full h-4 w-4 border-b-2 border-purple-600 mr-2"}),e.jsxs("span",{className:"text-purple-800 text-sm",children:["正在执行: ",m]})]})})]}),e.jsxs("div",{className:"p-4",children:[e.jsx("div",{className:"space-y-4",children:c.map(r=>{const n=p[r.id],t=i===r.id;return e.jsx("div",{className:"border rounded-lg overflow-hidden",children:e.jsxs("div",{className:`p-4 ${n?n.status==="passed"?"bg-green-50 border-green-200":"bg-red-50 border-red-200":t?"bg-purple-50 border-purple-200":"bg-gray-50"}`,children:[e.jsxs("div",{className:"flex justify-between items-start mb-2",children:[e.jsxs("div",{children:[e.jsxs("h4",{className:"font-semibold flex items-center",children:[n&&e.jsx("span",{className:`mr-2 ${n.status==="passed"?"text-green-600":"text-red-600"}`,children:n.status==="passed"?"✓":"✗"}),t&&e.jsx("div",{className:"animate-spin rounded-full h-4 w-4 border-b-2 border-purple-600 mr-2"}),r.name]}),e.jsx("p",{className:"text-sm text-gray-600",children:r.description}),n&&e.jsxs("p",{className:"text-xs text-gray-500 mt-1",children:["执行时间: ",n.duration,"ms"]})]}),e.jsx("button",{onClick:()=>y(r),disabled:i!==null,className:"px-3 py-1 bg-purple-500 text-white rounded hover:bg-purple-600 text-sm disabled:opacity-50",children:"运行"})]}),e.jsxs("div",{className:"mt-3",children:[e.jsx("h5",{className:"text-sm font-medium mb-2",children:"测试步骤:"}),e.jsx("div",{className:"grid md:grid-cols-2 gap-2",children:r.steps.map((s,o)=>{const a=n==null?void 0:n.steps.find(l=>l.name===s),u=m===s&&t;return e.jsxs("div",{className:`p-2 rounded text-sm flex items-center ${a?a.status==="passed"?"bg-green-100 text-green-800":"bg-red-100 text-red-800":u?"bg-purple-100 text-purple-800":"bg-gray-100 text-gray-600"}`,children:[a&&e.jsx("span",{className:"mr-2",children:a.status==="passed"?"✓":"✗"}),u&&e.jsx("div",{className:"animate-spin rounded-full h-3 w-3 border-b-2 border-purple-600 mr-2"}),e.jsx("span",{className:"flex-1",children:s}),a&&e.jsxs("span",{className:"text-xs",children:[a.duration,"ms"]})]},o)})})]})]})},r.id)})}),e.jsxs("div",{className:"mt-6 bg-purple-50 p-4 rounded",children:[e.jsx("h4",{className:"font-semibold text-purple-800 mb-2",children:"集成测试特点："}),e.jsxs("ul",{className:"text-sm text-purple-700 space-y-1",children:[e.jsxs("li",{children:["• ",e.jsx("strong",{children:"端到端测试:"})," 测试完整的用户流程和业务场景"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"真实环境:"})," 在接近生产环境的条件下进行测试"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"组件协作:"})," 验证不同组件和模块之间的协作"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"数据流测试:"})," 测试数据在系统中的流转"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"用户体验:"})," 从用户角度验证功能的完整性"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"性能验证:"})," 在集成环境下验证性能表现"]})]})]})]})]})},H=()=>e.jsx(D,{title:"传统模式 - 测试",description:"全面掌握React Router传统模式的测试方法：单元测试、集成测试、端到端测试等，确保路由应用的质量和稳定性。",overview:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-green-50 p-4 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-green-800 mb-2",children:"🧪 测试类型"}),e.jsxs("ul",{className:"space-y-1 text-sm text-green-700",children:[e.jsxs("li",{children:["• ",e.jsx("strong",{children:"单元测试:"})," 测试单个组件和函数"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"集成测试:"})," 测试组件间的协作"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"端到端测试:"})," 测试完整用户流程"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"路由测试:"})," 测试导航和路由逻辑"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"Hook测试:"})," 测试自定义Hook"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"性能测试:"})," 测试加载和渲染性能"]})]})]}),e.jsxs("div",{className:"bg-blue-50 p-4 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-blue-800 mb-2",children:"🛠️ 测试工具"}),e.jsxs("ul",{className:"space-y-1 text-sm text-blue-700",children:[e.jsx("li",{children:"• Jest：JavaScript测试框架"}),e.jsx("li",{children:"• React Testing Library：React组件测试"}),e.jsx("li",{children:"• Cypress：端到端测试工具"}),e.jsx("li",{children:"• MSW：API Mock服务"}),e.jsx("li",{children:"• Testing Library Router：路由测试工具"}),e.jsx("li",{children:"• Playwright：现代端到端测试"})]})]})]}),e.jsxs("div",{className:"bg-yellow-50 p-4 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-yellow-800 mb-2",children:"📋 测试策略"}),e.jsxs("ul",{className:"space-y-1 text-sm text-yellow-700",children:[e.jsx("li",{children:"• 测试金字塔：大量单元测试，适量集成测试，少量端到端测试"}),e.jsx("li",{children:"• 测试驱动开发：先写测试，再实现功能"}),e.jsx("li",{children:"• 行为驱动测试：从用户行为角度设计测试用例"}),e.jsx("li",{children:"• 持续集成：在CI/CD流程中自动运行测试"}),e.jsx("li",{children:"• 测试覆盖率：确保关键代码路径的测试覆盖"}),e.jsx("li",{children:"• 回归测试：确保新功能不破坏现有功能"})]})]})]}),examples:[{title:"单元测试演示",component:e.jsx(I,{}),description:"演示React Router组件和Hook的单元测试",observationPoints:["每个测试套件包含多个相关的测试用例","测试结果显示通过/失败状态和执行时间","测试覆盖率帮助评估测试的完整性","失败的测试会显示错误信息"],keyPoints:["单元测试应该快速执行，独立运行","使用Mock模拟外部依赖和副作用","测试名称应该清楚描述测试目的","关注测试覆盖率和边界情况"],commonTraps:["测试之间存在依赖关系","过度Mock导致测试脱离实际","忽略边界情况和错误处理"],solutions:["确保每个测试独立运行","合理使用Mock，保持测试真实性","编写覆盖各种场景的测试用例"]},{title:"集成测试演示",component:e.jsx(P,{}),description:"展示端到端的用户流程测试",observationPoints:["集成测试验证完整的用户流程","测试步骤按顺序执行，失败时停止","显示每个步骤的执行状态和时间","测试结果包含详细的步骤信息"],keyPoints:["集成测试验证组件间的协作","测试真实的用户使用场景","在接近生产环境的条件下测试","关注数据流和状态管理"],commonTraps:["集成测试过于复杂和缓慢","测试环境与生产环境差异过大","忽略异常情况的处理"],solutions:["保持集成测试的简洁和重点","使用接近生产的测试环境","包含错误处理和边界情况"]}],tutorial:{concepts:["单元测试：测试单个组件、函数或Hook的功能","集成测试：测试多个组件或模块之间的协作","端到端测试：测试完整的用户流程和业务场景","Mock和Stub：模拟外部依赖和副作用","测试覆盖率：衡量测试对代码的覆盖程度","测试驱动开发：先写测试，再实现功能的开发方式"],steps:["设置测试环境和工具链","编写路由组件的单元测试","测试React Router的Hook","编写导航功能的集成测试","设置端到端测试环境","编写用户流程测试","配置测试覆盖率报告","集成到CI/CD流程"],tips:["遵循测试金字塔原则，重点关注单元测试","使用描述性的测试名称","保持测试的独立性和可重复性","合理使用Mock，避免过度模拟","关注测试的可维护性","定期审查和更新测试用例"]},interview:{questions:[{question:"React Router应用中如何进行单元测试？",answer:"React Router单元测试方法：1) 使用React Testing Library的render函数渲染组件；2) 使用MemoryRouter包装组件提供路由上下文；3) Mock useNavigate、useLocation等Hook；4) 测试组件在不同路由状态下的渲染；5) 验证导航行为和参数传递；6) 使用jest.mock模拟路由相关模块；7) 测试路由守卫和权限控制逻辑。"},{question:"如何测试React Router的Hook？",answer:"Hook测试方法：1) 使用@testing-library/react-hooks的renderHook；2) 提供Router上下文包装Hook；3) 测试Hook返回值的正确性；4) 模拟路由变化测试Hook响应；5) 测试自定义Hook的逻辑；6) 验证Hook的副作用和状态更新；7) 测试Hook在不同路由状态下的行为；8) 使用act包装异步操作。"},{question:"集成测试和端到端测试有什么区别？如何选择？",answer:"区别：1) 集成测试：测试多个组件协作，通常在内存中运行，速度较快；2) 端到端测试：测试完整用户流程，在真实浏览器中运行，速度较慢；选择原则：1) 核心业务流程使用端到端测试；2) 组件交互使用集成测试；3) 遵循测试金字塔原则；4) 考虑测试成本和维护复杂度；5) 根据团队资源和项目需求平衡。"},{question:"如何在测试中处理异步路由和数据加载？",answer:"异步测试处理：1) 使用waitFor等待异步操作完成；2) Mock异步数据加载函数；3) 使用MSW模拟API响应；4) 测试加载状态和错误状态；5) 使用act包装状态更新；6) 设置合理的超时时间；7) 测试Suspense和ErrorBoundary；8) 验证异步操作的副作用；9) 使用fake timers控制时间。"},{question:"如何建立有效的测试策略和流程？",answer:"测试策略：1) 制定测试标准和覆盖率目标；2) 建立测试分层体系；3) 集成到CI/CD流程；4) 定期审查测试用例；5) 培训团队测试技能；6) 使用测试驱动开发；7) 建立测试数据管理；8) 监控测试执行和结果；9) 持续优化测试效率；10) 建立测试文档和最佳实践。"}],keyPoints:["掌握React Router应用的测试方法","理解不同测试类型的适用场景","熟悉测试工具和框架的使用","了解测试策略和最佳实践","掌握异步测试的处理方法","理解测试在开发流程中的作用"]},bestPractices:{dos:["遵循测试金字塔原则，重点关注单元测试","使用描述性的测试名称和结构","保持测试的独立性和可重复性","合理使用Mock和Stub模拟依赖","关注测试覆盖率和边界情况","集成测试到CI/CD流程","定期审查和维护测试用例"],donts:["不要让测试之间存在依赖关系","不要过度Mock导致测试脱离实际","不要忽略异步操作的测试","不要只关注正常流程，忽略异常情况","不要让测试变得过于复杂和难以维护","不要忽视测试的执行效率","不要在没有测试的情况下修改代码"],patterns:["测试金字塔：单元测试 + 集成测试 + 端到端测试","AAA模式：Arrange + Act + Assert","Given-When-Then：行为驱动测试模式","Page Object：页面对象模式用于端到端测试","Test Double：使用Mock、Stub、Fake等测试替身"]},codeExamples:[{title:"React Router组件测试示例",code:`import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { jest } from '@jest/globals';
import UserProfile from './UserProfile';

// Mock useNavigate Hook
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
  useParams: () => ({ userId: '123' })
}));

describe('UserProfile Component', () => {
  beforeEach(() => {
    mockNavigate.mockClear();
  });
  
  it('应该正确渲染用户信息', () => {
    render(
      <MemoryRouter initialEntries={['/user/123']}>
        <UserProfile />
      </MemoryRouter>
    );
    
    expect(screen.getByText('用户资料')).toBeInTheDocument();
    expect(screen.getByText('用户ID: 123')).toBeInTheDocument();
  });
  
  it('应该在点击编辑按钮时导航到编辑页面', () => {
    render(
      <MemoryRouter initialEntries={['/user/123']}>
        <UserProfile />
      </MemoryRouter>
    );
    
    const editButton = screen.getByText('编辑资料');
    fireEvent.click(editButton);
    
    expect(mockNavigate).toHaveBeenCalledWith('/user/123/edit');
  });
  
  it('应该正确处理加载状态', async () => {
    // Mock API调用
    const mockFetch = jest.fn().mockResolvedValue({
      json: () => Promise.resolve({ id: '123', name: 'John Doe' })
    });
    global.fetch = mockFetch;
    
    render(
      <MemoryRouter initialEntries={['/user/123']}>
        <UserProfile />
      </MemoryRouter>
    );
    
    // 验证加载状态
    expect(screen.getByText('加载中...')).toBeInTheDocument();
    
    // 等待数据加载完成
    await waitFor(() => {
      expect(screen.getByText('John Doe')).toBeInTheDocument();
    });
    
    expect(mockFetch).toHaveBeenCalledWith('/api/users/123');
  });
  
  it('应该正确处理错误状态', async () => {
    // Mock API错误
    const mockFetch = jest.fn().mockRejectedValue(new Error('Network Error'));
    global.fetch = mockFetch;
    
    render(
      <MemoryRouter initialEntries={['/user/123']}>
        <UserProfile />
      </MemoryRouter>
    );
    
    await waitFor(() => {
      expect(screen.getByText('加载失败')).toBeInTheDocument();
    });
  });
});

// 自定义Hook测试
import { renderHook, act } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { useRouterState } from './useRouterState';

describe('useRouterState Hook', () => {
  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <MemoryRouter initialEntries={['/dashboard']}>
      {children}
    </MemoryRouter>
  );
  
  it('应该返回当前路由状态', () => {
    const { result } = renderHook(() => useRouterState(), { wrapper });
    
    expect(result.current.pathname).toBe('/dashboard');
    expect(result.current.isActive('/dashboard')).toBe(true);
    expect(result.current.isActive('/profile')).toBe(false);
  });
  
  it('应该正确处理路由变化', () => {
    const { result } = renderHook(() => useRouterState(), { wrapper });
    
    act(() => {
      result.current.navigate('/profile');
    });
    
    expect(result.current.pathname).toBe('/profile');
    expect(result.current.isActive('/profile')).toBe(true);
  });
});`,language:"typescript",highlights:[7,15,25,35,45,65,75]},{title:"集成测试示例",code:`import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import App from './App';

// 设置MSW服务器
const server = setupServer(
  rest.get('/api/users/:id', (req, res, ctx) => {
    const { id } = req.params;
    return res(
      ctx.json({
        id,
        name: \`User \${id}\`,
        email: \`user\${id}@example.com\`
      })
    );
  }),
  
  rest.post('/api/users/:id', (req, res, ctx) => {
    return res(ctx.json({ success: true }));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('用户管理流程集成测试', () => {
  it('应该完成完整的用户查看和编辑流程', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    
    // 1. 导航到用户列表
    const userListLink = screen.getByText('用户管理');
    fireEvent.click(userListLink);
    
    expect(screen.getByText('用户列表')).toBeInTheDocument();
    
    // 2. 点击查看用户详情
    const viewUserButton = screen.getByText('查看用户 123');
    fireEvent.click(viewUserButton);
    
    // 3. 等待用户数据加载
    await waitFor(() => {
      expect(screen.getByText('User 123')).toBeInTheDocument();
      expect(screen.getByText('user123@example.com')).toBeInTheDocument();
    });
    
    // 4. 点击编辑按钮
    const editButton = screen.getByText('编辑资料');
    fireEvent.click(editButton);
    
    // 5. 验证导航到编辑页面
    expect(screen.getByText('编辑用户')).toBeInTheDocument();
    
    // 6. 修改用户信息
    const nameInput = screen.getByLabelText('姓名');
    fireEvent.change(nameInput, { target: { value: 'Updated User' } });
    
    // 7. 提交表单
    const submitButton = screen.getByText('保存');
    fireEvent.click(submitButton);
    
    // 8. 验证成功提示
    await waitFor(() => {
      expect(screen.getByText('保存成功')).toBeInTheDocument();
    });
    
    // 9. 验证返回用户详情页面
    await waitFor(() => {
      expect(screen.getByText('用户详情')).toBeInTheDocument();
    });
  });
  
  it('应该正确处理网络错误', async () => {
    // 模拟网络错误
    server.use(
      rest.get('/api/users/:id', (req, res, ctx) => {
        return res(ctx.status(500), ctx.json({ error: 'Server Error' }));
      })
    );
    
    render(
      <MemoryRouter initialEntries={['/user/123']}>
        <App />
      </MemoryRouter>
    );
    
    // 验证错误处理
    await waitFor(() => {
      expect(screen.getByText('加载失败')).toBeInTheDocument();
      expect(screen.getByText('重试')).toBeInTheDocument();
    });
    
    // 测试重试功能
    server.use(
      rest.get('/api/users/:id', (req, res, ctx) => {
        return res(ctx.json({ id: '123', name: 'User 123' }));
      })
    );
    
    const retryButton = screen.getByText('重试');
    fireEvent.click(retryButton);
    
    await waitFor(() => {
      expect(screen.getByText('User 123')).toBeInTheDocument();
    });
  });
});

// 端到端测试示例 (Cypress)
// cypress/integration/user-management.spec.ts
describe('用户管理端到端测试', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  
  it('应该完成用户注册和登录流程', () => {
    // 1. 点击注册链接
    cy.get('[data-testid="register-link"]').click();
    
    // 2. 填写注册表单
    cy.get('[data-testid="username-input"]').type('testuser');
    cy.get('[data-testid="email-input"]').type('test@example.com');
    cy.get('[data-testid="password-input"]').type('password123');
    
    // 3. 提交注册
    cy.get('[data-testid="register-button"]').click();
    
    // 4. 验证注册成功
    cy.get('[data-testid="success-message"]')
      .should('contain', '注册成功');
    
    // 5. 自动跳转到登录页面
    cy.url().should('include', '/login');
    
    // 6. 登录
    cy.get('[data-testid="username-input"]').type('testuser');
    cy.get('[data-testid="password-input"]').type('password123');
    cy.get('[data-testid="login-button"]').click();
    
    // 7. 验证登录成功并跳转到仪表板
    cy.url().should('include', '/dashboard');
    cy.get('[data-testid="welcome-message"]')
      .should('contain', '欢迎, testuser');
  });
  
  it('应该正确处理路由导航', () => {
    // 测试各种导航场景
    cy.get('[data-testid="nav-products"]').click();
    cy.url().should('include', '/products');
    
    cy.get('[data-testid="nav-about"]').click();
    cy.url().should('include', '/about');
    
    // 测试浏览器后退
    cy.go('back');
    cy.url().should('include', '/products');
    
    // 测试深层链接
    cy.visit('/products/123');
    cy.get('[data-testid="product-title"]')
      .should('contain', 'Product 123');
  });
});`,language:"typescript",highlights:[8,29,45,70,95,110,125]}]});export{H as default};
