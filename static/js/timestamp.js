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
      var rep = ace.ace_getRep();
      ace.ace_replaceRange(rep.selStart, rep.selEnd, new Date(new Date() - (new Date().getTimezoneOffset()) *60000).toISOString().replace('T',' ').replace(/:[^:]+$/,''));
      ace.ace_focus();
    }, "specialCharacters");
  }
}