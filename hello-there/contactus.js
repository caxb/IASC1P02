/*runs when button is clicked then displays arrival time and date*/
function contact(){
          var date = new Date().toLocaleDateString();
          var minutes = Math.floor( Math.random(11)*60 );

             document.getElementById("line1").innerHTML= "Hello.";
             document.getElementById("line1").innerHTML= "Don't come to us. We'll come to you. ;)";
             document.getElementById("date").innerHTML= "Arrival Date: " + date;
             document.getElementById("time").innerHTML= "Arrival Time: " + "3: " + minutes + "AM";
}
