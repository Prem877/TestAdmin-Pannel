import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

export const Chart1 = () => {

    const [chartData, setChartData] = useState({})

    const mychart = () => {
        setChartData({
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
                    backgroundColor: "transparent",
                    borderColor: "#2F80ED",
                    lineTension: 0.3,

                    data: [
                        600,
                        700,
                        750,
                        800,
                        760,
                        820,
                        690,
                        740,
                        720,
                        890,
                        776,
                        1120,
                    ],
                    pointBackgroundColor: "transparent",
                    pointHoverBackgroundColor: "#2F80ED",
                    pointBorderColor: "transparent",
                    pointHoverBorderColor: "#fff",
                    pointHoverBorderWidth: 5,
                    pointBorderWidth: 5,
                    pointRadius: 8,
                    pointHoverRadius: 8,
                },
            ],

        })
    }

    var lineOptions = {
        tooltips: {
            callbacks: {
                labelColor: function (tooltipItem, chart) {
                    return {
                        backgroundColor: "#ffffff",
                    };
                },
            },
            intersect: false,
            backgroundColor: "#f9f9f9",
            titleFontColor: "#8F92A1",
            titleFontSize: 12,
            bodyFontColor: "#171717",
            bodyFontStyle: "bold",
            bodyFontSize: 16,
            multiKeyBackground: "transparent",
            displayColors: false,
            xPadding: 30,
            yPadding: 10,
            bodyAlign: "center",
            titleAlign: "center",
        },

        title: {
            display: false,
        },
        legend: {
            display: false,
        },

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
                        max: 1200,
                        min: 500,
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
        mychart()
    }, []);



    return (
        < >
            <Line data={chartData}
                options={lineOptions}
                width={100}
                height={68}

            />

        </>
    )
}

