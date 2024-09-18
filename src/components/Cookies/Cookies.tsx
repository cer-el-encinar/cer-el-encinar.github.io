'use client';

import { useCookies } from 'react-cookie';

export const Cookies = () => {
  const [cookies, setCookie] = useCookies(['cookiesAcknowledge']);

  return cookies.cookiesAcknowledge ? null : (
    <div className="fixed left-0 bottom-0 right-0 z-30">
      <div className="shadow-elevated rounded-2xl m-12 p-8 text-primary bg-white overflow-hidden">
        <p className="text-4xl">Cookies Free!</p>
        <p>
          Te informamos que no usamos cookies(*) para almacenar ningún dato
          privado tuyo, puedes navegar tranquilamente :)
        </p>
        <p>
          <small>
            (*) Excepto para almacenar que no te vuelva a salir este mensaje :P
          </small>
        </p>
        <button
          className="button"
          onClick={() => {
            setCookie('cookiesAcknowledge', true);
          }}
        >
          Entendido
        </button>
      </div>
    </div>
  );
};
