import React from 'react'
import { FaSearch } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import ReactCountryFlag from "react-country-flag";

function NavHeader() {
  return (
    <>
        <div className="flex gap-3 pl-15 items-center">
                  <FaSearch className="text-black text-lg"/>
                  <IoIosNotifications className="text-black text-xl"/>
                  <MdOutlineMail className="text-black text-xl"/>
                </div>
                <div className="flex gap-3 pl-15 items-center">
                  <ReactCountryFlag
                    countryCode="IN"
                    svg
                    className="w-6 h-6"
                  />
                  <div className="!rounded-full bg-gray-200 h-6 w-6 border-black border-2"></div>
        </div>
    </>
  )
}

export default NavHeader