var time = ["today","yesterday","last year","tomorrow","the day before","last month", "this month","next month","this year","next year","forever","sometimes"];
var action = ["eat","sleep","do homework","watch movies","swim","go shopping","talk","high five","make dinner","squat"];
var compliment = ["awesome","nice","good","excellent","the best","better than most","like a champ","like superman","like a beautiful rat","like a boss"];

function generate(){
  var i = Math.floor(Math.random()*action.length);
  document.getElementById("compliments").innerHTML = "<div>"+"You"+" "+action[i]+" "+" "+compliment[i]+" "+time[i];
}
