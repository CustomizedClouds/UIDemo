$(document).bind('keydown', function(e) {
  if(e.ctrlKey && (e.which == 87)) {
    e.preventDefault();
    var gui = require('nw.gui');
	gui.App.closeAllWindows();
    return false;

  }
});
	
$(document).bind('keydown', function(e) {
  if(e.ctrlKey && (e.which == 67)) {
    e.preventDefault();
require('nw.gui').Window.get().showDevTools();
    return false;

  }
});
	

$(document).bind('keydown', function(e) {
  if(e.ctrlKey && (e.which == 75)) {
    e.preventDefault();

var gui = require('nw.gui');
gui.Window.get().enterKioskMode();

    return false;

  }
});

$(document).bind('keydown', function(e) {
  if(e.ctrlKey && (e.which == 76)) {
    e.preventDefault();

var gui = require('nw.gui');
gui.Window.get().leaveKioskMode();

    return false;

  }
});

$(document).bind('keydown', function(e) {
  if(e.ctrlKey && (e.which == 82)) {
    e.preventDefault();

location.reload();

    return false;

  }
});

$(document).bind('keydown', function(e) {
  if(e.ctrlKey && (e.which == 77)) {
    e.preventDefault();

require('nw.gui').Window.get().maximize();

    return false;

  }
});

$(document).bind('keydown', function(e) {
  if(e.ctrlKey && (e.which == 78)) {
    e.preventDefault();

require('nw.gui').Window.get().minimize();

    return false;

  }
});

$(document).bind('keydown', function(e) {
  if(e.ctrlKey && (e.which == 71)) {
    e.preventDefault();

// Load native UI library.
var gui = require('nw.gui');

// Open URL with default browser.
gui.Shell.openExternal('http://google.com');

    return false;

  }
});