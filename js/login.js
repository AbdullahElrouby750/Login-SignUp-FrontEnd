"use strict";

// Input field
    //normal login
    const logInEmail = document.querySelector('#logInEmail');
    const logInPassword = document.querySelector('#logInPassword');

    //forget pass login
        //first-step-verfication
        const forgotPassEmail = document.querySelector('#forgotPassEmail');
        //second-step-verfication
        const forgotPassPhone = document.querySelector('#forgotPassPhone');

// Button field
    //normal login
    const logInBtn = document.querySelector('#logInBtn');
    
    //forget pass login
        //first-step-verfication
        const firstStepVerficationNext= document.querySelector('#first-step-verfication-next');
        //second-step-verfication
        // TODO: on click check the email
        const secondStepVerficationNext= document.querySelector('#second-step-verfication-next');

// Error placeholder field
    //normal login
    const logInErr = document.querySelector('#logIlogInErrnBtn');
    //forget pass login
    
        //first-step-verfication
        const forgotPassErr = document.querySelector('#forgotPassErr');
        //second-step-verfication
        const forgotPassPhoneErr = document.querySelector('#forgotPassPhoneErr');

//Other Element field
const logSecSction = document.querySelector('#logInSec');
const signSection = document.querySelector('#signUpSec');
    //normal login
    const forgetPass = document.querySelector('#forgetPass');
    const signUpBtn = document.querySelector('#go-sign-up');

    

//Event Listener

signUpBtn.addEventListener('click', event => {
    console.log('signup clicked');
    console.log('signSection',signSection);
    console.log('logSecSction',logSecSction);
    
    event.stopPropagation();
    setTimeout(() => {
        logSecSction.style.transform = 'translateY(110%)';
        setTimeout(() => {
            signSection.classList.remove('d-none');
            logSecSction.classList.add('d-none');
            
            setTimeout(() => {
                signSection.style.transform = 'translateY(0%)';
                
            }, 100);
        },700);
    }, 100);
});

