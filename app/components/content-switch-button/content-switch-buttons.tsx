import { Link } from '@remix-run/react';
import classNames from 'classnames';

export const ContentSwitcher = ({ videoContent }: { videoContent: boolean }) => {
  const btnClasses =
    'text-sm md:text-base mr-2 text-teal-600 dark:text-teal-300 dark:hover:text-teal-500 p-1 md:p-2 rounded-md';
  const selectedBtn =
    'border-2 border-gray-500 bg-teal-600 text-white dark:bg-gray-500 dark:hover:text-teal-300 dark:border-gray-200';
  const notSelectedBtn = 'border-0 hover:text-teal-700';

  return (
    <div className=" border-b-2 border-gray-400 pb-[0.6rem] md:pb-4 md:-mt-4 -mt-6 mb-4 md:mb-0">
      <Link
        to="/content?$blogContent=true"
        className={classNames(btnClasses, {
          [selectedBtn]: !videoContent,
          [notSelectedBtn]: videoContent
        })}
      >
        Blog Content
      </Link>
      <Link
        to="/content?$videoContent=true"
        className={classNames(btnClasses, {
          [selectedBtn]: videoContent,
          [notSelectedBtn]: !videoContent
        })}
      >
        Video Content
      </Link>
    </div>
  );
};
