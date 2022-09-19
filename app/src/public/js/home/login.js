"use strict";

const id = document.querySelector("#id"),
  password = document.querySelector("#password"),
  loginBtn = document.querySelector("button");

const login = () => {
  const req = {
    id: id.value,
    password: password.value,
  };
};

loginBtn.addEventListener("click", login);
