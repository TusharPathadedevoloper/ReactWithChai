
import { useState } from "react"

function App() {
 const [count, setCount]=useState(12);
 const increase=()=>{
  if(count>=20){
    alert("you can not go above 20")
    return
    
  }
  setCount(count+1)
 }
 const decrease=()=>{
  if(count<=0){
    alert("you can not go below 0")
    return ;
  }
  setCount(count-1)
 

 }


  return (
    <>
    <h1>React With Tushar </h1>
    <p>count : {count}</p>
    <button onClick={increase}> Increase</button>
    <br/>
    <button onClick={decrease}>decrease </button>
    <p>Footer {count}</p>

    </>
  )
}

export default App
