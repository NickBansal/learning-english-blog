import type { V2_MetaFunction } from '@remix-run/node';

import { PaddedSection } from '~/components/padded-section/padded-section';
import { aboutPage } from '~/constants/META_DATA';

export const meta: V2_MetaFunction = () => aboutPage;

export default function Courses(): JSX.Element {
  return (
    <PaddedSection>
      <h1 className="text-lg md:text-2xl">Courses section</h1>
    </PaddedSection>
  );
}
