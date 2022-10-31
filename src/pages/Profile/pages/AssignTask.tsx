import React from "react";

import './AssignTask.css'


export const AssignTask = () => {
    return (
    <div className="h-[100%] flex-grid  grid-flow-row w-[100%] p-0">
      <div className=" flex fixed text-primaryText font-bold z-10  text-4xl ml-[33%] items-center h-[80px] w-[30%] justify-around rounded-b-[40px] bg-[#2F3142] shadow-xl">
        <h1>Add New Login</h1>
      </div>
      <div className="boxicon">
        <div className="bg-contain bg-center bg-no-repeat -mt-6 p-5 ml-24 w-[100%] bg-add-driver-cover h-[90%] ">
       
        <div className="pic">
        <img src="photo.jpeg" alt="userphoto" />
        

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
  <div className="aaa">
    <a href="/assign-drivers">
              <button className="mt-[5px] text-white ml-[100%] mb-[30px] bg-primaryText text-primaryText font-bold w-[140px] py-2 px-4 rounded-full">
                    Next
                  </button>
                  </a>
                 
                
              </div>
   </div>

</div>
     
     
     
     
     </div>  
     

    </div>
    

</div>

  );
}

export default AssignTask;
