import pets from "./pets.json" assert { type: "json" };
function closeMenu() {
  document.querySelector("#menu-toggle").click();
}
function arrayRandElement(arr) {
  let randomElement = [];
  let one = Math.floor(Math.random() * arr.length);
  randomElement.push(arr[one]);
  arr.splice(one, 1);
  let two = Math.floor(Math.random() * arr.length);
  randomElement.push(arr[two]);
  arr.splice(two, 1);
  let three = Math.floor(Math.random() * arr.length);
  randomElement.push(arr[three]);
  arr.splice(three, 1);
  return randomElement;
}
function removeElements(arr, arrCheck) {
  return arr.filter(function (index) {
    return !arrCheck.includes(index);
  });
}

function changeImagesPets() {
  let titlePets = document.querySelectorAll(".slider-pets");
  let imagesPets = document.querySelectorAll(".image-pets");
  let arrTitlePets = [];
  let totalArr = [];
  titlePets.forEach((index) => arrTitlePets.push(index.innerHTML));
  let arrPets = pets.map((index) => index.name);
  let newArray = removeElements(arrPets, arrTitlePets);
  newArray = arrayRandElement(newArray);
  pets.forEach(function (index) {
    if (
      index.name.indexOf(newArray[0]) !== -1 ||
      index.name.indexOf(newArray[1]) !== -1 ||
      index.name.indexOf(newArray[2]) !== -1
    ) {
      totalArr.push([index.name, index.img]);
    }
  });
  titlePets.forEach(function (elem, index) {
    elem.style.opacity = 0;
    elem.style.cssText += "transition: all 0.4s";
    elem.innerHTML = totalArr[index][0];
    setTimeout(function animationImages() {
      elem.style.opacity += 1;
      elem.style.cssText += "transition: all 0.4s";
    }, 500);
  });
  imagesPets.forEach(function (elem, index) {
    elem.style.opacity = 0;
    elem.style.cssText += "transition: all 0.4s";
    elem.src = totalArr[index][1];
    setTimeout(function animationImages() {
      elem.style.opacity += 1;
      elem.style.cssText += "transition: all 0.4s";
    }, 500);
  });
}
function openModal() {
  document.querySelector(".background-module").style.display = "flex";
  document.querySelector("body").style.overflow = "hidden";
}
function closeModal(event) {
  if (
    event.target.classList.contains("background-module") ||
    event.target.classList.contains("svg-icon__close") |
      event.target.classList.contains("btn-close-module")
  ) {
    document.querySelector(".background-module").style.display = "none";
    document.querySelector("body").style.overflow = "auto";
  }
}
const linkHelpTheShelter = document.querySelector(".link__help-the-shelter");
const linkContacts = document.querySelector(".link__contacts");
const linkAboutTheShelter = document.querySelector(".link__about-the-shelter");
const navigationButtons = document.querySelectorAll(
  ".our-pets___container___item___navigation"
);
const itemButton = document.querySelectorAll(".our-pets___container___item");
const backgroundModule = document.querySelector(".background-module");

const closeButton = document.querySelector(".btn-close-module");
linkHelpTheShelter.classList.add("disabled");
linkContacts.classList.add("disabled");

linkAboutTheShelter.addEventListener("click", closeMenu);
document.querySelector(".background-menu").addEventListener("click", closeMenu);
navigationButtons[0].addEventListener("click", changeImagesPets);
navigationButtons[1].addEventListener("click", changeImagesPets);
itemButton.forEach((index) => index.addEventListener("click", openModal));
closeButton.addEventListener("click", closeModal);
backgroundModule.addEventListener("click", closeModal);
