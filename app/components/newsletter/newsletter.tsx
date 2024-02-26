/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/prefer-optional-chain */
import { useEffect, useRef } from 'react';
import { useFetcher } from '@remix-run/react';
import classNames from 'classnames';

import { FormActions } from '~/types/form-interface';

export default function Newsletter({ shouldRenderChild }: { shouldRenderChild: boolean }) {
  const fetcher = useFetcher();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref && ref?.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <div ref={ref} className="h-max overflow-hidden border-t-2 p-4">
      <div
        className={classNames(
          'flex items-center justify-center h-max pb-16 transition-transform duration-500 animate-dropDown',
          {
            '-translate-y-[18rem]': !shouldRenderChild
          }
        )}
      >
        <div className="flex flex-col md:flex-row items-center space-y-4">
          <div className="md:w-1/2">
            <h1 className="font-bold text-2xl text-gray-700 dark:text-white text-center">NewsLetter.</h1>
            <p className="text-sm text-gray-500 dark:text-gray-300 text-center">
              Join our Newsletter and get weekly news.
            </p>
          </div>

          <fetcher.Form
            method="post"
            className="md:w-[400px] md:ml-4"
            onSubmit={(e) => {
              fetcher.submit(e.currentTarget);
            }}
          >
            <input
              name="name"
              type="text"
              placeholder="Enter your name..."
              className={classNames('border-2 border-gray-400 rounded-lg w-full h-12 px-4  text-black', {
                'mb-4 border-gray-400': !fetcher?.data?.formErrors?.name,
                'mb-1 border-red-500': fetcher?.data?.formErrors?.name
              })}
            />
            {fetcher?.data?.formErrors?.name && (
              <p className="w-full text-center text-sm text-red-500 dark:text-red-300 mb-4">
                {fetcher.data.formErrors.name}
              </p>
            )}
            <input
              name="email"
              type="text"
              placeholder="Enter your email..."
              className={classNames('border-2 border-gray-400 rounded-lg w-full h-12 px-4 text-black', {
                'mb-4 border-gray-400': !fetcher?.data?.formErrors?.email,
                'mb-1 border-red-500': fetcher?.data?.formErrors?.email
              })}
            />
            {fetcher?.data?.subscription && (
              <p className="w-full text-center text-sm text-green-600 dark:text-green-300 px-4 mb-4">
                Please check your email, and confirm subscription.
              </p>
            )}
            {fetcher?.data?.formErrors?.email && (
              <p className={classNames('w-full text-center text-sm text-red-500 dark:text-red-300 mb-4')}>
                {fetcher.data.formErrors.email}
              </p>
            )}
            <button
              type="submit"
              name="_action"
              value={FormActions.NEWSLETTER}
              className="bg-red-400  text-white rounded-md hover:bg-red-500 font-semibold px-4 py-3 w-full"
            >
              {fetcher.state === 'submitting' || fetcher.state === 'loading' ? 'Subscribing...' : 'Subscribe'}
            </button>
          </fetcher.Form>
        </div>
      </div>
    </div>
  );
}
