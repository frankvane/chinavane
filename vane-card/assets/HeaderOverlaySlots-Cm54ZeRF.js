const r=`/**\r
 * 插槽示例：Header & Overlay（评分/徽章等覆盖在图片区域）\r
 */\r
\r
import React from "react";\r
import DemoPage from "../_layout/DemoPage";\r
import {\r
  CardCore,\r
  createHoverPlugin,\r
  createImagePlugin,\r
  withPlugins,\r
  type CardPlugin,\r
  type CardPluginContext,\r
} from "vane-card";\r
\r
interface ProductData {\r
  id: string;\r
  name: string;\r
  image: string;\r
  badge?: string;\r
  rating?: number;\r
  reviews?: number;\r
}\r
\r
// 评分插件：使用 renderHeader 将评分贴在图片上\r
const createRatingPlugin = (): CardPlugin => ({\r
  name: "RatingPlugin",\r
  version: "1.0.0",\r
  priority: 30,\r
  hooks: {\r
    renderHeader: (context: CardPluginContext) => {\r
      const rating = context.data?.rating;\r
      const reviews = context.data?.reviews;\r
      if (!rating) return null;\r
      return (\r
        <div\r
          style={{\r
            position: "absolute",\r
            bottom: 8,\r
            left: 8,\r
            background: "rgba(0,0,0,0.7)",\r
            color: "#fff",\r
            padding: "4px 8px",\r
            borderRadius: 4,\r
            fontSize: 12,\r
            display: "flex",\r
            alignItems: "center",\r
            gap: 4,\r
            zIndex: 10,\r
          }}\r
        >\r
          <span>⭐</span>\r
          <span>{rating.toFixed(1)}</span>\r
          {reviews && <span style={{ opacity: 0.8 }}>({reviews})</span>}\r
        </div>\r
      );\r
    },\r
  },\r
});\r
\r
// 徽章插件：使用 renderOverlay 将促销徽章贴在图片角落\r
const createSimpleBadgePlugin = (): CardPlugin => ({\r
  name: "SimpleBadgePlugin",\r
  version: "1.0.0",\r
  priority: 40,\r
  hooks: {\r
    renderOverlay: (context: CardPluginContext) => {\r
      const badge = context.data?.badge;\r
      if (!badge) return null;\r
      return (\r
        <div\r
          style={{\r
            position: "absolute",\r
            top: 8,\r
            right: 8,\r
            padding: "4px 10px",\r
            background: "#FF5722",\r
            color: "#fff",\r
            fontSize: 12,\r
            fontWeight: 700,\r
            borderRadius: 16,\r
            zIndex: 10,\r
          }}\r
        >\r
          {badge}\r
        </div>\r
      );\r
    },\r
  },\r
});\r
\r
const ProductCard = withPlugins(CardCore, {\r
  plugins: [\r
    createImagePlugin({ lazyLoad: true }),\r
    createRatingPlugin(),\r
    createSimpleBadgePlugin(),\r
    createHoverPlugin({ enableShadow: true }),\r
  ],\r
});\r
\r
export default function HeaderOverlaySlots() {\r
  const products: ProductData[] = [\r
    {\r
      id: "h1",\r
      name: "专业单反相机",\r
      image:\r
        "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400",\r
      badge: "限时优惠",\r
      rating: 4.8,\r
      reviews: 1234,\r
    },\r
    {\r
      id: "h2",\r
      name: "旗舰耳机",\r
      image:\r
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",\r
      badge: "热卖",\r
      rating: 4.7,\r
      reviews: 980,\r
    },\r
  ];\r
\r
  return (\r
    <DemoPage\r
      title="插槽示例：Header & Overlay"\r
      description="使用插件渲染钩子在图片上叠加评分与徽章。"\r
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
              <h3 style={{ margin: 0, fontSize: 16 }}>{product.name}</h3>\r
            </div>\r
          </ProductCard>\r
        ))}\r
      </div>\r
    </DemoPage>\r
  );\r
}\r
`;export{r as default};
