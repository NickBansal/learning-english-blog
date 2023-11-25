import type { V2_MetaFunction } from '@remix-run/node';

import { PaddedMain } from '~/components/padded-main/padded-main';
import { aboutPage } from '~/constants/meta-data';

export const meta: V2_MetaFunction = () => aboutPage;

export default function Contact(): JSX.Element {
  return (
    <PaddedMain>
      <h1 className="text-lg md:text-2xl">Contact section</h1>
    </PaddedMain>
  );
}
