import { type seoTypes } from "~/types/seo-interface";

export const openGraph = ({ content = 'website', description, title }: seoTypes) => {
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
