const Thumbnails = document.querySelectorAll(".thumbnail img");
const POPUP = document.querySelector(".popup");
const POPUP_CLOSE = document.querySelector(".popup__close");
const POPUP_IMG = document.querySelector(".popup__img");
const ARROW_LEFT = document.querySelector(".popup__arrow--left")
const ARROW_RIGHT = document.querySelector(".popup__arrow--right")
let currentImgIndex;

Thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener("click", (e) => {
        POPUP.classList.remove("hidden");
        POPUP_IMG.src = e.target.src;
        currentImgIndex = index;
       
        // console.log(POPUP);
        // console.log(POPUP_IMG);
   
     });
});

POPUP_CLOSE.addEventListener("click", () => {
    POPUP.classList.add("hidden");
    
});

ARROW_LEFT.addEventListener("click", () => {
    currentImgIndex = currentImgIndex -1;
    POPUP_IMG.src = Thumbnails[currentImgIndex].src;

})

ARROW_RIGHT.addEventListener("click", () => {
    currentImgIndex = currentImgIndex +1;
    POPUP_IMG.src = Thumbnails[currentImgIndex].src;
//("click", ()=> {
  //  console.log("test")
})