'use client';

import { useTina, tinaField } from 'tinacms/dist/react';
import Image from 'next/image';

import type { PostQuery } from '@tina/types';
import type { IDonation, IPost, ISocial } from '@declarations';
import { Contained, Hero, Share } from '@components';
import { DonationsBlock } from '../DonationsBlock';
import { LatestPostsBlock } from '../LatestPostsBlock';
import { HeadingBlock } from '../HeadingBlock';
import { TextBlock } from '../TextBlock';
import { HeroBlock } from '../HeroBlock';
import { CallToActionBlock } from '../CallToActionBlock';
import { SocialsBlock } from '../SocialsBlock';
import { SpacingBlock } from '../SpacingBlock';

interface Props {
  data: PostQuery;
  variables: {
    relativePath: string;
  };
  query: string;
  donations?: IDonation[];
  socials?: ISocial[];
  latestPosts?: IPost[];
}

export const PostBlock: React.FC<Props> = ({
  donations,
  socials,
  latestPosts,
  ...props
}) => {
  const { data } = useTina(props);
  return (
    <>
      <Hero small>
        <Hero.Title data-tina-field={tinaField(data?.post, 'title')}>
          <h1>{data.post.title}</h1>
        </Hero.Title>
      </Hero>

      <div className="relative w-full h-[600px] mb-[3rem]">
        <Image
          src={data.post.cover as string}
          alt={data.post.title as string}
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>

      {data?.post?.blocks?.map((block, index) => {
        const key = `${block?.__typename}-${index}`;
        return block?.__typename === 'PostBlocksHero' ? (
          <div key={key}>
            <HeroBlock
              imgSrc={block.imgSrc as string}
              text={block.text}
              button={String(block.button)}
              url={String(block.url)}
              id={key}
            />
          </div>
        ) : block?.__typename === 'PostBlocksDonations' ? (
          <Contained key={key} data-tina-field={tinaField(block, 'id')}>
            <DonationsBlock donations={donations} />
          </Contained>
        ) : block?.__typename === 'PostBlocksText' ? (
          <Contained key={key} data-tina-field={tinaField(block, 'text')}>
            <TextBlock content={block.text} />
          </Contained>
        ) : block?.__typename === 'PostBlocksLatestPosts' ? (
          <Contained key={key} data-tina-field={tinaField(block, 'id')}>
            <LatestPostsBlock latestPosts={latestPosts} />
          </Contained>
        ) : block?.__typename === 'PostBlocksHeading' ? (
          <Contained key={key} data-tina-field={tinaField(block, 'heading')}>
            <HeadingBlock>{block.heading}</HeadingBlock>
          </Contained>
        ) : block?.__typename === 'PostBlocksCta' ? (
          <Contained key={key} data-tina-field={tinaField(block, 'text')}>
            <CallToActionBlock content={block.text} />
          </Contained>
        ) : block?.__typename === 'PostBlocksSpacing' ? (
          <div key={key} data-tina-field={tinaField(block, 'size')}>
            <SpacingBlock
              size={String(block.size) as 'small' | 'medium' | 'large'}
            />
          </div>
        ) : block?.__typename === 'PostBlocksSocials' ? (
          <div key={key}>
            <SocialsBlock socials={socials} block={block} />
          </div>
        ) : (
          ''
        );
      })}

      <Share uri="" />
    </>
  );
};
