import { json, type V2_MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { gql, GraphQLClient } from 'graphql-request';

import { CoursesCard } from '~/components/courses-card/courses-card';
import { Header } from '~/components/header/header';
import { PaddedSection } from '~/components/padded-section/padded-section';
import { aboutPage } from '~/constants/META_DATA';
import { type CoursesArray } from '~/types/hygraph-interface';

export const meta: V2_MetaFunction = () => aboutPage;

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
  const courses = await hygraph.request(query);

  return json(courses);
}

export default function Courses(): JSX.Element {
  const { courses } = useLoaderData() as CoursesArray;

  return (
    <PaddedSection>
      <Header>Courses section</Header>

      <div className="mb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 py-4">
        {courses.map((course) => {
          return <CoursesCard key={course.id} {...course} />;
        })}
      </div>
    </PaddedSection>
  );
}
