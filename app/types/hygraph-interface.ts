import { type ObjectOfStrings } from '~/types/mdx-interface';

interface ContentArray {
  createdAt: string;
  id: string;
  overview: string;
  publishedAt: string;
  slug: string;
  title: string;
  updatedAt: string;
  videoContent: boolean;
}
interface ContentArrayItem {
  contents: ContentArray[];
}
interface Blogs {
  data: ContentArray[];
  total: number;
  videoContent: boolean;
  error: { response: Response } | null;
}

interface ContentItem {
  content: {
    createdAt: string;
    id: string;
    overview: string;
    publishedAt: string;
    slug: string;
    title: string;
    updatedAt: string;
    body: string;
    videoContent: boolean;
    embeddedVideos?: {
      html: string;
    };
  };
}

interface TestimonialTypes {
  testimonials: Array<{
    id: string;
    name: string;
    content: string;
  }>;
}

interface HomeContent {
  homeContents: Array<{
    id: string;
    title: string;
    description: string;
    leftPosition: boolean;
  }>;
}
interface HomePageData {
  data: {
    homeContents: HomeContent['homeContents'];
    testimonials: TestimonialTypes['testimonials'];
  };
  error: { response: Response } | null;
}

interface AboutContent {
  aboutPage: ObjectOfStrings;
  error: { response: Response } | null;
}

interface CoursesArray {
  courses?: Array<{
    image: {
      url: string;
    };
    overview: string;
    price: number;
    title: string;
    date: string;
    id: string;
  }>;
  error: { response: Response } | null;
}

export type {
  ContentItem,
  Blogs,
  HomePageData,
  HomeContent,
  TestimonialTypes,
  AboutContent,
  ContentArrayItem,
  CoursesArray
};
