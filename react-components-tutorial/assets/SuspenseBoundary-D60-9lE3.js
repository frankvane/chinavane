import{R as u,r as n,j as e}from"./index-CbVlrJMN.js";import{C as L}from"./ComponentTemplate-BnvJNrWP.js";const k=s=>new Promise(r=>{setTimeout(()=>{r({id:s,name:`用户${s}`,email:`user${s}@example.com`})},Math.random()*2e3+1e3)}),I=s=>new Promise(r=>{setTimeout(()=>{r({id:s,title:`文章标题 ${s}`,content:`这是文章 ${s} 的内容。Lorem ipsum dolor sit amet, consectetur adipiscing elit.`})},Math.random()*1500+500)}),T=({userId:s})=>{const[r,o]=n.useState(null),[i,a]=n.useState(!0);return u.useEffect(()=>{k(s).then(c=>{o(c),a(!1)})},[s]),i?e.jsx("div",{className:"p-4 bg-gray-50 border border-gray-200 rounded-lg",children:e.jsxs("div",{className:"animate-pulse",children:[e.jsx("div",{className:"h-4 bg-gray-300 rounded w-3/4 mb-2"}),e.jsx("div",{className:"h-3 bg-gray-300 rounded w-1/2 mb-1"}),e.jsx("div",{className:"h-3 bg-gray-300 rounded w-2/3"})]})}):e.jsxs("div",{className:"p-4 bg-blue-50 border border-blue-200 rounded-lg",children:[e.jsx("h3",{className:"text-lg font-semibold text-blue-800 mb-2",children:"用户资料"}),e.jsxs("div",{className:"space-y-2 text-blue-700",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"ID:"})," ",r.id]}),e.jsxs("p",{children:[e.jsx("strong",{children:"姓名:"})," ",r.name]}),e.jsxs("p",{children:[e.jsx("strong",{children:"邮箱:"})," ",r.email]})]})]})},D=({postId:s})=>{const[r,o]=n.useState(null),[i,a]=n.useState(!0);return u.useEffect(()=>{I(s).then(c=>{o(c),a(!1)})},[s]),i?e.jsx("div",{className:"p-4 bg-gray-50 border border-gray-200 rounded-lg",children:e.jsxs("div",{className:"animate-pulse",children:[e.jsx("div",{className:"h-4 bg-gray-300 rounded w-3/4 mb-2"}),e.jsx("div",{className:"h-3 bg-gray-300 rounded w-full mb-1"}),e.jsx("div",{className:"h-3 bg-gray-300 rounded w-5/6"})]})}):e.jsxs("div",{className:"p-4 bg-green-50 border border-green-200 rounded-lg",children:[e.jsx("h3",{className:"text-lg font-semibold text-green-800 mb-2",children:"文章详情"}),e.jsxs("div",{className:"space-y-2 text-green-700",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"ID:"})," ",r.id]}),e.jsxs("p",{children:[e.jsx("strong",{children:"标题:"})," ",r.title]}),e.jsxs("p",{children:[e.jsx("strong",{children:"内容:"})," ",r.content]})]})]})},N=u.lazy(()=>new Promise(s=>{setTimeout(()=>{s({default:T})},1e3)})),U=u.lazy(()=>new Promise(s=>{setTimeout(()=>{s({default:D})},1e3)})),h=({message:s="加载中..."})=>e.jsx("div",{className:"flex items-center justify-center p-8",children:e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsx("div",{className:"animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"}),e.jsx("span",{className:"text-blue-600 font-medium",children:s})]})}),$=()=>e.jsxs("div",{className:"p-4 bg-gray-50 border border-gray-200 rounded-lg animate-pulse",children:[e.jsx("div",{className:"h-4 bg-gray-300 rounded w-3/4 mb-3"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"h-3 bg-gray-300 rounded w-full"}),e.jsx("div",{className:"h-3 bg-gray-300 rounded w-5/6"}),e.jsx("div",{className:"h-3 bg-gray-300 rounded w-4/6"})]})]}),z=({progress:s=0})=>e.jsxs("div",{className:"p-6 bg-purple-50 border border-purple-200 rounded-lg",children:[e.jsxs("div",{className:"text-center mb-4",children:[e.jsx("div",{className:"text-lg font-semibold text-purple-800",children:"加载中..."}),e.jsx("div",{className:"text-sm text-purple-600 mt-1",children:"请稍候，正在获取数据"})]}),e.jsx("div",{className:"w-full bg-purple-200 rounded-full h-2",children:e.jsx("div",{className:"bg-purple-600 h-2 rounded-full transition-all duration-300",style:{width:`${s}%`}})}),e.jsxs("div",{className:"text-center mt-2 text-sm text-purple-600",children:[s,"%"]})]}),E=()=>{const[s,r]=n.useState(!1),[o,i]=n.useState(1);return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsx("button",{onClick:()=>r(!s),className:`px-4 py-2 rounded text-white ${s?"bg-red-600 hover:bg-red-700":"bg-blue-600 hover:bg-blue-700"}`,children:s?"隐藏用户":"显示用户"}),e.jsx("select",{value:o,onChange:a=>i(Number(a.target.value)),className:"px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500",children:[1,2,3,4,5].map(a=>e.jsxs("option",{value:a,children:["用户 ",a]},a))})]}),s&&e.jsx(n.Suspense,{fallback:e.jsx(h,{message:"正在加载用户资料..."}),children:e.jsx(N,{userId:o})})]})},M=()=>{const[s,r]=n.useState(!1),[o,i]=n.useState(3);return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsx("button",{onClick:()=>r(!s),className:`px-4 py-2 rounded text-white ${s?"bg-red-600 hover:bg-red-700":"bg-green-600 hover:bg-green-700"}`,children:s?"隐藏内容":"显示内容"}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("label",{className:"text-sm text-gray-600",children:"文章数量:"}),e.jsx("input",{type:"range",min:"1",max:"5",value:o,onChange:a=>i(Number(a.target.value)),className:"w-20"}),e.jsx("span",{className:"text-sm text-gray-600",children:o})]})]}),s&&e.jsxs("div",{className:"border border-gray-200 rounded-lg p-4",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800 mb-4",children:"嵌套Suspense示例"}),e.jsx(n.Suspense,{fallback:e.jsx($,{}),children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-3 bg-yellow-50 border border-yellow-200 rounded",children:[e.jsx("h4",{className:"font-semibold text-yellow-800 mb-2",children:"外层组件已加载"}),e.jsx(n.Suspense,{fallback:e.jsx(h,{message:"正在加载文章列表..."}),children:e.jsx(U,{count:o})})]}),e.jsx(n.Suspense,{fallback:e.jsx(h,{message:"正在加载用户信息..."}),children:e.jsx(N,{userId:Math.floor(Math.random()*5)+1})})]})})]})]})},q=()=>{const[s,r]=n.useState(""),[o,i]=n.useState(!1),[a,c]=n.useTransition(),j=n.useDeferredValue(s),[w,f]=n.useState(0),P=({query:t})=>{const[v,g]=n.useState([]),[y,m]=n.useState(!0);if(u.useEffect(()=>{if(!t.trim()){g([]),m(!1);return}m(!0);const l=new Promise(x=>{let d=0;const R=setInterval(()=>{d+=10,f(d),d>=100&&(clearInterval(R),x(Array.from({length:Math.floor(Math.random()*5)+1},(Q,S)=>({id:S+1,title:`${t} 相关结果 ${S+1}`,description:`这是关于 "${t}" 的搜索结果描述`}))))},100)});if(y)throw l},[t]),u.useEffect(()=>{if(!t.trim()){g([]),m(!1);return}const l=setTimeout(()=>{g(Array.from({length:Math.floor(Math.random()*5)+1},(x,d)=>({id:d+1,title:`${t} 相关结果 ${d+1}`,description:`这是关于 "${t}" 的搜索结果描述`}))),m(!1),f(0)},1500);return()=>clearTimeout(l)},[t]),y&&t.trim())throw new Promise(l=>{setTimeout(()=>{l(Array.from({length:Math.floor(Math.random()*5)+1},(x,d)=>({id:d+1,title:`${t} 相关结果 ${d+1}`,description:`这是关于 "${t}" 的搜索结果描述`})))},1500)});return t.trim()?e.jsxs("div",{className:"space-y-3",children:[e.jsxs("h4",{className:"font-semibold text-gray-800",children:["搜索结果 (共",v.length,"条)"]}),v.map(l=>e.jsxs("div",{className:"p-3 bg-indigo-50 border border-indigo-200 rounded",children:[e.jsx("h5",{className:"font-semibold text-indigo-800",children:l.title}),e.jsx("p",{className:"text-indigo-600 text-sm mt-1",children:l.description})]},l.id))]}):e.jsx("div",{className:"p-4 text-center text-gray-500",children:"请输入搜索关键词"})},C=t=>{r(t),c(()=>{i(!!t.trim())})};return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"搜索关键词 (使用useTransition和useDeferredValue)"}),e.jsx("input",{type:"text",value:s,onChange:t=>C(t.target.value),placeholder:"输入搜索关键词...",className:"w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"}),a&&e.jsx("div",{className:"text-sm text-indigo-600",children:"🔄 正在处理搜索请求..."})]}),o&&e.jsx(n.Suspense,{fallback:e.jsx(z,{progress:w}),children:e.jsx(P,{query:j})})]})},V=`import React, { Suspense, useState } from "react";
import { LazyUserProfile } from "./LazyComponents";
import { CustomSpinner } from "./LoadingComponents";

// 基础Suspense示例
export const BasicSuspenseExample: React.FC = () => {
  const [showUser, setShowUser] = useState(false);
  const [userId, setUserId] = useState(1);

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-4">
        <button
          onClick={() => setShowUser(!showUser)}
          className={\`px-4 py-2 rounded text-white \${
            showUser
              ? "bg-red-600 hover:bg-red-700"
              : "bg-blue-600 hover:bg-blue-700"
          }\`}
        >
          {showUser ? "隐藏用户" : "显示用户"}
        </button>
        <select
          value={userId}
          onChange={(e) => setUserId(Number(e.target.value))}
          className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {[1, 2, 3, 4, 5].map((id) => (
            <option key={id} value={id}>
              用户 {id}
            </option>
          ))}
        </select>
      </div>

      {showUser && (
        <Suspense fallback={<CustomSpinner message="正在加载用户资料..." />}>
          <LazyUserProfile userId={userId} />
        </Suspense>
      )}
    </div>
  );
};`,F=`import React, { Suspense, useState, useTransition, useDeferredValue } from "react";
import { ProgressLoader } from "./LoadingComponents";

// 并发特性示例
export const ConcurrentSuspenseExample: React.FC = () => {
  const [query, setQuery] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [isPending, startTransition] = useTransition();
  const deferredQuery = useDeferredValue(query);
  const [progress, setProgress] = useState(0);

  // 模拟搜索结果组件
  const SearchResults: React.FC<{ query: string }> = ({ query }) => {
    const [results, setResults] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    React.useEffect(() => {
      if (!query.trim()) {
        setResults([]);
        setLoading(false);
        return;
      }

      setLoading(true);
      const searchPromise = new Promise<any[]>((resolve) => {
        let currentProgress = 0;
        const interval = setInterval(() => {
          currentProgress += 10;
          setProgress(currentProgress);
          if (currentProgress >= 100) {
            clearInterval(interval);
            resolve(
              Array.from(
                { length: Math.floor(Math.random() * 5) + 1 },
                (_, i) => ({
                  id: i + 1,
                  title: \`\${query} 相关结果 \${i + 1}\`,
                  description: \`这是关于 "\${query}" 的搜索结果描述\`,
                })
              )
            );
          }
        }, 100);
      });

      if (loading) {
        throw searchPromise;
      }
    }, [query]);

    React.useEffect(() => {
      if (!query.trim()) {
        setResults([]);
        setLoading(false);
        return;
      }

      const timer = setTimeout(() => {
        setResults(
          Array.from({ length: Math.floor(Math.random() * 5) + 1 }, (_, i) => ({
            id: i + 1,
            title: \`\${query} 相关结果 \${i + 1}\`,
            description: \`这是关于 "\${query}" 的搜索结果描述\`,
          }))
        );
        setLoading(false);
        setProgress(0);
      }, 1500);

      return () => clearTimeout(timer);
    }, [query]);

    if (loading && query.trim()) {
      throw new Promise((resolve) => {
        setTimeout(() => {
          resolve(
            Array.from(
              { length: Math.floor(Math.random() * 5) + 1 },
              (_, i) => ({
                id: i + 1,
                title: \`\${query} 相关结果 \${i + 1}\`,
                description: \`这是关于 "\${query}" 的搜索结果描述\`,
              })
            )
          );
        }, 1500);
      });
    }

    if (!query.trim()) {
      return (
        <div className="p-4 text-center text-gray-500">请输入搜索关键词</div>
      );
    }

    return (
      <div className="space-y-3">
        <h4 className="font-semibold text-gray-800">
          搜索结果 (共{results.length}条)
        </h4>
        {results.map((result) => (
          <div
            key={result.id}
            className="p-3 bg-indigo-50 border border-indigo-200 rounded"
          >
            <h5 className="font-semibold text-indigo-800">{result.title}</h5>
            <p className="text-indigo-600 text-sm mt-1">{result.description}</p>
          </div>
        ))}
      </div>
    );
  };

  const handleSearch = (value: string) => {
    setQuery(value);
    startTransition(() => {
      setShowResults(!!value.trim());
    });
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          搜索关键词 (使用useTransition和useDeferredValue)
        </label>
        <input
          type="text"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="输入搜索关键词..."
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        {isPending && (
          <div className="text-sm text-indigo-600">🔄 正在处理搜索请求...</div>
        )}
      </div>

      {showResults && (
        <Suspense fallback={<ProgressLoader progress={progress} />}>
          <SearchResults query={deferredQuery} />
        </Suspense>
      )}
    </div>
  );
};`,b=`import React, { useState } from "react";\r
import { fetchUserData, fetchPostData } from "./data-fetchers";\r
\r
// 用户资料组件\r
const UserProfile: React.FC<{ userId: number }> = ({ userId }) => {\r
  const [userData, setUserData] = useState<any>(null);\r
  const [loading, setLoading] = useState(true);\r
\r
  React.useEffect(() => {\r
    fetchUserData(userId).then((data) => {\r
      setUserData(data);\r
      setLoading(false);\r
    });\r
  }, [userId]);\r
\r
  if (loading) {\r
    return (\r
      <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">\r
        <div className="animate-pulse">\r
          <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>\r
          <div className="h-3 bg-gray-300 rounded w-1/2 mb-1"></div>\r
          <div className="h-3 bg-gray-300 rounded w-2/3"></div>\r
        </div>\r
      </div>\r
    );\r
  }\r
\r
  return (\r
    <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">\r
      <h3 className="text-lg font-semibold text-blue-800 mb-2">\r
        用户资料\r
      </h3>\r
      <div className="space-y-2 text-blue-700">\r
        <p>\r
          <strong>ID:</strong> {userData.id}\r
        </p>\r
        <p>\r
          <strong>姓名:</strong> {userData.name}\r
        </p>\r
        <p>\r
          <strong>邮箱:</strong> {userData.email}\r
        </p>\r
      </div>\r
    </div>\r
  );\r
};\r
\r
// 文章列表组件\r
const PostList: React.FC<{ postId: number }> = ({ postId }) => {\r
  const [postData, setPostData] = useState<any>(null);\r
  const [loading, setLoading] = useState(true);\r
\r
  React.useEffect(() => {\r
    fetchPostData(postId).then((data) => {\r
      setPostData(data);\r
      setLoading(false);\r
    });\r
  }, [postId]);\r
\r
  if (loading) {\r
    return (\r
      <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">\r
        <div className="animate-pulse">\r
          <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>\r
          <div className="h-3 bg-gray-300 rounded w-full mb-1"></div>\r
          <div className="h-3 bg-gray-300 rounded w-5/6"></div>\r
        </div>\r
      </div>\r
    );\r
  }\r
\r
  return (\r
    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">\r
      <h3 className="text-lg font-semibold text-green-800 mb-2">\r
        文章详情\r
      </h3>\r
      <div className="space-y-2 text-green-700">\r
        <p>\r
          <strong>ID:</strong> {postData.id}\r
        </p>\r
        <p>\r
          <strong>标题:</strong> {postData.title}\r
        </p>\r
        <p>\r
          <strong>内容:</strong> {postData.content}\r
        </p>\r
      </div>\r
    </div>\r
  );\r
};\r
\r
// 懒加载组件\r
export const LazyUserProfile = React.lazy(() => {\r
  return new Promise<{ default: React.ComponentType<{ userId: number }> }>(\r
    (resolve) => {\r
      setTimeout(() => {\r
        resolve({\r
          default: UserProfile,\r
        });\r
      }, 1000); // 1秒延迟模拟代码分割加载\r
    }\r
  );\r
});\r
\r
export const LazyPostList = React.lazy(() => {\r
  return new Promise<{ default: React.ComponentType<{ postId: number }> }>(\r
    (resolve) => {\r
      setTimeout(() => {\r
        resolve({\r
          default: PostList,\r
        });\r
      }, 1000); // 1秒加载延迟\r
    }\r
  );\r
});`,p=`import React from "react";

// 自定义加载组件
export const CustomSpinner: React.FC<{ message?: string }> = ({
  message = "加载中...",
}) => (
  <div className="flex items-center justify-center p-8">
    <div className="flex items-center space-x-3">
      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
      <span className="text-blue-600 font-medium">{message}</span>
    </div>
  </div>
);

export const SkeletonLoader: React.FC = () => (
  <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg animate-pulse">
    <div className="h-4 bg-gray-300 rounded w-3/4 mb-3"></div>
    <div className="space-y-2">
      <div className="h-3 bg-gray-300 rounded w-full"></div>
      <div className="h-3 bg-gray-300 rounded w-5/6"></div>
      <div className="h-3 bg-gray-300 rounded w-4/6"></div>
    </div>
  </div>
);

export const ProgressLoader: React.FC<{ progress?: number }> = ({ progress = 0 }) => (
  <div className="p-6 bg-purple-50 border border-purple-200 rounded-lg">
    <div className="text-center mb-4">
      <div className="text-lg font-semibold text-purple-800">加载中...</div>
      <div className="text-sm text-purple-600 mt-1">请稍候，正在获取数据</div>
    </div>
    <div className="w-full bg-purple-200 rounded-full h-2">
      <div
        className="bg-purple-600 h-2 rounded-full transition-all duration-300"
        style={{ width: \`\${progress}%\` }}
      ></div>
    </div>
    <div className="text-center mt-2 text-sm text-purple-600">{progress}%</div>
  </div>
);`,B=`import React, { Suspense, useState } from "react";
import { LazyUserProfile, LazyPostList } from "./LazyComponents";
import { CustomSpinner, SkeletonLoader } from "./LoadingComponents";

// 嵌套Suspense示例
export const NestedSuspenseExample: React.FC = () => {
  const [showContent, setShowContent] = useState(false);
  const [postCount, setPostCount] = useState(3);

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-4">
        <button
          onClick={() => setShowContent(!showContent)}
          className={\`px-4 py-2 rounded text-white \${
            showContent
              ? "bg-red-600 hover:bg-red-700"
              : "bg-green-600 hover:bg-green-700"
          }\`}
        >
          {showContent ? "隐藏内容" : "显示内容"}
        </button>
        <div className="flex items-center space-x-2">
          <label className="text-sm text-gray-600">文章数量:</label>
          <input
            type="range"
            min="1"
            max="5"
            value={postCount}
            onChange={(e) => setPostCount(Number(e.target.value))}
            className="w-20"
          />
          <span className="text-sm text-gray-600">{postCount}</span>
        </div>
      </div>

      {showContent && (
        <div className="border border-gray-200 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            嵌套Suspense示例
          </h3>

          {/* 外层Suspense */}
          <Suspense fallback={<SkeletonLoader />}>
            <div className="space-y-4">
              <div className="p-3 bg-yellow-50 border border-yellow-200 rounded">
                <h4 className="font-semibold text-yellow-800 mb-2">
                  外层组件已加载
                </h4>

                {/* 内层Suspense */}
                <Suspense
                  fallback={<CustomSpinner message="正在加载文章列表..." />}
                >
                  <LazyPostList count={postCount} />
                </Suspense>
              </div>

              {/* 另一个内层Suspense */}
              <Suspense
                fallback={<CustomSpinner message="正在加载用户信息..." />}
              >
                <LazyUserProfile userId={Math.floor(Math.random() * 5) + 1} />
              </Suspense>
            </div>
          </Suspense>
        </div>
      )}
    </div>
  );
};`,A=`// 模拟异步数据获取\r
export const fetchUserData = (\r
  userId: number\r
): Promise<{ id: number; name: string; email: string }> => {\r
  return new Promise((resolve) => {\r
    setTimeout(() => {\r
      resolve({\r
        id: userId,\r
        name: \`用户\${userId}\`,\r
        email: \`user\${userId}@example.com\`,\r
      });\r
    }, Math.random() * 2000 + 1000); // 1-3秒随机延迟\r
  });\r
};\r
\r
export const fetchPostData = (\r
  postId: number\r
): Promise<{ id: number; title: string; content: string }> => {\r
  return new Promise((resolve) => {\r
    setTimeout(() => {\r
      resolve({\r
        id: postId,\r
        title: \`文章标题 \${postId}\`,\r
        content: \`这是文章 \${postId} 的内容。Lorem ipsum dolor sit amet, consectetur adipiscing elit.\`,\r
      });\r
    }, Math.random() * 1500 + 500); // 0.5-2秒随机延迟\r
  });\r
};`,H=()=>{const s={title:"Suspense边界 (Suspense Boundaries)",description:"Suspense允许组件在渲染之前等待某些条件，并在等待期间显示fallback UI。它主要用于代码分割（lazy loading）和数据获取，是React并发特性的重要组成部分。",overview:[{title:"核心概念",items:["Suspense是React组件，用于处理异步渲染和加载状态","当子组件抛出Promise时，Suspense捕获并显示fallback UI","Promise resolve后，重新渲染实际组件内容","支持嵌套使用，内层Suspense优先处理异步操作"]},{title:"主要优势",items:["提供声明式的异步加载处理方式","避免手动管理加载状态，简化代码逻辑","支持代码分割，实现按需加载优化性能","与React并发特性深度集成，提升用户体验"]},{title:"适用场景",items:["代码分割和懒加载组件的实现","数据获取时的加载状态管理","异步组件的渲染控制和优化","配合路由实现页面级的懒加载"]},{title:"注意事项",items:["fallback UI应该与实际内容尺寸相近，避免布局跳动","避免过度嵌套导致加载状态闪烁","需要结合ErrorBoundary处理加载失败情况","在服务端渲染中使用时需要特别注意兼容性"]}],examples:[{title:"基础Suspense使用",description:"展示基本的Suspense用法和懒加载组件",component:e.jsx(E,{}),observationPoints:['点击"显示用户"按钮时，Suspense会显示fallback UI',"懒加载组件完成加载后，fallback被实际组件替换","切换用户ID会重新触发加载过程","React.lazy()与Suspense配合实现代码分割"],keyPoints:["Suspense组件通过fallback prop定义加载状态","React.lazy()创建懒加载组件，首次渲染时抛出Promise","Promise resolve后，Suspense重新渲染显示实际组件","懒加载组件支持动态导入和按需加载"],commonTraps:["在Suspense外部使用懒加载组件会导致错误","fallback UI与实际内容尺寸差异过大导致布局跳动","忘记处理懒加载组件的加载失败情况","过度使用懒加载导致网络请求碎片化"],solutions:["确保懒加载组件被Suspense包装","设计与实际内容尺寸相近的fallback UI","结合ErrorBoundary处理加载失败","合理规划代码分割粒度，避免过度细分"],importantTips:["Suspense的fallback会在子组件抛出Promise时显示","懒加载组件只在首次使用时才会开始加载","可以通过预加载技术优化用户体验","开发环境下可能看不到明显的加载效果"],preCode:[{title:"LazyComponents",code:b},{title:"LoadingComponents",code:p}],codeExample:{title:"基础Suspense使用",code:V}},{title:"嵌套Suspense边界",description:"演示多层Suspense的嵌套使用和独立加载",component:e.jsx(M,{}),observationPoints:["外层Suspense控制整体页面框架的加载","内层Suspense独立控制各个组件的加载状态","不同组件可以并行加载，互不影响","内层Suspense优先处理，外层作为兜底"],keyPoints:["嵌套Suspense提供更细粒度的加载控制","每个Suspense边界独立管理其子组件的加载状态","内层Suspense的fallback优先于外层显示","支持不同部分的并行加载和独立错误处理"],commonTraps:["过度嵌套导致加载状态闪烁","嵌套层级过深影响代码可读性","忘记为每个层级提供合适的fallback","嵌套边界的错误处理逻辑混乱"],solutions:["合理规划嵌套层级，避免过度细分","为每个Suspense边界设计清晰的职责","提供层次化的fallback UI设计","建立统一的错误处理机制"],importantTips:["内层Suspense会拦截子组件抛出的Promise","外层Suspense只处理内层未捕获的Promise","嵌套结构有助于实现渐进式加载","可以通过嵌套实现不同优先级的加载策略"],preCode:[{title:"LazyComponents",code:b},{title:"LoadingComponents",code:p}],codeExample:{title:"嵌套Suspense边界",code:B}},{title:"并发特性集成",description:"结合useTransition和useDeferredValue的高级用法",component:e.jsx(q,{}),observationPoints:["useTransition将搜索更新标记为非紧急","useDeferredValue延迟搜索查询的更新","isPending状态指示非紧急更新的进行","Suspense配合并发特性提供流畅的用户体验"],keyPoints:["useTransition标记非紧急更新，保持界面响应性","useDeferredValue延迟值更新，减少不必要的渲染","startTransition包装的更新不会阻塞用户交互","并发特性与Suspense结合优化数据获取体验"],commonTraps:["滥用useTransition导致更新延迟过多","不理解useDeferredValue的延迟机制","忘记处理isPending状态的用户反馈","并发更新与Suspense边界的交互复杂"],solutions:["只对真正非紧急的更新使用useTransition","理解useDeferredValue的工作原理和适用场景","提供清晰的pending状态指示","建立清晰的并发更新和Suspense的协作模式"],importantTips:["useTransition适用于数据获取和搜索场景","useDeferredValue可以减少高频更新的性能影响","并发特性需要React 18+版本支持","合理使用并发特性可以显著提升用户体验"],preCode:[{title:"LoadingComponents",code:p}],codeExample:{title:"并发特性集成",code:F}}],tutorial:{concepts:["Suspense是React组件，用于处理异步渲染","fallback prop定义加载时显示的UI","子组件抛出Promise时触发Suspense","支持嵌套使用，提供细粒度控制","与React.lazy()配合实现代码分割"],steps:["使用React.lazy()创建懒加载组件","用Suspense包装需要异步加载的组件","提供合适的fallback加载UI","处理嵌套Suspense的加载顺序","结合并发特性优化用户体验","实现错误边界处理加载失败","优化加载状态的视觉设计"],tips:["fallback应该与实际内容尺寸相近","避免过多的嵌套Suspense导致闪烁","合理使用useTransition标记非紧急更新","考虑使用骨架屏提升加载体验","结合错误边界处理加载失败情况","在开发环境中测试各种网络条件"]},interview:{questions:[{question:"Suspense的工作原理是什么？",answer:"Suspense通过捕获子组件抛出的Promise来工作。当子组件需要异步数据时，它抛出一个Promise，Suspense捕获这个Promise并显示fallback UI。当Promise resolve后，Suspense重新渲染子组件显示实际内容。"},{question:"Suspense与React.lazy()如何配合使用？",answer:"React.lazy()返回一个懒加载组件，该组件在首次渲染时会抛出一个Promise（代表动态import）。Suspense捕获这个Promise并显示fallback，当组件加载完成后显示实际组件。这实现了代码分割和按需加载。"},{question:"嵌套Suspense有什么优势？",answer:"嵌套Suspense提供更细粒度的加载控制：1) 不同部分可以独立加载；2) 避免整个页面被单个慢组件阻塞；3) 提供更好的用户体验；4) 内层Suspense优先处理，外层作为兜底。"},{question:"useTransition和Suspense如何协作？",answer:"useTransition将状态更新标记为非紧急，允许React中断渲染。配合Suspense使用时，可以避免因数据获取导致的界面卡顿，保持界面响应性。startTransition包装的更新不会阻塞用户交互。"},{question:"Suspense的最佳实践有哪些？",answer:"最佳实践包括：1) 提供有意义的fallback UI；2) 合理使用嵌套避免过度细分；3) 结合错误边界处理失败情况；4) 使用骨架屏提升体验；5) 考虑加载状态的视觉连续性；6) 在不同网络条件下测试。"}],keyPoints:["Suspense通过捕获Promise实现异步渲染控制","fallback UI在等待期间提供用户反馈","与React.lazy()配合实现代码分割","支持嵌套使用，提供细粒度控制","配合useTransition优化用户体验","需要结合错误边界处理异常情况","适用于数据获取和组件懒加载场景"]},codeExamples:[{title:"data-fetchers.ts",code:A},{title:"LazyComponents.tsx",code:b},{title:"LoadingComponents.tsx",code:p}],bestPractices:{dos:["为Suspense提供有意义的fallback UI","使用骨架屏匹配实际内容布局","合理嵌套Suspense避免过度细分","结合useTransition优化用户体验","配合错误边界处理加载失败","在不同网络条件下测试加载效果"],donts:["不要在Suspense内部使用try-catch捕获Promise","不要过度嵌套导致加载状态闪烁","不要忽略加载失败的错误处理","不要使用空的或无意义的fallback","不要在服务端渲染中使用未支持的特性","不要忘记考虑加载状态的可访问性"],patterns:["页面级Suspense - 整个页面的加载控制","组件级Suspense - 单个组件的异步加载","数据获取Suspense - 配合数据库查询使用","路由级Suspense - 页面切换时的加载状态","嵌套Suspense - 多层级的独立加载控制"]}};return e.jsx(L,{...s})};export{H as default};
