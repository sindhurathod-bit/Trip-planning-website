'use strict';

/**
 * navbar toggle
 */

function loadDestinations() {
  const container = document.getElementById("destination-cards");
  destinations.forEach(dest => {
    const card = document.createElement("div");
    card.classList.add("destination-card");
    card.innerHTML = `
      <div class="card-image">
        <img src="${dest.image}" alt="${dest.name}">
      </div>
      <div class="card-content">
        <h3 class="card-title">${dest.name}</h3>
        <p class="card-description">${dest.description}</p>
        <div class="card-footer">
          <span class="price">${dest.price} / per person</span>
          <button class="cta-btn" onclick="showDetails('${dest.name}')">Learn More</button>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

function showDetails(destinationName) {
  const dest = destinations.find(d => d.name === destinationName);
  alert(`
    ${dest.name}
    Best Time to Visit: ${dest.bestTime}
    Weather: ${dest.weather}
    Hotels: ${dest.hotels.join(", ")}
    Food: ${dest.food.join(", ")}
  `);
}

window.onload = loadDestinations;

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

const navToggleEvent = function (elem) {
  for (let i = 0; i < navElemArr.length; i++) {
    navElemArr[i].addEventListener("click", function () {
      if (navbar.classList.contains("active")) {
        header.classList.remove("active");
        goTopBtn.classList.remove("active");
      } else {
        header.classList.add("active");
        goTopBtn.classList.add("active");
      }
    });
  }
};
document.getElementById("more-btn").addEventListener("click", function () {
  loadDestinations();
  this.style.display = "none"; // Hide the button after loading
});


