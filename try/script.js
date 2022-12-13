addEventListener("DOMContentLoaded", firstPage);
let main = document.querySelector("main");
let usersArr = [];

function firstPage(event) {
    event.preventDefault();
    let some = document.querySelector("#login").content;
    let clon = document.importNode(some, true);
    main.innerHTML = ' ';
    main.appendChild(clon);
    let name = document.querySelector("#name");
    let password = document.querySelector("#password");
    document.querySelector("#btnToSignUp").addEventListener("click", signUp);

    document.querySelector("#btnToGame").addEventListener("click", (event) => {
        event.preventDefault();
        if (localStorage.getItem("users")) {
            let exist = checkStorage(name, password, "signIn");
            if (exist) {
                game();
            }
            else {
                alert("your user name or password incorrect");
            }
        }
        else {
            alert("your didn't sign up");
        }
    });
}


function checkStorage(name, password, signInOrSingUp) {
    let users = JSON.parse(localStorage.getItem("users"));
    for (let user of users) {
        if (signInOrSingUp == "signIn") {
            if (user.name == name.value && user.password == password.value) {
                return true;
            }
        }
        else {
            if (user.name == name.value) {
                return true;
            }
        }
    }
    return false;
}

function game() {
    let some = document.querySelector("#game").content;
    let clon = document.importNode(some, true);
    main.innerHTML = ' ';
    main.appendChild(clon);
    document.querySelector(".btnToLogin").addEventListener("click", firstPage);
}



function signUp(event) {
    event.preventDefault();
    let some = document.querySelector("#signUp").content;
    let clon = document.importNode(some, true);
    main.innerHTML = ' ';
    main.appendChild(clon);
    document.querySelector(".btnToLogin").addEventListener("click", firstPage);
    let regButton = document.querySelector("#regButton");
    regButton.addEventListener("click", (event) => { event.preventDefault(); register(); });
}

function register() {
    let name = document.querySelector("#name1");
    let password = document.querySelector("#password1");
    if (localStorage.getItem("users")) {
        if (checkStorage(name, password, "signUp")) {
            alert("user already exist");
            location.reload();
        }
        else {
            usersArr = JSON.parse(localStorage.getItem("users"));
            usersArr.push({ name: name.value, password: password.value });
            localStorage.setItem("users", JSON.stringify(usersArr));
            alert("you successfully sign up");
            location.reload();
        }
    }
    else {
        //console.log({ name: name.value, password: password.value });
        usersArr.push({ name: name.value, password: password.value });
        localStorage.setItem("users", JSON.stringify(usersArr));
        alert("you successfully sign up");
        location.reload();
    }
}


