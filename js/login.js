let loginButton = document.querySelector('.login');
let CloseButton = document.querySelector('.close');
let loginPopup = document.querySelector('.login_popup');

loginButton.addEventListener('click', showPopup);
CloseButton.addEventListener('click', showPopup);

function showPopup(evt){
    evt.preventDefault();
    loginPopup.classList.toggle('show_popup')
    
}