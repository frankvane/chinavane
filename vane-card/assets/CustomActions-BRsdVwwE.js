const r=`/**\r
 * 高级示例：自定义操作区\r
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
  type CardPluginContext,\r
} from "vane-card";\r
\r
const Card = withPlugins(CardCore, {\r
  plugins: [\r
    createHoverPlugin({ enableShadow: true }),\r
    createStatePlugin({}),\r
    createActionsPlugin({\r
      renderCustomActions: (context: CardPluginContext) => (\r
        <div style={{ padding: 12, display: "flex", gap: 8 }}>\r
          <button\r
            onClick={() => context.setState({ cart: !context.state.cart })}\r
            style={{\r
              flex: 1,\r
              padding: "10px",\r
              background: context.state.cart ? "#4CAF50" : "#FF5722",\r
              color: "#fff",\r
              border: "none",\r
              borderRadius: 4,\r
              cursor: "pointer",\r
              fontSize: 14,\r
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
export default function CustomActions() {\r
  const product = {\r
    id: "adv-ca-1",\r
    name: "自定义操作示例",\r
    price: 699,\r
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",\r
  };\r
\r
  return (\r
    <DemoPage\r
      title="高级示例：自定义操作"\r
      description="通过 ActionsPlugin 的 renderCustomActions 自定义操作区。"\r
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
            style={{ width: "100%", aspectRatio: "1/1", overflow: "hidden" }}\r
          >\r
            <img\r
              src={product.image}\r
              alt={product.name}\r
              style={{ width: "100%", height: "100%", objectFit: "cover" }}\r
              loading="lazy"\r
            />\r
          </div>\r
          <div style={{ padding: 16 }}>\r
            <h3 style={{ margin: "0 0 8px 0", fontSize: 18 }}>\r
              {product.name}\r
            </h3>\r
            <p\r
              style={{\r
                margin: 0,\r
                fontSize: 20,\r
                fontWeight: 700,\r
                color: "#e53935",\r
              }}\r
            >\r
              ¥{product.price}\r
            </p>\r
          </div>\r
        </Card>\r
      </div>\r
    </DemoPage>\r
  );\r
}\r
`;export{r as default};
