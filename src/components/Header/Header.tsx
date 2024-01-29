import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import { StyledHeader } from "./StyledHeader";

export const Header = () => {
  return (
    <StyledHeader>
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
    </StyledHeader>
  );
};
