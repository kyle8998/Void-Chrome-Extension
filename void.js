/* Implements the button */
var images = document.getElementsByTagName('img'), length = images.length;
var words = document.getElementsByTagName('*'), tlength = words.length;

var memes = [
	'http://www.barebooks.com/wp-content/uploads/2013/10/GM05.gif',


];


for (var i = 0; i < length; i++) {
	var memeIndex = Math.floor(getRandomImage(memes)); //Gets index of memes array
    images[i].src = memes[memeIndex];
    // document.body.style.backgroundImage = "url('http://www.barebooks.com/wp-content/uploads/2013/10/GM05.gif')";
 }



function getRandomImage(imageArray) {
  	return Math.floor(Math.random() * imageArray.length);
}


var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
			var replacedText = text.replace(/the/gi, 'Image could not load');

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}
