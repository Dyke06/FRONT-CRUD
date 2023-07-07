//modal aluguel
const ABtnAdd = document.getElementById("Awda-add");
let ABtnEdit = document.querySelectorAll(".AbtnUser");
const AmodalAdd = document.getElementById("id-modal-wda-container-aluguel");
const AcloseBtnAdd = document.getElementById("icon-modal-close-wda-aluguel");
const AcancBtnAdd = document.getElementById("button-cancel-aluguel");
const AtitleModalWda = document.getElementById("add-wda-title-aluguel");


ABtnAdd.addEventListener("click", function () {
    AmodalAdd.classList.toggle("modal-container-show-aluguel");
    AtitleModalWda.innerText = "ADICIONAR ALUGUEL";
});

for (var i = 0; i < ABtnEdit.length; i++) {
ABtnEdit[i].addEventListener("click", (e) => {
    let btnParentElement = e.target.parentElement.parentElement;
    console.log(btnParentElement);
    AmodalAdd.classList.toggle("modal-container-show-aluguel");
    AtitleModalWda.innerText = "EDITAR ALUGUEL";
    });
};

AcloseBtnAdd.addEventListener("click", function () {
AmodalAdd.classList.toggle("modal-container-show-aluguel");
});

AcancBtnAdd.addEventListener("click", function () {
AmodalAdd.classList.toggle("modal-container-show-aluguel");
});


//Modal devolver

let devButton = document.querySelectorAll(".btnDevAluguel");
const devModal = document.getElementById("id-modal-dev-container");
const iconCloseDev = document.getElementById("icon-close-dev");
const iconCloseDev2 = document.getElementById("btn-canc-Aluguel");

for (var i = 0; i < devButton.length; i++) {
    devButton[i].addEventListener("click", (e) => {
    let btnParentElement = e.target.parentElement.parentElement;
    console.log(btnParentElement);
    devModal.classList.toggle("modal-dev-show");
    });
}

iconCloseDev.addEventListener("click", function() {
    devModal.classList.toggle("modal-dev-show");
});

iconCloseDev2.addEventListener("click", function() {
    devModal.classList.toggle("modal-dev-show");
});