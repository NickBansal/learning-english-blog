import { type ReactNode } from 'react';
import { NavLink } from '@remix-run/react';

interface ButtonTypes {
  outline?: boolean;
  children: ReactNode;
}

interface InternalLinkTypes extends ButtonTypes {
  to: string;
}

interface LinkButtonTypes extends ButtonTypes {
  href: string;
}

export function Buttons({ outline = false, children }: ButtonTypes) {
  const className = outline
    ? 'bg-transparent hover:bg-teal-500 text-teal-300 font-semibold hover:text-white py-2 px-4 border-2 border-teal-500 hover:border-transparent rounded min-w-[110px] transition-colors duration-200'
    : 'bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded min-w-[110px] transition-colors duration-200';
  return <button className={className}>{children}</button>;
}

export function LinkButton({ children }: ButtonTypes) {
  <button className="font-medium text-teal-600 dark:text-teal-500 hover:underline transition-colors duration-200">
    {children}
  </button>;
}

export function InternalLink({ to, children, outline = false }: InternalLinkTypes) {
  return (
    <Buttons outline={outline}>
      <NavLink to={to}>{children}</NavLink>
    </Buttons>
  );
}

export function ExternalLink({ children, href }: LinkButtonTypes) {
  return (
    <button className="font-medium text-teal-300 hover:underline min-w-[110px]">
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    </button>
  );
}
