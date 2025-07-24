console.log("Site Raízes Invisíveis carregado com sucesso!");

// Menu hamburger para dispositivos móveis
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navUl = document.querySelector("nav ul");

  menuToggle.addEventListener("click", () => {
    navUl.classList.toggle("active");
  });
});