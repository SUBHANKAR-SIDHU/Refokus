import React, { useState } from 'react'
import Button from './Button'

function Product({ data, count, mover }) {
    const colors = ['#FDE68A', '#BFDBFE', '#C7F9CC', '#FBCFE8'];
    const [bg, setBg] = useState(null);

    const handleMouseEnter = () => {
        let idx = 0;
        if (typeof mover === 'function') {
            const res = mover(count);
            idx = Number.isInteger(res) ? res : count;
        }
        const color = colors[Math.abs(idx) % colors.length];
        setBg(color);
    }

    const handleMouseLeave = () => setBg(null);

    return (
        <div className="w-full h-72 pt-10" style={{ backgroundColor: bg }}>
            <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='max-w-5xl mx-auto flex justify-between items-center  '>
                <h1 className='text-6xl capitalize font-medium tracking-tighter'>{data.title}</h1>
                <div className='w-1/3 '>
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
