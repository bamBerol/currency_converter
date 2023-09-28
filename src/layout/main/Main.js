import style from "./Main.module.css";

const Main = ({ currencies }) => {
  const currencyList = currencies.map((currency) => {
    if (currency.code !== "XDR") {
      return (
        <li
          key={currency.code}
          value={currency.mid}
          className={`${style.listItem}`}>
          {currency.code} - {currency.currency}
          <img
            src={`https://wise.com/public-resources/assets/flags/rectangle/${currency.code.toLowerCase()}.png`}
            alt={`flaga currency.currency`}
          />
        </li>
      );
    } else {
      return (
        <li key={currency.code} value={currency.mid}>
          {currency.code} - {currency.currency}
        </li>
      );
    }
  });

  return (
    <main
      className={`${style.main} d-flex align-items-center justify-content-center`}>
      <div
        className={`${style.converter} d-flex flex-row justify-content-evenly`}>
        <div className={`${style.from}`}>
          <label htmlFor="from">From:</label>
          <div id="from" className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false">
              Wybierz walutę
            </button>
            <ul className="dropdown-menu menu">{currencyList}</ul>
          </div>

          {/*<select id="from" className="form-select">
            <option defaultValue disabled>
              Choose currency
            </option>
            {currencyList}
          </select>*/}
        </div>

        {/*<div className={`${style.to}`}>
          <label htmlFor="to">To:</label>
          <select id="to" className="form-select">
            <option defaultValue disabled>
              Choose currency
            </option>
            {currencyList}
          </select>
        </div> */}
      </div>
    </main>
  );
};

export default Main;
