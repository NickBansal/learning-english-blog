import { Link, useLocation } from '@remix-run/react';

import { type ObjectOfStrings } from '../../types/mdx-interface';

export const SiteMap = () => {
  const { pathname } = useLocation();

  const websiteLinks: ObjectOfStrings[] = [
    { link: '/', name: 'Home' },
    { link: '/about', name: 'About' },
    { link: '/blogs', name: 'Blogs' },
    { link: '/courses', name: 'Courses' },
    { link: '/contact', name: 'Contact' }
  ];

  return (
    <div className="pt-4">
      <ul>
        {websiteLinks
          .filter(({ link }) => link !== pathname)
          .map(({ link, name }) => {
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
