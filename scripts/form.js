import $ from 'jquery';
import DataTable from 'dataTables';

export default function() {
    $('#table_id').DataTable({
        searching: false,
        ordering:  false,
        select: false,
        lengthChange: false,
        "paging": false
     });
}