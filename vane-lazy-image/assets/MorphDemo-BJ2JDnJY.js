const t=`import DemoPage from "./_layout/DemoPage";
import { LazyLoadImageCore } from "vane-lazy-image/core";
import React from "react";
import { createMorphPlugin } from "vane-lazy-image/custom-plugins";
import { withPlugins } from "vane-lazy-image/plugins";

const PageTitle = "Morph Plugin - 形变过渡效果";

// 弹性形变
const ImageWithElastic = withPlugins(LazyLoadImageCore as any, [
  createMorphPlugin({
    type: 'elastic',
    duration: 1200,
    easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  }),
]);

// 圆形到方形
const ImageWithCircleToSquare = withPlugins(LazyLoadImageCore as any, [
  createMorphPlugin({
    type: 'circle-to-square',
    duration: 1000,
    easing: 'ease-in-out',
  }),
]);

// 缩放形变
const ImageWithScaleMorph = withPlugins(LazyLoadImageCore as any, [
  createMorphPlugin({
    type: 'scale-morph',
    duration: 800,
    fromScale: 0.5,
    toScale: 1,
    easing: 'ease-out',
  }),
]);

// 旋转形变
const ImageWithRotateMorph = withPlugins(LazyLoadImageCore as any, [
  createMorphPlugin({
    type: 'rotate-morph',
    duration: 1000,
    fromRotate: -180,
    toRotate: 0,
    easing: 'ease-out',
  }),
]);

// 倾斜形变
const ImageWithSkewMorph = withPlugins(LazyLoadImageCore as any, [
  createMorphPlugin({
    type: 'skew-morph',
    duration: 800,
    fromSkew: 20,
    toSkew: 0,
    easing: 'ease-out',
  }),
]);

// 液态效果（持续动画）
const ImageWithLiquid = withPlugins(LazyLoadImageCore as any, [
  createMorphPlugin({
    type: 'liquid',
    duration: 4000,
    continuous: true,
    easing: 'ease-in-out',
  }),
]);

// 悬停触发 - 圆角变化
const ImageWithHoverRounded = withPlugins(LazyLoadImageCore as any, [
  createMorphPlugin({
    type: 'rounded-corners',
    duration: 400,
    triggerOnHover: true,
    fromBorderRadius: '0%',
    toBorderRadius: '50%',
    easing: 'ease-in-out',
  }),
]);

// 悬停触发 - 缩放
const ImageWithHoverScale = withPlugins(LazyLoadImageCore as any, [
  createMorphPlugin({
    type: 'scale-morph',
    duration: 300,
    triggerOnHover: true,
    fromScale: 1,
    toScale: 1.1,
    easing: 'ease-out',
  }),
]);

const MorphDemo = () => {
  const [resetKey, setResetKey] = React.useState(0);

  return (
    <DemoPage
      title={PageTitle}
      description="各种形变过渡效果，让图片展示更具创意。纯 CSS transforms 实现。💡 提示：点击右上角的'🔄 全局重试'按钮可以重新观看所有动画效果。"
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

      {/* 加载时触发的形变 */}
      <section style={{ marginBottom: 60 }}>
        <h2 style={{ marginBottom: 20, fontSize: 24, fontWeight: 600, color: "#333" }}>
          📌 加载时触发的形变效果
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: 30 }}>
          <div>
            <h3 style={{ marginBottom: 10, fontSize: 16, fontWeight: 600 }}>弹性形变（Elastic）</h3>
            <p style={{ color: "#666", marginBottom: 12, fontSize: 14 }}>
              弹性缩放效果，自然流畅
            </p>
            <ImageWithElastic
              src="https://picsum.photos/id/200/400/300"
              alt="弹性形变"
              loading="lazy"
              containerStyle={{ width: 400, height: 300, position: "relative" }}
              imageStyle={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "8px" }}
            />
          </div>

          <div>
            <h3 style={{ marginBottom: 10, fontSize: 16, fontWeight: 600 }}>圆形到方形</h3>
            <p style={{ color: "#666", marginBottom: 12, fontSize: 14 }}>
              从圆形渐变到方形，适合头像展示
            </p>
            <ImageWithCircleToSquare
              src="https://picsum.photos/id/201/400/300"
              alt="圆形到方形"
              loading="lazy"
              containerStyle={{ width: 400, height: 300, position: "relative" }}
              imageStyle={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "8px" }}
            />
          </div>

          <div>
            <h3 style={{ marginBottom: 10, fontSize: 16, fontWeight: 600 }}>缩放形变（Scale）</h3>
            <p style={{ color: "#666", marginBottom: 12, fontSize: 14 }}>
              从小到大的缩放效果
            </p>
            <ImageWithScaleMorph
              src="https://picsum.photos/id/202/400/300"
              alt="缩放形变"
              loading="lazy"
              containerStyle={{ width: 400, height: 300, position: "relative" }}
              imageStyle={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "8px" }}
            />
          </div>
        </div>
      </section>

      {/* 3D 形变效果 */}
      <section style={{ marginBottom: 60 }}>
        <h2 style={{ marginBottom: 20, fontSize: 24, fontWeight: 600, color: "#333" }}>
          ✨ 3D 变换效果
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: 30 }}>
          <div>
            <h3 style={{ marginBottom: 10, fontSize: 16, fontWeight: 600 }}>旋转形变（Rotate）</h3>
            <p style={{ color: "#666", marginBottom: 12, fontSize: 14 }}>
              旋转进入效果，动感十足
            </p>
            <ImageWithRotateMorph
              src="https://picsum.photos/id/203/400/300"
              alt="旋转形变"
              loading="lazy"
              containerStyle={{ width: 400, height: 300, position: "relative" }}
              imageStyle={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "8px" }}
            />
          </div>

          <div>
            <h3 style={{ marginBottom: 10, fontSize: 16, fontWeight: 600 }}>倾斜形变（Skew）</h3>
            <p style={{ color: "#666", marginBottom: 12, fontSize: 14 }}>
              倾斜角度渐变效果
            </p>
            <ImageWithSkewMorph
              src="https://picsum.photos/id/204/400/300"
              alt="倾斜形变"
              loading="lazy"
              containerStyle={{ width: 400, height: 300, position: "relative" }}
              imageStyle={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "8px" }}
            />
          </div>
        </div>
      </section>

      {/* 持续动画 */}
      <section style={{ marginBottom: 60 }}>
        <h2 style={{ marginBottom: 20, fontSize: 24, fontWeight: 600, color: "#333" }}>
          🔄 持续动画效果
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: 30 }}>
          <div>
            <h3 style={{ marginBottom: 10, fontSize: 16, fontWeight: 600 }}>液态效果（Liquid）</h3>
            <p style={{ color: "#666", marginBottom: 12, fontSize: 14 }}>
              流动的液态边框效果，持续动画
            </p>
            <ImageWithLiquid
              src="https://picsum.photos/id/206/400/300"
              alt="液态效果"
              loading="lazy"
              containerStyle={{ width: 400, height: 300, position: "relative" }}
              imageStyle={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* 悬停触发 */}
      <section>
        <h2 style={{ marginBottom: 20, fontSize: 24, fontWeight: 600, color: "#333" }}>
          🎯 悬停触发效果
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: 30 }}>
          <div>
            <h3 style={{ marginBottom: 10, fontSize: 16, fontWeight: 600 }}>悬停圆角变化</h3>
            <p style={{ color: "#666", marginBottom: 12, fontSize: 14 }}>
              鼠标悬停时从方形变为圆形
            </p>
            <ImageWithHoverRounded
              src="https://picsum.photos/id/208/400/300"
              alt="悬停圆角变化"
              loading="lazy"
              containerStyle={{ width: 400, height: 300, position: "relative" }}
              imageStyle={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "8px" }}
            />
          </div>

          <div>
            <h3 style={{ marginBottom: 10, fontSize: 16, fontWeight: 600 }}>悬停缩放</h3>
            <p style={{ color: "#666", marginBottom: 12, fontSize: 14 }}>
              鼠标悬停时轻微放大
            </p>
            <ImageWithHoverScale
              src="https://picsum.photos/id/209/400/300"
              alt="悬停缩放"
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
import { createMorphPlugin } from "vane-lazy-image/custom-plugins";

const ImageWithMorph = withPlugins(LazyLoadImageCore as any, [
  createMorphPlugin({
    type: 'elastic',          // 形变类型
    duration: 1200,           // 持续时间（毫秒）
    easing: 'ease-out',       // 缓动函数
    triggerOnHover: false,    // 是否悬停触发
    continuous: false,        // 是否持续动画
    fromScale: 0.8,           // 起始缩放（scale-morph）
    toScale: 1,               // 结束缩放
    fromRotate: -180,         // 起始旋转角度（rotate-morph）
    toRotate: 0,              // 结束旋转角度
  }),
]);

// 使用组件
<ImageWithMorph
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

export default MorphDemo;

`;export{t as default};
