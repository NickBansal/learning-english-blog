import classNames from 'classnames';

import { type ButtonGroupsTypes } from '~/types/buttons-interface';

export const PaddedSection = ({ children, className = '', reducedTopPadding = false }: ButtonGroupsTypes) => (
  <section
    className={classNames(` max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`, {
      'pt-10 sm:pt-20': reducedTopPadding,
      'pt-24': !reducedTopPadding
    })}
  >
    {children}
  </section>
);
