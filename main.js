
$(document).ready(() => {






    /*generation of general form form*/ 
    $('#table_id').DataTable({
        searching: false,
        ordering:  false,
        select: false,
        lengthChange: false,
        "paging": false
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
            cpa: "2.6 р.",

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
            cpa: "",

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
            cpa: "8.6 р.",
        },
    ]
    
    


    var jj = new Vue({
        el: '#table_id',
        data: {
            pablicInfo
        },
        methods: {
            maleFemale: () => {
                
            }
        }
    })
   
  

    $(function(){
        createChart('cont1');
        createChart('cont2');    
    });

    function createChart(containerId) {
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

}