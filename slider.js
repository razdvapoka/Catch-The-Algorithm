var emblaNode = document.querySelector(".embla");
var options = { loop: false, speed: 100 };

var embla = EmblaCarousel(emblaNode, options);

function setupPrevNextBtns(prevBtn, nextBtn) {
  var prevBtn = document.querySelector(".embla__button--prev");
  var nextBtn = document.querySelector(".embla__button--next");
  prevBtn.addEventListener("click", embla.scrollPrev, false);
  nextBtn.addEventListener("click", embla.scrollNext, false);
}

setupPrevNextBtns();

var locations = ["Moscow", "New York", "Washington"];
var locationElement = document.querySelector("h1");

function updateLocation() {
  var locationIndex = embla.selectedScrollSnap();
  var location = locations[locationIndex];
  locationElement.innerHTML = location;
}

embla.on("select", updateLocation);
updateLocation();
