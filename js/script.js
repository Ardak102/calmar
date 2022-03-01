// Login modal window DOM
const loginContainer = document.getElementById('login-container');
const loginOpen = document.getElementById('header-login');
const loginClose = document.getElementById('login-close');
const loginOverlay = document.getElementById('login-overlay');

loginOpen.addEventListener('click', () => {
    loginContainer.classList.add('login-active')

    loginOverlay.style.transform = 'translateY(0)'
})

loginClose.addEventListener('click', () => {
    loginContainer.classList.remove('login-active')

    loginOverlay.style.transform = 'translateY(-100%)'
})

// Sign up modal window DOM
const signUpContainer = document.getElementById('sign_up-container');
const signUpOpen = document.getElementById('header-sign_up');
const signUpClose = document.getElementById('sign_up-close');
const signUpOverlay = document.getElementById('sign_up-overlay');

signUpOpen.addEventListener('click', () => {
    signUpContainer.classList.add('sign_up-active')

    signUpOverlay.style.transform = 'translateY(0)'
})

signUpClose.addEventListener('click', () => {
    signUpContainer.classList.remove('sign_up-active')

    signUpOverlay.style.transform = 'translateY(-100%)'
})

