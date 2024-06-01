var textElement = document.getElementById("text");
var originalText = textElement.innerText;
var currentIndex = 0;

function highlightWord() {
  var startIndex = originalText.indexOf(" ", currentIndex);
  var endIndex = (startIndex === -1) ? originalText.length : startIndex;
  var currentWord = originalText.substring(currentIndex, endIndex);
  var newText = originalText.replace(
    currentWord,
    `<span class="highlight">${currentWord}</span>`
  );
  textElement.innerHTML = newText;
  currentIndex = startIndex === -1 ? 0 : endIndex + 1;
}
setInterval(highlightWord, 500);



