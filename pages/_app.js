import { useEffect } from "react";
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
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function() { 
      dataLayer.push(arguments) 
    }
    window.gtag('js', new Date());
    window.gtag('config', `${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`);
  }, [])
  return (
    <>
      <Head>
        <title>Optimas - Digital Marketing Agency in Brunei</title>

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
