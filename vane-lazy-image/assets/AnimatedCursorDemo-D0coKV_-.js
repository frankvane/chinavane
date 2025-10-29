const e=`import React from "react";
import { LazyLoadImageCore } from "vane-lazy-image/core";
import { withPlugins } from "vane-lazy-image/plugins";
import { createAnimatedCursorPlugin } from "vane-lazy-image/custom-plugins";
import DemoPage from "./_layout/DemoPage";

const PageTitle = "AnimatedCursor Plugin - 自定义光标动画";

// 放大镜光标
const ImageWithZoomCursor = withPlugins(LazyLoadImageCore as any, [
  createAnimatedCursorPlugin({
    style: 'zoom-in',
    enableFollower: false,
  }),
]);

// 十字准星
const ImageWithCrosshair = withPlugins(LazyLoadImageCore as any, [
  createAnimatedCursorPlugin({
    style: 'crosshair',
    enableFollower: false,
  }),
]);

// 自定义圆点 + 跟随
const ImageWithDotFollower = withPlugins(LazyLoadImageCore as any, [
  createAnimatedCursorPlugin({
    style: 'custom-dot',
    enableFollower: true,
    followerColor: 'rgba(59, 130, 246, 0.3)',
    followerSize: 50,
    followerDelay: 0.15,
    scaleOnHover: true,
    hoverScale: 1.5,
  }),
]);

// 自定义圆环
const ImageWithRing = withPlugins(LazyLoadImageCore as any, [
  createAnimatedCursorPlugin({
    style: 'custom-ring',
    scaleOnHover: true,
    hoverScale: 1.8,
  }),
]);

// 自定义加号
const ImageWithPlus = withPlugins(LazyLoadImageCore as any, [
  createAnimatedCursorPlugin({
    style: 'custom-plus',
    enableFollower: true,
    followerColor: 'rgba(147, 51, 234, 0.2)',
    followerSize: 60,
  }),
]);

// 涟漪效果
const ImageWithRipple = withPlugins(LazyLoadImageCore as any, [
  createAnimatedCursorPlugin({
    style: 'pointer',
    showRipple: true,
    enableFollower: true,
    followerColor: 'rgba(34, 197, 94, 0.3)',
    followerSize: 40,
  }),
]);

// 带文字提示
const ImageWithText = withPlugins(LazyLoadImageCore as any, [
  createAnimatedCursorPlugin({
    style: 'custom-dot',
    cursorText: '点击查看',
    enableFollower: true,
    followerColor: 'rgba(239, 68, 68, 0.3)',
  }),
]);

// 抓手光标
const ImageWithGrab = withPlugins(LazyLoadImageCore as any, [
  createAnimatedCursorPlugin({
    style: 'grab',
    enableFollower: true,
    followerColor: 'rgba(251, 191, 36, 0.3)',
    followerSize: 45,
  }),
]);

const AnimatedCursorDemo = () => {
  const [resetKey, setResetKey] = React.useState(0);

  return (
    <DemoPage
      title={PageTitle}
      description="为图片添加自定义光标和跟随动画效果，提升交互体验。纯 CSS + JS 实现。💡 提示：移动鼠标到图片上查看各种光标效果，点击右上角的'🔄 全局重试'重新加载。"
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
        title="重新加载所有图片和效果"
      >
        🔄 全局重试
      </button>

      <div key={resetKey}>

      {/* 系统光标样式 */}
      <section style={{ marginBottom: 60 }}>
        <h2 style={{ marginBottom: 20, fontSize: 24, fontWeight: 600, color: "#333" }}>
          📌 系统光标样式
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: 30 }}>
          <div>
            <h3 style={{ marginBottom: 10, fontSize: 16, fontWeight: 600 }}>放大镜（Zoom In）</h3>
            <p style={{ color: "#666", marginBottom: 12, fontSize: 14 }}>
              适合可点击放大的图片
            </p>
            <ImageWithZoomCursor
              src="https://picsum.photos/id/210/400/300"
              alt="放大镜光标"
              loading="lazy"
              containerStyle={{ width: 400, height: 300, position: "relative" }}
              imageStyle={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "8px" }}
            />
          </div>

          <div>
            <h3 style={{ marginBottom: 10, fontSize: 16, fontWeight: 600 }}>十字准星（Crosshair）</h3>
            <p style={{ color: "#666", marginBottom: 12, fontSize: 14 }}>
              精准指示，适合需要精确操作的场景
            </p>
            <ImageWithCrosshair
              src="https://picsum.photos/id/211/400/300"
              alt="十字准星"
              loading="lazy"
              containerStyle={{ width: 400, height: 300, position: "relative" }}
              imageStyle={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "8px" }}
            />
          </div>

          <div>
            <h3 style={{ marginBottom: 10, fontSize: 16, fontWeight: 600 }}>抓手（Grab）</h3>
            <p style={{ color: "#666", marginBottom: 12, fontSize: 14 }}>
              暗示可以拖拽或移动
            </p>
            <ImageWithGrab
              src="https://picsum.photos/id/212/400/300"
              alt="抓手光标"
              loading="lazy"
              containerStyle={{ width: 400, height: 300, position: "relative" }}
              imageStyle={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "8px" }}
            />
          </div>
        </div>
      </section>

      {/* 自定义光标样式 */}
      <section style={{ marginBottom: 60 }}>
        <h2 style={{ marginBottom: 20, fontSize: 24, fontWeight: 600, color: "#333" }}>
          ✨ 自定义光标样式
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: 30 }}>
          <div>
            <h3 style={{ marginBottom: 10, fontSize: 16, fontWeight: 600 }}>圆点 + 跟随效果</h3>
            <p style={{ color: "#666", marginBottom: 12, fontSize: 14 }}>
              蓝色跟随圆圈，悬停时放大
            </p>
            <ImageWithDotFollower
              src="https://picsum.photos/id/213/400/300"
              alt="圆点跟随"
              loading="lazy"
              containerStyle={{ width: 400, height: 300, position: "relative" }}
              imageStyle={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "8px" }}
            />
          </div>

          <div>
            <h3 style={{ marginBottom: 10, fontSize: 16, fontWeight: 600 }}>圆环光标</h3>
            <p style={{ color: "#666", marginBottom: 12, fontSize: 14 }}>
              简洁的圆环设计，悬停时缩放
            </p>
            <ImageWithRing
              src="https://picsum.photos/id/214/400/300"
              alt="圆环光标"
              loading="lazy"
              containerStyle={{ width: 400, height: 300, position: "relative" }}
              imageStyle={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "8px" }}
            />
          </div>

          <div>
            <h3 style={{ marginBottom: 10, fontSize: 16, fontWeight: 600 }}>加号光标</h3>
            <p style={{ color: "#666", marginBottom: 12, fontSize: 14 }}>
              十字加号设计，带紫色跟随效果
            </p>
            <ImageWithPlus
              src="https://picsum.photos/id/215/400/300"
              alt="加号光标"
              loading="lazy"
              containerStyle={{ width: 400, height: 300, position: "relative" }}
              imageStyle={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "8px" }}
            />
          </div>
        </div>
      </section>

      {/* 特效增强 */}
      <section>
        <h2 style={{ marginBottom: 20, fontSize: 24, fontWeight: 600, color: "#333" }}>
          🎯 特效增强
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: 30 }}>
          <div>
            <h3 style={{ marginBottom: 10, fontSize: 16, fontWeight: 600 }}>涟漪效果</h3>
            <p style={{ color: "#666", marginBottom: 12, fontSize: 14 }}>
              点击时产生涟漪扩散效果
            </p>
            <ImageWithRipple
              src="https://picsum.photos/id/216/400/300"
              alt="涟漪效果"
              loading="lazy"
              containerStyle={{ width: 400, height: 300, position: "relative" }}
              imageStyle={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "8px" }}
            />
          </div>

          <div>
            <h3 style={{ marginBottom: 10, fontSize: 16, fontWeight: 600 }}>文字提示</h3>
            <p style={{ color: "#666", marginBottom: 12, fontSize: 14 }}>
              光标附带文字说明
            </p>
            <ImageWithText
              src="https://picsum.photos/id/217/400/300"
              alt="文字提示"
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
import { createAnimatedCursorPlugin } from "vane-lazy-image/custom-plugins";

const ImageWithCursor = withPlugins(LazyLoadImageCore as any, [
  createAnimatedCursorPlugin({
    style: 'custom-dot',        // 光标样式
    enableFollower: true,       // 启用跟随光标
    followerColor: 'rgba(59, 130, 246, 0.3)',
    followerSize: 50,           // 跟随光标大小
    followerDelay: 0.15,        // 延迟系数
    scaleOnHover: true,         // 悬停缩放
    hoverScale: 1.5,            // 缩放比例
    cursorText: '点击查看',     // 文字提示
    showRipple: true,           // 涟漪效果
  }),
]);

// 使用组件
<ImageWithCursor
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

export default AnimatedCursorDemo;

`;export{e as default};
