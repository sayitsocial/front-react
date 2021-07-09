import { Bar } from "react-chartjs-2";
import React from "react";

class BarChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      labels: ["Male", "Female"],
      datasets: [
        {
          data: [5000, 2000],
          backgroundColor: ["rgb(234,73,151)", "rgb(114,63,236)"],
          borderWidth: 1,
          barPercentage: 0.5,
        },
      ],
    };
  }

  render() {
    return (
      <>
        <Bar
          data={{
            labels: this.state.labels,
            datasets: this.state.datasets,
          }}
          options={{
            legend: {
              display: true,
              position: "bottom",
              align: "center",
            },
            scales: {
              xAxes: [
                {
                  categoryPercentage: 1.0,
                  barPercentage: 0.45,
                  stacked: false,
                },
              ],
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                    stacked: false,
                  },
                },
              ],
            },
          }}
        />
      </>
    );
  }
}

export default BarChart;
