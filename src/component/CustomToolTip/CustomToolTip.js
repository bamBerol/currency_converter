import { format } from "date-fns";
import style from "./CustomToolTip.module.css";

const CustomToolTip = ({ active, payload, label }) => {
  const dateFormatter = () => {
    const dateRecived = new Date(label);
    const formatDate = format(dateRecived, "eee dd/MM");
    return formatDate;
  };

  if (active) {
    return (
      <div
        className={`${style.toolTip} d-flex flex-column align-items-center text-center`}>
        <h6>{dateFormatter()}</h6>
        <p>{payload[0].payload.mid.toFixed(3)}</p>
      </div>
    );
  }
  return null;
};

export default CustomToolTip;
