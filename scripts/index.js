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
            maleFemale: () => {
                createChart('cont1');
                createChart('cont2'); 
                createChart('graph-target'); 
            }
        }
    })
   jj.maleFemale()
}