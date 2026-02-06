//why we use create a string using object
//Activit Math.random
//when we 
let mynum=new Number(100);
console.log(mynum);
console.log(mynum.toFixed(2));//when we build a ecommerce website and precision value are too long then we use these

console.log(mynum.toString());
console.log(mynum.toString().length)

let h=new Number(1000000);
console.log(h.toLocaleString(
    'en-IN'
)) //you dont give any parameter it default US standard


//MATH
console.log(Math.abs(-4));//coverts negative value to positive 

console.log(Math);//Object [Math] {}
console.log(Math.round(4.6));
console.log(Math.ceil(4.6));//choose top values
console.log(Math.floor(4.6));//lowest value
console.log(Math.min(4,5,6,7));
console.log(Math.max(4,5,6,7));
console.log(Math.random());
 
