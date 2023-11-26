import React from 'react';

import { type ChildrenString } from '../interface';

function Image({ src, alt }: ChildrenString) {
  return <img className="my-4" src={src} alt={alt} />;
}

export default Image;
