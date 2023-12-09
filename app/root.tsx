/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import type { ActionFunction, DataFunctionArgs, LinksFunction, LoaderArgs } from '@remix-run/node';
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, useLoaderData } from '@remix-run/react';
import { Analytics } from '@vercel/analytics/react';
// import { SpeedInsights } from '@vercel/speed-insights/remix';
import { PreventFlashOnWrongTheme, ThemeProvider, useTheme } from 'remix-themes';

import { submitNewsletterForm } from './utils/form-submissions';
import { themeSessionResolver } from './utils/session.server';
import { Layout } from './layout';

import stylesheet from '~/tailwind.css';

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: stylesheet }];

export const loader = async ({ request }: LoaderArgs) => {
  const { getTheme } = await themeSessionResolver(request);

  return {
    theme: getTheme()
  };
};

export const action: ActionFunction = async ({ request }: DataFunctionArgs) => {
  const formData = await request.clone().formData();
  return await submitNewsletterForm({ formData });
};

export default function AppWithProvider() {
  const { theme } = useLoaderData<typeof loader>();

  return (
    <ThemeProvider specifiedTheme={theme} themeAction="/action/set-theme">
      <App />
    </ThemeProvider>
  );
}

export const App = (): JSX.Element => {
  const { theme } = useLoaderData<typeof loader>();
  const [themeX] = useTheme();

  return (
    <html lang="en" data-theme={themeX ?? ''}>
      <head>
        <Meta />
        <PreventFlashOnWrongTheme ssrTheme={Boolean(theme)} />
        <Links />
      </head>
      <body className="bg-white text-black dark:bg-gray-900 dark:text-white h-full selection:bg-gray-50 dark:selection:bg-gray-900 transition-colors">
        <Layout>
          <Outlet />
          {/* <SpeedInsights /> */}
          <Analytics />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </Layout>
      </body>
    </html>
  );
};
