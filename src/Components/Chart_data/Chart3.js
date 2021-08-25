import React from "react";
import { Bar } from "react-chartjs-2";

 
class Chart3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        labels: [
            "Jan",
            "Fab",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ],
        datasets: [
          {
            label: "",
            backgroundColor: "#2F80ED",
            barThickness: 6,
            maxBarThickness: 8,
            data: [
                600,
                700,
                1000,
                700,
                650,
                800,
                690,
                740,
                720,
                1120,
                876,
                900,
            ],
            borderRadius: 100,
            pointBackgroundColor: "#F3F6F8",
            pointHoverBackgroundColor: "#5243AA",
            pointBorderColor: "#F3F6F8",
            pointHoverBorderColor: "#fff",
            pointHoverBorderWidth: 5,
            pointBorderWidth: 5,
            pointRadius: 8,
            pointHoverRadius: 8,
          },

        ]
      }
    };
  }

  render() {
    const options = {
      responsive: true,
      legend: {
        display: false
      },
      type: "bar"
      //   scales: {
      //     xAxes: [{
      //         stacked: true
      //     }],
      //     yAxes: [{
      //         stacked: true
      //     }]
      // }
    };
    return (
      <Bar
        data={this.state.data}
        width={100}
        height={100}
        options={options}
      />
    );
  }
}
export default Chart3 ;
 