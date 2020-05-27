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


