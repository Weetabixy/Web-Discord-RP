
'use strict';
var socket = io.connect('http://localhost', {
  reconnection: true
});

setInterval(function () {
  chrome.tabs.query({ active: true, lastFocusedWindow: true }, function (tabs) {

    // since only one tab should be active and in the current window at once
    // the return variable should only have one entry
    var activeTab = tabs[0];
    console.log(activeTab)
    socket.emit("precenseChange", {
      details: activeTab.title,
      state: `Using Chrome ${/Chrome\/([0-9.]+)/.exec(navigator.userAgent)[1]}`,
      largeImageKey: "logo",
      largeImageText: "What? You never used Netscape? You know its fun right?",
      startTimestamp: new Date().getTime() // or do whatever you need

    });


  });
}, 7500)
