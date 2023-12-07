import type { ActionFunction, V2_MetaFunction } from '@remix-run/node';

import { ContactForm } from '~/components/contact-form/contact-form';
import { Header } from '~/components/header/header';
import { PaddedSection } from '~/components/padded-section/padded-section';
import { aboutPage } from '~/constants/META_DATA';
import { submitContactForm } from '~/utils/form-submissions';

export const meta: V2_MetaFunction = () => aboutPage;

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.clone().formData();

  return submitContactForm({ formData });
};

export default function Contact(): JSX.Element {
  return (
    <PaddedSection>
      <Header>Contact section</Header>
      <ContactForm />
    </PaddedSection>
  );
}
