/* eslint-disable @typescript-eslint/no-unsafe-return */
const validateName = (name?: FormDataEntryValue | null) => {
  if (!name) {
    return 'Please enter your name';
  } else if (typeof name !== 'string' || name.length < 3) {
    return `Name must be at least 3 characters long`;
  }
};

const validateEmail = (email?: FormDataEntryValue | null) => {
  if (!email) {
    return 'Email address is Required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email as string)) {
    return 'Invalid emaill address';
  }
};

const validateContactFields = (title: string, name?: FormDataEntryValue | null) => {
  if (!name) {
    return `${title} is required`;
  }
};

export const submitNewsletterForm = async ({ formData }: { formData: FormData }) => {
  const API_URL = process.env.CONVERTKIT_API;
  const API_KEY = process.env.CONVERTKIT_API_KEY;
  const FORM_ID = process.env.CONVERTKIT_FORM_ID;

  const email = formData.get('email');
  const name = formData.get('name');

  const formErrors = {
    name: validateName(name),
    email: validateEmail(email)
  };

  if (Object.values(formErrors).some(Boolean)) {
    return { formErrors };
  }

  const res = await fetch(`${API_URL as string}/forms/${FORM_ID as string}/subscribe`, {
    method: 'post',
    body: JSON.stringify({ email, name, api_key: API_KEY }),
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    }
  });

  return await res.json();
};

export const submitContactForm = ({ formData }: { formData: FormData }) => {
  const firstName = formData.get('first-name');
  const lastName = formData.get('last-name');
  const email = formData.get('email');
  const subject = formData.get('subject');
  const comments = formData.get('comments');

  const formErrors = {
    firstName: validateContactFields('First name', firstName),
    lastName: validateContactFields('Last name', lastName),
    email: validateEmail(email),
    subject: validateContactFields('Subject', subject),
    comments: validateContactFields('Comments', comments)
  };

  if (Object.values(formErrors).some(Boolean)) {
    return { formErrors };
  }

  return null;
};
