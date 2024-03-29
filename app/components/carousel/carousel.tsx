import { useEffect, useRef, useState } from 'react';

import { Indicators } from './indicators';

import { type TestimonialTypes } from '~/types/hygraph-interface';

export const TestimonialsCarousel = ({ testimonials }: TestimonialTypes) => {
  const [slide, setSlide] = useState(0);
  const timeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(timeout.current as NodeJS.Timeout);
    };
  }, []);

  const resetTimer = () => {
    clearInterval(timeout.current as NodeJS.Timeout);
  };

  const startTimer = () => {
    const maxAmount = testimonials.length;
    timeout.current = setInterval(() => {
      setSlide((prevState) => {
        if (prevState === maxAmount - 1) {
          return 0;
        }
        return prevState + 1;
      });
    }, 5000);
  };

  return (
    <div
      id={`slide-${slide}`}
      className="max-w-full flex overflow-x-hidden text-center border-y-2 border-gray-500 pb-20"
    >
      {testimonials.map((item) => {
        return (
          <div
            key={item.id}
            className={`w-full h-max shrink-0 p-8`}
            style={{ transform: `translateX(-${slide * 100}%)`, transition: 'transform 1s' }}
          >
            <p className="text-base sm:text-lg md:text-xl italic font-light">{`"${item.content}"`}</p>
            <p className="text-base sm:text-lg md:text-xl italic font-semibold mt-2">- {item.name}</p>
          </div>
        );
      })}

      <Indicators
        slide={slide}
        setSlide={setSlide}
        resetTimer={resetTimer}
        startTimer={startTimer}
        testimonials={testimonials}
      />
    </div>
  );
};
