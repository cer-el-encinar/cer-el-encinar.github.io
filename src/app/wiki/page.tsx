import { client } from '@tina/client';
import { getDonations, getSocials, getWikis } from '@data';
import { WikiBlock } from '@blocks';

export default async () => {
  const result = await client.queries.wiki({ relativePath: 'home.mdx' });
  const wikis = await getWikis();
  const donations = await getDonations();
  const socials = await getSocials();
  return (
    <WikiBlock
      wikis={wikis}
      donations={donations}
      socials={socials}
      {...result}
    />
  );
};
