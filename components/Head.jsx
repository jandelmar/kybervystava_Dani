import Head from 'next/head'

export default function MyHead() {
  return (
    <Head>
      <meta charset="utf-8" />
      <title>kybervystava_Dani</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      {/* TODO: add font on document level */}
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap" rel="stylesheet" />
    </Head>
  );
}
