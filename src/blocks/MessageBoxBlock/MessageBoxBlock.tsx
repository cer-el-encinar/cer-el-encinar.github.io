import { TinaMarkdown } from 'tinacms/dist/rich-text';

import { MessageBox } from '@components';
import { PageBlocksMessageBox } from '@tina/types';
import { TMessageBoxType } from '@declarations';

export const MessageBoxBlock: React.FC<PageBlocksMessageBox> = ({
  type = 'info',
  text,
}) => (
  <MessageBox type={type as TMessageBoxType}>
    <TinaMarkdown
      content={text}
      components={{
        p: (props) => <p className="m-0 p-0" {...props} />,
      }}
    />
  </MessageBox>
);
