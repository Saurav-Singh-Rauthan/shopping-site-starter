var modal = document.querySelector(".backdrop");
var sidebar = document.querySelector(".sidebar");
var btn = document.querySelector(".nav-switch");
var links = document.querySelectorAll(".links");

//Fill in the displayModal and HideModal functions the methods are already linked to buttons

const displayModal = () => {};

const hideModal = () => {};

btn.addEventListener("click", () => {
  displayModal();
});

modal.addEventListener("click", () => {
  hideModal();
});

for (let index = 0; index < links.length; index++) {
  const element = links[index];
  element.addEventListener("click", () => {
    hideModal();
  });
}
