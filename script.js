function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function openModal(imgSrc, text, githubLink, liveDemoLink) {
  var modal = document.getElementById("projectModal");
  var modalImg = document.getElementById("modalImg");
  var modalText = document.getElementById("modalText");
  var githubBtn = document.getElementById("githubBtn");
  var liveDemoBtn = document.getElementById("liveDemoBtn");

  modal.style.display = "block";
  modalImg.src = imgSrc;
  modalText.innerHTML = text;
  githubBtn.onclick = function() {
    window.open(githubLink, '_blank');
  };
  liveDemoBtn.onclick = function() {
    window.open(liveDemoLink, '_blank');
  };
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  var modal = document.getElementById("projectModal");
  modal.style.display = "none";
}

window.onclick = function(event) {
  var modal = document.getElementById("projectModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

let currentSlide = 0;

function moveSlide(direction) {
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;
  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
  const sliderWrapper = document.querySelector('.slider-wrapper');
  sliderWrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
}