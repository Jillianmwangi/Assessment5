function reverseString(str){

let revString = ' ' 

for(
    let i = 0;
    i < str.length;
    i += 4
);
let newStr = str.slice(0, 4);
// let newStr = str.slice(i, i + 4);
console.log(newStr);

let string = newStr.split('').reverse().join('')
console.log(string);

revString += string;
};
reverseString("Hello Jill")