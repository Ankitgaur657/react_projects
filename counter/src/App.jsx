import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

let [counter,setCounter]=useState(15);

  // let counter=98;

   const addValue=()=>{
    console.log("value added",counter);
    if(counter<=400){
      let t=Math.random()
      let approx=Math.ceil(t*100);
    setCounter(counter+approx);}
   }
   const removeValue=()=>{
    let t=Math.random()
  let approx=Math.ceil(t*100);
    if(counter>0){
    setCounter(counter-approx);}
   }
/* on click will update variable everywhere except 
ui updation so we need hooks for updating in ui */

  return (
    <>
      
      <h1>react first</h1>
      <h2>counter value: {counter}</h2>
      <button
      onClick={addValue} >add value</button>
      <br />
      <button
      onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
