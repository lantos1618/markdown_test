# Next.js Markdown Editor - Working Example

This is a **working example** of a Next.js markdown editor with live preview functionality. It addresses common bugs and issues found in other markdown implementations and provides a stable, production-ready solution.

## 🎯 Purpose

This project serves as a reference implementation for:
- **Next.js 15** with App Router
- **React Markdown** with proper syntax highlighting
- **TypeScript** integration
- **Tailwind CSS** styling
- **Live preview** functionality

## ✨ Features

- **Real-time markdown preview** with syntax highlighting
- **GitHub Flavored Markdown (GFM)** support
- **Code blocks** with language-specific syntax highlighting
- **Responsive design** that works on desktop and mobile
- **TypeScript** for type safety
- **Modern UI** with Tailwind CSS

## 🚀 Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🛠️ Key Dependencies

- `react-markdown` - Core markdown rendering
- `remark-gfm` - GitHub Flavored Markdown support
- `react-syntax-highlighter` - Code syntax highlighting
- `next` - React framework
- `tailwindcss` - Styling

## 🔧 Why This Works

This implementation addresses common issues found in other markdown editors:

1. **Proper TypeScript integration** - No type errors or warnings
2. **Correct syntax highlighting** - Uses Prism with proper language detection
3. **Responsive layout** - Works on all screen sizes
4. **Performance optimized** - Uses Next.js 15 with Turbopack
5. **Clean code structure** - Follows Next.js App Router conventions

## 📝 Usage

The editor includes a comprehensive demo with examples of:
- Headers and text formatting
- Code blocks with syntax highlighting
- Lists (ordered, unordered, and task lists)
- Tables
- Links and images
- Blockquotes

## 🎨 Customization

The styling is built with Tailwind CSS and can be easily customized. The markdown components are fully configurable through the `components` prop in `ReactMarkdown`.

## 📚 Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs)
- [React Markdown](https://github.com/remarkjs/react-markdown)
- [Tailwind CSS](https://tailwindcss.com/docs)

## 🚀 Deploy

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
