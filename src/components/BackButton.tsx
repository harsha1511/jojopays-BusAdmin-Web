import React from "react";

import { MdArrowBack } from "react-icons/md"
import {  useNavigate } from 'react-router-dom';

type BackButtonProps = {
    className?: string
}

const BackButton = (className:BackButtonProps) => {
    const navigate = useNavigate();
    const GoBack = () => {
        navigate(-1);
    }
    return(
        <div className={`z-10 flex justify-center items-center rounded-3xl w-9 h-8 border-[3px] border-tertiary`}>
           <button onClick={GoBack}><MdArrowBack  className="scale-125"/></button>
        </div>
    )
}


export default BackButton;