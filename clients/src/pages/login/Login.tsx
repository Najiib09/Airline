import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Login() {
  return (
    <>
 <div className="flex min-h-full flex-col justify-center items-center px-6 py-12 lg:px-8">
 
 <form className="w-full max-w-sm  mt-20">
  <img className=' w-24  ml-16 mb-8' src="https://cdn-icons-png.flaticon.com/128/1044/1044224.png" alt="" />
 

  <div className="md:flex md:items-center mb-6">
    
    <div className="md:w-2/3">
      <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#86efac]" id="inline-full-name" type="text" placeholder='Enter your email here:' />
    </div>
  </div>
  <div className="md:flex md:items-center mb-6">
   
    <div className="md:w-2/3">
      <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#86efac]" id="inline-password" type="password" placeholder="******************"/>
    </div>
  </div>
 
  <div className="md:flex md:items-center">

    <div className="md:w-2/3">
      <Link to ="/home">
      <button className="shadow w-full bg-[#86efac] hover:bg-[#4bf087] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
        Login
      </button>
      </Link>
    </div>
  </div>
  <p className=' font-light text-[#c2bebe] '> if you are not registred  <Link className='text-[#86efac]' to ='/signUp'> click here. </Link> </p>
 
</form>
</div>
    </>
  )
}

export default Login