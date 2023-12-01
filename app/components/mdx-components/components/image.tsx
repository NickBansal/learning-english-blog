import React from 'react';

import { type ObjectOfStrings } from '../../../types/mdx-interface';

function Image({ src, alt }: ObjectOfStrings) {
  return <img className="my-12" src={src} alt={alt} />;
}

export default Image;
