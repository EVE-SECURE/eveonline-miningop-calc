var form_count = 1;
var player_amount = 1; //the total amount of players who particpated
var ship_hours = 1;
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
    //var new_player = new FieldSet("andrew");
    
}



function calculate(hours_contributed, op_length, total_value) {
    /* abstract out actual calculation logic, create seperate function
    for form manipulation */
    var hour_worth = total_value / (ship_hours * 1.00) ; //parens to guarantee float division
    alert(hour_worth);
    return hours_contributed * hour_worth;
}


function form_calculate(output_form) {
    if( output_form === undefined) {
	output_form = document.getElementById("rewardfield");
    }
    var op_length = parseInt(document.getElementById("durationfield").value);

    var hours_contrib = parseInt(document.getElementById("hoursfield").value);
    ship_hours = ship_hours + hours_contrib;
    var total_val = parseInt(document.getElementById("totalfield").value);
    output_form.value = calculate(hours_contrib, op_length, total_val);
}
