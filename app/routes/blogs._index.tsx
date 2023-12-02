/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type { LoaderArgs, V2_MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { Link, useLoaderData } from '@remix-run/react';
import format from 'date-fns/format';
import { gql, GraphQLClient } from 'graphql-request';

import { PaddedSection } from '~/components/padded-section/padded-section';
import { PaginationBar } from '~/components/pagination/pagination-bar';
import { blogsPage } from '~/constants/META_DATA';
import { type BlogArrayItem, type Blogs } from '~/types/hygraph-interface';

export const meta: V2_MetaFunction = () => blogsPage;

export async function loader({ request }: LoaderArgs) {
  const url = new URL(request.url);
  const $top = Number(url.searchParams.get('$top')) || 5;
  const $skip = Number(url.searchParams.get('$skip')) || 0;

  const query = gql`
    query Blogs {
      blogs {
        createdAt
        id
        overview
        publishedAt
        slug
        title
        updatedAt
      }
    }
  `;
  const hygraph = new GraphQLClient(process.env.HYGRAPH_API_KEY as string);
  const blogs: BlogArrayItem = await hygraph.request(query);

  const data = blogs.blogs.slice($skip, $skip + $top);

  return json({ data, total: blogs.blogs.length ?? 0 });
}

export default function BlogPage(): JSX.Element {
  const { data, total } = useLoaderData() as Blogs;

  return (
    <PaddedSection>
      <h1 className="text-lg md:text-2xl w-full border-b-2 pb-4">All content ({total})</h1>

      <div className="py-8">
        {data.map((blog) => {
          return (
            <Link to={blog.slug} prefetch="none" key={blog.id}>
              <div className="mb-8 group pb-8 border-b-[1px] border-b-gray-200 mx-8">
                <h2 className="text-xl font-semibold mb-2 relative w-fit">
                  {blog.title}
                  <span className="absolute -bottom-1 left-0 w-0 h-[0.15rem] bg-teal-500 transition-all duration-150 group-hover:w-full"></span>
                </h2>
                <p className="mb-2">{blog.overview}</p>
                <p className="text-sm font-light">Created: {format(new Date(blog.createdAt), 'dd/MM/yyyy')}</p>
              </div>
            </Link>
          );
        })}
      </div>
      <PaginationBar total={total} />
    </PaddedSection>
  );
}
