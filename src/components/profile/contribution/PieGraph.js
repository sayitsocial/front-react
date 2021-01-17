import { PieChart } from "react-minimal-pie-chart";
import React, { Component } from "react";
import "../../../components/profile/profile.scss";

class PieGraph extends Component {
  render() {
    return (
      <>
        <h3>Aniket's Contribution</h3>
        <div className='pie-chart'>
          <PieChart
            animate
            animationDuration={1250}
            segmentsShift={0.35}
            radius={20}
            data={[
              { title: "One", value: 10, color: "#F1931B" },
              { title: "Two", value: 15, color: "#C0334D" },
              { title: "Three", value: 20, color: "#80ADD7" },
            ]}
          />
        </div>
      </>
    );
  }
}

export default PieGraph;
