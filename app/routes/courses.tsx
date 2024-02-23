import { json, type V2_MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { gql, GraphQLClient } from 'graphql-request';

import { CoursesCard } from '~/components/courses-card/courses-card';
import { Error400 } from '~/components/error-screen/error-screen';
import { Header } from '~/components/header/header';
import { PaddedSection } from '~/components/padded-section/padded-section';
import { coursesPage } from '~/constants/META_DATA';
import { type CoursesArray } from '~/types/hygraph-interface';

export const meta: V2_MetaFunction = () => coursesPage;

export async function loader() {
  const query = gql`
    query CoursePage {
      courses {
        overview
        price
        title
        date
        id
        image {
          url(transformation: { image: { resize: { width: 350, height: 250 } } })
        }
      }
    }
  `;

  const hygraph = new GraphQLClient(process.env.HYGRAPH_API_KEY as string);

  try {
    const courses = await hygraph.request(query);
    return json(courses);
  } catch (error) {
    return { courses: [], error };
  }
}

export default function Courses(): JSX.Element {
  const { courses, error } = useLoaderData() as CoursesArray;

  return (
    <PaddedSection>
      <Header>Courses section</Header>

      {error?.response?.status === 400 ? <Error400 /> : null}

      <div className="mb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-8 py-4">
        {courses
          ? courses.map((course) => {
              return <CoursesCard key={course.id} {...course} />;
            })
          : null}
      </div>
    </PaddedSection>
  );
}
