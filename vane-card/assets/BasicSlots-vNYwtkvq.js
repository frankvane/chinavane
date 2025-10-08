const r=`/**\r
 * 插槽示例：基础（children 自定义内容）\r
 */\r
\r
import {\r
  CardCore,\r
  createActionsPlugin,\r
  createHoverPlugin,\r
  createImagePlugin,\r
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
  originalPrice?: number;\r
  shop?: string;\r
  description?: string;\r
  promotion?: string;\r
  image: string;\r
}\r
\r
const ProductCard = withPlugins(CardCore, {\r
  plugins: [\r
    createImagePlugin({ lazyLoad: true }),\r
    createHoverPlugin({ enableShadow: true, enableScale: true }),\r
    createStatePlugin({ enableCart: true, enableWishlist: true }),\r
    createActionsPlugin({ showCartButton: true, showWishlistButton: true }),\r
  ],\r
});\r
\r
export default function BasicSlots() {\r
  const products: ProductData[] = [\r
    {\r
      id: "s1",\r
      name: "降噪蓝牙耳机",\r
      price: 1299,\r
      originalPrice: 1599,\r
      shop: "音频旗舰店",\r
      description: "主动降噪，HiFi音质，30小时续航",\r
      promotion: "限时8折",\r
      image:\r
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",\r
    },\r
    {\r
      id: "s2",\r
      name: "智能机械手表",\r
      price: 2888,\r
      shop: "品牌直营",\r
      description: "瑞士机芯，蓝宝石镜面，50米防水",\r
      promotion: "满3000减200",\r
      image:\r
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",\r
    },\r
  ];\r
\r
  return (\r
    <DemoPage\r
      title="插槽示例：基础（children）"\r
      description="通过 children 自定义主要内容区域，搭配图片/操作等插件。"\r
    >\r
      <div\r
        style={{\r
          display: "grid",\r
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",\r
          gap: 20,\r
        }}\r
      >\r
        {products.map((product) => (\r
          <ProductCard\r
            key={product.id}\r
            cardId={product.id}\r
            data={product}\r
            containerStyle={{\r
              background: "#fff",\r
              borderRadius: 8,\r
              border: "1px solid #eee",\r
              overflow: "hidden",\r
            }}\r
          >\r
            <div style={{ padding: 16 }}>\r
              <h3\r
                style={{\r
                  margin: "0 0 8px 0",\r
                  fontSize: 16,\r
                  fontWeight: 600,\r
                  color: "#333",\r
                }}\r
              >\r
                {product.name}\r
              </h3>\r
\r
              {product.shop && (\r
                <div\r
                  style={{\r
                    margin: "0 0 8px 0",\r
                    fontSize: 12,\r
                    color: "#0a0",\r
                    display: "flex",\r
                    alignItems: "center",\r
                    gap: 4,\r
                  }}\r
                >\r
                  <span>🏪</span>\r
                  <span>{product.shop}</span>\r
                </div>\r
              )}\r
\r
              {product.description && (\r
                <p\r
                  style={{\r
                    margin: "0 0 8px 0",\r
                    fontSize: 13,\r
                    color: "#666",\r
                    lineHeight: 1.5,\r
                  }}\r
                >\r
                  {product.description}\r
                </p>\r
              )}\r
\r
              {product.promotion && (\r
                <div\r
                  style={{\r
                    margin: "0 0 12px 0",\r
                    padding: "4px 8px",\r
                    background: "#fff3e0",\r
                    border: "1px solid #ffe0b2",\r
                    borderRadius: 4,\r
                    fontSize: 12,\r
                    color: "#e65100",\r
                  }}\r
                >\r
                  🎁 {product.promotion}\r
                </div>\r
              )}\r
\r
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>\r
                <span\r
                  style={{ fontSize: 20, fontWeight: "bold", color: "#e53935" }}\r
                >\r
                  ¥{product.price}\r
                </span>\r
                {product.originalPrice && (\r
                  <span\r
                    style={{\r
                      fontSize: 14,\r
                      color: "#999",\r
                      textDecoration: "line-through",\r
                    }}\r
                  >\r
                    ¥{product.originalPrice}\r
                  </span>\r
                )}\r
              </div>\r
            </div>\r
          </ProductCard>\r
        ))}\r
      </div>\r
    </DemoPage>\r
  );\r
}\r
`;export{r as default};
