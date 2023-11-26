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
    ? 'before:ease relative h-8 w-28 sm:h-12 sm:w-32 overflow-hidden border-2 font-semibold border-teal-500 bg-transparent text-teal-300 hover:text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:before:-translate-x-40 rounded-md hover:bg-teal-500'
    : 'before:ease relative h-8 w-28 sm:h-12 sm:w-32 overflow-hidden border border-teal-500 bg-teal-500 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:before:-translate-x-40 rounded-md hover:bg-teal-600';
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
