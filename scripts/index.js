import generationForm from './form';
import inject from './injectFunc';

$(document).ready(() => {
    generationForm(); /* call generation of general form*/ 
    inject.maleFemale();
})
