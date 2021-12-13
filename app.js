"use strict";
exports.__esModule = true;
var btn = document.querySelector("button");
var num1 = document.querySelector("#num1");
var num2 = document.querySelector("#num2");
var add = function (num1, num2) {
    return num1 + num2;
};
btn.addEventListener("click", function () {
    console.log(add(+num1.value, +num2.value));
    num1.value = '';
    num2.value = '';
});
