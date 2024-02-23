import { json, type V2_MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { gql, GraphQLClient } from 'graphql-request';

import { Error400 } from '~/components/error-screen/error-screen';
import { Header } from '~/components/header/header';
import JSMarkdown from '~/components/mdx-components/mdx-component';
import { PaddedSection } from '~/components/padded-section/padded-section';
import { aboutPage } from '~/constants/META_DATA';
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

  try {
    const aboutPage = await hygraph.request(query);
    return json(aboutPage);
  } catch (error) {
    return { aboutPage: false, error };
  }
}

export default function About(): JSX.Element {
  const { aboutPage, error } = useLoaderData() as AboutContent;

  return (
    <PaddedSection>
      <Header>About section</Header>

      {error?.response?.status === 400 || !aboutPage ? <Error400 /> : null}

      {aboutPage ? (
        <>
          <div className="bg-[url('/about.jpg')] h-[400px] w-full bg-center bg-cover relative flex items-start justify-center lg:justify-end mb-20" />
          <div className="mt-8 mb-48">
            <JSMarkdown>{aboutPage?.information}</JSMarkdown>
          </div>
        </>
      ) : null}
    </PaddedSection>
  );
}
