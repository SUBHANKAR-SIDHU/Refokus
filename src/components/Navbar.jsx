import React from 'react'

function Navbar() {
    return (
        <div className='max-w-5xl mx-auto'>
            <nav className='flex gap-30 p-5 items-center text-sm font-extralight'>
                <img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" />
                <div className='flex gap-10 '>
                    {["Home", "Work", "Contact", "", "Vlog"].map((elem, index) => (
                        <div>
                            {elem == 0 && <h1 className='h-6 border-r text-zinc-600 w-0.5'></h1>}
                            {elem}
                            {elem == 1 ? <h1 className='w-1 h-1 bg-green-400 backdrop-brightness-95 rounded-full'>lfa</h1> : ""}
                        </div>
                    ))}
                </div>
            </nav>
            <hr className='text-zinc-600 w-full ' />
        </div>
    )
}

export default Navbar
