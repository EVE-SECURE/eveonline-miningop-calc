var players = new Player_Collection();
var man_hours = 0.0; //global variable calculating total hours contributed

function Player(name, hours_contributed) {
    //defines and stores data for each player added.
    
    this.name = name;
    this.hours_contributed = hours_contributed;
    this.isk_reward = 0.00;

    this.calculate_reward = function() {
	form_calculate(hours_contributed);
    };
}


function Player_Collection (){
    //object keeps track of how many players there are, and their data
    this.playerCount = 0;
    this.player_col = new Array();
    this.add_player = function(player) {
	this.player_col[this.player_col.length] = player;
	this.playerCount = this.playerCount + 1;
    };

    this.pop_player_data = function() {
	//returns first player in the list's data and removes them from list.
	var new_player_col = [];
	var ret = this.player_col[0];
	var n = 0;
	for(var i = 1; i < this.player_col.length; i = i + 1) {
	    new_player_col[n] = this.player_col[i];
	    n = n + 1;
	}
	this.player_col = new_player_col;
	this.playerCount = this.playerCount -1;
	return ret;
	
    };
    this.calculate_rewards = function() {
	//calculates the rewards for every player, should only be triggered after all have been entered.
	for(var player in this.player_col) {
	    this.player_col[player].form_calculate();
	}
    };
	
}



function create_table(){
    players.calculate_rewards(); //make sure all of the player rewards have been found before creating the table.
    
    var body = document.body;
    alert(body);
    var table = document.createElement("table");
    table.style.width="100%";
    table.style.border = "1px solid black";
    var row = table.insertRow(-1);
    var cell = row.insertCell(-1);
    
    cell.innerHTML = "<strong>Player</strong>";
    cell = row.insertCell(-1);
    cell.innerHTML = "<strong>Hours Contributed</strong>";
    cell = row.insertCell(-1);
    cell.innerHTML = "<strong>Isk Rewarded</strong>";

    while(players.playerCount > 0) {
	//table filling logic
	var player = players.pop_player_data();
	alert("The Player is: " + player);
	row = table.insertRow(-1);
	cell = row.insertCell(-1);
	cell.innerHTML = player.name;
	cell = row.insertCell(-1); //-1 apparently appends for some reason
	cell.innerHTML = player.hours_contributed;

	cell = row.insertCell(-1);
	cell.innerHTML = player.isk_reward;
	
    }
    


    body.appendChild(table);
}


function add_player() {
    var player = new Player(document.getElementById("namefield").value, parseFloat(document.getElementById("hoursfield").value));
    alert(player);
    players.add_player(player);
    alert(player.name + " " + player.hours_contributed);
    document.getElementById("namefield").value = "";
    document.getElementById("hoursfield").value = 0.00;
    man_hours = man_hours + player.hours_contributed();
    
}

function form_calculate(hours_contributed) {
    var op_length = parseFloat(document.getElementById("durationfield").value);
    var total_value = parseFloat(document.getElementById("totasfield").value);

    calculate(hours_contributed, op_length, total_value);
}

function calculate(hours_contributed, op_length, total_value) {
    /* abstract out actual calculation logic, create seperate function
    for form manipulation */
    
    
    
}
