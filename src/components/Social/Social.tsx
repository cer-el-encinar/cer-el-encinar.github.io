import * as React from 'react';
import { FaEnvelope, FaFacebook, FaInstagram } from 'react-icons/fa';
import { IconContext } from 'react-icons';

import { StyledSocial } from './StyledSocial';

type Props = {
  inFooter?: boolean;
}

export const Social: React.FC<Props> = ({ inFooter = false }) => {
  return (
    <StyledSocial $inFooter={inFooter}>
      <IconContext.Provider
        value={{
          size: inFooter ? '1rem' : '64px',
          style: {
            verticalAlign: 'bottom',
          },
        }}
      >
        <ul>
          <li>
            <a href="https://instagram.com/cerelencinar" target="_blank">
              <FaInstagram />
              <br />
              cerelencinar
            </a>
          </li>
          <li>
            <a href="https://facebook.com/CERELENCINAR" target="_blank">
              <FaFacebook />
              <br />
              CERELENCINAR
            </a>
          </li>
          <li>
            <a href="emailto:cerelencinar@gmail.com">
              <FaEnvelope />
              <br />
              cerelencinar@gmail.com
            </a>
          </li>
        </ul>
      </IconContext.Provider>
    </StyledSocial>
  );
};
