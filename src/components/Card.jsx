import { motion } from 'motion/react';
import React from 'react'
import { BsArrowRight } from "react-icons/bs";

function Card({ width, start, para, hover="false" }) {
    return (
        <motion.div whileHover={{ backgroundColor: hover === "true" && "#7443ff", padding: "20px" }} className={`bg-zinc-800 w-full rounded-xl p-3  ${width} min-h-80 flex flex-col justify-between`}>
            <div>
                <div className='flex justify-between'>
                    <h3 className='font-medium'>Whatever is heading</h3>
                    <BsArrowRight />
                </div>
                <h1 className='text-2xl font-semibold mt-5'>Whatever Heading</h1>
            </div>
            <div>
                {start && <>
                    <h1 className='text-4xl font-semibold'>Start a Project</h1>
                    <button className='rounded-full mt-3 w-28 h-9 border border-zinc-200'>Contact Us</button>
                </>
                }
                {para && <>
                    <p className='text-sm text-zinc-500'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, voluptates?</p>
                </>}
            </div>
        </motion.div>
    )
}

export default Card
