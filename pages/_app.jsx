import Script from "next/script"

import "../styles/global.css"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" strategy="beforeInteractive" />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.7/js/tether.min.js" />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
