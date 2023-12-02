import { Link, useSearchParams } from '@remix-run/react';

import { setSearchParamsString } from '~/utils/set-search-params-string';

export const PaginationNumbers = ({
  pageNumber,
  isCurrentPage,
  pageSkip
}: {
  pageNumber: number;
  isCurrentPage: boolean;
  pageSkip: number;
}) => {
  const [searchParams] = useSearchParams();
  if (isCurrentPage) {
    return (
      <button className="grid w-8 place-items-center bg-gray-300 dark:bg-teal-500 text-lg text-black py-1 dark:text-white rounded-lg">
        <div>
          <span className="sr-only">Page {pageNumber}</span>
          <span>{pageNumber}</span>
        </div>
      </button>
    );
  } else {
    return (
      <Link
        to={{
          search: setSearchParamsString(searchParams, {
            $skip: pageSkip
          })
        }}
        preventScrollReset
        prefetch="intent"
        className="font-normal"
      >
        <button className="w-8 hover:bg-gray-100 dark:hover:bg-gray-400  text-gray-500 text-lg hover:text-gray-600 dark:text-gray-400 py-1 hover:dark:text-gray-200 rounded-lg">
          {pageNumber}
        </button>
      </Link>
    );
  }
};
