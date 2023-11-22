document.getElementById("Btn").addEventListener("click", Bottles);


function Bottles () {
	for (let i=99; i>=1; i--) {
			let Lyric = "";
		if (i>2) {
	Lyric = (i) + ' bottles of beer on the wall,' + (i) + ' bottles of beer' +
	' take one down and pass it around,' +  (i-1)  + ' bottles of beer on the wall'
		}
		document.write(Lyric);
	}		
	
	let Bottle1 = document.write ('1 bottle of beer on the wall, 1 bottle of beer take one down and pass it around, no more bottles of beer on the wall')
	let NoBottle = document.write ('No more bottles of beer on the wall, no more bottles of beer go to the store and buy some more, 99 bottles of beer on the wall')

}



