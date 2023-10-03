import { useState, useEffect } from "react";
import axios from "axios";
import style from "./CurrentRate.module.css";

const CurrentRate = (props) => {
  const [percent, setPercent] = useState(0);
  const name = props.currency.split("").slice(0, 3).join("");

  useEffect(() => {
    if (name !== "Wyb") {
      axios
        .get(
          `https://api.nbp.pl/api/exchangerates/rates/a/${name.toLowerCase()}/last/2/?format=json`
        )
        .then((res) => {
          if (res.status === 200) {
            percentChange(Number(res.data.rates[0].mid));
          }
        });
    }
  }, [name]);

  const percentChange = (latest) => {
    let change = Number(props.value) - latest;
    let percent = (change / latest) * 100;
    setPercent(percent);
  };

  return (
    <>
      <div className="d-flex justify-content-between">
        <div
          className={`${style.currentRate} ${
            !props.value ? "" : style.active
          }`}>
          <p>{`Aktualny kurs 1 ${name} do PLN`} </p>
          <h3>{Number(props.value)}</h3>
        </div>
        <div
          className={`${style.currentChange} ${
            !props.value ? "" : style.active
          } `}>
          <p>{`Zmiana ${name}`}</p>
          <div
            className={`${style.currentChangeDetail} d-flex flex-row justify-content-center`}>
            <h3 className={`${percent > 0 ? style.green : style.red}`}>
              {`${percent.toFixed(2)} %`}
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default CurrentRate;
