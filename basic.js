function crystalGazer(job_title, location, partners_name, number_childrens) {

console.log("You will be a "+job_title+"in "+location+"and married to "+partners_name+"with "+number_childrens)
}

crystalGazer("Developer", "Vienna", "X", 2);


function ageCalculator(byear) {
  var year = new Date().getFullYear()
  var age = (year - byear)
  console.log("You are either "+age+" or "+(age-1))
}

ageCalculator(1990);


function degToRad(degrees) {
  var radians = degrees * Math.PI/180

  console.log("radians "+radians)
}

degToRad(90);

function area_n_volume(width, height, depth) {
	var area = width * height;
	var volume = area * depth;
	console.log("Area is: "+area+"\nVolume is: "+volume);
}

area_n_volume(1, 10, 2);

var multipliers = [1,3,7,10,2];

function product_of_array(array) {
	var result = array[0];
	for (var i = 1; i < array.length; i++) {
		result*=array[i];
	}
	console.log(result);
}

product_of_array(multipliers);