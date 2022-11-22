import React,{useState} from "react";
import BackButton from "../../components/BackButton";


const Bus = () => {

  // const Box:number[] = [1,2,3,4,5,6,7,9,10,11,12,13,14,15]


  const [boxValue, setBoxValue] = useState<number>(15)
  const [add, setAdd] = useState<number[]>([])

  const uniqueIndex:number[] = []


  const handleAdd = (index:number) => {   
    if(add.filter((i:number) => i === index)){
      setAdd((_add:any) => [..._add, index]);
    }    
  }

  
  console.log(add, "old")




  return <div>
    <div className="flex flex-col justify-start items-center w-[96vw] h-screen">
      <div className='z-10 flex justify-center items-center w-[600px] h-20 bg-secondary rounded-b-3xl drop-shadow-2xl'>
        <p className='font-bold tracking-wider text-3xl text-primaryText'>Add New Bus</p>
      </div>
      <div className='flex flex-col items-center w-[1300px] h-[600px] rounded-3xl bg-secondary bg-cover bg-center bg-no-repeat -mt-4'>
        <div className="flex justify-end items-center pr-8 w-[100%] h-20">
          <BackButton />
        </div>
        <div className="flex flex-col items-center w-[700px] h-96 mt-8">
            <p className="text-primaryText pt-4 font-semibold">Select Seating Arrangement</p>
            <div className="flex justify-around items-center h-10 mt-8 w-full">
                <div className="w-10 h-3 rounded-3xl bg-primary"></div>
                <div className="w-10 h-3 rounded-3xl bg-primary"></div>
            </div>
            <div className="w-[85%] h-[200px] bg-primary rounded-xl -mt-2 rounded-l-[60px] shadow-inner">
              <div className="flex flex-col items-end ml-24 mt-6">
                  <div className="flex gap-1 mr-4 -mt-2">
                  {[...Array(boxValue)].map((i, index) => (
                    <div className='w-4 h-4 bg-greyText ml-3 mt-2 rounded-sm hover:bg-blueText'
                    onClick={() => handleAdd(index)}>
                    </div>
                  ))}
                  </div>
              </div>
            </div>
            <div className="flex justify-around items-center h-10 -mt-2 w-full">
                <div className="w-10 h-3 rounded-3xl bg-primary"></div>
                <div className="w-10 h-3 rounded-3xl bg-primary"></div>
            </div>
        </div>
        {boxValue}
      </div>
    </div>
  </div>;
};

export default Bus;