chrome.storage.sync.set({ on: true });

chrome.storage.sync.get(['on'], function (state) {
  document.getElementsByClassName("input")[0].checked = state
})

document.getElementsByTagName("input")[0].addEventListener("change", function () {
  if (document.getElementsByTagName("input").checked == false) {
    chrome.storage.sync.set({ on: false })
  } else {
    chrome.storage.sync.set({ on: true })
  }
})
