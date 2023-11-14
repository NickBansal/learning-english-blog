import { Disclosure } from '@headlessui/react';
import { Link, NavLink } from '@remix-run/react';
import { Theme, useTheme } from 'remix-themes';

const headerLinksDesktop = ({ isActive }: { isActive: boolean }) =>
  isActive
    ? 'border-teal-500 dark:bg-gray-900 dark:text-white h-full inline-flex items-center px-1 pt-1 border-b-2 text-md font-medium transition-colors'
    : 'border-transparent text-gray-500 dark:text-white inline-flex items-center px-1 pt-1 border-b-2 text-md font-medium transition-colors';

export const Navbar = () => {
  const [theme, setTheme] = useTheme();

  return (
    <Disclosure as="nav">
      {({ open }) => {
        return (
          <>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex justify-between w-full">
                  <div className="flex items-center">
                    <Link to="/">
                      <h1 className="text-2xl font-medium">
                        Learning
                        <span className="text-teal-500">English</span>
                      </h1>
                    </Link>
                  </div>
                  <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                    <NavLink to="/" className={headerLinksDesktop}>
                      Home
                    </NavLink>
                    <NavLink to="/blogs" className={headerLinksDesktop}>
                      Blog
                    </NavLink>
                    <NavLink to="/about" className={headerLinksDesktop}>
                      About
                    </NavLink>
                    <button
                      onClick={() => {
                        setTheme((prevState) => {
                          return prevState === Theme.DARK ? Theme.LIGHT : Theme.DARK;
                        });
                      }}
                    >
                      {theme === Theme.LIGHT ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6 text-gray-500"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                          />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>

                <div className="-mr-2 flex items-center sm:hidden">
                  <Disclosure.Button
                    className={
                      'inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500 dark:hover:bg-gray-800'
                    }
                  >
                    {open ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        />
                      </svg>
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>
            <Disclosure.Panel className={'sm:hidden'}>
              <div className="p-2 pb-3 space-y-1">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? 'bg-teal-50 border-teal-500 block pl-3 pr-4 py-2 border-l-4 text-base font-medium dark:bg-gray-800'
                      : 'border-transparent text-gray-500 hover:Lbg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 bl-4 text-base font-medium dark:text-white" dark:hover:bg-gray-700'
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/blogs"
                  className={({ isActive }) =>
                    isActive
                      ? 'bg-teal-50 border-teal-500 block pl-3 pr-4 py-2 border-l-4 text-base font-medium dark:bg-gray-800'
                      : 'border-transparent text-gray-500 hover:Lbg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 bl-4 text-base font-medium dark:text-white" dark:hover:bg-gray-700'
                  }
                >
                  Blogs
                </NavLink>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive
                      ? 'bg-teal-50 border-teal-500 block pl-3 pr-4 py-2 border-l-4 text-base font-medium dark:bg-gray-800'
                      : 'border-transparent text-gray-500 hover:Lbg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 bl-4 text-base font-medium dark:text-white" dark:hover:bg-gray-700'
                  }
                >
                  About
                </NavLink>
                <button
                  onClick={() => {
                    setTheme((prevState) => {
                      return prevState === Theme.DARK ? Theme.LIGHT : Theme.DARK;
                    });
                  }}
                >
                  {theme === Theme.LIGHT ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-gray-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </Disclosure.Panel>
          </>
        );
      }}
    </Disclosure>
  );
};
