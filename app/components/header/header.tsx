import { type HeaderTypes } from '~/types/mdx-interface';

export const Header = ({ children, noBottomMargin = false }: HeaderTypes) => (
  <h1
    className={`text-xl md:text-2xl w-full border-b-2 border-gray-400 pb-4 ${
      noBottomMargin ? 'mb-2' : 'mb-8'
    } font-semibold`}
  >
    {children}
  </h1>
);
