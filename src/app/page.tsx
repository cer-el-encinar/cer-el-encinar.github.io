import { client } from '@tina/client';
import { PageBlock } from '@blocks';
import { getDonations, getLatestPosts, getSocials } from '@data';

export default async () => {
  const result = await client.queries.page({ relativePath: 'home.mdx' });
  const donations = await getDonations();
  const socials = await getSocials();
  const latestPosts = await getLatestPosts();
  return (
    <PageBlock
      donations={donations}
      socials={socials}
      latestPosts={latestPosts}
      showTitle={false}
      {...result}
    />
  );
};
