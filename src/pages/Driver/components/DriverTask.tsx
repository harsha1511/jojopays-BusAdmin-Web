import React,{useState} from "react";

import { Link } from "react-router-dom";
import BackButton from "../../../components/BackButton";

import BusIcon from '../../../assets/images/BusIcon.png';
import { ToggleButton } from "../../../components/ToggleButton";


export const DriverTask = () => {


  interface TaskProps {
    name: string
    id: number
  }

  const Tasks:TaskProps[] = [
    {name: "Assign Drivers", id: 1},
    {name: "Ticket Price", id: 2},
    {name: "Chat", id: 3},
    {name: "Wallet", id: 4},
    {name: "Notification", id: 5},
    {name: "Bus", id: 6},
    {name: "Driver", id: 7},
    {name: "Profile", id: 8},
  ]

  const [addTask, setAddTask] = useState<string[]>([])
  console.log(addTask);

  const handleTask = (name:string) => {
    if(addTask.includes(name)){
      setAddTask(addTask.filter((n:string) => n !== name))
    }else {
      setAddTask(addTask => [...addTask, name])
    }
  }

  console.log("task assigned", addTask)
  
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
              <div className='z-10 flex justify-center items-center w-[35%] h-20 bg-secondary rounded-b-3xl drop-shadow-2xl'>
                <p className="text-2xl text-primaryText font-bold tracking-widest">Add New driver</p>
              </div>
              <div className="mt-16">
                <BackButton />
              </div>
            </div>
              <div className="relative flex justify-center items-center  w-[1300px] h-[600px] bg-secondary -mt-20 rounded-b-2xl">
                <div className="absolute">
                  <img src={BusIcon} alt="" className="w-96 h-[450px] mt-10" />
                </div>
                <form action="" className="flex flex-col items-center z-10 w-full">
                <div className="flex flex-col items-center justify-center w-80 h-[420px] mt-4">
                  <p className="text-2xl font-semibold tracking-wider mb-4 mt-6">Task</p>
                    {Tasks.map(({name, id}, index) => (
                      <div className="flex items-center justify-center mb-4">
                        <label htmlFor="" className="flex justify-end  w-36 text-xl text-primaryText font-semibold">{name}</label>
                        <ToggleButton className="ml-8 mt-1" isBig={true} ToggleSwitch={() => handleTask(name)} />
                      </div>
                    ))
                    }
                </div>
                <div className="flex justify-end w-full">
                  <Link to={'/create-driver'} className=" bg-primaryText -mb-4 mr-40 px-8 py-2 rounded-3xl text-xl font-semibold" >Next</Link>
                </div>
                </form>
              </div>
          </div>
      </div>
  );
}

export default DriverTask;







      
       
        