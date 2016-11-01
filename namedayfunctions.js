

//Get todays date format is Mon Oct 31 2016 15:09:03 GMT+0200 (EET)
function getToday() {
  var todaysFullDate = new Date();
  console.log("The full date is: " + todaysFullDate);
  var todaysShortDate = {
    "month": todaysFullDate.getUTCMonth() + 1,
    "day": todaysFullDate.getUTCDate()};
  console.log(todaysShortDate)
  return todaysShortDate;
}

// Take the date and diplay it in the div
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
      dailyName += ", "
    }
  }
  console.log(dailyName);
  document.getElementById("nameDisplay").innerHTML = dailyName;
}

displayDailyNamedays();
