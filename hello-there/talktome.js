/*Variables*/
var name;
var mood;
var happy;
var unhappy;


/*Runs when "Submit" button is clicked*/
function talk(){
          var userinput = document.getElementById("userinput").value;

          /*User says "Hello"*/
          if (userinput == "Hello") {
                   document.getElementById("computerline1").innerHTML= "Hello.";

                   /**Confirm box and states instructions
                   Delays Confirm Box:
                   http://stackoverflow.com/questions/7854820/sleep-pause-wait-in-javascript**/

                   setTimeout(function talk()
                   {var r = confirm("You haven't read the instructions!");
                    if (r ==true){
                      alert("Rules: \n  1. Always tell tell the truth. \n  2. First letter must be capital. \n  3. Don't look around. \n  4. If battery is low charge it. \n  5. Always say goodbye. (Press the button when needed) " );
                      alert("6.Turn lights off");
                      alert("You may now proceed.");
                      document.getElementById("computerline1").innerHTML= "Hello. Are you still there?"}
                    else {
                      alert("Please, read them!");
                      alert("Rules: \n  1. Always tell tell the truth. \n  2. First letter must be capital. \n  3. Don't look around. \n  4. If battery is low charge it. \n  5. Always say goodbye. (Press the button when needed) " );
                      alert("6.Turn lights off");
                      alert("You may now proceed.");
                      document.getElementById("computerline1").innerHTML= "Hello. Are you still there?"}}, 1000)}

          /*Computer talks when "Submit" button is clicked*/
          else if (userinput == "Yes") {
                      name = prompt("Great. :) What's your name?");
                      alert("I'm Doris.");
                      document.getElementById("computerline1").innerHTML= "Nice to meet you " + name + ". :)";
                      document.getElementById("computerline2").innerHTML= "How are you? (Press buttons to answer)"}

          else if (userinput == "No") {
                      name = prompt("Liar. :( What's your name?");
                      alert("I'm Doris.");
                      document.getElementById("computerline1").innerHTML= "Nice to meet you " + name + ". :)";
                      document.getElementById("computerline2").innerHTML= "How are you? (Press buttons to answer)"}

          else { alert("Please follow instructions!")}}

/*Runs when ":)" button is clicked*/
function happy(){
          document.getElementById("computerline1").innerHTML= "That's good to hear.";
          document.getElementById("computerline2").innerHTML= "";
          setTimeout(function happy(){document.getElementById("computerline1").innerHTML= "I'm pretty content myself."}, 3000);
          setTimeout(function happy(){document.getElementById("computerline1").innerHTML= "Do you want to know why?"}, 6000);
          setTimeout(function happy(){document.getElementById("computerline2").innerHTML= "domine deus meus in te speravi conlitebor mksa vis"}, 10000);
          setTimeout(function happy(){document.getElementById("computerline3").innerHTML= "jiidhwuheuehwtibi domine in tdjainoto corde meo qu"}, 11000);
          setTimeout(function happy(){document.getElementById("computerline4").innerHTML= "em adebh modum desiderat cervujkbhjs ad fantes aqu"}, 12000);
          setTimeout(function happy(){document.getElementById("computerline5").innerHTML= "rum.Ouver! Chameron! Aliseon! Mandousin! cbusb vsP"}, 13000);
          setTimeout(function happy(){document.getElementById("computerline6").innerHTML= "emy! Oriet! Mayorus! Esmony! Estiot!Ouver! Chamero"}, 13500);
          setTimeout(function happy(){document.getElementById("computerline1").innerHTML= "Ouver! hvChamervv fobvcn! Alisgjvn cfeon! Mandvgvg"}, 13600);

          setTimeout(function happy(){alert("WARNING: CLICK GOODBYE BEFORE IT'S TOO LATE")}, 10000)}

/*Runs when ":(" button is clicked*/
function unhappy(){
          document.getElementById("computerline1").innerHTML= "I can relate.";
          document.getElementById("computerline2").innerHTML= "";
          setTimeout(function happy(){document.getElementById("computerline1").innerHTML= "Do you want to know why?"}, 6000);
          setTimeout(function happy(){document.getElementById("computerline2").innerHTML= "domine deus meus in te speravi conlitebor mksa vis"}, 10000);
          setTimeout(function happy(){document.getElementById("computerline3").innerHTML= "jiidhwuheuehwtibi domine in tdjainoto corde meo qu"}, 11000);
          setTimeout(function happy(){document.getElementById("computerline4").innerHTML= "em adebh modum desiderat cervujkbhjs ad fantes aqu"}, 12000);
          setTimeout(function happy(){document.getElementById("computerline5").innerHTML= "rum.Ouver! Chameron! Aliseon! Mandousin! cbusb vsP"}, 13000);
          setTimeout(function happy(){document.getElementById("computerline6").innerHTML= "emy! Oriet! Mayorus! Esmony! Estiot!Ouver! Chamero"}, 13500);
          setTimeout(function happy(){document.getElementById("computerline1").innerHTML= "Ouver! hvChamervv fobvcn! Alisgjvn cfeon! Mandvgvg"}, 13600);

          setTimeout(function happy(){alert("WARNING: CLICK GOODBYE BEFORE IT'S TOO LATE")}, 10000)}

/*Runs when "Goodbye Friend" button is clicked*/
function goodbye(){
          alert("We'll meet again, friend.");
          window.location.href = "hello.html"}
