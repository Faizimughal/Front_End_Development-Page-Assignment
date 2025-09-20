let links = document.querySelectorAll(".links a");
links.forEach((link) => {
  link.addEventListener("click", () => {
    link.classList.add("active");
  });
});
