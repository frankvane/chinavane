const n=`import React from "react";
import { LazyLoadImageCore } from "vane-lazy-image/core";
import { withPlugins } from "vane-lazy-image/plugins";
import { createPromoBadgePlugin } from "vane-lazy-image/custom-plugins";
import DemoPage from "./_layout/DemoPage";

const PromoBadgeDemo = () => {
  // NEW 标签
  const ImageWithNewBadge = withPlugins(LazyLoadImageCore as any, [
    createPromoBadgePlugin({
      type: "new",
      position: "top-left",
      animate: true,
    }),
  ]);

  // HOT 标签（带脉冲动画）
  const ImageWithHotBadge = withPlugins(LazyLoadImageCore as any, [
    createPromoBadgePlugin({
      type: "hot",
      position: "top-right",
      animate: true,
      pulse: true,
    }),
  ]);

  // SALE 丝带样式
  const ImageWithSaleRibbon = withPlugins(LazyLoadImageCore as any, [
    createPromoBadgePlugin({
      type: "sale",
      position: "top-right",
      animate: true,
      ribbon: true,
    }),
  ]);

  // LIMITED 标签
  const ImageWithLimitedBadge = withPlugins(LazyLoadImageCore as any, [
    createPromoBadgePlugin({
      type: "limited",
      position: "top-right",
      animate: true,
      pulse: true,
    }),
  ]);

  // BESTSELLER 标签
  const ImageWithBestsellerBadge = withPlugins(LazyLoadImageCore as any, [
    createPromoBadgePlugin({
      type: "bestseller",
      position: "bottom-right",
      animate: true,
    }),
  ]);

  // 自定义标签
  const ImageWithCustomBadge = withPlugins(LazyLoadImageCore as any, [
    createPromoBadgePlugin({
      type: "custom",
      text: "VIP专享",
      position: "top-left",
      animate: true,
      backgroundColor: "#FFD700",
      color: "#000",
    }),
  ]);

  // 多个标签组合（NEW + SALE + HOT）
  const ImageWithMultipleBadges = withPlugins(LazyLoadImageCore as any, [
    createPromoBadgePlugin({
      type: "new",
      position: "top-left",
      animate: true,
    }),
    createPromoBadgePlugin({
      type: "sale",
      position: "top-right",
      animate: true,
      ribbon: true,
    }),
    createPromoBadgePlugin({
      type: "hot",
      position: "bottom-right",
      animate: true,
      pulse: true,
    }),
  ]);

  return (
    <DemoPage
      title="PromoBadge Plugin"
      description="促销角标插件 - 在商品图片上显示 NEW/HOT/SALE 等促销标签，支持脉冲动画和丝带样式"
    >
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 30 }}>
        <div>
          <h3 style={{ marginBottom: 10 }}>NEW 新品标签</h3>
          <div style={{ position: "relative", display: "inline-block" }}>
            <ImageWithNewBadge
              src="https://picsum.photos/id/168/300/300"
              alt="新品商品"
              loading="lazy"
              containerStyle={{ width: 300, height: 300, position: "relative" }}
              imageStyle={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "8px" }}
            />
          </div>
        </div>

        <div>
          <h3 style={{ marginBottom: 10 }}>HOT 热门标签（脉冲动画）</h3>
          <div style={{ position: "relative", display: "inline-block" }}>
            <ImageWithHotBadge
              src="https://picsum.photos/id/175/300/300"
              alt="热门商品"
              loading="lazy"
              containerStyle={{ width: 300, height: 300, position: "relative" }}
              imageStyle={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "8px" }}
            />
          </div>
        </div>

        <div>
          <h3 style={{ marginBottom: 10 }}>SALE 促销丝带</h3>
          <div style={{ position: "relative", display: "inline-block" }}>
            <ImageWithSaleRibbon
              src="https://picsum.photos/id/188/300/300"
              alt="促销商品"
              loading="lazy"
              containerStyle={{ width: 300, height: 300, position: "relative" }}
              imageStyle={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "8px" }}
            />
          </div>
        </div>

        <div>
          <h3 style={{ marginBottom: 10 }}>LIMITED 限量标签</h3>
          <div style={{ position: "relative", display: "inline-block" }}>
            <ImageWithLimitedBadge
              src="https://picsum.photos/id/196/300/300"
              alt="限量商品"
              loading="lazy"
              containerStyle={{ width: 300, height: 300, position: "relative" }}
              imageStyle={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "8px" }}
            />
          </div>
        </div>

        <div>
          <h3 style={{ marginBottom: 10 }}>BESTSELLER 畅销标签</h3>
          <div style={{ position: "relative", display: "inline-block" }}>
            <ImageWithBestsellerBadge
              src="https://picsum.photos/id/203/300/300"
              alt="畅销商品"
              loading="lazy"
              containerStyle={{ width: 300, height: 300, position: "relative" }}
              imageStyle={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "8px" }}
            />
          </div>
        </div>

        <div>
          <h3 style={{ marginBottom: 10 }}>自定义标签</h3>
          <div style={{ position: "relative", display: "inline-block" }}>
            <ImageWithCustomBadge
              src="https://picsum.photos/id/211/300/300"
              alt="VIP专享商品"
              loading="lazy"
              containerStyle={{ width: 300, height: 300, position: "relative" }}
              imageStyle={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "8px" }}
            />
          </div>
        </div>
      </div>

      <div style={{ marginTop: 40 }}>
        <h3 style={{ marginBottom: 10 }}>🌟 多个标签组合</h3>
        <p style={{ fontSize: 14, color: "#666", marginBottom: 10 }}>
          一张图片可以同时显示多个促销标签，不同位置、不同样式
        </p>
        <div style={{ position: "relative", display: "inline-block" }}>
          <ImageWithMultipleBadges
            src="https://picsum.photos/id/220/500/400"
            alt="多标签商品"
            loading="lazy"
            containerStyle={{ width: 500, height: 400, position: "relative" }}
            imageStyle={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "8px" }}
          />
        </div>
      </div>

      <div style={{ marginTop: 30, padding: 20, backgroundColor: "#f5f5f5", borderRadius: 8 }}>
        <h4>🎯 功能特性</h4>
        <ul style={{ marginTop: 10 }}>
          <li>✅ 3种标签类型：default（默认）、ribbon（丝带）、circle（圆形）</li>
          <li>✅ 支持自定义文字、背景色、文字颜色</li>
          <li>✅ 脉冲动画效果（吸引注意力）</li>
          <li>✅ 丝带样式（倾斜45度）</li>
          <li>✅ 4个位置可选（四角）</li>
          <li>✅ <strong>支持同一图片显示多个标签</strong></li>
        </ul>

        <h4 style={{ marginTop: 20 }}>💡 使用场景</h4>
        <ul style={{ marginTop: 10 }}>
          <li>🆕 新品上市标记</li>
          <li>🔥 热销商品突出</li>
          <li>💰 促销活动标识</li>
          <li>⏰ 限时限量提醒</li>
          <li>👑 VIP/会员专享</li>
        </ul>
      </div>
    </DemoPage>
  );
};

export default PromoBadgeDemo;

`;export{n as default};
