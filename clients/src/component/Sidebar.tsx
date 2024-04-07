import React from 'react'
import { Link } from 'react-router-dom'

function AdminSidebar() {
  return (
    <>
    <div className=" fixed top-0 left-0 h-screen px-3 py-4 overflow-y-auto  bg-[#f3f4f6] dark:bg-gray-800  mt-16  rounded-t-lg ">
          <ul className="space-y-2 font-medium px-8 ">
            <li>
              <Link
                to="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#4ef1aa] dark:hover:bg-gray-700 group"
              >
                <img
                  className=" w-7"
                  src="https://cdn-icons-png.flaticon.com/128/5974/5974636.png"
                  alt=""
                />
                <span className="ms-3">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                to="/admin/airlines"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#5af8b6] dark:hover:bg-gray-700 group"
              >
                <img
                  className=" w-7"
                  src="https://cdn-icons-png.flaticon.com/128/10425/10425426.png"
                  alt=""
                />

                <span className="ms-3">Airlines</span>
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#5af8b6] dark:hover:bg-gray-700 group"
              >
                <img
                  className=" w-7"
                  src="https://cdn-icons-png.flaticon.com/128/10402/10402319.png"
                  alt=""
                />

                <span className="ms-3">Airpots</span>
              </Link >
            </li>
            <li>
              <Link
                to="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#5af8b6] dark:hover:bg-gray-700 group"
              >
                <img
                  className=" w-7"
                  src="https://cdn-icons-png.flaticon.com/128/3253/3253488.png"
                  alt=""
                />

                <span className="ms-3">Cites</span>
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#5af8b6] dark:hover:bg-gray-700 group"
              >
                <img
                  className=" w-7"
                  src="https://cdn-icons-png.flaticon.com/128/2200/2200326.png"
                  alt=""
                />

                <span className="ms-3">Flights</span>
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#5af8b6] dark:hover:bg-gray-700 group"
              >
                <img
                  className=" w-7"
                  src="https://cdn-icons-png.flaticon.com/128/2491/2491957.png"
                  alt=""
                />

                <span className="ms-3">passengers</span>
              </Link>
            </li>
          </ul>
        </div>
    </>
  )
}

export default AdminSidebar