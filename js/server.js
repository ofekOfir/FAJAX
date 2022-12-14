class Server {
    serving(linkObj) {
        if (linkObj.id === "checkIfUserExists") {
           return dataBase.postUserName(linkObj);
        }
        else if (linkObj.id === "newClient") {
           return dataBase.postToLocalStorage(linkObj);

        }
        else if (linkObj.id === "addFriend") {
           return dataBase.postAddFriendFunction(linkObj.userName, linkObj.friendName);
        }
        else if (linkObj.id === "removeFriend") {
           return dataBase.postRemoveFriendFunction(linkObj.userName, linkObj.friendName);
        }
        // else if (linkObj.id == "") {

        // }

    }
}


