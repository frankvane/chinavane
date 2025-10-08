const r=`import DemoPage from "../../_layout/DemoPage";\r
import { ProductCard } from "vane-card";\r
import React from "react";\r
\r
const productLeft = {\r
  id: "lr-100",\r
  title: "轻便休闲运动鞋",\r
  description: "透气网面与轻量鞋底，适合通勤与慢跑",\r
  price: 289,\r
  image:\r
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop",\r
  badge: "热卖",\r
  rating: 4.5,\r
  ratingCount: 920,\r
  inventory: 12,\r
};\r
\r
const productRight = {\r
  id: "lr-200",\r
  title: "城市旅行背包",\r
  description: "多仓位设计，减重肩带，防泼水材质",\r
  price: 599,\r
  image:\r
    "https://picsum.photos/seed/backpack/800/800",\r
  badge: "甄选",\r
  rating: 4.7,\r
  ratingCount: 312,\r
  inventory: 7,\r
};\r
\r
const LeftRightCompound: React.FC = () => {\r
  return (\r
    <DemoPage\r
      title="左右布局：图片 + 内容"\r
      description="左右分栏布局：左图右文 / 右图左文。通过组合子组件控制布局与结构。"\r
    >\r
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>\r
        {/* 左图右文 */}\r
        <div className="card" style={{ padding: 12 }}>\r
          <ProductCard productId={productLeft.id} data={productLeft}>\r
            <div style={{ display: "flex", alignItems: "stretch", gap: 12 }}>\r
              <div style={{ flex: "0 0 220px" }}>\r
                <ProductCard.Image style={{ width: 220, height: 220, borderRadius: 10, objectFit: "cover" }} />\r
              </div>\r
              <div style={{ flex: 1, padding: 12 }}>\r
                <ProductCard.Badge />\r
                <ProductCard.Title />\r
                <ProductCard.Price />\r
                <ProductCard.Description />\r
                <ProductCard.Rating />\r
                <ProductCard.Inventory />\r
                <div style={{ marginTop: 8 }}>\r
                  <ProductCard.Actions />\r
                </div>\r
              </div>\r
            </div>\r
          </ProductCard>\r
        </div>\r
\r
        {/* 右图左文 */}\r
        <div className="card" style={{ padding: 12 }}>\r
          <ProductCard productId={productRight.id} data={productRight}>\r
            <div style={{ display: "flex", alignItems: "stretch", gap: 12 }}>\r
              <div style={{ flex: 1, padding: 12 }}>\r
                <ProductCard.Badge />\r
                <ProductCard.Title />\r
                <ProductCard.Price />\r
                <ProductCard.Description />\r
                <ProductCard.Rating />\r
                <ProductCard.Inventory />\r
                <div style={{ marginTop: 8 }}>\r
                  <ProductCard.Actions />\r
                </div>\r
              </div>\r
              <div style={{ flex: "0 0 220px" }}>\r
                <ProductCard.Image style={{ width: 220, height: 220, borderRadius: 10, objectFit: "cover" }} />\r
              </div>\r
            </div>\r
          </ProductCard>\r
        </div>\r
      </div>\r
    </DemoPage>\r
  );\r
};\r
\r
export default LeftRightCompound;\r
`;export{r as default};
