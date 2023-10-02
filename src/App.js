import { useState, useEffect } from "react";
import axios from "axios";
import Layout from "./layout/Layout";
import style from "./App.module.css";

function App() {
  const [currencies, setCurrencies] = useState([]);
  useEffect(() => {
    axios.get(`http://api.nbp.pl/api/exchangerates/tables/a/`).then((res) => {
      if (res.status === 200) {
        setCurrencies(res.data[0].rates);
      }
    });
  }, []);

  return (
    <div className={`${style.app} d-flex flex-column container-xl`}>
      <Layout currencies={currencies} />
    </div>
  );
}

export default App;
