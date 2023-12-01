import { type ButtonGroupsTypes } from '~/types/buttons-interface';

export const PaddedSection = ({ children, className = '' }: ButtonGroupsTypes) => (
  <section className={`pt-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>{children}</section>
);
