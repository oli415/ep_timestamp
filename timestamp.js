var eejs = require('ep_etherpad-lite/node/eejs');
var settings = require('ep_etherpad-lite/node/utils/Settings');
var Changeset = require("ep_etherpad-lite/static/js/Changeset");

exports.eejsBlock_editbarMenuLeft = function (hook_name, args, cb) {
  args.content = args.content + eejs.require("ep_timestamp/templates/editbarButton.ejs");
  return cb();
}

exports.eejsBlock_scripts = function (hook_name, args, cb){
  args.content = '<script src="../static/plugins/ep_timestamp/static/js/timestamp.js"></script>' + args.content;
}

exports.eejsBlock_styles = function (hook_name, args, cb){
  args.content = args.content + '<link href="../static/plugins/ep_timestamp/static/css/insertTimestamp.css" rel="stylesheet">';
}