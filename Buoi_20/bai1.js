function highlight() {
  const textElement = document.getElementById("text");
  let current = 0;

  function highlightText() {
    const text = textElement.innerText;
    let wordStart = current;
    let wordEnd = text.indexOf(" ", current);
    console.log(wordEnd);
    if (wordEnd === -1) {
      wordEnd = text.length;
    }
    const newText =
      text.substring(0, wordStart) +
      "<span> " +
      text.substring(wordStart, wordEnd) +
      " </span>" +
      text.substring(wordEnd);

    textElement.innerHTML = newText;
    setTimeout(() => {
      current = wordEnd + 1;
      if (current >= text.length) {
        current = 0;
      }
      highlightText();
    }, 200);
  }

  highlightText();
}

highlight();
