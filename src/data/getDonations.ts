import { IDonation } from '@declarations';
import { client } from '@tina/client';

export async function getDonations(): Promise<IDonation[] | undefined> {
  const { data } = await client.queries.donationConnection();
  return data?.donationConnection?.edges?.map((donation) => ({
    title: donation?.node?.title,
    description: donation?.node?.description,
    url: donation?.node?.url,
    image: donation?.node?.image,
  }));
}
