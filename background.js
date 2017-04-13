
var rng = Math.floor(Math.random() * 8);



document.addEventListener('DOMContentLoaded', function() {
  // var checkPageButton = document.getElementById('voidPage');
  // checkPageButton.addEventListener('click', function() {


    // Executes the js file that replaces all the images on the page
    chrome.tabs.executeScript(null, {
      file: "void.js"
    });

    chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete') {

    // do your things

  }
})

//  }, false);
}, false);
