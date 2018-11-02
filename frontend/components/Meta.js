import Head from 'next/head'

const Meta = () => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link rel="shortcut icon" href="/static/favicon.png" />
      <link
        href="https://fonts.googleapis.com/css?family=Muli:300,300i,400,400i,600,600i,700,700i|Oswald:400,600"
        rel="stylesheet"
      />
      <link href="/static/css/normalize.css" rel="stylesheet" />
      <link href="/static/css/style.css" rel="stylesheet" />
      <link href="/static/css/skeleton.css" rel="stylesheet" />
      <link href="/static/css/nprogress.css" rel="stylesheet" />
      <title>Artist Store</title>
    </Head>
  )
}

export default Meta
