import { cssBundleHref } from "@remix-run/css-bundle";
import type {LinksFunction, MetaFunction} from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import tailwindStylesheetUrl from "./styles/tailwind.css"

export const links: LinksFunction = () => [
  {rel: "stylesheet", href: tailwindStylesheetUrl},
  {rel: "preconnect", href: "https://fonts.googleapis.com"},
  {rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous"},
  {rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Varela&display=swap"},
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];



export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className={`font-archia antialiased scroll-smooth bg-background-color relative w-full `}>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
