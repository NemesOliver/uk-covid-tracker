import React from "react";

import Chart from "./Chart";

const ChartCard = () => {
  //Card component
  return (
    <div className="ui raised fluid card">
      <div className="content">
        <div className="header">Covid-19 statistics</div>
        <div className="meta">
          <span className="category">Total</span>
        </div>
        <div className="description">
          <div className="ui list">
            <Chart />
          </div>
        </div>
      </div>
      <div className="extra content">
        <div className="right floated author">
          <i className="image icon"></i>
        </div>
      </div>
    </div>
  );
};

export default ChartCard;
