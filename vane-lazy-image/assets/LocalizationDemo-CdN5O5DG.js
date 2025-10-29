const r=`import { LazyLoadImageCore, withPlugins } from "vane-lazy-image";\r
import { createLocalizationPlugin } from "vane-lazy-image/custom-plugins";\r
import { useState } from "react";\r
import DemoPage from "./_layout/DemoPage";\r
\r
const LocalizationDemo = () => {\r
  const [currentLocale, setCurrentLocale] = useState<string>("en");\r
\r
  // 示例：基础多语言图片\r
  const BasicLocalizationImage = withPlugins(LazyLoadImageCore, [\r
    createLocalizationPlugin({\r
      localeMap: {\r
        en: "https://picsum.photos/id/1015/500/300", // 英文\r
        zh: "https://picsum.photos/id/1016/500/300", // 中文\r
        ja: "https://picsum.photos/id/1018/500/300", // 日文\r
        ko: "https://picsum.photos/id/1019/500/300", // 韩文\r
      },\r
      currentLocale: currentLocale,\r
      autoDetect: false,\r
      defaultLocale: "en",\r
    }),\r
  ]);\r
\r
  // 示例：自动检测浏览器语言\r
  const AutoDetectImage = withPlugins(LazyLoadImageCore, [\r
    createLocalizationPlugin({\r
      localeMap: {\r
        en: "https://picsum.photos/id/1020/500/300",\r
        zh: "https://picsum.photos/id/1021/500/300",\r
        fr: "https://picsum.photos/id/1022/500/300",\r
        de: "https://picsum.photos/id/1023/500/300",\r
        es: "https://picsum.photos/id/1024/500/300",\r
      },\r
      autoDetect: true,\r
      defaultLocale: "en",\r
    }),\r
  ]);\r
\r
  // 示例：自定义检测函数\r
  const CustomDetectImage = withPlugins(LazyLoadImageCore, [\r
    createLocalizationPlugin({\r
      localeMap: {\r
        en: "https://picsum.photos/id/1025/500/300",\r
        zh: "https://picsum.photos/id/1026/500/300",\r
        ja: "https://picsum.photos/id/1027/500/300",\r
      },\r
      detectLocale: () => {\r
        // 自定义检测逻辑，例如从 localStorage 读取\r
        return localStorage.getItem("user-locale") || "en";\r
      },\r
      autoDetect: true,\r
      defaultLocale: "en",\r
    }),\r
  ]);\r
\r
  // 示例：带后备图片\r
  const FallbackImage = withPlugins(LazyLoadImageCore, [\r
    createLocalizationPlugin({\r
      localeMap: {\r
        en: "https://picsum.photos/id/1028/500/300",\r
        zh: "https://picsum.photos/id/1029/500/300",\r
      },\r
      currentLocale: "ru", // 俄语（不在映射中）\r
      defaultLocale: "en",\r
      fallbackSrc: "https://picsum.photos/id/1030/500/300", // 后备图片\r
    }),\r
  ]);\r
\r
  const localeNames: Record<string, string> = {\r
    en: "🇺🇸 English",\r
    zh: "🇨🇳 中文",\r
    ja: "🇯🇵 日本語",\r
    ko: "🇰🇷 한국어",\r
    fr: "🇫🇷 Français",\r
    de: "🇩🇪 Deutsch",\r
    es: "🇪🇸 Español",\r
  };\r
\r
  return (\r
    <DemoPage\r
      title="Localization Plugin"\r
      description="国际化插件 - 根据用户语言环境自动切换图片"\r
    >\r
      <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>\r
        {/* 功能特性 */}\r
        <div\r
          style={{\r
            padding: "20px",\r
            backgroundColor: "#f8f9fa",\r
            borderRadius: "8px",\r
            borderLeft: "4px solid #28a745",\r
          }}\r
        >\r
          <h3 style={{ marginTop: 0, color: "#28a745" }}>✨ 功能特性</h3>\r
          <ul style={{ marginBottom: 0, lineHeight: 1.8 }}>\r
            <li>🌍 <strong>多语言支持</strong> - 支持任意语言环境</li>\r
            <li>🔍 <strong>自动检测</strong> - 自动检测浏览器语言</li>\r
            <li>🎯 <strong>默认回退</strong> - 语言不存在时使用默认语言</li>\r
            <li>🔧 <strong>自定义检测</strong> - 支持自定义语言检测函数</li>\r
            <li>🛡️ <strong>后备机制</strong> - 提供最终后备图片URL</li>\r
            <li>⚡ <strong>动态切换</strong> - 运行时切换语言</li>\r
          </ul>\r
        </div>\r
\r
        {/* 示例 1: 基础多语言图片 */}\r
        <div>\r
          <h3>📌 示例 1: 手动切换语言</h3>\r
          <p style={{ color: "#666", marginBottom: "16px" }}>\r
            点击下方按钮切换语言，查看不同语言的图片\r
          </p>\r
\r
          {/* 语言切换按钮 */}\r
          <div style={{ marginBottom: "20px", display: "flex", gap: "10px", flexWrap: "wrap" }}>\r
            {["en", "zh", "ja", "ko"].map((locale) => (\r
              <button\r
                key={locale}\r
                onClick={() => setCurrentLocale(locale)}\r
                style={{\r
                  padding: "10px 20px",\r
                  border: currentLocale === locale ? "2px solid #28a745" : "2px solid #ddd",\r
                  borderRadius: "6px",\r
                  backgroundColor: currentLocale === locale ? "#28a745" : "white",\r
                  color: currentLocale === locale ? "white" : "#333",\r
                  cursor: "pointer",\r
                  fontSize: "14px",\r
                  fontWeight: currentLocale === locale ? "bold" : "normal",\r
                  transition: "all 0.2s",\r
                }}\r
              >\r
                {localeNames[locale]}\r
              </button>\r
            ))}\r
          </div>\r
\r
          <div\r
            style={{\r
              padding: "16px",\r
              backgroundColor: "#e7f3ff",\r
              borderRadius: "6px",\r
              marginBottom: "16px",\r
            }}\r
          >\r
            <strong>当前语言：</strong> {localeNames[currentLocale]} ({currentLocale})\r
          </div>\r
\r
          <div style={{ maxWidth: "500px" }}>\r
            <BasicLocalizationImage\r
              src="https://picsum.photos/id/1015/500/300"\r
              alt="多语言图片示例"\r
              imageStyle={{\r
                width: "100%",\r
                borderRadius: "8px",\r
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",\r
              }}\r
            />\r
          </div>\r
        </div>\r
\r
        {/* 示例 2: 自动检测浏览器语言 */}\r
        <div>\r
          <h3>📌 示例 2: 自动检测浏览器语言</h3>\r
          <p style={{ color: "#666", marginBottom: "16px" }}>\r
            根据浏览器语言自动显示对应图片（当前浏览器语言：\r
            <strong> {navigator.language}</strong>）\r
          </p>\r
          <div\r
            style={{\r
              padding: "16px",\r
              backgroundColor: "#fff3cd",\r
              borderRadius: "6px",\r
              marginBottom: "16px",\r
              color: "#856404",\r
            }}\r
          >\r
            💡 这个图片会根据您的浏览器语言设置自动选择。支持的语言：en, zh, fr, de, es\r
          </div>\r
          <div style={{ maxWidth: "500px" }}>\r
            <AutoDetectImage\r
              src="https://picsum.photos/id/1020/500/300"\r
              alt="自动检测语言"\r
              imageStyle={{\r
                width: "100%",\r
                borderRadius: "8px",\r
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",\r
              }}\r
            />\r
          </div>\r
        </div>\r
\r
        {/* 示例 3: 自定义检测函数 */}\r
        <div>\r
          <h3>📌 示例 3: 自定义语言检测</h3>\r
          <p style={{ color: "#666", marginBottom: "16px" }}>\r
            使用自定义函数从 localStorage 读取用户偏好语言\r
          </p>\r
          <div style={{ marginBottom: "16px" }}>\r
            <button\r
              onClick={() => {\r
                localStorage.setItem("user-locale", "zh");\r
                window.location.reload();\r
              }}\r
              style={{\r
                padding: "8px 16px",\r
                marginRight: "10px",\r
                border: "1px solid #28a745",\r
                borderRadius: "4px",\r
                backgroundColor: "#28a745",\r
                color: "white",\r
                cursor: "pointer",\r
              }}\r
            >\r
              设置为中文并刷新\r
            </button>\r
            <button\r
              onClick={() => {\r
                localStorage.setItem("user-locale", "en");\r
                window.location.reload();\r
              }}\r
              style={{\r
                padding: "8px 16px",\r
                border: "1px solid #007bff",\r
                borderRadius: "4px",\r
                backgroundColor: "#007bff",\r
                color: "white",\r
                cursor: "pointer",\r
              }}\r
            >\r
              设置为英文并刷新\r
            </button>\r
          </div>\r
          <div style={{ maxWidth: "500px" }}>\r
            <CustomDetectImage\r
              src="https://picsum.photos/id/1025/500/300"\r
              alt="自定义检测"\r
              imageStyle={{\r
                width: "100%",\r
                borderRadius: "8px",\r
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",\r
              }}\r
            />\r
          </div>\r
        </div>\r
\r
        {/* 示例 4: 后备图片机制 */}\r
        <div>\r
          <h3>📌 示例 4: 后备图片机制</h3>\r
          <p style={{ color: "#666", marginBottom: "16px" }}>\r
            当请求的语言（俄语 ru）不在映射中时，显示后备图片\r
          </p>\r
          <div\r
            style={{\r
              padding: "16px",\r
              backgroundColor: "#f8d7da",\r
              borderRadius: "6px",\r
              marginBottom: "16px",\r
              color: "#721c24",\r
            }}\r
          >\r
            ⚠️ 尝试加载俄语（ru）图片，但映射中不存在，将显示后备图片\r
          </div>\r
          <div style={{ maxWidth: "500px" }}>\r
            <FallbackImage\r
              src="https://picsum.photos/id/1028/500/300"\r
              alt="后备图片"\r
              imageStyle={{\r
                width: "100%",\r
                borderRadius: "8px",\r
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",\r
              }}\r
            />\r
          </div>\r
        </div>\r
\r
        {/* 应用场景 */}\r
        <div\r
          style={{\r
            padding: "20px",\r
            backgroundColor: "#e7f3ff",\r
            borderRadius: "8px",\r
            borderLeft: "4px solid #0066cc",\r
          }}\r
        >\r
          <h3 style={{ marginTop: 0, color: "#0066cc" }}>💡 应用场景</h3>\r
          <ul style={{ marginBottom: 0, lineHeight: 1.8 }}>\r
            <li>🌐 <strong>国际化网站</strong> - 根据用户语言显示本地化图片</li>\r
            <li>🎨 <strong>品牌宣传</strong> - 不同地区展示不同的宣传图</li>\r
            <li>📱 <strong>多语言App</strong> - App内的本地化图片资源</li>\r
            <li>🛍️ <strong>电商平台</strong> - 商品图片本地化展示</li>\r
            <li>📰 <strong>新闻媒体</strong> - 不同地区的新闻配图</li>\r
            <li>🎓 <strong>在线教育</strong> - 教学材料的多语言版本</li>\r
          </ul>\r
        </div>\r
\r
        {/* API 说明 */}\r
        <div>\r
          <h3>📚 配置项说明</h3>\r
          <div\r
            style={{\r
              backgroundColor: "#f5f5f5",\r
              padding: "16px",\r
              borderRadius: "8px",\r
              fontFamily: "monospace",\r
              fontSize: "14px",\r
              overflowX: "auto",\r
            }}\r
          >\r
            <pre style={{ margin: 0 }}>\r
{\`interface LocalizationConfig {\r
  localeMap: Record<string, string>;   // 语言到图片URL的映射\r
  defaultLocale?: string;              // 默认语言（默认'en'）\r
  currentLocale?: string;              // 当前语言（手动指定）\r
  autoDetect?: boolean;                // 自动检测（默认true）\r
  detectLocale?: () => string;         // 自定义检测函数\r
  fallbackSrc?: string;                // 最终后备图片URL\r
}\r
\r
// 语言检测优先级：\r
// 1. currentLocale（手动指定）\r
// 2. detectLocale()（自定义函数）\r
// 3. navigator.language（浏览器）\r
// 4. defaultLocale（默认语言）\r
// 5. fallbackSrc（后备图片）\`}\r
            </pre>\r
          </div>\r
        </div>\r
\r
        {/* 使用提示 */}\r
        <div\r
          style={{\r
            padding: "20px",\r
            backgroundColor: "#d1ecf1",\r
            borderRadius: "8px",\r
            borderLeft: "4px solid #17a2b8",\r
          }}\r
        >\r
          <h3 style={{ marginTop: 0, color: "#0c5460" }}>💡 最佳实践</h3>\r
          <ul style={{ marginBottom: 0, lineHeight: 1.8, color: "#0c5460" }}>\r
            <li>始终提供 defaultLocale 作为后备</li>\r
            <li>localeMap 中至少包含常用语言（en, zh等）</li>\r
            <li>图片URL应指向稳定可访问的资源</li>\r
            <li>建议使用 CDN 加速不同地区的图片加载</li>\r
            <li>可以结合用户设置和浏览器检测</li>\r
            <li>开发环境建议打开 console 查看语言检测日志</li>\r
          </ul>\r
        </div>\r
      </div>\r
    </DemoPage>\r
  );\r
};\r
\r
export default LocalizationDemo;\r
\r
`;export{r as default};
