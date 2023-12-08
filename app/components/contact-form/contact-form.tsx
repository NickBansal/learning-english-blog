/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Form, useActionData } from '@remix-run/react';

import { SubmitButton } from '../buttons/buttons';

import { type action } from '~/routes/contact';
import { FormActions } from '~/types/form-enum';

export const FieldError = ({ data }: { data?: string | null }) => {
  return data ? <p className="w-full text-center text-sm text-red-500 dark:text-red-300 mb-4">{data}</p> : null;
};

export const ContactForm = () => {
  const actionData = useActionData<typeof action>();

  return (
    <div className="w-full max-w-lg mx-auto mb-28 mt-2 md:mt-16">
      <Form method="post">
        <div className="flex flex-wrap -mx-3">
          <div className="w-full md:w-1/2 px-3 mb-3 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 dark:text-white text-xs font-bold mb-2"
              htmlFor="first-name"
            >
              First Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-black border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="first-name"
              name="first-name"
              type="text"
              placeholder="Jane"
            />
            <FieldError data={actionData?.formErrors?.firstName} />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-3">
            <label
              className="block uppercase tracking-wide text-gray-700 dark:text-white text-xs font-bold mb-2"
              htmlFor="last-name"
            >
              Last Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="last-name"
              name="last-name"
              type="text"
              placeholder="Doe"
            />
            <FieldError data={actionData?.formErrors?.lastName} />
          </div>
        </div>
        <div className="flex flex-col -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 dark:text-white text-xs font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-black border rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white"
              id="email"
              name="email"
              type="email"
              placeholder="janedoe@email.com"
            />
            <FieldError data={actionData?.formErrors?.email} />
          </div>
          <div className="w-full px-3  mt-4">
            <label
              className="block uppercase tracking-wide text-gray-700 dark:text-white text-xs font-bold mb-2"
              htmlFor="subject"
            >
              Subject
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-black border rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white"
              id="subject"
              name="subject"
              type="subject"
              placeholder="Subject"
            />
            <FieldError data={actionData?.formErrors?.subject} />
          </div>
          <div className="w-full px-3 mt-4">
            <label
              className="block uppercase tracking-wide text-gray-700 dark:text-white text-xs font-bold mb-2"
              htmlFor="comments"
            >
              Comments
            </label>
            <textarea
              className="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-2  leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="comments"
              name="comments"
              placeholder="Whats on your mind?"
              rows={7}
            />
            <FieldError data={actionData?.formErrors?.comments} />
          </div>
        </div>
        <div className="w-full">
          <SubmitButton fullWidth value={FormActions.CONTACT_FORM}>
            Submit
          </SubmitButton>
        </div>
      </Form>
    </div>
  );
};
