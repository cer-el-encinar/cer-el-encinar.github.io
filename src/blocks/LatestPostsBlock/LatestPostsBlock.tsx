import Link from 'next/link';
import Image from 'next/image';

import { Card } from '@components';
import { IPost } from '@declarations';

interface Props {
  latestPosts?: IPost[];
}

export const LatestPostsBlock: React.FC<Props> = ({ latestPosts }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {latestPosts?.map((post) => (
      <div key={post.filename} className="mb-2">
        <Link href={`/noticias/${post.filename}/`}>
          <Card>
            <Card.Image cover>
              <Image
                src={post.cover as string}
                alt={post.title as string}
                fill
                style={{ objectFit: 'cover' }}
              />
            </Card.Image>
            <Card.Title>{post.title}</Card.Title>
          </Card>
        </Link>
      </div>
    ))}
  </div>
);
