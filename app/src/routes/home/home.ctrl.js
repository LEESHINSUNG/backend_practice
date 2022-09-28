"use strict";

const User = require("../../models/User");
const UserStorage = require("../../models/userStorage")

const output = {
  home: (req, res) => {
    res.render("home/index");
  },

  login: (req, res) => {
    res.render("home/login");
  },
};

 

const process = {
  login: (req, res) => {  
    // const user = new User(req.body)
    // const response = user.login()
    // return res.json(response)
    const id = req.body.id;
    const password = req.body.password;
// 
    const users = UserStorage.getUsers("id","password");
// 
    const response = {};
    if (users.id.includes(id)) {
      const idx = users.id.indexOf(id);
      if (users.password[idx] === password) {
        response.success = true;
        return res.json(response);
      }
    }
// 
    response.success = false;
    response.msg = "로그인에 실패하셨습니다.";
    return res.json(response);
  },
};

module.exports = {
  output,
  process,
};


/* 변수에 클래스를 선언하면 변수에서 속성으로 접근이 가능하지만,
    const userStorage = new UserStorage();
    console.log(userStorage.users); */
    
    // 클래스 자체에서 속성을 접근하려고 할 때는 속성값앞에 static을 선언해 정적변수로 만들어 주어야 한다. (userStorage.js 참고)
    // console.log(UserStorage.users); 
