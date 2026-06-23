import React, { useState } from 'react'
import Product from './Product'
import { motion } from 'motion/react'
import arqitel from "/videos/arqitel.webm"
import ttr from "/videos/ttr.webm"
import yir from "/videos/yir.webm"
import yahoo from "/videos/yahoo.webm"

function Products() {
    const productsData = [
        {
            title: "Arqitel",
            description:
                "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
            live: true,
            case: false,
        },
        {
            title: "TTR",
            description:
                "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
            live: true,
            case: false,
        },
        {
            title: "YIR 2022",
            description:
                "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",
            live: true,
            case: true,
        },
        {
            title: "Yahoo!",
            description:
                "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",
            live: true,
            case: true,
        },
    ]

    const [pos, setPos] = useState(0);

    const mover = (val) => {
        setPos(val * 18)
    }

    return (
        <div className='mt-20  relative  '>
            {productsData.map((elem, idx) => (
                <Product key={idx} data={elem} count={idx} mover={mover} />
            ))}
            <div className='w-full h-full absolute top-0 pointer-events-none  '>
                <motion.div initial={{ y: pos }} animate={{ y: pos + 'rem' }} transition={{ ease: [0.76, 0, 0.24, 1] }} className='window w-1/3 top-0 h-72 left-[44%] translate-x-[-50%] absolute overflow-hidden'>
                    <motion.div animate={{ y: -pos + `rem` }} transition={{ ease: [0.76, 0, 0.24, 1] }} className='w-full h-full top-0  '>
                        {pos === 0 && (
                            <video autoPlay muted loop>
                                <source src={arqitel} type="video/webm" />
                                Your browser does not support the video tag.
                            </video>
                        )}
                    </motion.div>
                    <motion.div animate={{ y: -pos + `rem` }} transition={{ ease: [0.76, 0, 0.24, 1] }} className='w-full h-full top-0'>
                        <video autoPlay muted loop>
                                <source src={ttr} type="video/webm" />
                                Your browser does not support the video tag.
                            </video>
                    </motion.div>
                    <motion.div animate={{ y: -pos + `rem` }} transition={{ ease: [0.76, 0, 0.24, 1] }} className='w-full h-full top-0 '>
                        <video autoPlay muted loop>
                                <source src={yir} type="video/webm" />
                                Your browser does not support the video tag.
                            </video>
                    </motion.div>
                    <motion.div animate={{ y: -pos + `rem` }} transition={{ ease: [0.76, 0, 0.24, 1] }} className='w-full h-full top-0'>
                        <video autoPlay muted loop>
                                <source src={yahoo} type="video/webm" />
                                Your browser does not support the video tag.
                            </video>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}

export default Products
