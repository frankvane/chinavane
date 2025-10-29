const r=`import React from "react";\r
import { LazyLoadImageCore } from "vane-lazy-image/core";\r
import { withPlugins } from "vane-lazy-image/plugins";\r
import { createPriceTagPlugin } from "vane-lazy-image/custom-plugins";\r
import DemoPage from "./_layout/DemoPage";\r
\r
const PriceTagDemo = () => {\r
  // 创建带价格标签的图片组件\r
  const ImageWithPriceTag = withPlugins(LazyLoadImageCore as any, [\r
    createPriceTagPlugin({\r
      price: 299.99,\r
      currency: "$",\r
      position: "bottom-left",\r
      originalPrice: 499.99,\r
      discount: "40% OFF",\r
      showSavings: true,\r
      animate: true,\r
    }),\r
  ]);\r
\r
  const ImageWithSimplePrice = withPlugins(LazyLoadImageCore as any, [\r
    createPriceTagPlugin({\r
      price: 1999,\r
      currency: "¥",\r
      position: "top-left",\r
      animate: true,\r
    }),\r
  ]);\r
\r
  const ImageWithCustomStyle = withPlugins(LazyLoadImageCore as any, [\r
    createPriceTagPlugin({\r
      price: 59.99,\r
      currency: "€",\r
      position: "bottom-right",\r
      animate: true,\r
      backgroundColor: "#4ECDC4",\r
      textColor: "#1A535C",\r
      style: {\r
        borderRadius: "8px",\r
        padding: "12px 16px",\r
      },\r
    }),\r
  ]);\r
\r
  // 异步获取价格（模拟API请求）\r
  const ImageWithAsyncPrice = withPlugins(LazyLoadImageCore as any, [\r
    createPriceTagPlugin({\r
      currency: "¥",\r
      position: "top-right",\r
      animate: true,\r
      productId: "12345",\r
      fetchPrice: async () => {\r
        // 模拟API延迟\r
        await new Promise((resolve) => setTimeout(resolve, 1500));\r
        // 模拟API返回数据\r
        return {\r
          price: 1299.99,\r
          originalPrice: 1999,\r
          discount: "限时优惠",\r
        };\r
      },\r
      showSavings: true,\r
      loadingText: "查询价格...",\r
      errorText: "价格查询失败",\r
    }),\r
  ]);\r
\r
  return (\r
    <DemoPage\r
      title="PriceTag Plugin"\r
      description="商品价格标签插件 - 在图片上叠加价格信息，支持原价、折扣、节省金额等功能"\r
    >\r
      <div style={{ marginBottom: 40 }}>\r
        <h3 style={{ marginBottom: 10 }}>完整价格信息（带折扣和节省金额）</h3>\r
        <div style={{ position: "relative", display: "inline-block" }}>\r
          <ImageWithPriceTag\r
            src="https://picsum.photos/id/180/400/300"\r
            alt="商品图片 - 带折扣"\r
            imageStyle={{ borderRadius: "8px" }}\r
          />\r
        </div>\r
      </div>\r
\r
      <div style={{ marginBottom: 40 }}>\r
        <h3 style={{ marginBottom: 10 }}>简单价格标签</h3>\r
        <div style={{ position: "relative", display: "inline-block" }}>\r
          <ImageWithSimplePrice\r
            src="https://picsum.photos/id/201/400/300"\r
            alt="商品图片 - 简单价格"\r
            imageStyle={{ borderRadius: "8px" }}\r
          />\r
        </div>\r
      </div>\r
\r
      <div style={{ marginBottom: 40 }}>\r
        <h3 style={{ marginBottom: 10 }}>自定义样式价格标签</h3>\r
        <div style={{ position: "relative", display: "inline-block" }}>\r
          <ImageWithCustomStyle\r
            src="https://picsum.photos/id/250/400/300"\r
            alt="商品图片 - 自定义样式"\r
            imageStyle={{ borderRadius: "8px" }}\r
          />\r
        </div>\r
      </div>\r
\r
      <div style={{ marginBottom: 40 }}>\r
        <h3 style={{ marginBottom: 10 }}>🔄 异步获取价格（模拟API请求）</h3>\r
        <p style={{ fontSize: 14, color: "#666", marginBottom: 10 }}>\r
          价格数据从API异步获取，显示加载状态\r
        </p>\r
        <div style={{ position: "relative", display: "inline-block" }}>\r
          <ImageWithAsyncPrice\r
            src="https://picsum.photos/id/260/400/300"\r
            alt="商品图片 - 异步价格"\r
            imageStyle={{ borderRadius: "8px" }}\r
          />\r
        </div>\r
      </div>\r
\r
      <div style={{ marginTop: 30, padding: 20, backgroundColor: "#f5f5f5", borderRadius: 8 }}>\r
        <h4>🎯 功能特性</h4>\r
        <ul style={{ marginTop: 10 }}>\r
          <li>✅ 显示当前价格、原价、折扣标签</li>\r
          <li>✅ 计算并显示节省金额</li>\r
          <li>✅ 支持多种货币符号</li>\r
          <li>✅ 4个位置可选（四角）</li>\r
          <li>✅ 淡入动画效果</li>\r
          <li>✅ 完全自定义样式</li>\r
          <li>🆕 <strong>支持异步价格数据获取（API集成）</strong></li>\r
          <li>🆕 <strong>显示加载和错误状态</strong></li>\r
        </ul>\r
\r
        <h4 style={{ marginTop: 20 }}>💡 使用场景</h4>\r
        <ul style={{ marginTop: 10 }}>\r
          <li>🛍️ 电商产品列表</li>\r
          <li>💰 促销活动页面</li>\r
          <li>🏷️ 特价商品展示</li>\r
          <li>📱 移动端商城</li>\r
          <li>🔄 从API动态获取价格的场景</li>\r
          <li>🌐 跨境电商实时汇率转换</li>\r
        </ul>\r
      </div>\r
    </DemoPage>\r
  );\r
};\r
\r
export default PriceTagDemo;\r
\r
`;export{r as default};
