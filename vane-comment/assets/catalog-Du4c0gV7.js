import{w as g,c as k,a as C,b as h,d as y,k as P,l as j,m as v,n as M,o as E,e as w,r as s,f as b,j as c,M as S,p as F,q as K,s as L,t as W,u as z,v as B,x as N,y as V}from"./index-CNUkByPJ.js";function O(o){return g(w,[k(),C({modes:["hottest","newest"],defaultMode:"hottest"}),h({maxDepth:3}),y({features:{emoji:!0,image:!0}}),P(),j(),v(),M(),E()])}O();const U={id:"video",title:"视频评论区",group:"视频",ref:{label:"抖音 / B站 / 视频号",url:"https://www.bilibili.com"},pain:"默认按最热排序，高赞神评浮顶；支持楼中楼与图片晒梗。",plugs:[{fn:"createLikePlugin",why:"操作行点赞，双击视频也触发同一条"},{fn:"createSortPlugin",cfg:'modes: ["hottest", "newest"], defaultMode: "hottest"',why:"顶栏排序条，默认最热"},{fn:"createThreadPlugin",cfg:"maxDepth: 3",why:"楼中楼递归嵌套，深 3 折叠"},{fn:"createRichComposerPlugin",cfg:"features: { emoji: true, image: true }",why:"评论框表情 + 图片（晒梗图）"}],props:['defaultSortMode="hottest"'],note:"视频评论区默认最热：同一内核，只是 preset 把 SortPlugin 的 defaultMode 设成 hottest。换排序不需要改组件。"},G=O(),x={id:"u-me",name:"我",avatar:void 0};function q(){const[o,t]=s.useState(()=>b()),l=s.useCallback(e=>t(a=>a.map(n=>n.id===e?{...n,liked:!n.liked,likeCount:(n.likeCount??0)+(n.liked?-1:1)}:n)),[]),d=s.useCallback((e,a)=>t(n=>n.map(i=>i.id===e?{...i,replies:[{id:`${e}-r${Date.now()}`,author:x,content:a,createdAt:Date.now(),likeCount:0,liked:!1},...i.replies??[]],replyCount:(i.replyCount??0)+1}:i)),[]),p=s.useCallback(e=>t(a=>[{id:`c-${Date.now()}`,author:x,content:e,createdAt:Date.now(),likeCount:0,liked:!1},...a]),[]);return c.jsx("div",{style:{maxWidth:480,margin:"0 auto",background:"#fff",padding:16,borderRadius:8,color:"#1f2328"},children:c.jsx(G,{comments:o,defaultSortMode:"hottest",onLike:l,onReply:d,onSubmit:p,onReport:e=>console.log("[video] 举报",e),mentions:S})})}const H=Object.freeze(Object.defineProperty({__proto__:null,default:q,meta:U},Symbol.toStringTag,{value:"Module"}));function T(o){return g(w,[k(),C({modes:["newest","oldest","hottest","mostLiked"],defaultMode:"newest"}),h({maxDepth:3}),y({features:{emoji:!0,image:!0,mention:!0}}),P(),j(),F(),K(),L(),W(),z(),B(),v(),N(),V(),M(),E()])}T();const J={id:"social",title:"社交评论区",group:"社交",ref:{label:"微博 / 朋友圈 / 小红书",url:"https://weibo.com"},pain:"默认按最新排序，@提及与表情是社交传播关键；楼中楼承载对话。",plugs:[{fn:"createLikePlugin",why:"操作行点赞，社交反馈即时上头"},{fn:"createSortPlugin",cfg:'modes: ["newest", "oldest", "hottest", "mostLiked"], defaultMode: "newest"',why:"排序条四模式，默认最新"},{fn:"createThreadPlugin",cfg:"maxDepth: 3",why:"楼中楼递归嵌套，深 3 折叠"},{fn:"createRichComposerPlugin",cfg:"features: { emoji: true, image: true, mention: true }",why:"评论框表情 + 图片 + @提及（社交传播）"}],props:['defaultSortMode="newest"',"mentions={MENTIONS}"],note:"社交评论区默认最新：preset 把 SortPlugin 的 defaultMode 设成 newest，并打开 mention 能力。换场景只是换 preset，内核不动。"},Q=T(),R={id:"u-me",name:"我",avatar:void 0};function X(){const[o,t]=s.useState(()=>b()),l=s.useCallback(e=>t(a=>a.map(n=>n.id===e?{...n,liked:!n.liked,likeCount:(n.likeCount??0)+(n.liked?-1:1)}:n)),[]),d=s.useCallback((e,a)=>t(n=>n.map(i=>i.id===e?{...i,replies:[{id:`${e}-r${Date.now()}`,author:R,content:a,createdAt:Date.now(),likeCount:0,liked:!1},...i.replies??[]],replyCount:(i.replyCount??0)+1}:i)),[]),p=s.useCallback(e=>t(a=>[{id:`c-${Date.now()}`,author:R,content:e,createdAt:Date.now(),likeCount:0,liked:!1},...a]),[]);return c.jsx("div",{style:{maxWidth:480,margin:"0 auto",background:"#fff",padding:16,borderRadius:8,color:"#1f2328"},children:c.jsx(Q,{comments:o,defaultSortMode:"newest",onLike:l,onReply:d,onSubmit:p,onReport:e=>console.log("[social] 举报",e),mentions:S})})}const Y=Object.freeze(Object.defineProperty({__proto__:null,default:X,meta:J},Symbol.toStringTag,{value:"Module"}));function $(o){return g(w,[k(),C({modes:["newest","mostLiked"],defaultMode:"newest"}),h({maxDepth:2}),y({features:{emoji:!0,image:!0}}),L(),N(),v(),M(),P()])}$();const Z={id:"ecommerce",title:"电商评论区",group:"电商",ref:{label:"淘宝 / 京东 / 拼多多",url:"https://www.taobao.com"},pain:"突出图片晒单与「最赞」；楼中楼浅（深 2）避免长评刷屏，聚焦商品评价。",plugs:[{fn:"createLikePlugin",why:"操作行点赞，好评为商品背书"},{fn:"createSortPlugin",cfg:'modes: ["newest", "mostLiked"], defaultMode: "newest"',why:"排序条两模式，默认最新、可切最赞"},{fn:"createThreadPlugin",cfg:"maxDepth: 2",why:"楼中楼浅嵌套（深 2），聚焦主评"},{fn:"createRichComposerPlugin",cfg:"features: { emoji: true, image: true }",why:"评论框表情 + 图片晒单（转化关键）"}],props:['defaultSortMode="newest"'],note:"电商评论区默认最新、楼中楼浅（深 2）：preset 把 ThreadPlugin 的 maxDepth 设成 2，并把 SortPlugin 限成 newest/mostLiked，避免长评刷屏。"},ee=$(),_={id:"u-me",name:"我",avatar:void 0};function ne(){const[o,t]=s.useState(()=>b()),l=s.useCallback(e=>t(a=>a.map(n=>n.id===e?{...n,liked:!n.liked,likeCount:(n.likeCount??0)+(n.liked?-1:1)}:n)),[]),d=s.useCallback((e,a)=>t(n=>n.map(i=>i.id===e?{...i,replies:[{id:`${e}-r${Date.now()}`,author:_,content:a,createdAt:Date.now(),likeCount:0,liked:!1},...i.replies??[]],replyCount:(i.replyCount??0)+1}:i)),[]),p=s.useCallback(e=>t(a=>[{id:`c-${Date.now()}`,author:_,content:e,createdAt:Date.now(),likeCount:0,liked:!1},...a]),[]);return c.jsx("div",{style:{maxWidth:480,margin:"0 auto",background:"#fff",padding:16,borderRadius:8,color:"#1f2328"},children:c.jsx(ee,{comments:o,defaultSortMode:"newest",onLike:l,onReply:d,onSubmit:p,onReport:e=>console.log("[ecommerce] 举报",e),mentions:S})})}const te=Object.freeze(Object.defineProperty({__proto__:null,default:ne,meta:Z},Symbol.toStringTag,{value:"Module"})),oe={id:"custom",title:"自定义装配",group:"通用",ref:{label:"任意平台 / 私有化",url:"https://www.workbuddy.cn"},pain:"不想套预设？手动挑插件即可——评论区的长尾需求多，用几个装几个，内核零负担。",plugs:[{fn:"createLikePlugin",why:"勾上才有操作行点赞"},{fn:"createSortPlugin",cfg:'modes: ["newest", "hottest"]',why:"勾上才有排序条"},{fn:"createThreadPlugin",cfg:"maxDepth: 3",why:"勾上才有楼中楼"},{fn:"createRichComposerPlugin",cfg:"features: { emoji: true }",why:"勾上才有富评论框"}],props:['defaultSortMode="newest"'],note:"自定义装配与预设的唯一区别：预设是「一组写好的 withCommentPlugins 调用」。不想套预设，把这一页的勾选逻辑搬进你的项目即可，内核与插件完全复用。"},re={like:()=>k(),sort:()=>C({modes:["newest","hottest"]}),thread:()=>h({maxDepth:3}),rich:()=>y({features:{emoji:!0}})},ae=[{key:"like",label:"点赞 LikePlugin"},{key:"sort",label:"排序 SortPlugin"},{key:"thread",label:"楼中楼 ThreadPlugin"},{key:"rich",label:"富编辑 RichComposerPlugin"}],D={id:"u-me",name:"我",avatar:void 0};function ie(){const[o,t]=s.useState(()=>b()),[l,d]=s.useState({like:!0,sort:!0,thread:!0,rich:!1}),p=Object.keys(l).filter(r=>l[r]).sort().join("|"),e=s.useMemo(()=>{const r=Object.keys(l).filter(m=>l[m]).map(m=>re[m]());return g(w,r)},[p]),a=s.useCallback(r=>t(m=>m.map(u=>u.id===r?{...u,liked:!u.liked,likeCount:(u.likeCount??0)+(u.liked?-1:1)}:u)),[]),n=s.useCallback((r,m)=>t(u=>u.map(f=>f.id===r?{...f,replies:[{id:`${r}-r${Date.now()}`,author:D,content:m,createdAt:Date.now(),likeCount:0,liked:!1},...f.replies??[]],replyCount:(f.replyCount??0)+1}:f)),[]),i=s.useCallback(r=>t(m=>[{id:`c-${Date.now()}`,author:D,content:r,createdAt:Date.now(),likeCount:0,liked:!1},...m]),[]),A=r=>d(m=>({...m,[r]:!m[r]}));return c.jsxs("div",{style:{maxWidth:480,margin:"0 auto",background:"#fff",padding:16,borderRadius:8,color:"#1f2328"},children:[c.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8,marginBottom:12},children:ae.map(r=>c.jsxs("label",{style:{fontSize:12,padding:"4px 8px",border:"1px solid #d0d7de",borderRadius:6,cursor:"pointer",background:l[r.key]?"#eef5ff":"#fff"},children:[c.jsx("input",{type:"checkbox",checked:l[r.key],onChange:()=>A(r.key),style:{marginRight:6}}),r.label]},r.key))}),c.jsx(e,{comments:o,defaultSortMode:"newest",onLike:a,onReply:n,onSubmit:i,onReport:r=>console.log("[custom] 举报",r),mentions:S})]})}const se=Object.freeze(Object.defineProperty({__proto__:null,default:ie,meta:oe},Symbol.toStringTag,{value:"Module"})),le=`\uFEFFimport React, { useCallback, useState } from "react";
import { createVideoComment } from "vane-comment/presets/video";
import type { Comment, CommentNode } from "vane-comment";
import type { ScenarioMeta } from "./types";
import { MENTIONS, freshComments } from "../data/sample";

/**
 * 01 · 视频评论区（对标抖音 / B站 / 视频号）
 * 预设：点赞 + 排序（最热/最新，默认最热）+ 楼中楼（深 3）+ 富编辑（emoji + 图片）。
 * 视频场景默认按最热排序，鼓励高赞评论浮顶。
 */
export const meta: ScenarioMeta = {
  id: "video",
  title: "视频评论区",
  group: "视频",
  ref: { label: "抖音 / B站 / 视频号", url: "https://www.bilibili.com" },
  pain: "默认按最热排序，高赞神评浮顶；支持楼中楼与图片晒梗。",
  plugs: [
    { fn: "createLikePlugin", why: "操作行点赞，双击视频也触发同一条" },
    { fn: "createSortPlugin", cfg: 'modes: ["hottest", "newest"], defaultMode: "hottest"', why: "顶栏排序条，默认最热" },
    { fn: "createThreadPlugin", cfg: "maxDepth: 3", why: "楼中楼递归嵌套，深 3 折叠" },
    { fn: "createRichComposerPlugin", cfg: "features: { emoji: true, image: true }", why: "评论框表情 + 图片（晒梗图）" },
  ],
  props: ['defaultSortMode="hottest"'],
  note: "视频评论区默认最热：同一内核，只是 preset 把 SortPlugin 的 defaultMode 设成 hottest。换排序不需要改组件。",
};

const Comment = createVideoComment();
const ME = { id: "u-me", name: "我", avatar: undefined };

export default function VideoScenario() {
  const [comments, setComments] = useState<Comment[]>(() => freshComments());

  const onLike = useCallback(
    (id: string) =>
      setComments((prev) =>
        prev.map((c) =>
          c.id === id
            ? { ...c, liked: !c.liked, likeCount: (c.likeCount ?? 0) + (c.liked ? -1 : 1) }
            : c
        )
      ),
    []
  );
  const onReply = useCallback(
    (parentId: string, content: CommentNode[]) =>
      setComments((prev) =>
        prev.map((c) =>
          c.id === parentId
            ? {
                ...c,
                replies: [
                  { id: \`\${parentId}-r\${Date.now()}\`, author: ME, content, createdAt: Date.now(), likeCount: 0, liked: false },
                  ...(c.replies ?? []),
                ],
                replyCount: (c.replyCount ?? 0) + 1,
              }
            : c
        )
      ),
    []
  );
  const onSubmit = useCallback(
    (content: CommentNode[]) =>
      setComments((prev) => [
        { id: \`c-\${Date.now()}\`, author: ME, content, createdAt: Date.now(), likeCount: 0, liked: false },
        ...prev,
      ]),
    []
  );

  return (
    <div
      style={{
        maxWidth: 480,
        margin: "0 auto",
        background: "#fff",
        padding: 16,
        borderRadius: 8,
        color: "#1f2328",
      }}
    >
      <Comment
        comments={comments}
        defaultSortMode="hottest"
        onLike={onLike}
        onReply={onReply}
        onSubmit={onSubmit}
        onReport={(id) => console.log("[video] 举报", id)}
        mentions={MENTIONS}
      />
    </div>
  );
}
`,me=`\uFEFFimport React, { useCallback, useState } from "react";
import { createSocialComment } from "vane-comment/presets/social";
import type { Comment, CommentNode } from "vane-comment";
import type { ScenarioMeta } from "./types";
import { MENTIONS, freshComments } from "../data/sample";

/**
 * 02 · 社交评论区（对标微博 / 朋友圈 / 小红书）
 * 预设：点赞 + 排序（全模式，默认最新）+ 楼中楼（深 3）+ 富编辑（emoji + 图片 + @提及）。
 * 社交场景默认按最新排序，鼓励即时互动；@提及是社交传播的关键能力。
 */
export const meta: ScenarioMeta = {
  id: "social",
  title: "社交评论区",
  group: "社交",
  ref: { label: "微博 / 朋友圈 / 小红书", url: "https://weibo.com" },
  pain: "默认按最新排序，@提及与表情是社交传播关键；楼中楼承载对话。",
  plugs: [
    { fn: "createLikePlugin", why: "操作行点赞，社交反馈即时上头" },
    { fn: "createSortPlugin", cfg: 'modes: ["newest", "oldest", "hottest", "mostLiked"], defaultMode: "newest"', why: "排序条四模式，默认最新" },
    { fn: "createThreadPlugin", cfg: "maxDepth: 3", why: "楼中楼递归嵌套，深 3 折叠" },
    { fn: "createRichComposerPlugin", cfg: "features: { emoji: true, image: true, mention: true }", why: "评论框表情 + 图片 + @提及（社交传播）" },
  ],
  props: ['defaultSortMode="newest"', "mentions={MENTIONS}"],
  note: "社交评论区默认最新：preset 把 SortPlugin 的 defaultMode 设成 newest，并打开 mention 能力。换场景只是换 preset，内核不动。",
};

const Comment = createSocialComment();
const ME = { id: "u-me", name: "我", avatar: undefined };

export default function SocialScenario() {
  const [comments, setComments] = useState<Comment[]>(() => freshComments());

  const onLike = useCallback(
    (id: string) =>
      setComments((prev) =>
        prev.map((c) =>
          c.id === id
            ? { ...c, liked: !c.liked, likeCount: (c.likeCount ?? 0) + (c.liked ? -1 : 1) }
            : c
        )
      ),
    []
  );
  const onReply = useCallback(
    (parentId: string, content: CommentNode[]) =>
      setComments((prev) =>
        prev.map((c) =>
          c.id === parentId
            ? {
                ...c,
                replies: [
                  { id: \`\${parentId}-r\${Date.now()}\`, author: ME, content, createdAt: Date.now(), likeCount: 0, liked: false },
                  ...(c.replies ?? []),
                ],
                replyCount: (c.replyCount ?? 0) + 1,
              }
            : c
        )
      ),
    []
  );
  const onSubmit = useCallback(
    (content: CommentNode[]) =>
      setComments((prev) => [
        { id: \`c-\${Date.now()}\`, author: ME, content, createdAt: Date.now(), likeCount: 0, liked: false },
        ...prev,
      ]),
    []
  );

  return (
    <div
      style={{
        maxWidth: 480,
        margin: "0 auto",
        background: "#fff",
        padding: 16,
        borderRadius: 8,
        color: "#1f2328",
      }}
    >
      <Comment
        comments={comments}
        defaultSortMode="newest"
        onLike={onLike}
        onReply={onReply}
        onSubmit={onSubmit}
        onReport={(id) => console.log("[social] 举报", id)}
        mentions={MENTIONS}
      />
    </div>
  );
}
`,ce=`\uFEFFimport React, { useCallback, useState } from "react";
import { createEcommerceComment } from "vane-comment/presets/ecommerce";
import type { Comment, CommentNode } from "vane-comment";
import type { ScenarioMeta } from "./types";
import { MENTIONS, freshComments } from "../data/sample";

/**
 * 03 · 电商评论区（对标淘宝 / 京东 / 拼多多）
 * 预设：点赞 + 排序（最新 / 最赞，默认最新）+ 楼中楼（深 2）+ 富编辑（emoji + 图片晒单）。
 * 电商场景突出「图片晒单」与「最赞」——晒图带图评是转化关键，楼中楼浅一点（深 2）避免刷屏。
 */
export const meta: ScenarioMeta = {
  id: "ecommerce",
  title: "电商评论区",
  group: "电商",
  ref: { label: "淘宝 / 京东 / 拼多多", url: "https://www.taobao.com" },
  pain: "突出图片晒单与「最赞」；楼中楼浅（深 2）避免长评刷屏，聚焦商品评价。",
  plugs: [
    { fn: "createLikePlugin", why: "操作行点赞，好评为商品背书" },
    { fn: "createSortPlugin", cfg: 'modes: ["newest", "mostLiked"], defaultMode: "newest"', why: "排序条两模式，默认最新、可切最赞" },
    { fn: "createThreadPlugin", cfg: "maxDepth: 2", why: "楼中楼浅嵌套（深 2），聚焦主评" },
    { fn: "createRichComposerPlugin", cfg: "features: { emoji: true, image: true }", why: "评论框表情 + 图片晒单（转化关键）" },
  ],
  props: ['defaultSortMode="newest"'],
  note: "电商评论区默认最新、楼中楼浅（深 2）：preset 把 ThreadPlugin 的 maxDepth 设成 2，并把 SortPlugin 限成 newest/mostLiked，避免长评刷屏。",
};

const Comment = createEcommerceComment();
const ME = { id: "u-me", name: "我", avatar: undefined };

export default function EcommerceScenario() {
  const [comments, setComments] = useState<Comment[]>(() => freshComments());

  const onLike = useCallback(
    (id: string) =>
      setComments((prev) =>
        prev.map((c) =>
          c.id === id
            ? { ...c, liked: !c.liked, likeCount: (c.likeCount ?? 0) + (c.liked ? -1 : 1) }
            : c
        )
      ),
    []
  );
  const onReply = useCallback(
    (parentId: string, content: CommentNode[]) =>
      setComments((prev) =>
        prev.map((c) =>
          c.id === parentId
            ? {
                ...c,
                replies: [
                  { id: \`\${parentId}-r\${Date.now()}\`, author: ME, content, createdAt: Date.now(), likeCount: 0, liked: false },
                  ...(c.replies ?? []),
                ],
                replyCount: (c.replyCount ?? 0) + 1,
              }
            : c
        )
      ),
    []
  );
  const onSubmit = useCallback(
    (content: CommentNode[]) =>
      setComments((prev) => [
        { id: \`c-\${Date.now()}\`, author: ME, content, createdAt: Date.now(), likeCount: 0, liked: false },
        ...prev,
      ]),
    []
  );

  return (
    <div
      style={{
        maxWidth: 480,
        margin: "0 auto",
        background: "#fff",
        padding: 16,
        borderRadius: 8,
        color: "#1f2328",
      }}
    >
      <Comment
        comments={comments}
        defaultSortMode="newest"
        onLike={onLike}
        onReply={onReply}
        onSubmit={onSubmit}
        onReport={(id) => console.log("[ecommerce] 举报", id)}
        mentions={MENTIONS}
      />
    </div>
  );
}
`,ue=`\uFEFFimport React, { useCallback, useMemo, useState } from "react";
import { CommentCore, withCommentPlugins } from "vane-comment";
import { createLikePlugin } from "vane-comment/custom-plugins/LikePlugin";
import { createSortPlugin } from "vane-comment/custom-plugins/SortPlugin";
import { createThreadPlugin } from "vane-comment/custom-plugins/ThreadPlugin";
import { createRichComposerPlugin } from "vane-comment/custom-plugins/RichComposerPlugin";
import type { Comment, CommentNode } from "vane-comment";
import type { ScenarioMeta } from "./types";
import { MENTIONS, freshComments } from "../data/sample";

/**
 * 04 · 自定义装配（不套预设，自己挑插件）
 * 同一内核，手动 withCommentPlugins 挑插件 —— 演示「要不要点赞 / 排序 / 楼中楼 / 富编辑」
 * 完全由你决定。这里用勾选切换，实时重建组件类型，暴露装配 API 的真容。
 */
export const meta: ScenarioMeta = {
  id: "custom",
  title: "自定义装配",
  group: "通用",
  ref: { label: "任意平台 / 私有化", url: "https://www.workbuddy.cn" },
  pain: "不想套预设？手动挑插件即可——评论区的长尾需求多，用几个装几个，内核零负担。",
  plugs: [
    { fn: "createLikePlugin", why: "勾上才有操作行点赞" },
    { fn: "createSortPlugin", cfg: 'modes: ["newest", "hottest"]', why: "勾上才有排序条" },
    { fn: "createThreadPlugin", cfg: "maxDepth: 3", why: "勾上才有楼中楼" },
    { fn: "createRichComposerPlugin", cfg: "features: { emoji: true }", why: "勾上才有富评论框" },
  ],
  props: ['defaultSortMode="newest"'],
  note: "自定义装配与预设的唯一区别：预设是「一组写好的 withCommentPlugins 调用」。不想套预设，把这一页的勾选逻辑搬进你的项目即可，内核与插件完全复用。",
};

const MAKERS = {
  like: () => createLikePlugin(),
  sort: () => createSortPlugin({ modes: ["newest", "hottest"] }),
  thread: () => createThreadPlugin({ maxDepth: 3 }),
  rich: () => createRichComposerPlugin({ features: { emoji: true } }),
} as const;

type Key = keyof typeof MAKERS;

const OPTIONS: Array<{ key: Key; label: string }> = [
  { key: "like", label: "点赞 LikePlugin" },
  { key: "sort", label: "排序 SortPlugin" },
  { key: "thread", label: "楼中楼 ThreadPlugin" },
  { key: "rich", label: "富编辑 RichComposerPlugin" },
];

const ME = { id: "u-me", name: "我", avatar: undefined };

export default function CustomScenario() {
  const [comments, setComments] = useState<Comment[]>(() => freshComments());
  const [on, setOn] = useState<Record<Key, boolean>>({
    like: true,
    sort: true,
    thread: true,
    rich: false,
  });

  // 按勾选重建组件类型：和插件工坊同一套路（避免每次渲染造新类型导致状态丢失）
  const key = (Object.keys(on) as Key[])
    .filter((k) => on[k])
    .sort()
    .join("|");
  const CommentC = useMemo(() => {
    const plugins = (Object.keys(on) as Key[])
      .filter((k) => on[k])
      .map((k) => MAKERS[k]());
    return withCommentPlugins(CommentCore, plugins);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  const onLike = useCallback(
    (id: string) =>
      setComments((prev) =>
        prev.map((c) =>
          c.id === id
            ? { ...c, liked: !c.liked, likeCount: (c.likeCount ?? 0) + (c.liked ? -1 : 1) }
            : c
        )
      ),
    []
  );
  const onReply = useCallback(
    (parentId: string, content: CommentNode[]) =>
      setComments((prev) =>
        prev.map((c) =>
          c.id === parentId
            ? {
                ...c,
                replies: [
                  { id: \`\${parentId}-r\${Date.now()}\`, author: ME, content, createdAt: Date.now(), likeCount: 0, liked: false },
                  ...(c.replies ?? []),
                ],
                replyCount: (c.replyCount ?? 0) + 1,
              }
            : c
        )
      ),
    []
  );
  const onSubmit = useCallback(
    (content: CommentNode[]) =>
      setComments((prev) => [
        { id: \`c-\${Date.now()}\`, author: ME, content, createdAt: Date.now(), likeCount: 0, liked: false },
        ...prev,
      ]),
    []
  );

  const toggle = (k: Key) => setOn((p) => ({ ...p, [k]: !p[k] }));

  return (
    <div
      style={{
        maxWidth: 480,
        margin: "0 auto",
        background: "#fff",
        padding: 16,
        borderRadius: 8,
        color: "#1f2328",
      }}
    >
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 12 }}>
        {OPTIONS.map((o) => (
          <label
            key={o.key}
            style={{
              fontSize: 12,
              padding: "4px 8px",
              border: "1px solid #d0d7de",
              borderRadius: 6,
              cursor: "pointer",
              background: on[o.key] ? "#eef5ff" : "#fff",
            }}
          >
            <input
              type="checkbox"
              checked={on[o.key]}
              onChange={() => toggle(o.key)}
              style={{ marginRight: 6 }}
            />
            {o.label}
          </label>
        ))}
      </div>

      <CommentC
        comments={comments}
        defaultSortMode="newest"
        onLike={onLike}
        onReply={onReply}
        onSubmit={onSubmit}
        onReport={(id) => console.log("[custom] 举报", id)}
        mentions={MENTIONS}
      />
    </div>
  );
}
`,de=Object.assign({"./01-video.tsx":H,"./02-social.tsx":Y,"./03-ecommerce.tsx":te,"./04-custom.tsx":se}),pe=Object.assign({"./01-video.tsx":le,"./02-social.tsx":me,"./03-ecommerce.tsx":ce,"./04-custom.tsx":ue}),fe=o=>o.replace(/^\.\//,""),I=Object.entries(de).map(([o,t])=>{const l=fe(o);return{meta:t.meta,Component:t.default,file:l,source:pe[o]??""}}).sort((o,t)=>o.file.localeCompare(t.file)),ke=I.reduce((o,t)=>(o.includes(t.meta.group)||o.push(t.meta.group),o),[]),Ce=Array.from(new Set(I.flatMap(o=>o.meta.plugs.map(t=>t.fn)))).sort();export{ke as G,I as S,Ce as U};
