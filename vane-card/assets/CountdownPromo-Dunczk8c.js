const r=`/**\r
 * 高级示例：倒计时促销\r
 */\r
\r
import {\r
  CardCore,\r
  createCountdownPlugin,\r
  createHoverPlugin,\r
  createStatePlugin,\r
  withPlugins,\r
} from "vane-card";\r
\r
import DemoPage from "../_layout/DemoPage";\r
import React from "react";\r
\r
const Card = withPlugins(CardCore, {\r
  plugins: [\r
    createHoverPlugin({ enableShadow: true }),\r
    createStatePlugin({}),\r
    // 使用倒计时插件：演示 1 小时倒计时\r
    createCountdownPlugin({ durationMs: 60 * 60 * 1000, position: "top-left" }),\r
  ],\r
});\r
\r
export default function CountdownPromo() {\r
  const product = {\r
    id: "adv-cp-1",\r
    name: "限时特惠商品",\r
    price: 999,\r
    originalPrice: 1999,\r
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",\r
  };\r
\r
  return (\r
    <DemoPage\r
      title="高级示例：倒计时促销"\r
      description="倒计时徽章 + 价格对比，演示动态内容更新。"\r
    >\r
      <div style={{ maxWidth: 400, margin: "0 auto" }}>\r
        <Card\r
          cardId={product.id}\r
          data={product}\r
          containerStyle={{\r
            background: "#fff",\r
            borderRadius: 12,\r
            overflow: "hidden",\r
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",\r
          }}\r
        >\r
          <div\r
            style={{\r
              width: "100%",\r
              aspectRatio: "1/1",\r
              overflow: "hidden",\r
              position: "relative",\r
            }}\r
          >\r
            <img\r
              src={product.image}\r
              alt={product.name}\r
              style={{ width: "100%", height: "100%", objectFit: "cover" }}\r
              loading="lazy"\r
            />\r
            {/* 倒计时徽章由 CountdownPlugin 负责渲染 */}\r
            <div\r
              style={{\r
                position: "absolute",\r
                top: 8,\r
                right: 8,\r
                padding: "4px 12px",\r
                background: "#F44336",\r
                color: "#fff",\r
                fontSize: 12,\r
                fontWeight: 700,\r
                borderRadius: 4,\r
              }}\r
            >\r
              限时特惠\r
            </div>\r
          </div>\r
          <div style={{ padding: 16 }}>\r
            <h3 style={{ margin: "0 0 8px 0", fontSize: 18 }}>\r
              {product.name}\r
            </h3>\r
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>\r
              <span style={{ fontSize: 24, fontWeight: 800, color: "#e53935" }}>\r
                ¥{product.price}\r
              </span>\r
              <span\r
                style={{\r
                  fontSize: 14,\r
                  color: "#999",\r
                  textDecoration: "line-through",\r
                }}\r
              >\r
                ¥{product.originalPrice}\r
              </span>\r
              <span\r
                style={{\r
                  marginLeft: "auto",\r
                  padding: "2px 8px",\r
                  background: "#FF5722",\r
                  color: "#fff",\r
                  fontSize: 12,\r
                  borderRadius: 4,\r
                }}\r
              >\r
                5折\r
              </span>\r
            </div>\r
          </div>\r
        </Card>\r
      </div>\r
    </DemoPage>\r
  );\r
}\r
`;export{r as default};
