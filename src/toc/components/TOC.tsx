import type { IWiki } from '@declarations';
import { TOCItem } from './TOCItem';
import { parseWikis } from '../helpers';

interface Props {
  wikis: IWiki[];
}

export const TOC: React.FC<Props> = ({ wikis }) => {
  const toc = parseWikis(wikis).filter((item) => item.slug !== 'home');
  return (
    <ul className="mb-[6rem]">
      {toc.map((props) => (
        <TOCItem {...props} />
      ))}
    </ul>
  );
};
