import React,{ useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { openModal, closeModal } from "../../store/reducers/modal.reducer";

import EditButton from "../../components/EditButton";
import { Rating } from "./components/Rating";
import StaffList from "./components/StaffList";
import BankDetails from "./components/BankDetails";


import {FaBusAlt, FaPhoneAlt } from "react-icons/fa"
import {TbUserCircle} from "react-icons/tb"
import {RiGroup2Fill, RiLoginBoxFill} from "react-icons/ri"
import {BiLaptop} from "react-icons/bi"
import {GrMail} from "react-icons/gr"

import './profile.css'
import { Card } from "../../components/Card";
import { useDispatch, useSelector,RootStateOrAny } from "react-redux";
import axios from "axios";


const Profile = () => {

  
  const [rating, setRating] = useState(2)
  const [profileData, setProfileData] = useState<any>()
  const [isLoading, setIsLoading] = useState(false);

  const {isOpen} = useSelector((store:RootStateOrAny) => store.modal);
  const dispatch = useDispatch()

  


useEffect(() => {
  const GetProfileData = async () => {
    try{
      setIsLoading(true)
      const response = await axios.get("http://192.168.1.17:80/getProfileData");
      console.log(response);
      setProfileData(response.data.profile)
      setIsLoading(false)
    }
    catch (err) {
      console.log(err);   
    }
  };
  GetProfileData();
},[] )

console.log(profileData, "datass");



  return(
    <div>  
      <div className="relative h-screen w-[96vw]">
      {isOpen &&
      <div className="z-10 absolute h-full w-full flex justify-center items-center">
      <div className="absolute h-full w-full" onClick={() => dispatch((closeModal(false)))}></div>
      <Card isUpdate={false} ifResume={false} title="Company Document" image="" />
      </div> 
      }
<div>
    <div className="relative w-screen h-[140px] left-[-72px]">
      <div>
      <img src="https://wallpaperaccess.com/full/1628619.jpg" alt="" className="absolute w-full h-full object-cover rounded-b-3xl"/>
      <div className="absolute w-[100%] h-full bg-tertiary opacity-70 rounded-b-3xl">
      </div>
      </div>
      <div className="absolute w-full h-full flex justify-between">
        <div className="flex pl-20 items">
          <Link to="/edit-profile">
          <EditButton className="mt-3" isEdit={false}/>
          </Link>
          <div className="hidden absolute sm:block w-3 h-3 mt-12 ml-2  bg-quinary rounded-full"></div>
          <div className="hidden absolute sm:block w-6 h-6 mt-24       bg-primaryText rounded-full"></div>
          <div className="hidden absolute sm:block w-4 h-4 mt-10 ml-24 bg-primaryText rounded-full"></div>
          <div className="hidden absolute sm:block w-3 h-3 mt-4  ml-28 bg-primaryText rounded-full"></div>
          <div className="hidden absolute sm:block w-3 h-3 mt-6  ml-32 bg-quinary rounded-full"></div>
          <div className="hidden absolute sm:block w-3 h-3 mt-24 ml-24 bg-quinary rounded-full"></div>
          <img src="https://www.worldatlas.com/img/flag/ke-flag.jpg" alt="" className="hidden sm:block absolute w-20 h-20 mt-10 ml-6 rounded-full"/>
          <img src="https://miro.medium.com/max/785/0*Ggt-XwliwAO6QURi.jpg" alt="" className="absolute w-16 h-16 mt-16 sm:ml-28 rounded-full "/>
          <div className="flex justify-start flex-col mt-16 ml-12 sm:ml-40">
            <p className="font-bold text-lg mb:text-2xl  tracking-wider text-primaryText">This is <span className="text-white">
              {profileData?.ownerName}
            </span></p>
            <p className="flex justify-end text-sm font-bold">@john_1587</p>
          </div> 
        </div>
          <div className="mr-36">
            <div className="flex justify-center items-center px-6 h-14 bg-secondary rounded-b-3xl">
              <p className="text-2xl font-bold tracking-wider text-primaryText">{profileData?.companyName}</p>
            </div>
              <div className="flex justify-between">
                <div className="flex flex-col items-center"><FaBusAlt className="scale-150 mt-3 text-primaryText" />
                <span className="flex mt-1 flex-col items-center font-bold">{profileData?.numberOfBuses}</span>
                <span className="flex justify-center -mt-1 text-greyText text-[12px]">Bus</span></div>
                <div className="flex flex-col items-center ml-4"><RiGroup2Fill className="scale-150 mt-3 text-primaryText" />
                <span className="flex mt-1 flex-col items-center font-bold">{profileData?.numberOfPilots}</span>
                <span className="flex justify-center -mt-1 text-greyText text-[12px]">Pilots</span></div>
                <div className="flex flex-col items-center ml-4"><TbUserCircle className="scale-150 mt-3 text-primaryText" />
                <span className="flex mt-1 flex-col items-center font-bold">{profileData?.numberOfOnDesks}</span>
                <span className="flex justify-center -mt-1 text-greyText text-[12px]">On Desk</span></div>
                <div className="flex flex-col items-center ml-4"><RiLoginBoxFill className="scale-150 mt-3 text-pinkText" />
                <span className="flex mt-1 flex-col items-center font-bold">{profileData?.numberOfLogins}</span>
                <span className="flex justify-center -mt-1 text-greyText text-[12px]">Login IDs</span></div>
              </div>
            </div>
          <Link to="/rating">
            <Rating star={profileData?.rating} />
          </Link>
      </div>
    </div>
    <div className="flex flex-row">
      <div className="w-[60%] h-[580px] overflow-y-auto" id="noScrollBar">
        {/* document button */}
        <div className=" flex justify-center flex-row mt-4">
          <p className="p-[6px] px-8 text-[14px] font-semibold shadow-md  text-primaryText rounded-l-full bg-secondary"
          onClick={() => { dispatch(openModal(true))}}>Company Document</p>
          <p className="p-[6px] px-8 text-[14px] font-semibold shadow-md border-l-2 border-quaternary text-primaryText rounded-r-full bg-secondary">Your ID Proof</p>
        </div>
        <div className="ml-10 mt-14">
          <form action="" className="grid grid-glow-row gap-4">
          <div>
        {/* {profileData?.map((data?:any) => ( */}
             <label className="text-xl font-bold">Bio:
              <p className="ml-4 text-lg font-normal text-tertiary mb-3">{profileData?.companyBio}</p>
            </label>
         {/* ))} */}
            <label className="text-xl font-bold mt-1">Company Address:
              <p className="ml-4 text-lg font-normal text-tertiary mb-3">{profileData?.companyAddress}</p>
            </label>
            <label className="text-xl font-bold">Owner Address:
              <p className="ml-4 text-lg font-normal text-tertiary mb-3">{profileData?.ownerAddress}</p>
            </label>
            <div className="flex items-start">
            <label className="flex items-center"><FaPhoneAlt className="scale-125" />
              <p className="ml-4 text-tertiary text-lg">{profileData?.companyPhone}</p>
            </label>
            <div className="ml-36">
            <label className="flex  items-center"><GrMail className=" scale-150" />
              <p className="ml-20 text-tertiary text-lg">{profileData?.companyMail}</p>
            </label>
            <label className="flex mt-6 text-xl font-bold">Personal:
            <p className="ml-4 text-lg font-normal text-tertiary">{profileData?.ownerPhone}</p></label>            
            </div>
            </div>
          </div>
          </form>
        </div>
        <div >
           <BankDetails />
        </div>
        <div className="h-[60px] w-[20%]"></div>
        {/* Staff */}
        </div>
            <StaffList />
        </div>

</div>
  </div>
    </div>

  )};



export default Profile;



// bus image cover --- to upload image