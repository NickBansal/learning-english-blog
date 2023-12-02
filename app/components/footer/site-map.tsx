import { Link, useLocation } from '@remix-run/react';

import { WEBSITE_LINKS } from '~/constants/FOOTER_DATA';

export const SiteMap = () => {
  const { pathname } = useLocation();

  return (
    <div className="pt-4">
      <ul>
        {WEBSITE_LINKS.filter(({ link }) => link !== pathname).map(({ link, name }) => {
          return (
            <li key={name} className="mb-2 md:mb-4">
              <Link to={link}>{name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
