import { NavLink } from '@remix-run/react';

export const Error500 = () => {
  return (
    <section className="flex items-center h-full sm:p-16 dark:bg-gray-900 dark:text-gray-100">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-40 h-40 dark:text-gray-600">
          <path
            fill="currentColor"
            d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z"
          ></path>
          <rect width="176" height="32" x="168" y="320" fill="currentColor"></rect>
          <polygon
            fill="currentColor"
            points="210.63 228.042 186.588 206.671 207.958 182.63 184.042 161.37 162.671 185.412 138.63 164.042 117.37 187.958 141.412 209.329 120.042 233.37 143.958 254.63 165.329 230.588 189.37 251.958 210.63 228.042"
          ></polygon>
          <polygon
            fill="currentColor"
            points="383.958 182.63 360.042 161.37 338.671 185.412 314.63 164.042 293.37 187.958 317.412 209.329 296.042 233.37 319.958 254.63 341.329 230.588 365.37 251.958 386.63 228.042 362.588 206.671 383.958 182.63"
          ></polygon>
        </svg>
        <p className="text-3xl">Looks like our services are currently offline</p>
        <NavLink to="/">
          {' '}
          <button className="w-max rounded-md px-4 py-2 bg-teal-500 text-white hover:bg-teal-700">
            Go back to Home Page
          </button>
        </NavLink>
      </div>
    </section>
  );
};

export const Error404 = () => {
  return (
    <section className="flex items-center h-full p-16">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn&apos;t find this page.</p>
          <p className="mt-4 mb-8">But dont worry, you can find plenty of other things on our homepage.</p>
          <NavLink to="/">
            {' '}
            <button className="w-max rounded-md px-4 py-2 bg-teal-500 text-white hover:bg-teal-700">
              Go back to Home Page
            </button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export const Error400 = () => {
  return (
    <section className="flex items-center h-[45vh] p-16">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <p className="text-2xl font-semibold md:text-3xl">Oops... something went wrong.</p>
          <p className="mt-4 mb-8">But dont worry, you can find plenty of other things on our homepage.</p>
          <NavLink to="/">
            {' '}
            <button className="w-max rounded-md px-4 py-2 bg-teal-500 text-white hover:bg-teal-700">
              Go back to Home Page
            </button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export const ErrorHomePage = () => {
  return (
    <section className="flex items-center h-full p-16">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <p className="text-2xl font-semibold md:text-3xl">Oops... something went wrong.</p>
          <p className="mt-4 mb-8">We could not load the information.</p>
        </div>
      </div>
    </section>
  );
};
