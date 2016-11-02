
function getToday() {
  var todaysFullDate = new Date();
  console.log("The full date is: " + todaysFullDate);
  var todaysShortDate = {
    "month": todaysFullDate.getUTCMonth() + 1,
    "day": todaysFullDate.getUTCDate()};
  console.log(todaysShortDate)
  return todaysShortDate;
}


function displayDailyNamedays() {

  var todayDate = getToday();
  console.log(todayDate.day);
  var dailyDisplay = document.getElementById("dailyDisplay");
  dailyDisplay.innerHTML = todayDate.day + "." + todayDate.month;

  var dailyNameDays = nameDays[todayDate.month][todayDate.day];
  var dailyName = "";
  for (i = 0; i < dailyNameDays.length; i++) {
    dailyName += dailyNameDays[i];
    if (i < dailyNameDays.length - 1) {
      dailyName += ", ";
    }
  }
  console.log(dailyName);
  document.getElementById("nameDisplay").innerHTML = dailyName;
}

displayDailyNamedays();


function displayName() {
  var searchDay = document.getElementById("daySelect").value;
  var searchMonth = document.getElementById("monthSelect").value;
  console.log(searchDay);
  console.log(searchMonth);

  if(searchDay <= 31 && searchMonth <= 12) {
    console.log("validation successful, chosen date " + searchDay + "." + searchMonth);

    var nameArray = nameDays[searchMonth][searchDay];
    console.log(nameArray);

    var foundNames = "";
    for (i = 0; i < nameArray.length; i++) {
      foundNames += nameArray[i];
      if (i < nameArray.length - 1) {
        foundNames += ", ";
      }
    }
    console.log(foundNames);
    alert("Namedays on " + searchDay + "." + searchMonth + " are: " + foundNames);
  } else {
    alert("Something went wrong, please check the dates and try again");
  }
}


function displayDate() {

  var allMonths = Object.keys(nameDays);
  for (i = 0; i < allMonths.length; i++) {
  	var singleMonth = nameDays[allMonths[i]];

  	var allDays = Object.keys(singleMonth);
  	for (n = 0; n < allDays.length; n++) {
  		var singleDay = singleMonth[allDays[n]];
      console.log(n + ":::" + singleDay);

      for(j=0; j <singleDay.length; j++) {
        var searchName = document.getElementById("nameInput").value;
        if(searchName === singleDay[j]) {
          console.log("found, month: " + allMonths[i] + " day: " + allDays[n]);
          alert(searchName + "'s nameday is on " + allDays[n] + "." + allMonths[i]);
          return(singleDay[j]);
        }
      }
    }
  }
}
