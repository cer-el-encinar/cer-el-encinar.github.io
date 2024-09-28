import { client } from '@tina/client';
import { PostBlock } from '@blocks';
import { getDonations, getLatestPosts, getSocials } from '@data';

export async function generateStaticParams() {
  const { data } = await client.queries.postConnection();
  const paths = data?.postConnection?.edges?.map((edge) => ({
    filename: edge?.node?._sys?.filename,
  }));

  return paths || [];
}

export default async ({ params }: { params: { filename: string } }) => {
  const donations = await getDonations();
  const socials = await getSocials();
  const latestPosts = await getLatestPosts();
  const result = await client.queries.post({
    relativePath: `${params.filename}.mdx`,
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
