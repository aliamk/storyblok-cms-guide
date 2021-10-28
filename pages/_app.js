import Footer from "../components/Footer";
import Toolbar from "../components/Toolbar";
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
