class Server {
   serving(method = true, url) {
      if (method === "post" && url === "checkIfUserExists") {
         return this.postUserName(network.data);
      }
      else if (method === "post" && url === "newUser") {
         console.log(network.data);
         return this.postTolocalStorage(network.data);

      }
      else if (method === "post" && url === "addFriend") {
         return this.postAddFriendFunction(network.data);
      }
      else if (method === "delete" && url === "removeFriend") {
         return this.deleteFriendFunction(network.data);
      }
      else if (method === "get" && url === "callFriendList") {
         return this.getFriends();
      }  
      else if (method === 'get' && url === "currentUser"){
         return this.getCurrentUser();
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
   getCurrentUser(){
      return dataBase.currentUser();
   }
}


