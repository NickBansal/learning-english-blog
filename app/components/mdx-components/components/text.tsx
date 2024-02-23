import React from 'react';

function Text({ children }: { children: React.ReactNode }) {
  return <div className="mb-4 text-base sm:text-lg md:text-xl last:mb-0">{children}</div>;
}

export default Text;
