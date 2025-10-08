const r=`import DemoPage from "../../_layout/DemoPage";\r
import { ProductCard } from "vane-card";\r
import React from "react";\r
\r
const product = {\r
  id: "a11y-actions-01",\r
  title: "轻巧无线耳机",\r
  description: "降噪与通话优化，佩戴舒适，续航稳定",\r
  price: 499,\r
  image:\r
    "https://picsum.photos/seed/a11y-actions/1000/667",\r
  inventory: 26,\r
};\r
\r
const ActionsDemo: React.FC = () => {\r
  return (\r
    <DemoPage\r
      title="操作区 - Actions"\r
      description="展示复合组件的操作区：加入购物车/心愿单等操作入口，可独立工作或与插件协作。"\r
      sourceKey="compound/a11y/ActionsDemo"\r
    >\r
      <div className="card" style={{ padding: 16 }}>\r
        <ProductCard productId={product.id} data={product}>\r
          <ProductCard.Image style={{ width: "100%", aspectRatio: "4 / 3", borderRadius: 8 }} />\r
          <div style={{ padding: 16 }}>\r
            <ProductCard.Title />\r
            <ProductCard.Description style={{ color: "#666" }} />\r
\r
            <ProductCard.Section title="操作区">\r
              <div style={{ display: "grid", gap: 8 }}>\r
                {/* 复合组件内置的 Actions，读写 ProductCard 上下文的 cart/wishlist 状态 */}\r
                <ProductCard.Actions />\r
\r
                {/* 可与其他展示组件一并使用，观察状态不冲突 */}\r
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>\r
                  <span style={{ fontSize: 13, color: "#666" }}>当前价格：</span>\r
                  <ProductCard.Price style={{ fontSize: 20, fontWeight: 600 }} />\r
                </div>\r
                <ProductCard.Inventory />\r
              </div>\r
            </ProductCard.Section>\r
          </div>\r
        </ProductCard>\r
      </div>\r
\r
      <div style={{ marginTop: 32, padding: 20, background: "#f8f9fa", borderRadius: 8 }}>\r
        <h3 style={{ margin: "0 0 16px 0", fontSize: 16, color: "#333" }}>Actions 功能说明</h3>\r
        <ul style={{ margin: 0, paddingLeft: 20, color: "#666", lineHeight: 1.6 }}>\r
          <li>读写 \`ProductCard\` 上下文中的购物车与心愿单状态</li>\r
          <li>与插件区协作：可同时启用 \`ActionsPlugin\` 渲染复杂操作按钮</li>\r
          <li>与价格、库存等展示组件组合，演示常见购买流程</li>\r
        </ul>\r
      </div>\r
    </DemoPage>\r
  );\r
};\r
\r
export default ActionsDemo;`;export{r as default};
