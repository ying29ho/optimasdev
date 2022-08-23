import Layout from "../components/Layout";
// import "bootstrap/dist/css/bootstrap.css"
import "../styles/globals.css";
import "../styles/scss/global.scss";
import "../styles/scss/Components.scss";
// import "../styles/scss/about.scss"


function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
