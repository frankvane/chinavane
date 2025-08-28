var L=Object.defineProperty;var T=(m,t,s)=>t in m?L(m,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):m[t]=s;var j=(m,t,s)=>T(m,typeof t!="symbol"?t+"":t,s);import{j as e,r as o}from"./index-Bi_r7QuH.js";import{C}from"./ComponentTemplate-C5EWLtXX.js";class G{constructor(t){j(this,"config");j(this,"cache",new Map);j(this,"batchQueue",[]);j(this,"batchTimer",null);j(this,"requestInterceptors",[]);j(this,"responseInterceptors",[]);this.config={timeout:1e4,retryAttempts:3,retryDelay:1e3,enableCache:!0,enableBatching:!1,headers:{},...t}}async query(t){const s=this.getCacheKey(t);if(this.config.enableCache){const n=this.getFromCache(s);if(n)return{data:n}}if(this.config.enableBatching)return this.addToBatch(t);const r=await this.executeQuery(t);return this.config.enableCache&&r.data&&!r.errors&&this.setCache(s,r.data,3e5),r}async mutate(t){const s=await this.executeQuery(t);return s.data&&!s.errors&&this.clearRelatedCache(t),s}subscribe(t,s,r){const n=new WebSocket(this.config.endpoint.replace("http","ws"));return n.onopen=()=>{n.send(JSON.stringify({type:"start",payload:t}))},n.onmessage=h=>{var c,l;try{const d=JSON.parse(h.data);d.type==="data"&&((c=d.payload)!=null&&c.data)?s(d.payload.data):d.type==="error"&&(r==null||r(new Error(((l=d.payload)==null?void 0:l.message)||"Subscription error")))}catch(d){r==null||r(d)}},n.onerror=()=>{r==null||r(new Error("WebSocket error"))},()=>{n.close()}}addRequestInterceptor(t){this.requestInterceptors.push(t)}addResponseInterceptor(t){this.responseInterceptors.push(t)}clearCache(){this.cache.clear()}getCacheStats(){return{size:this.cache.size,hitRate:.85}}async executeQuery(t){let s=null;for(let r=0;r<=this.config.retryAttempts;r++)try{const n={method:"POST",headers:{"Content-Type":"application/json",...this.config.headers},body:JSON.stringify(t)},h=this.requestInterceptors.reduce((b,x)=>x(b),n),c=new AbortController,l=setTimeout(()=>c.abort(),this.config.timeout),d=await fetch(this.config.endpoint,{...h,signal:c.signal});if(clearTimeout(l),!d.ok)throw new Error(`HTTP ${d.status}: ${d.statusText}`);let p=await d.json();return p=this.responseInterceptors.reduce((b,x)=>x(b),p),p}catch(n){s=n,r<this.config.retryAttempts&&await this.delay(this.config.retryDelay*Math.pow(2,r))}throw s||new Error("Unknown error")}addToBatch(t){return new Promise((s,r)=>{this.batchQueue.push({query:t,resolve:s,reject:r}),this.batchTimer||(this.batchTimer=setTimeout(()=>{this.executeBatch()},50))})}async executeBatch(){if(this.batchQueue.length===0)return;const t=[...this.batchQueue];this.batchQueue=[],this.batchTimer=null;try{const s={query:t.map((n,h)=>`
          query_${h}: ${n.query.query}
        `).join(`
`),variables:t.reduce((n,h,c)=>(h.query.variables&&Object.entries(h.query.variables).forEach(([l,d])=>{n[`${l}_${c}`]=d}),n),{})},r=await this.executeQuery(s);t.forEach((n,h)=>{const c=`query_${h}`;r.data&&r.data[c]?n.resolve({data:r.data[c]}):n.reject(new Error("Batch query failed"))})}catch{t.forEach(r=>{this.executeQuery(r.query).then(r.resolve).catch(r.reject)})}}getCacheKey(t){return JSON.stringify({query:t.query.replace(/\s+/g," ").trim(),variables:t.variables||{},operationName:t.operationName})}getFromCache(t){const s=this.cache.get(t);return s?Date.now()-s.timestamp>s.ttl?(this.cache.delete(t),null):s.data:null}setCache(t,s,r){this.cache.set(t,{data:s,timestamp:Date.now(),ttl:r}),this.cache.size>100&&this.cleanupCache()}cleanupCache(){const t=Date.now();for(const[s,r]of this.cache.entries())t-r.timestamp>r.ttl&&this.cache.delete(s)}clearRelatedCache(t){const s=this.extractOperationName(t.query),r=this.getRelatedTypes(s);for(const[n]of this.cache.entries()){const h=JSON.parse(n);r.some(c=>h.query.includes(c))&&this.cache.delete(n)}}extractOperationName(t){const s=t.match(/(?:mutation|query)\s+(\w+)/);return s?s[1]:""}getRelatedTypes(t){return{createUser:["User","users"],updateUser:["User","users"],deleteUser:["User","users"],createPost:["Post","posts","User"],updatePost:["Post","posts"],deletePost:["Post","posts","User"]}[t]||[]}delay(t){return new Promise(s=>setTimeout(s,t))}}class S{constructor(){j(this,"users",[{id:"1",name:"Alice",email:"alice@example.com",posts:["1","2"]},{id:"2",name:"Bob",email:"bob@example.com",posts:["3"]},{id:"3",name:"Charlie",email:"charlie@example.com",posts:[]}]);j(this,"posts",[{id:"1",title:"GraphQL入门",content:"GraphQL是一种查询语言...",authorId:"1"},{id:"2",title:"React最佳实践",content:"React开发中的最佳实践...",authorId:"1"},{id:"3",title:"TypeScript指南",content:"TypeScript使用指南...",authorId:"2"}])}async handleRequest(t){try{await new Promise(n=>setTimeout(n,Math.random()*500+100));const{query:s,variables:r={}}=t;return s.includes("users")?this.handleUsersQuery(s,r):s.includes("posts")?this.handlePostsQuery(s,r):s.includes("createUser")?this.handleCreateUser(r):s.includes("updateUser")?this.handleUpdateUser(r):s.includes("deleteUser")?this.handleDeleteUser(r):{errors:[{message:"Unknown query type"}]}}catch(s){return{errors:[{message:s.message}]}}}handleUsersQuery(t,s){const{limit:r=10,offset:n=0}=s;let h=[...this.users];return h=h.slice(n,n+r),t.includes("posts")?{data:{users:h.map(l=>({...l,posts:this.posts.filter(d=>d.authorId===l.id)}))}}:{data:{users:h}}}handlePostsQuery(t,s){const{authorId:r,limit:n=10,offset:h=0}=s;let c=[...this.posts];return r&&(c=c.filter(l=>l.authorId===r)),c=c.slice(h,h+n),t.includes("author")?{data:{posts:c.map(d=>({...d,author:this.users.find(p=>p.id===d.authorId)}))}}:{data:{posts:c}}}handleCreateUser(t){const{input:s}=t,r={id:(this.users.length+1).toString(),name:s.name,email:s.email,posts:[]};return this.users.push(r),{data:{createUser:{user:r,success:!0}}}}handleUpdateUser(t){const{id:s,input:r}=t,n=this.users.findIndex(h=>h.id===s);return n===-1?{errors:[{message:"User not found"}]}:(this.users[n]={...this.users[n],...r},{data:{updateUser:{user:this.users[n],success:!0}}})}handleDeleteUser(t){const{id:s}=t,r=this.users.findIndex(n=>n.id===s);return r===-1?{errors:[{message:"User not found"}]}:(this.users.splice(r,1),{data:{deleteUser:{success:!0}}})}}const P=()=>{const[m]=o.useState(()=>new S),[t]=o.useState(()=>new G({endpoint:"http://localhost:4000/graphql",enableCache:!0,enableBatching:!1})),[s,r]=o.useState([]),[n,h]=o.useState([]),[c,l]=o.useState(!1),[d,p]=o.useState(null),[b,x]=o.useState([]),y=o.useCallback(async(a,i)=>{l(!0),p(null);const f=Date.now();try{const g=await m.handleRequest(a),Q=Date.now()-f;if(x(q=>[...q.slice(-9),{query:i,result:g,timestamp:Date.now(),duration:Q}]),g.errors)p(g.errors[0].message);else return g.data}catch(g){p(g.message)}finally{l(!1)}},[m]),v=o.useCallback(async()=>{const i=await y({query:`
        query GetUsers($limit: Int, $offset: Int) {
          users(limit: $limit, offset: $offset) {
            id
            name
            email
          }
        }
      `,variables:{limit:10,offset:0}},"GetUsers");i!=null&&i.users&&r(i.users)},[y]),w=o.useCallback(async()=>{const i=await y({query:`
        query GetPosts($limit: Int, $offset: Int) {
          posts(limit: $limit, offset: $offset) {
            id
            title
            content
            authorId
          }
        }
      `,variables:{limit:10,offset:0}},"GetPosts");i!=null&&i.posts&&h(i.posts)},[y]),N=o.useCallback(async()=>{const i=await y({query:`
        query GetUsersWithPosts($limit: Int, $offset: Int) {
          users(limit: $limit, offset: $offset) {
            id
            name
            email
            posts {
              id
              title
              content
            }
          }
        }
      `,variables:{limit:5,offset:0}},"GetUsersWithPosts");i!=null&&i.users&&r(i.users)},[y]),u=o.useCallback(async()=>{var f;const a={query:`
        mutation CreateUser($input: CreateUserInput!) {
          createUser(input: $input) {
            user {
              id
              name
              email
            }
            success
          }
        }
      `,variables:{input:{name:`User ${Date.now()}`,email:`user${Date.now()}@example.com`}}},i=await y(a,"CreateUser");(f=i==null?void 0:i.createUser)!=null&&f.success&&v()},[y,v]);return e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-sm border",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"基础GraphQL操作"}),e.jsxs("div",{className:"grid grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3",children:"查询操作"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("button",{onClick:v,disabled:c,className:"w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors",children:"获取用户列表"}),e.jsx("button",{onClick:w,disabled:c,className:"w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors",children:"获取文章列表"}),e.jsx("button",{onClick:N,disabled:c,className:"w-full px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors",children:"获取用户及文章"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3",children:"变更操作"}),e.jsx("div",{className:"space-y-2",children:e.jsx("button",{onClick:u,disabled:c,className:"w-full px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors",children:"创建新用户"})})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3",children:"状态信息"}),e.jsxs("div",{className:"space-y-2 text-sm",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"加载状态:"}),e.jsx("span",{className:c?"text-blue-600":"text-gray-600",children:c?"加载中...":"空闲"})]}),d&&e.jsxs("div",{className:"p-2 bg-red-50 border border-red-200 rounded text-red-600",children:["错误: ",d]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"用户数量:"}),e.jsx("span",{className:"font-medium",children:s.length})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"文章数量:"}),e.jsx("span",{className:"font-medium",children:n.length})]})]})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3",children:"查询历史"}),e.jsx("div",{className:"max-h-96 overflow-y-auto border rounded-lg",children:b.length>0?e.jsx("div",{className:"space-y-2 p-2",children:b.map((a,i)=>e.jsxs("div",{className:"p-2 bg-gray-50 rounded text-xs",children:[e.jsxs("div",{className:"flex justify-between items-center mb-1",children:[e.jsx("span",{className:"font-medium text-blue-600",children:a.query}),e.jsxs("span",{className:"text-gray-500",children:[a.duration,"ms"]})]}),e.jsx("div",{className:"text-gray-500 mb-1",children:new Date(a.timestamp).toLocaleTimeString()}),e.jsx("div",{className:"bg-white p-2 rounded border",children:a.result.errors?e.jsxs("div",{className:"text-red-600",children:["错误: ",a.result.errors[0].message]}):e.jsx("pre",{className:"overflow-x-auto",children:JSON.stringify(a.result.data,null,2)})})]},i))}):e.jsxs("div",{className:"p-4 text-center text-gray-500",children:["暂无查询历史",e.jsx("br",{}),e.jsx("small",{children:"执行GraphQL查询后显示历史记录"})]})})]})]}),e.jsxs("div",{className:"mt-6",children:[e.jsx("h4",{className:"font-medium mb-3",children:"数据展示"}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("h5",{className:"text-sm font-medium mb-2",children:"用户列表"}),e.jsx("div",{className:"max-h-48 overflow-y-auto border rounded",children:s.length>0?e.jsx("div",{className:"divide-y",children:s.map(a=>e.jsxs("div",{className:"p-3",children:[e.jsx("div",{className:"font-medium",children:a.name}),e.jsx("div",{className:"text-sm text-gray-600",children:a.email}),a.posts&&e.jsxs("div",{className:"text-xs text-blue-600 mt-1",children:[a.posts.length," 篇文章"]})]},a.id))}):e.jsx("div",{className:"p-4 text-center text-gray-500",children:"暂无用户数据"})})]}),e.jsxs("div",{children:[e.jsx("h5",{className:"text-sm font-medium mb-2",children:"文章列表"}),e.jsx("div",{className:"max-h-48 overflow-y-auto border rounded",children:n.length>0?e.jsx("div",{className:"divide-y",children:n.map(a=>e.jsxs("div",{className:"p-3",children:[e.jsx("div",{className:"font-medium",children:a.title}),e.jsxs("div",{className:"text-sm text-gray-600 mt-1",children:[a.content.substring(0,50),"..."]}),e.jsxs("div",{className:"text-xs text-blue-600 mt-1",children:["作者ID: ",a.authorId]})]},a.id))}):e.jsx("div",{className:"p-4 text-center text-gray-500",children:"暂无文章数据"})})]})]})]})]})})},I=()=>{const[m]=o.useState(()=>{const u=new G({endpoint:"http://localhost:4000/graphql",enableCache:!0,enableBatching:!0,retryAttempts:3,timeout:5e3});return u.addRequestInterceptor(a=>({...a,headers:{...a.headers,Authorization:"Bearer token123","X-Request-ID":Math.random().toString(36).substr(2,9)}})),u.addResponseInterceptor(a=>(a.errors&&console.warn("GraphQL Errors:",a.errors),a)),u}),[t,s]=o.useState({size:0,hitRate:0}),[r,n]=o.useState(!0),[h,c]=o.useState([]),[l,d]=o.useState(!1),[p,b]=o.useState([]),x=o.useRef(null),y=o.useCallback(async()=>{const u={query:`
        query GetUsers {
          users {
            id
            name
            email
          }
        }
      `},a=Date.now();try{const i=await m.query(u),f=Date.now()-a;b(q=>[...q.slice(-9),{operation:"GetUsers (First)",duration:f,cached:!1,timestamp:Date.now()}]);const g=Date.now();await m.query(u);const Q=Date.now()-g;b(q=>[...q.slice(-9),{operation:"GetUsers (Cached)",duration:Q,cached:!0,timestamp:Date.now()}]),s(m.getCacheStats())}catch(i){console.error("Cache test failed:",i)}},[m]),v=o.useCallback(async()=>{const u=[{query:'query GetUser1 { user(id: "1") { id name email } }',variables:{}},{query:'query GetUser2 { user(id: "2") { id name email } }',variables:{}},{query:'query GetUser3 { user(id: "3") { id name email } }',variables:{}}],a=Date.now();try{const i=u.map(g=>m.query(g));await Promise.all(i);const f=Date.now()-a;b(g=>[...g.slice(-9),{operation:`Batch Query (${r?"Enabled":"Disabled"})`,duration:f,cached:!1,timestamp:Date.now()}])}catch(i){console.error("Batch test failed:",i)}},[m,r]),w=o.useCallback(()=>{if(l)x.current&&(x.current(),x.current=null),d(!1),c([]);else{const u={query:`
          subscription OnUserUpdated {
            userUpdated {
              id
              name
              email
              updatedAt
            }
          }
        `};x.current=m.subscribe(u,a=>{c(i=>[...i.slice(-9),{...a.userUpdated,timestamp:Date.now()}])},a=>{console.error("Subscription error:",a),d(!1)}),d(!0)}},[m,l]),N=o.useCallback(()=>{m.clearCache(),s({size:0,hitRate:0}),b([])},[m]);return o.useEffect(()=>{if(l){const u=setInterval(()=>{const a={id:Math.random().toString(36).substr(2,9),name:`User ${Math.floor(Math.random()*1e3)}`,email:`user${Math.floor(Math.random()*1e3)}@example.com`,updatedAt:new Date().toISOString(),timestamp:Date.now()};c(i=>[...i.slice(-9),a])},2e3);return()=>clearInterval(u)}},[l]),o.useEffect(()=>()=>{x.current&&x.current()},[]),e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-sm border",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"高级GraphQL功能"}),e.jsxs("div",{className:"grid grid-cols-3 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3",children:"缓存管理"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("button",{onClick:y,className:"w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors",children:"测试缓存功能"}),e.jsx("button",{onClick:N,className:"w-full px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors",children:"清除缓存"})]}),e.jsxs("div",{className:"mt-3 p-3 bg-gray-50 rounded text-sm",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"缓存大小:"}),e.jsx("span",{className:"font-medium",children:t.size})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"命中率:"}),e.jsxs("span",{className:"font-medium",children:[(t.hitRate*100).toFixed(1),"%"]})]})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3",children:"批处理"}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("label",{className:"flex items-center space-x-2",children:[e.jsx("input",{type:"checkbox",checked:r,onChange:u=>n(u.target.checked),className:"rounded"}),e.jsx("span",{className:"text-sm",children:"启用批处理"})]}),e.jsx("button",{onClick:v,className:"w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors",children:"测试批处理"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3",children:"实时订阅"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("button",{onClick:w,className:`w-full px-4 py-2 text-white rounded transition-colors ${l?"bg-red-500 hover:bg-red-600":"bg-purple-500 hover:bg-purple-600"}`,children:l?"停止订阅":"开始订阅"}),e.jsxs("div",{className:"text-xs text-center",children:["状态:"," ",e.jsx("span",{className:l?"text-green-600":"text-gray-600",children:l?"活跃":"未连接"})]})]})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3",children:"性能指标"}),e.jsx("div",{className:"max-h-80 overflow-y-auto border rounded-lg",children:p.length>0?e.jsx("div",{className:"space-y-2 p-2",children:p.map((u,a)=>e.jsxs("div",{className:"p-2 bg-gray-50 rounded text-xs",children:[e.jsxs("div",{className:"flex justify-between items-center mb-1",children:[e.jsx("span",{className:"font-medium text-blue-600",children:u.operation}),e.jsxs("span",{className:`px-2 py-1 rounded text-xs ${u.cached?"bg-green-100 text-green-600":"bg-blue-100 text-blue-600"}`,children:[u.duration,"ms"]})]}),e.jsxs("div",{className:"flex justify-between text-gray-500",children:[e.jsx("span",{children:new Date(u.timestamp).toLocaleTimeString()}),u.cached&&e.jsx("span",{className:"text-green-600",children:"缓存命中"})]})]},a))}):e.jsxs("div",{className:"p-4 text-center text-gray-500",children:["暂无性能数据",e.jsx("br",{}),e.jsx("small",{children:"执行操作后显示性能指标"})]})})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3",children:"订阅数据流"}),e.jsx("div",{className:"max-h-80 overflow-y-auto border rounded-lg",children:h.length>0?e.jsx("div",{className:"space-y-2 p-2",children:h.map((u,a)=>e.jsxs("div",{className:"p-2 bg-purple-50 rounded text-xs",children:[e.jsx("div",{className:"font-medium text-purple-600",children:u.name}),e.jsx("div",{className:"text-gray-600",children:u.email}),e.jsx("div",{className:"text-gray-500 mt-1",children:new Date(u.timestamp).toLocaleTimeString()})]},a))}):e.jsxs("div",{className:"p-4 text-center text-gray-500",children:[l?"等待数据...":"订阅未激活",e.jsx("br",{}),e.jsx("small",{children:l?"实时数据将在此显示":"点击开始订阅按钮"})]})})]})]})]})})},R=()=>{var x,y,v,w,N,u;const[m]=o.useState(()=>({async fetchUsers(){return await new Promise(a=>setTimeout(a,200)),{users:[{id:"1",name:"Alice"},{id:"2",name:"Bob"}]}},async fetchPosts(){return await new Promise(a=>setTimeout(a,150)),{posts:[{id:"1",title:"Post 1"},{id:"2",title:"Post 2"}]}},async fetchComments(){return await new Promise(a=>setTimeout(a,100)),{comments:[{id:"1",content:"Comment 1"}]}}})),[t]=o.useState(()=>({async fetchAll(){return await new Promise(a=>setTimeout(a,250)),{users:[{id:"1",name:"Alice"},{id:"2",name:"Bob"}],posts:[{id:"1",title:"Post 1"},{id:"2",title:"Post 2"}],comments:[{id:"1",content:"Comment 1"}]}}})),[s,r]=o.useState(null),[n,h]=o.useState(null),[c,l]=o.useState(null),d=o.useCallback(async()=>{l("rest");const a=Date.now();try{const[i,f,g]=await Promise.all([m.fetchUsers(),m.fetchPosts(),m.fetchComments()]),Q=Date.now()-a;r({duration:Q,requests:3,data:{...i,...f,...g}})}catch(i){console.error("REST API test failed:",i)}finally{l(null)}},[m]),p=o.useCallback(async()=>{l("graphql");const a=Date.now();try{const i=await t.fetchAll(),f=Date.now()-a;h({duration:f,requests:1,data:i})}catch(i){console.error("GraphQL API test failed:",i)}finally{l(null)}},[t]),b=o.useCallback(async()=>{await d(),await new Promise(a=>setTimeout(a,500)),await p()},[d,p]);return e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-sm border",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"GraphQL vs REST API 性能对比"}),e.jsxs("div",{className:"grid grid-cols-3 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("h4",{className:"font-medium mb-3",children:"测试控制"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("button",{onClick:d,disabled:c==="rest",className:"w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors",children:c==="rest"?"测试中...":"测试 REST API"}),e.jsx("button",{onClick:p,disabled:c==="graphql",className:"w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors",children:c==="graphql"?"测试中...":"测试 GraphQL"}),e.jsx("button",{onClick:b,disabled:c!==null,className:"w-full px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors",children:c?"测试中...":"运行对比测试"})]}),e.jsxs("div",{className:"mt-4 p-3 bg-gray-50 rounded text-sm",children:[e.jsx("h5",{className:"font-medium mb-2",children:"测试说明"}),e.jsxs("ul",{className:"space-y-1 text-xs text-gray-600",children:[e.jsx("li",{children:"• REST API: 需要3个独立请求"}),e.jsx("li",{children:"• GraphQL: 只需1个请求"}),e.jsx("li",{children:"• 模拟网络延迟和数据处理"}),e.jsx("li",{children:"• 对比总耗时和请求数量"})]})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3",children:"REST API 结果"}),s?e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"p-3 bg-blue-50 rounded",children:[e.jsxs("div",{className:"flex justify-between text-sm",children:[e.jsx("span",{children:"总耗时:"}),e.jsxs("span",{className:"font-medium",children:[s.duration,"ms"]})]}),e.jsxs("div",{className:"flex justify-between text-sm",children:[e.jsx("span",{children:"请求数:"}),e.jsx("span",{className:"font-medium",children:s.requests})]}),e.jsxs("div",{className:"flex justify-between text-sm",children:[e.jsx("span",{children:"平均延迟:"}),e.jsxs("span",{className:"font-medium",children:[Math.round(s.duration/s.requests),"ms"]})]})]}),e.jsxs("div",{className:"text-xs",children:[e.jsx("h5",{className:"font-medium mb-2",children:"数据概览"}),e.jsxs("div",{className:"space-y-1 text-gray-600",children:[e.jsxs("div",{children:["用户: ",((x=s.data.users)==null?void 0:x.length)||0," 个"]}),e.jsxs("div",{children:["文章: ",((y=s.data.posts)==null?void 0:y.length)||0," 个"]}),e.jsxs("div",{children:["评论: ",((v=s.data.comments)==null?void 0:v.length)||0," 个"]})]})]})]}):e.jsx("div",{className:"p-4 text-center text-gray-500 border-2 border-dashed border-gray-200 rounded",children:"点击测试按钮查看结果"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3",children:"GraphQL 结果"}),n?e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"p-3 bg-green-50 rounded",children:[e.jsxs("div",{className:"flex justify-between text-sm",children:[e.jsx("span",{children:"总耗时:"}),e.jsxs("span",{className:"font-medium",children:[n.duration,"ms"]})]}),e.jsxs("div",{className:"flex justify-between text-sm",children:[e.jsx("span",{children:"请求数:"}),e.jsx("span",{className:"font-medium",children:n.requests})]}),e.jsxs("div",{className:"flex justify-between text-sm",children:[e.jsx("span",{children:"平均延迟:"}),e.jsxs("span",{className:"font-medium",children:[Math.round(n.duration/n.requests),"ms"]})]})]}),e.jsxs("div",{className:"text-xs",children:[e.jsx("h5",{className:"font-medium mb-2",children:"数据概览"}),e.jsxs("div",{className:"space-y-1 text-gray-600",children:[e.jsxs("div",{children:["用户: ",((w=n.data.users)==null?void 0:w.length)||0," 个"]}),e.jsxs("div",{children:["文章: ",((N=n.data.posts)==null?void 0:N.length)||0," 个"]}),e.jsxs("div",{children:["评论: ",((u=n.data.comments)==null?void 0:u.length)||0," 个"]})]})]}),s&&e.jsxs("div",{className:"mt-3 p-2 bg-green-100 rounded text-xs",children:[e.jsx("h5",{className:"font-medium text-green-800 mb-1",children:"性能提升"}),e.jsxs("div",{className:"text-green-700",children:[e.jsxs("div",{children:["耗时减少:"," ",((s.duration-n.duration)/s.duration*100).toFixed(1),"%"]}),e.jsxs("div",{children:["请求减少:"," ",s.requests-n.requests," 个"]})]})]})]}):e.jsx("div",{className:"p-4 text-center text-gray-500 border-2 border-dashed border-gray-200 rounded",children:"点击测试按钮查看结果"})]})]})]})})},E=()=>{const m={title:"GraphQL客户端实现",language:"typescript",code:`// GraphQL客户端配置
interface GraphQLClientConfig {
  endpoint: string;
  headers?: Record<string, string>;
  timeout?: number;
  retryAttempts?: number;
  retryDelay?: number;
  enableCache?: boolean;
  enableBatching?: boolean;
}

// GraphQL客户端
class GraphQLClient {
  private config: Required<GraphQLClientConfig>;
  private cache: Map<string, CacheItem> = new Map();
  private batchQueue: Array<BatchItem> = [];

  constructor(config: GraphQLClientConfig) {
    this.config = {
      timeout: 10000,
      retryAttempts: 3,
      retryDelay: 1000,
      enableCache: true,
      enableBatching: false,
      headers: {},
      ...config
    };
  }

  // 执行GraphQL查询
  async query<T = any>(query: GraphQLQuery): Promise<GraphQLResponse<T>> {
    const cacheKey = this.getCacheKey(query);

    // 检查缓存
    if (this.config.enableCache) {
      const cached = this.getFromCache<T>(cacheKey);
      if (cached) {
        return { data: cached };
      }
    }

    // 批处理模式
    if (this.config.enableBatching) {
      return this.addToBatch<T>(query);
    }

    // 直接执行
    const response = await this.executeQuery<T>(query);

    // 缓存结果
    if (this.config.enableCache && response.data && !response.errors) {
      this.setCache(cacheKey, response.data, 300000);
    }

    return response;
  }

  // 执行GraphQL变更
  async mutate<T = any>(mutation: GraphQLQuery): Promise<GraphQLResponse<T>> {
    const response = await this.executeQuery<T>(mutation);

    // 变更后清除相关缓存
    if (response.data && !response.errors) {
      this.clearRelatedCache(mutation);
    }

    return response;
  }

  // 执行GraphQL订阅
  subscribe<T = any>(
    subscription: GraphQLQuery,
    callback: (data: T) => void,
    errorCallback?: (error: Error) => void
  ): () => void {
    const ws = new WebSocket(this.config.endpoint.replace('http', 'ws'));

    ws.onopen = () => {
      ws.send(JSON.stringify({
        type: 'start',
        payload: subscription
      }));
    };

    ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      if (message.type === 'data' && message.payload?.data) {
        callback(message.payload.data);
      }
    };

    return () => ws.close();
  }
}`,highlights:[15,25,35,45,55,65,75]};return e.jsx(C,{title:"GraphQL集成",description:"GraphQL是一种用于API的查询语言和运行时，它提供了一种更高效、强大和灵活的数据获取方式。",overview:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"核心概念"}),e.jsxs("ul",{className:"space-y-2 text-gray-700",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"单一端点："}),"所有数据操作通过一个URL端点进行"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"类型系统："}),"强类型schema定义数据结构和操作"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"精确查询："}),"客户端可以精确指定需要的数据字段"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"实时订阅："}),"支持WebSocket实现数据的实时推送"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"内省能力："}),"可以查询schema本身的结构信息"]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"主要优势"}),e.jsxs("ul",{className:"space-y-2 text-gray-700",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"减少网络请求："}),"一次请求获取所有需要的数据"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"避免过度获取："}),"只返回客户端请求的字段"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"强类型安全："}),"编译时类型检查和运行时验证"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"版本无关："}),"通过字段废弃而非版本控制演进API"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"开发效率："}),"自动生成文档和客户端代码"]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"适用场景"}),e.jsxs("ul",{className:"space-y-2 text-gray-700",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"复杂数据关系："}),"需要聚合多个数据源的应用"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"移动应用："}),"网络带宽有限，需要精确控制数据传输"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"微服务架构："}),"统一多个服务的数据访问接口"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"实时应用："}),"需要数据推送和实时更新的场景"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"快速迭代："}),"前端需求变化频繁的项目"]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"注意事项"}),e.jsxs("ul",{className:"space-y-2 text-gray-700",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"学习成本："}),"需要理解GraphQL的概念和最佳实践"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"缓存复杂："}),"HTTP缓存策略需要特殊处理"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"查询复杂度："}),"需要防止恶意的深度嵌套查询"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"文件上传："}),"处理文件上传需要额外的规范"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"错误处理："}),"错误信息结构与REST API不同"]})]})]})]}),examples:[{title:"基础GraphQL操作",component:e.jsx(P,{}),description:"演示GraphQL的基本查询、变更和数据展示功能。",observationPoints:['点击"获取用户列表"按钮执行GraphQL查询，观察返回的用户数据','点击"获取用户及文章"按钮执行关联查询，一次请求获取用户和其文章数据','点击"创建新用户"按钮执行GraphQL变更操作，观察数据的实时更新',"查看右侧的查询历史，了解每个操作的执行时间和返回结果"],keyPoints:["GraphQL查询可以精确指定需要的字段，避免数据冗余","关联查询可以在一次请求中获取多个相关实体的数据","变更操作会自动触发相关数据的更新和缓存清理","查询历史记录帮助监控API的性能和错误情况"],commonTraps:["查询字段过多导致性能问题","忽略GraphQL错误处理机制","缓存策略配置不当","变更操作后未及时更新本地状态"],solutions:["使用字段选择器精确控制查询字段","实现统一的错误处理和用户提示","配置合适的缓存TTL和清理策略","变更后自动刷新相关查询或更新缓存"],importantTips:["左侧的操作按钮展示了GraphQL的三种基本操作类型：查询、变更和订阅","右侧的查询历史显示了每个操作的详细信息，包括执行时间和返回数据","数据展示区域实时反映了GraphQL操作的结果，展示了数据的结构化特性"],codeExample:m},{title:"高级GraphQL功能",component:e.jsx(I,{}),description:"演示GraphQL的缓存、批处理、订阅等高级功能。",observationPoints:['点击"测试缓存功能"按钮，观察第一次查询和缓存命中的性能差异','启用/禁用批处理功能，点击"测试批处理"观察请求合并效果','点击"开始订阅"按钮，观察实时数据流的推送效果',"查看性能指标面板，了解各种操作的执行时间和缓存状态"],keyPoints:["GraphQL缓存可以显著提升重复查询的性能","批处理功能可以将多个查询合并为单个请求","订阅功能支持实时数据推送和状态同步","性能监控帮助识别和优化慢查询"],commonTraps:["缓存键生成不准确导致缓存失效","批处理延迟设置不当影响用户体验","订阅连接未正确关闭导致内存泄漏","性能监控数据过多影响应用性能"],solutions:["使用标准化的缓存键生成算法","根据应用场景调整批处理延迟时间","在组件卸载时正确清理订阅连接","限制性能数据的存储数量和时间"],importantTips:["缓存功能展示了GraphQL客户端的智能缓存机制，可以大幅提升应用性能","批处理功能在高并发场景下特别有用，可以减少服务器负载","订阅功能实现了真正的实时应用，数据变化会立即推送到客户端"],codeExample:{title:"高级GraphQL功能实现",language:"typescript",code:`// GraphQL高级功能客户端
class AdvancedGraphQLClient extends GraphQLClient {
  private subscriptions: Map<string, WebSocket> = new Map();
  private performanceMetrics: Array<{ operation: string; duration: number; timestamp: number }> = [];

  // 智能缓存管理
  async queryWithCache<T>(query: GraphQLQuery, ttl: number = 300000): Promise<GraphQLResponse<T>> {
    const cacheKey = this.getCacheKey(query);
    const cached = this.getFromCache<T>(cacheKey);

    if (cached) {
      console.log('缓存命中:', cacheKey);
      return { data: cached };
    }

    const startTime = performance.now();
    const response = await this.executeQuery<T>(query);
    const duration = performance.now() - startTime;

    if (response.data) {
      this.setCache(cacheKey, response.data, ttl);
    }

    this.recordPerformance('query', duration);
    return response;
  }

  // 批处理查询管理
  async batchQueries(queries: GraphQLQuery[]): Promise<GraphQLResponse[]> {
    const startTime = performance.now();
    const batchQuery = {
      query: queries.map((q, index) => \`query_\${index}: \${q.query}\`).join('\\n'),
      variables: queries.reduce((acc, q, index) => ({ ...acc, [\`vars_\${index}\`]: q.variables }), {})
    };

    const response = await this.executeQuery(batchQuery);
    const duration = performance.now() - startTime;

    this.recordPerformance('batch', duration);
    return queries.map((_, index) => ({ data: response.data?.[\`query_\${index}\`] }));
  }

  // 实时订阅管理
  subscribeToUpdates<T>(
    subscription: GraphQLQuery,
    callback: (data: T) => void
  ): () => void {
    const subscriptionId = Math.random().toString(36).substr(2, 9);
    const ws = new WebSocket('ws://localhost:4000/graphql');

    ws.onopen = () => {
      ws.send(JSON.stringify({ type: 'start', payload: subscription, id: subscriptionId }));
    };

    ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      if (message.type === 'data' && message.id === subscriptionId) {
        callback(message.payload.data);
      }
    };

    this.subscriptions.set(subscriptionId, ws);

    return () => {
      ws.close();
      this.subscriptions.delete(subscriptionId);
    };
  }

  // 性能指标记录
  private recordPerformance(operation: string, duration: number): void {
    this.performanceMetrics.push({
      operation,
      duration,
      timestamp: Date.now()
    });

    // 保持最近100条记录
    if (this.performanceMetrics.length > 100) {
      this.performanceMetrics.shift();
    }
  }

  getPerformanceStats(): { avgDuration: number; totalQueries: number } {
    const totalDuration = this.performanceMetrics.reduce((sum, metric) => sum + metric.duration, 0);
    return {
      avgDuration: totalDuration / this.performanceMetrics.length || 0,
      totalQueries: this.performanceMetrics.length
    };
  }
}`,highlights:[2,8,28,45,62,75]}},{title:"GraphQL vs REST 性能对比",component:e.jsx(R,{}),description:"对比GraphQL和REST API在数据获取方面的性能差异。",observationPoints:['点击"测试 REST API"按钮，观察多个REST请求的总耗时','点击"测试 GraphQL"按钮，观察单个GraphQL请求的耗时','点击"运行对比测试"按钮，自动执行两种方式的性能对比',"查看性能提升数据，了解GraphQL相对于REST的优势"],keyPoints:["GraphQL通过单个请求获取多种数据，减少网络往返","REST API需要多个请求分别获取不同类型的数据","GraphQL的性能优势在复杂数据关系场景下更加明显","网络延迟是影响性能差异的主要因素"],commonTraps:["过度复杂的GraphQL查询反而影响性能","忽略REST API的缓存和优化策略","不考虑服务器端的查询复杂度限制","盲目选择技术方案而不考虑具体场景"],solutions:["合理设计GraphQL查询的深度和复杂度","在REST API中实现适当的缓存和批量接口","在GraphQL服务器端实现查询复杂度分析","根据项目需求和团队能力选择合适的技术方案"],importantTips:["性能对比展示了GraphQL在减少网络请求方面的显著优势","实际项目中的性能差异会因网络环境和数据复杂度而有所不同","GraphQL的优势在移动网络和复杂数据关系场景下更加突出"],codeExample:{title:"GraphQL vs REST 性能对比实现",language:"typescript",code:`// 性能对比测试工具
class APIPerformanceComparator {
  private restClient: RESTClient;
  private graphqlClient: GraphQLClient;
  private metrics: { rest: number[]; graphql: number[] } = { rest: [], graphql: [] };

  constructor(restEndpoint: string, graphqlEndpoint: string) {
    this.restClient = new RESTClient(restEndpoint);
    this.graphqlClient = new GraphQLClient({ endpoint: graphqlEndpoint });
  }

  // REST API多请求测试
  async testRESTPerformance(): Promise<{ duration: number; requests: number }> {
    const startTime = performance.now();

    // 需要多个请求获取完整数据
    const [users, posts, comments] = await Promise.all([
      this.restClient.get('/users'),
      this.restClient.get('/posts'),
      this.restClient.get('/comments')
    ]);

    // 获取用户详细信息（需要额外请求）
    const userDetails = await Promise.all(
      users.data.map((user: any) => this.restClient.get(\`/users/\${user.id}/profile\`))
    );

    const duration = performance.now() - startTime;
    this.metrics.rest.push(duration);

    return {
      duration,
      requests: 3 + users.data.length // 基础请求 + 用户详情请求
    };
  }

  // GraphQL单请求测试
  async testGraphQLPerformance(): Promise<{ duration: number; requests: number }> {
    const startTime = performance.now();

    // 单个请求获取所有需要的数据
    const query = {
      query: \`
        query GetAllData {
          users {
            id
            name
            email
            profile {
              avatar
              bio
            }
            posts {
              id
              title
              comments {
                id
                content
                author
              }
            }
          }
        }
      \`
    };

    const response = await this.graphqlClient.query(query);
    const duration = performance.now() - startTime;
    this.metrics.graphql.push(duration);

    return {
      duration,
      requests: 1 // 只需要一个请求
    };
  }

  // 运行对比测试
  async runComparison(iterations: number = 10): Promise<{
    rest: { avg: number; min: number; max: number; requests: number };
    graphql: { avg: number; min: number; max: number; requests: number };
    improvement: number;
  }> {
    console.log(\`开始性能对比测试，迭代次数: \${iterations}\`);

    const restResults = [];
    const graphqlResults = [];

    for (let i = 0; i < iterations; i++) {
      const restResult = await this.testRESTPerformance();
      const graphqlResult = await this.testGraphQLPerformance();

      restResults.push(restResult);
      graphqlResults.push(graphqlResult);

      // 添加延迟避免请求过于频繁
      await new Promise(resolve => setTimeout(resolve, 100));
    }

    const restDurations = restResults.map(r => r.duration);
    const graphqlDurations = graphqlResults.map(r => r.duration);

    const restAvg = restDurations.reduce((a, b) => a + b, 0) / restDurations.length;
    const graphqlAvg = graphqlDurations.reduce((a, b) => a + b, 0) / graphqlDurations.length;

    return {
      rest: {
        avg: restAvg,
        min: Math.min(...restDurations),
        max: Math.max(...restDurations),
        requests: restResults[0].requests
      },
      graphql: {
        avg: graphqlAvg,
        min: Math.min(...graphqlDurations),
        max: Math.max(...graphqlDurations),
        requests: graphqlResults[0].requests
      },
      improvement: ((restAvg - graphqlAvg) / restAvg) * 100
    };
  }
}`,highlights:[2,13,35,67,85,95]}}],tutorial:{concepts:["GraphQL是一种查询语言和运行时，提供了更灵活的数据获取方式","Schema定义了数据结构和可用操作，是GraphQL的核心概念","Query用于读取数据，Mutation用于修改数据，Subscription用于实时数据","类型系统确保了数据的一致性和API的可预测性","解析器(Resolver)负责获取字段对应的实际数据","内省(Introspection)允许客户端查询Schema的结构信息"],steps:["定义GraphQL Schema，包括类型、查询、变更和订阅","实现解析器函数，处理各种字段的数据获取逻辑","配置GraphQL服务器，设置中间件和安全策略","创建GraphQL客户端，配置缓存和网络策略","编写GraphQL查询和变更，实现业务功能","实现订阅功能，支持实时数据推送","添加错误处理和性能监控机制","优化查询性能，防止N+1问题和恶意查询"],tips:["使用GraphQL工具如GraphiQL或Apollo Studio进行开发和调试","合理设计Schema，避免过度嵌套和循环引用","实现DataLoader等工具解决N+1查询问题","使用查询复杂度分析防止恶意的深度查询","配置适当的缓存策略，提升查询性能","实现统一的错误处理和日志记录机制","使用TypeScript等工具提供类型安全保障","定期监控和优化GraphQL查询的性能表现"]},interview:{questions:[{question:"GraphQL相比REST API有哪些优势？",answer:"GraphQL的主要优势包括：1) 单一端点，减少API版本管理复杂度；2) 精确查询，客户端可以指定需要的字段，避免过度获取；3) 强类型系统，提供编译时类型检查；4) 实时订阅，支持数据推送；5) 内省能力，API自文档化；6) 减少网络请求，一次查询获取多种相关数据。"},{question:"GraphQL的N+1查询问题是什么？如何解决？",answer:"N+1问题是指在获取列表数据时，先执行1次查询获取列表，然后为每个列表项执行N次查询获取关联数据。解决方案包括：1) 使用DataLoader进行批量加载和缓存；2) 在解析器中实现批量查询逻辑；3) 使用JOIN查询一次性获取所有数据；4) 实现查询优化器，自动合并相似查询。"},{question:"GraphQL的缓存策略有哪些？",answer:"GraphQL缓存策略包括：1) 查询级缓存，基于查询字符串和变量进行缓存；2) 字段级缓存，缓存单个字段的解析结果；3) 对象级缓存，基于对象ID进行缓存；4) 持久化查询，预编译查询减少传输大小；5) 客户端缓存，如Apollo Client的InMemoryCache；6) CDN缓存，对于GET请求的GraphQL查询。"},{question:"GraphQL订阅是如何实现的？",answer:"GraphQL订阅通常基于WebSocket实现：1) 客户端通过WebSocket连接发送订阅请求；2) 服务器维护订阅列表和对应的客户端连接；3) 当数据发生变化时，服务器执行相关的订阅解析器；4) 将变化的数据推送给所有相关的订阅客户端；5) 客户端接收数据并更新本地状态。也可以使用Server-Sent Events或其他实时通信协议。"},{question:"GraphQL的安全性考虑有哪些？",answer:"GraphQL安全性考虑包括：1) 查询深度限制，防止恶意的深度嵌套查询；2) 查询复杂度分析，限制查询的计算成本；3) 速率限制，防止查询频率过高；4) 字段级权限控制，限制敏感字段的访问；5) 查询白名单，只允许预定义的查询；6) 输入验证，防止注入攻击；7) 错误信息过滤，避免泄露敏感信息。"}],keyPoints:["GraphQL提供了比REST更灵活和高效的数据获取方式","强类型系统是GraphQL的核心优势，提供了更好的开发体验","缓存策略需要根据GraphQL的特点进行特殊设计","订阅功能使GraphQL成为构建实时应用的理想选择","安全性和性能优化是GraphQL生产环境部署的重要考虑","工具生态系统丰富，有助于提升开发效率和代码质量"]},bestPractices:{dos:["设计清晰的Schema结构，遵循GraphQL最佳实践","使用DataLoader等工具解决N+1查询问题","实现适当的缓存策略，提升查询性能","添加查询复杂度分析，防止恶意查询","使用TypeScript提供类型安全保障","实现统一的错误处理和日志记录","定期监控和优化GraphQL查询性能","使用GraphQL工具进行开发和调试"],donts:["不要设计过度复杂的Schema结构","不要忽略GraphQL特有的安全风险","不要在客户端直接拼接GraphQL查询字符串","不要忽略订阅连接的生命周期管理","不要盲目使用GraphQL而不考虑项目需求","不要忽略GraphQL服务器的性能优化","不要在生产环境开启内省功能","不要忽略GraphQL查询的版本管理"],patterns:["使用Fragment复用查询片段，提高代码复用性","实现查询构建器模式，动态生成GraphQL查询","使用订阅模式实现实时数据同步","实现缓存失效模式，确保数据一致性","使用批量加载模式优化数据获取性能","实现错误边界模式，优雅处理GraphQL错误","使用持久化查询模式，减少网络传输","实现字段级权限控制模式，保护敏感数据"]}})};export{E as default};
