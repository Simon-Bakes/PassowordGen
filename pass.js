const passBtn = document.getElementById("generatePassBtn");
const generatedPass = document.getElementById("generatedPassOutput");
const checkPassBtn = document.getElementById("checkPassBtn");

function generatePassword(passwordLength, includeLowerC, includeUpperC, includeNum, includeSymbol) 
{
    const lowerChars = "abcdefghijklmnopqrstuvwxyz";
    const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()+-.?";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowerC ? lowerChars : "";
    allowedChars += includeUpperC ? upperChars : "";
    allowedChars += includeNum ? numberChars : "";
    allowedChars += includeSymbol ? symbolChars : "";
    
    if(allowedChars.length === 0) 
    {
        return `At least one option must be selected`;
    }

    for(let i = 0; i < passwordLength; i++)
    { 
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}

passBtn.onclick = function () 
{
    const passwordLength = Number(document.getElementById("option1").value);
    const includeLowerC = Boolean(document.getElementById("option2").checked);
    const includeUpperC = Boolean(document.getElementById("option3").checked);
    const includeNum = Boolean(document.getElementById("option4").checked);
    const includeSymbol = Boolean(document.getElementById("option5").checked);
    let password;

    if(passwordLength < 8)
    {
        generatedPass.innerHTML = `<span>ERROR!</span> <br><br> Password must be longer than 7 characters`;
        passwordLength = Number(document.getElementById("option1").value);
    }
    else if(includeLowerC == 0 && includeUpperC == 0 && includeNum == 0 && includeSymbol == 0)
    {
        generatedPass.innerHTML = `<span>ERROR!</span> <br><br> You must select at least on option`;
        includeLowerC = Boolean(document.getElementById("option2").checked);
        includeUpperC = Boolean(document.getElementById("option3").checked);
        includeNum = Boolean(document.getElementById("option4").checked);
        includeSymbol = Boolean(document.getElementById("option5").checked);
    }
    else
    {
        password = generatePassword(passwordLength, includeLowerC, includeUpperC, includeNum, includeSymbol);
    }

    generatedPass.innerHTML = `Generated password is: <br><br>${password}`;
};

function selectAll()
{
    if(document.getElementById("option0").checked == true)
    {
        document.getElementById("option2").checked = true;
        document.getElementById("option3").checked = true;
        document.getElementById("option4").checked = true;
        document.getElementById("option5").checked = true;
    }
    else
    {
        document.getElementById("option2").checked = false;
        document.getElementById("option3").checked = false;
        document.getElementById("option4").checked = false;
        document.getElementById("option5").checked = false;
    }
}

checkPassBtn.onclick = function passwordChecker()
{
    const errorOutput = document.getElementById("checkPassOutput");
    const userPass = String(document.getElementById("userPassInput").value);

    const lowerChars = "abcdefghijklmnopqrstuvwxyz";
    const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()+-.?";

    let hasLower = false;
    let hasUpper = false;
    let hasNum = false;
    let hasSymbol = false;

    for(let char of userPass)
    {
        if (lowerChars.includes(char)) hasLower = true;
        if (upperChars.includes(char)) hasUpper = true;
        if (numberChars.includes(char)) hasNum = true;
        if (symbolChars.includes(char)) hasSymbol = true;
    }

    if(userPass.length < 8)
    {
        errorOutput.innerHTML = "Password must be longer than 7 characters.";
    }
    else if(hasLower && hasUpper && hasNum && hasSymbol)
    {
        errorOutput.innerHTML = "Password is strong!";
    }
    else
    {
        errorOutput.innerHTML = "Password is weak!";
    }
}