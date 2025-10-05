const r=`import React, { useMemo, useState } from "react";\r
import { WaterfallCore, withPlugins } from "@/components/WaterfallPlugin";\r
\r
import DemoPage from "./_layout/DemoPage";\r
import { createSortPlugin } from "@/components/WaterfallPlugin/custom-plugins";\r
\r
type Order = "asc" | "desc";\r
type SortBy = "date" | "size" | "name";\r
\r
interface Item { id: number; name: string; date: number; size: number; color: string; height: number; }\r
\r
const items = Array.from({ length: 90 }, (_, i) => ({\r
  id: i + 1,\r
  name: \`Item \${String(i + 1).padStart(2, "0")}\`,\r
  date: Date.now() - i * 1000 * 60 * 60,\r
  size: Math.floor(Math.random() * 1000),\r
  color: \`hsl(\${(i * 17) % 360}, 72%, 85%)\`,\r
  height: 120 + Math.floor(Math.random() * 160),\r
}));\r
\r
export default function SortDemo() {\r
  const [sortBy, setSortBy] = useState<SortBy>("date");\r
  const [order, setOrder] = useState<Order>("desc");\r
\r
  const WaterfallWithSort = useMemo(\r
    () => withPlugins(WaterfallCore, [\r
      createSortPlugin<Item>({ scrollToTop: true, scrollBehavior: "smooth" }),\r
    ]),\r
    []\r
  );\r
\r
  const comparator = (a: Item, b: Item) => {\r
    let v = 0;\r
    switch (sortBy) {\r
      case "date":\r
        v = a.date - b.date;\r
        break;\r
      case "size":\r
        v = a.size - b.size;\r
        break;\r
      case "name":\r
        v = a.name.localeCompare(b.name);\r
        break;\r
    }\r
    return order === "asc" ? v : -v;\r
  };\r
  const WaterfallCompAny = WaterfallWithSort as any;\r
\r
  return (\r
    <DemoPage title="Sort 插件演示" description="根据选择的规则对项目排序。">\r
      <div style={{ marginBottom: 12, display: "flex", gap: 8, alignItems: "center" }}>\r
        <label>排序字段：</label>\r
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value as SortBy)}>\r
          <option value="date">date</option>\r
          <option value="size">size</option>\r
          <option value="name">name</option>\r
        </select>\r
        <label>顺序：</label>\r
        <select value={order} onChange={(e) => setOrder(e.target.value as Order)}>\r
          <option value="asc">asc</option>\r
          <option value="desc">desc</option>\r
        </select>\r
      </div>\r
\r
      <div style={{ height: 600, border: "1px solid #ddd", borderRadius: 8, overflow: "hidden" }}>\r
        {/** 使用 JSX 方式渲染，避免将组件当作函数调用 */}\r
        <WaterfallCompAny\r
          items={items}\r
          columns={4}\r
          gap={12}\r
          sortComparator={comparator}\r
          scrollToTopOnSortChange={true}\r
          scrollToTopBehavior={"smooth"}\r
          containerStyle={{\r
            height: "100%",\r
            background: "#f5f5f5",\r
            padding: "16px",\r
          }}\r
          renderItem={(item: Item) => (\r
            <div style={{ background: item.color, height: item.height, borderRadius: 6, padding: "8px 10px" }}>\r
              <div style={{ fontWeight: 600 }}>{item.name}</div>\r
              <div style={{ fontSize: 12, color: "#666" }}>size: {item.size}</div>\r
            </div>\r
          )}\r
        />\r
      </div>\r
    </DemoPage>\r
  );\r
}`;export{r as default};
