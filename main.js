const signUpBtn = document.querySelector(".content_sign_up_btn ");
const modalContent = document.querySelector(".modal_content");
const modalBackdrop = document.querySelector(".modal_backdrop");
const modalCancel = document.querySelector(".modal_cancel_btn");

signUpBtn.addEventListener("click", () => {
    modalContent.classList.toggle("open");
    modalBackdrop.classList.toggle("show")
});

modalBackdrop.addEventListener("click", () => {
    modalContent.classList.toggle("open");
    modalBackdrop.classList.toggle("show")
});

modalCancel.addEventListener("click", () => {
    modalContent.classList.remove("open");
    modalBackdrop.classList.remove("show");
})