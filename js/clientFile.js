// let loginUserName = "";
// let loginPassword = "";
// let friendList = "";
// let localStorageArr = [];
// let newClient = {};


class user {
    constructor(name, password) {
        this.name = name;
        this.password = password;
        this.friends = { [name]: [] };
    }
}

// function checkIfUserExists() {
//     // creates the elements
//     loginUserName = document.getElementById("loginUserName");
//     loginPassword = document.getElementById("loginPassword");
//     localStorageArr = JSON.parse(localStorage.getItem("users"));
//     for (let i = 0; i < localStorageArr.length; i++) {
//         if (loginUserName.value === localStorageArr[i].name && loginPassword.value === localStorageArr[i].password) {
//             return true;
//         }

//     }
//     return false;
// }

// function createNewClient() {
//     console.log("ho")
//     //First we have to create the new document elemts so that we can refrence them.
//     let regPassword = document.querySelector("#registerPassword");
//     let regUserName = document.getElementById("registerUserName");
//     //Creat the new client if there not existing one;
//     newClient = new user(regUserName.value, regPassword.value);
//     sendToLocalStorage(newClient);


// }

// function sendToLocalStorage(newClient) {
//     if (!localStorage.getItem("users") || !localStorage.getItem("contacts")) {
//         localStorage.setItem("users", "[]");
//         localStorage.setItem("contacts", "[]");
//     }
//     let userArr = JSON.parse(localStorage.getItem("users"));
//     let contactArr = JSON.parse(localStorage.getItem("contacts"));
//     let check = true;
//     for (let key of userArr) {
//         if (newClient.name == key.name) {
//             check = false;
//         }
//     }
//     if (newClient.name != "" && newClient.password != "" && check) {
//         contactArr.push(newClient.friends);
//         userArr.push(newClient);
//         switchTemp();
//     }
//     localStorage.setItem("users", JSON.stringify(userArr));
//     localStorage.setItem("contacts", JSON.stringify(contactArr));
// }


// function callAllFriends(){
//     friendList = document.getElementById("friendList");
//     friendList.innerHTML="";
//     let contacts = JSON.parse(localStorage.getItem('contacts'));
//     for (let obj of contacts) {
//         if(obj[loginUserName.value]){
//             for(let friend of obj[loginUserName.value]){
//                 friendList.innerHTML+= friend +"<br>"
//             }
//         }
//     }
// }


// function addFriendFunction() {
//     let friendPrompt = prompt("Type In your new friend");
//     let contactArr = JSON.parse(localStorage.getItem('contacts'));
//     for (let obj of contactArr) {
//         console.log("dakjdsakjkdsa");
//         if (obj[loginUserName.value]) {

//             obj[loginUserName.value].push(friendPrompt);
//         }
//     }
//     localStorage.setItem('contacts', JSON.stringify(contactArr));
// }


// function removeFriendFunction() {
//     let friendPrompt = prompt("which friend would you like TO DESTROY!!!!!");
//     let contactArr = JSON.parse(localStorage.getItem('contacts'));
//     for (let i in contactArr) {
//         if (contactArr[i][loginUserName.value]) {
//             let index= contactArr[i][loginUserName.value].indexOf(friendPrompt)
//             if(index>-1)
//             contactArr[i][loginUserName.value].splice(index,1);
//             else{
//                 alert('You have no such friend, you fiend, you lier, you scoundrel')
//             }
//         }
//     }
//     localStorage.setItem('contacts', JSON.stringify(contactArr));
// }

