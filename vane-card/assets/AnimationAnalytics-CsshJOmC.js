const r=`/**\r
 * 高级示例：动画 + 统计\r
 */\r
\r
import {\r
  CardCore,\r
  createAnalyticsPlugin,\r
  createAnimationPlugin,\r
  createHoverPlugin,\r
  withPlugins,\r
} from "vane-card";\r
\r
import DemoPage from "../_layout/DemoPage";\r
import React from "react";\r
\r
const Card = withPlugins(CardCore, {\r
  plugins: [\r
    createAnimationPlugin(),\r
    createAnalyticsPlugin(),\r
    createHoverPlugin({ enableShadow: true }),\r
  ],\r
});\r
\r
export default function AnimationAnalytics() {\r
  const product = {\r
    id: "adv-aa-1",\r
    name: "动画 + 统计",\r
    price: 899,\r
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",\r
  };\r
\r
  return (\r
    <DemoPage\r
      title="高级示例：动画 + 统计"\r
      description="进入动画（淡入+上移）与点击统计插件的组合。"\r
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
