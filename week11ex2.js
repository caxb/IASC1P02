var noun= new Array();
var adjective= new Array();

var noun = ["cat", "water bottle", "Sir Isaac Brock", "cucumber", "Britney Spears"];
var adjective = ["splendiferous", "courageous", "majestic","supercalifragilisticexpialidocious","skinny"];

function sentence(){

  var randomNumberNoun= Math.floor( Math.random()*5 );
  var randomNumberAdjective= Math.floor( Math.random()*5 );


  document.getElementById("output").innerHTML+= "What a "+(adjective[randomNumberAdjective]) + " " + (noun[randomNumberNoun]) +"!"+"<br />";

}
