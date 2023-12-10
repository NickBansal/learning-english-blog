import { twitterCard } from './twitter-card';

import { type seoTypes } from '~/types/seo-interface';

export const openGraph = ({
  content = 'website',
  description,
  title,
  image = 'https://everyday-english-sukhi.vercel.app/about.jpg'
}: seoTypes) => {
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
      content: `English Everyday: ${title}`
    },
    {
      property: 'og:description',
      content: description
    },
    {
      property: 'og:image',
      content: image
    },
    {
      property: 'og:site_name',
      content: 'English Everyday'
    },
    {
      property: 'og:image:height',
      content: '300'
    },
    {
      property: 'og:image:width',
      content: '300'
    },
    {
      property: 'og:image:type',
      content: 'image/jpeg'
    },
    ...twitterCard(),
    {
      keywords: 'English, Coaching, Learning, Teaching, Confidence, Confident'
    }
  ];
};
