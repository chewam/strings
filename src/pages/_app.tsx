import Head from "next/head";

import "@/styles/tailwind.css";
import "@/styles/globals.scss";

import type { AppProps } from "next/app";
import { Provider } from "next-auth/client";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider
      session={pageProps.session}
      options={{ clientMaxAge: 0, keepAlive: 0 }}
    >
      <Head>
        <title>Strings: IT Recruitment in Sofia, Bulgaria</title>
        <meta charSet="utf-8" />
        <meta
          name="keywords"
          content="IT Recruitment, Recruitment, IT professionals, IT, IT jobs"
        />
        <meta name="author" content="Strings IT Recruitment" />
        <meta name="application-name" content="Strings IT Recruitment" />
        <meta
          property="og:title"
          content="Based in Sofia, Bulgaria, we are an IT recruitment agency dedicated to the selection of techies with IT skills looking for more exciting career opportunities."
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:image"
          content="http://pullthestrings.me/images/rgb/Strings.jpg"
        />
        <meta
          property="og:description"
          content="Strings IT Recruitment is a Sofia, Bulgaria-based IT recruitment agency which challenges IT professionals to discover more exciting career opportunities. Free of charge, of course."
        />
        <meta name="twitter:card" content="summary" />
        <link rel="icon" href="/favicon.png" />
        <link
          as="font"
          rel="preload"
          crossOrigin=""
          href="/fonts/GalanoGrotesqueBold.woff"
        />
        <link
          as="font"
          rel="preload"
          crossOrigin=""
          href="/fonts/GalanoGrotesqueMedium.woff"
        />
        <link
          as="font"
          rel="preload"
          crossOrigin=""
          href="/fonts/GalanoGrotesqueRegular.woff"
        />
        <link
          as="font"
          rel="preload"
          crossOrigin=""
          href="/fonts/GalanoGrotesqueSemiBold.woff"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
