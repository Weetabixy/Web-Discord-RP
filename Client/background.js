
'use strict';
var socket = io.connect('http://localhost', {
  reconnection: true
});

setInterval(function () {
  chrome.tabs.query({ active: true, lastFocusedWindow: true }, function (tabs) {
    // Selects the open tab
    var activeTab = tabs[0];
    console.log(activeTab)
    socket.emit("precenseChange", {
      details: activeTab.title,
      state: `Using Chrome ${/Chrome\/([0-9.]+)/.exec(navigator.userAgent)[1]}`,
      largeImageKey: "logo",
      largeImageText: "What? You never used Netscape? You know its fun right?",

    });


  });
}, 7500)
