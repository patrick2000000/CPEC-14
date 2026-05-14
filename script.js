function applyNow() {
  alert("Application received!");
}

document.addEventListener("DOMContentLoaded", () => {

  // CONTACT FORM

  let form = document.getElementById("contactForm");

  if (form) {

    form.addEventListener("submit", function(e) {

      e.preventDefault();

      let name = document.getElementById("name").value;
      let email = document.getElementById("email").value;
      let message = document.getElementById("message").value;
      let msg = document.getElementById("msg");

      if (!name || !email || !message) {

        msg.style.color = "red";
        msg.textContent = "Fill all fields";

      } else {

        msg.style.color = "green";
        msg.textContent = "Sent successfully!";

      }

    });

  }

  // IMAGE SLIDER

  const slides = document.querySelectorAll('.slide');

  let index = 0;

  function showSlides() {

    slides.forEach(slide => {
      slide.classList.remove('active');
    });

    index++;

    if (index >= slides.length) {
      index = 0;
    }

    slides[index].classList.add('active');

  }

  // First Image

  if (slides.length > 0) {

    slides[index].classList.add('active');

    setInterval(showSlides, 3000);

  }

});

// COUNTER

const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {

  counter.innerText = '0';

  const updateCounter = () => {

    const target = +counter.getAttribute('data-target');
    const current = +counter.innerText;

    const increment = target / 100;

    if(current < target){

      counter.innerText = Math.ceil(current + increment);

      setTimeout(updateCounter, 30);

    } else {

      counter.innerText = target + "+";

    }

  };

  updateCounter();

});


// IMAGE SLIDER

const slides = document.querySelectorAll('.slide');

let index = 0;

function showSlides(){

  slides.forEach(slide => {
    slide.classList.remove('active');
  });

  index++;

  if(index >= slides.length){
    index = 0;
  }

  slides[index].classList.add('active');

}

setInterval(showSlides, 3000);


const slides = document.querySelectorAll(".slide");

let current = 0;

function changeSlide(){

  slides.forEach(slide => {
    slide.classList.remove("active");
  });

  current++;

  if(current >= slides.length){
    current = 0;
  }

  slides[current].classList.add("active");

}

setInterval(changeSlide, 3000);


