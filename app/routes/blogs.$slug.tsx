/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type { LoaderArgs, V2_MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { Link, useLoaderData } from '@remix-run/react';
import format from 'date-fns/format';
import { gql, GraphQLClient } from 'graphql-request';

import JSMarkdown from '~/components/mdx-components/mdx-component';
import { PaddedSection } from '~/components/padded-section/padded-section';
import { SOCIAL_MEDIA_LINKS } from '~/constants/FOOTER_DATA';
import { singleBlog, TOP_VALUE } from '~/constants/META_DATA';
import { type BlogItem } from '~/types/hygraph-interface';

export const meta: V2_MetaFunction = ({ data }) => {
  if (!data) {
    return [];
  }

  const { title, overview, seoImage, slug } = data?.blogs[0];

  return singleBlog(title, overview, seoImage.url, slug);
};

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
        seoImage {
          url(transformation: {image: {resize: {width: 800, height: 418}}})
        }
      }
    }
  `;

  const hygraph = new GraphQLClient(process.env.HYGRAPH_API_KEY as string);
  const blogs: BlogItem = await hygraph.request(query);

  if (!blogs.blogs.length) {
    throw new Response('Oh no! Something went wrong!', {
      status: 404
    });
  }

  return json(blogs);
}

const faceBook = SOCIAL_MEDIA_LINKS[0];
const twitterx = SOCIAL_MEDIA_LINKS[3];

export default function BlogPost(): JSX.Element {
  const { blogs } = useLoaderData() as BlogItem;
  const blogData = blogs[0];

  return (
    <PaddedSection className="mb-20">
      <div className="mb-8">
        <Link
          to={`/blogs?$top=${TOP_VALUE}`}
          className="text-teal-700 border-b-2 border-teal-700 hover:text-teal-800 hover:border-teal-800 dark:text-teal-500 dark:border-teal-500 dark:hover:text-teal-600 dark:hover:border-teal-600 mr-2"
        >
          Blogs page
        </Link>
        {' > '}
        <span className="ml-2">{blogData?.title}</span>
      </div>
      <div className="lg:px-20">
        <h1 className="text-center text-2xl md:text-3xl pb-2 font-semibold">{blogData?.title}</h1>
        <p className="text-sm font-light border-b-2 border-black dark:border-white text-center pb-4">
          Created: {format(new Date(blogData?.createdAt), 'dd/MM/yyyy')}
        </p>
        <p className="text-center font-thin mt-2 text-base md:text-lg">{blogData?.overview}</p>
        <div className="mt-8">{<JSMarkdown>{blogData?.body}</JSMarkdown>}</div>
      </div>
      <div className="w-full border-b-2 border-t-2 border-gray-200 mt-8 flex justify-end items-center space-x-8 py-2">
        <p className="text-lg md:text-xl font-medium">Share story: </p>
        <div className="flex items-center space-x-1">
          <a href={faceBook.href} target="_blank" rel="noopener noreferrer">
            <img src={faceBook.src} alt={faceBook.alt} className="w-12" />
          </a>
          <a href={twitterx.href} target="_blank" rel="noopener noreferrer">
            <img src={twitterx.src} alt={twitterx.alt} className="w-12" />
          </a>
        </div>
      </div>
    </PaddedSection>
  );
}
