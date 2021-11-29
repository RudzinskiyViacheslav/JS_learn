"use strict";

let number = 5;
const leftBorderWidth = 1;

number = 20;
console.log(number);

const obj = {
    name: "Slava",
    age: 22,
    isMarried: false
};

console.log(obj.name);
console.log(obj["name"]);

let arr = ['sl.png', 'oran.jpg', 'apple.bmp', 5, {},
    []
];
console.log(arr[1]);

//Тернарный оператор сравнения

let num = 50;
(num == 50) ? console.log("Ok!"): console.log("Error");

switch (num) {
    case 22:
        console.log("No");
        break;
    case 50:
        console.log("Ok");
        break;
    default:
        console.log("Not this time");
        break;
}

while (num <= 55) {
    console.log(num);
    num++;
}
do {
    console.log(num);
    num++;
}
while (num <= 55);

for (let i = 1; i < 10; i++) {
    if (i === 6) {
        //break;
        continue;
    }
    console.log(i);
}