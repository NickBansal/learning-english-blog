import { type ObjectOfStrings } from '~/types/mdx-interface';

export const SOCIAL_MEDIA_LINKS: ObjectOfStrings[] = [
  {
    src: '/icons8-facebook-48.png',
    name: 'Facebook',
    alt: 'Facebook icon link',
    href: 'https://en-gb.facebook.com/'
  },
  {
    src: '/icons8-instagram-48.png',
    name: 'Instagram',
    alt: 'Instagram icon link',
    href: 'https://www.instagram.com/'
  },
  {
    src: '/icons8-linkedin-48.png',
    name: 'Linkedin',
    alt: 'Linkedin icon link',
    href: 'https://uk.linkedin.com/'
  },
  {
    src: '/icons8-twitterx-64.png',
    name: 'Twitter',
    alt: 'Twitter icon link',
    href: 'https://twitter.com/'
  }
];

export const WEBSITE_LINKS: ObjectOfStrings[] = [
  { link: '/', name: 'Home' },
  { link: '/about', name: 'About' },
  { link: '/blogs?$top=5', name: 'Blogs' },
  { link: '/courses', name: 'Courses' },
  { link: '/contact', name: 'Contact' }
];
