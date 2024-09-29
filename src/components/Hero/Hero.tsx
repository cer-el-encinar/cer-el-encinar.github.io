import { Contained } from '../Contained';
import { Subtitle, Title } from './components';
import BgImage from './bg.png';

type Props = {
  children: React.ReactNode;
  small?: boolean;
};

const $Hero: React.FC<Props> = ({ children, small = false }) => {
  return (
    <div
      className={`text-4xl px-0 py-[2rem] ${
        small ? 'md:py-[4rem]' : 'md:py-[8rem]'
      }`}
      style={{
        backgroundImage: `url(${BgImage.src})`,
        backgroundSize: '500px',
      }}
    >
      <Contained>{children}</Contained>
    </div>
  );
};

export const Hero = $Hero as typeof $Hero & {
  Title: typeof Title;
  Subtitle: typeof Subtitle;
};

Hero.Title = Title;
Hero.Subtitle = Subtitle;

Hero.displayName = 'Hero';
