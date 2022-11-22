import React,{useState} from "react";

import './AssignTask.css'
import { Link } from "react-router-dom";
import BackButton from "../../../components/BackButton";

import BusIcon from '../../../assets/images/BusIcon.png';


export const AssignTask = () => {


  const Tasks = [
    {name: "Assign Drivers"},
    {name: "Ticket Price"},
    {name: "Chat"},
    {name: "Wallet"},
    {name: "Notification"},
    {name: "Bus"},
    {name: "Driver"},
    {name: "Profile"},
  ]

  const [addTask, setAddTask] = useState<string | number>()
  console.log(addTask);
  
    return (
      <div>
          <div className="flex flex-col items-center w-[96vw] h-screen">
            <div className="flex justify-around w-full h-32 bg-secondary rounded-br-2xl drop-shadow-xl z-10">
              <div className="flex flex-col justify-center items-center w-40 mt-24">
                <img 
                className="w-28 h-28 rounded-full"
                src="https://images.pexels.com/photos/38554/girl-people-landscape-sun-38554.jpeg?cs=srgb&dl=pexels-pixabay-38554.jpg&fm=jpg"
                alt="" />
                <p className="mt-2 text-greyText">Eric</p>
              </div>
              <div className="flex justify-center items-center h-[80px] w-[30%] rounded-b-[40px] bg-[#2F3142] drop-shadow-xl">
                <p className="text-4xl text-primaryText font-bold tracking-widest">Add New Login</p>
              </div>
              <div className="mt-16">
                <BackButton />
              </div>
            </div>
              <div className="relative flex justify-center items-center  w-[1300px] h-[600px] bg-secondary -mt-20 rounded-b-2xl">
                <div className="absolute">
                  <img src={BusIcon} alt="" className="w-96 h-[450px]" />
                </div>
                <div className="flex flex-col items-center justify-center w-80 h-[420px] mt-4 z-10">
                  <p className="text-2xl font-semibold tracking-wider mb-4">Task</p>
                  <form action="">
                    {Tasks.map(({name}, index) => (
                      <div className="flex items-center mb-4">
                        <label htmlFor="" className="flex justify-end  w-36 text-xl text-primaryText font-semibold">{name}</label>
                        <div className="w-10 h-4 bg-pinkText ml-4"
                        onClick={() => setAddTask(name)}></div>
                      </div>
                    ))
                    }
                  </form>
                </div>
              </div>
          </div>
      </div>
  );
}

export default AssignTask;







      
       
        