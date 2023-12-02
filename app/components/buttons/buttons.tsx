import { NavLink } from '@remix-run/react';

import { type ButtonTypes, type InternalLinkTypes, type LinkButtonTypes } from '~/types/buttons-interface';

export function Buttons({ outline = false, children, type = 'button', className = '' }: ButtonTypes) {
  const classNames = outline
    ? 'before:ease relative h-10 w-full sm:h-12 md:w-32 overflow-hidden border-2 font-semibold border-teal-500 bg-transparent text-teal-300 hover:text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:before:-translate-x-40 rounded-md hover:bg-teal-500'
    : 'before:ease relative h-10 w-full sm:h-12 md:w-32 overflow-hidden border border-teal-500 bg-teal-500 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:before:-translate-x-40 rounded-md hover:bg-teal-600';
  return (
    <button type={type} className={`${classNames} ${className}`}>
      {children}
    </button>
  );
}

export function LinkButton({ children }: ButtonTypes) {
  <button className="font-medium text-teal-600 dark:text-teal-500 hover:underline transition-colors duration-200">
    {children}
  </button>;
}

export function InternalLink({ to, children, outline = false }: InternalLinkTypes) {
  return (
    <NavLink to={to}>
      <Buttons outline={outline}>{children}</Buttons>
    </NavLink>
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
