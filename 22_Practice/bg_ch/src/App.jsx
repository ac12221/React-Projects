import { useState } from 'react'


function App() {
  const [color,setColor] = useState('grey');

  return (
    <div style={{background : color}} className=' bg-slate-500 w-full h-screen'>
      <div className=' p-4 grid grid-cols-5 gap-6'>
        <button onClick={()=> setColor("red")}
        className=' bg-red-500 text-white rounded px-2 py-2 ' >
          Red
        </button>
        <button onClick={()=> setColor("blue")}
        className='  bg-blue-500 text-white rounded px-2 py-2' >
          Blue
        </button>
        <button onClick={()=> setColor("orange")}
        className=' bg-orange-500 text-white rounded px-2 py-2' >
          Orange
        </button>
        <button onClick={()=> setColor("pink")}
        className=' bg-pink-500 text-white rounded px-2 py-2' >
          Pink
        </button>
        <button onClick={()=> setColor("green")}
        className=' bg-green-500 text-white rounded px-2 py-2' >
          Green
        </button>
      </div>
    </div>
  )
}

export default App
