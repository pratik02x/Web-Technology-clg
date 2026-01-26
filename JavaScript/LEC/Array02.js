const superheros=["superman","krish","pratik"];
const hero=["allu arjun","dhanush","Thalaphathy"];

// superheros.push(hero);
// console.log(superheros);

// console.log(superheros[3]);
// console.log(superheros[2][2]);

superheros.concat(hero);
console.log(superheros);

const anotherarr=[1,2,3,[4,5,6],7,[6,7],[4,5]];
const realaarr=anotherarr.flat(1);//flat all array into a array
console.log(realaarr)

//Data scripting

console.log(Array.isArray("p"));//used for data sccripting
console.log(Array.from("palu")) //covert into array
console.log(Array.from({
    name:"palu"
}))//gives empty array directly not coverts into key values

let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3))

