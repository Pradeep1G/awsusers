import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import LoadingScreen from './Loader'
import axios from 'axios'

function App() {
  const [loading, setloading] = useState(false)
  const [email, setEmail] = useState("");
  const [place, setPlace] = useState("");
  const serverpath = "https://awsserver.onrender.com";
  // const serverpath = "http://127.0.0.1:5000";
  

  const submit = async(e) =>{
    e.preventDefault()

    const data = {
      email:email,
      place:place
    }
    setloading(true);
    const response = await axios.put(serverpath+"/addAWSWeatherUser", data)
    console.warn(response.data)
    if(response.data.is_success){
    setloading(false)

      alert("Successful.")
    }
    else{
    setloading(false)

      alert("Retry with correct input.")
    }
    setloading(false)

  }

  return (
    <>
    {loading && <LoadingScreen />}
    <div className='staticbody'>
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
        <button className='text-lg font-semibold p-4 text-black rounded-md bg-blue-400'>
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
