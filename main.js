
$(document).ready(() => {






    /*generation of general form form*/ 
    $('#table_id').DataTable({
        searching: false,
        ordering:  false,
        select: false,
        "paging": false,
        "lengthChange": false
     });


})

window.onload = function () {
    var pablicInfo = [
        {
            img: "./img/dog.png",
            date: "16.06.17",
            time: "16:20",
            status: 1,
            denotationImg: "./img/dog.png",
            denotationName: 'Бот Максим',
            type: "Инфо пост",
            price: "3 120 р",
            activity: "<span>1</span><span>2</span><span>3</span>",
            likes: 10,
            shares: 17,
            comments: 104,
            subscribe: 2875,
            sex:"m",
            age: "17",
            cpa: "2.6 р."
        },
        {
            img: "",
            time: "16.06.17",
            time: "16:20",
            status: 0,
            denotation: "5421",
            type: "2011/04/25",
            price: "3 120 р.",
            activity: "<span>1</span><span>2</span><span>3</span>",
            subscribe: 3400,
            sex:"m",
            age: "17",
            cpa: ""
        },
        {
            img: "",
            time: "16.06.17",
            time: "16:20",
            status: "",
            denotation: "5421",
            type: "2011/04/25",
            price: "3 120 р.",
            activity: "<span>1</span><span>2</span><span>3</span>",
            subscribe: 666,
            sex:"m",
            age: "17",
            cpa: "8.6 р."
        },
    ]
    
    
    var jj = new Vue({
        el: '#table_id',
        data: {
            pablicInfo
        }
    })




        // Make monochrome colors
let mineColors = ['red', 'green'];

console.log( mineColors);
// Build the chart
Highcharts.chart('graph-target', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
 
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    title: {
        text: ``
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            colors: mineColors,
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b><br>{point.percentage:.1f} %',
                distance: -50,
                filter: {
                    property: 'percentage',
                    operator: '>',
                    value: 2
                }
            }
        }
    },
    series: [{
        name: 'Share',
        data: [
            { name: 'male', y: 61.41 },
            { name: 'female', y: 11.84 }
        ]
    }]
});

/**sec pip**/

Highcharts.chart("root", {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
 
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    title: {
        text: ``
    },
    chart: {
        // Edit chart spacing
        spacingBottom: 15,
        spacingTop: 10,
        spacingLeft: 170,
        spacingRight: 10,

        // Explicitly tell the width and height of a chart
        width: null,
        height: null
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            colors: mineColors,
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b><br>{point.percentage:.1f} %',
                distance: -50,
                filter: {
                    property: 'percentage',
                    operator: '>',
                    value: 2
                }
            }
        }
    },
    series: [{
        name: 'Share',
        data: [
            { name: 'male', y: 61.41 },
            { name: 'female', y: 11.84 }
        ]
    }]
});

}