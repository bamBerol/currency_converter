import style from "./ArrowsBtn.module.css";

const ArrowsBtn = (props) => {
  return (
    <>
      <div
        onClick={props.switch}
        className={`${style.arrowsContainer} d-flex align-items-center justify-content-center`}>
        <svg
          className={`${
            props.arrowsClicked ? style.arrowsClicked : style.arrows
          } bi bi-arrow-left-right`}
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 16 16">
          <path
            fillRule="evenodd"
            d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z"
          />
        </svg>
      </div>
    </>
  );
};

export default ArrowsBtn;
