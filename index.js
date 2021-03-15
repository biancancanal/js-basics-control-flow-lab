let response
let dropOff = "Ok, sounds good."
let noDrop = "No go."
let tip


function scuberGreetingForFeet(feet) {
  if (feet <= 400) {
    response = 'This one is on me!';
  }
  else if (feet > 2000 && feet < 2500) {
    response = 'I will gladly take your thirty bucks.';
  }
  else if (feet > 2500) {
    response = 'No can do.';
  }   
  return response
}

function ternaryCheckCity(city) {
  return (city == "NYC" ? dropOff : noDrop);  
}

function switchOnCharmFromTip(tip){
  switch(tip) {
    case 'generous':
      return "Thank you so much.";
    case 'not as generous':
      return "Thank you.";
    default:
      return "Bye.";
  }
}