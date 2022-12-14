let regButton = "";
let loginBtn = "";
let switchers = "";
let getAllFriendsBtn = "";
let addFriendBtn = "";
let removeFriendBtn = "";
// let loginUserName = "";
// let loginPassword = "";
// let friendList = "";
// // let localStorageArr = [];
// let newClient = {};

if (location.hash == "") {
    show("login")

}
else show(location.hash.substring(1))
let butArray = document.querySelectorAll('.changePage')
for (let but of butArray) {
    but.addEventListener('click', switchTemp);
}

loginBtn = document.getElementById("btnToApp");
if (loginBtn)
    loginBtn.addEventListener("click", switchTemp);
history.replaceState({}, "", location.hash)
addEventListener('popstate', popping);

// for(let x of butArray){
//     x.addEventListener('click',switchTemp)
// }
// getUserName();
function show(id) {
    location.hash = `#${id}`;
    let template = document.getElementById(id).innerHTML;
    document.querySelector('main').innerHTML = template;

}

function switchTemp(event) {
    if (location.hash == "#login" && event.target.className) {
        show("signUp");
        regButton = document.querySelector('#regButton');
        regButton.addEventListener('click', createNewClient);
    }
    else if (location.hash == "#login") {
        if (checkIfUserExists())
            show("game");
        else {
            alert("Username or password is incorrect");
        }
    }
    else if (location.hash == "#signUp") {
        show("login");
    }
    else if (location.hash == "#game") {
        show("login");
        // addFriendBtn = document.getElementById("addFriend");
        // removeFriendBtn = document.getElementById("removeFriend");
        // getAllFriendsBtn = document.getElementById("getAllFriends");
        // addFriendBtn.addEventListener("click", addFriendF);
    }
}

function popping() {
    let newHash = location.hash.substring(1);
    show(newHash);
}

window.addEventListener('hashchange', () => {
    console.log("dfdf")
    butArray = document.querySelectorAll('.changePage')
    for (let but of butArray) {
        but.addEventListener('click', switchTemp);
    }
    loginBtn = document.getElementById("btnToApp");
    if (loginBtn)
        loginBtn.addEventListener("click", switchTemp);

    addFriendBtn = document.getElementById("addFriend");
    removeFriendBtn = document.getElementById("removeFriend");
    getAllFriendsBtn = document.getElementById("getAllFriends");
    if (getAllFriendsBtn && removeFriendBtn && addFriendBtn) {
        addFriendBtn.addEventListener("click", addFriendFunction);
        removeFriendBtn.addEventListener("click", removeFriendFunction);
        getAllFriendsBtn.addEventListener('click',callAllFriends)
    }
})



let dataBase = new DataBase();
let server = new Server();