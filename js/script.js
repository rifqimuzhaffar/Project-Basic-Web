// Toggle Class active hamburger-menu
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//klik di luar sidebar dan hilang
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// modal box
const showLoginForm = document.querySelector("#show-login-form");
const userButton = document.querySelector("#user-button");

userButton.onclick = (e) => {
  showLoginForm.style.display = "flex";
  e.preventDefault();
};

// klik tombol close
document.querySelector(".modal .close-icon").onclick = (e) => {
  showLoginForm.style.display = "none";
  e.preventDefault();
};

// klik di areaa manapun
const modal = document.querySelector("#show-login-form");
window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};
