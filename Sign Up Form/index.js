// We are now creating a sign up form. Lets start by figuring out what exactly do you want this app to do?
// I want users to be able to sign up but with valid credentials.
    // Valid First & Last Name
    // Valid Username
    // Valid Email Address
    // passwords must be a minimum of 8 characters
    // passwords must match
    // Everything is required for sign up.
// Now that you have everything established, now you must start working on your javascript.

//Validating First Name
alert("This is just a practice javascript form.");

document.getElementById("fName").addEventListener("input",function(event){
    const fNameInput = event.target.value;
    const fNameError = document.getElementById("firstNameError");

    if(!fNameInput){
        fNameError.style.display = "block";
        fNameError.textContent = "First name is required!"
    } else if (fNameInput.length < 3){
        fNameError.style.display = "block";
        fNameError.textContent = "Please enter a real first name!"
    }  else {
        fNameError.style.display = "none";
    }

    if (fNameError.style.display === "block") {
        setTimeout(() => {
            fNameError.style.display = "none";
        }, 2000);
    }
});

//Validating Last Name
document.getElementById("lName").addEventListener("input", function(event){
    const lNameInput = event.target.value;
    const lNameError = document.getElementById("lastNameError");
    
    if(!lNameInput){
        lNameError.style.display = "block";
        lNameError.textContent = "Last name is required!";
    } else if (lNameInput.length < 3) {
        lNameError.style.display = "block";
        lNameError.textContent = "Please enter a real last name!"
    } else {
        lNameError.style.display = "none";
    }

    if (lNameError.style.display === "block") {
        setTimeout(() => {
            lNameError.style.display = "none";
        }, 2000);
    }
});

// Validate username
document.getElementById("userName").addEventListener("input", function(){
    const username = this.value.trim();
    const error = document.getElementById("userNameError");

    if(!username){
        error.style.display= "block";
        error.textContent = "Username is required!";
        error.style.fontSize = "16px";
    } else if (username.length < 8) {
        error.style.display="block";
        error.style.fontSize = "16px";
        error.textContent = "Too short! Must be at least 8 characters!";
    } else if (username.length > 12) {
        error.style.display = "block";
        error.style.fontSize = "16px";
        error.textContent = "Maximun of 12 characters allowed!";
    } else {
        error.style.display = "none";
    }
});

//Email validation
document.getElementById("email").addEventListener("input", function(){
    const emailInput = this.value;
    const emailError = document.getElementById("emailError");
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const validDomains = ["gmail.com","icloud.com","yahoo.com","sbcglobal.net","comcast.net","ymail.com","hotmail.com","outlook.com"];
    
    if(!emailInput){
        emailError.style.display = "block";
        emailError.textContent = "Please enter your e-mail!";
    } else if (!emailRegex.test(emailInput)) {
        emailError.style.display = "block";
        emailError.textContent = "Please enter a valid e-mail!";
    } else {
        const [localPart, domain] = emailInput.split("@");
        //Check for valid domains 
        if (!validDomains.includes(domain)) {
            emailError.style.display = "block";
            emailError.textContent = `The domain "${domain}" is not allowed. Use: ${validDomains.join(", ")}`;
            //Checking for local part of the email
        } else if (localPart.length < 5 || /^[0-9]+$/.test(localPart)){
            emailError.style.display = "block";
            emailError.textContent = `The local part "${localPart}" is too short or invalid. It must be at least 3 characters long and not purely numeric.`
        } else {
            emailError.style.display = "none";
        }
    }
});

//Password validation 
const passwordValidation = document.getElementById('password');
const passwordError = document.getElementById('passwordError');
const ruleLength = document.getElementById('ruleLength');
const ruleUppercase = document.getElementById('ruleUppercase');
const ruleLowercase = document.getElementById('ruleLowercase');
const ruleNumber = document.getElementById('ruleNumber');
const ruleSpecial = document.getElementById('ruleSpecial');

passwordValidation.addEventListener("input", function(){
    const passwordInput = this.value;
    const passwordError = document.getElementById('passwordError');

    //Reset Errors
    passwordError.style.display = "none";
    ruleLength.style.color = "";

    //Check for empty input
    if (!passwordInput){
        passwordError.style.display = "block";
        passwordError.textContent = "Please create a password.";
        return;
    } 
    
    //checking for password length
    if (passwordInput.length < 8){
        passwordError.style.display = "block";
        passwordError.textContent = "Password must be at least 8 characters!";
        return;
    } else if (passwordInput.length > 12){
        passwordError.style.display = "block";
        passwordError.style.display = "Password cannot exceed 12 characters!";
        return;
    } else {
        passwordError.style.display = "none";
    }
    
    // Rule checks and if valid, removes from the list.
    if (!passwordInput.length >= 8) {
        ruleLength.style.display = "block";
    }
    if (!/[A-Z]/.test(passwordInput)) {
        ruleUppercase.style.display = "block";
    }
    if (!/[a-z]/.test(passwordInput)) {
        ruleLowercase.style.display = "block";
    }
    if (!/[0-9]/.test(passwordInput)) {
        ruleNumber.style.display = "block";
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(passwordInput)) {
        ruleSpecial.style.display = "block";
    } 

    // If all rules are satisfied, hide the error message
    if (passwordInput.length >= 8 && /[A-Z]/.test(passwordInput) && /[a-z]/.test(passwordInput) && /[0-9]/.test(passwordInput) && /[!@#$%^&*(),.?":{}|<>]/.test(passwordInput)) {
        passwordError.style.display = "none";  // Hide error if all conditions are met
    }
});
    




