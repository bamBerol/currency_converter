import style from "./To.module.css";

const To = (props) => {
  return (
    <>
      <div className={`${style.to}`}>
        <label htmlFor="from">From:</label>
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
          <input
            type="number"
            className={`${style.inputFrom}`}
            onChange={props.handleInputChange}
            value={props.inputValue}
          />
        </div>
      </div>
    </>
  );
};

export default To;
