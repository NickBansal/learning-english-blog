import type { V2_MetaFunction } from '@remix-run/node';

import { PaddedMain } from '~/components/padded-main/padded-main';

export const meta: V2_MetaFunction = () => {
  return [{ title: 'Learning English | About Page' }, { name: 'description', content: 'Welcome to Remix!' }];
};

export default function About(): JSX.Element {
  return (
    <PaddedMain>
      <h1 className="text-lg md:text-2xl">About section</h1>
    </PaddedMain>
  );
}
