import pets from "./pets.json" assert { type: "json" };
function closeMenu() {
  document.querySelector("#menu-toggle").click();
}
preloadImages(); 
function preloadImages() {
    const img = new Image();
    const pets = ["charly", "freddie", "jennifer", "katrine", "scarlett", "sophia", "timmy", "woody"];
    pets.forEach(
      (indexPets) => (img.src = `./assets/images/pets/${indexPets}.png`)
    );
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

function openModal(event) {
  let namePet = "";
  if(event.path[0].classList.contains("our-pets___container___item")){
    namePet = event.path[0].querySelector(".slider-pets").textContent;
  }
  else{
    namePet = event.path[1].querySelector(".slider-pets").textContent;
  }
  console.log(namePet);
  pets.forEach(function(index) {
    if(namePet === index.name){
      document.querySelector(".pet-info__img").src = index.img;
      document.querySelector(".pet-info__title").textContent = index.name;
      document.querySelector(".pet-info__type").textContent = index.type;
      document.querySelector(".pet-info__breed").textContent = index.breed;
      document.querySelector(".pet-info__description").textContent = index.description;
      document.querySelector(".pet-info__age").textContent = index.age;
      document.querySelector(".pet-info__inoculations").textContent = index.inoculations;
      document.querySelector(".pet-info__diseases").textContent = index.diseases;
      document.querySelector(".pet-info__parasites").textContent = index.parasites;
    }
  });
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
const CAROUSEL  = document.querySelector(".carousel");
const closeButton = document.querySelector(".btn-close-module");
linkHelpTheShelter.classList.add("disabled");
linkContacts.classList.add("disabled");

linkAboutTheShelter.addEventListener("click", closeMenu);
document.querySelector(".background-menu").addEventListener("click", closeMenu);

itemButton.forEach((index) => index.addEventListener("click", openModal));
closeButton.addEventListener("click", closeModal);
backgroundModule.addEventListener("click", closeModal);

navigationButtons[0].addEventListener("click", carouselLeft);
navigationButtons[1].addEventListener("click", carouselRigth);

CAROUSEL.addEventListener("animationend", (AnimationEvent) => {
  
  let titlePets = document.querySelectorAll(".active-carousel .slider-pets");
  let imagesPets = document.querySelectorAll(".active-carousel .image-pets");
  let titlePetsMove = '';
  let imagesPetsMove = '';
  if(AnimationEvent.animationName === "move-left"){
  titlePetsMove = document.querySelectorAll(".left-carousel .slider-pets");
  imagesPetsMove = document.querySelectorAll(".left-carousel .image-pets");
  }
  else{
    titlePetsMove = document.querySelectorAll(".rigth-carousel .slider-pets");
    imagesPetsMove = document.querySelectorAll(".rigth-carousel .image-pets");
  }
  titlePets.forEach((elem, index) => {
    titlePets[index].innerHTML = titlePetsMove[index].innerHTML ;
  })
  imagesPets.forEach((elem, index) => {
    imagesPets[index].src = imagesPetsMove[index].src ;
  })
  CAROUSEL.classList.remove("transition-left");
  CAROUSEL.classList.remove("transition-rigth");
  navigationButtons[0].addEventListener("click", carouselLeft);
  navigationButtons[1].addEventListener("click", carouselRigth);
})

function carouselLeft(){
  navigationButtons[0].removeEventListener("click", carouselLeft);
  CAROUSEL.classList.add("transition-left");
  let titlePets = document.querySelectorAll(".left-carousel .slider-pets");
  let imagesPets = document.querySelectorAll(".left-carousel .image-pets");
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
    elem.innerHTML = totalArr[index][0];
  });
  imagesPets.forEach(function (elem, index) {
    elem.src = totalArr[index][1].slice(4);
  }); 
}
function carouselRigth(){
  navigationButtons[0].removeEventListener("click", carouselRigth);
  CAROUSEL.classList.add("transition-rigth");
  let titlePets = document.querySelectorAll(".rigth-carousel .slider-pets");
  let imagesPets = document.querySelectorAll(".rigth-carousel .image-pets");
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
    elem.innerHTML = totalArr[index][0];
  });
  imagesPets.forEach(function (elem, index) {
    elem.src = totalArr[index][1].slice(4);
  }); 
}