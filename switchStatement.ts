let day = 2;
let dayName;
    
switch (day){
    case 1:
        dayName = 'Monday';
        break;
    case 2:
        dayName = 'Tuesday';
        break;
    case 3:
        dayName = 'Wednesday';
        break;
    case 4:
        dayName = 'Thursday';
        break;
    case 5:
        dayName = 'Friday';
        break;
     default:
        dayName = 'Weekends';
  }

  console.log('It $(dayName)');