let regButton = "";
let loginBtn = "";

if (location.hash == "") {
    show("login")

}
else show(location.hash.substring(1))
const butArray = document.querySelectorAll('.changePage')

loginBtn = document.getElementById("btnToApp");
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
        regButton.addEventListener('click', creatNewClient);
    }
    else if (location.hash == "#login") {
        if (checkIfUserExists())
            show("game");
        else{
            alert("Username or password is incorrect");
        }
    }
    else if (location.hash == "#signUp") {
        show("login");
    }
    else if (location.hash == "#game") {
        show("login");
    }
}

function popping() {
    let newHash = location.hash.substring(1);
    show(newHash);
}

window.addEventListener('hashchange',()=>{
    console.log("dfdf")
    loginBtn = document.getElementById("btnToApp");
    loginBtn.addEventListener("click", switchTemp);
})


