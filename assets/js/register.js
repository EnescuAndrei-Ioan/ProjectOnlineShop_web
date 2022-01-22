function ifSuccess(response) {
    console.log("YOU ARE SIGNED UP.");
}

function ifError(error) {
    console.log(error);
}

function createAccount() {
    const data = {
        firstName: document.getElementsByName("firstName")[0].value,
        middleName: document.getElementsByName("middleName")[0].value,
        lastName: document.getElementsByName("lastName")[0].value,
        type: document.getElementsByName("type")[0].value,
        gender: document.getElementsByName("gender")[0].value,
        countryCode: document.getElementsByName("countryCode")[0].value,
        phone: document.getElementsByName("phone")[0].value,
        adress: document.getElementsByName("adress")[0].value,
        email: document.getElementsByName("email")[0].value,
        password: document.getElementsByName("password")[0].value,
        passwordRepeat: document.getElementsByName("passwordRepeat")[0].value
    };
    url = "http://localhost:3002/api/v1/users";
    options = {
        body: JSON.stringify(data),
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        }
    };

    fetch(url, options)
    .then(ifSuccess)
    .catch(ifError)
}