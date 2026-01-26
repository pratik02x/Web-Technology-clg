let arr=[0,1,2,3,4,"p"];
console.log(arr)

const myarr=new Array(0,1,2,3); //activity
console.log(myarr[1]);

//Array methods
myarr.push(4); //add last
console.log(myarr)
console.log(myarr.pop()) //remove last

myarr.unshift(-1);
console.log(myarr);

myarr.shift();
console.log(myarr);

console.log(myarr.includes(2));

console.log(myarr.indexOf(2));
console.log(typeof myarr);

const newarr=myarr.join();
console.log(newarr)
console.log(typeof newarr); //string
 
