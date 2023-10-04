import { parseISO, format } from "date-fns";
import style from "./CustomToolTip.module.css";

const CustomToolTip = ({ active, payload, label }) => {
  console.log(payload);
  if (active) {
    return (
      <div
        className={`${style.toolTip} d-flex flex-column align-items-center text-center`}>
        {/*<h6>{format(parseISO(label), "eee, d/MM/yyyy")}</h6>*/}
        <p>{payload[0].payload.mid.toFixed(3)}</p>
      </div>
    );
  }
  return null;
};

export default CustomToolTip;
