import { createCookieSessionStorage } from "@remix-run/node";
import { createThemeSessionResolver } from "remix-themes";

const productionEnv = process.env.NODE_ENV !== "development";

const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "__remix_themes",
    domain: productionEnv ? "asdf" : undefined,
    path: "/",
    httpOnly: true,
    sameSite: "lax",
    secrets: ["secret"],
    secure: productionEnv
  }
});

export const themeSessionResolver = createThemeSessionResolver(sessionStorage);
