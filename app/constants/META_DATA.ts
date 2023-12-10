interface openGraphTypes {
  content?: string;
  description: string;
  title?: string;
}

const openGraph = ({ content = 'website', description, title = 'English Everyday' }: openGraphTypes) => {
  return [
    {
      property: 'og:type',
      content
    },
    {
      property: 'og:url',
      content: 'https://everyday-english-sukhi.vercel.app/'
    },
    {
      property: 'og:title',
      content: title
    },
    {
      property: 'og:description',
      content: description
    },
    {
      property: 'og:image',
      content: '/about.jpg'
    },
    {
      property: 'og:site_name',
      content: 'English Everyday'
    },
    {
      keywords: 'English, Coaching, Learning, Teaching, Confidence, Confident'
    }
  ];
};

export const homePage = [
  { title: 'English Everyday | Home Page' },
  {
    name: 'description',
    content:
      'Explore insightful articles on English Everyday in our blog. Get expert tips, guides, and resources to help with mastering the English language. Stay updated with the latest trends and valuable insights from our skilled Language coach. Dive into a wealth of information to be confident with speaking English today!'
  },
  ...openGraph({
    description:
      'Explore insightful articles on English Everyday in our blog. Get expert tips, guides, and resources to help with mastering the English language. Stay updated with the latest trends and valuable insights from our skilled Language coach. Dive into a wealth of information to be confident with speaking English today!'
  })
];

export const allBlogs = [
  { title: 'English Everyday | content' },
  {
    name: 'description',
    content:
      'Explore insightful articles on English Everyday in our blog. Get expert tips, guides, and resources to help with mastering the English language. Stay updated with the latest trends and valuable insights from our skilled Language coach. Dive into a wealth of information to be confident with speaking English today!'
  },
  ...openGraph({
    description:
      'Explore insightful articles on English Everyday in our blog. Get expert tips, guides, and resources to help with mastering the English language. Stay updated with the latest trends and valuable insights from our skilled Language coach. Dive into a wealth of information to be confident with speaking English today!'
  })
];

export const singleBlog = (title: string, content: string) => [
  { title: `English Everyday | ${title}` },
  {
    name: 'description',
    content
  },
  ...openGraph({ content: 'article', description: content, title: `English Everyday: ${title}` })
];

export const aboutPage = [
  { title: 'English Everyday | About Us' },
  {
    name: 'description',
    content:
      'Discover the story behind English Everyday. Learn about our mission, values, and commitment to educating English language. Explore how our dedicated team brings English coaching to all foreign students. Get to know us and our passion for Language coaching!'
  },
  ...openGraph({
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
    description:
      'Discover the story behind English Everyday. Learn about our mission, values, and commitment to educating English language. Explore how our dedicated team brings English coaching to all foreign students. Get to know us and our passion for Language coaching!'
  })
];

export const coursesPage = [
  { title: 'English Everyday | All Our Courses' },
  {
    name: 'description',
    content:
      'Discover the story behind English Everyday. Learn about our mission, values, and commitment to educating English language. Explore how our dedicated team brings English coaching to all foreign students. Get to know us and our passion for Language coaching!'
  },
  ...openGraph({
    description:
      'Discover the story behind English Everyday. Learn about our mission, values, and commitment to educating English language. Explore how our dedicated team brings English coaching to all foreign students. Get to know us and our passion for Language coaching!'
  })
];
