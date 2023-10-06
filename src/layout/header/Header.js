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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className={`${style.up} bi bi-caret-up-fill`}
          viewBox="0 0 16 16">
          <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
        </svg>
        <p className={style.titleText}>Exchange</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className={`${style.euro} bi bi-currency-euro`}
          viewBox="0 0 16 16">
          <path d="M4 9.42h1.063C5.4 12.323 7.317 14 10.34 14c.622 0 1.167-.068 1.659-.185v-1.3c-.484.119-1.045.17-1.659.17-2.1 0-3.455-1.198-3.775-3.264h4.017v-.928H6.497v-.936c0-.11 0-.219.008-.329h4.078v-.927H6.618c.388-1.898 1.719-2.985 3.723-2.985.614 0 1.175.05 1.659.177V2.194A6.617 6.617 0 0 0 10.341 2c-2.928 0-4.82 1.569-5.244 4.3H4v.928h1.01v1.265H4v.928z" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className={`${style.down} bi bi-caret-down-fill`}
          viewBox="0 0 16 16">
          <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
        </svg>
      </h1>
    </header>
  );
};

export default Header;
