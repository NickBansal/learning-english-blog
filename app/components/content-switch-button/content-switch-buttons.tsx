import { Link } from '@remix-run/react';
import classNames from 'classnames';

export const ContentSwitcher = ({ videoContent }: { videoContent: boolean }) => {
  const btnClasses = 'text-sm md:text-base h-full p-1 md:p-2 mb-2 rounded-md';
  const selectedBtn =
    'border-2 border-gray-500 bg-teal-600 text-white dark:bg-gray-500 dark:text-teal-200 dark:border-gray-200';
  const notSelectedBtn =
    'text-teal-600 dark:text-teal-300 hover:text-gray-200 hover:bg-teal-500 dark:hover:bg-gray-600 dark:hover:text-teal-500';

  return (
    <div className="flex border-b-2 border-gray-400 mb-4 md:mb-0 space-x-1 items-center">
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
