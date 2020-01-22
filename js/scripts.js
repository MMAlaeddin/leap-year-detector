// Back-end (business) logic:
var leapYear = function(year) {
  if (year % 4 === 0) {
    return true;
  }else {
    return false;
  }
};


// Front-end logic:
$(document).ready(function(){
  $("form#leap-year").submit(function(event){
    event.preventDefault();
    var year = parseInt($("input#year").val());
    $("#result").text(leapYear(year));
  });
});