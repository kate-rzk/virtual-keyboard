const body = document.querySelector("body");

//Page elements
const article = document.createElement("article");
const title = document.createElement("h1");
const textarea = document.createElement("textarea");
const section = document.createElement("section");
const row1 = document.createElement("div");
const row2 = document.createElement("div");
const row3 = document.createElement("div");
const row4 = document.createElement("div");
const row5 = document.createElement("div");
const textSystem = document.createElement("p");
const textSwitch = document.createElement("p");

let createElementsPage = function () {
  title.textContent = "RSS Виртуальная клавиатура";
  textSystem.textContent = "Клавиатура создана в операционной системе Linux";
  textSwitch.textContent =
    "Для переключения языка комбинация: левыe ctrl + alt";

  textarea.setAttribute("rows", 7);
  textarea.setAttribute("cols", 78);

  article.className = "wrapper";
  section.className = "keyboard";
  row1.className = "keyboard-row";
  row2.className = "keyboard-row";
  row3.className = "keyboard-row";
  row4.className = "keyboard-row";
  row5.className = "keyboard-row";

  //Each elements, needs appending
  body.appendChild(article);
  article.appendChild(title);
  article.appendChild(textarea);
  article.appendChild(section);
  section.appendChild(row1);
  section.appendChild(row2);
  section.appendChild(row3);
  section.appendChild(row4);
  section.appendChild(row5);
  article.appendChild(textSystem);
  article.appendChild(textSwitch);

  return article;
};

createElementsPage();

//Keyboard
let symbolsRow1 = ["`", 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "-", "=", "Backspace"];
let symbolsRow2 = [
  "Tab",
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "[",
  "]",
  "\\",
  "Del",
];
let symbolsRow3 = [
  "CapsLock",
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  ";",
  "'",
  "Enter",
];
let symbolsRow4 = [
  "Shift",
  "z",
  "x",
  "c",
  "v",
  "b",
  "n",
  "m",
  ",",
  ".",
  "/",
  "&uArr;",
  "Shift",
];
let symbolsRow5 = [
  "Ctrl",
  "Win",
  "Alt",
  " ",
  "Alt",
  "&lArr;",
  "&dArr;",
  "&rArr;",
  "Ctrl",
];

let init = function () {
  let line1 = "";
  let line2 = "";
  let line3 = "";
  let line4 = "";
  let line5 = "";
  for (let i = 0; i < symbolsRow1.length; i++) {
    line1 += "<button class='button'>" + symbolsRow1[i] + "</button>";
  }
  for (let i = 0; i < symbolsRow2.length; i++) {
    line2 += "<button class='button'>" + symbolsRow2[i] + "</button>";
  }
  for (let i = 0; i < symbolsRow3.length; i++) {
    line3 += "<button class='button'>" + symbolsRow3[i] + "</button>";
  }
  for (let i = 0; i < symbolsRow4.length; i++) {
    line4 += "<button class='button'>" + symbolsRow4[i] + "</button>";
  }
  for (let i = 0; i < symbolsRow5.length; i++) {
    line5 +=
      "<button class='button button-color'>" + symbolsRow5[i] + "</button>";
  }

  document.querySelector("section").childNodes[0].innerHTML = line1;
  document.querySelector("section").childNodes[1].innerHTML = line2;
  document.querySelector("section").childNodes[2].innerHTML = line3;
  document.querySelector("section").childNodes[3].innerHTML = line4;
  document.querySelector("section").childNodes[4].innerHTML = line5;

  row1.lastChild.className = "button key-row1 button-color button-special";
  row2.firstChild.className =
    "button key-row2-first button-color button-special";
  row2.lastChild.className = "button key-row2-last button-color button-special";
  row3.firstChild.className =
    "button key-row3-4-first button-color button-special";
  row3.lastChild.className =
    "button key-row3-4-last button-color button-special";
  row4.firstChild.className =
    "button key-row3-4-first button-color button-special";
  row4.firstChild.id = "ShiftLeft";
  row4.lastChild.className =
    "button key-row3-4-last button-color button-special";
  row4.lastChild.id = "ShiftRight";
  row4.childNodes[row4.childNodes.length - 2].id = "ArrowUp";
  row4.childNodes[row4.childNodes.length - 2].className =
    "button button-color button-special";
  row5.childNodes[3].className = "button key-row5-space";
  row5.childNodes[2].id = "AltLeft";
  row5.childNodes[4].id = "AltRight";
  row5.childNodes[5].id = "ArrowLeft";
  row5.childNodes[6].id = "ArrowDown";
  row5.childNodes[7].id = "ArrowRight";
  row5.firstChild.id = "ControlLeft";
  row5.lastChild.id = "ControlRight";
};

init();

//Virtual keyboard activation with external keyboard
const button = document.querySelectorAll(".button");

let printKeydownOnKeyboard = function (event) {
  textarea.focus();
  for (let i = 0; i < button.length; i++) {
    if (
      (button[i].innerHTML == event.key &&
        button[i].innerHTML !== "Shift" &&
        button[i].innerHTML !== "Alt") ||
      (button[i].innerHTML == "Del" && event.key == "Delete") ||
      (button[i].matches('button[id$="ShiftLeft"]') &&
        event.code == "ShiftLeft") ||
      (button[i].matches('button[id$="ShiftRight"]') &&
        event.code == "ShiftRight") ||
      (button[i].matches('button[id$="ControlLeft"]') &&
        event.code == "ControlLeft") ||
      (button[i].matches('button[id$="ControlRight"]') &&
        event.code == "ControlRight") ||
      (button[i].matches('button[id$="AltLeft"]') && event.code == "AltLeft") ||
      (button[i].matches('button[id$="AltRight"]') &&
        event.code == "AltRight") ||
      (button[i].matches('button[id$="ArrowUp"]') && event.key == "ArrowUp") ||
      (button[i].matches('button[id$="ArrowDown"]') &&
        event.key == "ArrowDown") ||
      (button[i].matches('button[id$="ArrowLeft"]') &&
        event.key == "ArrowLeft") ||
      (button[i].matches('button[id$="ArrowRight"]') &&
        event.key == "ArrowRight")
    ) {
      button[i].classList.add("active");
      button[i].classList.remove("button-color");
    }
  }
};

document.addEventListener("keydown", printKeydownOnKeyboard);

let printKeyupOnKeyboard = function (event) {
  for (let j = 0; j < button.length; j++) {
    if (
      (button[j].innerHTML == event.key && button[j].innerHTML !== "Shift") ||
      (button[j].innerHTML == "Del" && event.key == "Delete") ||
      (button[j].matches('button[id$="ShiftLeft"]') &&
        event.code == "ShiftLeft") ||
      (button[j].matches('button[id$="ShiftRight"]') &&
        event.code == "ShiftRight") ||
      (button[j].matches('button[id$="ControlLeft"]') &&
        event.code == "ControlLeft") ||
      (button[j].matches('button[id$="ControlRight"]') &&
        event.code == "ControlRight") ||
      (button[j].matches('button[id$="AltLeft"]') && event.code == "AltLeft") ||
      (button[j].matches('button[id$="AltRight"]') &&
        event.code == "AltRight") ||
      (button[j].matches('button[id$="ArrowUp"]') && event.key == "ArrowUp") ||
      (button[j].matches('button[id$="ArrowDown"]') &&
        event.key == "ArrowDown") ||
      (button[j].matches('button[id$="ArrowLeft"]') &&
        event.key == "ArrowLeft") ||
      (button[j].matches('button[id$="ArrowRight"]') &&
        event.key == "ArrowRight")
    ) {
      button[j].classList.remove("active");
      if (
        button[j].matches('button[class$="button-special"]') ||
        button[j].matches('button[id$="ControlLeft"]') ||
        button[j].matches('button[id$="ControlRight"]') ||
        button[j].matches('button[id$="AltLeft"]') ||
        button[j].matches('button[id$="AltRight"]') ||
        button[j].matches('button[id$="ArrowUp"]') ||
        button[j].matches('button[id$="ArrowDown"]') ||
        button[j].matches('button[id$="ArrowLeft"]') ||
        button[j].matches('button[id$="ArrowRight"]')
      ) {
        button[j].classList.add("button-color");
      }
    }
  }
};

document.addEventListener("keyup", printKeyupOnKeyboard);

//Virtual keyboard activation with external mouse
button.forEach(function (element) {
  let printKeyMouse = function () {
    textarea.className = "focus";
    switch (element.textContent) {
      case "Backspace":
        textarea.value = textarea.value.slice(0, -1);
        break;
      case "Tab":
        textarea.value += "    ";
        break;
      case "CapsLock":
        button.forEach((el) => {
          if (el.innerHTML.length == 1) {
            el.classList.toggle("button-transform");
          }
        });
        break;
      case "Shift":
        button.forEach((el) => {
          if (el.innerHTML.length == 1) {
            el.classList.toggle("button-transform");
          }
        });
        break;
      case "Del":
        textarea.value = textarea.innerHTML.slice(0, textarea.value.length - 1);
        break;
      case "Enter":
        textarea.value += "\n";
        break;
    }
    if (element.textContent.length == 1) {
      if (element.matches('button[class$="button-transform"]')) {
        textarea.value += element.innerHTML.toUpperCase();
      } else {
        textarea.value += element.innerHTML;
      }
    }
  };

  element.addEventListener("click", printKeyMouse);
});
