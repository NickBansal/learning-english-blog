import { useEffect, useState } from 'react';

import { TESTIMONIALS } from '~/constants/TESTIMONIALS';

export const TestimonialsCarousel = () => {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const maxAmount = TESTIMONIALS.length;
    const timer = setInterval(() => {
      setSlide((prevState) => {
        if (prevState === maxAmount - 1) {
          return 1;
        }
        return prevState + 1;
      });
    }, 3000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="max-w-[1000px] relative mx-8 md:mx-20 overflow-hidden">
      {TESTIMONIALS.map((item, index) => {
        return (
          <div key={item.reference} className={'inline-block'}>
            <h3>{item.reference}</h3>
            <p>{item.name}</p>
          </div>
        );
      })}
    </div>
  );
};
