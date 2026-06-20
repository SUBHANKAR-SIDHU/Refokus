import React from 'react'

function Marquee({data}) {
    
    return (
        <div className='flex w-full py-5 gap-25 '>
            {data.map((url,idx)=>(
                <img className='w-[8vw]' src={url} alt="" />
            ))}
            {data.map((url,idx)=>(
                <img className='w-[8vw]' src={url} alt="" />
            ))}
        </div>
    )
}

export default Marquee
