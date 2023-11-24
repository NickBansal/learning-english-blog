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
        body: any
    }>
}

export type { BlogItem, Blogs }
