import React, { useState,useEffect } from 'react';
import { Line } from 'react-chartjs-2';

export const Chart4 = () => {
   
    const [charData, setCharData] = useState({});

    const lineChart = () =>{
        setCharData({
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
                  label: "Revenue",
                  backgroundColor: "transparent",
                  borderColor: "#5243AA",
                  data: [80, 120, 110, 100, 130, 150, 115, 145, 140, 130, 160, 210],
                  pointBackgroundColor: "transparent",
                  pointHoverBackgroundColor: "#5243AA",
                  pointBorderColor: "transparent",
                  pointHoverBorderColor: "#fff",
                  pointHoverBorderWidth: 3,
                  pointBorderWidth: 5,
                  pointRadius: 5,
                  pointHoverRadius: 8,
                  lineTension: 0.3,
                },
                {
                  label: "Profit",
                  backgroundColor: "transparent",
                  borderColor: "#686EFF",
                  data: [
                    120,
                    160,
                    150,
                    140,
                    165,
                    210,
                    135,
                    155,
                    170,
                    140,
                    130,
                    200,
                  ],
                  pointBackgroundColor: "transparent",
                  pointHoverBackgroundColor: "#686EFF",
                  pointBorderColor: "transparent",
                  pointHoverBorderColor: "#fff",
                  pointHoverBorderWidth: 3,
                  pointBorderWidth: 5,
                  pointRadius: 5,
                  pointHoverRadius: 8,
                  lineTension: 0.3,
                },
                {
                  label: "Order",
                  backgroundColor: "transparent",
                  borderColor: "#FF8730",
                  data: [180, 110, 140, 135, 100, 90, 145, 115, 100, 110, 115, 150],
                  pointBackgroundColor: "transparent",
                  pointHoverBackgroundColor: "#FF8730",
                  pointBorderColor: "transparent",
                  pointHoverBorderColor: "#fff",
                  pointHoverBorderWidth: 3,
                  pointBorderWidth: 5,
                  pointRadius: 5,
                  pointHoverRadius: 8,
                  lineTension: 0.3,
                },
              ],
        })
    }

    const option= {
        tooltips: {
          callbacks: {
            labelColor: function (tooltipItem, chart) {
              return {
                backgroundColor: "rgba(104, 110, 255, .0)",
              };
            },
          },
          intersect: false,
          backgroundColor: "#fbfbfb",
          titleFontColor: "#8F92A1",
          titleFontSize: 16,
          titleFontFamily: "Inter",
          titleFontStyle: "400",
          bodyFontColor: "#171717",
          bodyFontSize: 16,
          multiKeyBackground: "transparent",
          displayColors: false,
          xPadding: 30,
          yPadding: 15,
          borderColor: "rgba(143, 146, 161, .1)",
          borderWidth: 1,
          title: false,
        },
    
        title: {
          display: false,
        },
    
        layout: {
          padding: {
            top: 0,
          },
        },
    
        legend: false,
    
        scales: {
          yAxes: [
            {
              gridLines: {
                display: false,
                drawTicks: false,
                drawBorder: false,
              },
              ticks: {
                padding: 35,
                max: 300,
                min: 50,
              },
            },
          ],
          xAxes: [
            {
              gridLines: {
                drawBorder: false,
                color: "rgba(143, 146, 161, .1)",
                zeroLineColor: "rgba(143, 146, 161, .1)",
              },
              ticks: {
                padding: 20,
              },
            },
          ],
        },
      }
      
      useEffect(() => {
        lineChart()
    }, []);
    return (
        <>
            <Line data={charData} options={option}  width={100}
                height={70} />
        </>
    )
}
