import "antd/dist/antd.css";
import "react-phone-number-input/style.css";
import "../styles/globals.scss";
import Layout from "../src/components/layout/mainLayout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
