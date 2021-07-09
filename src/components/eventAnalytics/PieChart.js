import Pie from "react-chartjs-2";
import React from "react";

class PieChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      labels: ["Below 16", "16-30", "Over 30"],
      datasets: [
        {
          data: [2000, 4000, 2850],
          backgroundColor: [
            "rgb(234,73,151)",
            "rgb(5,155,255)",
            "rgb(114,63,236)",
          ],
        },
      ],
    };
  }

  render() {
    return (
      <>
        <Pie
          data={{
            labels: this.state.labels,
            datasets: this.state.datasets,
          }}
          options={{
            maintainAspectRatio: true,
            legend: {
              position: "right",
              align: "center",
              textAlign: "left",
            },
          }}
          width='400px'
        />
      </>
    );
  }
}

export default PieChart;
