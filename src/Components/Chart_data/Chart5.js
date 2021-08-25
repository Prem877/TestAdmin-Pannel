import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';

export const Chart5 = () => {

    const [charData, setCharData] = useState({});

    const barChart = () => {
        setCharData({
            labels: ["Jan", "Fab", "Mar", "Apr", "May", "Jun"],

            datasets: [
                {
                    label: "",
                    backgroundColor: "#2F80ED",
                    barThickness: "flex",
                    maxBarThickness: 8,
                    data: [600, 700, 1000, 700, 650, 800],
                    pointBackgroundColor: "#F3F6F8",
                    pointHoverBackgroundColor: "#5243AA",
                    pointBorderColor: "#F3F6F8",
                    pointHoverBorderColor: "#fff",
                    pointHoverBorderWidth: 5,
                    pointBorderWidth: 5,
                    pointRadius: 8,
                    pointHoverRadius: 8,
                },
                {
                    label: "",
                    backgroundColor: "#EB5757",
                    barThickness: "flex",
                    maxBarThickness: 8,
                    data: [690, 740, 720, 1120, 876, 900],
                    pointBackgroundColor: "#F3F6F8",
                    pointHoverBackgroundColor: "#5243AA",
                    pointBorderColor: "#F3F6F8",
                    pointHoverBorderColor: "#fff",
                    pointHoverBorderWidth: 5,
                    pointBorderWidth: 5,
                    pointRadius: 8,
                    pointHoverRadius: 8,
                },
            ],

 
        })
    }
    
    // var options= {
    //     borderColor: "#F3F6F8",
    //     borderWidth: 15,
    //     backgroundColor: "#F3F6F8",
    //     tooltips: {
    //         callbacks: {
    //             labelColor: function (tooltipItem, chart) {
    //                 return {
    //                     backgroundColor: "rgba(104, 110, 255, .0)",
    //                 };
    //             },
    //         },
    //         backgroundColor: "#F3F6F8",
    //         titleFontColor: "#8F92A1",
    //         titleFontSize: 12,
    //         bodyFontColor: "#171717",
    //         bodyFontStyle: "bold",
    //         bodyFontSize: 16,
    //         multiKeyBackground: "transparent",
    //         displayColors: false,
    //         xPadding: 30,
    //         yPadding: 10,
    //         bodyAlign: "center",
    //         titleAlign: "center",
    //     },

    //     title: {
    //         display: false,
    //     },
    //     legend: {
    //         display: false,
    //     },

    //     scales: {
    //         yAxes: [
    //             {
    //                 gridLines: {
    //                     display: false,
    //                     drawTicks: false,
    //                     drawBorder: false,
    //                 },
    //                 ticks: {
    //                     padding: 35,
    //                     max: 1200,
    //                     min: 0,
    //                 },
    //             },
    //         ],
    //         xAxes: [
    //             {
    //                 gridLines: {
    //                     display: false,
    //                     drawBorder: false,
    //                     color: "rgba(143, 146, 161, .1)",
    //                     zeroLineColor: "rgba(143, 146, 161, .1)",
    //                 },
    //                 ticks: {
    //                     padding: 20,
    //                 },
    //             },
    //         ],
    //     },
    // }



    useEffect(() => {
        barChart()
    }, []);
    return (
        <>
            <Bar data={charData}  width={100}
                height={100} />
        </>
    )
}
