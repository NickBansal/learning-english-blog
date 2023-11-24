import type { V2_MetaFunction } from '@remix-run/node';

import { PaddedMain } from '~/components/padded-main/padded-main';

export const meta: V2_MetaFunction = () => {
  return [{ title: 'New Remix App' }, { name: 'description', content: 'Welcome to Remix!' }];
};

export default function Index(): JSX.Element {
  return (
    <PaddedMain>
      <h1 className="text-lg lg:text-2xl">Home section</h1>
    </PaddedMain>
  );
}
