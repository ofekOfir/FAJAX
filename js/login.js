// let loginUserName = "";
// let loginPassword = "";
// let localStorageArr = [];




function checkIfUserExists() {
    // creates the elements
    loginUserName = document.getElementById("loginUserName");
    loginPassword = document.getElementById("loginPassword");
    localStorageArr = JSON.parse(localStorage.getItem("users"));
    for (let i = 0; i < localStorageArr.length; i++) {
        if (loginUserName.value === localStorageArr[i].name && loginPassword.value === localStorageArr[i].password) {
            console.log("IT'S Alive!!!!!");
            return true;           
        }

    }
    return false;
}

