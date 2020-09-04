// constants
export const imagePopup = document.querySelector('.popup_type_image');

// functions

// togglePopup
function escapeKeyPopupCloseHandler(evt) {
  const openPopup = document.querySelector('.popup_opened');
  if (evt.key === 'Escape') {
    togglePopup(openPopup);
  }
}

function windowClickPopupCloseHandler(evt) {
  const openPopup = document.querySelector('.popup_opened');
  if (evt.target === openPopup) {
    togglePopup(openPopup);
  }
}

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
