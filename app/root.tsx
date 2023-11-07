import type { LinksFunction, LoaderArgs } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";
import stylesheet from "~/tailwind.css";
import { themeSessionResolver } from "./utils/session.server";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet }
];

export async function loader({ request }: LoaderArgs) {
  const { getTheme } = await themeSessionResolver(request);

  return {
    theme: getTheme()
  };
}

export default function App(): JSX.Element {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
