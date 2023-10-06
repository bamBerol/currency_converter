import style from "./Info.module.css";

const Info = () => {
  return (
    <>
      <div
        className={`${style.info} d-flex flex-column text-center align-items-center justify-content-center`}>
        <p>Kursy walut według NBP</p>
        <p>aktualizacja pon-pt między 11:45-12:15</p>
      </div>
    </>
  );
};

export default Info;
