import * as React from "react";
import { Chart } from "react-google-charts";

const data = [
    ["Country"],
    ["Egypt"],
    ["Russia"],
    ["Canada"],
    ["Greenland"],
    ["Brazil"],
];


class GeoChart extends React.Component {
    
    render() {
        return (
            <div className="App">
                <Chart
                    chartEvents={[
                        {
                            eventName: "select",
                            callback: ({ chartWrapper }) => {
                                const chart = chartWrapper.getChart();
                                const selection = chart.getSelection();
                                if (selection.length === 0) return;
                                const region = data[selection[0].row + 1];
                                console.log("Selected : " + region);
                            }
                        }
                    ]}
                    chartType="GeoChart"
                    width="100%"
                    height="400px"
                    data={data}
                 />
            </div>
        );
    }
}

export default GeoChart;
