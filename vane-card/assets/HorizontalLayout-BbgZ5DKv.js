const r=`/**\r
 * 横向布局示例（图片在左）\r
 * 紧凑型列表布局，图片在左侧，内容在右侧\r
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
  badge?: string;\r
  badgeType?: "premium" | "hot" | "new" | "sale";\r
}\r
\r
const HorizontalCard = withPlugins(CardCore, {\r
  plugins: [\r
    createHoverPlugin({ enableShadow: true, shadowIntensity: "light" }),\r
    createStatePlugin({ enableCart: true, enableWishlist: true }),\r
    createActionsPlugin({ showCartButton: true, showWishlistButton: true }),\r
  ],\r
});\r
\r
export default function HorizontalLayout() {\r
  const products: ProductData[] = [\r
    {\r
      id: "1",\r
      name: "专业运动耳机",\r
      price: 899,\r
      description: "高品质音质，舒适佩戴，长续航",\r
      image:\r
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",\r
      badge: "热卖",\r
      badgeType: "hot",\r
    },\r
    {\r
      id: "2",\r
      name: "智能手环",\r
      price: 299,\r
      description: "健康监测，运动追踪",\r
      image:\r
        "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400",\r
      badge: "新品",\r
      badgeType: "new",\r
    },\r
    {\r
      id: "3",\r
      name: "无线充电器",\r
      price: 199,\r
      description: "快速充电，支持多设备",\r
      image:\r
        "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400",\r
    },\r
  ];\r
\r
  return (\r
    <DemoPage\r
      title="横向布局（图片在左）"\r
      description="紧凑型列表布局，适用于搜索结果、列表视图"\r
    >\r
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>\r
        {products.map((product) => (\r
          <HorizontalCard\r
            key={product.id}\r
            cardId={product.id}\r
            data={product}\r
            containerStyle={{\r
              background: "#fff",\r
              borderRadius: "8px",\r
              border: "1px solid #eee",\r
              overflow: "hidden",\r
              display: "flex",\r
            }}\r
          >\r
            {/* 图片（左侧） */}\r
            <div\r
              style={{\r
                width: "120px",\r
                height: "120px",\r
                flexShrink: 0,\r
                position: "relative",\r
              }}\r
            >\r
              <img\r
                src={product.image}\r
                alt={product.name}\r
                style={{\r
                  width: "100%",\r
                  height: "100%",\r
                  objectFit: "cover",\r
                }}\r
                loading="lazy"\r
              />\r
              {product.badge && (\r
                <div\r
                  style={{\r
                    position: "absolute",\r
                    top: "4px",\r
                    right: "4px",\r
                    padding: "2px 8px",\r
                    background:\r
                      product.badgeType === "hot" ? "#FF5722" : "#4CAF50",\r
                    color: "#fff",\r
                    fontSize: "10px",\r
                    borderRadius: "4px",\r
                  }}\r
                >\r
                  {product.badge}\r
                </div>\r
              )}\r
            </div>\r
\r
            {/* 内容（右侧） */}\r
            <div\r
              style={{\r
                flex: 1,\r
                padding: "12px",\r
                display: "flex",\r
                flexDirection: "column",\r
              }}\r
            >\r
              <h3\r
                style={{\r
                  margin: "0 0 4px 0",\r
                  fontSize: "15px",\r
                  fontWeight: "600",\r
                }}\r
              >\r
                {product.name}\r
              </h3>\r
              {product.description && (\r
                <p\r
                  style={{\r
                    margin: "0 0 8px 0",\r
                    fontSize: "12px",\r
                    color: "#666",\r
                    flex: 1,\r
                  }}\r
                >\r
                  {product.description}\r
                </p>\r
              )}\r
              <div\r
                style={{\r
                  display: "flex",\r
                  alignItems: "center",\r
                  justifyContent: "space-between",\r
                }}\r
              >\r
                <span\r
                  style={{\r
                    fontSize: "18px",\r
                    fontWeight: "bold",\r
                    color: "#e53935",\r
                  }}\r
                >\r
                  ¥{product.price}\r
                </span>\r
              </div>\r
            </div>\r
          </HorizontalCard>\r
        ))}\r
      </div>\r
\r
      {/* 说明文档 */}\r
      <div\r
        style={{\r
          marginTop: "40px",\r
          padding: "20px",\r
          background: "#f5f5f5",\r
          borderRadius: "8px",\r
        }}\r
      >\r
        <h2 style={{ marginTop: 0 }}>布局说明</h2>\r
        <h3>适用场景</h3>\r
        <ul style={{ lineHeight: 1.8 }}>\r
          <li>搜索结果列表</li>\r
          <li>新闻资讯列表</li>\r
          <li>购物车页面</li>\r
          <li>订单列表</li>\r
        </ul>\r
\r
        <h3>布局特点</h3>\r
        <ul style={{ lineHeight: 1.8 }}>\r
          <li>图片在左侧，固定宽度（120px）</li>\r
          <li>内容在右侧，自适应宽度</li>\r
          <li>节省垂直空间，适合长列表</li>\r
          <li>视线从左到右，符合阅读习惯</li>\r
        </ul>\r
\r
        <h3>设计要点</h3>\r
        <ul style={{ lineHeight: 1.8 }}>\r
          <li>图片使用固定尺寸，保持列表整齐</li>\r
          <li>图片不用插件渲染，直接在 children 中灵活控制</li>\r
          <li>内容区使用 flex 布局，价格固定在底部</li>\r
        </ul>\r
      </div>\r
    </DemoPage>\r
  );\r
}\r
`;export{r as default};
