const modal= document.querySelector('.model');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-model');

const btnsOpenModel = document.querySelectorAll('.Show-model');
// console.log(btnsOpenModel);

const openModel= function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

for (let i = 0; i <btnsOpenModel.length; i++)
   btnsOpenModel[i].addEventListener('click',openModel()

   );
   const closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
   }

   btnCloseModal.addEventListener('click',closeModal);
   overlay.addEventListener('click',closeModal);

