function getOutput(){
  var num1= document. getElementById("num1").value;
  var num2= document. getElementById("num2").value;

  var rightNumber1 = Number(num1);
  var rightNumber2 = Number(num2);

  var total= rightNumber1 + rightNumber2;

  document.getElementById("output").textContent=total;
}
