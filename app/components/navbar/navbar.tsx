import { Disclosure } from '@headlessui/react';
import { Link, NavLink } from '@remix-run/react';
import { useTheme } from 'remix-themes';

import { DarknessModeButton } from '../darkness-mode-button/darkness-mode-button';

import { headerLinksDesktop, headerLinksMobile } from './navbar-styles';

export const Navbar = () => {
  const [theme, setTheme] = useTheme();

  return (
    <Disclosure as="nav">
      {({ open, close }) => {
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
                  <div className="hidden sm:ml-6 sm:flex sm:space-x-6">
                    <NavLink to="/" className={headerLinksDesktop}>
                      Home
                    </NavLink>
                    <NavLink to="/blogs" className={headerLinksDesktop}>
                      Blog
                    </NavLink>
                    <NavLink to="/about" className={headerLinksDesktop}>
                      About
                    </NavLink>
                    <DarknessModeButton theme={theme} setTheme={setTheme} />
                  </div>
                </div>

                <div className="-mr-2 flex items-center sm:hidden">
                  <DarknessModeButton theme={theme} setTheme={setTheme} className="mr-4" />
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
                        className="w-6 h-6 text-gray-500"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    ) : (
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
                          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        />
                      </svg>
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>
            <Disclosure.Panel className="sm:hidden absolute z-100 w-full h-screen bg-slate-50">
              <div className="p-2 pb-3 space-y-1">
                <NavLink
                  to="/"
                  className={headerLinksMobile}
                  onClick={() => {
                    close();
                  }}
                >
                  Home
                </NavLink>
                <NavLink
                  to="/blogs"
                  className={headerLinksMobile}
                  onClick={() => {
                    close();
                  }}
                >
                  Blogs
                </NavLink>
                <NavLink
                  to="/about"
                  className={headerLinksMobile}
                  onClick={() => {
                    close();
                  }}
                >
                  About
                </NavLink>
              </div>
            </Disclosure.Panel>
          </>
        );
      }}
    </Disclosure>
  );
};
