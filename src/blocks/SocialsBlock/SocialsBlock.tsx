import {
  FaEnvelope,
  FaExclamation,
  FaFacebook,
  FaInstagram,
} from 'react-icons/fa';
import { tinaField } from 'tinacms/dist/react';

import { Contained } from '@components';
import type { ISocial } from '@declarations';
import type { PageBlocksSocials, PostBlocksSocials } from '@tina/types';

interface Props {
  socials: ISocial[] | undefined;
  block: PageBlocksSocials | PostBlocksSocials;
}

type TIcon = 'FaFacebook' | 'FaInstagram' | 'FaEnvelope';

const iconMap = {
  FaFacebook: FaFacebook,
  FaInstagram: FaInstagram,
  FaEnvelope: FaEnvelope,
};

export const SocialsBlock: React.FC<Props> = ({ socials, block }) => (
  <Contained>
    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      data-tina-field={tinaField(block, 'id')}
    >
      {socials?.map(({ url, icon, title }) => {
        const Icon = icon ? iconMap[icon as TIcon] : FaExclamation;
        return (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center my-[1rem] mx-[2rem]"
            key={url}
          >
            <Icon size={64} />
            {title}
          </a>
        );
      })}
    </div>
  </Contained>
);
