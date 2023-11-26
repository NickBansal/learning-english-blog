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
      <div className="bg-[url('/books.jpg')] h-screen w-full bg-center bg-cover relative flex items-center justify-center lg:justify-end grayscale">
        <div className="text-white w-[75%] lg:w-1/2 text-center -mt-[20rem] pl-[4.5rem] md:pl-[8rem] max-w-5xl -mr-[4.5rem] md:-mr-[8.5rem] lg:mr-[5rem]">
          <h1 className="text-[3rem] sm:text-[4rem] md:text-[5rem] border-b-2 border-white leading-none font-bold drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.8)] text-right">
            English Language Everyday
          </h1>
          <p className="mt-8 text-lg md:text-xl drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.8)] text-right">
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
