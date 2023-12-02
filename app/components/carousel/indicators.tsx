import { type Dispatch, type SetStateAction } from 'react';
import classNames from 'classnames';

import { ArrowLeft } from '../icons/arrow-left';
import { ArrowRight } from '../icons/arrow-right';

import { TESTIMONIALS } from '~/constants/TESTIMONIALS';

interface IndicatorTypes {
  slide: number;
  setSlide: Dispatch<SetStateAction<number>>;
}

export const Indicators = ({ slide, setSlide }: IndicatorTypes) => {
  return (
    <div className="flex w-full justify-center items-center absolute bottom-5 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <button
        aria-label="Previous slide button"
        className="mr-4 p-1 border-[1px] border-teal-600 dark:border-white rounded-full hover:bg-teal-600 hover:text-white dark:hover:bg-gray-300 dark:hover:text-gray-900"
        onClick={() => {
          setSlide((prevState) => (prevState === 0 ? TESTIMONIALS.length - 1 : prevState - 1));
        }}
      >
        <ArrowLeft />
      </button>
      <div className="flex space-x-2">
        {TESTIMONIALS.map((item, index) => {
          return (
            <button
              aria-label={`Reference ${String(index + 1)}`}
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
      </div>
      <button
        aria-label="Next slide button"
        className="ml-4 p-1 border-[1px] border-teal-600 dark:border-white rounded-full hover:bg-teal-600 hover:text-white dark:hover:bg-gray-300 dark:hover:text-gray-900"
        onClick={() => {
          setSlide((prevState) => (prevState === TESTIMONIALS.length - 1 ? 0 : prevState + 1));
        }}
      >
        <ArrowRight />
      </button>
    </div>
  );
};
