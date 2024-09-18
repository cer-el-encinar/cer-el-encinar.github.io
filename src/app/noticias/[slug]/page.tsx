import { client } from '@tina/client';
import { PostBlock } from '@blocks';
import { getDonations, getLatestPosts, getSocials } from '@data';

export async function generateStaticParams() {
  const { data } = await client.queries.postConnection();
  const paths = data?.postConnection?.edges?.map((edge) => ({
    slug: edge?.node?.slug,
  }));

  return paths || [];
}

export default async ({ params }: { params: { slug: string } }) => {
  const donations = await getDonations();
  const socials = await getSocials();
  const latestPosts = await getLatestPosts();
  const result = await client.queries.post({
    relativePath: `${params.slug}.mdx`,
  });
  return (
    <PostBlock
      donations={donations}
      socials={socials}
      latestPosts={latestPosts}
      {...result}
    />
  );
};
