import type { IPost } from '@declarations';
import { client } from '@tina/client';

export async function getLatestPosts(): Promise<IPost[] | undefined> {
  const { data } = await client.queries.postConnection();
  return data?.postConnection?.edges?.map((post) => ({
    title: post?.node?.title,
    date: post?.node?.date,
    blocks: post?.node?.blocks,
    cover: post?.node?.cover,
    filename: post?.node?._sys?.filename,
  }));
}
