const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const btn = document.querySelector("button");

const add = (num1, num2) => {
    return (typeof num1 === "number" && typeof num2 === "number") 
            ?  num1.value + num2.value
            :  (+num1.value) + (+num2.value)
}

btn.addEventListener("click", () => {
    alert(add(num1, num2));
    num1.value = '';
    num2.value = '';
});