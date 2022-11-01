import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta property="og:title" content="Optimas - Digital Marketing Agency in Brunei" />
        <meta property="og:site_name" content="Optimas" />
        <meta
          property="og:description"
          content="Optimas, Building a Digital Brunei Adtech Ecosystem. We are a Digital Marketing Agency based in Brunei who cater to Borneo. We are able to help you buy and sell online ads and run digital marketing campaigns."
        />
        <meta
          property="og:image"
          itemProp="image"
          content="https://optimas-bucket.s3.ap-south-1.amazonaws.com/eventgraphicsfb.png"
        />
        <meta
          property="og:image:secure_url"
          itemProp="image"
          content="https://optimas-bucket.s3.ap-south-1.amazonaws.com/eventgraphicsfb.png"
        />
        {/* <meta property="og:image:width" content="247" />
<meta property="og:image:height" content="106" /> */}
        <meta property="og:url" content="https://www.optimasmgmt.com/" />
        <meta property="og:type" content="website" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600&family=Oswald:wght@600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/newoptimas.ico" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossOrigin="anonymous"
        />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
