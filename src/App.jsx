import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const submit = (e) =>{
    e.preventDefault()
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
         />
      </div>


      <div className='py-4 pb-8'>
        <input className='border-black border-4 p-2 rounded-md border-solid  outline-black'
        placeholder='Enter Place'
        type='text'
        required
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
