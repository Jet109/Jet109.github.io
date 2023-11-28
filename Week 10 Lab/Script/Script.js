
Numbers = [17,12,43,45,56,7,8,333,45,34,67];
var Largest = 0;

function ListArray () {
	document.getElementById("Array").innerHTML=Numbers;

}

function LargestNumber () {
	for (let i=0; i<Numbers.length; i++) {
		if (Numbers[i]>Largest) {
		Largest = Numbers[i]
		}
	document.getElementById("Largest").innerHTML=Largest;
	}
}

