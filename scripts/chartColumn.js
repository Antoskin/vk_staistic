import {highcharts} from 'highcharts';

export default function createChartColumn(id) {
    const charOptions = {
        chart: {
            type: 'column',
            height: 70 + 'px',
            margin: [0, 0, 0, 0]
        },
        title: {text: ''},
        xAxis: {type: ''},
        credits: {text: ``},
        legend: { enabled: false },
        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: true,
                    format: '{point.y:.1f}%'
                }
            }
        },
    
        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.age}</span>: <b>{point.y:.2f}%</b><br/>'
        },
        "series": [
            {
                "name": "age",
                "colorByPoint": true,
                "data": [
                    {
                        "age": "14-16",
                        "y": arguments[1][0],
                    },
                    {
                        "age": "17-19",
                        "y": arguments[1][1],
                    },
                    {
                        "age": "20-22",
                        "y": arguments[1][2],
                    },
                    {
                        "age": "23-25",
                        "y": arguments[1][3],
                    },
                    {
                        "age": "26-30",
                        "y": arguments[1][4],
                    },
                    {
                        "age": "31-35",
                        "y": arguments[1][5],
                    },
                    {
                        "age": "35-90",
                        "y": arguments[1][6]
                    }
                ]
            }
        ],
    }
    $('.age-wrap #' + id).highcharts(charOptions);
}


