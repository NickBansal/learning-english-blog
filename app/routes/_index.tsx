import { json, type V2_MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { gql } from 'graphql-request';

import { PaddedMain } from '~/components/padded-main/padded-main';
import { homePage } from '~/constants/meta-data';
import { hygraph } from '~/utils/hygraph.server';
import { type HomeContent } from '~/utils/interface';

export const meta: V2_MetaFunction = () => homePage;

export async function loader() {
  const query = gql`
    query HomeContent {
      homeContents {
        id
        image {
          id
        }
        title
        description
      }
    }
  `;

  const homeContents = await hygraph.request(query);

  return json(homeContents);
}

export default function Index(): JSX.Element {
  const { homeContents } = useLoaderData() as HomeContent;

  return (
    <PaddedMain>
      <h1 className="text-lg md:text-2xl">Home section</h1>
    </PaddedMain>
  );
}
