import { TinaMarkdown, type TinaMarkdownContent } from 'tinacms/dist/rich-text';
import { dash } from 'radashi';

interface Props {
  content: TinaMarkdownContent | TinaMarkdownContent[];
}

export const TextBlock: React.FC<Props> = ({ content }) => (
  <TinaMarkdown
    content={content}
    components={{
      h2: (props) => (
        <h2
          id={dash(`h2 ${props?.children?.props?.content[0]?.text}`)}
          {...props}
        />
      ),
      h3: (props) => (
        <h3
          id={dash(`h3 ${props?.children?.props?.content[0]?.text}`)}
          {...props}
        />
      ),
      code_block: (props) => (
        <pre className="text-center mb-6 whitespace-break-spaces">
          <code className="text-4xl">{props?.value}</code>
        </pre>
      ),
    }}
  />
);
