import Layout from "../components/Layout";
import Script from "next/script";
import Head from "next/head";
// import "bootstrap/dist/css/bootstrap.css"
import "../styles/globals.css";
import "../styles/scss/global.scss";
import "../styles/scss/Components.scss";
// import "../styles/scss/about.scss"
import { motion, AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Head>
        <title>Optimas</title>
        <meta property="og:title" content="Optimas"/>
        <meta property="og:description" content="Building a Digital Brunei Adtech Ecosystem"/>
        {/* <meta property="og:image" itemProp="image" content="https://optimas-bucket.s3.ap-south-1.amazonaws.com/OptimasLogo.png"/>
        <meta property="og:image:secure_url" itemProp="image" content="https://optimas-bucket.s3.ap-south-1.amazonaws.com/OptimasLogo.png"/> */}
        <meta property="og:image" itemProp="image" content="https://optimas-bucket.s3.ap-south-1.amazonaws.com/optimas.ico"/>
        <meta property="og:image:secure_url" itemProp="image" content="https://optimas-bucket.s3.ap-south-1.amazonaws.com/optimas.ico"/>
        {/* <meta property="og:image:type" content="image/png"/> */}
        <meta property="og:url" content="https://www.optimasmgmt.com/"/>
        <meta property="og:type" content="website"/>
        {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
      </Head>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossOrigin="anonymous"
      ></Script>
      {/* <!-- Google tag (gtag.js) --> */}
      <Script
        id="google-analytics-id"
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
      />
      <Script id="google-analytics-id" strategy="lazyOnload">
        {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments)}
  gtag('js', new Date());

  gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}');
  `}
      </Script>

      <Layout>
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={router.route}
            initial="pageInitial"
            animate="pageAnimate"
            variants={{
              pageInitial: {
                opacity: 0,
              },
              pageAnimate: {
                opacity: 1,
              },
            }}
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </Layout>
    </>
  );
}

export default MyApp;
