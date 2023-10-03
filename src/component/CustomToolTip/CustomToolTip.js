import { parseISO, format } from "date-fns";
import style from "./CustomToolTip.module.css";

const CustomToolTip = ({ active, payload, label }) => {
  if (active) {
    return (
      <div className={`${style.toolTip}`}>
        <h6>{format(parseISO(label), "eeee, d/MM/yyyy")}</h6>
        <p>{payload[0].payload.mid.toFixed(2)}</p>
      </div>
    );
  }
  return null;
};

export default CustomToolTip;
