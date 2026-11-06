const r=`// 版式参照：爱奇艺 / olehdtv 播放页「选集」横滑条 —— 1 集 1 封面，横向滚动\r
// 装配：视口感知 → 并发闸控 → 内存缓存 → 骨架屏\r
import {\r
  LazyLoadImageCore,\r
  createConcurrencyControlPlugin,\r
  createMemoryCachePlugin,\r
  createSkeletonPlugin,\r
  createViewportAwarePlugin,\r
  withPlugins,\r
} from "vane-lazy-image";\r
import type { CSSProperties } from "react";\r
\r
const Lazy = withPlugins(LazyLoadImageCore, [\r
  // 横向滚动时只对进入视口的卡片开始加载\r
  createViewportAwarePlugin({ rootMargin: "120px", once: true }),\r
  // 选集一次滑过去会瞬间触发十几个请求，压到 4 并发\r
  createConcurrencyControlPlugin({ maxConcurrent: 4, scope: "global" }),\r
  createMemoryCachePlugin({ maxEntries: 120, ttlMs: 30 * 60 * 1000 }),\r
  createSkeletonPlugin({ type: "shimmer", borderRadius: 4 }),\r
]);\r
\r
const EPISODES = Array.from({ length: 16 }, (_, i) => ({\r
  id: i + 1,\r
  no: i + 1,\r
  src: \`https://picsum.photos/seed/vane-ep-\${i + 1}/320/180\`,\r
}));\r
\r
export default function EpisodeRow() {\r
  return (\r
    <div style={STAGE}>\r
      <p style={TITLE}>选集 · 共 24 集</p>\r
      <div style={ROW}>\r
        {EPISODES.map((ep) => (\r
          <div key={ep.id} style={CELL}>\r
            <Lazy\r
              src={ep.src}\r
              alt={\`第 \${ep.no} 集\`}\r
              loading="lazy"\r
              containerStyle={{ width: "100%", aspectRatio: "320 / 180", borderRadius: 4, overflow: "hidden" }}\r
              imageStyle={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}\r
            />\r
            <span style={NO}>第 {ep.no} 集</span>\r
          </div>\r
        ))}\r
      </div>\r
    </div>\r
  );\r
}\r
\r
const STAGE: CSSProperties = { background: "#111014", padding: 14, borderRadius: 6 };\r
const TITLE: CSSProperties = { margin: "0 0 10px", color: "#e9e4dc", fontSize: 13 };\r
const ROW: CSSProperties = {\r
  display: "flex",\r
  gap: 10,\r
  overflowX: "auto",\r
  paddingBottom: 6,\r
  scrollSnapType: "x proximity",\r
};\r
const CELL: CSSProperties = {\r
  flex: "0 0 132px",\r
  display: "flex",\r
  flexDirection: "column",\r
  gap: 4,\r
  scrollSnapAlign: "start",\r
};\r
const NO: CSSProperties = { flexShrink: 0, color: "#8d857a", fontSize: 11 };\r
`;export{r as default};
