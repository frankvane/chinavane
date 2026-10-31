const r=`// 版式参照：京东搜索结果页 —— 双列商品卡（1:1 主图 + 标题 + 价格 + 店铺 + 销量）\r
// 装配：内存缓存 → 骨架屏 → 并发闸控 → 淡入\r
import {\r
  LazyLoadImageCore,\r
  createConcurrencyControlPlugin,\r
  createFadeInPlugin,\r
  createMemoryCachePlugin,\r
  createSkeletonPlugin,\r
  withPlugins,\r
} from "vane-lazy-image";\r
import type { CSSProperties } from "react";\r
\r
const Lazy = withPlugins(LazyLoadImageCore as any, [\r
  // 搜索页来回切排序/筛选，同一批主图不该重复请求\r
  createMemoryCachePlugin({ maxEntries: 240, ttlMs: 15 * 60 * 1000 }),\r
  createSkeletonPlugin({ type: "shimmer", backgroundColor: "#f2f3f5", highlightColor: "#fafafa" }),\r
  // 双列 20 个商品同时进视口，压到 6 并发，别把首屏大图挤掉\r
  createConcurrencyControlPlugin({ maxConcurrent: 6, scope: "global" }),\r
  createFadeInPlugin({ durationMs: 220 }),\r
]);\r
\r
const SKUS = [\r
  { id: 1, title: "静音无线鼠标 2.4G 双模 办公电竞", price: 69.9, shop: "小米优品", sales: "2.1万" },\r
  { id: 2, title: "机械键盘 87 键 热插拔 白轴", price: 189, shop: "京东京造", sales: "8531" },\r
  { id: 3, title: "27 英寸 2K 显示器 IPS 广色域", price: 899, shop: "AOC 旗舰店", sales: "1.2万" },\r
  { id: 4, title: "USB-C 扩展坞 六合一 4K 60Hz", price: 129, shop: "倍思官方", sales: "3.4万" },\r
  { id: 5, title: "桌面音箱 蓝牙 5.3 木质", price: 299, shop: "漫步者", sales: "6720" },\r
  { id: 6, title: "人体工学椅 网布 四向扶手", price: 1099, shop: "西昊旗舰店", sales: "4180" },\r
].map((it) => ({ ...it, src: \`https://picsum.photos/seed/vane-jd-\${it.id}/360/360\` }));\r
\r
export default function JdSearchGrid() {\r
  return (\r
    <div style={STAGE}>\r
      <p style={BAR}>鼠标 · 共 12,486 件商品 · 按销量排序</p>\r
      <div style={GRID}>\r
        {SKUS.map((sku) => (\r
          <article key={sku.id} style={CARD}>\r
            <Lazy\r
              src={sku.src}\r
              alt={sku.title}\r
              loading="lazy"\r
              containerStyle={{ width: "100%",
 aspectRatio: "1", borderRadius: 8, overflow: "hidden" }}\r
              imageStyle={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}\r
            />\r
            <p style={PRICE}>\r
              <span style={SYMBOL}>¥</span>\r
              {sku.price.toFixed(2)}\r
            </p>\r
            <p style={TITLE}>{sku.title}</p>\r
            <p style={META}>\r
              {sku.shop} · {sku.sales} 人付款\r
            </p>\r
          </article>\r
        ))}\r
      </div>\r
    </div>\r
  );\r
}\r
\r
const STAGE: CSSProperties = { background: "#f4f4f4", padding: 12, borderRadius: 6 };\r
const BAR: CSSProperties = { margin: "0 0 10px", fontSize: 11.5, color: "#8c8c8c" };\r
const GRID: CSSProperties = { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 };\r
const CARD: CSSProperties = {\r
  background: "#fff",\r
  borderRadius: 8,\r
  padding: 8,\r
  display: "flex",\r
  flexDirection: "column",\r
  gap: 5,\r
};\r
const PRICE: CSSProperties = { flexShrink: 0, margin: 0, color: "#e1251b", fontSize: 15, fontWeight: 600 };\r
const SYMBOL: CSSProperties = { fontSize: 11, marginRight: 1 };\r
const TITLE: CSSProperties = {\r
  flexShrink: 0,\r
  margin: 0,\r
  color: "#1a1a1a",\r
  fontSize: 11.5,\r
  lineHeight: 1.45,\r
  display: "-webkit-box",\r
  WebkitLineClamp: 2,\r
  WebkitBoxOrient: "vertical",\r
  overflow: "hidden",\r
};\r
const META: CSSProperties = { flexShrink: 0, margin: 0, color: "#9c9c9c", fontSize: 10.5 };\r
`;export{r as default};
