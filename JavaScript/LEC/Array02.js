// const superheros=["superman","krish","pratik"];
// const hero=["allu arjun","dhanush","Thalaphathy"];

// // superheros.push(hero);
// // console.log(superheros);

// // console.log(superheros[3]);
// // console.log(superheros[2][2]);

// superheros.concat(hero);
// console.log(superheros);

// const anotherarr=[1,2,3,[4,5,6],7,[6,7],[4,5]];
// const realaarr=anotherarr.flat(1);//flat all array into a array
// console.log(realaarr)

// //Data scripting

// console.log(Array.isArray(""));//used for data sccripting
// console.log(Array.from("palu")) //covert into array
// console.log(Array.from({
//     name:"palu"
// }))//gives empty array directly not coverts into key values

// let score1=100;
// let score2=200;
// let score3=300;
// console.log(Array.of(score1,score2,score3))


// //Creation of array
// let nums=[1,2,3,4];
// let students=["Palu","Pratik","siddhi"];
// let info=["Pratik",21,88.5];//Mixed Array
// console.log(nums);
// console.log(students);
// console.log(info);

// //Mutable
// let fruits=["Apple","banana","cherry"];
// console.log(fruits);
// fruits[0]="orange";
// console.log(fruits);

// //Array Methods
// let arr=["ferrai","mer","mar"];

// // 1.Push-add elemnt at last

// arr.push("BMW");

// console.log(arr)
// arr.push("shift")
// console.log(arr);

// //2 .POP:removes element fronm last and return it

// arr.pop();
// console.log(arr);

// //3.UNSHIFT: Adds at first

// arr.unshift("Toyota");
// console.log(arr);

// //4.shift: delete from first and return it

// arr.shift();
// console.log(arr);

// let user=["a","b","c"];

// let blocked=[user.shift(),user.pop()];
// console.log(user);
// console.log(blocked);

// //Example:["Jan","july""mar","Aug"]---->["july,"june,"mar","Aug"]

// let months=["Jan","july","mar","Aug"];

// months.shift();
// months.shift();
// months.unshift("june");
// months.unshift("july");

// console.log(months);

// //5.indexOf : gives  index of something
// console.log(months.indexOf("jan")); //--> -1
// console.log(months.indexOf("july"));//-->0

// //6.includes :gives true if element is present otherwise false
// console.log(months.includes("jan")); //false
// console.log(months.includes("june")); //true

// //7.concate : adds two array

// let a=["p","r","a"];
// let b=["t","i","k"];
// let c=a.concat(b);
// console.log(c) ;

//8.reverse: Reverse the array

//9:slice
let p=["pratik","patil","DKTE","ICH"];
console.log(p.slice()) ; //all array
console.log(p.slice(1)) ; //patil,DKTE,ICH
console.log(p.slice(1,2)) ;//patil
console.log(p.slice(-2)) ;//DKTE,ICH

//10:splice(start,delete no of element,add element at position of start)--> CHANGE IN ORIGNAL ARRAY
let s=["mer","fer","toyota","swift","audi","bMW"];

s.splice(1,0,"suf"); //['mer', 'suf', 'fer', 'toyota', 'swift', 'audi', 'BMW']
console.log(s);

console.log(s.splice(1,1)); //['suf']
console.log(s); //['mer', 'fer', 'toyota', 'swift', 'audi', 'BMW']

//11.sort()--> good for String not Numbers

s.sort();
console.log(s);
  







