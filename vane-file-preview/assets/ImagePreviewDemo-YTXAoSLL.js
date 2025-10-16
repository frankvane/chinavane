const n=`/**\r
 * 图片预览示例\r
 * 展示各种图片格式的预览功能\r
 */\r
\r
import React, { useState } from "react";\r
import DemoPage from "./_layout/DemoPage";\r
import {\r
  FilePreviewCore,\r
  withPlugins,\r
  createImagePreviewPlugin,\r
  type FileInfo,\r
} from "vane-file-preview";\r
\r
// 示例图片文件列表\r
const imageFiles: FileInfo[] = [\r
  {\r
    name: "sample.svg",\r
    size: 2 * 1024,\r
    type: "image/svg+xml",\r
    extension: ".svg",\r
    url: "./sample.svg",\r
  },\r
  {\r
    name: "sample.jpg",\r
    size: 44 * 1024,\r
    type: "image/jpeg",\r
    extension: ".jpg",\r
    url: "./sample.jpg",\r
  },\r
  {\r
    name: "sample.png",\r
    size: 132 * 1024,\r
    type: "image/png",\r
    extension: ".png",\r
    url: "./sample.png", // 使用现有图片作为示例\r
  },\r
  {\r
    name: "sample.gif",\r
    size: 102 * 1024,\r
    type: "image/gif",\r
    extension: ".gif",\r
    url: "./sample.gif", // 使用现有图片作为示例\r
  },\r
  {\r
    name: "sample.webp",\r
    size: 3 * 1024,\r
    type: "image/webp",\r
    extension: ".webp",\r
    url: "./sample.webp", // 使用现有图片作为示例\r
  },\r
];\r
\r
export default function ImagePreviewDemo() {\r
  const [selectedFile, setSelectedFile] = useState<FileInfo>(imageFiles[0]);\r
\r
  // 创建图片预览组件\r
  const Preview = withPlugins(FilePreviewCore, [\r
    createImagePreviewPlugin({\r
      // 可以配置图片预览的选项\r
      enableZoom: true,\r
      enableRotate: true,\r
      maxZoom: 3,\r
      minZoom: 0.5,\r
    }),\r
  ]);\r
\r
  return (\r
    <DemoPage\r
      title="图片预览"\r
      description="展示各种图片格式的预览功能，支持 SVG、JPG、PNG、GIF、WebP 等格式"\r
    >\r
      <div\r
        style={{\r
          display: "flex",\r
          height: "600px",\r
          gap: 16,\r
          padding: 16,\r
          boxSizing: "border-box",\r
        }}\r
      >\r
        {/* 图片文件列表 */}\r
        <div\r
          style={{\r
            width: 240,\r
            background: "#f5f5f5",\r
            borderRadius: 8,\r
            padding: 16,\r
            overflow: "auto",\r
            flexShrink: 0,\r
          }}\r
        >\r
          <h3 style={{ margin: "0 0 16px", fontSize: 16 }}>图片文件</h3>\r
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>\r
            {imageFiles.map((file, index) => (\r
              <button\r
                key={index}\r
                onClick={() => setSelectedFile(file)}\r
                style={{\r
                  padding: "12px 16px",\r
                  background:\r
                    selectedFile.name === file.name ? "#2196f3" : "#fff",\r
                  color: selectedFile.name === file.name ? "#fff" : "#333",\r
                  border: "1px solid #ddd",\r
                  borderRadius: 6,\r
                  textAlign: "left",\r
                  cursor: "pointer",\r
                  transition: "all 0.2s",\r
                  fontSize: 14,\r
                }}\r
              >\r
                <div style={{ fontWeight: 500 }}>{file.name}</div>\r
                <div\r
                  style={{\r
                    fontSize: 12,\r
                    marginTop: 4,\r
                    opacity: 0.8,\r
                  }}\r
                >\r
                  {file.extension} • {(file.size / 1024).toFixed(0)} KB\r
                </div>\r
              </button>\r
            ))}\r
          </div>\r
        </div>\r
\r
        {/* 预览区域 */}\r
        <div\r
          style={{\r
            flex: 1,\r
            background: "#fff",\r
            borderRadius: 8,\r
            overflow: "hidden",\r
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",\r
          }}\r
        >\r
          <Preview file={selectedFile} />\r
        </div>\r
      </div>\r
    </DemoPage>\r
  );\r
}\r
`;export{n as default};
