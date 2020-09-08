function validateForm() {
    const firstName = document.getElementById('firstName')
    const lastName = document.getElementById('lastName')
    const username = document.getElementById('username')
    const password = document.getElementById('password')
    const confirmPassword = document.getElementById('confirmPassword')
    const monthOfBirth = document.getElementById('monthOfBirth')
    const dayOfBirth = document.getElementById('dayOfBirth')
    const yearOfBirth = document.getElementById('yearOfBirth')
    const gender = document.getElementById('gender')
    const isdCode = document.getElementById('isdCode')
    const mobile = document.getElementById('mobile')
    const currentEmail = document.getElementById('currentEmail')
    const location = document.getElementById('location')
    const terms = document.getElementById('terms')
    const personalization = document.getElementById('personalization')

    if (!firstName.value || !lastName.value) {
        alert('Please enter firstname and lastname')
        return false
    }

    if (!validateEmail(username.value)) {
        alert('Username must be in specified email format')
        return false
    }

    if (password.value !== confirmPassword.value) {
        alert('Passwords do not match.')
        return false
    }

    if (!validatePassword(password.value)) {
        alert('Password is not strong')
        return false
    }

    if (!monthOfBirth.value || !dayOfBirth.value || !yearOfBirth) {
        alert('Enter DOB properly')
        return false
    }

    if (!gender.value) {
        alert('Choose gender')
        return false
    }

    if(!isdCode.value || !mobile.value) {
        alert('Enter mobile number properly')
        return false
    }

    if (!validateEmail(currentEmail.value)) {
        alert('Current email is not valid')
        return false
    }

    if (!location.value) {
        alert('Choose location')
        return false
    }

    if (!terms) {
        alert('You must accept the terms & conditions')
        return false
    }

    return true
}

function validatePassword(password) {
    const regex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\\S+$).{8,20}$/;
    return regex.test(String(password));
}

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}