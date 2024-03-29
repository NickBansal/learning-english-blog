import { type Dispatch, type SetStateAction } from 'react';
import classNames from 'classnames';

import { ArrowDown } from '../icons/arrow-down';

interface NewsletterButtonTypes {
  showSubscription: boolean;
  setShowSubscription: Dispatch<SetStateAction<boolean>>;
}

export const NewsletterButton = ({ showSubscription, setShowSubscription }: NewsletterButtonTypes) => {
  return (
    <div className="w-full mb-8 flex justify-center">
      <button
        className="flex items-center justify-center w-max rounded-lg border-gray-500 border-2 py-2 px-2 sm:px-4 text-gray-500 dark:text-white dark:border-white hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-150  text-sm sm:text-base"
        onClick={() => {
          setShowSubscription(!showSubscription);
        }}
      >
        <span className="mr-2 font-semibold">Subscribe to our newsletter</span>{' '}
        <ArrowDown
          className={classNames('transition-transform duration-300 dark:fill-white fill-gray-500', {
            'rotate-0': showSubscription,
            'rotate-180': !showSubscription
          })}
        />
      </button>
    </div>
  );
};
