const form = document.getElementById('form');
const userName = document.getElementById('userName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//show error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

//show success message
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

//checking valid email
function checkEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, 'Email is not valid');
    }
}

function checkingRequire(inputArr) {
    inputArr.forEach(function (input) {
        // console.log(input)
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is require`)
        } else {
            showSuccess(input);
        }
    });

}
//check length;
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} must be atleast ${min} character`);
    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less then ${max} character`);
    } else {
        showSuccess(input);
    }
}

//check matched password
function checkPasswordMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, 'Password do not match');
    }
}

//get field name 
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
// Event Listeners
form.addEventListener('submit', function (e) {
    e.preventDefault();
    checkingRequire([userName, email, password, password2]);
    checkLength(userName,3,15);
    checkLength(password, 6, 25);
    checkEmail(email);
    checkPasswordMatch(password, password2);
   
});