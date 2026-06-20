import React from 'react'
import Button from './Button'

function Product({ data }) {

    return (
        <div className='w-full mt-10'>
            <div className='max-w-5xl mx-auto flex justify-between items-center '>
                <h1 className='text-6xl capitalize font-medium'>{data.title}</h1>
                <div className='deti w-1/3 '>
                    <p className='mb-10'>{data.description}</p>
                    <div className='flex gap-7'>
                        {data.live && <Button />}
                        {data.case && <Button title='Case Study' />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
