import { json, type V2_MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import classNames from 'classnames';
import { gql, GraphQLClient } from 'graphql-request';

import { ButtonsGroup } from '~/components/button-groups/button-groups';
import { InternalLink } from '~/components/buttons/buttons';
import { TestimonialsCarousel } from '~/components/carousel/carousel';
import { ErrorHomePage } from '~/components/error-screen/error-screen';
import JSMarkdown from '~/components/mdx-components/mdx-component';
import { PaddedSection } from '~/components/padded-section/padded-section';
import { SlideReveal } from '~/components/reveal/slide-reveal';
import { homePage } from '~/constants/META_DATA';
import { type HomePageData } from '~/types/hygraph-interface';

export const meta: V2_MetaFunction = () => homePage;

export async function loader() {
  const query = gql`
    query HomeContent {
      homeContents {
        id
        description
        leftPosition
        title
      }
      testimonials {
        id
        name
        content
      }
    }
  `;

  const hygraph = new GraphQLClient(process.env.HYGRAPH_API_KEY as string);

  try {
    const data = await hygraph.request(query);
    return json({ data, error: false });
  } catch (error) {
    return { data: false, error };
  }
}

export default function Index(): JSX.Element {
  const {
    data: { homeContents, testimonials },
    error
  } = useLoaderData() as HomePageData;
  console.log(testimonials, ' <<<<<<<');

  return (
    <>
      <div className="bg-[url('/books.jpg')] h-screen w-full bg-center bg-cover relative flex items-start justify-center lg:justify-end">
        <div className="flex flex-col items-end text-white w-[75%] lg:w-1/2 text-center mt-28 pl-[4.5rem] md:pl-[8rem] max-w-5xl -mr-[4.5rem] md:-mr-[8.5rem] lg:mr-[5rem]">
          <h1 className="text-[3rem] sm:text-[4rem] md:text-[5rem] w-min leading-[0.8] font-bold drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.8)] text-right">
            English Language Everyday
          </h1>
          <hr className="w-full border-1 border-white mt-2" />
          <p className="mt-8 text-base sm:text-lg md:text-xl drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.8)] text-right">
            It is a long established fact that a reader will be distracted by the readable content of a page when
            looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
            letters
          </p>
          <ButtonsGroup className="mt-8 justify-end">
            <InternalLink to="/contact" outline>
              Contact
            </InternalLink>
            <InternalLink to="/courses">Courses</InternalLink>
          </ButtonsGroup>
        </div>
      </div>
      {(error?.response?.status === 400 || !homeContents) && (
        <PaddedSection>
          <ErrorHomePage />
        </PaddedSection>
      )}
      {Boolean(homeContents) && (
        <PaddedSection reducedTopPadding>
          {homeContents.map((item) => (
            <SlideReveal key={item.id} leftPosition={item.leftPosition}>
              <div
                className={classNames(`flex mb-[10rem] md:mb-[15rem] last:mb-[5rem] last:md:mb-[10rem]`, {
                  'text-left justify-start': item.leftPosition,
                  'text-right justify-end': !item.leftPosition
                })}
              >
                <div>
                  <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">{item.title}</h1>
                  <SlideReveal leftPosition={item.leftPosition} delay={0.5}>
                    <hr className="h2 border max-w-1/2 mb-4 border-gray-500 dark:border-white" />
                  </SlideReveal>
                  <JSMarkdown>{item.description}</JSMarkdown>
                </div>
              </div>
            </SlideReveal>
          ))}
        </PaddedSection>
      )}
      {Boolean(testimonials) && (
        <PaddedSection className="mb-20 pt-8 relative">
          <TestimonialsCarousel testimonials={testimonials} />
        </PaddedSection>
      )}
    </>
  );
}
