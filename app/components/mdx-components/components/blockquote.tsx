import React from 'react';

function BlockQuote({ children }: { children: React.ReactNode }) {
  return <p className="mb-4 text-lg md:text-xl last:mb-0 p-4 border-l-4 border-teal-500 bg-gray-100">{children}</p>;
}

export default BlockQuote;
