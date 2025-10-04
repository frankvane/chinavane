const r=`import React from "react";\r
import ReactMarkdown from "react-markdown";\r
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";\r
import readmeContent from "../../../README.md?raw";\r
import remarkGfm from "remark-gfm";\r
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";\r
\r
export default function ReadmeDemo() {\r
  return (\r
    <div className="page">\r
      <div className="page-header">\r
        <h1 className="page-title">📖 README 文档</h1>\r
        <p className="page-desc">项目完整文档</p>\r
      </div>\r
\r
      <div\r
        className="page-card"\r
        style={{\r
          fontSize: "15px",\r
          lineHeight: "1.8",\r
          maxWidth: "100%",\r
        }}\r
      >\r
        <ReactMarkdown\r
          remarkPlugins={[remarkGfm]}\r
          components={{\r
            // 自定义代码块渲染\r
            code({ className, children, ...props }: any) {\r
              const match = /language-(\\w+)/.exec(className || "");\r
              const language = match ? match[1] : "";\r
              const isInline = !className;\r
\r
              return !isInline && language ? (\r
                <SyntaxHighlighter\r
                  style={tomorrow as any}\r
                  language={language}\r
                  PreTag="div"\r
                  customStyle={{\r
                    borderRadius: "4px",\r
                    fontSize: "14px",\r
                    lineHeight: "1.5",\r
                    margin: "16px 0",\r
                  }}\r
                >\r
                  {String(children).replace(/\\n$/, "")}\r
                </SyntaxHighlighter>\r
              ) : (\r
                <code\r
                  className={className}\r
                  style={{\r
                    background: "#f4f4f4",\r
                    padding: "2px 6px",\r
                    borderRadius: "3px",\r
                    fontFamily: "monospace",\r
                    fontSize: "0.9em",\r
                  }}\r
                >\r
                  {children}\r
                </code>\r
              );\r
            },\r
            // 自定义表格样式\r
            table({ children, ...props }) {\r
              return (\r
                <div style={{ overflowX: "auto", margin: "16px 0" }}>\r
                  <table\r
                    style={{\r
                      borderCollapse: "collapse",\r
                      width: "100%",\r
                      border: "1px solid #ddd",\r
                    }}\r
                    {...props}\r
                  >\r
                    {children}\r
                  </table>\r
                </div>\r
              );\r
            },\r
            th({ children, ...props }) {\r
              return (\r
                <th\r
                  style={{\r
                    border: "1px solid #ddd",\r
                    padding: "8px",\r
                    backgroundColor: "#f2f2f2",\r
                    textAlign: "left",\r
                  }}\r
                  {...props}\r
                >\r
                  {children}\r
                </th>\r
              );\r
            },\r
            td({ children, ...props }) {\r
              return (\r
                <td\r
                  style={{\r
                    border: "1px solid #ddd",\r
                    padding: "8px",\r
                  }}\r
                  {...props}\r
                >\r
                  {children}\r
                </td>\r
              );\r
            },\r
            // 自定义标题样式\r
            h1({ children, ...props }) {\r
              return (\r
                <h1\r
                  style={{\r
                    marginTop: "24px",\r
                    marginBottom: "12px",\r
                    fontSize: "2em",\r
                    fontWeight: "bold",\r
                  }}\r
                  {...props}\r
                >\r
                  {children}\r
                </h1>\r
              );\r
            },\r
            h2({ children, ...props }) {\r
              return (\r
                <h2\r
                  style={{\r
                    marginTop: "20px",\r
                    marginBottom: "12px",\r
                    fontSize: "1.5em",\r
                    fontWeight: "bold",\r
                  }}\r
                  {...props}\r
                >\r
                  {children}\r
                </h2>\r
              );\r
            },\r
            h3({ children, ...props }) {\r
              return (\r
                <h3\r
                  style={{\r
                    marginTop: "20px",\r
                    marginBottom: "12px",\r
                    fontSize: "1.3em",\r
                    fontWeight: "bold",\r
                  }}\r
                  {...props}\r
                >\r
                  {children}\r
                </h3>\r
              );\r
            },\r
            h4({ children, ...props }) {\r
              return (\r
                <h4\r
                  style={{\r
                    marginTop: "20px",\r
                    marginBottom: "12px",\r
                    fontSize: "1.1em",\r
                    fontWeight: "bold",\r
                  }}\r
                  {...props}\r
                >\r
                  {children}\r
                </h4>\r
              );\r
            },\r
            // 自定义段落样式\r
            p({ children, ...props }) {\r
              return (\r
                <p\r
                  style={{\r
                    marginBottom: "12px",\r
                    lineHeight: "1.6",\r
                  }}\r
                  {...props}\r
                >\r
                  {children}\r
                </p>\r
              );\r
            },\r
            // 自定义链接样式\r
            a({ children, href, ...props }) {\r
              return (\r
                <a\r
                  href={href}\r
                  target="_blank"\r
                  rel="noopener noreferrer"\r
                  style={{\r
                    color: "#0066cc",\r
                    textDecoration: "none",\r
                  }}\r
                  {...props}\r
                >\r
                  {children}\r
                </a>\r
              );\r
            },\r
            // 自定义列表样式\r
            ul({ children, ...props }) {\r
              return (\r
                <ul\r
                  style={{\r
                    marginLeft: "20px",\r
                    marginBottom: "12px",\r
                  }}\r
                  {...props}\r
                >\r
                  {children}\r
                </ul>\r
              );\r
            },\r
            ol({ children, ...props }) {\r
              return (\r
                <ol\r
                  style={{\r
                    marginLeft: "20px",\r
                    marginBottom: "12px",\r
                  }}\r
                  {...props}\r
                >\r
                  {children}\r
                </ol>\r
              );\r
            },\r
            // 自定义水平线样式\r
            hr({ ...props }) {\r
              return (\r
                <hr\r
                  style={{\r
                    margin: "24px 0",\r
                    border: "none",\r
                    borderTop: "1px solid #ddd",\r
                  }}\r
                  {...props}\r
                />\r
              );\r
            },\r
            // 自定义引用块样式\r
            blockquote({ children, ...props }) {\r
              return (\r
                <blockquote\r
                  style={{\r
                    borderLeft: "4px solid #ddd",\r
                    paddingLeft: "16px",\r
                    margin: "16px 0",\r
                    color: "#666",\r
                    fontStyle: "italic",\r
                  }}\r
                  {...props}\r
                >\r
                  {children}\r
                </blockquote>\r
              );\r
            },\r
          }}\r
        >\r
          {readmeContent}\r
        </ReactMarkdown>\r
      </div>\r
    </div>\r
  );\r
}\r
`;export{r as default};
