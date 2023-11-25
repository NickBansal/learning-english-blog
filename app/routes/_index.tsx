import { json, type V2_MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { gql } from 'graphql-request';

import JSMarkdown from '~/components/mdx-components/mdx-component';
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
      <h1 className="text-lg md:text-2xl mb-8">Home section</h1>
      {homeContents.map((item) => {
        return (
          <section key={item.id}>
            <h2 className="text-base md:text-xl">{item.title}</h2>
            <JSMarkdown>{item.description}</JSMarkdown>
          </section>
        );
      })}
    </PaddedMain>
  );
}
