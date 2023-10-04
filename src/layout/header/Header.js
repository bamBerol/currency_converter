import style from "./Header.module.css";

const Header = () => {
  return (
    <header className={`${style.title} d-flex justify-content-center`}>
      <h1 className={`d-flex align-items-center`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className={`${style.yen} bi bi-currency-yen`}
          viewBox="0 0 16 16">
          <path d="M8.75 14v-2.629h2.446v-.967H8.75v-1.31h2.445v-.967H9.128L12.5 2h-1.699L8.047 7.327h-.086L5.207 2H3.5l3.363 6.127H4.778v.968H7.25v1.31H4.78v.966h2.47V14h1.502z" />
        </svg>{" "}
        Exchange
      </h1>
    </header>
  );
};

export default Header;
