const n=`/**\r
 * CSV预览示例\r
 * 展示CSV文件的预览功能\r
 */\r
\r
import React, { useState } from "react";\r
import DemoPage from "./_layout/DemoPage";\r
import {\r
  FilePreviewCore,\r
  withPlugins,\r
  createCsvPreviewPlugin,\r
  type FileInfo,\r
} from "../../components/FilePreviewPlugin";\r
\r
// 示例CSV文件列表\r
const csvFiles: FileInfo[] = [\r
  {\r
    name: "sample-data.csv",\r
    size: 2048,\r
    type: "text/csv",\r
    extension: ".csv",\r
    url: "./sample-data.csv",\r
  },\r
  {\r
    name: "sales-data.tsv",\r
    size: 1536,\r
    type: "text/tab-separated-values",\r
    extension: ".tsv",\r
    url: "./sales-data.tsv",\r
  },\r
  {\r
    name: "sample-data-semicolon.csv",\r
    size: 1024,\r
    type: "text/csv",\r
    extension: ".csv",\r
    url: "./sample-data-semicolon.csv",\r
  },\r
  {\r
    name: "sample-data-pipe.csv",\r
    size: 896,\r
    type: "text/csv",\r
    extension: ".csv",\r
    url: "./sample-data-pipe.csv",\r
  },\r
  {\r
    name: "mixed-data.csv",\r
    size: 512,\r
    type: "text/csv",\r
    extension: ".csv",\r
    url: "./mixed-data.csv",\r
  },\r
];\r
\r
export default function CsvPreviewDemo() {\r
  const [selectedFile, setSelectedFile] = useState<FileInfo>(csvFiles[0]);\r
\r
  // 创建CSV预览组件\r
  const Preview = withPlugins(FilePreviewCore, [\r
    createCsvPreviewPlugin({\r
      // 可以配置CSV预览的选项\r
      pageSize: 20,\r
      maxPreviewRows: 500,\r
      autoDetectDelimiter: true,\r
      autoDetectEncoding: true,\r
    }),\r
  ]);\r
\r
  return (\r
    <DemoPage\r
      title="CSV预览"\r
      description="展示CSV文件的预览功能，支持自动分隔符检测、编码检测、分页、搜索等功能"\r
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
        {/* CSV文件列表 */}\r
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
          <h3 style={{ margin: "0 0 16px", fontSize: 16 }}>CSV文件</h3>\r
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>\r
            {csvFiles.map((file, index) => (\r
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
