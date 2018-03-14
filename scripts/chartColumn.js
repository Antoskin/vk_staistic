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
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
        },
    
        "series": [
            {
                "name": "age",
                "colorByPoint": true,
                "data": [
                    {
                        "name": "Chrom",
                        "y": 62.74,
                       
                    },
                    {
                        "name": "Firefox",
                        "y": 10.57,
                       
                    },
                    {
                        "name": "Internet Explorer",
                        "y": 7.23,
                       
                    },
                    {
                        "name": "Safari",
                        "y": 5.58,
                        
                    },
                    {
                        "name": "Edge",
                        "y": 4.02,
                      
                    },
                    {
                        "name": "Opera",
                        "y": 1.92,
                       
                    },
                    {
                        "name": "Other",
                        "y": 7.62,
                       
                    }
                ]
            }
        ],
    }
    $('.age-wrap #' + id).highcharts(charOptions);
}


