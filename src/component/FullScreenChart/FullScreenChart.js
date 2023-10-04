import Chart from "../Chart/Chart";
import style from "./FullScreenChart.module.css";

const FullScreenChart = (props) => {
  console.log(props.currencyName);
  return (
    <>
      <div className={`${style.bigChart} d-flex align-items-center`}>
        <Chart
          selectedComponent={props.selectedComponent}
          currency={props.currencyName}
        />
      </div>
    </>
  );
};

export default FullScreenChart;
