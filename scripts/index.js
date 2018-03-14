import createChart from './chart';
import generationForm from './form';
import pablicInfo from './dataList';
import createChartColumn from './chartColumn';


$(document).ready(() => {
    /* call generation of general form*/ 
    generationForm();
})

window.onload = function () {
    
    var jj = new Vue({
        el: '#table_id',
        data: {
            pablicInfo
        },
        methods: {
            maleFemale: function() { //  call pie chart
                const howTimesCall = $('.gender-sex').length; //3
                for(let i = 0; i < howTimesCall; i++) {
                    let male = this.pablicInfo[i].malePopulation;
                    let female = this.pablicInfo[i].femalePopulation;
                    createChart(`graphTarget${i}`, male, female);
                    createChartColumn(`graphTarget${i}`);
                }
            },
            // ageGraph: function() { //call column chart
            //     const howTimesCall = $('.gender-sex').length; //3
            //     for(let i = 0; i < howTimesCall; i++) {
                    
            //     }
               
            // }
        }
    })
   jj.maleFemale();
   jj.ageGraph();
}