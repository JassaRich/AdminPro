// ==============================================================
// This is for the innerleft sidebar
// ==============================================================

document.querySelector(".show-left-part").addEventListener("click", () => {
  document.querySelector(".left-part").classList.toggle("show-panel");
  document.querySelector(".show-left-part").classList.toggle("ri-menu-fill");
});
