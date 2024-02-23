import { openGraph } from '~/utils/seo/open-graph';

export const TOP_VALUE = 5;

export const homePage = [
  { title: 'English Everyday | Home Page' },
  {
    name: 'description',
    content:
      'Explore insightful articles on English Everyday in our blog. Get expert tips, guides, and resources to help with mastering the English language. Stay updated with the latest trends and valuable insights from our skilled Language coach. Dive into a wealth of information to be confident with speaking English today!'
  },
  ...openGraph({
    title: 'Home Page',
    description:
      'Explore insightful articles on English Everyday in our blog. Get expert tips, guides, and resources to help with mastering the English language. Stay updated with the latest trends and valuable insights from our skilled Language coach. Dive into a wealth of information to be confident with speaking English today!'
  })
];

export const allContent = [
  { title: 'English Everyday | Content' },
  {
    name: 'description',
    content:
      'Explore insightful articles on English Everyday in our blog. Get expert tips, guides, and resources to help with mastering the English language. Stay updated with the latest trends and valuable insights from our skilled Language coach. Dive into a wealth of information to be confident with speaking English today!'
  },
  ...openGraph({
    title: 'All content',
    description:
      'Explore insightful articles on English Everyday in our blog. Get expert tips, guides, and resources to help with mastering the English language. Stay updated with the latest trends and valuable insights from our skilled Language coach. Dive into a wealth of information to be confident with speaking English today!'
  })
];

export const content = (title: string, content: string, image: string, url: string) => [
  { title: `English Everyday | ${title}` },
  {
    name: 'description',
    content
  },
  ...openGraph({ title, description: content, image, url })
];

export const aboutPage = [
  { title: 'English Everyday | About Us' },
  {
    name: 'description',
    content:
      'Discover the story behind English Everyday. Learn about our mission, values, and commitment to educating English language. Explore how our dedicated team brings English coaching to all foreign students. Get to know us and our passion for Language coaching!'
  },
  ...openGraph({
    title: 'About Us',
    description:
      'Discover the story behind English Everyday. Learn about our mission, values, and commitment to educating English language. Explore how our dedicated team brings English coaching to all foreign students. Get to know us and our passion for Language coaching!'
  })
];

export const contactPage = [
  { title: 'English Everyday | Contact Us' },
  {
    name: 'description',
    content:
      'Discover the story behind English Everyday. Learn about our mission, values, and commitment to educating English language. Explore how our dedicated team brings English coaching to all foreign students. Get to know us and our passion for Language coaching!'
  },
  ...openGraph({
    title: 'Contact Us',
    description:
      'Discover the story behind English Everyday. Learn about our mission, values, and commitment to educating English language. Explore how our dedicated team brings English coaching to all foreign students. Get to know us and our passion for Language coaching!'
  })
];

export const coursesPage = [
  { title: 'English Everyday | Courses' },
  {
    name: 'description',
    content:
      'Discover the story behind English Everyday. Learn about our mission, values, and commitment to educating English language. Explore how our dedicated team brings English coaching to all foreign students. Get to know us and our passion for Language coaching!'
  },
  ...openGraph({
    title: 'Courses',
    description:
      'Discover the story behind English Everyday. Learn about our mission, values, and commitment to educating English language. Explore how our dedicated team brings English coaching to all foreign students. Get to know us and our passion for Language coaching!'
  })
];
