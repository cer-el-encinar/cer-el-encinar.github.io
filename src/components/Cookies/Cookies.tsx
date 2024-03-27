import * as React from 'react';
import { useCookies } from 'react-cookie';

import { StyledCookies, StyledInnerCookies } from './StyledCookies';

export const Cookies = () => {
  const [cookies, setCookie] = useCookies(['cookies-acknowledge']);

  return cookies['cookies-acknowledge'] ? null : (
    <StyledCookies>
      <StyledInnerCookies>
        <p>Cookies Free!</p>
        <p>
          Te informamos que no usamos cookies para almacenar ningún dato
          privado tuyo, puedes navegar tranquilamente :)
        </p>
        <button
          className="button"
          onClick={() => {
            setCookie('cookies-acknowledge', true);
          }}
        >
          Entendido
        </button>
      </StyledInnerCookies>
    </StyledCookies>
  );
};
