function scuberGreetingForFeet(feet){

  let freeSample, upCharge, noRide;

  if (feet <= 400) {
    freeSample = 'This one is on me!';
    return freeSample;
  } else if (feet > 2000 && feet <= 2500) {
    upCharge = 'I will gladly take your thirty bucks.';
    return upCharge;
  } else if (feet > 2500) {
    noRide = 'No can do.';
    return noRide;
  }
  
}

function ternaryCheckCity(city){
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(tip){
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
      break;
    case 'not as generous':
      return 'Thank you.'
      break;
    case 'thanks for everything':
      return 'Bye.'
      break;
  }
  return switchOnCharmFromTip()
}