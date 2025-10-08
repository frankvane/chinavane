const r=`/**\r
 * 垂直布局示例\r
 * 图片在上，内容在下的经典卡片布局\r
 */\r
\r
import {\r
  CardCore,\r
  createActionsPlugin,\r
  createBadgePlugin,\r
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
  description?: string;\r
  image: string;\r
  badge?: string;\r
  badgeType?: "premium" | "hot" | "new" | "sale";\r
}\r
\r
const VerticalCard = withPlugins(CardCore, {\r
  plugins: [\r
    createImagePlugin({ lazyLoad: true }),\r
    createBadgePlugin({ position: "top-right" }),\r
    createHoverPlugin({ enableShadow: true, enableScale: true }),\r
    createStatePlugin({ enableCart: true, enableWishlist: true }),\r
    createActionsPlugin({ showCartButton: true, showWishlistButton: true }),\r
  ],\r
});\r
\r
export default function VerticalLayout() {\r
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
    {\r
      id: "4",\r
      name: "蓝牙音箱",\r
      price: 599,\r
      description: "360度环绕音效",\r
      image:\r
        "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400",\r
    },\r
  ];\r
\r
  return (\r
    <DemoPage\r
      title="垂直布局"\r
      description="图片在上，内容在下的经典卡片布局，适用于商品列表、产品展示"\r
    >\r
      <div\r
        style={{\r
          display: "grid",\r
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",\r
          gap: "20px",\r
        }}\r
      >\r
        {products.map((product) => (\r
          <VerticalCard\r
            key={product.id}\r
            cardId={product.id}\r
            data={product}\r
            containerStyle={{\r
              background: "#fff",\r
              borderRadius: "8px",\r
              border: "1px solid #eee",\r
              overflow: "hidden",\r
            }}\r
          >\r
            <div style={{ padding: "16px" }}>\r
              <h3\r
                style={{\r
                  margin: "0 0 8px 0",\r
                  fontSize: "16px",\r
                  fontWeight: "600",\r
                }}\r
              >\r
                {product.name}\r
              </h3>\r
              {product.description && (\r
                <p\r
                  style={{\r
                    margin: "0 0 8px 0",\r
                    fontSize: "13px",\r
                    color: "#666",\r
                  }}\r
                >\r
                  {product.description}\r
                </p>\r
              )}\r
              <p\r
                style={{\r
                  margin: 0,\r
                  fontSize: "20px",\r
                  fontWeight: "bold",\r
                  color: "#e53935",\r
                }}\r
              >\r
                ¥{product.price}\r
              </p>\r
            </div>\r
          </VerticalCard>\r
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
          <li>电商商品列表</li>\r
          <li>产品展示页面</li>\r
          <li>内容卡片网格</li>\r
        </ul>\r
\r
        <h3>布局特点</h3>\r
        <ul style={{ lineHeight: 1.8 }}>\r
          <li>图片占据卡片上半部分，视觉焦点明确</li>\r
          <li>内容在下方，信息层次清晰</li>\r
          <li>适合展示图片为主的商品</li>\r
          <li>响应式网格布局，自动适配屏幕</li>\r
        </ul>\r
\r
        <h3>使用的插件</h3>\r
        <ul style={{ lineHeight: 1.8 }}>\r
          <li>\r
            <strong>ImagePlugin</strong> - 从 context.data.image 读取图片\r
          </li>\r
          <li>\r
            <strong>BadgePlugin</strong> - 从 context.data.badge 读取徽章\r
          </li>\r
          <li>\r
            <strong>HoverPlugin</strong> - 悬停时的阴影和缩放效果\r
          </li>\r
          <li>\r
            <strong>StatePlugin</strong> - 管理购物车和心愿单状态\r
          </li>\r
          <li>\r
            <strong>ActionsPlugin</strong> - 渲染操作按钮\r
          </li>\r
        </ul>\r
      </div>\r
    </DemoPage>\r
  );\r
}\r
`;export{r as default};
