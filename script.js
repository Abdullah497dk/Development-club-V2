//!menu
const hamMenu = document.querySelector(".ham-menu");

const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});


//!moving mouse

const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
  "#2b72ff",
  "#1355da",
  "#0146cf",
  "#3255bf",
  "#2449b9",
  "#1b41b5",
  "#2c16bc",
  "#1d07ad",
  "#48005f",
  "#4907ad",
  "#3e009b",
  "#370089",
  "#b22c5e",
  "#b22c5e",
  "#ac265e",
  "#9c155f",
  "#950f5f",
  "#830060",
  "#7c0060",
  "#680060",
  "#60005f",
  "#000"
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
});

function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
});

    requestAnimationFrame(animateCircles);
}

animateCircles();


//! count stats start
document.addEventListener('DOMContentLoaded', () => {
  let counterElement = document.getElementById('counter-comleted-projects');
  let count = 0;
  let hasCounted = false;
  
  // Speed settings
  const targetNumber = 5; // The number to count up to
  const duration = 1; // Duration in seconds
  const interval = 10; // Interval time in milliseconds
  const step = targetNumber / (duration * 1000 / interval); // Step size per interval
  
  function incrementCounter() {
      if (hasCounted) return;
      hasCounted = true;

      let intervalId = setInterval(() => {
          count += step;
          if (count >= targetNumber) {
              count = targetNumber; // Ensure it doesn't exceed the target
              clearInterval(intervalId);
          }
          counterElement.textContent = Math.floor(count);
      }, interval);
  }

  let observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
          incrementCounter();
          observer.disconnect(); // Stop observing once the counting starts
      }
  });

  observer.observe(counterElement);
});


document.addEventListener('DOMContentLoaded', () => {
  let counterElement = document.getElementById('counter-continuing-projects');
  let count = 0;
  let hasCounted = false;
  
  // Speed settings
  const targetNumber = 11; // The number to count up to
  const duration = 1; // Duration in seconds
  const interval = 10; // Interval time in milliseconds
  const step = targetNumber / (duration * 1000 / interval); // Step size per interval
  
  function incrementCounter() {
      if (hasCounted) return;
      hasCounted = true;

      let intervalId = setInterval(() => {
          count += step;
          if (count >= targetNumber) {
              count = targetNumber; // Ensure it doesn't exceed the target
              clearInterval(intervalId);
          }
          counterElement.textContent = Math.floor(count);
      }, interval);
  }

  let observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
          incrementCounter();
          observer.disconnect(); // Stop observing once the counting starts
      }
  });

  observer.observe(counterElement);
});


document.addEventListener('DOMContentLoaded', () => {
  let counterElement = document.getElementById('counter-mail-sent');
  let count = 0;
  let hasCounted = false;
  
  // Speed settings
  const targetNumber = 3; // The number to count up to
  const duration = 1; // Duration in seconds
  const interval = 10; // Interval time in milliseconds
  const step = targetNumber / (duration * 1000 / interval); // Step size per interval
  
  function incrementCounter() {
      if (hasCounted) return;
      hasCounted = true;

      let intervalId = setInterval(() => {
          count += step;
          if (count >= targetNumber) {
              count = targetNumber; // Ensure it doesn't exceed the target
              clearInterval(intervalId);
          }
          counterElement.textContent = Math.floor(count);
      }, interval);
  }

  let observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
          incrementCounter();
          observer.disconnect(); // Stop observing once the counting starts
      }
  });

  observer.observe(counterElement);
});


document.addEventListener('DOMContentLoaded', () => {
  let counterElement = document.getElementById('counter-Awards-Received');
  let count = 0;
  let hasCounted = false;
  
  // Speed settings
  const targetNumber = 1; // The number to count up to
  const duration = 1; // Duration in seconds
  const interval = 10; // Interval time in milliseconds
  const step = targetNumber / (duration * 1000 / interval); // Step size per interval
  
  function incrementCounter() {
      if (hasCounted) return;
      hasCounted = true;

      let intervalId = setInterval(() => {
          count += step;
          if (count >= targetNumber) {
              count = targetNumber; // Ensure it doesn't exceed the target
              clearInterval(intervalId);
          }
          counterElement.textContent = Math.floor(count);
      }, interval);
  }

  let observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
          incrementCounter();
          observer.disconnect(); // Stop observing once the counting starts
      }
  });

  observer.observe(counterElement);
});

//! count stats end