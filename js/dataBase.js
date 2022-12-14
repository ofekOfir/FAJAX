

class DataBase {
    
    postUserName(userObj) {
        let localStorageArr = JSON.parse(localStorage.getItem("users"));
        for (let i = 0; i < localStorageArr.length; i++) {
            if (userObj.name === localStorageArr[i].name && userObj.password === localStorageArr[i].password) {
                return true;
            }
        }
        return false;
    }
   GetFriends() {
        let contacts = JSON.parse(localStorage.getItem('contacts'));
        return contacts;
    }
    postToLocalStorage(newClient) {
        if (!localStorage.getItem("users") || !localStorage.getItem("contacts")) {
            localStorage.setItem("users", "[]");
            localStorage.setItem("contacts", "[]");
        }
        let userArr = JSON.parse(localStorage.getItem("users"));
        let contactArr = JSON.parse(localStorage.getItem("contacts"));
        let check = true;
        for (let key of userArr) {
            if (newClient.name == key.name) {
                check = false;
            }
        }
        if (newClient.name != "" && newClient.password != "" && check) {
            contactArr.push(newClient.friends);
            userArr.push(newClient);
        }
        localStorage.setItem("users", JSON.stringify(userArr));
        localStorage.setItem("contacts", JSON.stringify(contactArr));
        return check;
    }

    postAddFriendFunction(name, prompt) {
        let contactArr = JSON.parse(localStorage.getItem('contacts'));
        for (let obj of contactArr) {
            if (obj[name]) {
                obj[name].push(prompt);
            }
        }
        localStorage.setItem('contacts', JSON.stringify(contactArr));
    }
    postRemoveFriendFunction(name, prompt) {
        let contactArr = JSON.parse(localStorage.getItem('contacts'));
        for (let i in contactArr) {
            if (contactArr[i][name]) {
                let index = contactArr[i][name].indexOf(prompt)
                if (index > -1)
                    contactArr[i][name].splice(index, 1);
                else {
                    alert('You have no such friend, you fiend, you liar, you scoundrel')
                }
            }
        }
        localStorage.setItem('contacts', JSON.stringify(contactArr));
    }
    

}