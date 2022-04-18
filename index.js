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
  titlePets.forEach(function (elem, index){
   /* elem.style.opacity = 0;
    elem.style.cssText += 'transition: opacity 0.4s';*/
    elem.innerHTML = totalArr[index][0];
  });
  imagesPets.forEach((elem, index) => (elem.src = totalArr[index][1]));
}

const linkHelpTheShelter = document.querySelector(".link__help-the-shelter");
const linkContacts = document.querySelector(".link__contacts");
const linkAboutTheShelter = document.querySelector(".link__about-the-shelter");
const navigationButtons = document.querySelectorAll(".our-pets___container___item___navigation");
linkHelpTheShelter.classList.add("disabled");
linkContacts.classList.add("disabled");

linkAboutTheShelter.addEventListener("click", closeMenu);
document.querySelector(".background-menu").addEventListener("click", closeMenu);
navigationButtons[0].addEventListener("click", changeImagesPets);
navigationButtons[1].addEventListener("click", changeImagesPets);
