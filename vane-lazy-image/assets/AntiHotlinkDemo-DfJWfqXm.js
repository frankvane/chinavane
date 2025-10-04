const n=`import {\r
  LazyLoadImageCore,\r
  createAntiHotlinkPlugin,\r
  withPlugins,\r
} from "vane-lazy-image";\r
\r
import React from "react";\r
\r
const ImageWithAntiHotlink = withPlugins(LazyLoadImageCore, [\r
  createAntiHotlinkPlugin({\r
    allowedDomains: ["picsum.photos"],\r
    checkReferer: true,\r
    tokenParam: "token",\r
    generateToken: (src) => {\r
      try {\r
        // 简易签名示例：基于 src 生成稳定短 token（演示用途）\r
        const digest = btoa(unescape(encodeURIComponent(src))).replace(\r
          /=+$/,\r
          ""\r
        );\r
        return digest.slice(-8);\r
      } catch {\r
        return "demo-token";\r
      }\r
    },\r
  }),\r
]);\r
\r
const AntiHotlinkDemo: React.FC = () => {\r
  const srcs = [\r
    "https://picsum.photos/seed/anti-hot-link-1/800/600?w=1280&auto=format&fit=crop",\r
    "https://picsum.photos/seed/anti-hot-link-2/800/600?w=1280&auto=format&fit=crop",\r
    "https://picsum.photos/seed/anti-hot-link-3/800/600?w=1280&auto=format&fit=crop",\r
  ];\r
\r
  return (\r
    <div style={{ padding: 24 }}>\r
      <h3>AntiHotlink 插件示例</h3>\r
      <p style={{ color: "#666" }}>\r
        仅在白名单域名时注入签名参数，未带来源时添加 ref 标记。\r
      </p>\r
      <div\r
        style={{\r
          display: "grid",\r
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",\r
          gap: 12,\r
        }}\r
      >\r
        {srcs.map((src, i) => (\r
          <div key={src + i} style={{ width: 320, height: 200 }}>\r
            <ImageWithAntiHotlink\r
              src={src}\r
              alt={\`AntiHotlink \${i + 1}\`}\r
              loading="lazy"\r
              rootMargin="300px"\r
              containerStyle={{ width: "100%", height: "100%" }}\r
              imageStyle={{ width: "100%", height: "100%", objectFit: "cover" }}\r
            />\r
          </div>\r
        ))}\r
      </div>\r
    </div>\r
  );\r
};\r
\r
export default AntiHotlinkDemo;\r
`;export{n as default};
