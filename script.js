const result = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateBtn = document.getElementById("generate");
const copyBtn = document.getElementById("copy");

const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+{}[]<>?/";

function generatePassword() {
    let characters = "";
    let password = "";

    if (uppercaseEl.checked) characters += upper;
    if (lowercaseEl.checked) characters += lower;
    if (numbersEl.checked) characters += numbers;
    if (symbolsEl.checked) characters += symbols;

    if (characters === "") return "";

    for (let i = 0; i < lengthEl.value; i++) {
        password += characters.charAt(
            Math.floor(Math.random() * characters.length)
        );
    }
    return password;
}

generateBtn.addEventListener("click", () => {
    result.value = generatePassword();
});

copyBtn.addEventListener("click", () => {
    result.select();
    document.execCommand("copy");
    alert("Password copied!");
});
