import { useEffect, useState } from "react";
import From from "../../component/From/From";
import To from "../../component/To/To";
import ArrowsBtn from "../../component/ArrowsBtn/ArrowsBtn";
import FullScreenChart from "../../component/FullScreenChart/FullScreenChart";
import style from "./Main.module.css";

const Main = ({ currencies }) => {
  const [currency, setCurrency] = useState("Wybierz walutę");
  const [value, setValue] = useState("");
  const [flag, setFlag] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [toCurrency, setToCurrency] = useState("Wybierz walutę");
  const [toValue, setToValue] = useState("");
  const [toFlag, setToFlag] = useState("");
  const [toInputValue, setToInputValue] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [toIsActive, setToIsActive] = useState(false);
  const [chartIsClicked, setChartIsClicked] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState("");
  const [arrowsClicked, setArrowsClicked] = useState(false);

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

  const handleCurrencyConversion = () => {
    if (value > 0 && toValue > 0 && inputValue > 0) {
      const quantity = (Number(value) / Number(toValue)) * Number(inputValue);

      setToInputValue(quantity.toFixed(2));
    } else {
      setToInputValue("0.00");
    }
  };

  const handleIsActive = (component) => {
    if (component === "from") {
      if (isActive === false) {
        return setIsActive(true);
      }
    } else if (component === "to") {
      if (toIsActive === false) {
        return setToIsActive(true);
      }
    }
  };

  const handleSwitch = () => {
    setArrowsClicked(!arrowsClicked);

    if (value.length !== 0 && toValue.length !== 0) {
      let cur = currency;
      let val = value;
      let flg = flag;

      setCurrency(toCurrency);
      setValue(toValue);
      setFlag(toFlag);
      setToCurrency(cur);
      setToValue(val);
      setToFlag(flg);
    } else {
      alert("musisz wybrać obie waluty");
    }
  };

  const handleClick = (component) => {
    setChartIsClicked(!chartIsClicked);
    setSelectedComponent(component);
  };

  useEffect(() => {
    handleCurrencyConversion();
  }, [inputValue, value, toValue]);

  const currencyList = (component) =>
    currencies.map((currency) => {
      if (currency.code !== "XDR") {
        return (
          <li
            key={currency.code}
            value={currency.mid}
            onClick={(event) => {
              handleCurrencySelection(event, component);
              handleCurrencyConversion();
              handleIsActive(component);
            }}
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
            onClick={(event) => {
              handleCurrencySelection(event, component);
              handleCurrencyConversion();
            }}
            data-component-name={component}
            className={`${style.listItem} dropdown-item`}>
            {currency.code} - {currency.currency}
          </li>
        );
      }
    });

  const fromProps = {
    handleInputChange,
    handleCurrencyConversion,
    handleClick,
    currency,
    value,
    flag,
    inputValue,
    isActive,
    currencyList: currencyList("from"),
  };

  const toProps = {
    handleInputChange,
    handleClick,
    toCurrency,
    toValue,
    toFlag,
    toInputValue,
    toIsActive,
    currencyList: currencyList("to"),
  };

  return (
    <main
      className={`${style.main} d-flex align-items-stretch justify-content-center`}>
      <div
        className={`${style.converter} d-flex flex-column flex-lg-row justify-content-between`}>
        <From {...fromProps} />
        <ArrowsBtn switch={handleSwitch} arrowsClicked={arrowsClicked} />
        <To {...toProps} />
      </div>
      {chartIsClicked ? (
        <FullScreenChart
          handleClick={handleClick}
          currencyName={selectedComponent === "from" ? currency : toCurrency}
        />
      ) : (
        ""
      )}
    </main>
  );
};

export default Main;
