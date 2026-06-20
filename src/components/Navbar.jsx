import React from 'react'
import Button from './Button'

function Navbar() {
    return (
        <div className='max-w-4xl mx-auto'>
            <nav className='flex gap-30 py-4 justify-between items-center text-sm font-extralight'>
                <div className='flex gap-16 '>
                    <img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" />
                    <div className='flex gap-10  '>
                        {["Home", "Work", "Culture", "", "News"].map((elem, index) => (
                            <div key={index}>
                                <a className='flex items-center gap-1' href="#">
                                    {elem == 0 && <h1 className='h-4 mt-1 border-r text-zinc-600 w-0.5'></h1>}
                                    {index == 1 ? <span style={{ boxShadow: "0 0 0.25em #00FF19" }} className='inline-block w-1 h-1 bg-green-400 backdrop-brightness-95 rounded-full'></span> : ""}
                                    {elem}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
                <Button />
            </nav>
            <hr className='text-zinc-600 w-full ' />
        </div>
    )
}

export default Navbar
