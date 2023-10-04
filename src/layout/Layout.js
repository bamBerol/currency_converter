import Header from "./header/Header";
import Main from "./main/Main";
import Footer from "./footer/Footer";
import style from "./Layout.module.css";

const Layout = ({ currencies }) => {
  return (
    <div className={`${style.layout} d-flex flex-column`}>
      <Header />
      <Main currencies={currencies} />
      <Footer />
    </div>
  );
};

export default Layout;
