import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <>
      <Head>
        <title key="title">aspnet.how - Curated content for learning about asp.net</title>
        <meta
          name="description"
          key="description"
          content="ASP.NET Core - Latest curated content"
        />
        <meta property="og:title" key="og:title" content="ASP.NET How?" />
        <meta
          property="og:description"
          key="og:description"
          content="ASP.NET Core - Latest curated content"
        />
        <meta
          property="og:url"
          key="og:url"
          content="https://www.aspnet.how/"
        />
        <meta property="og:image" key="og:image" content="/aspnet_how.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ChakraProvider>
          <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
