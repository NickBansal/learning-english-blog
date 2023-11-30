import { useState } from 'react';

import { Indicators } from './indicators';

import { TESTIMONIALS } from '~/constants/TESTIMONIALS';

export const TestimonialsCarousel = () => {
  const [slide, setSlide] = useState(0);

  return (
    <div className="max-w-[1000px] flex overflow-x-auto scroll-smooth text-center border-y-2 pb-10">
      {TESTIMONIALS.map((item) => {
        return (
          <div
            key={item.reference}
            className={`w-full h-max shrink-0 snap-start transition-transform p-8`}
            style={{ transform: `translateX(-${slide * 100}%)` }}
          >
            <h3 className="text-lg md:text-xl">{item.reference}</h3>
            <p className="italic">- {item.name}</p>
          </div>
        );
      })}

      <Indicators slide={slide} setSlide={setSlide} />
    </div>
  );
};
