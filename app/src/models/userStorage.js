"use strict"

class UserStorage {
  // static을 선언하면 정적변수가 된다.
  // 변수를 public에서 private 생태로 만들려면 변수명 앞에 # 붙이기
  static #users = {
    id: ["shinm93", "black93", "hoodie"],
    password: ["1234", "2345", "3456"],
    name: ["우리밋", "나개발", "김팀장"],
  };

  static getUsers(...fields) {
    const users = this.#users
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field]
      }
      return newUsers;
    }, {})
    return newUsers;
  }

  static getUserInfo(id) {
    const users = this.#users;
    console.log("users",typeof users, users);
    const idx = users.id.indexOf(id)
    console.log("idx",idx);

    // 복습하기!! reduce and Object and Array
    const userInfo = Object.keys(users).reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      console.log("newUser, info",newUser, info);
      return newUser
    }, {})
    return userInfo
  }

}

module.exports = UserStorage;