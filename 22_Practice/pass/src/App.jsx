import { useCallback, useEffect, useRef, useState } from 'react'


function App() {
  const [password,setPassword] = useState("");
  const [charAllowed, setCharAllowed] = useState(false);
  const [numberAllowed,setnumberAllowed] = useState(false);
  const [length,setLength] = useState(8);

  const passwordGenerator = useCallback(()=>{
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(numberAllowed) str+= "1234567890";
    if(charAllowed) str+= "!@#$%^&*()-=+";
    let pass = "";
    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random()*str.length+1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  },[length,setPassword,charAllowed,numberAllowed])

  useEffect(()=>{
    passwordGenerator();
  },[length,numberAllowed,charAllowed,passwordGenerator])

  const passwordRef = useRef(null);

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  },[password])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md px-4 py-3 my-8 bg-gray-700 text-orange-500 rounded-xl'>
        <h1 className='text-white text-center my-3'>Password Genrator</h1> 
        <div className='flex shadow-md rounded-lg overflow-hidden mb-4'>
          <input 
          type='text'
          placeholder='password'
          value={password}
          className=' outline-none w-full px-3 py-3'
          readOnly
          ref= {passwordRef}
          />
          <button
          className=' bg-blue-700 text-white px-3 py-0.5 shrink-0'
          onClick={copyPasswordToClipboard}
          >
            copy
          </button>
        </div>


        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
            min={6}
            max={100}
            value={length}
            className=' cursor-pointer'
            onChange={(e)=>{setLength(e.target.value)}}
            />
            <label> length:{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type='checkbox'
            id='numberInput'
            defaultChecked={numberAllowed}
            onChange={()=>{setnumberAllowed((prev) => !prev )}}
            />
            <label htmlFor="numberInput"> Number </label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type='checkbox'
            defaultChecked={charAllowed}
            id='characterInput'
            onChange={()=>{setCharAllowed((prev) => !prev )}}
            />
            <label htmlFor="characterInput"> Character </label>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default App
