import { type Dispatch, type SetStateAction } from 'react';
import classNames from 'classnames';

import { TESTIMONIALS } from '~/constants/TESTIMONIALS';

interface IndicatorTypes {
  slide: number;
  setSlide: Dispatch<SetStateAction<number>>;
}

export const Indicators = ({ slide, setSlide }: IndicatorTypes) => {
  return (
    <div className="flex space-x-2 w-full justify-center items-center absolute bottom-5 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <button
        className="mr-4"
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
          className="w-4 h-4"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
      {TESTIMONIALS.map((item, index) => {
        return (
          <button
            onClick={() => {
              setSlide(index);
            }}
            key={item.reference}
            className={classNames(`h-3 w-3 rounded-full`, {
              'dark:bg-white bg-teal-600': slide === index,
              'dark:bg-gray-500 bg-gray-200': slide !== index
            })}
          />
        );
      })}
      <button
        className="ml-4"
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
          className="w-4 h-4"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>
    </div>
  );
};
