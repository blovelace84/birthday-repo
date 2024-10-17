// script.js
const inputField = document.getElementById('inputField');
const balloonContainer = document.getElementById('balloon-container');

// Function to create a balloon element
function createBalloon() {
    const balloon = document.createElement('div');
    balloon.classList.add('balloon');
    
    // Randomize balloon position and color
    balloon.style.left = Math.random() * 100 + 'vw';
    balloon.style.backgroundColor = getRandomColor();
    
    // Add the balloon to the container
    balloonContainer.appendChild(balloon);

    // Remove the balloon after its animation ends
    setTimeout(() => {
        balloon.remove();
    }, 5000); // Match this with the animation duration
}

// Helper function to generate random color
function getRandomColor() {
    const colors = ['#FF6347', '#FFD700', '#40E0D0', '#FF69B4', '#8A2BE2'];
    return colors[Math.floor(Math.random() * colors.length)];
}

document.getElementById('balloonButton').addEventListener('click', () => {
    const intervalId = setInterval(createBalloon, 500);
    setTimeout(() => {
        clearInterval(intervalId);
    })
})

// Detect 'happy birthday' input
inputField.addEventListener('input', () => {
    const text = inputField.value.toLowerCase();
    if (text.includes('happy birthday')) {
        // Create a balloon every 500ms
        const intervalId = setInterval(createBalloon, 500);

        // Stop creating balloons after a while
        setTimeout(() => {
            clearInterval(intervalId);
        }, 5000); // Stop after 5 seconds
    }
});

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
