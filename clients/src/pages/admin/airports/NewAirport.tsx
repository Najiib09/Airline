import React from "react";

import AdminSidebar from "../../../component/Sidebar";
import Header from "../../../component/Header";

function NewAirpot() {
  return (
       
       <>
      
           <Header/>
      <div className="container mx-auto mt-8 flex">
      
      <AdminSidebar/>
      
        <div className="overflow-x-auto  ml-[9%] w-[90%]  ">
      
          <div className=" w-full table-fixed h-auto mt-6">
          <form className="w-full max-w-lg">
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
        City Name
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight " id="grid-first-name" type="text" placeholder="City Name:"/>

    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
        Description
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"/>
    </div>
  </div>

  <button type="submit"
        className= "  float-right  flex flex-row items-center justify-center w-full px-4 py-4  text-sm font-bold bg-green-300 leading-6 capitalize duration-100 transform rounded-sm shadow cursor-pointer focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 focus:outline-none sm:mb-0 sm:w-auto sm:mr-4 md:pl-8 md:pr-6 xl:pl-12 xl:pr-10   hover:shadow-lg hover:-translate-y-1 ">
     save
    </button>
    <button type="submit"
        className= "  flex flex-row items-center justify-center w-full px-4 py-4  text-sm font-bold bg-red-300 leading-6 capitalize duration-100 transform rounded-sm shadow cursor-pointer focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 focus:outline-none sm:mb-0 sm:w-auto sm:mr-4 md:pl-8 md:pr-6 xl:pl-12 xl:pr-10   hover:shadow-lg hover:-translate-y-1 ">
   cancel
       
    </button>
</form>
          
        </div>
      </div>
      </div>
    </>
  );
}

export default NewAirpot;
