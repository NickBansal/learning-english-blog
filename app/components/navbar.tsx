import { Disclosure } from '@headlessui/react';
import { Link, NavLink } from '@remix-run/react';

import React from 'react';

export const Navbar = () => {
  return (
    <Disclosure as="nav">
      {({ open }) => {
        return (
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
                  <NavLink to="/">Home</NavLink>
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </Disclosure>
  );
};
