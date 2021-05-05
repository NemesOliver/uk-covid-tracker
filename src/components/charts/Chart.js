import React from "react";
import { useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { connect } from "react-redux";

import { fetchTotal } from "../../actions";

const Chart = ({ fetchTotal, total }) => {
  useEffect(() => {
    fetchTotal();
  }, [fetchTotal]);

  if (!total[0]) {
    return (
      <div className="ui active dimmer">
        <div className="ui text loader">Loading</div>
      </div>
    );
  }
  const { deaths } = total[0];

  const data = {
    labels: [deaths.toLocaleString()],
    datasets: [
      {
        label: "Deaths",
        data: [deaths],
        backgroundColor: ["rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    indexAxis: "y",
    elements: {
      bar: {
        borderWidth: 5,
      },
    },
    responsive: true,
  };

  return (
    <>
      <Bar data={data} options={options} />
    </>
  );
};

const mapStateToProps = (state) => {
  return { total: state.total };
};

export default connect(mapStateToProps, {
  fetchTotal,
})(Chart);
