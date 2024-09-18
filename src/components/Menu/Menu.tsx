import Link from 'next/link';
import Image from 'next/image';

import Logo from './logo128.png';

type Props = {
  isOpen?: boolean;
  hasScrolled?: boolean;
  afterClick: () => void;
};

const links = [
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/colabora', label: 'Colabora' },
  { href: '/', label: '' },
  { href: '/noticias', label: 'Noticias' },
  { href: '/contacto', label: 'Contacto' },
];

export const Menu: React.FC<Props> = ({ isOpen, hasScrolled, afterClick }) => (
  <ul
    className={`grid-rows-4 grid-cols-1 mb-2 items-center justify-center ${
      isOpen ? 'grid' : 'hidden'
    } lg:grid lg:grid-rows-1 lg:grid-cols-5`}
  >
    {links.map((link, idx) =>
      link.href === '/' ? (
        <li
          className="list-none m-0 p-0 hidden lg:inline-block"
          key={link.href}
        >
          <Link href="/" className="flex justify-center">
            <Image
              src={Logo}
              alt="CER El Encinar"
              className={`transition-all duration-200 ${
                hasScrolled && 'scale-50'
              }`}
              width={120}
              height={120}
            />
          </Link>
        </li>
      ) : (
        <li
          key={link.href}
          className="flex justify-center items-center p-0 m-0 w-full border-solid h-20 lg:h-auto border-b-1 border-b-black list-none transition-all duration-200"
        >
          <Link
            href={link.href}
            className={`text-4xl ${
              idx !== links.length - 1 &&
              'border-b border-[rgba(0,0,0,0.1)] border-solid lg:border-none'
            } p-0 m-0 w-full h-full flex justify-center items-center `}
            onClick={() => {
              afterClick();
            }}
          >
            {link.label}
          </Link>
        </li>
      )
    )}
  </ul>
);