console.log("Advanced Excersises*********************");

function time_convert(minutes) {
	var hours = Math.floor(minutes/60);
	var minutes_rest = minutes%60;
	console.log(minutes+" minutes is: "+hours+" hours "+minutes_rest+" minutes");
}

time_convert(200);

function yesterdays_date(date) {
	var input_date = new Date(date);
	input_date.setDate(input_date.getDate()-1);

	console.log(input_date.toLocaleString('de-DE'));
	console.log(input_date);
	
}

yesterdays_date("Feb 23, 2017");