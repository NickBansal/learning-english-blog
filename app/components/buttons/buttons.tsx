import { type ReactNode } from 'react';

interface ButtonTypes {
  outline?: boolean;
  children: ReactNode;
}

export function Buttons({ outline = false, children }: ButtonTypes) {
  const className = outline
    ? 'bg-transparent hover:bg-teal-500 text-teal-300 font-semibold hover:text-white py-2 px-4 border-2 border-teal-500 hover:border-transparent rounded min-w-[110px]'
    : 'bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded min-w-[110px]';
  return <button className={className}>{children}</button>;
}
