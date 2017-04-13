
var rng = Math.floor(Math.random() * 8);
audio.play();


document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('voidPage');
  checkPageButton.addEventListener('click', function() {


  // Executes the js file that replaces all the images on the page
  chrome.tabs.executeScript(null, {
    file: "void.js"
  });

  }, false);
}, false);
