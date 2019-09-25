
'use strict';
var socket = io.connect('http://localhost', {
  reconnection: true
});

setInterval(function () {
  browser.tabs.query({ active: true, lastFocusedWindow: true }, function (tabs) {
    // Selects the open tab
    var activeTab = tabs[0];
    
    var data = {
      details: activeTab.title,
      state: `Using ${bowser.name} ${bowser.version}`,
      largeImageKey: "logo",
      largeImageText: "What? You never used Netscape? You know its fun right?",

    }
    console.log(data)
    socket.emit("precenseChange", data);


  });
}, 7500)
