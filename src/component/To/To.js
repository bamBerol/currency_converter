import Chart from "../Chart/Chart";
import style from "./To.module.css";

const To = (props) => {
  return (
    <>
      <div className={`${style.to}`}>
        <label htmlFor="from">Otrzymam:</label>
        <div id="from" className="dropdown">
          <button
            className={`${style.buttonDropdown}  dropdown-toggle d-flex align-items-center justify-content-between`}
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false">
            <div
              className={`${style.selectedCurrency} d-flex align-items-center justify-content-between`}>
              <p className={`${style.selectedCurrencyName}`}>
                {props.toCurrency}
              </p>{" "}
              {props.toFlag ? (
                <img src={props.toFlag} alt={`${props.toCurrency} flag`} />
              ) : (
                ""
              )}
            </div>
          </button>
          <ul className={`${style.currencyList} dropdown-menu menu`}>
            {props.currencyList}
          </ul>
          <div className={`${style.inputFrom}`}>
            <p>{props.toInputValue}</p>
          </div>
        </div>
        <div className={`${style.chart}`}>
          <Chart currency={props.currency} value={props.value} />
        </div>
      </div>
    </>
  );
};

export default To;
