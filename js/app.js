var description = ["magnificently","poetically","beautifully","artistically","lovingly","tenderly","lovingly","positively","excellently","gracefully","delightfully"];
var action = ["eat","sleep","do homework","watch movies","swim","go shopping","talk","high five","make dinner","squat"];
var goodStuff = ["so awesome","very nicely","super good","excellent","the best","better than most","like a champ","like superman","like a beautiful rat","like a boss"];

function generate(){
  // var i = Math.floor(Math.random()*action.length);
  var how = description[Math.floor(Math.random()*description.length)];
  var did = action[Math.floor(Math.random()*action.length)];
  var what = goodStuff[Math.floor(Math.random()*goodStuff.length)];
  document.getElementById("compliments").innerHTML = "<div>"+"I think"+" "+"you"+" "+how+" "+did+" "+" "+what+" "+"</div>";
}

