import { Jost, Playpen_Sans } from 'next/font/google';

const jost = Jost({ subsets: ['latin'], variable: '--font-regular' });

const playpen = Playpen_Sans({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-featured',
});

export const fontClassNames = `${playpen.className} ${jost.className}`;
