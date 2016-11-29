    /*This is the array*/
var numArray = ['zero','one','two','three','four','five','six','seven','eight','nine','ten',
                'eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen','twenty',
                'twenty one','twenty two','twenty three','twenty four','twenty five'];
    /*These are variables*/
var firstnumber;
var secondnumber;
var answer;


function getvalue(){
  /*this function grabs two numbers entered by the user and places them into variables*/
  firstnumber = document.getElementById("num1").value;
  secondnumber = document.getElementById("num2").value;


  firstnumber = numArray.indexOf(firstnumber);
  secondnumber = numArray.indexOf(secondnumber);
}

function showanswer(){
    /*this function displays the answer's position from the array*/
    document.getElementById("output").innerHTML= numArray[answer];
}

function add(){
    /*this function grabs the user's input, adds the two numbers, then dislays the answer*/
    getvalue();
    answer= firstnumber + secondnumber;
    showanswer();
}

function subtract(){
    /*this function grabs the user's input, subtracts the two numbers, then dislays the answer*/
    getvalue();
    answer= firstnumber - secondnumber;
    showanswer();
}

function multiply(){
    /*this function grabs the user's input, multiplies the two numbers, then dislays the answer*/
    getvalue();
    answer= firstnumber * secondnumber;
    showanswer();
}

function divide(){
    /*this function grabs the user's input, divides the two numbers, then dislays the answer*/
    getvalue();
    answer= firstnumber / secondnumber;
    showanswer();
}
