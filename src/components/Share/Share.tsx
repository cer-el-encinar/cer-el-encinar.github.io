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

type Props = {
  uri: string;
};

export const Share: React.FC<Props> = ({ uri }) => (
  <div className="py-1 px-0 font-featured text-4xl text-center my-2 mx-0">
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
  </div>
);
