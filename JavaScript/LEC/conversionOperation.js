let score="22";
let scorebool=true;
let scorenull=null;//empty or zero
let scoreundef=undefined;//decleared but can't initialized



// console.log(typeof(score));
// console.log(typeof(scorebool));
// console.log(typeof(scorenull));
// console.log(typeof(scoreundef));

//type convertion
let p ="02abc";
let pconverts=Number(p);
console.log(typeof(p));
console.log(pconverts)//if in the string there is number it will converts but there is not a number in the string then it will gives NaN;
console.log(typeof(pconverts));

let pconvertsString=String(pconverts);

console.log(typeof(pconvertsString));

//Activity No:1--all convertios


//Operations

//Arithmatic operations
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2/2);
console.log(2%2);

let str1="hello";
let str2=" pratik";
console.log(str1+str2);
//Notes :Js only autoamtically converts string to number in arithmatic operations;
console.log("1"+2);
console.log("1"+2+2);
console.log(1+"2");
console.log(1+3+"2");
console.log((3+4)*5%3);