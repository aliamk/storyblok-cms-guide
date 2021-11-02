import "../styles/globals.css";
import Toolbar from "../components/NavBar";
import Footer from "../components/Footer";

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
