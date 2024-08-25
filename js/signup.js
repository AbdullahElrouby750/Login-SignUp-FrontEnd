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
    const mainInfoNextBTN = document.querySelector('#main-info-next a');
    
    //uplode img
    const UplodeImgNextBTN = document.querySelector('#uplode-img-next a');

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

    const displayImgSec = document.querySelector('.display-img');
    const displayImg = document.querySelector('#displayImage');
    //main info
    const alreadyIn = document.querySelector('#already-in');





// login Methods
    //Regex

    //email & password validation
    //emailRegex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    function validateEmail(email) {
        if(!email.match(emailRegex)){
            EmailErr.textContent = "Please enter a valid email ex(example@example.ex)";
            EmailErr.classList.remove("d-none");
            signUpEmail.classList.add("border-danger");
            return false;
        }
        EmailErr.classList.add("d-none");
        EmailErr.textContent = "";
        signUpEmail.classList.add("border-success");
        return true;
    }
    //passRegex
    const minLengthRegex = /^.{8,}$/;  // Minimum length of 8 characters
    const digitRegex = /^(?=.*\d)/;    // At least one digit
    const lowercaseRegex = /^(?=.*[a-z])/;  // At least one lowercase letter
    const uppercaseRegex = /^(?=.*[A-Z])/;  // At least one uppercase letter
    const specialCharRegex = /^(?=.*[!@#$%^&*])/;  // At least one special character
    function validatePassword(password) {
        if (!minLengthRegex.test(password)) {
            passErr.textContent = "Password must be at least 8 characters long.";
            passErr.classList.remove("d-none");
            signUpPassword.classList.add("border-danger");
            return false;
        }
        if (!digitRegex.test(password)) {
            passErr.textContent = "Password must contain at least one digit.";
            passErr.classList.remove("d-none");
            signUpPassword.classList.add("border-danger");
            return false;
        }
        if (!lowercaseRegex.test(password)) {
            passErr.textContent = "Password must contain at least one lowercase letter.";
            passErr.classList.remove("d-none");
            signUpPassword.classList.add("border-danger");
            return false;
        }
        if (!uppercaseRegex.test(password)) {
            passErr.textContent = "Password must contain at least one uppercase letter.";
            passErr.classList.remove("d-none");
            signUpPassword.classList.add("border-danger");
            return false;
        }
        if (!specialCharRegex.test(password)) {
            passErr.textContent = "Password must contain at least one special character (!@#$%^&*).";
            passErr.classList.remove("d-none");
            signUpPassword.classList.add("border-danger");
            return false;
        }
        passErr.classList.add("d-none");
        passErr.textContent = "";
        signUpPassword.classList.remove("border-danger");
        signUpPassword.classList.add("border-success");
        return true;
    }
    //repassword validation
    function checkPassword(rePass){
        if(rePass != signUpPassword.value){
            rePassErr.textContent = "Passwords do not match.";
            rePassErr.classList.remove("d-none");
            repassword.classList.add("border-danger");
            signUpPassword.classList.add("border-warning");
            return false;
        }
        rePassErr.textContent = "";
        rePassErr.classList.add("d-none");
        repassword.classList.remove("border-danger");
        signUpPassword.classList.remove("border-warning");
        repassword.classList.add("border-success");
        signUpPassword.classList.add("border-success");
        return true;
    }


    //main-info validation
    //firstNameRegex
    const NameUpperCaseRegex = /^[A-Z]/;
    const onlyAlphCharRegex = /^[A-Za-z]+$/;
    const notEmptyRegex = /^.{1,}$/;

    function validateFirstName(fName) {
        if (!notEmptyRegex.test(fName)) {
            fNameErr.textContent = "First Name cannot be empty.";
            fNameErr.classList.remove("d-none");
            firstName.classList.add("border-danger");
            return false;
        }
        if (!onlyAlphCharRegex.test(fName)) {
            fNameErr.textContent = "First Name can only contain alphabetic characters.";
            fNameErr.classList.remove("d-none");
            firstName.classList.add("border-danger");
            return false;
        }
        if (!NameUpperCaseRegex.test(fName.charAt(0))) {
            fNameErr.textContent = "First Name should start with an uppercase letter.";
            fNameErr.classList.remove("d-none");
            firstName.classList.add("border-danger");
            return false;
        }
        fNameErr.classList.add("d-none");
        fNameErr.textContent = "";
        firstName.classList.remove("border-danger");
        firstName.classList.add("border-success");
        return true;
    }

    const lastNameRegex = /^$|^[A-Z][a-zA-Z]*$/;
    function validateLastName(lName) {
        if (!lastNameRegex.test(lName)) {
            lNameErr.textContent = "Last Name should start with an uppercase letter & can only contain alphabetic characters.";
            lNameErr.classList.remove("d-none");
            lastName.classList.add("border-danger");
            return false;
        }
        lNameErr.classList.add("d-none");
        lNameErr.textContent = "";
        lastName.classList.remove("border-danger");
        lastName.classList.add("border-success");
        return true;
    }


    //phoneNumberValidation
    const phoneNumberRegex = /^\d{11}$/;

    function validatePhoneNumber(tel) {
        if (!phoneNumberRegex.test(tel)) {
            telErr.textContent = "Phone number must be 11 digits long.";
            telErr.classList.remove("d-none");
            phoneNumber.classList.add("border-danger");
            return false;
        }
        telErr.classList.add("d-none");
        telErr.textContent = "";
        phoneNumber.classList.add("border-success");
        return true;
    }


//storeData methods
const usersData = [];



//Event Listener

//got to login
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


//main info next

//add prop dynamiclly so it be added only once and any change will just edit it and wont create a new one
const userData = {};

mainInfoNextBTN.addEventListener("click", event=>{
    event.stopPropagation();
    if(validateFirstName(firstName.value) && validateLastName(lastName.value) && validatePhoneNumber(phoneNumber.value)){
        userData.firstName = firstName.value;
        userData.lastName = lastName.value;
        userData.phoneNumber = phoneNumber.value;
        userData.DOB = DOB.value;
        console.log(userData);
        
    }
    else{
        event.preventDefault();
    }
});


// upload img next
const defultImgUrl = displayImg.src;
profileImage.addEventListener("change", event=>{
    const file = event.target.files[0];
    if(file){
        const reader = new FileReader();
        reader.onload = function() {
            displayImg.src = reader.result;
            displayImgSec.classList.remove("d-none");
            UplodeImgNextBTN.textContent = "Next";
        }
        reader.readAsDataURL(file);
    }
    else{
        displayImgSec.classList.add("d-none");
        displayImg.src = defultImgUrl;
    }
})
UplodeImgNextBTN.addEventListener("click", event=>{
    event.stopPropagation();
    
    //weather it's the defulte or an uploaded one
    userData.profileImage = displayImg.src;
    console.log(userData);
});

//email & password

let allowsigning = false;
signUpEmail.addEventListener("blur", ()=>{
    if(validateEmail(signUpEmail.value)){
        allowsigning = true;
        userData.email = signUpEmail.value
    }
    else allowsigning = false;
});
signUpPassword.addEventListener("blur", ()=>{
    if(validatePassword(signUpPassword.value)){
        allowsigning = true;
        //add the password after checking on it
    }
    else allowsigning = false;
});
repassword.addEventListener("blur", ()=>{
    if(checkPassword(repassword.value)){
        allowsigning = true;
        userData.password = signUpPassword.value;
    }
    else allowsigning = false;
});

function finishsignup(){
    console.log(allowsigning);
    if(!allowsigning){
        validateEmail(signUpEmail.value);
        validatePassword(signUpPassword.value);
    }
    console.log(userData);
    
}