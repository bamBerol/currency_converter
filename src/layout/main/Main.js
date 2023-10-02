import { useState } from "react";
import From from "../../component/From/From";
import To from "../../component/To/To";
import style from "./Main.module.css";

const Main = ({ currencies }) => {
  const [currency, setCurrency] = useState("Wybierz walutę");
  const [toCurrency, setToCurrency] = useState("Wybierz walutę");
  const [value, setValue] = useState("");
  const [toValue, setToValue] = useState("");
  const [flag, setFlag] = useState("");
  const [toFlag, setToFlag] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [toInputValue, setToInputValue] = useState("");

  const handleCurrencySelection = (e) => {
    let component = e.currentTarget.getAttribute("data-component-name");

    let name = e.currentTarget.firstChild.textContent;
    let flag = e.currentTarget.children[1];
    let value = e.currentTarget.getAttribute("value");

    if (component === "from") {
      setCurrency(name);
      setValue(value);
      if (flag !== undefined) {
        setFlag(flag.getElementsByTagName("img")[0].currentSrc);
      } else {
        setFlag("");
      }
    } else if (component === "to") {
      setToCurrency(name);
      setToValue(value);
      if (flag !== undefined) {
        setToFlag(flag.getElementsByTagName("img")[0].currentSrc);
      } else {
        setFlag("");
      }
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const currencyList = (component) =>
    currencies.map((currency) => {
      if (currency.code !== "XDR") {
        return (
          <li
            key={currency.code}
            value={currency.mid}
            onClick={(event) => handleCurrencySelection(event, component)}
            data-component-name={component}
            className={`${style.listItem} dropdown-item d-flex align-items-center justify-content-between`}>
            <div>
              {currency.code} - {currency.currency}
            </div>
            <div>
              <img
                src={`https://wise.com/public-resources/assets/flags/rectangle/${currency.code.toLowerCase()}.png`}
                alt={`flaga currency.currency`}
              />
            </div>
          </li>
        );
      } else {
        return (
          <li
            key={currency.code}
            value={currency.mid}
            onClick={handleCurrencySelection}
            className="dropdown-item">
            {currency.code} - {currency.currency}
          </li>
        );
      }
    });

  const fromProps = {
    handleInputChange,
    currencyList: currencyList("from"),
    currency,
    value,
    flag,
    inputValue,
  };

  const toProps = {
    handleInputChange,
    currencyList: currencyList("to"),
    toCurrency,
    toValue,
    toFlag,
    toInputValue,
  };

  return (
    <main
      className={`${style.main} d-flex align-items-center justify-content-center`}>
      <div
        className={`${style.converter} d-flex flex-row justify-content-evenly`}>
        <From {...fromProps} />
        <To {...toProps} />
      </div>
    </main>
  );
};

export default Main;
