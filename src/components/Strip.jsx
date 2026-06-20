import React from 'react'

function Strip({data}) {
    return (
        <div className='px-4 py-3 border border-zinc-500 w-52 flex  justify-between items-center'>
            <img className='h-4' src={data.url} alt="" />
            <span className='font-semibold'>{data.number}</span>
        </div>
    )
}

export default Strip
