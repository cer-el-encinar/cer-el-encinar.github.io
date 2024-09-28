import { Contained } from '@components';
import type { IWiki } from '@declarations';
import { TOC } from '@toc';

interface Props {
  wikis: IWiki[];
}

export const TOCBlock: React.FC<Props> = ({ wikis }) => (
  <Contained>
    <TOC wikis={wikis} />
  </Contained>
);
