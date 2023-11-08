import { useState ,useCallback,useEffect,useRef} from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [checkNum , setCheckNum] =useState(false);
  const [checkChar , setCheckChar] =useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator= useCallback(
    () => {
      let pass=""
      let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      if(checkNum) str+="0123456789"
      if(checkChar) str+="!@#$%^&*({)}[]?/.<>"

      for (let i = 1; i < length; i++) {
        let char =  Math.floor(Math.random()*str.length +1)
        pass += str.charAt(char)
        
      }
      setPassword(pass)
    },
      [length, checkChar, checkNum, setPassword])

  const copyPassToClipBoard= useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])
  
  useEffect(()=>{
  passwordGenerator()},
  [length,checkChar,checkNum,passwordGenerator])
   
  const passwordRef=useRef(null)
  return (
    <>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange bg-gray-800">
      <h1 className='text-center, text-white text-4xl'>Password Generator</h1>
      <div className='flex shadow-md rounded-md overflow-hidden mb-4'>
        <input value={password} type='text' className='outline-none w-full py-1 px-3 ' ref={passwordRef} readOnly/>
        <button className='bg-blue text-white' onClick={copyPassToClipBoard}>Copy</button> 
        <div className='flex gap-x-2 text-sm'>
          <div className=' flex items-center gap-x-1'>
            <input type='range'
            min={6}
            max={50}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setLength(e.target.value)}}/>
            <label >Length : {length}</label>
          </div>
          <div className=' flex items-center gap-x-1'>
            <input type='checkbox'
            defaultChecked={checkNum}
            id='checkNumb'
         
            onChange={()=>{setCheckNum((prev) => ! prev)}}/>
            <label htmlFor='checkNumb'>Numbers</label>
          </div>
          <div className=' flex items-center gap-x-1'>
            <input type='checkbox'
            defaultChecked={checkChar}
            id='checkChara'
         
            onChange={()=>{setCheckChar((prev)=> ! prev)}}/>
            <label htmlFor='checkChara'> Character</label>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
