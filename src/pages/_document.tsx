import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Varna GL</title>
        <meta name="description" content="Varna GL personal page" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body className="body">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
