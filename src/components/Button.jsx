import React from 'react'
import { PiArrowBendDownRightThin } from "react-icons/pi";

function Button({ title = "Start a Project" }) {
    return (
        <button class="menu__btn btn max-w-36 flex  text-black bg-zinc-200 ">
            <div class="btn__label  ">
                <div class="btn__main flex">
                    <h1>{title}</h1>
                    <h1 className='ml-1'><PiArrowBendDownRightThin /></h1>
                </div>
                <div class="btn__alt flex">
                    <h1>{title}</h1>
                    <h1 className='ml-1'><PiArrowBendDownRightThin /></h1>
                </div>
            </div>
        </button>
    )
}

export default Button
