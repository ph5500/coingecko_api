import React from "react";
import "../Coin.css";

const Coin = ({
  name,
  image,
  symbol,
  price,
  volume,
  priceChange,
  marketCap,
}) => {
  var vol_string = JSON.stringify(volume);
  var mcap_string = JSON.stringify(marketCap);
  let newNum = vol_string / mcap_string;
  return (
    <div className="coin_container">
      <div className="coin_row">
        <div className="coin">
          <img src={image} alt="crypto" />
          <h1>{name}</h1>
          <p className="coin_symbol">{symbol}</p>
        </div>
        <div className="coin_data">
          <p className="coin_price">Price: ${price}</p>
          <p className="coin_volume"> Volume: ${volume.toLocaleString()}</p>
          {priceChange < 0 ? (
            <p className="coin_percent red">{priceChange.toFixed(2)}%</p>
          ) : (
            <p className="coin_percent green">{priceChange.toFixed(2)}%</p>
          )}
          <p className="coin_marketcap">
            Mkt Cap: ${marketCap.toLocaleString()}
          </p>
          <p className="trading_vol_market_cap">Vol/MC: {newNum.toFixed(5)}</p>
        </div>
      </div>
    </div>
  );
};

export default Coin;
