import Link from 'next/link';
import Image from 'next/image';

import { client } from '@tina/client';
import { Card, Contained, Hero } from '@components';

export default async () => {
  const { data } = await client.queries.postConnection();
  const posts = data?.postConnection?.edges?.map((post) => ({
    title: post?.node?.title,
    filename: post?.node?._sys?.filename,
    cover: post?.node?.cover,
  }));
  return (
    <>
      <Hero small>
        <Hero.Title>
          <h1>Noticias</h1>
        </Hero.Title>
      </Hero>

      <Contained spaced>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts?.map((post) => (
            <div key={post.filename} className="mb-2">
              <Link href={`/noticias/${post.filename}/`}>
                <Card>
                  <Card.Image cover>
                    <div className="relative w-full h-[250px]">
                      <Image
                        src={post.cover as string}
                        alt={post.title as string}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                  </Card.Image>
                  <Card.Title>{post.title}</Card.Title>
                </Card>
              </Link>
            </div>
          ))}
        </div>
      </Contained>
    </>
  );
};
