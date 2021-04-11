import { Pie } from "react-chartjs-2";
import React from "react";

class PieChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      labels: ["Below 16", "16-30", "Over 30"],
      datasets: [
        {
          data: [2000, 4000, 2850],
          background: ["red", "blue", "green"],
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
          width={100}
          height={50}
          options={{ maintainAspectRatio: false }}
        />
      </>
    );
  }
}

export default PieChart;
