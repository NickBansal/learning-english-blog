import type { V2_MetaFunction } from '@remix-run/node';

import { PaddedSection } from '~/components/padded-section/padded-section';
import { aboutPage } from '~/constants/meta-data';

export const meta: V2_MetaFunction = () => aboutPage;

export default function Contact(): JSX.Element {
  return (
    <PaddedSection>
      <h1 className="text-lg md:text-2xl">Contact section</h1>
    </PaddedSection>
  );
}