'use client';

import { useTina, tinaField } from 'tinacms/dist/react';
import { capitalize, title } from 'radashi';

import type { WikiQuery } from '@tina/types';
import type { IDonation, ISocial, IWiki } from '@declarations';
import { Contained, Hero } from '@components';
import { DonationsBlock } from '../DonationsBlock';
import { HeadingBlock } from '../HeadingBlock';
import { TextBlock } from '../TextBlock';
import { HeroBlock } from '../HeroBlock';
import { CallToActionBlock } from '../CallToActionBlock';
import { SocialsBlock } from '../SocialsBlock';
import { TOCBlock } from '../TOCBlock';
import { getPath } from '@toc';
import { SpacingBlock } from '../SpacingBlock';

interface Props {
  data: WikiQuery;
  variables: {
    relativePath: string;
  };
  query: string;
  showTitle?: boolean;
  donations?: IDonation[];
  wikis?: IWiki[];
  socials?: ISocial[];
}

export const WikiBlock: React.FC<Props> = ({
  showTitle = true,
  donations,
  socials,
  wikis,
  ...props
}) => {
  const { data } = useTina(props);
  const path = getPath(data.wiki._sys.relativePath);
  return (
    <>
      {showTitle && (
        <Hero small>
          <Hero.Title data-tina-field={tinaField(data?.wiki, 'title')}>
            {data.wiki.title}
            {path.length > 0 && (
              <Hero.Subtitle>
                {path.map((chunk) => capitalize(title(chunk))).join(' / ')}
              </Hero.Subtitle>
            )}
          </Hero.Title>
        </Hero>
      )}

      <div className="h-[3rem]" />

      {data?.wiki?.blocks?.map((block, index) => {
        const key = `${block?.__typename}-${index}`;
        return block?.__typename === 'WikiBlocksHero' ? (
          <div key={key}>
            <HeroBlock
              imgSrc={block.imgSrc as string}
              text={block.text}
              url={block.url as string}
              button={block.button as string}
              id={key}
            />
          </div>
        ) : block?.__typename === 'WikiBlocksDonations' ? (
          <Contained key={key} data-tina-field={tinaField(block, 'id')}>
            <DonationsBlock donations={donations} />
          </Contained>
        ) : block?.__typename === 'WikiBlocksText' ? (
          <Contained key={key} data-tina-field={tinaField(block, 'text')}>
            <TextBlock content={block.text} />
          </Contained>
        ) : block?.__typename === 'WikiBlocksHeading' ? (
          <Contained key={key} data-tina-field={tinaField(block, 'heading')}>
            <HeadingBlock>{block.heading}</HeadingBlock>
          </Contained>
        ) : block?.__typename === 'WikiBlocksCta' ? (
          <Contained key={key} data-tina-field={tinaField(block, 'text')}>
            <CallToActionBlock content={block.text} />
          </Contained>
        ) : block?.__typename === 'WikiBlocksToc' ? (
          <Contained key={key} data-tina-field={tinaField(block, 'id')}>
            <TOCBlock wikis={wikis as IWiki[]} />
          </Contained>
        ) : block?.__typename === 'WikiBlocksSpacing' ? (
          <div key={key} data-tina-field={tinaField(block, 'size')}>
            <SpacingBlock
              size={String(block.size) as 'small' | 'medium' | 'large'}
            />
          </div>
        ) : block?.__typename === 'WikiBlocksSocials' ? (
          <div key={key}>
            <SocialsBlock socials={socials} block={block} />
          </div>
        ) : (
          ''
        );
      })}
    </>
  );
};
