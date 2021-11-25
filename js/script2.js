"use strict";

alert("Hi!");
const result = confirm("Are you here?");
console.log(result);

const answer = +prompt("Are you over 18?", "18");
console.log(typeof(answer));

const answers = [];
answers[0] = prompt("Ваше имя?", '');
answers[1] = prompt("Ваша фамилия?", '');
answers[2] = prompt("Ваш возраст?", '');
console.log(typeof(answers));