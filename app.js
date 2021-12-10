const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const btn = document.querySelector("button");

const add = (num1, num2) => {
    return parseInt(num1.value) + parseInt(num2.value);
}

btn.addEventListener("click", () => {
    alert(add(num1, num2));
});