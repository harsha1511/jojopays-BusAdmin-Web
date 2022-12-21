import React from "react";
import { Link } from "react-router-dom";
import BackButton from "../../../components/BackButton";
import{FaBusAlt} from "react-icons/fa"
import{SiCircleci} from "react-icons/si"
import{FaArrowAltCircleUp} from "react-icons/fa"




const dayFilter = [
  {
    label: "Specific Date",
    button: "All",
  },
  {
    label: "From",
    button: "date",
  },
  {
    label: "To",
    button: "date",
  },
];

function PreviousTrips() {

  const members = [
    {icon: 1, name : "Trip 1"},
    {icon: 1, name : "Trip 2"},
    {icon: 1, name : "Trip 3"},
    {icon: 1, name : "Trip 4"},
    {icon: 1, name : "Trip 5"},
    {icon: 1, name : "Trip 6"},
    {icon: 1, name : "Trip 7"},
    {icon: 1, name : "Trip 8"},
    {id: <FaArrowAltCircleUp/>, name : "Trip 9"},
   
]




  return (
    <div className="h-[100%]  w-screen  p-0">
              <div className="flex  flex-col  justify-center ml-[80px] w-[85%] h-[65px] bg-secondary mt-10 rounded-[40px]  shadow-xl">
                <div className="flex justify-center items-center -mt-6 font-bold text-[20px] font-semibold text-quaternaryText 
                tracking-[5px] text-[40px] ">Previours Trips</div>
                    <div className="flex justify-end -mt-[3%] text-white mr-4 ">
                      <BackButton/>
                    </div>
                
              </div>
              <div className="  flex  flex-col items-center justify-center  p-4 w-[23%] h-[40px]  mt-[30px] ml-[35%] rounded-[20px] bg-quaternary shadow-xl ">
                  <p className="font-bold text-primaryText text-[15px] ">1 August 2021 (Sunday)</p>
                </div>
                <div className="flex justify-center w-screen h-screen mt-2 rounded-xl ">
                  <div className="flex-col flex items-center w-4/5 h-4/6  mt-2 mr-10">
                    <div className="flex flex-row justify-center bg-quaternary rounded-xl w-[60%] h-20  mr-10">
                    {dayFilter.map(({ label, button }) => (
                    <label className="flex items-center gap-2 ">
                    <span className="font-bold ml-6">{label}</span>
                     {button === "All" ? (
                     <span className="text-primaryText bg-primary rounded ml-2  px-4 py-2">
                      All
                     </span>
                      ) : (
                       <span className="relative  mr-8">
                      <input  
                        type="date"
                        className="datepicker-input bg-primary px-2 py-2 text-sm rounded"
                      />
                    </span>
                     )}
                   </label>
                    ))}

                    </div>
                    <div className="grid grid-cols-2 gap-2 w-4/5 h-4/5 mt-6 overflow-y-auto">
                    {/* <div className=" ">  */}
                    {members.map(({name}) => (    
                  
                
                <div className=" relative flex-col hover:border-2 cursor-pointer border-textblue  w-[90%] h-[55px] 
                bg-secondary mt-8 rounded-[40px]  shadow-xl">
                   <Link to="/Driver-Tripdetails">
                    <p className=" text-start  font-bold text-[20px] ml-4 p-4 text-primaryText tracking-[1px] text-[20px] ">{name}
                    <div className="flex justify-end text-white  -mt-[20px] mr-4 ">
                      <FaBusAlt className="text-pinkText"/>
                      <SiCircleci className="ml-4 text-primaryText"/>
                    </div>
                </p>
                </Link>
              </div>
             
              ))}
              {/* </div>  */}
                    </div>
                    
                  </div>
              
              </div>
              </div>
  );
}

export default PreviousTrips;
