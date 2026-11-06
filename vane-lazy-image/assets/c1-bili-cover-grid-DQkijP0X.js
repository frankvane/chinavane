const r=`// 版式参照：B 站首页推荐流 —— 16:9 封面栅格，右下角时长胶囊、悬停才起播\r
// 装配：宽高比占位 → 时长角标 → 视口驻留 → 淡入 →（置顶那条）视频封面起播\r
import {\r
  LazyLoadImageCore,\r
  createAspectRatioSpacerPlugin,\r
  createBadgePlugin,\r
  createFadeInPlugin,\r
  createVideoPosterPlugin,\r
  createViewportDwellPlugin,\r
  withPlugins,\r
} from "vane-lazy-image";\r
import React from "react";\r
import type { CSSProperties } from "react";\r
\r
// 公共样例视频：仅用于演示「点击封面在弹层里起播」，离线时弹层是黑的\r
const SAMPLE_VIDEO = "https://www.w3schools.com/html/mov_bbb.mp4";\r
\r
interface VideoItem {\r
  id: number;\r
  title: string;\r
  up: string;\r
  dur: string;\r
  play: string;\r
  /** 置顶那条带「起播」能力 */\r
  video?: boolean;\r
  src: string;\r
}\r
\r
const VIDEOS: VideoItem[] = [\r
  { id: 1, title: "把 20 个插件塞进一个图片组件里会发生什么", up: "范同学", dur: "12:34", play: "48.2万", video: true },\r
  { id: 2, title: "从零实现一个图片懒加载内核（上）", up: "前端自习室", dur: "26:08", play: "31.7万" },\r
  { id: 3, title: "图片加载慢？先别急着换 CDN", up: "性能小课", dur: "08:52", play: "22.4万" },\r
  { id: 4, title: "我用插件化把包体积砍了一半", up: "打包艺术家", dur: "15:20", play: "19.8万" },\r
  { id: 5, title: "手写瀑布流布局的三种方案", up: "布局研究所", dur: "18:46", play: "16.3万" },\r
  { id: 6, title: "LCP 从 4.2s 到 1.1s 的完整复盘", up: "指标警察", dur: "22:11", play: "14.1万" },\r
  { id: 7, title: "React 19 里的图片组件该长什么样", up: "新特性观察", dur: "11:03", play: "12.6万" },\r
  { id: 8, title: "弱网环境下的一次真实排查", up: "断网实验室", dur: "09:37", play: "9.4万" },\r
].map((it) => ({ ...it, src: \`https://picsum.photos/seed/vane-bili-\${it.id}/480/270\` }));\r
\r
// 每个时长不同，所以角标按条目装配；用 useMemo 固定组件身份，避免重渲染时整块重挂\r
function Cover({ v }: { v: VideoItem }) {\r
  const Lazy = React.useMemo(\r
    () =>\r
      withPlugins(LazyLoadImageCore, [\r
        createAspectRatioSpacerPlugin({ ratio: 16 / 9 }),\r
        createBadgePlugin({\r
          text: v.dur,\r
          position: "bottom-right",\r
          bgColor: "rgba(0,0,0,.7)",\r
          fontSize: 11,\r
          borderRadius: 2,\r
        }),\r
        createViewportDwellPlugin({ dwellMs: 180, onlyWhenIntersecting: true }),\r
        createFadeInPlugin({ durationMs: 260 }),\r
        // 置顶那条多挂一个「视频封面」：点封面在弹层里起播，其余保持纯封面\r
        ...(v.video\r
          ? [\r
              createVideoPosterPlugin({\r
                videoUrl: SAMPLE_VIDEO,\r
                showPlayButton: true,\r
                playInModal: true,\r
                autoPlay: false,\r
              }),\r
            ]\r
          : []),\r
      ]),\r
    [v.dur, v.video],\r
  );\r
  return (\r
    <Lazy\r
      src={v.src}\r
      alt={v.title}\r
      loading="lazy"\r
      containerStyle={{ width: "100%", borderRadius: 4, overflow: "hidden" }}\r
      imageStyle={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}\r
    />\r
  );\r
}\r
\r
export default function BiliCoverGrid() {\r
  return (\r
    <div style={STAGE}>\r
      <div style={GRID}>\r
        {VIDEOS.map((v) => (\r
          <article key={v.id} style={CELL}>\r
            <Cover v={v} />\r
            <p style={TITLE}>{v.title}</p>\r
            <p style={META}>\r
              {v.up} · {v.play} 播放\r
            </p>\r
          </article>\r
        ))}\r
      </div>\r
    </div>\r
  );\r
}\r
\r
const STAGE: CSSProperties = { background: "#ffffff", padding: 14, borderRadius: 6 };\r
const GRID: CSSProperties = {\r
  display: "grid",\r
  gridTemplateColumns: "repeat(auto-fill, minmax(168px, 1fr))",\r
  gap: 14,\r
};\r
const CELL: CSSProperties = { display: "flex", flexDirection: "column", gap: 5 };\r
const TITLE: CSSProperties = {\r
  flexShrink: 0,\r
  margin: 0,\r
  color: "#18191c",\r
  fontSize: 12.5,\r
  lineHeight: 1.45,\r
  display: "-webkit-box",\r
  WebkitLineClamp: 2,\r
  WebkitBoxOrient: "vertical",\r
  overflow: "hidden",\r
};\r
const META: CSSProperties = { flexShrink: 0, margin: 0, color: "#9499a0", fontSize: 11 };\r
`;export{r as default};
