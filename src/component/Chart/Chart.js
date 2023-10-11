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
      if (props.periodOfTime === undefined) {
        axios
          .get(
            `https://api.nbp.pl/api/exchangerates/rates/a/${name}/last/10/?format=json`
          )
          .then((res) => {
            if (res.status === 200) {
              dataSet(res.data.rates);
            }
          });
      } else if (
        props.periodOfTime !== undefined &&
        Number(props.periodOfTime) <= 90
      ) {
        axios
          .get(
            `https://api.nbp.pl/api/exchangerates/rates/a/${name}/last/${props.periodOfTime}/?format=json`
          )
          .then((res) => {
            if (res.status === 200) {
              dataSet(res.data.rates);
            }
          });
      } else if (
        props.periodOfTime !== undefined &&
        Number(props.periodOfTime) > 90
      ) {
        let today = new Date();
        let todayDate = format(today, "RRRR-MM-dd");
        let yearFromToday = new Date();
        yearFromToday.setFullYear(yearFromToday.getFullYear() - 1);
        let yearFromTodayDate = format(yearFromToday, "RRRR-MM-dd");

        axios
          .get(
            `http://api.nbp.pl/api/exchangerates/rates/a/${name}/${yearFromTodayDate}/${todayDate}/`
          )
          .then((res) => {
            if (res.status === 200) {
              dataSet(res.data.rates);
            }
          });
      }
    }
  }, [name, props.periodOfTime]);

  const dataSet = (data) => {
    setCurrencyData(data);
  };

  const dateFormatter = (date, index) => {
    if (index === 0) {
      return "";
    } else if (index % 2 === 0) {
      const dateRecived = new Date(date);
      const formatDate = format(dateRecived, "dd-MM-yy");
      return formatDate;
    }
    return "";
  };

  let intervalCount;

  if (window.screen.width > 500) {
    switch (Number(props.periodOfTime)) {
      case 10:
        intervalCount = 0;
        break;
      case 30:
        intervalCount = 3;
        break;
      case 90:
        intervalCount = 6;
        break;
      case 365:
        intervalCount = 15;
        break;
      default:
        intervalCount = 0;
    }
  } else if (window.screen.width <= 500) {
    switch (Number(props.periodOfTime)) {
      case 10:
        intervalCount = 1;
        break;
      case 30:
        intervalCount = 3;
        break;
      case 90:
        intervalCount = 15;
        break;
      case 365:
        intervalCount = 35;
        break;
      default:
        intervalCount = 0;
    }
  }

  return (
    <>
      {props.selectedComponent === null ? (
        <ResponsiveContainer width="99%" height={88}>
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
              interval={intervalCount}
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
