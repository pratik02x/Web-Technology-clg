//Activity 1:declare array,function and object
//Activity 2: write a code for reverse a number
//3.check palindrom
//4.fibonacci series
//5.largest element in array
//6.remove duplicate element in array
//7.missing number in array

//8. reverse a srtring
//9.vowels
//10.palindrom in string

//prime number
//factorial

//func to find even or odd
//func to find sum of array

// let array=[1,2,3,4];
// console.log(array);

// let Info={
//     mname:"pratik",
//     age:20,
//     clg:"DKTE"
// }
// console.log(Info);

//2.reverse number
let num=123;
let rev=0;

let tmp=num;

while(tmp > 0){
    rev=rev*10 + tmp%10;
    tmp=Math.floor(tmp/10);
}

console.log(`reversed numbers is ${rev}`);

//3.palindrom number
let pnum=123;
let prev=0;

let ptmp=num;

while(ptmp > 0){
    prev=prev*10 + ptmp%10;
    ptmp=Math.floor(ptmp/10);
}

console.log(rev === num ? "number is palindrome" : "not palindrome");

//4.fibonacci series


