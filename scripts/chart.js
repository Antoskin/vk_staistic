import {highcharts} from 'highcharts';

export default function createChart(containerId) {
    var chartOptions = {
        chart: {
            type: 'pie',
            height: 70 + 'px',
            margin: [0, 0, 0, 0]
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        title: {text: ``},
        credits: {text: ``},
        plotOptions: {
            pie: {
                allowPointSelect: true,
                dataLabels: {
                    format: '<b>{point.name}</b><br>{point.percentage:.1f} %',
                    distance: 0,
                }
            }
        },
        series: [{
            name: 'Кол-во',
            data: [
                { name: 'мужчины', y: 40 },
                { name: 'женщины', y: 60 }
            ]
        }]
    }
    $('#' + containerId).highcharts(chartOptions);
}

