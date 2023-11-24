import type { V2_MetaFunction } from '@remix-run/node';

import { PaddedMain } from '~/components/padded-main/padded-main';

export const meta: V2_MetaFunction = () => {
  return [{ title: 'Learning English | Home Page' }, { name: 'description', content: 'Welcome to Remix!' }];
};

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
