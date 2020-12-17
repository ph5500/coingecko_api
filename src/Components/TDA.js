import React, { useState, useEffect } from "react";
import axios from "axios";

function TDA() {
  const [monthlyClose, setMonthlyClose] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=30&interval=monthly"
      )
      .then((res) => {
        setMonthlyClose(res.data);
        console.log("should be 30day moving average", res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return <div>this is where 30 day moving average will go</div>;
}

export default TDA;
