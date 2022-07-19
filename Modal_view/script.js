'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  //   console.log('Button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeModAL = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModAL);
overlay.addEventListener('click', closeModAL);

document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (!modal.classList.contains('hidden') && e.key === 'Escape') {
    closeModAL();
  }
});

// console.log(btnsOpenModal[i].textContent);
// modal.style.display = 'block';
