"use strict";

// Input field
    //main info
    const firstName = document.querySelector('#firstName');
    const lastName = document.querySelector('#lastName');
    const phoneNumber = document.querySelector('#phoneNumber');
    const DOB = document.querySelector('#DOB');

    //uplode img
    const profileImage = document.querySelector('#profileImage');

    //email & password
    const signUpEmail = document.querySelector('#sign-up-email');
    const signUpPassword = document.querySelector('#sign-up-password');
    const repassword = document.querySelector('#repassword');



// Button field
    //main info
    const mainInfoNextBTN = document.querySelector('#main-info-next');
    
    //uplode img
    const UplodeImgNextBTN = document.querySelector('#uplode-img-next');

    //email & password
    const emailPasswordNextBTN = document.querySelector('#email-password-next');



// Error placeholder field
    //main info
    const fNameErr = document.querySelector('#fNameErr');
    const lNameErr = document.querySelector('#lNameErr');
    const telErr = document.querySelector('#telErr');
    const DOBErr = document.querySelector('#DOBErr');

    //uplode img
    const imgErr = document.querySelector('#imgErr');

    //email & password
    const EmailErr = document.querySelector('#EmailErr');
    const passErr = document.querySelector('#passErr');
    const rePassErr = document.querySelector('#rePassErr');



//Other Element field

    const signUpSection = document.querySelector('#signUpSec');
    const logInSecSction = document.querySelector('#logInSec');
    //main info
    const alreadyIn = document.querySelector('#already-in');


//Event Listener

alreadyIn.addEventListener('click', event => {
    event.stopPropagation();
    setTimeout(() => {
        signUpSection.style.transform = 'translateY(-110%)';
        setTimeout(() => {
            signSection.classList.add('d-none');
            logSecSction.classList.remove('d-none');
            setTimeout(() => {
                logSecSction.style.transform = 'translateY(0%)';
                
            }, 100);

        },700);
    }, 100);
});