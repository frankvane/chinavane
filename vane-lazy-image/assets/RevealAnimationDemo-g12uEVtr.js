const t=`import React from "react";
import { LazyLoadImageCore } from "vane-lazy-image/core";
import { withPlugins } from "vane-lazy-image/plugins";
import { createRevealAnimationPlugin } from "vane-lazy-image/custom-plugins";
import DemoPage from "./_layout/DemoPage";

const PageTitle = "RevealAnimation Plugin - 图片揭示动画";

// 基础淡入动画
const ImageWithFade = withPlugins(LazyLoadImageCore as any, [
  createRevealAnimationPlugin({
    animation: 'fade',
    duration: 600,
    easing: 'ease-out',
  }),
]);

// 从下淡入上移
const ImageWithFadeUp = withPlugins(LazyLoadImageCore as any, [
  createRevealAnimationPlugin({
    animation: 'fade-up',
    duration: 800,
    easing: 'ease-out',
  }),
]);

// 缩放进入
const ImageWithZoomIn = withPlugins(LazyLoadImageCore as any, [
  createRevealAnimationPlugin({
    animation: 'zoom-in',
    duration: 700,
    easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  }),
]);

// 旋转进入
const ImageWithRotateIn = withPlugins(LazyLoadImageCore as any, [
  createRevealAnimationPlugin({
    animation: 'rotate-in',
    duration: 1000,
    easing: 'ease-out',
  }),
]);

// 弹跳进入
const ImageWithBounce = withPlugins(LazyLoadImageCore as any, [
  createRevealAnimationPlugin({
    animation: 'bounce',
    duration: 1200,
    easing: 'ease-out',
  }),
]);

// 弹性进入
const ImageWithElastic = withPlugins(LazyLoadImageCore as any, [
  createRevealAnimationPlugin({
    animation: 'elastic',
    duration: 1500,
    easing: 'ease-out',
  }),
]);

// X轴翻转
const ImageWithFlipX = withPlugins(LazyLoadImageCore as any, [
  createRevealAnimationPlugin({
    animation: 'flip-x',
    duration: 800,
    easing: 'ease-out',
  }),
]);

// 滑入效果
const ImageWithSlideRight = withPlugins(LazyLoadImageCore as any, [
  createRevealAnimationPlugin({
    animation: 'slide-right',
    duration: 700,
    easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  }),
]);

const RevealAnimationDemo = () => {
  const [resetKey, setResetKey] = React.useState(0);

  return (
    <DemoPage
      title={PageTitle}
      description="为图片加载添加各种进场动画效果，提升视觉体验。纯 CSS 实现，无依赖。💡 提示：点击右上角的'🔄 全局重试'按钮可以重新观看所有动画效果。"
    >
      <button
        style={{
          position: 'fixed',
          top: 20,
          right: 20,
          zIndex: 1000,
          padding: '10px 20px',
          fontSize: '14px',
          fontWeight: 600,
          color: '#fff',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)',
          transition: 'all 0.3s ease',
        }}
        onClick={() => setResetKey(prev => prev + 1)}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.6)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.4)';
        }}
        title="重新加载所有图片和动画效果"
      >
        🔄 全局重试
      </button>

      <div key={resetKey}>

      {/* 基础动画 */}
      <section style={{ marginBottom: 60 }}>
        <h2 style={{ marginBottom: 20, fontSize: 24, fontWeight: 600, color: "#333" }}>
          📌 基础动画效果
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: 30 }}>
          <div>
            <h3 style={{ marginBottom: 10, fontSize: 16, fontWeight: 600 }}>淡入（Fade）</h3>
            <p style={{ color: "#666", marginBottom: 12, fontSize: 14 }}>
              最简单的淡入效果，适合大部分场景
            </p>
            <ImageWithFade
              src="https://picsum.photos/id/1015/400/300"
              alt="淡入动画示例"
              loading="lazy"
              containerStyle={{ width: 400, height: 300, position: "relative" }}
              imageStyle={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "8px" }}
            />
          </div>

          <div>
            <h3 style={{ marginBottom: 10, fontSize: 16, fontWeight: 600 }}>从下淡入上移（Fade Up）</h3>
            <p style={{ color: "#666", marginBottom: 12, fontSize: 14 }}>
              从下方淡入同时上移，动感十足
            </p>
            <ImageWithFadeUp
              src="https://picsum.photos/id/1018/400/300"
              alt="从下淡入上移示例"
              loading="lazy"
              containerStyle={{ width: 400, height: 300, position: "relative" }}
              imageStyle={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "8px" }}
            />
          </div>

          <div>
            <h3 style={{ marginBottom: 10, fontSize: 16, fontWeight: 600 }}>缩放进入（Zoom In）</h3>
            <p style={{ color: "#666", marginBottom: 12, fontSize: 14 }}>
              从小到大缩放进入，突出重点
            </p>
            <ImageWithZoomIn
              src="https://picsum.photos/id/1019/400/300"
              alt="缩放进入示例"
              loading="lazy"
              containerStyle={{ width: 400, height: 300, position: "relative" }}
              imageStyle={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "8px" }}
            />
          </div>
        </div>
      </section>

      {/* 创意动画 */}
      <section style={{ marginBottom: 60 }}>
        <h2 style={{ marginBottom: 20, fontSize: 24, fontWeight: 600, color: "#333" }}>
          ✨ 创意动画效果
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: 30 }}>
          <div>
            <h3 style={{ marginBottom: 10, fontSize: 16, fontWeight: 600 }}>旋转进入（Rotate In）</h3>
            <p style={{ color: "#666", marginBottom: 12, fontSize: 14 }}>
              旋转同时缩放进入，视觉冲击强
            </p>
            <ImageWithRotateIn
              src="https://picsum.photos/id/1020/400/300"
              alt="旋转进入示例"
              loading="lazy"
              containerStyle={{ width: 400, height: 300, position: "relative" }}
              imageStyle={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "8px" }}
            />
          </div>

          <div>
            <h3 style={{ marginBottom: 10, fontSize: 16, fontWeight: 600 }}>弹跳进入（Bounce）</h3>
            <p style={{ color: "#666", marginBottom: 12, fontSize: 14 }}>
              弹跳效果，活泼有趣
            </p>
            <ImageWithBounce
              src="https://picsum.photos/id/1021/400/300"
              alt="弹跳进入示例"
              loading="lazy"
              containerStyle={{ width: 400, height: 300, position: "relative" }}
              imageStyle={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "8px" }}
            />
          </div>

          <div>
            <h3 style={{ marginBottom: 10, fontSize: 16, fontWeight: 600 }}>弹性进入（Elastic）</h3>
            <p style={{ color: "#666", marginBottom: 12, fontSize: 14 }}>
              弹性缩放效果，更加自然
            </p>
            <ImageWithElastic
              src="https://picsum.photos/id/1022/400/300"
              alt="弹性进入示例"
              loading="lazy"
              containerStyle={{ width: 400, height: 300, position: "relative" }}
              imageStyle={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "8px" }}
            />
          </div>
        </div>
      </section>

      {/* 高级动画 */}
      <section>
        <h2 style={{ marginBottom: 20, fontSize: 24, fontWeight: 600, color: "#333" }}>
          🎯 高级动画效果
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: 30 }}>
          <div>
            <h3 style={{ marginBottom: 10, fontSize: 16, fontWeight: 600 }}>X轴翻转（Flip X）</h3>
            <p style={{ color: "#666", marginBottom: 12, fontSize: 14 }}>
              3D 翻转效果，科技感十足
            </p>
            <ImageWithFlipX
              src="https://picsum.photos/id/1023/400/300"
              alt="X轴翻转示例"
              loading="lazy"
              containerStyle={{ width: 400, height: 300, position: "relative" }}
              imageStyle={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "8px" }}
            />
          </div>

          <div>
            <h3 style={{ marginBottom: 10, fontSize: 16, fontWeight: 600 }}>滑入（Slide Right）</h3>
            <p style={{ color: "#666", marginBottom: 12, fontSize: 14 }}>
              从左侧滑入，方向感明确
            </p>
            <ImageWithSlideRight
              src="https://picsum.photos/id/1024/400/300"
              alt="滑入示例"
              loading="lazy"
              containerStyle={{ width: 400, height: 300, position: "relative" }}
              imageStyle={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "8px" }}
            />
          </div>
        </div>
      </section>

      {/* 使用说明 */}
      <section style={{ marginTop: 60, padding: 24, background: "#f8f9fa", borderRadius: 8 }}>
        <h2 style={{ marginBottom: 16, fontSize: 20, fontWeight: 600, color: "#333" }}>
          📖 使用说明
        </h2>
        <pre style={{ background: "#fff", padding: 16, borderRadius: 4, overflow: "auto", fontSize: 14 }}>
{\`import { withPlugins } from "vane-lazy-image/plugins";
import { createRevealAnimationPlugin } from "vane-lazy-image/custom-plugins";

const ImageWithAnimation = withPlugins([
  createRevealAnimationPlugin({
    animation: 'fade-up',    // 动画类型
    duration: 800,           // 持续时间（毫秒）
    easing: 'ease-out',      // 缓动函数
    delay: 0,                // 延迟（毫秒）
    fillMode: 'both',        // 动画填充模式
  }),
]);

// 使用组件
<ImageWithAnimation
  src="your-image.jpg"
  alt="描述"
  loading="lazy"
  containerStyle={{ width: 400, height: 300 }}
/>\`}
        </pre>
      </section>
      </div>
    </DemoPage>
  );
};

export default RevealAnimationDemo;

`;export{t as default};
