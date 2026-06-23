import { motion } from 'motion/react'
import React from 'react'

function Marquee({ data, diraction }) {


    return (
        <div className="flex w-full overflow-hidden">
            <motion.div initial={{ x: diraction === "left" ? "0" : "-100%" }} animate={{ x: diraction === "left" ? "-100%" : "0" }} transition={{ ease: "linear", duration: 15 ,repeat:Infinity }}
                className="flex shrink-0 gap-20 py-8 pr-24"
            >
                {data.map((url, index) => (
                    <img key={index} src={url} className="w-[8vw]" />
                ))}
            </motion.div>
            <motion.div initial={{ x: diraction === "left" ? "0" : "-100%" }} animate={{ x: diraction === "left" ? "-100%" : "0" }} transition={{ ease: "linear", duration: 15 ,repeat:Infinity }}
                className="flex shrink-0 gap-20 py-8 pr-24"
            >
                {data.map((url, index) => (
                    <img key={index} src={url} className="w-[8vw]" />
                ))}
            </motion.div>

        </div>
    )
}

export default Marquee
