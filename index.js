const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];
let pass1 = document.getElementById("1stGeneratedPassword");
let pass2 = document.getElementById("2ndGeneratedPassword");
const generateBtn = document.getElementById("generateBtn");
const generatePass = document.getElementById("gen-password");

generateBtn.addEventListener("click", function () {
  let passField1 = "";
  let passField2 = "";
  let length = 15;
  for (let i = 0; i < length; i++) {
    let password1 = Math.floor(Math.random() * characters.length);
    let password2 = Math.floor(Math.random() * characters.length);
    pass1.textContent = passField1 += characters[password1];
    pass2.textContent = passField2 += characters[password2];
  }
});

function copyPass(password) {
  password.addEventListener("click", function () {
    navigator.clipboard.writeText(password.textContent);
    alert("Copied: " + password.textContent);
  });
}

copyPass(pass1);
copyPass(pass2);
