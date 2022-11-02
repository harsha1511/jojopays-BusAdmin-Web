import React from "react";

import './AssignTask.css'
import { Link } from "react-router-dom";
import BackButton from "../../../components/BackButton";


export const AssignTask = () => {
    return (



    <div className="h-[100%] flex-grid  grid-flow-row w-[100%] p-0">
      <div className=" flex fixed text-primaryText font-bold z-10  text-4xl ml-[33%] items-center h-[80px] w-[30%] justify-around rounded-b-[40px] bg-[#2F3142] shadow-xl">
        <h1>Add New Login</h1>
      </div>
      <div className='flex justify-center items-center w-[96vw] h-screen'>
        <div className='flex flex-col items-center w-[1300px] h-[600px] rounded-3xl bg-secondary bg-add-driver-cover bg-cover bg-center bg-no-repeat'>
            <div className="flex justify-end items-center mt-4 pr-8 w-[100%] h-20">
                <BackButton />
            </div>
      {/* <div className='flex justify-center items-center w-[96vw] h-screen'>
      <div className='flex  w-[1300px] h-[600px] bg-add-driver-cover bg-secondary rounded-2xl'> */}



<div className="closediv">
      <div className="pic">
        <img  className="pic-img" src="https://images.pexels.com/photos/38554/girl-people-landscape-sun-38554.jpeg?cs=srgb&dl=pexels-pixabay-38554.jpg&fm=jpg" alt="userphoto" />
        

</div>

<div className="task">

    <div className="from">
      <div className="task-text">

      <h2>Tasks</h2>
      </div>
   
    
    <div className="Assign-Drivers">
    
   <label >Assign Drivers</label><label className="switch">
  <input type="checkbox"/>
  <span className="slider round"></span>
</label>
   <br/>
   </div>
   <div className="Price">
   <label >Ticket Price</label><label className="switch">
  <input type="checkbox"/>
  <span className="slider round"></span>
</label>
   <br/>
   </div>
   <div className="Chats">
   <label >Chats</label><label className="switch">
  <input type="checkbox"/>
  <span className="slider round"></span>
</label>
   <br/>
   </div>
   <div className="Wallet">
   <label >Wallet</label><label className="switch">
  <input type="checkbox"/>
  <span className="slider round"></span>
</label>
   <br/>
   </div>
   <div className="Notification">
   <label >Notification</label><label className="switch">
  <input type="checkbox"/>
  <span className="slider round"></span>
</label>
   <br/>
   </div>
   <div className="Bus">
   
   <label>Bus</label><label className="switch">
  <input type="checkbox"/>
  <span className="slider round"></span>
  </label>
  <br/>
   </div>
   <div className="Drivers">
   <label >Drivers</label><label className="switch">
  <input type="checkbox"/>
  <span className="slider round"></span>
  </label>
  <br/>
  </div>
   <div className="profi">
   <label >profile</label><label className="switch">
  <input type="checkbox"/>
  <span className="slider round"></span>
  </label>
  <br/>
  </div>


  
                 </div>
              <div className="aaa">
    < Link to ="/create-login">
              <button className=" text-white ml-[880px] -mt-14  mr-[5px] bg-primaryText text-primaryText font-bold w-[140px] py-2 px-4 rounded-full">
                    Next
                  </button>
                  </Link>
                 
                 </div>
                 </div>
                 </div>
                 
                 </div>
                 
                 </div>
                
                 </div>

  );
}

export default AssignTask;







      
       
        