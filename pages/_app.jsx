import Script from 'next/script'

import '../styles/global.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></Script>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.7/js/tether.min.js"></Script>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-alpha.6/js/bootstrap.min.js"></Script>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
