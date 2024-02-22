import classNames from 'classnames';

export const BlogSwitcher = ({ videoCourse }: { videoCourse: boolean }) => {
  return (
    <div className=" border-b-2 border-gray-400 pb-4 -mt-4">
      <a
        href="/blogs?$blogs=true"
        className={classNames(
          'mr-2 text-teal-600 hover:text-teal-700 dark:text-teal-300 dark:hover:text-teal-500 p-2 rounded-md',
          {
            'border-2 border-gray-500 bg-teal-600 text-white dark:bg-gray-500 dark:border-gray-200': !videoCourse,
            'border-0 hover:text-teal-700': videoCourse
          }
        )}
      >
        Blogs
      </a>
      <a
        href="/blogs?$videoCourse=true"
        className={classNames('mr-2 text-teal-600  dark:text-teal-300 dark:hover:text-teal-500 p-2 rounded-md', {
          'border-2 bg-teal-600 text-white border-gray-500 dark:bg-gray-500 dark:border-gray-200': videoCourse,
          'border-0 hover:text-teal-700': !videoCourse
        })}
      >
        Video Courses
      </a>
    </div>
  );
};
