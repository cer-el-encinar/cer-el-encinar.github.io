import { getImageProps } from 'next/image';

import { Contained } from '../Contained';
import { Title } from './components';
import BgImage from './bg.png';

type Props = {
  children: React.ReactNode;
  small?: boolean;
};

function getBackgroundImage(srcSet = '') {
  const imageSet = srcSet
    .split(', ')
    .map((str) => {
      const [url, dpi] = str.split(' ');
      return `url("${url}") ${dpi}`;
    })
    .join(', ');
  return `image-set(${imageSet})`;
}

const $Hero: React.FC<Props> = ({ children, small = false }) => {
  const {
    props: { srcSet },
  } = getImageProps({ alt: '', width: 500, height: 500, src: BgImage });
  const bgImage = getBackgroundImage(srcSet);
  return (
    <div
      className={`text-4xl px-0 py-[2rem] ${
        small ? 'md:py-[4rem]' : 'md:py-[8rem]'
      }`}
      style={{
        backgroundImage: bgImage,
        backdropFilter: 'revert-layer',
        backgroundSize: '500px',
      }}
    >
      <Contained>{children}</Contained>
    </div>
  );
};

export const Hero = $Hero as typeof $Hero & {
  Title: typeof Title;
};

Hero.Title = Title;

Hero.displayName = 'Hero';
