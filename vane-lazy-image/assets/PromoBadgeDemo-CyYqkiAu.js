const r=`import React from "react";\r
import { LazyLoadImageCore } from "vane-lazy-image/core";\r
import { withPlugins } from "vane-lazy-image/plugins";\r
import { createPromoBadgePlugin } from "vane-lazy-image/custom-plugins";\r
import DemoPage from "./_layout/DemoPage";\r
\r
const PromoBadgeDemo = () => {\r
  // NEW 标签\r
  const ImageWithNewBadge = withPlugins(LazyLoadImageCore as any, [\r
    createPromoBadgePlugin({\r
      type: "new",\r
      position: "top-left",\r
      animate: true,\r
    }),\r
  ]);\r
\r
  // HOT 标签（带脉冲动画）\r
  const ImageWithHotBadge = withPlugins(LazyLoadImageCore as any, [\r
    createPromoBadgePlugin({\r
      type: "hot",\r
      position: "top-right",\r
      animate: true,\r
      pulse: true,\r
    }),\r
  ]);\r
\r
  // SALE 丝带样式\r
  const ImageWithSaleRibbon = withPlugins(LazyLoadImageCore as any, [\r
    createPromoBadgePlugin({\r
      type: "sale",\r
      position: "top-right",\r
      animate: true,\r
      ribbon: true,\r
    }),\r
  ]);\r
\r
  // LIMITED 标签\r
  const ImageWithLimitedBadge = withPlugins(LazyLoadImageCore as any, [\r
    createPromoBadgePlugin({\r
      type: "limited",\r
      position: "top-right",\r
      animate: true,\r
      pulse: true,\r
    }),\r
  ]);\r
\r
  // BESTSELLER 标签\r
  const ImageWithBestsellerBadge = withPlugins(LazyLoadImageCore as any, [\r
    createPromoBadgePlugin({\r
      type: "bestseller",\r
      position: "bottom-right",\r
      animate: true,\r
    }),\r
  ]);\r
\r
  // 自定义标签\r
  const ImageWithCustomBadge = withPlugins(LazyLoadImageCore as any, [\r
    createPromoBadgePlugin({\r
      type: "custom",\r
      text: "VIP专享",\r
      position: "top-left",\r
      animate: true,\r
      backgroundColor: "#FFD700",\r
      color: "#000",\r
    }),\r
  ]);\r
\r
  // 多个标签组合（NEW + SALE + HOT）\r
  const ImageWithMultipleBadges = withPlugins(LazyLoadImageCore as any, [\r
    createPromoBadgePlugin({\r
      type: "new",\r
      position: "top-left",\r
      animate: true,\r
    }),\r
    createPromoBadgePlugin({\r
      type: "sale",\r
      position: "top-right",\r
      animate: true,\r
      ribbon: true,\r
    }),\r
    createPromoBadgePlugin({\r
      type: "hot",\r
      position: "bottom-right",\r
      animate: true,\r
      pulse: true,\r
    }),\r
  ]);\r
\r
  return (\r
    <DemoPage\r
      title="PromoBadge Plugin"\r
      description="促销角标插件 - 在商品图片上显示 NEW/HOT/SALE 等促销标签，支持脉冲动画和丝带样式"\r
    >\r
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 30 }}>\r
        <div>\r
          <h3 style={{ marginBottom: 10 }}>NEW 新品标签</h3>\r
          <div style={{ position: "relative", display: "inline-block" }}>\r
            <ImageWithNewBadge\r
              src="https://picsum.photos/id/168/300/300"\r
              alt="新品商品"\r
              imageStyle={{ borderRadius: "8px", width: "100%" }}\r
            />\r
          </div>\r
        </div>\r
\r
        <div>\r
          <h3 style={{ marginBottom: 10 }}>HOT 热门标签（脉冲动画）</h3>\r
          <div style={{ position: "relative", display: "inline-block" }}>\r
            <ImageWithHotBadge\r
              src="https://picsum.photos/id/175/300/300"\r
              alt="热门商品"\r
              imageStyle={{ borderRadius: "8px", width: "100%" }}\r
            />\r
          </div>\r
        </div>\r
\r
        <div>\r
          <h3 style={{ marginBottom: 10 }}>SALE 促销丝带</h3>\r
          <div style={{ position: "relative", display: "inline-block" }}>\r
            <ImageWithSaleRibbon\r
              src="https://picsum.photos/id/188/300/300"\r
              alt="促销商品"\r
              imageStyle={{ borderRadius: "8px", width: "100%" }}\r
            />\r
          </div>\r
        </div>\r
\r
        <div>\r
          <h3 style={{ marginBottom: 10 }}>LIMITED 限量标签</h3>\r
          <div style={{ position: "relative", display: "inline-block" }}>\r
            <ImageWithLimitedBadge\r
              src="https://picsum.photos/id/196/300/300"\r
              alt="限量商品"\r
              imageStyle={{ borderRadius: "8px", width: "100%" }}\r
            />\r
          </div>\r
        </div>\r
\r
        <div>\r
          <h3 style={{ marginBottom: 10 }}>BESTSELLER 畅销标签</h3>\r
          <div style={{ position: "relative", display: "inline-block" }}>\r
            <ImageWithBestsellerBadge\r
              src="https://picsum.photos/id/203/300/300"\r
              alt="畅销商品"\r
              imageStyle={{ borderRadius: "8px", width: "100%" }}\r
            />\r
          </div>\r
        </div>\r
\r
        <div>\r
          <h3 style={{ marginBottom: 10 }}>自定义标签</h3>\r
          <div style={{ position: "relative", display: "inline-block" }}>\r
            <ImageWithCustomBadge\r
              src="https://picsum.photos/id/211/300/300"\r
              alt="VIP专享商品"\r
              imageStyle={{ borderRadius: "8px", width: "100%" }}\r
            />\r
          </div>\r
        </div>\r
      </div>\r
\r
      <div style={{ marginTop: 40 }}>\r
        <h3 style={{ marginBottom: 10 }}>🌟 多个标签组合</h3>\r
        <p style={{ fontSize: 14, color: "#666", marginBottom: 10 }}>\r
          一张图片可以同时显示多个促销标签，不同位置、不同样式\r
        </p>\r
        <div style={{ position: "relative", display: "inline-block" }}>\r
          <ImageWithMultipleBadges\r
            src="https://picsum.photos/id/220/500/400"\r
            alt="多标签商品"\r
            imageStyle={{ borderRadius: "8px" }}\r
          />\r
        </div>\r
      </div>\r
\r
      <div style={{ marginTop: 30, padding: 20, backgroundColor: "#f5f5f5", borderRadius: 8 }}>\r
        <h4>🎯 功能特性</h4>\r
        <ul style={{ marginTop: 10 }}>\r
          <li>✅ 3种标签类型：default（默认）、ribbon（丝带）、circle（圆形）</li>\r
          <li>✅ 支持自定义文字、背景色、文字颜色</li>\r
          <li>✅ 脉冲动画效果（吸引注意力）</li>\r
          <li>✅ 丝带样式（倾斜45度）</li>\r
          <li>✅ 4个位置可选（四角）</li>\r
          <li>✅ <strong>支持同一图片显示多个标签</strong></li>\r
        </ul>\r
\r
        <h4 style={{ marginTop: 20 }}>💡 使用场景</h4>\r
        <ul style={{ marginTop: 10 }}>\r
          <li>🆕 新品上市标记</li>\r
          <li>🔥 热销商品突出</li>\r
          <li>💰 促销活动标识</li>\r
          <li>⏰ 限时限量提醒</li>\r
          <li>👑 VIP/会员专享</li>\r
        </ul>\r
      </div>\r
    </DemoPage>\r
  );\r
};\r
\r
export default PromoBadgeDemo;\r
\r
`;export{r as default};
