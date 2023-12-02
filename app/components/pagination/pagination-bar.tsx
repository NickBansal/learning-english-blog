import { Link, useSearchParams } from '@remix-run/react';

import { ArrowLeft } from '../icons/arrow-left';
import { ArrowRight } from '../icons/arrow-right';
import { DoubleArrowLeft } from '../icons/double-arrow-left';
import { DoubleArrowRight } from '../icons/double-arrow-right';

import { PaginationNumbers } from './pagination-numbers';

import { setSearchParamsString } from '~/utils/set-search-params-string';

export function PaginationBar({ total }: { total: number }) {
  const [searchParams] = useSearchParams();
  const $skip = Number(searchParams.get('$skip')) || 0;
  const $top = Number(searchParams.get('$top')) || 5;
  const totalPages = Math.ceil(total / $top);
  const currentPage = Math.floor($skip / $top) + 1;
  const maxPages = 7;
  const halfMaxPages = Math.floor(maxPages / 2);
  const canPageBackwards = $skip > 0;
  const canPageForwards = $skip + $top < total;
  const pageNumbers = [] as number[];

  if (totalPages <= maxPages) {
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
  } else {
    let startPage = currentPage - halfMaxPages;
    let endPage = currentPage + halfMaxPages;
    if (startPage < 1) {
      endPage += Math.abs(startPage) + 1;
      startPage = 1;
    }
    if (endPage > totalPages) {
      startPage -= endPage - totalPages;
      endPage = totalPages;
    }
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }
  }

  return (
    <div className="flex items-center gap-1 mb-12 justify-center">
      <button disabled={!canPageBackwards}>
        <Link
          to={{
            search: setSearchParamsString(searchParams, {
              $skip: 0
            })
          }}
          preventScrollReset
          prefetch="intent"
          className="text-gray-800 dark:text-gray-300"
        >
          <span className="sr-only"> First page</span>
          <DoubleArrowLeft />
        </Link>
      </button>
      <button disabled={!canPageBackwards}>
        <Link
          to={{
            search: setSearchParamsString(searchParams, {
              $skip: Math.max($skip - $top, 0)
            })
          }}
          preventScrollReset
          prefetch="intent"
          className="text-gray-800 dark:text-gray-300"
        >
          <span className="sr-only"> Previous page</span>
          <ArrowLeft className="mx-4" />
        </Link>
      </button>

      {pageNumbers.map((pageNumber) => {
        const pageSkip = (pageNumber - 1) * $top;
        const isCurrentPage = pageNumber === currentPage;
        return (
          <PaginationNumbers
            pageNumber={pageNumber}
            isCurrentPage={isCurrentPage}
            pageSkip={pageSkip}
            key={pageNumber}
          />
        );
      })}
      <button disabled={!canPageForwards}>
        <Link
          to={{
            search: setSearchParamsString(searchParams, {
              $skip: $skip + $top
            })
          }}
          preventScrollReset
          prefetch="intent"
          className="text-gray-800 dark:text-gray-300"
        >
          <span className="sr-only"> Next page</span>
          <ArrowRight className="mx-4" />
        </Link>
      </button>
      <button disabled={!canPageForwards}>
        <Link
          to={{
            search: setSearchParamsString(searchParams, {
              $skip: (totalPages - 1) * $top
            })
          }}
          preventScrollReset
          prefetch="intent"
          className="text-gray-800 dark:text-gray-300"
        >
          <span className="sr-only"> Last page</span>
          <DoubleArrowRight />
        </Link>
      </button>
    </div>
  );
}
