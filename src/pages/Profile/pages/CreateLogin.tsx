import React,{useState} from "react";
import BackButton from "../../../components/BackButton";
import { Link } from "react-router-dom";

export const CreateLogin = () => {

    const [loading, setLoading] =useState(true);
    const Startloading = () => {
        setLoading(!loading)
    }
    console.log(loading);
    

    return (
    <div className="h-[100%] flex-grid  grid-flow-row w-[100%] p-0">
      <div className=" flex fixed text-primaryText font-bold z-10  text-4xl ml-[34%] items-center h-[80px] w-[30%] justify-around rounded-b-[40px] bg-[#2F3142] shadow-xl">
            <h1>Add New Login</h1>
        </div>
        <div className='flex justify-center items-center w-[96vw] h-screen'>
        <div className='flex flex-col items-center w-[1300px] h-[600px] rounded-3xl bg-secondary bg-add-driver-cover bg-cover bg-center bg-no-repeat'>
            <div className="flex justify-end items-center pr-8 w-[100%] h-20">
                <BackButton />
            </div>
            <form className="flex flex-col items-center pt-6 w-[40%] h-[480px] mt-4">
                <img src="https://images.pexels.com/photos/38554/girl-people-landscape-sun-38554.jpeg?cs=srgb&dl=pexels-pixabay-38554.jpg&fm=jpg" 
                alt="" 
                className="w-24 h-24 rounded-full "/>
                <p className="text-greyText font-semibold">Sugan</p>
                <div className="flex flex-col items-center mt-4">
                        <label htmlFor="" className="text-lg font-bold tracking-wider text-primaryText">login ID</label>
                        <input type="text" value="sugan8976" className="w-96 h-12 bg-quaternary mt-2 rounded-2xl shadow-xl pl-4 outline-none "/>
                        <label htmlFor="" className="text-lg font-bold tracking-wider text-primaryText mt-4">password</label>
                        <input type="password" className="w-96 h-12 bg-quaternary mt-2 rounded-2xl shadow-xl pl-4 outline-none "/>
                        <p className="mt-2 text-greyText">(Auto Generated ID & Password) <span className="text-primaryText cursor-pointer">tap to change</span></p>
                        <Link to="/loader">
                            <button
                            className="mt-8 px-8 py-4 rounded-3xl text-2xl font-bold tracking-wider bg-primaryText"
                            onClick={Startloading}
                            >
                                Create
                            </button>
                        </Link>
                </div>
            </form>
            <div>
            </div>
        </div>
    </div>  
    </div>
    



  );
}

export default CreateLogin;
