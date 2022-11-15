import React,{useState} from 'react'
import BackButton from '../../../components/BackButton';
import { WalletNavBar } from '../components/WalletNavBar'



export const SendAmount = () => {

   const StandardAmount = [100,500,1000,10000];

  const [amount, setAmount] = useState<number>();


  return (
    <div className='flex w-[96vw] h-screen'>
      <section className='flex flex-col items-center w-[80%]'>
        <div className='flex flex-col items-center w-[900px] h-72 mt-14 bg-quaternary rounded-sm rounded-br-xl rounded-tl-[30px] drop-shadow-lg pt-4'>
          <div className='flex flex-col items-center justify-start'>
            <img
            className='w-16 h-16 rounded-full -mt-12' 
            src="https://shotkit.com/wp-content/uploads/2021/06/Cool-profile-picture-Zoom.jpg" alt="" />
            <p className='text-sm text-greyText'>Name</p>
          </div>
          <div className='-mt-10 mr-8 flex justify-end w-full'>
            <BackButton />
          </div>
                <p className='mt-4'>Send Money</p>
                <input
                placeholder='Enter Amount'
                className='w-[80%] mt-6 h-[45px] bg-primary px-4 py-1 rounded-md border-2 border-blueText focus:border-blueText focus:border-2'
                type="number" name="" id="" />
                <div className='flex mr-[300px] mt-3'>
                <p className=''>Standard Amount:</p>
                {StandardAmount.map((number) => (
                    <p
                    className='ml-4 p-[2px] px-2 rounded-md bg-secondary text-primaryText'
                    onClick={() =>setAmount(number)}
                    >
                    ${number}
                    </p>
                ))}      
                </div>
                <div className='pb-2 mt-2 px-4 bg-quaternary drop-shadow-xl rounded-sm rounded-tl-xl rounded-br-3xl'>
                <input type="text" name="" id="" placeholder='Reason...'
                className='mt-4 w-96 h-10 bg-quaternary border-2 border-blueText rounded-3xl px-4  focus:border-blueText focus:border-2 ' />
                </div>
        </div>
        <div className='flex justify-between items-center w-[900px] h-40 bg-secondary drop-shadow-xl rounded-md mt-3'>
          <div className='relative ml-28 -mt-12'>
            <div className='absolute z-0 w-40 h-12 bg-primaryText blur-[6px] rounded-3xl'></div>
            <p className='absolute flex justify-center items-center z-20 text-2xl w-40 h-12 border-2 border-primaryText bg-secondary rounded-3xl'>Wallet</p>
          </div>
          <p className='text-greyText text-2xl pl-36'>or</p>
          <div className='flex flex-col justify-center items-center w-[40%] h-[90%] bg-quaternary mr-4 rounded-sm rounded-tl-lg rounded-br-3xl'>
            <p>UPI</p>
            <div className='flex items-center mt-2'>
              <div className='w-4 h-4 bg-primary border-2 border-primaryText mr-2 rounded-full'></div>
              <p>1526 1354684 13156</p>
            </div>
            <button  className="mt-3 px-10 py-[5px] rounded-tl-xl rounded-br-xl rounded-bl-sm rounded-tr-sm bg-primaryText">Add New UPI</button>
          </div>         
        </div>
        <input type="password" 
            className='py-4 px-8 mt-3 h-16 w-44 rounded-full bg-secondary border-2 border-blueText focus:border-2 focus:border-blueText text-3xl'/>
            <p className='mt-2 tracking-wide text-greyText'>Password</p>
            <button className='mt-2 p-4 px-14 bg-quaternary rounded-md rounded-br-3xl rounded-tl-3xl'>
                Send   
            </button>
      </section>
      <section className='w-[20%]'>
        <WalletNavBar pageName='Send' />
      </section>
    </div>
  )
}
