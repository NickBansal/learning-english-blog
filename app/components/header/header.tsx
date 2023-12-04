import { type ChildrenNodes } from '~/types/mdx-interface';

export const Header = ({ children }: ChildrenNodes) => (
  <h1 className="text-lg md:text-2xl w-full border-b-2 border-gray-400 pb-4 mb-8">{children}</h1>
);
