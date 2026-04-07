//fetch : it is inbuilt JS methos used to make HTTP request

fetch("https://jsonplaceholder.typicode.com/users/1").then((data)=>{
    // let d=await data;
      return data.json();
})
.then((data)=>{
     console.log(data);
})
.catch((error)=>{
     console.log(error);
})
// async function re(){
//      let d= await fetch("https://jsonplaceholder.typicode.com/users");
//      // console.log(d);
//      let res=await d.json();
//      return res;
// }

// async function mainres(){
//      let res= await re();
//      console.log(res);
// }

// mainres();


//where we use promise in company 
//why better than callback ,4 with one async and await ex of prpomises//
//what is fetch //4 ex code
//async and await fetch
//fetch post :show only 5 records,craete 1 fake promise manually 3 sec res,3 rej

//interview :what is promise,sates,promise and callback diff,what does fetch return why use response.json(),diff between then/catch adn async and await

//what is promise chainning

