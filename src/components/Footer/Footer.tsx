import Image from 'next/image';
import { FaEnvelope, FaFacebook, FaInstagram } from 'react-icons/fa';

import CatSilhouette from './cat-silhouette.png';
import Ministerio from './ministerio.jpg';

import Link from 'next/link';

interface FooterProps {
  social:
    | {
        title: string | undefined;
        url: string | undefined;
        icon: string | undefined;
      }[]
    | undefined;
}

type TIcon = 'FaFacebook' | 'FaInstagram' | 'FaEnvelope';
const iconMap = {
  FaFacebook: FaFacebook,
  FaInstagram: FaInstagram,
  FaEnvelope: FaEnvelope,
};

export const Footer: React.FC<FooterProps> = ({ social }) => (
  <div className="mt-[8rem]">
    <div className="flex justify-center">
      <Image src={CatSilhouette} alt="CER El Encinar" />
    </div>
    <div className="bg-black">
      <div className="p-1 my-0 mx-auto md:py-1 md:px-0 bg-black text-xl text-body max-w-screen-lg">
        <div className="flex justify-center my-16 mx-0">
          <a
            href="https://www.mdsocialesa2030.gob.es/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-white underline"
          >
            <Image
              src={Ministerio}
              alt="Ministerio de derechos sociales, consumo y agenda"
            />
          </a>
        </div>
        <br />
        <div className="grid grid-cols-3 gap-3">
          {social &&
            social.map(({ url, icon, title }) => {
              const Icon = iconMap[icon as TIcon];
              return (
                <div key={url} className="mb-1 flex justify-center">
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-row items-center gap-2 text-white hover:text-white underline max-w-4xl"
                  >
                    <Icon />
                    {title}
                  </a>
                </div>
              );
            })}
        </div>
        <br />
        <p style={{ textAlign: 'center' }}>
          <Link
            href={'/terminos'}
            className="text-white hover:text-white underline"
          >
            Términos y condiciones
          </Link>
          &nbsp;|&nbsp;
          <Link
            href={'/privacidad'}
            className="text-white hover:text-white underline"
          >
            Política de privacidad
          </Link>
          <br />
          <br />
          &copy; CER El Encinar
        </p>
      </div>
    </div>
  </div>
);
