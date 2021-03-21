const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");
const links = document.querySelectorAll(".navbar li");

hamburger.addEventListener("click", () =>{
	navbar.classList.toggle("open");
});
