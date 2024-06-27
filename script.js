const container = document.querySelector('.container')
const body = document.querySelector('body')
const ButtonTheme = document.querySelector('.theme');

ButtonTheme.addEventListener('click', ()=> {
    container.classList.toggle('active');
});

ButtonTheme.addEventListener('click', ()=> {
    body.classList.toggle('active');
});