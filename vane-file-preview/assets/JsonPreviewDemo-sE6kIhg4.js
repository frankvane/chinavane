const n=`/**\r
 * JSON预览示例\r
 * 展示JSON文件的预览功能\r
 */\r
\r
import React, { useState } from "react";\r
import DemoPage from "./_layout/DemoPage";\r
import {\r
  FilePreviewCore,\r
  withPlugins,\r
  createJsonPreviewPlugin,\r
  type FileInfo,\r
} from "vane-file-preview";\r
\r
// 示例JSON文件列表\r
const jsonFiles: FileInfo[] = [\r
  {\r
    name: "sample.json",\r
    size: 2 * 1024,\r
    type: "application/json",\r
    extension: ".json",\r
    url: "./sample.json",\r
  },\r
  {\r
    name: "package.json",\r
    size: 1 * 1024,\r
    type: "application/json",\r
    extension: ".json",\r
    url: "./package.json",\r
  },\r
];\r
\r
export default function JsonPreviewDemo() {\r
  const [selectedFile, setSelectedFile] = useState<FileInfo>(jsonFiles[0]);\r
\r
  // 创建JSON预览组件\r
  const Preview = withPlugins(FilePreviewCore, [\r
    createJsonPreviewPlugin({\r
      // 可以配置JSON预览的选项\r
      maxFileSize: 10 * 1024 * 1024, // 10MB\r
      enableSearch: true,\r
      enableCopy: true,\r
      theme: "light",\r
      collapsed: 2,\r
    }),\r
  ]);\r
\r
  return (\r
    <DemoPage\r
      title="JSON预览"\r
      description="展示JSON文件的预览功能，支持语法高亮、搜索、复制、下载、折叠等功能"\r
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
        {/* JSON文件列表 */}\r
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
          <h3 style={{ margin: "0 0 16px", fontSize: 16 }}>JSON文件</h3>\r
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>\r
            {jsonFiles.map((file, index) => (\r
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
