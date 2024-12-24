import { useState } from "react";

function App() {
  const [color, setColor] = useState("white");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      ></div>
  <div className="font-extrabold font-serif text-blue-500
       z-10">Tap on color you want background</div>
      <div
        className="fixed flex flex-wrap justify-center bottom-14
     inset-x-0 px-3 "
      >
        <div
          className="flex flex-wrap justify-center
     gap-3 shadow-lg bg-white px-1.5 py-1 
     rounded-xl"
        ><button 
        onClick={()=>setColor('red')}
        className="outline-dotted px-4 py-1.5 rounded-full
        shadow-lg text-white
        "
        style={{backgroundColor:'red'}}>Red</button>
        <button 
        onClick={()=>setColor('blue')}
        className="outline-dotted px-4 py-1.5 rounded-full
        text-white shadow-lg"
        style={{backgroundColor:'blue'}}>Blue</button>
        <button 
        onClick={()=>setColor('green')}
        className="outline-dotted px-4 py-1.5 rounded-full
        text-white shadow-lg"
        style={{backgroundColor:'green'}}>Green</button>
        <button 
        onClick={()=>setColor('orange')}
        className="outline-dotted px-4 py-1.5 rounded-full
        text-white shadow-lg"
        style={{backgroundColor:'orange'}}>Orange</button>
        <button 
        onClick={()=>setColor('black')}
        className="outline-dotted px-4 py-1.5 rounded-full
        text-white shadow-lg"
        style={{backgroundColor:'black'}}>Black</button></div>
      </div>
    </>
  );
}

export default App;
