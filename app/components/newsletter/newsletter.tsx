/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Form, useActionData, useTransition } from '@remix-run/react';

export default function Newsletter() {
  const actionData = useActionData();
  const transition = useTransition();
  const submitting = transition.submission;

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
        <Form method="post" className="md:w-[400px] md:ml-4">
          <input
            name="name"
            type="text"
            placeholder="Enter your name..."
            className="border-2 rounded-lg w-full h-12 px-4 mb-4 text-black"
          />
          <input
            name="email"
            type="text"
            placeholder="Enter your email..."
            className="border-2 rounded-lg w-full h-12 px-4 mb-4 text-black"
          />
          {/* If subscription succeeded */}
          {actionData?.subscription && (
            <p className="w-full text-center text-sm text-green-500 px-4 mb-4">
              Please check your email, and confirm subscription.
            </p>
          )}
          {/* If subscription failed */}
          {actionData?.error && <p className="w-full text-center text-sm text-red-500 mb-4">{actionData.message}</p>}
          <button
            type="submit"
            className="bg-red-400 text-white rounded-md hover:bg-red-500 font-semibold px-4 py-3 w-full"
          >
            {submitting ? 'Subscribing...' : 'Subscribe'}
          </button>
        </Form>
      </div>
    </div>
  );
}
