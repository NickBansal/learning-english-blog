import { Form, useSubmit } from '@remix-run/react';

import { SubmitButton } from '../buttons/buttons';

export const ContactForm = () => {
  const submit = useSubmit();
  return (
    <div className="w-full max-w-lg mx-auto mb-28 mt-2 md:mt-16">
      <Form
        onSubmit={(event) => {
          submit(event.currentTarget);
        }}
        className="bg-white dark:bg-gray-900 shadow-md dark:shadow-white rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 dark:text-white text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              First Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-black border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Jane"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 dark:text-white text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Last Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Doe"
            />
          </div>
        </div>
        <div className="flex flex-col -mx-3 mb-6">
          <div className="w-full px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 dark:text-white text-xs font-bold mb-2"
              htmlFor="grid-first-email"
            >
              Email
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-black border rounded py-3 px-4 mb-8 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-email"
              type="email"
              placeholder="janedoe@email.com"
            />
          </div>
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 dark:text-white text-xs font-bold mb-2"
              htmlFor="grid-comments"
            >
              Comments
            </label>
            <textarea
              className="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-comments"
              placeholder="Whats on your mind?"
              rows={7}
            />
          </div>
        </div>
        <div className="w-full">
          <SubmitButton fullWidth>Submit</SubmitButton>
        </div>
      </Form>
    </div>
  );
};
