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
      content: 'https://thepracticaldev.s3.amazonaws.com/i/6hqmcjaxbgbon8ydw93z.png'
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    }
  ];
};
