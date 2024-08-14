import ReactApexChart from 'react-apexcharts'
import {data} from "../assets/data/Data.jsx";

const BaseChart = () => {

        const config = {
            options: {
                chart: {
                    foreColor: '#c4c2c2',
                    type: 'area',
                    stacked: false,
                    height: 550,
                    zoom: {
                        type: 'x',
                        enabled: true,
                        autoScaleYaxis: true
                    },
                    toolbar: {
                        autoSelected: 'zoom'
                    }
                },
                colors: ["#f9ad3b"],
                dataLabels: {
                    enabled: false,
                },
                fill: {
                    type: 'gradient',
                    gradient: {
                        shadeIntensity: 1,
                        inverseColors: false,
                        opacityFrom: 0.0,
                        opacityTo: 0,
                        stops: [0, 90, 100]
                    }
                },
                xaxis: {
                    type: 'numeric'
                },
                markers: {
                    colors: ['#ffffff']
                },
                grid: {
                    borderColor: "#606060",
                }
            },
            series: [{
                name: 'x',
                data: data
            }]
        }

        return (
            <div>
                <ReactApexChart options={config.options} series={config.series} type="area" height={350} />
            </div>
        )
};

export default BaseChart;