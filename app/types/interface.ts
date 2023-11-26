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
    }>
}

interface HomeContent {
    homeContents: Array<{
        id: string;
        image?: {
            url: string
        }
        description: string
        leftPosition: boolean
    }>
}

export type { BlogItem, Blogs, HomeContent }
