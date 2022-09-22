"use strict"

const UserStorage = require("./userStorage")

class User {
  constructor(body) {
    this.body = body
  }

  login() {
    const a = UserStorage.getUserInfo("shinm93");
    // const {id, password} = UserStorage.getUserInfo("shinm93");
    console.log("!!",a);
  }
}

module.exports = User;