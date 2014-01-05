var form_count = 1;
var ship_hours = 1;

function Player(name, hours_contributed) {
    //defines and stores data for each player added.
    
    this.name = name;
    this.hours_contributed = hours_contributed;
}


function Player_Collection (){
    //object keeps track of how many players there are, and their data
    this.playerCount = 1;
    this.players = new Array();

    this.pop_player_data = function() {
	//returns first player in the list's data and removes them from list.
	new_players = [];
	return [players[0]];
    }
}



function create_table(){
    var body = document.body;
    alert(body);
    var table = document.createElement("table");
    table.style.width="100%";
    table.style.border = "1px solid black";
    var row = table.insertRow(table.length);
    var cell = row.insertCell();

    
    for(var p in players) {
	row = table.insertRow();
	for (var c = 0; c < 3; c = c + 1) {
	    cell = row.insertCell();
	    cell.innerHTML = players[p][c];
	}

    }

    
    cell.innerHTML = "<strong>Player</strong>";
    cell = row.insertCell();
    cell.innerHTML = "<strong>Hours Contributed</strong>";
    cell = row.insertCell();
    cell.innerHTML = "<strong>Isk Rewarded</strong>";
        
    body.appendChild(table);
}


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

function add_player() {
    alert(players);
    alert(players.length);
    var index = players.length;
    players[index][0] = document.getElementById("namefield");
    players[index][1] = document.getElementById("hoursfield");
    
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
