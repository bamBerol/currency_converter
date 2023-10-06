import { useState } from "react";
import Chart from "../Chart/Chart";
import CustomToolTip from "../CustomToolTip/CustomToolTip";
import style from "./FullScreenChart.module.css";

const FullScreenChart = (props) => {
  const [animated, setAnimated] = useState(false);

  if (props.chartIsClicked) {
    setTimeout(() => {
      setAnimated(true);
    }, 50);
  }

  return (
    <>
      <div
        className={`${style.bigChart} d-flex flex-column align-items-center justify-content-between`}>
        <h2 className={`${style.title} ${animated ? style.titleOn : ""}`}>
          {props.currencyName}
        </h2>
        <div
          className={`${style.bigChartContent} ${
            animated ? style.chartOn : ""
          }`}>
          <Chart
            selectedComponent={props.selectedComponent}
            currency={props.currencyName}
            content={<CustomToolTip />}
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
