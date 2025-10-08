const r=`import DemoPage from "../../_layout/DemoPage";\r
import { ProductCard } from "vane-card";\r
import React from "react";\r
\r
const product = {\r
  id: "state-display-01",\r
  title: "防风轻薄外套",\r
  description: "轻薄防风面料，城市通勤与户外皆可",\r
  price: 459,\r
  image:\r
    "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=800&auto=format&fit=crop",\r
  variants: [\r
    { attributes: { 颜色: "黑", 尺码: "M" }, price: 459, stock: 7 },\r
    { attributes: { 颜色: "黑", 尺码: "L" }, price: 459, stock: 5 },\r
    { attributes: { 颜色: "灰", 尺码: "M" }, price: 449, stock: 3 },\r
    { attributes: { 颜色: "灰", 尺码: "L" }, price: 449, stock: 0 },\r
  ],\r
};\r
\r
const attributes: Record<string, string[]> = {\r
  颜色: ["黑", "灰"],\r
  尺码: ["M", "L"],\r
};\r
\r
const StateDisplayDemo: React.FC = () => {\r
  return (\r
    <DemoPage\r
      title="状态展示：价格/库存/选中信息（派生）"\r
      description="通过选择规格派生展示 Price 与 Inventory，并用 SelectedInfo 汇总当前选择状态。"\r
    >\r
      <div className="card" style={{ padding: 12 }}>\r
        <ProductCard productId={product.id} data={product}>\r
          <ProductCard.Image style={{ width: "100%", borderRadius: 8 }} />\r
\r
          <div style={{ padding: 12 }}>\r
            <ProductCard.Title />\r
            <ProductCard.Description />\r
\r
            <ProductCard.Section title="选择规格" />\r
            <ProductCard.VariantSelector attributes={attributes} />\r
            <ProductCard.SelectedInfo style={{ marginTop: 8 }} />\r
\r
            <ProductCard.Section title="派生展示：价格与库存" />\r
            <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>\r
              <span style={{ color: "#666", fontSize: 13 }}>当前价格：</span>\r
              <ProductCard.Price style={{ fontSize: 20, fontWeight: 600 }} />\r
            </div>\r
            <ProductCard.Inventory style={{ marginTop: 6 }} />\r
          </div>\r
        </ProductCard>\r
      </div>\r
    </DemoPage>\r
  );\r
};\r
\r
export default StateDisplayDemo;`;export{r as default};
