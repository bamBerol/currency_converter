import Header from "./header/Header";
import Main from "./main/Main";
import Footer from "./footer/Footer";

const Layout = ({ currencies }) => {
  return (
    <>
      <Header />
      <Main currencies={currencies} />
      <Footer />
    </>
  );
};

export default Layout;
