import { client } from '@tina/client';
import { WikiBlock } from '@blocks';
import { getDonations, getSocials, getWikis } from '@data';
import { getFullPath } from '@toc';

export async function generateStaticParams() {
  const { data } = await client.queries.wikiConnection();
  const paths = data?.wikiConnection?.edges?.map((edge) => ({
    slug: getFullPath(edge?.node?._sys?.relativePath as string),
  }));

  return paths || [];
}

export default async ({ params }: { params: { slug: string[] } }) => {
  const donations = await getDonations();
  const socials = await getSocials();
  const wikis = await getWikis();
  const result = await client.queries.wiki({
    relativePath: `${params.slug.join('/')}.mdx`,
  });
  return (
    <WikiBlock
      wikis={wikis}
      donations={donations}
      socials={socials}
      {...result}
    />
  );
};
