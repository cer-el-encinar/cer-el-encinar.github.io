import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { useScroll } from 'ahooks';

import {
  StyledHeader,
  StyledHeaderInner,
  StyledHeaderMobile,
} from './StyledHeader';
import { Menu, MenuButton } from './components';

export const Header = () => {
  const position = useScroll(window?.document);
  const hasScrolled = (position?.top ?? 0) > 0;
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <StyledHeader $hasScrolled={hasScrolled} isOpen={isOpen}>
      <StyledHeaderInner $hasScrolled={hasScrolled}>
        <nav>
          <StyledHeaderMobile>
            <Link to="/">
              <StaticImage
                src="../../images/logo128.png"
                placeholder="none"
                alt="CER El Encinar"
                width={64}
              />
            </Link>
            <MenuButton
              isOpen={isOpen}
              toggle={() => {
                setIsOpen((prev) => !prev);
              }}
            />
          </StyledHeaderMobile>
          <Menu isOpen={isOpen} hasScrolled={hasScrolled} />
        </nav>
      </StyledHeaderInner>
    </StyledHeader>
  );
};
