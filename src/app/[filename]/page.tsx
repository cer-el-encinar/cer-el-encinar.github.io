import { client } from '@tina/client';
import { PageBlock } from '@blocks';
import { getDonations, getLatestPosts, getSocials } from '@data';

export async function generateStaticParams() {
  const pages = await client.queries.pageConnection();
  const paths = pages.data?.pageConnection?.edges?.map((edge) => ({
    filename: edge?.node?._sys?.filename,
  }));

  return paths || [];
}

export default async ({ params }: { params: { filename: string } }) => {
  const donations = await getDonations();
  const socials = await getSocials();
  const latestPosts = await getLatestPosts();
  const result = await client.queries.page({
    relativePath: `${params.filename}.mdx`,
  });
  return (
    <PageBlock
      donations={donations}
      socials={socials}
      latestPosts={latestPosts}
      showTitle={params.filename !== 'home'}
      {...result}
    />
  );
};
