import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0)
  const [email, setEmail] = useState("");
  const [place, setPlace] = useState("");

  const submit = async(e) =>{
    e.preventDefault()

    const data = {
      email:email,
      place:place
    }
    const response = await axios.put("http://127.0.0.1:5000/addUser", data)
    console.warn(response.data)
    if(response.data.is_success){
      alert("Successful.")
    }
    else{
      alert("Retry with correct input.")
    }

  }

  return (
    <>
    <div className=''>
      <div className='p-2'>
      <form onSubmit={submit} className=''>

      <div className='py-2'>
        <input className='border-black border-4 p-2 rounded-md border-solid  outline-black'
        placeholder='Enter Email'
        type='email'
        required
        onChange={(e) => setEmail(e.target.value)}
         />
      </div>


      <div className='py-4 pb-8'>
        <input className='border-black border-4 p-2 rounded-md border-solid  outline-black'
        placeholder='Enter Place'
        type='text'
        required
        onChange={(e) => setPlace(e.target.value)}
         />
      </div>


      <div className='flex justify-center'>
        <button className='text-lg font-semibold p-4 rounded-md bg-blue-400'>
        Submit
        </button>
        </div>
        
        </form>
      </div>
      </div>
    </>
  )
}

export default App
