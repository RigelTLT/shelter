import pets from "../../pets.json" assert { type: "json" };
import petsList from "../../pets list.json" assert { type: "json" };
function closeMenu() {
  document.querySelector("#menu-toggle").click();
}
preloadImages(); 
function preloadImages() {
    const img = new Image();
    const pets = ["charly", "freddie", "jennifer", "katrine", "scarlett", "sophia", "timmy", "woody"];
    pets.forEach(
      (indexPets) => (img.src = `../../assets/images/pets/${indexPets}.png`)
    );
}
function openModal(event) {
  let namePet = "";
  if(event.path[0].classList.contains("our-pets___container___item")){
    namePet = event.path[0].querySelector(".slider-pets").textContent;
  }
  else{
    namePet = event.path[1].querySelector(".slider-pets").textContent;
  }
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
function foward(){
    const screenWidth = window.screen.width;
    const backItem = document.querySelector(".back");
    const backAllItem = document.querySelector(".back-all");
    const back = document.querySelector(".Arrow-left");
    const backAll = document.querySelector(".Arrow-left-up");
    back.src = "../../assets/svg/left.svg";
    backAll.src = "../../assets/svg/leftup.svg";
    backItem.classList.remove("navigation__disabled");
    backAllItem.classList.remove("navigation__disabled");
    backItem.classList.add("our-pets___navigation___item");
    backAllItem.classList.add("our-pets___navigation___item");
    
let numberPage = document.querySelector(".navigation__active").childNodes[1].textContent;
let numberItem = 8;
if(screenWidth<726){
    numberItem = 3;
}
if(726<=screenWidth && screenWidth<1280){
    numberItem = 6;
}
numberPage = Number(numberPage);
let start = numberItem * numberPage;
let stop = start + numberItem;
if(stop > 48){
    return;
}
let titlePets = document.querySelectorAll(".slider-pets");
let imagesPets = document.querySelectorAll(".image-pets");
let totalArr = [];
for(let i = start; i<stop; i++){
    totalArr.push([petsList[i].name, petsList[i].img])
}
for(let i = 0; i<numberItem; i++){
    titlePets[i].style.opacity = 0;
    titlePets[i].style.cssText += "transition: all 0.4s";
    titlePets[i].innerHTML = totalArr[i][0];
    setTimeout(function animationImages() {
        titlePets[i].style.opacity += 1;
        titlePets[i].style.cssText += "transition: all 0.4s";
    }, 500);
  }
  for(let i = 0; i<numberItem; i++){
    imagesPets[i].style.opacity = 0;
    imagesPets[i].style.cssText += "transition: all 0.4s";
    imagesPets[i].src = totalArr[i][1];
    setTimeout(function animationImages() {
        imagesPets[i].style.opacity += 1;
        imagesPets[i].style.cssText += "transition: all 0.4s";
    }, 500);
  }
  numberPage = numberPage+ 1;
  document.querySelector(".navigation__active").childNodes[1].textContent = numberPage;
  if(stop >= 48){
    const forwardItem = document.querySelector(".forward");
    const forwardAllItem = document.querySelector(".forward-all");
    forwardItem.classList.add("navigation__disabled");
    forwardAllItem.classList.add("navigation__disabled");
    const forward = document.querySelector(".Arrow-rigth");
    const forwardAll = document.querySelector(".Arrow-rigth-up");
    forward.src = "../../assets/svg/rigth-disabled.svg";
    forwardAll.src = "../../assets/svg/rigthup-disabled.svg";
}
}
function fowardUp(event){
    const screenWidth = window.screen.width;
    const backItem = document.querySelector(".back");
    const backAllItem = document.querySelector(".back-all");
    const back = document.querySelector(".Arrow-left");
    const backAll = document.querySelector(".Arrow-left-up");
    back.src = "../../assets/svg/left.svg";
    backAll.src = "../../assets/svg/leftup.svg";
    backItem.classList.remove("navigation__disabled");
    backAllItem.classList.remove("navigation__disabled");
    backItem.classList.add("our-pets___navigation___item");
    backAllItem.classList.add("our-pets___navigation___item");
    let numberItem = 8;
    if(screenWidth<726){
        numberItem = 3;
    }
    if(726<=screenWidth && screenWidth<1280){
        numberItem = 6;
    }
    let start = 40;
    if(screenWidth<726){
        start = 45;
    }
    if(726<=screenWidth && screenWidth<1280){
        start = 42;
    }
    let stop = start + numberItem;
    if(event.target.classList.contains("navigation__disabled")){
        return;
    }
    let titlePets = document.querySelectorAll(".slider-pets");
    let imagesPets = document.querySelectorAll(".image-pets");
    let totalArr = [];
    for(let i = start; i<stop; i++){
        totalArr.push([petsList[i].name, petsList[i].img])
    }
    for(let i = 0; i<numberItem; i++){
        titlePets[i].style.opacity = 0;
        titlePets[i].style.cssText += "transition: all 0.4s";
        titlePets[i].innerHTML = totalArr[i][0];
        setTimeout(function animationImages() {
            titlePets[i].style.opacity += 1;
            titlePets[i].style.cssText += "transition: all 0.4s";
        }, 500);
      }
      for(let i = 0; i<numberItem; i++){
        imagesPets[i].style.opacity = 0;
        imagesPets[i].style.cssText += "transition: all 0.4s";
        imagesPets[i].src = totalArr[i][1];
        setTimeout(function animationImages() {
            imagesPets[i].style.opacity += 1;
            imagesPets[i].style.cssText += "transition: all 0.4s";
        }, 500);
      }
      let numberPage = 6;
      if(screenWidth<726){
        numberPage = 16;
    }
    if(726<=screenWidth && screenWidth<1280){
        numberPage = 8;
    }
      document.querySelector(".navigation__active").childNodes[1].textContent = numberPage;
      if(stop >= 48){
        const forwardItem = document.querySelector(".forward");
        const forwardAllItem = document.querySelector(".forward-all");
        forwardItem.classList.add("navigation__disabled");
        forwardAllItem.classList.add("navigation__disabled");
        const forward = document.querySelector(".Arrow-rigth");
        const forwardAll = document.querySelector(".Arrow-rigth-up");
        forward.src = "../../assets/svg/rigth-disabled.svg";
        forwardAll.src = "../../assets/svg/rigthup-disabled.svg";
    }
    }
    
    function back(){
        const screenWidth = window.screen.width;
        const forwardItem = document.querySelector(".forward");
        const forwardAllItem = document.querySelector(".forward-all");
        const forward = document.querySelector(".Arrow-rigth");
        const forwardAll = document.querySelector(".Arrow-rigth-up");
        forward.src = "../../assets/svg/rigth.svg";
        forwardAll.src = "../../assets/svg/rigthup.svg";
        forwardItem.classList.remove("navigation__disabled");
        forwardAllItem.classList.remove("navigation__disabled");
        forwardItem.classList.add("our-pets___navigation___item");
        forwardAllItem.classList.add("our-pets___navigation___item");
        
    let numberPage = document.querySelector(".navigation__active").childNodes[1].textContent;
    let numberItem = 8;
    if(screenWidth<726){
        numberItem = 3;
    }
    if(726<=screenWidth && screenWidth<1280){
        numberItem = 6;
    }
   
    numberPage = Number(numberPage);
    let stop = numberItem * (numberPage-1);
    let start = stop - numberItem;
    if(start < 0){
        return;
    }
    let titlePets = document.querySelectorAll(".slider-pets");
    let imagesPets = document.querySelectorAll(".image-pets");
    let totalArr = [];
    for(let i = start; i<stop; i++){
        totalArr.push([petsList[i].name, petsList[i].img])
    }
    for(let i = 0; i<numberItem; i++){
        titlePets[i].style.opacity = 0;
        titlePets[i].style.cssText += "transition: all 0.4s";
        titlePets[i].innerHTML = totalArr[i][0];
        setTimeout(function animationImages() {
            titlePets[i].style.opacity += 1;
            titlePets[i].style.cssText += "transition: all 0.4s";
        }, 500);
      }
      for(let i = 0; i<numberItem; i++){
        imagesPets[i].style.opacity = 0;
        imagesPets[i].style.cssText += "transition: all 0.4s";
        imagesPets[i].src = totalArr[i][1];
        setTimeout(function animationImages() {
            imagesPets[i].style.opacity += 1;
            imagesPets[i].style.cssText += "transition: all 0.4s";
        }, 500);
      }
      numberPage = numberPage- 1;
      document.querySelector(".navigation__active").childNodes[1].textContent = numberPage;
      if(start <= 0){
        const backItem = document.querySelector(".back");
        const backAllItem = document.querySelector(".back-all");
        const back = document.querySelector(".Arrow-left");
        const backAll = document.querySelector(".Arrow-left-up");
        backItem.classList.add("navigation__disabled");
        backAllItem.classList.add("navigation__disabled");
        back.src = "../../assets/svg/left-disabled.svg";
        backAll.src = "../../assets/svg/leftup-disabled.svg";
    }
    }
    function backUp(){
        const screenWidth = window.screen.width;
        const forwardItem = document.querySelector(".forward");
        const forwardAllItem = document.querySelector(".forward-all");
        const forward = document.querySelector(".Arrow-rigth");
        const forwardAll = document.querySelector(".Arrow-rigth-up");
        forward.src = "../../assets/svg/rigth.svg";
        forwardAll.src = "../../assets/svg/rigthup.svg";
        forwardItem.classList.remove("navigation__disabled");
        forwardAllItem.classList.remove("navigation__disabled");
        forwardItem.classList.add("our-pets___navigation___item");
        forwardAllItem.classList.add("our-pets___navigation___item");
        let numberItem = 8;
        if(screenWidth<726){
            numberItem = 3;
        }
        if(726<=screenWidth && screenWidth<1280){
            numberItem = 6;
        }
        let stop = 8;
        if(screenWidth<726){
            stop = 3;
        }
        if(726<=screenWidth && screenWidth<1280){
            stop = 6;
        }
        let start = 0;
        if(event.target.classList.contains("navigation__disabled")){
            return;
        }
        let titlePets = document.querySelectorAll(".slider-pets");
        let imagesPets = document.querySelectorAll(".image-pets");
        let totalArr = [];
        for(let i = start; i<stop; i++){
            totalArr.push([petsList[i].name, petsList[i].img])
        }
        for(let i = 0; i<numberItem; i++){
            titlePets[i].style.opacity = 0;
            titlePets[i].style.cssText += "transition: all 0.4s";
            titlePets[i].innerHTML = totalArr[i][0];
            setTimeout(function animationImages() {
                titlePets[i].style.opacity += 1;
                titlePets[i].style.cssText += "transition: all 0.4s";
            }, 500);
          }
          for(let i = 0; i<numberItem; i++){
            imagesPets[i].style.opacity = 0;
            imagesPets[i].style.cssText += "transition: all 0.4s";
            imagesPets[i].src = totalArr[i][1];
            setTimeout(function animationImages() {
                imagesPets[i].style.opacity += 1;
                imagesPets[i].style.cssText += "transition: all 0.4s";
            }, 500);
          }
          let numberPage = 1;
          document.querySelector(".navigation__active").childNodes[1].textContent = numberPage;
          if(start <= 0){
            const backItem = document.querySelector(".back");
            const backAllItem = document.querySelector(".back-all");
            const back = document.querySelector(".Arrow-left");
            const backAll = document.querySelector(".Arrow-left-up");
            backItem.classList.add("navigation__disabled");
            backAllItem.classList.add("navigation__disabled");
             back.src = "../../assets/svg/left-disabled.svg";
            backAll.src = "../../assets/svg/leftup-disabled.svg";
        }
        }
const linkHelpTheShelter = document.querySelector(".link__help-the-shelter");
const linkContacts = document.querySelector(".link__contacts");
const linkOurPets = document.querySelector(".link__Our-pets");
const fowardButton = document.querySelector(".forward");
const fowardButtonUp = document.querySelector(".forward-all");
const itemButton = document.querySelectorAll(".our-pets___container___item");
const backgroundModule = document.querySelector(".background-module");
const backButton = document.querySelector(".back");
const backButtonUp = document.querySelector(".back-all");

const closeButton = document.querySelector(".btn-close-module");
/*linkHelpTheShelter.classList.add("disabled");
linkContacts.classList.add("disabled");*/

linkOurPets.addEventListener("click", closeMenu);
document.querySelector(".background-menu").addEventListener("click", closeMenu);
itemButton.forEach((index) => index.addEventListener("click", openModal));
closeButton.addEventListener("click", closeModal);
backgroundModule.addEventListener("click", closeModal);
fowardButton.addEventListener("click", foward);
fowardButtonUp.addEventListener("click", fowardUp);
backButton.addEventListener("click", back);
backButtonUp.addEventListener("click", backUp);
document.querySelector("#menu-toggle").addEventListener("change", function() {
  let body = document.querySelector("body");
  body.style.overflow = (body.style.overflow == "hidden") ? "auto" : "hidden";
})
