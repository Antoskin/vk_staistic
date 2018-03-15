
export default function tabs() {
    $('.batn').click( function() {
        let th = $(this);
        if(th.hasClass('batn-tabl')) {
            $('.siblin').removeClass('active');
            $('.target-table').addClass('active');
        } else if(th.hasClass('batn-graf')) {
            $('.siblin').removeClass('active');
            $('.target-graph').addClass('active');
        }
    });
}