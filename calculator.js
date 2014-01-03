function modify_height(tableid) {
    //Modifies the number of rows of the table

    var table = document.getElementById(tableid);
    var row_count = table.rows.length;
    var row = table.insertRow(row_count);
    var col_count = table.rows[0].cells.length;
    
    var id_count = 1;
/*    for(var c = 0; c < col_count; c = c + 1) {
	var newcell = row.insertCell(c);
	newcell.innerHTML = table.rows[row_count-1].cells[c].innerHTML;
	newcell.setAttribute("id",table.rows[row_count-1].cells[c].id + 1 );
	alert(newcell.id);
	}*/
}

function add_player(formid) {
    var form = document.getElementById(formid);
    document.writeln("<br>");
    form.createElement("input");
}
function calculate(hours_contributed, total_value, number_of_players) {
    
}

