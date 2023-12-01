import { useEffect, useState } from 'react';

import { Indicators } from './indicators';

import { TESTIMONIALS } from '~/constants/TESTIMONIALS';

export const TestimonialsCarousel = () => {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const maxAmount = TESTIMONIALS.length;
    const timer = setInterval(() => {
      setSlide((prevState) => {
        if (prevState === maxAmount - 1) {
          return 0;
        }
        return prevState + 1;
      });
    }, 5000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div
      id={`slide-${slide}`}
      className="max-w-full flex overflow-x-hidden text-center border-y-2 border-gray-500 pb-20"
    >
      {TESTIMONIALS.map((item) => {
        return (
          <div
            key={item.reference}
            className={`w-full h-max shrink-0 p-8`}
            style={{ transform: `translateX(-${slide * 100}%)`, transition: 'transform 1s' }}
          >
            <h3 className="text-lg md:text-xl italic font-light">{`"${item.reference}"`}</h3>
            <p className="text-lg md:text-xl italic font-semibold mt-2">- {item.name}</p>
          </div>
        );
      })}

      <Indicators slide={slide} setSlide={setSlide} />
    </div>
  );
};
