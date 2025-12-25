import React, { useState } from 'react'

function App() {
  const [color, setColor] = useState("white")

  return (
    <div className='w-full h-screen duration-200'
    style={{backgroundColor : color}}
    >
      <div className=' fixed flex flex-wrap justify-center inset-x-0 px-2 bottom-12 ' >
        <div className='flex flex-wrap justify-center bg-white px-2 py-2 rounded-full gap-3'>
          <button onClick={() => setColor("red")}
          className=' outline-none px-4 py-1 font-bold rounded-full text-white'
          style={{backgroundColor : "red"}}
          >Red</button>
          <button onClick={() => setColor("pink")}
          className='px-4 py-1 font-bold rounded-full text-white'
          style={{backgroundColor : "pink"}}
          >Pink</button>
          <button onClick={() => setColor("blue")}
          className='px-4 py-1 font-bold rounded-full text-white'
          style={{backgroundColor : "blue"}}
          >Blue</button>
          <button onClick={() => setColor("yellow")}
          className='px-4 py-1 font-bold rounded-full text-white'
          style={{backgroundColor : 'yellow'}}
          >Yellow</button>
          <button onClick={() => setColor("olive")}
          className='px-4 py-1 font-bold rounded-full text-white'
          style={{backgroundColor : 'olive'}}
          >Olive</button>
          <button onClick={() => setColor("green")}
          className='px-4 py-1 font-bold rounded-full text-white'
          style={{backgroundColor : 'green'}}
          >Green</button>
          <button onClick={() => setColor("purpel")}
          className='px-4 py-1 font-bold rounded-full text-white'
          style={{backgroundColor : 'purple'}}
          >Purple</button>
          <button onClick={() => setColor("black")}
          className='px-4 py-1 font-bold rounded-full text-white'
          style={{backgroundColor : 'black'}}
          >Black</button>
          <button onClick={() => setColor("lavender")}
          className='px-4 py-1 font-bold rounded-full text-black'
          style={{backgroundColor : 'lavender'}}
          >Lavender</button>
          
      
        </div>
      </div>

    </div>
  )
}

export default App