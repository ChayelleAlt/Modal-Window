'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
    console.log('Button clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

//Looping through nodes of the multiple show-modal class selector adding an event listener to open modal on click
for (let i = 0; i < btnsOpenModal.length; i++)
    btnsOpenModal[i].addEventListener('click', openModal);

//Close modal when cross or overlay is clicked
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

//Close modal with Esc Keypress event
document.addEventListener('keypress', function (e) {
    console.log(e);

    if (e.key === "Escape" && !modal.classList.contains('hidden')) {
        closeModal();
    };

});


