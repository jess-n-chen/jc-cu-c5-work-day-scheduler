// Save Time & Value to Local Storage Upon Click
$(".saveBtn").click(function (event) {
  event.preventDefault();
  var value = $(this).siblings(".time-block").val();
  var time = $(this).parent().attr("id").split("-")[1];
  localStorage.setItem(time, value);
});

// Function to Compare Current Time with Hour Div to Add Styling
var compareTime = function (currentHour) {
  $(".hour-row").each(function () {
    var timeDiv = $(this).attr("id").split("-")[1].trim();

    if (currentHour == timeDiv) {
      $(this).children(".description").addClass("present");
      $(this).children(".description").addClass("white-text");
    } else if (currentHour < timeDiv) {
      $(this).children(".description").removeClass("present");
      $(this).children(".description").addClass("future");
    } else if (currentHour > timeDiv) {
      $(this).children(".description").removeClass("future");
      $(this).children(".description").addClass("past");
    }
  });
};

// Inital Function to Load
var loadDate = function () {
  // Moment.JS Code to Get Current Date/Hour
  var currentDate = moment().format("MMMM Do YYYY");
  var currentHour = moment().format("HH");

  // Get and Display Current Date
  var displayDate = document.getElementById("currentDay");
  displayDate.textContent = currentDate;

  // Call Compare Time Function
  compareTime(currentHour);

  // Set Data from Local Storage
  $("#hour-09 .time-block").val(localStorage.getItem("09"));
  $("#hour-10 .time-block").val(localStorage.getItem("10"));
  $("#hour-11 .time-block").val(localStorage.getItem("11"));
  $("#hour-12 .time-block").val(localStorage.getItem("12"));
  $("#hour-13 .time-block").val(localStorage.getItem("13"));
  $("#hour-14 .time-block").val(localStorage.getItem("14"));
  $("#hour-15 .time-block").val(localStorage.getItem("15"));
  $("#hour-16 .time-block").val(localStorage.getItem("16"));
  $("#hour-17 .time-block").val(localStorage.getItem("17"));
};

// Load Data Upon Page Load
loadDate();
