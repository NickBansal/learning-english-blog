import type { LoaderArgs, V2_MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { Link, useLoaderData } from '@remix-run/react';
import format from 'date-fns/format';
import { gql, GraphQLClient } from 'graphql-request';

import JSMarkdown from '~/components/mdx-components/mdx-component';
import { PaddedSection } from '~/components/padded-section/padded-section';
import { blogsPage } from '~/constants/META_DATA';
import { type BlogItem } from '~/types/hygraph-interface';

export const meta: V2_MetaFunction = () => blogsPage;

export async function loader({ params }: LoaderArgs) {
  const query = gql`
    query Blogs {
      blogs(where: { slug: "${params.slug}" }) {
        createdAt
        id
        overview
        publishedAt
        slug
        title
        updatedAt
        body
      }
    }
  `;
  const hygraph = new GraphQLClient(process.env.HYGRAPH_API_KEY as string);
  const blogs = await hygraph.request(query);
  return json(blogs);
}

export default function BlogPost(): JSX.Element {
  const { blogs } = useLoaderData() as BlogItem;
  const blogData = blogs[0];

  return (
    <PaddedSection className="mb-20">
      <div className="mb-8">
        <Link
          to="/blogs?$top=5"
          className="text-teal-700 border-b-2 border-teal-700 hover:text-teal-800 hover:border-teal-800 dark:text-teal-500 dark:border-teal-500 dark:hover:text-teal-600 dark:hover:border-teal-600 mr-2"
        >
          Blogs page
        </Link>
        {' > '}
        <span className="ml-2">{blogData.title}</span>
      </div>
      <div className="lg:px-20">
        <h1 className="text-center text-2xl md:text-3xl pb-2 font-semibold">{blogData.title}</h1>
        <p className="text-sm font-light border-b-2 border-black dark:border-white text-center pb-4">
          Created: {format(new Date(blogData.createdAt), 'dd/MM/yyyy')}
        </p>
        <p className="text-center font-thin mt-2 text-base md:text-lg">{blogData.overview}</p>
        <div className="mt-8">{<JSMarkdown>{blogData.body}</JSMarkdown>}</div>
      </div>
    </PaddedSection>
  );
}
