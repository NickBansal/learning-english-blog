import React from 'react';

function Text({ children }: { children: React.ReactNode }) {
  return <p className="mb-4 text-lg md:text-xl last:mb-0">{children}</p>;
}

export default Text;
