const copyBtnList = document.querySelectorAll(".btn-snippet");

copyBtnList.forEach(copyBtn => {
  const value = copyBtn.getAttribute("value");
  copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(value);
  });
});


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