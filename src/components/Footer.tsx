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
        <div className='bg-gray-800 px-52 py-8 flex flex-col'>
            <div className='py-4 flex justify-between items-center border-b-[0.1rem] border-gray-500 pr-4'>

                <h1 className={`${bebas.className} text-[2rem] leading-[2rem] text-white`}>LET'S CONNECT.</h1>
                <div className='flex items-center justify-center gap-12'>
                    <Link href='/'><Image src='/linkedin-img.png' alt='socials' width={500} height={500} className='w-[1.2rem]' /></Link>
                    <Link href='/'><Image src='/github-img.png' alt='socials' width={500} height={500} className='w-[1.2rem]' /></Link>
                    <Link href='/'><Image src='/twitter-img.png' alt='socials' width={500} height={500} className='w-[1.2rem]' /></Link>
                    <Link href='/'><Image src='/email-img.png' alt='socials' width={500} height={500} className='w-[1.2rem]' /></Link>
                </div>
            </div>
            <div className='flex items-center justify-center gap-[10rem] px-6 text-white border-b-2 border-slate-600'>
                <div className='py-8'>
                    <Image src='/footer-img.jpg' alt='footer-img' width={500} height={500} className='w-[15rem] rounded-full grayscale' />
                </div>
                <div className='border-l-2 border-x-slate-600 py-8 pl-24'>
                    <h2 className={`${bebas.className} text-[2rem]`}>Feedback Time!!</h2>
                    <p className='text-[0.8rem] text-gray-400 my-2'>Your review will help me grow</p>
                    <form className='flex flex-col my-6 gap-4 items-between justify-center'>
                        <div className='flex gap-2 items-center'>

                            <input type="name" id='name' value={name} className='py-2 bg-transparent border-b-[0.1rem] border-gray-500 w-[20rem]' placeholder='Full Name' onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div>
                            <input type="email" id='email' value={email} className='py-2 bg-transparent border-b-[0.1rem] border-gray-500 w-[20rem]' placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div>
                            <input type="text" id='review' value={review} className='py-2 bg-transparent border-b-[0.1rem] border-gray-500 w-[20rem]' placeholder='Write in brief' onChange={(e) => setReview(e.target.value)} />
                        </div>
                    </form>
                </div>
            </div>
            <p className='mx-auto text-gray-400 text-[0.8rem] mt-4'>@ 2024 Snehansu | Portfolio</p>



        </div>
    )
}

export default Footer
