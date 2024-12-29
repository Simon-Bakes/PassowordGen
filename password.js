const passwordBtn = document.getElementById('passwordBtn');
const passwordBtnHide = document.getElementById('passwordBtnHide');
const upperBtn = document.getElementById('upperBtn');
const lowerBtn = document.getElementById('lowerBtn');
const numberBtn = document.getElementById('numberBtn');
const specialBtn = document.getElementById('specialBtn');
const buttonBtn = document.getElementById('selectBtn');
const lengthBtn = parseInt(document.getElementById('lengthBtn'));
const strength = document.getElementById('strength');

function changePasswordType() 
{
    if(!passwordBtnHide.checked)
        {
            passwordBtn.type = 'password';
        }
        else
        {
            passwordBtn.type = 'text';
        }
}

function selectAll()
{
    const isAllSelected = upperBtn.checked && lowerBtn.checked && numberBtn.checked && specialBtn.checked;

    if(isAllSelected)
    {
        buttonBtn.style.background = 'white';
        upperBtn.checked = false;
        lowerBtn.checked = false;
        numberBtn.checked = false;
        specialBtn.checked = false;
    }
    else
    {
        buttonBtn.style.background = 'rgb(38, 76, 247)';
        upperBtn.checked = true;
        lowerBtn.checked = true;
        numberBtn.checked = true;
        specialBtn.checked = true;
    }
}

function generatePass() {
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    const number = '0123456789';
    const special = '!@#$%^&*()_+{}:"<>?|[];\',./';

    const length = parseInt(document.getElementById('lengthBtn').value, 10);
    let password = '';

    if(!upperBtn.checked && !lowerBtn.checked && !numberBtn.checked && !specialBtn.checked)
    {
        document.getElementById("output").innerHTML = "Please select at least one option";
        return;
    }
    else
    {
        document.getElementById("output").innerHTML = "";
    }

    while(password.length < length)
    {
        let select = Math.floor(Math.random() * 4);

        if(select === 0 && upperBtn.checked)
        {
            password += upper[Math.floor(Math.random() * upper.length)];
        }
        else if(select === 1 && lowerBtn.checked)
        {
            password += lower[Math.floor(Math.random() * lower.length)];
        }
        else if(select === 2 && numberBtn.checked)
        {
            password += number[Math.floor(Math.random() * number.length)];
        }
        else if(select === 3 && specialBtn.checked)
        {
            password += special[Math.floor(Math.random() * special.length)];
        }
    }

    if(password.length < 8)
    {
        strength.innerHTML = 'Weak';
        strength.style.color = 'red';
    }
    else if(password.length < 12)
    {
        strength.innerHTML = 'Medium';
        strength.style.color = 'orange';
    }
    else
    {
        strength.innerHTML = 'Strong';
        strength.style.color = 'green';
    }

    passwordBtn.value = password;
}

passwordBtn.addEventListener('input', () => {
    const password = passwordBtn.value;

    let hasUpperCase = /[A-Z]/.test(password);
    let hasLowerCase = /[a-z]/.test(password);
    let hasNumbers = /[0-9]/.test(password);
    let hasSpecialChars = /[!@#$%^&*()_+{}:"<>?|[\];',./]/.test(password);

    if(password.length < 8)
    {
        strength.innerHTML = 'Weak';
        strength.style.color = 'red';
    }
    else if(password.length < 12 || !(hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChars))
    {
        strength.innerHTML = 'Medium';
        strength.style.color = 'orange';
    }
    else
    {
        strength.innerHTML = 'Strong';
        strength.style.color = 'green';
    }
});