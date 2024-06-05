'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Bebas_Neue } from 'next/font/google'
import Link from 'next/link'
const bebas = Bebas_Neue({ subsets: ['latin'], weight: '400' })

const Footer = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [review, setReview] = useState("")
    return (
        <div className='bg-gray-800 px-[4vw] xl:px-52 py-8 flex flex-col'>
            <div className=' py-4 flex gap-5 sm:gap-0 justify-between items-center border-b-[0.1rem] border-gray-500 pr-4'>


                <h1 className={`${bebas.className} text-[1.3rem] sm:text-[2rem] leading-[2rem] text-white`}>LET&apos;S CONNECT.</h1>
                <div className='flex items-center justify-center gap-4 sm:gap-8 md:gap-12'>
                    <Link href='https://www.linkedin.com/in/snehansu-behera-314b17258/'><Image src='/linkedin-img.png' alt='socials' width={500} height={500} className='w-[1rem] sm:w-[1.2rem]' /></Link>
                    <Link href='https://github.com/SnehansuBehera'><Image src='/github-img.png' alt='socials' width={500} height={500} className='w-[1rem] sm:w-[1.2rem]' /></Link>
                    <Link href='https://x.com/SnehansuBehera1'><Image src='/twitter-img.png' alt='socials' width={500} height={500} className='w-[1rem] sm:w-[1.2rem]' /></Link>
                    <Link href='/'><Image src='/email-img.png' alt='socials' width={500} height={500} className='w-[1rem] sm:w-[1.2rem]' /></Link>
                    <Link href='https://discord.com/channels/@me'><Image src='/discord.png' alt='socials' width={500} height={500} className='w-[1rem] sm:w-[1.2rem]' /></Link>
                </div>
            </div>
            <div className='flex items-center justify-start sm:justify-center gap-4 md:gap-8 lg:gap-12 xl-[6rem] 2xl:gap-[10rem] px-2 sm:px-6 lg:px-4 xl:px-6 text-white border-b-2 border-slate-600'>

                <Image src='/footer-img.png' alt='footer-img' width={500} height={500} className='hidden sm:block sm:w-[25rem] md:w-[15rem] rounded-full grayscale' />

                <div className='border-none sm:border-solid sm:border-l-2 border-x-slate-600 py-8 sm:pl-12 lg:pl-24'>
                    <h2 className={`${bebas.className} text-[1.5rem] sm:text-[2rem]`}>Feedback Time!!</h2>
                    <p className='text-[0.8rem] text-gray-400 my-2'>Your review will help me grow</p>
                    <form className='flex flex-col my-6 gap-4 items-between justify-center'>
                        <div className='flex gap-2 items-center'>

                            <input type="name" id='name' value={name} className='py-2 bg-transparent border-b-[0.1rem] border-gray-500 w-[80vw] sm:w-[18rem] md:w-[20rem]' placeholder='Full Name' onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div>
                            <input type="email" id='email' value={email} className='py-2 bg-transparent border-b-[0.1rem] border-gray-500 w-[80vw] sm:w-[18rem] md:w-[20rem]' placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div>
                            <input type="text" id='review' value={review} className='py-2 bg-transparent border-b-[0.1rem] border-gray-500 w-[80vw] sm:w-[18rem] md:w-[20rem]' placeholder='Write in brief' onChange={(e) => setReview(e.target.value)} />
                        </div>
                        <button className='text-white px-4 py-2 w-[6rem] border-2 border-gray-600'>Submit</button>
                    </form>
                </div>
            </div>
            <div className='flex items-end justify-center gap-2'>
                <Image src='/copyright.png' alt='copyright' width={500} height={500} className='w-[1.1rem]' />
                <p className=' text-gray-400 text-[0.8rem] mt-4'>2024 Snehansu | Portfolio</p>
            </div>




        </div>
    )
}

export default Footer
