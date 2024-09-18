'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useScroll } from 'ahooks';

import Logo from './logo128.png';

import { MenuButton } from '../MenuButton';
import { Menu } from '../Menu';

export const Header = () => {
  const position = useScroll(
    typeof window !== 'undefined' ? window?.document : null
  );
  const hasScrolled = (position?.top ?? 0) > 0;
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <header
      className={`font-featured w-full fixed top-0 bg-white z-10 transition-all duration-200 ${
        (hasScrolled || isOpen) &&
        'shadow-[0_0.2rem_0.5rem_rgba(0,126,167,0.3)]'
      }`}
    >
      <div
        className={`max-w-screen-lg transition-all duration-200 mx-0 my-0 lg:mx-auto ${
          hasScrolled ? 'lg:my-0' : 'lg:my-[2rem]'
        }`}
      >
        <nav className={isOpen ? 'mb-12 lg:mb-0' : ''}>
          <div className="flex px-8 items-center justify-between lg:hidden min-h-[128px]">
            <Link
              href="/"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <Image src={Logo} alt="CER El Encinar" width={64} />
            </Link>
            <MenuButton
              isOpen={isOpen}
              toggle={() => {
                setIsOpen((prev) => !prev);
              }}
            />
          </div>
          <Menu
            afterClick={() => {
              setIsOpen(false);
            }}
            isOpen={isOpen}
            hasScrolled={hasScrolled}
          />
        </nav>
      </div>
    </header>
  );
};
