import { type ObjectOfStrings } from '~/types/mdx-interface';

interface BlogArray {
  createdAt: string;
  id: string;
  overview: string;
  publishedAt: string;
  slug: string;
  title: string;
  updatedAt: string;
  videoCourse: boolean;
}
interface BlogArrayItem {
  blogs: BlogArray[];
}
interface Blogs {
  data: BlogArray[];
  total: number;
  videoCourse: boolean;
}

interface BlogItem {
  blogs: Array<{
    createdAt: string;
    id: string;
    overview: string;
    publishedAt: string;
    slug: string;
    title: string;
    updatedAt: string;
    body: string;
    videoCourse: boolean;
    embeddedVideos?: {
      html: string;
    };
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

interface AboutContent {
  aboutPage: ObjectOfStrings;
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

export type { BlogItem, Blogs, HomeContent, AboutContent, BlogArrayItem, CoursesArray };
