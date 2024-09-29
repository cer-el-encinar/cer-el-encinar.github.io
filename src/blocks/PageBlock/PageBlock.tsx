'use client';

import { useTina, tinaField } from 'tinacms/dist/react';

import type { PageQuery } from '@tina/types';
import type { IDonation, IPost, ISocial } from '@declarations';
import { Contained, Hero } from '@components';
import { DonationsBlock } from '../DonationsBlock';
import { LatestPostsBlock } from '../LatestPostsBlock';
import { HeadingBlock } from '../HeadingBlock';
import { TextBlock } from '../TextBlock';
import { HeroBlock } from '../HeroBlock';
import { CallToActionBlock } from '../CallToActionBlock';
import { SocialsBlock } from '../SocialsBlock';
import { SpacingBlock } from '../SpacingBlock';
import { MessageBoxBlock } from '../MessageBoxBlock';

interface Props {
  data: PageQuery;
  variables: {
    relativePath: string;
  };
  query: string;
  showTitle?: boolean;
  donations?: IDonation[];
  socials?: ISocial[];
  latestPosts?: IPost[];
}

export const PageBlock: React.FC<Props> = ({
  showTitle = true,
  donations,
  socials,
  latestPosts,
  ...props
}) => {
  const { data } = useTina(props);
  return (
    <>
      {showTitle && (
        <Hero small>
          <Hero.Title data-tina-field={tinaField(data?.page, 'title')}>
            <h1>{data.page.title}</h1>
          </Hero.Title>
        </Hero>
      )}

      {data?.page?.blocks?.map((block, index) => {
        const key = `${block?.__typename}-${index}`;
        return block?.__typename === 'PageBlocksHero' ? (
          <div key={key}>
            <HeroBlock
              imgSrc={block.imgSrc as string}
              text={block.text}
              url={block.url as string}
              button={block.button as string}
              id={key}
            />
          </div>
        ) : block?.__typename === 'PageBlocksDonations' ? (
          <Contained key={key} data-tina-field={tinaField(block, 'id')}>
            <DonationsBlock donations={donations} />
          </Contained>
        ) : block?.__typename === 'PageBlocksText' ? (
          <Contained key={key} data-tina-field={tinaField(block, 'text')}>
            <TextBlock content={block.text} />
          </Contained>
        ) : block?.__typename === 'PageBlocksLatestPosts' ? (
          <Contained key={key} data-tina-field={tinaField(block, 'id')}>
            <LatestPostsBlock latestPosts={latestPosts} />
          </Contained>
        ) : block?.__typename === 'PageBlocksHeading' ? (
          <Contained key={key} data-tina-field={tinaField(block, 'heading')}>
            <HeadingBlock>{block.heading}</HeadingBlock>
          </Contained>
        ) : block?.__typename === 'PageBlocksCta' ? (
          <Contained key={key} data-tina-field={tinaField(block, 'text')}>
            <CallToActionBlock content={block.text} />
          </Contained>
        ) : block?.__typename === 'PageBlocksMessageBox' ? (
          <Contained key={key} data-tina-field={tinaField(block, 'text')}>
            <MessageBoxBlock type={block.type} text={block.text} />
          </Contained>
        ) : block?.__typename === 'PageBlocksSpacing' ? (
          <div key={key} data-tina-field={tinaField(block, 'size')}>
            <SpacingBlock
              size={String(block.size) as 'small' | 'medium' | 'large'}
            />
          </div>
        ) : block?.__typename === 'PageBlocksSocials' ? (
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
