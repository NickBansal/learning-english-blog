import { json, type V2_MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { gql } from 'graphql-request';

import JSMarkdown from '~/components/mdx-components/mdx-component';
import { PaddedSection } from '~/components/padded-section/padded-section';
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
    <>
      <div className="bg-[url('/hero.jpg')] h-screen w-full bg-center bg-cover relative flex items-center justify-center">
        <div className="text-white w-[95%] lg:w-3/5 text-center border-4 border-white p-8 bg-black opacity-80 -mt-[10rem]">
          <h1 className="text-3xl md:text-4xl border-b-2 border-white pb-4">English Everyday</h1>
          <p className="mt-8 text-lg md:text-xl">
            It is a long established fact that a reader will be distracted by the readable content of a page when
            looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
            letters
          </p>
        </div>
      </div>
      <PaddedSection>
        {homeContents.map((item) => {
          return (
            <section key={item.id}>
              <h2 className="text-base md:text-xl">{item.title}</h2>
              <JSMarkdown>{item.description}</JSMarkdown>
            </section>
          );
        })}
      </PaddedSection>
    </>
  );
}
