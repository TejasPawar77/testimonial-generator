const starElements = document.querySelectorAll(".stars span");
const form = document.getElementById("form");
const track = document.getElementById("track");

let rating = 0;

starElements.forEach((star, index) => {
  star.addEventListener("click", () => {
    rating = index + 1;

    starElements.forEach(s => s.classList.remove("active"));

    for (let i = 0; i < rating; i++) {
      starElements[i].classList.add("active");
    }
  });
});


form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (rating === 0) {
    alert("Please select a rating ⭐");
    return;
  }

  const testimonial = {
    name: document.getElementById("name").value.trim(),
    role: document.getElementById("role").value.trim(),
    message: document.getElementById("feedback").value.trim(),
    stars: "⭐".repeat(rating)
  };

  addTestimonial(testimonial);

  form.reset();
  rating = 0;
  starElements.forEach(s => s.classList.remove("active"));
});

function addTestimonial(testimonial) {
  const card = document.createElement("div");
  card.classList.add("testimonial");

  card.innerHTML = `
    <i class="fa-solid fa-quote-left quote"></i>
    <p class="message">${testimonial.message}</p>
    <div class="stars-display">${testimonial.stars}</div>
    <h4>${testimonial.name}</h4>
    <small>${testimonial.role}</small>
  `;

  track.appendChild(card);

  resetScroll();
}

function resetScroll() {
  track.style.animation = "none";
  track.offsetHeight; 
  track.style.animation = "";
}

function duplicateTrack() {
  if (!track.dataset.duplicated) {
    track.innerHTML += track.innerHTML;
    track.dataset.duplicated = "true";
  }
}

duplicateTrack();