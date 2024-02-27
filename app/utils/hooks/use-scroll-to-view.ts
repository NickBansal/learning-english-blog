import { type RefObject, useEffect } from 'react';

export const useScrollIntoView = (ref: RefObject<HTMLDivElement> | null, offsetTop: number) => {
  useEffect(() => {
    if (ref && ref?.current) {
      window.scrollTo({
        top: ref.current.offsetTop - offsetTop,
        left: 0,
        behavior: 'smooth'
      });
    }
  }, []);
};
