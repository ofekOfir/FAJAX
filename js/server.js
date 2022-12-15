class Server {
   serving(method = true, url) {
      if (method === "post" && url === "checkIfUserExists") {
         return this.postUserName(Fajax.data);
      }
      else if (method === "post" && url === "newUser") {
         console.log(Fajax.data);
         return this.postTolocalStorage(Fajax.data);

      }
      else if (method === "post" && url === "addFriend") {
         return this.postAddFriendFunction(Fajax.data);
      }
      else if (method === "delete" && url === "removeFriend") {
         return this.deleteFriendFunction(Fajax.data);
      }
      else if (method === "get" && url === "callFriendList") {
         return this.getFriends();
      }

   }

   postUserName(linkObj) {
      console.log("server getting true/false from the database " + dataBase.userNameExists(linkObj));
      return dataBase.userNameExists(linkObj);
   }
   postTolocalStorage(linkObj) {
      return dataBase.toLocalStorage(linkObj)
   }
   postAddFriendFunction(linkObj) {
      return dataBase.addFriendFunction(linkObj.userName, linkObj.friendName);
   }
   deleteFriendFunction(linkObj) {
      return dataBase.removeFriendFunction(linkObj.userName, linkObj.friendName);
   }
   getFriends() {
      return dataBase.friendsList();
   }
}


