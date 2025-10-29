const r=`import { LazyLoadImageCore, withPlugins } from "vane-lazy-image";\r
import { createDownloadButtonPlugin } from "vane-lazy-image/custom-plugins";\r
import DemoPage from "./_layout/DemoPage";\r
\r
const DownloadButtonDemo = () => {\r
  // 示例：基础下载按钮\r
  const BasicDownloadImage = withPlugins(LazyLoadImageCore, [\r
    createDownloadButtonPlugin({\r
      filename: "my-image.jpg",\r
      position: "top-right",\r
      size: "medium",\r
      onDownloadSuccess: (filename) => {\r
        console.log("下载成功:", filename);\r
        alert(\`图片 \${filename} 下载成功！\`);\r
      },\r
      onDownloadError: (error) => {\r
        console.error("下载失败:", error);\r
        alert("下载失败，请重试");\r
      },\r
    }),\r
  ]);\r
\r
  // 示例：悬停显示\r
  const HoverDownloadImage = withPlugins(LazyLoadImageCore, [\r
    createDownloadButtonPlugin({\r
      position: "top-left",\r
      size: "large",\r
      showOnHover: true,\r
      tooltipText: "点击下载高清图片",\r
    }),\r
  ]);\r
\r
  // 示例：不同位置和大小\r
  const CustomPositionImage = withPlugins(LazyLoadImageCore, [\r
    createDownloadButtonPlugin({\r
      position: "bottom-left",\r
      size: "small",\r
      buttonStyle: {\r
        backgroundColor: "rgba(52, 199, 89, 0.9)",\r
      },\r
    }),\r
  ]);\r
\r
  // 示例：自定义样式\r
  const CustomStyledImage = withPlugins(LazyLoadImageCore, [\r
    createDownloadButtonPlugin({\r
      position: "bottom-right",\r
      size: "medium",\r
      buttonStyle: {\r
        backgroundColor: "rgba(255, 59, 48, 0.9)",\r
        borderRadius: "8px",\r
        border: "none",\r
      },\r
      tooltipText: "下载原图",\r
    }),\r
  ]);\r
\r
  // 示例：带回调的下载\r
  const CallbackDownloadImage = withPlugins(LazyLoadImageCore, [\r
    createDownloadButtonPlugin({\r
      filename: "premium-photo.jpg",\r
      position: "top-right",\r
      size: "large",\r
      onBeforeDownload: async (src) => {\r
        console.log("准备下载:", src);\r
        // 可以在这里进行权限检查、统计等\r
        await new Promise((resolve) => setTimeout(resolve, 500));\r
      },\r
      onDownloadSuccess: (filename) => {\r
        console.log("下载完成:", filename);\r
        // 可以在这里进行统计上报\r
      },\r
    }),\r
  ]);\r
\r
  // 示例：自定义图标\r
  const CustomIconImage = withPlugins(LazyLoadImageCore, [\r
    createDownloadButtonPlugin({\r
      position: "top-right",\r
      size: "medium",\r
      customIcon: (\r
        <div\r
          style={{\r
            fontSize: "20px",\r
            fontWeight: "bold",\r
            color: "white",\r
          }}\r
        >\r
          ⬇\r
        </div>\r
      ),\r
      buttonStyle: {\r
        backgroundColor: "rgba(88, 86, 214, 0.9)",\r
      },\r
    }),\r
  ]);\r
\r
  return (\r
    <DemoPage\r
      title="DownloadButton Plugin"\r
      description="下载按钮插件 - 为图片添加一键下载功能"\r
    >\r
      <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>\r
        {/* 功能特性 */}\r
        <div\r
          style={{\r
            padding: "20px",\r
            backgroundColor: "#f8f9fa",\r
            borderRadius: "8px",\r
            borderLeft: "4px solid #17a2b8",\r
          }}\r
        >\r
          <h3 style={{ marginTop: 0, color: "#17a2b8" }}>✨ 功能特性</h3>\r
          <ul style={{ marginBottom: 0, lineHeight: 1.8 }}>\r
            <li>📥 <strong>一键下载</strong> - 点击按钮即可下载图片</li>\r
            <li>📍 <strong>多位置支持</strong> - 4个角落位置可选</li>\r
            <li>🎨 <strong>自定义样式</strong> - 大小、颜色、形状可定制</li>\r
            <li>👀 <strong>悬停显示</strong> - 可选择仅悬停时显示按钮</li>\r
            <li>🎯 <strong>生命周期回调</strong> - 下载前/后/失败回调</li>\r
            <li>🔧 <strong>自定义图标</strong> - 支持自定义下载图标</li>\r
          </ul>\r
        </div>\r
\r
        {/* 示例 1: 基础下载按钮 */}\r
        <div>\r
          <h3>📌 示例 1: 基础下载功能</h3>\r
          <p style={{ color: "#666", marginBottom: "16px" }}>\r
            点击右上角的下载按钮，保存图片到本地（文件名：my-image.jpg）\r
          </p>\r
          <div style={{ maxWidth: "500px" }}>\r
            <BasicDownloadImage\r
              src="https://picsum.photos/id/1015/500/300"\r
              alt="基础下载"\r
              loading="lazy"\r
              containerStyle={{ width: 500, height: 300, position: "relative" }}\r
              imageStyle={{\r
                width: "100%",\r
                height: "100%",\r
                objectFit: "cover",\r
                borderRadius: "8px",\r
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",\r
              }}\r
            />\r
          </div>\r
        </div>\r
\r
        {/* 示例 2: 悬停显示 */}\r
        <div>\r
          <h3>📌 示例 2: 悬停显示按钮</h3>\r
          <p style={{ color: "#666", marginBottom: "16px" }}>\r
            将鼠标悬停在图片上，左上角会出现下载按钮\r
          </p>\r
          <div style={{ maxWidth: "500px" }}>\r
            <HoverDownloadImage\r
              src="https://picsum.photos/id/1018/500/300"\r
              alt="悬停下载"\r
              loading="lazy"\r
              containerStyle={{ width: 500, height: 300, position: "relative" }}\r
              imageStyle={{\r
                width: "100%",\r
                height: "100%",\r
                objectFit: "cover",\r
                borderRadius: "8px",\r
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",\r
              }}\r
            />\r
          </div>\r
        </div>\r
\r
        {/* 示例 3: 不同位置和大小 */}\r
        <div>\r
          <h3>📌 示例 3: 自定义位置和大小</h3>\r
          <p style={{ color: "#666", marginBottom: "16px" }}>\r
            左下角的小号绿色下载按钮\r
          </p>\r
          <div style={{ maxWidth: "500px" }}>\r
            <CustomPositionImage\r
              src="https://picsum.photos/id/1019/500/300"\r
              alt="自定义位置"\r
              loading="lazy"\r
              containerStyle={{ width: 500, height: 300, position: "relative" }}\r
              imageStyle={{\r
                width: "100%",\r
                height: "100%",\r
                objectFit: "cover",\r
                borderRadius: "8px",\r
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",\r
              }}\r
            />\r
          </div>\r
        </div>\r
\r
        {/* 示例 4: 自定义样式 */}\r
        <div>\r
          <h3>📌 示例 4: 自定义按钮样式</h3>\r
          <p style={{ color: "#666", marginBottom: "16px" }}>\r
            右下角的红色方形下载按钮\r
          </p>\r
          <div style={{ maxWidth: "500px" }}>\r
            <CustomStyledImage\r
              src="https://picsum.photos/id/1020/500/300"\r
              alt="自定义样式"\r
              loading="lazy"\r
              containerStyle={{ width: 500, height: 300, position: "relative" }}\r
              imageStyle={{\r
                width: "100%",\r
                height: "100%",\r
                objectFit: "cover",\r
                borderRadius: "8px",\r
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",\r
              }}\r
            />\r
          </div>\r
        </div>\r
\r
        {/* 示例 5: 带回调的下载 */}\r
        <div>\r
          <h3>📌 示例 5: 下载生命周期回调</h3>\r
          <p style={{ color: "#666", marginBottom: "16px" }}>\r
            下载前后会触发回调函数，可用于权限检查、统计上报等\r
          </p>\r
          <div\r
            style={{\r
              padding: "12px",\r
              backgroundColor: "#e7f3ff",\r
              borderRadius: "4px",\r
              marginBottom: "16px",\r
              fontSize: "14px",\r
            }}\r
          >\r
            💡 打开浏览器控制台查看回调日志\r
          </div>\r
          <div style={{ maxWidth: "500px" }}>\r
            <CallbackDownloadImage\r
              src="https://picsum.photos/id/1021/500/300"\r
              alt="回调下载"\r
              loading="lazy"\r
              containerStyle={{ width: 500, height: 300, position: "relative" }}\r
              imageStyle={{\r
                width: "100%",\r
                height: "100%",\r
                objectFit: "cover",\r
                borderRadius: "8px",\r
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",\r
              }}\r
            />\r
          </div>\r
        </div>\r
\r
        {/* 示例 6: 自定义图标 */}\r
        <div>\r
          <h3>📌 示例 6: 自定义下载图标</h3>\r
          <p style={{ color: "#666", marginBottom: "16px" }}>\r
            使用自定义的下箭头图标代替默认图标\r
          </p>\r
          <div style={{ maxWidth: "500px" }}>\r
            <CustomIconImage\r
              src="https://picsum.photos/id/1022/500/300"\r
              alt="自定义图标"\r
              loading="lazy"\r
              containerStyle={{ width: 500, height: 300, position: "relative" }}\r
              imageStyle={{\r
                width: "100%",\r
                height: "100%",\r
                objectFit: "cover",\r
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
            <li>📷 <strong>图片网站</strong> - 用户下载高清图片</li>\r
            <li>🎨 <strong>设计平台</strong> - 下载设计作品</li>\r
            <li>📰 <strong>新闻媒体</strong> - 下载新闻图片</li>\r
            <li>🛍️ <strong>电商平台</strong> - 下载商品图片</li>\r
            <li>📚 <strong>在线教育</strong> - 下载教学资料图片</li>\r
            <li>🏢 <strong>企业官网</strong> - 下载产品手册、宣传图</li>\r
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
{\`interface DownloadButtonConfig {\r
  filename?: string;                   // 下载文件名（默认从URL提取）\r
  position?: string;                   // 'top-left' | 'top-right' |\r
                                       // 'bottom-left' | 'bottom-right'\r
  size?: string;                       // 'small' | 'medium' | 'large'\r
  buttonStyle?: CSSProperties;         // 自定义按钮样式\r
  showOnHover?: boolean;               // 仅悬停时显示（默认false）\r
  onBeforeDownload?: (src) => void;    // 下载前回调\r
  onDownloadSuccess?: (name) => void;  // 下载成功回调\r
  onDownloadError?: (error) => void;   // 下载失败回调\r
  customIcon?: ReactNode;              // 自定义图标\r
  showTooltip?: boolean;               // 显示提示文本（默认true）\r
  tooltipText?: string;                // 提示文本（默认"下载图片"）\r
}\`}\r
            </pre>\r
          </div>\r
        </div>\r
\r
        {/* 使用提示 */}\r
        <div\r
          style={{\r
            padding: "20px",\r
            backgroundColor: "#fff3cd",\r
            borderRadius: "8px",\r
            borderLeft: "4px solid #ffc107",\r
          }}\r
        >\r
          <h3 style={{ marginTop: 0, color: "#856404" }}>⚠️ 使用提示</h3>\r
          <ul style={{ marginBottom: 0, lineHeight: 1.8, color: "#856404" }}>\r
            <li>下载需要图片URL支持CORS，否则可能失败</li>\r
            <li>跨域图片需要服务器设置 Access-Control-Allow-Origin</li>\r
            <li>filename 应包含合适的文件扩展名（.jpg, .png等）</li>\r
            <li>大文件下载时会有短暂延迟，建议显示加载状态</li>\r
            <li>移动端下载体验可能因浏览器而异</li>\r
            <li>可以在 onBeforeDownload 中进行权限检查</li>\r
          </ul>\r
        </div>\r
\r
        {/* 高级用法 */}\r
        <div\r
          style={{\r
            padding: "20px",\r
            backgroundColor: "#d1ecf1",\r
            borderRadius: "8px",\r
            borderLeft: "4px solid #17a2b8",\r
          }}\r
        >\r
          <h3 style={{ marginTop: 0, color: "#0c5460" }}>🚀 高级用法</h3>\r
          <div style={{ color: "#0c5460", lineHeight: 1.8 }}>\r
            <p><strong>1. 权限控制：</strong></p>\r
            <pre\r
              style={{\r
                backgroundColor: "#f5f5f5",\r
                padding: "12px",\r
                borderRadius: "4px",\r
                overflowX: "auto",\r
                color: "#333",\r
              }}\r
            >\r
{\`onBeforeDownload: async (src) => {\r
  const hasPermission = await checkUserPermission();\r
  if (!hasPermission) {\r
    throw new Error('需要会员权限');\r
  }\r
}\`}\r
            </pre>\r
\r
            <p style={{ marginTop: "16px" }}><strong>2. 下载统计：</strong></p>\r
            <pre\r
              style={{\r
                backgroundColor: "#f5f5f5",\r
                padding: "12px",\r
                borderRadius: "4px",\r
                overflowX: "auto",\r
                color: "#333",\r
              }}\r
            >\r
{\`onDownloadSuccess: (filename) => {\r
  // 上报下载统计\r
  analytics.track('image_download', {\r
    filename,\r
    timestamp: Date.now()\r
  });\r
}\`}\r
            </pre>\r
          </div>\r
        </div>\r
      </div>\r
    </DemoPage>\r
  );\r
};\r
\r
export default DownloadButtonDemo;\r
\r
`;export{r as default};
