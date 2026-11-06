const r=`// 版式参照：olehdtv 影视列表页 —— 竖版海报墙（2:3，一行 5 张，首屏 2 行）\r
// 装配：首屏优先 → 宽高比占位 → 模糊渐显 → 淡入\r
import {\r
  LazyLoadImageCore,\r
  createAspectRatioSpacerPlugin,\r
  createBlurUpPlugin,\r
  createFadeInPlugin,\r
  createPriorityLoadingPlugin,\r
  withPlugins,\r
} from "vane-lazy-image";\r
import type { CSSProperties } from "react";\r
\r
const Lazy = withPlugins(LazyLoadImageCore, [\r
  // 首屏海报是 LCP 主体，压过下游几十张图的请求\r
  createPriorityLoadingPlugin({ priority: "high" }),\r
  // 2:3 竖版占位，加载前后不跳动\r
  createAspectRatioSpacerPlugin({ ratio: 2 / 3 }),\r
  createBlurUpPlugin({ startBlur: 14, endBlur: 0, durationMs: 520 }),\r
  createFadeInPlugin({ durationMs: 320, easing: "ease-out" }),\r
]);\r
\r
const POSTERS = [\r
  { id: 1, title: "长夜将明", meta: "更新至 24 集" },\r
  { id: 2, title: "雾港", meta: "全 12 集" },\r
  { id: 3, title: "第七个春天", meta: "更新至 08 集" },\r
  { id: 4, title: "铁轨以南", meta: "全 36 集" },\r
  { id: 5, title: "海岸线", meta: "更新至 16 集" },\r
  { id: 6, title: "深水区", meta: "全 10 集" },\r
  { id: 7, title: "回声", meta: "更新至 05 集" },\r
  { id: 8, title: "南风档案", meta: "全 28 集" },\r
  { id: 9, title: "雪线", meta: "更新至 20 集" },\r
  { id: 10, title: "旧城记", meta: "全 18 集" },\r
].map((it) => ({ ...it, src: \`https://picsum.photos/seed/vane-vod-\${it.id}/300/450\` }));\r
\r
export default function PosterWall() {\r
  return (\r
    <div style={STAGE}>\r
      <div style={GRID}>\r
        {POSTERS.map((it) => (\r
          <figure key={it.id} style={CARD}>\r
            <Lazy\r
              src={it.src}\r
              alt={\`\${it.title} 海报\`}\r
              loading="lazy"\r
              containerStyle={{ width: "100%", borderRadius: 4, overflow: "hidden" }}\r
              imageStyle={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}\r
            />\r
            <figcaption style={CAPTION}>{it.title}</figcaption>\r
            <span style={META}>{it.meta}</span>\r
          </figure>\r
        ))}\r
      </div>\r
    </div>\r
  );\r
}\r
\r
const STAGE: CSSProperties = { background: "#111014", padding: 16, borderRadius: 6 };\r
const GRID: CSSProperties = {\r
  display: "grid",\r
  gridTemplateColumns: "repeat(auto-fill, minmax(96px, 1fr))",\r
  gap: 12,\r
};\r
const CARD: CSSProperties = { margin: 0, display: "flex", flexDirection: "column", gap: 4 };\r
const CAPTION: CSSProperties = {\r
  flexShrink: 0,\r
  color: "#e9e4dc",\r
  fontSize: 12,\r
  lineHeight: 1.35,\r
  overflow: "hidden",\r
  textOverflow: "ellipsis",\r
  whiteSpace: "nowrap",\r
};\r
const META: CSSProperties = { flexShrink: 0, color: "#8d857a", fontSize: 11 };\r
`;export{r as default};
