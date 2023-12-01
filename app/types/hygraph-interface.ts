import { type ObjectOfStrings } from "~/types/mdx-interface";

interface Blogs {
     blogs: Array<{
        createdAt: string;
        id: string
        overview: string
        publishedAt: string
        slug: string
        title: string
        updatedAt: string
    }>
}

interface BlogItem {
    blogs: Array<{
        createdAt: string;
        id: string
        overview: string
        publishedAt: string
        slug: string
        title: string
        updatedAt: string
        body: string
        embeddedVideos?: {
            html: string
        }
    }>
}

interface HomeContent {
    homeContents: Array<{
        id: string;
        title: string;
        description: string
        leftPosition: boolean
    }>
}

interface AboutContent {
    aboutPage: ObjectOfStrings
}

export type { BlogItem, Blogs, HomeContent, AboutContent }
