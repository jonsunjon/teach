let loginButton = document.querySelector('.login');
let CloseButton = document.querySelector('.close');
let loginPopup = document.querySelector('.login_popup');
let Page = document.querySelector('.page');


loginButton.addEventListener('click', showPopup);
CloseButton.addEventListener('click', showPopup);


function showPopup(evt){
    evt.preventDefault();
    loginPopup.classList.toggle('show_popup')
    Page.classList.toggle('overlay')
}