const popupLinks = document.querySelectorAll(".popup-link");
const popupCloseIcon = document.querySelectorAll(".close-popup");

if (popupLinks.length > 0) {
  popupLinks.forEach((popupLink) => {
    popupLink.addEventListener("click", (e) => {
      const popupName = popupLink.getAttribute("href").replace("#", "");
      const currentPopup = document.getElementById(popupName);
      popupOpen(currentPopup);
      e.preventDefault();
    });
  });
}

if (popupCloseIcon.length > 0) {
  popupCloseIcon.forEach((el) => {
    el.addEventListener("click", (e) => {
      const popupActive = document.querySelector(".popup.open");
      if (popupActive) {
        popupActive.classList.remove("open");
      }
      e.preventDefault();
    });
  });
}

function popupOpen(currentPopup) {
  if (currentPopup) {
    const popupActive = document.querySelector(".popup.open");
    if (popupActive) {
      popupActive.classList.remove("open");
    }
    currentPopup.classList.add("open");

    currentPopup.addEventListener("click", (e) => {
      if (!e.target.closest(".popup__content")) {
        currentPopup.classList.remove("open");
      }
    });
  }
}

document.addEventListener("keydown", (e) => {
  if (e.which === 27) {
    const popupActive = document.querySelector(".popup.open");
    if (popupActive) {
      popupActive.classList.remove("open");
    }
  }
});
