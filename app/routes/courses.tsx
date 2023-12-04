import type { V2_MetaFunction } from '@remix-run/node';

import { CoursesCard } from '~/components/courses-card/courses-card';
import { Header } from '~/components/header/header';
import { PaddedSection } from '~/components/padded-section/padded-section';
import { aboutPage } from '~/constants/META_DATA';

export const meta: V2_MetaFunction = () => aboutPage;

export default function Courses(): JSX.Element {
  return (
    <PaddedSection>
      <Header>Courses section</Header>

      <div className="mb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 py-4">
        <CoursesCard />
        <CoursesCard />
        <CoursesCard />
        <CoursesCard />
        <CoursesCard />
      </div>
    </PaddedSection>
  );
}
