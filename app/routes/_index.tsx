import type { V2_MetaFunction } from '@remix-run/node';

import { PaddedMain } from '~/components/padded-main/padded-main';
import { homePage } from '~/constants/meta-data';

export const meta: V2_MetaFunction = () => homePage;

export default function Index(): JSX.Element {
  return (
    <main>
      <div className="bg-[url('/hero.jpg')] h-[60vh] w-full bg-center bg-cover relative" />

      <PaddedMain>
        <p>Home page content</p>
      </PaddedMain>
    </main>
  );
}
