"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";

const defaultMarkdown = `# Markdown Editor Demo

Welcome to the **Markdown Editor**! This demo showcases various markdown features.

## Text Formatting

### Bold and Italic
- **Bold text** using \`**text**\`
- *Italic text* using \`*text*\`
- ***Bold and italic*** using \`***text***\`
- ~~Strikethrough~~ using \`~~text~~\`

### Code
Inline \`code\` using backticks.

\`\`\`javascript
// Code block with syntax highlighting
function greet(name) {
  return \`Hello, \${name}!\`;
}

console.log(greet("World"));
\`\`\`

\`\`\`python
# Python example
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

print(fibonacci(10))
\`\`\`

\`\`\`css
/* CSS example */
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(45deg, #667eea, #764ba2);
}
\`\`\`

## Lists

### Unordered List
- Item 1
- Item 2
  - Nested item 2.1
  - Nested item 2.2
- Item 3

### Ordered List
1. First item
2. Second item
3. Third item

### Task List
- [x] Completed task
- [ ] Pending task

## Links and Images

[Visit GitHub](https://github.com)
![Next.js Logo](https://nextjs.org/static/favicon/favicon-32x32.png)

## Tables

| Feature | Support | Notes |
|---------|---------|-------|
| Headers | ✅ | Standard markdown |
| Bold | ✅ | **Bold text** |
| Code | ✅ | \`inline code\` |

## Blockquotes

> This is a blockquote.
> 
> It can span multiple lines.

---

*Try editing this content to see the live preview!*`;

export default function Home() {
  const [markdown, setMarkdown] = useState(defaultMarkdown);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Markdown Editor & Preview
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[calc(100vh-200px)]">
          {/* Editor Panel */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gray-800 text-white px-4 py-2 font-mono text-sm">
              Editor
            </div>
            <textarea
              value={markdown}
              onChange={(e) => setMarkdown(e.target.value)}
              className="w-full h-full p-4 font-mono text-sm border-0 resize-none focus:outline-none text-gray-900"
              placeholder="Start typing your markdown here..."
            />
          </div>

          {/* Preview Panel */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gray-800 text-white px-4 py-2 font-mono text-sm">
              Preview
            </div>
            <div className="h-full overflow-y-auto p-4 prose prose-sm max-w-none">
              <ReactMarkdown 
                remarkPlugins={[remarkGfm]}
                components={{
                  code({node, inline, className, children, ...props}: any) {
                    const match = /language-(\w+)/.exec(className || '');
                    return !inline && match ? (
                      <SyntaxHighlighter
                        style={tomorrow as any}
                        language={match[1]}
                        PreTag="div"
                        {...props}
                      >
                        {String(children).replace(/\n$/, '')}
                      </SyntaxHighlighter>
                    ) : (
                      <code className={className} {...props}>
                        {children}
                      </code>
                    );
                  }
                }}
              >
                {markdown}
              </ReactMarkdown>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center text-sm text-gray-600">
          <p>Features: Headers, Bold/Italic, Code blocks with syntax highlighting, Lists, Tables, Links, Images, Blockquotes, and more!</p>
        </div>
      </div>
    </div>
  );
}
