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
    <div>
      <h2 className="text-xl md:text-2xl mb-4 md:border-b-2 border-red-400">Find your way around: </h2>
      <ul>
        {websiteLinks
          .filter(({ link }) => link !== pathname)
          .map(({ link, name }) => {
            return (
              <li key={name} className="md:mb-4">
                <Link to={link}>{name}</Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};
