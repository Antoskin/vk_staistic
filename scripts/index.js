import createChart from './chart';
import generationForm from './form';
import pablicInfo from './dataList';


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
            //  call pie chart
            maleFemale: function() {
                
                const howTimesCall = $('.graphTarget').length; //3
                for(let i = 0; i < howTimesCall; i++) {
                    let male = this.pablicInfo[i].malePopulation;
                    let female = this.pablicInfo[i].femalePopulation;
                    createChart(`graphTarget${i}`, male, female);
                }
            }
        }
    })
   jj.maleFemale();
}