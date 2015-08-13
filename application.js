function solveMod(){
	var numOne = document.getElementById("numberOne");
	var numTwo = document.getElementById("numberTwo");
	var output = document.getElementById("output");
	
	output.innerHTML = "";
	 
	for (var j = 1; j <= numTwo.value; j++) {
		
		for (var i = 1; i <= numOne.value; i++) {
			output.innerHTML += i + " ";	
		}
	}	
}
