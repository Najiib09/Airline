import React from 'react'

function SignUp() {
  return (
    <>

    <div className='h-screen w-full flex items-center px-[38%] flex-col mt-20'>
    <form className="w-full max-w-lg items-center">

  <div className="md:flex md:items-center mb-6">
    
    <div className="md:w-2/3">
      <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#86efac]" id="inline-full-name" type="text" placeholder='Enter username:' />
    </div>
  </div>
  <div className="md:flex md:items-center mb-6">
    
    <div className="md:w-2/3">
      <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#86efac]" id="inline-full-name" type="text" placeholder='Enter an Email :' />
    </div>
  </div>
   <div className="md:flex md:items-center mb-6">
    
    <div className="md:w-2/3">
      <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#86efac]" id="inline-full-name" type="password" placeholder='enter a password******:' />
    </div>
  </div>
    <div className="md:w-2/3">
    <button className="shadow w-full bg-[#86efac] hover:bg-[#4bf087] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
        registred
      </button>
   </div>

  
</form>
    </div>
    
    </>
  )
}

export default SignUp