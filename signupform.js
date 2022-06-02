// JS File for index.html Sign Up Form
// const inputs = document.querySelectorAll("input");


const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const phNumber = document.querySelector('#phNumber');

const password = document.querySelector('#password');
const pwConfirm = document.querySelector('#pwConfirm');
// const validationSpan = document.querySelector("#password + span.validation");

const form = document.getElementById('form');
form.noValidate = true;




firstName.addEventListener('blur', () =>{
    
    let validationSpan = document.querySelector("#firstName + span.validation")
    if (firstName.value){

        firstName.classList.remove('invalid');
        firstName.classList.add('valid');
        validationSpan.textContent = "Thats a great name."
    } else {
        firstName.classList.add('invalid');
        
        validationSpan.textContent = "Please enter your first name";
    }
});

lastName.addEventListener('blur', () =>{
    
    let validationSpan = document.querySelector("#lastName + span.validation")
    if (lastName.value){

        lastName.classList.remove('invalid');
        lastName.classList.add('valid');
        validationSpan.textContent = "Well done."
    } else {
        lastName.classList.add('invalid');
        
        validationSpan.textContent = "Please enter your last name";
    }
});

email.addEventListener('blur', () =>{
    
    let validationSpan = document.querySelector("#email + span.validation")
    if (email.value){

        email.classList.remove('invalid');
        email.classList.add('valid');
        validationSpan.textContent = "That's it!"
    } else {
        email.classList.add('invalid');
        
        validationSpan.textContent = "Please enter a valid email";
    }
});

phNumber.addEventListener('blur', () =>{
    
    let validationSpan = document.querySelector("#phNumber + span.validation")
    if (phNumber.value){

        phNumber.classList.remove('invalid');
        phNumber.classList.add('valid');
        validationSpan.textContent = "Fabulous."
    } else {
        phNumber.classList.add('invalid');
        
        validationSpan.textContent = "Please enter your phone number";
    }
});









pwConfirm.addEventListener('blur', () =>{

if (password.value && pwConfirm.value){
    password.classList.remove('invalid');
    pwConfirm.classList.remove('invalid');
    let validationSpan = document.querySelector("#password + span.validation")

    if (password.value === pwConfirm.value){
       
        password.classList.add('valid');
        pwConfirm.classList.add('valid');
        validationSpan.textContent = "Passwords match"; 
    } else {
        password.classList.add('invalid');
        pwConfirm.classList.add('invalid');
        validationSpan.textContent = "Password needs a capital letter, and a quote from a Fetty Wap song"; 
    }
}

});










// WHEN is the correct time to validate a field... 
//options:
//  1. When the field loses focus - problem, only one field has focus at once, will others trigger bc they arent focused?
// 2. While typing - problem - annoying to be invalid while still typing
// 3. On submit - problem - users shouldnt get to submit if they have errors above



// It first validates when the user leaves the input, 
//      then if the input is invalid it will behave aggressively until the input is valid again (Triggered when the user presses a key). 
//  and it will go back to being lazy (Triggered when the user leaves the input.).