import pablicInfo from './dataList';
import createChart from './chartPipe';
import createChartColumn from './chartColumn';

const inject = new Vue({
    el: '#table_id',
    data: {
        pablicInfo
    },
    methods: {
        maleFemale: function() { 
            const howTimesCall = $('.gender-sex').length; //count rows
            for(let i = 0; i < howTimesCall; i++) {
                let male = this.pablicInfo[i].malePopulation; //count male
                let female = this.pablicInfo[i].femalePopulation; //count female
                let ageArray = this.pablicInfo[i].age; //age array
               
                createChart(`graphTarget${i}`, male, female); // call pipe graph
                createChartColumn(`graphTarget${i}`, ageArray); // call column graph
            }
        },
    }
})

export default inject;