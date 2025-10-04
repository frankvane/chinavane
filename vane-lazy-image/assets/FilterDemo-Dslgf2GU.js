const r=`import {\r
  FILTER_PRESETS,\r
  LazyLoadImageCore,\r
  createFilterPlugin,\r
  withPlugins,\r
} from "vane-lazy-image";\r
\r
import DemoPage from "./_layout/DemoPage";\r
import React from "react";\r
\r
const LazyImageGray = withPlugins(LazyLoadImageCore as any, [\r
  createFilterPlugin(FILTER_PRESETS.grayscaleSoft),\r
]);\r
\r
const LazyImageSepia = withPlugins(LazyLoadImageCore as any, [\r
  createFilterPlugin(FILTER_PRESETS.sepiaWarm),\r
]);\r
\r
const LazyImageBright = withPlugins(LazyLoadImageCore as any, [\r
  createFilterPlugin(FILTER_PRESETS.brightBoost),\r
]);\r
\r
const LazyImageContrast = withPlugins(LazyLoadImageCore as any, [\r
  createFilterPlugin(FILTER_PRESETS.contrastPunch),\r
]);\r
\r
const LazyImageSaturate = withPlugins(LazyLoadImageCore as any, [\r
  createFilterPlugin(FILTER_PRESETS.saturateVivid),\r
]);\r
\r
export default function FilterDemo() {\r
  return (\r
    <DemoPage\r
      title="Filter 插件示例"\r
      description="展示不同滤镜参数与 hover 效果（灰度悬停还原）。"\r
    >\r
      <div\r
        style={{\r
          display: "grid",\r
          gridTemplateColumns: "repeat(3, 1fr)",\r
          gap: 12,\r
        }}\r
      >\r
        <div>\r
          <LazyImageGray\r
            src="https://picsum.photos/seed/filter-gray/800/600"\r
            loading="lazy"\r
            containerStyle={{ width: "100%", height: 160 }}\r
            imageStyle={{ width: "100%", height: "100%", objectFit: "cover" }}\r
            alt="灰度 0.6，悬停还原"\r
          />\r
          <p style={{ marginTop: 6 }}>grayscale(0.6) + hover</p>\r
        </div>\r
        <div>\r
          <LazyImageSepia\r
            src="https://picsum.photos/seed/filter-sepia/800/600"\r
            loading="lazy"\r
            containerStyle={{ width: "100%", height: 160 }}\r
            imageStyle={{ width: "100%", height: "100%", objectFit: "cover" }}\r
            alt="复古棕褐 0.5"\r
          />\r
          <p style={{ marginTop: 6 }}>sepia(0.5)</p>\r
        </div>\r
        <div>\r
          <LazyImageBright\r
            src="https://picsum.photos/seed/filter-bright/800/600"\r
            loading="lazy"\r
            containerStyle={{ width: "100%", height: 160 }}\r
            imageStyle={{ width: "100%", height: "100%", objectFit: "cover" }}\r
            alt="亮度提升 1.2"\r
          />\r
          <p style={{ marginTop: 6 }}>brightness(1.2)</p>\r
        </div>\r
        <div>\r
          <LazyImageContrast\r
            src="https://picsum.photos/seed/filter-contrast/800/600"\r
            loading="lazy"\r
            containerStyle={{ width: "100%", height: 160 }}\r
            imageStyle={{ width: "100%", height: "100%", objectFit: "cover" }}\r
            alt="对比度增强 1.3"\r
          />\r
          <p style={{ marginTop: 6 }}>contrast(1.3)</p>\r
        </div>\r
        <div>\r
          <LazyImageSaturate\r
            src="https://picsum.photos/seed/filter-saturate/800/600"\r
            loading="lazy"\r
            containerStyle={{ width: "100%", height: 160 }}\r
            imageStyle={{ width: "100%", height: "100%", objectFit: "cover" }}\r
            alt="饱和度提升 1.4"\r
          />\r
          <p style={{ marginTop: 6 }}>saturate(1.4)</p>\r
        </div>\r
      </div>\r
    </DemoPage>\r
  );\r
}\r
`;export{r as default};
