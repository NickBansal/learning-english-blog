/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type { LoaderArgs, V2_MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { Link, useLoaderData, useSearchParams } from '@remix-run/react';
import format from 'date-fns/format';
import { gql, GraphQLClient } from 'graphql-request';

import { ContentSwitcher } from '~/components/content-switch-button/content-switch-buttons';
import { Error400 } from '~/components/error-screen/error-screen';
import { Header } from '~/components/header/header';
import { ArrowLeft } from '~/components/icons/arrow-left';
import { PaddedSection } from '~/components/padded-section/padded-section';
import { PaginationBar } from '~/components/pagination/pagination-bar';
import { allContent, TOP_VALUE } from '~/constants/META_DATA';
import type { Blogs, ContentArrayItem } from '~/types/hygraph-interface';
import { setSearchParamsString } from '~/utils/set-search-params-string';

export const meta: V2_MetaFunction = () => allContent;

export async function loader({ request }: LoaderArgs) {
  const url = new URL(request.url);
  const $top = Number(url.searchParams.get('$top')) || TOP_VALUE;
  const $skip = Number(url.searchParams.get('$skip')) || 0;
  const $videoContent = Boolean(url.searchParams.get('$videoContent')) || false;

  const query = gql`
    query AllContent {
      contents {
        createdAt
        id
        overview
        publishedAt
        slug
        title
        updatedAt
        videoContent
      }
    }
  `;
  const hygraph = new GraphQLClient(process.env.HYGRAPH_API_KEY as string);

  try {
    const contents: ContentArrayItem = await hygraph.request(query);

    const contentLength = contents.contents.filter((content) => content.videoContent === $videoContent);
    const data = contentLength.slice($skip, $skip + $top);

    return json({ data, total: contentLength.length ?? 0, videoContent: $videoContent });
  } catch (error) {
    return { data: false, error };
  }
}

export default function AllContentsPage(): JSX.Element {
  const { data, total, videoContent, error } = useLoaderData() as Blogs;
  const [searchParams] = useSearchParams();

  const header = !data ? 'All content' : `All content (${total})`;
  return (
    <PaddedSection>
      <Header className="mb-0">{header}</Header>

      {error?.response?.status === 400 ? <Error400 /> : null}

      {data ? (
        <>
          <ContentSwitcher videoContent={videoContent} />

          <div className="py-2 md:py-8">
            {!data.length && total === 0 && (
              <p className="text-center mt-16 mb-32">There is no content available right now, please check back soon</p>
            )}
            {!data.length && total !== 0 && (
              <p className="text-center mt-16 mb-32">
                {' '}
                <Link
                  to={{
                    search: setSearchParamsString(searchParams, {
                      $skip: Math.max(0, 0)
                    })
                  }}
                  preventScrollReset
                  prefetch="intent"
                  className="text-gray-800 dark:text-gray-300"
                >
                  <button className="border-2 border-gray-500 dark:border-white hover:bg-gray-300 dark:hover:bg-gray-500 p-2 rounded-full">
                    <span className="sr-only"> Previous page</span>
                    <ArrowLeft />
                  </button>
                  <p className="mt-4">Please head back to the first page</p>
                </Link>
              </p>
            )}
            {data.map((content) => {
              return (
                <Link to={content.slug} prefetch="none" key={content.id}>
                  <div className="mb-4 sm:mb-8 group pb-4 sm:pb-8 border-b-[1px] border-b-gray-200 mx-4 sm:mx-8">
                    <h2 className="text-lg md:text-xl font-semibold mb-2 relative w-fit">
                      {content.title}
                      <span className="absolute -bottom-1 left-0 w-0 h-[0.15rem] bg-teal-500 transition-all duration-150 group-hover:w-full"></span>
                    </h2>
                    <p className="text-base md:text-lg mb-2">{content.overview}</p>
                    <p className="text-sm font-light">Created: {format(new Date(content.createdAt), 'dd/MM/yyyy')}</p>
                  </div>
                </Link>
              );
            })}
          </div>
          {total > Number(searchParams.get('$top')) && <PaginationBar total={total} />}
        </>
      ) : null}
    </PaddedSection>
  );
}
