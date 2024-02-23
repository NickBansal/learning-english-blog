import { type HeaderTypes } from '~/types/mdx-interface';

export const Header = ({ children, className = '' }: HeaderTypes) => (
  <h1 className={`text-xl md:text-2xl w-full border-b-2 border-gray-400 pb-4 mb-8 font-semibold ${className}`}>
    {children}
  </h1>
);
