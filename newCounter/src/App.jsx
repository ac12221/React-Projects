import { useState } from 'react'


function App() {
  // let counter = 15;
  const [counter,setCounter] = useState(15);
  function addValue(){
    // counter = counter+1;
    // console.log(counter);
    if(counter >= 20){
      return counter;
    }
    else{
      setCounter(counter+1);
      setCounter((prev)=>(prev+1));
      setCounter((prev)=>(prev+1));
      setCounter((prev)=>(prev+1));
      


    }
  }
  function removeValue(){
    // counter = counter-1;
    if(counter<=0){
      return counter;
    }
    else{
      setCounter(counter-1);
    }
  }

  return (
    <div className='h-[300px] bg-slate-400 w-[600px] m-auto mt-7 grid grid-rows-4 justify-center place-content-center gap-2 rounded'>
      <h1 className=' font-bold text-2xl mt-4' >Chai aur Code</h1>
      <h2 className=' bg-black text-white h-8 text-center p-2 rounde'> Counter value {counter}</h2>
      <button className=' bg-red-500 rounded h-8 text-white font-bold' onClick={addValue}>Add Value {counter}</button>
      <button className=' bg-red-500 rounded h-8 text-white font-bold' onClick={removeValue}>Remove Value {counter}</button>
    </div>
  )
}

export default App
