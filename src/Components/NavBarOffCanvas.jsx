import { IoIosArrowForward } from "react-icons/io";
import { FaMartiniGlass } from "react-icons/fa6";
import { IoBarChartSharp } from "react-icons/io5";
import { FaMapMarkedAlt } from "react-icons/fa";
import { MdOutlineWidgets } from "react-icons/md";
import { TbIcons } from "react-icons/tb";
import { FaWpforms } from "react-icons/fa";
import { LiaTableSolid } from "react-icons/lia";
import { MdOutlineComputer } from "react-icons/md";
import { AiOutlineDashboard } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
function NavBarOffCanvas() {

  return (
    
    <>
      <div className="h-full bg-[#222629] text-white pt-3 p-4 w-[260px]">
          <div className="mb-4 text-center text-xl"><span className="font-light">Sufee </span> <span className="font-bold">Admin</span></div>
          <hr/>
          
          <ul className="space-y-3 !pb-5 text-xs">
          <NavLink to="/dashboard" className="!no-underline decoration-0 text-white hover:!opacity-75">
            <li className="flex justify-between"><div className="flex gap-4 items-center "><AiOutlineDashboard/>Dashboard</div></li>
          </NavLink>
          </ul>

          <div className="!text-xs font-semibold opacity-50">UI ELEMENTS</div>
          <hr/>
          <ul className="space-y-3 !pb-5 text-xs">
            <li className="flex justify-between"><div className="flex gap-4 items-center"><MdOutlineComputer/>Components</div><IoIosArrowForward /></li>
            <li className="flex justify-between"><div className="flex gap-4 items-center"><LiaTableSolid/>Tables</div><IoIosArrowForward /></li>
            <li className="flex justify-between"><div className="flex gap-4 items-center"><FaWpforms/>Forms</div><IoIosArrowForward /></li>
          </ul>

          <div className="!text-xs font-semibold opacity-50">ICONS</div>
          <hr/>
          <ul className="space-y-3 !pb-5 text-xs">
            <li className="flex justify-between"><div className="flex gap-4 items-center"><TbIcons />Icons</div><IoIosArrowForward /></li>
            <li className="flex justify-between"><div className="flex gap-4 items-center"><MdOutlineWidgets />Widgets</div><IoIosArrowForward /></li>
            <li className="flex justify-between"><div className="flex gap-4 items-center"><IoBarChartSharp />Charts</div><IoIosArrowForward /></li>
            <li className="flex justify-between"><div className="flex gap-4 items-center"><FaMapMarkedAlt />Maps</div><IoIosArrowForward /></li>
          </ul>

          <div className="!text-xs font-semibold opacity-50">EXTRAS</div>
          <hr/>
          <ul className="space-y-3 text-xs">
            <li className="flex justify-between"><div className="flex gap-4 items-center"><FaMartiniGlass />Pages</div><IoIosArrowForward /></li>
          </ul>
        </div>
    </>
  );
}

export default NavBarOffCanvas;
