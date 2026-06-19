import React from 'react'
import { PiArrowBendDownRightThin } from "react-icons/pi";

function Button() {
    return (
        <div className='flex items-center  gap-2 rounded-full px-3 py-1.5 text-black bg-zinc-200 '>
            <h1>Start a Project</h1>
            <span className='mt-0.5'><PiArrowBendDownRightThin/></span>
        </div>
    )
}

export default Button
