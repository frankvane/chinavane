const r=`/**\r
 * 插槽示例：Footer Actions（底部操作区）\r
 */\r
\r
import React from "react";\r
import DemoPage from "../_layout/DemoPage";\r
import {\r
  CardCore,\r
  createActionsPlugin,\r
  createHoverPlugin,\r
  createImagePlugin,\r
  createStatePlugin,\r
  withPlugins,\r
  type CardPluginContext,\r
} from "vane-card";\r
\r
interface ProductData {\r
  id: string;\r
  name: string;\r
  price: number;\r
  image: string;\r
}\r
\r
const ProductCard = withPlugins(CardCore, {\r
  plugins: [\r
    createImagePlugin({ lazyLoad: true }),\r
    createHoverPlugin({ enableShadow: true }),\r
    createStatePlugin({ enableCart: true, enableWishlist: true }),\r
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
              borderRadius: 6,\r
              cursor: "pointer",\r
              fontWeight: 700,\r
            }}\r
          >\r
            {context.state.cart ? "已加购" : "加入购物车"}\r
          </button>\r
          <button\r
            onClick={() =>\r
              context.setState({ wishlist: !context.state.wishlist })\r
            }\r
            style={{\r
              padding: "10px 16px",\r
              background: context.state.wishlist ? "#e91e63" : "#fff",\r
              color: context.state.wishlist ? "#fff" : "#333",\r
              border: context.state.wishlist ? "none" : "1px solid #ddd",\r
              borderRadius: 6,\r
              cursor: "pointer",\r
            }}\r
          >\r
            {context.state.wishlist ? "已心愿" : "心愿单"}\r
          </button>\r
        </div>\r
      ),\r
    }),\r
  ],\r
});\r
\r
export default function FooterActionsSlots() {\r
  const products: ProductData[] = [\r
    {\r
      id: "f1",\r
      name: "现代风格椅子",\r
      price: 199,\r
      image:\r
        "https://images.unsplash.com/photo-1503602642458-232111445657?w=400",\r
    },\r
    {\r
      id: "f2",\r
      name: "时尚运动鞋",\r
      price: 399,\r
      image:\r
        "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=400",\r
    },\r
  ];\r
\r
  return (\r
    <DemoPage\r
      title="插槽示例：Footer Actions"\r
      description="通过 createActionsPlugin 在底部插入自定义操作按钮。"\r
    >\r
      <div\r
        style={{\r
          display: "grid",\r
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",\r
          gap: 20,\r
        }}\r
      >\r
        {products.map((p) => (\r
          <ProductCard\r
            key={p.id}\r
            cardId={p.id}\r
            data={p}\r
            containerStyle={{\r
              background: "#fff",\r
              borderRadius: 8,\r
              border: "1px solid #eee",\r
              overflow: "hidden",\r
            }}\r
          >\r
            <div style={{ padding: 16 }}>\r
              <h3 style={{ margin: "0 0 8px 0", fontSize: 16 }}>{p.name}</h3>\r
              <div style={{ fontSize: 18, fontWeight: 800, color: "#e53935" }}>\r
                ¥{p.price}\r
              </div>\r
            </div>\r
          </ProductCard>\r
        ))}\r
      </div>\r
    </DemoPage>\r
  );\r
}\r
`;export{r as default};
