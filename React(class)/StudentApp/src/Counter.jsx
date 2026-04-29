import { useState } from "react";

function Counter(){
//state code
const [count, setCount]= useState(0);
const [rcount, setRcount]= useState(10);
const showClick= ()=>{
    setCount(count+1)
}
const showClickRev= ()=>{
    setRcount(rcount-1)
}

return(

    <>
    <h1>Count:{count}</h1>
    <button onClick={showClick}>count Me</button>
    <h1>Count:{rcount}</h1>
    <button onClick={showClickRev}>reverse count Me</button>
    </>
);
}

export default Counter;