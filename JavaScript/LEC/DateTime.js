let mydate=new Date();
console.log(mydate)
console.log(mydate.toString());
console.log(mydate.toISOString());
console.log(mydate.toLocaleString());
console.log(typeof mydate)

console.log(mydate.getDate());
console.log(mydate.getMonth());
console.log(mydate.getUTCDate());
console.log(mydate.getFullYear());
console.log(mydate.getDay())

//Timestamp
let myTimeStamp=Date.now();
console.log(myTimeStamp);
console.log(Date.now())
console.log(Date.now()/1000);