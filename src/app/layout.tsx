import './global.css';

import { Header, Footer, Cookies } from '@components';
import { client } from '@tina/client';
import { fontClassNames } from './fonts';

export const metadata = {
  title: 'CER El Encinar',
  description: 'CER El Encinar',
};

export default async ({ children }: { children: React.ReactNode }) => {
  const { data } = await client.queries.socialConnection();
  const social = data?.socialConnection?.edges?.map((social) => ({
    url: social?.node?.url,
    title: social?.node?.title,
    icon: social?.node?.icon,
  }));
  return (
    <html lang="es">
      <body className={fontClassNames}>
        <Header />
        <div className="mt-[177px]">
          {children}
          <Footer social={social} />
          <Cookies />
        </div>
      </body>
    </html>
  );
};
