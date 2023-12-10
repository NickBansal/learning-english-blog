import { type seoTypes } from '~/types/seo-interface';

export const twitterCard = ({ description, title }: seoTypes) => {
  return [
    {
      name: 'twitter:creator',
      content: 'Sukhi Bansal'
    },
    {
      name: 'twitter:site',
      content: '@thepracticaldev'
    },
    {
      name: 'twitter:title',
      content: `English Everyday: ${title}`
    },
    {
      name: 'twitter:description',
      content: description
    },
    {
      name: 'twitter:image:src',
      content: '/about.jpg'
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    }
  ];
};
