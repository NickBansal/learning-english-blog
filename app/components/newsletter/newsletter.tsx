/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useFetcher } from '@remix-run/react';

import { FormActions } from '~/types/form-enum';

export default function Newsletter() {
  const fetcher = useFetcher();

  return (
    <div className="flex items-center justify-center h-max pb-16">
      <div className="flex flex-col md:flex-row items-center space-y-4">
        <div className="md:w-1/2">
          <h1 className="font-bold text-2xl text-gray-700 dark:text-white text-center">NewsLetter.</h1>
          <p className="text-sm text-gray-500 dark:text-gray-300 text-center">
            Join our Newsletter and get weekly news.
          </p>
        </div>
        {/* Newsletter form */}
        <fetcher.Form
          method="post"
          className="md:w-[400px] md:ml-4"
          onSubmit={(formData) => {
            fetcher.submit({ data: formData.currentTarget }, { method: 'post' });
          }}
        >
          <input
            name="name"
            type="text"
            placeholder="Enter your name..."
            className="border-2 border-gray-400 rounded-lg w-full h-12 px-4 mb-4 text-black"
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
            className="border-2 border-gray-400 rounded-lg w-full h-12 px-4 mb-4 text-black"
          />
          {/* If subscription succeeded */}
          {fetcher?.data?.subscription && (
            <p className="w-full text-center text-sm text-green-600 dark:text-green-300 px-4 mb-4">
              Please check your email, and confirm subscription.
            </p>
          )}
          {/* If subscription failed */}
          {fetcher?.data?.formErrors?.email && (
            <p className="w-full text-center text-sm text-red-500 dark:text-red-300 mb-4">
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
  );
}
