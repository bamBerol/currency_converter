import { useRef, useEffect } from "react";
import CurrentRate from "../CurrentRate/CurrentRate";
import Chart from "../Chart/Chart";
import Info from "../Info/Info";
import style from "./From.module.css";

const From = (props) => {
  const fromInputRef = useRef();
  useEffect(() => {
    fromInputRef.current.focus();
  }, []);

  return (
    <>
      <div
        className={`${style.from} d-flex flex-column justify-content-between`}>
        <div id="from" className="dropdown">
          <label htmlFor="from">Mam:</label>
          <button
            className={`${style.buttonDropdown}  dropdown-toggle d-flex align-items-center justify-content-between`}
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false">
            <div
              className={`${style.selectedCurrency} d-flex align-items-center justify-content-between`}>
              <p className={`${style.selectedCurrencyName}`}>
                {props.currency}
              </p>{" "}
              {props.flag ? (
                <img src={props.flag} alt={`${props.currency} flag`} />
              ) : (
                ""
              )}
            </div>
          </button>
          <ul className={`${style.currencyList} dropdown-menu menu`}>
            {props.currencyList}
          </ul>
          <input
            ref={fromInputRef}
            type="text"
            placeholder="Wpisz kwotę"
            className={`${style.inputFrom}`}
            onChange={(e) => {
              props.handleInputChange(e);
              props.handleCurrencyConversion();
            }}
            value={props.inputValue}
          />
        </div>
        {props.isActive ? (
          <div
            className={`${style.stats}`}
            onClick={() => props.handleClick("from")}>
            <CurrentRate currency={props.currency} value={props.value} />
            <Chart currency={props.currency} selectedComponent={null} />
          </div>
        ) : (
          <Info />
        )}
      </div>
    </>
  );
};

export default From;
