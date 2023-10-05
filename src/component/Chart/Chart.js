import { useEffect, useState } from "react";
import axios from "axios";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { format } from "date-fns";
import CustomToolTip from "../CustomToolTip/CustomToolTip";

const Chart = (props) => {
  const [currencyData, setCurrencyData] = useState();

  const name = props.currency.split("").slice(0, 3).join("").toLowerCase();

  useEffect(() => {
    if (name !== "Wyb") {
      axios
        .get(
          `https://api.nbp.pl/api/exchangerates/rates/a/${name}/last/10/?format=json`
        )
        .then((res) => {
          if (res.status === 200) {
            dataSet(res.data.rates);
          }
        });
    }
  }, [name]);

  const dataSet = (data) => {
    setCurrencyData(data);
  };

  const dateFormatter = (date, index) => {
    if (index === 0) {
      return "";
    } else if (index % 2 === 0) {
      const dateRecived = new Date(date);
      const formatDate = format(dateRecived, "dd/MM");
      return formatDate;
    }
    return "";
  };

  return (
    <>
      {props.selectedComponent === null ? (
        <ResponsiveContainer width="100%" height={88}>
          <AreaChart data={currencyData} cursor="pointer">
            <defs>
              <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2451B7" stopOpacity={0.6} />
                <stop offset="95%" stopColor="#2451B7" stopOpacity={0} />
              </linearGradient>
            </defs>
            <Area dataKey="mid" stroke="#2451B7" fill="url(#gradient)" />
            <YAxis dataKey="mid" hide domain={["datamin", "datamax"]} />
            <XAxis dataKey="effectiveDate" hide />
            <Tooltip content={<CustomToolTip />} />
          </AreaChart>
        </ResponsiveContainer>
      ) : (
        <ResponsiveContainer width="100%" height={400}>
          <AreaChart data={currencyData} cursor="pointer">
            <defs>
              <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2451B7" stopOpacity={0.6} />
                <stop offset="95%" stopColor="#2451B7" stopOpacity={0} />
              </linearGradient>
            </defs>
            <Area dataKey="mid" stroke="#2451B7" fill="url(#gradient)" />
            <YAxis
              dataKey="mid"
              axisLine={false}
              tickLine={false}
              tickFormatter={(num) => `${num.toFixed(3)}`}
              domain={["datamin", "datamax"]}
            />
            <XAxis
              dataKey="effectiveDate"
              axisLine={false}
              tickLine={false}
              tickFormatter={dateFormatter}
            />
            <CartesianGrid opacity={0.6} vertical={false} />
            <Tooltip content={<CustomToolTip />} />
          </AreaChart>
        </ResponsiveContainer>
      )}
    </>
  );
};

export default Chart;
