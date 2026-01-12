import { IoIosSettings } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { GrTwitter } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoGoogleplus } from "react-icons/io";
import SegmentForDate from "./SegmentForDate";
import { IoMdCloudDownload } from "react-icons/io";
import { FaCamera } from "react-icons/fa";
import bgDrop from "../Images/bgDrop.jpg"
import { MdLocationOn } from "react-icons/md";
import { AiOutlineDollar } from "react-icons/ai";
import { IoIosContacts } from "react-icons/io";
import { IoListCircleOutline } from "react-icons/io5";
import ChartDone from "./ChartDone";
import LineChartDone from "./LineChartDone";
import MapDone from "./MapDone";
function DashBoard() {
  return (
    <>
        <div className='shadow-sm text-lg font-bold py-2.5 mt-0.5 shadow-2xl px-6 bg-white'>
            Dashboard
        </div>
        <div className="p-6">
            <div className='bg-green-100 rounded-lg text-black p-3 flex items-center gap-2 font-semibold flex-wrap'>
                <span className='text-sm font-bold bg-green-500 !rounded-full px-2 text-white pb-0.5'>Success</span>
                You successfully read this important alert message.
            </div>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <div className="w-full  bg-cyan-400 text-white  p-3">
                    <div className="justify-between flex items-center">
                        <div className='flex flex-col'>
                            <span className="text-sm sm:text-base md:text-lg font-bold">10468</span>
                            <span>Members Online</span>
                        </div>
                        <div className="flex gap-1 items-center">
                            <IoIosSettings className="text-xl"/>
                            <IoIosArrowDown/>
                        </div>
                    </div>
                    <div className="flex justify-center pt-4">
                        <LineChartDone color="white" showDots="true" chartType="line"/>
                    </div>
                </div>
                <div className="w-full  bg-[#ADD8E6] text-white  p-3">
                    <div className="justify-between flex items-center">
                        <div className='flex flex-col'>
                            <span className="text-sm sm:text-base md:text-lg font-bold">10468</span>
                            <span>Members Online</span>
                        </div>
                        <div className="flex gap-1 items-center">
                            <IoIosSettings className="text-xl"/>
                            <IoIosArrowDown/>
                        </div>
                    </div>
                    <div className="flex justify-center pt-4">
                        <LineChartDone color="white" showDots="true" chartType="area"/>
                    </div>
                </div>
                <div className="w-full  bg-yellow-400 text-white  p-3">
                    <div className="justify-between flex items-center">
                        <div className='flex flex-col'>
                            <span className="text-sm sm:text-base md:text-lg font-bold">10468</span>
                            <span>Members Online</span>
                        </div>
                        <div className="flex gap-1 items-center">
                            <IoIosSettings className="text-xl"/>
                            <IoIosArrowDown/>
                        </div>
                    </div>
                    <div className="flex justify-center pt-4">
                        <LineChartDone color="white" showDots="true" chartType="bar"/>
                    </div>
                </div>
                <div className="w-full  bg-[#FA8072] text-white  p-3">
                    <div className="justify-between flex items-center">
                        <div className='flex flex-col'>
                            <span className="text-sm sm:text-base md:text-lg font-bold">10468</span>
                            <span>Members Online</span>
                        </div>
                        <div className="flex gap-1 items-center">
                            <IoIosSettings className="text-xl"/>
                            <IoIosArrowDown/>
                        </div>
                    </div>
                    <div className="flex justify-center pt-4">
                        <LineChartDone color="white" showDots="true"/>
                    </div>
                </div>
                <div className="w-full  bg-[#1877F2] text-white">
                    <div className="flex flex-col items-center justify-center">
                        <div className="p-9">
                            <FaFacebookF className="text-5xl"/>
                        </div>
                        <div className="flex gap-2 justify-center bg-white w-full text-black text-sm font-bold p-4 !pr-10">
                            <div className="opacity-75">4Ok FRIENDS</div>
                            <div className="opacity-75">|</div>
                            <div className="opacity-75">450 FEEDS</div>
                        </div>
                    </div>
                </div>
                <div className="w-full  bg-[#1DA1F2] text-white">
                    <div className="flex flex-col items-center justify-center">
                        <div className="p-9">
                            <GrTwitter className="text-5xl"/>
                        </div>
                        <div className="flex gap-2 justify-center bg-white w-full text-black text-sm font-bold p-4 !pr-10">
                            <div className="opacity-75">3Ok FRIENDS</div>
                            <div className="opacity-75">|</div>
                            <div className="opacity-75">450 TWEETS</div>
                        </div>
                    </div>
                </div>
                <div className="w-full  bg-[#0A66C2] text-white">
                    <div className="flex flex-col items-center justify-center">
                        <div className="p-9">
                            <FaLinkedinIn className="text-5xl"/>
                        </div>
                        <div className="flex gap-2 justify-center bg-white w-full text-black text-sm font-bold p-4 !pr-10">
                            <div className="opacity-75">40+ CONTACTS</div>
                            <div className="opacity-75">|</div>
                            <div className="opacity-75">250 FEEDS</div>
                        </div>
                    </div>
                </div>
                <div className="w-full  bg-[#DB4437] text-white">
                    <div className="flex flex-col items-center justify-center">
                        <div className="p-9">
                            <IoLogoGoogleplus className="text-5xl"/>
                        </div>
                        <div className="flex gap-2 justify-center bg-white w-full text-black text-sm font-bold p-4 !pr-10">
                            <div className="opacity-75">94k FOLLOWERS</div>
                            <div className="opacity-75">|</div>
                            <div className="opacity-75">92 CIRCLES</div>
                        </div>
                    </div>
                </div>



                <div className="col-span-1 sm:col-span-2 md:col-span-2 row-span-3 w-full p-2 bg-white">
                    <div className="justify-between flex items-center w-full px-3 flex-wrap ">
                        <div className="flex flex-col">
                            <span className="font-bold text-sm">Traffic</span>
                            <span className="font-bold opacity-75 text-xs">October 2017</span>
                        </div>
                        <div className="text-xs sm:text-sm ">
                        <SegmentForDate />
                        </div>
                        <button className="!text-xl bg-blue-400 p-1 text-white">
                            <IoMdCloudDownload/>
                        </button>
                    </div>
                    <div className="flex items-center justify-center w-auto h-auto "> 
                        <ChartDone/>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 p-4 bg-gray-100 border-t-2 border-gray-200">
                    <div className="flex flex-col items-center">
                        <span className="text-xs opacity-75">Visits</span>
                        <span className="font-bold">29.703 Users</span>
                        <span className="font-bold">(40%)</span>
                        <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden mt-2">
                            <div className="bg-green-500 h-full w-[40%] rounded-full"></div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-xs opacity-75">Unique</span>
                        <span className="font-bold">24.093 Users</span>
                        <span className="font-bold">(20%)</span>
                        <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden mt-2">
                            <div className="bg-green-500 h-full w-[20%] rounded-full"></div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-xs opacity-75">Pageviews</span>
                        <span className="font-bold">78.706 Users</span>
                        <span className="font-bold">(60%)</span>
                        <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden mt-2">
                            <div className="bg-yellow-500 h-full w-[60%] rounded-full"></div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-xs opacity-75">New Users</span>
                        <span className="font-bold">22.123 Users</span>
                        <span className="font-bold">(80%)</span>
                        <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden mt-2">
                            <div className="bg-red-500 h-full w-[80%] rounded-full"></div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-xs opacity-75">Bounce</span>
                        <span className="font-bold">Rate</span>
                        <span className="font-bold">(40.15%)</span>
                        <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden mt-2">
                            <div className="bg-blue-500 h-full w-[40%] rounded-full"></div>
                        </div>
                    </div>
                </div>   
                </div>
                <div className="row-span-1 bg-white w-full flex flex-col h-auto pb-3">
                    <div 
                        style={{ 
                            backgroundImage: `url(${bgDrop})`,
                            backgroundSize: '100% 100%'  
                        }}
                        className="flex items-center gap-3 bg-no-repeat min-h-[150px] sm:min-h-[200px] w-full p-3 backdrop-blur-xl"
                    >
                        <div className="rounded-full h-16 w-16 bg-gray-100 ">
                            {/* <img src=""/> */}
                        </div>
                        <div className="flex flex-col text-white">
                            <span className="text-3xl font-bold">Jim Doe</span>
                            <span>Product Manager</span>
                        </div>
                    </div>
                    
                    <div className="flex items-center justify-center gap-2 sm:!gap-4 md:!gap-6 opacity-75 py-3 flex-wrap">
                        <div className="flex flex-col justify-center items-center">
                            <span className="text-base sm:text-lg font-semibold">750</span>
                            <span className="text-xs sm:text-sm">Tweets</span>
                        </div>
                        
                        <div className="flex flex-col justify-center items-center border-r-2 border-l-2 border-gray-400 px-3 sm:px-4 md:px-6">
                            <span className="text-base sm:text-lg font-semibold">865</span>
                            <span className="text-xs sm:text-sm">Following</span>
                        </div>
                        
                        <div className="flex flex-col justify-center items-center">
                            <span className="text-base sm:text-lg font-semibold">3645</span>
                            <span className="text-xs sm:text-sm">Followers</span>
                        </div>
                    </div>
                    
                    <div className="flex items-center px-3 sm:px-4 md:px-6 py-3">
                        <input 
                            type="text" 
                            placeholder="Write your Tweet and Enter"
                            className="flex-1 px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-300 rounded-xl placeholder:text-gray-400 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                        />
                    </div>
                    
                    <div className="flex flex-col sm:flex-row justify-between px-3 sm:px-5 items-start sm:items-center opacity-75 gap-2 sm:gap-0 text-xs sm:text-sm">
                        <div className="flex items-center gap-1 justify-center">
                            <FaCamera className="opacity-65 text-xs"/>
                            <MdLocationOn className="opacity-65"/>
                            <span>New Castle, UK</span>
                        </div>
                        <span className="font-semibold">32</span>
                    </div>    
                </div>

                <div className="row-span-1 w-full grid grid-rows-3 gap-4">
                    <div className=" w-full p-3 bg-white flex gap-3 items-center">
                        <AiOutlineDollar className="text-green-400 text-6xl"/>
                        <div className="flex flex-col">
                            <span>Total Profits</span>
                            <span className="font-bold text-2xl">1,012</span>
                        </div>
                    </div>
                    
                    <div className=" w-full p-3 bg-white flex gap-3 items-center">
                        <IoIosContacts className="text-blue-400 text-6xl"/>
                        <div className="flex flex-col">
                            <span>New Customer</span>
                            <span className="font-bold text-2xl">961</span>
                        </div>
                    </div>
                    
                    <div className=" w-full p-3 bg-white flex gap-3 items-center">
                        <IoListCircleOutline className="text-yellow-400 text-6xl"/>
                        <div className="flex flex-col">
                            <span>Active Projects</span>
                            <span className="font-bold text-2xl">770</span>
                        </div>
                    </div>
                </div> 
                <div className="col-span-1 sm:col-span-2 md:col-span-2 row-span-4 bg-white p-2">
                    <div className="bg-gray-100 font-bold text-lg p-2">
                        World
                    </div>
                    <MapDone/>
                </div>           
            </div>

        </div>
           
    </>
  )
}

export default DashBoard