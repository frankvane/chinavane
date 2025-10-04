const r=`import {\r
  LazyLoadImageCore,\r
  createBlurUpPlugin,\r
  createBorderGlowPlugin,\r
  createCaptionPlugin,\r
  createFilterPlugin,\r
  createGalleryPlugin,\r
  createHoverZoomPlugin,\r
  createSkeletonPlugin,\r
  createSvgPlaceholderPlugin,\r
  withPlugins,\r
} from "vane-lazy-image";\r
\r
import DemoPage from "./_layout/DemoPage";\r
import React from "react";\r
\r
const LazyImage = withPlugins(LazyLoadImageCore as any, [\r
  createSvgPlaceholderPlugin({\r
    svgContent: \`<svg viewBox="0 0 120 90" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="grad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#e5e7eb"/><stop offset="50%" stop-color="#f3f4f6"/><stop offset="100%" stop-color="#e5e7eb"/></linearGradient></defs><rect x="0" y="0" width="120" height="90" fill="#f3f4f6" rx="8"/><circle cx="60" cy="40" r="18" fill="url(#grad)"><animate attributeName="r" values="14;18;14" dur="1.2s" repeatCount="indefinite" /></circle><rect x="36" y="30" width="48" height="20" rx="4" fill="#e5e7eb" opacity="0.6" /><text x="60" y="76" text-anchor="middle" font-size="10" fill="#9ca3af">Loading…</text></svg>\`,\r
    background: "transparent",\r
    showWhen: "loading",\r
    zIndex: 4,\r
    fadeOutOnLoaded: true,\r
    opacity: 1,\r
  }),\r
  createBlurUpPlugin({ startBlur: 8, endBlur: 0, durationMs: 450 }),\r
  createSkeletonPlugin({\r
    type: "shimmer",\r
    showWhen: "loading",\r
    borderRadius: 8,\r
    zIndex: 1,\r
  }),\r
  createFilterPlugin({ filter: "grayscale", amount: 1, hover: true }),\r
  createHoverZoomPlugin({ scale: 1.12, durationMs: 180 }),\r
  createBorderGlowPlugin({\r
    color: "rgba(0,153,255,0.6)",\r
    blurPx: 12,\r
    spreadPx: 2,\r
  }),\r
  createCaptionPlugin({ text: "视觉增强组合（Plus）", position: "bottom" }),\r
  createGalleryPlugin({ buttonText: "Open", enableLightbox: true }),\r
]);\r
\r
export default function ComboVisualEffectsPlusDemo() {\r
  return (\r
    <DemoPage\r
      title="组合示例：视觉增强 Plus"\r
      description="结合 SVG 占位、Blur-Up、Skeleton、Filter、HoverZoom、BorderGlow、Caption 与 Gallery。"\r
    >\r
      <div\r
        style={{\r
          display: "grid",\r
          gridTemplateColumns: "repeat(2, 1fr)",\r
          gap: 12,\r
        }}\r
      >\r
        <div style={{ width: 360, height: 240 }}>\r
          <LazyImage\r
            src="https://picsum.photos/seed/visual-plus-1/800/600"\r
            loading="lazy"\r
            containerStyle={{ width: "100%", height: "100%" }}\r
            imageStyle={{ width: "100%", height: "100%", objectFit: "cover" }}\r
            alt="视觉效果 Plus 示例 1"\r
          />\r
        </div>\r
        <div style={{ width: 360, height: 240 }}>\r
          <LazyImage\r
            src="https://picsum.photos/seed/visual-plus-2/800/600"\r
            loading="lazy"\r
            containerStyle={{ width: "100%", height: "100%" }}\r
            imageStyle={{ width: "100%", height: "100%", objectFit: "cover" }}\r
            alt="视觉效果 Plus 示例 2"\r
          />\r
        </div>\r
      </div>\r
    </DemoPage>\r
  );\r
}\r
`;export{r as default};
