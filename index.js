import pets from "./pets.json" assert {type: 'json'};
function closeMenu() {
    document.querySelector("#menu-toggle").click();
  }
const linkHelpTheShelter = document.querySelector(".link__help-the-shelter");
const linkContacts = document.querySelector(".link__contacts");
const linkAboutTheShelter = document.querySelector(".link__about-the-shelter");
linkHelpTheShelter.classList.add("disabled");
linkContacts.classList.add("disabled");

linkAboutTheShelter.addEventListener("click", closeMenu);
document.querySelector(".background-menu").addEventListener("click", closeMenu);

let titlePets = document.querySelectorAll(".slider-pets");
console.log(titlePets)
console.log(pets)