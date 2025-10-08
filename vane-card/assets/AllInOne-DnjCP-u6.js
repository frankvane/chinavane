const n=`/**\r
 * 高级示例：综合（动画 + 统计 + 自定义操作 + 倒计时）\r
 */\r
\r
import React from "react";\r
\r
import DemoPage from "../_layout/DemoPage";\r
import {\r
  CardCore,\r
  createActionsPlugin,\r
  createHoverPlugin,\r
  createStatePlugin,\r
  withPlugins,\r
  createAnimationPlugin,\r
  createAnalyticsPlugin,\r
  createCountdownPlugin,\r
  type CardPluginContext,\r
} from "vane-card";\r
\r
const Card = withPlugins(CardCore, {\r
  plugins: [\r
    createAnimationPlugin(),\r
    createAnalyticsPlugin(),\r
    createHoverPlugin({ enableShadow: true }),\r
    createStatePlugin({}),\r
    // 倒计时徽章（30 分钟）\r
    createCountdownPlugin({ durationMs: 30 * 60 * 1000, position: "top-left" }),\r
    createActionsPlugin({\r
      renderCustomActions: (context: CardPluginContext) => (\r
        <div style={{ padding: 12, display: "flex", gap: 8 }}>\r
          <button\r
            onClick={() => context.setState({ cart: !context.state.cart })}\r
            style={{\r
              flex: 1,\r
              padding: 10,\r
              background: context.state.cart ? "#4CAF50" : "#FF5722",\r
              color: "#fff",\r
              border: "none",\r
              borderRadius: 4,\r
              cursor: "pointer",\r
              fontWeight: 700,\r
            }}\r
          >\r
            {context.state.cart ? "已加购" : "立即抢购"}\r
          </button>\r
          <button\r
            onClick={() => alert("分享成功！")}\r
            style={{\r
              padding: "10px 16px",\r
              background: "#fff",\r
              color: "#333",\r
              border: "1px solid #ddd",\r
              borderRadius: 4,\r
              cursor: "pointer",\r
            }}\r
          >\r
            分享\r
          </button>\r
        </div>\r
      ),\r
    }),\r
  ],\r
});\r
\r
export default function AllInOne() {\r
  const product = {\r
    id: "adv-all-1",\r
    name: "综合高级示例",\r
    price: 899,\r
    originalPrice: 1999,\r
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",\r
  };\r
\r
  return (\r
    <DemoPage\r
      title="高级示例：综合"\r
      description="动画、统计、自定义操作与倒计时整合在一张卡片。"\r
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
            {/* 倒计时徽章由 CountdownPlugin 渲染 */}\r
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
`;export{n as default};
