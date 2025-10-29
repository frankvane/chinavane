const r=`import React, { useState } from "react";\r
import { LazyLoadImageCore } from "vane-lazy-image/core";\r
import { withPlugins } from "vane-lazy-image/plugins";\r
import { createSocialSharePlugin } from "vane-lazy-image/custom-plugins";\r
import DemoPage from "./_layout/DemoPage";\r
\r
const SocialShareDemo = () => {\r
  const [lastShared, setLastShared] = useState<string>("");\r
\r
  // 默认配置\r
  const ImageWithShareButtons = withPlugins(LazyLoadImageCore as any, [\r
    createSocialSharePlugin({\r
      platforms: ['facebook', 'twitter', 'pinterest'],\r
      position: "top-right",\r
      showOnHover: false,\r
      title: "Amazing Product",\r
      description: "Check out this amazing product!",\r
      onShare: (platform: string) => {\r
        console.log("分享到:", platform);\r
        setLastShared(platform);\r
      },\r
    }),\r
  ]);\r
\r
  // 悬停显示\r
  const ImageWithHoverShare = withPlugins(LazyLoadImageCore as any, [\r
    createSocialSharePlugin({\r
      platforms: ['facebook', 'twitter', 'linkedin', 'whatsapp'],\r
      position: "top-right",\r
      showOnHover: true,\r
      size: "medium",\r
    }),\r
  ]);\r
\r
  // 更多平台\r
  const ImageWithMorePlatforms = withPlugins(LazyLoadImageCore as any, [\r
    createSocialSharePlugin({\r
      platforms: ['facebook', 'twitter', 'pinterest', 'linkedin', 'whatsapp', 'wechat'],\r
      position: "bottom-right",\r
      showOnHover: false,\r
      size: "small",\r
    }),\r
  ]);\r
\r
  // 大尺寸按钮\r
  const ImageWithLargeButtons = withPlugins(LazyLoadImageCore as any, [\r
    createSocialSharePlugin({\r
      platforms: ['facebook', 'twitter', 'pinterest'],\r
      position: "top-left",\r
      showOnHover: false,\r
      size: "large",\r
    }),\r
  ]);\r
\r
  return (\r
    <DemoPage\r
      title="SocialShare Plugin"\r
      description="社交分享插件 - 在商品图片上显示社交媒体分享按钮，支持 Facebook、Twitter、Pinterest 等平台"\r
    >\r
      {lastShared && (\r
        <div\r
          style={{\r
            padding: 15,\r
            marginBottom: 20,\r
            backgroundColor: "#e8f5e9",\r
            borderRadius: 8,\r
            borderLeft: "4px solid #4CAF50",\r
          }}\r
        >\r
          <strong>✅ 分享成功！</strong> 分享到: <strong>{lastShared}</strong>\r
        </div>\r
      )}\r
\r
      <div style={{ marginBottom: 40 }}>\r
        <h3 style={{ marginBottom: 10 }}>默认分享按钮</h3>\r
        <p style={{ fontSize: 14, color: "#666", marginBottom: 10 }}>\r
          点击主按钮展开，再点击具体平台进行分享\r
        </p>\r
        <div style={{ position: "relative", display: "inline-block" }}>\r
          <ImageWithShareButtons\r
            src="https://picsum.photos/id/237/500/400"\r
            alt="商品图片 - 分享按钮"\r
            imageStyle={{ borderRadius: "8px" }}\r
          />\r
        </div>\r
      </div>\r
\r
      <div style={{ marginBottom: 40 }}>\r
        <h3 style={{ marginBottom: 10 }}>悬停显示（鼠标悬停时出现）</h3>\r
        <p style={{ fontSize: 14, color: "#666", marginBottom: 10 }}>\r
          将鼠标悬停在图片上查看分享按钮\r
        </p>\r
        <div style={{ position: "relative", display: "inline-block" }}>\r
          <ImageWithHoverShare\r
            src="https://picsum.photos/id/247/500/400"\r
            alt="商品图片 - 悬停分享"\r
            imageStyle={{ borderRadius: "8px" }}\r
          />\r
        </div>\r
      </div>\r
\r
      <div style={{ marginBottom: 40 }}>\r
        <h3 style={{ marginBottom: 10 }}>更多平台（包含微信）</h3>\r
        <div style={{ position: "relative", display: "inline-block" }}>\r
          <ImageWithMorePlatforms\r
            src="https://picsum.photos/id/257/500/400"\r
            alt="商品图片 - 更多平台"\r
            imageStyle={{ borderRadius: "8px" }}\r
          />\r
        </div>\r
      </div>\r
\r
      <div style={{ marginBottom: 40 }}>\r
        <h3 style={{ marginBottom: 10 }}>大尺寸按钮</h3>\r
        <div style={{ position: "relative", display: "inline-block" }}>\r
          <ImageWithLargeButtons\r
            src="https://picsum.photos/id/267/500/400"\r
            alt="商品图片 - 大按钮"\r
            imageStyle={{ borderRadius: "8px" }}\r
          />\r
        </div>\r
      </div>\r
\r
      <div style={{ marginTop: 30, padding: 20, backgroundColor: "#f5f5f5", borderRadius: 8 }}>\r
        <h4>🎯 功能特性</h4>\r
        <ul style={{ marginTop: 10 }}>\r
          <li>✅ 支持6大社交平台：Facebook、Twitter、Pinterest、LinkedIn、WhatsApp、WeChat</li>\r
          <li>✅ 悬停显示模式</li>\r
          <li>✅ 3种尺寸可选（small/medium/large）</li>\r
          <li>✅ 4个位置可选</li>\r
          <li>✅ 展开/收起动画</li>\r
          <li>✅ 分享回调通知</li>\r
          <li>✅ 自定义分享标题和描述</li>\r
        </ul>\r
\r
        <h4 style={{ marginTop: 20 }}>💡 使用场景</h4>\r
        <ul style={{ marginTop: 10 }}>\r
          <li>🛍️ 电商产品分享</li>\r
          <li>📰 内容营销推广</li>\r
          <li>🎨 作品集展示</li>\r
          <li>📸 照片/图片社区</li>\r
          <li>🎁 礼物推荐分享</li>\r
          <li>🏠 房产/旅游分享</li>\r
        </ul>\r
\r
        <h4 style={{ marginTop: 20 }}>🔧 技术特点</h4>\r
        <ul style={{ marginTop: 10 }}>\r
          <li>🌐 原生分享API集成</li>\r
          <li>📱 移动端优化（WhatsApp自动识别）</li>\r
          <li>🔗 自动URL编码</li>\r
          <li>📋 微信分享自动复制链接</li>\r
          <li>🎬 流畅展开/收起动画</li>\r
          <li>📊 分享数据追踪</li>\r
        </ul>\r
\r
        <h4 style={{ marginTop: 20 }}>📈 提升转化率</h4>\r
        <ul style={{ marginTop: 10 }}>\r
          <li>🚀 病毒式传播（用户主动分享）</li>\r
          <li>📈 提升品牌曝光度</li>\r
          <li>💰 降低获客成本</li>\r
          <li>🎯 精准流量引入</li>\r
          <li>🤝 社交证明效应</li>\r
        </ul>\r
      </div>\r
    </DemoPage>\r
  );\r
};\r
\r
export default SocialShareDemo;\r
\r
`;export{r as default};
