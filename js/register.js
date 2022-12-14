// let regButton = "";
let newClient = {};


class Client {
    constructor(name, password) {
        this.name = name;
        this.password = password;
        this.friends = { [name]: [] };
    }

    // sendRegisterUserName() {
    //     return this.name;
    // }
    // sendRegisterPassword() {
    //     return this.password;
    // }
    sendToLocalStorage() {
        if (!localStorage.getItem("users") || !localStorage.getItem("contacts")) {
            localStorage.setItem("users","[]");
            localStorage.setItem("contacts","[]");
        }
        let userArr = JSON.parse(localStorage.getItem("users"));
        let contactArr = JSON.parse(localStorage.getItem("contacts"));
        let check=true;
        for(let key of userArr){
            if(this.name==key.name){
                check=false;
            }
        }
       if(this.name!="" && this.password!="" && check){
        contactArr.push(newClient.friends);
        userArr.push(newClient);
        switchTemp();}
        localStorage.setItem("users", JSON.stringify(userArr));
        localStorage.setItem("contacts", JSON.stringify(contactArr));
    }

}

// function createBtn(){
//     regButton = document.querySelector('#regButton');

// }

function creatNewClient() {
    //First we have to create the new document elemts so that we can refrence them.
    let regPassword = document.querySelector("#registerPassword");
    let regUserName = document.getElementById("registerUserName");
    //Creat the new client if there not existing one;
    newClient = new Client(regUserName.value, regPassword.value);
    newClient.sendToLocalStorage();
    
    
}

// createBtn();

// regButton.addEventListener('click', creatNewClient);