function countUntilUserInput(){

  var userinput= document.getElementById("userinput").value;

  for (count=0;count<=userinput;count++){

    document.getElementById("output").innerHTML+= count +"<br />";

  }

}
