const r=`import {\r
  LazyLoadImageCore,\r
  createA11yPlugin,\r
  createBlurUpPlugin,\r
  createBorderGlowPlugin,\r
  createCaptionPlugin,\r
  createFilterPlugin,\r
  createGalleryPlugin,\r
  createHoverZoomPlugin,\r
  createResponsivePlugin,\r
  createSEOPlugin,\r
  createSkeletonPlugin,\r
  createSvgPlaceholderPlugin,\r
  createWebPPlugin,\r
  withPlugins,\r
} from "vane-lazy-image";\r
\r
import DemoPage from "./_layout/DemoPage";\r
import React from "react";\r
\r
const samples = Array.from({ length: 8 }).map((_, i) => ({\r
  id: i,\r
  src: \`https://picsum.photos/seed/effects-\${i}/800/600\`,\r
}));\r
\r
export default function CustomEffectsDemo() {\r
  // 各效果单独演示\r
  const SvgPlaceholderImage = React.useMemo(() => {\r
    const svg = \`\r
<svg viewBox="0 0 120 90" xmlns="http://www.w3.org/2000/svg">\r
  <defs>\r
    <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">\r
      <stop offset="0%" stop-color="#e5e7eb"/>\r
      <stop offset="50%" stop-color="#f3f4f6"/>\r
      <stop offset="100%" stop-color="#e5e7eb"/>\r
    </linearGradient>\r
  </defs>\r
  <rect x="0" y="0" width="120" height="90" fill="#f3f4f6" rx="8"/>\r
  <circle cx="60" cy="40" r="18" fill="url(#grad)">\r
    <animate attributeName="r" values="14;18;14" dur="1.2s" repeatCount="indefinite" />\r
  </circle>\r
  <rect x="36" y="30" width="48" height="20" rx="4" fill="#e5e7eb" opacity="0.6" />\r
  <text x="60" y="76" text-anchor="middle" font-size="10" fill="#9ca3af">Loading…</text>\r
</svg>\`;\r
\r
    return withPlugins(LazyLoadImageCore as any, [\r
      createSvgPlaceholderPlugin({\r
        svgContent: svg,\r
        background: "transparent",\r
        showWhen: "loading",\r
        zIndex: 4,\r
        fadeOutOnLoaded: true,\r
        opacity: 1,\r
      }),\r
      createBlurUpPlugin({ startBlur: 10, endBlur: 0, durationMs: 600 }),\r
    ]);\r
  }, []);\r
\r
  // WebP - 优先加载 webp，失败快速回退\r
  const WebPImage = React.useMemo(() => {\r
    return withPlugins(LazyLoadImageCore as any, [\r
      createWebPPlugin({\r
        replaceExtensions: ["jpg", "jpeg", "png"],\r
        testSupport: true,\r
      }),\r
      createBlurUpPlugin({ startBlur: 8, endBlur: 0, durationMs: 400 }),\r
    ]);\r
  }, []);\r
\r
  // Responsive - 注入 srcset/sizes（示例使用 picsum 的路径方案）\r
  const ResponsiveImage = React.useMemo(() => {\r
    const variants = [{ width: 400 }, { width: 800 }, { width: 1200 }];\r
    const buildSrc = (base: string, w: number) => {\r
      // 基于示例基础链接推导不同宽高（4:3 比例）\r
      const h = Math.round(w * 0.75);\r
      try {\r
        const u = new URL(base);\r
        const parts = u.pathname.split("/");\r
        // 将最后两个段替换为 w/h\r
        parts[parts.length - 2] = String(w);\r
        parts[parts.length - 1] = String(h);\r
        u.pathname = parts.join("/");\r
        return u.toString();\r
      } catch {\r
        return base;\r
      }\r
    };\r
    return withPlugins(LazyLoadImageCore as any, [\r
      createResponsivePlugin({\r
        variants,\r
        buildSrc,\r
        sizes: "(max-width: 800px) 100vw, 800px",\r
      }),\r
      createBlurUpPlugin({ startBlur: 10, endBlur: 0, durationMs: 600 }),\r
    ]);\r
  }, []);\r
\r
  // SEO - alt 回退 + 固定长宽比 + LCP 提升\r
  const SEOImage = React.useMemo(() => {\r
    return withPlugins(LazyLoadImageCore as any, [\r
      createSEOPlugin({\r
        altFallback: "示例图片",\r
        aspectRatio: "4/3",\r
        priority: "lcp",\r
        preload: true,\r
        title: "演示图像",\r
      }),\r
      createBlurUpPlugin({ startBlur: 8, endBlur: 0, durationMs: 400 }),\r
    ]);\r
  }, []);\r
\r
  // A11y - 可访问状态与装饰性图片处理\r
  const A11yImage = React.useMemo(() => {\r
    return withPlugins(LazyLoadImageCore as any, [\r
      createA11yPlugin({\r
        enabled: true,\r
        decorative: false,\r
        ariaLabel: (ctx) => \`图片资源：\${ctx.src.split("/").pop()}\`,\r
        statusText: {\r
          loading: "图片加载中…",\r
          loaded: "图片加载完成",\r
          error: "图片加载失败",\r
        },\r
      }),\r
      createBlurUpPlugin({ startBlur: 8, endBlur: 0, durationMs: 400 }),\r
    ]);\r
  }, []);\r
  const GalleryImage = React.useMemo(() => {\r
    return withPlugins(LazyLoadImageCore as any, [\r
      createGalleryPlugin({\r
        buttonText: "Open",\r
        enableLightbox: true,\r
        overlayZIndex: 20,\r
      }),\r
      createBlurUpPlugin({ startBlur: 10, endBlur: 0, durationMs: 600 }),\r
      createSkeletonPlugin({\r
        type: "shimmer",\r
        showWhen: "loading",\r
        borderRadius: 8,\r
        zIndex: 1,\r
      }),\r
    ]);\r
  }, []);\r
\r
  const FilterImage = React.useMemo(() => {\r
    return withPlugins(LazyLoadImageCore as any, [\r
      createFilterPlugin({ filter: "grayscale", amount: 1, hover: true }),\r
      createSkeletonPlugin({\r
        type: "shimmer",\r
        showWhen: "loading",\r
        borderRadius: 8,\r
        zIndex: 1,\r
      }),\r
    ]);\r
  }, []);\r
\r
  const HoverZoomImage = React.useMemo(() => {\r
    return withPlugins(LazyLoadImageCore as any, [\r
      createHoverZoomPlugin({ scale: 1.15, durationMs: 180 }),\r
      createBlurUpPlugin({ startBlur: 10, endBlur: 0, durationMs: 600 }),\r
      createSkeletonPlugin({\r
        type: "shimmer",\r
        showWhen: "loading",\r
        borderRadius: 8,\r
        zIndex: 1,\r
      }),\r
    ]);\r
  }, []);\r
\r
  const CaptionImage = React.useMemo(() => {\r
    return withPlugins(LazyLoadImageCore as any, [\r
      createCaptionPlugin({\r
        text: (src) => \`Caption • \${src?.slice(0, 28)}...\`,\r
        position: "bottom",\r
      }),\r
      createBlurUpPlugin({ startBlur: 10, endBlur: 0, durationMs: 600 }),\r
      createSkeletonPlugin({\r
        type: "shimmer",\r
        showWhen: "loading",\r
        borderRadius: 8,\r
        zIndex: 1,\r
      }),\r
    ]);\r
  }, []);\r
\r
  const BorderGlowImage = React.useMemo(() => {\r
    return withPlugins(LazyLoadImageCore as any, [\r
      createBorderGlowPlugin({\r
        color: "rgba(0,153,255,0.85)",\r
        blurPx: 18,\r
        spreadPx: 6,\r
      }),\r
      createBlurUpPlugin({ startBlur: 10, endBlur: 0, durationMs: 600 }),\r
      createSkeletonPlugin({\r
        type: "shimmer",\r
        showWhen: "loading",\r
        borderRadius: 8,\r
        zIndex: 1,\r
      }),\r
    ]);\r
  }, []);\r
\r
  // 组合演示\r
  const CombinedImage = React.useMemo(() => {\r
    return withPlugins(LazyLoadImageCore as any, [\r
      createCaptionPlugin({\r
        text: (src) => \`Effects • \${src?.slice(0, 28)}...\`,\r
        position: "bottom",\r
      }),\r
      createFilterPlugin({ filter: "grayscale", amount: 1, hover: true }),\r
      createHoverZoomPlugin({ scale: 1.15, durationMs: 180 }),\r
      createBorderGlowPlugin({\r
        color: "rgba(0,153,255,0.6)",\r
        blurPx: 12,\r
        spreadPx: 2,\r
      }),\r
      createGalleryPlugin({ buttonText: "Open", enableLightbox: true }),\r
      createSkeletonPlugin({\r
        type: "shimmer",\r
        showWhen: "loading",\r
        borderRadius: 8,\r
        zIndex: 1,\r
      }),\r
    ]);\r
  }, []);\r
\r
  return (\r
    <DemoPage\r
      title="LazyLoadImagePlugin • 效果插件演示"\r
      description="分区展示 SVG Placeholder / Gallery / Filter / HoverZoom / Caption / BorderGlow，以及最后的组合效果"\r
    >\r
      {/* SVG Placeholder */}\r
      <section style={{ marginBottom: 24 }}>\r
        <h4 style={{ margin: "8px 0" }}>SVG Placeholder（加载时叠加显示）</h4>\r
        <div\r
          style={{\r
            display: "grid",\r
            gridTemplateColumns: "repeat(4, 1fr)",\r
            gap: 16,\r
          }}\r
        >\r
          {samples.map((item) => (\r
            <div\r
              key={\`sp-\${item.id}\`}\r
              style={{\r
                position: "relative",\r
                width: "100%",\r
                paddingBottom: "75%",\r
                borderRadius: 8,\r
                overflow: "hidden",\r
                boxShadow: "0 1px 6px rgba(0,0,0,0.1)",\r
              }}\r
            >\r
              <div style={{ position: "absolute", inset: 0 }}>\r
                <SvgPlaceholderImage\r
                  src={item.src}\r
                  loading="lazy"\r
                  rootMargin="240px"\r
                  containerStyle={{ width: "100%", height: "100%" }}\r
                  imageStyle={{\r
                    width: "100%",\r
                    height: "100%",\r
                    objectFit: "cover",\r
                  }}\r
                />\r
              </div>\r
            </div>\r
          ))}\r
        </div>\r
      </section>\r
\r
      {/* Gallery */}\r
      <section style={{ marginBottom: 24 }}>\r
        <h4 style={{ margin: "8px 0" }}>Gallery（灯箱）</h4>\r
        <div\r
          style={{\r
            display: "grid",\r
            gridTemplateColumns: "repeat(4, 1fr)",\r
            gap: 16,\r
          }}\r
        >\r
          {samples.map((item) => (\r
            <div\r
              key={\`g-\${item.id}\`}\r
              style={{\r
                position: "relative",\r
                width: "100%",\r
                paddingBottom: "75%",\r
                borderRadius: 8,\r
                overflow: "hidden",\r
                boxShadow: "0 1px 6px rgba(0,0,0,0.1)",\r
              }}\r
            >\r
              <div style={{ position: "absolute", inset: 0 }}>\r
                <GalleryImage\r
                  src={item.src}\r
                  loading="lazy"\r
                  rootMargin="240px"\r
                  containerStyle={{ width: "100%", height: "100%" }}\r
                  imageStyle={{\r
                    width: "100%",\r
                    height: "100%",\r
                    objectFit: "cover",\r
                  }}\r
                />\r
              </div>\r
            </div>\r
          ))}\r
        </div>\r
      </section>\r
\r
      {/* Filter */}\r
      <section style={{ marginBottom: 24 }}>\r
        <h4 style={{ margin: "8px 0" }}>Filter（灰度 + 悬停取消）</h4>\r
        <div\r
          style={{\r
            display: "grid",\r
            gridTemplateColumns: "repeat(4, 1fr)",\r
            gap: 16,\r
          }}\r
        >\r
          {samples.map((item) => (\r
            <div\r
              key={\`f-\${item.id}\`}\r
              style={{\r
                position: "relative",\r
                width: "100%",\r
                paddingBottom: "75%",\r
                borderRadius: 8,\r
                overflow: "hidden",\r
                boxShadow: "0 1px 6px rgba(0,0,0,0.1)",\r
              }}\r
            >\r
              <div style={{ position: "absolute", inset: 0 }}>\r
                <FilterImage\r
                  src={item.src}\r
                  loading="lazy"\r
                  rootMargin="240px"\r
                  containerStyle={{ width: "100%", height: "100%" }}\r
                  imageStyle={{\r
                    width: "100%",\r
                    height: "100%",\r
                    objectFit: "cover",\r
                  }}\r
                />\r
              </div>\r
            </div>\r
          ))}\r
        </div>\r
      </section>\r
\r
      {/* Hover Zoom */}\r
      <section style={{ marginBottom: 24 }}>\r
        <h4 style={{ margin: "8px 0" }}>HoverZoom（悬停放大）</h4>\r
        <div\r
          style={{\r
            display: "grid",\r
            gridTemplateColumns: "repeat(4, 1fr)",\r
            gap: 16,\r
          }}\r
        >\r
          {samples.map((item) => (\r
            <div\r
              key={\`hz-\${item.id}\`}\r
              style={{\r
                position: "relative",\r
                width: "100%",\r
                paddingBottom: "75%",\r
                borderRadius: 8,\r
                overflow: "hidden",\r
                boxShadow: "0 1px 6px rgba(0,0,0,0.1)",\r
              }}\r
            >\r
              <div style={{ position: "absolute", inset: 0 }}>\r
                <HoverZoomImage\r
                  src={item.src}\r
                  loading="lazy"\r
                  rootMargin="240px"\r
                  containerStyle={{ width: "100%", height: "100%" }}\r
                  imageStyle={{\r
                    width: "100%",\r
                    height: "100%",\r
                    objectFit: "cover",\r
                  }}\r
                />\r
              </div>\r
            </div>\r
          ))}\r
        </div>\r
      </section>\r
\r
      {/* Caption */}\r
      <section style={{ marginBottom: 24 }}>\r
        <h4 style={{ margin: "8px 0" }}>Caption（底部文案）</h4>\r
        <div\r
          style={{\r
            display: "grid",\r
            gridTemplateColumns: "repeat(4, 1fr)",\r
            gap: 16,\r
          }}\r
        >\r
          {samples.map((item) => (\r
            <div\r
              key={\`c-\${item.id}\`}\r
              style={{\r
                position: "relative",\r
                width: "100%",\r
                paddingBottom: "75%",\r
                borderRadius: 8,\r
                overflow: "hidden",\r
                boxShadow: "0 1px 6px rgba(0,0,0,0.1)",\r
              }}\r
            >\r
              <div style={{ position: "absolute", inset: 0 }}>\r
                <CaptionImage\r
                  src={item.src}\r
                  loading="lazy"\r
                  rootMargin="240px"\r
                  containerStyle={{ width: "100%", height: "100%" }}\r
                  imageStyle={{\r
                    width: "100%",\r
                    height: "100%",\r
                    objectFit: "cover",\r
                  }}\r
                />\r
              </div>\r
            </div>\r
          ))}\r
        </div>\r
      </section>\r
\r
      {/* WebP 优先 */}\r
      <section style={{ marginBottom: 24 }}>\r
        <h4 style={{ margin: "8px 0" }}>WebP（支持检测与失败回退）</h4>\r
        <div\r
          style={{\r
            display: "grid",\r
            gridTemplateColumns: "repeat(4, 1fr)",\r
            gap: 16,\r
          }}\r
        >\r
          {[\r
            { id: "w1", src: "https://www.gstatic.com/webp/gallery/1.jpg" },\r
            { id: "w2", src: "https://www.gstatic.com/webp/gallery/2.jpg" },\r
            { id: "w3", src: "https://www.gstatic.com/webp/gallery/3.jpg" },\r
            { id: "w4", src: "https://www.gstatic.com/webp/gallery/4.jpg" },\r
          ].map((item) => (\r
            <div\r
              key={item.id}\r
              style={{\r
                position: "relative",\r
                width: "100%",\r
                paddingBottom: "75%",\r
                borderRadius: 8,\r
                overflow: "hidden",\r
                boxShadow: "0 1px 6px rgba(0,0,0,0.1)",\r
              }}\r
            >\r
              <div style={{ position: "absolute", inset: 0 }}>\r
                <WebPImage\r
                  src={item.src}\r
                  loading="lazy"\r
                  rootMargin="240px"\r
                  containerStyle={{ width: "100%", height: "100%" }}\r
                  imageStyle={{\r
                    width: "100%",\r
                    height: "100%",\r
                    objectFit: "cover",\r
                  }}\r
                />\r
              </div>\r
            </div>\r
          ))}\r
        </div>\r
      </section>\r
\r
      {/* Responsive 响应式 */}\r
      <section style={{ marginBottom: 24 }}>\r
        <h4 style={{ margin: "8px 0" }}>Responsive（srcset + sizes）</h4>\r
        <div\r
          style={{\r
            display: "grid",\r
            gridTemplateColumns: "repeat(4, 1fr)",\r
            gap: 16,\r
          }}\r
        >\r
          {samples.map((item) => (\r
            <div\r
              key={\`r-\${item.id}\`}\r
              style={{\r
                position: "relative",\r
                width: "100%",\r
                paddingBottom: "75%",\r
                borderRadius: 8,\r
                overflow: "hidden",\r
                boxShadow: "0 1px 6px rgba(0,0,0,0.1)",\r
              }}\r
            >\r
              <div style={{ position: "absolute", inset: 0 }}>\r
                <ResponsiveImage\r
                  src={item.src}\r
                  loading="lazy"\r
                  rootMargin="240px"\r
                  containerStyle={{ width: "100%", height: "100%" }}\r
                  imageStyle={{\r
                    width: "100%",\r
                    height: "100%",\r
                    objectFit: "cover",\r
                  }}\r
                />\r
              </div>\r
            </div>\r
          ))}\r
        </div>\r
      </section>\r
\r
      {/* SEO 优化 */}\r
      <section style={{ marginBottom: 24 }}>\r
        <h4 style={{ margin: "8px 0" }}>SEO（alt 回退 + 预加载 + 固定比例）</h4>\r
        <div\r
          style={{\r
            display: "grid",\r
            gridTemplateColumns: "repeat(4, 1fr)",\r
            gap: 16,\r
          }}\r
        >\r
          {samples.map((item) => (\r
            <div\r
              key={\`seo-\${item.id}\`}\r
              style={{\r
                position: "relative",\r
                width: "100%",\r
                paddingBottom: "75%",\r
                borderRadius: 8,\r
                overflow: "hidden",\r
                boxShadow: "0 1px 6px rgba(0,0,0,0.1)",\r
              }}\r
            >\r
              <div style={{ position: "absolute", inset: 0 }}>\r
                <SEOImage\r
                  src={item.src}\r
                  loading="lazy"\r
                  rootMargin="240px"\r
                  containerStyle={{ width: "100%", height: "100%" }}\r
                  imageStyle={{\r
                    width: "100%",\r
                    height: "100%",\r
                    objectFit: "cover",\r
                  }}\r
                />\r
              </div>\r
            </div>\r
          ))}\r
        </div>\r
      </section>\r
\r
      {/* A11y 可访问性 */}\r
      <section style={{ marginBottom: 24 }}>\r
        <h4 style={{ margin: "8px 0" }}>A11y（状态可读 + aria 属性）</h4>\r
        <div\r
          style={{\r
            display: "grid",\r
            gridTemplateColumns: "repeat(4, 1fr)",\r
            gap: 16,\r
          }}\r
        >\r
          {samples.map((item) => (\r
            <div\r
              key={\`ax-\${item.id}\`}\r
              style={{\r
                position: "relative",\r
                width: "100%",\r
                paddingBottom: "75%",\r
                borderRadius: 8,\r
                overflow: "hidden",\r
                boxShadow: "0 1px 6px rgba(0,0,0,0.1)",\r
              }}\r
            >\r
              <div style={{ position: "absolute", inset: 0 }}>\r
                <A11yImage\r
                  src={item.src}\r
                  loading="lazy"\r
                  rootMargin="240px"\r
                  containerStyle={{ width: "100%", height: "100%" }}\r
                  imageStyle={{\r
                    width: "100%",\r
                    height: "100%",\r
                    objectFit: "cover",\r
                  }}\r
                />\r
              </div>\r
            </div>\r
          ))}\r
        </div>\r
      </section>\r
\r
      {/* Border Glow */}\r
      <section style={{ marginBottom: 24 }}>\r
        <h4 style={{ margin: "8px 0" }}>BorderGlow（发光边框）</h4>\r
        <div\r
          style={{\r
            display: "grid",\r
            gridTemplateColumns: "repeat(4, 1fr)",\r
            gap: 16,\r
          }}\r
        >\r
          {samples.map((item) => (\r
            <div\r
              key={\`bg-\${item.id}\`}\r
              style={{\r
                position: "relative",\r
                width: "100%",\r
                paddingBottom: "75%",\r
                borderRadius: 8,\r
                overflow: "hidden",\r
                boxShadow: "0 1px 6px rgba(0,0,0,0.1)",\r
              }}\r
            >\r
              <div style={{ position: "absolute", inset: 0 }}>\r
                <BorderGlowImage\r
                  src={item.src}\r
                  loading="lazy"\r
                  rootMargin="240px"\r
                  containerStyle={{ width: "100%", height: "100%" }}\r
                  imageStyle={{\r
                    width: "100%",\r
                    height: "100%",\r
                    objectFit: "cover",\r
                  }}\r
                />\r
              </div>\r
            </div>\r
          ))}\r
        </div>\r
      </section>\r
\r
      {/* Combined */}\r
      <section>\r
        <h4 style={{ margin: "8px 0" }}>组合效果</h4>\r
        <div\r
          style={{\r
            display: "grid",\r
            gridTemplateColumns: "repeat(4, 1fr)",\r
            gap: 16,\r
          }}\r
        >\r
          {samples.map((item) => (\r
            <div\r
              key={\`co-\${item.id}\`}\r
              style={{\r
                position: "relative",\r
                width: "100%",\r
                paddingBottom: "75%",\r
                borderRadius: 8,\r
                overflow: "hidden",\r
                boxShadow: "0 1px 6px rgba(0,0,0,0.1)",\r
              }}\r
            >\r
              <div style={{ position: "absolute", inset: 0 }}>\r
                <CombinedImage\r
                  src={item.src}\r
                  loading="lazy"\r
                  rootMargin="240px"\r
                  containerStyle={{ width: "100%", height: "100%" }}\r
                  imageStyle={{\r
                    width: "100%",\r
                    height: "100%",\r
                    objectFit: "cover",\r
                  }}\r
                />\r
              </div>\r
            </div>\r
          ))}\r
        </div>\r
      </section>\r
    </DemoPage>\r
  );\r
}\r
`;export{r as default};
