import React from 'react'
import img from '../../../public/images/16f227dba2614f89c86e7e1a8d90819f-removebg-preview.png'
import { Search } from 'lucide-react'
import css from '../../component/fonts.css'
import Footer from '../../component/footer/Footer'
function Dashboard() {
  return (
    <>
  
      <header className='  px-48 flex  w-full justify-between items-center '> 
   <h2> <img className='  w-24' src="data:image/jpeg;base64,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" alt="" /> </h2>
  

    <nav className=' flex  list-none gap-7 font-semibold'>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>Explore</a>
          </li>
          <li>
            <a href='#'>Book</a>
          </li>
          <li>
            <a href='#'>Experience</a>
          </li>
          <li>
            <a href='#'>Book</a>
          </li>
          <button type="button" className=" px-4 max-w-md flex justify-center items-center bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg">
            Signup
</button>
        
        
  
    </nav>
      </header>
    <div className=' px-24'>

      <section className=' flex flex-col items-center'>

      <img className=' w-36' src={img} alt="Logo" />
        
<h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-[#1c585a] md:text-2xl lg:text-4xl dark:text-white">
Experience luxury for less on your next journey</h1>
<p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
<div className="flex flex-col w-full sm:w-auto sm:flex-row p-4">
    <button 
        className="flex flex-row items-center justify-center w-full px-4 py-4 mb-4 text-sm font-bold bg-green-300 leading-6 capitalize duration-100 transform rounded-sm shadow cursor-pointer focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 focus:outline-none sm:mb-0 sm:w-auto sm:mr-4 md:pl-8 md:pr-6 xl:pl-12 xl:pr-10   hover:shadow-lg hover:-translate-y-1">
      Get started
       
    </button>

    <a href=""
        className="flex items-center justify-center w-full px-4 py-4 text-sm font-bold leading-6 capitalize duration-100 transform border-2 rounded-sm cursor-pointer border-green-300 focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 focus:outline-none sm:w-auto sm:px-6 border-text  hover:shadow-lg hover:-translate-y-1">
        See Features
    </a>
</div>
  

  <div className=' relative  justify-between items-center shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] h-40 w-full'>
     
<form className=' px-14 absolute top-3 left-8 flex gap-8'>

    <div>
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">From:</label>
    <input type="text" id="zip-input" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="your location" pattern="^\d{5}(-\d{4})?$" required />
    </div>
    <div>
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">From:</label>
    <input type="text" id="zip-input" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="your location" pattern="^\d{5}(-\d{4})?$" required />
    </div>
    <div>
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">From:</label>
    <input type="text" id="zip-input" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="your location" pattern="^\d{5}(-\d{4})?$" required />
    </div>
    <div>
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">From:</label>
    <input type="text" id="zip-input" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="your location" pattern="^\d{5}(-\d{4})?$" required />
    </div>

 <button className=" text-sm text-white rounded-md  focus:outline-none focus:bg-white focus:text-gray-900 p-0 py-0" ><Search color='#1c585a'/></button>

</form>

  </div>

<div className=' flex  gap-10 mt-6 '>
<div className="block max-w-[8rem] rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
  <div className="relative overflow-hidden bg-cover bg-no-repeat">
    <img className="rounded-t-lg"src="https://tecdn.b-cdn.net/img/new/standard/nature/182.jpg"alt="" />
  </div>
  <div className="p-6">
    <p className="text-base">
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </p>
  </div>
</div>
<div className="block max-w-[18rem] rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
  <div className="relative overflow-hidden bg-cover bg-no-repeat">
    <img className="rounded-t-lg"src="https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=600"alt="" />
  </div>
  <div className="p-6">
    <p className="text-base">
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </p>
  </div>
</div>
<div className="block max-w-[18rem] rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
  <div className="relative overflow-hidden bg-cover bg-no-repeat">
    <img className="rounded-t-lg"src="https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=600"alt="" />
  </div>
  <div className="p-6">
    <p className="text-base">
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </p>
  </div>
</div>
<div className="block max-w-[18rem] rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
  <div className="relative overflow-hidden bg-cover bg-no-repeat">
    <img className="rounded-t-lg"src="https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=600"alt="" />
  </div>
  <div className="p-6">
    <p className="text-base">
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </p>
  </div>
</div>
    
</div>




</section>
   <Footer/>
    </div>
    </>
  )
}

export default Dashboard