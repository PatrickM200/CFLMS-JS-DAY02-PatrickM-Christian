console.log("Intermediate Excersises***********************");
function capitalize_first_letter(string) {
	console.log(string.charAt(0).toUpperCase()+string.substring(1,string.length)); 
}

capitalize_first_letter('i am a web developer')

function average_grade(math, physics, english) {
	if (typeof math != "number" || typeof physics != "number" || typeof english != "number") {
		console.log("Please provide numbers.");
	} else {
		var sum = math + physics + english;
		var average = sum / 3;
		console.log("Sum: "+sum+"\nAverage: "+average);
	}
}

//if (test1 && test 2)

average_grade(1,2,3);

var a="a";
//var a=1;
//console.log("type is: "+typeof);

average_grade(a,3,1);
average_grade(1,a,1);
average_grade(1,3,a);
