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


//Using loop 

let sum;
let f=0;
let s=1;

for(let i=2;i<=10;i++){
    
    sum=f+s;
    f=s;
    s=sum;
    console.log(`${i} fib is ${sum}`);
}
//Using recursion
function fibonaccci(n){
      if(n==0 || n==1) return n;

      return fibonaccci(n-1)+fibonaccci(n-2);
}

console.log(fibonaccci(10));


//Q5.larget elemnt in array

let larr=[100,23,12344,123,1233];
let larger=larr[0];
for(let i=1;i<larr.length;i++){
    if(larger < larr[i]){
        larger=larr[i];
    }
}
console.log(`larger element is ${larger}`);

//Q6.remove duplicates from array

let uarr=[1,1,1,2,2,2,3,3,4];

let i=0; //for last unique number
for(let j=1;j<uarr.length;j++){
    if(uarr[j]!=uarr[i]){
        i++;
        uarr[i]=uarr[j];
    }
}


//Q7.Missing number

let marr=[1,2,4,5];

let n=Math.max(...marr);

let natural_sum=(n*(n+1))/2;

let array_sum=0;
for(let i=0;i<marr.length;i++){
     array_sum+=marr[i];
}

console.log(`missing number is ${natural_sum-array_sum}`);

//Strings

//Q1.reverse a string

let str="pratik";
let arrs=str.split(""); //cant directly reverse a string want to convert into an array
let si=0;
let sj=arrs.length-1;

while(si<sj){
    let temp=arrs[si];
    arrs[si]=arrs[sj];
    arrs[sj]=temp;
    si++;
    sj--;
}


console.log(arrs.join(""))
//split --> converts ab string into array
//join --> coverts array elements into string
console.log(str.split("").reverse().join("")); //one line


//Q2.string is palindrom

let palindromStr="aba";


function palindrom(str){
      let pi=0;
      let pj=str.length-1;

      while(pi<pj){
        if(str.charAt(pi) != str.charAt(pj)) return false

        return true;
      }
}

console.log(palindrom(palindromStr));


//NUMBER

//Q1.prime number

function prime(n){
    if(n<=1){
        return false;
    }

    for(let i=2;i<n;i++){
        if(n%i==0) return false;
    }
    return true;
}

console.log(prime(2));


//Q2.factorial

let number=5;
let fact=1;
for(let i=number;i>0;i--){
      fact*=i;
}
console.log(fact);


//function 

//Q1.even odd
function evenOdd(n){
    if(n & 1){
        console.log("odd")
    }
    else{
        console.log("even")
    }
}
evenOdd(3);

//Q2.sum of array
let finalArr=[1,2,3,4,5];

let fsum=0;
for(let i=0;i<finalArr.length;i++){
    fsum+=finalArr[i];
}
console.log(`sum of array is ${fsum}`);