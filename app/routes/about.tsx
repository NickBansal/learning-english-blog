import { json, type V2_MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { gql, GraphQLClient } from 'graphql-request';

import JSMarkdown from '~/components/mdx-components/mdx-component';
import { PaddedSection } from '~/components/padded-section/padded-section';
import { aboutPage } from '~/constants/META-DATA';
import { type AboutContent } from '~/types/hygraph-interface';

export const meta: V2_MetaFunction = () => aboutPage;

export async function loader() {
  const query = gql`
    query AboutPage {
      aboutPage(where: { id: "clpmlgpfob7iy0bmp5swqnzml" }) {
        id
        information
      }
    }
  `;

  const hygraph = new GraphQLClient(process.env.HYGRAPH_API_KEY as string);
  const aboutPage = await hygraph.request(query);

  return json(aboutPage);
}

export default function About(): JSX.Element {
  const { aboutPage } = useLoaderData() as AboutContent;

  return (
    <PaddedSection>
      <h1 className="text-lg md:text-2xl border-b-2 border-gray-500 dark:border-white mb-8 pb-4">About section</h1>
      <div className="bg-[url('/about.jpg')] h-[400px] w-full bg-center bg-cover relative flex items-start justify-center lg:justify-end mb-20" />
      <div className="mt-8 mb-48">
        <JSMarkdown>{aboutPage.information}</JSMarkdown>
      </div>
    </PaddedSection>
  );
}
