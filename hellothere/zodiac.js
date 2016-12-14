/*This is the array*/
var monthArray = ['January','February','March','April','May','June','July','August','September','October','November',
            'December'];
var zodiacArray = ['Aquarius','Pisces','Aries','Taurus','Gemini','Cancer','Leo','Virgo','Libra','Scorpio','Sagittarius','Capricorn']


/*These are variables*/
var month;
var day;

/*This runs when button is pressed*/
function getZodiac(){
  month = document.getElementById("month").value;
  day = document.getElementById("day").value;
  month = monthArray.indexOf(month);

  /*Aquarius*/
  if (month==0 || month==1){
    if(day>=20 || day<=18){
      document.getElementById("output").innerHTML= "You are an "+ zodiacArray[0];
    }
  }

  /*Pisces*/
  else if (month==1 || month==2){
    if(day>=19 || day<=20){
      document.getElementById("output").innerHTML= "You are a "+ zodiacArray[1];
    }
  }

  /*Aries*/
  else if (month==2 || month==3){
    if(day>=21 || day<=19){
      document.getElementById("output").innerHTML= "You are an "+ zodiacArray[2];
    }
  }

  /*Taurus*/
  else if (month==3 || month==4){
    if(day>=20 || day<=20){
      document.getElementById("output").innerHTML= "You are a "+ zodiacArray[3];
    }
  }

  /*Gemini*/
  else if (month==4 || month==5){
    if(day>=21 || day<=20){
      document.getElementById("output").innerHTML= "You are a "+ zodiacArray[4];
    }
  }

  /*Cancer*/
  else if (month==5 || month==6){
    if(day>=21 || day<=22){
      document.getElementById("output").innerHTML= "You are a "+ zodiacArray[5];
    }
  }

  /*Leo*/
  else if (month==6 || month==7){
    if(day>=23 || day<=22){
      document.getElementById("output").innerHTML= "You are a "+ zodiacArray[6];
    }
  }

  /*Virgo*/
  else if (month==7 || month==8){
    if(day>=23 || day<=22){
      document.getElementById("output").innerHTML= "You are a "+ zodiacArray[7];
    }
  }

  /*Libra*/
  else if (month==8 || month==9){
    if(day>=23 || day<=22){
      document.getElementById("output").innerHTML= "You are an "+ zodiacArray[8];
    }
  }

  /*Scorpio*/
  else if (month==9 || month==10){
    if(day>=23 || day<=21){
      document.getElementById("output").innerHTML= "You are a "+ zodiacArray[9];
    }
  }

  /*Sagittarius*/
  else if (month==10 || month==11){
    if(day>=22 || day<=21){
      document.getElementById("output").innerHTML= "You are an "+ zodiacArray[10];
    }
  }

  /*Capricorn*/
  else if (month==11 || month==0){
    if(day>=22 || day<=19){
      document.getElementById("output").innerHTML= "You are an "+ zodiacArray[11];
    }
  }

  else{
    document.getElementById("output").innerHTML= "Error. Please submit your birth month and day again."
  }

}
