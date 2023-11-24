import type { LoaderArgs, V2_MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { gql } from 'graphql-request';

import { PaddedMain } from '~/components/padded-main/padded-main';
import { blogsPage } from '~/constants/meta-data';
import { hygraph } from '~/utils/hygraph.server';
import { type BlogItem } from '~/utils/interface';

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
        body {
          raw
        }
      }
    }
  `;

  const blogs = await hygraph.request(query);

  return json(blogs);
}

export default function BlogPost(): JSX.Element {
  const { blogs } = useLoaderData() as BlogItem;
  const blogData = blogs[0];

  return (
    <PaddedMain>
      <h1 className="text-center text-xl md:text-3xl border-b-2 border-black pb-4">{blogData.title}</h1>
      <p className="text-center font-thin mt-2">{blogData.overview}</p>
    </PaddedMain>
  );
}
