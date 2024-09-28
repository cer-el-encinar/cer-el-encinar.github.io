import Link from 'next/link';

import type { ITOCItem } from '../declarations';

export const TOCItem: React.FC<ITOCItem> = ({ slug, children, title, url }) => (
  <li>
    {url ? <Link href={url}>{title}</Link> : slug}
    {children && children.length > 0 && (
      <ul className="mt-2 mb-2">
        {children.map((props) => (
          <TOCItem {...props} />
        ))}
      </ul>
    )}
  </li>
);
