let loginUserName = "";
let loginPassword = "";
let friendList = "";
// // let localStorageArr = [];
let newClient = {};


class user {
    constructor(name, password) {
        this.name = name;
        this.password = password;
        this.id = "newClient";
        this.friends = { [name]: [] };
    }
}

function checkIfUserExists() {
    // creates the elements
    loginUserName = document.getElementById("loginUserName");
    loginPassword = document.getElementById("loginPassword");
    let userObj = { name: loginUserName.value, password: loginPassword.value, id:"checkIfUserExists" }
    return server.serving(userObj);
}

function createNewClient() {
    //First we have to create the new document elemts so that we can refrence them.
    let regPassword = document.querySelector("#registerPassword");
    let regUserName = document.getElementById("registerUserName");
    //Creat the new client if there not existing one;
    newClient = new user(regUserName.value, regPassword.value);
    let response = server.serving(newClient);
    if (regPassword.value.length > 0 && regUserName.value.length > 0 && response) {
        switchTemp();
    }
    else {
        alert("This username already exists, YOU CHEAT, YOU LIAR, YOU SCOUNDREL YOU!!")
    }
}

function callAllFriends() {
    friendList = document.getElementById("friendList");
    friendList.innerHTML = "";
    let contacts = dataBase.GetFriends();
    for (let obj of contacts) {
        if (obj[loginUserName.value]) {
            for (let friend of obj[loginUserName.value]) {
                friendList.innerHTML += friend + "<br>"
            }
        }
    }
}


function addFriendFunction() {
    let friendPrompt = prompt("Type In your new friend");
    let addFriend = {userName: loginUserName.value, friendName: friendPrompt, id:"addFriend"};
    if (friendPrompt.length > 0) {
        server.serving(addFriend);
    }
}


function removeFriendFunction() {
    let friendPrompt = prompt("which friend would you like TO DESTROY!!!!!");
    let removeFriend = {userName: loginUserName.value, friendName: friendPrompt, id:"removeFriend"}
    server.serving(removeFriend);
}

// let dataBase = new DataBase();

