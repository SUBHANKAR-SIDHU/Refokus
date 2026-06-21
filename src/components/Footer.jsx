import React from 'react'

function Footer() {
    return (
        <div className='w-full mt-20 pb-10'>
            <div className='max-w-4xl mx-auto flex gap-10'>
                <div className='basis-1/2 '>
                    <h1 className='text-9xl  font-semibold leading-none tracking-tight'>Refokus.</h1>
                </div>
                <div className='basis-1/2  flex'>
                    <div className='basis-1/3'>
                        <h4 className='mb-10 text-zinc-300'>Socials</h4>
                        {["Instagram", "Twitter (X?)", "LinkedIn"].map((item, idx) => (
                            <a href="#" className='block text-sm text-zinc-400 mt-2'>{item}</a>
                        ))}
                    </div>
                    <div className='basis-1/3'>
                        <h4 className='mb-10 text-zinc-300'>Sitemap</h4>
                        {["home", "work", "careers","contact"].map((item, idx) => (
                            <a href="#" className='block text-sm capitalize text-zinc-400 mt-2'>{item}</a>
                        ))}
                    </div>
                    <div className='basis-1/2 flex flex-col items-end justify-end'>
                        <p className='text-right'>Refokus is pioneering digital agency driven by design and empowered by technology.</p>
                        <img className='w-32' src="https://cdn.prod.website-files.com/62b33d4be1f1d95580bb1e35/6569f8330f10aad40f019896_Badge_Enterprise_Partner_Blue%402x.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
