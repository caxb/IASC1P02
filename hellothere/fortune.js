/*sayings*/
var fortuneArray= [
'You will meet someone special very soon.',
'Your ability for accomplishment will follow with success.',
'A friend asks only for your time not your money.',
'If you refuse to accept anything but the best, you very often get it.',
'You will meet someone special very soon.',
'A smile is your passport into the hearts of others.',
'You will meet someone special very soon.',
'Your high-minded principles spell success.',
'You will meet someone special very soon.',
'Hard work pays off in the future, laziness pays off now.',
'You will meet someone special very soon.',
'You will meet someone special very soon.',
'Change can hurt, but it leads a path to something better.',
'You will meet someone special very soon.',
'You will meet someone special very soon.',
'Enjoy the good luck a companion brings you.',
'People are naturally attracted to you.',
'Hidden in a valley beside an open stream- This will be the type of place where you will find your dream.',
'You will meet someone special very soon.',
'A chance meeting opens new doors to success and friendship.',
'You will meet someone special very soon.',
'Land is always on the mind of a flying bird.',
'You can make your own happiness.',
'You will meet someone special very soon.',
'You will meet someone special very soon.',
'The greatest risk is not taking one.',
'You will meet someone special very soon.']

/*runs when button is clicked and outputs saying*/
function getFortune(){
  var num = Math.floor((Math.random() * 15) + 1);

        document.getElementById("output").innerHTML= fortuneArray[num];
}
