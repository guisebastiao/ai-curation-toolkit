import rehypeHighlight from "rehype-highlight";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "highlight.js/styles/github-dark-dimmed.css";

type MarkdownMessageProps = {
  content: string;
};

export const MarkdownMessage = ({ content }: MarkdownMessageProps) => {
  return (
    <div className="w-full prose prose-invert max-w-none text-sm leading-relaxed">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={{
          pre({ children, ...props }) {
            return (
              <pre className="rounded-lg bg-neutral-900 p-3 overflow-x-auto border border-neutral-700 my-3" {...props}>
                {children}
              </pre>
            );
          },
          code({ inline, className, children, ...props }: any) {
            if (inline) {
              return (
                <code className="bg-neutral-800 px-1.5 py-0.5 rounded text-[0.9em]" {...props}>
                  {children}
                </code>
              );
            }
            return (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}>
        {content}
      </ReactMarkdown>
    </div>
  );
};
