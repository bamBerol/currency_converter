import { useState } from "react";
import Chart from "../Chart/Chart";
import style from "./FullScreenChart.module.css";

const FullScreenChart = (props) => {
  const [animated, setAnimated] = useState(false);
  const [period, setPeriod] = useState(10);

  if (props.chartIsClicked) {
    setTimeout(() => {
      setAnimated(true);
    }, 50);
  }

  const handleDateSwap = (e) => {
    setPeriod(Number(e.target.getAttribute("data-value")));
  };

  return (
    <>
      <div
        className={`${style.bigChart} d-flex flex-column align-items-center justify-content-evenly justify-content-lg-between`}>
        <h2 className={`${style.title} ${animated ? style.titleOn : ""}`}>
          {props.currencyName}
        </h2>
        <div
          className={`${style.periodOfTime} ${
            animated ? style.titleOn : ""
          } d-flex justify-content-center justify-content-lg-end`}>
          <div
            data-value="10"
            className={period === 10 ? style.activePeriod : ""}
            onClick={handleDateSwap}>
            10D
          </div>
          <div
            data-value="30"
            className={period === 30 ? style.activePeriod : ""}
            onClick={handleDateSwap}>
            1M
          </div>
          <div
            data-value="90"
            className={period === 90 ? style.activePeriod : ""}
            onClick={handleDateSwap}>
            3M
          </div>
          <div
            data-value="365"
            className={period === 365 ? style.activePeriod : ""}
            onClick={handleDateSwap}>
            1R
          </div>
        </div>
        <div
          className={`${style.bigChartContent} ${
            animated ? style.chartOn : ""
          }`}>
          <Chart
            selectedComponent={props.selectedComponent}
            currency={props.currencyName}
            periodOfTime={period}
          />
        </div>
        <div className={`${style.backBtn}`} onClick={props.handleClick}>
          <p>Powrót</p>
        </div>
      </div>
    </>
  );
};

export default FullScreenChart;
