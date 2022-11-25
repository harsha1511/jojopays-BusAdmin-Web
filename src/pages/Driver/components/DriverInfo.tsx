import React from "react";
import { Link } from "react-router-dom";
import BackButton from '../../../components/BackButton'
import { Rating } from "../../Profile/components/Rating";
import { DeleteButton } from '../../../components/DeleteButton'
import EditButton from '../../../components/EditButton'

  
  
  import {FaUser} from 'react-icons/fa'
  
  import { FaIdCard } from 'react-icons/fa'
  
  import { BsFillFileEarmarkPdfFill }from 'react-icons/bs'
  import { FaIdBadge } from 'react-icons/fa'
  import  {PowerButton}  from '../../../components/PowerButton'
  import  {Attendance }from '../../../components/Attendance'
  
  
  
  
  function DriverInfo() {
    return (
        <div>
  
        <div className="relative  w-screen h-[120px] left-[-72px]">
        
    <img src="https://www.bestcitymaps.com/wp-content/uploads/2015/04/kenya-political-map.jpg" alt="" className="absolute w-full h-full rounded-br-3xl object-cover "/>
        <div className="absolute flex items-center justify-between w-full h-full bg-primary opacity-70 rounded-b-3xl"></div>
        <div className="absolute flex items-center justify-between w-full h-full  rounded-b-3xl">
       
        <p className="ml-[290px] mt-[50px] text-[60px] tracking-wider font-semibold">Daniel</p>
            < Link to="/Driver-detail"> 
            <button className="p-[4px]  px-10 text-[19px] ml-2 mt-[50px]  rounded-3xl font-bold  hover:bg-quaternaryText  
            hover:text-black shadow-md rounded-xl text-quaternaryText  bg-secondary">View Trip</button>
             </Link> 
          
           <div className="ml-[60px]">
            <Link className="ml-[30px]" to="/Driver-rating">       
            <Rating  star={5} />
          </Link> 
          </div> 
          <div className="  mr-8">
          <BackButton/>         
          </div>

       
        </div>
        

        <img src="https://www.shareicon.net/data/512x512/2015/09/18/103160_man_512x512.png" alt="" className="absolute w-[110px] h-[110px]  mt-[80px] sm:ml-[180px] rounded-full "/>
       
        </div>
        
        <div>
        <div className=" flex justify-center flex-row mr-[620px] mt-4">
        <button className="p-[6px] px-8 text-[14px] font-semibold shadow-md  text-primaryText rounded-l-full bg-secondary">Driving Licence</button>
        <button className="p-[6px] px-8 text-[14px] font-semibold shadow-md border-l-2 border-quaternary text-primaryText  bg-secondary">Company ID</button>
        
        <button className="p-[6px] px-8 text-[14px] font-semibold shadow-md border-l-2 border-quaternary text-primaryText rounded-r-full bg-secondary">Resume</button>
        </div>
    
        </div>
        {/* Login id and password */}

        <div className='m-4 mr-2 -mt-8 h-22 w-[19%] ml-[47%] bg-quaternary rounded-xl drop-shadow-lg'>
                <label className='flex items-center m-2 ml-6 pt-2 text-primaryText'>Login ID:
                <p className='ml-2 w-40 py-1 pl-3 bg-secondary text-sm text-white font-semibold rounded-xl'>sugan</p>
                </label>
                <label className='flex m-4 mt-4 pb-4 text-primaryText'>Password:
                <p className='ml-2 w-40 py-1 pl-3 bg-secondary text-sm text-white font-semibold rounded-xl'>********</p>
                </label>
            </div>
            <section className='flex -mt-8'>
                <div className='w-[50%] '>
                    <form className='tracking-wider ml-10'>
                        <div className='flex items-center'>
                            <label className='flex justify-end w-32 text-primaryText text-lg font-bold'>Jopay ID:</label>
                            <p className='text-white text-sm font-light pl-4'>snbdjba5565</p>
                        </div>
                        <div className='flex items-center mt-3'>
                            <label className='flex justify-end w-32 text-primaryText text-lg font-bold'>Email ID:</label>
                            <p className='text-white text-sm font-light pl-4'>sugan@gmail.com</p>
                        </div>
                        <div className='flex items-center mt-3'>
                            <label className='flex justify-end w-32 text-primaryText text-lg font-bold'>Main ph, No.:</label>
                            <p className='text-white text-sm font-light pl-4'>61612661</p>
                        </div>
                        <div className='flex items-center mt-3'>
                            <label className='flex justify-end w-32 text-primaryText text-lg font-bold'>Ph, No.2:</label>
                            <p className='text-white text-sm font-light pl-4'> 15151651</p>
                        </div>
                        <div className='flex mt-3'>
                            <label className='flex justify-end w-32 text-primaryText text-lg font-bold'>Address:</label>
                            <p className='w-56 text-white text-sm font-light pl-4'>njddsjk kfnkldsnfak  kdfnknie kdfmdnfuni dfnnjr  newnfiewi</p>
                        </div>
                        <div className='flex items-center mt-3'>
                            <label className='flex justify-end w-32 text-primaryText text-lg font-bold'>Blood Group:</label>
                            <p className='text-white text-sm font-light pl-4'>B+ve</p>
                        </div>
                        <div className='flex items-center mt-3'>
                            <label className='flex justify-end w-32 text-primaryText text-lg font-bold'>DOB:</label>
                            <p className='text-white text-sm font-light pl-4'>14/06/98</p>
                        </div>
                        </form>
                        <div className='flex items-center  flex-col ml-[290px] -mt-12 pt-2 pb-4 w-[375px] h-[220px] bg-secondary rounded-2xl'>
                        <p className='text-primaryText  pt-2 pb-4 text-xl font-bold'>Scheduled Pays</p>
                        <p className='ml-2 w-[275px] h-[55px]  py-1 pl-3 border-2 border-primaryText text-sm text-primaryText font-semibold rounded-xl'>
                        <label className='flex items-row m-2 ml-[2px] -mt-[10px] pt-2 text-primaryText'>Bonus Day 
                <p className='ml-[75px] w-[105px] h-[20px] text-center bg-primary text-xs text-white font-semibold rounded-xl'>Jan.20-08:00am</p>
                
                </label>
                <label className='flex items-row ml-[2px]  -mt-[10px] pt-2 text-xs   text-greyText'>Manual Payment Mode
                <p className='ml-[15px] w-[105px] h-[18px] text-center  text-xs text-primaryText font-semibold rounded-xl'>Next payment on</p>
                
                </label>
                        </p>
                        <p className='ml-2 w-[275px] h-[55px] mt-4 py-1 pl-3 border-2 border-primaryText text-sm text-primaryText font-semibold rounded-xl'>
                        <label className='flex items-row m-2 ml-[2px] -mt-[10px] pt-2 text-primaryText'>Bonus Day 
                <p className='ml-[75px] w-[105px] h-[20px] text-center bg-primary text-xs text-white font-semibold rounded-xl'>Jan.20-08:00am</p>
                
                </label>
                <label className='flex items-row ml-[2px]  -mt-[10px] pt-2 text-xs   text-greyText'>Manual Payment Mode
                <p className='ml-[15px] w-[105px] h-[18px] text-center  text-xs text-primaryText font-semibold rounded-xl'>Next payment on</p>
                
                </label>
                        </p>
                        
                    </div>
                        </div>
                        




                         <div className='w-[24%] -ml-[75px] mt-2 z-10'>
                         <Attendance isDownload={false} />
                </div> 
                <div className="bg-redText w-[30%] flex flex-col">
                    <div className="flex flex-row">
                <div className='m-4 mr-2 flex flex-row-reverse  -mt-20 h-[220px] w-[110px] ml-[10px] bg-quaternary rounded-3xl drop-shadow-lg'>
               
                <p className='ml-2 mr-4 pr-2 mt-4 w-[80px] text-center  py-1 h-[50px] text-pinkText pl-3 bg-secondary text-sm font-semibold rounded-xl'>Assign <br/>Trip
                <Link to="/Driver-upcomingtrip">
                <button className='-ml-[10px] mr-2 pr-2 mt-6 w-[80px] text-center  py-1 h-[50px] text-pinkText pl-[6px] bg-secondary text-sm  font-semibold rounded-xl'>upcoming <br/>Trip(s)</button>
                </Link>
                <Link to="/previous-trips">
                <button className='-ml-[10px] mr-2 pr-2 mt-6 w-[80px] text-center  py-1 h-[50px] text-pinkText pl-[7px] bg-secondary text-sm  font-semibold rounded-xl'>previous <br/>Trip(s)</button>
                </Link>
                </p>
                </div>
                <div className='m-4 mr-2 flex flex-row-reverse  -mt-20 h-[220px] w-[230px] ml-[20px] bg-quaternary rounded-3xl drop-shadow-lg'>
                    <p className="mt-2 mr-6  font-bold text-sm text-primaryText">Our Driver/Co-Driver since
                    <p className='ml-8 w-[115px] mt-2 py-1 pl-[24px]  text-sm bg-secondary text-xs text-white font-semibold rounded-lg'>05.04.2020</p>
                    <p className=" ml-12 text-sm mb-2 font-bold text-primaryText">Total Trips</p>
                    <p className='ml-12 w-[85px] mt-0 py-1 pl-[32px]  text-sm bg-secondary text-xs text-white font-semibold rounded-lg'>735</p>
                    <p className=" ml-12 text-sm mb-2 font-bold text-primaryText">Casual Trips</p>
                    <p className='ml-12 w-[85px] mt-0 py-1 pl-[32px]  text-sm bg-secondary text-xs text-white font-semibold rounded-lg'>600</p>
                    <p className=" ml-12 text-sm  mb-2 font-bold text-primaryText">Casual Trips</p>
                    <p className='ml-12 w-[85px] mt-0 py-1 pl-[32px]  text-sm bg-secondary text-xs text-white font-semibold rounded-lg'>600</p>



                    
                    </p>
                    
                    
                </div>
                </div>
                <div className="flex ml-4 w-full h-full">
                <div className="flex w-[80%] h-[65%] bg-quaternary justify-center rounded-xl items-center">
                    <div>
                        
                    </div>
                    </div>
                </div>
                </div>
                
                        </section>
                       
                        <div>
                        <div className="flex justify-row mt-[35px]">
                        
                        <PowerButton className="" />
                        </div>
                        <Link to="/update-driver  ">
                        <div className="ml-[85px] -mt-[115px]">
                        <EditButton isEdit={true} className=" "/>
                        </div>
                        </Link>
                        <div className="ml-[115px] mt-4">
                        <DeleteButton />

                        </div>
                       
                            </div>
                           
                      
                        

  
        
        
         </div>





             
  
  
      );
  }
  
  

export default DriverInfo;
