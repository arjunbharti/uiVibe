const slider = document.querySelector(".slider-input");
const sliderMsg = document.querySelector(".slider-msg");

slider.addEventListener("input", () => {
    sliderMsg.innerHTML = `The volume is : ${slider.value}`;
})
