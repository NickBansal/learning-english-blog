import { Link } from '@remix-run/react';
import classNames from 'classnames';

export const BlogSwitcher = ({ videoCourse }: { videoCourse: boolean }) => {
  const btnClasses =
    'text-sm md:text-base mr-2 text-teal-600 dark:text-teal-300 dark:hover:text-teal-500 p-1 md:p-2 rounded-md';
  const selectedBtn = 'border-2 border-gray-500 bg-teal-600 text-white dark:bg-gray-500 dark:border-gray-200';
  const notSelectedBtn = 'border-0 hover:text-teal-700';

  return (
    <div className=" border-b-2 border-gray-400 pb-2 md:pb-4 md:-mt-4 -mt-6">
      <Link
        to="/blogs?$blogs=true"
        className={classNames(btnClasses, {
          [selectedBtn]: !videoCourse,
          [notSelectedBtn]: videoCourse
        })}
      >
        Blogs
      </Link>
      <Link
        to="/blogs?$videoCourse=true"
        className={classNames(btnClasses, {
          [selectedBtn]: videoCourse,
          [notSelectedBtn]: !videoCourse
        })}
      >
        Video Courses
      </Link>
    </div>
  );
};
