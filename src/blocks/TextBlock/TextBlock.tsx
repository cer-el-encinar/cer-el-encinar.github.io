import { TinaMarkdown, type TinaMarkdownContent } from 'tinacms/dist/rich-text';

interface Props {
  content: TinaMarkdownContent | TinaMarkdownContent[];
}

export const TextBlock: React.FC<Props> = ({ content }) => (
  <TinaMarkdown
    content={content}
    components={{
      code_block: (props) => (
        <pre className="text-center mb-6 whitespace-break-spaces">
          <code className="text-4xl">{props?.value}</code>
        </pre>
      ),
    }}
  />
);
