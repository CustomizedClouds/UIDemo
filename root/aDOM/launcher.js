var gui = require('nw.gui');

function button1(){

	var win = gui.Window.open ('accordions.html', {
      position: 'center',
      width: 1100,
      height: 850,
    icon: "icon.png",
    toolbar: false
    });

}
function button2(){

	var win = gui.Window.open ('calendar.html', {
      position: 'center',
      width: 1100,
      height: 850,
    icon: "icon.png",
    toolbar: false
    });

}
function button3(){

	var win = gui.Window.open ('compose.html', {
      position: 'center',
      width: 800,
      height: 900,
    icon: "icon.png",
    toolbar: false
    });

}
function button4(){

	var win = gui.Window.open ('forms.html', {
      position: 'center',
      width: 1100,
      height: 850,
    icon: "icon.png",
    toolbar: false
    });

}
function button5(){

	var win = gui.Window.open ('gallery.html', {
      position: 'center',
      width: 1100,
      height: 850,
    icon: "icon.png",
    toolbar: false
    });

}
function button6(){

	var win = gui.Window.open ('inbox.html', {
      position: 'center',
      width: 1100,
      height: 850,
    icon: "icon.png",
    toolbar: false
    });

}
function button7(){

	var win = gui.Window.open ('knobs.html', {
      position: 'center',
      width: 1100,
      height: 850,
    icon: "icon.png",
    toolbar: false
    });

}
function button8(){

	var win = gui.Window.open ('charts.html', {
      position: 'center',
      width: 1100,
      height: 850,
    icon: "icon.png",
    toolbar: false
    });

}
function button9(){

	var win = gui.Window.open ('notifications.html', {
      position: 'center',
      width: 700,
      height: 500,
    icon: "icon.png",
    toolbar: false
    });

}
function button10(){

	var win = gui.Window.open ('presence.html', {
      position: 'center',
      width: 550,
      height: 700,
    icon: "icon.png",
    toolbar: false
    });

}
function button11(){

	var win = gui.Window.open ('sliders.html', {
      position: 'center',
      width: 1100,
      height: 850,
    icon: "icon.png",
    toolbar: false
    });

}
function button12(){

	var win = gui.Window.open ('tables.html', {
      position: 'center',
      width: 1100,
      height: 850,
    icon: "icon.png",
    toolbar: false
    });

}
function button13(){

	var win = gui.Window.open ('tables2.html', {
      position: 'center',
      width: 1100,
      height: 850,
    icon: "icon.png",
    toolbar: false
    });

}
function button14(){

	var win = gui.Window.open ('tabs.html', {
      position: 'center',
      width: 1100,
      height: 850,
    icon: "icon.png",
    toolbar: false
    });

}
function button15(){

	var win = gui.Window.open ('timeline.html', {
      position: 'center',
      width: 1100,
      height: 850,
    icon: "icon.png",
    toolbar: false
    });

}
function button16(){

	var win = gui.Window.open ('todos.html', {
      position: 'center',
      width: 650,
      height: 850,
    icon: "icon.png",
    toolbar: false
    });

}
function button17(){

	var win = gui.Window.open ('uploader.html', {
      position: 'center',
      width: 1100,
      height: 850,
    icon: "icon.png",
    toolbar: false
    });

}
function button18(){

	var win = gui.Window.open ('users.html', {
      position: 'center',
      width: 1100,
      height: 850,
    icon: "icon.png",
    toolbar: false
    });

}
function button19(){

	var win = gui.Window.open ('wizard.html', {
      position: 'center',
      width: 1100,
      height: 850,
    icon: "icon.png",
    toolbar: false
    });

}
function button20(){

	var win = gui.Window.open ('sliders.html', {
      position: 'center',
      width: 1100,
      height: 850,
    icon: "icon.png",
    toolbar: false
    });

}
function button21(){

	var win = gui.Window.open ('login.html', {
      position: 'center',
      width: 1100,
      height: 850,
    icon: "icon.png",
    toolbar: false
    });

}
function ServerTest(){

var gui = require('nw.gui');
gui.Shell.openExternal('http://127.0.0.1:8000');
    
}

function OpenRoot(){

gui.Shell.showItemInFolder('./../.root');
}

function CreateFolder(){
fs = require('fs');
fs.mkdir('./../folder');
}

function CreateFile(){
fs = require('fs');
fs.writeFile('./../folder/file.txt', 'Hello CloudClient!');
}