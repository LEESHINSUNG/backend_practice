"use strict";

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
    // req는 front에서 받은 데이터를 받는 변수
    console.log(req.body);
  },
};

module.exports = {
  output,
  process,
};
