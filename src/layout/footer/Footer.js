import style from "./Footer.module.css";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer
      className={`${style.footer} d-flex justify-content-center align-items-center`}>
      <p>{`created by devTro ${year}`}</p>
    </footer>
  );
};
export default Footer;
