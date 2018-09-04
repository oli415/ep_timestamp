var insert_timestamp = {

  init: function(){
    this.listeners();
  },

  /****
  * Click event handlers
  *****/
  listeners: function(e){
    $('#insertTimestamp').click(function(){
      insert_timestamp.insertTimestamp();
    });
  },

  insertTimestamp: function(){
    var padeditor = require('ep_etherpad-lite/static/js/pad_editor').padeditor;
    return padeditor.ace.callWithAce(function (ace) {
      rep = ace.ace_getRep();
      var currentDate = new Date();
      var useMonthNames = true; //set false if you want to insert the month as a number
      var monthDate;
      if (useMonthNames)
        monthDate = currentDate.getMonth();
      else
        monthDate = -1;
      var month = convertToName(monthDate, currentDate);
      var minutes = currentDate.getMinutes();
      if (minutes < 10 && minutes >= 0)
        minutes = "0" + minutes;
      var datetime = currentDate.getDate() + ". " + month + currentDate.getFullYear() + " - " + currentDate.getHours() + ":" + minutes;
      ace.ace_replaceRange(rep.selStart, rep.selEnd, datetime);
      ace.ace_focus();
    }, "specialCharacters");
  }
}

function convertToName(monthDate, currentDate){
  var month;
  switch (monthDate) {
    case 0:
      month = "Jänner ";
      break;
    case 1:
      month = "Feber ";
      break;
    case 2:
      month = "März ";
      break;
    case 3:
      month = "April ";
      break;
    case 4:
      month = "Mai ";
      break;
    case 5:
      month = "Juni ";
      break;
    case 6:
      month = "Juli ";
      break;
    case 7:
      month = "August ";
      break;
    case 8:
      month = "September ";
      break;
    case 9:
      month = "Oktober ";
      break;
    case 10:
      month = "November ";
      break;
    case 11:
      month = "Dezember ";
      break;
    default:
      month = (currentDate.getMonth()+1) + ". ";
  }
  return month;
}