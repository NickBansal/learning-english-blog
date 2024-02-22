import { NavLink } from '@remix-run/react';
import classNames from 'classnames';

import type { ButtonTypes, InternalLinkTypes, LinkButtonTypes, SubmitButtonTypes } from '~/types/buttons-interface';

export const ActionButtons = ({
  outline = false,
  children,
  className = '',
  onClick = () => null,
  fullWidth = false
}: ButtonTypes) => {
  const classNames = outline
    ? 'before:ease relative h-10 w-full sm:h-12 md:w-32 overflow-hidden border-2 font-semibold border-teal-500 bg-transparent text-teal-300 hover:text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:before:-translate-x-40 rounded-md hover:bg-teal-500'
    : 'before:ease relative h-10 w-full sm:h-12 md:w-32 overflow-hidden border border-teal-500 bg-teal-500 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:before:-translate-x-40 rounded-md hover:bg-teal-600';
  return (
    <button onClick={onClick} className={`${classNames} ${className}`}>
      {children}
    </button>
  );
};

export const SubmitButton = ({ children, fullWidth = false, value = '' }: SubmitButtonTypes) => {
  return (
    <button
      type="submit"
      name="_action"
      className={classNames(`bg-red-400  text-white rounded-md hover:bg-red-500 font-semibold px-4 py-3`, {
        'w-full': fullWidth
      })}
      value={value}
    >
      {children}
    </button>
  );
};

export const InternalLink = ({ to, children, outline = false }: InternalLinkTypes) => {
  return (
    <NavLink to={to}>
      <ActionButtons outline={outline}>{children}</ActionButtons>
    </NavLink>
  );
};

export const ExternalLink = ({ children, href }: LinkButtonTypes) => {
  return (
    <button className="font-medium text-teal-300 hover:underline min-w-[110px]">
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    </button>
  );
};
