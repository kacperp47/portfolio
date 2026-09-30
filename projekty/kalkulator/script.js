const number1 = document.querySelector("#number1");
const number2 = document.querySelector("#number2");
const result = document.querySelector("#result");

document.querySelector("#add").addEventListener("click", () => {
    const a = Number(number1.value);
    const b = Number(number2.value);

    result.textContent = a + b;
});

document.querySelector("#subtract").addEventListener("click", () => {
    const a = Number(number1.value);
    const b = Number(number2.value);

    result.textContent = a - b;
});

document.querySelector("#multiply").addEventListener("click", () => {
    const a = Number(number1.value);
    const b = Number(number2.value);

    result.textContent = a * b;
});

document.querySelector("#divide").addEventListener("click", () => {
    const a = Number(number1.value);
    const b = Number(number2.value);

    if (b === 0) {
        result.textContent = "Nie można dzielić przez 0";
        return;
    }

    result.textContent = a / b;
});