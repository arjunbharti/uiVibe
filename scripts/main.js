const copyBtnList = document.querySelectorAll(".btn-snippet");

copyBtnList.forEach(copyBtn => {
  const value = copyBtn.getAttribute("value");
  copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(value);
  });
});

//toast functionality
const toastSuccess = document.querySelector(".toast-success");
const toastInfo = document.querySelector(".toast-info");
const toastWarning = document.querySelector(".toast-warning");
const toastError = document.querySelector(".toast-error");
const closeToastSuccess = document.getElementById("toast-success");
const closeToastInfo = document.getElementById("toast-info");
const closeToastWarning = document.getElementById("toast-warning");
const closeToastError = document.getElementById("toast-error");

closeToastSuccess.onclick = function(){
  toastSuccess.style.display = "none";
}

closeToastInfo.onclick = function(){
  toastInfo.style.display = "none";
}

closeToastWarning.onclick = function(){
  toastWarning.style.display = "none";
}

closeToastError.onclick = function(){
  toastError.style.display = "none";
}

//rating functionality
const ratingOne = document.getElementById("rating-1");
const ratingTwo = document.getElementById("rating-2");
const ratingThree = document.getElementById("rating-3");
const ratingFour = document.getElementById("rating-4");
const ratingFive = document.getElementById("rating-5");

ratingOne.onclick = function(){
  ratingOne.style.backgroundColor = "yellow";
}

ratingTwo.onclick = function(){
  ratingTwo.style.backgroundColor = "yellow";
}

ratingThree.onclick = function(){
  ratingThree.style.backgroundColor = "yellow";
}

ratingFour.onclick = function(){
  ratingFour.style.backgroundColor = "yellow";
}

ratingFive.onclick = function(){
  ratingFive.style.backgroundColor = "yellow";
}

//modal popup

function toggleModal() {
  modal.classList.toggle("show-modal");
}

const modal = document.getElementById("modal");
const modalBtn = document.getElementById("modalBtn");
const closeModal = document.getElementById("closeModal");

modalBtn.onclick = function(){
  modal.style.display = "block";
}

closeModal.onclick = function(){
  modal.style.display = "none";
}

window.onclick = function(event){
  if(event.target == modal){
    modal.style.display = "none";
  }
}
