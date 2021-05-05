import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchTotal } from "../../actions";

const ChartCard = ({ fetchTotal, total }) => {
  useEffect(() => {
    fetchTotal();
  }, [fetchTotal]);

  //Render list of data
  const renderList = () => {
    if (!total[0]) {
      return <div>Loading...</div>;
    }

    return (
      <>
        <div className="item">Date: {total[0].last_update} </div>
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
  
  //Card component
  return (
    <div className="ui raised fluid card">
      <div className="content">
        <div className="header">Cute Dog</div>
        <div className="meta">
          <span className="category">Animals</span>
        </div>
        <div className="description">
          <div className="ui list">{renderList()}</div>
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

const mapStateToProps = (state) => {
  return { total: state.total };
};

export default connect(mapStateToProps, {
  fetchTotal,
})(ChartCard);
