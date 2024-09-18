'use client';

import { useCookies } from 'react-cookie';
import { Button } from '../Button';

export const Cookies = () => {
  const [cookies, setCookie] = useCookies(['cookiesAcknowledge']);

  const hasCookies = cookies?.cookiesAcknowledge ?? false;

  return hasCookies ? null : (
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
        <Button
          onClick={() => {
            setCookie('cookiesAcknowledge', true);
          }}
        >
          Entendido
        </Button>
      </div>
    </div>
  );
};
