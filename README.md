🚀 Building a Testimonial Generator with Star Rating, Local Storage & Swipe Slider
Modern web apps aren’t just about forms — they’re about experience, persistence, and interaction.
In this blog, we’ll build a Testimonial Generator from scratch using plain JavaScript, and level it up with:
⭐ Interactive star rating
💾 Persistent data using localStorage
🎯 Dynamic testimonial rendering
👉 Drag / swipe slider (like Netflix)
By the end, you’ll have a real portfolio-worthy project.

🧩 Project Overview
We are building a system where users can:
Enter their name, role, and feedback
Select a star rating
Submit the form
See their testimonial appear instantly
Keep data even after refresh
Scroll testimonials using swipe/drag

🎨 Step 1: UI Structure
We start with a simple form:

<form id="form">
  <input type="text" id="name" placeholder="Your Name" required>
  <input type="text" id="role" placeholder="Your Role" required>
  <textarea id="feedback" placeholder="Your Feedback..." required></textarea>

  <div class="stars">
    <span>★</span>
    <span>★</span>
    <span>★</span>
    <span>★</span>
    <span>★</span>
  </div>

<button type="submit">Add Testimonial</button>

</form>

And a slider container:

<div class="slider">
  <div class="slide-track" id="track"></div>
</div>

⭐ Step 2: Star Rating Logic
We track which star is clicked and visually highlight it.
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

💡 Key idea:
We use the index to determine how many stars should be active.

📝 Step 3: Creating Testimonial Object
Instead of directly updating UI, we create a data object:
const testimonial = {
name: document.getElementById("name").value.trim(),
role: document.getElementById("role").value.trim(),
message: document.getElementById("feedback").value.trim(),
stars: "⭐".repeat(rating)
};

👉 This is important for scalability and clean architecture.

🎯 Step 4: Rendering UI Dynamically
We create testimonial cards on the fly:
function addTestimonial(testimonial) {
const card = document.createElement("div");
card.classList.add("testimonial");

card.innerHTML = `     <p>${testimonial.message}</p>
    <div>${testimonial.stars}</div>
    <h4>${testimonial.name}</h4>
    <small>${testimonial.role}</small>
  `;

track.appendChild(card);
}

💾 Step 5: Persist Data with localStorage
Without persistence, data disappears on refresh.
function saveToLocalStorage(testimonial) {
let data = JSON.parse(localStorage.getItem("testimonials")) || [];
data.push(testimonial);
localStorage.setItem("testimonials", JSON.stringify(data));
}

Load Data on Refresh
function loadTestimonials() {
let data = JSON.parse(localStorage.getItem("testimonials")) || [];
data.forEach(t => addTestimonial(t));
}

loadTestimonials();

✅ Now your app behaves like a real product.

👉 Step 6: Drag / Swipe Slider (Netflix Style)
Instead of auto-scrolling, we add manual interaction.
Mouse Drag
let isDragging = false;
let startX;

slider.addEventListener("mousedown", (e) => {
isDragging = true;
startX = e.pageX;
});

slider.addEventListener("mousemove", (e) => {
if (!isDragging) return;
const move = e.pageX - startX;
track.style.transform = `translateX(${move}px)`;
});

slider.addEventListener("mouseup", () => {
isDragging = false;
});

Mobile Swipe Support
slider.addEventListener("touchstart", (e) => {
startX = e.touches[0].clientX;
});

slider.addEventListener("touchmove", (e) => {
const move = e.touches[0].clientX - startX;
track.style.transform = `translateX(${move}px)`;
});

📱 Now your app works on both desktop and mobile.

⚠️ Important Design Decision
You must choose one:
Option
Description
Auto-scroll
Smooth animation
Drag/Swipe
User-controlled

👉 Combining both leads to conflicts.

🧠 What You Learned
This project covers real frontend concepts:
DOM manipulation
Event handling
State management
Data persistence
Gesture-based UI
Component-based thinking

🚀 Final Result
You now have a:
⭐ Interactive UI
💾 Persistent application
🎯 Dynamic rendering system
👉 Modern swipe experience
This is no longer a “beginner project” — it’s a portfolio-level build.

🔥 Next Steps
If you want to go further:
Convert this into React (useState + useEffect)
Add edit/delete testimonials
Store data in a backend (Node.js + DB)
Add authentication

👋 Closing Thought
Great frontend developers don’t just build UI —
they build interactive, state-driven experiences.
And this project is a solid step in that direction 🚀
🚀 Building a Testimonial Generator with Star Rating, Local Storage & Swipe Slider
Modern web apps aren’t just about forms — they’re about experience, persistence, and interaction.
In this blog, we’ll build a Testimonial Generator from scratch using plain JavaScript, and level it up with:
⭐ Interactive star rating
💾 Persistent data using localStorage
🎯 Dynamic testimonial rendering
👉 Drag / swipe slider (like Netflix)
By the end, you’ll have a real portfolio-worthy project.

🧩 Project Overview
We are building a system where users can:
Enter their name, role, and feedback
Select a star rating
Submit the form
See their testimonial appear instantly
Keep data even after refresh
Scroll testimonials using swipe/drag

🎨 Step 1: UI Structure
We start with a simple form:

<form id="form">
  <input type="text" id="name" placeholder="Your Name" required>
  <input type="text" id="role" placeholder="Your Role" required>
  <textarea id="feedback" placeholder="Your Feedback..." required></textarea>

  <div class="stars">
    <span>★</span>
    <span>★</span>
    <span>★</span>
    <span>★</span>
    <span>★</span>
  </div>

<button type="submit">Add Testimonial</button>

</form>

And a slider container:

<div class="slider">
  <div class="slide-track" id="track"></div>
</div>

⭐ Step 2: Star Rating Logic
We track which star is clicked and visually highlight it.
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

💡 Key idea:
We use the index to determine how many stars should be active.

📝 Step 3: Creating Testimonial Object
Instead of directly updating UI, we create a data object:
const testimonial = {
name: document.getElementById("name").value.trim(),
role: document.getElementById("role").value.trim(),
message: document.getElementById("feedback").value.trim(),
stars: "⭐".repeat(rating)
};

👉 This is important for scalability and clean architecture.

🎯 Step 4: Rendering UI Dynamically
We create testimonial cards on the fly:
function addTestimonial(testimonial) {
const card = document.createElement("div");
card.classList.add("testimonial");

card.innerHTML = `     <p>${testimonial.message}</p>
    <div>${testimonial.stars}</div>
    <h4>${testimonial.name}</h4>
    <small>${testimonial.role}</small>
  `;

track.appendChild(card);
}

💾 Step 5: Persist Data with localStorage
Without persistence, data disappears on refresh.
function saveToLocalStorage(testimonial) {
let data = JSON.parse(localStorage.getItem("testimonials")) || [];
data.push(testimonial);
localStorage.setItem("testimonials", JSON.stringify(data));
}

Load Data on Refresh
function loadTestimonials() {
let data = JSON.parse(localStorage.getItem("testimonials")) || [];
data.forEach(t => addTestimonial(t));
}

loadTestimonials();

✅ Now your app behaves like a real product.

👉 Step 6: Drag / Swipe Slider (Netflix Style)
Instead of auto-scrolling, we add manual interaction.
Mouse Drag
let isDragging = false;
let startX;

slider.addEventListener("mousedown", (e) => {
isDragging = true;
startX = e.pageX;
});

slider.addEventListener("mousemove", (e) => {
if (!isDragging) return;
const move = e.pageX - startX;
track.style.transform = `translateX(${move}px)`;
});

slider.addEventListener("mouseup", () => {
isDragging = false;
});

Mobile Swipe Support
slider.addEventListener("touchstart", (e) => {
startX = e.touches[0].clientX;
});

slider.addEventListener("touchmove", (e) => {
const move = e.touches[0].clientX - startX;
track.style.transform = `translateX(${move}px)`;
});

📱 Now your app works on both desktop and mobile.

⚠️ Important Design Decision
You must choose one:
Option
Description
Auto-scroll
Smooth animation
Drag/Swipe
User-controlled

👉 Combining both leads to conflicts.

🧠 What You Learned
This project covers real frontend concepts:
DOM manipulation
Event handling
State management
Data persistence
Gesture-based UI
Component-based thinking

🚀 Final Result
You now have a:
⭐ Interactive UI
💾 Persistent application
🎯 Dynamic rendering system
👉 Modern swipe experience
This is no longer a “beginner project” — it’s a portfolio-level build.

👋 Closing Thought
Great frontend developers don’t just build UI —
they build interactive, state-driven experiences.
And this project is a solid step in that direction 🚀
