let errorMsg = document.querySelector('#error-msg');
let email_input = document.querySelector('.email-input');
let success_msg = document.querySelector('.successMsg');
let form_input = document.querySelector('form');
let submit_btn = document.querySelector('.submit-btn');
let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
let subscribePage = document.querySelector('.cont-bcg');
let successPage = document.querySelector('.container-2');
let showSuccess = document.querySelector('.hide');


form_input.addEventListener("submit" , (e) => {
    e.preventDefault();

    subscribePage.style.display = "none";
    showSuccess.style.display = "block";

    email_input = email_input.value;
    success_msg.innerHTML = `A confirmation email has been sent to <strong> ${email_input} </strong>. Please open it and click the button inside to confirm your subscription.`;
})  


submit_btn.addEventListener("click" , () => {
    if(email_input.value.match(validRegex)){
        errorMsg.style.display = "none";
        email_input.focus();
        return true;
    } else{
        errorMsg.style.display = "block";
        email_input.focus();
        return false;
    }
})