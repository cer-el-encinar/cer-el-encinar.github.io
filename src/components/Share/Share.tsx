import * as React from 'react';
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  XIcon,
} from 'react-share';

import { StyledShare } from './StyledShare';

type Props = {
  uri: string;
};

export const Share: React.FC<Props> = ({ uri }) => (
  <StyledShare>
    <p>Difunde la noticia</p>
    <FacebookShareButton url={uri}>
      <FacebookIcon />
    </FacebookShareButton>
    <WhatsappShareButton url={uri}>
      <WhatsappIcon />
    </WhatsappShareButton>
    <TelegramShareButton url={uri}>
      <TelegramIcon />
    </TelegramShareButton>
    <TwitterShareButton url={uri}>
      <XIcon />
    </TwitterShareButton>
    <EmailShareButton url={uri}>
      <EmailIcon />
    </EmailShareButton>
  </StyledShare>
);
