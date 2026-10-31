import{j as t,S as n,w as i,c as r,A as o,b as c,d as l,e as g,f as p,g as u,h as y,q as v,s as w,t as A,v as T,x as V,y as j,i as f,k as P,z as E,B as _,E as W,l as d,F as M,m as S,n as m,H as L,I as B,o as s,u as b,T as h}from"./index-Cs86JZsH.js";function N(){const e=b(),a=(e==null?void 0:e.activeTab)??"works";return t.jsxs("div",{style:{minHeight:120,fontSize:14,lineHeight:1.85,color:"#cfd3c4"},children:[t.jsx("b",{style:{color:"#e9ecdf",fontSize:15},children:a}),t.jsx("p",{style:{marginTop:8},children:h[a]??"（空）"})]})}const O={id:"profile-combo",title:"全功能个人主页",group:"社交主页",ref:{label:"微博",url:"https://weibo.com/"},pain:"头图、简介、数据行、社交、标签、页签、认证、关注、作品要一起出现，还互不打架",plugs:[{fn:"createBannerSlotPlugin",cfg:"gradient: ['#6a11cb','#1a5fd0'], avatar: user.avatar",why:"头图区：渐变 + 头像浮层 + 昵称"},{fn:"createBioSlotPlugin",cfg:"name, bio, location, joinDate",why:"简介区：昵称/签名/地点/时间"},{fn:"createStatRowPlugin",cfg:"items: user.stats",why:"数据行：关注/粉丝/获赞/作品"},{fn:"createSocialLinksPlugin",cfg:"links: [...]",why:"社交外链行"},{fn:"createTagListPlugin",cfg:"tags: [...]",why:"兴趣标签"},{fn:"createTabSyncPlugin",cfg:"tabs: [...]",why:"页签栏 + 切换联动内容区（交互中枢）"},{fn:"createVerifyBadgePlugin",cfg:"type: 'personal'",why:"认证徽标浮于头图右上角"},{fn:"createFollowEchoPlugin",cfg:"size: 'md'",why:"关注按钮，受控于 props.followState"},{fn:"createWorksGridPlugin",cfg:"items: user.works, tab: 'works'",why:"作品网格，内容区随页签联动"},{fn:"createMembershipBadgePlugin",cfg:"level: 3",why:"会员角标（徽标区）"},{fn:"createQRSharePlugin",cfg:"url: user.homeUrl",why:"二维码分享（徽标区）"},{fn:"createLiveStatusPlugin",cfg:"status: 'live'",why:"在线/直播状态（简介区）"},{fn:"createContactCardPlugin",cfg:"email, site, address",why:"联系信息（简介区）"},{fn:"createActivitySummaryPlugin",cfg:"lastActive, postsThisMonth",why:"活跃度小结（简介区）"},{fn:"createMessageButtonPlugin",cfg:"label: '私信'",why:"私信按钮（关注区）"},{fn:"createAchievementWallPlugin",cfg:"items: user.badges, tab: 'about'",why:"成就墙（内容区，挂在「关于」页签）"}],props:["verified",'badgeType="personal"',"followState={serverState}","stats={user.stats}","banner={<span>@{user.handle}</span>}"],note:"TabSync 是唯一带交互的插件；其余都是「渲染槽」，按 priority 串联，互不覆盖。作品网格与成就墙都走 renderContentArea，分别挂在「作品」「关于」页签下随页签联动。",tone:"dark"},I=[{id:"works",label:"作品"},{id:"feeds",label:"动态"},{id:"about",label:"关于"}],z=i(s,[r({gradient:["#6a11cb","#1a5fd0"],avatar:o,avatarRound:!0,height:150,overlay:t.jsx("strong",{children:n.name})}),c({name:n.name,subtitle:"前端工程师 · 组件库作者",bio:n.bio,location:"上海",joinDate:"2021 加入"}),l({items:n.stats}),g({links:p}),u({tags:y}),v(w),A(T),V(j),f({tabs:I}),P({type:"personal"}),E(_),W({url:"https://vane.dev/u/frankvane"}),d({size:"md"}),M({label:"私信"}),S({items:m,columns:3,title:"精选作品",tab:"works"}),L({items:B,columns:4,title:"成就",tab:"about"})]);function G(){return t.jsx(z,{containerStyle:{maxWidth:460,margin:"0 auto"},stats:n.stats,verified:!0,badgeType:"personal",followState:"none",banner:t.jsxs("span",{children:["@",n.handle]}),defaultActiveTab:"works",children:t.jsx(N,{})})}const H=Object.freeze(Object.defineProperty({__proto__:null,default:G,meta:O},Symbol.toStringTag,{value:"Module"}));function U(){const e=b(),a=(e==null?void 0:e.activeTab)??"posts";return t.jsxs("div",{style:{minHeight:120,fontSize:14,lineHeight:1.85,color:"#cfd3c4"},children:[t.jsx("b",{style:{color:"#e9ecdf",fontSize:15},children:a}),t.jsx("p",{style:{marginTop:8},children:h[a]??"（空）"})]})}const F={id:"creator-profile",title:"创作者主页",group:"创作者",ref:{label:"小红书",url:"https://www.xiaohongshu.com/"},pain:"创作者要机构认证 + 分段页签 + 自己的主页不显示关注按钮 + 作品墙",plugs:[{fn:"createBannerSlotPlugin",cfg:"gradient: ['#11998e','#38ef7d'], avatar: user.avatar",why:"薄荷渐变头图，区分品牌调性"},{fn:"createBioSlotPlugin",cfg:"name, bio, location",why:"简介区：昵称/签名/地点"},{fn:"createStatRowPlugin",cfg:"items: user.stats, direction: 'row'",why:"数据行展示粉丝/获赞/收藏"},{fn:"createSocialLinksPlugin",cfg:"links: [...]",why:"社交外链引流"},{fn:"createTagListPlugin",cfg:"tags: [...]",why:"内容领域标签"},{fn:"createLiveStatusPlugin",cfg:"status: 'live'",why:"直播中状态（简介区）"},{fn:"createContactCardPlugin",cfg:"email, site, address",why:"商务联系入口（简介区）"},{fn:"createTabSyncPlugin",cfg:"tabs: [...], variant: 'segmented'",why:"分段式页签，更紧凑"},{fn:"createVerifyBadgePlugin",cfg:"type: 'institution'",why:"机构认证，区别于个人"},{fn:"createMembershipBadgePlugin",cfg:"level: 3",why:"会员角标（徽标区）"},{fn:"createMessageButtonPlugin",cfg:"label: '私信'",why:"私信按钮（关注区位，自己主页也可见）"},{fn:"createWorksGridPlugin",cfg:"items: user.works, tab: 'posts'",why:"作品网格，随页签联动"},{fn:"createAchievementWallPlugin",cfg:"items: user.badges, tab: 'goods'",why:"荣誉墙（内容区，挂在「好物」页签）"}],props:["verified",'badgeType="institution"',"stats={user.stats}"],note:"不装 FollowEcho → 自己的主页不显示关注按钮；同一套插件换配置即得另一种观感。会员角标、私信、成就墙等新增插件即插即用。",tone:"dark"},K=[{id:"posts",label:"笔记"},{id:"videos",label:"视频"},{id:"goods",label:"好物"}],C=[{value:"86.2w",label:"粉丝"},{value:3120,label:"获赞"},{value:458,label:"收藏"}],D=i(s,[r({gradient:["#11998e","#38ef7d"],avatar:o,avatarRound:!0,height:140,overlay:t.jsx("strong",{children:"Studio Vane"})}),c({name:"Studio Vane",subtitle:"设计系统团队",bio:"每周分享组件库与可视化实战。",location:"杭州"}),l({items:C}),g({links:p}),u({tags:y}),v(w),A(T),f({tabs:K,variant:"segmented"}),P({type:"institution"}),E(_),M({label:"私信"}),S({items:m,columns:3,title:"最新作品",tab:"posts"}),L({items:B,columns:4,title:"荣誉墙",tab:"goods"})]);function $(){return t.jsx(D,{containerStyle:{maxWidth:460,margin:"0 auto"},stats:C,verified:!0,badgeType:"institution",banner:t.jsx("span",{children:"@studio-vane"}),defaultActiveTab:"posts",children:t.jsx(U,{})})}const Q=Object.freeze(Object.defineProperty({__proto__:null,default:$,meta:F},Symbol.toStringTag,{value:"Module"}));function Y(){const e=b(),a=(e==null?void 0:e.activeTab)??"home";return t.jsxs("div",{style:{minHeight:120,fontSize:14,lineHeight:1.85,color:"#cfd3c4"},children:[t.jsx("b",{style:{color:"#e9ecdf",fontSize:15},children:a}),t.jsx("p",{style:{marginTop:8},children:h[a]??"（空）"})]})}const q={id:"brand-page",title:"企业号主页",group:"企业号",ref:{label:"品牌官号",url:"https://weibo.com/"},pain:"机构要蓝 V、企业简介、官网/客服入口、业务标签，还要保留关注按钮涨粉",plugs:[{fn:"createBannerSlotPlugin",cfg:"gradient: ['#0f2027','#2c5364'], avatar: logo",why:"深色品牌头图 + Logo 浮层"},{fn:"createVerifyBadgePlugin",cfg:"type: 'institution'",why:"机构蓝 V 认证"},{fn:"createBioSlotPlugin",cfg:"name, subtitle, bio",why:"企业简介 + Slogan"},{fn:"createStatRowPlugin",cfg:"items: brand.stats",why:"粉丝/内容/员工等经营指标"},{fn:"createSocialLinksPlugin",cfg:"links: [官网, 客服, 招聘]",why:"官网/客服/招聘入口"},{fn:"createTagListPlugin",cfg:"tags: [业务领域]",why:"业务标签"},{fn:"createTabSyncPlugin",cfg:"tabs: [主页, 动态, 招聘]",why:"页签切换"},{fn:"createFollowEchoPlugin",cfg:"size: 'md'",why:"关注按钮（品牌号涨粉）"},{fn:"createWorksGridPlugin",cfg:"items: brand.works, tab: 'home'",why:"主页作品/案例网格"}],props:["verified",'badgeType="institution"',"followState={serverState}","stats={brand.stats}"],note:"与个人主页是同一套 16 个插件，仅配置不同 —— 领域插件零改动即可撑起不同业务。",tone:"dark"},J=[{id:"home",label:"主页"},{id:"feeds",label:"动态"},{id:"jobs",label:"招聘"}],R=[{value:"120.5w",label:"粉丝"},{value:842,label:"内容"},{value:36,label:"在招岗位"}],X=i(s,[r({gradient:["#0f2027","#2c5364"],avatar:o,avatarRound:!1,height:150,overlay:t.jsx("strong",{children:"Vane 设计系统"})}),P({type:"institution"}),c({name:"Vane 设计系统",subtitle:"企业级组件与规范",bio:"让每一次界面搭建都从一套一致的零件开始。",location:"远程 · 全球"}),l({items:R}),g({links:[{platform:"site",href:"https://vane.dev/"},{platform:"email",href:"mailto:hello@vane.dev"},{platform:"github",href:"https://github.com/"}]}),u({tags:["设计系统","组件库","Design Token","无障碍","招聘中"]}),f({tabs:J}),d({size:"md"}),S({items:m,columns:3,title:"精选案例",tab:"home"})]);function Z(){return t.jsx(X,{containerStyle:{maxWidth:460,margin:"0 auto"},stats:R,verified:!0,badgeType:"institution",followState:"none",banner:t.jsx("span",{children:"@vane-design"}),defaultActiveTab:"home",children:t.jsx(Y,{})})}const ee=Object.freeze(Object.defineProperty({__proto__:null,default:Z,meta:q},Symbol.toStringTag,{value:"Module"})),te={id:"minimal-profile",title:"极简主页",group:"极简",ref:{label:"极简",url:"https://vane.dev/"},pain:"只想有个头图 + 关注按钮，不要页签/作品/简介这些花哨的",plugs:[{fn:"createBannerSlotPlugin",cfg:"gradient: ['#834d9b','#d04ed6'], avatar: user.avatar",why:"头图区"},{fn:"createStatRowPlugin",cfg:"items: user.stats",why:"数据行"},{fn:"createFollowEchoPlugin",cfg:"size: 'sm'",why:"关注按钮"}],props:["stats={user.stats}","followState={serverState}"],note:"只装 3 个插件：没有页签就没有内容区，没有简介区就直接从头图跳到数据行。",tone:"dark"},ae=i(s,[r({gradient:["#834d9b","#d04ed6"],avatar:o,avatarRound:!0,height:130,overlay:t.jsx("strong",{children:n.name})}),l({items:n.stats}),d({size:"sm"})]);function ne(){return t.jsx(ae,{containerStyle:{maxWidth:420,margin:"0 auto"},stats:n.stats,followState:"none",banner:t.jsxs("span",{children:["@",n.handle]})})}const ie=Object.freeze(Object.defineProperty({__proto__:null,default:ne,meta:te},Symbol.toStringTag,{value:"Module"})),re=`import React from "react";
import { ProfileCore, withPlugins, useProfileContext } from "vane-profile";
import {
  createBannerSlotPlugin,
  createStatRowPlugin,
  createTabSyncPlugin,
  createVerifyBadgePlugin,
  createFollowEchoPlugin,
  createBioSlotPlugin,
  createSocialLinksPlugin,
  createTagListPlugin,
  createWorksGridPlugin,
  createMembershipBadgePlugin,
  createQRSharePlugin,
  createLiveStatusPlugin,
  createContactCardPlugin,
  createActivitySummaryPlugin,
  createMessageButtonPlugin,
  createAchievementWallPlugin,
} from "vane-profile/custom-plugins";
import type { ScenarioMeta } from "./types";
import {
  AVATAR,
  SAMPLE_USER,
  TAB_CONTENT,
  SAMPLE_LINKS,
  SAMPLE_TAGS,
  SAMPLE_WORKS,
  SAMPLE_MEMBERSHIP,
  SAMPLE_LIVE,
  SAMPLE_CONTACT,
  SAMPLE_ACTIVITY,
  SAMPLE_ACHIEVEMENTS,
} from "../data/sample";

/** 内容区：订阅 activeTab，随页签切换重渲染（WorksGrid 接管 works 页，其余页走 children 兜底） */
function ProfileContent() {
  const ctx = useProfileContext();
  const tab = ctx?.activeTab ?? "works";
  return (
    <div style={{ minHeight: 120, fontSize: 14, lineHeight: 1.85, color: "#cfd3c4" }}>
      <b style={{ color: "#e9ecdf", fontSize: 15 }}>{tab}</b>
      <p style={{ marginTop: 8 }}>{TAB_CONTENT[tab] ?? "（空）"}</p>
    </div>
  );
}

/**
 * 01 · 全功能个人主页（对标微博 / 即刻个人页）
 *
 * 16 个官方插件按 priority 串联：头图区 / 简介区（昵称·社交·标签·直播·联系·活跃）/
 * 数据行 / 页签栏 / 徽标区（认证·会员·分享）/ 关注区（关注·私信）/ 内容区（作品·成就）。
 * Core 只负责三段式布局与生命周期转发。
 */
export const meta: ScenarioMeta = {
  id: "profile-combo",
  title: "全功能个人主页",
  group: "社交主页",
  ref: { label: "微博", url: "https://weibo.com/" },
  pain: "头图、简介、数据行、社交、标签、页签、认证、关注、作品要一起出现，还互不打架",
  plugs: [
    { fn: "createBannerSlotPlugin", cfg: "gradient: ['#6a11cb','#1a5fd0'], avatar: user.avatar", why: "头图区：渐变 + 头像浮层 + 昵称" },
    { fn: "createBioSlotPlugin", cfg: "name, bio, location, joinDate", why: "简介区：昵称/签名/地点/时间" },
    { fn: "createStatRowPlugin", cfg: "items: user.stats", why: "数据行：关注/粉丝/获赞/作品" },
    { fn: "createSocialLinksPlugin", cfg: "links: [...]", why: "社交外链行" },
    { fn: "createTagListPlugin", cfg: "tags: [...]", why: "兴趣标签" },
    { fn: "createTabSyncPlugin", cfg: "tabs: [...]", why: "页签栏 + 切换联动内容区（交互中枢）" },
    { fn: "createVerifyBadgePlugin", cfg: "type: 'personal'", why: "认证徽标浮于头图右上角" },
    { fn: "createFollowEchoPlugin", cfg: "size: 'md'", why: "关注按钮，受控于 props.followState" },
    { fn: "createWorksGridPlugin", cfg: "items: user.works, tab: 'works'", why: "作品网格，内容区随页签联动" },
    { fn: "createMembershipBadgePlugin", cfg: "level: 3", why: "会员角标（徽标区）" },
    { fn: "createQRSharePlugin", cfg: "url: user.homeUrl", why: "二维码分享（徽标区）" },
    { fn: "createLiveStatusPlugin", cfg: "status: 'live'", why: "在线/直播状态（简介区）" },
    { fn: "createContactCardPlugin", cfg: "email, site, address", why: "联系信息（简介区）" },
    { fn: "createActivitySummaryPlugin", cfg: "lastActive, postsThisMonth", why: "活跃度小结（简介区）" },
    { fn: "createMessageButtonPlugin", cfg: "label: '私信'", why: "私信按钮（关注区）" },
    { fn: "createAchievementWallPlugin", cfg: "items: user.badges, tab: 'about'", why: "成就墙（内容区，挂在「关于」页签）" },
  ],
  props: [
    "verified",
    'badgeType="personal"',
    "followState={serverState}",
    "stats={user.stats}",
    "banner={<span>@{user.handle}</span>}",
  ],
  note: "TabSync 是唯一带交互的插件；其余都是「渲染槽」，按 priority 串联，互不覆盖。作品网格与成就墙都走 renderContentArea，分别挂在「作品」「关于」页签下随页签联动。",
  tone: "dark",
};

const TABS = [
  { id: "works", label: "作品" },
  { id: "feeds", label: "动态" },
  { id: "about", label: "关于" },
];

const Profile = withPlugins(ProfileCore, [
  createBannerSlotPlugin({
    gradient: ["#6a11cb", "#1a5fd0"],
    avatar: AVATAR,
    avatarRound: true,
    height: 150,
    overlay: <strong>{SAMPLE_USER.name}</strong>,
  }),
  createBioSlotPlugin({
    name: SAMPLE_USER.name,
    subtitle: "前端工程师 · 组件库作者",
    bio: SAMPLE_USER.bio,
    location: "上海",
    joinDate: "2021 加入",
  }),
  createStatRowPlugin({ items: SAMPLE_USER.stats }),
  createSocialLinksPlugin({ links: SAMPLE_LINKS }),
  createTagListPlugin({ tags: SAMPLE_TAGS }),
  createLiveStatusPlugin(SAMPLE_LIVE),
  createContactCardPlugin(SAMPLE_CONTACT),
  createActivitySummaryPlugin(SAMPLE_ACTIVITY),
  createTabSyncPlugin({ tabs: TABS }),
  createVerifyBadgePlugin({ type: "personal" }),
  createMembershipBadgePlugin(SAMPLE_MEMBERSHIP),
  createQRSharePlugin({ url: "https://vane.dev/u/frankvane" }),
  createFollowEchoPlugin({ size: "md" }),
  createMessageButtonPlugin({ label: "私信" }),
  createWorksGridPlugin({ items: SAMPLE_WORKS, columns: 3, title: "精选作品", tab: "works" }),
  createAchievementWallPlugin({ items: SAMPLE_ACHIEVEMENTS, columns: 4, title: "成就", tab: "about" }),
]);

export default function ProfileComboScenario() {
  return (
    <Profile
      containerStyle={{ maxWidth: 460, margin: "0 auto" }}
      stats={SAMPLE_USER.stats}
      verified
      badgeType="personal"
      followState="none"
      banner={<span>@{SAMPLE_USER.handle}</span>}
      defaultActiveTab="works"
    >
      <ProfileContent />
    </Profile>
  );
}
`,oe=`import React from "react";
import { ProfileCore, withPlugins, useProfileContext } from "vane-profile";
import {
  createBannerSlotPlugin,
  createStatRowPlugin,
  createTabSyncPlugin,
  createVerifyBadgePlugin,
  createBioSlotPlugin,
  createSocialLinksPlugin,
  createTagListPlugin,
  createWorksGridPlugin,
  createMembershipBadgePlugin,
  createLiveStatusPlugin,
  createContactCardPlugin,
  createMessageButtonPlugin,
  createAchievementWallPlugin,
} from "vane-profile/custom-plugins";
import type { ScenarioMeta } from "./types";
import {
  AVATAR,
  TAB_CONTENT,
  SAMPLE_LINKS,
  SAMPLE_TAGS,
  SAMPLE_WORKS,
  SAMPLE_MEMBERSHIP,
  SAMPLE_LIVE,
  SAMPLE_CONTACT,
  SAMPLE_ACHIEVEMENTS,
} from "../data/sample";

/** 内容区：订阅 activeTab */
function ProfileContent() {
  const ctx = useProfileContext();
  const tab = ctx?.activeTab ?? "posts";
  return (
    <div style={{ minHeight: 120, fontSize: 14, lineHeight: 1.85, color: "#cfd3c4" }}>
      <b style={{ color: "#e9ecdf", fontSize: 15 }}>{tab}</b>
      <p style={{ marginTop: 8 }}>{TAB_CONTENT[tab] ?? "（空）"}</p>
    </div>
  );
}

/**
 * 02 · 创作者主页（对标小红书 / B 站 UP 主页）
 *
 * 变体：机构认证 + 分段页签 + 简介/社交/标签/作品网格。
 * 演示同一套插件换配置就是另一种主页观感。
 */
export const meta: ScenarioMeta = {
  id: "creator-profile",
  title: "创作者主页",
  group: "创作者",
  ref: { label: "小红书", url: "https://www.xiaohongshu.com/" },
  pain: "创作者要机构认证 + 分段页签 + 自己的主页不显示关注按钮 + 作品墙",
  plugs: [
    { fn: "createBannerSlotPlugin", cfg: "gradient: ['#11998e','#38ef7d'], avatar: user.avatar", why: "薄荷渐变头图，区分品牌调性" },
    { fn: "createBioSlotPlugin", cfg: "name, bio, location", why: "简介区：昵称/签名/地点" },
    { fn: "createStatRowPlugin", cfg: "items: user.stats, direction: 'row'", why: "数据行展示粉丝/获赞/收藏" },
    { fn: "createSocialLinksPlugin", cfg: "links: [...]", why: "社交外链引流" },
    { fn: "createTagListPlugin", cfg: "tags: [...]", why: "内容领域标签" },
    { fn: "createLiveStatusPlugin", cfg: "status: 'live'", why: "直播中状态（简介区）" },
    { fn: "createContactCardPlugin", cfg: "email, site, address", why: "商务联系入口（简介区）" },
    { fn: "createTabSyncPlugin", cfg: "tabs: [...], variant: 'segmented'", why: "分段式页签，更紧凑" },
    { fn: "createVerifyBadgePlugin", cfg: "type: 'institution'", why: "机构认证，区别于个人" },
    { fn: "createMembershipBadgePlugin", cfg: "level: 3", why: "会员角标（徽标区）" },
    { fn: "createMessageButtonPlugin", cfg: "label: '私信'", why: "私信按钮（关注区位，自己主页也可见）" },
    { fn: "createWorksGridPlugin", cfg: "items: user.works, tab: 'posts'", why: "作品网格，随页签联动" },
    { fn: "createAchievementWallPlugin", cfg: "items: user.badges, tab: 'goods'", why: "荣誉墙（内容区，挂在「好物」页签）" },
  ],
  props: ["verified", 'badgeType="institution"', "stats={user.stats}"],
  note: "不装 FollowEcho → 自己的主页不显示关注按钮；同一套插件换配置即得另一种观感。会员角标、私信、成就墙等新增插件即插即用。",
  tone: "dark",
};

const TABS = [
  { id: "posts", label: "笔记" },
  { id: "videos", label: "视频" },
  { id: "goods", label: "好物" },
];

const STATS = [
  { value: "86.2w", label: "粉丝" },
  { value: 3120, label: "获赞" },
  { value: 458, label: "收藏" },
];

const Profile = withPlugins(ProfileCore, [
  createBannerSlotPlugin({
    gradient: ["#11998e", "#38ef7d"],
    avatar: AVATAR,
    avatarRound: true,
    height: 140,
    overlay: <strong>Studio Vane</strong>,
  }),
  createBioSlotPlugin({
    name: "Studio Vane",
    subtitle: "设计系统团队",
    bio: "每周分享组件库与可视化实战。",
    location: "杭州",
  }),
  createStatRowPlugin({ items: STATS }),
  createSocialLinksPlugin({ links: SAMPLE_LINKS }),
  createTagListPlugin({ tags: SAMPLE_TAGS }),
  createLiveStatusPlugin(SAMPLE_LIVE),
  createContactCardPlugin(SAMPLE_CONTACT),
  createTabSyncPlugin({ tabs: TABS, variant: "segmented" }),
  createVerifyBadgePlugin({ type: "institution" }),
  createMembershipBadgePlugin(SAMPLE_MEMBERSHIP),
  createMessageButtonPlugin({ label: "私信" }),
  createWorksGridPlugin({ items: SAMPLE_WORKS, columns: 3, title: "最新作品", tab: "posts" }),
  createAchievementWallPlugin({ items: SAMPLE_ACHIEVEMENTS, columns: 4, title: "荣誉墙", tab: "goods" }),
]);

export default function CreatorProfileScenario() {
  return (
    <Profile
      containerStyle={{ maxWidth: 460, margin: "0 auto" }}
      stats={STATS}
      verified
      badgeType="institution"
      banner={<span>@studio-vane</span>}
      defaultActiveTab="posts"
    >
      <ProfileContent />
    </Profile>
  );
}
`,le=`import React from "react";
import { ProfileCore, withPlugins, useProfileContext } from "vane-profile";
import {
  createBannerSlotPlugin,
  createStatRowPlugin,
  createTabSyncPlugin,
  createVerifyBadgePlugin,
  createFollowEchoPlugin,
  createBioSlotPlugin,
  createSocialLinksPlugin,
  createTagListPlugin,
  createWorksGridPlugin,
} from "vane-profile/custom-plugins";
import type { ScenarioMeta } from "./types";
import {
  AVATAR,
  TAB_CONTENT,
  SAMPLE_LINKS,
  SAMPLE_TAGS,
  SAMPLE_WORKS,
} from "../data/sample";

function ProfileContent() {
  const ctx = useProfileContext();
  const tab = ctx?.activeTab ?? "home";
  return (
    <div style={{ minHeight: 120, fontSize: 14, lineHeight: 1.85, color: "#cfd3c4" }}>
      <b style={{ color: "#e9ecdf", fontSize: 15 }}>{tab}</b>
      <p style={{ marginTop: 8 }}>{TAB_CONTENT[tab] ?? "（空）"}</p>
    </div>
  );
}

/**
 * 03 · 企业号主页（对标品牌官号 / 机构蓝 V）
 *
 * 与「个人主页」同套插件，差异在配置：机构认证 + 企业简介 + 官网/客服外链 +
 * 业务标签 + 关注按钮（品牌号需要涨粉）。演示领域插件如何零改动撑起不同业务。
 */
export const meta: ScenarioMeta = {
  id: "brand-page",
  title: "企业号主页",
  group: "企业号",
  ref: { label: "品牌官号", url: "https://weibo.com/" },
  pain: "机构要蓝 V、企业简介、官网/客服入口、业务标签，还要保留关注按钮涨粉",
  plugs: [
    { fn: "createBannerSlotPlugin", cfg: "gradient: ['#0f2027','#2c5364'], avatar: logo", why: "深色品牌头图 + Logo 浮层" },
    { fn: "createVerifyBadgePlugin", cfg: "type: 'institution'", why: "机构蓝 V 认证" },
    { fn: "createBioSlotPlugin", cfg: "name, subtitle, bio", why: "企业简介 + Slogan" },
    { fn: "createStatRowPlugin", cfg: "items: brand.stats", why: "粉丝/内容/员工等经营指标" },
    { fn: "createSocialLinksPlugin", cfg: "links: [官网, 客服, 招聘]", why: "官网/客服/招聘入口" },
    { fn: "createTagListPlugin", cfg: "tags: [业务领域]", why: "业务标签" },
    { fn: "createTabSyncPlugin", cfg: "tabs: [主页, 动态, 招聘]", why: "页签切换" },
    { fn: "createFollowEchoPlugin", cfg: "size: 'md'", why: "关注按钮（品牌号涨粉）" },
    { fn: "createWorksGridPlugin", cfg: "items: brand.works, tab: 'home'", why: "主页作品/案例网格" },
  ],
  props: ["verified", 'badgeType="institution"', "followState={serverState}", "stats={brand.stats}"],
  note: "与个人主页是同一套 16 个插件，仅配置不同 —— 领域插件零改动即可撑起不同业务。",
  tone: "dark",
};

const TABS = [
  { id: "home", label: "主页" },
  { id: "feeds", label: "动态" },
  { id: "jobs", label: "招聘" },
];

const BRAND_STATS = [
  { value: "120.5w", label: "粉丝" },
  { value: 842, label: "内容" },
  { value: 36, label: "在招岗位" },
];

const Profile = withPlugins(ProfileCore, [
  createBannerSlotPlugin({
    gradient: ["#0f2027", "#2c5364"],
    avatar: AVATAR,
    avatarRound: false,
    height: 150,
    overlay: <strong>Vane 设计系统</strong>,
  }),
  createVerifyBadgePlugin({ type: "institution" }),
  createBioSlotPlugin({
    name: "Vane 设计系统",
    subtitle: "企业级组件与规范",
    bio: "让每一次界面搭建都从一套一致的零件开始。",
    location: "远程 · 全球",
  }),
  createStatRowPlugin({ items: BRAND_STATS }),
  createSocialLinksPlugin({
    links: [
      { platform: "site", href: "https://vane.dev/" },
      { platform: "email", href: "mailto:hello@vane.dev" },
      { platform: "github", href: "https://github.com/" },
    ],
  }),
  createTagListPlugin({ tags: ["设计系统", "组件库", "Design Token", "无障碍", "招聘中"] }),
  createTabSyncPlugin({ tabs: TABS }),
  createFollowEchoPlugin({ size: "md" }),
  createWorksGridPlugin({ items: SAMPLE_WORKS, columns: 3, title: "精选案例", tab: "home" }),
]);

export default function BrandPageScenario() {
  return (
    <Profile
      containerStyle={{ maxWidth: 460, margin: "0 auto" }}
      stats={BRAND_STATS}
      verified
      badgeType="institution"
      followState="none"
      banner={<span>@vane-design</span>}
      defaultActiveTab="home"
    >
      <ProfileContent />
    </Profile>
  );
}
`,se=`import React from "react";
import { ProfileCore, withPlugins } from "vane-profile";
import {
  createBannerSlotPlugin,
  createStatRowPlugin,
  createFollowEchoPlugin,
} from "vane-profile/custom-plugins";
import type { ScenarioMeta } from "./types";
import { AVATAR, SAMPLE_USER } from "../data/sample";

/**
 * 04 · 极简主页（对标纯展示型个人页）
 *
 * 只要头图 + 数据行 + 关注三件套：不装页签、不装简介、不装作品网格。
 * 演示「插件式主页」的减法 —— 不需要的能力完全不付代价。
 */
export const meta: ScenarioMeta = {
  id: "minimal-profile",
  title: "极简主页",
  group: "极简",
  ref: { label: "极简", url: "https://vane.dev/" },
  pain: "只想有个头图 + 关注按钮，不要页签/作品/简介这些花哨的",
  plugs: [
    { fn: "createBannerSlotPlugin", cfg: "gradient: ['#834d9b','#d04ed6'], avatar: user.avatar", why: "头图区" },
    { fn: "createStatRowPlugin", cfg: "items: user.stats", why: "数据行" },
    { fn: "createFollowEchoPlugin", cfg: "size: 'sm'", why: "关注按钮" },
  ],
  props: ["stats={user.stats}", "followState={serverState}"],
  note: "只装 3 个插件：没有页签就没有内容区，没有简介区就直接从头图跳到数据行。",
  tone: "dark",
};

const Profile = withPlugins(ProfileCore, [
  createBannerSlotPlugin({
    gradient: ["#834d9b", "#d04ed6"],
    avatar: AVATAR,
    avatarRound: true,
    height: 130,
    overlay: <strong>{SAMPLE_USER.name}</strong>,
  }),
  createStatRowPlugin({ items: SAMPLE_USER.stats }),
  createFollowEchoPlugin({ size: "sm" }),
]);

export default function MinimalProfileScenario() {
  return (
    <Profile
      containerStyle={{ maxWidth: 420, margin: "0 auto" }}
      stats={SAMPLE_USER.stats}
      followState="none"
      banner={<span>@{SAMPLE_USER.handle}</span>}
    />
  );
}
`,ce=Object.assign({"./01-profile-combo.tsx":H,"./02-creator-profile.tsx":Q,"./03-brand-page.tsx":ee,"./04-minimal.tsx":ie}),ge=Object.assign({"./01-profile-combo.tsx":re,"./02-creator-profile.tsx":oe,"./03-brand-page.tsx":le,"./04-minimal.tsx":se}),ue=e=>e.replace(/^\.\//,""),k=Object.entries(ce).map(([e,a])=>{const x=ue(e);return{meta:a.meta,Component:a.default,file:x,source:ge[e]??""}}).sort((e,a)=>e.file.localeCompare(a.file)),Pe=k.reduce((e,a)=>(e.includes(a.meta.group)||e.push(a.meta.group),e),[]),de=Array.from(new Set(k.flatMap(e=>e.meta.plugs.map(a=>a.fn)))).sort();export{Pe as G,k as S,de as U};
