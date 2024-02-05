import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import { StyledMenu } from './StyledMenu';

type Props = {
  isOpen?: boolean;
  hasScrolled?: boolean;
};

export const Menu: React.FC<Props> = ({ isOpen, hasScrolled }) => (
  <StyledMenu isOpen={isOpen} $hasScrolled={hasScrolled}>
    <li>
      <Link to="/nosotros/">Nosotros</Link>
    </li>
    <li>
      <Link to="/colabora/">Colabora</Link>
    </li>
    <li className="logo">
      <Link to="/">
        <StaticImage
          src="../../../../images/logo128.png"
          placeholder="none"
          alt="CER El Encinar"
        />
      </Link>
    </li>
    <li>
      <Link to="/noticias/">Noticias</Link>
    </li>
    <li>
      <Link to="/contacto/">Contacto</Link>
    </li>
  </StyledMenu>
);
