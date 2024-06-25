import { useState } from 'react'

import './App.css'

function App() {
    //let counter = 15;
    let[counter,setCounter] = useState(15)
    const addValue = () =>{
      if(counter >= 20){
        return counter;
      }
      else{
        setCounter(counter+1);
        setCounter( (prev) => prev +1);


      }
      
    }
    const removeValue = () =>{
      if(counter== 0){
        return counter;
      }
      else{
        setCounter(counter-1);
      }
    }


  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value {counter}</h2>
      <button onClick={addValue}>AddValue {counter}</button>
      <button onClick={removeValue}>RemoveValue {counter}</button>

    </>
  )
}

export default App
