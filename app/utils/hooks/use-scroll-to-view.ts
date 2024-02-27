import { type RefObject, useEffect } from 'react';

export const useScrollIntoView = (ref: RefObject<HTMLDivElement> | null) => {
  const handleScroll = (ref: HTMLDivElement) => {
    window.scrollTo({
      top: ref.offsetTop - 65,
      left: 0,
      behavior: 'smooth'
    });
  };
  useEffect(() => {
    if (ref && ref?.current) {
      handleScroll(ref.current);
    }
  }, []);
};
