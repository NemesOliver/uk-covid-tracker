import React from "react";

import Chart from "./Chart";

const ChartCard = () => {
  //Card component
  return (
    <div style={{ marginTop: "30px" }} className="ui raised fluid card">
      <div className="content">
        <div className="header">Covid-19 Deaths</div>
        <div className="meta">
          <span className="category">Total</span>
        </div>
        <div className="description">
          <div className="ui list">
            <Chart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartCard;
