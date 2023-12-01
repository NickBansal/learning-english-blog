import React from 'react';

import { type HeadingTypes } from '../../../types/mdx-interface';

function Heading({ id, children, level = 'h2' }: HeadingTypes) {
  const textSize: Record<string, string> = {
    h1: 'text-2xl md:text-3xl',
    h2: 'text-xl md:text-2xl',
    h3: 'text-lg md:text-xl',
    h4: 'text-base md:text-lg',
    h5: 'text-sm md:text-base'
  };

  return (
    <div id={id} className={`mb-4 font-bold leading-none last:mb-0' ${textSize[level]})`}>
      {children}
    </div>
  );
}

export default Heading;
