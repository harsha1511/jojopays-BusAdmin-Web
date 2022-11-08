import React, { useState } from "react"
import { FaPen } from "react-icons/fa"

type EditButtonProps = {
    className?: string
    isEdit?: boolean
    handleEdit?: () => void
}


const EditButton= ({ className, isEdit, handleEdit}: EditButtonProps) => {


    const style = isEdit 
    ? `${className} bg-quaternaryText` 
    : `${className} bg-primaryText`;


    return (
        <div className={`h-7 w-7 mb:w-7 mb:h-7 rounded-full flex justify-center items-center cursor-pointer ${style}`}
        onClick={handleEdit}
        >
            <FaPen className={`scale-75 mb:scale-85`} />
        </div>

    )
}



export default EditButton;