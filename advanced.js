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
	//console.log(typeof input_date);
	var date_string=input_date.toString();
	//console.log(input_date);
	console.log(date_string.substring(0, date_string.indexOf(" 00")));
	
}

yesterdays_date("Feb 23, 2017");