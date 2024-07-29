document.addEventListener("DOMContentLoaded", function () {
  var countEl = document.querySelector(".count");
  var btnEl = document.querySelector(".get-link");
  var time = 30;
  var start;

  function update(timeStamp) {
    if (!start) {
      start = timeStamp;
    }
    let elapsed = Math.floor((timeStamp - start) / 1000);

    if (elapsed < time) {
      countEl.textContent = time - elapsed;
      requestAnimationFrame(update);
    } else {
      countEl.textContent = 0;
      btnEl.style.color = "#fff";
      btnEl.style.backgroundColor = "#03bdf0";
      btnEl.style.cursor = "pointer";
      btnEl.removeAttribute("disabled");
    }
  }

  function handleVisChange() {
    if (document.hidden) {
      cancelAnimationFrame(update);
    } else {
      start =
        performance.now() - (30 - parseInt(countEl.textContent, 10)) * 1000;
      requestAnimationFrame(update);
    }
  }

  btnEl.addEventListener("click", function () {
    if (countEl.textContent === "0") {
      window.location.href = "https://fullstack.edu.vn/";
    }
  });

  document.addEventListener("visibilitychange", handleVisChange);
  requestAnimationFrame(update);
});
