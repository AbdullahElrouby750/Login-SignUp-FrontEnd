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
            const firstStepVerficationNext = document.querySelector('#first-step-verfication-next');
        //second-step-verfication
        // TODO: on click check the email
            const secondStepVerficationNext = document.querySelector('#second-step-verfication-next');

// Error placeholder field
    //normal login
        const logInErr = document.querySelector('#logInErr');
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



// login Methods

function getUser(email, password) {
    const user = findUser(email)
    if (user) {
        if (user.password === password && user.email === email)
            return user;
    }
    logInErr.classList.remove("d-none")
    return null;
}

function clearLoginInput(){
    logInEmail.value = "";
    logInEmail.classList.remove("border-success");

    logInPassword.value = "";
    logInPassword.classList.remove("border-success");
}

//Event Listener

function goToSignUp() {
    setTimeout(() => {
        logSecSction.style.transform = 'translateY(110%)';
        setTimeout(() => {
            signSection.classList.remove('d-none');
            logSecSction.classList.add('d-none');

            setTimeout(() => {
                signSection.style.transform = 'translateY(0%)';
                emailExistMsg.classList.add("d-none");


            }, 100);
        }, 700);
    }, 100);
}

signUpBtn.addEventListener('click', event => {
    console.log('signup clicked');
    console.log('signSection', signSection);
    console.log('logSecSction', logSecSction);

    event.stopPropagation();
    goToSignUp();
});


logInBtn.addEventListener("click", event => {
    event.stopPropagation();

    const user = getUser(logInEmail.value, logInPassword.value)
    if (user) {
        //to only use one userData variable at home section
        
        userData = user;
        // go to home
        goToSignUp();
        setHomePage();
        clearLoginInput();
        
        homePage.classList.remove('d-none');
        startingSection.classList.add('d-none');

        userData = {};
    }

});


let emailExist = false;
let forgotenUserData = {};
firstStepVerficationNext.addEventListener("click", event => {
    event.stopPropagation();
    if (forgotPassEmail.value == ''){
        forgotPassErr.innerText = "Email is required";
        forgotPassErr.classList.remove("d-none")
        event.preventDefault();
    }
    else if(!forgotPassEmail.value.match(emailRegex)){
        forgotPassErr.innerText = "Invalid email format";
        forgotPassErr.classList.remove("d-none")
        event.preventDefault();
    }
    else{
        
        forgotPassErr.innerText = "";
        forgotPassErr.classList.add("d-none")
        forgotenUserData = findUser(forgotPassEmail.value)
        if(forgotenUserData){
            emailExist = true;
        }
    }
});

secondStepVerficationNext.addEventListener("click", event => {
    event.stopPropagation();
    if(!emailExist){
        forgotPassPhoneErr.classList.remove("d-none");
        event.preventDefault();
    }
    else{
        if(forgotenUserData.phoneNumber == forgotPassPhone.value){
            userData = forgotenUserData
            forgotPassPhoneErr.classList.add("d-none");
            // go to defulte section
            goToSignUp();

            // go to home
            setHomePage();
            clearLoginInput();
            homePage.classList.remove('d-none');
            startingSection.classList.add('d-none');

            userData = {};
        }
        else{
            forgotPassPhoneErr.classList.remove("d-none");
            event.preventDefault();
        }
    }
});