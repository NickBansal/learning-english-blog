import { Link, useSearchParams } from '@remix-run/react';
import classNames from 'classnames';

import { ArrowLeft } from '../icons/arrow-left';
import { ArrowRight } from '../icons/arrow-right';
import { DoubleArrowLeft } from '../icons/double-arrow-left';
import { DoubleArrowRight } from '../icons/double-arrow-right';

import { PaginationNumbers } from './pagination-numbers';

import { TOP_VALUE } from '~/constants/META_DATA';
import { setSearchParamsString } from '~/utils/set-search-params-string';

export function PaginationBar({ total }: { total: number }) {
  const [searchParams] = useSearchParams();
  const $skip = Number(searchParams.get('$skip')) || 0;
  const $top = Number(searchParams.get('$top')) || TOP_VALUE;
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

  const paginationBtns = (allowed: boolean) => {
    return {
      'cursor-not-allowed': !allowed,
      'hover:text-gray-600 dark:hover:text-white hover:scale-125': allowed
    };
  };

  return (
    <div className="flex items-center gap-1 mb-12 justify-center">
      <Link
        to={{
          search: setSearchParamsString(searchParams, {
            $skip: 0
          })
        }}
        preventScrollReset
        prefetch="intent"
        className={'text-gray-800 dark:text-gray-300'}
      >
        <button disabled={!canPageBackwards} className={classNames('h-[1.875rem]', paginationBtns(canPageBackwards))}>
          <span className="sr-only"> First page</span>
          <DoubleArrowLeft />
        </button>
      </Link>
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
        <button disabled={!canPageBackwards} className={classNames('h-[1.875rem]', paginationBtns(canPageBackwards))}>
          <span className="sr-only"> Previous page</span>
          <ArrowLeft className="mx-4" />
        </button>
      </Link>

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
        <button disabled={!canPageForwards} className={classNames('h-[1.875rem]', paginationBtns(canPageForwards))}>
          <span className="sr-only"> Next page</span>
          <ArrowRight className="mx-4" />
        </button>
      </Link>
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
        <button disabled={!canPageForwards} className={classNames('h-[1.875rem]', paginationBtns(canPageForwards))}>
          <span className="sr-only"> Last page</span>
          <DoubleArrowRight />
        </button>
      </Link>
    </div>
  );
}
