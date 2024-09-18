'use client'

import { TinaMarkdown, type TinaMarkdownContent } from 'tinacms/dist/rich-text';
import { tinaField } from 'tinacms/dist/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { Button, Hero } from '@components';

interface Props {
  imgSrc: string;
  text: TinaMarkdownContent | TinaMarkdownContent[];
  id: string;
  url: string;
  button: string;
}

export const HeroBlock: React.FC<Props> = (props) => {
  const router = useRouter();
  return (
    <Hero>
      <div className="flex flex-col md:flex-row">
        <div className={`${props.imgSrc && 'basis-1/2'}`}>
          <div data-tina-field={tinaField(props, 'text')}>
            <TinaMarkdown content={props.text} />
          </div>
          <div data-tina-field={tinaField(props, 'url')}>
            <Button
              onClick={() => {
                router.push(props.url);
              }}
            >
              {props.button}
            </Button>
          </div>
        </div>
        {props.imgSrc && (
          <div className="flex basis-1/2 justify-center mt-16 md:mt-0 md:justify-end">
            <Image
              src={props.imgSrc}
              alt={`image for ${props.id}`}
              width={256}
              height={343}
            />
          </div>
        )}
      </div>
    </Hero>
  );
};
