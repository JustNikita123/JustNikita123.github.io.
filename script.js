let number = document.querySelector(".card__order__count");
let minus = document.querySelector(".card__order__counter__minus");
let plus = document.querySelector(".card__order__counter__plus");
let price = document.querySelector(".card__order__price");

const startPrice = 148;
minus.addEventListener("click", function (event) {
  if (number.textContent > 1) {
    number.textContent--;
    price.textContent = startPrice * number.textContent;
  }
  event.preventDefault();
});
plus.addEventListener("click", function (event) {
  number.textContent++;
  price.textContent = startPrice * number.textContent;
  event.preventDefault();
});

// ------------

let radioImages = document.querySelectorAll(".card__slider-image");
let images = document.querySelectorAll(".card__image");

for (let i = 0; i < radioImages.length; i++) {
  radioImages[i].addEventListener("click", function () {
    let activeImage = document.querySelector(".image_active");
    activeImage.classList.remove("image_active");
    images[i].classList.add("image_active");
  });
}
// -----------

let menu = document.querySelectorAll(".card__list__item");
let tabs = document.querySelectorAll(".card__right__tab");

for (let i = 0; i < menu.length; i++) {
  menu[i].addEventListener("click", function (event) {
    let activeMenu = document.querySelector(".active");
    let activeTab = document.querySelector(".tab_active");
    activeMenu.classList.remove("active");
    activeTab.classList.remove("tab_active");
    this.classList.add("active");
    tabs[i].classList.add("tab_active");
    event.preventDefault();
  });
}

// ------------

let save = document.querySelector(".card__order__save");
let saveImg = document.querySelector(".card__order__save img");
save.addEventListener("click", function (event) {
  event.preventDefault();
  if (saveImg.src.endsWith("save-nope.png")) {
    saveImg.src = "img/save/save-yeah.png";
  } else {
    saveImg.src = "img/save/save-nope.png";
  }
});
