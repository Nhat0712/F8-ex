var carouselInner = document.querySelector(".carousel-inner");
var nextBtn = document.querySelector(".carousel .next");
var prevBtn = document.querySelector(".carousel .prev");
var dotsContainer = document.querySelector(".carousel-dots");

var itemWidth = carouselInner.clientWidth;
var totalWidth = carouselInner.children.length * itemWidth;
var position = 0;

var startX, currentX, dragThreshold;

var images = document.querySelectorAll(".carousel-inner img");
images.forEach(function (image) {
  image.addEventListener("dragstart", function (e) {
    e.preventDefault();
  });
});

function createDots() {
  dotsContainer.innerHTML = "";
  var children = carouselInner.children;
  for (var i = 0; i < children.length; i++) {
    var dot = document.createElement("span");
    dot.classList.add("dot");
    if (i === 0) {
      dot.classList.add("active");
    }
    (function (index) {
      dot.addEventListener("click", function () {
        position = -index * itemWidth;
        carouselInner.style.translate = `${position}px`;
        updateDots();
      });
    })(i);
    dotsContainer.appendChild(dot);
  }
}

function updateDots() {
  var dots = dotsContainer.children;
  for (var i = 0; i < dots.length; i++) {
    dots[i].classList.toggle("active", position === -i * itemWidth);
  }
}

nextBtn.addEventListener("click", function () {
  if (Math.abs(position) + itemWidth >= totalWidth) {
    return;
  }
  position -= itemWidth;
  carouselInner.style.translate = `${position}px`;
  updateDots();
});

prevBtn.addEventListener("click", function () {
  if (Math.abs(position) === 0) {
    return;
  }
  position += itemWidth;
  carouselInner.style.translate = `${position}px`;
  updateDots();
});

carouselInner.addEventListener("mousedown", function (e) {
  startX = e.clientX;
  dragThreshold = itemWidth / 3;
  carouselInner.addEventListener("mousemove", handleDrag);
  carouselInner.addEventListener("mouseup", endDrag);
  carouselInner.addEventListener("mouseleave", endDrag);
});

function handleDrag(e) {
  currentX = e.clientX;
  var distance = currentX - startX;
  if (distance > dragThreshold) {
    prevBtn.click();
    endDrag();
  } else if (distance < -dragThreshold) {
    nextBtn.click();
    endDrag();
  }
}

function endDrag() {
  carouselInner.removeEventListener("mousemove", handleDrag);
  carouselInner.removeEventListener("mouseup", endDrag);
  carouselInner.removeEventListener("mouseleave", endDrag);
}

createDots();
