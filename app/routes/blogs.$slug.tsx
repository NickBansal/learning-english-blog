/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useEffect } from 'react';
import { RichText } from '@graphcms/rich-text-react-renderer';
import type { LinksFunction, LoaderArgs, V2_MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { Link, useLoaderData } from '@remix-run/react';
import format from 'date-fns/format';
import { gql } from 'graphql-request';
import Prism from 'prismjs';

import 'prismjs/plugins/line-numbers/prism-line-numbers';

import linenum from 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import theme from 'prismjs/themes/prism-tomorrow.css';

import { PaddedMain } from '~/components/padded-main/padded-main';
import { blogsPage } from '~/constants/meta-data';
import { hygraph } from '~/utils/hygraph.server';
import { type BlogItem } from '~/utils/interface';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: theme },
  { rel: 'stylesheet', href: linenum }
];

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

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <PaddedMain>
      <div className="mb-8">
        <Link
          to="/blogs"
          className="text-blue-800 border-b-2 border-blue-800 hover:text-blue-500 hover:border-blue-500 dark:border-blue-300 hover:dark:text-blue-500 hover:dark:border-blue-500 dark:text-blue-300 mr-2"
        >
          Blogs page
        </Link>
        {' > '}
        <span className="ml-2">{blogData.title}</span>
      </div>
      <h1 className="text-center text-2xl md:text-3xl pb-2 font-semibold">{blogData.title}</h1>
      <p className="text-sm font-light border-b-2 border-black dark:border-white text-center pb-4">
        Created: {format(new Date(blogData.createdAt), 'dd/MM/yyyy')}
      </p>
      <p className="text-center font-thin mt-2 text-base md:text-lg">{blogData.overview}</p>
      <div className="mt-8">
        <RichText
          content={blogData.body.raw}
          renderers={{
            code_block: ({ children }) => {
              return (
                <pre className="line-numbers language-javascript">
                  <code>{children}</code>
                </pre>
              );
            },
            img: ({ src, altText, height, width }) => (
              <img src={src} alt={altText} width={width} height={height} className="rounded-lg" />
            ),
            a: ({ children, openInNewTab, href, rel, ...rest }) => (
              <a
                href={href}
                rel="noreferrer"
                target={openInNewTab ?? false ? '_blank' : '_self'}
                {...rest}
                className="text-teal-500 hover:text-teal-600"
              >
                {children}
              </a>
            )
          }}
        />
      </div>
    </PaddedMain>
  );
}
