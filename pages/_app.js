import Layout from "../components/Layout";
import Script from "next/script";
import Head from "next/head";
// import "bootstrap/dist/css/bootstrap.css"
import "../styles/globals.css";
import "../styles/scss/global.scss";
import "../styles/scss/Components.scss";
// import "../styles/scss/about.scss"


function MyApp({ Component, pageProps }) {
  return (
    <>
   
    <Head>
      <title>Optimas</title>
      {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
    </Head>
    <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossOrigin="anonymous"></Script>
        {/* <!-- Google tag (gtag.js) --> */}
<Script id="google-analytics-id" strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}/>
<Script id="google-analytics-id" strategy="lazyOnload">
  {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments)}
  gtag('js', new Date());

  gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}');
  `}
</Script>
   
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  );
}

export default MyApp;
