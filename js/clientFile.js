// class Client {
//     constructor(name, password) {
//         this.name = name;
//         this.password = password;
//     }


// }

// class Client {
//     constructor(name, password) {
//         this.name = name;
//         this.password = password;
//         this.friends = { [name]: [] };
//     }

//     // sendRegisterUserName() {
//     //     return this.name;
//     // }
//     // sendRegisterPassword() {
//     //     return this.password;
//     // }
//     sendToLocalStorage() {
//         if (!localStorage.getItem("users") || !localStorage.getItem("contacts")) {
//             localStorage.setItem("users","[]");
//             localStorage.setItem("contacts","[]");
//         }
//         let userArr = JSON.parse(localStorage.getItem("users"));
//         let contactArr = JSON.parse(localStorage.getItem("contacts"));
//         let check=true;
//         for(let key of userArr){
//             if(this.name==key.name){
//                 check=false;
//             }
//         }
//        if(this.name!="" && this.password!="" && check){
//         contactArr.push(newClient.friends);
//         userArr.push(newClient);
//         switchTemp();}
//         localStorage.setItem("users", JSON.stringify(userArr));
//         localStorage.setItem("contacts", JSON.stringify(contactArr));
//     }

// }