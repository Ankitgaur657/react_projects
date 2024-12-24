import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numAllow, setNumAllow] = useState(false);
  const [charAllow, setCharALlow] = useState(false);
  const [pass, setPass] = useState("");

  //useRef hook in react is used for give references
  //like we have to copy from input type so something
  //there should be refering target
  //used by making variable

  const paasRef = useRef(null);

  //callBack is an hook in react it passes a function and
  //dependencies which shou;ld be in th form of array
  //
  const passGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllow) {
      str += "0123456789";
    }
    if (charAllow) {
      str += "~!@#$%^&*()_[]{}+-";
    }

    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
    }
    setPass(pass);
  }, [length, numAllow, charAllow, setPass]);

const copyPassToClipboard=useCallback(()=>{
    paasRef.current?.select();
  //  paasRef.current?.setSelectionRange(0,5);
      window.navigator.clipboard.writeText(pass);
},[pass])

  //useEffect hook in react ensures that if smething
  //in array is changed than function will be
  //passed again and it will generate again

  useEffect(() => {
    passGenerator();
  }, [length, numAllow, charAllow, passGenerator]);

  return (
    <>
      <div
        className="w-full
   
     max-w-md mx-auto shadow-md rounded-lg
    px-4 py-3 my-8 bg-gray-600 "
      >
        <h1 className="text-white text-center">Password Generator</h1>
        <div
          className="flex shadow rounded-lg overflow-hidden 
    mb-4"
        >
          <input
            type="text"
            value={pass}
            className="outline-none w-full my-auto py-1 px-3 rounded-md "
            placeholder="password"
            readOnly
            ref={paasRef}
          />
          <button
            className="outline-none bg-blue-500
      text-yellow-500 px-4 py-1 shrink-0"
      onClick={copyPassToClipboard}
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length:{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numAllow}
              id="numberInput"
              onChange={() => {
                setNumAllow((prev) => !prev);
              }}
            />
            <label htmlFor="">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numAllow}
              id="numberInput"
              onChange={() => {
                setNumAllow((prev) => !prev);
              }}
            />
            <label htmlFor="">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
