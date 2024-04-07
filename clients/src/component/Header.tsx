import React from 'react'

function Header() {
  return (
   <>
   <header className=" rounded-full fixed top-0 left-0 py-2 bg-[#5af8b6]   px-24 flex  w-[95%] mx-20 justify-between items-center  z-40 ">
        <h2 className=" font-extrabold  "> Admin Dashborad </h2>

        <nav className=" flex  list-none gap-7 font-semibold">
          <div className="flex gap-4">
            <img
              className=" w-10"
              src="https://cdn-icons-png.flaticon.com/128/8889/8889191.png"
              alt=""
            />
            <img
              className=" w-10"
              src="https://cdn-icons-png.flaticon.com/128/1999/1999625.png"
              alt=""
            />
          </div>
       
        </nav>
      </header>

   </>
  )
}

export default Header