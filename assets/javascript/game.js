//Characters have health points, attack power, counter attack power 
/** When the game starts, the player will choose a character by clicking on the fighter's picture. 
	The player will fight as that character for the rest of the game.

* The player must then defeat all of the remaining fighters. 
	Enemies should be moved to a different area of the screen.

* The player chooses an opponent by clicking on an enemy's picture.

* Once the player selects an opponent, that enemy is moved to a `defender area`.

* The player will now be able to click the `attack` button.
    * Whenever the player clicks `attack`, their character damages the defender. 
    The opponent will lose `HP` (health points). These points are displayed
    at the bottom of the defender's picture. 
    * The opponent character will instantly counter the attack. 
    When that happens, the player's character will lose some of their `HP`. 
    These points are shown at the bottom of the player character's picture.*/

var Luke = {
healthPoints: 200,
attackPower: 0,
counterAttackPower: 20,

attack: function(){
	return	Luke.attackPower += 5
},

counterAttack: function(){
	return	Luke.counterAttackPower
}

};

var Obiwan = {
healthPoints: 300,
attackPower: 0,
counterAttackPower: 20,

attack: function(){
	return	Obiwan.attackPower += 3
},

counterAttack: function(){
	return	Obiwan.counterAttackPower
}

};

var DarthVeider = {
healthPoints: 200,
attackPower: 0,
counterAttackPower: 20,

attack: function(){
	return DarthVeider.attackPower += 3
},

counterAttack: function(){
	return	DarthVeider.counterAttackPower
}

};

var DarthMaul = {
healthPoints: 200,
attackPower: 0,
counterAttackPower: 20,

attack: function(){
	return DarthMaul.attackPower += 3
},

counterAttack: function(){
	return	DarthMaul.counterAttackPower
}

};

//Global variables 
var fighter = "";
var defender = "";
var fighterAttack;
var defenderAttack;
var fighterHealth;
var defenderHealth;



//First wait for HTML and CSS content to be loaded 

$("document").ready(function(){
	// $(".obiwan").append(Obiwan.healthPoints);

//Attack must get the other enemy health points and lower it 
//Attack power is increasing every time it attacks 
	$(".attack").on("click", function(){
	
		//Determine fighter to assign attack power and health points
		//Determine defender to assign attack power and health points
		fighter = $(".fighter").attr('class');	
		defender = $(".defender").attr('class');
		console.log(fighter + " :: " + defender);

		//Get defender attack power
		switch(defender){
			case "defender luke":
			defenderAttack = Luke.counterAttack();
			break;
			case "defender obiwan":
			defenderAttack = Obiwan.counterAttack();
			break;
			case "defender darthMaul":
			defenderAttack = DarthMaul.counterAttack();
			break;
			case "defender darthVeider":
			defenderAttack = DarthVeider.counterAttack();
			break;
			default:
			break;			
			console.log(defenderAtack);
		}	

		//Get fighter attack power and health 
		
		switch(fighter){

			case "fighter luke":
			fighterAttack = Luke.attack();
			console.log(fighterAttack);
			Luke.healthPoints -= defenderAttack;
			fighterHealth = Luke.healthPoints;
			
			break;
			case "fighter obiwan":
			fighterAttack = Obiwan.attack();
			Obiwan.healthPoints -= defenderAttack;
			fighterHealth = Obiwan.healthPoints;
			break;
			case "fighter darthMaul":
			fighterAttack = DarthMaul.attack();
			DarthMaul.healthPoints -= defenderAttack;
			fighterHealth = DarthMaul.healthPoints;
			break;
			case "fighter darthVeider":
			fighterAttack = DarthVeider.attack();
			DarthVeider.healthPoints -= defenderAttack;
			fighterHealth = DarthVeider.healthPoints;	
			break;
			default:
			break;
		}
		console.log("Fighter health" + fighterHealth);
		
		//Update defender health 
		switch(defender){
			case "defender luke":
			console.log(Luke.healthPoints);
			Luke.healthPoints -= fighterAttack;
			console.log(Luke.healthPoints);
			defenderHealth = Luke.healthPoints;
			console.log(defenderHealth)
			break;
			case "defender obiwan":
			Obiwan.healthPoints -= fighterAttack;
			defenderHealth = Obiwan.healthPoints;
			console.log(defenderHealth);
			break;
			case "defender darthMaul":
			defenderAtack = DarthMaul.counterAttack();
			DarthMaul.healthPoints -= fighterAttack;
			defenderHealth = DarthMaul.healthPoints;
			break;
			case "defender darthVeider":
			defenderAtack = DarthVeider.counterAttack();
			DarthVeider.healthPoints -= fighterAttack;
			defenderHealth = DarthVeider.healthPoints;
			break;
			default:
			break;
		}
		console.log("Defender Health" + defenderHealth);
	

		//fighterHealth = fighterHealth - defenderAttack;
		console.log(defenderAttack);
		//defenderHealth = defenderHealth - fighterAttack;

		if(fighterHealth <= 0){
			isDefender = false;
			$(".fighter").empty();
			$(".fighter").append("<h1 class = 'btn-danger'>YOU LOSE</h1>");
			fighterHealth = 0;

		}	


		if(defenderHealth <= 0){
			isDefender = false;
			$(".defender").empty();
			console.log($(".enemies").hasClass('obiwan'));
			console.log($(".enemies").children('img').hasClass(defender));
			defenderHealth = 0;
		}

		$("#fighterHealth").html("Health:  " + fighterHealth);
		$("#defenderHealth").html("Health:  " + defenderHealth);


		if($(".enemies").children().length == 1){
		 $(".defender").append("<h1 class = btn-success>YOU WIN</h1>");
		}


		

	});


// Get the info to see if fighter/defender is occupied
var isFighter = false;	
var isDefender = false;

//on clike move the image from selection to fighter or defender 
	$(".obiwan").on("click", function(){

		if(isFighter == false){	
			$(this).addClass("btn-success");
			$(".fighter").append(this).addClass("obiwan");
			$("#fighterHealth").html("Health:  " + Obiwan.healthPoints);

			isFighter = true
			}
		else if(isDefender == false) {
			$(this).addClass("btn-danger");
			$(".defender").append(this).addClass("obiwan");
			$(".fighter").removeClass("obiwan");
			$("#defenderHealth").html("Health:  " + Obiwan.healthPoints);
			isDefender = true;
		}
	});


	$(".luke").on("click", function(){
	
		if(isFighter == false){	
			$(this).addClass("btn-success");
			$(".fighter").append(this).addClass("luke");
			$(".defender").removeClass("luke");
			$("#fighterHealth").html("Health:  " + Luke.healthPoints);
			isFighter = true
			}
		else if(isDefender == false) {
			$(this).addClass("btn-danger");
			$(".defender").append(this).addClass("luke");
			$(".fighter").removeClass("luke");
			$("#defenderHealth").html("Health:  " + Luke.healthPoints);
			isDefender = true;
		}
	});

	$(".darthMaul").on("click", function(){
		
		if(isFighter == false){	
			$(this).addClass("btn-success");
			$(".fighter").append(this).addClass("darthMaul");
			$(".defender").removeClass("darthMaul");
			$("#fighterHealth").html("Health:  " + DarthMaul.healthPoints);
			isFighter = true
			}
		else if(isDefender == false) {
			$(this).addClass("btn-danger");
			$(".defender").append(this).addClass("darthMaul");
			$(".fighter").removeClass("darthMaul");
			$("#defenderHealth").html("Health:  " + DarthMaul.healthPoints);
			isDefender = true;
		}
	});


	$(".darthVeider").on("click", function(){
	
		if(isFighter == false){	
			$(this).addClass("btn-success");
			$(".fighter").append(this).addClass("darthVeider");
			$(".defender").removeClass("darthVeider");
			$("#fighterHealth").html("Health:  " + DarthVeider.healthPoints);
			isFighter = true
			}
		else if(isDefender == false) {
			$(this).addClass("btn-danger");
			$(".defender").append(this).addClass("darthVeider");
			$(".fighter").removeClass("darthVeider");
			$("#defenderHealth").html("Health:  " + DarthVeider.healthPoints);
			isDefender = true;
		}
	});


});