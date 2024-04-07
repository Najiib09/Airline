import React from "react";
import { Link } from "react-router-dom";
import AdminSidebar from "../../../component/Sidebar";
import Header from "../../../component/Header";

function Airlines() {
  return (
      <>
      
            <Header/>
      <div className="container mx-auto mt-8 flex">
      
      <AdminSidebar/>
      
        <div className="overflow-x-auto  ml-[9%] w-[90%]  ">
        <button 
        className= "  float-right flex flex-row items-center justify-center w-full px-4 py-4  text-sm font-bold bg-green-300 leading-6 capitalize duration-100 transform rounded-sm shadow cursor-pointer focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 focus:outline-none sm:mb-0 sm:w-auto sm:mr-4 md:pl-8 md:pr-6 xl:pl-12 xl:pr-10   hover:shadow-lg hover:-translate-y-1 ">
     Add airline
       
    </button>
          <table className=" w-full table-fixed h-auto mt-6">
            <thead>
              <tr className="bg-gray-100">
                <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Name</th>
                <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Email</th>
                <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Phone</th>
                <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr>
                <td className="py-4 px-6 border-b border-gray-200">John Doe</td>
                <td className="py-4 px-6 border-b border-gray-200 truncate">johndoe@gmail.com</td>
                <td className="py-4 px-6 border-b border-gray-200">555-555-5555</td>
                <td className="py-4 px-6 border-b border-gray-200">
                  <span className="bg-green-500 text-white py-1 px-2 rounded-full text-xs">Active</span>
                </td>
              </tr>
              <tr>
                <td className="py-4 px-6 border-b border-gray-200">John Doe</td>
                <td className="py-4 px-6 border-b border-gray-200 truncate">johndoe@gmail.com</td>
                <td className="py-4 px-6 border-b border-gray-200">555-555-5555</td>
                <td className="py-4 px-6 border-b border-gray-200">
                  <span className="bg-green-500 text-white py-1 px-2 rounded-full text-xs">Active</span>
                </td>
              </tr>
              <tr>
                <td className="py-4 px-6 border-b border-gray-200">John Doe</td>
                <td className="py-4 px-6 border-b border-gray-200 truncate">johndoe@gmail.com</td>
                <td className="py-4 px-6 border-b border-gray-200">555-555-5555</td>
                <td className="py-4 px-6 border-b border-gray-200">
                  <span className="bg-green-500 text-white py-1 px-2 rounded-full text-xs">Active</span>
                </td>
              </tr>
              <tr>
                <td className="py-4 px-6 border-b border-gray-200">John Doe</td>
                <td className="py-4 px-6 border-b border-gray-200 truncate">johndoe@gmail.com</td>
                <td className="py-4 px-6 border-b border-gray-200">555-555-5555</td>
                <td className="py-4 px-6 border-b border-gray-200">
                  <span className="bg-green-500 text-white py-1 px-2 rounded-full text-xs">Active</span>
                </td>
              </tr>
              <tr>
                <td className="py-4 px-6 border-b border-gray-200">John Doe</td>
                <td className="py-4 px-6 border-b border-gray-200 truncate">johndoe@gmail.com</td>
                <td className="py-4 px-6 border-b border-gray-200">555-555-5555</td>
                <td className="py-4 px-6 border-b border-gray-200">
                  <span className="bg-green-500 text-white py-1 px-2 rounded-full text-xs">Active</span>
                </td>
              </tr>
              <tr>
                <td className="py-4 px-6 border-b border-gray-200">John Doe</td>
                <td className="py-4 px-6 border-b border-gray-200 truncate">johndoe@gmail.com</td>
                <td className="py-4 px-6 border-b border-gray-200">555-555-5555</td>
                <td className="py-4 px-6 border-b border-gray-200">
                  <span className="bg-green-500 text-white py-1 px-2 rounded-full text-xs">Active</span>
                </td>
              </tr>
              <tr>
                <td className="py-4 px-6 border-b border-gray-200">John Doe</td>
                <td className="py-4 px-6 border-b border-gray-200 truncate">johndoe@gmail.com</td>
                <td className="py-4 px-6 border-b border-gray-200">555-555-5555</td>
                <td className="py-4 px-6 border-b border-gray-200">
                  <span className="bg-green-500 text-white py-1 px-2 rounded-full text-xs">Active</span>
                </td>
              </tr>
              <tr>
                <td className="py-4 px-6 border-b border-gray-200">John Doe</td>
                <td className="py-4 px-6 border-b border-gray-200 truncate">johndoe@gmail.com</td>
                <td className="py-4 px-6 border-b border-gray-200">555-555-5555</td>
                <td className="py-4 px-6 border-b border-gray-200">
                  <span className="bg-green-500 text-white py-1 px-2 rounded-full text-xs">Active</span>
                </td>
              </tr>
              <tr>
                <td className="py-4 px-6 border-b border-gray-200">John Doe</td>
                <td className="py-4 px-6 border-b border-gray-200 truncate">johndoe@gmail.com</td>
                <td className="py-4 px-6 border-b border-gray-200">555-555-5555</td>
                <td className="py-4 px-6 border-b border-gray-200">
                  <span className="bg-green-500 text-white py-1 px-2 rounded-full text-xs">Active</span>
                </td>
              </tr>
              <tr>
                <td className="py-4 px-6 border-b border-gray-200">Jane Doe</td>
                <td className="py-4 px-6 border-b border-gray-200 truncate">janedoe@gmail.com</td>
                <td className="py-4 px-6 border-b border-gray-200">555-555-5555</td>
                <td className="py-4 px-6 border-b border-gray-200">
                  <span className="bg-red-500 text-white py-1 px-2 rounded-full text-xs">Inactive</span>
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
