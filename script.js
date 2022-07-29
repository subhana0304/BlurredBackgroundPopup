const containerElm = document.querySelector(".container");
const btnElm = document.querySelector(".btn");
const popupContainerElm = document.querySelector(".popup-container");
const closeIconElm = document.querySelector(".close-icon");

btnElm.addEventListener("click", ()=>{
    containerElm.classList.add("active");
    popupContainerElm.classList.remove("active")
});
closeIconElm.addEventListener("click", ()=>{
    popupContainerElm.classList.add("active");
    containerElm.classList.remove("active");
});