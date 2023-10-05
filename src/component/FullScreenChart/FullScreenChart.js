import Chart from "../Chart/Chart";
import CustomToolTip from "../CustomToolTip/CustomToolTip";
import style from "./FullScreenChart.module.css";

const FullScreenChart = (props) => {
  return (
    <>
      <div
        className={`${style.bigChart} d-flex flex-column align-items-center justify-content-between`}>
        <h2>{props.currencyName}</h2>
        <Chart
          selectedComponent={props.selectedComponent}
          currency={props.currencyName}
          content={<CustomToolTip />}
        />
        <div className={`${style.backBtn}`} onClick={props.handleClick}>
          <p>Powrót</p>
        </div>
      </div>
    </>
  );
};

export default FullScreenChart;
