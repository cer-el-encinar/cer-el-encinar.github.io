import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import { StyledHeader, StyledHeaderInner } from './StyledHeader';

export const Header = () => {
  const [hasScrolled, setHasScrolled] = React.useState(false);
  React.useEffect(() => {
    setHasScrolled(window.scrollY > 0);
    const fn = () => {
      const nextValue = window.scrollY > 0;
      if (nextValue !== hasScrolled) {
        setHasScrolled(window.scrollY > 0);
      }
    };
    window.addEventListener('scroll', fn);
    return () => {
      window.removeEventListener('scroll', fn);
    };
  }, [hasScrolled]);
  return (
    <StyledHeader $hasScrolled={hasScrolled}>
      <StyledHeaderInner $hasScrolled={hasScrolled}>
        <nav>
          <ul>
            <li>
              <Link to="/nosotros/">Nosotros</Link>
            </li>
            <li>
              <Link to="/colabora/">Colabora</Link>
            </li>
            <li>
              <Link to="/">
                <StaticImage
                  src="../../images/logo128.png"
                  placeholder="blurred"
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
          </ul>
        </nav>
      </StyledHeaderInner>
    </StyledHeader>
  );
};
