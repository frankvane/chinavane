const r=`import React, { useState } from "react";\r
import { FilePreviewCore, withPlugins, type FileInfo } from "vane-file-preview";\r
import { createXmlPreviewPlugin } from "../../components/FilePreviewPlugin/custom-plugins";\r
import DemoPage from "./_layout/DemoPage";\r
\r
// 示例 XML 文件\r
const xmlFiles: FileInfo[] = [\r
  {\r
    name: "sample.xml",\r
    url: "./sample.xml",\r
    type: "text/xml",\r
    size: 1024,\r
    extension: ".xml",\r
  },\r
  {\r
    name: "sample.rss",\r
    url: "./sample.rss",\r
    type: "application/rss+xml",\r
    size: 2048,\r
    extension: ".rss",\r
  },\r
  {\r
    name: "sample.svg",\r
    url: "./sample.svg",\r
    type: "image/svg+xml",\r
    size: 512,\r
    extension: ".svg",\r
  },\r
];\r
\r
const XmlPreviewDemo: React.FC = () => {\r
  const [selectedFile, setSelectedFile] = useState<FileInfo | null>(\r
    xmlFiles[0]\r
  );\r
\r
  // 创建带插件的预览组件\r
  const PreviewWithPlugins = withPlugins(FilePreviewCore, [\r
    createXmlPreviewPlugin({\r
      maxFileSize: 10 * 1024 * 1024, // 10MB\r
      enableSearch: true,\r
      enableCopy: true,\r
      enableFormat: true,\r
      enableValidation: true,\r
      theme: "auto",\r
      collapsedLevels: 2,\r
      showAttributes: true,\r
      showComments: true,\r
      showProcessingInstructions: true,\r
    }),\r
  ]);\r
\r
  return (\r
    <DemoPage\r
      title="XML 预览演示"\r
      description="使用 react-xml-viewer 展示 XML 文件的树形结构和语法高亮"\r
    >\r
      <div style={{ display: "flex", height: "100%", gap: "16px" }}>\r
        {/* 文件列表 */}\r
        <div\r
          style={{\r
            width: "300px",\r
            borderRight: "1px solid #e1e4e8",\r
            padding: "16px",\r
            background: "#f8f9fa",\r
            overflow: "auto",\r
          }}\r
        >\r
          <h3 style={{ margin: "0 0 16px 0", fontSize: "16px" }}>示例文件</h3>\r
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>\r
            {xmlFiles.map((file) => (\r
              <button\r
                key={file.name}\r
                onClick={() => setSelectedFile(file)}\r
                style={{\r
                  padding: "12px",\r
                  border: "1px solid #d0d7de",\r
                  borderRadius: "6px",\r
                  background:\r
                    selectedFile?.name === file.name ? "#0969da" : "#ffffff",\r
                  color:\r
                    selectedFile?.name === file.name ? "#ffffff" : "#24292f",\r
                  cursor: "pointer",\r
                  textAlign: "left",\r
                  fontSize: "14px",\r
                  transition: "all 0.2s",\r
                }}\r
                onMouseEnter={(e) => {\r
                  if (selectedFile?.name !== file.name) {\r
                    e.currentTarget.style.background = "#f6f8fa";\r
                    e.currentTarget.style.borderColor = "#0969da";\r
                  }\r
                }}\r
                onMouseLeave={(e) => {\r
                  if (selectedFile?.name !== file.name) {\r
                    e.currentTarget.style.background = "#ffffff";\r
                    e.currentTarget.style.borderColor = "#d0d7de";\r
                  }\r
                }}\r
              >\r
                <div style={{ fontWeight: "500", marginBottom: "4px" }}>\r
                  {file.name}\r
                </div>\r
                <div\r
                  style={{\r
                    fontSize: "12px",\r
                    opacity: 0.7,\r
                  }}\r
                >\r
                  {file.type} • {(file.size / 1024).toFixed(1)} KB\r
                </div>\r
              </button>\r
            ))}\r
          </div>\r
\r
          <div\r
            style={{\r
              marginTop: "24px",\r
              padding: "12px",\r
              background: "#fff3cd",\r
              border: "1px solid #ffeaa7",\r
              borderRadius: "6px",\r
              fontSize: "12px",\r
              color: "#856404",\r
            }}\r
          >\r
            <strong>功能特性：</strong>\r
            <ul style={{ margin: "8px 0 0 0", paddingLeft: "16px" }}>\r
              <li>树形结构展示</li>\r
              <li>语法高亮</li>\r
              <li>搜索功能</li>\r
              <li>格式化支持</li>\r
              <li>复制功能</li>\r
              <li>主题切换</li>\r
            </ul>\r
          </div>\r
        </div>\r
\r
        {/* 预览区域 */}\r
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>\r
          {selectedFile ? (\r
            <PreviewWithPlugins file={selectedFile} />\r
          ) : (\r
            <div\r
              style={{\r
                display: "flex",\r
                justifyContent: "center",\r
                alignItems: "center",\r
                height: "100%",\r
                color: "#586069",\r
                fontSize: "16px",\r
              }}\r
            >\r
              请选择一个 XML 文件进行预览\r
            </div>\r
          )}\r
        </div>\r
      </div>\r
    </DemoPage>\r
  );\r
};\r
\r
export default XmlPreviewDemo;\r
`;export{r as default};
