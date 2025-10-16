const n=`/**\r
 * 代码预览示例\r
 * 展示代码文件的预览功能，支持语法高亮\r
 */\r
\r
import React, { useState } from "react";\r
import DemoPage from "./_layout/DemoPage";\r
import {\r
  FilePreviewCore,\r
  withPlugins,\r
  createCodePreviewPlugin,\r
  type FileInfo,\r
} from "../../components/FilePreviewPlugin";\r
\r
// 示例代码文件列表\r
const codeFiles: FileInfo[] = [\r
  {\r
    name: "sample.tsx",\r
    size: 6 * 1024,\r
    type: "text/typescript",\r
    extension: ".tsx",\r
    url: "./sample.tsx",\r
  },\r
  {\r
    name: "sample.js",\r
    size: 2 * 1024,\r
    type: "text/javascript",\r
    extension: ".js",\r
    url: "./sample.js",\r
  },\r
  {\r
    name: "sample.css",\r
    size: 2 * 1024,\r
    type: "text/css",\r
    extension: ".css",\r
    url: "./sample.css",\r
  },\r
  {\r
    name: "sample.ts",\r
    size: 2 * 1024,\r
    type: "text/typescript",\r
    extension: ".ts",\r
    url: "./sample.ts",\r
  },\r
  {\r
    name: "sample.html",\r
    size: 7 * 1024,\r
    type: "text/html",\r
    extension: ".html",\r
    url: "./sample.html",\r
  },\r
];\r
\r
export default function CodePreviewDemo() {\r
  const [selectedFile, setSelectedFile] = useState<FileInfo>(codeFiles[0]);\r
\r
  // 创建代码预览组件\r
  const Preview = withPlugins(FilePreviewCore, [\r
    createCodePreviewPlugin({\r
      // 可以配置代码预览的选项\r
      showLineNumbers: true,\r
      enableCopy: true,\r
    }),\r
  ]);\r
\r
  return (\r
    <DemoPage\r
      title="代码预览"\r
      description="展示代码文件的预览功能，支持语法高亮、行号显示、复制、下载等功能"\r
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
        {/* 代码文件列表 */}\r
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
          <h3 style={{ margin: "0 0 16px", fontSize: 16 }}>代码文件</h3>\r
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>\r
            {codeFiles.map((file, index) => (\r
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
