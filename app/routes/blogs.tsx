import type { V2_MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { Link, useLoaderData } from '@remix-run/react';
import format from 'date-fns/format';
import { gql } from 'graphql-request';

import { PaddedMain } from '~/components/padded-main/padded-main';
import { hygraph } from '~/utils/hygraph.server';
import { type Blog } from '~/utils/interface';

export const meta: V2_MetaFunction = () => {
  return [{ title: 'Learning English | Blogs Page' }, { name: 'description', content: 'Welcome to Remix!' }];
};

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
  const { blogs } = useLoaderData() as Blog;

  return (
    <PaddedMain>
      <h1 className="text-lg md:text-2xl w-full border-b-2 pb-4">All content</h1>

      <div className="py-8">
        {blogs.map((blog) => {
          return (
            <Link to={`blogs/${blog.slug}`} prefetch="intent" key={blog.id}>
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
                <p className="mb-2">{blog.overview}</p>
                <p className="text-sm font-light">Created: {format(new Date(blog.createdAt), 'dd/MM/yyyy')}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </PaddedMain>
  );
}
