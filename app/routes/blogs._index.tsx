import type { V2_MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { Link, useLoaderData } from '@remix-run/react';
import format from 'date-fns/format';
import { gql } from 'graphql-request';

import { PaddedSection } from '~/components/padded-section/padded-section';
import { blogsPage } from '~/constants/META-DATA';
import { type Blogs } from '~/types/hygraph-interface';
import { hygraph } from '~/utils/hygraph.server';

export const meta: V2_MetaFunction = () => blogsPage;

export async function loader() {
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

  const blogs = await hygraph.request(query);

  return json(blogs);
}

export default function BlogPage(): JSX.Element {
  const { blogs } = useLoaderData() as Blogs;

  return (
    <PaddedSection className="h-[60rem] overflow-scroll">
      <h1 className="text-lg md:text-2xl w-full border-b-2 pb-4 ">All content ({blogs.length})</h1>

      <div className="py-8">
        {blogs.map((blog) => {
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
    </PaddedSection>
  );
}
