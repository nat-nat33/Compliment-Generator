var time = ["today","yesterday","last year","tomorrow","the day before","last month", "this month","next month","this year","next year","forever","sometimes"];
var action = ["eat","sleep","do homework","watch movies","swim","go shopping","talk","high five","make dinner","squat"];
var goodStuff = ["awesome","nice","good","excellent","the best","better than most","like a champ","like superman","like a beautiful rat","like a boss"];

function generate(){
  // var i = Math.floor(Math.random()*action.length);
  var when = time[Math.floor(Math.random()*time.length)];
  var did = action[Math.floor(Math.random()*action.length)];
  var what = goodStuff[Math.floor(Math.random()*goodStuff.length)];
  document.getElementById("compliments").innerHTML = "<div>"+"You"+" "+did+" "+" "+what+" "+when;
}
