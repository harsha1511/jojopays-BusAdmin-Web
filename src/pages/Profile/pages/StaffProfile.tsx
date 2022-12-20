import React, {useState, useEffect} from 'react'
import * as yup from "yup";
import { countReducer, nameShrinker } from "../../../utils/helpers";

import { BsSearch } from "react-icons/bs";

import CustomForm from "../../../components/Form";
import BackButton from '../../../components/BackButton';
import axios from 'axios';
import { ToggleButton } from '../../../components/ToggleButton';
import { Link } from "react-router-dom";

import { Attendance } from '../../../components/Attendance'
import { DeleteButton } from '../../../components/DeleteButton'
import EditButton from '../../../components/EditButton'
import  {PowerButton}  from '../../../components/PowerButton'
import constants from '../../../API/constants';




export const StaffProfile = () => {

    const [selectStaff, setSelectStaff] =useState<any>();
    const [singleStaff, setSingleStaff] =useState<any>();
    const [staffId, setStaffId] = useState<any>()
    


  const searchSchema = yup.object().shape({
    search: yup.string(),  
  });
  const handleSearch = (values: any) => {
    console.log(values);
  };

  
 useEffect(()=> {
        const getStaffNames = async () => {
           try{               
              const response = await axios.get("http://192.168.1.17:80/getDeskStaffData")
              console.log(response, "staff");
              setStaffId(response?.data)
            }
            catch (err) {
              console.log(err);
            }
        };
        getStaffNames()
    },[])


    const getStaffData = async (staff:React.MouseEventHandler<HTMLDivElement>) => {
      try{
        setSelectStaff(staff)
        console.log(selectStaff,"HHHH");
        const SendData = await axios.post(constants.auth.onDeskStaff, selectStaff)
        .then( resp => {
          console.log(resp.data);
          setSingleStaff(resp?.data)
        })
        }catch (err) {
          console.log(err); 
        }
    }


  return (
    <div className='flex w-screen h-screen'>
        <section className='w-[20%] h-screen overflow-y-auto bg-secondary drop-shadow-2xl'>
            <CustomForm
              initialValues={{ search: "" }}
              validationSchema={searchSchema}
              onSubmit={handleSearch}
            >
              <div className="flex items-center border-2 border-primaryText mt-10 mb-6 mx-5 rounded-full px-3">
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-transparent border-none py-2 px-4 text-white outline-none w-full"
                />
                <button className="" type="submit">
                  <BsSearch className="text-primaryText" />
                </button>
              </div>
            </CustomForm>
            {staffId?.map((staff:any) => (
              <div className="overflow-y-auto overflow-x-hidden">
              <div className="bg-primary h-14 mx-4 rounded-lg flex items-center p-2 justify-between mb-2 cursor-pointer"
              onClick={() => getStaffData(staff.addId)}>
                <div className="flex items-center gap-2">
                  <img
                    src={staff.addPhoto}
                    alt="profile"
                    className="rounded-full bg-secondary w-10 h-10 object-cover overflow-hidden"
                    />
                  <h2 className="truncate">{nameShrinker(staff.staffName, 12)}</h2>
                </div>
                {staff.staffStatus !== null ? 
                  <div className='w-3 h-3 mr-4 rounded-full bg-quaternaryText'></div>
                  : <div className='w-3 h-3 mr-4 rounded-full bg-redText'></div> 
                }
              </div>
            </div>
            ))}
        </section>
        <section className='w-[50%]'>
            <div className='realtive w-full h-screen'>
        <section className='flex justify-between h-32 bg-secondary'>
           {/* company Documents and profile pic */}
            <div className=''> 
                <div className='ml-24 mt-6 bg-quaternary px-3 py-1 rounded-2xl drop-shadow-sm text-sm text-primaryText'>
                    <button className='pl-4 pr-2'>Govt. ID</button>
                    <button className='pl-4 pr-2 border-l-2 border-tertiary'>Company ID </button>
                    <button className='pl-4 border-l-2 border-tertiary'>Resume</button>
                </div>
                <div className='flex items-center'>
                    <img src="https://media.istockphoto.com/photos/rendered-classic-sculpture-metaverse-avatar-with-network-of-lowpoly-picture-id1401980646?b=1&k=20&m=1401980646&s=170667a&w=0&h=KxgnhtW2_Q3LUOCwJXYlj27vVlkrfcBk789d-cNZURk=" 
                    alt=""
                    className="rounded-full bg-secondary w-24 h-24 mt-3 ml-20 object-cover overflow-hidden" />
                    <p className='text-2xl font-semibold ml-6 tracking-[.3rem]'>{singleStaff?.staffName}</p>
                </div>
            </div>
            {/* login ID and Password */}
            {/* <div className='m-4 mr-10 bg-quaternary rounded-xl drop-shadow-lg'>
                <label className='flex items-center m-4 text-primaryText'>Login ID:
                <p className='ml-2 w-40 py-1 pl-3 bg-secondary text-sm text-white font-semibold rounded-xl'>age</p>
                </label>
                <label className='flex m-4 text-primaryText'>Password:
                <p className='ml-2 w-40 py-1 pl-3 bg-secondary text-sm text-white font-semibold rounded-xl'>********</p>
                </label>
            </div> */}
        </section>
            {/* informations and calendar */}
            <section className='flex h-full mt-10 '>
                <div className='flex flex-col h-[76%] mb-10 justify-between w-[50%]'>
                    <form className='tracking-wider ml-10'>
                        <div className='flex items-center'>
                            <label className='flex justify-end w-32 text-primaryText text-lg font-bold'>Jojopay ID:</label>
                            <p className='text-white text-sm font-light pl-4'>{singleStaff?.companyId}</p>
                        </div>
                        <div className='flex items-center mt-3'>
                            <label className='flex justify-end w-32 text-primaryText text-lg font-bold'>Email ID:</label>
                            <p className='text-white text-sm font-light pl-4'>{singleStaff?.staffEmailId}</p>
                        </div>
                        <div className='flex items-center mt-3'>
                            <label className='flex justify-end w-32 text-primaryText text-lg font-bold'>Main ph, No.:</label>
                            <p className='text-white text-sm font-light pl-4'>{singleStaff?.staffMobileNo}</p>
                        </div>
                        <div className='flex items-center mt-3'>
                            <label className='flex justify-end w-32 text-primaryText text-lg font-bold'>Ph, No.:</label>
                            <p className='text-white text-sm font-light pl-4'>{singleStaff?.staffSecMobileNo}</p>
                        </div>
                        <div className='flex mt-3'>
                            <label className='flex justify-end w-32 text-primaryText text-lg font-bold'>Address:</label>
                            <p className='w-56 text-white text-sm font-light pl-4'>{singleStaff?.staffAddress}</p>
                        </div>
                    </form>
                    <div className='flex items-start'>
                      <div className=''>
                        <PowerButton status={singleStaff?.staffStatus} />
                      </div>
                      <div className='-ml-8'>
                          <Link to="/edit-staff-profile">
                              <EditButton isEdit={true} className=""/>
                          </Link>
                          <div className='ml-6 mt-2'>
                              <DeleteButton />
                          </div>
                      </div>
                    </div>
                </div>
                <div className='w-[50%] z-10'>
                    <Attendance isDownload={true} value={singleStaff?.attendance} />
                </div>
            </section>
    </div>
        </section>
        <section className='w-[30%] h-screen bg-secondary drop-shadow-2xl'>
          <div className='flex justify-end w-[70%] m-8'>
            <BackButton />
          </div>
          <div className='flex flex-col items-center mr-20'>
            <p className='text-md -mt-4 text-primaryText'>Working Since</p>
            <div className='relative flex justify-center items-center w-60 h-[1px] mt-4 bg-primaryText'>
              <p className='px-6 bg-secondary font-bold'>{singleStaff?.joiningDate}</p>
            </div>
          </div>
          <label className='flex items-center justify-center mr-20 mt-8 text-sm text-primaryText pt-4'>D.O.B: 
            <span className='text-white ml-4 px-6 py-2 bg-primary rounded-xl'>{singleStaff?.attendance}</span>
          </label>
          <div className='flex items-center flex-col mr-20 mt-10'>
              <div className='flex items-center'>
                <p className='w-40 text-primaryText text-lg font-semibold'>Group Chat</p>
                <div className='mt-1'><ToggleButton className='' isBig={false} /></div>
              </div>
              <div className='flex items-center mt-2'>
                <p className='w-40 text-primaryText text-lg font-semibold'>Ticket Price</p>
                <div className='mt-1'><ToggleButton className='' isBig={false} /></div>
              </div>
              <div className='flex items-center mt-2'>
                <p className='w-40 text-primaryText text-lg font-semibold'>Assign Trip</p>
                <div className='mt-1'><ToggleButton className='' isBig={false} /></div>
              </div>
          </div>
        </section>
    </div>
  )
}
