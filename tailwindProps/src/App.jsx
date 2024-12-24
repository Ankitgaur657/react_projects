import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='bg-green-700 font-serif  text-red-400 p-5 
     rounded-xl'>Tailwind Testing</h1>

      <Card heading="homelander"/>

      <Card  heading="batman" className="text-green-400"/>
        
        
    </>
  )
}

export default App
