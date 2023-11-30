import { type Dispatch, type SetStateAction } from 'react';
import classNames from 'classnames';

import { TESTIMONIALS } from '~/constants/TESTIMONIALS';

interface IndicatorTypes {
  slide: number;
  setSlide: Dispatch<SetStateAction<number>>;
}

export const Indicators = ({ slide, setSlide }: IndicatorTypes) => {
  return (
    <div className="flex space-x-2 w-full justify-center items-center absolute bottom-5">
      <button
        onClick={() => {
          setSlide((prevState) => (prevState === 0 ? TESTIMONIALS.length - 1 : prevState - 1));
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4 mr-4"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
      {TESTIMONIALS.map((item, index) => {
        return (
          <div
            key={item.reference}
            className={classNames(`h-3 w-3 rounded-full`, {
              ' bg-white': slide === index,
              'bg-gray-500': slide !== index
            })}
          />
        );
      })}
      <button
        onClick={() => {
          setSlide((prevState) => (prevState === TESTIMONIALS.length - 1 ? 0 : prevState + 1));
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4 ml-4"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>
    </div>
  );
};
