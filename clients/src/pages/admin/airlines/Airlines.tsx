import React from "react";
import { Link, NavLink } from "react-router-dom";
import AdminSidebar from "../../../component/Sidebar";
import Header from "../../../component/Header";

function Airlines() {
  return (
      <>
      
            <Header/>
      <div className="container mx-auto mt-8 flex">
      
      <AdminSidebar/>
      
        <div className="overflow-x-auto  ml-[9%] w-[90%]  my-16 pl-20">
        <Link to= "/admin/airlines/create"
        className= "  float-right flex flex-row items-center justify-center w-full px-4 py-4  text-sm font-bold bg-green-300 leading-6 capitalize duration-100 transform rounded-sm shadow cursor-pointer focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 focus:outline-none sm:mb-0 sm:w-auto sm:mr-4 md:pl-8 md:pr-6 xl:pl-12 xl:pr-10   hover:shadow-lg hover:-translate-y-1 ">
     Add airline
       
    </Link>
          <table className=" w-full table-fixed h-auto mt-6 ">
            <thead>
              <tr className="bg-gray-100">
                <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">ID</th>
                <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase"> Airline Name</th>
                <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Description</th>
                <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr>
                <td className="py-4 px-6 border-b border-gray-200"> 2 </td>
                <td className="py-4 px-6 border-b border-gray-200 truncate">Daaalo airline</td>
                <td className="py-4 px-6 border-b border-gray-200">its safe and well prepared!</td>
                <td className="py-4 px-6 border-b border-gray-200">
                  <span className="bg-[#ffffff] text-white py-1 px-2 rounded-full text-xs"> <button><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fa0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                  </button> <button><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#43fa00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-pen"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z"/></svg></button> </span>
                </td>
              </tr>
   
              {/* Add more table rows here */}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Airlines;
