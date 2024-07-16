import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("pink")

  return (
      <div className="w-full h-screen duration-200"
      style={{backgroundColor: color}}
      >

        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className=" flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" onClick={() => setColor('red')} style={{backgroundColor:"Red"}}>Red</button>

            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" onClick={() => setColor('orange')} style={{backgroundColor:"Orange"}}>Orange</button>

            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" onClick={() => setColor('yellow')} style={{backgroundColor:"Yellow"}}>Yellow</button>

            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" onClick={() => setColor('green')} style={{backgroundColor:"Green"}}>Green</button>
            
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" onClick={() => setColor('blue')} style={{backgroundColor:"Blue"}}>Blue</button>
          </div>
        </div>
      </div>
  )
}

export default App
