
import generationForm from './form';
import inject from './injectFunc';
import tabs from './tabs';
import createChartArea from './chartArea';



$(document).ready(() => {
    generationForm(); /* call generation of general form*/ 
    inject.maleFemale();
    tabs();
    createChartArea();

    $('.modal-control').click(function() {
        if(!$('#popup').hasClass('pop-opened')) {
            $('#popup').addClass('pop-opened');
        }
    })

})


