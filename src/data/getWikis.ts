import type { IWiki } from '@declarations';
import { client } from '@tina/client';

export async function getWikis(): Promise<IWiki[] | undefined> {
  const { data } = await client.queries.wikiConnection();
  return data?.wikiConnection?.edges?.map((wiki) => ({
    title: wiki?.node?.title as string,
    filename: wiki?.node?._sys?.filename as string,
    relativePath: wiki?.node?._sys?.relativePath as string,
  }));
}
