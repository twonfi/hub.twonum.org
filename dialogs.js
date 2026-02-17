"use strict";

const DIALOG_BUTTONS = new Map(Object.entries({
  'button-email': 'dialog-email',
}));

const CLOSE_BUTTON_TEMPLATE = document.getElementById("close-button-template").innerHTML;

for (const BUTTON of DIALOG_BUTTONS) {
    document.getElementById(BUTTON[0]).addEventListener('click', function() {
    const DIALOG = document.getElementById(BUTTON[1]);
    DIALOG.insertAdjacentHTML('beforeend', CLOSE_BUTTON_TEMPLATE);
    const BUTTON_ELEMENT = DIALOG.lastElementChild;
    BUTTON_ELEMENT.id = "close-button";
    DIALOG.showModal();

    DIALOG.addEventListener('close', function() {
      try {
        document.getElementById("close-button").remove();
      } catch {}
    });

    BUTTON_ELEMENT.addEventListener('click', function() {
      DIALOG.close();
    });
  });
}
