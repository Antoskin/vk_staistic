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
            
            maleFemale: function() {
                let male = this.pablicInfo[0].malePopulation;
                
                const howTimesCall = $('.graphTarget').length; //3
                for(let i = 0; i < howTimesCall; i++) {
                    createChart(`graphTarget${i}`);
                }
            }
        }
    })
   jj.maleFemale();
}