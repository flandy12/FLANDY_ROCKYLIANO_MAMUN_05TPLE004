import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="/asset/logo/logo.png" />
        <link rel="shortcut icon" href="/static/favicon.ico" />
        <title>My Unpam </title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
