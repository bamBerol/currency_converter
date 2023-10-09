import { useRef, useEffect } from "react";
import CurrentRate from "../CurrentRate/CurrentRate";
import Chart from "../Chart/Chart";
import Info from "../Info/Info";
import style from "./CurrencySection.module.css";

const CurrencySection = (props) => {
  const fromInputRef = useRef();

  useEffect(() => {
    if (props.component === "from") {
      fromInputRef.current.focus();
    }
  }, []);

  return (
    <div
      className={`${style.containerForCurrency} d-flex justify-content-center `}>
      <div
        className={`${style.currency} dropdown d-flex flex-column justify-content-center`}>
        {props.component === "from" ? (
          <label htmlFor="from">Mam:</label>
        ) : (
          <label htmlFor="to">Otrzymam:</label>
        )}

        <button
          className={`${style.buttonDropdown}  dropdown-toggle d-flex align-items-center justify-content-between`}
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false">
          <div
            className={`${style.selectedCurrency} d-flex align-items-center justify-content-between`}>
            <p className={`${style.selectedCurrencyName}`}>
              {props.component === "from" ? props.currency : props.toCurrency}
            </p>{" "}
            {props.component === "from" ? (
              props.flag ? (
                <img src={props.flag} alt={`${props.currency} flag`} />
              ) : (
                ""
              )
            ) : props.toFlag ? (
              <img src={props.toFlag} alt={`${props.toCurrency} flag`} />
            ) : (
              ""
            )}
          </div>
        </button>
        <ul className={`${style.currencyList} dropdown-menu menu`}>
          {props.currencyList}
        </ul>
        {props.component === "from" ? (
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
        ) : (
          <div className={`${style.inputFrom}`}>
            <p>{props.toInputValue}</p>
          </div>
        )}
        {props.component === "from" ? (
          props.isActive ? (
            <div
              className={`${style.stats} d-flex flex-column justify-content-evenly`}
              onClick={() => props.handleClick("from")}>
              <CurrentRate currency={props.currency} value={props.value} />
              <Chart currency={props.currency} selectedComponent={null} />
            </div>
          ) : (
            <Info />
          )
        ) : props.toIsActive ? (
          <div
            className={`${style.stats}`}
            onClick={() => props.handleClick("to")}>
            <CurrentRate currency={props.toCurrency} value={props.toValue} />
            <Chart currency={props.toCurrency} selectedComponent={null} />
          </div>
        ) : (
          <Info />
        )}
      </div>
    </div>
  );
};

export default CurrencySection;
