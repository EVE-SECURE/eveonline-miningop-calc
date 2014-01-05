var for_mcount = 1;
var ship_hours = 1;
var players = new Player_Collection();

function Player(name, hours_contributed) {
    //defines and stores data for each player added.
    
    this.name = name;
    this.hours_contributed = hours_contributed;
}


function Player_Collection (){
    //object keeps track of how many players there are, and their data
    this.playerCount = 1;
    this.players = new Array();
    this.add_player = function(player) {
	players[players.length] = player;
	this.playerCount = this.playerCount + 1
    };

    this.pop_player_data = function() {
	//returns first player in the list's data and removes them from list.
	new_players = [];
	ret = players[0];
	var n = 0
	for(var i = 1; i < players.length; i = i + 1) {
	    new_players[n] = players[i];
	    n = n + 1;
	}
	players = new_players;
	this.playerCount = this.playerCount -1;
	return ret;
	
    };
}



function create_table(){
    var body = document.body;
    alert(body);
    var table = document.createElement("table");
    table.style.width="100%";
    table.style.border = "1px solid black";
    var row = table.insertRow(table.length);
    var cell = row.insertCell();
    cell.innerHTML = "<strong>Player</strong>";
    cell = row.insertCell();
    cell.innerHTML = "<strong>Hours Contributed</strong>";
    cell = row.insertCell();
    cell.innerHTML = "<strong>Isk Rewarded</strong>";

    while(players.playerCount > 0) {
	//table filling logic
	player = players.pop_player_data();
	row = table.insertRow();
	cell = row.insertCell();
	cell.innerHTML = player.name;
	cell = row.insertCell();
	cell.innerHTML = player.hours_contributed;
    }
    


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
    var player = new Player(document.getElementById("namefield"), parseInt(document.getElementById("hoursfield")));
    players.add_player(player);
    document.getElementById("namefield").value = "";
    document.getElementById("hoursfield").value = 0.00;

}



function calculate(hours_contributed, op_length, total_value) {
    /* abstract out actual calculation logic, create seperate function
    for form manipulation */
    
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
