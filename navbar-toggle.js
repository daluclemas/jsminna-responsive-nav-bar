let nav=document.querySelector('.nav-bar');
let toggleButton=document.querySelector('.toggle-btn');
let mainContainer=document.querySelector('.main-container');
let headerText=document.querySelector('.header-text');

function togglE(){
    nav.classList.toggle('change');
    toggleButton.classList.toggle('change');
    mainContainer.classList.toggle('change');
    headerText.classList.toggle('change');
}

toggleButton.addEventListener('click',togglE);

