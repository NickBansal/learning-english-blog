import React from 'react';

import { type ChildrenNodes } from '../interface';

function BlockQuote({ children }: ChildrenNodes) {
  return (
    <div className="mb-4 text-lg md:text-xl last:mb-0 p-4 border-l-[6px] border-teal-500 dark:border-teal-600 bg-gray-100 dark:text-black dark:bg-gray-300">
      {children}
    </div>
  );
}

export default BlockQuote;
