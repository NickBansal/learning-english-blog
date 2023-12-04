import type { V2_MetaFunction } from '@remix-run/node';

import { Header } from '~/components/header/header';
import { PaddedSection } from '~/components/padded-section/padded-section';
import { aboutPage } from '~/constants/META_DATA';

export const meta: V2_MetaFunction = () => aboutPage;

export default function Contact(): JSX.Element {
  return (
    <PaddedSection>
      <Header>Contact section</Header>
    </PaddedSection>
  );
}
