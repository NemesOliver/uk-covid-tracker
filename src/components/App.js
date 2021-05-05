import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchTotal } from "../actions";

const App = ({ fetchTotal, total }) => {
  useEffect(() => {
    fetchTotal();
  }, [fetchTotal]);

  const renderList = () => {
    if (!total[0]) {
      return <div>Loading...</div>;
    }

    return (
      <>
        <div className="item">Date: {total[0].date} </div>
        <div className="item">
          Confirmed cases: {total[0].confirmed.toLocaleString()}
        </div>
        <div className="item">Deaths: {total[0].deaths.toLocaleString()}</div>
        <div className="item">
          Mortality rate: {total[0].fatality_rate.toLocaleString()}%
        </div>
      </>
    );
  };

  return (
    <div className="ui container">
      <div className="ui list">{renderList()}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { total: state.total };
};

export default connect(mapStateToProps, {
  fetchTotal,
})(App);
