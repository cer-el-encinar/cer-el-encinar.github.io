import { client } from '@tina/client';
import { PageBlock } from '@blocks';
import { getDonations, getLatestPosts, getSocials } from '@data';

export async function generateStaticParams() {
  const pages = await client.queries.pageConnection();
  const paths = pages.data?.pageConnection?.edges?.map((edge) => ({
    slug: edge?.node?.slug,
  }));

  return paths || [];
}

export default async ({ params }: { params: { slug: string } }) => {
  const donations = await getDonations();
  const socials = await getSocials();
  const latestPosts = await getLatestPosts();
  const result = await client.queries.page({
    relativePath: `${params.slug}.mdx`,
  });
  return (
    <PageBlock
      donations={donations}
      socials={socials}
      latestPosts={latestPosts}
      showTitle={params.slug !== 'home'}
      {...result}
    />
  );
};
