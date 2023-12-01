import React from 'react';
import { Link } from '@remix-run/react';

import { type AnchorTypes } from '~/types/mdx-interface';

export default function Anchor({ children, href }: AnchorTypes) {
  return (
    <Link
      to={href}
      className="text-teal-700 border-b-2 border-teal-700 hover:text-teal-800 hover:border-teal-800 dark:text-teal-500 dark:border-teal-500 dark:hover:text-teal-600 dark:hover:border-teal-600 mr-2"
    >
      {children}
    </Link>
  );
}
