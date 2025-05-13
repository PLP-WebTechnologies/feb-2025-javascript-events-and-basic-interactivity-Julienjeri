// Button click and color change
const colorBtn = document.getElementById("colorBtn");
const btnMsg = document.getElementById("buttonMessage");

colorBtn.addEventListener("click", () => {
  document.body.style.backgroundColor =
    "#" + Math.floor(Math.random() * 16777215).toString(16);
  btnMsg.textContent = "Background changed!";
});

// Hover effect
colorBtn.addEventListener("mouseover", () => {
  colorBtn.style.transform = "scale(1.1)";
});
colorBtn.addEventListener("mouseout", () => {
  colorBtn.style.transform = "scale(1)";
});

// Keypress detection
document.addEventListener("keydown", (e) => {
  if (e.key === "h") {
    alert("You pressed H!");
  }
});

// Double-click (bonus!)
colorBtn.addEventListener("dblclick", () => {
  alert("You double-clicked the button!");
});

// Image gallery interaction
const thumbs = document.querySelectorAll(".thumb");
const mainImage = document.getElementById("mainImage");

thumbs.forEach((thumb) => {
  thumb.addEventListener("click", () => {
    mainImage.src = thumb.src;
  });
});

// Tabs interaction
const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    contents.forEach((c) => c.classList.add("hidden"));
    document.getElementById(tab.dataset.tab).classList.remove("hidden");
  });
});

// Form validation
const form = document.getElementById("userForm");
const email = document.getElementById("email");
const password = document.getElementById("password");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!email.value.includes("@")) {
    formMessage.textContent = "Invalid email.";
    return;
  }

  if (password.value.length < 8) {
    formMessage.textContent = "Password must be at least 8 characters.";
    return;
  }

  formMessage.textContent = "Form submitted successfully!";
});

// Real-time feedback (bonus!)
password.addEventListener("input", () => {
  formMessage.textContent =
    password.value.length >= 8
      ? "Password looks good!"
      : "Password must be at least 8 characters.";
});
