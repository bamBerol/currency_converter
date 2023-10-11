import logo from "../../logo.svg";
import style from "./Header.module.css";

const Header = () => {
  return (
    <header className={`${style.title} d-flex justify-content-center`}>
      <h1
        className={`${style.logo} d-flex align-items-center justify-content-center`}>
        <div className="d-flex ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className={`${style.up} bi bi-caret-up-fill`}
            viewBox="0 0 16 16">
            <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
          </svg>
        </div>
        <img src={logo} alt="logo" />
        <div className="d-flex ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className={`${style.down} bi bi-caret-down-fill`}
            viewBox="0 0 16 16">
            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
          </svg>
        </div>
      </h1>
    </header>
  );
};

export default Header;
