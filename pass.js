const passBtn = document.getElementById("generatePassBtn");
const generatedPass = document.getElementById("generatedPassOutput");

function generatePassword(passwordLength, includeLowerC, includeUpperC, includeNum, includeSymbol) {
    const lowerChars = "abcdefghijklmnopqrstuvwxyz";
    const upperChars = "ABCDEFGHIJKLMNOPQRTSTUWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()+-";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowerC ? lowerChars : "";
    allowedChars += includeUpperC ? upperChars : "";
    allowedChars += includeNum ? numberChars : "";
    allowedChars += includeSymbol ? symbolChars : "";
    
    if(allowedChars.length === 0) {
        return `At least one option must be selected`;
    }

    for(let i = 0; i < passwordLength; i++){ 
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}

passBtn.onclick = function () {
    const passwordLength = Number(document.getElementById("option1").value);
    const includeLowerC = Boolean(document.getElementById("option2").checked);
    const includeUpperC = Boolean(document.getElementById("option3").checked);
    const includeNum = Boolean(document.getElementById("option4").checked);
    const includeSymbol = Boolean(document.getElementById("option5").checked);
    let password;

    if(passwordLength < 8){
        generatedPass.innerHTML = `Generated password is: Input a number bigger than 7`;
        passwordLength = Number(document.getElementById("option1").value);
        includeLowerC = Boolean(document.getElementById("option2").checked);
        includeUpperC = Boolean(document.getElementById("option3").checked);
        includeNum = Boolean(document.getElementById("option4").checked);
        includeSymbol = Boolean(document.getElementById("option5").checked);
    }else {
        password = generatePassword(passwordLength, includeLowerC, includeUpperC, includeNum, includeSymbol);
    }

    generatedPass.innerHTML = `Generated password is: ${password}`;
};
