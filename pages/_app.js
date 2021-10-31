import Toolbar from "../components/Toolbar";
import Footer from "../components/Footer";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Toolbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default MyApp;
