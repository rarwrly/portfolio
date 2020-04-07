var weapons = [
	'Pruning Shears',
	'Ceremonial Saber',
	'Meteorite',
	'Deadly Mushrooms',
	'Cheese Wire',
	'Freak Magic Accident',
	'Burned Alive',
]

var murder = [
	'The Vicar',
	'Your Sister',
	'The Tearoom Owner',
	'The Farmer who\'s land you sold to the Developers',
	'The Artisnal Cheesemonger',
	'Illigitmate son of a Cult Leader',
	'Bell Ringers',
]


var murderlocation = [
	'Belltower of the Town Church',
	'An Apple Orchard',
	'The Observatory',
	'Your livingroom',
	'A Cheese cave',
]

let index = 0;

function newMurder() {
	var randomNumber = Math.floor(Math.random() * (weapons.length));
	document.getElementById('weaponDisplay').innerHTML = weapons[randomNumber];

	var randomNumber = Math.floor(Math.random() * (murder.length));
	document.getElementById('murderDisplay').innerHTML = murder[randomNumber];

	var randomNumber = Math.floor(Math.random() * (murderlocation.length));
	document.getElementById('murderlocationDisplay').innerHTML = murderlocation[randomNumber];
    
    index = index +1
    console.log (index)
    
const span = document.getElementsByClassName("close")[0];
const modal = document.getElementById("clickModal");
    if (index ===3){
        modal.style.display = "block";
        document.getElementById("modalText").innerHTML = "Getting a bit Grim there...";
        }
    else if(index ===5){
        modal.style.display = "block";
        document.getElementById("modalText").innerHTML = "You might run out of lives if you keep going...";
            }
    else if(index ===7){
        modal.style.display = "block";
        document.getElementById("modalText").innerHTML = "You are dead. x_x";
            }
        span.onclick = function() {
            modal.style.display = "none";
            }
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
                }
            }

}



/*

function{

//Set Element ID
//Set Array list lengeth 

}
Original logic for pulling the list values
function newMurder() {
	var randomNumber = Math.floor(Math.random() * (weapons.length));
	document.getElementById('weaponDisplay').innerHTML = weapons[randomNumber];

	var randomNumber = Math.floor(Math.random() * (murder.length));
	document.getElementById('murderDisplay').innerHTML = murder[randomNumber];

	var randomNumber = Math.floor(Math.random() * (murderlocation.length));
	document.getElementById('murderlocationDisplay').innerHTML = murderlocation[randomNumber];
}*/