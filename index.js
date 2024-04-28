const passwordOutput = document.querySelector('#password-output');
const lengthInput = document.querySelector('#length-input');
const uppercaseInput = document.querySelector('#uppercase-input');
const lowercaseInput = document.querySelector('#lowercase-input');
const numbersInput = document.querySelector('#numbers-input');
const symbolsInput = document.querySelector('#symbols-input');
const generateButton = document.querySelector('#generate-btn');

const getRandomLower = () => {
    // TODO: Generate a random lowercase letter
    const randomLower = Math.floor(Math.random() * 26);
    return String.fromCharCode(97 + randomLower);
};

const getRandomUpper = () => {
    // TODO: Generate a random uppercase letter
    const randomUpper = Math.floor(Math.random() * 26);
    return String.fromCharCode(65 + randomUpper);

};

const getRandomNumber = () => {
    // TODO: Generate a random number
    const randomNumber = Math.floor(Math.random() * 10);
    return String.fromCharCode(48 + randomNumber);
};

const getRandomSymbol = () => {
    // TODO: Generate a random symbol
    const symbols = "!@#$%^&*()_+{}[];:,.<>?";
    const randomSymbol = Math.floor(Math.random() * symbols.length);
    return symbols[randomSymbol];

};

const generatePassword = () => {
    // TODO: Generate a password based on user input
    // Validate the password length and character type selection
    const length = parseInt(lengthInput.value);
    if(length < 8 || length > 32 || isNaN(length)){
        alert("Please re-choose another password: ");
        return;
    }
    // Generate the password using selected character types
    let password = '';
    const characterType = [];
    if(uppercaseInput.checked){
        characterType.push(getRandomUpper);
    }
    if (lowercaseInput.checked){
        characterType.push(getRandomLower);
    }
    if(numbersInput.checked){
        characterType.push(getRandomNumber);
    }    
    if(symbolsInput.checked){
        characterType.push(getRandomSymbol);
    }
    if(characterType.length === 0){
        alert("Please enter a password: ");
        return;
    }
    for(let i = 0; i < length; i++){
        const randomChar = characterType[Math.floor(Math.random() * characterType.length)];
        password += randomChar();
    }
    passwordOutput.textContent = password;
    // Update the password output element with the generated password
};

generateButton.addEventListener('click', generatePassword);
