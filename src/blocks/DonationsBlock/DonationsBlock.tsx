import Image from 'next/image';

import { Card } from '../../components/Card';
import type { IDonation } from '@declarations';

interface Props {
  donations: IDonation[] | undefined;
}

export const DonationsBlock: React.FC<Props> = ({ donations }) => (
  <div className="text-center">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {donations?.map((donation) => (
        <div key={donation.title}>
          <a href={donation.url} target="_blank">
            <Card>
              <Card.Image padding="2rem">
                <Image
                  src={donation.image as string}
                  alt="La lata solidaria"
                  width="150"
                  height="150"
                />
              </Card.Image>
              <Card.Title>{donation.title}</Card.Title>
              <Card.Content>{donation.description}</Card.Content>
            </Card>
          </a>
        </div>
      ))}
    </div>
  </div>
);
