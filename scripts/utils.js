// imagePopup
export const imagePopup = document.querySelector('.popup_type_image');

// togglePopup
function addEventListenersPopupCloseHandler() {
  document.addEventListener('keydown', escapeKeyPopupCloseHandler);
  window.addEventListener('click', windowClickPopupCloseHandler);
}

function removeEventListenersPopupCloseHandler() {
  document.removeEventListener('keydown', escapeKeyPopupCloseHandler);
  window.removeEventListener('click', windowClickPopupCloseHandler);
}

export function togglePopup(popup) {
  let toggle = popup.classList.toggle('popup_opened');

  if (toggle) {
    addEventListenersPopupCloseHandler();
  } else {
    removeEventListenersPopupCloseHandler();
  }
}
