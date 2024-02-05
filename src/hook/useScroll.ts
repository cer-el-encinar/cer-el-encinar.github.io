import * as React from 'react';

export const useScroll = () => {
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

  return { hasScrolled };
};
