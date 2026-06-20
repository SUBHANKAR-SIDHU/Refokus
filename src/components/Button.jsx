import React from 'react'
import { PiArrowBendDownRightThin } from "react-icons/pi";

function Button({title="Start a Project"}) {
    return (
        <div className='max-w-33.75 flex justify-between items-center gap-2 rounded-full h-7 text-black bg-zinc-200 '>
            <h1 className='ml-2' >{title}</h1>
            <span className='mt-0.5 mr-1'><PiArrowBendDownRightThin/></span>
        </div>
    )
}

export default Button
