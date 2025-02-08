// JavaScript to toggle the menu
document.querySelector('.ham-action').addEventListener('click', function() {
  var nav = document.querySelector('nav');
if (nav.style.display === 'block') {
nav.style.display = 'none';
} else {
nav.style.display = 'block';
}
});


function updateNavDisplay() {
var nav = document.querySelector('nav');
if (window.innerWidth > 768) {
nav.style.display = 'block';
} else {
nav.style.display = 'none';
}
}

// this function will check the screen size when size resized after click on hamburger icon
updateNavDisplay();
window.addEventListener('resize', updateNavDisplay);







//Slider code
let slideIndex = 0;
let timeout;

showSlides();

// Next/previous controls
function plusSlides(n) {
    clearTimeout(timeout);
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    clearTimeout(timeout);
    showSlides(slideIndex = n);
}

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].classList.remove("active");
    }

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }

    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].classList.add("active");

    timeout = setTimeout(showSlides, 3000); 
}



 


 //quantity
 const quantityBtns = document.querySelectorAll('.quantity-btn');
const quantityInput = document.querySelector('.quantity-input');

quantityBtns.forEach(btn => {
  btn.addEventListener('click', handleQuantityChange);
  btn.addEventListener('mouseover', handleHover);
  btn.addEventListener('mouseout', handleHoverOut);
});

function handleQuantityChange(event) {
  const btn = event.target;
  const input = quantityInput;
  const currentValue = parseInt(input.value);

  if (btn.classList.contains('decrease')) {
    input.value = Math.max(currentValue - 1, 1);
  } else if (btn.classList.contains('increase')) {
    input.value = currentValue + 1;
  }
}

function handleHover(event) {
  event.target.classList.add('hover');
}

function handleHoverOut(event) {
  event.target.classList.remove('hover');
}



//authors button popular

// Add an event listener to all links with class "author-item-link"
const authorLinks = document.getElementById('author-btn');

authorLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior (jumping to top)

    // Get the element with the ID "author" (the author container)
    const authorContainer = document.getElementById('popular-author');

    // Scroll smoothly to the author container with an animation
    authorContainer.scrollIntoView({
      behavior: 'smooth'
    });
  });
});
