import Document, { Html, Head, Main, NextScript } from 'next/document'

export default function MyDocument() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="bg-gradient-to-r from-custom_pink-200 to-custom_purple-50 dark:from-custom_cyan-50 dark:to-custom_green scrollbar-hide">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
