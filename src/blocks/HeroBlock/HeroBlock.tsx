import { TinaMarkdown, type TinaMarkdownContent } from 'tinacms/dist/rich-text';
import { tinaField } from 'tinacms/dist/react';
import Link from 'next/link';
import Image from 'next/image';

import { Hero } from '@components';

interface Props {
  imgSrc: string;
  text: TinaMarkdownContent | TinaMarkdownContent[];
  links: { label: string; url: string }[];
  id: string;
}

export const HeroBlock: React.FC<Props> = (props) => (
  <Hero>
    <div className="flex flex-col md:flex-row">
      <div className={`${props.imgSrc && 'basis-1/2'}`}>
        <div data-tina-field={tinaField(props, 'text')}>
          <TinaMarkdown content={props.text} />
        </div>
        {props.links?.map((link) => (
          <div key={link?.label} data-tina-field={tinaField(link, 'label')}>
            <Link
              className="font-featured"
              href={link?.url as string}
              key={link?.label}
            >
              {link?.label}
            </Link>
          </div>
        ))}
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
