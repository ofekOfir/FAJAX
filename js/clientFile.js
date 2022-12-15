
let loginUserName = "";
let loginPassword = "";
let friendList = "";
let newUser = {};


class user {
    constructor(name, password) {
        this.name = name;
        this.password = password;
        this.id = "newUser";
        this.friends = { [name]: [] };
    }
}

function checkIfUserExists() {
    // creates the elements
    loginUserName = document.getElementById("loginUserName");
    loginPassword = document.getElementById("loginPassword");
    let userExists = false;
    let userObj = { name: loginUserName.value, password: loginPassword.value };
    Fajax = new FAJAX();
    Fajax.open("post", "checkIfUserExists");
    Fajax.onload = function () {
        userExists = Fajax.response;
    }
    Fajax.send(userObj);
    return userExists;
}

function createNewClient() {
    //First we have to create the new document elemts so that we can refrence them.
    let regPassword = document.querySelector("#registerPassword");
    let regUserName = document.getElementById("registerUserName");
    //Creat the new client if there not existing one;
    newUser = new user(regUserName.value, regPassword.value);
    Fajax = new FAJAX();
    Fajax.open("post", "newUser")
    Fajax.onload = function () {
        if (regPassword.value.length > 0 && regUserName.value.length > 0 && Fajax.response) {
            switchTemp();
        }
        else {
            alert("This username already exists, YOU CHEAT, YOU LIAR, YOU SCOUNDREL YOU!!")
        }
    }
    Fajax.send(newUser);
}

function callAllFriends() {
    friendList = document.getElementById("friendList");
    friendList.innerHTML = "";
    Fajax = new FAJAX();
    Fajax.open("get", "callFriendList");
    Fajax.onload = function () {
        let contacts = Fajax.response;
        for (let obj of contacts) {
            console.log("k");

            if (obj[loginUserName.value]) {
                console.log("keer");
                for (let friend of obj[loginUserName.value]) {
                    friendList.innerHTML += friend + "<br>"
                }
            }
        }
    }
    Fajax.send();
}


function addFriendFunction() {
    let friendPrompt = prompt("Type In your new friend");
    let addFriend = { userName: loginUserName.value, friendName: friendPrompt };
    if (friendPrompt.length > 0) {
        Fajax = new FAJAX();
        Fajax.open("post", "addFriend")
        Fajax.onload = function () {
            Fajax.response;

        }
        Fajax.send(addFriend);
    }
}


function removeFriendFunction() {
    let friendPrompt = prompt("which friend would you like TO DESTROY!!!!!");
    let removeFriend = { userName: loginUserName.value, friendName: friendPrompt }
    Fajax = new FAJAX();
    Fajax.open("delete", "removeFriend")
    Fajax.onload = function () {
        Fajax.data;
    }
    Fajax.send(removeFriend);
}

// function createNewFajax(){
    
// }
