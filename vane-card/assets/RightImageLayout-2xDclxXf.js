const r=`/**\r
 * 右图布局示例（内容在左，图片在右）\r
 * 标准卡片样式，适合列表/详情推荐位\r
 */\r
\r
import {\r
  CardCore,\r
  createActionsPlugin,\r
  createHoverPlugin,\r
  createStatePlugin,\r
  withPlugins,\r
} from "vane-card";\r
\r
import DemoPage from "../_layout/DemoPage";\r
import React from "react";\r
\r
interface ProductData {\r
  id: string;\r
  name: string;\r
  price: number;\r
  description?: string;\r
  image: string;\r
}\r
\r
const RightImageCard = withPlugins(CardCore, {\r
  plugins: [\r
    createHoverPlugin({ enableShadow: true }),\r
    createStatePlugin({ enableCart: true, enableWishlist: true }),\r
    createActionsPlugin({ showCartButton: true, showWishlistButton: true }),\r
  ],\r
});\r
\r
export default function RightImageLayout() {\r
  const products: ProductData[] = [\r
    {\r
      id: "1",\r
      name: "降噪蓝牙耳机",\r
      price: 1299,\r
      description: "主动降噪，HiFi音质，30小时续航",\r
      image:\r
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800",\r
    },\r
    {\r
      id: "2",\r
      name: "现代风格椅子",\r
      price: 799,\r
      description: "北欧设计，简约时尚，适合多种家居风格",\r
      image:\r
        "https://images.unsplash.com/photo-1503602642458-232111445657?w=800",\r
    },\r
  ];\r
\r
  return (\r
    <DemoPage\r
      title="右图布局（内容左 / 图片右）"\r
      description="标准卡片样式：内容在左，图片在右，通过 row-reverse 实现。适用于精选列表、推荐位。"\r
    >\r
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>\r
        {products.map((p) => (\r
          <RightImageCard\r
            key={p.id}\r
            cardId={p.id}\r
            data={p}\r
            containerStyle={{\r
              background: "#fff",\r
              borderRadius: "10px",\r
              border: "1px solid #eee",\r
              overflow: "hidden",\r
              display: "flex",\r
              flexDirection: "row-reverse",\r
            }}\r
          >\r
            {/* 图片（右侧） */}\r
            <div\r
              style={{\r
                width: "260px",\r
                height: "180px",\r
                flexShrink: 0,\r
                overflow: "hidden",\r
              }}\r
            >\r
              <img\r
                src={p.image}\r
                alt={p.name}\r
                style={{ width: "100%", height: "100%", objectFit: "cover" }}\r
                loading="lazy"\r
              />\r
            </div>\r
\r
            {/* 内容（左侧） */}\r
            <div style={{ flex: 1, padding: "16px" }}>\r
              <h3\r
                style={{\r
                  margin: "0 0 8px 0",\r
                  fontSize: "18px",\r
                  fontWeight: 700,\r
                  color: "#333",\r
                }}\r
              >\r
                {p.name}\r
              </h3>\r
              {p.description && (\r
                <p\r
                  style={{\r
                    margin: "0 0 12px 0",\r
                    color: "#666",\r
                    fontSize: "13px",\r
                  }}\r
                >\r
                  {p.description}\r
                </p>\r
              )}\r
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>\r
                <span\r
                  style={{ color: "#e53935", fontSize: 20, fontWeight: 800 }}\r
                >\r
                  ¥{p.price}\r
                </span>\r
              </div>\r
            </div>\r
          </RightImageCard>\r
        ))}\r
      </div>\r
\r
      <div\r
        style={{\r
          marginTop: 40,\r
          padding: 20,\r
          background: "#f5f5f5",\r
          borderRadius: 8,\r
        }}\r
      >\r
        <h2 style={{ marginTop: 0 }}>布局说明</h2>\r
        <ul style={{ lineHeight: 1.8 }}>\r
          <li>\r
            通过容器 <code>flexDirection: row-reverse</code> 让图片位于右侧\r
          </li>\r
          <li>内容区自适应，价格与描述置于左侧，视觉起点更聚焦信息</li>\r
          <li>适合推荐位、精选列表、编辑推荐卡片</li>\r
        </ul>\r
      </div>\r
    </DemoPage>\r
  );\r
}\r
`;export{r as default};
