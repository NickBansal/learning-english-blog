/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { type ActionFunction, type DataFunctionArgs, type LinksFunction, type LoaderArgs } from '@remix-run/node';
import {
  isRouteErrorResponse,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useRouteError
} from '@remix-run/react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/remix';
import { PreventFlashOnWrongTheme, ThemeProvider, useTheme } from 'remix-themes';

import { Error404, Error500 } from './components/error-screen/error-screen';
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
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <PreventFlashOnWrongTheme ssrTheme={Boolean(theme)} />
        <Links />
      </head>
      <body className="bg-white text-black dark:bg-gray-900 dark:text-white h-full selection:bg-gray-50 dark:selection:bg-gray-900 transition-colors">
        <Layout>
          <Outlet />
          <SpeedInsights />
          <Analytics />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </Layout>
      </body>
    </html>
  );
};

export const ErrorBoundary = () => {
  const error = useRouteError();

  return (
    <html>
      <head>
        <title>English Everyday | Page not found!</title>
        <Meta />
        <Links />
      </head>
      <body>
        <div className="h-screen w-screen flex-col flex justify-center items-center p-64">
          {isRouteErrorResponse(error) && error.status === 404 && <Error404 />}
          {isRouteErrorResponse(error) && error.status === 500 && <Error500 />}
        </div>
        <Scripts />
      </body>
    </html>
  );
};
