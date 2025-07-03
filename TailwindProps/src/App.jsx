import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4' >Tailwind CSS</h1>
      <Card username = "Hitaansh" button = "Click ker"/>
      <Card username = "Maheshwary" button = "Isko Click mat kerna"/>
    </>
  )
}

export default App
